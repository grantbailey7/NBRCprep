import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function main() {
  // Counts
  const flashcards = await prisma.flashcard.count()
  const miniQ = await prisma.miniExamQuestion.count()
  const fullQ = await prisma.fullExamQuestion.count()
  const miniExams = await prisma.miniExam.count()
  const fullExams = await prisma.fullExam.count()
  const blogs = await prisma.blogPost.count()
  const seoPages = await prisma.seoPage.count()

  console.log('=== Content Counts ===')
  console.log('Flashcards:', flashcards)
  console.log('Mini Exam Questions:', miniQ)
  console.log('Full Exam Questions:', fullQ)
  console.log('Mini Exams:', miniExams)
  console.log('Full Exams:', fullExams)
  console.log('Blog Posts:', blogs)
  console.log('SEO Pages:', seoPages)
  console.log('Total items to audit:', flashcards + miniQ + fullQ)

  // Dump flashcards
  const allFlashcards = await prisma.flashcard.findMany({
    include: { division: { select: { slug: true } } },
    orderBy: [{ division: { slug: 'asc' } }, { orderIndex: 'asc' }],
  })

  const flashcardData = allFlashcards.map(f => ({
    id: f.id,
    division: f.division.slug,
    orderIndex: f.orderIndex,
    front: f.question,
    back: f.answer,
  }))

  // Split flashcards into chunks of 100
  const fcChunkSize = 100
  for (let i = 0; i < flashcardData.length; i += fcChunkSize) {
    const chunk = flashcardData.slice(i, i + fcChunkSize)
    fs.writeFileSync(`prisma/audit-fc-${Math.floor(i / fcChunkSize)}.json`, JSON.stringify(chunk, null, 2))
  }
  console.log(`\nFlashcard chunks: ${Math.ceil(flashcardData.length / fcChunkSize)}`)

  // Dump mini exam questions
  const allMiniExams = await prisma.miniExam.findMany({
    include: {
      questions: { orderBy: { questionIndex: 'asc' } },
      division: { select: { slug: true } },
    },
    orderBy: [{ division: { slug: 'asc' } }, { examIndex: 'asc' }],
  })

  const miniQData: any[] = []
  for (const exam of allMiniExams) {
    for (const q of exam.questions) {
      miniQData.push({
        id: q.id,
        division: exam.division.slug,
        exam: `${exam.division.slug} Mini ${exam.examIndex}`,
        qIndex: q.questionIndex,
        questionText: q.questionText,
        choices: q.choices,
        correctChoice: q.correctChoice,
        explanationCorrect: q.explanationCorrect,
        explanationWrong: q.explanationWrong,
        topic: q.topic,
      })
    }
  }

  const mqChunkSize = 100
  for (let i = 0; i < miniQData.length; i += mqChunkSize) {
    const chunk = miniQData.slice(i, i + mqChunkSize)
    fs.writeFileSync(`prisma/audit-mq-${Math.floor(i / mqChunkSize)}.json`, JSON.stringify(chunk, null, 2))
  }
  console.log(`Mini exam question chunks: ${Math.ceil(miniQData.length / mqChunkSize)}`)

  // Dump full exam questions
  const allFullExams = await prisma.fullExam.findMany({
    include: {
      questions: { orderBy: { questionIndex: 'asc' } },
      division: { select: { slug: true } },
    },
    orderBy: [{ division: { slug: 'asc' } }, { examIndex: 'asc' }],
  })

  const fullQData: any[] = []
  for (const exam of allFullExams) {
    for (const q of exam.questions) {
      fullQData.push({
        id: q.id,
        division: exam.division.slug,
        exam: `${exam.division.slug} Full ${exam.examIndex}`,
        qIndex: q.questionIndex,
        questionText: q.questionText,
        choices: q.choices,
        correctChoice: q.correctChoice,
        explanationCorrect: q.explanationCorrect,
        explanationWrong: q.explanationWrong,
        topic: q.topic,
      })
    }
  }

  const fqChunkSize = 100
  for (let i = 0; i < fullQData.length; i += fqChunkSize) {
    const chunk = fullQData.slice(i, i + fqChunkSize)
    fs.writeFileSync(`prisma/audit-fq-${Math.floor(i / fqChunkSize)}.json`, JSON.stringify(chunk, null, 2))
  }
  console.log(`Full exam question chunks: ${Math.ceil(fullQData.length / fqChunkSize)}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
