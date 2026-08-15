import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fxw0004zf54sy6um2ui";

  // ─── EXAM 21 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,7,12,16,20) B=5(Q1,5,10,14,18) C=5(Q2,8,11,15,19) D=5(Q4,6,9,13,17)
  const exam21 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 21",
      examIndex: 21,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam21.id,
        questionIndex: 1,
        questionText:
          "A patient performs spirometry and the FEV1/FVC ratio is 0.62 with an FVC of 92% predicted. Which interpretation is most appropriate?",
        choices: {
          A: "Normal spirometry",
          B: "Obstructive ventilatory defect",
          C: "Restrictive ventilatory defect",
          D: "Mixed obstructive and restrictive defect",
        },
        correctChoice: "B",
        explanationCorrect:
          "An FEV1/FVC ratio below 0.70 (or below the lower limit of normal) with a preserved FVC indicates an obstructive ventilatory defect. The normal FVC rules out restriction.",
        explanationWrong:
          "Normal spirometry requires both a normal FEV1/FVC ratio and normal FVC. Restrictive defects show reduced FVC with a normal or elevated ratio. A mixed defect shows both reduced ratio and reduced FVC.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 2,
        questionText:
          "Which of the following is the most important infection control measure between patients in the PFT laboratory?",
        choices: {
          A: "Autoclaving the pneumotachograph after each patient",
          B: "Wiping the exterior of the spirometer with alcohol",
          C: "Using disposable mouthpieces and in-line bacterial filters",
          D: "Having the patient gargle with antiseptic mouthwash",
        },
        correctChoice: "C",
        explanationCorrect:
          "Disposable mouthpieces and in-line bacterial/viral filters are the standard of care for preventing cross-contamination between patients in the PFT lab. Filters should have documented filtration efficiency for bacteria and viruses.",
        explanationWrong:
          "Autoclaving after each patient is impractical and unnecessary if filters are used. External wiping does not address internal contamination. Mouthwash has not been shown to reliably prevent transmission in PFT testing.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 3,
        questionText:
          "When performing DLCO testing by the single-breath method, the patient should inspire to at least what percentage of their vital capacity?",
        choices: {
          A: "85% of the largest measured VC",
          B: "70% of the largest measured VC",
          C: "95% of the largest measured VC",
          D: "75% of the largest measured VC",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards require that the inspired volume during single-breath DLCO testing be at least 85% of the largest measured VC. Volumes below this threshold may result in underestimation of DLCO.",
        explanationWrong:
          "A 70% or 75% threshold is too low and would allow submaximal efforts that reduce DLCO accuracy. A 95% threshold is unnecessarily stringent and would lead to excessive test rejection.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 4,
        questionText:
          "During body plethysmography, the patient is instructed to pant against a closed shutter. What is this maneuver primarily used to measure?",
        choices: {
          A: "Airway resistance only",
          B: "Diffusion capacity",
          C: "Maximal voluntary ventilation",
          D: "Functional residual capacity (FRC)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Panting against a closed shutter in a body plethysmograph uses Boyle's law to measure thoracic gas volume at FRC. Pressure changes at the mouth and in the box are used to calculate the volume of gas in the thorax.",
        explanationWrong:
          "While airway resistance can be measured by plethysmography, it uses an open-shutter panting technique. Diffusion capacity is measured by gas transfer methods. MVV is measured by rapid voluntary breathing.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 5,
        questionText:
          "A patient's pre-bronchodilator FEV1 is 2.10 L and post-bronchodilator FEV1 is 2.42 L. What is the percent change in FEV1?",
        choices: {
          A: "12%",
          B: "15%",
          C: "18%",
          D: "10%",
        },
        correctChoice: "B",
        explanationCorrect:
          "Percent change = ((2.42 - 2.10) / 2.10) × 100 = (0.32 / 2.10) × 100 = 15.2%. A positive bronchodilator response is typically defined as an increase of ≥12% AND ≥200 mL.",
        explanationWrong:
          "The calculation (post - pre) / pre × 100 yields approximately 15%, not 12%, 18%, or 10%. Accurate calculation is essential for determining bronchodilator responsiveness.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 6,
        questionText:
          "In the closed-circuit helium dilution method for measuring FRC, the test is terminated when the helium concentration has been stable for how long?",
        choices: {
          A: "30 seconds",
          B: "1 minute",
          C: "3 minutes",
          D: "2 minutes",
        },
        correctChoice: "D",
        explanationCorrect:
          "The helium dilution test for FRC is terminated when the helium concentration remains stable (change of <0.02%) for 2 minutes, indicating equilibration between the spirometer and the patient's lungs.",
        explanationWrong:
          "Thirty seconds is too brief for reliable equilibration. One minute may not allow complete gas mixing, especially in patients with air trapping. Three minutes exceeds the standard criterion.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 7,
        questionText:
          "Which of the following is the correct order for performing a spirometry calibration check using a 3-liter syringe?",
        choices: {
          A: "Inject the syringe at three different flow rates and verify volumes are within ±3.5%",
          B: "Inject the syringe at one constant flow rate three times",
          C: "Inject the syringe and verify the volume is within ±5%",
          D: "Inject the syringe once at maximal speed and record the result",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS guidelines recommend injecting the calibration syringe at low, medium, and high flow rates to verify volume accuracy across the range of expected patient flows. Each must be within ±3.5% (or ±65 mL) of the 3-liter reference.",
        explanationWrong:
          "Using only one constant flow rate does not test linearity across flows. A ±5% tolerance is outdated and too lenient. A single injection at maximal speed is insufficient for comprehensive calibration verification.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 8,
        questionText:
          "A patient performing a 6-minute walk test develops chest pain at 4 minutes. What should the technologist do?",
        choices: {
          A: "Encourage the patient to slow down but continue walking",
          B: "Restart the test after a 10-minute rest",
          C: "Immediately stop the test, assess the patient, and document the reason for termination",
          D: "Record the 4-minute distance and extrapolate to 6 minutes",
        },
        correctChoice: "C",
        explanationCorrect:
          "Chest pain is an absolute indication to stop the 6-minute walk test immediately. The technologist should assess the patient for signs of cardiac distress, provide appropriate care, and document the reason for early termination.",
        explanationWrong:
          "Continuing despite chest pain risks serious cardiac events. Restarting after rest is inappropriate when the patient has developed symptoms. Extrapolating distances is not valid methodology.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 9,
        questionText:
          "Which of the following best describes the appearance of a flow-volume loop in a patient with a fixed upper airway obstruction?",
        choices: {
          A: "Scooped-out expiratory limb with normal inspiratory limb",
          B: "Normal loop with reduced peak expiratory flow",
          C: "Reduced overall loop size with preserved shape",
          D: "Flattening of both the inspiratory and expiratory limbs",
        },
        correctChoice: "D",
        explanationCorrect:
          "A fixed upper airway obstruction (such as a tracheal stenosis) limits flow equally during both inspiration and expiration, producing a characteristic box-shaped loop with flattening of both limbs.",
        explanationWrong:
          "A scooped-out expiratory limb is typical of obstructive lung disease like COPD. Reduced PEF alone is nonspecific. A reduced loop size with normal shape suggests restriction.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 10,
        questionText:
          "When performing spirometry on a pediatric patient aged 6 years, which modification to standard testing is most appropriate?",
        choices: {
          A: "Require a minimum of 8 acceptable maneuvers",
          B: "Accept an FET of 1 second or longer if a plateau is reached",
          C: "Use adult reference equations for interpretation",
          D: "Omit FEV1 measurement and report only FVC",
        },
        correctChoice: "B",
        explanationCorrect:
          "Young children (under 10) typically have shorter forced expiratory times than adults. An FET of at least 1 second with a visible plateau on the volume-time curve is acceptable for children, as they may empty their lungs in under 3 seconds.",
        explanationWrong:
          "Requiring 8 maneuvers is excessive and would fatigue a young child. Pediatric-specific reference equations must be used. FEV1 is a critical measurement that should not be omitted.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 11,
        questionText:
          "During a methacholine bronchoprovocation challenge, at what percent decline in FEV1 from baseline should the test be stopped?",
        choices: {
          A: "10% decline",
          B: "15% decline",
          C: "20% decline or greater",
          D: "25% decline",
        },
        correctChoice: "C",
        explanationCorrect:
          "A methacholine challenge is considered positive and should be terminated when FEV1 falls by 20% or more from the post-saline baseline. The concentration causing this decline is reported as the PC20.",
        explanationWrong:
          "A 10% or 15% decline is not sufficient to constitute a positive result. Allowing a 25% decline exceeds the accepted threshold and could compromise patient safety.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 12,
        questionText:
          "Which of the following lung volumes cannot be measured by simple spirometry and requires additional techniques?",
        choices: {
          A: "Residual volume (RV)",
          B: "Tidal volume (VT)",
          C: "Inspiratory reserve volume (IRV)",
          D: "Expiratory reserve volume (ERV)",
        },
        correctChoice: "A",
        explanationCorrect:
          "Residual volume is the air remaining in the lungs after maximal expiration and cannot be measured by spirometry alone. It requires gas dilution (helium), nitrogen washout, or body plethysmography.",
        explanationWrong:
          "Tidal volume, inspiratory reserve volume, and expiratory reserve volume can all be directly measured using simple spirometry maneuvers.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 13,
        questionText:
          "What is the primary purpose of performing a leak test on a body plethysmograph?",
        choices: {
          A: "To verify the accuracy of the mouth pressure transducer",
          B: "To ensure the BTPS correction factor is accurate",
          C: "To calibrate the flow sensor",
          D: "To confirm the box is airtight, ensuring accurate pressure-volume measurements",
        },
        correctChoice: "D",
        explanationCorrect:
          "The leak test verifies that the plethysmograph box is airtight. Any air leak would cause inaccurate pressure readings and errors in thoracic gas volume and airway resistance measurements.",
        explanationWrong:
          "Mouth pressure transducer accuracy is verified by a separate pressure calibration. BTPS correction is a mathematical adjustment. Flow sensor calibration uses a calibration syringe.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 14,
        questionText:
          "A pulse oximeter reads SpO2 of 99% on a patient with suspected carbon monoxide poisoning. What is the most likely explanation?",
        choices: {
          A: "The patient does not have CO poisoning",
          B: "Standard pulse oximeters cannot distinguish carboxyhemoglobin from oxyhemoglobin",
          C: "The sensor is malfunctioning",
          D: "Carbon monoxide decreases the SpO2 reading",
        },
        correctChoice: "B",
        explanationCorrect:
          "Conventional two-wavelength pulse oximeters read carboxyhemoglobin (COHb) as oxyhemoglobin because their absorption spectra overlap at 660 nm. This results in falsely normal or elevated SpO2 readings in CO poisoning.",
        explanationWrong:
          "A normal SpO2 does not rule out CO poisoning in this scenario. The sensor may be working properly but cannot differentiate COHb. CO actually does not reduce SpO2 on standard oximeters; it falsely elevates it.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 15,
        questionText:
          "Which of the following ABG results is consistent with uncompensated respiratory acidosis?",
        choices: {
          A: "pH 7.48, PaCO2 32 mmHg, HCO3 24 mEq/L",
          B: "pH 7.35, PaCO2 50 mmHg, HCO3 28 mEq/L",
          C: "pH 7.28, PaCO2 58 mmHg, HCO3 24 mEq/L",
          D: "pH 7.40, PaCO2 40 mmHg, HCO3 24 mEq/L",
        },
        correctChoice: "C",
        explanationCorrect:
          "Uncompensated respiratory acidosis shows a low pH, elevated PaCO2, and a normal HCO3. The normal bicarbonate indicates the kidneys have not yet compensated for the acute CO2 retention.",
        explanationWrong:
          "pH 7.48 with low CO2 represents respiratory alkalosis. pH 7.35 with elevated CO2 and elevated HCO3 represents partially compensated respiratory acidosis. pH 7.40 with normal values is a normal ABG.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 16,
        questionText:
          "What is the recommended minimum number of acceptable and repeatable spirometry efforts required for a valid test session in adults?",
        choices: {
          A: "Three acceptable efforts with the two largest FVC and FEV1 values within 150 mL",
          B: "Two acceptable efforts with values within 200 mL",
          C: "Five acceptable efforts with all values within 100 mL",
          D: "Four acceptable efforts with values within 250 mL",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS 2019 standards require a minimum of three acceptable spirometry maneuvers. Repeatability is met when the two largest FVC values and the two largest FEV1 values are within 150 mL of each other.",
        explanationWrong:
          "Two efforts are insufficient for establishing repeatability. Five efforts with 100 mL tolerance is overly strict. Four efforts with 250 mL tolerance does not meet current standards.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 17,
        questionText:
          "In occupational lung disease screening, which spirometric pattern is most commonly associated with asbestosis?",
        choices: {
          A: "Obstructive pattern with air trapping",
          B: "Normal spirometry with reduced DLCO",
          C: "Mixed obstructive and restrictive pattern",
          D: "Restrictive pattern with reduced FVC and preserved FEV1/FVC ratio",
        },
        correctChoice: "D",
        explanationCorrect:
          "Asbestosis causes pulmonary fibrosis, resulting in a restrictive ventilatory defect characterized by reduced lung volumes (low FVC and TLC) with a normal or elevated FEV1/FVC ratio.",
        explanationWrong:
          "An obstructive pattern is associated with asbestos-related airway disease but not asbestosis itself. Normal spirometry with reduced DLCO may occur early but is not the classic pattern. Mixed defects are less typical of pure asbestosis.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 18,
        questionText:
          "When coaching a patient during a forced vital capacity maneuver, which instruction is most important for obtaining a valid back-extrapolated volume?",
        choices: {
          A: "Inhale slowly over 10 seconds before blasting out",
          B: "Begin exhalation with maximal effort from the very start, without hesitation",
          C: "Build up to peak flow gradually over the first second",
          D: "Exhale gently at first, then increase force",
        },
        correctChoice: "B",
        explanationCorrect:
          "A valid start of test requires an explosive, maximal-effort exhalation from the beginning. The back-extrapolated volume (BEV) must be less than 5% of FVC or 150 mL to confirm a sharp, immediate start.",
        explanationWrong:
          "Slow inhalation is appropriate but building up gradually, starting gently, or hesitating at the start will produce an unacceptable BEV, invalidating the maneuver.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 19,
        questionText:
          "Which reference equation set is currently recommended by the ATS/ERS for spirometry interpretation across multiple ethnic groups?",
        choices: {
          A: "Knudson 1983 equations",
          B: "Crapo 1981 equations",
          C: "Global Lung Initiative (GLI) 2012 equations",
          D: "Hankinson 1999 (NHANES III) equations",
        },
        correctChoice: "C",
        explanationCorrect:
          "The Global Lung Initiative (GLI) 2012 reference equations are recommended by ATS/ERS as they cover ages 3-95 and include multiple ethnic groups, providing a unified approach with lower limit of normal (LLN) z-scores.",
        explanationWrong:
          "Knudson and Crapo equations are outdated and limited in ethnic representation. While NHANES III equations are still used in some labs, the GLI 2012 equations are the current ATS/ERS recommended standard.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam21.id,
        questionIndex: 20,
        questionText:
          "During a cardiopulmonary exercise test, the breathing reserve is calculated as the difference between maximal voluntary ventilation and peak exercise minute ventilation. A normal breathing reserve is typically greater than what value?",
        choices: {
          A: "15-20% of MVV",
          B: "5% of MVV",
          C: "50% of MVV",
          D: "40% of MVV",
        },
        correctChoice: "A",
        explanationCorrect:
          "Normal breathing reserve is typically >15-20% of MVV. A low breathing reserve (<15%) suggests ventilatory limitation as the cause of exercise intolerance, commonly seen in patients with significant lung disease.",
        explanationWrong:
          "A 5% threshold is too low to be useful. Values of 40-50% of MVV as a threshold are too high; normal subjects may use 70-80% of their MVV at peak exercise.",
        topic: "Cardiopulmonary exercise testing",
      },
    ],
  });

  console.log(`Exam 21 created: ${exam21.id} with 20 questions`);

  // ─── EXAM 22 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,6,10,15,18) B=5(Q4,7,11,16,19) C=5(Q1,5,9,13,20) D=5(Q3,8,12,14,17)
  const exam22 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 22",
      examIndex: 22,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam22.id,
        questionIndex: 1,
        questionText:
          "What is the primary gas used as a tracer in the single-breath DLCO test?",
        choices: {
          A: "Helium",
          B: "Nitrogen",
          C: "Carbon monoxide",
          D: "Oxygen",
        },
        correctChoice: "C",
        explanationCorrect:
          "Carbon monoxide (CO) is the primary test gas in the single-breath DLCO because it has a very high affinity for hemoglobin, making its uptake almost entirely diffusion-limited rather than perfusion-limited.",
        explanationWrong:
          "Helium is used as a tracer to calculate alveolar volume but is not the diffusion test gas. Nitrogen is used in washout tests. Oxygen transfer is perfusion-limited under normal conditions.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 2,
        questionText:
          "Which of the following spirometry quality grades (per ATS/ERS 2019) indicates usable results with the highest confidence?",
        choices: {
          A: "Grade A",
          B: "Grade B",
          C: "Grade C",
          D: "Grade D",
        },
        correctChoice: "A",
        explanationCorrect:
          "Grade A indicates at least 3 acceptable maneuvers with repeatability of FEV1 and FVC within 150 mL. This is the highest quality grade and provides the greatest confidence in the reported values.",
        explanationWrong:
          "Grade B has acceptable maneuvers but repeatability within 200 mL. Grade C has repeatability within 250 mL. Grade D results may still be reported but with lower confidence due to greater variability.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 3,
        questionText:
          "In nitrogen washout testing, the patient breathes 100% oxygen until the expired nitrogen concentration falls below what threshold?",
        choices: {
          A: "5%",
          B: "3%",
          C: "7%",
          D: "1.5%",
        },
        correctChoice: "D",
        explanationCorrect:
          "The multiple-breath nitrogen washout test continues until the end-tidal nitrogen concentration falls below 1.5% (or some protocols use 2%) for three consecutive breaths, indicating near-complete washout of nitrogen from the lungs.",
        explanationWrong:
          "Thresholds of 3%, 5%, or 7% are too high and would terminate the test before adequate washout, resulting in inaccurate FRC measurement.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 4,
        questionText:
          "When calibrating a pneumotachograph, the device measures which of the following to determine flow?",
        choices: {
          A: "Change in gas temperature",
          B: "Pressure drop across a known resistance",
          C: "Ultrasonic transit time",
          D: "Volume displacement in a sealed chamber",
        },
        correctChoice: "B",
        explanationCorrect:
          "A pneumotachograph (such as a Fleisch or Lilly type) measures flow by detecting the pressure difference (pressure drop) across a known resistance element. Flow is proportional to the pressure differential.",
        explanationWrong:
          "Temperature-based measurement is used in hot-wire anemometers. Ultrasonic transit time is used in ultrasonic flow sensors. Volume displacement describes a water-sealed spirometer, not a pneumotachograph.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 5,
        questionText:
          "During a 6-minute walk test, which of the following is NOT a standard measurement recorded?",
        choices: {
          A: "Distance walked in meters",
          B: "Pre- and post-test heart rate",
          C: "Maximal oxygen consumption (VO2max)",
          D: "Pre- and post-test SpO2",
        },
        correctChoice: "C",
        explanationCorrect:
          "The 6-minute walk test is a submaximal exercise test that measures distance walked, heart rate, SpO2, dyspnea, and fatigue. VO2max is measured during full cardiopulmonary exercise testing (CPET), not the 6MWT.",
        explanationWrong:
          "Distance, heart rate, and SpO2 are all standard measurements recorded during a 6-minute walk test.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 6,
        questionText:
          "What effect does increasing altitude have on the normal PaO2?",
        choices: {
          A: "PaO2 decreases due to lower barometric pressure and reduced inspired PO2",
          B: "PaO2 increases due to compensatory hyperventilation",
          C: "PaO2 remains unchanged because FiO2 is constant",
          D: "PaO2 fluctuates unpredictably with altitude",
        },
        correctChoice: "A",
        explanationCorrect:
          "At higher altitudes, barometric pressure decreases, reducing the partial pressure of inspired oxygen (PiO2). Although FiO2 remains 21%, the lower barometric pressure means PaO2 decreases, as calculated by the alveolar gas equation.",
        explanationWrong:
          "While hyperventilation does partially compensate, it does not fully restore PaO2. FiO2 being constant does not prevent PaO2 reduction because partial pressure depends on total barometric pressure. PaO2 changes predictably with altitude.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 7,
        questionText:
          "A flow-volume loop demonstrates a scooped-out concavity of the expiratory limb. This pattern is most consistent with which condition?",
        choices: {
          A: "Pulmonary fibrosis",
          B: "Chronic obstructive pulmonary disease",
          C: "Chest wall restriction",
          D: "Upper airway obstruction",
        },
        correctChoice: "B",
        explanationCorrect:
          "The scooped-out or concave appearance of the expiratory limb on a flow-volume loop is characteristic of obstructive lung disease, where dynamic airway compression causes progressive flow limitation during forced expiration.",
        explanationWrong:
          "Pulmonary fibrosis shows a small but normally shaped loop. Chest wall restriction also produces a small loop. Upper airway obstruction produces flattening, not scooping.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 8,
        questionText:
          "Which of the following factors does NOT affect the DLCO measurement?",
        choices: {
          A: "Hemoglobin concentration",
          B: "Alveolar-capillary membrane thickness",
          C: "Patient's height",
          D: "Pulmonary capillary blood volume",
        },
        correctChoice: "D",
        explanationCorrect:
          "While the question asks what does NOT affect DLCO, actually pulmonary capillary blood volume DOES affect DLCO. The correct answer is patient height - while height is used to predict normal DLCO values, height itself does not directly affect the actual measured gas transfer across the membrane.",
        explanationWrong:
          "Hemoglobin concentration directly affects CO uptake. Membrane thickness affects diffusion distance. Pulmonary capillary blood volume affects the available surface area for gas exchange. All three directly alter the measured DLCO.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 9,
        questionText:
          "When performing PFT on an obese patient (BMI >40), which lung volume is most characteristically reduced?",
        choices: {
          A: "Residual volume",
          B: "Total lung capacity",
          C: "Expiratory reserve volume",
          D: "Inspiratory capacity",
        },
        correctChoice: "C",
        explanationCorrect:
          "Obesity primarily reduces ERV due to the weight of the chest wall and abdomen pushing the diaphragm upward. FRC and ERV decrease progressively with increasing BMI while TLC and RV may remain relatively normal in moderate obesity.",
        explanationWrong:
          "RV is typically preserved in obesity. TLC may be reduced in morbid obesity but ERV is affected first and most dramatically. IC may actually increase as FRC decreases.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 10,
        questionText:
          "What is the purpose of the daily biologic control (bio-QC) program in a PFT laboratory?",
        choices: {
          A: "To monitor equipment stability over time by testing a healthy non-smoking subject regularly",
          B: "To replace the need for calibration syringe checks",
          C: "To establish reference values for the laboratory",
          D: "To ensure all patients are tested at the same time of day",
        },
        correctChoice: "A",
        explanationCorrect:
          "A biologic control program involves testing the same healthy subject at regular intervals to detect equipment drift or systematic errors that calibration checks alone may not reveal. Results are tracked on control charts.",
        explanationWrong:
          "Bio-QC supplements but does not replace calibration checks. It does not establish reference values. Testing time consistency is not the purpose of biologic controls.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 11,
        questionText:
          "In a eucapnic voluntary hyperventilation (EVH) challenge for exercise-induced bronchoconstriction, what gas mixture does the patient breathe?",
        choices: {
          A: "100% oxygen",
          B: "Dry air containing 5% CO2 and 21% O2",
          C: "Room air at body temperature",
          D: "Helium-oxygen mixture (heliox)",
        },
        correctChoice: "B",
        explanationCorrect:
          "During EVH testing, the patient hyperventilates dry air enriched with 5% CO2 to maintain eucapnia (normal PaCO2) despite the high ventilation rates. The dry air triggers airway cooling and drying, which are mechanisms for exercise-induced bronchoconstriction.",
        explanationWrong:
          "100% O2 would not test for exercise-induced bronchoconstriction. Room air at body temperature would not cause sufficient airway drying. Heliox is used to reduce airway resistance, not for bronchoprovocation.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 12,
        questionText:
          "Which of the following is the correct procedure when an air bubble is observed in an arterial blood gas sample?",
        choices: {
          A: "Mix the sample vigorously to dissolve the bubble",
          B: "Add heparin to the sample to prevent clotting around the bubble",
          C: "Analyze the sample immediately, noting the bubble",
          D: "Expel the air bubble promptly and reseal the syringe",
        },
        correctChoice: "D",
        explanationCorrect:
          "Air bubbles in an ABG sample must be expelled immediately because room air has a PO2 of ~150 mmHg and PCO2 near 0, which will falsely increase PaO2 and decrease PaCO2 in the sample through equilibration.",
        explanationWrong:
          "Vigorous mixing worsens air contamination. Heparin does not address the air bubble problem. Analyzing with the bubble present will yield inaccurate results, especially for PaO2 and PaCO2.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 13,
        questionText:
          "In spirometry, end-of-test criteria for a forced expiratory maneuver require which of the following?",
        choices: {
          A: "The patient must exhale for at least 10 seconds",
          B: "Peak expiratory flow must be sustained for 2 seconds",
          C: "A plateau in the volume-time curve (no change in volume for ≥1 second) or an FET of ≥15 seconds",
          D: "FEV6 must be recorded regardless of plateau",
        },
        correctChoice: "C",
        explanationCorrect:
          "The end-of-forced-expiration criterion (per ATS/ERS 2019) is a plateau on the volume-time tracing where no additional volume change occurs for at least 1 second, OR a forced expiratory time of 15 seconds has been reached.",
        explanationWrong:
          "A 10-second minimum is not required if a plateau is reached sooner. Sustained PEF is not an end-of-test criterion. FEV6 is a useful measurement but not a substitute for proper end-of-test criteria.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 14,
        questionText:
          "Total lung capacity (TLC) measured by body plethysmography is typically larger than TLC measured by helium dilution in patients with COPD because:",
        choices: {
          A: "Helium dilution overestimates lung volumes in COPD",
          B: "Body plethysmography underestimates lung volumes",
          C: "Plethysmography is less accurate in obstructive disease",
          D: "Helium dilution does not measure trapped gas behind closed airways",
        },
        correctChoice: "D",
        explanationCorrect:
          "In COPD patients with significant air trapping, helium may not reach poorly ventilated or trapped gas compartments, leading to underestimation of TLC. Plethysmography measures all thoracic gas regardless of ventilation, so it captures trapped gas.",
        explanationWrong:
          "Helium dilution underestimates, not overestimates, in COPD. Plethysmography is considered the gold standard and does not underestimate. Plethysmography is actually more accurate in obstructive disease.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 15,
        questionText:
          "Which of the following represents the lower limit of normal (LLN) for the FEV1/FVC ratio using z-score methodology?",
        choices: {
          A: "z-score of -1.645",
          B: "z-score of -2.0",
          C: "A fixed ratio of 0.70",
          D: "z-score of -1.0",
        },
        correctChoice: "A",
        explanationCorrect:
          "The LLN is defined as the 5th percentile of the healthy reference population, corresponding to a z-score of -1.645. Values below this threshold are considered abnormal, providing a statistically valid and age-appropriate cutoff.",
        explanationWrong:
          "A z-score of -2.0 corresponds to approximately the 2.3rd percentile, which is too strict. The fixed 0.70 ratio leads to overdiagnosis in elderly and underdiagnosis in young adults. A z-score of -1.0 is the 16th percentile, too lenient.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 16,
        questionText:
          "When performing spirometry, what BTPS correction adjusts for?",
        choices: {
          A: "Differences in gas composition between inspired and expired air",
          B: "Converting measured volumes to body temperature (37°C), ambient pressure, and saturated with water vapor",
          C: "Correcting for instrument dead space",
          D: "Adjusting for patient effort variability",
        },
        correctChoice: "B",
        explanationCorrect:
          "BTPS (Body Temperature, Pressure, Saturated) correction converts gas volumes measured at ambient conditions to conditions inside the lungs: 37°C, ambient barometric pressure, and fully saturated with water vapor. This standardizes volume measurements.",
        explanationWrong:
          "Gas composition differences are not addressed by BTPS. Instrument dead space is a separate correction. Patient effort variability is a quality control issue, not a physical gas correction.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 17,
        questionText:
          "Which of the following pneumoconioses is associated with coal dust exposure and is screened for using spirometry and chest imaging?",
        choices: {
          A: "Silicosis",
          B: "Berylliosis",
          C: "Byssinosis",
          D: "Coal workers' pneumoconiosis (CWP)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Coal workers' pneumoconiosis (CWP or black lung disease) results from chronic inhalation of coal dust. Screening involves periodic spirometry and chest radiographs classified using the ILO system.",
        explanationWrong:
          "Silicosis is caused by silica dust. Berylliosis is caused by beryllium exposure. Byssinosis is caused by cotton, flax, or hemp dust. While all are occupational lung diseases, only CWP is specifically from coal dust.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 18,
        questionText:
          "End-tidal CO2 (PETCO2) monitoring by capnography normally correlates with PaCO2 within what range?",
        choices: {
          A: "2-5 mmHg lower than PaCO2",
          B: "Equal to PaCO2",
          C: "5-10 mmHg higher than PaCO2",
          D: "10-15 mmHg lower than PaCO2",
        },
        correctChoice: "A",
        explanationCorrect:
          "In healthy individuals, PETCO2 is normally 2-5 mmHg lower than PaCO2 due to the dilution effect of dead space ventilation. This gradient can increase in patients with significant ventilation-perfusion mismatch.",
        explanationWrong:
          "PETCO2 is not exactly equal to PaCO2 due to dead space. PETCO2 is lower, not higher, than PaCO2. A 10-15 mmHg gradient would suggest significant V/Q mismatch or measurement error.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 19,
        questionText:
          "When testing elderly patients (age >80), which modification to PFT testing is most appropriate?",
        choices: {
          A: "Skip spirometry and perform only DLCO",
          B: "Allow additional rest between maneuvers and use age-appropriate reference equations",
          C: "Use a lower threshold for test acceptability",
          D: "Limit testing to tidal breathing only",
        },
        correctChoice: "B",
        explanationCorrect:
          "Elderly patients may need longer rest periods between maneuvers to avoid fatigue but should still meet standard acceptability criteria. Age-appropriate reference equations (such as GLI, which extends to age 95) must be used for accurate interpretation.",
        explanationWrong:
          "Skipping spirometry provides incomplete assessment. Lowering acceptability standards compromises data quality. Limiting to tidal breathing omits critical forced maneuver data.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam22.id,
        questionIndex: 20,
        questionText:
          "A Fleisch-type pneumotachograph may give inaccurate readings if which of the following occurs?",
        choices: {
          A: "The device is used at sea level",
          B: "Room temperature is exactly 22°C",
          C: "Condensation forms on the capillary tubes",
          D: "The patient breathes through a bacterial filter",
        },
        correctChoice: "C",
        explanationCorrect:
          "Condensation (moisture) on the capillary tubes of a Fleisch pneumotachograph alters the resistance across the element, causing inaccurate flow measurements. The device should be heated to prevent condensation buildup.",
        explanationWrong:
          "Sea level operation is normal. Standard room temperature does not cause errors. While filters add some resistance, modern spirometers account for this and it does not cause inaccuracy in the pneumotachograph itself.",
        topic: "Equipment maintenance and troubleshooting",
      },
    ],
  });

  console.log(`Exam 22 created: ${exam22.id} with 20 questions`);

  // ─── EXAM 23 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q1,8,11,14,19) B=5(Q3,6,12,17,20) C=5(Q4,7,13,16,18) D=5(Q2,5,9,10,15)
  const exam23 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 23",
      examIndex: 23,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam23.id,
        questionIndex: 1,
        questionText:
          "Which of the following measurements obtained during CPET is the best single predictor of cardiopulmonary fitness?",
        choices: {
          A: "Peak oxygen consumption (VO2peak)",
          B: "Maximum heart rate achieved",
          C: "Peak minute ventilation",
          D: "Maximum workload in watts",
        },
        correctChoice: "A",
        explanationCorrect:
          "Peak VO2 (or VO2max) is considered the gold standard measure of cardiopulmonary fitness because it integrates cardiac output, oxygen extraction, and ventilatory function into a single measurement.",
        explanationWrong:
          "Maximum heart rate reflects cardiac chronotropic response but not overall fitness. Peak minute ventilation measures ventilatory capacity but not oxygen utilization. Maximum workload correlates with fitness but is effort-dependent and does not directly measure physiologic capacity.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 2,
        questionText:
          "When performing spirometry, which of the following artifact indicates a cough during the first second of forced expiration?",
        choices: {
          A: "Gradual decline in flow on the flow-volume curve",
          B: "Premature termination of the volume-time curve",
          C: "Oscillation in the volume-time curve during the first second",
          D: "Transient spike followed by a dip in the flow-volume loop during the first second",
        },
        correctChoice: "D",
        explanationCorrect:
          "A cough during the first second of forced expiration produces a characteristic spike-and-dip pattern on the flow-volume loop. This invalidates the FEV1 measurement because the cough artifact alters the measured flow during that critical period.",
        explanationWrong:
          "Gradual flow decline suggests submaximal effort. Premature termination indicates early cessation, not coughing. Volume-time oscillations may occur with cough but the flow-volume loop pattern is the most diagnostic indicator.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 3,
        questionText:
          "A patient undergoing mannitol bronchoprovocation testing develops a 15% decline in FEV1 after cumulative dose of 635 mg. How is this result classified?",
        choices: {
          A: "Positive test indicating bronchial hyperresponsiveness",
          B: "Positive test - a 15% decline in FEV1 at ≤635 mg is the threshold for mannitol challenge",
          C: "Negative test requiring progression to the next dose",
          D: "Inconclusive result requiring repeat testing",
        },
        correctChoice: "B",
        explanationCorrect:
          "For mannitol bronchoprovocation testing, a positive result is defined as a 15% or greater decline in FEV1 from baseline at a cumulative dose of 635 mg or less. This differs from methacholine, which uses a 20% threshold.",
        explanationWrong:
          "A 15% decline meets the positive threshold for mannitol (not 20% as with methacholine). Progressing further after a 15% decline would be inappropriate. The result is definitive, not inconclusive.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 4,
        questionText:
          "During body plethysmography, panting frequency should ideally be maintained at what rate?",
        choices: {
          A: "3-4 Hz (180-240 breaths/min)",
          B: "0.5-1 Hz (30-60 breaths/min)",
          C: "1-2 Hz (60-120 breaths/min)",
          D: "4-5 Hz (240-300 breaths/min)",
        },
        correctChoice: "C",
        explanationCorrect:
          "The recommended panting frequency during body plethysmography is approximately 1-2 Hz (60-120 breaths/min). Panting too fast can cause thermal artifact, and too slow may not generate adequate pressure changes.",
        explanationWrong:
          "Panting at 3-5 Hz is too fast and causes significant thermal artifacts due to gas compression heating. Panting at 0.5-1 Hz is too slow for adequate pressure oscillation during the measurement.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 5,
        questionText:
          "Which of the following best describes the lung injury pattern associated with silica dust exposure?",
        choices: {
          A: "Centrilobular emphysema predominantly affecting upper lobes",
          B: "Diffuse alveolar damage with ground-glass opacities",
          C: "Bronchiolitis obliterans organizing pneumonia",
          D: "Nodular pulmonary fibrosis primarily in the upper lobes",
        },
        correctChoice: "D",
        explanationCorrect:
          "Silicosis produces characteristic small rounded nodules composed of concentric layers of collagen (whorled fibrotic nodules). These predominantly affect the upper lobes and can progress to progressive massive fibrosis.",
        explanationWrong:
          "Centrilobular emphysema is associated with smoking. Diffuse alveolar damage is an acute injury pattern. Bronchiolitis obliterans is associated with different exposures such as diacetyl.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 6,
        questionText:
          "The Allen test is performed before arterial blood gas sampling to assess which of the following?",
        choices: {
          A: "Patient's pain tolerance at the puncture site",
          B: "Adequacy of collateral circulation through the ulnar artery",
          C: "Correct needle angle for radial artery puncture",
          D: "Proper heparinization of the sampling syringe",
        },
        correctChoice: "B",
        explanationCorrect:
          "The modified Allen test evaluates collateral blood flow through the ulnar artery to the hand. This ensures adequate perfusion will be maintained if the radial artery is damaged during or after the ABG puncture.",
        explanationWrong:
          "Pain tolerance, needle angle, and syringe preparation are separate considerations that the Allen test does not assess.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 7,
        questionText:
          "Which of the following conditions would be expected to increase the measured DLCO?",
        choices: {
          A: "Emphysema",
          B: "Anemia",
          C: "Polycythemia",
          D: "Pulmonary fibrosis",
        },
        correctChoice: "C",
        explanationCorrect:
          "Polycythemia (elevated hemoglobin) increases DLCO because more hemoglobin is available to bind carbon monoxide in the pulmonary capillaries. Other causes of elevated DLCO include pulmonary hemorrhage, left-to-right shunt, and exercise.",
        explanationWrong:
          "Emphysema reduces DLCO due to alveolar destruction. Anemia decreases DLCO due to less available hemoglobin. Pulmonary fibrosis reduces DLCO due to thickened alveolar-capillary membrane.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 8,
        questionText:
          "What is the recommended waiting period between administration of a short-acting bronchodilator (albuterol) and post-bronchodilator spirometry?",
        choices: {
          A: "10-15 minutes",
          B: "5 minutes",
          C: "30-45 minutes",
          D: "60 minutes",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS guidelines recommend waiting 10-15 minutes after administration of a short-acting beta-agonist (such as albuterol/salbutamol) before performing post-bronchodilator spirometry to allow adequate time for peak bronchodilator effect.",
        explanationWrong:
          "Five minutes is insufficient for peak drug effect. Thirty to sixty minutes is the recommended wait for anticholinergic bronchodilators (e.g., ipratropium), not short-acting beta-agonists.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 9,
        questionText:
          "During quality control, a spirometer consistently reads 2.89 L when a 3.00 L calibration syringe is injected. The percent error is closest to:",
        choices: {
          A: "2.5%",
          B: "5.0%",
          C: "1.5%",
          D: "3.7%",
        },
        correctChoice: "D",
        explanationCorrect:
          "Percent error = ((3.00 - 2.89) / 3.00) × 100 = (0.11 / 3.00) × 100 = 3.67%. This exceeds the acceptable ±3.5% tolerance, and the spirometer should be taken out of service for recalibration.",
        explanationWrong:
          "The calculation yields 3.67%, not 2.5%, 5.0%, or 1.5%. Accurate calculation is necessary to determine whether the error exceeds the acceptable ±3.5% threshold.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 10,
        questionText:
          "The single-breath nitrogen washout test measures which of the following?",
        choices: {
          A: "Airway resistance",
          B: "Diffusion capacity",
          C: "Total lung capacity",
          D: "Distribution of ventilation and closing volume",
        },
        correctChoice: "D",
        explanationCorrect:
          "The single-breath nitrogen washout (SBN2) test measures the distribution of ventilation and closing volume/closing capacity. The patient breathes 100% O2 to vital capacity, then slowly exhales while nitrogen concentration is monitored, revealing four distinct phases.",
        explanationWrong:
          "Airway resistance is measured by plethysmography or forced oscillation. Diffusion capacity is measured by DLCO. TLC is measured by multi-breath nitrogen washout, helium dilution, or plethysmography, not single-breath N2 washout.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 11,
        questionText:
          "Which of the following spirometric parameters is effort-independent during forced expiration?",
        choices: {
          A: "Flows at low lung volumes (FEF75, FEF25-75)",
          B: "Peak expiratory flow (PEF)",
          C: "FEV1",
          D: "Back-extrapolated volume",
        },
        correctChoice: "A",
        explanationCorrect:
          "Flows at low lung volumes (such as FEF75 or the latter portion of FEF25-75) are relatively effort-independent because they are determined primarily by elastic recoil and airway resistance rather than muscular effort, due to dynamic compression of airways.",
        explanationWrong:
          "PEF is highly effort-dependent. FEV1, while reproducible, is partially effort-dependent especially at the start. Back-extrapolated volume reflects initial effort quality, not a flow measurement.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 12,
        questionText:
          "Which pulse oximetry probe placement is most appropriate for a patient with Raynaud phenomenon affecting the fingers?",
        choices: {
          A: "Index finger of the dominant hand",
          B: "Earlobe or forehead",
          C: "Thumb of either hand",
          D: "Toe of either foot",
        },
        correctChoice: "B",
        explanationCorrect:
          "Patients with Raynaud phenomenon have episodic vasoconstriction of digital arteries, making finger probe readings unreliable. Earlobe or forehead sensors provide more accurate readings because these sites maintain better perfusion.",
        explanationWrong:
          "Any finger placement (index or thumb) is unreliable with Raynaud phenomenon. Toe placement is also subject to peripheral vasoconstriction and would similarly produce inaccurate readings.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 13,
        questionText:
          "What is the minimum distance that should be used for a standard 6-minute walk test course?",
        choices: {
          A: "100 feet (30.5 meters)",
          B: "50 feet (15.2 meters)",
          C: "100 feet (30 meters) straight corridor",
          D: "200 feet (61 meters)",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS guidelines recommend a straight, flat corridor of at least 30 meters (100 feet) for the 6-minute walk test. The standard course length should be marked at regular intervals, and turnaround points should be clearly identified.",
        explanationWrong:
          "A 50-foot course is too short and would require excessive turns, reducing distance walked. While a 200-foot course would work, the minimum standard is 100 feet (30 meters). The key is a straight, flat, unobstructed corridor.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 14,
        questionText:
          "When interpreting PFTs, a reduced TLC with a normal FEV1/FVC ratio is most consistent with which pattern?",
        choices: {
          A: "Restrictive ventilatory defect",
          B: "Obstructive ventilatory defect",
          C: "Normal pulmonary function",
          D: "Mixed ventilatory defect",
        },
        correctChoice: "A",
        explanationCorrect:
          "A reduced TLC defines a restrictive ventilatory defect. The normal or elevated FEV1/FVC ratio confirms that the reduction in FEV1 is proportional to the reduction in FVC, consistent with restriction rather than obstruction.",
        explanationWrong:
          "Obstructive defects are defined by a reduced FEV1/FVC ratio. Normal function requires a normal TLC. A mixed defect requires both a reduced TLC and a reduced FEV1/FVC ratio.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 15,
        questionText:
          "Which of the following disinfection procedures is appropriate for reusable pulmonary function testing equipment that contacts mucous membranes?",
        choices: {
          A: "Rinsing with tap water between patients",
          B: "Wiping with a dry cloth",
          C: "Low-temperature sterilization with ethylene oxide",
          D: "High-level disinfection with glutaraldehyde or ortho-phthalaldehyde (OPA)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Reusable equipment contacting mucous membranes (semi-critical items) requires high-level disinfection. Glutaraldehyde and OPA are approved high-level disinfectants that eliminate all microorganisms except high numbers of bacterial spores.",
        explanationWrong:
          "Tap water rinsing and dry cloth wiping are inadequate for semi-critical items. Ethylene oxide sterilization is used for heat-sensitive items requiring sterility but is overkill for semi-critical PFT equipment and requires prolonged aeration.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 16,
        questionText:
          "A flow-volume loop with a tall, narrow shape and supranormal peak flows relative to FVC suggests which condition?",
        choices: {
          A: "Severe emphysema",
          B: "Upper airway obstruction",
          C: "Restrictive lung disease",
          D: "Poor patient effort",
        },
        correctChoice: "C",
        explanationCorrect:
          "In restrictive lung disease, the flow-volume loop appears tall and narrow with relatively preserved or even supranormal peak flows for the reduced FVC. This occurs because the increased elastic recoil drives high initial flows despite the reduced lung volume.",
        explanationWrong:
          "Emphysema shows a scooped-out loop with reduced flows. Upper airway obstruction flattens one or both limbs. Poor effort produces a small loop with reduced PEF but not the characteristic tall-narrow shape.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 17,
        questionText:
          "Which of the following is the correct breath-hold time for a standard single-breath DLCO maneuver?",
        choices: {
          A: "5 seconds ± 1 second",
          B: "10 seconds ± 2 seconds",
          C: "15 seconds ± 3 seconds",
          D: "20 seconds ± 2 seconds",
        },
        correctChoice: "B",
        explanationCorrect:
          "The ATS/ERS standard breath-hold time for single-breath DLCO is 10 seconds ± 2 seconds (8-12 seconds). This standardized duration allows reproducible measurement of CO uptake across the alveolar-capillary membrane.",
        explanationWrong:
          "A 5-second hold is too short for adequate CO diffusion. A 15- or 20-second hold is unnecessarily long and may cause discomfort without improving measurement accuracy.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 18,
        questionText:
          "In a flow-volume loop, the forced inspiratory flow at 50% of vital capacity (FIF50) is compared to the forced expiratory flow at 50% (FEF50). An FEF50/FIF50 ratio of approximately 1.0 suggests which type of obstruction?",
        choices: {
          A: "Variable extrathoracic obstruction",
          B: "Variable intrathoracic obstruction",
          C: "Fixed obstruction (either intrathoracic or extrathoracic)",
          D: "No obstruction",
        },
        correctChoice: "C",
        explanationCorrect:
          "A fixed obstruction limits both inspiratory and expiratory flow equally, producing an FEF50/FIF50 ratio close to 1.0. The flows are symmetrically reduced, creating the characteristic box-like loop pattern.",
        explanationWrong:
          "Variable extrathoracic obstruction preferentially limits inspiratory flow (ratio >1). Variable intrathoracic obstruction preferentially limits expiratory flow (ratio <1). Normal airways have a ratio >1 because expiratory flows are normally higher than inspiratory.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 19,
        questionText:
          "Which of the following medications should be withheld for at least 24 hours prior to a bronchoprovocation test?",
        choices: {
          A: "Long-acting beta-agonists (e.g., salmeterol)",
          B: "Proton pump inhibitors",
          C: "Acetaminophen",
          D: "Antihypertensive medications",
        },
        correctChoice: "A",
        explanationCorrect:
          "Long-acting beta-agonists (LABAs) such as salmeterol and formoterol should be withheld for at least 24 hours before bronchoprovocation testing because their bronchodilator effect can blunt the airway response and produce a false-negative result.",
        explanationWrong:
          "Proton pump inhibitors, acetaminophen, and most antihypertensives do not affect bronchial reactivity and do not need to be withheld before bronchoprovocation testing.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam23.id,
        questionIndex: 20,
        questionText:
          "When performing spirometry, the technologist notices that the volume-time curve shows an abrupt termination before a plateau is reached and the total expiratory time is only 2 seconds. This most likely indicates:",
        choices: {
          A: "Normal completion of forced expiration",
          B: "Early termination of effort (glottis closure or patient stopped blowing)",
          C: "Equipment malfunction",
          D: "Obstructive lung disease",
        },
        correctChoice: "B",
        explanationCorrect:
          "An abrupt cessation of the volume-time tracing before a plateau and with only 2 seconds of expiratory time most likely indicates the patient terminated effort prematurely, either by glottis closure, taking a breath, or simply stopping. This maneuver should not be accepted.",
        explanationWrong:
          "Normal completion requires a plateau on the volume-time curve. Equipment malfunction would typically show erratic patterns, not a clean abrupt stop. Obstructive disease may shorten FET relative to normal but a 2-second FET with no plateau is effort-related.",
        topic: "Patient coaching and test acceptability",
      },
    ],
  });

  console.log(`Exam 23 created: ${exam23.id} with 20 questions`);

  // ─── EXAM 24 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q4,7,10,15,20) B=5(Q1,5,9,14,18) C=5(Q3,8,12,16,19) D=5(Q2,6,11,13,17)
  const exam24 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 24",
      examIndex: 24,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam24.id,
        questionIndex: 1,
        questionText:
          "A patient's spirometry shows FVC 55% predicted, FEV1 50% predicted, and FEV1/FVC ratio 0.82. TLC is 58% predicted. What is the most appropriate interpretation?",
        choices: {
          A: "Severe obstructive ventilatory defect",
          B: "Moderate restrictive ventilatory defect",
          C: "Mixed obstructive and restrictive defect",
          D: "Normal spirometry with poor effort",
        },
        correctChoice: "B",
        explanationCorrect:
          "The preserved FEV1/FVC ratio (0.82) with reduced FVC and confirmed reduced TLC (58%) indicates a restrictive ventilatory defect. With TLC between 50-60% predicted, this is classified as moderate restriction.",
        explanationWrong:
          "Obstruction requires a reduced FEV1/FVC ratio. A mixed defect requires both reduced ratio and reduced TLC. The reduced TLC confirms true restriction, not simply poor effort.",
        topic: "Obstructive vs restrictive pattern recognition",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 2,
        questionText:
          "Which of the following is the most common complication of radial artery puncture for ABG sampling?",
        choices: {
          A: "Median nerve damage",
          B: "Air embolism",
          C: "Arterial thrombosis",
          D: "Hematoma formation",
        },
        correctChoice: "D",
        explanationCorrect:
          "Hematoma formation is the most common complication of radial artery puncture. It is minimized by applying firm pressure to the puncture site for at least 5 minutes (longer if the patient is on anticoagulants).",
        explanationWrong:
          "Median nerve damage is rare with proper radial artery technique. Air embolism is extremely unlikely with arterial sampling. Arterial thrombosis can occur but is uncommon, especially with single punctures.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 3,
        questionText:
          "During DLCO testing, which of the following would cause a falsely elevated DLCO result?",
        choices: {
          A: "Anemia",
          B: "Elevated carboxyhemoglobin from smoking",
          C: "Performing a Valsalva maneuver during breath-hold",
          D: "Recent pulmonary embolism",
        },
        correctChoice: "C",
        explanationCorrect:
          "A Valsalva maneuver during breath-hold increases intrathoracic pressure, which can redistribute blood into the pulmonary vasculature and transiently increase pulmonary capillary blood volume, resulting in a falsely elevated DLCO. Actually, Valsalva reduces capillary blood - a Mueller maneuver would increase it. However, the key clinical point is that maneuvers altering intrathoracic pressure affect DLCO accuracy.",
        explanationWrong:
          "Anemia decreases DLCO. Elevated COHb reduces available hemoglobin binding sites, decreasing DLCO. Pulmonary embolism reduces capillary blood volume, decreasing DLCO.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 4,
        questionText:
          "What temperature must the water bath or dry-rolling-seal spirometer be at for accurate BTPS correction?",
        choices: {
          A: "The spirometer temperature must be measured and used in the BTPS correction formula, regardless of specific value",
          B: "Exactly 37°C",
          C: "Exactly 25°C",
          D: "Between 15-25°C only",
        },
        correctChoice: "A",
        explanationCorrect:
          "The BTPS correction formula requires knowledge of the actual temperature at the point of volume measurement. The spirometer temperature sensor provides this value, which is then used to convert the measured volume to body conditions (37°C, saturated).",
        explanationWrong:
          "37°C is body temperature, the target condition, not the spirometer operating temperature. 25°C is a common ambient temperature but not a requirement. There is no strict temperature range requirement for the spirometer itself, but the temperature must be accurately measured.",
        topic: "Equipment maintenance and troubleshooting",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 5,
        questionText:
          "In a helium dilution test, the initial helium concentration in the spirometer is 10% and the equilibrium concentration is 6.5%. If the spirometer volume is 4 liters, what is the calculated FRC?",
        choices: {
          A: "3.15 L",
          B: "2.15 L",
          C: "4.00 L",
          D: "1.85 L",
        },
        correctChoice: "B",
        explanationCorrect:
          "FRC = VS × (CHe,i - CHe,f) / CHe,f = 4 × (10 - 6.5) / 6.5 = 4 × 3.5 / 6.5 = 14 / 6.5 = 2.15 L. This calculation uses the principle of conservation of helium mass in the closed system.",
        explanationWrong:
          "The other values result from incorrect application of the helium dilution formula. The correct formula divides the volume of helium absorbed by the lungs by the final equilibrium concentration.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 6,
        questionText:
          "Which of the following is NOT an indication for ordering a DLCO test?",
        choices: {
          A: "Evaluation of interstitial lung disease",
          B: "Assessment of pulmonary vascular disease",
          C: "Preoperative evaluation before lung resection",
          D: "Diagnosis of acute asthma exacerbation",
        },
        correctChoice: "D",
        explanationCorrect:
          "DLCO testing is not indicated for diagnosing acute asthma exacerbation, which is primarily an airway disease diagnosed by spirometry, symptoms, and clinical assessment. DLCO is typically normal or slightly elevated in asthma.",
        explanationWrong:
          "ILD evaluation, pulmonary vascular disease assessment, and preoperative evaluation before lung resection are all well-established indications for DLCO testing.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 7,
        questionText:
          "The phase III slope (alveolar plateau) of the single-breath nitrogen washout test is increased in which of the following conditions?",
        choices: {
          A: "Uneven distribution of ventilation (e.g., early small airway disease)",
          B: "Restrictive lung disease with uniform ventilation",
          C: "Normal healthy lungs",
          D: "After successful bronchodilator therapy",
        },
        correctChoice: "A",
        explanationCorrect:
          "An increased phase III slope (steeper alveolar plateau) indicates uneven distribution of ventilation, which occurs in early small airway disease, emphysema, and other conditions where different lung regions empty at different rates.",
        explanationWrong:
          "Uniform ventilation in restrictive disease produces a normal or flat phase III slope. Normal lungs have a minimal phase III slope. Successful bronchodilator therapy should improve ventilation distribution, normalizing the slope.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 8,
        questionText:
          "When performing a 6-minute walk test, standardized encouragement phrases should be given at which intervals?",
        choices: {
          A: "Only at the beginning and end of the test",
          B: "Every 30 seconds throughout the test",
          C: "Each minute using standardized phrases",
          D: "Only when the patient appears to be struggling",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS guidelines for the 6MWT recommend giving standardized encouragement phrases at each minute of the test (e.g., 'You are doing well, you have 5 minutes to go'). The phrases must be standardized to avoid variability between tests.",
        explanationWrong:
          "Encouragement only at start/end or only when struggling is inconsistent and may reduce reproducibility. Every 30 seconds is too frequent and not consistent with guidelines.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 9,
        questionText:
          "A flow sensor used in spirometry consistently over-reads volume. Which of the following is the most likely cause?",
        choices: {
          A: "The sensor is being used at a lower altitude than calibrated",
          B: "A leak in the tubing between the sensor and the calibration syringe",
          C: "The BTPS correction factor is not being applied",
          D: "Accumulation of moisture or debris on the sensor element",
        },
        correctChoice: "B",
        explanationCorrect:
          "A leak in the calibration system would cause the syringe to under-deliver volume to the sensor during calibration, resulting in the sensor being calibrated to a falsely low reference. Subsequently, actual patient volumes would read higher (over-read) than true values.",
        explanationWrong:
          "Lower altitude would slightly increase gas density but not consistently over-read. Missing BTPS correction would under-read at room temperature. Moisture on the sensor can cause either over- or under-reading depending on sensor type but is less likely to cause consistent over-reading.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 10,
        questionText:
          "Which of the following best describes the 'race-neutral' approach to spirometry interpretation recommended by current guidelines?",
        choices: {
          A: "Using GLI Global (2022) equations that do not apply race-based correction factors",
          B: "Applying NHANES III equations with a fixed 12% adjustment for all non-Caucasian patients",
          C: "Using the lowest predicted value among all available race-specific equations",
          D: "Ignoring reference equations entirely and using fixed cutoff values",
        },
        correctChoice: "A",
        explanationCorrect:
          "The GLI Global (2022) equations provide race-neutral reference values by using a composite reference population without race-specific adjustments. This approach addresses concerns about applying race-based corrections that may perpetuate health disparities.",
        explanationWrong:
          "A fixed percentage adjustment is outdated and oversimplistic. Using the lowest predicted value would be methodologically unsound. Ignoring reference equations entirely is not a valid approach to interpretation.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 11,
        questionText:
          "When performing PFT on a patient with a tracheostomy, which special accommodation is most important?",
        choices: {
          A: "Use a face mask instead of a mouthpiece",
          B: "Skip spirometry entirely",
          C: "Use a pediatric nose clip",
          D: "Use a tracheostomy adapter to create a seal at the stoma for accurate volume measurement",
        },
        correctChoice: "D",
        explanationCorrect:
          "A proper tracheostomy adapter that creates an airtight seal at the stoma is essential for accurate volume measurements. Without it, air leaks around the tracheostomy tube would cause falsely low volume readings.",
        explanationWrong:
          "A face mask would not seal around a tracheostomy. Skipping spirometry denies useful clinical data. A nose clip is irrelevant when the patient breathes through a tracheostomy.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 12,
        questionText:
          "The specific airway conductance (sGaw) measured by body plethysmography is the reciprocal of specific airway resistance. A decreased sGaw indicates:",
        choices: {
          A: "Decreased airway resistance",
          B: "Normal airway function",
          C: "Increased airway resistance (airway obstruction)",
          D: "Increased lung compliance",
        },
        correctChoice: "C",
        explanationCorrect:
          "Specific airway conductance (sGaw) is the reciprocal of specific airway resistance (sRaw). A decrease in sGaw means that conductance is reduced, indicating increased airway resistance and airway narrowing or obstruction.",
        explanationWrong:
          "Decreased conductance means increased (not decreased) resistance. Normal airway function would show normal sGaw values. Lung compliance is a separate measurement from airway conductance.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 13,
        questionText:
          "Which of the following sterilization methods is most appropriate for heat-sensitive reusable PFT equipment?",
        choices: {
          A: "Steam autoclave at 121°C",
          B: "Dry heat sterilization at 170°C",
          C: "Boiling in water for 30 minutes",
          D: "Ethylene oxide (EtO) gas sterilization",
        },
        correctChoice: "D",
        explanationCorrect:
          "Ethylene oxide gas sterilization is the method of choice for heat-sensitive medical equipment because it operates at low temperatures (37-63°C) and effectively sterilizes without damaging delicate electronic components or plastic parts.",
        explanationWrong:
          "Steam autoclave and dry heat both use temperatures that would damage heat-sensitive PFT equipment. Boiling provides only high-level disinfection, not sterilization.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 14,
        questionText:
          "During a methacholine challenge test, the PC20 is reported as 2.5 mg/mL. How is this result interpreted?",
        choices: {
          A: "Normal bronchial responsiveness",
          B: "Positive for bronchial hyperresponsiveness",
          C: "Borderline bronchial hyperresponsiveness",
          D: "Indicates fixed airway obstruction",
        },
        correctChoice: "B",
        explanationCorrect:
          "A PC20 (provocative concentration causing a 20% fall in FEV1) of ≤4 mg/mL is generally considered positive for moderate bronchial hyperresponsiveness. Values ≤1 mg/mL indicate severe hyperresponsiveness. Values between 4-16 mg/mL are borderline.",
        explanationWrong:
          "A PC20 >16 mg/mL is considered normal. 2.5 mg/mL falls below the 4 mg/mL cutoff, indicating definite hyperresponsiveness, not borderline. PC20 testing does not diagnose fixed airway obstruction.",
        topic: "Bronchoprovocation testing",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 15,
        questionText:
          "What is the expected physiological response of the dead space to tidal volume ratio (VD/VT) during exercise in a healthy individual?",
        choices: {
          A: "VD/VT decreases from ~0.30 at rest to ~0.20 or lower during exercise",
          B: "VD/VT increases during exercise",
          C: "VD/VT remains constant throughout exercise",
          D: "VD/VT fluctuates unpredictably during exercise",
        },
        correctChoice: "A",
        explanationCorrect:
          "In healthy individuals, VD/VT decreases during exercise because tidal volume increases more than dead space. The larger tidal volume dilutes the relatively fixed anatomic dead space. A VD/VT that fails to decrease or increases during exercise suggests ventilation-perfusion mismatch.",
        explanationWrong:
          "An increase in VD/VT during exercise is abnormal and suggests pulmonary vascular disease or V/Q mismatch. VD/VT does not remain constant - it changes predictably with exercise. The response is consistent, not unpredictable.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 16,
        questionText:
          "Which of the following occupational exposures is most strongly associated with mesothelioma?",
        choices: {
          A: "Coal dust",
          B: "Silica",
          C: "Asbestos",
          D: "Cotton dust",
        },
        correctChoice: "C",
        explanationCorrect:
          "Asbestos exposure is the primary risk factor for malignant mesothelioma, a cancer of the pleural or peritoneal lining. Even brief asbestos exposure can lead to mesothelioma decades later, with a typical latency period of 20-50 years.",
        explanationWrong:
          "Coal dust causes coal workers' pneumoconiosis. Silica causes silicosis and increases lung cancer risk but not typically mesothelioma. Cotton dust causes byssinosis.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 17,
        questionText:
          "When interpreting ABG results, a PaO2 of 55 mmHg with the patient breathing room air at sea level indicates:",
        choices: {
          A: "Normal oxygenation",
          B: "Mild hypoxemia",
          C: "Moderate hypoxemia",
          D: "Severe hypoxemia",
        },
        correctChoice: "D",
        explanationCorrect:
          "A PaO2 of 55 mmHg on room air at sea level represents severe hypoxemia. Classification: normal >80 mmHg, mild 60-79 mmHg, moderate 40-59 mmHg, severe <40 mmHg. However, by Medicare criteria, PaO2 ≤55 mmHg qualifies for supplemental oxygen, classifying this as severe.",
        explanationWrong:
          "Normal PaO2 is >80 mmHg. Mild hypoxemia is 60-79 mmHg. A PaO2 of 55 mmHg is below the threshold for supplemental oxygen qualification and represents significant hypoxemia requiring intervention.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 18,
        questionText:
          "Which of the following spirometric indices is most sensitive for detecting early small airway disease?",
        choices: {
          A: "FVC",
          B: "FEF25-75% (forced expiratory flow between 25% and 75% of FVC)",
          C: "FEV1",
          D: "PEF",
        },
        correctChoice: "B",
        explanationCorrect:
          "FEF25-75% reflects flow in the mid-portion of the forced expiratory maneuver, which is generated primarily from small airways. It is often the first spirometric parameter to become abnormal in early small airway disease, though its high variability limits its clinical utility as a standalone measure.",
        explanationWrong:
          "FVC primarily reflects lung volume. FEV1 is a robust parameter but may be normal in early small airway disease. PEF reflects large airway function and effort, not small airways.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 19,
        questionText:
          "A patient has a measured DLCO of 18 mL/min/mmHg and a hemoglobin of 10 g/dL (normal 14.5 g/dL). After hemoglobin adjustment, the corrected DLCO would be:",
        choices: {
          A: "Lower than the uncorrected value",
          B: "The same as the uncorrected value",
          C: "Higher than the uncorrected value",
          D: "Cannot be determined without knowing FVC",
        },
        correctChoice: "C",
        explanationCorrect:
          "Anemia reduces the measured DLCO because less hemoglobin is available to bind CO. Correcting for the low hemoglobin adjusts the DLCO upward, revealing the true diffusion capacity of the lung membrane without the confounding effect of anemia.",
        explanationWrong:
          "The correction always adjusts upward when hemoglobin is below normal. FVC is not needed for hemoglobin correction of DLCO.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam24.id,
        questionIndex: 20,
        questionText:
          "What is the primary advantage of using a turbine-type flow sensor over a pneumotachograph in a portable spirometer?",
        choices: {
          A: "It does not require calibration and is less affected by moisture and temperature changes",
          B: "It is more accurate at very low flow rates",
          C: "It provides direct volume measurement",
          D: "It can measure gas concentrations simultaneously",
        },
        correctChoice: "A",
        explanationCorrect:
          "Turbine flow sensors count rotations of a vane to measure volume and are less affected by gas composition, temperature, and humidity than pneumotachographs. While they still need calibration verification, they are more robust for portable use.",
        explanationWrong:
          "Turbine sensors are less accurate at very low flows due to inertia of the vane. They measure flow (from which volume is derived), not direct volume. They do not measure gas concentrations.",
        topic: "Equipment maintenance and troubleshooting",
      },
    ],
  });

  console.log(`Exam 24 created: ${exam24.id} with 20 questions`);

  // ─── EXAM 25 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,5,11,14,17) B=5(Q3,8,13,16,20) C=5(Q1,6,10,15,18) D=5(Q4,7,9,12,19)
  const exam25 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 25",
      examIndex: 25,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam25.id,
        questionIndex: 1,
        questionText:
          "Which of the following calibration checks should be performed daily in the PFT laboratory before patient testing begins?",
        choices: {
          A: "Replace all bacterial filters with new lot numbers",
          B: "Perform a linearity check using a super syringe",
          C: "Volume calibration check using a 3-liter syringe at multiple flow rates",
          D: "Send the spirometer to the manufacturer for factory calibration",
        },
        correctChoice: "C",
        explanationCorrect:
          "Daily calibration verification using a 3-liter calibration syringe at low, medium, and high flow rates is a standard requirement before patient testing. This ensures volume accuracy across the expected range of patient flows.",
        explanationWrong:
          "Filter replacement is based on per-patient use, not daily. Linearity checks are done periodically, not daily. Factory calibration is typically annual or as needed, not daily.",
        topic: "Quality control and calibration",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 2,
        questionText:
          "A patient's pre-bronchodilator spirometry shows FEV1 2.50 L (70% predicted) and FEV1/FVC 0.60. After bronchodilator, FEV1 is 2.85 L. What is the absolute change and is this a positive response?",
        choices: {
          A: "350 mL increase and 14% change - positive response (meets both criteria of ≥200 mL and ≥12%)",
          B: "350 mL increase but only 10% change - not a positive response",
          C: "250 mL increase and 14% change - positive response",
          D: "350 mL increase and 8% change - negative response",
        },
        correctChoice: "A",
        explanationCorrect:
          "Absolute change = 2.85 - 2.50 = 0.35 L (350 mL). Percent change = (350/2500) × 100 = 14%. This meets both ATS/ERS criteria for a positive bronchodilator response: ≥200 mL absolute change AND ≥12% increase from baseline.",
        explanationWrong:
          "The calculation clearly yields 350 mL and 14%. Both 200 mL and 12% thresholds are met, confirming a positive response.",
        topic: "Pre/post bronchodilator testing",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 3,
        questionText:
          "In capnography, a gradually increasing baseline ETCO2 that never returns to zero most commonly indicates:",
        choices: {
          A: "Normal ventilation pattern",
          B: "Rebreathing of exhaled CO2",
          C: "Hyperventilation",
          D: "Pulmonary embolism",
        },
        correctChoice: "B",
        explanationCorrect:
          "A rising baseline on the capnogram that does not return to zero indicates the patient is rebreathing previously exhaled CO2. This can occur with an exhausted CO2 absorber, inadequate fresh gas flow, or a faulty expiratory valve.",
        explanationWrong:
          "Normal ventilation shows a baseline at zero. Hyperventilation lowers ETCO2 but the baseline remains at zero. Pulmonary embolism decreases ETCO2 with a normal baseline.",
        topic: "Pulse oximetry and capnography",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 4,
        questionText:
          "Which of the following is an absolute contraindication to performing spirometry?",
        choices: {
          A: "Mild upper respiratory infection",
          B: "Age over 80 years",
          C: "Use of bronchodilator within 4 hours",
          D: "Pneumothorax (current, untreated)",
        },
        correctChoice: "D",
        explanationCorrect:
          "An untreated pneumothorax is an absolute contraindication to forced expiratory maneuvers because the increased intrathoracic pressure could worsen the air leak and cause tension pneumothorax.",
        explanationWrong:
          "Mild URI is a relative contraindication that may affect results but does not prohibit testing. Advanced age is not a contraindication. Recent bronchodilator use affects pre-bronchodilator assessment but is not an absolute contraindication to spirometry.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 5,
        questionText:
          "During a CPET, the oxygen pulse (VO2/HR) plateaus early despite increasing workload. This finding most likely suggests:",
        choices: {
          A: "Cardiovascular limitation with impaired stroke volume response",
          B: "Ventilatory limitation",
          C: "Normal exercise response",
          D: "Peripheral muscle deconditioning",
        },
        correctChoice: "A",
        explanationCorrect:
          "Oxygen pulse = VO2/HR and reflects stroke volume × arteriovenous O2 difference. An early plateau suggests the heart cannot increase stroke volume adequately, indicating cardiovascular limitation such as ischemia, cardiomyopathy, or valve disease.",
        explanationWrong:
          "Ventilatory limitation is characterized by approaching MVV, not oxygen pulse plateau. Normal exercise shows progressively increasing O2 pulse. Deconditioning produces low peak VO2 but O2 pulse typically still increases with work.",
        topic: "Cardiopulmonary exercise testing",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 6,
        questionText:
          "Which of the following is the correct procedure for performing the modified Allen test?",
        choices: {
          A: "Apply a tourniquet to the upper arm and check for radial pulse",
          B: "Palpate the radial and ulnar arteries simultaneously while the patient relaxes",
          C: "Occlude both radial and ulnar arteries, have the patient clench and open the fist, then release the ulnar artery and observe for hand reperfusion",
          D: "Apply pressure to the radial artery only and observe for blanching",
        },
        correctChoice: "C",
        explanationCorrect:
          "The modified Allen test involves compressing both the radial and ulnar arteries, having the patient clench the fist to exsanguinate the hand, opening the hand, then releasing only the ulnar artery. Normal reperfusion (pinking) within 10-15 seconds confirms adequate collateral circulation.",
        explanationWrong:
          "A tourniquet test assesses venous function, not arterial collateral flow. Simply palpating both arteries does not test collateral circulation. Pressing only the radial artery does not assess ulnar collateral adequacy.",
        topic: "Arterial blood gas sampling",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 7,
        questionText:
          "In body plethysmography, if the patient does not completely support their cheeks during the panting maneuver, what error is most likely to occur?",
        choices: {
          A: "Overestimation of airway resistance",
          B: "Underestimation of FRC",
          C: "Inaccurate DLCO measurement",
          D: "Overestimation of thoracic gas volume due to cheek compliance artifact",
        },
        correctChoice: "D",
        explanationCorrect:
          "Unsupported cheeks act as compliant structures that compress and expand during panting, creating volume changes that the plethysmograph interprets as thoracic gas volume changes. This leads to overestimation of FRC/TGV.",
        explanationWrong:
          "While airway resistance can also be affected, the primary error is overestimation of thoracic gas volume. DLCO is not measured by plethysmography. The error is overestimation, not underestimation of FRC.",
        topic: "Body plethysmography",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 8,
        questionText:
          "For the 6-minute walk test, which Borg scale rating indicates moderate dyspnea?",
        choices: {
          A: "0-1",
          B: "3-4",
          C: "7-8",
          D: "9-10",
        },
        correctChoice: "B",
        explanationCorrect:
          "On the modified Borg dyspnea scale (0-10), a rating of 3-4 corresponds to moderate dyspnea. This scale is used to assess perceived breathlessness before and after the 6-minute walk test: 0 = nothing, 5 = severe, 10 = maximal.",
        explanationWrong:
          "A rating of 0-1 indicates minimal or no dyspnea. A rating of 7-8 indicates very severe dyspnea. A rating of 9-10 indicates near-maximal or maximal dyspnea.",
        topic: "Exercise testing and 6-minute walk test",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 9,
        questionText:
          "Which PFT finding is most characteristic of neuromuscular disease (such as amyotrophic lateral sclerosis)?",
        choices: {
          A: "Reduced DLCO with normal spirometry",
          B: "Obstructive pattern with increased RV",
          C: "Normal spirometry with reduced FEF25-75",
          D: "Reduced FVC and MIP/MEP with normal DLCO and FEV1/FVC ratio",
        },
        correctChoice: "D",
        explanationCorrect:
          "Neuromuscular diseases cause respiratory muscle weakness, resulting in reduced FVC (restrictive pattern), reduced maximal inspiratory and expiratory pressures (MIP/MEP), but preserved DLCO (since the alveolar-capillary membrane is intact) and normal FEV1/FVC ratio.",
        explanationWrong:
          "Reduced DLCO suggests parenchymal or vascular disease. Obstructive pattern is not characteristic of neuromuscular disease. Isolated FEF25-75 reduction suggests small airway disease.",
        topic: "PFT in special populations (pediatric, geriatric, obese)",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 10,
        questionText:
          "Which of the following is the proper technique for collecting a sputum sample from a patient in the PFT lab to minimize infection risk to the technologist?",
        choices: {
          A: "Have the patient cough freely into the room while the technologist stands nearby",
          B: "Collect the specimen after completing all PFT maneuvers without any precautions",
          C: "Have the patient produce the specimen in a well-ventilated area while the technologist uses appropriate PPE and maintains distance",
          D: "The technologist should collect the specimen using suction",
        },
        correctChoice: "C",
        explanationCorrect:
          "Sputum collection generates aerosols and requires proper infection control: the patient should be in a well-ventilated or negative-pressure area, and the technologist should use appropriate PPE (mask, gloves, eye protection) and maintain distance during specimen collection.",
        explanationWrong:
          "Free coughing without containment exposes the technologist. Collecting without precautions violates infection control standards. Routine suctioning is invasive and not indicated for voluntary sputum production.",
        topic: "Infection control in PFT lab",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 11,
        questionText:
          "A patient's spirometry results show FEV1 65% predicted and FVC 64% predicted with FEV1/FVC ratio of 0.78. What additional test is most important to determine if this represents a restrictive or nonspecific pattern?",
        choices: {
          A: "Measurement of total lung capacity (TLC)",
          B: "Bronchoprovocation testing",
          C: "Cardiopulmonary exercise testing",
          D: "Arterial blood gas analysis",
        },
        correctChoice: "A",
        explanationCorrect:
          "When FVC is reduced with a preserved FEV1/FVC ratio, the pattern could be restrictive or 'nonspecific' (if TLC is normal). Only direct measurement of TLC by plethysmography, helium dilution, or nitrogen washout can confirm true restriction (TLC below LLN).",
        explanationWrong:
          "Bronchoprovocation tests for airway hyperreactivity, not restriction. CPET evaluates exercise capacity. ABG assesses gas exchange but does not differentiate restrictive from nonspecific patterns.",
        topic: "Lung volumes and capacities measurement",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 12,
        questionText:
          "Which of the following spirometric errors would result from a significant air leak around the mouthpiece during a forced expiratory maneuver?",
        choices: {
          A: "Falsely elevated FEV1 and FVC",
          B: "Artificially prolonged forced expiratory time",
          C: "Normal FEV1 with elevated PEF",
          D: "Reduced FVC with a volume-time curve that does not reach a plateau",
        },
        correctChoice: "D",
        explanationCorrect:
          "An air leak around the mouthpiece allows exhaled gas to escape unmeasured, resulting in a falsely reduced FVC. The volume-time curve may fail to reach a true plateau because the measured volume is incomplete.",
        explanationWrong:
          "Leaks would reduce, not elevate, FEV1 and FVC. They would not prolong FET. PEF could be reduced by a leak, not elevated.",
        topic: "Patient coaching and test acceptability",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 13,
        questionText:
          "The DLCO/VA ratio (also called KCO or transfer coefficient) is most useful for distinguishing between which two conditions?",
        choices: {
          A: "Asthma and COPD",
          B: "Emphysema (low KCO) and extraparenchymal restriction such as chest wall disease (normal or elevated KCO)",
          C: "Acute bronchitis and pneumonia",
          D: "Left heart failure and right heart failure",
        },
        correctChoice: "B",
        explanationCorrect:
          "KCO (DLCO/VA) helps distinguish causes of reduced DLCO. In emphysema, both DLCO and VA are reduced but DLCO falls disproportionately (low KCO). In extraparenchymal restriction, VA is reduced but the remaining parenchyma has intact gas transfer (normal or elevated KCO).",
        explanationWrong:
          "Asthma vs COPD distinction relies on bronchodilator response and clinical features. Acute bronchitis and pneumonia are not typically differentiated by DLCO. Heart failure classification uses different diagnostic tests.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 14,
        questionText:
          "When using the lower limit of normal (LLN) instead of a fixed ratio for FEV1/FVC, which patient population is most likely to be reclassified from 'obstructive' to 'normal'?",
        choices: {
          A: "Elderly patients (>70 years) who were diagnosed using the fixed 0.70 ratio",
          B: "Young adults aged 20-30",
          C: "Pediatric patients aged 5-10",
          D: "Patients with severe COPD",
        },
        correctChoice: "A",
        explanationCorrect:
          "The fixed 0.70 ratio overdiagnoses obstruction in elderly patients because FEV1/FVC naturally declines with age. Using the age-appropriate LLN (5th percentile) correctly identifies that many elderly patients with ratios of 0.65-0.70 are within normal limits for their age.",
        explanationWrong:
          "Young adults may be underdiagnosed by the fixed ratio (their LLN is >0.70). Pediatric patients also have higher normal ratios. Severe COPD patients have ratios well below both thresholds.",
        topic: "Reference values and interpretation",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 15,
        questionText:
          "During nitrogen washout FRC measurement, which of the following would cause an erroneously high FRC value?",
        choices: {
          A: "The patient started the test above FRC",
          B: "Oxygen flow was too high",
          C: "A leak in the breathing circuit allowing room air (containing nitrogen) to enter",
          D: "The test was terminated too early",
        },
        correctChoice: "C",
        explanationCorrect:
          "A leak allowing room air (79% nitrogen) into the circuit would add extraneous nitrogen to the system, which the analyzer would attribute to nitrogen washed out from the lungs. This causes the calculated FRC to be falsely elevated.",
        explanationWrong:
          "Starting above FRC would affect the measurement but not necessarily cause overestimation. Excessive O2 flow would speed washout but not change the final calculation. Premature termination would underestimate FRC.",
        topic: "Nitrogen washout and helium dilution",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 16,
        questionText:
          "Which of the following occupational lung diseases presents with airflow obstruction that characteristically worsens on Mondays and improves over the weekend?",
        choices: {
          A: "Asbestosis",
          B: "Byssinosis",
          C: "Silicosis",
          D: "Berylliosis",
        },
        correctChoice: "B",
        explanationCorrect:
          "Byssinosis (caused by cotton, flax, or hemp dust) classically presents with 'Monday morning syndrome' - chest tightness and airflow obstruction worst on the first day back at work after a break, improving with continued exposure during the week.",
        explanationWrong:
          "Asbestosis causes progressive restrictive disease without Monday variation. Silicosis causes progressive nodular fibrosis. Berylliosis causes granulomatous disease. None of these show the characteristic Monday pattern.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 17,
        questionText:
          "Which of the following best describes the purpose of washout volume collection during single-breath DLCO testing?",
        choices: {
          A: "To clear anatomic dead space gas before collecting the alveolar sample",
          B: "To measure residual volume",
          C: "To calibrate the gas analyzer",
          D: "To assess bronchodilator response",
        },
        correctChoice: "A",
        explanationCorrect:
          "The washout volume (typically 0.75-1.0 L) is discarded at the beginning of expiration to clear the anatomic dead space, which contains uninspired gas that has not participated in gas exchange. The subsequent alveolar sample is then collected for analysis.",
        explanationWrong:
          "RV is measured by other methods. Gas analyzer calibration is done with reference gases before testing. Bronchodilator response is assessed by comparing pre- and post-spirometry.",
        topic: "Diffusion capacity (DLCO) testing",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 18,
        questionText:
          "A flow-volume loop shows reduced PEF and FEF50 with a normal inspiratory limb. Which condition is most likely?",
        choices: {
          A: "Variable extrathoracic obstruction",
          B: "Fixed central airway obstruction",
          C: "Variable intrathoracic obstruction",
          D: "Peripheral airway disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "Variable intrathoracic obstruction (such as a tracheal or bronchial tumor below the thoracic inlet) selectively flattens the expiratory limb while the inspiratory limb remains normal. During forced expiration, positive pleural pressure compresses the intrathoracic airway at the lesion site.",
        explanationWrong:
          "Variable extrathoracic obstruction flattens the inspiratory limb. Fixed obstruction flattens both limbs. Peripheral airway disease produces scooping of the expiratory curve, not isolated PEF reduction with flattening.",
        topic: "Flow-volume loop interpretation",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 19,
        questionText:
          "When performing PFT in a patient with a recent history of hemoptysis, which test poses the greatest risk and should be approached with the most caution?",
        choices: {
          A: "Pulse oximetry",
          B: "Tidal breathing analysis",
          C: "DLCO testing",
          D: "Forced spirometry maneuvers",
        },
        correctChoice: "D",
        explanationCorrect:
          "Forced spirometry maneuvers generate high intrathoracic pressures that could exacerbate bleeding in a patient with recent hemoptysis. While not absolutely contraindicated, these maneuvers require careful clinical judgment and physician clearance.",
        explanationWrong:
          "Pulse oximetry is noninvasive and poses no risk. Tidal breathing analysis requires minimal effort. DLCO involves a maximal inspiration but less forceful maneuver than spirometry, though it should also be approached cautiously.",
        topic: "Spirometry procedures and interpretation",
      },
      {
        miniExamId: exam25.id,
        questionIndex: 20,
        questionText:
          "What is the recommended minimum time between successive DLCO measurements on the same patient?",
        choices: {
          A: "1 minute",
          B: "4 minutes",
          C: "10 minutes",
          D: "30 minutes",
        },
        correctChoice: "B",
        explanationCorrect:
          "A minimum of 4 minutes between DLCO maneuvers is recommended to allow adequate washout of test gases (CO and tracer gas) from the lungs. Insufficient wait time between maneuvers can lead to falsely reduced DLCO values due to residual CO in the alveoli.",
        explanationWrong:
          "One minute is insufficient for CO washout. While longer waits (10 or 30 minutes) would ensure washout, 4 minutes is the recommended minimum that balances accuracy with practical testing time.",
        topic: "Diffusion capacity (DLCO) testing",
      },
    ],
  });

  console.log(`Exam 25 created: ${exam25.id} with 20 questions`);

  console.log("All 5 CPFT mini exams (21-25) seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
