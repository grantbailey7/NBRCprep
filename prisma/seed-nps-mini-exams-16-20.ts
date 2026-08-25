import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 16-20...')

  // ─── EXAM 16 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric tracheostomy care and home ventilation, Neonatal/pediatric radiographic interpretation
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q18) B=5(Q3,Q7,Q11,Q16,Q19) C=5(Q2,Q8,Q12,Q15,Q20) D=5(Q4,Q5,Q9,Q13,Q17)
  const exam16 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 16',
      examIndex: 16,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam16.id,
        questionIndex: 1,
        questionText:
          'A 3-year-old with a tracheostomy is being discharged home on a portable ventilator. The respiratory therapist is educating the caregivers on emergency equipment that must be available at all times. Which item is MOST critical to have at the bedside?',
        choices: {
          A: 'A replacement tracheostomy tube of the same size and one size smaller',
          B: 'A pulse oximeter with continuous recording capability',
          C: 'A portable suction unit with sterile technique supplies',
          D: 'An extra ventilator circuit with heated humidifier',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Having a replacement tracheostomy tube of the same size and one size smaller is the most critical bedside emergency item. Accidental decannulation is a life-threatening emergency, and immediate reinsertion is required. A smaller tube is kept available in case the stoma has narrowed and the same-size tube cannot be passed.',
        explanationWrong:
          'While a pulse oximeter, portable suction unit, and extra circuit are all important components of home tracheostomy care, the replacement tracheostomy tubes are the single most critical item because airway loss without immediate replacement can be fatal within minutes.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 2,
        questionText:
          'A neonatal chest radiograph shows a diffuse, bilateral reticulogranular pattern with low lung volumes and air bronchograms. The infant is 30 weeks gestational age. What is the most likely diagnosis?',
        choices: {
          A: 'Transient tachypnea of the newborn',
          B: 'Pneumothorax',
          C: 'Respiratory distress syndrome',
          D: 'Meconium aspiration syndrome',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The combination of a diffuse reticulogranular (ground-glass) pattern, low lung volumes, and air bronchograms in a premature infant is the classic radiographic presentation of respiratory distress syndrome caused by surfactant deficiency.',
        explanationWrong:
          'Transient tachypnea of the newborn shows perihilar streaking, fluid in the fissures, and hyperinflation. Pneumothorax presents with lucency and absence of lung markings. Meconium aspiration shows coarse, patchy infiltrates with hyperinflation, typically in term or post-term infants.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 3,
        questionText:
          'A 6-year-old child with a cuffed tracheostomy tube is on home mechanical ventilation for neuromuscular weakness. The caregiver reports frequent high-pressure alarms. What should the respiratory therapist assess first?',
        choices: {
          A: 'Tracheostomy tube for mucus plugging or obstruction',
          B: 'Ventilator circuit for malfunction',
          C: 'Cuff pressure for overinflation',
          D: 'Patient compliance with the ventilator',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The most common cause of high-pressure alarms in a tracheostomy patient on home ventilation is mucus plugging or partial obstruction of the tracheostomy tube. Suctioning the airway should be the first intervention. If suctioning does not resolve the alarm, the tube may need to be replaced.',
        explanationWrong:
          'While ventilator circuit malfunction, cuff overinflation, and patient-ventilator asynchrony can all cause high-pressure alarms, mucus plugging is the most frequent cause in tracheostomy patients and should be assessed first by attempting to pass a suction catheter.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 4,
        questionText:
          'On a pediatric chest radiograph, the tip of a properly positioned endotracheal tube should be located at which anatomical landmark?',
        choices: {
          A: 'At the level of the carina',
          B: 'At the thoracic inlet (T1)',
          C: 'At the level of the aortic arch',
          D: 'Midway between the thoracic inlet and the carina, approximately at T2-T3',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In pediatric patients, the ETT tip should be positioned midway between the thoracic inlet (vocal cords) and the carina, approximately at the level of T2-T3. This position allows for some movement with head flexion and extension without the tube advancing into a mainstem bronchus or becoming displaced above the glottis.',
        explanationWrong:
          'Positioning at the carina risks endobronchial intubation with head flexion. The thoracic inlet is too high and risks accidental extubation. The aortic arch is an adult landmark; in pediatrics, the midtracheal position at T2-T3 is preferred.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 5,
        questionText:
          'A 2-year-old with a tracheostomy is noted to have granulation tissue forming at the stoma site. Which intervention is most appropriate for managing this complication?',
        choices: {
          A: 'Immediate surgical revision of the tracheostomy',
          B: 'Application of systemic antibiotics',
          C: 'Increasing the tracheostomy tube size to apply more pressure',
          D: 'Topical silver nitrate application to cauterize the granulation tissue',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Granulation tissue at the tracheostomy stoma is a common complication. First-line management includes topical application of silver nitrate to cauterize the tissue. Keeping the stoma clean and dry, using properly fitted tracheostomy ties, and minimizing tube movement also help prevent recurrence.',
        explanationWrong:
          'Surgical revision is reserved for severe or refractory cases. Systemic antibiotics are not indicated for granulation tissue unless there is concurrent infection. Increasing the tube size would worsen the problem by creating more friction and pressure on the stoma.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 6,
        questionText:
          'A chest radiograph of a neonate shows a large, air-filled structure in the left hemithorax with mediastinal shift to the right and absence of visible left lung parenchyma. Which condition is most consistent with these findings?',
        choices: {
          A: 'Left-sided pneumothorax',
          B: 'Congenital pulmonary airway malformation (CPAM)',
          C: 'Left-sided congenital diaphragmatic hernia',
          D: 'Congenital lobar emphysema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A large, air-filled cystic structure occupying the left hemithorax with mediastinal shift is characteristic of congenital pulmonary airway malformation (CPAM), formerly called congenital cystic adenomatoid malformation (CCAM). Type 1 CPAM presents with large cysts that can mimic pneumothorax on radiograph.',
        explanationWrong:
          'Left-sided pneumothorax would show absence of lung markings peripherally but no cystic structure. CDH would show bowel loops (not a single large air-filled structure) in the thorax. Congenital lobar emphysema shows hyperinflation of a lobe with compressed surrounding tissue but not a single large cyst.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 7,
        questionText:
          'A child on home ventilation via tracheostomy requires humidification of inspired gases. Which humidification system is most commonly used for pediatric home ventilation?',
        choices: {
          A: 'Large-volume jet nebulizer',
          B: 'Heated humidifier with a heated wire circuit',
          C: 'Cool mist humidifier placed near the bedside',
          D: 'Heat and moisture exchanger (HME) filter used continuously',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A heated humidifier with a heated wire circuit is the standard of care for home ventilation via tracheostomy. The heated wire in the circuit prevents condensation (rain-out) in the tubing while maintaining adequate temperature and humidity at the airway.',
        explanationWrong:
          'Large-volume jet nebulizers are used in acute care settings, not home ventilation. Room humidifiers do not deliver adequate humidity to the artificial airway. HMEs are suitable for short-term use or transport but are not recommended for continuous use in pediatric patients due to increased resistance and dead space.',
        topic: 'Pediatric Home Ventilation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 8,
        questionText:
          'A pediatric chest radiograph reveals opacification of the right hemithorax with a meniscus sign. No air bronchograms are visible. What is the most likely finding?',
        choices: {
          A: 'Right lower lobe pneumonia',
          B: 'Right-sided atelectasis',
          C: 'Right-sided pneumothorax',
          D: 'Right-sided pleural effusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Opacification of a hemithorax with a meniscus sign (a curved upper border that is higher laterally than medially) is the classic radiographic appearance of a pleural effusion. The absence of air bronchograms helps distinguish effusion from consolidation.',
        explanationWrong:
          'Pneumonia typically shows air bronchograms within the consolidation. Atelectasis shows volume loss with mediastinal shift toward the affected side. Pneumothorax shows increased lucency (not opacification) with absence of lung markings.',
        topic: 'Pediatric Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 9,
        questionText:
          'When selecting a tracheostomy tube for a pediatric patient, the respiratory therapist considers the outer diameter relative to the tracheal lumen. What percentage of the tracheal lumen should the outer diameter of the tracheostomy tube occupy?',
        choices: {
          A: 'Approximately 90-95% to create an adequate seal',
          B: 'Approximately 50-60% to allow for growth',
          C: 'Approximately 80-85% to minimize air leak',
          D: 'Approximately two-thirds (66-75%) of the tracheal lumen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The outer diameter of a pediatric tracheostomy tube should occupy approximately two-thirds of the tracheal lumen. This allows an adequate air leak around the tube for phonation and cough clearance while still maintaining effective ventilation and airway patency.',
        explanationWrong:
          'A tube occupying 90-95% would be too large, causing tracheal mucosal damage and stenosis. 50-60% would be too small, resulting in excessive air leak and ineffective ventilation. 80-85% is slightly too large for routine use and increases the risk of tracheal injury.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 10,
        questionText:
          'A neonatal chest radiograph shows a coiled orogastric tube in the upper esophageal pouch with gas in the distal bowel. Which congenital anomaly is most consistent with this finding?',
        choices: {
          A: 'Esophageal atresia with distal tracheoesophageal fistula (Type C)',
          B: 'Isolated esophageal atresia without fistula (Type A)',
          C: 'H-type tracheoesophageal fistula without atresia',
          D: 'Esophageal atresia with proximal fistula (Type B)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A coiled feeding tube in the upper esophageal pouch indicates esophageal atresia. The presence of gas in the distal bowel confirms a distal tracheoesophageal fistula (Type C), which allows air to pass from the trachea into the distal esophagus and stomach. Type C is the most common variant, accounting for approximately 85% of cases.',
        explanationWrong:
          'Isolated esophageal atresia (Type A) would show no gas in the distal bowel because there is no fistula connecting the airway to the GI tract. H-type fistula does not have atresia, so the feeding tube would pass normally. Type B with proximal fistula would also show no distal bowel gas.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 11,
        questionText:
          'A 4-year-old with a tracheostomy is being evaluated for decannulation readiness. Which assessment is essential before removing the tracheostomy tube?',
        choices: {
          A: 'Performing a capping trial to assess the ability to breathe around and above the tube',
          B: 'Confirming the child can tolerate oral feedings without aspiration',
          C: 'Verifying the child has outgrown the need for nighttime ventilation only',
          D: 'Ensuring the child can speak clearly with the tracheostomy tube in place',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A capping trial (or downsizing and capping) is essential before decannulation. The tracheostomy tube is capped to occlude it, forcing the child to breathe through the upper airway around and above the tube. This confirms upper airway patency and the ability to maintain adequate ventilation and oxygenation without the artificial airway.',
        explanationWrong:
          'While swallowing assessment is important, it alone does not confirm airway patency. Outgrowing nighttime ventilation addresses ventilatory needs but not airway competence. Speaking with the tube in place uses a speaking valve, which does not fully test the ability to breathe without the tracheostomy.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 12,
        questionText:
          'A premature infant has a chest radiograph showing bilateral diffuse haziness that is slightly coarser than typical RDS, with the cardiac silhouette appearing normal. The infant is 5 days old and was previously improving on CPAP. This radiographic change most likely represents which condition?',
        choices: {
          A: 'Worsening RDS',
          B: 'Patent ductus arteriosus with pulmonary edema',
          C: 'Evolving bronchopulmonary dysplasia',
          D: 'Congenital pneumonia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In a premature infant who was improving from RDS but develops new bilateral diffuse haziness by day 5-7 of life, evolving bronchopulmonary dysplasia (BPD) should be suspected. The radiographic appearance transitions from the ground-glass pattern of RDS to a coarser, more bubbly pattern as BPD develops.',
        explanationWrong:
          'RDS typically improves by day 3-5 as endogenous surfactant production increases; worsening at this stage suggests a different process. PDA with pulmonary edema would show cardiomegaly and increased pulmonary vascular markings. Congenital pneumonia would present earlier and typically with focal or lobar consolidation.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 13,
        questionText:
          'A pediatric patient on home ventilation via tracheostomy experiences a power outage. The ventilator backup battery is depleted. What should the caregiver do?',
        choices: {
          A: 'Wait for power to be restored while monitoring the child',
          B: 'Remove the tracheostomy tube to allow the child to breathe spontaneously',
          C: 'Provide manual ventilation with a self-inflating resuscitation bag connected to the tracheostomy',
          D: 'Attempt to restart the ventilator by rapidly cycling the power switch',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When the ventilator fails and backup battery is depleted, the caregiver must immediately provide manual ventilation using a self-inflating resuscitation bag connected directly to the tracheostomy tube. This is a core competency for all caregivers of ventilator-dependent children at home.',
        explanationWrong:
          'Waiting for power restoration could result in respiratory failure. Removing the tracheostomy tube eliminates the established airway. Rapidly cycling the power switch will not restore function without electrical power and delays appropriate intervention.',
        topic: 'Pediatric Home Ventilation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 14,
        questionText:
          'A neonatal chest radiograph shows an umbilical venous catheter (UVC) tip. Where should the UVC tip ideally be positioned?',
        choices: {
          A: 'At the junction of the inferior vena cava and the right atrium, above the level of the diaphragm',
          B: 'In the left atrium',
          C: 'In the portal vein',
          D: 'In the descending aorta at T6-T10',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The ideal position for a UVC tip is at the junction of the inferior vena cava (IVC) and the right atrium, which on a chest radiograph corresponds to just above the level of the diaphragm. This position allows safe administration of fluids and medications while avoiding intracardiac placement.',
        explanationWrong:
          'Left atrial placement indicates the catheter has crossed through a patent foramen ovale, which increases the risk of thromboembolism. Portal vein placement can lead to hepatic complications. The descending aorta is the appropriate landmark for an umbilical arterial catheter, not a venous catheter.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 15,
        questionText:
          'A 10-year-old child with a tracheostomy and chronic ventilator dependence is transitioning to a speaking valve. Which condition must be met before placing a one-way speaking valve on the tracheostomy?',
        choices: {
          A: 'The child must be on high PEEP settings to prevent air leak',
          B: 'The ventilator must be set to volume-control mode only',
          C: 'The tracheostomy cuff must be fully deflated to allow exhaled air to pass around the tube and through the upper airway',
          D: 'The child must be fully sedated to prevent anxiety during initial use',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A one-way speaking valve (such as a Passy-Muir valve) directs inspired air through the tracheostomy tube but closes on exhalation, forcing exhaled air around the tube, through the vocal cords, and out the mouth and nose. The cuff must be fully deflated to allow this exhaled airflow to pass around the tube.',
        explanationWrong:
          'High PEEP is not required and could be contraindicated. The valve can be used with various ventilator modes, not just volume control. Sedation is not appropriate; the child needs to be awake and alert to participate in vocalization and assess tolerance.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 16,
        questionText:
          'A pediatric chest radiograph shows bilateral perihilar linear opacities with fluid in the minor fissure in a full-term neonate who was delivered by cesarean section. The infant has tachypnea but is otherwise stable. What is the most likely diagnosis?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Transient tachypnea of the newborn',
          C: 'Neonatal pneumonia',
          D: 'Congenital heart disease with pulmonary edema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Bilateral perihilar streaking, fluid in the fissures, and mild hyperinflation in a full-term infant delivered by cesarean section is the classic presentation of transient tachypnea of the newborn (TTN). Cesarean delivery is a risk factor because the infant misses the thoracic squeeze during vaginal delivery that helps clear fetal lung fluid.',
        explanationWrong:
          'RDS shows a ground-glass pattern and low lung volumes in premature infants. Neonatal pneumonia typically shows focal consolidation or patchy infiltrates. Congenital heart disease with pulmonary edema would show cardiomegaly and prominent pulmonary vasculature.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 17,
        questionText:
          'A child on a home ventilator has settings of pressure control 18 cmH2O, PEEP 5, rate 14, and FiO2 0.30. During a home visit, the respiratory therapist notes the child has grown significantly. Exhaled tidal volumes have decreased from 200 mL to 140 mL. What is the most appropriate action?',
        choices: {
          A: 'Increase the FiO2 to compensate for the decreased tidal volume',
          B: 'Add a second ventilator for nighttime use',
          C: 'Decrease the PEEP to reduce mean airway pressure',
          D: 'Increase the pressure control setting to restore adequate tidal volume for the child\'s growth',
        },
        correctChoice: 'D',
        explanationCorrect:
          'As a child grows, pulmonary compliance and airway resistance change, and the ventilator settings must be adjusted accordingly. In pressure-control ventilation, a decrease in delivered tidal volume despite the same pressure settings suggests that the child has outgrown the current settings, and the driving pressure should be increased to restore appropriate tidal volumes.',
        explanationWrong:
          'Increasing FiO2 addresses oxygenation but not ventilation adequacy. Adding a second ventilator does not address the underlying settings issue. Decreasing PEEP could worsen oxygenation without addressing the inadequate tidal volume.',
        topic: 'Pediatric Home Ventilation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 18,
        questionText:
          'A neonatal chest radiograph obtained after intubation shows the endotracheal tube tip at the level of T1. The infant\'s head is in a neutral position. What action should the respiratory therapist take?',
        choices: {
          A: 'No adjustment needed; the tube is properly positioned',
          B: 'Advance the ETT approximately 1-2 cm to position the tip at the mid-trachea',
          C: 'Withdraw the ETT 1 cm to position it above the thoracic inlet',
          D: 'Remove the ETT and reintubate with a larger size',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In neonates, the ETT tip at T1 is positioned too high (at the thoracic inlet) and risks accidental extubation with head movement. The ideal position is mid-trachea at T2-T3, midway between the thoracic inlet and the carina. The tube should be advanced 1-2 cm to achieve proper positioning.',
        explanationWrong:
          'The tube at T1 is not properly positioned; it is too high. Withdrawing the tube would move it further out of position. There is no indication to change tube size based on positioning alone.',
        topic: 'Neonatal Radiographic Interpretation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 19,
        questionText:
          'During routine tracheostomy care for a pediatric patient, the caregiver notices blood-tinged secretions and excoriation around the stoma. Which nursing/respiratory care intervention should be implemented?',
        choices: {
          A: 'Apply a topical antibiotic ointment inside the tracheostomy tube',
          B: 'Ensure proper tracheostomy tie tension (one finger should fit between the tie and the neck), clean the stoma with half-strength hydrogen peroxide, and apply a foam tracheostomy dressing',
          C: 'Immediately remove the tracheostomy tube for stoma inspection',
          D: 'Increase suctioning frequency to keep the stoma clean',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Stoma excoriation is often caused by moisture, friction, or improper tie tension. Proper management includes ensuring ties are snug (one finger space), gentle cleaning with half-strength hydrogen peroxide or normal saline, and using a tracheostomy foam dressing to absorb moisture and reduce friction.',
        explanationWrong:
          'Applying ointment inside the tube could cause airway obstruction. Removing the tube for inspection risks accidental decannulation. Increasing suctioning frequency would cause additional trauma and irritation.',
        topic: 'Pediatric Tracheostomy Care',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 20,
        questionText:
          'A pediatric chest radiograph of a 3-year-old shows complete opacification of the left hemithorax with mediastinal shift toward the left side. Which finding is most consistent with this radiographic appearance?',
        choices: {
          A: 'Large left-sided pleural effusion',
          B: 'Left-sided tension pneumothorax',
          C: 'Left lung atelectasis',
          D: 'Left lower lobe pneumonia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Complete opacification of a hemithorax with mediastinal shift toward the affected side indicates volume loss, which is consistent with complete lung atelectasis. The mediastinum shifts toward the collapsed lung because of the negative pressure created by the loss of volume.',
        explanationWrong:
          'A large pleural effusion would cause mediastinal shift away from the affected side due to the space-occupying effect of the fluid. Tension pneumothorax would show increased lucency (not opacification) with mediastinal shift away. Pneumonia typically does not cause complete opacification of an entire hemithorax with mediastinal shift.',
        topic: 'Pediatric Radiographic Interpretation',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 16 seeded (20 questions, isFree: false)')

  // ─── EXAM 17 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric sleep-disordered breathing, Neurologically impaired pediatric patients
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q15,Q19) B=5(Q1,Q8,Q11,Q14,Q20) C=5(Q3,Q6,Q13,Q17,Q18) D=5(Q4,Q7,Q10,Q12,Q16)
  const exam17 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 17',
      examIndex: 17,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam17.id,
        questionIndex: 1,
        questionText:
          'A 5-year-old child presents with snoring, witnessed apneic episodes during sleep, daytime somnolence, and behavioral problems at school. The pediatrician orders a polysomnography (PSG). What is the diagnostic threshold for obstructive sleep apnea in pediatric patients?',
        choices: {
          A: 'Apnea-hypopnea index (AHI) greater than 15 events per hour',
          B: 'Apnea-hypopnea index (AHI) greater than 1 event per hour',
          C: 'Oxygen desaturation index greater than 20 events per hour',
          D: 'Central apnea index greater than 10 events per hour',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In pediatric patients, an AHI greater than 1 event per hour on polysomnography is considered diagnostic of obstructive sleep apnea. This threshold is significantly lower than the adult criterion (AHI >5) because children normally have very few apneic events during sleep.',
        explanationWrong:
          'An AHI greater than 15 is the threshold for severe OSA in adults, not the diagnostic threshold in pediatrics. Oxygen desaturation index alone is not the primary diagnostic criterion. Central apnea index greater than 10 would indicate central sleep apnea, a different condition.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 2,
        questionText:
          'A 4-year-old with adenotonsillar hypertrophy has been diagnosed with moderate obstructive sleep apnea (AHI 8). What is the first-line treatment for this condition?',
        choices: {
          A: 'Adenotonsillectomy',
          B: 'Continuous positive airway pressure (CPAP) therapy',
          C: 'Weight loss and positional therapy',
          D: 'Intranasal corticosteroids as monotherapy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Adenotonsillectomy is the first-line treatment for pediatric obstructive sleep apnea when adenotonsillar hypertrophy is present. It resolves OSA in approximately 75-80% of otherwise healthy children. A follow-up PSG is recommended 6-8 weeks postoperatively to confirm resolution.',
        explanationWrong:
          'CPAP is typically reserved for children who are not surgical candidates, who have residual OSA after adenotonsillectomy, or who have OSA without adenotonsillar hypertrophy. Weight loss is adjunctive for obese children but is not first-line. Intranasal corticosteroids may be used for mild OSA or as adjunctive therapy.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 3,
        questionText:
          'A 12-year-old with severe cerebral palsy (GMFCS level V) has recurrent pneumonias. A videofluoroscopic swallow study reveals silent aspiration. Which respiratory management strategy is most appropriate?',
        choices: {
          A: 'Oral antibiotics for each pneumonia episode',
          B: 'Chest physiotherapy with postural drainage only',
          C: 'NPO status with gastrostomy tube placement and a comprehensive airway clearance program',
          D: 'Thickened liquids administered orally with close monitoring',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Silent aspiration (aspiration without a visible cough reflex) confirmed on videofluoroscopic swallow study in a severely neurologically impaired child warrants cessation of oral feeding (NPO), placement of a gastrostomy tube for nutrition, and implementation of a comprehensive airway clearance program including chest physiotherapy, suctioning, and possibly mechanical insufflation-exsufflation.',
        explanationWrong:
          'Treating each pneumonia with antibiotics does not address the ongoing aspiration. Chest physiotherapy alone without addressing the aspiration source is insufficient. Thickened liquids do not prevent silent aspiration, as the child has no protective cough reflex.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 4,
        questionText:
          'During polysomnography of a 7-year-old child, the technician observes episodes of airflow cessation lasting 10 seconds with continued chest wall and abdominal movement. These events are classified as which type of apnea?',
        choices: {
          A: 'Central apnea',
          B: 'Mixed apnea',
          C: 'Hypopnea',
          D: 'Obstructive apnea',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Obstructive apnea is defined as cessation of airflow despite continued respiratory effort (chest wall and abdominal movement). The ongoing effort to breathe against a closed or narrowed upper airway distinguishes obstructive from central apnea, in which respiratory effort is absent.',
        explanationWrong:
          'Central apnea shows cessation of both airflow and respiratory effort. Mixed apnea begins as central (no effort) and transitions to obstructive (effort without flow). Hypopnea is a reduction in airflow (not complete cessation) with associated desaturation or arousal.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 5,
        questionText:
          'A 10-year-old with Duchenne muscular dystrophy has a forced vital capacity of 40% predicted. Overnight oximetry shows recurrent desaturations. The most appropriate next step is to initiate which intervention?',
        choices: {
          A: 'Nocturnal noninvasive positive pressure ventilation (NIV) via bilevel PAP',
          B: 'Daytime supplemental oxygen via nasal cannula',
          C: 'Inhaled bronchodilator therapy',
          D: 'Referral for tracheostomy placement',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Children with Duchenne muscular dystrophy and an FVC below 50% predicted with nocturnal desaturations benefit from nocturnal noninvasive ventilation (NIV), typically bilevel positive airway pressure. NIV supports the weakening respiratory muscles during sleep, improves gas exchange, and delays the need for invasive ventilation.',
        explanationWrong:
          'Supplemental oxygen alone does not address the hypoventilation and may worsen CO2 retention by blunting the hypoxic drive. Bronchodilators are not effective for neuromuscular weakness. Tracheostomy is reserved for later stages when NIV is no longer sufficient or tolerated.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 6,
        questionText:
          'A 3-year-old child with Down syndrome is being evaluated for obstructive sleep apnea. Which anatomical factor contributes most significantly to the increased prevalence of OSA in children with Down syndrome?',
        choices: {
          A: 'Elongated soft palate',
          B: 'Narrow nasal passages only',
          C: 'Relative macroglossia with midface hypoplasia and a small upper airway',
          D: 'Enlarged epiglottis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Children with Down syndrome have multiple anatomical risk factors for OSA, including relative macroglossia (large tongue relative to the oral cavity), midface hypoplasia (underdeveloped midface), a small upper airway, and generalized hypotonia. These factors combine to significantly increase the prevalence of OSA in this population (50-80%).',
        explanationWrong:
          'While soft palate abnormalities may contribute, the predominant factors are macroglossia and midface hypoplasia. Narrow nasal passages alone do not account for the high prevalence. Enlarged epiglottis is not characteristic of Down syndrome.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 7,
        questionText:
          'A neurologically impaired child with severe scoliosis and chronic respiratory insufficiency is being evaluated for long-term ventilatory support. Pulmonary function testing reveals a severely restrictive pattern. Which lung volume is most significantly affected by the scoliosis?',
        choices: {
          A: 'Residual volume',
          B: 'Expiratory reserve volume',
          C: 'Functional residual capacity',
          D: 'Total lung capacity',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Severe scoliosis restricts chest wall expansion, directly reducing total lung capacity (TLC). The spinal deformity limits thoracic cage movement and compresses lung parenchyma, resulting in a restrictive ventilatory defect characterized by reduced TLC, vital capacity, and inspiratory capacity.',
        explanationWrong:
          'Residual volume may be relatively preserved or even mildly increased due to air trapping from small airway compression. Expiratory reserve volume and functional residual capacity are affected but are not the most significantly reduced volumes in severe scoliosis.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 8,
        questionText:
          'A 6-year-old child undergoes adenotonsillectomy for OSA but continues to have an AHI of 6 on follow-up polysomnography. The child is not obese. What is the most appropriate next step?',
        choices: {
          A: 'Repeat adenotonsillectomy',
          B: 'Initiate CPAP therapy titrated during an in-laboratory polysomnography',
          C: 'Prescribe positional therapy (avoid supine sleeping)',
          D: 'Observation for 6 months and repeat PSG',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When a non-obese child has persistent moderate OSA (AHI >5) after adenotonsillectomy, CPAP therapy is the recommended next step. The CPAP pressure should be titrated during an in-laboratory polysomnography to determine the optimal therapeutic pressure.',
        explanationWrong:
          'Repeat adenotonsillectomy is not standard practice and is unlikely to resolve residual OSA. Positional therapy alone is insufficient for moderate OSA. Observation without treatment allows continued nocturnal hypoxemia and sleep disruption that can impair neurocognitive development.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 9,
        questionText:
          'A child with spinal muscular atrophy type II has difficulty clearing secretions. The respiratory therapist recommends a mechanical insufflation-exsufflation (MI-E) device. What is the mechanism of action of this device?',
        choices: {
          A: 'It delivers a deep insufflation followed by a rapid exsufflation (negative pressure) to simulate a cough',
          B: 'It provides continuous high-frequency chest wall oscillation',
          C: 'It delivers aerosolized hypertonic saline to thin secretions',
          D: 'It applies sustained positive pressure to prevent atelectasis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The MI-E device (commonly known as CoughAssist) delivers a deep positive-pressure insufflation to the lungs followed by a rapid switch to negative pressure (exsufflation). This pressure swing simulates the high expiratory flow rates of a natural cough, mobilizing secretions from the lower airways.',
        explanationWrong:
          'High-frequency chest wall oscillation is a different airway clearance modality (vest therapy). Hypertonic saline nebulization is used as an adjunct but is a separate intervention. Sustained positive pressure (CPAP) prevents atelectasis but does not generate the cough-like flow needed for secretion clearance.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 10,
        questionText:
          'An infant born at term is diagnosed with Pierre Robin sequence and presents with severe obstructive sleep apnea. What anatomical feature is the primary cause of the airway obstruction?',
        choices: {
          A: 'Laryngomalacia causing supraglottic collapse',
          B: 'Choanal atresia',
          C: 'Tracheomalacia',
          D: 'Glossoptosis (posterior displacement of the tongue) due to micrognathia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pierre Robin sequence consists of micrognathia (small jaw), glossoptosis (posterior displacement of the tongue), and often a U-shaped cleft palate. The small mandible does not provide adequate support for the tongue, which falls posteriorly and obstructs the oropharyngeal airway, especially in the supine position.',
        explanationWrong:
          'Laryngomalacia causes stridor but is a separate condition involving supraglottic collapse. Choanal atresia is a nasal obstruction, not oropharyngeal. Tracheomalacia involves the tracheal wall and is not the primary issue in Pierre Robin sequence.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 11,
        questionText:
          'A 15-year-old with quadriplegic cerebral palsy and chronic aspiration has progressive respiratory decline. The family asks about options to improve quality of life. The care team recommends lung recruitment strategies. Which technique is most appropriate for this patient?',
        choices: {
          A: 'High-frequency oscillatory ventilation',
          B: 'Breath-stacking with a manual resuscitation bag to achieve maximum insufflation capacity',
          C: 'Prone positioning for 16 hours per day',
          D: 'Chest tube placement for recurrent effusions',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Breath-stacking involves delivering successive breaths with a manual resuscitation bag (or using NIV) without allowing exhalation between breaths, progressively inflating the lungs to achieve maximum insufflation capacity. This technique recruits collapsed alveoli, improves lung compliance, and enhances subsequent cough effectiveness in neurologically impaired patients.',
        explanationWrong:
          'HFOV is an acute care ventilatory modality, not a lung recruitment strategy for chronic care. Prolonged prone positioning is challenging and impractical for a quadriplegic patient. Chest tube placement is an invasive procedure for specific indications, not a routine recruitment strategy.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 12,
        questionText:
          'A pediatric sleep study report describes a child with an elevated respiratory disturbance index, predominantly during REM sleep, with associated oxygen desaturations below 90%. The most likely explanation for the REM-predominant pattern is:',
        choices: {
          A: 'Increased upper airway tone during REM sleep',
          B: 'Enhanced central respiratory drive during REM',
          C: 'Increased diaphragmatic activity during REM compensating for chest wall hypotonia',
          D: 'Loss of accessory muscle tone during REM sleep, leaving the diaphragm as the sole respiratory pump',
        },
        correctChoice: 'D',
        explanationCorrect:
          'During REM sleep, there is generalized skeletal muscle atonia except for the diaphragm and extraocular muscles. This means the intercostal and accessory respiratory muscles lose tone, leaving the diaphragm as the sole active respiratory pump. In children with borderline respiratory reserve, this loss of accessory muscle support unmasks hypoventilation during REM.',
        explanationWrong:
          'Upper airway tone decreases (not increases) during REM. Central respiratory drive is not enhanced during REM and may be more irregular. The diaphragm maintains its activity but cannot compensate for the loss of all other respiratory muscle support.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 13,
        questionText:
          'A child with a severe traumatic brain injury is being mechanically ventilated. The respiratory therapist notes a pattern of irregular breathing with clusters of breaths separated by apneic pauses. This pattern is most consistent with which type of abnormal breathing?',
        choices: {
          A: 'Biot (cluster) breathing',
          B: 'Apneustic breathing',
          C: 'Cheyne-Stokes respiration',
          D: 'Central neurogenic hyperventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Biot breathing (also called cluster breathing or ataxic breathing) consists of irregular clusters of breaths of variable depth separated by irregular apneic periods. It is associated with damage to the medullary respiratory center and is a sign of severe brainstem dysfunction.',
        explanationWrong:
          'Cheyne-Stokes respiration has a regular crescendo-decrescendo pattern with regular apneic pauses and is associated with bilateral hemispheric or diencephalic lesions. Apneustic breathing is characterized by prolonged inspiratory gasps. Central neurogenic hyperventilation involves sustained rapid, deep breathing.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 14,
        questionText:
          'A 2-year-old child with severe OSA is started on CPAP therapy at home. The parents report the child pulls off the mask every night. Which interface modification is most likely to improve adherence in this age group?',
        choices: {
          A: 'Switch from nasal mask to a full-face mask',
          B: 'Use a properly fitted nasal mask with a desensitization/behavioral program involving gradual introduction during play and positive reinforcement',
          C: 'Apply adhesive tape to secure the mask in place',
          D: 'Increase the CPAP pressure to ensure the child feels the airflow immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CPAP adherence in young children is challenging. A desensitization/behavioral program that includes gradual introduction of the mask during daytime play, positive reinforcement, and caregiver education significantly improves compliance. Ensuring the mask fits properly and does not cause discomfort is essential.',
        explanationWrong:
          'Full-face masks are generally avoided in young children due to aspiration risk and midface growth concerns. Taping a mask is dangerous and inappropriate. Increasing pressure without addressing the behavioral component will not improve adherence and may worsen discomfort.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 15,
        questionText:
          'A child with a C3-C4 spinal cord injury is ventilator-dependent. Which phrenic nerve intervention may eventually allow the child to be weaned from the ventilator for periods during the day?',
        choices: {
          A: 'Diaphragmatic pacing (phrenic nerve stimulation)',
          B: 'Intercostal nerve block',
          C: 'Vagus nerve stimulation',
          D: 'Glossopharyngeal (frog) breathing technique',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Diaphragmatic pacing involves surgical implantation of electrodes on the phrenic nerves that electrically stimulate the diaphragm to contract, producing negative-pressure ventilation. For patients with high cervical spinal cord injuries (C1-C4) who have intact phrenic nerve lower motor neurons, this can provide ventilator-free breathing during the day.',
        explanationWrong:
          'Intercostal nerve block would impair chest wall function, not support it. Vagus nerve stimulation is used for seizures and depression, not respiratory support. Glossopharyngeal breathing is a compensatory technique but cannot provide sustained ventilation in a high cervical injury.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 16,
        questionText:
          'A 6-month-old infant with laryngomalacia presents with inspiratory stridor that worsens with feeding and when supine. The infant is growing normally with no oxygen desaturations. What is the most appropriate management?',
        choices: {
          A: 'Immediate surgical intervention with supraglottoplasty',
          B: 'Intubation and mechanical ventilation',
          C: 'Tracheostomy placement',
          D: 'Observation with close follow-up, as most cases resolve spontaneously by 12-18 months of age',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Mild laryngomalacia with inspiratory stridor, adequate growth, and no oxygen desaturations is managed conservatively with observation and close follow-up. Most cases resolve spontaneously by 12-18 months of age as the supraglottic structures mature and stiffen.',
        explanationWrong:
          'Supraglottoplasty is reserved for severe laryngomalacia with feeding difficulties, failure to thrive, or significant oxygen desaturations. Intubation is not indicated for mild disease. Tracheostomy is reserved for severe cases that fail other interventions.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is performing airway clearance therapy on a child with cerebral palsy and chronic atelectasis of the left lower lobe. Which position would be most effective for draining the left lower lobe posterior basal segment?',
        choices: {
          A: 'Right lateral decubitus with the head elevated 30 degrees',
          B: 'Supine with the bed flat',
          C: 'Prone with the bed in Trendelenburg position (head down) and a pillow under the hips',
          D: 'Left lateral decubitus with the head elevated 45 degrees',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The left lower lobe posterior basal segment is best drained with the patient prone and in the Trendelenburg (head-down) position with a pillow under the hips. This uses gravity to facilitate drainage of secretions from the posterior basal segment toward the larger airways for expectoration or suctioning.',
        explanationWrong:
          'Right lateral decubitus position is used for draining the left lung lingula or lateral segments but not the posterior basal segment. Supine position drains anterior segments. Left lateral decubitus would drain right lung segments.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 18,
        questionText:
          'An overnight polysomnography of a 9-year-old child shows an obstructive apnea-hypopnea index of 12, a nadir SpO2 of 78%, and an end-tidal CO2 above 50 mmHg for 30% of total sleep time. This severity of OSA is classified as:',
        choices: {
          A: 'Mild OSA',
          B: 'Moderate OSA',
          C: 'Severe OSA',
          D: 'Upper airway resistance syndrome',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Severe pediatric OSA is characterized by an AHI greater than 10, significant oxygen desaturations (nadir SpO2 below 80%), and hypoventilation (end-tidal CO2 >50 mmHg for >25% of total sleep time). This child meets all three criteria, indicating severe disease requiring urgent intervention.',
        explanationWrong:
          'Mild OSA is defined as AHI 1-5 with minimal desaturations. Moderate OSA has an AHI of 5-10 with moderate desaturations. Upper airway resistance syndrome involves increased respiratory effort without frank apneas or significant desaturations.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 19,
        questionText:
          'A 13-year-old with a high cervical spinal cord injury has been on chronic invasive mechanical ventilation via tracheostomy. During a routine visit, the patient expresses a desire to speak. Which device should the respiratory therapist recommend to enable speech?',
        choices: {
          A: 'A tracheoesophageal prosthesis',
          B: 'An electrolarynx held against the neck',
          C: 'A one-way speaking valve (e.g., Passy-Muir) used with a deflated or uncuffed tracheostomy tube',
          D: 'Text-to-speech software only, as speech is not possible with a tracheostomy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A one-way speaking valve placed on the tracheostomy tube allows inspired air from the ventilator to enter through the tube but redirects exhaled air around the tube, through the vocal cords, and out the mouth and nose, enabling speech. The cuff must be deflated (or an uncuffed tube used) to allow air to pass around the tube on exhalation.',
        explanationWrong:
          'An electrolarynx is used for patients who have had a laryngectomy, not a tracheostomy with intact vocal cords. A tracheoesophageal prosthesis is for post-laryngectomy voice restoration. Speech is indeed possible with a tracheostomy using appropriate devices.',
        topic: 'Neurologically Impaired Pediatric Patients',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 20,
        questionText:
          'A 4-year-old obese child with OSA is being considered for adenotonsillectomy. The anesthesiologist expresses concern about perioperative risk. Which complication are obese children with severe OSA at highest risk for after adenotonsillectomy?',
        choices: {
          A: 'Intraoperative cardiac arrest',
          B: 'Postoperative respiratory compromise including desaturation, airway obstruction, and pulmonary edema',
          C: 'Postoperative seizures',
          D: 'Wound dehiscence requiring reoperation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Obese children with severe OSA are at significantly increased risk for postoperative respiratory complications including oxygen desaturation, upper airway obstruction, and negative-pressure pulmonary edema following adenotonsillectomy. These children typically require extended monitoring in a monitored care unit for 24 hours postoperatively.',
        explanationWrong:
          'Intraoperative cardiac arrest is extremely rare. Postoperative seizures are not a typical complication of adenotonsillectomy. Wound dehiscence is uncommon and not specifically associated with obesity or OSA severity.',
        topic: 'Pediatric Sleep-Disordered Breathing',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 17 seeded (20 questions, isFree: false)')

  // ─── EXAM 18 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric cystic fibrosis management, Neonatal abstinence syndrome (NAS)
  // Correct answer distribution: A=5(Q3,Q7,Q12,Q16,Q20) B=5(Q2,Q5,Q10,Q14,Q18) C=5(Q1,Q8,Q11,Q15,Q19) D=5(Q4,Q6,Q9,Q13,Q17)
  const exam18 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 18',
      examIndex: 18,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam18.id,
        questionIndex: 1,
        questionText:
          'A 10-year-old child with cystic fibrosis has a pulmonary function test showing an FEV1 of 65% predicted with a concave expiratory flow-volume loop. This pattern is consistent with which type of ventilatory defect?',
        choices: {
          A: 'Restrictive ventilatory defect',
          B: 'Mixed obstructive and restrictive defect',
          C: 'Obstructive ventilatory defect',
          D: 'Normal spirometry',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A concave (scooped-out) expiratory flow-volume loop with a reduced FEV1 is the hallmark of an obstructive ventilatory defect. In cystic fibrosis, thick mucus and chronic inflammation cause progressive airway obstruction, producing this characteristic pattern on spirometry.',
        explanationWrong:
          'A restrictive defect shows proportionally reduced FEV1 and FVC with a normal or elevated FEV1/FVC ratio and a narrow but normally shaped flow-volume loop. Mixed defects have features of both. An FEV1 of 65% predicted with a concave loop is abnormal, not normal spirometry.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is educating the parents of a child newly diagnosed with cystic fibrosis about airway clearance techniques. Which method is considered the standard of care for daily airway clearance in CF patients?',
        choices: {
          A: 'Incentive spirometry performed three times daily',
          B: 'High-frequency chest wall oscillation (vest therapy) combined with huff coughing',
          C: 'Deep breathing exercises without any assisted technique',
          D: 'Postural drainage in the Trendelenburg position only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'High-frequency chest wall oscillation (HFCWO or vest therapy) is one of the most widely used airway clearance techniques for CF patients. It generates oscillating pressure waves that shear mucus from the airway walls and promote its movement toward the central airways, where it can be cleared by huff coughing or suctioning.',
        explanationWrong:
          'Incentive spirometry alone is insufficient for CF airway clearance. Deep breathing exercises without an assisted technique do not generate enough force to clear thick CF secretions. Postural drainage alone may be used as part of a comprehensive program but is not adequate as the sole technique.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 3,
        questionText:
          'A newborn exposed to opioids in utero begins exhibiting irritability, high-pitched crying, tremors, poor feeding, and loose stools at 48 hours of age. The Finnegan scoring system is used to assess the infant. At what total Finnegan score should pharmacologic treatment be initiated?',
        choices: {
          A: 'Three consecutive scores of 8 or greater, or two consecutive scores of 12 or greater',
          B: 'A single score of 5',
          C: 'A single score of 15 or greater',
          D: 'Any score above 3',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pharmacologic treatment for neonatal abstinence syndrome is initiated when the Finnegan score reaches 8 or greater on three consecutive assessments, or 12 or greater on two consecutive assessments. This threshold indicates moderate-to-severe withdrawal that cannot be managed with nonpharmacologic supportive measures alone.',
        explanationWrong:
          'A single score of 5 is below the treatment threshold and would be managed with supportive care. A single score of 15 would warrant treatment but waiting for a single very high score delays appropriate intervention. A score above 3 is too low a threshold and would result in unnecessary pharmacologic treatment.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 4,
        questionText:
          'A child with cystic fibrosis is prescribed dornase alfa (Pulmozyme) for inhalation. What is the mechanism of action of this medication?',
        choices: {
          A: 'It acts as a bronchodilator to relax airway smooth muscle',
          B: 'It inhibits bacterial growth in the airways',
          C: 'It replaces deficient surfactant in the alveoli',
          D: 'It cleaves extracellular DNA released from neutrophils, reducing mucus viscosity',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Dornase alfa is a recombinant human DNase enzyme that cleaves extracellular DNA released from degraded neutrophils in the CF airway. The high concentration of neutrophil-derived DNA significantly contributes to the thick, viscous mucus in CF. By breaking down this DNA, dornase alfa reduces sputum viscosity and improves airway clearance.',
        explanationWrong:
          'Dornase alfa is not a bronchodilator; it is a mucolytic. It has no direct antibacterial properties. It does not replace surfactant; surfactant deficiency is associated with RDS in premature infants, not CF.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 5,
        questionText:
          'A neonate with NAS is being managed with oral morphine for moderate withdrawal symptoms. Which nonpharmacologic intervention should the respiratory therapist recommend as an adjunct to promote comfort and reduce withdrawal scores?',
        choices: {
          A: 'Increased environmental stimulation to keep the infant alert',
          B: 'Swaddling, dim lighting, minimal handling, and small frequent feedings',
          C: 'Prone positioning with continuous bright light exposure',
          D: 'Frequent bathing to soothe the infant',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Nonpharmacologic supportive care for NAS includes swaddling to reduce tremors and provide a sense of security, dim lighting and quiet environment to minimize overstimulation, minimal handling to reduce agitation, and small frequent feedings to address the increased caloric needs and poor feeding associated with withdrawal.',
        explanationWrong:
          'Increased stimulation worsens withdrawal symptoms. Prone positioning is not recommended for unsupervised neonates due to SIDS risk, and bright light increases irritability. Frequent bathing can overstimulate the infant and worsen agitation.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 6,
        questionText:
          'A 14-year-old CF patient has a sputum culture positive for Pseudomonas aeruginosa. The pulmonologist orders inhaled tobramycin. What is the standard dosing schedule for inhaled tobramycin in CF patients?',
        choices: {
          A: 'Daily continuous use for 6 months',
          B: 'Once weekly for 4 weeks',
          C: 'Every 6 hours around the clock',
          D: '300 mg inhaled twice daily in alternating 28-day on/28-day off cycles',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Inhaled tobramycin for CF-related Pseudomonas colonization is administered at 300 mg twice daily via nebulizer in alternating 28-day cycles (28 days on, 28 days off). This cycling schedule helps maintain efficacy while reducing the risk of bacterial resistance and drug toxicity.',
        explanationWrong:
          'Continuous daily use for 6 months is not the standard regimen and increases resistance risk. Weekly dosing is insufficient for Pseudomonas suppression. Around-the-clock dosing every 6 hours is used for IV tobramycin in acute exacerbations, not the inhaled maintenance regimen.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 7,
        questionText:
          'A neonate born at 38 weeks gestation to a mother with polysubstance use develops respiratory distress, tachypnea, and nasal flaring at 24 hours of age. The Finnegan score is 14. Which respiratory complication is most commonly associated with NAS?',
        choices: {
          A: 'Tachypnea and respiratory alkalosis from central nervous system excitability',
          B: 'Surfactant deficiency leading to RDS',
          C: 'Congenital pulmonary hypoplasia',
          D: 'Meconium aspiration from in utero passage',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Neonates with NAS commonly exhibit tachypnea as a manifestation of central nervous system excitability and autonomic dysregulation. The increased respiratory rate can lead to respiratory alkalosis. This is distinct from primary pulmonary pathology and typically improves as the withdrawal is managed.',
        explanationWrong:
          'Surfactant deficiency (RDS) is related to prematurity, not NAS, and this infant is term. Congenital pulmonary hypoplasia is associated with oligohydramnios and renal anomalies, not substance exposure. While meconium aspiration can occur in stressed neonates, it is not the primary respiratory complication of NAS.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 8,
        questionText:
          'A child with CF is scheduled for nebulized hypertonic saline therapy. What concentration of hypertonic saline is typically prescribed for CF airway clearance, and what must precede its administration?',
        choices: {
          A: 'Normal saline (0.9%) preceded by chest physiotherapy',
          B: 'Hypertonic saline (3%) preceded by dornase alfa',
          C: 'Hypertonic saline (7%) preceded by an inhaled bronchodilator',
          D: 'Hypertonic saline (10%) preceded by inhaled corticosteroids',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hypertonic saline at 7% concentration is the standard for CF airway clearance. It works by drawing water into the airway lumen via osmosis, hydrating the mucus and improving mucociliary clearance. An inhaled bronchodilator (albuterol) must be administered prior to hypertonic saline to prevent bronchospasm, which is a known side effect.',
        explanationWrong:
          'Normal saline does not have the osmotic effect needed for mucus hydration. 3% saline may be used but 7% is the standard CF concentration. 10% saline is not commonly used and would cause excessive bronchospasm. Dornase alfa is a separate treatment given at a different time, and corticosteroids do not prevent bronchospasm from hypertonic saline.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 9,
        questionText:
          'A full-term neonate exposed to maternal SSRI antidepressants in the third trimester presents with jitteriness, irritability, tachypnea, and poor feeding at 6 hours of age. How does this presentation differ from opioid-related NAS?',
        choices: {
          A: 'SSRI withdrawal presents identically to opioid NAS and is treated the same way',
          B: 'SSRI withdrawal is always more severe than opioid NAS',
          C: 'SSRI discontinuation syndrome presents at 12-14 days of life',
          D: 'SSRI discontinuation syndrome typically presents within hours of birth, is generally self-limiting, and resolves within 1-2 weeks without pharmacologic treatment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'SSRI discontinuation syndrome (also called poor neonatal adaptation syndrome) presents earlier than opioid NAS, typically within hours of birth. Symptoms include jitteriness, tachypnea, irritability, and feeding difficulties. Unlike opioid NAS, it is generally self-limiting and resolves within 1-2 weeks with supportive care, rarely requiring pharmacologic intervention.',
        explanationWrong:
          'SSRI withdrawal differs significantly from opioid NAS in onset, severity, and treatment. SSRI discontinuation is generally milder than opioid NAS. Presentation occurs within hours of birth, not at 12-14 days.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 10,
        questionText:
          'A 7-year-old with CF has a pulmonary exacerbation with increased cough, decreased FEV1, and new crackles on auscultation. The treatment plan includes IV antibiotics. What antibiotic combination is most commonly used for CF pulmonary exacerbations when Pseudomonas aeruginosa is suspected?',
        choices: {
          A: 'Oral amoxicillin and azithromycin',
          B: 'An anti-pseudomonal beta-lactam (e.g., ceftazidime or piperacillin-tazobactam) combined with an aminoglycoside (e.g., tobramycin)',
          C: 'IV vancomycin monotherapy',
          D: 'Inhaled colistin only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The standard IV antibiotic regimen for CF pulmonary exacerbations with Pseudomonas involves combination therapy with an anti-pseudomonal beta-lactam (ceftazidime, piperacillin-tazobactam, or meropenem) and an aminoglycoside (tobramycin). This dual therapy provides synergistic bactericidal activity and reduces the risk of resistance development.',
        explanationWrong:
          'Oral amoxicillin does not cover Pseudomonas. IV vancomycin covers gram-positive organisms (including MRSA) but not Pseudomonas. Inhaled colistin is used for maintenance suppression, not acute exacerbation treatment.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 11,
        questionText:
          'A neonate born to a mother maintained on methadone therapy during pregnancy is at risk for NAS. At what point after birth do withdrawal symptoms from methadone typically present?',
        choices: {
          A: 'Within the first 2 hours after birth',
          B: 'At 7-10 days of age',
          C: 'At 48-72 hours of age, with possible late-onset symptoms up to 2-4 weeks',
          D: 'Only at 30 days of age',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Methadone has a longer half-life than heroin, so withdrawal symptoms from methadone exposure typically present at 48-72 hours of age, later than heroin-related NAS (which presents at 24-48 hours). Late-onset symptoms can occur up to 2-4 weeks after birth, necessitating extended observation.',
        explanationWrong:
          'Symptoms at 2 hours would be unusually early even for short-acting opioids. Onset at 7-10 days is possible but not the typical window. Waiting until 30 days would miss the standard presentation window.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 12,
        questionText:
          'A 16-year-old with CF and advanced lung disease (FEV1 25% predicted) is being evaluated for lung transplantation. Which factor would be a contraindication to lung transplantation in this patient?',
        choices: {
          A: 'Chronic infection with pan-resistant Burkholderia cenocepacia',
          B: 'Low body mass index requiring nutritional supplementation',
          C: 'Prior pneumothorax treated with chest tube drainage',
          D: 'Chronic Pseudomonas aeruginosa colonization',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Chronic infection with Burkholderia cenocepacia (formerly B. cepacia genomovar III) is considered an absolute or strong relative contraindication to lung transplantation at most centers. Post-transplant outcomes in patients with B. cenocepacia are significantly worse due to recurrent, fulminant infection in the immunosuppressed state.',
        explanationWrong:
          'Low BMI is a relative concern that can be addressed with nutritional optimization before transplant. Prior pneumothorax is not a contraindication. Chronic Pseudomonas is almost universal in CF and is not a contraindication to transplantation.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 13,
        questionText:
          'A neonate with NAS is being treated with oral morphine. The Finnegan scores have been consistently below 8 for 48 hours. How should the morphine be weaned?',
        choices: {
          A: 'Abruptly discontinue the morphine immediately',
          B: 'Continue the same dose for an additional 2 weeks before stopping',
          C: 'Switch from morphine to a benzodiazepine for weaning',
          D: 'Gradually reduce the dose by 10-20% every 24-48 hours while monitoring Finnegan scores',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Morphine for NAS should be weaned gradually, typically reducing the dose by 10-20% every 24-48 hours. Finnegan scoring continues during the wean to monitor for rebound withdrawal. If scores increase above the treatment threshold, the weaning rate is slowed or the previous dose is temporarily restored.',
        explanationWrong:
          'Abrupt discontinuation risks severe rebound withdrawal. Maintaining the same dose for 2 weeks unnecessarily prolongs treatment and hospitalization. Switching to a benzodiazepine is not standard practice for opioid NAS weaning; benzodiazepines are sometimes used as adjunctive therapy for seizures or polysubstance withdrawal, not as a replacement.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 14,
        questionText:
          'A CF patient is prescribed pancreatic enzyme replacement therapy (PERT). The respiratory therapist is educating the family about the importance of this medication. How do pancreatic enzymes relate to respiratory health in CF?',
        choices: {
          A: 'Pancreatic enzymes directly reduce mucus viscosity in the lungs',
          B: 'Adequate nutrition from PERT supports respiratory muscle strength, immune function, and overall pulmonary health',
          C: 'Pancreatic enzymes are aerosolized and delivered to the lungs to break down mucus',
          D: 'Pancreatic enzymes have no relationship to respiratory outcomes in CF',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pancreatic enzyme replacement therapy allows proper digestion and absorption of nutrients, particularly fats and fat-soluble vitamins (A, D, E, K). Adequate nutrition is essential for maintaining respiratory muscle strength, supporting immune function, and optimizing overall pulmonary health. Malnutrition in CF is directly correlated with worse pulmonary outcomes.',
        explanationWrong:
          'Pancreatic enzymes do not directly act on airway mucus. They are taken orally with meals and are not aerosolized. There is a strong, well-documented relationship between nutritional status and respiratory outcomes in CF.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 15,
        questionText:
          'A newborn exposed to maternal benzodiazepines in utero presents with hypotonia, poor feeding, and respiratory depression at birth. Which immediate respiratory intervention may be necessary?',
        choices: {
          A: 'Administration of naloxone to reverse benzodiazepine effects',
          B: 'High-flow nasal cannula as the sole intervention',
          C: 'Positive pressure ventilation with bag-mask to support inadequate respiratory effort',
          D: 'Intubation with surfactant administration',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Neonatal benzodiazepine withdrawal can cause respiratory depression with poor respiratory effort. Immediate bag-mask positive pressure ventilation is the appropriate first-line intervention to support the neonate until spontaneous respiratory effort improves. Flumazenil (not naloxone) is the specific benzodiazepine antagonist but is rarely used in neonates due to seizure risk.',
        explanationWrong:
          'Naloxone is an opioid antagonist and does not reverse benzodiazepine effects. High-flow nasal cannula may be insufficient for significant respiratory depression with poor effort. Surfactant is indicated for surfactant deficiency (RDS), not respiratory depression from drug exposure.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 16,
        questionText:
          'A child with CF is being treated with CFTR modulator therapy (elexacaftor/tezacaftor/ivacaftor). What is the primary mechanism of action of this triple combination therapy?',
        choices: {
          A: 'It corrects the folding and trafficking of the defective CFTR protein and potentiates its chloride channel function at the cell surface',
          B: 'It replaces the defective CFTR gene using viral vector gene therapy',
          C: 'It suppresses the inflammatory response in the airways',
          D: 'It acts as a mucolytic to break down thick mucus',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Elexacaftor/tezacaftor/ivacaftor (Trikafta) is a triple combination CFTR modulator. Elexacaftor and tezacaftor are correctors that help the misfolded CFTR protein achieve proper conformation and traffic to the cell surface. Ivacaftor is a potentiator that increases the open probability of the CFTR chloride channel, improving chloride and bicarbonate transport.',
        explanationWrong:
          'CFTR modulators are not gene therapy; they work on the existing defective protein. While they may reduce inflammation indirectly by improving CFTR function, their primary mechanism is protein correction and potentiation. They are not mucolytics.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 17,
        questionText:
          'A neonate with NAS has been maintained on oral morphine but develops persistent seizures. Which adjunctive medication should be added to the treatment regimen?',
        choices: {
          A: 'Caffeine citrate',
          B: 'Inhaled nitric oxide',
          C: 'Surfactant',
          D: 'Phenobarbital',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Phenobarbital is the most commonly used adjunctive medication for NAS when seizures occur or when opioid therapy alone is insufficient to control withdrawal symptoms. It provides anticonvulsant activity and sedation that can complement opioid therapy in managing severe withdrawal.',
        explanationWrong:
          'Caffeine citrate is used for apnea of prematurity, not NAS seizures. Inhaled nitric oxide is used for PPHN. Surfactant is for RDS in premature infants. None of these address NAS-related seizures.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 18,
        questionText:
          'A 12-year-old with CF develops massive hemoptysis (greater than 240 mL in 24 hours). After stabilizing the patient with IV access and blood products, what is the definitive interventional treatment?',
        choices: {
          A: 'Surgical lobectomy as the first-line intervention',
          B: 'Bronchial artery embolization',
          C: 'Rigid bronchoscopy with cauterization',
          D: 'Chest tube insertion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Bronchial artery embolization (BAE) is the definitive interventional treatment for massive hemoptysis in CF patients. It involves catheterization and embolization of the hypertrophied bronchial arteries that are the source of bleeding. BAE is successful in controlling acute hemorrhage in 90% of cases.',
        explanationWrong:
          'Surgical lobectomy is reserved for refractory cases that fail embolization and is not the first-line interventional approach. Rigid bronchoscopy may help localize bleeding but is not definitive treatment. Chest tube insertion treats pleural space pathology, not airway hemorrhage.',
        topic: 'Pediatric Cystic Fibrosis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 19,
        questionText:
          'Rooming-in, where the mother and neonate remain together in the same room, has been shown to benefit infants with NAS. What is the primary advantage of rooming-in for these infants?',
        choices: {
          A: 'It increases the need for pharmacologic treatment by allowing closer monitoring',
          B: 'It eliminates the need for Finnegan scoring',
          C: 'It reduces the severity of withdrawal symptoms, decreases the need for pharmacologic treatment, and shortens hospital length of stay',
          D: 'It allows for earlier discharge regardless of withdrawal severity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Rooming-in allows continuous maternal-infant bonding, breastfeeding (when appropriate), and consistent nonpharmacologic comfort measures. Studies demonstrate that rooming-in significantly reduces the severity of NAS symptoms, decreases the need for pharmacologic treatment, and shortens hospital length of stay compared to traditional NICU-based care.',
        explanationWrong:
          'Rooming-in actually decreases, not increases, the need for pharmacologic treatment. Finnegan scoring is still performed during rooming-in. Discharge is still based on clinical criteria, not rooming-in status alone.',
        topic: 'Neonatal Abstinence Syndrome',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 20,
        questionText:
          'A 5-year-old with CF is scheduled for a sweat chloride test as part of routine monitoring. What sweat chloride level confirms the diagnosis of cystic fibrosis?',
        choices: {
          A: 'Sweat chloride greater than or equal to 60 mmol/L',
          B: 'Sweat chloride of 20-29 mmol/L',
          C: 'Sweat chloride of 30-39 mmol/L',
          D: 'Sweat chloride less than 10 mmol/L',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sweat chloride concentration of 60 mmol/L or greater is diagnostic of cystic fibrosis. Values between 30-59 mmol/L are considered intermediate and require further evaluation (genetic testing, repeat sweat test). Values below 30 mmol/L are considered normal (unlikely CF).',
        explanationWrong:
          'Sweat chloride of 20-29 mmol/L is in the normal range. A value of 30-39 mmol/L is in the intermediate range and not diagnostic. A value less than 10 mmol/L is well within the normal range.',
        topic: 'Pediatric Cystic Fibrosis',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 18 seeded (20 questions, isFree: false)')

  // ─── EXAM 19 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric drowning/submersion injuries, Inborn errors of metabolism affecting respiration
  // Correct answer distribution: A=5(Q4,Q8,Q11,Q15,Q19) B=5(Q1,Q6,Q12,Q17,Q20) C=5(Q3,Q7,Q10,Q14,Q18) D=5(Q2,Q5,Q9,Q13,Q16)
  const exam19 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 19',
      examIndex: 19,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam19.id,
        questionIndex: 1,
        questionText:
          'A 3-year-old child is pulled from a swimming pool after an estimated 5-minute submersion. The child is unresponsive, apneic, and pulseless on arrival to the emergency department. CPR is in progress. What is the most critical initial respiratory intervention?',
        choices: {
          A: 'Immediate Heimlich maneuver to drain water from the lungs',
          B: 'Endotracheal intubation with positive pressure ventilation using 100% oxygen',
          C: 'Nasopharyngeal airway placement with supplemental oxygen',
          D: 'Observation for spontaneous respiratory recovery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In a drowning victim who is apneic and pulseless, immediate endotracheal intubation with positive pressure ventilation using 100% FiO2 is the priority respiratory intervention. Drowning causes surfactant washout, atelectasis, and intrapulmonary shunting, requiring aggressive ventilation and oxygenation support.',
        explanationWrong:
          'The Heimlich maneuver is not recommended for drowning victims as it delays ventilation, is ineffective at removing water from the lungs, and risks aspiration of gastric contents. A nasopharyngeal airway is insufficient for an apneic, pulseless patient. Observation is inappropriate for a patient in cardiopulmonary arrest.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 2,
        questionText:
          'A term neonate presents at 36 hours of life with poor feeding, lethargy, vomiting, and tachypnea with respiratory alkalosis on ABG. Ammonia level is 850 mcmol/L (normal <100). What is the most likely category of metabolic disorder?',
        choices: {
          A: 'Fatty acid oxidation defect',
          B: 'Glycogen storage disease',
          C: 'Organic acidemia',
          D: 'Urea cycle defect',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Markedly elevated ammonia (hyperammonemia >500 mcmol/L) in a neonate with encephalopathy is characteristic of a urea cycle defect. The tachypnea and respiratory alkalosis result from direct stimulation of the brainstem respiratory center by elevated ammonia, which is a hallmark early finding in urea cycle disorders.',
        explanationWrong:
          'Fatty acid oxidation defects typically present with hypoketotic hypoglycemia and may have mild ammonia elevation but not to this degree. Glycogen storage diseases primarily cause hypoglycemia and hepatomegaly. Organic acidemias cause metabolic acidosis with an elevated anion gap, not respiratory alkalosis.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 3,
        questionText:
          'A 5-year-old near-drowning victim is intubated and mechanically ventilated. The chest radiograph shows bilateral diffuse pulmonary infiltrates consistent with ARDS. What ventilation strategy is most appropriate?',
        choices: {
          A: 'High tidal volume ventilation (10-12 mL/kg) to fully expand the lungs',
          B: 'High-frequency jet ventilation at maximum amplitude',
          C: 'Lung-protective ventilation with low tidal volumes (6 mL/kg IBW) and adequate PEEP',
          D: 'Pressure support ventilation with minimal PEEP',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Drowning-related ARDS should be managed with lung-protective ventilation strategies: low tidal volumes (6 mL/kg ideal body weight) to prevent volutrauma, adequate PEEP to recruit collapsed alveoli and improve oxygenation, plateau pressures below 30 cmH2O, and permissive hypercapnia if needed.',
        explanationWrong:
          'High tidal volumes cause volutrauma and worsen ARDS. High-frequency jet ventilation at maximum amplitude is not the first-line approach. Minimal PEEP is contraindicated in ARDS as it allows alveolar derecruitment and worsens intrapulmonary shunting.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 4,
        questionText:
          'A near-drowning victim presents to the emergency department alert and oriented with mild tachypnea and an SpO2 of 94% on room air. Chest radiograph is clear. What is the recommended disposition for this patient?',
        choices: {
          A: 'Observation in the emergency department or hospital for a minimum of 6-8 hours with continuous monitoring',
          B: 'Immediate discharge home with follow-up in 24 hours',
          C: 'Immediate intubation for prophylactic airway protection',
          D: 'ICU admission with invasive hemodynamic monitoring',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Asymptomatic or mildly symptomatic drowning patients require a minimum observation period of 6-8 hours because pulmonary edema and respiratory deterioration can develop in a delayed fashion. Continuous monitoring of pulse oximetry, respiratory rate, and clinical status is essential during this observation period.',
        explanationWrong:
          'Immediate discharge is unsafe because delayed pulmonary complications can occur. Prophylactic intubation is not indicated in an alert, oriented patient with mild symptoms. ICU admission with invasive monitoring is excessive for a patient with mild symptoms and clear chest radiograph.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 5,
        questionText:
          'A neonate with a suspected organic acidemia (methylmalonic acidemia) presents with severe metabolic acidosis, tachypnea, and lethargy. The ABG shows pH 7.10, PaCO2 18 mmHg, and HCO3 6 mEq/L. What is the respiratory pattern observed in this neonate?',
        choices: {
          A: 'Central apnea with periodic breathing',
          B: 'Obstructive breathing pattern',
          C: 'Cheyne-Stokes respiration',
          D: 'Kussmaul breathing (deep, rapid respirations) as respiratory compensation for severe metabolic acidosis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The low PaCO2 (18 mmHg) with severe metabolic acidosis indicates maximal respiratory compensation. The deep, rapid breathing pattern (Kussmaul breathing) represents the respiratory system attempting to blow off CO2 to compensate for the profound metabolic acidosis caused by the accumulation of methylmalonic acid.',
        explanationWrong:
          'Central apnea would not produce a low PaCO2. An obstructive pattern would not explain the compensatory hyperventilation. Cheyne-Stokes respiration involves a crescendo-decrescendo pattern and is not the compensatory response to metabolic acidosis.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 6,
        questionText:
          'In pediatric drowning, the primary mechanism of cardiac arrest is different from adult drowning. What is the initial event in the pathophysiology of pediatric drowning?',
        choices: {
          A: 'Primary cardiac arrhythmia (ventricular fibrillation)',
          B: 'Hypoxia from submersion leading to respiratory arrest, followed by cardiac arrest',
          C: 'Vagal-mediated bradycardia from cold water immersion',
          D: 'Hypothermia-induced asystole as the primary event',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In pediatric drowning, the primary event is hypoxia from submersion. The child aspirates water or develops laryngospasm, leading to progressive hypoxemia. This hypoxia first causes respiratory arrest, which then leads to bradycardia and ultimately cardiac arrest. This is in contrast to many adult cardiac arrests where a primary cardiac event occurs.',
        explanationWrong:
          'Ventricular fibrillation is more common as a primary event in adult cardiac arrest. While the diving reflex can cause bradycardia, it is not the primary mechanism of arrest in pediatric drowning. Hypothermia may be protective but is not the initial event in the drowning cascade.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 7,
        questionText:
          'A neonate is diagnosed with medium-chain acyl-CoA dehydrogenase (MCAD) deficiency. What is the primary risk to respiratory function during a fasting or illness episode in this infant?',
        choices: {
          A: 'Surfactant deficiency due to impaired lipid metabolism',
          B: 'Direct airway obstruction from metabolite accumulation',
          C: 'Hypoketotic hypoglycemia leading to encephalopathy and central respiratory depression',
          D: 'Methemoglobinemia causing impaired oxygen delivery',
        },
        correctChoice: 'C',
        explanationCorrect:
          'MCAD deficiency prevents the oxidation of medium-chain fatty acids for energy production. During fasting or illness, the body cannot utilize fats for fuel, and ketone body production is impaired (hypoketotic). This leads to severe hypoglycemia and encephalopathy, which can depress central respiratory drive and cause apnea or respiratory failure.',
        explanationWrong:
          'Surfactant production is not directly impaired by MCAD deficiency. There is no direct airway obstruction from MCAD metabolites. Methemoglobinemia is not associated with MCAD deficiency.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 8,
        questionText:
          'A 2-year-old cold-water drowning victim is brought to the emergency department with a core body temperature of 28°C. The child has no spontaneous respirations and no pulse. What is the recommended approach regarding resuscitation in this scenario?',
        choices: {
          A: 'Continue aggressive CPR and rewarming; do not pronounce death until the patient is rewarmed to 32-35°C and remains unresponsive to resuscitation',
          B: 'Pronounce death immediately due to the prolonged submersion time',
          C: 'Initiate warming only and withhold CPR until core temperature reaches 30°C',
          D: 'Perform CPR for 20 minutes and stop if there is no response',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The principle "a drowning victim is not dead until warm and dead" guides management of hypothermic drowning patients. Hypothermia provides neuroprotection by reducing metabolic demands. Aggressive CPR and active rewarming should continue until the core temperature reaches 32-35°C before any decision to terminate resuscitation.',
        explanationWrong:
          'Pronouncing death before rewarming may result in the loss of a salvageable patient. CPR should not be withheld during rewarming. An arbitrary 20-minute time limit is not appropriate for hypothermic drowning.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 9,
        questionText:
          'A neonate presents at 3 days of life with a characteristic maple syrup odor in the urine, poor feeding, and episodic apnea. The condition is maple syrup urine disease (MSUD). What is the underlying metabolic defect?',
        choices: {
          A: 'Deficiency of glucose-6-phosphatase',
          B: 'Deficiency of phenylalanine hydroxylase',
          C: 'Deficiency of galactose-1-phosphate uridylyltransferase',
          D: 'Deficiency of branched-chain alpha-ketoacid dehydrogenase, causing accumulation of branched-chain amino acids (leucine, isoleucine, valine)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Maple syrup urine disease is caused by a deficiency of the branched-chain alpha-ketoacid dehydrogenase enzyme complex, which is responsible for the metabolism of branched-chain amino acids (leucine, isoleucine, and valine). Accumulation of these amino acids and their toxic ketoacid metabolites causes the characteristic odor, encephalopathy, and respiratory compromise including apnea.',
        explanationWrong:
          'Glucose-6-phosphatase deficiency causes glycogen storage disease type I (von Gierke disease). Phenylalanine hydroxylase deficiency causes phenylketonuria. Galactose-1-phosphate uridylyltransferase deficiency causes galactosemia.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 10,
        questionText:
          'A child who survived a near-drowning event is now mechanically ventilated. Despite high PEEP (12 cmH2O) and FiO2 of 0.80, the PaO2 remains at 55 mmHg. The P/F ratio is 69. What adjunctive therapy should be considered?',
        choices: {
          A: 'Inhaled albuterol via metered-dose inhaler',
          B: 'IV furosemide to reduce pulmonary edema',
          C: 'Prone positioning to improve ventilation-perfusion matching',
          D: 'Nebulized hypertonic saline for secretion clearance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A P/F ratio of 69 indicates severe ARDS. Prone positioning has been shown to improve oxygenation and survival in moderate-to-severe ARDS by redistributing ventilation to dorsal lung regions, improving ventilation-perfusion matching, and promoting alveolar recruitment. It should be considered when conventional ventilation fails to achieve adequate oxygenation.',
        explanationWrong:
          'Albuterol is a bronchodilator and does not address the alveolar flooding and atelectasis of ARDS. Furosemide may reduce fluid overload but is not the primary intervention for refractory hypoxemia in ARDS. Hypertonic saline is used for CF airway clearance, not ARDS management.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 11,
        questionText:
          'A neonate with Pompe disease (glycogen storage disease type II) presents with severe cardiomyopathy and progressive respiratory failure due to diaphragmatic and respiratory muscle weakness. What is the definitive treatment for this condition?',
        choices: {
          A: 'Enzyme replacement therapy with recombinant alglucosidase alfa',
          B: 'Dietary restriction of glycogen-forming foods',
          C: 'Heart transplantation',
          D: 'Chronic corticosteroid therapy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Pompe disease is caused by a deficiency of acid alpha-glucosidase (GAA), leading to glycogen accumulation in muscle tissue including the heart and diaphragm. Enzyme replacement therapy (ERT) with recombinant alglucosidase alfa (Myozyme/Lumizyme) is the definitive treatment, improving cardiac function and respiratory muscle strength, and significantly improving survival.',
        explanationWrong:
          'Dietary restriction does not address the enzyme deficiency. Heart transplantation does not address the systemic muscle disease. Corticosteroids do not correct the underlying enzyme deficiency and may worsen muscle weakness.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 12,
        questionText:
          'During the acute management of a pediatric drowning victim, the emergency team notes that the patient is hypothermic. What is the relationship between hypothermia and the potential for neurologic recovery in drowning?',
        choices: {
          A: 'Hypothermia always worsens neurologic outcomes',
          B: 'Hypothermia may be neuroprotective by reducing cerebral metabolic oxygen consumption, potentially improving neurologic outcomes in some cases',
          C: 'Hypothermia has no effect on neurologic outcomes',
          D: 'Hypothermia is beneficial only if induced after resuscitation, not during submersion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hypothermia during submersion may provide neuroprotection by significantly reducing cerebral metabolic oxygen consumption (approximately 5-7% reduction per degree Celsius drop). This protective effect is why some children have had remarkable neurologic recovery even after prolonged submersion in cold water.',
        explanationWrong:
          'Hypothermia does not always worsen outcomes; it can be protective in drowning. It clearly has an effect on outcomes. The neuroprotective effect of hypothermia during submersion itself is well-documented, not only post-resuscitation therapeutic hypothermia.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 13,
        questionText:
          'A neonate born to consanguineous parents presents at 48 hours with respiratory distress, lactic acidosis, and elevated pyruvate. The suspected diagnosis is pyruvate dehydrogenase deficiency. What is the respiratory consequence of this metabolic defect?',
        choices: {
          A: 'Upper airway obstruction from tissue edema',
          B: 'Bronchospasm from histamine release',
          C: 'Pulmonary hemorrhage from coagulopathy',
          D: 'Impaired aerobic energy production leading to lactic acidosis, which drives compensatory tachypnea and may cause central respiratory failure',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pyruvate dehydrogenase deficiency prevents the conversion of pyruvate to acetyl-CoA, blocking aerobic metabolism. This causes lactic acid accumulation (lactic acidosis), which triggers compensatory tachypnea. As the disease progresses, CNS damage from energy failure can lead to central respiratory depression and apnea.',
        explanationWrong:
          'Upper airway obstruction is not a feature of pyruvate dehydrogenase deficiency. Bronchospasm from histamine release is not associated with this condition. Pulmonary hemorrhage is not a typical complication of pyruvate dehydrogenase deficiency.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 14,
        questionText:
          'A pediatric drowning victim is intubated and on mechanical ventilation. Within 6 hours of admission, frothy, pink-tinged secretions are noted during suctioning. What is the most likely cause?',
        choices: {
          A: 'Ventilator-associated pneumonia',
          B: 'Traumatic tracheal injury from intubation',
          C: 'Noncardiogenic pulmonary edema (ARDS) from surfactant inactivation and increased alveolar-capillary permeability',
          D: 'Cardiogenic pulmonary edema from myocardial infarction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Frothy, pink-tinged secretions in a drowning victim indicate noncardiogenic pulmonary edema (ARDS). Aspirated water inactivates surfactant, damages the alveolar-capillary membrane, and increases permeability, leading to protein-rich fluid flooding the alveoli. This typically develops within 4-6 hours of the submersion event.',
        explanationWrong:
          'Ventilator-associated pneumonia typically develops after 48 hours of ventilation, not within 6 hours. Tracheal injury would cause bloody (not frothy pink) secretions. Myocardial infarction is exceedingly rare in pediatric patients.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 15,
        questionText:
          'A neonate with suspected mitochondrial disease presents with multisystem involvement including lactic acidosis, hypotonia, and progressive respiratory failure. Which diagnostic test is most useful in confirming mitochondrial respiratory chain defects?',
        choices: {
          A: 'Muscle biopsy with electron microscopy and respiratory chain enzyme analysis',
          B: 'Routine metabolic panel',
          C: 'Chest radiograph',
          D: 'Sweat chloride test',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Muscle biopsy with electron microscopy showing ragged red fibers and abnormal mitochondrial morphology, combined with respiratory chain enzyme analysis measuring the activity of complexes I-V, is the gold standard for diagnosing mitochondrial respiratory chain defects. Genetic testing (mitochondrial DNA and nuclear DNA sequencing) is also increasingly used.',
        explanationWrong:
          'A routine metabolic panel may show elevated lactate but is not specific for mitochondrial disease. Chest radiograph shows pulmonary findings but does not identify the underlying metabolic defect. Sweat chloride test diagnoses cystic fibrosis, not mitochondrial disease.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 16,
        questionText:
          'A 4-year-old child is found face-down in a bathtub. The child is breathing spontaneously with a GCS of 14 and SpO2 of 96% on room air. Lung auscultation reveals scattered crackles bilaterally. Which oxygen delivery device is most appropriate for initial management?',
        choices: {
          A: 'Venturi mask at 28% FiO2',
          B: 'Simple face mask at 6 L/min',
          C: 'No supplemental oxygen is needed',
          D: 'Non-rebreather mask at 15 L/min',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Even though the SpO2 is 96%, bilateral crackles suggest early pulmonary edema from aspiration. A non-rebreather mask at 15 L/min providing near 100% FiO2 is appropriate for initial management of drowning patients with evidence of pulmonary involvement. Close monitoring for deterioration is essential, as delayed ARDS can develop.',
        explanationWrong:
          'A Venturi mask at 28% provides insufficient FiO2 for a drowning patient with pulmonary findings. A simple face mask delivers only 40-60% FiO2, which may be inadequate if the patient deteriorates. Withholding oxygen is inappropriate when bilateral crackles indicate aspiration and potential for rapid decline.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 17,
        questionText:
          'A neonate diagnosed with propionic acidemia develops acute metabolic decompensation with severe metabolic acidosis and hyperammonemia. The infant is tachypneic and obtunded. What is the immediate priority in respiratory management?',
        choices: {
          A: 'Administration of inhaled nitric oxide',
          B: 'Intubation and mechanical ventilation to support respiratory effort and protect the airway, while the metabolic derangement is corrected',
          C: 'High-flow nasal cannula at maximum flow',
          D: 'Observation with supplemental oxygen only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An obtunded neonate with severe metabolic acidosis and hyperammonemia from propionic acidemia requires intubation and mechanical ventilation for airway protection (decreased level of consciousness) and respiratory support (the extreme compensatory tachypnea will eventually lead to respiratory fatigue). Simultaneously, the metabolic crisis is treated with IV glucose, carnitine, and potentially hemodialysis for severe hyperammonemia.',
        explanationWrong:
          'Inhaled nitric oxide is for PPHN, not metabolic acidosis. High-flow nasal cannula does not protect the airway in an obtunded patient. Observation alone risks respiratory arrest in a rapidly deteriorating patient.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 18,
        questionText:
          'Which electrolyte abnormality is most commonly associated with freshwater drowning, and how does it affect respiratory function?',
        choices: {
          A: 'Hypernatremia causing pulmonary vasoconstriction',
          B: 'Hyperkalemia causing cardiac arrhythmia only',
          C: 'Hemodilution and hyponatremia from absorption of hypotonic water, contributing to cerebral edema and pulmonary edema',
          D: 'Hypercalcemia causing bronchospasm',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Freshwater is hypotonic relative to blood. When aspirated in significant quantities, it is rapidly absorbed across the alveolar-capillary membrane, causing hemodilution and hyponatremia. This can worsen cerebral edema (contributing to central respiratory depression) and increase pulmonary edema through reduced plasma oncotic pressure.',
        explanationWrong:
          'Hypernatremia is associated with saltwater drowning, not freshwater. While hyperkalemia can occur from hemolysis in massive freshwater aspiration, it is less clinically significant than hyponatremia in most cases. Hypercalcemia is not a feature of drowning.',
        topic: 'Pediatric Drowning',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 19,
        questionText:
          'A neonate with Zellweger spectrum disorder (a peroxisomal biogenesis disorder) has respiratory distress. Which pulmonary finding is characteristically associated with this condition?',
        choices: {
          A: 'Pulmonary interstitial glycogenosis and impaired surfactant metabolism leading to respiratory failure',
          B: 'Congenital lobar emphysema',
          C: 'Pulmonary sequestration',
          D: 'Unilateral pulmonary agenesis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Zellweger spectrum disorders involve defective peroxisome biogenesis, which impairs multiple metabolic pathways including very-long-chain fatty acid oxidation and plasmalogen synthesis. Plasmalogens are critical components of surfactant, and their deficiency leads to impaired surfactant function and pulmonary interstitial glycogenosis, contributing to respiratory failure in the neonatal period.',
        explanationWrong:
          'Congenital lobar emphysema, pulmonary sequestration, and unilateral pulmonary agenesis are developmental anomalies not specifically associated with peroxisomal disorders.',
        topic: 'Inborn Errors of Metabolism',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 20,
        questionText:
          'A pediatric drowning victim has been resuscitated and is on mechanical ventilation. After 48 hours, the patient develops fever and worsening infiltrates on chest radiograph. Tracheal aspirate shows gram-negative rods. What is the most likely complication?',
        choices: {
          A: 'Chemical pneumonitis from chlorinated pool water',
          B: 'Aspiration pneumonia from contaminated water, progressing to secondary bacterial pneumonia',
          C: 'Cardiogenic pulmonary edema',
          D: 'Ventilator-associated tracheitis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Drowning victims who aspirate contaminated water are at high risk for developing secondary bacterial pneumonia. Gram-negative organisms from the water source or oropharyngeal flora colonize the damaged lung tissue. The combination of fever, worsening infiltrates, and positive tracheal aspirate cultures at 48 hours is consistent with aspiration pneumonia progressing to secondary infection.',
        explanationWrong:
          'Chemical pneumonitis from chlorine occurs earlier and does not produce positive bacterial cultures. Cardiogenic pulmonary edema would show a different clinical picture with cardiomegaly. Ventilator-associated tracheitis involves the trachea, not worsening parenchymal infiltrates.',
        topic: 'Pediatric Drowning',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 19 seeded (20 questions, isFree: false)')

  // ─── EXAM 20 (isFree: false) ───────────────────────────────────────────
  // Topic focus: Pediatric organ transplantation (lung), Comprehensive board-style review scenarios
  // Correct answer distribution: A=5(Q1,Q7,Q10,Q16,Q19) B=5(Q4,Q8,Q13,Q17,Q20) C=5(Q2,Q5,Q11,Q14,Q18) D=5(Q3,Q6,Q9,Q12,Q15)
  const exam20 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 20',
      examIndex: 20,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam20.id,
        questionIndex: 1,
        questionText:
          'A 14-year-old with end-stage cystic fibrosis undergoes bilateral lung transplantation. In the immediate postoperative period, what is the most common early complication that affects graft function within the first 72 hours?',
        choices: {
          A: 'Primary graft dysfunction (PGD), presenting as noncardiogenic pulmonary edema with impaired oxygenation',
          B: 'Chronic rejection (bronchiolitis obliterans syndrome)',
          C: 'Cytomegalovirus pneumonitis',
          D: 'Bronchial anastomotic dehiscence',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Primary graft dysfunction (PGD) is the most common early complication following lung transplantation, occurring within the first 72 hours. It presents as noncardiogenic pulmonary edema with bilateral infiltrates and impaired gas exchange, similar to ARDS. PGD is caused by ischemia-reperfusion injury to the transplanted lungs.',
        explanationWrong:
          'Chronic rejection (bronchiolitis obliterans syndrome) develops months to years after transplant, not in the immediate postoperative period. CMV pneumonitis typically occurs weeks to months post-transplant when immunosuppression is at peak levels. Bronchial anastomotic dehiscence is uncommon and typically presents later.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 2,
        questionText:
          'A pediatric lung transplant recipient is 6 months post-transplant and presents with progressive dyspnea, cough, and a declining FEV1. Transbronchial biopsy shows perivascular and peribronchiolar lymphocytic infiltrates. What is the most likely diagnosis?',
        choices: {
          A: 'Acute cellular rejection',
          B: 'Bacterial pneumonia',
          C: 'Primary graft dysfunction',
          D: 'Post-transplant lymphoproliferative disorder',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Perivascular and peribronchiolar lymphocytic infiltrates on transbronchial biopsy are the histologic hallmark of acute cellular rejection. This is graded using the ISHLT classification (A0-A4 for acute rejection, B0-B2 for airway inflammation). Treatment involves pulse-dose IV methylprednisolone.',
        explanationWrong:
          'PGD occurs within the first 72 hours, not at 6 months. Bacterial pneumonia shows neutrophilic infiltrates and organisms, not perivascular lymphocytic infiltration. PTLD shows large B-cell lymphoproliferation, typically EBV-associated, with a different histologic pattern.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is managing a 10-year-old post-lung transplant patient on mechanical ventilation. The surgeon requests that airway suctioning be performed carefully. What is the specific concern regarding suctioning in lung transplant recipients?',
        choices: {
          A: 'Increased risk of pneumothorax due to thin alveolar walls',
          B: 'Risk of vagal stimulation causing cardiac arrest',
          C: 'Risk of spreading infection from native to transplanted tissue',
          D: 'The transplanted lungs have no cough reflex below the bronchial anastomosis due to denervation, and the anastomosis site is fragile',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Transplanted lungs are denervated, meaning there is no cough reflex below the level of the bronchial anastomosis. This increases the risk of secretion retention and makes effective suctioning essential. Additionally, the bronchial anastomosis is fragile, especially in the early postoperative period, and aggressive suctioning could cause mucosal damage or dehiscence.',
        explanationWrong:
          'Pneumothorax risk from suctioning is not specifically increased in transplant recipients. Vagal stimulation is a general concern with deep suctioning, not specific to transplant. Infection concern is about immunosuppression, not native-to-transplanted tissue spread.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 4,
        questionText:
          'A 2-year-old infant with severe bronchopulmonary dysplasia is being evaluated for lung transplantation. The transplant team discusses the preferred surgical technique. What type of lung transplant is most commonly performed in young children?',
        choices: {
          A: 'Single lung transplant',
          B: 'Bilateral sequential lung transplant',
          C: 'Heart-lung transplant',
          D: 'Lobar transplant from a living donor exclusively',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Bilateral sequential lung transplantation is the most commonly performed technique in pediatric patients. It provides the best functional outcome with two functioning lungs and avoids the complications associated with leaving a diseased native lung in place (as would occur with single lung transplant).',
        explanationWrong:
          'Single lung transplant is occasionally performed in older children and adults but is less common in young children. Heart-lung transplant is reserved for patients with concurrent irreparable cardiac disease. Living-donor lobar transplant is performed in select cases but is not the most common approach.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 5,
        questionText:
          'A 6-month-old infant presents with acute respiratory distress, diffuse wheezing, hyperinflation on chest radiograph, and a positive RSV antigen test. The infant is on 2 L/min nasal cannula with an SpO2 of 88%. What is the most appropriate next step?',
        choices: {
          A: 'Escalate to heated high-flow nasal cannula (HFNC) at appropriate flow rates for the infant\'s weight',
          B: 'Intubate and mechanically ventilate immediately',
          C: 'Administer systemic corticosteroids and albuterol',
          D: 'Start inhaled racemic epinephrine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An infant with RSV bronchiolitis on low-flow nasal cannula with persistent hypoxemia should be escalated to heated high-flow nasal cannula (HFNC). HFNC provides higher FiO2, CPAP effect from the high flow, improves work of breathing, and may prevent the need for intubation. Flow rates of 2 L/kg/min are typical starting points.',
        explanationWrong:
          'Systemic corticosteroids and albuterol are not recommended for RSV bronchiolitis in infants; evidence does not support their routine use. Immediate intubation is premature without trying non-invasive escalation. Racemic epinephrine is for croup (subglottic edema), not bronchiolitis.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 6,
        questionText:
          'A pediatric lung transplant recipient develops progressive decline in FEV1 over 18 months post-transplant, with an obstructive pattern on spirometry that is unresponsive to bronchodilators. CT scan shows air trapping and mosaic attenuation. What is the most likely diagnosis?',
        choices: {
          A: 'Acute cellular rejection',
          B: 'Viral pneumonitis',
          C: 'Asthma',
          D: 'Bronchiolitis obliterans syndrome (chronic lung allograft dysfunction)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Bronchiolitis obliterans syndrome (BOS) is the clinical manifestation of chronic lung allograft dysfunction. It presents as a progressive, irreversible decline in FEV1 with an obstructive pattern that does not respond to bronchodilators. CT findings of air trapping and mosaic attenuation are characteristic. BOS is the leading cause of late mortality after lung transplantation.',
        explanationWrong:
          'Acute cellular rejection typically responds to augmented immunosuppression. Viral pneumonitis would show diffuse infiltrates, not air trapping. Asthma would respond to bronchodilators and is not characterized by progressive, irreversible decline.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 7,
        questionText:
          'A premature infant born at 26 weeks gestation is intubated and receiving surfactant therapy. The neonatologist requests transition to LISA (Less Invasive Surfactant Administration). What does this technique involve?',
        choices: {
          A: 'Administration of surfactant through a thin catheter placed in the trachea while the infant breathes spontaneously on CPAP',
          B: 'Aerosolized surfactant delivered through a high-flow nasal cannula',
          C: 'Surfactant instillation through a laryngeal mask airway',
          D: 'Intramuscular injection of synthetic surfactant',
        },
        correctChoice: 'A',
        explanationCorrect:
          'LISA (Less Invasive Surfactant Administration) involves placing a thin, flexible catheter into the trachea under direct laryngoscopy while the infant remains on CPAP and breathes spontaneously. Surfactant is instilled through the catheter over 1-5 minutes, after which the catheter is removed. This avoids the need for intubation and mechanical ventilation.',
        explanationWrong:
          'Aerosolized surfactant via HFNC has been investigated but is not the LISA technique. A laryngeal mask airway is a separate delivery method. Surfactant cannot be given intramuscularly; it must be delivered directly to the alveolar surface.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 8,
        questionText:
          'A lung transplant recipient is being monitored with serial spirometry. The patient\'s baseline post-transplant FEV1 was 2.0 L. The current FEV1 is 1.5 L. According to the ISHLT criteria, what BOS stage does this represent?',
        choices: {
          A: 'BOS 0 (no significant decline)',
          B: 'BOS 1 (FEV1 66-80% of baseline)',
          C: 'BOS 2 (FEV1 51-65% of baseline)',
          D: 'BOS 3 (FEV1 ≤50% of baseline)',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The current FEV1 of 1.5 L is 75% of the baseline FEV1 of 2.0 L (1.5/2.0 = 0.75). According to the ISHLT BOS classification, BOS 1 is defined as an FEV1 that is 66-80% of the best post-transplant baseline FEV1. This represents moderate chronic rejection.',
        explanationWrong:
          'BOS 0 requires FEV1 >90% of baseline or a decline <10%. BOS 2 would require an FEV1 of 51-65% of baseline (1.02-1.30 L). BOS 3 would require FEV1 ≤50% of baseline (≤1.0 L).',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 9,
        questionText:
          'A 3-year-old child with a known ventricular septal defect presents with tachypnea, hepatomegaly, and failure to thrive. Chest radiograph shows cardiomegaly with increased pulmonary vascular markings. What is the most appropriate respiratory management?',
        choices: {
          A: 'Inhaled nitric oxide to reduce pulmonary blood flow',
          B: 'High-frequency oscillatory ventilation',
          C: 'Supplemental oxygen to reduce pulmonary vascular resistance',
          D: 'Diuretic therapy and fluid restriction to reduce pulmonary congestion, with supplemental oxygen as needed',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This child has congestive heart failure from a hemodynamically significant VSD with left-to-right shunting. The increased pulmonary blood flow causes pulmonary congestion and edema. Management includes diuretic therapy (furosemide) to reduce fluid overload, fluid restriction, and supplemental oxygen as needed. Definitive treatment is surgical VSD repair.',
        explanationWrong:
          'Inhaled nitric oxide reduces pulmonary vascular resistance, which would increase left-to-right shunting and worsen the congestion. HFOV is for severe respiratory failure, not CHF management. Supplemental oxygen alone reduces PVR and could worsen left-to-right shunting; diuretics are the primary medical therapy.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 10,
        questionText:
          'A pediatric lung transplant recipient is 3 months post-transplant and develops fever, cough, and bilateral interstitial infiltrates. Bronchoalveolar lavage is positive for CMV by PCR. What is the first-line treatment?',
        choices: {
          A: 'Inhaled ribavirin',
          B: 'Oral acyclovir',
          C: 'Intravenous ganciclovir',
          D: 'Intravenous immunoglobulin (IVIG) alone',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Intravenous ganciclovir is the first-line treatment for CMV pneumonitis in immunosuppressed transplant recipients. Ganciclovir is a nucleoside analog that inhibits viral DNA polymerase. Treatment is typically continued for 2-3 weeks, followed by a transition to oral valganciclovir for maintenance prophylaxis.',
        explanationWrong:
          'Oral acyclovir has poor activity against CMV and is not effective for CMV pneumonitis. Inhaled ribavirin is used for RSV, not CMV. IVIG may be used adjunctively but is not sufficient as monotherapy for CMV pneumonitis.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 11,
        questionText:
          'A neonate born at 34 weeks gestation develops apneic spells at 24 hours of life. The episodes are characterized by cessation of breathing for 20 seconds with associated bradycardia and cyanosis. Which medication is the first-line treatment?',
        choices: {
          A: 'Doxapram',
          B: 'Theophylline',
          C: 'Caffeine citrate',
          D: 'Aminophylline',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Caffeine citrate is the first-line pharmacologic treatment for apnea of prematurity. It stimulates the central respiratory center, increases minute ventilation, enhances chemoreceptor sensitivity to CO2, and improves diaphragmatic contractility. Caffeine has a wider therapeutic index and fewer side effects compared to theophylline or aminophylline.',
        explanationWrong:
          'Doxapram is a respiratory stimulant used as a second-line agent when caffeine fails. Theophylline and aminophylline are methylxanthines that can treat apnea but have narrower therapeutic indices and more side effects than caffeine, making them second-line choices.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 12,
        questionText:
          'A pediatric lung transplant team is evaluating immunosuppression protocols. What is the standard triple-drug immunosuppression regimen used in pediatric lung transplant recipients?',
        choices: {
          A: 'Cyclosporine, azathioprine, and prednisone only',
          B: 'Sirolimus, mycophenolate, and IV immunoglobulin',
          C: 'Methotrexate, cyclophosphamide, and corticosteroids',
          D: 'Tacrolimus, mycophenolate mofetil, and corticosteroids',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The standard triple-drug immunosuppression regimen for pediatric lung transplant recipients consists of tacrolimus (a calcineurin inhibitor), mycophenolate mofetil (an antiproliferative agent), and corticosteroids. This combination provides effective immunosuppression while allowing dose adjustment of each component to minimize toxicity.',
        explanationWrong:
          'Cyclosporine-based regimens are older and have been largely replaced by tacrolimus-based protocols. Sirolimus is generally avoided early post-lung transplant due to impaired wound healing. Methotrexate and cyclophosphamide are chemotherapy agents, not standard transplant immunosuppressants.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 13,
        questionText:
          'A 7-year-old child with severe persistent asthma is receiving albuterol via metered-dose inhaler with a valved holding chamber (spacer). After 3 puffs, the child develops significant tremor, tachycardia, and anxiety. What is the most likely cause of these symptoms?',
        choices: {
          A: 'Allergic reaction to the propellant in the MDI',
          B: 'Beta-2 adrenergic side effects of albuterol including skeletal muscle tremor, tachycardia, and CNS stimulation',
          C: 'Paradoxical bronchospasm from the albuterol',
          D: 'Worsening asthma causing sympathetic nervous system activation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tremor, tachycardia, and anxiety are common beta-2 adrenergic side effects of albuterol. Albuterol stimulates beta-2 receptors in skeletal muscle (causing tremor), the heart (causing tachycardia), and the CNS (causing anxiety/nervousness). These effects are dose-related and typically self-limiting.',
        explanationWrong:
          'Allergic reactions to MDI propellants are extremely rare. Paradoxical bronchospasm would present with worsening wheezing and dyspnea, not tremor. While worsening asthma can cause tachycardia, the combination of tremor, tachycardia, and anxiety following albuterol administration is most consistent with drug side effects.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 14,
        questionText:
          'A lung transplant recipient is being considered for surveillance bronchoscopy with transbronchial biopsy. What is the primary purpose of surveillance bronchoscopy in the post-transplant period?',
        choices: {
          A: 'To detect subclinical acute rejection before it causes symptomatic graft dysfunction',
          B: 'To measure FEV1 directly during the procedure',
          C: 'To assess bronchial anastomosis healing only',
          D: 'To administer inhaled immunosuppressants directly to the graft',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Surveillance bronchoscopy with transbronchial biopsy is performed at scheduled intervals (typically at 1, 3, 6, 9, and 12 months post-transplant, then annually) to detect subclinical acute rejection. Histologic examination of the biopsy specimens can identify rejection before it becomes clinically apparent, allowing early treatment to preserve graft function.',
        explanationWrong:
          'While anastomosis assessment is done, it is not the primary purpose of surveillance bronchoscopy. FEV1 is measured by spirometry, not bronchoscopy. Inhaled immunosuppressants are not administered via bronchoscopy.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 15,
        questionText:
          'A 12-year-old child is admitted to the PICU with status asthmaticus. Despite continuous albuterol nebulization and IV magnesium sulfate, the child remains in severe distress with a silent chest and rising PaCO2. What is the next escalation step?',
        choices: {
          A: 'Switch from nebulized to oral albuterol',
          B: 'Add inhaled ipratropium bromide only',
          C: 'Administer subcutaneous terbutaline',
          D: 'IV terbutaline infusion or consideration of noninvasive ventilation (NIV), with preparation for intubation if clinical status continues to deteriorate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In status asthmaticus refractory to continuous nebulized albuterol and IV magnesium, escalation includes IV terbutaline (a continuous beta-agonist infusion) and/or noninvasive ventilation (bilevel PAP). If the patient continues to deteriorate with rising PaCO2 and impending respiratory failure, intubation and mechanical ventilation must be performed.',
        explanationWrong:
          'Oral albuterol is a less effective route and inappropriate for severe acute asthma. Ipratropium alone is inadequate for this severity. Subcutaneous terbutaline may have a role but IV infusion is preferred for severe, refractory cases due to more reliable absorption and titratability.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 16,
        questionText:
          'A child with a lung transplant develops Aspergillus fumigatus isolated from a bronchoalveolar lavage specimen. The patient is asymptomatic. What is the appropriate management?',
        choices: {
          A: 'Surgical debridement of the affected lobe',
          B: 'No treatment needed; Aspergillus is a normal commensal in transplanted lungs',
          C: 'Initiate prophylactic antifungal therapy with voriconazole or inhaled amphotericin B, as Aspergillus colonization in a lung transplant recipient carries significant risk for invasive aspergillosis',
          D: 'Discontinue immunosuppression to allow immune clearance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Aspergillus isolation from a lung transplant recipient, even if asymptomatic, warrants antifungal prophylaxis or preemptive treatment because immunosuppressed patients are at high risk for progression to invasive aspergillosis, which carries significant morbidity and mortality. Voriconazole or inhaled amphotericin B are commonly used agents.',
        explanationWrong:
          'Aspergillus is not a normal commensal and should not be ignored in an immunosuppressed patient. Surgical debridement is reserved for invasive disease not responding to medical therapy. Discontinuing immunosuppression would precipitate acute rejection of the transplanted lungs.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 17,
        questionText:
          'A premature neonate at 25 weeks gestation is on mechanical ventilation with an FiO2 of 0.45. The respiratory therapist is concerned about the risk of retinopathy of prematurity (ROP). What SpO2 target range is recommended to reduce the risk of severe ROP while maintaining adequate oxygenation?',
        choices: {
          A: 'SpO2 98-100%',
          B: 'SpO2 90-95%',
          C: 'SpO2 80-85%',
          D: 'SpO2 75-80%',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current evidence supports targeting an SpO2 of 90-95% in extremely premature infants to balance the risk of ROP (increased with higher SpO2) against the risk of mortality and NEC (increased with lower SpO2 targets). This range represents the consensus from multiple large clinical trials including SUPPORT, BOOST II, and COT.',
        explanationWrong:
          'SpO2 of 98-100% significantly increases the risk of severe ROP and provides no additional benefit. SpO2 targets of 80-85% or 75-80% are too low and are associated with increased mortality in premature infants.',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 18,
        questionText:
          'A pediatric lung transplant recipient develops post-transplant lymphoproliferative disorder (PTLD). What is the most significant risk factor for PTLD, and what is the initial treatment approach?',
        choices: {
          A: 'History of asthma; treatment is inhaled corticosteroids',
          B: 'Male sex; treatment is surgical resection',
          C: 'EBV seronegativity at time of transplant (donor EBV+/recipient EBV-); initial treatment is reduction of immunosuppression',
          D: 'CMV infection; treatment is IV ganciclovir',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The most significant risk factor for PTLD is EBV seronegativity in the recipient at the time of transplant (EBV donor-positive/recipient-negative mismatch). The primary uncontrolled EBV infection in the immunosuppressed host drives B-cell proliferation. The initial treatment approach is reduction of immunosuppression to allow immune reconstitution and control of EBV-driven proliferation.',
        explanationWrong:
          'Asthma history is not a risk factor for PTLD. Male sex is not the primary risk factor. CMV infection is a separate post-transplant complication; while it contributes to immunosuppression burden, EBV mismatch is the primary PTLD risk factor.',
        topic: 'Pediatric Lung Transplantation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 19,
        questionText:
          'A 4-year-old child with epiglottitis presents with high fever, drooling, tripod positioning, and a muffled voice. The child appears toxic. What is the most appropriate initial management?',
        choices: {
          A: 'Obtain a lateral neck radiograph to confirm the diagnosis before any airway intervention',
          B: 'Immediately perform a blind nasotracheal intubation at the bedside',
          C: 'Keep the child calm in a position of comfort, avoid agitation, prepare for controlled airway management in the operating room with a surgeon present for possible emergency tracheostomy',
          D: 'Administer nebulized racemic epinephrine to reduce epiglottic swelling',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Acute epiglottitis with a toxic-appearing child is an airway emergency. The child should be kept calm and in a position of comfort. Agitation can precipitate complete airway obstruction. Definitive airway management should occur in a controlled environment (operating room) with an experienced team, including an ENT surgeon prepared for emergency surgical airway if intubation fails.',
        explanationWrong:
          'Blind nasotracheal intubation at the bedside in an uncontrolled setting is dangerous and could cause complete obstruction. Radiographs delay definitive management and lying the child down can precipitate obstruction. Racemic epinephrine is for croup (subglottic edema), not epiglottitis (supraglottic swelling).',
        topic: 'Comprehensive Board Review',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is performing pulmonary function testing on a 15-year-old lung transplant recipient at a routine follow-up visit. The FEV1 is 92% of the best post-transplant baseline. The FEF25-75% has declined by 30% from baseline. What does this pattern suggest?',
        choices: {
          A: 'Normal lung function with no concern',
          B: 'Early small airway dysfunction that may represent early bronchiolitis obliterans syndrome (BOS 0-p), warranting closer surveillance and possible bronchoscopy',
          C: 'Acute rejection requiring immediate pulse steroids',
          D: 'Restrictive lung disease from chest wall abnormality',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An FEV1 that is still above 90% of baseline but with a significant decline in FEF25-75% (a marker of small airway function) suggests early small airway dysfunction. This pattern, termed BOS 0-p (potential BOS), may be an early indicator of developing chronic rejection. It warrants increased surveillance frequency and consideration of diagnostic bronchoscopy with transbronchial biopsy.',
        explanationWrong:
          'A 30% decline in FEF25-75% is not normal and should not be ignored. While the FEV1 is above the threshold for BOS 1, the small airway changes are concerning. Immediate pulse steroids are for confirmed acute rejection. Restrictive disease would show reduced TLC and FVC, not isolated small airway changes.',
        topic: 'Pediatric Lung Transplantation',
      },
    ],
  })

  console.log('  ✓ NPS Mini Exam 20 seeded (20 questions, isFree: false)')

  console.log('Done seeding NPS mini exams 16-20!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
