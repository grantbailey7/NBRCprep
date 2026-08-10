import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 1-5...')

  // ─── EXAM 1 (isFree: true) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q13,Q17) B=5(Q4,Q7,Q10,Q15,Q18) C=5(Q1,Q6,Q12,Q16,Q20) D=5(Q3,Q8,Q11,Q14,Q19)
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 1',
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
          'A newborn delivered at 28 weeks gestation exhibits nasal flaring, grunting, and intercostal retractions within the first hour of life. Chest radiograph reveals a diffuse ground-glass appearance with air bronchograms. Which condition is the most likely diagnosis?',
        choices: {
          A: 'Meconium aspiration syndrome',
          B: 'Transient tachypnea of the newborn',
          C: 'Respiratory distress syndrome',
          D: 'Congenital diaphragmatic hernia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Respiratory distress syndrome (RDS) is caused by surfactant deficiency and is the most common cause of respiratory distress in premature infants. The classic radiographic findings include a diffuse reticulogranular (ground-glass) pattern with air bronchograms.',
        explanationWrong:
          'Meconium aspiration syndrome occurs in term or post-term infants and shows patchy infiltrates on chest radiograph. Transient tachypnea of the newborn presents with perihilar streaking and fluid in the fissures. Congenital diaphragmatic hernia shows bowel loops in the thorax.',
        topic: 'Respiratory Distress Syndrome',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          'A neonate born at 32 weeks gestation has been diagnosed with RDS. The respiratory therapist is preparing to administer exogenous surfactant. What is the recommended dose route for surfactant administration?',
        choices: {
          A: 'Intratracheal instillation via endotracheal tube',
          B: 'Aerosolized delivery via nebulizer',
          C: 'Intravenous infusion',
          D: 'Intramuscular injection',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Exogenous surfactant is administered via intratracheal instillation through an endotracheal tube. The surfactant is divided into aliquots and instilled directly into the lungs, with the infant repositioned between doses to promote distribution.',
        explanationWrong:
          'Aerosolized delivery of surfactant has been investigated but is not the standard method due to significant drug loss in the circuit. Surfactant is not effective when given intravenously or intramuscularly because it must coat the alveolar surface directly.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          'During high-frequency oscillatory ventilation (HFOV) of a neonate with severe RDS, the respiratory therapist notices a decreasing PaO2. Which ventilator parameter should be adjusted first to improve oxygenation?',
        choices: {
          A: 'Increase the frequency (Hz)',
          B: 'Decrease the amplitude (delta P)',
          C: 'Decrease the bias flow',
          D: 'Increase the mean airway pressure (MAP)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'On HFOV, oxygenation is primarily determined by the mean airway pressure (MAP) and FiO2. Increasing MAP recruits collapsed alveoli and improves oxygenation by increasing the functional residual capacity.',
        explanationWrong:
          'Increasing frequency reduces tidal volume and affects ventilation (CO2 removal), not oxygenation. Decreasing amplitude reduces tidal volume delivery, worsening ventilation. Decreasing bias flow does not directly improve oxygenation.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          'A term infant born through thick meconium-stained amniotic fluid is depressed at birth with poor respiratory effort. After initial steps of warming and clearing the airway, the infant remains apneic. What is the most appropriate next intervention?',
        choices: {
          A: 'Administer surfactant immediately',
          B: 'Initiate positive pressure ventilation',
          C: 'Begin chest compressions',
          D: 'Administer epinephrine intravenously',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to the Neonatal Resuscitation Program (NRP), if an infant remains apneic after initial steps, positive pressure ventilation (PPV) should be initiated within 60 seconds of birth. PPV is the most important and effective step in neonatal resuscitation.',
        explanationWrong:
          'Surfactant is not indicated as an immediate resuscitation step. Chest compressions are initiated only if the heart rate remains below 60 bpm after 30 seconds of effective PPV. Epinephrine is reserved for persistent bradycardia below 60 bpm despite effective ventilation and chest compressions.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          'A 3-day-old neonate on mechanical ventilation for RDS has an ABG showing pH 7.50, PaCO2 28 mmHg, PaO2 92 mmHg, and HCO3 22 mEq/L. Which ventilator adjustment is most appropriate?',
        choices: {
          A: 'Decrease the ventilator rate',
          B: 'Increase the PEEP',
          C: 'Increase the FiO2',
          D: 'Increase the inspiratory time',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ABG shows respiratory alkalosis (high pH, low PaCO2) indicating the infant is being over-ventilated. Decreasing the ventilator rate will reduce minute ventilation and allow PaCO2 to rise toward normal, correcting the alkalosis.',
        explanationWrong:
          'Increasing PEEP would primarily affect oxygenation, not CO2 removal. Increasing FiO2 is unnecessary because the PaO2 is adequate. Increasing inspiratory time would affect mean airway pressure and oxygenation but would not correct the alkalosis.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          'Which of the following findings on the Silverman-Anderson scoring system indicates the MOST severe respiratory distress in a neonate?',
        choices: {
          A: 'A total score of 0',
          B: 'A total score of 4',
          C: 'A total score of 10',
          D: 'A total score of 2',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The Silverman-Anderson score ranges from 0 to 10, with higher scores indicating more severe respiratory distress. A score of 10 represents maximum distress with marked retractions, xiphoid lag, nasal flaring, and expiratory grunting.',
        explanationWrong:
          'A score of 0 indicates no respiratory distress. A score of 2 indicates minimal distress. A score of 4 indicates mild to moderate distress. The Silverman-Anderson scale is the opposite of the Apgar score in that higher values indicate worse condition.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          'A premature infant at 26 weeks gestation is receiving mechanical ventilation with an FiO2 of 0.70 and PEEP of 6 cmH2O. The SpO2 target for this infant should be maintained in which range to minimize the risk of retinopathy of prematurity?',
        choices: {
          A: 'SpO2 96-100%',
          B: 'SpO2 88-95%',
          C: 'SpO2 80-85%',
          D: 'SpO2 75-80%',
        },
        correctChoice: 'B',
        explanationCorrect:
          'For premature infants, the recommended SpO2 target range is 88-95%. This range balances adequate oxygenation with minimizing the risk of oxygen toxicity, including retinopathy of prematurity (ROP) and bronchopulmonary dysplasia (BPD).',
        explanationWrong:
          'SpO2 of 96-100% increases the risk of oxygen toxicity, ROP, and BPD in premature infants. SpO2 ranges of 80-85% or 75-80% are too low and increase the risk of hypoxic injury, necrotizing enterocolitis, and mortality.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          'A neonate with persistent pulmonary hypertension of the newborn (PPHN) is not responding to conventional mechanical ventilation and 100% oxygen. Which therapy should be initiated next?',
        choices: {
          A: 'Administer exogenous surfactant',
          B: 'Begin high-frequency jet ventilation',
          C: 'Administer dexamethasone',
          D: 'Initiate inhaled nitric oxide (iNO)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Inhaled nitric oxide (iNO) is the first-line pulmonary vasodilator for PPHN. It selectively dilates pulmonary vasculature, reducing right-to-left shunting and improving oxygenation without causing systemic hypotension.',
        explanationWrong:
          'Surfactant may be used if RDS is a contributing factor but does not directly address the pulmonary hypertension. High-frequency jet ventilation may be considered but does not directly treat the underlying vascular pathology. Dexamethasone is not a first-line treatment for PPHN.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          'A newborn has an Apgar score of 3 at 1 minute of life. Which of the following components would contribute to this low score?',
        choices: {
          A: 'Heart rate below 100 bpm, blue extremities, weak cry, some flexion, and grimace response',
          B: 'Heart rate above 100 bpm, completely pink, strong cry, active motion, and vigorous cry to stimulation',
          C: 'Heart rate of 120 bpm, cyanotic trunk, absent respiratory effort, and limp tone',
          D: 'Heart rate absent, completely pink, strong cry, active motion, and cough to stimulation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An Apgar score of 3 is obtained by assigning partial scores: heart rate below 100 (1 point), blue extremities/acrocyanosis (1 point), weak cry (1 point), some flexion (0-1), and grimace only (0-1). This combination yields a score around 3, indicating a moderately depressed infant.',
        explanationWrong:
          'Option B describes a healthy infant with a near-perfect Apgar score of 9-10. Option C has inconsistencies since a heart rate of 120 would score 2 points. Option D is contradictory because an absent heart rate with a completely pink appearance and strong cry is not physiologically possible.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          'A 6-month-old infant presents with inspiratory stridor, barking cough, and mild suprasternal retractions. A steeple sign is noted on anteroposterior neck radiograph. Which condition is most consistent with these findings?',
        choices: {
          A: 'Epiglottitis',
          B: 'Viral croup (laryngotracheobronchitis)',
          C: 'Foreign body aspiration',
          D: 'Bacterial tracheitis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Viral croup (laryngotracheobronchitis) classically presents with inspiratory stridor, barking cough, and a steeple sign on AP neck radiograph, which indicates subglottic narrowing. It is the most common cause of upper airway obstruction in children aged 6 months to 3 years.',
        explanationWrong:
          'Epiglottitis presents with a thumb sign on lateral neck radiograph, drooling, and a toxic appearance. Foreign body aspiration typically presents with sudden onset of choking and unilateral wheezing. Bacterial tracheitis presents with high fever, purulent secretions, and does not typically show a steeple sign.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          'An infant born at 25 weeks gestation has been on mechanical ventilation for 4 weeks and continues to require supplemental oxygen. Chest radiograph shows cystic changes and hyperinflation. Which diagnosis is most appropriate?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Pneumonia',
          C: 'Meconium aspiration syndrome',
          D: 'Bronchopulmonary dysplasia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Bronchopulmonary dysplasia (BPD) is defined as the need for supplemental oxygen at 36 weeks postmenstrual age or after 28 days of life in a premature infant. Radiographic findings include cystic changes, hyperinflation, and fibrotic streaking, indicating chronic lung injury.',
        explanationWrong:
          'RDS presents in the first hours of life and does not cause cystic changes. Pneumonia would show focal consolidation. Meconium aspiration syndrome occurs at birth in term or post-term infants and presents with patchy infiltrates, not cystic changes after weeks of ventilation.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          'The neutral thermal environment for a premature neonate is best described as which of the following?',
        choices: {
          A: 'An environment where the infant can maintain body temperature without chemical thermogenesis',
          B: 'An environment where the infant can generate adequate brown fat metabolism',
          C: 'The temperature at which oxygen consumption is minimized and the infant maintains a normal core temperature',
          D: 'An environment maintained at exactly 37 degrees Celsius regardless of gestational age',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The neutral thermal environment (NTE) is defined as the range of environmental temperature at which oxygen consumption and metabolic rate are minimized while maintaining a normal core body temperature. This reduces caloric expenditure for thermoregulation.',
        explanationWrong:
          'While reducing chemical thermogenesis is related, the precise definition emphasizes minimized oxygen consumption. Brown fat metabolism is a compensatory mechanism, not a goal. The NTE is not a fixed temperature; it varies based on gestational age, postnatal age, and birth weight.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          'A neonate is diagnosed with congenital diaphragmatic hernia (CDH). Which of the following is an expected finding on physical examination?',
        choices: {
          A: 'Scaphoid (concave) abdomen and diminished breath sounds on the affected side',
          B: 'Distended abdomen with bilateral wheezing',
          C: 'Barrel chest with hyperresonance bilaterally',
          D: 'Normal breath sounds with cyanosis only during feeding',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In congenital diaphragmatic hernia, abdominal contents herniate into the thorax through the defective diaphragm. This results in a scaphoid abdomen (because organs have moved upward) and diminished or absent breath sounds on the affected side due to lung compression.',
        explanationWrong:
          'A distended abdomen would not be expected since the abdominal contents have shifted into the thorax. A barrel chest with bilateral hyperresonance suggests obstructive disease. Normal breath sounds with feeding-related cyanosis suggests a vascular ring or TEF rather than CDH.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          'In a neonate with tracheoesophageal fistula (TEF), which finding is most characteristic during the initial assessment?',
        choices: {
          A: 'Projectile vomiting after feeding',
          B: 'Progressive abdominal distension only',
          C: 'Inspiratory stridor at rest',
          D: 'Excessive drooling and choking with the first feeding, inability to pass an orogastric tube',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The most common type of TEF (Type C) involves esophageal atresia with a distal tracheoesophageal fistula. The blind esophageal pouch causes excessive drooling, and the infant chokes and coughs with the first feeding attempt. An orogastric tube cannot be advanced past the atresia.',
        explanationWrong:
          'Projectile vomiting is characteristic of pyloric stenosis. Progressive abdominal distension alone is not the primary finding. Inspiratory stridor suggests an upper airway obstruction such as laryngomalacia, not TEF.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          'Which medication is commonly administered to maintain ductal patency in a neonate with a ductal-dependent congenital heart defect?',
        choices: {
          A: 'Indomethacin',
          B: 'Prostaglandin E1 (alprostadil)',
          C: 'Furosemide',
          D: 'Methylxanthine',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Prostaglandin E1 (alprostadil) is administered as a continuous intravenous infusion to maintain patency of the ductus arteriosus in neonates with ductal-dependent congenital heart defects, ensuring adequate pulmonary or systemic blood flow until surgical repair.',
        explanationWrong:
          'Indomethacin is used to close a patent ductus arteriosus, the opposite effect. Furosemide is a diuretic used for fluid management. Methylxanthines (caffeine, aminophylline) are used to treat apnea of prematurity.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          'A premature neonate at 30 weeks gestation has recurrent apneic episodes. The respiratory therapist should recommend initiating which medication?',
        choices: {
          A: 'Dexamethasone',
          B: 'Inhaled nitric oxide',
          C: 'Caffeine citrate',
          D: 'Racemic epinephrine',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Caffeine citrate is the first-line pharmacologic treatment for apnea of prematurity. It stimulates the central respiratory drive and has been shown to reduce the frequency of apneic episodes and the need for mechanical ventilation in premature infants.',
        explanationWrong:
          'Dexamethasone is a corticosteroid used for inflammation, not apnea. Inhaled nitric oxide is used for PPHN. Racemic epinephrine is used for upper airway edema such as croup, not central apnea.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          'When performing endotracheal intubation on a neonate, which anatomical difference compared to an adult must the respiratory therapist consider?',
        choices: {
          A: 'The larynx is more anterior and cephalad, and the narrowest point of the airway is at the cricoid cartilage',
          B: 'The larynx is more posterior and the epiglottis is shorter',
          C: 'The trachea is longer relative to body size than in an adult',
          D: 'The vocal cords are the narrowest point of the airway',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In neonates and infants, the larynx is positioned more anteriorly and cephalad (at approximately C3-C4 versus C4-C6 in adults). The narrowest point of the neonatal airway is at the cricoid cartilage, not the vocal cords, which is why uncuffed endotracheal tubes are traditionally used.',
        explanationWrong:
          'The neonatal larynx is more anterior, not posterior, and the epiglottis is omega-shaped and floppy, not shorter. The trachea is shorter relative to body size, making right mainstem intubation a common risk. In adults, the vocal cords are the narrowest point; in neonates, it is the cricoid.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          'A neonate is being ventilated with high-frequency jet ventilation (HFJV). The PaCO2 is 65 mmHg. Which parameter should be adjusted to reduce PaCO2?',
        choices: {
          A: 'Decrease the jet rate',
          B: 'Increase the PIP (driving pressure)',
          C: 'Decrease the FiO2',
          D: 'Decrease the PEEP',
        },
        correctChoice: 'B',
        explanationCorrect:
          'On HFJV, CO2 elimination is improved by increasing the PIP (driving pressure), which increases the tidal volume delivered with each jet pulse. This is the primary adjustment for ventilation (CO2 removal) on HFJV.',
        explanationWrong:
          'Decreasing the jet rate on HFJV would reduce minute ventilation and potentially increase PaCO2 further. Decreasing FiO2 affects oxygenation, not ventilation. Decreasing PEEP would reduce mean airway pressure and could worsen oxygenation without significantly improving CO2 removal.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          'A newborn presents with bilateral choanal atresia. Which of the following is the most appropriate immediate intervention?',
        choices: {
          A: 'Nasal trumpet placement',
          B: 'Nasal CPAP at 5 cmH2O',
          C: 'Nasotracheal intubation',
          D: 'Placement of an oral airway',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Neonates are obligate nasal breathers. In bilateral choanal atresia, both nasal passages are blocked. An oral airway (or a McGovern nipple) provides an immediate bypass for air entry through the mouth, stabilizing the infant until surgical correction.',
        explanationWrong:
          'A nasal trumpet cannot be placed through an obstructed nasal passage. Nasal CPAP would be ineffective since the nasal passages are blocked. Nasotracheal intubation is impossible with choanal atresia; orotracheal intubation would be needed if an oral airway were insufficient.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          'Which strategy is most effective in preventing bronchopulmonary dysplasia (BPD) in extremely low birth weight infants?',
        choices: {
          A: 'Aggressive fluid administration in the first week of life',
          B: 'Routine use of high-dose systemic corticosteroids',
          C: 'Permissive hypercapnia with gentle ventilation and minimizing oxygen exposure',
          D: 'Early tracheostomy for prolonged ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Permissive hypercapnia (accepting PaCO2 of 45-55 mmHg) combined with gentle ventilation strategies (lower tidal volumes, lower pressures) and minimizing oxygen exposure reduces volutrauma, barotrauma, and oxygen toxicity, all of which contribute to BPD development.',
        explanationWrong:
          'Aggressive fluid administration increases the risk of PDA and pulmonary edema, contributing to BPD. High-dose systemic corticosteroids have significant side effects including neurodevelopmental impairment. Early tracheostomy is not a standard preventive strategy for BPD.',
        topic: 'Bronchopulmonary Dysplasia',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 1 seeded (20 questions, isFree: true)')

  // ─── EXAM 2 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q6,Q10,Q14,Q18) B=5(Q1,Q5,Q9,Q13,Q17) C=5(Q4,Q8,Q11,Q15,Q20) D=5(Q2,Q7,Q12,Q16,Q19)
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 2',
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
          'A premature neonate born at 27 weeks gestation develops worsening respiratory distress 48 hours after surfactant administration. The chest radiograph shows bilateral hazy opacification. Which of the following is the most appropriate next step?',
        choices: {
          A: 'Discontinue mechanical ventilation and switch to nasal cannula',
          B: 'Administer a repeat dose of surfactant',
          C: 'Initiate inhaled nitric oxide therapy',
          D: 'Perform emergent thoracotomy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Repeat dosing of surfactant is appropriate when a premature infant with RDS deteriorates after initial surfactant therapy. Guidelines support redosing if the infant continues to require significant ventilatory support, typically up to 2-3 additional doses at 6-12 hour intervals.',
        explanationWrong:
          'Discontinuing mechanical ventilation would be inappropriate given worsening distress. Inhaled nitric oxide is indicated for PPHN, not recurrent RDS. Emergent thoracotomy is not indicated for this presentation.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          'During the assessment of a newborn using the New Ballard Score, the examiner notes the infant has no lanugo, creased over the entire sole, thick cartilage with instant ear recoil, and palpable breast tissue of 5-10 mm. This infant is most likely at which gestational age?',
        choices: {
          A: 'Less than 28 weeks',
          B: 'Between 30-32 weeks',
          C: 'Between 33-35 weeks',
          D: 'Between 38-40 weeks',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The described physical maturity findings (absent lanugo, fully creased soles, firm ear cartilage with instant recoil, and palpable breast tissue of 5-10 mm) are consistent with a term infant at 38-40 weeks gestation on the New Ballard Score.',
        explanationWrong:
          'Infants less than 28 weeks have abundant lanugo, smooth soles, flat ear pinnae, and barely perceptible breast tissue. Infants at 30-32 weeks have thinning lanugo and anterior transverse sole creases only. Infants at 33-35 weeks have some lanugo remaining and partial sole creases.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          'A neonate on HFOV has a PaCO2 of 32 mmHg. To correct this respiratory alkalosis, the respiratory therapist should make which adjustment?',
        choices: {
          A: 'Decrease the amplitude (delta P)',
          B: 'Increase the amplitude (delta P)',
          C: 'Decrease the mean airway pressure',
          D: 'Increase the FiO2',
        },
        correctChoice: 'A',
        explanationCorrect:
          'On HFOV, CO2 elimination is primarily determined by the amplitude (delta P) and frequency. A low PaCO2 indicates excessive ventilation. Decreasing the amplitude reduces tidal volume, thereby decreasing CO2 removal and allowing the PaCO2 to rise toward normal.',
        explanationWrong:
          'Increasing the amplitude would further reduce PaCO2, worsening the alkalosis. Decreasing the mean airway pressure primarily affects oxygenation. Increasing FiO2 affects oxygenation, not ventilation.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          'A 2-year-old child with a history of prematurity presents with recurrent wheezing episodes and requires supplemental oxygen at home. The child was ventilated for 8 weeks after birth. Which condition is the most likely underlying diagnosis?',
        choices: {
          A: 'Cystic fibrosis',
          B: 'Asthma',
          C: 'Bronchopulmonary dysplasia',
          D: 'Primary ciliary dyskinesia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bronchopulmonary dysplasia (BPD) is a chronic lung disease that results from prolonged mechanical ventilation and oxygen exposure in premature infants. Children with BPD often have persistent respiratory symptoms, recurrent wheezing, and may require supplemental oxygen well into childhood.',
        explanationWrong:
          'Cystic fibrosis presents with recurrent infections and failure to thrive but is not directly related to prematurity or ventilator use. Asthma is possible but the history of prematurity and prolonged ventilation makes BPD more likely. Primary ciliary dyskinesia causes chronic sinopulmonary disease but is genetic and unrelated to prematurity.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          'Which of the following maternal interventions has been shown to accelerate fetal lung maturity when preterm delivery is anticipated?',
        choices: {
          A: 'Administration of magnesium sulfate',
          B: 'Administration of antenatal corticosteroids (betamethasone)',
          C: 'Intravenous fluid bolus of normal saline',
          D: 'Immediate cesarean section delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Antenatal corticosteroids (betamethasone or dexamethasone) administered to the mother 24-48 hours before anticipated preterm delivery accelerate fetal lung maturity by stimulating surfactant production and reducing the incidence and severity of RDS.',
        explanationWrong:
          'Magnesium sulfate is given for neuroprotection of the preterm fetus and to prevent eclampsia, but it does not accelerate lung maturity. IV fluid bolus has no effect on fetal lung development. Immediate cesarean delivery does not promote lung maturity and may not allow time for corticosteroid benefit.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          'A newborn with meconium aspiration syndrome develops severe hypoxemia despite maximal ventilatory support. Pre-ductal SpO2 is 85% while post-ductal SpO2 is 70%. What does this difference indicate?',
        choices: {
          A: 'Right-to-left shunting through the ductus arteriosus consistent with PPHN',
          B: 'Left-to-right shunting through a patent foramen ovale',
          C: 'Inaccurate pulse oximetry due to poor perfusion',
          D: 'Normal transitional circulation in a term newborn',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A pre-ductal SpO2 significantly higher than post-ductal SpO2 (difference greater than 5-10%) indicates right-to-left shunting through the patent ductus arteriosus, which is the hallmark finding of persistent pulmonary hypertension of the newborn (PPHN).',
        explanationWrong:
          'A left-to-right shunt through the PFO would not cause a pre-ductal to post-ductal SpO2 gradient. While poor perfusion can affect pulse oximetry accuracy, the consistent differential between sites is diagnostic. Normal transitional circulation resolves within hours and does not produce this degree of differential.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          'A 4-week-old former 26-week premature infant requires a PIP of 22 cmH2O, PEEP of 5 cmH2O, rate of 30, and FiO2 of 0.45 to maintain adequate gas exchange. The respiratory therapist is concerned about ventilator-induced lung injury. Which ventilation strategy would best minimize lung injury?',
        choices: {
          A: 'Increase PIP to 28 cmH2O to improve tidal volume delivery',
          B: 'Switch to pressure-support ventilation with high tidal volume targets',
          C: 'Increase the rate to 60 and increase the FiO2 to 0.80',
          D: 'Use volume-targeted ventilation with a tidal volume of 4-6 mL/kg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Volume-targeted ventilation with a tidal volume goal of 4-6 mL/kg has been shown to reduce the incidence of BPD and lung injury in premature infants. This strategy automatically adjusts PIP to deliver consistent tidal volumes, avoiding volutrauma from excessive volumes.',
        explanationWrong:
          'Increasing PIP increases the risk of barotrauma and volutrauma. Pressure-support with high tidal volumes increases the risk of volutrauma. Increasing rate and FiO2 simultaneously would worsen both oxygen toxicity and air trapping without addressing the underlying injury risk.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          'A neonate born at 36 weeks gestation develops respiratory distress 2 hours after cesarean section delivery. The chest radiograph shows perihilar streaking and fluid in the minor fissure. The infant improves rapidly over 24 hours. Which diagnosis is most likely?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Pneumonia',
          C: 'Transient tachypnea of the newborn',
          D: 'Pulmonary hemorrhage',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Transient tachypnea of the newborn (TTN) is caused by delayed clearance of fetal lung fluid and is most common after cesarean delivery. Classic radiographic findings include perihilar streaking, fluid in the fissures, and the condition typically resolves within 24-72 hours.',
        explanationWrong:
          'RDS is uncommon at 36 weeks and shows a ground-glass pattern, not perihilar streaking. Pneumonia would not resolve this quickly and shows focal consolidation. Pulmonary hemorrhage presents with bloody secretions from the ETT, not the described radiographic pattern.',
        topic: 'Respiratory Distress Syndrome',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          'A neonate with suspected PPHN is receiving inhaled nitric oxide at 20 ppm. The respiratory therapist must monitor for which potential adverse effect?',
        choices: {
          A: 'Hyperglycemia',
          B: 'Methemoglobinemia',
          C: 'Hyperkalemia',
          D: 'Pulmonary hemorrhage',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Methemoglobinemia is a known adverse effect of inhaled nitric oxide therapy. NO binds to hemoglobin forming methemoglobin, which cannot carry oxygen. Methemoglobin levels should be monitored regularly and maintained below 5%.',
        explanationWrong:
          'Hyperglycemia is not associated with iNO therapy. Hyperkalemia is not a known side effect of iNO. While pulmonary hemorrhage can occur in neonates, it is not a specific adverse effect of inhaled nitric oxide therapy.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          'A premature infant on CPAP of 6 cmH2O develops abdominal distension and feeding intolerance. Abdominal radiograph shows pneumatosis intestinalis. Which condition should be suspected?',
        choices: {
          A: 'Necrotizing enterocolitis',
          B: 'Meconium plug syndrome',
          C: 'Gastroesophageal reflux',
          D: 'Pyloric stenosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Necrotizing enterocolitis (NEC) is a serious gastrointestinal emergency in premature infants. The hallmark radiographic finding is pneumatosis intestinalis (intramural gas), and clinical findings include abdominal distension, feeding intolerance, and bloody stools.',
        explanationWrong:
          'Meconium plug syndrome causes distal colonic obstruction but does not show pneumatosis intestinalis. Gastroesophageal reflux does not cause pneumatosis intestinalis. Pyloric stenosis presents with projectile vomiting and an olive-shaped mass in the epigastrium, without pneumatosis.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          'A neonate with congenital diaphragmatic hernia is being prepared for surgery. Which ventilation strategy is recommended preoperatively?',
        choices: {
          A: 'High tidal volume ventilation to recruit the hypoplastic lung',
          B: 'Bag-mask ventilation with high pressures to expand the stomach',
          C: 'Gentle ventilation with permissive hypercapnia and avoidance of high airway pressures',
          D: 'Immediate initiation of HFOV at maximum amplitude',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In CDH, the ipsilateral lung is hypoplastic and susceptible to barotrauma. Gentle ventilation with permissive hypercapnia (accepting PaCO2 of 50-65 mmHg) and keeping PIP below 25 cmH2O reduces the risk of pneumothorax and further lung injury.',
        explanationWrong:
          'High tidal volume ventilation risks pneumothorax in the hypoplastic lung. Bag-mask ventilation should be avoided because it distends the intrathoracic stomach and bowel, further compressing the lung. HFOV at maximum amplitude is excessive and not the initial approach.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          'Which mechanism of heat loss is most significant in the delivery room for a wet newborn placed on an unwarmed surface?',
        choices: {
          A: 'Radiation',
          B: 'Convection',
          C: 'Evaporation from wet skin is significant but not the primary mechanism in this scenario',
          D: 'Conduction',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Conduction is the transfer of heat from the infant to the cooler surface it is in direct contact with. A wet newborn placed on an unwarmed surface loses heat rapidly through conduction. This is why radiant warmers with pre-warmed blankets are used during resuscitation.',
        explanationWrong:
          'Radiation involves heat loss to cooler surrounding surfaces without direct contact. Convection involves heat loss to air currents. While evaporation is significant for a wet newborn, the question specifically asks about placement on an unwarmed surface, making conduction the primary mechanism.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          'A 3-year-old child is intubated with a 4.5 mm uncuffed endotracheal tube. The respiratory therapist notes a significant air leak around the tube during positive pressure ventilation, with no audible leak below 10 cmH2O. Which action is most appropriate?',
        choices: {
          A: 'Advance the ETT 1 cm deeper',
          B: 'Replace the ETT with a 5.0 mm cuffed endotracheal tube',
          C: 'Add PEEP to compensate for the leak',
          D: 'Pack the pharynx with gauze to reduce the leak',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When a significant air leak exists with an uncuffed ETT, the tube should be replaced with the next half-size up or an appropriately sized cuffed tube. Current guidelines support the use of cuffed ETTs in pediatric patients when cuff pressure is carefully monitored below 20-25 cmH2O.',
        explanationWrong:
          'Advancing the ETT deeper does not address the leak at the glottic level and risks right mainstem intubation. Adding PEEP does not effectively compensate for a large glottic leak. Packing the pharynx is not a standard practice and poses aspiration risk.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          'A newborn with meconium aspiration syndrome has patchy bilateral infiltrates on chest radiograph and a pneumothorax on the right side. Which complication of meconium aspiration is responsible for the pneumothorax?',
        choices: {
          A: 'Ball-valve airway obstruction leading to air trapping and alveolar rupture',
          B: 'Chemical pneumonitis causing alveolar destruction',
          C: 'Surfactant inactivation leading to atelectasis',
          D: 'Pulmonary hemorrhage from meconium toxicity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Meconium creates a ball-valve obstruction in the airways, allowing air entry during inspiration but trapping air during expiration. This leads to progressive hyperinflation, alveolar overdistension, and eventually alveolar rupture, resulting in pneumothorax or pneumomediastinum.',
        explanationWrong:
          'Chemical pneumonitis contributes to inflammation but is not the direct mechanism of pneumothorax. Surfactant inactivation leads to atelectasis, not air trapping. Pulmonary hemorrhage can occur in severe meconium aspiration but does not cause pneumothorax.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          'A neonate on mechanical ventilation has an endotracheal tube with an internal diameter of 3.0 mm. Based on this tube size, the infant is most likely which weight?',
        choices: {
          A: 'Greater than 3.5 kg',
          B: 'Between 2.5 and 3.5 kg',
          C: 'Between 1 and 2 kg',
          D: 'Less than 1 kg',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A 3.0 mm internal diameter ETT is recommended for neonates weighing between 1 and 2 kg. The standard neonatal ETT sizing guide recommends 2.5 mm for < 1 kg, 3.0 mm for 1-2 kg, 3.5 mm for 2-3 kg, and 3.5-4.0 mm for > 3 kg.',
        explanationWrong:
          'Infants greater than 3.5 kg would use a 3.5-4.0 mm ETT. Infants between 2.5 and 3.5 kg would use a 3.5 mm ETT. Infants less than 1 kg would use a 2.5 mm ETT.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          'Which of the following is a known risk factor for developing persistent pulmonary hypertension of the newborn (PPHN)?',
        choices: {
          A: 'Maternal diabetes mellitus only',
          B: 'Premature birth at 28 weeks gestation',
          C: 'Vaginal delivery at term without complications',
          D: 'Maternal use of NSAIDs or SSRIs during the third trimester',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Maternal use of nonsteroidal anti-inflammatory drugs (NSAIDs) and selective serotonin reuptake inhibitors (SSRIs) during the third trimester has been associated with an increased risk of PPHN. NSAIDs can cause premature closure of the ductus arteriosus, contributing to pulmonary hypertension.',
        explanationWrong:
          'While maternal diabetes can contribute to various neonatal complications, it alone is not the strongest risk factor for PPHN. PPHN is more common in term and post-term infants, not premature infants at 28 weeks. Uncomplicated vaginal delivery at term is not a risk factor.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          'A preterm infant born at 29 weeks gestation is placed on nasal CPAP at 5 cmH2O immediately after delivery room stabilization. This approach is an example of which strategy?',
        choices: {
          A: 'Rescue surfactant therapy',
          B: 'Early non-invasive respiratory support to avoid intubation',
          C: 'Prophylactic surfactant administration',
          D: 'Therapeutic hypothermia protocol',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Early application of nasal CPAP in the delivery room for preterm infants is a strategy to provide non-invasive respiratory support and avoid intubation and mechanical ventilation. Studies have shown this approach reduces the incidence of BPD and the need for surfactant therapy.',
        explanationWrong:
          'Rescue surfactant requires intubation and is administered after RDS develops. Prophylactic surfactant involves intubation at birth before RDS symptoms appear. Therapeutic hypothermia is used for hypoxic-ischemic encephalopathy in term infants, not respiratory management of preterm infants.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          'Which of the following is the primary physiologic mechanism by which cold stress in a neonate leads to worsened respiratory distress?',
        choices: {
          A: 'Cold stress increases oxygen consumption and metabolic rate, leading to hypoxemia and metabolic acidosis',
          B: 'Cold stress directly inhibits surfactant production in the alveoli',
          C: 'Cold stress causes bronchospasm similar to exercise-induced asthma',
          D: 'Cold stress promotes pulmonary vasoconstriction through catecholamine release only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Cold stress triggers non-shivering thermogenesis (brown fat metabolism) which significantly increases oxygen consumption and metabolic rate. This leads to hypoxemia, metabolic acidosis, and increased work of breathing, worsening any existing respiratory distress.',
        explanationWrong:
          'Cold stress does not directly inhibit surfactant production, though it can impair surfactant function indirectly through acidosis. Neonates do not develop bronchospasm from cold stress. While catecholamine release does occur, the primary mechanism of worsened respiratory distress is increased oxygen consumption.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          'A neonatal respiratory therapist is calculating the appropriate endotracheal tube insertion depth for a 1.5 kg infant. Using the NRP guidelines, what is the recommended insertion depth at the lip?',
        choices: {
          A: 'Tip-to-lip distance of 10 cm',
          B: 'Tip-to-lip distance of 6 cm',
          C: 'Tip-to-lip distance of 9 cm',
          D: 'Tip-to-lip distance of 7.5 cm using the formula: weight in kg + 6',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The NRP guideline for ETT insertion depth at the lip uses the formula: weight in kilograms + 6 cm. For a 1.5 kg infant: 1.5 + 6 = 7.5 cm at the lip. This formula provides a reliable estimate for proper tube positioning above the carina.',
        explanationWrong:
          'A depth of 10 cm is far too deep for a 1.5 kg infant and would result in right mainstem bronchus intubation. A depth of 6 cm would likely be too shallow, with the tip above the vocal cords. A depth of 9 cm would also be too deep for this size infant.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          'A full-term neonate born by emergency cesarean section for fetal distress has thick meconium below the vocal cords. The infant is vigorous with a heart rate of 130 bpm and is crying. According to current NRP guidelines, what is the recommended management?',
        choices: {
          A: 'Immediate intubation and tracheal suctioning',
          B: 'Deep pharyngeal suctioning before the first breath',
          C: 'Provide routine care: warm, dry, clear the airway as needed, and stimulate',
          D: 'Administer surfactant prophylactically',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current NRP guidelines recommend that vigorous infants born through meconium-stained fluid (with good respiratory effort, muscle tone, and heart rate > 100 bpm) should receive routine care. Routine intubation and tracheal suctioning are no longer recommended for vigorous infants.',
        explanationWrong:
          'Immediate intubation and tracheal suctioning are no longer recommended for vigorous infants per updated NRP guidelines. Deep pharyngeal suctioning before the first breath is no longer a recommended routine practice. Prophylactic surfactant is not indicated in this scenario.',
        topic: 'Meconium Aspiration Syndrome',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 2 seeded (20 questions, isFree: false)')

  // ─── EXAM 3 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q10,Q13,Q17) B=5(Q2,Q6,Q11,Q14,Q18) C=5(Q3,Q8,Q12,Q16,Q19) D=5(Q1,Q5,Q9,Q15,Q20)
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 3',
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
          'A neonate born at 34 weeks gestation develops respiratory distress 30 minutes after birth. The chest radiograph shows a small amount of pleural fluid and prominent pulmonary vascular markings. The infant improves significantly within 48 hours. Which diagnosis best fits this presentation?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Bacterial pneumonia',
          C: 'Meconium aspiration syndrome',
          D: 'Transient tachypnea of the newborn',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Transient tachypnea of the newborn (TTN) results from delayed resorption of fetal lung fluid. It is more common in late preterm and term infants, especially after cesarean delivery. The radiographic findings of pleural fluid, prominent vascular markings, and rapid clinical improvement within 24-72 hours are characteristic.',
        explanationWrong:
          'RDS presents with a ground-glass pattern and air bronchograms, not prominent vascular markings. Bacterial pneumonia presents with focal consolidation and does not resolve in 48 hours without antibiotics. Meconium aspiration occurs in term or post-term infants with meconium-stained fluid and shows patchy infiltrates.',
        topic: 'Respiratory Distress Syndrome',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          'A premature neonate is receiving HFOV with the following settings: MAP 14 cmH2O, amplitude 30, frequency 10 Hz, FiO2 0.60. The PaCO2 returns at 55 mmHg and PaO2 at 50 mmHg. Which combination of changes would be most appropriate?',
        choices: {
          A: 'Increase MAP and decrease frequency',
          B: 'Increase amplitude and increase MAP',
          C: 'Decrease amplitude and increase FiO2',
          D: 'Decrease MAP and increase amplitude',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The infant has both hypercapnia (PaCO2 55) and hypoxemia (PaO2 50). On HFOV, increasing amplitude improves CO2 removal by increasing tidal volume, and increasing MAP improves oxygenation by recruiting alveoli. This combination addresses both problems simultaneously.',
        explanationWrong:
          'Increasing MAP and decreasing frequency would improve oxygenation but decreasing frequency actually reduces CO2 removal on HFOV. Decreasing amplitude would worsen hypercapnia. Decreasing MAP would worsen hypoxemia.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          'A premature infant born at 24 weeks gestation is now 10 days old and requires FiO2 of 0.50, PIP of 20 cmH2O, and PEEP of 5 cmH2O. The chest radiograph shows early cystic changes. Which intervention has the best evidence for reducing the severity of developing BPD?',
        choices: {
          A: 'High-dose parenteral dexamethasone starting on day 1',
          B: 'Prophylactic antifungal therapy',
          C: 'Vitamin A supplementation',
          D: 'Immediate extubation to room air',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Vitamin A supplementation has been shown to reduce the incidence and severity of BPD in extremely low birth weight infants. Vitamin A is essential for normal lung development and repair of damaged epithelial cells. Intramuscular administration is supported by clinical evidence.',
        explanationWrong:
          'High-dose dexamethasone on day 1 is associated with neurodevelopmental impairment and is not recommended. Prophylactic antifungal therapy addresses fungal infection risk, not BPD. Immediate extubation to room air would be unsafe given the current ventilatory requirements.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          'During neonatal resuscitation, a newborn has a heart rate of 50 bpm after 30 seconds of effective positive pressure ventilation. What is the next appropriate action?',
        choices: {
          A: 'Begin chest compressions coordinated with PPV at a ratio of 3:1',
          B: 'Administer epinephrine via the umbilical vein',
          C: 'Increase the FiO2 to 1.0 and continue PPV alone',
          D: 'Stop ventilation and begin only chest compressions',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Per NRP guidelines, if the heart rate remains below 60 bpm after 30 seconds of effective positive pressure ventilation, chest compressions should be initiated at a compression-to-ventilation ratio of 3:1 (3 compressions followed by 1 ventilation) coordinated with continued PPV.',
        explanationWrong:
          'Epinephrine is considered only if the heart rate remains below 60 bpm after adequate ventilation and chest compressions. Continuing PPV alone without compressions is inappropriate when the heart rate is below 60. Chest compressions without ventilation would be ineffective in neonates where the primary problem is usually respiratory.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          'A premature infant weighing 800 grams is placed in an isolette. The respiratory therapist notes the incubator temperature is set to maintain skin temperature at 36.5°C. What is the primary reason for using servo-controlled temperature in this infant?',
        choices: {
          A: 'To prevent hypothermia only during bathing procedures',
          B: 'To increase the infant\'s metabolic rate for weight gain',
          C: 'To provide an environment warm enough to trigger sweating',
          D: 'To minimize oxygen consumption and caloric expenditure by maintaining a neutral thermal environment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Servo-controlled isolettes maintain the neutral thermal environment by continuously adjusting incubator temperature to keep the infant\'s skin temperature at a set point (typically 36.0-36.5°C). This minimizes oxygen consumption and caloric expenditure required for thermoregulation.',
        explanationWrong:
          'The purpose extends far beyond bathing procedures; it provides continuous thermoregulation. Increasing metabolic rate would increase caloric expenditure, the opposite of the goal. Sweating indicates thermal stress and is to be avoided, not induced.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          'A newborn at 42 weeks gestation passes thick meconium prior to delivery. After birth, the infant has depressed tone, minimal respiratory effort, and a heart rate of 80 bpm. What is the most appropriate first action after clamping and cutting the cord?',
        choices: {
          A: 'Administer naloxone to reverse potential opioid depression',
          B: 'Place the infant under a radiant warmer, position the airway, suction the mouth and nose, dry and stimulate',
          C: 'Begin chest compressions immediately',
          D: 'Place the infant skin-to-skin on the mother for warmth',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Per NRP guidelines, the initial steps for a depressed newborn are: place under a radiant warmer, position the head in a sniffing position, clear the airway (suction mouth then nose), dry thoroughly, and stimulate. These steps should be completed within the first 30 seconds (the Golden Minute).',
        explanationWrong:
          'Naloxone is no longer recommended as a routine part of neonatal resuscitation. Chest compressions are only begun after 30 seconds of effective PPV if the heart rate remains below 60 bpm. Skin-to-skin contact is appropriate for vigorous newborns, not depressed ones requiring resuscitation.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          'Which surfactant preparation is derived from animal sources and is classified as a natural surfactant?',
        choices: {
          A: 'Beractant (Survanta)',
          B: 'Colfosceril palmitate (Exosurf)',
          C: 'Lucinactant (Surfaxin)',
          D: 'Pumactant (ALEC)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Beractant (Survanta) is a natural surfactant derived from bovine (cow) lung extract. It contains phospholipids, neutral lipids, fatty acids, and surfactant-associated proteins SP-B and SP-C. Natural surfactants have been shown to be more effective than synthetic surfactants in clinical outcomes.',
        explanationWrong:
          'Colfosceril palmitate (Exosurf) is a first-generation synthetic surfactant that lacks surfactant proteins. Lucinactant (Surfaxin) is a newer synthetic surfactant containing a peptide analog (sinapultide). Pumactant (ALEC) is a synthetic surfactant that has been withdrawn from use.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          'A term neonate with severe PPHN is receiving inhaled nitric oxide at 20 ppm with no improvement in oxygenation after 30 minutes. The oxygenation index (OI) remains above 40. What is the next escalation of therapy?',
        choices: {
          A: 'Increase iNO to 80 ppm',
          B: 'Administer sildenafil orally',
          C: 'Consider extracorporeal membrane oxygenation (ECMO)',
          D: 'Switch to high-dose IV prostacyclin',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An oxygenation index (OI) consistently above 40 despite maximal medical therapy including iNO is a strong indication for ECMO. ECMO provides temporary cardiopulmonary support allowing the lungs to recover from severe PPHN when all other therapies have failed.',
        explanationWrong:
          'Increasing iNO above 20 ppm does not provide additional benefit and increases the risk of methemoglobinemia and nitrogen dioxide toxicity. Oral sildenafil may be adjunctive but is not the standard next step for refractory PPHN with an OI above 40. IV prostacyclin is not the standard escalation pathway.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          'A premature infant born at 26 weeks gestation is now 36 weeks corrected gestational age and continues to require FiO2 of 0.30 via nasal cannula. According to the NIH consensus definition, how would this infant\'s BPD be classified?',
        choices: {
          A: 'No BPD',
          B: 'Mild BPD',
          C: 'Severe BPD',
          D: 'Moderate BPD',
        },
        correctChoice: 'D',
        explanationCorrect:
          'According to the NIH consensus definition, moderate BPD is defined as the need for supplemental oxygen for at least 28 days plus the need for less than 30% oxygen at 36 weeks postmenstrual age. This infant meets both criteria with FiO2 of 0.30 at 36 weeks corrected age.',
        explanationWrong:
          'No BPD would mean no oxygen requirement at 36 weeks. Mild BPD is defined as needing oxygen for 28 days but breathing room air at 36 weeks. Severe BPD requires FiO2 of 0.30 or greater, or positive pressure support at 36 weeks postmenstrual age.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          'A neonate with a left-sided congenital diaphragmatic hernia has been stabilized and intubated. Which of the following findings would the respiratory therapist expect on physical examination?',
        choices: {
          A: 'Heart sounds displaced to the right, absent breath sounds on the left, and a scaphoid abdomen',
          B: 'Heart sounds in the normal position with bilateral crackles',
          C: 'Barrel-shaped chest with bilateral hyperresonance',
          D: 'Normal breath sounds bilaterally with a distended abdomen',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In a left-sided CDH (the most common type), abdominal organs herniate into the left thorax, pushing the mediastinum and heart to the right. This causes absent or diminished breath sounds on the left, heart sounds displaced to the right, and a scaphoid abdomen.',
        explanationWrong:
          'Heart sounds would not be in the normal position due to mediastinal shift. A barrel-shaped chest with bilateral hyperresonance suggests air trapping. Normal breath sounds bilaterally is incompatible with CDH where the lung is compressed by herniated abdominal contents.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          'Which drug is used to close a hemodynamically significant patent ductus arteriosus (PDA) in a premature infant?',
        choices: {
          A: 'Prostaglandin E1',
          B: 'Indomethacin or ibuprofen',
          C: 'Sildenafil',
          D: 'Milrinone',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Indomethacin and ibuprofen are cyclooxygenase inhibitors that promote closure of the patent ductus arteriosus by blocking prostaglandin synthesis. They are the first-line pharmacologic treatment for hemodynamically significant PDA in premature infants.',
        explanationWrong:
          'Prostaglandin E1 maintains ductal patency and would worsen the condition. Sildenafil is a phosphodiesterase-5 inhibitor used for pulmonary hypertension. Milrinone is a phosphodiesterase-3 inhibitor used for cardiac output support, not PDA closure.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is suctioning a neonate\'s endotracheal tube and notices the secretions are thick and meconium-stained. Which suction catheter size is appropriate for a 3.5 mm endotracheal tube?',
        choices: {
          A: 'A 10 Fr suction catheter',
          B: 'A 5 Fr suction catheter',
          C: 'An 8 Fr suction catheter',
          D: 'A 6 Fr suction catheter',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The suction catheter size should be no more than half the internal diameter of the ETT to prevent excessive negative pressure and atelectasis. For a 3.5 mm ETT, an 8 Fr catheter is the largest that should be used (ETT size × 2 = 7; the next available size is 8 Fr).',
        explanationWrong:
          'A 10 Fr catheter is too large for a 3.5 mm ETT and would occlude the tube, generating excessive negative pressure. A 5 Fr catheter may be too small to effectively suction thick meconium. A 6 Fr catheter would work but an 8 Fr is the standard recommendation for a 3.5 mm ETT.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          'A premature infant receiving mechanical ventilation develops a sudden increase in oxygen requirement, unilateral chest hyperexpansion, and absent breath sounds on one side. What is the most likely complication?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Mucus plugging of the ETT',
          C: 'Pulmonary hemorrhage',
          D: 'Equipment malfunction',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The acute onset of increased oxygen requirement, unilateral chest hyperexpansion, and absent breath sounds strongly suggests tension pneumothorax. This is a medical emergency in ventilated neonates requiring immediate needle decompression followed by chest tube placement.',
        explanationWrong:
          'Mucus plugging would cause bilateral diminished breath sounds or unilateral atelectasis, not hyperexpansion. Pulmonary hemorrhage presents with bloody secretions from the ETT. Equipment malfunction would affect ventilator parameters but not cause unilateral chest hyperexpansion.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          'A 2-week-old neonate born at 27 weeks gestation has an echocardiogram showing a large patent ductus arteriosus with left-to-right shunting. The infant has increasing FiO2 requirements and bounding peripheral pulses. After a course of ibuprofen fails to close the PDA, what is the recommended next step?',
        choices: {
          A: 'Repeat the same dose of ibuprofen',
          B: 'Surgical ligation of the PDA',
          C: 'Administer prostaglandin E1',
          D: 'Initiate inhaled nitric oxide therapy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When pharmacologic closure of a hemodynamically significant PDA fails, surgical ligation is the next step. The persistent left-to-right shunt increases pulmonary blood flow, worsens respiratory status, and can lead to heart failure if untreated.',
        explanationWrong:
          'Repeating the same dose of ibuprofen after a failed course has diminishing returns and increases the risk of renal side effects. Prostaglandin E1 maintains ductal patency, worsening the condition. Inhaled nitric oxide does not address PDA closure.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          'A premature neonate born at 25 weeks gestation is at highest risk for which type of intracranial hemorrhage?',
        choices: {
          A: 'Subdural hematoma',
          B: 'Epidural hematoma',
          C: 'Subarachnoid hemorrhage',
          D: 'Intraventricular hemorrhage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Intraventricular hemorrhage (IVH) is the most common type of intracranial hemorrhage in premature infants, originating from the fragile germinal matrix. Infants born before 32 weeks, especially before 28 weeks, are at the highest risk. Fluctuations in cerebral blood flow are a major contributing factor.',
        explanationWrong:
          'Subdural hematoma is more commonly associated with traumatic deliveries in term infants. Epidural hematoma is typically caused by skull fractures and arterial bleeding, uncommon in premature infants. Subarachnoid hemorrhage is less common in premature infants than IVH.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          'In a neonate receiving mechanical ventilation, which parameter directly reflects the adequacy of alveolar ventilation?',
        choices: {
          A: 'SpO2',
          B: 'Mean airway pressure',
          C: 'PaCO2',
          D: 'FiO2',
        },
        correctChoice: 'C',
        explanationCorrect:
          'PaCO2 is the direct indicator of alveolar ventilation adequacy. It reflects the balance between CO2 production and CO2 elimination. A rising PaCO2 indicates inadequate alveolar ventilation, while a falling PaCO2 indicates excessive ventilation.',
        explanationWrong:
          'SpO2 reflects oxygenation, not ventilation. Mean airway pressure affects oxygenation through lung recruitment. FiO2 is a set parameter for oxygen delivery, not a measurement of ventilation adequacy.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          'Which formula is most commonly used to estimate the appropriate uncuffed endotracheal tube size for a pediatric patient older than 2 years?',
        choices: {
          A: '(Age in years / 4) + 4',
          B: '(Age in years / 4) + 3',
          C: '(Age in years / 2) + 4',
          D: 'Weight in kg / 10',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The standard formula for estimating uncuffed ETT size in children over 2 years old is (age in years / 4) + 4. For example, a 4-year-old would receive a (4/4) + 4 = 5.0 mm uncuffed ETT. This formula provides a reliable starting estimate.',
        explanationWrong:
          '(Age / 4) + 3 is used for cuffed endotracheal tube sizing, not uncuffed. (Age / 2) + 4 would overestimate tube size. Weight in kg / 10 is not a standard formula for ETT sizing.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          'A term newborn with PPHN is being treated with iNO at 20 ppm. After 4 hours, the decision is made to wean the iNO. Which approach to weaning is recommended?',
        choices: {
          A: 'Abrupt discontinuation from 20 ppm',
          B: 'Gradual reduction in increments while monitoring for rebound pulmonary hypertension',
          C: 'Switch directly to 100% oxygen and discontinue iNO',
          D: 'Reduce iNO to 5 ppm and discontinue after 10 minutes',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Inhaled nitric oxide should be weaned gradually (typically by 5 ppm at a time, then by 1 ppm at lower doses) while monitoring SpO2 and hemodynamics. Abrupt discontinuation can cause severe rebound pulmonary hypertension due to downregulation of endogenous nitric oxide synthase.',
        explanationWrong:
          'Abrupt discontinuation from 20 ppm carries a high risk of life-threatening rebound pulmonary hypertension. Switching to 100% oxygen alone does not prevent rebound. Reducing directly to 5 ppm from 20 ppm is too aggressive and does not allow adequate monitoring for rebound effects.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          'A premature neonate in an incubator has a skin temperature probe reading of 35.8°C. The servo-controlled incubator increases the ambient temperature. The infant appears pink with stable vital signs. What is the most likely explanation for the low skin temperature reading?',
        choices: {
          A: 'The infant has developed sepsis',
          B: 'The incubator heater has malfunctioned',
          C: 'The skin temperature probe has become displaced from the infant\'s skin',
          D: 'The infant has inadequate brown fat stores',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A displaced skin temperature probe is the most common cause of falsely low temperature readings in a servo-controlled incubator. When the probe falls off the skin, it reads the cooler ambient air temperature, causing the incubator to inappropriately increase heat output, which can lead to infant overheating.',
        explanationWrong:
          'While sepsis can cause temperature instability, the infant appears pink and stable, making this less likely. A heater malfunction would not cause the servo to increase temperature output. While premature infants have limited brown fat, this would not explain an acute drop with the infant otherwise appearing well.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          'A newborn is diagnosed with type C (most common) tracheoesophageal fistula. Which statement best describes the anatomical defect?',
        choices: {
          A: 'The esophagus connects normally to the stomach with no fistula',
          B: 'An H-type fistula connects the esophagus to the trachea without atresia',
          C: 'Both proximal and distal esophageal segments connect to the trachea',
          D: 'Proximal esophageal atresia with a blind pouch, and a distal tracheoesophageal fistula connecting the trachea to the distal esophagus and stomach',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Type C TEF (Gross classification) is the most common type, accounting for approximately 85% of cases. It consists of a blind proximal esophageal pouch (esophageal atresia) with a fistula connecting the distal trachea to the distal esophagus, allowing air to enter the stomach.',
        explanationWrong:
          'A normal esophageal connection describes no anomaly. An H-type fistula (Type E) has no atresia and is the least common type. Both segments connecting to the trachea describes a Type D TEF, which is rare.',
        topic: 'Congenital Anomalies',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 3 seeded (20 questions, isFree: false)')

  // ─── EXAM 4 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q11,Q15,Q18) B=5(Q3,Q8,Q12,Q16,Q19) C=5(Q2,Q5,Q9,Q14,Q20) D=5(Q4,Q7,Q10,Q13,Q17)
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 4',
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
          'A neonate born at 30 weeks gestation receives prophylactic surfactant via the INSURE technique. What does the INSURE method involve?',
        choices: {
          A: 'Intubation, surfactant administration, and rapid extubation to CPAP',
          B: 'Intubation, surfactant administration, and continued mechanical ventilation',
          C: 'Surfactant nebulization through a face mask without intubation',
          D: 'Nasal surfactant administration via a thin catheter without intubation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The INSURE technique stands for INtubate, SURfactant, Extubate. The infant is briefly intubated for surfactant administration, then rapidly extubated to nasal CPAP. This approach minimizes ventilator-induced lung injury while providing the benefits of surfactant therapy.',
        explanationWrong:
          'Continued mechanical ventilation after surfactant defeats the purpose of the INSURE technique, which aims to minimize invasive ventilation. Nebulized surfactant through a face mask is not the INSURE method. Nasal surfactant via thin catheter describes the LISA (Less Invasive Surfactant Administration) technique, which is different from INSURE.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          'A neonate is being ventilated with synchronized intermittent mandatory ventilation (SIMV). The set rate is 30 bpm, but the total respiratory rate displayed is 55 bpm. What does this indicate?',
        choices: {
          A: 'The ventilator is auto-triggering',
          B: 'The flow sensor is malfunctioning',
          C: 'The infant is breathing spontaneously between the mandatory breaths',
          D: 'The set rate is too high and should be reduced',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In SIMV mode, the ventilator delivers a set number of mandatory breaths (30 bpm) and allows the patient to breathe spontaneously between those breaths. The total rate of 55 bpm indicates 25 spontaneous breaths per minute in addition to the 30 mandatory breaths.',
        explanationWrong:
          'Auto-triggering would cause the mandatory breath rate to be higher than set, not an increase in total rate with separate spontaneous breaths. A flow sensor malfunction would cause inconsistent triggering. The set rate of 30 is within normal neonatal range and does not need reduction.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          'A term infant born through meconium-stained amniotic fluid develops progressive respiratory distress with bilateral coarse crackles and chest radiograph showing hyperinflation with patchy bilateral infiltrates. Which treatment is most appropriate?',
        choices: {
          A: 'Administer aerosolized albuterol',
          B: 'Intubate and provide mechanical ventilation with careful avoidance of air trapping',
          C: 'Apply CPAP at 10 cmH2O immediately',
          D: 'Administer IV aminophylline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The infant has meconium aspiration syndrome with progressive respiratory failure. Intubation and mechanical ventilation are indicated, with attention to avoiding air trapping by using appropriate inspiratory and expiratory times. Short inspiratory times and longer expiratory times help prevent gas trapping.',
        explanationWrong:
          'Aerosolized albuterol has limited evidence in neonatal meconium aspiration. CPAP at 10 cmH2O may worsen air trapping in an already hyperinflated lung. IV aminophylline is not a standard treatment for meconium aspiration syndrome.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          'A premature infant with BPD has been receiving diuretic therapy with furosemide for several weeks. The respiratory therapist should monitor for which electrolyte disturbance?',
        choices: {
          A: 'Hyperkalemia',
          B: 'Hypernatremia',
          C: 'Hyperchloremia',
          D: 'Hypokalemia and hypochloremic metabolic alkalosis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Furosemide is a loop diuretic that causes significant potassium, sodium, chloride, and calcium wasting. Chronic use leads to hypokalemia and hypochloremic metabolic alkalosis, which are the most clinically significant electrolyte disturbances requiring monitoring and supplementation.',
        explanationWrong:
          'Furosemide causes hypokalemia, not hyperkalemia. It causes sodium wasting (hyponatremia), not hypernatremia. It causes chloride wasting (hypochloremia), not hyperchloremia.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          'Which of the following is the most important reason for using a polyethylene wrap or bag on an extremely premature infant immediately after birth?',
        choices: {
          A: 'To prevent contamination of the skin',
          B: 'To facilitate monitoring equipment attachment',
          C: 'To reduce evaporative heat loss',
          D: 'To provide a sterile field for umbilical line placement',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Extremely premature infants (less than 32 weeks) have very thin skin with minimal subcutaneous fat and high surface-area-to-body-weight ratio. Polyethylene wrapping or bags placed without drying reduce evaporative heat loss, which is the most significant mechanism of heat loss in this population in the delivery room.',
        explanationWrong:
          'While infection prevention is important, the polyethylene wrap is not primarily for preventing contamination. Monitoring equipment placement is not the purpose of the wrap. A sterile field for umbilical line placement requires separate sterile draping.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          'A neonate with PPHN is being treated with iNO at 20 ppm. The methemoglobin level returns at 6.2%. What action should the respiratory therapist take?',
        choices: {
          A: 'Reduce the iNO dose and continue monitoring methemoglobin levels',
          B: 'Increase the iNO dose to 40 ppm to improve oxygenation',
          C: 'Administer IV methylene blue immediately',
          D: 'Discontinue iNO abruptly and switch to 100% oxygen',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Methemoglobin levels above 5% require dose reduction of iNO. The iNO dose should be decreased and methemoglobin levels rechecked. At 6.2%, the level is elevated but not at the critical threshold (above 10-15%) that would require methylene blue administration.',
        explanationWrong:
          'Increasing iNO to 40 ppm would further increase methemoglobin levels. IV methylene blue is reserved for methemoglobin levels above 10-15% or when the patient is symptomatic. Abrupt discontinuation risks severe rebound pulmonary hypertension.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          'Which component of the Apgar score evaluates the newborn\'s response to tactile stimulation?',
        choices: {
          A: 'Appearance',
          B: 'Pulse',
          C: 'Activity',
          D: 'Grimace (reflex irritability)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The Grimace component (reflex irritability) of the Apgar score evaluates the newborn\'s response to stimulation such as suctioning or flicking the sole of the foot. A score of 0 indicates no response, 1 indicates a grimace, and 2 indicates a vigorous cry or cough.',
        explanationWrong:
          'Appearance assesses skin color (pink, acrocyanotic, or cyanotic). Pulse evaluates heart rate (absent, below 100, or above 100 bpm). Activity assesses muscle tone (limp, some flexion, or active motion).',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          'A 5-year-old child with status asthmaticus is intubated and placed on mechanical ventilation. The peak inspiratory pressure is 38 cmH2O and the plateau pressure is 22 cmH2O. What does the large difference between peak and plateau pressure suggest?',
        choices: {
          A: 'Decreased lung compliance',
          B: 'Increased airway resistance',
          C: 'Pneumothorax',
          D: 'Endotracheal tube obstruction',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A large gradient between peak inspiratory pressure and plateau pressure (PIP - Pplat > 10 cmH2O) indicates increased airway resistance. In status asthmaticus, severe bronchospasm and airway inflammation significantly increase airway resistance, reflected in this pressure differential.',
        explanationWrong:
          'Decreased lung compliance would result in elevated plateau pressure relative to peak pressure, with a small PIP-Pplat gradient. Pneumothorax would cause a sudden increase in both peak and plateau pressures. ETT obstruction would increase resistance but the clinical context points to asthma as the primary cause.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          'A neonate born at 29 weeks gestation weighs 1,200 grams and is being started on caffeine citrate for apnea of prematurity. What is the standard loading dose of caffeine citrate?',
        choices: {
          A: 'Loading dose of 5 mg/kg',
          B: 'Loading dose of 10 mg/kg',
          C: 'Loading dose of 20 mg/kg',
          D: 'Loading dose of 40 mg/kg',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The standard loading dose of caffeine citrate for apnea of prematurity is 20 mg/kg administered intravenously over 30 minutes, followed by a maintenance dose of 5-10 mg/kg/day. This provides a caffeine base loading dose of approximately 10 mg/kg.',
        explanationWrong:
          'A dose of 5 mg/kg is the typical maintenance dose, not the loading dose. A dose of 10 mg/kg represents the caffeine base loading dose, but the question asks about caffeine citrate which is twice the base dose. A dose of 40 mg/kg would be excessive and potentially toxic.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          'A premature infant on mechanical ventilation has been noted to have a Grade III intraventricular hemorrhage. Which ventilation practice may help minimize the risk of IVH extension?',
        choices: {
          A: 'Maintaining high tidal volumes to ensure adequate ventilation',
          B: 'Rapid rate changes to correct ABG abnormalities quickly',
          C: 'Routine tracheal suctioning every 2 hours',
          D: 'Avoiding fluctuations in PaCO2 and maintaining hemodynamic stability',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Fluctuations in PaCO2 cause changes in cerebral blood flow, which can extend existing IVH or cause new hemorrhage. Maintaining stable PaCO2 through gradual ventilator adjustments and avoiding hemodynamic instability are critical to preventing IVH extension in premature infants.',
        explanationWrong:
          'High tidal volumes increase the risk of pressure and volume fluctuations. Rapid rate changes cause abrupt PaCO2 shifts, altering cerebral blood flow. Routine frequent suctioning can cause agitation, coughing, and hemodynamic fluctuations, all increasing IVH risk.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          'A neonate with severe meconium aspiration syndrome develops refractory hypoxemia. Despite maximal conventional ventilation and FiO2 of 1.0, the PaO2 remains at 35 mmHg. The respiratory therapist calculates an oxygenation index (OI) of 42. Which formula was used to calculate the OI?',
        choices: {
          A: 'OI = (MAP × FiO2 × 100) / PaO2',
          B: 'OI = PaO2 / (MAP × FiO2)',
          C: 'OI = (PaO2 × FiO2) / MAP',
          D: 'OI = (MAP × PaO2) / FiO2',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The oxygenation index (OI) is calculated using the formula: OI = (MAP × FiO2 × 100) / PaO2. A higher OI indicates more severe oxygenation failure. An OI greater than 40 is a criterion for ECMO consideration. In this case: (MAP × 1.0 × 100) / 35 ≈ 42.',
        explanationWrong:
          'PaO2 / (MAP × FiO2) is the P/F ratio modification, not the OI. The other formulas do not correctly calculate the oxygenation index. The correct formula places MAP × FiO2 × 100 in the numerator and PaO2 in the denominator.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          'A preterm infant born at 28 weeks gestation is on nasal CPAP. The infant develops frequent desaturation episodes and bradycardia lasting greater than 20 seconds. The nurse reports no apparent cause. What should the respiratory therapist recommend?',
        choices: {
          A: 'Increase the CPAP pressure by 2 cmH2O',
          B: 'Initiate caffeine citrate therapy for suspected apnea of prematurity',
          C: 'Intubate and begin mechanical ventilation immediately',
          D: 'Discontinue CPAP and place on high-flow nasal cannula',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The clinical picture describes apnea of prematurity (cessation of breathing > 20 seconds with desaturation and/or bradycardia) in a preterm infant. Caffeine citrate is the first-line treatment for apnea of prematurity, reducing the frequency and severity of apneic episodes.',
        explanationWrong:
          'Increasing CPAP may help obstructive apnea but would not address central apnea, which is more common in this population. Immediate intubation is not warranted as the first step when pharmacologic therapy has not been tried. High-flow nasal cannula does not treat central apnea.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          'During HFOV, chest wiggle is observed from the clavicles to the umbilicus. This finding indicates which of the following?',
        choices: {
          A: 'The amplitude is set too low',
          B: 'The frequency is set too high',
          C: 'The MAP is insufficient for lung recruitment',
          D: 'The amplitude is providing adequate vibration and tidal volume delivery',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Chest wiggle from the clavicles to the umbilicus is the visual assessment used to determine adequate amplitude (power/delta P) on HFOV. This indicates that sufficient tidal volume is being generated by the oscillations for effective CO2 removal.',
        explanationWrong:
          'If amplitude were too low, chest wiggle would be minimal or absent. Frequency being too high would reduce tidal volume delivery but the adequate chest wiggle indicates proper amplitude. MAP affects oxygenation through lung recruitment, not chest wiggle.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          'A premature infant with established BPD is being weaned from mechanical ventilation. The respiratory therapist notes the infant has air trapping with auto-PEEP. Which ventilator adjustment would help reduce air trapping?',
        choices: {
          A: 'Increase the inspiratory time',
          B: 'Increase the ventilator rate',
          C: 'Decrease the ventilator rate to allow a longer expiratory time',
          D: 'Increase the tidal volume',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Air trapping and auto-PEEP occur when the expiratory time is insufficient for complete exhalation. Decreasing the ventilator rate lengthens the respiratory cycle, providing more expiratory time and allowing more complete exhalation, thereby reducing air trapping.',
        explanationWrong:
          'Increasing inspiratory time would shorten expiratory time and worsen air trapping. Increasing the ventilator rate would further shorten expiratory time. Increasing tidal volume would require more expiratory time to exhale and could worsen air trapping.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          'A 1-day-old term infant has persistent cyanosis that does not improve with administration of 100% oxygen. An echocardiogram reveals a congenital heart defect. This presentation is most consistent with which type of cardiac lesion?',
        choices: {
          A: 'A cyanotic congenital heart defect with right-to-left shunting',
          B: 'An acyanotic defect with left-to-right shunting',
          C: 'A ventricular septal defect with pulmonary overcirculation',
          D: 'A patent ductus arteriosus with left-to-right flow',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Persistent cyanosis unresponsive to 100% oxygen (failed hyperoxia test) is characteristic of cyanotic congenital heart disease with right-to-left shunting (e.g., tetralogy of Fallot, transposition of the great arteries). Deoxygenated blood bypasses the lungs, and supplemental oxygen cannot correct the cyanosis.',
        explanationWrong:
          'Acyanotic defects with left-to-right shunting do not cause cyanosis because oxygenated blood is shunted back to the lungs. VSD with pulmonary overcirculation is an acyanotic lesion initially. PDA with left-to-right flow typically causes increased pulmonary blood flow without significant cyanosis.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          'A premature neonate born at 24 weeks gestation has been on mechanical ventilation for 6 weeks and now has established severe BPD. Which characteristic finding is expected on the chest radiograph?',
        choices: {
          A: 'Bilateral ground-glass opacification with air bronchograms',
          B: 'Alternating areas of atelectasis and hyperinflation with cystic changes and fibrotic streaking',
          C: 'Normal chest radiograph with clear lung fields',
          D: 'Unilateral consolidation in the right lower lobe',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Severe (classic) BPD demonstrates a heterogeneous radiographic pattern with alternating areas of atelectasis and hyperinflation, cystic changes (bubbly appearance), and fibrotic streaking. This reflects chronic lung injury from prolonged ventilation and oxygen exposure.',
        explanationWrong:
          'Bilateral ground-glass with air bronchograms is characteristic of RDS, not established BPD. Normal lung fields would indicate no pulmonary disease. Unilateral consolidation suggests pneumonia or atelectasis, not the diffuse bilateral changes of BPD.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          'A neonate with PPHN is receiving sildenafil as adjunctive therapy. What is the mechanism of action of sildenafil in treating pulmonary hypertension?',
        choices: {
          A: 'Direct smooth muscle relaxation via beta-2 receptor stimulation',
          B: 'Inhibition of angiotensin-converting enzyme',
          C: 'Blockade of calcium channels in vascular smooth muscle',
          D: 'Inhibition of phosphodiesterase-5, preventing breakdown of cyclic GMP and promoting vasodilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sildenafil inhibits phosphodiesterase-5 (PDE-5), which normally breaks down cyclic guanosine monophosphate (cGMP). By preventing cGMP degradation, sildenafil prolongs the vasodilatory effect of nitric oxide on pulmonary smooth muscle, reducing pulmonary vascular resistance.',
        explanationWrong:
          'Sildenafil does not work through beta-2 receptor stimulation, which is the mechanism of bronchodilators. It is not an ACE inhibitor. While calcium channel blockers can reduce pulmonary hypertension, this is not the mechanism of sildenafil.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          'A newborn with an omphalocele is being prepared for surgical repair. Prior to surgery, which respiratory consideration is most important?',
        choices: {
          A: 'Avoid bag-mask ventilation and intubate early to prevent gastric distension that could compromise the defect',
          B: 'Use high-frequency nasal cannula at maximum flow',
          C: 'Delay respiratory support until surgical consultation',
          D: 'Apply tight abdominal binders to reduce the size of the omphalocele',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In neonates with abdominal wall defects like omphalocele, bag-mask ventilation can cause gastric distension which increases abdominal pressure and may compromise the surgical defect or impair ventilation. Early intubation provides a secure airway and allows decompression with an orogastric tube.',
        explanationWrong:
          'High-frequency nasal cannula does not provide a secure airway for surgical management. Delaying respiratory support could lead to deterioration. Tight abdominal binders could increase intra-abdominal pressure and compromise blood flow to the herniated organs.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          'A preterm infant being treated with supplemental oxygen develops retinopathy of prematurity (ROP). Which of the following best describes the pathophysiology of ROP?',
        choices: {
          A: 'Excessive oxygen causes direct thermal injury to the retinal vessels',
          B: 'Abnormal retinal vascular development due to fluctuating oxygen levels causing vasoconstriction followed by pathologic neovascularization',
          C: 'Infection of the retinal blood vessels due to immature immune function',
          D: 'Mechanical damage to the retina from high CPAP pressures',
        },
        correctChoice: 'B',
        explanationCorrect:
          'ROP develops in two phases: Phase 1 involves vasoconstriction and cessation of normal retinal vascular growth due to hyperoxia. Phase 2 involves relative retinal hypoxia triggering release of VEGF (vascular endothelial growth factor), causing pathologic neovascularization that can lead to retinal detachment.',
        explanationWrong:
          'Oxygen does not cause thermal injury to retinal vessels. ROP is not caused by infection. CPAP pressures do not cause mechanical damage to the retina. The pathology is specifically related to abnormal vascular development in response to fluctuating oxygen levels.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          'A neonate born at 32 weeks gestation requires surfactant replacement therapy. The respiratory therapist prepares to administer poractant alfa (Curosurf). What distinguishes poractant alfa from beractant (Survanta)?',
        choices: {
          A: 'Poractant alfa is a synthetic surfactant',
          B: 'Beractant contains more surfactant protein than poractant alfa',
          C: 'Poractant alfa is derived from porcine lung extract and has a higher phospholipid concentration per unit volume',
          D: 'Beractant is administered via nebulization while poractant alfa requires intubation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Poractant alfa (Curosurf) is derived from porcine (pig) lung extract, while beractant (Survanta) is derived from bovine (cow) lung extract. Poractant alfa has a higher phospholipid concentration per milliliter, allowing for smaller volume administration, which may reduce airway flooding.',
        explanationWrong:
          'Poractant alfa is a natural surfactant, not synthetic. Poractant alfa actually has a higher surfactant protein concentration. Both surfactants are administered via intratracheal instillation through an endotracheal tube, not by nebulization.',
        topic: 'Surfactant Therapy',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 4 seeded (20 questions, isFree: false)')

  // ─── EXAM 5 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q7,Q9,Q13,Q17) B=5(Q3,Q8,Q12,Q15,Q19) C=5(Q1,Q5,Q10,Q16,Q20) D=5(Q2,Q6,Q11,Q14,Q18)
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 5',
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
          'A neonate born at 26 weeks gestation is intubated and placed on conventional mechanical ventilation. The initial ventilator settings include a tidal volume of 4 mL/kg. On the first ABG, the PaCO2 is 38 mmHg and pH is 7.35. How should the respiratory therapist interpret these results?',
        choices: {
          A: 'The infant is being significantly over-ventilated',
          B: 'The PaCO2 is critically low and requires immediate correction',
          C: 'The ventilator settings are providing adequate ventilation with acceptable gas exchange',
          D: 'The ABG indicates severe respiratory acidosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A PaCO2 of 38 mmHg and pH of 7.35 represent acceptable gas exchange for a ventilated neonate. While permissive hypercapnia (PaCO2 45-55) may be targeted to minimize ventilator-induced lung injury, these values are within normal range and do not require immediate change.',
        explanationWrong:
          'A PaCO2 of 38 is within normal range, not significantly over-ventilated. The PaCO2 is not critically low; values below 30 would be concerning. The ABG does not show respiratory acidosis; pH 7.35 is at the lower end of normal with a normal PaCO2.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          'A full-term neonate is born limp, apneic, and pale with a heart rate of 40 bpm. After 30 seconds of effective PPV with 21% oxygen and chest compressions, the heart rate is now 55 bpm. What is the next step according to NRP?',
        choices: {
          A: 'Continue PPV and compressions for another 60 seconds',
          B: 'Increase FiO2 to 100% and prepare to give epinephrine',
          C: 'Stop compressions since the heart rate is improving',
          D: 'Administer epinephrine via the endotracheal tube or umbilical vein',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Per NRP guidelines, if the heart rate remains below 60 bpm despite 60 seconds of coordinated chest compressions and effective PPV, epinephrine should be administered. The preferred route is through the umbilical venous catheter (dose 0.01-0.03 mg/kg IV). The ETT route may be used if IV access is not yet available.',
        explanationWrong:
          'Simply continuing compressions without escalating care is not appropriate when the heart rate remains below 60. While increasing FiO2 to 100% is appropriate during compressions, the question asks about the next step, which is epinephrine. The heart rate remains below 60 bpm, so compressions should not be stopped.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          'A premature infant is receiving surfactant replacement therapy. During administration, the infant develops sudden bradycardia and desaturation. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the ventilator rate to 60 bpm',
          B: 'Temporarily stop the surfactant instillation and stabilize the infant',
          C: 'Continue surfactant administration rapidly to complete the dose',
          D: 'Extubate the infant immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'If bradycardia or desaturation occurs during surfactant administration, the instillation should be temporarily paused. The infant should be stabilized by ensuring adequate ventilation and oxygenation. Once the infant recovers, the remaining surfactant can be administered in subsequent aliquots.',
        explanationWrong:
          'Increasing the ventilator rate alone does not address the acute complication. Rapid administration may worsen airway obstruction from the surfactant bolus. Extubation would remove the ability to deliver ventilation and complete surfactant therapy.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          'A neonate with a left-sided congenital diaphragmatic hernia has been stabilized with endotracheal intubation. The gastric contents are being decompressed with an orogastric tube. Which ventilation strategy is contraindicated?',
        choices: {
          A: 'Bag-mask ventilation with high pressures',
          B: 'Gentle mechanical ventilation with PIP below 25 cmH2O',
          C: 'HFOV as a rescue strategy',
          D: 'Volume-targeted ventilation at 4-6 mL/kg',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Bag-mask ventilation with high pressures is contraindicated in CDH because it forces air into the stomach and herniated bowel within the thorax, further compressing the already hypoplastic lung and worsening respiratory distress. Immediate intubation is preferred.',
        explanationWrong:
          'Gentle mechanical ventilation with PIP below 25 cmH2O is the recommended initial strategy. HFOV may be used as a rescue strategy when conventional ventilation fails. Volume-targeted ventilation at appropriate tidal volumes is acceptable.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          'Which radiographic finding differentiates meconium aspiration syndrome from respiratory distress syndrome?',
        choices: {
          A: 'Air bronchograms with a ground-glass pattern',
          B: 'Complete bilateral whiteout',
          C: 'Patchy bilateral infiltrates with areas of hyperinflation and possible pneumothorax',
          D: 'Butterfly pattern of pulmonary edema',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Meconium aspiration syndrome characteristically shows patchy, irregular bilateral infiltrates with areas of hyperinflation (air trapping) on chest radiograph. Pneumothorax and pneumomediastinum may also be present due to the ball-valve obstruction mechanism. This pattern differs from the uniform ground-glass appearance of RDS.',
        explanationWrong:
          'Air bronchograms with a ground-glass pattern are characteristic of RDS, not MAS. Complete bilateral whiteout can occur in severe cases of either condition. A butterfly pattern of pulmonary edema is seen in cardiogenic pulmonary edema, not MAS.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          'A neonate with severe PPHN is being considered for ECMO. Which of the following is a contraindication for neonatal ECMO?',
        choices: {
          A: 'Oxygenation index greater than 40',
          B: 'Birth weight greater than 2 kg',
          C: 'Gestational age of 38 weeks',
          D: 'Gestational age less than 34 weeks or birth weight less than 2 kg',
        },
        correctChoice: 'D',
        explanationCorrect:
          'ECMO contraindications in neonates include gestational age less than 34 weeks and birth weight less than 2 kg due to the high risk of intracranial hemorrhage from systemic heparinization. Other contraindications include lethal chromosomal abnormalities and Grade III or higher IVH.',
        explanationWrong:
          'An OI greater than 40 is actually an indication for ECMO, not a contraindication. Birth weight greater than 2 kg meets the minimum weight requirement. A gestational age of 38 weeks meets the minimum gestational age requirement.',
        topic: 'Persistent Pulmonary Hypertension of the Newborn',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          'A premature infant at 28 weeks gestation is on CPAP of 6 cmH2O. The infant has recurrent apnea despite caffeine therapy. The episodes are associated with neck flexion. What type of apnea is most likely occurring?',
        choices: {
          A: 'Obstructive apnea',
          B: 'Central apnea',
          C: 'Mixed apnea',
          D: 'Periodic breathing',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Apnea associated with neck flexion suggests an obstructive component. In premature infants, the pharynx is highly compliant and prone to collapse, especially with neck flexion. Repositioning the head to a neutral or slightly extended (sniffing) position can often resolve obstructive apnea.',
        explanationWrong:
          'Central apnea would not be specifically associated with neck positioning. Mixed apnea has both central and obstructive components but the clear positional association points to obstruction. Periodic breathing involves regular cycles of breathing and pausing without cyanosis or bradycardia.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          'A 4-month-old infant presents with a harsh, barking cough and biphasic stridor after an upper respiratory infection. The child is in moderate distress. Which medication should be administered first?',
        choices: {
          A: 'Inhaled albuterol 2.5 mg via nebulizer',
          B: 'Nebulized racemic epinephrine and systemic dexamethasone',
          C: 'Inhaled ipratropium bromide',
          D: 'IV antibiotics for suspected bacterial tracheitis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The presentation is consistent with moderate croup (laryngotracheobronchitis). For moderate to severe croup, nebulized racemic epinephrine (0.5 mL of 2.25% solution) provides rapid, temporary relief of subglottic edema, and systemic dexamethasone (0.6 mg/kg) provides sustained anti-inflammatory benefit.',
        explanationWrong:
          'Albuterol is a bronchodilator for lower airway obstruction and is not effective for the subglottic edema of croup. Ipratropium bromide is an anticholinergic used for asthma, not croup. IV antibiotics would be considered for bacterial tracheitis, but the clinical picture of viral URI followed by barking cough and stridor is classic for viral croup.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          'A premature infant with BPD is being weaned from mechanical ventilation. The infant has chronic CO2 retention with a baseline PaCO2 of 55 mmHg. What renal compensation would be expected on the ABG?',
        choices: {
          A: 'Elevated HCO3 (metabolic compensation) to maintain near-normal pH',
          B: 'Decreased HCO3 indicating metabolic acidosis',
          C: 'Normal HCO3 with an acidic pH',
          D: 'Elevated PaO2 to compensate for the elevated PaCO2',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In chronic respiratory acidosis from BPD, the kidneys compensate by retaining bicarbonate (HCO3) and excreting hydrogen ions. This renal compensation raises the HCO3 level, maintaining the pH near normal despite the chronically elevated PaCO2.',
        explanationWrong:
          'Decreased HCO3 would indicate metabolic acidosis, which would worsen the acidemia. Normal HCO3 with acidic pH would indicate acute, not chronic, respiratory acidosis. PaO2 does not compensate for PaCO2; oxygenation and ventilation are separate processes.',
        topic: 'Bronchopulmonary Dysplasia',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          'A neonate born at 41 weeks gestation has unilateral choanal atresia. How does this presentation typically differ from bilateral choanal atresia?',
        choices: {
          A: 'Unilateral choanal atresia causes immediate severe respiratory distress at birth',
          B: 'Unilateral choanal atresia is always associated with CHARGE syndrome',
          C: 'Unilateral choanal atresia may present with chronic unilateral nasal discharge and congestion, often diagnosed later in life',
          D: 'Unilateral choanal atresia requires immediate surgical repair at birth',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Unilateral choanal atresia is often less dramatic than bilateral involvement. Because the infant can breathe through the unaffected nostril, it may not present until later in life with chronic unilateral nasal congestion, discharge, or recurrent sinusitis on the affected side.',
        explanationWrong:
          'Bilateral, not unilateral, choanal atresia causes immediate respiratory distress at birth because neonates are obligate nasal breathers. CHARGE syndrome can be associated with either unilateral or bilateral atresia. Immediate surgical repair is typically necessary for bilateral atresia, not unilateral.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          'A premature infant is receiving total parenteral nutrition (TPN) through a central venous catheter. The respiratory therapist notices a sudden onset of respiratory distress with decreased breath sounds on the right side. Chest radiograph shows a right-sided pleural effusion. What is the most likely cause?',
        choices: {
          A: 'Spontaneous chylothorax',
          B: 'Right-sided pneumonia',
          C: 'Congestive heart failure',
          D: 'Central line migration with TPN extravasation into the pleural space',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The sudden onset of respiratory distress with a pleural effusion in a neonate with a central venous catheter receiving TPN strongly suggests catheter migration with TPN fluid extravasation into the pleural space. This is a known complication of central venous catheters requiring urgent intervention.',
        explanationWrong:
          'Spontaneous chylothorax is possible but less likely given the temporal association with the central line. Pneumonia would show consolidation rather than isolated effusion. Congestive heart failure typically causes bilateral effusions and would not present this acutely in a premature infant without cardiac history.',
        topic: 'Neonatal Assessment',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          'A neonate is being managed with therapeutic hypothermia (whole-body cooling) after perinatal asphyxia. What is the target core temperature for this therapy?',
        choices: {
          A: 'Core temperature of 36.5-37.0°C',
          B: 'Core temperature of 33.5°C ± 0.5°C for 72 hours',
          C: 'Core temperature of 30.0°C for 48 hours',
          D: 'Core temperature of 35.0°C for 24 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Therapeutic hypothermia for neonatal hypoxic-ischemic encephalopathy (HIE) targets a core temperature of 33.5°C ± 0.5°C (33-34°C) for 72 hours, followed by slow rewarming at 0.5°C per hour. This protocol has been shown to reduce mortality and neurodevelopmental disability.',
        explanationWrong:
          '36.5-37.0°C is normal body temperature, not a therapeutic hypothermia target. 30.0°C is dangerously low and would cause cardiac arrhythmias. 35.0°C for 24 hours does not achieve the neuroprotective target temperature or duration.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          'A neonate on conventional mechanical ventilation has the following settings: PIP 20, PEEP 5, rate 40, IT 0.35 sec, FiO2 0.40. The ABG shows pH 7.30, PaCO2 52, PaO2 65, HCO3 24. The respiratory therapist wants to improve ventilation. Which change is most appropriate?',
        choices: {
          A: 'Increase the ventilator rate to 50 bpm',
          B: 'Decrease the PEEP to 3 cmH2O',
          C: 'Increase the FiO2 to 0.60',
          D: 'Decrease the inspiratory time to 0.25 seconds',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ABG shows respiratory acidosis (low pH, elevated PaCO2) indicating inadequate ventilation. Increasing the ventilator rate increases minute ventilation, which will enhance CO2 elimination. The PaO2 is adequate, so oxygenation changes are not the priority.',
        explanationWrong:
          'Decreasing PEEP would primarily affect oxygenation and could cause alveolar derecruitment. Increasing FiO2 addresses oxygenation, which is adequate at PaO2 of 65. Decreasing inspiratory time alone would not significantly improve ventilation and could reduce tidal volume.',
        topic: 'Neonatal Ventilation Strategies',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          'Which of the following antenatal findings on ultrasound would suggest a congenital diaphragmatic hernia?',
        choices: {
          A: 'Oligohydramnios with bilateral renal agenesis',
          B: 'Polyhydramnios with a distended stomach',
          C: 'Normal amniotic fluid volume with a four-chamber heart view',
          D: 'Mediastinal shift with bowel loops visible in the thorax and polyhydramnios',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Antenatal ultrasound findings suggestive of CDH include bowel loops or liver visible within the thorax, mediastinal shift with displacement of the heart, and polyhydramnios (due to esophageal compression preventing fetal swallowing of amniotic fluid).',
        explanationWrong:
          'Oligohydramnios with bilateral renal agenesis suggests Potter syndrome. Polyhydramnios with distended stomach suggests esophageal obstruction. Normal amniotic fluid with a four-chamber heart view is a routine normal finding.',
        topic: 'Congenital Anomalies',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          'A premature infant born at 28 weeks gestation develops a hemodynamically significant PDA. The infant fails two courses of indomethacin. Before proceeding to surgical ligation, which alternative pharmacologic agent may be considered?',
        choices: {
          A: 'Prostaglandin E1',
          B: 'Acetaminophen (paracetamol)',
          C: 'Milrinone',
          D: 'Dopamine',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Acetaminophen (paracetamol) has emerged as an alternative to indomethacin and ibuprofen for PDA closure. It inhibits the peroxidase component of prostaglandin synthase, reducing prostaglandin production with fewer renal and gastrointestinal side effects than traditional COX inhibitors.',
        explanationWrong:
          'Prostaglandin E1 maintains ductal patency, the opposite of the goal. Milrinone is a phosphodiesterase-3 inhibitor used for cardiac support, not PDA closure. Dopamine is a vasopressor used for hemodynamic support and does not promote ductal closure.',
        topic: 'Neonatal Pharmacology',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          'A premature neonate in an open radiant warmer is at risk for insensible water loss. Which factor most contributes to increased insensible water loss in this situation?',
        choices: {
          A: 'The infant\'s mature, keratinized skin barrier',
          B: 'The high ambient humidity of the radiant warmer',
          C: 'The radiant heat source increases evaporative losses from the immature skin',
          D: 'The closed environment of the radiant warmer reduces air circulation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Radiant warmers increase insensible water loss by up to 50% compared to incubators because the radiant heat accelerates evaporation from the skin surface. Premature infants have thin, poorly keratinized skin that is highly permeable to water loss, making this effect even more pronounced.',
        explanationWrong:
          'Premature infants have immature, poorly keratinized skin, not mature skin. Radiant warmers are open systems that do not provide humidity. Radiant warmers are open, not closed environments, and have significant air circulation.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          'A surfactant preparation that contains surfactant proteins SP-B and SP-C in addition to phospholipids is classified as which type?',
        choices: {
          A: 'Natural (animal-derived) surfactant',
          B: 'First-generation synthetic surfactant',
          C: 'Protein-free synthetic surfactant',
          D: 'Semi-synthetic surfactant',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Natural (animal-derived) surfactants such as beractant (Survanta, bovine) and poractant alfa (Curosurf, porcine) contain surfactant proteins SP-B and SP-C extracted from animal lung tissue along with phospholipids. These proteins are essential for proper surfactant spreading and surface tension reduction.',
        explanationWrong:
          'First-generation synthetic surfactants (e.g., Exosurf) do not contain surfactant proteins. Protein-free synthetic surfactants by definition lack surfactant proteins. Semi-synthetic surfactant is not a standard classification in clinical practice.',
        topic: 'Surfactant Therapy',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          'A neonate with meconium aspiration syndrome is receiving mechanical ventilation. The respiratory therapist observes increasing auto-PEEP and bilateral hyperinflation on chest radiograph. Which ventilator adjustment would best address this problem?',
        choices: {
          A: 'Increase the PEEP to match the auto-PEEP level',
          B: 'Increase the respiratory rate to improve minute ventilation',
          C: 'Increase the inspiratory time to deliver more tidal volume',
          D: 'Decrease the respiratory rate and increase the expiratory time',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Auto-PEEP and air trapping in MAS result from the ball-valve obstruction of the airways by meconium. Decreasing the respiratory rate increases the expiratory time, allowing more complete exhalation and reducing gas trapping and auto-PEEP.',
        explanationWrong:
          'Matching PEEP to auto-PEEP is sometimes used in adult patients but is not the primary strategy in neonatal MAS with active air trapping. Increasing the rate would further shorten expiratory time and worsen trapping. Increasing inspiratory time would also shorten expiratory time.',
        topic: 'Meconium Aspiration Syndrome',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          'A 1-year-old child is brought to the emergency department with sudden onset of choking, coughing, and unilateral wheezing after playing with small toys. Chest radiograph shows unilateral hyperinflation. What is the most likely diagnosis?',
        choices: {
          A: 'Acute asthma exacerbation',
          B: 'Foreign body aspiration',
          C: 'Viral bronchiolitis',
          D: 'Pneumonia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The sudden onset of choking and coughing while playing with small objects, combined with unilateral wheezing and hyperinflation on chest radiograph, is classic for foreign body aspiration. The foreign body creates a ball-valve obstruction causing air trapping distal to the obstruction.',
        explanationWrong:
          'Asthma typically presents with bilateral wheezing, not sudden onset unilateral wheezing. Viral bronchiolitis has a gradual onset with URI prodrome and bilateral findings. Pneumonia presents with consolidation, not unilateral hyperinflation.',
        topic: 'Pediatric Airway Anatomy Differences',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          'A premature neonate at 29 weeks gestation is being managed in a humidified isolette set to 80% humidity. What is the primary benefit of high humidity in the isolette for this infant?',
        choices: {
          A: 'To facilitate medication delivery through the skin',
          B: 'To prevent nosocomial infections',
          C: 'To reduce transepidermal water loss and maintain fluid and electrolyte balance',
          D: 'To increase the infant\'s core body temperature',
        },
        correctChoice: 'C',
        explanationCorrect:
          'High humidity (70-80%) in the isolette reduces transepidermal water loss (TEWL) in premature infants whose thin, immature skin has minimal epidermal barrier function. This helps maintain fluid balance, prevents hypernatremia, and reduces the need for excessive IV fluid administration.',
        explanationWrong:
          'High humidity is not used for transdermal medication delivery. While infection control is important, high humidity does not prevent nosocomial infections and can potentially promote microbial growth if not managed properly. High humidity helps prevent heat loss but does not directly increase core body temperature.',
        topic: 'Thermoregulation and Neutral Thermal Environment',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 5 seeded (20 questions, isFree: false)')

  console.log('Done seeding NPS mini exams 1-5!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
