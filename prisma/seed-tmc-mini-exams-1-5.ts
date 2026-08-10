import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TMC_DIVISION_ID = 'cmsm41fq00000zf54wqjaayvz'

async function main() {
  console.log('Seeding TMC mini exams 1-5...')

  // ─── EXAM 1 (isFree: true) ───────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 1',
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
          'A patient presents with bilateral wheezing and a prolonged expiratory phase. Which of the following conditions is most consistent with these findings?',
        choices: {
          A: 'Pneumothorax',
          B: 'Pulmonary embolism',
          C: 'Pleural effusion',
          D: 'Asthma exacerbation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Bilateral wheezing with a prolonged expiratory phase is the hallmark presentation of an asthma exacerbation caused by bronchospasm and airway inflammation.',
        explanationWrong:
          'Pneumothorax typically presents with absent breath sounds on the affected side. Pleural effusion causes diminished breath sounds at the base. Pulmonary embolism usually presents with tachypnea and pleuritic chest pain rather than wheezing.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          'An arterial blood gas result shows pH 7.28, PaCO2 58 mmHg, HCO3 26 mEq/L, and PaO2 55 mmHg. How should this be interpreted?',
        choices: {
          A: 'Metabolic acidosis with hypoxemia',
          B: 'Respiratory alkalosis',
          C: 'Acute respiratory acidosis with hypoxemia',
          D: 'Compensated metabolic alkalosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The low pH with elevated PaCO2 and a near-normal HCO3 indicates acute respiratory acidosis. The PaO2 of 55 mmHg confirms hypoxemia. The kidneys have not yet compensated, as the HCO3 remains in the normal range.',
        explanationWrong:
          'Metabolic acidosis would show a low HCO3 as the primary disturbance. Respiratory alkalosis would present with a low PaCO2 and elevated pH. Compensated metabolic alkalosis would show an elevated HCO3 with a high pH or normal pH.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          'Which oxygen delivery device is most appropriate for a COPD patient requiring a precise, low-flow FiO2 of 0.28?',
        choices: {
          A: 'Venturi mask set to 28%',
          B: 'Simple face mask at 5 L/min',
          C: 'Non-rebreather mask at 10 L/min',
          D: 'Nasal cannula at 6 L/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A Venturi mask (air-entrainment mask) delivers a precise and fixed FiO2 regardless of the patient\'s breathing pattern, making it ideal for COPD patients who need controlled oxygen therapy.',
        explanationWrong:
          'A simple face mask cannot deliver precise FiO2 concentrations and requires a minimum flow of 5 L/min delivering approximately 40%. A non-rebreather at 10 L/min delivers near 100% FiO2. A nasal cannula at 6 L/min delivers approximately 44%, which is too high and imprecise.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          'A respiratory therapist is called to assess a patient who had an oral endotracheal tube placed 30 minutes ago. Breath sounds are heard over the right lung only. What is the most likely cause?',
        choices: {
          A: 'Left-sided pleural effusion',
          B: 'Right mainstem bronchus intubation',
          C: 'Right-sided pneumothorax',
          D: 'Esophageal intubation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Unilateral breath sounds over the right lung after intubation most commonly indicate the endotracheal tube has advanced too far into the right mainstem bronchus, which is shorter and more vertically oriented than the left.',
        explanationWrong:
          'Left-sided pleural effusion would diminish sounds at the left base but not eliminate them entirely. Esophageal intubation would result in absent breath sounds bilaterally with gurgling over the epigastrium. Right-sided pneumothorax would cause absent breath sounds on the right side, not the left.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          'Which medication is classified as a short-acting beta-2 agonist commonly used as a rescue inhaler?',
        choices: {
          A: 'Ipratropium bromide',
          B: 'Albuterol sulfate',
          C: 'Fluticasone propionate',
          D: 'Montelukast sodium',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Albuterol sulfate is a short-acting beta-2 agonist (SABA) that provides rapid bronchodilation within minutes and is the standard rescue medication for acute bronchospasm.',
        explanationWrong:
          'Ipratropium bromide is a short-acting anticholinergic bronchodilator, not a beta-2 agonist. Fluticasone propionate is an inhaled corticosteroid used for maintenance therapy. Montelukast sodium is a leukotriene receptor antagonist used for long-term asthma control.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          'A patient on a volume-controlled ventilator has a sudden increase in peak inspiratory pressure from 25 to 45 cmH2O while plateau pressure remains at 20 cmH2O. What is the most likely cause?',
        choices: {
          A: 'Increased airway resistance',
          B: 'Decreased lung compliance',
          C: 'Development of a pneumothorax',
          D: 'Auto-PEEP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When peak pressure rises significantly but plateau pressure remains unchanged, the problem is in the airways, not the lung parenchyma. This pattern indicates increased airway resistance, commonly caused by bronchospasm, secretions, or kinking of the endotracheal tube.',
        explanationWrong:
          'Decreased lung compliance would cause both peak and plateau pressures to rise. A pneumothorax would increase both peak and plateau pressures and would also likely present with hemodynamic instability. Auto-PEEP would increase both peak and plateau pressures.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          'An FEV1/FVC ratio of 62% in a pulmonary function test is most indicative of which type of lung disease?',
        choices: {
          A: 'Restrictive lung disease',
          B: 'Combined obstructive and restrictive disease',
          C: 'Obstructive lung disease',
          D: 'Normal pulmonary function',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An FEV1/FVC ratio below 70% is the defining criterion for obstructive lung disease. The reduced ratio indicates that the patient cannot exhale air as quickly as expected due to airway obstruction.',
        explanationWrong:
          'Restrictive lung disease shows reduced volumes with a normal or elevated FEV1/FVC ratio. Combined disease may show a reduced ratio, but a single low FEV1/FVC ratio alone points to obstruction. Normal pulmonary function has an FEV1/FVC ratio above 70%.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is preparing to suction a patient with a tracheostomy. Which of the following practices is recommended to reduce the risk of infection?',
        choices: {
          A: 'Use clean gloves for open suctioning',
          B: 'Apply suction while inserting the catheter',
          C: 'Suction for no more than 30 seconds per pass',
          D: 'Use sterile technique during open suctioning',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Open suctioning of a tracheostomy requires sterile technique, including sterile gloves and a sterile suction catheter, to reduce the risk of introducing pathogens into the lower airway.',
        explanationWrong:
          'Clean gloves are insufficient for open suctioning; sterile gloves are required. Suction should only be applied during withdrawal of the catheter, not during insertion. Each suction pass should be limited to 10-15 seconds, not 30 seconds, to prevent hypoxemia and mucosal damage.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          'A flowmeter connected to an oxygen wall outlet reads 6 L/min, but the patient reports not feeling any airflow. Which of the following should the therapist check first?',
        choices: {
          A: 'The zone valve for the oxygen supply',
          B: 'The connection between the flowmeter and the outlet',
          C: 'The cylinder pressure on the backup E-cylinder',
          D: 'The humidifier jar for cracks',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The most immediate and common issue when a flowmeter reads flow but the patient does not receive oxygen is a loose or improperly seated connection between the flowmeter and the wall outlet.',
        explanationWrong:
          'Checking the zone valve is appropriate if the entire wall supply is compromised, but the flowmeter reading suggests gas is flowing. An E-cylinder backup is not relevant when the piped system appears operational. A cracked humidifier jar would cause a visible leak but the flowmeter would still show flow.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          'A newborn has an APGAR score of 4 at one minute of life. What does this score indicate?',
        choices: {
          A: 'The infant is in excellent condition and requires no intervention',
          B: 'The infant should be placed on a nasal cannula at 2 L/min',
          C: 'The infant may need some stimulation and observation only',
          D: 'The infant requires immediate resuscitative measures',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An APGAR score of 0-3 indicates severe distress requiring immediate resuscitation. A score of 4-6 indicates moderate distress requiring some resuscitative intervention. A score of 4 at one minute means the infant needs active resuscitative measures such as positive-pressure ventilation.',
        explanationWrong:
          'Excellent condition is indicated by an APGAR of 7-10. Placing the infant on a nasal cannula alone is insufficient for a score of 4; more aggressive intervention is needed. Simple stimulation and observation are appropriate for mildly depressed scores of 5-6.',
        topic: 'Neonatal/Pediatric Basics',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          'A patient with COPD has the following ABG results: pH 7.37, PaCO2 55 mmHg, HCO3 32 mEq/L, PaO2 62 mmHg. What is the correct interpretation?',
        choices: {
          A: 'Compensated respiratory acidosis with mild hypoxemia',
          B: 'Acute respiratory acidosis with hypoxemia',
          C: 'Compensated metabolic alkalosis',
          D: 'Normal acid-base status',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The elevated PaCO2 indicates respiratory acidosis, but the pH is within normal range because the HCO3 is elevated to compensate. This is characteristic of chronic COPD patients whose kidneys have retained bicarbonate over time. The PaO2 of 62 mmHg indicates mild hypoxemia.',
        explanationWrong:
          'Acute respiratory acidosis would show a low pH because the kidneys have not had time to compensate. Compensated metabolic alkalosis would have an elevated HCO3 as the primary disturbance with a compensatory rise in PaCO2, but the clinical context of COPD makes respiratory acidosis the primary disorder. Normal acid-base status would show all values within normal ranges.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          'During assessment of a patient, the respiratory therapist notes jugular venous distention, peripheral edema, and hepatomegaly. These findings are most consistent with which condition?',
        choices: {
          A: 'Left-sided heart failure',
          B: 'Acute asthma exacerbation',
          C: 'Right-sided heart failure',
          D: 'Tension pneumothorax',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Jugular venous distention, peripheral edema, and hepatomegaly are classic signs of right-sided heart failure (cor pulmonale), which results from increased pressure in the systemic venous circulation due to right ventricular dysfunction.',
        explanationWrong:
          'Left-sided heart failure typically presents with pulmonary edema, crackles, and dyspnea rather than systemic venous congestion. Acute asthma presents with wheezing, accessory muscle use, and respiratory distress. Tension pneumothorax presents with hypotension, tracheal deviation, and absent breath sounds on the affected side.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          'What is the primary purpose of adding a spacer (holding chamber) to a metered-dose inhaler?',
        choices: {
          A: 'To increase the total dose delivered per actuation',
          B: 'To reduce oropharyngeal deposition and improve drug delivery to the lungs',
          C: 'To convert the medication into a dry powder form',
          D: 'To eliminate the need for hand-breath coordination',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A spacer reduces the velocity of aerosolized particles and allows larger particles to deposit in the chamber rather than the oropharynx, resulting in greater lung deposition and reduced local side effects such as oral candidiasis with inhaled corticosteroids.',
        explanationWrong:
          'A spacer does not increase the total dose; it improves the distribution of the existing dose. It does not convert the medication to a dry powder. While a spacer helps with coordination, its primary purpose is to improve drug delivery to the lower airways.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          'A patient receiving mechanical ventilation has a tidal volume of 500 mL and a respiratory rate of 14 breaths/min. What is the minute ventilation?',
        choices: {
          A: '5,000 mL/min',
          B: '3,500 mL/min',
          C: '10,000 mL/min',
          D: '7,000 mL/min',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Minute ventilation is calculated by multiplying tidal volume by respiratory rate: 500 mL x 14 breaths/min = 7,000 mL/min (7 L/min).',
        explanationWrong:
          '5,000 mL/min would result from 500 mL x 10 breaths/min. 3,500 mL/min would result from 250 mL x 14 breaths/min. 10,000 mL/min would result from 500 mL x 20 breaths/min.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          'Which of the following is the most appropriate initial action when a tracheostomy tube becomes accidentally dislodged in a patient who is less than 7 days post-operative?',
        choices: {
          A: 'Attempt to reinsert the tracheostomy tube immediately',
          B: 'Place an oxygen mask over the stoma and call for help',
          C: 'Orally intubate the patient and call for a surgeon',
          D: 'Begin mouth-to-stoma rescue breathing',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In a patient less than 7 days post-tracheostomy, the stoma tract is not yet mature. Attempting blind reinsertion risks creating a false passage. The safest action is to secure the airway via oral intubation and contact the surgeon for proper reinsertion.',
        explanationWrong:
          'Reinserting the tube blindly in a fresh tract (<7 days) risks subcutaneous placement and a false passage. Placing oxygen over the stoma does not secure the airway. Mouth-to-stoma breathing is a temporary measure but does not address the need for a definitive airway.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          'A patient on 4 L/min nasal cannula has a SpO2 of 99%. The physician asks the therapist to estimate the FiO2 being delivered. What is the approximate FiO2?',
        choices: {
          A: 'Approximately 36%',
          B: 'Approximately 24%',
          C: 'Approximately 44%',
          D: 'Approximately 28%',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Each liter per minute of nasal cannula flow increases the FiO2 by approximately 4% above room air (21%). At 4 L/min: 21% + (4 x 4%) = 21% + 16% = approximately 37%, closest to 36%.',
        explanationWrong:
          '24% corresponds to approximately 1 L/min. 44% corresponds to approximately 6 L/min. 28% corresponds to approximately 2 L/min.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          'Which pulmonary function test measurement is most useful for assessing small airway disease?',
        choices: {
          A: 'Peak expiratory flow rate',
          B: 'Total lung capacity',
          C: 'Diffusing capacity for carbon monoxide (DLCO)',
          D: 'Forced expiratory flow at 25-75% of FVC (FEF25-75)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'FEF25-75 measures the average flow rate during the middle portion of a forced expiratory maneuver, which reflects small airway function. It is often the earliest indicator of small airway obstruction.',
        explanationWrong:
          'Peak expiratory flow reflects large airway function and effort. Total lung capacity measures overall lung volume but not airflow in small airways. DLCO assesses gas exchange across the alveolar-capillary membrane, not airway caliber.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          'Which type of isolation precautions should be implemented for a patient diagnosed with active pulmonary tuberculosis?',
        choices: {
          A: 'Standard precautions only',
          B: 'Contact precautions',
          C: 'Airborne precautions',
          D: 'Droplet precautions',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pulmonary tuberculosis is transmitted via airborne droplet nuclei that remain suspended in the air. Airborne precautions require a negative-pressure isolation room and N95 respirators or higher for all personnel entering the room.',
        explanationWrong:
          'Standard precautions alone are insufficient for TB. Contact precautions are used for organisms spread by direct or indirect contact. Droplet precautions are for organisms spread by large respiratory droplets that fall within 3-6 feet; TB particles are much smaller and remain airborne.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          'An H-cylinder of oxygen has a pressure of 1,000 psi. Approximately how long will the cylinder last at a flow rate of 10 L/min?',
        choices: {
          A: '5.5 hours',
          B: '7.8 hours',
          C: '10.2 hours',
          D: '3.1 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Using the cylinder duration formula: (Pressure x Cylinder Factor) / Flow rate. The H-cylinder factor is 3.14. Duration = (1,000 x 3.14) / 10 = 314 minutes = approximately 5.2 hours, closest to 5.5 hours.',
        explanationWrong:
          '3.1 hours would be too short for an H-cylinder at this flow. 7.8 hours and 10.2 hours overestimate the duration at 10 L/min with 1,000 psi remaining.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          'A premature infant at 28 weeks gestation is showing signs of respiratory distress with grunting, nasal flaring, and retractions. Which condition is the most likely diagnosis?',
        choices: {
          A: 'Meconium aspiration syndrome',
          B: 'Respiratory distress syndrome (RDS)',
          C: 'Transient tachypnea of the newborn',
          D: 'Bronchopulmonary dysplasia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Respiratory distress syndrome (RDS), formerly known as hyaline membrane disease, is caused by surfactant deficiency and is the most common cause of respiratory distress in premature infants, especially those born before 34 weeks gestation.',
        explanationWrong:
          'Meconium aspiration syndrome occurs in term or post-term infants who aspirate meconium-stained amniotic fluid. Transient tachypnea of the newborn typically occurs in near-term or term infants delivered by cesarean section. Bronchopulmonary dysplasia is a chronic condition resulting from prolonged ventilation and oxygen therapy, not an initial presentation.',
        topic: 'Neonatal/Pediatric Basics',
      },
    ],
  })

  // ─── EXAM 2 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 2',
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
          'A patient in the emergency department has the following vital signs: heart rate 120 bpm, respiratory rate 32 breaths/min, blood pressure 88/60 mmHg, and SpO2 82% on room air. Which action should the respiratory therapist prioritize?',
        choices: {
          A: 'Obtain an arterial blood gas',
          B: 'Set up a small-volume nebulizer with albuterol',
          C: 'Apply a non-rebreather mask at 15 L/min',
          D: 'Initiate incentive spirometry',
        },
        correctChoice: 'C',
        explanationCorrect:
          'With an SpO2 of 82% and signs of hemodynamic instability, the immediate priority is to correct the severe hypoxemia by applying a non-rebreather mask at 15 L/min to deliver the highest FiO2 available from a standard oxygen device.',
        explanationWrong:
          'An ABG is useful but addressing the hypoxemia takes immediate priority. Albuterol is appropriate for bronchospasm but the immediate need is oxygenation. Incentive spirometry is a lung expansion technique and is not appropriate for acute hypoxemia.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          'When performing endotracheal suctioning on a mechanically ventilated patient, the suction catheter should not exceed what fraction of the internal diameter of the endotracheal tube?',
        choices: {
          A: 'One-half',
          B: 'One-quarter',
          C: 'Two-thirds',
          D: 'One-third',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The suction catheter should not exceed one-half the internal diameter of the endotracheal tube. This ensures adequate airflow around the catheter during suctioning and minimizes the risk of hypoxemia and atelectasis.',
        explanationWrong:
          'One-quarter would be unnecessarily small and may not effectively remove secretions. Two-thirds would occlude too much of the airway, causing excessive negative pressure and potential lung collapse. One-third is sometimes cited but the standard recommendation is one-half.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          'A patient on a high-flow nasal cannula at 40 L/min and FiO2 0.60 continues to desaturate. The physician orders an increase to FiO2 0.80. What is the primary advantage of the high-flow nasal cannula over standard oxygen devices?',
        choices: {
          A: 'It provides positive-pressure ventilation',
          B: 'It eliminates anatomic dead space by washing out nasopharyngeal CO2',
          C: 'It completely prevents the patient from breathing room air',
          D: 'It can deliver aerosolized medications simultaneously',
        },
        correctChoice: 'B',
        explanationCorrect:
          'High-flow nasal cannula delivers heated and humidified gas at high flow rates that exceed the patient\'s inspiratory demand. This washes out the nasopharyngeal dead space, reducing CO2 rebreathing and allowing the delivered FiO2 to more closely match what reaches the alveoli.',
        explanationWrong:
          'HFNC provides some degree of positive airway pressure but it is not a positive-pressure ventilation device. Patients can still entrain some room air, though the high flow minimizes this. HFNC is not designed for simultaneous aerosol medication delivery.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          'A mechanically ventilated patient has the following settings: mode AC/VC, tidal volume 450 mL, rate 16, PEEP 5 cmH2O, FiO2 0.50. The ABG shows pH 7.50, PaCO2 28 mmHg. What ventilator change is most appropriate?',
        choices: {
          A: 'Increase tidal volume to 550 mL',
          B: 'Increase PEEP to 10 cmH2O',
          C: 'Increase FiO2 to 0.60',
          D: 'Decrease the respiratory rate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The ABG shows respiratory alkalosis (high pH, low PaCO2), indicating the patient is being over-ventilated. Decreasing the respiratory rate will reduce minute ventilation and allow the PaCO2 to rise toward normal.',
        explanationWrong:
          'Increasing tidal volume would further increase minute ventilation and worsen the alkalosis. Increasing PEEP addresses oxygenation, not ventilation. Increasing FiO2 addresses oxygenation; the problem here is excessive ventilation.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          'Which medication is an inhaled anticholinergic bronchodilator commonly used in combination with albuterol for acute bronchospasm?',
        choices: {
          A: 'Beclomethasone',
          B: 'Ipratropium bromide',
          C: 'Salmeterol',
          D: 'Cromolyn sodium',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Ipratropium bromide is a short-acting anticholinergic (muscarinic antagonist) that blocks vagal-mediated bronchoconstriction. It is commonly combined with albuterol (as in DuoNeb) for the treatment of acute bronchospasm.',
        explanationWrong:
          'Beclomethasone is an inhaled corticosteroid used for maintenance, not acute relief. Salmeterol is a long-acting beta-2 agonist (LABA) not recommended for acute episodes. Cromolyn sodium is a mast cell stabilizer used for prophylaxis, not acute treatment.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          'An ABG shows pH 7.32, PaCO2 40 mmHg, HCO3 18 mEq/L, PaO2 90 mmHg. What is the acid-base interpretation?',
        choices: {
          A: 'Respiratory acidosis',
          B: 'Respiratory alkalosis',
          C: 'Metabolic acidosis',
          D: 'Compensated metabolic acidosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The pH is low (acidotic), PaCO2 is normal, and HCO3 is low. A normal PaCO2 with a low HCO3 and low pH indicates an uncompensated metabolic acidosis. The respiratory system has not yet compensated by decreasing PaCO2.',
        explanationWrong:
          'Respiratory acidosis would show an elevated PaCO2 as the primary disturbance. Respiratory alkalosis would show a decreased PaCO2 and elevated pH. Compensated metabolic acidosis would have a pH closer to normal with a correspondingly low PaCO2.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          'Which of the following lung volumes or capacities cannot be measured by simple spirometry?',
        choices: {
          A: 'Tidal volume',
          B: 'Inspiratory reserve volume',
          C: 'Vital capacity',
          D: 'Residual volume',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Residual volume (the amount of air remaining in the lungs after maximal exhalation) cannot be measured by simple spirometry because the patient cannot exhale it. It requires body plethysmography, helium dilution, or nitrogen washout techniques.',
        explanationWrong:
          'Tidal volume, inspiratory reserve volume, and vital capacity can all be directly measured during spirometry maneuvers because they involve gas that moves in and out of the lungs.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          'Which of the following organisms requires contact precautions with dedicated patient care equipment?',
        choices: {
          A: 'Clostridioides difficile',
          B: 'Mycobacterium tuberculosis',
          C: 'Influenza virus',
          D: 'Neisseria meningitidis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Clostridioides difficile (C. diff) is spread by contact with spores that are resistant to alcohol-based hand sanitizers. Contact precautions include gowns, gloves, dedicated equipment, and hand washing with soap and water.',
        explanationWrong:
          'Mycobacterium tuberculosis requires airborne precautions. Influenza requires droplet precautions. Neisseria meningitidis requires droplet precautions.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist notices that an oxygen blender on a mechanical ventilator is delivering an FiO2 of 0.70 when set to 0.50. What should the therapist do first?',
        choices: {
          A: 'Continue using the ventilator and document the finding',
          B: 'Replace the oxygen blender immediately',
          C: 'Calibrate the oxygen analyzer and recheck',
          D: 'Switch the patient to a manual resuscitator',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Before assuming the blender is malfunctioning, the therapist should first verify the accuracy of the oxygen analyzer by calibrating it on room air (21%) and 100% oxygen. A faulty analyzer is a more common cause of inaccurate readings than a blender malfunction.',
        explanationWrong:
          'Continuing without investigation could expose the patient to harmful oxygen levels. Replacing the blender without first verifying the analyzer may be unnecessary. Switching to a manual resuscitator is overly aggressive for a suspected monitoring issue.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          'Exogenous surfactant therapy is most commonly administered to treat which neonatal condition?',
        choices: {
          A: 'Bronchiolitis',
          B: 'Respiratory distress syndrome',
          C: 'Congenital diaphragmatic hernia',
          D: 'Persistent pulmonary hypertension of the newborn',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Exogenous surfactant replacement therapy is the standard treatment for neonatal respiratory distress syndrome (RDS), which is caused by insufficient surfactant production in premature infants. It is administered directly into the trachea via an endotracheal tube.',
        explanationWrong:
          'Bronchiolitis is a viral lower respiratory infection typically treated with supportive care. Congenital diaphragmatic hernia is a surgical condition. Persistent pulmonary hypertension is treated with inhaled nitric oxide and other vasodilatory therapies.',
        topic: 'Neonatal/Pediatric Basics',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          'Pulsus paradoxus greater than 10 mmHg is most commonly associated with which of the following conditions?',
        choices: {
          A: 'Congestive heart failure',
          B: 'Pulmonary fibrosis',
          C: 'Aortic stenosis',
          D: 'Severe asthma or cardiac tamponade',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pulsus paradoxus (an exaggerated drop in systolic blood pressure greater than 10 mmHg during inspiration) is classically associated with severe asthma (due to large intrathoracic pressure swings) and cardiac tamponade (due to pericardial fluid restricting cardiac filling).',
        explanationWrong:
          'Congestive heart failure does not typically cause pulsus paradoxus. Pulmonary fibrosis is a restrictive disease that does not produce the large pressure swings needed. Aortic stenosis causes a fixed obstruction to outflow but not pulsus paradoxus.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          'A cuff pressure measurement on an endotracheal tube reads 35 cmH2O. What should the respiratory therapist do?',
        choices: {
          A: 'Document the pressure as acceptable',
          B: 'Inflate the cuff further to ensure no air leak',
          C: 'Deflate the cuff to a pressure between 20-30 cmH2O',
          D: 'Immediately extubate the patient and replace the tube',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Endotracheal tube cuff pressure should be maintained between 20-30 cmH2O to prevent tracheal mucosal ischemia while still sealing the airway. A pressure of 35 cmH2O exceeds the capillary perfusion pressure of the tracheal mucosa and should be reduced.',
        explanationWrong:
          '35 cmH2O exceeds the recommended range and risks tracheal wall damage. Inflating the cuff further would increase the risk of tracheal necrosis. Extubation and replacement is unnecessary; simply adjusting the cuff pressure resolves the issue.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          'A patient with a tracheostomy is receiving oxygen via a tracheostomy collar at 40% FiO2 with an aerosol mist visible. The therapist notices the mist disappears during inspiration. What should be done?',
        choices: {
          A: 'Increase the total flow to meet or exceed the patient\'s inspiratory demand',
          B: 'Nothing; this is normal',
          C: 'Switch to a nasal cannula',
          D: 'Decrease the FiO2 to prevent oxygen toxicity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'If the aerosol mist disappears during inspiration, the total flow from the device is insufficient to meet the patient\'s inspiratory demand. This means the patient is entraining room air, diluting the intended FiO2. The flow should be increased until mist is visible throughout the entire respiratory cycle.',
        explanationWrong:
          'This is not normal and indicates insufficient flow. A nasal cannula cannot be used effectively with a tracheostomy. Decreasing FiO2 is inappropriate when the actual delivered oxygen may already be lower than set.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          'In pressure-support ventilation, which of the following is determined by the patient?',
        choices: {
          A: 'Inspiratory pressure level',
          B: 'Tidal volume and respiratory rate',
          C: 'PEEP level',
          D: 'FiO2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In pressure-support ventilation, the clinician sets the pressure level, but the patient determines the tidal volume (based on lung compliance and effort), respiratory rate, inspiratory time, and flow pattern. This makes it a patient-triggered, patient-cycled mode.',
        explanationWrong:
          'Inspiratory pressure level is set by the clinician. PEEP is set by the clinician. FiO2 is set by the clinician. The patient controls the breathing pattern variables.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          'A patient has been prescribed levalbuterol (Xopenex) instead of racemic albuterol. What is the primary reason for choosing levalbuterol?',
        choices: {
          A: 'It has a longer duration of action',
          B: 'It is more cost-effective than albuterol',
          C: 'It can be administered via dry powder inhaler only',
          D: 'It contains only the R-isomer, which may cause fewer cardiac side effects',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Levalbuterol contains only the active R-isomer of albuterol, which is responsible for bronchodilation. By eliminating the S-isomer, it may reduce side effects such as tachycardia and tremor, though clinical superiority remains debated.',
        explanationWrong:
          'Levalbuterol has a similar duration of action to racemic albuterol. It is typically more expensive, not less. It is available as a nebulizer solution and MDI, not only dry powder.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          'A patient\'s ABG shows pH 7.48, PaCO2 30 mmHg, HCO3 22 mEq/L. What is the acid-base disturbance?',
        choices: {
          A: 'Acute respiratory alkalosis',
          B: 'Metabolic alkalosis',
          C: 'Respiratory acidosis',
          D: 'Compensated metabolic acidosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The elevated pH with a low PaCO2 and normal HCO3 indicates acute respiratory alkalosis. The patient is hyperventilating, blowing off CO2, and the kidneys have not yet compensated by excreting bicarbonate.',
        explanationWrong:
          'Metabolic alkalosis would show an elevated HCO3 as the primary disturbance. Respiratory acidosis would show an elevated PaCO2 and low pH. Compensated metabolic acidosis would show a low HCO3 with compensatory decrease in PaCO2.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          'A patient performing a forced vital capacity maneuver produces the following results: FVC 3.2 L (65% predicted), FEV1 2.8 L (72% predicted), FEV1/FVC ratio 88%. What pattern does this suggest?',
        choices: {
          A: 'Normal spirometry',
          B: 'Obstructive pattern',
          C: 'Mixed obstructive-restrictive pattern',
          D: 'Restrictive pattern',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A reduced FVC with a normal or elevated FEV1/FVC ratio (88% is above 70%) is characteristic of a restrictive pattern. Both volumes are reduced proportionally, but the ratio remains normal or increased because the patient can still exhale quickly; they simply have less volume to exhale.',
        explanationWrong:
          'Normal spirometry would show values above 80% predicted with a normal ratio. An obstructive pattern would show a reduced FEV1/FVC ratio below 70%. A mixed pattern would show reduced volumes and a reduced ratio.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          'Which of the following is the proper procedure when a respiratory therapist moves between patients in an ICU?',
        choices: {
          A: 'Change gloves only if visibly soiled',
          B: 'Perform hand hygiene and change gloves between every patient',
          C: 'Wear the same gown for the entire shift if no isolation is required',
          D: 'Use the same stethoscope without cleaning if the patients have the same diagnosis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hand hygiene and glove changes between every patient contact are fundamental infection prevention practices. This prevents cross-contamination regardless of the patients\' diagnoses or visible contamination.',
        explanationWrong:
          'Gloves should be changed between all patients, not only when visibly soiled. Stethoscopes should be cleaned between patients to prevent cross-contamination. Gowns should be changed between patients in isolation and when visibly contaminated.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          'A pulse oximeter is reading 85% on a patient who appears pink and comfortable with good perfusion. Which of the following is the most likely cause of the inaccurate reading?',
        choices: {
          A: 'The patient has anemia',
          B: 'The patient has a fever',
          C: 'The patient is wearing dark nail polish on the monitored finger',
          D: 'The probe is too large for the patient\'s finger',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Dark nail polish (especially blue, black, or green) can absorb light at wavelengths used by the pulse oximeter, leading to falsely low SpO2 readings. This is the most common artifact when the patient appears clinically well.',
        explanationWrong:
          'Anemia affects the total hemoglobin but not necessarily the SpO2 reading, as the oximeter measures the percentage of hemoglobin that is saturated. Fever does not typically cause inaccurate readings. A probe that is too large may cause motion artifact but is less likely than nail polish interference.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          'A 2-year-old child is brought to the emergency department with a barking cough, inspiratory stridor, and a fever of 38.5 degrees C. What is the most likely diagnosis?',
        choices: {
          A: 'Croup (laryngotracheobronchitis)',
          B: 'Epiglottitis',
          C: 'Foreign body aspiration',
          D: 'Bronchiolitis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The triad of barking (seal-like) cough, inspiratory stridor, and low-grade fever in a toddler is the classic presentation of croup (laryngotracheobronchitis), which is most commonly caused by parainfluenza virus.',
        explanationWrong:
          'Epiglottitis presents with high fever, drooling, dysphagia, and a muffled voice but typically no barking cough. Foreign body aspiration presents with sudden onset of choking without fever. Bronchiolitis presents with wheezing and tachypnea rather than stridor and barking cough.',
        topic: 'Neonatal/Pediatric Basics',
      },
    ],
  })

  // ─── EXAM 3 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 3',
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
          'A respiratory therapist auscultates coarse crackles over the right lower lobe that clear after the patient coughs. What is the most likely cause of these sounds?',
        choices: {
          A: 'Pulmonary fibrosis',
          B: 'Retained secretions in the airways',
          C: 'Pleural friction rub',
          D: 'Consolidation from pneumonia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Coarse crackles that clear with coughing are characteristic of retained secretions in the larger airways. Coughing mobilizes the secretions, eliminating the adventitious sounds.',
        explanationWrong:
          'Pulmonary fibrosis produces fine, late-inspiratory crackles (velcro-like) that do not clear with coughing. A pleural friction rub is a grating sound that occurs with both inspiration and expiration and does not clear with coughing. Consolidation from pneumonia produces bronchial breath sounds and crackles that persist despite coughing.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          'When preparing to intubate an adult patient, which laryngoscope blade is inserted into the vallecula to lift the epiglottis indirectly?',
        choices: {
          A: 'Miller blade',
          B: 'Wisconsin blade',
          C: 'Macintosh blade',
          D: 'Phillips blade',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The Macintosh blade is a curved blade designed to be placed in the vallecula (the space between the base of the tongue and the epiglottis). Lifting in the vallecula indirectly elevates the epiglottis to expose the glottic opening.',
        explanationWrong:
          'The Miller blade is a straight blade designed to directly lift the epiglottis. The Wisconsin blade is a straight blade similar to the Miller. The Phillips blade is not a standard laryngoscope blade used in clinical practice.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          'A patient on a simple face mask at 8 L/min has an SpO2 of 92%. The physician wants to increase oxygenation without changing to a different device. What is the maximum recommended flow rate for a simple face mask?',
        choices: {
          A: '10 L/min',
          B: '6 L/min',
          C: '8 L/min',
          D: '15 L/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The recommended flow rate range for a simple face mask is 5-10 L/min, delivering approximately 35-55% FiO2. The maximum is 10 L/min; flows above this do not significantly increase FiO2 and a different device should be considered.',
        explanationWrong:
          '6 L/min and 8 L/min are within range but not the maximum. 15 L/min exceeds the recommended range for a simple mask and is the flow used with a non-rebreather mask.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          'A ventilated patient on assist-control volume ventilation is triggering the ventilator at a rate of 24 breaths/min while the set rate is 14. The patient appears agitated. The most likely cause is:',
        choices: {
          A: 'The flow rate is set too high',
          B: 'The ventilator is auto-cycling',
          C: 'The sensitivity is set too low (too sensitive)',
          D: 'The patient is in pain or anxious and is over-breathing the ventilator',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When a patient triggers above the set rate and appears agitated, the most likely cause is pain, anxiety, or an unmet ventilatory demand. The patient is actively initiating additional breaths beyond the set rate, which is a characteristic of assist-control mode.',
        explanationWrong:
          'A flow rate set too high would not cause increased triggering. Auto-cycling would show regular triggering without patient effort. While an overly sensitive trigger can cause auto-cycling, the patient is agitated, suggesting a clinical cause rather than a ventilator malfunction.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          'Which of the following medications is a long-acting muscarinic antagonist (LAMA) used for maintenance therapy in COPD?',
        choices: {
          A: 'Tiotropium bromide',
          B: 'Formoterol',
          C: 'Ipratropium bromide',
          D: 'Budesonide',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Tiotropium bromide (Spiriva) is a long-acting muscarinic antagonist (LAMA) that provides sustained bronchodilation for 24 hours and is a cornerstone of COPD maintenance therapy.',
        explanationWrong:
          'Formoterol is a long-acting beta-2 agonist (LABA), not an anticholinergic. Ipratropium bromide is a short-acting muscarinic antagonist (SAMA), not long-acting. Budesonide is an inhaled corticosteroid.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          'A patient\'s ABG shows pH 7.22, PaCO2 60 mmHg, HCO3 24 mEq/L, PaO2 50 mmHg. The patient has a history of drug overdose. What intervention is most appropriate?',
        choices: {
          A: 'Administer sodium bicarbonate',
          B: 'Initiate mechanical ventilation',
          C: 'Place the patient on a Venturi mask at 28%',
          D: 'Perform chest physiotherapy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ABG shows acute respiratory acidosis (low pH, high PaCO2, normal HCO3) with severe hypoxemia, likely due to hypoventilation from the drug overdose. Mechanical ventilation is needed to support both ventilation and oxygenation when the patient cannot maintain adequate spontaneous breathing.',
        explanationWrong:
          'Sodium bicarbonate treats metabolic acidosis, not respiratory acidosis caused by hypoventilation. A Venturi mask may improve oxygenation but will not correct the ventilatory failure. Chest physiotherapy addresses secretion clearance, not hypoventilation from CNS depression.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          'A patient\'s bronchial provocation test with methacholine results in a 20% decrease in FEV1 at a low concentration. What does this indicate?',
        choices: {
          A: 'The patient has restrictive lung disease',
          B: 'The patient has normal airway reactivity',
          C: 'The test is inconclusive and should be repeated',
          D: 'The patient has airway hyperresponsiveness consistent with asthma',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A positive methacholine challenge test is defined as a 20% or greater decrease in FEV1 at a low concentration of methacholine. This indicates airway hyperresponsiveness, which is a hallmark of asthma.',
        explanationWrong:
          'Restrictive lung disease is diagnosed by reduced lung volumes, not by bronchial provocation testing. Normal airway reactivity would show no significant decrease in FEV1 at the tested concentrations. A 20% decrease at a low concentration is a definitive positive result, not inconclusive.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is setting up a room for a patient with suspected measles. Which type of ventilation is required for the patient\'s room?',
        choices: {
          A: 'Positive-pressure room with HEPA filtration',
          B: 'Standard room with the door closed',
          C: 'Negative-pressure room with at least 12 air changes per hour',
          D: 'Positive-pressure room with UV light',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Measles is transmitted by airborne droplet nuclei and requires airborne precautions, including a negative-pressure isolation room with at least 12 air changes per hour (for new construction) or 6 air changes per hour (for existing facilities) and HEPA-filtered exhaust.',
        explanationWrong:
          'Positive-pressure rooms are used for immunocompromised patients to keep contaminants out, not for isolating infectious patients. A standard room with the door closed does not provide adequate protection. Positive-pressure with UV light is not the standard for airborne isolation.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is troubleshooting a heated humidifier on a ventilator circuit. The patient is receiving gas that is too dry, and the temperature at the patient wye reads 32 degrees C. What is the most appropriate action?',
        choices: {
          A: 'Increase the humidifier temperature to deliver gas at 35-37 degrees C at the wye',
          B: 'Remove the heated humidifier and use a pass-over humidifier instead',
          C: 'Add a heat-moisture exchanger in addition to the heated humidifier',
          D: 'Decrease the ventilator flow rate to allow more humidification time',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The optimal temperature for inspired gas at the patient connection (wye) is 35-37 degrees C with 100% relative humidity (44 mg/L absolute humidity). Increasing the humidifier temperature setting will raise the temperature and improve humidification at the patient wye.',
        explanationWrong:
          'An HME should never be used in conjunction with a heated humidifier, as this increases resistance and may cause malfunction. A pass-over humidifier is less efficient than a heated humidifier. Decreasing flow rate would change ventilation parameters and is not an appropriate solution.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          'A full-term newborn has a respiratory rate of 72 breaths/min, mild grunting, and chest retractions 2 hours after an uncomplicated cesarean delivery. The chest X-ray shows perihilar streaking and fluid in the fissures. What is the most likely diagnosis?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Meconium aspiration syndrome',
          C: 'Pneumonia',
          D: 'Transient tachypnea of the newborn',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Transient tachypnea of the newborn (TTN) is common in full-term infants delivered by cesarean section. It is caused by delayed reabsorption of fetal lung fluid. The chest X-ray findings of perihilar streaking and fluid in the fissures are classic for TTN, and the condition typically resolves within 24-72 hours.',
        explanationWrong:
          'RDS occurs in premature infants due to surfactant deficiency and shows a ground-glass appearance on X-ray. Meconium aspiration involves meconium-stained amniotic fluid and shows patchy infiltrates. Pneumonia in a newborn would show focal infiltrates and usually presents with other signs of infection.',
        topic: 'Neonatal/Pediatric Basics',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          'A patient\'s capnography waveform shows a gradually increasing end-tidal CO2 (ETCO2) from 40 to 55 mmHg over the past hour during mechanical ventilation. All ventilator settings remain unchanged. What is the most likely cause?',
        choices: {
          A: 'Hyperventilation',
          B: 'Increasing metabolic rate (fever, sepsis)',
          C: 'Pulmonary embolism',
          D: 'Improved lung compliance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A gradual rise in ETCO2 with unchanged ventilator settings indicates increased CO2 production. This is commonly seen with increasing metabolic rate from fever, sepsis, shivering, or increased work of breathing.',
        explanationWrong:
          'Hyperventilation would decrease ETCO2, not increase it. Pulmonary embolism typically causes a sudden decrease in ETCO2 due to increased dead space ventilation. Improved lung compliance would not directly increase CO2 production.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          'Which of the following is the correct sequence for rapid sequence intubation?',
        choices: {
          A: 'Preoxygenate, sedate, paralyze, intubate',
          B: 'Sedate, paralyze, preoxygenate, intubate',
          C: 'Paralyze, preoxygenate, sedate, intubate',
          D: 'Preoxygenate, paralyze, sedate, intubate',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The correct sequence for rapid sequence intubation is: preoxygenate (to create an oxygen reserve), administer a sedative/induction agent, administer a neuromuscular blocking agent (paralytic), then perform intubation.',
        explanationWrong:
          'Sedation before preoxygenation risks apnea without adequate oxygen reserves. Paralysis before preoxygenation and sedation is dangerous. Paralysis before sedation means the patient would be conscious but unable to move or breathe.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          'A patient receiving oxygen via a partial rebreather mask at 10 L/min is observed to have the reservoir bag completely deflating during inspiration. What should the therapist do?',
        choices: {
          A: 'Switch to a nasal cannula',
          B: 'Remove the one-way valves between the mask and bag',
          C: 'Increase the flow until the bag deflates only one-third during inspiration',
          D: 'Nothing; this is expected with a partial rebreather',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The reservoir bag on a partial rebreather mask should remain at least one-third to one-half inflated during inspiration. Complete collapse indicates insufficient flow, causing the patient to entrain room air and receive a lower FiO2 than intended. The flow should be increased until the bag deflates no more than one-third.',
        explanationWrong:
          'Switching to a nasal cannula would decrease the FiO2 delivered. A partial rebreather does not have one-way valves between the mask and bag (the non-rebreather does). Complete bag deflation is not expected and indicates inadequate flow.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          'A patient on volume-controlled ventilation has the following: tidal volume 500 mL, peak pressure 30 cmH2O, plateau pressure 28 cmH2O, PEEP 5 cmH2O. What is the static lung compliance?',
        choices: {
          A: '17 mL/cmH2O',
          B: '25 mL/cmH2O',
          C: '20 mL/cmH2O',
          D: '22 mL/cmH2O',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Static compliance is calculated as: Tidal Volume / (Plateau Pressure - PEEP) = 500 / (28 - 5) = 500 / 23 = approximately 21.7 mL/cmH2O, which rounds to 22 mL/cmH2O.',
        explanationWrong:
          '17 mL/cmH2O would result from using peak pressure instead of plateau pressure in the calculation. 25 mL/cmH2O does not correctly account for PEEP in the calculation. 20 mL/cmH2O uses an incorrect denominator.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          'Racemic epinephrine is most commonly administered via nebulization to treat which condition?',
        choices: {
          A: 'Acute bronchospasm in adults',
          B: 'Post-extubation stridor',
          C: 'Chronic bronchitis exacerbation',
          D: 'Pulmonary edema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Racemic epinephrine is a potent alpha-adrenergic agonist that causes vasoconstriction of mucosal blood vessels, reducing airway edema. It is commonly used to treat post-extubation stridor and croup-associated stridor.',
        explanationWrong:
          'Acute bronchospasm in adults is treated with beta-2 agonists such as albuterol. Chronic bronchitis exacerbations are treated with bronchodilators and corticosteroids. Pulmonary edema is treated with diuretics, positive-pressure ventilation, and vasodilators.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          'A patient\'s ABG shows pH 7.55, PaCO2 44 mmHg, HCO3 36 mEq/L. What is the primary acid-base disturbance?',
        choices: {
          A: 'Respiratory alkalosis',
          B: 'Respiratory acidosis',
          C: 'Metabolic alkalosis',
          D: 'Combined respiratory and metabolic alkalosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The elevated pH (alkalotic) with a normal PaCO2 and elevated HCO3 indicates a primary metabolic alkalosis. The PaCO2 is within normal range, suggesting minimal respiratory compensation.',
        explanationWrong:
          'Respiratory alkalosis would show a decreased PaCO2 as the primary driver. Respiratory acidosis would show an elevated PaCO2 and low pH. Combined alkalosis would show both a low PaCO2 and elevated HCO3.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          'During a diffusing capacity test (DLCO), a patient\'s results are significantly below predicted values. Which condition is most likely to cause a decreased DLCO?',
        choices: {
          A: 'Asthma',
          B: 'Emphysema',
          C: 'Polycythemia',
          D: 'Obesity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Emphysema destroys the alveolar-capillary membrane, reducing the surface area available for gas exchange. This results in a significantly decreased DLCO. It is one of the most common causes of a low DLCO.',
        explanationWrong:
          'Asthma does not typically reduce DLCO because it affects the airways, not the alveolar membrane. Polycythemia (increased red blood cells) actually increases DLCO by providing more hemoglobin for gas transfer. Obesity can reduce lung volumes but does not significantly reduce DLCO per alveolar volume.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist accidentally splashes a patient\'s sputum into their eyes while collecting a specimen. What should the therapist do first?',
        choices: {
          A: 'Continue working and report the incident at the end of the shift',
          B: 'Apply antibiotic eye drops',
          C: 'Wipe the eyes with an alcohol-based disinfectant',
          D: 'Immediately irrigate the eyes with water or saline for at least 15 minutes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Immediate irrigation with copious amounts of water or saline for at least 15 minutes is the first action for any mucous membrane exposure to potentially infectious material. After irrigation, the incident should be reported for follow-up testing and prophylaxis if indicated.',
        explanationWrong:
          'Delaying reporting risks delayed prophylactic treatment for bloodborne pathogens. Antibiotic eye drops are not the first intervention; decontamination via irrigation takes priority. Alcohol-based disinfectants should never be applied to the eyes as they would cause chemical burns.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist notes that the pressure manometer on a manual resuscitation bag does not register pressure during ventilation of a patient. What should be checked first?',
        choices: {
          A: 'The integrity of the bag for leaks',
          B: 'The oxygen supply connection',
          C: 'The patient\'s lung compliance',
          D: 'The pop-off valve for proper function',
        },
        correctChoice: 'A',
        explanationCorrect:
          'If the manometer shows no pressure during ventilation, the most likely equipment issue is a leak in the resuscitation bag, the mask seal, or the connection between components. Checking the bag and connections for integrity should be the first step.',
        explanationWrong:
          'The oxygen supply connection affects FiO2 but would not prevent pressure generation if the bag is intact. Poor lung compliance would increase pressure, not eliminate it. The pop-off valve, if stuck open, could prevent pressure buildup, but checking the bag for leaks is more fundamental.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          'An infant is placed on nasal CPAP at 6 cmH2O after delivery. What is the primary mechanism by which CPAP improves oxygenation in neonates?',
        choices: {
          A: 'It increases tidal volume significantly',
          B: 'It delivers high concentrations of oxygen directly to the alveoli',
          C: 'It maintains functional residual capacity and prevents alveolar collapse',
          D: 'It removes CO2 more efficiently than spontaneous breathing',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Nasal CPAP maintains positive pressure throughout the respiratory cycle, which keeps alveoli open (maintains functional residual capacity), prevents atelectasis, and improves ventilation-perfusion matching, thereby improving oxygenation.',
        explanationWrong:
          'CPAP does not significantly increase tidal volume; it stabilizes lung volume at end-expiration. CPAP does not deliver oxygen directly; the FiO2 is determined by the blended gas. CPAP does not directly remove CO2; it improves oxygenation by maintaining alveolar recruitment.',
        topic: 'Neonatal/Pediatric Basics',
      },
    ],
  })

  // ─── EXAM 4 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 4',
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
          'A patient presents to the emergency department with sudden onset dyspnea, pleuritic chest pain, and hemoptysis after a long flight. Vital signs show tachycardia and tachypnea. Which condition should be highest on the differential?',
        choices: {
          A: 'Spontaneous pneumothorax',
          B: 'Acute myocardial infarction',
          C: 'Pulmonary embolism',
          D: 'Community-acquired pneumonia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The combination of sudden dyspnea, pleuritic chest pain, hemoptysis, tachycardia, and a history of prolonged immobility (long flight) strongly suggests pulmonary embolism. Prolonged sitting increases the risk of deep vein thrombosis, which can embolize to the pulmonary vasculature.',
        explanationWrong:
          'Spontaneous pneumothorax presents with sudden dyspnea and chest pain but not hemoptysis, and is unrelated to flight immobility. Acute MI presents with chest pressure and diaphoresis rather than hemoptysis. Pneumonia has a more gradual onset with productive cough and fever.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is assisting with a difficult intubation. After two failed attempts with direct laryngoscopy, what device should be considered next?',
        choices: {
          A: 'A larger endotracheal tube',
          B: 'A video laryngoscope or a supraglottic airway device',
          C: 'A nasopharyngeal airway',
          D: 'A tracheostomy tube',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After failed direct laryngoscopy attempts, a video laryngoscope provides improved visualization of the glottis and is recommended as the next step in the difficult airway algorithm. A supraglottic airway (such as an LMA) is also appropriate as a rescue device to ventilate the patient.',
        explanationWrong:
          'A larger tube would make intubation more difficult, not easier. A nasopharyngeal airway is a basic adjunct that does not secure the airway. Emergency tracheostomy is reserved as a last resort when all other methods have failed (cannot intubate, cannot ventilate).',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          'A patient with COPD on home oxygen therapy reports removing the humidifier bottle from their concentrator because it was "too noisy." The patient is using a nasal cannula at 2 L/min. What should the therapist advise?',
        choices: {
          A: 'The patient must always use a humidifier with a nasal cannula',
          B: 'The patient should switch to a simple face mask to avoid drying',
          C: 'The patient should increase the flow to 4 L/min to compensate',
          D: 'At 2 L/min, a humidifier is generally not required but may improve comfort',
        },
        correctChoice: 'D',
        explanationCorrect:
          'At flow rates of 4 L/min or less via nasal cannula, supplemental humidification is generally not required because the nasal passages adequately warm and humidify the low-flow gas. However, a humidifier may improve comfort for patients experiencing dryness.',
        explanationWrong:
          'Humidification is not mandatory at low flow rates. Switching to a simple mask is unnecessary at this flow rate. Increasing the flow to compensate for lack of humidification is illogical and would change the prescribed FiO2.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          'A mechanically ventilated patient has bilateral decreased breath sounds, increasing peak and plateau pressures, and a decreasing SpO2. The ventilator shows the exhaled tidal volume is significantly less than the set tidal volume. What is the most likely cause?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Patient-ventilator dyssynchrony',
          C: 'Ventilator circuit leak',
          D: 'Mucous plugging',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Tension pneumothorax causes bilateral decreased breath sounds (more pronounced on the affected side), increasing pressures from decreased compliance of the affected lung compressing the other, decreasing SpO2, and decreased exhaled volumes. This is a medical emergency requiring immediate needle decompression.',
        explanationWrong:
          'Patient-ventilator dyssynchrony would not cause bilateral decreased breath sounds and volume loss. A circuit leak would show decreased peak pressures and low exhaled volumes. Mucous plugging would increase peak pressure but the plateau pressure increase would be less pronounced, and it would typically affect one side.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          'Which of the following inhaled corticosteroids has the highest topical potency and is available as both an MDI and a DPI?',
        choices: {
          A: 'Beclomethasone dipropionate',
          B: 'Triamcinolone acetonide',
          C: 'Cromolyn sodium',
          D: 'Fluticasone propionate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Fluticasone propionate has the highest topical potency among commonly used inhaled corticosteroids and is available in both metered-dose inhaler (MDI) and dry powder inhaler (DPI) formulations (Flovent HFA and Flovent Diskus).',
        explanationWrong:
          'Beclomethasone has moderate potency and is available as an MDI. Triamcinolone has lower potency. Cromolyn sodium is not a corticosteroid; it is a mast cell stabilizer.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          'A diabetic patient presents with Kussmaul respirations. ABG results show pH 7.18, PaCO2 20 mmHg, HCO3 8 mEq/L. What is the acid-base interpretation?',
        choices: {
          A: 'Respiratory alkalosis',
          B: 'Partially compensated metabolic acidosis',
          C: 'Fully compensated respiratory acidosis',
          D: 'Mixed respiratory and metabolic acidosis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The low pH with very low HCO3 indicates severe metabolic acidosis (diabetic ketoacidosis). The low PaCO2 represents respiratory compensation (the body is hyperventilating to blow off CO2 and raise pH). Since the pH is still acidotic, the compensation is partial, not complete.',
        explanationWrong:
          'Respiratory alkalosis would have a primary low PaCO2 driving the pH up. Fully compensated respiratory acidosis would have a normal pH. Mixed acidosis would show both elevated PaCO2 and decreased HCO3.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          'A patient has the following spirometry results: FVC 4.5 L (95% predicted), FEV1 3.8 L (92% predicted), FEV1/FVC ratio 84%. After administration of a bronchodilator, the FEV1 increases to 4.0 L. Is the bronchodilator response significant?',
        choices: {
          A: 'Yes, because any increase in FEV1 is significant',
          B: 'Yes, because the post-bronchodilator FEV1 is above 90% predicted',
          C: 'No, because a significant response requires at least a 12% and 200 mL increase in FEV1',
          D: 'No, because the baseline FEV1/FVC ratio was normal',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A significant bronchodilator response is defined as an increase in FEV1 of at least 12% AND at least 200 mL from baseline. The increase here is 200 mL (4.0 - 3.8) which is 5.3% (200/3800), which does not meet the 12% threshold. Therefore, the response is not significant.',
        explanationWrong:
          'Not any increase is considered significant; specific thresholds must be met. The post-bronchodilator absolute value is less important than the change from baseline. The baseline ratio being normal is relevant but does not determine bronchodilator responsiveness.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          'When performing hand hygiene with an alcohol-based hand rub, how long should the hands be rubbed together?',
        choices: {
          A: 'At least 20 seconds',
          B: 'At least 5 seconds',
          C: 'At least 10 seconds',
          D: 'At least 60 seconds',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The CDC recommends rubbing hands together with alcohol-based hand rub for at least 20 seconds, covering all surfaces of the hands and fingers until the hands are dry. This provides adequate contact time for the alcohol to kill microorganisms.',
        explanationWrong:
          '5 seconds and 10 seconds are insufficient contact times. 60 seconds exceeds the recommended duration; the alcohol would typically evaporate before 60 seconds.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is performing a bedside leak test on a ventilator circuit and notices a consistent 200 mL discrepancy between inspired and expired tidal volumes. After checking all circuit connections, what should be evaluated next?',
        choices: {
          A: 'The ventilator\'s internal compressor',
          B: 'The endotracheal tube cuff for a leak',
          C: 'The oxygen blender accuracy',
          D: 'The inspiratory flow sensor calibration',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After verifying all external circuit connections are secure, the next most likely source of a volume leak is the endotracheal tube cuff. An underinflated or damaged cuff will allow gas to escape around the tube during inspiration, causing a discrepancy between inspired and expired volumes.',
        explanationWrong:
          'An internal compressor issue would affect the ability to deliver volume but not cause a consistent inspired-expired discrepancy. An oxygen blender issue would affect FiO2, not volume delivery. Inspiratory flow sensor calibration issues would affect the measurement of inspired volume, not create a true leak.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          'A pediatric patient with bronchiolitis is being treated with supportive care. Which intervention is most appropriate for this condition?',
        choices: {
          A: 'Scheduled albuterol nebulizer treatments every 4 hours',
          B: 'Oral corticosteroids for 5 days',
          C: 'Chest physiotherapy with postural drainage every 6 hours',
          D: 'Humidified oxygen, nasal suctioning, and IV fluids as needed',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current evidence-based guidelines for bronchiolitis emphasize supportive care: supplemental humidified oxygen to maintain adequate saturation, nasal suctioning to clear secretions (infants are obligate nasal breathers), and adequate hydration. Bronchodilators and corticosteroids are generally not recommended.',
        explanationWrong:
          'Albuterol is not routinely recommended for bronchiolitis as studies have not shown consistent benefit. Oral corticosteroids have not been shown to improve outcomes in bronchiolitis. Chest physiotherapy is not recommended for bronchiolitis and may worsen distress.',
        topic: 'Neonatal/Pediatric Basics',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          'A patient\'s chest X-ray shows a flattened diaphragm, increased anteroposterior diameter, and hyperlucent lung fields. These findings are most consistent with which condition?',
        choices: {
          A: 'Pleural effusion',
          B: 'Atelectasis',
          C: 'Hyperinflation from COPD/emphysema',
          D: 'Pulmonary edema',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Flattened diaphragms, increased AP diameter (barrel chest), and hyperlucent lung fields are classic radiographic findings of hyperinflation, typically seen in COPD and emphysema. Air trapping leads to increased total lung capacity and these characteristic changes.',
        explanationWrong:
          'Pleural effusion shows blunting of the costophrenic angle and opacification. Atelectasis shows volume loss with increased density. Pulmonary edema shows bilateral opacities and Kerley B lines.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          'Which of the following tests is used to confirm proper placement of an endotracheal tube in a cardiac arrest situation?',
        choices: {
          A: 'Auscultation of bilateral breath sounds only',
          B: 'Chest X-ray only',
          C: 'Pulse oximetry',
          D: 'Continuous waveform capnography',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Continuous waveform capnography is the gold standard for confirming and continuously monitoring endotracheal tube placement during cardiac arrest. Detection of CO2 in exhaled air confirms tracheal (not esophageal) placement. A persistent waveform confirms the tube remains in the airway.',
        explanationWrong:
          'Auscultation alone can be unreliable, especially in noisy environments or with right mainstem intubation. Chest X-ray can confirm depth but is not immediately available and cannot continuously monitor. Pulse oximetry confirms oxygenation but does not directly confirm tube placement and may be unreliable in cardiac arrest due to poor perfusion.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          'An air-entrainment mask is set to deliver 35% oxygen with a total flow output of 45 L/min. If the patient\'s peak inspiratory flow rate is 50 L/min, what will happen to the delivered FiO2?',
        choices: {
          A: 'The FiO2 will remain at exactly 35%',
          B: 'The FiO2 will decrease below 35% because the patient entrains room air',
          C: 'The FiO2 will increase above 35%',
          D: 'The FiO2 will fluctuate between 21% and 35%',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When the patient\'s peak inspiratory flow rate (50 L/min) exceeds the total output flow of the air-entrainment device (45 L/min), the patient draws in additional room air around the mask to meet their inspiratory demand. This room air dilutes the intended FiO2, resulting in a delivered concentration below 35%.',
        explanationWrong:
          'The FiO2 cannot remain at 35% when the patient\'s demand exceeds the device\'s output. The FiO2 will not increase because room air has a lower oxygen concentration (21%). While there is some fluctuation, the net effect is a consistent decrease below 35%.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          'A patient on SIMV mode with a set rate of 12 has a total respiratory rate of 20 breaths/min. How many of the patient\'s breaths are spontaneous?',
        choices: {
          A: '8',
          B: '4',
          C: '12',
          D: '20',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In SIMV mode, the ventilator delivers the set number of mandatory breaths (12) and allows the patient to take additional spontaneous breaths. With a total rate of 20, the patient is taking 20 - 12 = 8 spontaneous breaths per minute.',
        explanationWrong:
          '4 would imply only 16 total breaths. 12 would mean no mandatory breaths are counted. 20 would mean all breaths are spontaneous, which contradicts the set rate.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          'A patient with cystic fibrosis is prescribed dornase alfa (Pulmozyme). What is the mechanism of action of this medication?',
        choices: {
          A: 'It relaxes bronchial smooth muscle to reduce bronchospasm',
          B: 'It inhibits inflammatory mediators in the airways',
          C: 'It breaks down DNA in purulent secretions, reducing sputum viscosity',
          D: 'It stimulates surfactant production in the alveoli',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Dornase alfa is a recombinant human DNase enzyme that cleaves extracellular DNA released by neutrophils in purulent secretions. By breaking down this DNA, it reduces the viscosity and adhesiveness of sputum, making it easier to clear from the airways.',
        explanationWrong:
          'Bronchial smooth muscle relaxation is the mechanism of bronchodilators, not dornase alfa. Anti-inflammatory activity is the mechanism of corticosteroids. Surfactant stimulation is not a mechanism associated with dornase alfa.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          'A patient\'s ABG shows pH 7.40, PaCO2 25 mmHg, HCO3 15 mEq/L. What is the acid-base status?',
        choices: {
          A: 'Fully compensated metabolic acidosis',
          B: 'Mixed metabolic acidosis and respiratory alkalosis',
          C: 'Fully compensated respiratory alkalosis',
          D: 'Normal acid-base balance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The pH is normal (7.40), the HCO3 is low (15 mEq/L, indicating metabolic acidosis), and the PaCO2 is low (25 mmHg, indicating respiratory compensation). The low HCO3 is the primary disturbance with full respiratory compensation bringing the pH back to normal.',
        explanationWrong:
          'Normal acid-base balance would have all values within normal ranges. A mixed disorder would result in an abnormal pH. Fully compensated respiratory alkalosis would have a low PaCO2 as the primary disturbance with renal excretion of bicarbonate.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          'A patient completes a 6-minute walk test and covers 350 meters with a lowest SpO2 of 84%. What does this result suggest?',
        choices: {
          A: 'Normal exercise tolerance with acceptable desaturation',
          B: 'The test should be repeated with bronchodilator therapy',
          C: 'The patient has normal cardiopulmonary function',
          D: 'The patient qualifies for supplemental oxygen during exertion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An SpO2 dropping below 88% during exercise indicates exercise-induced hypoxemia. According to Medicare guidelines, this qualifies the patient for supplemental oxygen during exertion. The 350-meter distance is also below average, indicating impaired exercise tolerance.',
        explanationWrong:
          'A desaturation to 84% is not acceptable and indicates significant exercise-induced hypoxemia. Repeating with a bronchodilator does not address the oxygenation issue. A 350-meter distance with desaturation to 84% is not indicative of normal function.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          'Which of the following respiratory conditions requires droplet precautions rather than airborne precautions?',
        choices: {
          A: 'Varicella (chickenpox)',
          B: 'Pertussis (whooping cough)',
          C: 'Pulmonary tuberculosis',
          D: 'Measles',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pertussis is transmitted via large respiratory droplets that do not remain suspended in the air and travel only short distances (3-6 feet). It requires droplet precautions including a surgical mask within 3-6 feet of the patient.',
        explanationWrong:
          'Varicella, pulmonary tuberculosis, and measles are all transmitted by airborne droplet nuclei that remain suspended in the air for extended periods and require airborne precautions with an N95 respirator and negative-pressure isolation.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          'A therapist is setting up a large-volume nebulizer with an air-entrainment device. At the 40% setting, the device produces 32 L/min total flow. The ordered flow to the nebulizer is 10 L/min. What is the approximate air-to-oxygen ratio at 40% FiO2?',
        choices: {
          A: '3:1',
          B: '1:1',
          C: '5:1',
          D: '8:1',
        },
        correctChoice: 'A',
        explanationCorrect:
          'At 40% FiO2, the air-to-oxygen entrainment ratio is approximately 3:1. With an oxygen input of 10 L/min, the device entrains approximately 30 L/min of room air, but the actual total output is approximately 32 L/min (accounting for slight variations). The 3:1 ratio means 3 parts room air to 1 part oxygen.',
        explanationWrong:
          '1:1 corresponds to approximately 60% FiO2. 5:1 corresponds to approximately 30% FiO2. 8:1 corresponds to approximately 24-25% FiO2.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          'A term neonate presents with cyanosis that does not improve with 100% oxygen administration. The chest X-ray shows decreased pulmonary vascular markings. Which congenital condition should be suspected?',
        choices: {
          A: 'Ventricular septal defect',
          B: 'Patent ductus arteriosus',
          C: 'Tetralogy of Fallot',
          D: 'Atrial septal defect',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Tetralogy of Fallot is a cyanotic congenital heart defect that presents with cyanosis unresponsive to supplemental oxygen (due to right-to-left shunting). The chest X-ray classically shows decreased pulmonary vascular markings (due to right ventricular outflow obstruction) and a boot-shaped heart.',
        explanationWrong:
          'Ventricular septal defect initially causes left-to-right shunting with increased pulmonary blood flow and is not typically cyanotic at birth. Patent ductus arteriosus also causes left-to-right shunting initially. Atrial septal defect is usually an acyanotic defect with left-to-right shunting.',
        topic: 'Neonatal/Pediatric Basics',
      },
    ],
  })

  // ─── EXAM 5 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 5',
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
          'A patient is found unresponsive with a respiratory rate of 6 breaths/min and pinpoint pupils. Which medication should be administered immediately?',
        choices: {
          A: 'Epinephrine',
          B: 'Naloxone (Narcan)',
          C: 'Atropine',
          D: 'Flumazenil',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The triad of unresponsiveness, respiratory depression, and pinpoint (miotic) pupils is the classic presentation of opioid overdose. Naloxone is a competitive opioid receptor antagonist that rapidly reverses the effects of opioid overdose, including respiratory depression.',
        explanationWrong:
          'Epinephrine is used in cardiac arrest and anaphylaxis, not opioid overdose. Atropine increases heart rate and is used for bradycardia, not respiratory depression from opioids. Flumazenil reverses benzodiazepine overdose, not opioid overdose.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is asked to change an inner cannula on a tracheostomy tube. Which type of tracheostomy tube has a removable inner cannula?',
        choices: {
          A: 'Single-cannula cuffed tracheostomy tube',
          B: 'Fenestrated uncuffed tube without an inner cannula',
          C: 'Double-cannula tracheostomy tube',
          D: 'Olympic tracheostomy tube',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A double-cannula tracheostomy tube consists of an outer cannula (which stays in the stoma) and a removable inner cannula that can be withdrawn for cleaning or replacement. This design allows maintenance of airway patency without removing the entire tube.',
        explanationWrong:
          'Single-cannula tubes do not have a removable inner cannula. A fenestrated tube without an inner cannula is a single-lumen design. Olympic tracheostomy tubes are neonatal tubes that typically do not have inner cannulas.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          'A patient on a non-rebreather mask at 15 L/min has an SpO2 of 78%. The respiratory therapist should recommend which of the following?',
        choices: {
          A: 'Increase the flow to 20 L/min on the non-rebreather',
          B: 'Add a nasal cannula underneath the non-rebreather',
          C: 'Switch to a Venturi mask at 50%',
          D: 'Prepare for non-invasive or invasive ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A non-rebreather mask at 15 L/min delivers the highest FiO2 available from standard oxygen therapy (approximately 70-90%). If the patient remains severely hypoxemic despite maximal oxygen therapy, the next step is to escalate to non-invasive positive-pressure ventilation (NIPPV) or prepare for intubation and invasive mechanical ventilation.',
        explanationWrong:
          'Increasing flow beyond 15 L/min on a non-rebreather does not significantly increase FiO2. Adding a nasal cannula underneath is not standard practice. Switching to a Venturi mask at 50% would actually decrease the FiO2 from what the non-rebreather delivers.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          'A patient on assist-control pressure ventilation has a set pressure of 20 cmH2O, PEEP of 5 cmH2O, and a delivered tidal volume of 450 mL. The patient\'s lung compliance suddenly worsens. What will happen to the delivered tidal volume?',
        choices: {
          A: 'The tidal volume will decrease',
          B: 'The tidal volume will remain the same',
          C: 'The tidal volume will initially increase then stabilize',
          D: 'The tidal volume will increase',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In pressure-controlled ventilation, the pressure is constant but the tidal volume varies with changes in lung compliance and airway resistance. When compliance decreases (worsens), the lungs become stiffer, and less volume is delivered for the same pressure, resulting in a decreased tidal volume.',
        explanationWrong:
          'In pressure modes, volume decreases when compliance worsens (unlike volume modes where pressure increases). The volume will not remain the same because it is variable in pressure ventilation. There is no initial increase followed by stabilization; the effect is an immediate decrease.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          'A COPD patient is started on a combination inhaler containing fluticasone and salmeterol (Advair). What important instruction should the therapist provide?',
        choices: {
          A: 'Use this inhaler as a rescue medication during acute exacerbations',
          B: 'Take this medication only when experiencing shortness of breath',
          C: 'Rinse the mouth with water after each use to prevent oral candidiasis',
          D: 'Discontinue the medication if symptoms improve after one week',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Combination inhalers containing inhaled corticosteroids (fluticasone) can cause oropharyngeal candidiasis (thrush) and dysphonia. Rinsing the mouth with water and spitting after each use helps prevent these local side effects by removing residual corticosteroid from the oral cavity.',
        explanationWrong:
          'Advair is a maintenance medication and should not be used as a rescue inhaler; salmeterol has a slow onset of action. It should be used regularly as prescribed, not only during symptoms. It should not be discontinued after one week; maintenance therapy requires consistent use.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          'A patient has the following ABG values: pH 7.35, PaCO2 60 mmHg, HCO3 33 mEq/L, PaO2 58 mmHg on room air. What is the most accurate interpretation?',
        choices: {
          A: 'Acute respiratory acidosis with hypoxemia',
          B: 'Compensated metabolic alkalosis',
          C: 'Normal acid-base balance with hypoxemia',
          D: 'Compensated respiratory acidosis with hypoxemia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The elevated PaCO2 (60 mmHg) indicates respiratory acidosis, but the pH is at the low end of normal (7.35) because the HCO3 is elevated (33 mEq/L) in compensation. This is consistent with chronic respiratory acidosis, commonly seen in stable COPD. The PaO2 of 58 mmHg on room air indicates hypoxemia.',
        explanationWrong:
          'Acute respiratory acidosis would have a pH well below normal because compensation has not occurred. Compensated metabolic alkalosis would have an elevated HCO3 as the primary disturbance. While the pH is at the low-normal range, the significantly abnormal PaCO2 and HCO3 indicate a compensated acid-base disorder, not normal balance.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          'A patient complains of dyspnea and has a reduced total lung capacity (TLC), reduced vital capacity (VC), and a normal FEV1/FVC ratio. Which condition is most consistent with these findings?',
        choices: {
          A: 'Chronic bronchitis',
          B: 'Pulmonary fibrosis',
          C: 'Emphysema',
          D: 'Asthma',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pulmonary fibrosis is a restrictive lung disease characterized by reduced lung volumes (TLC, VC) with a preserved or elevated FEV1/FVC ratio. The stiff, fibrotic lungs cannot expand fully but the airways themselves are not obstructed.',
        explanationWrong:
          'Chronic bronchitis is an obstructive disease with a reduced FEV1/FVC ratio. Emphysema is obstructive with an increased TLC (air trapping) and reduced FEV1/FVC. Asthma is obstructive with a reduced FEV1/FVC during exacerbation.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is reprocessing reusable respiratory equipment. Which of the following items requires sterilization rather than high-level disinfection?',
        choices: {
          A: 'Surgical instruments used during a tracheostomy',
          B: 'A flexible bronchoscope',
          C: 'A non-invasive ventilation mask',
          D: 'A laryngoscope blade',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Surgical instruments that enter sterile body tissues (critical items in the Spaulding classification) require sterilization to eliminate all microorganisms, including bacterial spores. Tracheostomy surgical instruments fall into this category.',
        explanationWrong:
          'Laryngoscope blades are semi-critical items that contact mucous membranes and require at minimum high-level disinfection. Flexible bronchoscopes are semi-critical and typically undergo high-level disinfection. Non-invasive masks are non-critical to semi-critical items requiring low to intermediate-level disinfection.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          'A ventilator alarm sounds indicating high pressure. The respiratory therapist assesses the patient and finds the ventilator circuit tubing is filled with condensate (rainout). What is the appropriate action?',
        choices: {
          A: 'Increase the high-pressure alarm limit',
          B: 'Reduce the tidal volume to lower the peak pressure',
          C: 'Disconnect the circuit and pour the condensate into the humidifier',
          D: 'Drain the condensate from the circuit into a waste container',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Condensate accumulation in the ventilator circuit increases resistance to airflow and can trigger high-pressure alarms. The condensate should be drained into a waste container (never back into the humidifier, as it may be contaminated) to restore normal circuit function.',
        explanationWrong:
          'Increasing the alarm limit masks the problem without fixing it and could allow dangerous pressures. Pouring condensate back into the humidifier is a significant infection control violation as the condensate is contaminated. Reducing tidal volume changes the ventilation prescription and does not address the underlying issue.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          'An infant born at 26 weeks gestation is receiving mechanical ventilation with a tidal volume of 5 mL/kg. The therapist notes increasing FiO2 requirements and bilateral hazy opacities on chest X-ray at 28 days of life. What is the most likely diagnosis?',
        choices: {
          A: 'Bronchopulmonary dysplasia',
          B: 'Respiratory distress syndrome',
          C: 'Pneumonia',
          D: 'Transient tachypnea of the newborn',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Bronchopulmonary dysplasia (BPD) is a chronic lung disease of prematurity defined by the need for supplemental oxygen at 28 days of life or 36 weeks postmenstrual age. It results from a combination of lung immaturity, mechanical ventilation, and oxygen toxicity in premature infants.',
        explanationWrong:
          'RDS presents in the first hours of life, not at 28 days. While pneumonia is possible, the clinical scenario of a premature infant with increasing oxygen needs at 28 days is classic for BPD. TTN resolves within 24-72 hours and occurs in near-term or term infants.',
        topic: 'Neonatal/Pediatric Basics',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is assessing a patient and notes subcutaneous emphysema in the neck and upper chest. Which condition is most likely present?',
        choices: {
          A: 'Pulmonary edema',
          B: 'Severe bronchospasm',
          C: 'Air leak syndrome (pneumothorax or pneumomediastinum)',
          D: 'Superior vena cava syndrome',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Subcutaneous emphysema (air trapped under the skin producing a crackling sensation on palpation) is a hallmark sign of air leak from the respiratory system. It is most commonly associated with pneumothorax, pneumomediastinum, or post-procedural complications such as chest tube placement or tracheostomy.',
        explanationWrong:
          'Pulmonary edema produces crackles on auscultation but not subcutaneous emphysema. Severe bronchospasm causes wheezing and air trapping within the lungs, not subcutaneous air. Superior vena cava syndrome causes facial and upper extremity swelling, not subcutaneous air.',
        topic: 'Patient Assessment and Monitoring',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          'What is the primary reason for performing a cuff leak test before extubating a patient who has been intubated for an extended period?',
        choices: {
          A: 'To verify the endotracheal tube is the correct size',
          B: 'To assess for laryngeal or subglottic edema that may cause post-extubation stridor',
          C: 'To determine if the patient can protect their airway',
          D: 'To measure the patient\'s tidal volume accurately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A cuff leak test evaluates for upper airway edema (laryngeal or subglottic swelling) that may cause post-extubation stridor and potentially require re-intubation. The cuff is deflated, and if air can be heard or measured escaping around the tube, it suggests adequate airway caliber.',
        explanationWrong:
          'Tube size was determined at the time of intubation and is not assessed by a cuff leak test. Airway protection (gag reflex, cough strength) is assessed separately. The test measures air leak around the tube, not the patient\'s tidal volume.',
        topic: 'Airway Management',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          'A patient on a 35% Venturi mask is switched to a 50% Venturi mask. Compared to the 35% setting, the total flow output at the 50% setting will be:',
        choices: {
          A: 'Higher because more air is entrained at higher FiO2 settings',
          B: 'The same regardless of the FiO2 setting',
          C: 'Variable and unpredictable',
          D: 'Lower because less air is entrained at higher FiO2 settings',
        },
        correctChoice: 'D',
        explanationCorrect:
          'As the FiO2 setting increases on a Venturi mask, the entrainment ratio decreases (less room air is entrained per liter of oxygen). This results in a lower total output flow. For example, at 24% FiO2, the ratio is approximately 25:1 producing high total flow, while at 50% FiO2, the ratio is approximately 1.7:1 producing much lower total flow.',
        explanationWrong:
          'Higher FiO2 settings entrain less room air, not more. The total flow is not the same; it varies inversely with FiO2 setting. The relationship is predictable based on the entrainment ratio.',
        topic: 'Oxygen Therapy and Delivery Devices',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          'A patient on mechanical ventilation develops auto-PEEP (intrinsic PEEP) of 8 cmH2O. Which ventilator adjustment is most appropriate to reduce auto-PEEP?',
        choices: {
          A: 'Decrease the respiratory rate to allow more expiratory time',
          B: 'Increase the respiratory rate',
          C: 'Increase the inspiratory time',
          D: 'Increase the set PEEP to match the auto-PEEP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Auto-PEEP (air trapping) occurs when expiration is incomplete before the next breath begins. Decreasing the respiratory rate extends the expiratory time, allowing more complete exhalation and reducing trapped gas. Other strategies include increasing expiratory flow and decreasing tidal volume.',
        explanationWrong:
          'Increasing the respiratory rate would shorten expiratory time and worsen auto-PEEP. Increasing inspiratory time would also shorten expiratory time at a given rate. Increasing set PEEP to match auto-PEEP can help with triggering but does not reduce the auto-PEEP itself.',
        topic: 'Mechanical Ventilation Basics',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          'Which of the following medications is a mucolytic agent that breaks disulfide bonds in mucoproteins to reduce sputum viscosity?',
        choices: {
          A: 'Dornase alfa',
          B: 'Hypertonic saline (7%)',
          C: 'Acetylcysteine (Mucomyst)',
          D: 'Normal saline (0.9%)',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Acetylcysteine (Mucomyst) is a classic mucolytic agent that works by breaking disulfide bonds in the glycoprotein structure of mucus, thereby reducing sputum viscosity and making it easier to clear. It is also used as an antidote for acetaminophen overdose.',
        explanationWrong:
          'Dornase alfa breaks down extracellular DNA, not disulfide bonds in mucoproteins. Hypertonic saline works by drawing water into the airway by osmosis to hydrate secretions. Normal saline is used for hydration and airway clearance but does not have a mucolytic mechanism.',
        topic: 'Pharmacology',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          'A patient\'s ABG on 6 L/min nasal cannula shows pH 7.44, PaCO2 38 mmHg, HCO3 25 mEq/L, PaO2 350 mmHg. What is the most appropriate action?',
        choices: {
          A: 'Continue current oxygen therapy',
          B: 'Decrease the FiO2 to prevent oxygen toxicity',
          C: 'Obtain a repeat ABG in 4 hours',
          D: 'Increase the oxygen flow rate',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A PaO2 of 350 mmHg indicates the patient is receiving far more oxygen than needed. Prolonged exposure to high FiO2 can lead to oxygen toxicity, absorption atelectasis, and in neonates, retinopathy of prematurity. The FiO2 should be reduced to maintain a PaO2 of 60-100 mmHg.',
        explanationWrong:
          'Continuing the current therapy exposes the patient to unnecessary oxygen toxicity risk. Increasing oxygen would further worsen the hyperoxia. Waiting 4 hours to repeat the ABG delays an intervention that should be made now.',
        topic: 'ABG Interpretation',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          'A patient\'s flow-volume loop shows a truncated (flattened) inspiratory limb with a normal expiratory limb. This pattern is most consistent with:',
        choices: {
          A: 'Intrathoracic obstruction',
          B: 'Variable extrathoracic obstruction',
          C: 'Fixed airway obstruction',
          D: 'Restrictive lung disease',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A flattened inspiratory loop with a normal expiratory loop is characteristic of a variable extrathoracic upper airway obstruction (such as vocal cord paralysis or extrathoracic tracheal tumor). During inspiration, negative intrathoracic pressure causes the extrathoracic airway to narrow further at the obstruction site, while during expiration, positive pressure splints the airway open.',
        explanationWrong:
          'Intrathoracic obstruction would flatten the expiratory limb while preserving the inspiratory limb. Fixed obstruction would flatten both inspiratory and expiratory limbs equally. Restrictive disease shows a smaller loop overall but with normal shape.',
        topic: 'Pulmonary Function Testing',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is preparing to transport a mechanically ventilated patient to radiology. Which of the following items is NOT essential for safe transport?',
        choices: {
          A: 'Manual resuscitation bag with oxygen source',
          B: 'Portable pulse oximeter',
          C: 'Portable chest X-ray machine',
          D: 'Portable ventilator or transport ventilator',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A portable chest X-ray machine is not essential equipment for transporting a ventilated patient. Essential transport items include a manual resuscitation bag (backup), portable oxygen, pulse oximetry for monitoring, suction equipment, emergency medications, and a transport ventilator.',
        explanationWrong:
          'A manual resuscitation bag is essential as backup ventilation. A portable pulse oximeter is essential for continuous monitoring during transport. A portable or transport ventilator is essential for maintaining mechanical ventilation settings during transport.',
        topic: 'Infection Control',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          'A bubble humidifier attached to a nasal cannula at 5 L/min is not producing visible bubbles. The flow is confirmed at the flowmeter. What is the most likely problem?',
        choices: {
          A: 'The flow rate is too low to produce bubbles',
          B: 'The humidifier needs to be replaced with a heated humidifier',
          C: 'The oxygen supply pressure is too low',
          D: 'The diffuser at the bottom of the humidifier is clogged or the jar is not tightened properly',
        },
        correctChoice: 'D',
        explanationCorrect:
          'If the flowmeter confirms flow but no bubbles are produced in the humidifier, the most likely causes are a clogged diffuser stone (which prevents gas from entering the water) or a loose/improperly sealed jar lid that allows gas to bypass the water column.',
        explanationWrong:
          'A flow of 5 L/min is adequate to produce visible bubbles. A heated humidifier is not necessary; the issue is a malfunction of the current device. If the flowmeter shows flow, the supply pressure is adequate.',
        topic: 'Equipment Operation and Troubleshooting',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          'A 6-year-old child with a history of asthma is admitted to the hospital with status asthmaticus. After continuous albuterol nebulization and IV corticosteroids, the child remains in severe distress with minimal air movement on auscultation. What does the finding of minimal air movement ("silent chest") indicate?',
        choices: {
          A: 'Severe airway obstruction with impending respiratory failure',
          B: 'The child has developed a pneumothorax',
          C: 'The treatment is working and bronchospasm is resolving',
          D: 'The child is hyperventilating from anxiety',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A "silent chest" in a patient with status asthmaticus is an ominous sign indicating that airway obstruction is so severe that very little air is moving in and out of the lungs. This finding signals impending respiratory failure and the need for immediate escalation of care, potentially including intubation and mechanical ventilation.',
        explanationWrong:
          'Resolving bronchospasm would produce improving breath sounds, not silence. While a pneumothorax is possible, a silent chest in the context of refractory status asthmaticus most likely indicates near-complete airway obstruction. Hyperventilation from anxiety would produce audible, rapid breathing, not silence.',
        topic: 'Neonatal/Pediatric Basics',
      },
    ],
  })

  console.log('Successfully seeded TMC mini exams 1-5.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
