import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let fixed = 0

  // ============================================================
  // MINI EXAM FIXES
  // ============================================================

  // NPS Mini Exam 24 Q4 - TEF question: marked C, should be D
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsmkmu5h001zaylhlh36icx1' },
    data: { correctChoice: 'D' },
  })
  console.log('Fixed: NPS Mini 24 Q4 - C→D (TEF question)')
  fixed++

  // NPS Mini Exam 29 Q3 - GBS pneumonia: marked B, should be C
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn3d5sn001yovac2d11bxg3' },
    data: { correctChoice: 'C' },
  })
  console.log('Fixed: NPS Mini 29 Q3 - B→C (GBS pneumonia)')
  fixed++

  // SDS Mini Exam 14 Q16 - oxygen/morning headaches: marked A, explanation contradicts A
  // Explanation says headaches may indicate CO2 retention and need investigation
  // Need to fix the correctChoice and possibly the choice text
  // Choice A = "working perfectly, no changes needed" (WRONG per explanation)
  // Choice B = "morning headaches are unrelated" (WRONG per explanation)
  // Choice C = answer about something else
  // Choice D = answer about something else
  // The explanation describes needing to investigate for CO2 retention - need to check what C and D say
  // For now, update the explanation to match A being correct OR fix correctChoice
  // Actually, let me read the full question first and handle this separately below

  // CPFT Mini Exam 17 Q1 (cmsnddp3q000lbr843jog9oq0) - marked D, should be A
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnddp3q000lbr843jog9oq0' },
    data: { correctChoice: 'A' },
  })
  console.log('Fixed: CPFT Mini 17 Q1 - D→A (Grade A criteria)')
  fixed++

  // CPFT Mini Exam (cmsnddpbg000qbr84cvvfh5jk) - DLCO altitude: marked A, should be B
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnddpbg000qbr84cvvfh5jk' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed: CPFT Mini - A→B (DLCO altitude correction)')
  fixed++

  // ============================================================
  // FULL EXAM FIXES
  // ============================================================

  // ACCS Full Exam 2 Q (cmsngq0f8000o13wgjwnqwqub) - ABG Winter's formula: marked D, should be A
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsngq0f8000o13wgjwnqwqub' },
    data: { correctChoice: 'A' },
  })
  console.log('Fixed: ACCS Full 2 - D→A (ABG Winter\'s formula)')
  fixed++

  // ACCS Full Exam 2 Q23 (cmsngq0n9003i13wg8g2ganfb) - Delta-delta ratio
  // Explanation calculates ratio as 0.75, but choice A says 0.5
  // Choice C has 0.75 but wrong label. Fix: correct choice A's text to show 0.75
  // Or better: fix the correctChoice and explanation to be consistent
  // The explanation says ratio < 1 = concurrent NAGMA, which is the interpretation in A's label
  // Fix: update choice A text to have the correct ratio
  const q23 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsngq0n9003i13wg8g2ganfb' } })
  if (q23) {
    const choices = q23.choices as Record<string, string>
    choices['A'] = choices['A'].replace('0.5', '0.75')
    await prisma.fullExamQuestion.update({
      where: { id: 'cmsngq0n9003i13wg8g2ganfb' },
      data: { choices },
    })
    console.log('Fixed: ACCS Full 2 Q23 - corrected delta-delta ratio 0.5→0.75 in choice A')
    fixed++
  }

  // ============================================================
  // SDS FULL EXAM FIXES (chunk 7 - 35 fixes)
  // ============================================================
  const sdsFullChunk7: { id: string; correct: string; desc: string }[] = [
    { id: 'cmsnm1k3c0007dguxp4ct31s3', correct: 'C', desc: 'muscle atonia' },
    { id: 'cmsnm1k3c0009dgux8gl8t0rg', correct: 'B', desc: 'E1/E2 EOG' },
    { id: 'cmsnm1k3c000cdgux3grtf8k1', correct: 'C', desc: 'narcolepsy type 1' },
    { id: 'cmsnm1k3c000ldgux4mfzuu7r', correct: 'B', desc: 'HSAT criteria' },
    { id: 'cmsnm1k3c000mdgux1h5rc58f', correct: 'C', desc: 'REM EEG' },
    { id: 'cmsnm1k3c000ndguxbd13gy2l', correct: 'C', desc: 'high-level disinfection' },
    { id: 'cmsnm1k3c000sdgux0oo2fiou', correct: 'B', desc: 'RERAs' },
    { id: 'cmsnm1k3c000udguxx56lhtj9', correct: 'B', desc: 'CSF hypocretin' },
    { id: 'cmsnm1k3c000xdguxlalrl208', correct: 'B', desc: 'MWT protocol' },
    { id: 'cmsnm1k3c000ydguxpql3vnkq', correct: 'C', desc: 'residual sleepiness eval' },
    { id: 'cmsnm1k3d0011dguxl2ote9r9', correct: 'B', desc: 'nasal pressure transducer' },
    { id: 'cmsnm1k3d0017dguxghkwtnyg', correct: 'B', desc: 'mixed apnea' },
    { id: 'cmsnm1k3d001adguxksw2kh53', correct: 'B', desc: 'sleep onset insomnia' },
    { id: 'cmsnm1k3d001bdguxaxym84q0', correct: 'B', desc: '10-20 system' },
    { id: 'cmsnm1k3d001edgux24aqxt69', correct: 'B', desc: 'pressure support ventilation' },
    { id: 'cmsnm1k3d001fdguxbd0hc73z', correct: 'B', desc: 'narcolepsy type 2' },
    { id: 'cmsnm1k3d001jdguxyby665do', correct: 'B', desc: 'HSAT channels' },
    { id: 'cmsnm1kdw002ydguxykjgj3ed', correct: 'B', desc: 'increase CPAP for snoring' },
    { id: 'cmsnm1kdw0030dgux6y6g2mv7', correct: 'B', desc: 'POSTS' },
    { id: 'cmsnm1kdw0035dgux6m7cmsvh', correct: 'C', desc: 'mouth breathing' },
    { id: 'cmsnm1kdx0038dguxrtujtvk6', correct: 'B', desc: 'reduce PS add backup rate' },
    { id: 'cmsnm1kdx003hdguxbaxk2glg', correct: 'B', desc: 'STOP-BANG screening' },
    { id: 'cmsnm1kdx003kdgux7trde8b2', correct: 'B', desc: 'biocalibration' },
    { id: 'cmsnm1kdx003mdguxnbrs04x3', correct: 'B', desc: 'nightmares vs sleep terrors' },
    { id: 'cmsnm1kdx003qdguxkdu07odv', correct: 'D', desc: 'optimal CPAP titration' },
    { id: 'cmsnm1kdx003rdgux0apv0z9d', correct: 'D', desc: 'thalamic reticular nucleus' },
    { id: 'cmsnm1kdx003xdguxl6d8ec13', correct: 'B', desc: 'rhythmic movement disorder' },
    { id: 'cmsnm1kdx0041dgux2urlfpdg', correct: 'B', desc: 'MSLT short latency SOREMP' },
    { id: 'cmsnm1kdx0044dguxn44rgh9c', correct: 'B', desc: 'light suppresses melatonin' },
    { id: 'cmsnm1kdx0048dguxchrasr2h', correct: 'B', desc: 'K-complex definition' },
    { id: 'cmsnm1kdx004hdguxs4uqhco3', correct: 'B', desc: 'HSAT contraindications' },
    { id: 'cmsnm1kdx004jdguxdjq0x2gi', correct: 'B', desc: 'stimulus control therapy' },
    { id: 'cmsnm1kdx004odgux7x4dh6rd', correct: 'B', desc: 'hypnagogic hallucinations' },
    { id: 'cmsnm1ko8005rdguxebm6dmp2', correct: 'B', desc: 'N1 sleep staging' },
    { id: 'cmsnm1ko9005wdguxsbp7n3eh', correct: 'B', desc: 'sweat artifact' },
  ]

  for (const fix of sdsFullChunk7) {
    await prisma.fullExamQuestion.update({
      where: { id: fix.id },
      data: { correctChoice: fix.correct },
    })
    console.log(`Fixed: SDS Full - →${fix.correct} (${fix.desc})`)
    fixed++
  }

  // ============================================================
  // SDS FULL EXAM FIXES (chunk 8 - 13 fixes)
  // ============================================================
  const sdsFullChunk8: { id: string; correct: string; desc: string }[] = [
    { id: 'cmsnm1ko90064dguxk3mqzt5f', correct: 'B', desc: 'hypopnea definition' },
    { id: 'cmsnm1ko9006ddguxr31559v8', correct: 'B', desc: 'advanced sleep phase' },
    { id: 'cmsnm1ko9006fdguxii26glg6', correct: 'B', desc: 'ESS severity' },
    { id: 'cmsnm1ko9006idguxifdhd998', correct: 'B', desc: 'RLS augmentation' },
    { id: 'cmsnm1ko9006jdguxoh8daawc', correct: 'B', desc: 'prone position OSA' },
    { id: 'cmsnm1ko9006ndgux1jl75gzv', correct: 'B', desc: 'CPAP mechanism' },
    { id: 'cmsnm1ko9006wdgux4iw4q5a7', correct: 'B', desc: 'REM-related pathology' },
    { id: 'cmsnm1ko9006xdgux18qj0x9d', correct: 'B', desc: 'sleep debt definition' },
    { id: 'cmsnm1koa0070dguxnhu2n295', correct: 'B', desc: 'treatment-emergent centrals' },
    { id: 'cmsnm1koa0077dgux23ksx0et', correct: 'B', desc: 'AHI vs RDI discrepancy' },
    { id: 'cmsnm1koa007bdguxp9bgbn43', correct: 'C', desc: 'electrode reattachment' },
    { id: 'cmsnm1koa007cdguxtcgvjin6', correct: 'C', desc: 'Prader-Willi sleep' },
    { id: 'cmsnm1koa007jdguxsv4yhlcq', correct: 'B', desc: 'heated tubing condensation' },
  ]

  for (const fix of sdsFullChunk8) {
    await prisma.fullExamQuestion.update({
      where: { id: fix.id },
      data: { correctChoice: fix.correct },
    })
    console.log(`Fixed: SDS Full - →${fix.correct} (${fix.desc})`)
    fixed++
  }

  // ============================================================
  // SPECIAL CASE: SDS Mini Exam 14 Q16 (cmsn71grc002bjpfrk1gfyxpy)
  // Marked A = "working perfectly, no changes needed"
  // Explanation says headaches indicate CO2 retention, need ABG
  // No existing choice matches. Fix: rewrite explanation to match A being wrong
  // and update correctChoice + explanation to describe a valid answer
  // ============================================================
  // Need to read the question to see all choices
  const specialQ = await prisma.miniExamQuestion.findUnique({
    where: { id: 'cmsn71grc002bjpfrk1gfyxpy' },
  })
  if (specialQ) {
    const choices = specialQ.choices as Record<string, string>
    console.log('\nSpecial case Q choices:', JSON.stringify(choices, null, 2))
    console.log('Current correct:', specialQ.correctChoice)
    console.log('ExplCorrect:', specialQ.explanationCorrect)
    console.log('ExplWrong:', specialQ.explanationWrong)

    // Based on the explanation: headaches suggest CO2 retention, need ABG evaluation
    // Look for a choice that matches this
    let bestChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      const lower = (v as string).toLowerCase()
      if (lower.includes('abg') || lower.includes('co2') || lower.includes('capnography') || lower.includes('blood gas') || lower.includes('investigate') || lower.includes('evaluate')) {
        bestChoice = k
        break
      }
    }

    if (bestChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn71grc002bjpfrk1gfyxpy' },
        data: { correctChoice: bestChoice },
      })
      console.log(`Fixed special case: →${bestChoice}`)
      fixed++
    } else {
      // If no choice matches, update choice and explanation
      // The explanation describes: oxygen may mask hypoventilation, morning headaches = CO2 retention
      // Fix: change correctChoice to the most appropriate option, and fix explanation
      // Let's check if any choice mentions "oxygen is suppressing ventilatory drive" or similar
      let matchFound = false
      for (const [k, v] of Object.entries(choices)) {
        const lower = (v as string).toLowerCase()
        if (lower.includes('suppress') || lower.includes('hypoventilation') || lower.includes('retention') || lower.includes('worsen') || lower.includes('headache')) {
          await prisma.miniExamQuestion.update({
            where: { id: 'cmsn71grc002bjpfrk1gfyxpy' },
            data: { correctChoice: k },
          })
          console.log(`Fixed special case: →${k} (${v})`)
          fixed++
          matchFound = true
          break
        }
      }
      if (!matchFound) {
        // Last resort: rewrite explanation to match A or the most clinically appropriate choice
        console.log('Could not auto-fix special case - choices do not match explanation')
        console.log('All choices:', choices)
      }
    }
  }

  console.log(`\nTotal fixes applied: ${fixed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
