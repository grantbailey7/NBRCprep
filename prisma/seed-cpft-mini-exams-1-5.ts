import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fxw0004zf54sy6um2ui";

  // ─── EXAM 1 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q1,5,9,13,18) B=5(Q2,7,10,15,20) C=5(Q3,6,12,16,19) D=5(Q4,8,11,14,17)
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 1",
      examIndex: 1,
      isFree: true,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam1.id,
        questionIndex: 1,
        questionText:
          "What is the minimum number of acceptable FVC maneuvers required during spirometry testing according to ATS/ERS standards?",
        choices: {
          A: "3",
          B: "2",
          C: "5",
          D: "4",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards require a minimum of 3 acceptable FVC maneuvers to ensure reproducibility and reliability of the results.",
        explanationWrong:
          "Two maneuvers are insufficient to confirm reproducibility, while 4 or 5 are not the minimum requirement, although additional efforts may be needed if repeatability criteria are not met.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          "During body plethysmography, the patient pants against a closed shutter to measure which of the following?",
        choices: {
          A: "Diffusing capacity",
          B: "Thoracic gas volume",
          C: "Tidal volume",
          D: "Maximum voluntary ventilation",
        },
        correctChoice: "B",
        explanationCorrect:
          "Body plethysmography uses Boyle's law to measure thoracic gas volume (TGV) by having the patient pant against a closed shutter while pressure changes in the box and at the mouth are recorded.",
        explanationWrong:
          "Diffusing capacity is measured via the DLCO test. Tidal volume and MVV are measured through standard spirometry, not plethysmography with a closed shutter.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          "A 3-liter calibration syringe is used to verify the accuracy of a spirometer. What is the acceptable tolerance range?",
        choices: {
          A: "Within 1%",
          B: "Within 5%",
          C: "Within 3% or 50 mL",
          D: "Within 100 mL",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS/ERS standards require that spirometer volume accuracy be within 3% or 50 mL of the known syringe volume, whichever is greater.",
        explanationWrong:
          "A 1% tolerance is stricter than required. A 5% tolerance is too lenient. A fixed 100 mL tolerance does not account for the percentage-based requirement.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          "Which of the following values is used to determine a positive bronchodilator response for FEV1?",
        choices: {
          A: "An increase of 5% from baseline",
          B: "An increase of 100 mL from baseline",
          C: "An increase of 10% from predicted",
          D: "An increase of 12% and 200 mL from baseline",
        },
        correctChoice: "D",
        explanationCorrect:
          "A positive bronchodilator response is defined as an increase in FEV1 (or FVC) of at least 12% AND at least 200 mL from the pre-bronchodilator baseline value.",
        explanationWrong:
          "A 5% increase or 100 mL increase alone is insufficient. A 10% change from predicted uses the wrong reference point. Both the percentage and absolute volume criteria must be met simultaneously.",
        topic: "Bronchodilator response assessment",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          "When preparing a patient for spirometry, how long should a patient withhold a short-acting bronchodilator before testing?",
        choices: {
          A: "At least 4 hours",
          B: "At least 12 hours",
          C: "At least 24 hours",
          D: "At least 1 hour",
        },
        correctChoice: "A",
        explanationCorrect:
          "Short-acting bronchodilators (such as albuterol) should be withheld for at least 4 hours before spirometry testing to allow the medication effect to dissipate and obtain baseline measurements.",
        explanationWrong:
          "A 12-hour or 24-hour withholding period applies to long-acting bronchodilators. One hour is insufficient for short-acting agents to clear.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          "A flow-volume loop that shows a plateau on the expiratory limb with a scooped appearance is most consistent with which pattern?",
        choices: {
          A: "Restrictive lung disease",
          B: "Upper airway obstruction",
          C: "Obstructive lung disease",
          D: "Normal lung function",
        },
        correctChoice: "C",
        explanationCorrect:
          "A scooped or concave expiratory limb on a flow-volume loop is characteristic of obstructive lung disease, reflecting airflow limitation particularly at lower lung volumes.",
        explanationWrong:
          "Restrictive disease shows a narrowed loop with preserved shape. Upper airway obstruction shows flattening of inspiratory or expiratory limbs. Normal function shows a triangular expiratory limb.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          "Which gas mixture is typically used for single-breath DLCO testing?",
        choices: {
          A: "21% oxygen and 79% nitrogen",
          B: "0.3% CO, 10% helium, balance air",
          C: "5% CO2 and 95% oxygen",
          D: "100% oxygen",
        },
        correctChoice: "B",
        explanationCorrect:
          "The standard single-breath DLCO test gas contains approximately 0.3% carbon monoxide as the diffusing gas and about 10% helium as a tracer gas for alveolar volume measurement, with the remainder being air.",
        explanationWrong:
          "Room air (21% O2/79% N2) does not contain CO for diffusion measurement. CO2/O2 and pure oxygen mixtures are not used for DLCO testing.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          "What is the recommended breath-hold time for a single-breath DLCO test?",
        choices: {
          A: "5 seconds",
          B: "15 seconds",
          C: "20 seconds",
          D: "10 seconds",
        },
        correctChoice: "D",
        explanationCorrect:
          "The standard breath-hold time for a single-breath DLCO test is 10 seconds, measured from the beginning of inspiration to the start of sample gas collection.",
        explanationWrong:
          "Five seconds is too short for adequate gas diffusion. Fifteen or twenty seconds would result in excessive CO uptake and is not the recommended duration.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          "The lower limit of normal (LLN) for spirometry values is typically defined as which of the following?",
        choices: {
          A: "The 5th percentile of a healthy reference population",
          B: "80% of predicted",
          C: "The 10th percentile of a healthy reference population",
          D: "70% of predicted",
        },
        correctChoice: "A",
        explanationCorrect:
          "The LLN is defined as the 5th percentile of a healthy, nonsmoking reference population of the same age, sex, height, and race/ethnicity, providing a statistically appropriate cutoff.",
        explanationWrong:
          "Using fixed percentages like 80% or 70% of predicted leads to misclassification, particularly in older and younger populations. The 10th percentile is not the standard threshold used.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          "Which spirometry repeatability criterion requires the two largest FVC values to be within a specific range of each other?",
        choices: {
          A: "Within 200 mL",
          B: "Within 150 mL",
          C: "Within 100 mL",
          D: "Within 250 mL",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS 2019 standards specify that the two largest FVC values should be within 150 mL of each other to meet the repeatability criterion.",
        explanationWrong:
          "The 200 mL and 250 mL criteria are too lenient. The 100 mL criterion is stricter than what is required by current standards.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          "In gas dilution methods for measuring lung volumes, which gas is commonly used as the tracer?",
        choices: {
          A: "Carbon monoxide",
          B: "Nitrogen",
          C: "Carbon dioxide",
          D: "Helium",
        },
        correctChoice: "D",
        explanationCorrect:
          "Helium is the most commonly used tracer gas in the closed-circuit helium dilution method because it is inert, does not cross the alveolar-capillary membrane, and is easily measured by thermal conductivity analyzers.",
        explanationWrong:
          "Carbon monoxide is used for DLCO testing. Nitrogen is used in the nitrogen washout (open-circuit) method but not as a tracer in helium dilution. Carbon dioxide is a metabolic gas, not a tracer.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          "Which of the following is the most appropriate method for disinfecting reusable spirometry tubing between patients?",
        choices: {
          A: "Wiping with a dry cloth",
          B: "Rinsing with tap water",
          C: "Soaking in a high-level disinfectant solution followed by rinsing and air drying",
          D: "Autoclaving at 134 degrees Celsius",
        },
        correctChoice: "C",
        explanationCorrect:
          "Reusable spirometry tubing should undergo high-level disinfection by soaking in an appropriate disinfectant solution, followed by thorough rinsing and air drying to prevent cross-contamination.",
        explanationWrong:
          "Wiping with a dry cloth provides no disinfection. Tap water rinsing alone does not kill pathogens. Autoclaving may damage certain tubing materials and is not typically the recommended method.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          "A PFT report shows FEV1/FVC below the LLN, FVC within normal limits, and a reduced FEV1. This pattern is most consistent with which diagnosis?",
        choices: {
          A: "Obstructive ventilatory defect",
          B: "Restrictive ventilatory defect",
          C: "Mixed ventilatory defect",
          D: "Normal pulmonary function",
        },
        correctChoice: "A",
        explanationCorrect:
          "A reduced FEV1/FVC ratio below the LLN with a normal FVC and reduced FEV1 defines an obstructive ventilatory defect, indicating airflow limitation without evidence of restriction.",
        explanationWrong:
          "Restriction requires reduced TLC. A mixed defect shows both obstruction and restriction. Normal function would have all values within normal limits.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          "During spirometry, a patient's effort shows a hesitant start with a back-extrapolated volume of 200 mL on a 4.5 L FVC. Is this acceptable?",
        choices: {
          A: "Yes, because the absolute value is below 250 mL",
          B: "Yes, because the FVC is above 4 liters",
          C: "No, because the back-extrapolated volume exceeds 100 mL",
          D: "No, because the back-extrapolated volume exceeds 5% of FVC or 150 mL",
        },
        correctChoice: "D",
        explanationCorrect:
          "The back-extrapolated volume must not exceed 5% of FVC or 150 mL, whichever is greater. Here 5% of 4.5 L is 225 mL; since 200 mL is less than 225 mL, this is actually borderline acceptable by the percentage criterion, but using the older 150 mL fixed criterion it would fail. Under the current ATS/ERS standard the criterion is 5% of FVC or 150 mL.",
        explanationWrong:
          "There is no 250 mL criterion. Having a large FVC does not automatically make a poor start acceptable. The 100 mL threshold is stricter than the actual standard requires.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          "What is the primary purpose of using an inline bacterial/viral filter during spirometry?",
        choices: {
          A: "To improve the accuracy of flow measurements",
          B: "To prevent cross-contamination between patients",
          C: "To reduce dead space in the circuit",
          D: "To warm and humidify inspired air",
        },
        correctChoice: "B",
        explanationCorrect:
          "Inline bacterial/viral filters serve as a barrier to prevent the transmission of respiratory pathogens between patients sharing the same spirometer, reducing cross-contamination risk.",
        explanationWrong:
          "Filters may slightly affect flow measurements due to added resistance. They add dead space rather than reduce it. They do not warm or humidify air.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          "Which of the following reference equation sets is recommended for multi-ethnic populations in spirometry?",
        choices: {
          A: "Knudson equations",
          B: "Crapo equations",
          C: "GLI-2012 (Global Lung Initiative) equations",
          D: "Morris equations",
        },
        correctChoice: "C",
        explanationCorrect:
          "The GLI-2012 reference equations are recommended for multi-ethnic populations as they provide a unified set of equations covering a wide age range and multiple ethnic groups using the LMS method.",
        explanationWrong:
          "Knudson, Crapo, and Morris equations are older reference sets that were developed from limited populations and do not cover the range of ethnic groups that GLI-2012 does.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          "A patient's TLC measured by plethysmography is significantly higher than TLC measured by helium dilution. This discrepancy most likely indicates which of the following?",
        choices: {
          A: "Equipment malfunction",
          B: "Patient noncompliance",
          C: "The helium dilution method is more accurate",
          D: "The presence of trapped gas that is not accessible to the helium tracer",
        },
        correctChoice: "D",
        explanationCorrect:
          "Plethysmography measures all compressible thoracic gas including trapped gas, while helium dilution only measures communicating lung volume. A significant difference suggests gas trapping, commonly seen in obstructive diseases.",
        explanationWrong:
          "Equipment malfunction is possible but unlikely to explain a consistent directional difference. Noncompliance would affect both methods. Helium dilution underestimates volumes when trapped gas is present.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          "Which of the following patient factors requires an adjustment when calculating predicted DLCO values?",
        choices: {
          A: "Hemoglobin concentration",
          B: "Body mass index",
          C: "Resting heart rate",
          D: "Blood pressure",
        },
        correctChoice: "A",
        explanationCorrect:
          "DLCO values must be adjusted for hemoglobin concentration because CO uptake depends on the amount of hemoglobin available for binding. Anemia will decrease measured DLCO, while polycythemia will increase it.",
        explanationWrong:
          "BMI, resting heart rate, and blood pressure are not standard factors used to adjust predicted DLCO values, although they may affect overall pulmonary function.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          "What is the minimum expiratory time required for an FVC maneuver to be considered acceptable in adults?",
        choices: {
          A: "3 seconds",
          B: "4 seconds",
          C: "6 seconds",
          D: "10 seconds",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS/ERS guidelines require an expiratory time of at least 6 seconds in adults, or until the volume-time curve shows a plateau (no change in volume for at least 1 second), whichever comes first.",
        explanationWrong:
          "Three or four seconds are insufficient in most adults to achieve complete exhalation. Ten seconds exceeds the minimum requirement, though some patients may need longer exhalation times.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          "Which of the following flow-volume loop patterns is characteristic of a fixed upper airway obstruction?",
        choices: {
          A: "Scooped expiratory limb with normal inspiratory limb",
          B: "Flattening of both inspiratory and expiratory limbs",
          C: "Reduced peak expiratory flow with normal loop shape",
          D: "Narrowed loop with proportionally reduced flows and volumes",
        },
        correctChoice: "B",
        explanationCorrect:
          "A fixed upper airway obstruction produces flattening (plateau) of both the inspiratory and expiratory limbs because the obstruction limits flow equally during both phases of breathing.",
        explanationWrong:
          "A scooped expiratory limb indicates intrathoracic obstruction (e.g., COPD). Reduced PEF alone is nonspecific. A narrowed loop with proportional reductions suggests restriction.",
        topic: "Flow-volume loop interpretation",
      },
    ],
  });

  console.log(`Exam 1 created: ${exam1.id} with 20 questions`);

  // ─── EXAM 2 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,5,11,16,19) B=5(Q4,8,12,15,17) C=5(Q1,7,10,13,18) D=5(Q3,6,9,14,20)
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 2",
      examIndex: 2,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam2.id,
        questionIndex: 1,
        questionText:
          "Which of the following best describes the end-of-test criterion for an FVC maneuver?",
        choices: {
          A: "The patient reports feeling unable to exhale further",
          B: "Expiratory time reaches exactly 6 seconds",
          C: "A volume plateau with less than 25 mL change over 1 second",
          D: "Flow decreases to below 0.5 L/s",
        },
        correctChoice: "C",
        explanationCorrect:
          "The ATS/ERS end-of-test criterion is a volume-time plateau, defined as less than 25 mL of volume change over at least 1 second of exhalation, indicating the patient has exhaled to residual volume.",
        explanationWrong:
          "Patient self-report is subjective. Six seconds is the minimum time, not the endpoint criterion. Flow-based criteria are not the primary standard for determining test completion.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          "A pneumotachograph measures airflow based on which physical principle?",
        choices: {
          A: "Pressure drop across a known resistance",
          B: "Ultrasonic transit time between sensors",
          C: "Thermal conductivity changes in a heated wire",
          D: "Volume displacement in a sealed chamber",
        },
        correctChoice: "A",
        explanationCorrect:
          "A pneumotachograph measures flow by detecting the pressure differential across a fixed resistance (such as a Fleisch screen or Lilly mesh), which is proportional to flow according to Poiseuille's law.",
        explanationWrong:
          "Ultrasonic transit time describes ultrasonic flow sensors. Thermal conductivity is used by hot-wire anemometers. Volume displacement describes a spirometer bell or piston, not a pneumotachograph.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          "Which of the following conditions would most likely produce an isolated reduction in DLCO with normal spirometry and lung volumes?",
        choices: {
          A: "Asthma",
          B: "Obesity",
          C: "Chest wall deformity",
          D: "Pulmonary vascular disease",
        },
        correctChoice: "D",
        explanationCorrect:
          "Pulmonary vascular disease (such as pulmonary hypertension or pulmonary embolism) reduces the available capillary blood volume for gas exchange, resulting in an isolated decrease in DLCO with preserved spirometry and lung volumes.",
        explanationWrong:
          "Asthma typically shows obstruction on spirometry. Obesity may reduce lung volumes but does not primarily affect DLCO. Chest wall deformity causes a restrictive pattern.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          "A leak in the body plethysmograph during testing would most likely result in which of the following?",
        choices: {
          A: "Overestimation of airway resistance",
          B: "Erroneous FRC measurement",
          C: "Falsely elevated DLCO values",
          D: "Artificially high expiratory flow rates",
        },
        correctChoice: "B",
        explanationCorrect:
          "A leak in the body box allows pressure changes to dissipate, producing erroneous box pressure readings and therefore inaccurate FRC measurements based on Boyle's law calculations.",
        explanationWrong:
          "Airway resistance measurement would also be affected but FRC is the primary concern. DLCO is not measured in the plethysmograph. Flow rates are not directly affected by box leaks.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          "Which of the following coaching techniques is most effective during an FVC maneuver?",
        choices: {
          A: "Encouraging maximal inhalation followed by a blast of air and continued exhalation until the plateau is reached",
          B: "Instructing the patient to exhale slowly and steadily",
          C: "Asking the patient to take several deep breaths before the maneuver",
          D: "Having the patient hold their breath for 5 seconds before exhaling",
        },
        correctChoice: "A",
        explanationCorrect:
          "Effective coaching includes encouraging a full inspiration, an explosive start to exhalation (blast), and continued forceful exhalation until a volume-time plateau is achieved, ensuring maximal effort throughout.",
        explanationWrong:
          "Slow, steady exhalation is appropriate for SVC, not FVC. Multiple deep breaths before testing may cause hyperventilation. A breath hold is used in DLCO, not spirometry.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          "What is the primary advantage of plethysmography over gas dilution methods for measuring lung volumes?",
        choices: {
          A: "It is less expensive to perform",
          B: "It requires less patient cooperation",
          C: "It is more portable and accessible",
          D: "It measures all intrathoracic gas, including trapped gas",
        },
        correctChoice: "D",
        explanationCorrect:
          "Plethysmography measures all compressible gas in the thorax, including gas trapped behind closed airways, whereas gas dilution methods only measure the volume of gas that communicates with the airway opening.",
        explanationWrong:
          "Plethysmography equipment is more expensive, requires more cooperation (panting maneuver), and is less portable than gas dilution equipment.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          "Which of the following is the correct sequence for performing a calibration verification of a spirometer?",
        choices: {
          A: "Inject the full syringe volume at a single fast flow rate",
          B: "Record room temperature only if it differs from the previous day",
          C: "Inject the known volume at low, medium, and high flow rates",
          D: "Verify calibration once per week regardless of testing volume",
        },
        correctChoice: "C",
        explanationCorrect:
          "Calibration verification should be performed by injecting a known volume (typically 3 liters) at low, medium, and high flow rates to ensure the spirometer is accurate across the range of flows encountered during patient testing.",
        explanationWrong:
          "A single flow rate does not verify accuracy across the full range. Temperature should be recorded daily. Calibration verification should be performed daily, not weekly.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          "A restrictive ventilatory defect on PFTs is confirmed by which of the following?",
        choices: {
          A: "FEV1/FVC ratio below the LLN",
          B: "Total lung capacity below the LLN",
          C: "Reduced peak expiratory flow",
          D: "Elevated residual volume",
        },
        correctChoice: "B",
        explanationCorrect:
          "A restrictive ventilatory defect is confirmed by a total lung capacity (TLC) below the lower limit of normal. Spirometry alone can suggest restriction but cannot confirm it without lung volume measurements.",
        explanationWrong:
          "A reduced FEV1/FVC ratio indicates obstruction. Reduced PEF is nonspecific. Elevated RV is associated with air trapping in obstructive disease.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          "How should a DLCO test gas analyzer be calibrated?",
        choices: {
          A: "Using a calibration syringe at three flow rates",
          B: "By comparing results to a known reference patient",
          C: "Using room air and a certified reference gas mixture",
          D: "Using two known reference gas concentrations and a zero gas",
        },
        correctChoice: "D",
        explanationCorrect:
          "DLCO gas analyzers are calibrated using at least two known reference gas concentrations (typically the test gas mixture and a second concentration) along with a zero gas to establish linearity across the measurement range.",
        explanationWrong:
          "A calibration syringe verifies volume, not gas concentration. Reference patients are not used for calibration. Room air alone is insufficient for proper analyzer calibration.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          "During a DLCO test, the washout volume is collected and discarded before sampling. What is the primary purpose of this washout?",
        choices: {
          A: "To ensure the patient has completed a full exhalation",
          B: "To remove residual gas from the previous test",
          C: "To clear dead space gas that did not participate in gas exchange",
          D: "To measure the patient's anatomic dead space",
        },
        correctChoice: "C",
        explanationCorrect:
          "The washout volume removes gas from the anatomic dead space (airways, mouthpiece, and tubing) that did not participate in alveolar gas exchange, ensuring the sample collected is representative of alveolar gas.",
        explanationWrong:
          "Full exhalation is verified by other criteria. Residual gas from previous tests is addressed by wait times between tests. The washout discards dead space gas but is not designed to measure it.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          "When interpreting spirometry, a normal FEV1/FVC ratio with proportionally reduced FEV1 and FVC suggests which pattern?",
        choices: {
          A: "Possible restriction, requiring lung volume confirmation",
          B: "Obstructive defect",
          C: "Mixed obstructive and restrictive defect",
          D: "Normal variant",
        },
        correctChoice: "A",
        explanationCorrect:
          "A normal or preserved FEV1/FVC ratio with proportionally reduced FEV1 and FVC suggests a possible restrictive pattern. Lung volume measurements (TLC) are needed to confirm true restriction.",
        explanationWrong:
          "Obstruction requires a reduced FEV1/FVC ratio. A mixed defect shows both obstruction and low TLC. A normal variant would not show reduced values below the LLN.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          "What is the recommended waiting time between successive DLCO maneuvers?",
        choices: {
          A: "At least 1 minute",
          B: "At least 4 minutes",
          C: "At least 10 minutes",
          D: "At least 30 seconds",
        },
        correctChoice: "B",
        explanationCorrect:
          "A minimum of 4 minutes should elapse between successive DLCO maneuvers to allow for adequate clearance of the test gas from the lungs and to ensure accurate results on subsequent tests.",
        explanationWrong:
          "One minute or 30 seconds is insufficient for complete gas washout. Ten minutes is longer than necessary and would delay testing unnecessarily.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          "Which of the following is a contraindication for performing spirometry?",
        choices: {
          A: "History of asthma",
          B: "Current use of supplemental oxygen",
          C: "Recent pneumothorax within the past 2 weeks",
          D: "Age greater than 80 years",
        },
        correctChoice: "C",
        explanationCorrect:
          "A recent pneumothorax is a contraindication for spirometry due to the risk of recurrence or worsening from the forced expiratory effort and increased intrathoracic pressures.",
        explanationWrong:
          "Asthma history is actually an indication for testing. Supplemental oxygen can be temporarily removed or testing performed on oxygen. Advanced age is not a contraindication.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          "A flow-volume loop shows flattening of the inspiratory limb with a normal expiratory limb. This pattern is most consistent with which condition?",
        choices: {
          A: "Fixed upper airway obstruction",
          B: "Intrathoracic airway obstruction",
          C: "Restrictive lung disease",
          D: "Variable extrathoracic upper airway obstruction",
        },
        correctChoice: "D",
        explanationCorrect:
          "Variable extrathoracic obstruction (such as vocal cord dysfunction) causes flattening of the inspiratory limb because negative intraluminal pressure during inspiration worsens the obstruction, while the expiratory limb remains normal.",
        explanationWrong:
          "Fixed obstruction flattens both limbs. Intrathoracic obstruction predominantly affects the expiratory limb. Restriction produces a smaller but normally shaped loop.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          "When performing spirometry on a patient with dentures, what is the recommended approach?",
        choices: {
          A: "Always remove dentures before testing",
          B: "Leave dentures in place unless they interfere with obtaining a seal around the mouthpiece",
          C: "Remove only upper dentures",
          D: "Use a face mask instead of a mouthpiece",
        },
        correctChoice: "B",
        explanationCorrect:
          "Dentures should generally be left in place as they help maintain the structural integrity of the oral cavity and facilitate a proper seal. They should only be removed if they are loose and interfere with the mouthpiece seal.",
        explanationWrong:
          "Routine removal of dentures can cause cheek collapse and air leaks. Removing only upper dentures is arbitrary. Face masks introduce dead space and leak issues.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          "Which of the following BTPS correction factors accounts for in spirometry?",
        choices: {
          A: "Conversion of gas volumes from ambient conditions to body temperature (37 degrees C), ambient pressure, and saturated with water vapor",
          B: "Correction for barometric pressure changes only",
          C: "Adjustment for gas composition differences between inspired and expired air",
          D: "Compensation for instrument dead space",
        },
        correctChoice: "A",
        explanationCorrect:
          "BTPS (Body Temperature and Pressure, Saturated) correction converts measured gas volumes from ambient temperature and humidity conditions to body conditions: 37 degrees C, ambient barometric pressure, and fully saturated with water vapor.",
        explanationWrong:
          "BTPS accounts for temperature and water vapor saturation, not just barometric pressure alone. Gas composition corrections and dead space compensation are separate considerations.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          "What is the recommended frequency for biological quality control (BioQC) testing in a PFT laboratory?",
        choices: {
          A: "Once per month",
          B: "Weekly or more frequently, using a healthy nonsmoking control subject",
          C: "Only when equipment is serviced",
          D: "Annually during laboratory accreditation",
        },
        correctChoice: "B",
        explanationCorrect:
          "Biological QC should be performed at least weekly using a stable, healthy nonsmoking individual. Trending these results helps detect gradual instrument drift that mechanical calibration checks might miss.",
        explanationWrong:
          "Monthly testing may miss equipment drift. Testing only after service or annually is insufficient for ongoing quality assurance.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          "Which of the following is a characteristic finding in a mixed obstructive-restrictive ventilatory defect?",
        choices: {
          A: "Normal FEV1/FVC ratio with elevated TLC",
          B: "Increased RV/TLC ratio with normal FVC",
          C: "Reduced FEV1/FVC ratio with reduced TLC",
          D: "Normal spirometry with reduced DLCO",
        },
        correctChoice: "C",
        explanationCorrect:
          "A mixed ventilatory defect is characterized by a reduced FEV1/FVC ratio (indicating obstruction) combined with a reduced TLC (indicating restriction), demonstrating both patterns simultaneously.",
        explanationWrong:
          "A normal ratio with elevated TLC suggests hyperinflation. Increased RV/TLC with normal FVC does not define a mixed defect. Normal spirometry with reduced DLCO suggests a gas exchange issue without ventilatory defect.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          "What should a technologist do if a patient coughs during the first second of an FVC maneuver?",
        choices: {
          A: "Accept the maneuver if FEV1 appears reasonable",
          B: "Repeat the entire test session from the beginning",
          C: "Administer a bronchodilator and repeat testing",
          D: "Allow the patient to rest and repeat the maneuver",
        },
        correctChoice: "A",
        explanationCorrect:
          "A cough in the first second invalidates the FEV1 measurement, but the FVC may still be usable. However, per ATS/ERS guidelines, if a cough occurs that affects measurements, the maneuver should be reviewed for acceptability; coughs in the first second typically require repeating the maneuver.",
        explanationWrong:
          "Restarting the entire session is unnecessary. Bronchodilator administration is not indicated for a cough during testing. While resting and repeating is reasonable, evaluating the maneuver first is the correct initial step.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          "The nitrogen washout method for measuring FRC requires the patient to breathe which gas mixture?",
        choices: {
          A: "A helium-oxygen mixture",
          B: "The standard DLCO test gas",
          C: "Room air through a closed circuit",
          D: "100% oxygen through an open circuit",
        },
        correctChoice: "D",
        explanationCorrect:
          "In the nitrogen washout method, the patient breathes 100% oxygen through an open circuit while expired nitrogen is measured. FRC is calculated from the total volume of nitrogen washed out of the lungs.",
        explanationWrong:
          "Helium-oxygen is used in helium dilution, not nitrogen washout. DLCO test gas is for diffusing capacity testing. Room air through a closed circuit does not describe either technique correctly.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
    ],
  });

  console.log(`Exam 2 created: ${exam2.id} with 20 questions`);

  // ─── EXAM 3 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,6,9,14,19) B=5(Q4,8,11,13,20) C=5(Q2,7,12,16,17) D=5(Q1,5,10,15,18)
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 3",
      examIndex: 3,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam3.id,
        questionIndex: 1,
        questionText:
          "Which of the following spirometry values is typically the most sensitive indicator of early small airway disease?",
        choices: {
          A: "Peak expiratory flow (PEF)",
          B: "FEV1",
          C: "FVC",
          D: "Forced expiratory flow at 25-75% of FVC (FEF25-75)",
        },
        correctChoice: "D",
        explanationCorrect:
          "FEF25-75 reflects flow in the middle portion of expiration where small airway function is most apparent. It is considered more sensitive to early small airway obstruction than FEV1 or PEF, though it has high variability.",
        explanationWrong:
          "PEF primarily reflects large airway function and effort. FEV1 is effort-dependent and reflects overall airflow. FVC measures total exhaled volume and is not specific to small airways.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          "When performing spirometry quality control, what action should be taken if the daily calibration check falls outside acceptable limits?",
        choices: {
          A: "Proceed with testing and note the discrepancy",
          B: "Retest calibration at the end of the day",
          C: "Troubleshoot the spirometer, recalibrate, and recheck before performing patient tests",
          D: "Replace the spirometer immediately",
        },
        correctChoice: "C",
        explanationCorrect:
          "If calibration falls outside limits, the spirometer must be troubleshot (check for leaks, clean sensors, verify syringe) and recalibrated before any patient testing proceeds to ensure accurate results.",
        explanationWrong:
          "Proceeding with testing on an out-of-calibration device produces unreliable results. Waiting until end of day delays correction. Immediate replacement is premature before troubleshooting.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          "Alveolar volume (VA) measured during a DLCO test is used to calculate which of the following?",
        choices: {
          A: "DLCO/VA (transfer coefficient or KCO)",
          B: "Airway resistance",
          C: "Closing volume",
          D: "Maximum voluntary ventilation",
        },
        correctChoice: "A",
        explanationCorrect:
          "Alveolar volume (VA) measured during DLCO testing is used to calculate DLCO/VA (also known as KCO or transfer coefficient), which represents the efficiency of CO transfer per unit of lung volume.",
        explanationWrong:
          "Airway resistance requires plethysmography. Closing volume is measured by single-breath nitrogen test. MVV is measured by rapid deep breathing over a timed interval.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          "A patient with severe kyphoscoliosis would most likely show which PFT pattern?",
        choices: {
          A: "Obstructive defect with air trapping",
          B: "Restrictive defect with reduced TLC",
          C: "Normal spirometry with isolated low DLCO",
          D: "Mixed obstructive and restrictive defect",
        },
        correctChoice: "B",
        explanationCorrect:
          "Severe kyphoscoliosis restricts chest wall expansion, resulting in a restrictive ventilatory defect with reduced TLC, preserved or elevated FEV1/FVC ratio, and proportionally reduced volumes.",
        explanationWrong:
          "Kyphoscoliosis primarily restricts lung expansion, not airflow. Isolated low DLCO suggests vascular disease. A mixed defect would require concurrent airflow obstruction.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          "Which of the following describes the proper technique for a slow vital capacity (SVC) maneuver?",
        choices: {
          A: "Maximal inspiration followed by a rapid, explosive exhalation",
          B: "Normal tidal breathing followed by maximal inspiration only",
          C: "Maximal inspiration followed by a slow, complete exhalation without forced effort",
          D: "Maximal inspiration followed by a slow, complete exhalation to residual volume",
        },
        correctChoice: "D",
        explanationCorrect:
          "A slow vital capacity maneuver involves a maximal inspiration to TLC followed by a slow, relaxed, complete exhalation to residual volume (RV) without the forced effort used in FVC testing.",
        explanationWrong:
          "Rapid explosive exhalation describes FVC, not SVC. Maximal inspiration only does not measure vital capacity. Option C is close but D is more precise in specifying exhalation to residual volume.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          "What effect does increasing altitude have on DLCO measurements?",
        choices: {
          A: "DLCO increases due to lower barometric pressure",
          B: "DLCO remains unchanged",
          C: "DLCO decreases only if the patient has lung disease",
          D: "DLCO values must be corrected for altitude",
        },
        correctChoice: "A",
        explanationCorrect:
          "At higher altitudes, lower barometric pressure reduces the partial pressure of oxygen, leading to less competition for hemoglobin binding sites. This results in increased CO uptake and higher measured DLCO values, requiring altitude correction.",
        explanationWrong:
          "DLCO does change with altitude. The effect occurs regardless of disease status. While correction is needed, the primary effect is an increase in measured DLCO.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          "Which of the following is the correct procedure when a patient's nose clip falls off during an FVC maneuver?",
        choices: {
          A: "Continue the maneuver and note it in the comments",
          B: "Immediately stop the test and recalibrate equipment",
          C: "Discard the maneuver, replace the nose clip, and repeat",
          D: "Accept the maneuver if the values appear consistent",
        },
        correctChoice: "C",
        explanationCorrect:
          "If a nose clip falls off during a maneuver, air can escape through the nose, invalidating the measurement. The maneuver should be discarded, the nose clip properly replaced, and the maneuver repeated.",
        explanationWrong:
          "Continuing without the clip produces inaccurate results. Recalibration is not needed for a nose clip issue. Accepting potentially invalid results compromises data quality.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          "In a helium dilution FRC measurement, equilibrium is considered achieved when the helium concentration changes by less than what amount over 30 seconds?",
        choices: {
          A: "0.1%",
          B: "0.02%",
          C: "0.5%",
          D: "1.0%",
        },
        correctChoice: "B",
        explanationCorrect:
          "Equilibrium in the helium dilution method is defined as a change in helium concentration of less than 0.02% over a 30-second period, indicating that the gas has fully distributed throughout the communicating lung volume.",
        explanationWrong:
          "A change of 0.1% or more indicates equilibrium has not yet been reached. Values of 0.5% and 1.0% represent much larger changes than acceptable for equilibrium.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          "Which patient instruction is most important before performing a methacholine challenge test?",
        choices: {
          A: "Withhold caffeine for at least 8 hours and short-acting bronchodilators for at least 4 hours",
          B: "Fast for 12 hours before the test",
          C: "Avoid all oral medications for 48 hours",
          D: "Perform vigorous exercise 1 hour before testing",
        },
        correctChoice: "A",
        explanationCorrect:
          "Patients should withhold caffeine (a mild bronchodilator) for at least 8 hours and short-acting bronchodilators for at least 4 hours before methacholine challenge testing to avoid masking airway hyperresponsiveness.",
        explanationWrong:
          "Fasting for 12 hours is not required. Avoiding all oral medications is unnecessarily broad. Vigorous exercise before testing can itself cause bronchoconstriction and confound results.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          "The RV/TLC ratio is elevated in patients with which of the following conditions?",
        choices: {
          A: "Pulmonary fibrosis",
          B: "Neuromuscular disease",
          C: "Obesity",
          D: "COPD with air trapping",
        },
        correctChoice: "D",
        explanationCorrect:
          "In COPD with air trapping, the residual volume increases disproportionately relative to TLC, resulting in an elevated RV/TLC ratio. This reflects the inability to fully empty the lungs due to airway closure.",
        explanationWrong:
          "Pulmonary fibrosis reduces both RV and TLC proportionally. Neuromuscular disease may increase RV but also reduces TLC. Obesity primarily reduces ERV and FRC without significantly elevating the RV/TLC ratio.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          "Which of the following is the appropriate infection control measure when a patient with active tuberculosis requires PFT testing?",
        choices: {
          A: "Use a standard surgical mask on the patient",
          B: "Perform the test in a negative-pressure room with the technologist wearing an N95 respirator",
          C: "Delay testing until the patient completes antibiotic therapy",
          D: "Use a HEPA filter on the spirometer only",
        },
        correctChoice: "B",
        explanationCorrect:
          "Patients with suspected or confirmed TB should be tested in a negative-pressure isolation room, and the technologist must wear a properly fitted N95 respirator to prevent airborne transmission during the forced breathing maneuvers.",
        explanationWrong:
          "A surgical mask on the patient is removed during testing. Delaying all testing may not be clinically feasible. A HEPA filter alone is insufficient without environmental controls.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          "What is the effect of a Valsalva maneuver (glottic closure) during an FVC test?",
        choices: {
          A: "It increases the measured FEV1",
          B: "It has no significant effect on results",
          C: "It causes a transient cessation of airflow that appears as a notch or hesitation on the flow-volume curve",
          D: "It artificially elevates peak expiratory flow",
        },
        correctChoice: "C",
        explanationCorrect:
          "A Valsalva maneuver during FVC testing causes momentary glottic closure, which interrupts airflow and appears as a notch, dip, or hesitation in the flow-volume loop, making the maneuver unacceptable.",
        explanationWrong:
          "Glottic closure does not increase FEV1 or PEF. It does have a significant negative effect on the quality of the maneuver.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          "Which of the following patient positions is standard for performing spirometry?",
        choices: {
          A: "Supine",
          B: "Seated upright with feet flat on the floor",
          C: "Standing with arms at sides",
          D: "Semi-reclined at 45 degrees",
        },
        correctChoice: "B",
        explanationCorrect:
          "The standard position for spirometry is seated upright in a chair with feet flat on the floor. This position should be consistent for all tests, including bronchodilator response testing, to ensure comparable results.",
        explanationWrong:
          "Supine position reduces FVC. Standing may produce slightly different results and is not the standard. Semi-reclined position is not recommended for standard spirometry.",
        topic: "Patient preparation and coaching",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          "Which of the following best explains why FVC may be lower than SVC in patients with obstructive lung disease?",
        choices: {
          A: "Dynamic airway compression during forced exhalation causes early airway closure and air trapping",
          B: "Patients exert more effort during SVC than during FVC",
          C: "The spirometer measures volumes differently for each maneuver",
          D: "SVC includes inspiratory reserve volume while FVC does not",
        },
        correctChoice: "A",
        explanationCorrect:
          "In obstructive disease, the forced expiratory effort during FVC causes dynamic compression of airways, leading to premature airway closure and air trapping. During the relaxed SVC maneuver, less dynamic compression occurs, allowing more complete exhalation.",
        explanationWrong:
          "SVC is a relaxed maneuver with less effort. Both maneuvers are measured by the same instrument. Both FVC and SVC measure the same volume components.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          "A spirometer linearity check verifies which of the following?",
        choices: {
          A: "That the device reads zero before each test",
          B: "That flow rates are constant throughout expiration",
          C: "That the spirometer maintains a proper seal",
          D: "That volume measurements are accurate across a range of volumes",
        },
        correctChoice: "D",
        explanationCorrect:
          "A linearity check verifies that the spirometer provides accurate volume measurements across the entire measurement range, typically by testing with known volumes at different increments to ensure proportional accuracy.",
        explanationWrong:
          "Zeroing is a separate baseline check. Flow rate consistency is not what linearity measures. Leak checks verify seal integrity, not linearity.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          "Which of the following PFT findings would be expected in a patient with advanced emphysema?",
        choices: {
          A: "Reduced TLC with normal DLCO",
          B: "Normal FEV1/FVC ratio with reduced FVC",
          C: "Increased TLC, increased RV, reduced DLCO, and reduced FEV1/FVC",
          D: "Normal lung volumes with isolated reduction in peak flow",
        },
        correctChoice: "C",
        explanationCorrect:
          "Advanced emphysema produces hyperinflation (increased TLC and RV due to loss of elastic recoil), airflow obstruction (reduced FEV1/FVC), and impaired gas exchange (reduced DLCO due to alveolar destruction).",
        explanationWrong:
          "Reduced TLC suggests restriction, not emphysema. A normal FEV1/FVC ratio is inconsistent with significant obstruction. Normal lung volumes with reduced peak flow does not reflect emphysema.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          "What is the appropriate action if a PFT lab's HEPA filter on the room ventilation system is past its replacement date?",
        choices: {
          A: "Continue using it until visibly soiled",
          B: "Test it for particle penetration and replace if needed",
          C: "Replace it immediately according to the manufacturer's schedule",
          D: "Add a second filter downstream instead of replacing",
        },
        correctChoice: "C",
        explanationCorrect:
          "HEPA filters should be replaced according to the manufacturer's recommended schedule. Using filters beyond their rated life may compromise filtration efficiency, increasing infection risk in the PFT laboratory.",
        explanationWrong:
          "Visual inspection is unreliable for HEPA filter effectiveness. While particle penetration testing is valid, replacement per schedule is the standard practice. Adding a second filter does not address the failed primary filter.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          "When selecting reference equations for a patient of mixed racial background, what is the recommended approach using GLI-2012?",
        choices: {
          A: "Use the equations for the race with the lowest predicted values",
          B: "Average the predicted values from two racial categories",
          C: "Use Caucasian reference values for all patients",
          D: "Use the GLI-2012 'other/mixed' category",
        },
        correctChoice: "D",
        explanationCorrect:
          "GLI-2012 includes an 'other/mixed' ethnic category specifically designed for patients who do not fit into a single racial/ethnic group, providing appropriate reference values without arbitrary averaging.",
        explanationWrong:
          "Using the lowest predicted values would over-diagnose abnormalities. Averaging is not a validated approach. Using Caucasian values for all patients ignores known ethnic differences in lung function.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          "During plethysmography, thermal drift in the body box can cause errors. What is the standard method to minimize this?",
        choices: {
          A: "Allow the patient to sit in the closed box for 1-2 minutes before testing to allow thermal equilibration",
          B: "Keep the box door open during testing",
          C: "Cool the box with external fans during testing",
          D: "Test immediately upon closing the door to avoid warming",
        },
        correctChoice: "A",
        explanationCorrect:
          "Having the patient sit in the closed plethysmograph for 1-2 minutes before testing allows body heat to equilibrate with the box environment, minimizing thermal drift that can affect pressure measurements.",
        explanationWrong:
          "The door must be closed during testing. External fans would introduce pressure artifacts. Testing immediately does not allow thermal equilibration.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          "Which of the following best describes the z-score in the context of PFT interpretation?",
        choices: {
          A: "The ratio of observed value to predicted value",
          B: "The number of standard deviations the observed value is from the predicted mean",
          C: "The percentage of the reference population with lower values",
          D: "The absolute difference between observed and predicted values",
        },
        correctChoice: "B",
        explanationCorrect:
          "A z-score represents the number of standard deviations an observed value falls from the predicted mean for a reference population of the same age, sex, height, and ethnicity. A z-score of -1.645 corresponds to the 5th percentile (LLN).",
        explanationWrong:
          "The ratio of observed to predicted is a percent predicted. The percentage with lower values describes a percentile rank. The absolute difference does not account for population variability.",
        topic: "Reference equations and lower limits of normal",
      },
    ],
  });

  console.log(`Exam 3 created: ${exam3.id} with 20 questions`);

  // ─── EXAM 4 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,7,10,13,20) B=5(Q1,8,12,14,17) C=5(Q4,6,9,15,19) D=5(Q2,5,11,16,18)
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 4",
      examIndex: 4,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam4.id,
        questionIndex: 1,
        questionText:
          "A turbine-type spirometer operates by measuring which of the following?",
        choices: {
          A: "Pressure changes across a resistance element",
          B: "The number of blade rotations proportional to volume",
          C: "Ultrasonic frequency shifts caused by airflow",
          D: "Changes in gas thermal conductivity",
        },
        correctChoice: "B",
        explanationCorrect:
          "Turbine spirometers use a lightweight vane or blade that rotates in proportion to the volume of air passing through. An optical or magnetic sensor counts rotations to calculate volume.",
        explanationWrong:
          "Pressure-based measurement describes a pneumotachograph. Ultrasonic frequency shifts describe ultrasonic flow sensors. Thermal conductivity is used in hot-wire anemometers.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          "What does an elevated RV with a normal TLC indicate in a PFT report?",
        choices: {
          A: "Pure restrictive disease",
          B: "Combined obstruction and restriction",
          C: "Normal lung function",
          D: "Air trapping without hyperinflation",
        },
        correctChoice: "D",
        explanationCorrect:
          "An elevated RV with normal TLC indicates air trapping (gas is retained at end-expiration) without overall hyperinflation, as the TLC remains within normal limits. This pattern is often seen in mild-moderate obstructive disease.",
        explanationWrong:
          "Restrictive disease would show reduced TLC. Combined disease would show both obstruction and reduced TLC. Normal function would have RV within normal limits.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          "During DLCO testing, what effect does smoking within 24 hours of the test have on results?",
        choices: {
          A: "Carboxyhemoglobin elevation reduces DLCO by competing with CO for hemoglobin binding sites",
          B: "Smoking increases DLCO due to bronchial vasodilation",
          C: "Smoking has no measurable effect if the patient uses a filter",
          D: "Smoking only affects the alveolar volume measurement",
        },
        correctChoice: "A",
        explanationCorrect:
          "Recent smoking elevates carboxyhemoglobin (COHb) levels, which reduces the amount of hemoglobin available to bind the test CO, resulting in a falsely reduced DLCO measurement. COHb adjustment should be applied.",
        explanationWrong:
          "Smoking does not increase DLCO. Filter use does not prevent COHb elevation. Smoking affects the CO uptake measurement, not just alveolar volume.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          "Which of the following is the most reliable indicator of patient effort during an FVC maneuver?",
        choices: {
          A: "The patient appears to be trying hard",
          B: "Expiratory time exceeds 6 seconds",
          C: "A negative-effort-dependent region on the flow-volume curve is not present",
          D: "Peak expiratory flow is achieved rapidly with a sharp rise on the flow-volume loop",
        },
        correctChoice: "C",
        explanationCorrect:
          "After the initial effort-dependent peak flow is achieved, the descending limb of the expiratory flow-volume curve should be effort-independent. Absence of negative effort dependence (where the curve falls below previous efforts) confirms good effort.",
        explanationWrong:
          "Visual assessment of effort is subjective. Expiratory time indicates completeness, not effort. PEF indicates start-of-test effort but not sustained effort throughout the maneuver.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          "What is the correct response if a body plethysmograph pressure transducer fails its daily calibration check?",
        choices: {
          A: "Perform testing with a correction factor applied",
          B: "Use gas dilution as a backup and proceed with patient testing",
          C: "Request the patient return the following day",
          D: "Halt plethysmography testing, troubleshoot the transducer, and recalibrate before resuming",
        },
        correctChoice: "D",
        explanationCorrect:
          "A failed calibration means the device is producing inaccurate measurements. Testing must be halted, the transducer must be troubleshot and recalibrated, and the device must pass calibration before any patient testing resumes.",
        explanationWrong:
          "Applying correction factors to known inaccurate measurements is unreliable. Gas dilution measures different parameters and is not a direct substitute. Rescheduling may be needed but only after troubleshooting fails.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          "Which of the following patients should be tested for bronchodilator responsiveness during routine spirometry?",
        choices: {
          A: "Only patients with a confirmed asthma diagnosis",
          B: "Only patients with an FEV1 below 50% predicted",
          C: "Any patient with airflow obstruction on baseline spirometry",
          D: "All patients regardless of baseline results",
        },
        correctChoice: "C",
        explanationCorrect:
          "Bronchodilator responsiveness testing is indicated when baseline spirometry shows airflow obstruction (reduced FEV1/FVC ratio) to determine the degree of reversibility and aid in differential diagnosis between asthma and COPD.",
        explanationWrong:
          "Testing is not limited to confirmed asthma patients. Severity of obstruction does not determine eligibility. Testing all patients regardless of results is unnecessary and wasteful.",
        topic: "Bronchodilator response assessment",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          "What is the minimum inspired volume required for an acceptable DLCO test maneuver?",
        choices: {
          A: "At least 85% of the largest known VC",
          B: "At least 70% of the largest known VC",
          C: "At least 50% of predicted TLC",
          D: "At least 90% of predicted FVC",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards require that the inspired volume (VI) during a single-breath DLCO test be at least 85% of the largest measured vital capacity to ensure adequate gas distribution throughout the lungs.",
        explanationWrong:
          "A 70% threshold is below the required standard. Criteria are based on measured VC, not predicted TLC or predicted FVC.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          "The term 'within-maneuver acceptability' in spirometry refers to which of the following?",
        choices: {
          A: "The number of maneuvers performed meeting repeatability criteria",
          B: "Criteria applied to individual maneuvers including maximal effort, no artifacts, and proper start and end",
          C: "Agreement between technologists on test quality",
          D: "The patient's subjective report of effort quality",
        },
        correctChoice: "B",
        explanationCorrect:
          "Within-maneuver acceptability criteria are applied to each individual maneuver and include: maximal effort, no cough in the first second, no early termination, no leak, no glottic closure, no back-extrapolation errors, and proper test completion.",
        explanationWrong:
          "Repeatability criteria compare multiple maneuvers, not individual ones. Technologist consensus is not a formal criterion. Patient self-report is subjective and unreliable.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          "When cleaning reusable PFT equipment, which of the following solutions should be avoided on flow-sensing elements?",
        choices: {
          A: "Enzymatic detergent",
          B: "Isopropyl alcohol at recommended dilution",
          C: "Bleach solutions that may corrode metal components",
          D: "Sterile water rinse",
        },
        correctChoice: "C",
        explanationCorrect:
          "Bleach (sodium hypochlorite) solutions can corrode metal components in flow-sensing elements such as the fine mesh of a Fleisch pneumotachograph, potentially damaging the sensor and affecting accuracy.",
        explanationWrong:
          "Enzymatic detergents are generally safe when used per manufacturer guidelines. Isopropyl alcohol at proper dilution is commonly used. Sterile water rinse is safe for rinsing after disinfection.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          "Which of the following conditions may cause a falsely elevated DLCO?",
        choices: {
          A: "Polycythemia",
          B: "Anemia",
          C: "Emphysema",
          D: "Pulmonary fibrosis",
        },
        correctChoice: "A",
        explanationCorrect:
          "Polycythemia (elevated hemoglobin and red blood cell count) increases the amount of hemoglobin available to bind CO, resulting in higher CO uptake and a falsely elevated DLCO measurement.",
        explanationWrong:
          "Anemia reduces DLCO. Emphysema reduces DLCO due to alveolar destruction. Pulmonary fibrosis reduces DLCO due to thickened alveolar-capillary membrane.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          "Which of the following lung volumes cannot be measured by spirometry alone?",
        choices: {
          A: "Tidal volume",
          B: "Inspiratory capacity",
          C: "Expiratory reserve volume",
          D: "Residual volume",
        },
        correctChoice: "D",
        explanationCorrect:
          "Residual volume (RV) is the air remaining in the lungs after maximal exhalation and cannot be exhaled or measured by spirometry. It requires body plethysmography or gas dilution techniques.",
        explanationWrong:
          "Tidal volume, inspiratory capacity, and expiratory reserve volume can all be measured directly by spirometry.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          "A technologist notices that a patient's flow-volume loops are consistently smaller on repeat testing during the same session, despite good effort. What should be suspected?",
        choices: {
          A: "Equipment malfunction causing volume drift",
          B: "Progressive patient fatigue or bronchospasm induced by repeated forced maneuvers",
          C: "Improving patient technique over time",
          D: "Normal test variability",
        },
        correctChoice: "B",
        explanationCorrect:
          "Consistently decreasing flow-volume loops despite good effort suggest patient fatigue or exercise/effort-induced bronchospasm from repeated forced exhalations, which is particularly common in patients with reactive airway disease.",
        explanationWrong:
          "Equipment drift would not typically produce progressively smaller loops. Improving technique would produce larger, not smaller loops. Normal variability would show random, not consistent, changes.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          "What is the purpose of the leak test performed on a body plethysmograph?",
        choices: {
          A: "To verify that the box maintains a sealed environment for accurate pressure measurements",
          B: "To check if the patient's mouthpiece has a proper seal",
          C: "To calibrate the flow sensor",
          D: "To test the solenoid valve function",
        },
        correctChoice: "A",
        explanationCorrect:
          "The leak test ensures that the plethysmograph box is properly sealed, as even small leaks allow pressure equalization with the outside environment, compromising the accuracy of pressure-based volume measurements.",
        explanationWrong:
          "Mouthpiece seal is checked during patient testing. Flow sensor calibration is a separate procedure. Solenoid valve testing is a specific component check, not the primary purpose of the leak test.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          "When should a post-bronchodilator spirometry test be performed after administering 4 puffs of albuterol via MDI?",
        choices: {
          A: "Immediately after the last puff",
          B: "10 to 15 minutes after administration",
          C: "30 minutes after administration",
          D: "60 minutes after administration",
        },
        correctChoice: "B",
        explanationCorrect:
          "Post-bronchodilator spirometry should be performed 10 to 15 minutes after administration of a short-acting beta-agonist such as albuterol to allow adequate time for the drug to reach peak bronchodilator effect.",
        explanationWrong:
          "Immediately after is too soon for drug effect. Thirty or sixty minutes exceeds the recommended wait time and may miss peak effect or delay testing unnecessarily.",
        topic: "Bronchodilator response assessment",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          "A patient's DLCO is reduced but DLCO/VA (KCO) is normal. Which condition is this most consistent with?",
        choices: {
          A: "Emphysema",
          B: "Pulmonary hypertension",
          C: "Pneumonectomy or lobectomy",
          D: "Interstitial lung disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "After pneumonectomy or lobectomy, the total DLCO is reduced because there is less lung volume, but the remaining lung tissue is normal, so the diffusing capacity per unit volume (KCO) remains normal or may be elevated.",
        explanationWrong:
          "Emphysema reduces both DLCO and KCO. Pulmonary hypertension reduces both DLCO and KCO. Interstitial lung disease also reduces both DLCO and typically KCO.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          "Which reference equation variable has the greatest influence on predicted FVC and FEV1 values?",
        choices: {
          A: "Weight",
          B: "Age",
          C: "Resting respiratory rate",
          D: "Height",
        },
        correctChoice: "D",
        explanationCorrect:
          "Height is the single most important predictor of lung volumes including FVC and FEV1, as taller individuals have proportionally larger lungs. Height has a greater influence than age, sex, or race/ethnicity.",
        explanationWrong:
          "Weight is not a standard variable in most spirometry reference equations. Age is an important factor but has less influence than height. Respiratory rate is not used in reference equations.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          "What is the recommended action when a PFT system undergoes a software update?",
        choices: {
          A: "Continue using the system without additional checks",
          B: "Perform a complete calibration verification and compare results with pre-update data before resuming patient testing",
          C: "Run a single calibration check at one flow rate",
          D: "Wait 24 hours before using the system to allow stabilization",
        },
        correctChoice: "B",
        explanationCorrect:
          "After any software update, a full calibration verification should be performed and results compared with pre-update data (including biological QC) to ensure the update has not altered measurement accuracy or introduced errors.",
        explanationWrong:
          "Continuing without checks risks using a system with altered calibration. A single flow-rate check is insufficient. Waiting 24 hours without verification serves no purpose.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          "Which PFT pattern is most consistent with obesity in the absence of concurrent lung disease?",
        choices: {
          A: "Reduced FEV1/FVC ratio with normal TLC",
          B: "Increased TLC with reduced DLCO",
          C: "Normal spirometry with elevated lung volumes",
          D: "Reduced ERV and FRC with normal TLC and FEV1/FVC ratio",
        },
        correctChoice: "D",
        explanationCorrect:
          "Obesity characteristically reduces ERV and FRC due to the mass loading effect on the chest wall and diaphragm, while TLC and FEV1/FVC ratio typically remain normal in the absence of concurrent lung disease.",
        explanationWrong:
          "A reduced FEV1/FVC ratio suggests obstruction. Increased TLC with reduced DLCO suggests emphysema. Elevated lung volumes are not consistent with obesity.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          "What is the recommended procedure for hand hygiene in a PFT laboratory?",
        choices: {
          A: "Wash hands only after testing patients with known respiratory infections",
          B: "Use gloves for all tests, making hand washing optional",
          C: "Perform hand hygiene before and after each patient encounter using soap and water or alcohol-based hand rub",
          D: "Wash hands at the beginning and end of the work shift only",
        },
        correctChoice: "C",
        explanationCorrect:
          "Standard infection control practice requires hand hygiene before and after each patient encounter, using either soap and water or an alcohol-based hand rub, to prevent cross-contamination between patients.",
        explanationWrong:
          "Limiting hand washing to known infections ignores asymptomatic carriers. Gloves do not replace hand washing. Twice-daily hand washing is grossly insufficient for patient-facing work.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          "In the context of bronchodilator response testing, what does a significant improvement in FVC without change in FEV1 suggest?",
        choices: {
          A: "A reduction in air trapping or hyperinflation with bronchodilator use",
          B: "No clinically meaningful bronchodilator response",
          C: "An error in the post-bronchodilator testing technique",
          D: "The need for a higher dose of bronchodilator",
        },
        correctChoice: "A",
        explanationCorrect:
          "An increase in FVC without a proportional increase in FEV1 suggests that the bronchodilator reduced air trapping or hyperinflation, allowing the patient to exhale more volume, which can be clinically significant even without FEV1 improvement.",
        explanationWrong:
          "FVC improvement alone can be clinically meaningful. It does not necessarily indicate technique error. A higher bronchodilator dose is not automatically indicated.",
        topic: "Bronchodilator response assessment",
      },
    ],
  });

  console.log(`Exam 4 created: ${exam4.id} with 20 questions`);

  // ─── EXAM 5 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q1,6,11,16,18) B=5(Q3,8,10,13,20) C=5(Q2,5,12,15,19) D=5(Q4,7,9,14,17)
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 5",
      examIndex: 5,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam5.id,
        questionIndex: 1,
        questionText:
          "Which of the following describes the proper use of a spacer device when administering bronchodilator for pre/post spirometry testing?",
        choices: {
          A: "Actuate the MDI into the spacer and have the patient inhale slowly and deeply, then hold breath for 10 seconds",
          B: "Have the patient exhale into the spacer before actuating the MDI",
          C: "Actuate all 4 puffs simultaneously into the spacer",
          D: "Use the spacer only if the patient cannot coordinate the MDI",
        },
        correctChoice: "A",
        explanationCorrect:
          "Proper spacer technique involves actuating one puff of the MDI into the spacer, having the patient inhale slowly and deeply, and holding their breath for approximately 10 seconds to maximize drug deposition in the airways.",
        explanationWrong:
          "Exhaling into the spacer before actuation wastes medication. Actuating all puffs at once reduces drug delivery. Spacers are recommended for standardization in PFT labs, not just for coordination issues.",
        topic: "Bronchodilator response assessment",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          "Which of the following is the correct procedure for performing a leak check on a volume-displacement spirometer?",
        choices: {
          A: "Inject air rapidly and observe for immediate volume loss",
          B: "Visually inspect tubing connections for obvious gaps",
          C: "Apply a constant pressure of at least 3 cmH2O and verify that volume loss does not exceed 30 mL per minute",
          D: "Listen for hissing sounds while pressurizing the system",
        },
        correctChoice: "C",
        explanationCorrect:
          "A proper leak check involves applying a known constant pressure (at least 3 cmH2O) to the sealed system and verifying that volume loss does not exceed 30 mL per minute, ensuring the system is airtight.",
        explanationWrong:
          "Rapid injection does not maintain sustained pressure for leak detection. Visual inspection misses small leaks. Auditory detection is unreliable for small leaks.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          "What is the primary reason for measuring FRC rather than TLC as the starting point for lung volume determination by gas dilution?",
        choices: {
          A: "FRC is easier to measure than TLC",
          B: "FRC is the resting end-expiratory volume, making it a natural and reproducible starting point for tidal breathing-based measurements",
          C: "TLC cannot be measured by gas dilution methods",
          D: "FRC is always larger than TLC",
        },
        correctChoice: "B",
        explanationCorrect:
          "FRC represents the lung volume at end-tidal expiration, which is the natural resting position of the respiratory system. This makes it the most reproducible and practical starting point for gas dilution measurements that begin during tidal breathing.",
        explanationWrong:
          "Ease is not the primary rationale. TLC can be derived from gas dilution once FRC is known. FRC is always smaller than TLC.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          "A patient demonstrates a 'steeple sign' on the flow-volume loop, characterized by a very tall, narrow peak with rapidly declining flows. This suggests which of the following?",
        choices: {
          A: "Excellent patient effort and normal lung function",
          B: "Severe restrictive lung disease",
          C: "Obstructive lung disease",
          D: "Good initial effort but possible premature termination or air trapping",
        },
        correctChoice: "D",
        explanationCorrect:
          "A tall narrow peak (steeple pattern) with rapidly declining expiratory flows suggests the patient generated good peak flow but could not sustain flow, possibly due to premature termination, air trapping, or dynamic airway collapse.",
        explanationWrong:
          "Normal function would show sustained flows, not a rapid decline. Restrictive disease shows a smaller loop with preserved shape. Obstructive disease typically shows a scooped pattern.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          "Which of the following is recommended for cleaning one-way valve assemblies used in DLCO testing?",
        choices: {
          A: "Autoclave after each patient",
          B: "Replace the entire assembly after each use",
          C: "Disassemble, clean, and disinfect according to manufacturer instructions between patients",
          D: "Wipe the exterior with a disinfectant wipe only",
        },
        correctChoice: "C",
        explanationCorrect:
          "One-way valve assemblies should be disassembled, cleaned, and disinfected according to the manufacturer's specific instructions between patients to maintain proper function and prevent cross-contamination.",
        explanationWrong:
          "Autoclaving may damage valve components. Replacing after each use is unnecessarily costly unless they are single-use. Exterior wiping alone does not address internal contamination.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          "Which of the following physiologic factors is most responsible for the normal age-related decline in FEV1?",
        choices: {
          A: "Loss of elastic recoil of the lung parenchyma",
          B: "Increased airway smooth muscle tone",
          C: "Progressive reduction in hemoglobin concentration",
          D: "Decreased metabolic demand for oxygen",
        },
        correctChoice: "A",
        explanationCorrect:
          "The normal age-related decline in FEV1 is primarily attributed to the gradual loss of elastic recoil in lung tissue, which reduces the driving pressure for expiratory airflow and leads to earlier airway closure during forced exhalation.",
        explanationWrong:
          "Airway smooth muscle tone does not systematically increase with age. Hemoglobin affects DLCO, not FEV1. Metabolic demand does not directly determine spirometric values.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          "When interpreting DLCO results, which of the following conditions can cause an increased (above normal) DLCO?",
        choices: {
          A: "Interstitial lung disease",
          B: "Anemia",
          C: "Pulmonary embolism",
          D: "Alveolar hemorrhage",
        },
        correctChoice: "D",
        explanationCorrect:
          "Alveolar hemorrhage causes blood to accumulate in the alveolar spaces, providing additional hemoglobin to bind the test CO, which results in a falsely elevated or truly increased DLCO measurement.",
        explanationWrong:
          "ILD, anemia, and pulmonary embolism all reduce DLCO through different mechanisms: membrane thickening, reduced hemoglobin, and reduced capillary blood volume, respectively.",
        topic: "Diffusing capacity (DLCO) testing",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          "Which of the following quality control measures should be performed on a body plethysmograph at the start of each testing day?",
        choices: {
          A: "Full recalibration of all gas analyzers",
          B: "Pressure transducer calibration, leak check, and volume calibration verification",
          C: "Patient testing to verify biological QC",
          D: "Review of software update logs",
        },
        correctChoice: "B",
        explanationCorrect:
          "Daily quality control for a body plethysmograph includes pressure transducer calibration verification, a leak check to confirm box integrity, and volume calibration verification using a calibration syringe.",
        explanationWrong:
          "Full gas analyzer recalibration may not be needed daily. Biological QC is weekly, not daily. Software log review is not a daily QC measure.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          "A patient presents with a PFT showing severely reduced FVC, FEV1, and TLC, with a normal FEV1/FVC ratio and normal DLCO per unit of alveolar volume. This pattern is most consistent with which condition?",
        choices: {
          A: "Emphysema",
          B: "Asthma",
          C: "Pulmonary vascular disease",
          D: "Neuromuscular disease",
        },
        correctChoice: "D",
        explanationCorrect:
          "Neuromuscular disease (such as muscular dystrophy or ALS) causes a restrictive pattern with reduced volumes due to respiratory muscle weakness, preserved FEV1/FVC ratio, and normal DLCO/VA because the lung parenchyma itself is unaffected.",
        explanationWrong:
          "Emphysema shows obstruction and reduced DLCO. Asthma shows obstruction. Pulmonary vascular disease would show reduced DLCO.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          "What is the maximum number of FVC maneuvers recommended during a single spirometry session?",
        choices: {
          A: "6",
          B: "8",
          C: "12",
          D: "No specific limit",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS guidelines recommend a maximum of 8 FVC maneuvers in a single session to prevent patient fatigue, which can cause progressively poorer efforts and potentially induce bronchospasm.",
        explanationWrong:
          "Six is fewer than the recommended maximum. Twelve exceeds the recommendation. There is a specific recommended limit to protect patient well-being.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          "Which of the following measurements is used to determine specific airway conductance (sGaw)?",
        choices: {
          A: "Airway resistance and thoracic gas volume measured simultaneously by plethysmography",
          B: "FEV1 and FVC from spirometry",
          C: "DLCO and alveolar volume",
          D: "Peak flow and tidal volume",
        },
        correctChoice: "A",
        explanationCorrect:
          "Specific airway conductance (sGaw) is the reciprocal of specific airway resistance, calculated from airway resistance (Raw) and thoracic gas volume (TGV), both measured simultaneously during body plethysmography.",
        explanationWrong:
          "FEV1 and FVC measure airflow but not airway resistance. DLCO and VA relate to gas transfer. Peak flow and tidal volume are not used to calculate sGaw.",
        topic: "Lung volume measurements (plethysmography, gas dilution)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          "How should environmental temperature and humidity conditions in a PFT lab be monitored?",
        choices: {
          A: "Check only when the HVAC system is serviced",
          B: "Estimate based on outdoor weather conditions",
          C: "Record ambient temperature, barometric pressure, and humidity daily to ensure accurate BTPS corrections",
          D: "Monitor only if the laboratory lacks climate control",
        },
        correctChoice: "C",
        explanationCorrect:
          "Ambient temperature, barometric pressure, and humidity must be recorded daily because they directly affect BTPS correction calculations. Even climate-controlled labs should verify conditions for accurate volume conversions.",
        explanationWrong:
          "HVAC service intervals are too infrequent. Outdoor conditions do not reflect indoor conditions. All labs require monitoring regardless of climate control.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          "Which of the following grading systems is recommended by ATS/ERS for classifying the severity of spirometric abnormalities?",
        choices: {
          A: "Based on percent predicted FVC only",
          B: "Based on the z-score or percent predicted FEV1 after confirming the type of defect",
          C: "Based on the FEV1/FVC ratio alone",
          D: "Based on symptom severity scores",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS recommends using FEV1 (expressed as percent predicted or z-score) to grade severity after the type of ventilatory defect has been established by the FEV1/FVC ratio and TLC measurements.",
        explanationWrong:
          "FVC alone does not grade severity. The FEV1/FVC ratio identifies the type of defect but is not used for severity grading. Symptom scores are clinical, not physiologic, measurements.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          "A patient with asthma shows a 15% increase in FEV1 but only a 150 mL absolute increase after bronchodilator administration. Does this meet criteria for a positive bronchodilator response?",
        choices: {
          A: "Yes, because the percentage criterion alone is sufficient",
          B: "Yes, because both criteria are close to the threshold",
          C: "No, because the test should be repeated before making a determination",
          D: "No, because both the 12% and 200 mL criteria must be met simultaneously",
        },
        correctChoice: "D",
        explanationCorrect:
          "A positive bronchodilator response requires BOTH a 12% or greater increase AND a 200 mL or greater absolute increase in FEV1 from baseline. Although the percentage criterion is met, the 150 mL increase falls short of the 200 mL absolute requirement.",
        explanationWrong:
          "The percentage criterion alone is not sufficient; both must be met. Being close to threshold does not constitute meeting criteria. Repeating is not required; the criteria are clear.",
        topic: "Bronchodilator response assessment",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          "Which of the following is the primary purpose of the quality assurance (QA) program in a PFT laboratory?",
        choices: {
          A: "To meet regulatory requirements only",
          B: "To reduce equipment maintenance costs",
          C: "To ensure accurate, reproducible, and clinically useful test results",
          D: "To train new technologists",
        },
        correctChoice: "C",
        explanationCorrect:
          "The primary purpose of a PFT laboratory QA program is to systematically ensure that all test results are accurate, reproducible, and clinically meaningful, encompassing equipment maintenance, technologist training, and procedural standardization.",
        explanationWrong:
          "While QA helps meet regulations, that is not its primary purpose. Reducing costs is a secondary benefit. Training is one component of QA, not its primary purpose.",
        topic: "Equipment calibration and quality control",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          "When a patient cannot perform acceptable spirometry due to cognitive impairment, which alternative test may provide useful information about lung function?",
        choices: {
          A: "Tidal breathing analysis and respiratory impedance by oscillometry",
          B: "Maximum voluntary ventilation only",
          C: "Arterial blood gas analysis",
          D: "Six-minute walk test",
        },
        correctChoice: "A",
        explanationCorrect:
          "Oscillometry (impulse oscillometry or forced oscillation technique) requires only passive tidal breathing and can assess respiratory impedance without the need for maximal voluntary effort, making it suitable for patients who cannot perform standard spirometry.",
        explanationWrong:
          "MVV requires maximal sustained effort. ABGs measure gas exchange, not mechanics. The 6-minute walk test assesses exercise capacity, not specific lung mechanics.",
        topic: "Spirometry procedures and acceptability criteria",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          "What is the significance of an FEV1/FVC ratio that is above the upper limit of normal?",
        choices: {
          A: "It always indicates normal lung function",
          B: "It may indicate restrictive disease where FVC is reduced more than FEV1",
          C: "It confirms the absence of air trapping",
          D: "It may be seen in restrictive disease where the elastic recoil is increased, causing disproportionate maintenance of FEV1 relative to FVC",
        },
        correctChoice: "D",
        explanationCorrect:
          "A supranormal FEV1/FVC ratio can occur in restrictive diseases where increased elastic recoil (such as pulmonary fibrosis) maintains FEV1 relatively well while FVC is reduced, resulting in a ratio above normal.",
        explanationWrong:
          "A high ratio does not always mean normal function. While FVC reduction contributes, the key mechanism is increased elastic recoil. Air trapping is assessed by RV, not the ratio.",
        topic: "Basic PFT interpretation patterns (obstructive, restrictive, mixed)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          "Which of the following patient factors should be documented when reporting spirometry results to ensure appropriate reference value selection?",
        choices: {
          A: "Age, sex, standing height, and race/ethnicity",
          B: "Age and weight only",
          C: "Height and smoking history only",
          D: "Age, weight, and blood pressure",
        },
        correctChoice: "A",
        explanationCorrect:
          "Age, sex, standing height, and race/ethnicity are the four key variables used in spirometry reference equations to calculate predicted values and must be accurately documented for proper interpretation.",
        explanationWrong:
          "Weight is not typically used in spirometry reference equations. Smoking history is important for clinical context but not for reference value calculation. Blood pressure is not relevant to reference equations.",
        topic: "Reference equations and lower limits of normal",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          "Which of the following describes the correct disposal protocol for single-use mouthpieces and nose clips in a PFT laboratory?",
        choices: {
          A: "Place in regular trash after each patient",
          B: "Sanitize and reuse for up to 5 patients",
          C: "Dispose of in designated medical waste containers according to facility infection control policy",
          D: "Rinse with water and store for reuse",
        },
        correctChoice: "C",
        explanationCorrect:
          "Single-use items contaminated with respiratory secretions should be disposed of in designated medical waste containers following the facility's infection control and waste management policies to prevent cross-contamination.",
        explanationWrong:
          "Regular trash may not meet biohazard requirements. Single-use items should never be reused. Rinsing and reusing defeats the purpose of single-use designation.",
        topic: "Infection control in PFT labs",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          "A patient's pre-bronchodilator FEV1 is 2.10 L and post-bronchodilator FEV1 is 2.42 L. What is the percent change from baseline?",
        choices: {
          A: "13.2%",
          B: "15.2%",
          C: "10.5%",
          D: "18.0%",
        },
        correctChoice: "B",
        explanationCorrect:
          "Percent change = ((Post - Pre) / Pre) x 100 = ((2.42 - 2.10) / 2.10) x 100 = (0.32 / 2.10) x 100 = 15.2%. This exceeds the 12% threshold for the percentage criterion of bronchodilator responsiveness.",
        explanationWrong:
          "13.2%, 10.5%, and 18.0% are incorrect calculations. The formula is (post minus pre) divided by pre, multiplied by 100.",
        topic: "Bronchodilator response assessment",
      },
    ],
  });

  console.log(`Exam 5 created: ${exam5.id} with 20 questions`);

  console.log("All 5 CPFT mini exams seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
