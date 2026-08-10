import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 6-10...')

  // ─── EXAM 6 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q11,Q15,Q18) B=5(Q1,Q7,Q12,Q16,Q20) C=5(Q3,Q8,Q13,Q17,Q19) D=5(Q4,Q6,Q9,Q10,Q14)
  const exam6 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 6',
      examIndex: 6,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam6.id,
        questionIndex: 1,
        questionText:
          'A mechanically ventilated patient on volume-controlled ventilation shows a sudden increase in peak inspiratory pressure from 28 to 48 cmH2O while the plateau pressure remains unchanged at 22 cmH2O. Which of the following is the most likely cause?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Mucus plug in the endotracheal tube',
          C: 'Worsening pulmonary edema',
          D: 'Abdominal distension',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When peak pressure rises but plateau pressure remains unchanged, the problem is increased airway resistance, not decreased compliance. A mucus plug in the endotracheal tube increases resistive pressure without affecting alveolar pressure (plateau pressure).',
        explanationWrong:
          'Tension pneumothorax, worsening pulmonary edema, and abdominal distension all decrease lung or thoracic compliance, which would cause both peak and plateau pressures to rise simultaneously. A stable plateau pressure rules out compliance-related issues.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 2,
        questionText:
          'On a pressure-volume loop during mechanical ventilation, a lower inflection point is observed at 12 cmH2O. What does this finding indicate about PEEP adjustment?',
        choices: {
          A: 'PEEP should be set at or slightly above 12 cmH2O to prevent cyclical alveolar collapse',
          B: 'PEEP should be set well below 12 cmH2O to avoid overdistension',
          C: 'PEEP has no relationship to the lower inflection point',
          D: 'PEEP should be set at 5 cmH2O regardless of inflection point findings',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The lower inflection point on the pressure-volume loop represents the pressure at which significant alveolar recruitment begins. Setting PEEP at or slightly above this point helps maintain alveolar recruitment and prevents repetitive opening and closing of alveoli, which contributes to ventilator-induced lung injury.',
        explanationWrong:
          'Setting PEEP below the lower inflection point allows cyclical atelectasis and atelectrauma. The lower inflection point is a clinically relevant marker for optimal PEEP in ARDS. Arbitrary PEEP values without considering lung mechanics may lead to suboptimal ventilation strategies.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 3,
        questionText:
          'A critically ill patient with sepsis has been NPO for 5 days in the ICU. The patient is hemodynamically stable on low-dose vasopressors with a functioning GI tract. What is the most appropriate nutritional intervention?',
        choices: {
          A: 'Continue NPO until all vasopressors are discontinued',
          B: 'Initiate total parenteral nutrition immediately',
          C: 'Begin early enteral nutrition via a nasogastric tube',
          D: 'Wait for positive nitrogen balance before starting nutrition',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current guidelines recommend early enteral nutrition within 24-48 hours of ICU admission in critically ill patients who are hemodynamically stable, even on low-dose vasopressors. Enteral nutrition helps maintain gut mucosal integrity, reduces infectious complications, and supports immune function.',
        explanationWrong:
          'Waiting until vasopressors are discontinued delays nutritional support unnecessarily. Total parenteral nutrition is reserved for patients who cannot tolerate enteral feeding. Waiting for positive nitrogen balance is not a criterion for initiating nutrition; rather, nutrition is started to prevent further catabolism.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 4,
        questionText:
          'A patient with a 40% total body surface area (TBSA) thermal burn is intubated and being mechanically ventilated. The respiratory therapist notices copious carbonaceous sputum during suctioning. Which of the following complications should be most anticipated?',
        choices: {
          A: 'Pulmonary embolism',
          B: 'Pleural effusion',
          C: 'Pneumomediastinum',
          D: 'Progressive airway edema and bronchospasm within the first 24-72 hours',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Carbonaceous sputum is a hallmark sign of inhalation injury. The thermal and chemical injury to the airway mucosa causes progressive edema, mucosal sloughing, and bronchospasm that typically worsens over the first 24-72 hours. Airway management must account for this progressive swelling.',
        explanationWrong:
          'While burn patients are at risk for various complications, the presence of carbonaceous sputum directly indicates inhalation injury, and the primary concern is progressive airway edema and bronchospasm. Pulmonary embolism, pleural effusion, and pneumomediastinum are not the most immediate concerns with this clinical presentation.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 5,
        questionText:
          'A patient with severe traumatic brain injury has an intracranial pressure (ICP) of 28 mmHg and a mean arterial pressure (MAP) of 85 mmHg. What is the cerebral perfusion pressure (CPP), and is it within the recommended target range?',
        choices: {
          A: 'CPP is 57 mmHg; this is below the recommended minimum of 60 mmHg',
          B: 'CPP is 57 mmHg; this is within the acceptable range',
          C: 'CPP is 113 mmHg; this is above the recommended range',
          D: 'CPP is 28 mmHg; this indicates critical cerebral hypoperfusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'CPP is calculated as MAP minus ICP (85 - 28 = 57 mmHg). The Brain Trauma Foundation recommends maintaining CPP between 60-70 mmHg. A CPP of 57 mmHg is below the minimum threshold and requires intervention to either raise MAP or lower ICP.',
        explanationWrong:
          'A CPP of 57 mmHg is below the recommended minimum of 60 mmHg and is not acceptable. CPP is calculated as MAP minus ICP, not MAP plus ICP. The calculation yields 57 mmHg, not 28 mmHg or 113 mmHg.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 6,
        questionText:
          'A patient with an acute COPD exacerbation is placed on noninvasive positive pressure ventilation (NPPV) in the ICU. After 2 hours, the pH has worsened from 7.28 to 7.22 and the patient is increasingly somnolent. What is the most appropriate next step?',
        choices: {
          A: 'Increase the IPAP by 2 cmH2O and reassess in 1 hour',
          B: 'Switch to a high-flow nasal cannula',
          C: 'Administer intravenous sodium bicarbonate',
          D: 'Proceed with endotracheal intubation and mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Worsening respiratory acidosis and declining mental status after an adequate trial of NPPV indicate NPPV failure. Continuing NPPV in this setting risks respiratory arrest. The patient should be intubated and placed on mechanical ventilation for airway protection and more effective ventilatory support.',
        explanationWrong:
          'Minor IPAP adjustments are unlikely to reverse the clinical trajectory in a patient who is rapidly deteriorating. High-flow nasal cannula does not provide the same level of ventilatory support as NPPV and would be a step down. Sodium bicarbonate does not address the underlying ventilatory failure and is not indicated for respiratory acidosis.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 7,
        questionText:
          'A flow-time waveform during volume-controlled ventilation shows that expiratory flow does not return to zero before the next breath is delivered. What does this indicate?',
        choices: {
          A: 'Patient-ventilator dyssynchrony from double triggering',
          B: 'Air trapping and the presence of auto-PEEP',
          C: 'An endotracheal tube leak',
          D: 'Inadequate inspiratory flow rate',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When expiratory flow does not return to zero before the next inspiration begins, it indicates incomplete exhalation and gas trapping, resulting in auto-PEEP (intrinsic PEEP). This is commonly seen in obstructive lung diseases and can have significant hemodynamic consequences.',
        explanationWrong:
          'Double triggering appears as two consecutive inspiratory efforts without a complete exhalation between them. An endotracheal tube leak would show a difference between inspired and expired tidal volumes. Inadequate inspiratory flow rate affects the inspiratory phase, not the expiratory flow pattern.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 8,
        questionText:
          'A critically ill patient on mechanical ventilation develops refeeding syndrome after initiation of enteral nutrition. Which electrolyte abnormality is most characteristic of this condition?',
        choices: {
          A: 'Hyperkalemia',
          B: 'Hypernatremia',
          C: 'Hypophosphatemia',
          D: 'Hypercalcemia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Refeeding syndrome is characterized by severe hypophosphatemia as the hallmark electrolyte abnormality. When nutrition is reintroduced after a period of starvation, insulin release drives phosphate intracellularly for ATP and 2,3-DPG production, causing precipitous drops in serum phosphate levels that can lead to cardiac arrhythmias and respiratory muscle weakness.',
        explanationWrong:
          'Refeeding syndrome is characterized by hypokalemia (not hyperkalemia), hypomagnesemia, and hypophosphatemia. Hypernatremia and hypercalcemia are not characteristic features. The shift from fat to carbohydrate metabolism drives intracellular uptake of phosphate, potassium, and magnesium.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 9,
        questionText:
          'A patient with ICU-acquired weakness has been mechanically ventilated for 21 days. Electromyography reveals reduced compound muscle action potentials with preserved sensory nerve conduction. Which diagnosis is most consistent with these findings?',
        choices: {
          A: 'Guillain-Barre syndrome',
          B: 'Myasthenia gravis',
          C: 'Critical illness myopathy',
          D: 'Critical illness polyneuropathy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Critical illness polyneuropathy (CIP) is characterized by reduced compound muscle action potentials with preserved or mildly affected sensory nerve conduction studies on electromyography. CIP is an axonal polyneuropathy that develops in critically ill patients, often associated with sepsis and multiorgan failure.',
        explanationWrong:
          'Guillain-Barre syndrome is an acute inflammatory demyelinating polyneuropathy, not typically classified as ICU-acquired weakness. Myasthenia gravis is an autoimmune neuromuscular junction disorder with characteristic decremental response on repetitive nerve stimulation. Critical illness myopathy shows myopathic changes on needle EMG with normal nerve conduction studies.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 10,
        questionText:
          'A patient with severe traumatic brain injury has an ICP of 25 mmHg despite head elevation and sedation. The neurosurgeon requests hyperventilation. What is the target PaCO2, and what is the primary mechanism of action?',
        choices: {
          A: 'Target PaCO2 of 25-30 mmHg; hyperventilation causes direct cerebral vasoconstriction',
          B: 'Target PaCO2 of 20-25 mmHg; hyperventilation reduces cerebral blood flow by increasing CSF pH',
          C: 'Target PaCO2 of 40-45 mmHg; hyperventilation reduces ICP by decreasing metabolic demand',
          D: 'Target PaCO2 of 30-35 mmHg; hyperventilation causes cerebral vasoconstriction by inducing alkalosis in the perivascular space',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Mild hyperventilation targeting a PaCO2 of 30-35 mmHg is recommended as a temporizing measure for elevated ICP. The mechanism involves reducing PaCO2, which raises the pH in the perivascular cerebrospinal fluid, causing cerebral arteriolar vasoconstriction and reducing cerebral blood volume, thereby lowering ICP.',
        explanationWrong:
          'Aggressive hyperventilation to PaCO2 below 30 mmHg carries the risk of cerebral ischemia due to excessive vasoconstriction and is not recommended as routine therapy. Maintaining PaCO2 at 40-45 mmHg is normoventilation and would not reduce ICP. The mechanism is vasoconstriction through perivascular pH changes, not direct vasoconstriction or metabolic demand reduction.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 11,
        questionText:
          'A patient 12 hours after coronary artery bypass grafting develops a cardiac index of 1.9 L/min/m2 with a PAOP of 8 mmHg. Which intervention is most appropriate?',
        choices: {
          A: 'Administer a 500 mL crystalloid fluid bolus',
          B: 'Start dobutamine infusion',
          C: 'Initiate an intra-aortic balloon pump',
          D: 'Begin norepinephrine infusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A low cardiac index with a low PAOP (8 mmHg) suggests hypovolemia as the cause of low cardiac output. In the post-cardiac surgery patient, volume resuscitation with a crystalloid bolus to optimize preload is the appropriate first intervention before considering inotropic or mechanical support.',
        explanationWrong:
          'Dobutamine and an intra-aortic balloon pump would be considered if the cardiac index remained low after adequate preload optimization. The low PAOP suggests the patient needs volume, not inotropic support. Norepinephrine would increase afterload without addressing the underlying preload deficit.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 12,
        questionText:
          'During assessment for brain death, which of the following findings would be inconsistent with the diagnosis of brain death?',
        choices: {
          A: 'Absence of corneal reflexes bilaterally',
          B: 'Presence of a cough reflex during deep tracheal suctioning',
          C: 'Absence of oculocephalic reflex',
          D: 'Spinal reflexes present in the lower extremities',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The cough reflex is a brainstem-mediated reflex. Its presence during deep tracheal suctioning indicates brainstem function and is inconsistent with a diagnosis of brain death. All brainstem reflexes must be absent for brain death declaration.',
        explanationWrong:
          'Absence of corneal reflexes and absence of oculocephalic reflex are both expected findings in brain death. Spinal reflexes (such as deep tendon reflexes or triple flexion response) can persist after brain death because they are mediated at the spinal cord level, not the brainstem, and do not preclude a diagnosis of brain death.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 13,
        questionText:
          'A patient presents with massive hemoptysis estimated at 600 mL in the past 12 hours. The patient is hemodynamically unstable. After intubation, what is the priority airway management strategy?',
        choices: {
          A: 'Immediate bilateral bronchial lavage with cold saline',
          B: 'Placement of a double-lumen endotracheal tube for lung isolation',
          C: 'Selective mainstem intubation of the unaffected lung to isolate bleeding',
          D: 'Emergent tracheostomy for improved suctioning access',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In massive hemoptysis with hemodynamic instability, the priority is to protect the unaffected lung from blood aspiration. If the bleeding source is identified, selective mainstem intubation of the unaffected lung using a standard endotracheal tube is a rapid and effective method of lung isolation when a double-lumen tube is not immediately available.',
        explanationWrong:
          'While a double-lumen tube provides ideal lung isolation, it is technically difficult to place in an emergent, unstable situation and takes more time. Bilateral bronchial lavage does not protect the unaffected lung and may worsen the situation. Tracheostomy is not indicated as an emergent intervention for hemoptysis management.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 14,
        questionText:
          'An ICU implements a ventilator-associated pneumonia (VAP) prevention bundle. Which of the following components has the strongest evidence for reducing VAP rates?',
        choices: {
          A: 'Daily chest radiographs for all ventilated patients',
          B: 'Routine endotracheal tube changes every 7 days',
          C: 'Prophylactic systemic antibiotics for all intubated patients',
          D: 'Elevation of the head of the bed to 30-45 degrees',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Head of bed elevation to 30-45 degrees is a core component of the VAP prevention bundle with strong evidence supporting its efficacy. This position reduces the risk of aspiration of gastric contents, which is a primary mechanism for VAP development. Other bundle elements include daily sedation interruption, DVT prophylaxis, and oral care with chlorhexidine.',
        explanationWrong:
          'Daily chest radiographs are not a component of the VAP prevention bundle and do not prevent VAP. Routine endotracheal tube changes are not recommended and may increase the risk of VAP. Prophylactic systemic antibiotics are not recommended as they promote antibiotic resistance without clear prevention benefit.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 15,
        questionText:
          'A pressure-time waveform during pressure-controlled ventilation shows a concave (scooped) pressure curve during inspiration. What does this pattern suggest?',
        choices: {
          A: 'The inspiratory flow rate is insufficient to meet patient demand',
          B: 'The patient is over-sedated and has no spontaneous effort',
          C: 'Auto-PEEP is present',
          D: 'The inspiratory time is set too long',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A concave or scooped appearance on the pressure-time waveform during pressure-controlled ventilation indicates the flow delivery is insufficient to meet the patient inspiratory demand. This pattern suggests patient effort is actively pulling the pressure below the set level, indicating flow starvation or inadequate pressure support.',
        explanationWrong:
          'An over-sedated patient with no spontaneous effort would show a smooth, square pressure waveform in pressure-controlled ventilation. Auto-PEEP would be identified on the flow-time waveform, not the pressure-time waveform shape. Excessive inspiratory time would not create a scooped pressure curve.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 16,
        questionText:
          'A patient with inhalation injury is being ventilated and develops progressive hypoxemia 48 hours post-injury. Bronchoscopy reveals cast formation and mucosal sloughing in the major airways. Which intervention is most appropriate?',
        choices: {
          A: 'High-frequency oscillatory ventilation',
          B: 'Therapeutic bronchoscopy with cast removal and nebulized heparin',
          C: 'Emergent surgical tracheostomy',
          D: 'Prone positioning',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Airway cast formation is a well-described complication of inhalation injury. Therapeutic bronchoscopy for cast removal combined with nebulized heparin (to prevent further cast formation) and nebulized N-acetylcysteine (to thin secretions) is the standard treatment approach for this complication.',
        explanationWrong:
          'High-frequency oscillatory ventilation may be considered for refractory hypoxemia but does not address the obstructive cast formation. Emergent tracheostomy is not indicated for cast management. Prone positioning improves oxygenation through alveolar recruitment but does not clear airway casts.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 17,
        questionText:
          'A patient with severe COPD exacerbation is intubated and mechanically ventilated. The respiratory therapist measures auto-PEEP of 12 cmH2O. Which ventilator adjustment would best reduce auto-PEEP?',
        choices: {
          A: 'Increase the respiratory rate from 14 to 20 breaths per minute',
          B: 'Increase the tidal volume from 6 to 8 mL/kg IBW',
          C: 'Decrease the inspiratory time to increase expiratory time',
          D: 'Increase the set PEEP to match the auto-PEEP level',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Reducing inspiratory time (by increasing inspiratory flow rate in volume control or decreasing set inspiratory time in pressure control) allows more time for exhalation, which is the primary strategy to reduce auto-PEEP. Longer expiratory times allow more complete emptying of gas-trapped alveoli.',
        explanationWrong:
          'Increasing respiratory rate would shorten the total cycle time and reduce expiratory time, worsening auto-PEEP. Increasing tidal volume would increase the volume that must be exhaled, also worsening auto-PEEP. Setting applied PEEP to match auto-PEEP reduces triggering effort but does not actually reduce the auto-PEEP itself.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 18,
        questionText:
          'In an ICU quality improvement initiative, the respiratory care department tracks ventilator liberation rates. Which metric best represents timely ventilator liberation?',
        choices: {
          A: 'Percentage of patients who pass a spontaneous breathing trial within 24 hours of meeting readiness criteria',
          B: 'Total number of ventilator days per month',
          C: 'Average tidal volume delivered across all ventilated patients',
          D: 'Number of unplanned extubations per quarter',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The percentage of patients who undergo a spontaneous breathing trial (SBT) within 24 hours of meeting readiness criteria is a process metric that directly measures timely ventilator liberation practices. This metric reflects adherence to evidence-based weaning protocols and identifies delays in liberation assessment.',
        explanationWrong:
          'Total ventilator days is an outcome metric but does not specifically measure the timeliness of liberation efforts. Average tidal volume is a process metric related to lung-protective ventilation, not liberation. Unplanned extubations are a safety metric, not a measure of appropriate ventilator liberation.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 19,
        questionText:
          'During the apnea test for brain death determination, which of the following findings would confirm a positive (consistent with brain death) apnea test result?',
        choices: {
          A: 'The patient takes a single agonal breath during the observation period',
          B: 'The SpO2 falls below 85% requiring test termination',
          C: 'The PaCO2 rises above 60 mmHg (or 20 mmHg above baseline) with no respiratory effort observed',
          D: 'The patient develops cardiac arrhythmias requiring test termination',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A positive apnea test (consistent with brain death) requires that the PaCO2 rises to greater than 60 mmHg or increases by more than 20 mmHg above the baseline, with no respiratory effort observed during the test period. This demonstrates the absence of brainstem-mediated respiratory drive.',
        explanationWrong:
          'Any respiratory effort, including agonal breaths, would indicate some brainstem function and would be inconsistent with brain death. If the test must be terminated due to desaturation or hemodynamic instability before the PaCO2 target is reached, the test is indeterminate, not positive, and ancillary testing may be required.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 20,
        questionText:
          'An early mobilization protocol in the ICU includes which of the following as a contraindication to active physical therapy in a mechanically ventilated patient?',
        choices: {
          A: 'Patient is on FiO2 of 0.50 with PEEP of 8 cmH2O',
          B: 'Active titration of vasopressors with unstable hemodynamics',
          C: 'Patient has a femoral arterial line in place',
          D: 'Patient is receiving continuous enteral nutrition',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Active titration of vasopressors with hemodynamic instability is a contraindication to active mobilization in the ICU. Patients must have stable hemodynamics (even if on low, stable doses of vasopressors) before engaging in active physical therapy to avoid cardiovascular decompensation.',
        explanationWrong:
          'FiO2 of 0.50 with PEEP of 8 cmH2O is within the acceptable range for mobilization in most protocols. The presence of a femoral arterial line is not an absolute contraindication and may only limit certain positions. Continuous enteral nutrition can continue during mobilization with appropriate precautions.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
    ],
  })

  // ─── EXAM 7 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q6,Q10,Q14,Q19) B=5(Q1,Q5,Q11,Q17,Q20) C=5(Q4,Q8,Q12,Q15,Q18) D=5(Q2,Q7,Q9,Q13,Q16)
  const exam7 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 7',
      examIndex: 7,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam7.id,
        questionIndex: 1,
        questionText:
          'A mechanically ventilated patient on volume-controlled ventilation with a constant (square) flow pattern shows a rising pressure-time waveform that curves sharply upward near end-inspiration. This pattern is most suggestive of:',
        choices: {
          A: 'Active patient effort during inspiration',
          B: 'Alveolar overdistension',
          C: 'An endotracheal tube cuff leak',
          D: 'Bronchospasm',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A sharp upward concavity (beaking) at the end of the pressure-time waveform during constant flow ventilation indicates alveolar overdistension. As the lung reaches its elastic limit, each additional volume increment requires disproportionately higher pressure, creating the characteristic upward bend.',
        explanationWrong:
          'Active patient effort would create a concave (scooped) appearance during early inspiration. An endotracheal tube cuff leak would show loss of volume, not pressure beaking. Bronchospasm would increase peak pressure throughout inspiration but would not create the characteristic end-inspiratory beaking pattern.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 2,
        questionText:
          'A 62-year-old patient with severe TBI is found to have diabetes insipidus with a urine output of 500 mL/hr and a serum sodium of 158 mEq/L. Which intervention is most critical?',
        choices: {
          A: 'Fluid restriction to 1 L per day',
          B: 'Normal saline bolus at 250 mL/hr',
          C: 'Hypertonic saline 3% infusion',
          D: 'Desmopressin (DDAVP) administration and hypotonic fluid replacement',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Diabetes insipidus in TBI results from damage to the hypothalamus or posterior pituitary, causing deficiency of antidiuretic hormone (ADH). Treatment requires DDAVP to replace ADH and hypotonic fluids (such as D5W or 0.45% NaCl) to correct the free water deficit and hypernatremia.',
        explanationWrong:
          'Fluid restriction would worsen the dehydration and hypernatremia. Normal saline contains sodium and would not effectively correct hypernatremia caused by free water loss. Hypertonic saline would further worsen the hypernatremia and is used to treat cerebral edema from hyponatremia, not hypernatremia.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 3,
        questionText:
          'A burn patient with suspected inhalation injury is being evaluated. Which diagnostic modality is the gold standard for confirming the presence and severity of inhalation injury?',
        choices: {
          A: 'Fiberoptic bronchoscopy',
          B: 'Chest CT scan',
          C: 'Carboxyhemoglobin level',
          D: 'Chest radiograph',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Fiberoptic bronchoscopy is the gold standard for diagnosing and grading inhalation injury. It allows direct visualization of the airway mucosa, identification of edema, erythema, carbonaceous deposits, ulceration, and mucosal necrosis. It can be performed at the bedside and guides treatment decisions.',
        explanationWrong:
          'Chest CT may show parenchymal changes but does not directly visualize airway mucosal injury. Carboxyhemoglobin level indicates carbon monoxide exposure but does not assess the degree of thermal or chemical airway injury. Chest radiographs are often normal in the early stages of inhalation injury and have low sensitivity.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 4,
        questionText:
          'A patient on mechanical ventilation after cardiac surgery develops a pleural effusion on the left side. The chest tube output has been 250 mL/hr of bloody drainage for the past 3 hours. What action is most appropriate?',
        choices: {
          A: 'Clamp the chest tube and reassess in 1 hour',
          B: 'Increase the suction on the chest tube drainage system',
          C: 'Notify the surgeon for possible re-exploration for surgical bleeding',
          D: 'Administer protamine to reverse residual heparin effect',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Chest tube output exceeding 200 mL/hr for more than 2-3 consecutive hours after cardiac surgery warrants surgical consultation for possible re-exploration. Sustained high output suggests surgical bleeding that requires direct intervention rather than conservative management.',
        explanationWrong:
          'Clamping a chest tube in the setting of active bleeding risks cardiac tamponade from blood accumulation in the pericardial or pleural space. Increasing suction does not address the source of bleeding. While protamine may be considered for heparin reversal, the volume and duration of bleeding suggest a surgical source requiring operative intervention.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 5,
        questionText:
          'A mechanically ventilated patient with COPD has auto-PEEP of 10 cmH2O. The patient is triggering the ventilator inconsistently. What is the rationale for applying external PEEP of 8 cmH2O?',
        choices: {
          A: 'External PEEP will eliminate the auto-PEEP entirely',
          B: 'External PEEP at 80% of auto-PEEP reduces the triggering effort without significantly increasing hyperinflation',
          C: 'External PEEP at any level will worsen air trapping in COPD patients',
          D: 'External PEEP replaces the need for bronchodilator therapy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In patients with auto-PEEP and expiratory flow limitation, applying external PEEP at approximately 80% of the measured auto-PEEP counterbalances the intrinsic PEEP without significantly adding to total PEEP or worsening hyperinflation. This reduces the pressure gradient the patient must generate to trigger the ventilator, improving patient-ventilator synchrony.',
        explanationWrong:
          'External PEEP does not eliminate auto-PEEP; it equilibrates with it to reduce triggering effort. In patients with expiratory flow limitation, moderate external PEEP does not worsen air trapping. External PEEP addresses triggering difficulty but does not replace bronchodilator therapy, which addresses the underlying airway obstruction.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 6,
        questionText:
          'In a critically ill patient with sepsis, immunonutrition formulas containing which of the following have been shown to potentially modulate the immune response?',
        choices: {
          A: 'Omega-3 fatty acids, glutamine, and arginine',
          B: 'Omega-6 fatty acids, taurine, and creatine',
          C: 'Medium-chain triglycerides and branched-chain amino acids',
          D: 'Saturated fatty acids, leucine, and carnitine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Immunonutrition formulas containing omega-3 fatty acids (EPA/DHA), glutamine, and arginine have been studied for their ability to modulate the inflammatory and immune response in critically ill patients. Omega-3 fatty acids reduce pro-inflammatory eicosanoid production, glutamine supports enterocyte and immune cell function, and arginine supports T-cell function.',
        explanationWrong:
          'Omega-6 fatty acids promote pro-inflammatory eicosanoid production and are not considered immunomodulatory in a beneficial sense. Medium-chain triglycerides are an energy source but are not classified as immunonutrients. Saturated fatty acids, leucine, and carnitine have roles in metabolism but are not considered immunomodulatory nutrients.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 7,
        questionText:
          'A patient with ICU-acquired weakness is being weaned from mechanical ventilation. Despite adequate gas exchange and hemodynamic stability, the patient fails repeated spontaneous breathing trials due to diaphragmatic fatigue. Which intervention may improve diaphragmatic strength?',
        choices: {
          A: 'Continuous mandatory ventilation with high tidal volumes to rest the diaphragm',
          B: 'Increasing sedation to reduce respiratory drive',
          C: 'Neuromuscular electrical stimulation of the phrenic nerve',
          D: 'Inspiratory muscle training with progressive resistance',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Inspiratory muscle training (IMT) with progressive resistance has been shown to improve diaphragmatic strength and endurance in patients with ICU-acquired diaphragmatic weakness. IMT involves having the patient breathe through a threshold device with gradually increasing resistance, similar to progressive resistance training for skeletal muscles.',
        explanationWrong:
          'Continuous mandatory ventilation with high tidal volumes promotes ventilator-induced diaphragmatic dysfunction (VIDD) through disuse atrophy. Increasing sedation would suppress respiratory drive and prevent the patient from exercising respiratory muscles. Phrenic nerve stimulation is experimental and not yet a standard clinical intervention for ICU-acquired diaphragmatic weakness.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 8,
        questionText:
          'A patient with massive hemoptysis from a right upper lobe pulmonary artery aneurysm is not a surgical candidate. Which interventional radiology procedure is the preferred definitive treatment?',
        choices: {
          A: 'Pulmonary artery stenting',
          B: 'Systemic thrombolysis',
          C: 'Bronchial artery embolization',
          D: 'Inferior vena cava filter placement',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bronchial artery embolization (BAE) is the preferred first-line interventional procedure for massive hemoptysis when surgical resection is not feasible. BAE can be performed emergently and has a success rate of 70-90% for immediate hemostasis. The bronchial arteries supply the majority of the blood flow to the airways in most cases of hemoptysis.',
        explanationWrong:
          'Pulmonary artery stenting is not a standard treatment for hemoptysis. Systemic thrombolysis would worsen bleeding and is absolutely contraindicated in active hemoptysis. IVC filter placement is used for venous thromboembolic disease prevention and has no role in hemoptysis management.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 9,
        questionText:
          'During assessment for potential organ donation, a patient meets clinical criteria for brain death. The family consents to organ donation. Which ventilator management strategy is most appropriate to optimize organ viability?',
        choices: {
          A: 'Maximize tidal volume to 12 mL/kg IBW to prevent atelectasis',
          B: 'Discontinue mechanical ventilation immediately after brain death declaration',
          C: 'Set FiO2 to 1.0 and maximize PEEP to ensure highest possible PaO2',
          D: 'Lung-protective ventilation with tidal volume 6-8 mL/kg IBW and moderate PEEP',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Lung-protective ventilation strategies (tidal volume 6-8 mL/kg IBW, PEEP 8-10 cmH2O, lowest FiO2 to maintain adequate oxygenation) are recommended for donor management to preserve lung function and increase the likelihood that lungs will be suitable for transplantation. This approach prevents ventilator-induced lung injury to the donor organs.',
        explanationWrong:
          'High tidal volumes cause ventilator-induced lung injury and may render the lungs unsuitable for transplantation. Ventilation is continued after brain death to maintain organ perfusion for donation. Maximizing FiO2 and PEEP exposes the lungs to oxygen toxicity and barotrauma, potentially damaging transplantable organs.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 10,
        questionText:
          'A patient who had an aortic valve replacement 6 hours ago develops sudden cardiac tamponade. The respiratory therapist notes elevated peak pressures, hypotension, and jugular venous distension. What is the immediate priority?',
        choices: {
          A: 'Emergent bedside re-sternotomy for pericardial decompression',
          B: 'Increase vasopressor infusion and administer a fluid bolus',
          C: 'Obtain an emergent echocardiogram to confirm the diagnosis',
          D: 'Initiate chest compressions per ACLS protocol',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In the post-cardiac surgery patient with clinical signs of cardiac tamponade (Beck triad: hypotension, muffled heart sounds, JVD), emergent bedside re-sternotomy (or subxiphoid pericardiotomy) is the definitive treatment. Post-surgical tamponade is often due to blood clot formation that cannot be drained by pericardiocentesis. Speed is critical as deterioration can be rapid.',
        explanationWrong:
          'While vasopressors and fluids provide temporary hemodynamic support, they do not address the mechanical compression of the heart. Delaying definitive treatment for echocardiographic confirmation in a hemodynamically unstable post-cardiac surgery patient with classic tamponade signs may result in cardiac arrest. Chest compressions are ineffective in tamponade and may worsen the situation.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 11,
        questionText:
          'Which ICU quality metric directly measures adherence to the sepsis resuscitation bundle?',
        choices: {
          A: 'Ventilator-associated pneumonia rate',
          B: 'Percentage of sepsis patients with lactate measured within 1 hour and repeat lactate within 6 hours if initial lactate is elevated',
          C: 'Central line-associated bloodstream infection rate',
          D: 'Average ICU length of stay',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The sepsis resuscitation bundle (SEP-1/Hour-1 bundle) includes specific time-based measures such as lactate measurement within 1 hour, blood cultures before antibiotics, broad-spectrum antibiotic administration within 1 hour, and fluid resuscitation for hypotension or lactate >=4. Tracking lactate measurement compliance directly measures bundle adherence.',
        explanationWrong:
          'VAP rate and CLABSI rate are quality metrics related to device-associated infections, not sepsis bundle compliance. Average ICU length of stay is a utilization metric that does not specifically measure sepsis care adherence.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 12,
        questionText:
          'A patient is receiving volume-controlled ventilation. The flow-volume loop shows a leftward shift of the expiratory limb compared to the previous loop. What does this change indicate?',
        choices: {
          A: 'Improved lung compliance',
          B: 'Decreased airway resistance',
          C: 'Increased airway resistance during exhalation',
          D: 'Development of a pneumothorax',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A leftward shift (decreased expiratory flow at any given volume) of the expiratory limb on the flow-volume loop indicates increased expiratory airway resistance. This may be caused by bronchospasm, secretion accumulation, or mucosal edema, all of which impede expiratory airflow.',
        explanationWrong:
          'Improved compliance would not shift the expiratory limb leftward. Decreased airway resistance would cause a rightward shift with higher flow rates. A pneumothorax would alter the overall loop shape with reduced tidal volumes, not specifically shift the expiratory limb.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 13,
        questionText:
          'A patient with severe TBI undergoes a decompressive craniectomy. Postoperatively, the ICP remains elevated at 30 mmHg. The patient is already receiving hypertonic saline and the head of bed is elevated to 30 degrees. Which additional tier-2 therapy should be considered?',
        choices: {
          A: 'Lumbar drain placement (if no contraindication)',
          B: 'Administration of systemic corticosteroids',
          C: 'Therapeutic normothermia with antipyretics only',
          D: 'Pentobarbital coma',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pentobarbital coma (barbiturate coma) is a tier-3/advanced therapy for refractory intracranial hypertension when first- and second-line treatments have failed. It reduces ICP by decreasing cerebral metabolic rate and cerebral blood flow. However, it requires continuous EEG monitoring and carries risks of hypotension and immunosuppression.',
        explanationWrong:
          'Lumbar drainage may be useful but carries herniation risk in patients with mass lesions and elevated ICP. Systemic corticosteroids are contraindicated in TBI as the CRASH trial showed increased mortality. Therapeutic normothermia (preventing fever) is a first-line measure already expected to be in place.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 14,
        questionText:
          'Which of the following is a key risk factor for the development of ICU-acquired weakness?',
        choices: {
          A: 'Prolonged immobility and use of systemic corticosteroids combined with neuromuscular blocking agents',
          B: 'Early physical therapy initiated within 48 hours of ICU admission',
          C: 'Use of propofol for sedation at standard doses',
          D: 'Intermittent pneumatic compression device use',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The combination of prolonged immobility, systemic corticosteroid use, and neuromuscular blocking agents is a well-established major risk factor for ICU-acquired weakness. Other risk factors include sepsis, multiorgan failure, hyperglycemia, and prolonged mechanical ventilation.',
        explanationWrong:
          'Early physical therapy is protective against ICU-acquired weakness, not a risk factor. Standard-dose propofol sedation is not a specific risk factor. Intermittent pneumatic compression is a DVT prophylaxis measure and does not contribute to ICU-acquired weakness.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 15,
        questionText:
          'A patient is intubated following massive hemoptysis. Bronchoscopy identifies the bleeding source as the left lower lobe. A balloon-tipped catheter is advanced into the left lower lobe bronchus. What is the purpose of this intervention?',
        choices: {
          A: 'To deliver topical antibiotics to the bleeding segment',
          B: 'To measure segmental bronchial pressures',
          C: 'To tamponade the bleeding vessel and isolate the affected segment',
          D: 'To facilitate bronchoalveolar lavage of the bleeding segment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A balloon-tipped catheter (such as a Fogarty catheter) is placed in the bleeding bronchial segment to provide direct tamponade of the bleeding vessel. Balloon inflation compresses the surrounding tissue against the bleeding source and isolates the segment, preventing blood from contaminating the remainder of the tracheobronchial tree.',
        explanationWrong:
          'Topical antibiotics are not the purpose of balloon catheter placement in hemoptysis. Measuring segmental pressures is not clinically relevant in this scenario. Bronchoalveolar lavage would be counterproductive during active hemorrhage as it would dilute and disperse blood into the surrounding lung parenchyma.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 16,
        questionText:
          'A critically ill patient with a BMI of 42 kg/m2 is admitted to the ICU. When calculating caloric needs for enteral nutrition, which weight should be used?',
        choices: {
          A: 'Actual body weight',
          B: 'Ideal body weight',
          C: 'Body weight at admission minus 10%',
          D: 'Adjusted body weight (IBW + 0.25 x [actual weight - IBW])',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For obese critically ill patients (BMI >30), adjusted body weight is recommended for calculating caloric requirements. The formula IBW + 0.25 x (actual weight - IBW) accounts for the metabolically active lean tissue in obese patients without overfeeding. This prevents the excess caloric provision that would occur with actual body weight.',
        explanationWrong:
          'Using actual body weight in obese patients leads to significant overfeeding and metabolic complications. Ideal body weight alone underestimates caloric needs as obese patients have some additional metabolically active tissue. An arbitrary 10% reduction from admission weight has no evidence-based support.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 17,
        questionText:
          'A patient requiring mechanical ventilation after CABG surgery has a chest tube in the left pleural space. The respiratory therapist notices the water seal chamber is not fluctuating (tidaling) with respiration. What is the most likely explanation?',
        choices: {
          A: 'The lung has fully re-expanded and the tube can be removed',
          B: 'The chest tube is kinked, clogged, or there is a dependent fluid collection obstructing the tube',
          C: 'The suction is set too high',
          D: 'The chest tube is in the correct position and functioning normally',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Absence of tidaling (respiratory fluctuation) in the water seal chamber most commonly indicates that the chest tube is occluded by a kink, clot, or dependent fluid loop. While lung re-expansion can also stop tidaling, obstruction must be ruled out first by checking the tubing from the patient to the collection system.',
        explanationWrong:
          'While full lung re-expansion can stop tidaling, this must be confirmed radiographically before assuming it is safe to remove the tube. High suction would not prevent tidaling; it would increase the negative pressure in the system. A properly functioning chest tube in a patient with residual pleural air or fluid should demonstrate respiratory fluctuation.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 18,
        questionText:
          'A patient with COPD exacerbation is mechanically ventilated. The ventilator is set in volume control mode with a respiratory rate of 12, tidal volume of 450 mL, inspiratory flow of 60 L/min (square waveform), and PEEP of 5 cmH2O. The I:E ratio is 1:4. Breath sounds are diminished bilaterally with scattered wheezes. Which change would most improve expiratory flow?',
        choices: {
          A: 'Increase PEEP to 10 cmH2O',
          B: 'Decrease inspiratory flow to 40 L/min',
          C: 'Administer a bronchodilator and reassess',
          D: 'Increase tidal volume to 600 mL',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Scattered wheezes indicate bronchospasm, which is the primary cause of impaired expiratory flow in this COPD patient. Bronchodilator administration (albuterol via MDI with spacer or nebulizer) directly addresses the airway obstruction by relaxing bronchial smooth muscle, improving expiratory flow and reducing air trapping.',
        explanationWrong:
          'Increasing PEEP may help with triggering but does not improve expiratory flow in the setting of bronchospasm. Decreasing inspiratory flow would shorten expiratory time and worsen air trapping. Increasing tidal volume would increase the volume requiring exhalation and worsen hyperinflation.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 19,
        questionText:
          'A burn patient with 60% TBSA burns is being resuscitated using the Parkland formula. The patient weighs 80 kg. What is the total crystalloid volume to be administered in the first 24 hours?',
        choices: {
          A: '19,200 mL of lactated Ringer solution with half given in the first 8 hours',
          B: '9,600 mL of normal saline with half given in the first 8 hours',
          C: '4,800 mL of lactated Ringer solution with half given in the first 8 hours',
          D: '19,200 mL of normal saline given evenly over 24 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Parkland formula calculates fluid resuscitation as 4 mL x body weight (kg) x %TBSA burned. For this patient: 4 x 80 x 60 = 19,200 mL of lactated Ringer solution. Half of this volume (9,600 mL) is given in the first 8 hours from the time of burn, and the remaining half over the next 16 hours.',
        explanationWrong:
          'The Parkland formula uses lactated Ringer solution, not normal saline. The calculated volume is 19,200 mL, not 9,600 or 4,800 mL. The fluid is not given evenly over 24 hours; half is given in the first 8 hours to address the rapid fluid shifts that occur in the acute burn phase.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 20,
        questionText:
          'The Surgical ICU implements a daily checklist for mechanically ventilated patients. Which combination of daily assessments best reflects evidence-based bundle compliance?',
        choices: {
          A: 'Daily arterial blood gas, chest X-ray, and bronchoscopy',
          B: 'Sedation vacation assessment, spontaneous breathing trial readiness, DVT prophylaxis verification, and stress ulcer prophylaxis check',
          C: 'Pulmonary artery catheter calibration, mixed venous saturation check, and urine electrolyte panel',
          D: 'Bronchodilator administration, sputum culture, and endotracheal tube cuff pressure measurement',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Evidence-based ICU bundles for mechanically ventilated patients include daily sedation interruption (sedation vacation), spontaneous breathing trial readiness assessment, DVT prophylaxis, stress ulcer prophylaxis, and head of bed elevation. These components have demonstrated reduced ventilator days, VAP rates, and ICU mortality when implemented consistently.',
        explanationWrong:
          'Daily bronchoscopy is not a standard bundle element. Pulmonary artery catheter calibration and mixed venous saturation checks are specific hemodynamic monitoring tasks, not part of a general ventilator care bundle. Routine sputum cultures are not recommended as bundle components.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
    ],
  })

  // ─── EXAM 8 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q7,Q13,Q16,Q20) B=5(Q4,Q6,Q10,Q14,Q18) C=5(Q1,Q5,Q9,Q15,Q19) D=5(Q3,Q8,Q11,Q12,Q17)
  const exam8 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 8',
      examIndex: 8,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam8.id,
        questionIndex: 1,
        questionText:
          'A patient on pressure support ventilation has a flow-time waveform showing that inspiratory flow decreases to a cycle-off threshold of 25% of peak flow, but the patient appears to be actively exhaling before the ventilator cycles to expiration. Which adjustment would improve synchrony?',
        choices: {
          A: 'Decrease the pressure support level',
          B: 'Increase the rise time',
          C: 'Increase the cycle-off threshold (e.g., to 40-50% of peak flow)',
          D: 'Add a mandatory backup rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'If the patient is actively exhaling before the ventilator cycles off, the inspiratory time is too long. Increasing the cycle-off threshold (expiratory trigger sensitivity) from 25% to 40-50% of peak flow will cause the ventilator to terminate the breath earlier, better matching the patient neural inspiratory time and improving patient-ventilator synchrony.',
        explanationWrong:
          'Decreasing pressure support would reduce the level of support but not directly address the timing mismatch. Increasing rise time would slow the initial flow delivery but not affect breath termination. A mandatory backup rate does not address the cycling issue in pressure support ventilation.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 2,
        questionText:
          'A patient with severe TBI has an external ventricular drain (EVD) in place. The ICP is 22 mmHg. The nurse reports the EVD has been draining 15 mL/hr of clear CSF. Suddenly the ICP rises to 35 mmHg. What should be assessed first?',
        choices: {
          A: 'Check the EVD system for obstruction, kinks, or incorrect height of the drainage chamber',
          B: 'Administer an immediate bolus of mannitol 1 g/kg',
          C: 'Request an emergent CT scan of the head',
          D: 'Increase the drainage level to allow more CSF outflow',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sudden rise in ICP with an EVD in place should first prompt assessment of the drainage system for mechanical problems such as kinked tubing, clotted catheter, closed stopcocks, or incorrect height of the drainage chamber. These are the most common and rapidly reversible causes of sudden ICP elevation in a patient with an EVD.',
        explanationWrong:
          'While mannitol may be needed, troubleshooting the EVD system is faster and may immediately resolve the problem. A CT scan is important but should not delay assessment of the most common cause. Increasing the drainage level (lowering the drip chamber) should be done after verifying the system is patent and functioning properly.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 3,
        questionText:
          'A patient with a 30% TBSA burn develops acute respiratory distress 5 days post-injury. The chest radiograph shows bilateral infiltrates. The P/F ratio is 145. Which condition must be differentiated from ARDS in this burn patient?',
        choices: {
          A: 'Cardiogenic pulmonary edema from fluid overload during resuscitation',
          B: 'Delayed inhalation injury',
          C: 'Pneumonia',
          D: 'All of the above must be considered in the differential diagnosis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In burn patients developing respiratory failure days after injury, multiple etiologies must be considered: fluid overload from aggressive resuscitation causing cardiogenic pulmonary edema, delayed presentation of inhalation injury, hospital-acquired pneumonia (burn patients are highly susceptible), and ARDS from systemic inflammation. Each requires different management and must be differentiated.',
        explanationWrong:
          'While each individual answer is partially correct, all three conditions (and ARDS itself) must be considered in the differential diagnosis. Burn patients are at risk for all of these complications, and treatment differs significantly for each. A comprehensive evaluation including echocardiography, bronchoscopy, and cultures is warranted.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 4,
        questionText:
          'A patient who is a potential lung donor has a PaO2 of 280 mmHg on FiO2 1.0 and PEEP 5 cmH2O. The organ procurement organization recommends donor lung management. Which strategy would most likely improve the donor P/F ratio for lung transplant eligibility?',
        choices: {
          A: 'Increase tidal volume to 10 mL/kg to recruit atelectatic lung',
          B: 'Perform recruitment maneuvers and optimize PEEP while maintaining lung-protective tidal volumes',
          C: 'Administer systemic corticosteroids to reduce pulmonary inflammation',
          D: 'Perform bilateral chest tube placement prophylactically',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Recruitment maneuvers (sustained inflation or incremental PEEP titration) combined with optimized PEEP and lung-protective tidal volumes can improve oxygenation in the donor lungs. This approach has been shown to increase the number of lungs suitable for transplantation. The goal is to achieve a P/F ratio of at least 300 on FiO2 1.0 and PEEP 5 cmH2O.',
        explanationWrong:
          'High tidal volumes cause ventilator-induced lung injury and reduce lung transplant suitability. Systemic corticosteroids may be used in donor management protocols but alone do not address atelectasis. Prophylactic bilateral chest tubes are not standard donor management practice.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 5,
        questionText:
          'A COPD patient in the ICU is being weaned from mechanical ventilation. Which weaning parameter most reliably predicts successful extubation in COPD patients?',
        choices: {
          A: 'Maximum inspiratory pressure (MIP) more negative than -20 cmH2O',
          B: 'Minute ventilation less than 10 L/min',
          C: 'Rapid shallow breathing index (f/VT) less than 105 breaths/min/L',
          D: 'PaCO2 less than 40 mmHg on the current ventilator settings',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The rapid shallow breathing index (RSBI, frequency/tidal volume ratio) less than 105 breaths/min/L is the most widely validated and reliable weaning predictor. It integrates respiratory rate and tidal volume to reflect the patient ability to sustain adequate ventilation without excessive work of breathing. It has high sensitivity for predicting weaning success.',
        explanationWrong:
          'MIP more negative than -20 cmH2O assesses inspiratory muscle strength but is effort-dependent and less reliable as a standalone predictor. Minute ventilation less than 10 L/min does not account for breathing pattern. COPD patients may have chronically elevated PaCO2, so targeting a PaCO2 below 40 mmHg may be unrealistic and inappropriate.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 6,
        questionText:
          'A critically ill patient on enteral nutrition develops a gastric residual volume (GRV) of 350 mL. According to current evidence-based guidelines, what is the most appropriate action?',
        choices: {
          A: 'Hold enteral feeding for 24 hours and reassess',
          B: 'Continue enteral feeding and administer a prokinetic agent if GRV remains consistently elevated above 500 mL',
          C: 'Switch to parenteral nutrition immediately',
          D: 'Reduce the feeding rate by 50% and add a PPI',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current guidelines from ASPEN/SCCM recommend that enteral feeding should not be held for gastric residual volumes less than 500 mL in the absence of other signs of intolerance (vomiting, abdominal distension, regurgitation). A prokinetic agent such as metoclopramide or erythromycin may be used if GRV is persistently elevated above 500 mL.',
        explanationWrong:
          'Holding feeds for a GRV of 350 mL is overly conservative and leads to underfeeding. A GRV of 350 mL is below the threshold that warrants holding feedings. Switching to parenteral nutrition is premature and not indicated for this level of gastric residual. There is no evidence to support reducing the feeding rate by 50% for this GRV.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 7,
        questionText:
          'During volume-controlled ventilation, the pressure-time waveform shows a progressive increase in both peak and plateau pressures over the past 6 hours. The difference between peak and plateau pressure remains constant at 8 cmH2O. Which condition is most likely developing?',
        choices: {
          A: 'Decreasing lung compliance (e.g., worsening pneumonia, pulmonary edema, or ARDS)',
          B: 'Increasing airway resistance',
          C: 'Patient-ventilator dyssynchrony',
          D: 'Endotracheal tube migration into a mainstem bronchus',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When both peak and plateau pressures rise proportionally (constant difference between them), the problem is decreased lung or chest wall compliance, not increased airway resistance. The constant gap indicates that resistive pressure is unchanged. Progressive decrease in compliance can be caused by worsening pneumonia, pulmonary edema, ARDS, pleural effusion, or abdominal compartment syndrome.',
        explanationWrong:
          'Increasing airway resistance would widen the gap between peak and plateau pressure. Patient-ventilator dyssynchrony would cause irregular pressure waveform patterns. Mainstem intubation would cause an acute change rather than a gradual progression, though it would also reduce compliance of the ventilated lung.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 8,
        questionText:
          'A patient with ICU-acquired weakness undergoes early mobilization. The physical therapy team reports the patient can sit on the edge of the bed but cannot stand. On the Medical Research Council (MRC) sum score, the patient scores 36 out of 60. How is this interpreted?',
        choices: {
          A: 'Normal strength; the patient should be progressed to ambulation immediately',
          B: 'Mild weakness; continue current activity level',
          C: 'Severe weakness that does not meet the threshold for ICU-acquired weakness',
          D: 'Significant ICU-acquired weakness requiring continued progressive mobilization',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The MRC sum score evaluates strength in 6 bilateral muscle groups (score 0-5 each, maximum 60). An MRC sum score less than 48 is diagnostic of ICU-acquired weakness, and scores below 36 indicate severe weakness. A score of 36 confirms significant ICU-acquired weakness and supports continued progressive mobilization with appropriate levels of physical therapy.',
        explanationWrong:
          'A score of 36 out of 60 is well below the normal range and below the diagnostic threshold of 48 for ICU-acquired weakness. This is not mild weakness, and the patient should not be pushed to ambulation without progressive strengthening. The score does meet the criteria for ICU-acquired weakness (less than 48).',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 9,
        questionText:
          'A patient with hemoptysis of unknown etiology undergoes CT angiography of the chest. The study reveals hypertrophied bronchial arteries arising from the descending aorta at the T5-T6 level. This finding is most significant because:',
        choices: {
          A: 'It confirms the diagnosis of pulmonary embolism as the cause of hemoptysis',
          B: 'It indicates the hemoptysis is of pulmonary arterial origin',
          C: 'It identifies the bronchial arteries as the likely bleeding source and guides bronchial artery embolization',
          D: 'It rules out malignancy as the cause of hemoptysis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hypertrophied bronchial arteries on CT angiography are the most common source of significant hemoptysis, accounting for approximately 90% of cases. Identification of enlarged, tortuous bronchial arteries at their typical origin from the descending aorta at T5-T6 provides a roadmap for interventional radiologists to perform targeted bronchial artery embolization.',
        explanationWrong:
          'Hypertrophied bronchial arteries are not a feature of pulmonary embolism. Bronchial arteries are part of the systemic circulation, not the pulmonary arterial system. The finding identifies the bleeding source but does not determine the underlying etiology, which could include bronchiectasis, tuberculosis, or malignancy.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 10,
        questionText:
          'Following mitral valve replacement, a patient develops atrial fibrillation with a rapid ventricular response of 150 beats/min. Blood pressure is 95/60 mmHg. Which medication is the first-line treatment?',
        choices: {
          A: 'Digoxin 0.5 mg IV loading dose',
          B: 'Amiodarone 150 mg IV bolus followed by continuous infusion',
          C: 'Metoprolol 5 mg IV push',
          D: 'Diltiazem 20 mg IV bolus',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Amiodarone is the preferred antiarrhythmic for post-cardiac surgery atrial fibrillation, especially in hemodynamically compromised patients. It provides rate control and has the potential for rhythm conversion with less negative inotropic effect compared to other antiarrhythmic agents. The standard loading dose is 150 mg IV over 10 minutes followed by a maintenance infusion.',
        explanationWrong:
          'Digoxin has a slow onset of action and is not appropriate for acute rate control in a hemodynamically unstable patient. Beta-blockers (metoprolol) and calcium channel blockers (diltiazem) have significant negative inotropic effects and may worsen hypotension in post-surgical patients with borderline hemodynamics.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 11,
        questionText:
          'During brain death evaluation, the physician performs the cold caloric (oculovestibular) test. Ice water is instilled into the external auditory canal. In a patient who is brain dead, what response is expected?',
        choices: {
          A: 'Nystagmus with the fast component toward the stimulated ear',
          B: 'Tonic deviation of the eyes toward the stimulated ear',
          C: 'Nystagmus with the fast component away from the stimulated ear',
          D: 'No eye movement',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In brain death, there is no response to cold caloric testing. The oculovestibular reflex is a brainstem-mediated reflex that requires intact brainstem pathways from the vestibular nucleus to the oculomotor nuclei. Complete absence of eye movement after cold water instillation in both ears is consistent with brain death.',
        explanationWrong:
          'Nystagmus (fast component away from the cold stimulus) is the normal conscious response. Tonic deviation toward the cold stimulus is seen in comatose patients with intact brainstem but absent cortical function. Any eye movement in response to cold caloric testing indicates some brainstem function and is inconsistent with brain death.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 12,
        questionText:
          'An ICU tracks its catheter-related bloodstream infection (CRBSI) rate. The unit had 1,200 central line-days last quarter and 3 confirmed CRBSI events. What is the CRBSI rate per 1,000 catheter-days?',
        choices: {
          A: '0.25 per 1,000 catheter-days',
          B: '3.6 per 1,000 catheter-days',
          C: '0.4 per 1,000 catheter-days',
          D: '2.5 per 1,000 catheter-days',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The CRBSI rate is calculated as (number of infections / number of device-days) x 1,000. In this case: (3 / 1,200) x 1,000 = 2.5 per 1,000 catheter-days. This standardized rate allows comparison across units and facilities and is a key quality metric reported to the National Healthcare Safety Network (NHSN).',
        explanationWrong:
          'The calculation requires dividing the number of infections by the number of device-days and multiplying by 1,000. The other values represent incorrect calculations: 0.25 divides by 12,000; 3.6 and 0.4 do not use the correct formula. The standard formula is consistently (infections / device-days) x 1,000.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 13,
        questionText:
          'A patient with severe TBI and elevated ICP is being treated with osmotic therapy. Serum osmolality is 315 mOsm/kg, and the serum sodium is 152 mEq/L. The ICP remains at 28 mmHg. Which statement is most accurate regarding further osmotic therapy?',
        choices: {
          A: 'Hypertonic saline (23.4%) may still be administered as the upper serum sodium limit for hypertonic saline therapy is generally 155-160 mEq/L',
          B: 'Mannitol should be administered as it is safer than hypertonic saline at high serum osmolality',
          C: 'Both mannitol and hypertonic saline are contraindicated at this serum osmolality',
          D: 'Serum osmolality is irrelevant when treating elevated ICP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Hypertonic saline can generally be used up to a serum sodium of 155-160 mEq/L, as the osmotic effect is driven by the sodium gradient. The current sodium of 152 mEq/L still allows for additional hypertonic saline administration. In contrast, mannitol is generally withheld when serum osmolality exceeds 320 mOsm/kg due to the risk of renal failure.',
        explanationWrong:
          'Mannitol is actually more dangerous at high serum osmolality (>320 mOsm/kg) due to nephrotoxicity risk. Both agents are not equally contraindicated; hypertonic saline has a higher ceiling for safe use than mannitol. Serum osmolality is a critical safety parameter that must be monitored during osmotic therapy.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 14,
        questionText:
          'A patient with a severe COPD exacerbation is mechanically ventilated. The respiratory therapist uses the expiratory hold maneuver and measures a total PEEP of 14 cmH2O with set PEEP of 5 cmH2O. The auto-PEEP is therefore 9 cmH2O. Which hemodynamic consequence is most directly caused by this level of auto-PEEP?',
        choices: {
          A: 'Increased left ventricular afterload',
          B: 'Decreased venous return and reduced cardiac output',
          C: 'Increased renal perfusion pressure',
          D: 'Enhanced right ventricular contractility',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Auto-PEEP creates elevated intrathoracic pressure that impedes venous return to the right side of the heart. This reduced preload leads to decreased right ventricular filling, decreased pulmonary blood flow, and ultimately reduced left ventricular output and cardiac output. This hemodynamic compromise can manifest as hypotension, especially in hypovolemic patients.',
        explanationWrong:
          'Auto-PEEP primarily affects preload (venous return), not left ventricular afterload. Decreased cardiac output from auto-PEEP reduces renal perfusion pressure rather than increasing it. Auto-PEEP increases right ventricular afterload through pulmonary vascular compression, which impairs rather than enhances right ventricular function.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 15,
        questionText:
          'A critically ill patient on parenteral nutrition develops elevated serum triglyceride levels of 450 mg/dL. What is the most appropriate action regarding the lipid component of the parenteral nutrition?',
        choices: {
          A: 'Continue the current lipid infusion rate and recheck in 1 week',
          B: 'Double the lipid infusion rate to provide additional calories',
          C: 'Reduce or temporarily hold the lipid infusion and recheck triglyceride levels in 24-48 hours',
          D: 'Switch from parenteral to enteral nutrition immediately',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Serum triglyceride levels above 400 mg/dL indicate impaired lipid clearance and warrant reducing or temporarily holding the intravenous lipid emulsion. Elevated triglycerides during parenteral nutrition can lead to pancreatitis, hepatic steatosis, and impaired immune function. Levels should be rechecked in 24-48 hours before resuming or modifying the lipid dose.',
        explanationWrong:
          'Continuing the same rate ignores the significant hypertriglyceridemia. Doubling the lipid rate would exacerbate the problem. While transitioning to enteral nutrition is a goal, it may not be feasible immediately, and the acute issue of hypertriglyceridemia must be addressed by modifying the parenteral lipid component.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 16,
        questionText:
          'A burn patient with circumferential full-thickness burns to the chest develops progressive difficulty with ventilation. Peak pressures have risen from 25 to 55 cmH2O, and tidal volumes are decreasing despite increased pressure settings. SpO2 is falling. What is the most urgent intervention?',
        choices: {
          A: 'Escharotomy of the chest wall',
          B: 'Increase FiO2 to 1.0 and add maximum PEEP',
          C: 'Emergency cricothyrotomy',
          D: 'Administer systemic corticosteroids',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Circumferential full-thickness chest burns create a rigid, non-compliant eschar that restricts chest wall expansion, resulting in restrictive ventilatory failure. Escharotomy (surgical release of the burned eschar) is the definitive emergency treatment to restore chest wall compliance and adequate ventilation.',
        explanationWrong:
          'Increasing FiO2 and PEEP does not address the mechanical restriction caused by the eschar. The airway is already secured with an endotracheal tube, so cricothyrotomy is not indicated. Corticosteroids do not address the mechanical restriction of the chest wall and are not indicated in this scenario.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 17,
        questionText:
          'A patient with a tracheostomy placed 14 days ago in the ICU is being evaluated for decannulation. Which criterion must be met before removing the tracheostomy tube?',
        choices: {
          A: 'The patient must have a PaCO2 less than 35 mmHg',
          B: 'The patient must be able to tolerate at least 48 hours without mechanical ventilation',
          C: 'The patient must have a maximum inspiratory pressure greater than -40 cmH2O',
          D: 'The patient must tolerate tracheostomy tube capping for 24-48 hours while maintaining adequate oxygenation, ventilation, and airway clearance',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Before tracheostomy decannulation, the patient must demonstrate the ability to breathe through the upper airway with the tracheostomy tube capped for 24-48 hours. This confirms upper airway patency, adequate swallowing reflexes, effective cough and secretion management, and sufficient respiratory reserve. Additional assessments may include a cuff-leak test and fiberoptic evaluation of the upper airway.',
        explanationWrong:
          'PaCO2 less than 35 mmHg is not a specific decannulation criterion. Being off the ventilator alone does not ensure the patient can breathe safely without the tracheostomy. MIP greater than -40 cmH2O is not a standard decannulation criterion. The key assessment is tolerance of tube capping, which tests the entire upper airway.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 18,
        questionText:
          'Which finding during clinical examination is NOT required for the determination of brain death?',
        choices: {
          A: 'Absence of pupillary light reflex',
          B: 'Absence of deep tendon reflexes',
          C: 'Absence of corneal reflex',
          D: 'Absence of gag reflex',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Deep tendon reflexes are spinal cord-mediated reflexes, not brainstem reflexes, and their presence or absence is not part of the brain death examination. Brain death determination requires absence of all brainstem reflexes, including pupillary, corneal, oculocephalic, oculovestibular, gag, and cough reflexes. Spinal reflexes may persist after brain death.',
        explanationWrong:
          'Absence of pupillary light reflex, corneal reflex, and gag reflex are all required brainstem reflex assessments in the brain death examination. Each tests a different cranial nerve pathway within the brainstem. Their absence confirms loss of brainstem function.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 19,
        questionText:
          'A patient with massive hemoptysis is being managed in the ICU. The patient is placed in the lateral decubitus position with the bleeding lung dependent. What is the primary rationale for this positioning?',
        choices: {
          A: 'To promote gravitational drainage of blood from the airways',
          B: 'To increase perfusion to the bleeding lung and promote clot formation',
          C: 'To protect the non-bleeding lung from aspiration of blood',
          D: 'To reduce systemic blood pressure and slow the bleeding',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Placing the bleeding lung in the dependent position uses gravity to keep blood from crossing into and aspirating into the non-bleeding (non-dependent) lung. The primary goal is to maintain gas exchange in the healthy lung by preventing blood contamination while managing the hemoptysis.',
        explanationWrong:
          'The positioning is not to promote drainage or increase perfusion to the bleeding lung. Gravity keeps blood pooled in the dependent (bleeding) lung rather than allowing it to overflow into the non-bleeding lung. The position does not significantly affect systemic blood pressure.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 20,
        questionText:
          'An ICU implements a standardized handoff communication tool for shift changes. Which framework is widely recommended for structured clinical handoffs?',
        choices: {
          A: 'I-SBAR (Introduction, Situation, Background, Assessment, Recommendation)',
          B: 'SOAP (Subjective, Objective, Assessment, Plan)',
          C: 'APACHE (Acute Physiology and Chronic Health Evaluation)',
          D: 'NEWS (National Early Warning Score)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'I-SBAR (or SBAR) is the most widely recommended structured communication framework for clinical handoffs in the ICU. It provides a standardized approach: Introduction of the patient, current Situation, relevant Background, clinical Assessment, and Recommendations for ongoing care. Studies show SBAR reduces communication errors and improves patient safety during transitions of care.',
        explanationWrong:
          'SOAP is a documentation format commonly used for charting, not specifically designed for verbal handoff communication. APACHE is a severity-of-illness scoring system, not a communication tool. NEWS is an early warning score for clinical deterioration, not a handoff framework.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
    ],
  })

  // ─── EXAM 9 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q12,Q15,Q18) B=5(Q3,Q8,Q10,Q16,Q19) C=5(Q4,Q7,Q11,Q14,Q20) D=5(Q2,Q5,Q9,Q13,Q17)
  const exam9 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 9',
      examIndex: 9,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam9.id,
        questionIndex: 1,
        questionText:
          'A mechanically ventilated patient on pressure-controlled ventilation shows a decreasing tidal volume over the past 4 hours despite unchanged pressure settings. The flow-time waveform shows that inspiratory flow is reaching zero before the set inspiratory time ends. What does this indicate?',
        choices: {
          A: 'Decreasing pulmonary compliance, causing the set pressure to be reached with less volume delivery',
          B: 'The patient is developing auto-PEEP from bronchospasm',
          C: 'The endotracheal tube has developed a significant leak',
          D: 'The ventilator is malfunctioning and not delivering the set pressure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In pressure-controlled ventilation, the ventilator delivers flow to reach and maintain the set pressure. If compliance decreases, the set pressure is reached more quickly with less volume, and the flow reaches zero earlier (flow equilibrates). The inspiratory flow reaching zero indicates pressure equilibration has occurred, but with reduced compliance, the equilibrium volume is lower.',
        explanationWrong:
          'While auto-PEEP could reduce effective driving pressure, the flow reaching zero before end-inspiration indicates adequate time for pressure equilibration. A significant leak would show flow continuing throughout inspiration without reaching zero. A ventilator malfunction would trigger alarms and show pressure not reaching the set level.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 2,
        questionText:
          'A patient with severe TBI is receiving osmotic therapy for elevated ICP. The nurse reports that serum osmolality has risen to 328 mOsm/kg. The ICP is 18 mmHg. Which action is most appropriate regarding mannitol administration?',
        choices: {
          A: 'Continue mannitol at the current dose since the ICP is controlled',
          B: 'Reduce the mannitol dose by 50% and continue monitoring',
          C: 'Increase the mannitol dose to drive the ICP below 15 mmHg',
          D: 'Hold mannitol as the serum osmolality exceeds the safe threshold of 320 mOsm/kg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Mannitol should be held when serum osmolality exceeds 320 mOsm/kg due to the increased risk of acute renal failure, electrolyte imbalances, and paradoxical worsening of cerebral edema. The ICP of 18 mmHg is within an acceptable range, and the priority is preventing osmolality-related complications.',
        explanationWrong:
          'Continuing mannitol despite a serum osmolality above 320 mOsm/kg risks nephrotoxicity. Reducing the dose still exposes the patient to an unsafe osmolality level. Increasing the dose would further raise the osmolality and is dangerous. The safe ceiling for mannitol use is generally 320 mOsm/kg.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 3,
        questionText:
          'A patient in the ICU has been on mechanical ventilation for 10 days and is receiving continuous infusion propofol and intermittent cisatracurium. The patient develops generalized weakness with areflexia. Creatine kinase (CK) levels are markedly elevated. What is the most likely diagnosis?',
        choices: {
          A: 'Propofol infusion syndrome',
          B: 'Acute steroid myopathy',
          C: 'Malignant hyperthermia',
          D: 'Prolonged neuromuscular junction blockade',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Acute steroid myopathy (also classified under critical illness myopathy) is the most likely diagnosis given the combination of neuromuscular blocking agent use, generalized weakness, areflexia, and markedly elevated CK levels. The combination of corticosteroids and NMB agents is the classic risk factor for this acute necrotizing myopathy, which involves direct muscle fiber damage reflected by the elevated CK.',
        explanationWrong:
          'Propofol infusion syndrome presents with metabolic acidosis, rhabdomyolysis, hyperlipidemia, and cardiac failure but requires very high doses (>5 mg/kg/hr) over prolonged periods and includes additional systemic features. Malignant hyperthermia presents acutely with hyperthermia, rigidity, and metabolic derangements, typically triggered by volatile anesthetics. Prolonged NMB blockade causes weakness without elevated CK and resolves as the drug is cleared.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 4,
        questionText:
          'A patient with COPD exacerbation is on mechanical ventilation. The physician orders a trial of heliox (80:20 helium-oxygen mixture). What is the primary physiologic benefit of heliox in this patient?',
        choices: {
          A: 'Heliox increases oxygen delivery to the alveoli due to its higher oxygen concentration',
          B: 'Heliox reduces airway inflammation through its anti-inflammatory properties',
          C: 'Heliox reduces turbulent airflow resistance due to its lower gas density, decreasing the work of breathing',
          D: 'Heliox increases mucociliary clearance through enhanced humidification',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Heliox (helium-oxygen mixture) has a lower density than air or nitrogen-oxygen mixtures. In obstructed airways where turbulent flow predominates, gas flow resistance is density-dependent. The lower density of heliox reduces turbulent flow resistance, decreasing airway pressure gradients and work of breathing in patients with obstructive airway disease.',
        explanationWrong:
          'An 80:20 heliox mixture actually contains less oxygen (20%) than room air, requiring monitoring for hypoxemia. Heliox has no anti-inflammatory properties; it is an inert gas. Heliox does not enhance mucociliary clearance or humidification; its benefits are purely related to gas flow dynamics.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 5,
        questionText:
          'A patient sustains a 70% TBSA burn with confirmed inhalation injury. Within 24 hours, the carboxyhemoglobin (COHb) level at admission was 25%. Which treatment is most effective for carbon monoxide poisoning?',
        choices: {
          A: 'Standard oxygen therapy via nasal cannula at 6 L/min',
          B: 'Administration of methylene blue intravenously',
          C: 'Fluid resuscitation with colloids',
          D: 'Administration of 100% oxygen via a non-rebreather mask or mechanical ventilation with FiO2 of 1.0',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Carbon monoxide has approximately 250 times greater affinity for hemoglobin than oxygen. The treatment is high-concentration oxygen (100% FiO2) which reduces the half-life of COHb from approximately 4-6 hours on room air to 60-90 minutes. In intubated patients, FiO2 of 1.0 should be administered until COHb levels normalize.',
        explanationWrong:
          'Nasal cannula at 6 L/min delivers approximately 40% oxygen, which is insufficient for CO poisoning treatment. Methylene blue is used for methemoglobinemia, not carboxyhemoglobinemia. Colloid resuscitation addresses hypovolemia from burn injury but does not treat carbon monoxide poisoning.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 6,
        questionText:
          'A critically ill patient is receiving enteral nutrition at a rate of 60 mL/hr. The patient develops diarrhea with 6 loose stools per day. Which intervention should be tried first before holding enteral nutrition?',
        choices: {
          A: 'Switch to a fiber-containing enteral formula and evaluate for Clostridioides difficile infection',
          B: 'Hold enteral feeds for 48 hours and then restart at half the previous rate',
          C: 'Switch to total parenteral nutrition',
          D: 'Administer loperamide 4 mg orally every 6 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Diarrhea in enterally fed ICU patients has multiple potential causes. Before holding nutrition, evaluate for infectious causes (C. difficile is common in ICU patients on antibiotics), medication-related causes (sorbitol-containing medications, prokinetics), and consider switching to a fiber-containing formula that adds bulk. Maintaining enteral nutrition is important for gut integrity.',
        explanationWrong:
          'Holding enteral feeds deprives the patient of necessary nutrition and may worsen gut mucosal atrophy. Switching to parenteral nutrition is premature before optimizing enteral delivery. Loperamide should not be administered until C. difficile infection has been ruled out, as antimotility agents can worsen C. difficile colitis and precipitate toxic megacolon.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 7,
        questionText:
          'A patient on volume-controlled ventilation has a pressure-volume loop that shows a widened hysteresis (large area between the inspiratory and expiratory limbs). What does this finding indicate?',
        choices: {
          A: 'Minimal work of breathing and good lung compliance',
          B: 'An endotracheal tube leak',
          C: 'Increased resistive work and/or significant alveolar recruitment during each breath',
          D: 'Optimal PEEP settings with no alveolar recruitment needed',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A widened pressure-volume loop hysteresis indicates that significant energy is being used during each breath. This can result from high resistive work (airway resistance) and/or significant tidal recruitment, where alveoli open during inspiration and collapse during expiration. The area within the loop represents the work of breathing per cycle.',
        explanationWrong:
          'A narrow hysteresis loop would suggest minimal work of breathing and good compliance. An endotracheal tube leak would show the loop not closing (expired volume less than inspired volume). Optimal PEEP with no recruitment would show a narrow loop, indicating alveoli remain open throughout the respiratory cycle.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 8,
        questionText:
          'A patient being evaluated for brain death has a core temperature of 34.5 degrees C. The physician wants to proceed with the clinical brain death examination. What is the correct course of action?',
        choices: {
          A: 'Proceed with the examination as the temperature is adequate for brain death testing',
          B: 'Warm the patient to at least 36 degrees C (96.8 degrees F) before proceeding with the examination',
          C: 'Cancel the brain death examination and declare death based on cardiac criteria instead',
          D: 'Perform the examination but document the temperature as a confounding factor',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Brain death examination requires that confounding factors be excluded before testing. Hypothermia (core temperature below 36 degrees C) can suppress brainstem reflexes and mimic brain death. The patient must be warmed to at least 36 degrees C before the clinical examination can be considered valid. This is a prerequisite, not a modifier.',
        explanationWrong:
          'Proceeding at 34.5 degrees C is inappropriate because hypothermia is a confounding factor that can suppress brainstem reflexes. Declaring cardiac death is not appropriate if brain death criteria are being evaluated. Documenting the temperature as a confounding factor does not make the examination valid; the confounding factor must be corrected first.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 9,
        questionText:
          'A patient who had a CABG and aortic valve replacement is extubated on postoperative day 1. Four hours later, the patient develops stridor and increasing respiratory distress. The SpO2 drops to 88%. What is the most likely cause and appropriate initial intervention?',
        choices: {
          A: 'Vocal cord paralysis; immediate tracheostomy',
          B: 'Bronchospasm; administer nebulized albuterol',
          C: 'Pulmonary embolism; administer heparin bolus',
          D: 'Post-extubation laryngeal edema; administer nebulized racemic epinephrine and systemic corticosteroids',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Stridor after extubation is most commonly caused by laryngeal edema, which is particularly common after cardiac surgery due to intraoperative transesophageal echocardiography use and fluid shifts. Nebulized racemic epinephrine provides rapid topical vasoconstriction to reduce mucosal edema, and systemic corticosteroids (dexamethasone) help reduce inflammation.',
        explanationWrong:
          'Vocal cord paralysis is possible after cardiac surgery but typically presents with hoarseness rather than stridor with acute desaturation. Bronchospasm causes expiratory wheezing, not inspiratory stridor. Pulmonary embolism does not cause stridor; it presents with dyspnea, tachycardia, and hypoxemia without upper airway obstruction signs.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 10,
        questionText:
          'An ICU implements a central line insertion bundle to prevent central line-associated bloodstream infections (CLABSI). Which element is a component of the insertion bundle?',
        choices: {
          A: 'Routine replacement of central lines every 7 days',
          B: 'Use of maximum sterile barrier precautions during insertion including cap, mask, sterile gown, sterile gloves, and large sterile drape',
          C: 'Use of femoral vein as the preferred insertion site',
          D: 'Prophylactic antibiotic administration before insertion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Maximum sterile barrier precautions are a core component of the central line insertion bundle. This includes wearing a cap, mask, sterile gown, and sterile gloves, and using a large sterile drape to cover the patient. Other bundle elements include hand hygiene, chlorhexidine skin antisepsis, optimal site selection (avoiding femoral when possible), and daily assessment of line necessity.',
        explanationWrong:
          'Routine replacement of central lines is not recommended and does not reduce infection rates. The femoral vein has higher infection rates and is generally avoided when subclavian or internal jugular access is feasible. Prophylactic antibiotics are not a component of the insertion bundle and may promote antibiotic resistance.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 11,
        questionText:
          'A patient with recurrent hemoptysis undergoes multidetector CT angiography. The study reveals non-bronchial systemic arterial supply to the bleeding area from an intercostal artery. Why is this finding clinically significant?',
        choices: {
          A: 'It indicates the bleeding is venous in origin and will stop spontaneously',
          B: 'It confirms the patient has pulmonary arteriovenous malformation',
          C: 'Non-bronchial systemic collaterals must also be embolized to prevent recurrent hemoptysis after bronchial artery embolization',
          D: 'It rules out the need for bronchial artery embolization',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Non-bronchial systemic arterial collaterals (from intercostal, internal mammary, subclavian, or phrenic arteries) can supply blood to areas of lung pathology and serve as alternative bleeding sources. If only the bronchial arteries are embolized while non-bronchial collaterals remain, hemoptysis recurrence rates are high. Complete embolization of all contributing vessels is essential.',
        explanationWrong:
          'The finding indicates arterial (not venous) collateral supply. It does not confirm arteriovenous malformation; collateral vessels develop in response to chronic inflammation or vascular disease. Bronchial artery embolization is still needed; the finding adds the requirement to also embolize non-bronchial feeders.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 12,
        questionText:
          'A patient with ICU-acquired weakness is receiving early mobilization. The physical therapist reports the patient can perform active range-of-motion exercises in bed but becomes tachycardic (HR 140) and hypotensive (BP 80/50) when tilted to 60 degrees. What is the most appropriate response?',
        choices: {
          A: 'Return the patient to supine position, allow recovery, and attempt a more gradual tilt progression at the next session',
          B: 'Continue the tilt to build cardiovascular tolerance',
          C: 'Discontinue all mobilization for the next 72 hours',
          D: 'Administer a vasopressor bolus and continue the tilt',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Orthostatic intolerance during progressive mobilization is common in ICU patients due to deconditioning, autonomic dysfunction, and hypovolemia. The appropriate response is to return the patient to supine, allow hemodynamic recovery, and at the next session attempt a more gradual progression (e.g., 30-degree tilt first). Mobilization should not be abandoned but adapted.',
        explanationWrong:
          'Continuing the tilt despite significant hemodynamic instability (HR 140, BP 80/50) risks cardiovascular collapse. Discontinuing all mobilization for 72 hours delays recovery and worsens deconditioning. Administering a vasopressor bolus solely to continue a mobilization session is not an appropriate use of vasopressors.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 13,
        questionText:
          'A COPD patient on mechanical ventilation is being assessed for readiness for a spontaneous breathing trial (SBT). Which criterion must be met before initiating an SBT?',
        choices: {
          A: 'PaCO2 must be within normal limits (35-45 mmHg)',
          B: 'The patient must be on zero PEEP',
          C: 'The patient must not require any supplemental oxygen',
          D: 'The patient must be able to initiate spontaneous breaths, have adequate oxygenation on FiO2 <=0.50, have stable hemodynamics, and be alert enough to protect the airway',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Standard SBT readiness criteria include: resolution or improvement of the underlying cause of respiratory failure, adequate oxygenation (PaO2/FiO2 >=150 or SpO2 >=90% on FiO2 <=0.50 and PEEP <=8), hemodynamic stability without significant vasopressor support, ability to initiate spontaneous breaths, and adequate mental status to protect the airway.',
        explanationWrong:
          'COPD patients may have chronically elevated PaCO2, so normal PaCO2 is not required for SBT readiness. Patients do not need to be on zero PEEP; mild PEEP (5-8 cmH2O) is acceptable. Patients can require some supplemental oxygen (up to FiO2 0.50) and still be candidates for an SBT.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 14,
        questionText:
          'A critically ill patient receiving enteral nutrition is found to have a serum prealbumin level of 8 mg/dL (normal 20-40 mg/dL). How should this result be interpreted?',
        choices: {
          A: 'It confirms adequate nutritional status',
          B: 'It is a reliable indicator of protein-calorie malnutrition in isolation',
          C: 'It reflects both nutritional status and the acute phase inflammatory response, and should be interpreted in the context of C-reactive protein levels',
          D: 'It indicates the patient is receiving too many calories',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Prealbumin (transthyretin) is a negative acute phase reactant that decreases during inflammation regardless of nutritional status. In critically ill patients, low prealbumin often reflects the severity of the inflammatory response rather than true malnutrition. Interpreting prealbumin in conjunction with CRP (a positive acute phase reactant) helps distinguish inflammation-related decreases from true nutritional deficiency.',
        explanationWrong:
          'A prealbumin of 8 mg/dL is significantly below normal and does not indicate adequate nutrition. Using prealbumin alone as an indicator of malnutrition in critical illness is unreliable due to the inflammatory confound. A low prealbumin does not indicate excessive caloric intake.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 15,
        questionText:
          'A patient with severe TBI is being monitored with a parenchymal ICP monitor and brain tissue oxygen monitor (PbtO2). The ICP is 15 mmHg and the PbtO2 is 12 mmHg (normal >20 mmHg). What does this finding suggest?',
        choices: {
          A: 'Regional cerebral hypoxia is present despite acceptable ICP, and interventions to improve brain oxygenation should be considered',
          B: 'The ICP monitor is malfunctioning and should be replaced',
          C: 'The PbtO2 value is within normal limits and no intervention is needed',
          D: 'The patient has global cerebral hyperoxia requiring FiO2 reduction',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A PbtO2 below 20 mmHg indicates regional cerebral hypoxia, and values below 15 mmHg are associated with worse outcomes. This can occur even when ICP is controlled, indicating that ICP alone does not capture all aspects of secondary brain injury. Interventions include optimizing CPP, increasing FiO2, transfusion if anemic, and treating fever.',
        explanationWrong:
          'A normal ICP with low PbtO2 does not indicate monitor malfunction; they measure different parameters. PbtO2 of 12 mmHg is below the normal threshold of 20 mmHg. The finding indicates hypoxia, not hyperoxia.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 16,
        questionText:
          'A ventilator flow-time waveform in volume control ventilation shows a decelerating flow pattern rather than the set square (constant) flow pattern. Which of the following is the most likely cause?',
        choices: {
          A: 'The ventilator is malfunctioning',
          B: 'The ventilator is automatically switching to a pressure-regulated mode due to high airway pressure alarm activation',
          C: 'The patient has increased airway resistance',
          D: 'The endotracheal tube has migrated into the right mainstem bronchus',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Many modern ventilators have pressure-regulation features (e.g., PRVC - Pressure Regulated Volume Control) that automatically switch from constant flow to decelerating flow when airway pressures approach alarm limits. The ventilator adjusts the flow pattern to deliver the target volume while limiting pressure, resulting in a decelerating rather than square flow pattern.',
        explanationWrong:
          'A consistent pattern change from square to decelerating flow is not indicative of random malfunction. Increased airway resistance would increase peak pressure but not change the waveform pattern from square to decelerating in true volume control. Mainstem intubation would increase peak and plateau pressures but not alter the flow pattern in true volume control mode.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 17,
        questionText:
          'During organ donor management, the potential donor develops polyuria (urine output >300 mL/hr), serum sodium rises to 155 mEq/L, and urine specific gravity is 1.002. Which medication should be administered?',
        choices: {
          A: 'Furosemide 40 mg IV to maintain urine output',
          B: 'Normal saline at 200 mL/hr',
          C: 'Hypertonic saline 3% infusion',
          D: 'DDAVP (desmopressin) 1-2 mcg IV',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The clinical picture of polyuria with dilute urine (low specific gravity 1.002), rising serum sodium, and high urine output is classic for diabetes insipidus (DI), which commonly occurs in brain-dead patients due to loss of hypothalamic-pituitary function. DDAVP replaces the absent ADH and controls the diabetes insipidus to maintain hemodynamic stability and electrolyte balance for organ preservation.',
        explanationWrong:
          'Furosemide would worsen the polyuria and hypernatremia. Normal saline provides sodium and would not correct the hypernatremia; hypotonic fluids are needed for free water replacement along with DDAVP. Hypertonic saline would dramatically worsen the hypernatremia and is contraindicated.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 18,
        questionText:
          'A burn patient with 45% TBSA burns and inhalation injury develops ARDS on day 3. The patient requires high ventilator settings (FiO2 0.80, PEEP 16). What unique challenge does the burn injury pose for ventilator management in ARDS?',
        choices: {
          A: 'Massive fluid resuscitation required for burns worsens pulmonary edema, complicating ARDS management and often requiring higher PEEP and careful fluid balance',
          B: 'Burn patients should receive tidal volumes of 10-12 mL/kg IBW to compensate for increased metabolic demands',
          C: 'High-dose corticosteroids should be administered to reduce pulmonary inflammation in burn ARDS',
          D: 'Burn patients with ARDS should be managed with permissive hyperoxia (FiO2 1.0) to support wound healing',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Burn resuscitation requires massive crystalloid volumes (Parkland formula: 4 mL/kg x %TBSA), which significantly increases pulmonary edema and complicates ARDS management. The combination of third-spacing from burn capillary leak, obligatory fluid loading, and ARDS-related pulmonary vascular permeability creates a unique challenge requiring higher PEEP to maintain recruitment while carefully monitoring fluid balance to avoid worsening lung water.',
        explanationWrong:
          'Burn patients should still receive lung-protective tidal volumes of 6 mL/kg IBW; increased metabolic demands do not justify higher tidal volumes as this increases ventilator-induced lung injury. High-dose corticosteroids are not recommended in burn ARDS as they impair wound healing and increase infection risk. Permissive hyperoxia is not recommended; oxygen toxicity is a concern and FiO2 should be minimized to the lowest level maintaining adequate oxygenation.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 19,
        questionText:
          'A mechanically ventilated ICU patient develops ventilator-associated pneumonia (VAP). According to the NHSN definition, which criterion is required for VAP diagnosis?',
        choices: {
          A: 'Positive endotracheal aspirate culture with any organism',
          B: 'New or progressive radiographic infiltrate after at least 2 calendar days of mechanical ventilation, combined with clinical signs of infection (fever, purulent secretions, leukocytosis)',
          C: 'Elevated procalcitonin level above 0.5 ng/mL',
          D: 'Positive blood cultures drawn after 48 hours of mechanical ventilation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The NHSN surveillance definition for VAP requires a new or progressive radiographic infiltrate developing after at least 2 calendar days of mechanical ventilation (with day of intubation being day 1), combined with clinical indicators such as fever (>38 degrees C), purulent secretions, leukocytosis or leukopenia, and worsening oxygenation.',
        explanationWrong:
          'A positive endotracheal aspirate alone does not diagnose VAP as colonization is common in ventilated patients. Procalcitonin may support the diagnosis but is not part of the NHSN surveillance definition. Positive blood cultures may indicate bacteremia but are not specific to VAP and are not part of the NHSN VAP definition.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 20,
        questionText:
          'A patient with post-cardiac arrest syndrome undergoes targeted temperature management (TTM) at 33 degrees C. The respiratory therapist notes that the ABG analyzer reports a PaCO2 of 42 mmHg at 37 degrees C. Using temperature-corrected values, what happens to the actual PaCO2 at the patient temperature of 33 degrees C?',
        choices: {
          A: 'The actual PaCO2 at 33 degrees C is higher than the reported value at 37 degrees C',
          B: 'The actual PaCO2 at 33 degrees C is unchanged from the reported value',
          C: 'The actual PaCO2 at 33 degrees C is lower than the reported value at 37 degrees C because CO2 is more soluble at lower temperatures',
          D: 'Temperature correction has no clinical relevance in targeted temperature management',
        },
        correctChoice: 'C',
        explanationCorrect:
          'At lower body temperatures, CO2 is more soluble in blood, resulting in a lower actual PaCO2 at 33 degrees C than the value reported by the ABG analyzer at 37 degrees C. For each degree C decrease in temperature, PaCO2 decreases by approximately 4.5%. The temperature-corrected PaCO2 would be approximately 35 mmHg. Whether to use corrected or uncorrected values (alpha-stat vs. pH-stat management) remains debated.',
        explanationWrong:
          'The actual PaCO2 at lower temperatures is lower, not higher, due to increased gas solubility at cooler temperatures. Temperature correction does have clinical relevance in TTM, as it affects ventilator management decisions and acid-base interpretation. The values are not unchanged; Henry law dictates that gas solubility increases as temperature decreases.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
    ],
  })

  // ─── EXAM 10 ──────────────────────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q11,Q16,Q19) B=5(Q2,Q5,Q9,Q13,Q17) C=5(Q1,Q6,Q10,Q14,Q20) D=5(Q3,Q8,Q12,Q15,Q18)
  const exam10 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 10',
      examIndex: 10,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam10.id,
        questionIndex: 1,
        questionText:
          'A patient on volume-controlled ventilation develops trigger asynchrony. The pressure-time waveform shows negative deflections at the beginning of inspiration that do not trigger a mechanical breath. What is the most likely cause?',
        choices: {
          A: 'The sensitivity is set too sensitively, causing auto-triggering',
          B: 'The patient has excessive secretions causing flow turbulence',
          C: 'The trigger sensitivity is set too high (too insensitive), and the patient cannot generate enough effort to trigger the ventilator',
          D: 'The patient is over-sedated and has no respiratory drive',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Negative pressure deflections on the pressure-time waveform that do not result in a ventilator breath indicate ineffective triggering (missed triggers). The most common cause is trigger sensitivity set too high (requiring too much patient effort). The patient is generating inspiratory effort (visible as negative pressure deflections) but insufficient to reach the trigger threshold.',
        explanationWrong:
          'Auto-triggering (trigger too sensitive) would result in extra breaths delivered without patient effort, not missed triggers. Secretions would cause flow turbulence but would not typically prevent triggering unless they significantly impeded flow. An over-sedated patient would not generate the negative pressure deflections seen on the waveform.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 2,
        questionText:
          'A critically ill patient with sepsis has been in the ICU for 14 days. The nutritional support team recommends indirect calorimetry to guide caloric prescription. What does indirect calorimetry measure to determine energy expenditure?',
        choices: {
          A: 'Serum albumin and prealbumin levels',
          B: 'Oxygen consumption (VO2) and carbon dioxide production (VCO2) to calculate the resting energy expenditure',
          C: 'Nitrogen balance from 24-hour urine collection',
          D: 'Body composition via bioelectrical impedance analysis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Indirect calorimetry measures oxygen consumption (VO2) and carbon dioxide production (VCO2) through analysis of inspired and expired gas concentrations. Using the modified Weir equation, resting energy expenditure (REE) is calculated. This provides the most accurate assessment of caloric needs in critically ill patients, superior to predictive equations.',
        explanationWrong:
          'Serum albumin and prealbumin are serum protein markers affected by inflammation and do not measure energy expenditure. Nitrogen balance assesses protein metabolism but not total energy expenditure. Bioelectrical impedance measures body composition but does not determine real-time metabolic rate.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 3,
        questionText:
          'A patient with severe TBI has ICP monitored via an external ventricular drain. The ICP waveform shows a P2 wave amplitude that is higher than the P1 wave amplitude. What is the clinical significance of this finding?',
        choices: {
          A: 'Normal ICP waveform morphology; no intervention needed',
          B: 'The EVD needs to be recalibrated',
          C: 'The ICP waveform is being dampened by air in the system',
          D: 'Decreased intracranial compliance, indicating the brain is on the steep portion of the pressure-volume curve and at risk for further ICP elevation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The normal ICP waveform has three components: P1 (percussion wave), P2 (tidal wave), and P3 (dicrotic wave), with P1 being the tallest. When P2 exceeds P1 in amplitude, it indicates decreased intracranial compliance. The brain is on the steep portion of the pressure-volume curve, meaning small increases in intracranial volume will cause large increases in ICP.',
        explanationWrong:
          'In a normal ICP waveform, P1 should be the tallest component. P2 exceeding P1 is an abnormal finding that warrants attention. This finding is not related to EVD calibration or air in the system. It represents a significant change in the brain pressure-volume relationship.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 4,
        questionText:
          'A patient in the ICU has been mechanically ventilated for 18 days and has significant ICU-acquired weakness. The care team recommends neuromuscular electrical stimulation (NMES) of the quadriceps muscles. What is the primary goal of this intervention?',
        choices: {
          A: 'To prevent further muscle atrophy and maintain muscle mass in patients who cannot participate in active exercise',
          B: 'To replace the need for physical therapy entirely',
          C: 'To stimulate the phrenic nerve and improve diaphragmatic function',
          D: 'To improve cardiac output through improved venous return',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Neuromuscular electrical stimulation (NMES) applied to large muscle groups such as the quadriceps produces involuntary muscle contractions that help prevent muscle atrophy and maintain muscle mass in critically ill patients who cannot participate in active mobilization. Studies show NMES can preserve muscle thickness and strength, facilitating eventual participation in active rehabilitation.',
        explanationWrong:
          'NMES is an adjunct to physical therapy, not a replacement. Quadriceps NMES does not stimulate the phrenic nerve; separate devices and electrode placement are needed for diaphragmatic pacing. While improved muscle function may have indirect cardiovascular benefits, the primary goal is preventing muscle wasting.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 5,
        questionText:
          'A patient with cystic fibrosis develops massive hemoptysis (estimated 800 mL in 6 hours). Initial management includes large-bore IV access, blood typing, and intubation. What is the definitive treatment for this patient?',
        choices: {
          A: 'High-dose intravenous tranexamic acid',
          B: 'Bronchial artery embolization, with surgical resection reserved for embolization failure or recurrence',
          C: 'Rigid bronchoscopy with laser cauterization',
          D: 'External beam radiation therapy to the bleeding lobe',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In cystic fibrosis patients with massive hemoptysis, bronchial artery embolization (BAE) is the preferred definitive treatment. CF patients develop extensive bronchial arterial hypertrophy due to chronic infection and inflammation. BAE provides immediate hemostasis in 70-90% of cases. Surgical resection is reserved for BAE failure or recurrent hemoptysis, as CF patients have limited pulmonary reserve.',
        explanationWrong:
          'Tranexamic acid may be used as an adjunct but is not definitive treatment for massive hemoptysis. Rigid bronchoscopy with laser cauterization is technically difficult in the setting of massive bleeding and does not address the underlying vascular pathology. External beam radiation is used for hemoptysis in lung cancer, not in cystic fibrosis.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 6,
        questionText:
          'A patient with an acute COPD exacerbation is receiving bronchodilator therapy via a metered-dose inhaler (MDI) with spacer through a ventilator circuit. Which technique optimizes aerosol delivery in the mechanically ventilated patient?',
        choices: {
          A: 'Removing the heat and moisture exchanger (HME) and actuating the MDI during the inspiratory pause',
          B: 'Placing the MDI at the Y-connector and actuating during expiration',
          C: 'Actuating the MDI into the spacer placed in the inspiratory limb, synchronized with the beginning of inspiration, with the HME removed',
          D: 'Actuating 4 puffs simultaneously to maximize the dose delivered',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Optimal MDI delivery in mechanically ventilated patients requires: (1) placement of the spacer/adapter in the inspiratory limb 15-20 cm from the Y-connector, (2) synchronization of actuation with the beginning of inspiration, (3) removal of the HME (which traps aerosol particles and reduces lung deposition by up to 50%), and (4) actuation of one puff at a time with 15-30 seconds between puffs.',
        explanationWrong:
          'Actuation during inspiratory pause delivers medication to the circuit, not the patient. Placing the MDI at the Y-connector reduces aerosol deposition. Actuating multiple puffs simultaneously causes particle coalescence and reduces deposition efficiency.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 7,
        questionText:
          'A patient with inhalation injury develops cyanide toxicity from combustion of synthetic materials. The serum lactate is 12 mmol/L and the patient is hemodynamically unstable. Which antidote should be administered?',
        choices: {
          A: 'Hydroxocobalamin (Cyanokit) 5 g IV',
          B: 'Sodium thiosulfate 12.5 g IV alone',
          C: 'Methylene blue 1 mg/kg IV',
          D: 'N-acetylcysteine 150 mg/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Hydroxocobalamin (Cyanokit) is the preferred antidote for cyanide toxicity in the setting of smoke inhalation. It directly binds cyanide to form cyanocobalamin (vitamin B12), which is renally excreted. It is safe in patients with concurrent carbon monoxide poisoning and does not cause methemoglobinemia, unlike the traditional cyanide antidote kit components.',
        explanationWrong:
          'Sodium thiosulfate alone has a slow onset and is insufficient for severe cyanide toxicity with hemodynamic instability. Methylene blue is the antidote for methemoglobinemia, not cyanide toxicity, and would be harmful in concurrent CO poisoning. N-acetylcysteine is used for acetaminophen toxicity, not cyanide poisoning.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 8,
        questionText:
          'A patient is mechanically ventilated after cardiac surgery. The ventilator pressure-time waveform on pressure support ventilation shows a sharp upward spike at the start of inspiration followed by a drop to the set pressure level. What does this spike represent?',
        choices: {
          A: 'Patient effort exceeding ventilator support',
          B: 'Auto-PEEP being overcome by the ventilator',
          C: 'The ventilator is double-triggering',
          D: 'An excessively fast rise time setting causing pressure overshoot',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A sharp pressure spike (overshoot) at the beginning of inspiration in pressure support ventilation indicates that the rise time (pressurization rate) is set too fast. The ventilator delivers flow so rapidly that it momentarily exceeds the set pressure before equilibrating. This can cause patient discomfort and should be corrected by slowing the rise time.',
        explanationWrong:
          'Patient effort would cause a negative deflection, not a positive spike. Auto-PEEP would affect triggering but would not cause a pressure spike at the start of inspiration. Double-triggering shows two consecutive breaths without complete exhalation, not a pressure spike at the start of a single breath.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 9,
        questionText:
          'A brain-dead patient is a potential organ donor. The hemodynamic management protocol calls for a target MAP of 60-70 mmHg. The current MAP is 52 mmHg on norepinephrine 20 mcg/min. Which hormone replacement therapy is recommended for donor hemodynamic management?',
        choices: {
          A: 'Growth hormone and erythropoietin',
          B: 'Combined hormonal replacement with T3 or T4, vasopressin, methylprednisolone, and insulin',
          C: 'Testosterone and cortisol replacement only',
          D: 'Dopamine infusion as the sole vasopressor per donor management protocol',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Brain death often results in a hormonal crisis with deficiency of thyroid hormone, ADH (vasopressin), cortisol, and insulin resistance. Combined hormonal replacement therapy (T3 or T4, vasopressin, methylprednisolone, and insulin) is the recommended protocol for organ donor management. This approach improves hemodynamic stability, reduces vasopressor requirements, and improves organ function for transplantation.',
        explanationWrong:
          'Growth hormone and erythropoietin are not part of standard donor management protocols. Testosterone is not indicated in donor management. Using dopamine as the sole vasopressor is outdated; high-dose catecholamines can damage transplantable organs, and hormonal replacement therapy helps reduce catecholamine requirements.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 10,
        questionText:
          'An ICU reports its standardized mortality ratio (SMR) is 0.85. How should this be interpreted?',
        choices: {
          A: 'The ICU has 85% bed occupancy',
          B: 'The ICU mortality rate is 85%',
          C: 'The observed mortality is 15% lower than predicted by the severity-of-illness scoring system, suggesting better-than-expected outcomes',
          D: 'The ICU readmission rate is 85%',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The standardized mortality ratio (SMR) is calculated as observed deaths divided by predicted deaths (based on severity-of-illness scoring such as APACHE IV or SAPS). An SMR of 0.85 means the ICU observed 15% fewer deaths than predicted, indicating better-than-expected outcomes. An SMR of 1.0 indicates performance equal to prediction, and above 1.0 indicates worse-than-expected outcomes.',
        explanationWrong:
          'SMR does not measure bed occupancy or readmission rates. An SMR of 0.85 does not mean the mortality rate is 85%; it means observed mortality is 85% of predicted mortality (15% fewer deaths than expected).',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 11,
        questionText:
          'A patient with ICU-acquired diaphragmatic dysfunction is being assessed with diaphragm ultrasound. The thickening fraction of the diaphragm during spontaneous breathing is measured at 15%. How is this interpreted?',
        choices: {
          A: 'A thickening fraction below 30% suggests diaphragmatic dysfunction and correlates with weaning failure',
          B: 'A thickening fraction of 15% is within normal limits',
          C: 'Diaphragm ultrasound is unreliable for assessing diaphragmatic function',
          D: 'The thickening fraction indicates the diaphragm is too thick from edema',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Diaphragm thickening fraction (TF) is measured as (thickness at end-inspiration - thickness at end-expiration) / thickness at end-expiration x 100%. Normal TF is generally above 30-36%. A TF of 15% indicates reduced diaphragmatic contractility and is associated with longer duration of mechanical ventilation and higher risk of weaning failure. Diaphragm ultrasound is an increasingly validated bedside tool.',
        explanationWrong:
          'A TF of 15% is below normal and indicates dysfunction. Diaphragm ultrasound is a validated and increasingly used tool for assessing diaphragmatic function at the bedside. The thickening fraction measures contractile function, not edema-related thickness.',
        topic: 'ICU-Acquired Weakness and Early Mobilization',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 12,
        questionText:
          'A patient with severe COPD on mechanical ventilation has the following ABG: pH 7.34, PaCO2 65 mmHg, PaO2 72 mmHg, HCO3 34 mEq/L. The patient baseline (pre-admission) PaCO2 was 55 mmHg. When targeting ventilator settings for this patient, what is the most appropriate PaCO2 goal?',
        choices: {
          A: 'Target PaCO2 of 35-45 mmHg (normal range)',
          B: 'Target PaCO2 of 25-30 mmHg to maximize pH',
          C: 'Target PaCO2 as low as possible to prevent further CO2 retention',
          D: 'Target PaCO2 near the patient baseline of 55 mmHg to avoid post-hypercapnic metabolic alkalosis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In COPD patients with chronic hypercapnia, the ventilator PaCO2 target should be the patient baseline (pre-admission) PaCO2, not normal values. Rapidly reducing the PaCO2 below the patient compensated baseline causes post-hypercapnic metabolic alkalosis (the kidneys have retained bicarbonate to compensate), which can cause cardiac arrhythmias, seizures, and refractory weaning failure.',
        explanationWrong:
          'Targeting normal PaCO2 of 35-45 mmHg in a chronic CO2 retainer causes dangerous alkalosis. Aggressive hyperventilation to 25-30 mmHg is especially dangerous. The elevated HCO3 of 34 mEq/L reflects renal compensation for chronic hypercapnia and confirms the patient baseline state is hypercapnic.',
        topic: 'Acute Exacerbation of COPD in ICU',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 13,
        questionText:
          'A critically ill patient who has been receiving parenteral nutrition for 10 days develops elevated liver enzymes (AST 180, ALT 210, alkaline phosphatase 350). Which component of the parenteral nutrition is most likely responsible?',
        choices: {
          A: 'Amino acid solution',
          B: 'Excess dextrose (carbohydrate) causing hepatic steatosis and parenteral nutrition-associated liver disease',
          C: 'Electrolyte additives',
          D: 'Trace element supplementation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Parenteral nutrition-associated liver disease (PNALD) is commonly caused by excess dextrose (glucose) infusion, which promotes hepatic lipogenesis and steatosis. Overfeeding with carbohydrates stimulates insulin secretion, promotes de novo fatty acid synthesis in the liver, and leads to hepatic steatosis, cholestasis, and elevated liver enzymes. Reducing the dextrose load and adding lipid-based calories can help.',
        explanationWrong:
          'Amino acid solutions can cause mild hyperammonemia but are not the primary cause of PNALD. Electrolyte additives and trace elements do not typically cause hepatic dysfunction at standard doses. The key management strategy is reducing total caloric load (especially carbohydrate) and cycling parenteral nutrition if possible.',
        topic: 'Nutritional Support in Critically Ill Patients',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 14,
        questionText:
          'A patient with hemoptysis undergoes bronchial artery embolization. The interventional radiologist identifies the anterior spinal artery (artery of Adamkiewicz) arising from the same intercostal trunk as the bleeding bronchial artery. What is the major risk of embolizing this vessel?',
        choices: {
          A: 'Pulmonary infarction',
          B: 'Aortic dissection',
          C: 'Spinal cord ischemia and paraplegia',
          D: 'Esophageal perforation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The artery of Adamkiewicz is the major anterior radiculomedullary artery supplying the lower two-thirds of the spinal cord. It may arise from a common trunk with bronchial or intercostal arteries. Inadvertent embolization of this artery during bronchial artery embolization can cause spinal cord ischemia, resulting in paraplegia. This is the most feared complication of BAE and requires careful selective catheterization.',
        explanationWrong:
          'Pulmonary infarction is rare after BAE because the lungs have dual blood supply (bronchial and pulmonary arteries). Aortic dissection is extremely rare during BAE. Esophageal perforation is not a recognized complication of BAE. Spinal cord ischemia is the most clinically significant and feared complication.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 15,
        questionText:
          'A patient with severe TBI is being monitored in the ICU. The patient develops a fever of 39.2 degrees C. What is the impact of fever on the injured brain, and what is the recommended intervention?',
        choices: {
          A: 'Fever is neuroprotective and should not be treated in TBI patients',
          B: 'Fever only affects the peripheral nervous system and has no impact on ICP',
          C: 'Fever increases peripheral vasoconstriction which improves cerebral perfusion',
          D: 'Fever increases cerebral metabolic rate and oxygen consumption, potentially worsening secondary brain injury; aggressive normothermia should be maintained',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Fever in TBI patients increases the cerebral metabolic rate of oxygen consumption (CMRO2) by approximately 7-10% for each degree Celsius increase in temperature. This increased metabolic demand can exceed oxygen supply in the injured brain, worsen secondary injury, increase ICP through metabolic vasodilation, and is independently associated with worse outcomes. Aggressive normothermia (36-37 degrees C) is recommended.',
        explanationWrong:
          'Fever is harmful, not neuroprotective, in the acutely injured brain. Fever affects the central nervous system and directly increases cerebral metabolic demand. Fever causes cerebral vasodilation (not vasoconstriction), which increases cerebral blood volume and can raise ICP.',
        topic: 'Traumatic Brain Injury and ICP Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 16,
        questionText:
          'A patient who underwent cardiac surgery develops left phrenic nerve injury resulting in left hemidiaphragm paralysis. Which finding on chest radiograph is most consistent with this diagnosis?',
        choices: {
          A: 'Elevated left hemidiaphragm with paradoxical motion on fluoroscopy (sniff test)',
          B: 'Bilateral pleural effusions',
          C: 'Left lower lobe consolidation',
          D: 'Widened mediastinum',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Phrenic nerve injury from cardiac surgery (due to cold cardioplegia, surgical retraction, or direct injury) results in hemidiaphragm paralysis. The chest radiograph shows an elevated hemidiaphragm on the affected side. Fluoroscopic sniff test reveals paradoxical upward motion of the paralyzed hemidiaphragm during inspiration, confirming the diagnosis.',
        explanationWrong:
          'Bilateral pleural effusions are common after cardiac surgery but are not specific to phrenic nerve injury. Left lower lobe consolidation may result from atelectasis but does not specifically indicate diaphragm paralysis. A widened mediastinum suggests mediastinal pathology (hemorrhage, aortic injury), not phrenic nerve damage.',
        topic: 'Post-Cardiac Surgery Respiratory Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 17,
        questionText:
          'A potential organ donor has been declared brain dead. The organ procurement coordinator asks the respiratory therapist to perform an arterial blood gas on FiO2 1.0 and PEEP 5 cmH2O to assess lung transplant suitability. The PaO2 result is 380 mmHg. Is this donor eligible for lung transplantation based on this criterion?',
        choices: {
          A: 'No, the PaO2 must be above 500 mmHg on FiO2 1.0',
          B: 'Yes, a PaO2 above 300 mmHg on FiO2 1.0 and PEEP 5 cmH2O meets the oxygenation criterion for lung donation',
          C: 'No, lung donation requires a PaO2/FiO2 ratio above 500',
          D: 'Oxygenation criteria are irrelevant for lung transplant donor selection',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The standard oxygenation criterion for ideal lung donor suitability is a PaO2 greater than 300 mmHg on FiO2 1.0 and PEEP 5 cmH2O (P/F ratio >300). A PaO2 of 380 mmHg exceeds this threshold and meets the oxygenation criterion. Other criteria include age, smoking history, chest radiograph findings, and bronchoscopy results.',
        explanationWrong:
          'A PaO2 of 500 mmHg is not required; the threshold is 300 mmHg. A P/F ratio above 500 is not the standard criterion. Oxygenation is a critical and mandatory criterion for lung transplant donor selection and cannot be ignored.',
        topic: 'Organ Donation and Brain Death Assessment',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 18,
        questionText:
          'A burn patient with 50% TBSA burns is being enterally fed. Compared to non-burn critically ill patients, burn patients have significantly different caloric requirements. Which statement best describes nutritional needs in major burn injury?',
        choices: {
          A: 'Burn patients require fewer calories than non-burn ICU patients due to decreased mobility',
          B: 'Caloric requirements are the same as non-burn ICU patients',
          C: 'Burn patients should receive primarily lipid-based calories to prevent protein catabolism',
          D: 'Burn patients have a hypermetabolic response that can increase caloric needs by 40-100% above baseline, with high protein requirements (1.5-2 g/kg/day)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Major burn injury produces the most profound hypermetabolic response of any form of trauma. Metabolic rate can increase by 40-100% above baseline depending on the TBSA burned. Protein requirements are significantly elevated (1.5-2 g/kg/day) to support wound healing, immune function, and prevent excessive lean body mass loss. Various predictive equations (Curreri, Toronto) are used for burn-specific caloric estimation.',
        explanationWrong:
          'Burn patients require substantially more calories than non-burn patients, not fewer. The hypermetabolic response to burn injury far exceeds that of other critical illness states. While adequate lipid is needed, the diet should be primarily carbohydrate-based (to support wound healing via insulin-mediated glucose metabolism) with high protein, not primarily lipid-based.',
        topic: 'Burn and Inhalation Injury Management',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 19,
        questionText:
          'A pressure-volume loop during mechanical ventilation shows the expiratory limb crossing over the inspiratory limb (figure-of-eight pattern). What does this abnormal loop configuration suggest?',
        choices: {
          A: 'Active patient exhalation or expiratory muscle recruitment',
          B: 'The ventilator is delivering excessive tidal volume',
          C: 'A large endotracheal tube cuff leak',
          D: 'The ventilator flow sensor needs calibration',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A figure-of-eight (crossover) pattern on the pressure-volume loop occurs when the expiratory limb crosses the inspiratory limb. This is typically caused by active expiratory muscle recruitment, where the patient forcefully exhales, generating positive pressure that exceeds the elastic recoil pressure. This creates the characteristic crossover pattern and indicates patient-ventilator dyssynchrony during expiration.',
        explanationWrong:
          'Excessive tidal volume would show overdistension (beaking) but not a figure-of-eight pattern. A cuff leak would show failure of the loop to close (volume loss) but not crossover. While flow sensor calibration issues can cause artifact, the characteristic figure-of-eight pattern specifically indicates active expiratory effort.',
        topic: 'Ventilator Graphics and Waveform Analysis',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 20,
        questionText:
          'An ICU transitions from paper-based documentation to an electronic clinical decision support system that provides automated alerts for bundle compliance. Studies show this type of intervention primarily improves which aspect of ICU quality?',
        choices: {
          A: 'Patient satisfaction scores',
          B: 'Staff retention rates',
          C: 'Adherence to evidence-based protocols and reduction in preventable complications through real-time prompts and documentation of bundle completion',
          D: 'Reduction in medication costs',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Electronic clinical decision support systems with automated alerts have been shown to significantly improve adherence to evidence-based protocols and bundle compliance in the ICU. Real-time alerts prompt clinicians when bundle elements are due, track completion rates, and provide immediate feedback. This leads to reduction in preventable complications such as VAP, CLABSI, and sepsis mortality through consistent protocol adherence.',
        explanationWrong:
          'While electronic systems may indirectly affect satisfaction and costs, the primary and most well-documented benefit of clinical decision support in the ICU is improved protocol adherence and reduced preventable harm. Staff retention is influenced by many factors beyond documentation systems.',
        topic: 'ICU Quality Metrics and Bundle Compliance',
      },
    ],
  })

  console.log('ACCS mini exams 6-10 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
