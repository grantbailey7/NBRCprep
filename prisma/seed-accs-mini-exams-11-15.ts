import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 11-15...')

  // ─── EXAM 11 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q14,Q18) B=5(Q1,Q7,Q11,Q16,Q20) C=5(Q3,Q8,Q13,Q17,Q19) D=5(Q4,Q6,Q10,Q12,Q15)
  const exam11 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 11',
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
          'A 62-year-old patient presents with acute dyspnea, pleuritic chest pain, and tachycardia following hip replacement surgery. CT pulmonary angiography reveals bilateral pulmonary emboli. The patient is hemodynamically stable with a systolic BP of 118 mmHg. What is the most appropriate initial management?',
        choices: {
          A: 'Systemic thrombolysis with alteplase',
          B: 'Unfractionated heparin infusion with aPTT-guided dosing',
          C: 'Inferior vena cava filter placement',
          D: 'Surgical embolectomy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'For hemodynamically stable patients with acute pulmonary embolism, systemic anticoagulation with unfractionated heparin is the recommended first-line treatment. The aPTT should be monitored and the infusion adjusted to maintain therapeutic anticoagulation.',
        explanationWrong:
          'Systemic thrombolysis is reserved for massive PE with hemodynamic instability (systolic BP < 90 mmHg). IVC filter placement is indicated when anticoagulation is contraindicated, not as initial therapy. Surgical embolectomy is reserved for massive PE when thrombolysis has failed or is contraindicated.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 2,
        questionText:
          'A bone marrow transplant recipient develops progressive hypoxemia and bilateral ground-glass opacities on chest CT. Bronchoalveolar lavage is positive for Pneumocystis jirovecii. In addition to trimethoprim-sulfamethoxazole, which adjunctive therapy is indicated when PaO2 is less than 70 mmHg on room air?',
        choices: {
          A: 'Systemic corticosteroids',
          B: 'Inhaled pentamidine',
          C: 'Aerosolized ribavirin',
          D: 'Intravenous immunoglobulin',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Adjunctive corticosteroids are indicated for moderate-to-severe Pneumocystis pneumonia (PaO2 < 70 mmHg on room air or A-a gradient > 35 mmHg). Corticosteroids reduce inflammation-mediated lung injury and improve outcomes in this population.',
        explanationWrong:
          'Inhaled pentamidine is used for PCP prophylaxis, not acute treatment of severe disease. Aerosolized ribavirin is used for RSV infection, not Pneumocystis. IVIG has no established role in acute PCP treatment.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 3,
        questionText:
          'A patient with Guillain-Barre syndrome is admitted to the ICU. Serial bedside pulmonary function measurements show a forced vital capacity of 18 mL/kg, a maximum inspiratory pressure of -25 cmH2O, and a maximum expiratory pressure of 30 cmH2O. Which parameter most strongly indicates the need for elective intubation?',
        choices: {
          A: 'FVC less than 20 mL/kg alone',
          B: 'MIP weaker than -20 cmH2O alone',
          C: 'The combination of declining FVC below 20 mL/kg with MIP weaker than -30 cmH2O and MEP less than 40 cmH2O',
          D: 'MEP less than 40 cmH2O alone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The 20/30/40 rule for Guillain-Barre syndrome recommends elective intubation when FVC falls below 20 mL/kg, MIP is weaker than -30 cmH2O, or MEP is less than 40 cmH2O. The combination of declining trends in all three parameters most strongly supports the decision to intubate before respiratory failure occurs.',
        explanationWrong:
          'While each parameter individually can trigger intubation at the specified threshold, isolated values without considering trends and the full picture may lead to premature or delayed intervention. The combined assessment provides the most reliable indication of impending respiratory failure in neuromuscular disease.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 4,
        questionText:
          'During point-of-care lung ultrasound, the presence of lung sliding with A-lines at the anterior chest wall in a dyspneic patient is most consistent with which finding?',
        choices: {
          A: 'Pneumothorax',
          B: 'Pleural effusion',
          C: 'Pulmonary edema',
          D: 'Normal aerated lung or possible COPD/asthma exacerbation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Lung sliding with A-lines (horizontal reverberation artifacts) indicates normal aeration at the lung surface. In a dyspneic patient, this pattern is consistent with normal lung, COPD exacerbation, asthma, or pulmonary embolism rather than conditions that alter the pleural-alveolar interface.',
        explanationWrong:
          'Pneumothorax shows absent lung sliding with A-lines (the barcode or stratosphere sign on M-mode). Pleural effusion appears as an anechoic space above the diaphragm. Pulmonary edema produces bilateral B-lines (vertical artifacts arising from the pleural line).',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 5,
        questionText:
          'A patient is being ventilated with airway pressure release ventilation (APRV). The P-high is set at 28 cmH2O, T-high at 4.5 seconds, P-low at 0 cmH2O, and T-low at 0.5 seconds. The patient has minimal spontaneous breathing during the T-high phase. What adjustment would most likely improve alveolar recruitment?',
        choices: {
          A: 'Increase the T-high duration to promote sustained inflation',
          B: 'Increase P-low to 5 cmH2O',
          C: 'Decrease the T-low to 0.3 seconds',
          D: 'Decrease P-high to 22 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Increasing T-high provides a longer sustained inflation period at the higher pressure, which promotes alveolar recruitment in APRV. The prolonged time at P-high serves as the primary recruitment mechanism, similar to sustained inflation maneuvers.',
        explanationWrong:
          'Increasing P-low defeats the purpose of the brief release phase, which relies on the intrinsic PEEP generated by a short T-low. Decreasing T-low further may cause excessive air trapping without improving recruitment. Decreasing P-high would reduce the distending pressure and worsen recruitment.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 6,
        questionText:
          'A 34-year-old woman at 36 weeks gestation presents with seizures, severe hypertension (BP 190/120 mmHg), and pulmonary edema requiring intubation. After securing the airway, what is the most critical pharmacologic intervention?',
        choices: {
          A: 'Labetalol for blood pressure control',
          B: 'Furosemide for pulmonary edema',
          C: 'Phenytoin for seizure prophylaxis',
          D: 'Magnesium sulfate for seizure treatment and prevention',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Magnesium sulfate is the first-line agent for treatment and prevention of eclamptic seizures. It is superior to phenytoin and benzodiazepines in preventing recurrent seizures in eclampsia and should be administered as a loading dose followed by continuous infusion.',
        explanationWrong:
          'While blood pressure control with labetalol is important, the immediate priority after airway management in eclampsia is seizure treatment with magnesium sulfate. Furosemide addresses a symptom but not the underlying cause. Phenytoin is inferior to magnesium sulfate for eclamptic seizure prophylaxis based on the Magpie trial.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 7,
        questionText:
          'A patient with septic shock has been receiving appropriate antibiotics and fluid resuscitation. The surviving sepsis guidelines recommend targeting which mean arterial pressure as an initial resuscitation goal?',
        choices: {
          A: 'MAP greater than or equal to 55 mmHg',
          B: 'MAP greater than or equal to 65 mmHg',
          C: 'MAP greater than or equal to 75 mmHg',
          D: 'MAP greater than or equal to 85 mmHg',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Surviving Sepsis Campaign guidelines recommend targeting a MAP of 65 mmHg or greater as the initial resuscitation goal. This target has been shown to be sufficient for organ perfusion in most patients while avoiding the risks of excessive vasopressor use.',
        explanationWrong:
          'A MAP of 55 mmHg is below the autoregulatory threshold for most organs and would result in organ hypoperfusion. Higher targets of 75 or 85 mmHg have not shown improved outcomes in clinical trials and may increase the risk of arrhythmias from higher vasopressor doses, although select patients (e.g., those with chronic hypertension) may benefit from individualized higher targets.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 8,
        questionText:
          'A patient presents to the emergency department after ingesting a large quantity of organophosphate insecticide. The patient exhibits miosis, excessive salivation, bronchorrhea, and respiratory failure. After intubation and atropine administration, which additional antidote should be given?',
        choices: {
          A: 'N-acetylcysteine',
          B: 'Flumazenil',
          C: 'Pralidoxime (2-PAM)',
          D: 'Naloxone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pralidoxime (2-PAM) reactivates acetylcholinesterase by cleaving the organophosphate-enzyme bond before it undergoes aging. It should be administered as early as possible in addition to atropine, which only blocks the muscarinic effects of excess acetylcholine.',
        explanationWrong:
          'N-acetylcysteine is the antidote for acetaminophen toxicity. Flumazenil reverses benzodiazepine effects. Naloxone is an opioid antagonist. None of these address the underlying mechanism of organophosphate poisoning.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 9,
        questionText:
          'A patient with a massive pulmonary embolism develops cardiogenic shock with a systolic BP of 78 mmHg. Echocardiography shows severe right ventricular dilation and dysfunction. What is the recommended intervention?',
        choices: {
          A: 'Systemic thrombolysis with alteplase 100 mg IV over 2 hours',
          B: 'Subcutaneous enoxaparin 1 mg/kg every 12 hours',
          C: 'Oral rivaroxaban 15 mg twice daily',
          D: 'Observation with supplemental oxygen only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Systemic thrombolysis is indicated for massive (high-risk) pulmonary embolism with hemodynamic instability. Alteplase 100 mg IV over 2 hours is the standard regimen. The mortality benefit outweighs the bleeding risk in this life-threatening situation.',
        explanationWrong:
          'Subcutaneous enoxaparin is appropriate for stable PE, not massive PE with shock. Oral rivaroxaban is used for long-term anticoagulation after acute treatment. Observation alone would be inadequate for a hemodynamically unstable patient with massive PE and would likely result in death.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 10,
        questionText:
          'A patient undergoes right pneumonectomy for lung cancer. On postoperative day 2, the chest tube drainage suddenly increases to 600 mL of serosanguinous fluid over 1 hour. The patient becomes tachycardic and hypotensive. What is the most likely complication?',
        choices: {
          A: 'Bronchopleural fistula',
          B: 'Pulmonary embolism',
          C: 'Atelectasis of the remaining lung',
          D: 'Postoperative hemorrhage from a bronchial artery',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sudden large-volume serosanguinous drainage with hemodynamic instability in the early postoperative period following pneumonectomy is most consistent with surgical hemorrhage, commonly from a bronchial artery or intercostal vessel. This requires urgent surgical exploration.',
        explanationWrong:
          'Bronchopleural fistula typically presents later (days to weeks) with air leak, subcutaneous emphysema, or expectoration of fluid. Pulmonary embolism would not explain the sudden increase in chest tube output. Atelectasis would not produce significant drainage or acute hemodynamic compromise.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 11,
        questionText:
          'A patient with myasthenia gravis is admitted to the ICU with worsening weakness and dysphagia. The FVC has declined from 30 mL/kg to 14 mL/kg over 24 hours. Which treatment is most appropriate for acute myasthenic crisis?',
        choices: {
          A: 'Increase oral pyridostigmine dose',
          B: 'Plasmapheresis or intravenous immunoglobulin',
          C: 'High-dose inhaled corticosteroids',
          D: 'Intrathecal baclofen',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Plasmapheresis and IVIG are the primary treatments for myasthenic crisis. Both provide rapid improvement by removing or neutralizing the pathogenic antibodies against acetylcholine receptors. Plasmapheresis may work slightly faster but both have similar efficacy.',
        explanationWrong:
          'Increasing pyridostigmine during crisis may worsen symptoms due to cholinergic excess and can precipitate cholinergic crisis. Inhaled corticosteroids have no role in myasthenia gravis treatment. Intrathecal baclofen is used for spasticity, not myasthenia gravis.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 12,
        questionText:
          'When discussing goals of care with the family of a critically ill patient on prolonged mechanical ventilation with multi-organ failure, which approach best aligns with palliative care principles?',
        choices: {
          A: 'Recommend immediate withdrawal of all life-sustaining treatments',
          B: 'Avoid discussing prognosis to prevent causing distress',
          C: 'Present only the option of continuing full aggressive care',
          D: 'Facilitate a structured family meeting to explore values, goals, and all available options including comfort-focused care',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A structured family meeting that explores the patient\'s values and goals while presenting all options, including comfort-focused care, is the cornerstone of palliative care communication in the ICU. This shared decision-making approach respects autonomy and helps families make informed decisions.',
        explanationWrong:
          'Recommending immediate withdrawal without discussion does not respect family autonomy or shared decision-making. Avoiding prognostic discussions deprives families of information needed to make informed decisions. Presenting only aggressive care options fails to offer the full range of appropriate care, including palliation.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 13,
        questionText:
          'A patient on neurally adjusted ventilatory assist (NAVA) has an electrical activity of the diaphragm (Edi) signal that is consistently low despite clinical evidence of respiratory distress. Which factor is most likely causing the low Edi signal?',
        choices: {
          A: 'Excessive NAVA level setting',
          B: 'Improper catheter positioning',
          C: 'Malposition of the Edi catheter at the esophageal-gastric junction',
          D: 'Patient-ventilator asynchrony',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A low Edi signal despite clinical respiratory distress most commonly results from malposition of the Edi catheter. The catheter must be positioned at the level of the diaphragm crura, and displacement toward the esophagus or stomach results in a weak or absent signal.',
        explanationWrong:
          'An excessive NAVA level would provide more support per unit of Edi but would not reduce the Edi signal itself during distress. Improper catheter positioning is a possibility but the specific malposition at the esophageal-gastric junction is the most precise answer. Patient-ventilator asynchrony would not explain a low Edi reading when the patient is in respiratory distress.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 14,
        questionText:
          'A 28-year-old woman develops acute respiratory failure 3 days postpartum. Echocardiography reveals a left ventricular ejection fraction of 25% with global hypokinesis. BNP is markedly elevated. What is the most likely diagnosis?',
        choices: {
          A: 'Peripartum cardiomyopathy',
          B: 'Amniotic fluid embolism',
          C: 'Postpartum preeclampsia',
          D: 'Pulmonary embolism',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Peripartum cardiomyopathy presents as new-onset heart failure with reduced ejection fraction in the last month of pregnancy or within 5 months postpartum, in the absence of other identifiable causes. Global hypokinesis with severely reduced EF and elevated BNP in this timeframe is characteristic.',
        explanationWrong:
          'Amniotic fluid embolism typically occurs during labor or immediately after delivery with sudden cardiovascular collapse, DIC, and acute respiratory distress. Postpartum preeclampsia may cause pulmonary edema but would present with hypertension, proteinuria, and typically preserved ejection fraction. Pulmonary embolism causes right heart strain, not global LV hypokinesis with severely reduced EF.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 15,
        questionText:
          'A patient with carbon monoxide poisoning presents with a carboxyhemoglobin level of 32%. The pulse oximeter reads 98%. Which statement best explains this discrepancy?',
        choices: {
          A: 'The pulse oximeter is reading correctly and the blood gas is in error',
          B: 'The patient has concurrent methemoglobinemia',
          C: 'Carboxyhemoglobin levels above 25% cause pulse oximeter failure',
          D: 'Conventional pulse oximeters cannot distinguish carboxyhemoglobin from oxyhemoglobin due to similar light absorption characteristics',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Conventional pulse oximeters use two wavelengths of light (660 nm and 940 nm) and cannot distinguish carboxyhemoglobin from oxyhemoglobin because COHb absorbs light at 660 nm similarly to oxyhemoglobin. This results in falsely normal SpO2 readings in carbon monoxide poisoning.',
        explanationWrong:
          'The blood gas co-oximetry result is accurate as it uses multiple wavelengths to identify different hemoglobin species. Methemoglobinemia would cause SpO2 to trend toward 85%, not read high. Pulse oximeters do not simply fail at high COHb levels; they systematically overestimate oxygen saturation.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 16,
        questionText:
          'According to the Surviving Sepsis Campaign guidelines, within what timeframe should broad-spectrum antibiotics be administered after recognition of sepsis?',
        choices: {
          A: 'Within 6 hours',
          B: 'Within 1 hour',
          C: 'Within 3 hours',
          D: 'Within 12 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Surviving Sepsis Campaign guidelines recommend administration of broad-spectrum antibiotics within 1 hour of sepsis recognition. Each hour of delay in antibiotic administration is associated with increased mortality. Blood cultures should ideally be obtained before antibiotics but should not delay administration.',
        explanationWrong:
          'Previous iterations of the guidelines allowed up to 3 hours, but current recommendations emphasize the 1-hour target for both sepsis and septic shock. Delays of 6 or 12 hours are associated with significantly worse outcomes and do not meet current guideline recommendations.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 17,
        questionText:
          'On point-of-care cardiac ultrasound, a critically ill patient with hypotension shows a hyperdynamic left ventricle with small cavity size and collapsed IVC with less than 50% respiratory variation. Which hemodynamic state is most consistent with these findings?',
        choices: {
          A: 'Cardiogenic shock',
          B: 'Cardiac tamponade',
          C: 'Hypovolemia with adequate compensatory response',
          D: 'Right ventricular failure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A hyperdynamic left ventricle with small cavity size and collapsed IVC suggests hypovolemia. The hyperdynamic function represents the compensatory increase in contractility in response to decreased preload. Fluid resuscitation is the appropriate initial intervention.',
        explanationWrong:
          'Cardiogenic shock would show a dilated, hypokinetic left ventricle with a distended IVC. Cardiac tamponade would demonstrate a pericardial effusion with right-sided chamber collapse. Right ventricular failure would show RV dilation with septal bowing toward the left ventricle and IVC distension.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 18,
        questionText:
          'A lung transplant recipient on immunosuppression develops fever, cough, and new pulmonary infiltrates. BAL cytology reveals cells with large intranuclear inclusions described as owl-eye inclusions. What is the most likely pathogen?',
        choices: {
          A: 'Cytomegalovirus',
          B: 'Aspergillus fumigatus',
          C: 'Mycobacterium tuberculosis',
          D: 'Pseudomonas aeruginosa',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Owl-eye intranuclear inclusions on cytology are pathognomonic for cytomegalovirus (CMV) infection. CMV pneumonitis is a common and serious complication in solid organ transplant recipients, particularly lung transplant patients, and is treated with IV ganciclovir.',
        explanationWrong:
          'Aspergillus appears as septate hyphae with acute-angle branching on microscopy. Mycobacterium tuberculosis is identified by acid-fast staining, not intranuclear inclusions. Pseudomonas is a gram-negative rod identified on gram stain and culture without characteristic intranuclear inclusions.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 19,
        questionText:
          'A patient with end-stage COPD on home oxygen elects comfort-focused care. The patient is experiencing severe dyspnea despite maximum bronchodilator therapy. Which intervention is most appropriate for palliation of dyspnea?',
        choices: {
          A: 'Initiation of noninvasive positive pressure ventilation',
          B: 'Intubation and mechanical ventilation',
          C: 'Low-dose opioids such as oral morphine',
          D: 'Anxiolytics alone without opioids',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Low-dose opioids are the most effective pharmacologic intervention for palliation of refractory dyspnea. Oral or parenteral morphine reduces the sensation of breathlessness by modulating central respiratory drive and perception. Evidence supports their use without significant respiratory depression at appropriate palliative doses.',
        explanationWrong:
          'NIPPV may be used for palliative symptom relief in select patients but is not the most appropriate first-line intervention for comfort-focused care. Intubation is inconsistent with comfort-focused goals of care. Anxiolytics may help with anxiety-related dyspnea but are less effective than opioids as a primary dyspnea treatment.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 20,
        questionText:
          'After a right upper lobectomy, a patient\'s chest tube shows a continuous air leak for 5 days. The daily output has decreased from 400 mL to 50 mL of serous fluid. The patient is otherwise stable. What is the most appropriate management?',
        choices: {
          A: 'Immediate reoperation for bronchopleural fistula repair',
          B: 'Continued chest tube drainage with monitoring of the air leak',
          C: 'Clamping the chest tube for 24 hours',
          D: 'Removal of the chest tube and observation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A persistent air leak after lobectomy that is otherwise stable and with decreasing drainage is managed conservatively with continued chest tube drainage and observation. Most alveolopleural fistulae resolve within 7 to 10 days. Premature removal risks tension pneumothorax.',
        explanationWrong:
          'Immediate reoperation is not indicated for a stable, resolving air leak without signs of bronchopleural fistula such as sudden large air leak, fever, or empyema. Clamping the chest tube risks tension pneumothorax if the air leak persists. Removing the chest tube while an air leak is present would cause pneumothorax.',
        topic: 'Thoracic Surgery',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 11 seeded (20 questions, isFree: false)')

  // ─── EXAM 12 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q12,Q15,Q19) B=5(Q3,Q8,Q10,Q17,Q20) C=5(Q4,Q7,Q11,Q14,Q18) D=5(Q2,Q5,Q9,Q13,Q16)
  const exam12 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 12',
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
          'A patient on APRV with P-high 30 cmH2O, T-high 5.0 seconds, P-low 0 cmH2O, and T-low 0.6 seconds shows an expiratory flow that returns to zero before the next inflation. What adjustment is most appropriate?',
        choices: {
          A: 'Shorten the T-low to terminate expiration at 75% of peak expiratory flow',
          B: 'Increase P-high to 35 cmH2O',
          C: 'Increase T-low to 1.0 second',
          D: 'Increase P-low to 10 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In APRV, the T-low should be set so that expiratory flow terminates at approximately 50-75% of peak expiratory flow rate. If flow returns to zero, the release time is too long, leading to derecruitment. Shortening T-low preserves intrinsic PEEP and maintains alveolar recruitment.',
        explanationWrong:
          'Increasing P-high would increase distending pressure but does not address the derecruitment occurring during an excessively long release phase. Increasing T-low further would worsen derecruitment. Increasing P-low defeats the purpose of APRV, which relies on brief releases to zero to facilitate CO2 clearance while intrinsic PEEP maintains recruitment.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 2,
        questionText:
          'A 45-year-old patient with massive PE and refractory shock has failed systemic thrombolysis. CT angiography shows a large saddle embolus. What is the most appropriate next intervention?',
        choices: {
          A: 'Repeat systemic thrombolysis with a higher dose',
          B: 'Catheter-directed thrombolysis',
          C: 'IVC filter placement and heparin drip',
          D: 'Surgical pulmonary embolectomy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Surgical pulmonary embolectomy is indicated for massive PE with refractory hemodynamic instability when systemic thrombolysis has failed. This provides definitive clot removal and can be life-saving. Modern surgical outcomes have improved significantly at experienced centers.',
        explanationWrong:
          'Repeating systemic thrombolysis at a higher dose after failure significantly increases bleeding risk without guaranteed benefit. Catheter-directed therapy may be considered as an alternative but is less definitive for a large saddle embolus with refractory shock. IVC filter with heparin alone does not address the existing life-threatening clot burden.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 3,
        questionText:
          'A febrile neutropenic patient with acute leukemia develops acute respiratory failure requiring mechanical ventilation. CT chest shows bilateral diffuse infiltrates. Galactomannan antigen is elevated. Which empiric antifungal agent is most appropriate?',
        choices: {
          A: 'Fluconazole',
          B: 'Voriconazole',
          C: 'Nystatin',
          D: 'Griseofulvin',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An elevated galactomannan antigen in a neutropenic patient with pulmonary infiltrates strongly suggests invasive pulmonary aspergillosis. Voriconazole is the first-line treatment per IDSA guidelines, with superior efficacy and survival compared to amphotericin B.',
        explanationWrong:
          'Fluconazole has no activity against Aspergillus species. Nystatin is a topical antifungal with no systemic bioavailability. Griseofulvin is used for dermatophyte infections and has no role in invasive fungal infections.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 4,
        questionText:
          'During the 1-hour sepsis bundle, which combination of interventions should be completed within the first hour of sepsis recognition?',
        choices: {
          A: 'Blood cultures, central line placement, and arterial line insertion',
          B: 'Blood cultures, lactate measurement, and surgical source control',
          C: 'Obtain blood cultures, measure lactate, administer broad-spectrum antibiotics, begin fluid resuscitation with 30 mL/kg crystalloid for hypotension or lactate >= 4 mmol/L, and start vasopressors if hypotension persists',
          D: 'Lactate measurement, broad-spectrum antibiotics, and pulmonary artery catheter placement',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The Surviving Sepsis Campaign 1-hour bundle includes: obtain blood cultures before antibiotics, measure serum lactate, administer broad-spectrum antibiotics, begin rapid fluid resuscitation with 30 mL/kg crystalloid for hypotension or lactate >= 4 mmol/L, and apply vasopressors if hypotensive during or after fluid resuscitation to maintain MAP >= 65 mmHg.',
        explanationWrong:
          'Central line and arterial line placement are not part of the 1-hour bundle, although they may be needed. Surgical source control is important but is not typically achievable within the first hour and is addressed separately. Pulmonary artery catheter placement is not recommended as a routine intervention in the sepsis bundle.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 5,
        questionText:
          'A patient with a known history of chronic alcoholism presents with altered mental status and Kussmaul respirations. ABG shows pH 7.18, PaCO2 18 mmHg, PaO2 95 mmHg, HCO3 7 mEq/L. Serum studies reveal an elevated anion gap and the presence of an osmolar gap. What is the most likely ingestion?',
        choices: {
          A: 'Salicylate overdose',
          B: 'Acetaminophen overdose',
          C: 'Isopropyl alcohol ingestion',
          D: 'Methanol or ethylene glycol ingestion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An elevated anion gap metabolic acidosis with a concurrent osmolar gap in an alcoholic patient strongly suggests toxic alcohol ingestion (methanol or ethylene glycol). These substances are metabolized to toxic organic acids (formic acid and glycolic/oxalic acid, respectively) that cause the anion gap acidosis, while the parent compounds cause the osmolar gap.',
        explanationWrong:
          'Salicylate toxicity causes an anion gap metabolic acidosis but typically with a respiratory alkalosis and does not produce a significant osmolar gap. Acetaminophen overdose causes hepatotoxicity, not metabolic acidosis with an osmolar gap. Isopropyl alcohol causes an osmolar gap but does NOT cause an anion gap metabolic acidosis because it is metabolized to acetone, not an organic acid.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 6,
        questionText:
          'On lung ultrasound, the lung point sign is pathognomonic for which condition?',
        choices: {
          A: 'Pneumothorax',
          B: 'Pleural effusion',
          C: 'Pneumonia',
          D: 'Pulmonary edema',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The lung point is the ultrasound finding where lung sliding intermittently appears and disappears at a single intercostal space, representing the boundary between collapsed and aerated lung. It is 100% specific for pneumothorax and helps determine the extent of the pneumothorax.',
        explanationWrong:
          'Pleural effusion appears as an anechoic or hypoechoic collection between the visceral and parietal pleura with lung floating within it. Pneumonia shows consolidation with tissue-like echotexture and dynamic air bronchograms. Pulmonary edema produces diffuse bilateral B-lines.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 7,
        questionText:
          'A patient with severe preeclampsia on magnesium sulfate infusion becomes lethargic and develops absent deep tendon reflexes. The respiratory rate decreases to 8 breaths/min. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the magnesium infusion rate',
          B: 'Administer a benzodiazepine for presumed seizure activity',
          C: 'Discontinue magnesium and administer calcium gluconate',
          D: 'Intubate immediately without further assessment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Absent deep tendon reflexes and respiratory depression are signs of magnesium toxicity. The magnesium infusion should be stopped immediately and IV calcium gluconate (1 g over 5-10 minutes) administered as the direct antidote, which antagonizes the neuromuscular effects of magnesium.',
        explanationWrong:
          'Increasing the magnesium infusion would worsen toxicity and could cause respiratory arrest or cardiac arrest. The symptoms are due to magnesium toxicity, not seizures, so benzodiazepines are inappropriate. Intubation may be needed if respiratory failure progresses, but the priority is to reverse the cause with calcium gluconate.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 8,
        questionText:
          'A patient with Guillain-Barre syndrome has been mechanically ventilated for 3 weeks. Repeated weaning trials fail due to rapid shallow breathing. Electrodiagnostic studies show ongoing demyelination. What is the most appropriate ventilator weaning strategy?',
        choices: {
          A: 'Immediate extubation with noninvasive ventilation backup',
          B: 'Gradual pressure support reduction with tracheostomy and prolonged weaning protocol',
          C: 'Aggressive spontaneous breathing trials every 4 hours',
          D: 'Mandatory minute ventilation with automatic tube compensation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Patients with GBS who require prolonged ventilation benefit from tracheostomy and a gradual weaning approach using progressive pressure support reduction. Given the slow nature of nerve recovery in demyelinating GBS, a patient weaning protocol with daily assessments is most appropriate.',
        explanationWrong:
          'Immediate extubation is premature when weaning trials consistently fail. Aggressive spontaneous breathing trials every 4 hours can cause respiratory muscle fatigue and delay recovery. Mandatory minute ventilation does not address the underlying neuromuscular weakness and does not provide a structured weaning approach.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 9,
        questionText:
          'A patient receiving palliative mechanical ventilation for end-stage pulmonary fibrosis requests withdrawal of ventilator support. The family agrees. Which medication regimen is most appropriate to administer prior to and during ventilator withdrawal?',
        choices: {
          A: 'Neuromuscular blocking agents to prevent gasping',
          B: 'High-dose vasopressors to maintain blood pressure',
          C: 'No medications should be administered during withdrawal',
          D: 'Opioids and benzodiazepines titrated to comfort, addressing dyspnea and anxiety',
        },
        correctChoice: 'D',
        explanationCorrect:
          'During planned ventilator withdrawal, opioids and benzodiazepines should be titrated to relieve dyspnea, pain, and anxiety. The goal is patient comfort, not hastening or delaying death. Doses are titrated to the symptom, consistent with the principle of double effect.',
        explanationWrong:
          'Neuromuscular blocking agents paralyze the patient without providing sedation or analgesia and are considered unethical during terminal ventilator withdrawal as they mask signs of distress. Vasopressors prolong the dying process without improving comfort. Withholding all medications during withdrawal would result in unnecessary patient suffering.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 10,
        questionText:
          'A patient undergoes video-assisted thoracoscopic surgery (VATS) for a right lower lobe wedge resection. Postoperatively, the chest tube is connected to a digital drainage system. Which criterion is most commonly used to determine readiness for chest tube removal?',
        choices: {
          A: 'Less than 24 hours since surgery',
          B: 'Air leak less than 20 mL/min for 8 hours with serous drainage less than 200 mL/day',
          C: 'The patient reports no pain at the chest tube site',
          D: 'Chest radiograph shows complete lung expansion regardless of air leak status',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Digital drainage systems objectively quantify air leak. The most commonly accepted criteria for chest tube removal after VATS include an air leak less than 20 mL/min (or no air leak) sustained for several hours, serous drainage less than 200 mL/day, and radiographic lung expansion. These objective criteria help prevent premature removal.',
        explanationWrong:
          'Time since surgery alone does not determine readiness for tube removal. Patient comfort is important but subjective and does not indicate resolution of the air leak. Radiographic lung expansion alone without assessing air leak could result in pneumothorax after tube removal if a small leak persists.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 11,
        questionText:
          'A patient on adaptive support ventilation (ASV) has a set target minute ventilation based on ideal body weight. The ventilator automatically selects a tidal volume of 8 mL/kg and a rate of 14 breaths/min. If the patient develops increased airway resistance, how will ASV respond?',
        choices: {
          A: 'Increase tidal volume and decrease rate',
          B: 'Increase rate and decrease tidal volume',
          C: 'Decrease tidal volume and increase rate to minimize the work associated with resistive loads',
          D: 'Make no changes and alarm for operator adjustment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'ASV uses the Otis equation to optimize the breathing pattern based on respiratory mechanics. With increased airway resistance, the algorithm favors a faster respiratory rate with smaller tidal volumes to minimize the resistive work of breathing, as higher flows through narrowed airways increase resistive pressure.',
        explanationWrong:
          'Increasing tidal volume with increased resistance would increase peak pressures and resistive work. ASV is an automated closed-loop system that continuously adjusts without requiring operator intervention for changes in respiratory mechanics. It does not simply alarm for all mechanical changes.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 12,
        questionText:
          'A patient with known submassive pulmonary embolism is started on heparin. The right ventricle is mildly dilated on echocardiography but the patient remains hemodynamically stable. After 24 hours, the patient develops worsening hypoxemia with an SpO2 of 84% on 15 L nonrebreather mask. Repeat echo shows progressive RV dilation. What is the most appropriate escalation?',
        choices: {
          A: 'Catheter-directed therapy or systemic thrombolysis given clinical deterioration',
          B: 'Switch to oral anticoagulation',
          C: 'Add inhaled nitric oxide',
          D: 'Increase supplemental oxygen only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Clinical deterioration in submassive PE with worsening RV function despite anticoagulation warrants escalation to reperfusion therapy. Catheter-directed therapy or systemic thrombolysis should be considered when a patient transitions from submassive to massive PE or shows progressive hemodynamic compromise.',
        explanationWrong:
          'Switching to oral anticoagulation is appropriate for stable PE transitioning to outpatient care, not for a deteriorating patient. Inhaled nitric oxide may transiently improve oxygenation but does not address the underlying clot burden. Increasing oxygen alone does not treat the hemodynamic consequences of worsening PE.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 13,
        questionText:
          'A patient presents to the ED after smoke inhalation in a house fire. The patient has soot in the nares and mouth, facial burns, and stridor. After intubation, fiberoptic bronchoscopy reveals severe erythema and edema of the airways with carbonaceous deposits. At what time after injury does airway edema typically peak?',
        choices: {
          A: 'Immediately at the time of injury',
          B: 'At 6 hours post-injury',
          C: 'At 12 to 16 hours post-injury',
          D: 'At 24 to 48 hours post-injury',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Airway edema from inhalation injury typically peaks at 24 to 48 hours after exposure due to the progressive inflammatory response. This is why early intubation is recommended for patients with signs of inhalation injury, as delayed airway edema can make intubation extremely difficult or impossible.',
        explanationWrong:
          'Edema is not maximal at the time of injury, as the inflammatory cascade takes time to develop. While some edema is present at 6 hours and 12-16 hours, peak edema occurs later at 24-48 hours. This delayed peak is the reason patients with initially patent airways can rapidly deteriorate.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 14,
        questionText:
          'In point-of-care diaphragm ultrasound, a thickening fraction of less than 20% during inspiration suggests which condition?',
        choices: {
          A: 'Normal diaphragm function',
          B: 'Diaphragm hyperactivity',
          C: 'Diaphragm dysfunction or weakness',
          D: 'Pneumothorax on the affected side',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Diaphragm thickening fraction (the percentage increase in diaphragm thickness during inspiration measured at the zone of apposition) less than 20% indicates diaphragm weakness or dysfunction. Normal thickening fraction is typically greater than 20-36% and correlates with transdiaphragmatic pressure generation.',
        explanationWrong:
          'Normal diaphragm function shows a thickening fraction of 20% or greater. Diaphragm hyperactivity would produce an abnormally high thickening fraction. Pneumothorax affects lung sliding findings on ultrasound but does not directly alter diaphragm thickening measurements.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 15,
        questionText:
          'A 30-year-old patient with HIV (CD4 count 85 cells/mcL) presents with subacute onset of fever, dry cough, and progressive exertional dyspnea over 2 weeks. Chest X-ray shows bilateral perihilar interstitial infiltrates. LDH is elevated at 520 U/L. What is the most likely diagnosis?',
        choices: {
          A: 'Pneumocystis jirovecii pneumonia',
          B: 'Bacterial community-acquired pneumonia',
          C: 'Kaposi sarcoma of the lungs',
          D: 'Lymphocytic interstitial pneumonitis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The classic presentation of PCP in an HIV patient with CD4 < 200 includes subacute onset of dyspnea, dry cough, and fever over days to weeks, with bilateral perihilar interstitial infiltrates and elevated LDH. LDH elevation correlates with disease severity and extent of alveolar damage.',
        explanationWrong:
          'Bacterial pneumonia typically has an acute onset with productive cough and focal consolidation. Pulmonary Kaposi sarcoma presents with nodular lesions and can have pleural effusions. Lymphocytic interstitial pneumonitis has a more indolent course and is less common than PCP.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 16,
        questionText:
          'A patient with septic shock has persistent lactate elevation of 6.2 mmol/L despite achieving MAP of 65 mmHg with norepinephrine and adequate fluid resuscitation. What does the Surviving Sepsis Campaign recommend regarding lactate clearance?',
        choices: {
          A: 'Lactate monitoring is unnecessary once MAP target is achieved',
          B: 'Repeat lactate only if the patient clinically deteriorates',
          C: 'Measure lactate weekly during ICU stay',
          D: 'Guide resuscitation to normalize lactate as an indicator of tissue perfusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The Surviving Sepsis Campaign recommends using serial lactate measurements to guide ongoing resuscitation. Persistent lactate elevation suggests inadequate tissue perfusion despite meeting MAP targets, and resuscitation should be intensified until lactate normalizes or shows a significant downward trend.',
        explanationWrong:
          'Achieving MAP targets alone does not ensure adequate tissue perfusion, and lactate remains a vital marker. Waiting for clinical deterioration before rechecking lactate delays recognition of ongoing hypoperfusion. Weekly measurement is far too infrequent for acute sepsis resuscitation.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 17,
        questionText:
          'A patient with myasthenia gravis is scheduled for thymectomy. Which medications should be avoided or used with extreme caution in this patient population due to the risk of exacerbating neuromuscular weakness?',
        choices: {
          A: 'Acetaminophen and NSAIDs',
          B: 'Aminoglycoside antibiotics and neuromuscular blocking agents',
          C: 'Proton pump inhibitors',
          D: 'Beta-2 agonist bronchodilators',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Aminoglycosides inhibit presynaptic acetylcholine release and can potentiate neuromuscular blockade, making them dangerous in myasthenia gravis. Neuromuscular blocking agents have markedly prolonged effects in MG patients and should be used with extreme caution, with dosing reduced and neuromuscular monitoring employed.',
        explanationWrong:
          'Acetaminophen and NSAIDs do not affect neuromuscular transmission. Proton pump inhibitors have no effect on the neuromuscular junction. Beta-2 agonists do not exacerbate myasthenic weakness.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 18,
        questionText:
          'A critically ill patient is receiving comfort-focused care with a morphine infusion for dyspnea relief. The family asks if the morphine will hasten death. Which ethical principle most directly supports the use of opioids for symptom relief in this context?',
        choices: {
          A: 'The principle of justice',
          B: 'The principle of autonomy',
          C: 'The principle of double effect',
          D: 'The principle of beneficence alone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The principle of double effect states that an action with both a good effect (relieving suffering) and a potential bad effect (possible hastening of death) is ethically permissible when the intent is to achieve the good effect, the bad effect is not intended, and the good effect is proportionate. This directly supports opioid use for symptom relief in palliative care.',
        explanationWrong:
          'Justice concerns fair distribution of resources. Autonomy supports the patient\'s right to choose treatment but does not specifically address the dual-effect concern. Beneficence supports doing good but does not address the ethical tension when an intervention may have both beneficial and harmful effects.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 19,
        questionText:
          'A patient with a left-sided malignant pleural effusion undergoes pleurodesis with talc. Postoperatively, the patient develops fever, hypoxemia, and bilateral infiltrates. What is the most likely complication?',
        choices: {
          A: 'Talc-induced acute respiratory distress syndrome',
          B: 'Hospital-acquired pneumonia',
          C: 'Pulmonary embolism',
          D: 'Recurrent pleural effusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Talc pleurodesis can cause a systemic inflammatory response leading to ARDS, particularly when small-particle talc is used. This manifests as fever, progressive hypoxemia, and bilateral infiltrates within 24-72 hours of the procedure. The incidence has decreased with the use of large-particle, graded talc.',
        explanationWrong:
          'While hospital-acquired pneumonia is possible, the timing immediately after talc pleurodesis with bilateral infiltrates (not just the procedural side) is more consistent with talc-induced ARDS. Pulmonary embolism typically causes unilateral or regional perfusion defects rather than bilateral diffuse infiltrates. Recurrent effusion would be ipsilateral, not bilateral.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 20,
        questionText:
          'A HELLP syndrome patient develops respiratory failure requiring intubation. Laboratory studies show platelet count of 38,000/mcL, AST 890 U/L, LDH 1,200 U/L, and hemoglobin 8.2 g/dL with schistocytes on peripheral smear. In addition to delivery of the fetus, what is the most important supportive intervention?',
        choices: {
          A: 'Immediate splenectomy',
          B: 'Platelet transfusion to maintain count above 50,000/mcL and close monitoring for hepatic complications',
          C: 'High-dose aspirin therapy',
          D: 'Exchange transfusion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In HELLP syndrome, platelet transfusion is indicated to maintain counts above 50,000/mcL (or above 20,000-40,000 in the absence of active bleeding) to prevent spontaneous hemorrhage. Close monitoring for hepatic complications including subcapsular hematoma and hepatic rupture is essential, along with supportive care and delivery.',
        explanationWrong:
          'Splenectomy has no role in HELLP syndrome management. High-dose aspirin would worsen bleeding risk with severe thrombocytopenia. Exchange transfusion is used for thrombotic thrombocytopenic purpura (TTP), which shares some features with HELLP but has a different management approach.',
        topic: 'Obstetric Critical Care',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 12 seeded (20 questions, isFree: false)')

  // ─── EXAM 13 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q7,Q10,Q16,Q20) B=5(Q2,Q5,Q12,Q14,Q18) C=5(Q1,Q6,Q9,Q15,Q19) D=5(Q4,Q8,Q11,Q13,Q17)
  const exam13 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 13',
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
          'A patient with cyanide poisoning from a house fire presents with lactic acidosis, altered mental status, and cherry-red skin. After initial airway management, which antidote combination is most appropriate?',
        choices: {
          A: 'N-acetylcysteine and activated charcoal',
          B: 'Pralidoxime and atropine',
          C: 'Hydroxocobalamin or the cyanide antidote kit (sodium nitrite and sodium thiosulfate)',
          D: 'Flumazenil and naloxone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hydroxocobalamin directly binds cyanide to form cyanocobalamin (vitamin B12), which is renally excreted. It is the preferred antidote for smoke inhalation with suspected cyanide poisoning because it does not reduce oxygen-carrying capacity. The traditional cyanide antidote kit (nitrite/thiosulfate) is an alternative but induces methemoglobin, which is problematic with concurrent CO poisoning.',
        explanationWrong:
          'N-acetylcysteine is for acetaminophen toxicity. Pralidoxime and atropine are for organophosphate poisoning. Flumazenil reverses benzodiazepines and naloxone reverses opioids; neither addresses cyanide toxicity.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 2,
        questionText:
          'A patient is being ventilated with NAVA at a NAVA level of 1.5 cmH2O/mcV. The peak Edi is 12 mcV and the delivered pressure above PEEP is approximately 18 cmH2O. To reduce the level of support provided by the ventilator while maintaining proportional assist, what should be adjusted?',
        choices: {
          A: 'Increase the NAVA level to 2.0 cmH2O/mcV',
          B: 'Decrease the NAVA level to 1.0 cmH2O/mcV',
          C: 'Set a higher Edi trigger sensitivity',
          D: 'Increase the PEEP level',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The NAVA level determines the proportionality between the Edi signal and the delivered pressure (pressure = NAVA level x Edi). Decreasing the NAVA level from 1.5 to 1.0 cmH2O/mcV reduces the pressure delivered per unit of electrical activity, thus decreasing ventilatory support while maintaining proportional assist characteristics.',
        explanationWrong:
          'Increasing the NAVA level would increase the support delivered per unit of Edi. Adjusting Edi trigger sensitivity affects when the breath is triggered but not the level of support. Increasing PEEP adds to the total airway pressure but does not reduce the proportional support during inspiration.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 3,
        questionText:
          'The Wells score for pulmonary embolism incorporates several clinical criteria. Which of the following is assigned the highest point value in the Wells scoring system?',
        choices: {
          A: 'Clinical signs and symptoms of DVT (3 points) and PE as likely or more likely than alternative diagnosis (3 points)',
          B: 'Heart rate greater than 100 bpm (1.5 points)',
          C: 'Immobilization or surgery in previous 4 weeks (1.5 points)',
          D: 'Previous history of PE or DVT (1.5 points)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In the Wells score for PE, clinical signs and symptoms of DVT and the clinician\'s judgment that PE is as likely or more likely than an alternative diagnosis each receive 3 points, making them the highest-weighted criteria. The total maximum Wells score is 12.5 points.',
        explanationWrong:
          'Heart rate > 100, immobilization/surgery within 4 weeks, and history of PE/DVT each receive only 1.5 points. Other criteria include hemoptysis (1 point) and active cancer (1 point). The 3-point criteria carry the most weight in the scoring system.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 4,
        questionText:
          'A solid organ transplant recipient on tacrolimus and mycophenolate develops respiratory failure with diffuse bilateral infiltrates. Bronchoscopy with BAL is negative for bacteria, fungi, and Pneumocystis. CMV PCR is negative. Biopsy shows diffuse alveolar damage with organizing pneumonia. What is the most likely diagnosis?',
        choices: {
          A: 'Acute rejection of the transplanted organ',
          B: 'CMV pneumonitis despite negative PCR',
          C: 'Hospital-acquired pneumonia',
          D: 'Drug-induced pneumonitis from immunosuppressive medications',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Several immunosuppressive medications, including sirolimus and less commonly mycophenolate and tacrolimus, can cause drug-induced pneumonitis manifesting as organizing pneumonia or diffuse alveolar damage. When infectious causes have been thoroughly excluded, drug-induced lung injury should be considered, particularly with negative microbiologic workup.',
        explanationWrong:
          'Acute rejection would typically affect the transplanted organ itself. CMV PCR is a sensitive test, and a negative result makes CMV pneumonitis unlikely. HAP would typically show a positive BAL culture for bacteria.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 5,
        questionText:
          'In the management of sepsis, the Surviving Sepsis Campaign suggests which fluid as the preferred initial resuscitation fluid?',
        choices: {
          A: 'Albumin 5%',
          B: 'Balanced crystalloid solutions (e.g., lactated Ringer\'s) or normal saline',
          C: 'Hydroxyethyl starch (HES)',
          D: 'Dextrose 5% in water',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Surviving Sepsis Campaign recommends crystalloid solutions as the first-line resuscitation fluid for sepsis and septic shock. Balanced crystalloid solutions such as lactated Ringer\'s are suggested over normal saline to reduce the risk of hyperchloremic metabolic acidosis, though both are acceptable.',
        explanationWrong:
          'Albumin may be considered as an adjunct when patients require substantial amounts of crystalloid, but it is not the first-line fluid. HES is specifically recommended AGAINST in sepsis due to increased risk of renal failure and death. D5W distributes primarily to the intracellular space and is ineffective for intravascular volume resuscitation.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 6,
        questionText:
          'On point-of-care lung ultrasound, multiple B-lines (3 or more per intercostal space) in bilateral anterior and lateral lung zones are most consistent with which condition?',
        choices: {
          A: 'Pneumothorax',
          B: 'COPD exacerbation',
          C: 'Cardiogenic pulmonary edema',
          D: 'Pleural effusion',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Diffuse bilateral B-lines (3 or more per intercostal space) represent interstitial-alveolar syndrome and are highly suggestive of cardiogenic pulmonary edema. The BLUE protocol uses this finding with lung sliding to identify pulmonary edema as the cause of acute respiratory failure.',
        explanationWrong:
          'Pneumothorax shows absent lung sliding with A-lines, not B-lines. COPD exacerbation typically shows A-lines with lung sliding (the A-profile). Pleural effusion appears as an anechoic collection in dependent areas. B-lines indicate thickened interlobular septa from fluid.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 7,
        questionText:
          'A patient with amyotrophic lateral sclerosis (ALS) and chronic hypercapnic respiratory failure has been using nocturnal noninvasive ventilation. The patient now requires daytime NIV and has progressive bulbar dysfunction with difficulty managing secretions. What is the most appropriate next step?',
        choices: {
          A: 'Discussion of tracheostomy ventilation or palliative care based on the patient\'s advance directives and goals of care',
          B: 'Intubation and indefinite mechanical ventilation',
          C: 'Diaphragm pacing',
          D: 'Initiation of high-flow nasal cannula as a replacement for NIV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In progressive ALS with increasing NIV dependence and bulbar dysfunction, a goals-of-care discussion is essential. Tracheostomy ventilation may prolong survival but changes the nature and trajectory of care. Many patients with advance directives choose comfort-focused care. The decision must align with the patient\'s informed wishes.',
        explanationWrong:
          'Indefinite intubation without prior discussion of goals violates patient autonomy. Diaphragm pacing is contraindicated in ALS as it may accelerate diaphragm denervation. HFNC does not provide adequate ventilatory support for hypercapnic respiratory failure and cannot replace NIV.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 8,
        questionText:
          'A 32-year-old woman at 30 weeks gestation with peripartum cardiomyopathy and an ejection fraction of 20% develops cardiogenic shock. She is intubated and requires vasopressor and inotropic support. Which inotrope is preferred in this clinical scenario?',
        choices: {
          A: 'Digoxin',
          B: 'Milrinone',
          C: 'Isoproterenol',
          D: 'Dobutamine or milrinone with careful hemodynamic monitoring',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In peripartum cardiomyopathy with cardiogenic shock, dobutamine or milrinone are the preferred inotropic agents. Both improve contractility and reduce afterload. Dobutamine via beta-1 stimulation and milrinone via phosphodiesterase-3 inhibition. Either may be used with careful hemodynamic monitoring and dose titration.',
        explanationWrong:
          'Digoxin has a slow onset and is not appropriate for acute cardiogenic shock management. Milrinone alone is a reasonable choice but the most complete answer includes both options with monitoring. Isoproterenol causes significant tachycardia and is not a first-line inotrope for cardiogenic shock.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 9,
        questionText:
          'Following a sleeve lobectomy, which complication is unique to this procedure compared to a standard lobectomy?',
        choices: {
          A: 'Atelectasis of the remaining lobe',
          B: 'Postoperative pneumonia',
          C: 'Bronchial anastomotic dehiscence',
          D: 'Pleural effusion',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A sleeve lobectomy involves resection of a portion of the main bronchus with reanastomosis, which creates a bronchial anastomosis that is unique to this procedure. Anastomotic dehiscence is a specific complication not seen with standard lobectomy and can result in a bronchopleural fistula, mediastinitis, or tension pneumothorax.',
        explanationWrong:
          'Atelectasis, postoperative pneumonia, and pleural effusion can occur after any lobectomy and are not unique to sleeve lobectomy. The bronchial anastomosis is what distinguishes this procedure and its specific complication profile.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 10,
        questionText:
          'A patient with a tricyclic antidepressant overdose presents with QRS widening to 160 ms, seizures, and hypotension. After securing the airway, what is the priority treatment for the cardiac toxicity?',
        choices: {
          A: 'Sodium bicarbonate infusion to achieve a blood pH of 7.45-7.55',
          B: 'Lidocaine 1.5 mg/kg IV bolus',
          C: 'Amiodarone 150 mg IV infusion',
          D: 'Synchronized cardioversion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sodium bicarbonate is the first-line treatment for TCA-induced cardiac toxicity with QRS prolongation. Alkalinization to a pH of 7.45-7.55 overcomes the sodium channel blockade caused by TCAs, narrows the QRS complex, and improves conduction. It also helps with hypotension by improving cardiac contractility.',
        explanationWrong:
          'Lidocaine may be considered for refractory ventricular arrhythmias but is not first-line for QRS widening. Amiodarone is contraindicated in TCA overdose as it can worsen QT prolongation and hypotension. Synchronized cardioversion is not effective for the sodium channel blockade-mediated conduction delay.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 11,
        questionText:
          'A patient who has been terminally extubated is exhibiting noisy upper airway secretions (death rattle) that are distressing to the family. The patient appears comfortable. What is the most appropriate intervention?',
        choices: {
          A: 'Reintubation and suctioning',
          B: 'Aggressive deep suctioning every 30 minutes',
          C: 'Increasing the opioid infusion rate',
          D: 'Glycopyrrolate or hyoscine to reduce secretion production, with family education',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Anticholinergic agents such as glycopyrrolate or hyoscine (scopolamine) reduce secretion production and are the standard pharmacologic treatment for death rattle. Equally important is educating the family that the noise is caused by secretion pooling in the oropharynx and does not indicate patient distress or suffocation.',
        explanationWrong:
          'Reintubation contradicts the goals of comfort care. Aggressive suctioning is invasive, can cause discomfort, and stimulates further secretion production. Increasing opioids is appropriate for dyspnea but does not address the secretion-related noise and may cause unnecessary sedation.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 12,
        questionText:
          'D-dimer testing is most useful for ruling out pulmonary embolism in which clinical scenario?',
        choices: {
          A: 'A postoperative patient with a high Wells score',
          B: 'A patient with low pretest probability for PE based on clinical assessment',
          C: 'An ICU patient with sepsis and multiorgan dysfunction',
          D: 'A patient with known active malignancy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'D-dimer has high sensitivity but low specificity for PE. A negative D-dimer in a patient with low pretest probability (low Wells score) effectively excludes PE and avoids the need for CT pulmonary angiography. In patients with high pretest probability, D-dimer should not be used as it cannot reliably rule out PE.',
        explanationWrong:
          'In postoperative patients with high pretest probability, D-dimer is often elevated regardless and imaging is needed. ICU patients with sepsis frequently have elevated D-dimer from other causes, reducing its diagnostic utility. Active malignancy raises D-dimer levels, making the test unreliable for PE exclusion.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 13,
        questionText:
          'A patient with acute lymphoblastic leukemia and severe neutropenia develops respiratory failure. Despite broad-spectrum antibiotics, antifungals, and PCP prophylaxis, the patient continues to worsen. CT shows ground-glass opacities with crazy-paving pattern. BAL is non-diagnostic. What diagnosis should be considered?',
        choices: {
          A: 'Lymphoma progression',
          B: 'Pulmonary alveolar proteinosis',
          C: 'Atypical pneumonia',
          D: 'Diffuse alveolar hemorrhage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Diffuse alveolar hemorrhage (DAH) should be strongly considered in hematologic malignancy patients with respiratory failure, ground-glass opacities with crazy-paving pattern, and non-diagnostic BAL. DAH in this population can result from thrombocytopenia, infection, or drug toxicity. Sequential BAL aliquots showing progressively bloodier returns would confirm the diagnosis.',
        explanationWrong:
          'Lymphoma progression would typically show nodular or mass-like lesions rather than diffuse ground-glass opacities. Pulmonary alveolar proteinosis shows crazy-paving but is rare in acute leukemia. Atypical pneumonia would likely respond to the broad-spectrum coverage already provided.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 14,
        questionText:
          'In APRV, what is the primary mechanism of CO2 clearance?',
        choices: {
          A: 'Spontaneous breathing during the T-high phase',
          B: 'The brief release phase (T-low) where bulk gas flow occurs',
          C: 'Diffusion through the alveolar membrane at P-high',
          D: 'Chest wall oscillation during pressure transitions',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In APRV, the primary mechanism of CO2 clearance is the brief release phase (T-low), during which the pressure drops from P-high to P-low, causing a rapid bulk exhalation. This release allows gas exchange and CO2 removal. Spontaneous breathing during T-high provides supplemental ventilation and CO2 clearance but is not the primary mechanism.',
        explanationWrong:
          'While spontaneous breathing during T-high contributes to CO2 clearance, the primary mechanism is the release phase. Diffusion is always occurring but is passive and not the primary CO2 removal mechanism. Chest wall oscillation does not significantly contribute to CO2 clearance in APRV.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 15,
        questionText:
          'A patient ingests a large quantity of sustained-release calcium channel blockers. The patient develops profound bradycardia and hypotension refractory to IV calcium, atropine, and vasopressors. What rescue therapy should be considered?',
        choices: {
          A: 'Intralipid emulsion therapy',
          B: 'Activated charcoal via nasogastric tube',
          C: 'High-dose insulin euglycemic therapy',
          D: 'Hemodialysis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'High-dose insulin euglycemic therapy (HIET) is a rescue therapy for refractory calcium channel blocker toxicity. Insulin improves myocardial contractility by enhancing cardiomyocyte glucose uptake and metabolism, independent of calcium channels. Regular insulin at 1 unit/kg bolus followed by 1-10 units/kg/hour infusion with dextrose supplementation is the protocol.',
        explanationWrong:
          'Intralipid emulsion is used primarily for local anesthetic toxicity and some lipophilic drug overdoses but is not the primary rescue therapy for CCB toxicity. Activated charcoal may help if given early but is not a rescue therapy for established toxicity. Hemodialysis is not effective for most calcium channel blockers due to their high protein binding and large volume of distribution.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 16,
        questionText:
          'The BLUE protocol uses lung ultrasound to rapidly diagnose the cause of acute respiratory failure. Which combination of findings defines the A-profile, and what diagnosis does it suggest when combined with deep vein thrombosis on venous ultrasound?',
        choices: {
          A: 'Bilateral A-lines with lung sliding plus positive leg vein thrombosis suggests pulmonary embolism',
          B: 'Bilateral B-lines with lung sliding suggests COPD',
          C: 'Absent lung sliding with A-lines suggests pleural effusion',
          D: 'Bilateral A-lines without lung sliding suggests pneumonia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In the BLUE protocol, the A-profile consists of bilateral A-lines (normal aeration pattern) with preserved lung sliding. When combined with DVT on venous compression ultrasound, this strongly suggests pulmonary embolism as the cause of acute respiratory failure, as the lungs themselves appear normal while impaired perfusion causes hypoxemia.',
        explanationWrong:
          'Bilateral B-lines with lung sliding define the B-profile, suggesting pulmonary edema, not COPD. Absent lung sliding with A-lines suggests pneumothorax (A\'-profile), not pleural effusion. Bilateral A-lines without lung sliding would suggest pneumothorax, not pneumonia.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 17,
        questionText:
          'A patient with Lambert-Eaton myasthenic syndrome (LEMS) associated with small cell lung cancer is admitted to the ICU with respiratory failure. How does the neuromuscular pathology of LEMS differ from myasthenia gravis?',
        choices: {
          A: 'LEMS involves antibodies against acetylcholine receptors',
          B: 'LEMS involves antibodies against muscle-specific kinase',
          C: 'LEMS causes increased acetylcholine release',
          D: 'LEMS involves antibodies against presynaptic voltage-gated calcium channels, reducing acetylcholine release',
        },
        correctChoice: 'D',
        explanationCorrect:
          'LEMS is caused by antibodies against presynaptic voltage-gated calcium channels (VGCCs) at the neuromuscular junction. This reduces calcium influx into the presynaptic nerve terminal, impairing acetylcholine vesicle release. Unlike MG, which targets postsynaptic acetylcholine receptors, LEMS is a presynaptic disorder.',
        explanationWrong:
          'Antibodies against acetylcholine receptors characterize myasthenia gravis, not LEMS. Anti-MuSK antibodies cause a subtype of myasthenia gravis. LEMS decreases, not increases, acetylcholine release due to impaired presynaptic calcium channel function.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 18,
        questionText:
          'A patient with septic shock receives initial fluid resuscitation with 30 mL/kg of crystalloid. Despite this, the MAP remains 58 mmHg and the lactate is 5.8 mmol/L. According to the Surviving Sepsis Campaign, which vasopressor should be initiated first?',
        choices: {
          A: 'Dopamine',
          B: 'Norepinephrine',
          C: 'Phenylephrine',
          D: 'Epinephrine',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Norepinephrine is the first-line vasopressor recommended by the Surviving Sepsis Campaign for septic shock. It provides both alpha-1 mediated vasoconstriction and beta-1 mediated inotropy, effectively raising MAP while maintaining cardiac output. It has lower arrhythmia risk than dopamine.',
        explanationWrong:
          'Dopamine is associated with higher rates of arrhythmia and increased mortality compared to norepinephrine in septic shock. Phenylephrine is a pure alpha agonist that may decrease cardiac output and is generally not recommended as first-line. Epinephrine may be added as a second-line agent if MAP target cannot be achieved.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 19,
        questionText:
          'A patient is undergoing esophagectomy with thoracotomy. During single-lung ventilation of the left lung, the SpO2 drops to 88% despite FiO2 of 1.0 and optimal positioning. What is the most effective intervention to improve oxygenation?',
        choices: {
          A: 'Increase tidal volume on the ventilated lung',
          B: 'Administer systemic vasodilators',
          C: 'Apply CPAP 5-10 cmH2O to the nonventilated (operative) lung',
          D: 'Switch to bilateral lung ventilation permanently',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Applying CPAP of 5-10 cmH2O to the nonventilated lung provides passive oxygenation without full inflation, improving arterial oxygenation by reducing intrapulmonary shunt through the nonventilated lung. This is the most effective intervention that maintains adequate surgical exposure.',
        explanationWrong:
          'Increasing tidal volume to the ventilated lung may cause barotrauma and does not address shunting through the nonventilated lung. Systemic vasodilators would worsen V/Q matching by inhibiting hypoxic pulmonary vasoconstriction. Permanently switching to bilateral ventilation would impair surgical access, though intermittent bilateral ventilation may be needed as a temporizing measure.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 20,
        questionText:
          'A 35-year-old woman at 28 weeks gestation develops acute fatty liver of pregnancy with coagulopathy, hypoglycemia, and encephalopathy. She requires intubation for airway protection. Which laboratory finding is most characteristic of this condition and helps distinguish it from HELLP syndrome?',
        choices: {
          A: 'Marked hypoglycemia with elevated ammonia and low fibrinogen',
          B: 'Isolated thrombocytopenia',
          C: 'Elevated AST and ALT without coagulopathy',
          D: 'Normal bilirubin with isolated hemolysis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Acute fatty liver of pregnancy (AFLP) is characterized by hepatic failure with marked hypoglycemia (due to impaired gluconeogenesis), elevated ammonia, low fibrinogen, and prolonged PT/aPTT reflecting synthetic dysfunction. Unlike HELLP syndrome, AFLP features true hepatic failure with impaired synthetic function and coagulopathy from DIC.',
        explanationWrong:
          'Isolated thrombocytopenia without hepatic synthetic failure is more characteristic of gestational thrombocytopenia or ITP. Elevated transaminases without coagulopathy suggest hepatitis but not the synthetic failure seen in AFLP. Normal bilirubin with isolated hemolysis is not characteristic of AFLP, which typically shows elevated bilirubin.',
        topic: 'Obstetric Critical Care',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 13 seeded (20 questions, isFree: false)')

  // ─── EXAM 14 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q8,Q11,Q15,Q19) B=5(Q4,Q6,Q13,Q17,Q20) C=5(Q2,Q5,Q10,Q14,Q18) D=5(Q3,Q7,Q9,Q12,Q16)
  const exam14 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 14',
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
          'A patient on NAVA demonstrates a significant discrepancy between the set NAVA level and the actual delivered pressure, with pressures frequently reaching the upper pressure limit. Which factor most likely explains this finding?',
        choices: {
          A: 'Excessive Edi signal from diaphragmatic irritation or hiccups causing inappropriately high pressure delivery',
          B: 'Patient sedation reducing Edi amplitude',
          C: 'Normal NAVA operation during deep sleep',
          D: 'Ventilator malfunction requiring immediate replacement',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In NAVA, the delivered pressure is proportional to the Edi signal. Diaphragmatic irritation, hiccups, or electrode malposition can generate abnormally high Edi signals, causing the ventilator to deliver excessive pressure. The upper pressure limit serves as a safety mechanism in these situations. Catheter repositioning or evaluation of the cause of diaphragmatic irritation is needed.',
        explanationWrong:
          'Patient sedation would reduce Edi amplitude, resulting in lower pressure delivery, not pressure limit breaches. Deep sleep normally reduces Edi, not increases it. While ventilator malfunction is possible, the proportional delivery of high pressure due to high Edi is the most likely explanation and should be investigated first.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 2,
        questionText:
          'A patient with suspected PE has a contraindication to CT pulmonary angiography due to severe contrast allergy. Which alternative diagnostic study is most appropriate?',
        choices: {
          A: 'Chest X-ray',
          B: 'D-dimer level',
          C: 'Ventilation-perfusion (V/Q) lung scan',
          D: 'Serial troponin levels',
        },
        correctChoice: 'C',
        explanationCorrect:
          'V/Q scanning is the preferred alternative imaging study when CTPA is contraindicated. It has good sensitivity and specificity for PE, particularly when results are high probability or normal. Intermediate probability results may require further workup with lower extremity duplex ultrasound or pulmonary angiography.',
        explanationWrong:
          'Chest X-ray has poor sensitivity and specificity for PE, though it may show suggestive findings like Hampton\'s hump or Westermark\'s sign. D-dimer is a screening test, not a diagnostic imaging alternative. Troponin indicates myocardial strain but does not diagnose PE.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 3,
        questionText:
          'A stem cell transplant recipient at day +60 develops acute respiratory failure. High-resolution CT shows diffuse ground-glass opacities with areas of consolidation. BAL demonstrates hemorrhagic returns with increasing RBC counts in sequential aliquots. What is the most likely diagnosis?',
        choices: {
          A: 'Acute graft-versus-host disease of the lungs',
          B: 'Engraftment syndrome',
          C: 'Idiopathic pneumonia syndrome',
          D: 'Diffuse alveolar hemorrhage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Diffuse alveolar hemorrhage is characterized by progressively bloodier BAL returns in sequential aliquots, ground-glass opacities, and respiratory failure. It is a common and serious pulmonary complication after stem cell transplant, occurring most frequently during engraftment. Treatment includes high-dose corticosteroids and correction of coagulopathy.',
        explanationWrong:
          'Acute GVHD of the lungs typically presents later with bronchiolitis obliterans. Engraftment syndrome usually occurs within the first 2 weeks around neutrophil recovery. Idiopathic pneumonia syndrome is a diagnosis of exclusion after ruling out infection and hemorrhage.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 4,
        questionText:
          'In the Surviving Sepsis Campaign guidelines, which statement regarding corticosteroid use in septic shock is correct?',
        choices: {
          A: 'Corticosteroids are recommended for all patients with sepsis',
          B: 'IV hydrocortisone 200 mg/day is suggested for adults with septic shock who require ongoing vasopressor support',
          C: 'Dexamethasone is preferred over hydrocortisone',
          D: 'Corticosteroids should be avoided entirely in septic shock',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Surviving Sepsis Campaign suggests IV hydrocortisone 200 mg/day (50 mg every 6 hours or continuous infusion) for adults with septic shock who require ongoing vasopressor therapy despite adequate fluid resuscitation. Corticosteroids are thought to improve vasopressor responsiveness through restoration of vascular sensitivity to catecholamines.',
        explanationWrong:
          'Corticosteroids are not recommended for sepsis without shock. Hydrocortisone, not dexamethasone, is the recommended corticosteroid because it provides both glucocorticoid and mineralocorticoid activity. Complete avoidance of corticosteroids is not supported by current guidelines for refractory septic shock.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 5,
        questionText:
          'A patient presents with beta-blocker overdose causing severe bradycardia (HR 32 bpm) and hypotension (BP 68/40 mmHg). Atropine and IV fluids have been ineffective. Which pharmacologic intervention is most likely to improve heart rate and blood pressure?',
        choices: {
          A: 'Amiodarone',
          B: 'Digoxin',
          C: 'High-dose glucagon IV bolus followed by infusion',
          D: 'Procainamide',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Glucagon stimulates adenylate cyclase through a non-beta receptor mechanism, bypassing the beta-adrenergic blockade. A bolus of 3-5 mg IV followed by an infusion of 3-5 mg/hour can increase heart rate, contractility, and blood pressure. It is first-line therapy for beta-blocker overdose refractory to atropine.',
        explanationWrong:
          'Amiodarone would further slow heart rate and worsen bradycardia. Digoxin slows AV conduction and is contraindicated in this setting. Procainamide is an antiarrhythmic that would worsen hypotension and conduction delays.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 6,
        questionText:
          'A critically ill patient with acute respiratory failure has a focused cardiac ultrasound that shows a large pericardial effusion with right atrial collapse during diastole. What is the most appropriate next step?',
        choices: {
          A: 'Administer a fluid bolus and monitor',
          B: 'Emergent pericardiocentesis',
          C: 'Start vasopressors and arrange for elective drainage',
          D: 'Increase PEEP to improve oxygenation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Right atrial collapse during diastole in the presence of a large pericardial effusion indicates cardiac tamponade physiology. Emergent pericardiocentesis is the definitive treatment and should be performed without delay. Point-of-care ultrasound can guide needle insertion to improve safety.',
        explanationWrong:
          'While a fluid bolus may transiently improve preload, it does not address the tamponade and delays definitive treatment. Vasopressors alone are temporizing and do not address the underlying problem. Increasing PEEP would further compromise venous return and worsen tamponade physiology.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 7,
        questionText:
          'A 29-year-old woman at 32 weeks gestation develops ARDS from H1N1 influenza requiring mechanical ventilation. Regarding ventilator management in pregnancy, which consideration is most important?',
        choices: {
          A: 'Tidal volumes should be based on pre-pregnancy weight',
          B: 'Permissive hypercapnia has no fetal risks',
          C: 'Higher PEEP levels are always contraindicated in pregnancy',
          D: 'The PaCO2 target should be lower than in non-pregnant patients, around 30-32 mmHg, to maintain the normal maternal-fetal CO2 gradient',
        },
        correctChoice: 'D',
        explanationCorrect:
          'During pregnancy, the normal PaCO2 is approximately 28-32 mmHg due to progesterone-driven hyperventilation. Maintaining this lower PaCO2 is important to preserve the maternal-fetal CO2 gradient necessary for fetal CO2 clearance across the placenta. Permissive hypercapnia may impair fetal CO2 elimination.',
        explanationWrong:
          'Tidal volumes in ARDS should be based on predicted body weight regardless of pregnancy status, but the target PaCO2 should be lower. Permissive hypercapnia can cause fetal acidosis and should be avoided when possible. PEEP is not contraindicated in pregnancy and should be titrated based on oxygenation needs.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 8,
        questionText:
          'Following right pneumonectomy, the postoperative chest tube is initially placed to water seal without suction. On postoperative day 1, the mediastinum shifts toward the left on chest X-ray and the patient develops hypotension. What is the most likely cause?',
        choices: {
          A: 'Contralateral mediastinal shift from accumulation of fluid and air in the pneumonectomy space causing cardiac compression',
          B: 'Left-sided tension pneumothorax',
          C: 'Pulmonary embolism',
          D: 'Cardiac tamponade from surgical bleeding',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After pneumonectomy, the pneumonectomy space gradually fills with serosanguinous fluid. Excessive accumulation of air or fluid can cause the mediastinum to shift to the contralateral side, compressing the remaining lung and great vessels. This is a post-pneumonectomy syndrome and requires balanced drainage to prevent excessive mediastinal shift.',
        explanationWrong:
          'Left-sided tension pneumothorax would shift the mediastinum to the right, not the left. Pulmonary embolism would not cause mediastinal shift. Cardiac tamponade would show an enlarged cardiac silhouette without significant mediastinal shift.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 9,
        questionText:
          'A patient with critical illness polyneuropathy (CIP) develops respiratory failure. Which electrodiagnostic finding distinguishes CIP from critical illness myopathy (CIM)?',
        choices: {
          A: 'Both show identical electrodiagnostic patterns',
          B: 'CIM shows demyelinating changes',
          C: 'CIP demonstrates normal nerve conduction studies',
          D: 'CIP shows reduced sensory nerve action potential amplitudes, while CIM typically has preserved sensory responses',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Critical illness polyneuropathy (CIP) is an axonal sensorimotor neuropathy that affects both motor and sensory nerves, resulting in reduced compound muscle action potential (CMAP) and sensory nerve action potential (SNAP) amplitudes. Critical illness myopathy (CIM) primarily affects muscles, so sensory nerve responses are preserved.',
        explanationWrong:
          'CIP and CIM have distinct electrodiagnostic patterns. CIM does not show demyelinating changes; it shows myopathic changes on needle EMG. CIP characteristically shows abnormal nerve conduction studies with reduced CMAP and SNAP amplitudes.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 10,
        questionText:
          'A patient with end-stage heart failure on mechanical circulatory support has expressed a clear and consistent wish to withdraw the device. The patient has decision-making capacity and understands that withdrawal will result in death. Which statement is most accurate regarding this request?',
        choices: {
          A: 'Withdrawal of mechanical circulatory support is never ethically permissible',
          B: 'The device company must authorize the withdrawal',
          C: 'A competent patient has the ethical and legal right to withdraw any life-sustaining treatment, including mechanical circulatory support',
          D: 'Withdrawal requires a court order regardless of patient capacity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A patient with decision-making capacity has the ethical and legal right to refuse or withdraw any life-sustaining treatment, including mechanical circulatory support devices. This is grounded in the principle of patient autonomy. The medical team should ensure appropriate palliative support during and after device deactivation.',
        explanationWrong:
          'Withdrawal of life-sustaining treatment by a competent patient is both ethically permissible and legally supported. The device company has no authority over medical decisions. Court orders are not required when the patient has capacity and makes a voluntary informed decision.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 11,
        questionText:
          'A patient with acute respiratory failure is placed on ASV. The ventilator determines the optimal breathing pattern using which physiologic model?',
        choices: {
          A: 'The Otis least work of breathing equation based on respiratory system mechanics',
          B: 'The Henderson-Hasselbalch equation',
          C: 'The Bohr equation for dead space',
          D: 'The Harris-Benedict equation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'ASV uses the Otis equation to calculate the breathing pattern (tidal volume and respiratory rate combination) that minimizes the total work of breathing for a given minute ventilation target. It continuously measures respiratory system compliance and resistance to adjust the optimal pattern.',
        explanationWrong:
          'The Henderson-Hasselbalch equation relates pH, bicarbonate, and CO2 but is not used for ventilator algorithms. The Bohr equation quantifies dead space but is not the basis for ASV pattern optimization. The Harris-Benedict equation estimates basal metabolic rate, not breathing patterns.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 12,
        questionText:
          'A patient with intermediate-risk (submassive) PE is hemodynamically stable but shows evidence of right ventricular strain on echocardiography and an elevated troponin. Current guidelines suggest which approach?',
        choices: {
          A: 'Routine systemic thrombolysis for all submassive PE patients',
          B: 'Immediate IVC filter placement',
          C: 'Outpatient management with oral anticoagulation',
          D: 'Anticoagulation with close monitoring, reserving rescue reperfusion therapy for hemodynamic deterioration',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For hemodynamically stable submassive PE with RV dysfunction and elevated biomarkers, current guidelines recommend anticoagulation with close hemodynamic monitoring. Rescue reperfusion therapy (systemic thrombolysis or catheter-directed therapy) is reserved for patients who deteriorate hemodynamically despite anticoagulation.',
        explanationWrong:
          'Routine thrombolysis for all submassive PE is not recommended due to bleeding risk outweighing benefit in hemodynamically stable patients. IVC filters are not indicated as initial therapy when anticoagulation is possible. Outpatient management is inappropriate for submassive PE with RV strain and elevated biomarkers.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 13,
        questionText:
          'A patient with relapsed acute myeloid leukemia develops febrile neutropenia with a new pulmonary infiltrate. Blood cultures are negative. A CT halo sign is present. What empiric therapy should be initiated immediately?',
        choices: {
          A: 'Vancomycin monotherapy',
          B: 'Broad-spectrum antibacterial plus antifungal coverage with voriconazole',
          C: 'Trimethoprim-sulfamethoxazole alone',
          D: 'Observation with repeat imaging in 48 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The CT halo sign (ground-glass opacity surrounding a nodular opacity) in a severely neutropenic patient is highly suggestive of invasive pulmonary aspergillosis. Immediate initiation of broad-spectrum antibacterial therapy plus empiric antifungal coverage with voriconazole is critical, as delays in antifungal therapy worsen mortality.',
        explanationWrong:
          'Vancomycin alone does not cover the likely fungal etiology. TMP-SMX is for Pneumocystis, not Aspergillus. Observation delays treatment of a potentially fatal infection in a highly vulnerable population.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 14,
        questionText:
          'In the echocardiographic assessment of right ventricular function, which finding indicates RV pressure overload consistent with acute pulmonary embolism?',
        choices: {
          A: 'Left ventricular hypertrophy',
          B: 'Mitral valve regurgitation',
          C: 'McConnell\'s sign: RV free wall akinesis with preserved apical contractility',
          D: 'Global LV hypokinesis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'McConnell\'s sign describes akinesis of the RV free wall with preserved motion at the RV apex. It is relatively specific for acute PE-related RV pressure overload. The preserved apical motion is thought to result from tethering to the normally contracting left ventricle via shared myocardial fibers.',
        explanationWrong:
          'LV hypertrophy indicates chronic pressure or volume overload of the left ventricle. Mitral valve regurgitation is a left-sided finding. Global LV hypokinesis suggests cardiomyopathy or diffuse ischemia, not acute RV pressure overload from PE.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 15,
        questionText:
          'A 38-year-old patient presents to the ED after a suicide attempt by ingesting antifreeze (ethylene glycol). The patient has a severe anion gap metabolic acidosis, osmolar gap, and calcium oxalate crystals in the urine. After securing the airway, which treatment combination is most appropriate?',
        choices: {
          A: 'Fomepizole (or ethanol) plus hemodialysis',
          B: 'Activated charcoal and whole bowel irrigation',
          C: 'N-acetylcysteine and sodium bicarbonate',
          D: 'Pralidoxime and atropine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Fomepizole (4-methylpyrazole) inhibits alcohol dehydrogenase, preventing metabolism of ethylene glycol to its toxic metabolites (glycolic acid, oxalic acid). Hemodialysis removes both the parent compound and toxic metabolites and is indicated for severe poisoning with metabolic acidosis, renal failure, or high serum levels.',
        explanationWrong:
          'Activated charcoal poorly adsorbs alcohols and is not effective for ethylene glycol. N-acetylcysteine is for acetaminophen toxicity. Pralidoxime and atropine are for organophosphate poisoning.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 16,
        questionText:
          'A patient develops sepsis-induced cardiomyopathy with a new-onset ejection fraction of 30%. The Surviving Sepsis Campaign guidelines recommend which approach to hemodynamic management in this scenario?',
        choices: {
          A: 'High-dose phenylephrine as the sole vasopressor',
          B: 'Beta-blocker therapy to reduce myocardial oxygen demand',
          C: 'Calcium channel blocker for rate control',
          D: 'Adding dobutamine or epinephrine to norepinephrine if cardiac output remains inadequate despite adequate fluid resuscitation and MAP target achievement',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For sepsis-induced cardiomyopathy with persistent hypoperfusion despite adequate volume status and MAP target achievement with norepinephrine, the SSC suggests adding an inotropic agent such as dobutamine or using epinephrine (which has both vasopressor and inotropic properties) to improve cardiac output.',
        explanationWrong:
          'High-dose phenylephrine increases afterload without improving contractility and may worsen cardiac output in cardiomyopathy. Beta-blockers are generally not appropriate in acute septic shock with cardiomyopathy. Calcium channel blockers have negative inotropic effects and would worsen the situation.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 17,
        questionText:
          'A patient with myasthenia gravis develops a cholinergic crisis from excessive pyridostigmine use. Which clinical finding helps distinguish cholinergic crisis from myasthenic crisis?',
        choices: {
          A: 'Both present identically and cannot be distinguished clinically',
          B: 'Cholinergic crisis presents with excessive muscarinic effects: miosis, salivation, lacrimation, urination, diarrhea, and bradycardia',
          C: 'Cholinergic crisis shows only weakness without other symptoms',
          D: 'Myasthenic crisis always includes seizures',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cholinergic crisis results from excessive acetylcholine at both muscarinic and nicotinic receptors due to acetylcholinesterase inhibitor excess. The muscarinic manifestations (SLUDGE: Salivation, Lacrimation, Urination, Diarrhea, GI cramping, Emesis) plus miosis and bradycardia distinguish it from myasthenic crisis, which presents with weakness alone.',
        explanationWrong:
          'Cholinergic and myasthenic crises can be distinguished clinically by the presence of muscarinic symptoms in cholinergic crisis. Weakness may be present in both, but the cholinergic features are diagnostic. Seizures are not a characteristic feature of myasthenic crisis.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 18,
        questionText:
          'A patient with terminal metastatic lung cancer has chosen comfort-focused care. The family is requesting IV hydration be continued. The patient is minimally responsive with Cheyne-Stokes respirations. Which approach is most appropriate?',
        choices: {
          A: 'Continue IV fluids at maintenance rate to honor the family request',
          B: 'Refuse the family request and discontinue fluids immediately',
          C: 'Engage the family in a compassionate discussion about how artificial hydration in the dying process may worsen symptoms such as pulmonary secretions and edema, while offering mouth care for comfort',
          D: 'Increase IV fluids to improve the patient\'s level of consciousness',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Compassionate communication with the family about the potential harms of artificial hydration in the actively dying patient is essential. IV fluids at end of life can worsen pulmonary secretions, edema, and dyspnea without improving comfort. Offering alternatives such as mouth care demonstrates continued attentiveness to the patient\'s comfort.',
        explanationWrong:
          'Continuing maintenance fluids to appease the family without discussion may worsen the patient\'s comfort. Abruptly refusing the request without explanation damages the therapeutic relationship. Increasing fluids would likely worsen respiratory symptoms in an actively dying patient.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 19,
        questionText:
          'A patient develops a persistent air leak after thoracoscopic bullectomy and pleurodesis for spontaneous pneumothorax. Despite chest tube management, the air leak continues beyond 7 days. Which intervention should be considered?',
        choices: {
          A: 'Autologous blood patch pleurodesis through the chest tube',
          B: 'Increasing chest tube suction to -40 cmH2O',
          C: 'Removing the chest tube and applying a Heimlich valve',
          D: 'Administering systemic antibiotics alone',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Autologous blood patch pleurodesis involves instilling autologous blood through the chest tube into the pleural space to promote sealing of the air leak site. It is a minimally invasive intervention for persistent air leaks and has shown success rates of 70-90% when conservative management has failed.',
        explanationWrong:
          'Increasing suction to -40 cmH2O may worsen the air leak by increasing the pressure gradient across the defect. While a Heimlich valve allows outpatient management, it does not address the persistent leak. Systemic antibiotics alone do not treat air leaks.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 20,
        questionText:
          'A patient with amniotic fluid embolism develops sudden cardiovascular collapse during labor. Which combination of findings is most characteristic of this condition?',
        choices: {
          A: 'Gradual onset of chest pain with ST elevation',
          B: 'Sudden onset of hypoxemia, hypotension, and disseminated intravascular coagulation during or immediately after labor',
          C: 'Isolated hypertension with proteinuria',
          D: 'Gradual respiratory decline over 24-48 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Amniotic fluid embolism presents with sudden cardiovascular collapse, acute hypoxemia, and DIC during labor or within 30 minutes of delivery. The triad of sudden hypotension/cardiac arrest, respiratory failure, and coagulopathy in the peripartum period is highly characteristic. It is a clinical diagnosis with high mortality.',
        explanationWrong:
          'Gradual chest pain with ST elevation suggests acute coronary syndrome, which is rare in the obstetric population. Isolated hypertension with proteinuria describes preeclampsia. Gradual respiratory decline is inconsistent with the sudden, catastrophic nature of amniotic fluid embolism.',
        topic: 'Obstetric Critical Care',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 14 seeded (20 questions, isFree: false)')

  // ─── EXAM 15 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q11,Q14,Q20) B=5(Q1,Q6,Q9,Q16,Q18) C=5(Q3,Q8,Q12,Q15,Q19) D=5(Q2,Q5,Q10,Q13,Q17)
  const exam15 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 15',
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
          'A patient with a saddle pulmonary embolism is receiving heparin. The platelet count drops from 185,000 to 68,000 on day 5 of therapy. The 4T score is 6 (high probability). What is the most appropriate immediate management?',
        choices: {
          A: 'Continue heparin and monitor platelets daily',
          B: 'Discontinue all heparin products and initiate a non-heparin anticoagulant such as argatroban',
          C: 'Transfuse platelets to a target above 100,000',
          D: 'Switch to low-molecular-weight heparin',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A high-probability 4T score (6-8 points) with a >50% platelet drop on day 5 of heparin is highly suspicious for heparin-induced thrombocytopenia (HIT). All heparin products (including flushes) must be discontinued immediately and an alternative non-heparin anticoagulant such as argatroban, bivalirudin, or fondaparinux should be started to prevent the thrombotic complications of HIT.',
        explanationWrong:
          'Continuing heparin in HIT dramatically increases the risk of life-threatening thrombosis. Platelet transfusion is generally avoided in HIT as it may fuel thrombosis. LMWH cross-reacts with HIT antibodies and is contraindicated.',
        topic: 'Pulmonary Embolism',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 2,
        questionText:
          'A patient on ASV develops worsening respiratory compliance due to progressive ARDS. How will the ASV algorithm respond to the decrease in compliance?',
        choices: {
          A: 'Increase tidal volume to maintain minute ventilation',
          B: 'Increase respiratory rate to maintain minute ventilation',
          C: 'Make no adjustment and alarm for manual intervention',
          D: 'Decrease tidal volume and increase respiratory rate to maintain target minute ventilation while staying within safe pressure limits',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When compliance decreases, delivering the same tidal volume would require higher pressures that may exceed safety limits. The ASV algorithm responds by reducing tidal volume and increasing respiratory rate to maintain the target minute ventilation while keeping pressures within safe limits based on the Otis equation optimization.',
        explanationWrong:
          'Increasing tidal volume with decreased compliance would cause dangerously high airway pressures. Simply increasing rate without reducing tidal volume could also cause excessive pressures. ASV is a closed-loop system that automatically adjusts without requiring manual intervention for changes in mechanics.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 3,
        questionText:
          'A patient receiving immunosuppression after kidney transplant develops respiratory failure with bilateral infiltrates. BAL shows ground-glass bodies positive for Grocott-Gomori methenamine silver (GMS) stain. What is the most likely organism?',
        choices: {
          A: 'Aspergillus fumigatus',
          B: 'Cytomegalovirus',
          C: 'Pneumocystis jirovecii',
          D: 'Legionella pneumophila',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pneumocystis jirovecii appears as round or cup-shaped cysts on GMS (silver) staining, which is one of the most sensitive histologic stains for this organism. The finding of GMS-positive cysts in BAL from an immunocompromised patient with bilateral infiltrates confirms Pneumocystis pneumonia.',
        explanationWrong:
          'Aspergillus shows septate hyphae with acute-angle branching on GMS stain, not the characteristic cyst forms. CMV produces intranuclear inclusions best seen on H&E stain. Legionella is a gram-negative bacillus identified by culture, urinary antigen, or DFA, not GMS staining.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 4,
        questionText:
          'In the management of sepsis-induced hypotension, at what point should vasopressors be initiated according to the Surviving Sepsis Campaign?',
        choices: {
          A: 'Vasopressors should be started during or after initial fluid resuscitation if hypotension persists, to maintain MAP >= 65 mmHg',
          B: 'Only after 60 mL/kg of crystalloid has been administered',
          C: 'Vasopressors should be withheld until a central line is placed',
          D: 'Only if the lactate exceeds 10 mmol/L',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Surviving Sepsis Campaign recommends initiating vasopressors during or after fluid resuscitation if hypotension persists, with a target MAP of 65 mmHg or greater. Vasopressors should not be withheld while waiting for fluid resuscitation to be completed, especially when hypotension is life-threatening.',
        explanationWrong:
          'Waiting for 60 mL/kg of fluid unnecessarily delays vasopressor initiation and may cause fluid overload. Vasopressors can be started peripherally while central access is being obtained. A lactate threshold of 10 mmol/L is not a prerequisite for vasopressor initiation.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 5,
        questionText:
          'A patient presents after ingesting a large quantity of acetaminophen approximately 4 hours ago. The serum acetaminophen level is plotted above the treatment line on the Rumack-Matthew nomogram. Which statement regarding N-acetylcysteine (NAC) therapy is correct?',
        choices: {
          A: 'NAC is only effective if given within 1 hour of ingestion',
          B: 'NAC should be withheld until liver function tests become abnormal',
          C: 'NAC provides maximal hepatoprotection if given within 8 hours',
          D: 'NAC is most effective when given within 8 hours of ingestion but should be administered even if delayed beyond this window',
        },
        correctChoice: 'D',
        explanationCorrect:
          'N-acetylcysteine is most effective when administered within 8 hours of acetaminophen ingestion, providing nearly 100% hepatoprotection when given early. However, NAC should still be administered even if the patient presents beyond 8 hours, as it continues to provide benefit by replenishing glutathione, enhancing sulfation, and improving outcomes even in established hepatotoxicity.',
        explanationWrong:
          'NAC is effective far beyond 1 hour of ingestion. Waiting for abnormal liver function tests delays treatment and allows hepatotoxicity to progress. While 8 hours is the optimal window, the statement that NAC provides maximal protection within 8 hours is incomplete without emphasizing that delayed treatment is still beneficial.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 6,
        questionText:
          'On lung ultrasound, dynamic air bronchograms within a consolidated lung region suggest which diagnosis?',
        choices: {
          A: 'Atelectasis',
          B: 'Pneumonia',
          C: 'Pleural effusion',
          D: 'Pneumothorax',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Dynamic air bronchograms are air-filled bronchi that move with respiration within consolidated lung tissue. Their presence indicates that the airways are patent and the consolidation is caused by an alveolar filling process such as pneumonia, rather than absorption atelectasis where the airways are typically obstructed.',
        explanationWrong:
          'Atelectasis shows static air bronchograms or no air bronchograms because the airways are collapsed or obstructed. Pleural effusion appears as an anechoic collection without parenchymal consolidation features. Pneumothorax shows absent lung sliding, not consolidation with bronchograms.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 7,
        questionText:
          'A 31-year-old woman develops postpartum hemorrhage requiring massive transfusion. Despite transfusion, she develops worsening coagulopathy, tachycardia, and hypotension. Point-of-care testing shows a fibrinogen level of 80 mg/dL. What is the most critical blood product to administer?',
        choices: {
          A: 'Cryoprecipitate or fibrinogen concentrate',
          B: 'Packed red blood cells only',
          C: 'Platelet concentrate only',
          D: 'Fresh frozen plasma only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In obstetric hemorrhage with critically low fibrinogen (< 100 mg/dL), fibrinogen replacement with cryoprecipitate or fibrinogen concentrate is the most critical intervention. Fibrinogen levels are normally elevated in pregnancy (400-600 mg/dL), so a level of 80 mg/dL represents severe depletion. Low fibrinogen in obstetric hemorrhage is a strong predictor of massive transfusion need and poor outcomes.',
        explanationWrong:
          'While PRBCs are needed for oxygen carrying capacity, the critical issue is the severely depleted fibrinogen. Platelets alone do not address the fibrinogen deficit. FFP contains fibrinogen but at lower concentrations than cryoprecipitate, making it less efficient for rapid fibrinogen replacement.',
        topic: 'Obstetric Critical Care',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 8,
        questionText:
          'A patient with a chest tube after lobectomy develops subcutaneous emphysema that rapidly spreads across the chest wall, neck, and face. The chest tube appears to be functioning. What is the most likely cause?',
        choices: {
          A: 'Normal postoperative finding that requires no intervention',
          B: 'The chest tube has become blocked',
          C: 'A large bronchopleural fistula with air leak exceeding the chest tube drainage capacity',
          D: 'Allergic reaction to the chest tube material',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Rapidly progressive subcutaneous emphysema with a functioning chest tube suggests that the air leak (likely from a bronchopleural fistula) exceeds the drainage capacity of the existing tube. Additional chest tubes, larger bore drainage, or surgical intervention may be needed. Bronchoscopic evaluation should be performed to identify the fistula site.',
        explanationWrong:
          'Rapidly spreading subcutaneous emphysema is not a normal finding and requires urgent evaluation. If the chest tube were blocked, no air would drain at all, which is a different presentation. Allergic reactions to chest tube materials do not cause subcutaneous emphysema.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 9,
        questionText:
          'A patient with Guillain-Barre syndrome is receiving therapeutic plasma exchange. After the third treatment, the patient develops hypotension, paresthesias, and muscle cramps. What is the most likely cause of these symptoms?',
        choices: {
          A: 'Myasthenic crisis',
          B: 'Hypocalcemia from citrate anticoagulation during plasmapheresis',
          C: 'Hyperkalemia from hemolysis',
          D: 'Allergic reaction to replacement fluid',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Citrate, used as an anticoagulant during plasmapheresis, chelates ionized calcium and can cause symptomatic hypocalcemia. Classic symptoms include perioral and extremity paresthesias, muscle cramps, and hypotension. IV calcium gluconate supplementation during the procedure prevents and treats this complication.',
        explanationWrong:
          'Myasthenic crisis would present with worsening weakness and respiratory failure, not paresthesias and cramps. Hemolysis causing hyperkalemia is uncommon during standard plasmapheresis. Allergic reactions would present with urticaria, angioedema, or anaphylaxis rather than the specific symptom pattern described.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 10,
        questionText:
          'A patient with chronic opioid use presents with acute respiratory failure from an accidental fentanyl overdose. After naloxone administration and intubation, the patient develops flash pulmonary edema. What is the mechanism of naloxone-induced pulmonary edema?',
        choices: {
          A: 'Naloxone has direct pulmonary toxicity',
          B: 'Naloxone causes left ventricular failure',
          C: 'Allergic reaction to naloxone causing capillary leak',
          D: 'Massive sympathetic surge from rapid opioid reversal, increasing pulmonary vascular permeability and left ventricular afterload',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Naloxone-induced pulmonary edema results from a massive catecholamine surge when opioid reversal is too rapid, especially in opioid-dependent patients. The sudden sympathetic activation increases pulmonary vascular permeability (noncardiogenic mechanism) and can also increase afterload, contributing to hydrostatic pulmonary edema.',
        explanationWrong:
          'Naloxone has no direct pulmonary toxicity. The mechanism is not primarily left ventricular failure, though increased afterload may contribute. Allergic reactions to naloxone are extremely rare and present differently from pulmonary edema.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 11,
        questionText:
          'A patient in the ICU has been intubated for 14 days following a severe pneumonia. The patient fails a spontaneous breathing trial with rapid shallow breathing index (RSBI) of 120. Before concluding that the patient cannot be weaned, which reversible factor should be systematically evaluated?',
        choices: {
          A: 'Metabolic factors including thyroid function, adrenal insufficiency, electrolyte abnormalities (phosphate, magnesium, potassium), and nutritional status',
          B: 'Whether the patient has been on antibiotics for the correct duration',
          C: 'The patient\'s insurance authorization for prolonged ventilation',
          D: 'Whether the endotracheal tube brand should be changed',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Before concluding that a patient cannot be weaned, reversible causes of weaning failure should be systematically evaluated. These include hypothyroidism, adrenal insufficiency, hypophosphatemia, hypomagnesemia, hypokalemia, malnutrition, fluid overload, anemia, cardiac dysfunction, and inadequate pain control. Correcting these factors may enable successful weaning.',
        explanationWrong:
          'Antibiotic duration is important for infection treatment but is not a primary reversible factor in weaning failure assessment. Insurance status has no bearing on physiologic weaning capability. Changing endotracheal tube brand does not address the underlying causes of weaning failure.',
        topic: 'End-of-Life Care',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 12,
        questionText:
          'A patient on APRV has improved oxygenation and is ready for weaning. Which method is recommended for weaning from APRV toward conventional ventilation?',
        choices: {
          A: 'Abruptly switching to pressure support ventilation',
          B: 'Increasing P-low to 15 cmH2O',
          C: 'Gradually reducing P-high and extending T-low (drop and stretch method) until the settings approximate CPAP',
          D: 'Decreasing the FiO2 to 0.21 immediately',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The recommended weaning method from APRV is the "drop and stretch" technique: gradually decreasing P-high (drop) and extending T-low (stretch) while monitoring oxygenation and ventilation. This progressively converts the APRV settings toward CPAP, allowing the patient to assume more spontaneous breathing. Once P-high is low enough, the patient can be transitioned to pressure support or CPAP.',
        explanationWrong:
          'Abruptly switching to PSV may cause derecruitment and acute deterioration in patients who have been on APRV. Increasing P-low does not facilitate weaning and disrupts the release mechanism. Decreasing FiO2 to 0.21 immediately risks hypoxemia and is not a weaning strategy for the ventilator mode itself.',
        topic: 'Advanced Ventilation Modes',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 13,
        questionText:
          'Procalcitonin (PCT) levels are being used to guide antibiotic therapy in a patient with suspected sepsis. Which statement regarding PCT in sepsis management is most accurate?',
        choices: {
          A: 'PCT is equally elevated in viral and bacterial infections',
          B: 'PCT should replace blood cultures for identifying specific pathogens',
          C: 'A rising PCT level rules out fungal sepsis',
          D: 'Serial PCT measurements can help guide antibiotic de-escalation, with declining levels suggesting resolution of bacterial infection',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Procalcitonin is preferentially elevated in bacterial infections and declines with effective treatment. Serial measurements showing a decreasing trend can support antibiotic de-escalation and shorter treatment courses, reducing antibiotic exposure without increasing adverse outcomes. The Surviving Sepsis Campaign suggests PCT-guided antibiotic de-escalation.',
        explanationWrong:
          'PCT is generally more elevated in bacterial than viral infections, making it useful for differentiation. PCT identifies infection type but not specific pathogens and cannot replace cultures. Some fungal infections can elevate PCT, so a rising level does not rule out fungal sepsis.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 14,
        questionText:
          'On lung ultrasound, the spine sign refers to visualization of the thoracic spine above the diaphragm through a sonographic window. The presence of the spine sign is most consistent with which finding?',
        choices: {
          A: 'Pleural effusion, as the fluid provides an acoustic window to visualize the spine above the diaphragm',
          B: 'Normal lung aeration',
          C: 'Pneumothorax',
          D: 'Subcutaneous emphysema',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The spine sign occurs when the thoracic spine is visible above the diaphragm on ultrasound. Normally, aerated lung blocks ultrasound transmission and the spine is not visible above the diaphragm. When pleural fluid is present, it provides an acoustic window that allows visualization of the spine above the diaphragm, making the spine sign a reliable indicator of pleural effusion.',
        explanationWrong:
          'With normal lung aeration, the spine is not visible above the diaphragm because air blocks ultrasound transmission. Pneumothorax would show absent lung sliding, not spine visibility. Subcutaneous emphysema impairs ultrasound penetration and would obscure, not reveal, deeper structures.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 15,
        questionText:
          'A solid organ transplant recipient develops late-onset (> 6 months post-transplant) community-acquired pneumonia. Compared to the general population, which additional pathogen should be specifically considered in the differential diagnosis?',
        choices: {
          A: 'Streptococcus pneumoniae only',
          B: 'Haemophilus influenzae only',
          C: 'Nocardia species, in addition to typical community-acquired pathogens',
          D: 'Mycoplasma pneumoniae only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Late post-transplant patients (> 6 months) are susceptible to typical community-acquired pathogens but also remain at risk for opportunistic infections including Nocardia. Nocardia causes subacute to chronic pulmonary infection with nodular or cavitary lesions and can disseminate to the CNS. It requires specific diagnostic testing and prolonged treatment with TMP-SMX.',
        explanationWrong:
          'S. pneumoniae, H. influenzae, and M. pneumoniae are common community-acquired pathogens that affect both immunocompromised and immunocompetent populations. The key clinical question is which additional pathogens should be considered beyond typical CAP organisms, and Nocardia is an important consideration unique to the immunocompromised population.',
        topic: 'Immunocompromised Respiratory Failure',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 16,
        questionText:
          'A patient with autonomic dysreflexia from a high spinal cord injury develops severe hypertension (BP 220/130 mmHg) with bradycardia and pounding headache during a respiratory therapy treatment. What is the most critical initial intervention?',
        choices: {
          A: 'Administer IV labetalol immediately',
          B: 'Identify and remove the triggering stimulus (e.g., bladder distension, impacted stool, or positional discomfort)',
          C: 'Administer sublingual nitroglycerin',
          D: 'Increase sedation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The most critical initial intervention in autonomic dysreflexia is identification and removal of the triggering stimulus. Common triggers include bladder distension, bowel impaction, skin pressure, or positional discomfort. Removing the stimulus typically results in rapid resolution of the hypertensive crisis. Sitting the patient upright can also help reduce blood pressure through orthostatic effects.',
        explanationWrong:
          'While antihypertensive medications may be needed if removing the trigger does not resolve the hypertension, addressing the underlying cause is the priority. Sublingual nitroglycerin or IV labetalol are second-line interventions. Increasing sedation does not address the triggering stimulus and may mask symptoms.',
        topic: 'Neuromuscular Disease in ICU',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 17,
        questionText:
          'A patient with methanol poisoning is treated with fomepizole and hemodialysis. The patient develops visual disturbances including blurred vision and scotomata. Which metabolite of methanol is responsible for the ocular toxicity?',
        choices: {
          A: 'Acetaldehyde',
          B: 'Acetone',
          C: 'Glycolic acid',
          D: 'Formic acid',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Methanol is metabolized by alcohol dehydrogenase to formaldehyde, which is rapidly converted to formic acid. Formic acid inhibits mitochondrial cytochrome c oxidase in the retina and optic nerve, causing the characteristic visual toxicity of methanol poisoning, which can progress to permanent blindness if untreated.',
        explanationWrong:
          'Acetaldehyde is a metabolite of ethanol, not methanol. Acetone is produced from isopropyl alcohol metabolism. Glycolic acid is a metabolite of ethylene glycol, not methanol.',
        topic: 'Toxicology',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 18,
        questionText:
          'In the Surviving Sepsis Campaign guidelines, what is the recommended approach to source control in sepsis?',
        choices: {
          A: 'Source control should be deferred until the patient is fully hemodynamically stable',
          B: 'Source control should be achieved as soon as medically and logistically practical after diagnosis',
          C: 'Source control is only relevant for surgical infections',
          D: 'Source control should be attempted only after 48 hours of antibiotic therapy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Surviving Sepsis Campaign recommends that source control (drainage of abscesses, debridement of infected tissue, removal of infected devices) be implemented as soon as medically and logistically practical after the source is identified. Delayed source control is associated with increased mortality.',
        explanationWrong:
          'Waiting for complete hemodynamic stability may significantly delay necessary source control. Source control applies to all septic foci, not just surgical infections (e.g., infected central lines, urinary catheters). Waiting 48 hours for antibiotics before addressing the source unnecessarily delays intervention.',
        topic: 'Sepsis Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 19,
        questionText:
          'A patient with malignant mesothelioma undergoes extrapleural pneumonectomy. Compared to standard pneumonectomy, which additional structure is resected in this procedure?',
        choices: {
          A: 'The contralateral lung',
          B: 'The thoracic vertebral body',
          C: 'The ipsilateral parietal pleura, pericardium, and hemidiaphragm in addition to the lung',
          D: 'The esophagus',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Extrapleural pneumonectomy involves resection of the lung, ipsilateral parietal pleura, pericardium, and hemidiaphragm en bloc. This more extensive surgery aims to achieve complete macroscopic tumor removal in mesothelioma. The pericardium and diaphragm are reconstructed with prosthetic patches.',
        explanationWrong:
          'Contralateral lung resection would be incompatible with life. Vertebral body resection is not part of extrapleural pneumonectomy. Esophagectomy is not included in this procedure.',
        topic: 'Thoracic Surgery',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 20,
        questionText:
          'A patient with advanced idiopathic pulmonary fibrosis is hospitalized with an acute exacerbation. Despite high-flow nasal cannula at 60 L/min and FiO2 1.0, the PaO2 remains 48 mmHg. The patient has previously documented a do-not-intubate order and goals of comfort care. The patient is anxious and dyspneic. What is the most appropriate respiratory therapy intervention?',
        choices: {
          A: 'Titrate opioids and anxiolytics for dyspnea relief while continuing supplemental oxygen for comfort, and facilitate goals of care discussions with the family',
          B: 'Override the DNI order due to the severity of hypoxemia',
          C: 'Discontinue all supplemental oxygen immediately',
          D: 'Initiate prone positioning',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For a patient with a DNI order and comfort-focused goals, the respiratory therapist should focus on symptom management. Opioids for dyspnea and anxiolytics for anxiety are appropriate palliative interventions. Supplemental oxygen should be continued if it provides subjective comfort. Communication with the family about expectations and prognosis is an important component of care.',
        explanationWrong:
          'Overriding a DNI order without the patient\'s consent or appropriate legal process violates patient autonomy. Discontinuing oxygen abruptly would worsen dyspnea and is inconsistent with comfort care. Prone positioning is an aggressive intervention inconsistent with comfort-focused goals in a patient who cannot be intubated.',
        topic: 'End-of-Life Care',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 15 seeded (20 questions, isFree: false)')

  console.log('Done seeding ACCS mini exams 11-15!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
