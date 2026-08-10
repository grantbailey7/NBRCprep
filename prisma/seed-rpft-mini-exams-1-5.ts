import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fyp0005zf54vrwow6p4";

  // ─── EXAM 1 (FREE) ───────────────────────────────────────
  // Answer distribution: A=5(Q2,6,10,14,18) B=5(Q3,7,11,16,20) C=5(Q1,5,9,15,19) D=5(Q4,8,12,13,17)
  const exam1 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "RPFT Mini Exam 1",
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
          "When comparing thoracic gas volume (TGV) measured by body plethysmography to functional residual capacity (FRC) measured by helium dilution, a significantly higher TGV most likely indicates:",
        choices: {
          A: "Equipment malfunction in the plethysmograph",
          B: "The patient hyperventilated during the helium dilution test",
          C: "The presence of trapped gas or poorly ventilated lung regions",
          D: "An elevated diffusing capacity",
        },
        correctChoice: "C",
        explanationCorrect:
          "Plethysmography measures all compressible gas in the thorax including trapped gas, while helium dilution only measures communicating lung volumes. A significantly higher TGV than FRC-He indicates trapped gas in poorly ventilated or non-communicating lung regions, commonly seen in severe obstructive disease.",
        explanationWrong:
          "Equipment malfunction would typically produce erratic results rather than a consistent difference. Hyperventilation during helium dilution would affect equilibration time but would not systematically underestimate FRC. Diffusing capacity is unrelated to the discrepancy between plethysmographic and dilutional lung volumes.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 2,
        questionText:
          "According to ATS/ERS 2021 standards, a positive bronchodilator response for FEV1 is defined as an increase of at least:",
        choices: {
          A: "10% improvement from the predicted value",
          B: "12% AND 200 mL improvement from baseline",
          C: "15% improvement from baseline",
          D: "200 mL improvement regardless of percentage change",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS 2021 technical standard updated the bronchodilator response criteria to a change exceeding 10% of the predicted value for FEV1 or FVC. This replaced the older 12% and 200 mL from baseline criterion to reduce dependence on baseline severity.",
        explanationWrong:
          "The 12% and 200 mL from baseline was the previous ATS/ERS 2005 criterion that has been superseded by the 2021 update. A 15% change from baseline is not part of any current standard. A fixed 200 mL threshold without percentage consideration was never the recommended criterion.",
        topic: "Bronchodilator response criteria (ATS/ERS 2021 updates)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 3,
        questionText:
          "During a methacholine challenge test, the provocative concentration causing a 20% fall in FEV1 (PC20) is 2.5 mg/mL. This result indicates:",
        choices: {
          A: "Normal airway responsiveness",
          B: "Moderate airway hyperresponsiveness",
          C: "The test is equivocal and should be repeated",
          D: "Severe airway hyperresponsiveness",
        },
        correctChoice: "B",
        explanationCorrect:
          "A PC20 between 1 and 4 mg/mL indicates moderate airway hyperresponsiveness. A PC20 less than 1 mg/mL indicates severe hyperresponsiveness, 4-16 mg/mL indicates mild or borderline hyperresponsiveness, and greater than 16 mg/mL is considered normal.",
        explanationWrong:
          "Normal airway responsiveness would require a PC20 greater than 16 mg/mL. Severe hyperresponsiveness is defined as a PC20 less than 1 mg/mL. There is no indication to repeat the test based on this result alone, as the value falls clearly within the moderate range.",
        topic: "Methacholine and exercise challenge testing protocols",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 4,
        questionText:
          "During cardiopulmonary exercise testing (CPET), a patient reaches a plateau in oxygen consumption despite increasing workload. The VO2 at this plateau is best described as:",
        choices: {
          A: "The ventilatory threshold",
          B: "The lactate threshold",
          C: "The anaerobic threshold",
          D: "The VO2max",
        },
        correctChoice: "D",
        explanationCorrect:
          "VO2max is defined as the point at which oxygen consumption plateaus despite continued increases in workload, indicating maximal aerobic capacity has been reached. This plateau criterion is the gold standard for determining true VO2max.",
        explanationWrong:
          "The ventilatory threshold is the point at which ventilation increases disproportionately relative to oxygen consumption. The lactate threshold is identified by blood lactate measurements. The anaerobic threshold refers to the transition from aerobic to increasingly anaerobic metabolism but does not require a VO2 plateau.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 5,
        questionText:
          "A flow-volume loop demonstrates a plateau on both the inspiratory and expiratory limbs. This pattern is most consistent with:",
        choices: {
          A: "Variable intrathoracic obstruction",
          B: "Variable extrathoracic obstruction",
          C: "Fixed upper airway obstruction",
          D: "Severe small airway disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "A fixed upper airway obstruction produces plateaus on both the inspiratory and expiratory portions of the flow-volume loop because the fixed lesion limits flow equally in both directions, regardless of transmural pressure changes during breathing.",
        explanationWrong:
          "Variable intrathoracic obstruction primarily flattens the expiratory limb. Variable extrathoracic obstruction primarily flattens the inspiratory limb. Severe small airway disease produces a concave (scooped-out) pattern on the expiratory limb without an inspiratory plateau.",
        topic: "Advanced flow-volume loop analysis",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 6,
        questionText:
          "When correcting DLCO for hemoglobin, a patient with a hemoglobin of 10 g/dL (normal reference 14.6 g/dL for males) would have their measured DLCO adjusted in which direction?",
        choices: {
          A: "Adjusted upward because anemia reduces the measured DLCO below the true value",
          B: "Adjusted downward because low hemoglobin artificially inflates DLCO",
          C: "No adjustment is needed because hemoglobin does not affect DLCO",
          D: "The DLCO test should be canceled and rescheduled after transfusion",
        },
        correctChoice: "A",
        explanationCorrect:
          "Anemia reduces the hemoglobin available to bind CO in the pulmonary capillaries, lowering the measured DLCO below the patient's true diffusing capacity. The correction adjusts the measured value upward to estimate what DLCO would be at a normal hemoglobin level.",
        explanationWrong:
          "Low hemoglobin does not inflate DLCO; it reduces CO uptake. Hemoglobin concentration directly affects the rate of CO transfer and must be corrected for accurate interpretation. Canceling the test is unnecessary because a validated mathematical correction exists.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 7,
        questionText:
          "In impulse oscillometry (IOS), an elevated resistance at 5 Hz (R5) with a normal resistance at 20 Hz (R20) suggests pathology primarily in:",
        choices: {
          A: "The large central airways",
          B: "The small peripheral airways",
          C: "The lung parenchyma",
          D: "The chest wall",
        },
        correctChoice: "B",
        explanationCorrect:
          "In IOS, low-frequency oscillations (5 Hz) penetrate to the peripheral airways while high-frequency oscillations (20 Hz) primarily reflect central airway resistance. An elevated R5 with normal R20 (increased frequency dependence of resistance) indicates small airway dysfunction.",
        explanationWrong:
          "Large central airway obstruction would elevate both R5 and R20 proportionally. Parenchymal disease primarily affects reactance (X5) rather than resistance. Chest wall abnormalities would affect compliance measurements more than airway resistance patterns.",
        topic: "Impulse oscillometry and forced oscillation technique",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 8,
        questionText:
          "A patient being evaluated for pre-operative pulmonary risk has an FEV1 of 1.2 L (45% predicted). Predicted postoperative FEV1 (ppo-FEV1) after right pneumonectomy is calculated using quantitative perfusion scanning. If the right lung receives 40% of total perfusion, the ppo-FEV1 is approximately:",
        choices: {
          A: "0.48 L",
          B: "0.54 L",
          C: "0.84 L",
          D: "0.72 L",
        },
        correctChoice: "D",
        explanationCorrect:
          "The predicted postoperative FEV1 is calculated as: ppo-FEV1 = preoperative FEV1 × (1 − fraction of perfusion to the resected lung). Here: 1.2 L × (1 − 0.40) = 1.2 × 0.60 = 0.72 L. This value helps determine operative risk.",
        explanationWrong:
          "0.48 L would result from multiplying by the perfusion fraction rather than subtracting it. 0.54 L does not correspond to any standard calculation. 0.84 L would result from an incorrect perfusion fraction or calculation error.",
        topic: "Pre-operative pulmonary function assessment",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 9,
        questionText:
          "An exhaled nitric oxide (FeNO) measurement of 45 ppb in an adult most strongly supports a diagnosis of:",
        choices: {
          A: "COPD with neutrophilic inflammation",
          B: "Pulmonary fibrosis",
          C: "Eosinophilic airway inflammation consistent with asthma",
          D: "Vocal cord dysfunction",
        },
        correctChoice: "C",
        explanationCorrect:
          "FeNO levels above 50 ppb in adults are considered high and strongly suggest eosinophilic airway inflammation, while levels between 25-50 ppb are intermediate and should be interpreted cautiously. A level of 45 ppb is in the intermediate-high range and most strongly supports eosinophilic inflammation consistent with asthma.",
        explanationWrong:
          "COPD with neutrophilic inflammation typically presents with normal or low FeNO levels. Pulmonary fibrosis does not characteristically elevate FeNO. Vocal cord dysfunction is not associated with elevated exhaled nitric oxide levels.",
        topic: "Exhaled nitric oxide (FeNO) measurement and interpretation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 10,
        questionText:
          "During quality grading of spirometry per ATS/ERS standards, which of the following errors results in a grade of F (not usable)?",
        choices: {
          A: "A test session with no acceptable maneuvers due to cough in the first second and early termination in all attempts",
          B: "Two acceptable maneuvers with FEV1 repeatability within 100 mL",
          C: "Three acceptable maneuvers with FVC repeatability within 200 mL",
          D: "One acceptable maneuver out of eight attempts",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS grading system assigns grade F (not usable) when no acceptable maneuvers are obtained during the test session. Cough in the first second invalidates FEV1, and early termination invalidates FVC, making all maneuvers unacceptable.",
        explanationWrong:
          "Two acceptable maneuvers with good repeatability would receive a grade of B or C depending on other criteria. Three acceptable maneuvers with repeatability within 150 mL meets grade A criteria. One acceptable maneuver would receive a grade of D or E, not F.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 11,
        questionText:
          "A maximum inspiratory pressure (MIP) of −30 cmH2O in a 65-year-old male patient (predicted approximately −100 cmH2O) most likely indicates:",
        choices: {
          A: "Normal respiratory muscle strength",
          B: "Significant inspiratory muscle weakness",
          C: "Chest wall restriction",
          D: "Upper airway obstruction",
        },
        correctChoice: "B",
        explanationCorrect:
          "A MIP of −30 cmH2O is markedly reduced compared to the predicted value of approximately −100 cmH2O, representing only about 30% of predicted. This indicates significant inspiratory muscle weakness, which may be caused by neuromuscular disease, diaphragmatic dysfunction, or severe deconditioning.",
        explanationWrong:
          "Normal MIP values for a 65-year-old male are typically more negative than −65 cmH2O. Chest wall restriction reduces lung volumes but does not primarily reduce MIP to this degree unless combined with muscle weakness. Upper airway obstruction affects flow-volume loops but does not reduce MIP measurements.",
        topic: "Respiratory muscle strength testing (MIP/MEP)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 12,
        questionText:
          "When performing DLCO testing at an altitude of 5,000 feet (barometric pressure approximately 632 mmHg), the measured DLCO should be:",
        choices: {
          A: "Reported without correction since altitude has minimal effect",
          B: "Adjusted upward by approximately 10%",
          C: "Reported as measured, as the altitude effect is already accounted for in reference equations",
          D: "Adjusted downward because the reduced inspired PO2 at altitude increases CO uptake",
        },
        correctChoice: "D",
        explanationCorrect:
          "At altitude, the reduced barometric pressure lowers the partial pressure of oxygen in alveolar gas. This reduces competition between O2 and CO for hemoglobin binding sites, increasing CO uptake and artificially elevating the measured DLCO. The correction adjusts the value downward to sea-level equivalent.",
        explanationWrong:
          "Altitude has a significant effect on DLCO measurement and cannot be ignored. Adjusting upward would further overestimate DLCO. Standard reference equations are generated at sea level and do not account for altitude effects.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 13,
        questionText:
          "In disability evaluation using AMA guidelines, a patient with an FEV1 of 45% predicted and a DLCO of 50% predicted with a VO2max of 18 mL/kg/min would most likely be classified as having:",
        choices: {
          A: "Mild impairment (Class 2)",
          B: "No impairment (Class 1)",
          C: "Moderate impairment (Class 3)",
          D: "Severe impairment (Class 3-4)",
        },
        correctChoice: "D",
        explanationCorrect:
          "AMA impairment classification considers the most severe parameter. An FEV1 of 45% predicted, DLCO of 50% predicted, and VO2max of 18 mL/kg/min collectively indicate severe impairment. The VO2max below 20 mL/kg/min, combined with significantly reduced FEV1, places this patient in Class 3-4 (severe impairment).",
        explanationWrong:
          "Mild impairment requires higher FEV1 values, typically above 65% predicted. No impairment would require normal or near-normal pulmonary function values. Moderate impairment does not adequately capture the severity indicated by an FEV1 of 45% predicted and the reduced exercise capacity.",
        topic: "Disability and impairment evaluation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 14,
        questionText:
          "During CPET, the ventilatory equivalent for CO2 (VE/VCO2 slope) is 42. This value most strongly suggests:",
        choices: {
          A: "Increased dead space ventilation, possibly due to pulmonary vascular disease",
          B: "Normal ventilatory efficiency",
          C: "Exercise-induced bronchoconstriction",
          D: "Peripheral muscle deconditioning",
        },
        correctChoice: "A",
        explanationCorrect:
          "A VE/VCO2 slope greater than 34-36 indicates ventilatory inefficiency. A value of 42 suggests excessive ventilation relative to CO2 production, most commonly caused by increased physiologic dead space as seen in pulmonary vascular disease, pulmonary hypertension, or heart failure.",
        explanationWrong:
          "Normal VE/VCO2 slope is typically less than 30-34. Exercise-induced bronchoconstriction causes expiratory flow limitation but does not primarily elevate the VE/VCO2 slope. Peripheral muscle deconditioning causes early lactic acidosis but does not specifically elevate the VE/VCO2 slope to this degree.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 15,
        questionText:
          "When performing spirometry on a 4-year-old child, which adaptation is most appropriate?",
        choices: {
          A: "Using adult acceptability criteria for all maneuvers",
          B: "Requiring a minimum of 6 seconds for each forced expiratory maneuver",
          C: "Accepting a forced expiratory time of at least 1 second if a plateau is reached",
          D: "Postponing testing until the child is at least 6 years old",
        },
        correctChoice: "C",
        explanationCorrect:
          "Young children (ages 2-6) typically empty their lungs very quickly due to smaller lung volumes and higher elastic recoil. ATS/ERS guidelines for preschool spirometry accept a forced expiratory time as short as 1 second if an end-of-test plateau or clear cessation of flow is observed.",
        explanationWrong:
          "Adult acceptability criteria are too stringent for preschool children. Requiring 6 seconds of exhalation is unrealistic for young children who may complete forced expiration in 1-3 seconds. Many children as young as 3-4 years can perform acceptable spirometry with appropriate coaching and modified criteria.",
        topic: "Pediatric PFT testing techniques and interpretation",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 16,
        questionText:
          "In a pulmonary function laboratory, biological quality control (bio-QC) involves:",
        choices: {
          A: "Daily calibration of the spirometer with a 3-liter syringe",
          B: "Weekly testing of a healthy non-smoking staff member to detect equipment drift",
          C: "Monthly replacement of gas analyzers",
          D: "Annual certification by an outside accreditation agency",
        },
        correctChoice: "B",
        explanationCorrect:
          "Biological quality control involves periodically testing a healthy, stable subject (usually a laboratory staff member) to monitor for gradual equipment drift that calibration checks alone may not detect. Results are tracked over time using control charts to identify systematic changes.",
        explanationWrong:
          "Daily syringe calibration is part of equipment QC, not biological QC. Monthly replacement of gas analyzers is not standard practice; analyzers are replaced when they fail or drift out of specification. Annual accreditation is an administrative process, not a biological quality control measure.",
        topic: "Advanced quality control and biological controls",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 17,
        questionText:
          "A patient's arterial blood gas shows: pH 7.28, PaCO2 55 mmHg, HCO3 26 mEq/L, PaO2 58 mmHg. The anion gap is 12. This is most consistent with:",
        choices: {
          A: "Metabolic acidosis with respiratory compensation",
          B: "Mixed respiratory and metabolic alkalosis",
          C: "Combined metabolic and respiratory acidosis",
          D: "Acute respiratory acidosis",
        },
        correctChoice: "D",
        explanationCorrect:
          "The elevated PaCO2 (55 mmHg) indicates respiratory acidosis. The HCO3 of 26 mEq/L is only slightly above normal, consistent with acute respiratory acidosis where renal compensation has not yet occurred (expected HCO3 rise of approximately 1 mEq/L per 10 mmHg rise in PaCO2). The normal anion gap excludes a concurrent metabolic acidosis.",
        explanationWrong:
          "Metabolic acidosis would show a low HCO3 as the primary disturbance. Mixed respiratory and metabolic alkalosis would show elevated pH. Combined metabolic and respiratory acidosis would require a low HCO3 in addition to the elevated PaCO2, and the normal anion gap argues against a metabolic component.",
        topic: "Advanced ABG interpretation (mixed acid-base disorders)",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 18,
        questionText:
          "When performing a linearity check on a pneumotachometer, volumes are measured at multiple flow rates across the device's operating range. What is the acceptable tolerance?",
        choices: {
          A: "Within 3.5% of the reading or 0.050 L across all tested volumes",
          B: "Within 1% at flows above 2 L/s only",
          C: "Within 5% at all tested flow rates",
          D: "Within 10% at the extremes of the flow range",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards require that flow-measuring devices demonstrate linearity within 3.5% of reading or 0.050 L (whichever is greater) across a range of flows to ensure accurate measurement at both low and high flow rates encountered during patient testing.",
        explanationWrong:
          "Checking linearity only above 2 L/s ignores clinically important low-flow measurements. A 5% tolerance is less stringent than the accepted standard. A 10% tolerance at extremes would permit unacceptable measurement error.",
        topic: "Calibration verification and linearity checks",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 19,
        questionText:
          "In research pulmonary function testing, a type II (beta) error occurs when:",
        choices: {
          A: "The null hypothesis is rejected when it is actually true",
          B: "The sample size is too large",
          C: "The study fails to reject a false null hypothesis",
          D: "The study uses an inappropriate statistical test",
        },
        correctChoice: "C",
        explanationCorrect:
          "A type II (beta) error occurs when a study fails to reject a false null hypothesis — meaning a real difference exists but the study fails to detect it. This is also called a false negative. The probability of a type II error is denoted by beta, and statistical power (1 − beta) is the probability of correctly detecting a true effect.",
        explanationWrong:
          "Rejecting a true null hypothesis is a type I (alpha) error, not type II. An excessively large sample size actually reduces type II error by increasing statistical power. Using an inappropriate statistical test is a methodological flaw but not the definition of a type II error.",
        topic: "Research methodology in pulmonary function",
      },
      {
        miniExamId: exam1.id,
        questionIndex: 20,
        questionText:
          "A PFT laboratory seeking accreditation must demonstrate compliance with quality standards. Which organization provides accreditation specifically for pulmonary function laboratories?",
        choices: {
          A: "The Joint Commission (TJC)",
          B: "The American Association for Respiratory Care (AARC) in conjunction with accrediting bodies",
          C: "The Occupational Safety and Health Administration (OSHA)",
          D: "The College of American Pathologists (CAP)",
        },
        correctChoice: "B",
        explanationCorrect:
          "PFT laboratory accreditation programs are supported through professional respiratory care organizations. The AARC and other professional bodies have established standards and accreditation pathways specifically for pulmonary function laboratories to ensure quality testing.",
        explanationWrong:
          "The Joint Commission accredits hospitals and health systems broadly but does not specifically accredit PFT laboratories. OSHA regulates workplace safety but does not accredit clinical laboratories. CAP accredits clinical pathology laboratories, not specifically pulmonary function laboratories.",
        topic: "PFT laboratory management and accreditation",
      },
    ],
  });

  console.log(`Exam 1 created: ${exam1.id} with 20 questions`);

  // ─── EXAM 2 (NOT FREE) ───────────────────────────────────
  // Answer distribution: A=5(Q3,8,11,15,18) B=5(Q1,6,12,17,20) C=5(Q4,7,13,16,19) D=5(Q2,5,9,10,14)
  const exam2 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "RPFT Mini Exam 2",
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
          "During exercise challenge testing, a decrease in FEV1 of what percentage from baseline is considered a positive test for exercise-induced bronchoconstriction (EIB)?",
        choices: {
          A: "5%",
          B: "10% or greater",
          C: "20% or greater",
          D: "15%",
        },
        correctChoice: "B",
        explanationCorrect:
          "A decrease in FEV1 of 10% or more from the pre-exercise baseline value is the accepted threshold for a positive exercise challenge test indicating exercise-induced bronchoconstriction, according to ATS guidelines.",
        explanationWrong:
          "A 5% decrease is within normal variability and would not indicate EIB. A 20% threshold is used for methacholine challenge testing, not exercise challenge. A 15% decrease alone is not the accepted cutoff, although it would also meet the 10% criterion.",
        topic: "Methacholine and exercise challenge testing protocols",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 2,
        questionText:
          "In CPET, the anaerobic threshold (AT) is most accurately determined non-invasively by identifying:",
        choices: {
          A: "The point where heart rate exceeds 85% of predicted maximum",
          B: "The maximum workload sustained for at least 2 minutes",
          C: "The point where respiratory rate exceeds 40 breaths per minute",
          D: "The point where VCO2 begins to increase disproportionately to VO2 (V-slope method)",
        },
        correctChoice: "D",
        explanationCorrect:
          "The V-slope method identifies the anaerobic threshold as the breakpoint where VCO2 production begins to increase out of proportion to VO2 consumption. This reflects the buffering of lactic acid by bicarbonate, producing excess CO2. It is considered the most reliable non-invasive method for AT determination.",
        explanationWrong:
          "Heart rate at 85% of predicted maximum is a target for exercise intensity but does not define the anaerobic threshold. Maximum sustained workload relates to overall exercise capacity, not the metabolic transition point. Respiratory rate alone does not reliably identify the anaerobic threshold.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 3,
        questionText:
          "According to ATS/ERS spirometry quality grading, a session with 3 acceptable maneuvers where the two largest FEV1 values are within 150 mL and the two largest FVC values are within 150 mL receives a grade of:",
        choices: {
          A: "A",
          B: "B",
          C: "C",
          D: "D",
        },
        correctChoice: "A",
        explanationCorrect:
          "Grade A requires at least 3 acceptable maneuvers with the two largest FEV1 values within 150 mL of each other AND the two largest FVC values within 150 mL of each other. This represents the highest quality spirometry data.",
        explanationWrong:
          "Grade B would apply if repeatability were within 200 mL but not within 150 mL. Grade C applies with less than ideal repeatability or fewer acceptable maneuvers. Grade D indicates only one acceptable maneuver was obtained.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 4,
        questionText:
          "A patient with severe COPD undergoes both plethysmographic and helium dilution lung volume measurements. The plethysmographic TLC is 8.5 L and the helium dilution TLC is 6.0 L. The difference of 2.5 L most likely represents:",
        choices: {
          A: "Measurement error in the plethysmograph",
          B: "Hyperinflation artifact",
          C: "Trapped gas volume due to airway closure and poor regional ventilation",
          D: "Normal physiological variation between methods",
        },
        correctChoice: "C",
        explanationCorrect:
          "In severe COPD, significant air trapping occurs in poorly ventilated or completely obstructed lung regions. Plethysmography detects all thoracic gas regardless of communication, while helium dilution only measures gas in communicating airways. The 2.5 L difference represents trapped gas that the helium cannot reach.",
        explanationWrong:
          "While plethysmography can overestimate volumes in severe obstruction due to mouth pressure not equaling alveolar pressure, the primary explanation for this discrepancy is trapped gas. Hyperinflation artifact is not a recognized term. A 2.5 L difference far exceeds normal physiological variation between methods.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 5,
        questionText:
          "When interpreting DLCO results, a patient with a carboxyhemoglobin (COHb) level of 8% (heavy smoker) would require what type of correction?",
        choices: {
          A: "No correction needed for COHb levels below 10%",
          B: "Adjustment of the predicted DLCO upward",
          C: "Reduction in the breath-hold time",
          D: "Upward adjustment of the measured DLCO to account for the reduced effective hemoglobin and back-pressure effect",
        },
        correctChoice: "D",
        explanationCorrect:
          "Elevated COHb reduces DLCO through two mechanisms: it decreases the effective hemoglobin available to bind CO and creates a back-pressure of CO in the blood that opposes the diffusion gradient. The correction adjusts the measured DLCO upward to estimate the value that would have been obtained with normal COHb levels.",
        explanationWrong:
          "All significant COHb elevations should be corrected for, regardless of whether they are below 10%. Adjusting the predicted value upward would further increase the apparent impairment rather than correct for the artifact. Breath-hold time is standardized and is not modified based on COHb levels.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 6,
        questionText:
          "In impulse oscillometry, the resonant frequency (Fres) is defined as the frequency at which:",
        choices: {
          A: "Resistance equals zero",
          B: "Reactance crosses zero (inertive and elastic forces are equal)",
          C: "Maximum flow occurs",
          D: "Impedance is at its maximum value",
        },
        correctChoice: "B",
        explanationCorrect:
          "The resonant frequency is the point where reactance (X) equals zero, meaning the elastic recoil of the respiratory system (negative reactance) is perfectly balanced by the inertive properties (positive reactance) of the air column. An elevated Fres suggests increased airway obstruction or decreased compliance.",
        explanationWrong:
          "Resistance does not equal zero at the resonant frequency; resistance and reactance are independent components of impedance. Maximum flow is a spirometric concept unrelated to oscillometry. Impedance is not at its maximum at resonance; it is at a minimum because the reactive component is zero.",
        topic: "Impulse oscillometry and forced oscillation technique",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 7,
        questionText:
          "A patient's flow-volume loop shows normal expiratory flows but a flattened inspiratory limb. This pattern is characteristic of:",
        choices: {
          A: "Restrictive lung disease",
          B: "Fixed central airway obstruction",
          C: "Variable extrathoracic obstruction",
          D: "Bilateral diaphragmatic paralysis",
        },
        correctChoice: "C",
        explanationCorrect:
          "Variable extrathoracic obstruction (e.g., vocal cord paralysis, tracheomalacia above the thoracic inlet) causes flattening of the inspiratory limb because during inspiration, negative intraluminal pressure tends to collapse the compliant extrathoracic lesion. During expiration, positive intraluminal pressure stents the lesion open, preserving normal expiratory flows.",
        explanationWrong:
          "Restrictive lung disease reduces overall volumes but preserves normal flow-volume loop shape. Fixed central obstruction flattens both inspiratory and expiratory limbs equally. Bilateral diaphragmatic paralysis reduces volumes, especially in the supine position, but does not specifically flatten the inspiratory limb of the flow-volume loop.",
        topic: "Advanced flow-volume loop analysis",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 8,
        questionText:
          "The maximum expiratory pressure (MEP) test primarily assesses the strength of which muscles?",
        choices: {
          A: "The abdominal and internal intercostal muscles",
          B: "The diaphragm exclusively",
          C: "The sternocleidomastoid muscles",
          D: "The external intercostals and scalene muscles",
        },
        correctChoice: "A",
        explanationCorrect:
          "MEP measures the maximum pressure generated during a forceful expiratory effort against an occluded airway, primarily reflecting the strength of the expiratory muscles: the abdominal muscles (rectus abdominis, internal and external obliques, transversus abdominis) and the internal intercostal muscles.",
        explanationWrong:
          "The diaphragm is the primary inspiratory muscle assessed by MIP, not MEP. The sternocleidomastoid muscles are accessory inspiratory muscles. The external intercostals and scalenes are inspiratory muscles, not expiratory muscles.",
        topic: "Respiratory muscle strength testing (MIP/MEP)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 9,
        questionText:
          "A diver ascending from depth develops symptoms of dyspnea and chest pain. Pulmonary function testing shows a sudden decrease in DLCO and new restrictive defect. The most likely diagnosis is:",
        choices: {
          A: "Nitrogen narcosis",
          B: "Decompression sickness (the bends)",
          C: "Oxygen toxicity",
          D: "Pulmonary barotrauma with arterial gas embolism",
        },
        correctChoice: "D",
        explanationCorrect:
          "Pulmonary barotrauma during ascent can cause alveolar rupture and arterial gas embolism. The sudden decrease in DLCO reflects damage to the alveolar-capillary membrane, and the restrictive defect results from pulmonary hemorrhage or edema. This is a medical emergency requiring immediate hyperbaric treatment.",
        explanationWrong:
          "Nitrogen narcosis occurs at depth, not during ascent, and resolves upon ascending. Decompression sickness primarily affects joints and the spinal cord, not typically presenting as an acute restrictive defect with decreased DLCO. Oxygen toxicity develops with prolonged exposure and would not present acutely during ascent.",
        topic: "High-altitude and diving physiology testing",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 10,
        questionText:
          "When performing FeNO measurements, which of the following factors would DECREASE the measured FeNO level?",
        choices: {
          A: "Atopic dermatitis",
          B: "Active eosinophilic esophagitis",
          C: "Untreated allergic asthma",
          D: "Current cigarette smoking",
        },
        correctChoice: "D",
        explanationCorrect:
          "Cigarette smoking acutely reduces FeNO levels due to the high concentration of NO in cigarette smoke, which causes feedback downregulation of nitric oxide synthase in the airway epithelium. Patients should refrain from smoking for at least 1 hour before testing, though chronic effects may persist.",
        explanationWrong:
          "Atopic dermatitis is associated with atopy, which tends to increase FeNO. Eosinophilic esophagitis can elevate FeNO through eosinophilic inflammation. Untreated allergic asthma is the classic cause of elevated FeNO due to eosinophilic airway inflammation.",
        topic: "Exhaled nitric oxide (FeNO) measurement and interpretation",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 11,
        questionText:
          "In a mixed acid-base disorder, a patient presents with pH 7.35, PaCO2 60 mmHg, HCO3 33 mEq/L. Using Winter's formula (expected PaCO2 = 1.5 × HCO3 + 8 ± 2), this patient has:",
        choices: {
          A: "Chronic respiratory acidosis with appropriate metabolic compensation",
          B: "Primary metabolic alkalosis with primary respiratory acidosis",
          C: "Acute respiratory acidosis with metabolic alkalosis",
          D: "Primary metabolic alkalosis with appropriate respiratory compensation",
        },
        correctChoice: "A",
        explanationCorrect:
          "The elevated PaCO2 indicates respiratory acidosis and the elevated HCO3 indicates compensation. In chronic respiratory acidosis, HCO3 rises approximately 3.5 mEq/L per 10 mmHg increase in PaCO2. For a PaCO2 of 60 (increase of 20 from normal 40), the expected HCO3 rise is approximately 7 mEq/L (from 24 to 31-33), which matches the observed 33 mEq/L. The near-normal pH confirms adequate compensation.",
        explanationWrong:
          "Winter's formula applies to metabolic acidosis, not this scenario. A primary metabolic alkalosis with respiratory acidosis would be a mixed disorder but the HCO3 level matches expected compensation for chronic respiratory acidosis. Acute respiratory acidosis would show minimal HCO3 compensation (only 1 mEq/L per 10 mmHg PaCO2 increase).",
        topic: "Advanced ABG interpretation (mixed acid-base disorders)",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 12,
        questionText:
          "Static lung compliance (Cst) is measured at 0.05 L/cmH2O (normal approximately 0.2 L/cmH2O). This finding is most consistent with:",
        choices: {
          A: "Emphysema",
          B: "Pulmonary fibrosis",
          C: "Asthma during remission",
          D: "Normal aging",
        },
        correctChoice: "B",
        explanationCorrect:
          "A markedly reduced static compliance (0.05 L/cmH2O compared to normal 0.2 L/cmH2O) indicates stiff lungs. Pulmonary fibrosis causes increased elastic recoil and decreased compliance due to collagen deposition and architectural distortion of the lung parenchyma.",
        explanationWrong:
          "Emphysema increases lung compliance due to destruction of elastic tissue. Asthma in remission typically has near-normal compliance. Normal aging causes a slight increase in compliance, not a dramatic decrease.",
        topic: "Lung mechanics and compliance measurements",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 13,
        questionText:
          "When performing spirometry on a 3-year-old using incentive animations, the technologist should prioritize which of the following?",
        choices: {
          A: "Obtaining at least 8 maneuvers to ensure reproducibility",
          B: "Requiring back-extrapolated volume less than 80 mL",
          C: "Accepting the highest FEV0.75 if FEV1 cannot be reliably obtained",
          D: "Using adult reference equations scaled by height",
        },
        correctChoice: "C",
        explanationCorrect:
          "In preschool children, forced expiration may be complete in less than 1 second. ATS/ERS guidelines for preschool spirometry recommend reporting FEV0.5 or FEV0.75 when FEV1 is not achievable because the child empties their lungs before 1 second. These shorter time-point values provide clinically useful information about airway function.",
        explanationWrong:
          "Eight maneuvers would likely exhaust a 3-year-old, leading to declining effort quality. The back-extrapolated volume criterion for preschoolers is 80 mL or 12.5% of FVC, which is more lenient than adult criteria. Adult reference equations are not appropriate for preschool-age children; specific pediatric reference equations must be used.",
        topic: "Pediatric PFT testing techniques and interpretation",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 14,
        questionText:
          "A PFT laboratory's biological control subject shows a progressive downward trend in FVC measurements over 6 months with no change in health status. The most appropriate action is to:",
        choices: {
          A: "Replace the biological control subject",
          B: "Recalibrate or service the spirometer and verify with a calibration syringe",
          C: "Increase the number of daily calibration checks",
          D: "Investigate for possible systematic equipment drift by checking calibration, software, and environmental factors",
        },
        correctChoice: "D",
        explanationCorrect:
          "A progressive trend in bio-QC measurements with an unchanged health status of the control subject suggests systematic equipment drift. A comprehensive investigation should include checking calibration with a certified syringe, verifying software settings, assessing environmental conditions (temperature, humidity), and inspecting the flow sensor and tubing for leaks or contamination.",
        explanationWrong:
          "Replacing the biological control subject would mask the equipment problem. Simply recalibrating without a full investigation may miss the root cause. Increasing calibration frequency alone does not address the underlying issue causing the drift.",
        topic: "Advanced quality control and biological controls",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 15,
        questionText:
          "For a volume-displacement spirometer, a valid calibration verification requires testing with a calibration syringe at:",
        choices: {
          A: "At least three different flow rates (low, medium, high) to verify linearity",
          B: "Only the maximum flow rate to test worst-case accuracy",
          C: "Room temperature only, regardless of patient testing conditions",
          D: "A single standard flow rate with three repetitions",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards require calibration verification using a calibration syringe at multiple flow rates (typically low, medium, and high) to ensure accuracy across the range of flows that patients generate during testing. This verifies both volume accuracy and linearity of the device.",
        explanationWrong:
          "Testing at only the maximum flow rate would not verify accuracy at lower flows where some devices may have different characteristics. A single flow rate with repetitions checks precision but not linearity across the flow range. Temperature compensation must be verified under actual testing conditions.",
        topic: "Calibration verification and linearity checks",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 16,
        questionText:
          "In a research study comparing two methods of measuring lung volumes, a Bland-Altman plot is used to assess:",
        choices: {
          A: "Statistical significance of the difference between methods",
          B: "Correlation between the two methods",
          C: "Agreement between the two measurement methods by plotting the difference against the average",
          D: "The sensitivity and specificity of each method",
        },
        correctChoice: "C",
        explanationCorrect:
          "A Bland-Altman plot displays the difference between two measurements (y-axis) against their average (x-axis), along with limits of agreement (mean difference ± 1.96 SD). This approach directly assesses the agreement between methods and identifies systematic bias and proportional error, which correlation analysis alone cannot detect.",
        explanationWrong:
          "Statistical significance testing (e.g., t-test) does not assess the degree of agreement between methods. Correlation (r-value) can be high even when two methods have poor agreement with systematic differences. Sensitivity and specificity apply to diagnostic tests, not method comparison studies.",
        topic: "Research methodology in pulmonary function",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 17,
        questionText:
          "Predicted postoperative DLCO (ppo-DLCO) is considered a critical threshold for surgical risk assessment. A ppo-DLCO below what percentage predicted is generally considered high risk for lung resection surgery?",
        choices: {
          A: "60% predicted",
          B: "40% predicted",
          C: "50% predicted",
          D: "30% predicted",
        },
        correctChoice: "B",
        explanationCorrect:
          "A predicted postoperative DLCO below 40% of predicted is generally considered to indicate high surgical risk for lung resection. Patients below this threshold should undergo further evaluation including cardiopulmonary exercise testing to assess operative risk, as the risk of postoperative complications and mortality increases significantly.",
        explanationWrong:
          "A ppo-DLCO of 60% predicted is above the high-risk threshold and would generally be considered acceptable for surgery. 50% predicted is above the standard high-risk cutoff. While 30% predicted is also high risk, the generally accepted threshold for triggering additional workup is 40%.",
        topic: "Pre-operative pulmonary function assessment",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 18,
        questionText:
          "In disability evaluation, the single most objective measure of functional exercise capacity is:",
        choices: {
          A: "VO2max from cardiopulmonary exercise testing",
          B: "The 6-minute walk distance",
          C: "Subjective dyspnea rating on a Borg scale",
          D: "FEV1 percent predicted",
        },
        correctChoice: "A",
        explanationCorrect:
          "VO2max measured during CPET provides the most objective and reproducible measure of an individual's maximum functional exercise capacity, integrating cardiovascular, pulmonary, and peripheral muscle function. It is considered the gold standard for exercise capacity assessment in disability evaluation.",
        explanationWrong:
          "The 6-minute walk distance is effort-dependent and less precise than VO2max, though it is useful for monitoring. The Borg scale is subjective and not suitable as a primary objective measure. FEV1 measures airflow limitation but does not directly assess exercise capacity or functional impairment.",
        topic: "Disability and impairment evaluation",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 19,
        questionText:
          "At high altitude (e.g., 3,500 meters), the primary physiological response affecting pulmonary function testing is:",
        choices: {
          A: "Increased airway resistance due to cold, dry air",
          B: "Decreased hemoglobin-oxygen affinity",
          C: "Hyperventilation resulting in respiratory alkalosis and decreased PaCO2",
          D: "Increased lung compliance",
        },
        correctChoice: "C",
        explanationCorrect:
          "At high altitude, the reduced partial pressure of oxygen triggers the hypoxic ventilatory response, causing hyperventilation. This blows off CO2, resulting in respiratory alkalosis with decreased PaCO2. This compensatory response affects ABG interpretation and must be considered when performing PFT at altitude.",
        explanationWrong:
          "While high-altitude air is cold and dry, the primary physiological adaptation affecting PFT is the ventilatory response, not increased airway resistance. Hemoglobin-oxygen affinity initially increases at altitude (left shift due to alkalosis), not decreases. Lung compliance is not significantly affected by altitude.",
        topic: "High-altitude and diving physiology testing",
      },
      {
        miniExamId: exam2.id,
        questionIndex: 20,
        questionText:
          "In a PFT laboratory, the medical director's role includes all of the following EXCEPT:",
        choices: {
          A: "Interpreting and signing pulmonary function reports",
          B: "Performing daily spirometer calibration checks",
          C: "Establishing and reviewing laboratory policies and procedures",
          D: "Ensuring staff competency and ongoing education",
        },
        correctChoice: "B",
        explanationCorrect:
          "Daily spirometer calibration checks are performed by the PFT technologists, not the medical director. The medical director is responsible for overseeing the laboratory's clinical operations, including interpretation of tests, policy development, quality assurance oversight, and ensuring staff competency.",
        explanationWrong:
          "Interpreting and signing reports is a core medical director responsibility. Establishing policies and procedures is an essential medical director function. Ensuring staff competency and education falls under the medical director's supervisory role.",
        topic: "PFT laboratory management and accreditation",
      },
    ],
  });

  console.log(`Exam 2 created: ${exam2.id} with 20 questions`);

  // ─── EXAM 3 (NOT FREE) ───────────────────────────────────
  // Answer distribution: A=5(Q3,7,10,16,20) B=5(Q4,8,13,17,19) C=5(Q2,5,11,14,18) D=5(Q1,6,9,12,15)
  const exam3 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "RPFT Mini Exam 3",
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
          "When performing single-breath DLCO, the ATS/ERS recommended breath-hold time is:",
        choices: {
          A: "6 seconds from the start of CO inhalation",
          B: "15 seconds to ensure complete gas equilibration",
          C: "Variable, depending on the patient's lung volumes",
          D: "10 seconds ± 2 seconds using the Jones-Meade method",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS standards specify a breath-hold time of 10 ± 2 seconds (8-12 seconds) for single-breath DLCO testing, measured using the Jones-Meade method from the time the inspired volume reaches 90% of the total inhaled volume to the midpoint of the sample collection.",
        explanationWrong:
          "Six seconds is too short for adequate gas equilibration across the alveolar-capillary membrane. Fifteen seconds would allow excessive CO back-pressure buildup and is not recommended. The breath-hold time is standardized and should not vary by patient.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 2,
        questionText:
          "A patient with suspected vocal cord dysfunction (VCD) undergoes flow-volume loop analysis. Which pattern would most support this diagnosis?",
        choices: {
          A: "Reduced peak expiratory flow with normal inspiratory flows",
          B: "Proportionally reduced flows and volumes consistent with restriction",
          C: "Truncated or flattened inspiratory limb with preserved expiratory flows, especially during symptomatic episodes",
          D: "Concave expiratory limb with normal inspiratory flows",
        },
        correctChoice: "C",
        explanationCorrect:
          "Vocal cord dysfunction causes paradoxical adduction of the vocal cords during inspiration, creating a variable extrathoracic obstruction pattern. This produces a truncated or flattened inspiratory limb while expiratory flows remain relatively preserved, as positive pressure during exhalation opens the glottis.",
        explanationWrong:
          "Reduced peak expiratory flow with normal inspiratory flows suggests variable intrathoracic obstruction, not VCD. Proportionally reduced flows and volumes indicate restriction. A concave expiratory limb with normal inspiratory flows is characteristic of obstructive airway disease.",
        topic: "Advanced flow-volume loop analysis",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 3,
        questionText:
          "During methacholine challenge testing, which of the following is an absolute contraindication?",
        choices: {
          A: "Baseline FEV1 less than 50% predicted",
          B: "Mild baseline airway obstruction (FEV1 70% predicted)",
          C: "History of seasonal allergic rhinitis",
          D: "FEV1 greater than 60% predicted with known asthma",
        },
        correctChoice: "A",
        explanationCorrect:
          "A baseline FEV1 less than 50% predicted (or less than 1.0 L) is an absolute contraindication to methacholine challenge testing due to the risk of severe, potentially life-threatening bronchospasm. Patients with already severely compromised airflow are at unacceptable risk from further bronchoconstriction induced by the provocative agent.",
        explanationWrong:
          "Mild baseline obstruction at 70% predicted is a relative concern but not an absolute contraindication if FEV1 is above 60% predicted. Seasonal allergic rhinitis alone is not a contraindication. FEV1 greater than 60% predicted with known asthma would still be testable if the FEV1 is above the safety threshold.",
        topic: "Methacholine and exercise challenge testing protocols",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 4,
        questionText:
          "In CPET, a patient demonstrates a peak VO2 of 14 mL/kg/min (55% predicted), an anaerobic threshold at 40% of predicted VO2max, and heart rate reserve of 0 beats/min with a normal breathing reserve of 35%. The most likely cause of exercise limitation is:",
        choices: {
          A: "Pulmonary vascular disease",
          B: "Cardiovascular limitation",
          C: "Deconditioning",
          D: "Ventilatory limitation",
        },
        correctChoice: "B",
        explanationCorrect:
          "The combination of reduced peak VO2, low anaerobic threshold (early onset), zero heart rate reserve (achieved predicted maximum heart rate), and normal breathing reserve (indicating adequate ventilatory capacity) points to cardiovascular limitation. The heart has reached its maximum output capability before ventilatory limits are reached.",
        explanationWrong:
          "Pulmonary vascular disease would show an elevated VE/VCO2 slope and reduced breathing reserve. Deconditioning shows early AT but typically with submaximal heart rate. Ventilatory limitation would show reduced breathing reserve (typically less than 15%) with available heart rate reserve.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 5,
        questionText:
          "In impulse oscillometry, the area under the reactance curve (AX) represents:",
        choices: {
          A: "Total airway resistance",
          B: "Central airway compliance",
          C: "The integrated low-frequency reactance reflecting peripheral airway and tissue abnormality",
          D: "Upper airway impedance",
        },
        correctChoice: "C",
        explanationCorrect:
          "AX (the reactance area or Goldman triangle) represents the integrated area of the reactance curve between 5 Hz and the resonant frequency. It is a composite measure that reflects the overall degree of peripheral airway and lung tissue abnormality, combining information from both resistance and reactance at low frequencies.",
        explanationWrong:
          "Total airway resistance is measured by R5 or total respiratory resistance, not AX. Central airway compliance is not specifically measured by AX. Upper airway impedance is not what AX represents; AX is an integrated measure of peripheral respiratory mechanics.",
        topic: "Impulse oscillometry and forced oscillation technique",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 6,
        questionText:
          "A spirometry report shows FEV1/FVC of 0.58, FEV1 of 1.8 L (52% predicted), and a convex (bulging) expiratory flow-volume curve. After bronchodilator, FEV1 improves to 2.3 L with a change of 10.5% of predicted FEV1. According to ATS/ERS 2021 criteria, this bronchodilator response is:",
        choices: {
          A: "Positive, exceeding the 10% of predicted threshold",
          B: "Borderline, requiring repeat testing",
          C: "Negative, as the improvement does not reach 12% and 200 mL from baseline",
          D: "Inconclusive due to suboptimal baseline effort",
        },
        correctChoice: "D",
        explanationCorrect:
          "The convex (bulging) expiratory curve is a non-physiologic pattern that may indicate suboptimal effort, hesitation, or glottic closure during the maneuver. Before interpreting bronchodilator response, the validity of the baseline spirometry must be confirmed. While the 10.5% change exceeds the 2021 ATS/ERS threshold of 10% of predicted, the abnormal curve morphology raises concerns about test quality that must be addressed first.",
        explanationWrong:
          "The 12% and 200 mL criterion was the older 2005 standard. The 2021 ATS/ERS update uses change exceeding 10% of predicted as the threshold. However, valid bronchodilator response assessment requires technically acceptable baseline and post-bronchodilator maneuvers, which a convex expiratory curve may not represent.",
        topic: "Bronchodilator response criteria (ATS/ERS 2021 updates)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 7,
        questionText:
          "In pre-operative assessment for lung resection, if both ppo-FEV1 and ppo-DLCO are below 40% predicted, the next recommended step is:",
        choices: {
          A: "Cardiopulmonary exercise testing to determine VO2max",
          B: "Repeat PFTs in 4 weeks to confirm values",
          C: "Proceed directly to surgery with close monitoring",
          D: "Cancel surgery due to prohibitive risk",
        },
        correctChoice: "A",
        explanationCorrect:
          "When ppo-FEV1 and/or ppo-DLCO fall below 40% predicted, current guidelines recommend cardiopulmonary exercise testing to measure VO2max. A VO2max above 10-15 mL/kg/min may still indicate acceptable operative risk, while values below 10 mL/kg/min suggest very high risk.",
        explanationWrong:
          "Repeating PFTs without further functional assessment delays appropriate evaluation. Proceeding directly to surgery without CPET evaluation when ppo values are below 40% is not recommended. While risk is elevated, surgery is not automatically canceled; CPET provides the additional data needed to make an informed decision.",
        topic: "Pre-operative pulmonary function assessment",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 8,
        questionText:
          "A 5-year-old child with cystic fibrosis undergoes lung clearance index (LCI) testing using the multiple breath washout (MBW) technique. An elevated LCI primarily indicates:",
        choices: {
          A: "Reduced diffusing capacity",
          B: "Ventilation inhomogeneity suggesting early peripheral airway disease",
          C: "Inspiratory muscle weakness",
          D: "Central airway collapse",
        },
        correctChoice: "B",
        explanationCorrect:
          "The lung clearance index measures the number of lung turnovers required to wash out an inert tracer gas to 1/40th of its starting concentration. An elevated LCI indicates ventilation inhomogeneity, meaning some lung regions are poorly ventilated compared to others. LCI is particularly sensitive to early peripheral airway disease, often detecting abnormalities before spirometry changes.",
        explanationWrong:
          "Diffusing capacity is measured by DLCO, not LCI. Inspiratory muscle weakness would affect MIP measurements, not LCI. Central airway collapse would affect flow-volume loops rather than ventilation distribution patterns.",
        topic: "Pediatric PFT testing techniques and interpretation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 9,
        questionText:
          "A patient presents with pH 7.52, PaCO2 24 mmHg, HCO3 19 mEq/L, PaO2 105 mmHg. This blood gas is most consistent with:",
        choices: {
          A: "Metabolic alkalosis with respiratory compensation",
          B: "Chronic respiratory alkalosis",
          C: "Acute respiratory acidosis",
          D: "Acute respiratory alkalosis with metabolic compensation in progress",
        },
        correctChoice: "D",
        explanationCorrect:
          "The low PaCO2 (24 mmHg) indicates primary respiratory alkalosis. The HCO3 of 19 mEq/L is lower than normal (24), reflecting early renal compensation (metabolic compensation) for the respiratory alkalosis. In acute respiratory alkalosis, HCO3 drops approximately 2 mEq/L for every 10 mmHg decrease in PaCO2. The expected decrease: 2 × (40-24)/10 = 3.2, giving expected HCO3 of approximately 20.8, which is close to 19.",
        explanationWrong:
          "Metabolic alkalosis would show elevated HCO3 as the primary disturbance. Chronic respiratory alkalosis would show more complete renal compensation with lower HCO3 (approximately 3.5 mEq/L drop per 10 mmHg PaCO2 decrease) and near-normal pH. Acute respiratory acidosis would show elevated PaCO2, not decreased.",
        topic: "Advanced ABG interpretation (mixed acid-base disorders)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 10,
        questionText:
          "During plethysmographic measurement of airway resistance (Raw), panting frequency should be maintained at approximately:",
        choices: {
          A: "1-2 Hz to minimize upper airway artifact and ensure measurement of lower airway resistance",
          B: "5-6 Hz to match the respiratory system's resonant frequency",
          C: "As fast as possible to improve signal-to-noise ratio",
          D: "Normal tidal breathing frequency",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS guidelines recommend panting at approximately 1-2 Hz during plethysmographic measurement of airway resistance. This frequency minimizes thermal and humidity artifacts, reduces cheek and upper airway wall compliance effects, and ensures that the measured resistance primarily reflects lower and central airway resistance.",
        explanationWrong:
          "Panting at 5-6 Hz may introduce upper airway artifacts and is difficult for most patients to perform. Panting as fast as possible increases the contribution of upper airway compliance to the measurement. Normal tidal breathing frequency is too slow and does not generate the pressure differentials needed for accurate Raw measurement.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 11,
        questionText:
          "FeNO levels may be falsely elevated by all of the following EXCEPT:",
        choices: {
          A: "Viral upper respiratory infection",
          B: "Nasal contamination during the exhalation maneuver",
          C: "Recent spirometry testing performed before FeNO measurement",
          D: "Consumption of nitrate-rich foods (e.g., lettuce, beets)",
        },
        correctChoice: "C",
        explanationCorrect:
          "Spirometry performed BEFORE FeNO measurement can transiently decrease FeNO levels, not elevate them. Deep inspiration maneuvers during spirometry temporarily reduce exhaled NO through airway stretch-induced suppression of NO production. ATS/ERS guidelines recommend performing FeNO measurements before spirometry to avoid this artifact.",
        explanationWrong:
          "Viral upper respiratory infections can increase FeNO through airway inflammation. Nasal contamination introduces high concentrations of nasal NO into the exhaled sample, falsely elevating oral FeNO levels. Nitrate-rich foods can increase systemic NO production and potentially elevate FeNO.",
        topic: "Exhaled nitric oxide (FeNO) measurement and interpretation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 12,
        questionText:
          "In a PFT laboratory, a Levey-Jennings control chart for biological quality control shows two consecutive data points beyond 2 standard deviations on the same side of the mean. According to Westgard rules, this triggers the:",
        choices: {
          A: "1-2s warning rule",
          B: "R-4s rule",
          C: "10x rule",
          D: "2-2s rejection rule",
        },
        correctChoice: "D",
        explanationCorrect:
          "The 2-2s Westgard rule is violated when two consecutive control measurements exceed 2 standard deviations from the mean on the same side (both above or both below). This indicates systematic error and requires investigation of the equipment before further patient testing.",
        explanationWrong:
          "The 1-2s rule is a warning rule triggered by a single point beyond 2 SD, prompting closer monitoring but not rejection. The R-4s rule applies when the range between two consecutive controls exceeds 4 SD (one above +2 SD and one below -2 SD), indicating random error. The 10x rule applies when 10 consecutive points fall on the same side of the mean.",
        topic: "Advanced quality control and biological controls",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 13,
        questionText:
          "A patient with bilateral diaphragmatic paralysis would be expected to show which characteristic finding?",
        choices: {
          A: "Markedly increased residual volume",
          B: "A greater than 25% decrease in FVC from sitting to supine position",
          C: "Normal MIP with reduced MEP",
          D: "Increased DLCO",
        },
        correctChoice: "B",
        explanationCorrect:
          "Bilateral diaphragmatic paralysis characteristically causes a significant postural drop in FVC (greater than 25% decrease from sitting to supine). In the supine position, the paralyzed diaphragm cannot resist the weight of the abdominal contents, which push into the thorax and reduce lung volumes. Unilateral paralysis typically causes a 10-15% decrease.",
        explanationWrong:
          "Residual volume may be mildly increased but is not the hallmark finding. MIP would be markedly reduced (not normal) since the diaphragm is the primary inspiratory muscle. DLCO would be reduced due to the associated decrease in lung volumes, not increased.",
        topic: "Respiratory muscle strength testing (MIP/MEP)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 14,
        questionText:
          "Dynamic lung compliance measured at increasing respiratory frequencies shows a progressive decrease. This frequency dependence of compliance is a sensitive indicator of:",
        choices: {
          A: "Pleural effusion",
          B: "Chest wall stiffness",
          C: "Small airway obstruction causing regional time-constant inequalities",
          D: "Large airway collapse",
        },
        correctChoice: "C",
        explanationCorrect:
          "Frequency dependence of compliance occurs when lung units have different time constants (resistance × compliance). At higher breathing frequencies, lung units with longer time constants (due to increased small airway resistance) cannot fully fill and empty, reducing their contribution to overall compliance. This is one of the earliest detectable signs of small airway disease.",
        explanationWrong:
          "Pleural effusion reduces overall compliance but does not cause frequency dependence. Chest wall stiffness uniformly reduces compliance at all frequencies. Large airway collapse would affect flow-volume curves but would not cause the progressive frequency-dependent compliance decrease seen with small airway heterogeneity.",
        topic: "Lung mechanics and compliance measurements",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 15,
        questionText:
          "In a study evaluating a new PFT device, the coefficient of variation (CV) is 3.5% across 20 repeated measurements on the same subject. For the device to meet ATS/ERS standards, the CV for volume measurements should be no greater than:",
        choices: {
          A: "5%",
          B: "1%",
          C: "2%",
          D: "3%",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS standards require that volume measurement devices demonstrate a coefficient of variation of no greater than approximately 3% for repeated measurements. A CV of 3.5% would therefore exceed this threshold, suggesting the device may not meet precision requirements.",
        explanationWrong:
          "A 5% CV would be too lenient for precision requirements. A 1% CV would be exceptionally stringent and is not the standard requirement. While lower CVs are desirable, the generally accepted maximum is approximately 3%.",
        topic: "Calibration verification and linearity checks",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 16,
        questionText:
          "The DLCO/VA ratio (also called KCO) is most useful for distinguishing between:",
        choices: {
          A: "Reduced DLCO due to parenchymal destruction (emphysema) versus reduced DLCO due to loss of lung volume (pneumonectomy or neuromuscular disease)",
          B: "Obstructive and restrictive lung disease based on spirometry alone",
          C: "Acute and chronic respiratory failure",
          D: "Central and peripheral airway obstruction",
        },
        correctChoice: "A",
        explanationCorrect:
          "KCO (DLCO/VA) normalizes the diffusing capacity for the accessible alveolar volume. In emphysema, both DLCO and VA are reduced but KCO is disproportionately low because the remaining lung has impaired gas exchange. After pneumonectomy or with neuromuscular disease, the remaining lung parenchyma is normal, so KCO is normal or even supranormal despite reduced absolute DLCO.",
        explanationWrong:
          "KCO does not distinguish obstructive from restrictive disease by spirometric criteria. It does not differentiate acute from chronic respiratory failure. It is not related to differentiating central from peripheral airway obstruction.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 17,
        questionText:
          "During spirometry quality assessment, back-extrapolated volume (BEV) for an adult must be less than:",
        choices: {
          A: "100 mL or 5% of FVC",
          B: "150 mL or 5% of FVC, whichever is greater",
          C: "200 mL regardless of FVC",
          D: "50 mL in all cases",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS 2019 standards require the back-extrapolated volume to be less than 5% of FVC or 150 mL, whichever is greater. BEV assesses the quality of the start of the forced expiratory maneuver — an excessive BEV indicates a hesitant or slow start that may underestimate PEF and FEV1.",
        explanationWrong:
          "100 mL or 5% was an older criterion. A fixed 200 mL without percentage consideration is not the standard. A fixed 50 mL threshold is too stringent, especially for patients with larger lung volumes.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 18,
        questionText:
          "When evaluating a patient for disability due to asbestos-related lung disease, which combination of findings most strongly supports the claim?",
        choices: {
          A: "Isolated reduction in FEV1 with normal FVC and DLCO",
          B: "Normal spirometry with elevated FeNO",
          C: "Restrictive pattern on spirometry, reduced DLCO, and radiographic evidence of pleural or parenchymal disease",
          D: "Obstructive pattern responsive to bronchodilator",
        },
        correctChoice: "C",
        explanationCorrect:
          "Asbestos-related lung disease (asbestosis) characteristically produces a restrictive ventilatory defect with reduced DLCO due to interstitial fibrosis, combined with radiographic evidence of parenchymal fibrosis or pleural plaques. All three elements together provide the strongest support for a disability claim related to asbestos exposure.",
        explanationWrong:
          "Isolated FEV1 reduction suggests obstruction, not asbestosis. Elevated FeNO with normal spirometry suggests eosinophilic inflammation, not fibrotic disease. An obstructive pattern responsive to bronchodilator is characteristic of asthma, not asbestosis.",
        topic: "Disability and impairment evaluation",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 19,
        questionText:
          "In research methodology, the power of a study to detect a clinically significant difference in FEV1 between treatment groups is 0.80. This means:",
        choices: {
          A: "There is an 80% chance the results are clinically significant",
          B: "There is an 80% probability of detecting a true difference if one exists",
          C: "The false positive rate is 80%",
          D: "80% of subjects will show improvement",
        },
        correctChoice: "B",
        explanationCorrect:
          "Statistical power of 0.80 means there is an 80% probability (1 − beta) of correctly rejecting the null hypothesis when a true difference exists between groups. In other words, the study has an 80% chance of detecting a clinically meaningful difference in FEV1 if one truly exists, and a 20% chance of a type II error (missing a real difference).",
        explanationWrong:
          "Power relates to detecting a true difference, not to clinical significance of results. The false positive rate (alpha) is separate from power and is typically set at 0.05. Power does not predict the proportion of subjects who will show improvement.",
        topic: "Research methodology in pulmonary function",
      },
      {
        miniExamId: exam3.id,
        questionIndex: 20,
        questionText:
          "A flow-volume loop demonstrates a variable intrathoracic obstruction pattern. During which phase of respiration is flow most affected?",
        choices: {
          A: "Expiration, because positive intrathoracic pressure compresses the airway at the site of the intrathoracic lesion",
          B: "Inspiration equally with expiration",
          C: "Neither phase is significantly affected",
          D: "Inspiration, because negative intrathoracic pressure dilates the extrathoracic airway",
        },
        correctChoice: "A",
        explanationCorrect:
          "In variable intrathoracic obstruction (e.g., tracheomalacia below the thoracic inlet, intrathoracic tracheal tumor), positive intrathoracic pressure during forced expiration compresses the airway at the lesion site, causing flow limitation and a plateau on the expiratory limb. During inspiration, negative intrathoracic pressure tends to stent the airway open, preserving inspiratory flow.",
        explanationWrong:
          "Equal involvement of both phases would indicate a fixed obstruction, not variable. Significant flow limitation does occur — that is the diagnostic finding. Inspiration in variable intrathoracic obstruction is relatively preserved because negative pleural pressure supports airway patency.",
        topic: "Advanced flow-volume loop analysis",
      },
    ],
  });

  console.log(`Exam 3 created: ${exam3.id} with 20 questions`);

  // ─── EXAM 4 (NOT FREE) ───────────────────────────────────
  // Answer distribution: A=5(Q2,5,12,15,19) B=5(Q3,9,11,16,18) C=5(Q1,6,10,17,20) D=5(Q4,7,8,13,14)
  const exam4 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "RPFT Mini Exam 4",
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
          "During CPET, the oxygen pulse (VO2/HR) at peak exercise is 8 mL/beat (predicted 14 mL/beat). A low oxygen pulse most likely reflects:",
        choices: {
          A: "Ventilatory limitation",
          B: "Poor patient effort",
          C: "Reduced stroke volume or impaired peripheral oxygen extraction",
          D: "Hyperventilation",
        },
        correctChoice: "C",
        explanationCorrect:
          "Oxygen pulse equals VO2 divided by heart rate and represents the product of stroke volume and arteriovenous oxygen difference. A low O2 pulse suggests either reduced stroke volume (cardiac dysfunction, hypovolemia) or impaired peripheral oxygen extraction (deconditioning, peripheral vascular disease). It is a key indicator of cardiovascular function during exercise.",
        explanationWrong:
          "Ventilatory limitation would manifest as reduced breathing reserve, not primarily as reduced O2 pulse. Poor effort would result in submaximal heart rate and VO2 but would not specifically reduce O2 pulse. Hyperventilation affects CO2 output and ventilatory equivalents but does not directly reduce O2 pulse.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 2,
        questionText:
          "The GLI-2012 (Global Lung Function Initiative) reference equations for spirometry use which statistical approach to define the lower limit of normal (LLN)?",
        choices: {
          A: "The z-score approach, with LLN defined as a z-score of −1.645 (5th percentile)",
          B: "80% of predicted as the fixed lower limit",
          C: "The 95% confidence interval of the mean predicted value",
          D: "Two standard deviations below the mean predicted value",
        },
        correctChoice: "A",
        explanationCorrect:
          "GLI-2012 reference equations use the LMS (Lambda-Mu-Sigma) method to generate z-scores. The LLN is defined as a z-score of −1.645, corresponding to the 5th percentile of the healthy reference population. This approach accounts for age-related changes in variability and skewness of the distribution, providing more accurate normal limits than fixed percentage cutoffs.",
        explanationWrong:
          "Using 80% of predicted is an outdated approach that misclassifies many patients, particularly elderly individuals (overdiagnosis) and young adults (underdiagnosis). The 95% confidence interval of the mean is a different statistical concept. Two standard deviations below the mean does not correspond to exactly the 5th percentile and does not account for distributional skewness.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 3,
        questionText:
          "A patient's nitrogen washout test reveals an increase in nitrogen concentration of 3% between 750 mL and 1250 mL of exhaled volume during phase III (alveolar plateau). This increased phase III slope indicates:",
        choices: {
          A: "Normal ventilation distribution",
          B: "Uneven ventilation distribution suggesting small airway dysfunction",
          C: "Increased dead space ventilation",
          D: "Equipment contamination with ambient nitrogen",
        },
        correctChoice: "B",
        explanationCorrect:
          "The phase III slope of the single-breath nitrogen washout test reflects the evenness of ventilation distribution. An increased slope (normally less than 1-1.5% N2/L) indicates uneven ventilation, where different lung regions empty at different rates due to regional differences in airway resistance or compliance. This is an early sensitive indicator of small airway disease.",
        explanationWrong:
          "Normal ventilation distribution would produce a flat or nearly flat phase III slope. Increased dead space affects phase I and II of the washout, not the alveolar plateau slope. Equipment contamination would produce erratic rather than systematically increased nitrogen concentrations.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 4,
        questionText:
          "When measuring DLCO, the inspired volume (VI) must reach at least what percentage of the patient's largest measured VC for the test to be acceptable?",
        choices: {
          A: "75%",
          B: "80%",
          C: "95%",
          D: "85%",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS standards require that the inspired volume during DLCO testing reach at least 85% of the largest measured vital capacity (from a recent spirometry session or current DLCO maneuver set). Submaximal inspiration reduces the alveolar surface area available for gas exchange, leading to underestimation of the true DLCO.",
        explanationWrong:
          "75% is below the minimum acceptable threshold. 80% is close but not the correct standard. 95% would be ideal but is not the minimum requirement, as some patients cannot consistently achieve this target.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 5,
        questionText:
          "In forced oscillation technique (FOT), resistance measured at 5 Hz (R5) is 150% of predicted. R20 is normal. Reactance at 5 Hz (X5) is markedly more negative than predicted. This pattern is most consistent with:",
        choices: {
          A: "Peripheral airway obstruction with increased lung stiffness or air trapping",
          B: "Central airway obstruction",
          C: "Normal lung mechanics in an obese patient",
          D: "Isolated upper airway obstruction",
        },
        correctChoice: "A",
        explanationCorrect:
          "Elevated R5 with normal R20 indicates peripheral airway obstruction (frequency dependence of resistance). The markedly negative X5 reflects decreased peripheral compliance due to air trapping, increased elastic load, or heterogeneous lung mechanics. Together, these findings indicate significant peripheral airway disease.",
        explanationWrong:
          "Central airway obstruction would elevate both R5 and R20 equally. In obesity, resistance may be mildly elevated but X5 is typically not markedly abnormal. Isolated upper airway obstruction would increase resistance at all frequencies without the frequency dependence pattern.",
        topic: "Impulse oscillometry and forced oscillation technique",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 6,
        questionText:
          "During a eucapnic voluntary hyperventilation (EVH) challenge for exercise-induced bronchoconstriction, the patient breathes a gas mixture containing:",
        choices: {
          A: "100% oxygen",
          B: "21% O2 with 5% CO2, balance nitrogen",
          C: "21% O2 with 5% CO2 to maintain eucapnia during hyperventilation",
          D: "Room air with no supplemental gases",
        },
        correctChoice: "C",
        explanationCorrect:
          "The EVH challenge requires the patient to hyperventilate a dry gas mixture containing 5% CO2 (with 21% O2, balance nitrogen) at a target ventilation of 30× FEV1 for 6 minutes. The 5% CO2 prevents hypocapnia that would otherwise result from voluntary hyperventilation, maintaining a eucapnic state.",
        explanationWrong:
          "100% oxygen is not used in EVH testing. While options B and C describe similar mixtures, the key purpose is maintaining eucapnia during hyperventilation. Room air alone would cause significant hypocapnia during hyperventilation, confounding the results and potentially causing symptoms unrelated to bronchoconstriction.",
        topic: "Methacholine and exercise challenge testing protocols",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 7,
        questionText:
          "A patient has MIP of −90 cmH2O (normal) and MEP of +40 cmH2O (reduced, predicted approximately +150 cmH2O). This isolated MEP reduction most likely indicates:",
        choices: {
          A: "Bilateral phrenic nerve palsy",
          B: "Generalized neuromuscular disease",
          C: "Poor patient effort",
          D: "Expiratory muscle weakness, possibly affecting cough effectiveness",
        },
        correctChoice: "D",
        explanationCorrect:
          "An isolated reduction in MEP with preserved MIP indicates specific weakness of the expiratory muscles (abdominal and internal intercostal muscles) while inspiratory muscles remain intact. This pattern can be seen in specific thoracic or lumbar spinal cord injuries, selective myopathy, or post-abdominal surgery, and may impair cough effectiveness.",
        explanationWrong:
          "Bilateral phrenic nerve palsy would reduce MIP, not MEP. Generalized neuromuscular disease would reduce both MIP and MEP. Poor effort is possible but less likely when MIP is normal, as both tests require similar cooperation.",
        topic: "Respiratory muscle strength testing (MIP/MEP)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 8,
        questionText:
          "Oxygen toxicity from prolonged hyperbaric oxygen exposure primarily causes which pulmonary function abnormality?",
        choices: {
          A: "Isolated increase in airway resistance",
          B: "Increased lung compliance",
          C: "Obstructive ventilatory defect on spirometry",
          D: "Decreased vital capacity and reduced DLCO due to alveolar-capillary membrane damage",
        },
        correctChoice: "D",
        explanationCorrect:
          "Prolonged exposure to high partial pressures of oxygen damages the alveolar-capillary membrane through oxidative stress, causing inflammation and eventual fibrosis. This manifests as decreased vital capacity (restrictive defect) and reduced DLCO. Vital capacity reduction is one of the earliest detectable PFT changes and is used to monitor for oxygen toxicity during hyperbaric treatments.",
        explanationWrong:
          "Airway resistance is not the primary target of oxygen toxicity. Lung compliance decreases (not increases) due to membrane thickening and edema. While some airway changes may occur, the primary pattern is restrictive, not obstructive.",
        topic: "High-altitude and diving physiology testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 9,
        questionText:
          "A spirometry session yields two acceptable maneuvers with the following results: Maneuver 1: FEV1 2.85 L, FVC 3.90 L. Maneuver 2: FEV1 2.78 L, FVC 3.82 L. The patient is unable to perform additional maneuvers. According to ATS/ERS grading, this session receives grade:",
        choices: {
          A: "A",
          B: "B",
          C: "D",
          D: "C",
        },
        correctChoice: "B",
        explanationCorrect:
          "With two acceptable maneuvers, the session cannot receive grade A (which requires 3 acceptable maneuvers). The repeatability of FEV1 (2.85 − 2.78 = 0.07 L = 70 mL) and FVC (3.90 − 3.82 = 0.08 L = 80 mL) are both within 150 mL. Two acceptable maneuvers with repeatability within 150 mL qualifies for grade B.",
        explanationWrong:
          "Grade A requires a minimum of 3 acceptable maneuvers. Grade C would apply if repeatability criteria were not met or under other specific conditions. Grade D applies when only one acceptable maneuver is obtained.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 10,
        questionText:
          "In a PFT laboratory, BTPS correction converts measured gas volumes to body conditions. BTPS stands for:",
        choices: {
          A: "Barometric Temperature Pressure Standard",
          B: "Body Temperature Pressure Standard",
          C: "Body Temperature (37°C), ambient Pressure, and Saturated with water vapor",
          D: "Baseline Temperature Pressure Saturation",
        },
        correctChoice: "C",
        explanationCorrect:
          "BTPS stands for Body Temperature (37°C), ambient Pressure, and Saturated with water vapor. All spirometric volumes must be corrected to BTPS conditions because gas in the lungs is at body temperature, ambient barometric pressure, and fully saturated with water vapor. This correction ensures accurate comparison with reference values.",
        explanationWrong:
          "The other options are fabricated acronym expansions and do not represent the correct definition of BTPS as used in pulmonary function testing standards.",
        topic: "Calibration verification and linearity checks",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 11,
        questionText:
          "A patient with pH 7.15, PaCO2 70 mmHg, HCO3 24 mEq/L, anion gap 22 mEq/L has which acid-base disturbance?",
        choices: {
          A: "Isolated acute respiratory acidosis",
          B: "Combined acute respiratory acidosis and anion-gap metabolic acidosis",
          C: "Metabolic acidosis with respiratory compensation",
          D: "Triple acid-base disorder",
        },
        correctChoice: "B",
        explanationCorrect:
          "The markedly elevated PaCO2 indicates acute respiratory acidosis. The normal HCO3 of 24 confirms it is acute (no renal compensation). However, in acute respiratory acidosis, HCO3 should rise approximately 1 mEq/L per 10 mmHg increase in PaCO2 (expected HCO3 approximately 27 mEq/L). The actual HCO3 of 24 is lower than expected, and the elevated anion gap of 22 indicates a concurrent anion-gap metabolic acidosis is consuming the expected HCO3 rise.",
        explanationWrong:
          "Isolated acute respiratory acidosis would show the expected HCO3 rise and normal anion gap. Metabolic acidosis with respiratory compensation would show low HCO3 as the primary disturbance. A triple disorder requires three primary disturbances; this case has two (respiratory acidosis and metabolic acidosis).",
        topic: "Advanced ABG interpretation (mixed acid-base disorders)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 12,
        questionText:
          "In pediatric pulmonary function testing, the raised volume rapid thoracoabdominal compression (RVRTC) technique is used to obtain which measurement in infants?",
        choices: {
          A: "Forced vital capacity and forced expiratory flows comparable to adult spirometry",
          B: "Tidal breathing flow-volume loops only",
          C: "Airway resistance by plethysmography",
          D: "Functional residual capacity by gas dilution",
        },
        correctChoice: "A",
        explanationCorrect:
          "The RVRTC technique inflates the infant's lungs to a raised volume (near TLC) and then rapidly compresses the thorax and abdomen with an inflatable jacket. This produces forced expiratory flow-volume curves analogous to adult FVC maneuvers, allowing measurement of FVC, FEV0.5, and forced expiratory flows in infants who cannot perform voluntary spirometry.",
        explanationWrong:
          "Tidal breathing flow-volume loops use passive tidal breathing without the raised volume or compression technique. Infant plethysmography uses different methodology. FRC by gas dilution uses nitrogen washout or helium dilution, not thoracoabdominal compression.",
        topic: "Pediatric PFT testing techniques and interpretation",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 13,
        questionText:
          "A flow-volume loop shows a saw-tooth pattern (oscillations) on both the inspiratory and expiratory limbs. This finding is most suggestive of:",
        choices: {
          A: "Tracheobronchomalacia",
          B: "Laryngeal tremor",
          C: "Paradoxical vocal fold motion",
          D: "Obstructive sleep apnea or upper airway instability such as in Parkinson disease",
        },
        correctChoice: "D",
        explanationCorrect:
          "A saw-tooth pattern (regular oscillations at approximately 6-10 Hz) on both limbs of the flow-volume loop is associated with upper airway instability, commonly seen in obstructive sleep apnea (due to pharyngeal wall flutter) and in neuromuscular diseases such as Parkinson disease (due to rhythmic tremor of upper airway structures).",
        explanationWrong:
          "Tracheobronchomalacia typically shows expiratory flow limitation without the regular oscillatory pattern. Laryngeal tremor may contribute to oscillations but is less commonly associated with this specific bilateral saw-tooth pattern. Paradoxical vocal fold motion produces an inspiratory plateau, not oscillations.",
        topic: "Advanced flow-volume loop analysis",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 14,
        questionText:
          "For FeNO measurement, the recommended constant expiratory flow rate for adults according to ATS/ERS guidelines is:",
        choices: {
          A: "100 mL/s",
          B: "30 mL/s",
          C: "150 mL/s",
          D: "50 mL/s",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS guidelines recommend a constant expiratory flow rate of 50 mL/s for standard adult FeNO measurement. This flow rate provides optimal sensitivity for detecting lower airway NO production. The target must be maintained with a tolerance of ± 10% (45-55 mL/s) throughout the exhalation.",
        explanationWrong:
          "100 mL/s is used in some research protocols for assessing proximal airway NO but is not the standard clinical flow rate. 30 mL/s would produce artificially high FeNO values due to increased NO accumulation at lower flows. 150 mL/s is too fast and would dilute the exhaled NO concentration.",
        topic: "Exhaled nitric oxide (FeNO) measurement and interpretation",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 15,
        questionText:
          "In a prospective cohort study of occupational lung disease, the most appropriate measure of disease incidence is:",
        choices: {
          A: "Person-years of follow-up with incidence rate calculation",
          B: "Prevalence at the time of enrollment",
          C: "Case-fatality rate over the study period",
          D: "Odds ratio from a cross-sectional analysis",
        },
        correctChoice: "A",
        explanationCorrect:
          "In a prospective cohort study, incidence is best measured using person-years of follow-up, which accounts for varying follow-up times among participants. The incidence rate (number of new cases per person-years at risk) provides the most accurate measure of disease occurrence in the study population.",
        explanationWrong:
          "Prevalence at enrollment measures existing disease, not new cases (incidence). Case-fatality rate measures deaths among those who develop disease, not disease occurrence. Odds ratios are primarily used in case-control studies, not for measuring incidence in cohort studies.",
        topic: "Research methodology in pulmonary function",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 16,
        questionText:
          "In a laboratory accreditation process, proficiency testing requires the PFT lab to:",
        choices: {
          A: "Test all staff members' pulmonary function quarterly",
          B: "Demonstrate accurate measurement on standardized test signals or samples sent by an external agency",
          C: "Calibrate equipment weekly instead of daily",
          D: "Submit all patient reports for external review",
        },
        correctChoice: "B",
        explanationCorrect:
          "Proficiency testing (PT) in laboratory accreditation requires the PFT lab to analyze standardized test samples or waveforms provided by an external proficiency testing organization and return results for comparison against known values or peer laboratory results. This verifies the laboratory's measurement accuracy and identifies potential systematic errors.",
        explanationWrong:
          "Testing staff members' PFT is biological quality control, not proficiency testing. Reducing calibration frequency is not related to proficiency testing and would violate standards. External review of all patient reports is not part of proficiency testing programs.",
        topic: "PFT laboratory management and accreditation",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 17,
        questionText:
          "Specific airway conductance (sGaw) is preferred over raw airway resistance (Raw) in some clinical settings because sGaw:",
        choices: {
          A: "Is easier to measure and requires less patient cooperation",
          B: "Is independent of variations in body size and resting lung volume",
          C: "Corrects for lung volume by dividing airway conductance by the thoracic gas volume at which it was measured",
          D: "Is more sensitive to changes in large airway caliber",
        },
        correctChoice: "C",
        explanationCorrect:
          "Specific airway conductance (sGaw) equals airway conductance (1/Raw) divided by the thoracic gas volume (TGV) at which it was measured. This normalization accounts for the volume-dependent nature of airway resistance, since airway caliber and resistance change with lung volume. This makes sGaw a more reliable measure for comparing airway function between patients or over time.",
        explanationWrong:
          "sGaw requires the same plethysmographic measurement setup as Raw and similar patient cooperation. While it partially accounts for body size through volume correction, its primary advantage is correcting for lung volume differences. sGaw is not specifically more sensitive to large airway changes; it reflects total airway conductance normalized to volume.",
        topic: "Lung mechanics and compliance measurements",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 18,
        questionText:
          "A diver planning a saturation dive to 300 meters seawater (approximately 31 atmospheres absolute) would be breathing which gas mixture to avoid nitrogen narcosis and oxygen toxicity?",
        choices: {
          A: "Nitrox (enriched air with increased oxygen fraction)",
          B: "Heliox (helium-oxygen mixture) with oxygen fraction adjusted for depth",
          C: "Trimix (helium, nitrogen, and oxygen)",
          D: "Pure oxygen at reduced flow rates",
        },
        correctChoice: "B",
        explanationCorrect:
          "At extreme depths like 300 meters, heliox (helium-oxygen) is used because helium does not cause narcosis (unlike nitrogen) and is less dense, reducing work of breathing at high pressures. The oxygen fraction is reduced to maintain a safe partial pressure of oxygen (typically 0.3-0.5 ATA) to avoid oxygen toxicity at the extreme ambient pressure.",
        explanationWrong:
          "Nitrox increases the oxygen fraction, which would cause severe oxygen toxicity at depth. Trimix is used for deep recreational and commercial diving but heliox is preferred for extreme saturation diving. Pure oxygen is lethal at depths beyond approximately 6 meters due to CNS oxygen toxicity.",
        topic: "High-altitude and diving physiology testing",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 19,
        questionText:
          "The bronchodilator response using ATS/ERS 2021 criteria is expressed as a percentage change relative to:",
        choices: {
          A: "The predicted value for the patient",
          B: "The baseline (pre-bronchodilator) value",
          C: "The average of pre- and post-bronchodilator values",
          D: "The lower limit of normal",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS 2021 technical standard defines bronchodilator response as the change in FEV1 or FVC expressed as a percentage of the predicted value (post − pre)/predicted × 100. This approach reduces the bias inherent in using baseline values, where patients with more severe obstruction appear to have larger percentage improvements.",
        explanationWrong:
          "The percentage change from baseline was the older 2005 criterion (12% and 200 mL from baseline). The average of pre- and post-values is not used in current bronchodilator response criteria. The lower limit of normal is used for defining abnormality, not for expressing bronchodilator response.",
        topic: "Bronchodilator response criteria (ATS/ERS 2021 updates)",
      },
      {
        miniExamId: exam4.id,
        questionIndex: 20,
        questionText:
          "A comprehensive disability evaluation for occupational lung disease should include all of the following EXCEPT:",
        choices: {
          A: "Spirometry with bronchodilator testing",
          B: "Assessment of resting and exercise oxygenation",
          C: "Pre- and post-shift peak flow monitoring over several weeks as the sole determinant of impairment",
          D: "DLCO measurement",
        },
        correctChoice: "C",
        explanationCorrect:
          "While pre- and post-shift peak flow monitoring is useful for identifying work-related exposures and temporal patterns, it should not be the sole determinant of impairment. A comprehensive disability evaluation requires multiple objective measures including spirometry, DLCO, lung volumes, exercise testing, and ABGs to fully characterize the degree of functional impairment.",
        explanationWrong:
          "Spirometry with bronchodilator testing is an essential component of disability evaluation. Assessment of resting and exercise oxygenation provides critical information about gas exchange impairment. DLCO measurement assesses alveolar-capillary membrane function and is integral to comprehensive evaluation.",
        topic: "Disability and impairment evaluation",
      },
    ],
  });

  console.log(`Exam 4 created: ${exam4.id} with 20 questions`);

  // ─── EXAM 5 (NOT FREE) ───────────────────────────────────
  // Answer distribution: A=5(Q4,6,11,14,18) B=5(Q1,8,12,15,20) C=5(Q3,7,9,16,19) D=5(Q2,5,10,13,17)
  const exam5 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "RPFT Mini Exam 5",
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
          "During CPET, the breathing reserve is calculated as (1 − VEmax/MVV) × 100. A breathing reserve of 8% at peak exercise indicates:",
        choices: {
          A: "Normal cardiovascular reserve",
          B: "Ventilatory limitation to exercise",
          C: "Malingering or poor effort",
          D: "Peripheral muscle limitation",
        },
        correctChoice: "B",
        explanationCorrect:
          "A breathing reserve less than 15% (sometimes less than 11-15% depending on the laboratory reference) indicates that the patient is using nearly all available ventilatory capacity during peak exercise, consistent with ventilatory limitation. An 8% breathing reserve means the patient reached 92% of their MVV, leaving very little ventilatory reserve.",
        explanationWrong:
          "Normal cardiovascular reserve would typically show a breathing reserve above 15-20%. An 8% breathing reserve indicates genuine effort, not malingering. Peripheral muscle limitation typically presents with early anaerobic threshold and available ventilatory and cardiovascular reserve.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 2,
        questionText:
          "When using the Global Lung Function Initiative (GLI) reference equations for DLCO, the transfer coefficient (KCO) is reported as:",
        choices: {
          A: "DLCO corrected for altitude only",
          B: "A ratio that is useful only in restrictive disease",
          C: "DLCO per unit of inspired volume (VI), not alveolar volume",
          D: "DLCO divided by the alveolar volume (VA) measured during the DLCO maneuver",
        },
        correctChoice: "D",
        explanationCorrect:
          "KCO (transfer coefficient) is calculated as DLCO divided by the alveolar volume (VA) obtained during the DLCO test itself. GLI DLCO reference equations provide predicted values for both DLCO and KCO, with KCO expressed per liter of VA. This normalization helps interpret DLCO in the context of accessible lung volume.",
        explanationWrong:
          "Altitude correction adjusts DLCO separately and is not what KCO represents. KCO is useful in both restrictive and obstructive disease for interpretation. KCO uses alveolar volume (VA), not total inspired volume; VA is calculated by subtracting dead space from the inspired volume and adding tracer gas dilution information.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 3,
        questionText:
          "A plethysmographic measurement yields an FRCpleth of 5.2 L. During the same session, nitrogen washout yields an FRC of 3.8 L. The ratio FRCpleth/FRCN2 is 1.37. In which clinical scenario would this ratio be LEAST expected?",
        choices: {
          A: "Severe COPD with bullous disease",
          B: "Advanced cystic fibrosis",
          C: "Healthy young adult with no respiratory disease",
          D: "Severe asthma with air trapping",
        },
        correctChoice: "C",
        explanationCorrect:
          "In a healthy individual, plethysmographic and gas dilution FRC values should be nearly identical (ratio close to 1.0) because there is no significant trapped gas or poorly ventilated lung regions. A ratio of 1.37 would not be expected in a healthy young adult and would indicate a measurement error or unsuspected pathology.",
        explanationWrong:
          "Severe COPD with bullous disease has extensive trapped gas and poorly ventilated regions, commonly producing ratios above 1.3. Advanced cystic fibrosis causes mucus plugging and air trapping, creating significant discrepancies between methods. Severe asthma with air trapping produces increased trapped gas volume detectable by plethysmography.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 4,
        questionText:
          "In spirometry quality assessment, the end-of-test (EOT) criterion for adults requires that the volume-time curve shows:",
        choices: {
          A: "A plateau with no volume change greater than 25 mL in the final 1 second of expiration, or a total expiratory time of at least 15 seconds",
          B: "Continuous expiratory flow for at least 3 seconds",
          C: "Peak flow achieved within the first 100 milliseconds",
          D: "A minimum forced expiratory time of exactly 6 seconds",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards define the end-of-test criterion as either a plateau (no volume change greater than 25 mL in the final 1 second) or a forced expiratory time of at least 15 seconds, whichever comes first. Meeting either criterion satisfies the EOT requirement and ensures that the patient has exhaled sufficiently.",
        explanationWrong:
          "A minimum of 3 seconds is insufficient for most adults to complete forced expiration. Peak flow timing is related to the start-of-test quality (BEV), not end-of-test. While 6 seconds was previously used as a minimum, the current standard uses the 25 mL plateau criterion or 15 seconds.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 5,
        questionText:
          "During a mannitol challenge test, the test endpoint is reached when FEV1 falls by at least what percentage from baseline?",
        choices: {
          A: "10%",
          B: "20%",
          C: "5%",
          D: "15%",
        },
        correctChoice: "D",
        explanationCorrect:
          "The mannitol (Aridol) indirect bronchoprovocation challenge uses a positive response threshold of a 15% decrease in FEV1 from baseline, or a 10% decrease between consecutive doses. This threshold differs from methacholine challenge (20% fall) because mannitol acts through an indirect mechanism of osmotic-induced mast cell degranulation.",
        explanationWrong:
          "A 10% fall between consecutive doses is an alternative endpoint but 15% from baseline is the primary criterion. A 20% fall is the threshold for methacholine (direct) challenge, not mannitol. A 5% fall is within normal variability and would not constitute a positive response.",
        topic: "Methacholine and exercise challenge testing protocols",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 6,
        questionText:
          "When measuring MIP, the measurement is ideally initiated from:",
        choices: {
          A: "Residual volume to maximize the length-tension relationship of the inspiratory muscles",
          B: "Functional residual capacity",
          C: "Total lung capacity",
          D: "Any lung volume, as it does not affect the measurement",
        },
        correctChoice: "A",
        explanationCorrect:
          "MIP is optimally measured from residual volume (RV) because at RV, the inspiratory muscles (particularly the diaphragm) are at their optimal length on the length-tension curve, producing maximum force. Additionally, the elastic recoil of the lung and chest wall at RV assists the inspiratory effort, producing the highest (most negative) MIP values.",
        explanationWrong:
          "FRC does not optimize the length-tension advantage of inspiratory muscles. TLC is the starting position for MEP measurement, not MIP. Lung volume significantly affects MIP values due to the length-tension relationship of respiratory muscles.",
        topic: "Respiratory muscle strength testing (MIP/MEP)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 7,
        questionText:
          "In impulse oscillometry, the difference R5 − R20 (frequency dependence of resistance) is most useful as a measure of:",
        choices: {
          A: "Total respiratory system resistance",
          B: "Lung tissue viscoelasticity",
          C: "Peripheral airway resistance",
          D: "Upper airway resistance",
        },
        correctChoice: "C",
        explanationCorrect:
          "R5 − R20 isolates the component of resistance attributable to peripheral airways. R5 reflects total respiratory resistance (central + peripheral), while R20 primarily reflects central airway resistance. Their difference approximates peripheral airway resistance, making R5 − R20 a clinically useful marker of small airway disease.",
        explanationWrong:
          "Total respiratory resistance is represented by R5 alone, not the difference. Lung tissue viscoelasticity is more related to reactance measurements. Upper airway resistance contributes to both R5 and R20 equally and is eliminated by subtraction.",
        topic: "Impulse oscillometry and forced oscillation technique",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 8,
        questionText:
          "A patient with sickle cell disease undergoing DLCO testing has a hemoglobin of 8 g/dL and an elevated COHb of 5% (from chronic hemolysis). The measured DLCO is 60% predicted. After correcting for hemoglobin and COHb, the corrected DLCO is most likely to be:",
        choices: {
          A: "Lower than 60% predicted",
          B: "Higher than 60% predicted",
          C: "Unchanged at 60% predicted",
          D: "Indeterminate without additional information",
        },
        correctChoice: "B",
        explanationCorrect:
          "Both the low hemoglobin (anemia) and elevated COHb reduce the measured DLCO below the patient's true diffusing capacity. Correcting for both factors adjusts the DLCO upward, resulting in a corrected value higher than the uncorrected 60% predicted. The hemoglobin correction alone could increase the value by 10-20% depending on the correction formula used.",
        explanationWrong:
          "The correction would not lower the value — both anemia and elevated COHb cause underestimation of DLCO. The corrections are additive in the upward direction, so the corrected value cannot remain unchanged. Standard correction formulas exist for both hemoglobin and COHb, making the correction determinable.",
        topic: "Advanced DLCO interpretation (corrections for hemoglobin, COHb, altitude)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 9,
        questionText:
          "The 6-minute walk test (6MWT) is standardized to be performed in a corridor of at least what length?",
        choices: {
          A: "20 meters",
          B: "50 meters",
          C: "30 meters",
          D: "15 meters",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS guidelines for the 6MWT recommend a flat, straight corridor of at least 30 meters in length. Shorter corridors require more turns, which reduce the total distance walked and make results incomparable with reference values established using standard corridor lengths.",
        explanationWrong:
          "A 20-meter corridor is shorter than recommended and would underestimate exercise capacity. A 50-meter corridor exceeds the minimum but is not required. A 15-meter corridor would require too many turns and significantly reduce the distance walked.",
        topic: "Disability and impairment evaluation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 10,
        questionText:
          "In spirometry, the FEV1/FVC ratio is reported using:",
        choices: {
          A: "The largest FEV1 from any acceptable maneuver divided by the largest FVC from any acceptable maneuver",
          B: "The FEV1 and FVC from the single best maneuver only",
          C: "The average of all acceptable FEV1/FVC ratios",
          D: "The largest FEV1/FVC ratio calculated from each individual maneuver",
        },
        correctChoice: "D",
        explanationCorrect:
          "ATS/ERS 2019 standards specify that the reported FEV1/FVC ratio should be taken from the single maneuver with the largest sum of FEV1 + FVC. However, FEV1 and FVC used for other reporting purposes are the largest values from any acceptable maneuver, which may come from different maneuvers. The ratio is calculated from individual maneuvers because FEV1 and FVC from different maneuvers cannot be physiologically related.",
        explanationWrong:
          "Using the largest FEV1 and largest FVC from different maneuvers to calculate the ratio is inappropriate because they may represent different physiological conditions. Averaging all ratios gives equal weight to potentially lower-quality maneuvers. The reported values depend on the specific standard being followed.",
        topic: "Advanced spirometry interpretation and quality grading (ATS/ERS standards)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 11,
        questionText:
          "At extreme altitude (above 5,500 meters), the alveolar gas equation predicts a PAO2 of approximately 35-40 mmHg. The physiological adaptation that most effectively maintains oxygen delivery in acclimatized individuals is:",
        choices: {
          A: "Increased 2,3-DPG concentration shifting the oxyhemoglobin dissociation curve rightward",
          B: "Decreased cardiac output to improve oxygen extraction time",
          C: "Pulmonary vasodilation to improve ventilation-perfusion matching",
          D: "Increased tidal volume only, without changes in respiratory rate",
        },
        correctChoice: "A",
        explanationCorrect:
          "Chronic altitude acclimatization increases 2,3-diphosphoglycerate (2,3-DPG) in red blood cells, shifting the oxyhemoglobin dissociation curve rightward. This facilitates oxygen unloading at the tissue level. Combined with increased hemoglobin concentration from erythropoiesis, increased ventilation, and other adaptations, this helps maintain adequate oxygen delivery despite the low PAO2.",
        explanationWrong:
          "Cardiac output increases, not decreases, at altitude to maintain oxygen delivery. Pulmonary vasoconstriction (hypoxic pulmonary vasoconstriction), not vasodilation, occurs at altitude, potentially worsening V/Q matching. Ventilatory adaptation involves both increased tidal volume and respiratory rate.",
        topic: "High-altitude and diving physiology testing",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 12,
        questionText:
          "A pneumotachometer used in a PFT laboratory must undergo daily calibration verification. The standard instrument used for this verification is:",
        choices: {
          A: "A digital pressure gauge",
          B: "A certified 3-liter calibration syringe",
          C: "A rotameter",
          D: "A dry gas meter",
        },
        correctChoice: "B",
        explanationCorrect:
          "ATS/ERS standards require daily verification of spirometer/pneumotachometer accuracy using a certified 3-liter calibration syringe. The syringe delivers a known volume at various flow rates, and the device must measure within 3.5% of the syringe volume or 0.050 L. The syringe itself should be periodically checked for accuracy.",
        explanationWrong:
          "A digital pressure gauge measures pressure, not volume, and is used for different calibration purposes. A rotameter measures flow rate but is not used for spirometer calibration verification. A dry gas meter measures accumulated volume and is not the standard tool for daily spirometer calibration verification.",
        topic: "Calibration verification and linearity checks",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 13,
        questionText:
          "In a clinical trial evaluating a new bronchodilator, the minimum clinically important difference (MCID) for FEV1 is typically considered to be:",
        choices: {
          A: "50 mL",
          B: "200 mL",
          C: "500 mL",
          D: "100 mL",
        },
        correctChoice: "D",
        explanationCorrect:
          "The MCID for FEV1 in COPD clinical trials is generally considered to be approximately 100 mL, as this magnitude of change has been shown to be associated with clinically meaningful improvements in symptoms and outcomes. This is distinct from the bronchodilator response criterion, which defines acute reversibility.",
        explanationWrong:
          "50 mL is within normal test-to-test variability and is not considered clinically meaningful. 200 mL is part of the older bronchodilator response criterion but exceeds the MCID threshold. 500 mL is a large change that would represent substantial improvement but is not the MCID threshold.",
        topic: "Research methodology in pulmonary function",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 14,
        questionText:
          "The ATS/ERS 2021 bronchodilator response criteria removed the absolute volume change requirement (200 mL) because:",
        choices: {
          A: "Using only a percentage change relative to predicted eliminates the bias where patients with severe obstruction are more likely to meet a percentage-from-baseline criterion",
          B: "200 mL was too difficult for patients to achieve",
          C: "Modern spirometers are less accurate at detecting small volume changes",
          D: "The 200 mL threshold was only applicable to FVC, not FEV1",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS 2021 update shifted to a single criterion (change exceeding 10% of predicted) because the old baseline-referenced percentage criterion was biased: patients with lower baseline values were more likely to show a large percentage change for the same absolute improvement. Using predicted value as the denominator removes this severity-dependent bias and provides a more equitable assessment across the spectrum of disease severity.",
        explanationWrong:
          "Many patients can achieve 200 mL improvement; the issue was the bias in the dual criterion, not patient capability. Modern spirometers are more accurate than older devices. The 200 mL threshold was applied to both FEV1 and FVC in the original criterion.",
        topic: "Bronchodilator response criteria (ATS/ERS 2021 updates)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 15,
        questionText:
          "A patient with an ABG showing pH 7.40, PaCO2 25 mmHg, HCO3 15 mEq/L, and anion gap of 20 mEq/L most likely has:",
        choices: {
          A: "No acid-base disorder (normal pH means normal status)",
          B: "A mixed disorder: anion-gap metabolic acidosis and respiratory alkalosis",
          C: "Simple metabolic acidosis with appropriate respiratory compensation",
          D: "Simple respiratory alkalosis with appropriate metabolic compensation",
        },
        correctChoice: "B",
        explanationCorrect:
          "Despite the normal pH of 7.40, this is a mixed disorder. The elevated anion gap (20) indicates a primary metabolic acidosis. The PaCO2 of 25 mmHg is lower than expected by Winter's formula (expected PaCO2 = 1.5 × 15 + 8 ± 2 = 28.5-32.5 mmHg), indicating a concurrent primary respiratory alkalosis superimposed on the metabolic acidosis. The two opposing processes normalize the pH.",
        explanationWrong:
          "A normal pH does not exclude acid-base disorders — opposing disorders can normalize the pH. Simple metabolic acidosis would have a PaCO2 matching Winter's formula (approximately 30.5 mmHg), not 25 mmHg. Simple respiratory alkalosis would not have an elevated anion gap.",
        topic: "Advanced ABG interpretation (mixed acid-base disorders)",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 16,
        questionText:
          "In pediatric PFT, the interrupter technique (Rint) measures:",
        choices: {
          A: "Lung volumes in infants",
          B: "Diffusing capacity in preschool children",
          C: "Airway resistance by briefly occluding the airway during tidal breathing and measuring the resulting mouth pressure change",
          D: "Respiratory muscle strength in neonates",
        },
        correctChoice: "C",
        explanationCorrect:
          "The interrupter technique (Rint) measures airway resistance by briefly occluding the airway (for approximately 100 ms) during tidal exhalation. The pressure at the mouth immediately after occlusion (equilibrating with alveolar pressure) divided by the flow just before occlusion provides an estimate of airway resistance. It requires minimal cooperation and is suitable for preschool children.",
        explanationWrong:
          "Lung volumes in infants are measured by plethysmography or gas dilution techniques. DLCO measurement requires a breath-hold maneuver not feasible for preschool children. Respiratory muscle strength in neonates is assessed using crying pressures or specialized occlusion techniques, not the standard interrupter method.",
        topic: "Pediatric PFT testing techniques and interpretation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 17,
        questionText:
          "When performing FeNO measurement at multiple flow rates (extended NO analysis), the relationship between FeNO and flow rate can be used to partition NO into:",
        choices: {
          A: "Nasal and oral components",
          B: "Left lung and right lung contributions",
          C: "Proximal airway and distal airway components only",
          D: "Airway wall NO flux (J'awNO) and alveolar NO concentration (CANO)",
        },
        correctChoice: "D",
        explanationCorrect:
          "Extended NO analysis (measuring FeNO at multiple constant flow rates, typically 50, 100, and 200 mL/s) uses a two-compartment model to partition total exhaled NO into airway wall NO flux (J'awNO, reflecting bronchial inflammation) and alveolar NO concentration (CANO, reflecting distal/parenchymal inflammation). This provides more detailed information about the site of inflammation.",
        explanationWrong:
          "Nasal NO is excluded by velum closure during oral exhalation. The technique cannot distinguish left from right lung contributions. While the model does relate to proximal and distal sources, the specific parameters derived are J'awNO and CANO, which represent airway wall flux and alveolar concentration respectively.",
        topic: "Exhaled nitric oxide (FeNO) measurement and interpretation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 18,
        questionText:
          "In CPET, an isocapnic buffering period is identified when:",
        choices: {
          A: "VCO2 increases while PetCO2 remains stable, occurring between the anaerobic threshold and the respiratory compensation point",
          B: "PetCO2 begins to decline",
          C: "VO2 reaches a plateau",
          D: "Breathing frequency exceeds 40 breaths per minute",
        },
        correctChoice: "A",
        explanationCorrect:
          "The isocapnic buffering period occurs between the anaerobic threshold (AT) and the respiratory compensation point (RCP). During this phase, bicarbonate buffering of lactic acid produces excess CO2 (increasing VCO2), but ventilation increases proportionally to maintain stable PetCO2. Beyond the RCP, ventilation increases disproportionately, causing PetCO2 to fall.",
        explanationWrong:
          "A decline in PetCO2 marks the end of the isocapnic buffering period (the respiratory compensation point). VO2 plateau defines VO2max, not the isocapnic buffering period. Breathing frequency alone does not define this period; the relationship between VCO2 and PetCO2 is the key feature.",
        topic: "Cardiopulmonary exercise testing (CPET) interpretation",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 19,
        questionText:
          "A PFT laboratory's gas analyzer for DLCO testing must be verified for accuracy using known gas concentrations. The acceptable tolerance for CO and tracer gas analyzers is typically:",
        choices: {
          A: "Within 10% of the certified tank concentration",
          B: "Within 5% of the certified tank concentration",
          C: "Within 1% absolute of the certified gas concentration or as specified by the manufacturer",
          D: "Within 0.01% absolute for all gas concentrations",
        },
        correctChoice: "C",
        explanationCorrect:
          "Gas analyzer accuracy for DLCO testing must be verified against certified reference gases with known concentrations. Analyzers should read within approximately 1% absolute of the certified concentration (or within manufacturer specifications). Linearity should also be checked across the measurement range using gas dilution or multiple reference concentrations.",
        explanationWrong:
          "A 10% tolerance is too broad for accurate DLCO measurement. A 5% tolerance exceeds the acceptable limit for gas analyzer accuracy in DLCO testing. A 0.01% absolute tolerance is unrealistically stringent for clinical gas analyzers.",
        topic: "Advanced quality control and biological controls",
      },
      {
        miniExamId: exam5.id,
        questionIndex: 20,
        questionText:
          "Total lung capacity (TLC) measured by plethysmography may be overestimated in patients with severe airflow obstruction due to:",
        choices: {
          A: "Equipment dead space",
          B: "Mouth pressure not accurately reflecting alveolar pressure during panting because of airway resistance",
          C: "Patient hyperventilation",
          D: "Thermal drift in the body box",
        },
        correctChoice: "B",
        explanationCorrect:
          "In patients with severe airflow obstruction, high airway resistance causes mouth pressure to lag behind alveolar pressure during rapid panting. The plethysmograph assumes mouth pressure equals alveolar pressure; when it does not, the calculation overestimates thoracic gas volume. Panting at slower frequencies (less than 1 Hz) and using post-hoc correction algorithms can help minimize this artifact.",
        explanationWrong:
          "Equipment dead space is accounted for in the measurement protocol and does not cause overestimation. Patient hyperventilation would affect the baseline lung volume but not the TGV calculation itself. Thermal drift can affect measurements but is mitigated by proper warm-up and door-closed equilibration; it is not the primary cause of TLC overestimation in obstructive disease.",
        topic: "Complex lung volume measurements (plethysmography vs gas dilution discrepancies)",
      },
    ],
  });

  console.log(`Exam 5 created: ${exam5.id} with 20 questions`);

  console.log("All 5 RPFT mini exams (1-5) seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
