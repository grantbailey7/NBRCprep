import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let fixed = 0

  // ============================================================
  // EXPLANATION-ONLY FIXES (explanation text is wrong but answer is right)
  // ============================================================

  // TMC Mini 1 - APGAR 4-6 vs 5-6 contradiction in explanationWrong
  const eq1 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsmhgw4r000by35oq6m7zpo6' } })
  if (eq1 && eq1.explanationWrong) {
    const newExpl = eq1.explanationWrong.replace(
      /Simple stimulation and observation are appropriate for mildly depressed scores of 5-6/gi,
      'Scores of 4-6 indicate moderate distress requiring some degree of resuscitative intervention beyond simple observation'
    )
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsmhgw4r000by35oq6m7zpo6' },
      data: { explanationWrong: newExpl },
    })
    console.log('Fixed: TMC Mini 1 - APGAR explanationWrong consistency')
    fixed++
  }

  // ACCS Mini 21 - SVR explanation (correctChoice fix was done, now fix explanation text)
  // Already handled SVR value label in batch 1

  // ACCS Mini 22 - Corrected AG math: 36 should be 35
  const eq2 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn5yjjm000tgv9mvlgwqgpm' } })
  if (eq2) {
    let newExplC = eq2.explanationCorrect?.replace(/36/g, '35') || ''
    let newExplW = eq2.explanationWrong?.replace(/36/g, '35') || ''
    const choices = eq2.choices as Record<string, string>
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).includes('36')) {
        choices[k] = (v as string).replace('36', '35')
      }
    }
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsn5yjjm000tgv9mvlgwqgpm' },
      data: { choices, explanationCorrect: newExplC, explanationWrong: newExplW },
    })
    console.log('Fixed: ACCS Mini 22 - corrected AG math 36→35')
    fixed++
  }

  // ACCS Mini 28 - IAP increases compliance (answer and explanation contradict)
  // The explanation is right (IAP decreases compliance, needs higher PEEP)
  // Answer A has the wrong text. We need to find a choice that matches the explanation.
  const eq3 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn62y06001pcixs0y4oihev' } })
  if (eq3) {
    const choices = eq3.choices as Record<string, string>
    let bestChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      const lower = (v as string).toLowerCase()
      if (lower.includes('decrease') && lower.includes('compliance') && lower.includes('higher peep')) {
        bestChoice = k
        break
      }
    }
    if (!bestChoice) {
      for (const [k, v] of Object.entries(choices)) {
        const lower = (v as string).toLowerCase()
        if (lower.includes('higher peep') || lower.includes('increase peep') || (lower.includes('reduce') && lower.includes('compliance'))) {
          bestChoice = k
          break
        }
      }
    }
    if (bestChoice && bestChoice !== eq3.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn62y06001pcixs0y4oihev' },
        data: { correctChoice: bestChoice },
      })
      console.log(`Fixed: ACCS Mini 28 - IAP compliance →${bestChoice}`)
      fixed++
    } else {
      // Fix the choice A text instead
      choices['A'] = 'Elevated intra-abdominal pressure decreases chest wall compliance, requiring higher PEEP to maintain alveolar recruitment'
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn62y06001pcixs0y4oihev' },
        data: { choices },
      })
      console.log('Fixed: ACCS Mini 28 - rewrote choice A text for IAP')
      fixed++
    }
  }

  // SDS Mini 2 - EOG placement
  const eq4 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn6d77y0017izzcun9cd8ph' } })
  if (eq4) {
    const choices = eq4.choices as Record<string, string>
    let correctEOG = ''
    for (const [k, v] of Object.entries(choices)) {
      const lower = (v as string).toLowerCase()
      if ((lower.includes('e1') && lower.includes('below') && lower.includes('left')) ||
          (lower.includes('below') && lower.includes('above') && lower.includes('outer canthus'))) {
        correctEOG = k
        break
      }
    }
    if (correctEOG && correctEOG !== eq4.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn6d77y0017izzcun9cd8ph' },
        data: { correctChoice: correctEOG },
      })
      console.log(`Fixed: SDS Mini 2 - EOG placement →${correctEOG}`)
      fixed++
    } else {
      console.log('Skipped: SDS Mini 2 EOG - no matching choice found')
    }
  }

  // SDS Mini 7 - UPPP meets Sher criteria
  const eq5 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn6n3390017yceqtv4snr5x' } })
  if (eq5) {
    const choices = eq5.choices as Record<string, string>
    let successChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('success') || (v as string).toLowerCase().includes('surgical success')) {
        successChoice = k
        break
      }
    }
    if (successChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn6n3390017yceqtv4snr5x' },
        data: {
          correctChoice: successChoice,
          explanationCorrect: 'By Sher criteria, surgical success is defined as a 50% or greater reduction in AHI and a post-operative AHI below 20. This patient\'s AHI dropped from 42 to 18, a 57% reduction, and the post-operative AHI of 18 is below 20. Both criteria are met, so this represents a surgical success.',
          explanationWrong: 'A 57% reduction in AHI (42 to 18) exceeds the 50% threshold, and post-operative AHI of 18 is below 20. This meets both components of the Sher criteria for surgical success, not failure.',
        },
      })
      console.log(`Fixed: SDS Mini 7 - UPPP Sher criteria →${successChoice}`)
      fixed++
    }
  }

  // SDS Mini 13 - Continue vs notify supervisor for empty O2 backup
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn71gmi001qjpfrg7lgyof6' },
    data: { correctChoice: 'D' },
  })
  console.log('Fixed: SDS Mini 13 - empty O2 backup A→D (notify supervisor)')
  fixed++

  // CPFT Mini 1 - BEV acceptability
  const eq6 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn84eyn000f8c266gc91nt9' } })
  if (eq6) {
    const choices = eq6.choices as Record<string, string>
    let acceptableChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('acceptable') && !(v as string).toLowerCase().includes('unacceptable')) {
        acceptableChoice = k
        break
      }
    }
    if (acceptableChoice && acceptableChoice !== eq6.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn84eyn000f8c266gc91nt9' },
        data: { correctChoice: acceptableChoice },
      })
      console.log(`Fixed: CPFT Mini 1 - BEV acceptable →${acceptableChoice}`)
      fixed++
    }
  }

  // CPFT Mini 6 - LAMA withholding longest, not ICS
  const eq7 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn8a7lz0003pbfhp9n336ej' } })
  if (eq7) {
    const choices = eq7.choices as Record<string, string>
    let lamaChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('lama') || (v as string).toLowerCase().includes('tiotropium') || (v as string).toLowerCase().includes('long-acting anticholinergic') || (v as string).toLowerCase().includes('long acting anticholinergic')) {
        lamaChoice = k
        break
      }
    }
    if (lamaChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn8a7lz0003pbfhp9n336ej' },
        data: { correctChoice: lamaChoice },
      })
      console.log(`Fixed: CPFT Mini 6 - LAMA longest withholding →${lamaChoice}`)
      fixed++
    }
  }

  // CPFT Mini 28 - Readings are within acceptable range
  const eq8 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnb6jru001f928bql48p13l' } })
  if (eq8) {
    const choices = eq8.choices as Record<string, string>
    let withinChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('within') && (v as string).toLowerCase().includes('acceptable')) {
        withinChoice = k
        break
      }
    }
    if (!withinChoice) {
      for (const [k, v] of Object.entries(choices)) {
        if ((v as string).toLowerCase().includes('pass') || (v as string).toLowerCase().includes('acceptable') || (v as string).toLowerCase().includes('meets criteria')) {
          withinChoice = k
          break
        }
      }
    }
    if (withinChoice && withinChoice !== eq8.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnb6jru001f928bql48p13l' },
        data: { correctChoice: withinChoice },
      })
      console.log(`Fixed: CPFT Mini 28 - readings within range →${withinChoice}`)
      fixed++
    }
  }

  // RPFT Mini 21 - FeNO vs IOS for airway mechanics
  const eq9 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnddp3q000cbr845rbxetx8' } })
  if (eq9) {
    const choices = eq9.choices as Record<string, string>
    let iosChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('ios') || (v as string).toLowerCase().includes('oscillometry') || (v as string).toLowerCase().includes('impulse')) {
        iosChoice = k
        break
      }
    }
    if (iosChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnddp3q000cbr845rbxetx8' },
        data: { correctChoice: iosChoice },
      })
      console.log(`Fixed: RPFT Mini 21 Q7 - airway mechanics →${iosChoice} (IOS)`)
      fixed++
    }
  }

  // RPFT Mini 26 - BDR criterion 10% of predicted
  const eq10 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnddp3k000hsd0i9jhzlaf8' } })
  if (eq10) {
    const choices = eq10.choices as Record<string, string>
    let tenPctChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('10%') && (v as string).toLowerCase().includes('predicted')) {
        tenPctChoice = k
        break
      }
    }
    if (tenPctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnddp3k000hsd0i9jhzlaf8' },
        data: { correctChoice: tenPctChoice },
      })
      console.log(`Fixed: RPFT Mini 26 - BDR criterion →${tenPctChoice}`)
      fixed++
    }
  }

  // RPFT Mini 28 - Grade C 250→200mL
  const eq11 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnddpgc001asd0im2l9muz0' } })
  if (eq11) {
    const choices = eq11.choices as Record<string, string>
    let grade200 = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).includes('200') && (v as string).toLowerCase().includes('grade c')) {
        grade200 = k
        break
      }
    }
    if (!grade200) {
      // Try finding 200mL choice
      for (const [k, v] of Object.entries(choices)) {
        if ((v as string).includes('200 mL') || (v as string).includes('200mL')) {
          grade200 = k
          break
        }
      }
    }
    if (grade200 && grade200 !== eq11.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnddpgc001asd0im2l9muz0' },
        data: { correctChoice: grade200 },
      })
      console.log(`Fixed: RPFT Mini 28 - Grade C threshold →${grade200}`)
      fixed++
    }
  }

  // ============================================================
  // FULL EXAM EXPLANATION FIXES
  // ============================================================

  // TMC Full 1 Q49 - Compliance calculation explanation
  const fq1 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnknedr001edzyuw2v25mut' } })
  if (fq1 && fq1.explanationWrong) {
    const newExpl = fq1.explanationWrong
      .replace(/8\.9 would result from dividing by PIP - PEEP incorrectly/gi,
        '8.9 would result from dividing tidal volume by PIP alone (400/45=8.9). 11.4 would result from using PIP - PEEP for dynamic compliance (400/35=11.4)')
    await prisma.fullExamQuestion.update({
      where: { id: 'cmsnknedr001edzyuw2v25mut' },
      data: { explanationWrong: newExpl },
    })
    console.log('Fixed: TMC Full 1 Q49 - compliance explanation')
    fixed++
  }

  // TMC Full 3 Q63 - PaO2 110 is physiologically expected with hyperventilation
  const fq2 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnknet9007gdzyul6ba2ju4' } })
  if (fq2) {
    const choices = fq2.choices as Record<string, string>
    let hyperventChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      const lower = (v as string).toLowerCase()
      if (lower.includes('hyperventil') || lower.includes('respiratory alkalosis') || lower.includes('alveolar') || lower.includes('physiologic')) {
        hyperventChoice = k
        break
      }
    }
    if (hyperventChoice && hyperventChoice !== fq2.correctChoice) {
      await prisma.fullExamQuestion.update({
        where: { id: 'cmsnknet9007gdzyul6ba2ju4' },
        data: { correctChoice: hyperventChoice },
      })
      console.log(`Fixed: TMC Full 3 Q63 - PaO2 110 not contamination →${hyperventChoice}`)
      fixed++
    } else {
      console.log('Skipped: TMC Full 3 Q63 - no matching hyperventilation choice')
    }
  }

  // NPS Full 3 - Caffeine level 8 contradicts stem
  const fq3 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnknfgt0065ck13c183bzsi' } })
  if (fq3 && fq3.questionText?.includes('subtherapeutic')) {
    const newQ = fq3.questionText.replace(/subtherapeutic/gi, 'at the lower end of the therapeutic range')
    await prisma.fullExamQuestion.update({
      where: { id: 'cmsnknfgt0065ck13c183bzsi' },
      data: { questionText: newQ },
    })
    console.log('Fixed: NPS Full 3 - caffeine level stem wording')
    fixed++
  }

  // ACCS Full 1 - Winter's formula explanation contradicts answer A
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsngq0f8000o13wgjwnqwqub' },
    data: {
      explanationCorrect: 'Using Winter\'s formula: Expected PaCO2 = (1.5 x HCO3) + 8 (±2) = (1.5 x 14) + 8 = 29 (range 27-31). The patient\'s PaCO2 of 30 falls within the expected range, confirming appropriate respiratory compensation for the metabolic acidosis. This is a simple metabolic acidosis with adequate respiratory compensation.',
      explanationWrong: 'Respiratory alkalosis would require PaCO2 below the expected range (below 27). Mixed metabolic acidosis and respiratory acidosis would show PaCO2 above the expected range (above 31). Metabolic alkalosis is excluded by the low pH and low bicarbonate.',
    },
  })
  console.log('Fixed: ACCS Full 1 - Winter\'s formula explanation rewritten')
  fixed++

  // RPFT Mini 20 Q2 - Grade thresholds
  const eq12 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsncwihf002jewfxa20c0yeb' } })
  if (eq12 && eq12.explanationCorrect) {
    let newExpl = eq12.explanationCorrect
      .replace(/Grade C[^.]*250 mL/gi, 'Grade C = 2+ acceptable within 200 mL')
      .replace(/Grade D[^.]*300 mL/gi, 'Grade D = 2+ acceptable within 250 mL')
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsncwihf002jewfxa20c0yeb' },
      data: { explanationCorrect: newExpl },
    })
    console.log('Fixed: RPFT Mini 20 Q2 - grade threshold explanation')
    fixed++
  }

  console.log(`\nBatch 2 fixes applied: ${fixed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
