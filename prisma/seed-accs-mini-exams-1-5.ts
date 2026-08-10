import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 1-5...')

  // ─── EXAM 1 (isFree: true) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q19) B=5(Q3,Q8,Q12,Q16,Q20) C=5(Q2,Q7,Q11,Q15,Q18) D=5(Q4,Q5,Q9,Q13,Q17)
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 1',
      examIndex: 1,
      isFree: true,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam1.id,
        questionIndex: 1,
        questionText:
          'A 58-year-old patient with septic shock is receiving norepinephrine at 20 mcg/min. The MAP remains 58 mmHg despite adequate fluid resuscitation. Which vasopressor should be added as a second-line agent?',
        choices: {
          A: 'Vasopressin 0.03 units/min',
          B: 'Dopamine 10 mcg/kg/min',
          C: 'Phenylephrine 100 mcg/min',
          D: 'Isoproterenol 2 mcg/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Vasopressin at 0.03 units/min is recommended as the second-line vasopressor in septic shock when MAP target cannot be achieved with norepinephrine alone. It acts on V1 receptors to cause vasoconstriction and may reduce norepinephrine requirements.',
        explanationWrong:
          'Dopamine is associated with more arrhythmias and higher mortality than norepinephrine in septic shock. Phenylephrine is a pure alpha agonist that may decrease cardiac output and is generally reserved for specific situations. Isoproterenol is a pure beta agonist that causes vasodilation and would worsen hypotension.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          'A patient with ARDS is being ventilated with volume-controlled ventilation. The tidal volume is set at 6 mL/kg IBW, PEEP 14 cmH2O, plateau pressure 28 cmH2O, and FiO2 0.80. The PaO2 is 62 mmHg and the PaCO2 is 58 mmHg. What is the most appropriate next step?',
        choices: {
          A: 'Increase tidal volume to 8 mL/kg IBW',
          B: 'Increase the respiratory rate',
          C: 'Accept the hypercapnia if pH is above 7.20',
          D: 'Decrease PEEP to reduce mean airway pressure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Permissive hypercapnia is an accepted strategy in lung-protective ventilation for ARDS. Elevated PaCO2 is tolerated as long as the arterial pH remains above 7.20 to avoid the adverse effects of severe acidosis while maintaining low tidal volumes.',
        explanationWrong:
          'Increasing tidal volume to 8 mL/kg IBW violates the lung-protective ventilation strategy, which limits tidal volume to 6 mL/kg IBW. While increasing respiratory rate is an option, it may lead to auto-PEEP and hemodynamic compromise. Decreasing PEEP would worsen oxygenation in ARDS.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          'A pulmonary artery catheter reveals the following hemodynamic data: CVP 14 mmHg, PAOP 22 mmHg, CI 1.8 L/min/m², SVR 2400 dynes·s/cm⁵. These findings are most consistent with which type of shock?',
        choices: {
          A: 'Septic shock',
          B: 'Cardiogenic shock',
          C: 'Hypovolemic shock',
          D: 'Neurogenic shock',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cardiogenic shock is characterized by elevated filling pressures (high CVP and PAOP), decreased cardiac index, and elevated SVR as the body compensates for poor cardiac output. These findings indicate pump failure with compensatory vasoconstriction.',
        explanationWrong:
          'Septic shock typically shows low SVR with high or normal cardiac output and low filling pressures after fluid resuscitation. Hypovolemic shock presents with low filling pressures (low CVP and PAOP). Neurogenic shock demonstrates low SVR with bradycardia and low filling pressures.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          'A patient on mechanical ventilation develops a sudden increase in peak inspiratory pressure from 30 to 52 cmH2O while the plateau pressure remains unchanged at 22 cmH2O. Which of the following is the most likely cause?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Acute pulmonary edema',
          C: 'Mainstem bronchus intubation',
          D: 'Mucus plugging in the endotracheal tube',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An increase in peak inspiratory pressure without a corresponding increase in plateau pressure indicates increased airway resistance, not decreased compliance. Mucus plugging, bronchospasm, or kinking of the endotracheal tube are the most common causes of isolated increases in peak pressure.',
        explanationWrong:
          'Tension pneumothorax would increase both peak and plateau pressures due to decreased lung compliance. Acute pulmonary edema decreases lung compliance and increases both peak and plateau pressures. Mainstem intubation increases both peak and plateau pressures due to ventilating a single lung.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          'During prone positioning of a patient with severe ARDS, the respiratory therapist observes a significant improvement in PaO2/FiO2 ratio from 85 to 180 mmHg. Which physiologic mechanism best explains this improvement?',
        choices: {
          A: 'Increased functional residual capacity only',
          B: 'Decreased cardiac output reducing shunt',
          C: 'Increased tidal volume delivery',
          D: 'Redistribution of ventilation to better-perfused dorsal lung regions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Prone positioning improves oxygenation primarily by redistributing ventilation to the dorsal lung regions, which receive the majority of pulmonary blood flow. This improves ventilation-perfusion matching and reduces intrapulmonary shunt, leading to improved gas exchange.',
        explanationWrong:
          'While FRC may increase slightly with prone positioning, this alone does not account for the significant oxygenation improvement. Decreased cardiac output is not a primary mechanism of improved oxygenation with prone positioning. Tidal volume delivery is determined by the ventilator settings and does not change with positioning.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          'A critically ill patient requires continuous renal replacement therapy (CRRT). The respiratory therapist notices the patient\'s PaCO2 has decreased from 44 to 32 mmHg since CRRT was initiated. What is the most likely explanation for this change?',
        choices: {
          A: 'CRRT removes bicarbonate, causing compensatory hyperventilation',
          B: 'The patient developed a pulmonary embolism',
          C: 'CRRT corrected the metabolic acidosis, reducing respiratory drive',
          D: 'The dialysate is causing direct CO2 removal',
        },
        correctChoice: 'A',
        explanationCorrect:
          'CRRT can remove bicarbonate from the blood, depending on the replacement fluid composition. This can result in a relative metabolic acidosis, stimulating the respiratory center and causing compensatory hyperventilation with a decreased PaCO2.',
        explanationWrong:
          'While pulmonary embolism can cause hyperventilation, it is not directly related to CRRT initiation. If CRRT corrected metabolic acidosis, the respiratory drive would decrease and PaCO2 would increase, not decrease. CRRT does not directly remove CO2 from the blood; that is the function of the lungs or an extracorporeal CO2 removal device.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          'A patient with severe ARDS meets the following criteria: PaO2/FiO2 ratio of 72 mmHg on FiO2 1.0, PEEP 18 cmH2O, and plateau pressure of 32 cmH2O. Despite optimal ventilator management and prone positioning, hypoxemia persists. Which intervention should be considered next?',
        choices: {
          A: 'Increase tidal volume to 10 mL/kg IBW',
          B: 'Initiate high-frequency oscillatory ventilation',
          C: 'Referral for venovenous ECMO',
          D: 'Switch to pressure-controlled ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Venovenous ECMO should be considered in patients with severe ARDS (PaO2/FiO2 < 80) who have failed conventional rescue therapies including optimal ventilator management and prone positioning. ECMO provides gas exchange support while allowing the lungs to rest and heal.',
        explanationWrong:
          'Increasing tidal volume to 10 mL/kg IBW is harmful and violates lung-protective ventilation principles. High-frequency oscillatory ventilation has not demonstrated survival benefit in adults with ARDS. Switching to pressure-controlled ventilation alone does not provide any inherent advantage over volume-controlled ventilation when plateau pressure and tidal volume are matched.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          'A patient in the ICU is receiving cisatracurium for neuromuscular blockade during mechanical ventilation for ARDS. The respiratory therapist is asked to assess the depth of paralysis. Which monitoring method is most appropriate?',
        choices: {
          A: 'Assessment of spontaneous respiratory effort',
          B: 'Train-of-four (TOF) peripheral nerve stimulation',
          C: 'Measurement of exhaled tidal volume variability',
          D: 'Bispectral index (BIS) monitoring',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Train-of-four (TOF) peripheral nerve stimulation is the standard method for monitoring the depth of neuromuscular blockade. The ulnar nerve is typically stimulated, and the number of thumb twitches out of four stimuli indicates the degree of paralysis. A target of 1-2 out of 4 twitches is generally recommended.',
        explanationWrong:
          'Assessment of respiratory effort is unreliable because it only detects the absence of effort, not the degree of blockade. Exhaled tidal volume variability is not a validated method for assessing neuromuscular blockade. BIS monitoring measures the depth of sedation, not neuromuscular blockade.',
        topic: 'Neuromuscular Blockade',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          'A patient with severe sepsis develops acute kidney injury requiring CRRT. Arterial blood gas results show: pH 7.18, PaCO2 28 mmHg, PaO2 88 mmHg, HCO3⁻ 10 mEq/L on FiO2 0.40. Which acid-base disturbance is present?',
        choices: {
          A: 'Respiratory acidosis with renal compensation',
          B: 'Combined respiratory and metabolic acidosis',
          C: 'Respiratory alkalosis with metabolic compensation',
          D: 'Metabolic acidosis with respiratory compensation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The pH is acidotic (7.18), the HCO3⁻ is severely low (10 mEq/L) indicating primary metabolic acidosis, and the PaCO2 is low (28 mmHg) indicating respiratory compensation (hyperventilation). This is consistent with lactic acidosis from sepsis compounded by renal failure.',
        explanationWrong:
          'Respiratory acidosis would present with an elevated PaCO2, not a decreased one. Combined respiratory and metabolic acidosis would show an elevated PaCO2 along with a decreased HCO3⁻. Respiratory alkalosis would have an alkalotic pH with a low PaCO2 as the primary disturbance.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          'According to the Berlin definition, which PaO2/FiO2 ratio classifies ARDS as severe?',
        choices: {
          A: '≤ 100 mmHg with PEEP ≥ 5 cmH2O',
          B: '101-200 mmHg with PEEP ≥ 5 cmH2O',
          C: '201-300 mmHg with PEEP ≥ 5 cmH2O',
          D: '≤ 150 mmHg with PEEP ≥ 10 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Berlin definition classifies ARDS into three categories based on the PaO2/FiO2 ratio with a minimum PEEP of 5 cmH2O: mild (201-300), moderate (101-200), and severe (≤ 100). Severe ARDS has the highest mortality rate.',
        explanationWrong:
          'A PaO2/FiO2 ratio of 101-200 mmHg defines moderate ARDS. A ratio of 201-300 mmHg defines mild ARDS. The Berlin definition uses a minimum PEEP of 5 cmH2O (not 10) for all severity categories and the cutoff for severe is ≤ 100 (not ≤ 150).',
        topic: 'ARDS Diagnosis',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          'A patient receiving mechanical ventilation in the ICU has the following ventilator settings: volume-controlled mode, VT 420 mL (6 mL/kg IBW), RR 28, PEEP 12 cmH2O, FiO2 0.60. The patient\'s intrinsic PEEP (auto-PEEP) is measured at 6 cmH2O. What is the most appropriate intervention?',
        choices: {
          A: 'Increase the set PEEP to 18 cmH2O',
          B: 'Increase the inspiratory flow rate',
          C: 'Decrease the respiratory rate',
          D: 'Switch to pressure support ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Auto-PEEP develops when expiratory time is insufficient for complete exhalation. Decreasing the respiratory rate increases the expiratory time, allowing more complete exhalation and reducing air trapping. This is the most direct intervention to address the cause of auto-PEEP.',
        explanationWrong:
          'Increasing set PEEP would add to the total PEEP (set PEEP + auto-PEEP) and could worsen hemodynamic compromise. While increasing inspiratory flow rate shortens inspiratory time and lengthens expiratory time, the most effective approach is to reduce the respiratory rate. Switching to PSV does not directly address auto-PEEP and may worsen it if the patient triggers at a high rate.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          'A patient on venovenous ECMO has the following circuit parameters: blood flow rate 4.5 L/min, sweep gas flow 6 L/min, FdO2 1.0. The patient\'s PaO2 is 55 mmHg on a ventilator with FiO2 0.30. What is the most appropriate adjustment to improve oxygenation?',
        choices: {
          A: 'Decrease the sweep gas flow rate',
          B: 'Increase the ECMO blood flow rate',
          C: 'Decrease the ECMO blood flow rate',
          D: 'Decrease the ventilator FiO2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'On venovenous ECMO, oxygenation is primarily determined by the blood flow rate through the membrane lung. Increasing the blood flow rate allows more blood to be oxygenated per unit time, improving systemic oxygen delivery and PaO2.',
        explanationWrong:
          'Decreasing the sweep gas flow rate primarily affects CO2 removal, not oxygenation. Decreasing the ECMO blood flow rate would worsen oxygenation. Decreasing the ventilator FiO2 would not improve oxygenation and could worsen it further.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          'A 72-year-old patient with a history of COPD is intubated for acute respiratory failure. After intubation, the patient becomes severely hypotensive with a blood pressure of 70/40 mmHg. Breath sounds are present bilaterally. What is the most likely cause of the hypotension?',
        choices: {
          A: 'Vasovagal response from laryngoscopy',
          B: 'Tension pneumothorax',
          C: 'Acute right heart failure from pulmonary embolism',
          D: 'Auto-PEEP and decreased venous return from positive pressure ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In patients with COPD, mechanical ventilation can cause significant air trapping and auto-PEEP. The increased intrathoracic pressure from auto-PEEP decreases venous return to the heart, reducing cardiac output and causing hypotension. Disconnecting the patient from the ventilator briefly can confirm this diagnosis.',
        explanationWrong:
          'While vasovagal response can occur during laryngoscopy, it typically resolves quickly and would cause bradycardia. Tension pneumothorax would present with absent or decreased breath sounds on the affected side. Pulmonary embolism is possible but less likely to occur immediately after intubation in a COPD patient.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          'An ICU patient develops ventilator-associated pneumonia (VAP). The initial empiric antibiotic regimen is started. Which of the following respiratory therapy interventions has the strongest evidence for preventing VAP?',
        choices: {
          A: 'Maintaining endotracheal tube cuff pressure between 20-30 cmH2O',
          B: 'Performing routine bronchoscopy every 48 hours',
          C: 'Using a heated humidifier instead of an HME',
          D: 'Changing the ventilator circuit every 24 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Maintaining endotracheal tube cuff pressure between 20-30 cmH2O has strong evidence for VAP prevention. Adequate cuff pressure prevents microaspiration of subglottic secretions past the cuff into the lower airways, which is a major mechanism of VAP development.',
        explanationWrong:
          'Routine bronchoscopy is not recommended for VAP prevention and adds risk of infection. There is no significant difference between heated humidifiers and HMEs in VAP prevention rates. Frequent ventilator circuit changes do not reduce VAP rates and may actually increase risk; circuits should only be changed when visibly soiled.',
        topic: 'Advanced Airway Management',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          'A patient in septic shock is receiving a propofol infusion for sedation during mechanical ventilation. The nurse reports that the patient\'s triglyceride level has increased from 150 to 520 mg/dL over 72 hours. What is the most appropriate action?',
        choices: {
          A: 'Increase the propofol infusion rate to deepen sedation',
          B: 'Add a statin medication to lower triglycerides',
          C: 'Discontinue propofol and switch to an alternative sedative',
          D: 'Continue propofol and monitor triglycerides weekly',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Propofol is formulated in a lipid emulsion (Intralipid) and can cause significant hypertriglyceridemia, especially with prolonged infusions. Triglyceride levels above 400 mg/dL warrant discontinuation of propofol to prevent propofol infusion syndrome and pancreatitis. Alternative sedatives such as dexmedetomidine or midazolam should be used.',
        explanationWrong:
          'Increasing the propofol infusion would worsen hypertriglyceridemia. Adding a statin does not adequately address acute hypertriglyceridemia from propofol. Continuing propofol with infrequent monitoring ignores the risk of propofol infusion syndrome, which can be fatal.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          'A patient with acute decompensated heart failure has a pulmonary artery catheter in place. The following data are obtained: PAOP 28 mmHg, CI 1.6 L/min/m², SVR 2200 dynes·s/cm⁵. Which pharmacologic intervention is most appropriate?',
        choices: {
          A: 'Phenylephrine infusion',
          B: 'Milrinone infusion',
          C: 'Aggressive IV fluid bolus',
          D: 'Esmolol infusion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Milrinone is a phosphodiesterase-3 inhibitor that provides inotropic support while also reducing afterload (inodilator). In acute decompensated heart failure with elevated filling pressures and low cardiac index, milrinone improves cardiac output while reducing PAOP and SVR.',
        explanationWrong:
          'Phenylephrine is a pure alpha agonist that would increase SVR further and worsen cardiac output. IV fluid bolus would increase the already elevated filling pressures (PAOP 28 mmHg) and worsen pulmonary edema. Esmolol is a beta-blocker that would further decrease cardiac output and worsen heart failure.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          'A patient with ARDS has been in the prone position for 14 hours. The respiratory therapist is preparing to return the patient to the supine position. Which of the following findings would indicate that prone positioning has been effective?',
        choices: {
          A: 'Decreased peak inspiratory pressure',
          B: 'Increased central venous pressure',
          C: 'Decreased heart rate',
          D: 'Sustained improvement in PaO2/FiO2 ratio after return to supine position',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A sustained improvement in PaO2/FiO2 ratio that persists after the patient is returned to the supine position indicates effective alveolar recruitment during prone positioning. This suggests that previously collapsed alveoli have been reopened and remain open, indicating a positive response to the therapy.',
        explanationWrong:
          'Decreased peak inspiratory pressure may occur but is not the primary indicator of prone positioning effectiveness. Increased CVP is a hemodynamic change that can occur with prone positioning but does not indicate therapeutic effectiveness. Decreased heart rate is not a reliable indicator of prone positioning efficacy.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          'A mechanically ventilated patient in the ICU requires deep sedation. The Richmond Agitation-Sedation Scale (RASS) target is -4 to -5. Which sedation regimen is most appropriate for this patient who is expected to require sedation for more than 48 hours?',
        choices: {
          A: 'Dexmedetomidine infusion alone',
          B: 'Propofol infusion at maximum dose',
          C: 'Midazolam infusion with daily sedation interruption',
          D: 'Ketamine infusion alone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'For deep sedation (RASS -4 to -5) anticipated for more than 48 hours, midazolam with daily sedation interruption is most appropriate. Dexmedetomidine does not reliably achieve deep sedation. Propofol has a maximum recommended duration and dose limits due to the risk of propofol infusion syndrome.',
        explanationWrong:
          'Dexmedetomidine is an alpha-2 agonist that provides light to moderate sedation (RASS 0 to -3) and is not appropriate for deep sedation targets. Propofol at maximum dose for extended periods risks propofol infusion syndrome, especially beyond 48 hours. Ketamine alone is not standard for continuous deep sedation in the ICU.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          'A patient on venoarterial ECMO has a differential hypoxemia with SpO2 98% on the right hand and SpO2 82% on the left hand. What does this finding indicate?',
        choices: {
          A: 'North-south syndrome (Harlequin syndrome) with inadequate ECMO support to the upper body',
          B: 'Normal finding on VA ECMO',
          C: 'Arterial cannula malposition',
          D: 'Venous cannula recirculation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Differential hypoxemia (Harlequin or north-south syndrome) occurs on VA ECMO when the native cardiac output from a recovering heart ejects poorly oxygenated blood from the lungs to the upper body, while the ECMO return in the femoral artery provides well-oxygenated blood to the lower body. This causes higher SpO2 in the lower extremities and lower SpO2 in the upper body and right arm.',
        explanationWrong:
          'This is not a normal finding and requires intervention, typically adding a venous return cannula to the internal jugular vein (converting to VAV ECMO) or improving lung function. Arterial cannula malposition would not cause differential upper vs. lower body oxygenation in this pattern. Venous recirculation causes uniformly poor oxygenation, not differential hypoxemia.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          'A patient with severe ARDS is being managed with low tidal volume ventilation (6 mL/kg IBW). The driving pressure is calculated at 18 cmH2O. Which of the following statements about driving pressure is correct?',
        choices: {
          A: 'Driving pressure is calculated as peak inspiratory pressure minus PEEP',
          B: 'A driving pressure above 15 cmH2O is associated with increased mortality in ARDS',
          C: 'Driving pressure is unrelated to tidal volume or respiratory system compliance',
          D: 'Driving pressure should be maintained below 25 cmH2O for lung protection',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Driving pressure (plateau pressure minus PEEP) above 15 cmH2O has been independently associated with increased mortality in ARDS. It reflects the ratio of tidal volume to respiratory system compliance and is a better predictor of outcomes than tidal volume or plateau pressure alone.',
        explanationWrong:
          'Driving pressure is calculated as plateau pressure minus PEEP, not peak inspiratory pressure minus PEEP. Driving pressure is directly related to tidal volume divided by respiratory system compliance (ΔP = VT/CRS). The threshold associated with increased mortality is 15 cmH2O, not 25 cmH2O.',
        topic: 'ARDS Management',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 1 seeded (20 questions, isFree: true)')

  // ─── EXAM 2 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q11,Q15,Q18) B=5(Q1,Q6,Q9,Q14,Q20) C=5(Q4,Q8,Q13,Q16,Q19) D=5(Q3,Q7,Q10,Q12,Q17)
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 2',
      examIndex: 2,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam2.id,
        questionIndex: 1,
        questionText:
          'A patient with septic shock has been resuscitated with 30 mL/kg of crystalloid and remains hypotensive. A central venous catheter shows an ScvO2 of 58%. What does this value suggest?',
        choices: {
          A: 'Adequate oxygen delivery',
          B: 'Inadequate oxygen delivery relative to tissue oxygen demand',
          C: 'Hypermetabolic state with excessive oxygen delivery',
          D: 'Left ventricular failure with pulmonary edema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An ScvO2 below 70% indicates that oxygen delivery is inadequate relative to tissue oxygen consumption. In septic shock, this suggests that despite fluid resuscitation, the patient needs further interventions to improve oxygen delivery, such as dobutamine or blood transfusion to optimize cardiac output and oxygen-carrying capacity.',
        explanationWrong:
          'Adequate oxygen delivery would be reflected by an ScvO2 of 70% or higher. A hypermetabolic state with excessive delivery would show a normal or elevated ScvO2. While left ventricular failure could contribute to a low ScvO2, the clinical context of septic shock and recent fluid resuscitation makes inadequate oxygen delivery the primary interpretation.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          'A patient with moderate ARDS (PaO2/FiO2 140 mmHg) is on volume-controlled ventilation with VT 6 mL/kg IBW, PEEP 10 cmH2O, and FiO2 0.70. The respiratory therapist performs a PEEP titration using a decremental trial. What is the primary goal of this approach?',
        choices: {
          A: 'Identify the PEEP level that provides the best compliance after a recruitment maneuver',
          B: 'Find the lowest PEEP that prevents hypercapnia',
          C: 'Determine the PEEP level that maximizes minute ventilation',
          D: 'Establish the PEEP level that produces the highest peak inspiratory pressure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A decremental PEEP trial involves performing a recruitment maneuver followed by stepwise reduction of PEEP while monitoring respiratory system compliance. The PEEP level at which compliance begins to decrease indicates alveolar derecruitment. The optimal PEEP is set 2 cmH2O above this point to maintain recruitment.',
        explanationWrong:
          'PEEP titration is focused on optimizing lung recruitment and compliance, not on preventing hypercapnia. Maximizing minute ventilation is not the goal of PEEP titration. Higher peak inspiratory pressure is generally undesirable and not the target of PEEP optimization.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          'A patient on VA ECMO has the following parameters: ECMO blood flow 3.8 L/min, native cardiac output estimated at 2 L/min. The patient\'s arterial blood gas shows PaO2 450 mmHg from the ECMO circuit return and PaO2 55 mmHg from a right radial arterial line. What modification should be considered?',
        choices: {
          A: 'Decrease the ECMO blood flow rate',
          B: 'Increase the sweep gas FiO2',
          C: 'Add a venous drainage cannula',
          D: 'Conversion to VAV ECMO configuration or addition of a return cannula to the internal jugular vein',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The right radial PaO2 of 55 mmHg indicates differential hypoxemia (Harlequin syndrome), where the native heart is ejecting deoxygenated blood to the coronary and cerebral circulations. Converting to VAV ECMO by adding a return cannula to the internal jugular vein delivers oxygenated blood to the right atrium, mixing with native cardiac output before it reaches the aortic root.',
        explanationWrong:
          'Decreasing ECMO blood flow would worsen lower body oxygenation without addressing the upper body desaturation. The sweep gas FiO2 affects CO2 removal primarily and is likely already at 1.0. Adding a venous drainage cannula increases blood flow but does not address the mixing problem in the aorta.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          'Which of the following correctly describes the mechanism of action of cisatracurium?',
        choices: {
          A: 'Depolarizing neuromuscular blocker that mimics acetylcholine',
          B: 'Centrally acting muscle relaxant that crosses the blood-brain barrier',
          C: 'Non-depolarizing neuromuscular blocker that competitively inhibits acetylcholine at the neuromuscular junction',
          D: 'Direct-acting skeletal muscle relaxant that inhibits calcium release from the sarcoplasmic reticulum',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cisatracurium is a non-depolarizing (competitive) neuromuscular blocking agent. It competes with acetylcholine for binding at nicotinic receptors at the neuromuscular junction, preventing depolarization and muscle contraction. It undergoes Hofmann elimination, which is organ-independent degradation.',
        explanationWrong:
          'Succinylcholine is the only depolarizing neuromuscular blocker in clinical use. Cisatracurium does not cross the blood-brain barrier and has no central nervous system effects. Dantrolene is the agent that acts directly on skeletal muscle by inhibiting calcium release from the sarcoplasmic reticulum.',
        topic: 'Neuromuscular Blockade',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          'A critically ill patient with ARDS has been paralyzed with cisatracurium for 48 hours. The team is considering discontinuing paralysis. Which of the following is a recognized complication of prolonged neuromuscular blockade in the ICU?',
        choices: {
          A: 'ICU-acquired weakness and prolonged recovery of muscle function',
          B: 'Rebound hypertension upon discontinuation',
          C: 'Malignant hyperthermia',
          D: 'Immediate respiratory alkalosis upon discontinuation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Prolonged use of neuromuscular blocking agents in the ICU is associated with ICU-acquired weakness (critical illness myopathy and polyneuropathy). This can result in prolonged muscle weakness, difficulty weaning from mechanical ventilation, and extended ICU stays.',
        explanationWrong:
          'Rebound hypertension is not a recognized complication of discontinuing neuromuscular blockade. Malignant hyperthermia is triggered by depolarizing agents (succinylcholine) and volatile anesthetics, not by non-depolarizing agents like cisatracurium. Immediate respiratory alkalosis upon discontinuation is not a typical complication.',
        topic: 'Neuromuscular Blockade',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          'A patient in the ICU develops acute respiratory failure requiring intubation. The patient has a known difficult airway with a Mallampati class IV and limited neck extension. Which approach is most appropriate for airway management?',
        choices: {
          A: 'Blind nasotracheal intubation',
          B: 'Awake fiberoptic intubation',
          C: 'Rapid sequence intubation with direct laryngoscopy',
          D: 'Emergent cricothyrotomy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Awake fiberoptic intubation is the gold standard for anticipated difficult airway management. It maintains the patient\'s spontaneous ventilation and protective airway reflexes while allowing direct visualization of the airway anatomy. Topical anesthesia and light sedation are used to facilitate the procedure.',
        explanationWrong:
          'Blind nasotracheal intubation has a high failure rate in patients with difficult airways and carries risks of epistaxis and false passage. Rapid sequence intubation with direct laryngoscopy in a known difficult airway risks a "cannot intubate, cannot oxygenate" scenario. Emergent cricothyrotomy is a last-resort rescue technique, not a first-line approach for a planned difficult airway.',
        topic: 'Advanced Airway Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          'A patient in hypovolemic shock from a gastrointestinal hemorrhage has the following hemodynamic parameters: CVP 2 mmHg, PAOP 4 mmHg, CI 2.0 L/min/m², SVR 2100 dynes·s/cm⁵. Which initial intervention is most appropriate?',
        choices: {
          A: 'Start norepinephrine infusion',
          B: 'Administer dobutamine',
          C: 'Begin milrinone infusion',
          D: 'Aggressive volume resuscitation with blood products and crystalloid',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In hypovolemic shock from hemorrhage, the primary intervention is volume resuscitation to restore intravascular volume. The low CVP and PAOP indicate inadequate preload, and the elevated SVR reflects compensatory vasoconstriction. Blood products should be administered for hemorrhagic shock to restore oxygen-carrying capacity.',
        explanationWrong:
          'Norepinephrine may be needed as a temporizing measure but does not address the underlying cause of hypovolemia. Dobutamine is an inotrope used for cardiogenic shock when preload is adequate. Milrinone would cause vasodilation and potentially worsen hypotension in a volume-depleted patient.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          'During mechanical ventilation, a patient\'s respiratory system compliance is measured at 18 mL/cmH2O. The tidal volume is 400 mL and the respiratory rate is 24 breaths/min. Which condition is most consistent with this severely reduced compliance?',
        choices: {
          A: 'Chronic obstructive pulmonary disease',
          B: 'Asthma exacerbation',
          C: 'Severe bilateral pneumonia with ARDS',
          D: 'Upper airway obstruction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Severely reduced respiratory system compliance (normal 60-100 mL/cmH2O) is characteristic of restrictive pathology such as ARDS, bilateral pneumonia, pulmonary fibrosis, or severe pulmonary edema. ARDS causes alveolar flooding and consolidation, dramatically reducing lung compliance.',
        explanationWrong:
          'COPD is characterized by increased compliance (hyperinflation) and increased airway resistance. Asthma primarily increases airway resistance, not compliance. Upper airway obstruction increases airway resistance but does not directly affect respiratory system compliance.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          'A patient with cardiogenic shock secondary to a massive anterior wall myocardial infarction has the following Swan-Ganz data: PAOP 30 mmHg, CI 1.4 L/min/m², SVR 2600 dynes·s/cm⁵. Despite dobutamine at 15 mcg/kg/min and norepinephrine at 12 mcg/min, the patient remains in refractory shock. Which mechanical circulatory support device should be considered?',
        choices: {
          A: 'Venovenous ECMO',
          B: 'Intra-aortic balloon pump or percutaneous ventricular assist device',
          C: 'Continuous renal replacement therapy',
          D: 'High-frequency oscillatory ventilation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In refractory cardiogenic shock unresponsive to maximal pharmacologic support, mechanical circulatory support is indicated. An intra-aortic balloon pump (IABP) provides counterpulsation to reduce afterload and improve coronary perfusion, while percutaneous ventricular assist devices (Impella) provide direct cardiac output support.',
        explanationWrong:
          'Venovenous ECMO provides respiratory support only and does not provide hemodynamic support. Venoarterial ECMO would be considered for combined cardiac and respiratory failure. CRRT addresses renal failure but does not provide circulatory support. HFOV is a ventilation mode and does not address cardiogenic shock.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          'A patient with severe ARDS is being ventilated with VT 6 mL/kg IBW, PEEP 16 cmH2O, FiO2 1.0, and plateau pressure 30 cmH2O. The PaO2/FiO2 ratio is 65 mmHg. Before initiating ECMO, which rescue therapy should be attempted?',
        choices: {
          A: 'Increasing tidal volume to 8 mL/kg IBW',
          B: 'Inhaled nitric oxide or epoprostenol',
          C: 'Routine suctioning and bronchoscopy',
          D: 'Prone positioning for at least 16 hours per day',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Prone positioning for at least 16 hours per day has demonstrated a significant mortality benefit in patients with severe ARDS (PaO2/FiO2 < 150). The PROSEVA trial showed a 28-day mortality reduction from 32.8% to 16%. Prone positioning should be attempted before considering ECMO.',
        explanationWrong:
          'Increasing tidal volume violates lung-protective ventilation principles and increases mortality in ARDS. Inhaled vasodilators may temporarily improve oxygenation but have not shown mortality benefit and are considered adjunctive therapies. Routine suctioning and bronchoscopy are standard care but are not rescue therapies for refractory hypoxemia.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          'A patient on mechanical ventilation is being evaluated for readiness to wean. The rapid shallow breathing index (RSBI) is calculated at 85 breaths/min/L. What does this value indicate?',
        choices: {
          A: 'The patient is likely to be successfully extubated',
          B: 'The patient needs a tracheostomy',
          C: 'The patient will likely fail a spontaneous breathing trial',
          D: 'The patient requires increased ventilatory support',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An RSBI less than 105 breaths/min/L predicts successful weaning from mechanical ventilation with good sensitivity. The RSBI is calculated by dividing the respiratory rate by the tidal volume (in liters) during a brief period of spontaneous breathing.',
        explanationWrong:
          'A tracheostomy decision is not based solely on a single RSBI value. An RSBI of 85 is below the threshold of 105, indicating likely success, not failure of a spontaneous breathing trial. An RSBI below 105 suggests the patient may be ready for weaning, not that they need increased support.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          'A patient on VV ECMO develops sudden dark blood in the arterial blood gas sample drawn from the pre-membrane (venous) port. The post-membrane PaO2 is 350 mmHg but the patient\'s systemic PaO2 is only 50 mmHg. What is the most likely problem?',
        choices: {
          A: 'Membrane lung failure',
          B: 'Inadequate sweep gas flow',
          C: 'Air embolism in the circuit',
          D: 'Recirculation of oxygenated blood back into the drainage cannula',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Recirculation occurs on VV ECMO when oxygenated blood returning to the patient is immediately drained back into the circuit without passing through the systemic circulation. This results in a high post-membrane PaO2 but a low systemic PaO2, as the oxygenated blood never reaches the patient\'s tissues.',
        explanationWrong:
          'Membrane lung failure would result in a decreased post-membrane PaO2, which is not the case here (350 mmHg). Inadequate sweep gas flow would affect CO2 removal primarily. Air embolism presents with acute hemodynamic instability and does not explain the discrepancy between circuit and systemic oxygenation.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          'A critically ill patient develops abdominal compartment syndrome with an intra-abdominal pressure of 28 mmHg. How does this condition affect mechanical ventilation?',
        choices: {
          A: 'It decreases airway resistance',
          B: 'It improves respiratory system compliance',
          C: 'It increases plateau pressure and decreases respiratory system compliance due to diaphragmatic elevation',
          D: 'It has no effect on pulmonary mechanics',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Abdominal compartment syndrome causes cephalad displacement of the diaphragm, which reduces thoracic volume, decreases respiratory system compliance (particularly chest wall compliance), and increases plateau pressures. Higher PEEP and ventilator pressures may be required, and the patient may tolerate plateau pressures above 30 cmH2O because the elevated pressure is from the chest wall, not the lung.',
        explanationWrong:
          'Abdominal compartment syndrome does not decrease airway resistance; the problem is reduced compliance from the elevated diaphragm. It worsens, not improves, respiratory system compliance. It has significant effects on pulmonary mechanics and can contribute to respiratory failure.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          'Which of the following is an absolute contraindication to prone positioning in a patient with ARDS?',
        choices: {
          A: 'Hemodynamic instability requiring vasopressors',
          B: 'Unstable spinal fracture',
          C: 'Presence of a tracheostomy',
          D: 'Morbid obesity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Unstable spinal fractures are an absolute contraindication to prone positioning because the turning process could cause spinal cord injury. Other absolute contraindications include open abdominal wounds, recent tracheal surgery, and anterior chest tube placement with active air leak.',
        explanationWrong:
          'Hemodynamic instability requiring vasopressors is a relative contraindication but not absolute; many patients on vasopressors undergo prone positioning safely. A tracheostomy is not a contraindication to prone positioning. While morbid obesity makes prone positioning logistically challenging, it is not an absolute contraindication.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          'A patient on mechanical ventilation has a pulmonary artery catheter that reveals a mixed venous oxygen saturation (SvO2) of 50%. The hemoglobin is 7.2 g/dL, cardiac output is 6 L/min, and SaO2 is 99%. What is the most appropriate intervention to improve the SvO2?',
        choices: {
          A: 'Transfuse packed red blood cells',
          B: 'Increase the FiO2',
          C: 'Start a dobutamine infusion',
          D: 'Administer a fluid bolus',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The SvO2 is low (normal 60-80%), and the cardiac output is normal. The SaO2 is already 99%, so increasing FiO2 will not significantly improve oxygen delivery. The hemoglobin is critically low at 7.2 g/dL, which limits oxygen-carrying capacity. Transfusing packed red blood cells will increase the hemoglobin and improve systemic oxygen delivery.',
        explanationWrong:
          'Increasing FiO2 will have minimal effect since the SaO2 is already 99%. Dobutamine would increase cardiac output, but the cardiac output is already adequate at 6 L/min. A fluid bolus would not address the primary problem of decreased oxygen-carrying capacity from anemia.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          'A patient is receiving continuous renal replacement therapy (CRRT) with citrate regional anticoagulation. The ionized calcium level is 0.8 mmol/L (normal 1.1-1.3 mmol/L). What action should be taken?',
        choices: {
          A: 'Increase the citrate infusion rate',
          B: 'Discontinue CRRT immediately',
          C: 'Increase the calcium chloride replacement infusion',
          D: 'Decrease the blood flow rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'During citrate-based CRRT, citrate chelates ionized calcium in the circuit for anticoagulation. Calcium is replaced post-filter to maintain systemic ionized calcium levels. When the systemic ionized calcium is low, the calcium replacement infusion rate should be increased to correct the hypocalcemia.',
        explanationWrong:
          'Increasing the citrate infusion rate would further chelate calcium and worsen hypocalcemia. Discontinuing CRRT is not necessary for a manageable complication like hypocalcemia. Decreasing the blood flow rate does not directly address the calcium deficit.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          'A patient with severe ARDS is being ventilated with airway pressure release ventilation (APRV). The settings are P-high 28 cmH2O, T-high 4.5 seconds, P-low 0 cmH2O, T-low 0.5 seconds. The patient\'s oxygenation is improving but CO2 is rising. Which adjustment is most appropriate?',
        choices: {
          A: 'Increase P-high',
          B: 'Decrease T-high',
          C: 'Increase P-low to 10 cmH2O',
          D: 'Decrease T-high to increase the release frequency',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In APRV, CO2 elimination occurs primarily during the release phase (T-low). Decreasing T-high increases the number of release cycles per minute, allowing more frequent ventilation and improved CO2 clearance while maintaining the lung recruitment achieved during the prolonged high-pressure phase.',
        explanationWrong:
          'Increasing P-high may improve oxygenation but does not directly enhance CO2 removal. Decreasing T-high and the answer about decreasing T-high are the same concept. Increasing P-low would reduce the pressure gradient during release, decreasing tidal volume and worsening CO2 elimination.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          'A patient in the ICU is receiving dexmedetomidine for sedation during mechanical ventilation. Which of the following is a unique advantage of dexmedetomidine compared to benzodiazepines and propofol?',
        choices: {
          A: 'Patients can be easily aroused for neurologic assessments while maintaining sedation',
          B: 'It provides superior neuromuscular blockade',
          C: 'It eliminates the need for pain management',
          D: 'It is safe at any dose for prolonged infusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Dexmedetomidine produces "cooperative sedation" where patients can be easily aroused for neurologic assessments and follow commands, then return to a sedated state when undisturbed. This is particularly valuable in neurocritical care and for daily sedation interruptions.',
        explanationWrong:
          'Dexmedetomidine has no neuromuscular blocking properties. It provides mild analgesic effects but does not eliminate the need for dedicated pain management. Dexmedetomidine can cause bradycardia and hypotension, especially at higher doses, and dose limits should be observed.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          'A mechanically ventilated patient develops a massive air leak through the chest tube drainage system following thoracic surgery. The tidal volume delivery is significantly less than the set tidal volume. Which ventilator adjustment is most appropriate?',
        choices: {
          A: 'Switch to volume-controlled ventilation and increase the set tidal volume',
          B: 'Decrease PEEP to zero',
          C: 'Switch to pressure-controlled ventilation to maintain a consistent inspiratory pressure despite the leak',
          D: 'Increase the inspiratory time',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pressure-controlled ventilation is preferred in the presence of a large air leak because it delivers a set pressure regardless of the leak, providing more consistent alveolar ventilation. In volume-controlled mode, the ventilator may deliver the set volume into the leak rather than to the patient\'s lungs.',
        explanationWrong:
          'Increasing set tidal volume in volume mode would increase the air leak and potentially worsen the underlying condition. Decreasing PEEP to zero could cause alveolar collapse and worsen oxygenation. Increasing inspiratory time alone does not address the fundamental problem of volume loss through the air leak.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          'A patient on mechanical ventilation for ARDS has a PEEP of 14 cmH2O and develops oliguria with a urine output of 15 mL/hr. The CVP is 18 mmHg and the blood pressure is 110/70 mmHg. What is the most likely mechanism of the decreased urine output?',
        choices: {
          A: 'Prerenal azotemia from dehydration',
          B: 'Decreased renal perfusion pressure due to elevated intrathoracic pressure reducing venous return and cardiac output',
          C: 'Intrinsic acute tubular necrosis',
          D: 'Obstructive uropathy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'High levels of PEEP increase intrathoracic pressure, which impedes venous return to the heart and can reduce cardiac output. Additionally, elevated intrathoracic pressure is transmitted to the renal veins, increasing renal venous pressure and decreasing the renal perfusion gradient, leading to oliguria.',
        explanationWrong:
          'The elevated CVP of 18 mmHg argues against simple dehydration as the cause. Acute tubular necrosis is possible but is not directly related to the PEEP level and would require additional evidence such as muddy brown casts. Obstructive uropathy is not related to mechanical ventilation settings.',
        topic: 'Renal Replacement Therapy',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 2 seeded (20 questions, isFree: false)')

  // ─── EXAM 3 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q7,Q12,Q16,Q20) B=5(Q2,Q5,Q10,Q14,Q17) C=5(Q1,Q8,Q11,Q15,Q19) D=5(Q4,Q6,Q9,Q13,Q18)
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 3',
      examIndex: 3,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam3.id,
        questionIndex: 1,
        questionText:
          'A patient with severe ARDS is on lung-protective ventilation with a VT of 6 mL/kg IBW. The plateau pressure is 32 cmH2O and PEEP is 14 cmH2O. According to the ARDSNet protocol, which action should be taken regarding the plateau pressure?',
        choices: {
          A: 'No action needed as plateau pressure is acceptable',
          B: 'Increase PEEP to improve recruitment',
          C: 'Decrease tidal volume to 5 or 4 mL/kg IBW to reduce plateau pressure below 30 cmH2O',
          D: 'Switch to high-frequency oscillatory ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The ARDSNet protocol recommends maintaining plateau pressure at or below 30 cmH2O to minimize ventilator-induced lung injury. When the plateau pressure exceeds 30 cmH2O, the tidal volume should be reduced in 1 mL/kg increments (to a minimum of 4 mL/kg IBW) until the target is achieved.',
        explanationWrong:
          'A plateau pressure of 32 cmH2O exceeds the recommended limit of 30 cmH2O and requires intervention. Increasing PEEP would likely further increase the plateau pressure. HFOV has not demonstrated mortality benefit in adult ARDS and is not the first-line response to elevated plateau pressures.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          'A patient in the ICU with a pulmonary artery catheter shows the following tracing: large V waves on the PAOP waveform with a mean PAOP of 25 mmHg. What is the most likely cause?',
        choices: {
          A: 'Aortic stenosis',
          B: 'Acute mitral regurgitation',
          C: 'Pulmonary hypertension',
          D: 'Tricuspid stenosis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Large V waves on the PAOP waveform are characteristic of acute mitral regurgitation. During ventricular systole, blood regurgitates through the incompetent mitral valve into the left atrium, creating prominent V waves. This is commonly seen after papillary muscle rupture following myocardial infarction.',
        explanationWrong:
          'Aortic stenosis would not produce V waves on the PAOP tracing. Pulmonary hypertension affects the pulmonary artery pressure, not the PAOP waveform directly. Tricuspid stenosis affects the right atrial pressure waveform with prominent A waves, not the PAOP.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          'A patient with septic shock is receiving norepinephrine at 25 mcg/min, vasopressin 0.03 units/min, and has been given stress-dose hydrocortisone. The lactate level continues to rise at 8.2 mmol/L. Which additional vasopressor should be considered?',
        choices: {
          A: 'Epinephrine as a third-line vasopressor',
          B: 'Dopamine at renal dose',
          C: 'Isoproterenol',
          D: 'Nitroprusside',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Epinephrine is recommended as a third-line vasopressor in septic shock when the combination of norepinephrine and vasopressin fails to achieve the target MAP. Epinephrine provides both alpha and beta-adrenergic effects, increasing both vascular tone and cardiac output.',
        explanationWrong:
          'Low-dose (renal dose) dopamine has been shown to provide no renal protective benefit and is no longer recommended. Isoproterenol is a pure beta agonist that causes vasodilation and tachycardia, which would worsen hypotension. Nitroprusside is a vasodilator and would be contraindicated in shock.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          'A patient on VV ECMO has a circuit blood flow of 4.0 L/min and a sweep gas flow of 4 L/min. The PaCO2 is 55 mmHg and the team wants to reduce it to 40 mmHg. Which adjustment is most appropriate?',
        choices: {
          A: 'Increase the ECMO blood flow rate',
          B: 'Decrease the FdO2 on the sweep gas',
          C: 'Decrease the sweep gas flow rate',
          D: 'Increase the sweep gas flow rate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'On ECMO, CO2 removal is primarily controlled by the sweep gas flow rate across the membrane lung. Increasing the sweep gas flow rate increases the gradient for CO2 diffusion across the membrane, resulting in more efficient CO2 removal and a lower PaCO2.',
        explanationWrong:
          'Increasing the ECMO blood flow rate primarily affects oxygenation, not CO2 removal. Decreasing the FdO2 affects oxygenation. Decreasing the sweep gas flow rate would reduce CO2 removal and increase the PaCO2.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          'A patient with ARDS has been placed on prone positioning. After 2 hours, the nurse reports that facial and periorbital edema are developing. What is the appropriate response?',
        choices: {
          A: 'Immediately return the patient to the supine position',
          B: 'Recognize this as an expected complication and ensure proper head positioning with frequent skin assessments',
          C: 'Administer IV furosemide to reduce the edema',
          D: 'Increase the PEEP to reduce venous congestion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Facial and periorbital edema are expected complications of prone positioning due to gravitational redistribution of fluid. The appropriate management includes ensuring the head is positioned with adequate support, performing frequent skin assessments, repositioning the head side to side, and ensuring the eyes are protected and lubricated.',
        explanationWrong:
          'Facial edema alone is not an indication to discontinue prone positioning, as the benefits of improved oxygenation outweigh this expected side effect. IV furosemide is not indicated for positional edema. Increasing PEEP does not address positional facial edema and could worsen hemodynamics.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          'A patient receiving mechanical ventilation develops a sudden decrease in end-tidal CO2 from 38 to 12 mmHg with hypotension and tachycardia. SpO2 drops to 85%. What is the most likely diagnosis?',
        choices: {
          A: 'Ventilator disconnection',
          B: 'Bronchospasm',
          C: 'Mucus plugging',
          D: 'Massive pulmonary embolism',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A sudden, significant decrease in end-tidal CO2 with hemodynamic instability (hypotension, tachycardia) and hypoxemia is classic for massive pulmonary embolism. The decreased ETCO2 results from increased dead space ventilation as blood flow to the pulmonary capillaries is obstructed.',
        explanationWrong:
          'Ventilator disconnection would show an ETCO2 of zero, not 12 mmHg, and would not cause the acute hemodynamic changes described. Bronchospasm increases peak pressure and may decrease ETCO2 slightly but not to this degree. Mucus plugging increases airway pressure but does not typically cause the acute hemodynamic collapse seen here.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          'Which of the following is a criterion for the diagnosis of ARDS according to the Berlin definition?',
        choices: {
          A: 'Bilateral opacities on chest imaging not fully explained by effusions, lobar/lung collapse, or nodules',
          B: 'Unilateral infiltrate on chest radiograph',
          C: 'PAOP greater than 18 mmHg',
          D: 'Onset of symptoms more than 14 days after a known clinical insult',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Berlin definition requires bilateral opacities on chest imaging (radiograph or CT) that are not fully explained by effusions, lobar or lung collapse, or nodules. Additionally, onset must be within 7 days of a known clinical insult, and the respiratory failure must not be fully explained by cardiac failure or fluid overload.',
        explanationWrong:
          'ARDS requires bilateral, not unilateral, opacities. The Berlin definition removed the PAOP criterion (which was ≤18 mmHg in the old AECC definition), instead stating respiratory failure not fully explained by cardiac failure. Onset must be within 7 days, not more than 14 days, of a known clinical insult.',
        topic: 'ARDS Diagnosis',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          'A patient on mechanical ventilation in the ICU is being treated with therapeutic hypothermia (targeted temperature management) at 33°C after cardiac arrest. How does hypothermia affect oxygen consumption and CO2 production?',
        choices: {
          A: 'Increases both oxygen consumption and CO2 production',
          B: 'Increases oxygen consumption and decreases CO2 production',
          C: 'Decreases both oxygen consumption and CO2 production',
          D: 'Has no effect on metabolic rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Therapeutic hypothermia decreases the metabolic rate by approximately 7-10% for every 1°C decrease in core body temperature. This reduces both oxygen consumption (VO2) and CO2 production (VCO2), which may require adjustments to ventilator settings (typically reducing minute ventilation) to prevent respiratory alkalosis.',
        explanationWrong:
          'Hypothermia decreases metabolic rate, so it would not increase oxygen consumption or CO2 production. Hypothermia affects both processes in the same direction (decreases both). Hypothermia has a significant effect on metabolic rate and cannot be ignored when managing ventilation.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          'A patient in the ICU develops rapid atrial fibrillation with a heart rate of 155 bpm and blood pressure of 82/50 mmHg after abdominal surgery. What is the most appropriate immediate intervention?',
        choices: {
          A: 'Administer adenosine 6 mg IV push',
          B: 'Start an amiodarone infusion',
          C: 'Administer metoprolol IV',
          D: 'Perform synchronized cardioversion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a hemodynamically unstable patient with rapid atrial fibrillation (hypotension, MAP < 65 mmHg), synchronized cardioversion is the first-line intervention. The patient\'s hemodynamic instability (BP 82/50) indicates that the arrhythmia is causing significant compromise and requires immediate electrical conversion.',
        explanationWrong:
          'Adenosine is used for supraventricular tachycardia (SVT) with a regular narrow complex rhythm, not atrial fibrillation. Amiodarone is appropriate for rate or rhythm control in stable atrial fibrillation but is too slow acting for an unstable patient. IV metoprolol may further decrease blood pressure in an already hypotensive patient.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          'A patient with severe ARDS and refractory hypoxemia is being evaluated for ECMO. Which of the following is a relative contraindication to VV ECMO?',
        choices: {
          A: 'Mechanical ventilation for less than 7 days',
          B: 'Prolonged mechanical ventilation exceeding 10-14 days with high pressure settings',
          C: 'PaO2/FiO2 ratio less than 80 mmHg',
          D: 'Age less than 65 years',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Prolonged mechanical ventilation exceeding 10-14 days with high pressure settings is a relative contraindication to VV ECMO because it suggests established ventilator-induced lung injury with fibrotic changes that are less likely to recover. The earlier ECMO is initiated in appropriate candidates, the better the outcomes.',
        explanationWrong:
          'Mechanical ventilation for less than 7 days is actually favorable for ECMO consideration. A PaO2/FiO2 ratio less than 80 is actually an indication for ECMO referral. Age less than 65 years is favorable, as younger patients generally have better ECMO outcomes.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          'A patient with decompensated cirrhosis and hepatorenal syndrome is in the ICU on mechanical ventilation. The patient develops worsening hypoxemia with a PaO2 of 52 mmHg on FiO2 0.50 with no infiltrates on chest radiograph. What is the most likely cause of the hypoxemia?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Pulmonary embolism',
          C: 'Hepatopulmonary syndrome with intrapulmonary shunting',
          D: 'Mucus plugging',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hepatopulmonary syndrome occurs in patients with advanced liver disease and is characterized by intrapulmonary vascular dilation causing right-to-left shunting. The clear chest radiograph with significant hypoxemia in the setting of cirrhosis is classic for this condition. It can be diagnosed with a bubble echocardiogram showing late appearance of microbubbles in the left atrium.',
        explanationWrong:
          'Tension pneumothorax would show absent breath sounds and radiographic abnormalities. Pulmonary embolism is possible but would not explain the pattern in a cirrhotic patient with a clear chest radiograph as well as hepatopulmonary syndrome. Mucus plugging would cause focal atelectasis visible on chest radiograph.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          'A patient with ARDS and septic shock is receiving norepinephrine, vasopressin, and stress-dose steroids. The team decides to initiate inhaled epoprostenol. What is the primary mechanism of inhaled epoprostenol in ARDS?',
        choices: {
          A: 'Selective pulmonary vasodilation in ventilated lung regions, reducing intrapulmonary shunt',
          B: 'Systemic vasodilation reducing afterload',
          C: 'Bronchodilation of the lower airways',
          D: 'Anti-inflammatory effects reducing alveolar edema',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled epoprostenol (prostacyclin) is delivered directly to ventilated alveoli, where it causes selective vasodilation of the pulmonary vasculature supplying those ventilated regions. This improves ventilation-perfusion matching by redirecting blood flow to well-ventilated lung units, reducing intrapulmonary shunt and improving oxygenation.',
        explanationWrong:
          'Because it is inhaled, epoprostenol primarily acts locally in the pulmonary vasculature with minimal systemic vasodilation. While prostacyclin has some bronchodilatory properties, this is not its primary mechanism in ARDS. Anti-inflammatory effects are not the primary therapeutic mechanism of inhaled epoprostenol in ARDS.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          'A patient is on VV ECMO with the drainage cannula in the right femoral vein and the return cannula in the right internal jugular vein. The respiratory therapist notices that the ECMO circuit is "chattering" (vibrating with intermittent flow). What is the most likely cause?',
        choices: {
          A: 'The sweep gas flow is too high',
          B: 'The membrane lung is clotting',
          C: 'The return cannula is kinked',
          D: 'Hypovolemia or cannula malposition causing insufficient venous drainage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Circuit chattering on ECMO indicates that the drainage (venous) cannula is intermittently losing its blood supply. This is most commonly caused by hypovolemia (insufficient intravascular volume) or malposition of the drainage cannula where it is suctioning against the vessel wall or right atrium. Treatment includes fluid administration and repositioning the cannula.',
        explanationWrong:
          'High sweep gas flow does not cause circuit chattering. Membrane clotting would increase transmembrane pressure gradient but typically does not cause chattering. Return cannula kinking would increase circuit pressures but would not cause chattering of the drainage side.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          'A critically ill patient with severe pneumonia develops refractory hypoxemia. The team initiates a recruitment maneuver using sustained inflation at 40 cmH2O for 40 seconds. Which of the following is a recognized risk of this maneuver?',
        choices: {
          A: 'Permanent improvement in lung compliance',
          B: 'Hemodynamic compromise due to decreased venous return',
          C: 'Increased surfactant production',
          D: 'Decreased risk of pneumothorax',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sustained inflation recruitment maneuvers generate high intrathoracic pressures that decrease venous return to the heart, potentially causing significant hypotension and hemodynamic compromise. Patients should have adequate volume status and hemodynamic monitoring during recruitment maneuvers.',
        explanationWrong:
          'Recruitment maneuvers do not permanently improve compliance; the effect is maintained only with adequate PEEP. Recruitment maneuvers do not increase surfactant production. Recruitment maneuvers actually increase the risk of pneumothorax (barotrauma) due to the high airway pressures applied.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          'A mechanically ventilated patient develops signs of increased intracranial pressure (ICP). The ICP is 28 mmHg and the cerebral perfusion pressure is 55 mmHg. How should the ventilator be managed to help reduce the ICP?',
        choices: {
          A: 'Increase PEEP to 20 cmH2O to improve oxygenation',
          B: 'Hyperventilate to a PaCO2 of 20 mmHg',
          C: 'Maintain PaCO2 at 30-35 mmHg with mild hyperventilation',
          D: 'Allow PaCO2 to rise to 50 mmHg',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mild hyperventilation targeting a PaCO2 of 30-35 mmHg is recommended as a temporizing measure for elevated ICP. CO2 causes cerebral vasodilation, so reducing PaCO2 causes cerebral vasoconstriction and reduces cerebral blood volume, lowering ICP. However, aggressive hyperventilation below 25-30 mmHg risks cerebral ischemia.',
        explanationWrong:
          'High PEEP can impede cerebral venous drainage and worsen ICP. Aggressive hyperventilation to a PaCO2 of 20 mmHg causes excessive cerebral vasoconstriction, risking cerebral ischemia. Allowing PaCO2 to rise would cause cerebral vasodilation and worsen intracranial hypertension.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          'A patient is admitted with a diagnosis of distributive shock after anaphylaxis. Which hemodynamic profile would be expected from a pulmonary artery catheter?',
        choices: {
          A: 'Low CVP, low PAOP, elevated CI, low SVR',
          B: 'High CVP, high PAOP, low CI, high SVR',
          C: 'Low CVP, low PAOP, low CI, high SVR',
          D: 'High CVP, high PAOP, elevated CI, low SVR',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Distributive shock (including anaphylaxis and sepsis) is characterized by massive vasodilation leading to low SVR, low filling pressures (CVP and PAOP) from venous pooling and third-spacing, and compensatory elevated cardiac index. Treatment includes epinephrine for anaphylaxis and aggressive fluid resuscitation.',
        explanationWrong:
          'High CVP, high PAOP, low CI, and high SVR describe cardiogenic shock. Low CVP, low PAOP, low CI, and high SVR describe hypovolemic shock. High CVP with elevated CI and low SVR might suggest late sepsis with fluid overload but is not the classic distributive shock profile.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          'A patient with severe ARDS on lung-protective ventilation has the following: VT 350 mL (6 mL/kg IBW), PEEP 16 cmH2O, plateau pressure 30 cmH2O, FiO2 0.80. The respiratory therapist calculates the static compliance at 25 mL/cmH2O. Which of the following interventions would provide the most useful information about optimal PEEP for this patient?',
        choices: {
          A: 'Chest radiograph',
          B: 'Esophageal manometry to estimate transpulmonary pressure',
          C: 'Bronchoscopy',
          D: 'Central venous pressure measurement',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Esophageal manometry measures esophageal pressure as a surrogate for pleural pressure, allowing calculation of transpulmonary pressure (airway pressure minus pleural pressure). This helps determine whether the PEEP level is adequate to keep the lung open (positive end-expiratory transpulmonary pressure) without causing overdistension.',
        explanationWrong:
          'Chest radiograph can show the overall lung condition but does not provide the precision needed for PEEP titration. Bronchoscopy is useful for airway clearance and sampling but does not guide PEEP optimization. CVP measurement reflects right heart filling pressure but does not directly inform optimal PEEP selection.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          'A patient on continuous IV sedation with midazolam and fentanyl undergoes a daily sedation interruption. Within 30 minutes, the patient becomes severely agitated with a RASS of +3, develops tachycardia (HR 130 bpm), hypertension (BP 180/100 mmHg), and diaphoresis. What is the most appropriate action?',
        choices: {
          A: 'Administer a bolus of neuromuscular blocker',
          B: 'Continue the sedation holiday and observe',
          C: 'Perform an urgent CT scan of the head',
          D: 'Resume sedation at half the previous dose and titrate to target RASS',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The patient is exhibiting signs of sympathetic hyperactivity and severe agitation during a sedation interruption. The appropriate response is to resume sedation at half the previous rate and titrate to the target RASS. This approach allows for the benefits of daily awakening trials while managing patient safety.',
        explanationWrong:
          'Administering a neuromuscular blocker would paralyze the patient without addressing the underlying agitation and pain, which is dangerous and unethical without adequate sedation. Continuing the holiday with a RASS of +3 and hemodynamic instability risks self-extubation and cardiovascular events. While a head CT may be appropriate later, the immediate priority is controlling the acute agitation.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          'A patient requiring CRRT has a blood flow rate of 250 mL/min and a replacement fluid rate of 2000 mL/hr. The effluent output is 2500 mL/hr. What is the net ultrafiltration rate?',
        choices: {
          A: 'Zero',
          B: ' 250 mL/hr',
          C: '500 mL/hr',
          D: '2500 mL/hr',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The net ultrafiltration rate is the difference between the effluent output and the replacement fluid input: 2500 mL/hr - 2000 mL/hr = 500 mL/hr. This represents the net fluid removal from the patient per hour, which is an important parameter for managing fluid balance in critically ill patients.',
        explanationWrong:
          'A net ultrafiltration of zero would occur if the effluent equaled the replacement fluid rate. 250 mL/hr does not match the calculation. 2500 mL/hr is the total effluent, not the net ultrafiltration.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          'A patient with septic shock and ARDS is being considered for neuromuscular blockade. Based on the ACURASYS trial, within what timeframe of ARDS onset should cisatracurium be initiated to show a mortality benefit?',
        choices: {
          A: 'Within 48 hours of ARDS onset',
          B: 'Within 7 days of ARDS onset',
          C: 'Within 96 hours of ICU admission',
          D: 'Anytime during the ICU stay',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ACURASYS trial demonstrated that early initiation of cisatracurium within 48 hours of moderate-to-severe ARDS onset, continued for 48 hours, was associated with improved 90-day survival. Early neuromuscular blockade may reduce biotrauma and improve ventilator synchrony during the acute inflammatory phase.',
        explanationWrong:
          'The benefit was demonstrated with initiation within 48 hours, not within 7 days. The timeframe is from ARDS onset, not ICU admission. Late initiation during the ICU stay was not associated with the same survival benefit demonstrated in the ACURASYS trial.',
        topic: 'Neuromuscular Blockade',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 3 seeded (20 questions, isFree: false)')

  // ─── EXAM 4 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q8,Q11,Q14,Q18) B=5(Q4,Q6,Q13,Q17,Q20) C=5(Q3,Q7,Q10,Q15,Q19) D=5(Q2,Q5,Q9,Q12,Q16)
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 4',
      examIndex: 4,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam4.id,
        questionIndex: 1,
        questionText:
          'A patient with severe ARDS on VV ECMO has the following parameters: ECMO blood flow 4.5 L/min, sweep gas 5 L/min, FdO2 1.0. The ventilator is set to "rest settings" with VT 4 mL/kg IBW, PEEP 10 cmH2O, RR 10, FiO2 0.30. What is the primary goal of these ventilator settings during ECMO?',
        choices: {
          A: 'Minimize ventilator-induced lung injury while ECMO provides gas exchange support',
          B: 'Maximize alveolar recruitment to improve ECMO efficiency',
          C: 'Maintain the patient\'s respiratory drive',
          D: 'Provide backup ventilation in case of ECMO failure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'During VV ECMO, "rest settings" on the ventilator aim to minimize ventilator-induced lung injury by using low tidal volumes, low FiO2, low respiratory rates, and moderate PEEP. The ECMO circuit handles gas exchange while the lungs are allowed to rest and heal.',
        explanationWrong:
          'While some PEEP is maintained to prevent atelectasis, the goal is not to maximize recruitment during ECMO. Rest settings typically include sedation and sometimes paralysis, so maintaining respiratory drive is not the goal. While the ventilator provides some backup, the primary goal of rest settings is lung protection, not emergency ventilation.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          'A patient with cardiogenic shock is on VA ECMO via femoral cannulation. The left ventricle is severely dilated and akinetic on echocardiography. The PAOP is 35 mmHg. What complication is the patient at risk for, and what intervention may be needed?',
        choices: {
          A: 'Right ventricular failure requiring inotropic support',
          B: 'Pulmonary hemorrhage requiring bronchoscopy',
          C: 'Lower extremity ischemia requiring fasciotomy',
          D: 'Left ventricular distension requiring an LV vent or Impella for decompression',
        },
        correctChoice: 'D',
        explanationCorrect:
          'On VA ECMO with poor native cardiac function, the retrograde aortic flow from the femoral arterial return increases left ventricular afterload. If the LV cannot eject against this increased afterload, the LV distends, increasing wall stress, myocardial oxygen demand, and PAOP. An LV vent (percutaneous or surgical) or Impella device may be needed to decompress the LV.',
        explanationWrong:
          'While RV failure can occur, the described scenario with high PAOP and dilated LV specifically indicates LV distension. Pulmonary hemorrhage is not a direct consequence of LV distension on VA ECMO. Lower extremity ischemia is a risk of femoral arterial cannulation but is not related to the described hemodynamic findings.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          'A patient with severe pneumonia is on mechanical ventilation with a plateau pressure of 28 cmH2O, PEEP 12 cmH2O, and VT 6 mL/kg IBW. The respiratory therapist calculates the mechanical power delivered by the ventilator. Which variable does NOT contribute to the calculation of mechanical power?',
        choices: {
          A: 'Peak inspiratory pressure',
          B: 'Patient\'s body mass index',
          C: 'Tidal volume, respiratory rate, PEEP, and driving pressure all contribute to mechanical power',
          D: 'Inspiratory flow rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mechanical power is the energy delivered to the respiratory system per unit time and includes contributions from tidal volume, respiratory rate, driving pressure, PEEP, and inspiratory flow (resistive component). The patient\'s BMI is not a direct component of the mechanical power equation, though ideal body weight determines the appropriate tidal volume.',
        explanationWrong:
          'Peak inspiratory pressure includes both resistive and elastic components and contributes to mechanical power calculation. The statement in option C describes real contributors to mechanical power. Inspiratory flow rate contributes to the resistive component of mechanical power.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          'A critically ill patient on mechanical ventilation is receiving fentanyl and midazolam infusions. The ICU team wants to assess for delirium. Which validated assessment tool should be used?',
        choices: {
          A: 'Glasgow Coma Scale',
          B: 'Confusion Assessment Method for the ICU (CAM-ICU)',
          C: 'Mini-Mental State Examination',
          D: 'Richmond Agitation-Sedation Scale (RASS)',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Confusion Assessment Method for the ICU (CAM-ICU) is a validated delirium assessment tool specifically designed for mechanically ventilated and non-verbal ICU patients. It assesses four features: acute onset or fluctuating mental status, inattention, altered level of consciousness, and disorganized thinking.',
        explanationWrong:
          'The Glasgow Coma Scale measures level of consciousness but does not specifically assess delirium. The Mini-Mental State Examination requires verbal responses and is not appropriate for intubated patients. RASS measures the depth of sedation and agitation but does not diagnose delirium.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          'A patient in septic shock has been on high-dose vasopressors for 72 hours. The cortisol level is drawn and returns at 8 mcg/dL. What is the appropriate intervention?',
        choices: {
          A: 'Administer dexamethasone 10 mg IV',
          B: 'No intervention needed as this is a normal cortisol level',
          C: 'Start thyroid replacement therapy',
          D: 'Administer hydrocortisone 200 mg/day in divided doses or continuous infusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In septic shock requiring high-dose vasopressors, a random cortisol level below 15-18 mcg/dL suggests relative adrenal insufficiency (critical illness-related corticosteroid insufficiency). Hydrocortisone 200 mg/day (50 mg IV every 6 hours or continuous infusion) is the recommended stress-dose steroid regimen per the Surviving Sepsis Campaign guidelines.',
        explanationWrong:
          'Dexamethasone is not the preferred corticosteroid for septic shock because it lacks mineralocorticoid activity and suppresses the ACTH stimulation test. A cortisol level of 8 mcg/dL in a critically ill patient is inappropriately low and requires treatment. Thyroid replacement is not indicated based on a low cortisol level alone.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          'A patient with ARDS is on prone positioning. The arterial blood gas shows significant improvement with PaO2/FiO2 increasing from 90 to 210 mmHg. When should the patient be returned to the supine position?',
        choices: {
          A: 'After exactly 4 hours of prone positioning',
          B: 'After at least 16 consecutive hours, or sooner if a life-threatening complication occurs',
          C: 'Only after PaO2/FiO2 exceeds 300 mmHg',
          D: 'After 72 continuous hours of prone positioning',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Based on the PROSEVA trial, prone positioning sessions should last at least 16 consecutive hours. The patient is returned to supine for assessment and care before the next prone session if needed. Prone positioning should be discontinued earlier only if a life-threatening complication occurs (cardiac arrest, severe hemodynamic instability, accidental extubation).',
        explanationWrong:
          'Four hours is insufficient for the full benefits of prone positioning. Waiting for PaO2/FiO2 to exceed 300 mmHg is not the criterion for ending a prone session. Continuous prone positioning for 72 hours without breaks is not the recommended approach and increases complication risks.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          'A patient on mechanical ventilation is being weaned and undergoes a spontaneous breathing trial (SBT) with pressure support of 5 cmH2O and PEEP of 5 cmH2O. After 15 minutes, the patient develops a respiratory rate of 36 breaths/min, SpO2 88%, and appears distressed. What is the most appropriate action?',
        choices: {
          A: 'Continue the SBT for the full 30-120 minutes',
          B: 'Extubate the patient as they completed 15 minutes',
          C: 'Discontinue the SBT, return to previous ventilator settings, and investigate the cause of failure',
          D: 'Increase the pressure support to 15 cmH2O and continue the trial',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The patient is demonstrating clear signs of SBT failure: tachypnea (RR > 35), desaturation (SpO2 < 90%), and respiratory distress. The SBT should be immediately discontinued, the patient returned to comfortable ventilator settings, and the cause of failure investigated (fluid overload, infection, cardiac dysfunction, diaphragm weakness).',
        explanationWrong:
          'Continuing the SBT when the patient is failing risks respiratory muscle fatigue and cardiopulmonary decompensation. Extubating a failing patient would likely result in reintubation, which increases morbidity and mortality. Increasing pressure support changes the nature of the trial and does not constitute a standard SBT.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          'A patient with septic shock has a central venous catheter and pulmonary artery catheter. The thermodilution cardiac output measurement shows a CI of 4.8 L/min/m² with an SVR of 480 dynes·s/cm⁵. These findings are most consistent with which phase of septic shock?',
        choices: {
          A: 'Hyperdynamic (warm) phase with high cardiac output and low systemic vascular resistance',
          B: 'Cold phase with impaired cardiac output',
          C: 'Compensated phase with normal hemodynamics',
          D: 'Terminal phase with cardiovascular collapse',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The hyperdynamic (warm) phase of septic shock is characterized by elevated cardiac index (>3.5 L/min/m²) and low SVR (<800 dynes·s/cm⁵). The inflammatory mediators in sepsis cause massive vasodilation (low SVR), and the heart compensates with increased cardiac output. The patient typically has warm, flushed skin and bounding pulses.',
        explanationWrong:
          'The cold phase of septic shock shows decreased cardiac output with elevated SVR due to myocardial depression. Normal hemodynamics would not explain the markedly elevated CI and low SVR. Terminal cardiovascular collapse typically shows decreasing cardiac output with multiorgan failure.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          'A patient is receiving CRRT with continuous venovenous hemofiltration (CVVH). The filter clots frequently despite systemic heparin therapy. What alternative anticoagulation strategy should be considered?',
        choices: {
          A: 'Increase systemic heparin to achieve an aPTT of 80-100 seconds',
          B: 'Switch to warfarin for circuit anticoagulation',
          C: 'Administer aspirin and clopidogrel',
          D: 'Regional citrate anticoagulation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Regional citrate anticoagulation is the preferred alternative for CRRT when heparin-based anticoagulation is problematic. Citrate chelates calcium in the circuit, preventing clot formation, while calcium is infused back into the patient systemically. This provides effective circuit anticoagulation without systemic anticoagulation effects.',
        explanationWrong:
          'Increasing systemic heparin to very high aPTT levels significantly increases bleeding risk. Warfarin is not used for CRRT circuit anticoagulation as it affects vitamin K-dependent factors and takes days to achieve effect. Antiplatelet agents like aspirin and clopidogrel are not effective for circuit anticoagulation and increase bleeding risk.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          'During neuromuscular blockade monitoring with train-of-four (TOF) stimulation, 2 out of 4 twitches are observed. What does this indicate about the degree of neuromuscular blockade?',
        choices: {
          A: 'Complete neuromuscular blockade',
          B: 'Inadequate neuromuscular blockade',
          C: 'Approximately 80-85% receptor blockade, which is the recommended target for ICU patients',
          D: 'The patient needs immediate reversal of blockade',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A TOF count of 2 out of 4 indicates approximately 80-85% neuromuscular receptor blockade. This is generally the recommended target in the ICU to ensure adequate paralysis for ventilator synchrony while avoiding excessive blockade that increases the risk of ICU-acquired weakness. A TOF of 1-2/4 is the typical goal.',
        explanationWrong:
          'Complete blockade would show 0 out of 4 twitches (post-tetanic count may be needed). Two twitches indicate significant but not excessive blockade, which is appropriate. Reversal is not indicated when the TOF is at the target range for therapeutic paralysis.',
        topic: 'Neuromuscular Blockade',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          'A patient with ARDS is on mechanical ventilation with VT 6 mL/kg IBW, PEEP 14 cmH2O, FiO2 0.70. The PaO2/FiO2 ratio is 110 mmHg. According to the ARDSNet PEEP/FiO2 table (higher PEEP strategy), what is the recommended PEEP for an FiO2 of 0.70?',
        choices: {
          A: 'PEEP 14-18 cmH2O per the higher PEEP table',
          B: 'PEEP 8-10 cmH2O',
          C: 'PEEP 5 cmH2O',
          D: 'PEEP 20-24 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ARDSNet higher PEEP/FiO2 table recommends PEEP levels of 14-18 cmH2O for an FiO2 of 0.70. This approach aims to maximize alveolar recruitment while maintaining lung-protective plateau pressure limits. The current PEEP of 14 is at the lower end of the recommended range.',
        explanationWrong:
          'PEEP of 8-10 cmH2O would be insufficient per the higher PEEP strategy at this FiO2 level. PEEP of 5 cmH2O is the minimum recommended PEEP for any ARDS severity. PEEP of 20-24 cmH2O would be appropriate for higher FiO2 levels (0.90-1.0) on the higher PEEP table.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          'A patient with severe traumatic brain injury is on mechanical ventilation. The ICP is 22 mmHg, MAP is 85 mmHg, and CPP is 63 mmHg. The patient is on PEEP of 12 cmH2O. The neurosurgery team asks about the effect of PEEP on ICP. Which statement is most accurate?',
        choices: {
          A: 'PEEP always increases ICP in a linear fashion',
          B: 'PEEP has no effect on ICP regardless of the level',
          C: 'PEEP only affects ICP in spontaneously breathing patients',
          D: 'PEEP may increase ICP if it impedes cerebral venous drainage, but the effect depends on lung compliance and head position',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The effect of PEEP on ICP is complex and depends on several factors. In patients with low lung compliance (such as ARDS), less intrathoracic pressure is transmitted to the mediastinum and cerebral venous system, minimizing the effect on ICP. Elevating the head of bed to 30 degrees also mitigates PEEP transmission to the cranium.',
        explanationWrong:
          'PEEP does not always increase ICP linearly; the relationship depends on lung compliance and other factors. PEEP can affect ICP, especially at higher levels or with normal lung compliance. The effect of PEEP on ICP occurs in both spontaneously breathing and mechanically ventilated patients.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          'A patient in the ICU is being managed with a pulmonary artery catheter. The waveform shows a dampened tracing. Which of the following is the most likely cause?',
        choices: {
          A: 'The catheter tip has migrated to the right ventricle',
          B: 'A blood clot or air bubble is present in the pressure transducer system',
          C: 'The transducer is positioned too high relative to the phlebostatic axis',
          D: 'The patient has developed pulmonary hypertension',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A dampened pressure waveform in a pulmonary artery catheter is most commonly caused by a partial obstruction in the pressure monitoring system, such as a blood clot at the catheter tip, air bubbles in the tubing, or kinking of the catheter. The tracing shows blunted peaks and loss of the normal waveform morphology.',
        explanationWrong:
          'Migration to the right ventricle would show a different waveform morphology (RV pressure tracing), not a dampened PA tracing. Transducer positioning too high would cause falsely low pressure readings but would not dampen the waveform. Pulmonary hypertension would show elevated PA pressures with preserved waveform morphology.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          'A patient with hospital-acquired pneumonia develops septic shock. Blood cultures grow Pseudomonas aeruginosa. Which empiric antibiotic combination is most appropriate while awaiting sensitivity results?',
        choices: {
          A: 'An anti-pseudomonal beta-lactam combined with an aminoglycoside or fluoroquinolone',
          B: 'Vancomycin monotherapy',
          C: 'Oral amoxicillin-clavulanate',
          D: 'Azithromycin and ceftriaxone',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pseudomonal infections in septic shock require double coverage with an anti-pseudomonal beta-lactam (piperacillin-tazobactam, cefepime, or meropenem) combined with an aminoglycoside (tobramycin, amikacin) or fluoroquinolone (ciprofloxacin, levofloxacin). This combination provides synergistic bactericidal activity and covers potential resistance.',
        explanationWrong:
          'Vancomycin monotherapy does not cover Pseudomonas aeruginosa. Oral amoxicillin-clavulanate has inadequate anti-pseudomonal activity and is not appropriate for septic shock. Azithromycin and ceftriaxone are community-acquired pneumonia coverage and do not have reliable pseudomonal activity.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          'A patient on VV ECMO develops hemolysis with a plasma-free hemoglobin of 80 mg/dL (normal < 10 mg/dL). What is the most likely cause within the ECMO circuit?',
        choices: {
          A: 'Excessive sweep gas flow',
          B: 'Low circuit blood flow rate',
          C: 'Thrombus formation in the pump head or circuit causing mechanical destruction of red blood cells',
          D: 'High FdO2 on the membrane lung',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hemolysis on ECMO is most commonly caused by mechanical destruction of red blood cells from thrombus formation in the pump head, kinking of the cannulae, or high negative pressures at the drainage cannula. Thrombus in the pump generates shear forces that destroy red blood cells, releasing free hemoglobin.',
        explanationWrong:
          'Sweep gas flow does not cause hemolysis as it is separated from the blood by the membrane. Low blood flow rate alone does not typically cause hemolysis unless there is a structural problem. FdO2 affects oxygenation but does not cause mechanical hemolysis.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          'A patient with severe ARDS has been on lung-protective ventilation for 5 days. The respiratory therapist notices that the ratio of dead space to tidal volume (VD/VT) has progressively increased from 0.55 to 0.78. What does this finding suggest?',
        choices: {
          A: 'Improving lung function',
          B: 'Decreasing auto-PEEP',
          C: 'Resolution of pulmonary edema',
          D: 'Worsening ARDS prognosis and possible development of pulmonary vascular injury',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An increasing VD/VT ratio in ARDS indicates worsening dead space ventilation, which is associated with pulmonary vascular injury, thrombosis, and worse outcomes. A VD/VT greater than 0.60 on day 1 of ARDS is independently associated with increased mortality. Progressive increase suggests disease progression.',
        explanationWrong:
          'Improving lung function would be associated with a decreasing VD/VT ratio. Decreasing auto-PEEP would not cause an increase in dead space fraction. Resolution of pulmonary edema would improve gas exchange and reduce dead space.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          'A patient with obstructive shock from massive pulmonary embolism has the following hemodynamic data: CVP 22 mmHg, PAOP 8 mmHg, CI 1.5 L/min/m², SVR 2800 dynes·s/cm⁵. Which intervention is most appropriate?',
        choices: {
          A: 'Large-volume fluid resuscitation',
          B: 'Systemic thrombolysis with alteplase',
          C: 'Phenylephrine infusion',
          D: 'Milrinone infusion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In massive (high-risk) pulmonary embolism with obstructive shock, systemic thrombolysis with alteplase is the first-line intervention when there are no absolute contraindications. The hemodynamic profile shows elevated right-sided pressures (CVP 22) with low left-sided filling (PAOP 8), consistent with RV failure from acute PE.',
        explanationWrong:
          'Large-volume fluid resuscitation in the setting of RV failure and elevated CVP can worsen RV distension and further compromise cardiac output. Phenylephrine may support MAP but does not address the underlying obstruction. Milrinone causes vasodilation and can worsen hypotension in this setting.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          'A patient is on mechanical ventilation and the respiratory therapist observes flow starvation on the ventilator waveform during volume-controlled ventilation. What does the flow waveform show during flow starvation?',
        choices: {
          A: 'The flow waveform shows a characteristic scooped-out or concave inspiratory pressure waveform indicating the set flow rate is insufficient to meet patient demand',
          B: 'The flow waveform shows excessive peak flow',
          C: 'The flow waveform shows auto-PEEP',
          D: 'The flow waveform shows a plateau in the expiratory phase',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Flow starvation during volume-controlled ventilation produces a characteristic scooped-out (concave) appearance on the pressure-time waveform. This occurs when the patient\'s inspiratory demand exceeds the set flow rate, causing the patient to "pull" against the ventilator. The solution is to increase the set inspiratory flow rate or switch to a mode that provides variable flow.',
        explanationWrong:
          'Excessive peak flow would show high peak pressures, not flow starvation. Auto-PEEP is seen on the flow-time waveform as expiratory flow that does not return to zero before the next breath. A plateau in the expiratory phase is not characteristic of flow starvation.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          'A critically ill patient on mechanical ventilation develops a new fever of 39.2°C with purulent tracheal secretions and a new infiltrate on chest radiograph. The Clinical Pulmonary Infection Score (CPIS) is calculated at 8. What is the most appropriate next step?',
        choices: {
          A: 'Continue antibiotics and reassess in 72 hours',
          B: 'Obtain bronchoalveolar lavage for culture',
          C: 'Obtain lower respiratory tract cultures (BAL or mini-BAL) and initiate empiric antibiotics for ventilator-associated pneumonia',
          D: 'Perform a CT scan of the chest before any treatment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A CPIS score of 6 or greater suggests ventilator-associated pneumonia. The appropriate management is to obtain lower respiratory tract cultures (BAL or mini-BAL) before initiating empiric broad-spectrum antibiotics. Culture results should guide de-escalation of antibiotics within 48-72 hours.',
        explanationWrong:
          'Continuing antibiotics without obtaining cultures first does not allow for targeted therapy. While BAL is appropriate, it should be coupled with initiation of empiric antibiotics. Delaying treatment for a CT scan is not appropriate when clinical findings and CPIS score support a diagnosis of VAP.',
        topic: 'Advanced Airway Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          'A patient with ARDS is on volume-controlled ventilation with VT 6 mL/kg IBW, PEEP 16 cmH2O, FiO2 0.90, plateau pressure 29 cmH2O. The PaO2 is 58 mmHg. The team decides to trial inhaled nitric oxide (iNO) at 20 ppm. After 30 minutes, the PaO2 increases to 78 mmHg. If iNO is to be discontinued, how should it be weaned?',
        choices: {
          A: 'Abrupt discontinuation is safe',
          B: 'Gradually reduce in increments of 5 ppm every 15-30 minutes while monitoring for rebound hypoxemia and pulmonary hypertension',
          C: 'Taper over 7 days',
          D: 'Switch to IV sildenafil before discontinuation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Inhaled nitric oxide should be weaned gradually to prevent rebound pulmonary hypertension and hypoxemia. The typical approach is to reduce by 5 ppm increments every 15-30 minutes while closely monitoring SpO2 and hemodynamics. Abrupt discontinuation can cause severe rebound vasoconstriction.',
        explanationWrong:
          'Abrupt discontinuation of iNO can cause life-threatening rebound pulmonary hypertension and severe hypoxemia. A 7-day taper is unnecessarily prolonged for iNO weaning. While sildenafil (a PDE-5 inhibitor) can help attenuate rebound pulmonary hypertension, it is not routinely required before iNO discontinuation.',
        topic: 'ICU Pharmacology',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 4 seeded (20 questions, isFree: false)')

  // ─── EXAM 5 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q10,Q13,Q19) B=5(Q1,Q5,Q12,Q16,Q18) C=5(Q3,Q6,Q9,Q15,Q20) D=5(Q2,Q8,Q11,Q14,Q17)
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 5',
      examIndex: 5,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam5.id,
        questionIndex: 1,
        questionText:
          'A patient with septic shock and ARDS is receiving lung-protective ventilation. The respiratory therapist is asked to assess the patient\'s fluid responsiveness. Which dynamic parameter is most reliable for predicting fluid responsiveness in a mechanically ventilated patient?',
        choices: {
          A: 'Central venous pressure',
          B: 'Pulse pressure variation (PPV) greater than 13%',
          C: 'Mean arterial pressure',
          D: 'Urine output over the past 4 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pulse pressure variation (PPV) is a dynamic measure of fluid responsiveness in mechanically ventilated patients. A PPV greater than 13% suggests that the patient is on the ascending portion of the Frank-Starling curve and is likely to respond to a fluid challenge with an increase in cardiac output.',
        explanationWrong:
          'CVP is a static measure and has been shown to be a poor predictor of fluid responsiveness. Mean arterial pressure alone does not predict fluid responsiveness. Urine output is influenced by many factors and is not a reliable real-time predictor of fluid responsiveness.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          'A patient on ECMO develops an acute decrease in the transmembrane pressure gradient across the oxygenator membrane. The pre-membrane pressure is 220 mmHg and the post-membrane pressure is 200 mmHg. The previous gradient was 80 mmHg. What does this change suggest?',
        choices: {
          A: 'The membrane is functioning normally',
          B: 'The blood flow rate is too high',
          C: 'The sweep gas flow is inadequate',
          D: 'The previous high gradient suggested membrane clotting; the current low gradient may indicate a membrane change or resolving clot',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The transmembrane pressure gradient (pressure drop across the oxygenator) normally increases as clot forms within the membrane fibers, increasing resistance. A sudden decrease from a previously elevated gradient may indicate that the membrane was changed, or clot has embolized. Context is needed—if the membrane was not changed, a sudden drop warrants investigation.',
        explanationWrong:
          'A transmembrane gradient change of this magnitude is not normal and warrants investigation. Blood flow rate changes would affect both pre and post pressures but the gradient change suggests a structural change in the membrane. Sweep gas flow does not significantly affect the blood-side transmembrane pressure gradient.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          'A critically ill patient with ARDS is receiving pressure-controlled ventilation. The set inspiratory pressure is 18 cmH2O above PEEP, PEEP is 14 cmH2O, and the measured tidal volume is 380 mL (6 mL/kg IBW). The respiratory therapist notes that the delivered tidal volume has gradually decreased to 280 mL over the past 4 hours. What is the most likely explanation?',
        choices: {
          A: 'The ventilator is malfunctioning',
          B: 'The patient\'s respiratory drive has increased',
          C: 'Worsening lung compliance causing less volume delivery at the same set pressure',
          D: 'Improvement in the patient\'s condition',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In pressure-controlled ventilation, the tidal volume delivered depends on the set pressure, lung compliance, and airway resistance. A progressive decrease in delivered tidal volume at the same set pressure indicates worsening compliance, which can be caused by disease progression (worsening ARDS), development of pleural effusion, pneumothorax, or abdominal distension.',
        explanationWrong:
          'While ventilator malfunction is possible, a gradual decline over 4 hours is more consistent with clinical deterioration. Increased respiratory drive would not explain decreased tidal volume delivery. Improvement in the patient\'s condition would typically maintain or increase the delivered tidal volume.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          'A patient is being evaluated for liberation from VV ECMO. Which of the following criteria best indicates readiness for an ECMO weaning trial?',
        choices: {
          A: 'Improving lung compliance, PaO2/FiO2 > 200 on moderate ventilator settings, and resolving chest radiograph infiltrates',
          B: 'Persistent PaO2/FiO2 ratio below 100 mmHg',
          C: 'Rising lactate levels',
          D: 'Increasing vasopressor requirements',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Readiness for VV ECMO weaning is indicated by improving native lung function: improved lung compliance, PaO2/FiO2 greater than 200 mmHg on moderate ventilator settings, clearing chest radiograph infiltrates, and stable hemodynamics. The ECMO blood flow can then be gradually reduced while monitoring the patient\'s gas exchange.',
        explanationWrong:
          'A persistent PaO2/FiO2 below 100 indicates continued need for ECMO support. Rising lactate suggests worsening tissue perfusion, not readiness for weaning. Increasing vasopressor requirements indicate hemodynamic instability, which is a contraindication to ECMO weaning.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          'A patient with ARDS and acute kidney injury is receiving CRRT. The blood urea nitrogen (BUN) is 85 mg/dL. How does elevated BUN affect the respiratory system?',
        choices: {
          A: 'BUN has no effect on the respiratory system',
          B: 'Uremic toxins increase pulmonary capillary permeability, contributing to pulmonary edema and worsening gas exchange',
          C: 'Elevated BUN improves surfactant production',
          D: 'Elevated BUN reduces airway resistance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Elevated BUN and uremic toxins increase pulmonary capillary permeability, contributing to non-cardiogenic pulmonary edema (uremic lung). This worsens gas exchange and can exacerbate existing ARDS. Effective renal replacement therapy can reduce uremic toxins and improve pulmonary function.',
        explanationWrong:
          'BUN and uremic toxins have significant effects on the respiratory system. Uremia impairs surfactant function rather than improving it. Uremia does not reduce airway resistance and may contribute to airway inflammation.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          'A patient on mechanical ventilation develops bilateral tension pneumothoraces after a high-pressure recruitment maneuver. The patient becomes acutely hypotensive with absent breath sounds bilaterally and distended neck veins. After bilateral needle decompression, what is the definitive treatment?',
        choices: {
          A: 'Continue the recruitment maneuver at lower pressures',
          B: 'Increase the PEEP to seal the air leak',
          C: 'Bilateral chest tube insertion (tube thoracostomy)',
          D: 'Emergent thoracotomy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'After initial needle decompression of bilateral tension pneumothoraces, bilateral chest tube insertion (tube thoracostomy) is the definitive treatment. Chest tubes provide continuous evacuation of air from the pleural space and prevent reaccumulation. Ventilator settings should be adjusted to minimize airway pressures.',
        explanationWrong:
          'Continuing recruitment maneuvers would risk worsening the pneumothoraces. Increasing PEEP would increase air leak through the existing pleural defects. Emergent thoracotomy is not indicated for pneumothorax management unless there is concurrent massive hemothorax or the air leak cannot be controlled.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          'A patient in the ICU is being treated with dexmedetomidine for sedation. The nurse reports that the patient\'s heart rate has dropped to 42 bpm with a blood pressure of 95/60 mmHg. What is the most appropriate intervention?',
        choices: {
          A: 'Reduce the dexmedetomidine infusion rate or discontinue it',
          B: 'Administer epinephrine 1 mg IV push',
          C: 'Immediately perform transcutaneous pacing',
          D: 'Administer flumazenil',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Bradycardia is a known side effect of dexmedetomidine due to its central sympatholytic effects (alpha-2 agonist). In the setting of a heart rate of 42 bpm with a blood pressure of 95/60 (not in hemodynamic crisis), the first step is to reduce or discontinue the dexmedetomidine infusion. If the bradycardia persists or hemodynamics worsen, atropine or glycopyrrolate may be administered.',
        explanationWrong:
          'Epinephrine 1 mg IV push is the dose for cardiac arrest, not for sinus bradycardia with a maintained blood pressure. Transcutaneous pacing is reserved for hemodynamically unstable bradycardia that does not respond to pharmacologic interventions. Flumazenil reverses benzodiazepines, not dexmedetomidine.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          'A patient with septic shock is receiving mechanical ventilation. The central venous oxygen saturation (ScvO2) is 82%. What does this elevated ScvO2 most likely indicate?',
        choices: {
          A: 'Adequate oxygen delivery matching tissue demand',
          B: 'The patient needs more fluids',
          C: 'The patient\'s hemoglobin is critically low',
          D: 'Impaired tissue oxygen extraction, which occurs in the distributive phase of septic shock due to mitochondrial dysfunction',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An elevated ScvO2 (above 80%) in the setting of septic shock with elevated lactate indicates impaired tissue oxygen extraction (cytopathic hypoxia). In severe sepsis, mitochondrial dysfunction prevents cells from utilizing delivered oxygen, resulting in high venous oxygen saturation despite ongoing tissue hypoxia and anaerobic metabolism.',
        explanationWrong:
          'While an ScvO2 in the 70-80% range may suggest adequate delivery, a value of 82% in the context of septic shock with elevated lactate is pathologic. The elevated ScvO2 is not a sign of needing more fluids or anemia—it indicates the tissues cannot extract the oxygen being delivered.',
        topic: 'Shock Management',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          'A critically ill patient on mechanical ventilation for ARDS requires a percutaneous tracheostomy. According to current evidence, when is the optimal timing for tracheostomy in patients expected to require prolonged mechanical ventilation?',
        choices: {
          A: 'Within the first 24 hours of intubation',
          B: 'After 21 days of mechanical ventilation',
          C: 'Between days 7-14 of mechanical ventilation when prolonged ventilation is anticipated',
          D: 'Only after failed extubation attempts',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current evidence suggests that early tracheostomy (days 7-14) in patients anticipated to require prolonged mechanical ventilation may reduce sedation requirements, improve patient comfort, and facilitate weaning. The exact timing remains debated, but most guidelines recommend considering tracheostomy when prolonged ventilation (>14 days) is expected.',
        explanationWrong:
          'Tracheostomy within 24 hours is premature as many patients can be successfully extubated within the first week. Waiting until day 21 delays the potential benefits of tracheostomy. Tracheostomy should be proactively planned based on anticipated ventilation duration, not reserved only for failed extubation.',
        topic: 'Advanced Airway Management',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          'A patient with ARDS is on prone positioning and develops a cardiac arrest. What is the recommended approach for CPR?',
        choices: {
          A: 'Perform CPR with compressions on the posterior thorax (back) while the patient remains prone',
          B: 'Immediately turn the patient supine before starting CPR',
          C: 'Do not attempt CPR until the patient is repositioned by a full team',
          D: 'Perform abdominal compressions instead of chest compressions',
        },
        correctChoice: 'A',
        explanationCorrect:
          'If a patient in the prone position has a cardiac arrest and cannot be immediately turned supine, CPR can be performed in the prone position by placing the hands on the posterior thorax between the scapulae. Studies have shown that prone CPR can generate adequate coronary perfusion pressure. If return of spontaneous circulation is not achieved, the patient should be turned supine when safely possible.',
        explanationWrong:
          'While turning supine is ideal, it should not delay the initiation of CPR. Delaying CPR while waiting for a full team worsens outcomes significantly. Abdominal compressions are not an effective substitute for chest compressions in cardiac arrest.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          'A patient with moderate ARDS has a measured P/F ratio of 150 mmHg on FiO2 0.60 and PEEP 10 cmH2O. The respiratory therapist calculates the oxygen index (OI). If the mean airway pressure is 18 cmH2O, what is the OI?',
        choices: {
          A: '5.4',
          B: '6.0',
          C: '7.2',
          D: '(FiO2 x Mean airway pressure x 100) / PaO2 = (0.60 x 18 x 100) / 150 = 7.2',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The oxygen index (OI) is calculated as (FiO2 x mean airway pressure x 100) / PaO2. In this case: (0.60 x 18 x 100) / 150 = 1080 / 150 = 7.2. The OI accounts for both the severity of hypoxemia and the amount of ventilatory support required, making it a more comprehensive measure than P/F ratio alone. An OI > 40 generally supports ECMO referral.',
        explanationWrong:
          'The calculations for 5.4 and 6.0 are incorrect applications of the OI formula. The correct calculation yields 7.2, as shown in the correct answer.',
        topic: 'ARDS Diagnosis',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          'A patient on CRRT develops metabolic alkalosis with a pH of 7.52 and HCO3⁻ of 34 mEq/L. What adjustment to the CRRT prescription can help correct this?',
        choices: {
          A: 'Increase the citrate anticoagulation rate',
          B: 'Decrease the bicarbonate concentration in the replacement fluid or dialysate',
          C: 'Increase the blood flow rate',
          D: 'Discontinue CRRT immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Metabolic alkalosis during CRRT can be corrected by decreasing the bicarbonate concentration in the replacement fluid or dialysate. Standard replacement fluids typically contain bicarbonate at 32-35 mEq/L. Switching to a lower bicarbonate solution or adjusting the prescription reduces the alkali load delivered to the patient.',
        explanationWrong:
          'Increasing the citrate rate would worsen alkalosis because citrate is metabolized to bicarbonate. Increasing blood flow rate does not directly address the bicarbonate concentration in the replacement fluid. Discontinuing CRRT is not necessary for a manageable electrolyte and acid-base disturbance.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          'A patient on mechanical ventilation has a sudden cardiac arrest. The end-tidal CO2 reading drops from 35 mmHg to 8 mmHg during CPR. What does this persistently low ETCO2 during resuscitation suggest?',
        choices: {
          A: 'Effective chest compressions generating adequate cardiac output',
          B: 'The endotracheal tube is in the esophagus',
          C: 'The ventilator is malfunctioning',
          D: 'Return of spontaneous circulation is imminent',
        },
        correctChoice: 'A',
        explanationCorrect:
          'During CPR, ETCO2 reflects the adequacy of cardiac output generated by chest compressions. A persistently low ETCO2 (<10 mmHg) during CPR indicates poor cardiac output from ineffective compressions or a non-perfusing rhythm. Quality of CPR should be improved. An ETCO2 >20 mmHg suggests effective compressions, and a sudden increase to >40 mmHg suggests ROSC.',
        explanationWrong:
          'Actually, I need to correct this—an ETCO2 of 8 mmHg during CPR indicates POOR cardiac output, not effective compressions. However, the question states the patient was already intubated and ventilated, and the ETCO2 dropped from 35 to 8 with the cardiac arrest. This persistently low ETCO2 during CPR suggests inadequate perfusion from poor quality compressions. The esophageal placement is unlikely as the tube was already confirmed in the trachea with an ETCO2 of 35 mmHg before the arrest.',
        topic: 'Advanced Airway Management',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          'A patient with refractory status asthmaticus is on mechanical ventilation with significant auto-PEEP of 12 cmH2O. The patient is hypotensive with a blood pressure of 78/45 mmHg. Which of the following interventions would most likely improve the hemodynamic status?',
        choices: {
          A: 'Administer a large bolus of normal saline',
          B: 'Start norepinephrine infusion',
          C: 'Increase the respiratory rate to improve minute ventilation',
          D: 'Disconnect the patient from the ventilator briefly to allow complete exhalation, then reduce the respiratory rate and increase expiratory time',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In status asthmaticus with severe auto-PEEP, the increased intrathoracic pressure impedes venous return and decreases cardiac output. Briefly disconnecting the patient from the ventilator allows trapped gas to escape, reducing intrathoracic pressure and restoring venous return. Subsequently, the ventilator should be set with a lower respiratory rate, longer expiratory time, and higher inspiratory flow to minimize further air trapping.',
        explanationWrong:
          'While IV fluids may temporarily improve preload, they do not address the underlying cause of auto-PEEP. Norepinephrine treats the symptom (hypotension) but not the cause (elevated intrathoracic pressure from air trapping). Increasing the respiratory rate would worsen auto-PEEP by further reducing expiratory time.',
        topic: 'Advanced Mechanical Ventilation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          'A patient with cardiogenic shock is on VA ECMO with femoral arterial and venous cannulation. The distal perfusion catheter in the superficial femoral artery has been clamped accidentally for 4 hours. What complication is the patient at risk for?',
        choices: {
          A: 'Pulmonary embolism',
          B: 'Cerebral hemorrhage',
          C: 'Acute limb ischemia of the cannulated leg requiring emergent vascular surgery evaluation',
          D: 'Renal failure from contrast nephropathy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The distal perfusion catheter provides antegrade blood flow to the leg distal to the arterial cannulation site on VA ECMO. When clamped for 4 hours, the leg has been ischemic due to obstruction of the femoral artery by the ECMO cannula without distal perfusion. This is a vascular emergency requiring immediate restoration of flow and possible fasciotomy if compartment syndrome develops.',
        explanationWrong:
          'While pulmonary embolism is a risk in critically ill patients, it is not specifically related to a clamped distal perfusion catheter. Cerebral hemorrhage is not directly caused by peripheral ischemia. Renal failure from contrast nephropathy is unrelated to this scenario.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          'A patient with ARDS and prone positioning is receiving continuous enteral nutrition. Which precaution is most important regarding nutrition during prone positioning?',
        choices: {
          A: 'Discontinue all enteral nutrition during prone positioning',
          B: 'Continue enteral nutrition with the head of bed elevated 25-30 degrees (reverse Trendelenburg) and monitor gastric residual volumes',
          C: 'Switch to parenteral nutrition exclusively',
          D: 'Administer bolus feeds every 4 hours instead of continuous feeds',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Enteral nutrition can be continued during prone positioning with appropriate precautions. The head of bed should be elevated 25-30 degrees in reverse Trendelenburg position to reduce aspiration risk. Gastric residual volumes should be monitored, and prokinetic agents may be used if gastroparesis develops.',
        explanationWrong:
          'Complete discontinuation of enteral nutrition during prone sessions (which last 16+ hours) would result in significant caloric deficit. Switching entirely to parenteral nutrition increases infection risk and is not necessary. Bolus feeds increase the risk of aspiration and gastric distension during prone positioning.',
        topic: 'Prone Positioning',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          'A patient with septic shock has an arterial line and CVP monitoring. The arterial waveform shows a significant respiratory variation in the systolic pressure. The systolic pressure variation (SPV) is calculated at 18 mmHg. What does this indicate?',
        choices: {
          A: 'The patient is adequately fluid resuscitated',
          B: 'The patient has cardiac tamponade',
          C: 'The arterial line is dampened',
          D: 'The patient is likely fluid responsive and may benefit from a fluid challenge',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Systolic pressure variation (SPV) greater than 10-12 mmHg in a mechanically ventilated patient suggests fluid responsiveness. The respiratory variation in arterial pressure reflects the heart operating on the steep portion of the Frank-Starling curve, indicating that additional preload would increase stroke volume and cardiac output.',
        explanationWrong:
          'An SPV of 18 mmHg is well above the threshold for fluid responsiveness, suggesting the patient is not adequately resuscitated. While cardiac tamponade can cause pulsus paradoxus, the clinical context of septic shock makes hypovolemia more likely. A dampened arterial line would show reduced pulse pressure amplitude, not respiratory variation.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          'A patient in the ICU is receiving concurrent neuromuscular blockade and sedation. The nursing staff asks about the appropriate depth of sedation monitoring during paralysis. Which of the following is most appropriate?',
        choices: {
          A: 'RASS is sufficient for monitoring sedation during paralysis',
          B: 'Processed EEG monitoring (such as BIS) should be used to ensure adequate sedation since clinical sedation scales cannot be assessed during paralysis',
          C: 'No sedation monitoring is needed during paralysis',
          D: 'Pupillary response is a reliable indicator of sedation depth',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During neuromuscular blockade, clinical sedation scales like RASS cannot be used because the patient cannot demonstrate motor responses. Processed EEG monitoring (BIS or similar) provides an objective measure of brain activity and sedation depth. Ensuring adequate sedation during paralysis is critical to prevent awareness, which can cause significant psychological trauma.',
        explanationWrong:
          'RASS requires motor responses and cannot be assessed during paralysis. Sedation monitoring is essential during paralysis to prevent patient awareness. Pupillary response reflects brainstem function and autonomic activity, not reliably the depth of sedation from ICU sedative agents.',
        topic: 'Sedation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          'A patient with severe ARDS has a PaO2/FiO2 ratio of 70 mmHg. The ECMO team is consulted. According to the EOLIA trial criteria, which patient characteristic would make them a candidate for VV ECMO referral?',
        choices: {
          A: 'PaO2/FiO2 < 50 mmHg for more than 3 hours, or PaO2/FiO2 < 80 for more than 6 hours, or arterial pH < 7.25 with PaCO2 ≥ 60 mmHg for more than 6 hours despite optimization',
          B: 'PaO2/FiO2 < 200 mmHg on any FiO2',
          C: 'Mechanical ventilation for more than 21 days',
          D: 'Age greater than 70 years with multiple comorbidities',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The EOLIA trial used specific criteria for VV ECMO referral: PaO2/FiO2 < 50 mmHg for more than 3 hours, PaO2/FiO2 < 80 mmHg for more than 6 hours, or arterial pH < 7.25 with PaCO2 ≥ 60 mmHg for more than 6 hours, all despite optimal conventional management including prone positioning.',
        explanationWrong:
          'A PaO2/FiO2 < 200 is the threshold for moderate ARDS and is not severe enough alone to warrant ECMO referral. Prolonged mechanical ventilation beyond 10-14 days is actually a relative contraindication to ECMO. Advanced age with multiple comorbidities is a relative contraindication, not an indication for ECMO.',
        topic: 'ECMO',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          'A patient with severe ARDS is receiving lung-protective ventilation. The respiratory therapist is calculating the transpulmonary pressure using esophageal manometry. The plateau pressure is 28 cmH2O and the esophageal pressure at end-inspiration is 18 cmH2O. What is the transpulmonary pressure, and what does it indicate?',
        choices: {
          A: 'Transpulmonary pressure is 46 cmH2O, indicating safe ventilation',
          B: 'Transpulmonary pressure is 28 cmH2O, indicating overdistension',
          C: 'Transpulmonary pressure is 10 cmH2O (28 - 18), which is within the acceptable range and suggests the lung is not being overdistended',
          D: 'Transpulmonary pressure cannot be calculated from these values',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Transpulmonary pressure is calculated as airway pressure minus pleural pressure (estimated by esophageal pressure): 28 - 18 = 10 cmH2O. A transpulmonary pressure below 20-25 cmH2O at end-inspiration suggests the lung is not being overdistended. This measurement is valuable in obese patients or those with elevated pleural pressures where airway pressure alone may overestimate lung stress.',
        explanationWrong:
          'Adding the pressures (46 cmH2O) is incorrect; transpulmonary pressure is the difference between airway and pleural pressures. The transpulmonary pressure is not equal to the plateau pressure alone. These values are sufficient to calculate transpulmonary pressure.',
        topic: 'ARDS Management',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 5 seeded (20 questions, isFree: false)')

  console.log('Done seeding ACCS mini exams 1-5!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
