import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SDS_DIVISION_ID = 'cmsm41fwz0003zf54l0h5llrr'

async function main() {
  console.log('Seeding SDS mini exams 16-20...')

  // ─── EXAM 16 ───────────────────────────────────────────
  // Topics: Complex titration scenarios, idiopathic hypersomnia, altitude and sleep
  // Correct answer distribution: A=5(Q3,Q7,Q11,Q15,Q19) B=5(Q1,Q6,Q10,Q14,Q20) C=5(Q4,Q8,Q12,Q16,Q18) D=5(Q2,Q5,Q9,Q13,Q17)
  const exam16 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 16',
      examIndex: 16,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam16.id,
        questionIndex: 1,
        questionText:
          'A morbidly obese patient (BMI 52) with severe OSA is being titrated on CPAP. At 18 cmH2O, obstructive apneas persist and the patient reports discomfort from high pressure. What is the most appropriate next step?',
        choices: {
          A: 'Increase CPAP to 20 cmH2O and add supplemental oxygen',
          B: 'Switch to bilevel PAP and titrate to eliminate obstructive events',
          C: 'Discontinue the study and refer for surgical evaluation',
          D: 'Add a mandibular advancement device to the current CPAP',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When CPAP fails to eliminate obstructive events at high pressures or the patient cannot tolerate the required pressure, bilevel PAP is the recommended next step. BiPAP allows a lower expiratory pressure for comfort while maintaining adequate inspiratory pressure to splint the airway.',
        explanationWrong:
          'Increasing CPAP beyond 20 cmH2O is generally not recommended and may worsen aerophagia and mask leak. Adding supplemental oxygen does not address the obstructive events. Discontinuing the study prematurely is inappropriate when alternative pressure modes are available. Combining an oral appliance with CPAP during a titration study is not standard practice.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 2,
        questionText:
          'A patient with Duchenne muscular dystrophy is referred for a sleep study. The PSG shows significant hypoventilation with PaCO2 rising to 58 mmHg during REM sleep but no obstructive events. Which PAP mode is most appropriate for this patient?',
        choices: {
          A: 'Auto-CPAP with expiratory pressure relief',
          B: 'CPAP at 8 cmH2O',
          C: 'Auto-BiPAP with a backup rate',
          D: 'Bilevel PAP in spontaneous/timed mode with a backup rate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Patients with neuromuscular disease who develop nocturnal hypoventilation without obstruction benefit from bilevel PAP in S/T mode. The backup rate ensures ventilatory support even if the patient fails to trigger breaths due to respiratory muscle weakness, which is common during REM sleep when accessory muscle tone is absent.',
        explanationWrong:
          'Auto-CPAP and fixed CPAP do not provide inspiratory assistance for hypoventilation and are designed to treat obstructive events. Auto-BiPAP may not reliably provide a backup rate in all devices and is less predictable in neuromuscular disease where the patient may not generate adequate triggers.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 3,
        questionText:
          'During a titration study for a patient with obesity hypoventilation syndrome, the technologist notes persistent central apneas emerging at a BiPAP setting of 16/10. What phenomenon is most likely occurring?',
        choices: {
          A: 'Treatment-emergent central sleep apnea (complex sleep apnea)',
          B: 'Cheyne-Stokes respiration triggered by heart failure',
          C: 'Medication-induced central apnea from residual anesthesia',
          D: 'Central apnea due to excessive pressure causing glottic closure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Treatment-emergent central sleep apnea (also called complex sleep apnea) occurs when central apneas appear or persist after obstructive events are eliminated by PAP therapy. This is a recognized phenomenon during PAP titration, particularly when pressures effectively eliminate obstruction but unmask an underlying central apnea tendency.',
        explanationWrong:
          'While Cheyne-Stokes respiration can occur in heart failure, the clinical scenario describes events emerging during titration of an OHS patient, making treatment-emergent CSA more likely. Residual anesthesia would not be expected in an elective sleep study. Excessive pressure causing glottic closure typically produces obstructive, not central, events.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 4,
        questionText:
          'Idiopathic hypersomnia differs from narcolepsy type 2 primarily in which of the following ways?',
        choices: {
          A: 'Patients with idiopathic hypersomnia have cataplexy',
          B: 'MSLT in idiopathic hypersomnia shows a mean sleep latency above 8 minutes',
          C: 'Patients with idiopathic hypersomnia typically have prolonged, unrefreshing naps',
          D: 'Idiopathic hypersomnia is associated with HLA-DQB1*0602',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A hallmark distinguishing feature of idiopathic hypersomnia is that patients experience prolonged naps that are unrefreshing, in contrast to narcolepsy where naps tend to be short and refreshing. Additionally, patients with idiopathic hypersomnia often have sleep inertia (difficulty waking) and may have prolonged total sleep time.',
        explanationWrong:
          'Cataplexy is a feature of narcolepsy type 1, not idiopathic hypersomnia. In idiopathic hypersomnia, the MSLT typically shows a mean sleep latency of 8 minutes or less (similar to narcolepsy) but with fewer than 2 SOREMPs. HLA-DQB1*0602 is associated with narcolepsy type 1, not idiopathic hypersomnia.',
        topic: 'Idiopathic hypersomnia',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 5,
        questionText:
          'A healthy mountaineer ascends rapidly from sea level to 4,200 meters. Which sleep disturbance is most commonly observed at this altitude?',
        choices: {
          A: 'Increased REM sleep with vivid nightmares only',
          B: 'Obstructive sleep apnea from pharyngeal edema',
          C: 'Complete insomnia with no recorded sleep',
          D: 'Periodic breathing with central apneas during NREM sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'At high altitude, the hypoxic ventilatory response causes hyperventilation, lowering PaCO2 below the apneic threshold. This results in periodic breathing with alternating hyperventilation and central apneas, predominantly during NREM sleep. This is the most common sleep disturbance at altitudes above 2,500 meters.',
        explanationWrong:
          'While vivid dreams can occur at altitude, REM sleep is typically reduced, not increased. Obstructive sleep apnea from pharyngeal edema is not a recognized altitude-related phenomenon. Complete insomnia does not occur; rather, sleep fragmentation and reduced sleep efficiency are typical.',
        topic: 'Altitude and sleep',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 6,
        questionText:
          'Which medication is considered first-line pharmacotherapy for idiopathic hypersomnia?',
        choices: {
          A: 'Sodium oxybate',
          B: 'Modafinil',
          C: 'Flumazenil',
          D: 'Suvorexant',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Modafinil is recommended as first-line pharmacotherapy for idiopathic hypersomnia. It promotes wakefulness through histamine and dopamine pathways and has a favorable side effect profile compared to traditional stimulants. It is also first-line for narcolepsy-related excessive daytime sleepiness.',
        explanationWrong:
          'Sodium oxybate is primarily used for narcolepsy and has limited evidence in idiopathic hypersomnia, though it may be tried off-label. Flumazenil has been studied experimentally for IH but is not considered first-line therapy. Suvorexant is an orexin receptor antagonist used for insomnia and would worsen hypersomnia.',
        topic: 'Idiopathic hypersomnia',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 7,
        questionText:
          'A patient with severe COPD and an awake SpO2 of 90% undergoes a sleep study showing an SpO2 nadir of 74% with prolonged time below 88%. There are no significant apneas or hypopneas. What is the most appropriate treatment?',
        choices: {
          A: 'Nocturnal supplemental oxygen titrated to maintain SpO2 above 88%',
          B: 'CPAP at 10 cmH2O',
          C: 'BiPAP in S/T mode at 14/8',
          D: 'Adaptive servo-ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In COPD patients with nocturnal hypoxemia but no significant obstructive sleep apnea, nocturnal supplemental oxygen is the appropriate treatment. The goal is to maintain SpO2 above 88% during sleep. PAP therapy is not indicated when there are no apneas or hypopneas to treat.',
        explanationWrong:
          'CPAP is used for obstructive sleep apnea, which is not present in this scenario. BiPAP in S/T mode would be appropriate if there were hypoventilation with hypercapnia, not isolated hypoxemia. Adaptive servo-ventilation is used for complex or central sleep apnea, not isolated nocturnal hypoxemia.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 8,
        questionText:
          'Acetazolamide is sometimes prescribed for altitude-related sleep disturbances. Its beneficial effect on periodic breathing at altitude is primarily due to which mechanism?',
        choices: {
          A: 'Stimulation of peripheral chemoreceptors by metabolic alkalosis',
          B: 'Direct suppression of the central respiratory pattern generator',
          C: 'Induction of metabolic acidosis that stabilizes the ventilatory drive',
          D: 'Relaxation of pharyngeal dilator muscles to prevent obstruction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Acetazolamide is a carbonic anhydrase inhibitor that produces a mild metabolic acidosis by promoting renal bicarbonate excretion. This acidosis stimulates ventilation and narrows the gap between resting PaCO2 and the apneic threshold, thereby stabilizing breathing and reducing periodic central apneas at altitude.',
        explanationWrong:
          'Acetazolamide produces metabolic acidosis, not alkalosis. It does not directly suppress the central respiratory pattern generator; rather, it stabilizes it. It has no significant effect on pharyngeal dilator muscle tone.',
        topic: 'Altitude and sleep',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 9,
        questionText:
          'During a complex titration for a patient with both severe OSA and comorbid chronic opioid use, the technologist observes Biot (ataxic) breathing. Which PAP mode should be avoided in this patient?',
        choices: {
          A: 'BiPAP with a backup rate',
          B: 'CPAP',
          C: 'Volume-assured pressure support (VAPS)',
          D: 'Adaptive servo-ventilation (ASV)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Adaptive servo-ventilation is contraindicated or should be used with extreme caution in opioid-induced central sleep apnea. The algorithm may not respond appropriately to the irregular ataxic breathing pattern seen with chronic opioid use. BiPAP-ST or VAPS with a backup rate are preferred alternatives to ensure adequate ventilation.',
        explanationWrong:
          'BiPAP with a backup rate is an appropriate choice for opioid-related CSA as it ensures minimum ventilation. CPAP alone may not adequately address central apneas but is not specifically contraindicated. VAPS modes can be effective as they guarantee tidal volume delivery with a backup rate.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 10,
        questionText:
          'A patient with newly diagnosed idiopathic hypersomnia asks about driving safety. According to current guidelines, which statement is most accurate?',
        choices: {
          A: 'Patients with idiopathic hypersomnia are permanently disqualified from driving',
          B: 'Driving should be restricted until excessive sleepiness is adequately controlled with treatment',
          C: 'Driving is safe as long as the patient sleeps at least 10 hours nightly',
          D: 'There are no driving restrictions for idiopathic hypersomnia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Patients with idiopathic hypersomnia should be advised against driving until their excessive daytime sleepiness is adequately controlled through pharmacotherapy and sleep hygiene measures. This is assessed clinically and may include objective measures of alertness. Once treatment is effective, driving privileges can be reconsidered.',
        explanationWrong:
          'Permanent disqualification is not appropriate if the condition can be adequately managed. Simply sleeping 10 hours does not guarantee daytime alertness in idiopathic hypersomnia, as the sleepiness persists despite adequate or even prolonged sleep. Stating there are no restrictions is incorrect and potentially dangerous.',
        topic: 'Idiopathic hypersomnia',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 11,
        questionText:
          'In a patient with amyotrophic lateral sclerosis (ALS) being titrated for nocturnal hypoventilation, which parameter is the most important to monitor during the titration study?',
        choices: {
          A: 'End-tidal or transcutaneous CO2 monitoring',
          B: 'Continuous blood pressure measurement',
          C: 'Esophageal pressure monitoring',
          D: 'Core body temperature',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In neuromuscular disease patients such as ALS, the primary concern is hypoventilation leading to hypercapnia. End-tidal CO2 (EtCO2) or transcutaneous CO2 (TcCO2) monitoring is essential during titration to ensure that ventilatory support is adequately reducing CO2 levels. Pulse oximetry alone may not detect hypoventilation until late.',
        explanationWrong:
          'Continuous blood pressure monitoring, while sometimes useful, is not the primary concern during ventilatory titration. Esophageal pressure monitoring is used for measuring respiratory effort in research or complex diagnostic scenarios, not routine titration. Core body temperature monitoring is not relevant to PAP titration.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 12,
        questionText:
          'Which of the following best describes the diagnostic criteria for idiopathic hypersomnia according to ICSD-3?',
        choices: {
          A: 'Mean sleep latency less than 8 minutes with 2 or more SOREMPs on MSLT',
          B: 'Self-reported excessive sleepiness for at least 6 months with no other explanation',
          C: 'Mean sleep latency of 8 minutes or less with fewer than 2 SOREMPs on MSLT, or total 24-hour sleep time greater than 660 minutes on extended monitoring',
          D: 'Cataplexy plus mean sleep latency less than 5 minutes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'ICSD-3 diagnostic criteria for idiopathic hypersomnia require daily excessive sleepiness for at least 3 months, plus either a mean sleep latency of 8 minutes or less with fewer than 2 SOREMPs on MSLT, or a total 24-hour sleep time of 660 minutes or more documented by extended polysomnography or actigraphy. Other causes must be excluded.',
        explanationWrong:
          'A mean sleep latency under 8 minutes with 2 or more SOREMPs meets criteria for narcolepsy type 2, not IH. Self-reported sleepiness alone without objective testing is insufficient. Cataplexy with very short sleep latency describes narcolepsy type 1.',
        topic: 'Idiopathic hypersomnia',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 13,
        questionText:
          'At high altitude, which stage of sleep is most significantly reduced compared to sea level?',
        choices: {
          A: 'Stage N1',
          B: 'Stage N2',
          C: 'REM sleep',
          D: 'Stage N3 (slow-wave sleep)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Slow-wave sleep (stage N3) is the most significantly reduced stage of sleep at high altitude. The frequent arousals caused by periodic breathing and the overall reduction in sleep quality preferentially decrease deep sleep. REM sleep may also be somewhat reduced, but N3 shows the most consistent and significant decrease.',
        explanationWrong:
          'Stage N1 typically increases at altitude due to sleep fragmentation. Stage N2 may be relatively preserved. REM sleep can be reduced but not as consistently or dramatically as N3 in most altitude sleep studies.',
        topic: 'Altitude and sleep',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 14,
        questionText:
          'A patient with severe OSA and congestive heart failure (ejection fraction 25%) undergoes a titration study. After eliminating obstructive events with CPAP at 12 cmH2O, a Cheyne-Stokes breathing pattern with central apneas emerges. What is the recommended approach?',
        choices: {
          A: 'Immediately switch to adaptive servo-ventilation',
          B: 'Continue CPAP at 12 cmH2O and reassess in 90 days, as treatment-emergent CSA often resolves',
          C: 'Increase CPAP to 16 cmH2O to eliminate the central events',
          D: 'Discontinue PAP therapy and prescribe theophylline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Treatment-emergent central sleep apnea during initial CPAP titration resolves in many patients with continued CPAP use over weeks to months. Current guidelines recommend continuing CPAP and reassessing. Importantly, ASV is contraindicated in patients with heart failure and ejection fraction below 45% based on the SERVE-HF trial results.',
        explanationWrong:
          'ASV is contraindicated in heart failure patients with EF below 45% due to increased cardiovascular mortality shown in the SERVE-HF trial. Increasing CPAP pressure beyond what is needed for obstruction is unlikely to resolve central apneas and may worsen them. Theophylline is not a standard treatment and discontinuing PAP leaves the OSA untreated.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 15,
        questionText:
          'Which of the following clinical features most strongly suggests idiopathic hypersomnia rather than insufficient sleep syndrome?',
        choices: {
          A: 'Severe sleep inertia (sleep drunkenness) despite adequate total sleep time',
          B: 'Improvement in sleepiness on weekends when the patient sleeps longer',
          C: 'Excessive caffeine consumption to stay alert during the day',
          D: 'Normal MSLT mean sleep latency when sleep extended to 9 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Severe sleep inertia (also called sleep drunkenness) - prolonged difficulty transitioning to full alertness upon awakening - is a hallmark feature of idiopathic hypersomnia that is not typically seen in insufficient sleep syndrome. In insufficient sleep syndrome, extending sleep duration typically resolves the excessive sleepiness.',
        explanationWrong:
          'Improvement with extended sleep is characteristic of insufficient sleep syndrome, not IH. Excessive caffeine use is nonspecific and seen in many conditions. A normal MSLT with extended sleep would suggest insufficient sleep syndrome rather than IH.',
        topic: 'Idiopathic hypersomnia',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 16,
        questionText:
          'When titrating a patient with overlap syndrome (COPD and OSA) on bilevel PAP, which additional monitoring parameter is most critical compared to a standard OSA titration?',
        choices: {
          A: 'Continuous EEG monitoring from additional electrode sites',
          B: 'Esophageal manometry',
          C: 'Continuous or spot-check CO2 monitoring (TcCO2 or EtCO2)',
          D: 'Continuous cardiac output measurement',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In overlap syndrome, the combination of COPD and OSA places the patient at heightened risk for hypoventilation and hypercapnia. CO2 monitoring (transcutaneous or end-tidal) is critical during titration to ensure that ventilatory support is adequate and to detect hypoventilation that may not be apparent from oximetry alone.',
        explanationWrong:
          'Additional EEG sites are not specifically necessary for overlap syndrome titration. Esophageal manometry is used for research purposes or specialized diagnostic scenarios. Continuous cardiac output measurement is not standard during PAP titration.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 17,
        questionText:
          'Supplemental oxygen at altitude improves sleep primarily by which mechanism?',
        choices: {
          A: 'Increasing REM sleep rebound through serotonergic activation',
          B: 'Decreasing core body temperature to promote sleep onset',
          C: 'Reducing pharyngeal resistance to prevent obstructive events',
          D: 'Stabilizing ventilatory control by reducing hypoxic drive oscillations',
        },
        correctChoice: 'D',
        explanationCorrect:
          'At altitude, the hypoxic ventilatory response creates oscillations between hyperventilation and central apnea. Supplemental oxygen mitigates hypoxemia, dampens the exaggerated hypoxic ventilatory response, and stabilizes the ventilatory control system, thereby reducing periodic breathing and associated arousals.',
        explanationWrong:
          'Supplemental oxygen does not specifically increase REM through serotonergic mechanisms. It does not significantly affect core body temperature. The issue at altitude is central, not obstructive, and oxygen does not change pharyngeal resistance.',
        topic: 'Altitude and sleep',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 18,
        questionText:
          'In a patient with myasthenia gravis undergoing PAP titration for nocturnal hypoventilation, which body position is most likely to worsen respiratory function during sleep?',
        choices: {
          A: 'Left lateral decubitus',
          B: 'Right lateral decubitus',
          C: 'Supine position',
          D: 'Prone position',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In neuromuscular diseases such as myasthenia gravis, the supine position worsens respiratory function because the diaphragm must work against gravitational displacement of abdominal contents. Diaphragmatic weakness is often unmasked or exacerbated in the supine position, leading to more pronounced hypoventilation.',
        explanationWrong:
          'Lateral positions generally offload the diaphragm somewhat compared to supine and are often better tolerated. Prone positioning can actually support diaphragmatic function in some neuromuscular patients by allowing gravity to assist abdominal expansion.',
        topic: 'Complex titration scenarios',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 19,
        questionText:
          'Which of the following distinguishes high-altitude periodic breathing from Cheyne-Stokes respiration seen in heart failure?',
        choices: {
          A: 'High-altitude periodic breathing has a shorter cycle length (typically 12-20 seconds) compared to the longer cycles in heart failure CSR',
          B: 'High-altitude periodic breathing occurs exclusively during REM sleep',
          C: 'Cheyne-Stokes respiration has a shorter cycle length than altitude periodic breathing',
          D: 'High-altitude periodic breathing is associated with crescendo-decrescendo patterns while CSR is not',
        },
        correctChoice: 'A',
        explanationCorrect:
          'High-altitude periodic breathing typically has shorter cycle lengths (12-20 seconds) because it is driven by a fast-responding peripheral chemoreceptor loop. Cheyne-Stokes respiration in heart failure has longer cycle lengths (45-90 seconds) due to prolonged circulation time between the lungs and chemoreceptors.',
        explanationWrong:
          'High-altitude periodic breathing occurs predominantly during NREM sleep, not exclusively during REM. Cheyne-Stokes respiration has longer, not shorter, cycle lengths. Both conditions can show crescendo-decrescendo patterns; this does not distinguish them.',
        topic: 'Altitude and sleep',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 20,
        questionText:
          'A patient with a BMI of 55 and known OHS is being titrated on BiPAP. At settings of 24/14, the obstructive events are eliminated but the SpO2 remains in the 82-85% range. What is the most appropriate next step?',
        choices: {
          A: 'Increase the IPAP to 30 cmH2O',
          B: 'Add supplemental oxygen to the PAP circuit while maintaining current BiPAP settings',
          C: 'Switch to CPAP at 20 cmH2O',
          D: 'Decrease the EPAP to 8 cmH2O to improve comfort',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When BiPAP has eliminated obstructive events but hypoxemia persists, supplemental oxygen should be added to the PAP circuit. The persistent hypoxemia is likely due to V/Q mismatch, shunting, or obesity-related atelectasis that requires additional FiO2 beyond what pressure support alone can provide.',
        explanationWrong:
          'Increasing IPAP to 30 cmH2O exceeds most device maximum settings and is unlikely to resolve hypoxemia from V/Q mismatch. Switching to CPAP would remove the pressure support needed for hypoventilation. Decreasing EPAP could worsen oxygenation by allowing more atelectasis and would risk recurrence of obstructive events.',
        topic: 'Complex titration scenarios',
      },
    ],
  })

  // ─── EXAM 17 ───────────────────────────────────────────
  // Topics: Sleep-related movement disorders beyond RLS, CBT-I, drowsy driving
  // Correct answer distribution: A=5(Q2,Q5,Q10,Q14,Q18) B=5(Q4,Q8,Q12,Q17,Q19) C=5(Q1,Q6,Q11,Q15,Q20) D=5(Q3,Q7,Q9,Q13,Q16)
  const exam17 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 17',
      examIndex: 17,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam17.id,
        questionIndex: 1,
        questionText:
          'Sleep-related rhythmic movement disorder is most commonly characterized by which pattern of movement during sleep?',
        choices: {
          A: 'Irregular myoclonic jerks of the extremities throughout the night',
          B: 'Sustained dystonic posturing of the limbs during REM sleep',
          C: 'Repetitive, stereotyped movements such as head banging or body rocking at sleep onset',
          D: 'Periodic leg movements occurring every 20-40 seconds during NREM sleep',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep-related rhythmic movement disorder involves repetitive, stereotyped, rhythmic movements such as head banging (jactatio capitis nocturna), body rocking, or head rolling. These typically occur at the transition from wakefulness to sleep but can persist into light NREM sleep. It is most common in infants and young children but can persist into adulthood.',
        explanationWrong:
          'Irregular myoclonic jerks describe hypnic jerks or propriospinal myoclonus, not rhythmic movement disorder. Sustained dystonic posturing is not a feature of this condition. Periodic leg movements are a separate entity (PLMD) with a different movement pattern and timing.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 2,
        questionText:
          'Which of the following is a core component of cognitive behavioral therapy for insomnia (CBT-I)?',
        choices: {
          A: 'Sleep restriction therapy, which limits time in bed to match actual sleep time',
          B: 'Progressive increase in hypnotic medication dosage over 6 weeks',
          C: 'Mandatory daytime napping to reduce sleep debt',
          D: 'Daily aerobic exercise within 1 hour of bedtime',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sleep restriction therapy is a core component of CBT-I. It involves limiting the time spent in bed to closely match the actual amount of sleep the patient is getting, thereby increasing sleep drive and consolidating sleep. As sleep efficiency improves, time in bed is gradually increased.',
        explanationWrong:
          'CBT-I aims to reduce or eliminate dependence on hypnotic medications, not increase them. Daytime napping is generally discouraged in CBT-I as it reduces homeostatic sleep drive. Exercise close to bedtime can increase arousal and is typically discouraged; exercise should be completed at least 4-6 hours before bed.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 3,
        questionText:
          'The psychomotor vigilance test (PVT) is used in drowsy driving assessment. A mean reaction time exceeding which threshold is generally considered indicative of significant impairment?',
        choices: {
          A: 'Greater than 200 milliseconds',
          B: 'Greater than 350 milliseconds',
          C: 'Greater than 150 milliseconds',
          D: 'Greater than 500 milliseconds',
        },
        correctChoice: 'D',
        explanationCorrect:
          'On the psychomotor vigilance test, a mean reaction time exceeding 500 milliseconds is generally considered to indicate significant impairment from sleepiness. Lapses (reaction times exceeding 500 ms) are the primary outcome measure of the PVT and correlate with increased crash risk.',
        explanationWrong:
          'A reaction time of 200 ms is within the normal range. A threshold of 150 ms would capture nearly all responses as impaired. While 350 ms represents some slowing, the established threshold for significant impairment and lapse definition on the PVT is 500 ms.',
        topic: 'Drowsy driving assessment and countermeasures',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 4,
        questionText:
          'Sleep-related bruxism is classified under which category in the International Classification of Sleep Disorders (ICSD-3)?',
        choices: {
          A: 'Sleep-related breathing disorders',
          B: 'Sleep-related movement disorders',
          C: 'Parasomnias',
          D: 'Circadian rhythm sleep-wake disorders',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sleep-related bruxism is classified as a sleep-related movement disorder in the ICSD-3. It involves repetitive jaw-muscle activity characterized by clenching or grinding of teeth during sleep, producing rhythmic masticatory muscle activity (RMMA) on EMG.',
        explanationWrong:
          'Sleep-related bruxism is not a breathing disorder, parasomnia, or circadian rhythm disorder. It is specifically categorized with other sleep-related movement disorders such as periodic limb movement disorder and sleep-related leg cramps.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 5,
        questionText:
          'In CBT-I, stimulus control therapy instructs patients to do which of the following?',
        choices: {
          A: 'Leave the bed if unable to fall asleep within approximately 15-20 minutes and return only when sleepy',
          B: 'Stay in bed and practice progressive muscle relaxation until sleep occurs',
          C: 'Watch television in bed to distract from sleep-related anxiety',
          D: 'Set multiple alarm clocks to prevent oversleeping',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Stimulus control therapy, developed by Bootzin, instructs patients to use the bed only for sleep and intimacy, go to bed only when sleepy, leave the bed if unable to fall asleep within approximately 15-20 minutes, and return only when sleepy again. This reassociates the bed and bedroom with sleep rather than wakefulness.',
        explanationWrong:
          'Staying in bed while unable to sleep reinforces the association of the bed with wakefulness and frustration. Watching television in bed is explicitly discouraged as it pairs the bed with alerting activities. Setting multiple alarms is not a component of stimulus control therapy.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 6,
        questionText:
          'Propriospinal myoclonus at sleep onset is best described as which of the following?',
        choices: {
          A: 'Bilateral rhythmic movements of the legs occurring exclusively during REM sleep',
          B: 'Brief, shock-like jerks confined to the distal extremities during N2 sleep',
          C: 'Involuntary jerks originating in the trunk and spreading to proximal limbs during the wake-to-sleep transition',
          D: 'Continuous tremor of the hands and feet throughout all sleep stages',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Propriospinal myoclonus at sleep onset involves sudden, involuntary jerks that originate in axial (trunk) muscles and propagate rostrally and caudally to the proximal limbs. These jerks occur during relaxed wakefulness and the wake-to-sleep transition, often disrupting sleep onset.',
        explanationWrong:
          'The movements are not confined to the legs or distal extremities and do not occur exclusively during REM or N2 sleep. Continuous tremor throughout sleep is not characteristic of propriospinal myoclonus.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 7,
        questionText:
          'Which factor has been shown to have the greatest impact on drowsy driving crash risk?',
        choices: {
          A: 'Driving a vehicle with manual transmission',
          B: 'Ambient temperature inside the vehicle',
          C: 'Time of day (circadian factors), with peak risk during 2:00-6:00 AM',
          D: 'Prior night total sleep time of less than 6 hours combined with circadian low points',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Research demonstrates that the combination of insufficient sleep (less than 6 hours) and driving during circadian low points produces the greatest crash risk. While circadian factors alone are important, the interaction between sleep deprivation and circadian timing creates synergistic impairment that exceeds either factor alone.',
        explanationWrong:
          'Transmission type has minimal impact on drowsy driving crash risk. While warm cabin temperature may promote drowsiness, it is a minor factor. Circadian timing alone is important but the combination with sleep restriction produces the greatest risk.',
        topic: 'Drowsy driving assessment and countermeasures',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 8,
        questionText:
          'The cognitive restructuring component of CBT-I primarily targets which of the following?',
        choices: {
          A: 'Training patients to use biofeedback to control their brainwave patterns',
          B: 'Identifying and challenging maladaptive beliefs and unrealistic expectations about sleep',
          C: 'Teaching patients to voluntarily control their heart rate before bed',
          D: 'Gradually exposing patients to the bedroom environment to reduce phobic avoidance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cognitive restructuring in CBT-I involves identifying dysfunctional beliefs about sleep (such as catastrophizing about the consequences of poor sleep or unrealistic sleep expectations) and replacing them with more accurate and adaptive thoughts. This reduces performance anxiety and hyperarousal associated with insomnia.',
        explanationWrong:
          'Biofeedback training is a separate technique not central to standard CBT-I. Heart rate control is not a component of cognitive restructuring. While systematic desensitization involves graded exposure, CBT-I cognitive restructuring focuses on thought patterns, not phobic avoidance.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 9,
        questionText:
          'Sleep-related leg cramps differ from restless legs syndrome (RLS) in which important way?',
        choices: {
          A: 'Leg cramps are relieved by movement while RLS is worsened by movement',
          B: 'Leg cramps occur only during REM sleep while RLS occurs during NREM',
          C: 'Leg cramps are always bilateral while RLS is always unilateral',
          D: 'Leg cramps involve painful, sustained involuntary muscle contractions, while RLS involves an urge to move without sustained contraction',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sleep-related leg cramps are characterized by sudden, painful, involuntary sustained contractions (typically of the calf or foot muscles) that cause awakening from sleep. In contrast, RLS involves an uncomfortable urge to move the legs that is relieved by movement and does not involve sustained painful muscle contraction.',
        explanationWrong:
          'Both leg cramps and RLS can be temporarily relieved by stretching or movement. Leg cramps can occur during any sleep stage and are not limited to REM. Both conditions can be unilateral or bilateral.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 10,
        questionText:
          'Which of the following is the most effective immediate countermeasure for a drowsy driver?',
        choices: {
          A: 'Pulling over and taking a brief nap of 15-20 minutes',
          B: 'Opening the car windows for fresh air',
          C: 'Turning on loud music',
          D: 'Increasing following distance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The most effective immediate countermeasure for drowsy driving is pulling over and taking a brief nap of 15-20 minutes. This provides temporary recovery of alertness. Combining a nap with caffeine (consuming caffeine immediately before the nap) can provide an additional alerting effect when the driver wakes.',
        explanationWrong:
          'Opening windows and turning on loud music provide only very brief and unreliable increases in alertness. Increasing following distance is a risk mitigation strategy but does not address the underlying sleepiness and impairment.',
        topic: 'Drowsy driving assessment and countermeasures',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 11,
        questionText:
          'Sleep-related rhythmic movement disorder in adults is most commonly associated with which comorbidity?',
        choices: {
          A: 'Obstructive sleep apnea',
          B: 'Narcolepsy type 1',
          C: 'Neurodevelopmental disorders such as autism spectrum disorder or intellectual disability',
          D: 'Chronic kidney disease',
        },
        correctChoice: 'C',
        explanationCorrect:
          'While rhythmic movement disorder in infants and toddlers is usually benign and self-limited, persistence into adulthood is often associated with neurodevelopmental conditions including autism spectrum disorder, intellectual disability, or attention deficit hyperactivity disorder.',
        explanationWrong:
          'Obstructive sleep apnea, narcolepsy, and chronic kidney disease are not specifically associated with persistent rhythmic movement disorder in adults. Although PLMS can be associated with kidney disease, RMD has a different clinical profile.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 12,
        questionText:
          'Which component of CBT-I has the strongest evidence as a standalone treatment for chronic insomnia?',
        choices: {
          A: 'Sleep hygiene education alone',
          B: 'Sleep restriction therapy',
          C: 'Paradoxical intention',
          D: 'Progressive muscle relaxation alone',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sleep restriction therapy has the strongest evidence as a standalone component of CBT-I. Multiple randomized controlled trials have demonstrated its efficacy in improving sleep continuity and reducing insomnia severity. It works by increasing homeostatic sleep drive and consolidating sleep.',
        explanationWrong:
          'Sleep hygiene education alone has weak evidence and is insufficient for treating chronic insomnia. Paradoxical intention has some evidence but is less robust than sleep restriction. Progressive muscle relaxation alone is less effective than sleep restriction for chronic insomnia.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 13,
        questionText:
          'Excessive fragmentary myoclonus is characterized by which polysomnographic finding?',
        choices: {
          A: 'Periodic bursts of EMG activity every 20-40 seconds in the tibialis anterior',
          B: 'Sustained EMG elevation lasting more than 10 seconds during REM sleep',
          C: 'Repetitive rhythmic EMG bursts at 1-2 Hz in the masseter muscle',
          D: 'Brief (typically less than 150 ms), asymmetric EMG potentials in various muscles occurring throughout sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Excessive fragmentary myoclonus is defined by brief EMG potentials (typically less than 150 ms in duration) that are asymmetric, occur in various muscles, and are seen throughout sleep stages. They are usually not associated with visible movements and are often an incidental PSG finding.',
        explanationWrong:
          'Periodic EMG bursts every 20-40 seconds describe periodic limb movements. Sustained EMG elevation during REM suggests REM sleep behavior disorder. Rhythmic EMG bursts in the masseter are characteristic of sleep-related bruxism.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 14,
        questionText:
          'In the context of drowsy driving regulations, which group of commercial vehicle operators is most commonly required to undergo sleep apnea screening?',
        choices: {
          A: 'Commercial motor vehicle (CMV) drivers with a BMI of 35 or greater',
          B: 'All commercial airline pilots regardless of BMI',
          C: 'Only commercial drivers who have had a previous drowsy driving crash',
          D: 'Only commercial drivers over the age of 65',
        },
        correctChoice: 'A',
        explanationCorrect:
          'FMCSA guidelines and medical examiner recommendations commonly flag commercial motor vehicle drivers with a BMI of 35 or greater for sleep apnea screening. Obesity is the most readily identifiable risk factor, and untreated OSA significantly increases crash risk in commercial drivers.',
        explanationWrong:
          'While airline pilots have their own screening protocols, the most well-established screening thresholds by BMI apply to commercial motor vehicle drivers. Screening is not limited to those with prior crashes or those over 65; BMI-based screening catches drivers at risk before incidents occur.',
        topic: 'Drowsy driving assessment and countermeasures',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 15,
        questionText:
          'Which of the following best describes the recommended sleep restriction protocol when initiating CBT-I for a patient who reports sleeping approximately 5 hours per night but spending 9 hours in bed?',
        choices: {
          A: 'Restrict time in bed to 3 hours to rapidly build sleep drive',
          B: 'Maintain 9 hours in bed and add a sedating medication',
          C: 'Restrict time in bed to approximately 5.5 hours (matching reported sleep time, with a minimum of 5 hours)',
          D: 'Restrict time in bed to 7 hours as a compromise',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In sleep restriction therapy, the prescribed time in bed is initially set to match the patient\'s estimated total sleep time from sleep diary data, with a minimum floor of 5 hours to ensure safety. For this patient sleeping 5 hours, time in bed would be set to approximately 5-5.5 hours. As sleep efficiency improves to 85-90% or above, time in bed is gradually increased in 15-30 minute increments.',
        explanationWrong:
          'Restricting to 3 hours is below the recommended minimum of 5 hours and poses safety risks. Maintaining 9 hours perpetuates low sleep efficiency. Setting time in bed at 7 hours does not adequately restrict time in bed to build sleep pressure.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 16,
        questionText:
          'Sleep-related neck myoclonus is best characterized as which type of movement?',
        choices: {
          A: 'Slow, sustained tonic contractions of the sternocleidomastoid lasting 5-10 seconds',
          B: 'Rhythmic head rotation movements at approximately 1 Hz',
          C: 'Repetitive brief extension movements of the head and neck during NREM sleep',
          D: 'Brief, repetitive EMG bursts in anterior neck muscles that may cause brief head jerks, primarily during NREM sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sleep-related neck myoclonus involves brief, repetitive EMG bursts in the anterior neck muscles (particularly the sternocleidomastoid and scalene muscles) that may cause brief head jerks. It occurs primarily during NREM sleep and is typically identified incidentally during polysomnography.',
        explanationWrong:
          'Slow sustained contractions describe tonic rather than myoclonic activity. Rhythmic head rotation at 1 Hz would suggest rhythmic movement disorder. Repetitive extension movements are not the typical pattern of neck myoclonus.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 17,
        questionText:
          'A commercial truck driver is diagnosed with severe OSA (AHI 42). According to FMCSA guidelines, which condition must be met before the driver can return to operating a commercial vehicle?',
        choices: {
          A: 'The driver must undergo a uvulopalatopharyngoplasty',
          B: 'The driver must demonstrate adequate PAP compliance (typically at least 4 hours per night for 70% of nights) and show improvement in sleepiness',
          C: 'The driver must demonstrate an AHI below 5 on a repeat sleep study without treatment',
          D: 'The driver must wait 12 months after diagnosis regardless of treatment',
        },
        correctChoice: 'B',
        explanationCorrect:
          'FMCSA guidelines require that commercial drivers with OSA demonstrate adequate treatment compliance before being cleared to drive. This typically means PAP usage of at least 4 hours per night for 70% of nights, along with clinical improvement in excessive daytime sleepiness, confirmed by the treating physician.',
        explanationWrong:
          'Surgery is not universally required and is not the primary recommended treatment. An AHI below 5 without treatment would mean the diagnosis was incorrect. A mandatory 12-month waiting period is not required; drivers can return once adequate treatment compliance is demonstrated.',
        topic: 'Drowsy driving assessment and countermeasures',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 18,
        questionText:
          'Which of the following statements about CBT-I versus pharmacotherapy for chronic insomnia is most accurate?',
        choices: {
          A: 'CBT-I produces comparable short-term improvement and superior long-term maintenance of treatment gains compared to hypnotic medications',
          B: 'Pharmacotherapy is consistently superior to CBT-I at both short-term and long-term follow-up',
          C: 'CBT-I and pharmacotherapy have identical long-term outcomes in all patient populations',
          D: 'CBT-I is only effective for insomnia lasting less than 3 months',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Research consistently shows that CBT-I produces improvements in sleep that are comparable to medication in the short term and superior in the long term. CBT-I treatment gains are maintained after therapy ends, whereas medication benefits typically disappear upon discontinuation, and rebound insomnia may occur.',
        explanationWrong:
          'Pharmacotherapy is not consistently superior; in fact, long-term data favor CBT-I. The outcomes are not identical, as CBT-I shows better maintenance. CBT-I is effective for both acute and chronic insomnia, including insomnia lasting years.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 19,
        questionText:
          'Alternating leg muscle activation (ALMA) during sleep is distinguished from periodic limb movements by which characteristic?',
        choices: {
          A: 'ALMA occurs exclusively during wakefulness',
          B: 'ALMA involves brief alternating EMG activity between the two legs with a frequency of 0.5-3 Hz',
          C: 'ALMA produces movements lasting 30-60 seconds per leg',
          D: 'ALMA is always associated with cortical arousals',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Alternating leg muscle activation (ALMA) is characterized by brief EMG bursts (100-500 ms duration) that alternate between the two legs at a frequency of 0.5-3 Hz. This distinguishes it from periodic limb movements, which are longer-duration movements (0.5-10 seconds) that occur periodically every 5-90 seconds and are typically bilateral.',
        explanationWrong:
          'ALMA occurs during sleep, not exclusively during wakefulness. The EMG bursts are brief (100-500 ms), not 30-60 seconds. ALMA is usually not associated with cortical arousals, which is one reason it is typically an incidental finding.',
        topic: 'Sleep-related movement disorders beyond RLS',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 20,
        questionText:
          'Which of the following relaxation techniques is most commonly incorporated into CBT-I protocols?',
        choices: {
          A: 'Hyperbaric oxygen therapy',
          B: 'Transcranial magnetic stimulation',
          C: 'Progressive muscle relaxation or diaphragmatic breathing',
          D: 'Cold water immersion therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Progressive muscle relaxation (PMR) and diaphragmatic breathing are the relaxation techniques most commonly incorporated into CBT-I protocols. These techniques reduce somatic and cognitive arousal, facilitating the transition to sleep. PMR involves systematically tensing and relaxing muscle groups.',
        explanationWrong:
          'Hyperbaric oxygen therapy is not related to insomnia treatment. Transcranial magnetic stimulation is an investigational tool not standard in CBT-I. Cold water immersion would increase arousal and is not used in CBT-I.',
        topic: 'Cognitive behavioral therapy for insomnia (CBT-I)',
      },
    ],
  })

  // ─── EXAM 18 ───────────────────────────────────────────
  // Topics: Sleep telemedicine, remote PAP monitoring, gender differences in sleep disorders
  // Correct answer distribution: A=5(Q1,Q8,Q12,Q16,Q19) B=5(Q3,Q5,Q9,Q14,Q17) C=5(Q2,Q7,Q11,Q15,Q20) D=5(Q4,Q6,Q10,Q13,Q18)
  const exam18 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 18',
      examIndex: 18,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam18.id,
        questionIndex: 1,
        questionText:
          'Which of the following is the primary benefit of remote PAP monitoring for sleep medicine providers?',
        choices: {
          A: 'Ability to identify adherence issues and mask leak problems early, allowing timely intervention',
          B: 'Elimination of the need for any in-person follow-up visits',
          C: 'Automatic adjustment of pressure settings without clinician input',
          D: 'Remote PAP monitoring replaces the need for diagnostic sleep studies',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Remote PAP monitoring allows clinicians to track usage hours, mask leak, residual AHI, and other parameters in near real-time. This enables early identification of problems such as poor adherence, excessive mask leak, or inadequate pressure settings, allowing timely interventions that improve long-term outcomes.',
        explanationWrong:
          'Remote monitoring supplements but does not eliminate the need for periodic in-person visits. While auto-PAP devices adjust pressure, clinician review is still essential. Remote PAP monitoring tracks treatment data and cannot replace diagnostic studies.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 2,
        questionText:
          'Compared to men, women with obstructive sleep apnea more commonly present with which symptom pattern?',
        choices: {
          A: 'Loud snoring with witnessed apneas as the chief complaint',
          B: 'Nocturia and nocturnal angina',
          C: 'Insomnia, fatigue, morning headaches, and mood disturbance rather than classic snoring and witnessed apneas',
          D: 'Excessive daytime sleepiness with cataplexy-like episodes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Women with OSA often present atypically compared to men. Their chief complaints frequently include insomnia, fatigue, unrefreshing sleep, morning headaches, and mood disturbances (anxiety and depression) rather than the classic presentation of loud snoring and witnessed apneas. This leads to underdiagnosis and misdiagnosis in women.',
        explanationWrong:
          'Loud snoring with witnessed apneas is the more classic male presentation pattern. While nocturia can occur with OSA, nocturnal angina is not a typical gender-specific presentation. Cataplexy-like episodes are associated with narcolepsy, not gender-specific OSA presentation.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 3,
        questionText:
          'In a telemedicine follow-up for a PAP patient, the remote monitoring data shows an average daily usage of 3.2 hours, average mask leak of 45 L/min, and residual AHI of 2.1. What should be the primary focus of the intervention?',
        choices: {
          A: 'Increase the PAP pressure to further reduce the residual AHI',
          B: 'Address the mask fit and leak issue, which is likely contributing to poor adherence',
          C: 'Recommend switching from PAP to an oral appliance',
          D: 'Order a repeat in-lab titration study immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The data shows suboptimal adherence (below 4 hours/night) with excessive mask leak (above 24 L/min is generally considered excessive). The residual AHI is well-controlled at 2.1. The excessive leak is likely causing discomfort and contributing to poor adherence. Addressing mask fit through refitting, mask style change, or chin strap should be the priority.',
        explanationWrong:
          'The residual AHI of 2.1 indicates adequate pressure, so increasing pressure is unnecessary. Switching to an oral appliance is premature before addressing the correctable mask leak issue. A repeat titration is not needed when the problem is clearly mask-related.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 4,
        questionText:
          'Which hormonal change most significantly contributes to the increased prevalence of OSA in postmenopausal women?',
        choices: {
          A: 'Increased thyroid hormone levels',
          B: 'Elevated cortisol from adrenal hyperfunction',
          C: 'Increased testosterone from ovarian stromal hyperplasia',
          D: 'Decreased progesterone, which normally acts as a respiratory stimulant and upper airway dilator',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Progesterone is a respiratory stimulant that increases ventilatory drive and has a protective effect on upper airway patency. After menopause, progesterone levels decline significantly, contributing to increased upper airway collapsibility and ventilatory instability. This partly explains why OSA prevalence in women approaches male rates after menopause.',
        explanationWrong:
          'Thyroid hormone levels do not typically increase with menopause. Cortisol elevation is not the primary hormonal mechanism linking menopause to OSA. While testosterone changes may occur, the loss of progesterone\'s respiratory stimulant effect is the most significant factor.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 5,
        questionText:
          'Which CMS (Medicare) criterion must be met for continued PAP coverage after the initial 90-day trial period?',
        choices: {
          A: 'The patient must have an AHI above 30 on the most recent sleep study',
          B: 'Documentation of PAP benefit (symptom improvement) and evidence of usage at least 4 hours per night on 70% of nights during a consecutive 30-day period',
          C: 'The patient must undergo a repeat in-lab titration every 90 days',
          D: 'A face-to-face evaluation by a pulmonologist is required every 30 days',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CMS requires documentation that the patient is benefiting from PAP therapy (clinical improvement in symptoms or objective measures) and that usage data shows the patient is using the device at least 4 hours per night on 70% of nights during a consecutive 30-day period within the first 90 days. A face-to-face reevaluation between days 31 and 91 is also required.',
        explanationWrong:
          'The AHI threshold for initial coverage is 5 or more, not 30, and does not need to be re-demonstrated. Repeat titrations every 90 days are not required. While a face-to-face evaluation is required, it need not be by a pulmonologist specifically and is not required every 30 days.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 6,
        questionText:
          'During pregnancy, which sleep disorder is most likely to develop or worsen in the third trimester?',
        choices: {
          A: 'Narcolepsy type 2',
          B: 'REM sleep behavior disorder',
          C: 'Circadian rhythm sleep-wake disorder, delayed sleep-wake phase type',
          D: 'Restless legs syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Restless legs syndrome commonly develops or worsens during pregnancy, particularly in the third trimester. This is associated with iron deficiency and folate depletion, hormonal changes, and increased blood volume. The prevalence of RLS in pregnant women is estimated at 10-34%, significantly higher than in non-pregnant women.',
        explanationWrong:
          'Narcolepsy does not typically develop during pregnancy. REM sleep behavior disorder is not associated with pregnancy. While sleep timing may shift during pregnancy, a formal delayed sleep-wake phase disorder is not a common pregnancy-related phenomenon.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 7,
        questionText:
          'A sleep medicine practice implements a telemedicine program. Which of the following conditions is least appropriate for initial evaluation via telemedicine alone?',
        choices: {
          A: 'Follow-up visit for an established CPAP patient with good adherence',
          B: 'Initial evaluation of suspected chronic insomnia',
          C: 'Initial evaluation of suspected nocturnal seizures requiring video-EEG monitoring',
          D: 'Follow-up discussion of MSLT results already interpreted by a sleep specialist',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Suspected nocturnal seizures requiring video-EEG monitoring is least appropriate for telemedicine alone because the diagnostic evaluation requires in-person, in-lab monitoring with extended EEG montages and simultaneous video recording. This cannot be replicated through telemedicine.',
        explanationWrong:
          'CPAP follow-up visits are well-suited to telemedicine, especially with remote monitoring data. Chronic insomnia evaluation relies heavily on history and sleep diary review, which can be effectively conducted via telemedicine. Discussion of existing MSLT results can be done via telemedicine.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 8,
        questionText:
          'Polysomnographic features of OSA in women, compared to men, more commonly show which pattern?',
        choices: {
          A: 'Clustering of respiratory events during REM sleep with relatively preserved NREM breathing',
          B: 'Predominantly central apneas during NREM sleep',
          C: 'Higher percentage of frank obstructive apneas versus hypopneas',
          D: 'Exclusively positional (supine-only) obstructive apneas with no REM predominance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Women with OSA more commonly show REM-predominant sleep-disordered breathing, with clustering of respiratory events during REM sleep and relatively preserved breathing during NREM. This pattern can result in a lower overall AHI that underestimates the clinical significance of the disorder. Women also tend to have more hypopneas than frank apneas.',
        explanationWrong:
          'Central apneas during NREM are more associated with heart failure or opioid use, not a gender-specific pattern. Women tend to have more hypopneas, not more frank apneas, compared to men. While positional OSA occurs, the REM-predominant pattern is the more recognized gender difference.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 9,
        questionText:
          'Remote PAP monitoring platforms typically report which set of key performance indicators?',
        choices: {
          A: 'Only total usage hours and device serial number',
          B: 'Usage hours, residual AHI, mask leak, and pressure delivery statistics',
          C: 'Usage hours, sleep stage distribution, and PLM index',
          D: 'Only residual AHI and average pressure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Modern remote PAP monitoring platforms (such as ResMed AirView and Philips Care Orchestrator) report usage hours, residual AHI, mask leak (95th percentile or average), and pressure delivery statistics (including median, 90th, and 95th percentile pressures). Some platforms also report large leak percentage and Cheyne-Stokes breathing time.',
        explanationWrong:
          'Reporting only usage hours and serial number would be insufficient. PAP devices do not record sleep stages or PLM index, as they lack EEG and leg EMG sensors. Reporting only AHI and pressure omits critical adherence and leak data.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 10,
        questionText:
          'Which statement about gender differences in insomnia is most accurate?',
        choices: {
          A: 'Insomnia prevalence is equal between men and women across all age groups',
          B: 'Men are more likely to develop insomnia after age 65',
          C: 'Gender differences in insomnia are solely due to differences in alcohol consumption',
          D: 'Women have a 1.4 to 2 times higher risk of insomnia than men, with the disparity emerging at puberty and increasing with age',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Epidemiological data consistently show that women have approximately 1.4 to 2 times the risk of insomnia compared to men. This gender disparity emerges at puberty, suggesting hormonal influences, and increases with age through perimenopause and menopause. Contributing factors include hormonal fluctuations, higher rates of anxiety and depression, and physiological changes during reproductive life stages.',
        explanationWrong:
          'Insomnia prevalence is not equal between genders. While insomnia increases with age in both genders, women maintain a higher risk throughout life. The gender difference is multifactorial and not solely attributable to alcohol consumption.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 11,
        questionText:
          'Which regulatory consideration is most important when providing sleep telemedicine services across state lines in the United States?',
        choices: {
          A: 'The physician must hold an active medical license in the patient\'s home state',
          B: 'Telemedicine for sleep disorders is prohibited across all state lines',
          C: 'The physician must hold a medical license in the state where the patient is physically located at the time of the encounter',
          D: 'Only nurse practitioners can provide cross-state telemedicine for sleep disorders',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In the United States, the general legal requirement is that the physician must be licensed in the state where the patient is physically located at the time of the telemedicine encounter, not merely the patient\'s home state. Some interstate medical licensure compacts facilitate multi-state practice, but the fundamental rule is based on patient location.',
        explanationWrong:
          'Licensure is based on the patient\'s location at the time of the encounter, not their home state. Telemedicine is not universally prohibited across state lines. The licensure requirement is not limited to or exclusive of specific provider types.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 12,
        questionText:
          'Women with polycystic ovary syndrome (PCOS) have an elevated risk of which sleep disorder compared to age-matched women without PCOS?',
        choices: {
          A: 'Obstructive sleep apnea',
          B: 'Central sleep apnea',
          C: 'REM sleep behavior disorder',
          D: 'Kleine-Levin syndrome',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Women with PCOS have a significantly elevated risk of obstructive sleep apnea, estimated at 5-30 times higher than age- and BMI-matched controls. Contributing factors include androgen excess, insulin resistance, central obesity, and the metabolic syndrome commonly associated with PCOS.',
        explanationWrong:
          'Central sleep apnea is not specifically associated with PCOS. REM sleep behavior disorder is more common in older men and is not linked to PCOS. Kleine-Levin syndrome is a rare disorder not associated with PCOS.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 13,
        questionText:
          'A remote PAP monitoring alert shows a patient\'s residual AHI has increased from 2 to 18 over the past week with stable usage of 7 hours per night and low leak. What is the most likely cause?',
        choices: {
          A: 'The patient has developed narcolepsy',
          B: 'The patient is using the device in a different sleeping position',
          C: 'The PAP machine motor is failing',
          D: 'Weight gain, medication change, nasal congestion, or alcohol use has altered the patient\'s upper airway',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A sudden increase in residual AHI with stable usage and low leak suggests a change in the patient\'s underlying condition. Common causes include weight gain, new medications (sedatives, muscle relaxants), nasal congestion or upper respiratory infection, increased alcohol use, or progression of the underlying sleep-disordered breathing. The clinician should contact the patient to identify the cause.',
        explanationWrong:
          'Developing narcolepsy would not cause increased AHI. Position changes could contribute but stable leak argues against significant position-related mask issues. PAP motor failure would typically show pressure delivery errors rather than elevated AHI with maintained usage.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 14,
        questionText:
          'Which of the following physiological changes during normal pregnancy most directly impacts sleep architecture?',
        choices: {
          A: 'Increased estrogen levels leading to excessive REM sleep',
          B: 'Elevated progesterone in early pregnancy causing increased sleepiness and total sleep time',
          C: 'Decreased melatonin production throughout pregnancy',
          D: 'Chronic hyperventilation causing respiratory alkalosis and insomnia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Progesterone rises significantly during pregnancy and has somnogenic properties. In early pregnancy, elevated progesterone contributes to increased sleepiness and may increase total sleep time. Progesterone also increases NREM sleep and decreases REM sleep in early pregnancy. Later in pregnancy, mechanical discomfort and other factors counteract this effect.',
        explanationWrong:
          'Increased estrogen does not cause excessive REM sleep. Melatonin production actually increases during pregnancy. While mild hyperventilation occurs in pregnancy, it does not cause significant insomnia; the hyperventilation is typically well-compensated.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 15,
        questionText:
          'Which of the following is a key advantage of home sleep apnea testing (HSAT) when integrated with a telemedicine workflow compared to traditional in-lab polysomnography?',
        choices: {
          A: 'HSAT records more physiological channels than in-lab PSG',
          B: 'HSAT can diagnose central sleep apnea more reliably than PSG',
          C: 'HSAT improves access to care by eliminating geographic barriers and reducing wait times for diagnosis',
          D: 'HSAT provides sleep staging data equivalent to in-lab PSG',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When integrated with telemedicine, HSAT significantly improves access to sleep apnea diagnosis by eliminating the need for patients to travel to a sleep center. This is particularly beneficial for patients in rural or underserved areas. The telemedicine component allows for remote consultation, device education, and follow-up, reducing wait times and increasing diagnostic capacity.',
        explanationWrong:
          'In-lab PSG records more channels than HSAT. HSAT cannot reliably diagnose central sleep apnea due to the lack of effort sensors in most devices. HSAT does not typically provide sleep staging, as most HSAT devices lack EEG channels.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 16,
        questionText:
          'Upper airway resistance syndrome (UARS) is more commonly diagnosed in which population?',
        choices: {
          A: 'Young, non-obese women who present with insomnia and fatigue',
          B: 'Elderly men with obesity',
          C: 'Pediatric patients with adenotonsillar hypertrophy',
          D: 'Postmenopausal women with a BMI above 40',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Upper airway resistance syndrome is more commonly identified in young, non-obese women who present with symptoms of fatigue, insomnia, and functional somatic complaints. They may not meet AHI criteria for OSA but show evidence of increased respiratory effort-related arousals (RERAs) on PSG with esophageal pressure monitoring.',
        explanationWrong:
          'Elderly obese men more typically present with frank OSA. While pediatric adenotonsillar hypertrophy causes sleep-disordered breathing, it presents differently from UARS. Postmenopausal obese women are at higher risk for frank OSA rather than UARS.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 17,
        questionText:
          'In a telemedicine PAP setup appointment, which step is most critical for ensuring successful PAP initiation?',
        choices: {
          A: 'Mailing the PAP device without any patient education',
          B: 'Conducting a live video session for mask fitting, device orientation, and troubleshooting before the first night of use',
          C: 'Providing written instructions only with no visual demonstration',
          D: 'Scheduling the first follow-up 6 months after PAP initiation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A live video session for mask fitting, device orientation, and real-time troubleshooting is the most critical step in telemedicine PAP setup. Visual guidance allows the clinician or respiratory therapist to observe mask fit, correct user errors, and address concerns, significantly improving the likelihood of successful PAP initiation and early adherence.',
        explanationWrong:
          'Sending a device without education leads to poor adherence. Written instructions alone are insufficient for proper mask fitting and device use. Waiting 6 months for follow-up misses the critical early adherence window when most PAP abandonment occurs.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 18,
        questionText:
          'Which of the following is a recognized gender difference in the clinical presentation of narcolepsy?',
        choices: {
          A: 'Men with narcolepsy never experience cataplexy',
          B: 'Women with narcolepsy have significantly shorter mean sleep latencies on MSLT',
          C: 'There are no meaningful gender differences in narcolepsy presentation',
          D: 'Women with narcolepsy are more likely to report comorbid obesity, depression, and thyroid disease',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Women with narcolepsy are more likely to have comorbid obesity, depression, and thyroid disease compared to men with narcolepsy. They may also experience worsening of symptoms during menstruation and pregnancy. These comorbidities can complicate diagnosis and management.',
        explanationWrong:
          'Men with narcolepsy type 1 do experience cataplexy. MSLT sleep latencies are not significantly different between genders in narcolepsy. There are meaningful gender differences in comorbid conditions and symptom patterns.',
        topic: 'Gender differences in sleep disorders',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 19,
        questionText:
          'Which data security standard is most directly applicable to sleep telemedicine platforms handling protected health information (PHI) in the United States?',
        choices: {
          A: 'HIPAA Security Rule, which requires encryption, access controls, and audit trails for electronic PHI',
          B: 'PCI-DSS, which governs credit card processing',
          C: 'SOX compliance, which governs financial reporting',
          D: 'FERPA, which governs educational records',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The HIPAA Security Rule directly governs the protection of electronic protected health information (ePHI) in healthcare settings, including telemedicine. Sleep telemedicine platforms must implement administrative, physical, and technical safeguards including encryption, access controls, audit trails, and business associate agreements.',
        explanationWrong:
          'PCI-DSS applies to payment card data, not health information. SOX governs financial reporting for public companies. FERPA applies to student educational records. None of these specifically address health data security.',
        topic: 'Sleep telemedicine and remote PAP monitoring',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 20,
        questionText:
          'Hot flashes during menopause contribute to sleep disruption primarily through which mechanism?',
        choices: {
          A: 'Inducing prolonged periods of stage N3 sleep that cause grogginess',
          B: 'Causing complete suppression of REM sleep throughout the night',
          C: 'Causing thermoregulatory-mediated arousals that fragment sleep and reduce sleep efficiency',
          D: 'Triggering central sleep apnea episodes during each hot flash',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hot flashes cause abrupt increases in skin temperature, sweating, and peripheral vasodilation that trigger cortical arousals and awakenings. This thermoregulatory disruption fragments sleep, reduces sleep efficiency, and is a major contributor to the insomnia complaints of perimenopausal and postmenopausal women.',
        explanationWrong:
          'Hot flashes do not increase N3 sleep; they disrupt sleep continuity. They do not completely suppress REM sleep. While vasomotor symptoms affect sleep quality, they do not trigger central sleep apnea events.',
        topic: 'Gender differences in sleep disorders',
      },
    ],
  })

  // ─── EXAM 19 ───────────────────────────────────────────
  // Topics: Sleep in chronic pain/fibromyalgia, board-style comprehensive review
  // Correct answer distribution: A=5(Q4,Q7,Q11,Q15,Q18) B=5(Q2,Q6,Q9,Q13,Q20) C=5(Q3,Q8,Q14,Q17,Q19) D=5(Q1,Q5,Q10,Q12,Q16)
  const exam19 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 19',
      examIndex: 19,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam19.id,
        questionIndex: 1,
        questionText:
          'Alpha-delta sleep, sometimes called alpha intrusion, is a PSG finding commonly associated with which condition?',
        choices: {
          A: 'Narcolepsy type 1',
          B: 'Obstructive sleep apnea',
          C: 'REM sleep behavior disorder',
          D: 'Fibromyalgia and chronic pain syndromes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Alpha-delta sleep (alpha intrusion) is a PSG finding in which alpha frequency (8-13 Hz) EEG activity is superimposed on the delta waves of stage N3 sleep. This pattern is commonly associated with fibromyalgia, chronic pain syndromes, and other conditions characterized by nonrestorative sleep. It reflects a state of cortical hyperarousal during deep sleep.',
        explanationWrong:
          'Alpha-delta sleep is not specifically associated with narcolepsy, OSA, or REM sleep behavior disorder. While these conditions affect sleep quality, the alpha intrusion pattern is most characteristically linked to fibromyalgia and chronic pain.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 2,
        questionText:
          'A 45-year-old woman with fibromyalgia complains of unrefreshing sleep despite adequate sleep duration. Her PSG shows no significant sleep apnea but reduced N3 sleep. Which medication class has evidence for both improving sleep and reducing pain in fibromyalgia?',
        choices: {
          A: 'Benzodiazepine receptor agonists (e.g., zolpidem)',
          B: 'Low-dose tricyclic antidepressants (e.g., amitriptyline)',
          C: 'Opioid analgesics (e.g., oxycodone)',
          D: 'Stimulants (e.g., dextroamphetamine)',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Low-dose tricyclic antidepressants, particularly amitriptyline at doses of 10-25 mg at bedtime, have evidence for both improving sleep quality and reducing pain in fibromyalgia. They increase slow-wave sleep, have analgesic properties independent of their antidepressant effects, and improve overall symptom burden.',
        explanationWrong:
          'Benzodiazepine receptor agonists improve sleep onset but do not address pain and may reduce slow-wave sleep. Opioids are generally not recommended for fibromyalgia due to lack of efficacy and risk of dependence. Stimulants do not address either sleep quality or pain in fibromyalgia.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 3,
        questionText:
          'A 62-year-old man with a BMI of 38 presents with an Epworth Sleepiness Scale score of 18. His wife reports loud snoring and witnessed apneas. His PSG shows an AHI of 8, with events predominantly in supine REM sleep. SpO2 nadir is 83%. What best explains the discrepancy between the high clinical suspicion and moderate AHI?',
        choices: {
          A: 'The patient has narcolepsy rather than OSA',
          B: 'The PSG was falsified by the technologist',
          C: 'The patient may have had a first-night effect with increased N1/N2 and reduced REM and supine sleep time, underestimating the true AHI',
          D: 'An AHI of 8 is normal and no further action is needed',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The first-night effect is a common phenomenon where patients sleep differently in the lab compared to home, often with reduced total sleep time, decreased REM sleep, and less time in supine position. When respiratory events are predominantly supine and REM-dependent, a poor first night can significantly underestimate the true AHI. The clinical picture (obesity, ESS 18, witnessed apneas) strongly suggests more significant OSA.',
        explanationWrong:
          'Narcolepsy would not explain snoring and witnessed apneas. PSG falsification is extremely unlikely. An AHI of 8 is abnormal (above 5) and cannot be dismissed, especially with significant symptoms and desaturation to 83%.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 4,
        questionText:
          'Which neurotransmitter system is most implicated in the hyperarousal state that contributes to both chronic pain perception and insomnia in fibromyalgia?',
        choices: {
          A: 'Elevated central nervous system glutamate and substance P with reduced serotonin and norepinephrine descending inhibition',
          B: 'Excessive GABAergic inhibition of the thalamus',
          C: 'Overactivation of the orexin/hypocretin system exclusively',
          D: 'Isolated dopamine deficiency in the basal ganglia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Fibromyalgia is associated with central sensitization characterized by elevated excitatory neurotransmitters (glutamate, substance P) in the cerebrospinal fluid and impaired descending pain inhibitory pathways that depend on serotonin and norepinephrine. This neurochemical imbalance contributes to both enhanced pain perception and the hyperarousal state that disrupts sleep.',
        explanationWrong:
          'Excessive GABAergic inhibition would tend to promote sleep, not disrupt it. While orexin may play a role in arousal, it is not the primary system implicated. Isolated dopamine deficiency is more associated with RLS/PLMS and Parkinson disease rather than fibromyalgia.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 5,
        questionText:
          'A patient with chronic low back pain reports difficulty falling asleep and frequent awakenings. Pain is rated 7/10 at night. Which non-pharmacological approach has the best evidence for improving both sleep and pain outcomes simultaneously?',
        choices: {
          A: 'Strict bed rest for 2 weeks to allow healing',
          B: 'Increasing nightly alcohol consumption to promote relaxation',
          C: 'Using a vibrating mattress pad for pain distraction',
          D: 'CBT-I combined with cognitive-behavioral therapy for pain management',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Combined CBT-I and cognitive-behavioral therapy for pain (CBT-P) has the strongest evidence for improving both sleep and pain outcomes in chronic pain patients. These approaches address the bidirectional relationship between pain and sleep disruption through cognitive restructuring, behavioral activation, sleep restriction, and pain coping strategies.',
        explanationWrong:
          'Strict bed rest is no longer recommended for chronic low back pain and worsens deconditioning. Alcohol disrupts sleep architecture and is not a recommended treatment. Vibrating mattress pads have no established evidence base for either pain or sleep improvement.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 6,
        questionText:
          'A patient on CPAP at 14 cmH2O for severe OSA develops new-onset excessive daytime sleepiness despite excellent PAP adherence (average 7.5 hours/night) and a residual AHI of 1.2. What is the most appropriate next step?',
        choices: {
          A: 'Increase CPAP pressure to 18 cmH2O',
          B: 'Evaluate for a concurrent sleep disorder such as narcolepsy or idiopathic hypersomnia with an MSLT',
          C: 'Discontinue CPAP and observe',
          D: 'Switch to an oral appliance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When a patient with well-treated OSA (good adherence, low residual AHI) develops persistent or new-onset excessive daytime sleepiness, a concurrent sleep disorder should be considered. An MSLT should be performed to evaluate for narcolepsy or idiopathic hypersomnia. Other causes such as medication effects, depression, and hypothyroidism should also be evaluated.',
        explanationWrong:
          'Increasing pressure is unnecessary with a residual AHI of 1.2. Discontinuing effective CPAP would allow OSA to recur. Switching to an oral appliance would likely provide less effective treatment. The residual sleepiness suggests a separate process.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 7,
        questionText:
          'Pregabalin is FDA-approved for fibromyalgia and also improves sleep. Its sleep-promoting effect is primarily mediated by which mechanism?',
        choices: {
          A: 'Binding to the alpha-2-delta subunit of voltage-gated calcium channels, reducing excitatory neurotransmitter release',
          B: 'Direct agonism at GABA-A receptors',
          C: 'Selective serotonin reuptake inhibition',
          D: 'Melatonin receptor agonism',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pregabalin binds to the alpha-2-delta subunit of voltage-gated calcium channels, reducing calcium influx and thereby decreasing the release of excitatory neurotransmitters including glutamate, norepinephrine, and substance P. This reduces central sensitization (improving pain) and decreases hyperarousal (improving sleep), particularly increasing slow-wave sleep.',
        explanationWrong:
          'Despite its name suggesting GABAergic activity, pregabalin does not directly bind to GABA-A receptors. It is not a serotonin reuptake inhibitor. It does not act on melatonin receptors.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 8,
        questionText:
          'A 30-year-old patient presents with excessive daytime sleepiness, sleep paralysis, and hypnagogic hallucinations but no cataplexy. MSLT shows a mean sleep latency of 6 minutes with 3 SOREMPs. Lumbar puncture reveals a normal CSF hypocretin-1 level. What is the most likely diagnosis?',
        choices: {
          A: 'Narcolepsy type 1',
          B: 'Idiopathic hypersomnia',
          C: 'Narcolepsy type 2',
          D: 'Insufficient sleep syndrome',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This patient meets criteria for narcolepsy type 2: excessive sleepiness, mean sleep latency of 8 minutes or less, and 2 or more SOREMPs on MSLT, without cataplexy, and with normal CSF hypocretin-1 levels. Sleep paralysis and hypnagogic hallucinations can occur in both narcolepsy type 1 and type 2.',
        explanationWrong:
          'Narcolepsy type 1 requires either cataplexy or low CSF hypocretin-1 (below 110 pg/mL); neither is present. Idiopathic hypersomnia would show fewer than 2 SOREMPs. Insufficient sleep syndrome would not produce 3 SOREMPs on MSLT.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 9,
        questionText:
          'Opioid medications affect sleep architecture in which of the following ways?',
        choices: {
          A: 'Increase both REM and N3 sleep proportions',
          B: 'Decrease slow-wave sleep, reduce REM sleep, and increase N2 sleep and arousals',
          C: 'Have no measurable effect on sleep architecture',
          D: 'Increase total sleep time by more than 2 hours per night',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Chronic opioid use significantly disrupts sleep architecture by decreasing slow-wave sleep (N3) and REM sleep while increasing lighter stage N2 sleep and the number of arousals and awakenings. Opioids also promote central sleep apnea and ataxic breathing patterns, further fragmenting sleep.',
        explanationWrong:
          'Opioids decrease, not increase, both REM and N3 sleep. They have substantial measurable effects on sleep architecture. While opioids may cause sedation, they typically fragment sleep rather than meaningfully increasing restorative total sleep time.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 10,
        questionText:
          'A split-night study is performed. During the diagnostic portion (first 2 hours), the patient\'s AHI is 48 with a nadir SpO2 of 71%. CPAP titration is initiated but the patient becomes agitated and removes the mask after 45 minutes. What is the most appropriate recommendation?',
        choices: {
          A: 'Report the study as a successful split-night and prescribe CPAP based on the brief titration',
          B: 'Prescribe an auto-CPAP with a wide pressure range based on the limited data',
          C: 'Recommend a mandibular advancement device as the sole treatment',
          D: 'Schedule a full-night CPAP titration study with desensitization and coaching prior to the study',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The split-night study established the diagnosis of severe OSA but the titration was inadequate (less than 3 hours of titration is generally considered insufficient). The patient needs PAP desensitization, education, and behavioral coaching before a full-night titration study to optimize the chance of a successful titration.',
        explanationWrong:
          'A 45-minute titration is insufficient to determine optimal pressure. While auto-CPAP could be considered, the patient\'s agitation suggests the need for behavioral intervention before trying PAP again. A mandibular advancement device alone is generally not first-line for severe OSA with SpO2 nadir of 71%.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 11,
        questionText:
          'Which sleep disorder is most commonly comorbid with chronic widespread pain conditions such as fibromyalgia?',
        choices: {
          A: 'Insomnia disorder',
          B: 'Narcolepsy type 1',
          C: 'Circadian rhythm sleep-wake disorder, advanced phase type',
          D: 'REM sleep behavior disorder',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Insomnia is the most commonly comorbid sleep disorder in chronic pain conditions including fibromyalgia, affecting 50-90% of fibromyalgia patients. The relationship is bidirectional: pain disrupts sleep, and poor sleep lowers pain thresholds and increases pain sensitivity the following day.',
        explanationWrong:
          'Narcolepsy, circadian rhythm disorders, and REM sleep behavior disorder are not specifically associated with fibromyalgia. While any sleep disorder can co-occur with chronic pain, insomnia is overwhelmingly the most prevalent comorbidity.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 12,
        questionText:
          'A 70-year-old man with Parkinson disease undergoes a PSG that shows REM sleep without atonia and dream-enacting behavior. He also has an AHI of 22. What is the recommended order of treatment?',
        choices: {
          A: 'Treat REM sleep behavior disorder first with clonazepam, then address OSA',
          B: 'Prescribe an oral appliance only',
          C: 'No treatment is needed as both conditions are expected in Parkinson disease',
          D: 'Treat OSA with CPAP first, as PAP therapy may also reduce REM-related arousals and dream enactment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In patients with both OSA and REM sleep behavior disorder, treating OSA with CPAP first is recommended. CPAP reduces arousals and sleep fragmentation that can trigger dream-enacting behaviors. If RBD persists after adequate OSA treatment, then specific RBD therapy (melatonin or low-dose clonazepam) should be considered.',
        explanationWrong:
          'Starting with clonazepam could worsen OSA by reducing muscle tone. An oral appliance alone may not adequately treat an AHI of 22 in an elderly Parkinson patient. Both conditions require treatment; observation alone is inappropriate.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 13,
        questionText:
          'The bidirectional relationship between sleep and chronic pain is best explained by which mechanism?',
        choices: {
          A: 'Chronic pain always leads to narcolepsy through hypocretin depletion',
          B: 'Sleep deprivation activates descending pain facilitatory pathways and reduces conditioned pain modulation, lowering pain thresholds',
          C: 'Chronic pain increases melatonin secretion, which paradoxically promotes wakefulness',
          D: 'Pain and sleep share no common neurobiological pathways',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sleep deprivation and fragmentation activate descending pain facilitatory pathways and impair conditioned pain modulation (the body\'s endogenous pain inhibition system), resulting in hyperalgesia and lowered pain thresholds. Simultaneously, pain causes arousals and sleep fragmentation, creating a self-reinforcing cycle.',
        explanationWrong:
          'Chronic pain does not cause narcolepsy through hypocretin depletion. Pain does not increase melatonin secretion in a way that promotes wakefulness. Pain and sleep share extensive common neurobiological pathways, particularly in the brainstem, thalamus, and cortex.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 14,
        questionText:
          'A 55-year-old woman presents with an ESS of 14, BMI of 29, and neck circumference of 38 cm. She snores loudly and has witnessed apneas. Her primary care physician orders an HSAT, which shows an AHI of 3. What is the most appropriate next step?',
        choices: {
          A: 'Diagnose the patient as not having sleep apnea and reassure',
          B: 'Start the patient on an oral appliance based on symptoms alone',
          C: 'Order an in-lab PSG, as HSAT may underestimate AHI and the clinical suspicion remains high',
          D: 'Prescribe auto-CPAP empirically',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When clinical suspicion for OSA is high but HSAT is negative or shows a low AHI, an in-lab PSG should be performed. HSAT can underestimate AHI because it uses recording time rather than actual sleep time in the denominator, may miss REM-predominant or positional events, and cannot detect RERAs. This patient\'s symptoms strongly suggest OSA.',
        explanationWrong:
          'A negative HSAT does not rule out OSA when clinical suspicion is high; AASM guidelines recommend in-lab PSG in this scenario. Starting treatment without confirming the diagnosis is premature. Empiric auto-CPAP without confirmed diagnosis is not standard practice.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 15,
        questionText:
          'Which FDA-approved medication specifically targets the alpha-2-delta calcium channel subunit for both pain and sleep improvement in fibromyalgia?',
        choices: {
          A: 'Pregabalin',
          B: 'Duloxetine',
          C: 'Milnacipran',
          D: 'Cyclobenzaprine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pregabalin is FDA-approved for fibromyalgia and works by binding to the alpha-2-delta subunit of voltage-gated calcium channels. It has demonstrated improvement in both pain scores and sleep quality in fibromyalgia clinical trials, with dose-dependent increases in slow-wave sleep.',
        explanationWrong:
          'Duloxetine is FDA-approved for fibromyalgia but works as an SNRI, not through calcium channels. Milnacipran is FDA-approved for fibromyalgia as an SNRI but does not target calcium channels. Cyclobenzaprine is a muscle relaxant that is not FDA-approved for fibromyalgia.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 16,
        questionText:
          'A patient presents with a history of sleepwalking that began at age 55. Prior to this age, the patient had no history of parasomnias. Which of the following should be the primary clinical concern?',
        choices: {
          A: 'This is a normal variant of aging and requires no further evaluation',
          B: 'The patient likely has chronic insomnia causing confusional arousals',
          C: 'This is almost certainly benign childhood-onset sleepwalking that has recurred',
          D: 'New-onset parasomnia in an older adult requires evaluation for neurodegenerative disease, medication effects, or other secondary causes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'New-onset parasomnia in an older adult is atypical and warrants thorough evaluation. Unlike childhood parasomnias, de novo parasomnias after age 50 may be associated with neurodegenerative conditions (particularly synucleinopathies), medications (especially sedative-hypnotics, SSRIs, or anticholinergics), OSA-triggered confusional arousals, or nocturnal seizures.',
        explanationWrong:
          'New-onset parasomnia in older adults is not a normal variant. While insomnia can cause poor sleep quality, it does not typically cause sleepwalking. Recurrence of childhood sleepwalking without interim episodes at age 55 is unlikely; secondary causes should be investigated first.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 17,
        questionText:
          'Which polysomnographic finding is most characteristic of chronic pain patients compared to healthy controls?',
        choices: {
          A: 'Increased percentage of REM sleep',
          B: 'Decreased sleep onset latency',
          C: 'Increased number of arousals, decreased N3 sleep, and decreased sleep efficiency',
          D: 'Presence of 3 or more SOREMPs on MSLT',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Chronic pain patients typically show increased arousal index, decreased N3 (slow-wave) sleep, decreased sleep efficiency, and increased wakefulness after sleep onset (WASO) compared to healthy controls. These findings reflect the disruption of sleep continuity and sleep depth caused by pain-related arousals.',
        explanationWrong:
          'REM sleep is typically decreased or unchanged, not increased, in chronic pain. Sleep onset latency is usually prolonged, not decreased, due to pain and hyperarousal. Multiple SOREMPs are a feature of narcolepsy, not chronic pain.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 18,
        questionText:
          'A pediatric patient with severe OSA (AHI 18) undergoes adenotonsillectomy. A follow-up PSG 3 months later shows a residual AHI of 6. Which factor most increases the risk of residual OSA after adenotonsillectomy?',
        choices: {
          A: 'Obesity',
          B: 'Age under 3 years',
          C: 'Male sex',
          D: 'History of allergic rhinitis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Obesity is the strongest predictor of residual OSA after adenotonsillectomy in children. Studies show that up to 50-75% of obese children have persistent OSA after surgery, compared to approximately 20% of non-obese children. The excess adipose tissue in the pharyngeal region contributes to ongoing airway obstruction independent of lymphoid tissue.',
        explanationWrong:
          'While younger age and allergic rhinitis can be contributing factors, obesity is the strongest and most consistently demonstrated risk factor for residual OSA post-adenotonsillectomy. Male sex is not as strong a predictor as obesity in the pediatric population.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 19,
        questionText:
          'Cannabis use for chronic pain management affects sleep in which of the following ways?',
        choices: {
          A: 'Consistently increases both REM and N3 sleep long-term',
          B: 'Has no effect on any sleep parameter',
          C: 'Acutely may decrease sleep onset latency and increase N3 sleep, but chronic use suppresses REM sleep and may worsen sleep quality upon withdrawal',
          D: 'Eliminates all sleep-disordered breathing events',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Acute cannabis (THC) use can decrease sleep onset latency and increase slow-wave sleep (N3). However, chronic use suppresses REM sleep, and abrupt withdrawal can produce significant rebound insomnia and REM rebound with vivid dreams. Long-term effects on overall sleep quality are mixed and tolerance develops to the sleep-promoting effects.',
        explanationWrong:
          'Cannabis does not consistently increase both REM and N3 with chronic use; REM is suppressed. It has measurable effects on multiple sleep parameters. It does not eliminate sleep-disordered breathing and may actually worsen apnea through respiratory depression in some individuals.',
        topic: 'Sleep in chronic pain and fibromyalgia',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 20,
        questionText:
          'A patient on stable CPAP therapy for 3 years with good adherence presents with new morning headaches and daytime sleepiness. Remote monitoring shows a residual AHI of 1.5 with no significant leak. What is the most important evaluation to perform?',
        choices: {
          A: 'Immediately increase the CPAP pressure by 4 cmH2O',
          B: 'Evaluate for other causes of morning headaches including assessment for nocturnal hypoventilation, CO2 retention, or new comorbidities',
          C: 'Discontinue CPAP and switch to an oral appliance',
          D: 'Order a brain MRI only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'With well-controlled OSA (AHI 1.5, good adherence, no leak), the new symptoms suggest a process beyond OSA. Morning headaches can indicate nocturnal hypoventilation and CO2 retention (especially with weight gain or new pulmonary disease), medication effects, or other neurological conditions. A comprehensive evaluation including CO2 assessment is warranted.',
        explanationWrong:
          'Increasing pressure is unlikely to help with an AHI of 1.5. Discontinuing effective CPAP would worsen the underlying OSA. While brain MRI might be indicated, a broader evaluation for hypoventilation and other causes should come first, as morning headaches with daytime sleepiness in this context most commonly suggest CO2 retention.',
        topic: 'Board-style comprehensive review scenarios',
      },
    ],
  })

  // ─── EXAM 20 ───────────────────────────────────────────
  // Topics: Board-style comprehensive review, mixed advanced topics
  // Correct answer distribution: A=5(Q2,Q6,Q10,Q14,Q17) B=5(Q4,Q7,Q11,Q16,Q19) C=5(Q1,Q5,Q9,Q13,Q20) D=5(Q3,Q8,Q12,Q15,Q18)
  const exam20 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 20',
      examIndex: 20,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam20.id,
        questionIndex: 1,
        questionText:
          'A patient with treatment-emergent central sleep apnea on CPAP is switched to adaptive servo-ventilation. Three months later, the central apneas have resolved. Which of the following is an absolute contraindication to continuing ASV therapy?',
        choices: {
          A: 'The patient has a BMI above 35',
          B: 'The patient reports mild aerophagia',
          C: 'The patient is diagnosed with new-onset heart failure with a left ventricular ejection fraction of 30%',
          D: 'The patient has a deviated nasal septum',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The SERVE-HF trial demonstrated increased cardiovascular mortality with ASV use in patients with heart failure and reduced ejection fraction (EF below 45%). This finding led to a contraindication for ASV in patients with symptomatic heart failure and LVEF less than or equal to 45%. The patient must be transitioned to an alternative therapy.',
        explanationWrong:
          'Obesity is not a contraindication to ASV. Mild aerophagia is a common side effect managed with pressure adjustments. A deviated septum may affect mask therapy generally but is not an ASV-specific contraindication.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 2,
        questionText:
          'Which of the following statements about actigraphy in sleep medicine is most accurate?',
        choices: {
          A: 'Actigraphy provides a validated estimate of sleep-wake patterns over extended periods but cannot reliably detect specific sleep stages or respiratory events',
          B: 'Actigraphy can replace polysomnography for diagnosing obstructive sleep apnea',
          C: 'Actigraphy accurately measures REM and NREM sleep stages',
          D: 'Actigraphy is only useful in the pediatric population',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Actigraphy uses an accelerometer (typically wrist-worn) to estimate sleep-wake patterns based on movement. It provides validated estimates of total sleep time, sleep onset latency, and wake after sleep onset over days to weeks. However, it cannot detect specific sleep stages, respiratory events, or other physiological parameters measured by PSG.',
        explanationWrong:
          'Actigraphy cannot diagnose OSA as it does not measure respiratory parameters. It cannot differentiate REM from NREM sleep stages. It is useful across all age groups, not only in pediatrics.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 3,
        questionText:
          'A patient with chronic insomnia is started on suvorexant. This medication promotes sleep through which mechanism?',
        choices: {
          A: 'GABA-A receptor positive allosteric modulation',
          B: 'Melatonin MT1/MT2 receptor agonism',
          C: 'Histamine H1 receptor antagonism',
          D: 'Dual orexin receptor antagonism (DORA), blocking the wake-promoting effects of orexin-A and orexin-B',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Suvorexant is a dual orexin receptor antagonist (DORA) that blocks the binding of wake-promoting neuropeptides orexin-A and orexin-B (also called hypocretin-1 and -2) to their OX1 and OX2 receptors. By blocking orexin-mediated wakefulness, the drug facilitates sleep onset and maintenance.',
        explanationWrong:
          'GABA-A modulation is the mechanism of benzodiazepines and Z-drugs. MT1/MT2 agonism is the mechanism of ramelteon. H1 antagonism is one mechanism of sedating antihistamines like doxepin. Suvorexant works specifically through orexin receptor antagonism.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 4,
        questionText:
          'A sleep technologist notices 60 Hz artifact on the EEG channels during a PSG. Which of the following is the most likely source?',
        choices: {
          A: 'The patient is in REM sleep with normal low-amplitude mixed-frequency activity',
          B: 'Electromagnetic interference from nearby electrical equipment or poor electrode grounding',
          C: 'Normal alpha rhythm during relaxed wakefulness',
          D: 'ECG artifact bleeding into the EEG channels',
        },
        correctChoice: 'B',
        explanationCorrect:
          '60 Hz artifact (in North America) is caused by electromagnetic interference from AC power lines and nearby electrical equipment. It appears as a uniform, high-frequency sinusoidal waveform on affected channels. Common causes include poor electrode grounding, high electrode impedance, damaged cables, or proximity to unshielded electrical devices.',
        explanationWrong:
          'REM sleep shows low-amplitude mixed-frequency activity but not a uniform 60 Hz pattern. Alpha rhythm is 8-13 Hz, not 60 Hz. ECG artifact has a different morphology (QRS complex pattern) and does not present as a 60 Hz signal.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 5,
        questionText:
          'A commercial airline pilot is diagnosed with moderate OSA (AHI 22). According to FAA guidelines, which requirement must be met for the pilot to maintain medical certification?',
        choices: {
          A: 'The pilot must retire from flying duties permanently',
          B: 'The pilot must undergo surgery before returning to flying',
          C: 'The pilot must demonstrate treatment compliance with PAP or an approved alternative, with regular follow-up by an Aviation Medical Examiner',
          D: 'The pilot needs only a letter from any physician stating the OSA is not dangerous',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The FAA requires pilots diagnosed with OSA to demonstrate effective treatment and compliance. This typically involves PAP therapy with documented compliance data, regular follow-up with an Aviation Medical Examiner (AME), and maintenance of a Special Issuance medical certificate. Treatment must demonstrate adequate control of sleepiness.',
        explanationWrong:
          'Permanent retirement is not required if OSA is adequately treated. Surgery is not mandated, though it may be an acceptable treatment option. A simple letter from any physician is insufficient; specific FAA-approved documentation and monitoring are required.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 6,
        questionText:
          'Sleep-related hypermotor epilepsy (formerly nocturnal frontal lobe epilepsy) most commonly occurs during which sleep stage?',
        choices: {
          A: 'Stage N2 NREM sleep',
          B: 'REM sleep',
          C: 'Stage N1 with prominent vertex waves',
          D: 'Exclusively during wakefulness with eyes closed',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sleep-related hypermotor epilepsy most commonly occurs during N2 NREM sleep. The seizures typically manifest as brief, stereotyped hypermotor events (thrashing, cycling, or dystonic posturing) that may be misdiagnosed as parasomnias. They can also occur during N3 but are most frequent in N2.',
        explanationWrong:
          'While seizures can occur in any sleep stage, sleep-related hypermotor epilepsy predominantly occurs during NREM sleep (especially N2), not REM. N1 with vertex waves is not the typical onset stage. These events occur during sleep, not exclusively during wakefulness.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 7,
        questionText:
          'A patient undergoes overnight oximetry as a screening tool for OSA. The oximetry shows a 4% oxygen desaturation index (ODI) of 32 events per hour. What is the most appropriate interpretation?',
        choices: {
          A: 'The patient definitely does not have OSA',
          B: 'The oximetry is highly suggestive of significant sleep-disordered breathing, but a confirmatory sleep study is needed to establish the diagnosis and severity',
          C: 'The patient has central sleep apnea based on the oximetry alone',
          D: 'The ODI of 32 is within normal limits and no further testing is needed',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An ODI of 32 is highly abnormal and strongly suggests significant sleep-disordered breathing. However, overnight oximetry alone cannot differentiate obstructive from central events, cannot provide an AHI, and cannot detect respiratory events that do not produce desaturation. A confirmatory diagnostic sleep study (PSG or HSAT) is required.',
        explanationWrong:
          'An ODI of 32 strongly suggests SDB, not the absence of OSA. Oximetry cannot distinguish central from obstructive events. An ODI of 32 is markedly abnormal and warrants further evaluation.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 8,
        questionText:
          'Which of the following statements about sleep in patients with chronic kidney disease on hemodialysis is most accurate?',
        choices: {
          A: 'Sleep quality typically improves immediately after starting hemodialysis',
          B: 'Hemodialysis patients rarely report sleep complaints',
          C: 'Sleep disturbance in hemodialysis is usually limited to RLS only',
          D: 'Hemodialysis patients have a high prevalence of OSA, RLS/PLMS, and insomnia, with sleep quality worsened by uremic toxins and dialysis schedule disruption',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Patients on hemodialysis have an extremely high prevalence of multiple sleep disorders including OSA (up to 50-70%), RLS/PLMS (25-50%), and insomnia (50-80%). Uremic toxins, fluid shifts, anemia, metabolic derangements, and the timing of dialysis sessions all contribute to severely disrupted sleep quality.',
        explanationWrong:
          'Sleep quality does not typically improve with dialysis initiation and often worsens. Sleep complaints are extremely common in hemodialysis patients, not rare. The sleep disturbance is multifactorial and involves far more than RLS alone.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 9,
        questionText:
          'During a routine PSG interpretation, the physician notices rhythmic anterior theta activity at 5-7 Hz during drowsiness. This pattern is most consistent with which of the following?',
        choices: {
          A: 'Frontal lobe seizure activity requiring urgent neurology consultation',
          B: 'Alpha intrusion into NREM sleep indicating fibromyalgia',
          C: 'Rhythmic mid-temporal theta of drowsiness (RMTD), a benign normal variant',
          D: 'K-complex variants indicating stage N2 sleep',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Rhythmic mid-temporal theta of drowsiness (RMTD, formerly called psychomotor variant) is a benign EEG pattern consisting of rhythmic theta activity (5-7 Hz) that occurs during drowsiness and light sleep. It is a normal variant that should not be confused with epileptiform activity. It may appear anterior or temporal depending on the montage.',
        explanationWrong:
          'This pattern is benign and does not represent seizure activity. Alpha intrusion involves alpha frequency (8-13 Hz), not theta (5-7 Hz). K-complexes have a distinct morphology (sharp negative deflection followed by a positive component) and are not rhythmic theta.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 10,
        questionText:
          'A patient with a recent ischemic stroke presents with new-onset central sleep apnea. What is the expected natural course of the central apneas over time?',
        choices: {
          A: 'Post-stroke central sleep apnea often improves spontaneously over weeks to months as neurological recovery occurs',
          B: 'Post-stroke central apneas always worsen progressively and require lifelong ASV',
          C: 'Central sleep apnea never occurs after stroke',
          D: 'Post-stroke CSA resolves within 24 hours in all cases',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Central sleep apnea following ischemic stroke often improves spontaneously over weeks to months as neurological recovery progresses and brainstem function stabilizes. The degree of improvement depends on stroke location, severity, and extent of neurological recovery. Monitoring with repeat sleep studies is recommended.',
        explanationWrong:
          'Not all post-stroke CSA worsens progressively; many cases improve. Central sleep apnea is a recognized complication of stroke, particularly involving brainstem areas. Resolution within 24 hours in all cases is not accurate; the timeline is variable.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 11,
        questionText:
          'A patient is referred for a maintenance of wakefulness test (MWT). What is the clinical cutoff for the mean sleep latency that indicates adequate ability to maintain wakefulness?',
        choices: {
          A: 'Mean sleep latency of 20 minutes or greater on the 40-minute protocol',
          B: 'Mean sleep latency of 40 minutes (no sleep on any trial) on the 40-minute protocol',
          C: 'Mean sleep latency of 8 minutes or greater',
          D: 'Mean sleep latency of 5 minutes or greater',
        },
        correctChoice: 'B',
        explanationCorrect:
          'On the 40-minute MWT protocol, a mean sleep latency of 40 minutes (meaning the patient did not fall asleep on any of the four 40-minute trials) is considered the normative value indicating adequate ability to maintain wakefulness. Values below 8 minutes are clearly abnormal, while values between 8 and 40 minutes are of uncertain significance.',
        explanationWrong:
          'While some have proposed 40 minutes as the unequivocal normal threshold, using 20 minutes misses the distinction between adequate and uncertain zones. The 8-minute cutoff applies to the MSLT, not the MWT. A 5-minute threshold would be far too lenient for assessing wakefulness maintenance.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 12,
        questionText:
          'Which infection control practice is most critical when reprocessing reusable PAP equipment in a sleep laboratory?',
        choices: {
          A: 'Wiping the mask with a dry cloth between patients',
          B: 'Using the same mask for all patients to reduce waste',
          C: 'Rinsing equipment with cold water only',
          D: 'High-level disinfection or sterilization of reusable components (tubing, masks, humidifier chambers) between patients, following manufacturer and facility guidelines',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Reusable PAP equipment that contacts mucous membranes (masks, tubing, humidifier chambers) requires high-level disinfection or sterilization between patients. This follows established infection control principles and manufacturer guidelines. Single-use components should be discarded, and reusable items must undergo validated reprocessing protocols.',
        explanationWrong:
          'Wiping with a dry cloth is grossly inadequate for infection control. Using the same mask for multiple patients without reprocessing poses serious cross-contamination risk. Cold water rinse alone does not achieve adequate disinfection.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 13,
        questionText:
          'A patient with Down syndrome undergoes a sleep study. Which sleep-disordered breathing pattern is most commonly found in adults with Down syndrome?',
        choices: {
          A: 'Pure central sleep apnea without any obstructive component',
          B: 'Normal breathing with no sleep-disordered breathing',
          C: 'Obstructive sleep apnea, often severe, due to midface hypoplasia, macroglossia, pharyngeal hypotonia, and obesity',
          D: 'Cheyne-Stokes respiration due to heart failure exclusively',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Adults with Down syndrome have a very high prevalence of OSA (estimated 50-100%), often severe. Contributing anatomical and physiological factors include midface hypoplasia, relative macroglossia, pharyngeal hypotonia, obesity, and hypothyroidism. These patients require proactive screening and often need higher CPAP pressures or bilevel therapy.',
        explanationWrong:
          'Pure central apnea is not the typical pattern. The prevalence of SDB in Down syndrome is extremely high; normal breathing is uncommon. While some patients may have cardiac issues, the predominant pattern is obstructive, not Cheyne-Stokes.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 14,
        questionText:
          'Which of the following best describes the proper technique for performing an MSLT?',
        choices: {
          A: 'Five nap opportunities at 2-hour intervals, with each nap lasting 20 minutes unless the patient falls asleep, in which case the trial continues for 15 additional minutes to monitor for REM onset',
          B: 'Four nap opportunities at 1-hour intervals, each lasting 10 minutes',
          C: 'Two nap opportunities in the morning only, each lasting 30 minutes',
          D: 'Continuous recording for 4 hours without specific nap intervals',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The standard MSLT protocol consists of 4-5 nap opportunities at 2-hour intervals beginning 1.5-3 hours after the end of the preceding nocturnal PSG. Each nap trial lasts 20 minutes; if sleep occurs, the trial continues for 15 additional minutes from the first epoch of sleep to allow assessment of sleep-onset REM periods (SOREMPs). A fifth nap is performed if the first four are inconclusive.',
        explanationWrong:
          'Four naps at 1-hour intervals with 10-minute durations is not the standard protocol. Two morning naps would be insufficient. Continuous recording without structured nap intervals is not an MSLT protocol.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 15,
        questionText:
          'A patient with severe OSA and a BMI of 50 is considering bariatric surgery. What is the expected effect of significant weight loss (losing more than 50% of excess body weight) on OSA severity?',
        choices: {
          A: 'Weight loss has no effect on AHI',
          B: 'AHI typically increases after weight loss due to pharyngeal laxity',
          C: 'Weight loss always completely cures OSA, eliminating the need for any follow-up sleep testing',
          D: 'Significant weight loss typically reduces AHI substantially, but residual OSA may persist and follow-up sleep testing is recommended',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Significant weight loss from bariatric surgery typically produces substantial improvement in AHI, with many patients moving from severe to mild OSA or no OSA. However, OSA may persist in some patients due to craniofacial anatomy, aging, or other factors. Follow-up sleep testing after weight stabilization is recommended to reassess the need for continued PAP therapy.',
        explanationWrong:
          'Weight loss clearly reduces AHI in the majority of patients. AHI does not typically increase after weight loss. While many patients improve dramatically, complete cure is not guaranteed, and follow-up testing remains important.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 16,
        questionText:
          'Which neurotransmitter deficiency is the primary pathophysiological mechanism in narcolepsy type 1?',
        choices: {
          A: 'Dopamine deficiency in the substantia nigra',
          B: 'Loss of hypocretin (orexin)-producing neurons in the lateral hypothalamus',
          C: 'Serotonin excess in the dorsal raphe nucleus',
          D: 'Acetylcholine deficiency in the basal forebrain',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Narcolepsy type 1 is caused by the selective loss of hypocretin (orexin)-producing neurons in the lateral hypothalamus, likely through an autoimmune mechanism. This results in low or undetectable CSF hypocretin-1 levels (below 110 pg/mL) and the clinical features of excessive sleepiness and cataplexy.',
        explanationWrong:
          'Dopamine deficiency in the substantia nigra is associated with Parkinson disease. Serotonin excess is not the mechanism. Acetylcholine deficiency in the basal forebrain is associated with Alzheimer disease.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 17,
        questionText:
          'A patient with well-controlled OSA on CPAP is scheduled for elective surgery under general anesthesia. Which perioperative recommendation is most important regarding PAP therapy?',
        choices: {
          A: 'The patient should bring their own CPAP device to the hospital and use it during the postoperative period whenever not on supplemental oxygen',
          B: 'The patient should discontinue CPAP for 2 weeks before surgery to allow natural breathing patterns to recover',
          C: 'CPAP is contraindicated in the postoperative setting',
          D: 'The patient should switch to a mandibular advancement device for the perioperative period',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Patients with OSA on CPAP should bring their device to the hospital and use it during the postoperative period. General anesthesia, opioid analgesics, and sedation increase upper airway collapsibility and the risk of respiratory complications. Continuing CPAP postoperatively reduces the risk of desaturation, atelectasis, and respiratory failure.',
        explanationWrong:
          'Discontinuing CPAP before surgery increases perioperative risk. CPAP is not contraindicated postoperatively; in fact, it is recommended. Switching to a mandibular advancement device perioperatively is not appropriate as it provides less reliable airway protection during sedation recovery.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 18,
        questionText:
          'A patient with severe OSA uses an auto-CPAP device. Downloaded data shows a 90th percentile pressure of 16 cmH2O and a 95th percentile pressure of 19 cmH2O. The patient complains of pressure intolerance. What adjustment is most appropriate?',
        choices: {
          A: 'Set a fixed CPAP at 19 cmH2O',
          B: 'Lower the maximum pressure to 12 cmH2O',
          C: 'Add EPR (expiratory pressure relief) or switch to auto-BiPAP',
          D: 'Switch to bilevel PAP with an IPAP of 19 and EPAP of 14 and enable expiratory pressure relief',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For patients who require high auto-CPAP pressures and experience pressure intolerance, switching to bilevel PAP allows a lower expiratory pressure for comfort while maintaining adequate inspiratory pressure. Setting the IPAP at the 95th percentile pressure and the EPAP approximately 4-5 cmH2O lower provides pressure support with improved comfort.',
        explanationWrong:
          'Fixed CPAP at 19 cmH2O would maintain the same peak pressure causing intolerance. Lowering the maximum to 12 cmH2O would likely result in inadequate treatment. While EPR can help, the degree of pressure intolerance at these high pressures typically warrants full bilevel therapy rather than EPR alone.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 19,
        questionText:
          'Which of the following is the recommended minimum total recording time for a home sleep apnea test (HSAT) to be considered technically adequate?',
        choices: {
          A: 'At least 1 hour of recording time',
          B: 'At least 4 hours of recording time, ideally capturing the patient\'s typical sleep period',
          C: 'At least 8 hours of recording time regardless of sleep quality',
          D: 'At least 30 minutes of recording time',
        },
        correctChoice: 'B',
        explanationCorrect:
          'For an HSAT to be considered technically adequate, a minimum of 4 hours of recording time is generally required, and ideally the recording should capture the patient\'s typical sleep period. Some guidelines specify at least 2 hours of interpretable data. Recordings with less than this are considered inadequate and may need to be repeated.',
        explanationWrong:
          'One hour is insufficient for a reliable assessment. While 8 hours is ideal, the minimum standard is typically 4 hours. Thirty minutes would be grossly inadequate for assessing sleep-disordered breathing.',
        topic: 'Board-style comprehensive review scenarios',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 20,
        questionText:
          'A patient with epilepsy on carbamazepine presents with excessive daytime sleepiness. The overnight PSG shows an AHI of 4 and normal sleep architecture. Which mechanism most likely explains the excessive sleepiness?',
        choices: {
          A: 'Undiagnosed narcolepsy caused by carbamazepine',
          B: 'The AHI of 4 indicates severe OSA requiring immediate treatment',
          C: 'Carbamazepine-induced sedation and its effects on sleep quality, including increased sleep fragmentation from microarousals not captured by standard scoring',
          D: 'The patient has idiopathic hypersomnia unrelated to any medication',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Carbamazepine is known to cause somnolence as a common side effect through its effects on sodium channels and GABAergic enhancement. It can also cause subtle sleep fragmentation through microarousals that may not meet formal arousal scoring criteria but still impair sleep quality. Medication-induced sleepiness should always be considered before attributing symptoms to a primary sleep disorder.',
        explanationWrong:
          'Carbamazepine does not cause narcolepsy. An AHI of 4 is below the diagnostic threshold for OSA. While idiopathic hypersomnia is possible, medication effects should be evaluated first, especially with a known sedating antiepileptic drug.',
        topic: 'Board-style comprehensive review scenarios',
      },
    ],
  })

  console.log('SDS mini exams 16-20 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
