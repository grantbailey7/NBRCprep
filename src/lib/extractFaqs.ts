export interface FaqItem {
  question: string
  answer: string
}

export function extractFaqsFromHtml(html: string, maxItems = 5): FaqItem[] {
  const faqs: FaqItem[] = []
  const regex = /<h[23][^>]*>(.*?)<\/h[23]>\s*([\s\S]*?)(?=<h[23]|$)/gi
  let match
  while ((match = regex.exec(html)) !== null && faqs.length < maxItems) {
    const question = match[1].replace(/<[^>]+>/g, '').trim()
    const answerHtml = match[2].trim()
    const answer = answerHtml
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 300)
    if (question.length > 10 && answer.length > 30) {
      const q = question.endsWith('?') ? question : `What is ${question}?`
      faqs.push({ question: q, answer })
    }
  }
  return faqs
}

export function buildFaqSchema(faqs: FaqItem[]) {
  if (faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
