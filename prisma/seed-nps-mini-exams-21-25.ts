import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 21-25...')

  // ─── EXAM 21 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Neonatal/pediatric HFNC therapy, Pediatric foreign body aspiration, Neonatal glucose management
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q14,Q18) B=5(Q1,Q7,Q11,Q16,Q20) C=5(Q3,Q6,Q13,Q15,Q19) D=5(Q4,Q8,Q10,Q12,Q17)
  const exam21 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 21',
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
          'A 34-week gestational age infant is placed on high-flow nasal cannula (HFNC) at 5 L/min with FiO2 0.30 for mild respiratory distress. Over the next two hours the infant develops increased work of breathing, abdominal distension, and oxygen saturation drops to 85%. What is the MOST likely complication?',
        choices: {
          A: 'Nasal septal necrosis from improper prong sizing',
          B: 'Gastric insufflation from excessive flow delivery',
          C: 'Apnea of prematurity triggered by heated humidity',
          D: 'Pneumothorax from air trapping caused by inadvertent CPAP effect',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Gastric insufflation is a recognized complication of HFNC in neonates. Excessive flow can force air into the stomach, causing abdominal distension, impaired diaphragmatic excursion, and worsening respiratory distress. An orogastric tube should be placed to decompress the stomach.',
        explanationWrong:
          'Nasal septal necrosis is a risk but presents as local tissue injury, not abdominal distension. Heated humidity does not trigger apnea. While air trapping and pneumothorax are possible with HFNC, the combination of abdominal distension with desaturation most strongly points to gastric insufflation.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 2,
        questionText:
          'When initiating HFNC therapy on a 3 kg neonate, which flow rate range is considered appropriate to provide adequate washout of nasopharyngeal dead space while minimizing the risk of excessive distending pressure?',
        choices: {
          A: '2 to 8 L/min',
          B: '0.5 to 1 L/min',
          C: '10 to 15 L/min',
          D: '15 to 20 L/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For neonates, HFNC flow rates of 2 to 8 L/min are generally recommended. This range provides sufficient flow to wash out nasopharyngeal dead space, reduce work of breathing, and deliver a modest amount of distending pressure without excessive risk of barotrauma or gastric insufflation.',
        explanationWrong:
          'Flows of 0.5 to 1 L/min are standard low-flow nasal cannula rates and do not provide the benefits of HFNC. Flows of 10 to 15 L/min or 15 to 20 L/min are excessive for a 3 kg neonate and significantly increase the risk of pneumothorax and gastric distension.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 3,
        questionText:
          'A previously healthy 2-year-old is brought to the emergency department after suddenly choking while eating grapes. The child is coughing forcefully and has audible inspiratory stridor. Oxygen saturation is 94%. What is the MOST appropriate initial management?',
        choices: {
          A: 'Perform abdominal thrusts (Heimlich maneuver) immediately',
          B: 'Administer nebulized racemic epinephrine to reduce airway edema',
          C: 'Allow the child to continue coughing and monitor closely without intervention',
          D: 'Perform direct laryngoscopy and attempt removal with Magill forceps',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When a child has an effective cough and is maintaining adequate oxygenation, the recommended approach is to allow the child to continue coughing as this is the most effective mechanism for clearing an airway obstruction. Interventions such as back blows or abdominal thrusts are indicated only when the cough becomes ineffective or the child deteriorates.',
        explanationWrong:
          'Abdominal thrusts are indicated for complete obstruction with ineffective cough. Racemic epinephrine treats croup-related edema, not foreign body obstruction. Direct laryngoscopy is reserved for visible supraglottic foreign bodies or when the child can no longer ventilate adequately.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 4,
        questionText:
          'A term neonate born to a mother with gestational diabetes has a blood glucose level of 22 mg/dL at 1 hour of life. The infant is jittery and has poor feeding. After an initial dextrose bolus, what is the recommended continuous glucose infusion rate to maintain euglycemia?',
        choices: {
          A: '2 to 3 mg/kg/min',
          B: '10 to 12 mg/kg/min',
          C: '0.5 to 1 mg/kg/min',
          D: '6 to 8 mg/kg/min',
        },
        correctChoice: 'D',
        explanationCorrect:
          'After an initial dextrose bolus (typically 2 mL/kg of D10W), a continuous glucose infusion rate of 6 to 8 mg/kg/min is recommended to maintain blood glucose above 45 mg/dL. This rate approximates normal hepatic glucose production in the neonate and can be titrated based on serial glucose monitoring.',
        explanationWrong:
          'A rate of 2 to 3 mg/kg/min is insufficient to maintain euglycemia in a symptomatic neonate. A rate of 0.5 to 1 mg/kg/min would not prevent recurrent hypoglycemia. A rate of 10 to 12 mg/kg/min is above the typical starting range and is usually reserved for refractory hypoglycemia.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is selecting nasal cannula prongs for a neonate being started on HFNC. Which sizing principle is MOST important to follow?',
        choices: {
          A: 'The prongs should occlude no more than 50% of each naris to allow for adequate leak',
          B: 'The prongs should fit snugly to occlude the nares completely for maximum pressure delivery',
          C: 'The prongs should be as large as possible to reduce flow velocity and noise',
          D: 'Prong size is not important as long as the prescribed flow rate is delivered',
        },
        correctChoice: 'A',
        explanationCorrect:
          'HFNC prongs should occlude no more than approximately 50% of each naris. This allows for an adequate leak around the prongs, which prevents excessive buildup of distending pressure, reduces the risk of air leak syndromes, and maintains a more consistent and predictable pressure delivery.',
        explanationWrong:
          'Complete naris occlusion converts HFNC into an unpredictable CPAP system with uncontrolled pressure, increasing the risk of pneumothorax. Larger prongs that reduce noise do not justify the risk of excessive pressure. Prong sizing is critical and directly affects the safety and efficacy of HFNC therapy.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 6,
        questionText:
          'A 4-year-old child presents with unilateral wheezing on the right side, decreased breath sounds on the right, and a history of playing with small toy parts earlier in the day. Chest radiograph shows hyperinflation of the right lung with mediastinal shift to the left. What is the MOST likely mechanism of this finding?',
        choices: {
          A: 'Complete obstruction of the right mainstem bronchus causing atelectasis',
          B: 'Partial obstruction of the left mainstem bronchus with air trapping',
          C: 'Ball-valve mechanism in the right mainstem bronchus causing expiratory air trapping',
          D: 'Tracheal foreign body causing bilateral hyperinflation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A ball-valve mechanism occurs when a foreign body allows air to enter the bronchus during inspiration but prevents air from exiting during expiration. This creates progressive air trapping distal to the obstruction, resulting in hyperinflation of the affected lung and mediastinal shift away from the affected side.',
        explanationWrong:
          'Complete obstruction would cause atelectasis and volume loss, not hyperinflation. The obstruction is on the right (matching the hyperinflation), not the left. A tracheal foreign body would cause bilateral findings, not unilateral hyperinflation.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 7,
        questionText:
          'A premature infant at 28 weeks gestation has a cranial ultrasound performed at 7 days of age that reveals a grade III intraventricular hemorrhage. Which of the following findings defines a grade III IVH?',
        choices: {
          A: 'Germinal matrix hemorrhage only without ventricular involvement',
          B: 'Intraventricular hemorrhage with acute ventricular dilation',
          C: 'Intraventricular hemorrhage occupying less than 50% of the ventricle',
          D: 'Intraventricular hemorrhage with parenchymal involvement',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Grade III IVH is defined as intraventricular hemorrhage with acute ventricular dilation (ventricles distended with blood). Grade I is confined to the germinal matrix, grade II involves the ventricle without dilation, and grade IV (now termed periventricular hemorrhagic infarction) includes parenchymal involvement.',
        explanationWrong:
          'Germinal matrix hemorrhage without ventricular involvement is grade I. IVH occupying less than 50% of the ventricle without dilation is grade II. Parenchymal involvement represents grade IV (periventricular hemorrhagic infarction), which carries the worst prognosis.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 8,
        questionText:
          'A neonate born at 26 weeks gestation is at high risk for intraventricular hemorrhage. Which of the following nursing and respiratory care practices is MOST effective in reducing the risk of IVH?',
        choices: {
          A: 'Routine endotracheal suctioning every 2 hours to maintain airway patency',
          B: 'Positioning the infant in Trendelenburg to promote cerebral perfusion',
          C: 'Administering prophylactic phenobarbital to all extremely premature infants',
          D: 'Maintaining the head in midline position and elevating the head of bed 15 to 30 degrees',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Maintaining the head in midline position prevents compression of the jugular veins, which could impede cerebral venous drainage and increase intracranial pressure. Elevating the head of bed 15 to 30 degrees promotes venous return from the brain. These positioning measures are well-established interventions for IVH prevention in premature infants.',
        explanationWrong:
          'Routine suctioning every 2 hours increases intracranial pressure fluctuations and is associated with increased IVH risk. Trendelenburg positioning increases intracranial pressure. Prophylactic phenobarbital has not been shown to significantly reduce IVH in clinical trials and is not recommended as standard practice.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 9,
        questionText:
          'A 5-year-old child weighing 20 kg is receiving HFNC at 25 L/min with FiO2 0.40 for bronchiolitis. The child continues to have a respiratory rate of 55 breaths/min, intercostal retractions, and SpO2 of 90%. What is the MOST appropriate next step?',
        choices: {
          A: 'Escalate to noninvasive positive pressure ventilation such as BiPAP',
          B: 'Increase the HFNC flow to 40 L/min',
          C: 'Add nebulized hypertonic saline via the HFNC circuit',
          D: 'Increase FiO2 to 1.0 and maintain current flow rate',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The child is showing signs of HFNC failure with persistent tachypnea, retractions, and hypoxemia despite adequate flow rates for body size (approximately 2 L/kg/min). Escalation to noninvasive positive pressure ventilation such as BiPAP provides more reliable and titratable positive pressure support and is the appropriate next step.',
        explanationWrong:
          'Increasing flow to 40 L/min exceeds recommended pediatric HFNC rates and does not address the need for more reliable positive pressure. Nebulized hypertonic saline has limited evidence in acute bronchiolitis management. Simply increasing FiO2 without addressing ventilatory support does not treat the underlying respiratory failure.',
        topic: 'Pediatric HFNC Therapy',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 10,
        questionText:
          'A term neonate presents with hypoglycemia (blood glucose 30 mg/dL), macrosomia, and plethora. The infant is asymptomatic aside from the low glucose. What is the MOST appropriate initial intervention?',
        choices: {
          A: 'Administer an immediate IV bolus of D10W at 2 mL/kg',
          B: 'Begin continuous insulin infusion to regulate glucose metabolism',
          C: 'Withhold feeds and recheck glucose in 4 hours',
          D: 'Encourage early breastfeeding or provide expressed breast milk or formula',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For asymptomatic neonatal hypoglycemia with a glucose level of 25 to 40 mg/dL, the initial intervention is to encourage feeding (breast milk or formula). Blood glucose should be rechecked 30 to 60 minutes after the feed. IV dextrose is reserved for symptomatic hypoglycemia or when feeding fails to raise glucose above threshold.',
        explanationWrong:
          'An IV dextrose bolus is indicated for symptomatic hypoglycemia (seizures, lethargy, apnea). Insulin infusion would worsen hypoglycemia. Withholding feeds and waiting 4 hours is inappropriate and could allow glucose to drop to dangerous levels.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is caring for a stable premature infant on HFNC. The nurse asks about the benefits of kangaroo care (skin-to-skin) while the infant is on HFNC. Which statement is MOST accurate?',
        choices: {
          A: 'Kangaroo care is contraindicated during any form of respiratory support',
          B: 'Kangaroo care can be safely performed during HFNC and has been shown to improve thermoregulation and cardiorespiratory stability',
          C: 'Kangaroo care during HFNC requires discontinuation of the heated humidification system',
          D: 'Kangaroo care should only be initiated after the infant is weaned to room air',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Kangaroo care (skin-to-skin contact) is safe and beneficial during HFNC therapy. Research has demonstrated improvements in thermoregulation, heart rate stability, oxygen saturation, and reduced stress in premature infants receiving kangaroo care, even while on respiratory support including HFNC.',
        explanationWrong:
          'Kangaroo care is not contraindicated during respiratory support and is practiced even during mechanical ventilation in many NICUs. The heated humidification system should be maintained during kangaroo care. Waiting until room air is not necessary and delays the well-documented benefits of skin-to-skin contact.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 12,
        questionText:
          'A neonate is born with an abdominal wall defect where bowel loops are exposed and not covered by a membrane. The defect is located to the right of the umbilical cord insertion. What is the MOST likely diagnosis?',
        choices: {
          A: 'Omphalocele',
          B: 'Umbilical hernia',
          C: 'Diaphragmatic hernia',
          D: 'Gastroschisis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Gastroschisis is characterized by a full-thickness abdominal wall defect typically located to the right of the umbilical cord insertion, with herniation of bowel that is not covered by a protective membrane. The exposed bowel is at risk for fluid loss, hypothermia, and infection and requires immediate surgical intervention.',
        explanationWrong:
          'Omphalocele involves herniation through the umbilical ring with a protective peritoneal membrane covering the contents. Umbilical hernia is a defect in the fascial ring with intact skin coverage. Diaphragmatic hernia is an internal defect where abdominal contents herniate into the thorax, not through the abdominal wall.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 13,
        questionText:
          'A 14-month-old child is brought to the emergency department with a 3-week history of recurrent right lower lobe pneumonia. The child has no fever but has a persistent cough. The parents deny any witnessed choking episode. What should the respiratory therapist suspect?',
        choices: {
          A: 'Cystic fibrosis with early bronchiectasis',
          B: 'Primary immunodeficiency with recurrent infection',
          C: 'Unwitnessed foreign body aspiration with retained foreign body',
          D: 'Congenital lobar emphysema of the right lower lobe',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Recurrent or persistent pneumonia in the same lobe in a toddler is a classic presentation of an unwitnessed foreign body aspiration. Many foreign body aspirations are not witnessed, and the initial choking episode may be mild or go unnoticed. The retained foreign body causes localized inflammation and recurrent infection. Bronchoscopy is indicated for definitive diagnosis and removal.',
        explanationWrong:
          'While cystic fibrosis and immunodeficiency can cause recurrent pneumonias, they typically affect multiple lobes or are bilateral. Congenital lobar emphysema presents with hyperinflation, not recurrent infection, and most commonly affects the left upper lobe.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 14,
        questionText:
          'A neonate with an omphalocele has the defect covered with a sterile saline-moistened dressing and is being prepared for surgical repair. Which respiratory complication should the respiratory therapist anticipate MOST during the post-repair period?',
        choices: {
          A: 'Respiratory compromise from increased intra-abdominal pressure impeding diaphragmatic excursion',
          B: 'Bronchopulmonary dysplasia from prolonged oxygen exposure',
          C: 'Laryngotracheal stenosis from prolonged intubation',
          D: 'Chylothorax from disruption of the thoracic duct',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After surgical repair of an omphalocele, replacing the herniated viscera back into the abdomen increases intra-abdominal pressure, which pushes the diaphragm upward and restricts lung expansion. This can cause significant respiratory compromise requiring mechanical ventilation with strategies to manage reduced compliance and elevated peak pressures.',
        explanationWrong:
          'Bronchopulmonary dysplasia is a chronic complication of prematurity, not an acute post-surgical finding. Laryngotracheal stenosis develops after prolonged intubation (weeks), not immediately post-repair. Chylothorax results from thoracic duct injury, which is not associated with abdominal wall defect repair.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 15,
        questionText:
          'A 6-year-old child with asthma is prescribed inhaled corticosteroids via metered-dose inhaler (MDI) with a valved holding chamber. The respiratory therapist is educating the family. Which instruction is MOST important for effective drug delivery?',
        choices: {
          A: 'Have the child exhale completely, actuate the MDI, and inhale rapidly',
          B: 'Actuate the MDI during the middle of a tidal breath',
          C: 'Have the child take a slow, deep breath over 3 to 5 seconds after actuation into the chamber',
          D: 'Actuate 3 to 4 puffs simultaneously into the chamber and then have the child inhale',
        },
        correctChoice: 'C',
        explanationCorrect:
          'For optimal drug delivery from an MDI with a valved holding chamber, the child should take a slow, deep inhalation over 3 to 5 seconds after a single actuation into the chamber. This slow inspiratory flow rate allows for greater deposition in the lower airways and reduces oropharyngeal impaction.',
        explanationWrong:
          'Rapid inhalation increases oropharyngeal deposition and reduces lower airway delivery. Actuating during a tidal breath reduces the inhaled dose. Multiple actuations into the chamber simultaneously reduce drug availability due to electrostatic precipitation and particle aggregation within the chamber.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 16,
        questionText:
          'A neonate is diagnosed with type C (H-type) tracheoesophageal fistula without esophageal atresia. Which clinical presentation is MOST characteristic of this variant?',
        choices: {
          A: 'Complete inability to pass an orogastric tube',
          B: 'Recurrent episodes of coughing, choking, and aspiration pneumonia with feeding',
          C: 'Immediate respiratory distress at birth with scaphoid abdomen',
          D: 'Bilious vomiting with abdominal distension in the first hours of life',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The H-type tracheoesophageal fistula (type C without atresia) presents with a patent esophagus, so an orogastric tube can be passed normally. The fistulous connection between the trachea and esophagus causes recurrent episodes of coughing, choking, and aspiration pneumonia, particularly during feeding. This variant is often diagnosed later because the symptoms may be subtle initially.',
        explanationWrong:
          'Inability to pass an orogastric tube indicates esophageal atresia, which is absent in the H-type fistula. A scaphoid abdomen with respiratory distress suggests congenital diaphragmatic hernia. Bilious vomiting with distension suggests intestinal obstruction, not tracheoesophageal fistula.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 17,
        questionText:
          'A 3-year-old child is in status epilepticus and has received two doses of benzodiazepines. The child develops hypoventilation with a respiratory rate of 8 breaths/min and SpO2 of 82%. What is the MOST appropriate respiratory intervention?',
        choices: {
          A: 'Administer high-flow nasal cannula at 2 L/kg/min',
          B: 'Place a nasopharyngeal airway and observe',
          C: 'Administer flumazenil to reverse the benzodiazepine effect',
          D: 'Provide bag-mask ventilation and prepare for intubation if respiratory depression persists',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The child has respiratory failure secondary to benzodiazepine-induced respiratory depression during treatment for status epilepticus. Immediate bag-mask ventilation is required to restore oxygenation and ventilation. If respiratory depression persists, endotracheal intubation should be performed. This is a medical emergency requiring definitive airway management.',
        explanationWrong:
          'HFNC does not provide adequate ventilatory support for apnea or severe hypoventilation. A nasopharyngeal airway alone does not address hypoventilation. Flumazenil is contraindicated in status epilepticus because reversing the benzodiazepine will likely precipitate recurrent seizures, which are more dangerous than managing the respiratory depression.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is administering albuterol via small volume nebulizer to a 9-month-old infant. Which of the following techniques will MOST improve aerosol delivery to the lower airways?',
        choices: {
          A: 'Use a properly fitting face mask held snugly against the face rather than blow-by technique',
          B: 'Use a mouthpiece adapter instead of a face mask',
          C: 'Direct the nebulizer stream toward the infant from 2 cm away (blow-by)',
          D: 'Have the parent hold the nebulizer near the infant while the infant is sleeping',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A properly fitting face mask held snugly against the face is the optimal delivery method for infants who cannot use a mouthpiece. A tight seal minimizes aerosol loss to the environment and maximizes the inhaled dose. Studies have shown that blow-by technique delivers less than 1% of the medication to the lungs compared to 3 to 5% with a properly fitted mask.',
        explanationWrong:
          'A mouthpiece is not appropriate for a 9-month-old infant who cannot form a seal and coordinate breathing. Blow-by technique (holding the nebulizer near the face) results in extremely poor drug delivery. Nebulizing while sleeping with loose proximity to the face is equally ineffective.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 19,
        questionText:
          'A premature infant receiving kangaroo care begins to have episodes of oxygen desaturation to 80% and bradycardia to 90 beats/min during skin-to-skin sessions. What is the MOST appropriate action?',
        choices: {
          A: 'Discontinue kangaroo care permanently as the infant is not tolerating it',
          B: 'Administer caffeine citrate before each kangaroo care session',
          C: 'Assess the infant\'s positioning to ensure the airway is not obstructed and the neck is not flexed',
          D: 'Increase the HFNC flow rate by 2 L/min during kangaroo care sessions',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Desaturation and bradycardia during kangaroo care are most commonly caused by positional airway obstruction, particularly neck flexion in premature infants. The first step is to assess and correct the infant\'s positioning, ensuring a neutral or slightly extended neck position with a patent airway. Permanent discontinuation is not warranted before addressing positioning.',
        explanationWrong:
          'Permanently discontinuing kangaroo care is premature without first assessing for correctable causes such as positioning. Prophylactic caffeine before kangaroo care is not standard practice. Increasing HFNC flow does not address positional airway obstruction, which is the most likely cause.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam21.id,
        questionIndex: 20,
        questionText:
          'A 7-year-old child with known peanut allergy accidentally ingests peanuts and develops stridor, facial swelling, and diffuse wheezing. Oxygen saturation is 88%. After epinephrine administration, the stridor persists. The respiratory therapist is asked to assist with airway management. Which consideration is MOST important?',
        choices: {
          A: 'Anaphylaxis does not affect the lower airway so bronchodilators are unnecessary',
          B: 'The airway may be significantly edematous, requiring a smaller than predicted endotracheal tube size if intubation is necessary',
          C: 'Heliox is the first-line treatment for anaphylaxis-related stridor',
          D: 'Noninvasive ventilation is contraindicated in the setting of anaphylaxis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In anaphylaxis, significant upper airway edema can rapidly narrow the airway. If intubation becomes necessary, the clinician should anticipate needing a smaller endotracheal tube than predicted for the child\'s age due to subglottic and supraglottic swelling. A difficult airway cart should be readily available, and a surgical airway may need to be considered.',
        explanationWrong:
          'Anaphylaxis causes bronchospasm affecting the lower airway, making bronchodilators important adjunctive therapy. Heliox may be helpful but is not the first-line treatment. NIV is not specifically contraindicated in anaphylaxis and may be used as a bridge to definitive airway management.',
        topic: 'Board-Style Integration Scenario',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 21 seeded (20 questions, isFree: false)')

  // ─── EXAM 22 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric difficult airway management, Neonatal electrolyte management, TEF repair respiratory care
  // Correct answer distribution: A=5(Q3,Q8,Q12,Q17,Q19) B=5(Q2,Q6,Q10,Q14,Q20) C=5(Q1,Q5,Q9,Q15,Q18) D=5(Q4,Q7,Q11,Q13,Q16)
  const exam22 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 22',
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
          'A 4-year-old child with Pierre Robin sequence requires intubation for an elective procedure. The anesthesiologist anticipates a difficult airway. Which device is MOST appropriate as the primary intubation tool for this patient?',
        choices: {
          A: 'Standard direct laryngoscopy with a Miller blade',
          B: 'Blind nasotracheal intubation',
          C: 'Flexible fiberoptic bronchoscope-guided intubation',
          D: 'Retrograde intubation technique',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Flexible fiberoptic bronchoscope-guided intubation is the preferred technique for children with known difficult airways such as Pierre Robin sequence (micrognathia, glossoptosis, and cleft palate). The fiberoptic scope allows visualization of the airway anatomy and guided placement of the endotracheal tube under direct visualization despite abnormal anatomy.',
        explanationWrong:
          'Direct laryngoscopy is often unsuccessful in Pierre Robin sequence due to the severe micrognathia and posteriorly displaced tongue obscuring the view of the glottis. Blind nasotracheal intubation is not recommended in children due to adenoid tissue and high failure rates. Retrograde intubation is technically difficult in small children and is not a first-line approach.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 2,
        questionText:
          'A term neonate is found to have a serum sodium of 125 mEq/L at 48 hours of life. The infant was born via uncomplicated vaginal delivery and has been exclusively breastfed. The mother reports the infant seems lethargic. What is the MOST likely cause of hyponatremia?',
        choices: {
          A: 'Syndrome of inappropriate ADH secretion from birth asphyxia',
          B: 'Excessive free water intake from overfeeding with dilute formula or water supplementation',
          C: 'Congenital adrenal hyperplasia with salt-wasting',
          D: 'Inadequate sodium content in mature breast milk',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In a term neonate at 48 hours with hyponatremia, excessive free water intake is the most common cause. This can occur from well-intentioned supplementation with water or incorrectly diluted formula between breastfeeding sessions. The history of exclusive breastfeeding should be verified, as families sometimes supplement without mentioning it.',
        explanationWrong:
          'SIADH from birth asphyxia would require a history of perinatal distress, which is absent in this uncomplicated delivery. Congenital adrenal hyperplasia typically presents with ambiguous genitalia in females and electrolyte abnormalities including hyperkalemia. Breast milk sodium content is adequate for neonatal needs.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is managing a neonate who has undergone primary repair of a type C tracheoesophageal fistula (proximal atresia with distal fistula). Which ventilator strategy is MOST appropriate in the immediate postoperative period?',
        choices: {
          A: 'Use the lowest effective peak inspiratory pressures and avoid excessive positive pressure to protect the esophageal anastomosis',
          B: 'Apply high PEEP of 10 to 12 cm H2O to prevent atelectasis at the operative site',
          C: 'Use high-frequency oscillatory ventilation to minimize tidal volume delivery',
          D: 'Maintain spontaneous breathing mode only to avoid positive pressure on the repair site',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After TEF repair, the primary concern is protecting the esophageal anastomosis from disruption. Excessive positive pressure can be transmitted to the posterior tracheal wall and the repair site. The respiratory therapist should use the lowest effective peak inspiratory pressures, minimize PEEP, and avoid unnecessary suctioning beyond the distal tip of the ETT.',
        explanationWrong:
          'High PEEP of 10 to 12 cm H2O increases the risk of anastomotic leak by transmitting excessive pressure to the repair site. HFOV is not routinely indicated and may generate higher mean airway pressures. Spontaneous breathing mode alone may not provide adequate ventilatory support in the immediate postoperative period.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 4,
        questionText:
          'A 2-year-old child with a history of subglottic stenosis requires reintubation after accidental extubation. The original ETT size was 4.0 mm uncuffed. Which approach is MOST appropriate?',
        choices: {
          A: 'Reinsert the same 4.0 mm uncuffed tube immediately',
          B: 'Attempt intubation with a 4.5 mm cuffed tube to prevent air leak',
          C: 'Use a supraglottic airway device as the definitive airway',
          D: 'Attempt intubation with a 3.5 mm tube and have a 3.0 mm tube immediately available',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a child with known subglottic stenosis, the airway may have additional edema after reintubation attempts. It is safest to start with a tube 0.5 mm smaller than the previous size (3.5 mm) and have an even smaller tube (3.0 mm) readily available. Forcing the original size may cause further trauma to the already narrowed subglottis.',
        explanationWrong:
          'Reinserting the same size tube risks trauma in a stenotic airway that may now have additional edema. A larger cuffed tube would be even more traumatic. A supraglottic airway device is a temporizing measure, not a definitive airway in a child with subglottic stenosis who requires intubation.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 5,
        questionText:
          'A premature neonate at 32 weeks gestation develops hyperkalemia (serum potassium 7.2 mEq/L) with peaked T waves on the cardiac monitor. Which intervention provides the MOST rapid stabilization of the cardiac membrane?',
        choices: {
          A: 'Sodium polystyrene sulfonate (Kayexalate) administered rectally',
          B: 'Nebulized albuterol to drive potassium intracellularly',
          C: 'IV calcium gluconate to stabilize the myocardium',
          D: 'IV insulin with dextrose to shift potassium intracellularly',
        },
        correctChoice: 'C',
        explanationCorrect:
          'IV calcium gluconate is the fastest-acting intervention for hyperkalemia with cardiac involvement. It does not lower the serum potassium level but stabilizes the cardiac membrane within 1 to 3 minutes, protecting against fatal arrhythmias. This buys time for other interventions (insulin/dextrose, albuterol) to lower the actual potassium level.',
        explanationWrong:
          'Sodium polystyrene sulfonate removes potassium from the body but takes hours to work and carries risk of bowel necrosis in neonates. Nebulized albuterol shifts potassium intracellularly but takes 15 to 30 minutes. Insulin with dextrose is effective but takes 15 to 30 minutes. None of these provide the immediate cardiac protection that calcium gluconate offers.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is using a video laryngoscope to intubate a 5-year-old child with a Cormack-Lehane grade III view on direct laryngoscopy. What is the PRIMARY advantage of video laryngoscopy in this situation?',
        choices: {
          A: 'It eliminates the need for proper patient positioning',
          B: 'It provides an improved glottic view by displaying the airway on a screen without requiring alignment of the oral, pharyngeal, and laryngeal axes',
          C: 'It allows for a larger endotracheal tube to be used',
          D: 'It converts the procedure from a difficult airway to a normal airway',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Video laryngoscopy provides an improved view of the glottis by placing the camera at the blade tip, eliminating the need for direct line-of-sight alignment of the oral, pharyngeal, and tracheal axes. This is particularly beneficial in children with Cormack-Lehane grade III or IV views on direct laryngoscopy.',
        explanationWrong:
          'Video laryngoscopy does not eliminate the need for proper positioning; optimal positioning still improves success rates. It does not allow for a larger ETT. While it improves visualization, the underlying anatomy remains the same and the airway is still considered difficult.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 7,
        questionText:
          'A neonate born at 25 weeks gestation is on mechanical ventilation. The cranial ultrasound at day 3 shows a grade I IVH. When should the follow-up cranial ultrasound be performed?',
        choices: {
          A: 'No follow-up is needed for grade I IVH',
          B: 'Repeat at 6 months corrected age',
          C: 'Repeat at 30 days of age only',
          D: 'Repeat at 7 to 10 days after the initial scan and again at 36 to 40 weeks postmenstrual age',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current guidelines recommend follow-up cranial ultrasound at 7 to 10 days after the initial abnormal finding to assess for progression of hemorrhage, and again near term-equivalent age (36 to 40 weeks postmenstrual age) to evaluate for periventricular leukomalacia and ventricular dilation, which may develop over time.',
        explanationWrong:
          'Grade I IVH requires follow-up because hemorrhage can progress. Waiting until 6 months corrected age misses the critical window for detecting progression and white matter injury. A single follow-up at 30 days alone is insufficient to capture late white matter changes.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is preparing to deliver aerosolized medication to an intubated 3-year-old via an MDI with an in-line adapter connected to the ventilator circuit. Which technique MOST improves drug delivery to the lower airways?',
        choices: {
          A: 'Actuate the MDI at the beginning of the inspiratory phase and use a spacer chamber in the circuit',
          B: 'Actuate the MDI during the expiratory phase to allow medication to settle in the circuit',
          C: 'Remove the heat and moisture exchanger before actuation and replace it after treatment',
          D: 'Increase the ventilator rate to deliver more breaths during the treatment period',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Synchronizing MDI actuation with the beginning of the inspiratory phase ensures that the aerosol is carried into the lungs by the inspiratory flow. Using a spacer chamber in the ventilator circuit reduces aerosol impaction on circuit walls and improves drug delivery to the lower airways by 4 to 6 times compared to direct actuation without a spacer.',
        explanationWrong:
          'Actuating during the expiratory phase wastes medication as it is either exhaled or deposited in the circuit. While removing an HME is sometimes recommended, it does not improve delivery as much as proper timing and spacer use. Increasing ventilator rate does not improve per-breath drug delivery.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 9,
        questionText:
          'A neonate with gastroschisis is in the delivery room. The intestines are exposed and not covered by a membrane. What is the MOST important immediate respiratory and thermoregulatory intervention?',
        choices: {
          A: 'Place the infant under radiant warmer and wrap the exposed bowel in dry sterile gauze',
          B: 'Intubate immediately regardless of respiratory status',
          C: 'Cover the exposed bowel with warm saline-soaked sterile dressings, wrap the lower body in a bowel bag, and minimize insensible fluid losses',
          D: 'Administer surfactant prophylactically due to expected respiratory distress',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The immediate priority for gastroschisis is covering the exposed bowel with warm saline-soaked sterile dressings and wrapping the lower body in a sterile bowel bag. This minimizes massive insensible fluid and heat losses from the exposed viscera, reduces the risk of bowel desiccation and damage, and prevents hypothermia. An orogastric tube should be placed for decompression.',
        explanationWrong:
          'Dry gauze can adhere to and damage the exposed bowel. Intubation is not indicated unless the infant has respiratory distress. Prophylactic surfactant is not indicated for gastroschisis, which is typically a term or near-term condition.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 10,
        questionText:
          'A 6-year-old child is having a generalized tonic-clonic seizure that has lasted 15 minutes. The child has been given two doses of lorazepam without effect. The emergency physician orders a midazolam infusion. What respiratory concern should the therapist prepare for?',
        choices: {
          A: 'Bronchospasm from histamine release caused by benzodiazepines',
          B: 'Progressive respiratory depression and possible apnea from cumulative benzodiazepine doses',
          C: 'Pulmonary edema from increased left ventricular afterload',
          D: 'Laryngospasm triggered by benzodiazepine-induced muscle rigidity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cumulative doses of benzodiazepines (lorazepam followed by midazolam) carry significant risk of respiratory depression and apnea. The respiratory therapist should have bag-mask ventilation equipment, suction, and intubation supplies immediately available. Continuous pulse oximetry and capnography should be monitored closely.',
        explanationWrong:
          'Benzodiazepines do not cause significant histamine release or bronchospasm. Pulmonary edema from increased afterload is not a benzodiazepine effect. Benzodiazepines cause muscle relaxation, not rigidity, making laryngospasm unlikely.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 11,
        questionText:
          'A neonate born at 24 weeks gestation is at extremely high risk for IVH. Which of the following interventions has the STRONGEST evidence for reducing IVH incidence?',
        choices: {
          A: 'Postnatal administration of indomethacin within the first 24 hours',
          B: 'Prophylactic vitamin K administration at birth',
          C: 'Early initiation of total parenteral nutrition',
          D: 'Antenatal corticosteroid administration to the mother before delivery',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Antenatal corticosteroid administration (betamethasone or dexamethasone) to the mother at least 24 hours before delivery has the strongest evidence for reducing the incidence and severity of IVH in premature infants. Steroids promote maturation of the germinal matrix vasculature and reduce its fragility, decreasing the risk of hemorrhage.',
        explanationWrong:
          'Postnatal indomethacin has shown some benefit in reducing severe IVH but has weaker evidence than antenatal steroids. Vitamin K prevents hemorrhagic disease of the newborn, not IVH. Early TPN supports nutrition but does not directly reduce IVH risk.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is educating a family about spacer care for their child\'s MDI with valved holding chamber. Which instruction is MOST important to ensure consistent drug delivery over time?',
        choices: {
          A: 'Wash the spacer with dish soap and allow it to air dry without rinsing to reduce electrostatic charge on the chamber walls',
          B: 'Rinse the spacer with hot water and towel dry after each use',
          C: 'Replace the spacer only if visible cracks are present',
          D: 'Store the spacer in a sealed plastic bag between uses to prevent dust accumulation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Electrostatic charge on plastic spacer walls significantly reduces drug delivery by attracting and retaining aerosol particles. Washing with mild dish soap and allowing the spacer to air dry (without rinsing or towel drying) leaves a thin detergent film that reduces electrostatic charge, improving drug delivery by up to 50%.',
        explanationWrong:
          'Towel drying creates electrostatic charge and should be avoided. Replacing only when cracked ignores the progressive buildup of electrostatic charge. Storing in a sealed bag does not address electrostatic charge, which is the primary factor reducing drug delivery from plastic spacers.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 13,
        questionText:
          'A 10-month-old infant presents to the emergency department with a 2-day history of barking cough and was initially treated for croup. However, the stridor is persistent and not improving with racemic epinephrine or dexamethasone. The child was eating popcorn 3 days ago. What should the respiratory therapist consider?',
        choices: {
          A: 'Severe viral croup requiring heliox therapy',
          B: 'Bacterial tracheitis requiring IV antibiotics',
          C: 'Epiglottitis with impending airway obstruction',
          D: 'Subglottic foreign body mimicking croup symptoms',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A subglottic foreign body can present with biphasic stridor and barking cough that mimics croup. The key distinguishing features are failure to respond to standard croup treatments (racemic epinephrine and dexamethasone) and a history consistent with possible aspiration (eating popcorn). Rigid bronchoscopy is indicated for diagnosis and removal.',
        explanationWrong:
          'Viral croup typically responds to racemic epinephrine and dexamethasone. Bacterial tracheitis presents with high fever, toxic appearance, and purulent secretions. Epiglottitis presents with drooling, tripod positioning, and high fever, not barking cough. The history of eating popcorn and failure of standard croup treatment strongly suggest foreign body.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 14,
        questionText:
          'A term neonate has a serum calcium of 6.5 mg/dL and is having jitteriness and a prolonged QT interval on the cardiac monitor. The neonate is the infant of a diabetic mother. What is the MOST appropriate initial treatment?',
        choices: {
          A: 'Oral calcium carbonate supplementation with feeds',
          B: 'Slow IV calcium gluconate infusion with continuous cardiac monitoring',
          C: 'IV magnesium sulfate to correct presumed concurrent hypomagnesemia',
          D: 'Vitamin D supplementation to improve calcium absorption',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Symptomatic neonatal hypocalcemia with cardiac manifestations (prolonged QT) requires IV calcium gluconate administered slowly under continuous cardiac monitoring. Rapid infusion can cause bradycardia and cardiac arrest. Infants of diabetic mothers are at risk for hypocalcemia due to relative hypoparathyroidism in the first days of life.',
        explanationWrong:
          'Oral calcium is appropriate for asymptomatic or mild hypocalcemia, not for symptomatic cases with cardiac involvement. While hypomagnesemia can coexist, calcium replacement is the first priority. Vitamin D supplementation addresses chronic hypocalcemia, not the acute symptomatic presentation.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is called to evaluate a neonate who underwent TEF repair 48 hours ago. The nurse reports increased secretions and a bubbling sound from the chest drain. What should the therapist suspect?',
        choices: {
          A: 'Normal postoperative pleural drainage',
          B: 'Pneumothorax requiring additional chest tube placement',
          C: 'Anastomotic leak at the esophageal repair site',
          D: 'Tracheomalacia causing air trapping and chest drain bubbling',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Increased secretions and bubbling from the chest drain after TEF repair suggest an anastomotic leak at the esophageal repair site. Saliva or feeds can leak through the disrupted anastomosis into the mediastinum and pleural space. This is a surgical emergency requiring immediate evaluation, NPO status, and possible re-exploration.',
        explanationWrong:
          'Normal pleural drainage decreases over time and does not produce new bubbling at 48 hours. A pneumothorax is possible but bubbling with increased secretions is more consistent with an anastomotic leak. Tracheomalacia causes expiratory stridor and dynamic airway collapse, not chest drain bubbling.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 16,
        questionText:
          'A child with Down syndrome and a history of atlantoaxial instability requires intubation. Which precaution is MOST important during airway management?',
        choices: {
          A: 'Use a laryngeal mask airway instead of endotracheal intubation',
          B: 'Perform rapid sequence intubation to minimize the time the airway is unsecured',
          C: 'Use a video laryngoscope exclusively to avoid direct laryngoscopy',
          D: 'Maintain strict in-line cervical spine stabilization and avoid excessive neck extension during laryngoscopy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Children with Down syndrome and atlantoaxial instability have increased mobility between C1 and C2 vertebrae. Excessive neck extension or flexion during airway management can cause spinal cord compression leading to quadriplegia or death. Strict in-line cervical spine stabilization must be maintained throughout the intubation procedure.',
        explanationWrong:
          'A laryngeal mask airway may still require head positioning that stresses the cervical spine and is not a definitive airway. Rapid sequence intubation does not address the cervical spine concern. While video laryngoscopy may be helpful, the critical intervention is cervical spine stabilization regardless of the laryngoscopy method used.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 17,
        questionText:
          'A premature infant on HFNC at 6 L/min is being weaned. The infant has had stable vital signs and oxygen saturations above 95% on FiO2 0.21 for 24 hours. What is the MOST appropriate next step in weaning?',
        choices: {
          A: 'Reduce the flow rate in increments of 1 to 2 L/min while monitoring for signs of increased work of breathing',
          B: 'Discontinue HFNC immediately since the infant is on room air',
          C: 'Switch to nasal CPAP at 5 cm H2O before discontinuing support',
          D: 'Reduce FiO2 further below 0.21 by blending with nitrogen',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Weaning HFNC involves gradually reducing the flow rate in increments of 1 to 2 L/min while monitoring respiratory rate, work of breathing, and oxygen saturation. Once the infant tolerates a flow rate of 2 L/min on room air, HFNC can be discontinued. Abrupt discontinuation from higher flows may cause decompensation.',
        explanationWrong:
          'Abrupt discontinuation from 6 L/min risks sudden loss of the distending pressure benefit and increased work of breathing. Escalation to CPAP is a step up in support, not a weaning strategy. Delivering FiO2 below 0.21 with nitrogen is dangerous and not clinically indicated.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 18,
        questionText:
          'A 3-year-old child in status epilepticus has been intubated due to prolonged seizure activity and respiratory failure. The physician orders mechanical ventilation. What ventilator strategy consideration is MOST important?',
        choices: {
          A: 'Use permissive hypercapnia to reduce cerebral blood flow',
          B: 'Hyperventilate to a PaCO2 of 20 to 25 mmHg to reduce intracranial pressure',
          C: 'Maintain normoventilation targeting a PaCO2 of 35 to 45 mmHg to avoid exacerbating cerebral injury',
          D: 'Use high PEEP of 15 to 20 cm H2O to maximize oxygenation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'During status epilepticus, the brain has increased metabolic demand and is vulnerable to secondary injury. Normoventilation (PaCO2 35 to 45 mmHg) is recommended. Hyperventilation causes cerebral vasoconstriction, reducing blood flow and potentially worsening ischemic injury. Permissive hypercapnia increases cerebral blood flow and may raise intracranial pressure.',
        explanationWrong:
          'Permissive hypercapnia increases cerebral blood flow and may worsen cerebral edema. Aggressive hyperventilation (PaCO2 20 to 25 mmHg) causes severe cerebral vasoconstriction and can worsen neurologic outcomes. Excessively high PEEP can impede venous return from the brain and increase intracranial pressure.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 19,
        questionText:
          'A neonate born at 28 weeks gestation is receiving kangaroo care. The mother asks whether she can breastfeed during skin-to-skin contact. What is the MOST appropriate response?',
        choices: {
          A: 'Non-nutritive sucking at the breast during kangaroo care is encouraged for premature infants as it promotes feeding readiness and maternal milk production',
          B: 'Breastfeeding during kangaroo care is contraindicated until the infant reaches 34 weeks corrected age',
          C: 'Oral feeding during kangaroo care increases aspiration risk and should be avoided',
          D: 'The infant must demonstrate a mature suck-swallow-breathe pattern before attempting any oral activity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Non-nutritive sucking at the breast during kangaroo care is encouraged for premature infants. It promotes feeding readiness by developing oral motor skills, stimulates maternal milk production through hormonal signaling, and provides comfort. This practice is supported by research showing improved breastfeeding success rates at discharge.',
        explanationWrong:
          'There is no strict gestational age cutoff for non-nutritive sucking during kangaroo care. Non-nutritive sucking (not active feeding) does not increase aspiration risk. While a mature suck-swallow-breathe pattern is needed for full oral feeds, non-nutritive sucking is a developmental step that precedes and promotes that coordination.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam22.id,
        questionIndex: 20,
        questionText:
          'A 5-year-old child with severe croup unresponsive to nebulized epinephrine and dexamethasone requires intubation. The airway is known to be edematous. Which ETT selection strategy is MOST appropriate?',
        choices: {
          A: 'Use an age-appropriate cuffed ETT calculated by the formula (age/4) + 3.5',
          B: 'Select an ETT 0.5 to 1.0 mm smaller than the age-predicted size due to subglottic edema',
          C: 'Use the largest ETT that will pass through the vocal cords to ensure an adequate seal',
          D: 'Use a nasotracheal tube to provide more stability and prevent accidental extubation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In severe croup with subglottic edema, the subglottic area is significantly narrowed. Selecting an ETT 0.5 to 1.0 mm smaller than the age-predicted size accounts for the edema and reduces the risk of further mucosal trauma. Having multiple smaller sizes available is essential because the degree of narrowing may be greater than anticipated.',
        explanationWrong:
          'An age-appropriate ETT may not pass through the edematous subglottis and could cause further trauma. Using the largest possible ETT is dangerous in an edematous airway. Nasotracheal intubation is contraindicated in acute croup due to the risk of further trauma to the already inflamed airway.',
        topic: 'Pediatric Difficult Airway Management',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 22 seeded (20 questions, isFree: false)')

  // ─── EXAM 23 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Neonatal HFNC weaning, Pediatric inhaled medication optimization, Board-style integration scenarios
  // Correct answer distribution: A=5(Q4,Q7,Q11,Q15,Q20) B=5(Q1,Q5,Q10,Q13,Q17) C=5(Q3,Q8,Q14,Q16,Q19) D=5(Q2,Q6,Q9,Q12,Q18)
  const exam23 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 23',
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
          'A 2-month-old infant with bronchiolitis is being started on HFNC. The physician orders 8 L/min for this 5 kg infant. The respiratory therapist notes the infant has significant nasal congestion. What should the therapist do FIRST?',
        choices: {
          A: 'Switch to a standard nasal cannula since HFNC will not be effective with nasal congestion',
          B: 'Perform gentle nasal suctioning to clear secretions before initiating HFNC',
          C: 'Administer nasal decongestant spray to improve nasal patency',
          D: 'Recommend oral intubation as the congestion will prevent adequate flow delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Nasal congestion significantly impairs HFNC effectiveness by obstructing flow delivery through the nares. Gentle nasal suctioning to clear secretions before initiating HFNC ensures optimal flow delivery and maximizes the therapeutic benefit of nasopharyngeal dead space washout and distending pressure generation.',
        explanationWrong:
          'Switching to a standard nasal cannula does not address the congestion and provides less support. Nasal decongestant sprays are not recommended for young infants. Intubation is not indicated solely due to nasal congestion, which is a correctable barrier to HFNC therapy.',
        topic: 'Pediatric HFNC Therapy',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 2,
        questionText:
          'A 4-year-old child with a known difficult airway (Treacher Collins syndrome) presents in respiratory failure. Multiple intubation attempts have failed. The child cannot be ventilated with bag-mask. According to the difficult airway algorithm, what is the MOST appropriate next step?',
        choices: {
          A: 'Continue direct laryngoscopy attempts with different blade sizes',
          B: 'Place a laryngeal mask airway as a rescue temporizing device',
          C: 'Perform awake tracheostomy under local anesthesia',
          D: 'Perform needle cricothyrotomy (or surgical cricothyrotomy in children over age 8 to 10) as a cannot-intubate-cannot-oxygenate emergency',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a cannot-intubate-cannot-oxygenate (CICO) scenario, emergent invasive airway access is indicated. In children under 8 to 10 years, needle cricothyrotomy with transtracheal jet ventilation is performed because the cricothyroid membrane is too small for a surgical cricothyrotomy. This is a life-saving intervention when all other airway maneuvers have failed.',
        explanationWrong:
          'Continuing direct laryngoscopy after multiple failures wastes critical time and risks further airway trauma and edema. A laryngeal mask airway should have been attempted earlier; in a true CICO emergency where ventilation is impossible, it may not be successful. Awake tracheostomy requires time and conditions not available in an acute CICO crisis.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 3,
        questionText:
          'A neonate with a large omphalocele containing liver and bowel is being managed with a staged silo reduction approach. During the second silo tightening, the infant develops tachycardia, hypotension, and decreasing tidal volumes on the ventilator. What is the MOST likely cause?',
        choices: {
          A: 'Sepsis from surgical wound infection',
          B: 'Cardiac tamponade from a concurrent pericardial effusion',
          C: 'Abdominal compartment syndrome from excessive intra-abdominal pressure during silo reduction',
          D: 'Tension pneumothorax from barotrauma',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Staged silo reduction of a large omphalocele progressively increases intra-abdominal pressure. Excessive pressure can cause abdominal compartment syndrome, which impairs venous return (causing tachycardia and hypotension), compresses the diaphragm (reducing tidal volumes), and may compromise renal and mesenteric blood flow. The silo may need to be loosened emergently.',
        explanationWrong:
          'Sepsis develops over hours to days, not acutely during silo tightening. Cardiac tamponade is not associated with silo reduction procedures. Tension pneumothorax is possible but the temporal relationship with silo tightening makes abdominal compartment syndrome the most likely diagnosis.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 4,
        questionText:
          'A premature infant born at 27 weeks is on day 5 of life. The night nurse reports the infant had a sudden apneic episode requiring stimulation followed by a desaturation to 70%. The infant is currently on nasal CPAP at 6 cm H2O. A cranial ultrasound was normal on day 1. What should the respiratory therapist recommend?',
        choices: {
          A: 'Repeat cranial ultrasound to evaluate for new or progressing IVH',
          B: 'Increase CPAP to 8 cm H2O to prevent further apneic episodes',
          C: 'Discontinue CPAP and switch to HFNC to improve infant comfort',
          D: 'Administer a loading dose of caffeine citrate as this is likely apnea of prematurity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sudden change in clinical status with new or worsening apnea in a premature infant during the first week of life should prompt evaluation for IVH. Most IVH occurs between days 1 and 5, and a normal initial ultrasound does not exclude later development. A repeat cranial ultrasound is indicated to evaluate for new hemorrhage that may be causing the clinical change.',
        explanationWrong:
          'Increasing CPAP does not address the underlying cause of the sudden deterioration. Switching to HFNC would reduce respiratory support. While caffeine may be appropriate for apnea of prematurity, the acute onset on day 5 warrants investigation for IVH before attributing the event solely to apnea of prematurity.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is treating a 3-year-old with moderate persistent asthma. The child is unable to use an MDI with spacer due to poor coordination. What is the MOST appropriate alternative delivery device?',
        choices: {
          A: 'Dry powder inhaler with inspiratory flow training',
          B: 'Small volume nebulizer with a properly fitted face mask',
          C: 'MDI actuated directly into the mouth without a spacer',
          D: 'Breath-actuated MDI to eliminate timing coordination',
        },
        correctChoice: 'B',
        explanationCorrect:
          'For young children who cannot coordinate MDI use with a spacer, a small volume nebulizer with a properly fitted face mask is the most appropriate alternative. Nebulizers require only tidal breathing, making them ideal for children who lack the coordination or cooperation for MDI use. The face mask must fit snugly to maximize aerosol delivery.',
        explanationWrong:
          'Dry powder inhalers require a minimum inspiratory flow rate of 30 to 60 L/min, which most 3-year-olds cannot generate consistently. An MDI without a spacer results in very poor drug delivery due to high oropharyngeal deposition. Breath-actuated MDIs still require sufficient inspiratory flow and coordination that a 3-year-old may lack.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 6,
        questionText:
          'A neonate born at 36 weeks has persistent hypoglycemia despite glucose infusion rates of 12 mg/kg/min. Blood glucose remains below 40 mg/dL. What is the MOST likely underlying cause of refractory hypoglycemia?',
        choices: {
          A: 'Insufficient IV access for adequate dextrose delivery',
          B: 'Transient hyperinsulinism that will resolve spontaneously',
          C: 'Inborn error of metabolism such as a glycogen storage disease',
          D: 'Congenital hyperinsulinism requiring further endocrine workup',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Hypoglycemia that persists despite glucose infusion rates exceeding 10 to 12 mg/kg/min is highly suggestive of congenital hyperinsulinism. This condition involves unregulated insulin secretion that drives glucose into cells regardless of blood glucose levels. Further endocrine workup including critical sample labs (insulin, cortisol, growth hormone, free fatty acids) and possible diazoxide trial is indicated.',
        explanationWrong:
          'Insufficient IV access would be evident from the infusion running properly. Transient hyperinsulinism typically responds to glucose infusion rates below 10 mg/kg/min. While inborn errors of metabolism can cause hypoglycemia, the glucose infusion rate exceeding 12 mg/kg/min most specifically suggests hyperinsulinism as the mechanism.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 7,
        questionText:
          'A 7-year-old child has a witnessed choking event while eating steak. The child is now unable to speak, cough, or breathe and is turning cyanotic. What is the MOST appropriate immediate intervention?',
        choices: {
          A: 'Perform abdominal thrusts (Heimlich maneuver) up to 5 times, reassessing after each series',
          B: 'Perform a blind finger sweep of the oropharynx to remove the obstruction',
          C: 'Perform chest compressions as in cardiac arrest protocol',
          D: 'Call for emergency services and wait for them to perform direct laryngoscopy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For a child over 1 year of age with complete airway obstruction (unable to speak, cough, or breathe), abdominal thrusts (Heimlich maneuver) are the recommended intervention. Up to 5 thrusts should be delivered, reassessing between each series. If the child becomes unresponsive, CPR should be initiated with assessment of the airway between cycles.',
        explanationWrong:
          'Blind finger sweeps are not recommended for any age group as they can push the object deeper into the airway. Chest compressions are indicated only if the child becomes unresponsive. Waiting for emergency services without acting is inappropriate for a complete obstruction with cyanosis.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 8,
        questionText:
          'A neonate who underwent repair of a type C tracheoesophageal fistula develops stridor and difficulty clearing secretions at 4 weeks post-repair. Flexible bronchoscopy reveals dynamic collapse of the distal trachea during expiration. What is the diagnosis?',
        choices: {
          A: 'Recurrent tracheoesophageal fistula',
          B: 'Vocal cord paralysis from surgical nerve injury',
          C: 'Tracheomalacia, which is a common associated finding in TEF patients',
          D: 'Subglottic stenosis from prolonged intubation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Tracheomalacia is present in up to 75% of patients with tracheoesophageal fistula due to abnormal development of the tracheal cartilage. Dynamic collapse of the tracheal wall during expiration confirmed by bronchoscopy is the hallmark finding. Symptoms typically include barking cough, stridor, and difficulty clearing secretions. Many cases improve over the first 1 to 2 years as cartilage matures.',
        explanationWrong:
          'A recurrent fistula would present with feeding difficulties and aspiration, not dynamic airway collapse. Vocal cord paralysis causes inspiratory stridor but not tracheal collapse on bronchoscopy. Subglottic stenosis is a fixed narrowing, not dynamic collapse.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 9,
        questionText:
          'A 5-year-old child is receiving phenytoin for status epilepticus after benzodiazepines failed to control seizures. During the phenytoin infusion, the cardiac monitor shows bradycardia and hypotension. What should the respiratory therapist anticipate?',
        choices: {
          A: 'The phenytoin is resolving the seizure and the bradycardia is a sign of clinical improvement',
          B: 'The child is developing benzodiazepine-induced respiratory depression',
          C: 'The bradycardia is a normal finding during phenytoin loading',
          D: 'Phenytoin infusion should be slowed or stopped as rapid administration causes cardiovascular depression',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Phenytoin (and its prodrug fosphenytoin) can cause cardiovascular depression including bradycardia, hypotension, and cardiac arrhythmias when infused too rapidly. The infusion should be immediately slowed or stopped. The respiratory therapist should have resuscitation equipment available, and the team should consider switching to an alternative antiepileptic agent.',
        explanationWrong:
          'Bradycardia during phenytoin infusion is not a sign of clinical improvement but rather a sign of drug toxicity. Benzodiazepine-related depression causes respiratory depression, not primarily cardiovascular depression with bradycardia during phenytoin administration. Bradycardia is not a normal or expected finding and indicates the infusion rate needs adjustment.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 10,
        questionText:
          'A premature infant at 29 weeks gestation is on HFNC at 4 L/min with FiO2 0.25. The infant has been stable for 48 hours. The therapist considers weaning. What is the recommended approach to weaning this infant from HFNC?',
        choices: {
          A: 'Wean FiO2 first to 0.21, then wean flow rate by 1 L/min every 12 to 24 hours',
          B: 'Wean FiO2 first to 0.21, then reduce flow by 0.5 to 1 L/min increments as tolerated',
          C: 'Wean flow rate first to 2 L/min, then wean FiO2',
          D: 'Discontinue HFNC directly since the infant is near room air',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The recommended weaning approach for neonatal HFNC is to first wean FiO2 to 0.21 (room air), then reduce flow rate in small increments of 0.5 to 1 L/min as tolerated. This ensures the infant does not lose the distending pressure benefit of HFNC prematurely. HFNC can be discontinued once the infant tolerates a flow of 2 L/min on room air.',
        explanationWrong:
          'Weaning flow rate before FiO2 removes the distending pressure benefit before ensuring the infant can maintain oxygenation on room air. Weaning at 12 to 24 hour intervals per step may be too slow or too fast depending on the infant. Direct discontinuation risks decompensation even when near room air, as the flow still provides respiratory support.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 11,
        questionText:
          'A neonate born at 34 weeks gestation has been receiving phototherapy for hyperbilirubinemia. The nurse notes the infant is jittery and has a blood glucose of 35 mg/dL. The infant is on D10W at a glucose infusion rate of 5 mg/kg/min. What is the MOST appropriate adjustment?',
        choices: {
          A: 'Increase the glucose infusion rate to 6 to 8 mg/kg/min and recheck blood glucose in 30 minutes',
          B: 'Administer a 2 mL/kg bolus of D25W and recheck in 1 hour',
          C: 'Discontinue phototherapy as it is the cause of hypoglycemia',
          D: 'Continue current infusion rate and recheck glucose in 4 hours since jitteriness may be unrelated',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The infant has symptomatic hypoglycemia (jitteriness with glucose of 35 mg/dL) despite receiving IV dextrose. The glucose infusion rate of 5 mg/kg/min is subtherapeutic for this symptomatic infant. Increasing to 6 to 8 mg/kg/min and rechecking in 30 minutes is appropriate. If symptoms are severe, a D10W bolus (not D25W) should be given first.',
        explanationWrong:
          'D25W is not used in neonates due to its hyperosmolarity, which can cause intracranial hemorrhage; D10W is the standard neonatal dextrose solution. Phototherapy does not cause hypoglycemia. Waiting 4 hours with a symptomatic glucose of 35 mg/dL risks neurologic injury.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is providing kangaroo care education to parents of a premature infant born at 30 weeks gestation who is currently on nasal CPAP. Which of the following is the MOST important safety consideration during transfer from the incubator to the parent for skin-to-skin?',
        choices: {
          A: 'The infant must be completely weaned off respiratory support before kangaroo care can begin',
          B: 'Kangaroo care should only be performed by the mother, not the father',
          C: 'The incubator temperature should be increased to compensate for transfer',
          D: 'The transfer should be performed by two caregivers to maintain all monitoring leads, IV lines, and respiratory support equipment securely',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Safe transfer of a premature infant on respiratory support requires two caregivers: one to handle the infant and one to manage the equipment (CPAP interface, monitoring leads, IV lines). This coordinated approach prevents accidental dislodgement of critical equipment and minimizes physiologic instability during the transition.',
        explanationWrong:
          'Kangaroo care can be safely performed during CPAP and even mechanical ventilation. Both parents can provide kangaroo care with equal benefit. Increasing incubator temperature is unnecessary as the parent provides thermoregulation during skin-to-skin contact.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 13,
        questionText:
          'A 6-month-old infant is being evaluated for recurrent wheezing episodes. The parents have been using a nebulizer at home with albuterol. Despite regular treatments, the wheezing persists. The respiratory therapist observes the parents holding the nebulizer mask about 3 inches from the infant\'s face. What is the MOST likely reason for treatment failure?',
        choices: {
          A: 'The infant has developed tachyphylaxis to albuterol',
          B: 'The blow-by technique results in negligible drug delivery to the lower airways',
          C: 'Nebulized albuterol is not effective for infants under 12 months',
          D: 'The nebulizer needs to be replaced as it has lost efficiency',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Blow-by technique (holding the nebulizer away from the face) delivers less than 1% of the medication to the lungs. This is the most common cause of apparent treatment failure in infants. The mask must be held snugly against the face to create a seal, which can improve lung delivery to 3 to 5%. Proper education and demonstration are essential.',
        explanationWrong:
          'Tachyphylaxis to albuterol is uncommon with standard dosing intervals. Nebulized albuterol is effective in infants, though the response may be less robust than in older children. While nebulizer efficiency can decline, the observed blow-by technique is the most obvious cause of treatment failure.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 14,
        questionText:
          'A neonate born at 25 weeks gestation develops a grade IV IVH (periventricular hemorrhagic infarction) on cranial ultrasound at day 3. Which of the following complications should the respiratory therapist and NICU team monitor for in the weeks following?',
        choices: {
          A: 'Spontaneous resolution without any neurologic sequelae',
          B: 'Development of hyperthyroidism from hemorrhage-induced hormonal release',
          C: 'Post-hemorrhagic hydrocephalus requiring possible ventriculoperitoneal shunt placement',
          D: 'Immediate need for decompressive craniectomy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Post-hemorrhagic hydrocephalus is the most significant complication following grade IV IVH. Blood products obstruct the drainage pathways of cerebrospinal fluid, leading to progressive ventricular dilation. Serial cranial ultrasounds are performed to monitor ventricular size. Temporary drainage (ventricular reservoir or subgaleal shunt) or permanent ventriculoperitoneal shunt placement may be needed.',
        explanationWrong:
          'Grade IV IVH rarely resolves without neurologic sequelae; it carries a high risk of neurodevelopmental impairment. Hyperthyroidism is not associated with IVH. Decompressive craniectomy is not the standard intervention for neonatal IVH; ventricular drainage procedures are used instead.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 15,
        questionText:
          'A term neonate is diagnosed with an omphalocele containing only bowel (no liver involvement). The defect is small and fully covered by an intact membrane. Compared to gastroschisis, which statement about the respiratory management of this infant is MOST accurate?',
        choices: {
          A: 'This infant has a lower risk of respiratory compromise than a gastroschisis infant because the intact membrane reduces fluid losses and the smaller defect allows for primary closure with less impact on intra-abdominal pressure',
          B: 'This infant requires immediate intubation because all abdominal wall defects mandate mechanical ventilation',
          C: 'The respiratory management is identical regardless of whether the defect is omphalocele or gastroschisis',
          D: 'This infant should receive prophylactic surfactant due to the association between omphalocele and lung immaturity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A small omphalocele with intact membrane and no liver involvement has a lower risk of respiratory compromise compared to gastroschisis. The intact membrane prevents the massive fluid and heat losses seen in gastroschisis. Primary closure is more feasible, resulting in less increase in intra-abdominal pressure and less diaphragmatic compromise postoperatively.',
        explanationWrong:
          'Not all abdominal wall defects require immediate intubation; small omphaloceles may be managed with close monitoring. The respiratory management differs significantly based on defect type and size. There is no indication for prophylactic surfactant in term infants with omphalocele.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 16,
        questionText:
          'A 12-year-old child has a seizure lasting 8 minutes in the school nurse\'s office. By the time EMS arrives, the seizure has stopped and the child is in a postictal state with sonorous respirations and SpO2 of 91%. What is the MOST appropriate respiratory intervention?',
        choices: {
          A: 'Immediate endotracheal intubation due to the low oxygen saturation',
          B: 'Administer 100% oxygen via non-rebreather mask and begin bag-mask ventilation',
          C: 'Position the child on their side (recovery position), perform a jaw thrust, and administer supplemental oxygen via nasal cannula',
          D: 'Administer naloxone in case the seizure was caused by opioid exposure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In the postictal state, the child is at risk for airway obstruction from reduced consciousness and loss of muscle tone. The recovery position (lateral decubitus) prevents aspiration and promotes drainage of secretions. A jaw thrust opens the airway without cervical spine manipulation. Supplemental oxygen addresses the mild hypoxemia. Intubation is not indicated in a self-resolving postictal state.',
        explanationWrong:
          'Intubation is not indicated for postictal somnolence with SpO2 of 91%, which is expected to improve with positioning and oxygen. Bag-mask ventilation is excessive for a spontaneously breathing patient with mild hypoxemia. Naloxone is not indicated without a history or suspicion of opioid exposure.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is managing the ventilator for a neonate after repair of a congenital diaphragmatic hernia. The surgeon reports the ipsilateral lung is severely hypoplastic. On postoperative day 1, the infant has a PaO2 of 45 mmHg on FiO2 0.60 and PIP of 25 cm H2O. What is the MOST appropriate ventilator management strategy?',
        choices: {
          A: 'Increase PIP to 30 cm H2O to recruit the hypoplastic lung',
          B: 'Accept permissive hypoxemia with preductal SpO2 targets of 85 to 95% and avoid aggressive ventilation that risks barotrauma',
          C: 'Initiate high-frequency oscillatory ventilation immediately',
          D: 'Apply PEEP of 10 cm H2O to maximize functional residual capacity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In congenital diaphragmatic hernia with lung hypoplasia, gentle ventilation strategies are essential. The hypoplastic lung has reduced compliance and is susceptible to barotrauma. Permissive hypoxemia with preductal SpO2 targets of 85 to 95% and permissive hypercapnia are accepted to minimize ventilator-induced lung injury. Peak pressures should be limited to 25 cm H2O or less.',
        explanationWrong:
          'Increasing PIP beyond 25 cm H2O risks pneumothorax in the hypoplastic lung. HFOV may be considered if conventional ventilation fails, but is not the immediate first step. High PEEP of 10 cm H2O risks overdistension of the hypoplastic lung and can compromise the contralateral lung.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 18,
        questionText:
          'A 3-year-old child with a vascular ring causing extrinsic tracheal compression presents with biphasic stridor that worsens during feeding. The child requires intubation for diagnostic bronchoscopy. What airway consideration is MOST important?',
        choices: {
          A: 'The child should be intubated nasally for better tube stability during bronchoscopy',
          B: 'Standard age-appropriate ETT size should be used without modification',
          C: 'A cuffed ETT is contraindicated due to the tracheal compression',
          D: 'A smaller than predicted ETT may be needed due to extrinsic compression narrowing the tracheal lumen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Vascular rings cause extrinsic compression of the trachea, narrowing the airway lumen. When intubation is required, the clinician should anticipate needing a smaller ETT than age-predicted size. Multiple sizes should be available. The area of compression may not be at the glottic level, so the tube may pass through the vocal cords easily but encounter resistance distally.',
        explanationWrong:
          'Nasal versus oral intubation route is not the primary concern; airway sizing is. Standard ETT size may be too large for the compressed tracheal segment. Cuffed ETTs are not strictly contraindicated but must be used cautiously, ensuring the cuff is not inflated at the level of compression.',
        topic: 'Pediatric Difficult Airway Management',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 19,
        questionText:
          'A neonate born at 31 weeks gestation is being transitioned from incubator care to kangaroo care. During the first session, the infant\'s temperature drops from 36.8 degrees C to 36.0 degrees C after 15 minutes of skin-to-skin contact. What is the MOST appropriate response?',
        choices: {
          A: 'Immediately return the infant to the incubator and discontinue kangaroo care attempts',
          B: 'Administer a warm IV fluid bolus to raise the core temperature',
          C: 'Ensure the parent\'s chest is warm, cover the infant with a prewarmed blanket and hat, and continue monitoring',
          D: 'Increase the ambient room temperature to 30 degrees C',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A mild temperature decrease during initial kangaroo care transition can occur as the infant adjusts. The temperature of 36.0 degrees C is at the lower end of normal. Appropriate interventions include ensuring the parent\'s skin is warm, covering the infant\'s back and head with a prewarmed blanket and hat, and continuing to monitor. Kangaroo care should only be discontinued if the temperature continues to drop below 36.0 degrees C despite interventions.',
        explanationWrong:
          'Immediately discontinuing kangaroo care for a temperature still in the low-normal range is premature. IV fluid boluses are not indicated for mild hypothermia during skin-to-skin care. Increasing room temperature is impractical and may cause the parent to become uncomfortable and diaphoretic.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam23.id,
        questionIndex: 20,
        questionText:
          'A 9-month-old infant presents with acute onset of cough and unilateral decreased breath sounds after being left unattended near a bowl of small batteries. Chest radiograph shows a round radiopaque object in the right mainstem bronchus. What additional concern makes this situation MORE urgent than a typical foreign body aspiration?',
        choices: {
          A: 'Button batteries can cause liquefactive necrosis and perforation of the airway wall within hours due to electrical current and alkali generation',
          B: 'Small batteries will dissolve in bronchial secretions and release toxic heavy metals',
          C: 'The battery will migrate to the left mainstem bronchus if not removed immediately',
          D: 'Button batteries cause immediate complete airway obstruction in all cases',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Button battery aspiration is an emergency because the battery generates an electrical current in the moist tissue environment, producing sodium hydroxide (alkali) at the negative pole. This causes rapid liquefactive necrosis that can perforate the airway wall within 2 hours. Emergent rigid bronchoscopy for removal is indicated. This is more urgent than typical foreign body aspiration.',
        explanationWrong:
          'Batteries do not rapidly dissolve to release heavy metals in the airway (though this can occur in the esophagus over days). Migration to the other bronchus is not a primary concern. Button batteries do not always cause complete obstruction; the tissue damage from the electrical-chemical injury is the primary danger.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 23 seeded (20 questions, isFree: false)')

  // ─── EXAM 24 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Board-style integration scenarios, Neonatal electrolyte management, Pediatric HFNC optimization
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q16,Q19) B=5(Q3,Q8,Q12,Q15,Q18) C=5(Q4,Q9,Q11,Q17,Q20) D=5(Q2,Q5,Q7,Q13,Q14)
  const exam24 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 24',
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
          'A premature infant born at 26 weeks gestation is on HFNC at 7 L/min with FiO2 0.35. The infant is having frequent episodes of apnea and bradycardia despite caffeine therapy. The nurse asks whether HFNC can treat apnea of prematurity. Which response is MOST accurate?',
        choices: {
          A: 'HFNC can reduce the frequency of apneic episodes through splinting of the upper airway and providing continuous positive distending pressure, but it is less effective than nasal CPAP for obstructive apnea',
          B: 'HFNC is equivalent to nasal CPAP for all types of apnea of prematurity',
          C: 'HFNC has no role in treating apnea of prematurity and should only be used for oxygenation support',
          D: 'HFNC eliminates apnea of prematurity in most infants by stimulating breathing through high-flow air movement',
        },
        correctChoice: 'A',
        explanationCorrect:
          'HFNC generates variable and unpredictable positive distending pressure that can help splint the upper airway and reduce obstructive apnea episodes. However, it is generally considered less reliable than nasal CPAP for this purpose because the distending pressure is not precisely controlled or monitored. If apnea persists on HFNC despite caffeine therapy, escalation to CPAP should be considered.',
        explanationWrong:
          'HFNC is not equivalent to nasal CPAP for apnea management due to its variable and unmonitored pressure delivery. HFNC does have a role in apnea reduction through airway splinting, so saying it has no role is incorrect. HFNC does not eliminate apnea in most infants; it has a limited and adjunctive role.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 2,
        questionText:
          'A 2-day-old term neonate born to a mother with severe preeclampsia has a serum magnesium level of 4.5 mg/dL. The infant is hypotonic with poor respiratory effort. What is the MOST likely cause of this presentation?',
        choices: {
          A: 'Neonatal sepsis presenting with respiratory depression',
          B: 'Birth asphyxia causing hypoxic-ischemic encephalopathy',
          C: 'Congenital neuromuscular disease',
          D: 'Hypermagnesemia from maternal magnesium sulfate therapy crossing the placenta',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Maternal magnesium sulfate used for preeclampsia treatment or seizure prophylaxis readily crosses the placenta, causing neonatal hypermagnesemia. This presents with hypotonia, respiratory depression, poor feeding, and decreased reflexes. The elevated magnesium level of 4.5 mg/dL (normal neonatal range 1.5 to 2.5 mg/dL) confirms the diagnosis. Supportive care and monitoring are the primary treatments as the magnesium is gradually excreted.',
        explanationWrong:
          'While sepsis and birth asphyxia can cause respiratory depression, the elevated magnesium level and maternal history of preeclampsia (with magnesium sulfate treatment) make hypermagnesemia the most likely diagnosis. Congenital neuromuscular disease would not explain the elevated magnesium level.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is managing a 4-year-old child on HFNC at 20 L/min for acute respiratory failure from pneumonia. The child is cooperative and alert. The therapist wants to add nebulized hypertonic saline to help with secretion clearance. What is the MOST appropriate method of delivery?',
        choices: {
          A: 'Disconnect the HFNC and administer via standard nebulizer with face mask',
          B: 'Use a vibrating mesh nebulizer placed in-line with the HFNC circuit',
          C: 'Administer via MDI with spacer while HFNC remains in place',
          D: 'Reduce HFNC flow to 5 L/min and administer via standard jet nebulizer at the nasal cannula interface',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A vibrating mesh nebulizer placed in-line with the HFNC circuit allows aerosol delivery without interrupting the respiratory support. The continuous high flow carries the aerosol particles to the patient. This method avoids the clinical deterioration that can occur when HFNC is disconnected and maintains the positive distending pressure benefit.',
        explanationWrong:
          'Disconnecting HFNC removes respiratory support and can cause rapid clinical deterioration. MDI with spacer is an alternative but is less effective for hypertonic saline delivery. Reducing flow to 5 L/min significantly decreases respiratory support and a standard jet nebulizer is not designed for in-line HFNC use.',
        topic: 'Pediatric HFNC Therapy',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 4,
        questionText:
          'A neonate born at 38 weeks gestation presents with excessive drooling, choking on the first feed, and an inability to pass an orogastric tube. A chest/abdominal radiograph shows the tube coiled in the upper esophagus and gas in the stomach and intestines. What is the MOST likely diagnosis?',
        choices: {
          A: 'Esophageal web causing partial obstruction',
          B: 'Choanal atresia with secondary feeding difficulty',
          C: 'Laryngeal cleft causing aspiration',
          D: 'Type C tracheoesophageal fistula with proximal esophageal atresia and distal fistula',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The findings are classic for type C TEF: the orogastric tube cannot pass into the stomach because the proximal esophagus ends in a blind pouch (atresia), but gas is present in the stomach and intestines because there is a fistula connecting the distal esophagus to the trachea, allowing swallowed air to reach the GI tract. This is the most common type of TEF, accounting for approximately 85% of cases.',
        explanationWrong:
          'An esophageal web would allow partial passage of a tube. Choanal atresia causes nasal obstruction, not esophageal obstruction. A laryngeal cleft causes aspiration but does not prevent passage of an orogastric tube.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 5,
        questionText:
          'A premature infant born at 30 weeks gestation on nasal CPAP develops IVH. The neurology team recommends minimizing procedures that increase intracranial pressure. Which respiratory care modification is MOST appropriate?',
        choices: {
          A: 'Discontinue all respiratory support to minimize stimulation',
          B: 'Switch from CPAP to HFNC to reduce nasal trauma and decrease handling',
          C: 'Increase the frequency of suctioning to keep the airway clear',
          D: 'Implement minimal handling protocols, suction only when clinically indicated, and cluster care activities',
        },
        correctChoice: 'D',
        explanationCorrect:
          'After IVH diagnosis, minimizing fluctuations in cerebral blood flow is critical. Minimal handling protocols reduce stimulation-induced blood pressure changes. Suctioning only when clinically indicated (not on a schedule) prevents unnecessary increases in intracranial pressure. Clustering care activities minimizes the number of disturbances. These measures help prevent IVH extension.',
        explanationWrong:
          'Discontinuing respiratory support would cause respiratory failure. Switching from CPAP to HFNC reduces the level of support and may cause decompensation. Increasing suctioning frequency raises intracranial pressure with each episode, potentially worsening the hemorrhage.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 6,
        questionText:
          'An 8-year-old child with cystic fibrosis is prescribed inhaled tobramycin. The family asks whether they can use their home jet nebulizer. What is the MOST appropriate recommendation?',
        choices: {
          A: 'Use the specific nebulizer system recommended by the drug manufacturer (such as the PARI LC Plus) because nebulizer performance significantly affects drug delivery and particle size for inhaled antibiotics',
          B: 'Any nebulizer can be used as long as the treatment time is extended to compensate',
          C: 'A metered-dose inhaler with spacer is equivalent and more convenient',
          D: 'Ultrasonic nebulizers are preferred for all inhaled antibiotics',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled tobramycin (and other inhaled antibiotics) are approved and studied with specific nebulizer systems. The drug manufacturer recommends specific devices (e.g., PARI LC Plus) that produce the optimal particle size distribution for airway deposition. Using a different nebulizer can significantly alter drug delivery, particle size, and treatment efficacy.',
        explanationWrong:
          'Simply extending treatment time does not compensate for suboptimal particle size distribution from incompatible nebulizers. Tobramycin is not available in MDI formulation. Ultrasonic nebulizers can denature some medications and are not universally preferred for antibiotics.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 7,
        questionText:
          'A neonate with gastroschisis is postoperative day 2 after primary closure. The infant is on conventional mechanical ventilation with settings of PIP 28, PEEP 5, rate 40, and FiO2 0.50. The infant has decreasing urine output and the bladder pressure is measured at 22 mmHg. What does this finding indicate?',
        choices: {
          A: 'The ventilator settings are too aggressive and should be weaned',
          B: 'The infant has developed sepsis with acute kidney injury',
          C: 'The infant is dehydrated and needs more IV fluids',
          D: 'The infant has intra-abdominal hypertension progressing toward abdominal compartment syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A bladder pressure (intravesical pressure) of 22 mmHg indicates intra-abdominal hypertension (IAH is defined as sustained pressure above 12 mmHg). Combined with decreased urine output, this suggests progression toward abdominal compartment syndrome. The surgical team should be notified urgently, as the infant may require decompressive laparotomy or revision of the abdominal closure.',
        explanationWrong:
          'The ventilator settings are not the cause of elevated bladder pressure. While sepsis can cause kidney injury, the elevated bladder pressure specifically indicates intra-abdominal hypertension. Dehydration would not cause an elevated bladder pressure of 22 mmHg.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 8,
        questionText:
          'A 5-year-old child with cerebral palsy has chronic aspiration and recurrent pneumonia. The child is being considered for a tracheostomy. The parents ask about the relationship between tracheostomy and aspiration. Which statement is MOST accurate?',
        choices: {
          A: 'A tracheostomy eliminates aspiration risk by bypassing the upper airway',
          B: 'A tracheostomy may actually increase aspiration risk because it tethers the larynx, reduces laryngeal elevation during swallowing, and decreases subglottic pressure',
          C: 'A cuffed tracheostomy tube prevents all aspiration by sealing below the vocal cords',
          D: 'Aspiration risk is unchanged by the presence of a tracheostomy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tracheostomy can paradoxically increase aspiration risk through several mechanisms: it anchors the larynx, limiting its elevation during swallowing; reduces the subglottic pressure needed for effective cough and glottic closure; desensitizes the larynx over time; and redirects airflow away from the upper airway, reducing the stimulation that triggers protective reflexes.',
        explanationWrong:
          'Tracheostomy does not eliminate aspiration risk and may worsen it. Even cuffed tracheostomy tubes do not completely prevent aspiration, as secretions can leak around the cuff. Aspiration risk is affected by tracheostomy presence through multiple mechanisms.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 9,
        questionText:
          'A term neonate born at 39 weeks has a phosphorus level of 2.0 mg/dL (normal 4.5 to 9.0 mg/dL) and calcium of 11.5 mg/dL (normal 8.0 to 10.5 mg/dL). The infant is irritable and has not stooled in 48 hours. What is the MOST likely endocrine cause?',
        choices: {
          A: 'Hypoparathyroidism from DiGeorge syndrome',
          B: 'Maternal vitamin D deficiency causing neonatal rickets',
          C: 'Primary hyperparathyroidism causing hypercalcemia and hypophosphatemia',
          D: 'Familial hypocalciuric hypercalcemia, which is benign and requires no treatment',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The combination of hypercalcemia (11.5 mg/dL) and hypophosphatemia (2.0 mg/dL) in a symptomatic neonate is characteristic of primary hyperparathyroidism. Excess parathyroid hormone increases calcium reabsorption and phosphorus excretion. Symptoms include irritability, poor feeding, constipation, and in severe cases, respiratory distress from muscle weakness. This requires urgent endocrine evaluation.',
        explanationWrong:
          'DiGeorge syndrome causes hypoparathyroidism with hypocalcemia, not hypercalcemia. Maternal vitamin D deficiency causes neonatal hypocalcemia, not hypercalcemia. Familial hypocalciuric hypercalcemia typically produces mild asymptomatic hypercalcemia with normal phosphorus and would not explain the markedly low phosphorus level.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is setting up HFNC for a 10 kg toddler admitted with bronchiolitis. The available heated humidifier system has a maximum output temperature of 37 degrees C. The therapist sets the temperature to 34 degrees C. Why is adequate heated humidification CRITICAL for HFNC therapy?',
        choices: {
          A: 'Inadequate humidification at high flow rates causes drying and damage to the nasal mucosa, increases airway resistance from inspissated secretions, and impairs mucociliary clearance',
          B: 'Humidification is optional for HFNC as the nasal passages provide sufficient conditioning',
          C: 'The primary purpose of humidification is to prevent the HFNC tubing from drying out',
          D: 'Heated humidification is only needed when FiO2 exceeds 0.40',
        },
        correctChoice: 'A',
        explanationCorrect:
          'High gas flow rates delivered through HFNC exceed the nasal passages\' natural ability to warm and humidify inspired gas. Without adequate heated humidification (targeting 34 to 37 degrees C at 100% relative humidity), the dry gas causes nasal mucosal injury, epistaxis, increased airway resistance from thick secretions, and impaired mucociliary clearance, all of which can worsen the patient\'s respiratory status.',
        explanationWrong:
          'The nasal passages cannot adequately condition gas at the high flow rates used in HFNC. The humidification is for the patient\'s airway, not the tubing. Heated humidification is needed at all FiO2 levels when high flows are delivered to prevent mucosal damage.',
        topic: 'Pediatric HFNC Therapy',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is involved in a simulation exercise for managing a child with an anterior mediastinal mass who requires intubation. The attending physician emphasizes that the child should be intubated in a specific position. What is the MOST appropriate position?',
        choices: {
          A: 'Standard supine sniffing position with neck extension',
          B: 'Prone position to shift the mass anteriorly',
          C: 'Semi-upright or lateral decubitus position to prevent the mass from compressing the trachea and great vessels when supine',
          D: 'Trendelenburg position to shift the mass cephalad',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Children with anterior mediastinal masses are at extreme risk for cardiovascular collapse and complete airway obstruction when placed supine, as gravity causes the mass to compress the trachea and great vessels. Maintaining a semi-upright or lateral decubitus position reduces this compression. Spontaneous ventilation should be maintained as long as possible because positive pressure ventilation can also worsen the compression.',
        explanationWrong:
          'Supine positioning is extremely dangerous as it allows the mass to compress the trachea and great vessels. Prone positioning may help but is impractical for intubation. Trendelenburg would worsen compression by shifting the mass toward the thoracic outlet and airway.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 12,
        questionText:
          'A premature infant born at 27 weeks gestation is receiving kangaroo care for 2 hours daily. The parents note the infant seems calmer and more stable during skin-to-skin. Which physiologic mechanism BEST explains the cardiorespiratory stabilization observed during kangaroo care?',
        choices: {
          A: 'Kangaroo care increases circulating catecholamines, which stimulate respiratory drive',
          B: 'The parent\'s breathing pattern provides a regulatory rhythm that promotes more regular neonatal breathing through sensory input and co-regulation',
          C: 'The increased ambient noise from the parent masks NICU alarms that cause stress',
          D: 'Kangaroo care increases the infant\'s metabolic rate, which drives respiratory effort',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During kangaroo care, the infant receives multisensory input from the parent: rhythmic chest movement from breathing, heartbeat, warmth, and gentle pressure. This sensory input promotes co-regulation of autonomic functions, including more regular breathing patterns. The parent\'s respiratory rhythm acts as a biological oscillator that helps regulate the immature neonatal respiratory pattern.',
        explanationWrong:
          'Kangaroo care decreases stress hormones (catecholamines and cortisol), it does not increase them. The calming effect is from direct physiologic co-regulation, not noise masking. Kangaroo care maintains or slightly decreases metabolic rate due to thermal regulation and reduced energy expenditure from decreased crying.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 13,
        questionText:
          'A neonate born at 35 weeks gestation has a serum potassium of 6.8 mEq/L. The ECG shows peaked T waves but no widened QRS. After calcium gluconate is administered, what is the MOST appropriate next intervention to lower the serum potassium?',
        choices: {
          A: 'Peritoneal dialysis for immediate potassium removal',
          B: 'Oral sodium polystyrene sulfonate to bind potassium in the gut',
          C: 'Diuretic therapy with furosemide to increase renal potassium excretion',
          D: 'IV insulin (0.1 units/kg) with dextrose (2 mL/kg D10W) to shift potassium intracellularly',
        },
        correctChoice: 'D',
        explanationCorrect:
          'After stabilizing the myocardium with calcium gluconate, IV insulin with dextrose is the most effective next step to rapidly lower serum potassium. Insulin drives potassium into cells through activation of the sodium-potassium ATPase pump. Dextrose is co-administered to prevent hypoglycemia. This combination lowers potassium within 15 to 30 minutes.',
        explanationWrong:
          'Peritoneal dialysis is reserved for refractory hyperkalemia or renal failure. Oral sodium polystyrene sulfonate takes hours to work and carries risk of bowel necrosis in neonates. Furosemide increases renal potassium excretion but works more slowly than insulin/dextrose.',
        topic: 'Neonatal Electrolyte Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 14,
        questionText:
          'A 10-year-old child with status epilepticus has been seizing for 30 minutes and has received maximum doses of benzodiazepines and phenytoin without seizure cessation. The child is now intubated. The intensivist is considering a continuous midazolam infusion for refractory status epilepticus. What is the PRIMARY respiratory concern during continuous midazolam infusion?',
        choices: {
          A: 'The midazolam infusion will cause bronchospasm requiring inhaled bronchodilators',
          B: 'The child will need to be weaned rapidly from the ventilator once seizures stop',
          C: 'Continuous midazolam does not affect respiratory drive in intubated patients',
          D: 'Prolonged sedation may require extended mechanical ventilation, and the respiratory therapist should monitor for ventilator-associated complications including pneumonia and atelectasis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Continuous midazolam infusion for refractory status epilepticus results in prolonged deep sedation requiring extended mechanical ventilation. The respiratory therapist must monitor for ventilator-associated complications including ventilator-associated pneumonia, atelectasis, and the need for lung-protective ventilation strategies. Weaning from the ventilator may be prolonged after the infusion is discontinued.',
        explanationWrong:
          'Midazolam does not typically cause bronchospasm. Weaning should be gradual, not rapid, to prevent seizure recurrence. Continuous midazolam does affect respiratory drive and is the reason the patient requires mechanical ventilation; even in intubated patients, monitoring respiratory drive is important for ventilator weaning.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is asked to assess the effectiveness of HFNC therapy in a 6-month-old infant with RSV bronchiolitis. Which clinical sign is the MOST reliable early indicator that HFNC is providing adequate support?',
        choices: {
          A: 'The infant maintains a constant FiO2 requirement',
          B: 'A reduction in respiratory rate and work of breathing (decreased nasal flaring and retractions) within 60 to 90 minutes of initiation',
          C: 'The infant falls asleep during HFNC therapy',
          D: 'Chest radiograph shows improved aeration after 24 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The most reliable early clinical indicator of HFNC effectiveness is a reduction in respiratory rate and visible signs of decreased work of breathing (reduced nasal flaring, intercostal and subcostal retractions) within 60 to 90 minutes of initiation. Failure to improve within this timeframe should prompt consideration of escalation to CPAP or intubation.',
        explanationWrong:
          'A constant FiO2 requirement does not indicate improvement. Sleeping can indicate comfort but is not a reliable indicator of respiratory improvement and could indicate exhaustion or worsening. A 24-hour chest radiograph is too delayed to serve as an early indicator of therapeutic response.',
        topic: 'Pediatric HFNC Therapy',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 16,
        questionText:
          'A neonate born at 32 weeks gestation has persistent metabolic acidosis with a blood glucose of 18 mg/dL despite glucose infusion at 10 mg/kg/min. The infant also has hepatomegaly and elevated lactate. What condition should be considered?',
        choices: {
          A: 'An inborn error of metabolism such as glycogen storage disease type I',
          B: 'Transient hyperinsulinism of the newborn',
          C: 'Necrotizing enterocolitis with lactic acidosis',
          D: 'Normal physiologic adaptation with immature hepatic gluconeogenesis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The combination of refractory hypoglycemia despite high glucose infusion rates, hepatomegaly, persistent metabolic acidosis, and elevated lactate strongly suggests an inborn error of metabolism, particularly glycogen storage disease type I (von Gierke disease). This condition impairs glucose-6-phosphatase function, preventing glycogenolysis and gluconeogenesis, leading to severe hypoglycemia and lactic acidosis.',
        explanationWrong:
          'Transient hyperinsulinism typically responds to glucose infusion rates below 10 mg/kg/min and does not cause hepatomegaly. NEC presents with abdominal distension, feeding intolerance, and bloody stools. Normal physiologic adaptation does not cause hepatomegaly, persistent acidosis, and refractory hypoglycemia at these glucose infusion rates.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 17,
        questionText:
          'A 3-year-old child aspirated a peanut 2 days ago, which was confirmed and removed via rigid bronchoscopy. Post-procedure, the child develops fever, productive cough, and increased oxygen requirement. A chest radiograph shows a new infiltrate in the right lower lobe. What is the MOST likely diagnosis?',
        choices: {
          A: 'Retained foreign body fragment that was missed during bronchoscopy',
          B: 'Nosocomial pneumonia from the bronchoscopy procedure',
          C: 'Post-obstructive pneumonia from bacterial infection in the lung segment that was obstructed by the foreign body',
          D: 'Chemical pneumonitis from the lipoid content of the peanut',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Post-obstructive pneumonia is a common complication following foreign body removal. The obstructed lung segment develops atelectasis, mucus retention, and bacterial colonization while the foreign body is in place. Even after removal, the bacterial infection that developed behind the obstruction manifests as pneumonia requiring antibiotic treatment.',
        explanationWrong:
          'While a retained fragment is possible, the development of fever and infiltrate is more consistent with post-obstructive pneumonia. Nosocomial pneumonia from the procedure itself is less likely within 2 days. Chemical pneumonitis from peanut lipids is possible but is typically an immediate response, not developing 2 days after removal.',
        topic: 'Pediatric Foreign Body Aspiration',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 18,
        questionText:
          'A premature infant at 29 weeks gestation has been receiving prolonged kangaroo care (greater than 4 hours daily) since day 7 of life. At 36 weeks corrected age, the infant is ready for discharge. Compared to infants who received standard incubator care, which outcome is MOST strongly supported by research?',
        choices: {
          A: 'Prolonged kangaroo care has no measurable benefit compared to standard incubator care',
          B: 'Infants receiving prolonged kangaroo care have higher rates of exclusive breastfeeding at discharge and reduced length of hospitalization',
          C: 'Prolonged kangaroo care delays weight gain due to increased energy expenditure',
          D: 'Prolonged kangaroo care increases the risk of nosocomial infection from parental contact',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Research, including the landmark Kangaroo Mother Care trial, has demonstrated that prolonged kangaroo care is associated with higher rates of exclusive breastfeeding at discharge, reduced length of hospitalization, improved weight gain, better thermoregulation, and reduced risk of nosocomial infection. These benefits are most pronounced with longer daily durations.',
        explanationWrong:
          'Multiple large studies have shown significant measurable benefits. Kangaroo care does not delay weight gain; it promotes it through improved feeding and reduced energy expenditure from stress. Kangaroo care reduces nosocomial infection rates, likely through colonization with parental flora rather than hospital pathogens.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is called to evaluate a 6-year-old child who had a tonsillectomy 5 days ago and is now having significant bleeding from the surgical site. The child is coughing up blood clots and has an SpO2 of 89%. The emergency physician requests intubation. What is the MOST critical airway management consideration?',
        choices: {
          A: 'The airway will be obscured by blood, requiring large-bore suction immediately available, and there is risk of aspiration of blood into the lower airway during intubation',
          B: 'A standard rapid sequence intubation can be performed without modification',
          C: 'Blind nasotracheal intubation is preferred to avoid the bloody surgical field',
          D: 'A surgical airway should be performed immediately without attempting intubation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Post-tonsillectomy hemorrhage with active bleeding presents a contaminated airway scenario. Large-bore suction must be immediately available to clear blood from the oropharynx and maintain visualization. The risk of aspiration of blood into the lower airways is significant. The intubation team should be prepared for a difficult airway, consider rapid sequence intubation with the patient in a lateral or head-down position to promote drainage, and have a full stomach precaution.',
        explanationWrong:
          'Standard RSI without modification ignores the contaminated airway and full stomach considerations. Blind nasotracheal intubation through a bleeding nasopharynx is extremely dangerous and contraindicated. A surgical airway is premature before attempting intubation with adequate suction.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam24.id,
        questionIndex: 20,
        questionText:
          'A 1-year-old infant is on HFNC at 10 L/min for viral pneumonia. The parents ask whether they can hold the infant during therapy. What is the MOST appropriate response?',
        choices: {
          A: 'Holding the infant is not permitted during HFNC because the cannula will become dislodged',
          B: 'The infant can only be held if sedated to prevent excessive movement',
          C: 'Parents can hold and comfort the infant during HFNC as long as the nasal cannula remains properly positioned and monitoring continues',
          D: 'Holding is permitted only when the infant is being weaned from HFNC',
        },
        correctChoice: 'C',
        explanationCorrect:
          'HFNC is one of the advantages over other forms of noninvasive respiratory support (such as CPAP) in that it allows greater freedom of movement and parent interaction. Parents should be encouraged to hold and comfort their infant during HFNC therapy, provided the nasal cannula remains properly positioned, the tubing is not kinked, and continuous monitoring is maintained.',
        explanationWrong:
          'HFNC cannulas are designed to remain in place during normal infant movement and holding. Sedation is not required for parent-infant interaction during HFNC. Waiting until weaning unnecessarily delays parent-infant bonding and the comfort benefits of being held.',
        topic: 'Pediatric HFNC Therapy',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 24 seeded (20 questions, isFree: false)')

  // ─── EXAM 25 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Board-style integration scenarios combining multiple NPS concepts, advanced clinical reasoning
  // Correct answer distribution: A=5(Q2,Q7,Q13,Q16,Q20) B=5(Q4,Q6,Q9,Q15,Q18) C=5(Q1,Q5,Q10,Q14,Q17) D=5(Q3,Q8,Q11,Q12,Q19)
  const exam25 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 25',
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
          'A premature infant born at 26 weeks gestation is on HFNC at 6 L/min and FiO2 0.30. The infant has a grade II IVH diagnosed on day 3 cranial ultrasound. The nurse wants to position the infant prone for improved oxygenation. What is the MOST appropriate recommendation?',
        choices: {
          A: 'Prone positioning is absolutely contraindicated with any grade of IVH',
          B: 'Prone positioning is fine without any precautions since it improves oxygenation',
          C: 'Prone positioning may be used but the head must be kept midline and elevated 15 to 30 degrees, and position changes should be slow and gentle to avoid fluctuations in cerebral blood flow',
          D: 'The infant should only be positioned supine until the IVH completely resolves on ultrasound',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Prone positioning can improve oxygenation in premature infants and is not contraindicated with IVH. However, the head must be maintained in midline (to prevent jugular venous compression and increased intracranial pressure) and elevated 15 to 30 degrees. Position changes should be performed slowly and gently to minimize fluctuations in cerebral blood flow that could worsen the hemorrhage.',
        explanationWrong:
          'Prone positioning is not absolutely contraindicated with IVH. Positioning without precautions ignores the need to protect cerebral hemodynamics. Restricting the infant to supine until resolution is unnecessarily restrictive and may take weeks.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 2,
        questionText:
          'A 2-year-old child with a known subglottic hemangioma is intubated with a 3.5 mm cuffed ETT for respiratory distress from the enlarging lesion. The child is on mechanical ventilation with minimal settings. The otolaryngologist plans to administer propranolol for hemangioma regression. What respiratory consideration is MOST important while the child is intubated?',
        choices: {
          A: 'Monitor for propranolol-induced bronchospasm, particularly in this age group, and have bronchodilator therapy readily available',
          B: 'Propranolol has no respiratory side effects and no special monitoring is needed',
          C: 'The child should be extubated before starting propranolol to assess airway response',
          D: 'Propranolol only affects cardiac function and has no relevance to respiratory care',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Propranolol is a non-selective beta-blocker that blocks beta-2 adrenergic receptors in the airways. This can precipitate bronchospasm, particularly in young children with reactive airways. The respiratory therapist should monitor for increased airway resistance, wheezing, and bronchospasm, and have bronchodilator therapy (albuterol) readily available during propranolol administration.',
        explanationWrong:
          'Propranolol has well-documented respiratory side effects including bronchospasm. Extubating before starting propranolol is premature when the airway lesion has not yet regressed. Propranolol affects both cardiac and respiratory systems through beta-receptor blockade.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 3,
        questionText:
          'A neonate with an omphalocele has associated findings of macroglossia and hemihypertrophy. The geneticist diagnoses Beckwith-Wiedemann syndrome. In addition to surgical management of the omphalocele, what metabolic complication is the respiratory therapist MOST likely to encounter?',
        choices: {
          A: 'Persistent metabolic alkalosis from renal bicarbonate retention',
          B: 'Hypernatremia from excessive insensible fluid losses through the omphalocele membrane',
          C: 'Adrenal insufficiency requiring stress-dose hydrocortisone',
          D: 'Severe refractory hypoglycemia from hyperinsulinism, which is a hallmark of Beckwith-Wiedemann syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Beckwith-Wiedemann syndrome is characterized by macrosomia, macroglossia, omphalocele, hemihypertrophy, and neonatal hyperinsulinism causing severe hypoglycemia. The hypoglycemia can be refractory and require high glucose infusion rates. The respiratory therapist should be vigilant for signs of hypoglycemia (apnea, jitteriness, seizures) as these affect respiratory management.',
        explanationWrong:
          'Metabolic alkalosis is not a typical feature of Beckwith-Wiedemann syndrome. Hypernatremia from omphalocele fluid losses occurs but is less specific to the syndrome. Adrenal insufficiency is not associated with Beckwith-Wiedemann syndrome.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 4,
        questionText:
          'A 3-year-old child with Down syndrome, congenital heart disease, and pulmonary hypertension requires intubation for respiratory failure from RSV bronchiolitis. The HFNC at 2 L/kg/min has failed. What is the MOST important consideration when transitioning to mechanical ventilation?',
        choices: {
          A: 'Use high PEEP to fully recruit the lungs regardless of hemodynamic effects',
          B: 'Avoid excessive mean airway pressures and high PEEP that could increase pulmonary vascular resistance, worsen pulmonary hypertension, and precipitate right heart failure',
          C: 'Hyperventilate to a PaCO2 of 25 mmHg to reduce pulmonary vascular resistance',
          D: 'Use pressure control ventilation exclusively because volume control is contraindicated in pulmonary hypertension',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In children with pulmonary hypertension, excessive mean airway pressure and high PEEP increase pulmonary vascular resistance by compressing the pulmonary vasculature. This can precipitate acute right ventricular failure and cardiovascular collapse. Ventilator settings should balance adequate oxygenation with minimizing hemodynamic compromise. Mild permissive hypercapnia may be preferable to high pressures.',
        explanationWrong:
          'High PEEP without regard for hemodynamic effects can be fatal in pulmonary hypertension. While mild hyperventilation may reduce PVR, targeting a PaCO2 of 25 mmHg is excessive and causes cerebral vasoconstriction. Volume control ventilation is not contraindicated in pulmonary hypertension.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is caring for a premature infant born at 28 weeks who has been stable on HFNC at 3 L/min and room air for 5 days. The infant is now 34 weeks corrected age. The attending physician asks the therapist to assess readiness for HFNC discontinuation. Which set of criteria BEST indicates the infant is ready?',
        choices: {
          A: 'Oxygen requirement of 0.25 or less, respiratory rate below 80, and good weight gain',
          B: 'The infant has been on HFNC for more than 2 weeks, regardless of clinical status',
          C: 'Respiratory rate consistently below 60, no apnea or bradycardia for 48 to 72 hours, comfortable work of breathing, maintaining temperature, and adequate oral feeding',
          D: 'Chest radiograph shows clear lung fields bilaterally',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Readiness for HFNC discontinuation in premature infants includes: stable respiratory rate consistently below 60, absence of apnea or bradycardia events for at least 48 to 72 hours, minimal work of breathing, ability to maintain thermoregulation, and adequate oral feeding. These criteria together indicate the infant has sufficient respiratory reserve to tolerate the loss of distending pressure and flow.',
        explanationWrong:
          'An FiO2 of 0.25 indicates the infant still has a significant oxygen requirement. Duration on HFNC alone does not determine readiness. While clear lung fields are favorable, they are not the sole criterion for discontinuation; clinical stability is more important.',
        topic: 'Neonatal HFNC Therapy',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 6,
        questionText:
          'A neonate born at 37 weeks with a prenatal diagnosis of congenital diaphragmatic hernia is delivered in the operating room. The infant has immediate respiratory distress. What is the MOST appropriate initial airway management?',
        choices: {
          A: 'Apply CPAP or HFNC to support breathing while avoiding intubation',
          B: 'Perform immediate endotracheal intubation and avoid bag-mask ventilation to prevent gastric distension of the herniated bowel',
          C: 'Begin bag-mask ventilation with 100% oxygen while preparing for intubation',
          D: 'Administer surfactant via INSURE technique (intubate-surfactant-extubate)',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In congenital diaphragmatic hernia, bag-mask ventilation forces air into the stomach and herniated bowel within the chest, worsening lung compression and mediastinal shift. Immediate endotracheal intubation is indicated to secure the airway and provide ventilation while avoiding gastric insufflation. An orogastric tube should be placed promptly to decompress the stomach.',
        explanationWrong:
          'CPAP and HFNC are contraindicated as they can cause gastric distension similar to bag-mask ventilation. Bag-mask ventilation worsens the condition by distending the herniated bowel. INSURE technique is not indicated as surfactant deficiency is not the primary problem in CDH.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 7,
        questionText:
          'A 5-year-old child with a mediastinal lymphoma develops acute stridor and respiratory distress while lying supine for a CT scan. The scan is aborted. What is the MOST appropriate initial action?',
        choices: {
          A: 'Immediately sit the child upright and allow spontaneous breathing, as the supine position caused the mediastinal mass to compress the trachea',
          B: 'Administer neuromuscular blockade and proceed with rapid intubation',
          C: 'Perform emergent tracheostomy to bypass the tracheal compression',
          D: 'Apply continuous positive airway pressure via face mask while keeping the child supine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An anterior mediastinal mass compresses the trachea and great vessels when the patient is supine due to gravitational effect. Immediately repositioning the child upright (or lateral decubitus) relieves the compression by allowing the mass to fall anteriorly away from the posterior tracheal wall. Maintaining spontaneous ventilation is critical as positive pressure may further collapse the compressed airway.',
        explanationWrong:
          'Neuromuscular blockade removes the child\'s ability to maintain airway tone and spontaneous ventilation, which can result in complete airway collapse and inability to ventilate. Emergent tracheostomy may not help if the compression is below the tracheostomy site. Keeping the child supine with CPAP does not address the positional cause of compression.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 8,
        questionText:
          'A neonate born at 29 weeks gestation has a routine cranial ultrasound at day 7 that shows bilateral grade II IVH. The infant is currently stable on nasal CPAP at 5 cm H2O. What is the impact of the IVH diagnosis on the respiratory therapist\'s approach to weaning respiratory support?',
        choices: {
          A: 'Weaning should be accelerated to remove all respiratory support and reduce IVH risk',
          B: 'The IVH has no impact on respiratory management decisions',
          C: 'The infant should be extubated immediately to eliminate positive pressure effects on IVH',
          D: 'Weaning should proceed cautiously with gradual changes, as physiologic instability from rapid weaning can cause fluctuations in cerebral blood flow that may worsen the hemorrhage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'After an IVH diagnosis, maintaining hemodynamic and physiologic stability is paramount to prevent extension of the hemorrhage. Rapid weaning of respiratory support can cause physiologic stress, increased work of breathing, and fluctuations in blood pressure and cerebral blood flow that may worsen the IVH. Gradual, stepwise weaning with close monitoring is essential.',
        explanationWrong:
          'Accelerated weaning causes physiologic stress that can worsen IVH. The IVH diagnosis should inform respiratory management decisions. The infant is on CPAP, not intubated, so extubation is not relevant here.',
        topic: 'Neonatal Cranial Ultrasound and IVH',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 9,
        questionText:
          'A 4-year-old child is receiving inhaled budesonide via jet nebulizer for asthma management. The parent reports the child frequently cries during treatments. How does crying affect aerosol drug delivery?',
        choices: {
          A: 'Crying improves drug delivery because the forceful inspiratory efforts generate higher tidal volumes',
          B: 'Crying significantly reduces lower airway drug deposition because the prolonged expiratory phase during crying forces aerosol out of the airways and the short, shallow inspiratory gasps decrease inspiratory time',
          C: 'Crying has no significant effect on aerosol delivery',
          D: 'Crying improves oropharyngeal deposition, which is beneficial for inhaled corticosteroids',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Crying drastically reduces lower airway aerosol deposition. During crying, the expiratory phase is prolonged and forceful (expelling aerosol from the airways), while the inspiratory phase becomes short and shallow (reducing the amount of aerosol inhaled). Studies have shown that aerosol delivery during crying is reduced by up to 75% compared to quiet tidal breathing.',
        explanationWrong:
          'The inspiratory efforts during crying are short and gasping, not producing beneficial tidal volumes for aerosol deposition. Crying has a significant negative effect on drug delivery. Increased oropharyngeal deposition of corticosteroids is undesirable as it increases side effects (oral candidiasis) without improving therapeutic benefit.',
        topic: 'Pediatric Inhaled Medication Delivery',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 10,
        questionText:
          'A neonate who underwent TEF repair 3 weeks ago is being evaluated for discharge. The infant has intermittent stridor and barking cough but is feeding well. Flexible bronchoscopy confirms mild tracheomalacia with approximately 30% dynamic tracheal collapse. What is the MOST appropriate management recommendation?',
        choices: {
          A: 'Immediate aortopexy to address the tracheomalacia surgically',
          B: 'Long-term tracheostomy placement until the tracheomalacia resolves',
          C: 'Expectant management with close outpatient follow-up, as mild tracheomalacia typically improves as tracheal cartilage matures over the first 1 to 2 years of life',
          D: 'Continuous positive airway pressure via nasal interface to stent the trachea open',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mild tracheomalacia (30% collapse) in a TEF patient who is feeding well and growing typically improves with age as the tracheal cartilage matures and becomes more rigid over the first 1 to 2 years. Surgical intervention (aortopexy) is reserved for severe tracheomalacia (greater than 70% collapse) with life-threatening events. Close outpatient follow-up is appropriate.',
        explanationWrong:
          'Aortopexy is not indicated for mild tracheomalacia. Tracheostomy is an overly aggressive intervention for mild disease. Continuous CPAP is not a practical long-term solution for mild tracheomalacia in a feeding infant and is not indicated.',
        topic: 'Neonatal Surgical Conditions',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 11,
        questionText:
          'A 7-year-old child with epilepsy is having a prolonged seizure at home. The parents administered rectal diazepam and called 911. Upon EMS arrival, the child is postictal with sonorous breathing and SpO2 of 85%. EMS administered intranasal midazolam en route. Upon arrival at the emergency department, the child has another seizure. The respiratory therapist notes the child now has irregular, shallow breathing at 6 breaths/min. What is the MOST critical intervention?',
        choices: {
          A: 'Administer another dose of intranasal midazolam to stop the seizure',
          B: 'Place a nasopharyngeal airway and wait for the seizure to stop',
          C: 'Administer IV levetiracetam as the next-line antiepileptic drug',
          D: 'Provide immediate bag-mask ventilation with supplemental oxygen, as the child has benzodiazepine-induced respiratory failure requiring ventilatory support while the seizure is treated with a non-benzodiazepine antiepileptic',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The child has received multiple doses of benzodiazepines (rectal diazepam and intranasal midazolam) and now has respiratory failure (rate of 6, SpO2 85%). Immediate bag-mask ventilation is required to support oxygenation and ventilation. Additional benzodiazepines should be avoided, and a non-benzodiazepine antiepileptic (phenytoin, levetiracetam, or valproate) should be used for ongoing seizure management.',
        explanationWrong:
          'Additional benzodiazepines would worsen the respiratory depression. A nasopharyngeal airway alone does not address the hypoventilation (6 breaths/min). While levetiracetam is appropriate for seizure control, it does not address the immediate respiratory emergency requiring bag-mask ventilation.',
        topic: 'Pediatric Status Epilepticus',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 12,
        questionText:
          'A premature infant born at 30 weeks gestation is receiving kangaroo care. The parents have been providing daily skin-to-skin sessions since day 10 of life. At 35 weeks corrected age, the infant is being weaned from HFNC to low-flow nasal cannula. The nurse suggests holding kangaroo care during the weaning transition to reduce variables. What is the MOST appropriate response?',
        choices: {
          A: 'Kangaroo care should be paused during any respiratory support transitions',
          B: 'Kangaroo care is only safe on room air and should be held until the infant is off all support',
          C: 'The nurse is correct that too many changes at once could be confusing',
          D: 'Kangaroo care should be continued during the weaning transition as it promotes cardiorespiratory stability and may actually facilitate successful weaning from respiratory support',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Kangaroo care promotes cardiorespiratory stability, improves oxygen saturation, and reduces stress hormones. These effects may actually support successful weaning from respiratory support. There is no evidence that kangaroo care interferes with respiratory weaning. Discontinuing it removes a stabilizing intervention during a potentially stressful transition.',
        explanationWrong:
          'There is no evidence-based reason to pause kangaroo care during respiratory support transitions. Kangaroo care is safe across all levels of respiratory support including mechanical ventilation. The physiologic benefits of kangaroo care support rather than complicate the weaning process.',
        topic: 'Neonatal Skin-to-Skin Care',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 13,
        questionText:
          'A term neonate has a prenatal ultrasound showing a large left-sided congenital diaphragmatic hernia with liver herniation into the chest. The lung-to-head ratio is 0.7 (normal greater than 1.4). The neonatologist discusses the expected respiratory course with the family. What does the low lung-to-head ratio indicate about this infant\'s prognosis?',
        choices: {
          A: 'The lung-to-head ratio of 0.7 indicates severe bilateral pulmonary hypoplasia and a high likelihood of requiring ECMO, with mortality rates exceeding 50% despite maximal medical and surgical intervention',
          B: 'The lung-to-head ratio is not a reliable predictor of outcome in CDH',
          C: 'A ratio of 0.7 indicates moderate lung hypoplasia with expected recovery on conventional ventilation',
          D: 'The low ratio primarily indicates cardiac hypoplasia rather than lung involvement',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The lung-to-head ratio (LHR) is a prenatal ultrasound measurement that predicts the severity of pulmonary hypoplasia in CDH. A ratio below 1.0 indicates severe hypoplasia with significantly reduced lung volume bilaterally (the contralateral lung is also affected by mediastinal shift). These infants have a high likelihood of requiring ECMO and carry mortality rates exceeding 50%. The addition of liver herniation worsens the prognosis further.',
        explanationWrong:
          'The LHR is a validated and widely used prognostic tool in CDH. A ratio of 0.7 represents severe disease, not moderate. The measurement specifically assesses lung size relative to head circumference and does not indicate cardiac hypoplasia.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is managing an 8-year-old child on mechanical ventilation after near-drowning in cold water. The child has been rewarmed and is now hemodynamically stable but remains comatose. The intensivist orders targeted temperature management at 34 to 36 degrees C. What effect does therapeutic hypothermia have on the oxyhemoglobin dissociation curve and how should the therapist adjust?',
        choices: {
          A: 'Hypothermia shifts the curve to the right, requiring higher FiO2 to maintain saturation targets',
          B: 'Hypothermia has no effect on the oxyhemoglobin dissociation curve',
          C: 'Hypothermia shifts the curve to the left, increasing hemoglobin\'s affinity for oxygen and reducing oxygen delivery to tissues, so the therapist should monitor PaO2 closely rather than relying solely on SpO2',
          D: 'Hypothermia causes hemoglobin to release oxygen more readily, allowing FiO2 to be weaned aggressively',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hypothermia shifts the oxyhemoglobin dissociation curve to the left, meaning hemoglobin binds oxygen more tightly and releases it less readily to the tissues. SpO2 may appear normal or high while tissue oxygen delivery is impaired. The respiratory therapist should monitor PaO2 and clinical indicators of adequate tissue oxygenation rather than relying solely on SpO2 readings.',
        explanationWrong:
          'Hypothermia shifts the curve left, not right. The shift has clinically significant effects on oxygen delivery. Hemoglobin holds oxygen more tightly during hypothermia, not less, so aggressive FiO2 weaning based on SpO2 alone could lead to tissue hypoxia.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 15,
        questionText:
          'A 6-month-old infant with a history of prematurity (born at 28 weeks) presents with RSV bronchiolitis in the winter. The infant received palivizumab prophylaxis but still contracted RSV. The infant is on HFNC at 8 L/min with FiO2 0.45. What does the palivizumab history tell the respiratory therapist about this infant\'s expected clinical course?',
        choices: {
          A: 'Palivizumab failure means the infant has a primary immunodeficiency and will have a more severe course',
          B: 'Despite breakthrough infection, infants who received palivizumab generally have less severe disease with reduced ICU admission rates and shorter hospitalization compared to unimmunized infants',
          C: 'The palivizumab was likely counterfeit and the infant should receive another dose immediately',
          D: 'Palivizumab provides no residual protection once infection occurs',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Palivizumab does not prevent all RSV infections but significantly reduces the severity of disease when breakthrough infections occur. Infants who received prophylaxis and still contract RSV generally have shorter hospitalizations, lower ICU admission rates, and reduced need for mechanical ventilation compared to unimmunized infants. This information helps guide the therapist\'s expectations for clinical trajectory.',
        explanationWrong:
          'Breakthrough RSV infection despite palivizumab does not indicate immunodeficiency; it occurs because palivizumab reduces but does not eliminate infection risk. Receiving another dose during active infection is not indicated. Palivizumab provides residual immune modulation that reduces disease severity.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is monitoring a premature infant born at 25 weeks gestation who has been on HFNC at 5 L/min. The infant suddenly develops asymmetric chest wall movement, unilateral decreased breath sounds on the left, and acute desaturation to 72%. Transillumination of the left chest shows a positive light transmission. What is the MOST likely diagnosis and immediate action?',
        choices: {
          A: 'Left-sided pneumothorax requiring immediate needle decompression with a 22-gauge angiocatheter at the second intercostal space, midclavicular line',
          B: 'Left-sided pleural effusion requiring thoracentesis',
          C: 'Mucus plugging of the left mainstem bronchus requiring suctioning',
          D: 'Left-sided pulmonary interstitial emphysema requiring repositioning',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The acute onset of asymmetric chest wall movement, unilateral decreased breath sounds, desaturation, and positive transillumination is the classic presentation of a tension pneumothorax in a premature infant. Immediate needle decompression with a 22-gauge angiocatheter at the second intercostal space, midclavicular line is required as a life-saving intervention, followed by chest tube placement.',
        explanationWrong:
          'Pleural effusion typically develops gradually, not acutely, and would not show increased transillumination. Mucus plugging would not cause positive transillumination. Pulmonary interstitial emphysema is a more diffuse process that would not cause the acute unilateral findings described.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 17,
        questionText:
          'A 10-year-old child with severe traumatic brain injury is being mechanically ventilated in the PICU. The neurosurgeon has placed an intracranial pressure (ICP) monitor that reads 28 mmHg (normal less than 20 mmHg). What ventilator adjustment, if any, should the respiratory therapist make to help lower ICP?',
        choices: {
          A: 'Increase PEEP to 15 cm H2O to improve oxygenation',
          B: 'Switch to pressure support ventilation to reduce mean airway pressure',
          C: 'Temporarily hyperventilate to a PaCO2 of 30 to 35 mmHg to cause cerebral vasoconstriction and reduce cerebral blood volume',
          D: 'Increase tidal volume to 10 mL/kg to improve CO2 clearance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mild, controlled hyperventilation targeting a PaCO2 of 30 to 35 mmHg causes cerebral vasoconstriction, which reduces cerebral blood volume and helps lower intracranial pressure. This is used as a temporizing measure for acute ICP elevation. Aggressive hyperventilation below 30 mmHg is avoided because excessive vasoconstriction can cause cerebral ischemia.',
        explanationWrong:
          'Increasing PEEP to 15 cm H2O can impede cerebral venous drainage and worsen ICP. Switching to pressure support may not provide adequate minute ventilation for controlled hyperventilation. A tidal volume of 10 mL/kg exceeds lung-protective parameters (6 to 8 mL/kg) and risks ventilator-induced lung injury.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 18,
        questionText:
          'A neonate born at 32 weeks gestation has persistent hypoglycemia and was found to have a critical sample showing inappropriately elevated insulin during hypoglycemia. The infant requires a glucose infusion rate of 15 mg/kg/min to maintain blood glucose above 50 mg/dL. Diazoxide has been started. What is the mechanism of diazoxide in treating congenital hyperinsulinism?',
        choices: {
          A: 'Diazoxide directly inhibits insulin synthesis at the transcriptional level',
          B: 'Diazoxide opens ATP-sensitive potassium channels in the pancreatic beta cells, hyperpolarizing the cell membrane and inhibiting insulin secretion',
          C: 'Diazoxide blocks insulin receptors on peripheral tissues, preventing glucose uptake',
          D: 'Diazoxide stimulates glucagon release from pancreatic alpha cells',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Diazoxide acts by opening ATP-sensitive potassium (KATP) channels in pancreatic beta cells. When these channels are open, potassium flows out of the cell, hyperpolarizing the cell membrane. This prevents voltage-gated calcium channels from opening, which blocks the calcium-dependent insulin secretion mechanism. This is the first-line medical therapy for congenital hyperinsulinism.',
        explanationWrong:
          'Diazoxide does not affect insulin gene transcription. It does not block peripheral insulin receptors. While glucagon can raise blood glucose, diazoxide does not primarily act by stimulating glucagon release.',
        topic: 'Neonatal Glucose Management',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is caring for a 3-year-old child intubated for epiglottitis. The child has been on IV antibiotics for 48 hours and the fever has resolved. The intensivist is considering extubation. What is the MOST appropriate method to assess extubation readiness in this clinical scenario?',
        choices: {
          A: 'Perform a cuff leak test; an audible leak at 20 to 25 cm H2O suggests the supraglottic edema has resolved sufficiently for extubation',
          B: 'Extubate based solely on the duration of antibiotic therapy (48 hours is standard)',
          C: 'Obtain a lateral neck radiograph to assess epiglottic swelling',
          D: 'Perform direct laryngoscopy or flexible nasopharyngoscopy to visualize the epiglottis and assess resolution of edema before extubation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Direct visualization of the epiglottis via laryngoscopy or flexible nasopharyngoscopy is the most reliable method to assess resolution of supraglottic edema before extubation in epiglottitis. This allows direct assessment of airway patency and the degree of residual swelling. Extubation should occur in a controlled setting with the ability to reintubate or perform a surgical airway if needed.',
        explanationWrong:
          'A cuff leak test assesses subglottic edema, not supraglottic edema, which is the primary pathology in epiglottitis. Duration of antibiotic therapy alone is insufficient without objective assessment. Lateral neck radiograph is less reliable than direct visualization for assessing extubation readiness.',
        topic: 'Board-Style Integration Scenario',
      },
      {
        miniExamId: exam25.id,
        questionIndex: 20,
        questionText:
          'A neonate born at 27 weeks gestation has completed a course of HFNC therapy and is now on room air. The infant is 36 weeks corrected age and approaching discharge. The parents ask what ongoing respiratory risks their infant faces after NICU discharge. Which response MOST accurately summarizes the evidence?',
        choices: {
          A: 'Former premature infants have an increased risk of reactive airway disease, RSV-related hospitalization in the first two winters of life, and may have reduced lung function that can persist into adulthood, requiring close follow-up with pulmonology',
          B: 'Once off respiratory support and on room air, the infant\'s lungs are fully healed and there are no residual respiratory risks',
          C: 'The only ongoing risk is RSV infection during the first winter, which is fully preventable with palivizumab',
          D: 'Former premature infants only have respiratory risks if they were diagnosed with bronchopulmonary dysplasia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Former premature infants, even those without BPD, have long-term respiratory sequelae including increased reactive airway disease, higher rates of respiratory infections (particularly RSV), and reduced lung function (lower FEV1 and FVC) that can persist into adulthood. These infants benefit from pulmonology follow-up, RSV prophylaxis when indicated, and avoidance of environmental respiratory irritants.',
        explanationWrong:
          'Being weaned to room air does not mean the lungs are fully healed; structural and functional differences persist. RSV is not the only respiratory risk and is not fully preventable with palivizumab. Respiratory risks exist for all former premature infants, not only those with BPD.',
        topic: 'Board-Style Integration Scenario',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 25 seeded (20 questions, isFree: false)')

  console.log('Done seeding NPS mini exams 21-25!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
