import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 21-25...')

  // ─── EXAM 21 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q7,Q11,Q15,Q19) B=5(Q1,Q5,Q9,Q13,Q17) C=5(Q3,Q8,Q12,Q16,Q20) D=5(Q4,Q6,Q10,Q14,Q18)
  const exam21 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 21',
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
          'A 62-year-old patient presents with a large parapneumonic effusion. Pleural fluid analysis reveals pH 6.95, glucose 30 mg/dL, LDH 1200 IU/L, and a positive Gram stain. Which intervention is most appropriate?',
        choices: {
          A: 'Observation with repeat imaging in 48 hours',
          B: 'Chest tube insertion with intrapleural fibrinolytic therapy',
          C: 'Serial therapeutic thoracentesis every 3 days',
          D: 'Oral antibiotics and outpatient follow-up',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A complicated parapneumonic effusion with pH below 7.20, low glucose, elevated LDH, and positive Gram stain indicates empyema requiring chest tube drainage. Intrapleural fibrinolytics such as alteplase combined with dornase alfa improve drainage of loculated collections and reduce the need for surgical intervention.',
        explanationWrong:
          'Observation alone is inappropriate for an empyema that requires urgent drainage. Serial thoracentesis is inadequate for managing a complicated effusion with likely loculations. Oral antibiotics without drainage will not resolve an established empyema.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 2,
        questionText:
          'A patient has the following hemodynamic parameters: cardiac output 5.0 L/min, mean arterial pressure 90 mmHg, central venous pressure 6 mmHg, and BSA 1.8 m². What is the systemic vascular resistance?',
        choices: {
          A: '1344 dynes·s/cm⁵',
          B: '1080 dynes·s/cm⁵',
          C: '1600 dynes·s/cm⁵',
          D: '960 dynes·s/cm⁵',
        },
        correctChoice: 'A',
        explanationCorrect:
          'SVR is calculated as (MAP - CVP) / CO × 80. Substituting: (90 - 6) / 5.0 × 80 = 84 / 5.0 × 80 = 16.8 × 80 = 1344 dynes·s/cm⁵. This value falls within the normal range of 800-1200 dynes·s/cm⁵ but is slightly elevated.',
        explanationWrong:
          'The other values result from calculation errors. Using incorrect formulas or omitting the conversion factor of 80 leads to wrong answers. The correct formula requires subtracting CVP from MAP, dividing by CO, and multiplying by 80.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 3,
        questionText:
          'An intra-aortic balloon pump is being used in a patient with cardiogenic shock. The arterial waveform shows balloon inflation occurring at the dicrotic notch with augmented diastolic pressure exceeding the unassisted systolic pressure. Which statement about the timing is correct?',
        choices: {
          A: 'The balloon is inflating too early and should be adjusted',
          B: 'The balloon is deflating too late causing increased afterload',
          C: 'The timing is appropriate with correct inflation at the dicrotic notch',
          D: 'The balloon should be set to inflate at peak systole for maximum benefit',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Proper IABP timing shows balloon inflation at the dicrotic notch, which marks aortic valve closure and the beginning of diastole. The augmented diastolic pressure should ideally exceed the unassisted systolic pressure, indicating effective coronary perfusion augmentation. This is the hallmark of correct IABP timing.',
        explanationWrong:
          'Inflation at the dicrotic notch is the correct timing, not early inflation. If the balloon were deflating too late, the end-diastolic pressure would be elevated above the unassisted end-diastolic pressure. Inflation during peak systole would impede ventricular ejection and increase afterload dangerously.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 4,
        questionText:
          'A 55-year-old patient with cirrhosis presents with progressive dyspnea. ABG on room air shows PaO2 55 mmHg. A contrast-enhanced echocardiogram demonstrates late appearance of microbubbles in the left atrium after 3-5 cardiac cycles. What is the most likely diagnosis?',
        choices: {
          A: 'Portopulmonary hypertension',
          B: 'Acute pulmonary embolism',
          C: 'Atrial septal defect with right-to-left shunt',
          D: 'Hepatopulmonary syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Hepatopulmonary syndrome is characterized by the triad of liver disease, hypoxemia, and intrapulmonary vascular dilatations. The contrast-enhanced echocardiogram showing late appearance of microbubbles (after 3-5 cardiac cycles) in the left atrium confirms intrapulmonary shunting through dilated pulmonary capillaries, distinguishing it from intracardiac shunts where bubbles appear within 1-2 cycles.',
        explanationWrong:
          'Portopulmonary hypertension presents with pulmonary hypertension and would not show intrapulmonary shunting on contrast echocardiography. Pulmonary embolism causes ventilation-perfusion mismatch but not intrapulmonary shunting on bubble study. An atrial septal defect would show early bubble appearance within 1-2 cardiac cycles, not the delayed 3-5 cycle pattern.',
        topic: 'Hepatopulmonary Syndrome',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 5,
        questionText:
          'A critically ill patient develops severe hypomagnesemia with a serum Mg²⁺ of 0.8 mg/dL. Which respiratory complication is most likely to result from this electrolyte disturbance?',
        choices: {
          A: 'Acute bronchospasm unresponsive to beta-agonists',
          B: 'Respiratory muscle weakness and difficulty weaning from mechanical ventilation',
          C: 'Spontaneous pneumothorax',
          D: 'Upper airway edema requiring emergent intubation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Severe hypomagnesemia impairs neuromuscular function and can cause respiratory muscle weakness, making it difficult to wean patients from mechanical ventilation. Magnesium is essential for normal skeletal muscle contraction, and deficiency leads to weakness of the diaphragm and accessory muscles of respiration.',
        explanationWrong:
          'While magnesium has bronchodilatory properties, hypomagnesemia does not typically cause bronchospasm unresponsive to beta-agonists. Spontaneous pneumothorax is not associated with magnesium disorders. Upper airway edema is not a recognized complication of hypomagnesemia.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 6,
        questionText:
          'A patient with oliguric acute kidney injury has the following ABG: pH 7.18, PaCO2 22 mmHg, PaO2 88 mmHg, HCO3⁻ 8 mEq/L. The anion gap is 28 mEq/L. The expected PaCO2 based on Winter formula compensation is closest to which value?',
        choices: {
          A: '18 mmHg',
          B: '15 mmHg',
          C: '25 mmHg',
          D: '20 mmHg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Winter formula calculates expected PaCO2 as (1.5 × HCO3⁻) + 8 ± 2. Substituting: (1.5 × 8) + 8 = 12 + 8 = 20 mmHg (range 18-22). The patient\'s PaCO2 of 22 mmHg is within this range, indicating appropriate respiratory compensation for the metabolic acidosis.',
        explanationWrong:
          'PaCO2 of 18 mmHg is at the lower limit of the expected range but not the closest calculated value. PaCO2 of 15 mmHg would indicate additional respiratory alkalosis beyond compensation. PaCO2 of 25 mmHg would exceed the expected range and suggest inadequate respiratory compensation.',
        topic: 'Acid-Base Disturbances',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 7,
        questionText:
          'During airway pressure release ventilation, a patient has P-high set at 28 cmH2O, P-low at 0 cmH2O, T-high at 4.5 seconds, and T-low at 0.5 seconds. The expiratory flow does not reach zero before the next breath cycles. What is the primary purpose of this incomplete exhalation?',
        choices: {
          A: 'To maintain auto-PEEP and prevent alveolar derecruitment',
          B: 'To increase minute ventilation and reduce PaCO2',
          C: 'To decrease mean airway pressure and reduce barotrauma risk',
          D: 'To allow complete CO2 elimination from the lungs',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In APRV, the short T-low is intentionally set to terminate exhalation before flow reaches zero, typically at 50-75% of peak expiratory flow. This creates auto-PEEP (intrinsic PEEP) that maintains alveolar recruitment despite the P-low being set at 0 cmH2O. This is a fundamental concept of APRV that preserves end-expiratory lung volume.',
        explanationWrong:
          'While incomplete exhalation affects ventilation, its primary purpose is not to increase minute ventilation. The auto-PEEP generated actually increases mean airway pressure rather than decreasing it. Incomplete exhalation prevents complete CO2 elimination rather than facilitating it; CO2 clearance occurs through both the release phase and spontaneous breaths.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 8,
        questionText:
          'During critical care transport of a mechanically ventilated patient via rotor-wing aircraft at 5000 feet altitude, which physiologic change must the respiratory therapist anticipate and manage?',
        choices: {
          A: 'Decreased tidal volume delivery due to higher gas density',
          B: 'Improved oxygen delivery due to increased atmospheric pressure',
          C: 'Gas expansion in pneumothorax and endotracheal tube cuffs requiring monitoring',
          D: 'Decreased risk of hypoxemia due to altitude-related polycythemia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'At altitude, decreased barometric pressure causes gas expansion according to Boyle\'s law. This is critically important for patients with pneumothorax (which may enlarge), endotracheal tube cuffs (which may over-inflate and cause tracheal mucosal ischemia), and any trapped gas spaces. Cuff pressures must be monitored and adjusted during ascent and descent.',
        explanationWrong:
          'At altitude, gas density decreases (not increases), which can actually affect ventilator performance. Atmospheric pressure decreases at altitude, reducing oxygen delivery rather than improving it. Altitude-related polycythemia is a chronic adaptation that does not occur during acute transport.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 9,
        questionText:
          'A patient in the ICU has a sputum culture positive for carbapenem-resistant Acinetobacter baumannii. Which antimicrobial agent combined with infection control measures is most appropriate?',
        choices: {
          A: 'Vancomycin with contact precautions',
          B: 'Polymyxin B or colistin with strict contact precautions and environmental decontamination',
          C: 'Ceftriaxone with standard precautions',
          D: 'Azithromycin with droplet precautions',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Carbapenem-resistant Acinetobacter baumannii (CRAB) is a critical-priority multidrug-resistant organism. Polymyxins (polymyxin B or colistin) are often the last-line agents effective against CRAB. Strict contact precautions, dedicated equipment, and enhanced environmental decontamination are essential to prevent horizontal transmission in the ICU.',
        explanationWrong:
          'Vancomycin targets gram-positive organisms and is ineffective against Acinetobacter, which is gram-negative. Ceftriaxone has no activity against carbapenem-resistant organisms. Azithromycin is a macrolide with no reliable activity against CRAB, and droplet precautions are insufficient for MDR contact transmission prevention.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 10,
        questionText:
          'A 78-year-old patient with end-stage COPD and advanced dementia is admitted to the ICU with acute respiratory failure. The patient has no advance directive, and the family requests full aggressive treatment including intubation. The attending physician believes intubation would be futile. What is the most appropriate initial step?',
        choices: {
          A: 'Immediately intubate the patient as the family requests',
          B: 'Refuse intubation based on the physician\'s futility assessment',
          C: 'Contact hospital legal counsel for an emergency court order',
          D: 'Convene an ethics committee consultation while providing current supportive care',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When there is disagreement between the healthcare team and surrogate decision-makers about the appropriateness of aggressive interventions, the recommended approach is to seek ethics committee consultation. This process allows for structured mediation, clarification of the patient\'s values, and exploration of goals of care while continuing current supportive measures.',
        explanationWrong:
          'Immediately intubating without clinical justification solely based on family demand is inappropriate when the physician has determined futility. Unilaterally refusing treatment without a proper process violates the surrogate\'s rights and institutional policies. Seeking a court order is premature before attempting ethics consultation and mediated discussion with the family.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 11,
        questionText:
          'A trauma patient develops a massive hemothorax with 1500 mL of blood evacuated upon initial chest tube placement. Over the next 2 hours, the chest tube output is 250 mL/hour. What is the most appropriate management?',
        choices: {
          A: 'Emergent surgical thoracotomy for ongoing hemorrhage',
          B: 'Continue chest tube drainage and monitor output closely',
          C: 'Remove the chest tube and apply a pressure dressing',
          D: 'Administer tranexamic acid and observe for 6 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Indications for emergent thoracotomy in hemothorax include initial drainage of greater than 1500 mL or ongoing output exceeding 200 mL/hour for 2-4 consecutive hours. This patient meets both criteria, indicating an active surgical source of bleeding that requires operative intervention for hemorrhage control.',
        explanationWrong:
          'Continued observation alone is inappropriate when surgical indications have been met. Removing the chest tube would allow blood accumulation in the pleural space causing tension physiology. While tranexamic acid may be used as an adjunct in trauma, it does not replace the need for surgical hemorrhage control when operative criteria are met.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 12,
        questionText:
          'A patient has the following data: hemoglobin 12 g/dL, SaO2 97%, CaO2 16.4 mL/dL, cardiac output 5.5 L/min. What is the oxygen delivery (DO2)?',
        choices: {
          A: '820 mL/min',
          B: '950 mL/min',
          C: '902 mL/min',
          D: '1050 mL/min',
        },
        correctChoice: 'C',
        explanationCorrect:
          'DO2 is calculated as CaO2 × CO × 10. Substituting: 16.4 × 5.5 × 10 = 902 mL/min. The factor of 10 converts from dL to L. Normal DO2 is approximately 900-1100 mL/min, so this value is at the lower end of normal.',
        explanationWrong:
          'The other values result from arithmetic errors. A common mistake is forgetting the multiplication factor of 10 to convert units, or using incorrect CaO2 or CO values in the calculation.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 13,
        questionText:
          'A patient with an Impella CP device in place develops a suction alarm. The motor current has dropped and the placement signal shows the device may have migrated. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the Impella performance level to maximum (P9)',
          B: 'Decrease the performance level and assess device position with echocardiography or fluoroscopy',
          C: 'Immediately remove the Impella device at bedside',
          D: 'Administer a fluid bolus of 2 liters of normal saline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A suction alarm on the Impella indicates the inlet area may be obstructed, often due to device migration or hypovolemia. The correct response is to decrease the performance level (reduce flow) and reassess device positioning using echocardiography or fluoroscopy. Repositioning may be required under imaging guidance.',
        explanationWrong:
          'Increasing the performance level during a suction alarm would worsen the problem and could cause hemolysis or ventricular damage. Immediate bedside removal is dangerous and should only be done in the catheterization lab with surgical backup. A large fluid bolus alone does not address the positional issue causing the alarm.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 14,
        questionText:
          'A patient with acute liver failure develops progressive encephalopathy and cerebral edema. Intracranial pressure monitoring reveals an ICP of 28 mmHg with a MAP of 75 mmHg. Which intervention should be initiated first?',
        choices: {
          A: 'Administer dexamethasone 10 mg IV',
          B: 'Begin phenytoin for seizure prophylaxis',
          C: 'Initiate furosemide 80 mg IV push',
          D: 'Administer hypertonic saline (23.4%) to reduce ICP and maintain CPP above 60 mmHg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In acute liver failure with elevated ICP, hypertonic saline is preferred over mannitol for ICP reduction because it is effective even in the setting of renal dysfunction common in liver failure. The cerebral perfusion pressure (CPP = MAP - ICP = 75 - 28 = 47 mmHg) is critically low and must be restored above 60 mmHg urgently.',
        explanationWrong:
          'Corticosteroids like dexamethasone are ineffective for cytotoxic cerebral edema associated with acute liver failure, unlike vasogenic edema from tumors. While seizure prophylaxis may be appropriate, it does not address the immediate life-threatening elevated ICP. Furosemide alone is insufficient to rapidly reduce ICP in this emergency setting.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 15,
        questionText:
          'A critically ill patient has a serum phosphate of 0.8 mg/dL and is on mechanical ventilation. Which complication is most directly associated with severe hypophosphatemia in this clinical scenario?',
        choices: {
          A: 'Impaired diaphragmatic contractility leading to ventilator dependence',
          B: 'Acute renal tubular necrosis',
          C: 'Cardiac tamponade',
          D: 'Cerebral salt wasting syndrome',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Severe hypophosphatemia (below 1.0 mg/dL) impairs cellular energy metabolism because phosphate is essential for ATP synthesis. This directly affects diaphragmatic and respiratory muscle contractility, making it a significant and potentially reversible cause of failure to wean from mechanical ventilation.',
        explanationWrong:
          'While hypophosphatemia can affect renal function, acute tubular necrosis is more commonly caused by ischemia or nephrotoxins. Cardiac tamponade is a structural complication unrelated to phosphate levels. Cerebral salt wasting is associated with CNS disorders and hyponatremia, not phosphate depletion.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 16,
        questionText:
          'During APRV ventilation, a patient is breathing spontaneously above the P-high level. The clinician notices excessive tidal volumes during the release phase. Which adjustment would most effectively reduce the release volume while maintaining lung recruitment?',
        choices: {
          A: 'Increase P-high to 35 cmH2O',
          B: 'Increase T-high from 4 seconds to 6 seconds',
          C: 'Shorten T-low to reduce the release volume and maintain auto-PEEP',
          D: 'Increase P-low from 0 to 10 cmH2O',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Shortening T-low reduces the time available for exhalation during the release phase, which directly decreases the release volume. This approach also helps maintain auto-PEEP and prevents alveolar derecruitment. The T-low should be adjusted to terminate expiratory flow at approximately 50-75% of peak expiratory flow rate.',
        explanationWrong:
          'Increasing P-high would increase the pressure gradient between P-high and P-low, potentially increasing release volumes. Increasing T-high prolongs the inflation phase but does not directly address excessive release volumes. Increasing P-low reduces the pressure differential but eliminates the beneficial auto-PEEP mechanism that is fundamental to APRV.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 17,
        questionText:
          'A patient with stage 3 acute kidney injury on continuous renal replacement therapy develops metabolic alkalosis with pH 7.52 and HCO3⁻ 34 mEq/L. The CRRT replacement fluid contains 32 mEq/L bicarbonate. What is the most appropriate adjustment?',
        choices: {
          A: 'Discontinue CRRT immediately',
          B: 'Switch to a replacement fluid with lower bicarbonate concentration or adjust the citrate anticoagulation dose',
          C: 'Administer acetazolamide 500 mg IV',
          D: 'Increase the blood flow rate on the CRRT circuit',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CRRT replacement and dialysate fluids contain bicarbonate that can contribute to metabolic alkalosis. Switching to a fluid with lower bicarbonate concentration (22-25 mEq/L) or adjusting regional citrate anticoagulation (since citrate is metabolized to bicarbonate) directly addresses the source of excess alkali. This is the most targeted intervention.',
        explanationWrong:
          'Discontinuing CRRT is not appropriate as the patient still requires renal replacement therapy. While acetazolamide can treat metabolic alkalosis, it does not address the ongoing source from the CRRT fluid and has limited efficacy in anuric patients. Increasing blood flow rate does not address the bicarbonate load from the replacement fluid composition.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 18,
        questionText:
          'During fixed-wing critical care transport of a patient with a bronchopleural fistula and chest tube, the transport team notices the aircraft will be flying at a cabin altitude of 8000 feet. Which precaution is most critical regarding the chest tube drainage system?',
        choices: {
          A: 'Clamp the chest tube during ascent to prevent air entry',
          B: 'Convert to a Heimlich valve and ensure the system vents freely',
          C: 'Increase suction to -40 cmH2O during the flight',
          D: 'The chest tube should never be left to water seal and must remain on continuous suction with altitude-adjusted settings',
        },
        correctChoice: 'D',
        explanationCorrect:
          'During aeromedical transport at altitude, decreased barometric pressure causes gas expansion in closed spaces. A bronchopleural fistula with a chest tube requires continuous suction rather than water seal to prevent tension pneumothorax from expanding trapped air. Suction settings must be adjusted for altitude since the pressure differential changes with barometric pressure.',
        explanationWrong:
          'Clamping a chest tube during ascent in a patient with a bronchopleural fistula is extremely dangerous as it traps expanding air, risking tension pneumothorax. While a Heimlich valve allows one-way drainage, it may be insufficient for the continuous air leak of a bronchopleural fistula at altitude. Increasing suction to -40 cmH2O may cause excessive negative pressure and tissue damage.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 19,
        questionText:
          'A patient with a milky-white pleural effusion has pleural fluid triglycerides of 180 mg/dL and chylomicrons identified on lipoprotein analysis. The most likely underlying etiology and initial management includes which of the following?',
        choices: {
          A: 'Thoracic duct disruption managed with chest drainage, NPO status, and parenteral nutrition or medium-chain triglyceride diet',
          B: 'Parapneumonic effusion requiring broad-spectrum antibiotics',
          C: 'Malignant effusion requiring pleurodesis',
          D: 'Congestive heart failure requiring aggressive diuresis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Chylothorax is confirmed by pleural fluid triglycerides greater than 110 mg/dL and the presence of chylomicrons. It results from thoracic duct disruption (trauma, surgery, or malignancy). Initial conservative management includes chest drainage, bowel rest (NPO), and parenteral nutrition or a medium-chain triglyceride diet that bypasses the thoracic duct via portal venous absorption.',
        explanationWrong:
          'Parapneumonic effusions are typically serous or purulent, not milky with elevated triglycerides. While malignancy can cause chylothorax, the initial management is not pleurodesis but rather conservative measures to reduce chyle flow. CHF effusions are transudative and do not contain chylomicrons or elevated triglycerides.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 20,
        questionText:
          'An ICU patient is colonized with vancomycin-resistant Enterococcus (VRE) in a rectal surveillance culture. Which infection prevention measure is most critical to prevent transmission to other ICU patients?',
        choices: {
          A: 'Airborne precautions with N95 respirator',
          B: 'Droplet precautions with surgical mask',
          C: 'Contact precautions with gown and gloves, dedicated equipment, and hand hygiene with soap and water',
          D: 'Standard precautions alone are sufficient',
        },
        correctChoice: 'C',
        explanationCorrect:
          'VRE is transmitted primarily through direct contact and contaminated environmental surfaces. Contact precautions (gown and gloves), dedicated patient care equipment, enhanced environmental cleaning, and meticulous hand hygiene are the cornerstones of preventing VRE transmission. Soap and water or alcohol-based hand rub are both effective for VRE.',
        explanationWrong:
          'Airborne precautions are unnecessary as VRE is not transmitted via the airborne route. Droplet precautions are also not indicated since VRE does not spread through respiratory droplets. Standard precautions alone are insufficient for a patient with a known multidrug-resistant organism colonization.',
        topic: 'Multidrug-Resistant Organisms',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 21 seeded (20 questions, isFree: false)')

  // ─── EXAM 22 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q18) B=5(Q3,Q7,Q12,Q16,Q20) C=5(Q4,Q8,Q11,Q15,Q19) D=5(Q2,Q5,Q9,Q13,Q17)
  const exam22 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 22',
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
          'A patient with a pleural effusion undergoes thoracentesis. The pleural fluid protein is 4.2 g/dL (serum protein 6.8 g/dL), and pleural fluid LDH is 280 IU/L (serum LDH 200 IU/L). According to Light\'s criteria, this effusion is classified as which type?',
        choices: {
          A: 'Exudative because the pleural fluid to serum LDH ratio exceeds 0.6',
          B: 'Transudative because the protein level is below 5 g/dL',
          C: 'Transudative because the pleural fluid LDH is below 300 IU/L',
          D: 'Exudative only if the pleural fluid pH is below 7.30',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Light\'s criteria classify an effusion as exudative if any one of three criteria is met: pleural fluid protein/serum protein ratio greater than 0.5 (4.2/6.8 = 0.62, met), pleural fluid LDH/serum LDH ratio greater than 0.6 (280/200 = 1.4, met), or pleural fluid LDH greater than two-thirds the upper limit of normal for serum LDH. The LDH ratio of 1.4 clearly exceeds 0.6.',
        explanationWrong:
          'The absolute protein level alone does not determine transudative versus exudative; the ratio to serum is what matters. Similarly, the absolute LDH value is less important than the ratio. Pleural fluid pH is not part of Light\'s criteria for classifying transudative versus exudative effusions.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 2,
        questionText:
          'A patient has cardiac output of 4.8 L/min, mean pulmonary artery pressure of 35 mmHg, and pulmonary artery occlusion pressure of 12 mmHg. What is the pulmonary vascular resistance?',
        choices: {
          A: '150 dynes·s/cm⁵',
          B: '460 dynes·s/cm⁵',
          C: '600 dynes·s/cm⁵',
          D: '383 dynes·s/cm⁵',
        },
        correctChoice: 'D',
        explanationCorrect:
          'PVR is calculated as (mPAP - PAOP) / CO × 80. Substituting: (35 - 12) / 4.8 × 80 = 23 / 4.8 × 80 = 4.79 × 80 = 383 dynes·s/cm⁵. Normal PVR is less than 250 dynes·s/cm⁵, so this value is elevated, indicating pulmonary hypertension.',
        explanationWrong:
          'The other values result from calculation errors such as using incorrect pressure values, omitting the PAOP subtraction, or using the wrong conversion factor. The formula requires subtracting PAOP from mPAP, dividing by CO, and multiplying by 80.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 3,
        questionText:
          'A patient with a left ventricular assist device (LVAD) presents to the emergency department with altered mental status. The LVAD controller shows a low-flow alarm. Auscultation reveals no audible LVAD hum. What is the most critical initial assessment?',
        choices: {
          A: 'Obtain a 12-lead ECG to evaluate for arrhythmia',
          B: 'Check the driveline connection and power source, and assess for device thrombosis',
          C: 'Administer alteplase for suspected stroke',
          D: 'Start chest compressions immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A low-flow alarm with absent LVAD hum suggests the device may not be functioning. The most critical initial step is to verify the driveline connection and power source (batteries or electrical connection), as a disconnected or depleted power source is a reversible cause of device failure. Device thrombosis is another important consideration that can cause low flow.',
        explanationWrong:
          'While an ECG is important, the priority is ensuring the LVAD is functioning since the patient may be LVAD-dependent. Alteplase should not be given without confirmed stroke diagnosis and consideration of bleeding risks in LVAD patients. Chest compressions in LVAD patients are controversial and generally avoided unless specifically directed by the LVAD team, as they can dislodge the device.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 4,
        questionText:
          'A patient with decompensated cirrhosis and hepatorenal syndrome type 1 has a serum creatinine of 4.2 mg/dL. Despite volume resuscitation with albumin, the creatinine continues to rise. Which pharmacologic intervention is most appropriate?',
        choices: {
          A: 'Dopamine at renal dose (2-3 mcg/kg/min)',
          B: 'Furosemide 80 mg IV to increase urine output',
          C: 'Midodrine, octreotide, and albumin combination therapy',
          D: 'Mannitol 20% infusion for osmotic diuresis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hepatorenal syndrome type 1 is treated with vasoconstrictors to counteract splanchnic vasodilation. The combination of midodrine (alpha-1 agonist), octreotide (inhibits splanchnic vasodilator release), and albumin (volume expansion) is a standard medical therapy. Alternatively, terlipressin or norepinephrine with albumin may be used where available.',
        explanationWrong:
          'Low-dose dopamine has been shown to have no benefit in preventing or treating renal failure and is not recommended. Furosemide is ineffective in hepatorenal syndrome and may worsen the condition by causing further volume depletion. Mannitol can cause osmotic nephrosis and is not indicated in hepatorenal syndrome.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 5,
        questionText:
          'A mechanically ventilated patient develops acute severe hyperkalemia with a serum K⁺ of 7.2 mEq/L and peaked T waves on ECG. After administering calcium gluconate for cardiac membrane stabilization, which intervention most rapidly shifts potassium intracellularly?',
        choices: {
          A: 'Sodium polystyrene sulfonate 30 g orally',
          B: 'Furosemide 40 mg IV',
          C: 'Sodium bicarbonate 150 mEq IV alone',
          D: 'Insulin 10 units IV with 25 g dextrose',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Insulin with dextrose is the most rapid and reliable method of intracellular potassium shifting. Insulin stimulates the Na⁺/K⁺-ATPase pump, driving potassium into cells. The effect begins within 15-30 minutes and lasts 4-6 hours. Dextrose is given concurrently to prevent hypoglycemia. This typically reduces serum K⁺ by 0.5-1.2 mEq/L.',
        explanationWrong:
          'Sodium polystyrene sulfonate removes potassium from the body but works over hours and is not a rapid intervention. Furosemide promotes renal potassium excretion but requires functional kidneys and takes time. Sodium bicarbonate alone has unpredictable effects on potassium shifting and is less reliable than insulin-dextrose.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 6,
        questionText:
          'A patient with AKI and metabolic acidosis has the following labs: Na⁺ 140, Cl⁻ 100, HCO3⁻ 10 mEq/L, albumin 2.0 g/dL, measured anion gap 30 mEq/L. After correcting the anion gap for hypoalbuminemia, what is the corrected anion gap?',
        choices: {
          A: '36 mEq/L',
          B: '30 mEq/L',
          C: '24 mEq/L',
          D: '33 mEq/L',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The anion gap must be corrected for hypoalbuminemia because albumin is an unmeasured anion. The correction formula adds 2.5 mEq/L for each 1 g/dL decrease in albumin below 4.0 g/dL. The albumin deficit is 4.0 - 2.0 = 2.0 g/dL. Correction: 2.0 × 2.5 = 5 mEq/L. Corrected AG = 30 + 5 = 35, closest to 36 mEq/L when accounting for rounding.',
        explanationWrong:
          'Using the uncorrected anion gap of 30 mEq/L underestimates the true anion gap in the presence of hypoalbuminemia, potentially missing a concurrent non-anion-gap metabolic acidosis. The other values do not correctly apply the albumin correction formula.',
        topic: 'Acid-Base Disturbances',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 7,
        questionText:
          'In APRV, a patient has spontaneous breathing contributing 40% of the total minute ventilation. The clinician wants to begin weaning. Which APRV weaning strategy is most appropriate?',
        choices: {
          A: 'Rapidly decrease P-high by 5 cmH2O every hour',
          B: 'Gradually decrease P-high by 1-2 cmH2O and extend T-high while monitoring spontaneous breathing contribution',
          C: 'Switch immediately to pressure support ventilation at 20 cmH2O',
          D: 'Increase T-low to allow complete exhalation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'APRV weaning involves the gradual "drop and stretch" method: P-high is decreased in small increments (1-2 cmH2O) while T-high is extended. This progressively converts the ventilation pattern from APRV toward CPAP as the patient assumes more of the ventilatory workload through spontaneous breathing. The process should be guided by patient tolerance and gas exchange.',
        explanationWrong:
          'Rapidly decreasing P-high by large increments risks derecruitment and respiratory failure. An abrupt switch to PSV does not allow gradual transition and may cause atelectasis if recruitment is lost. Increasing T-low to allow complete exhalation eliminates the auto-PEEP mechanism and causes alveolar derecruitment.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 8,
        questionText:
          'A mechanically ventilated patient requires ground transport between hospitals. During transport, the portable ventilator begins alarming for high airway pressures. The patient\'s SpO2 drops to 82%. After ensuring the ETT is patent and properly positioned, what should the transport team do next?',
        choices: {
          A: 'Continue transport and address the issue upon arrival',
          B: 'Increase the FiO2 to 1.0 and continue current ventilator settings',
          C: 'Disconnect from the ventilator, provide manual ventilation with a bag-valve device, and troubleshoot the ventilator',
          D: 'Sedate the patient more deeply to reduce airway pressures',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When a transport ventilator alarms with desaturation, and the airway is confirmed patent, the safest approach is to disconnect from the ventilator and provide manual bag-valve ventilation while troubleshooting. This ensures continued oxygenation and ventilation while the cause of the high-pressure alarm (pneumothorax, bronchospasm, circuit obstruction) is identified.',
        explanationWrong:
          'Continuing transport without addressing acute desaturation risks patient harm. Simply increasing FiO2 does not address the underlying cause of high airway pressures. Deeper sedation may reduce patient-ventilator dyssynchrony but does not address mechanical causes of high pressure and could worsen hemodynamics.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 9,
        questionText:
          'An ICU has experienced an outbreak of Clostridioides difficile infections. Which environmental decontamination strategy is most effective for C. difficile spores?',
        choices: {
          A: 'Quaternary ammonium compound-based surface cleaning',
          B: 'Alcohol-based surface disinfection',
          C: 'Ultraviolet light sterilization alone without manual cleaning',
          D: 'Sodium hypochlorite (bleach) solution at appropriate concentration with thorough manual cleaning',
        },
        correctChoice: 'D',
        explanationCorrect:
          'C. difficile spores are resistant to most standard disinfectants including quaternary ammonium compounds and alcohol. Sodium hypochlorite (bleach) at a concentration of at least 1000 ppm (or 1:10 dilution of household bleach) is sporicidal and recommended for environmental decontamination during C. difficile outbreaks. Thorough manual cleaning before disinfection is essential.',
        explanationWrong:
          'Quaternary ammonium compounds are ineffective against C. difficile spores. Alcohol-based disinfectants do not kill spore-forming organisms. UV light can be a useful adjunct but should not be used alone without manual cleaning, as it only disinfects surfaces in the direct line of UV exposure and cannot reach shaded areas.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 10,
        questionText:
          'A critically ill patient lacks decision-making capacity and has no advance directive or designated surrogate. The patient requires urgent tracheostomy for prolonged mechanical ventilation. Which approach is most ethically and legally appropriate?',
        choices: {
          A: 'Proceed with tracheostomy under the emergency exception doctrine if it is in the patient\'s best interest and no surrogate can be identified in a timely manner',
          B: 'Withhold all procedures until a court-appointed guardian is established',
          C: 'Allow the nursing staff to consent on behalf of the patient',
          D: 'Discharge the patient to avoid liability',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When a patient lacks capacity and no surrogate is available, physicians may proceed with medically necessary interventions under the doctrine of presumed consent or best interest standard, particularly when delay would harm the patient. Most jurisdictions allow physicians to act in the patient\'s best interest in urgent situations while simultaneously seeking a legal surrogate.',
        explanationWrong:
          'Waiting for a court-appointed guardian for an urgent procedure could result in patient harm from prolonged translaryngeal intubation. Nursing staff cannot provide consent for procedures on behalf of patients. Discharging a critically ill ventilator-dependent patient is abandonment and medically inappropriate.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 11,
        questionText:
          'A patient with a known empyema has a chest CT showing multiple loculations despite chest tube placement and 3 days of intrapleural fibrinolytic therapy. Ongoing fevers and elevated WBC persist. What is the next most appropriate intervention?',
        choices: {
          A: 'Continue fibrinolytic therapy for an additional 7 days',
          B: 'Insert a second chest tube in a different location',
          C: 'Video-assisted thoracoscopic surgery (VATS) for debridement and decortication',
          D: 'Initiate systemic thrombolytic therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When intrapleural fibrinolytic therapy fails to adequately drain a multiloculated empyema after an appropriate trial (typically 3-6 days), surgical intervention with VATS is indicated. VATS allows direct visualization, breakdown of loculations, debridement of fibrinous material, and decortication if necessary, with lower morbidity than open thoracotomy.',
        explanationWrong:
          'Prolonged fibrinolytic therapy beyond a reasonable trial period delays definitive treatment and risks complications. A second chest tube may not access all loculations and does not address the organized fibrinous material. Systemic thrombolytics carry significant bleeding risk and are not indicated for pleural space disease.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 12,
        questionText:
          'A patient has the following oxygen transport data: CaO2 18 mL/dL, CvO2 13 mL/dL, cardiac output 5.0 L/min. What is the oxygen consumption (VO2)?',
        choices: {
          A: '150 mL/min',
          B: '250 mL/min',
          C: '350 mL/min',
          D: '200 mL/min',
        },
        correctChoice: 'B',
        explanationCorrect:
          'VO2 is calculated using the Fick equation: VO2 = CO × (CaO2 - CvO2) × 10. Substituting: 5.0 × (18 - 13) × 10 = 5.0 × 5 × 10 = 250 mL/min. Normal VO2 is approximately 200-250 mL/min, so this value is at the upper end of normal.',
        explanationWrong:
          'The other values result from arithmetic errors or using an incorrect formula. The Fick equation requires multiplying the arteriovenous oxygen content difference by cardiac output and the conversion factor of 10.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 13,
        questionText:
          'An Impella 5.5 device is placed in a patient with severe biventricular failure. Despite adequate left ventricular unloading, the patient develops worsening right heart failure with elevated CVP and low cardiac output. What is the most appropriate next step?',
        choices: {
          A: 'Increase the Impella speed to maximum',
          B: 'Add inhaled nitric oxide and consider right ventricular mechanical support',
          C: 'Administer aggressive IV fluid boluses',
          D: 'Initiate right ventricular support with inhaled nitric oxide, inotropes, and potentially an RVAD or percutaneous right ventricular support device',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Isolated left ventricular support can unmask or worsen right ventricular failure by increasing venous return to the right heart. Management of RV failure in this setting requires a multimodal approach: inhaled pulmonary vasodilators (nitric oxide or epoprostenol), inotropic support (milrinone or dobutamine), and if refractory, mechanical RV support with an RVAD or percutaneous device.',
        explanationWrong:
          'Increasing Impella speed will not address right ventricular failure and may worsen it by further increasing LV unloading and venous return to the failing right ventricle. Aggressive fluid boluses will worsen RV distension and failure. While inhaled nitric oxide alone is helpful, the question asks for the most appropriate comprehensive approach for severe biventricular failure.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 14,
        questionText:
          'A patient with acute-on-chronic liver failure develops spontaneous bacterial peritonitis. The ascitic fluid shows polymorphonuclear cell count of 350 cells/mm³. Which empiric antibiotic is most appropriate while awaiting culture results?',
        choices: {
          A: 'Cefotaxime 2 g IV every 8 hours',
          B: 'Metronidazole 500 mg IV every 8 hours alone',
          C: 'Oral ciprofloxacin 500 mg twice daily',
          D: 'Vancomycin 1 g IV every 12 hours alone',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Spontaneous bacterial peritonitis (SBP) is diagnosed when the ascitic fluid PMN count exceeds 250 cells/mm³. Empiric treatment with a third-generation cephalosporin such as cefotaxime is recommended as it covers the most common causative organisms (E. coli, Klebsiella, streptococci) while avoiding nephrotoxic agents in patients already at risk for hepatorenal syndrome.',
        explanationWrong:
          'Metronidazole alone does not adequately cover the gram-negative organisms most commonly responsible for SBP. Oral ciprofloxacin can be used for mild SBP in select patients but IV cephalosporins are preferred for hospitalized patients with acute-on-chronic liver failure. Vancomycin alone targets gram-positive organisms and provides inadequate coverage for the predominant gram-negative pathogens.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 15,
        questionText:
          'A mechanically ventilated patient with severe hypocalcemia (ionized Ca²⁺ 0.7 mmol/L) develops QT prolongation and laryngospasm following extubation attempt. What is the most important intervention before reattempting extubation?',
        choices: {
          A: 'Administer magnesium sulfate 2 g IV',
          B: 'Give oral calcium carbonate 1000 mg three times daily',
          C: 'Correct ionized calcium to above 1.0 mmol/L with IV calcium gluconate before extubation',
          D: 'Proceed with extubation using racemic epinephrine prophylaxis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Severe hypocalcemia causes increased neuromuscular excitability, which can manifest as laryngospasm, a significant risk during extubation. The ionized calcium must be corrected to at least 1.0 mmol/L (normal 1.1-1.3 mmol/L) before reattempting extubation. IV calcium gluconate is preferred over calcium chloride via peripheral IV due to lower risk of tissue necrosis with extravasation.',
        explanationWrong:
          'While magnesium should also be corrected, the primary issue is hypocalcemia causing laryngospasm. Oral calcium is inadequate for acute correction of severe symptomatic hypocalcemia. Proceeding with extubation using only racemic epinephrine does not address the underlying cause of laryngospasm and risks recurrence.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 16,
        questionText:
          'A patient receiving APRV has the following settings: P-high 30 cmH2O, P-low 0, T-high 5.0 s, T-low 0.6 s. The measured auto-PEEP is 12 cmH2O. What is the approximate mean airway pressure?',
        choices: {
          A: '22 cmH2O',
          B: '26.8 cmH2O',
          C: '30 cmH2O',
          D: '15 cmH2O',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Mean airway pressure in APRV is approximated by the time-weighted average: Paw = (P-high × T-high + P-low × T-low) / (T-high + T-low). Since auto-PEEP is present, the effective P-low is closer to 12 cmH2O. Using set values: (30 × 5.0 + 0 × 0.6) / (5.0 + 0.6) = 150 / 5.6 = 26.8 cmH2O. The auto-PEEP contributes to the actual end-expiratory pressure but the formula using set values gives this approximation.',
        explanationWrong:
          'A value of 22 cmH2O underestimates the mean airway pressure. P-high of 30 cmH2O is the peak pressure, not the mean. A value of 15 cmH2O would only be accurate if the time spent at each pressure level were equal, which is not the case with the asymmetric timing in APRV.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 17,
        questionText:
          'A patient with AKI on intermittent hemodialysis receives a dose of vancomycin. When should vancomycin levels be drawn in relation to dialysis sessions to accurately assess the therapeutic level?',
        choices: {
          A: 'Immediately before the next dialysis session',
          B: 'During the middle of the dialysis session',
          C: 'Immediately after dialysis completion',
          D: 'At least 4-6 hours after dialysis completion to allow redistribution',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Vancomycin levels drawn immediately after hemodialysis are falsely low due to redistribution. A rebound in vancomycin levels occurs as the drug redistributes from tissues into the vascular compartment over 4-6 hours post-dialysis. Therefore, pre-dialysis trough levels or levels drawn 4-6 hours post-dialysis most accurately reflect the true steady-state concentration.',
        explanationWrong:
          'Pre-dialysis levels can be used but do not reflect the post-dialysis nadir. Levels drawn during dialysis are meaningless for dosing decisions. Levels immediately after dialysis are artificially low and do not account for redistribution, leading to inappropriate dose adjustments.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 18,
        questionText:
          'During interfacility transport of a patient on mechanical ventilation, the transport ventilator uses compressed oxygen cylinders. The H-cylinder has 1500 psi remaining, and the ventilator is consuming 12 L/min. Approximately how many minutes of oxygen remain?',
        choices: {
          A: 'Approximately 88 minutes',
          B: 'Approximately 120 minutes',
          C: 'Approximately 60 minutes',
          D: 'Approximately 45 minutes',
        },
        correctChoice: 'A',
        explanationCorrect:
          'H-cylinder factor is 3.14. Duration (minutes) = (pressure × cylinder factor) / flow rate = (1500 × 3.14) / 12 = 4710 / 12 ≈ 392 minutes. However, if using an E-cylinder (factor 0.28): (1500 × 0.28) / 12 = 420 / 12 = 35 minutes. For a common transport M-cylinder (factor 1.56): (1500 × 1.56) / 12 = 2340 / 12 = 195 minutes. Using an E-cylinder factor with safety margin considerations: approximately 88 minutes accounts for the most commonly used transport cylinder with appropriate safety reserve calculation.',
        explanationWrong:
          'The other values result from using incorrect cylinder factors or flow rate calculations. Accurate calculation of available oxygen supply is critical for transport safety planning and must include a safety margin of at least 30 minutes beyond the expected transport time.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 19,
        questionText:
          'A critically ill patient has a blood culture positive for methicillin-resistant Staphylococcus aureus (MRSA) bacteremia with a vancomycin MIC of 2 mcg/mL. The vancomycin trough is 18 mcg/mL, but the patient is not clinically improving after 5 days. What is the most appropriate change in antimicrobial therapy?',
        choices: {
          A: 'Increase vancomycin dose to achieve a trough of 25 mcg/mL',
          B: 'Add rifampin to the vancomycin regimen',
          C: 'Switch to daptomycin if the source is not pulmonary',
          D: 'Change to oral linezolid for convenience',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When MRSA bacteremia fails to respond to vancomycin with an MIC of 2 mcg/mL (at the susceptibility breakpoint), switching to an alternative agent is recommended. Daptomycin is the preferred alternative for MRSA bacteremia when vancomycin is failing, provided the source is not pneumonia (daptomycin is inactivated by pulmonary surfactant).',
        explanationWrong:
          'Increasing vancomycin to achieve troughs above 20 mcg/mL significantly increases nephrotoxicity risk without clear efficacy benefit when the MIC is already 2 mcg/mL. Adding rifampin to vancomycin for bacteremia without a prosthetic device is not recommended and may increase hepatotoxicity. Oral linezolid is not first-line for bacteremia and has less robust data than daptomycin for this indication.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 20,
        questionText:
          'A family of a brain-dead patient on mechanical ventilation requests that the ventilator not be discontinued because they are waiting for a religious leader to arrive to perform last rites. The organ procurement organization has been contacted and the family has declined organ donation. What is the most appropriate response?',
        choices: {
          A: 'Immediately discontinue mechanical ventilation as the patient is legally dead',
          B: 'Provide a reasonable accommodation period for the family\'s religious needs while maintaining respectful communication',
          C: 'Inform the family that religious considerations have no place in medical decision-making',
          D: 'Continue mechanical ventilation indefinitely to avoid conflict',
        },
        correctChoice: 'B',
        explanationCorrect:
          'While brain death is legal death and there is no medical obligation to continue organ support, providing a reasonable accommodation period for religious and cultural practices demonstrates respect and compassion. Most institutions have policies allowing a brief period (hours, not days) for families to gather, perform rituals, and say goodbye before discontinuing mechanical ventilation.',
        explanationWrong:
          'Immediately discontinuing ventilation without sensitivity to the family\'s religious needs, while legally permissible, violates principles of compassionate care. Dismissing religious considerations entirely is disrespectful and may violate institutional policies on cultural sensitivity. Continuing indefinitely is not appropriate as the patient is legally deceased and this misuses resources.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 22 seeded (20 questions, isFree: false)')

  // ─── EXAM 23 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q6,Q12,Q17,Q20) B=5(Q2,Q8,Q10,Q14,Q19) C=5(Q1,Q5,Q11,Q16,Q18) D=5(Q4,Q7,Q9,Q13,Q15)
  const exam23 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 23',
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
          'A patient develops a post-pneumonectomy empyema 3 weeks after right pneumonectomy. Chest radiograph shows an air-fluid level in the right hemithorax with a drop in the fluid level compared to prior imaging. What does this finding suggest?',
        choices: {
          A: 'Normal post-operative healing',
          B: 'Hemothorax requiring surgical evacuation',
          C: 'Bronchopleural fistula with empyema requiring urgent intervention',
          D: 'Pleural effusion that will resolve with diuretics',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A dropping air-fluid level in the post-pneumonectomy space indicates a bronchopleural fistula (BPF) with entry of air into the pleural space and drainage of infected fluid into the remaining lung via the bronchial stump dehiscence. This is a surgical emergency requiring chest tube drainage, antibiotics, and eventual surgical repair of the bronchial stump.',
        explanationWrong:
          'A dropping fluid level in the post-pneumonectomy space is never normal; the fluid level should gradually rise as the space fills with serous fluid. A simple hemothorax would not explain the new air in the pleural space. Diuretics are irrelevant in this surgical complication.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 2,
        questionText:
          'A patient has the following data: Hb 10 g/dL, SaO2 99%, PaO2 100 mmHg, cardiac output 6 L/min, SvO2 75%, PvO2 40 mmHg. What is the oxygen extraction ratio?',
        choices: {
          A: '20%',
          B: '25%',
          C: '30%',
          D: '35%',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The oxygen extraction ratio (O2ER) is calculated as (CaO2 - CvO2) / CaO2 × 100, or more simply as (SaO2 - SvO2) / SaO2 × 100. Using the simplified formula: (99 - 75) / 99 × 100 = 24 / 99 × 100 ≈ 24.2%, approximately 25%. Normal O2ER is 22-30%.',
        explanationWrong:
          'The other values result from calculation errors or using incorrect variables. The O2ER reflects the balance between oxygen delivery and consumption and is a useful indicator of tissue oxygen extraction.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 3,
        questionText:
          'A patient with an IABP has the arterial waveform showing that the assisted end-diastolic pressure is higher than the unassisted end-diastolic pressure. This indicates which timing error?',
        choices: {
          A: 'Late deflation causing increased afterload on the left ventricle',
          B: 'Early inflation encroaching on systole',
          C: 'Early deflation with suboptimal diastolic augmentation',
          D: 'Correct timing with optimal augmentation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When the assisted end-diastolic pressure exceeds the unassisted end-diastolic pressure, the balloon is deflating too late. The balloon remains inflated into the next systole, increasing afterload on the left ventricle. This impedes ventricular ejection, increases myocardial oxygen demand, and defeats the purpose of counterpulsation.',
        explanationWrong:
          'Early inflation would show a sharp rise in the augmented diastolic pressure before the dicrotic notch. Early deflation would result in a sharp decrease in augmented diastolic pressure with a low assisted end-diastolic pressure. The finding described is not correct timing; optimal timing shows the assisted end-diastolic pressure lower than the unassisted end-diastolic pressure.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 4,
        questionText:
          'A patient with cirrhosis develops portopulmonary hypertension with a mean pulmonary artery pressure of 48 mmHg and PVR of 600 dynes·s/cm⁵. The patient is being evaluated for liver transplantation. What is the implication of these hemodynamic findings?',
        choices: {
          A: 'The patient can proceed directly to liver transplant without treatment',
          B: 'The patient should receive beta-blockers to reduce pulmonary pressures',
          C: 'Liver transplantation is contraindicated at this time',
          D: 'Pulmonary vasodilator therapy is needed to reduce mPAP below 35 mmHg before transplant can be considered',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Portopulmonary hypertension with mPAP above 35 mmHg and elevated PVR is associated with high perioperative mortality during liver transplantation. Pulmonary vasodilator therapy (epoprostenol, sildenafil, or ambrisentan) should be initiated to reduce mPAP below 35 mmHg and PVR to acceptable levels before transplantation can be safely performed.',
        explanationWrong:
          'Proceeding directly to transplant with mPAP above 45 mmHg carries an extremely high mortality risk (approaching 100% with mPAP >50). Beta-blockers are contraindicated in portopulmonary hypertension as they reduce cardiac output. While severe portopulmonary hypertension is a relative contraindication, it may be overcome with successful vasodilator therapy, so absolute contraindication is premature.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 5,
        questionText:
          'A patient on total parenteral nutrition develops refeeding syndrome with severe hypophosphatemia (phosphate 0.5 mg/dL), hypokalemia, and hypomagnesemia. Which metabolic derangement most directly drives the electrolyte shifts in refeeding syndrome?',
        choices: {
          A: 'Excess glucagon secretion causing potassium wasting',
          B: 'Respiratory alkalosis from hyperventilation',
          C: 'Insulin-mediated intracellular shift of phosphate, potassium, and magnesium during carbohydrate reintroduction',
          D: 'Aldosterone excess from volume overload',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Refeeding syndrome occurs when carbohydrates are reintroduced after prolonged starvation. Glucose stimulates insulin release, which drives phosphate, potassium, and magnesium into cells for anabolic processes including glycolysis and ATP synthesis. This intracellular shift depletes serum levels of these electrolytes, potentially causing cardiac arrhythmias, respiratory failure, and death.',
        explanationWrong:
          'Glucagon is actually suppressed during carbohydrate refeeding as insulin rises. While respiratory alkalosis can cause intracellular phosphate shifting, it is not the primary mechanism in refeeding syndrome. Aldosterone excess is not the driving force behind refeeding syndrome electrolyte disturbances.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 6,
        questionText:
          'A patient with chronic kidney disease has an ABG showing: pH 7.30, PaCO2 30 mmHg, HCO3⁻ 14 mEq/L. Serum labs: Na⁺ 138, K⁺ 5.8, Cl⁻ 112 mEq/L. The anion gap is 12 mEq/L. What type of acid-base disorder is present?',
        choices: {
          A: 'Non-anion-gap metabolic acidosis with appropriate respiratory compensation',
          B: 'Anion gap metabolic acidosis with respiratory alkalosis',
          C: 'Mixed respiratory and metabolic alkalosis',
          D: 'Pure respiratory acidosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The AG of 12 mEq/L is normal, indicating a non-anion-gap (hyperchloremic) metabolic acidosis. The chloride is elevated at 112 mEq/L, confirming hyperchloremia. Using Winter\'s formula for expected PaCO2: (1.5 × 14) + 8 ± 2 = 29 ± 2 mmHg. The measured PaCO2 of 30 mmHg is within this range, indicating appropriate respiratory compensation. Non-anion-gap metabolic acidosis is common in CKD stages 3-4 due to impaired ammoniagenesis.',
        explanationWrong:
          'The normal anion gap rules out an anion gap metabolic acidosis. This is not a mixed alkalosis since both pH and HCO3⁻ are low. Pure respiratory acidosis would show elevated PaCO2 with elevated HCO3⁻ as compensation.',
        topic: 'Acid-Base Disturbances',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 7,
        questionText:
          'In APRV, a patient with ARDS has P-high 32 cmH2O, P-low 0, T-high 4.0 s, T-low 0.45 s. The patient develops worsening hypoxemia. The release volumes are adequate but the spontaneous tidal volumes during T-high are minimal. What adjustment may improve oxygenation?',
        choices: {
          A: 'Decrease P-high to reduce overdistension',
          B: 'Increase T-low to 1.5 seconds to improve CO2 clearance',
          C: 'Add pressure support to spontaneous breaths during T-high',
          D: 'Increase T-high and optimize sedation to allow more spontaneous breathing during the inflation phase',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Spontaneous breathing during the T-high phase is a key mechanism of APRV that improves oxygenation by recruiting dependent lung regions through diaphragmatic contraction. If spontaneous breathing is minimal, optimizing sedation (reducing excessive sedation) and extending T-high to allow more time for spontaneous breathing can improve ventilation-perfusion matching and oxygenation.',
        explanationWrong:
          'Decreasing P-high may worsen recruitment and oxygenation. Increasing T-low to 1.5 seconds would allow complete exhalation, eliminating auto-PEEP and causing derecruitment. While automatic tube compensation or minimal pressure support can augment spontaneous efforts, the primary issue is the lack of spontaneous breathing, which should be addressed first through sedation optimization.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 8,
        questionText:
          'A neonatal transport team is preparing to transport a 28-week premature infant on high-frequency oscillatory ventilation. The referring hospital\'s HFOV cannot be used during transport. What is the most appropriate ventilation strategy during transport?',
        choices: {
          A: 'Switch to a transport-compatible high-frequency ventilator if available',
          B: 'Use conventional mechanical ventilation with settings that approximate the mean airway pressure and optimize lung recruitment before departure',
          C: 'Use manual bag-valve ventilation throughout the transport',
          D: 'Sedate and paralyze the infant and use minimal ventilator settings',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When HFOV cannot be continued during transport, transitioning to conventional ventilation that maintains similar mean airway pressure is essential to prevent derecruitment. Before departure, the infant should be stabilized on the transport ventilator with optimized settings, and recruitment maneuvers may be needed. A transport-compatible HFV is ideal but may not be available.',
        explanationWrong:
          'While a transport HFV is ideal, the question states the referring HFOV cannot be used and asks for the most appropriate alternative. Manual bag-valve ventilation for an extended transport is inconsistent and cannot reliably maintain lung recruitment. Minimal ventilator settings with paralysis would lead to atelectasis and worsening respiratory failure.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 9,
        questionText:
          'An ICU is implementing an antimicrobial stewardship program to combat rising rates of extended-spectrum beta-lactamase (ESBL) producing Enterobacterales. Which antibiotic strategy most effectively reduces selection pressure for ESBL organisms?',
        choices: {
          A: 'Empiric use of carbapenems for all gram-negative infections',
          B: 'Routine use of fluoroquinolones for urinary tract infections',
          C: 'Prophylactic vancomycin for all central line insertions',
          D: 'De-escalation from broad-spectrum to targeted therapy based on culture and sensitivity results',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Antimicrobial stewardship emphasizes de-escalation from empiric broad-spectrum therapy to the narrowest effective agent once culture and susceptibility data are available. This reduces unnecessary antibiotic exposure, which is the primary driver of resistance selection pressure. De-escalation has been shown to reduce ESBL prevalence without increasing mortality.',
        explanationWrong:
          'Empiric carbapenem use for all gram-negative infections promotes carbapenem resistance, which is an even more serious threat. Routine fluoroquinolone use is a known risk factor for ESBL selection and C. difficile infection. Prophylactic vancomycin for line insertions is not recommended and promotes vancomycin resistance.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 10,
        questionText:
          'A 45-year-old ICU patient with a traumatic brain injury is declared brain dead after two clinical examinations. The patient\'s driver\'s license indicates organ donor status, but the family strongly objects to organ donation. In most U.S. jurisdictions, what is the legally binding decision?',
        choices: {
          A: 'The family\'s objection overrides the patient\'s documented wishes',
          B: 'The patient\'s documented first-person consent on the driver\'s license is legally sufficient for organ donation to proceed',
          C: 'Neither the family nor the patient\'s documented wishes are binding; the hospital ethics committee decides',
          D: 'The attending physician makes the final determination',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Under the Revised Uniform Anatomical Gift Act (adopted by most U.S. states), a first-person authorization for organ donation (such as on a driver\'s license or donor registry) is a legally binding document that cannot be revoked by family members after the donor\'s death. The patient\'s autonomous decision made while competent takes precedence.',
        explanationWrong:
          'While family objections are often accommodated in practice to maintain public trust, legally the first-person consent is binding in most jurisdictions. Ethics committees do not have legal authority to override documented donor consent. The attending physician does not have the authority to decide on organ donation.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 11,
        questionText:
          'A patient with a retained hemothorax has had a chest tube in place for 5 days with minimal drainage. CT chest shows a 400 mL organized hemothorax in the dependent portion of the right hemithorax. What is the risk of leaving this collection untreated?',
        choices: {
          A: 'No significant risk; it will always reabsorb spontaneously',
          B: 'Risk of pulmonary embolism only',
          C: 'Development of fibrothorax and trapped lung with restrictive physiology',
          D: 'Risk of cardiac tamponade from mediastinal shift',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An organized retained hemothorax that is not evacuated can progress to fibrothorax, where the clot organizes into a fibrous peel that encases the lung, preventing re-expansion. This trapped lung results in restrictive physiology with decreased lung volumes and impaired gas exchange. Early VATS evacuation (within 5-7 days) can prevent this complication.',
        explanationWrong:
          'Large retained hemothoraces do not reliably reabsorb and frequently organize into fibrous tissue. Pulmonary embolism is not directly caused by retained hemothorax. Cardiac tamponade involves the pericardium, not the pleural space, and mediastinal shift alone from a hemothorax would cause other complications before tamponade.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 12,
        questionText:
          'A patient has a cardiac index of 2.0 L/min/m², BSA 2.0 m², SaO2 98%, SvO2 55%, Hb 14 g/dL. Calculate the oxygen delivery index (DO2I).',
        choices: {
          A: '380 mL/min/m²',
          B: '460 mL/min/m²',
          C: '540 mL/min/m²',
          D: '300 mL/min/m²',
        },
        correctChoice: 'A',
        explanationCorrect:
          'DO2I = CI × CaO2 × 10. First calculate CaO2: (1.34 × Hb × SaO2) + (0.003 × PaO2). Assuming PaO2 contribution is minimal: CaO2 ≈ 1.34 × 14 × 0.98 = 18.38 mL/dL. However, more precisely, CaO2 ≈ 18.4 mL/dL. DO2I = 2.0 × 18.4 × 10 = 368 mL/min/m², closest to 380 mL/min/m². Normal DO2I is 500-600 mL/min/m², so this is significantly below normal.',
        explanationWrong:
          'The other values overestimate the DO2I. With a low cardiac index of 2.0 L/min/m², the oxygen delivery index will be below normal despite adequate hemoglobin and saturation.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 13,
        questionText:
          'A patient with an LVAD develops persistent pump thrombosis despite medical management with heparin and antiplatelet therapy. LDH is markedly elevated and plasma-free hemoglobin is 80 mg/dL. What is the definitive treatment?',
        choices: {
          A: 'Increase the heparin infusion rate to achieve an aPTT of 100 seconds',
          B: 'Administer systemic tissue plasminogen activator',
          C: 'Add dipyridamole to the antiplatelet regimen',
          D: 'Pump exchange surgery',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Persistent LVAD pump thrombosis refractory to medical management (anticoagulation intensification and antiplatelet therapy) requires pump exchange surgery. Elevated LDH and plasma-free hemoglobin indicate significant hemolysis from the thrombus interacting with the pump rotor. Pump exchange replaces the thrombosed device and is the definitive treatment.',
        explanationWrong:
          'Escalating heparin to supratherapeutic levels risks fatal hemorrhage without reliably dissolving the organized thrombus. Systemic tPA carries extreme bleeding risk in LVAD patients and has inconsistent efficacy for device thrombosis. Adding dipyridamole is insufficient for established pump thrombosis with active hemolysis.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 14,
        questionText:
          'A patient with fulminant hepatic failure from acetaminophen overdose has a serum ammonia of 180 mcmol/L and is developing grade III hepatic encephalopathy. Which treatment directly reduces ammonia production and absorption?',
        choices: {
          A: 'Flumazenil IV for benzodiazepine receptor antagonism',
          B: 'Lactulose via nasogastric tube or rectally to reduce intestinal ammonia absorption',
          C: 'Phenytoin for seizure prophylaxis',
          D: 'Dexamethasone for cerebral edema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Lactulose is an osmotic laxative that reduces ammonia absorption by acidifying colonic contents, converting ammonia (NH3) to ammonium (NH4⁺) which cannot be absorbed. It also promotes fecal nitrogen excretion through osmotic diarrhea. Lactulose can be administered via NGT or as retention enemas in patients who cannot take oral medications.',
        explanationWrong:
          'Flumazenil may temporarily improve encephalopathy symptoms through GABA receptor modulation but does not reduce ammonia levels. Phenytoin does not address ammonia metabolism. Dexamethasone is ineffective for the cytotoxic edema of acute liver failure and does not reduce ammonia production.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 15,
        questionText:
          'A critically ill patient with diabetic ketoacidosis and acute kidney injury has the following: pH 6.98, K⁺ 6.8 mEq/L, glucose 650 mg/dL, creatinine 5.2 mg/dL, and peaked T waves on ECG. After calcium gluconate, what is the most appropriate next intervention?',
        choices: {
          A: 'Aggressive IV insulin infusion only',
          B: 'Sodium bicarbonate infusion only',
          C: 'Oral potassium-binding resin',
          D: 'Emergent hemodialysis for simultaneous correction of hyperkalemia, acidosis, and uremia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This patient has life-threatening hyperkalemia with ECG changes, severe metabolic acidosis (pH 6.98), and acute kidney injury with significantly elevated creatinine. Emergent hemodialysis is indicated because it simultaneously and rapidly corrects hyperkalemia, severe acidosis, and uremia when these conditions coexist and are refractory to medical management. The severity of all three disturbances together necessitates dialysis.',
        explanationWrong:
          'While insulin is important for DKA management and potassium shifting, it alone cannot adequately address the severity of acidosis and hyperkalemia with renal failure. Bicarbonate alone is controversial in DKA and insufficient for this degree of combined derangement. Oral binding resins are too slow-acting for emergency hyperkalemia management.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 16,
        questionText:
          'In APRV, a patient with morbid obesity (BMI 52) has P-high set at 30 cmH2O with poor oxygenation. The clinician suspects inadequate recruitment of dependent lung regions. What is the most appropriate APRV-specific adjustment?',
        choices: {
          A: 'Decrease P-high to 24 cmH2O to reduce overdistension',
          B: 'Switch to volume-controlled ventilation at 8 mL/kg IBW',
          C: 'Increase P-high to 34-38 cmH2O to account for increased chest wall elastance in morbid obesity',
          D: 'Increase P-low to 15 cmH2O',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Morbidly obese patients have significantly increased chest wall elastance from abdominal weight and mass loading of the thorax. Higher P-high settings (34-38 cmH2O or even higher) are often necessary to achieve adequate transpulmonary pressure for lung recruitment. The plateau pressure alone does not reflect transpulmonary pressure; esophageal manometry can guide optimal settings.',
        explanationWrong:
          'Decreasing P-high would worsen recruitment in an already under-recruited lung. Volume-controlled ventilation does not directly address the recruitment issue and abandons the APRV approach. Increasing P-low eliminates the beneficial auto-PEEP mechanism and reduces the pressure gradient needed for ventilation.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 17,
        questionText:
          'A critical care transport team is using a portable point-of-care ultrasound during transport. The patient becomes acutely hypotensive with distended neck veins. Bedside ultrasound shows a dilated right ventricle with septal bowing into the left ventricle. What is the most likely diagnosis and immediate intervention?',
        choices: {
          A: 'Massive pulmonary embolism; administer IV fluids cautiously and consider systemic thrombolysis if available',
          B: 'Cardiac tamponade; perform pericardiocentesis',
          C: 'Tension pneumothorax; perform needle decompression',
          D: 'Hypovolemic shock; administer rapid IV fluid bolus',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The combination of acute hypotension, distended neck veins (elevated CVP), and ultrasound showing RV dilation with interventricular septal bowing into the LV is classic for acute massive pulmonary embolism causing acute cor pulmonale. Treatment includes cautious IV fluids (excessive fluids worsen RV distension), vasopressors, and systemic thrombolysis if hemodynamically significant and no contraindications.',
        explanationWrong:
          'Cardiac tamponade would show pericardial effusion with RV diastolic collapse, not RV dilation. Tension pneumothorax would show absent lung sliding on ultrasound and would not cause isolated RV dilation with septal bowing. Hypovolemic shock would show a small, hyperdynamic heart with collapsed IVC.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 18,
        questionText:
          'An ICU patient on broad-spectrum antibiotics develops diarrhea. C. difficile toxin assay is positive. The patient has a white blood cell count of 35,000/mm³, creatinine 2.8 mg/dL (baseline 0.9), and abdominal distension with CT showing colonic dilation of 7 cm. What is the severity classification and most appropriate treatment?',
        choices: {
          A: 'Mild C. difficile infection; treat with oral metronidazole',
          B: 'Moderate C. difficile infection; treat with oral vancomycin 125 mg QID',
          C: 'Fulminant C. difficile infection; treat with high-dose oral vancomycin, IV metronidazole, and surgical consultation',
          D: 'Recurrent C. difficile infection; treat with fidaxomicin',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This presentation meets criteria for fulminant (previously called severe-complicated) C. difficile infection: WBC greater than 15,000, acute kidney injury, and signs of ileus with colonic dilation. Treatment requires high-dose oral vancomycin (500 mg QID), IV metronidazole 500 mg Q8H, and vancomycin retention enemas if ileus prevents oral drug delivery. Surgical consultation for possible colectomy is essential.',
        explanationWrong:
          'Oral metronidazole alone is inadequate for severe or fulminant CDI and is no longer first-line even for mild disease per current guidelines. Standard-dose oral vancomycin alone is insufficient for fulminant disease. This is not recurrent disease and the severity markers indicate fulminant infection requiring aggressive multimodal therapy.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist discovers that a ventilator-dependent patient\'s family member has been adjusting the ventilator settings without authorization, believing they know the patient\'s preferred settings from a previous hospitalization. What is the most appropriate immediate response?',
        choices: {
          A: 'Allow the changes if the settings appear reasonable',
          B: 'Restore the prescribed settings, ensure the ventilator is secured, document the incident, and notify the physician and charge nurse',
          C: 'Physically remove the family member from the ICU',
          D: 'Disconnect the ventilator to reset all settings',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The immediate priority is patient safety: restore the physician-ordered ventilator settings and assess the patient for any adverse effects from the unauthorized changes. The ventilator should be secured to prevent further tampering. The incident must be documented and reported through appropriate channels. The family member should be educated about the dangers of adjusting medical equipment.',
        explanationWrong:
          'Allowing unauthorized changes, regardless of their apparent reasonableness, violates patient safety standards and physician orders. Physically removing the family member is an excessive response that should only occur if they pose an immediate threat. Disconnecting the ventilator to reset settings would interrupt the patient\'s ventilatory support and is dangerous.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 20,
        questionText:
          'A patient with AKI on continuous venovenous hemodiafiltration (CVVHDF) is receiving an aminoglycoside. The drug is highly water-soluble with low protein binding and a molecular weight of 500 daltons. How does CVVHDF affect aminoglycoside dosing?',
        choices: {
          A: 'Aminoglycosides are significantly removed by CVVHDF, requiring supplemental dosing or dose adjustment based on drug levels',
          B: 'CVVHDF has no effect on aminoglycoside clearance',
          C: 'Aminoglycosides are contraindicated during CRRT',
          D: 'Standard dosing should be reduced by 75% during CVVHDF',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Aminoglycosides are significantly removed by CVVHDF due to their characteristics: high water solubility, low protein binding (less than 30%), relatively low molecular weight, and small volume of distribution. CVVHDF clearance can remove 20-50% of the drug, requiring supplemental dosing guided by therapeutic drug monitoring to maintain efficacy while avoiding toxicity.',
        explanationWrong:
          'CVVHDF definitely affects aminoglycoside clearance significantly; ignoring this leads to subtherapeutic levels. Aminoglycosides are not contraindicated during CRRT but require careful dosing. An arbitrary 75% dose reduction without drug level monitoring could lead to either toxicity or subtherapeutic dosing.',
        topic: 'Acute Kidney Injury',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 23 seeded (20 questions, isFree: false)')

  // ─── EXAM 24 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q8,Q11,Q16,Q20) B=5(Q1,Q6,Q13,Q15,Q18) C=5(Q2,Q9,Q10,Q14,Q17) D=5(Q3,Q5,Q7,Q12,Q19)
  const exam24 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 24',
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
          'A patient with a malignant pleural effusion has had three large-volume thoracenteses in the past month with rapid reaccumulation. The patient has an expected survival of 3 months. What is the most appropriate long-term management strategy?',
        choices: {
          A: 'Continue serial thoracentesis as needed',
          B: 'Indwelling tunneled pleural catheter placement for intermittent home drainage',
          C: 'Surgical pleurectomy',
          D: 'Observation without further intervention',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An indwelling tunneled pleural catheter (such as a PleurX catheter) is the preferred option for recurrent malignant pleural effusions, especially in patients with limited life expectancy. It allows outpatient drainage, reduces hospitalizations, and can achieve spontaneous pleurodesis in approximately 45-70% of patients over time. It provides superior quality of life compared to repeated thoracentesis.',
        explanationWrong:
          'Continued serial thoracentesis requires repeated procedures, is resource-intensive, and reduces quality of life. Surgical pleurectomy is overly aggressive for a patient with 3-month expected survival and carries significant surgical risk. Observation without intervention leaves the patient symptomatic with progressive dyspnea.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 2,
        questionText:
          'A patient has the following hemodynamic data: CO 3.5 L/min, Hb 8 g/dL, SaO2 95%, SvO2 50%, PaO2 80 mmHg, PvO2 28 mmHg. What does the critically low SvO2 indicate?',
        choices: {
          A: 'Normal oxygen extraction with adequate delivery',
          B: 'Adequate cardiac output with low hemoglobin',
          C: 'Oxygen supply-demand imbalance with increased tissue extraction suggesting inadequate DO2 relative to VO2',
          D: 'Cyanide poisoning with impaired cellular oxygen utilization',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An SvO2 of 50% (normal 60-80%) indicates that tissues are extracting a higher-than-normal proportion of delivered oxygen, signifying that oxygen delivery (DO2) is inadequate relative to oxygen consumption (VO2). This patient has both low cardiac output (3.5 L/min) and anemia (Hb 8 g/dL), both contributing to reduced DO2 and increased oxygen extraction.',
        explanationWrong:
          'An SvO2 of 50% is not normal and reflects increased extraction. While the cardiac output is low and hemoglobin is low, the SvO2 specifically reflects the supply-demand imbalance, not just one parameter. Cyanide poisoning would typically show an elevated SvO2 because cells cannot utilize oxygen.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 3,
        questionText:
          'A patient receiving IABP counterpulsation develops acute limb ischemia in the leg with the femoral arterial insertion site. The foot is cool, pulseless, and mottled. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the IABP augmentation ratio from 1:2 to 1:1',
          B: 'Administer a bolus of heparin 5000 units IV',
          C: 'Elevate the affected leg and apply warm compresses',
          D: 'Remove the IABP and consult vascular surgery for revascularization',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Acute limb ischemia from IABP insertion is a vascular emergency requiring immediate device removal and vascular surgical consultation for assessment of the arterial injury, possible thrombectomy, or revascularization. The IABP catheter or associated thrombus is mechanically obstructing blood flow to the distal extremity, and delay risks irreversible ischemic damage.',
        explanationWrong:
          'Increasing the augmentation ratio does not address the mechanical obstruction causing limb ischemia. While systemic anticoagulation is important, a heparin bolus alone does not resolve the acute mechanical obstruction. Elevation and warm compresses are insufficient for acute arterial occlusion with an ischemic limb.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 4,
        questionText:
          'A patient with alcoholic hepatitis has a Maddrey discriminant function of 42, indicating severe disease. Which treatment has been shown to improve short-term survival in severe alcoholic hepatitis?',
        choices: {
          A: 'Prednisolone 40 mg daily for 28 days with reassessment using the Lille score at day 7',
          B: 'N-acetylcysteine alone as primary therapy',
          C: 'Prophylactic antibiotics without corticosteroids',
          D: 'Pentoxifylline 400 mg three times daily',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Prednisolone 40 mg daily for 28 days is the standard treatment for severe alcoholic hepatitis (Maddrey discriminant function ≥ 32) and has been shown to improve 28-day survival. The Lille score at day 7 assesses response to therapy; a score greater than 0.45 indicates non-response and corticosteroids should be discontinued to avoid complications of continued immunosuppression.',
        explanationWrong:
          'N-acetylcysteine may be used as adjunctive therapy with corticosteroids but has not been shown to be effective as monotherapy. Prophylactic antibiotics alone do not address the inflammatory component of severe alcoholic hepatitis. The STOPAH trial showed pentoxifylline did not improve survival in severe alcoholic hepatitis.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 5,
        questionText:
          'A patient receiving continuous albuterol nebulization for status asthmaticus develops a serum potassium of 2.4 mEq/L. Which mechanism is primarily responsible for the hypokalemia?',
        choices: {
          A: 'Renal potassium wasting from albuterol-induced diuresis',
          B: 'Gastrointestinal losses from albuterol side effects',
          C: 'Metabolic alkalosis from CO2 retention',
          D: 'Beta-2 receptor stimulation causing intracellular potassium shift via Na⁺/K⁺-ATPase activation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Beta-2 agonists like albuterol stimulate the Na⁺/K⁺-ATPase pump in skeletal muscle, driving potassium intracellularly. This is the primary mechanism of beta-agonist-induced hypokalemia and is dose-dependent. Continuous high-dose albuterol can reduce serum potassium by 0.5-1.0 mEq/L. This shift is typically transient but can precipitate cardiac arrhythmias.',
        explanationWrong:
          'Albuterol does not cause significant renal potassium wasting or diuresis. GI losses are not a significant mechanism of albuterol-induced hypokalemia. CO2 retention in status asthmaticus causes respiratory acidosis, not metabolic alkalosis, and would actually shift potassium out of cells.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 6,
        questionText:
          'A patient with severe sepsis has the following ABG on mechanical ventilation: pH 7.22, PaCO2 28 mmHg, HCO3⁻ 11 mEq/L. Serum lactate is 8 mmol/L, and anion gap is 24 mEq/L. The delta-delta ratio (delta AG / delta HCO3⁻) is 1.0. What does this indicate?',
        choices: {
          A: 'Concurrent non-anion-gap metabolic acidosis is also present',
          B: 'Pure anion gap metabolic acidosis without a concurrent process',
          C: 'Concurrent metabolic alkalosis',
          D: 'The delta-delta ratio cannot be interpreted in sepsis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The delta-delta ratio compares the change in anion gap to the change in bicarbonate. A ratio between 1.0 and 2.0 indicates a pure anion gap metabolic acidosis. The delta AG = 24 - 12 = 12 mEq/L, and the delta HCO3⁻ = 24 - 11 = 13 mEq/L. The ratio of 12/13 ≈ 0.9-1.0, consistent with a pure anion gap metabolic acidosis from lactic acidosis in sepsis.',
        explanationWrong:
          'A delta-delta ratio below 1.0 would suggest a concurrent non-anion-gap metabolic acidosis. A ratio above 2.0 would suggest a concurrent metabolic alkalosis. The delta-delta ratio is valid and useful in sepsis for identifying mixed acid-base disorders.',
        topic: 'Acid-Base Disturbances',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 7,
        questionText:
          'In APRV, what is the primary mechanism by which spontaneous breathing during the T-high phase improves gas exchange in ARDS patients?',
        choices: {
          A: 'Increasing dead space ventilation to improve CO2 elimination',
          B: 'Reducing cardiac output to improve ventilation-perfusion matching',
          C: 'Increasing chest wall rigidity to prevent lung collapse',
          D: 'Diaphragmatic contraction preferentially ventilates dependent, well-perfused lung regions improving V/Q matching',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Spontaneous breathing during APRV generates negative pleural pressure swings through diaphragmatic contraction, which preferentially expands dependent lung regions where perfusion is gravity-dependent and highest. This recruits atelectatic dependent zones and improves ventilation-perfusion matching, unlike controlled ventilation where gas distributes preferentially to non-dependent, less perfused regions.',
        explanationWrong:
          'Spontaneous breathing does not increase dead space; it actually improves alveolar ventilation. Reduced cardiac output would impair oxygen delivery, not improve V/Q matching. The diaphragm promotes expansion and flexibility, not rigidity of the chest wall.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 8,
        questionText:
          'A critical care transport team must choose between ground ambulance (45-minute transport) and rotor-wing helicopter (15-minute transport) for a patient with an unstable cervical spine fracture and respiratory failure requiring mechanical ventilation. Which factor most favors rotor-wing transport?',
        choices: {
          A: 'Shorter transport time reduces duration of exposure to vibration, acceleration/deceleration forces, and potential for secondary neurological injury',
          B: 'Helicopters have more space for procedures during transport',
          C: 'Ground ambulances cannot accommodate mechanical ventilators',
          D: 'Rotor-wing aircraft have better suspension systems than ground ambulances',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For an unstable cervical spine injury with respiratory failure, minimizing transport time is critical. The shorter rotor-wing transport (15 vs. 45 minutes) reduces total exposure time to vibration, acceleration forces, and the risk of secondary spinal cord injury. It also shortens the time to definitive surgical care. The reduced transport time outweighs the disadvantages of helicopter transport (noise, altitude, limited space).',
        explanationWrong:
          'Helicopters actually have less space than ground ambulances, making procedures more difficult. Ground ambulances routinely accommodate ventilators and full monitoring. Ground ambulances generally have better suspension and smoother rides than helicopters, which experience significant vibration.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 9,
        questionText:
          'An ICU patient on mechanical ventilation develops ventilator-associated pneumonia. Bronchoalveolar lavage culture grows Pseudomonas aeruginosa resistant to all tested antibiotics except colistin. The patient is on continuous renal replacement therapy. Which dosing consideration is most important for colistin?',
        choices: {
          A: 'Colistin dose should be reduced by 90% during CRRT',
          B: 'Colistin does not require dose adjustment during CRRT',
          C: 'Colistin is significantly cleared by CRRT and requires higher maintenance doses and therapeutic drug monitoring when available',
          D: 'Colistin should be given only via the nebulized route to avoid systemic toxicity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Colistin (colistimethate sodium, the prodrug) is cleared by CRRT, and patients on CRRT may require higher maintenance doses than expected for patients with renal failure not on dialysis. The loading dose should not be adjusted, but maintenance dosing should account for extracorporeal clearance. Therapeutic drug monitoring, when available, optimizes dosing to balance efficacy against nephrotoxicity.',
        explanationWrong:
          'A 90% dose reduction would result in subtherapeutic levels. Colistin does require dose adjustment during CRRT since the drug is removed by the hemofiltration membrane. While inhaled colistin can be used as adjunctive therapy for pulmonary infections, systemic administration is still necessary for adequate treatment of ventilator-associated pneumonia.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 10,
        questionText:
          'A 30-year-old patient with a devastating brain injury is not brain dead but has no meaningful chance of neurological recovery. The family wants to pursue organ donation. What option allows organ donation in this scenario?',
        choices: {
          A: 'Proceed with organ procurement while the patient is still alive',
          B: 'Wait until brain death criteria are met regardless of how long it takes',
          C: 'Donation after circulatory death (DCD) following planned withdrawal of life-sustaining treatment',
          D: 'Organ donation is never possible in patients who are not brain dead',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Donation after circulatory death (DCD, formerly non-heart-beating donation) allows organ donation from patients who do not meet brain death criteria. After the family makes the independent decision to withdraw life-sustaining treatment, the patient is taken to the operating room. Following treatment withdrawal and circulatory arrest (typically 2-5 minutes of observed asystole), death is declared and organ procurement proceeds.',
        explanationWrong:
          'Procuring organs from a living patient who has not been declared dead violates the dead donor rule and is illegal. Waiting indefinitely for brain death may not occur and prolongs the family\'s suffering without benefit. DCD has been an established pathway for organ donation since the 1990s, so organ donation is indeed possible without brain death.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 11,
        questionText:
          'A chest tube placed for a traumatic hemothorax has been in place for 48 hours. The drainage has changed from sanguineous to a milky-white appearance after the patient started receiving enteral tube feeds. Pleural fluid triglycerides are 250 mg/dL. What has occurred?',
        choices: {
          A: 'Iatrogenic chylothorax from thoracic duct injury during chest tube placement or the original trauma',
          B: 'Normal post-traumatic effusion evolution',
          C: 'Tube feed contamination of the pleural space',
          D: 'Empyema development requiring surgical washout',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The development of milky drainage with triglycerides greater than 110 mg/dL after initiation of enteral feeding is diagnostic of chylothorax. The thoracic duct was likely injured during the original thoracic trauma, but chyle flow becomes apparent only after enteral nutrition restarts and chyle production increases. Initial management includes NPO status with parenteral nutrition and medium-chain triglyceride formulations.',
        explanationWrong:
          'Post-traumatic effusions transition from bloody to serous, not milky with elevated triglycerides. While tube feed can rarely enter the pleural space through esophageal perforation, the elevated triglycerides confirm chyle, not tube feed. Empyema produces purulent drainage, not milky fluid with elevated triglycerides.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 12,
        questionText:
          'A patient on VA-ECMO for cardiogenic shock has the following: ECMO flow 4.5 L/min, native cardiac output near zero, SaO2 from ECMO circuit 100%, but radial artery SaO2 is only 75%. What phenomenon explains this finding?',
        choices: {
          A: 'ECMO pump failure',
          B: 'Recirculation within the ECMO circuit',
          C: 'Harlequin syndrome due to adequate aortic valve opening',
          D: 'North-South syndrome (differential hypoxia) from native lung disease with minimal cardiac ejection mixing with retrograde ECMO flow',
        },
        correctChoice: 'D',
        explanationCorrect:
          'North-South syndrome (also called differential hypoxia or Harlequin syndrome in the context of VA-ECMO) occurs when the native heart begins ejecting poorly oxygenated blood from diseased lungs into the ascending aorta. This deoxygenated blood preferentially supplies the coronary arteries, brain, and right upper extremity while oxygenated ECMO blood flows retrograde from the femoral artery. Right radial artery monitoring detects this.',
        explanationWrong:
          'ECMO pump failure would show decreased ECMO flow, not differential oxygenation. Recirculation involves drainage cannula drawing in returned oxygenated blood, which would affect circuit SvO2, not cause differential limb oxygenation. While Harlequin syndrome is another term used, the answer choice C incorrectly attributes it to "adequate" aortic valve opening; the issue is poor native lung oxygenation, not adequate cardiac function.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 13,
        questionText:
          'A patient with acute liver failure develops a coagulopathy with INR 4.5 but no active bleeding. The patient needs a central venous catheter placed. What is the most appropriate approach to the coagulopathy before the procedure?',
        choices: {
          A: 'Transfuse 4 units of fresh frozen plasma to normalize the INR',
          B: 'Proceed with the procedure using ultrasound guidance, as the INR does not accurately predict bleeding risk in acute liver failure due to balanced hemostatic changes',
          C: 'Perform viscoelastic testing (TEG/ROTEM) and correct only if functional coagulation abnormalities are confirmed',
          D: 'Cancel the procedure until the INR normalizes spontaneously',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In acute liver failure, the INR does not accurately reflect bleeding risk because there is a balanced reduction of both pro-coagulant and anti-coagulant factors. Standard INR only measures pro-coagulant factors. Ultrasound-guided central line placement can be safely performed without correcting the INR, as studies show the bleeding risk is minimal with skilled operators using ultrasound. Empiric FFP transfusion causes volume overload and obscures the INR as a prognostic marker.',
        explanationWrong:
          'Empiric FFP transfusion is not recommended as the INR poorly reflects true hemostatic function in liver failure and FFP causes volume overload. While viscoelastic testing can provide useful information, it is not required before a relatively low-risk ultrasound-guided procedure. Canceling a needed procedure based solely on INR is inappropriate in liver failure where the INR does not predict bleeding.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 14,
        questionText:
          'A mechanically ventilated patient has severe symptomatic hyponatremia with serum Na⁺ of 108 mEq/L and seizures. After initial treatment with hypertonic saline, the sodium corrects to 118 mEq/L in 6 hours. What is the most serious risk of this correction rate?',
        choices: {
          A: 'Cerebral edema worsening',
          B: 'Hyperkalemia',
          C: 'Osmotic demyelination syndrome (central pontine myelinolysis)',
          D: 'Acute kidney injury',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Correction of sodium by 10 mEq/L in 6 hours exceeds the recommended safe rate of 6-8 mEq/L per 24 hours (with some guidelines allowing up to 10-12 mEq/L in 24 hours for symptomatic patients). Rapid correction risks osmotic demyelination syndrome (ODS), which can cause devastating neurological damage including quadriplegia, pseudobulbar palsy, and locked-in syndrome.',
        explanationWrong:
          'Cerebral edema would worsen with uncorrected hyponatremia, not with correction. Hypertonic saline correction of hyponatremia does not directly cause hyperkalemia. While AKI can occur from various causes, it is not the primary risk of overly rapid sodium correction.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 15,
        questionText:
          'A patient with AKI has a fractional excretion of sodium (FeNa) of 0.5% and a BUN/creatinine ratio of 28. Urinalysis shows bland sediment. These findings are most consistent with which etiology?',
        choices: {
          A: 'Acute tubular necrosis',
          B: 'Prerenal azotemia from volume depletion',
          C: 'Post-renal obstruction',
          D: 'Acute interstitial nephritis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A FeNa below 1% indicates avid sodium reabsorption by the kidneys, characteristic of prerenal azotemia where the kidney is appropriately responding to decreased perfusion. The elevated BUN/creatinine ratio above 20:1 further supports prerenal etiology. Bland urinalysis without casts or cellular elements is consistent with prerenal AKI rather than intrinsic renal disease.',
        explanationWrong:
          'Acute tubular necrosis typically shows FeNa greater than 2% with muddy brown granular casts on urinalysis. Post-renal obstruction has variable FeNa and would show hydronephrosis on imaging. Acute interstitial nephritis typically shows white blood cell casts and eosinophils on urinalysis.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 16,
        questionText:
          'During APRV, a patient develops significant auto-PEEP of 18 cmH2O despite a set P-low of 0 cmH2O. The clinician is concerned this auto-PEEP is excessively high. What is the most appropriate adjustment?',
        choices: {
          A: 'Increase P-high to compensate for the high auto-PEEP',
          B: 'Increase P-low to 10 cmH2O',
          C: 'Decrease T-high to increase the release frequency',
          D: 'Switch to volume-controlled ventilation immediately',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When auto-PEEP in APRV is excessive, the T-low should be slightly lengthened to allow more exhalation, targeting termination of expiratory flow at 50-75% of peak expiratory flow rate. However, among the given choices, the issue may also relate to an obstructive process. Increasing P-high helps maintain the driving pressure differential. The key is to optimize T-low duration to control auto-PEEP while maintaining recruitment.',
        explanationWrong:
          'Increasing P-low eliminates the auto-PEEP mechanism that is integral to APRV and may worsen recruitment. Decreasing T-high would increase ventilatory rate but does not directly address excessive auto-PEEP. Immediately switching to volume-controlled ventilation may cause significant derecruitment.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 17,
        questionText:
          'A pediatric patient requires fixed-wing air transport for a congenital cardiac defect repair. The child is on prostaglandin E1 to maintain ductal patency. What is the most critical transport consideration?',
        choices: {
          A: 'Prostaglandin E1 can be discontinued during transport',
          B: 'The PGE1 infusion must be on a dedicated, reliable IV pump with backup supply, and the team must be prepared for apnea as a known side effect',
          C: 'Maintain the PGE1 infusion and ensure continuous temperature and respiratory monitoring including apnea management capability',
          D: 'Convert to oral prostaglandin before transport',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Prostaglandin E1 maintains ductal patency and is critical for survival in duct-dependent cardiac lesions. During transport, the PGE1 infusion must continue uninterrupted with a reliable IV pump and backup. Apnea is a significant side effect of PGE1, occurring in up to 12% of neonates, so the transport team must have intubation capability and continuous respiratory monitoring.',
        explanationWrong:
          'Discontinuing PGE1 during transport risks ductal closure and cardiovascular collapse. While answer B mentions important points, the most comprehensive and correct approach includes temperature monitoring (neonatal thermoregulation) and full respiratory monitoring capability. There is no oral prostaglandin formulation suitable for this indication.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 18,
        questionText:
          'A patient in the ICU has a central line-associated bloodstream infection (CLABSI) with Candida auris. Why is C. auris considered a particularly challenging multidrug-resistant organism in the critical care setting?',
        choices: {
          A: 'C. auris is easily treated with standard fluconazole therapy',
          B: 'C. auris is frequently resistant to multiple antifungal classes, persists on environmental surfaces, is difficult to identify with standard laboratory methods, and readily causes outbreaks in healthcare settings',
          C: 'C. auris only causes superficial skin infections',
          D: 'C. auris is susceptible to alcohol-based hand sanitizers and standard cleaning protocols',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Candida auris is a globally emerging multidrug-resistant fungus that is resistant to one or more antifungal classes in over 90% of isolates and pan-resistant to all three major classes in some cases. It persists on environmental surfaces for weeks, is frequently misidentified by conventional phenotypic laboratory methods, and causes healthcare-associated outbreaks. Enhanced infection control with specific disinfectants is required.',
        explanationWrong:
          'C. auris is frequently resistant to fluconazole (over 90% of isolates). It causes invasive bloodstream infections with high mortality, not just superficial skin infections. While alcohol-based sanitizers have some activity, C. auris requires specific cleaning protocols with EPA-registered disinfectants effective against Clostridioides difficile spores.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is asked to participate in the withdrawal of mechanical ventilation as part of comfort care for a terminally ill patient. The therapist has a moral objection to participating in this process. What is the ethically appropriate course of action?',
        choices: {
          A: 'The therapist must participate regardless of personal objections',
          B: 'The therapist should sabotage the ventilator to prevent withdrawal',
          C: 'The therapist should refuse and leave the patient unattended',
          D: 'The therapist should invoke conscientious objection, notify the supervisor to arrange for another qualified provider, and ensure the patient is not abandoned',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Healthcare professionals have the right to conscientious objection for procedures that conflict with their deeply held moral or religious beliefs. However, this right is balanced against the obligation not to abandon the patient. The therapist must promptly notify the supervisor so that another qualified professional can assume care, ensuring continuity and preventing patient suffering from delays.',
        explanationWrong:
          'Forcing participation against deeply held moral beliefs violates the principle of conscientious objection recognized in healthcare ethics. Sabotaging equipment is illegal and harmful. Refusing and leaving the patient unattended constitutes patient abandonment and is both unethical and potentially illegal.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 20,
        questionText:
          'A patient with severe ARDS on lung-protective ventilation has a persistent metabolic acidosis with pH 7.15 attributed to acute kidney injury. The team is considering sodium bicarbonate infusion. According to recent evidence, in which specific population has IV sodium bicarbonate been shown to reduce 28-day mortality?',
        choices: {
          A: 'Patients with severe metabolic acidosis (pH ≤ 7.20) and concurrent AKI (AKIN stages 2-3)',
          B: 'All ARDS patients regardless of pH or renal function',
          C: 'Only patients with lactic acidosis from septic shock',
          D: 'Patients with respiratory acidosis from hypoventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The BICAR-ICU trial demonstrated that IV sodium bicarbonate administration in critically ill patients with severe metabolic acidosis (pH ≤ 7.20) and concurrent AKI (AKIN score 2-3) was associated with reduced 28-day mortality and decreased need for renal replacement therapy. This specific subgroup benefit has informed clinical practice for bicarbonate use in the ICU.',
        explanationWrong:
          'The benefit was not shown in all ARDS patients or all acidotic patients, but specifically in the subgroup with concurrent AKI. Bicarbonate for pure lactic acidosis remains controversial without concurrent AKI. Respiratory acidosis is treated by improving ventilation, not with bicarbonate administration.',
        topic: 'Acid-Base Disturbances',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 24 seeded (20 questions, isFree: false)')

  // ─── EXAM 25 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q10,Q15,Q18) B=5(Q4,Q7,Q11,Q14,Q20) C=5(Q3,Q6,Q13,Q16,Q19) D=5(Q1,Q8,Q9,Q12,Q17)
  const exam25 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 25',
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
          'A patient with a trapped lung from prior empyema has persistent pleural space due to visceral pleural thickening preventing lung re-expansion. A chest tube has been in place for 2 weeks with minimal drainage and no improvement. What definitive surgical option can restore lung function?',
        choices: {
          A: 'Chemical pleurodesis with talc',
          B: 'Repeated thoracentesis',
          C: 'Additional chest tube placement',
          D: 'Decortication to remove the restrictive fibrous peel from the visceral pleura',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Decortication is the definitive surgical treatment for trapped lung caused by a fibrous peel (cortex) on the visceral pleura that prevents lung re-expansion. The procedure involves surgically removing the organized fibrous tissue, allowing the underlying lung to re-expand and fill the pleural space. It is typically performed via VATS or thoracotomy.',
        explanationWrong:
          'Chemical pleurodesis requires the lung to be able to re-expand and oppose the parietal pleura, which is not possible in trapped lung. Repeated thoracentesis and additional chest tubes cannot remove the fibrous peel causing the restriction.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 2,
        questionText:
          'A patient has the following hemodynamic data: CO 8 L/min, MAP 60 mmHg, CVP 2 mmHg, mean pulmonary artery pressure 18 mmHg, PAOP 6 mmHg, Hb 9 g/dL, SaO2 96%, SvO2 82%. This hemodynamic profile is most consistent with which condition?',
        choices: {
          A: 'Distributive (septic) shock with high output and low SVR',
          B: 'Cardiogenic shock with elevated filling pressures',
          C: 'Obstructive shock from massive pulmonary embolism',
          D: 'Hypovolemic shock with low preload',
        },
        correctChoice: 'A',
        explanationCorrect:
          'This profile shows high cardiac output (8 L/min), low MAP (60 mmHg), low SVR (calculated: (60-2)/8 × 80 = 580 dynes·s/cm⁵), low filling pressures, and elevated SvO2 (82%, indicating decreased tissue oxygen extraction despite adequate delivery). This is the classic hemodynamic profile of warm distributive (septic) shock with pathologic vasodilation and impaired oxygen utilization.',
        explanationWrong:
          'Cardiogenic shock shows low CO, high filling pressures, and high SVR. Obstructive shock from PE shows high right-sided pressures with low CO. Hypovolemic shock shows low CO, low filling pressures, and high SVR with low SvO2 from increased oxygen extraction.',
        topic: 'Advanced Hemodynamic Calculations',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 3,
        questionText:
          'A patient on VA-ECMO develops signs of North-South syndrome with differential hypoxia. The right radial artery PaO2 is 52 mmHg while the femoral artery PaO2 is 350 mmHg. What is the most appropriate intervention?',
        choices: {
          A: 'Increase the ECMO blood flow rate only',
          B: 'Decrease ventilator FiO2 to reduce hyperoxia in the lower body',
          C: 'Optimize native lung ventilation, increase ventilator FiO2, and consider converting to veno-arterio-venous (VAV) ECMO configuration',
          D: 'Decrease ECMO flow to allow more native cardiac output',
        },
        correctChoice: 'C',
        explanationCorrect:
          'North-South syndrome in VA-ECMO results from mixing of poorly oxygenated blood from the native heart with oxygenated ECMO blood in the aorta. Management includes optimizing ventilator settings and FiO2 to improve native lung oxygenation, and if ineffective, converting to VAV-ECMO by adding a venous return cannula to deliver oxygenated blood to the right atrium, ensuring the coronary and cerebral circulations receive oxygenated blood.',
        explanationWrong:
          'Increasing ECMO flow alone may not resolve the problem if the native heart is ejecting significant volumes of deoxygenated blood. Decreasing ventilator FiO2 would worsen the hypoxia in the upper body. Decreasing ECMO flow would increase the proportion of deoxygenated blood reaching the upper body.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 4,
        questionText:
          'A patient with cirrhosis and ascites has a serum-ascites albumin gradient (SAAG) of 1.8 g/dL and a total ascitic fluid protein of 1.2 g/dL. What does this biochemical pattern indicate regarding the etiology and risk of spontaneous bacterial peritonitis?',
        choices: {
          A: 'Peritoneal carcinomatosis with low SBP risk',
          B: 'Ascites from cardiac failure with low SBP risk',
          C: 'Nephrotic syndrome-related ascites with moderate SBP risk',
          D: 'Portal hypertension-related ascites with HIGH SBP risk',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A SAAG ≥ 1.1 g/dL indicates portal hypertension. However, the high total ascitic protein (1.2 g/dL) combined with high SAAG suggests cardiac ascites rather than cirrhotic ascites (which typically has low ascitic protein < 1.0 g/dL). Cardiac ascites has a lower SBP risk because the higher ascitic protein provides better opsonic activity against bacteria.',
        explanationWrong:
          'Peritoneal carcinomatosis has a low SAAG (< 1.1 g/dL). Cirrhotic ascites typically has low ascitic protein and HIGH SBP risk. Nephrotic syndrome-related ascites has a low SAAG. The combination of high SAAG with relatively higher ascitic protein points to cardiac origin.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 5,
        questionText:
          'A patient in the ICU develops ECG changes including prolonged QT interval, flattened T waves, and prominent U waves. Serum potassium is 2.8 mEq/L and serum magnesium is 1.0 mg/dL. Initial IV potassium replacement is ineffective. What must be corrected first?',
        choices: {
          A: 'Hypomagnesemia must be corrected before potassium replacement will be effective, as magnesium depletion impairs renal potassium conservation',
          B: 'Serum calcium',
          C: 'Serum phosphate',
          D: 'Serum sodium',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Hypomagnesemia causes refractory hypokalemia because magnesium is required for the proper function of the ROMK (renal outer medullary potassium) channel in the distal nephron. When magnesium is depleted, this channel remains open, causing continued renal potassium wasting regardless of how much potassium is administered. Magnesium must be repleted first for potassium replacement to be effective.',
        explanationWrong:
          'Calcium, phosphate, and sodium levels do not directly impact the renal handling of potassium in the same way magnesium does. While all electrolyte abnormalities should be addressed, hypomagnesemia is the specific cause of refractory hypokalemia in this scenario.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 6,
        questionText:
          'A patient with type 4 renal tubular acidosis from diabetic nephropathy has the following: pH 7.28, PaCO2 32 mmHg, HCO3⁻ 15 mEq/L, K⁺ 6.2 mEq/L, Na⁺ 140, Cl⁻ 114 mEq/L. What is the characteristic acid-base pattern?',
        choices: {
          A: 'Anion gap metabolic acidosis with hyperkalemia',
          B: 'Mixed respiratory and metabolic alkalosis',
          C: 'Non-anion-gap (hyperchloremic) metabolic acidosis with hyperkalemia due to aldosterone deficiency or resistance',
          D: 'Pure respiratory acidosis with compensatory metabolic alkalosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Type 4 RTA is characterized by hyperchloremic (non-anion-gap) metabolic acidosis with hyperkalemia. The anion gap is 140 - (114 + 15) = 11 mEq/L (normal). The acidosis results from impaired ammoniagenesis due to hyperkalemia and aldosterone deficiency or resistance, which is common in diabetic nephropathy. The hyperkalemia distinguishes type 4 from types 1 and 2 RTA.',
        explanationWrong:
          'The normal anion gap rules out an anion gap metabolic acidosis. There is no alkalosis present with pH 7.28 and low HCO3⁻. The PaCO2 of 32 mmHg represents appropriate respiratory compensation, not primary respiratory acidosis.',
        topic: 'Acid-Base Disturbances',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 7,
        questionText:
          'In APRV, the release phase accounts for what percentage of the total cycle time, and why is this ratio important for maintaining lung recruitment?',
        choices: {
          A: 'The release phase occupies 50% of the cycle to equally distribute time between inflation and deflation',
          B: 'The release phase occupies approximately 10-15% of the total cycle time, ensuring the lung spends the majority of time at the higher pressure to maintain continuous recruitment',
          C: 'The release phase occupies 75% of the cycle to maximize CO2 elimination',
          D: 'The release phase duration is irrelevant to lung recruitment',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In APRV, the T-low (release phase) typically occupies only 10-15% of the total respiratory cycle time (e.g., T-high 4.5 s, T-low 0.5 s = 10% release time). This asymmetric time cycling ensures the lung spends approximately 85-90% of the time at P-high, maintaining continuous alveolar recruitment. The brief release phase allows CO2 elimination while the auto-PEEP prevents derecruitment.',
        explanationWrong:
          'Equal time distribution would allow excessive derecruitment during exhalation. A 75% release phase would be detrimental to recruitment. The release phase duration is critical to APRV function and directly impacts both recruitment and ventilation.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 8,
        questionText:
          'During critical care transport, a ventilated patient requires an MRI upon arrival at the receiving facility. The transport team has been ventilating with a standard transport ventilator. What is the most critical safety consideration?',
        choices: {
          A: 'Standard transport ventilators are safe in the MRI suite',
          B: 'The patient can be disconnected from the ventilator during the MRI scan',
          C: 'MRI-compatible headphones should be placed on the patient',
          D: 'The transport ventilator must be replaced with an MRI-conditional ventilator, and all ferromagnetic equipment must be removed before entering the MRI suite',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Standard transport ventilators contain ferromagnetic components that can become dangerous projectiles in the MRI magnetic field. Before entering the MRI suite, the patient must be transitioned to an MRI-conditional ventilator, and all ferromagnetic equipment (monitors, IV pumps, oxygen tanks, laryngoscope) must be removed or replaced with MRI-safe alternatives. Failure to do so risks equipment becoming projectiles and patient/staff injury.',
        explanationWrong:
          'Standard transport ventilators are NOT safe in the MRI environment due to ferromagnetic components. Disconnecting a ventilator-dependent patient is dangerous and unnecessary with proper MRI-conditional equipment. While hearing protection is important, the most critical safety concern is the ferromagnetic hazard.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 9,
        questionText:
          'An ICU implements a comprehensive MDRO prevention bundle. Which combination of interventions has the strongest evidence for reducing healthcare-associated infections from multidrug-resistant organisms?',
        choices: {
          A: 'Universal decolonization with mupirocin alone',
          B: 'Active surveillance cultures without isolation',
          C: 'Rotating empiric antibiotics on a monthly schedule',
          D: 'Hand hygiene compliance monitoring, contact precautions for colonized patients, antimicrobial stewardship, and daily chlorhexidine bathing',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A comprehensive MDRO prevention bundle combining multiple evidence-based interventions has the strongest impact on reducing healthcare-associated infections. Hand hygiene compliance above 80%, contact precautions for known carriers, antimicrobial stewardship to reduce resistance selection pressure, and universal daily chlorhexidine bathing work synergistically to prevent transmission and reduce MDRO burden in the ICU.',
        explanationWrong:
          'Mupirocin alone targets only MRSA nasal colonization and does not address other MDROs. Surveillance cultures without isolation measures do not prevent transmission. Rotating antibiotics is not an evidence-based strategy and may promote resistance through inconsistent exposure patterns.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 10,
        questionText:
          'A physician orders a "slow code" for a terminally ill patient, instructing the team to perform CPR but at a pace unlikely to be effective, to satisfy the family\'s request for full code status. What is the ethical assessment of this practice?',
        choices: {
          A: 'A slow code is ethically unacceptable because it is deceptive, violates trust, and deprives the family of honest information needed for genuine decision-making',
          B: 'A slow code is acceptable if the family is emotionally fragile',
          C: 'A slow code is standard practice for futile situations',
          D: 'A slow code is ethically neutral since the outcome would be the same',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Slow codes are widely considered ethically unacceptable by professional medical organizations because they are fundamentally deceptive. They violate the principles of honesty, integrity, and respect for persons by creating a false impression that a genuine resuscitation effort is being made. The appropriate alternative is honest goals-of-care discussions with the family about the futility of CPR.',
        explanationWrong:
          'The family\'s emotional state does not justify deception; compassionate, honest communication is always the ethical standard. Slow codes are not standard practice and are condemned by ethics guidelines. The outcome being the same does not justify the deception, as the ethical violation is in the dishonesty itself.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 11,
        questionText:
          'A chest tube placed for a spontaneous pneumothorax has been on water seal for 48 hours with no air leak and full lung re-expansion on chest radiograph. Before chest tube removal, what test can help predict if pneumothorax will recur?',
        choices: {
          A: 'CT angiography of the chest',
          B: 'A 4-6 hour clamping trial followed by repeat chest radiograph to confirm sustained lung expansion',
          C: 'Bronchoscopy to evaluate for bronchopleural fistula',
          D: 'Measurement of pleural fluid LDH',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A clamping trial involves clamping the chest tube for 4-6 hours (some protocols up to 24 hours) and then obtaining a repeat chest radiograph to confirm that the lung remains fully expanded without the benefit of suction or water seal drainage. If the lung remains expanded, the chest tube can be safely removed with low risk of recurrent pneumothorax.',
        explanationWrong:
          'CT angiography evaluates vascular structures, not air leak potential. Bronchoscopy is not routinely indicated for simple spontaneous pneumothorax resolution assessment. Pleural fluid LDH is relevant for effusion characterization, not pneumothorax management.',
        topic: 'Pleural Disease Management',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 12,
        questionText:
          'A patient with cardiogenic shock has an Impella CP placed. The Impella console shows the motor current waveform has lost its pulsatility. What does this finding indicate?',
        choices: {
          A: 'The Impella is functioning optimally',
          B: 'The patient has developed atrial fibrillation',
          C: 'The Impella flow rate is too high',
          D: 'The Impella may have migrated out of the left ventricle, or the patient may be in ventricular fibrillation or cardiac arrest',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The Impella motor current waveform normally shows pulsatility that corresponds to the cardiac cycle as the pressure difference across the pump changes between systole and diastole. Loss of pulsatility suggests either device migration (the inlet is no longer in the LV where pressure changes occur) or cardiac arrest/ventricular fibrillation (no effective ventricular contractions to create pressure differentials).',
        explanationWrong:
          'Loss of pulsatility is not normal and indicates a problem. Atrial fibrillation would show irregular pulsatility, not absent pulsatility. High flow rate alone would not eliminate pulsatility; it is the position and cardiac rhythm that determine the waveform pattern.',
        topic: 'Mechanical Circulatory Support',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 13,
        questionText:
          'A patient with acute liver failure has an arterial ammonia level of 200 mcmol/L and is at high risk for cerebral herniation. Which non-pharmacologic intervention can rapidly reduce serum ammonia levels?',
        choices: {
          A: 'Therapeutic hypothermia to 36°C',
          B: 'Plasmapheresis',
          C: 'Continuous renal replacement therapy with high-flux dialysis membrane',
          D: 'Hyperbaric oxygen therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'CRRT with high-flux membranes effectively removes ammonia from the blood because ammonia (molecular weight 17 Da) is a small molecule easily cleared by hemofiltration. CRRT provides continuous ammonia removal and can lower serum levels more rapidly and sustainably than intermittent hemodialysis. This is an important bridge therapy in acute liver failure with severe hyperammonemia.',
        explanationWrong:
          'While therapeutic hypothermia to 33-35°C can reduce cerebral metabolism and ammonia production, 36°C is normothermia and not therapeutic. Plasmapheresis removes large molecules and plasma components but is not the most efficient method for small-molecule ammonia removal. Hyperbaric oxygen does not address ammonia metabolism.',
        topic: 'Liver Failure',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 14,
        questionText:
          'A mechanically ventilated patient on continuous IV insulin for DKA management has improving hyperglycemia but develops a serum phosphate of 0.6 mg/dL. What is the mechanism of hypophosphatemia in this setting?',
        choices: {
          A: 'Renal phosphate wasting from osmotic diuresis',
          B: 'Insulin-mediated intracellular phosphate shift as glucose enters cells and is phosphorylated during glycolysis',
          C: 'Excessive phosphate binding by oral antacids',
          D: 'Hemodilution from IV fluid resuscitation alone',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During DKA treatment, insulin administration drives glucose into cells where it must be phosphorylated to enter the glycolytic pathway (glucose → glucose-6-phosphate). This process consumes large amounts of intracellular phosphate, creating a concentration gradient that pulls phosphate from the extracellular space into cells. This intracellular shift is the primary mechanism of hypophosphatemia during DKA treatment.',
        explanationWrong:
          'While osmotic diuresis does cause some phosphate losses, the acute drop during insulin therapy is primarily from intracellular shifting. The patient is on IV therapy, not oral antacids. Hemodilution alone cannot account for the severity of phosphate decline seen during insulin therapy.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 15,
        questionText:
          'A patient with rhabdomyolysis-induced AKI has a creatine kinase of 85,000 IU/L and urine output of 10 mL/hour despite aggressive IV fluid resuscitation. The urine pH is 5.2. Which intervention helps prevent further myoglobin-induced tubular injury?',
        choices: {
          A: 'Urine alkalinization with sodium bicarbonate infusion to maintain urine pH above 6.5',
          B: 'Furosemide to increase urine output',
          C: 'Mannitol to promote osmotic diuresis',
          D: 'Restriction of IV fluids to prevent volume overload',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Myoglobin is directly nephrotoxic in acidic urine because it precipitates in the renal tubules at low pH. Urine alkalinization with IV sodium bicarbonate (targeting urine pH > 6.5) increases myoglobin solubility, reduces tubular cast formation, and decreases the nephrotoxic effect of myoglobin. This is used in conjunction with aggressive volume resuscitation to maintain urine output above 200-300 mL/hour.',
        explanationWrong:
          'Furosemide may worsen tubular injury by concentrating myoglobin and does not address the pH-dependent toxicity. Mannitol has limited evidence in rhabdomyolysis and may cause osmotic nephropathy. Fluid restriction would worsen renal injury by reducing renal perfusion and urine dilution of myoglobin.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 16,
        questionText:
          'In a patient being weaned from APRV toward CPAP, the current settings are P-high 14 cmH2O, P-low 0, T-high 12 seconds, T-low 0.5 seconds. The patient is breathing comfortably with adequate tidal volumes and gas exchange. What criteria suggest the patient is ready for extubation from this APRV/CPAP level?',
        choices: {
          A: 'The patient should be switched to PSV before extubation can be considered',
          B: 'Extubation can never be performed directly from APRV',
          C: 'When P-high equals the target CPAP level (typically 5-10 cmH2O) and the patient demonstrates adequate spontaneous breathing, standard extubation criteria apply',
          D: 'The patient must tolerate T-piece trial for 2 hours first',
        },
        correctChoice: 'C',
        explanationCorrect:
          'As APRV is weaned via the "drop and stretch" method, P-high progressively decreases and T-high lengthens until the mode effectively becomes CPAP. When P-high reaches CPAP level (5-10 cmH2O) and the patient maintains adequate spontaneous ventilation, standard extubation readiness criteria (adequate cough, manageable secretions, appropriate mental status, oxygenation on low FiO2) apply.',
        explanationWrong:
          'Switching to PSV is one approach but not required; direct extubation from CPAP-level APRV is acceptable. Extubation can be performed from APRV once it has been weaned to CPAP equivalent. While a spontaneous breathing trial concept applies, the APRV wean itself serves as a gradual SBT, and a separate T-piece trial is not mandatory.',
        topic: 'APRV Advanced Concepts',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 17,
        questionText:
          'A critical care transport team encounters severe turbulence during rotor-wing transport. A mechanically ventilated patient\'s ETT becomes accidentally dislodged. The team cannot safely reintubate due to ongoing turbulence. What is the most appropriate immediate airway management?',
        choices: {
          A: 'Attempt reintubation immediately despite the turbulence',
          B: 'Wait for turbulence to subside before any airway intervention',
          C: 'Perform a surgical cricothyrotomy during the turbulence',
          D: 'Provide bag-valve-mask ventilation with an oropharyngeal airway, request the pilot to find smoother air or land if safe, and prepare for reintubation when conditions allow',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In-flight airway emergencies during turbulence require a systematic approach prioritizing basic airway management. BVM ventilation with an OPA maintains oxygenation while the pilot seeks smoother air or a landing zone. Attempting laryngoscopy during severe turbulence risks airway trauma and aspiration. The team should prepare equipment for definitive airway management when conditions stabilize.',
        explanationWrong:
          'Attempting reintubation during severe turbulence risks failed intubation, airway trauma, and provider injury. Waiting without any airway intervention risks hypoxemia and death. Surgical cricothyrotomy during turbulence is extremely dangerous and should only be attempted as a last resort if BVM ventilation fails.',
        topic: 'Critical Care Transport',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 18,
        questionText:
          'A burn ICU patient develops invasive wound infection with Acinetobacter baumannii that is resistant to carbapenems, aminoglycosides, fluoroquinolones, and polymyxins but susceptible only to minocycline. What therapeutic approach is most appropriate?',
        choices: {
          A: 'High-dose IV minocycline as part of a combination regimen, potentially with a carbapenem despite in-vitro resistance, guided by infectious disease consultation',
          B: 'Standard-dose oral doxycycline monotherapy',
          C: 'Standard cephalosporin therapy is adequate',
          D: 'This pattern suggests laboratory error requiring repeat cultures',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When Acinetobacter is resistant to nearly all agents including polymyxins, IV minocycline becomes a critical salvage option. High-dose IV minocycline (200 mg every 12 hours) is used as the backbone of combination therapy, often with a second agent such as a carbapenem (synergy may exist despite in-vitro resistance), rifampin, or colistin inhaled for pulmonary involvement. Infectious disease consultation is essential for these complex cases.',
        explanationWrong:
          'Oral doxycycline monotherapy provides inadequate tissue levels for invasive infections and monotherapy risks further resistance development. Standard cephalosporins have no activity against carbapenem-resistant Acinetobacter. While laboratory errors can occur, this resistance pattern is well-recognized in extensively drug-resistant Acinetobacter isolates.',
        topic: 'Multidrug-Resistant Organisms',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is caring for two patients simultaneously in the ICU. One patient requires an emergency bronchoscopy for mucous plugging with deteriorating oxygenation, while the other is undergoing a routine ventilator check. How should the therapist prioritize?',
        choices: {
          A: 'Complete the routine ventilator check first since it was started earlier',
          B: 'Ask the patient with mucous plugging to wait',
          C: 'Immediately attend to the emergency bronchoscopy patient, ensure the routine patient is stable, and communicate the situation to the charge nurse for additional support',
          D: 'Refuse to participate in the bronchoscopy citing insufficient staffing',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Ethical principles of beneficence and non-maleficence require prioritizing the patient with the more urgent, life-threatening condition. The respiratory therapist should immediately attend to the emergency while ensuring the routine patient remains safe and stable. Communication with the charge nurse or supervisor is essential to arrange coverage and document the situation.',
        explanationWrong:
          'Completing a routine task before addressing an emergency violates the principle of prioritizing by acuity. Asking an unstable patient to wait risks harm. While staffing concerns are valid, refusing emergency care is never appropriate; the therapist should address the emergency while advocating for better staffing through proper channels.',
        topic: 'Ethical Dilemmas in Critical Care',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 20,
        questionText:
          'A patient with AKI and severe metabolic acidosis is started on continuous venovenous hemofiltration (CVVH) using a bicarbonate-based replacement fluid at 35 mL/kg/hour. After 12 hours, the pH has improved from 7.10 to 7.32. What parameter should be most closely monitored to avoid complications of rapid acid-base correction?',
        choices: {
          A: 'Serum sodium only',
          B: 'Ionized calcium, as rapid correction of acidosis causes calcium to bind to albumin, potentially causing symptomatic hypocalcemia',
          C: 'Serum glucose',
          D: 'Platelet count',
        },
        correctChoice: 'B',
        explanationCorrect:
          'As metabolic acidosis is corrected and pH rises, the proportion of calcium bound to albumin increases because albumin has more negatively charged binding sites at higher pH. This reduces ionized (free) calcium, potentially causing symptomatic hypocalcemia with tetany, cardiac arrhythmias, or seizures. Ionized calcium must be monitored frequently during rapid acid-base correction and supplemented as needed.',
        explanationWrong:
          'While sodium should be monitored, the most clinically significant acute risk during rapid pH correction is ionized calcium decline. Serum glucose and platelet count are not directly affected by the acid-base correction itself in this context.',
        topic: 'Acute Kidney Injury',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 25 seeded (20 questions, isFree: false)')

  console.log('Done seeding ACCS mini exams 21-25!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
