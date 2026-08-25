import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TMC_DIVISION_ID = 'cmsm41fq00000zf54wqjaayvz'

async function main() {
  console.log('Seeding TMC mini exams 16-20...')

  // ─── EXAM 16 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1D,2B,3A,4C,5B,6D,7C,8A,9D,10C,11A,12B,13D,14A,15C,16B,17A,18D,19B,20C
  const exam16 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 16',
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
          'A patient is scheduled for hyperbaric oxygen therapy (HBO) for a chronic non-healing wound. Which of the following is an absolute contraindication to HBO therapy?',
        choices: {
          A: 'Diabetes mellitus',
          B: 'Claustrophobia',
          C: 'Chronic renal failure',
          D: 'Untreated pneumothorax',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An untreated pneumothorax is an absolute contraindication to hyperbaric oxygen therapy because the increased pressure can worsen the pneumothorax and lead to a life-threatening tension pneumothorax during decompression.',
        explanationWrong:
          'Diabetes mellitus and chronic renal failure are not contraindications to HBO therapy. Claustrophobia may make treatment difficult but can be managed with anxiolytics and is a relative concern, not an absolute contraindication.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 2,
        questionText:
          'During hyperbaric oxygen therapy, a patient complains of ear pain as the chamber is being pressurized. What should the respiratory therapist recommend first?',
        choices: {
          A: 'Immediately abort the treatment session',
          B: 'Instruct the patient to perform a Valsalva maneuver to equalize ear pressure',
          C: 'Increase the rate of pressurization to shorten the painful period',
          D: 'Administer a bronchodilator via metered-dose inhaler',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Ear pain during pressurization (barotrauma) is the most common side effect of HBO therapy. A Valsalva maneuver helps equalize middle ear pressure through the eustachian tubes and is the appropriate first intervention.',
        explanationWrong:
          'Aborting the treatment immediately is premature; ear equalization techniques should be attempted first. Increasing the rate of pressurization would worsen the ear pain. A bronchodilator does not address middle ear pressure equalization.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 3,
        questionText:
          'Inhaled nitric oxide (iNO) therapy is most commonly indicated for which of the following conditions?',
        choices: {
          A: 'Persistent pulmonary hypertension of the newborn (PPHN)',
          B: 'Chronic obstructive pulmonary disease',
          C: 'Community-acquired pneumonia in adults',
          D: 'Mild intermittent asthma',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled nitric oxide is an FDA-approved treatment for persistent pulmonary hypertension of the newborn (PPHN). It acts as a selective pulmonary vasodilator, reducing pulmonary vascular resistance and improving oxygenation.',
        explanationWrong:
          'COPD, community-acquired pneumonia, and mild asthma are not standard indications for iNO therapy. While iNO has been studied in ARDS and other conditions, PPHN remains the primary approved indication.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 4,
        questionText:
          'When administering inhaled nitric oxide, which toxic byproduct must be continuously monitored?',
        choices: {
          A: 'Carbon monoxide (CO)',
          B: 'Hydrogen sulfide (H2S)',
          C: 'Nitrogen dioxide (NO2)',
          D: 'Sulfur dioxide (SO2)',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Nitrogen dioxide (NO2) is formed when nitric oxide reacts with oxygen. NO2 is a toxic gas that can cause pulmonary inflammation and injury, so it must be continuously monitored and kept below 2 ppm during iNO therapy.',
        explanationWrong:
          'Carbon monoxide, hydrogen sulfide, and sulfur dioxide are not byproducts of nitric oxide therapy. The primary concern is the oxidation of NO to NO2 in the presence of oxygen.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 5,
        questionText:
          'A physician orders heliox therapy for a patient with severe upper airway obstruction from a tracheal tumor. What is the primary mechanism by which heliox improves gas flow?',
        choices: {
          A: 'It increases the oxygen-carrying capacity of hemoglobin',
          B: 'It reduces gas density, thereby decreasing turbulent airflow resistance',
          C: 'It directly dilates the bronchial smooth muscle',
          D: 'It increases mucociliary clearance in the airways',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Heliox is a mixture of helium and oxygen. Helium has a much lower density than nitrogen, which reduces turbulent flow resistance through narrowed airways. This allows for improved ventilation with less work of breathing.',
        explanationWrong:
          'Heliox does not affect hemoglobin oxygen-carrying capacity, does not directly dilate bronchial smooth muscle, and does not increase mucociliary clearance. Its therapeutic benefit is purely related to the reduced gas density.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 6,
        questionText:
          'A respiratory therapist is setting up a transport ventilator for an interhospital transfer. Which of the following is the most critical consideration before departing?',
        choices: {
          A: 'Ensuring the ventilator has Bluetooth connectivity for remote monitoring',
          B: 'Selecting a ventilator with the most advanced graphics display',
          C: 'Verifying that the patient tolerates the same settings on the transport ventilator as the ICU ventilator',
          D: 'Ensuring adequate gas supply for at least twice the estimated transport duration',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Having adequate gas supply (typically at least twice the estimated transport time) is critical to prevent running out of oxygen or driving gas during transport, which could be life-threatening.',
        explanationWrong:
          'While verifying ventilator settings is important, having adequate gas supply is the most critical safety consideration. Bluetooth connectivity and advanced displays are convenience features that are not essential for safe transport.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 7,
        questionText:
          'During a bronchoscopy, the respiratory therapist notices the patient\'s SpO2 has dropped from 96% to 82%. What is the most appropriate immediate action?',
        choices: {
          A: 'Document the desaturation and continue the procedure',
          B: 'Increase the sedation to prevent the patient from coughing',
          C: 'Notify the physician and increase supplemental oxygen delivery',
          D: 'Immediately extubate the patient',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A significant drop in SpO2 during bronchoscopy requires immediate action. The respiratory therapist should alert the physician performing the procedure and increase supplemental oxygen. The physician can then decide whether to temporarily withdraw the bronchoscope to allow recovery.',
        explanationWrong:
          'Simply documenting the event without action is inappropriate given the severity of the desaturation. Increasing sedation could worsen respiratory depression. Immediate extubation is not appropriate and could cause further complications.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 8,
        questionText:
          'A chest tube has been placed for a large pleural effusion. The respiratory therapist observes continuous bubbling in the water-seal chamber. What does this indicate?',
        choices: {
          A: 'An air leak is present in the system',
          B: 'The effusion has completely drained',
          C: 'The chest tube is properly positioned and functioning normally',
          D: 'The suction pressure is set too low',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Continuous bubbling in the water-seal chamber indicates an air leak. This could be from the patient (bronchopleural fistula) or from a connection leak in the drainage system. The therapist should systematically check all connections and notify the physician.',
        explanationWrong:
          'Normal chest tube function shows tidaling (fluctuation with breathing) in the water-seal chamber, not continuous bubbling. Complete drainage would result in decreased output, not bubbling. Low suction pressure would be reflected in the suction control chamber, not the water-seal chamber.',
        topic: 'Chest Tube Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 9,
        questionText:
          'A home care patient using a portable oxygen concentrator reports that the device frequently alarms. The respiratory therapist determines the unit is delivering only 82% oxygen instead of the expected 90-96%. What is the most likely cause?',
        choices: {
          A: 'The patient is using the device at too low a flow rate',
          B: 'The room temperature is below normal',
          C: 'The power cord is loose',
          D: 'The sieve beds are saturated and need replacement',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Oxygen concentrators use molecular sieve beds (zeolite) to adsorb nitrogen from room air. Over time, these sieve beds become saturated and less effective at nitrogen removal, resulting in lower oxygen purity. Replacement of the sieve beds restores proper function.',
        explanationWrong:
          'Low flow rates would not cause decreased oxygen purity. Room temperature has minimal effect on concentrator performance. A loose power cord would cause the unit to shut off, not deliver lower purity oxygen.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 10,
        questionText:
          'A respiratory therapist is caring for a terminally ill patient whose family requests that all life-sustaining treatments be continued despite the patient having a valid do-not-resuscitate (DNR) order. What is the most appropriate action?',
        choices: {
          A: 'Ignore the DNR order and follow the family\'s wishes',
          B: 'Refuse to provide any further care to the patient',
          C: 'Follow the DNR order and involve the ethics committee or social worker to counsel the family',
          D: 'Discontinue all treatments immediately without discussion',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A valid DNR order represents the patient\'s autonomous decision and is legally binding. The respiratory therapist should honor the order while involving the ethics committee or social worker to help the family understand and cope with the situation.',
        explanationWrong:
          'Ignoring a valid DNR order is both unethical and potentially illegal. Refusing all care is inappropriate as a DNR order only applies to resuscitative measures. Discontinuing all treatments without discussion fails to address the family\'s concerns and may be inappropriate.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 11,
        questionText:
          'During ACLS, a patient is in pulseless ventricular tachycardia. The respiratory therapist is managing the airway. What is the recommended ventilation rate after an advanced airway has been placed?',
        choices: {
          A: '1 breath every 6 seconds (10 breaths/min)',
          B: '1 breath every 3 seconds (20 breaths/min)',
          C: '1 breath every 10 seconds (6 breaths/min)',
          D: '1 breath every 2 seconds (30 breaths/min)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Per ACLS guidelines, once an advanced airway is in place during cardiac arrest, ventilations should be delivered at a rate of 1 breath every 6 seconds (10 breaths per minute) without pausing chest compressions.',
        explanationWrong:
          'Ventilation rates of 20 or 30 breaths per minute are excessive and can cause hyperventilation, decreased venous return, and reduced cardiac output during CPR. Six breaths per minute is too infrequent to provide adequate ventilation.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 12,
        questionText:
          'A neonate is being treated with inhaled nitric oxide at 20 ppm. The physician asks the respiratory therapist to wean the iNO. What is the recommended approach for weaning?',
        choices: {
          A: 'Immediately discontinue iNO and observe the patient',
          B: 'Gradually reduce the dose in small decrements while monitoring oxygenation',
          C: 'Switch directly from iNO to inhaled epoprostenol',
          D: 'Double the dose briefly before discontinuing to prevent rebound',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Inhaled nitric oxide should be weaned gradually in small decrements (typically by 5 ppm at a time, then by 1 ppm at lower doses) while closely monitoring oxygenation. Abrupt discontinuation can cause life-threatening rebound pulmonary hypertension.',
        explanationWrong:
          'Immediate discontinuation risks severe rebound pulmonary hypertension. Switching directly to another agent without gradual weaning is not recommended. Doubling the dose before stopping has no clinical rationale and could be harmful.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 13,
        questionText:
          'Which of the following heliox mixtures provides the greatest reduction in gas density while still maintaining adequate oxygenation?',
        choices: {
          A: '60% helium / 40% oxygen',
          B: '70% helium / 30% oxygen',
          C: '50% helium / 50% oxygen',
          D: '80% helium / 20% oxygen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An 80/20 heliox mixture (80% helium, 20% oxygen) provides the greatest reduction in gas density while maintaining the minimum acceptable FiO2 of 0.21. Higher helium concentrations produce greater reductions in turbulent flow resistance.',
        explanationWrong:
          'While 70/30 and 60/40 mixtures are also used clinically, they contain more oxygen and less helium, resulting in a denser gas mixture with less therapeutic benefit. A 50/50 mixture provides the least density reduction of the options listed.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 14,
        questionText:
          'Surfactant replacement therapy is administered to a premature neonate with respiratory distress syndrome (RDS). Which of the following methods of administration is standard?',
        choices: {
          A: 'Intratracheal instillation through an endotracheal tube',
          B: 'Aerosolized delivery via a vibrating mesh nebulizer',
          C: 'Intravenous infusion over 30 minutes',
          D: 'Oral administration via a feeding tube',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Surfactant replacement therapy is administered via intratracheal instillation through an endotracheal tube, typically in aliquots with the neonate positioned in different orientations to ensure even distribution throughout the lungs.',
        explanationWrong:
          'While aerosolized surfactant delivery is being researched, it is not the current standard of care. Surfactant is a large molecule that cannot be effectively absorbed through intravenous or oral routes for pulmonary effect.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 15,
        questionText:
          'A patient being transported by ground ambulance is on a transport ventilator. The ventilator begins alarming for high pressure. The patient\'s SpO2 is dropping. What should the respiratory therapist do first?',
        choices: {
          A: 'Increase the high-pressure alarm limit on the ventilator',
          B: 'Sedate the patient to reduce agitation',
          C: 'Disconnect the patient from the ventilator and manually ventilate with a bag-valve-mask while assessing the cause',
          D: 'Turn off the ventilator alarms to reduce noise in the ambulance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When a transport ventilator alarms for high pressure with desaturation, the safest immediate action is to disconnect and manually ventilate while troubleshooting. This ensures ventilation continues while the therapist identifies the cause, which could include a kinked ETT, mucus plug, or pneumothorax.',
        explanationWrong:
          'Increasing the alarm limit or turning off alarms does not address the underlying problem and could mask a dangerous situation. Sedation may worsen respiratory depression without addressing the mechanical issue.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 16,
        questionText:
          'During a thoracentesis, the respiratory therapist is monitoring the patient. Which of the following signs would indicate a complication requiring immediate intervention?',
        choices: {
          A: 'Mild discomfort at the needle insertion site',
          B: 'Sudden onset of dyspnea, tachycardia, and absent breath sounds on the affected side',
          C: 'A small amount of serous fluid draining from the puncture site',
          D: 'Temporary cough during the procedure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Sudden dyspnea, tachycardia, and absent breath sounds on the affected side following thoracentesis strongly suggest a pneumothorax, which is the most serious complication of the procedure and requires immediate intervention such as chest tube insertion.',
        explanationWrong:
          'Mild discomfort at the insertion site is expected. A small amount of serous drainage and temporary coughing are common and generally benign findings during and after thoracentesis.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 17,
        questionText:
          'A home care patient on long-term oxygen therapy asks about traveling by commercial airline. What should the respiratory therapist advise regarding supplemental oxygen?',
        choices: {
          A: 'The patient must arrange for an FAA-approved portable oxygen concentrator as personal oxygen tanks are not permitted on commercial flights',
          B: 'The patient can bring any portable oxygen cylinder on the aircraft',
          C: 'Supplemental oxygen is never allowed on commercial aircraft',
          D: 'The airline will always provide supplemental oxygen at no additional cost',
        },
        correctChoice: 'A',
        explanationCorrect:
          'FAA regulations prohibit personal compressed gas or liquid oxygen containers on commercial flights. Patients requiring supplemental oxygen must use an FAA-approved portable oxygen concentrator (POC). Airlines require advance notice and medical documentation.',
        explanationWrong:
          'Personal oxygen cylinders are prohibited on commercial aircraft by FAA regulations. Supplemental oxygen via approved POCs is permitted, so it is not true that oxygen is never allowed. Airlines do not routinely provide oxygen, and when available, there is typically a fee.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is asked to assist with a bronchoscopy on a mechanically ventilated patient. Which of the following adaptations is essential to maintain ventilation during the procedure?',
        choices: {
          A: 'Switching the patient to a nasal cannula during the procedure',
          B: 'Reducing the tidal volume by 50% to accommodate the bronchoscope',
          C: 'Removing the endotracheal tube and replacing it with a tracheostomy',
          D: 'Using a specialized bronchoscopy adapter (swivel connector) on the ETT to allow passage of the scope while maintaining the ventilator circuit',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A bronchoscopy adapter (swivel connector with a diaphragm port) allows the bronchoscope to pass through the ETT while maintaining a seal for continued mechanical ventilation. FiO2 should be increased to 1.0 before the procedure.',
        explanationWrong:
          'Switching to a nasal cannula on a mechanically ventilated patient is inappropriate. Reducing tidal volume by 50% would cause hypoventilation. Replacing the ETT with a tracheostomy solely for bronchoscopy is unnecessarily invasive.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist witnesses a colleague documenting a treatment that was never performed on a patient. What is the most appropriate action?',
        choices: {
          A: 'Ignore the situation to avoid workplace conflict',
          B: 'Report the incident to the appropriate supervisor or compliance officer',
          C: 'Confront the colleague publicly in front of other staff',
          D: 'Alter the medical record to correct the false documentation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'False documentation is both an ethical and legal violation that can compromise patient safety. The respiratory therapist has a professional and legal obligation to report the incident to a supervisor or compliance officer through proper channels.',
        explanationWrong:
          'Ignoring the situation enables continued unethical behavior. Public confrontation is unprofessional and does not ensure proper investigation. Altering a medical record is itself a legal violation and could constitute tampering with evidence.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam16.id,
        questionIndex: 20,
        questionText:
          'During ACLS management of a cardiac arrest, which medication and dose should be administered for pulseless ventricular fibrillation after the second defibrillation attempt?',
        choices: {
          A: 'Atropine 0.5 mg IV',
          B: 'Adenosine 6 mg rapid IV push',
          C: 'Epinephrine 1 mg IV/IO',
          D: 'Lidocaine 300 mg IV',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Per ACLS guidelines, epinephrine 1 mg IV/IO should be administered after the second shock for pulseless VF/VT. Epinephrine is the first-line vasopressor in cardiac arrest, given every 3-5 minutes.',
        explanationWrong:
          'Atropine is no longer recommended for cardiac arrest in current ACLS guidelines. Adenosine is used for stable narrow-complex tachycardia, not cardiac arrest. Amiodarone (not lidocaine at 300 mg) is the recommended antiarrhythmic; the standard amiodarone dose is 300 mg for the first dose.',
        topic: 'ACLS Respiratory Components',
      },
    ],
  })

  // ─── EXAM 17 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1C,2A,3D,4B,5A,6C,7B,8D,9A,10B,11D,12C,13A,14B,15D,16C,17B,18A,19D,20C
  const exam17 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 17',
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
          'A patient undergoing hyperbaric oxygen therapy at 2.4 atmospheres absolute (ATA) develops a seizure. What is the most likely cause?',
        choices: {
          A: 'Nitrogen narcosis',
          B: 'Decompression sickness',
          C: 'Central nervous system oxygen toxicity',
          D: 'Carbon dioxide retention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Seizures during HBO therapy are most commonly caused by central nervous system (CNS) oxygen toxicity, also known as the Paul Bert effect. High partial pressures of oxygen can cause neuronal hyperexcitability leading to generalized tonic-clonic seizures.',
        explanationWrong:
          'Nitrogen narcosis occurs during deep diving with compressed air, not during HBO therapy with pure oxygen. Decompression sickness occurs during ascent, not at treatment depth. CO2 retention is unlikely in a patient breathing 100% oxygen in a pressurized chamber.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 2,
        questionText:
          'A neonate receiving inhaled nitric oxide therapy has a methemoglobin level of 7%. What action should the respiratory therapist take?',
        choices: {
          A: 'Switch to heliox therapy immediately',
          B: 'Increase the iNO dose to compensate for reduced oxygen delivery',
          C: 'Reduce the iNO dose and continue monitoring methemoglobin levels',
          D: 'No action is needed as this level is within normal limits',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Methemoglobin levels above 5% during iNO therapy are concerning and warrant dose reduction. Methemoglobin is formed when NO oxidizes hemoglobin iron from the ferrous to the ferric state, reducing oxygen-carrying capacity. Levels should be maintained below 5%.',
        explanationWrong:
          'Increasing the iNO dose would worsen methemoglobinemia. Switching to heliox is not indicated as heliox treats airway obstruction, not pulmonary hypertension. A methemoglobin level of 7% exceeds the acceptable threshold and requires intervention.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 3,
        questionText:
          'When using heliox with a standard oxygen flowmeter, the actual delivered flow is different from the indicated flow. A flowmeter reads 10 L/min with an 80/20 heliox mixture. What is the approximate actual flow?',
        choices: {
          A: 'Approximately 5 L/min',
          B: 'Approximately 10 L/min',
          C: 'Approximately 12 L/min',
          D: 'Approximately 18 L/min',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Standard oxygen flowmeters are calibrated for oxygen. Because helium is less dense than oxygen, heliox flows faster than the flowmeter indicates. For an 80/20 heliox mixture, the correction factor is approximately 1.8, so a reading of 10 L/min corresponds to an actual flow of about 18 L/min.',
        explanationWrong:
          'The actual flow is higher, not lower or the same as indicated, due to the lower density of the helium-oxygen mixture compared to pure oxygen.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 4,
        questionText:
          'A premature infant born at 26 weeks gestation is intubated and receiving mechanical ventilation. Chest radiograph shows a diffuse ground-glass appearance bilaterally. Which of the following is the most appropriate next intervention?',
        choices: {
          A: 'Administering inhaled albuterol via nebulizer',
          B: 'Administering exogenous surfactant via the endotracheal tube',
          C: 'Starting inhaled nitric oxide at 40 ppm',
          D: 'Placing bilateral chest tubes',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A premature infant at 26 weeks with bilateral ground-glass opacities on chest radiograph is presenting with respiratory distress syndrome (RDS) due to surfactant deficiency. Exogenous surfactant replacement via the ETT is the standard treatment.',
        explanationWrong:
          'Albuterol treats bronchospasm, which is not the primary issue in neonatal RDS. Inhaled nitric oxide treats pulmonary hypertension, not surfactant deficiency. Bilateral chest tubes are indicated for bilateral pneumothoraces, not the diffuse ground-glass pattern of RDS.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 5,
        questionText:
          'A transport ventilator is being set up for a patient with ARDS who requires high levels of PEEP. Which feature is most important when selecting a transport ventilator for this patient?',
        choices: {
          A: 'The ability to deliver and maintain high PEEP levels accurately with adequate flow compensation',
          B: 'A built-in suction device',
          C: 'An integrated capnography display',
          D: 'Battery life exceeding 24 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For an ARDS patient requiring high PEEP, the transport ventilator must be capable of accurately delivering and maintaining the prescribed PEEP level. Inadequate PEEP during transport can cause alveolar derecruitment and clinical deterioration.',
        explanationWrong:
          'While capnography, suction capability, and long battery life are useful features, the most critical requirement for an ARDS patient is the ability to maintain high PEEP levels reliably throughout transport.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 6,
        questionText:
          'During a flexible bronchoscopy, bronchoalveolar lavage (BAL) is performed. What is the primary purpose of BAL?',
        choices: {
          A: 'To deliver aerosolized medications directly to the alveoli',
          B: 'To measure pulmonary compliance in real time',
          C: 'To collect fluid samples from the lower airways for cytological and microbiological analysis',
          D: 'To mechanically dilate stenotic airways',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bronchoalveolar lavage involves instilling and then aspirating sterile saline into a lung segment. The recovered fluid is analyzed for cell counts, cultures, and cytology to diagnose infections, malignancies, and inflammatory conditions.',
        explanationWrong:
          'BAL is a diagnostic procedure, not a method for medication delivery or compliance measurement. Airway dilation is performed using balloon dilation or stent placement, not lavage.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 7,
        questionText:
          'A patient with a chest tube connected to a three-chamber drainage system has tidaling observed in the water-seal chamber. What does this finding indicate?',
        choices: {
          A: 'The chest tube is completely obstructed',
          B: 'The system is functioning normally and the tube is patent',
          C: 'There is a significant air leak in the system',
          D: 'The suction level is set too high',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Tidaling (fluctuation of the water level in the water-seal chamber with respiration) indicates that the chest tube is patent and the system is communicating with the pleural space. The water level rises during inspiration and falls during expiration in a spontaneously breathing patient.',
        explanationWrong:
          'A completely obstructed chest tube would show no tidaling. Continuous bubbling, not tidaling, indicates an air leak. Suction level is reflected in the suction control chamber, not as tidaling in the water-seal chamber.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 8,
        questionText:
          'A home care respiratory therapist is setting up a CPAP device for a patient newly diagnosed with obstructive sleep apnea. Which of the following is most important to address during the initial setup?',
        choices: {
          A: 'Teaching the patient to adjust pressure settings independently',
          B: 'Ensuring the device connects to the home Wi-Fi network',
          C: 'Selecting the most expensive mask available',
          D: 'Proper mask fitting to minimize air leak and maximize patient comfort and adherence',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Proper mask fitting is the single most important factor in CPAP adherence. A poorly fitting mask causes air leaks, skin irritation, and discomfort, all of which significantly reduce patient compliance with therapy.',
        explanationWrong:
          'Patients should not independently adjust prescribed pressure settings. Wi-Fi connectivity for data transmission is helpful but not the priority during initial setup. The most expensive mask is not necessarily the best fit for every patient.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 9,
        questionText:
          'A competent adult patient with a chronic terminal illness refuses intubation and mechanical ventilation. The patient has no advance directive on file. What should the respiratory therapist do?',
        choices: {
          A: 'Respect the patient\'s current refusal as a competent adult has the right to refuse treatment',
          B: 'Intubate the patient against their wishes because there is no advance directive',
          C: 'Wait for family members to arrive before making any decisions',
          D: 'Contact hospital legal counsel before responding to the patient',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A competent adult has the legal and ethical right to refuse any medical treatment, including life-sustaining interventions, regardless of whether an advance directive exists. The respiratory therapist must respect this decision.',
        explanationWrong:
          'Performing treatment against a competent patient\'s wishes constitutes battery. An advance directive is not required for a competent patient to refuse treatment. Delaying for family or legal counsel is unnecessary when the patient is competent and has clearly stated their wishes.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 10,
        questionText:
          'During a cardiac arrest, the respiratory therapist is providing bag-mask ventilation before an advanced airway is placed. What is the recommended compression-to-ventilation ratio for an adult?',
        choices: {
          A: '15:2',
          B: '30:2',
          C: '15:1',
          D: '50:2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Per ACLS guidelines, the recommended compression-to-ventilation ratio for adults without an advanced airway in place is 30:2, meaning 30 chest compressions followed by 2 ventilations.',
        explanationWrong:
          'A 15:2 ratio is used for two-rescuer CPR in pediatric patients. Ratios of 15:1 and 50:2 are not part of standard ACLS recommendations for adults.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 11,
        questionText:
          'A patient is referred for hyperbaric oxygen therapy for carbon monoxide poisoning. The patient\'s carboxyhemoglobin (COHb) level is 32%. What is the primary therapeutic mechanism of HBO in this situation?',
        choices: {
          A: 'HBO decreases the viscosity of the patient\'s blood',
          B: 'HBO increases renal clearance of carbon monoxide',
          C: 'HBO stimulates erythropoietin production',
          D: 'HBO rapidly displaces carbon monoxide from hemoglobin by dramatically increasing dissolved oxygen and the partial pressure of oxygen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'HBO therapy at 2.5-3.0 ATA reduces the half-life of carboxyhemoglobin from approximately 4-6 hours on room air to about 15-23 minutes. The high partial pressure of oxygen competitively displaces CO from hemoglobin and increases dissolved oxygen to maintain tissue oxygenation.',
        explanationWrong:
          'HBO does not significantly affect blood viscosity, renal clearance of CO, or erythropoietin production. The primary mechanism is competitive displacement of CO from hemoglobin binding sites.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 12,
        questionText:
          'When administering surfactant to a neonate, the respiratory therapist observes transient oxygen desaturation and bradycardia. What is the most appropriate action?',
        choices: {
          A: 'Immediately withdraw the endotracheal tube',
          B: 'Administer atropine intravenously',
          C: 'Temporarily pause the surfactant instillation and provide manual ventilation until the infant stabilizes',
          D: 'Increase the rate of surfactant instillation to complete the procedure more quickly',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Transient desaturation and bradycardia are known complications during surfactant administration. The appropriate response is to temporarily halt the instillation, provide manual ventilation with increased FiO2, and resume once the infant has stabilized.',
        explanationWrong:
          'Withdrawing the ETT would remove the airway. Atropine is not indicated for this type of procedural bradycardia. Increasing the instillation rate would likely worsen the adverse effects.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 13,
        questionText:
          'A respiratory therapist is preparing a patient for air medical transport via helicopter. The patient is on a ventilator with an FiO2 of 0.60. At an altitude of 8,000 feet, what adjustment may be needed?',
        choices: {
          A: 'Increase FiO2 to compensate for the lower barometric pressure at altitude',
          B: 'Decrease the tidal volume by 25%',
          C: 'Reduce the PEEP to zero',
          D: 'Switch from volume-controlled to pressure-controlled ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'At higher altitudes, barometric pressure decreases, reducing the partial pressure of inspired oxygen. To maintain adequate PaO2, the FiO2 may need to be increased. Pressurized helicopter cabins may mitigate this but are not universally available.',
        explanationWrong:
          'Decreasing tidal volume or removing PEEP without indication could compromise ventilation and oxygenation. Switching ventilator modes is not specifically required for altitude changes.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 14,
        questionText:
          'During a bronchoscopy, a biopsy is obtained from a suspicious endobronchial lesion. The patient begins to have significant hemoptysis. What should the respiratory therapist have ready?',
        choices: {
          A: 'A chest tube insertion tray',
          B: 'Iced saline for lavage and topical epinephrine to control bleeding',
          C: 'A tracheostomy kit for emergency surgical airway',
          D: 'A high-frequency chest wall oscillation vest',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hemorrhage after bronchoscopic biopsy is managed initially with cold saline lavage and topical vasoconstrictors such as epinephrine. The bronchoscope can also be wedged into the bleeding segment to provide tamponade.',
        explanationWrong:
          'A chest tube is not indicated for endobronchial hemorrhage. A tracheostomy is not the first-line response to post-biopsy bleeding. A chest wall oscillation vest is used for airway clearance and is not relevant to acute hemorrhage management.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 15,
        questionText:
          'A chest tube is accidentally pulled out of a patient\'s chest. What is the respiratory therapist\'s immediate priority?',
        choices: {
          A: 'Reinsert the chest tube immediately',
          B: 'Apply supplemental oxygen via nasal cannula',
          C: 'Obtain a stat chest radiograph before taking any action',
          D: 'Cover the site with a sterile occlusive dressing taped on three sides and monitor for signs of tension pneumothorax',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When a chest tube is accidentally dislodged, the insertion site should be immediately covered with a sterile occlusive dressing taped on three sides. This acts as a one-way valve, allowing air to escape but preventing it from entering. The physician should be notified immediately.',
        explanationWrong:
          'Reinserting a contaminated chest tube creates infection risk and is outside the RT\'s scope. While oxygen and imaging may be needed, the immediate priority is preventing air entry through the open chest wall wound.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 16,
        questionText:
          'A home care patient on a liquid oxygen system reports that the unit is frosting excessively around the fill connector. What is the most likely explanation?',
        choices: {
          A: 'The fill connector gasket is worn or damaged, causing an oxygen leak',
          B: 'The flow rate is set below the minimum',
          C: 'The room temperature is set too high',
          D: 'The humidifier bottle is overfilled',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Excessive frosting around the fill connector of a liquid oxygen system typically indicates a leak at the connection point, usually caused by a worn or damaged gasket. The extremely cold liquid oxygen causes moisture in the air to freeze at the leak site.',
        explanationWrong:
          'Room temperature does not cause localized frosting at the connector. Low flow rates would not produce frosting at the fill connector. An overfilled humidifier is unrelated to frosting at the liquid oxygen unit\'s connector.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is asked to provide a deposition testimony regarding a patient\'s care. Which of the following principles should guide the therapist\'s testimony?',
        choices: {
          A: 'The therapist should speculate on information they do not directly know',
          B: 'The therapist should testify only to facts documented in the medical record and within their direct knowledge',
          C: 'The therapist should discuss the case with other staff before the deposition to align their stories',
          D: 'The therapist should refuse to testify under any circumstances',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In legal proceedings, a respiratory therapist should testify truthfully and limit testimony to facts within their direct knowledge and documented in the medical record. Speculation, conjecture, and coordination of testimony are inappropriate and potentially illegal.',
        explanationWrong:
          'Speculating on unknown information is inappropriate and could constitute perjury. Coordinating stories with colleagues before testimony could be viewed as conspiracy or obstruction. Refusing to testify when legally required could result in contempt of court.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 18,
        questionText:
          'In ACLS, what is the recommended first-line medication for symptomatic bradycardia with a pulse?',
        choices: {
          A: 'Atropine 1 mg IV',
          B: 'Epinephrine 1 mg IV push',
          C: 'Amiodarone 150 mg IV',
          D: 'Lidocaine 1 mg/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Per ACLS guidelines, atropine 1 mg IV is the first-line medication for symptomatic bradycardia with a pulse. It can be repeated every 3-5 minutes to a maximum total dose of 3 mg.',
        explanationWrong:
          'Epinephrine 1 mg IV push is used for cardiac arrest, not symptomatic bradycardia with a pulse. Amiodarone and lidocaine are antiarrhythmic agents used for ventricular tachycardia/fibrillation, not bradycardia.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 19,
        questionText:
          'Which of the following is a known complication of prolonged hyperbaric oxygen therapy sessions?',
        choices: {
          A: 'Hyperkalemia',
          B: 'Thrombocytopenia',
          C: 'Hypothermia',
          D: 'Pulmonary oxygen toxicity manifesting as substernal chest pain and decreased vital capacity',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Prolonged exposure to high partial pressures of oxygen during HBO therapy can cause pulmonary oxygen toxicity (the Lorrain Smith effect), which manifests as substernal chest pain, cough, and a progressive decrease in vital capacity.',
        explanationWrong:
          'Hyperkalemia, thrombocytopenia, and hypothermia are not characteristic complications of HBO therapy. The primary toxicity concerns are CNS toxicity (seizures) and pulmonary toxicity (decreased vital capacity).',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam17.id,
        questionIndex: 20,
        questionText:
          'A patient is receiving heliox via a non-rebreather mask. The respiratory therapist notices the patient is not showing clinical improvement. What is the most likely reason?',
        choices: {
          A: 'The helium concentration is causing bronchospasm',
          B: 'The patient is allergic to helium',
          C: 'Room air entrainment through the mask is diluting the heliox mixture and reducing its therapeutic effectiveness',
          D: 'Heliox is increasing mucus production',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Non-rebreather masks allow significant room air entrainment, which dilutes the heliox mixture with nitrogen-containing room air. This reduces the proportion of helium and diminishes the density-lowering benefit. A tight-fitting mask or closed delivery system is preferred for heliox administration.',
        explanationWrong:
          'Helium is an inert, non-allergenic gas that does not cause bronchospasm or increase mucus production. The lack of improvement is due to dilution of the therapeutic mixture by entrained room air.',
        topic: 'Heliox Therapy',
      },
    ],
  })

  // ─── EXAM 18 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1B,2D,3C,4A,5D,6B,7A,8C,9B,10A,11C,12D,13B,14C,15A,16D,17C,18B,19A,20D
  const exam18 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 18',
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
          'A patient is being evaluated for hyperbaric oxygen therapy for a diabetic foot ulcer. Which of the following assessments is most important to perform before beginning treatment?',
        choices: {
          A: 'Pulmonary function testing with bronchodilator response',
          B: 'Chest radiograph to rule out untreated pneumothorax',
          C: 'A 12-lead ECG to evaluate for atrial fibrillation',
          D: 'Measurement of serum albumin levels',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A chest radiograph is essential before HBO therapy to rule out an untreated pneumothorax, which is an absolute contraindication. The increased pressure during HBO therapy could convert a simple pneumothorax into a life-threatening tension pneumothorax.',
        explanationWrong:
          'While PFTs, ECGs, and albumin levels may be part of a general workup, ruling out pneumothorax is the most critical safety assessment specific to HBO therapy.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is monitoring a neonate on inhaled nitric oxide. The iNO delivery system suddenly malfunctions. What is the immediate concern?',
        choices: {
          A: 'The neonate will develop hyperoxia',
          B: 'The ventilator will begin delivering excessive tidal volumes',
          C: 'Rebound pulmonary hypertension may occur from abrupt iNO withdrawal',
          D: 'The FiO2 will automatically increase to 1.0',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Abrupt discontinuation of iNO can cause severe rebound pulmonary hypertension because the pulmonary vasculature has become dependent on the exogenous nitric oxide. A backup iNO delivery system should always be immediately available.',
        explanationWrong:
          'Hyperoxia, excessive tidal volumes, and automatic FiO2 changes are not direct consequences of iNO system malfunction. The primary danger is the sudden loss of pulmonary vasodilation causing life-threatening rebound pulmonary hypertension.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 3,
        questionText:
          'A physician orders heliox for a pediatric patient with post-extubation stridor. The patient requires an FiO2 of 0.40. Which heliox mixture should the respiratory therapist select?',
        choices: {
          A: 'An 80/20 heliox mixture',
          B: 'An 80/20 mixture with supplemental oxygen blended in',
          C: 'A 60/40 heliox mixture',
          D: 'A 70/30 heliox mixture',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A 60/40 heliox mixture (60% helium, 40% oxygen) delivers an FiO2 of 0.40, meeting the patient\'s oxygen requirement while still providing sufficient helium to reduce gas density and work of breathing.',
        explanationWrong:
          'An 80/20 mixture only provides an FiO2 of 0.20, which is insufficient. Blending supplemental oxygen into an 80/20 mixture would dilute the helium concentration unpredictably. A 70/30 mixture delivers only 30% oxygen, which is below the required 40%.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 4,
        questionText:
          'After surfactant administration to a premature neonate, the respiratory therapist notices a rapid improvement in lung compliance. What ventilator adjustment should be anticipated?',
        choices: {
          A: 'Reduction of peak inspiratory pressure or tidal volume to prevent overdistension',
          B: 'Increasing the respiratory rate to maintain minute ventilation',
          C: 'Switching from mechanical ventilation to CPAP with heliox',
          D: 'Increasing PEEP to 15 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'As surfactant improves lung compliance, the same pressure will deliver larger tidal volumes, risking overdistension and volutrauma. Peak inspiratory pressure or tidal volume settings should be reduced promptly to maintain safe lung-protective ventilation.',
        explanationWrong:
          'Increasing the respiratory rate is not indicated if compliance has improved. Switching immediately to CPAP with heliox is not standard post-surfactant management. Increasing PEEP to 15 cmH2O without indication risks overdistension.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 5,
        questionText:
          'During ground transport, the battery on the transport ventilator fails. What should the respiratory therapist do?',
        choices: {
          A: 'Wait for the ventilator to reboot automatically',
          B: 'Increase the oxygen flow rate on the ventilator',
          C: 'Connect the ventilator to the ambulance\'s AC power outlet',
          D: 'Immediately switch to manual ventilation with a self-inflating bag connected to the oxygen supply',
        },
        correctChoice: 'D',
        explanationCorrect:
          'If the transport ventilator battery fails, the immediate priority is to maintain ventilation. The respiratory therapist should switch to manual bag-valve ventilation with supplemental oxygen while troubleshooting the power issue or connecting to an alternative power source.',
        explanationWrong:
          'Waiting for a reboot risks dangerous periods without ventilation. Increasing oxygen flow does not address the lack of power. While connecting to AC power may be an eventual solution, the immediate action must be to ensure the patient continues to be ventilated.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 6,
        questionText:
          'A physician requests rigid bronchoscopy for removal of an aspirated foreign body in a 3-year-old child. How does the respiratory therapist\'s role differ from flexible bronchoscopy?',
        choices: {
          A: 'The respiratory therapist is not needed during rigid bronchoscopy',
          B: 'The respiratory therapist must be prepared to manage ventilation through the rigid bronchoscope, as it serves as both the airway and the instrument',
          C: 'The respiratory therapist only needs to document the procedure',
          D: 'The respiratory therapist administers surfactant through the rigid bronchoscope',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During rigid bronchoscopy, the bronchoscope itself serves as the airway. The respiratory therapist must manage ventilation through the side port of the rigid bronchoscope, coordinate with the physician, and monitor oxygenation and ventilation throughout the procedure.',
        explanationWrong:
          'The respiratory therapist plays an essential role in rigid bronchoscopy. Their role extends far beyond documentation. Surfactant is not administered through a rigid bronchoscope during foreign body removal.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 7,
        questionText:
          'A patient with a chest tube has drainage of 250 mL/hr of bright red blood. What does this finding suggest?',
        choices: {
          A: 'Active hemorrhage that likely requires surgical intervention',
          B: 'Normal post-operative drainage following thoracic surgery',
          C: 'The chest tube is draining old, accumulated blood',
          D: 'The drainage system is malfunctioning',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Bright red blood draining at a rate of 200 mL/hr or more through a chest tube suggests active intrathoracic hemorrhage. This finding requires immediate physician notification and likely surgical intervention (thoracotomy) to identify and control the bleeding source.',
        explanationWrong:
          'Normal post-operative chest tube drainage is typically serosanguineous and less than 100-200 mL/hr. Old blood would appear dark. The bright red color and high volume indicate active bleeding, not a system malfunction.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 8,
        questionText:
          'A home care patient using a nebulizer compressor reports that the treatment takes much longer than usual and produces a weak mist. What is the most likely cause?',
        choices: {
          A: 'The patient is using the wrong medication',
          B: 'The room humidity is too high',
          C: 'The compressor filter is clogged, reducing airflow output',
          D: 'The medication has expired',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A clogged compressor intake filter restricts airflow, reducing the compressor\'s output pressure and flow. This results in weak aerosol production and prolonged treatment times. Regular filter cleaning or replacement resolves the issue.',
        explanationWrong:
          'Using the wrong medication or expired medication would not affect mist production or treatment time. Room humidity has minimal effect on compressor nebulizer performance. The mechanical issue of a clogged filter is the most likely cause.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 9,
        questionText:
          'A patient with decision-making capacity signs an informed consent form for a bronchoscopy. Which element is NOT required for valid informed consent?',
        choices: {
          A: 'A guarantee of a successful outcome from the physician',
          B: 'Disclosure of the risks and benefits of the procedure',
          C: 'Explanation of alternative treatments',
          D: 'The patient\'s voluntary agreement without coercion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A guarantee of a successful outcome is not an element of informed consent and would be inappropriate. No medical procedure can guarantee success. Valid informed consent requires disclosure of risks, benefits, alternatives, and the patient\'s voluntary agreement.',
        explanationWrong:
          'Disclosure of risks and benefits, explanation of alternatives, and voluntary agreement are all essential elements of valid informed consent as defined by both medical ethics and law.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 10,
        questionText:
          'During ACLS resuscitation, end-tidal CO2 (PETCO2) monitoring is being used. A sudden increase in PETCO2 from 12 mmHg to 40 mmHg during CPR most likely indicates what?',
        choices: {
          A: 'Return of spontaneous circulation (ROSC)',
          B: 'The endotracheal tube has migrated into the esophagus',
          C: 'The ventilation rate is too low',
          D: 'The patient has developed a tension pneumothorax',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sudden, sustained increase in PETCO2 during CPR is one of the earliest and most reliable indicators of return of spontaneous circulation (ROSC). The restored cardiac output delivers accumulated CO2 from the tissues to the lungs for exhalation.',
        explanationWrong:
          'Esophageal intubation would show a very low or absent PETCO2. A low ventilation rate would cause a gradual rise, not a sudden jump. A tension pneumothorax would more likely cause a decrease in PETCO2 due to reduced cardiac output.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 11,
        questionText:
          'Which of the following conditions is an FDA-approved indication for hyperbaric oxygen therapy?',
        choices: {
          A: 'Seasonal allergic rhinitis',
          B: 'Chronic low back pain',
          C: 'Gas gangrene (clostridial myonecrosis)',
          D: 'Gastroesophageal reflux disease',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Gas gangrene (clostridial myonecrosis) is an FDA-approved indication for HBO therapy. The high oxygen levels are directly toxic to anaerobic bacteria such as Clostridium perfringens and enhance neutrophil killing function.',
        explanationWrong:
          'Seasonal allergic rhinitis, chronic low back pain, and GERD are not indications for HBO therapy. Approved indications include decompression sickness, CO poisoning, gas gangrene, chronic non-healing wounds, and radiation tissue damage, among others.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is weaning a neonate from inhaled nitric oxide. The current dose is 5 ppm. What is the recommended next step in the weaning process?',
        choices: {
          A: 'Discontinue iNO immediately from 5 ppm',
          B: 'Increase to 10 ppm before discontinuing',
          C: 'Switch the neonate to sildenafil before discontinuing iNO',
          D: 'Reduce to 1 ppm and monitor oxygenation before final discontinuation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When weaning iNO at doses of 5 ppm or below, the dose should be reduced in 1 ppm decrements to 1 ppm before discontinuation. This gradual approach minimizes the risk of rebound pulmonary hypertension.',
        explanationWrong:
          'Abrupt discontinuation from 5 ppm risks rebound pulmonary hypertension. Increasing the dose before stopping has no therapeutic rationale. While sildenafil may be considered as adjunctive therapy, the standard approach is gradual dose reduction.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 13,
        questionText:
          'A patient with severe croup is placed on heliox therapy. After 30 minutes, the patient\'s stridor has not improved. What should the respiratory therapist consider?',
        choices: {
          A: 'The heliox is likely exacerbating the airway edema',
          B: 'The obstruction may be too severe for heliox to be effective, and the patient may need more definitive airway management',
          C: 'The heliox concentration should be increased to 100% helium',
          D: 'Heliox takes at least 4 hours to show clinical effect',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Heliox reduces work of breathing by lowering gas density, but it does not treat the underlying cause of airway obstruction. If a patient does not respond to heliox within 15-30 minutes, the obstruction may be too severe and more definitive interventions such as racemic epinephrine, corticosteroids, or intubation should be considered.',
        explanationWrong:
          'Heliox does not exacerbate airway edema. Administering 100% helium would eliminate all oxygen delivery. Heliox provides immediate benefit by reducing gas density; it does not require hours to take effect.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 14,
        questionText:
          'The INSURE technique for surfactant delivery stands for which of the following?',
        choices: {
          A: 'Internal Suction, Reintubate, Extubate',
          B: 'Intravenous Surfactant, Reposition, Evaluate',
          C: 'Intubate, Surfactant, Extubate',
          D: 'Inhale, Sedate, Undo blockage, Resume, Evaluate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'INSURE stands for INtubate, SURfactant, Extubate. This technique involves briefly intubating the neonate to administer surfactant through the ETT, then rapidly extubating to non-invasive respiratory support (such as CPAP) to minimize the duration of mechanical ventilation.',
        explanationWrong:
          'The other options do not correctly represent the INSURE acronym. The technique is specifically designed to deliver surfactant while minimizing time on mechanical ventilation.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 15,
        questionText:
          'Which of the following is an advantage of pneumatically powered transport ventilators over electrically powered models?',
        choices: {
          A: 'They provide more precise tidal volume delivery',
          B: 'They do not require battery power and can operate solely on compressed gas',
          C: 'They are lighter and more compact than any electric ventilator',
          D: 'They can deliver a wider range of FiO2 settings',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pneumatically powered transport ventilators operate using the driving pressure of compressed gas and do not require battery or electrical power. This makes them reliable in situations where electrical power is unavailable, though they do consume gas more rapidly.',
        explanationWrong:
          'Electrically powered ventilators generally offer more precise volume delivery and wider FiO2 ranges. Weight and size vary by model and are not inherently different between power types.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 16,
        questionText:
          'During a bronchoscopy, the respiratory therapist is responsible for suctioning secretions through the bronchoscope\'s working channel. Which of the following is a critical consideration?',
        choices: {
          A: 'Applying continuous high suction at all times to keep the field clear',
          B: 'Using sterile water rather than saline for all lavage procedures',
          C: 'Suctioning only when the bronchoscope is being withdrawn from the airway',
          D: 'Using intermittent suction to prevent mucosal damage and maintain visualization',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Intermittent suction should be used during bronchoscopy to prevent mucosal trauma and collapse of airways. Continuous high suction can cause mucosal damage, atelectasis, and loss of visualization from airway collapse.',
        explanationWrong:
          'Continuous high suction risks mucosal injury and airway collapse. Saline, not sterile water, is used for BAL to maintain osmolarity. Suctioning is performed as needed throughout the procedure, not only during withdrawal.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 17,
        questionText:
          'A patient has a chest tube to underwater seal without suction. The physician orders the chest tube to be placed to suction at -20 cmH2O. In a three-chamber system, how is the suction level regulated?',
        choices: {
          A: 'By adjusting the clamp on the chest tube itself',
          B: 'By changing the height of water in the water-seal chamber',
          C: 'By increasing the flow rate of the wall suction until bubbling stops',
          D: 'By adjusting the water level in the suction control chamber to -20 cm',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In a traditional wet three-chamber chest drainage system, the suction level is determined by the height of the water column in the suction control chamber. Filling the suction control chamber to the -20 cm mark sets the maximum suction at -20 cmH2O, regardless of the wall suction pressure.',
        explanationWrong:
          'Clamping the chest tube does not regulate suction and is generally contraindicated. The water-seal chamber serves a different function. The wall suction is set to a level that produces gentle bubbling in the suction control chamber, but the water level determines the actual suction applied.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 18,
        questionText:
          'A home care patient on nocturnal BiPAP therapy reports persistent aerophagia (air swallowing). Which adjustment is most likely to reduce this side effect?',
        choices: {
          A: 'Increasing the IPAP setting',
          B: 'Reducing the IPAP pressure or adjusting the expiratory pressure to minimize the pressure differential',
          C: 'Switching from a nasal mask to a full-face mask',
          D: 'Adding heated humidification to the circuit',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Aerophagia during BiPAP therapy is primarily caused by excessive inspiratory pressure forcing air into the esophagus. Reducing the IPAP or narrowing the pressure support differential (IPAP-EPAP) is the most effective approach to reducing air swallowing.',
        explanationWrong:
          'Increasing IPAP would worsen aerophagia. Switching to a full-face mask may actually increase air swallowing by directing more pressure toward the oropharynx. Heated humidification addresses dryness, not aerophagia.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist discovers that a colleague has been practicing with an expired professional license. What is the therapist\'s legal and ethical obligation?',
        choices: {
          A: 'Report the situation to the appropriate licensing authority and supervisor',
          B: 'Advise the colleague privately and take no further action',
          C: 'Cover the colleague\'s patients until the license is renewed',
          D: 'Ignore the situation as it is the colleague\'s personal responsibility',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Practicing with an expired license is illegal and poses patient safety risks. The respiratory therapist has a legal and ethical duty to report this to the appropriate supervisor and licensing authority to protect patients.',
        explanationWrong:
          'Private advice alone is insufficient given the legal implications. Covering the colleague\'s patients enables continued unlawful practice. Ignoring the situation violates the therapist\'s duty to protect patients.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam18.id,
        questionIndex: 20,
        questionText:
          'During ACLS, a patient in cardiac arrest has received 3 doses of epinephrine and 2 defibrillation attempts for refractory ventricular fibrillation. What antiarrhythmic medication should be considered next?',
        choices: {
          A: 'Atropine 1 mg IV',
          B: 'Verapamil 5 mg IV',
          C: 'Adenosine 12 mg rapid IV push',
          D: 'Amiodarone 300 mg IV bolus',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Per ACLS guidelines, amiodarone 300 mg IV bolus is the first-line antiarrhythmic for shock-refractory ventricular fibrillation or pulseless ventricular tachycardia. A second dose of 150 mg may be given if needed.',
        explanationWrong:
          'Atropine is not recommended for VF/VT. Verapamil is a calcium channel blocker used for supraventricular tachycardia, not VF. Adenosine is used for stable narrow-complex SVT, not cardiac arrest.',
        topic: 'ACLS Respiratory Components',
      },
    ],
  })

  // ─── EXAM 19 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1A,2C,3B,4D,5C,6A,7D,8B,9C,10D,11B,12A,13D,14B,15A,16C,17D,18A,19B,20C
  const exam19 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 19',
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
          'During hyperbaric oxygen therapy, which material poses the greatest fire hazard inside the pressurized chamber?',
        choices: {
          A: 'Petroleum-based skin products and synthetic fabrics that can ignite easily in a high-oxygen environment',
          B: 'Stainless steel medical instruments',
          C: 'Glass medication vials',
          D: 'Cotton hospital gowns',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The hyperbaric chamber contains elevated oxygen concentrations and pressures, creating a highly combustible environment. Petroleum-based products (lotions, lip balm, hair products) and synthetic fabrics are particularly dangerous as they can ignite easily and burn intensely in enriched oxygen.',
        explanationWrong:
          'Stainless steel and glass are non-flammable materials. Cotton is the preferred fabric inside HBO chambers because it is far less combustible than synthetic materials in high-oxygen environments.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 2,
        questionText:
          'A respiratory therapist is monitoring a neonate on iNO therapy and notices the NO2 level has risen to 3 ppm. What is the appropriate action?',
        choices: {
          A: 'No action is needed; 3 ppm is within acceptable limits',
          B: 'Increase the iNO dose to overcome the NO2 effect',
          C: 'Reduce the iNO dose or increase the gas flow to dilute the NO2 below 2 ppm',
          D: 'Switch from iNO to inhaled helium',
        },
        correctChoice: 'C',
        explanationCorrect:
          'NO2 levels should be maintained below 2 ppm during iNO therapy. At 3 ppm, the iNO dose should be reduced and/or the gas flow through the delivery system increased to dilute the NO2 concentration. The source of excessive NO2 formation should also be investigated.',
        explanationWrong:
          'Three ppm exceeds the safe limit of 2 ppm and requires intervention. Increasing the iNO dose would generate more NO2. Inhaled helium does not treat pulmonary hypertension.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 3,
        questionText:
          'A patient with vocal cord dysfunction is being evaluated. Heliox therapy may be beneficial because it addresses which specific aspect of this condition?',
        choices: {
          A: 'Heliox reduces the turbulent airflow through the narrowed glottic opening, decreasing the work of breathing',
          B: 'Heliox relaxes the vocal cord muscles directly',
          C: 'Heliox provides anti-inflammatory effects on the vocal cords',
          D: 'Heliox humidifies the upper airway more effectively than air',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Vocal cord dysfunction creates a narrowed glottic opening that generates turbulent flow. Heliox reduces gas density, converting turbulent flow to more laminar flow through the narrowed area, thereby reducing airway resistance and the work of breathing.',
        explanationWrong:
          'Heliox does not directly relax muscles, provide anti-inflammatory effects, or improve humidification. Its benefit is purely mechanical, related to the reduction of gas density and turbulent flow.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 4,
        questionText:
          'A less invasive surfactant administration (LISA) technique is being used in a NICU. What distinguishes LISA from the traditional INSURE method?',
        choices: {
          A: 'LISA uses a larger endotracheal tube than INSURE',
          B: 'LISA delivers surfactant intravenously',
          C: 'LISA and INSURE are identical procedures with different names',
          D: 'LISA delivers surfactant through a thin catheter while the infant remains on CPAP, avoiding intubation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The LISA technique uses a thin flexible catheter inserted into the trachea under direct laryngoscopy to deliver surfactant while the infant continues to breathe spontaneously on CPAP. Unlike INSURE, intubation with an endotracheal tube is not required.',
        explanationWrong:
          'LISA specifically avoids endotracheal intubation. Surfactant is not delivered intravenously in either technique. LISA and INSURE are distinct methods with different approaches to surfactant delivery.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 5,
        questionText:
          'A respiratory therapist is configuring a transport ventilator for an infant being transferred to a tertiary care center. Which of the following is an essential safety feature for neonatal transport ventilation?',
        choices: {
          A: 'An adult-sized circuit to ensure adequate gas delivery',
          B: 'A minimum PEEP of 10 cmH2O for all neonates during transport',
          C: 'A pressure-relief (pop-off) valve to prevent excessive airway pressures',
          D: 'A built-in nitric oxide delivery system',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A pressure-relief (pop-off) valve is an essential safety feature on neonatal transport ventilators to prevent dangerously high airway pressures that could cause pneumothorax or lung injury in fragile neonatal lungs.',
        explanationWrong:
          'Adult-sized circuits deliver excessive dead space for neonates. A universal PEEP of 10 cmH2O is not appropriate for all neonates. While iNO delivery during transport is sometimes needed, it is not a standard built-in feature of all transport ventilators.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 6,
        questionText:
          'Before a flexible bronchoscopy on a non-intubated patient, the respiratory therapist should ensure which of the following has been administered?',
        choices: {
          A: 'Topical anesthesia (such as lidocaine) to the airway to suppress the gag and cough reflexes',
          B: 'Prophylactic antibiotics',
          C: 'A full dose of neuromuscular blocking agent',
          D: 'Inhaled surfactant',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Topical anesthesia with lidocaine applied to the oropharynx, vocal cords, and trachea is essential before flexible bronchoscopy in non-intubated patients. This suppresses cough and gag reflexes, improving patient tolerance and the safety of the procedure.',
        explanationWrong:
          'Prophylactic antibiotics are not routinely required for bronchoscopy. Neuromuscular blockade is not used during flexible bronchoscopy in non-intubated patients. Inhaled surfactant is not part of bronchoscopy preparation.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 7,
        questionText:
          'A patient with a chest tube on water seal is being prepared for ambulation. The respiratory therapist notices the water level in the water-seal chamber is below the 2-cm mark. What action should be taken?',
        choices: {
          A: 'Proceed with ambulation as the system is functioning normally',
          B: 'Clamp the chest tube before the patient ambulates',
          C: 'Remove the chest tube since drainage appears complete',
          D: 'Add sterile water or saline to the water-seal chamber to restore the water level to the 2-cm mark before ambulation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The water-seal chamber must maintain a proper water level (typically 2 cm) to function as a one-way valve preventing air from entering the pleural space. If the water level is low, sterile water should be added before any patient activity to maintain the seal\'s integrity.',
        explanationWrong:
          'Ambulating with an insufficient water seal risks air entering the pleural space. Clamping the chest tube is generally contraindicated as it can cause tension pneumothorax. Removing the tube based solely on low water level is inappropriate.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 8,
        questionText:
          'A home care patient using an oxygen concentrator lives at an altitude of 6,000 feet. The respiratory therapist should be aware that at this altitude, the concentrator will:',
        choices: {
          A: 'Deliver a higher FiO2 than at sea level',
          B: 'Produce a lower partial pressure of oxygen in the output gas due to reduced atmospheric pressure',
          C: 'Function identically to sea level operation',
          D: 'Require no adjustments as altitude does not affect concentrator performance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'At higher altitudes, the reduced atmospheric pressure means that even though the concentrator may still produce 90-96% oxygen concentration, the partial pressure of that oxygen is lower. Higher flow rates or supplemental oxygen may be needed to achieve adequate oxygenation.',
        explanationWrong:
          'The FiO2 does not increase at altitude. Altitude significantly affects the partial pressure of delivered oxygen, so the concentrator does not function identically to sea level operation. Adjustments may be necessary.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist receives a telephone order from a physician to increase a patient\'s ventilator rate. What is the proper procedure for handling telephone orders?',
        choices: {
          A: 'Implement the order immediately without any documentation',
          B: 'Refuse all telephone orders as they are never valid',
          C: 'Read back the order to the physician for confirmation, document the order with the date, time, physician\'s name, and obtain a co-signature within the required timeframe',
          D: 'Ask another respiratory therapist to verify the order by calling the physician again',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Telephone orders require a read-back confirmation to prevent errors. The order must be documented with the date, time, verbal order designation, physician\'s name, and the therapist\'s signature. The physician must co-sign the order within the facility\'s required timeframe.',
        explanationWrong:
          'Implementing without documentation is a legal liability. Telephone orders are valid when properly handled. Having another therapist call again is not the standard protocol for telephone order verification.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 10,
        questionText:
          'In ACLS, what is the recommended dose and route of epinephrine for a pediatric cardiac arrest?',
        choices: {
          A: 'Epinephrine 1 mg IV regardless of patient weight',
          B: 'Epinephrine 0.1 mg/kg IV',
          C: 'Epinephrine 0.5 mg subcutaneous',
          D: 'Epinephrine 0.01 mg/kg IV/IO (1:10,000 concentration)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Per PALS/ACLS guidelines, the pediatric cardiac arrest dose of epinephrine is 0.01 mg/kg IV/IO using the 1:10,000 (0.1 mg/mL) concentration. This is given every 3-5 minutes during resuscitation.',
        explanationWrong:
          'The adult dose of 1 mg is not appropriate for pediatric patients. A dose of 0.1 mg/kg is ten times the recommended dose and could be harmful. Subcutaneous administration is not appropriate during cardiac arrest due to poor absorption.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 11,
        questionText:
          'Which of the following items must be removed from a patient before entering a monoplace hyperbaric oxygen chamber?',
        choices: {
          A: 'Prescription eyeglasses with metal frames',
          B: 'All electronic devices, hearing aids, and any items that could generate a spark',
          C: 'Hospital identification wristband',
          D: 'Cotton undergarments',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Electronic devices, hearing aids, watches, and any item capable of generating a spark or static electricity must be removed before entering a hyperbaric chamber due to the extreme fire risk in the oxygen-enriched, pressurized environment.',
        explanationWrong:
          'Metal-framed glasses may be allowed depending on facility policy and type. Hospital ID wristbands are typically kept on. Cotton garments are actually preferred over synthetic fabrics in the HBO chamber.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 12,
        questionText:
          'A neonate on iNO therapy has an echocardiogram showing a congenital heart defect with ductal-dependent systemic blood flow. Why is iNO potentially dangerous in this situation?',
        choices: {
          A: 'iNO may reduce pulmonary vascular resistance, increasing pulmonary blood flow at the expense of systemic circulation in ductal-dependent lesions',
          B: 'iNO is chemically incompatible with prostaglandin E1',
          C: 'iNO causes immediate ductus arteriosus closure',
          D: 'iNO has no effect on neonates with congenital heart defects',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In ductal-dependent systemic circulation (such as hypoplastic left heart syndrome), iNO can dangerously reduce pulmonary vascular resistance, diverting blood flow to the lungs and away from the systemic circulation. This can cause cardiovascular collapse.',
        explanationWrong:
          'iNO does not directly close the ductus arteriosus or have chemical incompatibility with prostaglandin E1. iNO does have significant effects in neonates with congenital heart defects, which is why careful echocardiographic evaluation is essential.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 13,
        questionText:
          'A patient receiving heliox therapy via a flow-inflating (anesthesia) bag has an SpO2 that remains stable, but the bag appears to deflate more rapidly than expected. What is the most likely explanation?',
        choices: {
          A: 'The heliox tank is nearly empty',
          B: 'The patient has developed a pneumothorax',
          C: 'The SpO2 reading is falsely elevated',
          D: 'Helium\'s low density causes it to escape more readily through small leaks in the bag and connections',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Helium, being a very small and low-density molecule, escapes more readily through small openings and imperfect seals than oxygen or air. This causes flow-inflating bags to deflate faster than usual when used with heliox, requiring higher flow rates to maintain bag inflation.',
        explanationWrong:
          'A nearly empty tank would show declining pressure on the gauge. Pneumothorax would affect SpO2 and clinical status. The SpO2 reading is not related to bag deflation rate.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 14,
        questionText:
          'Following surfactant administration, a neonate\'s PaO2 increases from 42 mmHg to 85 mmHg within 30 minutes. The FiO2 has not been adjusted. What action is most important?',
        choices: {
          A: 'Administer a second dose of surfactant immediately',
          B: 'Reduce the FiO2 to prevent hyperoxia and potential retinopathy of prematurity',
          C: 'Increase the ventilator rate to capitalize on the improved compliance',
          D: 'Obtain a repeat chest radiograph before making any changes',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After surfactant improves oxygenation, the FiO2 must be reduced promptly to avoid hyperoxia. In premature neonates, hyperoxia is a major risk factor for retinopathy of prematurity (ROP) and other oxygen-related injuries.',
        explanationWrong:
          'A second surfactant dose is not needed when the first dose has produced a good response. Increasing the ventilator rate is not indicated. While a chest radiograph may be obtained, the immediate priority is to reduce FiO2 to prevent oxygen toxicity.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 15,
        questionText:
          'When selecting a transport ventilator for a long-duration interfacility transfer, which gas supply consideration is most critical?',
        choices: {
          A: 'Calculating the total oxygen requirement using the formula: tank pressure times tank factor, divided by flow rate, to ensure adequate supply with a safety margin',
          B: 'Using the largest available oxygen cylinder regardless of transport duration',
          C: 'Relying exclusively on the ambulance\'s built-in oxygen system',
          D: 'Bringing only one spare cylinder as a backup',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Calculating the precise oxygen requirement using the tank duration formula (pressure x tank factor / flow rate) ensures adequate supply for the transport with an appropriate safety margin (typically 1.5-2 times the estimated need).',
        explanationWrong:
          'Using the largest cylinder regardless of need is impractical and inefficient. Relying solely on the ambulance system without backup is risky. A single spare cylinder may be insufficient for unexpected delays.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 16,
        questionText:
          'During a bronchoscopy, the physician identifies a suspicious mass and requests the respiratory therapist to assist with endobronchial ultrasound (EBUS). What is the primary purpose of EBUS during bronchoscopy?',
        choices: {
          A: 'To deliver medications directly to the mass',
          B: 'To ablate the mass using ultrasonic energy',
          C: 'To visualize structures beyond the airway wall and guide transbronchial needle aspiration of lymph nodes or masses',
          D: 'To measure airflow resistance through the bronchi',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Endobronchial ultrasound (EBUS) uses an ultrasound transducer at the tip of the bronchoscope to visualize structures outside the airway wall, including lymph nodes, blood vessels, and masses. This allows for real-time guided transbronchial needle aspiration (TBNA) for tissue sampling.',
        explanationWrong:
          'EBUS is a diagnostic imaging tool, not a medication delivery or ablation device. It does not measure airflow resistance.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 17,
        questionText:
          'A physician orders removal of a chest tube. What assessment finding supports safe removal?',
        choices: {
          A: 'Continuous bubbling in the water-seal chamber',
          B: 'Drainage output exceeding 200 mL per shift',
          C: 'The patient reports ongoing pleuritic chest pain',
          D: 'No air leak for at least 24 hours, minimal drainage, and a chest radiograph showing lung re-expansion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Criteria for safe chest tube removal include absence of air leak for at least 24 hours, drainage less than 100-200 mL per day, and radiographic confirmation of lung re-expansion. These findings indicate that the pleural space pathology has resolved.',
        explanationWrong:
          'Continuous bubbling indicates an ongoing air leak. High drainage output suggests the tube is still needed. Ongoing pleuritic pain may indicate persistent pleural pathology requiring continued drainage.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 18,
        questionText:
          'A home care respiratory therapist discovers that a patient\'s apnea monitor has been alarming frequently due to loose leads rather than true apneic events. What is the best course of action?',
        choices: {
          A: 'Disable the apnea monitor alarms to prevent caregiver anxiety',
          B: 'Educate the caregiver on proper lead placement and skin preparation to reduce false alarms',
          C: 'Remove the apnea monitor from the home permanently',
          D: 'Increase the alarm delay time to 30 seconds',
        },
        correctChoice: 'B',
        explanationCorrect:
          'False alarms from loose leads are best addressed through caregiver education on proper electrode placement, skin preparation, and lead wire management. This maintains monitor safety while reducing unnecessary alarms that can cause alarm fatigue.',
        explanationWrong:
          'Disabling alarms eliminates the safety benefit of the monitor. Removing the monitor is inappropriate if it was prescribed. Increasing the alarm delay to 30 seconds is dangerous as it could miss true apneic events.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is subpoenaed to provide expert witness testimony in a malpractice case. What defines the standard of care the therapist should reference?',
        choices: {
          A: 'The policies of the therapist\'s own hospital',
          B: 'What a reasonable and prudent respiratory therapist with similar training and experience would do under similar circumstances',
          C: 'The most advanced treatment available at academic medical centers',
          D: 'The manufacturer\'s recommendations for equipment use only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The legal standard of care is defined as the level of care, skill, and treatment that a reasonably competent respiratory therapist with similar training and experience would provide under similar circumstances. This is the benchmark used in malpractice cases.',
        explanationWrong:
          'Individual hospital policies may exceed or fall below the standard of care. The most advanced treatments at academic centers exceed the expected standard. Manufacturer recommendations are one component but do not define the complete standard of care.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam19.id,
        questionIndex: 20,
        questionText:
          'During ACLS, a patient achieves ROSC after cardiac arrest. The respiratory therapist should target which PETCO2 range to guide ventilation management?',
        choices: {
          A: 'Less than 10 mmHg',
          B: 'Greater than 50 mmHg',
          C: '35-45 mmHg to maintain normocapnia and avoid both hyperventilation and hypoventilation',
          D: '20-25 mmHg to induce mild hyperventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'After ROSC, PETCO2 should be maintained at 35-45 mmHg (normocapnia). Hyperventilation causes cerebral vasoconstriction, worsening neurological outcomes, while hypoventilation can cause respiratory acidosis and further hemodynamic instability.',
        explanationWrong:
          'A PETCO2 less than 10 mmHg is critically low and suggests inadequate cardiac output. Greater than 50 mmHg indicates hypoventilation. Targeting 20-25 mmHg would constitute harmful hyperventilation that can worsen post-arrest brain injury.',
        topic: 'ACLS Respiratory Components',
      },
    ],
  })

  // ─── EXAM 20 ───────────────────────────────────────────────────────────
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution map: 1C,2B,3D,4A,5B,6D,7C,8A,9D,10B,11A,12C,13B,14D,15C,16A,17B,18C,19A,20D
  const exam20 = await prisma.miniExam.create({
    data: {
      divisionId: TMC_DIVISION_ID,
      title: 'TMC Mini Exam 20',
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
          'A patient undergoing HBO therapy for a chronic radiation injury develops visual changes, reporting worsening near vision (myopia). What should the respiratory therapist communicate to the patient?',
        choices: {
          A: 'This is a sign of permanent retinal damage requiring immediate cessation of HBO',
          B: 'This indicates carbon monoxide retention in the eye',
          C: 'This is a known temporary side effect caused by oxygen-induced changes to the lens, and vision typically returns to baseline after completing treatment',
          D: 'This is unrelated to HBO therapy and requires an ophthalmology referral before continuing',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Transient myopia (nearsightedness) is a well-known side effect of repeated HBO treatments, caused by oxidative changes to the crystalline lens. It is typically reversible within weeks to months after completing the treatment course.',
        explanationWrong:
          'HBO-related myopia is temporary, not permanent retinal damage. It is not caused by carbon monoxide. While ophthalmology follow-up may be appropriate, this is a recognized HBO side effect, not an unrelated condition.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 2,
        questionText:
          'A clinical trial is evaluating inhaled nitric oxide for use in adult ARDS patients. Regarding the evidence for iNO in adult ARDS, which of the following statements is most accurate?',
        choices: {
          A: 'iNO has been proven to significantly reduce mortality in adult ARDS',
          B: 'iNO may transiently improve oxygenation but has not been shown to improve overall mortality in adult ARDS',
          C: 'iNO is contraindicated in all adult patients',
          D: 'iNO is more effective in adults than in neonates',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Multiple clinical trials have shown that while iNO can transiently improve PaO2/FiO2 ratio in adult ARDS, it has not demonstrated a consistent mortality benefit. Its use in adult ARDS remains off-label and is generally reserved as a rescue therapy.',
        explanationWrong:
          'No large trial has shown a mortality benefit for iNO in adult ARDS. iNO is not absolutely contraindicated in adults but lacks evidence of mortality benefit. iNO is most effective and FDA-approved for neonatal PPHN, not adult conditions.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 3,
        questionText:
          'When using heliox with a mechanical ventilator, which potential problem must the respiratory therapist be most aware of?',
        choices: {
          A: 'Heliox causes ventilator circuits to melt',
          B: 'Heliox prevents the ventilator from triggering',
          C: 'Heliox increases the risk of auto-PEEP',
          D: 'Most ventilators inaccurately measure tidal volume and flow when heliox is used because flow sensors are calibrated for air or oxygen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Standard ventilator flow sensors (both hot-wire anemometers and differential pressure pneumotachographs) are calibrated for air or oxygen. The lower density of heliox causes these sensors to underestimate or overestimate flow and tidal volume, potentially leading to inappropriate ventilator management.',
        explanationWrong:
          'Heliox does not melt circuits, is not known to prevent triggering, and actually tends to reduce auto-PEEP by decreasing expiratory flow resistance. The primary concern is inaccurate flow and volume measurements.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 4,
        questionText:
          'A second dose of surfactant is being considered for a neonate with persistent RDS. What is the typical criterion for administering a repeat dose?',
        choices: {
          A: 'The neonate continues to require mechanical ventilation and an FiO2 greater than 0.30-0.40 within 6-12 hours of the first dose',
          B: 'The neonate shows complete resolution of respiratory distress',
          C: 'The first dose was administered more than 1 hour ago regardless of clinical status',
          D: 'The neonate has developed a new pneumothorax',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A repeat dose of surfactant is generally indicated when the neonate continues to show signs of RDS with ongoing mechanical ventilation and elevated FiO2 requirements (typically greater than 0.30-0.40) within 6-12 hours of the initial dose.',
        explanationWrong:
          'Complete resolution of distress means the first dose was effective and a repeat dose is unnecessary. Time alone is not an indication; clinical status guides the decision. A pneumothorax requires chest tube placement, not additional surfactant.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 5,
        questionText:
          'A critically ill patient is being transported by ground ambulance from a community hospital to a trauma center. The transport ventilator has both volume-controlled and pressure-controlled modes. Which mode is generally preferred during transport?',
        choices: {
          A: 'Pressure-controlled ventilation because it compensates for altitude changes',
          B: 'Volume-controlled ventilation because it guarantees a set tidal volume despite changes in patient position and compliance that may occur during transport',
          C: 'Either mode is equally safe as transport ventilators automatically compensate for all variables',
          D: 'Neither mode; all patients should be hand-ventilated during transport',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Volume-controlled ventilation is generally preferred during ground transport because it delivers a consistent tidal volume regardless of changes in patient position, compliance, or resistance that commonly occur during transport. This helps maintain stable minute ventilation.',
        explanationWrong:
          'Pressure-controlled ventilation does not specifically compensate for altitude changes during ground transport. Transport ventilators do not automatically adjust for all variables. Hand ventilation for extended transport is impractical and inconsistent.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 6,
        questionText:
          'A patient is scheduled for a therapeutic bronchoscopy to remove a mucus plug causing lobar atelectasis. What should the respiratory therapist prepare in addition to standard bronchoscopy equipment?',
        choices: {
          A: 'A chest tube insertion kit',
          B: 'A high-frequency chest wall oscillation vest',
          C: 'An incentive spirometer for use during the procedure',
          D: 'Sterile saline for bronchial lavage to help loosen and remove the mucus plug',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For therapeutic bronchoscopy aimed at mucus plug removal, sterile saline for bronchial lavage is essential. The saline is instilled to hydrate and loosen thick mucus plugs, which are then suctioned through the bronchoscope\'s working channel.',
        explanationWrong:
          'A chest tube is not routinely needed for mucus plug removal. A chest wall oscillation vest is not used during bronchoscopy. An incentive spirometer cannot be used during the procedure.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 7,
        questionText:
          'A patient with an empyema has a chest tube in place, but the drainage has become thick and the tube appears to be clotting off. What intervention may the physician order to restore drainage?',
        choices: {
          A: 'Disconnecting the drainage system and flushing the tube with tap water',
          B: 'Removing the chest tube and placing a smaller one',
          C: 'Instilling a fibrinolytic agent (such as alteplase) through the chest tube to break up the fibrinous debris',
          D: 'Applying ice packs to the chest tube insertion site',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Intrapleural fibrinolytic therapy with agents such as alteplase (tPA) or a combination of tPA and dornase alfa can be instilled through the chest tube to dissolve fibrinous debris and loculations in empyema, restoring drainage without the need for surgery.',
        explanationWrong:
          'Flushing with tap water is not sterile and inappropriate. Replacing with a smaller tube would worsen the problem. Ice packs have no effect on chest tube patency.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 8,
        questionText:
          'A home care patient is using a stationary oxygen concentrator and a portable oxygen cylinder for excursions. The patient asks about a portable oxygen concentrator (POC) instead. What is the primary advantage of a POC over portable cylinders?',
        choices: {
          A: 'A POC provides a continuous and unlimited supply of oxygen without the need for cylinder refills or deliveries',
          B: 'A POC delivers a higher FiO2 than compressed gas cylinders',
          C: 'A POC is completely silent during operation',
          D: 'A POC does not require any maintenance or filter changes',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The primary advantage of a portable oxygen concentrator is that it extracts oxygen from ambient air, providing an effectively unlimited supply as long as battery power is available. This eliminates the need for cylinder refills, deliveries, and the concern of running out of oxygen during activities.',
        explanationWrong:
          'Both POCs and cylinders deliver similar effective oxygen. POCs are not silent; they produce some operational noise. POCs do require periodic maintenance including filter cleaning and replacement.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 9,
        questionText:
          'A respiratory therapist is asked to participate in a hospital ethics committee review regarding withdrawal of life support for a patient in a persistent vegetative state. Which ethical principle is primarily at stake when considering withdrawal of care?',
        choices: {
          A: 'Justice',
          B: 'Veracity',
          C: 'Beneficence',
          D: 'Autonomy, as reflected in the patient\'s previously expressed wishes or advance directives',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The principle of autonomy is central to decisions about withdrawal of life support. The patient\'s previously expressed wishes, advance directives, or the substituted judgment of a legally authorized surrogate decision-maker guide the ethical and legal decision-making process.',
        explanationWrong:
          'While beneficence, justice, and veracity are relevant ethical principles, autonomy takes precedence in decisions about withdrawal of care because the decision ultimately rests on what the patient would have wanted.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 10,
        questionText:
          'During ACLS resuscitation, high-quality CPR is being performed. The respiratory therapist notes that the PETCO2 has been consistently below 10 mmHg for 20 minutes despite adequate compressions. What does this suggest?',
        choices: {
          A: 'The patient has achieved ROSC',
          B: 'The prognosis is very poor and may guide decisions about termination of resuscitative efforts',
          C: 'The ventilation rate should be increased significantly',
          D: 'The PETCO2 monitor is malfunctioning',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A persistently low PETCO2 (below 10 mmHg) during CPR despite high-quality compressions indicates very low cardiac output and pulmonary blood flow. After 20 minutes, this finding is a strong prognostic indicator of poor outcome and may support consideration of terminating resuscitative efforts.',
        explanationWrong:
          'ROSC would be indicated by a sudden increase in PETCO2. Increasing ventilation rate would further lower PETCO2. While monitor malfunction is possible, a persistent reading over 20 minutes is more likely a true measurement.',
        topic: 'ACLS Respiratory Components',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 11,
        questionText:
          'What is the maximum recommended treatment pressure for most standard hyperbaric oxygen therapy protocols?',
        choices: {
          A: '3.0 atmospheres absolute (ATA)',
          B: '5.0 ATA',
          C: '1.0 ATA',
          D: '10.0 ATA',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Most clinical HBO therapy protocols use treatment pressures between 2.0 and 3.0 ATA. Pressures above 3.0 ATA significantly increase the risk of CNS oxygen toxicity (seizures) without providing additional therapeutic benefit for most approved indications.',
        explanationWrong:
          'Treatment at 5.0 or 10.0 ATA would create unacceptable risks of oxygen toxicity and barotrauma. Treatment at 1.0 ATA is simply normobaric oxygen therapy, not hyperbaric therapy.',
        topic: 'Hyperbaric Oxygen Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 12,
        questionText:
          'A respiratory therapist is setting up an iNO delivery system for a mechanically ventilated neonate. Where in the ventilator circuit should the iNO be introduced?',
        choices: {
          A: 'At the expiratory limb of the circuit',
          B: 'Directly into the humidifier chamber',
          C: 'At the inspiratory limb proximal to the patient, as close to the patient wye as practical, to minimize contact time with oxygen and reduce NO2 formation',
          D: 'Through the ventilator\'s internal gas blender',
        },
        correctChoice: 'C',
        explanationCorrect:
          'iNO should be introduced into the inspiratory limb as close to the patient as possible. This minimizes the time NO spends in contact with oxygen in the circuit, reducing the formation of toxic NO2. Some delivery systems inject at the ventilator outlet with rapid transit times.',
        explanationWrong:
          'Introducing iNO at the expiratory limb would not deliver it to the patient. Adding it to the humidifier would increase contact time with oxygen. Most ventilators do not have internal iNO blending capability.',
        topic: 'Nitric Oxide Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 13,
        questionText:
          'A patient with severe asthma exacerbation is not responding to standard bronchodilator therapy. Heliox is initiated. Which delivery method provides the most effective heliox administration?',
        choices: {
          A: 'Standard nasal cannula at 4 L/min',
          B: 'A tightly fitting non-rebreather mask with a heliox-specific reservoir system to minimize room air entrainment',
          C: 'Open face tent',
          D: 'Simple face mask at 6 L/min',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A tightly fitting non-rebreather mask with a reservoir system designed for heliox delivery minimizes room air entrainment, maintaining the helium concentration needed for therapeutic benefit. Any room air entrainment dilutes the helium and reduces effectiveness.',
        explanationWrong:
          'A nasal cannula allows excessive room air entrainment during mouth breathing. An open face tent permits significant dilution with room air. A simple face mask also allows substantial room air entrainment, reducing therapeutic effectiveness.',
        topic: 'Heliox Therapy',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 14,
        questionText:
          'A respiratory therapist is involved in a quality improvement project to reduce surfactant administration errors. Which of the following is the most effective strategy?',
        choices: {
          A: 'Relying on individual memory for proper surfactant dosing',
          B: 'Allowing only attending physicians to administer surfactant',
          C: 'Eliminating all surfactant use from the NICU',
          D: 'Implementing a standardized checklist for surfactant preparation, dosing verification, and administration procedure',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Standardized checklists are evidence-based tools that reduce procedural errors by ensuring all critical steps are followed consistently. A surfactant administration checklist would include dose calculation verification, preparation steps, positioning, and monitoring requirements.',
        explanationWrong:
          'Relying on memory increases error risk. Restricting administration to physicians alone does not address procedural errors. Eliminating surfactant would deny neonates a life-saving treatment.',
        topic: 'Surfactant Administration',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 15,
        questionText:
          'During an interhospital neonatal transport, the transport isolette\'s temperature begins to drop. What is the respiratory therapist\'s concern regarding the ventilated neonate?',
        choices: {
          A: 'The neonate will become hyperglycemic',
          B: 'The ventilator will malfunction in cold temperatures',
          C: 'Cold stress increases oxygen consumption and can worsen respiratory distress, potentially requiring increased ventilator support',
          D: 'The transport oxygen supply will freeze',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cold stress in neonates triggers increased metabolic demand and oxygen consumption as the body attempts to generate heat. This can worsen respiratory distress, increase FiO2 requirements, and potentially require escalation of ventilator support.',
        explanationWrong:
          'Cold stress in neonates typically causes hypoglycemia, not hyperglycemia. Modern transport ventilators operate in a range of temperatures. Medical oxygen supply systems do not freeze under normal transport conditions.',
        topic: 'Transport Ventilation',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 16,
        questionText:
          'A respiratory therapist is assisting with a bronchoscopy when the patient develops laryngospasm. What is the most appropriate immediate intervention?',
        choices: {
          A: 'Apply continuous positive airway pressure (CPAP) with 100% oxygen and administer additional topical lidocaine; if unresponsive, a small dose of a short-acting paralytic may be needed',
          B: 'Immediately perform a cricothyrotomy',
          C: 'Withdraw the bronchoscope and wait without any intervention',
          D: 'Administer a large bolus of IV fluid',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Laryngospasm during bronchoscopy is managed by removing the stimulus (partially withdrawing the scope), applying CPAP with 100% oxygen to stent the airway open, and administering additional topical lidocaine. If these measures fail, a small dose of succinylcholine may be needed to break the spasm.',
        explanationWrong:
          'Cricothyrotomy is a last resort, not an immediate intervention. Simply waiting without intervention during a laryngospasm can lead to complete airway obstruction and hypoxia. IV fluid bolus does not treat laryngospasm.',
        topic: 'Bronchoscopy Assistance',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 17,
        questionText:
          'A patient has a pigtail catheter placed for a pneumothorax instead of a traditional large-bore chest tube. What is the primary advantage of a pigtail catheter?',
        choices: {
          A: 'It provides stronger suction than a large-bore tube',
          B: 'It is less invasive and causes less pain and fewer complications while being effective for simple pneumothorax drainage',
          C: 'It can drain larger volumes of fluid than a traditional chest tube',
          D: 'It never requires connection to a drainage system',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Small-bore pigtail catheters (typically 8-14 French) are less invasive than traditional large-bore chest tubes (28-36 French), causing less pain and tissue trauma during insertion. They are effective for drainage of simple pneumothoraces and small effusions.',
        explanationWrong:
          'Pigtail catheters provide less suction capacity than large-bore tubes. They are less effective for large-volume fluid drainage or hemothorax. They still require connection to a drainage system or Heimlich valve.',
        topic: 'Thoracentesis and Chest Tube Management',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 18,
        questionText:
          'A home care patient\'s family reports that the backup alarm on their home ventilator keeps sounding. The respiratory therapist discovers the internal battery has failed. What is the most appropriate action?',
        choices: {
          A: 'Reassure the family that the alarm is a minor nuisance and can be ignored',
          B: 'Disconnect the battery permanently to stop the alarm',
          C: 'Arrange for immediate battery replacement or ventilator swap and ensure the family has an alternative ventilation method (such as a manual resuscitator) until the issue is resolved',
          D: 'Instruct the family to plug the ventilator into a power strip with surge protection',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A failed internal battery on a home ventilator is a critical safety issue. The battery provides backup power during outages. The RT should arrange immediate replacement and ensure the family has a manual resuscitator for emergency backup until the issue is resolved.',
        explanationWrong:
          'The backup battery alarm is a serious safety concern, not a nuisance. Disconnecting the battery removes the safety backup entirely. A surge protector does not address the need for battery backup during power failures.',
        topic: 'Home Care Respiratory Equipment',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is providing care to a patient from a different cultural background who refuses a blood transfusion on religious grounds. Despite the clinical team\'s recommendation, the patient remains firm. What is the ethically appropriate response?',
        choices: {
          A: 'Respect the patient\'s autonomous decision and document the refusal, working with the team to explore alternative treatments',
          B: 'Administer the transfusion anyway because the clinical need overrides patient wishes',
          C: 'Discharge the patient from the hospital',
          D: 'Ask the patient\'s family to override the patient\'s decision',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Patient autonomy is a fundamental ethical principle. A competent patient has the right to refuse any treatment, including life-saving interventions, based on religious or personal beliefs. The therapist must respect this decision, document the refusal, and work with the team on alternatives.',
        explanationWrong:
          'Administering treatment against a competent patient\'s wishes constitutes battery. Discharging the patient is inappropriate and potentially abandonment. Family members cannot override a competent adult patient\'s decision.',
        topic: 'Ethical and Legal Considerations',
      },
      {
        miniExamId: exam20.id,
        questionIndex: 20,
        questionText:
          'During ACLS, a patient with a perfusing rhythm develops polymorphic ventricular tachycardia (torsades de pointes). What is the recommended first-line pharmacological treatment?',
        choices: {
          A: 'Adenosine 6 mg rapid IV push',
          B: 'Procainamide 20 mg/min IV infusion',
          C: 'Amiodarone 150 mg IV over 10 minutes',
          D: 'Magnesium sulfate 1-2 g IV over 5-20 minutes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Magnesium sulfate 1-2 g IV is the first-line pharmacological treatment for torsades de pointes (polymorphic VT associated with QT prolongation). Magnesium stabilizes cardiac cell membranes and suppresses the triggered activity responsible for torsades.',
        explanationWrong:
          'Adenosine is used for SVT, not polymorphic VT. Procainamide can worsen torsades by further prolonging the QT interval. Amiodarone is also a QT-prolonging agent and is not first-line for torsades de pointes.',
        topic: 'ACLS Respiratory Components',
      },
    ],
  })

  console.log('Successfully seeded TMC mini exams 16-20.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
