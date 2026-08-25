import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TMC_DIVISION_ID = 'cmsm41fq00000zf54wqjaayvz'

async function main() {
  console.log('Seeding TMC mini exams 26-30 (comprehensive review)...')

  // ─── EXAM 26 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1C,2A,3D,4B,5A,6D,7B,8C,9A,10D,11B,12C,13A,14D,15B,16C,17D,18A,19B,20C
  const exam26 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 26',
      examIndex: 26,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam26.id,
        questionIndex: 1,
        questionText:
          'A 58-year-old patient with COPD is receiving oxygen at 2 L/min via nasal cannula. The SpO2 reads 88% and the patient appears comfortable with a respiratory rate of 18/min. Which action should the respiratory therapist take?',
        choices: {
          A: 'Immediately intubate the patient',
          B: 'Switch to a non-rebreather mask at 15 L/min',
          C: 'Increase the oxygen flow rate to 3 L/min and reassess',
          D: 'Discontinue the oxygen therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'For a COPD patient with an SpO2 of 88%, a small increase in oxygen flow (to 3 L/min) with reassessment is the most appropriate step. The target SpO2 for COPD patients is generally 88-92% to avoid suppressing the hypoxic drive.',
        explanationWrong:
          'Intubation is premature for a comfortable patient with adequate respiratory effort. A non-rebreather at 15 L/min delivers excessive oxygen and may suppress ventilatory drive in a COPD patient. Discontinuing oxygen would worsen the hypoxemia.',
        topic: 'Oxygen Therapy',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 2,
        questionText:
          'A mechanically ventilated patient has the following arterial blood gas results: pH 7.28, PaCO2 55 mmHg, PaO2 72 mmHg, HCO3 26 mEq/L. Current settings are: VT 450 mL, RR 12/min, FiO2 0.50, PEEP 5 cm H2O. Which ventilator change is most appropriate?',
        choices: {
          A: 'Increase the FiO2 to 0.60',
          B: 'Increase the PEEP to 10 cm H2O',
          C: 'Increase the respiratory rate to 16/min',
          D: 'Decrease the tidal volume to 400 mL',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The ABG shows uncompensated respiratory acidosis (low pH, elevated PaCO2). Increasing the respiratory rate will increase minute ventilation and help lower the PaCO2, correcting the acidosis. The PaO2 is acceptable so FiO2 changes are not the priority.',
        explanationWrong:
          'Increasing PEEP addresses oxygenation, not ventilation. Increasing FiO2 is unnecessary because the PaO2 is adequate. Decreasing the tidal volume would further reduce minute ventilation and worsen the respiratory acidosis.',
        topic: 'Mechanical Ventilation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 3,
        questionText:
          'During chest auscultation, a respiratory therapist hears bilateral, low-pitched, continuous sounds that clear with coughing. These findings are most consistent with which condition?',
        choices: {
          A: 'Secretions in the large airways',
          B: 'Pleural effusion',
          C: 'Pulmonary fibrosis',
          D: 'Pneumothorax',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Low-pitched continuous sounds (rhonchi) that clear with coughing are characteristic of secretions in the large airways. Coughing mobilizes the secretions and temporarily eliminates the sounds.',
        explanationWrong:
          'Pneumothorax presents with diminished or absent breath sounds. Pleural effusion produces decreased breath sounds and possible egophony. Pulmonary fibrosis produces fine, late-inspiratory crackles (Velcro-like sounds) that do not clear with coughing.',
        topic: 'Patient Assessment',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 4,
        questionText:
          'A respiratory therapist is monitoring a patient receiving mechanical ventilation in the volume-control mode. The peak inspiratory pressure has increased from 25 to 40 cm H2O, but the plateau pressure remains at 20 cm H2O. What is the most likely cause?',
        choices: {
          A: 'Decreased lung compliance',
          B: 'Increased airway resistance',
          C: 'Development of a pneumothorax',
          D: 'Excessive tidal volume delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When PIP increases but plateau pressure remains unchanged, the problem is increased airway resistance (the difference between PIP and Pplat reflects resistive forces). Common causes include bronchospasm, secretions, or a kinked endotracheal tube.',
        explanationWrong:
          'Decreased lung compliance would increase both PIP and plateau pressure. A pneumothorax would typically increase both PIP and plateau pressure and decrease breath sounds unilaterally. Excessive tidal volume would increase both pressures proportionally.',
        topic: 'Mechanical Ventilation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 5,
        questionText:
          'A 4-year-old child presents to the emergency department with inspiratory stridor, a barking cough, and a steeple sign on anteroposterior neck radiograph. Which of the following is the most appropriate treatment?',
        choices: {
          A: 'Nebulized racemic epinephrine and systemic corticosteroids',
          B: 'Immediate intubation with a cuffed endotracheal tube',
          C: 'Heliox therapy at 80/20 concentration',
          D: 'Chest physiotherapy with postural drainage',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The presentation is classic for viral croup (laryngotracheobronchitis). The steeple sign on x-ray confirms subglottic narrowing. Nebulized racemic epinephrine reduces mucosal edema and systemic corticosteroids (dexamethasone) reduce inflammation.',
        explanationWrong:
          'Intubation is reserved for severe cases with impending respiratory failure. Heliox may be considered as an adjunct but is not first-line therapy. Chest physiotherapy is not indicated for upper airway obstruction caused by croup.',
        topic: 'Pediatric Respiratory Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 6,
        questionText:
          'A patient receiving positive pressure ventilation via a tracheostomy has a sudden decrease in SpO2 from 96% to 78%, increased peak pressures, and absent breath sounds on the right side. What should the respiratory therapist do FIRST?',
        choices: {
          A: 'Obtain a stat chest x-ray',
          B: 'Increase the FiO2 to 1.0',
          C: 'Suction the tracheostomy tube',
          D: 'Remove the patient from the ventilator and manually ventilate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The presentation suggests either a tension pneumothorax or a ventilator malfunction. The immediate action is to disconnect the patient from the ventilator and manually ventilate with a resuscitation bag to rule out ventilator-related causes and provide emergency ventilation.',
        explanationWrong:
          'A chest x-ray is needed but should not delay immediate intervention. Increasing FiO2 alone will not address the underlying problem if there is a pneumothorax or circuit issue. Suctioning is reasonable but disconnecting from the ventilator first helps differentiate ventilator malfunction from patient-related causes.',
        topic: 'Emergency Procedures',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is performing PFTs on a 45-year-old patient. The results show: FVC 82% predicted, FEV1 60% predicted, FEV1/FVC ratio 58%, and the flow-volume loop shows a scooped expiratory curve. These findings are consistent with which diagnosis?',
        choices: {
          A: 'Restrictive lung disease',
          B: 'Obstructive lung disease',
          C: 'Upper airway obstruction',
          D: 'Normal pulmonary function',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A reduced FEV1/FVC ratio (below 70%) with a scooped expiratory flow-volume curve is the hallmark of obstructive lung disease. The FVC is relatively preserved while FEV1 is disproportionately reduced, indicating airflow limitation.',
        explanationWrong:
          'Restrictive lung disease shows reduced FVC with a normal or elevated FEV1/FVC ratio. Upper airway obstruction produces flattening of the inspiratory and/or expiratory portion of the flow-volume loop. Normal pulmonary function would show FEV1/FVC above 70% with normal volumes.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 8,
        questionText:
          'A newborn infant at 30 weeks gestational age is exhibiting nasal flaring, grunting, and intercostal retractions within 2 hours of birth. The chest radiograph shows a diffuse ground-glass appearance with air bronchograms. Which treatment is the highest priority?',
        choices: {
          A: 'Inhaled bronchodilator therapy',
          B: 'Chest physiotherapy with percussion',
          C: 'Exogenous surfactant administration via endotracheal tube',
          D: 'High-flow nasal cannula at 6 L/min',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The clinical and radiographic presentation is classic for respiratory distress syndrome (RDS) due to surfactant deficiency. Exogenous surfactant replacement via the endotracheal tube is the highest priority intervention for a premature infant with RDS.',
        explanationWrong:
          'Bronchodilators are not indicated for surfactant deficiency. Chest physiotherapy is contraindicated in premature neonates with RDS. High-flow nasal cannula may provide some support but does not address the underlying surfactant deficiency.',
        topic: 'Neonatal Respiratory Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 9,
        questionText:
          'A patient is receiving volume-control ventilation with an FiO2 of 0.70 and PEEP of 12 cm H2O. The ABG shows pH 7.38, PaCO2 40 mmHg, PaO2 110 mmHg, and SaO2 99%. Which ventilator adjustment should the respiratory therapist recommend?',
        choices: {
          A: 'Decrease the FiO2',
          B: 'Increase the PEEP to 15 cm H2O',
          C: 'Increase the tidal volume',
          D: 'Add pressure support ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The PaO2 of 110 mmHg on 70% FiO2 indicates the patient is over-oxygenated. The FiO2 should be decreased to minimize oxygen toxicity risk while maintaining adequate oxygenation (PaO2 60-100 mmHg). FiO2 should generally be weaned before PEEP.',
        explanationWrong:
          'Increasing PEEP is unnecessary when the PaO2 is already above target. Increasing tidal volume is not warranted as the PaCO2 and pH are normal. Adding pressure support is for assisting spontaneous breathing efforts, which is not the current concern.',
        topic: 'Mechanical Ventilation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 10,
        questionText:
          'When reviewing a patient\'s medication history, the respiratory therapist notes that the patient takes warfarin. Before performing arterial puncture for an ABG, the therapist should check which laboratory value?',
        choices: {
          A: 'Serum potassium level',
          B: 'White blood cell count',
          C: 'Hemoglobin A1c',
          D: 'International normalized ratio (INR)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Warfarin is an anticoagulant that affects the coagulation cascade. The INR (International Normalized Ratio) must be checked before arterial puncture to assess bleeding risk. An elevated INR increases the risk of prolonged bleeding and hematoma formation.',
        explanationWrong:
          'Serum potassium does not directly affect bleeding risk. White blood cell count assesses infection risk, not coagulation status. Hemoglobin A1c measures long-term glucose control and is not relevant to arterial puncture safety.',
        topic: 'Patient Assessment',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 11,
        questionText:
          'A patient with asthma is receiving continuous albuterol nebulization in the emergency department. The heart rate increases from 88 to 140 beats per minute. Which action should the respiratory therapist take?',
        choices: {
          A: 'Continue the treatment since tachycardia is expected',
          B: 'Stop the continuous nebulization and notify the physician',
          C: 'Switch from albuterol to ipratropium bromide only',
          D: 'Decrease the albuterol concentration by half',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A heart rate increase to 140 bpm during continuous albuterol nebulization represents a significant adverse effect. The therapist should stop the treatment and notify the physician immediately. Excessive tachycardia can lead to cardiac arrhythmias.',
        explanationWrong:
          'While mild tachycardia is expected with beta-agonists, a heart rate of 140 bpm is excessive and warrants stopping treatment. Simply switching to ipratropium without physician notification is inappropriate for this level of tachycardia. Decreasing the concentration is not standard practice without physician guidance.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is assessing a patient who was involved in a motor vehicle accident. The patient has paradoxical chest wall movement on the left side with crepitus on palpation. Which condition is most consistent with these findings?',
        choices: {
          A: 'Simple pneumothorax',
          B: 'Hemothorax',
          C: 'Flail chest',
          D: 'Cardiac tamponade',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Paradoxical chest wall movement (inward movement during inspiration, outward during expiration) combined with crepitus (bone fragments) after trauma is the hallmark of flail chest, which occurs when three or more adjacent ribs are fractured in two or more places.',
        explanationWrong:
          'Simple pneumothorax presents with decreased breath sounds and hyperresonance, not paradoxical movement. Hemothorax causes dullness to percussion and decreased breath sounds. Cardiac tamponade presents with distended neck veins, hypotension, and muffled heart sounds (Beck triad).',
        topic: 'Trauma Assessment',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 13,
        questionText:
          'Which of the following is the most reliable indicator that a patient is ready to be weaned from mechanical ventilation?',
        choices: {
          A: 'Rapid shallow breathing index (RSBI) less than 105 breaths/min/L',
          B: 'PaO2 greater than 200 mmHg on FiO2 of 1.0',
          C: 'Peak inspiratory pressure less than 50 cm H2O',
          D: 'Respiratory rate of 28 breaths per minute',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The rapid shallow breathing index (RSBI = respiratory rate / tidal volume in liters) of less than 105 breaths/min/L is the most reliable predictor of successful weaning. It indicates the patient can generate adequate tidal volumes without excessive respiratory effort.',
        explanationWrong:
          'A PaO2 greater than 200 on FiO2 1.0 indicates adequate gas exchange but is not a weaning-readiness parameter. Peak inspiratory pressure relates to airway pressures, not weaning readiness. A respiratory rate of 28/min is elevated and may suggest the patient is not ready for weaning.',
        topic: 'Ventilator Weaning',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 14,
        questionText:
          'A patient with a chest tube drainage system has continuous bubbling in the water seal chamber during both inspiration and expiration. This finding indicates which of the following?',
        choices: {
          A: 'Normal chest tube function',
          B: 'The lung has fully re-expanded',
          C: 'The suction pressure is set too high',
          D: 'An air leak is present in the system',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Continuous bubbling in the water seal chamber during both phases of respiration indicates an air leak in the system. This could be from a persistent bronchopleural fistula, a connection leak, or damage to the drainage system itself. All connections should be checked.',
        explanationWrong:
          'Normal chest tube function shows intermittent bubbling that corresponds with respiration and decreases as the pneumothorax resolves. A fully re-expanded lung would show cessation of bubbling. Excessive suction causes bubbling in the suction control chamber, not continuous bubbling in the water seal chamber.',
        topic: 'Chest Tube Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 15,
        questionText:
          'A patient diagnosed with ARDS has a PaO2/FiO2 ratio of 85 mmHg. According to the Berlin definition, this classifies as which severity level?',
        choices: {
          A: 'Mild ARDS',
          B: 'Severe ARDS',
          C: 'Moderate ARDS',
          D: 'Acute lung injury',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to the Berlin definition, ARDS severity is classified by PaO2/FiO2 ratio: mild (200-300 mmHg), moderate (100-200 mmHg), and severe (less than 100 mmHg). A PaO2/FiO2 ratio of 85 mmHg classifies as severe ARDS.',
        explanationWrong:
          'Mild ARDS requires a PaO2/FiO2 ratio between 200 and 300. Moderate ARDS is defined as a PaO2/FiO2 between 100 and 200. The term "acute lung injury" was replaced by the Berlin definition and is no longer a separate classification.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is calculating the static compliance of a mechanically ventilated patient. The ventilator delivers a tidal volume of 500 mL, PIP is 35 cm H2O, plateau pressure is 25 cm H2O, and PEEP is 5 cm H2O. What is the static compliance?',
        choices: {
          A: '25 mL/cm H2O',
          B: ' 17 mL/cm H2O',
          C: ' 14 mL/cm H2O',
          D: '20 mL/cm H2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Static compliance = VT / (Pplat - PEEP) = 500 / (25 - 5) = 500 / 20 = 25 mL/cm H2O. Static compliance reflects the elastic properties of the lungs and chest wall, using plateau pressure to eliminate the resistive component.',
        explanationWrong:
          '14 mL/cm H2O would result from dividing VT by (PIP - PEEP), which calculates dynamic compliance. 17 mL/cm H2O and 20 mL/cm H2O result from incorrect calculations using wrong pressure values.',
        topic: 'Ventilator Mechanics',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 17,
        questionText:
          'A patient with myasthenia gravis is admitted to the ICU with progressive weakness. The negative inspiratory force (NIF) is measured at -18 cm H2O and the vital capacity is 12 mL/kg. These findings suggest the patient:',
        choices: {
          A: 'Has acceptable respiratory muscle strength',
          B: 'Should be extubated immediately',
          C: 'Has normal pulmonary function',
          D: 'Is at risk for respiratory failure and may need intubation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A NIF weaker than -20 cm H2O and a vital capacity less than 15 mL/kg indicate significant respiratory muscle weakness and impending respiratory failure. These values in a myasthenia gravis patient warrant close monitoring and preparation for possible intubation.',
        explanationWrong:
          'Acceptable respiratory muscle strength requires a NIF more negative than -20 cm H2O and a VC greater than 15 mL/kg. The patient cannot be considered for extubation with these weak values. These results clearly indicate abnormal pulmonary function and respiratory muscle compromise.',
        topic: 'Neuromuscular Disease',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist obtains the following capnography reading from a mechanically ventilated patient: PETCO2 25 mmHg (previously 38 mmHg). The patient\'s blood pressure has dropped to 70/40 mmHg. What is the most likely cause of the decreased PETCO2?',
        choices: {
          A: 'Mucus plugging of the endotracheal tube',
          B: 'Hypoventilation from sedation',
          C: 'Bronchospasm',
          D: 'Pulmonary embolism causing increased dead space ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A sudden decrease in PETCO2 combined with hypotension strongly suggests a pulmonary embolism. The embolus obstructs pulmonary blood flow, creating increased dead space ventilation (ventilated but not perfused alveoli), which lowers the PETCO2.',
        explanationWrong:
          'Hypoventilation would increase PETCO2 as CO2 retention occurs. Bronchospasm may alter the capnogram waveform shape but would not typically cause a sudden drop in PETCO2 with concurrent hypotension. Mucus plugging would increase airway pressures but is not typically associated with sudden hypotension.',
        topic: 'Monitoring and Diagnostics',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is asked to set up a large-volume nebulizer for aerosol therapy. The physician orders 40% oxygen. At what air-to-oxygen entrainment ratio should the device be set?',
        choices: {
          A: 'approximately 8:1',
          B: 'approximately 3:1',
          C: 'approximately 5:1',
          D: 'approximately 1.7:1',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Using the air-entrainment ratio formula for 40% FiO2: (100 - 40) / (40 - 21) = 60 / 19 = approximately 3:1. This means for every 1 part oxygen, 3 parts room air are entrained to deliver 40% oxygen.',
        explanationWrong:
          'An 8:1 ratio corresponds to approximately 24% oxygen. A 5:1 ratio corresponds to approximately 28% oxygen. A 1.7:1 ratio corresponds to approximately 50% oxygen.',
        topic: 'Oxygen Delivery Devices',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 20,
        questionText:
          'A post-operative patient recovering from upper abdominal surgery has an SpO2 of 91% and bilateral basilar crackles. The chest x-ray shows bilateral lower lobe opacities. Which therapy should the respiratory therapist recommend?',
        choices: {
          A: 'Aerosolized acetylcysteine treatments',
          B: 'Endotracheal suctioning',
          C: 'Incentive spirometry with early ambulation',
          D: 'Intrapulmonary percussive ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Post-operative atelectasis is common after upper abdominal surgery. Incentive spirometry encourages sustained maximal inspiration, which helps re-expand collapsed alveoli. Combined with early ambulation, this is the standard of care for preventing and treating post-operative atelectasis.',
        explanationWrong:
          'Acetylcysteine is a mucolytic used for thick secretions and is not the primary treatment for atelectasis. Endotracheal suctioning is invasive and not indicated unless the patient has an artificial airway. Intrapulmonary percussive ventilation may be considered for secretion clearance but is not first-line for post-operative atelectasis.',
        topic: 'Lung Expansion Therapy',
      },
    ],
  })

  // ─── EXAM 27 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1B,2D,3C,4A,5D,6C,7A,8B,9D,10A,11C,12B,13D,14C,15A,16B,17A,18C,19D,20B
  const exam27 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 27',
      examIndex: 27,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam27.id,
        questionIndex: 1,
        questionText:
          'A 72-year-old patient with heart failure presents with pink, frothy sputum and bilateral crackles. The chest x-ray reveals bilateral pulmonary infiltrates with a normal-sized heart. SpO2 is 82% on room air. What is the initial respiratory intervention of choice?',
        choices: {
          A: 'Intubation and mechanical ventilation',
          B: 'CPAP or BiPAP with supplemental oxygen',
          C: 'High-flow nasal cannula at 60 L/min',
          D: 'Simple face mask at 10 L/min',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Non-invasive positive pressure ventilation (CPAP or BiPAP) is the initial intervention of choice for acute cardiogenic pulmonary edema. It improves oxygenation, reduces preload and afterload, and decreases the work of breathing, often avoiding the need for intubation.',
        explanationWrong:
          'Intubation may become necessary if non-invasive ventilation fails but should not be the initial intervention. High-flow nasal cannula provides limited positive pressure and may not be sufficient for acute pulmonary edema. A simple face mask at 10 L/min does not provide positive pressure or sufficient oxygenation for this severity.',
        topic: 'Non-Invasive Ventilation',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is caring for a patient on mechanical ventilation who develops auto-PEEP of 8 cm H2O. Which of the following ventilator adjustments would be most effective in reducing the auto-PEEP?',
        choices: {
          A: 'Increase the inspiratory time',
          B: 'Increase the set respiratory rate',
          C: 'Increase the set tidal volume',
          D: 'Decrease the respiratory rate to allow more expiratory time',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Auto-PEEP (intrinsic PEEP) occurs when expiratory time is insufficient for complete exhalation. Decreasing the respiratory rate increases the total cycle time, which lengthens the expiratory phase and allows more complete exhalation, reducing air trapping.',
        explanationWrong:
          'Increasing inspiratory time shortens expiratory time and worsens auto-PEEP. Increasing the respiratory rate shortens total cycle time and expiratory time, worsening air trapping. Increasing tidal volume requires more time for exhalation and can worsen auto-PEEP.',
        topic: 'Mechanical Ventilation',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is reviewing a patient\'s arterial blood gas: pH 7.52, PaCO2 30 mmHg, HCO3 24 mEq/L, PaO2 98 mmHg. Which of the following best describes this acid-base disturbance?',
        choices: {
          A: 'Metabolic alkalosis',
          B: 'Respiratory acidosis',
          C: 'Respiratory alkalosis',
          D: 'Compensated metabolic acidosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The elevated pH (7.52) indicates alkalosis. The PaCO2 is low (30 mmHg), which is the cause of the alkalemia. The HCO3 is normal (24 mEq/L), indicating no metabolic compensation has occurred yet. This is an acute, uncompensated respiratory alkalosis.',
        explanationWrong:
          'Metabolic alkalosis would show an elevated HCO3 as the primary disturbance. Respiratory acidosis would show an elevated PaCO2 with a low pH. Compensated metabolic acidosis would show a low HCO3 with a correspondingly low PaCO2 and near-normal pH.',
        topic: 'Blood Gas Interpretation',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 4,
        questionText:
          'A patient receiving bronchodilator therapy via small-volume nebulizer has a prescribed dose of 0.5 mL of albuterol (5 mg/mL) in 3 mL of normal saline. What is the total dose of albuterol being delivered?',
        choices: {
          A: '2.5 mg',
          B: '5.0 mg',
          C: '1.25 mg',
          D: '0.5 mg',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The dose is calculated by multiplying the volume by the concentration: 0.5 mL x 5 mg/mL = 2.5 mg. This is the standard adult dose of albuterol for nebulization.',
        explanationWrong:
          '5.0 mg would require 1.0 mL of the 5 mg/mL solution. 1.25 mg would require 0.25 mL. 0.5 mg incorrectly uses the volume as the dose without accounting for concentration.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is performing endotracheal suctioning on a mechanically ventilated patient. During the procedure, the patient develops bradycardia with a heart rate of 45 bpm. What should the therapist do immediately?',
        choices: {
          A: 'Continue suctioning to remove secretions quickly',
          B: 'Increase the suction pressure to reduce procedure time',
          C: 'Apply suction for a maximum of 15 seconds then withdraw',
          D: 'Immediately stop suctioning and hyperoxygenate the patient',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Bradycardia during suctioning is a vagal response and can be life-threatening. The therapist must immediately stop suctioning, withdraw the catheter, and hyperoxygenate the patient with 100% oxygen. The physician should be notified if the bradycardia persists.',
        explanationWrong:
          'Continuing suctioning or increasing suction pressure during bradycardia is dangerous and can lead to cardiac arrest. Even limiting suction to 15 seconds is inappropriate when bradycardia has already occurred; the procedure must be stopped immediately.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is assessing a patient with suspected sleep apnea. Which of the following findings from a polysomnography report is diagnostic of moderate obstructive sleep apnea?',
        choices: {
          A: 'Apnea-hypopnea index (AHI) of 4 events per hour',
          B: 'Central apnea index of 2 events per hour',
          C: 'Apnea-hypopnea index (AHI) of 22 events per hour',
          D: 'Respiratory effort-related arousal index of 3 per hour',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Moderate obstructive sleep apnea is defined as an AHI between 15 and 30 events per hour. An AHI of 22 falls within this range. Mild OSA is 5-14 events/hour, and severe is greater than 30 events/hour.',
        explanationWrong:
          'An AHI of 4 is below the diagnostic threshold for OSA (less than 5 is normal). A central apnea index of 2 refers to central events, not obstructive, and is below diagnostic thresholds. A respiratory effort-related arousal index of 3 is related to upper airway resistance but does not diagnose OSA.',
        topic: 'Sleep Medicine',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is reviewing the results of a tuberculin skin test (TST) for a healthcare worker. The induration measures 12 mm. What is the correct interpretation?',
        choices: {
          A: 'Positive result - the healthcare worker should be evaluated for active TB',
          B: 'Negative result - no further testing is needed',
          C: 'Indeterminate - the test should be repeated in 2 weeks',
          D: 'Positive only if the worker is immunocompromised',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For healthcare workers, an induration of 10 mm or greater is considered a positive TST result. A positive result indicates TB infection (latent or active) and the worker should be evaluated with a chest x-ray and clinical assessment for active disease.',
        explanationWrong:
          'An induration of 12 mm exceeds the 10 mm threshold for healthcare workers, so it is not negative. The result is definitive at 12 mm and does not need to be repeated. The 5 mm threshold applies to immunocompromised individuals, not the 10 mm threshold used for healthcare workers.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 8,
        questionText:
          'A patient with COPD is being considered for long-term oxygen therapy (LTOT). According to the CMS guidelines, which of the following qualifies this patient for home oxygen?',
        choices: {
          A: 'SpO2 of 92% at rest on room air',
          B: 'PaO2 of 54 mmHg on room air at rest',
          C: 'PaO2 of 62 mmHg at rest with no comorbidities',
          D: 'SpO2 of 90% during exercise only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CMS guidelines qualify patients for LTOT when PaO2 is 55 mmHg or less, or SpO2 is 88% or less, at rest on room air. A PaO2 of 54 mmHg meets this criterion. Patients with PaO2 56-59 mmHg may also qualify with evidence of cor pulmonale, erythrocytosis, or edema.',
        explanationWrong:
          'An SpO2 of 92% at rest does not meet the threshold of 88% or less. A PaO2 of 62 mmHg without qualifying comorbidities exceeds the 55-59 mmHg range. Exercise desaturation alone may qualify for portable oxygen but the PaO2 and SpO2 thresholds at rest are the primary criteria.',
        topic: 'Home Care and Long-Term Oxygen',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist notices that a mechanically ventilated patient has developed subcutaneous emphysema in the neck and upper chest. This finding most likely indicates which of the following?',
        choices: {
          A: 'Fluid overload',
          B: 'Allergic reaction to medication',
          C: 'Upper airway edema',
          D: 'Air leak from the respiratory tract into surrounding tissues',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Subcutaneous emphysema (air trapped under the skin producing crepitus on palpation) in a mechanically ventilated patient most commonly results from air leaking from the respiratory tract. This can be caused by barotrauma, pneumothorax, pneumomediastinum, or a disruption of the tracheal or bronchial wall.',
        explanationWrong:
          'Fluid overload causes edema but not subcutaneous air. Allergic reactions may cause angioedema but not subcutaneous emphysema. Upper airway edema causes swelling and stridor, not crepitus from trapped air.',
        topic: 'Mechanical Ventilation Complications',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is preparing to transport a critically ill patient via ground ambulance. The patient requires mechanical ventilation at an FiO2 of 0.60. The portable E-cylinder shows a pressure of 1500 psi and the patient is ventilated at a minute ventilation of 10 L/min. Approximately how long will the oxygen last?',
        choices: {
          A: 'Approximately 42 minutes',
          B: 'Approximately 75 minutes',
          C: 'Approximately 100 minutes',
          D: 'Approximately 28 minutes',
        },
        correctChoice: 'A',
        explanationCorrect:
          'E-cylinder factor is 0.28. Available volume = 0.28 x 1500 = 420 liters. At a minute ventilation of 10 L/min with FiO2 0.60, oxygen consumption is approximately 10 L/min. Duration = 420 / 10 = 42 minutes. This assumes the ventilator uses the cylinder as its sole gas source.',
        explanationWrong:
          '75 minutes and 100 minutes overestimate the duration and could lead to dangerous oxygen depletion during transport. 28 minutes is an underestimate based on incorrect cylinder factors.',
        topic: 'Equipment and Transport',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is assisting with a bronchoscopy procedure. The patient begins coughing violently and the SpO2 drops to 85%. What should the therapist do?',
        choices: {
          A: 'Administer a bolus of sedation medication',
          B: 'Apply topical anesthetic to the airway',
          C: 'Withdraw the bronchoscope and provide supplemental oxygen',
          D: 'Insert an oral airway to facilitate the procedure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When a patient desaturates significantly during bronchoscopy with violent coughing, the bronchoscope should be withdrawn to restore the airway and supplemental oxygen should be provided immediately. Patient safety takes priority over completing the procedure.',
        explanationWrong:
          'Administering sedation during desaturation could further compromise the airway and respiratory drive. Applying topical anesthetic may help with coughing but does not address the immediate desaturation. Inserting an oral airway while the bronchoscope is in place would not be effective and delays oxygenation.',
        topic: 'Bronchoscopy',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 12,
        questionText:
          'Which of the following humidification devices provides the highest absolute humidity output for a patient with a bypassed upper airway?',
        choices: {
          A: 'Cool passover humidifier',
          B: 'Heated humidifier with servo-controlled temperature',
          C: 'Bubble humidifier at 6 L/min',
          D: 'Large-volume jet nebulizer',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A heated humidifier with servo-controlled temperature can deliver 33-44 mg/L of absolute humidity at body temperature, closely mimicking the upper airway\'s natural conditioning function. This is essential for patients with bypassed upper airways (tracheostomy or endotracheal tube).',
        explanationWrong:
          'A cool passover humidifier provides limited humidity (10-15 mg/L). A bubble humidifier at 6 L/min delivers approximately 15-20 mg/L, which is insufficient for a bypassed upper airway. A large-volume jet nebulizer provides aerosol but less efficient gas conditioning than a heated humidifier.',
        topic: 'Humidity and Aerosol Therapy',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 13,
        questionText:
          'A patient in the ICU develops a tracheoesophageal fistula (TEF) while intubated. Which of the following clinical signs would the respiratory therapist most likely observe?',
        choices: {
          A: 'Decreased peak airway pressures',
          B: 'Improved oxygenation on current settings',
          C: 'Subcutaneous emphysema in the neck only',
          D: 'Gastric distension and recurrent aspiration of gastric contents',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A tracheoesophageal fistula creates an abnormal communication between the trachea and esophagus. Positive pressure ventilation forces air through the fistula into the esophagus and stomach, causing gastric distension. Gastric contents can also reflux through the fistula into the airway, causing recurrent aspiration.',
        explanationWrong:
          'Peak airway pressures may actually decrease due to the air leak through the fistula. Oxygenation would worsen, not improve, due to the air leak and possible aspiration. While subcutaneous emphysema can occur, the hallmark findings are gastric distension and aspiration.',
        topic: 'Airway Complications',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is calibrating a galvanic fuel cell oxygen analyzer. The device reads 22% when exposed to room air and 98% when exposed to 100% oxygen. What action should the therapist take?',
        choices: {
          A: 'Discard the analyzer because it cannot be calibrated',
          B: 'Perform a three-point calibration',
          C: 'Accept the calibration and place the analyzer in service',
          D: 'Replace the fuel cell and recalibrate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A two-point calibration of an oxygen analyzer is performed at 21% (room air) and 100% oxygen. Readings of 22% and 98% are within the acceptable accuracy range (typically plus or minus 2-3%). The analyzer can be placed in service.',
        explanationWrong:
          'The analyzer readings are within acceptable tolerance and do not need to be discarded. A three-point calibration is not standard practice for oxygen analyzers. The fuel cell does not need replacement since the readings are within acceptable limits.',
        topic: 'Equipment Calibration',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is instructing a patient on the proper use of a dry powder inhaler (DPI). Which instruction is most appropriate?',
        choices: {
          A: 'Inhale quickly and deeply through the device',
          B: 'Exhale slowly into the device before inhaling',
          C: 'Use a spacer device with the DPI',
          D: 'Shake the inhaler vigorously before each use',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Dry powder inhalers require a quick, deep inhalation to generate sufficient turbulent flow to disperse the powder and ensure adequate drug deposition in the lungs. Unlike MDIs, DPIs are breath-actuated and depend on the patient\'s inspiratory effort.',
        explanationWrong:
          'Exhaling into the DPI can introduce moisture and clump the powder, reducing drug delivery. Spacers are not used with DPIs as they are designed for metered-dose inhalers. Shaking is necessary for MDIs but not DPIs, which use pre-measured doses of dry powder.',
        topic: 'Aerosol Drug Delivery',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is monitoring a patient who is receiving prone positioning for severe ARDS. After 4 hours in the prone position, which assessment finding would indicate that prone positioning is effective?',
        choices: {
          A: 'Decreased urinary output',
          B: 'Improvement in PaO2/FiO2 ratio by at least 20 mmHg',
          C: 'Increased sedation requirements',
          D: 'Development of facial edema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The primary goal of prone positioning in ARDS is to improve oxygenation by redistributing ventilation to better-perfused dorsal lung regions. An improvement in the PaO2/FiO2 ratio by at least 20 mmHg indicates a positive response to prone positioning.',
        explanationWrong:
          'Decreased urinary output may indicate hemodynamic compromise and is not a sign of effectiveness. Increased sedation requirements are a management issue, not an indicator of therapeutic success. Facial edema is a common complication of prone positioning, not a measure of effectiveness.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is evaluating a patient who had a difficult intubation. Post-intubation, the capnography shows no CO2 waveform, and auscultation reveals gurgling sounds over the epigastrium with no breath sounds bilaterally. What has most likely occurred?',
        choices: {
          A: 'Esophageal intubation',
          B: 'Right mainstem bronchus intubation',
          C: 'Pneumothorax',
          D: 'Bronchospasm',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The absence of a CO2 waveform on capnography combined with gurgling over the epigastrium and absent bilateral breath sounds is the classic presentation of esophageal intubation. The tube must be removed immediately and the patient re-intubated into the trachea.',
        explanationWrong:
          'Right mainstem intubation would show a CO2 waveform and breath sounds on the right side only. Pneumothorax would typically show a CO2 waveform but diminished breath sounds on the affected side. Bronchospasm would still produce a CO2 waveform, though possibly with altered morphology.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 18,
        questionText:
          'A patient with chronic bronchitis produces more than 30 mL of thick, purulent sputum daily. Which airway clearance technique is MOST appropriate for this patient?',
        choices: {
          A: 'Incentive spirometry every 2 hours',
          B: 'Flutter valve (oscillatory PEP device)',
          C: 'High-frequency chest wall oscillation (vest therapy)',
          D: 'Directed coughing only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'High-frequency chest wall oscillation (vest therapy) is highly effective for patients producing large volumes of thick secretions. The oscillations create shear forces that mobilize secretions from the airway walls and promote mucociliary clearance from peripheral to central airways.',
        explanationWrong:
          'Incentive spirometry promotes lung expansion but is not designed for secretion mobilization. A Flutter valve is effective for moderate secretions but may be insufficient for this volume of thick, purulent sputum. Directed coughing alone is unlikely to clear the volume of secretions described without adjunctive therapy.',
        topic: 'Airway Clearance Therapy',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist receives an order to administer aerosolized ribavirin to a pediatric patient diagnosed with respiratory syncytial virus (RSV) bronchiolitis. Which precaution is MOST important for the therapist to take?',
        choices: {
          A: 'Wearing latex gloves during administration',
          B: 'Placing the patient in a negative pressure room',
          C: 'Using a standard surgical mask',
          D: 'Ensuring adequate room ventilation and using appropriate respiratory protection due to teratogenic risk',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Ribavirin is a known teratogen and can cause birth defects. Healthcare workers, especially those who are pregnant or may become pregnant, must use appropriate respiratory protection and ensure adequate room ventilation to minimize exposure to the aerosolized drug.',
        explanationWrong:
          'Latex gloves protect against skin contact but do not address the primary inhalation risk. A negative pressure room is used for airborne infections, not specifically required for ribavirin. A standard surgical mask does not provide adequate protection against aerosolized ribavirin particles.',
        topic: 'Pharmacology and Safety',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is reviewing the hemodynamic data of a critically ill patient: CVP 14 mmHg, PCWP 22 mmHg, cardiac output 3.2 L/min, systemic vascular resistance 1800 dynes/sec/cm⁻⁵. These findings are most consistent with which condition?',
        choices: {
          A: 'Septic shock',
          B: 'Left-sided heart failure',
          C: 'Hypovolemic shock',
          D: 'Pulmonary embolism',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Elevated CVP, elevated PCWP (greater than 18 mmHg), low cardiac output, and elevated SVR are the classic hemodynamic profile of left-sided heart failure (cardiogenic shock). The elevated PCWP indicates left ventricular dysfunction with fluid backing up into the pulmonary vasculature.',
        explanationWrong:
          'Septic shock typically presents with low SVR and initially high cardiac output (hyperdynamic state). Hypovolemic shock shows low CVP, low PCWP, low cardiac output, and elevated SVR. Pulmonary embolism typically shows elevated CVP and PAP but normal or low PCWP.',
        topic: 'Hemodynamic Monitoring',
      },
    ],
  })

  // ─── EXAM 28 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1D,2C,3B,4A,5C,6B,7D,8A,9B,10C,11D,12A,13B,14A,15D,16C,17B,18D,19A,20C
  const exam28 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 28',
      examIndex: 28,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam28.id,
        questionIndex: 1,
        questionText:
          'A respiratory therapist is caring for a patient on volume-control ventilation. The high-pressure alarm activates and the therapist notes the patient is biting on the endotracheal tube. What is the most appropriate intervention?',
        choices: {
          A: 'Increase the high-pressure alarm limit',
          B: 'Sedate the patient immediately',
          C: 'Switch to pressure-control ventilation',
          D: 'Insert a bite block or oral airway',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When a patient is biting the endotracheal tube, inserting a bite block or oral airway prevents tube occlusion and resolves the high-pressure alarm. This is the simplest and most direct intervention for this specific cause.',
        explanationWrong:
          'Increasing the alarm limit masks a real problem and is dangerous. Sedation may be considered if the patient is severely agitated but is not the first-line response for tube biting. Switching to pressure-control ventilation does not address the root cause of tube occlusion from biting.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 2,
        questionText:
          'A patient on a medical-surgical floor is using a 35% air-entrainment mask. The respiratory therapist notices the patient\'s respiratory rate has increased to 36/min with a strong inspiratory effort. What concern should the therapist have about the delivered FiO2?',
        choices: {
          A: 'The FiO2 is higher than set because the mask stores exhaled gas',
          B: 'The FiO2 is exactly 35% regardless of breathing pattern',
          C: 'The FiO2 is higher than 35% because the respiratory rate increases entrainment',
          D: 'The FiO2 may be lower than 35% because the patient\'s inspiratory demand exceeds the total flow',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Air-entrainment (Venturi) masks deliver a fixed FiO2 only when the total output flow meets or exceeds the patient\'s inspiratory demand. When a patient\'s peak inspiratory flow exceeds the mask\'s total flow output, room air is entrained around the mask, diluting the FiO2 below the set value.',
        explanationWrong:
          'The mask does not store exhaled gas in a way that increases FiO2. The FiO2 is not guaranteed when the patient\'s inspiratory demand is high. Increased respiratory rate does not increase entrainment through the mask in a way that raises FiO2; it actually causes the patient to entrain room air from outside the mask.',
        topic: 'Oxygen Delivery Devices',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is managing a patient with status asthmaticus who is not responding to continuous albuterol and intravenous corticosteroids. The ABG shows pH 7.25, PaCO2 58 mmHg, PaO2 55 mmHg. What is the most appropriate next step?',
        choices: {
          A: 'Add inhaled ipratropium bromide to the regimen',
          B: 'Prepare for intubation and mechanical ventilation',
          C: 'Administer subcutaneous terbutaline',
          D: 'Increase the albuterol concentration',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ABG shows respiratory acidosis with hypoxemia in a patient failing maximal bronchodilator therapy and corticosteroids. A rising PaCO2 in status asthmaticus indicates respiratory muscle fatigue and impending respiratory failure, requiring intubation and mechanical ventilation.',
        explanationWrong:
          'Adding ipratropium, while reasonable earlier, is unlikely to reverse impending respiratory failure at this stage. Subcutaneous terbutaline may provide some additional bronchodilation but does not address the need for ventilatory support. Increasing albuterol concentration when the patient is already on continuous therapy will not adequately address the respiratory failure.',
        topic: 'Asthma Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 4,
        questionText:
          'When performing a modified Allen test before radial artery puncture, a positive result indicates which of the following?',
        choices: {
          A: 'Adequate collateral circulation via the ulnar artery',
          B: 'The radial artery is occluded',
          C: 'Inadequate collateral circulation',
          D: 'The presence of an arteriovenous fistula',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A positive (normal) modified Allen test shows return of color to the palm within 10-15 seconds after releasing the ulnar artery while the radial artery remains compressed. This indicates adequate collateral blood flow through the ulnar artery, making radial puncture safe.',
        explanationWrong:
          'A positive Allen test confirms the radial artery can be safely punctured, not that it is occluded. Inadequate collateral circulation would be indicated by a negative (abnormal) Allen test. The test does not evaluate for arteriovenous fistula.',
        topic: 'Arterial Blood Gas',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 5,
        questionText:
          'A 65-year-old patient with a history of smoking presents with a barrel chest, diminished breath sounds, and hyperresonance on percussion. The chest x-ray shows flattened diaphragms and increased AP diameter. Pulmonary function testing would most likely show which pattern?',
        choices: {
          A: 'Decreased TLC, decreased RV, normal FEV1/FVC',
          B: 'Normal TLC, normal RV, decreased DLCO',
          C: 'Increased TLC, increased RV, decreased FEV1/FVC ratio',
          D: 'Decreased TLC, increased RV, normal FEV1/FVC',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The clinical presentation is classic for emphysema (a form of COPD). PFTs in emphysema show obstructive changes: increased TLC and RV (from air trapping and hyperinflation), decreased FEV1/FVC ratio (from airflow obstruction), and often decreased DLCO.',
        explanationWrong:
          'Decreased TLC with normal FEV1/FVC suggests restrictive disease. Normal TLC with decreased DLCO alone is not specific to this clinical presentation. Decreased TLC with increased RV is contradictory and not consistent with any single disease pattern.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is preparing to administer a bland aerosol treatment using hypertonic saline (3%) to a patient with thick secretions. Which of the following is the primary expected therapeutic effect?',
        choices: {
          A: 'Bronchodilation of the smooth muscle',
          B: 'Stimulation of cough and thinning of secretions by drawing water into the airways',
          C: 'Reduction of airway inflammation',
          D: 'Prevention of atelectasis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hypertonic saline (3%) creates an osmotic gradient that draws water from the submucosal tissue into the airway lumen. This thins viscous secretions and stimulates cough, facilitating expectoration. It is commonly used for sputum induction and thick secretion mobilization.',
        explanationWrong:
          'Hypertonic saline may actually cause bronchospasm in some patients rather than bronchodilation. Anti-inflammatory effects are not a primary action of hypertonic saline. Prevention of atelectasis is better achieved with lung expansion therapies like incentive spirometry or CPAP.',
        topic: 'Aerosol Therapy',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is assisting with the initiation of extracorporeal membrane oxygenation (ECMO) for a patient with severe ARDS. Which ventilator strategy is recommended once venovenous ECMO is established?',
        choices: {
          A: 'Increase tidal volume to 10 mL/kg to promote lung expansion',
          B: 'Maintain current aggressive ventilator settings',
          C: 'Reduce ventilator settings to lung-rest strategy with low tidal volumes and pressures',
          D: 'Increase FiO2 to 1.0 and PEEP to 20 cm H2O',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Once VV-ECMO is providing gas exchange, the ventilator should be set to a lung-rest strategy to minimize ventilator-induced lung injury. This typically includes low tidal volumes (approximately 4 mL/kg or less), low plateau pressures, moderate PEEP, and reduced FiO2.',
        explanationWrong:
          'Increasing tidal volume to 10 mL/kg would worsen ventilator-induced lung injury. Maintaining aggressive settings defeats the purpose of ECMO as a bridge to lung recovery. Increasing FiO2 to 1.0 with high PEEP would contribute to oxygen toxicity and barotrauma.',
        topic: 'ECMO and Advanced Life Support',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is performing quality control on a blood gas analyzer. The control sample results fall outside the acceptable range for PaO2. Which action should the therapist take FIRST?',
        choices: {
          A: 'Run a new control sample to verify the results',
          B: 'Recalibrate the analyzer and then run patient samples',
          C: 'Report the analyzer as defective and send it for repair',
          D: 'Continue running patient samples and note the discrepancy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When quality control results fall outside the acceptable range, the first step is to run a new control sample to rule out a pre-analytical error (expired control, improper handling, or bubble in the sample). If the repeat control also fails, then further troubleshooting (recalibration, electrode maintenance) is warranted.',
        explanationWrong:
          'Recalibrating before verifying the control result may be premature if the issue was with the control sample itself. Reporting the analyzer as defective is premature without verification. Running patient samples on an analyzer that has failed quality control is unacceptable and could produce inaccurate results.',
        topic: 'Quality Control',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 9,
        questionText:
          'A patient with a tracheostomy is being evaluated for decannulation. Which of the following criteria would BEST indicate readiness for decannulation?',
        choices: {
          A: 'The patient tolerates capping of the tracheostomy tube for 24-48 hours without distress',
          B: 'The patient requires suctioning every 2 hours',
          C: 'The patient can speak with the cuff inflated',
          D: 'The tracheostomy has been in place for more than 30 days',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Tolerating tracheostomy tube capping for 24-48 hours demonstrates that the patient can breathe through the upper airway, protect the airway, manage secretions, and maintain adequate oxygenation and ventilation without the tracheostomy. This is the most reliable indicator of readiness for decannulation.',
        explanationWrong:
          'Requiring suctioning every 2 hours suggests the patient still has significant secretion production and may not be ready for decannulation. Speaking with the cuff inflated is not possible in normal circumstances and does not indicate readiness. Duration of tracheostomy placement alone does not determine readiness for removal.',
        topic: 'Tracheostomy Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is reviewing a patient\'s metabolic panel and notices a serum potassium level of 6.2 mEq/L. The patient is on a cardiac monitor. Which ECG change should the therapist look for that is associated with hyperkalemia?',
        choices: {
          A: 'Prolonged QT interval',
          B: 'ST segment depression',
          C: 'Tall, peaked T waves',
          D: 'Prominent U waves',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hyperkalemia (serum potassium greater than 5.5 mEq/L) characteristically produces tall, peaked (tented) T waves on the ECG. As potassium levels rise further, the PR interval prolongs, the P wave flattens, and the QRS complex widens, potentially leading to ventricular fibrillation.',
        explanationWrong:
          'Prolonged QT interval is associated with hypokalemia, hypomagnesemia, and certain medications. ST segment depression is associated with myocardial ischemia. Prominent U waves are associated with hypokalemia, not hyperkalemia.',
        topic: 'Electrolyte Monitoring',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 11,
        questionText:
          'A mechanically ventilated patient has the following waveform finding: the expiratory flow waveform does not return to zero baseline before the next breath is delivered. This finding is consistent with which condition?',
        choices: {
          A: 'Patient-ventilator synchrony',
          B: 'Excessive inspiratory time',
          C: 'Circuit leak',
          D: 'Auto-PEEP (air trapping)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When the expiratory flow waveform does not return to the zero baseline before the next inspiration, it indicates that exhalation is incomplete and air is being trapped. This is the graphic representation of auto-PEEP (intrinsic PEEP) and is commonly seen in patients with obstructive lung disease.',
        explanationWrong:
          'Patient-ventilator synchrony would show coordinated flow and pressure waveforms without premature flow interruption. Excessive inspiratory time would shorten expiratory time and could contribute to auto-PEEP but is a cause, not the waveform finding itself. A circuit leak would show a discrepancy between inspired and expired tidal volumes.',
        topic: 'Ventilator Graphics',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is educating a patient newly diagnosed with asthma on the use of a peak flow meter. The patient\'s personal best peak flow is 500 L/min. At what peak flow reading should the patient follow the "yellow zone" action plan?',
        choices: {
          A: 'Between 250 and 400 L/min (50-80% of personal best)',
          B: 'Below 250 L/min (less than 50% of personal best)',
          C: 'Above 400 L/min (greater than 80% of personal best)',
          D: 'Between 400 and 500 L/min (80-100% of personal best)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The asthma action plan uses a traffic light system based on personal best peak flow: green zone (80-100%), yellow zone (50-80%), and red zone (less than 50%). For a personal best of 500 L/min, the yellow zone is 250-400 L/min, indicating caution and the need to adjust medications.',
        explanationWrong:
          'Below 250 L/min (less than 50%) would place the patient in the red zone (medical emergency). Above 400 L/min is the green zone (well-controlled asthma). Between 400 and 500 L/min is within the green zone and indicates good control.',
        topic: 'Asthma Education',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is helping manage a patient receiving pressure-control ventilation. The exhaled tidal volume has decreased from 500 mL to 350 mL without any change in ventilator settings. What is the most likely cause?',
        choices: {
          A: 'Decreased airway resistance',
          B: 'Decreased lung compliance',
          C: 'Improved patient effort',
          D: 'Increased respiratory rate',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In pressure-control ventilation, the pressure is constant but the delivered tidal volume varies with changes in compliance and resistance. A decrease in tidal volume without changes in settings indicates decreased lung compliance (stiffer lungs), which could result from pneumothorax, atelectasis, pulmonary edema, or ARDS progression.',
        explanationWrong:
          'Decreased airway resistance would actually increase tidal volume delivery. Improved patient effort would increase, not decrease, the tidal volume. Increased respiratory rate alone does not explain decreased tidal volume unless it causes auto-PEEP.',
        topic: 'Mechanical Ventilation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is asked to recommend an aerosol delivery device for a patient who has poor hand-breath coordination and an inspiratory flow rate of less than 30 L/min. Which device is most appropriate?',
        choices: {
          A: 'Dry powder inhaler',
          B: 'Metered-dose inhaler with a valved holding chamber (spacer)',
          C: 'Metered-dose inhaler without a spacer',
          D: 'Breath-actuated dry powder inhaler',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A metered-dose inhaler with a valved holding chamber (spacer) eliminates the need for precise hand-breath coordination because the spacer holds the aerosol cloud until the patient inhales. It also works well with low inspiratory flows, unlike DPIs which require flows greater than 30 L/min.',
        explanationWrong:
          'A dry powder inhaler requires an inspiratory flow of at least 30-60 L/min to generate sufficient turbulent flow for drug dispersion. An MDI without a spacer requires precise hand-breath coordination. A breath-actuated DPI still requires adequate inspiratory flow rate.',
        topic: 'Aerosol Drug Delivery',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist notes that a patient on mechanical ventilation has a central venous pressure (CVP) of 2 mmHg, heart rate of 125 bpm, blood pressure of 80/50 mmHg, and cool, clammy skin. The urine output has been less than 20 mL/hr. These findings are most consistent with which condition?',
        choices: {
          A: 'Cardiogenic shock',
          B: 'Septic shock',
          C: 'Neurogenic shock',
          D: 'Hypovolemic shock',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Low CVP (indicating decreased preload), tachycardia, hypotension, cool/clammy skin (from vasoconstriction), and decreased urine output are the hallmark signs of hypovolemic shock. The body compensates with tachycardia and vasoconstriction to maintain perfusion to vital organs.',
        explanationWrong:
          'Cardiogenic shock typically presents with elevated CVP due to pump failure. Septic shock typically shows warm, flushed skin (in the hyperdynamic phase) with low SVR and normal or elevated CVP after fluid resuscitation. Neurogenic shock presents with bradycardia (not tachycardia) and warm, dry skin due to loss of sympathetic tone.',
        topic: 'Hemodynamic Assessment',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is caring for a patient receiving heliox therapy (70% helium / 30% oxygen) for severe upper airway obstruction. The flowmeter reads 10 L/min. What is the approximate actual flow being delivered?',
        choices: {
          A: 'Approximately 10 L/min',
          B: 'Approximately 7 L/min',
          C: 'Approximately 18 L/min',
          D: 'Approximately 14 L/min',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When using a standard oxygen flowmeter with 70/30 heliox, the actual flow is approximately 1.8 times the indicated flow because helium is less dense than oxygen. Therefore, 10 L/min indicated flow delivers approximately 18 L/min actual flow (10 x 1.8 = 18).',
        explanationWrong:
          '10 L/min would be correct only if using a heliox-calibrated flowmeter. 7 L/min and 14 L/min result from incorrect correction factors. The 1.8 correction factor applies to 70/30 heliox through an oxygen flowmeter.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is reviewing lab values for a patient in the ICU and notices a lactate level of 6.2 mmol/L (normal: less than 2 mmol/L). In the context of critical care, what does this elevated lactate most likely indicate?',
        choices: {
          A: 'Adequate tissue oxygenation',
          B: 'Tissue hypoperfusion and anaerobic metabolism',
          C: 'Respiratory alkalosis',
          D: 'Renal failure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Elevated serum lactate in critical care is primarily an indicator of tissue hypoperfusion and anaerobic metabolism. When tissues do not receive adequate oxygen, cells shift to anaerobic glycolysis, producing lactate as a byproduct. Serial lactate measurements are used to guide resuscitation efforts.',
        explanationWrong:
          'An elevated lactate indicates the opposite of adequate tissue oxygenation. While lactate can affect acid-base balance (metabolic acidosis), it does not indicate respiratory alkalosis. Renal failure can contribute to lactate accumulation but tissue hypoperfusion is the primary significance in the ICU setting.',
        topic: 'Laboratory Assessment',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 18,
        questionText:
          'During mechanical ventilation, the ventilator repeatedly triggers without the patient making an inspiratory effort. The sensitivity is set at -1 cm H2O (pressure trigger). What is the most likely cause?',
        choices: {
          A: 'The trigger sensitivity is set too aggressively',
          B: 'The patient is over-sedated',
          C: 'The PEEP level is too high',
          D: 'Auto-triggering due to a circuit leak or water in the circuit',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Auto-triggering (ventilator delivering breaths without patient effort) is commonly caused by circuit leaks or water accumulation in the ventilator circuit. These create small pressure fluctuations that the ventilator interprets as patient inspiratory effort, especially with a sensitive trigger setting of -1 cm H2O.',
        explanationWrong:
          'While -1 cm H2O is a sensitive setting, the primary issue is auto-triggering from circuit problems. An over-sedated patient would have reduced respiratory drive but this would not cause the ventilator to auto-trigger. Excessive PEEP does not typically cause auto-triggering.',
        topic: 'Ventilator Troubleshooting',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is calculating the alveolar-arterial oxygen gradient (A-a gradient) for a patient breathing room air at sea level. The ABG shows: pH 7.40, PaCO2 40 mmHg, PaO2 60 mmHg. What is the approximate A-a gradient?',
        choices: {
          A: '40 mmHg',
          B: '50 mmHg',
          C: '60 mmHg',
          D: '10 mmHg',
        },
        correctChoice: 'A',
        explanationCorrect:
          'PAO2 = (FiO2 x [Patm - PH2O]) - (PaCO2 / 0.8) = (0.21 x [760 - 47]) - (40 / 0.8) = (0.21 x 713) - 50 = 150 - 50 = 100 mmHg. A-a gradient = PAO2 - PaO2 = 100 - 60 = 40 mmHg. This is elevated (normal is less than 15 mmHg for this age), indicating a gas exchange abnormality.',
        explanationWrong:
          '50 mmHg, 60 mmHg, and 10 mmHg result from errors in the alveolar gas equation calculation. The correct PAO2 is 100 mmHg, making the A-a gradient 40 mmHg.',
        topic: 'Blood Gas Calculations',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is providing discharge education to a patient with a new home oxygen concentrator. The patient asks how the device works. Which explanation is most accurate?',
        choices: {
          A: 'It stores compressed oxygen in an internal cylinder',
          B: 'It electrolyzes water to produce pure oxygen',
          C: 'It uses molecular sieve beds to adsorb nitrogen from room air, concentrating the oxygen',
          D: 'It separates oxygen from nitrogen using a semipermeable membrane',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Oxygen concentrators use pressure swing adsorption with zeolite molecular sieve beds that selectively adsorb nitrogen from room air. As air passes through the sieve bed, nitrogen is trapped while oxygen passes through, producing a concentrated oxygen output of 90-96%.',
        explanationWrong:
          'Oxygen concentrators do not store compressed oxygen; they produce it on demand from room air. Water electrolysis is an industrial process, not used in home concentrators. Membrane separation technology exists but is not the primary mechanism used in standard home oxygen concentrators.',
        topic: 'Home Oxygen Equipment',
      },
    ],
  })

  // ─── EXAM 29 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1A,2C,3D,4B,5D,6A,7C,8B,9A,10D,11C,12B,13A,14D,15B,16C,17D,18B,19A,20C
  const exam29 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 29',
      examIndex: 29,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam29.id,
        questionIndex: 1,
        questionText:
          'A respiratory therapist is assessing a patient who has been receiving mechanical ventilation for 7 days. The patient develops a new fever of 38.9°C, purulent tracheal secretions, and a new infiltrate on chest x-ray. The white blood cell count is 14,000/mm³. Which condition should the therapist suspect?',
        choices: {
          A: 'Ventilator-associated pneumonia (VAP)',
          B: 'Pulmonary embolism',
          C: 'Acute respiratory distress syndrome',
          D: 'Congestive heart failure exacerbation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ventilator-associated pneumonia (VAP) is defined as pneumonia developing after 48 hours of mechanical ventilation. The clinical criteria include new or progressive radiographic infiltrate plus at least two of: fever greater than 38°C, leukocytosis, and purulent secretions. This patient meets all criteria.',
        explanationWrong:
          'Pulmonary embolism typically presents with sudden dyspnea, chest pain, and hemodynamic changes, not purulent secretions. ARDS presents with bilateral infiltrates and acute hypoxemia but not typically with fever and purulent secretions as the presenting features. CHF exacerbation causes bilateral pulmonary edema with pink frothy sputum, not purulent secretions.',
        topic: 'Ventilator-Associated Infections',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is administering a methacholine challenge test to a patient with suspected asthma. The test is considered positive when the FEV1 decreases by what percentage from baseline?',
        choices: {
          A: 'At least 10%',
          B: 'At least 30%',
          C: 'At least 20%',
          D: 'At least 40%',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A methacholine challenge test is considered positive (indicating bronchial hyperresponsiveness) when the FEV1 decreases by 20% or more from baseline. The concentration of methacholine that produces this response is called the PC20 (provocative concentration causing a 20% fall in FEV1).',
        explanationWrong:
          'A 10% decrease is not considered clinically significant for a positive methacholine challenge. A 30% or 40% decrease would be overly stringent criteria. The internationally accepted standard is a 20% decline in FEV1.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is assisting with the management of a patient who overdosed on opioids. The patient has a respiratory rate of 6/min, pinpoint pupils, and is unresponsive. The ABG shows pH 7.18, PaCO2 80 mmHg, PaO2 45 mmHg. In addition to airway management and ventilation, which medication should be administered?',
        choices: {
          A: 'Flumazenil',
          B: 'Activated charcoal',
          C: 'Epinephrine',
          D: 'Naloxone (Narcan)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Naloxone (Narcan) is the specific opioid antagonist that reverses the respiratory depression caused by opioid overdose. It competitively binds to opioid receptors, rapidly reversing the effects of opioids including respiratory depression, sedation, and miosis.',
        explanationWrong:
          'Flumazenil is the reversal agent for benzodiazepine overdose, not opioids. Activated charcoal may reduce absorption of oral ingestions but does not reverse the effects of opioids already in the system. Epinephrine is used for cardiac arrest and anaphylaxis but is not the specific antidote for opioid overdose.',
        topic: 'Emergency Pharmacology',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 4,
        questionText:
          'A respiratory therapist is managing a patient on volume-control ventilation. The patient is agitated and has dyssynchronous breathing. The therapist observes that the patient\'s inspiratory efforts are not triggering the ventilator. Which adjustment would improve patient-ventilator synchrony?',
        choices: {
          A: 'Increase the set tidal volume',
          B: 'Increase the trigger sensitivity (make it more sensitive)',
          C: 'Increase the set respiratory rate',
          D: 'Decrease the PEEP level',
        },
        correctChoice: 'B',
        explanationCorrect:
          'If the patient\'s inspiratory efforts are not triggering the ventilator, the trigger sensitivity is set too low (too insensitive). Increasing the trigger sensitivity (making it more sensitive) allows the ventilator to detect the patient\'s inspiratory effort and deliver a breath, improving synchrony.',
        explanationWrong:
          'Increasing tidal volume does not address the trigger issue. Increasing the set respiratory rate adds mandatory breaths but does not allow the patient to trigger breaths on their own. Decreasing PEEP would not directly address the trigger sensitivity problem.',
        topic: 'Ventilator Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is managing a pediatric patient with epiglottitis. Which of the following actions is CONTRAINDICATED in the initial management?',
        choices: {
          A: 'Administering humidified oxygen',
          B: 'Keeping the child in a position of comfort',
          C: 'Preparing emergency airway equipment',
          D: 'Examining the oropharynx with a tongue depressor',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Using a tongue depressor to examine the oropharynx in a child with suspected epiglottitis is absolutely contraindicated because it can trigger complete laryngospasm and total airway obstruction. The diagnosis should be confirmed by lateral neck x-ray or direct visualization only in a controlled setting (operating room).',
        explanationWrong:
          'Humidified oxygen, maintaining a position of comfort, and preparing emergency airway equipment are all appropriate initial management steps for epiglottitis. The child should be kept calm and undisturbed as much as possible.',
        topic: 'Pediatric Emergency',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is titrating PEEP on a patient with ARDS. As the PEEP is increased from 10 to 15 cm H2O, the SpO2 improves from 88% to 95% but the blood pressure drops from 120/80 to 85/55 mmHg. What is the most likely explanation?',
        choices: {
          A: 'The increased intrathoracic pressure from higher PEEP is decreasing venous return and cardiac output',
          B: 'The patient is developing a pneumothorax',
          C: 'The PEEP is causing auto-triggering of the ventilator',
          D: 'The patient needs more IV sedation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Increased PEEP raises intrathoracic pressure, which decreases venous return to the right heart, reducing preload and subsequently cardiac output. This is a well-known hemodynamic consequence of PEEP. The clinician must balance improved oxygenation with hemodynamic stability.',
        explanationWrong:
          'While a pneumothorax is possible, the SpO2 improvement argues against it; a pneumothorax would typically worsen oxygenation. PEEP does not cause auto-triggering. The need for sedation does not explain the relationship between PEEP increase and hypotension.',
        topic: 'PEEP Physiology',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is evaluating a patient\'s chest x-ray and notes a radiopaque area in the right costophrenic angle with a meniscus sign. What does this finding most likely represent?',
        choices: {
          A: 'Pneumothorax',
          B: 'Consolidation',
          C: 'Pleural effusion',
          D: 'Atelectasis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A radiopaque (white) area in the costophrenic angle with a meniscus sign (upward curving at the lateral edge) is the classic chest x-ray appearance of a pleural effusion. Fluid collects in the dependent areas of the pleural space, blunting the costophrenic angle.',
        explanationWrong:
          'Pneumothorax appears as a radiolucent (dark) area without lung markings. Consolidation appears as opacification within the lung parenchyma, often with air bronchograms. Atelectasis shows volume loss with shifting of fissures or mediastinum toward the affected side.',
        topic: 'Radiographic Interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is preparing to perform a bedside spirometry test. To ensure accurate results, how many acceptable and reproducible efforts must the patient perform?',
        choices: {
          A: 'At least 1 acceptable effort',
          B: 'At least 3 acceptable efforts with 2 reproducible within 150 mL',
          C: 'At least 5 acceptable efforts',
          D: 'At least 2 acceptable efforts with 1 reproducible within 200 mL',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to ATS/ERS standards, spirometry requires at least 3 acceptable maneuvers, and the two largest FVC and FEV1 values must be reproducible within 150 mL of each other. A maximum of 8 attempts is typically recommended.',
        explanationWrong:
          'One acceptable effort is insufficient to demonstrate reproducibility. Five efforts are not required as the minimum standard. Two efforts with 200 mL reproducibility does not meet ATS/ERS standards for acceptability and reproducibility.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is reviewing the care plan for a patient with cystic fibrosis. The patient has been receiving tobramycin via nebulization. What is the primary reason for alternating months of tobramycin therapy (28 days on, 28 days off)?',
        choices: {
          A: 'To reduce the development of antibiotic-resistant bacteria',
          B: 'To minimize cost of the medication',
          C: 'To prevent fluid overload from the nebulized solution',
          D: 'To allow recovery from bronchospasm caused by the drug',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Alternating tobramycin therapy (28 days on, 28 days off) is the standard dosing regimen for inhaled tobramycin in cystic fibrosis. The primary rationale is to reduce the emergence of antibiotic-resistant Pseudomonas aeruginosa strains while maintaining clinical benefit.',
        explanationWrong:
          'While cost is a consideration, it is not the primary reason for the alternating schedule. Fluid overload is not a concern with nebulized medications. While bronchospasm can occur with inhaled tobramycin, a 28-day recovery period is not the rationale for the dosing cycle.',
        topic: 'Cystic Fibrosis Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is assessing a mechanically ventilated patient and suspects the endotracheal tube cuff has a slow leak. Which finding would confirm this suspicion?',
        choices: {
          A: 'Increased peak inspiratory pressure',
          B: 'Absence of an audible air leak during positive pressure ventilation',
          C: 'Increased measured exhaled tidal volume',
          D: 'An audible air leak and a difference between set and measured exhaled tidal volumes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A cuff leak is confirmed by hearing an audible air leak during positive pressure ventilation and observing that the measured exhaled tidal volume is lower than the set (inspired) tidal volume. The difference represents the volume of gas escaping around the deflated cuff.',
        explanationWrong:
          'Peak inspiratory pressure would decrease (not increase) with a cuff leak because gas escapes around the cuff. Absence of an air leak would indicate the cuff is intact. Increased exhaled tidal volume would not occur with a leak; the exhaled volume would be decreased.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is caring for a patient with a spinal cord injury at the C4 level. Which of the following best describes the expected impact on this patient\'s ventilatory function?',
        choices: {
          A: 'Normal ventilatory function because the injury is above the phrenic nerve',
          B: 'Loss of intercostal and abdominal muscle function only',
          C: 'Loss of abdominal muscle function only',
          D: 'Loss of diaphragmatic, intercostal, and abdominal muscle function requiring mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The phrenic nerve originates from C3-C5. A C4 spinal cord injury may partially or completely interrupt phrenic nerve function, causing diaphragmatic paralysis. All intercostal (T1-T12) and abdominal muscles are also lost. Most C4 quadriplegic patients require mechanical ventilation.',
        explanationWrong:
          'A C4 injury affects phrenic nerve function (C3-C5), so ventilatory function is not normal. The injury affects more than just intercostal and abdominal muscles; it also impairs diaphragmatic function. Loss of abdominal muscle function only would be seen with lower thoracic or lumbar injuries.',
        topic: 'Neuromuscular Conditions',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is asked to assist with a thoracentesis. What position should the patient be placed in for the procedure?',
        choices: {
          A: 'Supine with the head elevated 30 degrees',
          B: 'Sitting upright, leaning slightly forward with arms supported',
          C: 'Lateral decubitus on the affected side',
          D: 'Prone position',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ideal position for thoracentesis is sitting upright and leaning slightly forward with arms supported on a bedside table. This position allows fluid to collect in the dependent portion of the pleural space and provides the best access to the posterior-lateral chest wall.',
        explanationWrong:
          'Supine with head elevated is not optimal for fluid collection in the posterior pleural space. Lateral decubitus on the affected side would move fluid to the dependent chest wall, away from the insertion site. Prone position is not used for thoracentesis.',
        topic: 'Clinical Procedures',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is reviewing the arterial blood gas of a patient with diabetic ketoacidosis: pH 7.22, PaCO2 18 mmHg, HCO3 8 mEq/L, PaO2 98 mmHg. Which description best characterizes this acid-base disturbance?',
        choices: {
          A: 'Partially compensated metabolic acidosis',
          B: 'Uncompensated respiratory acidosis',
          C: 'Fully compensated metabolic acidosis',
          D: 'Combined metabolic and respiratory acidosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The pH is acidotic (7.22), HCO3 is severely low (8 mEq/L) indicating metabolic acidosis as the primary disturbance, and the PaCO2 is significantly reduced (18 mmHg) showing respiratory compensation (hyperventilation). Because the pH has not returned to normal range, this is partially compensated metabolic acidosis.',
        explanationWrong:
          'This is not respiratory acidosis because the PaCO2 is low, not high. It is not fully compensated because the pH is still well outside the normal range. It is not a combined acidosis because the low PaCO2 indicates compensation, not a primary respiratory acidosis.',
        topic: 'Blood Gas Interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is managing a patient who has just received a lung transplant. Which immunosuppressive complication should the therapist be MOST vigilant for in the post-operative period?',
        choices: {
          A: 'Hypertension',
          B: 'Weight gain',
          C: 'Hyperglycemia',
          D: 'Opportunistic pulmonary infections',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Lung transplant patients receive intensive immunosuppressive therapy to prevent organ rejection. This immunosuppression significantly increases the risk of opportunistic pulmonary infections (fungal, viral, bacterial) which are a leading cause of morbidity and mortality. The respiratory therapist must be vigilant for signs of infection.',
        explanationWrong:
          'While hypertension, weight gain, and hyperglycemia are side effects of immunosuppressive medications (particularly corticosteroids), opportunistic pulmonary infections are the most life-threatening concern for the respiratory therapist to monitor in the post-transplant period.',
        topic: 'Transplant Medicine',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is assessing a patient with suspected carbon monoxide poisoning. The pulse oximetry reads 98%. Why might this reading be unreliable?',
        choices: {
          A: 'Carbon monoxide causes peripheral vasoconstriction',
          B: 'Standard pulse oximeters cannot distinguish between oxyhemoglobin and carboxyhemoglobin',
          C: 'Carbon monoxide increases methemoglobin levels',
          D: 'Pulse oximeters do not function during tachycardia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Standard pulse oximeters use two wavelengths of light and cannot differentiate between oxyhemoglobin (HbO2) and carboxyhemoglobin (COHb). Both absorb light similarly at the wavelengths used, so the SpO2 reading appears falsely normal or elevated despite significant carbon monoxide binding to hemoglobin.',
        explanationWrong:
          'Carbon monoxide does not primarily cause peripheral vasoconstriction affecting oximetry readings. CO does not significantly increase methemoglobin levels; methemoglobin is a separate condition. Pulse oximeters can function during tachycardia, though signal quality may vary.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is providing mechanical ventilation to a patient with a severe head injury. The physician requests the PaCO2 be maintained between 35-40 mmHg. What is the primary reason for this ventilation target?',
        choices: {
          A: 'To prevent oxygen toxicity',
          B: 'To maximize cerebral blood flow',
          C: 'To maintain normal intracranial pressure by preventing cerebral vasodilation from hypercapnia',
          D: 'To prevent metabolic acidosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In traumatic brain injury, maintaining PaCO2 in the normal range (35-40 mmHg) prevents cerebral vasodilation that occurs with hypercapnia. CO2 is a potent cerebral vasodilator; elevated PaCO2 increases cerebral blood volume and can dangerously elevate intracranial pressure.',
        explanationWrong:
          'PaCO2 management does not relate to oxygen toxicity. Maximizing cerebral blood flow is not the goal; the goal is to maintain normal cerebral blood flow and prevent elevated ICP. While acid-base balance is considered, the primary concern is intracranial pressure management.',
        topic: 'Neurological Critical Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is caring for a 2-month-old infant diagnosed with bronchiolitis caused by RSV. The infant has moderate respiratory distress with nasal flaring and subcostal retractions. SpO2 is 90% on room air. Which intervention is most appropriate?',
        choices: {
          A: 'Intubation and mechanical ventilation',
          B: 'Nebulized albuterol treatments every 4 hours',
          C: 'Supplemental oxygen and supportive care with close monitoring',
          D: 'Inhaled corticosteroids via MDI with spacer and mask',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The primary management of bronchiolitis in infants is supportive care including supplemental oxygen to maintain SpO2 above 90%, ensuring adequate hydration, and close monitoring. Clinical guidelines do not support routine use of bronchodilators or corticosteroids for RSV bronchiolitis.',
        explanationWrong:
          'Intubation is reserved for severe respiratory failure and is not warranted at this time. Nebulized albuterol is not recommended as routine treatment for bronchiolitis as evidence does not support its benefit. Inhaled corticosteroids are not effective for acute RSV bronchiolitis.',
        topic: 'Pediatric Respiratory Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is asked to recommend a ventilator mode for a patient with severe COPD who has difficulty triggering the ventilator due to auto-PEEP. Which intervention would be most effective?',
        choices: {
          A: 'Switch from pressure triggering to time-cycled ventilation only',
          B: 'Apply external PEEP set at approximately 75-80% of the measured auto-PEEP level',
          C: 'Increase the flow rate to shorten inspiratory time',
          D: 'Use inverse ratio ventilation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Applying external (applied) PEEP at approximately 75-80% of the measured auto-PEEP level reduces the pressure gradient the patient must overcome to trigger the ventilator. This effectively counterbalances the auto-PEEP without significantly increasing total PEEP or causing further hyperinflation.',
        explanationWrong:
          'Switching to time-cycled only ventilation removes the patient\'s ability to trigger breaths and worsens synchrony. While increasing flow rate can help, it does not directly address the triggering difficulty caused by auto-PEEP. Inverse ratio ventilation prolongs inspiratory time and would worsen air trapping in COPD.',
        topic: 'Advanced Ventilator Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is participating in a multidisciplinary rounds discussion about a patient on prolonged mechanical ventilation. The team is considering performing a tracheostomy. Which of the following is an accepted advantage of tracheostomy over prolonged endotracheal intubation?',
        choices: {
          A: 'Improved patient comfort, facilitated oral care, and potential for oral nutrition',
          B: 'Elimination of the risk of ventilator-associated pneumonia',
          C: 'Elimination of the need for suctioning',
          D: 'Guaranteed shorter duration of mechanical ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Tracheostomy offers several advantages over prolonged endotracheal intubation including improved patient comfort, reduced sedation needs, facilitated oral hygiene and care, ability to eat orally (with proper assessment), easier airway suctioning, and potentially improved communication with speaking valves.',
        explanationWrong:
          'Tracheostomy does not eliminate VAP risk; it may reduce it but does not eliminate it. Suctioning is still required with a tracheostomy. A tracheostomy does not guarantee shorter ventilation duration; outcomes depend on the underlying condition.',
        topic: 'Interdisciplinary Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist receives an order for continuous pulse oximetry monitoring on a patient receiving a blood transfusion. During the transfusion, the SpO2 drops from 97% to 88% and the patient develops fever, chills, and dyspnea. What should the therapist recommend?',
        choices: {
          A: 'Slow the transfusion rate and recheck the SpO2 in 15 minutes',
          B: 'Administer diphenhydramine and continue the transfusion',
          C: 'Stop the transfusion immediately and notify the physician',
          D: 'Increase supplemental oxygen and continue the transfusion',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The combination of SpO2 drop, fever, chills, and dyspnea during a blood transfusion suggests a transfusion reaction. The transfusion must be stopped immediately, the IV line kept open with normal saline, and the physician notified. The blood bank should be notified and the remaining blood returned for analysis.',
        explanationWrong:
          'Slowing the rate is inadequate for a suspected transfusion reaction; the transfusion must be stopped. Administering diphenhydramine and continuing the transfusion could worsen a potentially life-threatening reaction. Increasing oxygen without stopping the transfusion does not address the underlying cause.',
        topic: 'Patient Safety',
      },
    ],
  })

  // ─── EXAM 30 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1B,2A,3C,4D,5B,6C,7A,8D,9C,10B,11A,12D,13C,14B,15A,16D,17B,18A,19D,20C
  const exam30 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 30',
      examIndex: 30,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam30.id,
        questionIndex: 1,
        questionText:
          'A respiratory therapist is called to evaluate a post-operative patient who is receiving PCA (patient-controlled analgesia) with morphine. The patient has a respiratory rate of 8/min, is somnolent, and SpO2 is 85% on 2 L/min nasal cannula. What should the therapist do FIRST?',
        choices: {
          A: 'Increase the nasal cannula to 6 L/min',
          B: 'Stop the PCA pump and stimulate the patient',
          C: 'Call a code blue immediately',
          D: 'Obtain an arterial blood gas',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The patient is exhibiting signs of opioid-induced respiratory depression. The immediate first action is to stop the PCA pump to prevent further opioid delivery and stimulate the patient to encourage breathing. Naloxone should be prepared and the physician notified.',
        explanationWrong:
          'Simply increasing oxygen flow does not address the respiratory depression from opioids and may further mask the problem. A code blue is premature as the patient still has a pulse and respiratory effort. An ABG, while useful, should not delay the immediate intervention of stopping the opioid infusion.',
        topic: 'Post-Operative Care',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is assessing a patient on BiPAP with settings of IPAP 14 cm H2O and EPAP 6 cm H2O. What is the effective pressure support being delivered?',
        choices: {
          A: '8 cm H2O',
          B: '14 cm H2O',
          C: '20 cm H2O',
          D: '6 cm H2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The effective pressure support in BiPAP is the difference between IPAP and EPAP: 14 - 6 = 8 cm H2O. This pressure difference is what assists the patient\'s inspiratory effort, similar to pressure support ventilation on a mechanical ventilator.',
        explanationWrong:
          '14 cm H2O is the total IPAP, not the pressure support above EPAP. 20 cm H2O incorrectly adds IPAP and EPAP. 6 cm H2O is the EPAP (equivalent to PEEP), not the pressure support.',
        topic: 'Non-Invasive Ventilation',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is caring for a patient with a pulmonary artery catheter in place. The PCWP tracing shows large V waves. This finding is most consistent with which condition?',
        choices: {
          A: 'Tricuspid stenosis',
          B: 'Pulmonary embolism',
          C: 'Mitral regurgitation',
          D: 'Aortic stenosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Large V waves on the PCWP tracing indicate regurgitation of blood back through the mitral valve during ventricular systole. Mitral regurgitation causes elevated pressure in the left atrium and pulmonary vasculature, producing prominent V waves on the PCWP waveform.',
        explanationWrong:
          'Tricuspid stenosis would affect right-sided pressures (CVP), not the PCWP tracing. Pulmonary embolism causes elevated pulmonary artery pressures but does not typically produce large V waves on PCWP. Aortic stenosis affects left ventricular outflow and does not directly cause V waves on the PCWP tracing.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 4,
        questionText:
          'A respiratory therapist is assessing a patient who recently had a thoracic surgical procedure. The patient complains of sudden shortness of breath, and the therapist notes tracheal deviation toward the unaffected side, distended neck veins, and absent breath sounds on the affected side. What emergency intervention is required?',
        choices: {
          A: 'Emergency bronchoscopy',
          B: 'Intubation and mechanical ventilation',
          C: 'Administration of IV furosemide',
          D: 'Immediate needle decompression followed by chest tube insertion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The findings of tracheal deviation away from the affected side, distended neck veins, absent breath sounds, and acute dyspnea are classic signs of tension pneumothorax, a life-threatening emergency. Immediate needle decompression at the 2nd intercostal space, midclavicular line, followed by chest tube insertion, is the required treatment.',
        explanationWrong:
          'Bronchoscopy is not the treatment for tension pneumothorax. Intubation addresses airway management but does not decompress the pleural space. IV furosemide treats fluid overload, not pneumothorax.',
        topic: 'Emergency Procedures',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is reviewing a mixed venous blood gas obtained from the distal port of a pulmonary artery catheter. The SvO2 is 55% (normal: 60-80%). What does this value indicate?',
        choices: {
          A: 'Normal oxygen delivery and consumption',
          B: 'Increased oxygen extraction by the tissues',
          C: 'Decreased metabolic demand',
          D: 'Excessive oxygen delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A low SvO2 (below 60%) indicates that the tissues are extracting more oxygen than normal from the blood. This can result from decreased cardiac output, decreased hemoglobin, decreased SaO2, or increased oxygen consumption (fever, shivering, sepsis). The tissues are receiving less oxygen than they need.',
        explanationWrong:
          'Normal oxygen balance would produce an SvO2 of 60-80%. A low SvO2 indicates the opposite of decreased metabolic demand; it suggests demand exceeds supply. Excessive oxygen delivery would produce an elevated SvO2, not a decreased one.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is educating a patient with COPD about pursed-lip breathing. Which physiological effect primarily explains the benefit of this technique?',
        choices: {
          A: 'It increases inspiratory muscle strength',
          B: 'It increases tidal volume by stimulating chemoreceptors',
          C: 'It creates back-pressure that splints the airways open during expiration, reducing air trapping',
          D: 'It reduces dead space ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pursed-lip breathing creates positive pressure in the airways during expiration, similar to PEEP. This back-pressure splints the unstable, floppy airways open in COPD patients, preventing premature airway collapse and reducing air trapping. It helps the patient exhale more completely.',
        explanationWrong:
          'Pursed-lip breathing does not directly increase inspiratory muscle strength. It does not stimulate chemoreceptors to increase tidal volume. While it may improve gas exchange, the primary mechanism is not reduction of dead space ventilation.',
        topic: 'Patient Education',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is preparing to perform an ABG on a patient receiving heparin therapy. After performing the arterial puncture and obtaining the sample, what is the minimum recommended time for holding pressure on the puncture site?',
        choices: {
          A: 'At least 5 minutes, or longer due to anticoagulation therapy',
          B: 'At least 1 minute',
          C: 'At least 2 minutes',
          D: 'At least 30 seconds',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After arterial puncture, pressure should be applied for at least 5 minutes (3-5 minutes minimum for patients with normal coagulation). For patients on anticoagulant therapy such as heparin, pressure should be held for even longer (up to 10-15 minutes) to ensure adequate hemostasis.',
        explanationWrong:
          '1 minute, 2 minutes, and 30 seconds are all insufficient, especially for a patient on anticoagulation therapy. Inadequate pressure holding can lead to hematoma formation, which is a significant complication of arterial puncture.',
        topic: 'Arterial Blood Gas Procedure',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is monitoring a patient receiving mechanical ventilation and notes that the inspiratory flow waveform shows a decelerating (descending ramp) pattern. This flow pattern is characteristic of which ventilator mode?',
        choices: {
          A: 'Volume-control with constant flow',
          B: 'SIMV without pressure support',
          C: 'CPAP mode',
          D: 'Pressure-control ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A decelerating (descending ramp) inspiratory flow pattern is characteristic of pressure-control ventilation. In pressure-control, the ventilator delivers a set pressure, and flow is highest at the beginning of inspiration (when the pressure gradient is greatest) and decelerates as the lungs fill and the gradient decreases.',
        explanationWrong:
          'Volume-control with constant flow produces a square (rectangular) flow waveform. SIMV without pressure support would show square flow waveforms for mandatory breaths. CPAP mode is a spontaneous breathing mode and does not produce mandatory inspiratory flow waveforms.',
        topic: 'Ventilator Graphics',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is asked to recommend the appropriate size endotracheal tube for an 8-year-old child. Using the standard age-based formula, what internal diameter should be selected?',
        choices: {
          A: '4.0 mm',
          B: '5.5 mm',
          C: '4.5 mm',
          D: '6.5 mm',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The standard formula for uncuffed ETT size in children over 2 years is: (age in years / 4) + 4 = (8 / 4) + 4 = 2 + 4 = 6.0 mm. For cuffed tubes, subtract 0.5 mm = 5.5 mm. Current practice favors cuffed tubes in children, making 5.5 mm the most appropriate answer.',
        explanationWrong:
          '4.0 mm is too small for an 8-year-old and would be appropriate for a much younger child. 4.5 mm is also too small. 6.5 mm is too large and could cause airway trauma.',
        topic: 'Pediatric Airway Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is providing education to nursing staff about proper infection control practices when caring for a patient on a mechanical ventilator. Which of the following is the MOST important measure to prevent ventilator-associated pneumonia?',
        choices: {
          A: 'Changing the ventilator circuit every 24 hours',
          B: 'Performing hand hygiene before and after patient contact',
          C: 'Using sterile water in heated humidifiers',
          D: 'Administering prophylactic antibiotics',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hand hygiene is consistently identified as the single most important measure for preventing healthcare-associated infections including VAP. Proper hand washing or use of alcohol-based hand sanitizer before and after patient contact significantly reduces pathogen transmission.',
        explanationWrong:
          'Routine ventilator circuit changes are no longer recommended and do not reduce VAP rates. Sterile water in humidifiers is a component of VAP prevention but is less impactful than hand hygiene. Prophylactic antibiotics are not recommended for VAP prevention and may promote antibiotic resistance.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is assessing a patient who has undergone a right pneumonectomy. When performing chest auscultation, which finding is expected on the right side?',
        choices: {
          A: 'Absent breath sounds',
          B: 'Bronchial breath sounds',
          C: 'Fine inspiratory crackles',
          D: 'Normal vesicular breath sounds',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After pneumonectomy (surgical removal of an entire lung), breath sounds will be completely absent on the operative side because there is no lung tissue remaining. The postpneumonectomy space gradually fills with fluid over time.',
        explanationWrong:
          'Bronchial breath sounds require air movement through airways, which does not occur after lung removal. Fine crackles indicate fluid or fibrosis in lung tissue, which has been removed. Normal vesicular breath sounds are impossible without functioning lung parenchyma.',
        topic: 'Post-Surgical Assessment',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is evaluating a patient with suspected obstructive sleep apnea who weighs 140 kg. The physician orders CPAP titration. At what pressure should the CPAP titration typically begin?',
        choices: {
          A: 'At the highest tolerated pressure',
          B: 'At 10 cm H2O',
          C: 'At 15 cm H2O due to the patient\'s obesity',
          D: 'At 4-5 cm H2O and titrate upward as needed',
        },
        correctChoice: 'D',
        explanationCorrect:
          'CPAP titration during polysomnography should begin at 4-5 cm H2O and be gradually increased in increments of 1-2 cm H2O as needed to eliminate obstructive events (apneas, hypopneas, and snoring). This approach identifies the minimum effective pressure while maximizing patient comfort.',
        explanationWrong:
          'Starting at the highest tolerated pressure is not evidence-based and may be unnecessarily uncomfortable. Starting at 10 cm H2O skips the titration process and may overshoot the needed pressure. Starting at 15 cm H2O based solely on weight does not follow titration protocols.',
        topic: 'Sleep Medicine',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is caring for a patient receiving mechanical ventilation who suddenly develops a high-pressure alarm. The therapist notes the patient is coughing and the ventilator is unable to deliver the set tidal volume. After suctioning produces a large mucus plug, pressures return to baseline. Which documentation entry is most appropriate?',
        choices: {
          A: 'High-pressure alarm caused by equipment malfunction',
          B: 'Patient needed routine suctioning per protocol',
          C: 'High-pressure alarm triggered by mucus plugging; resolved after suctioning with return of normal pressures and tidal volume delivery',
          D: 'Patient was non-compliant with ventilator',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Documentation should accurately and completely describe the event: the alarm (high-pressure), the cause identified (mucus plugging), the intervention performed (suctioning), and the outcome (return of normal pressures and tidal volume delivery). This provides a clear clinical picture for other providers.',
        explanationWrong:
          'Stating equipment malfunction is inaccurate; the ventilator functioned properly by alarming. Describing the suctioning as routine does not capture the clinical event or its urgency. Describing the patient as non-compliant is inaccurate and does not reflect the actual cause.',
        topic: 'Documentation and Communication',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is preparing to administer aerosolized pentamidine for Pneumocystis jirovecii pneumonia (PCP) prophylaxis. Which type of nebulizer is specifically recommended for this medication?',
        choices: {
          A: 'Standard small-volume jet nebulizer',
          B: 'Ultrasonic nebulizer',
          C: 'Respirgard II nebulizer with expiratory filter and negative pressure room',
          D: 'Vibrating mesh nebulizer',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Aerosolized pentamidine should be delivered using a Respirgard II nebulizer system, which includes one-way valves and an expiratory filter to capture exhaled pentamidine particles. Administration should occur in a negative pressure room or with adequate environmental controls to protect healthcare workers from exposure.',
        explanationWrong:
          'A standard small-volume nebulizer does not contain the environmental safeguards needed for pentamidine delivery. Ultrasonic nebulizers are not recommended for pentamidine due to medication degradation concerns. Vibrating mesh nebulizers are not the standard device for pentamidine administration.',
        topic: 'Aerosol Therapy Safety',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is reviewing the results of a nitrogen washout test. The closing volume is reported as 35% of the vital capacity. This elevated closing volume is most commonly associated with which condition?',
        choices: {
          A: 'Early small airway disease or aging',
          B: 'Large airway obstruction',
          C: 'Pleural effusion',
          D: 'Chest wall deformity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An elevated closing volume (greater than 20% of vital capacity) indicates premature closure of small airways during expiration. This is most commonly associated with early small airway disease (such as early COPD from smoking) and normal aging, as both cause loss of elastic recoil and small airway instability.',
        explanationWrong:
          'Large airway obstruction affects central airways and is better detected by flow-volume loops. Pleural effusion is a restrictive process that does not specifically affect closing volume. Chest wall deformities cause restrictive patterns but do not primarily affect small airway closure.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is called to assist with a difficult airway situation. After two failed intubation attempts, the patient cannot be ventilated with a bag-valve-mask. According to the difficult airway algorithm, what is the next step?',
        choices: {
          A: 'Attempt intubation a third time with a larger blade',
          B: 'Insert a nasopharyngeal airway and retry bag-valve-mask',
          C: 'Wait for a more experienced provider',
          D: 'Perform an emergency surgical airway (cricothyrotomy)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A "cannot intubate, cannot oxygenate" (CICO) situation is a life-threatening emergency. When both intubation and mask ventilation have failed, the difficult airway algorithm calls for an emergency surgical airway (cricothyrotomy) as the definitive rescue intervention to establish oxygenation.',
        explanationWrong:
          'A third intubation attempt with a larger blade risks further airway trauma and delays definitive airway management. A nasopharyngeal airway may help but does not constitute a definitive airway in a CICO scenario. Waiting for another provider is inappropriate when the patient cannot be oxygenated; immediate action is required.',
        topic: 'Emergency Airway Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is assessing ventilator waveforms and notices that the pressure waveform shows a concave dip at the beginning of inspiration before the pressure rises. This finding indicates which of the following?',
        choices: {
          A: 'The flow rate is set too high',
          B: 'The patient is making an inspiratory effort (patient triggering)',
          C: 'There is a circuit leak',
          D: 'The expiratory valve is malfunctioning',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A concave dip (negative deflection) at the beginning of the pressure waveform indicates that the patient is generating negative intrathoracic pressure by making an inspiratory effort to trigger the ventilator. This is a normal finding in patient-triggered breaths and indicates active respiratory effort.',
        explanationWrong:
          'An excessively high flow rate would cause a rapid pressure rise, not a negative deflection. A circuit leak would show a gradual decline in pressure, not a dip at the start of inspiration. An expiratory valve malfunction would affect the expiratory phase of the pressure waveform.',
        topic: 'Ventilator Graphics',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is reviewing infection control procedures for a patient diagnosed with active tuberculosis. Which type of respiratory protection is required for healthcare workers entering the patient\'s room?',
        choices: {
          A: 'N95 particulate respirator or higher level of protection',
          B: 'Standard surgical mask',
          C: 'Simple face mask',
          D: 'No respiratory protection if the patient is wearing a mask',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Healthcare workers entering the room of a patient with active tuberculosis must wear at least an N95 particulate respirator that has been properly fit-tested. TB is transmitted via airborne droplet nuclei (1-5 microns), which can remain suspended in air for hours. The N95 filters at least 95% of airborne particles.',
        explanationWrong:
          'A standard surgical mask does not provide adequate filtration for airborne particles the size of TB droplet nuclei. A simple face mask provides even less protection. Even if the patient is wearing a mask, healthcare workers must still wear an N95 respirator as an additional layer of protection.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is managing a patient with severe metabolic acidosis (pH 7.10, HCO3 6 mEq/L). The patient is breathing spontaneously with deep, rapid respirations at 32/min. This breathing pattern is known as:',
        choices: {
          A: 'Cheyne-Stokes respiration',
          B: 'Biot respiration',
          C: 'Apneustic breathing',
          D: 'Kussmaul breathing',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Kussmaul breathing is a deep, rapid respiratory pattern that occurs as a compensatory mechanism in severe metabolic acidosis. The body attempts to blow off CO2 through hyperventilation to compensate for the metabolic acid load. It is classically associated with diabetic ketoacidosis.',
        explanationWrong:
          'Cheyne-Stokes respiration is a crescendo-decrescendo pattern with periods of apnea, associated with heart failure and neurological conditions. Biot respiration features irregular breathing with variable tidal volumes and periods of apnea, associated with brainstem damage. Apneustic breathing shows prolonged inspiratory gasps with brief expirations, indicating pontine lesions.',
        topic: 'Patient Assessment',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is working with a multidisciplinary team to develop a ventilator bundle protocol. Which of the following components is an evidence-based element of a VAP prevention bundle?',
        choices: {
          A: 'Routine chest x-ray every 4 hours',
          B: 'Prophylactic broad-spectrum antibiotics',
          C: 'Elevation of the head of bed to 30-45 degrees',
          D: 'Changing the ventilator circuit every 12 hours',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Elevation of the head of bed to 30-45 degrees is a core component of the VAP prevention bundle. It reduces the risk of aspiration of oropharyngeal and gastric contents into the lower airways. Other bundle elements include daily sedation interruption, DVT prophylaxis, peptic ulcer prophylaxis, and daily assessment of readiness to extubate.',
        explanationWrong:
          'Routine chest x-rays every 4 hours are not part of the VAP bundle and represent unnecessary radiation exposure. Prophylactic antibiotics are not recommended and may promote resistant organisms. Routine circuit changes are no longer recommended and do not reduce VAP incidence.',
        topic: 'Evidence-Based Practice',
      },
    ],
  })

  console.log('TMC mini exams 26-30 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
