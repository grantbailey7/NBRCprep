import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SDS_DIVISION_ID = 'cmsm41fwz0003zf54l0h5llrr'

async function main() {
  console.log('Seeding SDS mini exams 21-25...')

  // ─── EXAM 21 ───────────────────────────────────────────
  // Topics: Sleep in pregnancy, Sleep and cardiovascular disease
  // Correct answer distribution: A=5(Q2,Q6,Q10,Q14,Q18) B=5(Q4,Q8,Q11,Q16,Q19) C=5(Q1,Q5,Q9,Q13,Q20) D=5(Q3,Q7,Q12,Q15,Q17)
  const exam21 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 21',
      examIndex: 21,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam21.id,
        questionIndex: 1,
        questionText:
          'A 32-year-old woman in her third trimester reports loud snoring and witnessed apneas that began during pregnancy. Her Epworth Sleepiness Scale score is 14. A diagnostic PSG reveals an AHI of 18 events/hour. Which of the following is the most significant maternal risk associated with untreated OSA during pregnancy?',
        choices: {
          A: 'Increased risk of placenta previa',
          B: 'Development of narcolepsy after delivery',
          C: 'Gestational hypertension and preeclampsia',
          D: 'Permanent enlargement of the upper airway',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Untreated OSA during pregnancy is strongly associated with gestational hypertension and preeclampsia. The intermittent hypoxia and sympathetic activation from obstructive events contribute to endothelial dysfunction, oxidative stress, and systemic inflammation, all of which increase the risk of hypertensive disorders of pregnancy.',
        explanationWrong:
          'Placenta previa is related to uterine scarring and other anatomical factors, not OSA. Narcolepsy is a neurological disorder caused by hypocretin deficiency and is not triggered by pregnancy-related OSA. Upper airway changes during pregnancy (mucosal edema from estrogen and fluid retention) are typically reversible postpartum.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 2,
        questionText:
          'Which physiologic change during normal pregnancy most contributes to the increased prevalence of snoring and obstructive sleep apnea in the third trimester?',
        choices: {
          A: 'Estrogen-mediated mucosal edema of the upper airway',
          B: 'Decreased respiratory drive from elevated progesterone',
          C: 'Decreased cardiac output reducing pharyngeal perfusion',
          D: 'Loss of upper airway dilator muscle tone from fatigue',
        },
        correctChoice: 'A',
        explanationCorrect:
          'During pregnancy, elevated estrogen levels cause mucosal edema and hyperemia of the nasopharyngeal tissues, narrowing the upper airway. Combined with weight gain and fluid redistribution, this mucosal swelling is the primary contributor to increased snoring and OSA risk, particularly in the third trimester.',
        explanationWrong:
          'Progesterone actually increases respiratory drive during pregnancy, which provides some protective ventilatory effect. Cardiac output increases during pregnancy, not decreases. While upper airway dilator muscle tone is relevant to OSA pathophysiology, generalized fatigue does not selectively impair these muscles.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 3,
        questionText:
          'A pregnant patient with newly diagnosed moderate OSA is being started on CPAP therapy. Which of the following is the most appropriate approach to CPAP titration in this population?',
        choices: {
          A: 'Use auto-CPAP with periodic pressure reassessment as pregnancy progresses',
          B: 'Perform a single in-lab titration and use that pressure for the remainder of pregnancy',
          C: 'Start with an oral appliance and switch to CPAP only if symptoms persist postpartum',
          D: 'Use auto-CPAP set at a fixed pressure of 12 cmH2O throughout pregnancy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Auto-CPAP is preferred during pregnancy because pressure requirements may change as the pregnancy progresses due to ongoing weight gain, fluid shifts, and progressive upper airway edema. Regular follow-up and reassessment of pressure adequacy are important since the therapeutic pressure may need adjustment across trimesters.',
        explanationWrong:
          'A fixed pressure may not account for changing physiology throughout pregnancy. A single titration early in pregnancy may become inadequate as airway changes progress. Delaying effective treatment with an oral appliance when moderate OSA is diagnosed risks maternal and fetal complications from continued intermittent hypoxia.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 4,
        questionText:
          'A patient with untreated severe obstructive sleep apnea undergoes 24-hour ambulatory blood pressure monitoring. Which blood pressure pattern is most characteristically associated with severe OSA?',
        choices: {
          A: 'Isolated systolic hypertension during daytime hours only',
          B: 'Non-dipping nocturnal blood pressure pattern',
          C: 'Postural hypotension upon standing',
          D: 'Wide pulse pressure with normal mean arterial pressure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Severe OSA is strongly associated with a non-dipping blood pressure pattern, meaning that the normal 10-20% decline in blood pressure during sleep does not occur. The repetitive arousals and intermittent hypoxia cause sympathetic surges that sustain elevated blood pressure throughout the night. This non-dipping pattern is an independent cardiovascular risk factor.',
        explanationWrong:
          'Isolated daytime systolic hypertension is more typical of essential hypertension. Postural hypotension is related to autonomic dysfunction, not OSA. Wide pulse pressure with normal MAP is seen in aortic regurgitation or arterial stiffness, not typically in OSA.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 5,
        questionText:
          'A 58-year-old male with congestive heart failure (ejection fraction 30%) undergoes a PSG showing central sleep apnea with a Cheyne-Stokes breathing pattern. His central apnea index is 22 events/hour. Which of the following therapies has been shown to improve central apnea indices in this population without increasing mortality risk?',
        choices: {
          A: 'Acetazolamide 250 mg at bedtime',
          B: 'Adaptive servo-ventilation at standard settings',
          C: 'Optimization of guideline-directed heart failure medical therapy',
          D: 'Supplemental oxygen at 4 L/min via nasal cannula',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Optimization of guideline-directed medical therapy for heart failure is the first-line approach for central sleep apnea with Cheyne-Stokes respiration in heart failure patients. Improving cardiac output and reducing fluid overload decreases circulation time and stabilizes ventilatory control, often significantly reducing central apnea severity.',
        explanationWrong:
          'Acetazolamide has limited evidence in heart failure-associated CSA and can cause metabolic acidosis. The SERVE-HF trial demonstrated that ASV increased cardiovascular mortality in patients with heart failure (EF less than or equal to 45%) and predominantly central sleep apnea, making it contraindicated here. Supplemental oxygen may modestly reduce central events but does not address the underlying cardiac pathology.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 6,
        questionText:
          'Which of the following cardiac arrhythmias is most strongly associated with untreated severe obstructive sleep apnea?',
        choices: {
          A: 'Atrial fibrillation',
          B: 'First-degree atrioventricular block',
          C: 'Left bundle branch block',
          D: 'Premature ventricular contractions',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Atrial fibrillation has the strongest epidemiological association with untreated severe OSA. The mechanisms include intermittent hypoxia causing atrial remodeling, autonomic nervous system fluctuations, intrathoracic pressure swings leading to atrial stretch, and systemic inflammation. OSA is also associated with higher recurrence rates of atrial fibrillation after cardioversion or ablation.',
        explanationWrong:
          'While bradyarrhythmias (including AV block) can occur during apneic events, they are less clinically significant than the atrial fibrillation association. Left bundle branch block is a conduction abnormality not specifically linked to OSA. PVCs can occur but are not the most strongly associated arrhythmia.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 7,
        questionText:
          'A pregnant woman at 28 weeks gestation reports difficulty sleeping due to restless leg symptoms that worsen at night. Laboratory testing reveals a serum ferritin of 18 ng/mL. Which of the following is the most appropriate initial management?',
        choices: {
          A: 'Prescribe ropinirole 0.25 mg at bedtime',
          B: 'Prescribe gabapentin 300 mg at bedtime',
          C: 'Recommend behavioral sleep hygiene modifications only',
          D: 'Initiate oral iron supplementation with vitamin C',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Restless legs syndrome is common during pregnancy and is frequently associated with iron deficiency. With a ferritin level of 18 ng/mL (below the recommended threshold of 50-75 ng/mL for RLS treatment), oral iron supplementation with vitamin C to enhance absorption is the safest and most appropriate first-line treatment during pregnancy.',
        explanationWrong:
          'Dopamine agonists like ropinirole are not recommended during pregnancy due to potential teratogenic effects and lack of safety data. Gabapentin should be avoided in pregnancy due to potential fetal risks. Behavioral modifications alone would be insufficient given the identifiable and treatable iron deficiency contributing to symptoms.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 8,
        questionText:
          'A 62-year-old patient with a history of OSA treated with CPAP has a myocardial infarction. Following cardiac rehabilitation, the patient reports improved CPAP adherence. Which of the following best explains the relationship between CPAP therapy and cardiovascular outcomes in patients with established coronary artery disease?',
        choices: {
          A: 'CPAP directly reduces LDL cholesterol levels through improved hepatic metabolism',
          B: 'CPAP reduces sympathetic nervous system activation and oxidative stress associated with intermittent hypoxia',
          C: 'CPAP eliminates all cardiovascular risk by normalizing nocturnal oxygen saturation',
          D: 'CPAP therapy has no measurable effect on cardiovascular biomarkers',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CPAP therapy reduces the sympathetic nervous system hyperactivation and oxidative stress that result from the repetitive cycles of intermittent hypoxia and reoxygenation in OSA. These mechanisms contribute to endothelial dysfunction, systemic inflammation, and platelet activation, all of which accelerate atherosclerosis and increase cardiovascular event risk.',
        explanationWrong:
          'CPAP does not directly lower LDL cholesterol. While CPAP improves nocturnal oxygenation, it does not eliminate all cardiovascular risk, which is multifactorial. CPAP has been shown to affect multiple cardiovascular biomarkers including CRP, catecholamines, and markers of endothelial function.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 9,
        questionText:
          'A pregnant patient with mild OSA (AHI 8) prefers positional therapy over CPAP. Sleep position monitoring during PSG shows that 85% of respiratory events occur in the supine position. Which positional therapy approach is most appropriate during late pregnancy?',
        choices: {
          A: 'A vibrotactile positional device worn on the chest',
          B: 'A tennis ball sewn into the back of a sleep shirt',
          C: 'Left lateral decubitus positioning with a body pillow for support',
          D: 'Elevating the head of bed to 45 degrees while remaining supine',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Left lateral positioning is the preferred sleep position during late pregnancy for multiple reasons: it reduces supine-dependent obstructive events, optimizes uteroplacental blood flow by preventing aortocaval compression from the gravid uterus, and improves venous return. A body pillow provides comfort and helps maintain the lateral position throughout the night.',
        explanationWrong:
          'Vibrotactile devices are effective in non-pregnant adults but the additional benefit of left lateral positioning for uteroplacental perfusion makes a body pillow more appropriate during pregnancy. The tennis ball technique is uncomfortable and poorly tolerated, especially during pregnancy. Head elevation alone does not address the supine position issues related to pregnancy or adequately prevent obstructive events.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 10,
        questionText:
          'Which of the following pathophysiologic mechanisms best explains why obstructive sleep apnea increases the risk of stroke?',
        choices: {
          A: 'OSA promotes a prothrombotic state through platelet activation, endothelial dysfunction, and paradoxical embolism via a patent foramen ovale during apnea-related intrathoracic pressure changes',
          B: 'OSA causes direct compression of cerebral blood vessels due to neck positioning during sleep',
          C: 'OSA leads to chronic cerebrospinal fluid hypotension that weakens vessel walls',
          D: 'OSA increases stroke risk exclusively through the development of sustained daytime hypertension',
        },
        correctChoice: 'A',
        explanationCorrect:
          'OSA increases stroke risk through multiple mechanisms: intermittent hypoxia causes platelet activation and hypercoagulability, endothelial dysfunction promotes atherosclerosis of cerebral vessels, and the large negative intrathoracic pressures during obstructed breathing can promote paradoxical embolism through a patent foramen ovale. These combined mechanisms create a prothrombotic, proatherogenic milieu that significantly elevates stroke risk.',
        explanationWrong:
          'Direct vascular compression from neck positioning is not a recognized mechanism. CSF hypotension is not associated with OSA. While hypertension is an important mediator, OSA increases stroke risk through multiple independent pathways beyond hypertension alone, including direct effects on coagulation and endothelial function.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 11,
        questionText:
          'A 35-year-old woman at 20 weeks gestation is diagnosed with moderate OSA. She is initiated on auto-CPAP. At her follow-up visit, data download shows a median pressure of 9 cmH2O with a residual AHI of 2. However, average daily usage is only 2.5 hours. What is the most important counseling point to improve adherence?',
        choices: {
          A: 'Suggest switching to a mandibular advancement device for better comfort',
          B: 'Educate on the specific maternal and fetal risks of untreated OSA during pregnancy to motivate consistent use',
          C: 'Reassure her that 2.5 hours is adequate and no changes are needed',
          D: 'Recommend using CPAP only during the last trimester when symptoms are worst',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Patient education about the specific risks of untreated OSA during pregnancy, including gestational hypertension, preeclampsia, gestational diabetes, and fetal growth restriction, can be a powerful motivator for improving CPAP adherence. Understanding the direct impact on both maternal and fetal health often helps patients commit to longer nightly use.',
        explanationWrong:
          'While an oral appliance might improve comfort, it may not be as effective as CPAP for moderate OSA and has limited data in pregnancy. Usage of 2.5 hours is suboptimal, as most clinical benefits require at least 4 hours per night. Limiting CPAP to the third trimester delays treatment and exposes the patient and fetus to risks during a critical period of development.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 12,
        questionText:
          'A patient with severe OSA and resistant hypertension (blood pressure uncontrolled on three antihypertensive medications including a diuretic) is started on CPAP therapy. After 3 months of consistent CPAP use (average 6.2 hours/night), 24-hour ambulatory blood pressure monitoring is repeated. What magnitude of blood pressure reduction is most consistent with the published evidence for CPAP effect on resistant hypertension?',
        choices: {
          A: 'Systolic reduction of 30-40 mmHg',
          B: 'No significant change in blood pressure',
          C: 'Diastolic reduction of 20-25 mmHg',
          D: 'Mean blood pressure reduction of approximately 5-10 mmHg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Studies of CPAP therapy in patients with resistant hypertension and OSA have demonstrated modest but clinically meaningful blood pressure reductions, typically in the range of 5-10 mmHg for mean blood pressure. The HIPARCO trial and similar studies showed that CPAP was particularly effective in reducing nocturnal blood pressure and improving the dipping pattern, with reductions most pronounced in patients with good CPAP adherence.',
        explanationWrong:
          'Reductions of 30-40 mmHg systolic or 20-25 mmHg diastolic would be unusually large and are not consistent with published evidence for CPAP alone. While some studies have shown small or non-significant effects, the preponderance of evidence supports a modest beneficial effect, particularly in resistant hypertension with good CPAP adherence.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 13,
        questionText:
          'During a PSG on a pregnant woman in her third trimester, the technologist notices frequent episodes of oxygen desaturation to 88-90% even in the absence of scored respiratory events. What is the most likely explanation for these desaturations?',
        choices: {
          A: 'Equipment malfunction from the pulse oximeter probe',
          B: 'Unrecognized periodic limb movements causing arousals',
          C: 'Supine hypotensive syndrome from aortocaval compression by the gravid uterus',
          D: 'Nocturnal asthma exacerbation triggered by hormonal changes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Supine hypotensive syndrome occurs when the gravid uterus compresses the inferior vena cava and aorta in the supine position, reducing venous return and cardiac output. This can cause oxygen desaturation even without airway obstruction. It is particularly common in the third trimester and can mimic or accompany sleep-disordered breathing on PSG.',
        explanationWrong:
          'While equipment malfunction should always be considered, the pattern of desaturation in a third-trimester patient in the supine position suggests a physiologic cause. PLMs cause arousals but not typically isolated oxygen desaturation. Nocturnal asthma would more likely show wheezing and obstructive patterns on respiratory channels.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 14,
        questionText:
          'A 55-year-old male with severe OSA (AHI 65) undergoes successful CPAP titration at 14 cmH2O. He has a history of paroxysmal atrial fibrillation. Which of the following best describes the expected effect of consistent CPAP therapy on his atrial fibrillation?',
        choices: {
          A: 'CPAP therapy reduces the recurrence rate of atrial fibrillation and improves the success of rhythm control strategies',
          B: 'CPAP therapy converts atrial fibrillation to normal sinus rhythm within the first month of use',
          C: 'CPAP therapy has no effect on atrial fibrillation once it is established',
          D: 'CPAP therapy increases the risk of atrial flutter as a compensatory arrhythmia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Multiple studies have shown that CPAP therapy in patients with OSA and atrial fibrillation reduces the recurrence rate of AF after cardioversion and ablation procedures. By reducing intermittent hypoxia, intrathoracic pressure swings, and autonomic dysfunction, CPAP helps prevent atrial remodeling and reduces the substrate for AF maintenance.',
        explanationWrong:
          'CPAP does not directly convert AF to sinus rhythm. While the evidence clearly supports a beneficial effect, CPAP reduces recurrence rather than having no effect at all. There is no evidence that CPAP increases the risk of atrial flutter.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 15,
        questionText:
          'A woman who was successfully treated for OSA with CPAP during pregnancy delivers her baby. At her 8-week postpartum visit, she asks whether she still needs CPAP. Her pre-pregnancy BMI was 24 and she has returned to her pre-pregnancy weight. What is the most appropriate recommendation?',
        choices: {
          A: 'Continue CPAP at the same pressure indefinitely since OSA is a chronic condition',
          B: 'Discontinue CPAP immediately since pregnancy-related OSA always resolves',
          C: 'Switch to an oral appliance for long-term maintenance therapy',
          D: 'Perform a repeat sleep study to reassess for OSA given the resolution of pregnancy-related risk factors',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pregnancy-related OSA may resolve postpartum as the contributing factors (weight gain, fluid retention, mucosal edema, elevated estrogen) normalize. However, some women have underlying OSA that persists. A repeat sleep study is appropriate to objectively reassess, particularly since she has returned to her pre-pregnancy weight and may no longer require treatment.',
        explanationWrong:
          'Continuing CPAP without reassessment assumes OSA persists, which may not be the case. Abruptly discontinuing without objective assessment could be harmful if OSA is still present. Switching to an oral appliance without first confirming ongoing OSA is premature.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 16,
        questionText:
          'In patients with heart failure and central sleep apnea, which of the following hemodynamic parameters most directly influences the periodicity (cycle length) of Cheyne-Stokes respiration?',
        choices: {
          A: 'Pulmonary artery systolic pressure',
          B: 'Lung-to-ear circulation time',
          C: 'Left ventricular end-diastolic volume',
          D: 'Right atrial pressure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The cycle length of Cheyne-Stokes respiration is primarily determined by the circulation time, specifically the lung-to-chemoreceptor (lung-to-ear) circulation time. In heart failure, reduced cardiac output prolongs circulation time, causing a delay between changes in alveolar gas composition and chemoreceptor sensing. This delay creates the characteristic waxing-waning ventilatory pattern with longer cycle lengths corresponding to more prolonged circulation times.',
        explanationWrong:
          'While pulmonary artery pressure, LVEDV, and right atrial pressure may be elevated in heart failure, none of them directly determines the periodicity of the Cheyne-Stokes pattern. Circulation time is the key physiologic determinant of cycle length.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 17,
        questionText:
          'A 45-year-old woman with gestational diabetes at 34 weeks is referred for evaluation of excessive daytime sleepiness and witnessed apneas. Her BMI is 36. Which of the following findings on PSG would most strongly suggest that her sleep-disordered breathing is contributing to worsening glycemic control?',
        choices: {
          A: 'Sleep onset latency of 25 minutes',
          B: 'Periodic limb movement index of 8/hour',
          C: 'Sleep efficiency of 92%',
          D: 'Oxygen desaturation index of 35 events/hour with nadir SpO2 of 78%',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Severe intermittent hypoxia, reflected by a high oxygen desaturation index and low nadir SpO2, is the PSG finding most directly linked to metabolic dysregulation. Intermittent hypoxia increases sympathetic activity, cortisol secretion, and inflammatory cytokines, all of which promote insulin resistance and impair glucose tolerance. This creates a vicious cycle in patients with gestational diabetes.',
        explanationWrong:
          'A sleep onset latency of 25 minutes is within normal limits and does not suggest metabolic impact. A PLM index of 8 is below the clinical significance threshold of 15/hour. Sleep efficiency of 92% is normal and does not indicate pathology.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 18,
        questionText:
          'A patient with known heart failure and an ejection fraction of 25% is being evaluated for nocturnal dyspnea. PSG reveals an AHI of 42 with 80% of events being central apneas in a Cheyne-Stokes pattern. Based on current evidence, which of the following PAP therapies is contraindicated in this patient?',
        choices: {
          A: 'Supplemental nocturnal oxygen therapy',
          B: 'CPAP at a low fixed pressure',
          C: 'Bilevel PAP in spontaneous mode without a backup rate',
          D: 'Adaptive servo-ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The SERVE-HF trial demonstrated that adaptive servo-ventilation (ASV) increased all-cause and cardiovascular mortality in patients with heart failure and reduced ejection fraction (EF 45% or less) with predominantly central sleep apnea. Based on this landmark trial, ASV is contraindicated in this population despite its effectiveness at normalizing AHI.',
        explanationWrong:
          'CPAP at low pressures has been studied in heart failure with CSA and does not carry the same mortality risk. Bilevel PAP without a backup rate is not specifically contraindicated. Supplemental oxygen is an alternative therapy that has shown modest benefit without the mortality concerns associated with ASV.',
        topic: 'Sleep and cardiovascular disease',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 19,
        questionText:
          'A 30-year-old woman at 16 weeks gestation presents with new-onset excessive daytime sleepiness. She denies snoring or witnessed apneas. Her iron studies are normal. An overnight PSG is normal with an AHI of 1. What is the most likely explanation for her hypersomnia?',
        choices: {
          A: 'Undiagnosed narcolepsy type 2 unmasked by pregnancy',
          B: 'Normal physiologic hypersomnia of the first and second trimester due to elevated progesterone',
          C: 'Subclinical hypothyroidism requiring thyroid function testing',
          D: 'Malingering for disability accommodation at work',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Elevated progesterone during the first and second trimesters has a well-established somnogenic effect. Progesterone and its metabolite allopregnanolone enhance GABAergic inhibition, producing sedation and increased sleep propensity. This physiologic hypersomnia is common and typically improves in the third trimester as other sleep-disrupting factors emerge.',
        explanationWrong:
          'While narcolepsy should be considered in young patients with hypersomnia, the onset coinciding with pregnancy and a normal PSG make physiologic hypersomnia far more likely. Hypothyroidism should be evaluated but is not the most likely explanation given the timing. Malingering should never be assumed without evidence.',
        topic: 'Sleep in pregnancy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 20,
        questionText:
          'A 50-year-old patient with untreated severe OSA presents to the emergency department with acute ST-elevation myocardial infarction at 5:30 AM. Which characteristic of OSA most likely contributed to the timing of this acute coronary event?',
        choices: {
          A: 'Decreased platelet aggregation during early morning hours',
          B: 'Reduced cortisol levels at sleep-wake transition',
          C: 'Sympathetic surge and catecholamine release during the early morning arousal period combined with REM-predominant apneas in the final sleep cycles',
          D: 'Increased parasympathetic tone at the end of the sleep period',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The early morning hours are characterized by increased REM sleep, during which obstructive apneas are often most severe and prolonged. The resulting sympathetic surges and catecholamine release, combined with the normal morning rise in cortisol and catecholamines at the sleep-wake transition, create a period of heightened cardiovascular vulnerability. This explains the well-documented morning peak in acute coronary events in OSA patients.',
        explanationWrong:
          'Platelet aggregation actually increases in the early morning, not decreases. Cortisol levels rise in the early morning (cortisol awakening response), they do not decrease. Parasympathetic tone decreases, not increases, during the arousal period.',
        topic: 'Sleep and cardiovascular disease',
      },
    ],
  })

  // ─── EXAM 22 ───────────────────────────────────────────
  // Topics: Sleep and metabolic syndrome/diabetes, Advanced PSG troubleshooting
  // Correct answer distribution: A=5(Q3,Q7,Q12,Q16,Q20) B=5(Q1,Q5,Q9,Q14,Q18) C=5(Q4,Q8,Q11,Q15,Q19) D=5(Q2,Q6,Q10,Q13,Q17)
  const exam22 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 22',
      examIndex: 22,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam22.id,
        questionIndex: 1,
        questionText:
          'A patient with type 2 diabetes and an HbA1c of 9.2% is diagnosed with severe OSA (AHI 52). After 6 months of compliant CPAP therapy (average 6.5 hours/night), a repeat HbA1c is obtained. Based on published evidence, what is the most likely effect of CPAP therapy on glycemic control?',
        choices: {
          A: 'HbA1c will decrease by 2-3% due to direct insulin sensitization',
          B: 'CPAP may produce a modest improvement in insulin sensitivity, but the effect on HbA1c is typically small and inconsistent across studies',
          C: 'HbA1c will increase due to improved appetite from better sleep quality',
          D: 'CPAP has no physiologic mechanism to affect glucose metabolism',
        },
        correctChoice: 'B',
        explanationCorrect:
          'While CPAP therapy can improve insulin sensitivity by reducing intermittent hypoxia-induced sympathetic activation and inflammatory mediators, the effect on HbA1c has been modest and inconsistent across clinical trials. Some studies show small improvements while others show no significant change, suggesting that CPAP alone is insufficient to achieve major improvements in glycemic control without concurrent diabetes management.',
        explanationWrong:
          'A 2-3% HbA1c reduction from CPAP alone is not supported by evidence. Improved sleep quality does not typically worsen glycemic control through appetite changes. CPAP does have physiologic mechanisms to affect glucose metabolism through reduction of sympathetic activity, cortisol, and inflammatory cytokines.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 2,
        questionText:
          'During a PSG recording, the technologist notices a rhythmic 60 Hz artifact affecting the EEG channels. The artifact is present on all EEG derivations but not on the EMG or ECG channels. What is the most appropriate first troubleshooting step?',
        choices: {
          A: 'Replace all EEG electrodes with new electrodes',
          B: 'Apply a 60 Hz notch filter to the EEG channels to eliminate the artifact',
          C: 'Reboot the PSG amplifier system to clear a software glitch',
          D: 'Check and re-prep the reference electrodes (A1 and A2) to reduce impedance',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When 60 Hz artifact appears on all EEG channels but not on EMG or ECG, the common reference electrodes (A1, A2 or mastoid electrodes) are the most likely culprit, since all EEG channels share these references. High impedance at the reference electrode will cause 60 Hz interference to appear across all channels using that reference. Re-prepping the reference electrodes to reduce impedance below 5 kOhms should be the first step.',
        explanationWrong:
          'Replacing all EEG electrodes is excessive when the pattern points to a common reference issue. While a 60 Hz notch filter can remove the artifact visually, it may also filter out legitimate EEG activity near that frequency and should be a last resort rather than a first step. Rebooting the amplifier is unlikely to resolve an electrode impedance issue.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 3,
        questionText:
          'Which of the following mechanisms best explains how chronic short sleep duration (less than 6 hours per night) contributes to the development of metabolic syndrome?',
        choices: {
          A: 'Short sleep increases ghrelin and decreases leptin levels, promotes sympathetic activation, elevates evening cortisol, and impairs glucose tolerance',
          B: 'Short sleep causes direct pancreatic beta-cell destruction through oxidative stress',
          C: 'Short sleep decreases metabolic rate to a level that promotes weight gain independent of caloric intake',
          D: 'Short sleep eliminates circadian variation in insulin secretion without affecting appetite hormones',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Chronic sleep restriction has been shown to increase ghrelin (appetite-stimulating hormone) and decrease leptin (satiety hormone), promoting increased caloric intake. Additionally, short sleep activates the sympathetic nervous system, elevates evening cortisol levels, and directly impairs glucose tolerance by reducing insulin sensitivity. These combined effects increase the risk of obesity, insulin resistance, and metabolic syndrome.',
        explanationWrong:
          'Sleep deprivation does not cause direct beta-cell destruction. While metabolic rate changes may occur, the primary mechanism involves hormonal dysregulation of appetite and glucose metabolism. Short sleep affects both circadian insulin patterns and appetite hormones, not one exclusively.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 4,
        questionText:
          'A PSG technologist observes that the chin EMG signal has become flat with no activity, while the patient appears to be awake and talking. What is the most likely cause of this finding?',
        choices: {
          A: 'The patient is in REM sleep with normal atonia',
          B: 'The EMG amplifier gain is set too high, causing signal clipping',
          C: 'An electrode has become disconnected or there is an open circuit in the chin EMG montage',
          D: 'The patient has a neuromuscular disorder causing complete mentalis paralysis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A flat EMG signal in a patient who is clearly awake and talking is most consistent with a technical problem, specifically an electrode disconnection or open circuit. When an EMG electrode loses contact with the skin, the signal drops to a flat baseline. The technologist should check electrode connections, re-prep the electrode sites, and verify impedances.',
        explanationWrong:
          'The patient is described as awake and talking, ruling out REM atonia. High amplifier gain would cause large-amplitude signals or clipping, not a flat signal. While neuromuscular disorders can affect muscle activity, complete absence of signal during speech points to a technical rather than physiologic explanation.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 5,
        questionText:
          'A patient with metabolic syndrome (BMI 34, hypertension, dyslipidemia, and fasting glucose of 118 mg/dL) is diagnosed with moderate OSA. In addition to CPAP therapy, which lifestyle modification has the strongest evidence for simultaneously improving both OSA severity and metabolic syndrome components?',
        choices: {
          A: 'Eliminating caffeine consumption after noon',
          B: 'Weight loss of 10% or more of body weight through diet and exercise',
          C: 'Sleeping in a cool room (65-68 degrees Fahrenheit) to increase brown fat activation',
          D: 'Taking melatonin supplements to improve circadian alignment',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Weight loss of 10% or more has the strongest evidence for improving both OSA and metabolic syndrome. Studies have shown that a 10% weight reduction can decrease AHI by approximately 26-50%, while simultaneously improving blood pressure, lipid profiles, and insulin sensitivity. Bariatric surgery studies have demonstrated even more dramatic improvements in both conditions.',
        explanationWrong:
          'Caffeine restriction may improve sleep quality but does not directly address OSA or metabolic syndrome. Sleeping in a cool room has minimal evidence for clinically meaningful metabolic effects. Melatonin may have modest metabolic benefits but the evidence is far weaker than for weight loss.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 6,
        questionText:
          'During a PSG recording, the technologist notices that the nasal pressure transducer signal shows a consistent baseline drift upward over 30 minutes. The airflow signal is still present but is riding on a gradually increasing DC offset. What is the most likely cause?',
        choices: {
          A: 'The patient is developing Cheyne-Stokes breathing with gradual amplitude changes',
          B: 'The nasal cannula has become partially occluded with nasal secretions',
          C: 'The amplifier is experiencing thermal drift due to ambient temperature changes',
          D: 'Moisture accumulation in the nasal pressure tubing is creating a slow pressure offset',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Moisture from the patient exhaled air can accumulate in the nasal pressure transducer tubing over time, creating a slow DC pressure offset that manifests as baseline drift. This is a common technical issue during PSG recordings and can be resolved by briefly disconnecting the tubing to drain moisture, or by replacing the cannula if the issue persists.',
        explanationWrong:
          'Cheyne-Stokes breathing shows a characteristic waxing-waning pattern, not a unidirectional baseline drift. Partial cannula occlusion would typically cause amplitude reduction, not baseline drift. Amplifier thermal drift is rare in modern PSG systems which have temperature compensation circuitry.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 7,
        questionText:
          'Obstructive sleep apnea is considered an independent risk factor for the development of type 2 diabetes. Which of the following best describes the primary mechanism by which intermittent hypoxia from OSA promotes insulin resistance?',
        choices: {
          A: 'Intermittent hypoxia activates hypoxia-inducible factor 1-alpha (HIF-1a), which increases sympathetic activity and inflammatory cytokines (TNF-alpha, IL-6) that interfere with insulin receptor signaling',
          B: 'Intermittent hypoxia directly destroys pancreatic islet cells through apoptosis',
          C: 'Intermittent hypoxia increases renal glucose reabsorption, preventing glycosuria',
          D: 'Intermittent hypoxia reduces skeletal muscle glucose uptake by decreasing GLUT4 transporter expression exclusively',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Intermittent hypoxia from OSA activates HIF-1a, which triggers a cascade of events including increased sympathetic nervous system activity, elevation of inflammatory cytokines (TNF-alpha, IL-6, CRP), and oxidative stress. These mediators directly impair insulin receptor signaling through serine phosphorylation of insulin receptor substrate-1 (IRS-1), promoting peripheral insulin resistance.',
        explanationWrong:
          'Intermittent hypoxia does not directly destroy pancreatic beta cells. While renal glucose handling may be affected, this is not the primary mechanism. GLUT4 transporter effects may contribute but the mechanism involves multiple pathways beyond skeletal muscle glucose uptake alone.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 8,
        questionText:
          'A technologist is troubleshooting an EEG channel that shows intermittent high-amplitude spikes occurring irregularly every 5-15 seconds. The spikes appear on only one channel (C4-A1) and do not correlate with any respiratory events, movements, or ECG artifact. What is the most likely cause?',
        choices: {
          A: 'Epileptiform activity requiring urgent neurologist notification',
          B: 'Sweat artifact from the patient overheating under blankets',
          C: 'Electrode pop artifact from intermittent poor electrode contact at C4',
          D: 'Pacemaker artifact bleeding through to the EEG channel',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Electrode pop artifact presents as intermittent high-amplitude sharp transients on a single channel and is caused by intermittent loss of electrode contact with the scalp. The irregular timing (5-15 seconds) and single-channel involvement are classic features. This is typically caused by inadequate electrode adhesion, dried electrode paste, or hair interfering with electrode contact at the affected site (C4).',
        explanationWrong:
          'Epileptiform activity typically has a specific morphology (spike-and-wave pattern) and is often seen across multiple channels with a physiologic field. Sweat artifact typically causes slow baseline undulations, not sharp spikes. Pacemaker artifact would appear on ECG and would have a very regular rate.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 9,
        questionText:
          'A sleep medicine physician is evaluating a patient with metabolic syndrome. The patient has an AHI of 5 (below the typical OSA treatment threshold) but has significant sleep fragmentation with an arousal index of 28. Which of the following mechanisms best explains how sleep fragmentation independent of OSA can worsen metabolic health?',
        choices: {
          A: 'Sleep fragmentation increases melatonin secretion, which directly inhibits insulin release',
          B: 'Frequent arousals increase sympathetic tone and cortisol secretion, impairing next-day insulin sensitivity and promoting visceral fat accumulation',
          C: 'Sleep fragmentation reduces growth hormone secretion, causing muscle wasting and decreased basal metabolic rate',
          D: 'Arousals cause transient hyperventilation that produces respiratory alkalosis and gluconeogenesis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sleep fragmentation, independent of hypoxia, activates the hypothalamic-pituitary-adrenal axis and sympathetic nervous system, leading to elevated cortisol and catecholamine levels. These hormonal changes impair insulin sensitivity, promote visceral adiposity, and increase hepatic glucose output. Studies using experimental sleep fragmentation in healthy subjects have demonstrated decreased insulin sensitivity the following day.',
        explanationWrong:
          'Melatonin does not directly inhibit insulin release in a clinically significant manner. While growth hormone is affected by sleep disruption, the primary metabolic mechanism involves sympathetic activation and cortisol. Transient hyperventilation from arousals does not produce sustained respiratory alkalosis or significant gluconeogenesis.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 10,
        questionText:
          'During a PSG, the technologist checks impedances and finds that all EEG electrode impedances are below 5 kOhms except for the ground electrode, which reads 22 kOhms. What is the expected effect of this high ground impedance on the PSG recording?',
        choices: {
          A: 'No effect, as the ground electrode does not contribute to signal quality',
          B: 'Only the ECG channel will show increased artifact',
          C: 'The high-frequency EEG activity will be selectively attenuated',
          D: 'All channels will show increased 60 Hz artifact and reduced common-mode rejection',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The ground electrode (also called the bias or common electrode) is essential for the amplifier common-mode rejection ratio (CMRR). High ground impedance reduces the amplifier ability to reject common-mode signals such as 60 Hz electromagnetic interference. This results in increased 60 Hz artifact appearing across all channels in the recording.',
        explanationWrong:
          'The ground electrode is critical for signal quality across all channels. The effect is not limited to the ECG channel. High ground impedance affects common-mode rejection broadly rather than selectively attenuating high-frequency activity.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 11,
        questionText:
          'A patient with OSA is found to have metabolic syndrome. The clinician orders a fasting insulin level and glucose tolerance test in addition to standard labs. If this patient has OSA-associated insulin resistance, which of the following laboratory patterns is most expected?',
        choices: {
          A: 'Normal fasting glucose with elevated fasting insulin',
          B: 'Elevated fasting glucose with undetectable insulin',
          C: 'Elevated fasting insulin with impaired glucose tolerance on oral glucose tolerance test',
          D: 'Normal insulin and glucose with elevated HbA1c only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'OSA-associated insulin resistance characteristically presents with elevated fasting insulin (hyperinsulinemia as a compensatory response to peripheral insulin resistance) and impaired glucose tolerance on OGTT. The pancreas produces excess insulin to overcome tissue-level insulin resistance, maintaining near-normal fasting glucose initially, but glucose handling after a glucose load is impaired.',
        explanationWrong:
          'Normal fasting glucose with elevated insulin suggests early insulin resistance but does not capture the impaired glucose tolerance component. Elevated glucose with undetectable insulin suggests type 1 diabetes or late-stage type 2, not early insulin resistance. Normal insulin and glucose with elevated HbA1c is an inconsistent pattern.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 12,
        questionText:
          'A PSG technologist notices that the left EOG channel is showing a waveform that mirrors the ECG QRS complex. The right EOG channel is clean. What is the most likely cause and solution?',
        choices: {
          A: 'The left EOG electrode is picking up ECG artifact due to its placement near a superficial blood vessel; re-prep and reposition the electrode slightly',
          B: 'The right EOG electrode is malfunctioning and creating a differential artifact',
          C: 'The ECG channel is cross-talking with the EOG amplifier; change the ECG electrode placement',
          D: 'The patient has a cardiac pacemaker causing electromagnetic interference',
        },
        correctChoice: 'A',
        explanationCorrect:
          'ECG artifact on a single EOG channel is typically caused by that electrode being positioned near a superficial temporal or facial blood vessel, allowing the electrical signal of the QRS complex to be detected. Re-prepping the electrode site and repositioning it slightly (usually moving it a few millimeters away from the vessel) resolves the issue. This is a common troubleshooting scenario during PSG setup.',
        explanationWrong:
          'A malfunctioning right EOG electrode would affect the right EOG channel, not the left. Amplifier cross-talk is uncommon in modern PSG systems with adequate channel isolation. A pacemaker would produce artifact on multiple channels, not selectively on one EOG lead.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 13,
        questionText:
          'Shift work disorder is associated with increased risk of metabolic syndrome. Which of the following aspects of shift work has the most direct impact on metabolic disruption?',
        choices: {
          A: 'Exposure to bright ambient lighting in the workplace',
          B: 'Increased physical activity demands during night shifts',
          C: 'Social isolation from working non-traditional hours',
          D: 'Misalignment between the circadian clock and the timing of eating, sleeping, and light exposure',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Circadian misalignment is the primary driver of metabolic disruption in shift workers. When eating and sleeping occur at times misaligned with the internal circadian clock, glucose tolerance is impaired, insulin sensitivity decreases, and leptin levels are disrupted. Studies of simulated shift work show that circadian misalignment alone (independent of sleep loss) significantly impairs glucose metabolism.',
        explanationWrong:
          'While bright light exposure affects circadian rhythms, it is the overall misalignment, not light alone, that drives metabolic effects. Night shift work does not necessarily increase physical activity demands. Social isolation may affect mental health but is not the primary driver of metabolic syndrome.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 14,
        questionText:
          'During a split-night study, the technologist switches from diagnostic to CPAP titration at 2:00 AM. After applying the CPAP mask, the EEG shows persistent muscle artifact on F3 and F4 channels that was not present during the diagnostic portion. What is the most likely cause?',
        choices: {
          A: 'The CPAP motor is creating electromagnetic interference with the frontal electrodes',
          B: 'The CPAP mask headgear straps are compressing the frontalis muscle, causing tonic EMG artifact on the frontal EEG leads',
          C: 'The frontal electrodes have dried out over the course of the study',
          D: 'The patient is experiencing CPAP-induced arousal with frontal predominant alpha activity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CPAP mask headgear straps commonly pass over or near the frontalis muscle and frontal electrode positions. Tension from the straps can cause sustained contraction of the frontalis muscle, resulting in tonic EMG artifact on the frontal EEG channels (F3, F4). Adjusting the headgear straps to reduce pressure over the electrode sites typically resolves this issue.',
        explanationWrong:
          'Modern CPAP devices are well-shielded and do not typically cause electromagnetic interference. While electrode drying is possible, the temporal correlation with mask application points to the headgear as the cause. Alpha activity from arousal would have a different morphology than muscle artifact.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 15,
        questionText:
          'A clinician is treating a patient with both type 2 diabetes and moderate OSA. The patient is started on pioglitazone (a thiazolidinedione) for glycemic control. Which potential side effect of this medication is particularly relevant to the patient sleep-disordered breathing?',
        choices: {
          A: 'Pioglitazone causes dry mouth that worsens mouth leak on CPAP',
          B: 'Pioglitazone increases hepatic glucose output during sleep',
          C: 'Pioglitazone causes fluid retention and peripheral edema, which can worsen OSA through nocturnal rostral fluid shift',
          D: 'Pioglitazone suppresses respiratory drive through central nervous system depression',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Thiazolidinediones like pioglitazone are known to cause fluid retention and peripheral edema. In patients with OSA, this fluid accumulates in the legs during the day and shifts rostrally (toward the neck and upper airway) when the patient lies down at night. This nocturnal rostral fluid shift increases peripharyngeal tissue pressure and can worsen upper airway collapsibility, exacerbating OSA.',
        explanationWrong:
          'Dry mouth is not a common side effect of pioglitazone. Pioglitazone improves insulin sensitivity rather than increasing hepatic glucose output. Pioglitazone does not suppress respiratory drive.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 16,
        questionText:
          'A PSG recording shows large-amplitude, slow-frequency (0.5-1 Hz) undulating baseline shifts on all EEG channels simultaneously. The artifact waxes and wanes with a periodicity of about 10-20 seconds. The room temperature is noted to be 78 degrees Fahrenheit. What is the most likely cause of this artifact?',
        choices: {
          A: 'Sweat artifact caused by perspiration altering electrode-skin impedance across all electrode sites',
          B: 'Respiratory artifact from chest wall movement being transmitted through the electrode wires',
          C: 'Building vibration from HVAC equipment transmitting through the bed',
          D: 'Amplifier saturation from a power surge in the facility',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sweat artifact characteristically presents as slow (0.5-2 Hz), high-amplitude undulating baseline shifts that appear across multiple or all EEG channels. It is caused by perspiration changing the electrochemical properties of the electrode-skin interface, creating slow DC potential shifts. The warm room temperature (78 degrees F) is a common precipitating factor. Reducing room temperature and allowing the patient to cool down typically resolves the artifact.',
        explanationWrong:
          'Respiratory artifact would correlate with the respiratory rate (12-20 per minute), not 10-20 second periodicity. HVAC vibration would produce higher-frequency mechanical artifact. Amplifier saturation from power surges would produce square-wave clipping, not slow undulating shifts.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 17,
        questionText:
          'A patient with OSA and recently diagnosed type 2 diabetes asks about the relationship between sleep duration and diabetes risk. Based on epidemiological evidence, which of the following statements most accurately describes the relationship between habitual sleep duration and type 2 diabetes risk?',
        choices: {
          A: 'Only sleep durations less than 5 hours increase diabetes risk',
          B: 'Longer sleep duration always provides additional metabolic protection',
          C: 'Sleep duration has no independent association with diabetes risk after controlling for BMI',
          D: 'Both short sleep (less than 6 hours) and long sleep (more than 9 hours) are associated with increased diabetes risk in a U-shaped relationship',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Epidemiological data consistently demonstrate a U-shaped relationship between sleep duration and type 2 diabetes risk. Both short sleep (less than 6 hours) and long sleep (more than 9 hours) are independently associated with increased diabetes risk. Short sleep promotes insulin resistance through hormonal and sympathetic mechanisms, while long sleep may be a marker of underlying health conditions, inflammation, or depression that contribute to metabolic dysfunction.',
        explanationWrong:
          'Sleep durations of 5-6 hours also increase risk, not just below 5 hours. Longer sleep beyond 9 hours is associated with increased, not decreased, risk. Sleep duration maintains an independent association with diabetes risk even after controlling for BMI in most epidemiological studies.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 18,
        questionText:
          'During a PSG, the technologist notices that the pulse oximetry signal has become erratic with frequent signal dropouts and false low readings. The patient has cold hands but stable vital signs. What is the most appropriate intervention?',
        choices: {
          A: 'Switch to a forehead reflectance oximetry probe',
          B: 'Apply a warm blanket or glove to the monitored hand to improve peripheral perfusion and signal quality',
          C: 'Ignore the erratic readings and use the nasal pressure signal to infer oxygenation status',
          D: 'Increase the averaging time on the oximeter to smooth out the signal artifacts',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cold extremities cause peripheral vasoconstriction, which reduces pulsatile blood flow to the fingertip and degrades the pulse oximetry signal. Applying a warm blanket or glove to improve local perfusion is the simplest and most effective first intervention. This restores adequate pulsatile flow for reliable SpO2 measurement without requiring equipment changes.',
        explanationWrong:
          'While a forehead probe is a valid alternative, warming the hand is a simpler first step that often resolves the issue. Ignoring erratic oximetry readings is inappropriate as SpO2 data is critical for scoring respiratory events. Increasing averaging time delays the detection of desaturations and may cause clinically significant events to be missed.',
        topic: 'Advanced PSG troubleshooting',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 19,
        questionText:
          'A researcher is studying the effect of experimental sleep restriction (4 hours/night for 6 nights) on healthy subjects. After the sleep restriction protocol, which of the following hormonal changes is most consistently observed?',
        choices: {
          A: 'Decreased morning testosterone levels',
          B: 'Increased daytime growth hormone secretion',
          C: 'Increased evening cortisol levels with a blunted cortisol awakening response',
          D: 'Decreased TSH with elevated free T4',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep restriction consistently elevates evening cortisol levels and blunts the cortisol awakening response, reflecting dysregulation of the hypothalamic-pituitary-adrenal axis. Elevated evening cortisol promotes insulin resistance, visceral fat deposition, and impaired glucose tolerance. This HPA axis dysregulation is one of the key mediators between insufficient sleep and metabolic disease.',
        explanationWrong:
          'While testosterone may decrease with chronic sleep restriction, this finding is less consistent than cortisol changes. Growth hormone secretion decreases, not increases, with sleep restriction since GH release is closely linked to slow-wave sleep. Thyroid function changes are variable and not a primary consistent finding.',
        topic: 'Sleep and metabolic syndrome/diabetes',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 20,
        questionText:
          'A technologist is performing bio-calibrations at the start of a PSG. When the patient performs the eye movement calibrations, the EOG channels show appropriate deflections, but there is also a corresponding deflection on the Fp1 and Fp2 EEG channels. Is this finding normal, and what is the explanation?',
        choices: {
          A: 'This is normal and expected because the corneo-retinal potential that generates the EOG signal also produces a volume-conducted electrical field that is detected by the nearby frontal polar electrodes',
          B: 'This is abnormal and indicates cross-contamination between the EOG and EEG amplifier channels requiring recalibration',
          C: 'This is abnormal and indicates that the EOG electrodes are placed too close to the frontal EEG electrodes',
          D: 'This is normal because Fp1 and Fp2 are primarily monitoring eye movement activity, not brain activity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The corneo-retinal potential (the eye acts as a dipole with the cornea positive and retina negative) creates an electrical field that propagates beyond the immediate periorbital region. The frontal polar electrodes (Fp1, Fp2) are anatomically close to the eyes and normally detect some of this volume-conducted eye movement potential. This is a well-recognized and expected finding during bio-calibrations.',
        explanationWrong:
          'This is not amplifier cross-contamination; it is a physiologic volume conduction phenomenon. The finding is independent of EOG electrode placement distance. While Fp1 and Fp2 do pick up eye movement artifact, they primarily monitor frontal brain activity, and the eye movement deflection is a known artifact, not their primary signal.',
        topic: 'Advanced PSG troubleshooting',
      },
    ],
  })

  // ─── EXAM 23 ───────────────────────────────────────────
  // Topics: Pediatric PSG scoring differences, Sleep-related breathing disorders in heart failure
  // Correct answer distribution: A=5(Q1,Q7,Q11,Q15,Q19) B=5(Q3,Q5,Q13,Q17,Q20) C=5(Q2,Q6,Q10,Q14,Q18) D=5(Q4,Q8,Q9,Q12,Q16)
  const exam23 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 23',
      examIndex: 23,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam23.id,
        questionIndex: 1,
        questionText:
          'According to AASM scoring guidelines, what is the minimum duration required to score an obstructive apnea in a pediatric patient?',
        choices: {
          A: 'Two missed breaths (approximately the duration of two baseline respiratory cycles)',
          B: 'Ten seconds, the same as in adult scoring criteria',
          C: 'Five seconds regardless of respiratory rate',
          D: 'Fifteen seconds to account for the higher respiratory rate in children',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In pediatric PSG scoring, an obstructive apnea is defined as the cessation of airflow for a duration of at least two missed breaths (two respiratory cycles), rather than the fixed 10-second criterion used for adults. This accounts for the faster respiratory rate in children, where two respiratory cycles may be significantly shorter than 10 seconds.',
        explanationWrong:
          'The adult criterion of 10 seconds is not used for children because their faster respiratory rate means clinically significant apneas may be shorter than 10 seconds. A fixed 5-second criterion is not used. Fifteen seconds would be too long and would miss clinically significant events in the pediatric population.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 2,
        questionText:
          'A 4-year-old child undergoes a PSG. The scoring technologist notes EEG activity that consists of high-amplitude (75-200 microvolts), slow (0.5-2 Hz) delta waves occupying more than 20% of an epoch. In which sleep stage should this epoch be scored?',
        choices: {
          A: 'Stage N2 because of the high amplitude',
          B: 'Stage R because slow waves can occur during REM in children',
          C: 'Stage N3 because the epoch contains greater than 20% slow-wave activity',
          D: 'The epoch cannot be scored without additional information about spindle activity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Stage N3 in both pediatric and adult scoring is defined by the presence of slow-wave activity (0.5-2 Hz, amplitude greater than 75 microvolts measured frontally) in 20% or more of the epoch. In children, slow-wave activity is often of even higher amplitude than in adults, and N3 constitutes a larger proportion of total sleep time.',
        explanationWrong:
          'Stage N2 is characterized by K-complexes and sleep spindles, not by slow-wave dominance. Slow waves do not characterize REM sleep in children. While additional information about spindles can be helpful, the 20% slow-wave criterion alone is sufficient to score N3.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 3,
        questionText:
          'In pediatric PSG, the threshold for scoring an obstructive hypopnea differs from adult criteria. Which of the following correctly states the AASM pediatric hypopnea scoring criterion?',
        choices: {
          A: 'A 50% or greater reduction in airflow amplitude with a 4% desaturation',
          B: 'A 30% or greater reduction in airflow amplitude lasting at least two breaths, associated with either a 3% desaturation or an arousal',
          C: 'Any reduction in airflow amplitude associated with a 2% desaturation',
          D: 'A 50% or greater reduction lasting at least 10 seconds with a 3% desaturation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The AASM pediatric hypopnea rule requires a 30% or greater reduction in the nasal pressure signal amplitude lasting at least two respiratory cycles (two breaths), accompanied by either a 3% or greater oxygen desaturation or an arousal. This differs from the adult rule which uses a 10-second duration criterion.',
        explanationWrong:
          'A 50% reduction threshold with 4% desaturation reflects an older adult scoring criterion, not the current pediatric standard. A 2% desaturation threshold is too low and not used for pediatric scoring. The 10-second duration criterion applies to adults, not children.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 4,
        questionText:
          'A patient with systolic heart failure (EF 28%) and Cheyne-Stokes respiration undergoes PAP titration. The CPAP trial at 8 cmH2O reduces obstructive events but the central apnea index remains elevated at 18/hour. According to current guidelines, what is the next most appropriate step?',
        choices: {
          A: 'Increase CPAP to 14 cmH2O to further reduce central events',
          B: 'Switch to ASV since CPAP has failed to control central events',
          C: 'Add supplemental oxygen at 2 L/min to the CPAP circuit',
          D: 'Continue optimizing medical heart failure therapy and consider a trial of low-flow supplemental oxygen or CPAP, while avoiding ASV given the reduced ejection fraction',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a patient with heart failure and EF less than 45%, ASV is contraindicated based on the SERVE-HF trial results. The appropriate approach is to continue optimizing guideline-directed heart failure medical therapy (which often reduces CSA as cardiac function improves) and consider CPAP or supplemental oxygen as potential therapies for the residual central events.',
        explanationWrong:
          'Increasing CPAP may not effectively treat central apneas and could worsen patient comfort. ASV is specifically contraindicated in patients with HFrEF (EF 45% or less) and predominantly central sleep apnea due to increased mortality risk. Simply adding oxygen without continuing heart failure optimization is incomplete management.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 5,
        questionText:
          'In pediatric PSG scoring, which of the following is considered an abnormal apnea-hypopnea index (AHI) that supports a diagnosis of obstructive sleep apnea in a child?',
        choices: {
          A: 'AHI greater than 10 events/hour',
          B: 'AHI greater than 1 event/hour',
          C: 'AHI greater than 5 events/hour (the same threshold as in adults)',
          D: 'AHI greater than 15 events/hour',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In children, an AHI greater than 1 event/hour is considered abnormal and consistent with pediatric OSA. This much lower threshold compared to adults (where AHI greater than or equal to 5 is the diagnostic criterion) reflects the fact that any significant degree of obstructive breathing during sleep in children can have developmental, behavioral, and cardiovascular consequences.',
        explanationWrong:
          'The adult threshold of 5 or higher does not apply to children. Thresholds of 10 or 15 would miss the majority of clinically significant pediatric OSA cases. Children are more sensitive to the effects of sleep-disordered breathing at lower event frequencies.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 6,
        questionText:
          'A patient with heart failure and an implanted biventricular pacemaker/defibrillator undergoes a PSG. The ECG channel shows regular pacing spikes. How do the pacing artifacts affect respiratory event scoring on the PSG?',
        choices: {
          A: 'Pacing artifacts make respiratory event scoring unreliable and the study should be cancelled',
          B: 'Pacing artifacts only affect EEG scoring and have no impact on respiratory channel interpretation',
          C: 'Pacing artifacts may be seen on respiratory effort channels and should not be confused with respiratory effort; scoring should rely primarily on airflow signals and oximetry',
          D: 'Pacing artifacts improve respiratory scoring accuracy by providing precise timing markers',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pacemaker artifacts can appear on respiratory inductance plethysmography (RIP) belts and other effort channels due to electrical field conduction. Technologists and scorers must recognize these artifacts and rely primarily on airflow signals (nasal pressure, thermistor) and pulse oximetry for respiratory event identification and scoring, rather than effort channels that may be contaminated.',
        explanationWrong:
          'Pacing artifacts do not invalidate the entire study. The artifacts can affect respiratory effort channels, not just EEG. Pacing artifacts do not provide useful timing information for respiratory scoring.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 7,
        questionText:
          'When performing a PSG on a child under 2 years of age, which of the following montage modifications is recommended compared to the standard adult montage?',
        choices: {
          A: 'Use of additional EEG leads (including occipital channels O1, O2) because posterior dominant rhythm may be better appreciated, and end-tidal CO2 monitoring is recommended',
          B: 'Elimination of all EEG channels and use of only 2 EOG channels for sleep staging',
          C: 'Use of an 8-channel ambulatory recording device instead of full PSG',
          D: 'No modifications are needed; the standard adult montage is appropriate for all ages',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pediatric PSG in young children benefits from additional EEG channels, particularly occipital leads, as the posterior dominant rhythm develops and evolves during infancy and early childhood. End-tidal CO2 monitoring is also recommended for children as it provides continuous assessment of ventilation and is more sensitive than oximetry alone for detecting hypoventilation, which is particularly important in the pediatric population.',
        explanationWrong:
          'Eliminating EEG channels would preclude sleep staging. Ambulatory recording devices miss important data needed for comprehensive evaluation. The standard adult montage requires modifications for pediatric patients to account for developmental differences in EEG patterns and the need for CO2 monitoring.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 8,
        questionText:
          'A 72-year-old patient with heart failure with preserved ejection fraction (HFpEF, EF 60%) undergoes a PSG showing an AHI of 32 with predominantly central apneas in a Cheyne-Stokes pattern. Unlike the contraindication in HFrEF, what is the current evidence regarding ASV use in this patient?',
        choices: {
          A: 'ASV is equally contraindicated in both HFpEF and HFrEF',
          B: 'ASV has been proven to reduce mortality in HFpEF patients',
          C: 'ASV should only be used in HFpEF patients who also have concurrent OSA',
          D: 'ASV is not contraindicated in HFpEF, as the SERVE-HF findings of increased mortality applied specifically to patients with reduced EF (45% or less), though evidence of benefit remains limited',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The SERVE-HF trial that demonstrated increased cardiovascular mortality with ASV specifically enrolled patients with heart failure and reduced ejection fraction (EF 45% or less). Patients with HFpEF (EF greater than 45%) were not included in that trial, so the contraindication does not directly apply. However, evidence of clinical benefit in HFpEF is also limited, and treatment decisions should be individualized.',
        explanationWrong:
          'The SERVE-HF contraindication specifically applies to HFrEF, not HFpEF. There is no evidence that ASV reduces mortality in HFpEF. The indication is not limited to patients with concurrent OSA.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 9,
        questionText:
          'A 6-year-old child undergoes PSG for evaluation of snoring and witnessed apneas. The study shows an obstructive AHI of 8 events/hour with a nadir SpO2 of 82%. What severity classification does this represent in pediatric OSA?',
        choices: {
          A: 'Mild pediatric OSA',
          B: 'Borderline normal requiring follow-up only',
          C: 'Moderate pediatric OSA',
          D: 'Severe pediatric OSA',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In pediatric OSA classification, severe disease is generally defined as an AHI greater than 10 events/hour OR significant oxygen desaturation (nadir SpO2 less than 90%). Although this child AHI of 8 would classify as moderate by AHI alone (moderate is typically 5-10), the nadir SpO2 of 82% indicates severe oxygen desaturation, elevating the overall severity classification to severe pediatric OSA.',
        explanationWrong:
          'An AHI of 8 with nadir SpO2 of 82% is not mild or borderline in the pediatric population. While the AHI alone might suggest moderate severity, the significant desaturation below 90% indicates severe disease requiring prompt treatment, typically adenotonsillectomy.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 10,
        questionText:
          'A patient with decompensated heart failure (EF 20%) is admitted to the hospital. The cardiology team requests a sleep medicine consultation due to observed periodic breathing on telemetry. Which of the following features on telemetry monitoring most strongly suggests Cheyne-Stokes respiration rather than obstructive sleep apnea?',
        choices: {
          A: 'Desaturation events occurring at a frequency of 30 per hour',
          B: 'Heart rate variability with tachycardia during desaturation events',
          C: 'A crescendo-decrescendo pattern of respiratory effort with cycle lengths of 60-90 seconds and synchronous gradual oxygen desaturations',
          D: 'Abrupt desaturation events with rapid recovery to baseline',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cheyne-Stokes respiration is characterized by a crescendo-decrescendo pattern of respiratory effort (waxing and waning tidal volumes) with long cycle lengths typically ranging from 45-90 seconds in heart failure. The oxygen desaturations follow the same gradual pattern, with a smooth sinusoidal waveform on continuous oximetry. This contrasts with the abrupt desaturations and recoveries seen in obstructive events.',
        explanationWrong:
          'Event frequency alone does not distinguish central from obstructive events. Heart rate variability occurs with both types of events. Abrupt desaturation with rapid recovery is more characteristic of obstructive apneas, not Cheyne-Stokes breathing.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 11,
        questionText:
          'When scoring sleep stages in infants under 2 months of age, which of the following scoring classifications should be used instead of the standard adult N1, N2, N3, and REM stages?',
        choices: {
          A: 'Active sleep, quiet sleep, and indeterminate sleep',
          B: 'Light sleep and deep sleep only',
          C: 'Stage 1, Stage 2, Stage 3, Stage 4, and REM',
          D: 'Alpha sleep, delta sleep, and paradoxical sleep',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In neonates and infants under 2 months of age, sleep is scored as active sleep (corresponding roughly to REM), quiet sleep (corresponding to NREM), and indeterminate sleep (when the features do not clearly fit either category). The mature EEG patterns used to differentiate adult sleep stages (K-complexes, sleep spindles) have not yet developed at this age.',
        explanationWrong:
          'Light sleep and deep sleep are oversimplified categories not used in formal scoring. Stages 1-4 plus REM is the older Rechtschaffen and Kales system for adults, not applicable to neonates. Alpha, delta, and paradoxical sleep are informal terms not used in standardized scoring.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 12,
        questionText:
          'A heart failure patient on optimal medical therapy undergoes a PSG showing severe CSA-CSR (central apnea index 35/hour). The cardiologist asks about the prognostic significance of the CSA. What is the most accurate interpretation?',
        choices: {
          A: 'CSA-CSR has no prognostic significance independent of ejection fraction',
          B: 'CSA-CSR is protective because the periodic hyperventilation improves oxygenation',
          C: 'CSA-CSR is associated with better cardiac outcomes because it indicates preserved respiratory drive',
          D: 'CSA-CSR is an independent predictor of mortality in heart failure, reflecting the severity of underlying hemodynamic compromise',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Cheyne-Stokes respiration with central sleep apnea in heart failure is an independent predictor of poor prognosis, including increased mortality and cardiac transplant need. The severity of CSA-CSR correlates with the degree of hemodynamic compromise, elevated filling pressures, and neurohormonal activation, serving as a biomarker of heart failure severity.',
        explanationWrong:
          'CSA-CSR has prognostic significance independent of ejection fraction alone. The periodic breathing pattern does not improve oxygenation; the apneic phases cause intermittent hypoxia. CSA-CSR reflects unstable ventilatory control from hemodynamic dysfunction, not healthy respiratory drive preservation.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 13,
        questionText:
          'During pediatric PSG interpretation, a technologist notes that a 3-year-old child has frequent central apneas lasting 8-12 seconds during NREM sleep. The events are not associated with desaturation or arousals. How should these events be interpreted?',
        choices: {
          A: 'These are pathological central apneas requiring immediate treatment',
          B: 'Central pauses of this duration without associated desaturation or arousal are common and generally considered normal in young children during NREM sleep',
          C: 'These events should be scored as hypopneas instead of apneas',
          D: 'The child should be evaluated for a Chiari malformation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Brief central apneas (typically up to 20 seconds in duration) without associated oxygen desaturation or arousals are common and generally considered normal in young children, particularly during NREM sleep. Central respiratory control in children is still maturing, and these benign central pauses are distinguished from pathological central apneas by the absence of clinical consequences.',
        explanationWrong:
          'In the absence of desaturation or arousals, brief central pauses in young children are not pathological. These events meet criteria for central apneas, not hypopneas, based on complete cessation of airflow. While Chiari malformation can cause central apneas, the pattern described is consistent with normal developmental central pauses.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 14,
        questionText:
          'A patient with stable chronic heart failure (EF 35%) and CSA-CSR is being considered for a trial of nocturnal supplemental oxygen. What is the primary mechanism by which supplemental oxygen may reduce central sleep apnea in heart failure?',
        choices: {
          A: 'Oxygen increases upper airway muscle tone, preventing airway collapse',
          B: 'Oxygen directly stimulates the respiratory center in the medulla',
          C: 'Oxygen reduces chemoreceptor sensitivity and dampens the ventilatory overshoot that drives the oscillatory breathing pattern',
          D: 'Oxygen reduces pulmonary vascular resistance, which directly stabilizes the breathing pattern',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Supplemental oxygen reduces peripheral chemoreceptor sensitivity to PaO2 fluctuations, dampening the ventilatory overshoot (hyperventilation) that occurs during the hyperpnea phase of Cheyne-Stokes breathing. By reducing the magnitude of ventilatory overshoot, the resulting hypocapnia is less severe, and the threshold for the subsequent central apnea is less likely to be reached, stabilizing the oscillatory pattern.',
        explanationWrong:
          'Supplemental oxygen does not increase upper airway muscle tone. Oxygen actually reduces rather than stimulates respiratory drive through dampened chemoreceptor sensitivity. While oxygen may have some effects on pulmonary hemodynamics, the primary mechanism for reducing CSA is through chemoreceptor modulation.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 15,
        questionText:
          'A pediatric sleep technologist is scoring a PSG on a 5-year-old child. She observes epochs with rhythmic anterior theta activity at 6-7 Hz that is most prominent in the frontal leads during drowsiness. What does this activity most likely represent?',
        choices: {
          A: 'Rhythmic anterior theta of drowsiness, a normal developmental EEG variant seen during the transition from wake to sleep in children',
          B: 'Frontal lobe epileptiform activity requiring urgent referral',
          C: 'Artifact from repetitive eye movements',
          D: 'K-complex precursors indicating entry into Stage N2',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Rhythmic anterior theta of drowsiness (also called frontal arousal rhythm or rhythmic midtemporal theta of drowsiness variant in some nomenclatures) is a normal developmental EEG pattern seen in children during the transition from wakefulness to sleep. It presents as runs of rhythmic 5-7 Hz theta activity maximal in the frontal regions and should not be confused with epileptiform discharges.',
        explanationWrong:
          'This pattern is a normal variant, not epileptiform activity. While it occurs in frontal regions, its rhythmic nature and developmental context distinguish it from eye movement artifact. K-complexes have a distinct biphasic morphology and are not preceded by this type of rhythmic theta activity.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 16,
        questionText:
          'A patient with heart failure is titrated on CPAP for coexisting moderate OSA and mild CSA. During the titration, increasing CPAP from 8 to 12 cmH2O eliminates obstructive events but the central apnea index increases from 5 to 15/hour. What is the most likely explanation?',
        choices: {
          A: 'The higher CPAP pressure is causing mask leak that mimics central apneas',
          B: 'The patient has developed positional central apneas from being forced into the supine position by the CPAP mask',
          C: 'The CPAP device is malfunctioning and delivering intermittent pressure drops',
          D: 'The increased CPAP pressure raises intrathoracic pressure, reduces venous return, decreases cardiac output, and destabilizes ventilatory control, worsening CSA',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In heart failure patients, excessive CPAP pressure can increase intrathoracic pressure, impede venous return, and further reduce the already compromised cardiac output. This hemodynamic deterioration prolongs circulation time and destabilizes the ventilatory control loop, worsening central sleep apnea. This is why careful titration with attention to both obstructive and central events is essential in heart failure patients.',
        explanationWrong:
          'While mask leak can produce artifacts, the systematic increase in central events with increasing pressure suggests a hemodynamic mechanism. Positional changes from the mask are unlikely to cause this pattern. CPAP device malfunction would not typically produce a pressure-dependent increase in central events.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 17,
        questionText:
          'In pediatric PSG, end-tidal CO2 monitoring is considered an essential parameter. What value of end-tidal CO2 (EtCO2) is generally considered the threshold for scoring pediatric obstructive hypoventilation?',
        choices: {
          A: 'EtCO2 greater than 40 mmHg for any duration during sleep',
          B: 'EtCO2 greater than 50 mmHg for more than 25% of total sleep time',
          C: 'EtCO2 greater than 60 mmHg at any point during the study',
          D: 'EtCO2 greater than 55 mmHg for more than 50% of total sleep time',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pediatric obstructive hypoventilation is generally defined as EtCO2 greater than 50 mmHg for more than 25% of total sleep time. This criterion captures the prolonged partial upper airway obstruction with inadequate ventilation that is common in children with adenotonsillar hypertrophy, even when discrete apnea and hypopnea events may not be frequent enough to generate a high AHI.',
        explanationWrong:
          'EtCO2 above 40 mmHg is a normal range and would not be diagnostic. A threshold of 60 mmHg at any point is too high. Requiring 50% of TST at above 55 mmHg is too stringent and would miss most cases of clinically significant hypoventilation.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 18,
        questionText:
          'A patient with newly diagnosed heart failure (EF 32%) presents with an AHI of 40 with a mix of obstructive (60%) and central (40%) events. After initiation of optimal heart failure medications including sacubitril/valsartan, which type of sleep-disordered breathing event is most likely to improve with medical optimization alone?',
        choices: {
          A: 'Obstructive apneas will resolve as cardiac medications reduce upper airway edema',
          B: 'Both obstructive and central events will increase due to medication side effects',
          C: 'Central apneas are most likely to decrease as cardiac output improves and filling pressures normalize',
          D: 'Neither type will change because sleep apnea is independent of cardiac function',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Central sleep apnea in heart failure is driven by hemodynamic dysfunction, specifically reduced cardiac output and elevated filling pressures that prolong circulation time and destabilize ventilatory control. Optimization of heart failure therapy with medications like sacubitril/valsartan improves cardiac output and reduces filling pressures, which can significantly reduce or eliminate central events. Obstructive events, driven primarily by upper airway anatomy, are less responsive to cardiac medications.',
        explanationWrong:
          'While some reduction in rostral fluid shift may improve obstructive events modestly, the primary benefit of cardiac optimization is on central events. Heart failure medications do not typically worsen sleep apnea. Sleep-disordered breathing in heart failure, particularly central events, is directly related to cardiac function.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 19,
        questionText:
          'A 10-year-old child with Down syndrome undergoes a PSG. Compared to a typically developing child of the same age, which of the following PSG findings is most commonly seen in children with Down syndrome?',
        choices: {
          A: 'Higher prevalence of OSA due to midface hypoplasia, glossoptosis, tonsillar hypertrophy, and reduced muscle tone',
          B: 'Increased percentage of REM sleep compared to age-matched controls',
          C: 'Lower arousal index due to decreased cortical responsiveness',
          D: 'Normal AHI values identical to typically developing children',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Children with Down syndrome have a very high prevalence of OSA (estimated 50-80%) due to multiple predisposing anatomical and physiologic factors: midface hypoplasia, relative macroglossia (glossoptosis), adenotonsillar hypertrophy, and generalized hypotonia affecting upper airway dilator muscles. PSG is recommended for all children with Down syndrome by age 4 years.',
        explanationWrong:
          'REM sleep percentage is not typically increased in Down syndrome. Children with Down syndrome may actually have increased arousability in some studies. OSA is significantly more common in Down syndrome compared to typically developing children.',
        topic: 'Pediatric PSG scoring differences',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 20,
        questionText:
          'A heart failure patient with CSA-CSR undergoes cardiac resynchronization therapy (CRT) with biventricular pacing. A follow-up PSG is obtained 6 months after CRT implantation and shows improvement in the ejection fraction from 22% to 38%. What effect on the CSA-CSR is most expected?',
        choices: {
          A: 'No change in CSA-CSR because respiratory pattern generators are not affected by cardiac function',
          B: 'Significant reduction in central apnea index and CSR cycle length due to improved cardiac output and reduced circulation time',
          C: 'Worsening of CSA-CSR due to the pacemaker causing respiratory dysynchrony',
          D: 'Conversion of central apneas to obstructive apneas',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cardiac resynchronization therapy that successfully improves ejection fraction and cardiac output leads to reduction in central sleep apnea severity. Improved cardiac output reduces circulation time (the primary determinant of CSR cycle length), lowers filling pressures, and stabilizes the ventilatory control loop. Studies have demonstrated significant reductions in central apnea index and shortened CSR cycle length after successful CRT.',
        explanationWrong:
          'CSA-CSR is directly linked to cardiac function, so improvement in EF does affect respiratory patterns. CRT improving cardiac function would not worsen CSA. There is no mechanism by which CRT would convert central apneas to obstructive events.',
        topic: 'Sleep-related breathing disorders in heart failure',
      },
    ],
  })

  // ─── EXAM 24 ───────────────────────────────────────────
  // Topics: APAP algorithms and data interpretation, Dental sleep medicine collaboration
  // Correct answer distribution: A=5(Q2,Q8,Q12,Q15,Q19) B=5(Q4,Q6,Q10,Q17,Q20) C=5(Q1,Q5,Q9,Q13,Q16) D=5(Q3,Q7,Q11,Q14,Q18)
  const exam24 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 24',
      examIndex: 24,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam24.id,
        questionIndex: 1,
        questionText:
          'An auto-titrating CPAP (APAP) device uses flow-based algorithms to detect and respond to respiratory events. Which of the following signals is the primary input used by most APAP algorithms to detect airflow limitation?',
        choices: {
          A: 'Pulse oximetry waveform analysis',
          B: 'Snoring microphone amplitude',
          C: 'Inspiratory flow contour analysis (flattening of the inspiratory flow-time curve)',
          D: 'Thoracic and abdominal respiratory inductance plethysmography signals',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Most APAP devices primarily use analysis of the inspiratory flow contour (shape of the flow-time curve) generated by the internal flow sensor to detect airflow limitation. A normal inspiratory flow curve is rounded, while a flattened or plateau-shaped curve indicates partial upper airway obstruction (flow limitation). The device increases pressure in response to flow limitation before frank apneas or hypopneas occur.',
        explanationWrong:
          'APAP devices do not use pulse oximetry data as an input signal. While some devices use snoring as a secondary signal, it is not the primary algorithm input. RIP belts are not connected to APAP devices; they use only the internal pneumotachograph or flow sensor.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 2,
        questionText:
          'A patient is using an APAP device set with a pressure range of 5-15 cmH2O. The 90th percentile pressure on the data download is 12.5 cmH2O. What does the 90th percentile pressure indicate?',
        choices: {
          A: 'The device spent 90% of the usage time at or below 12.5 cmH2O, meaning the patient needed pressures above this level for only 10% of the night',
          B: 'The maximum pressure delivered during the night was 12.5 cmH2O',
          C: 'The average pressure throughout the entire night was 12.5 cmH2O',
          D: 'The pressure at which 90% of respiratory events were eliminated',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The 90th percentile pressure (also called P90 or the 90% pressure) means that the device was at or below this pressure for 90% of the recording time. It is commonly used as a reference point for converting from APAP to fixed CPAP, as it represents the pressure adequate for the vast majority of the night, with only brief excursions to higher pressures.',
        explanationWrong:
          'The 90th percentile is not the maximum pressure, which could be higher. It is not the average pressure, which would typically be lower than P90. It is a time-based metric, not an event-based metric.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 3,
        questionText:
          'A dentist trained in dental sleep medicine is fabricating a mandibular advancement device (MAD) for a patient with moderate OSA who cannot tolerate CPAP. According to AASM guidelines, which of the following is a prerequisite before initiating oral appliance therapy?',
        choices: {
          A: 'The patient must first fail a trial of positional therapy',
          B: 'The patient must undergo a lateral cephalometric radiograph to assess craniofacial anatomy',
          C: 'A tongue-retaining device must be tried before a mandibular advancement device',
          D: 'A sleep physician must provide the diagnosis and a prescription or referral for oral appliance therapy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'AASM guidelines require that oral appliance therapy for OSA be prescribed by a sleep medicine physician based on a formal sleep apnea diagnosis (from PSG or home sleep apnea test). The dentist works collaboratively with the sleep physician but should not independently diagnose or treat OSA. Follow-up sleep testing is also required to verify treatment efficacy.',
        explanationWrong:
          'Failure of positional therapy is not required before oral appliance therapy. While cephalometric radiographs may be useful, they are not required by AASM guidelines. There is no requirement to try a tongue-retaining device first.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 4,
        questionText:
          'An APAP data download shows that the device is cycling between the minimum pressure (5 cmH2O) and the maximum pressure (20 cmH2O) repeatedly throughout the night, with the pressure graph showing a sawtooth pattern. The residual AHI is 12. What is the most likely explanation for this pattern?',
        choices: {
          A: 'Normal APAP algorithm behavior in a patient with severe positional OSA',
          B: 'Large mask leak causing the algorithm to inappropriately increase pressure, followed by pressure reduction when the leak resolves or the patient shifts position',
          C: 'The patient has predominantly central apneas that the APAP algorithm misinterprets as obstructive events',
          D: 'The APAP pressure range is set too wide and should be narrowed',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A sawtooth pressure pattern with wide swings between minimum and maximum pressures, combined with a high residual AHI, is most commonly caused by significant mask leak. When the mask leaks, the flow sensor detects abnormal flow patterns that the algorithm may interpret as airflow limitation or apnea, causing inappropriate pressure increases. Higher pressure then worsens the leak, creating a feedback loop.',
        explanationWrong:
          'Normal APAP behavior would show gradual pressure adjustments, not extreme oscillations. Central apneas would not typically cause this extreme pressure cycling pattern. Narrowing the pressure range would not address the underlying leak problem.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 5,
        questionText:
          'A patient with mild OSA (AHI 12) is being considered for a mandibular advancement device. During the dental evaluation, the dentist notes that the patient has only 6 remaining teeth in the upper arch and a full lower dentition. What is the most appropriate recommendation regarding oral appliance therapy?',
        choices: {
          A: 'Proceed with a standard mandibular advancement device anchored to the remaining upper teeth',
          B: 'Recommend dental implants to provide adequate anchorage before fitting the appliance',
          C: 'The insufficient upper dentition makes a standard mandibular advancement device unsuitable; consider alternative treatments such as CPAP or a tongue-retaining device',
          D: 'Use a boil-and-bite over-the-counter mandibular device that requires fewer anchor teeth',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Adequate dentition is essential for mandibular advancement device retention and function. Most custom MADs require a minimum of 8-10 teeth per arch for proper anchorage. With only 6 upper teeth, the device cannot be adequately retained and could cause dental damage. Alternative treatments including CPAP or potentially a tongue-retaining device (which does not depend on dentition) should be considered.',
        explanationWrong:
          'Anchoring a MAD to inadequate dentition risks tooth damage, device failure, and poor treatment outcomes. Dental implants solely for an oral appliance would be an excessive intervention. Over-the-counter boil-and-bite devices are not recommended for OSA treatment as they lack proper adjustability and efficacy.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 6,
        questionText:
          'A clinician is reviewing an APAP data download and notices that the device reports a residual AHI of 3 events/hour. However, the patient continues to report excessive daytime sleepiness. What is the most important consideration when interpreting the device-reported AHI?',
        choices: {
          A: 'The device AHI is always identical to a PSG-scored AHI and the sleepiness must be from another cause',
          B: 'Device-reported AHI may underestimate the true AHI because the device cannot detect respiratory effort-related arousals (RERAs) or events associated with arousals but without desaturation',
          C: 'The device AHI overestimates the true event rate so the patient likely has no residual events',
          D: 'Device AHI only measures central apneas, not obstructive events',
        },
        correctChoice: 'B',
        explanationCorrect:
          'APAP device algorithms use flow-based detection and cannot detect respiratory effort-related arousals (RERAs) or EEG arousals. Events that cause cortical arousal without sufficient flow reduction or desaturation may not be counted by the device. Additionally, the device cannot distinguish sleep from wake time, so the denominator may include wakefulness, potentially underestimating the true sleep-time AHI.',
        explanationWrong:
          'Device AHI is not identical to PSG-scored AHI due to different detection methods. While some studies show device AHI may slightly overestimate in some situations, underestimation of clinically significant events (especially RERAs) is the more clinically important limitation. Device algorithms detect both obstructive and, in some devices, central events.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 7,
        questionText:
          'After 6 months of mandibular advancement device therapy, a follow-up sleep study shows that the patient AHI has decreased from 22 to 14 events/hour. The patient reports symptomatic improvement and prefers the oral appliance over CPAP. What is the most appropriate next step?',
        choices: {
          A: 'Accept the current outcome since the patient is symptomatically improved',
          B: 'Discontinue the oral appliance since it failed to normalize the AHI',
          C: 'Add positional therapy to the current oral appliance regimen',
          D: 'Advance the mandibular position further on the appliance and repeat a follow-up sleep study to assess for additional improvement',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When an oral appliance reduces but does not normalize the AHI, the mandible can often be advanced further to improve efficacy. Most mandibular advancement devices allow incremental advancement (typically 0.5-1 mm at a time). After additional advancement, a follow-up sleep study should be performed to assess whether the AHI has been further reduced to an acceptable level.',
        explanationWrong:
          'Accepting a residual AHI of 14 without attempting further optimization leaves the patient with ongoing moderate OSA. Discontinuing a partially effective therapy that the patient prefers is premature. Positional therapy may help but should be considered after optimizing the primary therapy through further mandibular advancement.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 8,
        questionText:
          'An APAP device has a "forced oscillation technique" (FOT) feature for upper airway impedance measurement. How does FOT work to guide pressure adjustments?',
        choices: {
          A: 'The device superimposes small-amplitude pressure oscillations on the airflow and analyzes the reflected signal to assess upper airway impedance and detect airway narrowing before flow limitation occurs',
          B: 'The device measures the oscillation frequency of snoring sounds to determine the site of obstruction',
          C: 'The device monitors chest wall oscillations via an internal accelerometer',
          D: 'The device uses forced inspiration maneuvers to test airway patency between breaths',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The forced oscillation technique (FOT) used in some APAP devices works by superimposing small, rapid pressure oscillations (typically 1-2 cmH2O at frequencies around 4-8 Hz) on the baseline airway pressure. By analyzing the reflected oscillatory signal, the device can measure upper airway impedance (resistance) in real-time. Increasing impedance indicates airway narrowing, allowing the device to proactively increase pressure before frank obstruction occurs.',
        explanationWrong:
          'FOT analyzes reflected pressure oscillations, not snoring sounds. The technique uses the device internal pneumatic system, not an accelerometer. FOT operates continuously during normal breathing, not through forced maneuvers between breaths.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 9,
        questionText:
          'A patient using a mandibular advancement device for OSA reports progressive anterior tooth pain and notices that their bite feels different after 18 months of use. A dental examination reveals 2 mm of mandibular incisor proclination. What is the most likely complication, and who should manage it?',
        choices: {
          A: 'TMJ disc displacement requiring referral to an oral surgeon',
          B: 'Dental caries under the appliance requiring restorative dentistry',
          C: 'Orthodontic side effects (dental movement/bite changes) from chronic mandibular advancement, requiring management by the dental sleep medicine provider with possible myofunctional exercises and morning repositioning device',
          D: 'Normal adaptation that requires no intervention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Orthodontic side effects, including mandibular incisor proclination (tipping forward), retroclination of maxillary incisors, decreased overjet and overbite, and posterior open bite, are well-documented complications of long-term mandibular advancement device use. These changes result from the chronic forward force on the mandibular teeth. Management includes morning jaw repositioning exercises, use of a morning repositioner device (AM aligner), and ongoing dental monitoring by the dental sleep medicine provider.',
        explanationWrong:
          'While TMJ issues can occur with MADs, the described presentation (tooth movement, bite changes) is consistent with orthodontic side effects rather than disc displacement. Dental caries would present differently. These changes are not normal adaptation and require active monitoring and management.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 10,
        questionText:
          'A patient with obesity hypoventilation syndrome is placed on APAP with a pressure range of 8-20 cmH2O. After one week, the data download shows that the device is spending most of the night at the maximum pressure of 20 cmH2O with a residual AHI of 8. What does this pressure pattern suggest, and what is the most appropriate action?',
        choices: {
          A: 'The APAP is working effectively and no changes are needed',
          B: 'The maximum pressure is insufficient and the patient should be switched to bilevel PAP for more effective treatment of both obstruction and hypoventilation',
          C: 'The pressure range should be narrowed to 15-20 cmH2O for comfort',
          D: 'The device should be changed to a different APAP brand with a better algorithm',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When an APAP device spends most of the night at its maximum pressure ceiling with a persistently elevated residual AHI, the device is unable to adequately treat the patient. In a patient with OHS, bilevel PAP is more appropriate because it provides both a higher inspiratory pressure for obstruction and a pressure differential (IPAP-EPAP) that augments tidal volume to address the hypoventilation component, which APAP cannot treat.',
        explanationWrong:
          'A residual AHI of 8 at the maximum pressure ceiling indicates the APAP is not working effectively. Simply narrowing the range does not address the underlying inadequacy of CPAP-mode treatment for OHS. Switching APAP brands would not address the fundamental limitation of CPAP for hypoventilation.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 11,
        questionText:
          'A dentist refers a patient to the sleep physician after a dental screening questionnaire and clinical examination suggest high OSA risk. Which of the following screening findings identified during a routine dental examination is most specific for OSA risk?',
        choices: {
          A: 'Presence of dental caries on multiple molars',
          B: 'Gingival inflammation and bleeding on probing',
          C: 'Generalized enamel erosion on all tooth surfaces',
          D: 'Mallampati class IV with a retrognathic mandible, large tongue with scalloped lateral borders, and elongated soft palate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The combination of Mallampati class IV (soft palate not visible), retrognathic mandible (recessed jaw), macroglossia with scalloping (tongue indentations from pressing against teeth), and elongated soft palate are highly specific clinical findings that suggest upper airway crowding and increased OSA risk. Dentists are uniquely positioned to identify these intraoral findings during routine examinations.',
        explanationWrong:
          'Dental caries, while common, are not specific to OSA risk. Gingival inflammation is related to periodontal disease, not OSA. While bruxism-related enamel erosion can be associated with OSA, generalized erosion is more suggestive of acid reflux or dietary factors.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 12,
        questionText:
          'An APAP device data download shows "large leak" for 45% of the recording time, a median pressure of 14 cmH2O, and a residual AHI of 2. Despite the low AHI, the patient reports dry mouth and unrefreshing sleep. What is the most appropriate intervention?',
        choices: {
          A: 'Address the mask leak by refitting the mask interface, adjusting headgear tension, or trying a different mask style, and consider adding heated humidification',
          B: 'Increase the maximum APAP pressure since the device is not treating events at the current pressure',
          C: 'Switch from APAP to fixed CPAP at the median pressure',
          D: 'Prescribe a sedative hypnotic to improve sleep quality',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Large mask leak for 45% of the night is the primary issue causing dry mouth and poor sleep quality. Even though the residual AHI appears low, significant leak can cause mouth dryness, air swallowing, noise, and arousals that fragment sleep. The first step is to address the leak through mask refitting, trying alternative mask styles (chin strap for mouth leak, full-face mask, or different nasal mask), and adding heated humidification to reduce mucosal dryness.',
        explanationWrong:
          'The residual AHI is already low at 2, so increasing pressure would not help and could worsen the leak. Switching to fixed CPAP does not address the leak issue. A sedative hypnotic would not address the underlying cause of the poor sleep quality.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 13,
        questionText:
          'A patient who has been using a mandibular advancement device for 2 years reports new temporomandibular joint (TMJ) pain and clicking. Which of the following assessments is most important in evaluating this complication?',
        choices: {
          A: 'Repeat the home sleep apnea test to check treatment efficacy',
          B: 'Obtain a full dental series of radiographs to evaluate tooth root integrity',
          C: 'Perform a clinical TMJ examination including range of motion, joint palpation, and assessment of disc displacement, and consider temporary discontinuation of the device',
          D: 'Immediately discontinue the oral appliance and switch to CPAP permanently',
        },
        correctChoice: 'C',
        explanationCorrect:
          'New TMJ symptoms in a mandibular advancement device user require a comprehensive clinical TMJ examination including assessment of range of motion, joint and muscle palpation, evaluation for disc displacement (clicking suggests disc subluxation), and potentially imaging. Temporary discontinuation or reduction of the advancement may be needed to allow the TMJ to recover, with careful monitoring and potential device modification.',
        explanationWrong:
          'While treatment efficacy is important, the acute TMJ complaint takes priority. Dental radiographs evaluate teeth, not the TMJ specifically. Immediately and permanently discontinuing the oral appliance is premature; many TMJ symptoms respond to conservative management and device modification.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 14,
        questionText:
          'A patient with positional OSA (supine AHI 35, lateral AHI 4) is placed on APAP with a range of 5-15 cmH2O. The data download shows that the 90th percentile pressure is 13 cmH2O, but the median pressure is only 6 cmH2O, with large pressure variability throughout the night. What does this pressure distribution pattern most likely reflect?',
        choices: {
          A: 'Mask leak causing erratic pressure responses',
          B: 'A poorly functioning APAP algorithm that cannot detect events',
          C: 'Periodic limb movements causing pressure fluctuations',
          D: 'The APAP algorithm appropriately responding to position-dependent changes in airway collapsibility, delivering higher pressures in the supine position and lower pressures in the lateral position',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a patient with significant positional OSA, the APAP device appropriately adjusts pressures based on real-time airway collapsibility. Higher pressures are delivered when the patient is supine (more obstruction) and lower pressures when lateral (less obstruction). The large difference between median (6 cmH2O) and 90th percentile (13 cmH2O) pressures reflects this normal position-dependent variation in therapeutic pressure requirements.',
        explanationWrong:
          'The pattern described is consistent with appropriate algorithm function, not leak or algorithm failure. PLMs do not cause significant changes in airway pressure requirements. The wide pressure distribution is expected and appropriate in positional OSA.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 15,
        questionText:
          'A sleep physician and a dental sleep medicine provider are developing a collaborative care protocol for OSA patients treated with oral appliances. Which of the following follow-up steps is considered essential by AASM clinical practice guidelines?',
        choices: {
          A: 'An objective sleep study (PSG or HSAT) after the oral appliance has been optimally adjusted to verify treatment efficacy',
          B: 'Monthly dental impressions to monitor tooth movement',
          C: 'Annual cephalometric radiographs to assess skeletal changes',
          D: 'Replacement of the oral appliance every 6 months regardless of condition',
        },
        correctChoice: 'A',
        explanationCorrect:
          'AASM guidelines recommend that all patients treated with an oral appliance for OSA undergo an objective follow-up sleep study after the device has been optimally titrated. This is essential because subjective improvement in symptoms does not reliably predict adequate AHI reduction. The sleep study should be performed with the oral appliance in place at its final treatment position.',
        explanationWrong:
          'Monthly dental impressions are excessive for monitoring. Annual cephalometric radiographs are not required by guidelines. Routine replacement every 6 months is unnecessary if the device is functioning properly and well-fitting.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 16,
        questionText:
          'A patient with central sleep apnea is mistakenly placed on an APAP device instead of an ASV device. What is the most likely consequence of using APAP in a patient with predominantly central apneas?',
        choices: {
          A: 'The APAP will treat the central apneas as effectively as ASV',
          B: 'The APAP will have no effect and the device will remain at the minimum pressure setting',
          C: 'The APAP may inappropriately increase pressure in response to central apneas (which it may interpret as obstructive events), potentially worsening central events by reducing CO2 below the apneic threshold',
          D: 'The APAP will automatically switch to a bilevel mode to compensate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'APAP algorithms are designed to detect and treat obstructive events. When central apneas occur, the algorithm may misinterpret the absent airflow as obstruction and increase pressure. This pressure increase can cause hyperventilation during the subsequent hyperpnea, driving CO2 below the apneic threshold and potentially worsening central apnea severity. Additionally, higher pressures may reduce cardiac output in susceptible patients.',
        explanationWrong:
          'APAP is not designed to treat central apneas and cannot replicate ASV function. Some APAP devices may respond to central events with pressure changes rather than remaining at minimum. APAP devices do not have the ability to automatically switch to bilevel mode.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 17,
        questionText:
          'A patient treated with a mandibular advancement device undergoes a follow-up home sleep apnea test with the device in place. The residual AHI is 3 events/hour (baseline was 18). However, the patient develops significant bruxism-related jaw clenching while wearing the device. Which of the following collaborative management strategies is most appropriate?',
        choices: {
          A: 'Discontinue the oral appliance immediately and switch to CPAP',
          B: 'Consult with the dental sleep medicine provider about modifying the appliance design to accommodate bruxism, such as adding a softer occlusal surface or adjusting the device mechanics',
          C: 'Prescribe a muscle relaxant to take before bed along with the oral appliance',
          D: 'Ignore the bruxism since the AHI is well controlled',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When bruxism occurs with MAD use, collaborative management between the sleep physician and dental sleep medicine provider is essential. The dental provider can modify the appliance design to accommodate bruxism, such as using more durable materials, adding a softer dual-laminate occlusal surface to protect teeth, or adjusting the vertical dimension. Some devices can be designed to serve as both a mandibular advancement and bruxism protection device.',
        explanationWrong:
          'Discontinuing effective therapy is premature when the appliance can be modified. Muscle relaxants may have sedative effects that could worsen OSA and do not address the mechanical issue. Ignoring bruxism risks dental damage (tooth fracture, wear, TMJ problems) and potential appliance failure.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 18,
        questionText:
          'An APAP device has a "ramp" feature that starts at a lower pressure and gradually increases to the minimum therapeutic pressure over a set time. A patient using APAP with a ramp time of 30 minutes reports obstructive events during the ramp period that disrupt sleep onset. What is the most appropriate adjustment?',
        choices: {
          A: 'Extend the ramp time to 60 minutes so the pressure increases even more gradually',
          B: 'Disable the ramp feature entirely so the device starts at the minimum therapeutic pressure',
          C: 'Add a sedative hypnotic to help the patient fall asleep before the ramp reaches therapeutic pressure',
          D: 'Shorten the ramp time or increase the ramp start pressure so that therapeutic pressure is reached more quickly, reducing the window of vulnerability to obstructive events during sleep onset',
        },
        correctChoice: 'D',
        explanationCorrect:
          'If obstructive events are occurring during the ramp period, the sub-therapeutic starting pressure is allowing obstruction during what should be the sleep onset period. Shortening the ramp time or increasing the ramp start pressure (so it begins closer to the therapeutic range) reduces the period during which the patient is exposed to inadequate pressure. This allows the patient to fall asleep at a pressure sufficient to prevent obstructive events.',
        explanationWrong:
          'Extending the ramp time would prolong the period of sub-therapeutic pressure. Disabling the ramp entirely may work but removes the comfort benefit; adjusting the ramp parameters is a more balanced approach. Sedative hypnotics do not address the obstructive events and could worsen airway collapsibility.',
        topic: 'APAP algorithms and data interpretation',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 19,
        questionText:
          'A patient with moderate OSA is considering an oral appliance versus CPAP. The sleep physician explains the comparative efficacy. Which of the following statements most accurately reflects the current evidence comparing oral appliances to CPAP?',
        choices: {
          A: 'Oral appliances are generally less efficacious than CPAP at reducing AHI, but real-world effectiveness may be comparable due to higher adherence rates with oral appliances',
          B: 'CPAP and oral appliances have identical AHI reduction capabilities',
          C: 'Oral appliances are more effective than CPAP in all severity levels of OSA',
          D: 'Oral appliances are only effective for central sleep apnea, not obstructive events',
        },
        correctChoice: 'A',
        explanationCorrect:
          'CPAP is more efficacious than oral appliances at reducing AHI in controlled studies. However, in real-world practice, the higher adherence and compliance rates typically seen with oral appliances (patients tend to use them more consistently) can result in comparable overall effectiveness, particularly in mild-to-moderate OSA. This distinction between efficacy (how well a treatment works when used) and effectiveness (how well it works in practice including adherence) is clinically important.',
        explanationWrong:
          'CPAP and oral appliances do not have identical AHI reduction when used. Oral appliances are not more effective than CPAP at any severity level on a per-use basis. Oral appliances treat obstructive, not central, sleep apnea.',
        topic: 'Dental sleep medicine collaboration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 20,
        questionText:
          'A patient on APAP has a data download showing usage of 7 hours per night, residual AHI of 1, and a large leak rate of 5 L/min. The 95th percentile pressure is 11 cmH2O and the median is 10 cmH2O, showing very little pressure variation throughout the night. What might the narrow pressure range with minimal variation suggest?',
        choices: {
          A: 'The patient has well-controlled non-positional OSA with consistent pressure requirements',
          B: 'The leak may be causing the algorithm to underperform, keeping pressure artificially stable because the leak compensation is masking the actual flow signal and preventing the algorithm from accurately detecting events',
          C: 'The APAP device has malfunctioned and is functioning as a fixed-pressure device',
          D: 'The patient is not actually sleeping during device use',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When large leak is present, the APAP algorithm ability to accurately measure and analyze the inspiratory flow contour is compromised. The leak compensation algorithms may mask true airflow signals, causing the device to maintain a relatively constant pressure rather than responding dynamically to events. The low reported AHI may be artificially low because events are being missed due to poor signal quality from the leak. The combination of large leak with unexpectedly stable pressure and low AHI should raise suspicion.',
        explanationWrong:
          'While well-controlled non-positional OSA could show narrow pressure variation, the concurrent large leak makes this interpretation unreliable. Modern APAP devices are unlikely to malfunction in this specific way. Usage of 7 hours strongly suggests the patient is sleeping.',
        topic: 'APAP algorithms and data interpretation',
      },
    ],
  })

  // ─── EXAM 25 ───────────────────────────────────────────
  // Topics: PAP data download interpretation, Sleep disorders in military/first responder populations
  // Correct answer distribution: A=5(Q3,Q5,Q11,Q16,Q20) B=5(Q2,Q7,Q13,Q17,Q19) C=5(Q4,Q8,Q10,Q14,Q18) D=5(Q1,Q6,Q9,Q12,Q15)
  const exam25 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 25',
      examIndex: 25,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam25.id,
        questionIndex: 1,
        questionText:
          'A CPAP data download report shows the following: average daily usage 5.2 hours, residual AHI 4, 90th percentile pressure 12 cmH2O, large leak 8% of the time. Based on CMS (Medicare) adherence criteria, does this patient meet compliance requirements?',
        choices: {
          A: 'Yes, if the device is used for 4 or more hours on at least 70% of nights during a consecutive 30-day period within the first 90 days of use',
          B: 'No, because the leak percentage exceeds the allowable limit',
          C: 'No, because the usage must be at least 6 hours per night',
          D: 'No, because the residual AHI is too high',
        },
        correctChoice: 'A',
        explanationCorrect:
          'CMS adherence criteria require that the PAP device be used for 4 or more hours per night on at least 70% of nights (21 out of 30 consecutive nights) during the first 90 days of use. The average usage of 5.2 hours meets the minimum hourly requirement, but the clinician must verify that the 70% of nights criterion is also met by reviewing the detailed nightly usage data.',
        explanationWrong:
          'CMS criteria do not specify a maximum residual AHI for compliance purposes. There is no specific leak percentage threshold in CMS adherence criteria. The minimum usage threshold is 4 hours, not 6 hours.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 2,
        questionText:
          'A military service member returning from a combat deployment reports difficulty falling asleep, frequent nightmares, and hypervigilance at night. PSG shows prolonged sleep onset latency (45 minutes), reduced REM sleep percentage (12%), and multiple REM-onset nightmares with associated tachycardia. What is the most likely diagnosis?',
        choices: {
          A: 'Nightmare disorder without comorbid psychiatric condition',
          B: 'Post-traumatic stress disorder (PTSD) with associated sleep disturbance',
          C: 'REM sleep behavior disorder',
          D: 'Delayed sleep-wake phase disorder from combat deployment schedule',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The combination of combat deployment history, difficulty falling asleep (insomnia), hypervigilance, nightmares with autonomic arousal (tachycardia), and PSG findings of prolonged sleep latency with reduced REM percentage is highly consistent with PTSD-associated sleep disturbance. Sleep disruption is one of the hallmark features of PTSD, with insomnia and nightmares being two of the most commonly reported symptoms.',
        explanationWrong:
          'Nightmare disorder alone would not explain the hypervigilance and insomnia. REM sleep behavior disorder involves dream enactment from loss of atonia, not nightmares with preserved atonia. While circadian disruption can occur from deployment, the symptom profile is far more consistent with PTSD.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 3,
        questionText:
          'A patient PAP data download shows that on weeknights (Sunday through Thursday), average usage is 6.8 hours, but on weekend nights (Friday and Saturday), average usage drops to 1.5 hours. The overall 30-day average is 5.1 hours. How should this usage pattern be interpreted clinically?',
        choices: {
          A: 'The weekend non-adherence pattern suggests social or behavioral factors are interfering with CPAP use, and targeted counseling about consistent nightly use should be provided',
          B: 'The overall average of 5.1 hours meets compliance criteria so no intervention is needed',
          C: 'The patient should only use CPAP on weeknights since weekend use is too low to be beneficial',
          D: 'The device should be changed to an APAP with a comfort feature to improve weekend compliance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A pattern of good weeknight adherence with weekend non-adherence often reflects lifestyle factors such as alcohol use, late nights, sleeping away from home, or social activities that interfere with CPAP use. Targeted counseling about the importance of consistent nightly use, along with problem-solving strategies for weekend barriers, is the most appropriate intervention.',
        explanationWrong:
          'While the overall average may meet CMS criteria, the inconsistent pattern leaves the patient unprotected for 2 nights per week, which can lead to symptom recurrence. Recommending CPAP only on weeknights is inappropriate. Changing the device does not address the behavioral root cause.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 4,
        questionText:
          'A firefighter with OSA is prescribed CPAP but reports that wearing the mask triggers feelings of suffocation and panic, reminiscent of experiences during structural fire operations where SCBA (self-contained breathing apparatus) use was associated with a traumatic event. What is the most appropriate therapeutic approach?',
        choices: {
          A: 'Prescribe a sedative to take before using CPAP to reduce anxiety',
          B: 'Exempt the firefighter from CPAP therapy since the mask is contraindicated in trauma patients',
          C: 'Implement a desensitization protocol starting with mask-only exposure during waking hours, progressing gradually to wearing the mask with pressure during relaxed activities, while coordinating with a mental health provider for concurrent trauma-focused therapy',
          D: 'Switch to the highest CPAP pressure immediately to minimize the feeling of breathlessness',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mask-related anxiety and claustrophobia are common in first responders who have had traumatic experiences with respiratory equipment. A systematic desensitization approach allows the patient to gradually acclimate to the mask and pressure in a controlled, non-threatening environment. Concurrent trauma-focused therapy (such as cognitive processing therapy or prolonged exposure therapy) with a mental health provider addresses the underlying trauma that triggers the panic response.',
        explanationWrong:
          'Sedatives may worsen OSA by decreasing upper airway muscle tone and respiratory drive. CPAP is not contraindicated in trauma patients; the approach to initiation needs to be modified. Starting with high pressure would likely worsen the suffocation sensation and panic response.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 5,
        questionText:
          'A PAP data download from a bilevel PAP device shows the following settings: IPAP 18 cmH2O, EPAP 12 cmH2O, backup rate 12 breaths/min. The detailed data shows that the backup rate is triggering for 60% of breaths during the night. What does this high backup rate triggering percentage indicate?',
        choices: {
          A: 'The patient is not generating adequate spontaneous respiratory effort to trigger the device, suggesting significant hypoventilation, neuromuscular weakness, or central apnea requiring further evaluation',
          B: 'The backup rate is set appropriately and the device is functioning as intended',
          C: 'The IPAP pressure is too high and causing respiratory muscle fatigue',
          D: 'The patient is experiencing frequent obstructive apneas that prevent triggering',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When a bilevel PAP device backup rate is triggering for 60% of breaths, it indicates that the patient is not initiating a sufficient proportion of breaths spontaneously. This can occur in patients with significant neuromuscular weakness (who cannot generate enough inspiratory effort to trigger the device), severe central sleep apnea, or narcotic-induced respiratory depression. This finding warrants clinical investigation to determine the underlying cause.',
        explanationWrong:
          'A 60% triggered backup rate is not the intended function of S/T mode, which should predominantly support patient-triggered breaths. High IPAP would not cause the patient to stop triggering breaths. Obstructive apneas involve effort against a closed airway, which would still generate triggering signals in most cases.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 6,
        questionText:
          'A study of police officers working rotating shifts finds a high prevalence of undiagnosed OSA. Which aspect of police work creates the greatest synergistic risk when combined with untreated OSA?',
        choices: {
          A: 'Physical fitness requirements leading to muscle fatigue',
          B: 'Exposure to indoor pollutants in police vehicles',
          C: 'Paperwork demands reducing available sleep time',
          D: 'The combination of shift work-related circadian disruption with OSA-related sleep fragmentation creates compounded impairment in vigilance, reaction time, and decision-making during critical duty situations',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The synergistic effect of shift work-related circadian disruption and OSA-related sleep fragmentation creates a compounded risk for police officers. Both conditions independently impair vigilance, reaction time, and cognitive function, but together they produce greater impairment than either alone. This is particularly dangerous for law enforcement, where split-second decisions involving force, driving, and public safety are routine.',
        explanationWrong:
          'Physical fitness, indoor pollutants, and paperwork are minor concerns compared to the direct impact of combined circadian disruption and sleep fragmentation on cognitive and psychomotor performance during critical duty situations.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 7,
        questionText:
          'A clinician is reviewing a PAP download and notices that the "Cheyne-Stokes respiration" (CSR) flag indicates CSR was detected for 35% of the recording time. The patient has no known cardiac history. What is the most important clinical action based on this finding?',
        choices: {
          A: 'Disregard the CSR flag as these are commonly false positives in PAP device algorithms',
          B: 'Refer the patient for a comprehensive cardiac evaluation including echocardiography, as new-onset CSR on PAP download may be the first indicator of underlying heart failure',
          C: 'Switch the patient to ASV immediately without further evaluation',
          D: 'Increase the EPAP pressure to suppress the CSR pattern',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cheyne-Stokes respiration detected on a PAP data download in a patient without known cardiac disease should prompt a comprehensive cardiac evaluation. CSR can be the presenting sign of undiagnosed heart failure, and PAP devices may detect this pattern before clinical symptoms of heart failure manifest. An echocardiogram is essential to assess ventricular function and rule out heart failure.',
        explanationWrong:
          'While false positives can occur, a CSR flag of 35% is significant and should not be ignored. Switching to ASV without knowing the patient cardiac status could be dangerous if they have heart failure with reduced EF. Increasing EPAP would not address the underlying cause.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 8,
        questionText:
          'An Army Special Forces operator with diagnosed PTSD and comorbid OSA reports poor CPAP adherence. He states that wearing the mask at night makes him feel vulnerable and unable to respond quickly to threats, which is incompatible with his trained hypervigilance. Which of the following treatment strategies best addresses both conditions simultaneously?',
        choices: {
          A: 'Prescribe prazosin for PTSD nightmares and discontinue CPAP therapy entirely',
          B: 'Recommend a positional therapy device as a sole treatment for his OSA',
          C: 'Consider a mandibular advancement device as an alternative to CPAP (eliminating the mask trigger), while combining with prazosin for PTSD-related nightmares and cognitive behavioral therapy for insomnia adapted for PTSD',
          D: 'Recommend uvulopalatopharyngoplasty surgery to eliminate the need for any device',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A multimodal approach addressing both PTSD and OSA is optimal. A mandibular advancement device removes the mask trigger for hypervigilance-related anxiety while treating OSA. Prazosin is an alpha-1 adrenergic antagonist with evidence for reducing PTSD-related nightmares. CBT for insomnia adapted for PTSD addresses the underlying sleep-onset difficulties and hyperarousal. This integrated approach addresses the unique barriers faced by military personnel.',
        explanationWrong:
          'Discontinuing OSA treatment entirely is not appropriate. Positional therapy alone may not adequately treat OSA depending on severity and positional component. UPPP has limited efficacy and irreversible complications, making it a premature recommendation.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 9,
        questionText:
          'A PAP data download from a patient on fixed CPAP at 10 cmH2O shows the following trends over 3 months: Month 1 residual AHI 2, Month 2 residual AHI 5, Month 3 residual AHI 11 with increasing 95th percentile leak. The patient reports 15-pound weight gain over this period. What is the most likely explanation for the progressive increase in residual AHI?',
        choices: {
          A: 'The CPAP device is wearing out and delivering inadequate pressure',
          B: 'The patient has developed central sleep apnea from CPAP use',
          C: 'The progressive leak is the sole cause of the increasing AHI',
          D: 'Weight gain has increased the therapeutic pressure requirement beyond the fixed CPAP setting of 10 cmH2O, and the worsening leak from higher negative pharyngeal pressures further compromises treatment efficacy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Weight gain is one of the most common causes of progressive treatment failure on fixed CPAP. The additional 15 pounds likely increased pharyngeal fat deposition and collapsibility, raising the effective pressure requirement above the current setting of 10 cmH2O. The patient may also be generating stronger inspiratory efforts against the inadequately treated airway, worsening mask leak as they struggle to breathe. The solution is to uptitrate the pressure (either with a new titration study or a switch to APAP).',
        explanationWrong:
          'Modern CPAP devices maintain accurate pressure output and do not wear out in this manner. Treatment-emergent central apnea is possible but less likely than undertreated obstructive events from weight gain. While leak contributes, it is likely both a symptom and a cause, with the primary driver being inadequate pressure from weight gain.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 10,
        questionText:
          'Emergency medical service (EMS) paramedics often work 24-hour shifts. Research on EMS personnel has shown which of the following sleep-related findings to be most prevalent?',
        choices: {
          A: 'Narcolepsy type 1 due to chronic sleep deprivation depleting hypocretin',
          B: 'Advanced sleep-wake phase disorder from early morning shift starts',
          C: 'High rates of drowsy driving, involuntary sleep episodes on duty, and undiagnosed OSA, with screening and treatment programs significantly reducing accident rates',
          D: 'Chronic insomnia without any associated performance impairment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Studies of EMS workers have demonstrated alarmingly high rates of drowsy driving, involuntary sleep episodes while on duty, and undiagnosed sleep disorders (particularly OSA). The combination of extended shift work, sleep deprivation, and untreated sleep disorders creates significant risks for both the providers and the patients they transport. Screening and treatment programs have shown measurable reductions in accident rates and near-miss events.',
        explanationWrong:
          'Chronic sleep deprivation does not cause narcolepsy type 1, which is an autoimmune condition. Advanced phase disorder is associated with aging, not early shift starts. Chronic insomnia in shift workers does impair performance.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 11,
        questionText:
          'A clinician is interpreting a PAP data download and notices a metric labeled "flow limitation index." What does this metric measure?',
        choices: {
          A: 'The number of breaths per hour that show inspiratory flow limitation (flattening of the flow contour) without meeting criteria for apnea or hypopnea, indicating subclinical upper airway resistance',
          B: 'The percentage of time the device is at maximum pressure',
          C: 'The number of large leak events per hour',
          D: 'The ratio of inspiratory to expiratory time',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The flow limitation index quantifies the number of breaths per hour that demonstrate inspiratory flow contour flattening (indicating partial upper airway obstruction) without meeting the criteria for scored apneas or hypopneas. An elevated flow limitation index suggests that the current pressure may be insufficient to fully maintain airway patency, even though the AHI appears controlled. This metric helps identify subclinical upper airway resistance that may cause symptoms.',
        explanationWrong:
          'The flow limitation index is not related to maximum pressure time, leak events, or inspiratory/expiratory time ratios. It specifically measures the degree of inspiratory flow limitation below the threshold for scored events.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 12,
        questionText:
          'A veteran with combat-related PTSD and blast-exposure traumatic brain injury (TBI) is referred for evaluation of excessive daytime sleepiness and snoring. Which of the following sleep disorders is uniquely elevated in the military TBI population compared to civilian OSA patients?',
        choices: {
          A: 'Obstructive sleep apnea without any unique features',
          B: 'Sleep-related eating disorder',
          C: 'Isolated periodic limb movement disorder',
          D: 'A higher rate of comorbid central sleep apnea, insomnia, and hypersomnia related to blast-induced damage to brainstem and hypothalamic sleep-wake regulatory centers',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Military TBI, particularly from blast exposure, can damage brainstem respiratory control centers and hypothalamic sleep-wake regulatory nuclei (including hypocretin/orexin-producing neurons). This creates a unique pattern of comorbid central sleep apnea, post-traumatic hypersomnia, and insomnia that differs from the typical civilian OSA presentation. These patients often require specialized multidisciplinary evaluation and treatment.',
        explanationWrong:
          'While OSA is common in TBI patients, the presentation often includes unique features not seen in typical civilian OSA. Sleep-related eating disorder and isolated PLMD are not specifically elevated in TBI populations.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 13,
        questionText:
          'A PAP data download shows that a patient on APAP (range 6-16 cmH2O) has an average usage of 7.5 hours per night. However, the usage detail shows that on most nights, the device records 1-2 hours of use, then a gap of 30-60 minutes, then 5-6 more hours of use. What does this usage pattern most likely represent?',
        choices: {
          A: 'The patient is removing the mask briefly to use the bathroom during the night and then replacing it',
          B: 'The patient is removing the mask during REM sleep and replacing it during NREM',
          C: 'The device is malfunctioning and losing power intermittently',
          D: 'The patient is starting the device to accumulate hours but not actually sleeping with it',
        },
        correctChoice: 'B',
        explanationWrong:
          'While a bathroom break is possible, the consistent 30-60 minute gaps are more suggestive of a systematic pattern related to sleep stages. A malfunctioning device would not show this consistent pattern. Accumulating hours without sleeping would not show a specific pattern of gaps.',
        explanationCorrect:
          'This is a common real-world pattern: the patient falls asleep with the mask, but removes it during the first or second REM period (often unconsciously) when mask discomfort, increased leak from positional changes during REM, or dream-related behavior causes removal. The patient then wakes, realizes the mask is off, and replaces it for the remainder of the night. Counseling about this pattern and addressing potential REM-related mask discomfort can help.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 14,
        questionText:
          'A National Guard soldier who works as a civilian law enforcement officer (dual-role first responder) presents with chronic insomnia, fatigue, and poor concentration. He works rotating 12-hour shifts as a police officer and deploys for military training one weekend per month plus two weeks annually. Which sleep disorder is this patient at highest risk for, given his unique occupational demands?',
        choices: {
          A: 'Restless legs syndrome from physical demands of both roles',
          B: 'Shift work disorder compounded by circadian disruption from military deployment schedules, creating a chronic circadian desynchrony that prevents adequate recovery between schedule changes',
          C: 'Klein-Levin syndrome from chronic cumulative sleep debt',
          D: 'Non-24-hour sleep-wake rhythm disorder',
        },
        correctChoice: 'B',
        explanationCorrect:
          'This dual-role service member faces compounded circadian disruption from rotating civilian shifts superimposed on military training schedules. The result is chronic circadian desynchrony with insufficient time for circadian re-entrainment between schedule changes. This creates a particularly severe form of shift work disorder with greater impairment than either schedule alone would produce.',
        explanationWrong:
          'While RLS is possible, the occupational pattern points to circadian disruption as the primary issue. Klein-Levin syndrome is a rare disorder of recurrent hypersomnia, not related to shift work. Non-24-hour disorder is primarily seen in totally blind individuals.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 15,
        questionText:
          'A bilevel PAP data download shows the following: IPAP 20 cmH2O, EPAP 14 cmH2O, tidal volume estimates averaging 350 mL, and minute ventilation averaging 5.5 L/min. The patient has obesity hypoventilation syndrome and weighs 140 kg. Are these ventilatory parameters adequate?',
        choices: {
          A: 'Yes, these parameters are within normal range for all patients',
          B: 'Yes, because the pressure support (IPAP minus EPAP = 6 cmH2O) is adequate',
          C: 'The tidal volume appears adequate but minute ventilation cannot be determined from PAP data',
          D: 'No, the estimated tidal volume and minute ventilation are likely insufficient for a 140 kg patient with OHS, suggesting the need for increased pressure support (higher IPAP or lower EPAP) to augment tidal volume',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For a 140 kg patient with OHS, target tidal volumes should be approximately 8-10 mL/kg of ideal body weight (approximately 550-700 mL for most adults), and minute ventilation should be adequate to normalize CO2. An estimated tidal volume of 350 mL and minute ventilation of 5.5 L/min are likely insufficient, indicating that the current pressure support of 6 cmH2O is not generating adequate ventilation. Increasing the IPAP-EPAP differential will augment tidal volumes.',
        explanationWrong:
          'These parameters may be within range for a smaller patient but are inadequate for a 140 kg OHS patient. A pressure support of 6 cmH2O may be insufficient for this patient. Modern bilevel PAP devices do provide estimated minute ventilation data.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 16,
        questionText:
          'Military deployment to high-altitude environments (above 8,000 feet) can unmask or worsen which of the following sleep disorders?',
        choices: {
          A: 'REM sleep behavior disorder from altitude-related neurological changes',
          B: 'Obstructive sleep apnea due to upper airway edema from altitude',
          C: 'Narcolepsy triggered by hypoxic stress on hypocretin neurons',
          D: 'Central sleep apnea due to hypoxia-induced periodic breathing, as the lowered PaO2 at altitude drives hyperventilation and creates PaCO2 fluctuations around the apneic threshold',
        },
        correctChoice: 'D',
        explanationCorrect:
          'High altitude causes hypoxic stimulation of peripheral chemoreceptors, which drives hyperventilation. The resulting hypocapnia brings PaCO2 closer to or below the apneic threshold, producing periodic breathing with central apneas, particularly during NREM sleep. This is a well-recognized phenomenon in military personnel deployed to mountainous regions and can significantly impair sleep quality and operational performance.',
        explanationWrong:
          'OSA is not worsened by altitude-related upper airway edema. Narcolepsy is not triggered by hypoxic stress. REM sleep behavior disorder is not caused by altitude exposure.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 17,
        questionText:
          'When reviewing a PAP data download, the clinician notes that the device reports both an "AHI" and a separate "AI" (apnea index) and "HI" (hypopnea index). In a patient on CPAP at 12 cmH2O, the data shows: AHI 8, AI 6 (mostly central), HI 2. What is the clinical significance of the high central apnea index?',
        choices: {
          A: 'Central apneas on CPAP are always artifacts and should be ignored',
          B: 'A high central AI on CPAP may indicate treatment-emergent central sleep apnea (complex sleep apnea) and warrants clinical evaluation, potentially including an in-lab PAP titration study or consideration of alternative therapy',
          C: 'The central apnea index is elevated because the CPAP pressure is too low to treat obstructive events',
          D: 'Central apneas only occur during the ramp period and are clinically insignificant',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A high central apnea index on CPAP data download, particularly when it accounts for most of the residual AHI, may indicate treatment-emergent central sleep apnea (also called complex sleep apnea). This condition occurs when central apneas emerge or persist after obstructive events are adequately treated. It warrants clinical evaluation, possibly including an in-lab titration to confirm the finding and consider alternative therapies such as ASV (if cardiac function is preserved), bilevel PAP with backup rate, or watchful waiting, as some cases resolve spontaneously.',
        explanationWrong:
          'Central apneas on CPAP are not always artifacts and should be evaluated. Low CPAP pressure would result in residual obstructive, not central, events. While some central events occur during ramp, a central AI of 6 throughout the night is clinically significant.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 18,
        questionText:
          'A sleep medicine program is establishing screening protocols for a fire department. Given the known prevalence of sleep disorders in firefighters, which of the following screening approaches is most evidence-based?',
        choices: {
          A: 'Annual overnight PSG for all firefighters regardless of symptoms',
          B: 'Screening only firefighters who report daytime sleepiness using the Epworth Sleepiness Scale',
          C: 'A validated screening questionnaire (such as STOP-BANG) combined with assessment of BMI, neck circumference, and job-related factors such as shift schedule and accident/near-miss history, with referral for sleep testing when screening criteria are met',
          D: 'Screening only firefighters over age 50',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An evidence-based screening approach for firefighters combines validated questionnaires (STOP-BANG has been validated in first responder populations) with anthropometric measurements and occupational risk factors. This approach identifies high-risk individuals for referral to sleep testing while being practical for large-scale implementation. Studies in fire departments have shown that targeted screening programs significantly improve diagnosis rates and reduce operational risks.',
        explanationWrong:
          'Annual PSG for all firefighters is impractical and not cost-effective. Relying solely on ESS misses many firefighters who underreport sleepiness due to cultural factors. Screening only those over 50 would miss the many younger firefighters at risk due to BMI, anatomy, and shift work factors.',
        topic: 'Sleep disorders in military/first responder populations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 19,
        questionText:
          'A PAP data download shows an unusual pattern where the device records exactly 4 hours of use on most nights, with the device being turned on at approximately the same time each night and turned off exactly 4 hours later. Residual AHI is low. What should this usage pattern raise concern about?',
        choices: {
          A: 'Normal patient behavior showing excellent compliance discipline',
          B: 'The device timer is malfunctioning and the patient is actually using it all night',
          C: 'The patient may be using the device for the minimum required compliance hours to meet insurance requirements but removing it for the remainder of the night, indicating an adherence barrier that should be explored',
          D: 'The patient has a sleep disorder causing exactly 4 hours of sleep per night',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A pattern of exactly 4 hours of use nightly is a well-recognized "gaming" pattern where patients use the device just long enough to meet CMS compliance criteria (4 hours per night) but remove it for the remainder of the sleep period. This pattern suggests the patient has a significant adherence barrier (discomfort, claustrophobia, or preference) that should be addressed through counseling, mask fitting, pressure adjustment, or exploring alternative treatments.',
        explanationWrong:
          'While technically meeting compliance, this exact pattern is too precise to reflect natural use and strongly suggests intentional minimum-threshold targeting. Modern PAP device timers are reliable. Most patients do not naturally sleep in exactly 4-hour blocks.',
        topic: 'PAP data download interpretation',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 20,
        questionText:
          'A military physician is developing a fatigue risk management system (FRMS) for a unit conducting sustained operations. Which evidence-based principle should be the foundation of sleep-related fatigue mitigation in military operations?',
        choices: {
          A: 'Implementing strategic napping protocols, banking sleep before operations, using caffeine strategically with defined timing windows, and monitoring cumulative sleep debt to predict periods of highest vulnerability',
          B: 'Requiring all service members to sleep 8 hours per night regardless of operational demands',
          C: 'Using modafinil for all service members during sustained operations regardless of sleep history',
          D: 'Relying on individual service member self-assessment of fatigue levels',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Evidence-based FRMS in military operations incorporates multiple strategies: strategic napping (20-30 minute naps to temporarily restore performance), sleep banking (extending sleep before anticipated deprivation), strategic caffeine use (timing and dosing to maximize alertness during critical periods while avoiding interference with recovery sleep), and objective monitoring of cumulative sleep debt to identify high-risk periods. These principles are supported by military sleep research and operational experience.',
        explanationWrong:
          'Requiring 8 hours nightly is impractical during sustained operations. Universal modafinil use without sleep management is not evidence-based and does not replace actual sleep. Self-assessment of fatigue is notoriously inaccurate, particularly as sleep deprivation impairs the ability to accurately assess one own level of impairment.',
        topic: 'Sleep disorders in military/first responder populations',
      },
    ],
  })

  console.log('SDS mini exams 21-25 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
