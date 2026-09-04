import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let fixed = 0

  // 1. SDS Mini Exam 1 - Q13 (cmsn6d709000eizzcgu9eonih)
  // correctChoice is D but explanation describes C as the right answer.
  // D says "result is adequate" but explanation says "suboptimal, full-night should be recommended" = C
  // FIX: correctChoice should be C
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn6d709000eizzcgu9eonih' },
    data: {
      correctChoice: 'C',
      explanationCorrect: 'According to AASM guidelines, a split-night titration is considered adequate only if the recommended CPAP pressure eliminates or nearly eliminates respiratory events during REM sleep in the supine position. Since REM sleep was not captured during the titration portion, the titration is suboptimal and a full-night CPAP titration study should be recommended to ensure the prescribed pressure is adequate during all sleep stages.',
      explanationWrong: 'Accepting the titration at 11 cmH2O without documenting efficacy during REM sleep risks undertreating the patient, since OSA is often most severe during REM. Prescribing APAP with a wide range may be an alternative but does not address the need for proper titration documentation. The split-night result is not adequate because REM documentation during the diagnostic portion does not validate the titration pressure during REM.',
    },
  })
  console.log('Fixed: SDS Mini Exam 1 Q13 - correctChoice D→C')
  fixed++

  // 2. RPFT Mini Exam 15 - Q19 (cmsncu7v90030crehts03qwub)
  // correctChoice is A (Variable extrathoracic) but explanation describes fixed obstruction (D)
  // FIF50/FEF50 ratio of 0.9 = fixed obstruction, not variable extrathoracic
  // FIX: correctChoice should be D
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsncu7v90030crehts03qwub' },
    data: {
      correctChoice: 'D',
      explanationCorrect: 'A FIF50/FEF50 ratio close to 1.0 (0.9 in this case) with both inspiratory and expiratory flows reduced indicates a fixed obstruction that limits flow nearly equally during both respiratory phases. This is characteristic of a fixed tracheal stenosis where the structural narrowing does not change with respiratory phase, unlike variable obstructions which show phase-dependent flow limitation.',
      explanationWrong: 'Variable extrathoracic obstruction would show predominantly inspiratory flow limitation with FIF50/FEF50 less than 0.8. Variable intrathoracic obstruction would show predominantly expiratory limitation with FIF50/FEF50 greater than 1.0. Normal flow-volume loops show much higher peak flows without the plateau pattern seen in obstruction.',
    },
  })
  console.log('Fixed: RPFT Mini Exam 15 Q19 - correctChoice A→D')
  fixed++

  // 3. ACCS Mini Exam 4 - Q3 (cmsn3dtb1001yhjacjb5ltttm)
  // explanationWrong says "The statement in option C describes real contributors" — C is correct
  // FIX: rewrite explanationWrong to not reference option C as wrong
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn3dtb1001yhjacjb5ltttm' },
    data: {
      explanationWrong: 'Peak inspiratory pressure includes both resistive and elastic components and does contribute to mechanical power calculation. Inspiratory flow rate contributes to the resistive component of mechanical power. The patient\'s BMI is not a direct component of the mechanical power equation, though ideal body weight is used to determine appropriate tidal volume.',
    },
  })
  console.log('Fixed: ACCS Mini Exam 4 Q3 - explanationWrong removed incorrect option C reference')
  fixed++

  // 4. SDS Mini Exam 28 - Q11 (cmsn7tybb001kt8lqzbv1wufq)
  // explanationWrong says "Option B states the correct duration but option D provides the complete rationale"
  // D is correct, so this sentence validates D in the wrong section
  // FIX: rewrite explanationWrong
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn7tybb001kt8lqzbv1wufq' },
    data: {
      explanationWrong: 'Ending the nap immediately after REM observation violates the standard protocol and may miss additional clinically relevant data. The 20-minute window applies to sleep onset latency (if no sleep occurs within 20 minutes of lights out, the trial ends), not the post-sleep observation period. While continuing for 15 minutes from sleep onset is correct, the complete rationale includes observing for the full duration regardless of when REM appears.',
    },
  })
  console.log('Fixed: SDS Mini Exam 28 Q11 - explanationWrong removed incorrect option D reference')
  fixed++

  // 5. SDS Mini Exam 29 - Q2 (cmsn7tyfv001xt8lqx1auxuic)
  // explanationWrong says "option D provides the more complete clinical interpretation" — D is correct
  // FIX: rewrite explanationWrong
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn7tyfv001xt8lqx1auxuic' },
    data: {
      explanationWrong: 'The compensated pH (7.36) and stable clinical status do not indicate acute respiratory failure requiring immediate hospitalization. The ABG is not completely normal; PaCO2 of 48 with elevated bicarbonate indicates chronic hypoventilation. While identifying the pattern as compensated respiratory acidosis is accurate, it does not capture the full clinical picture or guide the next management step of reassessing nocturnal ventilation adequacy.',
    },
  })
  console.log('Fixed: SDS Mini Exam 29 Q2 - explanationWrong removed incorrect option D reference')
  fixed++

  // 6. SDS Mini Exam 30 - Q3 (cmsn7tyka002kt8lq63syt8xp)
  // explanationWrong says "option B is more precise" — B is correct
  // FIX: rewrite explanationWrong
  await prisma.miniExamQuestion.update({
    where: { id: 'cmsn7tyka002kt8lq63syt8xp' },
    data: {
      explanationWrong: 'CPAP machines maintain calibrated pressure output; a device malfunction would be reflected in the download data showing pressure variability or errors. Dismissing the bed partner\'s observation is inappropriate; bed partner reports of snoring are generally reliable clinical indicators. The concept of off-device sleep time causing snoring is correct, but the most precise explanation focuses on the specific timing during the last 1-2 hours of the night when the patient is not wearing CPAP.',
    },
  })
  console.log('Fixed: SDS Mini Exam 30 Q3 - explanationWrong removed incorrect option B reference')
  fixed++

  // 7. SDS Full Exam 3 - Q6 (cmsnm1ko9005vdgux9lubs59c)
  // explanationWrong says "Normal PaCO2 (42) excludes OHS in option D" — should say option B
  // D is correct (BMI 40, PaCO2 50), B has PaCO2 42
  // FIX: correct the letter reference
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsnm1ko9005vdgux9lubs59c' },
    data: {
      explanationWrong: 'BMI 28 with normal CO2 does not meet obesity or hypercapnia criteria. BMI 35 with normal PaCO2 (42) excludes OHS because daytime hypercapnia is required. COPD explains the hypercapnia in the patient with BMI 25, so the hypoventilation has an identifiable alternative cause.',
    },
  })
  console.log('Fixed: SDS Full Exam 3 Q6 - explanationWrong corrected option D→B reference')
  fixed++

  // 8. ACCS Full Exam 2 - Q40 (cmsngq0na003z13wgykfbi42q)
  // Choices data is CORRUPTED (stored as char-by-char instead of A/B/C/D object)
  // FIX: Rebuild the choices JSON properly
  await prisma.fullExamQuestion.update({
    where: { id: 'cmsngq0na003z13wgykfbi42q' },
    data: {
      choices: {
        A: 'Antibiotic stewardship',
        B: 'Assess, prevent, and manage pain',
        C: 'Advanced imaging protocols',
        D: 'Arterial line placement',
      },
      correctChoice: 'B',
      explanationCorrect: 'The ABCDEF bundle (ICU Liberation Bundle) includes: Assess, prevent, and manage pain (A), Both spontaneous awakening and breathing trials (B), Choice of analgesia and sedation (C), Delirium assessment and prevention (D), Early mobility and exercise (E), and Family engagement and empowerment (F). Assessing, preventing, and managing pain is a core component.',
      explanationWrong: 'Antibiotic stewardship, advanced imaging protocols, and arterial line placement are not components of the ABCDEF bundle. The bundle focuses on pain management, sedation optimization, delirium prevention, early mobility, and family engagement to improve ICU outcomes.',
    },
  })
  console.log('Fixed: ACCS Full Exam 2 Q40 - rebuilt corrupted choices data')
  fixed++

  console.log(`\nTotal fixes applied: ${fixed}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
