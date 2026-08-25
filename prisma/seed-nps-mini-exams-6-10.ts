import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 6-10...')

  // ─── EXAM 6 ──────────────────────────────────────────────────────────
  // Topics: Pediatric mechanical ventilation strategies, Pediatric asthma and status asthmaticus
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-D, Q2-B, Q3-A, Q4-C, Q5-B, Q6-D, Q7-A, Q8-C, Q9-B, Q10-A, Q11-D, Q12-C, Q13-A, Q14-B, Q15-D, Q16-C, Q17-A, Q18-B, Q19-C, Q20-D
  const exam6 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 6',
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
          'A 3-year-old child with severe pneumonia is intubated and placed on volume-controlled ventilation. The peak inspiratory pressure suddenly increases from 25 to 40 cmH2O while plateau pressure remains at 20 cmH2O. What is the most likely cause?',
        choices: {
          A: 'Pneumothorax',
          B: 'Atelectasis',
          C: 'Pulmonary edema',
          D: 'Mucus plugging of the endotracheal tube',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An increased peak pressure with an unchanged plateau pressure indicates increased airway resistance. Mucus plugging of the ETT is the most common cause of acute airway resistance increase in intubated pediatric patients.',
        explanationWrong:
          'Pneumothorax, atelectasis, and pulmonary edema would all increase the plateau pressure because they reduce lung compliance. When only the peak pressure rises while plateau stays the same, the problem is resistive (airway), not compliance-related.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 2,
        questionText:
          'When initiating mechanical ventilation in a pediatric patient, which tidal volume range is recommended to minimize ventilator-induced lung injury?',
        choices: {
          A: '10-12 mL/kg ideal body weight',
          B: '5-8 mL/kg ideal body weight',
          C: '3-4 mL/kg ideal body weight',
          D: '12-15 mL/kg ideal body weight',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Lung-protective ventilation in pediatric patients targets tidal volumes of 5-8 mL/kg ideal body weight. This range reduces alveolar overdistension and minimizes the risk of ventilator-induced lung injury.',
        explanationWrong:
          'Tidal volumes of 10-15 mL/kg are excessive and increase the risk of volutrauma and barotrauma. Volumes of 3-4 mL/kg are typically too low for conventional ventilation and may lead to inadequate ventilation and atelectasis.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 3,
        questionText:
          'A 7-year-old child presents to the emergency department with acute-onset wheezing, tachypnea, and accessory muscle use. SpO2 is 90% on room air. After three rounds of continuous nebulized albuterol, there is no significant improvement. What is the most appropriate next intervention?',
        choices: {
          A: 'Begin helium-oxygen therapy immediately',
          B: 'Administer intravenous magnesium sulfate',
          C: 'Perform endotracheal intubation',
          D: 'Administer inhaled nitric oxide',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In status asthmaticus refractory to continuous nebulized beta-agonists, intravenous magnesium sulfate is the recommended next step. It acts as a smooth muscle relaxant and can reduce bronchospasm in severe asthma exacerbations.',
        explanationWrong:
          'Heliox may be considered but is not the priority next step in refractory status asthmaticus when IV magnesium has not yet been tried. Intubation should be avoided unless the patient shows signs of respiratory failure. Inhaled nitric oxide is not a standard treatment for asthma.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 4,
        questionText:
          'A mechanically ventilated 5-year-old with status asthmaticus has an auto-PEEP of 8 cmH2O. Which ventilator adjustment would best reduce air trapping?',
        choices: {
          A: 'Increase the respiratory rate',
          B: 'Increase the inspiratory time',
          C: 'Decrease the respiratory rate to prolong expiratory time',
          D: 'Increase the set tidal volume',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Decreasing the respiratory rate allows more time for exhalation, reducing air trapping and auto-PEEP. In obstructive disease, prolonging the expiratory phase is the primary strategy to address dynamic hyperinflation.',
        explanationWrong:
          'Increasing the respiratory rate shortens expiratory time and worsens air trapping. Increasing inspiratory time also reduces available expiratory time. Increasing tidal volume delivers more gas that must be exhaled, potentially worsening hyperinflation.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 5,
        questionText:
          'Which clinical finding best differentiates a severe asthma exacerbation from a life-threatening asthma exacerbation in a pediatric patient?',
        choices: {
          A: 'Use of accessory muscles',
          B: 'Absence of wheezing with a silent chest',
          C: 'Tachycardia above 120 beats per minute',
          D: 'Inability to speak in full sentences',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A silent chest (absence of wheezing) in a patient with asthma indicates critically reduced airflow and is a hallmark of life-threatening asthma. It suggests the patient is no longer moving enough air to generate wheezing sounds.',
        explanationWrong:
          'Accessory muscle use, tachycardia, and inability to speak in full sentences are all signs of severe asthma. However, a silent chest specifically indicates a life-threatening situation because airflow is so severely limited that no wheezing is audible.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 6,
        questionText:
          'A pressure-volume loop on a mechanically ventilated pediatric patient shows a "beak" or overdistension pattern at the top of the inspiratory limb. Which adjustment should be made?',
        choices: {
          A: 'Increase PEEP',
          B: 'Increase inspiratory flow rate',
          C: 'Increase the set tidal volume',
          D: 'Decrease the set tidal volume or pressure limit',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A beak appearance at the top of the pressure-volume loop indicates alveolar overdistension. Decreasing the tidal volume or pressure limit will reduce end-inspiratory volume and prevent further overdistension and potential lung injury.',
        explanationWrong:
          'Increasing PEEP would add further volume to already overdistended lungs. Increasing inspiratory flow rate does not address the overdistension problem. Increasing tidal volume would worsen the overdistension and risk volutrauma.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 7,
        questionText:
          'A 10-year-old with asthma is being treated with continuous albuterol nebulization. The nurse reports the child now has a heart rate of 180 bpm with premature ventricular contractions on the monitor. What should the respiratory therapist recommend?',
        choices: {
          A: 'Reduce the albuterol dose or frequency and notify the physician',
          B: 'Continue the current treatment as tachycardia is expected',
          C: 'Switch to racemic epinephrine nebulization',
          D: 'Immediately administer ipratropium bromide only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Excessive beta-agonist use can cause significant tachycardia and cardiac dysrhythmias. When a patient develops PVCs during continuous albuterol, the dose should be reduced or the frequency decreased, and the physician should be notified immediately.',
        explanationWrong:
          'While mild tachycardia is expected with albuterol, PVCs represent a cardiac side effect requiring dose modification. Switching to racemic epinephrine would not resolve beta-agonist-related tachycardia. Ipratropium alone is insufficient for severe asthma management.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 8,
        questionText:
          'In pediatric pressure-controlled ventilation, which parameter directly determines the delivered tidal volume?',
        choices: {
          A: 'Set respiratory rate',
          B: 'FiO2 setting',
          C: 'The difference between set inspiratory pressure and PEEP, combined with lung compliance',
          D: 'Inspiratory flow rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In pressure-controlled ventilation, tidal volume is determined by the driving pressure (inspiratory pressure minus PEEP) and the patient\'s lung compliance. Higher compliance or higher driving pressure yields a larger tidal volume.',
        explanationWrong:
          'Respiratory rate affects minute ventilation but does not directly determine the delivered tidal volume per breath. FiO2 affects oxygenation, not volume delivery. In pressure-controlled modes, the ventilator controls pressure, not flow, so flow rate is variable and depends on compliance and resistance.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 9,
        questionText:
          'A 6-year-old child with status asthmaticus is placed on noninvasive positive pressure ventilation (NIPPV). Which setting adjustments would be most beneficial for this patient?',
        choices: {
          A: 'High EPAP with low IPAP',
          B: 'Low EPAP with high IPAP to support expiratory flow limitation',
          C: 'Equal IPAP and EPAP settings',
          D: 'High EPAP with high IPAP',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In status asthmaticus, a low EPAP helps prevent worsening air trapping while a high IPAP provides sufficient inspiratory pressure support to overcome increased airway resistance and reduce the work of breathing.',
        explanationWrong:
          'High EPAP can worsen dynamic hyperinflation in obstructive disease. Equal IPAP and EPAP provides no pressure support for ventilation (essentially CPAP). High EPAP with high IPAP would exacerbate air trapping while providing excessive support.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 10,
        questionText:
          'A 4-year-old child is intubated with a cuffed 4.5 mm ID endotracheal tube. What is the recommended cuff pressure range to prevent tracheal mucosal injury?',
        choices: {
          A: '20-25 cmH2O',
          B: '30-35 cmH2O',
          C: '10-15 cmH2O',
          D: '40-50 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Cuff pressure should be maintained at 20-25 cmH2O (below tracheal capillary perfusion pressure of approximately 25-30 cmH2O) to provide an adequate seal while preventing tracheal mucosal ischemia and injury.',
        explanationWrong:
          'Pressures of 30 cmH2O or higher exceed tracheal capillary perfusion pressure and can cause mucosal ischemia, ulceration, and potential tracheal stenosis. Pressures of 10-15 cmH2O may be too low to maintain an adequate seal, leading to air leak and aspiration risk.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 11,
        questionText:
          'During mechanical ventilation of a child with severe asthma, the respiratory therapist notices the expiratory flow waveform does not return to baseline before the next breath is delivered. This finding indicates which of the following?',
        choices: {
          A: 'Inadequate tidal volume delivery',
          B: 'Excessive PEEP',
          C: 'Normal ventilator function',
          D: 'The presence of auto-PEEP and air trapping',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When the expiratory flow waveform does not return to the zero baseline before the next inspiration begins, it indicates incomplete exhalation, air trapping, and the presence of auto-PEEP. This is common in obstructive diseases like severe asthma.',
        explanationWrong:
          'This finding is not related to inadequate tidal volume or excessive set PEEP. It is not normal ventilator function. The incomplete exhalation specifically indicates dynamic hyperinflation and intrinsic (auto) PEEP.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 12,
        questionText:
          'Which of the following is the primary reason for using permissive hypercapnia in a mechanically ventilated pediatric patient with severe asthma?',
        choices: {
          A: 'To improve oxygenation through the Bohr effect',
          B: 'To increase cardiac output',
          C: 'To minimize ventilator-induced lung injury by allowing lower tidal volumes and pressures',
          D: 'To enhance mucociliary clearance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Permissive hypercapnia accepts a higher PaCO2 to allow the use of lower tidal volumes and airway pressures. This strategy reduces the risk of barotrauma and volutrauma in patients with severe obstructive disease where high pressures are needed to achieve normal PaCO2.',
        explanationWrong:
          'While elevated CO2 does shift the oxyhemoglobin curve (Bohr effect), this is not the primary rationale. Permissive hypercapnia does not reliably increase cardiac output or enhance mucociliary clearance. The strategy is fundamentally about lung protection.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 13,
        questionText:
          'A pediatric patient with asthma receives ipratropium bromide in addition to albuterol. What is the mechanism of action of ipratropium bromide?',
        choices: {
          A: 'Anticholinergic blockade of muscarinic receptors causing bronchodilation',
          B: 'Beta-2 adrenergic receptor stimulation',
          C: 'Leukotriene receptor antagonism',
          D: 'Phosphodiesterase inhibition',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ipratropium bromide is an anticholinergic agent that blocks muscarinic receptors in the airway smooth muscle. This prevents acetylcholine-mediated bronchoconstriction and reduces mucus secretion, providing bronchodilation through a different pathway than beta-agonists.',
        explanationWrong:
          'Beta-2 receptor stimulation is the mechanism of albuterol, not ipratropium. Leukotriene receptor antagonism describes montelukast. Phosphodiesterase inhibition describes theophylline. Ipratropium works through the parasympathetic (cholinergic) pathway.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 14,
        questionText:
          'When transitioning a pediatric patient from conventional ventilation to high-frequency oscillatory ventilation (HFOV), which initial mean airway pressure setting is typically recommended?',
        choices: {
          A: 'Same as the conventional ventilator mean airway pressure',
          B: '2-5 cmH2O above the mean airway pressure used on conventional ventilation',
          C: '5-10 cmH2O below the conventional mean airway pressure',
          D: 'Start at 10 cmH2O regardless of prior settings',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When transitioning to HFOV, the initial mean airway pressure is typically set 2-5 cmH2O above the mean airway pressure used on conventional ventilation. This higher pressure is necessary to achieve adequate lung recruitment on HFOV.',
        explanationWrong:
          'Using the same pressure from conventional ventilation is usually insufficient for adequate lung recruitment on HFOV. Setting pressure 5-10 cmH2O below would cause derecruitment. A fixed 10 cmH2O starting point does not account for the patient\'s previous requirements.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 15,
        questionText:
          'A 9-year-old with severe persistent asthma is on a ventilator with an I:E ratio of 1:2. The respiratory therapist notes significant air trapping. What I:E ratio adjustment would be most appropriate?',
        choices: {
          A: '1:1',
          B: '2:1',
          C: '1:1.5',
          D: '1:4 or greater',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In severe asthma with air trapping, an I:E ratio of 1:4 or greater provides a prolonged expiratory phase, allowing more complete exhalation and reducing dynamic hyperinflation and auto-PEEP.',
        explanationWrong:
          'An I:E ratio of 1:1 or 2:1 shortens expiratory time relative to inspiration, worsening air trapping. An I:E of 1:1.5 provides only a minimal increase in expiratory time from the current 1:2 and is likely insufficient to resolve significant air trapping.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 16,
        questionText:
          'A 2-year-old is receiving pressure-regulated volume control (PRVC) ventilation. The ventilator is consistently alarming for high pressure. Which of the following is the most appropriate response?',
        choices: {
          A: 'Increase the high pressure alarm limit',
          B: 'Switch to a higher tidal volume setting',
          C: 'Assess the patient for worsening compliance or increased airway resistance',
          D: 'Increase the respiratory rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In PRVC mode, the ventilator adjusts pressure to deliver a target volume. If high pressure alarms are triggering, it indicates the ventilator needs more pressure to deliver the set volume, suggesting worsening lung compliance or increased resistance. The patient should be assessed for causes such as bronchospasm, mucus plugging, or pneumothorax.',
        explanationWrong:
          'Simply increasing the alarm limit masks the underlying problem. Increasing tidal volume would require even higher pressures. Increasing the rate does not address the cause of high pressure alarms. The priority is to identify and treat the cause of deteriorating mechanics.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 17,
        questionText:
          'Which of the following medications serves as the cornerstone of long-term asthma control in pediatric patients with persistent asthma?',
        choices: {
          A: 'Inhaled corticosteroids',
          B: 'Short-acting beta-agonists',
          C: 'Oral leukotriene modifiers',
          D: 'Long-acting muscarinic antagonists',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled corticosteroids (ICS) are the first-line controller therapy for persistent asthma in children. They reduce airway inflammation, decrease hyperresponsiveness, and prevent exacerbations more effectively than any other single controller medication.',
        explanationWrong:
          'Short-acting beta-agonists are rescue medications, not controllers. Leukotriene modifiers are alternative or add-on therapy but not the cornerstone. Long-acting muscarinic antagonists may be used as add-on therapy in severe asthma but are not first-line controllers.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 18,
        questionText:
          'During ventilation of a sedated and paralyzed pediatric patient, the respiratory therapist notices the set tidal volume is 6 mL/kg but the exhaled tidal volume is only 4 mL/kg. The most likely cause is:',
        choices: {
          A: 'A significant air leak around the endotracheal tube',
          B: 'Patient triggering additional breaths',
          C: 'Ventilator auto-cycling',
          D: 'Excessive PEEP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A discrepancy between set and exhaled tidal volume in a sedated, paralyzed patient most commonly indicates an air leak around the endotracheal tube. The leak allows gas to escape during inspiration, so less volume returns during exhalation.',
        explanationWrong:
          'A sedated and paralyzed patient cannot trigger additional breaths. Auto-cycling would cause extra breaths but not a tidal volume discrepancy on individual breaths. Excessive PEEP would not directly cause a difference between set and exhaled tidal volumes.',
        topic: 'Pediatric Mechanical Ventilation',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 19,
        questionText:
          'A child with severe asthma is receiving IV terbutaline. Which adverse effect is of greatest concern and requires close monitoring?',
        choices: {
          A: 'Hypotension',
          B: 'Hyperkalemia',
          C: 'Cardiac dysrhythmias and hypokalemia',
          D: 'Hepatotoxicity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'IV terbutaline is a potent beta-agonist that can cause significant tachycardia, cardiac dysrhythmias, and hypokalemia due to intracellular potassium shift. Continuous cardiac monitoring and serial potassium levels are essential during infusion.',
        explanationWrong:
          'Terbutaline typically causes mild hypotension from peripheral vasodilation but this is less concerning than cardiac effects. Beta-agonists cause hypokalemia, not hyperkalemia. Hepatotoxicity is not a recognized side effect of terbutaline.',
        topic: 'Pediatric Asthma and Status Asthmaticus',
      },
      {
        miniExamId: exam6.id,
        questionIndex: 20,
        questionText:
          'A ventilated pediatric patient shows a flow-volume loop with a scooped-out or concave expiratory limb. This pattern is most consistent with:',
        choices: {
          A: 'Restrictive lung disease',
          B: 'Upper airway obstruction',
          C: 'Normal lung mechanics',
          D: 'Obstructive airway disease',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A scooped-out or concave expiratory limb on the flow-volume loop is characteristic of obstructive airway disease. It reflects expiratory flow limitation caused by airway narrowing, as seen in asthma or bronchiolitis.',
        explanationWrong:
          'Restrictive lung disease typically shows a normal-shaped but smaller flow-volume loop. Upper airway obstruction would show a flattened or truncated inspiratory or expiratory limb. Normal lung mechanics produce a smooth, convex expiratory limb.',
        topic: 'Pediatric Mechanical Ventilation',
      },
    ],
  })

  // ─── EXAM 7 ──────────────────────────────────────────────────────────
  // Topics: Croup, epiglottitis, upper airway obstruction, Neonatal jaundice and phototherapy
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-C, Q2-A, Q3-D, Q4-B, Q5-A, Q6-C, Q7-B, Q8-D, Q9-A, Q10-B, Q11-D, Q12-C, Q13-B, Q14-A, Q15-C, Q16-D, Q17-B, Q18-A, Q19-D, Q20-C
  const exam7 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 7',
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
          'A 2-year-old presents with a barking cough, inspiratory stridor, and low-grade fever. An anteroposterior neck radiograph shows subglottic narrowing. Which condition is most consistent with these findings?',
        choices: {
          A: 'Epiglottitis',
          B: 'Foreign body aspiration',
          C: 'Viral croup (laryngotracheobronchitis)',
          D: 'Bacterial tracheitis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The classic presentation of viral croup includes a barking (seal-like) cough, inspiratory stridor, and low-grade fever in a toddler. The "steeple sign" on AP neck radiograph represents subglottic narrowing from inflammation and edema below the vocal cords.',
        explanationWrong:
          'Epiglottitis presents with high fever, drooling, and a "thumb sign" on lateral neck film. Foreign body aspiration has sudden onset without fever. Bacterial tracheitis presents with higher fever and a toxic appearance with tracheal irregularity on imaging.',
        topic: 'Croup and Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 2,
        questionText:
          'A child with moderate croup continues to have stridor at rest after receiving nebulized racemic epinephrine. The respiratory therapist should recommend which additional treatment?',
        choices: {
          A: 'Administer oral or intramuscular dexamethasone',
          B: 'Immediate endotracheal intubation',
          C: 'Begin heated high-flow nasal cannula at maximum flow',
          D: 'Administer inhaled albuterol',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Dexamethasone (0.6 mg/kg oral or IM) is the standard anti-inflammatory treatment for croup and should be administered if not already given. It reduces subglottic edema and has been shown to decrease the need for return visits and hospitalization.',
        explanationWrong:
          'Intubation is reserved for severe cases with impending respiratory failure. High-flow nasal cannula does not directly treat the subglottic edema. Albuterol targets lower airway bronchospasm and is not effective for the upper airway inflammation in croup.',
        topic: 'Croup and Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 3,
        questionText:
          'A 4-year-old presents with acute onset of high fever, toxic appearance, drooling, and is sitting in a tripod position. Which is the most important initial action?',
        choices: {
          A: 'Obtain a throat culture immediately',
          B: 'Perform a lateral neck radiograph',
          C: 'Insert a tongue depressor to visualize the oropharynx',
          D: 'Keep the child calm and call for emergency airway management',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This presentation is classic for epiglottitis. The priority is to keep the child calm and avoid any agitation that could precipitate complete airway obstruction. Emergency airway management should be arranged with personnel skilled in difficult airway management.',
        explanationWrong:
          'Throat cultures and tongue depressors should never be attempted as they can trigger laryngospasm and complete obstruction. Radiographs may be obtained only if the diagnosis is uncertain and should not delay airway management. The child should remain in a position of comfort.',
        topic: 'Epiglottitis',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 4,
        questionText:
          'A full-term neonate develops visible jaundice at 18 hours of life. The total serum bilirubin is 12 mg/dL. What is the most concerning aspect of this presentation?',
        choices: {
          A: 'The bilirubin level of 12 mg/dL alone is dangerous',
          B: 'Jaundice appearing within the first 24 hours of life suggests pathologic jaundice',
          C: 'This is a normal physiologic finding requiring no further workup',
          D: 'The infant likely has biliary atresia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Jaundice appearing within the first 24 hours of life is always considered pathologic and requires urgent evaluation. It may indicate hemolytic disease (such as ABO or Rh incompatibility), which can cause rapid bilirubin rise and potential kernicterus.',
        explanationWrong:
          'While 12 mg/dL is elevated for the first day of life, the timing is more concerning than the absolute level alone. Physiologic jaundice typically appears after 24 hours. Biliary atresia presents with conjugated (direct) hyperbilirubinemia and acholic stools, not early unconjugated jaundice.',
        topic: 'Neonatal Jaundice',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 5,
        questionText:
          'Which of the following is the primary mechanism by which phototherapy reduces serum bilirubin levels?',
        choices: {
          A: 'Photoisomerization converts bilirubin into water-soluble isomers excreted without hepatic conjugation',
          B: 'Phototherapy stimulates hepatic enzyme production',
          C: 'Ultraviolet light directly destroys bilirubin molecules',
          D: 'Phototherapy increases intestinal motility to enhance bilirubin excretion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Phototherapy works primarily through photoisomerization, converting unconjugated bilirubin in the skin into water-soluble structural and configurational isomers (primarily lumirubin) that can be excreted in bile and urine without requiring hepatic conjugation.',
        explanationWrong:
          'Phototherapy does not stimulate hepatic enzyme production. The therapeutic wavelengths are blue-green light (not ultraviolet), and they convert rather than destroy bilirubin. While adequate hydration and feeding promote stooling, phototherapy itself does not increase intestinal motility.',
        topic: 'Neonatal Jaundice and Phototherapy',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 6,
        questionText:
          'A 3-year-old previously healthy child suddenly develops choking and unilateral wheezing while playing with small toys. A chest radiograph shows hyperinflation of the right lung. What is the most likely diagnosis?',
        choices: {
          A: 'Right-sided pneumonia',
          B: 'Right-sided pneumothorax',
          C: 'Foreign body aspiration in the right main bronchus',
          D: 'Acute asthma exacerbation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sudden onset of choking and unilateral wheezing in a toddler playing with small objects strongly suggests foreign body aspiration. Unilateral hyperinflation occurs because the foreign body acts as a ball-valve, allowing air entry but trapping it on expiration.',
        explanationWrong:
          'Pneumonia would show infiltrates, not hyperinflation. Pneumothorax would show absence of lung markings, not hyperinflation of the lung parenchyma. Asthma causes bilateral wheezing, not unilateral findings with sudden onset during play.',
        topic: 'Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 7,
        questionText:
          'During phototherapy for neonatal jaundice, which nursing intervention is essential to maximize treatment effectiveness?',
        choices: {
          A: 'Keep the infant fully clothed to prevent heat loss',
          B: 'Maximize skin surface area exposure by minimizing clothing and keeping eyes shielded',
          C: 'Position the infant prone only',
          D: 'Turn off phototherapy during feedings',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Maximizing skin exposure increases the surface area available for photoisomerization, enhancing treatment effectiveness. The infant should wear only a diaper, and eye shields must be used to protect the retinas from potential light damage.',
        explanationWrong:
          'Keeping the infant fully clothed blocks light from reaching the skin and reduces effectiveness. The infant should be repositioned frequently, not kept prone only. While brief interruptions for feeding are acceptable, continuous phototherapy (including during feedings when possible) provides optimal results.',
        topic: 'Neonatal Jaundice and Phototherapy',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 8,
        questionText:
          'A child with croup who was treated with racemic epinephrine in the emergency department shows improvement but then develops worsening stridor 2 hours later. This phenomenon is known as:',
        choices: {
          A: 'Medication resistance',
          B: 'Anaphylaxis',
          C: 'Paradoxical bronchospasm',
          D: 'Rebound effect after the medication wears off',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Racemic epinephrine provides temporary relief of airway edema through local vasoconstriction, but the effect typically lasts 1-2 hours. As the medication wears off, symptoms can return to baseline or worsen, known as a rebound effect. This is why observation for at least 2-4 hours after treatment is required.',
        explanationWrong:
          'This is not medication resistance as the drug was initially effective. It is not anaphylaxis, which would present with different systemic symptoms. Paradoxical bronchospasm involves lower airway worsening with bronchodilators and is a different phenomenon.',
        topic: 'Croup and Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 9,
        questionText:
          'A neonate born at 35 weeks gestation develops jaundice on day 3 of life. The total serum bilirubin is plotted on the Bhutani nomogram and falls in the high-risk zone. Which intervention is most appropriate?',
        choices: {
          A: 'Initiate phototherapy immediately',
          B: 'Reassess bilirubin in 24 hours',
          C: 'Discharge with outpatient follow-up in one week',
          D: 'Begin oral phenobarbital',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When the total serum bilirubin falls in the high-risk zone on the Bhutani nomogram (hour-specific bilirubin nomogram), phototherapy should be initiated immediately to prevent further rise toward the exchange transfusion threshold and reduce the risk of kernicterus.',
        explanationWrong:
          'Waiting 24 hours risks further bilirubin elevation in a high-risk neonate. Discharging with weekly follow-up is inadequate for high-risk bilirubin levels. Phenobarbital has been used historically but is not the standard treatment and is rarely used in current practice.',
        topic: 'Neonatal Jaundice and Phototherapy',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 10,
        questionText:
          'Bacterial tracheitis differs from viral croup primarily in that bacterial tracheitis:',
        choices: {
          A: 'Produces a barking cough only',
          B: 'Presents with high fever, toxic appearance, and does not respond to racemic epinephrine',
          C: 'Is caused by parainfluenza virus',
          D: 'Always causes complete airway obstruction',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Bacterial tracheitis typically presents with high fever, a toxic-appearing child, and thick purulent tracheal secretions. Unlike croup, it does not respond to racemic epinephrine or corticosteroids because the obstruction is caused by purulent secretions and mucosal inflammation rather than subglottic edema alone.',
        explanationWrong:
          'While barking cough may be present, it is also seen in croup and is not the distinguishing feature. Parainfluenza virus is the cause of viral croup, not bacterial tracheitis. Bacterial tracheitis does not always cause complete obstruction, though it can progress to severe airway compromise.',
        topic: 'Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 11,
        questionText:
          'Kernicterus is a serious complication of neonatal hyperbilirubinemia. Which of the following best describes the pathophysiology of kernicterus?',
        choices: {
          A: 'Bilirubin deposits in the liver causing hepatic failure',
          B: 'Conjugated bilirubin causing renal tubular damage',
          C: 'Bilirubin causing hemolysis of red blood cells',
          D: 'Unconjugated bilirubin crossing the blood-brain barrier and depositing in the basal ganglia and brainstem nuclei',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Kernicterus occurs when unconjugated (indirect) bilirubin, which is lipid-soluble, crosses the blood-brain barrier and deposits in the basal ganglia, hippocampus, and brainstem nuclei. This causes irreversible neuronal damage leading to cerebral palsy, hearing loss, and intellectual disability.',
        explanationWrong:
          'Bilirubin toxicity in kernicterus targets the brain, not the liver. Conjugated bilirubin is water-soluble and does not cross the blood-brain barrier, so it does not cause kernicterus. Bilirubin does not cause hemolysis; rather, hemolysis causes elevated bilirubin.',
        topic: 'Neonatal Jaundice',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 12,
        questionText:
          'A 5-year-old child presents with inspiratory stridor that worsens with crying. The stridor has been present since infancy and has not changed. Which condition is most likely?',
        choices: {
          A: 'Acute epiglottitis',
          B: 'Laryngomalacia',
          C: 'Viral croup',
          D: 'Foreign body aspiration',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Laryngomalacia is the most common cause of chronic inspiratory stridor in infants and young children. It is caused by collapse of supraglottic structures during inspiration and typically worsens with crying, feeding, or supine positioning. Most cases are self-limiting.',
        explanationWrong:
          'Epiglottitis is acute in onset with high fever. Viral croup is an acute illness with a barking cough that resolves within days. Foreign body aspiration has a sudden onset and would not have been present since infancy.',
        topic: 'Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 13,
        questionText:
          'Which type of phototherapy light source provides the most effective irradiance for treating neonatal jaundice?',
        choices: {
          A: 'Incandescent white light',
          B: 'Blue LED light in the 460-490 nm wavelength range',
          C: 'Ultraviolet light at 250 nm',
          D: 'Green fluorescent light',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Blue LED lights in the 460-490 nm wavelength range are the most effective for phototherapy because this wavelength corresponds to the peak absorption spectrum of bilirubin, maximizing photoisomerization and bilirubin clearance.',
        explanationWrong:
          'Incandescent white light is less effective because only a portion of its spectrum falls in the bilirubin absorption range. Ultraviolet light at 250 nm is harmful and not used therapeutically. Green light is less effective than blue light for bilirubin photoisomerization.',
        topic: 'Neonatal Jaundice and Phototherapy',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 14,
        questionText:
          'A child with suspected croup is evaluated using the Westley Croup Score. Which parameter is NOT included in this scoring system?',
        choices: {
          A: 'Oxygen saturation on room air',
          B: 'Level of consciousness',
          C: 'Presence of stridor',
          D: 'Degree of air entry',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Westley Croup Score assesses five parameters: stridor, retractions, air entry, cyanosis, and level of consciousness. Oxygen saturation is not one of the scored parameters, although it is certainly monitored clinically.',
        explanationWrong:
          'Level of consciousness, stridor, and air entry are all components of the Westley Croup Score. The score specifically evaluates these clinical findings to classify croup severity from mild to severe.',
        topic: 'Croup and Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 15,
        questionText:
          'An exchange transfusion is being considered for a neonate with severe hyperbilirubinemia. What is the primary purpose of this procedure?',
        choices: {
          A: 'To administer photosensitizing agents',
          B: 'To stimulate the liver to conjugate bilirubin faster',
          C: 'To rapidly remove bilirubin and antibody-coated red blood cells from the circulation',
          D: 'To increase the infant\'s blood volume',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Exchange transfusion rapidly removes circulating bilirubin and, in cases of hemolytic disease, removes antibody-coated red blood cells and circulating maternal antibodies. It replaces them with donor blood, immediately lowering the bilirubin level and reducing ongoing hemolysis.',
        explanationWrong:
          'Exchange transfusion does not involve photosensitizing agents. It does not directly stimulate hepatic conjugation. The goal is not to increase blood volume but to exchange the blood containing high bilirubin and sensitized cells with fresh donor blood.',
        topic: 'Neonatal Jaundice',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is called to evaluate a 6-month-old with biphasic stridor and feeding difficulties. Flexible bronchoscopy reveals external compression of the trachea. Which condition is most likely?',
        choices: {
          A: 'Subglottic stenosis',
          B: 'Laryngomalacia',
          C: 'Croup',
          D: 'Vascular ring',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A vascular ring is an anomalous aortic arch configuration that encircles and compresses the trachea and/or esophagus. It presents with biphasic stridor (indicating fixed extrathoracic obstruction), feeding difficulties, and characteristic external tracheal compression on bronchoscopy.',
        explanationWrong:
          'Subglottic stenosis causes intraluminal narrowing, not external compression. Laryngomalacia involves supraglottic collapse, not tracheal compression. Croup is an acute viral illness, not a structural anomaly with external compression.',
        topic: 'Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 17,
        questionText:
          'A premature neonate at 32 weeks gestation is receiving phototherapy. The nurse notices the infant\'s temperature is 37.8 degrees C. What is the most likely cause?',
        choices: {
          A: 'Neonatal sepsis',
          B: 'Bilirubin encephalopathy',
          C: 'Radiant heat from the phototherapy unit',
          D: 'Dehydration from insensible water loss',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Phototherapy units generate heat that can cause hyperthermia in neonates, particularly premature infants with immature thermoregulation. The distance between the light source and the infant should be checked, and the infant\'s temperature should be monitored closely.',
        explanationWrong:
          'While sepsis should always be considered, mild temperature elevation during phototherapy is most commonly caused by the radiant heat of the light source. Bilirubin encephalopathy does not typically present with isolated fever. Dehydration from insensible water loss would more likely cause temperature instability but not as a primary cause of mild elevation.',
        topic: 'Neonatal Jaundice and Phototherapy',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 18,
        questionText:
          'When using heliox (helium-oxygen mixture) for a child with severe croup, what is the primary therapeutic mechanism?',
        choices: {
          A: 'The low density of helium reduces turbulent airflow resistance through the narrowed upper airway',
          B: 'Helium directly reduces subglottic edema',
          C: 'Helium has anti-inflammatory properties',
          D: 'Helium increases oxygen carrying capacity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Helium is much less dense than nitrogen. In a narrowed upper airway where turbulent flow predominates, substituting helium for nitrogen reduces gas density and converts turbulent flow to more laminar flow, decreasing the work of breathing and improving gas exchange.',
        explanationWrong:
          'Helium does not reduce edema or have anti-inflammatory properties. It is an inert gas that does not participate in gas exchange. It does not increase oxygen carrying capacity; in fact, heliox mixtures contain less oxygen than room air when using a 70:30 or 80:20 helium-oxygen blend.',
        topic: 'Croup and Upper Airway Obstruction',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 19,
        questionText:
          'Which of the following is a risk factor for developing severe neonatal hyperbilirubinemia?',
        choices: {
          A: 'Birth weight greater than 4000 grams',
          B: 'Gestational age greater than 40 weeks',
          C: 'Formula feeding from birth',
          D: 'ABO blood group incompatibility between mother and infant',
        },
        correctChoice: 'D',
        explanationCorrect:
          'ABO blood group incompatibility (most commonly a type O mother with a type A or B infant) can cause hemolytic disease, leading to accelerated red blood cell destruction and rapid bilirubin production, which is a major risk factor for severe hyperbilirubinemia.',
        explanationWrong:
          'Large birth weight is not a specific risk factor for severe jaundice. Post-term infants are not at increased risk. Breastfeeding, not formula feeding, is associated with increased risk of neonatal jaundice due to breast milk jaundice and breastfeeding-associated jaundice.',
        topic: 'Neonatal Jaundice',
      },
      {
        miniExamId: exam7.id,
        questionIndex: 20,
        questionText:
          'A respiratory therapist is preparing to intubate a child with suspected epiglottitis. Compared to a child of the same age without epiglottitis, which endotracheal tube selection is most appropriate?',
        choices: {
          A: 'Use the same size predicted by age-based formulas',
          B: 'Use a tube two sizes larger than predicted',
          C: 'Use a tube one to two sizes smaller than predicted by age',
          D: 'Intubation should never be performed in epiglottitis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In epiglottitis, significant supraglottic swelling narrows the airway. An endotracheal tube one to two sizes smaller than age-predicted should be selected to successfully pass through the swollen, narrowed airway. Multiple sizes should be available at the bedside.',
        explanationWrong:
          'Using the predicted size may be too large to pass through the edematous airway. A larger tube would be impossible to place. Intubation may be necessary in severe epiglottitis with airway compromise, though it should be performed by the most experienced practitioner available.',
        topic: 'Epiglottitis',
      },
    ],
  })

  // ─── EXAM 8 ──────────────────────────────────────────────────────────
  // Topics: Retinopathy of prematurity (ROP), Necrotizing enterocolitis (NEC), Neonatal and pediatric CPR (PALS/NRP)
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-B, Q2-D, Q3-C, Q4-A, Q5-D, Q6-B, Q7-A, Q8-C, Q9-D, Q10-A, Q11-B, Q12-C, Q13-A, Q14-D, Q15-B, Q16-C, Q17-A, Q18-D, Q19-B, Q20-C
  const exam8 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 8',
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
          'Retinopathy of prematurity (ROP) is primarily associated with which of the following risk factors?',
        choices: {
          A: 'Maternal diabetes mellitus',
          B: 'Prematurity and supplemental oxygen exposure',
          C: 'Chorioamnionitis',
          D: 'Cesarean delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'ROP is primarily associated with prematurity (especially infants born before 32 weeks gestation) and supplemental oxygen exposure. Fluctuating oxygen levels and hyperoxia cause abnormal retinal vascular development in the immature retina.',
        explanationWrong:
          'Maternal diabetes, chorioamnionitis, and cesarean delivery are not primary risk factors for ROP. The immature retinal vasculature of premature infants is uniquely susceptible to oxygen-induced injury, making gestational age and oxygen exposure the key risk factors.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 2,
        questionText:
          'According to current Neonatal Resuscitation Program (NRP) guidelines, what is the recommended compression-to-ventilation ratio for neonatal CPR?',
        choices: {
          A: '15:2',
          B: '5:1',
          C: '30:2',
          D: '3:1',
        },
        correctChoice: 'D',
        explanationCorrect:
          'NRP guidelines recommend a 3:1 compression-to-ventilation ratio for neonatal resuscitation. This ratio emphasizes ventilation because the most common cause of neonatal cardiac arrest is respiratory failure, making effective ventilation the priority.',
        explanationWrong:
          'A 15:2 ratio is used for two-rescuer pediatric CPR (PALS). A 30:2 ratio is used for adult CPR and single-rescuer pediatric CPR. A 5:1 ratio is an outdated standard no longer recommended. The neonatal 3:1 ratio uniquely prioritizes ventilation.',
        topic: 'Neonatal CPR (NRP)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 3,
        questionText:
          'A premature neonate at 28 weeks gestation develops abdominal distension, bloody stools, and pneumatosis intestinalis on abdominal radiograph. Which condition is most likely?',
        choices: {
          A: 'Pyloric stenosis',
          B: 'Intestinal malrotation',
          C: 'Necrotizing enterocolitis (NEC)',
          D: 'Meconium ileus',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The triad of abdominal distension, bloody stools, and pneumatosis intestinalis (air within the bowel wall on radiograph) in a premature neonate is the hallmark presentation of necrotizing enterocolitis (NEC). NEC is the most common gastrointestinal emergency in premature infants.',
        explanationWrong:
          'Pyloric stenosis presents with projectile vomiting without bloody stools and occurs in term infants at 2-6 weeks. Malrotation presents with bilious vomiting. Meconium ileus presents with failure to pass meconium and is associated with cystic fibrosis, not pneumatosis intestinalis.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 4,
        questionText:
          'During neonatal resuscitation, a term newborn has a heart rate of 50 bpm despite 30 seconds of effective positive pressure ventilation. What is the next appropriate step?',
        choices: {
          A: 'Begin chest compressions coordinated with ventilation',
          B: 'Administer intravenous epinephrine',
          C: 'Increase the FiO2 to 1.0',
          D: 'Suction the airway and reassess',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Per NRP guidelines, if the heart rate remains below 60 bpm despite 30 seconds of effective ventilation (with chest movement confirmed), chest compressions should be initiated. Compressions are coordinated with ventilations at a 3:1 ratio.',
        explanationWrong:
          'Epinephrine is indicated only if the heart rate remains below 60 bpm despite adequate ventilation and chest compressions. While FiO2 may be increased, compressions are the immediate priority. Additional suctioning delays the critical intervention of compressions when the heart rate is below 60 bpm.',
        topic: 'Neonatal CPR (NRP)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 5,
        questionText:
          'To minimize the risk of retinopathy of prematurity, what oxygen saturation target range is generally recommended for premature infants receiving supplemental oxygen?',
        choices: {
          A: '85-89%',
          B: '97-100%',
          C: '80-84%',
          D: '90-95%',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current evidence supports targeting SpO2 of 90-95% in premature infants to balance the risk of ROP (from hyperoxia) against the risk of mortality and adverse outcomes (from hypoxia). This range provides adequate oxygenation while minimizing retinal vascular injury.',
        explanationWrong:
          'Targeting 97-100% increases the risk of ROP and other oxygen toxicity. Targeting 80-84% is too low and increases mortality risk. Targeting 85-89% has been associated with increased mortality in clinical trials, making 90-95% the generally accepted target.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 6,
        questionText:
          'Which feeding practice has been shown to be the most protective factor against the development of NEC in premature infants?',
        choices: {
          A: 'Early introduction of full-volume formula feeds',
          B: 'Exclusive breast milk feeding',
          C: 'Delayed enteral feeding until 2 weeks of age',
          D: 'Use of elemental formula',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Exclusive breast milk feeding (maternal or donor) is the most significant modifiable protective factor against NEC. Breast milk contains immunoglobulins, lactoferrin, oligosaccharides, and growth factors that promote intestinal barrier function and a healthy microbiome.',
        explanationWrong:
          'Formula feeding, especially rapid advancement, is a risk factor for NEC, not protective. Prolonged fasting delays gut maturation and is not recommended. Elemental formulas have not been shown to be protective against NEC compared to breast milk.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 7,
        questionText:
          'According to PALS guidelines, what is the recommended first medication and dose for pediatric cardiac arrest with a non-shockable rhythm (asystole or pulseless electrical activity)?',
        choices: {
          A: 'Epinephrine 0.01 mg/kg IV or IO',
          B: 'Atropine 0.02 mg/kg IV',
          C: 'Amiodarone 5 mg/kg IV',
          D: 'Sodium bicarbonate 1 mEq/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For non-shockable rhythms (asystole/PEA), epinephrine 0.01 mg/kg (0.1 mL/kg of 1:10,000 concentration) IV or IO is the first-line medication. It should be administered as soon as vascular access is obtained and repeated every 3-5 minutes.',
        explanationWrong:
          'Atropine is no longer routinely recommended in pediatric cardiac arrest. Amiodarone is used for shockable rhythms (VF/pulseless VT), not asystole or PEA. Sodium bicarbonate is only considered in specific situations such as known hyperkalemia or sodium channel blocker toxicity.',
        topic: 'Pediatric CPR (PALS)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 8,
        questionText:
          'A premature infant being screened for ROP is found to have Stage 3 disease in Zone II with plus disease. What does "plus disease" indicate?',
        choices: {
          A: 'Complete retinal detachment',
          B: 'Normal retinal vascular development',
          C: 'Dilated and tortuous posterior retinal vessels indicating severe disease',
          D: 'Presence of a fibrous ridge at the junction of vascularized and avascular retina',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Plus disease refers to dilation and tortuosity of the posterior pole retinal vessels. It indicates active, severe disease with increased blood flow and is a critical indicator for treatment. Its presence at any stage increases the urgency of intervention.',
        explanationWrong:
          'Complete retinal detachment describes Stage 5 ROP. Plus disease does not indicate normal development. A fibrous ridge describes the neovascular ridge seen in Stage 3 ROP, which is a separate finding from plus disease.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 9,
        questionText:
          'In the initial management of NEC, which of the following is a critical component of the treatment plan?',
        choices: {
          A: 'Immediate surgical intervention',
          B: 'Continued enteral feeding with a different formula',
          C: 'Administration of probiotics',
          D: 'Bowel rest (NPO), gastric decompression, and broad-spectrum IV antibiotics',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Initial medical management of NEC includes making the infant NPO (nothing by mouth), placing an orogastric tube for decompression, and administering broad-spectrum IV antibiotics. This approach rests the inflamed bowel and treats the bacterial component.',
        explanationWrong:
          'Surgery is reserved for cases with intestinal perforation (free air on radiograph) or clinical deterioration despite medical management. Continuing enteral feeds worsens NEC. Probiotics may be used for prevention but are not part of acute NEC treatment.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 10,
        questionText:
          'During pediatric CPR, at what depth should chest compressions be delivered for a child (1 year to puberty)?',
        choices: {
          A: 'At least 2.4 inches (6 cm)',
          B: 'At least one-third the anterior-posterior diameter of the chest (approximately 2 inches or 5 cm)',
          C: 'Approximately 0.5 inches (1.5 cm)',
          D: 'At least one-half the anterior-posterior diameter of the chest',
        },
        correctChoice: 'B',
        explanationCorrect:
          'PALS guidelines recommend compressing the chest at least one-third the anterior-posterior (AP) diameter, which is approximately 2 inches (5 cm) for children. This depth provides adequate cardiac output while minimizing injury.',
        explanationWrong:
          'A depth of 2.4 inches (6 cm) is the adult recommendation. A depth of 0.5 inches is far too shallow for any age group. One-half the AP diameter is excessive and risks injury. One-third AP diameter is the correct pediatric target.',
        topic: 'Pediatric CPR (PALS)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 11,
        questionText:
          'Which of the following is the most important modifiable factor the respiratory therapist can control to reduce the risk of ROP?',
        choices: {
          A: 'Humidity level in the isolette',
          B: 'Avoiding excessive and fluctuating oxygen levels',
          C: 'Room lighting in the NICU',
          D: 'Positioning of the infant',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The respiratory therapist plays a critical role in ROP prevention by carefully managing supplemental oxygen to avoid hyperoxia and excessive fluctuations in oxygen levels. Consistent SpO2 monitoring and adherence to target ranges are essential preventive measures.',
        explanationWrong:
          'Humidity, room lighting, and positioning are important aspects of neonatal care but are not primary modifiable risk factors for ROP. Oxygen management is the single most impactful factor the respiratory therapist can control to reduce ROP risk.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 12,
        questionText:
          'A radiograph of a premature neonate with suspected NEC shows portal venous gas. What does this finding indicate?',
        choices: {
          A: 'Resolving NEC with improving bowel function',
          B: 'Normal gas pattern in a premature infant',
          C: 'Severe NEC with gas tracking into the portal venous system, indicating a poor prognosis',
          D: 'Pneumoperitoneum requiring no intervention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Portal venous gas on abdominal radiograph indicates that intraluminal gas has dissected through the damaged bowel wall into the mesenteric veins and portal system. This is a sign of severe NEC and is associated with a poorer prognosis and higher surgical intervention rate.',
        explanationWrong:
          'Portal venous gas is not a sign of recovery; it indicates disease progression. It is not a normal finding. Pneumoperitoneum (free air in the peritoneal cavity) is a different finding that indicates perforation and requires surgical intervention.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 13,
        questionText:
          'During neonatal resuscitation, what initial FiO2 is recommended for a term newborn requiring positive pressure ventilation?',
        choices: {
          A: '0.21 (room air)',
          B: '0.40',
          C: '0.60',
          D: '1.0',
        },
        correctChoice: 'A',
        explanationCorrect:
          'NRP guidelines recommend initiating positive pressure ventilation with 21% oxygen (room air) for term newborns. FiO2 should be titrated based on pulse oximetry readings targeting the published minute-of-life SpO2 goals.',
        explanationWrong:
          'Starting at higher FiO2 levels exposes the newborn to unnecessary oxidative stress. Evidence shows that resuscitation with room air for term infants is as effective as 100% oxygen and has fewer adverse effects. FiO2 is increased only if SpO2 targets are not met.',
        topic: 'Neonatal CPR (NRP)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 14,
        questionText:
          'Stage 4 ROP is characterized by which of the following?',
        choices: {
          A: 'A demarcation line between vascularized and avascular retina',
          B: 'Extraretinal fibrovascular proliferation',
          C: 'Normal retinal development',
          D: 'Partial retinal detachment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Stage 4 ROP is defined by partial retinal detachment. Stage 4A involves detachment not involving the macula, while Stage 4B involves macular detachment. This stage represents significant progression that often requires surgical intervention.',
        explanationWrong:
          'A demarcation line is Stage 1 ROP. Extraretinal fibrovascular proliferation (neovascularization) is Stage 3 ROP. Normal retinal development is not any stage of ROP. Stage 4 specifically refers to partial retinal detachment.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 15,
        questionText:
          'A 5-year-old child in the emergency department has a pulseless ventricular tachycardia rhythm on the cardiac monitor. According to PALS, what is the first intervention?',
        choices: {
          A: 'Deliver an unsynchronized shock (defibrillation) at 2 J/kg',
          B: 'Administer amiodarone 5 mg/kg IV',
          C: 'Begin CPR for 2 minutes before attempting defibrillation',
          D: 'Administer epinephrine 0.01 mg/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For pulseless ventricular tachycardia (a shockable rhythm), the first intervention is immediate defibrillation at 2 J/kg. Early defibrillation is the most important intervention for shockable rhythms to restore an organized cardiac rhythm.',
        explanationWrong:
          'Amiodarone is given after at least two unsuccessful defibrillation attempts. CPR should be performed while preparing for defibrillation, but shocking should not be delayed once the defibrillator is ready. Epinephrine is administered after the second shock if the rhythm persists.',
        topic: 'Pediatric CPR (PALS)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 16,
        questionText:
          'Which clinical sign would most strongly suggest intestinal perforation in a neonate with NEC, requiring emergent surgical consultation?',
        choices: {
          A: 'Mildly distended abdomen',
          B: 'Intermittent feeding intolerance',
          C: 'Free air (pneumoperitoneum) on abdominal radiograph',
          D: 'Presence of reducing substances in the stool',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Free air (pneumoperitoneum) on abdominal radiograph is the single most definitive radiographic sign of intestinal perforation in NEC. This finding requires emergent surgical consultation for possible bowel resection and is considered an absolute indication for surgery.',
        explanationWrong:
          'Mild abdominal distension and feeding intolerance are early, nonspecific signs that may be seen in many conditions. Reducing substances in stool indicate carbohydrate malabsorption and, while associated with NEC, do not indicate perforation.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 17,
        questionText:
          'In the PALS cardiac arrest algorithm, after delivering two shocks without return of spontaneous circulation, what medication should be administered?',
        choices: {
          A: 'Epinephrine 0.01 mg/kg IV/IO',
          B: 'Lidocaine 1 mg/kg IV',
          C: 'Adenosine 0.1 mg/kg IV rapid push',
          D: 'Calcium chloride 20 mg/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After the second shock in the shockable rhythm algorithm, epinephrine 0.01 mg/kg IV/IO is the first medication given. Epinephrine improves coronary perfusion pressure and myocardial blood flow during CPR.',
        explanationWrong:
          'Lidocaine may be used as an alternative to amiodarone after the third shock. Adenosine is used for supraventricular tachycardia with a pulse, not cardiac arrest. Calcium chloride is only indicated for specific conditions like hyperkalemia, hypocalcemia, or calcium channel blocker toxicity.',
        topic: 'Pediatric CPR (PALS)',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 18,
        questionText:
          'Which premature infants should receive routine screening for ROP according to current guidelines?',
        choices: {
          A: 'All infants born before 37 weeks gestation',
          B: 'Only infants who received mechanical ventilation',
          C: 'Only infants with documented hyperoxic episodes',
          D: 'Infants born at or before 30 weeks gestation or weighing 1500 grams or less at birth',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current screening guidelines recommend ROP examination for infants born at or before 30 weeks gestational age or with a birth weight of 1500 grams or less. Selected infants between 1500-2000 grams with an unstable clinical course may also be screened at the discretion of the neonatologist.',
        explanationWrong:
          'Screening all infants before 37 weeks is too broad and not evidence-based. Limiting screening to only ventilated infants or those with documented hyperoxia would miss many at-risk infants. The established criteria based on gestational age and birth weight capture the highest-risk population.',
        topic: 'Retinopathy of Prematurity',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 19,
        questionText:
          'Probiotics have been studied for the prevention of NEC in premature infants. Which statement best reflects the current evidence?',
        choices: {
          A: 'Probiotics are contraindicated in all premature infants',
          B: 'Probiotics have shown benefit in reducing the incidence of NEC in very low birth weight infants, though specific preparations vary',
          C: 'Probiotics increase the risk of NEC',
          D: 'Probiotics are only effective when combined with formula feeding',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Multiple meta-analyses have demonstrated that probiotic supplementation reduces the incidence of severe NEC (Stage 2 or higher) and all-cause mortality in very low birth weight infants. However, the optimal strain, dose, and preparation are still being studied.',
        explanationWrong:
          'Probiotics are not contraindicated in all premature infants, though caution is warranted in extremely premature or immunocompromised neonates. Evidence consistently shows benefit, not increased risk. Probiotics are most effective with breast milk, not formula.',
        topic: 'Necrotizing Enterocolitis',
      },
      {
        miniExamId: exam8.id,
        questionIndex: 20,
        questionText:
          'During neonatal resuscitation, the NRP recommends reassessing the heart rate at regular intervals. Which method is considered the most reliable for heart rate assessment in the delivery room?',
        choices: {
          A: 'Auscultation with a stethoscope only',
          B: 'Palpation of the umbilical pulse',
          C: 'Cardiac monitor (3-lead ECG) for continuous heart rate display',
          D: 'Visual observation of chest rise',
        },
        correctChoice: 'C',
        explanationCorrect:
          'NRP recommends cardiac monitoring with a 3-lead ECG as the most reliable and accurate method for continuous heart rate assessment during resuscitation. Pulse oximetry is also used but may take longer to obtain a reliable signal. ECG provides the fastest and most accurate heart rate reading.',
        explanationWrong:
          'Auscultation is less reliable during active resuscitation and provides intermittent assessment. Umbilical pulse palpation underestimates the true heart rate. Visual observation of chest rise assesses ventilation, not heart rate.',
        topic: 'Neonatal CPR (NRP)',
      },
    ],
  })

  // ─── EXAM 9 ──────────────────────────────────────────────────────────
  // Topics: Pediatric trauma and burn inhalation, Extracorporeal membrane oxygenation (ECMO) in neonates
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-A, Q2-C, Q3-B, Q4-D, Q5-C, Q6-A, Q7-D, Q8-B, Q9-C, Q10-D, Q11-A, Q12-B, Q13-D, Q14-C, Q15-A, Q16-B, Q17-D, Q18-A, Q19-B, Q20-C
  const exam9 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 9',
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
          'A 4-year-old child is brought to the emergency department after a house fire. The child has soot around the nares, singed nasal hairs, and a hoarse voice. What is the primary concern?',
        choices: {
          A: 'Impending upper airway obstruction from thermal and chemical injury to the airway',
          B: 'Carbon monoxide poisoning only',
          C: 'Skin burns requiring immediate debridement',
          D: 'Smoke inhalation affecting only the lower airways',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Soot in the nares, singed nasal hairs, and hoarseness are classic signs of inhalation injury and indicate thermal/chemical damage to the upper airway. Progressive edema can cause complete airway obstruction within hours, making early intubation a priority.',
        explanationWrong:
          'While carbon monoxide poisoning should be evaluated, the physical findings indicate direct airway injury, which is the immediate threat. Skin burns are important but secondary to airway management. Thermal injury primarily affects the upper airway; lower airway injury is caused by chemical irritants in smoke.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 2,
        questionText:
          'In neonatal ECMO, the venoarterial (VA) configuration differs from venovenous (VV) in that VA ECMO:',
        choices: {
          A: 'Requires only one cannulation site',
          B: 'Provides no cardiac support',
          C: 'Provides both cardiac and pulmonary support',
          D: 'Has a lower risk of arterial complications',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Venoarterial ECMO drains blood from the venous system and returns oxygenated blood to the arterial system, bypassing both the heart and lungs. This provides both hemodynamic (cardiac) and respiratory (pulmonary) support, making it suitable for patients with cardiac failure.',
        explanationWrong:
          'VA ECMO typically requires cannulation of both the right internal jugular vein and right common carotid artery. VV ECMO provides only pulmonary support, not VA. VA ECMO has a higher risk of arterial complications (stroke, limb ischemia) compared to VV.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 3,
        questionText:
          'A 6-year-old child with 40% total body surface area burns develops progressive respiratory distress 24 hours after injury. The chest radiograph shows bilateral diffuse infiltrates. What is the most likely diagnosis?',
        choices: {
          A: 'Acute respiratory distress syndrome (ARDS)',
          B: 'Pneumonia from bacterial superinfection',
          C: 'Cardiogenic pulmonary edema',
          D: 'Pulmonary contusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'ARDS commonly develops 24-72 hours after significant burn injury. The systemic inflammatory response from major burns releases inflammatory mediators that damage the alveolar-capillary membrane, causing bilateral infiltrates, impaired gas exchange, and decreased compliance.',
        explanationWrong:
          'While pneumonia can occur, the timing (24 hours) and bilateral pattern are more consistent with ARDS. Cardiogenic edema would require cardiac dysfunction and would show signs of fluid overload. Pulmonary contusion results from blunt chest trauma, not burns.',
        topic: 'Pediatric Trauma',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 4,
        questionText:
          'Which of the following is a common indication for neonatal ECMO?',
        choices: {
          A: 'Prematurity at 24 weeks gestation',
          B: 'Transient tachypnea of the newborn',
          C: 'Mild respiratory distress syndrome responding to surfactant',
          D: 'Persistent pulmonary hypertension of the newborn (PPHN) refractory to maximal medical therapy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'PPHN refractory to maximal medical management (including inhaled nitric oxide, optimal ventilation, and vasopressors) is one of the most common indications for neonatal ECMO. ECMO provides cardiopulmonary support while allowing the pulmonary vasculature to recover.',
        explanationWrong:
          'Extreme prematurity (less than 34 weeks or less than 2 kg) is generally a contraindication for ECMO due to the high risk of intracranial hemorrhage with systemic anticoagulation. TTN and mild RDS are self-limiting conditions that do not require ECMO.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 5,
        questionText:
          'A pediatric patient with smoke inhalation has a carboxyhemoglobin (COHb) level of 25%. Which of the following is true regarding pulse oximetry in this patient?',
        choices: {
          A: 'Pulse oximetry will accurately display the low oxygen saturation',
          B: 'Pulse oximetry will display a lower-than-actual SpO2',
          C: 'Pulse oximetry will display a falsely normal or elevated SpO2',
          D: 'Pulse oximetry is unaffected by carboxyhemoglobin',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Standard pulse oximeters use two wavelengths of light and cannot distinguish carboxyhemoglobin from oxyhemoglobin. COHb absorbs light similarly to oxyhemoglobin at these wavelengths, causing the SpO2 reading to be falsely normal or elevated despite significantly reduced oxygen-carrying capacity.',
        explanationWrong:
          'Standard pulse oximetry will NOT accurately detect reduced oxygen delivery in carbon monoxide poisoning. It does not display a lower reading; it displays a falsely reassuring value. CO-oximetry (using multiple wavelengths) is needed for accurate assessment.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 6,
        questionText:
          'During neonatal ECMO, the respiratory therapist notices a sudden decrease in venous return (drainage). Which of the following is the most likely cause?',
        choices: {
          A: 'Hypovolemia or kinking/obstruction of the venous drainage cannula',
          B: 'Excessive anticoagulation',
          C: 'Overoxygenation of the membrane lung',
          D: 'Elevated sweep gas flow',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sudden decrease in venous drainage during ECMO is most commonly caused by hypovolemia (reduced preload) or mechanical obstruction of the venous cannula (kinking, malposition, or thrombus). This is a critical event requiring immediate assessment of volume status and circuit inspection.',
        explanationWrong:
          'Excessive anticoagulation affects the risk of bleeding but does not directly cause decreased drainage. Overoxygenation of the membrane lung and elevated sweep gas flow affect gas exchange but do not directly impact venous return or drainage.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 7,
        questionText:
          'The treatment of choice for carbon monoxide poisoning in a pediatric burn patient is:',
        choices: {
          A: 'Nebulized bronchodilators',
          B: 'Inhaled nitric oxide',
          C: 'Heliox therapy',
          D: '100% oxygen via non-rebreather mask or mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'High-flow 100% oxygen (FiO2 1.0) is the primary treatment for carbon monoxide poisoning. It reduces the half-life of carboxyhemoglobin from approximately 4-6 hours on room air to 60-90 minutes, accelerating the displacement of CO from hemoglobin.',
        explanationWrong:
          'Bronchodilators do not address carbon monoxide binding. Inhaled nitric oxide is used for pulmonary hypertension, not CO poisoning. Heliox reduces airway resistance but does not affect carboxyhemoglobin dissociation. The key is maximizing FiO2 to competitively displace CO.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 8,
        questionText:
          'A child involved in a motor vehicle accident presents with paradoxical chest wall movement on the left side. This finding is most consistent with:',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Flail chest',
          C: 'Hemothorax',
          D: 'Pulmonary contusion without rib fractures',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Paradoxical chest wall movement (the affected segment moves inward during inspiration and outward during expiration) is the hallmark sign of flail chest. This occurs when three or more adjacent ribs are fractured in two or more places, creating a free-floating segment.',
        explanationWrong:
          'Tension pneumothorax presents with absent breath sounds, tracheal deviation, and distended neck veins. Hemothorax causes dullness to percussion without paradoxical movement. Pulmonary contusion without rib fractures does not produce visible paradoxical chest wall motion.',
        topic: 'Pediatric Trauma',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 9,
        questionText:
          'Which complication is unique to venoarterial ECMO compared to venovenous ECMO?',
        choices: {
          A: 'Risk of systemic air embolism and stroke from arterial cannulation',
          B: 'Infection risk',
          C: 'Circuit-related hemolysis',
          D: 'Need for anticoagulation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'VA ECMO carries a unique risk of systemic air embolism and stroke because oxygenated blood is returned directly to the arterial system. Any air or thrombus in the return circuit can travel to the brain or other vital organs. This risk is not present in VV ECMO, where blood returns to the venous system.',
        explanationWrong:
          'Hemolysis, infection risk, and the need for anticoagulation are complications shared by both VA and VV ECMO. The arterial return in VA ECMO specifically creates the risk of systemic embolization that is unique to this configuration.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 10,
        questionText:
          'A pediatric patient with severe burns is intubated and mechanically ventilated. Bronchoscopy reveals diffuse mucosal erythema, edema, and carbonaceous deposits throughout the tracheobronchial tree. Which pulmonary complication is most likely to develop?',
        choices: {
          A: 'Pneumothorax from barotrauma',
          B: 'Pulmonary embolism',
          C: 'Pleural effusion',
          D: 'Cast formation and airway obstruction from sloughed mucosal tissue and secretions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Inhalation injury causes mucosal necrosis and inflammation. The damaged epithelium sloughs off and combines with fibrin and secretions to form airway casts that can cause significant obstruction. Aggressive pulmonary hygiene, frequent suctioning, and bronchoscopy may be needed.',
        explanationWrong:
          'While pneumothorax is possible with ventilation, the direct consequence of mucosal injury is cast formation. Pulmonary embolism is not directly related to inhalation injury. Pleural effusion may occur but is not the primary complication of direct mucosal damage.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 11,
        questionText:
          'Before initiating neonatal ECMO, which cranial imaging study is essential and why?',
        choices: {
          A: 'Head ultrasound to rule out pre-existing intracranial hemorrhage, which is a contraindication to systemic anticoagulation',
          B: 'CT scan to measure brain volume',
          C: 'MRI to assess myelination',
          D: 'Skull radiograph to rule out fractures',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A head ultrasound is performed before ECMO to rule out significant intracranial hemorrhage (grade III or IV intraventricular hemorrhage). ECMO requires systemic anticoagulation with heparin, which would worsen any pre-existing hemorrhage and could be fatal.',
        explanationWrong:
          'CT scan and MRI are not standard pre-ECMO studies in neonates. Skull radiographs assess bony structures, not intracranial hemorrhage. The head ultrasound is specifically chosen because it is portable, does not require transport, and is highly sensitive for hemorrhage in neonates.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 12,
        questionText:
          'In a pediatric trauma patient, the most reliable early indicator of hemorrhagic shock is:',
        choices: {
          A: 'Hypotension',
          B: 'Tachycardia',
          C: 'Decreased urine output',
          D: 'Altered mental status',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tachycardia is the earliest and most reliable sign of hemorrhagic shock in children. Pediatric patients can maintain normal blood pressure by increasing heart rate and peripheral vascular resistance until they lose approximately 25-30% of blood volume, at which point hypotension develops.',
        explanationWrong:
          'Hypotension is a late and ominous sign in pediatric shock, indicating decompensation. Decreased urine output and altered mental status are signs of end-organ hypoperfusion that occur later than tachycardia. Early recognition of tachycardia is critical for timely intervention.',
        topic: 'Pediatric Trauma',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 13,
        questionText:
          'The sweep gas flow on a neonatal ECMO circuit primarily controls which parameter?',
        choices: {
          A: 'Systemic blood pressure',
          B: 'Oxygen delivery to the patient',
          C: 'Circuit blood flow rate',
          D: 'Carbon dioxide removal',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sweep gas flow through the membrane lung (oxygenator) primarily controls carbon dioxide removal. Increasing the sweep gas flow rate increases the gradient for CO2 diffusion across the membrane, enhancing CO2 elimination. Oxygenation is primarily controlled by the FiO2 of the sweep gas and the blood flow rate.',
        explanationWrong:
          'Blood pressure is affected by circuit flow rate. While sweep gas carries oxygen, oxygenation is more dependent on blood flow rate and FiO2. Circuit blood flow is controlled by the pump speed, not sweep gas flow.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 14,
        questionText:
          'A child with burns to the face and neck is being monitored in the ICU. Over 6 hours, the voice becomes progressively more hoarse and stridor develops. What should the respiratory therapist recommend?',
        choices: {
          A: 'Continue observation and administer nebulized normal saline',
          B: 'Apply a cool mist mask',
          C: 'Prepare for immediate intubation before complete airway obstruction develops',
          D: 'Administer racemic epinephrine to reduce edema',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Progressive hoarseness and development of stridor in a burn patient indicate worsening airway edema. The airway should be secured by intubation before complete obstruction occurs. Delaying intubation in this scenario risks losing the airway when edema makes intubation impossible.',
        explanationWrong:
          'Continued observation risks complete airway obstruction. Cool mist and nebulized saline do not address the progressive edema from thermal injury. Racemic epinephrine may provide temporary relief in croup but is not reliable for thermal airway edema and delays definitive management.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 15,
        questionText:
          'What is the typical minimum weight requirement for a neonate to be considered a candidate for ECMO?',
        choices: {
          A: '3.5 kg',
          B: '1.0 kg',
          C: '2.0 kg (approximately 2000 grams)',
          D: '500 grams',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The generally accepted minimum weight for neonatal ECMO is approximately 2.0 kg (2000 grams). Below this weight, the risk of intracranial hemorrhage with systemic anticoagulation is unacceptably high, and the small vessel size makes cannulation technically difficult.',
        explanationWrong:
          'A weight of 1.0 kg and 500 grams are too small for safe cannulation and anticoagulation. A 3.5 kg minimum is too restrictive and would exclude many neonates who could benefit from ECMO. The 2.0 kg threshold balances procedural feasibility with acceptable complication rates.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 16,
        questionText:
          'In a pediatric trauma patient with a suspected tension pneumothorax, what is the immediate life-saving intervention?',
        choices: {
          A: 'Obtain a chest radiograph to confirm the diagnosis',
          B: 'Needle decompression at the second intercostal space, midclavicular line',
          C: 'Endotracheal intubation',
          D: 'Administer IV fluids for volume resuscitation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tension pneumothorax is a clinical diagnosis requiring immediate needle decompression without waiting for radiographic confirmation. A large-bore needle is inserted at the second intercostal space, midclavicular line (or fourth/fifth intercostal space, anterior axillary line) to release trapped air and restore venous return.',
        explanationWrong:
          'Waiting for a chest radiograph delays life-saving treatment and risks cardiovascular collapse. Intubation alone does not address the trapped air. IV fluids cannot correct the obstructive physiology of tension pneumothorax. Immediate decompression is critical.',
        topic: 'Pediatric Trauma',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 17,
        questionText:
          'During neonatal ECMO, activated clotting time (ACT) is monitored to guide anticoagulation. What is the typical target ACT range?',
        choices: {
          A: '100-120 seconds',
          B: '250-300 seconds',
          C: '60-80 seconds',
          D: '180-220 seconds',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The target ACT during neonatal ECMO is typically 180-220 seconds. This range provides adequate anticoagulation to prevent circuit thrombosis while minimizing the risk of bleeding complications in the neonate.',
        explanationWrong:
          'An ACT of 100-120 seconds is insufficient anticoagulation for ECMO and risks circuit clotting. An ACT of 250-300 seconds represents excessive anticoagulation with high bleeding risk. An ACT of 60-80 seconds is a normal baseline without heparin and is far too low for ECMO.',
        topic: 'Neonatal ECMO',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 18,
        questionText:
          'Cyanide toxicity should be suspected in a pediatric burn patient when:',
        choices: {
          A: 'The patient develops a dry cough',
          B: 'The patient has persistent lactic acidosis despite adequate oxygenation and perfusion',
          C: 'The carboxyhemoglobin level is elevated',
          D: 'The patient has superficial burns only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cyanide is released from the combustion of synthetic materials (plastics, nylon, polyurethane). Cyanide inhibits cytochrome oxidase, preventing cellular oxygen utilization. Persistent lactic acidosis despite adequate oxygen delivery (PaO2 and hemoglobin are normal) suggests cyanide toxicity.',
        explanationWrong:
          'A dry cough is a nonspecific symptom. While CO poisoning often coexists with cyanide exposure, an elevated COHb alone does not confirm cyanide toxicity. Superficial burns do not correlate with cyanide poisoning. The hallmark is unexplained metabolic acidosis with adequate oxygen delivery.',
        topic: 'Pediatric Burn Inhalation',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 19,
        questionText:
          'When managing a pediatric patient with a severe traumatic brain injury (TBI), which ventilation strategy is recommended to maintain cerebral perfusion?',
        choices: {
          A: 'Aggressive hyperventilation to a PaCO2 of 20-25 mmHg',
          B: 'Maintain normocarbia with a PaCO2 of 35-40 mmHg',
          C: 'Permissive hypercapnia with PaCO2 of 50-60 mmHg',
          D: 'Spontaneous breathing without ventilatory support',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current guidelines recommend maintaining normocarbia (PaCO2 35-40 mmHg) in pediatric TBI. Normocarbia prevents both cerebral vasoconstriction (from hypocapnia, which can worsen ischemia) and cerebral vasodilation (from hypercapnia, which can increase intracranial pressure).',
        explanationWrong:
          'Aggressive hyperventilation (PaCO2 20-25 mmHg) causes cerebral vasoconstriction and can worsen cerebral ischemia. Permissive hypercapnia increases cerebral blood flow and can dangerously elevate intracranial pressure. Uncontrolled spontaneous breathing does not ensure adequate ventilation in severe TBI.',
        topic: 'Pediatric Trauma',
      },
      {
        miniExamId: exam9.id,
        questionIndex: 20,
        questionText:
          'A neonate on ECMO is being weaned. Which of the following indicates readiness for decannulation?',
        choices: {
          A: 'The neonate requires maximum ventilator settings with ECMO support',
          B: 'The ACT remains above 300 seconds',
          C: 'The neonate maintains adequate gas exchange on minimal ECMO flow and moderate ventilator settings',
          D: 'The neonate has persistent pulmonary hypertension',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Readiness for ECMO decannulation is demonstrated when the patient maintains adequate gas exchange (acceptable ABG values) on minimal ECMO support (low flow rates) combined with moderate ventilator settings. This indicates that native lung function has recovered sufficiently to sustain the patient without ECMO.',
        explanationWrong:
          'Requiring maximum ventilator settings indicates the lungs have not recovered. An excessively elevated ACT indicates over-anticoagulation, not readiness to wean. Persistent pulmonary hypertension suggests the underlying condition has not resolved and continued ECMO support is needed.',
        topic: 'Neonatal ECMO',
      },
    ],
  })

  // ─── EXAM 10 ─────────────────────────────────────────────────────────
  // Topics: Developmental care and family-centered care, mixed NPS review
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-D, Q2-A, Q3-C, Q4-B, Q5-D, Q6-C, Q7-A, Q8-B, Q9-D, Q10-C, Q11-A, Q12-B, Q13-C, Q14-D, Q15-B, Q16-A, Q17-B, Q18-D, Q19-A, Q20-C
  const exam10 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 10',
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
          'In the NICU, developmental care practices aim to reduce the negative effects of the environment on premature infants. Which of the following is a core component of developmental care?',
        choices: {
          A: 'Maximizing ambient light to promote visual development',
          B: 'Continuous auditory stimulation to promote hearing',
          C: 'Frequent routine handling for neurological assessment',
          D: 'Minimizing environmental stressors such as noise and bright light',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Developmental care focuses on minimizing environmental stressors that can overwhelm the immature nervous system of premature infants. This includes reducing noise, dimming lights, providing clustered care to minimize handling, and supporting self-regulatory behaviors.',
        explanationWrong:
          'Maximizing light, continuous auditory stimulation, and frequent handling are all stressors that can negatively affect premature infant development. Developmental care seeks to reduce these inputs and provide a more womb-like environment.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 2,
        questionText:
          'Kangaroo care (skin-to-skin contact) in premature infants has been shown to provide which of the following benefits?',
        choices: {
          A: 'Improved thermoregulation, enhanced bonding, and more stable vital signs',
          B: 'Increased risk of infection due to skin contact',
          C: 'Delayed breastfeeding initiation',
          D: 'Increased metabolic demands on the infant',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Kangaroo care provides numerous evidence-based benefits including improved thermoregulation through direct skin contact, enhanced parent-infant bonding, more stable heart rate and respiratory rate, improved weight gain, and earlier successful breastfeeding.',
        explanationWrong:
          'Kangaroo care does not increase infection risk when proper hand hygiene is maintained. It promotes breastfeeding initiation rather than delaying it. It actually decreases metabolic demands by providing thermal stability and reducing stress.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 3,
        questionText:
          'A premature infant at 30 weeks gestational age demonstrates finger splaying, yawning, and gaze aversion during a respiratory assessment. These behaviors most likely indicate:',
        choices: {
          A: 'Readiness for feeding',
          B: 'Neurological impairment',
          C: 'Stress and overstimulation requiring a pause in care activities',
          D: 'Normal developmental reflexes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Finger splaying, yawning, and gaze aversion are recognized stress cues in premature infants. These autonomic and behavioral signs indicate the infant is overstimulated and needs a break from interaction. Developmental care principles require caregivers to recognize and respond to these cues.',
        explanationWrong:
          'These are not feeding readiness cues (which include rooting, sucking motions, and hand-to-mouth). They are normal stress responses, not signs of neurological impairment. While reflexes are normal in development, these specific behaviors are stress indicators in preterm infants.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 4,
        questionText:
          'Family-centered care in the NICU is best described as:',
        choices: {
          A: 'Allowing families to visit only during designated hours',
          B: 'A collaborative approach recognizing the family as an essential member of the care team with open communication and shared decision-making',
          C: 'Having families observe care from outside the unit',
          D: 'Providing families with written updates rather than direct communication',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Family-centered care recognizes parents and families as integral members of the healthcare team. It involves unrestricted family access, shared decision-making, open and honest communication, and empowering families to participate in their infant\'s care.',
        explanationWrong:
          'Restricted visiting hours, observation from outside the unit, and written-only communication are outdated practices that contradict the principles of family-centered care. True family-centered care involves active family participation and partnership with the care team.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 5,
        questionText:
          'The NIDCAP (Newborn Individualized Developmental Care and Assessment Program) approach emphasizes which of the following?',
        choices: {
          A: 'Standardized care protocols applied uniformly to all premature infants',
          B: 'Limiting parental involvement to reduce infection risk',
          C: 'Early introduction of all sensory stimuli to accelerate development',
          D: 'Observing and responding to each infant\'s individual behavioral cues to guide caregiving',
        },
        correctChoice: 'D',
        explanationCorrect:
          'NIDCAP is an evidence-based approach that focuses on careful observation of each infant\'s behavioral cues and adjusting care accordingly. It emphasizes individualized care plans based on the infant\'s current developmental stage and stress tolerance.',
        explanationWrong:
          'NIDCAP specifically opposes standardized one-size-fits-all approaches. It encourages parental involvement as a key component. Early introduction of all stimuli can overwhelm premature infants. NIDCAP\'s core principle is individualization based on behavioral assessment.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 6,
        questionText:
          'Noise levels in the NICU are a significant concern for premature infant development. What is the recommended maximum sustained noise level in the NICU according to the American Academy of Pediatrics?',
        choices: {
          A: '70 dB',
          B: '60 dB',
          C: '45 dB',
          D: '55 dB',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The AAP recommends that sustained noise levels in the NICU should not exceed 45 dB, with transient sounds not exceeding 65 dB. Excessive noise can disrupt sleep, cause physiologic instability, and potentially damage the developing auditory system of premature infants.',
        explanationWrong:
          'Levels of 55-70 dB exceed the recommended maximum and can cause adverse effects in premature infants. Even normal conversation (60 dB) exceeds the recommended level. NICU design and staff practices should aim to maintain the environment below 45 dB.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 7,
        questionText:
          'A respiratory therapist is explaining to parents why their premature infant requires CPAP. Which approach best exemplifies family-centered communication?',
        choices: {
          A: 'Explain in simple terms what CPAP does, why their baby needs it, and encourage questions and involvement in care',
          B: 'Provide a technical manual about CPAP for the parents to read',
          C: 'Tell the parents not to worry and that the medical team will handle everything',
          D: 'Avoid discussing the treatment to prevent parental anxiety',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Family-centered communication involves explaining medical interventions in understandable language, sharing the rationale for treatment, encouraging questions, and involving parents in care decisions. This approach builds trust, reduces anxiety, and empowers families.',
        explanationWrong:
          'Providing only technical literature is not effective communication. Dismissing parental concerns or avoiding discussion increases anxiety and undermines trust. Family-centered care requires honest, clear, and supportive communication.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 8,
        questionText:
          'Positioning for a premature infant in the NICU should aim to:',
        choices: {
          A: 'Maintain the infant in an extended position to promote muscle tone',
          B: 'Support flexed postures that mimic the intrauterine environment',
          C: 'Keep the infant supine with arms and legs extended at all times',
          D: 'Restrict all movement with tight swaddling',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Developmental positioning supports flexion, midline orientation, and containment that mimic the intrauterine environment. Proper positioning promotes musculoskeletal development, reduces energy expenditure, and improves self-regulatory behaviors in premature infants.',
        explanationWrong:
          'Extended positioning is non-physiologic and can lead to abnormal muscle tone and postural deformities. Constant supine positioning without flexion support does not promote normal development. Restrictive swaddling that prevents all movement is not recommended; gentle containment with opportunities for movement is preferred.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 9,
        questionText:
          'Which of the following best describes the concept of "clustered care" in the NICU?',
        choices: {
          A: 'Performing all assessments and interventions at random intervals throughout the day',
          B: 'Having multiple clinicians assess the infant simultaneously',
          C: 'Separating all care activities by at least 2 hours',
          D: 'Grouping necessary care activities together to provide longer uninterrupted rest periods for the infant',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Clustered care involves coordinating and grouping necessary assessments and interventions together to minimize the number of times the infant is disturbed. This provides longer periods of uninterrupted sleep, which is critical for brain development in premature infants.',
        explanationWrong:
          'Random intervals of care disrupt sleep unpredictably. Having multiple clinicians at once does not necessarily reduce the number of disturbances. Separating all activities by 2 hours means more frequent disruptions. The goal is to consolidate care to protect rest periods.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 10,
        questionText:
          'A mother in the NICU asks the respiratory therapist if she can hold her infant who is receiving nasal CPAP. What is the most appropriate response?',
        choices: {
          A: 'No, the infant cannot be held while on any respiratory support',
          B: 'Only after the infant is weaned from all respiratory support',
          C: 'Yes, holding is encouraged and can be safely done with nasal CPAP in place with appropriate support',
          D: 'Only physicians can make that decision',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Kangaroo care and holding can be safely performed while an infant is on nasal CPAP with proper planning and assistance. Studies show that skin-to-skin contact during CPAP is safe and may even improve respiratory stability. Family-centered care encourages parental holding whenever clinically feasible.',
        explanationWrong:
          'Blanket restrictions on holding during respiratory support are not evidence-based. Waiting until all support is weaned unnecessarily delays bonding and the benefits of kangaroo care. While the care team coordinates the activity, respiratory therapists can advocate for appropriate holding.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 11,
        questionText:
          'Sucrose administered orally before a painful procedure in a neonate provides pain relief primarily through which mechanism?',
        choices: {
          A: 'Activation of endogenous opioid pathways',
          B: 'Topical anesthetic effect on the oral mucosa',
          C: 'Sedation through gastric distension',
          D: 'Reduction of inflammation at the procedure site',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Oral sucrose provides analgesic effects in neonates by activating endogenous opioid pathways. The sweet taste on the tongue triggers opioid release, which reduces pain perception. The effect is enhanced when combined with non-nutritive sucking.',
        explanationWrong:
          'Sucrose does not provide topical anesthesia or cause significant gastric distension. It does not reduce inflammation. The analgesic mechanism is centrally mediated through opioid receptor activation triggered by the sweet taste sensation.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 12,
        questionText:
          'Palliative care in the NICU is most accurately described as:',
        choices: {
          A: 'Care provided only when death is imminent',
          B: 'Care provided only after parents request it',
          C: 'Withdrawal of all medical interventions',
          D: 'Specialized care focused on relief of suffering, quality of life, and support for families, which can occur alongside curative treatment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Palliative care is specialized care focused on providing relief from symptoms, managing pain, and supporting quality of life for patients and their families. In the NICU, it can be provided alongside curative treatment and does not equate to withdrawing care or giving up.',
        explanationWrong:
          'Palliative care is not limited to end-of-life situations. It does not mean withdrawing all interventions. It should be proactively offered based on clinical needs, not only when families request it. It is a holistic approach that can complement curative therapies.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 13,
        questionText:
          'A premature infant born at 26 weeks gestation is now 34 weeks corrected gestational age. The respiratory therapist observes the infant bringing hands to mouth and demonstrating rooting behavior. These cues suggest the infant may be ready for:',
        choices: {
          A: 'Extubation to room air',
          B: 'Discontinuation of IV fluids',
          C: 'Oral feeding trials',
          D: 'Discharge home',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hands-to-mouth activity and rooting are developmental cues indicating oral feeding readiness. At 34 weeks corrected gestational age, the suck-swallow-breathe coordination begins to mature. Cue-based feeding, guided by infant behavioral signals, is a developmental care best practice.',
        explanationWrong:
          'These cues are specifically related to feeding readiness, not respiratory status or discharge readiness. While IV fluid management may change with feeding advancement, the primary significance of these behaviors is readiness for oral feeding trials.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 14,
        questionText:
          'The respiratory therapist notes that a mechanically ventilated neonate consistently demonstrates desaturation and bradycardia during suctioning. Which developmental care approach should be implemented?',
        choices: {
          A: 'Increase the suction pressure to complete the procedure faster',
          B: 'Suction on a strict every-2-hour schedule regardless of need',
          C: 'Avoid suctioning entirely',
          D: 'Perform suctioning only when clinically indicated, using containment and recovery time between passes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Evidence-based developmental care supports performing suctioning only when clinically indicated (based on assessment of secretions) rather than on a rigid schedule. Using containment (gentle hand placement), allowing recovery time between suction passes, and monitoring for stress cues minimizes adverse effects.',
        explanationWrong:
          'Increasing suction pressure increases mucosal trauma risk. Rigid time-based schedules may result in unnecessary procedures. Avoiding suctioning entirely can lead to airway obstruction. The optimal approach balances clinical necessity with stress reduction.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 15,
        questionText:
          'Which of the following is a key element of bereavement support in the NICU?',
        choices: {
          A: 'Avoiding discussion of the infant to prevent emotional distress',
          B: 'Offering memory-making opportunities such as handprints, footprints, and photographs',
          C: 'Requesting that families leave the unit immediately',
          D: 'Limiting bereavement support to clergy members only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Comprehensive bereavement support includes offering memory-making activities (handprints, footprints, photographs, memory boxes), allowing families to spend time with their infant, and providing emotional support from the entire care team. These activities help families grieve and create meaningful connections.',
        explanationWrong:
          'Avoiding discussion invalidates the family\'s loss. Asking families to leave is insensitive and inappropriate. Bereavement support should be interdisciplinary, including social workers, chaplains, nurses, and all care team members, not limited to clergy.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 16,
        questionText:
          'Protected sleep in the NICU promotes neurodevelopment in premature infants primarily because:',
        choices: {
          A: 'Active and quiet sleep states are critical periods for brain growth, synaptogenesis, and neural organization',
          B: 'Sleep reduces the need for nutritional support',
          C: 'Sleep eliminates all physiologic instability',
          D: 'Sleep reduces the need for mechanical ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sleep is essential for neurodevelopment in premature infants. During both active (REM) and quiet (non-REM) sleep, critical processes including synaptogenesis, neural pathway organization, and brain growth occur. Frequent disruptions fragment sleep and can impair these developmental processes.',
        explanationWrong:
          'While adequate sleep supports overall physiology, it does not eliminate nutritional needs or physiologic instability. Sleep does not directly reduce the need for mechanical ventilation. The primary significance is the essential role of sleep in brain development.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is providing discharge education to parents of an infant going home on supplemental oxygen. Which statement reflects best practice in family-centered discharge planning?',
        choices: {
          A: 'Provide written instructions only and schedule a follow-up appointment',
          B: 'Teach parents to use the equipment, have them demonstrate competency, and ensure they have a 24-hour contact number for questions',
          C: 'Tell parents the home health company will teach them everything they need to know',
          D: 'Provide a video tutorial and assume competency if no questions are asked',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Effective discharge education involves hands-on teaching, return demonstration of competency by parents (teach-back method), written instructions for reference, and providing a 24-hour contact number. This comprehensive approach ensures parents are confident and prepared for home oxygen management.',
        explanationWrong:
          'Written instructions alone are insufficient for equipment training. Relying solely on home health companies delays learning and does not allow for inpatient supervised practice. Video tutorials without competency verification do not ensure safe home management.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 18,
        questionText:
          'What is the primary rationale for cycled lighting (dimming lights at night) in the NICU?',
        choices: {
          A: 'To reduce electricity costs',
          B: 'To support the development of circadian rhythms in premature infants',
          C: 'To reduce staff fatigue',
          D: 'To make charting easier for staff',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cycled lighting in the NICU (dimming lights during nighttime hours and providing low-level lighting during the day) supports the development of circadian rhythms in premature infants. Evidence shows that cycled lighting can improve weight gain, shorten hospital stays, and promote sleep-wake cycle maturation.',
        explanationWrong:
          'While reduced lighting may have ancillary benefits for staff and energy use, the primary medical rationale is supporting circadian rhythm development in premature infants. The developing circadian system needs environmental light-dark cues to mature properly.',
        topic: 'Developmental Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 19,
        questionText:
          'A parent in the NICU is expressing frustration about conflicting information from different members of the care team. The respiratory therapist should:',
        choices: {
          A: 'Acknowledge the frustration, clarify the current care plan, and facilitate a care conference with the team and family',
          B: 'Tell the parent to only listen to the attending physician',
          C: 'Dismiss the concern as a misunderstanding',
          D: 'Avoid the conversation and refer the parent to social work',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Family-centered care requires acknowledging parental concerns, providing clear and consistent information, and facilitating communication. Arranging a care conference allows all team members and the family to align on the care plan, reducing confusion and building trust.',
        explanationWrong:
          'Redirecting to only one team member undermines the interdisciplinary team approach. Dismissing concerns erodes trust. While social work can assist, the respiratory therapist should address the concern directly and advocate for a care conference rather than avoiding the conversation.',
        topic: 'Family-Centered Care',
      },
      {
        miniExamId: exam10.id,
        questionIndex: 20,
        questionText:
          'The Brazelton Neonatal Behavioral Assessment Scale (NBAS) is used in the NICU primarily to:',
        choices: {
          A: 'Diagnose genetic disorders',
          B: 'Determine gestational age',
          C: 'Evaluate the newborn\'s neurobehavioral organization, including state regulation, motor responses, and interactive capabilities',
          D: 'Measure head circumference growth velocity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The NBAS assesses the newborn\'s neurobehavioral functioning across multiple domains including habituation, orientation, motor performance, range of state, regulation of state, autonomic stability, and reflexes. It provides a comprehensive picture of the infant\'s behavioral organization and can guide individualized care.',
        explanationWrong:
          'The NBAS does not diagnose genetic disorders. Gestational age is determined by the Ballard or Dubowitz score, not the NBAS. Head circumference measurement is a separate growth assessment. The NBAS specifically evaluates neurobehavioral capabilities.',
        topic: 'Developmental Care',
      },
    ],
  })

  console.log('NPS mini exams 6-10 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
