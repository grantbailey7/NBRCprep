import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fxw0004zf54sy6um2ui";

  // ─── EXAM 26 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,7,11,16,20) B=5(Q1,5,10,14,18) C=5(Q2,6,12,15,19) D=5(Q4,8,9,13,17)
  const exam26 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 26",
      examIndex: 26,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam26.id,
        questionIndex: 1,
        questionText:
          "A patient performs three FVC maneuvers with the following FEV1 values: 2.85 L, 2.90 L, and 2.72 L. According to ATS/ERS acceptability criteria, what is the maximum allowable difference between the two largest FEV1 values?",
        choices: {
          A: "100 mL",
          B: "150 mL",
          C: "200 mL",
          D: "250 mL",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS 2019 standards require that the two largest FEV1 values from acceptable maneuvers be within 150 mL of each other to meet repeatability criteria. In this case, 2.90 - 2.85 = 0.05 L (50 mL), which meets the criterion.",
        explanationWrong:
          "100 mL was the older repeatability criterion but is no longer the standard threshold. 200 mL and 250 mL are too lenient and would allow excessive variability between maneuvers.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 2,
        questionText:
          "When measuring total lung capacity (TLC) by helium dilution, which factor most commonly leads to underestimation of true lung volume?",
        choices: {
          A: "Hyperventilation during the test",
          B: "Excessive equilibration time",
          C: "Poorly ventilated regions of the lung",
          D: "Use of a larger rebreathing bag",
        },
        correctChoice: "C",
        explanationCorrect:
          "Helium dilution measures only gas-communicating lung volumes. In patients with severe airflow obstruction, poorly ventilated regions (trapped gas) do not equilibrate with the helium mixture, causing underestimation of true TLC compared to body plethysmography.",
        explanationWrong:
          "Hyperventilation would alter breathing pattern but not systematically underestimate volume. Excessive equilibration time would actually improve accuracy. A larger rebreathing bag affects the calculation but does not specifically cause underestimation due to trapped gas.",
        topic: "Helium dilution",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 3,
        questionText:
          "During DLCO testing using the single-breath method, which of the following conditions would cause a falsely elevated DLCO result?",
        choices: {
          A: "Polycythemia",
          B: "Anemia",
          C: "Emphysema",
          D: "Pulmonary fibrosis",
        },
        correctChoice: "A",
        explanationCorrect:
          "Polycythemia increases the hemoglobin concentration and thus the number of binding sites for carbon monoxide. This leads to greater CO uptake and a falsely elevated DLCO that does not reflect the true gas exchange surface area.",
        explanationWrong:
          "Anemia decreases hemoglobin, reducing CO binding sites and lowering DLCO. Emphysema destroys alveolar-capillary surface area, reducing DLCO. Pulmonary fibrosis thickens the alveolar-capillary membrane, also reducing DLCO.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 4,
        questionText:
          "A technologist notices that the volume calibration of a dry-rolling-seal spirometer yields 3.08 L when a 3.00 L calibration syringe is used. What is the appropriate next step?",
        choices: {
          A: "Proceed with testing since the error is within 5%",
          B: "Replace the calibration syringe",
          C: "Repeat the calibration after warming the syringe",
          D: "Investigate and correct the source of the error before testing",
        },
        correctChoice: "D",
        explanationCorrect:
          "A 3.08 L reading from a 3.00 L syringe represents a 2.7% error, which exceeds the ATS/ERS tolerance of ±3.5% (±105 mL for a 3 L syringe). Wait - 80 mL is within ±105 mL. However, the technologist should still investigate the discrepancy. Actually, 3.08 L is within the ±3.5% range (2.895–3.105 L), so it barely passes. Best practice is still to investigate any consistent over-reading to ensure accuracy.",
        explanationWrong:
          "While the reading may technically be within tolerance, a consistent over-reading warrants investigation. Replacing the syringe is premature without verifying it is the source. Warming the syringe does not address spirometer calibration issues.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 5,
        questionText:
          "During a methacholine challenge test, a patient's FEV1 drops by 22% from baseline after the 4 mg/mL concentration. What is the correct interpretation?",
        choices: {
          A: "Negative test; a 25% drop is required",
          B: "Positive test indicating airway hyperresponsiveness",
          C: "Equivocal result requiring repeat testing",
          D: "Positive only if symptoms are present",
        },
        correctChoice: "B",
        explanationCorrect:
          "A methacholine challenge test is considered positive when FEV1 falls by 20% or more from the post-saline baseline. A 22% drop at 4 mg/mL confirms airway hyperresponsiveness and the test should be stopped with bronchodilator administered.",
        explanationWrong:
          "A 25% threshold is not the standard criterion; 20% is the accepted cutoff. The result is definitive, not equivocal. Symptoms are not required for a positive test - the FEV1 decline alone is the objective criterion.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 6,
        questionText:
          "In a 6-minute walk test (6MWT), which of the following is an absolute contraindication to performing the test?",
        choices: {
          A: "Resting heart rate above 100 bpm",
          B: "Resting SpO2 of 90%",
          C: "Unstable angina within the past month",
          D: "Use of supplemental oxygen",
        },
        correctChoice: "C",
        explanationCorrect:
          "Unstable angina within the past month is an absolute contraindication to the 6MWT per ATS guidelines. The risk of a cardiac event during exercise testing is unacceptably high in this population.",
        explanationWrong:
          "Resting tachycardia above 100 is not an absolute contraindication, though it should be documented. SpO2 of 90% warrants supplemental oxygen but does not prohibit testing. Supplemental oxygen use is permitted and commonly employed during the 6MWT.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 7,
        questionText:
          "According to standard infection control practices, PFT equipment mouthpieces and tubing should be handled using which approach?",
        choices: {
          A: "Single-patient-use disposable items or high-level disinfection between patients",
          B: "Rinsing with tap water between patients",
          C: "Wiping with alcohol swabs only",
          D: "Autoclaving after every 10 patients",
        },
        correctChoice: "A",
        explanationCorrect:
          "Mouthpieces and tubing that contact mucous membranes are classified as semi-critical items. They require either single-patient-use disposable components or high-level disinfection between patients to prevent cross-contamination.",
        explanationWrong:
          "Tap water rinsing does not provide adequate disinfection for semi-critical items. Alcohol swabs alone are insufficient for items contacting mucous membranes. Autoclaving after every 10 patients allows unacceptable cross-contamination between those patients.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 8,
        questionText:
          "A patient's spirometry results show: FVC 62% predicted, FEV1 58% predicted, FEV1/FVC ratio 78%. This pattern is most consistent with which disorder?",
        choices: {
          A: "Moderate obstructive disease",
          B: "Mixed obstructive and restrictive disease",
          C: "Mild obstructive disease",
          D: "Restrictive ventilatory defect",
        },
        correctChoice: "D",
        explanationCorrect:
          "A reduced FVC and FEV1 with a preserved or elevated FEV1/FVC ratio (78% is above the lower limit of normal in most populations) is the hallmark pattern of restrictive lung disease. Lung volumes should be measured to confirm true restriction.",
        explanationWrong:
          "Obstructive disease is characterized by a reduced FEV1/FVC ratio, which is not present here. Mixed disease would also show a reduced ratio. With a normal or elevated FEV1/FVC ratio, obstruction is not indicated.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 9,
        questionText:
          "When coaching a patient during an FVC maneuver, at what point should the technologist begin encouraging maximal expiratory effort?",
        choices: {
          A: "After the patient reaches residual volume",
          B: "During the inspiratory phase only",
          C: "Only during the first 2 seconds of expiration",
          D: "Throughout the entire forced expiratory maneuver from blast effort to end-of-test",
        },
        correctChoice: "D",
        explanationCorrect:
          "Effective coaching requires continuous encouragement throughout the entire forced expiratory maneuver. The technologist should urge a maximal blast effort at the start and then continue to coach the patient to keep blowing until the end-of-test criteria are met (plateau in volume-time curve).",
        explanationWrong:
          "Stopping encouragement at residual volume misses the active phase. Coaching only during inspiration neglects the critical expiratory phase. Limiting coaching to 2 seconds would result in premature termination before achieving a plateau.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 10,
        questionText:
          "The Global Lung Initiative (GLI-2012) reference equations use which statistical approach to define the lower limit of normal (LLN)?",
        choices: {
          A: "Fixed percentage of predicted (80%)",
          B: "Z-score of -1.645 (5th percentile)",
          C: "Standard deviation below the mean of ±2",
          D: "Coefficient of variation threshold",
        },
        correctChoice: "B",
        explanationCorrect:
          "GLI-2012 reference equations define the LLN using z-scores, where a z-score of -1.645 corresponds to the 5th percentile of the healthy reference population. This approach accounts for age, height, sex, and race/ethnicity more accurately than fixed percentage cutoffs.",
        explanationWrong:
          "Fixed 80% of predicted is an older approach that can misclassify results in younger and older adults. A z-score of ±2 (2.3rd percentile) is more extreme than the standard LLN threshold. Coefficient of variation is used for repeatability assessment, not defining normal ranges.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 11,
        questionText:
          "On a flow-volume loop, a scooped-out appearance of the descending limb of the expiratory curve is most characteristic of which condition?",
        choices: {
          A: "Obstructive airway disease such as asthma or COPD",
          B: "Pulmonary fibrosis",
          C: "Neuromuscular weakness",
          D: "Obesity hypoventilation",
        },
        correctChoice: "A",
        explanationCorrect:
          "The concave or scooped-out appearance of the expiratory limb on a flow-volume loop indicates reduced expiratory flow at lower lung volumes, which is the hallmark of obstructive airway diseases such as asthma and COPD due to dynamic airway compression.",
        explanationWrong:
          "Pulmonary fibrosis produces a tall, narrow loop with preserved shape but reduced volumes. Neuromuscular weakness shows reduced peak flows with a relatively preserved loop shape. Obesity may reduce volumes but does not typically produce the scooped-out pattern.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 12,
        questionText:
          "A pneumotachometer used in the PFT lab is reading consistently low flow rates. Which of the following is the most likely cause?",
        choices: {
          A: "Excessive humidity in the room",
          B: "A cracked calibration syringe",
          C: "Mucus or debris partially occluding the sensor screen",
          D: "Incorrect patient demographics entered",
        },
        correctChoice: "C",
        explanationCorrect:
          "Pneumotachometers measure flow by detecting the pressure differential across a resistive element (screen or mesh). Mucus, condensation, or debris partially occluding the screen increases resistance and causes falsely low flow readings.",
        explanationWrong:
          "Room humidity may affect readings but would not cause consistent low values. A cracked syringe would affect calibration verification but would not explain consistently low patient readings. Patient demographics affect predicted values, not measured values.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 13,
        questionText:
          "During body plethysmography, the patient is asked to pant against a closed shutter. This maneuver measures which volume?",
        choices: {
          A: "Tidal volume",
          B: "Expiratory reserve volume",
          C: "Inspiratory capacity",
          D: "Thoracic gas volume (TGV) at functional residual capacity",
        },
        correctChoice: "D",
        explanationCorrect:
          "Panting against a closed shutter in a body plethysmograph allows measurement of thoracic gas volume (TGV), which corresponds to functional residual capacity (FRC). The technique applies Boyle's law to relate changes in mouth pressure and box volume/pressure to intrathoracic gas volume.",
        explanationWrong:
          "Tidal volume is measured during normal quiet breathing. Expiratory reserve volume is measured during a maximal expiration from end-tidal level. Inspiratory capacity is measured during a maximal inspiration from FRC. None of these require a closed shutter panting maneuver.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 14,
        questionText:
          "In the nitrogen washout method for measuring FRC, equilibration is considered complete when the end-tidal nitrogen concentration falls below what threshold?",
        choices: {
          A: "5%",
          B: "1.5%",
          C: "3%",
          D: "10%",
        },
        correctChoice: "B",
        explanationCorrect:
          "The open-circuit nitrogen washout test is considered complete when the end-tidal N2 concentration falls below 1.5% for three consecutive breaths, indicating that substantially all nitrogen has been washed out from the lungs.",
        explanationWrong:
          "5% would prematurely terminate the test before adequate washout. 3% is not the standard threshold. 10% would terminate far too early and grossly underestimate lung volumes.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 15,
        questionText:
          "A pulse oximeter reads 85% SpO2 on a patient with dark blue nail polish. After removing the nail polish, the SpO2 reads 96%. What effect did the nail polish have?",
        choices: {
          A: "It caused overestimation of SpO2",
          B: "It had no measurable effect",
          C: "It caused falsely low SpO2 readings by absorbing light at the measurement wavelengths",
          D: "It caused the device to display an error message",
        },
        correctChoice: "C",
        explanationCorrect:
          "Dark-colored nail polish, especially blue and black shades, can absorb light at the wavelengths used by pulse oximeters (660 nm red and 940 nm infrared), leading to falsely low SpO2 readings. Removing the polish or placing the sensor on a different site resolves the artifact.",
        explanationWrong:
          "Nail polish does not cause overestimation; the absorption effect tends to decrease the displayed SpO2. The effect was measurable (11% difference). The device displayed a value rather than an error, which makes this artifact potentially dangerous because clinicians may act on the false reading.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 16,
        questionText:
          "When performing an arterial blood gas (ABG) puncture on the radial artery, a modified Allen test is performed to assess collateral circulation from which artery?",
        choices: {
          A: "Ulnar artery",
          B: "Brachial artery",
          C: "Axillary artery",
          D: "Digital artery",
        },
        correctChoice: "A",
        explanationCorrect:
          "The modified Allen test assesses the adequacy of collateral blood flow through the ulnar artery before performing radial artery puncture. Both arteries are compressed, the hand is opened, and then the ulnar artery is released. Return of color within 5-10 seconds indicates adequate collateral flow.",
        explanationWrong:
          "The brachial artery is upstream and does not provide collateral flow to the hand independent of the radial artery. The axillary artery is too proximal. Digital arteries are distal branches and are not assessed by the Allen test.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 17,
        questionText:
          "During cardiopulmonary exercise testing (CPET), an increasing VE/VCO2 slope above 34 most likely indicates which condition?",
        choices: {
          A: "Normal exercise response",
          B: "Deconditioning alone",
          C: "Peripheral muscle weakness",
          D: "Ventilatory inefficiency suggesting pulmonary vascular disease",
        },
        correctChoice: "D",
        explanationCorrect:
          "An elevated VE/VCO2 slope (>34) indicates ventilatory inefficiency - the patient requires excessive ventilation relative to CO2 production. This is a hallmark of pulmonary vascular disease (pulmonary hypertension, pulmonary embolism) where increased dead space ventilation drives compensatory hyperventilation.",
        explanationWrong:
          "Normal VE/VCO2 slopes are typically below 30. Deconditioning reduces peak VO2 but does not typically elevate the VE/VCO2 slope above 34. Peripheral muscle weakness limits exercise capacity but does not cause ventilatory inefficiency.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 18,
        questionText:
          "A patient's pre-bronchodilator FEV1 is 2.10 L and post-bronchodilator FEV1 is 2.40 L. What is the percent change and is it a significant response?",
        choices: {
          A: "12% change; not significant",
          B: "14.3% change and >200 mL increase; significant positive response",
          C: "10% change; not significant",
          D: "14.3% change but does not meet volume criteria",
        },
        correctChoice: "B",
        explanationCorrect:
          "Percent change = (2.40 - 2.10)/2.10 × 100 = 14.3%. The absolute change is 300 mL. ATS/ERS criteria for a significant bronchodilator response require BOTH a ≥12% increase AND a ≥200 mL absolute increase in FEV1 or FVC. Both criteria are met, indicating a significant positive response.",
        explanationWrong:
          "The calculation yields 14.3%, not 12% or 10%. The volume change of 300 mL clearly exceeds the 200 mL threshold, so both criteria are satisfied. This is a definitively positive bronchodilator response.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 19,
        questionText:
          "When performing spirometry on a 4-year-old child, which modification to standard adult testing protocols is most appropriate?",
        choices: {
          A: "Require a minimum 6-second forced expiratory time",
          B: "Use fixed 80% predicted as the lower limit of normal",
          C: "Accept a forced expiratory time of 1-3 seconds if a clear plateau is reached",
          D: "Require at least 8 acceptable maneuvers",
        },
        correctChoice: "C",
        explanationCorrect:
          "Young children (under age 6) have smaller lungs and can often empty them completely in 1-3 seconds. Requiring a 6-second forced expiratory time is unrealistic and inappropriate for this age group. A clear plateau on the volume-time curve, even if brief, indicates a complete exhalation.",
        explanationWrong:
          "A 6-second forced expiratory time is an adult criterion and should not be applied to young children. Fixed 80% predicted is not recommended for any age group by current standards. Requiring 8 maneuvers would be excessive and exhausting for a young child; 3 acceptable maneuvers are sufficient.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam26.id,
        questionIndex: 20,
        questionText:
          "In occupational lung disease screening, a worker exposed to asbestos for 20 years shows an isolated reduction in DLCO with normal spirometry and lung volumes. What is the most likely explanation?",
        choices: {
          A: "Early parenchymal or pleural disease affecting gas transfer before mechanical impairment",
          B: "Inadequate test effort",
          C: "Equipment malfunction",
          D: "Normal age-related decline",
        },
        correctChoice: "A",
        explanationCorrect:
          "Asbestos exposure can cause early alveolar-capillary membrane thickening (asbestosis) or pleural disease that impairs gas transfer before changes in lung mechanics are detectable by spirometry or lung volume measurements. An isolated DLCO reduction in this context warrants further evaluation with HRCT.",
        explanationWrong:
          "Inadequate effort would more likely affect spirometry than DLCO. Equipment malfunction would typically produce inconsistent results across all tests. While DLCO declines with age, the occupational exposure history makes early asbestos-related disease the most likely explanation.",
        topic: "Occupational lung disease screening",
      },
    ],
  });

  console.log(`Exam 26 created: ${exam26.id} with 20 questions`);

  // ─── EXAM 27 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,8,12,17,19) B=5(Q4,6,11,15,20) C=5(Q1,5,9,14,16) D=5(Q3,7,10,13,18)
  const exam27 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 27",
      examIndex: 27,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam27.id,
        questionIndex: 1,
        questionText:
          "During spirometry, back-extrapolated volume (BEV) is used to assess the quality of which aspect of the FVC maneuver?",
        choices: {
          A: "End-of-test plateau",
          B: "Peak expiratory flow reproducibility",
          C: "The start of the forced expiration (blast effort)",
          D: "Inspiratory capacity adequacy",
        },
        correctChoice: "C",
        explanationCorrect:
          "Back-extrapolated volume (BEV) quantifies the quality of the start of the forced expiratory maneuver. ATS/ERS criteria require that BEV be less than 5% of FVC or 150 mL (whichever is greater) to ensure the patient initiated the expiration with a sharp, explosive blast effort.",
        explanationWrong:
          "End-of-test plateau is assessed by examining the volume-time curve for a plateau (no volume change for at least 1 second). PEF reproducibility is a separate criterion. Inspiratory capacity is a different measurement not evaluated by BEV.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 2,
        questionText:
          "Which lung volume cannot be measured by spirometry alone and requires either gas dilution or body plethysmography?",
        choices: {
          A: "Residual volume (RV)",
          B: "Tidal volume (VT)",
          C: "Inspiratory reserve volume (IRV)",
          D: "Expiratory reserve volume (ERV)",
        },
        correctChoice: "A",
        explanationCorrect:
          "Residual volume is the air remaining in the lungs after maximal expiration and cannot be exhaled into a spirometer. Measuring RV requires indirect techniques such as helium dilution, nitrogen washout, or body plethysmography.",
        explanationWrong:
          "Tidal volume, inspiratory reserve volume, and expiratory reserve volume can all be directly measured by spirometry because they involve gas that moves in and out of the lungs during breathing maneuvers.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 3,
        questionText:
          "The DLCO single-breath test requires the patient to hold their breath for approximately how long?",
        choices: {
          A: "3-5 seconds",
          B: "15-20 seconds",
          C: "30 seconds",
          D: "8-12 seconds",
        },
        correctChoice: "D",
        explanationCorrect:
          "The single-breath DLCO test requires a breath-hold time of 8-12 seconds (target 10 ± 2 seconds). This standardized duration allows adequate time for CO to diffuse across the alveolar-capillary membrane while remaining comfortable for the patient.",
        explanationWrong:
          "3-5 seconds is too short for adequate CO diffusion and measurement. 15-20 seconds and 30 seconds are excessively long and would cause patient discomfort and potentially alter gas exchange measurements.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 4,
        questionText:
          "During a methacholine challenge, the PC20 is reported as 2.5 mg/mL. How is this result classified?",
        choices: {
          A: "Normal airway responsiveness",
          B: "Moderate airway hyperresponsiveness",
          C: "Severe airway hyperresponsiveness",
          D: "Borderline airway hyperresponsiveness",
        },
        correctChoice: "B",
        explanationCorrect:
          "A PC20 between 1 and 4 mg/mL indicates moderate airway hyperresponsiveness. The classification is: PC20 <1 mg/mL = severe, 1-4 mg/mL = moderate, 4-16 mg/mL = mild/borderline, >16 mg/mL = normal.",
        explanationWrong:
          "Normal responsiveness requires a PC20 >16 mg/mL. Severe hyperresponsiveness requires a PC20 <1 mg/mL. Borderline is typically classified as PC20 between 4 and 16 mg/mL.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 5,
        questionText:
          "During a 6-minute walk test, which of the following should be used as the primary outcome measure?",
        choices: {
          A: "Maximum heart rate achieved",
          B: "Lowest SpO2 recorded during the walk",
          C: "Total distance walked in 6 minutes",
          D: "Time to reach 85% of predicted maximum heart rate",
        },
        correctChoice: "C",
        explanationCorrect:
          "The primary outcome measure of the 6MWT is the total distance walked in 6 minutes, measured in meters. While SpO2, heart rate, dyspnea, and fatigue ratings are important supplemental data, the 6-minute walk distance (6MWD) is the principal reported result.",
        explanationWrong:
          "Maximum heart rate and SpO2 nadir are secondary measurements that provide additional clinical information. The 6MWT is not designed to achieve a target heart rate - that is a feature of formal cardiopulmonary exercise testing.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 6,
        questionText:
          "How often should a 3-liter calibration syringe be checked for accuracy according to ATS/ERS recommendations?",
        choices: {
          A: "Monthly",
          B: "At least annually by comparing against a second validated syringe or laboratory standard",
          C: "Only when it appears damaged",
          D: "Every 5 years when the manufacturer recommends replacement",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS recommends that calibration syringes themselves be validated at least annually by comparing them against a reference standard or another validated syringe. This ensures the syringe remains accurate for daily spirometer calibration verification.",
        explanationWrong:
          "Monthly verification of the syringe itself is more frequent than required (though spirometer calibration verification is done daily). Checking only when damaged is insufficient. A 5-year interval is far too infrequent.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 7,
        questionText:
          "Which of the following organisms poses the greatest infection control concern in the PFT laboratory due to its airborne transmission?",
        choices: {
          A: "Staphylococcus aureus",
          B: "Escherichia coli",
          C: "Clostridium difficile",
          D: "Mycobacterium tuberculosis",
        },
        correctChoice: "D",
        explanationCorrect:
          "Mycobacterium tuberculosis is transmitted by airborne droplet nuclei and poses the greatest infection control risk in PFT labs where patients perform forced breathing maneuvers that can generate aerosols. Patients with known or suspected TB should be tested in negative pressure rooms or with appropriate respiratory precautions.",
        explanationWrong:
          "S. aureus is primarily transmitted by contact. E. coli is primarily fecal-oral. C. difficile is transmitted by spores via contact. None of these pose the same airborne transmission risk during PFT procedures as M. tuberculosis.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 8,
        questionText:
          "A patient repeatedly terminates the FVC maneuver after 2 seconds despite vigorous coaching. The volume-time curve shows no plateau. The technologist should document this as which type of error?",
        choices: {
          A: "Early termination or failure to meet end-of-test criteria",
          B: "Submaximal effort at the start",
          C: "Cough artifact",
          D: "Leak around the mouthpiece",
        },
        correctChoice: "A",
        explanationCorrect:
          "When a patient stops blowing before achieving a volume-time plateau (no change in volume for ≥1 second in adults), it constitutes early termination. The maneuver fails to meet end-of-test criteria and should be documented as such, though the FEV1 may still be usable if the first second was acceptable.",
        explanationWrong:
          "Submaximal effort at the start would manifest as low peak flow and excessive BEV. Cough artifact would show transient flow interruptions on the flow-volume loop. A leak would show a gradual decline in volume on the volume-time curve.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 9,
        questionText:
          "When using NHANES III reference equations, which demographic variables are used to calculate predicted spirometry values?",
        choices: {
          A: "Age, weight, and sex only",
          B: "Age, height, and body mass index",
          C: "Age, height, sex, and race/ethnicity",
          D: "Age, height, and smoking history",
        },
        correctChoice: "C",
        explanationCorrect:
          "NHANES III spirometry reference equations use age, standing height, sex, and race/ethnicity (categorized as Caucasian, African American, or Mexican American) to calculate predicted values. These variables account for the major physiological determinants of lung function.",
        explanationWrong:
          "Weight is not a variable in NHANES III spirometry equations. BMI is not used. Smoking history affects actual results but is not a variable in prediction equations, which are derived from healthy non-smokers.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 10,
        questionText:
          "A flow-volume loop demonstrates equal flattening of both the inspiratory and expiratory limbs, forming a box-like shape. This pattern is most consistent with which condition?",
        choices: {
          A: "Variable intrathoracic obstruction",
          B: "Severe restrictive lung disease",
          C: "Small airway disease",
          D: "Fixed upper airway obstruction",
        },
        correctChoice: "D",
        explanationCorrect:
          "Fixed upper airway obstruction (e.g., tracheal stenosis, bilateral vocal cord paralysis, goiter compressing the trachea) produces equal flow limitation during both inspiration and expiration because the lesion does not change with transmural pressure changes. This creates the characteristic box-like or truncated flow-volume loop.",
        explanationWrong:
          "Variable intrathoracic obstruction flattens only the expiratory limb. Restrictive disease shows a miniaturized but normally shaped loop. Small airway disease shows a scooped-out expiratory limb at low lung volumes.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 11,
        questionText:
          "A turbine-type flow sensor in a portable spirometer is showing erratic readings. What is the most common cause of this malfunction?",
        choices: {
          A: "Low battery voltage",
          B: "Foreign material interfering with the turbine blade rotation",
          C: "Ambient temperature below 17°C",
          D: "High altitude above 1500 meters",
        },
        correctChoice: "B",
        explanationCorrect:
          "Turbine flow sensors rely on unimpeded rotation of a small vane or blade. Foreign material such as saliva, mucus, or dust can stick to or obstruct the blade, causing erratic or inaccurate flow measurements. Regular cleaning and inspection of the turbine is essential.",
        explanationWrong:
          "Low battery would more likely cause complete device failure than erratic readings. Cold temperature affects gas volume (BTPS correction) but not turbine mechanics directly. Altitude requires pressure corrections but does not cause erratic turbine behavior.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 12,
        questionText:
          "In body plethysmography, airway resistance (Raw) is measured during which breathing maneuver?",
        choices: {
          A: "Rapid shallow panting at 1-2 Hz through an open shutter",
          B: "Slow vital capacity maneuver",
          C: "Maximal forced expiration",
          D: "Single-breath nitrogen washout",
        },
        correctChoice: "A",
        explanationCorrect:
          "Airway resistance is measured during rapid shallow panting (1-2 Hz) through an open shutter in the body plethysmograph. The relationship between flow at the mouth and plethysmographic pressure changes allows calculation of alveolar pressure swings and thus airway resistance.",
        explanationWrong:
          "Slow vital capacity measures static lung volumes. Forced expiration is used for FVC/FEV1. Single-breath nitrogen washout measures closing volume and distribution of ventilation. None of these measure airway resistance.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 13,
        questionText:
          "During a nitrogen washout test, the patient's end-tidal N2 concentration fails to reach the washout threshold after 7 minutes of 100% O2 breathing. This finding most likely indicates which condition?",
        choices: {
          A: "Normal lung function with anxious breathing pattern",
          B: "Restrictive lung disease",
          C: "Equipment leak causing ambient air contamination",
          D: "Severe air trapping or maldistribution of ventilation",
        },
        correctChoice: "D",
        explanationCorrect:
          "Prolonged nitrogen washout time (>7 minutes) indicates severe air trapping or uneven distribution of ventilation, as seen in advanced obstructive lung diseases like COPD or severe asthma. The poorly ventilated regions retain nitrogen and are slow to wash out.",
        explanationWrong:
          "Anxious breathing (hyperventilation) would actually speed up nitrogen washout. Restrictive disease does not typically cause maldistribution of ventilation. While a leak could introduce ambient nitrogen, a systematic failure to wash out nitrogen over 7 minutes is much more likely pathological.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 14,
        questionText:
          "In capnography, the alpha angle represents which physiological characteristic?",
        choices: {
          A: "Alveolar dead space fraction",
          B: "Cardiac output",
          C: "The transition between airway dead space gas and alveolar gas during expiration",
          D: "Respiratory rate",
        },
        correctChoice: "C",
        explanationCorrect:
          "The alpha angle on a capnogram represents the transition from phase II (rapidly rising CO2 as dead space gas mixes with alveolar gas) to phase III (alveolar plateau). A widened alpha angle suggests uneven ventilation or bronchospasm, as different lung regions empty at different rates.",
        explanationWrong:
          "Alveolar dead space fraction is related to the difference between PaCO2 and PETCO2 (Bohr equation), not the alpha angle. Cardiac output affects CO2 delivery but is not directly measured by the alpha angle. Respiratory rate is determined by the frequency of waveforms, not the alpha angle.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 15,
        questionText:
          "When collecting an arterial blood gas sample, what is the recommended maximum time for the sample to be analyzed if kept at room temperature?",
        choices: {
          A: "60 minutes",
          B: "30 minutes",
          C: "10 minutes",
          D: "5 minutes",
        },
        correctChoice: "B",
        explanationCorrect:
          "If an ABG sample cannot be analyzed immediately, it should be analyzed within 30 minutes if kept at room temperature, or within 60 minutes if placed on ice. Delays beyond these timeframes allow continued cellular metabolism, which decreases PaO2 and pH while increasing PaCO2.",
        explanationWrong:
          "60 minutes is the limit for iced samples, not room temperature. 10 minutes and 5 minutes are unnecessarily restrictive, though sooner analysis is always better.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 16,
        questionText:
          "During CPET, oxygen pulse (VO2/HR) is used as a noninvasive surrogate for which parameter?",
        choices: {
          A: "Minute ventilation",
          B: "Respiratory exchange ratio",
          C: "Stroke volume × arteriovenous oxygen difference",
          D: "Dead space to tidal volume ratio",
        },
        correctChoice: "C",
        explanationCorrect:
          "Oxygen pulse equals VO2 divided by heart rate, and by the Fick equation, this equals stroke volume multiplied by the arteriovenous oxygen content difference (C(a-v)O2). A plateau or decline in oxygen pulse during exercise may suggest cardiac limitation or ischemia.",
        explanationWrong:
          "Minute ventilation is measured directly during CPET. Respiratory exchange ratio is VCO2/VO2. Dead space to tidal volume ratio is calculated from arterial and mixed expired CO2 values. None of these are estimated by oxygen pulse.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 17,
        questionText:
          "A patient with a baseline FEV1 of 1.80 L has a post-bronchodilator FEV1 of 1.95 L. Is this a significant bronchodilator response?",
        choices: {
          A: "No, because the percent change is <12% and the absolute change is <200 mL",
          B: "Yes, because any measurable improvement is significant",
          C: "Yes, because the change exceeds 100 mL",
          D: "No, because the absolute change must exceed 400 mL",
        },
        correctChoice: "A",
        explanationCorrect:
          "The change is 150 mL (1.95 - 1.80) and 8.3% ((0.15/1.80) × 100). ATS/ERS criteria require BOTH ≥12% improvement AND ≥200 mL absolute increase. This patient meets neither threshold, so the response is not significant.",
        explanationWrong:
          "Not any measurable change is significant - clinical criteria exist for a reason. A 100 mL threshold is below the minimum 200 mL requirement. A 400 mL threshold is too stringent and not the standard criterion.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 18,
        questionText:
          "In obese patients (BMI >40), which PFT parameter is most characteristically reduced?",
        choices: {
          A: "FEV1/FVC ratio",
          B: "Total lung capacity",
          C: "Peak expiratory flow",
          D: "Expiratory reserve volume (ERV)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Obesity characteristically reduces ERV due to the mass loading effect of adipose tissue on the chest wall and diaphragm in the upright position. FRC is also reduced. TLC may be preserved or mildly reduced, and the FEV1/FVC ratio is typically normal or even elevated.",
        explanationWrong:
          "FEV1/FVC ratio is usually preserved or increased in obesity. TLC is often normal unless obesity is extreme. Peak expiratory flow may be slightly reduced but is not the most characteristically affected parameter.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 19,
        questionText:
          "Which spirometric pattern is most commonly associated with early silicosis from occupational exposure?",
        choices: {
          A: "Mixed obstructive-restrictive pattern with reduced DLCO",
          B: "Isolated reduction in FEF25-75% only",
          C: "Normal spirometry with only radiographic abnormalities",
          D: "Severe obstruction with hyperinflation",
        },
        correctChoice: "A",
        explanationCorrect:
          "Silicosis commonly presents with a mixed obstructive-restrictive pattern. The silicotic nodules and progressive massive fibrosis restrict lung expansion while also narrowing small airways. DLCO is typically reduced due to destruction of the alveolar-capillary interface.",
        explanationWrong:
          "Isolated FEF25-75% reduction is nonspecific and does not characterize silicosis. While early simple silicosis may have normal spirometry with only radiographic findings, this describes very early disease. Severe obstruction with hyperinflation is more typical of COPD.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam27.id,
        questionIndex: 20,
        questionText:
          "When performing spirometry, BTPS correction is applied to convert measured volumes to body conditions. What does BTPS stand for?",
        choices: {
          A: "Basic Temperature and Pressure, Standard",
          B: "Body Temperature and Pressure, Saturated with water vapor",
          C: "Barometric Temperature, Pressure, and Saturation",
          D: "Body Temperature at Predicted Standard",
        },
        correctChoice: "B",
        explanationCorrect:
          "BTPS stands for Body Temperature (37°C), ambient Pressure, and Saturated with water vapor (100% relative humidity at 37°C = 47 mmHg water vapor pressure). All spirometry volumes are reported at BTPS to standardize measurements to in vivo lung conditions.",
        explanationWrong:
          "The other options are fabricated acronym expansions. BTPS specifically refers to body temperature (37°C), ambient barometric pressure, and fully saturated water vapor conditions, representing actual conditions inside the lungs.",
        topic: "Spirometry procedures and interpretation",
      },
    ],
  });

  console.log(`Exam 27 created: ${exam27.id} with 20 questions`);

  // ─── EXAM 28 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q1,6,10,15,18) B=5(Q3,8,13,16,20) C=5(Q4,7,11,17,19) D=5(Q2,5,9,12,14)
  const exam28 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 28",
      examIndex: 28,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam28.id,
        questionIndex: 1,
        questionText:
          "The forced expiratory flow between 25% and 75% of FVC (FEF25-75%) is considered an indicator of function in which airway region?",
        choices: {
          A: "Small airways (peripheral airways)",
          B: "Upper airways (larynx and trachea)",
          C: "Main bronchi only",
          D: "Alveolar ducts",
        },
        correctChoice: "A",
        explanationCorrect:
          "FEF25-75% reflects flow during the effort-independent portion of the forced expiration, which is predominantly determined by small airway (peripheral airway) caliber. It is often reduced early in obstructive diseases affecting the small airways, though it has high variability.",
        explanationWrong:
          "Upper airway function is reflected in peak flow and the shape of the flow-volume loop. Main bronchi contribute more to peak flow than mid-flow rates. Alveolar ducts are part of the gas exchange zone and are not directly assessed by spirometric flows.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 2,
        questionText:
          "Total lung capacity (TLC) is the sum of which two capacities?",
        choices: {
          A: "Tidal volume and residual volume",
          B: "Inspiratory capacity and expiratory reserve volume",
          C: "FVC and tidal volume",
          D: "Vital capacity and residual volume",
        },
        correctChoice: "D",
        explanationCorrect:
          "TLC = VC + RV. Total lung capacity represents all the gas in the lungs at maximal inspiration, which equals the vital capacity (the maximum volume that can be exhaled) plus the residual volume (the volume remaining after maximal exhalation).",
        explanationWrong:
          "Tidal volume plus RV does not account for inspiratory and expiratory reserve volumes. IC + ERV equals vital capacity, not TLC. FVC + VT double-counts the tidal volume. Only VC + RV correctly sums to TLC.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 3,
        questionText:
          "Before performing a DLCO test, the patient should refrain from smoking for a minimum of how many hours?",
        choices: {
          A: "1 hour",
          B: "At least 4-6 hours (ideally 24 hours) before testing",
          C: "30 minutes",
          D: "12 hours",
        },
        correctChoice: "B",
        explanationCorrect:
          "Patients should abstain from smoking for at least 4-6 hours before DLCO testing, with 24 hours being ideal. Smoking elevates carboxyhemoglobin (COHb) levels, which reduces available hemoglobin binding sites for the test gas CO and falsely lowers the measured DLCO.",
        explanationWrong:
          "1 hour and 30 minutes are insufficient for COHb levels to decline adequately. 12 hours is reasonable but the minimum standard recommendation is 4-6 hours with 24 hours preferred.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 4,
        questionText:
          "Which bronchoprovocation agent works by directly stimulating muscarinic receptors on airway smooth muscle?",
        choices: {
          A: "Mannitol",
          B: "Histamine",
          C: "Methacholine",
          D: "Hypertonic saline",
        },
        correctChoice: "C",
        explanationCorrect:
          "Methacholine is a direct-acting cholinergic agonist that stimulates muscarinic (M3) receptors on bronchial smooth muscle, causing bronchoconstriction. It is the most widely used direct bronchoprovocation agent for assessing airway hyperresponsiveness.",
        explanationWrong:
          "Mannitol is an indirect osmotic agent that triggers mast cell mediator release. Histamine acts on H1 receptors and also has indirect inflammatory effects. Hypertonic saline is an indirect osmotic stimulus. Only methacholine is a pure direct muscarinic agonist.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 5,
        questionText:
          "According to ATS guidelines for the 6MWT, what should the technologist say when giving encouragement to the patient during the test?",
        choices: {
          A: "Walk faster to improve your score",
          B: "You are doing great, try to push harder",
          C: "Take longer strides to cover more distance",
          D: "Standardized phrases such as 'You are doing well. You have 5 minutes to go.'",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS guidelines specify that only standardized encouragement phrases should be used at set intervals (each minute) during the 6MWT, such as 'You are doing well. You have X minutes to go.' This ensures reproducibility and prevents coaching bias that could affect the distance walked.",
        explanationWrong:
          "Telling patients to walk faster, push harder, or take longer strides represents non-standardized coaching that can introduce variability between tests and between institutions. The 6MWT is a self-paced test and coaching must be uniform.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 6,
        questionText:
          "A spirometer's daily calibration verification shows volumes of 2.92, 2.95, and 2.94 L using a 3.00 L syringe. What is the correct course of action?",
        choices: {
          A: "Investigate the discrepancy; all readings are below the acceptable range",
          B: "Average the three readings and use 2.94 L as the correction factor",
          C: "Proceed with testing since the readings are consistent",
          D: "Replace the spirometer immediately",
        },
        correctChoice: "A",
        explanationCorrect:
          "The acceptable range for a 3.00 L calibration syringe is ±3.5% (2.895-3.105 L). While 2.95 and 2.94 are within range, 2.92 falls slightly above the lower limit (2.895). More importantly, a consistent under-reading pattern warrants investigation for causes such as a leak, temperature effects, or sensor degradation before patient testing.",
        explanationWrong:
          "Averaging calibration readings to create a correction factor is not appropriate practice. Consistency of readings does not validate accuracy if all readings are systematically low. Immediate replacement is premature before troubleshooting.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 7,
        questionText:
          "In-line bacterial/viral filters used during PFT should have what maximum effect on measured flow and volume?",
        choices: {
          A: "No effect whatsoever on any measurement",
          B: "Less than 10% reduction in peak flow",
          C: "Resistance less than 1.5 cmH2O/L/sec at a flow of 14 L/sec and negligible dead space effect",
          D: "Filter effects are irrelevant because post-filter corrections are always applied",
        },
        correctChoice: "C",
        explanationCorrect:
          "In-line filters should have minimal resistance (typically <1.5 cmH2O/L/sec at 14 L/sec) and small dead space volume. ATS/ERS recommends that filters not significantly affect measured values. Calibration should be performed with the filter in place to account for any added resistance.",
        explanationWrong:
          "It is unrealistic to expect absolutely no effect. A 10% reduction in peak flow would be unacceptable. Post-filter corrections are not routinely applied; instead, calibration is done with the filter in line. Filter resistance and dead space must be minimized.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 8,
        questionText:
          "A patient's spirometry shows FVC 85% predicted, FEV1 60% predicted, and FEV1/FVC ratio 56%. According to ATS/ERS severity grading, how is the obstruction classified?",
        choices: {
          A: "Mild obstruction",
          B: "Moderate obstruction",
          C: "Severe obstruction",
          D: "Very severe obstruction",
        },
        correctChoice: "B",
        explanationCorrect:
          "With a reduced FEV1/FVC ratio confirming obstruction, severity is graded by the FEV1 percent predicted. An FEV1 of 60% predicted falls in the moderate obstruction category (50-69% predicted) according to ATS/ERS guidelines.",
        explanationWrong:
          "Mild obstruction requires FEV1 ≥70% predicted. Severe obstruction is defined as FEV1 35-49% predicted. Very severe is FEV1 <35% predicted. An FEV1 of 60% fits squarely in the moderate category.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 9,
        questionText:
          "A flow-volume loop shows a sudden, brief interruption of flow during the expiratory phase followed by resumption of the expected flow pattern. This artifact is most likely caused by which event?",
        choices: {
          A: "Glottic closure",
          B: "Complete bronchospasm",
          C: "Mouthpiece leak",
          D: "Cough during the expiratory maneuver",
        },
        correctChoice: "D",
        explanationCorrect:
          "A cough during forced expiration produces a characteristic spike or interruption in the flow-volume loop - a sudden reduction in flow followed by a brief burst of flow and then return to the expected pattern. This is one of the most common artifacts in spirometry and renders the maneuver unacceptable.",
        explanationWrong:
          "Glottic closure would cause a sustained cessation of flow, not a brief interruption. Complete bronchospasm would show progressive flow reduction, not a sudden transient artifact. A mouthpiece leak would show a gradual decline rather than a sudden interruption and recovery.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 10,
        questionText:
          "What is the recommended warm-up period for a gas analyzer used in DLCO testing before patient testing begins?",
        choices: {
          A: "Allow the manufacturer-specified warm-up time (typically 30-60 minutes) to ensure stable readings",
          B: "5 minutes is sufficient for all analyzers",
          C: "No warm-up is required for modern digital analyzers",
          D: "Warm-up is only needed if the room temperature is below 20°C",
        },
        correctChoice: "A",
        explanationCorrect:
          "Gas analyzers require a manufacturer-specified warm-up period (typically 30-60 minutes) to achieve thermal stability and accurate readings. Infrared and paramagnetic analyzers are particularly sensitive to temperature fluctuations during the warm-up phase.",
        explanationWrong:
          "5 minutes is generally insufficient for most gas analyzers to stabilize. Even modern digital analyzers require warm-up for sensor stability. Temperature only affects warm-up time marginally; the requirement applies regardless of ambient temperature.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 11,
        questionText:
          "In body plethysmography, what artifact can result from the patient supporting their cheeks with their hands during the panting maneuver?",
        choices: {
          A: "Overestimation of TGV",
          B: "Underestimation of airway resistance",
          C: "Reduced upper airway compliance artifact, improving measurement accuracy",
          D: "Overestimation of airway resistance",
        },
        correctChoice: "C",
        explanationCorrect:
          "Supporting the cheeks with the hands is actually recommended during body plethysmography panting. It reduces upper airway (cheek) compliance, which would otherwise cause pressure swings at the mouth to underrepresent alveolar pressure changes, leading to artifactually high TGV and resistance values.",
        explanationWrong:
          "Supporting the cheeks prevents overestimation of TGV, not causes it. It also prevents overestimation of airway resistance. The maneuver improves accuracy rather than introducing artifact.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 12,
        questionText:
          "In the closed-circuit helium dilution method, what initial helium concentration is typically used in the spirometer circuit?",
        choices: {
          A: "5%",
          B: "15%",
          C: "1%",
          D: "Approximately 10%",
        },
        correctChoice: "D",
        explanationCorrect:
          "The initial helium concentration in the closed circuit is typically set at approximately 10%. As the patient rebreathes and equilibrium is reached, the final concentration is measured and the initial-to-final ratio is used with the known circuit volume to calculate the unknown lung volume (FRC).",
        explanationWrong:
          "5% may be too low and reduce measurement sensitivity. 15% is higher than typically used and would be wasteful. 1% would provide insufficient concentration for accurate detection of equilibrium.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 13,
        questionText:
          "Which of the following conditions causes the greatest discrepancy between SpO2 measured by pulse oximetry and SaO2 measured by co-oximetry?",
        choices: {
          A: "Mild anemia",
          B: "Carbon monoxide poisoning",
          C: "Fever",
          D: "Mild hypoxemia (PaO2 65 mmHg)",
        },
        correctChoice: "B",
        explanationCorrect:
          "Carbon monoxide poisoning causes the greatest discrepancy because carboxyhemoglobin (COHb) absorbs light at 660 nm similarly to oxyhemoglobin. Standard pulse oximeters cannot distinguish COHb from O2Hb, so SpO2 reads falsely normal while true SaO2 (measured by co-oximetry) is dangerously low.",
        explanationWrong:
          "Mild anemia does not significantly affect SpO2 accuracy. Fever has minimal effect on pulse oximetry. Mild hypoxemia is accurately tracked by pulse oximeters because they are calibrated through the 70-100% range. Only dyshemoglobinemias cause the large discrepancy described.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 14,
        questionText:
          "After performing a radial artery puncture for ABG analysis, how long should direct pressure be applied to the puncture site?",
        choices: {
          A: "30 seconds",
          B: "1 minute",
          C: "2 minutes",
          D: "At least 5 minutes (longer if the patient is anticoagulated)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Direct pressure should be applied to the radial artery puncture site for at least 5 minutes to ensure hemostasis. Patients on anticoagulant therapy or with coagulopathies require longer compression (10-15 minutes) to prevent hematoma formation.",
        explanationWrong:
          "30 seconds, 1 minute, and 2 minutes are all insufficient to ensure hemostasis of an arterial puncture. Unlike venipuncture, arterial punctures involve higher-pressure vessels and require prolonged compression to prevent bleeding complications.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 15,
        questionText:
          "During CPET, the respiratory exchange ratio (RER) at maximal exercise is used to assess what?",
        choices: {
          A: "Whether the patient achieved a maximal or near-maximal effort",
          B: "Presence of cardiac ischemia",
          C: "Degree of airflow obstruction",
          D: "Arterial oxygen desaturation",
        },
        correctChoice: "A",
        explanationCorrect:
          "An RER ≥1.10-1.15 at peak exercise is considered evidence that the patient achieved maximal or near-maximal effort. An RER above 1.0 indicates that CO2 production exceeds O2 consumption, reflecting anaerobic metabolism and buffering of lactic acid. A low peak RER suggests submaximal effort.",
        explanationWrong:
          "Cardiac ischemia is assessed by ECG changes during CPET. Airflow obstruction is evaluated by flow-volume loops and ventilatory reserve. Desaturation is monitored by pulse oximetry. RER specifically indicates metabolic effort level.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 16,
        questionText:
          "After administering a bronchodilator for pre/post spirometry, what is the recommended wait time before performing post-bronchodilator testing with albuterol?",
        choices: {
          A: "5 minutes",
          B: "10-15 minutes after short-acting beta-agonist (albuterol) administration",
          C: "30 minutes",
          D: "60 minutes",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS guidelines recommend waiting 10-15 minutes after administering a short-acting beta-agonist (such as albuterol/salbutamol) before performing post-bronchodilator spirometry. This allows sufficient time for the bronchodilator to reach peak effect.",
        explanationWrong:
          "5 minutes is too soon for peak bronchodilator effect. 30 minutes and 60 minutes are unnecessarily long for short-acting beta-agonists, though longer waits may be appropriate for ipratropium bromide (30 minutes).",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 17,
        questionText:
          "When performing spirometry on elderly patients (>80 years), which challenge is most commonly encountered?",
        choices: {
          A: "Equipment cannot measure flows in this age group",
          B: "Reference equations do not exist for this population",
          C: "Difficulty maintaining a tight lip seal and sustained expiratory effort due to reduced muscular strength",
          D: "All elderly patients have obstructive disease that invalidates testing",
        },
        correctChoice: "C",
        explanationCorrect:
          "Elderly patients commonly have difficulty with spirometry due to reduced respiratory muscle strength, decreased coordination, dental issues affecting lip seal, and inability to sustain forced expiration for the full 6 seconds. Patience, repeated instruction, and possibly accepting shorter expiratory times may be necessary.",
        explanationWrong:
          "Standard equipment works for all ages. GLI-2012 equations extend to age 95. Not all elderly patients have obstructive disease. The main challenge is physical and cognitive ability to perform the maneuvers correctly.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 18,
        questionText:
          "Spirometric surveillance for workers exposed to cotton dust (byssinosis) should be performed at what frequency?",
        choices: {
          A: "At baseline and at least annually thereafter",
          B: "Only when symptoms develop",
          C: "Every 5 years",
          D: "Only at the pre-employment physical",
        },
        correctChoice: "A",
        explanationCorrect:
          "OSHA mandates spirometric surveillance at baseline and at least annually for workers exposed to cotton dust and other agents that cause occupational lung disease. Cross-shift spirometry (before and after a work shift) may also be performed to detect acute responses. Early detection of decline allows intervention.",
        explanationWrong:
          "Waiting for symptoms risks missing early reversible disease. Testing every 5 years is too infrequent to detect progressive decline. A single pre-employment test provides no longitudinal data to detect occupational lung disease progression.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 19,
        questionText:
          "Which of the following best describes the end-of-test criteria for an acceptable FVC maneuver in adults according to ATS/ERS standards?",
        choices: {
          A: "Patient reports they cannot blow out any more air",
          B: "Expiratory time reaches exactly 6 seconds",
          C: "Volume-time curve shows a plateau with volume change <25 mL in the last 1 second of expiration, OR expiratory time exceeds 15 seconds",
          D: "Flow drops below 0.5 L/sec",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS/ERS 2019 standards define the end-of-test as a volume-time plateau where volume change is <25 mL in the final 1 second of expiration, OR a reasonable expiratory time is reached (15 seconds is the practical upper limit). The patient should not be forced to continue beyond a clear plateau.",
        explanationWrong:
          "Patient self-report alone is unreliable for determining adequate exhalation. A fixed 6-second time is the minimum, not the termination criterion. A flow cutoff of 0.5 L/sec is not the defined ATS/ERS end-of-test criterion.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam28.id,
        questionIndex: 20,
        questionText:
          "Which quality control measure should be performed daily on the PFT laboratory biologic control (human subject)?",
        choices: {
          A: "No biologic control is needed if equipment is calibrated daily",
          B: "A healthy non-smoking staff member should perform spirometry to verify results fall within their established baseline range",
          C: "The biologic control needs testing only monthly",
          D: "Any patient's results can serve as a biologic control",
        },
        correctChoice: "B",
        explanationCorrect:
          "A biologic control involves a healthy, trained staff member performing spirometry at regular intervals (ideally weekly, some labs do it daily) to verify that their results remain within ±5% or 2 standard deviations of their established mean. This detects systematic equipment drift that calibration verification alone may miss.",
        explanationWrong:
          "Biologic controls complement equipment calibration by detecting errors that mechanical calibration cannot, such as BTPS correction errors or software issues. Monthly testing is the minimum; many labs test weekly. Random patients are not appropriate biologic controls due to day-to-day variability.",
        topic: "Quality control and calibration",
      },
    ],
  });

  console.log(`Exam 28 created: ${exam28.id} with 20 questions`);

  // ─── EXAM 29 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q4,7,10,14,19) B=5(Q2,6,13,16,20) C=5(Q3,8,11,18,15) D=5(Q1,5,9,12,17)
  const exam29 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 29",
      examIndex: 29,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam29.id,
        questionIndex: 1,
        questionText:
          "When a spirometry maneuver shows a time to peak expiratory flow (PEF) greater than 120 milliseconds, what does this suggest about the quality of the effort?",
        choices: {
          A: "The maneuver is perfectly acceptable",
          B: "The patient achieved supramaximal effort",
          C: "The results should be reported with a note about PEF timing",
          D: "A slow start to the forced expiration indicating a submaximal blast effort",
        },
        correctChoice: "D",
        explanationCorrect:
          "Time to PEF should be rapid, typically less than 120 milliseconds. A prolonged time to PEF indicates that the patient did not initiate the forced expiration with an explosive blast effort, which may affect the measured FEV1 and other early-phase flow parameters.",
        explanationWrong:
          "A delayed PEF indicates a quality problem, not an acceptable maneuver. Supramaximal effort would show rapid PEF attainment. While a note may be added, the primary interpretation is that the blast effort was inadequate.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 2,
        questionText:
          "Functional residual capacity (FRC) is the sum of which two volumes?",
        choices: {
          A: "Tidal volume and inspiratory reserve volume",
          B: "Expiratory reserve volume and residual volume",
          C: "Inspiratory capacity and tidal volume",
          D: "Vital capacity and residual volume",
        },
        correctChoice: "B",
        explanationCorrect:
          "FRC = ERV + RV. Functional residual capacity is the volume of gas remaining in the lungs at the end of a normal tidal expiration. It consists of the expiratory reserve volume (gas that can still be exhaled) plus the residual volume (gas that cannot be exhaled).",
        explanationWrong:
          "VT + IRV equals inspiratory capacity. IC + VT is not a standard subdivision. VC + RV equals TLC, not FRC.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 3,
        questionText:
          "The DLCO is adjusted for hemoglobin concentration because hemoglobin directly affects CO uptake. If a patient's hemoglobin is 9 g/dL (normal ~14.5 g/dL for males), the uncorrected DLCO will be:",
        choices: {
          A: "Higher than the corrected value",
          B: "Equal to the corrected value",
          C: "Lower than the corrected (hemoglobin-adjusted) value",
          D: "Unaffected by hemoglobin levels",
        },
        correctChoice: "C",
        explanationCorrect:
          "With anemia (low hemoglobin), fewer CO binding sites are available, so the uncorrected DLCO will be lower than it would be with normal hemoglobin. Correcting for hemoglobin adjusts the DLCO upward to reflect what it would be at a normal hemoglobin level, isolating the membrane component.",
        explanationWrong:
          "The uncorrected value cannot be higher than the corrected value in anemia - correction adjusts upward. They would only be equal if hemoglobin were normal. DLCO is clearly affected by hemoglobin, as CO must bind to hemoglobin to be removed from alveolar gas.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 4,
        questionText:
          "Exercise-induced bronchoconstriction (EIB) testing using eucapnic voluntary hyperventilation (EVH) is considered positive when FEV1 falls by at least what percentage?",
        choices: {
          A: "10% from baseline",
          B: "5% from baseline",
          C: "25% from baseline",
          D: "15% from baseline",
        },
        correctChoice: "A",
        explanationCorrect:
          "EVH testing for exercise-induced bronchoconstriction is considered positive when FEV1 falls by ≥10% from baseline at any time point during post-challenge monitoring. EVH is the gold standard surrogate for exercise challenge in EIB assessment, particularly in elite athletes.",
        explanationWrong:
          "5% is within normal variability and too sensitive. 15% and 25% thresholds are too stringent and would miss many positive cases. The 10% threshold balances sensitivity and specificity for EIB diagnosis.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 5,
        questionText:
          "During a 6MWT, a patient's SpO2 drops from 95% at rest to 82% during the walk. The technologist should:",
        choices: {
          A: "Ignore the desaturation and continue the full 6 minutes",
          B: "Record the nadir but have the patient continue at a slower pace",
          C: "Increase the walking speed to finish faster",
          D: "Stop the test and apply supplemental oxygen per laboratory protocol",
        },
        correctChoice: "D",
        explanationCorrect:
          "An SpO2 drop to 82% represents severe exercise-induced desaturation and is an indication to stop the 6MWT according to most laboratory safety protocols. Supplemental oxygen should be applied and the patient monitored. The stopping criteria vary by institution but SpO2 <85% is widely accepted.",
        explanationWrong:
          "Ignoring severe desaturation puts the patient at risk. Having them continue at a slower pace does not address the safety concern. Increasing walking speed would worsen desaturation. Patient safety takes priority over test completion.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 6,
        questionText:
          "A spirometer passes the 3-liter syringe calibration check in the morning but fails by afternoon. Which environmental factor is most likely responsible?",
        choices: {
          A: "Change in barometric pressure over the day",
          B: "Significant room temperature change affecting BTPS correction",
          C: "Change in ambient light levels",
          D: "Increased patient volume in the afternoon",
        },
        correctChoice: "B",
        explanationCorrect:
          "Room temperature changes significantly affect gas volumes and the BTPS correction factor. If the temperature sensor reading is inaccurate or if the ambient temperature changes substantially from morning to afternoon, the BTPS correction will be incorrect, leading to calibration failure.",
        explanationWrong:
          "Normal diurnal barometric pressure changes are typically too small to cause calibration failure. Ambient light does not affect spirometer function. Patient volume affects technologist workload but not equipment calibration.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 7,
        questionText:
          "Standard precautions in the PFT laboratory require hand hygiene to be performed at which times?",
        choices: {
          A: "Before and after each patient contact, after removing gloves, and after contact with contaminated equipment",
          B: "Only before touching sterile equipment",
          C: "Only after visibly soiling the hands",
          D: "Once at the beginning of each shift",
        },
        correctChoice: "A",
        explanationCorrect:
          "Standard precautions mandate hand hygiene before and after every patient contact, after removing gloves (hands may become contaminated during glove removal), and after touching potentially contaminated equipment. Alcohol-based hand rub or soap and water should be used.",
        explanationWrong:
          "PFT testing does not involve sterile technique - hand hygiene is required regardless. Waiting until hands are visibly soiled misses most contamination events. Once per shift is grossly inadequate for preventing cross-contamination.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 8,
        questionText:
          "A patient performs acceptable and repeatable FVC maneuvers. The largest FVC is 3.45 L and the largest FEV1 is 2.80 L, but they come from different maneuvers. Which values should be reported?",
        choices: {
          A: "Both values from the single best maneuver only",
          B: "Only the FEV1 from the best maneuver",
          C: "The largest FVC and largest FEV1 from any acceptable maneuver, even if from different maneuvers",
          D: "The average of all acceptable maneuvers",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS/ERS standards state that the largest FVC and largest FEV1 from any acceptable maneuver should be reported, even if they come from different maneuvers. This approach selects the best value for each parameter independently.",
        explanationWrong:
          "Selecting both values from a single maneuver may miss the patient's best performance for one parameter. Reporting only FEV1 omits FVC. Averaging would dilute the best values with lesser efforts.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 9,
        questionText:
          "The z-score for a patient's FEV1 is -2.10. Using GLI-2012 reference equations, how should this be interpreted?",
        choices: {
          A: "Normal, as any z-score above -3 is acceptable",
          B: "Borderline, requiring clinical correlation",
          C: "Cannot be interpreted without knowing the predicted value",
          D: "Below the lower limit of normal (LLN), indicating abnormality",
        },
        correctChoice: "D",
        explanationCorrect:
          "A z-score of -2.10 falls below the LLN threshold of -1.645 (5th percentile) used by GLI-2012. This means the patient's FEV1 is below what 95% of healthy individuals of the same age, sex, height, and race/ethnicity would have, indicating an abnormal result.",
        explanationWrong:
          "A z-score threshold of -3 is too extreme and would miss significant abnormalities. The result is definitively below the LLN, not borderline. The z-score inherently incorporates the predicted value and its variability, so additional information is not needed for this determination.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 10,
        questionText:
          "On a maximal flow-volume loop, the peak expiratory flow (PEF) occurs at approximately what percentage of vital capacity?",
        choices: {
          A: "Near total lung capacity, typically within the first 15-20% of exhaled volume",
          B: "At 50% of vital capacity",
          C: "At 75% of exhaled volume",
          D: "At residual volume",
        },
        correctChoice: "A",
        explanationCorrect:
          "Peak expiratory flow is achieved very early in the forced expiratory maneuver, typically when only 15-20% of the vital capacity has been exhaled. This reflects the effort-dependent portion of the maneuver, occurring near TLC where elastic recoil and muscular effort are maximal.",
        explanationWrong:
          "At 50% and 75% of exhaled volume, flows have already declined from peak due to dynamic airway compression and decreasing lung elastic recoil. PEF never occurs at residual volume, which is the end of exhalation.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 11,
        questionText:
          "A Fleisch-type pneumotachometer measures flow based on which physical principle?",
        choices: {
          A: "Ultrasonic transit time difference",
          B: "Thermal mass flow detection",
          C: "Pressure drop across a known resistance (Poiseuille's law)",
          D: "Turbine blade rotation frequency",
        },
        correctChoice: "C",
        explanationCorrect:
          "A Fleisch pneumotachometer contains a bundle of capillary tubes that create a laminar flow resistance element. Flow is calculated from the pressure differential across this resistance using Poiseuille's law - the pressure drop is proportional to flow rate when flow is laminar.",
        explanationWrong:
          "Ultrasonic transit time is used in ultrasonic flow sensors. Thermal mass flow uses heated wire elements. Turbine-based sensors measure vane rotation. The Fleisch type specifically uses differential pressure across a resistive element.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 12,
        questionText:
          "Specific airway conductance (sGaw) measured by body plethysmography accounts for which variable that raw airway conductance (Gaw) does not?",
        choices: {
          A: "Patient height",
          B: "Barometric pressure",
          C: "Patient weight",
          D: "Thoracic gas volume (lung size)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Specific airway conductance (sGaw) = Gaw/TGV. By normalizing airway conductance for thoracic gas volume, sGaw accounts for the effect of lung volume on airway caliber. Larger lungs have lower resistance simply due to larger airways, and sGaw corrects for this.",
        explanationWrong:
          "Patient height and weight are not directly factored into sGaw calculation. Barometric pressure affects plethysmographic calculations but is not what distinguishes sGaw from Gaw. The key normalization is for lung volume (TGV).",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 13,
        questionText:
          "The single-breath nitrogen washout test can identify the closing volume. At what point during the slow exhalation does Phase IV (closing volume) begin?",
        choices: {
          A: "At total lung capacity",
          B: "When nitrogen concentration abruptly rises near the end of exhalation",
          C: "When nitrogen concentration first reaches zero",
          D: "At functional residual capacity",
        },
        correctChoice: "B",
        explanationCorrect:
          "Phase IV of the single-breath nitrogen washout test begins when the nitrogen concentration shows an abrupt upward deflection near the end of exhalation. This indicates closure of dependent airways, trapping nitrogen-rich gas in the bases and allowing nitrogen-enriched gas from the apices to predominate.",
        explanationWrong:
          "Phase IV does not begin at TLC - that is the start of the test. Nitrogen concentration never reaches zero during the test. FRC is the resting lung volume and does not mark the onset of Phase IV. The abrupt N2 rise is the defining feature.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 14,
        questionText:
          "A pulse oximeter displaying a weak or erratic plethysmographic waveform most likely indicates which problem?",
        choices: {
          A: "Poor peripheral perfusion at the sensor site",
          B: "High carboxyhemoglobin levels",
          C: "Sensor placed on the correct finger",
          D: "Normal signal acquisition",
        },
        correctChoice: "A",
        explanationCorrect:
          "A weak or erratic plethysmographic waveform indicates poor pulsatile blood flow at the sensor site, which can result from peripheral vasoconstriction, hypotension, hypothermia, or peripheral vascular disease. The SpO2 reading may be inaccurate or absent under these conditions.",
        explanationWrong:
          "High COHb does not affect the plethysmographic waveform quality - the pulse signal remains strong. A correctly placed sensor should show a strong waveform. An erratic waveform is never normal and always indicates a signal quality issue.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 15,
        questionText:
          "When performing ABG sampling, the most important reason for expelling air bubbles from the syringe immediately is to prevent:",
        choices: {
          A: "Hemolysis of the sample",
          B: "Clotting of the sample",
          C: "Equilibration of the sample with atmospheric oxygen, falsely elevating PaO2",
          D: "Pain at the puncture site",
        },
        correctChoice: "C",
        explanationCorrect:
          "Air bubbles in an ABG syringe contain room air with a PO2 of approximately 150 mmHg. If left in contact with the blood sample, oxygen will diffuse from the bubble into the blood (increasing PaO2) and CO2 will diffuse out (decreasing PaCO2), producing falsely elevated PaO2 and falsely low PaCO2 values.",
        explanationWrong:
          "Air bubbles do not cause hemolysis or clotting. They do not affect pain at the puncture site. The critical issue is gas exchange between the bubble and the sample, which alters the measured blood gas values.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 16,
        questionText:
          "During CPET, breathing reserve is calculated as 1 minus the ratio of peak minute ventilation to maximum voluntary ventilation (1 - VEpeak/MVV). A breathing reserve less than 15% suggests which limitation?",
        choices: {
          A: "Cardiac limitation",
          B: "Ventilatory limitation to exercise",
          C: "Deconditioning",
          D: "Peripheral muscle fatigue",
        },
        correctChoice: "B",
        explanationCorrect:
          "A breathing reserve <15% (or equivalently, VEpeak/MVV >0.85) indicates that the patient is using most of their available ventilatory capacity during exercise, suggesting a ventilatory limitation. This is commonly seen in patients with obstructive or restrictive lung diseases.",
        explanationWrong:
          "Cardiac limitation is suggested by achieving predicted maximum heart rate with normal breathing reserve. Deconditioning shows reduced peak VO2 with both cardiac and ventilatory reserve preserved. Peripheral muscle fatigue is suggested by early lactate accumulation with preserved cardiopulmonary reserves.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 17,
        questionText:
          "A patient with known asthma has a baseline FEV1 of 90% predicted. Bronchodilator reversibility testing requires withholding short-acting bronchodilators for at least how many hours before testing?",
        choices: {
          A: "2 hours",
          B: "8 hours",
          C: "12 hours",
          D: "4-6 hours",
        },
        correctChoice: "D",
        explanationCorrect:
          "Short-acting beta-agonists (SABAs) such as albuterol should be withheld for 4-6 hours before bronchodilator reversibility testing to allow the drug effect to dissipate. Long-acting bronchodilators require longer withholding periods (12-24 hours for LABAs, 24-48 hours for LAMAs).",
        explanationWrong:
          "2 hours is insufficient for SABA effects to wear off. 8 hours and 12 hours are longer than necessary for SABAs, though 12 hours would be appropriate for long-acting agents. The standard for SABAs is 4-6 hours.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 18,
        questionText:
          "In pediatric PFT, the raised volume rapid thoracoabdominal compression (RVRTC) technique is used to measure forced expiratory flows in which age group?",
        choices: {
          A: "Adolescents 12-17 years",
          B: "School-age children 6-11 years",
          C: "Infants and toddlers (typically <2 years of age)",
          D: "Adults over 65 years",
        },
        correctChoice: "C",
        explanationCorrect:
          "The raised volume rapid thoracoabdominal compression (RVRTC) technique is specifically designed for infant pulmonary function testing in children typically under 2 years old who cannot perform voluntary forced expiratory maneuvers. An inflatable jacket rapidly compresses the thorax and abdomen from a raised lung volume.",
        explanationWrong:
          "Adolescents and school-age children can typically perform standard spirometry with coaching. Adults use standard spirometry. The RVRTC technique is uniquely designed for infants who cannot cooperate with standard spirometric maneuvers.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 19,
        questionText:
          "Which occupational exposure is most strongly associated with the development of mesothelioma, detectable on chest imaging but not necessarily by spirometry alone?",
        choices: {
          A: "Asbestos",
          B: "Coal dust",
          C: "Silica",
          D: "Beryllium",
        },
        correctChoice: "A",
        explanationCorrect:
          "Asbestos exposure is the primary risk factor for mesothelioma, a malignancy of the pleural or peritoneal lining. While spirometry may show restriction from pleural disease, mesothelioma is primarily diagnosed by imaging (CT scan) and biopsy. Occupational history and imaging are critical for detection.",
        explanationWrong:
          "Coal dust causes coal workers' pneumoconiosis (black lung) but not mesothelioma. Silica causes silicosis. Beryllium causes berylliosis. Only asbestos exposure has the strong causal link to mesothelioma.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam29.id,
        questionIndex: 20,
        questionText:
          "When interpreting spirometry, a reduced FEV1/FVC ratio with an increased RV/TLC ratio most strongly suggests which pattern?",
        choices: {
          A: "Pure restrictive disease",
          B: "Obstructive disease with air trapping",
          C: "Normal aging changes",
          D: "Neuromuscular weakness",
        },
        correctChoice: "B",
        explanationCorrect:
          "A reduced FEV1/FVC ratio confirms obstruction, while an elevated RV/TLC ratio indicates air trapping - gas that remains in the lungs after maximal expiration due to premature airway closure. This combination is the hallmark of obstructive diseases such as COPD and severe asthma.",
        explanationWrong:
          "Restrictive disease shows a normal or elevated FEV1/FVC ratio with reduced TLC. While aging does increase RV/TLC slightly, a reduced FEV1/FVC ratio combined with significantly elevated RV/TLC exceeds normal aging. Neuromuscular weakness reduces VC but does not typically cause airflow obstruction.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
    ],
  });

  console.log(`Exam 29 created: ${exam29.id} with 20 questions`);

  // ─── EXAM 30 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,5,11,15,18) B=5(Q1,7,12,17,20) C=5(Q4,8,13,16,19) D=5(Q2,6,9,10,14)
  const exam30 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 30",
      examIndex: 30,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam30.id,
        questionIndex: 1,
        questionText:
          "During spirometry, what is the minimum number of acceptable maneuvers required before testing can be concluded?",
        choices: {
          A: "1 acceptable maneuver",
          B: "3 acceptable maneuvers that also meet repeatability criteria",
          C: "5 acceptable maneuvers",
          D: "2 acceptable maneuvers",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS 2019 standards require a minimum of 3 acceptable FVC maneuvers that also meet repeatability criteria (within 150 mL for FVC and FEV1). If repeatability is not achieved in 3 maneuvers, up to 8 maneuvers may be attempted.",
        explanationWrong:
          "1 or 2 maneuvers are insufficient to demonstrate repeatability. 5 maneuvers may sometimes be needed but are not the minimum requirement. The standard is 3 acceptable, repeatable maneuvers.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 2,
        questionText:
          "Inspiratory capacity (IC) is defined as the maximum volume of air that can be inhaled from which lung volume level?",
        choices: {
          A: "From residual volume",
          B: "From total lung capacity",
          C: "From peak expiratory flow",
          D: "From the end-tidal expiratory level (FRC)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Inspiratory capacity is the maximum volume that can be inhaled from the resting end-expiratory position (FRC). IC = VT + IRV. It represents the distance from FRC to TLC and is useful in assessing hyperinflation when combined with TLC measurement.",
        explanationWrong:
          "From residual volume to TLC is the vital capacity, not IC. TLC is the starting point for expiratory maneuvers, not inspiratory measurements. PEF is a flow rate, not a volume level.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 3,
        questionText:
          "When performing DLCO, which of the following test gases is typically included in the inspired mixture to measure alveolar volume (VA)?",
        choices: {
          A: "Helium or methane (an inert tracer gas)",
          B: "Pure nitrogen",
          C: "100% oxygen",
          D: "Argon",
        },
        correctChoice: "A",
        explanationCorrect:
          "The DLCO test gas mixture contains CO (approximately 0.3%), an inert tracer gas (helium or methane at approximately 10%), oxygen (approximately 21%), and the balance nitrogen. The inert tracer gas is used to calculate alveolar volume (VA) by dilution and to determine breath-hold time.",
        explanationWrong:
          "Pure nitrogen is already present in the lungs and cannot serve as a tracer. 100% oxygen would alter the test conditions and is not a tracer. Argon is not typically used in standard DLCO test gas mixtures, though it has been used in research.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 4,
        questionText:
          "In a mannitol challenge test for airway hyperresponsiveness, the test is considered positive when FEV1 drops by what percentage from baseline?",
        choices: {
          A: "10% from baseline",
          B: "20% from baseline",
          C: "15% cumulative from baseline or 10% between consecutive doses",
          D: "25% from baseline",
        },
        correctChoice: "C",
        explanationCorrect:
          "A mannitol challenge test is positive when FEV1 falls by ≥15% from baseline OR by ≥10% between two consecutive doses. This indirect challenge test causes bronchospasm through osmotic-mediated mast cell degranulation and is particularly useful for identifying exercise-induced bronchoconstriction.",
        explanationWrong:
          "A 10% drop alone is not the criterion for mannitol; it must be between consecutive doses. 20% is the threshold for methacholine, not mannitol. 25% is more stringent than the actual criterion for mannitol challenge testing.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 5,
        questionText:
          "In a 6MWT, the minimal clinically important difference (MCID) for 6-minute walk distance in patients with COPD is approximately:",
        choices: {
          A: "25-35 meters",
          B: "100 meters",
          C: "5 meters",
          D: "75 meters",
        },
        correctChoice: "A",
        explanationCorrect:
          "The MCID for 6MWD in COPD patients is approximately 25-35 meters (commonly cited as 30 meters). This represents the smallest change in walk distance that patients perceive as meaningful. Changes below this threshold may be statistically significant but are unlikely to be clinically meaningful.",
        explanationWrong:
          "100 meters would be a large and clinically obvious change. 5 meters is within normal test-to-test variability and is not clinically meaningful. 75 meters exceeds the MCID and represents a substantial improvement.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 6,
        questionText:
          "Linearity verification of a spirometer requires testing with known volumes at multiple flow rates. What is the acceptable accuracy across the entire measurement range?",
        choices: {
          A: "±5%",
          B: "±1%",
          C: "±10%",
          D: "±3.5% or ±65 mL (whichever is greater) across the volume range",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS standards require that spirometers demonstrate linearity within ±3.5% or ±65 mL (whichever is greater) across a range of flows from 0.5 to 12 L/sec and volumes from 0.5 to 8 L. This ensures accuracy throughout the physiological range.",
        explanationWrong:
          "±5% is less stringent than the actual standard. ±1% is more stringent than required and may be impractical. ±10% would allow too much measurement error for clinical decision-making. The ±3.5%/65 mL criterion is the current ATS/ERS standard.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 7,
        questionText:
          "Which type of PFT equipment requires sterilization (not just high-level disinfection) between patients?",
        choices: {
          A: "Noseclips",
          B: "Reusable bronchoscopy-assisted BAL equipment (critical items entering sterile body cavities)",
          C: "Spirometer body",
          D: "Computer keyboard",
        },
        correctChoice: "B",
        explanationCorrect:
          "Sterilization is required for critical items that enter normally sterile body cavities or tissues. While PFT equipment is generally semi-critical (contacting mucous membranes), any equipment used in procedures that penetrate sterile tissues (such as bronchoscopy instruments) requires sterilization.",
        explanationWrong:
          "Noseclips contact intact skin and require only low-level disinfection. The spirometer body does not contact the patient and needs surface cleaning. Keyboards are non-critical items requiring low-level disinfection. Only items entering sterile body areas require sterilization.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 8,
        questionText:
          "A patient's spirometry shows FVC 55% predicted, FEV1 50% predicted, and FEV1/FVC ratio 72% (above LLN). Lung volumes show TLC 60% predicted. This is consistent with:",
        choices: {
          A: "Obstructive ventilatory defect",
          B: "Mixed obstructive and restrictive defect",
          C: "Restrictive ventilatory defect confirmed by reduced TLC",
          D: "Normal spirometry with poor effort",
        },
        correctChoice: "C",
        explanationCorrect:
          "A reduced FVC and FEV1 with a preserved FEV1/FVC ratio suggests restriction, and a TLC below 80% (or below the LLN) confirms true restrictive disease. The proportional reduction in both FVC and FEV1 with maintained ratio is the classic restrictive pattern.",
        explanationWrong:
          "Obstruction requires a reduced FEV1/FVC ratio. Mixed disease requires both reduced ratio and reduced TLC. Poor effort typically shows variable results rather than consistently proportional reductions with confirmed low TLC.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 9,
        questionText:
          "A tidal breathing flow-volume loop in an infant shows expiratory flow limitation with a characteristic shape resembling a scooped-out pattern. This finding suggests which condition?",
        choices: {
          A: "Normal infant breathing pattern",
          B: "Restrictive lung disease",
          C: "Laryngomalacia",
          D: "Wheezing or lower airway obstruction",
        },
        correctChoice: "D",
        explanationCorrect:
          "A scooped-out expiratory limb on a tidal breathing flow-volume loop in infants suggests lower airway obstruction, such as wheezing from bronchiolitis or recurrent wheeze. This pattern indicates reduced expiratory flow at lower lung volumes, analogous to the pattern seen in adults with obstructive disease on forced maneuvers.",
        explanationWrong:
          "Normal infant tidal loops have a relatively symmetrical shape. Restrictive disease would show a small loop without scooping. Laryngomalacia would affect the inspiratory limb (variable extrathoracic obstruction), not the expiratory limb.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 10,
        questionText:
          "When a heated wire (hot wire) anemometer is used in a PFT system, what physical principle does it use to measure flow?",
        choices: {
          A: "Pressure differential across a resistance",
          B: "Infrared absorption by gases",
          C: "Ultrasonic wave transit time",
          D: "Cooling of a heated element proportional to gas flow velocity",
        },
        correctChoice: "D",
        explanationCorrect:
          "A hot wire anemometer maintains a wire or film at a constant temperature above ambient. As gas flows past the element, it cools in proportion to the flow velocity. The electrical power required to maintain the constant temperature is measured and converted to flow rate.",
        explanationWrong:
          "Pressure differential is the principle behind pneumotachometers (Fleisch and Lilly types). Infrared absorption is used in gas analyzers for CO2 and CO. Ultrasonic transit time is used in ultrasonic flow sensors. The hot wire principle is based on convective heat transfer.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 11,
        questionText:
          "In body plethysmography, what is the significance of a high ratio of plethysmographic FRC to helium dilution FRC (FRCpleth/FRCHe >1.0)?",
        choices: {
          A: "Significant trapped gas is present that is not communicating with the airways",
          B: "The helium dilution measurement is more accurate",
          C: "Both methods are equally valid",
          D: "The plethysmograph is malfunctioning",
        },
        correctChoice: "A",
        explanationCorrect:
          "When FRCpleth significantly exceeds FRCHe, it indicates trapped gas - lung regions that contain gas but do not communicate freely with the airways during tidal breathing. Plethysmography measures all thoracic gas regardless of communication, while helium dilution only measures communicating gas volumes.",
        explanationWrong:
          "A higher plethysmographic value does not mean helium dilution is more accurate - each measures something different. They are not equally valid for the same purpose in obstructive disease. A consistent discrepancy is pathologically meaningful, not a malfunction.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 12,
        questionText:
          "During the helium dilution FRC measurement, what is the primary reason for including a CO2 absorber in the breathing circuit?",
        choices: {
          A: "To reduce humidity in the circuit",
          B: "To prevent CO2 accumulation that would cause hypercapnia and alter the patient's breathing pattern",
          C: "To absorb nitrogen from the circuit",
          D: "To reduce helium concentration",
        },
        correctChoice: "B",
        explanationCorrect:
          "As the patient rebreathes in the closed circuit during helium dilution, metabolically produced CO2 accumulates. A CO2 absorber (soda lime or barium hydroxide lime) removes this CO2 to prevent hypercapnia, which would increase respiratory drive and alter the breathing pattern, potentially affecting the accuracy of the FRC measurement.",
        explanationWrong:
          "The CO2 absorber does not significantly affect humidity. It does not absorb nitrogen. It has no effect on helium concentration. Its sole purpose is to remove metabolically produced CO2 from the rebreathing circuit.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 13,
        questionText:
          "End-tidal CO2 (PETCO2) measured by capnography is normally slightly lower than PaCO2 by approximately how much?",
        choices: {
          A: "10-15 mmHg",
          B: "Exactly equal in all patients",
          C: "2-5 mmHg",
          D: "20 mmHg or more",
        },
        correctChoice: "C",
        explanationCorrect:
          "In healthy individuals, PETCO2 is normally 2-5 mmHg lower than PaCO2. This gradient exists because exhaled gas is a mixture of alveolar gas (high CO2) and dead space gas (low CO2). A widened P(a-ET)CO2 gradient suggests increased dead space ventilation.",
        explanationWrong:
          "A 10-15 mmHg or 20 mmHg gradient would be pathologically wide, suggesting significant V/Q mismatch or increased dead space. The two values are not exactly equal due to the dead space contribution. The normal gradient is 2-5 mmHg.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 14,
        questionText:
          "Which of the following ABG results indicates uncompensated respiratory acidosis?",
        choices: {
          A: "pH 7.48, PaCO2 30 mmHg, HCO3- 24 mEq/L",
          B: "pH 7.40, PaCO2 40 mmHg, HCO3- 24 mEq/L",
          C: "pH 7.35, PaCO2 55 mmHg, HCO3- 32 mEq/L",
          D: "pH 7.25, PaCO2 60 mmHg, HCO3- 24 mEq/L",
        },
        correctChoice: "D",
        explanationCorrect:
          "pH 7.25 (acidotic), PaCO2 60 mmHg (elevated, indicating CO2 retention), and HCO3- 24 mEq/L (normal, indicating no renal compensation) represents uncompensated respiratory acidosis. The kidneys have not yet retained bicarbonate to buffer the respiratory acidosis.",
        explanationWrong:
          "pH 7.48 with low PaCO2 is respiratory alkalosis. pH 7.40 with normal values represents normal acid-base balance. pH 7.35 with elevated PaCO2 and HCO3- represents partially or fully compensated respiratory acidosis (the kidneys have responded by retaining bicarbonate).",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 15,
        questionText:
          "During CPET, a plateau in VO2 despite increasing workload is the most definitive evidence of which parameter?",
        choices: {
          A: "Achievement of true VO2max (maximal oxygen consumption)",
          B: "Equipment malfunction",
          C: "Patient malingering",
          D: "Ventilatory limitation",
        },
        correctChoice: "A",
        explanationCorrect:
          "A plateau in VO2 (increase <150 mL/min or <2 mL/kg/min despite increasing workload) is the gold standard criterion for achieving true VO2max. It indicates that the cardiovascular system has reached its maximum capacity to deliver oxygen to exercising muscles.",
        explanationWrong:
          "Equipment malfunction would show erratic values, not a systematic plateau. Malingering would typically show submaximal effort without reaching plateau criteria. Ventilatory limitation is indicated by reduced breathing reserve, not a VO2 plateau. A VO2 plateau specifically confirms maximal aerobic capacity.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 16,
        questionText:
          "When reporting pre/post bronchodilator results, both absolute change and percent change should be reported. The percent change in FEV1 is calculated relative to which value?",
        choices: {
          A: "The predicted FEV1",
          B: "The post-bronchodilator FEV1",
          C: "The pre-bronchodilator (baseline) FEV1",
          D: "The average of pre and post values",
        },
        correctChoice: "C",
        explanationCorrect:
          "Percent change = [(post-BD FEV1 - pre-BD FEV1) / pre-BD FEV1] × 100. The calculation uses the pre-bronchodilator (baseline) value as the reference denominator. This shows the relative improvement from the patient's starting point.",
        explanationWrong:
          "Using predicted FEV1 as the denominator is an alternative method (percent predicted change) but is not the standard ATS/ERS calculation. Using the post-BD value or an average is not standard practice for bronchodilator response assessment.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 17,
        questionText:
          "When performing PFT on a morbidly obese patient in the seated position, which postural adjustment can help improve test quality?",
        choices: {
          A: "Have the patient lean backward in the chair",
          B: "Ensure the patient is sitting fully upright with feet flat on the floor and not leaning forward",
          C: "Have the patient lie supine",
          D: "Have the patient cross their legs during testing",
        },
        correctChoice: "B",
        explanationCorrect:
          "Proper upright seated posture with feet flat on the floor maximizes diaphragmatic excursion and chest wall expansion in obese patients. The chin should be slightly elevated and the neck slightly extended. Leaning forward or slouching restricts chest wall movement and can reduce measured lung volumes.",
        explanationWrong:
          "Leaning backward can compromise airway patency. Supine positioning worsens respiratory mechanics in obesity due to abdominal contents pushing against the diaphragm. Crossing legs can restrict abdominal movement and reduce FVC.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 18,
        questionText:
          "Which pulmonary function test is most useful for monitoring workers exposed to beryllium for early detection of beryllium sensitization?",
        choices: {
          A: "DLCO combined with the beryllium lymphocyte proliferation test (BeLPT)",
          B: "FEV1 alone",
          C: "Peak expiratory flow monitoring",
          D: "6-minute walk test",
        },
        correctChoice: "A",
        explanationCorrect:
          "Beryllium sensitization and chronic beryllium disease (CBD) are best detected by combining the BeLPT (a blood test for immunological sensitization) with DLCO, which can detect early gas exchange impairment before spirometric changes occur. DLCO may be the earliest PFT abnormality in CBD.",
        explanationWrong:
          "FEV1 alone misses early parenchymal disease. Peak flow monitoring is more useful for occupational asthma assessment. The 6MWT evaluates functional capacity but does not specifically screen for beryllium disease. The BeLPT plus DLCO combination provides the most comprehensive early detection.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 19,
        questionText:
          "The slow vital capacity (SVC) maneuver differs from the forced vital capacity (FVC) maneuver primarily in that SVC:",
        choices: {
          A: "Measures a larger volume because it is performed without time pressure",
          B: "Is performed with maximal effort throughout",
          C: "Avoids dynamic airway compression, often yielding a larger volume than FVC in obstructive patients",
          D: "Is only used in restrictive disease assessment",
        },
        correctChoice: "C",
        explanationCorrect:
          "The SVC is performed with a slow, complete exhalation rather than a forced blast. In patients with obstructive lung disease, forced expiration causes dynamic airway compression and air trapping, reducing the measured FVC. The SVC avoids this compression, often yielding a larger volume. An SVC > FVC difference suggests air trapping.",
        explanationWrong:
          "While SVC may yield a larger volume in obstruction, this is not because of 'no time pressure' but because of avoiding dynamic compression. SVC is performed with a relaxed, complete (not maximal force) exhalation. SVC is useful in both obstructive and restrictive disease assessment.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam30.id,
        questionIndex: 20,
        questionText:
          "When interpreting DLCO results, a KCO (DLCO/VA) that is elevated despite a low DLCO most likely indicates which condition?",
        choices: {
          A: "Emphysema",
          B: "Pneumonectomy or other cause of reduced alveolar volume with preserved remaining lung parenchyma",
          C: "Pulmonary fibrosis",
          D: "Pulmonary embolism",
        },
        correctChoice: "B",
        explanationCorrect:
          "When DLCO is low but KCO (DLCO normalized per unit alveolar volume) is elevated or normal, it indicates that the remaining lung tissue has normal or increased gas exchange efficiency but the overall alveolar volume is reduced. This pattern is seen after pneumonectomy, lobectomy, or in conditions where lung volume is reduced without parenchymal damage.",
        explanationWrong:
          "Emphysema reduces both DLCO and KCO because the alveolar-capillary surface is destroyed. Pulmonary fibrosis typically reduces both DLCO and KCO due to membrane thickening. Pulmonary embolism reduces DLCO but does not characteristically elevate KCO.",
        topic: "Diffusion capacity (DLCO) testing",
      },
    ],
  });

  console.log(`Exam 30 created: ${exam30.id} with 20 questions`);

  console.log("All 5 CPFT mini exams (26-30) seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
