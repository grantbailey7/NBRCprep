import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SDS_DIVISION_ID = 'cmsm41fwz0003zf54l0h5llrr'

async function main() {
  console.log('Seeding SDS mini exams 26-30...')

  // ─── EXAM 26 ───────────────────────────────────────────
  // Topics: Comprehensive SDS review - mixed PSG interpretation, PAP titration, clinical decision-making
  // Correct answer distribution: A=5(Q2,Q5,Q10,Q14,Q18) B=5(Q1,Q8,Q11,Q16,Q20) C=5(Q3,Q6,Q13,Q17,Q19) D=5(Q4,Q7,Q9,Q12,Q15)
  const exam26 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 26',
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
          'A 58-year-old male with congestive heart failure (EF 30%) undergoes a diagnostic PSG. The study reveals an AHI of 42, with 70% of events classified as central apneas demonstrating a crescendo-decrescendo pattern. What is the most appropriate initial therapy?',
        choices: {
          A: 'CPAP at 10 cmH2O to prevent upper airway collapse',
          B: 'Optimization of cardiac medications and reassessment of sleep-disordered breathing',
          C: 'Adaptive servo-ventilation to address the central apnea pattern',
          D: 'Supplemental oxygen at 2 L/min via nasal cannula',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In patients with heart failure and Cheyne-Stokes respiration, optimizing cardiac function through guideline-directed medical therapy is the recommended first-line approach. Improving cardiac output can significantly reduce central apnea severity. Reassessment after optimization determines whether additional therapy is needed.',
        explanationWrong:
          'CPAP does not effectively treat central apneas caused by Cheyne-Stokes respiration. ASV is contraindicated in patients with symptomatic heart failure and EF below 45% due to the SERVE-HF trial findings showing increased cardiovascular mortality. Supplemental oxygen alone does not adequately address the underlying pathophysiology.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 2,
        questionText:
          'During a split-night study, the technologist notices that the EEG channels are showing high-frequency artifact that corresponds with the patient\'s respiratory rate. Which electrode is most likely the source of this contamination?',
        choices: {
          A: 'An EEG electrode placed near the mastoid that has developed a sweat bridge with the adjacent EMG electrode',
          B: 'The nasal pressure transducer creating electromagnetic interference',
          C: 'A loose ground electrode causing 60 Hz artifact',
          D: 'The pulse oximeter probe generating radiofrequency noise',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A sweat bridge between adjacent electrodes allows electrical signals from one channel to contaminate another. When an EEG electrode near the mastoid develops a sweat bridge with a nearby EMG electrode, respiratory-related muscle activity from accessory respiratory muscles can appear as high-frequency artifact in the EEG tracing that correlates with the breathing cycle.',
        explanationWrong:
          'Nasal pressure transducers do not emit electromagnetic interference significant enough to contaminate EEG channels. A loose ground electrode would produce 60 Hz artifact, not artifact correlated with respiration. Pulse oximetry probes do not generate clinically significant radiofrequency noise that would appear in EEG channels.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 3,
        questionText:
          'A patient on BiPAP 18/12 cmH2O with a backup rate of 14 has an overnight oximetry download showing repetitive desaturation clusters occurring every 90 minutes, each lasting 10-20 minutes with nadirs to 82%. The patient reports that the mask fits well and there are no significant leaks. What is the most likely explanation?',
        choices: {
          A: 'Positional obstructive apneas breaking through the current pressure settings',
          B: 'Inadequate backup rate failing to support ventilation during NREM sleep',
          C: 'REM-related hypoventilation with inadequate pressure support during REM periods',
          D: 'Periodic limb movements causing repetitive arousals and desaturation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The cyclical pattern of desaturation clusters occurring approximately every 90 minutes corresponds to REM sleep periods, which recur with the ultradian sleep cycle. During REM sleep, accessory respiratory muscle atonia can worsen hypoventilation, and the current pressure support (IPAP-EPAP span of 6 cmH2O) may be insufficient to maintain adequate ventilation during these periods.',
        explanationWrong:
          'While positional events are possible, the cyclical 90-minute pattern strongly suggests REM-related events rather than random positional changes. An inadequate backup rate would cause sustained rather than cyclical desaturation. Periodic limb movements do not typically cause the degree or pattern of desaturation described.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 4,
        questionText:
          'A 35-year-old shift worker presents with excessive daytime sleepiness and insomnia. She works rotating 12-hour shifts (7pm-7am) three to four nights per week. Her MSLT shows a mean sleep latency of 6 minutes with no SOREMPs. What is the most appropriate management strategy?',
        choices: {
          A: 'Prescribe modafinil 200 mg before each night shift',
          B: 'Recommend permanent transfer to day shift as the primary treatment',
          C: 'Start melatonin 0.5 mg at the desired sleep time on night shift days',
          D: 'Implement strategic light exposure during the first half of her night shift combined with light avoidance after the shift, and schedule anchor sleep periods',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A multimodal approach using timed bright light exposure during the early portion of the night shift to promote circadian adaptation, combined with light avoidance (dark sunglasses) after the shift, and consistent anchor sleep periods represents the most comprehensive evidence-based approach to shift work disorder. This addresses the underlying circadian misalignment rather than just treating symptoms.',
        explanationWrong:
          'While modafinil can help with alertness, it does not address the underlying circadian disruption and should not be first-line without behavioral interventions. Transferring to day shift may not be feasible and does not teach the patient coping strategies. Melatonin alone does not address the full scope of circadian misalignment in rotating shift workers.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 5,
        questionText:
          'A PSG technologist is reviewing a study and notices that the chin EMG baseline tone during a period scored as REM sleep is comparable to the NREM baseline. The EEG shows low-voltage mixed-frequency activity with sawtooth waves, and rapid eye movements are present. How should this epoch be scored?',
        choices: {
          A: 'Score as stage R because the EEG and EOG criteria are met, with a notation about abnormal REM-related EMG tone',
          B: 'Score as stage N2 because the EMG tone eliminates the possibility of REM sleep',
          C: 'Score as stage W because elevated EMG suggests the patient is awake',
          D: 'Do not score the epoch and mark it as artifact',
        },
        correctChoice: 'A',
        explanationCorrect:
          'According to AASM scoring rules, when EEG and EOG criteria for stage R are clearly met (low-voltage mixed-frequency EEG with sawtooth waves and rapid eye movements), the epoch should be scored as stage R even if chin EMG tone is not at the REM-level low. A notation about the elevated EMG is appropriate, as this finding may be clinically significant (e.g., suggestive of REM sleep behavior disorder).',
        explanationWrong:
          'Elevated EMG alone does not override clear EEG and EOG criteria for REM sleep. The presence of sawtooth waves and rapid eye movements with appropriate EEG background is definitive for stage R. Scoring as wake or discarding the epoch would result in inaccurate staging.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 6,
        questionText:
          'A 72-year-old patient with moderate OSA (AHI 22) and chronic atrial fibrillation has been using CPAP at 9 cmH2O for 3 months. His compliance data shows average usage of 2.8 hours per night with a residual AHI of 3. He reports removing the mask due to frequent nocturia. What is the most appropriate next step?',
        choices: {
          A: 'Increase CPAP pressure to further reduce residual events',
          B: 'Switch to an auto-PAP device to improve comfort',
          C: 'Coordinate with the patient\'s cardiologist to evaluate and manage nocturia, while reinforcing PAP education',
          D: 'Recommend a mandibular advancement device as an alternative therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The primary barrier to adherence is nocturia, not PAP intolerance or inadequate pressure. Nocturia in a patient with atrial fibrillation may be related to atrial natriuretic peptide release or diuretic medication timing. Collaborating with the cardiologist to address this issue while continuing PAP education represents appropriate interdisciplinary care.',
        explanationWrong:
          'The residual AHI of 3 is well-controlled, so increasing pressure is unnecessary. Switching to auto-PAP does not address the nocturia issue causing mask removal. A mandibular advancement device would be a step backward in treatment for a patient whose OSA is well-controlled on CPAP; the adherence barrier needs to be addressed directly.',
        topic: 'Interdisciplinary collaboration scenarios',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 7,
        questionText:
          'During a pediatric PSG on a 4-year-old child, the technologist observes EEG activity showing generalized high-amplitude rhythmic 3 Hz spike-and-wave discharges lasting 8 seconds. The child was lying quietly with eyes open and appeared unresponsive during the event. What should the technologist do?',
        choices: {
          A: 'Score the event as a K-complex and continue recording',
          B: 'Halt the study and call a code blue',
          C: 'Note the event as artifact from electrode pop and replace the electrodes',
          D: 'Document the event as a possible absence seizure, assess the child after the episode, and notify the ordering physician',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Generalized 3 Hz spike-and-wave discharges with concurrent unresponsiveness are the hallmark of absence seizures. The technologist should document the EEG pattern, note the behavioral correlate (unresponsiveness with eyes open), assess the child after the event, and promptly notify the ordering physician. This is an incidental but clinically significant finding during PSG.',
        explanationWrong:
          'K-complexes are isolated biphasic waveforms of NREM sleep, not rhythmic spike-and-wave discharges. A code blue is for cardiopulmonary arrest; absence seizures are not life-threatening emergencies. The described pattern has a characteristic morphology distinct from electrode artifact.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 8,
        questionText:
          'A patient with severe OSA and comorbid COPD (overlap syndrome) is being titrated on CPAP. At 12 cmH2O, the AHI is reduced to 4 but the SpO2 continues to drop to 84% during sleep. What is the most appropriate intervention?',
        choices: {
          A: 'Increase CPAP to 16 cmH2O to improve oxygenation',
          B: 'Add supplemental oxygen via the CPAP circuit while maintaining the current pressure',
          C: 'Switch to BiPAP with a wide pressure support span to augment ventilation',
          D: 'Stop the titration and order arterial blood gases before proceeding',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In overlap syndrome, once obstructive events are adequately controlled (AHI < 5), persistent hypoxemia is likely due to the underlying COPD rather than residual upper airway obstruction. Adding supplemental oxygen through the PAP circuit addresses the COPD-related hypoxemia while the current CPAP pressure continues to treat the OSA component.',
        explanationWrong:
          'Increasing CPAP pressure when the AHI is already well-controlled will not address COPD-related hypoxemia and may worsen patient discomfort. Switching to BiPAP is not indicated when CPAP is adequately controlling obstructive events. Stopping the titration for ABGs delays appropriate treatment that can be initiated during the study.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 9,
        questionText:
          'A 28-year-old female with narcolepsy type 1 on sodium oxybate reports new-onset loud snoring and witnessed apneas. Her BMI has increased from 24 to 31 over the past year. A diagnostic PSG shows an AHI of 28 with predominantly obstructive events. How should sodium oxybate dosing be managed during PAP titration?',
        choices: {
          A: 'Discontinue sodium oxybate 2 weeks before the titration study',
          B: 'Reduce sodium oxybate to half the usual dose on the night of titration',
          C: 'Continue sodium oxybate at the usual dose but delay administration until CPAP is applied',
          D: 'Administer sodium oxybate at the usual dose and time during the titration study to replicate typical sleep conditions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'To achieve a valid titration that reflects the patient\'s real-world sleep conditions, sodium oxybate should be administered at the usual dose and schedule during the titration study. This allows the technologist to determine the CPAP pressure needed under the conditions in which the patient actually sleeps, including any effects the medication may have on upper airway tone or respiratory drive.',
        explanationWrong:
          'Discontinuing sodium oxybate would alter sleep architecture and may precipitate cataplexy or rebound symptoms, producing a study that does not reflect the patient\'s typical sleep. Reducing the dose similarly does not replicate real-world conditions. Delaying administration until after CPAP application may alter the medication\'s effect on sleep architecture and does not mirror home use.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 10,
        questionText:
          'A sleep center is evaluating its CPAP compliance program. Data shows that patients who receive follow-up within the first week of CPAP initiation have significantly higher 90-day adherence rates than those seen at 30 days. Which quality improvement metric best captures this finding?',
        choices: {
          A: 'Time to first follow-up contact after CPAP initiation',
          B: 'Total number of patients started on CPAP per quarter',
          C: 'Average CPAP pressure setting at initiation',
          D: 'Percentage of patients using auto-PAP versus fixed CPAP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Time to first follow-up contact directly measures the variable shown to correlate with improved adherence outcomes. Tracking this metric allows the sleep center to identify gaps in early follow-up and implement process improvements to ensure timely patient contact, which the data demonstrates is the key driver of long-term compliance.',
        explanationWrong:
          'The total number of patients started on CPAP measures volume, not quality of follow-up care. Average pressure setting does not relate to the adherence finding described. The type of PAP device does not address the timing of follow-up, which is the critical variable identified in the data.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 11,
        questionText:
          'A patient presents for a home sleep apnea test (HSAT). The device records nasal airflow, respiratory effort via chest and abdominal belts, SpO2, and body position. The study shows a respiratory event index (REI) of 3 events per hour, but the patient reports severe daytime sleepiness with an Epworth Sleepiness Scale score of 18. What is the recommended next step?',
        choices: {
          A: 'Diagnose the patient as not having OSA and evaluate for other causes of sleepiness',
          B: 'Refer the patient for an in-laboratory PSG because a negative or low-positive HSAT does not rule out OSA in a symptomatic patient',
          C: 'Repeat the HSAT with a different device to confirm the findings',
          D: 'Start a trial of CPAP empirically based on the clinical symptoms',
        },
        correctChoice: 'B',
        explanationCorrect:
          'HSAT has a significant false-negative rate because it uses recording time rather than total sleep time as the denominator, cannot detect arousals, and may underestimate severity in patients with positional OSA or REM-predominant disease. When clinical suspicion remains high despite a negative HSAT, in-laboratory PSG is recommended to definitively evaluate for sleep-disordered breathing.',
        explanationWrong:
          'Accepting a negative HSAT as definitive in a highly symptomatic patient risks missing significant OSA. Repeating the HSAT with a different device does not address the inherent limitations of HSAT methodology. Empiric CPAP without a confirmed diagnosis is not standard practice and bypasses the diagnostic evaluation.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 12,
        questionText:
          'A technologist is setting up a patient for PSG and notices the patient has a vagus nerve stimulator (VNS) implanted for epilepsy. Which of the following is the most important consideration for the study?',
        choices: {
          A: 'The VNS must be deactivated before the study can proceed',
          B: 'Additional EEG channels should be placed to monitor for seizure activity',
          C: 'The EMG channels may show periodic artifact when the VNS cycles on',
          D: 'The VNS will create periodic artifact in the ECG and chin EMG channels that the technologist should document, noting the cycle timing to aid in scoring',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Vagus nerve stimulators deliver periodic electrical impulses (typically 30 seconds on, 5 minutes off) that create characteristic artifact in nearby recording channels, particularly the ECG and chin EMG. Documenting the VNS cycle timing helps scorers distinguish device artifact from true physiological signals and prevents misinterpretation of respiratory or EMG events.',
        explanationWrong:
          'VNS devices should not be deactivated for a sleep study without neurologist involvement, and deactivation is generally unnecessary. While additional EEG channels might be useful, they are not the most important consideration specific to the VNS. Noting only EMG artifact without considering ECG effects and documentation of cycle timing is incomplete.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 13,
        questionText:
          'A patient with treatment-emergent central sleep apnea has been on CPAP for 3 months. Residual central apnea index remains elevated at 15 events per hour despite adequate CPAP pressure for obstructive events. The patient has no cardiac disease (EF 60%). What is the most appropriate next therapy?',
        choices: {
          A: 'Discontinue PAP therapy and prescribe acetazolamide',
          B: 'Lower the CPAP pressure to reduce central events',
          C: 'Switch to adaptive servo-ventilation (ASV)',
          D: 'Add supplemental oxygen to the CPAP circuit',
        },
        correctChoice: 'C',
        explanationCorrect:
          'ASV is indicated for treatment-emergent central sleep apnea that persists despite adequate CPAP therapy, provided the patient does not have symptomatic heart failure with reduced ejection fraction. ASV dynamically adjusts pressure support to stabilize breathing patterns and is the recommended therapy when central apneas do not resolve spontaneously within the first few months of CPAP use.',
        explanationWrong:
          'Discontinuing PAP would leave the obstructive component untreated. Lowering CPAP pressure may allow obstructive events to recur without guaranteeing improvement in central events. Supplemental oxygen does not directly address the ventilatory instability causing central apneas.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 14,
        questionText:
          'A sleep technologist notes that during a titration study, the flow signal from the PAP device shows a pattern of inspiratory flow limitation characterized by a flattened waveform peak despite the absence of scored apneas or hypopneas. The patient\'s SpO2 remains above 92%. What is the significance of this finding?',
        choices: {
          A: 'This represents upper airway resistance that may require a pressure increase to fully eliminate, potentially preventing respiratory effort-related arousals',
          B: 'This is a normal flow pattern on PAP therapy and requires no intervention',
          C: 'This indicates the PAP device is malfunctioning and should be replaced',
          D: 'This pattern suggests the patient has developed central apneas',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inspiratory flow limitation (flattened flow waveform) on the PAP device flow signal indicates residual upper airway resistance. Even without meeting criteria for scored apneas or hypopneas, this flow limitation can cause respiratory effort-related arousals (RERAs) that fragment sleep. Increasing PAP pressure to normalize the inspiratory flow contour (achieving a round waveform) is the appropriate titration response.',
        explanationWrong:
          'A flattened inspiratory flow contour is not a normal finding during adequate PAP therapy; the ideal flow waveform is rounded. This pattern does not indicate device malfunction. Central apneas show absent airflow, not a flattened flow contour with maintained but limited inspiratory flow.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 15,
        questionText:
          'A 50-year-old male with a BMI of 38, hypertension, and type 2 diabetes undergoes a diagnostic PSG that reveals an AHI of 62 with lowest SpO2 of 71%. End-tidal CO2 monitoring shows sustained levels above 50 mmHg during sleep. Which diagnosis best accounts for the complete clinical picture?',
        choices: {
          A: 'Severe obstructive sleep apnea alone',
          B: 'Obstructive sleep apnea with concurrent nocturnal asthma',
          C: 'Central sleep apnea secondary to diabetes-related autonomic neuropathy',
          D: 'Obesity hypoventilation syndrome with concurrent severe obstructive sleep apnea',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The combination of obesity (BMI > 30), sustained elevated CO2 during sleep (hypercapnia above 45 mmHg), and severe OSA is consistent with obesity hypoventilation syndrome (OHS) coexisting with severe OSA. OHS is characterized by daytime hypercapnia in an obese patient that cannot be attributed to another cause. The sustained CO2 elevation distinguishes this from intermittent hypercapnia due to obstructive events alone.',
        explanationWrong:
          'Severe OSA alone would cause intermittent desaturation during events but not sustained hypercapnia. Nocturnal asthma does not typically produce sustained hypercapnia. While autonomic neuropathy can cause central apneas, the predominantly obstructive pattern and sustained CO2 elevation in an obese patient point to OHS with OSA.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 16,
        questionText:
          'A patient using auto-PAP reports that the device feels like it is "breathing for" them at times during the night. Review of the device data shows the auto-PAP reaching maximum pressure settings with pressure oscillations. The patient has no history of central sleep apnea. What is the most likely cause?',
        choices: {
          A: 'The device is detecting Cheyne-Stokes respiration and responding appropriately',
          B: 'Large mask leak is causing the auto-titrating algorithm to misinterpret flow data and escalate pressure inappropriately',
          C: 'The patient has developed obesity hypoventilation syndrome requiring bilevel therapy',
          D: 'The auto-PAP device firmware needs updating',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Large mask leaks distort the flow signal that auto-PAP algorithms use to detect respiratory events. The algorithm may misinterpret leak-related flow changes as obstructive events and respond by increasing pressure, which can further worsen the leak in a positive feedback loop. The pressure oscillations and sensation of the device "breathing for" the patient are classic signs of leak-driven auto-titration artifact.',
        explanationWrong:
          'The patient has no history of CSR, and auto-PAP devices are not designed to treat CSR. Developing OHS would not explain the pressure oscillation pattern described. Firmware issues are an unlikely explanation for this well-recognized clinical scenario of leak-driven pressure escalation.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 17,
        questionText:
          'A 45-year-old female with a diagnosis of fibromyalgia and chronic insomnia is referred for a PSG. The study shows an AHI of 2, sleep efficiency of 58%, prolonged sleep onset latency of 45 minutes, increased stage N1 percentage (25%), and a PLMI of 8/hr. What is the primary sleep disorder contributing to her poor sleep quality?',
        choices: {
          A: 'Obstructive sleep apnea',
          B: 'Periodic limb movement disorder',
          C: 'Chronic insomnia disorder, likely exacerbated by the comorbid fibromyalgia',
          D: 'Alpha-delta sleep intrusion secondary to fibromyalgia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The PSG findings of low sleep efficiency, prolonged sleep onset latency, and increased stage N1 are consistent with chronic insomnia disorder. The AHI of 2 rules out significant OSA, and a PLMI of 8 is below the diagnostic threshold for PLMD (typically >15/hr). Fibromyalgia is well-known to exacerbate insomnia through pain, central sensitization, and altered sleep architecture.',
        explanationWrong:
          'An AHI of 2 is within normal limits and does not support an OSA diagnosis. A PLMI of 8 is below the clinically significant threshold. While alpha-delta sleep can occur in fibromyalgia, the primary findings on this study (poor efficiency, prolonged latency) point to insomnia as the predominant disorder.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 18,
        questionText:
          'A sleep center implements a new PAP compliance program that includes telemonitoring, automated messaging for early non-adherence, and a dedicated respiratory therapist for follow-up calls within 72 hours of PAP initiation. After 6 months, 90-day adherence rates improve from 52% to 71%. Which component of this program is most strongly supported by evidence for improving early PAP adherence?',
        choices: {
          A: 'Early clinician contact within the first week of PAP initiation, as provided by the 72-hour follow-up calls',
          B: 'Automated text messaging systems for patient reminders',
          C: 'Telemonitoring data review by respiratory therapists',
          D: 'Group education classes before PAP initiation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Research consistently demonstrates that early clinician contact within the first 1-7 days of PAP initiation is the single most impactful intervention for improving long-term adherence. Early contact allows identification and resolution of fit, comfort, and pressure issues before negative habits form, and provides crucial psychosocial support during the critical adaptation period.',
        explanationWrong:
          'While automated messaging can be a useful adjunct, evidence supports that direct clinician contact is more effective than automated systems alone. Telemonitoring is a tool that enables timely intervention but is not itself the intervention. Group education classes have shown mixed results and are not as strongly supported as early individualized contact.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 19,
        questionText:
          'A patient with newly diagnosed moderate OSA asks about oral appliance therapy instead of CPAP. She has a Class II malocclusion, 6 missing posterior teeth, and active temporomandibular joint disorder with limited jaw protrusion. What is the most appropriate response?',
        choices: {
          A: 'Refer her to a dental sleep medicine specialist for oral appliance fitting',
          B: 'Recommend an over-the-counter boil-and-bite mandibular advancement device as a trial',
          C: 'Advise that her dental and TMJ conditions are relative contraindications to oral appliance therapy and discuss alternative treatments including CPAP',
          D: 'Recommend a tongue-retaining device instead of a mandibular advancement device',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Active TMJ disorder with limited protrusion, significant missing posterior teeth, and Class II malocclusion are relative contraindications to mandibular advancement device therapy. These conditions increase the risk of treatment failure and dental complications. The patient should be counseled about these limitations and alternative treatments including CPAP should be discussed.',
        explanationWrong:
          'Referring for oral appliance fitting without addressing the contraindications is inappropriate. Over-the-counter devices are not recommended for OSA treatment and would be particularly problematic with her dental conditions. A tongue-retaining device does not address the underlying concern about suitability assessment and should only be considered after comprehensive dental evaluation.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 20,
        questionText:
          'During a PSG, the technologist notices that the patient\'s heart rate drops from 78 bpm to 38 bpm during an obstructive apnea event, then rapidly increases to 92 bpm upon arousal and event termination. This pattern repeats throughout NREM sleep. Which physiological mechanism best explains this finding?',
        choices: {
          A: 'Second-degree heart block triggered by intrathoracic pressure changes',
          B: 'The diving reflex: vagally-mediated bradycardia during the apnea followed by sympathetic surge upon arousal and resumption of breathing',
          C: 'Cardiac ischemia secondary to hypoxemia during the obstructive event',
          D: 'Medication-induced bradycardia unrelated to the respiratory events',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The cyclical heart rate pattern of bradycardia during obstructive apneas followed by tachycardia upon arousal is a classic manifestation of the diving reflex. During the apnea, hypoxemia and absence of lung inflation trigger vagal tone resulting in bradycardia. Upon arousal, sympathetic activation causes an abrupt heart rate increase. This pattern is a recognized cardiovascular consequence of untreated OSA.',
        explanationWrong:
          'While intrathoracic pressure changes do occur during obstructive events, the cyclical bradycardia-tachycardia pattern is specifically attributed to the diving reflex rather than heart block. Cardiac ischemia would not produce this stereotyped, repetitive pattern of rate changes. The consistent correlation with respiratory events rules out a medication-related cause.',
        topic: 'Sleep study data interpretation',
      },
    ],
  })

  // ─── EXAM 27 ───────────────────────────────────────────
  // Topics: Comprehensive SDS review - advanced PAP management, pediatric sleep, regulatory and safety
  // Correct answer distribution: A=5(Q3,Q7,Q12,Q15,Q19) B=5(Q2,Q5,Q9,Q14,Q17) C=5(Q1,Q6,Q11,Q16,Q20) D=5(Q4,Q8,Q10,Q13,Q18)
  const exam27 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 27',
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
          'A 6-year-old child undergoes a diagnostic PSG for suspected sleep-disordered breathing. The study shows an obstructive AHI of 3 events per hour with a nadir SpO2 of 89% and peak ETCO2 of 52 mmHg for 15% of total sleep time. According to pediatric scoring criteria, how should this study be interpreted?',
        choices: {
          A: 'Normal study; pediatric AHI threshold for diagnosis is 5 events per hour',
          B: 'Mildly abnormal based on AHI alone; the CO2 findings are not clinically significant',
          C: 'Abnormal study indicating obstructive sleep-disordered breathing with significant obstructive hypoventilation based on both the AHI and the ETCO2 criteria',
          D: 'Indeterminate; a repeat study is needed before any clinical determination',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In pediatric sleep medicine, an obstructive AHI greater than 1 event per hour is considered abnormal. Additionally, ETCO2 above 50 mmHg for more than 10% of total sleep time is considered significant obstructive hypoventilation. This child meets both criteria, indicating clinically significant obstructive sleep-disordered breathing that warrants treatment.',
        explanationWrong:
          'The pediatric threshold for abnormal obstructive AHI is 1 event per hour, not 5. The CO2 findings are clinically significant and represent obstructive hypoventilation. The study is clearly abnormal and does not require repetition for clinical determination.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 2,
        questionText:
          'A patient with severe OSA is started on auto-PAP with a pressure range of 5-20 cmH2O. After 2 weeks, the device data shows 95th percentile pressure of 17 cmH2O, median pressure of 14 cmH2O, residual AHI of 2, and average daily usage of 6.5 hours. The patient complains of aerophagia and abdominal bloating. What is the most appropriate adjustment?',
        choices: {
          A: 'Switch to a fixed CPAP at 14 cmH2O',
          B: 'Narrow the auto-PAP range to 10-16 cmH2O to reduce peak pressure exposure while maintaining efficacy',
          C: 'Lower the maximum pressure to 12 cmH2O',
          D: 'Add a heated humidifier to reduce aerophagia',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Narrowing the auto-PAP range by raising the minimum (reducing time at low ineffective pressures) and capping the maximum at a level slightly below the current 95th percentile can reduce aerophagia while maintaining therapeutic efficacy. Setting the range at 10-16 limits peak pressure exposure that contributes to air swallowing while ensuring adequate treatment pressure based on the median pressure data.',
        explanationWrong:
          'Switching to fixed CPAP at the median pressure may leave the patient undertreated during periods requiring higher pressure. Lowering maximum to 12 cmH2O is too aggressive given the median pressure is 14 cmH2O and would likely result in inadequate treatment. Humidification does not address aerophagia, which is primarily a pressure-related phenomenon.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 3,
        questionText:
          'A polysomnography laboratory is performing quality assurance on its scoring consistency. Inter-scorer reliability analysis reveals high agreement for staging N3 and REM sleep but poor agreement for distinguishing between hypopneas scored with the 3% desaturation rule versus the arousal-associated rule. What is the most effective intervention?',
        choices: {
          A: 'Conduct a focused training session on the AASM recommended versus acceptable hypopnea scoring rules and establish a single laboratory-wide standard',
          B: 'Assign only the most experienced technologist to score all studies',
          C: 'Implement automatic computer scoring for hypopneas to eliminate human variability',
          D: 'Change all scoring to use only the 4% desaturation rule to simplify the process',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Poor inter-scorer reliability for hypopneas when multiple scoring rules are in use is best addressed by standardizing the scoring criteria across the laboratory and providing targeted education. Establishing a single laboratory-wide standard (either the recommended 3% desaturation/arousal rule or the acceptable 4% rule) with focused training ensures consistent application and improves reliability.',
        explanationWrong:
          'Having only one technologist score all studies is not sustainable and does not address the underlying knowledge gap. Computer scoring still requires human oversight and does not solve the training issue. Defaulting to the 4% rule alone might simplify scoring but does not address the training gap and may not align with referring physician preferences or accreditation standards.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 4,
        questionText:
          'A 62-year-old patient with Parkinson disease is referred for PSG due to violent dream-enactment behavior. The study confirms REM sleep without atonia and shows complex motor behaviors during REM. The patient also has an AHI of 18 with predominantly obstructive events. What is the most important consideration when initiating PAP therapy?',
        choices: {
          A: 'Use the lowest possible CPAP pressure to avoid worsening RBD symptoms',
          B: 'Start BiPAP instead of CPAP to allow for lower expiratory pressures',
          C: 'Add clonazepam before starting any PAP therapy to control RBD first',
          D: 'Ensure a safe sleeping environment and consider a full-face mask, as dream-enactment behaviors may dislodge a nasal mask during REM sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Patients with RBD exhibit complex motor behaviors during REM sleep that can dislodge nasal masks or nasal pillow interfaces. A full-face mask may be more secure during these episodes. Additionally, ensuring bed safety (padded rails, removing bedside hazards) is critical. PAP therapy may actually improve RBD by consolidating REM sleep and reducing arousals.',
        explanationWrong:
          'The CPAP pressure should be set to adequately treat the OSA regardless of RBD; lower pressure does not mitigate dream-enactment behaviors. BiPAP is not specifically indicated here. While clonazepam or melatonin may be considered for RBD management, delaying OSA treatment to address RBD first is not necessary; both can be managed concurrently.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 5,
        questionText:
          'A patient using CPAP at 11 cmH2O with a heated humidifier reports recurrent sinus congestion and "rainout" (condensation in the tubing) despite adjusting humidifier settings. Room temperature is 68°F. What equipment modification would best resolve this issue?',
        choices: {
          A: 'Increase the humidifier temperature setting to maximum',
          B: 'Add a heated tubing (climateline) to maintain air temperature throughout the circuit and prevent condensation',
          C: 'Switch to a chin strap to reduce mouth breathing and decrease humidification needs',
          D: 'Place the CPAP device on the floor to lower the tubing below the mask level',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Heated tubing maintains the air temperature throughout the delivery circuit, preventing the temperature differential between the humidifier outlet and the mask that causes condensation (rainout). This allows adequate humidification to reach the patient without water accumulating in the tubing, which is the most effective solution for this common problem.',
        explanationWrong:
          'Increasing the humidifier temperature to maximum would actually worsen rainout by producing more moisture that condenses in the cool tubing. A chin strap does not address the condensation issue. Placing the device on the floor may allow gravity drainage of condensation toward the device but does not prevent the condensation from forming and can create infection control concerns.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 6,
        questionText:
          'A patient with narcolepsy type 2 on modafinil 400 mg daily reports persistent sleepiness with an ESS of 16. She has been compliant with scheduled naps and sleep hygiene. Her most recent PSG shows an AHI of 1 and no significant findings. What is the most appropriate next pharmacological step?',
        choices: {
          A: 'Add methylphenidate to the modafinil regimen',
          B: 'Discontinue modafinil and start sodium oxybate',
          C: 'Add solriamfetol or switch to pitolisant as an adjunct or alternative wake-promoting agent',
          D: 'Increase modafinil to 600 mg daily',
        },
        correctChoice: 'C',
        explanationCorrect:
          'When modafinil at maximum recommended dose (400 mg) is insufficient, adding or switching to a different mechanism wake-promoting agent is appropriate. Solriamfetol (a dopamine/norepinephrine reuptake inhibitor) and pitolisant (a histamine H3 receptor inverse agonist) offer different mechanisms of action and are FDA-approved for excessive daytime sleepiness in narcolepsy, providing options when modafinil alone is inadequate.',
        explanationWrong:
          'Adding methylphenidate to modafinil combines two stimulant mechanisms with increased side effect risk without clear evidence of benefit. Sodium oxybate is primarily indicated for narcolepsy type 1 with cataplexy and may not address daytime sleepiness as effectively in type 2. Increasing modafinil beyond 400 mg exceeds the recommended maximum dose without evidence of additional benefit.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 7,
        questionText:
          'During a PAP titration, a technologist is using the device\'s built-in flow signal to monitor for residual events. The flow tracing shows periodic reductions in flow amplitude lasting 12 seconds each, occurring 22 times per hour, but the thermal airflow sensor shows no corresponding signal reduction. What is the most likely explanation?',
        choices: {
          A: 'The PAP device flow signal is detecting cardiogenic oscillations that mimic flow reduction, and the thermal sensor is correctly showing no true respiratory events',
          B: 'The thermal sensor is malfunctioning and should be replaced',
          C: 'The patient has central apneas that are only detectable on the pneumotachograph signal',
          D: 'The flow reductions represent artifact from the PAP device motor cycling',
        },
        correctChoice: 'A',
        explanationCorrect:
          'PAP device flow signals (pneumotachograph-derived) are highly sensitive and can detect cardiogenic oscillations - small flow changes caused by cardiac contraction transmitted through the chest. These oscillations can be misinterpreted as flow reductions. The thermal airflow sensor, being less sensitive to small flow changes, does not register these cardiac-related oscillations. This discrepancy indicates artifact rather than true respiratory events.',
        explanationWrong:
          'Thermal sensor malfunction would not selectively miss events that correspond to the cardiac cycle. True central apneas would show absent flow on both the PAP device signal and the thermal sensor. PAP device motor cycling occurs at a different frequency and does not produce the pattern described.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 8,
        questionText:
          'A sleep center is transitioning from paper-based patient education to a digital engagement platform. A respiratory therapist is developing content for a new PAP patient onboarding module. Which educational approach has the strongest evidence for improving PAP adherence?',
        choices: {
          A: 'Detailed technical information about how PAP devices work mechanically',
          B: 'Comprehensive written materials covering all possible complications of untreated OSA',
          C: 'Video testimonials from other patients describing their treatment journey',
          D: 'Interactive troubleshooting guides addressing the most common first-week challenges (mask fit, pressure discomfort, nasal dryness) with actionable solutions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Evidence-based PAP education focuses on anticipating and addressing practical barriers to adherence. Interactive troubleshooting guides that address common first-week challenges with specific solutions empower patients to self-manage problems during the critical early adaptation period, which is the strongest predictor of long-term adherence. Practical, actionable content is more effective than passive information delivery.',
        explanationWrong:
          'Technical device information, while interesting, does not directly address adherence barriers. Comprehensive complication lists can increase anxiety without improving practical skills. While patient testimonials can be motivating, they do not provide the actionable problem-solving skills needed during the early PAP adaptation period.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 9,
        questionText:
          'A 40-year-old male with a BMI of 29 and moderate OSA (AHI 24) underwent a successful CPAP titration at 10 cmH2O. He is interested in an oral appliance instead. His dentist confirms adequate dentition and jaw protrusion capacity. How should the response to oral appliance therapy be monitored?',
        choices: {
          A: 'Clinical symptom assessment alone is sufficient if the patient reports improvement',
          B: 'A follow-up PSG or HSAT with the oral appliance in place should be performed after the appliance is optimally adjusted to verify efficacy',
          C: 'Annual questionnaires about daytime sleepiness are adequate for long-term monitoring',
          D: 'Overnight oximetry alone is sufficient to verify treatment adequacy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'AASM guidelines recommend objective verification of oral appliance efficacy with a follow-up sleep study (PSG or HSAT) performed with the appliance in place after optimal dental adjustment. Subjective improvement alone is insufficient because patients may experience symptomatic improvement without adequate reduction in the AHI, leaving them at continued cardiovascular risk.',
        explanationWrong:
          'Clinical symptom assessment alone is insufficient because subjective improvement does not always correlate with objective control of sleep-disordered breathing. Annual questionnaires do not provide objective physiological data about residual events. Overnight oximetry alone misses non-desaturating events and does not provide a complete assessment of treatment efficacy.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 10,
        questionText:
          'A commercial truck driver with severe OSA (AHI 48) has been on CPAP for 6 months. His compliance data shows consistent usage of 7+ hours nightly with residual AHI of 2. He asks what documentation he needs for his DOT medical examination. What is the most appropriate guidance?',
        choices: {
          A: 'A letter from his primary care physician stating he is medically fit to drive',
          B: 'His CPAP compliance report alone is sufficient documentation',
          C: 'A repeat PSG showing resolution of OSA is required',
          D: 'A compliance report showing adequate daily usage (typically 4+ hours on 70% of nights), a statement from his treating physician regarding treatment adherence and clinical improvement, and subjective assessment of sleepiness',
        },
        correctChoice: 'D',
        explanationCorrect:
          'DOT medical certification for commercial drivers with OSA requires documentation of adequate CPAP compliance (generally defined as 4+ hours per night on at least 70% of nights), physician attestation of treatment adherence and clinical stability, and assessment of residual sleepiness. This comprehensive documentation supports the medical examiner\'s determination of fitness to drive.',
        explanationWrong:
          'A general fitness letter from a PCP without specific sleep medicine documentation is insufficient. Compliance data alone without physician assessment and sleepiness evaluation does not meet DOT requirements. A repeat PSG is not required when compliance data demonstrates adequate treatment.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 11,
        questionText:
          'A sleep technologist performing a titration study notices that each time the CPAP pressure increases by 1 cmH2O, the patient has a brief arousal lasting 5-8 seconds before returning to sleep. After the arousal, the obstructive events resolve at the new pressure. How should the technologist manage the titration?',
        choices: {
          A: 'Increase pressure in 2 cmH2O increments to reach the target pressure faster',
          B: 'Stop increasing pressure because the arousals indicate the patient cannot tolerate higher pressures',
          C: 'Continue the standard titration protocol, as brief arousals with pressure changes are expected and do not indicate intolerance if the patient returns to sleep quickly',
          D: 'Switch to BiPAP to eliminate the arousals associated with pressure changes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Brief arousals (5-15 seconds) in response to pressure changes during CPAP titration are common and expected. If the patient returns to sleep promptly after each adjustment, these transient arousals do not constitute treatment intolerance. The standard titration protocol should continue with appropriate intervals between pressure increases to allow the patient to stabilize at each new level.',
        explanationWrong:
          'Increasing pressure in 2 cmH2O increments deviates from standard titration protocols and may cause more disruptive arousals. Stopping the titration prematurely would leave the patient undertreated. Switching to BiPAP is not indicated for brief, self-resolving arousals associated with normal pressure adjustments.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 12,
        questionText:
          'A patient with obstructive sleep apnea and comorbid insomnia (COMISA) has failed CPAP therapy due to poor adherence despite multiple mask changes and pressure adjustments. Which evidence-based treatment approach should be recommended next?',
        choices: {
          A: 'Cognitive behavioral therapy for insomnia (CBT-I) delivered concurrently with a structured PAP reintroduction program',
          B: 'Hypnotic medication to improve sleep initiation and facilitate CPAP use',
          C: 'Mandibular advancement device as a permanent alternative to CPAP',
          D: 'PAP-nap desensitization program without addressing the insomnia component',
        },
        correctChoice: 'A',
        explanationCorrect:
          'COMISA (comorbid insomnia and OSA) requires integrated treatment addressing both conditions. Evidence shows that CBT-I improves sleep quality and reduces hyperarousal, which in turn facilitates CPAP acceptance and adherence. Combining CBT-I with structured PAP reintroduction addresses both the insomnia barrier to CPAP use and the underlying sleep-disordered breathing.',
        explanationWrong:
          'Hypnotic medication may mask insomnia symptoms without addressing the cognitive and behavioral factors that impair CPAP adherence. Switching to an oral appliance abandons first-line therapy without addressing the insomnia that contributed to CPAP failure. PAP-nap desensitization without treating the insomnia component addresses only half of the problem.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 13,
        questionText:
          'A PSG on a 55-year-old male shows repetitive episodes during NREM sleep where the nasal pressure signal shows flattening with increasing respiratory effort on the esophageal pressure channel, followed by arousals, but no 3% or greater desaturation accompanies the events. These episodes occur 18 times per hour. How should these events be classified?',
        choices: {
          A: 'Obstructive hypopneas using the recommended AASM rule',
          B: 'Obstructive apneas with an unusual presentation',
          C: 'Normal breathing variation that does not require scoring',
          D: 'Respiratory effort-related arousals (RERAs)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'RERAs are defined as sequences of breaths lasting at least 10 seconds characterized by increasing respiratory effort or flattening of the nasal pressure waveform that do not meet criteria for apnea or hypopnea but lead to an arousal from sleep. Without a 3% or greater desaturation, these events do not meet the recommended hypopnea rule criteria but represent clinically significant upper airway resistance events.',
        explanationWrong:
          'Without a 3% desaturation or arousal-associated 30% flow reduction meeting hypopnea criteria, these events cannot be scored as hypopneas under standard rules. They are not apneas because airflow continues. They are not normal breathing variation because they demonstrate increasing respiratory effort with arousal.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 14,
        questionText:
          'A 30-year-old pregnant woman in her third trimester is referred for evaluation of loud snoring and witnessed apneas. She has no prior history of sleep-disordered breathing. A home sleep test shows an REI of 12 events per hour. What is the most appropriate treatment approach?',
        choices: {
          A: 'Defer treatment until after delivery since sleep apnea in pregnancy typically resolves postpartum',
          B: 'Initiate CPAP therapy with close follow-up, as untreated OSA in pregnancy is associated with adverse maternal and fetal outcomes',
          C: 'Start positional therapy alone since most pregnancy-related OSA is supine-predominant',
          D: 'Prescribe an oral appliance as first-line therapy due to better comfort during pregnancy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Untreated OSA during pregnancy is associated with increased risk of gestational hypertension, preeclampsia, gestational diabetes, and adverse fetal outcomes including low birth weight and preterm delivery. CPAP is the recommended treatment for moderate OSA in pregnancy, with close follow-up to adjust pressure as the pregnancy progresses and the patient\'s weight and anatomy change.',
        explanationWrong:
          'Deferring treatment exposes the mother and fetus to the documented risks of untreated OSA during pregnancy. Positional therapy alone may be insufficient for moderate OSA. Oral appliances are not first-line therapy for moderate OSA and pregnancy-related dental changes may affect appliance fit and tolerability.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 15,
        questionText:
          'A patient complains of difficulty exhaling against CPAP pressure of 12 cmH2O. The obstructive events are well-controlled at this pressure. Which PAP feature would best address this complaint while maintaining treatment efficacy?',
        choices: {
          A: 'Expiratory pressure relief (EPR/C-Flex) which reduces pressure during expiration by 1-3 cmH2O',
          B: 'Switching to auto-PAP with a range of 4-12 cmH2O',
          C: 'Adding a ramp feature starting at 4 cmH2O',
          D: 'Reducing the fixed pressure to 10 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Expiratory pressure relief (marketed as EPR, C-Flex, or similar names by different manufacturers) specifically addresses the sensation of exhaling against pressure by lowering the pressure during the expiratory phase by 1-3 cmH2O while maintaining the full therapeutic pressure during inspiration. This preserves efficacy for treating obstructive events while improving comfort.',
        explanationWrong:
          'Auto-PAP with a lower minimum may not maintain adequate pressure when events are occurring. A ramp feature only helps at sleep onset and does not address the ongoing expiratory discomfort throughout the night. Reducing fixed pressure may allow obstructive events to return.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 16,
        questionText:
          'A 14-year-old adolescent presents with a delayed sleep phase pattern, sleeping from 2 AM to 10 AM on weekdays (when school starts at 8 AM) and 3 AM to 12 PM on weekends. Actigraphy confirms the pattern over 2 weeks. Sleep duration when allowed to sleep freely is 8.5 hours with normal sleep quality. What is the most appropriate initial treatment?',
        choices: {
          A: 'Prescribe zolpidem 5 mg at 10 PM to induce earlier sleep onset',
          B: 'Recommend strict sleep restriction limiting total sleep time to 6 hours to build sleep pressure',
          C: 'Implement evening light restriction with morning bright light therapy (10,000 lux for 30 minutes upon waking) combined with low-dose melatonin (0.5-1 mg) administered 4-5 hours before desired sleep time',
          D: 'Chronotherapy advancing the sleep phase by 3 hours every 2 days until the desired bedtime is reached',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The combination of timed bright light exposure upon waking (to advance the circadian clock via the phase-response curve), evening light restriction (to avoid circadian delays from blue light), and low-dose melatonin administered 4-5 hours before the desired sleep time (to promote phase advance via the melatonin phase-response curve) is the first-line evidence-based treatment for delayed sleep-wake phase disorder.',
        explanationWrong:
          'Hypnotic medications are not appropriate for circadian rhythm disorders in adolescents and do not address the underlying circadian misalignment. Severe sleep restriction in an adolescent is inappropriate and potentially harmful. Chronotherapy (progressive delay) is logistically difficult, may cause further circadian disruption, and carries risk of developing non-24-hour sleep-wake disorder.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 17,
        questionText:
          'A patient with moderate OSA has been successfully treated with CPAP at 9 cmH2O for 2 years. He has gained 30 pounds and now reports recurrence of snoring, witnessed apneas, and daytime sleepiness despite continued CPAP use. His compliance download shows 6.8 hours average use with a residual AHI of 14. What is the most appropriate next step?',
        choices: {
          A: 'Reassure the patient that the CPAP is working adequately',
          B: 'Perform a repeat PAP titration study to determine a new optimal pressure setting',
          C: 'Increase the CPAP pressure empirically by 2 cmH2O',
          D: 'Switch to an oral appliance since CPAP appears to have lost efficacy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Significant weight gain can increase the severity of OSA and the pressure requirements for effective CPAP treatment. With a residual AHI of 14 indicating inadequate treatment at the current pressure, a repeat PAP titration study is indicated to determine the new optimal pressure. This is preferable to empiric pressure adjustments, which may be insufficient or excessive.',
        explanationWrong:
          'A residual AHI of 14 is not adequately treated; reassurance is inappropriate. Empiric pressure increases without systematic titration may not achieve optimal settings and risk over-pressurization. Switching to an oral appliance for a patient with now-worsened OSA that was previously well-controlled on CPAP is a step backward in treatment.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 18,
        questionText:
          'During a PSG, a patient has a sustained heart rate of 44 bpm with prolonged sinus pauses of up to 4.2 seconds occurring exclusively during REM sleep. The patient has no cardiac history and takes no cardiac medications. SpO2 remains above 90% during these episodes. What is the appropriate course of action?',
        choices: {
          A: 'Wake the patient immediately and call emergency services',
          B: 'Administer supplemental oxygen and continue the study',
          C: 'Score the events as normal REM-related vagal tone variations and take no action',
          D: 'Document the findings thoroughly, continue the study while monitoring the patient, and ensure the results are communicated urgently to the ordering physician for cardiology referral',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sinus pauses exceeding 2.5-3 seconds during sleep warrant clinical attention and cardiology evaluation, even when occurring during REM sleep where vagal tone is normally increased. While not an immediate emergency in an otherwise stable, asymptomatic patient with adequate oxygenation, these findings are clinically significant and require documentation, continued monitoring, and urgent physician notification for appropriate follow-up.',
        explanationWrong:
          'Waking the patient and calling emergency services is an overreaction for an asymptomatic, hemodynamically stable patient. Supplemental oxygen does not address a cardiac conduction issue. Dismissing pauses over 4 seconds as normal REM-related variation is inappropriate; pauses of this duration exceed the range of normal physiological variation and require cardiac evaluation.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 19,
        questionText:
          'A respiratory therapist is evaluating a patient who had a hypoglossal nerve stimulator (Inspire device) implanted 3 months ago for moderate-to-severe OSA after CPAP failure. The patient reports improvement in snoring but continued daytime sleepiness with ESS of 14. A post-implant drug-induced sleep endoscopy (DISE) shows adequate tongue base protrusion. What should be recommended?',
        choices: {
          A: 'A repeat PSG with the device activated to objectively assess residual sleep-disordered breathing and determine if voltage adjustment is needed',
          B: 'Addition of CPAP therapy in combination with the hypoglossal nerve stimulator',
          C: 'Removal of the device since it is not adequately treating the patient\'s symptoms',
          D: 'Prescribing modafinil for residual sleepiness without further evaluation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'After hypoglossal nerve stimulator implantation, objective assessment with an in-laboratory PSG with the device activated is necessary to evaluate residual sleep-disordered breathing. The DISE shows adequate mechanical response, but the continued sleepiness may indicate residual events that require voltage adjustment or may have a different etiology. Objective data is essential before concluding treatment failure.',
        explanationWrong:
          'Combining CPAP with the stimulator is not standard practice without first establishing that the device needs augmentation. Removing the device based on symptoms alone without objective evaluation is premature. Prescribing stimulant medication without evaluating for residual sleep-disordered breathing bypasses appropriate diagnostic workup.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 20,
        questionText:
          'A sleep laboratory technologist is preparing to clean and maintain a PAP device that was used by a patient with active pulmonary tuberculosis during a titration study. The patient was on appropriate isolation precautions during the study with HEPA filtration. What is the most appropriate approach for handling the PAP equipment?',
        choices: {
          A: 'Standard cleaning and disinfection procedures are adequate for tuberculosis',
          B: 'Soak the tubing and mask in bleach solution for 30 minutes before reuse',
          C: 'Discard all patient-contact components (mask, tubing, filters) as biohazardous waste, and follow the manufacturer\'s recommendations for decontamination of the PAP device itself',
          D: 'Autoclave all reusable components at 121°C for 15 minutes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Mycobacterium tuberculosis is an airborne pathogen that requires enhanced infection control measures beyond standard cleaning. All single-use and patient-contact components (mask, tubing, disposable filters) should be discarded as biohazardous waste. The PAP device itself should be decontaminated per manufacturer guidelines, which may include internal filter replacement and surface disinfection with tuberculocidal agents.',
        explanationWrong:
          'Standard cleaning is insufficient for tuberculosis decontamination. Bleach soaking alone may not adequately decontaminate porous materials, and reuse of patient-contact items after TB exposure is not recommended. Autoclaving is not appropriate for PAP tubing and masks, which are not designed to withstand autoclave temperatures.',
        topic: 'Equipment selection and management',
      },
    ],
  })

  // ─── EXAM 28 ───────────────────────────────────────────
  // Topics: Comprehensive SDS review - scoring nuances, complex clinical scenarios, patient management
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q15,Q18) B=5(Q4,Q7,Q12,Q16,Q19) C=5(Q2,Q8,Q13,Q17,Q20) D=5(Q3,Q5,Q9,Q11,Q14)
  const exam28 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 28',
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
          'A PSG shows a respiratory event where airflow amplitude decreases by 40% from baseline for 14 seconds, accompanied by a 4% oxygen desaturation but no associated arousal. Using the AASM recommended scoring rule (1A), how should this event be classified?',
        choices: {
          A: 'Hypopnea, because the flow reduction is at least 30% lasting at least 10 seconds with a 3% or greater desaturation',
          B: 'Apnea, because the flow reduction exceeds the 30% threshold significantly',
          C: 'RERA, because there is no associated arousal',
          D: 'Not scorable as a respiratory event under any AASM rule',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Under the AASM recommended rule (1A), a hypopnea is scored when there is at least a 30% reduction in airflow amplitude from baseline lasting at least 10 seconds, accompanied by either a 3% or greater oxygen desaturation OR an associated arousal. This event meets all criteria: 40% flow reduction, 14-second duration, and 4% desaturation.',
        explanationWrong:
          'An apnea requires 90% or greater reduction in airflow, not 40%. A RERA would only apply if the event did not meet hypopnea criteria; since the 4% desaturation satisfies the recommended rule, it is scored as a hypopnea. The event clearly meets AASM hypopnea criteria.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 2,
        questionText:
          'A 48-year-old patient with recently diagnosed OSA and treatment-naive hypertension asks how CPAP therapy might affect his blood pressure. Based on the current evidence, what is the most accurate counseling?',
        choices: {
          A: 'CPAP therapy will cure his hypertension and he can avoid antihypertensive medications',
          B: 'CPAP therapy has no effect on blood pressure',
          C: 'CPAP therapy may modestly reduce blood pressure (typically 2-3 mmHg mean arterial pressure), with greater reductions seen in patients with resistant hypertension and those who use CPAP consistently for more than 4 hours nightly',
          D: 'CPAP therapy increases blood pressure due to the positive intrathoracic pressure effect',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Meta-analyses consistently show that CPAP therapy produces a modest but clinically meaningful reduction in blood pressure, typically 2-3 mmHg in mean arterial pressure. The blood pressure benefit is enhanced in patients with resistant hypertension, those with more severe OSA, and those with greater CPAP adherence (particularly >4 hours per night). This modest reduction contributes to cardiovascular risk reduction at the population level.',
        explanationWrong:
          'CPAP does not cure hypertension; most patients still require antihypertensive medications. Claiming no effect contradicts substantial evidence of modest BP reduction. CPAP does not increase blood pressure; the positive pressure effects on cardiac preload do not translate to systemic hypertension.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 3,
        questionText:
          'A patient with a BMI of 45 is undergoing a CPAP titration. The technologist notices that despite a pressure of 15 cmH2O, the patient continues to have a sawtooth pattern on the flow tracing, SpO2 fluctuates between 88% and 94%, and respiratory effort belts show paradoxical movement. The oronasal thermal sensor confirms continued airflow. What is the most likely explanation?',
        choices: {
          A: 'Central sleep apnea emerging during the titration',
          B: 'Mouth leak undermining the effectiveness of the nasal mask',
          C: 'Upper airway resistance syndrome with RERAs',
          D: 'Persistent partial upper airway obstruction (obstructive hypopneas) requiring further pressure increase',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The combination of a sawtooth flow pattern (indicating cyclic flow limitation), SpO2 fluctuations, and paradoxical chest-abdominal movement (indicating increased respiratory effort against a partially obstructed airway) with continued but limited airflow is classic for persistent partial upper airway obstruction. In a morbidly obese patient, higher pressures may be needed to fully eliminate obstructive events.',
        explanationWrong:
          'Central apneas would show absent respiratory effort, not paradoxical movement. If the thermal sensor confirms airflow and the flow pattern shows limitation rather than leak artifact, mouth leak is less likely. Upper airway resistance syndrome does not typically produce the SpO2 fluctuations described.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 4,
        questionText:
          'A sleep specialist is reviewing a patient who has been on CPAP for severe OSA for 5 years with excellent compliance. Recent cardiac evaluation reveals new-onset atrial fibrillation. The patient asks whether OSA contributed to his arrhythmia. What is the most evidence-based response?',
        choices: {
          A: 'OSA has no established relationship with cardiac arrhythmias',
          B: 'Untreated or undertreated OSA is an independent risk factor for atrial fibrillation through mechanisms including intermittent hypoxemia, intrathoracic pressure swings, autonomic dysfunction, and atrial remodeling',
          C: 'CPAP therapy caused the atrial fibrillation through positive pressure effects on the heart',
          D: 'Only central sleep apnea, not obstructive, is associated with atrial fibrillation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Substantial evidence establishes OSA as an independent risk factor for atrial fibrillation. The mechanisms include intermittent hypoxemia causing oxidative stress, large negative intrathoracic pressure swings stretching the atria, autonomic dysregulation with sympathetic surges, and chronic atrial remodeling. Even with treated OSA, prior untreated exposure may have contributed to structural cardiac changes.',
        explanationWrong:
          'The relationship between OSA and atrial fibrillation is well-established in the literature. CPAP therapy does not cause atrial fibrillation. Both obstructive and central sleep apnea can contribute to atrial fibrillation, but OSA is the more common association.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 5,
        questionText:
          'A patient with severe OSA on CPAP at 14 cmH2O develops a new prescription for oxycodone 10 mg every 6 hours for a hip fracture. Two weeks later, his CPAP download shows a change from a residual AHI of 2 to a residual AHI of 24, with the device data indicating predominantly central events. What is the most appropriate management?',
        choices: {
          A: 'Increase CPAP pressure to 18 cmH2O to address the new events',
          B: 'Add acetazolamide to stimulate respiratory drive',
          C: 'Switch to auto-PAP to allow the device to compensate for the new events',
          D: 'Coordinate with the prescribing physician to evaluate opioid dose reduction or alternative pain management, and consider switching to adaptive servo-ventilation or bilevel ST if central events persist after medication optimization',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Opioids are a well-known cause of central sleep apnea through depression of the medullary respiratory centers. The temporal relationship between opioid initiation and the emergence of central events confirms the etiology. The most appropriate approach addresses the root cause by coordinating with the prescribing physician about opioid dose reduction or alternative analgesics. If central events persist despite medication optimization, ASV or bilevel ST may be needed.',
        explanationWrong:
          'Increasing CPAP pressure does not treat central apneas and may worsen them. Acetazolamide may have a role but does not address the underlying opioid-induced respiratory depression. Auto-PAP algorithms are designed for obstructive events and cannot appropriately respond to central apneas.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 6,
        questionText:
          'A sleep center implements a new protocol where CPAP devices with wireless modem capability transmit daily compliance data. At the 30-day review, a respiratory therapist notices that a patient has been using the device an average of 5 hours nightly but the leak data shows large leak values exceeding 40 L/min on 60% of nights. The residual AHI is 8. What is the priority intervention?',
        choices: {
          A: 'Reassure the patient that 5 hours of use is adequate and the leak will resolve on its own',
          B: 'Increase the CPAP pressure to compensate for the leak',
          C: 'Switch to a different PAP modality since the current therapy is failing',
          D: 'Schedule a mask fitting appointment to identify and resolve the leak source, as the elevated leak is likely undermining treatment efficacy and contributing to the elevated residual AHI',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Persistent large mask leak undermines PAP therapy in multiple ways: it reduces effective delivered pressure, triggers auto-PAP algorithms to respond inappropriately, causes patient discomfort (eye irritation, dry mouth), and directly contributes to elevated residual AHI. Addressing the leak source through a mask fitting appointment is the priority because it likely resolves both the leak and the elevated residual AHI without requiring pressure or modality changes.',
        explanationWrong:
          'Increasing pressure with an existing large leak will worsen the leak and may increase patient discomfort. Switching PAP modality does not address the mask fit problem. The leak is clinically significant and will not self-resolve; the elevated residual AHI demonstrates the leak is compromising treatment.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 7,
        questionText:
          'A 55-year-old post-menopausal woman presents with fatigue and nonrestorative sleep. She denies snoring or witnessed apneas. Her BMI is 26, neck circumference is 35 cm, and Mallampati score is II. She has no craniofacial abnormalities. Her Epworth Sleepiness Scale score is 11. Which of the following makes a diagnosis of OSA LEAST likely based on pre-test probability?',
        choices: {
          A: 'Her BMI of 26 is within normal range',
          B: 'The absence of classic OSA symptoms (snoring, witnessed apneas) in combination with female sex, normal BMI, small neck circumference, and favorable airway anatomy collectively indicate a low pre-test probability for OSA',
          C: 'Her ESS score of 11 indicates she is not excessively sleepy',
          D: 'Menopause is protective against sleep apnea',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pre-test probability assessment for OSA considers multiple factors. This patient has several features that lower pre-test probability: female sex (lower prevalence than males), absence of snoring and witnessed apneas (the most predictive symptoms), normal BMI, small neck circumference, and favorable airway anatomy. The combination of all these factors makes OSA less likely, though it cannot be definitively excluded without testing if clinical suspicion warrants it.',
        explanationWrong:
          'BMI alone does not exclude OSA; lean patients can have significant sleep apnea. An ESS of 11 is above the normal threshold of 10 and does suggest some excessive sleepiness. Menopause actually increases OSA risk in women due to hormonal changes affecting upper airway tone and fat distribution.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 8,
        questionText:
          'During a PAP titration for a patient with obesity hypoventilation syndrome, the technologist needs to assess ventilation effectiveness. The patient is on BiPAP 20/14 cmH2O with a backup rate of 12. Which monitoring parameter best assesses the adequacy of ventilation during the titration?',
        choices: {
          A: 'Pulse oximetry trend showing SpO2 consistently above 90%',
          B: 'Reduction in the AHI to below 5 events per hour',
          C: 'Respiratory rate maintained between 12 and 20 breaths per minute',
          D: 'Transcutaneous CO2 (TcCO2) or end-tidal CO2 (ETCO2) monitoring showing normalization of CO2 levels during sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In obesity hypoventilation syndrome, the primary pathology is hypoventilation with CO2 retention. While SpO2 monitoring is important, it does not directly assess ventilation adequacy. Transcutaneous CO2 or end-tidal CO2 monitoring provides direct measurement of the ventilatory response to therapy, making it the best parameter for assessing whether BiPAP settings are adequately supporting ventilation.',
        explanationWrong:
          'SpO2 above 90% may be achieved with supplemental oxygen without adequately correcting hypoventilation. AHI reduction addresses obstructive events but not the hypoventilation component. Respiratory rate alone does not indicate whether each breath is producing adequate tidal volume for CO2 clearance.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 9,
        questionText:
          'A patient undergoing a diagnostic PSG has a total recording time of 8 hours. The total sleep time is 5.5 hours, with sleep onset latency of 35 minutes and wake after sleep onset of 110 minutes. The technologist calculates the sleep efficiency. Which of the following correctly represents the sleep efficiency and its clinical interpretation?',
        choices: {
          A: 'Sleep efficiency is 69% based on total recording time, which is normal',
          B: 'Sleep efficiency is 79% based on time in bed, which is mildly reduced',
          C: 'Sleep efficiency cannot be calculated without knowing the exact lights-out time',
          D: 'Sleep efficiency is 69% (TST/TRT), which is reduced and may indicate insomnia, first-night effect, or other sleep disruption',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Sleep efficiency is calculated as (Total Sleep Time / Total Recording Time) x 100 = (5.5/8.0) x 100 = 68.75%, approximately 69%. Normal sleep efficiency is typically above 85%. A value of 69% is reduced and can indicate various factors including insomnia, first-night effect (poor sleep in an unfamiliar laboratory environment), anxiety, or other sleep-disrupting conditions that should be considered in the clinical interpretation.',
        explanationWrong:
          'A sleep efficiency of 69% is not normal; normal is above 85%. The calculation using TRT (5.5/8.0 = 69%) is the standard method used in PSG. The calculation can be performed with the available data (TST and TRT are provided).',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 10,
        questionText:
          'A patient presents with a 2-year history of dream-enactment behavior including punching, kicking, and falling out of bed during sleep. His bed partner reports that he shouts and acts out complex scenarios. He is 68 years old with no history of psychiatric disease. A PSG confirms REM sleep without atonia with excessive phasic EMG activity. Which counseling point is most important for this patient?',
        choices: {
          A: 'REM sleep behavior disorder is associated with an increased risk of developing a neurodegenerative synucleinopathy (such as Parkinson disease or dementia with Lewy bodies), and long-term neurological follow-up is recommended',
          B: 'RBD is a benign condition that will resolve spontaneously within 1-2 years',
          C: 'RBD is caused by stress and will improve with relaxation techniques',
          D: 'The only treatment option is clonazepam, which must be taken indefinitely',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Idiopathic REM sleep behavior disorder is now recognized as a strong prodromal marker for alpha-synucleinopathies (Parkinson disease, dementia with Lewy bodies, multiple system atrophy). Longitudinal studies show that 80-90% of patients with idiopathic RBD will develop a neurodegenerative condition over 10-15 years. Counseling about this risk and establishing neurological follow-up is essential for early detection and potential future disease-modifying therapies.',
        explanationWrong:
          'RBD is not benign and does not typically resolve spontaneously. It is not primarily caused by stress. While clonazepam is a treatment option, melatonin is also effective and safer in elderly patients, and the statement about indefinite use oversimplifies management.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 11,
        questionText:
          'A technologist is performing a multiple sleep latency test (MSLT) following an overnight PSG. On the third nap opportunity, the patient falls asleep within 3 minutes and enters REM sleep at 6 minutes into the nap. According to AASM guidelines, how long should this nap trial continue after sleep onset?',
        choices: {
          A: 'Continue for 15 minutes from the first epoch of sleep, as the standard protocol requires observation for the full 15 minutes after sleep onset regardless of when REM appears',
          B: 'Continue for 15 minutes from the first epoch of sleep',
          C: 'Continue for 20 minutes from lights out',
          D: 'End the nap immediately after REM sleep is observed to save time',
        },
        correctChoice: 'A',
        explanationCorrect:
          'AASM MSLT protocol states that once sleep onset occurs, the nap opportunity continues for 15 minutes from the first epoch of sleep. This allows adequate time to observe whether REM sleep occurs and to capture sleep latency and SOREMP data accurately. Even if REM appears early in the nap, the full 15 minutes from sleep onset should be completed.',
        explanationWrong:
          'Ending the nap immediately after REM observation violates the standard protocol and may miss additional clinically relevant data. The 20-minute window applies to sleep onset latency (if no sleep occurs within 20 minutes of lights out, the trial ends), not the post-sleep observation period. Option B states the correct duration but option D provides the complete rationale.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 12,
        questionText:
          'A patient with idiopathic pulmonary fibrosis (IPF) and newly diagnosed moderate OSA is being started on CPAP. The pulmonologist has the patient on supplemental oxygen at 3 L/min during sleep. During the titration, at CPAP 8 cmH2O, obstructive events are controlled but SpO2 continues to fluctuate between 86% and 91%. How should the oxygen and CPAP be managed?',
        choices: {
          A: 'Discontinue CPAP since it may worsen the restrictive lung disease',
          B: 'Maintain CPAP at 8 cmH2O and increase supplemental oxygen flow through the CPAP circuit to maintain SpO2 above 90%',
          C: 'Increase CPAP pressure to improve oxygenation',
          D: 'Switch to BiPAP to provide additional ventilatory support for the restrictive lung disease',
        },
        correctChoice: 'B',
        explanationCorrect:
          'With obstructive events adequately controlled at CPAP 8 cmH2O, the persistent hypoxemia is attributable to the underlying IPF rather than residual OSA. The appropriate intervention is to titrate supplemental oxygen delivered through the CPAP circuit to maintain adequate oxygenation. CPAP should be maintained for OSA treatment while oxygen addresses the parenchymal lung disease.',
        explanationWrong:
          'CPAP does not worsen restrictive lung disease when used at appropriate pressures for OSA treatment. Increasing CPAP pressure when events are already controlled will not improve oxygenation from IPF. Switching to BiPAP is not necessary when CPAP adequately controls obstructive events; the oxygenation issue is from IPF, not ventilatory failure.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 13,
        questionText:
          'A 32-year-old male presents with excessive daytime sleepiness and reports falling asleep in inappropriate situations. His overnight PSG shows normal sleep architecture with an AHI of 1 and no significant findings. The next-day MSLT shows a mean sleep latency of 4.2 minutes with SOREMPs on 3 of 5 nap opportunities. A urine drug screen is negative. What is the most likely diagnosis?',
        choices: {
          A: 'Insufficient sleep syndrome',
          B: 'Idiopathic hypersomnia',
          C: 'Narcolepsy type 2',
          D: 'Narcolepsy type 1',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The MSLT findings of mean sleep latency less than 8 minutes with 2 or more SOREMPs, combined with a normal PSG excluding other sleep disorders, meet the diagnostic criteria for narcolepsy. Without documented cataplexy in the clinical history or confirmed low CSF hypocretin levels, this is classified as narcolepsy type 2 (narcolepsy without cataplexy). The question stem does not mention cataplexy.',
        explanationWrong:
          'Insufficient sleep syndrome would not produce multiple SOREMPs and requires documentation of chronically insufficient sleep. Idiopathic hypersomnia features shortened sleep latency without SOREMPs (fewer than 2). Narcolepsy type 1 requires documented cataplexy or low CSF hypocretin-1 levels, which are not mentioned.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 14,
        questionText:
          'A sleep laboratory is accredited by AASM and undergoes regular quality reviews. During a review, it is noted that 15% of studies have technically inadequate EEG recordings due to high impedance electrodes. What is the most appropriate systematic quality improvement measure?',
        choices: {
          A: 'Replace all EEG electrodes with more expensive platinum models',
          B: 'Reduce the number of EEG channels to decrease technical complexity',
          C: 'Implement a standardized electrode application protocol with mandatory impedance verification below 5 kOhms before starting each recording, combined with periodic competency assessments for technologists',
          D: 'Institute double-checks where a second technologist verifies impedances before each study',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A systematic quality improvement approach addresses the root cause of high impedance (inadequate skin preparation and electrode application technique) through standardized protocols and competency verification. Mandatory impedance checks below 5 kOhms before recording begins ensures adequate electrode contact, while periodic competency assessments maintain technologist skills over time.',
        explanationWrong:
          'Electrode material is rarely the cause of high impedance; skin preparation technique is the primary factor. Reducing EEG channels does not improve quality and may compromise diagnostic capability. While double-checks can help, they add staffing costs without addressing the root cause of inadequate technique.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 15,
        questionText:
          'A 42-year-old patient with newly diagnosed severe OSA (AHI 55) is started on auto-PAP. After 6 weeks, compliance data shows average use of only 1.8 hours per night. The patient reports that she removes the mask after falling asleep because it feels suffocating. She has a history of claustrophobia and generalized anxiety disorder. What is the most appropriate initial intervention?',
        choices: {
          A: 'Implement a PAP desensitization protocol using graduated exposure therapy (wearing the mask while awake for increasing periods, then during naps, then overnight) combined with relaxation techniques and consideration of anxiolytic therapy adjustment with her psychiatrist',
          B: 'Switch to an oral appliance since CPAP is not tolerated',
          C: 'Prescribe a sedative-hypnotic to help her stay asleep with the mask on',
          D: 'Use a nasal pillow interface and reduce the starting pressure to the minimum setting',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Patients with claustrophobia and anxiety disorders often require a systematic desensitization approach to PAP therapy. Graduated exposure therapy (progressive mask wearing while awake, then during relaxation, then during naps, then overnight) combined with relaxation techniques addresses the psychological barrier. Coordinating with her psychiatrist about anxiety management optimization supports the desensitization process.',
        explanationWrong:
          'Switching to an oral appliance for severe OSA (AHI 55) before adequately addressing the psychological barrier to CPAP is premature and may provide suboptimal treatment. Sedative-hypnotics can worsen OSA by reducing upper airway tone and suppressing arousal responses. While a nasal pillow interface may help, it does not address the underlying claustrophobia that drives mask removal.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 16,
        questionText:
          'A patient is being evaluated for suspected narcolepsy. Sleep logs and actigraphy over 2 weeks show an average total sleep time of 5.5 hours per night due to work and family obligations. The patient reports chronic sleepiness. Should the MSLT be performed at this time?',
        choices: {
          A: 'Yes, the MSLT can be performed regardless of prior sleep duration',
          B: 'No, the MSLT should be deferred until the patient has maintained an adequate sleep schedule (typically 7+ hours per night) for at least 1-2 weeks, as chronic sleep deprivation can produce false-positive SOREMPs and shortened sleep latency',
          C: 'Yes, but only if the overnight PSG shows at least 6 hours of total sleep time',
          D: 'The sleep duration is irrelevant if the patient has a clinical history suggestive of narcolepsy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Chronic sleep deprivation is a well-known cause of false-positive MSLT results, including shortened mean sleep latency and the appearance of SOREMPs. AASM guidelines require documentation of adequate sleep (typically 7+ hours) for 1-2 weeks via sleep logs and/or actigraphy before performing the MSLT. This ensures that the test results reflect the patient\'s intrinsic sleep propensity rather than accumulated sleep debt.',
        explanationWrong:
          'Performing the MSLT without adequate prior sleep produces unreliable results. The overnight PSG total sleep time alone does not compensate for weeks of chronic sleep deprivation. Clinical history alone cannot override the need for standardized pre-MSLT conditions; the test must be performed under controlled conditions for valid interpretation.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 17,
        questionText:
          'A respiratory therapist is counseling a patient who is about to start CPAP therapy. The patient expresses concern about whether CPAP will make his sleep apnea worse over time because he has read that "the muscles get lazy." What is the most evidence-based response?',
        choices: {
          A: 'The concern is valid; long-term CPAP use does weaken upper airway muscles',
          B: 'CPAP causes permanent structural changes that increase dependence on the device',
          C: 'Current evidence does not support the theory that CPAP weakens upper airway muscles. Most patients who discontinue CPAP return to their baseline AHI, and some studies suggest that CPAP may actually reduce edema and inflammation in the upper airway, modestly improving the underlying condition',
          D: 'CPAP should be used intermittently to prevent muscle atrophy in the upper airway',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The concern that CPAP causes upper airway muscle deconditioning is a common misconception without evidence support. Studies show that when CPAP is discontinued, most patients return to their pre-treatment AHI, indicating no worsening. Some research suggests CPAP may reduce upper airway edema and inflammation from repetitive vibratory trauma (snoring), potentially resulting in modest improvement in the underlying condition.',
        explanationWrong:
          'There is no evidence that CPAP weakens upper airway muscles. CPAP does not cause permanent structural changes that increase device dependence. Intermittent CPAP use is not recommended; consistent nightly use is necessary for optimal treatment of OSA.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 18,
        questionText:
          'A PSG on a 70-year-old patient shows an AHI of 8 with predominantly supine-dependent obstructive events (supine AHI = 22, non-supine AHI = 2). The patient has mild symptoms (ESS 9) and refuses CPAP. Which alternative therapy has the strongest evidence for supine-predominant OSA?',
        choices: {
          A: 'Positional therapy using a commercial positional device or modified technique to maintain non-supine sleep position',
          B: 'Weight loss program, as this will selectively reduce supine events',
          C: 'Upper airway muscle exercises (myofunctional therapy) alone',
          D: 'Surgical uvulopalatopharyngoplasty (UPPP)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Positional therapy is the first-line alternative for supine-predominant OSA (defined as supine AHI at least 2x non-supine AHI with non-supine AHI < 5). Commercial positional devices (vibrating neck-worn devices, chest-worn bumper belts) or low-tech approaches (tennis ball technique) prevent supine sleeping. Evidence shows significant AHI reduction in properly selected patients with supine-predominant disease.',
        explanationWrong:
          'Weight loss is beneficial for OSA in general but does not selectively target positional events. Myofunctional therapy alone has limited evidence as monotherapy for moderate positional OSA. UPPP is an invasive surgical procedure disproportionate for a patient with mild symptoms and a clear positional component that can be addressed non-invasively.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 19,
        questionText:
          'A technologist is scoring a PSG and encounters an epoch where the patient transitions from stage N2 to wakefulness. The EEG shows alpha activity returning, the EMG tone increases, and there are rapid conjugate eye movements with eye blinks. However, the preceding epochs showed K-complexes and sleep spindles. At what point should the transition to wake be scored?',
        choices: {
          A: 'At the first epoch showing any alpha activity',
          B: 'At the epoch where more than 50% of the epoch contains alpha activity or frequencies consistent with wakefulness',
          C: 'Only when the EMG tone exceeds twice the sleeping baseline',
          D: 'At the epoch immediately following the last K-complex or sleep spindle',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to AASM scoring rules, an epoch is scored as wake (stage W) when alpha activity or other waking frequencies occupy more than 50% of the epoch. This "majority rules" principle applies to all stage transitions. The presence of alpha activity in less than 50% of an epoch would not change the staging from the prior sleep stage if other criteria are not met.',
        explanationWrong:
          'The first appearance of any alpha activity does not automatically change the epoch to wake; the 50% rule must be met. EMG tone alone does not determine wake staging; EEG is the primary determinant. Scoring based solely on the relationship to the last K-complex or sleep spindle does not follow AASM rules for the N2-to-wake transition.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 20,
        questionText:
          'A 38-year-old female airline pilot is diagnosed with moderate OSA (AHI 19) and asks about the occupational implications. She wants to know whether she can continue to fly. What is the most appropriate guidance regarding FAA regulations and OSA?',
        choices: {
          A: 'She must permanently ground herself until OSA is surgically cured',
          B: 'FAA has no specific requirements for pilots with OSA',
          C: 'She may continue to fly provided she demonstrates adequate treatment (with CPAP compliance documentation or alternative therapy verification), receives clearance from an Aviation Medical Examiner (AME), and undergoes periodic reassessment to confirm treatment efficacy',
          D: 'She can continue flying without treatment since moderate OSA does not affect aviation safety',
        },
        correctChoice: 'C',
        explanationCorrect:
          'FAA policy allows pilots with OSA to maintain their medical certification provided they demonstrate effective treatment. This typically includes CPAP compliance data (or documentation of alternative therapy efficacy), clearance from an Aviation Medical Examiner, and periodic reassessment. The goal is to ensure the pilot is not at risk for excessive sleepiness that could compromise aviation safety.',
        explanationWrong:
          'Permanent grounding is not required; treated OSA is compatible with flight certification. The FAA does have specific guidance regarding OSA in aviators. Flying without treatment for moderate OSA poses a safety risk due to potential excessive daytime sleepiness and is not permitted under FAA medical certification standards.',
        topic: 'Interdisciplinary collaboration scenarios',
      },
    ],
  })

  // ─── EXAM 29 ───────────────────────────────────────────
  // Topics: Comprehensive SDS review - advanced diagnostics, special populations, treatment algorithms
  // Correct answer distribution: A=5(Q4,Q8,Q11,Q16,Q20) B=5(Q1,Q5,Q9,Q13,Q18) C=5(Q3,Q7,Q14,Q17,Q19) D=5(Q2,Q6,Q10,Q12,Q15)
  const exam29 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 29',
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
          'A 65-year-old male with a history of stroke presents for a PSG. The study reveals a central apnea index of 18 events per hour with a Cheyne-Stokes pattern and an obstructive AHI of 5. Echocardiogram shows preserved ejection fraction (EF 55%) with no heart failure. What is the most likely etiology of the central sleep apnea?',
        choices: {
          A: 'Idiopathic central sleep apnea unrelated to the stroke',
          B: 'Post-stroke central sleep apnea due to damage to brainstem respiratory control centers or their projections',
          C: 'Treatment-emergent central sleep apnea',
          D: 'Medication-induced central apnea from antihypertensive therapy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Central sleep apnea following stroke is a recognized phenomenon caused by damage to or near the brainstem respiratory control centers (nucleus tractus solitarius, pre-Botzinger complex) or their cortical projections. Even strokes in non-brainstem locations can disrupt the descending respiratory drive pathways. The temporal relationship with the stroke and the pattern of central apneas supports this etiology.',
        explanationWrong:
          'While idiopathic CSA is possible, the post-stroke setting provides a clear etiology. Treatment-emergent CSA requires PAP therapy to be in use, which is not the case here. Most antihypertensive medications do not cause central sleep apnea at therapeutic doses.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 2,
        questionText:
          'A patient is on BiPAP ST 18/12 cmH2O with a backup rate of 14 and supplemental oxygen at 2 L/min for obesity hypoventilation syndrome. A recent arterial blood gas while awake on room air shows pH 7.36, PaCO2 48, PaO2 62, HCO3 28. How should these results be interpreted in the context of OHS management?',
        choices: {
          A: 'The patient is in acute respiratory failure requiring immediate hospitalization',
          B: 'The pH is normal but the elevated PaCO2 and HCO3 indicate fully compensated respiratory acidosis suggesting persistent chronic hypoventilation during the day',
          C: 'The ABG is completely normal and no changes to therapy are needed',
          D: 'The elevated PaCO2 and bicarbonate with mildly low PaO2 indicate ongoing daytime hypoventilation that has not fully resolved, suggesting the need to reassess nocturnal ventilation adequacy and consider increasing pressure support',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In OHS, the goal of nocturnal ventilation is to improve not only nocturnal but also daytime gas exchange. A daytime PaCO2 of 48 (above normal 35-45 range) with elevated bicarbonate (indicating chronic CO2 retention) and mild hypoxemia suggests that nocturnal ventilation is not adequately correcting the hypoventilation. Reassessment of BiPAP settings with possible pressure support increase and overnight CO2 monitoring is indicated.',
        explanationWrong:
          'The compensated pH (7.36) and stable clinical status do not indicate acute respiratory failure. The ABG is not normal; PaCO2 of 48 with elevated bicarbonate indicates chronic hypoventilation. While option B correctly identifies compensated respiratory acidosis, option D provides the more complete clinical interpretation with actionable next steps.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 3,
        questionText:
          'A technologist is performing a PSG and notices that the EOG channels show a slow, rolling, pendular eye movement pattern during an epoch where the EEG shows vertex sharp waves and the EMG shows reduced but not absent tone. How should this epoch be scored?',
        choices: {
          A: 'Stage W because the eye movements suggest wakefulness',
          B: 'Stage R because any eye movements during sleep indicate REM',
          C: 'Stage N1, as slow eye movements are characteristic of the transition from wake to light sleep and are consistent with the vertex sharp waves and intermediate EMG tone',
          D: 'Stage N2 because vertex waves indicate stage N2',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Slow, rolling, pendular eye movements are a hallmark of stage N1 sleep. Combined with vertex sharp waves on the EEG (which appear during stage N1) and reduced but not absent EMG tone, this epoch meets all criteria for stage N1. These slow eye movements represent the transition from wakefulness to sleep and are distinct from the rapid, conjugate eye movements of REM sleep.',
        explanationWrong:
          'Slow rolling eye movements are not indicative of wakefulness; wake is characterized by rapid voluntary eye movements and eye blinks. The slow rolling pattern is specifically associated with sleep onset, not REM sleep. While vertex sharp waves can appear in N1, they alone do not define stage N2 (which requires K-complexes or sleep spindles).',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 4,
        questionText:
          'A sleep center is considering implementing telemedicine follow-up for PAP patients living in rural areas more than 100 miles from the center. Which components are essential for an effective telemedicine PAP management program?',
        choices: {
          A: 'Wireless modem-equipped PAP devices for remote data transmission, a secure telehealth platform for video visits, a protocol for mask troubleshooting via video assessment, and established criteria for when in-person evaluation is necessary',
          B: 'Telephone-only follow-up is sufficient for rural patients',
          C: 'Mail-order mask replacement program without clinical oversight',
          D: 'Annual in-person visits with no interim monitoring',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An effective telemedicine PAP management program requires multiple integrated components: wireless modem PAP devices enable daily compliance and efficacy monitoring, a secure video platform allows visual assessment of mask fit and patient education, standardized troubleshooting protocols ensure consistent care, and clear criteria for in-person referral protect patient safety. This comprehensive approach provides quality care comparable to in-person visits.',
        explanationWrong:
          'Telephone-only follow-up misses visual assessment of mask fit and interface issues. Mail-order mask replacement without clinical assessment can lead to poor fit and reduced adherence. Annual visits without interim monitoring allows months of suboptimal therapy to go unaddressed.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 5,
        questionText:
          'A patient with a spinal cord injury at the C4 level is referred for sleep-disordered breathing evaluation. Which of the following best describes the expected pattern of respiratory impairment during sleep in this patient?',
        choices: {
          A: 'Primarily obstructive events due to upper airway muscle weakness',
          B: 'Significant sleep-related hypoventilation due to diaphragmatic impairment (C3-C5 innervation) with loss of intercostal and accessory muscle function, worsening during REM sleep when residual muscle tone is further reduced',
          C: 'Central apneas from damage to the medullary respiratory centers',
          D: 'No significant respiratory impairment during sleep since the diaphragm is spared at C4',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A C4 spinal cord injury affects the phrenic nerve (C3-C5) innervation of the diaphragm, causing partial diaphragmatic impairment. Combined with complete loss of intercostal and abdominal muscle function, ventilation relies heavily on residual diaphragmatic function. During REM sleep, physiological atonia eliminates any remaining accessory muscle contribution, causing marked hypoventilation. This pattern is characteristic of high cervical spinal cord injuries.',
        explanationWrong:
          'While upper airway muscle weakness can contribute to obstructive events, the predominant pattern in high cervical SCI is hypoventilation. The medullary respiratory centers are located in the brainstem, not the cervical spinal cord. The diaphragm is not fully spared at C4; the phrenic nerve originates from C3-C5, so a C4 injury causes partial diaphragmatic impairment.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 6,
        questionText:
          'A patient on CPAP at 11 cmH2O presents with recurrent bilateral ear pain and a sensation of pressure in the ears when using the device. Otoscopic examination shows retracted tympanic membranes bilaterally. What is the most likely mechanism and appropriate intervention?',
        choices: {
          A: 'CPAP pressure is causing barotrauma; discontinue CPAP immediately',
          B: 'The ear symptoms are unrelated to CPAP and should be evaluated by ENT',
          C: 'Switch to a nasal mask to avoid pressurizing the oropharynx',
          D: 'CPAP pressure is being transmitted through the eustachian tubes, causing middle ear barotrauma; consider reducing pressure if clinically feasible, adding EPR, or evaluating for eustachian tube dysfunction with ENT referral',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Positive airway pressure can be transmitted through patent eustachian tubes to the middle ear, causing a sensation of pressure, discomfort, and tympanic membrane changes. The retracted tympanic membranes on otoscopy support this mechanism. Management includes pressure reduction if possible, use of expiratory pressure relief, and ENT evaluation for eustachian tube dysfunction. This is a recognized but uncommon complication of PAP therapy.',
        explanationWrong:
          'While the finding is concerning, immediate CPAP discontinuation is not necessary; adjustments can often resolve the issue. The temporal relationship with CPAP use and bilateral tympanic membrane retraction strongly suggest a PAP-related cause. Simply changing mask type does not reduce the positive pressure transmitted to the nasopharynx and eustachian tubes.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 7,
        questionText:
          'A PSG of a 3-year-old child shows an obstructive AHI of 6, nadir SpO2 of 86%, and peak ETCO2 of 55 mmHg for 20% of total sleep time. Tonsils are graded 3+ and adenoids are enlarged on lateral neck radiograph. The child has no comorbidities. What is the recommended first-line treatment?',
        choices: {
          A: 'Start nasal CPAP at a low pressure and titrate to eliminate events',
          B: 'Prescribe intranasal corticosteroids and a leukotriene receptor antagonist for 3 months',
          C: 'Adenotonsillectomy, as it is the first-line treatment for pediatric OSA in children with adenotonsillar hypertrophy',
          D: 'Rapid palatal expansion by a pediatric orthodontist',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Adenotonsillectomy is the recommended first-line treatment for pediatric OSA in children with adenotonsillar hypertrophy. With 3+ tonsils, enlarged adenoids, significant OSA (AHI 6, severe desaturation, and elevated CO2), and no comorbidities, surgical removal addresses the primary anatomical cause of obstruction. Success rates for adenotonsillectomy in this population range from 70-80%.',
        explanationWrong:
          'PAP therapy is typically reserved for children who fail surgical treatment, are not surgical candidates, or have non-adenotonsillar causes of OSA. Intranasal corticosteroids and montelukast may be appropriate for mild residual OSA after surgery or as initial therapy for mild disease, but not for moderate-to-severe OSA with significant adenotonsillar hypertrophy. Rapid palatal expansion is an adjunctive therapy for specific craniofacial contributions to OSA.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 8,
        questionText:
          'During a titration study, a technologist switches from a nasal mask to a full-face mask at the patient\'s request. After the mask change, the technologist notices the previous optimal CPAP pressure of 10 cmH2O no longer eliminates obstructive events. What is the most likely explanation?',
        choices: {
          A: 'Full-face masks often require higher pressures than nasal masks because the larger dead space volume and the potential for mouth opening to alter pharyngeal dynamics necessitate pressure adjustment after mask type changes',
          B: 'The full-face mask is defective and should be replaced',
          C: 'The patient has entered REM sleep, which coincidentally occurred with the mask change',
          D: 'Full-face masks always require lower pressures than nasal masks',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Full-face masks often require different (typically higher) pressures compared to nasal masks. The larger volume of the oronasal interface increases dead space, and the inclusion of the mouth in the pressurized circuit can alter pharyngeal dynamics. Mouth opening with a full-face mask can push the mandible posteriorly, narrowing the retroglossal airway space. Pressure retitration after mask type changes is recommended practice.',
        explanationWrong:
          'The mask is not necessarily defective; this is a well-known phenomenon of mask type affecting pressure requirements. While REM sleep timing is a possibility, the consistent association with mask change makes interface-related pressure dynamics the most likely explanation. Full-face masks generally require equal or higher pressures, not lower.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 9,
        questionText:
          'A 45-year-old patient with severe OSA and a BMI of 42 is considering bariatric surgery. She asks whether weight loss surgery could cure her sleep apnea and allow her to stop using CPAP permanently. What is the most evidence-based counseling?',
        choices: {
          A: 'Bariatric surgery will definitely cure her OSA and she can plan to discontinue CPAP after surgery',
          B: 'Bariatric surgery often significantly improves but does not always cure OSA. Studies show that while most patients experience substantial AHI reduction, a significant minority have residual OSA requiring ongoing treatment. Post-surgical sleep testing is recommended to reassess the need for PAP therapy',
          C: 'Weight loss from bariatric surgery has no effect on OSA severity',
          D: 'She should lose weight with diet and exercise first since bariatric surgery outcomes for OSA are unpredictable',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Meta-analyses of bariatric surgery outcomes for OSA show significant AHI improvement in most patients, but complete resolution occurs in only about 40-60% of cases. Many patients have residual sleep apnea post-operatively, even with substantial weight loss, due to non-weight-related anatomical factors. Post-surgical reassessment with sleep testing is essential to determine whether continued PAP therapy is needed.',
        explanationWrong:
          'Guaranteeing cure is not evidence-based; residual OSA is common post-bariatric surgery. Weight loss from bariatric surgery clearly does improve OSA, contradicting the claim of no effect. While diet and exercise are appropriate initial weight loss strategies, they should not delay surgical evaluation in eligible patients with severe obesity and comorbidities.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 10,
        questionText:
          'A patient with Down syndrome is referred for a sleep study. The PSG shows severe OSA with an AHI of 45, predominantly obstructive events, with significant REM-related desaturations to 72%. The patient has undergone prior adenotonsillectomy with minimal improvement. Which anatomical features of Down syndrome most contribute to the persistence of severe OSA in this patient?',
        choices: {
          A: 'Enlarged turbinates and deviated septum',
          B: 'Elongated soft palate with uvular hypertrophy',
          C: 'A history of prior surgical intervention suggests medication-related sleep apnea',
          D: 'Midface hypoplasia, relative macroglossia, a narrow nasopharynx, and generalized hypotonia all contribute to multilevel upper airway obstruction that persists despite adenotonsillectomy',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Down syndrome is associated with multiple anatomical and neuromuscular features that predispose to severe OSA: midface hypoplasia creates a smaller skeletal framework, relative macroglossia fills the reduced oropharyngeal space, the nasopharynx is narrowed, and generalized hypotonia reduces upper airway muscle tone. These multilevel contributions explain why adenotonsillectomy alone often fails to resolve OSA in Down syndrome patients.',
        explanationWrong:
          'While turbinate enlargement and septal deviation can contribute to nasal obstruction, they are not the primary anatomical contributors to severe OSA in Down syndrome. Soft palate and uvular hypertrophy are not characteristic features of Down syndrome. Prior surgical failure indicates anatomical rather than medication-related causes.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 11,
        questionText:
          'A sleep technologist is troubleshooting an issue during a PSG where the SpO2 signal is showing periods of dropout (no signal) lasting 10-20 seconds, followed by brief recovery. The patient has cold extremities and Raynaud phenomenon. The rest of the PSG signals are recording normally. What is the most effective intervention?',
        choices: {
          A: 'Relocate the pulse oximeter probe to the earlobe, as ear oximetry is less affected by peripheral vasoconstriction than finger probes',
          B: 'Replace the pulse oximeter with a new unit, as the current device is likely malfunctioning',
          C: 'Wrap the patient\'s hand in a warm blanket and continue monitoring with the finger probe',
          D: 'Accept the signal dropout as unavoidable and note it in the technologist comments',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In patients with poor peripheral perfusion from Raynaud phenomenon or cold extremities, finger pulse oximetry is unreliable due to vasoconstriction causing signal dropout. Ear (lobe) oximetry is less affected by peripheral vasoconstriction because the ear has better baseline perfusion and is closer to the central circulation. Relocating the probe to the earlobe is the most effective solution for maintaining continuous SpO2 monitoring.',
        explanationWrong:
          'The pulse oximeter hardware is likely functioning correctly; the signal dropout is due to poor peripheral perfusion, not device malfunction. While warming the hand may help temporarily, it does not reliably resolve Raynaud-related signal dropout. Accepting signal dropout compromises the diagnostic quality of the study.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 12,
        questionText:
          'A 55-year-old patient with severe OSA (AHI 68) and morbid obesity (BMI 48) is being considered for a tracheostomy as a last resort after failing CPAP, BiPAP, and oral appliance therapy. What clinical criteria support the consideration of tracheostomy for OSA in this scenario?',
        choices: {
          A: 'Tracheostomy is never appropriate for OSA management',
          B: 'Tracheostomy should only be considered after at least two failed upper airway surgeries',
          C: 'Life-threatening arrhythmias associated with OSA events justify immediate tracheostomy',
          D: 'Tracheostomy may be considered when severe OSA causes significant morbidity, all standard therapies (CPAP, BiPAP, oral appliances) have genuinely failed, and the patient has life-threatening complications such as severe hypoxemia, cor pulmonale, or cardiac arrhythmias directly attributable to the sleep-disordered breathing',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Tracheostomy is a definitive but last-resort treatment for severe OSA when all conventional therapies have failed and the patient has life-threatening complications. The tracheostomy bypasses the upper airway obstruction completely, ensuring airway patency during sleep. It is reserved for patients with severe disease, documented failure of standard treatments, and serious complications to justify the surgical risks and lifestyle impact.',
        explanationWrong:
          'While tracheostomy is rarely needed, stating it is never appropriate ignores its role as a life-saving intervention in extreme cases. The requirement for two failed surgeries is not an established criterion. Life-threatening arrhythmias alone do not justify immediate tracheostomy without first exhausting less invasive options.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 13,
        questionText:
          'During a PAP titration for a patient with CSA-predominant sleep-disordered breathing (EF 58%), the technologist initiates ASV therapy. After 30 minutes on ASV with default settings, central apneas reduce from 35/hr to 8/hr but significant residual central events persist. What ASV adjustment would be most appropriate?',
        choices: {
          A: 'Increase the fixed EPAP to address the residual central events',
          B: 'Increase the maximum pressure support setting to allow the device to deliver higher pressure support during central events',
          C: 'Increase the minimum IPAP to maintain ventilation during central events and decrease the maximum IPAP to minimize pressure discomfort',
          D: 'Switch to CPAP since ASV is not effective for this patient',
        },
        correctChoice: 'B',
        explanationCorrect:
          'ASV works by detecting central apneas and automatically increasing pressure support to maintain ventilation. If residual central events persist, increasing the maximum pressure support setting allows the device to deliver a larger IPAP-EPAP differential during central events, providing greater ventilatory support to bridge the apneic periods. This is the primary ASV adjustment for persistent central apneas.',
        explanationWrong:
          'Increasing EPAP addresses obstructive events, not central apneas. Increasing minimum IPAP while decreasing maximum IPAP would paradoxically reduce the device\'s ability to respond to central events. CPAP does not treat central sleep apnea; switching to CPAP would be inappropriate.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 14,
        questionText:
          'A sleep medicine physician orders a maintenance of wakefulness test (MWT) for a commercial airline pilot being treated for OSA with CPAP. The pilot\'s CPAP compliance data shows adequate adherence (>6 hours nightly, residual AHI 2). The MWT shows a mean sleep latency of 28 minutes across four 40-minute trials. How should this result be interpreted?',
        choices: {
          A: 'The MWT result of 28 minutes (above the 8-minute threshold for definite abnormality and approaching the normal range of 30-40 minutes) suggests the ability to maintain wakefulness is slightly below normal but not definitively impaired; the result should be interpreted in conjunction with clinical assessment and CPAP compliance data',
          B: 'The MWT is indeterminate and should be repeated in 3 months',
          C: 'The MWT is abnormal; the pilot cannot fly',
          D: 'The MWT is completely normal and no further evaluation is needed',
        },
        correctChoice: 'A',
        explanationCorrect:
          'MWT interpretation requires clinical context. A mean sleep latency of 28 minutes on the 40-minute protocol is below the normal range (typically 30-40 minutes is normal, below 8 minutes is definitively abnormal, and 8-30 minutes is the indeterminate zone). This borderline result should be interpreted alongside clinical factors including CPAP compliance (which is excellent), subjective sleepiness assessment, and occupational requirements. It does not definitively establish or exclude impairment.',
        explanationWrong:
          'A sleep latency of 28 minutes is not definitively abnormal. Simply repeating the test without clinical context review is not the most informative approach. Calling the result completely normal ignores that it falls slightly below the typical normal range and warrants clinical integration.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 15,
        questionText:
          'A patient with OSA and chronic kidney disease on hemodialysis three times per week reports worsening daytime sleepiness and headaches on mornings after dialysis. His CPAP compliance is adequate. What mechanism most likely explains the worsening symptoms on post-dialysis mornings?',
        choices: {
          A: 'Fluid shifts from dialysis causing upper airway edema overnight',
          B: 'CPAP pressure becoming inadequate due to weight fluctuations between dialysis sessions',
          C: 'Anemia from dialysis causing increased daytime sleepiness',
          D: 'Fluid removal during dialysis destabilizes ventilatory control through changes in CO2 chemosensitivity and intravascular volume shifts, potentially worsening central or obstructive sleep-disordered breathing on dialysis nights',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Hemodialysis causes acute fluid shifts and electrolyte changes that can destabilize ventilatory control. Rapid fluid removal decreases CO2 chemosensitivity and causes intravascular volume shifts that can worsen both central and obstructive sleep-disordered breathing. The morning headaches may reflect nocturnal hypercapnia. This phenomenon of dialysis-night worsening of SDB is well-documented in the nephrology-sleep medicine literature.',
        explanationWrong:
          'Fluid shifts would more likely reduce rather than increase upper airway edema after fluid removal. While weight fluctuations may minimally affect pressure requirements, this is not the primary mechanism. Anemia contributes to baseline sleepiness but does not explain the specific worsening on post-dialysis mornings.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 16,
        questionText:
          'A sleep laboratory is evaluating the reliability of a new home sleep apnea test (HSAT) device. They compare results from 100 patients who underwent both in-laboratory PSG and the HSAT device on consecutive nights. The HSAT device shows an REI that averages 30% lower than the PSG AHI. What is the primary reason for this systematic difference?',
        choices: {
          A: 'HSAT uses total recording time rather than total sleep time as the denominator, and patients may have significant periods of wakefulness during recording that dilute the event count, resulting in a lower REI compared to PSG-derived AHI',
          B: 'HSAT devices have inferior signal quality compared to PSG equipment',
          C: 'Patients sleep better at home, genuinely reducing their sleep-disordered breathing',
          D: 'The PSG AHI is artificially elevated due to the first-night effect',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The most significant systematic source of REI underestimation by HSAT compared to PSG AHI is the denominator difference. PSG calculates AHI using total sleep time (verified by EEG), while HSAT uses total recording time because most HSAT devices lack EEG channels and cannot determine actual sleep time. Periods of wakefulness during the HSAT recording dilute the event count, producing a lower REI.',
        explanationWrong:
          'While signal quality differences exist, they do not account for the systematic 30% underestimation. The first-night effect tends to fragment sleep (potentially increasing rather than decreasing AHI), and sleeping better at home should theoretically reduce events, but the denominator difference is the primary established explanation for the systematic discrepancy.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 17,
        questionText:
          'A 22-year-old college student presents with excessive daytime sleepiness, episodes of sudden bilateral leg weakness when laughing, vivid hallucinations when falling asleep, and feeling unable to move for 30-60 seconds upon awakening. Which symptom is most specific for narcolepsy type 1?',
        choices: {
          A: 'Excessive daytime sleepiness',
          B: 'Sleep paralysis',
          C: 'Sudden bilateral muscle weakness triggered by emotion (cataplexy)',
          D: 'Hypnagogic hallucinations',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cataplexy, the sudden and transient loss of voluntary muscle tone triggered by strong emotions (particularly positive emotions like laughter, surprise, or excitement), is the most specific symptom for narcolepsy type 1. While EDS, sleep paralysis, and hypnagogic hallucinations can occur in various sleep disorders and even in healthy individuals, cataplexy with typical emotional triggers is essentially pathognomonic for narcolepsy type 1.',
        explanationWrong:
          'Excessive daytime sleepiness is present in numerous sleep disorders and is not specific to narcolepsy. Sleep paralysis occurs in 5-10% of the general population and is not specific to narcolepsy. Hypnagogic hallucinations are also common in the general population and occur in various sleep disorders.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 18,
        questionText:
          'A respiratory therapist is reviewing a patient\'s PAP device data and notices that the device reports a "clear airway" AHI of 12, while leak levels are consistently below 5 L/min and compliance shows 7.2 hours average use. The patient was originally diagnosed with pure obstructive sleep apnea with no central events on the diagnostic PSG. The patient reports sleeping well with no symptoms. What should be recommended?',
        choices: {
          A: 'No changes needed since the patient is asymptomatic',
          B: 'The elevated clear airway (central) AHI of 12 represents treatment-emergent central sleep apnea and warrants further evaluation with an in-laboratory titration study to characterize the events and potentially adjust therapy, even in the absence of symptoms',
          C: 'Increase CPAP pressure to reduce the central events',
          D: 'Switch immediately to ASV without further evaluation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A clear airway AHI of 12 on a device that was treating pure obstructive sleep apnea indicates treatment-emergent central sleep apnea (complex sleep apnea). Even though the patient is asymptomatic, persistent central events at this frequency warrant evaluation. An in-laboratory study is indicated to verify the events (as device algorithms can sometimes misclassify events) and determine appropriate therapy adjustments.',
        explanationWrong:
          'Ignoring an elevated central AHI simply because the patient is asymptomatic overlooks potentially significant pathology; untreated central events can have cardiovascular consequences. Increasing CPAP pressure does not treat central apneas and may worsen them. Switching to ASV without first confirming the events with an in-laboratory study bypasses appropriate diagnostic evaluation.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 19,
        questionText:
          'A patient with treated OSA (CPAP AHI residual 1, compliance 6.5 hours nightly) continues to report excessive daytime sleepiness with ESS 15 despite optimal CPAP therapy for 6 months. Thyroid function, hemoglobin, and metabolic panel are normal. Sleep duration is adequate at 7.5 hours per sleep logs. What is the most appropriate next evaluation step?',
        choices: {
          A: 'Increase CPAP pressure since residual sleepiness indicates inadequate treatment',
          B: 'Prescribe modafinil for residual sleepiness without further workup',
          C: 'Perform an MSLT to evaluate for a comorbid central disorder of hypersomnolence (such as narcolepsy or idiopathic hypersomnia) that may coexist with OSA',
          D: 'Refer for psychiatric evaluation for depression-related hypersomnia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Residual excessive daytime sleepiness despite optimally treated OSA, adequate sleep duration, and normal metabolic workup raises concern for a comorbid central disorder of hypersomnolence. An MSLT is indicated to evaluate for narcolepsy (shortened mean sleep latency with SOREMPs) or idiopathic hypersomnia (shortened sleep latency without SOREMPs). These conditions can coexist with OSA and may only become apparent after OSA is adequately treated.',
        explanationWrong:
          'A residual AHI of 1 indicates excellent OSA control; increasing pressure is unnecessary. Prescribing stimulant medication without evaluating for an underlying cause of persistent sleepiness is premature. While depression should be considered, performing an MSLT to evaluate for hypersomnolence disorders is a more targeted next step given the clinical picture.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 20,
        questionText:
          'A sleep laboratory performs both diagnostic and titration studies. The laboratory manager wants to implement a system to track and reduce the rate of technically inadequate studies. Which quality metric is most directly relevant to monitoring technical adequacy?',
        choices: {
          A: 'The number of studies performed per month',
          B: 'Patient satisfaction scores from post-study surveys',
          C: 'The percentage of studies with at least 4 hours of interpretable data in all required channels, tracked by technologist and shift to identify patterns',
          D: 'Average setup time per study',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The percentage of studies with adequate interpretable data across all required channels directly measures technical quality. Tracking this metric by technologist and shift allows identification of patterns that may indicate training needs, equipment issues, or workflow problems. The 4-hour threshold aligns with the minimum data requirement for split-night studies and provides a meaningful quality benchmark.',
        explanationWrong:
          'Patient satisfaction scores measure the patient experience but not technical quality. Study volume measures productivity, not quality. Setup time may correlate with preparation thoroughness but does not directly measure data quality outcomes.',
        topic: 'Interdisciplinary collaboration scenarios',
      },
    ],
  })

  // ─── EXAM 30 ───────────────────────────────────────────
  // Topics: Comprehensive SDS final review - integration of all domains, complex clinical reasoning
  // Correct answer distribution: A=5(Q2,Q7,Q11,Q14,Q19) B=5(Q3,Q6,Q10,Q15,Q20) C=5(Q1,Q5,Q9,Q13,Q18) D=5(Q4,Q8,Q12,Q16,Q17)
  const exam30 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 30',
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
          'A comprehensive sleep evaluation is ordered for a 50-year-old male with treatment-resistant hypertension (on 4 antihypertensive medications), BMI 34, and ESS of 14. His primary care physician suspects OSA. Which test is most appropriate for the initial evaluation?',
        choices: {
          A: 'An actigraphy study to assess sleep-wake patterns for 2 weeks',
          B: 'A home sleep apnea test (HSAT) since the pre-test probability for OSA is high',
          C: 'An attended in-laboratory polysomnography (PSG) because the high clinical complexity (resistant hypertension, significant comorbidity risk) warrants the most comprehensive evaluation with the ability to proceed to a split-night titration if severe OSA is confirmed',
          D: 'An overnight pulse oximetry study as a screening tool',
        },
        correctChoice: 'C',
        explanationCorrect:
          'While HSAT is appropriate for many patients with high pre-test probability for OSA, in-laboratory PSG is preferred when clinical complexity is high and the consequences of missed or underestimated disease are significant. Treatment-resistant hypertension suggests that undiagnosed severe OSA may be a major contributing factor. PSG provides comprehensive multichannel monitoring and the option for split-night titration, allowing immediate treatment initiation if severe OSA is confirmed.',
        explanationWrong:
          'Actigraphy assesses sleep-wake patterns but cannot diagnose OSA. While HSAT could be used, the clinical complexity and potential for comorbid sleep disorders favor in-laboratory PSG. Overnight oximetry alone is insufficiently sensitive and specific for definitive diagnosis.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 2,
        questionText:
          'A PSG technologist notices that during a diagnostic study, the patient\'s airflow signals (both nasal pressure and thermal) show complete cessation for 22 seconds while the respiratory effort channels (thoracic and abdominal belts) show continued but paradoxical movement. The event is associated with a 6% oxygen desaturation. How should this event be scored?',
        choices: {
          A: 'Obstructive apnea, because there is absent airflow with continued respiratory effort showing paradoxical (out-of-phase) thoracoabdominal movement',
          B: 'Central apnea, because the airflow cessation is complete',
          C: 'Mixed apnea, because the event duration exceeds 20 seconds',
          D: 'Hypopnea, because desaturation is only 6%',
        },
        correctChoice: 'A',
        explanationCorrect:
          'This event meets all criteria for an obstructive apnea: complete cessation of airflow (>90% reduction) lasting at least 10 seconds with continued respiratory effort. The paradoxical thoracoabdominal movement (chest and abdomen moving in opposite directions) is characteristic of obstructive events, indicating the patient is making respiratory efforts against an occluded upper airway. The desaturation further confirms the clinical significance.',
        explanationWrong:
          'Central apnea requires absent airflow AND absent respiratory effort. The continued but paradoxical respiratory effort distinguishes this as an obstructive event. Event duration does not determine whether an apnea is mixed; mixed apneas require an initial central component followed by an obstructive component. The event is an apnea (complete airflow cessation), not a hypopnea.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 3,
        questionText:
          'A 60-year-old male with moderate OSA (AHI 20) has been on CPAP at 10 cmH2O for 1 year. He presents for follow-up and reports that his bed partner says his snoring has returned. His weight is unchanged. CPAP download shows average use of 6 hours per night, residual AHI of 1, and no significant leak. What is the most likely explanation for the recurrent snoring?',
        choices: {
          A: 'The CPAP machine is losing pressure output and needs to be replaced',
          B: 'The snoring is occurring during the portion of the night when the patient is not wearing CPAP (the last 1-2 hours of sleep)',
          C: 'The patient may be removing CPAP partway through the night and snoring without the device; alternatively, the snoring may occur during pre-CPAP sleep or after removal',
          D: 'The residual AHI of 1 proves the CPAP is working perfectly and the bed partner must be mistaken',
        },
        correctChoice: 'B',
        explanationCorrect:
          'With 6 hours of average CPAP use, excellent residual AHI (1), and no leak issues, the CPAP is effectively treating OSA while in use. However, if the patient sleeps 7-8 hours per night, the final 1-2 hours without CPAP represent untreated sleep time during which snoring and obstructive events can recur. This is a common scenario where device data looks adequate but symptoms persist during off-device sleep periods.',
        explanationWrong:
          'CPAP machines maintain calibrated pressure output; a device malfunction would be reflected in the download data. Dismissing the bed partner\'s observation is inappropriate; bed partner reports of snoring are generally reliable. While option C describes a similar concept, option B is more precise about the timing and mechanism.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 4,
        questionText:
          'A 70-year-old male with heart failure (EF 25%) on optimal guideline-directed medical therapy continues to have central sleep apnea with Cheyne-Stokes respiration (CSA-CSR) on his most recent PSG (central AHI 32). His cardiologist asks about PAP therapy options. Given the SERVE-HF trial results, what is the most appropriate recommendation?',
        choices: {
          A: 'Adaptive servo-ventilation (ASV) is the treatment of choice for CSA-CSR',
          B: 'CPAP at a fixed pressure will eliminate the Cheyne-Stokes pattern',
          C: 'Auto-PAP to dynamically adjust to the variable respiratory pattern',
          D: 'ASV is contraindicated in this patient due to the SERVE-HF trial findings showing increased cardiovascular mortality in HFrEF patients with EF ≤45%. Consider CPAP as an alternative, or evaluate for phrenic nerve stimulation or supplemental oxygen',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The SERVE-HF trial demonstrated that ASV was associated with increased all-cause and cardiovascular mortality in patients with heart failure and reduced ejection fraction (EF ≤45%) and CSA. This patient\'s EF of 25% places him squarely in the contraindicated group. Alternative options include CPAP (which has shown modest benefit in some studies), supplemental oxygen, or newer approaches like transvenous phrenic nerve stimulation.',
        explanationWrong:
          'ASV is contraindicated, not recommended, in this patient population. CPAP does not reliably eliminate CSA-CSR but may provide modest benefit. Auto-PAP is designed for obstructive events and is inappropriate for central sleep apnea.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 5,
        questionText:
          'A technologist is performing a diagnostic PSG on a patient with suspected REM sleep behavior disorder. To optimize detection of REM without atonia, which additional EMG recording montage should be included beyond the standard chin EMG?',
        choices: {
          A: 'Bilateral deltoid EMG to detect arm movements',
          B: 'Bilateral anterior tibialis EMG combined with bilateral flexor digitorum superficialis (forearm) EMG to capture both upper and lower extremity phasic EMG activity during REM',
          C: 'Bilateral intercostal EMG to monitor respiratory effort',
          D: 'A single additional leg EMG channel is sufficient',
        },
        correctChoice: 'B',
        explanationCorrect:
          'AASM guidelines for RBD evaluation recommend an expanded EMG montage including bilateral anterior tibialis and bilateral upper extremity EMG (typically flexor digitorum superficialis). This expanded montage increases sensitivity for detecting REM without atonia by capturing both upper and lower extremity phasic EMG activity. RBD can manifest with asymmetric or preferentially upper or lower extremity motor activity.',
        explanationWrong:
          'Deltoid EMG is not the standard recommended upper extremity location for RBD assessment. Intercostal EMG monitors respiration, not limb movement during RBD. A single leg channel may miss asymmetric motor activity and does not capture upper extremity involvement.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 6,
        questionText:
          'A patient with severe OSA on CPAP at 15 cmH2O develops acute sinusitis. He asks whether he should continue using CPAP during the infection. What is the most appropriate advice?',
        choices: {
          A: 'Discontinue CPAP completely until the sinusitis resolves',
          B: 'Continue CPAP with increased humidification and consider adding a heated tube. If nasal congestion is severe, a temporary switch to a full-face mask may be needed. Saline nasal irrigation and appropriate medical treatment for the sinusitis should be pursued concurrently',
          C: 'Reduce CPAP pressure by 50% during the illness',
          D: 'Switch to an oral appliance during the infection period',
        },
        correctChoice: 'B',
        explanationCorrect:
          'CPAP should be continued during acute sinusitis because the severe OSA still requires treatment. Increased humidification and heated tubing help with nasal dryness and congestion. A full-face mask may be necessary if nasal congestion is severe enough to prevent effective nasal CPAP delivery. The sinusitis should be treated concurrently with appropriate medical therapy (antibiotics if bacterial, saline irrigation, decongestants).',
        explanationWrong:
          'Discontinuing CPAP for severe OSA (AHI warranting 15 cmH2O) leaves the patient at risk for significant desaturation and cardiovascular stress. Reducing pressure by 50% would result in inadequate treatment. An oral appliance for severe OSA is likely inadequate and introducing a new device during an acute illness is impractical.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 7,
        questionText:
          'During a PAP titration, a patient on BiPAP 16/10 cmH2O has persistent hypoxemia (SpO2 85%) despite elimination of obstructive events. The patient has known interstitial lung disease. Supplemental oxygen at 2 L/min is added via the PAP circuit and SpO2 improves to 88%. How should the oxygen delivery be adjusted?',
        choices: {
          A: 'Increase supplemental oxygen flow rate incrementally (to 3-4 L/min or higher as needed) to achieve target SpO2 above 90%, while ensuring the total flow does not exceed the PAP device\'s compensation capability',
          B: 'The SpO2 of 88% is adequate and no further adjustment is needed',
          C: 'Discontinue BiPAP and use oxygen alone via nasal cannula',
          D: 'Increase the BiPAP IPAP to 22 cmH2O to improve oxygenation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'With obstructive events eliminated, the persistent hypoxemia is due to the underlying interstitial lung disease causing V/Q mismatch and diffusion impairment. Supplemental oxygen should be titrated to achieve SpO2 above 90% (the standard nocturnal target). The oxygen flow rate should be increased incrementally while monitoring that the PAP device can compensate for the additional flow in the circuit.',
        explanationWrong:
          'An SpO2 of 88% remains below the target of 90% for nocturnal oxygen therapy. Discontinuing BiPAP would leave the obstructive component untreated. Increasing IPAP would not improve oxygenation from parenchymal lung disease; pressure support addresses ventilation (CO2), while supplemental oxygen addresses oxygenation.',
        topic: 'PAP titration case studies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 8,
        questionText:
          'A sleep laboratory receives a referral for an MSLT on a 25-year-old patient taking fluoxetine (an SSRI) for depression. The referring physician suspects narcolepsy. What is the most important pre-test consideration regarding the fluoxetine?',
        choices: {
          A: 'Fluoxetine has no effect on MSLT results and can be continued',
          B: 'Fluoxetine should be stopped 24 hours before the test',
          C: 'The patient should increase fluoxetine dose before the test to normalize sleep architecture',
          D: 'Fluoxetine is a potent REM suppressant that can eliminate SOREMPs and produce false-negative MSLT results. It should be tapered and discontinued (with a washout period of at least 2 weeks, or longer given fluoxetine\'s long half-life active metabolite) before the MSLT, in coordination with the prescribing psychiatrist',
        },
        correctChoice: 'D',
        explanationCorrect:
          'SSRIs, including fluoxetine, are potent REM sleep suppressants that can eliminate SOREMPs on the MSLT, leading to false-negative results for narcolepsy. Fluoxetine is particularly problematic because its active metabolite (norfluoxetine) has a half-life of 4-16 days, requiring an extended washout period (typically 2-5 weeks). Tapering must be coordinated with the prescribing psychiatrist to manage depression safely during the washout period.',
        explanationWrong:
          'SSRIs significantly affect REM sleep and MSLT interpretation. A 24-hour discontinuation is grossly insufficient given fluoxetine\'s long half-life. Increasing the dose would worsen REM suppression. The extended washout is specifically important for fluoxetine due to its unique pharmacokinetics.',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 9,
        questionText:
          'A patient with OSA on CPAP at 12 cmH2O reports a burning sensation in his chest and worsening gastroesophageal reflux symptoms since starting PAP therapy 3 months ago. He has no history of GERD. What is the most likely mechanism and appropriate response?',
        choices: {
          A: 'CPAP is unrelated to GERD symptoms; refer to gastroenterology independently',
          B: 'The chest burning is from mask skin irritation and should resolve with a different mask material',
          C: 'Aerophagia from CPAP is distending the stomach, lowering the lower esophageal sphincter pressure, and promoting reflux. Consider reducing CPAP pressure if feasible, adding expiratory pressure relief, elevating the head of the bed, and recommending the patient avoid eating close to bedtime. If symptoms persist, a gastroenterology referral is appropriate',
          D: 'Switch to BiPAP to eliminate the aerophagia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'CPAP-induced aerophagia (air swallowing) can distend the stomach, which reduces lower esophageal sphincter competency and promotes gastroesophageal reflux. This is a recognized complication of PAP therapy, particularly at higher pressures. A multimodal approach including pressure optimization (if clinically possible without compromising OSA treatment), EPR, positional measures, and dietary timing adjustments can mitigate the symptoms.',
        explanationWrong:
          'The temporal relationship with CPAP initiation strongly suggests a PAP-related cause. Mask skin irritation would not cause chest burning and reflux. While BiPAP may help with expiratory comfort, it does not eliminate aerophagia and may not be indicated if CPAP is otherwise effective.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 10,
        questionText:
          'A 12-year-old child with Down syndrome and moderate-to-severe OSA (AHI 15) had an adenotonsillectomy 6 months ago. A post-operative PSG shows a residual AHI of 10 with predominantly obstructive events. CPAP titration is planned. What special consideration is most important when selecting a PAP interface for this patient?',
        choices: {
          A: 'Use the largest available adult mask to ensure adequate seal',
          B: 'A nasal pillow interface is preferred for all pediatric patients',
          C: 'Select a pediatric-sized mask that accommodates the midface hypoplasia characteristic of Down syndrome, and consider a custom-fitted interface if standard masks do not provide an adequate seal due to the flattened nasal bridge',
          D: 'The mask selection is not important as long as the pressure is adequate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Children with Down syndrome have characteristic midface hypoplasia with a flattened nasal bridge, which makes standard mask fitting challenging. A pediatric-sized mask should be selected, but the facial anatomy may require trying multiple interfaces or considering a custom-fitted mask. Ensuring a proper seal without excessive strap tension (which can cause midface growth restriction in a growing child) is a critical consideration.',
        explanationWrong:
          'An adult mask would be too large for a 12-year-old and would not accommodate the facial anatomy. Nasal pillows may not seal properly with the nasal anatomy of Down syndrome patients and are not universally preferred in pediatrics. Mask selection directly affects therapy adherence and efficacy, making it critically important.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 11,
        questionText:
          'A technologist is scoring a PSG and encounters a 30-second epoch during which the first 12 seconds shows stage N2 features (K-complexes) and the final 18 seconds shows clear REM sleep features (rapid eye movements, low-voltage mixed-frequency EEG, low chin EMG). How should this epoch be scored?',
        choices: {
          A: 'Stage R, because the epoch should be scored based on the sleep stage present for the majority (>50%) of the epoch',
          B: 'Stage N2, because the epoch began in N2 and the first event determines the scoring',
          C: 'The epoch should be split, scoring the first half as N2 and the second half as R',
          D: 'Stage N2 because K-complexes override REM scoring criteria',
        },
        correctChoice: 'A',
        explanationCorrect:
          'AASM scoring rules apply the "majority rules" principle: an epoch is scored based on the sleep stage occupying the greatest portion of the epoch. Since REM sleep features are present for 18 of 30 seconds (60% of the epoch), and N2 features are present for 12 seconds (40%), the epoch should be scored as stage R. Epochs are not split into partial scores.',
        explanationWrong:
          'The first event in the epoch does not determine scoring; the majority principle applies. Epochs are always scored as a single stage; splitting is not permitted under AASM rules. K-complexes do not override REM criteria when REM features occupy the majority of the epoch.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 12,
        questionText:
          'A patient with ALS (amyotrophic lateral sclerosis) and nocturnal hypoventilation is initiated on BiPAP ST 14/8 cmH2O with a backup rate of 14. At a 3-month follow-up, the patient reports progressive difficulty clearing secretions and occasional aspiration. The pulmonologist asks about the next steps for ventilatory management. What is the most appropriate recommendation?',
        choices: {
          A: 'Switch to invasive ventilation via tracheostomy immediately',
          B: 'Discontinue BiPAP since the patient is aspirating',
          C: 'Add supplemental oxygen to improve oxygenation during aspiration events',
          D: 'Reassess BiPAP settings with consideration for increasing pressure support. Add a mechanical insufflation-exsufflation (cough assist) device for secretion management. Discuss advance directives and the trajectory of ALS respiratory care with the patient, including the eventual decision regarding invasive ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Progressive ALS requires a comprehensive respiratory management approach. BiPAP settings should be reassessed as respiratory muscle weakness progresses. A cough assist device (mechanical insufflation-exsufflation) helps manage secretions in patients with weakening cough. Importantly, discussions about advance directives and the trajectory of care (including the decision about whether to pursue tracheostomy ventilation) should occur while the patient can still communicate their wishes.',
        explanationWrong:
          'Immediate tracheostomy is premature without exhausting noninvasive options and discussing patient preferences. Discontinuing BiPAP would worsen hypoventilation. Supplemental oxygen without addressing ventilation and secretion management does not address the underlying problems and may suppress respiratory drive.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 13,
        questionText:
          'A sleep center is auditing its PAP therapy outcomes. Data shows that patients who receive mask desensitization before their first night of CPAP use have 30-day adherence rates of 68%, compared to 55% for those who do not. The center wants to expand the desensitization program. Which approach is most likely to be effective?',
        choices: {
          A: 'Require all patients to attend a 4-hour in-laboratory desensitization session',
          B: 'Provide a written pamphlet about CPAP use instead of hands-on desensitization',
          C: 'Implement a standardized pre-therapy education session that includes hands-on mask fitting, gradual exposure to PAP pressure while awake, practice wearing the mask during a brief rest period, and instruction on basic troubleshooting techniques',
          D: 'Only offer desensitization to patients who express anxiety about CPAP',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A structured, standardized pre-therapy education program with hands-on components addresses the key predictors of early CPAP abandonment: unfamiliarity with the equipment, anxiety about wearing a mask, and lack of troubleshooting skills. The combination of mask fitting, gradual pressure exposure, practice wearing the mask, and troubleshooting instruction provides comprehensive preparation that has been shown to improve adherence outcomes.',
        explanationWrong:
          'A 4-hour session may be excessive, creating barriers to patient participation. Written pamphlets alone lack the hands-on component shown to improve adherence. Limiting desensitization to anxious patients only misses the benefit for all new PAP users; the data shows broad benefit across the patient population.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 14,
        questionText:
          'A sleep technologist is reviewing a titration study and observes that during a period on CPAP at 13 cmH2O, the patient develops a regular pattern of periodic breathing with central apneas lasting 15-20 seconds alternating with hyperpneic phases lasting 25-30 seconds. The cycle length is approximately 45 seconds. The patient has no known cardiac disease. What is the significance of this cycle length?',
        choices: {
          A: 'A cycle length of approximately 45 seconds is shorter than the 60+ second cycle length typically seen in Cheyne-Stokes respiration associated with heart failure, suggesting this may be treatment-emergent central sleep apnea or a non-cardiac central apnea etiology rather than CSR from occult heart failure',
          B: 'Cycle length has no clinical significance in central sleep apnea classification',
          C: 'A 45-second cycle length confirms Cheyne-Stokes respiration',
          D: 'A 45-second cycle is always caused by opioid use',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Cycle length in periodic breathing patterns has diagnostic significance. Cheyne-Stokes respiration associated with heart failure typically has a longer cycle length (60-90+ seconds) due to prolonged circulatory time. A shorter cycle length of 45 seconds, particularly emerging during PAP therapy, is more consistent with treatment-emergent central sleep apnea or non-cardiac central apnea. This distinction can help guide further diagnostic evaluation.',
        explanationWrong:
          'Cycle length is clinically informative for differentiating types of central sleep apnea. A 45-second cycle is shorter than typical CSR. Opioid-induced central apneas have a different pattern (ataxic or irregular breathing rather than regular periodic breathing with predictable cycle lengths).',
        topic: 'Sleep study data interpretation',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 15,
        questionText:
          'A respiratory therapist is performing a CPAP clinic follow-up on a patient who reports that her CPAP seems to be getting louder over the past month. She is using a device that is 4 years old. The mask seal appears good and there are no obvious external leaks. What is the most appropriate troubleshooting step?',
        choices: {
          A: 'Reassure the patient that all CPAP devices get louder with age and this is normal',
          B: 'Inspect the device air intake filter for dirt, debris, or obstruction; check the tubing for cracks, holes, or pinched sections; and listen for abnormal motor sounds. A clogged filter is the most common cause of increased device noise and is easily remedied',
          C: 'Recommend the patient use earplugs to address the noise',
          D: 'Replace the entire device immediately as increased noise always indicates motor failure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Systematic troubleshooting of increased CPAP noise should begin with the most common and easily remedied cause: a dirty or clogged air intake filter, which forces the motor to work harder and produce more noise. Additionally, tubing inspection for cracks or obstructions and assessment of the motor for abnormal sounds (grinding, rattling) can identify other correctable causes before concluding device replacement is needed.',
        explanationWrong:
          'Increasing noise is not a normal aging characteristic and should be investigated. Earplugs do not address the underlying cause, which may indicate a maintenance issue affecting device performance. While motor failure is possible, it is not the only cause of increased noise, and a clogged filter is far more common.',
        topic: 'Equipment selection and management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 16,
        questionText:
          'A 40-year-old female presents with excessive daytime sleepiness, fatigue, and difficulty concentrating. She reports sleeping 10 hours per night but never feeling refreshed. Her PSG shows normal sleep architecture with no SDB (AHI 1), no PLMs, and a total sleep time of 9.5 hours with sleep efficiency of 94%. An MSLT shows a mean sleep latency of 6 minutes with 0 SOREMPs. What is the most likely diagnosis?',
        choices: {
          A: 'Narcolepsy type 2',
          B: 'Insufficient sleep syndrome',
          C: 'Depression-related hypersomnia',
          D: 'Idiopathic hypersomnia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The clinical picture of excessive sleepiness despite prolonged but unrefreshing sleep, with MSLT showing shortened mean sleep latency (<8 minutes) but no SOREMPs (<2), is consistent with idiopathic hypersomnia. The prolonged nighttime sleep (9.5+ hours) with high sleep efficiency rules out sleep fragmentation, and the absence of SOREMPs differentiates this from narcolepsy. The normal PSG excludes other primary sleep disorders.',
        explanationWrong:
          'Narcolepsy type 2 requires 2 or more SOREMPs on the MSLT. Insufficient sleep syndrome would show short sleep duration, not 10 hours. While depression can cause hypersomnia, the normal sleep architecture and the specific MSLT pattern are more consistent with idiopathic hypersomnia as the primary diagnosis.',
        topic: 'Clinical decision-making for sleep disorder diagnosis',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 17,
        questionText:
          'A patient with Down syndrome, severe OSA (AHI 35), and congenital heart disease (repaired atrioventricular septal defect with residual left-to-right shunt) is being titrated on CPAP. At what CPAP pressure should the technologist exercise particular caution regarding hemodynamic effects?',
        choices: {
          A: 'CPAP pressures above 5 cmH2O are dangerous in all congenital heart disease patients',
          B: 'Hemodynamic concerns are only relevant for pressures above 25 cmH2O',
          C: 'CPAP pressure has no hemodynamic effects in patients with congenital heart disease',
          D: 'Higher CPAP pressures (generally above 10-12 cmH2O) should be applied cautiously because positive intrathoracic pressure can reduce preload and affect cardiac output in patients with structural heart disease; the specific hemodynamic impact depends on the nature of the cardiac lesion and should be discussed with the cardiologist beforehand',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In patients with structural heart disease, positive intrathoracic pressure from CPAP affects cardiac hemodynamics by reducing venous return (preload) and altering the balance of intracardiac shunts. In a patient with a residual left-to-right shunt, pressure effects on pulmonary vascular resistance and right heart filling pressures are particularly relevant. Pre-titration communication with the cardiologist about acceptable pressure ranges and monitoring parameters is essential.',
        explanationWrong:
          'A blanket 5 cmH2O limit is overly conservative and not evidence-based for all congenital heart disease. Waiting until 25 cmH2O shows disregard for the hemodynamic effects that can occur at much lower pressures. CPAP clearly has hemodynamic effects that are amplified in structural heart disease.',
        topic: 'Multi-condition patient scenarios',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 18,
        questionText:
          'A sleep technologist observes a patient during a PSG who exhibits rhythmic movements of the head and body (head banging and body rocking) during the transition from wake to sleep. The movements occur in clusters lasting 5-10 minutes and resolve once the patient enters consolidated N2 sleep. The patient is a 22-year-old with no developmental disabilities. How should these movements be classified?',
        choices: {
          A: 'Periodic limb movements during the sleep-wake transition',
          B: 'Seizure activity requiring immediate intervention',
          C: 'Sleep-related rhythmic movement disorder, which can persist into adulthood and is characterized by repetitive, stereotyped, rhythmic motor behaviors during drowsiness and the wake-to-sleep transition',
          D: 'Restless legs syndrome manifesting as body movements',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep-related rhythmic movement disorder (RMD) involves repetitive, stereotyped, rhythmic motor behaviors (head banging, body rocking, head rolling) that occur during drowsiness and the wake-to-sleep transition. While most common in infants and young children, RMD can persist into adulthood. The stereotyped, rhythmic nature and occurrence specifically during the wake-to-sleep transition are key diagnostic features.',
        explanationWrong:
          'Periodic limb movements involve repetitive flexion movements of the lower extremities, not rhythmic head banging and body rocking. The stereotyped, rhythmic pattern that resolves with consolidated sleep is not consistent with seizure activity. Restless legs syndrome causes an urge to move the legs, not rhythmic head and body movements.',
        topic: 'PSG interpretation and troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 19,
        questionText:
          'A new PAP patient calls the clinic 3 days after starting CPAP, reporting that he wakes up every morning with a dry mouth despite using heated humidification. He is using a nasal mask. What is the most likely cause and the best initial intervention?',
        choices: {
          A: 'The patient is likely mouth breathing during sleep, which allows humidified air to escape through the mouth without reaching the lower airways. The initial intervention should be adding a chin strap to maintain mouth closure, and if ineffective, consider switching to an oronasal (full-face) mask',
          B: 'The heated humidifier is malfunctioning and should be replaced',
          C: 'Dry mouth is an expected permanent side effect of CPAP that cannot be mitigated',
          D: 'The CPAP pressure is too high and should be reduced',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Dry mouth with a nasal CPAP mask is most commonly caused by mouth breathing during sleep. Air enters through the nose under pressure, passes through the oropharynx, and exits through the open mouth, creating a continuous flow of dry air over the oral mucosa. A chin strap to maintain mouth closure is the first intervention. If mouth breathing persists despite a chin strap, switching to a full-face mask that covers both the nose and mouth eliminates the mouth leak pathway.',
        explanationWrong:
          'The humidifier is likely functioning normally; the problem is mouth leak bypassing the humidified air delivery. Dry mouth from mouth leak is treatable, not a permanent side effect. Reducing CPAP pressure does not address mouth leak and may result in inadequate OSA treatment.',
        topic: 'Patient education and compliance strategies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 20,
        questionText:
          'A sleep medicine program is developing a comprehensive quality improvement framework. They want to track outcomes across the entire patient care pathway from referral to long-term treatment success. Which set of metrics best captures the full continuum of care?',
        choices: {
          A: 'Number of sleep studies performed monthly and revenue per study',
          B: 'Referral-to-appointment wait time, time from diagnosis to treatment initiation, 90-day PAP adherence rate (percentage meeting CMS criteria), residual AHI on treatment, patient-reported outcome measures (ESS, functional status), and rate of successful long-term follow-up retention',
          C: 'Patient satisfaction scores and online review ratings',
          D: 'Number of CPAP devices dispensed per quarter',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A comprehensive quality framework should capture the full care continuum: access (wait times), efficiency (diagnosis-to-treatment time), treatment effectiveness (adherence rates, residual AHI), patient outcomes (sleepiness improvement, functional status), and continuity (follow-up retention). This multidimensional approach identifies bottlenecks and opportunities for improvement at every stage of the patient journey.',
        explanationWrong:
          'Volume and revenue metrics measure business performance, not clinical quality. Patient satisfaction alone does not capture clinical outcomes or process efficiency. Device dispensing volume measures activity, not treatment success or patient outcomes.',
        topic: 'Interdisciplinary collaboration scenarios',
      },
    ],
  })

  console.log('SDS mini exams 26-30 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
