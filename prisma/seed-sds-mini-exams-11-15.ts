import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SDS_DIVISION_ID = 'cmsm41fwz0003zf54l0h5llrr'

async function main() {
  console.log('Seeding SDS mini exams 11-15...')

  // ─── EXAM 11 ─────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q19) B=5(Q3,Q8,Q12,Q16,Q20) C=5(Q2,Q5,Q11,Q15,Q18) D=5(Q4,Q7,Q9,Q13,Q17)
  const exam11 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 11',
      examIndex: 11,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam11.id,
        questionIndex: 1,
        questionText:
          'A morbidly obese patient with a BMI of 52 kg/m2 presents with daytime hypercapnia (PaCO2 55 mmHg) and an AHI of 8 events/hour on diagnostic PSG. Which diagnosis best explains the daytime hypercapnia?',
        choices: {
          A: 'Obesity hypoventilation syndrome',
          B: 'Severe obstructive sleep apnea',
          C: 'Chronic obstructive pulmonary disease',
          D: 'Central sleep apnea due to Cheyne-Stokes respiration',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Obesity hypoventilation syndrome (OHS) is defined by the triad of obesity (BMI >= 30 kg/m2), daytime hypercapnia (PaCO2 > 45 mmHg), and sleep-disordered breathing not fully explained by another disorder. With a low AHI of 8, the hypercapnia is disproportionate to the obstructive events, pointing to OHS with predominant hypoventilation rather than OSA alone.',
        explanationWrong:
          'An AHI of 8 is only mild OSA and would not typically cause daytime hypercapnia of this severity. COPD is not indicated without a history of smoking or obstructive lung disease. Cheyne-Stokes respiration is associated with heart failure and central apneas, not primarily with obesity-related hypercapnia.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 2,
        questionText:
          'During a titration study for a patient with obesity hypoventilation syndrome, CPAP at 16 cmH2O eliminates obstructive events but the SpO2 remains at 84% with continued CO2 elevation. What is the most appropriate next step?',
        choices: {
          A: 'Increase CPAP to 20 cmH2O',
          B: 'Add supplemental oxygen at 2 L/min via the CPAP circuit',
          C: 'Switch to bilevel PAP with a backup rate',
          D: 'Discontinue PAP and recommend tracheostomy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When CPAP resolves obstructive events but persistent hypoxemia and hypercapnia remain, the patient has underlying hypoventilation that requires ventilatory support. Bilevel PAP with a backup rate (bilevel ST) provides inspiratory pressure support to augment tidal volume and a backup rate to ensure minimum ventilation during sleep.',
        explanationWrong:
          'Increasing CPAP will not address hypoventilation since obstructive events are already eliminated. Adding supplemental oxygen alone may improve SpO2 but does not correct hypercapnia and may worsen CO2 retention. Tracheostomy is not indicated when bilevel ventilation has not yet been attempted.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 3,
        questionText:
          'A neonate is diagnosed with congenital central hypoventilation syndrome (CCHS). Which genetic mutation is most commonly associated with this condition?',
        choices: {
          A: 'CFTR gene mutation',
          B: 'PHOX2B gene mutation',
          C: 'SOD1 gene mutation',
          D: 'HTT gene trinucleotide repeat expansion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Congenital central hypoventilation syndrome is caused by mutations in the PHOX2B gene, most commonly polyalanine repeat expansion mutations. This gene is critical for autonomic nervous system development and central chemoreceptor function. Over 90% of CCHS patients have identifiable PHOX2B mutations.',
        explanationWrong:
          'CFTR mutations cause cystic fibrosis. SOD1 mutations are associated with amyotrophic lateral sclerosis. HTT trinucleotide repeat expansion causes Huntington disease. None of these genes are involved in central respiratory chemosensitivity.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 4,
        questionText:
          'A PSG recording shows recurrent sinus pauses lasting 3-5 seconds occurring exclusively during REM sleep. The patient is asymptomatic. Which of the following is the most appropriate interpretation?',
        choices: {
          A: 'The patient requires emergent cardiology consultation for pacemaker placement',
          B: 'The sinus pauses are artifact from loose ECG electrodes',
          C: 'The pauses indicate severe underlying cardiac conduction disease',
          D: 'Sinus pauses during REM sleep may be a normal variant related to increased vagal tone',
        },
        correctChoice: 'D',
        explanationCorrect:
          'During REM sleep, there is increased parasympathetic (vagal) tone and decreased sympathetic activity, which can produce sinus bradycardia and sinus pauses. Pauses up to approximately 2.5-5 seconds during REM sleep may be considered a normal physiologic variant in asymptomatic patients, though they should be documented and communicated to the ordering physician.',
        explanationWrong:
          'Emergent pacemaker placement is not warranted for asymptomatic REM-related sinus pauses. If the ECG tracing quality is good and the pauses are consistent, artifact is unlikely. While cardiac conduction disease should be considered, isolated REM-related pauses in asymptomatic patients are often benign.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 5,
        questionText:
          'Which cardiac arrhythmia is most commonly exacerbated by untreated obstructive sleep apnea?',
        choices: {
          A: 'Ventricular tachycardia',
          B: 'Complete heart block',
          C: 'Atrial fibrillation',
          D: 'Wolff-Parkinson-White syndrome',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Atrial fibrillation is the arrhythmia most strongly associated with untreated obstructive sleep apnea. The mechanisms include intermittent hypoxemia, intrathoracic pressure swings, sympathetic surges, and atrial remodeling. Treatment of OSA with CPAP has been shown to reduce atrial fibrillation recurrence after cardioversion or ablation.',
        explanationWrong:
          'While ventricular arrhythmias can occur with OSA, atrial fibrillation is far more commonly associated. Complete heart block is a conduction system disorder not typically caused by OSA. Wolff-Parkinson-White syndrome is a congenital accessory pathway condition unrelated to sleep apnea.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 6,
        questionText:
          'A patient with well-controlled epilepsy on carbamazepine undergoes a PSG that shows frequent epileptiform discharges during NREM sleep but none during REM sleep. Which statement best explains this finding?',
        choices: {
          A: 'NREM sleep is an activator of interictal epileptiform discharges due to cortical synchronization',
          B: 'REM sleep activates epileptiform discharges more than NREM sleep',
          C: 'The carbamazepine is selectively suppressing discharges only during REM sleep',
          D: 'The finding indicates the patient has developed drug-resistant epilepsy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'NREM sleep, particularly N2 and N3, promotes cortical synchronization through thalamocortical oscillations, which facilitates the generation and propagation of interictal epileptiform discharges. REM sleep, by contrast, involves cortical desynchronization that tends to suppress and restrict epileptiform activity. This is a well-established relationship in epilepsy.',
        explanationWrong:
          'REM sleep actually suppresses, not activates, epileptiform discharges due to cortical desynchronization. Carbamazepine does not selectively act on discharges in one sleep stage. The presence of interictal discharges during NREM does not indicate drug resistance; it is a common expected finding.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 7,
        questionText:
          'A sleep technologist observes rhythmic 3 Hz spike-and-wave discharges on the EEG during a PSG. The patient appears unresponsive but there is no motor activity. What is the most likely event?',
        choices: {
          A: 'Stage N2 sleep with prominent K-complexes',
          B: 'REM sleep behavior disorder episode',
          C: 'Rhythmic movement disorder',
          D: 'Absence seizure',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Generalized 3 Hz spike-and-wave discharges with behavioral unresponsiveness and no motor activity are the hallmark EEG pattern of an absence seizure. Sleep technologists should be trained to recognize this pattern, document the event, and notify the ordering physician. This pattern is distinct from normal sleep architecture.',
        explanationWrong:
          'K-complexes are isolated biphasic waveforms, not rhythmic spike-and-wave patterns. REM sleep behavior disorder involves motor activity during REM, not spike-and-wave discharges. Rhythmic movement disorder produces head or body rocking with movement artifact on the EEG, not organized spike-and-wave discharges.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 8,
        questionText:
          'Adaptive servo-ventilation (ASV) is contraindicated in which of the following patient populations?',
        choices: {
          A: 'Patients with treatment-emergent central sleep apnea',
          B: 'Patients with symptomatic heart failure and left ventricular ejection fraction <= 45%',
          C: 'Patients with complex sleep apnea on CPAP',
          D: 'Patients with opioid-induced central sleep apnea',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The SERVE-HF trial demonstrated increased cardiovascular mortality in patients with symptomatic heart failure and LVEF <= 45% treated with ASV. As a result, ASV is contraindicated in this population. The FDA issued a safety communication regarding this contraindication.',
        explanationWrong:
          'ASV is actually a treatment option for treatment-emergent central sleep apnea and complex sleep apnea. While caution is warranted with opioid-induced central apnea, it is not an absolute contraindication in the same way that reduced LVEF heart failure is.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 9,
        questionText:
          'AVAPS (Average Volume-Assured Pressure Support) differs from standard bilevel PAP in which key feature?',
        choices: {
          A: 'It provides a fixed inspiratory and expiratory pressure',
          B: 'It delivers continuous positive pressure without pressure support',
          C: 'It eliminates the need for a backup respiratory rate',
          D: 'It automatically adjusts pressure support to maintain a target tidal volume',
        },
        correctChoice: 'D',
        explanationCorrect:
          'AVAPS is a hybrid ventilation mode that automatically adjusts the inspiratory pressure (within set IPAP min/max limits) to achieve and maintain a target tidal volume. This allows the device to compensate for changes in respiratory mechanics, lung compliance, and patient position during sleep, providing more consistent ventilation than fixed bilevel PAP.',
        explanationWrong:
          'Fixed inspiratory and expiratory pressures describe standard bilevel PAP, not AVAPS. Continuous positive pressure without pressure support describes CPAP. AVAPS typically includes a backup rate and does not eliminate the need for one.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 10,
        questionText:
          'A clinician orders a 2-week actigraphy study for a patient suspected of having delayed sleep-wake phase disorder. Which of the following is the primary advantage of actigraphy over a single-night PSG for this evaluation?',
        choices: {
          A: 'Actigraphy captures the patient\'s habitual sleep-wake pattern over multiple days in their natural environment',
          B: 'Actigraphy provides more accurate sleep staging than PSG',
          C: 'Actigraphy can detect respiratory events that PSG may miss',
          D: 'Actigraphy eliminates the need for a concurrent sleep diary',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Actigraphy records rest-activity patterns over extended periods (typically 1-2 weeks) in the patient\'s natural environment, making it ideal for evaluating circadian rhythm disorders. A single-night PSG provides only one night of data in an artificial lab setting and cannot characterize the pattern of sleep timing across multiple days.',
        explanationWrong:
          'Actigraphy does not provide sleep staging comparable to PSG; it estimates sleep/wake based on movement. Actigraphy cannot detect respiratory events. A concurrent sleep diary is actually recommended alongside actigraphy to improve data interpretation, not eliminated by it.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 11,
        questionText:
          'When interpreting an actigraphy report, a prolonged period of immobility during the daytime is recorded. The accompanying sleep diary indicates the patient was watching television. How should this data point be interpreted?',
        choices: {
          A: 'The actigraph is malfunctioning and should be replaced',
          B: 'The patient was napping and the sleep diary is inaccurate',
          C: 'The actigraph may have misclassified quiet wakefulness as sleep, and the sleep diary provides essential context',
          D: 'The data should be excluded from the analysis entirely',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Actigraphy relies on movement to distinguish sleep from wake. Periods of quiet wakefulness (such as watching television) may be misclassified as sleep because of low activity levels. This is a known limitation of actigraphy, and the concurrent sleep diary provides critical context for accurate interpretation of the data.',
        explanationWrong:
          'Low activity during sedentary wakefulness is expected actigraph behavior, not a malfunction. Assuming the diary is inaccurate without corroborating evidence is inappropriate. Excluding data points reduces the study\'s completeness; instead, the diary annotation should guide proper interpretation.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 12,
        questionText:
          'REM sleep behavior disorder (RBD) is strongly associated with which group of neurodegenerative diseases?',
        choices: {
          A: 'Frontotemporal dementias',
          B: 'Alpha-synucleinopathies such as Parkinson disease, dementia with Lewy bodies, and multiple system atrophy',
          C: 'Tauopathies such as progressive supranuclear palsy',
          D: 'Prion diseases such as Creutzfeldt-Jakob disease',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Idiopathic REM sleep behavior disorder is a strong prodromal marker of alpha-synucleinopathies. Studies show that over 80% of patients with idiopathic RBD eventually develop Parkinson disease, dementia with Lewy bodies, or multiple system atrophy. RBD can precede motor or cognitive symptoms by years to decades.',
        explanationWrong:
          'Frontotemporal dementias and tauopathies are not specifically linked to RBD, though sleep disturbances may occur. Prion diseases cause rapidly progressive dementia and may disrupt sleep but are not specifically associated with RBD as a prodromal feature.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 13,
        questionText:
          'A patient with Alzheimer disease is reported by their caregiver to have increased agitation and wandering in the late afternoon and evening. Which term describes this phenomenon?',
        choices: {
          A: 'Sleep inertia',
          B: 'Parasomnia overlap disorder',
          C: 'Somnambulism',
          D: 'Sundowning',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sundowning refers to the worsening of confusion, agitation, and behavioral disturbances in the late afternoon and evening hours, commonly seen in Alzheimer disease and other dementias. It is thought to relate to circadian rhythm dysfunction, with degeneration of the suprachiasmatic nucleus and reduced melatonin production.',
        explanationWrong:
          'Sleep inertia is grogginess upon awakening, not an evening phenomenon. Parasomnia overlap disorder involves features of both RBD and NREM parasomnias. Somnambulism (sleepwalking) occurs during NREM sleep and is not specifically characterized by late-afternoon agitation.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 14,
        questionText:
          'Which class of medications acts primarily on the MT1 and MT2 melatonin receptors and is approved for the treatment of insomnia characterized by difficulty with sleep onset?',
        choices: {
          A: 'Melatonin receptor agonists (e.g., ramelteon)',
          B: 'Benzodiazepine receptor agonists (e.g., zolpidem)',
          C: 'Orexin receptor antagonists (e.g., suvorexant)',
          D: 'Antihistamines (e.g., doxepin at low dose)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ramelteon is a selective MT1/MT2 melatonin receptor agonist approved for insomnia characterized by difficulty with sleep onset. By activating melatonin receptors in the suprachiasmatic nucleus, it promotes the circadian drive for sleep. Unlike benzodiazepine receptor agonists, ramelteon has no abuse potential and is not a scheduled substance.',
        explanationWrong:
          'Benzodiazepine receptor agonists like zolpidem act on GABA-A receptors, not melatonin receptors. Orexin receptor antagonists block wake-promoting orexin signaling. Low-dose doxepin acts primarily as a histamine H1 antagonist and is indicated for sleep maintenance insomnia.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 15,
        questionText:
          'A patient with narcolepsy type 1 is prescribed sodium oxybate. Which of the following is a critical safety consideration for this medication?',
        choices: {
          A: 'It must be taken with a high-fat meal to ensure absorption',
          B: 'It can cause hypertensive crisis when combined with tyramine-containing foods',
          C: 'It is a CNS depressant with a Risk Evaluation and Mitigation Strategy (REMS) program due to abuse potential and respiratory depression risk',
          D: 'It should be discontinued abruptly if side effects develop',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sodium oxybate (Xyrem) is a potent CNS depressant that is a Schedule III controlled substance with a mandatory REMS program. It must not be combined with other CNS depressants or alcohol due to the risk of respiratory depression, obtundation, and death. It is taken in two divided doses at night, not with food.',
        explanationWrong:
          'Sodium oxybate should be taken on an empty stomach, not with food, as food reduces absorption. The tyramine interaction is associated with MAO inhibitors, not sodium oxybate. Abrupt discontinuation can cause rebound symptoms and is not recommended.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 16,
        questionText:
          'According to AASM accreditation standards, what is the minimum number of scored polysomnograms a sleep technologist must perform annually to maintain competency?',
        choices: {
          A: 'No minimum is specified by AASM accreditation standards for individual technologists',
          B: 'The accreditation standards require documentation of ongoing competency assessment, which typically includes a minimum annual scoring review',
          C: '25 scored studies per year',
          D: '100 scored studies per year',
        },
        correctChoice: 'B',
        explanationCorrect:
          'AASM accreditation standards require that sleep facilities document ongoing competency assessment for their technical staff. This typically includes inter-scorer reliability testing and annual competency reviews. The emphasis is on demonstrating scoring accuracy through quality assurance programs rather than specifying a rigid numerical minimum.',
        explanationWrong:
          'AASM accreditation does address technologist competency, so it is incorrect to say no minimum is specified. The specific numbers of 25 or 100 are not defined in the accreditation standards as minimum annual requirements for individual technologists.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 17,
        questionText:
          'In a sleep laboratory quality assurance program, inter-scorer reliability testing reveals that two technologists disagree on the staging of 25% of epochs in a test study. Which action is most appropriate?',
        choices: {
          A: 'Accept the disagreement as within normal limits since some variability is expected',
          B: 'Terminate the technologist with lower accuracy',
          C: 'Average the two technologists\' scores and use the mean as the official result',
          D: 'Provide targeted education on AASM scoring rules and retest both technologists',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An epoch-by-epoch agreement rate of 75% (25% disagreement) is below the expected standard for trained sleep technologists, where inter-scorer agreement should typically exceed 80-85%. The appropriate response is to identify specific areas of disagreement, provide targeted education based on current AASM scoring manual rules, and reassess competency.',
        explanationWrong:
          'A 25% disagreement rate is higher than acceptable and should not be simply accepted. Termination without remediation is premature and inappropriate. Averaging sleep staging scores is not a valid scoring methodology and would produce inaccurate results.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 18,
        questionText:
          'Which of the following is the recommended method for disinfecting reusable PAP mask interfaces between patients in a sleep laboratory?',
        choices: {
          A: 'Wiping with a dry cloth',
          B: 'Soaking in isopropyl alcohol for 30 seconds',
          C: 'Cleaning with soap and water followed by an EPA-registered hospital-grade disinfectant according to manufacturer guidelines',
          D: 'Sterilization in an autoclave',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Reusable PAP mask components should be cleaned with soap and water to remove organic material, then disinfected with an EPA-registered hospital-grade disinfectant following the manufacturer\'s instructions for contact time and dilution. This meets infection control standards while preserving the integrity of the equipment.',
        explanationWrong:
          'Wiping with a dry cloth does not provide disinfection. Soaking in isopropyl alcohol is not a validated disinfection method for PAP equipment and may damage components. Autoclaving uses temperatures and pressures that would damage or destroy PAP mask materials such as silicone and polycarbonate.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 19,
        questionText:
          'A patient undergoing a PAP titration study develops oxygen desaturations into the low 80s despite resolution of obstructive events at an EPAP of 8 cmH2O. The patient has known COPD with baseline SpO2 of 91% on room air. What is the most appropriate intervention?',
        choices: {
          A: 'Add supplemental oxygen through the PAP circuit to maintain SpO2 >= 88-90%',
          B: 'Discontinue PAP therapy immediately',
          C: 'Increase EPAP to 14 cmH2O',
          D: 'Switch to an oral appliance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When obstructive events are eliminated by PAP but hypoxemia persists due to underlying lung disease such as COPD, supplemental oxygen should be added through the PAP circuit. The target SpO2 for COPD patients during sleep is typically >= 88-90%. Oxygen can be bled into the circuit via a connector at the mask or tubing.',
        explanationWrong:
          'Discontinuing PAP removes the treatment for obstructive events. Increasing EPAP when obstructive events are already resolved will not address the underlying lung parenchymal cause of hypoxemia. An oral appliance does not address oxygenation and would not provide the same level of airway support.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 20,
        questionText:
          'When supplemental oxygen is prescribed during sleep for a patient on CPAP therapy, which of the following statements is correct regarding the oxygen flow rate and PAP pressure?',
        choices: {
          A: 'Supplemental oxygen always requires discontinuation of PAP therapy',
          B: 'The effective FiO2 delivered decreases as PAP pressure increases because of dilution from the high-flow leak port',
          C: 'Supplemental oxygen eliminates the need for PAP pressure adjustments',
          D: 'Oxygen flow rates above 1 L/min are contraindicated with PAP devices',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When supplemental oxygen is bled into a PAP circuit, the effective FiO2 delivered to the patient is diluted by the intentional leak at the exhalation port and by higher PAP pressures that increase overall flow through the circuit. As PAP pressure increases, a fixed oxygen flow rate is diluted by greater circuit flow, resulting in a lower effective FiO2. Higher oxygen flow rates may be needed at higher PAP pressures.',
        explanationWrong:
          'PAP and supplemental oxygen are commonly used together and do not need to be separated. Supplemental oxygen addresses oxygenation but does not affect upper airway patency, so PAP adjustments are still needed for obstructive events. There is no absolute contraindication to oxygen flow rates above 1 L/min with PAP devices.',
        topic: 'Oxygen supplementation during sleep',
      },
    ],
  })

  // ─── EXAM 12 ─────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q7,Q11,Q15,Q18) B=5(Q4,Q6,Q10,Q14,Q19) C=5(Q1,Q5,Q9,Q16,Q20) D=5(Q3,Q8,Q12,Q13,Q17)
  const exam12 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 12',
      examIndex: 12,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam12.id,
        questionIndex: 1,
        questionText:
          'A patient with obesity hypoventilation syndrome is started on nocturnal bilevel PAP with settings of IPAP 20 cmH2O, EPAP 8 cmH2O, and a backup rate of 14 breaths/min. After 3 months, the daytime PaCO2 has decreased from 58 mmHg to 44 mmHg. Which mechanism best explains the improvement in daytime gas exchange?',
        choices: {
          A: 'Bilevel PAP eliminated upper airway obstruction, which was the sole cause of hypercapnia',
          B: 'The improved nocturnal ventilation increased renal excretion of bicarbonate, resetting central chemoreceptor sensitivity',
          C: 'Nocturnal ventilatory support rests the respiratory muscles and resets the central chemoreceptor CO2 set point, improving daytime ventilatory drive',
          D: 'The backup rate provided sufficient diurnal ventilation support through daytime use',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In OHS, chronic nocturnal hypoventilation leads to CO2 retention and metabolic compensation (elevated bicarbonate), which blunts central chemoreceptor sensitivity. Effective nocturnal bilevel ventilation rests the chronically fatigued respiratory muscles and lowers nocturnal CO2, gradually resetting the central chemoreceptor threshold and restoring daytime ventilatory drive.',
        explanationWrong:
          'While bilevel PAP addresses upper airway obstruction, the persistent hypercapnia in OHS is primarily due to impaired ventilatory drive and respiratory muscle insufficiency, not obstruction alone. Renal bicarbonate excretion contributes but is secondary to chemoreceptor resetting. The patient uses bilevel PAP nocturnally, not during the day.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 2,
        questionText:
          'Which of the following arterial blood gas findings would be expected in a patient with untreated obesity hypoventilation syndrome while awake at rest?',
        choices: {
          A: 'Elevated PaCO2, elevated serum bicarbonate, and a near-normal pH',
          B: 'Elevated PaCO2, low serum bicarbonate, and low pH',
          C: 'Normal PaCO2, elevated serum bicarbonate, and elevated pH',
          D: 'Low PaCO2, low serum bicarbonate, and normal pH',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Chronic hypercapnia in OHS leads to metabolic compensation through renal retention of bicarbonate. The resulting arterial blood gas pattern shows elevated PaCO2, elevated serum bicarbonate (compensatory metabolic alkalosis), and a near-normal or slightly acidic pH. This compensated respiratory acidosis is a hallmark finding.',
        explanationWrong:
          'Low bicarbonate with elevated CO2 would indicate uncompensated respiratory acidosis, unlikely in a chronic condition. Normal PaCO2 with elevated bicarbonate suggests metabolic alkalosis, not the respiratory acidosis pattern of OHS. Low PaCO2 with low bicarbonate suggests chronic respiratory alkalosis.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 3,
        questionText:
          'A child with congenital central hypoventilation syndrome requires ventilatory support. During wakefulness the child breathes adequately. Which ventilatory strategy is most appropriate for this patient?',
        choices: {
          A: 'Continuous bilevel PAP during all waking and sleeping hours',
          B: 'Daytime-only supplemental oxygen via nasal cannula',
          C: 'Supplemental oxygen only during exercise',
          D: 'Nocturnal mechanical ventilation via tracheostomy or noninvasive interface, as hypoventilation in CCHS is most severe during sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In CCHS, the central chemoreceptors are defective and cannot respond normally to CO2, with the most severe hypoventilation occurring during sleep when voluntary breathing control is absent. Children who ventilate adequately while awake typically require mechanical ventilation only during sleep, often via tracheostomy in infancy or noninvasive ventilation as they grow older.',
        explanationWrong:
          'Continuous bilevel PAP during all hours is not necessary if the child ventilates adequately while awake. Supplemental oxygen alone does not address the underlying hypoventilation and may worsen CO2 retention. Exercise-only support does not address the sleep-related respiratory failure that defines the condition.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 4,
        questionText:
          'During a diagnostic PSG, the ECG channel shows a heart rate cyclically dropping to 35 bpm during obstructive apneas and rising to 95 bpm at apnea termination. This pattern is known as:',
        choices: {
          A: 'Sinus tachycardia',
          B: 'Cyclical heart rate variation (bradycardia-tachycardia pattern) associated with obstructive sleep apnea',
          C: 'Atrial flutter with variable block',
          D: 'Mobitz type II second-degree heart block',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The cyclical bradycardia-tachycardia pattern is a classic cardiovascular signature of obstructive sleep apnea. During the apnea, the diving reflex and increased vagal tone produce bradycardia. At apnea termination, the arousal-related sympathetic surge causes tachycardia. This repetitive pattern correlates with the frequency of obstructive events.',
        explanationWrong:
          'Sinus tachycardia alone does not explain the cyclical bradycardia component. Atrial flutter with variable block produces irregular ventricular rates but not the characteristic apnea-linked cyclical pattern. Mobitz type II involves intermittent dropped QRS complexes with a constant PR interval, which is a different conduction abnormality.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 5,
        questionText:
          'A PSG shows sustained second-degree atrioventricular block (Mobitz type I) occurring during stage N3 sleep in an otherwise healthy 28-year-old athlete. What is the most appropriate clinical significance of this finding?',
        choices: {
          A: 'It indicates the need for immediate pacemaker implantation',
          B: 'It represents a life-threatening arrhythmia requiring emergent treatment',
          C: 'Mobitz type I (Wenckebach) during deep sleep in a young athlete may represent a benign vagally mediated phenomenon',
          D: 'It confirms the presence of underlying structural heart disease',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mobitz type I (Wenckebach) AV block during deep NREM sleep is a recognized benign phenomenon in young, physically fit individuals. It is caused by increased vagal tone during deep sleep. The finding should be documented and communicated to the referring physician, but in the absence of symptoms or structural heart disease, it is generally considered benign.',
        explanationWrong:
          'Immediate pacemaker implantation is not warranted for asymptomatic vagally mediated Wenckebach in a young athlete. While the finding should be evaluated, it is not a life-threatening emergency in this clinical context. It does not confirm structural heart disease; further cardiac evaluation may be warranted but the block itself is often vagally mediated.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 6,
        questionText:
          'Nocturnal frontal lobe epilepsy (NFLE) seizures most commonly arise from which sleep stage?',
        choices: {
          A: 'REM sleep',
          B: 'NREM sleep, particularly stage N2',
          C: 'The wake-to-sleep transition only',
          D: 'Equally from all sleep stages',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Nocturnal frontal lobe epilepsy seizures predominantly arise from NREM sleep, with the majority occurring during stage N2. The thalamocortical oscillations characteristic of NREM sleep promote the synchronization that facilitates seizure generation in the frontal cortex. Seizures may also occur during N3 but are less common during REM sleep.',
        explanationWrong:
          'REM sleep is actually protective against seizure propagation due to cortical desynchronization. While seizures can occur at the wake-to-sleep transition, they are not limited to this period. The distribution is not equal across all stages; NREM sleep, especially N2, is strongly predominant.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 7,
        questionText:
          'Which antiepileptic drug is most likely to worsen obstructive sleep apnea by promoting weight gain and sedation?',
        choices: {
          A: 'Valproic acid',
          B: 'Topiramate',
          C: 'Levetiracetam',
          D: 'Lamotrigine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Valproic acid is associated with significant weight gain, which can worsen obstructive sleep apnea. It also has sedating properties that may increase upper airway collapsibility. In contrast, topiramate is associated with weight loss and may be a better choice for epilepsy patients with comorbid OSA.',
        explanationWrong:
          'Topiramate is actually associated with weight loss, not gain, and may help patients with comorbid OSA. Levetiracetam is generally weight-neutral. Lamotrigine is also weight-neutral and does not typically worsen OSA.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 8,
        questionText:
          'Intelligent volume-assured pressure support (iVAPS) differs from standard AVAPS in which feature?',
        choices: {
          A: 'iVAPS targets minute ventilation rather than tidal volume',
          B: 'iVAPS does not require any pressure settings',
          C: 'iVAPS targets alveolar ventilation by estimating dead space and adjusting accordingly',
          D: 'iVAPS uses learned target ventilation based on the patient\'s recent breathing pattern and adjusts to maintain the target alveolar minute ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'iVAPS (intelligent Volume-Assured Pressure Support) uses a learned target ventilation that is based on the patient\'s recent spontaneous breathing patterns. It estimates dead space ventilation and targets alveolar minute ventilation rather than simply tidal volume. The device adapts its target over time based on the patient\'s evolving respiratory mechanics.',
        explanationWrong:
          'While minute ventilation is related, iVAPS specifically targets alveolar ventilation by accounting for dead space. iVAPS does require pressure limit settings (minimum and maximum IPAP). Option C partially describes the concept but does not capture the learned/adaptive target feature that distinguishes iVAPS from standard AVAPS.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 9,
        questionText:
          'A patient on ASV therapy has the following settings: EPAP 5 cmH2O, minimum pressure support 0 cmH2O, maximum pressure support 15 cmH2O. During a central apnea, which of the following best describes the device\'s response?',
        choices: {
          A: 'The device delivers a fixed IPAP of 20 cmH2O',
          B: 'The device drops to CPAP mode at the EPAP setting',
          C: 'The device increases pressure support and initiates mandatory breaths at an automatically adjusted backup rate to restore ventilation',
          D: 'The device alarms and ceases pressure delivery',
        },
        correctChoice: 'C',
        explanationCorrect:
          'ASV responds to central apneas by increasing pressure support (up to the maximum setting) and delivering mandatory breaths at an automatically adjusted backup rate. The backup rate in ASV is dynamic and is typically set at a percentage below the patient\'s recent average spontaneous rate. This servo-controlled response targets normalized ventilation.',
        explanationWrong:
          'ASV does not deliver a fixed IPAP; it dynamically adjusts pressure support. The device does not drop to simple CPAP during apneas; the purpose of ASV is to actively intervene during central events. ASV devices do not stop pressure delivery during detected apneas.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 10,
        questionText:
          'A patient completes a 14-day actigraphy study along with a sleep diary. The actigraphy data shows a consistent sleep onset at 3:00 AM and wake time at 11:00 AM on free days, with an attempted 11:00 PM bedtime and 7:00 AM alarm on work days showing fragmented sleep. Which circadian rhythm disorder is most consistent with these findings?',
        choices: {
          A: 'Advanced sleep-wake phase disorder',
          B: 'Delayed sleep-wake phase disorder',
          C: 'Non-24-hour sleep-wake rhythm disorder',
          D: 'Irregular sleep-wake rhythm disorder',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The pattern of consistently delayed sleep onset (3:00 AM natural sleep time) and late natural wake time (11:00 AM), with difficulty falling asleep at a conventional bedtime and fragmented/insufficient sleep when forced to wake early for work, is the hallmark of delayed sleep-wake phase disorder (DSWPD).',
        explanationWrong:
          'Advanced sleep-wake phase disorder involves early sleep onset and early awakening. Non-24-hour disorder shows a progressively shifting sleep pattern (typically seen in totally blind individuals). Irregular sleep-wake rhythm disorder shows multiple fragmented sleep periods across the 24-hour day without a dominant circadian pattern.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 11,
        questionText:
          'In a sleep diary, which metric is calculated by dividing total sleep time by time in bed and multiplying by 100?',
        choices: {
          A: 'Sleep efficiency',
          B: 'Sleep latency index',
          C: 'Arousal index',
          D: 'Sleep fragmentation index',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sleep efficiency is calculated as (total sleep time / time in bed) x 100, expressed as a percentage. It is a key metric from sleep diaries and actigraphy that indicates how effectively the patient is using their time in bed for sleep. Normal sleep efficiency is typically 85% or greater.',
        explanationWrong:
          'Sleep latency index refers to the time to fall asleep, not a ratio. Arousal index is the number of arousals per hour of sleep, measured by PSG. Sleep fragmentation index measures the degree of sleep disruption, typically involving movement and wake episodes, and is not the same calculation.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 12,
        questionText:
          'Excessive daytime sleepiness in Parkinson disease is most commonly attributed to which combination of factors?',
        choices: {
          A: 'Exclusively to dopaminergic medications',
          B: 'Exclusively to comorbid obstructive sleep apnea',
          C: 'Only to insomnia from nocturnal motor symptoms',
          D: 'A multifactorial combination including neurodegeneration of wake-promoting nuclei, medication side effects, fragmented nocturnal sleep, and comorbid sleep disorders',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Excessive daytime sleepiness in Parkinson disease is multifactorial. Contributing factors include degeneration of wake-promoting areas (locus coeruleus, hypocretin neurons, raphe nuclei), sedating effects of dopaminergic medications, nocturnal sleep fragmentation from motor symptoms (tremor, rigidity, periodic limb movements), and comorbid sleep disorders such as RBD and sleep apnea.',
        explanationWrong:
          'While dopaminergic medications contribute to sleepiness, they are not the exclusive cause. Comorbid OSA may be present but does not solely explain the sleepiness. Insomnia from motor symptoms is one factor but the etiology is broader and involves neurodegeneration of wake-promoting centers.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 13,
        questionText:
          'A patient with Parkinson disease reports sudden irresistible sleep attacks during the day while driving. Which medication class is most commonly associated with this symptom?',
        choices: {
          A: 'Anticholinergic agents',
          B: 'MAO-B inhibitors',
          C: 'Selective serotonin reuptake inhibitors',
          D: 'Dopamine agonists (e.g., pramipexole, ropinirole)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Dopamine agonists such as pramipexole and ropinirole are strongly associated with sudden-onset sleep attacks in Parkinson disease patients. These sleep episodes can occur without warning prodromal drowsiness and pose a significant driving safety risk. Patients on dopamine agonists should be counseled about this risk.',
        explanationWrong:
          'Anticholinergics may cause sedation but are not typically associated with sudden irresistible sleep attacks. MAO-B inhibitors and SSRIs are not commonly linked to this specific phenomenon. The dopamine agonist class has the strongest evidence for causing sudden sleep attacks.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 14,
        questionText:
          'Suvorexant, a dual orexin receptor antagonist (DORA), is indicated for which type of insomnia?',
        choices: {
          A: 'Insomnia due to circadian rhythm misalignment only',
          B: 'Insomnia characterized by difficulties with sleep onset and/or sleep maintenance',
          C: 'Insomnia secondary to restless legs syndrome',
          D: 'Insomnia in pediatric patients under age 12',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Suvorexant blocks both orexin-1 and orexin-2 receptors, suppressing the wake-promoting orexin system. It is FDA-approved for insomnia characterized by difficulties with sleep onset and/or sleep maintenance in adults. By blocking wake-promoting signals rather than enhancing sedation, DORAs offer a mechanistically distinct approach.',
        explanationWrong:
          'Suvorexant is not specifically indicated for circadian misalignment; melatonin agonists are more appropriate for that. It is not approved for insomnia secondary to RLS, which should be treated by addressing the underlying RLS. It is not approved for pediatric use in patients under 12.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 15,
        questionText:
          'Which wake-promoting medication is a Schedule IV controlled substance approved for the treatment of excessive daytime sleepiness in narcolepsy and works primarily through dopamine reuptake inhibition?',
        choices: {
          A: 'Modafinil',
          B: 'Methylphenidate',
          C: 'Dextroamphetamine',
          D: 'Sodium oxybate',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Modafinil is a Schedule IV wake-promoting agent approved for excessive daytime sleepiness in narcolepsy, shift work disorder, and residual sleepiness in treated OSA. Its primary mechanism involves dopamine reuptake inhibition through binding to the dopamine transporter (DAT), though it has lower abuse potential compared to traditional stimulants.',
        explanationWrong:
          'Methylphenidate and dextroamphetamine are Schedule II stimulants with higher abuse potential. Sodium oxybate is a Schedule III CNS depressant taken at night, not a wake-promoting medication, though it improves daytime alertness through consolidated nocturnal sleep.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 16,
        questionText:
          'Under AASM accreditation requirements, a sleep center medical director must hold board certification in which specialty?',
        choices: {
          A: 'Any medical specialty with 5 years of clinical experience',
          B: 'Pulmonary medicine only',
          C: 'Sleep medicine (ABMS-recognized subspecialty)',
          D: 'Neurology only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'AASM accreditation requires that the medical director be a physician board-certified in sleep medicine through an ABMS-recognized pathway. Sleep medicine is a multidisciplinary subspecialty with board certification available through several primary boards including internal medicine, neurology, psychiatry, pediatrics, and otolaryngology, among others.',
        explanationWrong:
          'General clinical experience alone without sleep medicine board certification does not meet accreditation requirements. While many sleep medicine physicians have primary training in pulmonology or neurology, the specific requirement is board certification in sleep medicine, not any single primary specialty.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 17,
        questionText:
          'A sleep laboratory is preparing for AASM accreditation. Which of the following policies must be in place regarding emergency protocols?',
        choices: {
          A: 'Emergency protocols are optional and left to the discretion of the medical director',
          B: 'Only a fire evacuation plan is required',
          C: 'Emergency protocols are only needed if the lab is hospital-based',
          D: 'Written emergency procedures for medical emergencies, fire, and equipment failure must be available and staff must be trained on them',
        },
        correctChoice: 'D',
        explanationCorrect:
          'AASM accreditation standards require that sleep facilities have written emergency procedures covering medical emergencies (cardiac arrest, respiratory failure, seizures), fire safety, and equipment failure. All staff must receive training on these procedures, and documentation of training must be maintained. This applies to both hospital-based and freestanding sleep centers.',
        explanationWrong:
          'Emergency protocols are required, not optional. A fire evacuation plan alone is insufficient; medical emergency and equipment failure protocols are also required. The requirement applies to all accredited facilities regardless of whether they are hospital-based or freestanding.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 18,
        questionText:
          'Which standard precaution is most important for a sleep technologist to follow when handling PAP equipment that has been in contact with a patient\'s respiratory secretions?',
        choices: {
          A: 'Wearing gloves when handling contaminated equipment and performing hand hygiene before and after patient contact',
          B: 'No special precautions are needed since PAP equipment is low-risk',
          C: 'Only wearing an N95 respirator',
          D: 'Only wearing a face shield',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Standard precautions require glove use when there is potential contact with respiratory secretions or other body fluids. Hand hygiene before and after patient contact is the single most important infection prevention measure. PAP equipment that contacts the airway and collects condensate and secretions should be handled with gloves and processed according to infection control protocols.',
        explanationWrong:
          'PAP equipment contacts the respiratory tract and can harbor secretions, so precautions are necessary. An N95 respirator alone is for airborne precautions and does not protect hands from contact transmission. A face shield alone provides eye protection but does not address hand contamination.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 19,
        questionText:
          'A patient with severe COPD (FEV1 30% predicted) and an awake resting SpO2 of 89% on room air undergoes PSG. During REM sleep, the SpO2 drops to 72%. The patient has no significant obstructive or central apneas. What is the most likely cause of the REM-related desaturation?',
        choices: {
          A: 'Upper airway resistance syndrome',
          B: 'REM-related hypoventilation due to loss of accessory respiratory muscle function',
          C: 'Central sleep apnea emergence during REM',
          D: 'Pulse oximeter artifact during REM',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During REM sleep, voluntary (accessory) respiratory muscles are inhibited by the skeletal muscle atonia characteristic of REM. Patients with severe COPD rely heavily on accessory muscles (sternocleidomastoid, scalenes, intercostals) to maintain ventilation. When these muscles become atonic during REM, minute ventilation drops significantly, causing marked desaturation. This is REM-related hypoventilation.',
        explanationWrong:
          'Upper airway resistance syndrome would produce respiratory-effort-related arousals, not sustained desaturation without obstructive events. Central apneas were specifically noted to be absent. Oximeter artifact would not produce sustained desaturations confined to REM sleep.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 20,
        questionText:
          'When nocturnal oxygen therapy is prescribed for a patient with sleep-related hypoxemia but without obstructive sleep apnea, which delivery device is most commonly used?',
        choices: {
          A: 'High-flow nasal cannula at 40 L/min',
          B: 'Non-rebreather mask at 15 L/min',
          C: 'Standard nasal cannula at 1-4 L/min titrated to maintain SpO2 >= 88-90%',
          D: 'Venturi mask at a fixed FiO2 of 50%',
        },
        correctChoice: 'C',
        explanationCorrect:
          'For nocturnal supplemental oxygen in patients with sleep-related hypoxemia without OSA, a standard nasal cannula at low flow rates (typically 1-4 L/min) is the most commonly used delivery method. It is comfortable for sleeping, well-tolerated, and can be titrated to maintain the target SpO2 of 88-90% or higher depending on the clinical condition.',
        explanationWrong:
          'High-flow nasal cannula at 40 L/min is used for acute respiratory failure in hospital settings, not routine nocturnal oxygen. Non-rebreather masks at 15 L/min deliver near 100% FiO2 and are for acute emergencies. Venturi masks at 50% are hospital devices for precise FiO2 delivery and are impractical for home nocturnal use.',
        topic: 'Oxygen supplementation during sleep',
      },
    ],
  })

  // ─── EXAM 13 ─────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q8,Q12,Q17,Q20) B=5(Q1,Q5,Q10,Q13,Q18) C=5(Q4,Q7,Q14,Q16,Q19) D=5(Q2,Q6,Q9,Q11,Q15)
  const exam13 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 13',
      examIndex: 13,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam13.id,
        questionIndex: 1,
        questionText:
          'A patient with neuromuscular disease and a vital capacity of 35% predicted undergoes a nocturnal oximetry study showing sustained desaturation to 78% during sleep. Daytime PaCO2 is 52 mmHg. Which PAP modality is most appropriate for nocturnal ventilatory support?',
        choices: {
          A: 'CPAP at 10 cmH2O',
          B: 'Bilevel PAP in spontaneous/timed (ST) mode with adequate pressure support and a backup rate',
          C: 'Auto-adjusting CPAP',
          D: 'Adaptive servo-ventilation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Patients with neuromuscular disease and chronic respiratory failure require ventilatory support, not simply positive airway pressure. Bilevel PAP in ST mode provides pressure support to augment the weakened respiratory muscles and a backup rate to ensure ventilation when the patient cannot trigger the device. CPAP alone does not provide ventilatory assistance.',
        explanationWrong:
          'CPAP provides a single level of pressure to splint the airway but does not augment ventilation. Auto-CPAP is designed for obstructive sleep apnea and does not provide pressure support. ASV is designed for central and complex sleep apnea and is not appropriate for neuromuscular respiratory failure.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 2,
        questionText:
          'Which pulmonary function test finding is most suggestive of early respiratory muscle weakness in a patient being evaluated for sleep-related hypoventilation?',
        choices: {
          A: 'Reduced FEV1/FVC ratio',
          B: 'Reduced diffusing capacity (DLCO)',
          C: 'Increased residual volume',
          D: 'A significant drop in forced vital capacity (greater than 20%) when measured in the supine compared to upright position',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A greater than 20% drop in FVC from upright to supine position (postural drop) is a sensitive indicator of diaphragmatic weakness. In the supine position, the abdominal contents push against a weakened diaphragm, reducing lung volumes. This finding often precedes daytime hypercapnia and is a key assessment for early detection of sleep-related hypoventilation risk.',
        explanationWrong:
          'A reduced FEV1/FVC ratio indicates obstructive lung disease, not respiratory muscle weakness. Reduced DLCO suggests parenchymal or vascular lung disease. Increased residual volume can occur with air trapping in obstructive disease. None of these specifically indicate diaphragmatic weakness.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 3,
        questionText:
          'Which cardiac arrhythmia is characterized by a gradual shortening of the R-R interval followed by a long pause and is commonly seen during sleep?',
        choices: {
          A: 'Sinus arrhythmia with Wenckebach periodicity (Mobitz type I second-degree AV block)',
          B: 'Premature ventricular contractions in a bigeminal pattern',
          C: 'Atrial fibrillation with rapid ventricular response',
          D: 'Ventricular fibrillation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Mobitz type I (Wenckebach) second-degree AV block shows progressive PR prolongation with shortening R-R intervals until a QRS complex is dropped, producing a pause. During sleep, increased vagal tone can produce this pattern, particularly during deep NREM and REM sleep. In younger, healthy individuals, this is often a benign finding.',
        explanationWrong:
          'PVCs in bigeminy produce an alternating pattern, not a gradual shortening followed by a pause. Atrial fibrillation produces irregularly irregular R-R intervals without a Wenckebach pattern. Ventricular fibrillation is a lethal arrhythmia with chaotic ventricular activity, not a benign sleep finding.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 4,
        questionText:
          'A sleep technologist notes that a patient on CPAP titration develops frequent premature ventricular contractions (PVCs) during periods of desaturation. After the CPAP pressure eliminates the obstructive events and the SpO2 normalizes, the PVCs resolve. This finding supports which relationship?',
        choices: {
          A: 'CPAP directly causes PVCs through positive pressure effects on the heart',
          B: 'The PVCs are unrelated to the sleep-disordered breathing',
          C: 'Hypoxemia from obstructive events triggered the PVCs, and correction of hypoxemia resolved them',
          D: 'The patient has an underlying cardiomyopathy requiring immediate evaluation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Intermittent hypoxemia from obstructive sleep apnea causes sympathetic activation and myocardial irritability, which can trigger PVCs and other arrhythmias. When effective CPAP eliminates the obstructive events and restores normal oxygenation, the arrhythmogenic stimulus is removed and the PVCs resolve. This demonstrates the causal relationship between OSA-related hypoxemia and cardiac arrhythmias.',
        explanationWrong:
          'CPAP does not directly cause PVCs; the temporal relationship shows PVCs occurring with desaturation and resolving with effective treatment. The resolution with CPAP demonstrates they are related to the breathing events. While cardiac evaluation may be appropriate, the resolution with CPAP treatment points to hypoxemia as the trigger rather than intrinsic cardiac disease.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 5,
        questionText:
          'Juvenile myoclonic epilepsy (JME) seizures most commonly occur at which time in relation to sleep?',
        choices: {
          A: 'During deep NREM (N3) sleep',
          B: 'Within the first 1-2 hours after awakening in the morning',
          C: 'During REM sleep',
          D: 'Only during daytime naps',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Juvenile myoclonic epilepsy seizures characteristically occur shortly after awakening in the morning, typically within the first 1-2 hours. Sleep deprivation is a major trigger. The myoclonic jerks are often described as occurring while getting ready in the morning. Generalized tonic-clonic seizures in JME also tend to occur in the morning after awakening.',
        explanationWrong:
          'JME seizures do not predominantly occur during N3 sleep. While sleep deprivation triggers seizures, the myoclonic jerks and generalized seizures characteristically occur after awakening, not during REM sleep. They are not limited to daytime naps.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 6,
        questionText:
          'A patient with epilepsy is found during PSG to have seizures that are difficult to distinguish from NREM parasomnias. Which feature most strongly suggests the events are epileptic rather than parasomnic?',
        choices: {
          A: 'Events occur during the first third of the night',
          B: 'Events are associated with autonomic activation',
          C: 'The patient has no memory of the events',
          D: 'Events are highly stereotyped in their motor pattern and occur multiple times per night',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Nocturnal frontal lobe epilepsy seizures tend to be highly stereotyped (identical motor pattern each time) and may occur multiple times per night. NREM parasomnias, by contrast, typically show more variable behavioral manifestations and usually occur only once or twice per night, predominantly in the first third. The stereotypy and frequency are key distinguishing features.',
        explanationWrong:
          'Occurrence in the first third of the night is typical of NREM parasomnias and does not distinguish epileptic events. Autonomic activation occurs in both parasomnias and seizures. Amnesia for the event is common in both conditions and does not reliably differentiate them.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 7,
        questionText:
          'A patient with treatment-emergent central sleep apnea on CPAP is transitioned to ASV. Which of the following best describes the goal of ASV therapy for this patient?',
        choices: {
          A: 'To provide a fixed high pressure to prevent upper airway collapse',
          B: 'To deliver supplemental oxygen during central events',
          C: 'To provide variable pressure support that is anticyclic to the patient\'s breathing pattern, increasing support during hypopneas/apneas and decreasing it during hyperpneas',
          D: 'To maintain continuous positive pressure equivalent to CPAP',
        },
        correctChoice: 'C',
        explanationCorrect:
          'ASV delivers servo-controlled pressure support that operates anticyclically to the patient\'s respiratory pattern. During periods of reduced ventilation (hypopneas/apneas), ASV increases pressure support. During periods of excessive ventilation (hyperpneas), it reduces support. This dampens the oscillatory ventilatory pattern that characterizes treatment-emergent and other forms of central sleep apnea.',
        explanationWrong:
          'ASV provides variable, not fixed, pressure support. It does not deliver supplemental oxygen. While ASV maintains a minimum EPAP for airway patency, its therapeutic goal is the servo-controlled anticyclic pressure support, not simply maintaining continuous positive pressure.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 8,
        questionText:
          'When setting up bilevel PAP with AVAPS for a patient with OHS, the clinician sets a target tidal volume of 8 mL/kg of ideal body weight. Why is ideal body weight used rather than actual body weight for this calculation?',
        choices: {
          A: 'Lung volume and airway size correlate with ideal body weight (based on height and sex), not with excess adipose tissue from actual body weight',
          B: 'Using actual body weight would result in tidal volumes that are too small',
          C: 'Ideal body weight accounts for the increased metabolic demands of obesity',
          D: 'There is no clinical difference between using ideal and actual body weight',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Target tidal volume for mechanical ventilation is based on ideal body weight because lung size is determined by height and sex, not by excess body mass. Using actual body weight in obese patients would result in inappropriately large target tidal volumes that could cause volutrauma and overdistention. Ideal body weight is calculated from the patient\'s height and sex.',
        explanationWrong:
          'Using actual body weight in obese patients would result in volumes that are too large, not too small. Ideal body weight does not account for metabolic demands; it reflects predicted lung volume. There is a significant clinical difference, as using actual body weight in obese patients leads to inappropriately high tidal volume targets.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 9,
        questionText:
          'An actigraphy study in a blind patient shows that sleep onset shifts approximately 30-60 minutes later each day over a 3-week recording period. Which circadian rhythm disorder does this pattern indicate?',
        choices: {
          A: 'Delayed sleep-wake phase disorder',
          B: 'Advanced sleep-wake phase disorder',
          C: 'Irregular sleep-wake rhythm disorder',
          D: 'Non-24-hour sleep-wake rhythm disorder (free-running type)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Non-24-hour sleep-wake rhythm disorder (free-running type) is characterized by a progressive daily delay in sleep-wake timing, reflecting the intrinsic circadian period that is slightly longer than 24 hours. Without photic entrainment (as in totally blind individuals), the endogenous clock runs at its intrinsic period, resulting in a daily shift of approximately 30-60 minutes.',
        explanationWrong:
          'Delayed sleep-wake phase disorder involves a fixed delay in sleep timing, not a progressive daily shift. Advanced sleep-wake phase disorder involves early, not progressively later, sleep timing. Irregular sleep-wake rhythm disorder shows multiple fragmented sleep periods without a clear progressive pattern.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 10,
        questionText:
          'A clinician uses actigraphy to assess a patient\'s response to cognitive behavioral therapy for insomnia (CBT-I). After 6 weeks of treatment, which actigraphy metric would best indicate improvement?',
        choices: {
          A: 'Decreased total recording time',
          B: 'Increased sleep efficiency and decreased wake after sleep onset (WASO)',
          C: 'Increased total time in bed',
          D: 'Decreased movement during REM sleep',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CBT-I aims to consolidate sleep by reducing time awake in bed. Successful treatment is reflected by increased sleep efficiency (higher ratio of sleep time to time in bed) and decreased WASO (less time awake after initial sleep onset). These are the primary actigraphy metrics used to track CBT-I treatment response.',
        explanationWrong:
          'Decreased total recording time is not a measure of treatment success. Increased time in bed would actually be counterproductive to sleep restriction, a core component of CBT-I. Actigraphy cannot reliably identify REM sleep or measure REM-specific movement.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 11,
        questionText:
          'A patient with multiple system atrophy (MSA) presents with stridor during sleep. This finding is concerning because it indicates:',
        choices: {
          A: 'Mild nasal congestion that is clinically insignificant',
          B: 'Gastroesophageal reflux during sleep',
          C: 'Obesity-related upper airway narrowing',
          D: 'Vocal cord dysfunction (laryngeal abductor paralysis) that may cause life-threatening upper airway obstruction',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Nocturnal stridor in MSA is caused by bilateral vocal cord abductor paralysis due to degeneration of the nucleus ambiguus. This is a potentially life-threatening finding because the vocal cords may paradoxically adduct during inspiration, causing severe airway obstruction. It is an indication for urgent evaluation and may require tracheostomy or CPAP.',
        explanationWrong:
          'Stridor in MSA is not benign nasal congestion; it reflects laryngeal dysfunction. It is not caused by gastroesophageal reflux. While obesity can narrow the airway, stridor in MSA specifically relates to neurodegeneration affecting vocal cord motor function.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 12,
        questionText:
          'Bright light therapy is used as a treatment for circadian rhythm disorders in Alzheimer disease patients. What is the primary target of this intervention?',
        choices: {
          A: 'To strengthen the circadian signal from the suprachiasmatic nucleus and improve sleep-wake consolidation',
          B: 'To increase melatonin production during the day',
          C: 'To treat comorbid seasonal affective disorder only',
          D: 'To reduce beta-amyloid accumulation in the brain',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In Alzheimer disease, the suprachiasmatic nucleus (SCN) undergoes neurodegeneration, weakening the circadian signal and leading to fragmented sleep-wake patterns and sundowning. Bright light therapy provides a strong zeitgeber that can partially compensate for the weakened SCN by reinforcing the circadian rhythm and improving sleep-wake consolidation.',
        explanationWrong:
          'Bright light suppresses melatonin production rather than increasing it during the day. While bright light therapy can treat SAD, in AD the primary goal is circadian strengthening. There is no established evidence that bright light therapy directly reduces beta-amyloid accumulation.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 13,
        questionText:
          'A patient is prescribed lemborexant for chronic insomnia. Which statement correctly describes its mechanism compared to benzodiazepines?',
        choices: {
          A: 'Both lemborexant and benzodiazepines enhance GABA receptor activity',
          B: 'Lemborexant blocks orexin receptors to reduce wakefulness, while benzodiazepines enhance GABAergic inhibition to promote sedation',
          C: 'Lemborexant is a melatonin receptor agonist while benzodiazepines block histamine',
          D: 'Both drugs work identically on the same receptor systems',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Lemborexant is a dual orexin receptor antagonist (DORA) that promotes sleep by blocking the wake-promoting orexin/hypocretin system. This is mechanistically distinct from benzodiazepines, which enhance GABAergic inhibition through positive allosteric modulation of GABA-A receptors. DORAs reduce wakefulness rather than imposing sedation.',
        explanationWrong:
          'Lemborexant does not enhance GABA receptor activity; it blocks orexin receptors. It is not a melatonin receptor agonist, and benzodiazepines do not block histamine. The two drug classes work through entirely different receptor systems and mechanisms.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 14,
        questionText:
          'Which of the following medications used for insomnia has the lowest risk of next-day residual sedation due to its ultra-short half-life?',
        choices: {
          A: 'Flurazepam',
          B: 'Temazepam',
          C: 'Zaleplon',
          D: 'Doxepin at 6 mg dose',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Zaleplon has the shortest half-life (approximately 1 hour) among commonly prescribed hypnotics, resulting in minimal next-day residual sedation. It is a non-benzodiazepine hypnotic (pyrazolopyrimidine) that acts on the benzodiazepine binding site of the GABA-A receptor and is primarily useful for sleep onset difficulty, not sleep maintenance.',
        explanationWrong:
          'Flurazepam has a very long half-life (47-100 hours with active metabolites) and significant next-day sedation. Temazepam has a half-life of 8-20 hours. Low-dose doxepin has a half-life of approximately 15 hours, longer than zaleplon.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 15,
        questionText:
          'During AASM accreditation survey, the surveyor asks about the sleep laboratory\'s process for reporting critical findings. Which of the following meets accreditation requirements?',
        choices: {
          A: 'Critical findings are reported in the final PSG report mailed within 30 days',
          B: 'Critical findings are communicated only if the referring physician requests them',
          C: 'All findings are treated with equal urgency regardless of severity',
          D: 'A written policy exists for timely communication of critical/urgent findings to the ordering physician, with documentation of the notification',
        },
        correctChoice: 'D',
        explanationCorrect:
          'AASM accreditation standards require a written policy for identifying and communicating critical or urgent findings (such as significant arrhythmias, severe hypoxemia, or seizures) to the ordering physician in a timely manner. Documentation of the notification, including date, time, person notified, and method of communication, must be maintained.',
        explanationWrong:
          'Waiting 30 days for critical finding communication is inappropriate and does not meet accreditation standards. Critical findings should be communicated proactively, not only upon request. Not all findings carry equal urgency; critical findings require expedited communication.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 16,
        questionText:
          'A sleep laboratory uses single-patient-use disposable supplies for nasal pressure transducer cannulas. Which of the following best describes the rationale for this practice?',
        choices: {
          A: 'Disposable cannulas are less expensive than reusable ones',
          B: 'Reusable nasal cannulas provide better signal quality',
          C: 'Nasal cannulas directly contact mucous membranes and respiratory secretions, making them single-use items to prevent cross-contamination between patients',
          D: 'Accreditation standards do not address disposable versus reusable supplies',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Nasal pressure transducer cannulas directly contact the nasal mucosa and respiratory secretions. As semi-critical items (contacting mucous membranes), they should be single-patient-use to prevent cross-contamination and transmission of respiratory pathogens between patients. This is consistent with CDC infection control guidelines and AASM accreditation standards.',
        explanationWrong:
          'Cost is not the primary rationale; infection prevention is. Reusable cannulas do not provide better signal quality. Accreditation standards do address infection control practices including appropriate use of disposable items.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 17,
        questionText:
          'A technologist discovers that the backup oxygen supply in the sleep laboratory has an empty tank during the middle of a titration study. According to patient safety protocols, what is the most appropriate immediate action?',
        choices: {
          A: 'Continue the study without interruption since the patient is not currently on oxygen',
          B: 'Document the finding in the morning and report to the manager',
          C: 'Immediately end all ongoing sleep studies',
          D: 'Notify the charge technologist or supervisor, ensure the primary oxygen supply is functional, and arrange for replacement of the backup supply as soon as possible',
        },
        correctChoice: 'A',
        explanationCorrect:
          'If the patient is not currently receiving supplemental oxygen and the primary oxygen supply is still functional, the study can continue. However, the empty backup tank must be documented and reported so that it can be replaced before the next study night. The technologist should verify the primary supply is adequate and ensure timely replacement of the backup.',
        explanationWrong:
          'While continuing the study is appropriate if the patient is stable, waiting until morning to report compromises patient safety. Immediately ending all studies is an overreaction if the primary supply is functional. Notifying the supervisor is important but the question asks about the most appropriate immediate action when the patient is not on oxygen.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 18,
        questionText:
          'A patient with chronic respiratory failure from kyphoscoliosis requires nocturnal ventilation. Nocturnal transcutaneous CO2 monitoring during a bilevel PAP titration shows a PtcCO2 trending down from 62 mmHg to 45 mmHg as the IPAP is increased. What does this trend indicate?',
        choices: {
          A: 'The patient is developing respiratory alkalosis and the IPAP should be decreased',
          B: 'The bilevel PAP is effectively augmenting ventilation and reducing CO2 retention',
          C: 'The transcutaneous monitor is malfunctioning',
          D: 'The patient is breath-stacking and needs a lower backup rate',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A decrease in transcutaneous CO2 from 62 to 45 mmHg during bilevel PAP titration indicates that the device is effectively augmenting alveolar ventilation and reducing CO2 retention. A PtcCO2 of 45 mmHg is approaching normal and suggests successful titration. Transcutaneous CO2 monitoring is valuable for real-time assessment of ventilation adequacy.',
        explanationWrong:
          'A PtcCO2 of 45 mmHg is near normal and does not indicate respiratory alkalosis; further reduction below 35 mmHg would raise that concern. If the values are trending in a physiologically expected direction, equipment malfunction is unlikely. Breath-stacking would typically cause erratic tidal volumes and patient discomfort, not a smooth downward CO2 trend.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 19,
        questionText:
          'During a nocturnal oxygen titration study, a patient on 3 L/min nasal cannula oxygen has stable SpO2 of 93% during NREM sleep but desaturates to 82% during REM sleep. What is the most appropriate protocol for adjusting the oxygen?',
        choices: {
          A: 'Maintain 3 L/min throughout the night since NREM oxygenation is adequate',
          B: 'Decrease oxygen to 1 L/min during NREM to prevent oxygen toxicity',
          C: 'Increase oxygen flow during REM sleep periods to achieve and maintain the target SpO2, and document the REM oxygen requirement separately',
          D: 'Discontinue supplemental oxygen since the average SpO2 across the night is above 88%',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Patients with REM-predominant hypoventilation may require higher oxygen flow rates during REM sleep than during NREM sleep. The titration study should document the oxygen flow required to maintain target SpO2 during both NREM and REM sleep separately. The final prescription should address the higher flow needed during REM to ensure adequate oxygenation throughout all sleep stages.',
        explanationWrong:
          'Accepting REM desaturation because NREM SpO2 is adequate leaves significant hypoxemia untreated. Reducing oxygen during NREM to 1 L/min is unnecessary and oxygen toxicity is not a concern at these low flow rates. Averaging SpO2 across the night masks significant REM-related hypoxemia that requires treatment.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 20,
        questionText:
          'Which of the following best describes the role of end-tidal CO2 (EtCO2) monitoring during a pediatric sleep study?',
        choices: {
          A: 'EtCO2 monitoring provides continuous noninvasive assessment of ventilation adequacy and is recommended for pediatric PSG to detect hypoventilation that may not be apparent from oximetry alone',
          B: 'EtCO2 monitoring is only useful in intubated patients',
          C: 'EtCO2 monitoring replaces the need for oximetry in pediatric studies',
          D: 'EtCO2 monitoring is not recommended in pediatric sleep studies',
        },
        correctChoice: 'A',
        explanationCorrect:
          'End-tidal CO2 monitoring is recommended during pediatric PSG by the AASM. It provides continuous noninvasive assessment of alveolar ventilation and can detect hypoventilation (elevated EtCO2 > 50 mmHg for > 25% of total sleep time) that may not be apparent from pulse oximetry alone. This is particularly important in children where obstructive hypoventilation may occur without frank apneas.',
        explanationWrong:
          'While EtCO2 is commonly used in intubated patients, sidestream capnography is well-suited for non-intubated pediatric patients during PSG. EtCO2 complements oximetry but does not replace it; both provide different information. The AASM recommends EtCO2 monitoring for pediatric sleep studies.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
    ],
  })

  // ─── EXAM 14 ─────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q10,Q16,Q19) B=5(Q2,Q5,Q12,Q15,Q17) C=5(Q1,Q6,Q9,Q13,Q20) D=5(Q3,Q8,Q11,Q14,Q18)
  const exam14 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 14',
      examIndex: 14,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam14.id,
        questionIndex: 1,
        questionText:
          'A patient with severe OHS (BMI 58, PaCO2 68 mmHg) is admitted to the hospital with acute-on-chronic respiratory failure. After stabilization, which initial ventilatory support strategy is recommended for sleep?',
        choices: {
          A: 'CPAP at the highest tolerated pressure',
          B: 'No ventilatory support until the patient loses weight',
          C: 'Bilevel PAP with high pressure support (IPAP-EPAP difference >= 8 cmH2O) and a backup rate to ensure adequate ventilation during sleep',
          D: 'Supplemental oxygen alone at 4 L/min',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In severe OHS with significant hypercapnia, bilevel PAP with a substantial pressure support (typically >= 8 cmH2O IPAP-EPAP difference) and a backup rate provides the necessary ventilatory augmentation. The backup rate ensures ventilation continues even if the patient\'s respiratory drive is depressed. This approach addresses both the obstructive and hypoventilation components.',
        explanationWrong:
          'CPAP alone does not provide inspiratory pressure support to augment ventilation. Withholding ventilatory support is dangerous in acute-on-chronic respiratory failure. Supplemental oxygen alone may improve SpO2 but does not address the underlying hypoventilation and may worsen CO2 retention by removing hypoxic drive.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 2,
        questionText:
          'Transcutaneous CO2 (TcCO2) monitoring during a PAP titration shows PtcCO2 values consistently 5-8 mmHg higher than the arterial PaCO2 obtained by blood gas. What is the most likely explanation?',
        choices: {
          A: 'The transcutaneous monitor is broken and should be discarded',
          B: 'TcCO2 typically reads slightly higher than PaCO2 due to local tissue CO2 production at the heated sensor site, and this offset is clinically acceptable',
          C: 'The arterial blood gas measurement is inaccurate',
          D: 'The patient has peripheral vascular disease making TcCO2 unreliable',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Transcutaneous CO2 monitors heat the skin to arterialize capillary blood flow. The heating element and local tissue metabolism cause a small positive bias (typically 3-8 mmHg) above arterial PaCO2. This offset is expected and clinically acceptable. TcCO2 is valued for its trending capability rather than absolute accuracy, and the consistent offset is normal.',
        explanationWrong:
          'A consistent 5-8 mmHg positive offset is within the expected range for TcCO2 monitoring and does not indicate malfunction. Both measurements may be accurate, with the offset being a known characteristic of the transcutaneous method. While peripheral vascular disease can affect TcCO2 accuracy, a consistent 5-8 mmHg offset is within normal range for any patient.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 3,
        questionText:
          'A sleep study shows a patient developing sustained non-sustained ventricular tachycardia (3-5 beat runs) exclusively during periods of SpO2 below 75%. The patient has severe OSA with an AHI of 85. After initiating CPAP at 14 cmH2O, the obstructive events resolve and no further ventricular arrhythmias are observed. This scenario illustrates which concept?',
        choices: {
          A: 'CPAP has direct antiarrhythmic properties independent of its respiratory effects',
          B: 'The ventricular tachycardia was coincidental and unrelated to the desaturations',
          C: 'The patient needs an implantable cardioverter-defibrillator regardless of CPAP use',
          D: 'Treatment of the underlying sleep apnea eliminated the hypoxemia-triggered arrhythmia, and the arrhythmia may be a consequence rather than a primary cardiac condition',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The exclusive occurrence of ventricular tachycardia during severe desaturations and its resolution with CPAP treatment strongly suggests that the arrhythmia was triggered by hypoxemia from untreated severe OSA. This illustrates how OSA-related hypoxemia can cause sympathetic surges and myocardial irritability leading to potentially dangerous arrhythmias that resolve with adequate treatment of the underlying breathing disorder.',
        explanationWrong:
          'CPAP does not have direct antiarrhythmic properties; it eliminated the trigger (hypoxemia) for the arrhythmia. The temporal correlation between desaturations and arrhythmia makes coincidence unlikely. While cardiology follow-up is appropriate, the resolution with CPAP suggests the arrhythmia was secondary to OSA rather than a primary cardiac condition requiring an ICD.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 4,
        questionText:
          'Which autonomic nervous system change during REM sleep predisposes patients to cardiac arrhythmias?',
        choices: {
          A: 'Increased sympathetic surges with unstable autonomic tone, leading to heart rate variability and vulnerability to arrhythmia',
          B: 'Steady parasympathetic dominance with stable heart rate',
          C: 'Complete sympathetic withdrawal with no autonomic variability',
          D: 'Balanced sympathetic and parasympathetic activity identical to wakefulness',
        },
        correctChoice: 'A',
        explanationCorrect:
          'REM sleep is characterized by autonomic instability with phasic sympathetic surges superimposed on a background of increased parasympathetic tone. This autonomic instability creates fluctuations in heart rate, blood pressure, and coronary blood flow, predisposing to arrhythmias. The phasic components of REM are particularly associated with sudden sympathetic discharges.',
        explanationWrong:
          'Parasympathetic dominance with stable heart rate better describes tonic NREM sleep. Complete sympathetic withdrawal does not occur during REM; rather, there are phasic sympathetic surges. Autonomic activity during REM is distinctly different from wakefulness, with greater variability and instability.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 5,
        questionText:
          'An epilepsy monitoring unit notes that a patient\'s seizure frequency increases significantly after a night of sleep deprivation. Which physiologic mechanism best explains this observation?',
        choices: {
          A: 'Sleep deprivation increases REM sleep, which promotes seizures',
          B: 'Sleep deprivation increases cortical excitability and may increase the proportion of NREM sleep on recovery nights, both of which lower the seizure threshold',
          C: 'Sleep deprivation has no effect on seizure threshold; the increase is coincidental',
          D: 'Sleep deprivation reduces interictal epileptiform discharges',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sleep deprivation increases cortical excitability through multiple mechanisms including altered GABAergic and glutamatergic neurotransmission. On recovery nights, the increased proportion of deep NREM sleep (rebound) provides the synchronizing thalamocortical environment that facilitates seizure generation. Sleep deprivation is used clinically to activate epileptiform discharges during EEG monitoring.',
        explanationWrong:
          'While REM rebound occurs after sleep deprivation, REM sleep actually suppresses seizure propagation. The relationship between sleep deprivation and seizures is well-established and not coincidental. Sleep deprivation increases, not reduces, interictal epileptiform discharges.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 6,
        questionText:
          'A patient with treatment-emergent central sleep apnea is being considered for ASV therapy. The technologist reviews the ASV device settings. Which parameter allows the device to provide mandatory breaths during central apneas?',
        choices: {
          A: 'Maximum EPAP setting',
          B: 'Ramp time',
          C: 'Automatic backup rate (auto-rate)',
          D: 'Humidifier setting',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The automatic backup rate (auto-rate) on ASV devices provides mandatory breaths when the patient fails to trigger the device during central apneas. The auto-rate is typically set at a percentage below the patient\'s recent average respiratory rate and activates when the device detects apnea. This ensures ventilation continues during central events.',
        explanationWrong:
          'EPAP maintains airway patency but does not initiate breaths. Ramp time allows gradual pressure increase for comfort at sleep onset and is unrelated to central apnea management. Humidifier settings affect comfort and mucosal moisture but have no role in ventilatory support during central events.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 7,
        questionText:
          'A patient using AVAPS has the following settings: target tidal volume 500 mL, IPAP min 10 cmH2O, IPAP max 25 cmH2O, EPAP 6 cmH2O. The device data shows the delivered IPAP is consistently at 25 cmH2O but the target tidal volume is not being achieved. What is the most appropriate next step?',
        choices: {
          A: 'Increase the maximum IPAP setting or reassess the target tidal volume and consider whether the patient needs a different ventilatory modality',
          B: 'Decrease the EPAP to 4 cmH2O',
          C: 'Switch to CPAP',
          D: 'Decrease the target tidal volume to 200 mL',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When AVAPS reaches its maximum IPAP limit without achieving the target tidal volume, the device cannot provide additional pressure support. The clinician should consider increasing the maximum IPAP if the patient can tolerate it, reassessing the target tidal volume (it may be set too high), evaluating mask fit and leak, or considering whether the patient needs a different modality such as volume-targeted ventilation or invasive ventilation.',
        explanationWrong:
          'Decreasing EPAP reduces the overall pressure support differential and may worsen airway patency. Switching to CPAP eliminates pressure support entirely. Reducing the target tidal volume to 200 mL would result in inadequate ventilation and is far below the physiologic requirement.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 8,
        questionText:
          'An actigraphy study is ordered for a patient with suspected insufficient sleep syndrome. Over 2 weeks, the actigraphy shows an average total sleep time of 5.2 hours on work nights but 8.5 hours on weekends with no scheduled wake time. What does the weekend sleep extension pattern suggest?',
        choices: {
          A: 'The patient has hypersomnia',
          B: 'The actigraphy device is overestimating weekend sleep',
          C: 'The patient has a circadian rhythm disorder',
          D: 'The patient is chronically sleep-deprived on work days and recovering sleep debt on weekends, consistent with behaviorally induced insufficient sleep syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A significant discrepancy between work-night and weekend sleep duration, with substantially longer sleep on free days, is a hallmark of behaviorally induced insufficient sleep syndrome. The extended weekend sleep represents recovery from accumulated sleep debt. The patient is capable of sleeping longer but volitionally restricts sleep on work days due to lifestyle or work demands.',
        explanationWrong:
          'Hypersomnia involves excessive sleep duration (typically > 10-11 hours) that is not explained by insufficient sleep. The actigraphy is likely accurately reflecting the patient\'s behavior. While the work-night schedule may be constrained, the pattern of short work-night sleep with weekend catch-up is characteristic of insufficient sleep, not a circadian disorder.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 9,
        questionText:
          'A sleep diary reveals that a patient takes 90-120 minutes to fall asleep each night, has frequent nocturnal awakenings totaling 2 hours, and reports significant daytime fatigue. The diary shows a time in bed of 10 hours but only 6 hours of estimated sleep. What is this patient\'s sleep efficiency?',
        choices: {
          A: 'Approximately 90%',
          B: 'Approximately 75%',
          C: 'Approximately 60%',
          D: 'Approximately 50%',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep efficiency = (total sleep time / time in bed) x 100 = (6 hours / 10 hours) x 100 = 60%. This is significantly below the normal threshold of 85% and indicates poor sleep quality with excessive time spent awake in bed. This low sleep efficiency is typical of insomnia and would be a target for sleep restriction therapy as part of CBT-I.',
        explanationWrong:
          '90% would indicate excellent sleep efficiency. 75% is higher than the calculated value. 50% would represent an even lower sleep efficiency than calculated. The correct calculation yields 60%.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 10,
        questionText:
          'Clonazepam is commonly used off-label for the treatment of REM sleep behavior disorder. What is the primary concern regarding its use in elderly patients with neurodegenerative disease?',
        choices: {
          A: 'Increased risk of falls, cognitive impairment, and respiratory depression, especially in patients who may already have gait instability and cognitive decline',
          B: 'Clonazepam is completely contraindicated in all patients over age 60',
          C: 'Clonazepam has no effect on RBD symptoms in elderly patients',
          D: 'Clonazepam causes paradoxical worsening of RBD in all cases',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Clonazepam is a long-acting benzodiazepine that can cause daytime sedation, cognitive impairment, gait instability, and increased fall risk. In elderly patients with neurodegenerative diseases who already have gait difficulties and cognitive decline, these effects are compounded. Melatonin is often considered as a safer first-line alternative for RBD in this population.',
        explanationWrong:
          'Clonazepam is not absolutely contraindicated in all patients over 60, but requires careful risk-benefit assessment. It is effective for RBD in elderly patients when used carefully. It does not cause paradoxical worsening in all cases, though individual responses vary.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 11,
        questionText:
          'Which sleep architecture change is most characteristically observed on PSG in patients with Alzheimer disease?',
        choices: {
          A: 'Increased REM sleep percentage',
          B: 'Increased stage N3 (slow-wave sleep)',
          C: 'Shortened sleep latency to less than 5 minutes',
          D: 'Reduced slow-wave sleep, increased sleep fragmentation, and decreased sleep spindle density',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Alzheimer disease is associated with progressive deterioration of sleep architecture including reduced slow-wave sleep (N3), decreased sleep spindle density and amplitude, increased sleep fragmentation with frequent awakenings, and increased wake after sleep onset. These changes correlate with the degree of neurodegeneration and reflect disruption of thalamocortical and brainstem sleep-generating circuits.',
        explanationWrong:
          'REM sleep is typically decreased, not increased, in Alzheimer disease. Slow-wave sleep is reduced, not increased. While some patients with AD may have shortened sleep latency, the hallmark PSG findings are the architectural degradation described in the correct answer.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 12,
        questionText:
          'A patient taking zolpidem reports performing complex behaviors during the night (eating, walking) with no memory of these events. What is this phenomenon called?',
        choices: {
          A: 'REM sleep behavior disorder',
          B: 'Medication-related complex sleep behaviors (parasomnia-like events associated with sedative-hypnotic use)',
          C: 'Nocturnal eating syndrome',
          D: 'Dissociative disorder',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Zolpidem and other non-benzodiazepine hypnotics (Z-drugs) are associated with complex sleep-related behaviors including sleepwalking, sleep-eating, and even sleep-driving. These events occur without conscious awareness and are attributed to the drug\'s partial arousal effects. The FDA has issued warnings about these behaviors, and they typically resolve with discontinuation.',
        explanationWrong:
          'RBD involves motor behavior during REM sleep with dream enactment and is not medication-induced. Nocturnal eating syndrome involves conscious nighttime eating. Dissociative disorder involves alterations in consciousness not specifically linked to hypnotic medications during sleep.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 13,
        questionText:
          'Which statement accurately describes the use of melatonin in clinical sleep medicine?',
        choices: {
          A: 'Melatonin is FDA-approved as a prescription medication for insomnia',
          B: 'Melatonin is effective only for jet lag and has no role in other sleep disorders',
          C: 'Melatonin is available as an over-the-counter dietary supplement and is used for circadian rhythm disorders, though its optimal dosing and timing vary by condition',
          D: 'Melatonin is contraindicated in children',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Melatonin is available as an over-the-counter dietary supplement in the United States (not as an FDA-approved drug for insomnia). It is used therapeutically for various circadian rhythm disorders including delayed sleep-wake phase disorder, jet lag, and shift work disorder. Optimal dosing ranges from 0.5-5 mg and timing depends on the specific circadian condition being treated.',
        explanationWrong:
          'Melatonin is sold as a dietary supplement, not an FDA-approved prescription drug. It has roles beyond jet lag, including DSWPD and other circadian disorders. While pediatric use requires appropriate guidance, melatonin is not contraindicated in children and is commonly used for pediatric sleep disorders.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 14,
        questionText:
          'A sleep laboratory\'s quality improvement data shows that 15% of studies over the past quarter had to be repeated due to technical failures. Which of the following is the most appropriate quality improvement action?',
        choices: {
          A: 'Accept the repeat rate as industry standard',
          B: 'Hire additional technologists to increase staffing',
          C: 'Eliminate the quality tracking program to reduce administrative burden',
          D: 'Conduct a root cause analysis of the technical failures, implement corrective actions, and monitor the repeat rate going forward',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A 15% repeat rate due to technical failures is above acceptable benchmarks and warrants investigation. A root cause analysis should identify specific causes (equipment malfunction, electrode application technique, protocol adherence, staff training gaps), corrective actions should be implemented, and the metric should be tracked to verify improvement. This is consistent with AASM quality improvement requirements.',
        explanationWrong:
          'A 15% repeat rate is not an acceptable industry standard. Hiring additional technologists may help if understaffing is the root cause, but without root cause analysis, this may not address the problem. Eliminating quality tracking undermines the accreditation requirement for ongoing quality improvement.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 15,
        questionText:
          'During AASM accreditation review, which documentation is required to demonstrate that sleep laboratory equipment is properly maintained?',
        choices: {
          A: 'Only the original purchase receipts for all equipment',
          B: 'Preventive maintenance logs, calibration records, and documentation of equipment inspections performed at regular intervals',
          C: 'A list of equipment serial numbers only',
          D: 'Equipment maintenance is not evaluated during accreditation review',
        },
        correctChoice: 'B',
        explanationCorrect:
          'AASM accreditation requires documentation of a preventive maintenance program including logs of routine maintenance activities, calibration records for measuring equipment (oximeters, capnographs, pressure manometers), and regular inspection documentation. This ensures that equipment is functioning properly and producing reliable data for patient care.',
        explanationWrong:
          'Purchase receipts demonstrate ownership but not maintenance. Serial number lists alone do not document maintenance activities. Equipment maintenance is an important component of accreditation review and is definitely evaluated.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 16,
        questionText:
          'A patient with sleep-related hypoxemia is placed on nocturnal oxygen at 2 L/min via nasal cannula. After one month, a follow-up oximetry shows that the SpO2 no longer drops below 90% during sleep. However, the patient\'s morning headaches have worsened. What should be considered?',
        choices: {
          A: 'The oxygen therapy is working perfectly and no changes are needed',
          B: 'The morning headaches are unrelated to the oxygen therapy',
          C: 'The patient should switch to a higher oxygen flow rate',
          D: 'The patient should be switched from oxygen to CPAP since the headaches suggest undiagnosed OSA',
        },
        correctChoice: 'A',
        explanationCorrect:
          'While the oxygenation has improved, worsening morning headaches in a patient on supplemental oxygen may indicate CO2 retention. Supplemental oxygen can suppress hypoxic ventilatory drive in susceptible patients, leading to hypoventilation and hypercapnia. A morning arterial blood gas or nocturnal capnography should be obtained to evaluate for CO2 retention before assuming the oxygen therapy alone is adequate.',
        explanationWrong:
          'Morning headaches in the context of supplemental oxygen use warrant investigation for hypercapnia; they may be directly related. Increasing the oxygen flow could worsen CO2 retention. While undiagnosed OSA is possible, the immediate concern with new morning headaches on supplemental oxygen is CO2 retention from suppressed ventilatory drive.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 17,
        questionText:
          'When supplemental oxygen is added to a PAP circuit during a titration study, at which point in the circuit should the oxygen be introduced for optimal delivery?',
        choices: {
          A: 'At the exhalation port of the mask',
          B: 'At the mask or as close to the patient interface as possible, using a manufacturer-approved oxygen enrichment adapter',
          C: 'At the device\'s air intake',
          D: 'Oxygen cannot be added to PAP circuits',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Supplemental oxygen should be introduced at or near the patient interface (mask) using a manufacturer-approved oxygen enrichment connector. This placement minimizes dilution of the oxygen by the high-flow PAP circuit and maximizes the effective FiO2 delivered to the patient. Connecting at the machine end results in greater dilution and less predictable FiO2 delivery.',
        explanationWrong:
          'Introducing oxygen at the exhalation port would result in most of the oxygen being vented rather than delivered to the patient. Introducing oxygen at the device air intake causes maximum dilution through the entire length of tubing. Oxygen can be added to PAP circuits and is routinely done in sleep laboratories.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 18,
        questionText:
          'A sleep lab technologist notices a patient\'s telemetry showing asystole lasting 8 seconds during a sleep study. The patient appears unresponsive. According to emergency protocols, what is the immediate first action?',
        choices: {
          A: 'Continue monitoring and document the event',
          B: 'Call the interpreting physician to discuss the finding',
          C: 'Wait 30 more seconds to see if the rhythm returns',
          D: 'Attempt to arouse the patient, assess responsiveness, and if unresponsive, initiate emergency response procedures (call for help, begin BLS/CPR)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An 8-second asystole with an unresponsive patient is a medical emergency. The technologist should immediately attempt to stimulate the patient. If the patient remains unresponsive with no detectable pulse, emergency response procedures must be initiated: call for help (activate emergency medical services), begin basic life support (CPR), and apply the AED if available. Documentation occurs after stabilization.',
        explanationWrong:
          'Continued monitoring without intervention during asystole with an unresponsive patient could result in death. While notifying the physician is important, it should not delay emergency response. Waiting additional seconds during asystole risks brain injury and death.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 19,
        questionText:
          'Which of the following infection control measures is specifically required when a sleep lab patient is known to have active pulmonary tuberculosis?',
        choices: {
          A: 'Airborne precautions including an N95 or higher respirator for staff, negative-pressure isolation room, and the study should ideally be deferred until the patient is no longer infectious',
          B: 'Standard precautions only, as tuberculosis is not transmitted through the respiratory route',
          C: 'Contact precautions with gloves and gown only',
          D: 'Droplet precautions with a surgical mask only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pulmonary tuberculosis is transmitted via airborne droplet nuclei and requires airborne precautions: N95 or higher respirators for healthcare workers, a negative-pressure isolation room, and limiting the number of staff entering the room. Sleep studies should ideally be deferred until the patient is no longer infectious, as the shared breathing circuits and prolonged close contact pose significant transmission risk.',
        explanationWrong:
          'Standard precautions alone are insufficient for TB. TB is transmitted via the airborne route, making the statement in option B factually incorrect. Contact precautions address surface transmission, not airborne. Droplet precautions with a surgical mask are insufficient; airborne precautions with fitted N95 respirators are required.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 20,
        questionText:
          'A patient with overlap syndrome (COPD plus OSA) is being titrated on bilevel PAP with supplemental oxygen during a sleep study. Which combination of monitoring parameters is most important for this patient?',
        choices: {
          A: 'EEG and EOG channels only',
          B: 'Oximetry and respiratory effort belts only',
          C: 'Continuous SpO2, end-tidal or transcutaneous CO2 monitoring, respiratory effort, airflow, and PAP pressure/leak data',
          D: 'ECG monitoring only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Patients with overlap syndrome (COPD + OSA) are at risk for both obstructive events and hypoventilation. Comprehensive monitoring must include SpO2 for oxygenation, CO2 monitoring (EtCO2 or TcCO2) for ventilation adequacy, respiratory effort and airflow for event detection, and PAP data (pressures, leak, tidal volume) for treatment optimization. CO2 monitoring is particularly important because supplemental oxygen may mask hypoventilation if only SpO2 is followed.',
        explanationWrong:
          'EEG and EOG alone assess sleep staging but not respiratory status. SpO2 and respiratory effort alone miss CO2 retention. ECG alone does not assess respiratory function or oxygenation. The complexity of overlap syndrome requires comprehensive cardiorespiratory monitoring.',
        topic: 'Oxygen supplementation during sleep',
      },
    ],
  })

  // ─── EXAM 15 ─────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q6,Q11,Q14,Q18) B=5(Q4,Q8,Q13,Q17,Q20) C=5(Q3,Q7,Q10,Q15,Q19) D=5(Q1,Q5,Q9,Q12,Q16)
  const exam15 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 15',
      examIndex: 15,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam15.id,
        questionIndex: 1,
        questionText:
          'A patient with late-stage amyotrophic lateral sclerosis (ALS) has a forced vital capacity of 25% predicted and uses nocturnal bilevel PAP with a backup rate. The patient now reports increasing dyspnea even with PAP use and morning headaches. Nocturnal TcCO2 shows a peak of 72 mmHg. What does this clinical scenario most likely indicate?',
        choices: {
          A: 'The bilevel PAP settings need minor fine-tuning',
          B: 'The patient has developed comorbid OSA',
          C: 'The morning headaches are from a different cause unrelated to ventilation',
          D: 'Progressive respiratory muscle weakness has exceeded the capacity of noninvasive ventilation, and a discussion about goals of care including potential invasive ventilation is warranted',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In progressive neuromuscular disease like ALS, respiratory muscle strength continues to decline. When nocturnal CO2 remains severely elevated despite noninvasive ventilation, it indicates that the ventilatory support is no longer adequate for the degree of respiratory muscle weakness. At this stage, a goals-of-care discussion regarding invasive ventilation (tracheostomy) versus palliative care is essential.',
        explanationWrong:
          'Minor fine-tuning is unlikely to correct a PtcCO2 of 72 mmHg in the context of severely reduced FVC. Comorbid OSA would not explain persistent severe hypercapnia when PAP is already being used. The morning headaches in this context are highly consistent with CO2 retention and are not likely from a separate cause.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 2,
        questionText:
          'Which of the following is a characteristic polysomnographic finding in obesity hypoventilation syndrome that distinguishes it from isolated OSA?',
        choices: {
          A: 'Sustained oxygen desaturation during NREM sleep (not linked to discrete apnea/hypopnea events) indicating hypoventilation',
          B: 'Repetitive obstructive apneas with rapid recovery to baseline SpO2',
          C: 'Normal baseline SpO2 with only event-related desaturations',
          D: 'Absence of any respiratory events',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In OHS, in addition to obstructive events, there is often sustained desaturation during NREM sleep that is not associated with discrete apnea or hypopnea events. This reflects the underlying hypoventilation component. In isolated OSA, desaturations are typically cyclical, linked to individual respiratory events with recovery between events.',
        explanationWrong:
          'Rapid recovery to baseline SpO2 between events is characteristic of isolated OSA. Normal baseline SpO2 with only event-related desaturations is also more typical of OSA without hypoventilation. OHS by definition involves respiratory events, so their absence would argue against the diagnosis.',
        topic: 'Sleep-related hypoventilation syndromes',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 3,
        questionText:
          'A patient with atrial fibrillation and moderate OSA (AHI 22) undergoes cardioversion. Evidence suggests that the recurrence rate of atrial fibrillation after cardioversion is reduced when which of the following is consistently used?',
        choices: {
          A: 'Rate-control medications alone',
          B: 'Supplemental oxygen at 2 L/min during sleep',
          C: 'CPAP therapy for the comorbid OSA',
          D: 'Positional therapy alone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Multiple studies have demonstrated that consistent CPAP use in OSA patients with atrial fibrillation significantly reduces the recurrence rate of atrial fibrillation after cardioversion compared to those who do not use CPAP. CPAP reduces the intermittent hypoxemia, intrathoracic pressure swings, and sympathetic activation that promote atrial remodeling and arrhythmia recurrence.',
        explanationWrong:
          'Rate-control medications manage the ventricular response to AF but do not address the OSA-related triggers for recurrence. Supplemental oxygen alone does not address the upper airway obstruction and intrathoracic pressure changes. Positional therapy may help mild OSA but is not as effective as CPAP for moderate OSA.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 4,
        questionText:
          'During a PSG, the technologist observes a wide complex tachycardia at a rate of 180 bpm. The patient is diaphoretic but conscious. According to emergency protocols, after calling for help, what is the next most appropriate action?',
        choices: {
          A: 'Administer sublingual nitroglycerin',
          B: 'Prepare for cardioversion and follow ACLS protocols while maintaining the patient\'s airway and monitoring vital signs',
          C: 'Perform a carotid sinus massage',
          D: 'Continue the sleep study and document the event',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Wide complex tachycardia at 180 bpm with hemodynamic compromise (diaphoresis) is a potentially life-threatening arrhythmia requiring urgent treatment. After calling for help, the technologist should prepare for cardioversion per ACLS protocols, maintain the airway, and continuously monitor vital signs. The patient should be prepared for emergency medical transport if not in a hospital-based lab.',
        explanationWrong:
          'Nitroglycerin is not indicated for wide complex tachycardia and could worsen hypotension. Carotid sinus massage is a vagal maneuver for narrow complex tachycardia (SVT), not wide complex tachycardia which may be ventricular tachycardia. Continuing the study during a hemodynamically significant arrhythmia is inappropriate.',
        topic: 'Cardiac arrhythmias during sleep',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 5,
        questionText:
          'Which of the following anticonvulsant medications is most likely to cause significant insomnia as a side effect?',
        choices: {
          A: 'Gabapentin',
          B: 'Phenobarbital',
          C: 'Carbamazepine',
          D: 'Lamotrigine',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Lamotrigine can cause insomnia as a side effect, likely due to its glutamate-inhibiting and potentially activating properties. Some patients report difficulty initiating sleep, vivid dreams, and sleep disruption when taking lamotrigine, particularly at higher doses. Gabapentin and phenobarbital are more commonly associated with sedation.',
        explanationWrong:
          'Gabapentin is commonly associated with sedation and is actually used off-label for insomnia. Phenobarbital is a potent sedative. Carbamazepine can cause drowsiness. All three are more likely to cause sedation than insomnia.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 6,
        questionText:
          'A patient with epilepsy has seizures that are consistently preceded by brief arousals from sleep on video-EEG monitoring. What is the clinical significance of this sleep-to-seizure relationship?',
        choices: {
          A: 'Arousals from sleep can serve as a trigger for seizures in susceptible patients, likely through rapid shifts in cortical excitability during the transition from sleep to wakefulness',
          B: 'The arousals are caused by the seizures, not the other way around',
          C: 'This pattern indicates that the patient does not have epilepsy',
          D: 'Arousals during sleep are never associated with seizure activity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Arousals from sleep can trigger seizures in susceptible patients. The rapid transition from sleep to wakefulness involves sudden changes in cortical excitability, thalamic gating, and neurotransmitter balance. This instability can lower the seizure threshold in patients with epilepsy, particularly those with frontal lobe epilepsy. Recognizing this relationship helps guide treatment strategies.',
        explanationWrong:
          'While seizures can cause arousals, the temporal sequence on video-EEG showing arousals consistently preceding the electrographic seizure onset supports the arousal-as-trigger interpretation. This pattern is well-recognized in epilepsy and does not negate the diagnosis. Arousals are a recognized trigger for seizures in many patients.',
        topic: 'Sleep and epilepsy interactions',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 7,
        questionText:
          'A patient with central sleep apnea is placed on ASV. After 3 months, the device data shows an AHI of 2 events/hour (down from 35), but the patient reports persistent mask discomfort and aerophagia. Which ASV setting adjustment may help reduce aerophagia?',
        choices: {
          A: 'Increase the maximum pressure support to 20 cmH2O',
          B: 'Increase the EPAP to 15 cmH2O',
          C: 'Reduce the maximum pressure support if the central events are well controlled, as lower peak pressures reduce the amount of air swallowed',
          D: 'Add a heated humidifier without adjusting pressures',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Aerophagia (air swallowing) is often caused by excessive delivered pressures. Since the patient\'s AHI is well-controlled at 2 events/hour, there is room to reduce the maximum pressure support setting. Lower peak inspiratory pressures reduce the volume and force of air delivery, decreasing the likelihood of aerophagia while maintaining adequate therapy.',
        explanationWrong:
          'Increasing maximum pressure support would likely worsen aerophagia. Increasing EPAP to 15 cmH2O raises the overall pressure and may worsen both aerophagia and discomfort. A heated humidifier may help with dryness and mucosal irritation but does not address the pressure-related cause of aerophagia.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 8,
        questionText:
          'When comparing AVAPS to iVAPS, which statement accurately describes a difference between the two modes?',
        choices: {
          A: 'AVAPS and iVAPS are identical modes made by the same manufacturer',
          B: 'iVAPS targets alveolar ventilation (accounting for estimated dead space) and uses a learned target, while AVAPS targets tidal volume with a clinician-set target',
          C: 'AVAPS accounts for dead space ventilation while iVAPS does not',
          D: 'Both modes are designed exclusively for obstructive sleep apnea',
        },
        correctChoice: 'B',
        explanationCorrect:
          'AVAPS (Philips Respironics) targets a clinician-set tidal volume by adjusting IPAP within set limits. iVAPS (ResMed) targets alveolar ventilation by estimating and subtracting dead space ventilation, and uses a learned target based on the patient\'s recent breathing pattern. This distinction means iVAPS theoretically better targets effective gas exchange rather than total tidal volume.',
        explanationWrong:
          'AVAPS and iVAPS are made by different manufacturers and use different algorithms. AVAPS targets tidal volume without explicit dead space estimation, while iVAPS does account for dead space. Both modes are designed for patients with hypoventilation, not exclusively for OSA.',
        topic: 'Advanced PAP modes (ASV, AVAPS, iVAPS)',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 9,
        questionText:
          'An actigraphy study shows a patient with very irregular rest-activity patterns, with multiple short sleep bouts scattered across the 24-hour day and no consolidated nighttime sleep period. There is no clear circadian rhythm evident. Which circadian rhythm disorder is this pattern most consistent with?',
        choices: {
          A: 'Delayed sleep-wake phase disorder',
          B: 'Non-24-hour sleep-wake rhythm disorder',
          C: 'Shift work disorder',
          D: 'Irregular sleep-wake rhythm disorder',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Irregular sleep-wake rhythm disorder is characterized by the absence of a clearly defined circadian sleep-wake rhythm. Sleep is fragmented into multiple short bouts throughout the 24-hour period with no major consolidated sleep episode. This disorder is most commonly seen in patients with neurodegenerative disease, intellectual disability, or after traumatic brain injury due to SCN dysfunction.',
        explanationWrong:
          'DSWPD shows a consistent but delayed sleep pattern, not scattered bouts. Non-24-hour disorder shows a progressively drifting but organized sleep pattern. Shift work disorder involves difficulty sleeping during a specific required sleep time due to work schedule demands, not a fragmented circadian pattern.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 10,
        questionText:
          'A patient uses a sleep diary alongside a wrist-worn actigraphy device for 2 weeks. The actigraphy reports an average total sleep time of 7.5 hours, but the sleep diary reports only 5.5 hours. What is the most likely explanation for this discrepancy?',
        choices: {
          A: 'The actigraphy device is defective',
          B: 'The sleep diary is more accurate than actigraphy for total sleep time',
          C: 'The patient has sleep state misperception (paradoxical insomnia), perceiving wakefulness during periods the actigraph records as sleep',
          D: 'The patient is intentionally falsifying the sleep diary',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep state misperception (paradoxical insomnia) is a condition where patients perceive themselves as awake during periods when objective measures (actigraphy, PSG) indicate sleep. The discrepancy between the objective actigraphy data showing 7.5 hours and the subjective diary reporting only 5.5 hours is consistent with this phenomenon. PSG may be needed to further characterize the finding.',
        explanationWrong:
          'A consistently functioning device recording 7.5 hours nightly for 2 weeks is unlikely to be defective. While sleep diaries provide important subjective data, they may underestimate sleep in patients with sleep state misperception. Intentional falsification is possible but much less likely than the well-recognized phenomenon of sleep state misperception.',
        topic: 'Actigraphy and sleep diary interpretation',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 11,
        questionText:
          'A patient with dementia with Lewy bodies (DLB) presents with visual hallucinations, cognitive fluctuations, and polysomnography-confirmed REM sleep behavior disorder. Which neurotransmitter system is most significantly affected in DLB that contributes to these symptoms?',
        choices: {
          A: 'The cholinergic system, with severe cholinergic deficits contributing to cognitive fluctuations and hallucinations, and brainstem cholinergic dysfunction contributing to RBD',
          B: 'The serotonergic system exclusively',
          C: 'The glutamatergic system exclusively',
          D: 'The histaminergic system exclusively',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Dementia with Lewy bodies involves profound cholinergic deficits, often more severe than in Alzheimer disease. Degeneration of cholinergic neurons in the basal forebrain (nucleus basalis of Meynert) contributes to cognitive fluctuations and visual hallucinations. Cholinergic brainstem nuclei (pedunculopontine and laterodorsal tegmental nuclei) involved in REM sleep regulation are also affected, contributing to RBD.',
        explanationWrong:
          'While multiple neurotransmitter systems are affected in DLB (including dopaminergic, serotonergic, and others), the cholinergic system is most significantly and characteristically affected. The serotonergic, glutamatergic, and histaminergic systems alone do not explain the full clinical picture.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 12,
        questionText:
          'A patient with Parkinson disease is being evaluated for excessive daytime sleepiness. The MSLT shows a mean sleep latency of 4 minutes with one sleep-onset REM period. These findings are most consistent with:',
        choices: {
          A: 'Narcolepsy type 1',
          B: 'Normal findings for a patient with Parkinson disease',
          C: 'Insufficient sleep syndrome',
          D: 'Severe excessive daytime sleepiness related to Parkinson disease, with the understanding that SOREMPs can occur in PD due to degeneration of hypocretin/orexin neurons',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Patients with Parkinson disease can have severely reduced mean sleep latency on MSLT and may have SOREMPs. This is attributed to neurodegeneration affecting wake-promoting centers including partial loss of hypocretin/orexin neurons. One SOREMP on MSLT does not meet criteria for narcolepsy (which requires >= 2 SOREMPs). The finding reflects the neurodegenerative process rather than a separate diagnosis of narcolepsy.',
        explanationWrong:
          'Narcolepsy type 1 requires >= 2 SOREMPs (or 1 on MSLT + 1 on the preceding PSG) plus reduced CSF hypocretin. One SOREMP is insufficient for this diagnosis. A mean sleep latency of 4 minutes with a SOREMP is not normal. Insufficient sleep syndrome would show improvement with extended sleep time, but the SOREMP and PD pathology suggest a different mechanism.',
        topic: 'Sleep disorders in neurodegenerative disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 13,
        questionText:
          'Which of the following best describes the mechanism of action of pitolisant, a medication approved for excessive daytime sleepiness in narcolepsy?',
        choices: {
          A: 'It enhances GABAergic transmission',
          B: 'It is a histamine H3 receptor inverse agonist/antagonist that increases histamine release in the brain to promote wakefulness',
          C: 'It blocks orexin receptors',
          D: 'It is a dopamine receptor agonist',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pitolisant is a first-in-class histamine H3 receptor inverse agonist/antagonist. By blocking the presynaptic H3 autoreceptor, it enhances histaminergic neurotransmission, increasing histamine release from tuberomammillary neurons. This promotes wakefulness through a unique mechanism distinct from traditional stimulants, modafinil, or sodium oxybate.',
        explanationWrong:
          'Pitolisant does not enhance GABAergic transmission; that would promote sedation. It does not block orexin receptors; that is the mechanism of suvorexant/lemborexant. It is not a dopamine agonist, though modafinil works partly through dopamine reuptake inhibition.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 14,
        questionText:
          'A patient on long-term opioid therapy for chronic pain develops sleep-disordered breathing. Which pattern of breathing abnormality is most characteristic of opioid-induced sleep-disordered breathing?',
        choices: {
          A: 'Ataxic (Biot\'s) breathing pattern with irregular respiratory rate and depth, and central apneas',
          B: 'Cheyne-Stokes respiration with regular crescendo-decrescendo pattern',
          C: 'Purely obstructive apneas with no central component',
          D: 'Isolated hypopneas without any apneas',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Opioid-induced sleep-disordered breathing characteristically produces an ataxic (Biot\'s) breathing pattern with irregular rate and depth, along with central apneas. Opioids depress the brainstem respiratory centers, reducing chemosensitivity to CO2. Unlike Cheyne-Stokes respiration, the pattern is irregular without the predictable crescendo-decrescendo cycling.',
        explanationWrong:
          'Cheyne-Stokes respiration is typically associated with heart failure, not opioid use. Purely obstructive apneas without a central component would not reflect the central respiratory depression caused by opioids. Isolated hypopneas are not the characteristic pattern; central apneas are a prominent feature.',
        topic: 'Pharmacotherapy for sleep disorders',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 15,
        questionText:
          'A sleep laboratory manager is developing a competency assessment for newly hired sleep technologists. Which of the following components should be included?',
        choices: {
          A: 'Only a written exam on sleep physiology',
          B: 'Only observation of 3 sleep studies',
          C: 'Assessment of electrode application technique, scoring accuracy (inter-scorer reliability), equipment troubleshooting skills, emergency response competency, and knowledge of AASM protocols',
          D: 'Only verification of RPSGT credential',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A comprehensive competency assessment for sleep technologists should include hands-on evaluation of electrode application and signal quality, scoring accuracy with inter-scorer reliability testing, ability to troubleshoot equipment problems, knowledge and demonstration of emergency response procedures, and familiarity with current AASM scoring and procedural protocols. This multifaceted approach ensures readiness for independent practice.',
        explanationWrong:
          'A written exam alone does not assess hands-on clinical skills. Observation alone is passive and does not test the technologist\'s own abilities. While RPSGT credential is important, verification alone does not assess current competency in the specific laboratory\'s protocols and equipment.',
        topic: 'Sleep lab management and accreditation',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 16,
        questionText:
          'A sleep lab receives a complaint from a patient who reports developing a skin rash after using a new brand of adhesive electrode during a PSG. What is the most appropriate response by the sleep lab?',
        choices: {
          A: 'Dismiss the complaint as the electrodes are FDA-cleared',
          B: 'Tell the patient to apply over-the-counter hydrocortisone cream',
          C: 'Advise the patient to see their primary care physician',
          D: 'Document the adverse reaction, report it through the facility\'s incident reporting system, consider whether the product should be reported to the FDA\'s MedWatch program, and evaluate alternative electrode products for future use',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An adverse reaction to a medical device (electrode adhesive) should be documented in the patient\'s record and reported through the facility\'s incident reporting system. If the reaction is significant, it may warrant reporting to the FDA MedWatch program for medical device adverse events. The lab should evaluate whether alternative hypoallergenic electrode products should be stocked for future patients.',
        explanationWrong:
          'FDA clearance does not preclude individual adverse reactions, and complaints should not be dismissed. Recommending specific treatments is outside the scope of the sleep lab technologist. While the patient should see their physician, the lab has additional responsibilities for documentation, reporting, and quality improvement.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 17,
        questionText:
          'Which of the following statements is correct regarding the use of PAP humidification for patient comfort during a titration study?',
        choices: {
          A: 'Heated humidification is never needed during sleep studies',
          B: 'Heated humidification can reduce nasal congestion, dryness, and mouth leak, improving patient comfort and PAP tolerance during titration',
          C: 'Cold passover humidification provides better humidification than heated humidifiers',
          D: 'Humidification increases the risk of infection and should be avoided',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Heated humidification added to the PAP circuit reduces nasal mucosal drying, congestion, rhinorrhea, and epistaxis that can occur from the continuous flow of dry pressurized air. It can also reduce mouth breathing/leak by maintaining nasal mucosal comfort. Improved comfort leads to better PAP tolerance and compliance during titration and subsequent home use.',
        explanationWrong:
          'Humidification is frequently needed and beneficial. Heated humidification provides more effective moisture delivery than cold passover systems. When properly maintained and cleaned, humidification does not significantly increase infection risk.',
        topic: 'Patient safety and infection control in sleep labs',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 18,
        questionText:
          'A patient with restrictive lung disease from severe kyphoscoliosis is on nocturnal bilevel PAP with supplemental oxygen. The physician orders a target SpO2 of >= 90%. During the titration, the technologist notes that the SpO2 is 91% but the TcCO2 has risen to 65 mmHg. What does this situation illustrate?',
        choices: {
          A: 'Supplemental oxygen can mask ongoing hypoventilation by maintaining SpO2 while CO2 continues to rise, making CO2 monitoring essential in these patients',
          B: 'The TcCO2 reading is artifactual and should be ignored',
          C: 'The bilevel PAP is adequately treating the hypoventilation',
          D: 'The oxygen flow rate should be increased further',
        },
        correctChoice: 'A',
        explanationCorrect:
          'This scenario illustrates a critical concept: supplemental oxygen improves oxygenation (maintaining SpO2) but does not treat hypoventilation. In fact, supplemental oxygen can mask worsening hypoventilation because the SpO2 remains acceptable while CO2 continues to rise. This is why CO2 monitoring (TcCO2 or EtCO2) is essential when supplemental oxygen is used, particularly in patients with restrictive or neuromuscular disease.',
        explanationWrong:
          'A TcCO2 of 65 mmHg in a patient with restrictive disease is clinically significant and should not be dismissed as artifact. If CO2 is 65 mmHg, the hypoventilation is not adequately treated regardless of SpO2. Increasing oxygen without addressing ventilation would further mask the hypoventilation and potentially worsen CO2 retention.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 19,
        questionText:
          'A patient with idiopathic pulmonary fibrosis (IPF) has nocturnal desaturations documented on overnight oximetry, with SpO2 dropping to 78% during REM sleep. No OSA is detected on PSG. Which treatment approach is most appropriate?',
        choices: {
          A: 'CPAP therapy at 10 cmH2O',
          B: 'Oral appliance therapy',
          C: 'Nocturnal supplemental oxygen titrated to maintain SpO2 >= 88-90%, with consideration of CO2 monitoring',
          D: 'Positional therapy (sleeping on the side)',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In IPF without OSA, nocturnal desaturation is due to the underlying parenchymal lung disease, not upper airway obstruction. Supplemental oxygen titrated to target SpO2 is the appropriate treatment. CO2 monitoring should be considered since some patients may develop CO2 retention with supplemental oxygen, particularly if there is concurrent ventilatory impairment.',
        explanationWrong:
          'CPAP is indicated for OSA, not for parenchymal lung disease-related hypoxemia without airway obstruction. Oral appliance therapy treats OSA by advancing the mandible; it has no role in IPF-related desaturation. Positional therapy is for positional OSA and does not address diffuse parenchymal disease.',
        topic: 'Oxygen supplementation during sleep',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 20,
        questionText:
          'An AASM-accredited sleep center is developing a policy for handling PAP device recalls. Which of the following elements should be included in the recall response policy?',
        choices: {
          A: 'Recalls are the responsibility of the device manufacturer and do not require action by the sleep center',
          B: 'A system for identifying affected patients, notifying them of the recall, providing interim treatment options, and documenting all recall-related communications and actions',
          C: 'Only patients who are actively calling the center about device issues need to be contacted',
          D: 'The recall information should be posted on the center\'s website without individual patient notification',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A comprehensive recall response policy should include a method for quickly identifying all patients using the affected device, a protocol for timely patient notification, guidance on interim treatment alternatives (e.g., loaner devices, alternative PAP devices), documentation of all communications and actions taken, and follow-up to ensure affected patients receive replacement devices or appropriate alternatives.',
        explanationWrong:
          'While manufacturers initiate recalls, the prescribing sleep center has a patient safety obligation to act. Waiting for patients to contact the center is a passive approach that leaves uninformed patients at risk. Website posting alone does not ensure all affected patients receive the information.',
        topic: 'Sleep lab management and accreditation',
      },
    ],
  })

  console.log('SDS mini exams 11-15 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
