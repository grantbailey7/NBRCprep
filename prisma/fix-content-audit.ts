import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let fixed = 0
  let skipped = 0

  // ============================================================
  // FLASHCARD FIXES (21 errors)
  // ============================================================

  // FC-1: TMC - ARDS tidal volume 4-8 should be 4-6 mL/kg
  await prisma.flashcard.update({
    where: { id: 'cmsm5kzpf000omk9jnlrd1hu0' },
    data: {
      answer: 'The ARDSNet protocol recommends tidal volumes of 4-6 mL/kg ideal body weight (IBW), with a target of 6 mL/kg initially, reduced to 4 mL/kg if needed to maintain plateau pressure at or below 30 cmH2O. This lung-protective strategy reduces ventilator-induced lung injury (VILI) by minimizing alveolar overdistension.'
    },
  })
  console.log('Fixed FC-1: TMC ARDS tidal volume 4-8→4-6 mL/kg')
  fixed++

  // FC-2: TMC - P/F <200 labeled severe ARDS, should be moderate
  await prisma.flashcard.update({
    where: { id: 'cmsm5kzpg002gmk9jc7orntep' },
    data: {
      answer: 'Per the Berlin criteria, ARDS severity is classified by PaO2/FiO2 ratio with at least 5 cmH2O PEEP: Mild = 200-300 mmHg, Moderate = 100-200 mmHg, Severe = less than 100 mmHg. A P/F ratio below 200 indicates at least moderate ARDS. P/F below 100 indicates severe ARDS with mortality rates exceeding 45%.'
    },
  })
  console.log('Fixed FC-2: TMC P/F ratio Berlin criteria classification')
  fixed++

  // FC-3: ACCS - PAWP end-expiratory reading reversed
  await prisma.flashcard.update({
    where: { id: 'cmsm65utg000bcgr32jbuukds' },
    data: {
      answer: 'PAWP should be read at end-expiration to minimize the effects of intrathoracic pressure swings. During spontaneous breathing, end-expiration is the highest point on the waveform (before negative inspiratory pressure pulls it down). During mechanical ventilation, end-expiration is the lowest point on the waveform (before positive pressure pushes it up). This ensures measurement reflects true transmural filling pressure.'
    },
  })
  console.log('Fixed FC-3: ACCS PAWP end-expiratory reading direction')
  fixed++

  // FC-4: NPS - Hyponatremia threshold 130 should be 135
  await prisma.flashcard.update({
    where: { id: 'cmsm76oqj000pcruc6v62kyhl' },
    data: {
      answer: 'Hyponatremia is defined as serum sodium below 135 mEq/L. It can be caused by excessive free water intake, SIADH, diuretic use, or adrenal insufficiency. Symptoms range from nausea and headache (mild, 130-134) to confusion and seizures (severe, below 120). Treatment depends on acuity and severity, with rapid correction risking osmotic demyelination syndrome.'
    },
  })
  console.log('Fixed FC-4: NPS hyponatremia threshold 130→135')
  fixed++

  // FC-5: NPS - VSD SpO2 target using single-ventricle values
  await prisma.flashcard.update({
    where: { id: 'cmsm7r0w1000e2ed831lam7cj' },
    data: {
      answer: 'For a term neonate with a large VSD, SpO2 is typically in the low-to-mid 90s on room air due to left-to-right shunting. Management focuses on avoiding supplemental oxygen (keep FiO2 at 0.21) to prevent worsening pulmonary overcirculation, and treating heart failure symptoms with diuretics. SpO2 targets of 75-85% apply to single ventricle physiology (e.g., HLHS), not isolated VSDs. Surgical repair is typically performed when the infant shows failure to thrive or significant CHF.'
    },
  })
  console.log('Fixed FC-5: NPS VSD SpO2 target corrected')
  fixed++

  // FC-6: ACCS - Hypoalbuminemia raises SID (should reduce ATOT)
  await prisma.flashcard.update({
    where: { id: 'cmsm7pwv8000lp4886xfoofh4' },
    data: {
      answer: 'In the Stewart approach, three independent variables determine acid-base status: strong ion difference (SID), total weak acid concentration (ATOT), and PaCO2. Metabolic alkalosis can result from increased SID (e.g., chloride loss from vomiting) or decreased ATOT (e.g., hypoalbuminemia). Albumin is the primary weak acid in plasma, so hypoalbuminemia reduces ATOT, causing alkalosis. SID is determined solely by strong ions (Na+, K+, Cl-, lactate) and is not directly affected by albumin levels.'
    },
  })
  console.log('Fixed FC-6: ACCS Stewart model hypoalbuminemia/ATOT')
  fixed++

  // FC-7: ACCS - Isopropanol grouped with HAGMA toxins
  await prisma.flashcard.update({
    where: { id: 'cmsm7pwv8000op488rkho706r' },
    data: {
      answer: 'An elevated osmolar gap in the setting of a high anion gap metabolic acidosis (HAGMA) suggests methanol or ethylene glycol poisoning, which produce toxic acid metabolites (formic acid and oxalic/glycolic acid, respectively). Isopropanol also causes an elevated osmolar gap but does NOT cause HAGMA. Isopropanol is metabolized to acetone (a ketone, not an acid), producing ketonemia and ketonuria without significant acidosis. The presence or absence of concurrent HAGMA is key to distinguishing these toxic alcohol ingestions.'
    },
  })
  console.log('Fixed FC-7: ACCS isopropanol vs HAGMA toxins')
  fixed++

  // FC-8: ACCS - Non-HIV PJP organism burden reversed
  await prisma.flashcard.update({
    where: { id: 'cmsm7pwv80021p488hzgds1ph' },
    data: {
      answer: 'Non-HIV immunocompromised patients with PJP have a LOWER organism burden but a MORE INTENSE inflammatory response compared to HIV-associated PJP. This paradoxically makes the disease more fulminant despite fewer organisms. BAL sensitivity is lower than in HIV-associated PJP because organism burden is lower, so beta-D-glucan testing and empiric treatment may be warranted even with negative BAL. HIV-associated PJP has higher organism burden with a less intense inflammatory response, making BAL more sensitive for diagnosis.'
    },
  })
  console.log('Fixed FC-8: ACCS non-HIV PJP organism burden')
  fixed++

  // FC-9: ACCS - mPAP threshold 25 should be >20 (2022 guidelines)
  await prisma.flashcard.update({
    where: { id: 'cmsm7pwv8001cp4886kkvhu18' },
    data: {
      answer: 'Chronic thromboembolic pulmonary hypertension (CTEPH) is defined by the presence of organized thromboembolic material in the pulmonary arteries after at least 3 months of effective anticoagulation, with hemodynamic criteria of mPAP greater than 20 mmHg, PAWP 15 mmHg or less, and PVR greater than 2 Wood units (per the 2022 ESC/ERS guidelines, which updated the threshold from the previous 25 mmHg). Pulmonary endarterectomy (PEA) is the treatment of choice for surgically accessible disease. Balloon pulmonary angioplasty (BPA) is an alternative for inoperable cases.'
    },
  })
  console.log('Fixed FC-9: ACCS CTEPH mPAP threshold 25→20')
  fixed++

  // FC-10: SDS - ASV contraindication EF threshold
  const fc10 = await prisma.flashcard.findUnique({ where: { id: 'cmsm6asta001nbwdkus8bk9s4' } })
  if (fc10) {
    const newAnswer = fc10.answer.replace('below 45%', '45% or below (less than or equal to 45%)')
    await prisma.flashcard.update({
      where: { id: 'cmsm6asta001nbwdkus8bk9s4' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-10: SDS ASV EF threshold <45%→≤45%')
    fixed++
  }

  // FC-11: SDS - Supplemental O2 does not shift curve
  await prisma.flashcard.update({
    where: { id: 'cmsm7rain000rtq5abiu413ys' },
    data: {
      answer: 'Supplemental oxygen raises the baseline PaO2, placing the patient on the flat upper portion of the oxyhemoglobin dissociation curve. At this position, equivalent reductions in airflow during sleep produce smaller SpO2 drops, potentially masking hypoventilation events. This is why SpO2 monitoring alone may be insufficient to detect respiratory events in patients on supplemental oxygen, and transcutaneous CO2 monitoring or end-tidal CO2 monitoring is recommended. Note: supplemental oxygen does NOT shift the oxyhemoglobin dissociation curve itself; it changes the operating point on the existing curve.'
    },
  })
  console.log('Fixed FC-11: SDS supplemental O2 curve misconception')
  fixed++

  // FC-12: SDS - Bilevel EPAP should start at CPAP level
  await prisma.flashcard.update({
    where: { id: 'cmsm8kqep0000duubjowbjuxg' },
    data: {
      answer: 'Per the AASM PAP titration protocol, when converting from CPAP to bilevel PAP, initial EPAP should be set at the effective CPAP pressure (in this case, 15 cmH2O) to maintain the therapeutic airway-splinting effect. IPAP should start at least 4 cmH2O above EPAP (i.e., IPAP 19 cmH2O minimum). IPAP is then titrated upward in 1 cmH2O increments to resolve residual hypopneas, desaturations, and snoring. Reducing EPAP below the established CPAP level would compromise airway patency.'
    },
  })
  console.log('Fixed FC-12: SDS bilevel starting pressures')
  fixed++

  // FC-13: CPFT - Volume accuracy ±3.5%/65mL → ±3%/50mL
  const fc13 = await prisma.flashcard.findUnique({ where: { id: 'cmsm76h4w001n7qg79f0klq8v' } })
  if (fc13) {
    let newAnswer = fc13.answer.replace(/3\.5%/g, '3%').replace(/65 mL/g, '50 mL').replace(/65mL/g, '50 mL')
    await prisma.flashcard.update({
      where: { id: 'cmsm76h4w001n7qg79f0klq8v' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-13: CPFT spirometer volume accuracy 3.5%/65mL→3%/50mL')
    fixed++
  }

  // FC-14: CPFT - Ipratropium withholding 4-6hrs → 12hrs
  const fc14 = await prisma.flashcard.findUnique({ where: { id: 'cmsm83i0i0001mirp0fdvtdja' } })
  if (fc14) {
    let newAnswer = fc14.answer
      .replace(/ipratropium[^.]*4-6 hour/gi, 'ipratropium) should be withheld for at least 12 hour')
      .replace(/ipratropium[^.]*4 to 6 hour/gi, 'ipratropium) should be withheld for at least 12 hour')
    if (newAnswer === fc14.answer) {
      newAnswer = fc14.answer + ' Note: Short-acting anticholinergics (ipratropium) require a longer withholding period of at least 12 hours due to their longer duration of action, unlike SABAs which require only 4-6 hours.'
    }
    await prisma.flashcard.update({
      where: { id: 'cmsm83i0i0001mirp0fdvtdja' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-14: CPFT ipratropium withholding time')
    fixed++
  }

  // FC-15: CPFT - Supine MIP reversed for diaphragm weakness
  await prisma.flashcard.update({
    where: { id: 'cmsm83i0j001pmirpdx0uxudl' },
    data: {
      answer: 'In bilateral diaphragmatic weakness or paralysis, supine MIP is worse (less negative) than seated MIP. The paralyzed diaphragm cannot resist the gravitational load of abdominal contents pushing cephalad in the supine position, compromising thoracic expansion and reducing inspiratory force generation. The hallmark finding is a greater than 25% drop in FVC from sitting to supine, accompanied by worsened (less negative) MIP values in the supine position. Upright positioning allows gravity to assist diaphragmatic descent, partially compensating for the weakness.'
    },
  })
  console.log('Fixed FC-15: CPFT supine MIP direction in diaphragm weakness')
  fixed++

  // FC-16: CPFT - Restriction severity graded by FEV1 not TLC
  const fc16 = await prisma.flashcard.findUnique({ where: { id: 'cmsm83i0j0029mirppa5iquiw' } })
  if (fc16) {
    let newAnswer = fc16.answer.replace(/TLC percent predicted/gi, 'FEV1 percent predicted').replace(/percent predicted TLC/gi, 'FEV1 percent predicted')
    if (newAnswer === fc16.answer) {
      newAnswer = fc16.answer + ' Per ATS/ERS 2005 interpretive strategies, once a restrictive defect is identified (by reduced TLC), severity is graded using FEV1 percent predicted, not TLC percent predicted.'
    }
    await prisma.flashcard.update({
      where: { id: 'cmsm83i0j0029mirppa5iquiw' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-16: CPFT restriction severity parameter TLC→FEV1')
    fixed++
  }

  // FC-17: CPFT - Grade D description matches Grade C
  const fc17 = await prisma.flashcard.findUnique({ where: { id: 'cmsm9b4b60006b3hv01qjf73t' } })
  if (fc17) {
    const newAnswer = fc17.answer
      .replace(/Grade D[^.]*usable results obtained but did not meet repeatability criteria/i,
        'Grade D indicates that only one acceptable maneuver was obtained (repeatability cannot be assessed). Grade C means two or more acceptable maneuvers were obtained but did not meet repeatability criteria')
    await prisma.flashcard.update({
      where: { id: 'cmsm9b4b60006b3hv01qjf73t' },
      data: { answer: newAnswer !== fc17.answer ? newAnswer : 'ATS/ERS 2019 spirometry quality grades: Grade A = 3+ acceptable maneuvers with repeatability within 150 mL. Grade B = 2+ acceptable within 150 mL (or 3+ within 200 mL). Grade C = 2+ acceptable within 200 mL. Grade D = only 1 acceptable maneuver obtained (repeatability cannot be assessed). Grade E = no acceptable maneuvers. Grade F = no usable results obtained. Grades A-C are considered usable for clinical interpretation.' },
    })
    console.log('Fixed FC-17: CPFT spirometry quality Grade D vs C')
    fixed++
  }

  // FC-18: CPFT - Methacholine contraindication FEV1 <50%/1.0L → <60%/1.5L
  const fc18 = await prisma.flashcard.findUnique({ where: { id: 'cmsm9b4b6000db3hvx3r162yb' } })
  if (fc18) {
    let newAnswer = fc18.answer.replace(/50%/g, '60%').replace(/1\.0 L/g, '1.5 L').replace(/1\.0L/g, '1.5 L')
    await prisma.flashcard.update({
      where: { id: 'cmsm9b4b6000db3hvx3r162yb' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-18: CPFT methacholine FEV1 contraindication threshold')
    fixed++
  }

  // FC-19: RPFT - DLCO Hb adjustment formula inverted
  await prisma.flashcard.update({
    where: { id: 'cmsm7685g0021mstg9u878vp6' },
    data: {
      answer: 'The DLCO hemoglobin adjustment corrects for the effect of anemia or polycythemia on CO uptake. Per ERS/ATS 2017 standards, for males: adjusted DLCO = measured DLCO x (10.22 + 14.6) / (10.22 + patient Hb). For females: adjusted DLCO = measured DLCO x (9.38 + 13.4) / (9.38 + patient Hb). The standard hemoglobin value (14.6 for males, 13.4 for females) appears in the numerator, and the patient\'s measured hemoglobin appears in the denominator. Anemia causes a falsely low DLCO, so the adjustment corrects upward; polycythemia causes a falsely high DLCO, correcting downward.'
    },
  })
  console.log('Fixed FC-19: RPFT DLCO hemoglobin adjustment formula')
  fixed++

  // FC-20: RPFT - GLI-2012 dataset 70,000 → 97,000
  const fc20 = await prisma.flashcard.findUnique({ where: { id: 'cmsm7685g002jmstggezetrmn' } })
  if (fc20) {
    const newAnswer = fc20.answer.replace(/70,000/g, '97,000').replace(/70000/g, '97000')
    await prisma.flashcard.update({
      where: { id: 'cmsm7685g002jmstggezetrmn' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-20: RPFT GLI-2012 dataset size 70k→97k')
    fixed++
  }

  // FC-21: RPFT - Bohr equation PETCO2 → PeCO2
  const fc21 = await prisma.flashcard.findUnique({ where: { id: 'cmsmde28h000ac5fppkul4qin' } })
  if (fc21) {
    const newAnswer = fc21.answer
      .replace(/PETCO2/g, 'PeCO2')
      .replace(/end-tidal CO2/gi, 'mixed expired CO2')
    await prisma.flashcard.update({
      where: { id: 'cmsmde28h000ac5fppkul4qin' },
      data: { answer: newAnswer },
    })
    console.log('Fixed FC-21: RPFT Bohr equation PETCO2→PeCO2')
    fixed++
  }

  // ============================================================
  // MINI EXAM QUESTION FIXES
  // ============================================================

  // MQ-1: NPS Mini 29 - Leaked AI reasoning text
  const mq1 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn3d5sn001yovac2d11bxg3' } })
  if (mq1 && mq1.explanationCorrect?.includes('Wait, this is incorrect')) {
    const cleanExpl = mq1.explanationCorrect.replace(/^Wait, this is incorrect\. Let me reconsider\.\s*/i, '')
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsn3d5sn001yovac2d11bxg3' },
      data: { explanationCorrect: cleanExpl },
    })
    console.log('Fixed MQ-1: NPS Mini 29 Q3 - removed leaked AI reasoning text')
    fixed++
  }

  // MQ-2: NPS Mini 27 - Decannulation contraindication C→B
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn3d5ia000rovac7ebbuiql' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed MQ-2: NPS Mini 27 - decannulation contraindication C→B')
  fixed++

  // MQ-3: TMC Mini 11 - Fresh trach decannulation protocol
  const mq3 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsmic0be000712j20int0bub' } })
  if (mq3) {
    const choices = mq3.choices as Record<string, string>
    let oralIntubChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('oral intubation') || (v as string).toLowerCase().includes('intubate orally')) {
        oralIntubChoice = k
        break
      }
    }
    if (oralIntubChoice && oralIntubChoice !== mq3.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsmic0be000712j20int0bub' },
        data: {
          correctChoice: oralIntubChoice,
          explanationCorrect: 'For a fresh tracheostomy (less than 7 days old), accidental decannulation should be managed with oral intubation rather than blind reinsertion. The immature tract has not fully formed and blind reinsertion risks creating a false passage into the pretracheal tissue, potentially causing subcutaneous emphysema, pneumothorax, or airway loss. Oral intubation provides a secure airway while allowing controlled reinsertion under direct visualization.',
          explanationWrong: 'Attempting reinsertion with an obturator is appropriate for mature tracheostomy tracts (7+ days) where the tract is well-established. For fresh tracts under 7 days, the risk of false passage creation is too high. Downsizing the tube does not eliminate the false passage risk in an immature tract.',
        },
      })
      console.log(`Fixed MQ-3: TMC Mini 11 - fresh trach decannulation →${oralIntubChoice}`)
      fixed++
    } else {
      console.log('Skipped MQ-3: could not identify oral intubation choice')
      skipped++
    }
  }

  // MQ-4: NPS Mini 1 - Apgar math says 3 but adds to 5
  const mq4 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsmjplta000ats0tm0kfy6wf' } })
  if (mq4 && mq4.explanationCorrect) {
    const newExpl = mq4.explanationCorrect.replace(/score around 3/g, 'score around 5').replace(/score of 3/g, 'score of 5')
    if (newExpl !== mq4.explanationCorrect) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsmjplta000ats0tm0kfy6wf' },
        data: { explanationCorrect: newExpl },
      })
      console.log('Fixed MQ-4: NPS Mini 1 - Apgar math 3→5')
      fixed++
    }
  }

  // MQ-5: NPS Mini 3 - HFOV frequency physiology backwards
  const mq5 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsmjpm5b001bts0thtc2ilax' } })
  if (mq5 && mq5.explanationWrong) {
    const newExpl = mq5.explanationWrong.replace(
      /decreasing frequency actually reduces CO2 removal/gi,
      'decreasing frequency increases tidal volume delivery (VT is inversely related to frequency), which increases CO2 removal'
    )
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsmjpm5b001bts0thtc2ilax' },
      data: { explanationWrong: newExpl },
    })
    console.log('Fixed MQ-5: NPS Mini 3 - HFOV frequency physiology')
    fixed++
  }

  // MQ-6: NPS Mini 3 - BPD FiO2 0.30 is severe not moderate
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsmjpm5b001its0t6ms8h9yn' },
    data: {
      correctChoice: 'C',
      explanationCorrect: 'Per the NIH severity classification, requiring FiO2 of 0.30 or greater (30% or more) at 36 weeks PMA meets criteria for severe BPD. Mild BPD is supplemental oxygen at 28 days but room air at 36 weeks. Moderate BPD is supplemental oxygen at FiO2 less than 0.30 at 36 weeks PMA. Severe BPD is FiO2 of 0.30 or greater, or positive pressure ventilation at 36 weeks PMA.',
      explanationWrong: 'Moderate BPD requires supplemental oxygen at FiO2 less than 0.30. Mild BPD means the infant has weaned to room air by 36 weeks PMA. The 0.30 threshold is the dividing line between moderate and severe BPD.',
    },
  })
  console.log('Fixed MQ-6: NPS Mini 3 - BPD severity moderate→severe')
  fixed++

  // MQ-7: ACCS Mini 4 - Mechanical power: C→B (BMI not a component)
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn3dtb1001yhjacjb5ltttm' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed MQ-7: ACCS Mini 4 - mechanical power C→B')
  fixed++

  // MQ-8: ACCS Mini 6 - CIP vs CIM: D→C
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn4qlmr000awjeo8zybdprz' },
    data: {
      correctChoice: 'C',
      explanationCorrect: 'Reduced compound muscle action potentials (CMAPs) with preserved sensory nerve conduction is the hallmark of critical illness myopathy (CIM). CIM affects the muscle itself, so motor responses are reduced while sensory nerves remain intact. This pattern distinguishes CIM from critical illness polyneuropathy (CIP), which is an axonal sensorimotor polyneuropathy that affects BOTH motor AND sensory nerve conduction.',
      explanationWrong: 'Critical illness polyneuropathy (CIP) involves both motor and sensory axonal degeneration, producing reduced CMAPs AND reduced sensory nerve action potentials (SNAPs). The preservation of sensory nerve conduction in this scenario rules out CIP. Guillain-Barre syndrome typically shows demyelinating features (slowed conduction velocities, prolonged F-waves), not just reduced CMAPs.',
    },
  })
  console.log('Fixed MQ-8: ACCS Mini 6 - CIP→CIM D→C')
  fixed++

  // MQ-9: ACCS Mini 21 - SVR 1344 is elevated not normal
  const mq9 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn5yjdt0003gv9mbozmaq9j' } })
  if (mq9 && mq9.explanationCorrect) {
    const newExpl = mq9.explanationCorrect.replace(/within normal range/gi, 'mildly elevated above the normal range of 800-1200 dynes-s/cm5')
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsn5yjdt0003gv9mbozmaq9j' },
      data: { explanationCorrect: newExpl },
    })
    console.log('Fixed MQ-9: ACCS Mini 21 - SVR 1344 now labeled elevated')
    fixed++
  }

  // MQ-10: SDS Mini 1 - AHI 12.0 is mild not moderate
  const mq10 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn6d7080004izzcfordk00f' } })
  if (mq10) {
    const choices = mq10.choices as Record<string, string>
    let mildChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('mild')) {
        mildChoice = k
        break
      }
    }
    if (mildChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn6d7080004izzcfordk00f' },
        data: {
          correctChoice: mildChoice,
          explanationCorrect: 'An AHI of 12.0 events/hour classifies as mild OSA per AASM criteria (mild = 5-14.9, moderate = 15-29.9, severe = 30 or greater). This patient has mild obstructive sleep apnea.',
          explanationWrong: 'Moderate OSA requires an AHI of 15-29.9 events/hour. Severe OSA requires AHI of 30 or greater. An AHI of 12.0 does not meet the threshold for moderate or severe classification.',
        },
      })
      console.log(`Fixed MQ-10: SDS Mini 1 - AHI 12.0 mild not moderate →${mildChoice}`)
      fixed++
    }
  }

  // MQ-11: ACCS Mini 30 - Early trach mortality: A→D
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn62y9q002zcixsaxkfgq3s' },
    data: {
      correctChoice: 'D',
      explanationCorrect: 'The TracMan trial and other large studies have NOT consistently demonstrated a mortality benefit from early tracheostomy. While early tracheostomy may reduce sedation duration, improve patient comfort, and facilitate weaning, the evidence does not consistently show a mortality reduction. The timing of tracheostomy should be individualized based on clinical factors.',
      explanationWrong: 'The claim that early tracheostomy consistently reduces mortality is not supported by the available evidence. The TracMan trial specifically showed no significant mortality difference between early and late tracheostomy. Benefits such as reduced sedation and earlier mobilization are real but do not translate to proven mortality reduction.',
    },
  })
  console.log('Fixed MQ-11: ACCS Mini 30 - early trach mortality A→D')
  fixed++

  // MQ-12: SDS Mini 10 - ASV contraindication HFpEF → HFrEF
  const mq12 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn6n3ge002tyceqbl55x6kr' } })
  if (mq12) {
    const choices = mq12.choices as Record<string, string>
    let hfrChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('reduced') || (v as string).toLowerCase().includes('hfref')) {
        hfrChoice = k
        break
      }
    }
    if (hfrChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn6n3ge002tyceqbl55x6kr' },
        data: {
          correctChoice: hfrChoice,
          explanationCorrect: 'The SERVE-HF trial demonstrated increased cardiovascular mortality with ASV in patients with heart failure and REDUCED ejection fraction (HFrEF, LVEF 45% or below). ASV is therefore contraindicated in HFrEF. HFpEF (preserved ejection fraction) is NOT a contraindication to ASV therapy.',
          explanationWrong: 'HFpEF (preserved ejection fraction) is not the ASV contraindication identified by SERVE-HF. The trial specifically studied patients with REDUCED ejection fraction. ASV may be used in patients with HFpEF and central sleep apnea.',
        },
      })
      console.log(`Fixed MQ-12: SDS Mini 10 - ASV contraindication HFpEF→HFrEF →${hfrChoice}`)
      fixed++
    }
  }

  // MQ-13: CPFT Mini 2 - Cough in first second: should repeat
  const mq13 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsn84f5300168c261p0mqq4g' } })
  if (mq13) {
    const choices = mq13.choices as Record<string, string>
    let repeatChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('repeat') || (v as string).toLowerCase().includes('rest')) {
        repeatChoice = k
        break
      }
    }
    if (repeatChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsn84f5300168c261p0mqq4g' },
        data: { correctChoice: repeatChoice },
      })
      console.log(`Fixed MQ-13: CPFT Mini 2 - cough first second →${repeatChoice}`)
      fixed++
    }
  }

  // MQ-14: CPFT Mini 20 - RQ 0.67 report vs investigate
  const mq14 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnaaxfg002st2b3zal2gnwk' } })
  if (mq14) {
    const choices = mq14.choices as Record<string, string>
    let investigateChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('investigate') || (v as string).toLowerCase().includes('leak') || (v as string).toLowerCase().includes('error')) {
        investigateChoice = k
        break
      }
    }
    if (investigateChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnaaxfg002st2b3zal2gnwk' },
        data: { correctChoice: investigateChoice },
      })
      console.log(`Fixed MQ-14: CPFT Mini 20 - RQ 0.67 →${investigateChoice}`)
      fixed++
    }
  }

  // MQ-15: CPFT Mini 22 - Height vs pulmonary capillary blood volume
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnb6j6y000v11gd9t4lp42q' },
    data: { correctChoice: 'C' },
  })
  console.log('Fixed MQ-15: CPFT Mini 22 - D→C (patient height)')
  fixed++

  // MQ-16: CPFT Mini 24 - Valsalva DLCO direction
  const mq16 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnb6jhq001y11gdgfk9arx8' } })
  if (mq16 && mq16.explanationCorrect) {
    const newExpl = mq16.explanationCorrect.replace(/elevated/gi, 'falsely decreased').replace(/falsely ELEVATED/gi, 'falsely decreased')
    await prisma.miniExamQuestion.update({
      where: { id: 'cmsnb6jhq001y11gdgfk9arx8' },
      data: { explanationCorrect: 'Valsalva maneuver during breath-holding reduces pulmonary capillary blood volume by increasing intrathoracic pressure, which decreases DLCO (falsely low result). The Mueller maneuver (inspiratory effort against a closed glottis) increases pulmonary capillary blood volume and may falsely elevate DLCO.' },
    })
    console.log('Fixed MQ-16: CPFT Mini 24 - Valsalva DLCO direction')
    fixed++
  }

  // MQ-17: CPFT Mini 24 - PaO2 55 moderate not severe
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnb6jhq002c11gd2gdnxz53' },
    data: { correctChoice: 'C' },
  })
  console.log('Fixed MQ-17: CPFT Mini 24 - PaO2 55 moderate hypoxemia D→C')
  fixed++

  // MQ-18: RPFT Mini 8 - BEV 100mL → 150mL
  const mq18 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnc1875001cui2hm1brfocb' } })
  if (mq18) {
    const choices = mq18.choices as Record<string, string>
    let correctBEV = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).includes('150 mL') || (v as string).includes('150mL')) {
        correctBEV = k
        break
      }
    }
    if (correctBEV && correctBEV !== mq18.correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnc1875001cui2hm1brfocb' },
        data: { correctChoice: correctBEV },
      })
      console.log(`Fixed MQ-18: RPFT Mini 8 - BEV threshold →${correctBEV}`)
      fixed++
    } else {
      console.log('Skipped MQ-18: no 150mL choice found')
      skipped++
    }
  }

  // MQ-19: RPFT Mini 9 - EVH target 21x → 30x FEV1
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnc18bw001xui2hsqyb6ont' },
    data: { correctChoice: 'A' },
  })
  console.log('Fixed MQ-19: RPFT Mini 9 - EVH target D→A (30x FEV1)')
  fixed++

  // MQ-20: RPFT Mini 10 - Use highest FEV1 not lowest
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsnc18gu0031ui2hxg8h8pu3' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed MQ-20: RPFT Mini 10 - impairment rating C→B (highest FEV1)')
  fixed++

  // MQ-21: RPFT Mini 22 - PC20/PD20 protocols reversed
  const mq21 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnddpbh0015br84r5zg6ctl' } })
  if (mq21) {
    const choices = mq21.choices as Record<string, string>
    let correctChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      const lower = (v as string).toLowerCase()
      if ((lower.includes('tidal') && lower.includes('pc20')) || (lower.includes('dosimeter') && lower.includes('pd20'))) {
        correctChoice = k
        break
      }
    }
    if (correctChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnddpbh0015br84r5zg6ctl' },
        data: { correctChoice },
      })
      console.log(`Fixed MQ-21: RPFT Mini 22 - PC20/PD20 protocols →${correctChoice}`)
      fixed++
    }
  }

  // MQ-22: RPFT Mini 29 - Borderline → mild hyperresponsiveness
  const mq22 = await prisma.miniExamQuestion.findUnique({ where: { id: 'cmsnddpl5001zsd0iltauz6nb' } })
  if (mq22) {
    const choices = mq22.choices as Record<string, string>
    let mildChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('mild')) {
        mildChoice = k
        break
      }
    }
    if (mildChoice) {
      await prisma.miniExamQuestion.update({
        where: { id: 'cmsnddpl5001zsd0iltauz6nb' },
        data: { correctChoice: mildChoice },
      })
      console.log(`Fixed MQ-22: RPFT Mini 29 - borderline→mild →${mildChoice}`)
      fixed++
    }
  }

  // ============================================================
  // SDS FULL EXAM FIXES (32 errors - systematic shuffle)
  // ============================================================
  const sdsFullFixes: { id: string; correct: string; desc: string }[] = [
    // SDS Full 1
    { id: 'cmsnm1k3c0006dguxiyn1jyiq', correct: 'B', desc: 'moderate OSA not UARS' },
    { id: 'cmsnm1k3c0008dguxp701tmxi', correct: 'C', desc: 'AHI>=40 for split-night' },
    { id: 'cmsnm1k3c000adguxc71l5cir', correct: 'B', desc: 'OHS PaCO2 48/PaO2 62' },
    { id: 'cmsnm1k3c000bdguxhski6s9n', correct: 'B', desc: 'switch mask for leak' },
    { id: 'cmsnm1k3c000ddguxvo4wbuvx', correct: 'C', desc: 'hypopnea definition' },
    { id: 'cmsnm1k3c000edguxqbu9t490', correct: 'B', desc: 'pediatric apnea 2 breaths' },
    { id: 'cmsnm1k3c000fdguxakuj30ui', correct: 'B', desc: 'PLMD not RBD' },
    { id: 'cmsnm1k3c000gdgux1nlrlzr3', correct: 'C', desc: 'ASV for central apnea' },
    { id: 'cmsnm1k3c000jdguxsw5sctfs', correct: 'C', desc: 'RLS not PLMD' },
    { id: 'cmsnm1k3c000kdguxcprjfwt0', correct: 'B', desc: 'N3 not REM for 60% SWA' },
    { id: 'cmsnm1k3c000tdguxp55m6m7x', correct: 'B', desc: 'below 5 kohms impedance' },
    { id: 'cmsnm1k3c000vdguxvtltrx4q', correct: 'C', desc: 'sleepwalking not nightmares' },
    { id: 'cmsnm1k3c000wdguxcmhnk1dn', correct: 'C', desc: 'pediatric hypopnea 50% 2 breaths' },
    { id: 'cmsnm1k3d0010dguxxonnn7pz', correct: 'B', desc: 'nocturnal hypoventilation 10mmHg' },
    { id: 'cmsnm1k3e002tdgux8yhn1e03', correct: 'A', desc: 'mild OSA+EDS needs treatment' },
    // SDS Full 2
    { id: 'cmsnm1kdw002wdguxd1ntul3z', correct: 'B', desc: 'central apneas not obstructive' },
    { id: 'cmsnm1kdw0031dguxtmmzpak2', correct: 'B', desc: 'ASV auto-adjusts PS' },
    { id: 'cmsnm1kdx003ldguxjorz44dm', correct: 'B', desc: 'continue BiPAP and monitor' },
    { id: 'cmsnm1kdx003ndgux6f1hsdfp', correct: 'B', desc: 'K-complex 8 microvolts' },
    { id: 'cmsnm1kdx003tdguxmxxnyyqs', correct: 'B', desc: 'impedance within 500 ohms' },
    { id: 'cmsnm1kdx004bdguxpbc57n2v', correct: 'B', desc: 'position-dependent events' },
    { id: 'cmsnm1kdx004cdguxoz6cw6mo', correct: 'B', desc: 'MAD not throat exercises' },
    { id: 'cmsnm1kdx004edguxzpjp7ctb', correct: 'B', desc: 'EPR decreases exhalation pressure' },
    { id: 'cmsnm1kdx004fdguxygfrmyuv', correct: 'B', desc: 'MSLT 1.5-3 hrs after PSG' },
    { id: 'cmsnm1kdx004gdguxlgqo64f7', correct: 'B', desc: 'newborn 50% REM sleep' },
    { id: 'cmsnm1koa007edguxsol1jz3o', correct: 'B', desc: 'filter replace 1-3 months' },
    // SDS Full 3
    { id: 'cmsnm1ko9006kdguxm7znk6br', correct: 'B', desc: 'SCN master circadian pacemaker' },
    { id: 'cmsnm1ko9006mdguxrcggrgr8', correct: 'B', desc: 'sleep efficiency 68% not 75%' },
    { id: 'cmsnm1ko9006odguxlelysvzt', correct: 'B', desc: 'ASV adapting normally not malfunction' },
    { id: 'cmsnm1ko9006rdguxjpossqof', correct: 'B', desc: 'switch to ASV not increase CPAP' },
    { id: 'cmsnm1koa007gdguxr6c3rfuj', correct: 'B', desc: 'PLMI 12/hr with arousals' },
    { id: 'cmsnm1koa007hdgux1pnc3trp', correct: 'B', desc: 'pressure support 10 not 8' },
  ]

  for (const fix of sdsFullFixes) {
    await prisma.fullExamQuestion.update({
      where: { id: fix.id },
      data: { correctChoice: fix.correct },
    })
    console.log(`Fixed SDS Full: →${fix.correct} (${fix.desc})`)
    fixed++
  }

  // ============================================================
  // OTHER FULL EXAM FIXES
  // ============================================================

  // FQ-1: NPS Full 1 - 1-year-old choking: back blows→abdominal thrusts
  const fq1 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnkneyr001lck1358x1ja3q' } })
  if (fq1) {
    const choices = fq1.choices as Record<string, string>
    let abdChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('abdominal thrust') || (v as string).toLowerCase().includes('heimlich')) {
        abdChoice = k
        break
      }
    }
    if (abdChoice) {
      await prisma.fullExamQuestion.update({
        where: { id: 'cmsnkneyr001lck1358x1ja3q' },
        data: { correctChoice: abdChoice },
      })
      console.log(`Fixed FQ-1: NPS Full 1 - 1yr choking →${abdChoice}`)
      fixed++
    }
  }

  // FQ-2: NPS Full 3 - Moderate BPD is actually severe
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsnknfgu006vck13l0vnd86n' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed FQ-2: NPS Full 3 - BPD severity C→B')
  fixed++

  // FQ-3: TMC Full 2 - Pendant reservoir vs demand-flow
  const fq3 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnkneme003edzyup5enasq3' } })
  if (fq3) {
    const choices = fq3.choices as Record<string, string>
    let pendantChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('pendant') || (v as string).toLowerCase().includes('reservoir cannula') || (v as string).toLowerCase().includes('oxymizer')) {
        pendantChoice = k
        break
      }
    }
    if (pendantChoice) {
      await prisma.fullExamQuestion.update({
        where: { id: 'cmsnkneme003edzyup5enasq3' },
        data: { correctChoice: pendantChoice },
      })
      console.log(`Fixed FQ-3: TMC Full 2 - pendant reservoir →${pendantChoice}`)
      fixed++
    }
  }

  // FQ-4: CPFT Full 1 - Methacholine stop test not wait
  const fq4 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnlyyrd00098930dbyfs2nt' } })
  if (fq4) {
    const choices = fq4.choices as Record<string, string>
    let stopChoice = ''
    for (const [k, v] of Object.entries(choices)) {
      if ((v as string).toLowerCase().includes('stop') || (v as string).toLowerCase().includes('positive') || (v as string).toLowerCase().includes('bronchodilator')) {
        stopChoice = k
        break
      }
    }
    if (stopChoice) {
      await prisma.fullExamQuestion.update({
        where: { id: 'cmsnlyyrd00098930dbyfs2nt' },
        data: { correctChoice: stopChoice },
      })
      console.log(`Fixed FQ-4: CPFT Full 1 - methacholine stop test →${stopChoice}`)
      fixed++
    }
  }

  // FQ-5: CPFT Full 2 - Flow-volume loop restrictive not poor effort
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsnlyyyt003a89309zs0v592' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed FQ-5: CPFT Full 2 - flow-volume loop D→B (restrictive)')
  fixed++

  // FQ-6: CPFT Full 3 - DLCO increases at altitude
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsnlyz4v007r8930pogyse37' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed FQ-6: CPFT Full 3 - DLCO altitude C→B (increases)')
  fixed++

  // FQ-7: RPFT Full 3 - Shunt fraction 5-10% not <5%
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsnnkcpn007ga7p6dy2dcjck' },
    data: { correctChoice: 'B' },
  })
  console.log('Fixed FQ-7: RPFT Full 3 - shunt fraction A→B (5-10%)')
  fixed++

  // FQ-8: RPFT Full 3 - 6MWT encouragement every minute not 30s
  const fq8 = await prisma.fullExamQuestion.findUnique({ where: { id: 'cmsnnkcpm006za7p6lg7s2ke1' } })
  if (fq8) {
    const choices = fq8.choices as Record<string, string>
    // Fix the choice text and explanation
    if (choices['B'] && (choices['B'] as string).includes('30 seconds')) {
      choices['B'] = (choices['B'] as string).replace('30 seconds', 'minute')
    }
    await prisma.fullExamQuestion.update({
      where: { id: 'cmsnnkcpm006za7p6lg7s2ke1' },
      data: {
        choices,
        explanationCorrect: fq8.explanationCorrect?.replace(/every 30 seconds/gi, 'every minute').replace(/30 seconds or every minute/gi, 'every minute') || fq8.explanationCorrect,
      },
    })
    console.log('Fixed FQ-8: RPFT Full 3 - 6MWT encouragement 30s→every minute')
    fixed++
  }

  console.log(`\n=== AUDIT FIX SUMMARY ===`)
  console.log(`Total fixes applied: ${fixed}`)
  console.log(`Skipped (needs manual review): ${skipped}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
