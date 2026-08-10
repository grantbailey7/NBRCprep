import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SDS_DIVISION_ID = 'cmsm41fwz0003zf54l0h5llrr'

async function main() {
  console.log('Seeding SDS mini exams 1-5...')

  // ─── EXAM 1 (isFree: true) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q14,Q18) B=5(Q1,Q7,Q11,Q16,Q20) C=5(Q3,Q8,Q12,Q15,Q19) D=5(Q4,Q6,Q10,Q13,Q17)
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 1',
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
          'During a diagnostic polysomnogram, a technologist notices the patient\'s chin EMG signal shows intermittent high-amplitude artifact. Which of the following is the most likely cause?',
        choices: {
          A: 'Electrode impedance below 5 kOhm',
          B: 'The patient is grinding their teeth during sleep',
          C: 'Incorrect high-frequency filter setting on the EEG channel',
          D: 'A broken reference electrode wire',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Bruxism (teeth grinding) produces intermittent bursts of high-amplitude EMG activity on the chin EMG channel. This is a physiologic artifact caused by rhythmic masticatory muscle activity and is a common finding during polysomnography.',
        explanationWrong:
          'Low electrode impedance (below 5 kOhm) is the desired state and would not cause artifact. Incorrect high-frequency filter settings affect EEG channels, not EMG specifically. A broken reference electrode would typically produce continuous artifact rather than intermittent bursts.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          'According to the AASM scoring manual, which combination of EEG findings defines stage N3 sleep?',
        choices: {
          A: 'Slow-wave activity of 0.5–2 Hz with peak-to-peak amplitude greater than 75 microvolts comprising 20% or more of an epoch',
          B: 'Sleep spindles and K-complexes present in at least 50% of the epoch',
          C: 'Low-amplitude mixed-frequency EEG with rapid eye movements',
          D: 'Alpha rhythm attenuation with vertex sharp waves',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Stage N3 sleep is defined by the presence of slow-wave activity (0.5–2 Hz) with peak-to-peak amplitude greater than 75 microvolts in at least 20% of a 30-second epoch, as measured from frontal derivations.',
        explanationWrong:
          'Sleep spindles and K-complexes are hallmarks of stage N2, not N3. Low-amplitude mixed-frequency EEG with rapid eye movements describes REM sleep. Alpha attenuation with vertex sharp waves is characteristic of the transition from wake to N1 sleep.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          'A patient undergoes a diagnostic PSG and has 45 obstructive apneas, 30 obstructive hypopneas, and 5 central apneas during 400 minutes of total sleep time. What is the patient\'s AHI and OSA severity classification?',
        choices: {
          A: '12.0 events/hour — moderate OSA',
          B: '18.75 events/hour — moderate OSA',
          C: '12.0 events/hour — moderate OSA',
          D: '20.0 events/hour — severe OSA',
        },
        correctChoice: 'C',
        explanationCorrect:
          'AHI is calculated as (total apneas + hypopneas) / total sleep time in hours. (45 + 30 + 5) / (400/60) = 80 / 6.67 = 12.0 events/hour. An AHI of 12.0 falls in the moderate range (5–14.9 or, per some criteria, 15–29.9 is moderate). With 12 events/hour this is moderate OSA.',
        explanationWrong:
          'The calculation must include all apneas (obstructive and central) plus hypopneas divided by total sleep time in hours. An AHI of 12.0 does not meet the severe threshold of 30 or more events per hour. The value of 18.75 and 20.0 reflect incorrect calculations.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          'During a CPAP titration study, the patient continues to have obstructive hypopneas at 12 cmH2O. The AASM titration protocol recommends which of the following adjustments?',
        choices: {
          A: 'Switch to bilevel PAP immediately',
          B: 'Maintain the current pressure for at least 30 minutes before any change',
          C: 'Decrease the pressure by 2 cmH2O to improve patient comfort',
          D: 'Increase the pressure by 1 cmH2O after at least a 5-minute observation period',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The AASM CPAP titration protocol recommends increasing pressure by at least 1 cmH2O (with a minimum 5-minute interval between increases) when obstructive apneas, hypopneas, or RERAs persist at the current pressure setting.',
        explanationWrong:
          'Switching to bilevel PAP is not indicated until CPAP pressure reaches 15 cmH2O or the patient is intolerant of high CPAP pressures. Maintaining the same pressure would not resolve ongoing respiratory events. Decreasing pressure would worsen the obstructive events.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          'According to the AASM scoring rules, which of the following criteria must be met to score an event as an obstructive apnea?',
        choices: {
          A: 'A drop in peak airflow signal by 90% or more from baseline lasting at least 10 seconds with continued or increased respiratory effort throughout the event',
          B: 'A drop in airflow by 50% or more with a 3% oxygen desaturation',
          C: 'Cessation of airflow for at least 10 seconds with absent respiratory effort',
          D: 'A drop in airflow by 30% or more with an associated arousal',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An obstructive apnea is scored when the peak thermal sensor signal drops by 90% or more from pre-event baseline, the event duration is at least 10 seconds, and there is continued or increased inspiratory effort throughout the entire period of absent airflow.',
        explanationWrong:
          'A 50% drop in airflow with desaturation describes a hypopnea, not an apnea. Cessation of airflow with absent respiratory effort defines a central apnea, not obstructive. A 30% drop with arousal describes a RERA under the recommended scoring rule.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          'In a healthy young adult, which of the following best describes normal sleep architecture during the first sleep cycle of the night?',
        choices: {
          A: 'The first REM period is the longest of the night',
          B: 'Stage N2 typically occupies approximately 5% of total sleep time',
          C: 'REM sleep latency is normally between 60 and 120 minutes',
          D: 'The first sleep cycle contains the greatest proportion of slow-wave sleep',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In healthy young adults, the first and second sleep cycles of the night contain the largest amount of stage N3 (slow-wave) sleep. As the night progresses, N3 diminishes and REM periods become longer and more frequent.',
        explanationWrong:
          'The first REM period is typically the shortest, not the longest — REM periods lengthen as the night progresses. Stage N2 normally occupies approximately 45–55% of total sleep time, not 5%. Normal REM sleep latency is typically 70–100 minutes, but stating 60–120 minutes is a broader range that overlaps with the description of the first cycle having the most slow-wave sleep being the more definitive answer.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          'A 72-year-old patient with congestive heart failure demonstrates a repetitive crescendo-decrescendo breathing pattern with central apneas during a polysomnogram. Which of the following best characterizes this pattern?',
        choices: {
          A: 'Treatment-emergent central sleep apnea',
          B: 'Cheyne-Stokes respiration with a cycle length typically between 45 and 90 seconds',
          C: 'Obesity hypoventilation syndrome',
          D: 'Upper airway resistance syndrome',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Cheyne-Stokes respiration is characterized by a crescendo-decrescendo pattern of ventilation alternating with central apneas or hypopneas. It is commonly associated with heart failure and has a typical cycle length of 45–90 seconds. The prolonged circulation time in CHF patients contributes to this pattern.',
        explanationWrong:
          'Treatment-emergent central sleep apnea occurs during PAP therapy, not during a diagnostic study in the absence of PAP. Obesity hypoventilation syndrome involves sustained hypoventilation, not a cyclical crescendo-decrescendo pattern. Upper airway resistance syndrome involves increased respiratory effort-related arousals, not central apneas.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          'A Type III home sleep apnea test (HSAT) device typically records which of the following minimum set of signals?',
        choices: {
          A: 'EEG, EOG, chin EMG, and pulse oximetry',
          B: 'Single-channel airflow and snoring microphone only',
          C: 'Airflow, respiratory effort, and oxygen saturation',
          D: 'Full polysomnographic montage minus video',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A Type III portable monitoring device records a minimum of four channels including airflow (nasal pressure or thermistor), respiratory effort (chest and/or abdominal belts), oxygen saturation (pulse oximetry), and typically heart rate or ECG. The core triad is airflow, effort, and oximetry.',
        explanationWrong:
          'EEG, EOG, and chin EMG are neurophysiologic channels used in Type I and Type II studies but are not included in Type III devices. A single-channel device describes Type IV monitoring. A full PSG montage minus video would be a Type II portable study, not Type III.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          'A patient with severe OSA and an AHI of 55 events/hour is started on CPAP. At what minimum pressure should the titration typically begin?',
        choices: {
          A: '4 cmH2O',
          B: '8 cmH2O',
          C: '10 cmH2O',
          D: '6 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'According to the AASM clinical guidelines for CPAP titration, the starting pressure should be 4 cmH2O regardless of OSA severity. The pressure is then gradually increased to eliminate obstructive respiratory events, snoring, and oxygen desaturations.',
        explanationWrong:
          'Starting at 8 or 10 cmH2O is not recommended as a default starting pressure per AASM guidelines, though some protocols allow higher starting pressures based on the predicted pressure formula. The standard recommendation is to begin at 4 cmH2O. Starting at 6 cmH2O is also above the recommended baseline starting pressure.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          'During polysomnography, a technologist notes that the nasal pressure transducer signal is showing a flattened inspiratory flow contour while the thermistor signal remains relatively normal. Which of the following does this finding most likely indicate?',
        choices: {
          A: 'Signal artifact from a loose nasal cannula',
          B: 'Central apnea events',
          C: 'Normal tidal breathing without obstruction',
          D: 'Inspiratory flow limitation consistent with increased upper airway resistance',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A flattened inspiratory flow contour on the nasal pressure transducer signal indicates inspiratory flow limitation, which reflects increased upper airway resistance. The nasal pressure transducer is more sensitive to subtle flow changes than the thermistor, which is why the thermistor may appear normal.',
        explanationWrong:
          'A loose nasal cannula would typically produce a diminished or absent signal, not a specifically flattened contour. Central apnea is characterized by absent airflow and absent effort, not flow limitation. Normal tidal breathing shows a rounded sinusoidal flow pattern, not a flattened one.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          'A patient on CPAP therapy reports persistent nasal dryness and congestion. Which PAP accessory or adjustment is most appropriate to address this issue?',
        choices: {
          A: 'Switching from a nasal mask to a full-face mask',
          B: 'Adding a heated humidifier to the CPAP device',
          C: 'Increasing the ramp time setting',
          D: 'Reducing the CPAP pressure by 2 cmH2O',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A heated humidifier warms and moistens the delivered air, which directly addresses nasal dryness and congestion caused by the continuous flow of dry pressurized air. This is the first-line intervention for PAP-related nasal mucosal dryness.',
        explanationWrong:
          'Switching to a full-face mask would not resolve nasal dryness and may worsen mouth dryness issues. Increasing ramp time only delays the time to reach therapeutic pressure and does not address mucosal dryness. Reducing CPAP pressure could result in subtherapeutic treatment and recurrence of obstructive events.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          'A patient presents with a primary complaint of difficulty initiating sleep at a conventional bedtime of 10 PM but reports no difficulty maintaining sleep once asleep. They naturally fall asleep around 3 AM and wake at 11 AM. Which circadian rhythm disorder is most consistent with this presentation?',
        choices: {
          A: 'Advanced sleep-wake phase disorder',
          B: 'Non-24-hour sleep-wake rhythm disorder',
          C: 'Delayed sleep-wake phase disorder',
          D: 'Shift work disorder',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Delayed sleep-wake phase disorder (DSWPD) is characterized by a habitual sleep onset and wake time that are significantly later than conventional or desired times. Patients typically cannot fall asleep until 2–6 AM and have difficulty waking for morning obligations, but sleep quality is normal once asleep.',
        explanationWrong:
          'Advanced sleep-wake phase disorder involves abnormally early sleep onset and early morning awakening. Non-24-hour sleep-wake rhythm disorder involves a progressively shifting sleep-wake cycle and is most common in blind individuals. Shift work disorder is related to work schedules that overlap the normal sleep period.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          'During a split-night polysomnogram, the diagnostic portion reveals an AHI of 42 events/hour. During the CPAP titration portion, the optimal pressure is determined to be 11 cmH2O but REM sleep was not captured. What is the most appropriate recommendation?',
        choices: {
          A: 'Accept the titration result and prescribe CPAP at 11 cmH2O',
          B: 'Prescribe auto-adjusting PAP (APAP) with a range of 4–20 cmH2O',
          C: 'Repeat the study as a full-night CPAP titration',
          D: 'The split-night result is adequate since REM supine was documented during the diagnostic portion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'According to AASM guidelines, a split-night titration is considered adequate if the recommended CPAP pressure eliminates or nearly eliminates respiratory events during REM sleep in the supine position. However, if REM sleep is not captured during the titration portion, the titration is considered suboptimal and a full-night titration study should be recommended.',
        explanationWrong:
          'Accepting the titration without REM documentation risks undertreating the patient since OSA is often most severe during REM sleep. Prescribing APAP with a wide range may be an alternative but does not address the need for proper titration documentation. Option D is incorrect because REM during the diagnostic portion does not validate the titration pressure during REM.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          'Which EEG derivation is recommended by the AASM for optimal detection of sleep spindles during polysomnography?',
        choices: {
          A: 'Central derivations (C3-M2 or C4-M1)',
          B: 'Frontal derivations (F3-M2 or F4-M1)',
          C: 'Occipital derivations (O1-M2 or O2-M1)',
          D: 'Temporal derivations (T3-M2 or T4-M1)',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sleep spindles are best detected at central EEG derivations (C3-M2 or C4-M1). The AASM recommends these derivations as part of the standard PSG montage because spindle activity has maximum amplitude over the central scalp region.',
        explanationWrong:
          'Frontal derivations are recommended for optimal detection of slow-wave activity (delta waves) in N3 sleep, not spindles. Occipital derivations are used primarily for detecting alpha rhythm during wakefulness. Temporal derivations are not part of the standard AASM PSG montage for sleep staging.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          'A patient being titrated on CPAP at 14 cmH2O develops frequent central apneas that were not present during the diagnostic portion of the study. What is the most likely explanation?',
        choices: {
          A: 'The patient has developed primary central sleep apnea',
          B: 'The CPAP device is malfunctioning',
          C: 'Treatment-emergent central sleep apnea (complex sleep apnea)',
          D: 'The events are actually obstructive apneas being misclassified',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Treatment-emergent central sleep apnea (previously called complex sleep apnea) occurs when central apneas appear or persist during PAP therapy despite resolution of obstructive events. It is seen in approximately 5–15% of patients undergoing CPAP titration and often resolves with continued PAP use.',
        explanationWrong:
          'Primary central sleep apnea would have been evident during the diagnostic portion of the study. CPAP device malfunction would not selectively produce central apneas. If the events showed continued respiratory effort, they would be classified as obstructive, not central.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          'Which of the following is the primary advantage of using a nasal pillow mask interface compared to a traditional nasal mask for CPAP therapy?',
        choices: {
          A: 'Better seal at higher pressures above 15 cmH2O',
          B: 'Reduced risk of claustrophobia and lower profile design',
          C: 'Improved delivery of supplemental oxygen',
          D: 'Elimination of mouth leak in all patients',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Nasal pillow masks have a minimal contact design that sits at the nares, reducing the feeling of claustrophobia and allowing patients to read or watch television without obstruction. Their low profile also makes them preferred by patients who sleep on their side.',
        explanationWrong:
          'Nasal pillow masks may actually be less effective at maintaining a seal at very high pressures compared to traditional nasal masks. They do not improve oxygen delivery compared to other interfaces. Mouth leak can still occur with nasal pillows and may require a chin strap or full-face mask to resolve.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          'According to AASM scoring rules, a respiratory effort-related arousal (RERA) is defined by which of the following criteria?',
        choices: {
          A: 'A sequence of breaths lasting at least 10 seconds with increasing respiratory effort leading to arousal, that does not meet criteria for apnea or hypopnea',
          B: 'Any arousal preceded by a single obstructed breath',
          C: 'A 3% or greater oxygen desaturation without a change in airflow',
          D: 'A sequence of breaths with flattening of the inspiratory flow signal lasting at least 10 seconds leading to an arousal from sleep that does not meet criteria for an apnea or hypopnea',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A RERA is scored when there is a sequence of breaths lasting at least 10 seconds characterized by increasing respiratory effort or flattening of the inspiratory portion of the nasal pressure waveform, leading to an arousal from sleep, and the event does not meet criteria for an apnea or hypopnea.',
        explanationWrong:
          'While increasing respiratory effort is part of the RERA definition, the key element is that the event must lead to an arousal and not meet criteria for apnea or hypopnea. A single obstructed breath preceding an arousal does not meet the 10-second duration requirement. A desaturation alone without airflow change is not a RERA.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          'When applying electrodes for a polysomnogram using the 10-20 system, the Cz electrode is located at which anatomical position?',
        choices: {
          A: 'The midpoint between the nasion and the inion along the midline of the scalp',
          B: 'Over the left central region, 20% of the distance from Cz to T3',
          C: 'At the vertex of the skull over the left temporal region',
          D: '10% above the nasion on the midline',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In the International 10-20 system, Cz (central zero or vertex) is located at the exact midpoint between the nasion (bridge of the nose) and the inion (occipital protuberance) along the sagittal midline, and also at the midpoint between the left and right preauricular points.',
        explanationWrong:
          'The description of being 20% of the distance from Cz to T3 refers to the C3 electrode position, not Cz. Cz is on the midline, not over the temporal region. The position 10% above the nasion describes the Fpz location, not Cz.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          'A patient with chronic insomnia has been using zolpidem nightly for 3 years. The sleep physician recommends cognitive behavioral therapy for insomnia (CBT-I) as first-line treatment. Which component of CBT-I involves restricting the time spent in bed to match the actual amount of time spent sleeping?',
        choices: {
          A: 'Stimulus control therapy',
          B: 'Relaxation training',
          C: 'Sleep restriction therapy',
          D: 'Sleep hygiene education',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Sleep restriction therapy limits the time in bed to the estimated total sleep time to increase sleep drive and consolidate sleep. As sleep efficiency improves, time in bed is gradually increased in 15–20 minute increments until optimal sleep duration is achieved.',
        explanationWrong:
          'Stimulus control therapy focuses on re-associating the bed with sleep by eliminating non-sleep activities in bed and maintaining consistent sleep-wake times. Relaxation training involves techniques such as progressive muscle relaxation and guided imagery. Sleep hygiene education addresses environmental and behavioral factors that may interfere with sleep.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          'During a polysomnogram, an epoch shows low-amplitude mixed-frequency EEG activity, absence of sleep spindles and K-complexes, slow rolling eye movements, and reduced chin EMG tone compared to wakefulness. This epoch should be scored as which sleep stage?',
        choices: {
          A: 'Stage W (wakefulness)',
          B: 'Stage N1',
          C: 'Stage N2',
          D: 'Stage REM',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Stage N1 sleep is characterized by low-amplitude mixed-frequency EEG (predominantly 4–7 Hz theta activity), slow rolling eye movements, absence of sleep spindles and K-complexes, and reduced but not absent chin EMG tone. It represents the lightest stage of NREM sleep.',
        explanationWrong:
          'Stage W would show alpha rhythm (8–13 Hz) with eyes closed or low-amplitude mixed-frequency activity with rapid eye movements and eye blinks. Stage N2 requires the presence of sleep spindles and/or K-complexes. Stage REM shows low-amplitude mixed-frequency EEG but with rapid eye movements and markedly reduced chin EMG (atonia).',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
    ],
  })

  // ─── EXAM 2 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q6,Q11,Q15,Q19) B=5(Q1,Q5,Q10,Q14,Q17) C=5(Q4,Q8,Q13,Q16,Q20) D=5(Q2,Q7,Q9,Q12,Q18)
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 2',
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
          'A patient undergoing polysomnography has an electrode impedance reading of 15 kOhm on the O1 channel. What is the most appropriate action?',
        choices: {
          A: 'Continue the study since occipital channels are optional',
          B: 'Reapply the electrode to achieve impedance below 5 kOhm',
          C: 'Switch to a bipolar montage to compensate',
          D: 'Increase the amplifier sensitivity to improve signal quality',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Electrode impedances should be maintained below 5 kOhm for optimal signal quality during polysomnography. An impedance of 15 kOhm will result in increased noise and artifact. The electrode should be reapplied with proper skin preparation and conductive paste.',
        explanationWrong:
          'Occipital channels are required in the standard AASM montage for detection of alpha rhythm during wakefulness. Switching to a bipolar montage does not fix the underlying impedance problem. Increasing amplifier sensitivity would amplify both the signal and the noise, not improving signal quality.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          'According to AASM scoring rules, which of the following is required to transition the scoring of sleep epochs from stage N2 back to stage N1?',
        choices: {
          A: 'Absence of K-complexes for one full epoch',
          B: 'Reappearance of alpha rhythm for at least 50% of the epoch',
          C: 'Presence of slow eye movements without spindles',
          D: 'An arousal followed by low-amplitude mixed-frequency activity without K-complexes or sleep spindles in the subsequent epoch',
        },
        correctChoice: 'D',
        explanationCorrect:
          'According to AASM rules, once stage N2 is established, scoring continues as N2 until an arousal or major body movement occurs, followed by an epoch of low-amplitude mixed-frequency EEG without K-complexes or sleep spindles, at which point the stage reverts to N1.',
        explanationWrong:
          'Simply having an epoch without K-complexes is not sufficient to revert to N1 — N2 continues in the absence of an arousal even if spindles and K-complexes are not present in a given epoch. Reappearance of alpha rhythm would indicate a transition to wake, not N1. Slow eye movements alone without an arousal would not cause a stage change from N2.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          'A patient\'s overnight oximetry from an HSAT shows a baseline SpO2 of 95% with repetitive desaturations to 82% occurring 35 times per hour. The respiratory event index (REI) is 8 events/hour. Which of the following best explains the discrepancy between the oximetry findings and the REI?',
        choices: {
          A: 'The HSAT likely underestimated the severity due to using recording time rather than actual sleep time as the denominator',
          B: 'The oximeter was malfunctioning and producing false desaturations',
          C: 'The patient has periodic limb movements causing the desaturations',
          D: 'The REI is calculated differently and always produces lower numbers than AHI',
        },
        correctChoice: 'A',
        explanationCorrect:
          'HSAT devices calculate REI using total recording time as the denominator rather than total sleep time. If the patient spends significant time awake during the recording, this dilutes the REI, making it appear lower than the true AHI. The significant desaturations suggest more severe disease than the REI indicates.',
        explanationWrong:
          'While oximeter malfunction is possible, repetitive desaturations occurring 35 times per hour in a consistent pattern are unlikely to be artifactual. Periodic limb movements do not typically cause oxygen desaturations. While REI does use recording time, saying it "always" produces lower numbers is not accurate — it depends on sleep efficiency during the recording.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          'A patient on CPAP at 10 cmH2O reports significant aerophagia. Which of the following interventions is most likely to reduce this side effect?',
        choices: {
          A: 'Switching from a nasal mask to a full-face mask',
          B: 'Increasing the CPAP pressure to improve the airway seal',
          C: 'Lowering the CPAP pressure if clinically feasible, or switching to bilevel PAP with a lower expiratory pressure',
          D: 'Adding supplemental oxygen at 2 L/min via the PAP circuit',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Aerophagia (swallowing air) during PAP therapy is often exacerbated by excessive positive pressure. Reducing the CPAP pressure if it remains therapeutic, or switching to bilevel PAP where the EPAP can be set lower than the CPAP equivalent, reduces the amount of air swallowed during expiration.',
        explanationWrong:
          'Switching to a full-face mask may actually worsen aerophagia because the pressurized air has direct access to the mouth and pharynx. Increasing pressure would likely worsen the air swallowing problem. Adding supplemental oxygen does not address the mechanical cause of aerophagia.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          'The AASM recommends scoring a hypopnea when the nasal pressure signal amplitude drops by at least 30% from baseline for at least 10 seconds and is associated with which of the following?',
        choices: {
          A: 'An increase in chin EMG amplitude',
          B: 'Either a 3% or greater oxygen desaturation or an arousal from sleep',
          C: 'A 4% or greater oxygen desaturation only',
          D: 'An increase in respiratory effort without arousal',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The AASM recommended hypopnea scoring rule requires a 30% or greater reduction in nasal pressure signal amplitude from baseline lasting at least 10 seconds, associated with either a 3% or greater oxygen desaturation OR an arousal from sleep. This is the preferred or recommended rule.',
        explanationWrong:
          'An increase in chin EMG amplitude is not part of the hypopnea scoring criteria. A 4% desaturation alone is the CMS acceptable alternative rule, not the AASM recommended rule. An increase in respiratory effort without arousal or desaturation does not meet hypopnea criteria.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          'Which of the following neurotransmitters is primarily responsible for promoting wakefulness by activating the ascending reticular activating system?',
        choices: {
          A: 'Hypocretin (orexin)',
          B: 'Gamma-aminobutyric acid (GABA)',
          C: 'Melatonin',
          D: 'Adenosine',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Hypocretin (orexin), produced by neurons in the lateral hypothalamus, plays a critical role in promoting and stabilizing wakefulness. It activates multiple arousal-promoting nuclei in the ascending reticular activating system. Deficiency of hypocretin is the primary cause of narcolepsy type 1.',
        explanationWrong:
          'GABA is the primary inhibitory neurotransmitter and promotes sleep, not wakefulness. Melatonin is a hormone produced by the pineal gland that promotes sleepiness and regulates circadian rhythm. Adenosine accumulates during wakefulness and promotes sleepiness through homeostatic sleep drive.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          'A patient with an ejection fraction of 25% undergoes a PSG that shows a central apnea index of 18 events/hour with a Cheyne-Stokes breathing pattern. According to current guidelines, which of the following PAP modalities is most appropriate for initial treatment?',
        choices: {
          A: 'Standard CPAP at high pressure',
          B: 'Bilevel PAP in spontaneous mode',
          C: 'Auto-adjusting PAP (APAP)',
          D: 'Adaptive servo-ventilation (ASV) is contraindicated; optimize cardiac medications first',
        },
        correctChoice: 'D',
        explanationCorrect:
          'ASV is contraindicated in patients with symptomatic heart failure and LVEF below 45% due to the SERVE-HF trial showing increased cardiovascular mortality. The first-line approach is optimization of cardiac medications (guideline-directed medical therapy) which often reduces CSA severity.',
        explanationWrong:
          'Standard CPAP at high pressures may worsen central apneas. Bilevel PAP in spontaneous mode can exacerbate central apneas by providing excessive ventilatory support. APAP is designed for obstructive events and is not appropriate for central sleep apnea with Cheyne-Stokes respiration.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          'Which of the following is a valid indication for ordering a home sleep apnea test (HSAT) instead of an in-laboratory polysomnogram?',
        choices: {
          A: 'A patient with suspected narcolepsy and excessive daytime sleepiness',
          B: 'A patient with severe COPD and suspected overlap syndrome',
          C: 'An adult patient with a high pretest probability of moderate-to-severe OSA without significant comorbidities',
          D: 'A 5-year-old child with symptoms of sleep-disordered breathing',
        },
        correctChoice: 'C',
        explanationCorrect:
          'HSAT is appropriate for adult patients with a high pretest probability of moderate-to-severe OSA who do not have significant comorbid conditions such as heart failure, COPD, neuromuscular disease, or other sleep disorders. These patients benefit from the convenience and lower cost of home testing.',
        explanationWrong:
          'Narcolepsy requires in-laboratory PSG followed by a multiple sleep latency test (MSLT) and cannot be diagnosed with HSAT. Severe COPD with suspected overlap syndrome requires attended PSG for accurate assessment. Pediatric patients require in-laboratory PSG as HSAT has not been validated in children.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          'During a bilevel PAP titration, the IPAP is set at 16 cmH2O and the EPAP at 10 cmH2O. What is the pressure support being delivered?',
        choices: {
          A: '16 cmH2O',
          B: '10 cmH2O',
          C: '26 cmH2O',
          D: '6 cmH2O',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Pressure support is the difference between IPAP (inspiratory positive airway pressure) and EPAP (expiratory positive airway pressure). In this case, 16 - 10 = 6 cmH2O of pressure support. This pressure differential assists ventilation by augmenting tidal volume during inspiration.',
        explanationWrong:
          '16 cmH2O is the IPAP, not the pressure support. 10 cmH2O is the EPAP. 26 cmH2O would be the sum of IPAP and EPAP, which is not a clinically meaningful value in bilevel PAP therapy.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          'What percentage of total sleep time does REM sleep normally constitute in a healthy young adult?',
        choices: {
          A: '5–10%',
          B: '20–25%',
          C: '50–60%',
          D: '35–40%',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In healthy young adults, REM sleep normally constitutes approximately 20–25% of total sleep time. REM periods become progressively longer and more frequent in the second half of the night.',
        explanationWrong:
          '5–10% is well below normal REM percentage and might be seen in severe REM suppression. 50–60% represents approximately the proportion of N2 sleep, not REM. 35–40% would be an abnormally high proportion of REM sleep.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          'A patient complains of difficulty falling asleep, waking frequently during the night, and daytime fatigue for the past 4 months. They report spending excessive time in bed trying to sleep and worrying about not getting enough sleep. There is no evidence of another sleep disorder, medical condition, or substance use causing these symptoms. Which diagnosis is most appropriate?',
        choices: {
          A: 'Chronic insomnia disorder',
          B: 'Short-term insomnia disorder',
          C: 'Sleep state misperception',
          D: 'Inadequate sleep hygiene',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Chronic insomnia disorder is diagnosed when a patient has difficulty initiating or maintaining sleep, or early morning awakening, occurring at least 3 nights per week for at least 3 months, with associated daytime impairment. The 4-month duration and multiple symptoms meet these criteria.',
        explanationWrong:
          'Short-term insomnia disorder applies when symptoms have been present for less than 3 months. Sleep state misperception (paradoxical insomnia) involves a complaint of poor sleep that is not corroborated by objective sleep measures. Inadequate sleep hygiene is a behavioral diagnosis involving poor sleep practices, not the conditioned hyperarousal described.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          'During a CPAP titration, the technologist increases pressure from 8 to 9 cmH2O. After the increase, the patient develops a large air leak. Which of the following is the most appropriate first action?',
        choices: {
          A: 'Return the pressure to 8 cmH2O permanently',
          B: 'Wake the patient and switch to a different mask type',
          C: 'Continue at 9 cmH2O and monitor whether the leak self-resolves',
          D: 'Adjust the mask fit and headgear straps without waking the patient',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The first intervention for a mask leak during titration is to adjust the mask fit and headgear without disturbing the patient. A slight repositioning of the mask or tightening of straps often resolves the leak. Waking the patient disrupts the study unnecessarily.',
        explanationWrong:
          'Returning to a lower pressure permanently would prevent achieving an optimal titration. Waking the patient to change mask type is premature before attempting simple adjustments. Continuing with a large leak will compromise both the pressure delivery and the study data quality.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          'Which of the following electrode placements is used to monitor leg movements during polysomnography for detection of periodic limb movements?',
        choices: {
          A: 'Electrodes placed on the masseter muscles bilaterally',
          B: 'Electrodes placed over the extensor digitorum muscle of the forearm',
          C: 'Electrodes placed over the anterior tibialis muscles of both legs',
          D: 'Electrodes placed on the gastrocnemius muscles bilaterally',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The AASM recommends placing surface EMG electrodes on the anterior tibialis muscle of each leg for detection of periodic limb movements during sleep (PLMS). Two electrodes are placed longitudinally on each leg, 2–3 cm apart on the middle of the muscle belly.',
        explanationWrong:
          'Masseter muscle electrodes would detect bruxism, not limb movements. The extensor digitorum muscle of the forearm is not a standard placement for PLMS detection. The gastrocnemius (calf) muscle is not the recommended site — the anterior tibialis is the standard placement per AASM guidelines.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          'A patient with OSA is prescribed auto-adjusting PAP (APAP) with a pressure range of 5–15 cmH2O. After 30 days, the device download shows a 95th percentile pressure of 8.2 cmH2O, residual AHI of 2.1 events/hour, and average usage of 6.5 hours per night. What do these data indicate?',
        choices: {
          A: 'The APAP is not providing adequate treatment and should be replaced with fixed CPAP',
          B: 'The therapy is effective with good compliance and adequate pressure delivery',
          C: 'The pressure range should be narrowed to 4–10 cmH2O',
          D: 'The patient needs a titration study to determine a fixed pressure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'These data indicate successful APAP therapy. The residual AHI of 2.1 is well below the treatment goal of less than 5 events/hour. The average usage of 6.5 hours exceeds the CMS adherence requirement of 4 hours per night on 70% of nights. The 95th percentile pressure of 8.2 cmH2O shows the device is managing events at reasonable pressures.',
        explanationWrong:
          'A residual AHI of 2.1 indicates excellent treatment efficacy, not inadequate treatment. Narrowing the pressure range is unnecessary when the current settings are producing excellent results. A formal titration study is not needed when APAP data demonstrate effective treatment.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          'According to AASM scoring criteria, which of the following distinguishes a central apnea from an obstructive apnea?',
        choices: {
          A: 'Absence of inspiratory effort throughout the entire event',
          B: 'Duration of the event exceeding 20 seconds',
          C: 'Associated oxygen desaturation of at least 4%',
          D: 'Presence of paradoxical thoracoabdominal movement',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A central apnea is distinguished from an obstructive apnea by the absence of inspiratory effort throughout the entire duration of the event. In obstructive apnea, respiratory effort is present or increases despite the absence of airflow. Both require at least a 90% drop in airflow for at least 10 seconds.',
        explanationWrong:
          'Event duration of 20 seconds is not a distinguishing factor — both types require a minimum of 10 seconds. Oxygen desaturation criteria do not differentiate between central and obstructive apneas. Paradoxical thoracoabdominal movement indicates obstructive events, not central events.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          'During stage N2 sleep, an epoch contains a burst of 12–14 Hz oscillatory activity lasting 0.8 seconds over the central EEG derivation. How should this waveform be classified?',
        choices: {
          A: 'Alpha intrusion',
          B: 'K-complex',
          C: 'Sleep spindle',
          D: 'Vertex sharp wave',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A sleep spindle is defined as a burst of oscillatory EEG activity, typically in the 11–16 Hz (sigma) frequency range, lasting at least 0.5 seconds with maximum amplitude over central derivations. The 12–14 Hz frequency and 0.8-second duration meet all criteria for a sleep spindle.',
        explanationWrong:
          'Alpha intrusion involves alpha rhythm (8–13 Hz) appearing during sleep but is not a defining feature of normal sleep staging and has a different morphology. A K-complex is a high-amplitude biphasic wave with an initial sharp negative component followed by a positive component, not oscillatory activity. Vertex sharp waves are sharp-contoured, centrally maximal waves seen in N1 sleep and are not oscillatory.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          'A patient is diagnosed with moderate OSA (AHI 22) and has a BMI of 32. They refuse PAP therapy. Which of the following alternative treatments has the strongest evidence for reducing AHI in this patient?',
        choices: {
          A: 'Positional therapy with a tennis ball technique',
          B: 'A custom-fitted mandibular advancement device (oral appliance)',
          C: 'Nasal dilator strips',
          D: 'Myofunctional therapy alone',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Custom-fitted mandibular advancement devices (MADs) are the recommended alternative to PAP therapy for patients with mild-to-moderate OSA who refuse or cannot tolerate CPAP. They advance the mandible forward, increasing the retroglossal airway space and reducing collapsibility.',
        explanationWrong:
          'Positional therapy is primarily effective for patients with position-dependent OSA where events occur mainly in the supine position, but it is not first-line alternative therapy for general moderate OSA. Nasal dilator strips have minimal evidence for reducing AHI. Myofunctional therapy has emerging evidence but is not recommended as a standalone treatment for moderate OSA.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          'In a patient with suspected narcolepsy type 1, which of the following MSLT findings, combined with a supportive clinical history, is diagnostic?',
        choices: {
          A: 'Mean sleep latency of 12 minutes with one sleep-onset REM period',
          B: 'Mean sleep latency of 10 minutes with no sleep-onset REM periods',
          C: 'Mean sleep latency greater than 15 minutes with two sleep-onset REM periods',
          D: 'Mean sleep latency of 8 minutes or less with two or more sleep-onset REM periods',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The MSLT diagnostic criteria for narcolepsy require a mean sleep latency of 8 minutes or less across the nap opportunities AND the presence of 2 or more sleep-onset REM periods (SOREMPs). A SOREMP on the preceding PSG can count as one of the two required SOREMPs.',
        explanationWrong:
          'A mean sleep latency of 12 minutes exceeds the 8-minute threshold, and only one SOREMP is insufficient. A mean sleep latency of 10 minutes with no SOREMPs does not meet either diagnostic criterion. A mean sleep latency greater than 15 minutes is within the normal range regardless of the number of SOREMPs.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          'A patient with OSA has a diagnostic AHI of 45 in the supine position and an AHI of 10 in the lateral position. This patient\'s OSA is best described as:',
        choices: {
          A: 'Positional OSA',
          B: 'REM-related OSA',
          C: 'Complex sleep apnea',
          D: 'Mixed apnea predominant OSA',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Positional OSA is defined when the supine AHI is at least twice the nonsupine AHI. In this case, the supine AHI of 45 is more than twice the lateral AHI of 10, meeting the criteria for positional OSA. This designation can guide treatment decisions including positional therapy.',
        explanationWrong:
          'REM-related OSA is defined by a significantly higher AHI during REM sleep compared to NREM sleep, not by body position. Complex sleep apnea refers to the emergence of central apneas during PAP therapy. Mixed apnea predominant OSA would require the majority of events to be mixed apneas.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          'A technologist is preparing for an overnight PSG and needs to place the EOG electrodes. According to AASM standards, where should E1 and E2 be placed?',
        choices: {
          A: 'Both electrodes directly above the outer canthus of each eye',
          B: 'E1 below and lateral to the outer canthus of one eye; E2 above and lateral to the outer canthus of the opposite eye',
          C: 'E1 and E2 are placed 1 cm below the left and right outer canthi, referenced to Fpz',
          D: 'E1 is placed directly on the upper eyelid and E2 on the lower eyelid of the same eye',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Per AASM standards, E1 is placed 1 cm below the left outer canthus and E2 is placed 1 cm above the right outer canthus (or 1 cm below and above the respective outer canthi), both referenced to the same mastoid electrode. This offset placement allows detection of both vertical and horizontal eye movements.',
        explanationWrong:
          'Placing both electrodes directly above the outer canthi would not detect vertical eye movements effectively. While the offset placement concept in option B is partially correct, the specific AASM standard references to M1 or M2, not to each other. Placing electrodes directly on the eyelids is not standard practice and would be uncomfortable for the patient.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
    ],
  })

  // ─── EXAM 3 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q7,Q10,Q16,Q20) B=5(Q4,Q8,Q12,Q14,Q18) C=5(Q2,Q5,Q9,Q13,Q17) D=5(Q3,Q6,Q11,Q15,Q19)
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 3',
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
          'During polysomnography, the ECG channel shows a narrow-complex tachycardia at a rate of 160 bpm that begins abruptly during REM sleep. The patient remains asleep and oxygen saturation is 94%. What is the most appropriate action for the sleep technologist?',
        choices: {
          A: 'Document the arrhythmia, continue the study, and notify the interpreting physician',
          B: 'Immediately stop the study and call 911',
          C: 'Apply supplemental oxygen and increase the CPAP pressure',
          D: 'Wake the patient and obtain a 12-lead ECG',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Brief episodes of narrow-complex tachycardia during REM sleep may be related to autonomic instability. With a stable oxygen saturation and no symptoms, the technologist should document the arrhythmia, continue the study, and notify the interpreting physician for further evaluation. The event should be clearly noted in the study report.',
        explanationWrong:
          'Stopping the study and calling 911 would be appropriate only if the patient is symptomatic, hemodynamically unstable, or the arrhythmia is sustained and potentially dangerous. Applying supplemental oxygen and increasing CPAP pressure do not address the cardiac rhythm. Waking the patient disrupts the study unnecessarily when they are stable.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          'According to AASM rules, an epoch of sleep is scored as stage REM when which combination of findings is present?',
        choices: {
          A: 'High-amplitude delta waves with rapid eye movements',
          B: 'Sleep spindles with low chin EMG tone',
          C: 'Low-amplitude mixed-frequency EEG, rapid eye movements, and low chin EMG tone',
          D: 'Alpha rhythm with conjugate eye movements',
        },
        correctChoice: 'C',
        explanationCorrect:
          'REM sleep is scored when three criteria are met: (1) low-amplitude mixed-frequency EEG without sleep spindles or K-complexes, (2) rapid eye movements (conjugate, irregular, sharply peaked), and (3) low chin EMG tone (atonia). All three features must be present.',
        explanationWrong:
          'High-amplitude delta waves are characteristic of N3, not REM sleep. Sleep spindles are a feature of N2 and are not present during REM. Alpha rhythm with conjugate eye movements could indicate wake with eyes open, not REM sleep.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          'The Epworth Sleepiness Scale (ESS) is used in the evaluation of patients with suspected OSA. Which of the following scores is considered to indicate excessive daytime sleepiness?',
        choices: {
          A: 'A score of 5 or less',
          B: 'A score of 7 to 9',
          C: 'A score of exactly 10',
          D: 'A score greater than 10',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An Epworth Sleepiness Scale score greater than 10 (out of a maximum of 24) is considered to indicate excessive daytime sleepiness. The ESS assesses the likelihood of dozing in 8 different situations, with each scored from 0 to 3.',
        explanationWrong:
          'A score of 5 or less is within the normal range of daytime sleepiness. A score of 7 to 9 is considered borderline or within normal limits. A score of exactly 10 is at the upper end of normal and does not by itself indicate pathologic sleepiness.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          'During a CPAP titration study, the patient is at 15 cmH2O and continues to have obstructive apneas. The AASM protocol recommends which next step?',
        choices: {
          A: 'Add supplemental oxygen and maintain the same pressure',
          B: 'Switch to bilevel PAP therapy',
          C: 'Increase to 16 cmH2O and continue the titration',
          D: 'Terminate the study and refer for surgical consultation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to AASM titration guidelines, if obstructive events persist at CPAP pressures of 15 cmH2O or higher, the technologist should consider switching to bilevel PAP. Bilevel PAP with a higher IPAP and adequate EPAP may better address the obstruction while improving patient tolerance.',
        explanationWrong:
          'Adding supplemental oxygen does not address the upper airway obstruction causing the apneas. While continuing to increase CPAP pressure is an option, pressures above 15 cmH2O are often poorly tolerated, and the AASM suggests considering bilevel PAP at this point. Terminating the study and referring for surgery is premature without first trying bilevel PAP.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          'A mixed apnea is characterized by which pattern on polysomnography?',
        choices: {
          A: 'Absent airflow and absent effort throughout the entire event',
          B: 'Reduced airflow with paradoxical chest and abdominal movement',
          C: 'Initial absence of respiratory effort followed by the appearance of obstructive respiratory effort, all during a period of absent airflow',
          D: 'Alternating periods of hyperventilation and hypoventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A mixed apnea begins with a central component (absent airflow and absent respiratory effort) followed by an obstructive component (continued absent airflow with resumption of respiratory effort against the closed airway). The total event duration must be at least 10 seconds.',
        explanationWrong:
          'Absent airflow and effort throughout defines a purely central apnea. Reduced airflow with paradoxical movement could describe an obstructive hypopnea or apnea but not specifically a mixed event. Alternating hyperventilation and hypoventilation describes Cheyne-Stokes breathing, not a mixed apnea.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          'Which of the following statements about the ultradian rhythm of sleep is correct?',
        choices: {
          A: 'The ultradian cycle length increases progressively from 60 minutes in the first cycle to 120 minutes in later cycles',
          B: 'The ultradian rhythm refers to the 24-hour sleep-wake cycle controlled by the suprachiasmatic nucleus',
          C: 'Each ultradian cycle ends with a REM period and lasts approximately 24 hours',
          D: 'A typical NREM-REM sleep cycle lasts approximately 90–110 minutes and repeats 4–6 times per night',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The ultradian rhythm refers to the cyclical alternation of NREM and REM sleep that occurs within a single sleep period. Each cycle lasts approximately 90–110 minutes and typically repeats 4–6 times during a normal night of sleep in adults.',
        explanationWrong:
          'While cycle length can vary slightly, it does not progressively increase from 60 to 120 minutes. The 24-hour cycle is the circadian rhythm, not the ultradian rhythm. Each ultradian cycle lasts about 90–110 minutes, not 24 hours.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          'A patient with central sleep apnea secondary to chronic opioid use demonstrates an irregular breathing pattern during NREM sleep with variable tidal volumes and frequent central apneas. This pattern is most accurately described as:',
        choices: {
          A: 'Ataxic (Biot\'s) breathing',
          B: 'Cheyne-Stokes respiration',
          C: 'Obstructive hypoventilation',
          D: 'Periodic breathing of altitude',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ataxic (Biot\'s) breathing is characterized by an irregular pattern of breathing with variable tidal volumes and respiratory rates, interspersed with central apneas. It is commonly associated with opioid-induced central sleep apnea and reflects depressed brainstem respiratory centers.',
        explanationWrong:
          'Cheyne-Stokes respiration has a regular crescendo-decrescendo pattern, unlike the irregular pattern seen with opioid use. Obstructive hypoventilation involves reduced ventilation due to upper airway obstruction, not central apneas. Periodic breathing of altitude shows a regular waxing-waning pattern similar to Cheyne-Stokes and is caused by hypoxic ventilatory response.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          'A patient underwent an HSAT that showed an REI of 3 events/hour, but they report significant daytime sleepiness with an ESS of 16. Which of the following is the most appropriate next step?',
        choices: {
          A: 'Diagnose the patient with primary insomnia and refer for CBT-I',
          B: 'Order an in-laboratory PSG because the HSAT may have underestimated the true severity',
          C: 'Prescribe a mandibular advancement device for mild OSA',
          D: 'Reassure the patient that they do not have OSA and suggest sleep hygiene improvements',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When HSAT results are negative or inconclusive but clinical suspicion for OSA remains high (significant sleepiness, ESS > 10), an in-laboratory PSG should be performed. HSAT can underestimate AHI due to using recording time instead of sleep time and may miss mild or positional OSA.',
        explanationWrong:
          'Diagnosing primary insomnia based on a negative HSAT ignores the high clinical suspicion for a sleep-related breathing disorder. Prescribing an oral appliance for an REI of 3 is not indicated as this does not meet diagnostic criteria for OSA. Reassuring the patient without further workup is inappropriate given the significant daytime sleepiness.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          'An auto-adjusting PAP (APAP) device works by which of the following mechanisms?',
        choices: {
          A: 'Delivering a fixed pressure that was determined during an in-laboratory titration',
          B: 'Providing backup breaths at a set rate when central apneas are detected',
          C: 'Continuously adjusting the delivered pressure within a set range in response to detected airflow limitation, snoring, or apneas',
          D: 'Alternating between a higher inspiratory pressure and a lower expiratory pressure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'APAP devices use algorithms to detect snoring, airflow limitation, apneas, and hypopneas, and automatically adjust the delivered pressure within a clinician-set range (minimum and maximum pressures) to maintain airway patency. This allows the device to use the lowest effective pressure at any given time.',
        explanationWrong:
          'A fixed pressure is the definition of standard CPAP, not APAP. Providing backup breaths is a feature of bilevel PAP with a backup rate (bilevel ST mode), not APAP. Alternating between inspiratory and expiratory pressures describes bilevel PAP, not APAP.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          'Which of the following is a characteristic feature that distinguishes sawtooth waves seen during REM sleep from other EEG waveforms?',
        choices: {
          A: 'Sharply contoured, triangular waves in the 2–6 Hz range with a serrated appearance, maximal at central and frontal derivations',
          B: 'High-amplitude biphasic waves followed by a burst of alpha activity',
          C: 'Monomorphic sinusoidal 14 Hz oscillations lasting at least 0.5 seconds',
          D: 'Rhythmic 3 Hz spike-and-wave complexes',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Sawtooth waves are a distinctive feature of REM sleep characterized by sharply contoured or triangular theta-frequency (2–6 Hz) waves with a serrated or notched morphology. They are best seen at vertex and frontal-central derivations and often precede bursts of rapid eye movements.',
        explanationWrong:
          'High-amplitude biphasic waves describe K-complexes of N2 sleep. Monomorphic 14 Hz oscillations describe sleep spindles. Rhythmic 3 Hz spike-and-wave complexes are associated with absence seizures, not normal sleep.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          'A patient with severe OSA (AHI 62) has been on CPAP therapy for 3 months. A follow-up device download shows the device was used for an average of 2.5 hours per night on 50% of nights. What does this usage pattern indicate regarding CMS compliance criteria?',
        choices: {
          A: 'The patient meets CMS compliance because the device is being used regularly',
          B: 'The patient partially meets CMS compliance and needs a 30-day extension',
          C: 'The patient needs to increase usage to at least 6 hours per night',
          D: 'The patient does not meet CMS compliance criteria, which require at least 4 hours per night on at least 70% of nights during a consecutive 30-day period',
        },
        correctChoice: 'D',
        explanationCorrect:
          'CMS (Centers for Medicare and Medicaid Services) defines PAP compliance as use for at least 4 hours per night on at least 70% of nights during any consecutive 30-day period within the first 90 days of therapy. This patient\'s usage of 2.5 hours on 50% of nights fails both criteria.',
        explanationWrong:
          'Simply using the device regularly does not satisfy CMS compliance requirements. There is no CMS provision for a 30-day extension of the compliance period. While increased usage is needed, the CMS threshold is 4 hours (not 6 hours) on 70% of nights.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          'During a CPAP titration, the patient is in the supine REM position at a pressure of 12 cmH2O with no residual obstructive events, snoring, or desaturations for the past 30 minutes. According to AASM guidelines, this pressure can be considered:',
        choices: {
          A: 'An inadequate titration because at least 60 minutes of observation is required',
          B: 'The optimal titration pressure',
          C: 'A good titration pressure but not optimal',
          D: 'Acceptable only if the patient also demonstrated N3 sleep at this pressure',
        },
        correctChoice: 'B',
        explanationCorrect:
          'According to AASM guidelines, the optimal titration pressure is the pressure at which obstructive respiratory events, snoring, and desaturations are eliminated in the supine REM position. A minimum observation period of at least 15 minutes of supine REM without events is generally considered adequate for determining the optimal pressure.',
        explanationWrong:
          'Thirty minutes of event-free supine REM exceeds the minimum required observation period. This meets optimal, not merely good, titration criteria since events are eliminated in the most challenging position and sleep stage. N3 sleep at the titration pressure is not a requirement for optimal titration.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          'A technologist notices that the respiratory effort belts are both showing signal but the abdominal belt signal is 180 degrees out of phase with the thoracic belt. This pattern is most consistent with:',
        choices: {
          A: 'Central apnea events',
          B: 'Normal tidal breathing',
          C: 'Paradoxical breathing indicative of upper airway obstruction',
          D: 'Respiratory effort belt malfunction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Paradoxical (out-of-phase) movement of the chest and abdomen occurs during upper airway obstruction when the diaphragm descends (causing abdominal expansion) while the chest wall is pulled inward due to negative intrathoracic pressure against a closed airway. This 180-degree phase difference is a hallmark of obstructive events.',
        explanationWrong:
          'Central apnea events show absent respiratory effort on both channels, not out-of-phase signals. Normal tidal breathing shows synchronized (in-phase) chest and abdominal movement. If both belts are generating signals, they are likely functioning; the out-of-phase pattern is a physiological finding, not equipment malfunction.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          'Which of the following is a physiological consequence of chronic sleep fragmentation seen in untreated OSA?',
        choices: {
          A: 'Decreased cortisol levels throughout the day',
          B: 'Increased sympathetic nervous system activity and elevated blood pressure',
          C: 'Improved insulin sensitivity due to frequent arousals',
          D: 'Decreased inflammatory markers in the blood',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Chronic sleep fragmentation from repeated arousals in OSA leads to sustained sympathetic nervous system activation, resulting in elevated catecholamine levels, increased heart rate, and hypertension. This contributes to the cardiovascular morbidity associated with untreated OSA.',
        explanationWrong:
          'Untreated OSA is associated with elevated cortisol levels, not decreased levels, due to chronic stress response activation. Sleep fragmentation worsens insulin resistance, not improves it. Chronic intermittent hypoxia and sleep fragmentation increase inflammatory markers such as CRP and TNF-alpha.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          'A patient with central sleep apnea and preserved ejection fraction (LVEF 60%) is being considered for adaptive servo-ventilation (ASV). In this patient, ASV works by:',
        choices: {
          A: 'Delivering a fixed high pressure during central apneas only',
          B: 'Providing supplemental oxygen to prevent desaturations',
          C: 'Switching between CPAP and bilevel modes based on respiratory events',
          D: 'Monitoring the patient\'s ventilation and delivering variable pressure support that is inversely proportional to the patient\'s own respiratory effort',
        },
        correctChoice: 'D',
        explanationCorrect:
          'ASV continuously monitors the patient\'s minute ventilation and provides pressure support that varies inversely with the patient\'s own respiratory effort. When effort decreases (as in a central apnea), the device increases pressure support; when effort normalizes, it reduces support. This stabilizes ventilation and prevents central apneas.',
        explanationWrong:
          'ASV does not simply deliver a fixed high pressure — it dynamically adjusts support. ASV does not provide supplemental oxygen; it is a ventilation therapy. ASV does not switch between CPAP and bilevel modes; it uses a unique servo-controlled algorithm distinct from both.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          'A Type IV home sleep apnea test device typically records which of the following?',
        choices: {
          A: 'One or two parameters, such as oxygen saturation alone or oxygen saturation with airflow',
          B: 'A full polysomnographic montage including EEG',
          C: 'At least four channels including airflow, effort, oximetry, and heart rate',
          D: 'Video recording with a single respiratory channel',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Type IV portable monitoring devices record only one or two parameters, most commonly pulse oximetry alone or pulse oximetry combined with a single airflow channel. These devices have the lowest complexity and are used primarily for screening purposes.',
        explanationWrong:
          'A full PSG montage describes a Type I study. At least four channels describes a Type III device. Video recording with a single respiratory channel does not describe any standard classification of sleep monitoring device.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          'A patient using bilevel PAP in spontaneous/timed (ST) mode has the following settings: IPAP 18, EPAP 8, backup rate 12 breaths/min. The patient\'s spontaneous respiratory rate drops to 6 breaths per minute. What will the device do?',
        choices: {
          A: 'Switch to CPAP mode at the EPAP setting',
          B: 'Deliver pressure-supported breaths at the IPAP level only when the patient triggers them',
          C: 'Deliver mandatory breaths at the set backup rate of 12 to supplement the patient\'s low respiratory rate',
          D: 'Alarm and shut down due to the low respiratory rate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In ST (spontaneous/timed) mode, the device supports the patient\'s spontaneous breaths with IPAP/EPAP. When the respiratory rate falls below the set backup rate, the device delivers mandatory (timed) breaths at the IPAP pressure to maintain the minimum rate of 12 breaths per minute. This ensures adequate ventilation.',
        explanationWrong:
          'The device does not revert to CPAP mode — it maintains bilevel pressure delivery. In spontaneous-only mode the device waits for patient triggering, but ST mode adds backup breaths. PAP devices do not alarm and shut down for low respiratory rates; the backup rate feature is designed for this scenario.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          'Light therapy is a primary treatment for which of the following circadian rhythm sleep-wake disorders?',
        choices: {
          A: 'Jet lag disorder only',
          B: 'Both advanced and delayed sleep-wake phase disorders',
          C: 'Shift work disorder only',
          D: 'Irregular sleep-wake rhythm disorder only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Timed bright light therapy is a primary treatment for both advanced and delayed sleep-wake phase disorders. Morning light exposure is used for delayed phase to advance the circadian clock, while evening light exposure is used for advanced phase to delay it. The timing of light is critical to the phase-shifting effect.',
        explanationWrong:
          'While light therapy can help with jet lag, it is not limited to this indication alone. Similarly, light can help with shift work disorder and irregular sleep-wake rhythm disorder, but the question asks about the primary indication. Light therapy is most established as treatment for advanced and delayed phase disorders.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          'During polysomnography, the recommended sampling rate for EEG, EOG, and chin EMG signals is at least:',
        choices: {
          A: '50 Hz',
          B: '100 Hz',
          C: '256 Hz',
          D: '200 Hz (with 500 Hz preferred for optimal waveform resolution)',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The AASM recommends a minimum sampling rate of 200 Hz for EEG, EOG, and EMG channels, with 500 Hz preferred for optimal resolution of fast-frequency waveforms. A sampling rate of at least twice the highest frequency of interest is required per the Nyquist theorem.',
        explanationWrong:
          '50 Hz would be far below the Nyquist requirement for EEG frequencies of interest and would result in aliasing artifact. 100 Hz is also below the recommended minimum. While 256 Hz exceeds the minimum, the AASM specifically recommends 200 Hz minimum with 500 Hz preferred.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          'A patient reports falling asleep at 7 PM and waking at 3 AM consistently, which interferes with social activities. Sleep quality and duration are normal. Which circadian rhythm disorder does this presentation suggest?',
        choices: {
          A: 'Advanced sleep-wake phase disorder',
          B: 'Delayed sleep-wake phase disorder',
          C: 'Non-24-hour sleep-wake rhythm disorder',
          D: 'Shift work disorder',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Advanced sleep-wake phase disorder (ASWPD) is characterized by habitual sleep-wake times that are several hours earlier than conventional or desired times. Patients fall asleep in the early evening and wake up very early in the morning. Sleep quality and duration are normal when the patient sleeps at their preferred early schedule.',
        explanationWrong:
          'Delayed sleep-wake phase disorder involves abnormally late sleep onset and wake times, the opposite of this presentation. Non-24-hour sleep-wake rhythm disorder involves progressively shifting sleep-wake times. Shift work disorder is caused by work schedules, not an intrinsic circadian phase advance.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
    ],
  })

  // ─── EXAM 4 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q8,Q11,Q15,Q19) B=5(Q3,Q6,Q10,Q17,Q20) C=5(Q1,Q5,Q9,Q14,Q18) D=5(Q4,Q7,Q12,Q13,Q16)
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 4',
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
          'A technologist is troubleshooting a 60 Hz artifact on the EEG channels during PSG setup. Which of the following is the most effective intervention to eliminate this artifact?',
        choices: {
          A: 'Increase the low-frequency filter to 1 Hz',
          B: 'Apply a 60 Hz notch filter to the affected channels',
          C: 'Check electrode impedances and ensure all are balanced and below 5 kOhm',
          D: 'Increase the EEG sensitivity setting',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The most effective intervention for 60 Hz artifact is to check and correct electrode impedances. High or unbalanced impedances are the most common cause of 60 Hz (electrical interference) artifact. When impedances are matched and below 5 kOhm, the common-mode rejection of the differential amplifier effectively cancels out environmental electrical noise.',
        explanationWrong:
          'Increasing the low-frequency filter would not address 60 Hz artifact since 60 Hz is a high-frequency signal relative to the low-frequency filter range. While a 60 Hz notch filter can reduce the artifact, it also attenuates legitimate physiological signals near 60 Hz and is not the first-line intervention. Increasing sensitivity would amplify the artifact along with the signal.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          'According to AASM scoring rules, what is the minimum duration of an arousal from sleep?',
        choices: {
          A: '3 seconds of abrupt frequency shift in the EEG preceded by at least 10 seconds of stable sleep',
          B: '5 seconds of alpha activity following a K-complex',
          C: '1 second of increased EMG activity during any sleep stage',
          D: '10 seconds of mixed-frequency EEG activity',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An arousal is scored when there is an abrupt shift of EEG frequency including alpha, theta, or frequencies greater than 16 Hz (but not spindles) lasting at least 3 seconds, with at least 10 seconds of stable sleep preceding the change. During REM sleep, a concurrent increase in chin EMG lasting at least 1 second is also required.',
        explanationWrong:
          '5 seconds of alpha activity exceeds the minimum 3-second requirement. A 1-second EMG increase is an additional requirement during REM only, not a standalone arousal definition. 10 seconds of mixed-frequency activity does not define an arousal — the key criterion is an abrupt frequency shift.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          'A patient with a BMI of 48 and an AHI of 72 events/hour is being evaluated for OSA treatment. In addition to PAP therapy, which of the following adjunctive interventions has the strongest evidence for long-term AHI reduction in this patient population?',
        choices: {
          A: 'Nasal corticosteroid spray',
          B: 'Bariatric surgery for weight loss',
          C: 'Positional therapy with a sleep positioning device',
          D: 'Upper airway muscle stimulation exercises',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In severely obese patients (BMI > 40) with severe OSA, bariatric surgery leading to significant weight loss has strong evidence for substantially reducing AHI. Studies show that weight loss from bariatric surgery can reduce AHI by 50% or more in many patients, though complete resolution is not guaranteed.',
        explanationWrong:
          'Nasal corticosteroids may improve nasal congestion but have minimal effect on AHI in severe OSA. Positional therapy is mainly effective for position-dependent OSA and is unlikely to be sufficient for an AHI of 72. Upper airway exercises (myofunctional therapy) have limited evidence in severe OSA.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          'During a bilevel PAP titration for a patient with obesity hypoventilation syndrome, the technologist notes persistent hypoventilation with an end-tidal CO2 of 55 mmHg despite an IPAP of 20 and EPAP of 10. What adjustment is most appropriate?',
        choices: {
          A: 'Decrease the EPAP to increase the pressure support differential',
          B: 'Add supplemental oxygen without changing PAP settings',
          C: 'Switch to CPAP at 20 cmH2O',
          D: 'Increase the IPAP to provide greater pressure support while maintaining the current EPAP',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Increasing the IPAP while maintaining the EPAP increases the pressure support (IPAP minus EPAP), which augments tidal volume and improves alveolar ventilation. This is the primary mechanism for reducing CO2 in patients with hypoventilation on bilevel PAP.',
        explanationWrong:
          'Decreasing EPAP could compromise upper airway patency and worsen obstructive events. Adding supplemental oxygen alone does not address the ventilatory failure causing the elevated CO2. Switching to CPAP eliminates the pressure support differential entirely and cannot address hypoventilation.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          'According to the AASM acceptable scoring rule, a hypopnea can be scored based on which of the following criteria?',
        choices: {
          A: 'A 30% or greater reduction in airflow for at least 10 seconds with a 3% desaturation or arousal',
          B: 'A 50% or greater reduction in airflow for at least 5 seconds',
          C: 'A 30% or greater reduction in airflow for at least 10 seconds associated with a 4% or greater oxygen desaturation',
          D: 'Any reduction in airflow associated with a 2% oxygen desaturation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The AASM acceptable (or alternative) hypopnea scoring rule requires a 30% or greater reduction in nasal pressure signal amplitude from baseline for at least 10 seconds, associated with a 4% or greater oxygen desaturation. This is the CMS-accepted rule and produces a more conservative AHI.',
        explanationWrong:
          'The 30% reduction with 3% desaturation or arousal is the AASM recommended rule, not the acceptable rule. A 50% reduction for 5 seconds does not match any current AASM scoring rule. Any reduction in airflow with a 2% desaturation is not a recognized scoring criterion.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          'Process S in the two-process model of sleep regulation refers to:',
        choices: {
          A: 'The circadian alerting signal from the suprachiasmatic nucleus',
          B: 'The homeostatic sleep drive that increases as a function of prior wakefulness duration',
          C: 'The REM sleep oscillator located in the pontine brainstem',
          D: 'The melatonin secretion rhythm from the pineal gland',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In the two-process model of sleep regulation proposed by Borbely, Process S represents the homeostatic sleep drive (sleep pressure) that accumulates during wakefulness and dissipates during sleep. The longer a person is awake, the stronger the drive to sleep becomes. Adenosine accumulation is thought to mediate this process.',
        explanationWrong:
          'The circadian alerting signal is represented by Process C, not Process S, in the two-process model. The REM sleep oscillator is not a named process in this model. Melatonin secretion is a downstream output of the circadian system (Process C), not Process S.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          'Which of the following medications is most likely to cause or exacerbate central sleep apnea?',
        choices: {
          A: 'Selective serotonin reuptake inhibitors (SSRIs)',
          B: 'Melatonin receptor agonists',
          C: 'Benzodiazepine receptor agonists (zolpidem)',
          D: 'Long-acting opioid analgesics',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Long-acting opioid analgesics depress the brainstem respiratory centers, blunting the ventilatory response to CO2. This leads to central sleep apnea, which is dose-dependent and can occur with both short-acting and long-acting opioids, though it is more prevalent and severe with long-acting formulations.',
        explanationWrong:
          'SSRIs may suppress REM sleep but do not typically cause central sleep apnea. Melatonin receptor agonists (such as ramelteon) do not affect respiratory drive. Zolpidem may cause mild respiratory depression in rare cases but is not a common cause of central sleep apnea.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          'Which of the following clinical findings would make a patient INAPPROPRIATE for home sleep apnea testing?',
        choices: {
          A: 'A history of moderate-to-severe congestive heart failure',
          B: 'A high STOP-BANG score of 7',
          C: 'Male sex with a neck circumference of 17 inches',
          D: 'A BMI of 35 with witnessed apneas',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Patients with significant comorbidities including moderate-to-severe CHF, chronic opioid use, neuromuscular disease, severe COPD, or suspected non-OSA sleep disorders are not appropriate candidates for HSAT. These conditions require in-laboratory PSG for accurate diagnosis.',
        explanationWrong:
          'A high STOP-BANG score indicates high pretest probability for OSA, which is actually an appropriate indication for HSAT. A large neck circumference is a risk factor for OSA but does not contraindicate HSAT. A BMI of 35 with witnessed apneas suggests high probability of OSA, making HSAT appropriate in the absence of significant comorbidities.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          'A CPAP device with an expiratory pressure relief (EPR) feature provides comfort by:',
        choices: {
          A: 'Increasing the pressure during expiration to prevent airway collapse',
          B: 'Delivering heated humidity during the expiratory phase only',
          C: 'Reducing the delivered pressure slightly during expiration to decrease the work of breathing',
          D: 'Providing a brief pause in airflow between inspiration and expiration',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Expiratory pressure relief (EPR, C-Flex, or similar proprietary features) reduces the delivered pressure by 1–3 cmH2O during expiration. This mimics a more natural breathing pattern by decreasing the resistance to exhalation, improving comfort without significantly compromising therapeutic efficacy.',
        explanationWrong:
          'Increasing pressure during expiration would increase the work of breathing, worsening discomfort. Heated humidity is delivered continuously by the humidifier, not selectively during expiration. EPR does not pause airflow — it continuously reduces pressure during the expiratory phase.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          'A patient with untreated severe OSA undergoes a diagnostic PSG. The sleep architecture analysis shows markedly reduced N3 and REM sleep with increased N1 and N2 sleep. After CPAP treatment, the first night on therapy shows a significant increase in REM sleep. This phenomenon is known as:',
        choices: {
          A: 'Sleep state misperception',
          B: 'REM rebound',
          C: 'First-night effect',
          D: 'REM behavior disorder',
        },
        correctChoice: 'B',
        explanationCorrect:
          'REM rebound is the compensatory increase in REM sleep that occurs when a patient who has been deprived of REM sleep (due to untreated OSA causing frequent arousals and sleep fragmentation) first receives effective treatment. The brain compensates for the prior REM deficit by increasing REM sleep percentage and intensity.',
        explanationWrong:
          'Sleep state misperception is a condition where the patient perceives poor sleep despite normal objective sleep measures. The first-night effect describes reduced sleep quality during the first night in a sleep laboratory due to the unfamiliar environment. REM behavior disorder involves acting out dreams due to loss of normal REM atonia.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          'A 45-year-old patient with moderate OSA (AHI 18) reports that symptoms are significantly worse after alcohol consumption. The physiological basis for this worsening is:',
        choices: {
          A: 'Alcohol reduces upper airway muscle tone and increases airway collapsibility',
          B: 'Alcohol increases the central respiratory drive',
          C: 'Alcohol shifts sleep architecture toward more N3 sleep',
          D: 'Alcohol increases nasal resistance only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Alcohol is a central nervous system depressant that reduces the tone of the upper airway dilator muscles (particularly the genioglossus) and increases pharyngeal collapsibility. It also suppresses the arousal response to airway obstruction, leading to longer and more severe apneas.',
        explanationWrong:
          'Alcohol depresses the central respiratory drive, it does not increase it. While alcohol may increase early N3 sleep, the worsening of OSA is primarily due to upper airway muscle relaxation, not sleep architecture changes. Alcohol affects more than just nasal resistance — its primary OSA-worsening effect is on pharyngeal muscle tone.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          'During a split-night study, what is the minimum AHI during the diagnostic portion that justifies proceeding to CPAP titration according to AASM guidelines?',
        choices: {
          A: 'AHI of 5 events/hour',
          B: 'AHI of 15 events/hour',
          C: 'AHI of 20 events/hour',
          D: 'AHI of 40 events/hour with at least 2 hours of diagnostic recording',
        },
        correctChoice: 'D',
        explanationCorrect:
          'AASM guidelines recommend that a split-night study can proceed to CPAP titration when the AHI is 40 or greater during a minimum of 2 hours of diagnostic recording time. For patients with AHI between 20 and 40, clinical judgment and additional factors are considered.',
        explanationWrong:
          'An AHI of 5 is the diagnostic threshold for OSA but is not sufficient to justify a split-night protocol. An AHI of 15 is considered moderate OSA but does not meet the standard split-night threshold. An AHI of 20 may warrant consideration for split-night study but is below the definitive threshold of 40.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          'The thermocouple (thermistor) sensor used during polysomnography detects airflow by measuring:',
        choices: {
          A: 'Pressure changes in the nasal passages during breathing',
          B: 'The vibration frequency of exhaled air',
          C: 'Carbon dioxide concentration in exhaled air',
          D: 'Temperature differences between inspired cool air and expired warm air',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The thermocouple (thermistor) sensor operates on the principle that inspired air is cooler than expired air. The sensor detects the temperature difference between inspiration (cool ambient air) and expiration (warm body-temperature air) to provide a qualitative measure of airflow. It is the recommended sensor for detecting apneas.',
        explanationWrong:
          'Pressure changes are measured by the nasal pressure transducer, not the thermistor. Vibration frequency is not a principle used by any standard PSG airflow sensor. CO2 concentration is measured by capnography, not thermistors.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          'Which of the following is a recognized risk factor for the development of obstructive sleep apnea in adults?',
        choices: {
          A: 'Hypothyroidism',
          B: 'Low body mass index (BMI < 18.5)',
          C: 'All of the following: male sex, obesity, advancing age, and craniofacial abnormalities',
          D: 'Excessive caffeine consumption',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Major risk factors for OSA include male sex (2–3 times higher prevalence), obesity (especially central adiposity), advancing age, and craniofacial abnormalities such as retrognathia, micrognathia, and macroglossia. Family history and certain ethnicities also increase risk.',
        explanationWrong:
          'While hypothyroidism can contribute to OSA due to tissue edema and weight gain, it is not as strongly established as the major risk factors listed. Low BMI is actually protective against OSA, not a risk factor. Caffeine consumption does not cause OSA, though it may affect sleep quality.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          'What distinguishes treatment-emergent central sleep apnea from primary central sleep apnea?',
        choices: {
          A: 'Treatment-emergent CSA appears or persists specifically during PAP therapy after resolution of obstructive events, whereas primary CSA is present on the diagnostic study without PAP',
          B: 'Treatment-emergent CSA only occurs with bilevel PAP, not CPAP',
          C: 'Primary CSA is always associated with heart failure',
          D: 'Treatment-emergent CSA requires a higher central apnea index than primary CSA for diagnosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Treatment-emergent central sleep apnea is defined by the emergence or persistence of central apneas and hypopneas during PAP therapy that are not present (or not predominant) on the diagnostic sleep study. The obstructive events resolve with PAP, but central events appear. Primary CSA exists independently of PAP therapy.',
        explanationWrong:
          'Treatment-emergent CSA can occur with CPAP, bilevel, or any PAP modality. Primary CSA is not always associated with heart failure — it can be idiopathic. There is no specific higher CAI threshold for treatment-emergent CSA versus primary CSA.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          'A patient on CPAP therapy develops recurrent skin breakdown and pressure ulcers on the nasal bridge. Which of the following mask changes would best address this complication?',
        choices: {
          A: 'Switch to a tighter-fitting nasal mask with additional forehead padding',
          B: 'Apply adhesive wound closure strips over the affected area and continue the same mask',
          C: 'Increase CPAP pressure to reduce the need for a tight mask seal',
          D: 'Switch to a nasal pillow mask or a mask design that does not contact the nasal bridge',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Switching to a nasal pillow mask or an alternative mask design that avoids contact with the nasal bridge eliminates the source of pressure on the affected area. Nasal pillows seal at the nares rather than over the bridge, preventing further skin breakdown.',
        explanationWrong:
          'A tighter-fitting mask would increase pressure on the already-damaged skin. Applying wound closure strips does not address the cause of the problem and can worsen irritation. Increasing CPAP pressure does not reduce the need for a proper mask seal and may worsen leak issues.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          'A 30-year-old shift worker who rotates between day and night shifts reports difficulty sleeping during the day after night shifts and excessive sleepiness during night shifts. Which of the following strategies has the best evidence for managing this condition?',
        choices: {
          A: 'Taking melatonin at bedtime after every shift regardless of timing',
          B: 'Strategic use of bright light during the night shift and melatonin before desired daytime sleep, combined with a consistent sleep schedule on days off',
          C: 'Avoiding all light exposure during the commute home and sleeping in complete darkness',
          D: 'Permanently switching to a fixed night shift schedule',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The most evidence-based approach to shift work disorder involves timed bright light exposure during the night shift to promote alertness and circadian adaptation, followed by melatonin administration before daytime sleep to promote sleep onset. Maintaining a consistent sleep schedule on days off when possible also helps.',
        explanationWrong:
          'Taking melatonin after every shift regardless of timing ignores the circadian timing principles essential for effectiveness. While minimizing light exposure during the commute home can help, this alone is insufficient without other interventions. Permanently switching to a fixed night shift is often not feasible and does not address the underlying circadian disruption.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          'During a PSG, the respiratory inductance plethysmography (RIP) belts are used to measure which of the following?',
        choices: {
          A: 'Nasal airflow velocity',
          B: 'End-tidal CO2 concentration',
          C: 'Thoracic and abdominal respiratory effort (excursion)',
          D: 'Upper airway pressure changes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Respiratory inductance plethysmography (RIP) belts measure changes in the cross-sectional area of the thorax and abdomen during breathing. The belts contain sinusoidal wire coils that change inductance as the chest and abdomen expand and contract, providing a semi-quantitative measure of respiratory effort.',
        explanationWrong:
          'Nasal airflow velocity is measured by the nasal pressure transducer, not RIP belts. End-tidal CO2 is measured by capnography. Upper airway pressure changes are measured by esophageal pressure monitoring, not RIP belts.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          'Which of the following medications used for insomnia works by blocking orexin (hypocretin) receptors to promote sleep?',
        choices: {
          A: 'Suvorexant',
          B: 'Eszopiclone',
          C: 'Trazodone',
          D: 'Doxepin',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Suvorexant (Belsomra) is a dual orexin receptor antagonist (DORA) that blocks the wake-promoting effects of orexin-A and orexin-B. By inhibiting orexin signaling, it reduces the arousal drive and promotes sleep onset and maintenance.',
        explanationWrong:
          'Eszopiclone is a non-benzodiazepine GABA-A receptor agonist that enhances inhibitory neurotransmission. Trazodone is a serotonin antagonist and reuptake inhibitor with sedating properties used off-label for insomnia. Doxepin is a tricyclic antidepressant with histamine H1 receptor antagonist properties that promotes sleep at low doses.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          'A patient undergoes a PSG and the report states the oxygen desaturation index (ODI) is 38 events/hour. The ODI measures:',
        choices: {
          A: 'The total number of apneas and hypopneas per hour of sleep',
          B: 'The number of times per hour of sleep that the blood oxygen level drops by 3% or more (or 4% depending on the scoring rule) from baseline',
          C: 'The average oxygen saturation during the entire sleep period',
          D: 'The percentage of total sleep time spent below 90% oxygen saturation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The oxygen desaturation index (ODI) is the number of times per hour of sleep that the oxygen saturation drops by a defined percentage (typically 3% or 4% depending on the scoring criteria used) from baseline. It is a measure of intermittent hypoxemia and correlates with the severity of sleep-disordered breathing.',
        explanationWrong:
          'The number of apneas and hypopneas per hour defines the AHI, not the ODI. The average oxygen saturation is a separate metric (mean SpO2), not the ODI. The percentage of time below 90% is reported as T90 (time with SpO2 below 90%), not ODI.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
    ],
  })

  // ─── EXAM 5 (isFree: false) ──────────────────────────────────────────
  // Correct answer distribution: A=5(Q4,Q6,Q10,Q14,Q17) B=5(Q2,Q5,Q11,Q16,Q19) C=5(Q1,Q7,Q13,Q15,Q20) D=5(Q3,Q8,Q9,Q12,Q18)
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId: SDS_DIVISION_ID,
      title: 'SDS Mini Exam 5',
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
          'During polysomnography, the ground electrode (also called the common electrode or body ground) serves which primary purpose?',
        choices: {
          A: 'It measures the absolute voltage of each EEG channel independently',
          B: 'It serves as the reference point for all referential EEG derivations',
          C: 'It provides a common reference for the amplifier to reduce common-mode artifact rejection',
          D: 'It measures the impedance of each individual electrode',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The ground electrode provides a common reference voltage that allows the differential amplifier to identify and reject common-mode signals (signals that appear equally at both the active and reference electrodes), such as 60 Hz electrical interference. It is essential for reducing environmental noise in the recording.',
        explanationWrong:
          'EEG channels do not measure absolute voltage — they measure the voltage difference between two electrodes. The reference electrode (such as M1 or M2) is the reference point for referential derivations, not the ground. The ground electrode does not measure individual electrode impedances; impedance testing uses a separate measurement circuit.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          'According to AASM guidelines, which of the following criteria is used to identify a K-complex on EEG during sleep?',
        choices: {
          A: 'A brief burst of 12–14 Hz rhythmic activity lasting at least 0.5 seconds',
          B: 'A well-delineated negative sharp wave immediately followed by a positive component, with total duration of 0.5 seconds or greater, standing out from background EEG',
          C: 'A high-amplitude delta wave occurring in isolation during N1 sleep',
          D: 'A triphasic waveform with a duration of 0.2 seconds',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A K-complex is defined as a well-delineated negative sharp wave immediately followed by a positive component that stands out from the background EEG. The total duration must be 0.5 seconds or greater. K-complexes are maximal over frontal derivations and are a hallmark of stage N2 sleep.',
        explanationWrong:
          'A burst of 12–14 Hz rhythmic activity describes a sleep spindle, not a K-complex. An isolated delta wave during N1 does not define a K-complex — K-complexes are specific biphasic waveforms. A triphasic waveform of 0.2 seconds does not match the K-complex definition, which requires at least 0.5 seconds duration.',
        topic: 'Sleep staging rules (AASM scoring manual)',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          'The STOP-BANG questionnaire is used to screen for OSA risk. Which of the following scores on this tool indicates a high risk for OSA?',
        choices: {
          A: 'A score of 1 to 2',
          B: 'A score of 3 to 4',
          C: 'A score of exactly 4',
          D: 'A score of 5 or greater',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A STOP-BANG score of 5 or greater is classified as high risk for moderate-to-severe OSA. The questionnaire evaluates 8 yes/no questions: Snoring, Tiredness, Observed apneas, Pressure (hypertension), BMI > 35, Age > 50, Neck circumference > 40 cm, and Gender (male).',
        explanationWrong:
          'A score of 1 to 2 is classified as low risk for OSA. A score of 3 to 4 is intermediate risk. A score of exactly 4 falls in the intermediate range and does not definitively indicate high risk.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          'During a CPAP titration, the technologist observes the patient has developed significant mask leak with pressure at 13 cmH2O. After mask adjustment, the leak persists. What is the next most appropriate step?',
        choices: {
          A: 'Try a different mask size or type to achieve a better seal',
          B: 'Reduce the CPAP pressure to 10 cmH2O to minimize leak',
          C: 'Add a chin strap regardless of whether the leak is from the mask seal or the mouth',
          D: 'Continue the titration and document the leak as an unavoidable artifact',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When mask adjustment fails to resolve a significant leak, the next step is to try a different mask size or type. A properly fitting mask is essential for effective PAP delivery. The technologist should have multiple mask options available during titration studies.',
        explanationWrong:
          'Reducing the pressure compromises the titration and may result in an inadequate therapeutic pressure. A chin strap is appropriate specifically for mouth leak with a nasal mask, not for all types of leak. Continuing with significant leak results in inaccurate pressure delivery and poor study quality.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          'The recommended sensor for scoring hypopneas during polysomnography is:',
        choices: {
          A: 'An oronasal thermal sensor (thermistor)',
          B: 'A nasal pressure transducer',
          C: 'An end-tidal CO2 monitor',
          D: 'A piezoelectric respiratory effort belt',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The AASM recommends the nasal pressure transducer as the sensor for scoring hypopneas because it provides a semi-quantitative measurement of airflow that is more sensitive to subtle reductions in airflow than the thermistor. The nasal pressure signal can detect partial airflow reductions and flow limitation patterns.',
        explanationWrong:
          'The thermistor is the recommended sensor for scoring apneas (complete cessation of airflow), not hypopneas. End-tidal CO2 monitoring is used to assess ventilation, not to score individual hypopnea events. Piezoelectric belts measure respiratory effort, not airflow.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          'In normal human sleep, the body temperature rhythm is controlled by the circadian system. Core body temperature typically reaches its nadir at approximately what time?',
        choices: {
          A: 'Between 3 AM and 5 AM',
          B: 'Between 8 PM and 10 PM',
          C: 'At noon',
          D: 'Between 6 AM and 8 AM',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Core body temperature typically reaches its minimum (nadir) in the early morning hours, approximately between 3 AM and 5 AM, roughly 2 hours before the habitual wake time. This timing is closely linked to the circadian pacemaker in the suprachiasmatic nucleus and is associated with the maximum propensity for sleep.',
        explanationWrong:
          'Between 8 PM and 10 PM, body temperature is declining but has not yet reached its nadir. At noon, core body temperature is at or near its peak. Between 6 AM and 8 AM, body temperature is already rising from its nadir as the wake drive increases.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          'High-altitude periodic breathing differs from Cheyne-Stokes respiration primarily in which of the following ways?',
        choices: {
          A: 'High-altitude periodic breathing occurs only during REM sleep',
          B: 'High-altitude periodic breathing has a longer cycle length than Cheyne-Stokes respiration',
          C: 'High-altitude periodic breathing has a shorter cycle length and is driven by hypoxic ventilatory response rather than circulatory delay',
          D: 'High-altitude periodic breathing involves obstructive rather than central apneas',
        },
        correctChoice: 'C',
        explanationCorrect:
          'High-altitude periodic breathing typically has a shorter cycle length (20–40 seconds) compared to Cheyne-Stokes respiration (45–90 seconds). It is driven by the hypoxic ventilatory response at altitude causing hyperventilation and subsequent hypocapnia, leading to central apneas. CSR is driven by prolonged circulatory time in heart failure.',
        explanationWrong:
          'High-altitude periodic breathing occurs primarily during NREM sleep, not exclusively during REM. It has a shorter, not longer, cycle length than CSR. High-altitude periodic breathing involves central, not obstructive, apneas.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          'Which of the following is a limitation of home sleep apnea testing compared to in-laboratory polysomnography?',
        choices: {
          A: 'HSAT cannot measure oxygen saturation',
          B: 'HSAT is more expensive than in-laboratory PSG',
          C: 'HSAT provides more data channels than PSG',
          D: 'HSAT cannot measure sleep stages, so total sleep time is estimated from recording time, which may underestimate AHI in patients with poor sleep efficiency',
        },
        correctChoice: 'D',
        explanationCorrect:
          'HSAT devices (Type III and IV) do not include EEG channels, so they cannot determine sleep versus wake or identify specific sleep stages. The respiratory event index is calculated using total recording time rather than total sleep time, which underestimates the true AHI, especially in patients with significant wake time during the recording.',
        explanationWrong:
          'Most HSAT devices (Type III) do include pulse oximetry to measure oxygen saturation. HSAT is generally less expensive than in-laboratory PSG, which is one of its advantages. HSAT provides fewer data channels than PSG, not more.',
        topic: 'Home sleep apnea testing (HSAT)',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          'A patient is prescribed bilevel PAP with the following settings: IPAP 22 cmH2O, EPAP 16 cmH2O, in spontaneous mode. What is the primary clinical indication for using such a high EPAP setting?',
        choices: {
          A: 'To treat central sleep apnea',
          B: 'To reduce aerophagia',
          C: 'To improve patient comfort during exhalation',
          D: 'To maintain upper airway patency in a patient who requires high pressure to prevent obstructive events',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The EPAP on bilevel PAP serves the same function as CPAP — it maintains upper airway patency by providing a pneumatic splint. A high EPAP of 16 cmH2O indicates the patient requires significant pressure to prevent obstructive events, while the IPAP of 22 provides additional ventilatory support.',
        explanationWrong:
          'Central sleep apnea treatment typically uses ASV or bilevel ST mode with a backup rate, not simply high EPAP. High EPAP can actually worsen aerophagia. The purpose of high EPAP is airway maintenance, not comfort — lower EPAP would be more comfortable.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          'Which of the following statements about the relationship between OSA and hypertension is most accurate?',
        choices: {
          A: 'OSA is an independent risk factor for the development of systemic hypertension, and treatment of OSA with CPAP can modestly reduce blood pressure',
          B: 'Hypertension always resolves completely with adequate CPAP therapy',
          C: 'OSA is associated only with pulmonary hypertension, not systemic hypertension',
          D: 'The relationship between OSA and hypertension is entirely explained by obesity as a confounding factor',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Multiple large epidemiological studies have established OSA as an independent risk factor for systemic hypertension after controlling for confounders such as obesity, age, and sex. CPAP treatment has been shown to modestly reduce blood pressure, typically by 2–3 mmHg, with greater reductions seen in patients with more severe OSA and better CPAP adherence.',
        explanationWrong:
          'Hypertension rarely resolves completely with CPAP alone, as most patients have multiple contributing factors. OSA is associated with both systemic and pulmonary hypertension. The OSA-hypertension relationship persists after controlling for obesity, indicating it is not entirely explained by obesity.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          'A patient with narcolepsy type 1 is undergoing a multiple sleep latency test (MSLT). Which of the following conditions must be met the night before the MSLT?',
        choices: {
          A: 'The patient must be sleep-deprived for 24 hours before the test',
          B: 'The patient must have at least 6 hours of total sleep time on the preceding overnight PSG',
          C: 'The patient should take a stimulant medication the morning of the test',
          D: 'The patient must sleep in the lateral position throughout the night',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The AASM requires that the patient obtain at least 6 hours of total sleep time on the overnight PSG performed immediately before the MSLT. Insufficient sleep could produce falsely positive results (short sleep latencies and SOREMPs) due to sleep deprivation rather than true hypersomnolence.',
        explanationWrong:
          'Sleep deprivation before MSLT would invalidate the results by artificially shortening sleep latency. Stimulant medications should be discontinued for an appropriate washout period before the MSLT, not administered the morning of the test. Sleep position during the overnight PSG is not a specified MSLT prerequisite.',
        topic: 'Sleep architecture and normal sleep patterns',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          'An AASM-accredited sleep center performs a CPAP titration and the final report categorizes the study as a "good" titration rather than "optimal." Which of the following best describes the criteria for a "good" titration?',
        choices: {
          A: 'The titration eliminated all respiratory events in all positions and sleep stages',
          B: 'The titration reduced the AHI to below 10 but supine REM was not captured',
          C: 'The titration was performed for less than 3 hours total',
          D: 'The recommended pressure reduced the RDI to below 10 events/hour for at least a 15-minute period that included supine REM, but some events persisted',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A "good" titration is one where the RDI is reduced to below 10 events/hour but not completely eliminated. It should include a period of supine REM at the recommended pressure. An "optimal" titration requires the RDI to be reduced to below 5 with complete elimination of events during supine REM.',
        explanationWrong:
          'Complete elimination of all events in all positions and stages describes an "optimal" titration, not "good." Failure to capture supine REM typically results in an "adequate" or "unacceptable" rating. A study performed for less than 3 hours would likely be classified as inadequate if insufficient data were obtained.',
        topic: 'CPAP and BiPAP titration protocols',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          'During polysomnography, esophageal pressure monitoring (Pes) is considered the gold standard for measuring which of the following?',
        choices: {
          A: 'Airflow velocity through the nasal passages',
          B: 'Oxygen desaturation events',
          C: 'Respiratory effort',
          D: 'Cardiac output during sleep',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Esophageal pressure (Pes) monitoring is the gold standard for measuring respiratory effort during sleep. It directly measures intrathoracic pressure changes generated by the respiratory muscles. Increasingly negative Pes swings during inspiration indicate increased respiratory effort, which is key for distinguishing obstructive from central events and for identifying RERAs.',
        explanationWrong:
          'Airflow velocity is measured by the nasal pressure transducer. Oxygen desaturation is measured by pulse oximetry. Cardiac output is not routinely measured during standard polysomnography.',
        topic: 'Respiratory event scoring (apneas, hypopneas, RERAs)',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          'The Mallampati classification used in the evaluation of OSA patients assesses:',
        choices: {
          A: 'The visibility of oropharyngeal structures with the mouth open and tongue protruded, which correlates with airway size',
          B: 'The degree of nasal septal deviation',
          C: 'The size of the tonsils on a grading scale of 0 to 4',
          D: 'The circumference of the neck',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Mallampati classification evaluates the visibility of oropharyngeal structures (soft palate, fauces, uvula, pillars) when the patient opens their mouth and protrudes the tongue. Higher classes (III and IV) indicate a crowded oropharynx with limited visibility, which correlates with increased risk of difficult intubation and OSA.',
        explanationWrong:
          'Nasal septal deviation is assessed separately and is not part of the Mallampati classification. Tonsil grading (Brodsky scale) is a separate assessment from Mallampati. Neck circumference is measured independently as an OSA risk factor but is not part of the Mallampati classification.',
        topic: 'Obstructive sleep apnea diagnosis and severity',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          'Which of the following describes the primary mechanism by which the suprachiasmatic nucleus (SCN) regulates the circadian rhythm?',
        choices: {
          A: 'By directly secreting melatonin into the bloodstream',
          B: 'By responding to changes in blood glucose levels',
          C: 'By receiving photic input from the retina via the retinohypothalamic tract and generating endogenous rhythmic neural output',
          D: 'By monitoring changes in core body temperature and adjusting arousal accordingly',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The SCN is the master circadian pacemaker located in the anterior hypothalamus. It receives direct photic (light) input from specialized retinal ganglion cells via the retinohypothalamic tract and generates an endogenous ~24-hour rhythmic output that synchronizes peripheral clocks and regulates the timing of sleep, hormone secretion, and body temperature.',
        explanationWrong:
          'The SCN does not directly secrete melatonin — it signals the pineal gland to produce melatonin via a polysynaptic pathway. The SCN does not primarily respond to blood glucose levels. While the SCN influences body temperature rhythm, it does not monitor temperature as its primary input — light is the primary zeitgeber.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          'A patient using CPAP reports that the device ramps up too quickly to the prescribed pressure, causing discomfort and difficulty falling asleep. Which device feature should be adjusted?',
        choices: {
          A: 'The expiratory pressure relief setting',
          B: 'The ramp feature, which allows the device to start at a lower pressure and gradually increase to the prescribed pressure over a set time period',
          C: 'The humidifier temperature setting',
          D: 'The maximum pressure limit',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ramp feature starts PAP delivery at a low pressure (typically 4 cmH2O) and gradually increases to the therapeutic pressure over a user-adjustable time period (usually 5–45 minutes). Increasing the ramp time allows the patient to fall asleep at a comfortable low pressure before the therapeutic pressure is reached.',
        explanationWrong:
          'Expiratory pressure relief reduces pressure during exhalation but does not affect how quickly the device reaches therapeutic pressure. Humidifier temperature does not influence pressure delivery timing. The maximum pressure limit on CPAP is the prescribed therapeutic pressure and should not be reduced.',
        topic: 'PAP device types and mask interfaces',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          'Which of the following EEG patterns, if present during polysomnography, would raise concern for a seizure disorder rather than a normal sleep variant?',
        choices: {
          A: 'Rhythmic, evolving, high-amplitude spike-and-wave discharges with frequency changes and post-ictal slowing',
          B: 'Vertex sharp waves during stage N1 sleep',
          C: 'Positive occipital sharp transients of sleep (POSTS)',
          D: 'Hypnagogic hypersynchrony in a pediatric patient',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Rhythmic, evolving spike-and-wave discharges that change in frequency, amplitude, and distribution, followed by post-ictal slowing, are characteristic of an electrographic seizure. This pattern is distinctly different from normal sleep variants and requires neurological evaluation.',
        explanationWrong:
          'Vertex sharp waves are normal transients seen during N1 sleep. POSTS (positive occipital sharp transients of sleep) are a normal variant seen during NREM sleep. Hypnagogic hypersynchrony is a normal finding in children during the transition from wake to sleep.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          'A patient with obesity hypoventilation syndrome (OHS) and concomitant OSA typically demonstrates which blood gas abnormality while awake?',
        choices: {
          A: 'Respiratory alkalosis with low PaCO2',
          B: 'Normal arterial blood gases despite nocturnal hypoventilation',
          C: 'Isolated hypoxemia without hypercapnia',
          D: 'Chronic daytime hypercapnia (PaCO2 > 45 mmHg) with compensated respiratory acidosis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'OHS is defined by the combination of obesity (BMI >= 30), daytime hypercapnia (PaCO2 > 45 mmHg) in the absence of other causes of hypoventilation, and sleep-disordered breathing. The chronic hypercapnia leads to renal compensation with elevated bicarbonate, resulting in a compensated respiratory acidosis.',
        explanationWrong:
          'Respiratory alkalosis with low PaCO2 is the opposite of what is seen in OHS. Normal daytime blood gases would exclude the diagnosis of OHS. Isolated hypoxemia without hypercapnia does not meet the diagnostic criteria for OHS, which requires daytime hypercapnia.',
        topic: 'Central sleep apnea and Cheyne-Stokes respiration',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          'A patient diagnosed with chronic insomnia reports that they lie in bed for 9 hours each night but only sleep for 5.5 hours. Using sleep restriction therapy, what should the initial prescribed time in bed be?',
        choices: {
          A: '9 hours to match their current schedule',
          B: '5.5 hours to match their actual total sleep time, with a minimum of 5 hours',
          C: '7 hours as a compromise',
          D: '4 hours to maximally increase sleep drive',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In sleep restriction therapy, the initial time in bed is set to match the patient\'s estimated average total sleep time, which in this case is 5.5 hours. A minimum of 5 hours in bed is generally recommended to prevent excessive daytime sleepiness. As sleep efficiency improves above 85–90%, time in bed is gradually increased.',
        explanationWrong:
          'Maintaining 9 hours in bed perpetuates the conditioned wakefulness in bed that contributes to insomnia. 7 hours as a compromise does not follow the sleep restriction protocol. Restricting to 4 hours would be below the recommended minimum of 5 hours and could cause excessive sleepiness.',
        topic: 'Insomnia and circadian rhythm disorders',
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          'During a polysomnogram, a technologist notices that the pulse oximeter signal is showing frequent drops to 0% followed by rapid recovery. The patient\'s skin color appears normal and the waveform quality indicator shows poor signal. What is the most likely cause?',
        choices: {
          A: 'Severe intermittent hypoxemia from obstructive apneas',
          B: 'Carbon monoxide poisoning causing falsely low readings',
          C: 'Motion artifact from the patient\'s finger movements or poor probe contact',
          D: 'Methemoglobinemia affecting the oximeter\'s accuracy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Drops to 0% with rapid recovery, combined with poor waveform quality and normal-appearing patient color, are classic indicators of motion artifact or poor probe contact. True hypoxemia does not produce drops to exactly 0% and would be associated with clinical signs. The technologist should reposition the probe and secure it properly.',
        explanationWrong:
          'True severe hypoxemia would produce desaturations to low but not 0% values, and clinical signs would be present. Carbon monoxide poisoning causes falsely high, not low, oximeter readings because carboxyhemoglobin is read similarly to oxyhemoglobin. Methemoglobinemia causes readings to drift toward 85% regardless of true saturation, not to 0%.',
        topic: 'Polysomnography (PSG) setup and electrode placement',
      },
    ],
  })

  console.log('SDS mini exams 1-5 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
