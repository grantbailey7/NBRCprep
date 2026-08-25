import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 16-20...')

  // ─── EXAM 16 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q19) B=5(Q3,Q8,Q12,Q16,Q20) C=5(Q2,Q5,Q9,Q15,Q17) D=5(Q4,Q7,Q11,Q13,Q18)
  const exam16 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 16',
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
          'A 58-year-old patient has been mechanically ventilated for 12 days following severe pneumonia. The ICU team is considering tracheostomy placement. According to current evidence, what is the primary advantage of performing a percutaneous dilational tracheostomy at the bedside compared to an open surgical tracheostomy in the operating room?',
        choices: {
          A: 'Lower incidence of peristomal wound infection and reduced procedural costs',
          B: 'Superior long-term airway patency after decannulation',
          C: 'Elimination of the risk of posterior tracheal wall injury',
          D: 'Faster procedure time regardless of patient anatomy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Percutaneous dilational tracheostomy (PDT) performed at the bedside has been associated with lower rates of peristomal wound infection and reduced costs compared to open surgical tracheostomy performed in the OR. The bedside approach eliminates transport-related risks and operating room overhead.',
        explanationWrong:
          'Long-term airway patency is comparable between techniques. PDT carries a risk of posterior tracheal wall injury, particularly without bronchoscopic guidance. Procedure time varies with anatomy and is not universally faster for PDT, especially in patients with difficult landmarks.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 2,
        questionText:
          'A 72-year-old post-operative patient in the ICU is assessed using the CAM-ICU tool. The patient demonstrates acute onset of mental status changes, inattention on the Attention Screening Examination, and disorganized thinking, but has a normal level of consciousness (RASS 0). What is the correct interpretation?',
        choices: {
          A: 'The patient does not have delirium because the RASS is 0',
          B: 'The assessment is inconclusive and should be repeated in 24 hours',
          C: 'The patient is CAM-ICU positive for delirium',
          D: 'The patient has subsyndromal delirium that does not require intervention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The CAM-ICU is positive when there is (1) acute onset or fluctuating mental status, (2) inattention, AND either (3) disorganized thinking OR (4) altered level of consciousness. This patient meets criteria 1, 2, and 3, making the assessment positive for delirium. A normal RASS does not rule out delirium.',
        explanationWrong:
          'A RASS of 0 (alert and calm) does not exclude delirium; patients can be delirious while appearing alert. The assessment is conclusive and should not be delayed. Subsyndromal delirium refers to patients meeting only some criteria, whereas this patient meets full diagnostic criteria.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 3,
        questionText:
          'A mechanically ventilated patient develops a new fever on day 5 of ventilation. The ventilator-associated event (VAE) surveillance algorithm from the CDC requires identification of a period of sustained worsening in oxygenation. What is the specific criterion for the initial ventilator-associated condition (VAC) tier?',
        choices: {
          A: 'New infiltrate on chest radiograph with purulent secretions',
          B: 'Positive quantitative culture from bronchoalveolar lavage',
          C: 'An increase in daily minimum PEEP of at least 3 cmH2O or daily minimum FiO2 of at least 20 points sustained for 2 or more calendar days after at least 2 days of stable or improving settings',
          D: 'Temperature greater than 38.0 C combined with leukocytosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The CDC VAE surveillance framework defines a ventilator-associated condition (VAC) as an increase in daily minimum PEEP of at least 3 cmH2O or daily minimum FiO2 of at least 20 percentage points, sustained for 2 or more calendar days, following a baseline period of at least 2 calendar days of stable or improving ventilator settings.',
        explanationWrong:
          'Chest radiograph findings and purulent secretions are part of the clinical criteria for possible ventilator-associated pneumonia (PVAP), not the initial VAC tier. Positive cultures are also part of PVAP criteria. Fever and leukocytosis contribute to the infection-related ventilator-associated complication (IVAC) tier, not the initial VAC definition.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 4,
        questionText:
          'A 45-year-old patient with idiopathic pulmonary arterial hypertension is admitted to the ICU with acute right heart failure. The patient is hypotensive with a systolic BP of 78 mmHg. Central venous pressure is 22 mmHg and the cardiac index is 1.6 L/min/m2. Which vasopressor is most appropriate as a first-line agent in this scenario?',
        choices: {
          A: 'Phenylephrine',
          B: 'Vasopressin',
          C: 'Dopamine',
          D: 'Norepinephrine',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Norepinephrine is the preferred first-line vasopressor in acute right heart failure with hemodynamic instability. It increases systemic vascular resistance to maintain coronary perfusion pressure to the right ventricle while providing modest inotropic support without significantly increasing pulmonary vascular resistance at typical doses.',
        explanationWrong:
          'Phenylephrine is a pure alpha agonist that increases afterload without inotropic benefit and may worsen right ventricular function. Vasopressin may increase pulmonary vascular resistance through V1 receptor stimulation. Dopamine causes more tachycardia and arrhythmias compared to norepinephrine and is not preferred in acute right heart failure.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 5,
        questionText:
          'A morbidly obese patient (BMI 52 kg/m2) requires mechanical ventilation following emergent abdominal surgery. When setting initial ventilator parameters, which weight should be used to calculate tidal volume, and what positioning strategy optimizes respiratory mechanics?',
        choices: {
          A: 'Actual body weight with flat supine positioning',
          B: 'Adjusted body weight with Trendelenburg positioning',
          C: 'Ideal body weight with reverse Trendelenburg positioning at 30 to 45 degrees',
          D: 'Actual body weight with lateral decubitus positioning',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Tidal volume in obese patients should be calculated using ideal body weight (IBW), as lung size does not scale with adiposity. Reverse Trendelenburg positioning at 30 to 45 degrees reduces the weight of abdominal contents on the diaphragm, improving functional residual capacity, lung compliance, and oxygenation.',
        explanationWrong:
          'Using actual body weight would result in excessive tidal volumes causing volutrauma. Adjusted body weight overestimates lung volume. Flat supine positioning allows abdominal mass to compress the diaphragm, worsening atelectasis. Trendelenburg positioning further impairs diaphragmatic excursion in obese patients.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 6,
        questionText:
          'A 28-year-old patient with a C5 complete spinal cord injury is admitted to the ICU 6 hours after trauma. The patient has paradoxical breathing with accessory muscle use. Arterial blood gas shows pH 7.35, PaCO2 48 mmHg, PaO2 68 mmHg on 4 L/min nasal cannula. What is the most appropriate initial respiratory management strategy?',
        choices: {
          A: 'Aggressive pulmonary hygiene with assisted cough techniques, incentive spirometry, and close monitoring of vital capacity trends',
          B: 'Immediate intubation and mechanical ventilation',
          C: 'Initiation of continuous positive airway pressure at 10 cmH2O',
          D: 'Administration of methylprednisolone for spinal cord edema',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In acute C5 spinal cord injury, the diaphragm is partially innervated (C3-C5) but intercostal and abdominal muscles are paralyzed, leading to impaired cough and secretion clearance. Initial management should focus on aggressive pulmonary hygiene with assisted cough techniques while monitoring vital capacity trends. Intubation is indicated if FVC falls below 15 mL/kg or the patient shows signs of progressive respiratory failure.',
        explanationWrong:
          'Immediate intubation is not necessary when the patient is maintaining adequate ventilation with compensated respiratory acidosis. CPAP alone does not address secretion clearance, which is the primary concern. Methylprednisolone is no longer recommended for acute spinal cord injury based on current evidence.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 7,
        questionText:
          'A 55-year-old patient achieves return of spontaneous circulation after 22 minutes of cardiac arrest from ventricular fibrillation. The patient remains comatose with a GCS of 3T. Per current guidelines, what is the recommended target temperature and duration for targeted temperature management?',
        choices: {
          A: 'Cool to 30 to 32 degrees C for 48 hours',
          B: 'Maintain normothermia at 37.5 degrees C only',
          C: 'Cool to 36 to 37 degrees C for 12 hours',
          D: 'Maintain a constant temperature between 32 and 36 degrees C for at least 24 hours',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current guidelines for post-cardiac arrest care recommend targeted temperature management (TTM) at a constant temperature between 32 and 36 degrees C for at least 24 hours in comatose survivors of cardiac arrest. The TTM2 trial showed no difference in outcomes between 33 degrees C and 36 degrees C, but active fever prevention remains essential.',
        explanationWrong:
          'Temperatures of 30 to 32 degrees C increase the risk of arrhythmias, coagulopathy, and infection without proven benefit over moderate hypothermia. Normothermia alone without active temperature control is insufficient since fever after cardiac arrest is common and harmful. A 12-hour duration is too short; at least 24 hours is recommended.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 8,
        questionText:
          'A patient develops acute respiratory distress and hypoxemia during transfusion of the second unit of packed red blood cells. Chest radiograph shows bilateral pulmonary infiltrates. The BNP level is 85 pg/mL (normal). Which finding best distinguishes transfusion-related acute lung injury (TRALI) from transfusion-associated circulatory overload (TACO)?',
        choices: {
          A: 'Bilateral infiltrates on chest radiograph',
          B: 'A normal or low BNP level with non-elevated pulmonary artery occlusion pressure',
          C: 'Onset within 6 hours of transfusion',
          D: 'Hypoxemia with PaO2/FiO2 ratio less than 300',
        },
        correctChoice: 'B',
        explanationCorrect:
          'TRALI is a form of noncardiogenic pulmonary edema characterized by normal or low BNP levels and normal pulmonary artery occlusion pressure, reflecting increased pulmonary capillary permeability rather than hydrostatic edema. TACO presents with elevated BNP and elevated filling pressures consistent with volume overload.',
        explanationWrong:
          'Bilateral infiltrates, onset within 6 hours of transfusion, and hypoxemia are features common to both TRALI and TACO. These findings alone cannot distinguish between the two conditions. The key differentiator is whether the pulmonary edema is due to increased permeability (TRALI) or hydrostatic pressure (TACO).',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 9,
        questionText:
          'A 48-year-old patient is admitted to the ICU with severe acute pancreatitis. On hospital day 3, the patient develops progressive abdominal distension, oliguria, and rising peak airway pressures on the ventilator. Bladder pressure is measured at 28 mmHg. What is the most appropriate next step?',
        choices: {
          A: 'Administer a fluid bolus of 30 mL/kg crystalloid',
          B: 'Increase PEEP to match intra-abdominal pressure',
          C: 'Perform urgent surgical decompressive laparotomy',
          D: 'Insert a nasogastric tube and administer a prokinetic agent',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A bladder pressure of 28 mmHg with evidence of new organ dysfunction (oliguria and respiratory compromise) meets the definition of abdominal compartment syndrome (intra-abdominal hypertension grade IV with organ failure). Surgical decompressive laparotomy is the definitive treatment when medical measures fail to reduce intra-abdominal pressure in the setting of organ dysfunction.',
        explanationWrong:
          'Additional fluid administration may worsen abdominal compartment syndrome by increasing visceral edema. Increasing PEEP does not address the underlying cause and may further impair venous return. Nasogastric decompression and prokinetics are medical measures that may help in milder cases (grade I-II IAH) but are insufficient when frank abdominal compartment syndrome with organ failure is present.',
        topic: 'Abdominal Compartment Syndrome',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 10,
        questionText:
          'A hospital implements a rapid response system (RRS) with a medical emergency team (MET). Which parameter set, when used as calling criteria, has been shown to be most effective at identifying patients at risk for deterioration on general wards?',
        choices: {
          A: 'Aggregate weighted scoring systems such as the Modified Early Warning Score (MEWS) that combine multiple physiologic parameters into a single composite score with defined escalation thresholds',
          B: 'Single-parameter systems using heart rate greater than 140 bpm alone as the trigger',
          C: 'Nurse subjective concern without any objective criteria',
          D: 'Laboratory values including lactate levels checked every 4 hours on all ward patients',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Aggregate weighted scoring systems like the MEWS combine respiratory rate, heart rate, systolic blood pressure, temperature, and level of consciousness into a single score with defined thresholds for escalation. These systems have demonstrated superior sensitivity and specificity for identifying patients at risk for clinical deterioration compared to single-parameter criteria alone.',
        explanationWrong:
          'Single-parameter systems using one vital sign may miss patients with subtle multi-system deterioration. Subjective nurse concern is valuable as an adjunct but is insufficient as the sole trigger criterion. Routine lactate screening on all ward patients is neither practical nor cost-effective and does not constitute a validated early warning system.',
        topic: 'Rapid Response and Early Warning Systems',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 11,
        questionText:
          'During percutaneous dilational tracheostomy with bronchoscopic guidance, the bronchoscope reveals the needle entering the trachea between the second and third tracheal rings. The patient suddenly develops subcutaneous emphysema, desaturation, and loss of end-tidal CO2. What is the most likely complication?',
        choices: {
          A: 'Esophageal perforation',
          B: 'Tracheal ring fracture with mucosal flap',
          C: 'Right mainstem bronchus intubation',
          D: 'Posterior tracheal wall injury with pneumomediastinum',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The combination of subcutaneous emphysema, desaturation, and loss of end-tidal CO2 during percutaneous tracheostomy is most consistent with posterior tracheal wall injury causing pneumomediastinum and possible false passage creation. This complication occurs when the dilator or tracheostomy tube breaches the posterior membranous tracheal wall.',
        explanationWrong:
          'Esophageal perforation would present similarly but is less common with bronchoscopic guidance and typically does not cause immediate loss of ETCO2. Tracheal ring fracture may occur but does not explain the full constellation of findings. Right mainstem intubation would not cause subcutaneous emphysema.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 12,
        questionText:
          'An ICU implements a delirium prevention bundle. Which combination of non-pharmacologic interventions has the strongest evidence for reducing the incidence of ICU delirium?',
        choices: {
          A: 'Continuous benzodiazepine infusion with scheduled haloperidol prophylaxis',
          B: 'Early mobilization, sleep promotion protocols, daily sedation interruption, and cognitive stimulation with orientation activities',
          C: 'Physical restraints to prevent self-harm with continuous one-to-one nursing observation',
          D: 'Total environmental isolation to reduce overstimulation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ABCDEF bundle and similar multicomponent strategies emphasize early mobilization, sleep hygiene optimization, daily sedation interruption, and reorientation activities as the cornerstone of delirium prevention. These non-pharmacologic measures have the strongest evidence for reducing delirium incidence, duration, and severity in the ICU.',
        explanationWrong:
          'Benzodiazepines are a known risk factor for ICU delirium and should be minimized. Haloperidol prophylaxis has not shown consistent benefit in delirium prevention. Physical restraints are associated with increased delirium risk. Environmental isolation leads to sensory deprivation, which worsens delirium.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 13,
        questionText:
          'During VAE surveillance, a mechanically ventilated patient meets criteria for a ventilator-associated condition (VAC) and subsequently has a temperature of 38.5 degrees C with a white blood cell count of 13,000/mcL. A new antibiotic is initiated. This patient now meets criteria for which additional tier in the VAE framework?',
        choices: {
          A: 'Possible ventilator-associated pneumonia (PVAP)',
          B: 'Ventilator-associated tracheobronchitis (VAT)',
          C: 'Ventilator-associated condition only; no further tier is met',
          D: 'Infection-related ventilator-associated complication (IVAC)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An IVAC is identified when a patient with VAC develops signs of infection: temperature greater than 38 degrees C or less than 36 degrees C OR white blood cell count of 12,000/mcL or greater or 4,000/mcL or less, AND initiation of a new qualifying antimicrobial that is continued for at least 4 calendar days. This patient meets all IVAC criteria.',
        explanationWrong:
          'PVAP requires additional evidence such as purulent respiratory secretions or positive quantitative respiratory culture, which are not described here. VAT is not a tier in the CDC VAE surveillance framework. The presence of infection signs with new antibiotics in a patient with VAC elevates the classification beyond VAC alone to IVAC.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 14,
        questionText:
          'A patient with severe pulmonary arterial hypertension on chronic inhaled epoprostenol therapy is intubated for respiratory failure. The respiratory therapist is asked to continue the inhaled epoprostenol via the ventilator circuit. Which statement regarding in-line inhaled epoprostenol delivery during mechanical ventilation is correct?',
        choices: {
          A: 'The medication should be delivered via a dedicated nebulizer placed in the inspiratory limb with a filter on the expiratory limb to protect the flow sensor, and delivery should not be interrupted as rebound pulmonary hypertension may occur',
          B: 'Inhaled epoprostenol can be safely discontinued during mechanical ventilation because systemic absorption provides adequate pulmonary vasodilation',
          C: 'The medication should be delivered through the endotracheal tube cuff port',
          D: 'Inhaled epoprostenol is contraindicated during mechanical ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled epoprostenol must be continued without interruption in patients on chronic therapy, as abrupt discontinuation can cause life-threatening rebound pulmonary hypertension. It should be delivered through a dedicated nebulizer in the inspiratory limb, and an expiratory filter is necessary to protect the ventilator flow sensor from the sticky medication residue.',
        explanationWrong:
          'Inhaled epoprostenol acts locally in the pulmonary vasculature and has minimal systemic absorption, so mechanical ventilation alone does not replace the need for the drug. The cuff port is not designed for medication delivery. Inhaled epoprostenol is not contraindicated during mechanical ventilation and is in fact essential to continue.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 15,
        questionText:
          'A 42-year-old patient with a BMI of 58 kg/m2 is undergoing a spontaneous breathing trial prior to extubation. Despite meeting standard SBT criteria, the respiratory therapist is concerned about post-extubation failure. Which factor most significantly increases the risk of extubation failure specifically in obese ICU patients?',
        choices: {
          A: 'Tidal volume greater than 5 mL/kg of ideal body weight during SBT',
          B: 'History of obstructive sleep apnea with baseline nocturnal CPAP use',
          C: 'Coexisting obstructive sleep apnea with known upper airway obstruction, compounded by reduced FRC and rapid desaturation physiology',
          D: 'Female sex',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Obese patients with obstructive sleep apnea have multiple compounding risk factors for extubation failure: upper airway obstruction from redundant pharyngeal tissue, reduced functional residual capacity causing rapid oxygen desaturation, and impaired respiratory mechanics. The combination of OSA with upper airway compromise and the obesity-related rapid desaturation physiology creates the highest risk profile for failed extubation.',
        explanationWrong:
          'A tidal volume greater than 5 mL/kg IBW during SBT may actually indicate adequate respiratory effort. While OSA with CPAP use is a risk factor, the more specific concern is the combined effect of airway obstruction with altered respiratory physiology. Female sex alone is not a major independent predictor of extubation failure in this population.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 16,
        questionText:
          'A patient with a C3 complete spinal cord injury is mechanically ventilated and being evaluated for diaphragm pacing. Which criterion is essential before diaphragm pacing can be considered?',
        choices: {
          A: 'Presence of spontaneous diaphragm activity on ultrasound',
          B: 'Intact phrenic nerve function demonstrated by phrenic nerve conduction studies',
          C: 'Patient age less than 40 years',
          D: 'Injury duration of less than 72 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Diaphragm pacing requires intact phrenic nerve motor neurons and functional neuromuscular junctions. Phrenic nerve conduction studies are essential to confirm that the phrenic nerves can conduct electrical impulses and stimulate diaphragm contraction before proceeding with pacer implantation.',
        explanationWrong:
          'Spontaneous diaphragm activity is typically absent in C3 complete injuries, which is precisely why pacing is being considered. There is no strict age cutoff for diaphragm pacing candidacy. The timing since injury is less critical than phrenic nerve integrity, and pacing can be considered months to years after injury.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 17,
        questionText:
          'During targeted temperature management after cardiac arrest, the patient is being rewarmed at a controlled rate. The patient develops ventricular tachycardia during rewarming. Which electrolyte abnormality is most commonly associated with arrhythmias during the rewarming phase of TTM?',
        choices: {
          A: 'Hypernatremia',
          B: 'Hyperkalemia from intracellular potassium shifts during rewarming',
          C: 'Hypocalcemia',
          D: 'Hypermagnesemia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During hypothermia, potassium shifts intracellularly, often requiring supplementation to maintain normal serum levels. During rewarming, potassium shifts back out of cells, causing rebound hyperkalemia if supplementation was aggressive. This hyperkalemia is the most common electrolyte-related cause of arrhythmias during the rewarming phase of TTM.',
        explanationWrong:
          'Hypernatremia is not a typical complication of TTM rewarming. Hypocalcemia may occur but is less commonly the cause of rewarming-associated arrhythmias. Hypermagnesemia is uncommon during rewarming; hypomagnesemia is more typical during hypothermia.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 18,
        questionText:
          'A patient receives 4 units of fresh frozen plasma and develops acute hypoxemia with bilateral pulmonary infiltrates 3 hours later. Anti-HLA class II antibodies are detected in the donor plasma that match the recipient. This mechanism is most consistent with which pathophysiology?',
        choices: {
          A: 'Anaphylactic transfusion reaction',
          B: 'Febrile non-hemolytic transfusion reaction',
          C: 'Transfusion-associated circulatory overload',
          D: 'Antibody-mediated TRALI caused by donor anti-HLA antibodies activating recipient neutrophils in the pulmonary vasculature',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Classic immune-mediated TRALI occurs when donor antibodies (anti-HLA or anti-neutrophil antibodies) in the transfused plasma react with recipient leukocyte antigens, causing neutrophil activation and sequestration in the pulmonary microvasculature. This leads to endothelial damage, capillary leak, and noncardiogenic pulmonary edema.',
        explanationWrong:
          'Anaphylactic reactions present with urticaria, bronchospasm, and hypotension without bilateral infiltrates. Febrile non-hemolytic reactions cause fever and rigors but not pulmonary edema. TACO is volume-related cardiogenic edema without antibody involvement.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 19,
        questionText:
          'A 52-year-old patient with necrotizing pancreatitis has an intra-abdominal pressure of 18 mmHg (grade II IAH) with stable hemodynamics and preserved urine output. Which medical management strategy is most appropriate to reduce intra-abdominal pressure before considering surgical intervention?',
        choices: {
          A: 'Neuromuscular blockade to improve abdominal wall compliance, combined with nasogastric and rectal decompression and diuresis if hemodynamically tolerated',
          B: 'Immediate decompressive laparotomy',
          C: 'High-volume crystalloid resuscitation',
          D: 'Placement of a peritoneal dialysis catheter for continuous drainage',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For grade II intra-abdominal hypertension (16-20 mmHg) without organ failure, medical management should be attempted first. Neuromuscular blockade reduces abdominal wall muscle tone, improving compliance. Nasogastric and rectal decompression reduce intraluminal volume. Judicious diuresis can reduce visceral edema if the patient is hemodynamically stable.',
        explanationWrong:
          'Decompressive laparotomy is reserved for abdominal compartment syndrome (IAH with organ failure), not grade II IAH with preserved organ function. Aggressive crystalloid resuscitation worsens visceral edema and increases IAP. Peritoneal dialysis catheter drainage may help with ascites but is not the first-line medical intervention for IAH.',
        topic: 'Abdominal Compartment Syndrome',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 20,
        questionText:
          'A hospital reviews its rapid response system data and finds that the mean time from meeting MET activation criteria to actual team activation is 25 minutes. This delay is termed afferent limb failure. Which intervention is most likely to reduce this delay?',
        choices: {
          A: 'Increasing the number of MET team members',
          B: 'Implementing automated electronic early warning score calculations integrated into the electronic health record with direct notification alerts to the response team',
          C: 'Restricting MET activation authority to physicians only',
          D: 'Reducing the frequency of vital sign assessments',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Afferent limb failure refers to delays in recognizing deterioration and activating the response team. Automated EWS calculations with direct electronic alerts reduce the time from meeting criteria to team activation by eliminating the need for manual score calculation and the subjective decision to call. This has been shown to significantly reduce afferent limb failure.',
        explanationWrong:
          'Increasing MET team size addresses the efferent limb (response), not the afferent limb (detection and activation). Restricting activation to physicians creates barriers and increases delays. Reducing vital sign frequency would increase the time to detect deterioration, worsening afferent limb performance.',
        topic: 'Rapid Response and Early Warning Systems',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 16 seeded (20 questions, isFree: false)')

  // ─── EXAM 17 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q7,Q11,Q15,Q18) B=5(Q4,Q6,Q10,Q13,Q20) C=5(Q1,Q5,Q9,Q16,Q19) D=5(Q3,Q8,Q12,Q14,Q17)
  const exam17 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 17',
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
          'A 64-year-old patient with a tracheostomy placed 10 days ago develops bright red blood around the stoma site. The bleeding initially stops with direct pressure but recurs with increased volume 2 hours later. A CT angiogram reveals a tracheo-innominate artery fistula. What is the immediate life-saving intervention?',
        choices: {
          A: 'Packing the stoma site with hemostatic gauze',
          B: 'Deflating the tracheostomy cuff and removing the tube',
          C: 'Hyperinflating the tracheostomy cuff and applying digital pressure anteriorly through the stoma against the innominate artery (Utley maneuver) while arranging emergent surgical exploration',
          D: 'Administering tranexamic acid intravenously',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Tracheo-innominate artery fistula is a life-threatening emergency. The immediate temporizing measure is to hyperinflate the tracheostomy cuff to tamponade the bleeding, and if this fails, to perform the Utley maneuver by inserting a finger through the stoma and applying anterior pressure against the sternum to compress the innominate artery. Definitive treatment requires emergent surgical repair.',
        explanationWrong:
          'External packing is insufficient for arterial hemorrhage from this source. Removing the tracheostomy tube eliminates the ability to tamponade the bleeding with the cuff and may result in rapid exsanguination. Tranexamic acid alone cannot control high-pressure arterial hemorrhage from a fistula.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 2,
        questionText:
          'A 78-year-old patient in the surgical ICU has hyperactive delirium with agitation despite non-pharmacologic interventions. The patient is pulling at lines and tubes. Which medication is most appropriate for acute management of hyperactive ICU delirium when non-pharmacologic measures have failed?',
        choices: {
          A: 'Low-dose haloperidol or another typical antipsychotic, administered after excluding QTc prolongation and contraindications',
          B: 'Lorazepam 2 mg intravenously',
          C: 'Dexmedetomidine only for non-intubated patients',
          D: 'Diphenhydramine 50 mg intravenously',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When non-pharmacologic interventions are insufficient for hyperactive delirium with dangerous agitation, low-dose haloperidol or another antipsychotic may be considered for acute symptom management. QTc interval should be assessed before administration, and the lowest effective dose should be used for the shortest duration possible.',
        explanationWrong:
          'Benzodiazepines such as lorazepam are a known risk factor for delirium and should be avoided unless the delirium is related to alcohol or benzodiazepine withdrawal. Dexmedetomidine has a role in ICU sedation and delirium management but is not restricted to non-intubated patients. Diphenhydramine has anticholinergic properties that can worsen delirium.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 3,
        questionText:
          'A quality improvement team is analyzing VAE rates in their ICU. Which evidence-based bundle element has been most consistently associated with reduced ventilator-associated events?',
        choices: {
          A: 'Routine chest radiographs every 12 hours',
          B: 'Prophylactic broad-spectrum antibiotics for all ventilated patients',
          C: 'Scheduled bronchoscopy every 48 hours',
          D: 'Daily spontaneous awakening trials paired with daily spontaneous breathing trials, combined with conservative fluid management and early mobilization',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The combination of paired SAT/SBT protocols, conservative fluid management after initial resuscitation, and early mobilization has shown the most consistent evidence for reducing VAE rates. These interventions reduce ventilator days, minimize fluid-related pulmonary edema, and decrease sedation-associated complications that contribute to VAE development.',
        explanationWrong:
          'Routine chest radiographs have not been shown to reduce VAE rates and add unnecessary cost. Prophylactic antibiotics increase antibiotic resistance without reducing VAE and are not recommended. Scheduled bronchoscopy is invasive, costly, and not supported by evidence as a VAE prevention strategy.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 4,
        questionText:
          'A patient with acute right ventricular failure secondary to massive pulmonary embolism is on norepinephrine and dobutamine. Despite maximal medical therapy, the patient remains in cardiogenic shock with a cardiac index of 1.4 L/min/m2. Which mechanical support device is most appropriate for isolated right ventricular failure refractory to medical management?',
        choices: {
          A: 'Intra-aortic balloon pump',
          B: 'Percutaneous right ventricular assist device such as the Impella RP',
          C: 'Venoarterial ECMO as first-line mechanical support',
          D: 'Left ventricular assist device',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A percutaneous right ventricular assist device such as the Impella RP is designed specifically for isolated right ventricular failure. It provides active blood flow from the right atrium or inferior vena cava to the pulmonary artery, directly unloading the failing right ventricle and augmenting pulmonary blood flow.',
        explanationWrong:
          'The intra-aortic balloon pump supports left ventricular function by reducing afterload and augmenting diastolic coronary perfusion; it does not directly support the right ventricle. VA-ECMO provides biventricular support but increases left ventricular afterload and is more invasive than necessary for isolated RV failure. An LVAD addresses left ventricular failure, not right ventricular failure.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 5,
        questionText:
          'A morbidly obese patient (BMI 55 kg/m2) in the ICU develops hypercapnic respiratory failure requiring non-invasive ventilation. Which NIV mode and settings are most appropriate for this patient?',
        choices: {
          A: 'CPAP at 5 cmH2O',
          B: 'High-flow nasal cannula at 30 L/min',
          C: 'Bilevel positive airway pressure with an IPAP of 18 to 20 cmH2O and EPAP of 8 to 10 cmH2O in a semi-upright or reverse Trendelenburg position',
          D: 'Volume-targeted NIV with tidal volume set at 8 mL/kg actual body weight',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bilevel PAP with adequate pressure support (IPAP 18-20, EPAP 8-10) provides ventilatory assistance for hypercapnia while maintaining alveolar recruitment in obese patients. Higher EPAP is needed to overcome the weight of the chest wall and abdomen. Semi-upright or reverse Trendelenburg positioning optimizes respiratory mechanics by reducing diaphragmatic compression.',
        explanationWrong:
          'CPAP alone does not provide ventilatory support for hypercapnia. HFNC does not deliver the pressure support needed for significant hypercapnic failure in obese patients. Using actual body weight for tidal volume targets would result in excessive volumes; ideal body weight should be used.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 6,
        questionText:
          'A patient with a T4 complete spinal cord injury is on mechanical ventilation. During rehabilitation, the respiratory therapist is progressively weaning the patient using a tracheostomy collar. The patient tolerates 4 hours off the ventilator but develops significant atelectasis overnight. Which strategy best addresses nocturnal respiratory complications in spinal cord injury patients during ventilator weaning?',
        choices: {
          A: 'Increasing the duration of tracheostomy collar trials at night',
          B: 'Returning to full mechanical ventilatory support overnight with lung recruitment maneuvers in the morning, while continuing to extend daytime spontaneous breathing trials',
          C: 'Decannulating the tracheostomy to improve sleep quality',
          D: 'Placing the patient in prone position overnight',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Progressive ventilator weaning in spinal cord injury patients should follow a structured approach. Daytime weaning trials are gradually extended while maintaining full ventilatory support at night when respiratory muscle fatigue, reduced respiratory drive, and supine positioning increase atelectasis risk. Lung recruitment maneuvers in the morning help re-expand atelectatic segments.',
        explanationWrong:
          'Extending unsupported breathing at night when respiratory drive is decreased and fatigue is greatest is unsafe and may lead to respiratory failure. Premature decannulation before adequate weaning removes the ability to provide ventilatory support. Prone positioning in spinal cord injury patients is complex and not standard for managing nocturnal atelectasis during weaning.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 7,
        questionText:
          'A comatose post-cardiac arrest patient has completed 24 hours of targeted temperature management at 33 degrees C and is being rewarmed. At what rate should rewarming occur to minimize the risk of complications?',
        choices: {
          A: '0.25 to 0.5 degrees C per hour, with continuous monitoring for rebound hyperthermia after reaching normothermia',
          B: 'As rapidly as possible using active warming devices to minimize the duration of hypothermia',
          C: 'Passive rewarming by removing the cooling device and allowing spontaneous temperature recovery',
          D: '1.0 to 1.5 degrees C per hour to restore normothermia within 4 to 6 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Controlled rewarming at 0.25 to 0.5 degrees C per hour is recommended to prevent complications such as rebound hyperkalemia, hemodynamic instability, cerebral edema, and seizures. Active temperature monitoring should continue for at least 48 hours after reaching normothermia to prevent rebound hyperthermia, which is associated with worse neurological outcomes.',
        explanationWrong:
          'Rapid rewarming causes dangerous electrolyte shifts (especially hyperkalemia), vasodilation with refractory hypotension, and increased intracranial pressure. Passive rewarming results in unpredictable and often too-rapid temperature increases. A rate of 1.0 to 1.5 degrees C per hour is too fast and increases the risk of complications.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 8,
        questionText:
          'A trauma patient receives 12 units of packed red blood cells, 6 units of fresh frozen plasma, and 2 units of platelets over 4 hours. The patient subsequently develops pulmonary edema with a BNP of 1,250 pg/mL and bilateral pleural effusions. The pulmonary artery occlusion pressure is 24 mmHg. What is the most likely diagnosis?',
        choices: {
          A: 'TRALI',
          B: 'Acute respiratory distress syndrome',
          C: 'Ventilator-induced lung injury',
          D: 'Transfusion-associated circulatory overload (TACO)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'TACO is characterized by hydrostatic (cardiogenic) pulmonary edema following large-volume transfusion. The elevated BNP (>1,250 pg/mL), elevated pulmonary artery occlusion pressure (24 mmHg), and pleural effusions are consistent with volume overload rather than the noncardiogenic edema seen in TRALI.',
        explanationWrong:
          'TRALI presents with noncardiogenic pulmonary edema, normal BNP, and normal filling pressures. ARDS could be considered but the elevated filling pressures and BNP point to a cardiogenic mechanism. VILI is related to injurious ventilator settings rather than transfusion volume.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 9,
        questionText:
          'A patient with severe acute pancreatitis is admitted to the ICU. The Ranson score at 48 hours is 6. According to the revised Atlanta classification, which finding defines severe acute pancreatitis?',
        choices: {
          A: 'Pancreatic necrosis on contrast-enhanced CT',
          B: 'Amylase level greater than 3 times the upper limit of normal',
          C: 'Peripancreatic fluid collection identified on imaging',
          D: 'Persistent organ failure lasting greater than 48 hours',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The revised Atlanta classification defines severe acute pancreatitis by the presence of persistent organ failure lasting greater than 48 hours. Organ failure is assessed using the modified Marshall scoring system and may involve respiratory, cardiovascular, or renal systems. Transient organ failure resolving within 48 hours classifies the disease as moderately severe.',
        explanationWrong:
          'Pancreatic necrosis is a local complication but does not define severity unless accompanied by persistent organ failure. Amylase elevation is a diagnostic criterion for pancreatitis, not a severity classifier. Peripancreatic fluid collections are local complications that can occur in mild to moderate disease.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 10,
        questionText:
          'A nurse on a general medical ward notices that a patient has a respiratory rate of 28, heart rate of 110, and systolic blood pressure of 92 mmHg. The patient\'s Modified Early Warning Score (MEWS) is 7. According to standard RRS escalation protocols, what action should be taken?',
        choices: {
          A: 'Document the findings and reassess in 4 hours',
          B: 'Immediately activate the medical emergency team (MET) or rapid response team as the score exceeds the critical threshold for emergent escalation',
          C: 'Increase the frequency of vital sign monitoring to every 2 hours',
          D: 'Administer supplemental oxygen and notify the primary physician within 30 minutes',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A MEWS of 7 is well above the typical activation threshold of 4 to 5 used in most institutions, indicating a high risk of imminent clinical deterioration. This score mandates immediate MET or RRT activation for urgent bedside assessment and intervention. Delays in activation at this score level are associated with increased mortality.',
        explanationWrong:
          'A 4-hour reassessment interval is appropriate for low-risk scores, not a MEWS of 7. Increasing monitoring frequency without escalation is insufficient for this level of physiologic derangement. Supplemental oxygen and delayed physician notification do not match the urgency required by this score.',
        topic: 'Rapid Response and Early Warning Systems',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 11,
        questionText:
          'A patient with a tracheostomy is being evaluated for decannulation readiness. Which set of criteria must be met before tracheostomy decannulation can be safely attempted?',
        choices: {
          A: 'Adequate cough strength, manageable secretion volume, ability to protect the airway from aspiration, tolerance of capping trials for 24 to 48 hours with acceptable respiratory parameters, and no anticipated need for positive pressure ventilation',
          B: 'Ability to tolerate cuff deflation for 30 minutes regardless of secretion management',
          C: 'Resolution of the condition that necessitated tracheostomy placement',
          D: 'Patient request for decannulation regardless of clinical status',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Safe decannulation requires multiple criteria: adequate cough with acceptable secretion volume, demonstrated airway protection (usually assessed with a bedside swallow evaluation or FEES), successful capping trials showing tolerance of breathing through the upper airway for at least 24 to 48 hours, and no foreseeable need for mechanical ventilation.',
        explanationWrong:
          'Cuff deflation tolerance alone is insufficient without assessing secretion management and upper airway patency. While resolution of the original condition is ideal, many patients can be safely decannulated before full resolution if they meet functional criteria. Patient request alone does not ensure physiologic readiness for safe decannulation.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 12,
        questionText:
          'A 70-year-old patient in the medical ICU has a RASS score of -3 and is assessed with the CAM-ICU. The nurse reports that the patient cannot maintain attention during the Attention Screening Examination. However, the RASS has been -3 consistently for the past 8 hours despite no sedative administration. What is the most accurate interpretation?',
        choices: {
          A: 'The patient has hyperactive delirium',
          B: 'CAM-ICU cannot be performed at this RASS level',
          C: 'The patient is oversedated and requires sedation adjustment',
          D: 'The patient likely has hypoactive delirium, which is the most common subtype in ICU patients and carries a worse prognosis than hyperactive delirium',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A RASS of -3 in the absence of sedative medications, combined with inattention on the Attention Screening Examination, is consistent with hypoactive delirium. Hypoactive delirium is the most common subtype in ICU patients (60-70% of cases) and is associated with worse outcomes because it is frequently unrecognized compared to the more obvious hyperactive subtype.',
        explanationWrong:
          'Hyperactive delirium presents with agitation (positive RASS scores). CAM-ICU can be performed at RASS -3 (the cutoff for being unable to assess is RASS -4 or -5). Since no sedatives are being administered, oversedation is not the explanation for the depressed level of consciousness.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 13,
        questionText:
          'An ICU reports a VAE rate of 12 per 1,000 ventilator days. When benchmarked against the NHSN national database, their rate is in the 75th percentile. Which quality improvement approach is most appropriate as a first step?',
        choices: {
          A: 'Change to a different ventilator brand across the ICU',
          B: 'Conduct a multidisciplinary review of VAE cases to identify modifiable risk factors and process gaps specific to their patient population and practice patterns',
          C: 'Add routine surveillance bronchoscopy to the VAE prevention bundle',
          D: 'Restrict reporting of VAE events to reduce the apparent rate',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A multidisciplinary case review is the appropriate first step in quality improvement. It allows the team to identify specific, modifiable factors contributing to their higher VAE rate, such as sedation practices, fluid management, weaning protocols, or head-of-bed elevation compliance. Solutions should be tailored to the identified gaps.',
        explanationWrong:
          'Changing ventilator brands does not address the clinical practices that drive VAE rates. Surveillance bronchoscopy is invasive and not evidence-based for VAE prevention. Restricting reporting is unethical and violates mandatory surveillance requirements; it also prevents identification of improvement opportunities.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 14,
        questionText:
          'A patient with pulmonary arterial hypertension develops worsening right heart failure in the ICU. The team is considering inhaled nitric oxide. Which statement regarding the use of inhaled nitric oxide in acute right heart failure is most accurate?',
        choices: {
          A: 'Inhaled nitric oxide increases systemic vascular resistance, improving right ventricular perfusion pressure',
          B: 'Inhaled nitric oxide should be started at 80 ppm and maintained at that dose',
          C: 'Inhaled nitric oxide selectively reduces pulmonary vascular resistance without causing systemic hypotension, and must be weaned gradually to prevent rebound pulmonary hypertension',
          D: 'Methemoglobin levels do not need to be monitored during iNO therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Inhaled nitric oxide (iNO) is a selective pulmonary vasodilator that reduces PVR without systemic effects because it is rapidly inactivated by hemoglobin in the pulmonary capillaries. It must be weaned gradually because abrupt discontinuation can cause rebound pulmonary hypertension due to downregulation of endogenous nitric oxide production during therapy.',
        explanationWrong:
          'iNO does not affect systemic vascular resistance because it is inactivated before reaching the systemic circulation. Starting at 80 ppm is excessive; typical starting doses are 10 to 20 ppm with titration based on response. Methemoglobin monitoring is essential during iNO therapy as nitric oxide oxidizes hemoglobin to methemoglobin.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 15,
        questionText:
          'An obese patient (BMI 48 kg/m2) in the ICU requires arterial blood gas sampling. The respiratory therapist has difficulty palpating the radial artery. Which alternative approach is most appropriate?',
        choices: {
          A: 'Ultrasound-guided arterial puncture or arterial line placement to improve first-attempt success and reduce complications',
          B: 'Capillary blood gas from the earlobe as an equivalent substitute',
          C: 'Venous blood gas with mathematical correction factors to estimate arterial values',
          D: 'Pulse oximetry alone as a substitute for arterial blood gas analysis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ultrasound-guided arterial access is recommended when anatomic landmarks are difficult to identify, as is common in obese patients. Ultrasound guidance improves first-attempt success rates, reduces the number of attempts, and decreases complications such as hematoma formation and inadvertent venous puncture.',
        explanationWrong:
          'Capillary blood gases are less accurate for PaO2 assessment and are not equivalent to arterial samples, particularly in critically ill patients. Venous blood gas correction factors are unreliable for accurately predicting arterial PaO2 and pH in all clinical situations. Pulse oximetry alone cannot provide information about PaCO2, pH, or base excess.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 16,
        questionText:
          'A patient with a C6 complete spinal cord injury sustained 3 weeks ago develops autonomic dysreflexia during tracheal suctioning. The patient presents with a blood pressure of 210/120 mmHg, severe headache, facial flushing, and bradycardia. What is the most appropriate immediate intervention?',
        choices: {
          A: 'Administer atropine for the bradycardia',
          B: 'Continue suctioning to remove the stimulus quickly',
          C: 'Immediately stop the noxious stimulus by ceasing suctioning, sit the patient upright, loosen restrictive clothing, and treat with a rapid-acting antihypertensive if blood pressure remains elevated',
          D: 'Administer a sedative to reduce the patient\'s distress',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Autonomic dysreflexia is a medical emergency in patients with spinal cord injury at T6 or above. The immediate priority is to identify and remove the noxious stimulus (in this case, suctioning). Sitting the patient upright uses orthostatic mechanisms to lower blood pressure. If hypertension persists after removing the stimulus, rapid-acting antihypertensives such as nifedipine or nitropaste should be administered.',
        explanationWrong:
          'Atropine for bradycardia is not the priority; the bradycardia is a compensatory response that will resolve when blood pressure normalizes. Continuing suctioning perpetuates the noxious stimulus and worsens the crisis. Sedation does not address the underlying pathophysiology and delays treatment of the dangerous hypertension.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 17,
        questionText:
          'A post-cardiac arrest patient has completed targeted temperature management and rewarming. Neurological prognostication is being considered. According to current guidelines, when is the earliest appropriate time to perform prognostic assessment after cardiac arrest?',
        choices: {
          A: 'Immediately after return of spontaneous circulation',
          B: 'During the hypothermia phase of TTM',
          C: 'Within the first 24 hours of ICU admission',
          D: 'At least 72 hours after return to normothermia, using a multimodal approach incorporating clinical examination, electrophysiology, biomarkers, and neuroimaging',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current guidelines recommend waiting at least 72 hours after return to normothermia before performing prognostic assessment. This delay accounts for the confounding effects of sedation, neuromuscular blockade, and hypothermia on neurological examination. A multimodal approach using multiple independent predictors improves accuracy and reduces the risk of a falsely pessimistic prognosis.',
        explanationWrong:
          'Prognostication immediately after ROSC is unreliable as neurological examination is confounded by post-arrest metabolic derangements. During hypothermia, sedation and metabolic effects make clinical assessment unreliable. Within 24 hours of admission is too early and residual drug effects may mimic poor neurological function.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 18,
        questionText:
          'Which blood product carries the highest risk for causing TRALI?',
        choices: {
          A: 'Plasma-rich products such as fresh frozen plasma and platelets, particularly from multiparous female donors who are more likely to harbor anti-HLA antibodies',
          B: 'Washed packed red blood cells',
          C: 'Leukoreduced packed red blood cells from male donors',
          D: 'Cryoprecipitate',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Plasma-rich products (FFP, platelets, whole blood) carry the highest risk for TRALI because they contain the largest volume of donor plasma, which may harbor anti-HLA or anti-neutrophil antibodies. Multiparous female donors have the highest antibody prevalence due to fetal antigen exposure during pregnancy, which is why TRALI mitigation strategies include preferential use of male-donor plasma.',
        explanationWrong:
          'Washed packed red blood cells have most plasma removed, significantly reducing TRALI risk. Leukoreduced red cells from male donors carry the lowest risk profile. Cryoprecipitate contains relatively small plasma volume compared to FFP and carries lower risk.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 19,
        questionText:
          'A patient with severe acute pancreatitis has been in the ICU for 5 days. Serial intra-abdominal pressure monitoring shows a progressive rise from 12 to 22 mmHg over 48 hours. Urine output has decreased to 15 mL/hr despite adequate fluid resuscitation. According to the World Society of Abdominal Compartment Syndrome (WSACS) guidelines, what grade of intra-abdominal hypertension is present, and what is the recommended management?',
        choices: {
          A: 'Grade I IAH; reassess in 12 hours',
          B: 'Grade II IAH; no intervention needed',
          C: 'Grade III IAH (21-25 mmHg) with evidence of organ dysfunction warranting aggressive medical management and consideration for surgical decompression if medical measures fail',
          D: 'Grade IV IAH; immediate laparotomy without attempting medical management',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An intra-abdominal pressure of 22 mmHg falls within grade III IAH (21-25 mmHg). With declining urine output indicating renal impairment, there is evidence of organ dysfunction. WSACS guidelines recommend aggressive medical management (neuromuscular blockade, body positioning, gastrointestinal decompression, diuresis/ultrafiltration) and preparation for surgical decompression if medical measures do not improve organ function.',
        explanationWrong:
          'Grade I (12-15 mmHg) does not match a pressure of 22 mmHg. Grade II (16-20 mmHg) is also below this pressure reading. Grade IV is defined as IAP greater than 25 mmHg; while urgent intervention may be needed, medical management should still be attempted first unless the patient is in extremis.',
        topic: 'Abdominal Compartment Syndrome',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 20,
        questionText:
          'A hospital is comparing the performance of its rapid response system (RRS) to national benchmarks. Which metric is considered the most important outcome measure for evaluating RRS effectiveness?',
        choices: {
          A: 'Total number of MET activations per 1,000 admissions',
          B: 'Rate of unexpected cardiac arrests outside the ICU and overall hospital mortality as combined outcome metrics',
          C: 'Average response time of the MET team',
          D: 'Percentage of MET calls resulting in ICU admission',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The primary outcome measures for RRS effectiveness are the rate of unexpected cardiac arrests (and deaths) outside the ICU and overall hospital mortality. A well-functioning RRS should identify and intervene before deterioration progresses to cardiac arrest. Reduction in unexpected arrests is the strongest indicator of system efficacy.',
        explanationWrong:
          'Total MET activations reflect system utilization but not effectiveness; high activation rates may indicate either good detection or high acuity. Response time is a process measure, not an outcome measure. ICU admission rate reflects disposition decisions but does not directly measure whether the RRS prevents adverse outcomes.',
        topic: 'Rapid Response and Early Warning Systems',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 17 seeded (20 questions, isFree: false)')

  // ─── EXAM 18 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q5,Q11,Q16,Q20) B=5(Q1,Q7,Q14,Q17,Q19) C=5(Q4,Q8,Q10,Q13,Q18) D=5(Q2,Q6,Q9,Q12,Q15)
  const exam18 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 18',
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
          'A patient who underwent tracheostomy 5 days ago is accidentally decannulated during a position change. The stoma tract is not yet mature. What is the most appropriate immediate action?',
        choices: {
          A: 'Establish orotracheal intubation as the primary airway while covering the stoma site, then reassess the tracheostomy under controlled conditions',
          B: 'Reinsert the tracheostomy tube blindly through the stoma',
          C: 'Insert a bougie through the stoma and railroad a new tracheostomy tube',
          D: 'Apply bag-valve-mask ventilation over the stoma',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In an immature tracheostomy stoma (typically less than 7 to 10 days old), the tract may not be well-formed, and blind reinsertion carries a high risk of creating a false passage into the pretracheal space. The safest approach is to secure the airway from above via orotracheal intubation while occluding the stoma. The tracheostomy can then be replaced under controlled conditions, ideally with bronchoscopic guidance.',
        explanationWrong:
          'Blind reinsertion through an immature stoma risks creating a false passage with potentially fatal consequences including subcutaneous emphysema, pneumomediastinum, or loss of the airway. Bougie insertion through an immature stoma carries similar false passage risks. Bag-valve-mask ventilation over the stoma is ineffective due to air leak through the upper airway and poorly formed stoma.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 2,
        questionText:
          'Which pharmacologic agent used for ICU sedation has been associated with the lowest incidence of delirium compared to other commonly used sedatives?',
        choices: {
          A: 'Midazolam',
          B: 'Propofol',
          C: 'Lorazepam',
          D: 'Dexmedetomidine',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Dexmedetomidine, an alpha-2 adrenergic agonist, has been associated with lower rates of delirium compared to benzodiazepines and propofol in multiple randomized controlled trials. It provides sedation without significant respiratory depression and allows patients to remain arousable, which may contribute to its favorable delirium profile.',
        explanationWrong:
          'Midazolam and lorazepam are benzodiazepines that are independent risk factors for ICU delirium due to their GABAergic mechanism. Propofol has a lower delirium risk than benzodiazepines but higher than dexmedetomidine in comparative studies.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 3,
        questionText:
          'A mechanically ventilated patient meets VAC criteria on day 7 of ventilation. On reviewing the case, the quality team notes that the increase in PEEP from 5 to 10 cmH2O was made to treat new bilateral opacities and worsening oxygenation. Which clinical condition should NOT be counted as a true VAE for quality benchmarking purposes?',
        choices: {
          A: 'A VAC that occurs following a planned increase in PEEP for a scheduled recruitment maneuver that is part of the standard ventilator protocol should still be reported, as the CDC VAE algorithm does not distinguish between planned and unplanned increases in ventilator settings',
          B: 'VAC occurring after cardiac surgery when PEEP is increased for atelectasis',
          C: 'VAC due to ARDS from hospital-acquired pneumonia',
          D: 'VAC from pulmonary edema secondary to fluid overload',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The CDC VAE surveillance algorithm is objective and does not distinguish between planned and unplanned ventilator setting changes. Any sustained increase in PEEP or FiO2 meeting the defined thresholds is counted as a VAC regardless of clinical context. However, quality teams should recognize that protocol-driven changes (such as recruitment maneuvers) may inflate VAE rates and should be analyzed separately for internal quality improvement purposes.',
        explanationWrong:
          'All the other options (post-cardiac surgery atelectasis, hospital-acquired pneumonia causing ARDS, and fluid overload causing pulmonary edema) represent genuine clinical deterioration that appropriately triggers VAE surveillance criteria. These conditions reflect actual ventilator-associated complications that the surveillance system is designed to capture.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 4,
        questionText:
          'A patient with acute right heart failure and severe pulmonary hypertension is being mechanically ventilated. Which ventilator strategy minimizes the impact on right ventricular afterload?',
        choices: {
          A: 'High PEEP (15 cmH2O) with low tidal volume (4 mL/kg IBW)',
          B: 'Pressure-controlled ventilation with an inspiratory pressure of 35 cmH2O',
          C: 'Moderate tidal volumes (6-8 mL/kg IBW) with the lowest PEEP that maintains adequate oxygenation, avoiding hyperinflation, hypercapnia, and hypoxemia',
          D: 'Permissive hypercapnia strategy with a target PaCO2 of 60-70 mmHg',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In right heart failure, ventilator management must balance avoiding overdistension (which compresses alveolar capillaries and increases PVR) with maintaining adequate oxygenation and normocapnia. Moderate tidal volumes with the lowest effective PEEP minimize mechanical effects on PVR while preventing hypoxic pulmonary vasoconstriction and hypercapnia-induced pulmonary vasoconstriction.',
        explanationWrong:
          'High PEEP can overdistend alveoli, compress pulmonary capillaries, and increase right ventricular afterload. Very low tidal volumes may lead to atelectasis and hypercapnia, both of which increase PVR. High inspiratory pressures cause hyperinflation. Permissive hypercapnia causes pulmonary vasoconstriction, which worsens right heart failure.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 5,
        questionText:
          'A morbidly obese patient (BMI 60 kg/m2) requires CT imaging in the radiology department. The respiratory therapist is concerned about transport risks. Which physiologic factor makes transport of critically ill obese patients particularly dangerous?',
        choices: {
          A: 'Dramatically reduced functional residual capacity near or below closing capacity in the supine position, causing rapid and profound oxygen desaturation during any interruption of positive pressure ventilation or supplemental oxygen',
          B: 'Increased anatomic dead space proportional to body weight',
          C: 'Reduced cardiac output due to adipose tissue compression of the heart',
          D: 'Decreased oxygen consumption relative to lean body mass',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Obese patients have significantly reduced FRC, often falling below closing capacity when supine. This creates intrapulmonary shunting and minimal oxygen reserves. Even brief interruptions in positive pressure ventilation or supplemental oxygen during transport can cause rapid, profound desaturation that may be difficult to reverse, making transport a high-risk event.',
        explanationWrong:
          'Anatomic dead space does not increase proportionally with body weight. Cardiac output in obese patients is typically increased, not decreased, due to the metabolic demands of excess adipose tissue. Oxygen consumption is increased, not decreased, in obesity.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 6,
        questionText:
          'A patient with a C4 complete spinal cord injury has been ventilator-dependent for 6 weeks. The team is considering long-term ventilator strategies. Which approach provides the most natural speech pattern for ventilator-dependent spinal cord injury patients with intact laryngeal function?',
        choices: {
          A: 'Electrolarynx device',
          B: 'Leak speech with an uncuffed tracheostomy during spontaneous breathing trials',
          C: 'Text-to-speech communication devices only',
          D: 'A cuffless tracheostomy tube combined with a one-way speaking valve (Passy-Muir) and ventilator adjustments to compensate for leak, allowing speech during exhalation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A cuffless tracheostomy or deflated cuff with a Passy-Muir valve (one-way speaking valve) allows air to pass through the vocal cords during exhalation, producing the most natural speech pattern. The ventilator must be adjusted to compensate for the air leak around the deflated cuff, typically by increasing tidal volume or using a leak compensation mode.',
        explanationWrong:
          'An electrolarynx produces mechanical-sounding speech and is used when vocal cord function is impaired. Leak speech during spontaneous breathing is not feasible for a C4 complete injury patient who is ventilator-dependent. Text-to-speech devices should be considered as adjuncts but do not provide natural vocalization.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 7,
        questionText:
          'During targeted temperature management for a post-cardiac arrest patient, the patient develops shivering. Shivering is detrimental because it increases metabolic demand and interferes with temperature control. What is the recommended stepwise approach to managing shivering during TTM?',
        choices: {
          A: 'Immediate neuromuscular blockade as the first-line intervention',
          B: 'A stepwise approach beginning with skin counterwarming, then adding buspirone and magnesium supplementation, followed by sedation escalation with meperidine or dexmedetomidine, and reserving neuromuscular blockade as a last resort',
          C: 'Increasing the target temperature to 36 degrees C to eliminate shivering',
          D: 'Discontinuing TTM if shivering cannot be controlled with acetaminophen alone',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Columbia Anti-Shivering Protocol and similar guidelines recommend a stepwise approach: first, apply skin counterwarming (warming the hands and feet peripherally while cooling the core); second, add pharmacologic agents such as buspirone (5HT1A agonist) and magnesium (raises the shivering threshold); third, escalate to meperidine or dexmedetomidine; and finally, use neuromuscular blockade only as a last resort due to its risks.',
        explanationWrong:
          'Immediate neuromuscular blockade is excessive and masks seizure activity, which is an important concern in post-arrest patients. Simply raising the target temperature may reduce neuroprotective benefit. Discontinuing TTM for shivering alone is not indicated, as multiple effective anti-shivering strategies exist.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 8,
        questionText:
          'A blood bank implements TRALI risk mitigation strategies. Which measure has been most effective in reducing the incidence of TRALI nationally?',
        choices: {
          A: 'Universal leukoreduction of all blood products',
          B: 'Irradiation of all blood products',
          C: 'Preferential use of male-only donor plasma and diversion of plasma from previously pregnant female donors away from transfusion products',
          D: 'Pre-transfusion crossmatch testing for anti-HLA antibodies',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The single most effective TRALI risk mitigation strategy has been the shift to male-predominant plasma collection. Multiparous female donors have the highest prevalence of anti-HLA antibodies from fetal antigen exposure. Diverting female donor plasma away from direct transfusion products (to fractionation for derivative manufacturing) has resulted in a significant national decline in TRALI incidence.',
        explanationWrong:
          'Leukoreduction reduces febrile non-hemolytic reactions and CMV transmission but does not remove the antibodies responsible for TRALI. Irradiation prevents transfusion-associated graft-versus-host disease, not TRALI. Universal pre-transfusion HLA antibody crossmatching is logistically impractical and not routinely performed.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 9,
        questionText:
          'A patient with severe acute pancreatitis undergoes contrast-enhanced CT on hospital day 4 that reveals 60% pancreatic necrosis. On day 12, the patient develops fever, rising white blood cell count, and hemodynamic instability. A CT-guided fine needle aspiration of the necrotic collection is performed. What finding would indicate the need for intervention?',
        choices: {
          A: 'Sterile necrosis with stable vital signs',
          B: 'Peripancreatic fat stranding without fluid collection',
          C: 'Pseudocyst formation with thin walls',
          D: 'Infected pancreatic necrosis confirmed by Gram stain and culture showing bacteria in the aspirate',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Infected pancreatic necrosis confirmed by FNA with positive Gram stain and culture is an indication for intervention. Current guidelines favor a step-up approach beginning with percutaneous drainage, escalating to minimally invasive surgical necrosectomy (video-assisted retroperitoneal debridement or endoscopic transgastric necrosectomy) if drainage alone is insufficient, and reserving open surgical necrosectomy as a last resort.',
        explanationWrong:
          'Sterile necrosis, even when extensive, is generally managed conservatively without intervention. Peripancreatic fat stranding is a common early finding that does not independently indicate the need for invasive intervention. Pseudocysts with thin walls are typically observed and only intervened upon if symptomatic, infected, or causing obstruction.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 10,
        questionText:
          'A hospital analyzes its rapid response system data and discovers that 40% of patients who experienced unexpected cardiac arrest had documented vital sign abnormalities meeting MET activation criteria in the 6 hours before the arrest, but the MET was never called. This represents a failure of which RRS component?',
        choices: {
          A: 'The efferent limb (response team deployment)',
          B: 'The quality improvement limb',
          C: 'The afferent limb (detection and triggering)',
          D: 'The administrative limb',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The afferent limb of the RRS encompasses detection of clinical deterioration and triggering of the response. When vital sign abnormalities meeting activation criteria are documented but the MET is not called, this represents afferent limb failure at the triggering step. Common causes include lack of awareness of calling criteria, hierarchical barriers, and fear of criticism for calling the team.',
        explanationWrong:
          'The efferent limb refers to the response team arriving and providing care after activation. The quality improvement limb involves data collection and analysis of RRS performance. The administrative limb provides governance and resource support. None of these are responsible for the failure to activate the team when criteria are met.',
        topic: 'Rapid Response and Early Warning Systems',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 11,
        questionText:
          'A 65-year-old patient has had a tracheostomy in place for 3 weeks following prolonged intubation for ARDS. The patient is now being considered for downsizing the tracheostomy tube. What is the primary benefit of downsizing the tracheostomy tube in a patient who is breathing spontaneously?',
        choices: {
          A: 'Reduction of airway resistance through the upper airway by allowing more airflow around the smaller tube, facilitating assessment of upper airway patency and improving comfort during the weaning and decannulation process',
          B: 'Reduction of tracheal secretion production',
          C: 'Elimination of the need for humidification',
          D: 'Prevention of granuloma formation at the stoma site',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Downsizing the tracheostomy tube increases the space between the outer cannula and the tracheal wall, allowing more airflow through the upper airway. This facilitates assessment of upper airway patency, enables more effective use of speaking valves, improves patient comfort, and serves as a step toward decannulation by progressively increasing upper airway breathing.',
        explanationWrong:
          'Downsizing does not reduce secretion production; secretions are primarily driven by mucosal irritation and pulmonary pathology. Humidification remains necessary regardless of tube size. Granuloma formation is related to tube movement and mucosal trauma, not tube size per se.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 12,
        questionText:
          'The PADIS (Pain, Agitation/sedation, Delirium, Immobility, Sleep disruption) guidelines recommend a specific assessment frequency for delirium monitoring in ICU patients. What is the minimum recommended assessment frequency?',
        choices: {
          A: 'Once upon ICU admission only',
          B: 'Every 4 hours',
          C: 'Every 24 hours',
          D: 'At least once per nursing shift (typically every 8 to 12 hours) using a validated tool such as the CAM-ICU or ICDSC',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The PADIS guidelines recommend routine delirium assessment at least once per nursing shift using a validated screening tool such as the CAM-ICU or ICDSC. This frequency allows for early detection of delirium, which is essential for timely intervention. More frequent assessments may be appropriate in high-risk patients or those with fluctuating mental status.',
        explanationWrong:
          'Assessment only upon admission misses the development of delirium during the ICU stay, as delirium can develop at any time. Every 4 hours is more frequent than the minimum recommendation but may be appropriate in high-risk patients. Every 24 hours is too infrequent for reliable delirium detection given its fluctuating nature.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 13,
        questionText:
          'In the CDC VAE surveillance framework, which finding elevates an IVAC to a possible ventilator-associated pneumonia (PVAP)?',
        choices: {
          A: 'Blood culture positivity without respiratory source',
          B: 'Elevated procalcitonin level alone',
          C: 'Purulent respiratory secretions (defined as more than 25 neutrophils and fewer than 10 squamous epithelial cells per low-power field) OR a positive quantitative or semi-quantitative respiratory culture',
          D: 'Presence of a new pleural effusion on imaging',
        },
        correctChoice: 'C',
        explanationCorrect:
          'PVAP is identified when a patient with IVAC additionally demonstrates either purulent respiratory secretions (defined as more than 25 neutrophils and fewer than 10 squamous epithelial cells per low-power field) or a positive respiratory culture meeting specified quantitative thresholds (BAL at 10^4 CFU/mL or greater, protected specimen brush at 10^3 or greater, or positive semi-quantitative endotracheal aspirate culture).',
        explanationWrong:
          'Blood culture positivity without a respiratory source does not meet PVAP criteria. Procalcitonin elevation is not part of the CDC VAE definition. Pleural effusion is not a criterion in the VAE framework.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 14,
        questionText:
          'A patient with severe right heart failure and pulmonary hypertension is hypoxemic. The intensivist asks why the patient is hypoxemic when the lung parenchyma appears clear on chest radiograph. What is the primary mechanism of hypoxemia in isolated right heart failure?',
        choices: {
          A: 'Diffusion impairment from alveolar membrane thickening',
          B: 'Low mixed venous oxygen saturation due to reduced cardiac output, which amplifies the effect of any degree of ventilation-perfusion mismatch or intracardiac shunting',
          C: 'Hypoventilation from diaphragmatic weakness',
          D: 'Increased anatomic dead space ventilation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In right heart failure with reduced cardiac output, oxygen extraction by peripheral tissues increases, resulting in low mixed venous oxygen saturation (SvO2). When this desaturated blood reaches the pulmonary capillaries, any degree of V/Q mismatch or intracardiac shunting (through a patent foramen ovale, which may open with elevated right atrial pressures) has an amplified effect on arterial oxygenation.',
        explanationWrong:
          'Diffusion impairment would typically be seen with parenchymal disease, which is not present here. Hypoventilation from diaphragmatic weakness is not a feature of right heart failure. Increased dead space ventilation affects CO2 elimination more than oxygenation and is not the primary mechanism in this setting.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 15,
        questionText:
          'An obese patient (BMI 50 kg/m2) in the ICU requires renal replacement therapy. The nephrologist recommends continuous venovenous hemofiltration (CVVH). Which dosing consideration is most important for drug clearance during CRRT in obese patients?',
        choices: {
          A: 'Drug dosing should be based on actual body weight for all medications',
          B: 'CRRT dose should be reduced due to decreased drug clearance in obesity',
          C: 'Standard CRRT doses are always sufficient regardless of body habitus',
          D: 'CRRT effluent dosing should be prescribed based on adjusted body weight, and drug dosing must account for the altered volume of distribution of hydrophilic and lipophilic drugs in obesity, often requiring therapeutic drug monitoring',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In obese patients receiving CRRT, effluent dosing should consider adjusted body weight to avoid under-dosing. Drug dosing is complex because obesity alters volumes of distribution differently for hydrophilic versus lipophilic drugs. Hydrophilic drugs may have proportionally larger volumes of distribution, while lipophilic drugs may distribute extensively into adipose tissue. Therapeutic drug monitoring is essential to ensure adequate dosing.',
        explanationWrong:
          'Actual body weight overestimates the dose needed for many drugs. CRRT clearance may actually need to be higher, not lower, in obese patients. Standard doses may be insufficient for hydrophilic drugs with enlarged volumes of distribution in obese patients.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 16,
        questionText:
          'A patient with a high cervical spinal cord injury (C2) has been on chronic mechanical ventilation via tracheostomy for 2 years and is being considered for glossopharyngeal breathing (GPB) training as a backup ventilation method. How does glossopharyngeal breathing work?',
        choices: {
          A: 'The patient breathes through an external negative pressure device',
          B: 'The patient uses the tongue, pharyngeal muscles, and larynx to gulp small boluses of air into the lungs in a piston-like fashion, stacking sequential gulps to achieve a functional tidal volume independent of diaphragm function',
          C: 'The patient uses accessory neck muscles to generate negative intrathoracic pressure',
          D: 'The patient activates the diaphragm through neural plasticity after injury',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Glossopharyngeal breathing (frog breathing) is a technique in which the patient uses the tongue, pharynx, and larynx as a positive-pressure pump. The glottis acts as a valve while the tongue pistons air into the lungs in sequential gulps (typically 6 to 9 per breath). Each gulp delivers 40 to 200 mL, and stacking multiple gulps achieves a functional tidal volume. This technique can provide ventilator-free time and serves as an emergency backup if mechanical ventilation fails.',
        explanationWrong:
          'External negative pressure devices (such as cuirass ventilators) are a separate modality. Accessory neck muscle breathing is limited and does not describe GPB mechanics. In complete C2 injuries, diaphragm function does not return through neural plasticity.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 17,
        questionText:
          'A post-cardiac arrest patient who underwent TTM at 33 degrees C for 24 hours is now normothermic. On day 3 after ROSC, an EEG shows continuous generalized periodic discharges. Somatosensory evoked potentials show bilaterally absent N20 cortical responses. Serum neuron-specific enolase (NSE) is 85 mcg/L (threshold for poor outcome is greater than 33 mcg/L at 48-72 hours). Based on multimodal prognostication, what is the most accurate prognostic statement?',
        choices: {
          A: 'A single elevated NSE value is sufficient to declare a poor prognosis',
          B: 'The combination of bilaterally absent N20 responses on SSEP with highly malignant EEG patterns and markedly elevated NSE provides the highest specificity for predicting poor neurological outcome when assessed in combination at the appropriate time point',
          C: 'EEG periodic discharges always indicate non-convulsive status epilepticus requiring aggressive treatment',
          D: 'The patient should be assessed further with brain MRI only if the family requests it',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Multimodal prognostication using two or more concordant predictors of poor outcome provides the highest specificity and reduces the risk of self-fulfilling prophecy. Bilaterally absent N20 on SSEP is one of the most robust predictors (near 0% false positive rate). When combined with highly malignant EEG patterns and markedly elevated NSE, the prediction of poor neurological outcome is highly reliable.',
        explanationWrong:
          'A single biomarker value should never be used in isolation for prognostication due to potential confounders. Periodic discharges may represent various pathologies and do not always indicate status epilepticus. Brain MRI with diffusion-weighted imaging is an important component of multimodal prognostication and should be obtained regardless of family request.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 18,
        questionText:
          'A patient develops acute respiratory failure after receiving a platelet transfusion. The clinical team diagnoses TRALI. Which of the following is a key management difference between TRALI and ARDS from other causes?',
        choices: {
          A: 'TRALI requires immediate surgical intervention',
          B: 'TRALI is treated with high-dose corticosteroids as first-line therapy',
          C: 'TRALI is self-limiting in the majority of cases with resolution typically within 48 to 72 hours with supportive care, and the implicated blood product and all products from the same donor should be quarantined and the blood bank notified',
          D: 'TRALI requires specific antidote administration',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Unlike ARDS from other causes, TRALI is typically self-limiting with resolution within 48 to 72 hours when managed with standard supportive care (supplemental oxygen, mechanical ventilation if needed, hemodynamic support). A critical additional step is immediate notification of the blood bank so that remaining products from the implicated donor can be quarantined and the donor can be investigated for anti-HLA antibodies.',
        explanationWrong:
          'Surgical intervention plays no role in TRALI management. Corticosteroids have not been shown to improve outcomes in TRALI. There is no specific antidote for TRALI; management is entirely supportive.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 19,
        questionText:
          'A patient with severe gallstone pancreatitis develops walled-off pancreatic necrosis at 4 weeks. The collection is 12 cm with persistent symptoms of abdominal pain, gastric outlet obstruction, and low-grade fever. What is the preferred initial interventional approach according to the step-up approach?',
        choices: {
          A: 'Open surgical necrosectomy',
          B: 'Percutaneous catheter drainage or endoscopic transluminal drainage as the initial interventional step, with escalation to minimally invasive surgical necrosectomy only if drainage alone is insufficient',
          C: 'Total pancreatectomy',
          D: 'Observation without intervention for an additional 4 weeks',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The step-up approach, validated by the PANTER trial, begins with the least invasive intervention. For walled-off necrosis, this is percutaneous catheter drainage (with CT or ultrasound guidance) or endoscopic transluminal drainage (EUS-guided). If drainage alone does not resolve symptoms and infection, escalation to minimally invasive surgical necrosectomy (VARD or endoscopic necrosectomy) is the next step, with open surgery reserved as a last resort.',
        explanationWrong:
          'Open surgical necrosectomy carries higher morbidity and mortality and is reserved for failure of less invasive approaches. Total pancreatectomy is an extreme measure with lifelong consequences and is not indicated for necrosis management. Further observation is inappropriate given persistent symptoms and evidence of complications.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 20,
        questionText:
          'A hospital is designing its rapid response system and must decide on the composition of the medical emergency team. Which team composition has been associated with the most effective RRS outcomes?',
        choices: {
          A: 'A multidisciplinary team that includes at minimum a physician (or advanced practice provider) with critical care expertise, an ICU nurse, and a respiratory therapist, with defined roles and regular simulation-based training',
          B: 'A single senior nurse responding alone',
          C: 'The patient\'s primary attending physician only',
          D: 'A pharmacist and social worker team',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Effective MET teams are multidisciplinary, typically including a physician or advanced practice provider with critical care expertise, an ICU nurse, and a respiratory therapist. This composition ensures comprehensive assessment and intervention capability. Regular simulation-based training improves team dynamics, communication, and outcomes.',
        explanationWrong:
          'A single nurse responding alone lacks the authority and skills for definitive interventions such as intubation, central line placement, or medication titration. The primary attending may not be available immediately and may lack critical care expertise. A pharmacist and social worker team does not have the clinical assessment and procedural capabilities needed for acute resuscitation.',
        topic: 'Rapid Response and Early Warning Systems',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 18 seeded (20 questions, isFree: false)')

  // ─── EXAM 19 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q8,Q12,Q17,Q20) B=5(Q2,Q5,Q9,Q14,Q18) C=5(Q3,Q7,Q11,Q15,Q19) D=5(Q1,Q6,Q10,Q13,Q16)
  const exam19 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 19',
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
          'A 50-year-old patient who has had a tracheostomy for 6 weeks develops progressive difficulty passing a suction catheter. Flexible bronchoscopy through the tracheostomy reveals circumferential granulation tissue narrowing the tracheal lumen below the stoma by 50%. What is the most likely cause and appropriate management?',
        choices: {
          A: 'Tracheal stenosis from cuff over-inflation; emergent surgical resection is required',
          B: 'Tracheomalacia from prolonged intubation; administer continuous positive airway pressure',
          C: 'Foreign body aspiration; perform rigid bronchoscopy for removal',
          D: 'Granulation tissue formation at the distal tip of the tracheostomy tube; initial management includes downsizing the tube, ensuring proper tube positioning to reduce mechanical irritation, and consideration of bronchoscopic debridement or laser therapy if obstruction persists',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Granulation tissue formation is a common complication of tracheostomy, particularly at the tip of the tube where it contacts the tracheal wall. Mechanical irritation from tube movement and suctioning promotes granulation tissue growth. Initial management includes optimizing tube position, downsizing to reduce contact, and bronchoscopic debridement or laser therapy for significant obstruction.',
        explanationWrong:
          'While cuff-related tracheal stenosis is a concern, the bronchoscopic appearance of granulation tissue at the tube tip is distinct from circumferential fibrous stenosis. Emergent surgical resection is not the initial approach. Tracheomalacia presents with dynamic airway collapse, not granulation tissue. Foreign body aspiration would show a discrete object, not circumferential granulation tissue.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 2,
        questionText:
          'A 68-year-old patient in the ICU is being assessed for delirium risk factors. Which of the following is the most significant modifiable risk factor for ICU delirium?',
        choices: {
          A: 'Use of benzodiazepine-based sedation protocols',
          B: 'Patient age greater than 65 years',
          C: 'Severity of illness at ICU admission',
          D: 'Pre-existing dementia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'While age, illness severity, and pre-existing dementia are all risk factors for ICU delirium, they are non-modifiable. Benzodiazepine-based sedation is the most significant modifiable risk factor, with a dose-dependent relationship to delirium incidence. Switching to non-benzodiazepine sedation strategies (such as propofol or dexmedetomidine) significantly reduces delirium risk.',
        explanationWrong:
          'Age, illness severity, and pre-existing dementia are important predisposing factors but cannot be changed by clinical interventions. The question specifically asks about modifiable risk factors, making sedation choice the correct answer.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 3,
        questionText:
          'A respiratory therapist is asked to implement oral care as part of the VAP prevention bundle. Which oral care practice has the strongest evidence for reducing VAP incidence?',
        choices: {
          A: 'Normal saline mouth rinses every 2 hours',
          B: 'Hydrogen peroxide oral swabs every 12 hours',
          C: 'Chlorhexidine oral care (0.12% to 2% solution) applied at least twice daily, combined with regular tooth brushing and oropharyngeal suctioning',
          D: 'Povidone-iodine gargle every 6 hours',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Chlorhexidine-based oral care (0.12% to 2% concentration) applied at least twice daily has the strongest evidence for reducing VAP incidence. Chlorhexidine reduces the bacterial load in the oropharynx, which is the primary source of organisms that cause VAP through microaspiration past the endotracheal tube cuff. Combined with tooth brushing and oropharyngeal suctioning, this represents best practice.',
        explanationWrong:
          'Normal saline rinses provide mechanical cleaning but lack antimicrobial activity proven to reduce VAP rates. Hydrogen peroxide has some antimicrobial activity but less evidence supporting VAP reduction than chlorhexidine. Povidone-iodine oral care has limited evidence for VAP prevention and may cause mucosal irritation.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 4,
        questionText:
          'A patient with chronic thromboembolic pulmonary hypertension (CTEPH) is admitted to the ICU with decompensated right heart failure. The team is considering pulmonary endarterectomy (PEA). Which factor is essential in determining surgical candidacy for PEA?',
        choices: {
          A: 'Surgically accessible thromboembolic disease in the main, lobar, or segmental pulmonary arteries as determined by CT pulmonary angiography, conventional pulmonary angiography, or right heart catheterization with selective angiography',
          B: 'Patient age less than 50 years',
          C: 'Pulmonary vascular resistance less than 300 dynes/sec/cm5',
          D: 'Presence of concurrent left heart failure',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The critical determinant for PEA candidacy is the surgical accessibility of thromboembolic disease. PEA involves removal of organized thrombus from the pulmonary arterial intima and media. Disease in the main, lobar, and proximal segmental arteries is surgically accessible, while distal small vessel disease is not amenable to endarterectomy. Multimodality imaging is used to assess clot location and extent.',
        explanationWrong:
          'There is no strict age cutoff for PEA; physiologic fitness and disease characteristics are more important. Low PVR would actually make surgery less urgent. Concurrent left heart failure complicates management but does not automatically exclude PEA candidacy if the right heart failure is primarily from CTEPH.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 5,
        questionText:
          'A morbidly obese patient (BMI 62 kg/m2) in the ICU develops severe ARDS requiring prone positioning. What are the key considerations for prone positioning in morbidly obese patients?',
        choices: {
          A: 'Prone positioning is contraindicated in patients with BMI greater than 50 kg/m2',
          B: 'Prone positioning can be safely performed with adequate staffing (typically requiring more personnel than non-obese patients), attention to pressure point protection, close monitoring for facial and airway edema, and proper chest and pelvic support to allow abdominal contents to hang freely, which may actually improve respiratory mechanics',
          C: 'Standard prone positioning protocols require no modification for obese patients',
          D: 'Prone positioning should be limited to 4 hours due to increased risk of complications',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Prone positioning in morbidly obese patients is feasible and can be particularly beneficial. The key is additional staffing for safe turning, meticulous pressure point protection (face, chest, pelvis, knees), and monitoring for facial and airway edema. Proper chest and pelvic bolster placement allows the abdomen to hang freely, which paradoxically may improve respiratory mechanics by reducing diaphragmatic compression that is worse in the supine position.',
        explanationWrong:
          'There is no absolute BMI contraindication for prone positioning. Standard protocols do require significant modification for obese patients to ensure safety. There is no evidence supporting a 4-hour time limit; standard prone sessions of 12 to 16 hours apply to obese patients as well.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 6,
        questionText:
          'A patient with a C5-C6 incomplete spinal cord injury (ASIA C) is in the ICU on day 7 post-injury. The patient has weak but present diaphragm function. Vital capacity is 12 mL/kg and declining. Peak cough flow is 120 L/min (threshold for effective cough is 160 L/min). What respiratory intervention is most critical at this time?',
        choices: {
          A: 'Endotracheal intubation and full mechanical ventilatory support',
          B: 'Observation with repeat pulmonary function testing in 48 hours',
          C: 'Chest physiotherapy only',
          D: 'Implementation of mechanical insufflation-exsufflation (cough assist device) for secretion clearance, with non-invasive positive pressure ventilation for ventilatory support and close monitoring for further decline that would necessitate intubation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'With declining vital capacity (12 mL/kg) and inadequate peak cough flow (120 L/min, below the 160 L/min threshold), this patient needs both ventilatory support and cough augmentation. Mechanical insufflation-exsufflation (MI-E) provides effective secretion clearance when voluntary cough is inadequate. NIV can provide ventilatory support while avoiding intubation if the patient tolerates it. Close monitoring is essential as further decline may require intubation.',
        explanationWrong:
          'Immediate intubation may be premature in an incomplete injury with some preserved function; NIV may bridge the patient through the acute period. Observation alone risks further deterioration with potential respiratory arrest. Chest physiotherapy alone is insufficient when peak cough flow is below the effective threshold.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 7,
        questionText:
          'A post-cardiac arrest patient maintained at 33 degrees C develops polyuria during TTM. Which mechanism is primarily responsible for cold-induced diuresis during therapeutic hypothermia?',
        choices: {
          A: 'Diabetes insipidus from hypothermia-induced pituitary dysfunction',
          B: 'Renal tubular acidosis',
          C: 'Peripheral vasoconstriction causing central redistribution of blood volume, which increases renal perfusion pressure and suppresses ADH secretion, combined with impaired renal tubular sodium reabsorption at lower temperatures',
          D: 'Osmotic diuresis from hypothermia-induced hyperglycemia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cold-induced diuresis during therapeutic hypothermia results from peripheral vasoconstriction, which redistributes blood centrally, increasing renal perfusion pressure and triggering a pressure natriuresis. Additionally, hypothermia directly impairs renal tubular sodium reabsorption and suppresses ADH secretion. This polyuria can lead to significant volume depletion and electrolyte disturbances if not managed with appropriate fluid replacement.',
        explanationWrong:
          'Diabetes insipidus from pituitary dysfunction is not a feature of therapeutic hypothermia. Renal tubular acidosis does not cause the polyuria seen during TTM. While hypothermia can cause hyperglycemia through insulin resistance, this is not the primary mechanism of cold-induced diuresis.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 8,
        questionText:
          'A patient receives a single unit of packed red blood cells and develops acute respiratory distress 4 hours later. The patient was previously euvolemic with a BNP of 60 pg/mL. Post-transfusion chest radiograph shows bilateral infiltrates and the BNP is now 75 pg/mL. PaO2/FiO2 ratio is 180. Anti-HLA antibodies are detected in the donor unit. Which management step is most important in addition to supportive care?',
        choices: {
          A: 'Immediately report the transfusion reaction to the blood bank so the donor can be investigated, tested for anti-HLA and anti-neutrophil antibodies, and potentially deferred from future donation to prevent additional TRALI cases',
          B: 'Administer diuretics aggressively',
          C: 'Begin therapeutic plasma exchange',
          D: 'Transfuse additional packed red blood cells to improve oxygen delivery',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In confirmed or suspected TRALI, immediate blood bank notification is crucial. The implicated donor must be investigated for anti-HLA and anti-neutrophil antibodies, and remaining products from that donor must be quarantined. If antibodies are confirmed, the donor may be permanently deferred from donation. This step prevents future TRALI cases and is as important as the individual patient management.',
        explanationWrong:
          'Aggressive diuresis is appropriate for TACO, not TRALI, where the pulmonary edema is non-cardiogenic. Therapeutic plasma exchange has no established role in TRALI management. Additional transfusion from other donors may be needed if anemia is severe, but the question asks about the most important step, which is blood bank notification.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 9,
        questionText:
          'A 55-year-old patient with severe acute biliary pancreatitis is admitted to the ICU. Fluid resuscitation is being initiated. What is the current evidence-based recommendation for early fluid resuscitation in severe acute pancreatitis?',
        choices: {
          A: 'Restrict fluids to less than 1 L in the first 24 hours to prevent third-spacing',
          B: 'Goal-directed fluid therapy using lactated Ringer solution at a rate of 1.5 mL/kg/hr with regular reassessment of hemodynamic parameters, urine output, and hemoconcentration, titrating to clinical response rather than a fixed-volume protocol',
          C: 'Aggressive normal saline at 20 mL/kg/hr for the first 12 hours',
          D: 'Colloid-based resuscitation with albumin exclusively',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current evidence supports goal-directed fluid therapy with lactated Ringer solution (preferred over normal saline due to its anti-inflammatory properties and lower risk of hyperchloremic acidosis). A moderate initial rate of approximately 1.5 mL/kg/hr with regular reassessment of clinical parameters avoids both under-resuscitation and the harms of excessive fluid administration, which include worsening pancreatic necrosis, abdominal compartment syndrome, and pulmonary edema.',
        explanationWrong:
          'Fluid restriction in the first 24 hours risks inadequate perfusion and worsening organ dysfunction. Aggressive crystalloid at 20 mL/kg/hr is excessive and has been associated with worse outcomes including increased ARDS, abdominal compartment syndrome, and mortality. Colloid-only resuscitation with albumin is not supported as a first-line strategy.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 10,
        questionText:
          'A rapid response team is activated for a ward patient with a respiratory rate of 32, oxygen saturation of 86% on room air, heart rate of 125, and a systolic blood pressure of 85 mmHg. Upon arrival, the RRT finds the patient diaphoretic and confused. After initial assessment, what is the appropriate disposition for this patient?',
        choices: {
          A: 'Return the patient to ward care with increased monitoring frequency',
          B: 'Transfer to a step-down unit with telemetry monitoring',
          C: 'Contact the primary team and await their assessment before taking action',
          D: 'Initiate immediate resuscitation (airway management, supplemental oxygen, IV access, fluid bolus) and transfer to the ICU, as this patient demonstrates multi-system instability consistent with an impending cardiopulmonary arrest',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This patient has multi-system instability: tachypnea, hypoxemia, tachycardia, hypotension, diaphoresis, and altered mental status. These findings indicate impending cardiopulmonary collapse. Immediate resuscitation and ICU transfer are required. The RRT should initiate stabilizing interventions at the bedside while arranging transfer rather than waiting for additional consultations.',
        explanationWrong:
          'Ward care even with increased monitoring is wholly inadequate for this degree of physiologic derangement. A step-down unit does not provide the level of monitoring and intervention this patient requires. Waiting for the primary team assessment introduces dangerous delays in a patient who requires immediate resuscitation.',
        topic: 'Rapid Response and Early Warning Systems',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 11,
        questionText:
          'A patient with a cuffed tracheostomy tube is transitioned to a speaking valve. Before placing the speaking valve, the respiratory therapist must perform which essential step?',
        choices: {
          A: 'Increase the cuff pressure to prevent air leak',
          B: 'Switch to a larger tracheostomy tube',
          C: 'Completely deflate the tracheostomy cuff to allow exhaled air to pass around the tube and through the vocal cords, and verify that the patient can exhale around the tube without distress',
          D: 'Increase the supplemental oxygen flow rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A speaking valve (such as Passy-Muir) is a one-way valve that allows air in through the tracheostomy during inspiration but closes during exhalation, directing air upward through the vocal cords and out the mouth and nose. The cuff MUST be completely deflated before placing the valve; otherwise, the patient cannot exhale (since the valve blocks expiratory flow through the tube and the inflated cuff blocks flow around it), creating a life-threatening total airway obstruction.',
        explanationWrong:
          'Increasing cuff pressure with a speaking valve in place would cause complete airway obstruction and is potentially fatal. A larger tube would further reduce the space for airflow around the tube, making exhalation more difficult. Increasing oxygen flow rate does not address the fundamental requirement of cuff deflation for safe speaking valve use.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 12,
        questionText:
          'A 73-year-old patient with resolved ICU delirium is being assessed for long-term cognitive outcomes. Which long-term cognitive consequence has been most strongly associated with ICU delirium in survivors?',
        choices: {
          A: 'Long-term cognitive impairment similar in pattern to traumatic brain injury or early Alzheimer disease, with deficits in executive function, memory, and attention that may persist for months to years after hospital discharge, with duration of delirium being an independent predictor of severity',
          B: 'Transient memory deficits that resolve within 2 weeks of ICU discharge',
          C: 'Isolated motor dysfunction without cognitive effects',
          D: 'Depression only, without cognitive impairment',
        },
        correctChoice: 'A',
        explanationCorrect:
          'ICU delirium is independently associated with long-term cognitive impairment that resembles patterns seen in traumatic brain injury or early Alzheimer disease. The BRAIN-ICU study demonstrated that longer duration of delirium was an independent predictor of worse cognitive function at 3 and 12 months post-discharge. Deficits in executive function, memory, and attention may persist for years.',
        explanationWrong:
          'Cognitive deficits following ICU delirium are not transient and may persist for years. While motor dysfunction may coexist (ICU-acquired weakness), the cognitive effects are the primary long-term consequence of delirium specifically. Depression is common after ICU stay but is a separate entity from the cognitive impairment directly linked to delirium duration.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 13,
        questionText:
          'An ICU nurse reports that a mechanically ventilated patient has developed new purulent tracheal secretions and a temperature of 38.8 degrees C on day 4 of ventilation. The respiratory therapist obtains an endotracheal aspirate for culture. For the CDC VAE surveillance definition of PVAP, what quantitative culture threshold from an endotracheal aspirate is considered positive?',
        choices: {
          A: 'Any growth regardless of quantity',
          B: 'Greater than or equal to 10^3 CFU/mL',
          C: 'Greater than or equal to 10^4 CFU/mL',
          D: 'A semi-quantitative endotracheal aspirate culture with moderate or heavy growth (1+ to 4+) of a pathogenic organism, OR quantitative culture meeting the specimen-specific threshold (10^5 CFU/mL or greater for endotracheal aspirate)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For the CDC VAE/PVAP surveillance definition, endotracheal aspirate cultures are considered positive at a quantitative threshold of 10^5 CFU/mL or greater, or with moderate to heavy growth (1+ or greater) on semi-quantitative culture. These thresholds differ from BAL (10^4 or greater) and protected specimen brush (10^3 or greater), reflecting the higher likelihood of contamination with endotracheal aspirates.',
        explanationWrong:
          'Any growth regardless of quantity does not meet the CDC threshold and would overcall VAP. A threshold of 10^3 CFU/mL applies to protected specimen brush cultures, not endotracheal aspirates. A threshold of 10^4 CFU/mL applies to BAL specimens, not endotracheal aspirates.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 14,
        questionText:
          'A patient with Eisenmenger syndrome and a ventricular septal defect is admitted to the ICU with worsening hypoxemia and right heart failure. The baseline oxygen saturation is 82%. Which statement regarding oxygen management in this patient is most accurate?',
        choices: {
          A: 'High-flow oxygen should be administered to achieve an SpO2 greater than 95%',
          B: 'Supplemental oxygen should be used judiciously with a target SpO2 near the patient\'s baseline, as excessive oxygen may decrease pulmonary vascular resistance relative to systemic resistance, potentially increasing left-to-right shunting and worsening hemodynamics',
          C: 'Oxygen therapy is contraindicated in Eisenmenger syndrome',
          D: 'Mechanical ventilation with 100% FiO2 should be initiated immediately',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In Eisenmenger syndrome, the shunt has reversed from left-to-right to right-to-left due to irreversible pulmonary vascular disease. Supplemental oxygen should be used cautiously. The goal is to maintain SpO2 near the patient\'s baseline rather than targeting normal values. In some patients, supplemental oxygen may preferentially reduce PVR, potentially increasing left-to-right shunting and cardiac work, though this effect varies. The primary concern is avoiding interventions that worsen the tenuous hemodynamic balance.',
        explanationWrong:
          'Targeting SpO2 greater than 95% is unrealistic and potentially harmful in Eisenmenger physiology. Oxygen is not absolutely contraindicated but must be used judiciously. Mechanical ventilation with 100% FiO2 is aggressive and the positive pressure ventilation itself may worsen right heart failure.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 15,
        questionText:
          'An obese patient (BMI 47 kg/m2) in the ICU is receiving propofol for sedation. After 72 hours, the patient develops unexplained metabolic acidosis, rhabdomyolysis, and cardiac dysfunction. Triglycerides are elevated at 450 mg/dL. What is the most likely diagnosis?',
        choices: {
          A: 'Propofol infusion syndrome (PRIS), which may present earlier and at lower doses in obese patients due to the lipophilic nature of propofol and its extensive distribution into adipose tissue',
          B: 'Malignant hyperthermia',
          C: 'Diabetic ketoacidosis',
          D: 'Acute fatty liver of critical illness',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Propofol infusion syndrome (PRIS) is characterized by metabolic acidosis, rhabdomyolysis, hypertriglyceridemia, cardiac dysfunction, and potentially renal failure. Obese patients may be at increased risk because propofol is highly lipophilic and distributes extensively into adipose tissue, potentially leading to tissue accumulation. The triad of metabolic acidosis, rhabdomyolysis, and cardiac dysfunction in a patient on propofol is highly suggestive of PRIS.',
        explanationWrong:
          'DKA does not cause rhabdomyolysis and cardiac dysfunction in this pattern. Malignant hyperthermia typically presents with hyperthermia and muscle rigidity during anesthesia. Acute fatty liver does not explain the rhabdomyolysis and cardiac dysfunction in combination with propofol exposure.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 16,
        questionText:
          'A ventilator-dependent patient with a C3 complete spinal cord injury successfully undergoes diaphragm pacer implantation. During initial pacing trials, the patient develops fatigue after 20 minutes. What is the appropriate pacing conditioning protocol?',
        choices: {
          A: 'Maintain continuous pacing at maximum stimulus intensity to build endurance quickly',
          B: 'Use pacing only during sleep to reduce patient awareness of the process',
          C: 'Alternate pacing with mechanical ventilation every 30 minutes for 24 hours a day',
          D: 'Begin with short pacing sessions (10 to 15 minutes) several times daily, gradually increasing duration over weeks to months as the diaphragm reconditions, while maintaining mechanical ventilation between sessions and during sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Diaphragm pacing requires a gradual conditioning protocol because the diaphragm has atrophied during prolonged mechanical ventilation. Initial sessions of 10 to 15 minutes several times daily allow progressive strengthening without fatigue-induced injury. Duration is increased over weeks to months, with mechanical ventilation used between sessions and during sleep. Some patients eventually achieve full-time daytime pacing.',
        explanationWrong:
          'Continuous pacing at maximum intensity risks diaphragm muscle fatigue, injury, and failure to achieve conditioning. Pacing only during sleep is ineffective because the reconditioning process requires active, progressive training during wakefulness. Alternating every 30 minutes without progression does not follow the principles of gradual muscle reconditioning.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 17,
        questionText:
          'A patient is admitted after an out-of-hospital cardiac arrest with an initial rhythm of pulseless electrical activity. ROSC is achieved after 15 minutes of CPR. Post-ROSC, the patient is hemodynamically unstable requiring vasopressors. An emergent coronary angiogram shows no acute coronary lesion. What should be prioritized in the early post-arrest care for this patient?',
        choices: {
          A: 'Discharge from the catheterization lab to a general ward with telemetry',
          B: 'Comprehensive ICU management including TTM, hemodynamic optimization with a mean arterial pressure goal of 65 to 80 mmHg, identification and treatment of the underlying cause of the PEA arrest, seizure monitoring, and targeted glucose management',
          C: 'Emergent cardiac surgery for bypass grafting',
          D: 'Immediate prognostic assessment for withdrawal of care',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Post-arrest care for PEA arrest without an acute coronary lesion requires a systematic approach: TTM for neuroprotection, hemodynamic optimization (MAP 65-80 mmHg to ensure adequate cerebral perfusion), investigation of non-cardiac causes of PEA (pulmonary embolism, hypovolemia, tension pneumothorax, metabolic derangements), seizure monitoring with continuous EEG, and glucose management to avoid both hypo- and hyperglycemia.',
        explanationWrong:
          'Ward-level care is wholly inadequate for a post-arrest patient requiring vasopressors. Without an acute coronary lesion, cardiac surgery is not indicated. Prognostic assessment should not be performed for at least 72 hours after return to normothermia.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 18,
        questionText:
          'An ICU patient receives a platelet transfusion and 2 hours later develops dyspnea and hypoxemia. The bedside lung ultrasound shows bilateral B-lines diffusely. The patient was in positive fluid balance of 4 liters over the past 24 hours. Echocardiography shows an ejection fraction of 65% with a dilated inferior vena cava. BNP is 890 pg/mL. What is the most likely diagnosis and appropriate management?',
        choices: {
          A: 'TRALI; manage with lung-protective ventilation only',
          B: 'TACO; manage with diuresis, oxygen supplementation, and reduction in the rate of future transfusions while monitoring fluid balance closely',
          C: 'Cardiogenic pulmonary edema from new heart failure',
          D: 'Hospital-acquired pneumonia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'This presentation is most consistent with TACO: transfusion temporally related respiratory distress, positive fluid balance, elevated BNP, dilated IVC indicating volume overload, and preserved ejection fraction. Management includes diuresis, supplemental oxygen or non-invasive ventilation, sitting the patient upright, and slower transfusion rates in the future. TACO is now the leading cause of transfusion-related mortality.',
        explanationWrong:
          'TRALI would present with normal BNP and normal filling pressures. While lung-protective ventilation may be needed, the elevated BNP and volume overload features indicate TACO. New heart failure with preserved EF (HFpEF) could mimic TACO but the temporal relationship to transfusion makes TACO more likely. Hospital-acquired pneumonia would not present acutely immediately after transfusion.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 19,
        questionText:
          'A patient with necrotizing pancreatitis develops a pancreatic abscess at week 4 of hospitalization. CT shows a well-defined fluid collection with gas bubbles in the pancreatic bed. What is the significance of gas within a pancreatic collection?',
        choices: {
          A: 'It is a normal finding in resolving pancreatitis',
          B: 'It indicates a fistula to the colon only',
          C: 'Gas within a pancreatic collection is a strong indicator of infection (infected pancreatic necrosis or pancreatic abscess) caused by gas-forming organisms, and this finding typically warrants intervention with drainage or debridement',
          D: 'It represents air introduced during a prior diagnostic procedure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Gas bubbles within a pancreatic collection on CT are a strong indicator of infection, typically caused by gas-forming enteric organisms that have translocated from the adjacent gastrointestinal tract. This finding, particularly in the context of clinical deterioration, warrants intervention. The preferred approach is the step-up strategy beginning with percutaneous or endoscopic drainage.',
        explanationWrong:
          'Gas within a pancreatic collection is not a normal finding and should always raise concern for infection. While a fistula to the colon could introduce gas, the more common cause is gas-forming bacterial infection. If no prior procedure was performed, iatrogenic air introduction is not applicable.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 20,
        questionText:
          'A hospital is implementing a pediatric early warning system adapted for its general pediatric wards. Which modification of the adult early warning score is most important when adapting for pediatric patients?',
        choices: {
          A: 'Use of identical vital sign thresholds as adult MEWS for all pediatric ages',
          B: 'Elimination of respiratory rate from the scoring system',
          C: 'Age-specific vital sign thresholds must be used because normal physiologic ranges vary significantly across pediatric age groups, and a single set of adult-derived cut-points would miss deterioration in children or generate excessive false alarms',
          D: 'Replacing physiologic parameters with laboratory values',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pediatric early warning scores must incorporate age-specific vital sign thresholds because normal heart rate, respiratory rate, and blood pressure vary dramatically across age groups. A resting heart rate of 140 bpm is normal in an infant but alarming in an adolescent. Using adult thresholds would either miss deterioration in younger children or generate excessive false alarms, rendering the system ineffective.',
        explanationWrong:
          'Respiratory rate is one of the most important early indicators of deterioration in children and must be included. Adult MEWS thresholds applied uniformly to all pediatric ages would be clinically dangerous. Laboratory values are impractical for routine ward-level surveillance and do not replace the value of physiologic parameter trends.',
        topic: 'Rapid Response and Early Warning Systems',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 19 seeded (20 questions, isFree: false)')

  // ─── EXAM 20 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q13,Q16,Q18) B=5(Q3,Q9,Q11,Q15,Q20) C=5(Q4,Q7,Q12,Q17,Q19) D=5(Q2,Q5,Q8,Q10,Q14)
  const exam20 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 20',
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
          'A patient with a tracheostomy is being mechanically ventilated and develops an air leak around the cuff despite maximum recommended cuff pressure (25 cmH2O). Suctioning above the cuff reveals large volumes of secretions. What is the most appropriate next step?',
        choices: {
          A: 'Replace the tracheostomy with a larger size or a tracheostomy tube with a high-volume low-pressure cuff designed for the patient\'s tracheal anatomy, and implement subglottic secretion drainage if available',
          B: 'Increase the cuff pressure above 30 cmH2O to seal the leak',
          C: 'Accept the air leak and increase the ventilator tidal volume to compensate',
          D: 'Remove the tracheostomy tube and reintubate with an endotracheal tube',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Persistent air leak despite maximum recommended cuff pressure (25 cmH2O) suggests a size mismatch between the tube and trachea, or tracheal dilation from prolonged cuffed tube use. Upsizing the tube or switching to one with a high-volume low-pressure cuff designed for the patient\'s anatomy is appropriate. Subglottic secretion drainage reduces pooling above the cuff and decreases aspiration risk.',
        explanationWrong:
          'Cuff pressures above 25-30 cmH2O risk tracheal mucosal ischemia, leading to tracheal stenosis or tracheomalacia. Simply compensating with higher tidal volumes does not address aspiration risk from the leak. Reintubation with an endotracheal tube is a step backward and does not address the underlying issue.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 2,
        questionText:
          'A patient in the ICU has been diagnosed with hyperactive delirium. The Richmond Agitation-Sedation Scale (RASS) score is +3. The patient has pulled out their arterial line and is attempting to climb out of bed. Non-pharmacologic interventions have been exhausted. The QTc interval is 510 ms. Which medication should be used with the MOST caution or avoided in this patient?',
        choices: {
          A: 'Dexmedetomidine',
          B: 'Olanzapine',
          C: 'Low-dose ketamine',
          D: 'Haloperidol, because it prolongs the QTc interval and is associated with risk of torsades de pointes when the QTc exceeds 500 ms',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Haloperidol is well-known to prolong the QTc interval. When the QTc already exceeds 500 ms, administration of haloperidol carries a significant risk of triggering torsades de pointes, a potentially fatal ventricular arrhythmia. The PADIS guidelines recommend avoiding or using extreme caution with haloperidol when QTc is prolonged.',
        explanationWrong:
          'Dexmedetomidine does not significantly prolong QTc and may be a reasonable alternative in this patient. Olanzapine has a much lower risk of QTc prolongation compared to haloperidol. Low-dose ketamine does not prolong QTc and may provide acute sedation in emergencies.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 3,
        questionText:
          'A hospital ICU implements a comprehensive VAP prevention bundle. After 6 months, they observe a 40% reduction in VAP rates but no significant change in VAE rates. What is the most likely explanation for this discrepancy?',
        choices: {
          A: 'The VAP prevention bundle is ineffective and should be abandoned',
          B: 'VAE surveillance captures a broader range of ventilator complications beyond infectious pneumonia, including non-infectious causes of respiratory deterioration such as atelectasis, pulmonary edema, and ARDS, which are not addressed by infection-focused VAP prevention bundles alone',
          C: 'The VAE surveillance system has a technical error',
          D: 'VAP and VAE measure the same clinical entity using different terminology',
        },
        correctChoice: 'B',
        explanationCorrect:
          'VAE surveillance was designed to capture a broader spectrum of ventilator-associated complications than the clinical definition of VAP. The VAE algorithm identifies any sustained worsening in oxygenation, which can be caused by non-infectious conditions (pulmonary edema, atelectasis, ARDS, pleural effusions) in addition to pneumonia. A VAP prevention bundle addresses only the infectious subset of VAE causes.',
        explanationWrong:
          'A 40% reduction in VAP demonstrates the bundle is effective for its target. The discrepancy is expected, not a system error. VAP and VAE are distinct constructs that overlap partially but measure different aspects of ventilator complications.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 4,
        questionText:
          'A patient with acute right heart failure from massive pulmonary embolism has a patent foramen ovale (PFO) detected on echocardiography with right-to-left shunting. The patient is profoundly hypoxemic with a PaO2 of 42 mmHg despite high-flow oxygen therapy. What is the mechanism of hypoxemia related to the PFO in this context?',
        choices: {
          A: 'The PFO causes increased pulmonary blood flow',
          B: 'Right-to-left shunting through the PFO occurs because elevated right atrial pressure from acute right heart failure exceeds left atrial pressure, allowing deoxygenated venous blood to bypass the lungs entirely and enter the systemic arterial circulation, causing refractory hypoxemia unresponsive to supplemental oxygen',
          C: 'The PFO leads to pulmonary arterial steal',
          D: 'The PFO causes left-to-right shunting that increases pulmonary congestion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In acute right heart failure from massive PE, right atrial pressure rises above left atrial pressure, opening the flap-like PFO and allowing right-to-left shunting. Deoxygenated blood from the right atrium passes directly into the left atrium, bypassing the lungs. This creates a fixed intracardiac shunt that produces refractory hypoxemia unresponsive to supplemental oxygen, since the shunted blood never participates in gas exchange.',
        explanationWrong:
          'The PFO shunt reduces pulmonary blood flow by diverting blood away from the lungs. There is no concept of pulmonary arterial steal related to PFO. In this context, the shunt is right-to-left due to elevated right-sided pressures, not left-to-right.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 5,
        questionText:
          'A morbidly obese patient (BMI 55 kg/m2) in the ICU requires a central venous catheter placement. Which vascular access site is preferred, and what approach should be used?',
        choices: {
          A: 'Femoral vein using landmark-based technique for easier access',
          B: 'Subclavian vein using landmark approach due to consistent anatomy',
          C: 'External jugular vein peripherally inserted central catheter',
          D: 'Internal jugular vein using real-time ultrasound guidance, which significantly improves first-pass success rate and reduces complications in obese patients where landmarks are unreliable',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The internal jugular vein with real-time ultrasound guidance is preferred in obese patients. Obesity significantly distorts surface landmarks, making landmark-based approaches unreliable and dangerous. Ultrasound allows direct visualization of the vessel, surrounding structures, and needle trajectory, dramatically improving success rates and reducing complications such as carotid artery puncture and pneumothorax.',
        explanationWrong:
          'Femoral vein access has higher infection rates and is associated with increased DVT risk. Landmark-based subclavian access in obese patients is risky due to obscured landmarks and the risk of pneumothorax. External jugular PICC insertion is unreliable for central access and is not appropriate for ICU-level central venous monitoring.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 6,
        questionText:
          'A 35-year-old patient with a T2 complete spinal cord injury is being weaned from mechanical ventilation via tracheostomy. The patient has been on the ventilator for 4 weeks. Diaphragm ultrasound shows bilateral diaphragm excursion of 2.5 cm (normal greater than 1.5 cm) and thickening fraction of 35% (normal greater than 30%). What do these ultrasound findings suggest about ventilator weaning potential?',
        choices: {
          A: 'Favorable diaphragm function with adequate contractility suggesting good potential for ventilator weaning, despite the loss of intercostal and abdominal muscle function from the T2 level injury',
          B: 'Critical diaphragm dysfunction requiring continued full ventilatory support',
          C: 'Diaphragm paralysis from phrenic nerve injury',
          D: 'Need for bilateral diaphragm plication before weaning can proceed',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Diaphragm excursion of 2.5 cm and thickening fraction of 35% are both above normal thresholds, indicating adequate diaphragm contractility. In a T2 spinal cord injury, the phrenic nerves (C3-C5) are intact, preserving diaphragm function. Despite loss of intercostal and abdominal muscles, patients with functional diaphragms can often be successfully weaned from the ventilator, though they may require longer weaning times and aggressive secretion management.',
        explanationWrong:
          'The ultrasound parameters are above normal thresholds, indicating good diaphragm function, not dysfunction. The findings are inconsistent with diaphragm paralysis. Diaphragm plication is performed for paralyzed hemidiaphragms, not for functional diaphragms with normal excursion and thickening.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 7,
        questionText:
          'A post-cardiac arrest patient who was cooled to 33 degrees C for 24 hours has been rewarmed to 37 degrees C over 8 hours. Twelve hours after reaching normothermia, the patient develops a temperature of 39.2 degrees C. What is the significance of this fever and the appropriate management?',
        choices: {
          A: 'The fever is expected and requires no intervention',
          B: 'The fever indicates a new infectious process and empiric antibiotics should be started immediately',
          C: 'Rebound hyperthermia after TTM is associated with worse neurological outcomes and should be aggressively treated with active temperature management to maintain normothermia (36.0-37.5 degrees C) for at least 48 to 72 hours after rewarming',
          D: 'The temperature device is malfunctioning and should be recalibrated',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Rebound hyperthermia after TTM is common and is independently associated with worse neurological outcomes in post-cardiac arrest patients. Every degree above 37 degrees C increases the risk of poor neurological recovery. Active temperature management should maintain strict normothermia (36.0-37.5 degrees C) for at least 48 to 72 hours after rewarming. While infection should be considered and investigated, the treatment of hyperthermia should not be delayed pending workup.',
        explanationWrong:
          'Post-TTM fever is not benign and requires active management. While infection should be investigated, empiric antibiotics should not be started without appropriate workup; the priority is temperature control. Equipment malfunction is possible but should not be assumed before treating a potentially harmful fever.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 8,
        questionText:
          'A patient with sickle cell disease receives an exchange transfusion of 8 units of packed red blood cells. Six hours later, the patient develops bilateral pulmonary infiltrates, fever, and hypoxemia. The clinical picture could represent either TRALI or an acute sickle chest crisis. Which laboratory finding would most help distinguish TRALI from acute chest syndrome in this patient?',
        choices: {
          A: 'Detection of anti-HLA or anti-neutrophil antibodies in the donor units, combined with a temporal relationship to transfusion and absence of other triggers for acute chest syndrome such as infection or fat embolism',
          B: 'Elevated LDH level',
          C: 'Reticulocyte count',
          D: 'Complete blood count showing leukocytosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Distinguishing TRALI from acute chest syndrome is challenging as both present with bilateral infiltrates, hypoxemia, and fever after transfusion. Detection of anti-HLA or anti-neutrophil antibodies in the donor plasma, combined with the temporal relationship to transfusion, provides the strongest evidence for TRALI. Acute chest syndrome is more likely when identifiable triggers (infection, fat embolism from bone marrow infarction) are present.',
        explanationWrong:
          'Leukocytosis and elevated LDH are nonspecific and can occur in both conditions. Reticulocyte count reflects erythropoietic activity and does not distinguish between TRALI and acute chest syndrome.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 9,
        questionText:
          'A patient with severe acute pancreatitis develops early organ failure on day 2 of admission. The Modified Marshall scoring system is used to assess organ failure. Which organ systems are evaluated by the Modified Marshall score, and what score indicates organ failure?',
        choices: {
          A: 'Respiratory, hepatic, and neurological systems with a score greater than 3',
          B: 'Only the respiratory system using the PaO2/FiO2 ratio',
          C: 'Respiratory (PaO2/FiO2), cardiovascular (systolic blood pressure and response to fluid resuscitation), and renal (serum creatinine) systems, with a score of 2 or more in any system defining organ failure',
          D: 'All six organ systems in the SOFA score',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The Modified Marshall scoring system evaluates three organ systems: respiratory (PaO2/FiO2 ratio), cardiovascular (systolic blood pressure), and renal (serum creatinine). Each system is scored from 0 to 4, and a score of 2 or more in any individual system defines organ failure. This scoring system was specifically adopted by the revised Atlanta classification for grading severity of acute pancreatitis.',
        explanationWrong:
          'The Modified Marshall score does not include hepatic or neurological systems. It evaluates three, not one, organ systems. It is distinct from the SOFA score, which evaluates six organ systems and is not specified in the revised Atlanta classification for pancreatitis severity.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 10,
        questionText:
          'A hospital implements a nurse-led rapid response system and trains nursing staff to activate the MET. After 1 year, they find that while the number of MET calls has increased, there is significant variability in activation rates between nursing units. Which factor most commonly explains this variability?',
        choices: {
          A: 'Differences in patient acuity between units',
          B: 'Variations in monitoring equipment calibration',
          C: 'Random statistical variation',
          D: 'Differences in unit safety culture, including varying levels of nurse empowerment, physician support for nurse-initiated MET calls, and presence or absence of hierarchical barriers that discourage activation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Variability in MET activation rates between units is most commonly attributed to differences in safety culture. Units where nurses feel empowered to activate the MET, where physicians support nurse-initiated calls, and where there are no punitive consequences for calling have higher activation rates. Conversely, units with hierarchical barriers, physician gatekeeping, or fear of criticism for calling show lower activation rates regardless of patient acuity.',
        explanationWrong:
          'While patient acuity differences exist between units, they do not explain the degree of variability typically observed. Monitoring equipment calibration is standardized across units. Statistical variation alone does not explain consistent between-unit differences in activation culture.',
        topic: 'Rapid Response and Early Warning Systems',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 11,
        questionText:
          'A patient undergoing tracheostomy tube change has the old tube removed, but the new tube cannot be advanced through the stoma. The patient begins desaturating rapidly. An endotracheal tube is not immediately available. What rescue technique should the respiratory therapist perform?',
        choices: {
          A: 'Attempt to force the new tracheostomy tube through the stoma with increased pressure',
          B: 'Insert a suction catheter or bougie through the stoma as a guidewire, railroad a smaller tracheostomy tube or endotracheal tube over it, and provide ventilation through the rescue airway while preparing for definitive management',
          C: 'Apply bag-valve-mask ventilation over the face while occluding the stoma',
          D: 'Wait for the surgical team to arrive while providing jaw thrust only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When a tracheostomy tube cannot be reinserted, using a suction catheter or bougie as a guidewire through the stoma maintains access to the tracheal lumen. A smaller tracheostomy tube or endotracheal tube can then be railroaded over the guide into the trachea. This technique preserves airway access while the patient is stabilized and definitive management is arranged.',
        explanationWrong:
          'Forcing a tube through the stoma risks creating a false passage with potentially fatal consequences. While BVM over the face with stoma occlusion is a valid rescue technique, the question states an ETT is not immediately available, making stoma-based rescue the priority. Waiting for the surgical team without establishing an airway risks cardiac arrest.',
        topic: 'Tracheostomy Timing and Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 12,
        questionText:
          'An ICU implements the ABCDEF bundle to reduce delirium. What does each component of the ABCDEF bundle stand for?',
        choices: {
          A: 'Antibiotics, Blood pressure, CT scan, Dialysis, Exercise, Fluid management',
          B: 'Airway management, Bronchoscopy, Central line care, Drug titration, Electrolyte management, Family engagement',
          C: 'Assess and manage pain, Both spontaneous awakening and breathing trials, Choice of appropriate sedation, Delirium monitoring and management, Early mobility and exercise, Family engagement and empowerment',
          D: 'Arterial line, Bedside monitoring, Continuous EEG, Daily labs, Enteral nutrition, Fall prevention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The ABCDEF bundle is an evidence-based framework: A = Assess, prevent, and manage pain; B = Both spontaneous awakening trials (SAT) and spontaneous breathing trials (SBT); C = Choice of analgesia and sedation; D = Delirium: assess, prevent, and manage; E = Early mobility and exercise; F = Family engagement and empowerment. Implementation of the full bundle has been shown to reduce delirium, ventilator days, and ICU mortality.',
        explanationWrong:
          'The other options do not represent the components of the ABCDEF bundle. The bundle specifically targets the interrelated domains of pain, sedation, delirium, ventilator liberation, mobility, and family engagement.',
        topic: 'Delirium Assessment and Prevention',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 13,
        questionText:
          'A mechanically ventilated patient is on a subglottic secretion drainage endotracheal tube. The suction port above the cuff is connected to continuous low-pressure suction. What is the primary mechanism by which subglottic secretion drainage reduces VAP risk?',
        choices: {
          A: 'It eliminates the need for oral care',
          B: 'It sterilizes the upper airway',
          C: 'It directly kills bacteria in the secretions through the suction process',
          D: 'It reduces the bacterial load by removing pooled secretions from above the cuff, thereby decreasing the volume and frequency of microaspiration of contaminated material past the cuff folds into the lower respiratory tract',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Subglottic secretion drainage removes pooled secretions from the subglottic space above the endotracheal tube cuff. These secretions are the primary reservoir for bacteria-laden material that can leak past the cuff folds and be aspirated into the lower respiratory tract. By continuously draining this reservoir, the volume and frequency of microaspiration events is significantly reduced, which is the primary mechanism of VAP prevention.',
        explanationWrong:
          'Subglottic drainage does not sterilize the airway or kill bacteria; it physically removes secretions. It does not replace the need for oral care, which addresses oropharyngeal bacterial colonization separately. The primary mechanism is prevention of microaspiration, not any antimicrobial effect.',
        topic: 'VAE/VAP Surveillance',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 14,
        questionText:
          'A patient with pulmonary arterial hypertension on combination oral therapy (ambrisentan and tadalafil) is admitted to the ICU with acute decompensation. The team wants to add a parenteral prostacyclin. Which route of administration for prostacyclin therapy carries the lowest risk of catheter-related complications while providing effective pulmonary vasodilation?',
        choices: {
          A: 'Continuous intravenous epoprostenol via a permanent central venous catheter',
          B: 'Intramuscular treprostinil',
          C: 'Oral prostacyclin analogues only',
          D: 'Continuous subcutaneous treprostinil infusion, which avoids central venous catheter-related risks including line sepsis while providing steady-state drug delivery, though it may cause significant injection site pain',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Continuous subcutaneous treprostinil avoids the risks associated with permanent central venous catheters, which include line sepsis (a leading cause of morbidity and mortality in patients on IV prostacyclins), thrombosis, and air embolism. Subcutaneous delivery provides effective steady-state drug levels. The main limitation is injection site pain, which affects many patients but can often be managed.',
        explanationWrong:
          'IV epoprostenol via central catheter is effective but carries significant catheter-related infection risk. There is no intramuscular formulation of treprostinil. Oral prostacyclin analogues may not provide adequate efficacy for acute decompensation requiring parenteral therapy.',
        topic: 'Right Heart Failure and Pulmonary Hypertension',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 15,
        questionText:
          'A morbidly obese patient (BMI 58 kg/m2) in the ICU has been mechanically ventilated for 10 days and is being considered for tracheostomy. What anatomic and procedural considerations are most important when performing tracheostomy in morbidly obese patients?',
        choices: {
          A: 'Standard percutaneous technique without modification is safe for all BMI ranges',
          B: 'Obese patients require consideration of deeper tissue planes, potential need for extended-length tracheostomy tubes to traverse the thicker pretracheal soft tissue, ultrasound assessment of anterior neck vasculature, and careful patient positioning with a shoulder roll and neck extension to bring the trachea closer to the skin surface',
          C: 'Tracheostomy is contraindicated in patients with BMI greater than 50 kg/m2',
          D: 'The cricothyroid membrane should be used as the primary site in obese patients',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tracheostomy in obese patients presents unique anatomic challenges: increased pretracheal soft tissue depth may require extended-length tubes; standard tubes may not reach the tracheal lumen. Ultrasound of the anterior neck helps identify aberrant vasculature (thyroid vessels, anterior jugular veins). Patient positioning with a shoulder roll and neck extension is critical to reduce the distance from skin to trachea. Both open and percutaneous techniques can be used with appropriate modifications.',
        explanationWrong:
          'Standard percutaneous technique without modification is unsafe in morbidly obese patients due to deep tissue planes and distorted anatomy. There is no absolute BMI contraindication for tracheostomy. The cricothyroid membrane is reserved for emergent surgical airways, not elective tracheostomy, and is difficult to identify in obese patients.',
        topic: 'Obesity in ICU',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 16,
        questionText:
          'A patient with a high cervical spinal cord injury on chronic mechanical ventilation develops recurrent pneumonias despite adequate secretion management. Swallowing evaluation reveals silent aspiration. What is the most appropriate intervention to reduce aspiration-related pneumonia in this patient?',
        choices: {
          A: 'Placement of a cuffed tracheostomy tube with continuous cuff pressure monitoring maintained at 20 to 25 cmH2O, combined with subglottic secretion drainage, head of bed elevation, and speech-language pathology-guided dietary modifications for any oral intake',
          B: 'Total parenteral nutrition to eliminate all oral intake indefinitely',
          C: 'Continuous lateral rotation therapy',
          D: 'Prophylactic antibiotics for aspiration prevention',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A comprehensive aspiration prevention strategy includes: a cuffed tracheostomy with continuous cuff pressure monitoring (20-25 cmH2O) to minimize aspiration past the cuff, subglottic secretion drainage to remove pooled secretions, head of bed elevation to reduce gastroesophageal reflux, and dietary modifications guided by swallowing assessment. This multi-modal approach addresses multiple aspiration pathways.',
        explanationWrong:
          'Total parenteral nutrition eliminates aspiration from oral intake but does not prevent aspiration of secretions and has significant complications including line infections and hepatic dysfunction. Continuous lateral rotation does not prevent aspiration. Prophylactic antibiotics promote antibiotic resistance without addressing the underlying aspiration mechanism.',
        topic: 'Spinal Cord Injury Respiratory Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 17,
        questionText:
          'A post-cardiac arrest patient underwent TTM at 33 degrees C. During hypothermia, the patient\'s glucose level is 210 mg/dL. What is the recommended approach to glucose management during TTM?',
        choices: {
          A: 'No glucose management is needed during hypothermia',
          B: 'Aggressive insulin therapy targeting glucose 80-110 mg/dL',
          C: 'Moderate glucose control targeting 140-180 mg/dL with frequent monitoring, as hypothermia induces insulin resistance and the risk of hypoglycemia increases significantly during rewarming when insulin sensitivity returns',
          D: 'Oral hypoglycemic agents are preferred over insulin during TTM',
        },
        correctChoice: 'C',
        explanationCorrect:
          'During hypothermia, insulin resistance develops, leading to hyperglycemia. Moderate glucose control (140-180 mg/dL) is recommended with frequent monitoring. Critically, during rewarming, insulin sensitivity rapidly returns, creating a high risk for hypoglycemia if insulin doses are not proactively reduced. Tight glucose control (80-110 mg/dL) increases hypoglycemia risk, which is particularly harmful to the recovering brain.',
        explanationWrong:
          'Uncontrolled hyperglycemia during hypothermia worsens neurological outcomes. Aggressive tight control increases hypoglycemia risk, especially during rewarming. Oral hypoglycemic agents are inappropriate in critically ill patients, particularly during TTM when absorption and metabolism are unpredictable.',
        topic: 'Post-Arrest Care and TTM',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 18,
        questionText:
          'A blood bank laboratory technologist is performing a TRALI workup. Donor and recipient samples have been collected. Which testing is most critical for confirming the diagnosis of immune-mediated TRALI?',
        choices: {
          A: 'Testing the implicated donor plasma for anti-HLA class I and class II antibodies and anti-human neutrophil antigen (HNA) antibodies, with crossmatch testing against the recipient\'s lymphocytes and neutrophils to confirm antibody-antigen specificity',
          B: 'Blood culture from the recipient',
          C: 'Direct antiglobulin test (Coombs test) on the recipient',
          D: 'Hemoglobin electrophoresis of the donor sample',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Confirmatory TRALI workup requires testing the implicated donor for anti-HLA class I, anti-HLA class II, and anti-HNA antibodies. Crossmatch testing (lymphocytotoxicity or flow cytometry crossmatch) against recipient cells confirms that the donor antibodies react with recipient antigens. This antigen-antibody specificity confirms the immune-mediated mechanism and identifies the responsible donor for future deferral.',
        explanationWrong:
          'Blood cultures investigate bacterial contamination, not TRALI. The direct antiglobulin test evaluates hemolytic transfusion reactions, not TRALI. Hemoglobin electrophoresis is irrelevant to TRALI diagnosis.',
        topic: 'TRALI/TACO',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 19,
        questionText:
          'A patient with severe acute pancreatitis has been NPO for 5 days. The team is planning to initiate nutrition. According to current guidelines, what is the recommended nutritional approach?',
        choices: {
          A: 'Continue NPO status until complete resolution of abdominal pain and normalization of amylase and lipase',
          B: 'Total parenteral nutrition as the preferred initial route',
          C: 'Early enteral nutrition via a nasojejunal or nasogastric tube, initiated within 24 to 48 hours of admission if tolerated, as enteral feeding maintains gut barrier integrity, reduces bacterial translocation, and decreases infectious complications and mortality compared to parenteral nutrition',
          D: 'Oral diet with high-fat foods to stimulate pancreatic enzyme production',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current guidelines strongly recommend early enteral nutrition in severe acute pancreatitis, preferably within 24 to 48 hours of admission. Enteral feeding preserves gut mucosal integrity, reduces bacterial translocation from the gut to the pancreatic bed, and decreases the risk of infected necrosis and other infectious complications. Both nasogastric and nasojejunal routes are acceptable if tolerated.',
        explanationWrong:
          'Prolonged NPO status leads to gut mucosal atrophy, increased bacterial translocation, and worsened outcomes. Parenteral nutrition is associated with higher infection rates, gut atrophy, and higher costs compared to enteral nutrition. High-fat oral diet stimulates pancreatic secretion and would exacerbate pancreatitis.',
        topic: 'Acute Pancreatitis',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 20,
        questionText:
          'A hospital is evaluating the cost-effectiveness of its rapid response system. Which metric provides the best measure of RRS return on investment?',
        choices: {
          A: 'Total cost of the MET team staffing',
          B: 'Reduction in ICU admissions from cardiac arrests, decrease in code blue events outside the ICU, shortened hospital length of stay for rescued patients, and improved survival-to-discharge rates, calculated against the incremental cost of the RRS program',
          C: 'Number of MET calls avoided through early warning system optimization',
          D: 'Reduction in total hospital adverse events regardless of type',
        },
        correctChoice: 'B',
        explanationCorrect:
          'RRS cost-effectiveness is best measured by comparing the costs of the program against the benefits: fewer ICU admissions from preventable cardiac arrests (ICU bed-days are the most expensive resource), reduction in code blue events, shorter hospital stays for patients who were rescued early by the MET rather than progressing to cardiac arrest, and improved survival. This comprehensive approach captures both direct cost savings and outcome improvements.',
        explanationWrong:
          'Staffing cost alone is only the expense side of the equation without measuring benefits. MET calls avoided is not a meaningful outcome since the goal is to prevent deterioration, not reduce MET activations. Reduction in total hospital adverse events is too broad and conflates many factors unrelated to the RRS.',
        topic: 'Rapid Response and Early Warning Systems',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 20 seeded (20 questions, isFree: false)')

  console.log('Done seeding ACCS mini exams 16-20!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
