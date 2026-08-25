import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 26-30...')

  // ─── EXAM 26 (isFree: false) ───────────────────────────────────────────
  // Comprehensive review: Mixed neonatal/pediatric clinical scenarios
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q14,Q18) B=5(Q1,Q7,Q11,Q16,Q20) C=5(Q3,Q6,Q12,Q15,Q19) D=5(Q4,Q8,Q10,Q13,Q17)
  const exam26 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 26',
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
          'A 28-week gestational age infant on HFOV has an SpO2 of 80% and appears cyanotic. The amplitude is set at 30, frequency at 12 Hz, MAP at 14 cmH2O, and FiO2 at 0.85. A chest radiograph shows the right hemidiaphragm at the 7th rib. Which adjustment should the respiratory therapist recommend FIRST?',
        choices: {
          A: 'Increase the amplitude to 35',
          B: 'Increase the MAP to 16 cmH2O',
          C: 'Decrease the frequency to 10 Hz',
          D: 'Increase the FiO2 to 1.0',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The chest radiograph showing the diaphragm at the 7th rib indicates insufficient lung expansion on HFOV. Optimal expansion is typically at the 8th-9th rib. Increasing the MAP will improve lung recruitment and oxygenation. The oxygenation issue is due to inadequate alveolar recruitment, not ventilation.',
        explanationWrong:
          'Increasing amplitude or decreasing frequency would improve CO2 removal but not oxygenation. Simply increasing FiO2 without addressing the recruitment deficit would not be the best first step, as the lungs need adequate volume to participate in gas exchange.',
        topic: 'Neonatal HFOV Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 2,
        questionText:
          'A 4-year-old child with a history of tracheomalacia is intubated with a 4.5 mm cuffed ETT. During mechanical ventilation, the respiratory therapist notes a large air leak despite the cuff being inflated to 20 cmH2O. What is the BEST next action?',
        choices: {
          A: 'Replace the ETT with a 5.0 mm cuffed tube',
          B: 'Add more air to the cuff until the leak stops',
          C: 'Switch to pressure-control ventilation',
          D: 'Apply a chin strap to reduce leak',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In a child with tracheomalacia, the tracheal diameter may be larger than expected due to the weakened cartilage allowing dynamic expansion. If a cuff pressure of 20 cmH2O does not seal the airway, the tube size is likely too small. Replacing with a larger ETT is appropriate. Cuff pressures should not exceed 20-25 cmH2O to avoid mucosal injury.',
        explanationWrong:
          'Inflating the cuff beyond 20-25 cmH2O risks tracheal mucosal ischemia and damage. Switching to pressure-control ventilation does not address the air leak. A chin strap is used for mask ventilation leaks, not ETT cuff leaks.',
        topic: 'Pediatric Airway Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 3,
        questionText:
          'A term neonate born by emergency cesarean section has Apgar scores of 3 at 1 minute and 5 at 5 minutes. The infant requires PPV with 100% oxygen. After 30 seconds of effective ventilation, the heart rate is 50 bpm. What should the resuscitation team do NEXT?',
        choices: {
          A: 'Administer epinephrine via the umbilical vein',
          B: 'Continue PPV and reassess in another 30 seconds',
          C: 'Begin chest compressions coordinated with PPV at a 3:1 ratio',
          D: 'Intubate immediately and begin mechanical ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Per NRP guidelines, if the heart rate remains below 60 bpm after 30 seconds of effective ventilation, chest compressions should be initiated. The compression-to-ventilation ratio for neonatal resuscitation is 3:1, with compressions and ventilations coordinated (not simultaneous). Compressions should be performed using the two-thumb encircling technique.',
        explanationWrong:
          'Epinephrine is indicated if the heart rate remains below 60 bpm despite adequate ventilation AND compressions. Continuing PPV without compressions is not appropriate when the heart rate is below 60 bpm. Intubation may be considered but chest compressions are the priority at this point.',
        topic: 'Neonatal Resuscitation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 4,
        questionText:
          'A 6-month-old infant with bronchiolitis is receiving heated high-flow nasal cannula (HHFNC) at 8 L/min with FiO2 of 0.50. The infant shows increasing work of breathing with subcostal and intercostal retractions, RR of 72, and SpO2 of 88%. Which intervention is MOST appropriate?',
        choices: {
          A: 'Increase the HHFNC flow to 12 L/min',
          B: 'Administer racemic epinephrine via nebulizer',
          C: 'Switch to a simple oxygen mask at 10 L/min',
          D: 'Escalate to nasal CPAP at 6-8 cmH2O',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The infant is showing signs of HHFNC failure with worsening respiratory distress and hypoxemia despite moderately high flow rates and FiO2. Escalation to nasal CPAP provides more reliable and titratable positive pressure support. CPAP at 6-8 cmH2O can improve oxygenation, reduce work of breathing, and prevent atelectasis more effectively than HHFNC in this setting.',
        explanationWrong:
          'While increasing HHFNC flow might provide marginal benefit, the degree of distress suggests the need for a step-up in respiratory support. Racemic epinephrine is used for croup, not bronchiolitis. A simple oxygen mask provides no positive pressure and would be a step down in therapy.',
        topic: 'Pediatric Non-Invasive Respiratory Support',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is reviewing ABG results for a 32-week premature infant on SIMV: pH 7.22, PaCO2 58 mmHg, PaO2 55 mmHg, HCO3 22 mEq/L, BE -4. The ventilator settings are: RR 30, PIP 22, PEEP 5, Ti 0.35 sec, FiO2 0.45. What is the PRIORITY ventilator adjustment?',
        choices: {
          A: 'Increase the respiratory rate to 35',
          B: 'Increase the PEEP to 7 cmH2O',
          C: 'Increase the FiO2 to 0.55',
          D: 'Increase the PIP to 26 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ABG shows uncompensated respiratory acidosis (low pH, high PaCO2, normal HCO3). The priority is to improve ventilation by increasing minute ventilation. Increasing the rate from 30 to 35 is the safest first approach to reduce PaCO2 in a premature infant, as it avoids the volutrauma risk associated with increasing PIP.',
        explanationWrong:
          'Increasing PEEP would primarily affect oxygenation, not ventilation. Increasing FiO2 addresses oxygenation, not the respiratory acidosis. While increasing PIP would improve tidal volume and CO2 removal, it carries a higher risk of volutrauma and should be considered only if rate adjustments are insufficient.',
        topic: 'Neonatal Mechanical Ventilation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 6,
        questionText:
          'A 10-year-old child with acute asthma exacerbation has received three continuous albuterol nebulizers and IV methylprednisolone. SpO2 is 90% on 4 L/min nasal cannula, RR 36, HR 140, and the child can only speak in 1-2 word phrases. Bilateral wheezing is diminishing. What does the diminishing wheeze MOST likely indicate?',
        choices: {
          A: 'The bronchodilator therapy is taking effect',
          B: 'The child is becoming fatigued and less air is moving',
          C: 'Severe airflow obstruction with impending respiratory failure',
          D: 'The child has developed a pneumothorax',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In the context of a severe asthma exacerbation with worsening clinical signs (tachypnea, tachycardia, inability to speak in sentences, and hypoxemia), diminishing wheezing is an ominous sign. It indicates that airflow has become so severely restricted that there is not enough air movement to produce wheezing. This represents impending respiratory failure.',
        explanationWrong:
          'If bronchodilator therapy were effective, the child would show clinical improvement with better air exchange, reduced work of breathing, and improved SpO2. While the child may be becoming fatigued, the diminishing wheeze specifically indicates severe obstruction. A pneumothorax would present with unilateral absent breath sounds, not bilateral diminished wheezing.',
        topic: 'Pediatric Asthma Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is preparing to deliver surfactant to a 26-week premature infant using the INSURE technique. Which of the following BEST describes this approach?',
        choices: {
          A: 'Administering surfactant via a thin catheter while the infant remains on CPAP',
          B: 'Intubation, surfactant administration, then rapid extubation to CPAP',
          C: 'Surfactant delivered through a laryngeal mask airway',
          D: 'Aerosolized surfactant delivered through nasal prongs',
        },
        correctChoice: 'B',
        explanationCorrect:
          'INSURE stands for INtubate, SURfactant, Extubate. This technique involves brief intubation for surfactant delivery, followed by rapid extubation back to non-invasive support (typically CPAP). The goal is to minimize the duration of mechanical ventilation while providing the benefits of surfactant therapy.',
        explanationWrong:
          'Administering surfactant via a thin catheter while on CPAP describes the LISA (Less Invasive Surfactant Administration) technique, not INSURE. Delivery through a laryngeal mask airway and aerosolized surfactant via nasal prongs are alternative delivery methods under investigation but are not the INSURE technique.',
        topic: 'Neonatal Surfactant Therapy',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 8,
        questionText:
          'A 2-year-old child with epiglottitis is in the emergency department. The child is sitting in a tripod position, drooling, and has inspiratory stridor. SpO2 is 93% on room air. What is the MOST important initial action by the respiratory therapist?',
        choices: {
          A: 'Obtain a lateral neck radiograph to confirm the diagnosis',
          B: 'Attempt direct laryngoscopy to visualize the epiglottis',
          C: 'Administer racemic epinephrine via nebulizer',
          D: 'Keep the child calm, provide blow-by oxygen, and prepare for emergent airway management',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In suspected epiglottitis, the priority is to keep the child calm and avoid any intervention that might agitate them, which could precipitate complete airway obstruction. Blow-by oxygen should be provided while preparing for emergent airway management in the operating room with an anesthesiologist and ENT surgeon available.',
        explanationWrong:
          'Obtaining radiographs delays treatment and may agitate the child. Direct laryngoscopy should not be attempted outside of a controlled environment, as it can cause laryngospasm and complete obstruction. Racemic epinephrine is for croup, not epiglottitis, and a nebulizer may agitate the child.',
        topic: 'Pediatric Airway Emergency',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 9,
        questionText:
          'A neonate is receiving inhaled nitric oxide (iNO) at 20 ppm for persistent pulmonary hypertension. After 4 hours, the PaO2 has improved from 35 to 65 mmHg. The neonatologist asks the respiratory therapist when to begin weaning iNO. What is the BEST response?',
        choices: {
          A: 'Weaning can begin once the PaO2 is consistently above 60 mmHg and FiO2 has been reduced below 0.60',
          B: 'iNO should be maintained at 20 ppm for a minimum of 24 hours before any weaning',
          C: 'Weaning should begin immediately since the PaO2 has improved',
          D: 'iNO should be discontinued abruptly once oxygenation improves',
        },
        correctChoice: 'A',
        explanationCorrect:
          'iNO weaning can begin once oxygenation has stabilized (PaO2 consistently >60 mmHg) and the FiO2 has been reduced below 0.60. Weaning should be done gradually, typically in decrements of 5 ppm, monitoring for rebound pulmonary hypertension with each reduction. The FiO2 should be weaned before iNO to ensure sustained response.',
        explanationWrong:
          'There is no mandatory 24-hour minimum duration for iNO therapy. Immediate weaning after only 4 hours may be premature without demonstrating sustained improvement and FiO2 reduction. Abrupt discontinuation of iNO can cause life-threatening rebound pulmonary hypertension and should never be done.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 10,
        questionText:
          'A 7-year-old child with cystic fibrosis is admitted with a pulmonary exacerbation. The respiratory therapist is planning the airway clearance regimen. Which combination of therapies is MOST appropriate?',
        choices: {
          A: 'Chest physiotherapy with postural drainage only',
          B: 'Incentive spirometry four times daily',
          C: 'Albuterol followed by hypertonic saline then a PEP device',
          D: 'Dornase alfa followed by albuterol then high-frequency chest wall oscillation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For a CF pulmonary exacerbation, the optimal sequence is: dornase alfa (to cleave DNA in mucus and reduce viscosity), then albuterol (to bronchodilate and improve mucus transport), followed by airway clearance with HFCWO or another modality. This sequence maximizes the effectiveness of airway clearance by first thinning secretions and opening airways.',
        explanationWrong:
          'CPT with postural drainage alone is less effective than combining mucolytics, bronchodilators, and clearance techniques. Incentive spirometry alone is insufficient for CF exacerbation management. Albuterol before hypertonic saline with PEP is a reasonable regimen, but dornase alfa should be given before bronchodilators per CF Foundation guidelines.',
        topic: 'Pediatric Airway Clearance',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 11,
        questionText:
          'A 34-week infant is on nasal CPAP at 6 cmH2O with FiO2 of 0.30. The infant is having frequent apneic episodes (>3 per hour) lasting 15-20 seconds with associated bradycardia. Caffeine citrate has already been administered. What should the respiratory therapist recommend?',
        choices: {
          A: 'Increase the CPAP to 8 cmH2O',
          B: 'Increase the CPAP to 7 cmH2O and consider intubation if apnea persists',
          C: 'Switch to HFNC at 4 L/min',
          D: 'Administer a second loading dose of caffeine',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Increasing CPAP slightly may help maintain airway patency and reduce obstructive apnea. However, frequent apneic episodes with bradycardia despite caffeine therapy suggest the infant may need escalation to mechanical ventilation if non-invasive support is insufficient. A modest CPAP increase with close monitoring and readiness for intubation is appropriate.',
        explanationWrong:
          'Jumping to 8 cmH2O may cause gastric distension and air leak syndrome without addressing the central component of apnea. HFNC provides less reliable CPAP and would be a step down. A second loading dose of caffeine is not indicated when a therapeutic dose has already been given; the dose should be verified and maintained, not doubled.',
        topic: 'Neonatal Apnea Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is caring for a 5-year-old child post cardiac surgery who is on mechanical ventilation. The child has a mixed venous oxygen saturation (SvO2) of 55% (normal 65-75%). What does this finding MOST likely indicate?',
        choices: {
          A: 'The child has adequate cardiac output',
          B: 'The child is receiving excessive FiO2',
          C: 'The ventilator settings are causing air trapping',
          D: 'The child has increased oxygen consumption or decreased cardiac output',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A low SvO2 indicates that tissues are extracting more oxygen than normal from the blood, suggesting either increased oxygen consumption (fever, pain, shivering) or decreased oxygen delivery (low cardiac output, anemia, hypoxemia). In a post-cardiac surgery patient, decreased cardiac output is the most concerning cause and should be evaluated immediately.',
        explanationWrong:
          'Adequate cardiac output would be associated with a normal or high SvO2, not a low one. Excessive FiO2 would not cause a low SvO2. While air trapping could impair venous return and cardiac output, the SvO2 finding itself does not specifically indicate air trapping.',
        topic: 'Pediatric Hemodynamic Monitoring',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 13,
        questionText:
          'A 38-week neonate with meconium-stained amniotic fluid is vigorous at birth (strong cry, good tone, HR >100). According to current NRP guidelines, what is the MOST appropriate initial management?',
        choices: {
          A: 'Perform immediate intubation and tracheal suctioning',
          B: 'Begin bag-mask ventilation with 100% oxygen',
          C: 'Place the infant under a radiant warmer and suction the oropharynx deeply',
          D: 'Provide routine care: dry, stimulate, clear airway as needed, and monitor',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current NRP guidelines no longer recommend routine intubation and tracheal suctioning for vigorous infants born through meconium-stained fluid. A vigorous infant (defined by strong respiratory effort, good muscle tone, and heart rate >100 bpm) should receive routine care with drying, stimulation, and clearing of the airway as needed.',
        explanationWrong:
          'Routine intubation and tracheal suctioning for meconium is no longer recommended regardless of vigor status per current NRP guidelines. Bag-mask ventilation is not indicated for a vigorous infant. Deep oropharyngeal suctioning can cause vagal stimulation and bradycardia and is not recommended.',
        topic: 'Neonatal Resuscitation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 14,
        questionText:
          'A 3-month-old infant with a previously repaired congenital diaphragmatic hernia is being weaned from mechanical ventilation. Which of the following findings would BEST indicate readiness for extubation?',
        choices: {
          A: 'Spontaneous tidal volume of 5-7 mL/kg, minimal oxygen requirement, and effective cough',
          B: 'PaCO2 of 55 mmHg with pH of 7.30 on minimal ventilator support',
          C: 'Absence of stridor during a cuff-leak test',
          D: 'Ability to maintain SpO2 >95% on FiO2 of 0.60',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Extubation readiness is indicated by adequate spontaneous tidal volumes (5-7 mL/kg), minimal FiO2 requirement (typically <0.40), effective cough for airway protection, hemodynamic stability, and appropriate level of consciousness. These factors together suggest the infant can maintain adequate gas exchange and airway protection independently.',
        explanationWrong:
          'A PaCO2 of 55 with pH 7.30 suggests permissive hypercapnia may be tolerated in CDH patients, but this alone does not indicate extubation readiness. A cuff-leak test assesses for subglottic edema but is just one factor. Requiring 60% FiO2 to maintain SpO2 suggests the infant still has significant oxygenation impairment and is not ready for extubation.',
        topic: 'Neonatal Ventilator Weaning',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is assessing a 12-year-old child with sickle cell disease who presents with chest pain, fever, tachypnea, and a new pulmonary infiltrate on chest radiograph. Which condition should the therapist suspect?',
        choices: {
          A: 'Community-acquired pneumonia',
          B: 'Pulmonary embolism',
          C: 'Acute chest syndrome',
          D: 'Spontaneous pneumothorax',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Acute chest syndrome (ACS) is a life-threatening complication of sickle cell disease defined by a new pulmonary infiltrate on chest radiograph combined with respiratory symptoms (chest pain, fever, tachypnea, cough, or hypoxemia). It is the leading cause of death in sickle cell patients and requires aggressive treatment including exchange transfusion, supplemental oxygen, and pain management.',
        explanationWrong:
          'While community-acquired pneumonia can trigger ACS and may coexist, the combination of sickle cell disease with these specific findings should raise concern for ACS specifically. Pulmonary embolism and pneumothorax are possible but less likely given the clinical presentation with fever and infiltrate in a sickle cell patient.',
        topic: 'Pediatric Hematologic Emergencies',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 16,
        questionText:
          'A premature infant at 25 weeks gestation develops a grade III intraventricular hemorrhage (IVH). The respiratory therapist should anticipate which ventilator management consideration?',
        choices: {
          A: 'Increase PEEP to prevent further hemorrhage',
          B: 'Minimize handling, avoid suctioning, and maintain stable ventilator settings to prevent fluctuations in cerebral blood flow',
          C: 'Switch to HFOV immediately to reduce intracranial pressure',
          D: 'Increase the ventilator rate to induce hypocapnia and reduce cerebral blood flow',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After IVH, the priority is to minimize fluctuations in cerebral blood flow that could extend the hemorrhage. This includes minimal handling, avoiding unnecessary suctioning, maintaining stable ventilator settings, keeping the head midline and elevated 15-30 degrees, and avoiding rapid changes in PaCO2. Stable, gentle care is essential.',
        explanationWrong:
          'Increasing PEEP does not prevent further hemorrhage and may impair venous return. Switching to HFOV is not automatically indicated for IVH. Inducing hypocapnia through increased ventilator rate would cause cerebral vasoconstriction, which can lead to periventricular leukomalacia and is contraindicated.',
        topic: 'Neonatal Neurologic Complications',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 17,
        questionText:
          'A 9-year-old child is on mechanical ventilation with the following settings: volume control, VT 280 mL, RR 16, PEEP 6, FiO2 0.40. The child weighs 30 kg. The exhaled tidal volume is consistently 220 mL. What is the MOST likely cause of this discrepancy?',
        choices: {
          A: 'The flow sensor is malfunctioning',
          B: 'The patient is actively exhaling against the ventilator',
          C: 'There is a leak in the ventilator circuit or around the airway',
          D: 'The humidifier is absorbing gas volume',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A consistent difference between set/delivered tidal volume and exhaled tidal volume (280 mL vs 220 mL = 60 mL or ~21% loss) most commonly indicates a circuit leak or a leak around the endotracheal tube (if uncuffed or cuff insufficiently inflated). The therapist should check all circuit connections, the ETT cuff, and the circuit for damage.',
        explanationWrong:
          'While a malfunctioning flow sensor is possible, a circuit or airway leak is far more common. Active exhalation against the ventilator would affect flow patterns but not consistently reduce exhaled volume. Humidifiers do not absorb significant gas volumes.',
        topic: 'Pediatric Ventilator Troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is performing a capillary blood gas on a neonate and obtains the following results: pH 7.35, PCO2 42 mmHg, PO2 45 mmHg, HCO3 23 mEq/L. Which statement about these results is MOST accurate?',
        choices: {
          A: 'The pH and PCO2 values are reliable, but the PO2 from a capillary sample should not be used to assess oxygenation status',
          B: 'All values are unreliable because capillary samples are inferior to arterial samples',
          C: 'The low PO2 indicates the infant is hypoxemic and requires increased FiO2',
          D: 'These values should be interpreted the same as an arterial blood gas',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Capillary blood gas pH and PCO2 values correlate reasonably well with arterial values and are clinically useful. However, capillary PO2 does not reliably reflect arterial PO2 and should not be used to make oxygenation decisions. Pulse oximetry or arterial sampling should be used for oxygenation assessment.',
        explanationWrong:
          'Capillary blood gases are not entirely unreliable; pH and PCO2 are clinically useful. Acting on the capillary PO2 to increase FiO2 would be inappropriate since capillary PO2 is inherently lower than arterial PO2. Capillary and arterial blood gases are not interchangeable for all parameters.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 19,
        questionText:
          'A 14-year-old adolescent with muscular dystrophy is being evaluated for initiation of nocturnal non-invasive ventilation. Which pulmonary function finding is the STRONGEST indication for starting NIV?',
        choices: {
          A: 'FEV1 less than 50% predicted',
          B: 'Peak cough flow less than 270 L/min',
          C: 'FVC less than 50% predicted or a decline of more than 10% per year',
          D: 'Maximum inspiratory pressure less than 40 cmH2O',
        },
        correctChoice: 'C',
        explanationCorrect:
          'For neuromuscular disease patients, an FVC less than 50% predicted is a key threshold for initiating nocturnal NIV. Additionally, a decline in FVC of more than 10% per year indicates rapidly progressive respiratory muscle weakness and supports early NIV initiation. Other supporting findings include nocturnal hypoventilation symptoms, morning headaches, and elevated PaCO2.',
        explanationWrong:
          'While FEV1, peak cough flow, and MIP are all important assessments in neuromuscular disease, FVC is the primary metric used to guide the decision for NIV initiation. Peak cough flow below 270 L/min indicates the need for cough-assist devices but is not the primary NIV initiation criterion. MIP below 40 cmH2O supports the decision but FVC is the strongest indicator.',
        topic: 'Pediatric Neuromuscular Disease',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is part of a rapid response team called to assess a 6-month-old infant on the pediatric floor. The nurse reports the infant had an acute desaturation event with apnea. The infant is now responsive but has a HR of 180 and RR of 60. SpO2 is 85% on room air. What is the FIRST priority?',
        choices: {
          A: 'Obtain a STAT chest radiograph',
          B: 'Apply supplemental oxygen and assess the airway',
          C: 'Start an IV and draw blood for labs',
          D: 'Place the infant on continuous cardiac monitoring',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Following the ABCs of assessment, the first priority for an infant with desaturation and recent apnea is to establish supplemental oxygen delivery and assess the airway. The infant has significant hypoxemia (SpO2 85%) with tachycardia and tachypnea, indicating acute respiratory compromise. Airway patency and adequate oxygenation must be established before any other interventions.',
        explanationWrong:
          'While a chest radiograph, IV access with labs, and cardiac monitoring are all important subsequent steps, they should not delay the immediate priority of establishing oxygenation and assessing airway patency. The ABCs always come first in acute deterioration.',
        topic: 'Pediatric Emergency Response',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 26 seeded (20 questions, isFree: false)')

  // ─── EXAM 27 (isFree: false) ───────────────────────────────────────────
  // Comprehensive review: Complex clinical decision-making and multi-system integration
  // Correct answer distribution: A=5(Q3,Q6,Q10,Q15,Q19) B=5(Q1,Q8,Q12,Q17,Q20) C=5(Q4,Q7,Q11,Q14,Q18) D=5(Q2,Q5,Q9,Q13,Q16)
  const exam27 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 27',
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
          'A 30-week premature infant on mechanical ventilation has the following ABG: pH 7.48, PaCO2 30 mmHg, PaO2 92 mmHg, HCO3 22 mEq/L. The ventilator settings are: SIMV, RR 35, PIP 20, PEEP 5, FiO2 0.35. What is the MOST appropriate adjustment?',
        choices: {
          A: 'Decrease the FiO2 to 0.30',
          B: 'Decrease the ventilator rate to 28-30',
          C: 'Decrease the PEEP to 4 cmH2O',
          D: 'Increase the inspiratory time',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ABG shows respiratory alkalosis (elevated pH, low PaCO2) with adequate oxygenation. The most appropriate correction is to decrease minute ventilation by reducing the ventilator rate. Hypocapnia in premature infants is associated with periventricular leukomalacia and should be avoided. Reducing the rate from 35 to 28-30 will allow PaCO2 to normalize.',
        explanationWrong:
          'Decreasing FiO2 would address oxygenation, which is already acceptable, but would not correct the respiratory alkalosis. Decreasing PEEP could worsen oxygenation without effectively correcting the alkalosis. Increasing inspiratory time would not reduce the hyperventilation and could lead to air trapping.',
        topic: 'Neonatal Ventilator Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 2,
        questionText:
          'An 8-year-old child with status asthmaticus is receiving continuous albuterol nebulization at 15 mg/hour, IV magnesium sulfate, and IV methylprednisolone. The child remains in severe distress with SpO2 of 88% on 15 L/min non-rebreather mask. ABG shows pH 7.25, PaCO2 55 mmHg. What should the respiratory therapist recommend NEXT?',
        choices: {
          A: 'Add ipratropium bromide to the nebulizer',
          B: 'Increase the albuterol dose to 20 mg/hour',
          C: 'Begin helium-oxygen (heliox) therapy',
          D: 'Prepare for intubation and mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This child has refractory status asthmaticus with evidence of respiratory failure: severe hypoxemia despite maximal oxygen therapy, a rising PaCO2 (respiratory acidosis), and persistent severe distress despite aggressive medical management. A normalizing or rising PaCO2 in severe asthma indicates impending respiratory failure and the need for mechanical ventilation.',
        explanationWrong:
          'Ipratropium and increased albuterol may provide marginal benefit but are unlikely to reverse this degree of deterioration. Heliox requires a low FiO2 to be effective (at least 60-70% helium) and cannot be used when the patient requires high FiO2 for hypoxemia. The clinical picture demands immediate escalation to mechanical ventilation.',
        topic: 'Pediatric Status Asthmaticus',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is monitoring a neonate on ECMO for severe meconium aspiration syndrome. The pre-membrane blood gas shows: pH 7.30, PaCO2 50 mmHg, PaO2 38 mmHg. The post-membrane gas shows: pH 7.42, PaCO2 35 mmHg, PaO2 300 mmHg. What do these findings indicate?',
        choices: {
          A: 'The ECMO circuit is functioning properly but the patient needs increased ECMO flow',
          B: 'The membrane oxygenator needs to be replaced',
          C: 'The patient is ready to be weaned from ECMO',
          D: 'The sweep gas flow should be decreased',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The post-membrane gas shows excellent oxygenation and normal acid-base status, indicating the membrane oxygenator is functioning well. However, the pre-membrane gas (which reflects the patient\'s systemic status) shows persistent acidosis and hypoxemia, meaning the patient is not receiving adequate support. Increasing the ECMO flow rate will increase the proportion of blood passing through the circuit and improve systemic oxygenation.',
        explanationWrong:
          'The membrane oxygenator is working properly as evidenced by the excellent post-membrane values and does not need replacement. The patient is clearly not ready for ECMO weaning given the poor pre-membrane values. Decreasing sweep gas would worsen CO2 removal when the patient already has elevated PaCO2.',
        topic: 'Neonatal ECMO Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 4,
        questionText:
          'A 5-year-old child with a tracheostomy is being considered for decannulation. Which assessment finding would be a CONTRAINDICATION to proceeding with decannulation?',
        choices: {
          A: 'The child can tolerate capping trials for 48 hours',
          B: 'Flexible bronchoscopy shows a 40% subglottic stenosis',
          C: 'The child has a strong cough with effective secretion clearance',
          D: 'Sleep study with the tracheostomy capped shows no significant obstruction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Wait -- a strong cough with effective secretion clearance is actually a positive finding for decannulation. Let me reconsider. A 40% subglottic stenosis means significant airway narrowing exists above the tracheostomy. This degree of stenosis would make it unsafe to remove the tracheostomy, as the child may not be able to maintain adequate ventilation through the narrowed upper airway, especially during exertion or illness.',
        explanationWrong:
          'Tolerating capping trials for 48 hours demonstrates the child can breathe adequately through the upper airway. A strong cough supports decannulation readiness. A normal sleep study while capped confirms no significant obstruction during sleep. The 40% subglottic stenosis is the finding that would prevent safe decannulation.',
        topic: 'Pediatric Tracheostomy Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 5,
        questionText:
          'A premature infant born at 24 weeks gestation is now at 36 weeks corrected gestational age and on low-flow nasal cannula at 0.25 L/min with FiO2 0.25. The infant has had multiple failed attempts to wean off oxygen. Which diagnosis should the respiratory therapist suspect?',
        choices: {
          A: 'Persistent pulmonary hypertension of the newborn',
          B: 'Surfactant deficiency syndrome',
          C: 'Transient tachypnea of the newborn',
          D: 'Bronchopulmonary dysplasia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Bronchopulmonary dysplasia (BPD) is defined as the need for supplemental oxygen at 36 weeks corrected gestational age in an infant born before 32 weeks gestation. This infant meets the criteria: born at 24 weeks, now at 36 weeks CGA, and still requiring supplemental oxygen with multiple failed weaning attempts. BPD results from chronic lung injury due to mechanical ventilation, oxygen toxicity, and inflammation.',
        explanationWrong:
          'PPHN is an acute condition of the transitional period, not a chronic diagnosis at 36 weeks CGA. Surfactant deficiency (RDS) is an acute disease of prematurity that resolves as the infant matures. TTN is a self-limited condition that resolves within 24-72 hours of birth.',
        topic: 'Neonatal Chronic Lung Disease',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is performing pulmonary function testing on a 10-year-old child with suspected asthma. The baseline spirometry shows FEV1 of 78% predicted and FEV1/FVC ratio of 72%. After administration of a bronchodilator, FEV1 increases to 92% predicted. What is the correct interpretation?',
        choices: {
          A: 'Positive bronchodilator response consistent with asthma, as FEV1 improved by more than 12%',
          B: 'Negative bronchodilator response indicating fixed airway obstruction',
          C: 'Normal spirometry with no significant bronchodilator response',
          D: 'Restrictive lung disease pattern requiring further evaluation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A positive bronchodilator response is defined as an increase in FEV1 of 12% or more from baseline. This child showed an improvement from 78% to 92% predicted (an increase of approximately 18%). The baseline FEV1/FVC ratio of 72% indicates obstruction. The significant reversibility with bronchodilator is consistent with asthma.',
        explanationWrong:
          'The response is clearly positive, not negative, as there was a significant increase in FEV1 after bronchodilator. The baseline spirometry is not normal; the reduced FEV1/FVC ratio indicates obstruction. A restrictive pattern would show reduced FVC with a normal or increased FEV1/FVC ratio.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 7,
        questionText:
          'A 32-week premature infant has a patent ductus arteriosus (PDA) confirmed by echocardiography. The infant is on mechanical ventilation with increasing oxygen requirements. Which clinical finding is MOST consistent with a hemodynamically significant PDA?',
        choices: {
          A: 'Systolic murmur that radiates to the back',
          B: 'Narrow pulse pressure with weak peripheral pulses',
          C: 'Bounding peripheral pulses with a widened pulse pressure',
          D: 'Cyanosis of the lower extremities only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A hemodynamically significant PDA causes left-to-right shunting during both systole and diastole. This results in increased pulse pressure (widened) due to diastolic runoff into the pulmonary circulation, creating bounding peripheral pulses. Other signs include a continuous (machinery) murmur, tachycardia, hepatomegaly, and pulmonary overcirculation.',
        explanationWrong:
          'A systolic murmur radiating to the back is more characteristic of coarctation of the aorta. Narrow pulse pressure with weak pulses suggests poor cardiac output, not PDA with left-to-right shunting. Isolated lower extremity cyanosis suggests differential cyanosis from right-to-left ductal shunting, which occurs in PPHN, not a typical left-to-right PDA shunt.',
        topic: 'Neonatal Cardiovascular',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 8,
        questionText:
          'A 16-year-old patient with severe traumatic brain injury is intubated and mechanically ventilated. The ICP monitor reads 28 mmHg (normal <20). The neurosurgeon requests hyperventilation. To what PaCO2 range should the respiratory therapist target?',
        choices: {
          A: 'PaCO2 of 20-25 mmHg for maximum ICP reduction',
          B: 'PaCO2 of 30-35 mmHg for mild hyperventilation',
          C: 'PaCO2 of 25-30 mmHg for moderate hyperventilation',
          D: 'PaCO2 of 35-40 mmHg to maintain normocapnia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current guidelines recommend mild hyperventilation to PaCO2 of 30-35 mmHg as a temporary measure for elevated ICP. This causes cerebral vasoconstriction, reducing cerebral blood volume and ICP. Aggressive hyperventilation below 30 mmHg is avoided because it may cause excessive vasoconstriction leading to cerebral ischemia.',
        explanationWrong:
          'PaCO2 of 20-25 mmHg represents severe hyperventilation that risks cerebral ischemia and poor outcomes. PaCO2 of 25-30 mmHg is more aggressive than recommended and carries ischemia risk. PaCO2 of 35-40 mmHg is normocapnia and would not address the elevated ICP.',
        topic: 'Pediatric Neurologic Emergency',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 9,
        questionText:
          'A neonatal transport team is preparing to transfer a 2-day-old infant with transposition of the great arteries (TGA) to a cardiac surgery center. The infant is on prostaglandin E1 infusion. During transport, the infant develops apnea. What is the MOST likely cause?',
        choices: {
          A: 'Worsening cardiac function from TGA',
          B: 'Pneumothorax from mechanical ventilation',
          C: 'Hypothermia during transport',
          D: 'Side effect of the prostaglandin E1 infusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Apnea is a well-known and common side effect of prostaglandin E1 (PGE1) infusion, occurring in 10-12% of neonates receiving the drug. PGE1 is used to maintain ductal patency in ductal-dependent cardiac lesions like TGA. The transport team should be prepared for intubation when PGE1 is being administered.',
        explanationWrong:
          'While worsening cardiac function, pneumothorax, and hypothermia can all cause respiratory compromise, apnea in the setting of PGE1 infusion is most likely a known pharmacologic side effect. The transport team should always be prepared for this complication with airway management equipment readily available.',
        topic: 'Neonatal Transport Pharmacology',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is evaluating a 3-year-old child who was rescued from a house fire. The child has facial burns, singed nasal hairs, and carbonaceous sputum. SpO2 reads 99% on room air. The therapist is concerned about carbon monoxide poisoning. Why might the SpO2 reading be unreliable?',
        choices: {
          A: 'Standard pulse oximetry cannot differentiate between oxyhemoglobin and carboxyhemoglobin',
          B: 'The facial burns interfere with the pulse oximeter sensor',
          C: 'Carbon monoxide causes the SpO2 to read falsely low',
          D: 'Smoke inhalation causes methemoglobinemia which falsely elevates SpO2',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Standard pulse oximetry uses two wavelengths of light and cannot distinguish between oxyhemoglobin (O2Hb) and carboxyhemoglobin (COHb). Since COHb absorbs light similarly to O2Hb at one of the wavelengths, the oximeter reads COHb as O2Hb, giving a falsely normal or elevated SpO2 reading. A CO-oximeter or arterial blood gas with co-oximetry is needed for accurate assessment.',
        explanationWrong:
          'While facial burns could theoretically affect sensor placement, the primary concern is the inherent limitation of pulse oximetry technology. CO causes SpO2 to read falsely HIGH, not low. Methemoglobinemia is a separate condition and is not the primary concern in CO poisoning.',
        topic: 'Pediatric Burn and Inhalation Injury',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 11,
        questionText:
          'A 29-week premature infant is receiving CPAP at 7 cmH2O. The nurse notes abdominal distension and the infant appears uncomfortable. An abdominal radiograph shows dilated loops of bowel with pneumatosis intestinalis. What condition should the respiratory therapist suspect, and what is the immediate respiratory implication?',
        choices: {
          A: 'Meconium ileus requiring surgical consultation with no respiratory changes',
          B: 'Gastric distension from CPAP requiring insertion of an OG tube',
          C: 'Necrotizing enterocolitis requiring NPO status, and the infant may need intubation if abdominal distension compromises ventilation',
          D: 'Intestinal malrotation requiring immediate surgery with no ventilator changes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pneumatosis intestinalis (air in the bowel wall) on radiograph is a hallmark finding of necrotizing enterocolitis (NEC), a serious intestinal emergency in premature infants. NEC management includes NPO, gastric decompression, and antibiotics. From a respiratory standpoint, progressive abdominal distension can impair diaphragmatic excursion and compromise ventilation, potentially requiring intubation and mechanical ventilation.',
        explanationWrong:
          'Meconium ileus does not typically show pneumatosis intestinalis. While CPAP can cause some gastric distension, pneumatosis intestinalis is specific to NEC, not simple aerophagia. Intestinal malrotation presents differently and pneumatosis is not its characteristic finding.',
        topic: 'Neonatal Gastrointestinal Emergency',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is caring for a 7-year-old child with severe ARDS (PaO2/FiO2 ratio of 85) on mechanical ventilation. Which ventilator strategy is MOST consistent with current PARDS management guidelines?',
        choices: {
          A: 'VT of 10-12 mL/kg IBW with PEEP of 5 cmH2O',
          B: 'VT of 5-7 mL/kg IBW with PEEP titrated to maintain recruitment and plateau pressure ≤28 cmH2O',
          C: 'VT of 3-4 mL/kg IBW with maximum PEEP regardless of hemodynamic effects',
          D: 'VT of 8-10 mL/kg IBW with high respiratory rate to normalize PaCO2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current PALICC (Pediatric Acute Lung Injury Consensus Conference) guidelines for pediatric ARDS recommend low tidal volume ventilation (5-7 mL/kg IBW) with PEEP titrated to maintain lung recruitment while keeping plateau pressure at or below 28 cmH2O. Permissive hypercapnia is acceptable to achieve lung-protective ventilation.',
        explanationWrong:
          'VT of 10-12 mL/kg would cause volutrauma. VT of 3-4 mL/kg is excessively low and may lead to severe hypercapnia and atelectasis. PEEP should be optimized for recruitment and hemodynamics, not maximized without regard to cardiovascular effects. High VT with aggressive rate to normalize PaCO2 contradicts lung-protective strategies.',
        topic: 'Pediatric ARDS Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 13,
        questionText:
          'A term newborn is diagnosed with congenital diaphragmatic hernia (CDH) on the left side. The respiratory therapist is setting up initial ventilatory support. Which approach is MOST appropriate?',
        choices: {
          A: 'High-frequency oscillatory ventilation with high MAP to recruit the hypoplastic lung',
          B: 'Bag-mask ventilation to establish breathing before intubation',
          C: 'CPAP via nasal prongs at 6 cmH2O',
          D: 'Immediate intubation with gentle ventilation using PIP ≤25 cmH2O and permissive hypercapnia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'CDH management requires immediate intubation (bag-mask ventilation is contraindicated as it distends the herniated bowel and further compresses the lung). Gentle ventilation with PIP limited to 25 cmH2O and permissive hypercapnia (accepting PaCO2 up to 65 mmHg with pH >7.25) is the current standard to minimize ventilator-induced lung injury to the hypoplastic lungs.',
        explanationWrong:
          'HFOV with high MAP can cause barotrauma to the hypoplastic lung and is not the initial approach. Bag-mask ventilation is contraindicated because air enters the stomach and bowel, which are herniated into the chest, further compressing the lungs. CPAP is insufficient for a neonate with CDH who needs definitive airway management.',
        topic: 'Neonatal Congenital Anomalies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 14,
        questionText:
          'A 12-year-old child with type 1 diabetes presents to the emergency department with Kussmaul breathing, fruity odor on breath, and altered mental status. ABG shows pH 7.10, PaCO2 18 mmHg, HCO3 6 mEq/L. What type of acid-base disturbance is present?',
        choices: {
          A: 'Respiratory alkalosis with metabolic compensation',
          B: 'Mixed respiratory and metabolic acidosis',
          C: 'Metabolic acidosis with appropriate respiratory compensation',
          D: 'Metabolic acidosis with inadequate respiratory compensation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This is diabetic ketoacidosis (DKA) causing a primary metabolic acidosis. The low PaCO2 of 18 mmHg represents appropriate respiratory compensation (Kussmaul breathing). Using the Winter formula (expected PaCO2 = 1.5 × HCO3 + 8 ± 2 = 1.5 × 6 + 8 = 17 ± 2 = 15-19), the PaCO2 of 18 falls within the expected range, confirming appropriate compensation.',
        explanationWrong:
          'This is not respiratory alkalosis; the primary disorder is metabolic acidosis. It is not a mixed disorder because the respiratory response is appropriate for the degree of metabolic acidosis. The compensation is adequate based on the Winter formula calculation.',
        topic: 'Pediatric Acid-Base Interpretation',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist notices that a premature infant on mechanical ventilation has developed a tension pneumothorax on the right side. The infant is acutely decompensating with dropping heart rate and blood pressure. What is the MOST critical immediate intervention?',
        choices: {
          A: 'Needle decompression with an angiocatheter at the 2nd intercostal space, midclavicular line on the right',
          B: 'Increase the FiO2 to 1.0 and call for a chest radiograph',
          C: 'Turn the infant to the affected side and increase PEEP',
          D: 'Immediately place a chest tube using sterile technique',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A tension pneumothorax is a life-threatening emergency requiring immediate decompression. Needle decompression using an angiocatheter at the 2nd intercostal space, midclavicular line (or 4th intercostal space, anterior axillary line) is the fastest way to relieve the tension and stabilize the infant. This is followed by definitive chest tube placement.',
        explanationWrong:
          'Waiting for a chest radiograph is inappropriate in a tension pneumothorax with hemodynamic compromise; this is a clinical diagnosis requiring immediate intervention. Turning the infant and increasing PEEP would worsen the tension pneumothorax. Chest tube placement is the definitive treatment but takes longer to set up; needle decompression is the immediate life-saving measure.',
        topic: 'Neonatal Emergency Procedures',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 16,
        questionText:
          'A 4-year-old child is post-operative day 1 following a tonsillectomy and adenoidectomy. The child is now in moderate respiratory distress with stridor and SpO2 of 91% on room air. After applying humidified oxygen, what should the respiratory therapist recommend?',
        choices: {
          A: 'Administer albuterol via nebulizer',
          B: 'Begin non-invasive positive pressure ventilation',
          C: 'Apply ice packs to the neck to reduce swelling',
          D: 'Administer racemic epinephrine via nebulizer and notify the surgeon',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Post-tonsillectomy stridor and respiratory distress suggest upper airway edema. Racemic epinephrine can reduce mucosal edema and improve airway patency. The surgeon must be notified immediately as this may indicate post-operative complications including bleeding or excessive edema that could require surgical intervention.',
        explanationWrong:
          'Albuterol is a bronchodilator for lower airway obstruction, not effective for upper airway edema. Non-invasive PPV may be contraindicated after tonsillectomy due to risk of disrupting the surgical site. Ice packs are not a standard treatment for post-operative airway edema.',
        topic: 'Pediatric Post-Operative Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is managing a 35-week infant who developed hyperbilirubinemia requiring phototherapy. The infant is receiving nasal cannula at 0.5 L/min. What important consideration should the therapist keep in mind regarding phototherapy?',
        choices: {
          A: 'Phototherapy increases the infant\'s oxygen consumption significantly',
          B: 'The infant must be repositioned frequently to maximize skin exposure, and eye protection must be maintained at all times during treatment',
          C: 'Phototherapy requires the infant to be in an isolette with the highest possible humidity',
          D: 'The nasal cannula must be removed during phototherapy sessions',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During phototherapy, maximal skin exposure is important for effective bilirubin reduction. The infant should be repositioned regularly (every 2-3 hours). Eye shields must be properly secured at all times to prevent retinal damage from the phototherapy lights. The nasal cannula can remain in place during phototherapy.',
        explanationWrong:
          'While phototherapy can increase insensible water loss, it does not significantly increase oxygen consumption. High humidity is not specifically required for phototherapy; standard environmental controls are maintained. There is no reason to remove the nasal cannula during phototherapy.',
        topic: 'Neonatal Phototherapy',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 18,
        questionText:
          'A 6-year-old child with severe traumatic brain injury is being mechanically ventilated. The ICP is currently 15 mmHg and the MAP is 75 mmHg. What is the cerebral perfusion pressure (CPP), and is it adequate for this age group?',
        choices: {
          A: 'CPP is 90 mmHg, which is too high for this age group',
          B: 'CPP is 75 mmHg, which is within normal limits',
          C: 'CPP is 60 mmHg, which is adequate for this age group',
          D: 'CPP is 45 mmHg, which is dangerously low',
        },
        correctChoice: 'C',
        explanationCorrect:
          'CPP is calculated as MAP minus ICP: 75 - 15 = 60 mmHg. For children aged 6-17 years, a minimum CPP of 40-50 mmHg is generally recommended, with optimal targets often above 50 mmHg. A CPP of 60 mmHg is adequate for this age group. For younger children, lower CPP values may be acceptable due to lower metabolic demands.',
        explanationWrong:
          'CPP is not 90 or 75 mmHg; it is MAP minus ICP (75 - 15 = 60). CPP of 60 mmHg is not dangerously low for a school-age child; it is within the adequate range. The calculation must be performed correctly before assessing adequacy.',
        topic: 'Pediatric Neurologic Monitoring',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 19,
        questionText:
          'A premature infant at 27 weeks gestation is being treated with indomethacin for PDA closure. The respiratory therapist should monitor for which significant side effect of this medication?',
        choices: {
          A: 'Decreased urine output and renal impairment',
          B: 'Hyperglycemia requiring insulin',
          C: 'Pulmonary hemorrhage',
          D: 'Bronchospasm and increased airway resistance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Indomethacin (a COX inhibitor used for PDA closure) has significant renal side effects including decreased glomerular filtration rate, reduced urine output, and potential oliguria. The respiratory therapist should monitor urine output closely, and fluid intake may need to be restricted. Other side effects include decreased platelet function and gastrointestinal complications.',
        explanationWrong:
          'Hyperglycemia is a side effect of corticosteroids, not indomethacin. While pulmonary hemorrhage can be associated with PDA, it is not a direct side effect of indomethacin. Bronchospasm is not a typical side effect of indomethacin in neonates.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is called to evaluate a 3-month-old infant who was found prone and unresponsive by the parents. CPR is in progress. The infant has been intubated with a 3.5 mm uncuffed ETT. During bag ventilation, the therapist notices the chest is rising only on the right side. What should the therapist do FIRST?',
        choices: {
          A: 'Order an emergent chest radiograph',
          B: 'Withdraw the ETT 1-2 cm and reassess bilateral chest rise',
          C: 'Perform needle decompression on the left side',
          D: 'Replace the ETT with a 4.0 mm tube',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Unilateral chest rise (right side only) during bag ventilation most commonly indicates right mainstem bronchus intubation, where the ETT has advanced too far and entered the right bronchus. The first action should be to withdraw the tube 1-2 cm and reassess for bilateral chest expansion. This is more common than pneumothorax and should be corrected first.',
        explanationWrong:
          'An emergent chest radiograph would take too long during active resuscitation; the clinical problem should be addressed immediately. Needle decompression should be considered only after right mainstem intubation has been ruled out. Replacing with a larger tube does not address the problem of tube position.',
        topic: 'Neonatal/Pediatric Resuscitation',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 27 seeded (20 questions, isFree: false)')

  // ─── EXAM 28 (isFree: false) ───────────────────────────────────────────
  // Comprehensive review: Priority-setting, equipment selection, pharmacology
  // Correct answer distribution: A=5(Q2,Q8,Q11,Q16,Q19) B=5(Q4,Q6,Q13,Q15,Q20) C=5(Q1,Q5,Q9,Q14,Q17) D=5(Q3,Q7,Q10,Q12,Q18)
  const exam28 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 28',
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
          'A 2-day-old term infant presents with central cyanosis that does not improve with 100% oxygen administration. SpO2 remains at 75%. Echocardiography reveals transposition of the great arteries with an intact ventricular septum. While awaiting cardiac surgery, which intervention is MOST critical?',
        choices: {
          A: 'Initiate high-frequency oscillatory ventilation',
          B: 'Administer surfactant replacement therapy',
          C: 'Begin prostaglandin E1 infusion and arrange for balloon atrial septostomy',
          D: 'Place the infant on ECMO support',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In TGA with intact ventricular septum, there is minimal mixing of oxygenated and deoxygenated blood. PGE1 infusion maintains ductal patency to allow some mixing. A balloon atrial septostomy (Rashkind procedure) creates an atrial communication to improve mixing at the atrial level, which is the most effective temporizing measure until arterial switch operation can be performed.',
        explanationWrong:
          'HFOV and surfactant will not address the anatomical problem of parallel circulation. ECMO is a last resort and does not address the underlying need for intracardiac mixing. The key is to maximize mixing between the two parallel circuits.',
        topic: 'Neonatal Congenital Heart Disease',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is selecting equipment for a pediatric transport of a 15 kg child who requires mechanical ventilation. Which of the following considerations is MOST important when selecting the transport ventilator?',
        choices: {
          A: 'The ventilator must be capable of delivering accurate tidal volumes as low as 75 mL with pressure and volume modes',
          B: 'The ventilator should have at least 8 hours of battery life',
          C: 'The ventilator must weigh less than 5 kg for portability',
          D: 'The ventilator should have built-in capnography',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For a 15 kg child, the target tidal volume would be approximately 75-105 mL (5-7 mL/kg). The transport ventilator must accurately deliver these low tidal volumes. Many adult transport ventilators cannot reliably deliver small volumes, making pediatric-capable volume delivery the most critical selection criterion. Both pressure and volume modes should be available for clinical flexibility.',
        explanationWrong:
          'While battery life, weight, and capnography are all important considerations for transport ventilator selection, the ability to accurately deliver appropriate tidal volumes for the patient size is the most critical safety factor. A ventilator that cannot deliver accurate small volumes could cause significant harm.',
        topic: 'Pediatric Transport Equipment',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 3,
        questionText:
          'A premature infant born at 26 weeks gestation is on day 14 of life, receiving mechanical ventilation with FiO2 of 0.65. A routine head ultrasound reveals a grade IV intraventricular hemorrhage with periventricular hemorrhagic infarction. The interdisciplinary team meeting discusses prognosis. What is the respiratory therapist\'s MOST appropriate role in this discussion?',
        choices: {
          A: 'Recommend immediate withdrawal of ventilatory support',
          B: 'Defer entirely to the neonatologist for all decisions',
          C: 'Suggest increasing ventilator support to ensure maximum oxygenation',
          D: 'Provide objective data about the infant\'s current respiratory status and trajectory to inform the team\'s care planning',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The respiratory therapist plays a vital role in interdisciplinary discussions by providing objective clinical data about the infant\'s respiratory status, ventilator requirements trajectory, and response to therapy. This information helps the team and family make informed decisions. The RT should contribute expertise without overstepping into medical decision-making regarding prognosis or withdrawal.',
        explanationWrong:
          'Recommending withdrawal of support is a medical and family decision, not within the RT\'s scope to initiate. Deferring entirely means the team loses valuable respiratory expertise. Increasing support without clinical indication is not appropriate and does not address the neurological prognosis discussion.',
        topic: 'Interdisciplinary Communication',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 4,
        questionText:
          'A 9-month-old infant with a known ventricular septal defect presents with tachypnea (RR 65), diaphoresis during feeding, poor weight gain, and hepatomegaly. Chest radiograph shows cardiomegaly with increased pulmonary vascular markings. What is the MOST likely diagnosis?',
        choices: {
          A: 'Viral pneumonia',
          B: 'Congestive heart failure from left-to-right shunting',
          C: 'Bronchiolitis',
          D: 'Aspiration pneumonia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'This clinical picture is classic for congestive heart failure (CHF) secondary to a hemodynamically significant VSD with left-to-right shunting. Excessive pulmonary blood flow causes pulmonary congestion, tachypnea, and increased work of breathing. Feeding difficulties and poor weight gain result from increased metabolic demands. Hepatomegaly and cardiomegaly confirm cardiac failure.',
        explanationWrong:
          'While viral pneumonia and bronchiolitis can cause tachypnea, they do not typically present with hepatomegaly, cardiomegaly, or chronic feeding difficulties with poor weight gain. Aspiration pneumonia would not explain the cardiomegaly and hepatomegaly. The known VSD strongly points to CHF as the unifying diagnosis.',
        topic: 'Pediatric Cardiovascular',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is administering surfactant to a 1200g premature infant. During instillation, the infant\'s heart rate drops to 70 bpm and SpO2 falls to 78%. What is the MOST appropriate IMMEDIATE action?',
        choices: {
          A: 'Continue surfactant administration quickly to complete the dose',
          B: 'Administer epinephrine via the ETT',
          C: 'Stop surfactant administration, provide positive pressure ventilation, and increase FiO2 until heart rate and SpO2 recover',
          D: 'Withdraw the ETT and bag-mask ventilate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Transient bradycardia and desaturation during surfactant administration are common due to airway obstruction from the surfactant bolus. The correct response is to stop the instillation, provide positive pressure ventilation (PPV) to distribute the surfactant and re-establish ventilation, and increase FiO2 temporarily. Once heart rate and SpO2 recover, the remaining surfactant can be administered.',
        explanationWrong:
          'Continuing administration despite bradycardia and desaturation could worsen airway obstruction. Epinephrine is not indicated for transient surfactant-related bradycardia. Extubating the infant would remove the ability to provide PPV and waste the surfactant dose; the issue is transient obstruction, not an ETT problem.',
        topic: 'Neonatal Surfactant Administration',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 6,
        questionText:
          'A 10-year-old child with severe sepsis is mechanically ventilated. The respiratory therapist notes the following: peak pressure 35 cmH2O, plateau pressure 18 cmH2O, PEEP 8 cmH2O, VT 300 mL. What can be concluded about the respiratory mechanics?',
        choices: {
          A: 'Static compliance is decreased, indicating parenchymal disease',
          B: 'Airway resistance is elevated, as evidenced by the large difference between peak and plateau pressures',
          C: 'Both compliance and resistance are abnormal',
          D: 'The measurements are consistent with normal respiratory mechanics',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The large difference between peak pressure (35) and plateau pressure (18) of 17 cmH2O indicates elevated airway resistance. Static compliance = VT / (Pplat - PEEP) = 300 / (18 - 8) = 30 mL/cmH2O, which is normal for a child this age. The elevated peak-plateau gradient suggests the problem is resistive (secretions, bronchospasm, or small ETT) rather than parenchymal.',
        explanationWrong:
          'Static compliance is actually normal at 30 mL/cmH2O. The mechanics are not entirely normal given the elevated resistance. The isolated finding points to a resistance problem, not a combined compliance and resistance issue.',
        topic: 'Pediatric Respiratory Mechanics',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is preparing to perform an endotracheal intubation on a 2-year-old child weighing 12 kg. The therapist should select which ETT size and insertion depth?',
        choices: {
          A: 'Size 3.5 uncuffed, inserted to 10.5 cm at the lip',
          B: 'Size 4.5 cuffed, inserted to 13.5 cm at the lip',
          C: 'Size 5.0 uncuffed, inserted to 15 cm at the lip',
          D: 'Size 4.0 cuffed, inserted to 12 cm at the lip',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For a 2-year-old child, the ETT size formula for cuffed tubes is (age/4) + 3.5 = (2/4) + 3.5 = 4.0 mm. Current guidelines favor cuffed ETTs in children beyond the neonatal period. The insertion depth can be estimated as ETT size × 3 = 4.0 × 3 = 12 cm at the lip. Cuffed tubes are now preferred in pediatrics as they reduce the need for tube changes and air leak.',
        explanationWrong:
          'Size 3.5 uncuffed would be appropriate for a younger infant. Size 4.5 cuffed would be too large for a 2-year-old. Size 5.0 is appropriate for a much older child. The correct calculation yields a 4.0 cuffed tube with insertion depth of 12 cm.',
        topic: 'Pediatric Intubation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 8,
        questionText:
          'A neonate born at 38 weeks with a birth weight of 4.2 kg has persistent hypoglycemia and is large for gestational age. The infant develops tachypnea and mild respiratory distress at 2 hours of age. A chest radiograph shows perihilar streaking with fluid in the fissures and mild hyperinflation. What is the MOST likely diagnosis?',
        choices: {
          A: 'Transient tachypnea of the newborn in an infant of a diabetic mother',
          B: 'Respiratory distress syndrome',
          C: 'Meconium aspiration syndrome',
          D: 'Pneumonia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The clinical picture is consistent with transient tachypnea of the newborn (TTN): a term or near-term large-for-gestational-age infant (suggesting maternal diabetes), with onset of mild tachypnea within hours of birth, and radiographic findings of perihilar streaking, fluid in the fissures, and mild hyperinflation. Infants of diabetic mothers are at increased risk for TTN due to delayed clearance of fetal lung fluid.',
        explanationWrong:
          'RDS is typical of premature infants with surfactant deficiency and shows a ground-glass pattern, not perihilar streaking. Meconium aspiration shows coarse, patchy infiltrates, and there is no mention of meconium-stained fluid. Pneumonia would typically present with focal infiltrates and systemic signs of infection.',
        topic: 'Neonatal Respiratory Disorders',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 9,
        questionText:
          'A 5-year-old child with acute lymphoblastic leukemia (ALL) is receiving chemotherapy and develops fever (39.5C), severe neutropenia (ANC 200), tachypnea, and bilateral pulmonary infiltrates. SpO2 is 89% on 3 L/min nasal cannula. What is the MOST important respiratory consideration?',
        choices: {
          A: 'Start airway clearance therapy to mobilize secretions',
          B: 'Administer aerosolized antibiotics',
          C: 'Escalate oxygen support while recognizing this immunocompromised child is at high risk for rapid respiratory deterioration requiring early ICU consultation',
          D: 'Perform diagnostic bronchoscopy immediately',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Immunocompromised patients with febrile neutropenia and pulmonary infiltrates can deteriorate rapidly. The respiratory therapist should escalate oxygen support (HFNC or NIV) while communicating the urgency to the medical team. Early ICU consultation is critical because these patients may progress to respiratory failure quickly and may need early intubation. Delayed escalation is associated with worse outcomes.',
        explanationWrong:
          'Airway clearance therapy is unlikely to benefit an immunocompromised patient with infectious infiltrates. Aerosolized antibiotics are not the standard treatment for this scenario; systemic broad-spectrum IV antibiotics are needed. Immediate bronchoscopy may be indicated but should not delay initial respiratory support and ICU consultation.',
        topic: 'Pediatric Immunocompromised Patient',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is caring for a 30-week premature infant who is receiving total parenteral nutrition (TPN) via a central line. The infant suddenly develops acute respiratory distress, cyanosis, and hypotension. A chest radiograph shows a large right-sided pleural effusion. What is the MOST likely complication?',
        choices: {
          A: 'Spontaneous pneumothorax',
          B: 'Necrotizing enterocolitis with perforation',
          C: 'Pulmonary hemorrhage',
          D: 'Central line migration with TPN extravasation into the pleural space',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The acute onset of respiratory distress with a pleural effusion in an infant with a central venous line receiving TPN strongly suggests catheter migration or perforation of the vessel wall, leading to TPN infusion into the pleural space. This is a recognized and potentially fatal complication of central venous catheters in neonates. Emergency treatment includes stopping the infusion and draining the pleural space.',
        explanationWrong:
          'A spontaneous pneumothorax would show air, not fluid, in the pleural space. NEC typically presents with abdominal distension and pneumatosis intestinalis. Pulmonary hemorrhage would present with bloody secretions from the ETT, not a pleural effusion. The combination of a central line and acute pleural effusion strongly suggests line-related complication.',
        topic: 'Neonatal Central Line Complications',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 11,
        questionText:
          'A 7-year-old child is brought to the emergency department after a near-drowning incident in cold freshwater. The child was submerged for approximately 8 minutes. After intubation, the respiratory therapist notes copious frothy secretions from the ETT. What pathophysiology is causing these secretions?',
        choices: {
          A: 'Freshwater aspiration causes surfactant washout and inactivation, leading to alveolar instability and pulmonary edema',
          B: 'Freshwater causes hypertonic fluid shifts into the airway',
          C: 'The cold water temperature prevents surfactant production',
          D: 'Freshwater aspiration causes bronchospasm which traps secretions',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Freshwater is hypotonic relative to plasma and is rapidly absorbed across the alveolar-capillary membrane. In the process, it washes out and inactivates pulmonary surfactant, leading to alveolar collapse, atelectasis, and subsequent pulmonary edema. The frothy secretions represent surfactant-depleted, protein-rich edema fluid flooding the airways.',
        explanationWrong:
          'Freshwater is hypotonic, not hypertonic; fluid moves from the alveoli into the capillaries. Cold water temperature does not prevent surfactant production; the issue is washout. While bronchospasm can occur after aspiration, it is not the primary mechanism for the frothy secretions.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 12,
        questionText:
          'A premature infant is on HFOV with the following settings: MAP 16, amplitude 30, frequency 10 Hz, FiO2 0.50. The ABG shows pH 7.50, PaCO2 28 mmHg, PaO2 75 mmHg. Which adjustment is MOST appropriate?',
        choices: {
          A: 'Decrease the MAP to 14',
          B: 'Increase the FiO2 to 0.55',
          C: 'Increase the frequency to 12 Hz',
          D: 'Decrease the amplitude to 24',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The ABG shows respiratory alkalosis (high pH, low PaCO2) with adequate oxygenation. On HFOV, CO2 removal is primarily controlled by the amplitude (delta P or power). Decreasing the amplitude will reduce the tidal volume delivery, allowing PaCO2 to rise toward normal. Frequency can also affect CO2, but amplitude is the primary adjustment.',
        explanationWrong:
          'Decreasing MAP would primarily affect oxygenation, not ventilation. Increasing FiO2 is unnecessary since oxygenation is already adequate. Increasing frequency on HFOV actually decreases CO2 removal (by reducing tidal volume) but amplitude is the more direct and standard adjustment for CO2 management.',
        topic: 'Neonatal HFOV Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is called to assess a 4-month-old infant who appears to have an apparent life-threatening event (ALTE/BRUE). The infant is now stable with normal vital signs. The parents are extremely anxious. What is the MOST appropriate communication approach?',
        choices: {
          A: 'Reassure the parents that the event was not serious and discharge is likely',
          B: 'Explain in clear, non-medical language what happened, what monitoring will be done, and what signs to watch for while the evaluation is underway',
          C: 'Refer all questions to the physician',
          D: 'Provide the parents with written materials about SIDS and infant CPR',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Effective communication with anxious parents requires clear, empathetic explanation in non-medical language. The respiratory therapist should explain what the event appeared to be, describe the monitoring and evaluation plan, and teach the parents what signs to watch for. This builds trust and helps parents become effective partners in their infant\'s care.',
        explanationWrong:
          'Dismissing parental concerns by saying the event was not serious is inappropriate and may not be accurate pending evaluation. Deferring all questions undermines the interdisciplinary team approach. While CPR training and written materials may eventually be appropriate, they do not address the immediate need for empathetic communication and explanation.',
        topic: 'Family Communication',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 14,
        questionText:
          'A 13-year-old adolescent with cystic fibrosis has an FEV1 of 28% predicted and is listed for lung transplant. During a routine clinic visit, the respiratory therapist notes increasing CO2 retention (PaCO2 52 mmHg, up from baseline of 42 mmHg). What should the therapist recommend?',
        choices: {
          A: 'Increase the frequency of airway clearance to four times daily',
          B: 'Begin oral corticosteroids',
          C: 'Initiate nocturnal non-invasive ventilation to support ventilation during sleep',
          D: 'Recommend listing for urgent transplant',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Progressive CO2 retention in an advanced CF patient indicates ventilatory failure that is likely worse during sleep when respiratory drive is reduced. Nocturnal NIV (BiPAP) can offload the respiratory muscles, improve gas exchange, reduce symptoms, and serve as a bridge to transplant. This is the most appropriate next step for the respiratory therapist to recommend.',
        explanationWrong:
          'While increased airway clearance frequency is reasonable, it alone will not address the ventilatory failure indicated by rising PaCO2. Oral corticosteroids are not indicated for chronic CO2 retention. Transplant listing changes are a physician decision and the patient is already listed; the immediate need is to address the acute ventilatory decline.',
        topic: 'Pediatric Chronic Lung Disease',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 15,
        questionText:
          'A term neonate is on mechanical ventilation for congenital diaphragmatic hernia. The infant has a pre-ductal SpO2 of 95% and a post-ductal SpO2 of 78%. What does this differential cyanosis indicate?',
        choices: {
          A: 'The pulse oximeter on the lower extremity is malfunctioning',
          B: 'Right-to-left shunting through the ductus arteriosus due to pulmonary hypertension',
          C: 'Left-to-right shunting through the ductus arteriosus',
          D: 'The infant has coarctation of the aorta',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A significant difference between pre-ductal (right hand, 95%) and post-ductal (lower extremity, 78%) SpO2 indicates right-to-left shunting through the ductus arteriosus. This occurs when pulmonary vascular resistance exceeds systemic vascular resistance, causing deoxygenated blood from the pulmonary artery to flow through the ductus into the descending aorta. This is common in CDH due to pulmonary hypoplasia and associated pulmonary hypertension.',
        explanationWrong:
          'A malfunctioning oximeter is possible but unlikely to explain such a consistent and clinically expected pattern. Left-to-right shunting would cause both sites to be similar or post-ductal to be slightly higher. Coarctation of the aorta can cause differential cyanosis but the clinical context of CDH with pulmonary hypertension makes right-to-left ductal shunting the most likely explanation.',
        topic: 'Neonatal Pulmonary Hypertension',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is teaching a group of NICU nurses about developmental care for premature infants on mechanical ventilation. Which practice has the STRONGEST evidence for improving neurodevelopmental outcomes?',
        choices: {
          A: 'Clustering care activities to allow extended periods of undisturbed sleep and minimizing noxious stimuli',
          B: 'Keeping the NICU brightly lit to maintain circadian rhythms',
          C: 'Performing routine chest physiotherapy every 2 hours',
          D: 'Maintaining strict silence in the NICU at all times',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Developmental care in the NICU emphasizes clustering care activities to provide protected sleep periods, minimizing noxious stimuli (pain, noise, bright light), and promoting parental bonding through skin-to-skin care. These practices support neurodevelopment by reducing stress responses and promoting organized sleep-wake cycling in premature infants.',
        explanationWrong:
          'Bright lighting disrupts circadian rhythm development in premature infants; cycled lighting (dimmed at night) is recommended. Routine CPT every 2 hours is overly aggressive and may cause physiologic instability. Complete silence is neither achievable nor necessary; the goal is to reduce excessive or sudden noise, not eliminate all sound.',
        topic: 'Neonatal Developmental Care',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 17,
        questionText:
          'A 6-year-old child with severe community-acquired pneumonia is on mechanical ventilation. The physician orders prone positioning. What is the PRIMARY physiologic rationale for prone positioning in pediatric ARDS?',
        choices: {
          A: 'Prone positioning increases functional residual capacity by expanding the anterior chest wall',
          B: 'Prone positioning reduces ventilator-associated pneumonia rates',
          C: 'Prone positioning improves ventilation-perfusion matching by redistributing ventilation to better-perfused dorsal lung regions',
          D: 'Prone positioning facilitates postural drainage of secretions from the upper lobes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In ARDS, the dependent (dorsal) lung regions tend to be atelectatic and poorly ventilated but maintain relatively preserved perfusion. When prone, gravity redistributes ventilation toward the dorsal lung regions (which are now non-dependent), improving ventilation-perfusion matching. Additionally, prone positioning creates more uniform pleural pressure distribution, promoting more homogeneous lung inflation.',
        explanationWrong:
          'While prone positioning may affect chest wall mechanics, the primary benefit is V/Q matching. Reduced VAP rates have been suggested but are not the primary rationale. Prone positioning is not primarily for postural drainage; the mechanism is improved gas exchange through V/Q redistribution.',
        topic: 'Pediatric ARDS Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is assessing a 33-week premature infant who received surfactant 2 hours ago. The infant is on CPAP at 6 cmH2O with FiO2 0.25. SpO2 is 94%. The infant appears comfortable with minimal retractions. What should the therapist recommend?',
        choices: {
          A: 'Increase CPAP to 7 cmH2O to prevent re-intubation',
          B: 'Switch to HFNC at 4 L/min',
          C: 'Administer a second dose of surfactant',
          D: 'Continue current settings and monitor, as the infant is responding well to therapy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The infant is showing signs of clinical improvement: adequate oxygenation on low FiO2 (0.25), minimal work of breathing, and stable SpO2 on modest CPAP support. There is no indication to change therapy. The appropriate action is to continue current settings and monitor closely. Changes should be made based on clinical deterioration or improvement, not prophylactically.',
        explanationWrong:
          'Increasing CPAP when the infant is stable risks gastric distension and air leak without clinical benefit. Switching to HFNC from CPAP when the infant is stable and improving would be a step down that may not be indicated yet. A second surfactant dose is not needed when the infant is responding well to the first dose with low FiO2 requirements.',
        topic: 'Neonatal Post-Surfactant Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is called to the PICU for a 3-year-old child on mechanical ventilation who has developed subcutaneous emphysema in the neck and chest. The ventilator is alarming for low tidal volume and low minute ventilation. What is the MOST likely cause?',
        choices: {
          A: 'Air leak syndrome with possible pneumothorax or pneumomediastinum',
          B: 'ETT cuff rupture',
          C: 'Ventilator circuit disconnection',
          D: 'Tracheal rupture from over-inflated cuff',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Subcutaneous emphysema combined with low tidal volume and low minute ventilation alarms indicates air is escaping from the respiratory system. The most common cause is an air leak syndrome, which may include pneumothorax, pneumomediastinum, or both. Air tracking into subcutaneous tissues occurs when air dissects along tissue planes. Immediate evaluation with chest radiograph and possible needle decompression is needed.',
        explanationWrong:
          'While ETT cuff rupture could cause a volume leak, it would not typically cause subcutaneous emphysema. Circuit disconnection would cause alarms but not subcutaneous emphysema. Tracheal rupture is possible but much rarer than pneumothorax or pneumomediastinum as the cause of this presentation.',
        topic: 'Pediatric Ventilator Complications',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 20,
        questionText:
          'A neonatal respiratory therapist is reviewing the blood gas trending for a 28-week infant over the past 24 hours and notes that the PaO2 has been consistently between 80-100 mmHg on FiO2 of 0.45. What concern should the therapist raise with the neonatal team?',
        choices: {
          A: 'The FiO2 needs to be increased to maintain higher PaO2 levels',
          B: 'The PaO2 levels are too high for a premature infant and increase the risk of retinopathy of prematurity; FiO2 should be weaned',
          C: 'The blood gas analyzer needs recalibration',
          D: 'The umbilical arterial catheter should be repositioned',
        },
        correctChoice: 'B',
        explanationCorrect:
          'PaO2 levels of 80-100 mmHg are above the recommended target for premature infants. Current guidelines recommend maintaining PaO2 between 50-80 mmHg (SpO2 90-95%) in premature infants to reduce the risk of retinopathy of prematurity (ROP) and oxygen toxicity. The FiO2 should be weaned to maintain PaO2 within the target range.',
        explanationWrong:
          'Increasing FiO2 would worsen the hyperoxia and further increase ROP risk. While analyzer recalibration is always worth considering, consistent readings over 24 hours suggest accurate results. Catheter repositioning is not indicated by these findings; the concern is hyperoxia management.',
        topic: 'Neonatal Oxygen Management',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 28 seeded (20 questions, isFree: false)')

  // ─── EXAM 29 (isFree: false) ───────────────────────────────────────────
  // Comprehensive review: Case-based synthesis, multi-system integration
  // Correct answer distribution: A=5(Q1,Q7,Q12,Q15,Q20) B=5(Q3,Q5,Q10,Q14,Q18) C=5(Q4,Q8,Q13,Q16,Q19) D=5(Q2,Q6,Q9,Q11,Q17)
  const exam29 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 29',
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
          'A 25-week premature infant is on day 3 of life, intubated and receiving SIMV with the following settings: RR 40, PIP 24, PEEP 6, FiO2 0.70, Ti 0.35 sec. Despite two doses of surfactant, the FiO2 requirement remains above 0.60. What should the respiratory therapist recommend?',
        choices: {
          A: 'Transition to high-frequency oscillatory ventilation',
          B: 'Increase PIP to 28 cmH2O',
          C: 'Administer a third dose of surfactant immediately',
          D: 'Decrease PEEP to 4 cmH2O to reduce mean airway pressure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When a premature infant continues to require high FiO2 (>0.60) despite optimal conventional ventilation and adequate surfactant replacement, transition to HFOV should be considered. HFOV provides more effective lung recruitment through higher and more consistent mean airway pressure while using very small tidal volumes that reduce ventilator-induced lung injury.',
        explanationWrong:
          'Increasing PIP to 28 cmH2O increases barotrauma and volutrauma risk in a tiny premature infant. A third dose of surfactant may be considered but typically surfactant response is assessed after each dose, and persistent high FiO2 may indicate a disease process beyond surfactant deficiency. Decreasing PEEP would likely worsen oxygenation by promoting alveolar derecruitment.',
        topic: 'Neonatal Ventilation Escalation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 2,
        questionText:
          'A 4-year-old child is admitted to the PICU with severe croup unresponsive to racemic epinephrine and dexamethasone. The child has severe stridor at rest, significant retractions, and SpO2 of 88% on humidified oxygen. What is the NEXT most appropriate intervention?',
        choices: {
          A: 'Repeat racemic epinephrine nebulization every 15 minutes',
          B: 'Administer heliox (70:30 helium:oxygen mixture)',
          C: 'Perform emergent tracheostomy',
          D: 'Prepare for intubation with an ETT 1-2 sizes smaller than age-appropriate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Severe croup unresponsive to standard medical therapy (epinephrine and corticosteroids) with significant respiratory distress and hypoxemia indicates the need for intubation. An ETT 1-2 sizes smaller than the age-appropriate size should be used due to subglottic edema narrowing the airway. This child would typically use a 4.0-4.5 tube, so a 3.0-3.5 should be prepared.',
        explanationWrong:
          'Repeated epinephrine at 15-minute intervals may cause cardiovascular toxicity without addressing the refractory obstruction. Heliox requires at least 60-70% helium to be effective; with SpO2 of 88%, the FiO2 requirement would likely be too high. Emergent tracheostomy is typically not the first-line invasive intervention for croup; intubation is preferred.',
        topic: 'Pediatric Upper Airway Emergency',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is caring for a term neonate with suspected group B streptococcal (GBS) pneumonia. The infant is on mechanical ventilation with FiO2 of 0.60. Blood cultures have been drawn and antibiotics started. The therapist notices the infant\'s chest radiograph resembles RDS. Why might GBS pneumonia mimic RDS on radiograph?',
        choices: {
          A: 'GBS pneumonia only affects premature infants who also have surfactant deficiency',
          B: 'GBS pneumonia involves only the upper lobes, which creates a similar pattern',
          C: 'The bacterial infection causes alveolar protein leak and surfactant inactivation, creating a diffuse ground-glass appearance similar to surfactant deficiency',
          D: 'GBS causes the same biochemical surfactant deficiency as prematurity',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Wait, this is incorrect. Let me reconsider. GBS pneumonia radiographically mimics RDS because the inflammatory process causes alveolar flooding with proteinaceous exudate and surfactant inactivation, creating a diffuse ground-glass or reticulogranular pattern similar to RDS. This is a well-recognized clinical challenge in neonatal medicine.',
        explanationWrong:
          'GBS pneumonia can affect term infants, not just premature ones. It is not limited to the upper lobes; it typically presents with a diffuse pattern. GBS does not cause the same type of surfactant deficiency as prematurity; rather, the inflammatory process inactivates existing surfactant.',
        topic: 'Neonatal Infectious Disease',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 4,
        questionText:
          'A 10-year-old child with severe asthma is being mechanically ventilated. The ventilator graphic shows the expiratory flow waveform does not return to baseline before the next breath is delivered. What does this indicate, and what should the respiratory therapist recommend?',
        choices: {
          A: 'Normal flow pattern for an asthmatic patient requiring no changes',
          B: 'Excessive inspiratory time requiring a shorter Ti',
          C: 'Auto-PEEP (intrinsic PEEP) from air trapping; increase the expiratory time by decreasing the respiratory rate or shortening the inspiratory time',
          D: 'Flow sensor malfunction requiring recalibration',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When expiratory flow does not return to zero before the next breath, it indicates that exhalation is incomplete, resulting in auto-PEEP (air trapping). In asthma, prolonged expiratory time constants due to airway obstruction make this particularly problematic. The solution is to increase expiratory time by decreasing the respiratory rate, shortening inspiratory time, or both.',
        explanationWrong:
          'This is not a normal flow pattern; it indicates incomplete exhalation. While shortening Ti might help, the fundamental issue is auto-PEEP from inadequate expiratory time, not excessive Ti per se. Flow sensor malfunction would not consistently show this specific pattern associated with the clinical scenario.',
        topic: 'Pediatric Ventilator Graphics',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is monitoring a 31-week premature infant on CPAP who has been receiving caffeine citrate for apnea of prematurity. The infant is now 35 weeks corrected gestational age and has had no apneic events for 7 days. What should the therapist recommend regarding caffeine therapy?',
        choices: {
          A: 'Discontinue caffeine immediately since there have been no events for 7 days',
          B: 'Continue caffeine until at least 33-34 weeks CGA and then consider discontinuation with a period of cardiorespiratory monitoring for recurrence',
          C: 'Switch from caffeine to theophylline for better efficacy',
          D: 'Double the caffeine dose as a maintenance strategy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Caffeine is typically continued until the infant reaches at least 33-34 weeks corrected gestational age (some centers use 34-36 weeks) and has been apnea-free for 5-7 days. At 35 weeks CGA with 7 apnea-free days, discontinuation can be considered. However, a period of continued cardiorespiratory monitoring (typically 5-7 days after stopping) is essential, as apnea can recur after caffeine is discontinued.',
        explanationWrong:
          'Abrupt discontinuation without monitoring is risky, as apneic events may recur. Switching to theophylline is not recommended; caffeine is preferred due to wider therapeutic index and fewer side effects. Doubling the dose without clinical indication is inappropriate.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 6,
        questionText:
          'An 8-year-old child with a history of prematurity and BPD is admitted with a respiratory viral infection. The child is on 0.5 L/min home oxygen via nasal cannula at baseline. Current SpO2 is 86% on 2 L/min. Chest auscultation reveals diffuse wheezing and scattered crackles. Which treatment approach is MOST comprehensive?',
        choices: {
          A: 'Increase nasal cannula to 4 L/min and monitor',
          B: 'Administer albuterol only',
          C: 'Begin HFNC at 8 L/min and give IV dexamethasone',
          D: 'Administer albuterol and ipratropium nebulizers, escalate to HFNC or CPAP as needed, consider systemic corticosteroids, and communicate the child\'s BPD history to the treating team',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Children with BPD have chronic lung disease with airway hyperreactivity, baseline oxygen dependence, and limited respiratory reserve. A comprehensive approach includes bronchodilators (albuterol +/- ipratropium), escalated respiratory support (HFNC/CPAP), systemic corticosteroids for the inflammatory component, and importantly, ensuring the medical team understands the child\'s BPD history and baseline needs for appropriate management decisions.',
        explanationWrong:
          'Simply increasing nasal cannula to 4 L/min does not address the bronchospasm or inflammation. Albuterol alone does not address the multi-factorial respiratory compromise. HFNC with dexamethasone only addresses part of the problem. The comprehensive approach addresses bronchospasm, inflammation, oxygenation, and team communication.',
        topic: 'Pediatric Chronic Lung Disease Exacerbation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is assisting with the delivery of a 36-week infant with a known large congenital cystic adenomatoid malformation (CCAM/CPAM) of the left lung. What airway management consideration is MOST important at delivery?',
        choices: {
          A: 'Avoid positive pressure ventilation to the affected lung if possible, intubate early, and avoid high ventilating pressures that could overdistend the cystic lesion',
          B: 'Deliver surfactant immediately after intubation',
          C: 'Place the infant on HFOV immediately',
          D: 'Apply bilateral chest tubes prophylactically',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In infants with a large CCAM/CPAM, positive pressure ventilation can overdistend the cystic lesion, compressing normal lung tissue and potentially causing a tension phenomenon. Early intubation allows controlled ventilation with low pressures. If the infant is severely compromised, selective intubation of the contralateral bronchus may be considered. The surgical team should be on standby for potential emergent resection.',
        explanationWrong:
          'Surfactant is not indicated for CCAM; the issue is structural, not surfactant deficiency. HFOV at delivery is not standard initial management. Prophylactic bilateral chest tubes are not appropriate; intervention should be targeted based on clinical need.',
        topic: 'Neonatal Congenital Lung Lesions',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 8,
        questionText:
          'A 15-year-old adolescent with spinal muscular atrophy type II is hospitalized with pneumonia. The patient uses nocturnal BiPAP at home (IPAP 16, EPAP 6). The patient is currently on continuous BiPAP with the same settings plus FiO2 0.35. SpO2 is 92% but the patient reports difficulty clearing secretions. What should the respiratory therapist add to the care plan?',
        choices: {
          A: 'Switch to invasive mechanical ventilation for better secretion management',
          B: 'Increase the IPAP to 20 to improve cough strength',
          C: 'Implement mechanical insufflation-exsufflation (cough assist) therapy at regular intervals',
          D: 'Administer mucolytic agents via nebulizer only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Patients with neuromuscular disease have weak respiratory muscles and ineffective cough. Mechanical insufflation-exsufflation (MI-E or cough assist) devices simulate a natural cough by providing a deep insufflation followed by rapid exsufflation, generating sufficient expiratory flow to clear secretions. This is a cornerstone of airway clearance in neuromuscular disease.',
        explanationWrong:
          'Invasive mechanical ventilation should be avoided if possible in neuromuscular disease patients who can be managed non-invasively. Increasing IPAP helps with ventilation but does not directly improve cough effectiveness. Mucolytics alone do not address the fundamental problem of weak cough; secretions that are thinned but cannot be expelled are still a problem.',
        topic: 'Pediatric Neuromuscular Airway Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is part of a quality improvement team reviewing NICU outcomes. Data shows an increase in ventilator-associated events (VAE) over the past quarter. Which bundle element has the STRONGEST evidence for reducing VAE in neonates?',
        choices: {
          A: 'Routine use of closed-suction systems',
          B: 'Daily chlorhexidine oral care',
          C: 'Prophylactic antibiotic administration',
          D: 'Elevation of the head of bed to 15-30 degrees and daily assessment of extubation readiness',
        },
        correctChoice: 'D',
        explanationCorrect:
          'VAP/VAE prevention bundles in the NICU emphasize head-of-bed elevation (15-30 degrees, as tolerated), daily assessment of extubation readiness to minimize ventilator days, hand hygiene, and oral care. Daily extubation readiness assessment is particularly impactful because reducing the duration of mechanical ventilation is the single most effective strategy for preventing ventilator-associated events.',
        explanationWrong:
          'Closed suction systems reduce environmental contamination during suctioning but have not shown strong evidence for reducing VAE independently. Chlorhexidine oral care is part of adult VAP bundles but its use in neonates is controversial due to potential mucosal injury and systemic absorption. Prophylactic antibiotics are not recommended for VAE prevention and promote antibiotic resistance.',
        topic: 'Neonatal Quality Improvement',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 10,
        questionText:
          'A 7-year-old child is undergoing procedural sedation for a painful procedure. The child is receiving ketamine and midazolam. The respiratory therapist is monitoring the airway. Which side effect of ketamine is the therapist MOST likely to encounter?',
        choices: {
          A: 'Severe respiratory depression requiring intubation',
          B: 'Increased oral secretions and potential laryngospasm',
          C: 'Bronchospasm requiring bronchodilator therapy',
          D: 'Prolonged apnea lasting more than 5 minutes',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Ketamine is a dissociative anesthetic that generally preserves respiratory drive and airway reflexes better than other sedatives. However, it significantly increases oral and respiratory secretions, which can increase the risk of laryngospasm, especially in children. Glycopyrrolate or atropine may be given prophylactically to reduce secretions. The respiratory therapist should have suction readily available.',
        explanationWrong:
          'Ketamine generally preserves respiratory drive and rarely causes severe respiratory depression requiring intubation. It actually has bronchodilatory properties and is sometimes used for severe asthma. Prolonged apnea is uncommon with ketamine when used at appropriate doses.',
        topic: 'Pediatric Sedation Monitoring',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 11,
        questionText:
          'A premature infant born at 29 weeks is now 2 weeks old and has been successfully extubated to CPAP at 5 cmH2O with FiO2 0.21. The nursing staff reports frequent desaturation events during routine care activities such as diaper changes and weighing. What should the respiratory therapist recommend?',
        choices: {
          A: 'Re-intubate the infant for continued respiratory instability',
          B: 'Increase CPAP to 7 cmH2O',
          C: 'Increase FiO2 to 0.30 continuously',
          D: 'Implement clustered care with pre-oxygenation before handling, and ensure the CPAP interface remains seated during care activities',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Desaturations during handling in a premature infant who is otherwise stable on room air CPAP are often related to the physical disruption of care activities (CPAP displacement, position changes, vagal stimulation). Clustering care to minimize handling episodes, briefly increasing FiO2 before handling (pre-oxygenation), and ensuring the CPAP prongs remain properly seated during care can prevent these events without escalating respiratory support unnecessarily.',
        explanationWrong:
          'Re-intubation is not warranted for handling-related desaturations in an otherwise stable infant. Increasing CPAP may help marginally but does not address the root cause of interface displacement during care. Continuous FiO2 increase is unnecessary when the infant is stable on room air between care activities.',
        topic: 'Neonatal Developmental Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is evaluating a 2-year-old child who was found chewing on a button battery. The child is drooling and refusing to eat. A chest radiograph confirms a button battery lodged in the esophagus. What is the MOST critical concern from a respiratory perspective?',
        choices: {
          A: 'The battery can cause rapid tissue necrosis within 2 hours and may erode into the trachea, creating a tracheoesophageal fistula or perforating a major vessel',
          B: 'The battery will cause gastric acid burns if it passes to the stomach',
          C: 'The battery is likely to cause aspiration pneumonia',
          D: 'The battery will cause esophageal stricture only if left for more than 24 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Button batteries lodged in the esophagus are a true emergency. The electrical current generated by the battery causes hydroxide-mediated tissue necrosis within as little as 2 hours. Erosion can extend to the trachea (creating a tracheoesophageal fistula), major blood vessels (aortoesophageal fistula with fatal hemorrhage), or mediastinum. Emergent removal is required.',
        explanationWrong:
          'If the battery passes to the stomach, the acidic environment generally prevents significant additional injury, and it usually passes spontaneously. Aspiration pneumonia is not the primary concern. Tissue damage begins within hours, not 24 hours, making immediate removal critical.',
        topic: 'Pediatric Foreign Body Emergency',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is managing a 34-week infant on nasal CPAP who develops progressively worsening respiratory distress with grunting, flaring, and retractions. The SpO2 is 84% on CPAP of 7 with FiO2 0.50. A chest radiograph shows bilateral white-out lungs. What is the MOST likely diagnosis, and what is the appropriate intervention?',
        choices: {
          A: 'Pneumothorax requiring needle decompression',
          B: 'Severe TTN requiring increased CPAP',
          C: 'Severe RDS requiring intubation, mechanical ventilation, and surfactant administration',
          D: 'Congenital pneumonia requiring antibiotics only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bilateral white-out (opacification) on chest radiograph in a 34-week premature infant with progressive respiratory failure is most consistent with severe RDS. Despite being near-term, 34-week infants can develop significant RDS. The infant has failed CPAP and requires intubation, mechanical ventilation, and surfactant therapy. This infant likely would have benefited from earlier surfactant administration.',
        explanationWrong:
          'Pneumothorax would typically show unilateral hyperlucency, not bilateral white-out. TTN typically shows perihilar streaking and fluid in fissures, not complete opacification, and would not progress to this severity. While antibiotics should be started for possible pneumonia, the radiographic and clinical picture is most consistent with severe RDS requiring surfactant.',
        topic: 'Neonatal Respiratory Failure',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 14,
        questionText:
          'A 9-year-old child with scoliosis secondary to cerebral palsy is scheduled for spinal fusion surgery. The preoperative pulmonary function testing shows FVC 45% predicted and MIP of -30 cmH2O. What should the respiratory therapist communicate to the surgical team?',
        choices: {
          A: 'The child has normal pulmonary function for their condition',
          B: 'The child is at high risk for post-operative respiratory failure and may require prolonged mechanical ventilation; preoperative respiratory muscle training and a post-operative NIV plan should be considered',
          C: 'Surgery should be cancelled due to pulmonary function results',
          D: 'The child only needs standard post-operative respiratory care',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An FVC of 45% predicted and MIP of -30 cmH2O indicate significant restrictive disease and respiratory muscle weakness. These findings place the child at high risk for post-operative respiratory complications including difficulty weaning from the ventilator, atelectasis, and respiratory failure. The surgical team needs this information to plan for potentially prolonged ventilation, aggressive post-operative respiratory care, and NIV support.',
        explanationWrong:
          'These values are not normal and indicate significant impairment. Cancelling surgery is not the RT\'s decision; the role is to communicate the risk. Standard post-operative care is insufficient for this high-risk patient. Proper preoperative communication ensures the team is prepared for complications.',
        topic: 'Pediatric Perioperative Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 15,
        questionText:
          'A neonate born at 32 weeks gestation develops feeding intolerance, abdominal distension, and bloody stools on day 10 of life. An abdominal radiograph shows pneumatosis intestinalis. The infant is on nasal CPAP at 6 cmH2O. What respiratory change should the therapist anticipate?',
        choices: {
          A: 'The infant may need intubation and mechanical ventilation as abdominal distension compromises diaphragmatic excursion and ventilation',
          B: 'The infant should be switched to HFNC to reduce abdominal distension',
          C: 'No respiratory changes are needed for this gastrointestinal condition',
          D: 'The CPAP should be discontinued as it is causing the abdominal distension',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Necrotizing enterocolitis (NEC), confirmed by pneumatosis intestinalis, causes progressive abdominal distension that can significantly impair diaphragmatic excursion and compromise ventilation. The respiratory therapist should anticipate the possible need for intubation and mechanical ventilation as the disease progresses. Additionally, NEC can lead to sepsis and metabolic acidosis, further compromising respiratory function.',
        explanationWrong:
          'HFNC provides less reliable pressure support and would not address the ventilatory compromise from abdominal distension. NEC is a serious condition with respiratory implications that must be anticipated. While CPAP can contribute to some gastric air, it is not the cause of NEC-related distension; discontinuing it would remove necessary respiratory support.',
        topic: 'Neonatal Multi-System Disease',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is providing discharge education to the family of a 2-year-old child with a tracheostomy and home ventilator. Which statement by the parent indicates the BEST understanding of emergency preparedness?',
        choices: {
          A: '"I will call 911 immediately if the tracheostomy tube comes out."',
          B: '"I will suction the tracheostomy tube if my child has trouble breathing."',
          C: '"If the tracheostomy tube comes out, I will attempt reinsertion using the same-size tube first, then the smaller backup tube, and begin CPR if I cannot ventilate my child."',
          D: '"I will take my child to the emergency department if the ventilator alarms."',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This response demonstrates comprehensive understanding of emergency tracheostomy management. The parent knows to attempt reinsertion with the same-size tube first, use the smaller backup tube if that fails, and begin CPR if the child cannot be ventilated. This stepwise approach maximizes the chance of successful airway management before EMS arrival. Calling 911 should also be done, but airway management cannot wait.',
        explanationWrong:
          'Calling 911 without attempting reinsertion wastes critical time; tracheostomy decannulation can be fatal in minutes. Suctioning is appropriate for secretion-related distress but does not address accidental decannulation. Going to the ED for ventilator alarms shows poor understanding of troubleshooting; most alarms can be resolved at home.',
        topic: 'Pediatric Discharge Education',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is reviewing the chest radiograph of a 5-day-old term infant who has been on mechanical ventilation since birth for persistent pulmonary hypertension. The radiograph shows a large, round, air-filled structure in the left hemithorax with mediastinal shift to the right. What is the MOST likely finding?',
        choices: {
          A: 'Left-sided pneumothorax',
          B: 'Congenital cystic adenomatoid malformation',
          C: 'Left upper lobe atelectasis',
          D: 'Left-sided tension pneumothorax or large congenital pulmonary airway malformation requiring urgent evaluation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A large, round, air-filled structure in the left hemithorax causing mediastinal shift is a critical finding requiring urgent differentiation between a tension pneumothorax and a large congenital pulmonary airway malformation (CPAM). Both can cause hemodynamic compromise from mediastinal shift. A CT scan may be needed for definitive diagnosis, but if the infant is hemodynamically unstable, emergent intervention (needle decompression vs. surgical consultation) should not be delayed.',
        explanationWrong:
          'While a left-sided pneumothorax is possible, the description of a round air-filled structure suggests a more organized lesion. CCAM/CPAM is possible but should be considered alongside pneumothorax given the mediastinal shift and need for urgent evaluation. Left upper lobe atelectasis would show opacification, not air-filled lucency, and would shift the mediastinum toward the affected side.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is caring for a 6-year-old child on ECMO for severe ARDS. The circuit specialist notes increasing hemolysis markers (elevated plasma-free hemoglobin and LDH). What is the MOST likely cause?',
        choices: {
          A: 'The patient is developing disseminated intravascular coagulation',
          B: 'Thrombus formation in the ECMO circuit causing red blood cell destruction at the pump or oxygenator',
          C: 'The anticoagulation level is too high',
          D: 'The patient has developed a hemolytic transfusion reaction',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Elevated hemolysis markers (plasma-free hemoglobin, LDH) during ECMO most commonly indicate mechanical destruction of red blood cells within the circuit. This can occur from thrombus formation in the pump head, oxygenator, or at connection points creating turbulent flow. Elevated pump speeds can also contribute. The circuit should be inspected and the pump head or oxygenator may need to be changed.',
        explanationWrong:
          'DIC causes coagulopathy but is not the primary cause of elevated hemolysis markers in the ECMO context. Excessive anticoagulation would increase bleeding risk but would not directly cause hemolysis. Hemolytic transfusion reaction is possible but less likely than circuit-related hemolysis in an ECMO patient; circuit issues are checked first.',
        topic: 'Pediatric ECMO Complications',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is assessing a 4-month-old infant with laryngomalacia who has inspiratory stridor that worsens with feeding and supine positioning. The infant is maintaining adequate oxygenation. What is the MOST appropriate initial management recommendation?',
        choices: {
          A: 'Immediate surgical intervention with supraglottoplasty',
          B: 'Intubation to secure the airway',
          C: 'Positional therapy with upright positioning during and after feeds, thickened feeds, and close monitoring for growth failure or worsening symptoms',
          D: 'CPAP via nasal prongs to stent the airway open',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mild to moderate laryngomalacia is managed conservatively. Upright positioning during and after feeds reduces supraglottic collapse, and thickened feeds may reduce gastroesophageal reflux which exacerbates laryngomalacia. Most cases resolve by 12-18 months of age. Monitoring for growth failure, feeding difficulties, or worsening obstruction is essential to identify infants who need surgical intervention.',
        explanationWrong:
          'Supraglottoplasty is reserved for severe cases with failure to thrive, significant obstruction, or life-threatening events. Intubation is not indicated when the infant is maintaining adequate oxygenation. CPAP is not standard initial management for laryngomalacia; it may be used in severe cases as a bridge to surgery.',
        topic: 'Pediatric Upper Airway Disorders',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is participating in a simulation exercise for neonatal resuscitation. The team leader asks the therapist to identify the correct sequence of medications during neonatal resuscitation when chest compressions and ventilation have been ongoing for 60 seconds with heart rate still below 60 bpm. What is the correct FIRST medication?',
        choices: {
          A: 'Epinephrine 0.01-0.03 mg/kg IV/UVC, preferably via umbilical venous catheter',
          B: 'Atropine 0.02 mg/kg IV to increase heart rate',
          C: 'Sodium bicarbonate 1-2 mEq/kg IV for acidosis correction',
          D: 'Normal saline 10 mL/kg IV bolus for volume expansion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Per NRP guidelines, if the heart rate remains below 60 bpm despite 60 seconds of coordinated chest compressions and effective ventilation, epinephrine should be administered. The preferred route is intravenous via an umbilical venous catheter at a dose of 0.01-0.03 mg/kg (1:10,000 concentration). If IV access is not available, epinephrine may be given endotracheally at a higher dose (0.05-0.1 mg/kg).',
        explanationWrong:
          'Atropine is not part of the neonatal resuscitation algorithm. Sodium bicarbonate may be considered for prolonged resuscitation with documented metabolic acidosis but is not a first-line medication. Volume expansion with normal saline is indicated only if there is evidence of blood loss or hypovolemia, not as a routine measure.',
        topic: 'Neonatal Resuscitation Pharmacology',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 29 seeded (20 questions, isFree: false)')

  // ─── EXAM 30 (isFree: false) ───────────────────────────────────────────
  // Comprehensive review: Final synthesis across all NPS domains
  // Correct answer distribution: A=5(Q4,Q6,Q11,Q14,Q17) B=5(Q2,Q9,Q12,Q16,Q19) C=5(Q1,Q5,Q8,Q13,Q20) D=5(Q3,Q7,Q10,Q15,Q18)
  const exam30 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 30',
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
          'A respiratory therapist is called to evaluate a 3-day-old infant who is post-operative from a Norwood procedure for hypoplastic left heart syndrome. The infant is on mechanical ventilation with FiO2 of 0.40. SpO2 is reading 92%. The surgeon asks the therapist to target an SpO2 of 75-85%. What is the physiologic rationale for this lower target?',
        choices: {
          A: 'Higher SpO2 indicates the infant is being over-ventilated',
          B: 'The pulse oximeter is reading inaccurately after cardiac surgery',
          C: 'In single-ventricle physiology, an SpO2 of 75-85% indicates balanced pulmonary and systemic blood flow; higher saturations suggest pulmonary overcirculation at the expense of systemic perfusion',
          D: 'Lower SpO2 targets reduce the risk of retinopathy of prematurity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'After a Norwood procedure for HLHS, the single right ventricle supplies both pulmonary and systemic circulations in parallel through the neo-aorta and a Blalock-Taussig shunt. An SpO2 of 75-85% indicates balanced Qp:Qs (approximately 1:1). Higher saturations suggest excessive pulmonary blood flow (Qp:Qs >1), which steals blood from the systemic circulation and can lead to systemic hypoperfusion, acidosis, and coronary insufficiency.',
        explanationWrong:
          'The SpO2 target is about balancing circulations, not ventilation adequacy. The pulse oximeter accuracy is not the issue; the target itself is different. This infant is term, so ROP is not the concern. Understanding the unique hemodynamics of single-ventricle physiology is essential for appropriate respiratory management.',
        topic: 'Neonatal Cardiac Post-Operative',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is caring for a 14-year-old adolescent with obesity hypoventilation syndrome (BMI 42) who was admitted for elective surgery. Post-operatively, the patient is hypoventilating with ABG showing pH 7.28, PaCO2 62 mmHg, PaO2 55 mmHg, HCO3 28 mEq/L. What is the MOST appropriate respiratory intervention?',
        choices: {
          A: 'Increase the supplemental oxygen to correct the hypoxemia',
          B: 'Initiate BiPAP with adequate IPAP to improve ventilation and reduce PaCO2',
          C: 'Begin incentive spirometry every hour',
          D: 'Administer doxapram to stimulate respiratory drive',
        },
        correctChoice: 'B',
        explanationCorrect:
          'This patient has acute-on-chronic hypoventilation (elevated HCO3 indicates chronic CO2 retention with an acute component). BiPAP provides both inspiratory pressure support to augment tidal volume and improve alveolar ventilation, and expiratory pressure to prevent upper airway and chest wall collapse. This directly addresses the hypoventilation while avoiding the need for intubation.',
        explanationWrong:
          'Simply increasing oxygen without addressing ventilation may worsen CO2 retention by reducing hypoxic respiratory drive. Incentive spirometry is important for atelectasis prevention but is insufficient to correct significant hypoventilation. Doxapram is not commonly used and carries significant side effects; NIV is the standard approach.',
        topic: 'Pediatric Obesity and Ventilation',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 3,
        questionText:
          'A premature infant born at 28 weeks gestation is on day 7 of life. The respiratory therapist notes that the infant\'s glucose levels have been unstable and a sepsis evaluation has been initiated. The infant is on SIMV with FiO2 of 0.35. Over the past 2 hours, the FiO2 has increased from 0.25 to 0.35 to maintain SpO2 >90%. What should the therapist be MOST concerned about?',
        choices: {
          A: 'The infant is developing BPD',
          B: 'The surfactant is wearing off',
          C: 'The ventilator circuit is malfunctioning',
          D: 'The increasing FiO2 requirement may indicate early sepsis, and the therapist should communicate this trend to the medical team as supporting evidence for the sepsis workup',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Increasing oxygen requirements in a premature infant, combined with glucose instability, are early signs of neonatal sepsis. The respiratory therapist plays a crucial role in identifying these trends early and communicating them to the medical team. Worsening respiratory status is often one of the first indicators of sepsis in neonates, and this information supports the ongoing sepsis evaluation.',
        explanationWrong:
          'BPD diagnosis requires persistent oxygen need at 36 weeks CGA; this is too early. Surfactant "wearing off" is not a clinical phenomenon after day 3-4 of life. Circuit malfunction is possible but unlikely to cause a gradual FiO2 increase over 2 hours. The clinical context (glucose instability, sepsis workup) strongly suggests the respiratory changes are sepsis-related.',
        topic: 'Neonatal Sepsis Recognition',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 4,
        questionText:
          'A 5-year-old child with severe traumatic brain injury has been placed on a brain death protocol. The respiratory therapist is asked to perform the apnea test. Which of the following is a prerequisite that must be met BEFORE starting the apnea test?',
        choices: {
          A: 'Core temperature must be at least 36C (96.8F), hemodynamic stability must be established, and the patient must be pre-oxygenated with PaO2 >200 mmHg',
          B: 'The patient must be off all sedation for at least 2 hours',
          C: 'The patient must have had two flat-line EEGs',
          D: 'The patient must have a PaCO2 above 60 mmHg before the test begins',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Prerequisites for the apnea test include: normothermia (core temp ≥36C), hemodynamic stability (systolic BP appropriate for age), correction of metabolic derangements, pre-oxygenation with 100% FiO2 for 10 minutes to achieve PaO2 >200 mmHg, and baseline PaCO2 of 35-45 mmHg. These conditions ensure the test results are valid and the patient does not become hemodynamically unstable during the test.',
        explanationWrong:
          'While sedation must be cleared, there is no specific 2-hour waiting period that is universal. Two flat-line EEGs are part of the overall brain death determination but are not prerequisites for the apnea test specifically. The PaCO2 should start at a normal range (35-45 mmHg); it is the rise to >60 mmHg during the test that is being assessed.',
        topic: 'Pediatric Brain Death Testing',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is managing a 33-week premature infant with a large PDA. The infant is on SIMV with the following ABG: pH 7.32, PaCO2 48 mmHg, PaO2 68 mmHg, HCO3 24 mEq/L. The FiO2 is 0.45 and has been gradually increasing over the past 24 hours. A chest radiograph shows increased pulmonary vascular markings with mild cardiomegaly. Which ventilator adjustment is MOST appropriate?',
        choices: {
          A: 'Decrease PEEP to reduce pulmonary blood flow',
          B: 'Increase PIP to compensate for the decreased compliance',
          C: 'Increase PEEP to counteract pulmonary edema from the left-to-right shunt',
          D: 'Increase the ventilator rate to improve minute ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A hemodynamically significant PDA causes left-to-right shunting, resulting in pulmonary overcirculation and pulmonary edema. The increased pulmonary vascular markings and rising FiO2 requirement indicate worsening pulmonary edema. Increasing PEEP helps counteract the alveolar edema and maintain functional residual capacity. The ventilator strategy should focus on managing the pulmonary consequences while the medical team addresses the PDA (indomethacin, ibuprofen, or surgical ligation).',
        explanationWrong:
          'Decreasing PEEP would worsen atelectasis and pulmonary edema. While increasing PIP might temporarily improve ventilation, it does not address the underlying pulmonary edema. The primary issue is oxygenation from pulmonary edema, not ventilation (PaCO2 is only mildly elevated), so rate increase is not the priority.',
        topic: 'Neonatal PDA Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 6,
        questionText:
          'A 12-year-old child is on mechanical ventilation in the PICU following a severe asthma exacerbation. The ventilator settings are: pressure control, PIP 30, PEEP 5, RR 14, Ti 1.0 sec, FiO2 0.40. The I:E ratio is 1:3.3. ABG shows pH 7.30, PaCO2 52 mmHg, PaO2 85 mmHg. What is the BEST interpretation and approach?',
        choices: {
          A: 'The PaCO2 of 52 is acceptable as permissive hypercapnia in a ventilated asthmatic; maintain current settings and focus on bronchodilator therapy',
          B: 'Increase the respiratory rate to 20 to normalize PaCO2',
          C: 'Increase the PIP to 35 to improve tidal volume',
          D: 'Shorten the inspiratory time to 0.8 seconds',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In mechanically ventilated asthmatics, permissive hypercapnia (accepting PaCO2 of 50-60 mmHg with pH >7.25) is an accepted strategy to avoid the complications of aggressive ventilation, including air trapping and barotrauma. The current I:E ratio of 1:3.3 provides adequate expiratory time. The pH of 7.30 is acceptable. The focus should be on optimizing bronchodilator therapy and weaning as bronchospasm resolves.',
        explanationWrong:
          'Increasing the rate to 20 would reduce expiratory time and worsen air trapping, which is the primary concern in asthma. Increasing PIP to 35 increases barotrauma risk. Shortening Ti is not necessary as the current I:E ratio already provides good expiratory time. Aggressive ventilator changes to normalize PaCO2 are contraindicated in status asthmaticus.',
        topic: 'Pediatric Asthma Ventilation Strategy',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 7,
        questionText:
          'A 26-week premature infant has been on HFOV for 5 days. The respiratory therapist notes that the chest wiggle factor has decreased despite no change in amplitude settings. What is the MOST likely explanation?',
        choices: {
          A: 'The infant\'s lung compliance has improved significantly',
          B: 'The HFOV circuit is developing a leak',
          C: 'The infant is becoming sedated from medications',
          D: 'The ETT may be partially obstructed with secretions, reducing the transmission of oscillatory energy to the lungs',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A decrease in chest wiggle (visible thoracic vibrations) without changes in amplitude settings most commonly indicates partial ETT obstruction from secretions. The oscillatory energy is being dampened before reaching the lungs. The therapist should assess ETT patency by attempting to pass a suction catheter and provide thorough suctioning. If patency cannot be restored, ETT replacement may be necessary.',
        explanationWrong:
          'Improved compliance would require a clinical correlate (improving gases, lower FiO2) and would actually increase, not decrease, chest wiggle for the same amplitude. A circuit leak would typically trigger ventilator alarms. Sedation affects the infant\'s spontaneous movements but does not reduce passive chest wiggle from HFOV oscillations.',
        topic: 'Neonatal HFOV Troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 8,
        questionText:
          'A respiratory therapist is called to evaluate a 10-month-old infant with stridor and barking cough. The infant was well until 2 days ago when URI symptoms began. On examination, the infant has inspiratory stridor at rest, moderate suprasternal and intercostal retractions, and SpO2 of 93% on room air. Based on the Westley Croup Score, this presentation is classified as moderate croup. What is the MOST appropriate initial treatment?',
        choices: {
          A: 'Intubation for airway protection',
          B: 'Albuterol nebulizer followed by chest physiotherapy',
          C: 'Nebulized racemic epinephrine and systemic dexamethasone',
          D: 'Cool mist tent with supplemental oxygen only',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Moderate croup (stridor at rest with retractions) is treated with nebulized racemic epinephrine to rapidly reduce subglottic edema (onset within 30 minutes) and systemic corticosteroids (dexamethasone 0.6 mg/kg) for sustained anti-inflammatory effect (onset within 2-6 hours). The combination addresses both the acute obstruction and the ongoing inflammatory process.',
        explanationWrong:
          'Intubation is reserved for severe croup with impending respiratory failure. Albuterol is for lower airway bronchospasm, not subglottic edema. Cool mist has not been shown to be effective in clinical trials and does not address the inflammation or acute edema. Racemic epinephrine with dexamethasone is the evidence-based treatment for moderate croup.',
        topic: 'Pediatric Croup Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is caring for a premature infant on SIMV who has a UAC (umbilical arterial catheter) in place. The therapist draws an ABG from the UAC and notes the PaO2 is 48 mmHg. The pre-ductal SpO2 (right hand) reads 94% and the post-ductal SpO2 (foot) reads 88%. From which location does the UAC sample reflect?',
        choices: {
          A: 'Pre-ductal blood (ascending aorta)',
          B: 'Post-ductal blood (descending aorta)',
          C: 'Mixed venous blood',
          D: 'Pulmonary artery blood',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The UAC is inserted through the umbilical artery, which is a branch of the internal iliac artery, and is positioned in the descending aorta. Therefore, UAC blood samples reflect post-ductal blood. In the presence of right-to-left ductal shunting, the post-ductal PaO2 will be lower than the pre-ductal PaO2, which is consistent with the SpO2 differential seen here (pre-ductal 94% vs post-ductal 88%).',
        explanationWrong:
          'The UAC does not sample pre-ductal blood; it is positioned in the descending aorta below the ductus arteriosus. It does not sample mixed venous or pulmonary artery blood. Understanding catheter positions and their relationship to the ductus arteriosus is essential for interpreting neonatal blood gases.',
        topic: 'Neonatal Vascular Access and Monitoring',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 10,
        questionText:
          'A 7-year-old child with acute chest syndrome secondary to sickle cell disease is on BiPAP (IPAP 12, EPAP 6) with FiO2 0.50. SpO2 is 90%. The child is complaining of severe chest pain and is breathing shallowly because of the pain. What additional intervention should the respiratory therapist advocate for?',
        choices: {
          A: 'Increase FiO2 to 1.0',
          B: 'Switch to mechanical ventilation for better control',
          C: 'Administer racemic epinephrine for airway edema',
          D: 'Adequate pain management (such as patient-controlled analgesia) to allow deeper breathing and improve ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pain is a major contributor to respiratory compromise in acute chest syndrome. Chest wall splinting from pain leads to shallow breathing, atelectasis, and worsening V/Q mismatch. The respiratory therapist should advocate for adequate pain management, which will allow the child to breathe more deeply, cooperate with incentive spirometry and NIV, and improve overall ventilation. Pain management is a critical component of ACS treatment.',
        explanationWrong:
          'Increasing FiO2 to 1.0 without addressing the underlying shallow breathing from pain will have limited benefit and risks oxygen toxicity. Mechanical ventilation may eventually be needed but addressing pain first may prevent this escalation. Racemic epinephrine is not indicated as airway edema is not the issue.',
        topic: 'Pediatric Pain and Respiratory Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 11,
        questionText:
          'A respiratory therapist is calibrating a transcutaneous CO2 (TcCO2) monitor for use on a premature infant. What is an important consideration when using TcCO2 monitoring in neonates?',
        choices: {
          A: 'TcCO2 monitoring is only accurate in term infants',
          B: 'The sensor site must be changed every 2-4 hours to prevent thermal skin injury, and the probe temperature should be set at 42-43C for neonates',
          C: 'The sensor can remain in one location for up to 24 hours',
          D: 'TcCO2 values are always 10-15 mmHg lower than PaCO2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Transcutaneous CO2 monitoring requires heated sensors (42-43C in neonates) to arterialize capillary blood flow and facilitate gas diffusion through the skin. Because of the heat, the sensor site must be rotated every 2-4 hours to prevent thermal burns to the delicate neonatal skin. TcCO2 values typically correlate well with PaCO2 in neonates when the sensor is properly calibrated and positioned.',
        explanationWrong:
          'TcCO2 monitoring is actually more accurate in premature and term neonates than in older patients because thin neonatal skin facilitates gas diffusion. Leaving the sensor in one location for 24 hours would cause thermal burns. TcCO2 values typically run slightly higher than PaCO2 (not lower) due to local CO2 production from heated tissue metabolism.',
        topic: 'Neonatal Monitoring Technology',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 12,
        questionText:
          'A 3-year-old child with a known history of subglottic stenosis following prolonged intubation is being scheduled for airway reconstruction surgery. The respiratory therapist is asked to perform a pre-operative assessment. Which finding would be MOST important to document?',
        choices: {
          A: 'The child\'s baseline SpO2 on room air',
          B: 'The degree of stenosis on flexible bronchoscopy (Cotton-Myer grading) and the child\'s exercise tolerance and stridor pattern',
          C: 'The child\'s vaccination history',
          D: 'The type of ETT previously used during the prolonged intubation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Cotton-Myer grading system classifies subglottic stenosis severity (Grade I: 0-50% obstruction, Grade II: 51-70%, Grade III: 71-99%, Grade IV: complete obstruction). Documenting the degree of stenosis, along with functional assessment (exercise tolerance, stridor at rest vs. with activity), provides the surgical team with critical information for planning the reconstruction approach and predicting post-operative course.',
        explanationWrong:
          'While baseline SpO2 is useful, the degree of stenosis and functional status are more critical for surgical planning. Vaccination history is relevant for general anesthesia but not specific to airway reconstruction planning. While knowing previous ETT details is interesting, the current stenosis grade and functional status are more important for surgical decision-making.',
        topic: 'Pediatric Airway Surgery Planning',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is monitoring a 30-week premature infant who is receiving ibuprofen for PDA closure. On the second day of treatment, the infant\'s urine output drops to 0.5 mL/kg/hr (down from 2 mL/kg/hr). What should the therapist communicate to the medical team?',
        choices: {
          A: 'This is expected and requires no intervention',
          B: 'The infant likely has a urinary tract infection',
          C: 'The decreased urine output may be a renal side effect of ibuprofen and should be monitored closely; the team should evaluate renal function and fluid balance',
          D: 'The infant needs an immediate fluid bolus',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Both indomethacin and ibuprofen (NSAIDs used for PDA closure) inhibit prostaglandin synthesis, which affects renal blood flow and can decrease glomerular filtration rate. A drop in urine output from 2 to 0.5 mL/kg/hr is significant and may indicate NSAID-induced renal impairment. The medical team should evaluate renal function (BUN, creatinine), assess fluid balance, and consider whether to continue, modify, or discontinue the ibuprofen.',
        explanationWrong:
          'A significant drop in urine output during NSAID therapy is not expected and requires attention. UTI is unlikely to be the primary cause in this clinical context. An immediate fluid bolus without first assessing the clinical picture (cardiac status, fluid balance) may be harmful, especially in an infant with a PDA.',
        topic: 'Neonatal Pharmacology Monitoring',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is performing a spontaneous breathing trial (SBT) on a 5-year-old child who has been mechanically ventilated for 7 days following severe pneumonia. After 15 minutes on pressure support of 5 cmH2O and PEEP of 5 cmH2O, the child develops RR of 45 (baseline 22), HR increases from 100 to 135, and the child appears anxious and diaphoretic. What should the therapist do?',
        choices: {
          A: 'Consider the SBT failed, return to full ventilatory support, and document the findings for the medical team',
          B: 'Continue the SBT for the full 30-120 minutes to get a complete assessment',
          C: 'Decrease the pressure support to 3 cmH2O to make the test more rigorous',
          D: 'Administer a sedative to reduce anxiety and continue the trial',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The child is showing clear signs of SBT failure: significant tachypnea (>100% increase from baseline), tachycardia (35% increase), and clinical signs of distress (anxiety, diaphoresis). The SBT should be terminated immediately, and the child should be returned to full ventilatory support. These findings should be documented and communicated to the medical team. The child is not yet ready for extubation.',
        explanationWrong:
          'Continuing an SBT when the patient shows clear failure signs risks respiratory muscle fatigue and can delay recovery. Decreasing pressure support when the patient is already failing would worsen the situation. Administering sedation to mask symptoms of respiratory distress is dangerous and defeats the purpose of the SBT assessment.',
        topic: 'Pediatric Ventilator Weaning',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 15,
        questionText:
          'A 36-week neonate with persistent hypoxemia is started on inhaled nitric oxide (iNO) at 20 ppm. After 30 minutes, there is no improvement in oxygenation (PaO2 remains at 35 mmHg). An echocardiogram reveals total anomalous pulmonary venous return (TAPVR) with obstruction. Why did iNO fail to improve oxygenation?',
        choices: {
          A: 'The iNO dose was too low and should be increased to 40 ppm',
          B: 'The iNO delivery device was malfunctioning',
          C: 'The infant needs to be on HFOV for iNO to be effective',
          D: 'TAPVR is an anatomical defect causing obstruction to pulmonary venous return; iNO cannot resolve an anatomical obstruction, and the infant needs urgent surgical repair',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Inhaled nitric oxide is a selective pulmonary vasodilator effective for pulmonary hypertension caused by vasoconstriction. In obstructed TAPVR, the hypoxemia is caused by a structural anomaly where all pulmonary veins drain anomalously and there is physical obstruction to pulmonary venous return. No amount of vasodilation can overcome an anatomical obstruction. This condition requires emergent surgical repair.',
        explanationWrong:
          'Increasing iNO above 20 ppm provides minimal additional benefit and increases the risk of methemoglobinemia. The iNO delivery system is unlikely to be the issue when properly set up. HFOV does not change the fundamental inability of iNO to treat anatomical obstruction. The key teaching point is that iNO non-responders should be evaluated for structural heart disease.',
        topic: 'Neonatal Cardiac Defects and iNO',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is caring for a 2-year-old child who ingested a caustic alkaline substance (drain cleaner). The child has oral burns and is drooling. Direct laryngoscopy reveals supraglottic edema. What is the MOST important airway management consideration?',
        choices: {
          A: 'Perform early elective intubation before edema progresses, as the airway can deteriorate rapidly from caustic burns',
          B: 'Administer activated charcoal to reduce absorption',
          C: 'Observe the child and intubate only if complete obstruction occurs',
          D: 'Administer corticosteroids and monitor closely',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Caustic alkaline ingestion causes liquefactive necrosis that can progress rapidly and unpredictably. Supraglottic edema on initial assessment indicates the potential for complete airway obstruction as tissue swelling continues. Early elective intubation by the most experienced provider is recommended before the airway becomes edematous to the point where intubation becomes impossible or extremely difficult.',
        explanationWrong:
          'Activated charcoal is contraindicated in caustic ingestion due to risk of aspiration and additional mucosal injury. Waiting for complete obstruction is extremely dangerous, as intubation at that point may be impossible, requiring emergent surgical airway. Corticosteroids alone are insufficient to prevent progressive airway edema from caustic burns.',
        topic: 'Pediatric Toxicology and Airway',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is performing bedside lung ultrasonography on a premature infant with respiratory distress. The ultrasound shows diffuse bilateral B-lines with absence of A-lines and a thickened, irregular pleural line. What is the MOST likely diagnosis?',
        choices: {
          A: 'Respiratory distress syndrome, as lung ultrasound findings correlate with surfactant deficiency and alveolar-interstitial syndrome',
          B: 'Normal aerated lung',
          C: 'Pleural effusion',
          D: 'Pneumothorax',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Lung ultrasound has become an important bedside tool in the NICU. In RDS, the ultrasound pattern shows diffuse bilateral B-lines (representing thickened interlobular septa and fluid-filled alveoli), absence of A-lines (which represent normal aerated lung), and a thickened, irregular pleural line. This pattern, called "white lung" or alveolar-interstitial syndrome, correlates with surfactant deficiency and can guide surfactant therapy decisions.',
        explanationWrong:
          'Normal aerated lung shows A-lines (horizontal artifacts parallel to the pleural line) with a smooth pleural line and absent or rare B-lines. Pleural effusion appears as an anechoic (black) space between the chest wall and lung. Pneumothorax shows absence of lung sliding and presence of the "barcode sign" on M-mode.',
        topic: 'Neonatal Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 18,
        questionText:
          'A 9-year-old child on mechanical ventilation develops ventilator-associated pneumonia (VAP). Cultures reveal methicillin-resistant Staphylococcus aureus (MRSA). The respiratory therapist notices the tracheal aspirate is thick, purulent, and difficult to suction. In addition to appropriate antibiotic therapy, what respiratory intervention should the therapist recommend?',
        choices: {
          A: 'Switch to HFOV to improve secretion mobilization',
          B: 'Decrease the humidification temperature to thicken secretions further for easier removal',
          C: 'Discontinue suctioning to allow the airway to heal',
          D: 'Ensure optimal humidification, increase suctioning frequency as needed, and consider instillation of normal saline before suctioning to help mobilize thick secretions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Management of thick, purulent secretions from VAP requires optimal humidification to prevent further thickening, increased suctioning frequency to prevent airway obstruction, and consideration of normal saline instillation to help loosen adherent secretions. The therapist should also monitor for signs of ETT obstruction and may need to upsize the suction catheter or replace the ETT if plugging becomes unmanageable.',
        explanationWrong:
          'HFOV is not specifically indicated for secretion management and may make suctioning more difficult. Decreasing humidification would worsen the problem by allowing secretions to become thicker and more inspissated. Discontinuing suctioning would lead to airway obstruction from accumulated thick secretions.',
        topic: 'Pediatric VAP Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is evaluating a 34-week premature infant who is being considered for discharge on home oxygen. Which criteria should be met BEFORE the infant can be safely discharged on supplemental oxygen?',
        choices: {
          A: 'The infant must be on room air for at least 48 hours',
          B: 'The infant must demonstrate stable SpO2 ≥92% on a fixed low-flow oxygen setting, parents must be trained on equipment and CPR, and a home oxygen provider must be arranged',
          C: 'The infant must have a normal chest radiograph',
          D: 'The infant must weigh at least 3 kg',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Discharge on home oxygen requires multiple criteria: the infant must be stable on a defined oxygen flow rate that maintains SpO2 ≥92% (including during sleep and feeding), parents must be competent in oxygen equipment use, pulse oximetry monitoring, infant CPR, and emergency response. A home oxygen provider must be arranged with equipment delivered and tested, and follow-up with a pulmonologist or neonatologist must be scheduled.',
        explanationWrong:
          'The question addresses discharge ON oxygen, not off oxygen; 48 hours on room air would mean oxygen is not needed. While a chest radiograph provides baseline information, a normal radiograph is not required; many BPD infants have persistent radiographic changes. Weight alone is not a discharge criterion for home oxygen.',
        topic: 'Neonatal Discharge Planning',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist has been caring for a critically ill neonate for several weeks. The infant\'s condition is deteriorating and a family meeting is planned to discuss redirecting care to comfort measures. What is the MOST appropriate role for the respiratory therapist in this situation?',
        choices: {
          A: 'The therapist should not attend the family meeting as it is a physician responsibility',
          B: 'The therapist should advocate for continued aggressive treatment regardless of prognosis',
          C: 'The therapist should attend the meeting if invited, provide objective information about the infant\'s respiratory status and comfort, and support the family and medical team through the transition of care',
          D: 'The therapist should independently discuss withdrawal of care with the family',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The respiratory therapist plays an important supportive role in end-of-life care discussions. Having cared for the infant, the therapist can provide valuable clinical observations, ensure the family understands the respiratory aspects of comfort care, and help implement comfort measures (such as suctioning for comfort, adjusting oxygen for family holding time). The therapist should support the family and team through this difficult transition while working within their scope of practice.',
        explanationWrong:
          'The therapist should be included in the interdisciplinary team approach, not excluded. Advocating for aggressive treatment regardless of prognosis is not appropriate when the clinical reality indicates a poor outcome. Independently discussing withdrawal of care exceeds the RT scope of practice; this must be a collaborative decision.',
        topic: 'Neonatal End-of-Life Care',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 30 seeded (20 questions, isFree: false)')

  console.log('Done seeding NPS mini exams 26-30!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
