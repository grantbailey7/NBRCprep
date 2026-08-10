import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fxw0004zf54sy6um2ui";

  // ─── EXAM 11 ──────────────────────────────────────────────
  // Topics: FeNO testing, mannitol challenge, EVH, advanced spirometry quality grading
  // Answer distribution: A=5(Q2,6,11,14,19) B=5(Q3,8,13,16,20) C=5(Q1,5,10,15,17) D=5(Q4,7,9,12,18)
  const exam11 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 11",
      examIndex: 11,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam11.id,
        questionIndex: 1,
        questionText:
          "What is the primary biomarker measured during a fractional exhaled nitric oxide (FeNO) test?",
        choices: {
          A: "Carbon monoxide in exhaled breath",
          B: "Oxygen partial pressure at the airway",
          C: "Nitric oxide concentration in exhaled air",
          D: "Nitrogen concentration during washout",
        },
        correctChoice: "C",
        explanationCorrect:
          "FeNO testing specifically measures the concentration of nitric oxide in exhaled breath, which serves as a marker of eosinophilic airway inflammation.",
        explanationWrong:
          "Carbon monoxide is measured in DLCO testing. Oxygen partial pressure is measured via blood gas analysis. Nitrogen concentration during washout is part of lung volume testing, not FeNO.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 2,
        questionText:
          "According to ATS/ERS guidelines, the recommended exhalation flow rate for standard FeNO measurement in adults is:",
        choices: {
          A: "50 mL/s",
          B: "100 mL/s",
          C: "150 mL/s",
          D: "200 mL/s",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS standard for adult FeNO measurement requires a constant expiratory flow rate of 50 mL/s, which provides a standardized measurement of airway nitric oxide.",
        explanationWrong:
          "Flow rates of 100, 150, and 200 mL/s are not the standard recommended flow for routine FeNO testing. Higher flow rates result in lower measured FeNO values and are sometimes used in research protocols.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 3,
        questionText:
          "A FeNO value greater than 50 ppb in an adult is generally considered:",
        choices: {
          A: "Normal and not clinically significant",
          B: "High, suggesting significant eosinophilic airway inflammation",
          C: "Borderline, requiring repeat testing in 2 weeks",
          D: "Indicative of neutrophilic rather than eosinophilic inflammation",
        },
        correctChoice: "B",
        explanationCorrect:
          "A FeNO value above 50 ppb in adults is classified as high and is strongly suggestive of eosinophilic airway inflammation, which may respond well to corticosteroid therapy.",
        explanationWrong:
          "Values above 50 ppb are not normal. While borderline values (25-50 ppb) may warrant repeat testing, values above 50 ppb are clearly elevated. FeNO reflects eosinophilic, not neutrophilic, inflammation.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 4,
        questionText:
          "During a mannitol challenge test, the endpoint is reached when FEV1 falls by what percentage from baseline?",
        choices: {
          A: "10%",
          B: "20%",
          C: "25%",
          D: "15%",
        },
        correctChoice: "D",
        explanationCorrect:
          "The mannitol challenge test uses a positive response threshold of a 15% fall in FEV1 from baseline, which indicates airway hyperresponsiveness.",
        explanationWrong:
          "A 10% decline is used in some direct challenge protocols. A 20% decline is the threshold for methacholine challenge. A 25% decline exceeds the standard mannitol challenge endpoint.",
        topic: "Mannitol challenge testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 5,
        questionText:
          "Which of the following is an advantage of mannitol challenge testing compared to methacholine challenge?",
        choices: {
          A: "It uses a nebulizer setup requiring precise calibration",
          B: "It has a shorter total administration time in all cases",
          C: "It uses a portable dry powder inhaler requiring no nebulizer",
          D: "It is more sensitive for detecting mild airway hyperresponsiveness",
        },
        correctChoice: "C",
        explanationCorrect:
          "Mannitol challenge uses a dry powder inhaler device, making it more portable and eliminating the need for nebulizer calibration and setup, which is a practical advantage over methacholine.",
        explanationWrong:
          "Mannitol does not require a nebulizer. Total test time can be similar or longer depending on dosing steps. Methacholine is generally considered more sensitive for mild hyperresponsiveness.",
        topic: "Mannitol challenge testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 6,
        questionText:
          "Eucapnic voluntary hyperventilation (EVH) testing is primarily used to diagnose which condition?",
        choices: {
          A: "Exercise-induced bronchoconstriction",
          B: "Vocal cord dysfunction",
          C: "Pulmonary hypertension",
          D: "Restrictive lung disease",
        },
        correctChoice: "A",
        explanationCorrect:
          "EVH is considered the gold standard surrogate test for exercise-induced bronchoconstriction (EIB) and is widely used in athletic screening, including by the International Olympic Committee.",
        explanationWrong:
          "Vocal cord dysfunction is diagnosed via laryngoscopy. Pulmonary hypertension requires hemodynamic assessment. Restrictive lung disease is identified through lung volume measurements, not bronchoprovocation.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 7,
        questionText:
          "During EVH testing, the target ventilation rate for the patient is typically what percentage of predicted MVV?",
        choices: {
          A: "30%",
          B: "50%",
          C: "60%",
          D: "85%",
        },
        correctChoice: "D",
        explanationCorrect:
          "EVH protocols typically require patients to maintain ventilation at approximately 85% of predicted MVV (calculated as 30 times the FEV1) for 6 minutes using dry compressed air containing 5% CO2.",
        explanationWrong:
          "Ventilation targets of 30%, 50%, or 60% of predicted MVV are too low to adequately stress the airways and would not provide a sufficient hyperosmolar stimulus to trigger bronchoconstriction.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 8,
        questionText:
          "The gas mixture used during EVH testing typically contains 5% CO2. What is the purpose of this added CO2?",
        choices: {
          A: "To stimulate deeper breathing by the patient",
          B: "To maintain eucapnia (normal CO2 levels) during hyperventilation",
          C: "To increase the bronchoconstrictor effect on the airways",
          D: "To reduce the risk of oxygen toxicity",
        },
        correctChoice: "B",
        explanationCorrect:
          "The 5% CO2 in the inspired gas mixture prevents hypocapnia during sustained hyperventilation. Without it, the patient would blow off excessive CO2, causing respiratory alkalosis and potentially syncope.",
        explanationWrong:
          "The CO2 is not meant to stimulate breathing or enhance bronchoconstriction. Oxygen toxicity is not a concern at the FiO2 levels used in EVH testing.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 9,
        questionText:
          "Under ATS/ERS 2019 spirometry standards, the grading system for FVC and FEV1 quality uses letter grades. Which grade indicates that the repeatability criteria are met with at least 3 acceptable maneuvers?",
        choices: {
          A: "Grade B",
          B: "Grade C",
          C: "Grade E",
          D: "Grade A",
        },
        correctChoice: "D",
        explanationCorrect:
          "Grade A in the ATS/ERS 2019 system means the session has at least 3 acceptable maneuvers and the repeatability criterion (difference between the two largest values is within 150 mL) is met.",
        explanationWrong:
          "Grade B indicates 3 acceptable maneuvers but repeatability not met. Grade C indicates only 2 acceptable maneuvers with repeatability met. Grade E indicates only 1 acceptable maneuver.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 10,
        questionText:
          "In the ATS/ERS 2019 spirometry quality grading system, what repeatability criterion must the two largest FEV1 values meet for a session to be graded as repeatable?",
        choices: {
          A: "Within 100 mL",
          B: "Within 200 mL",
          C: "Within 150 mL",
          D: "Within 250 mL",
        },
        correctChoice: "C",
        explanationCorrect:
          "The ATS/ERS 2019 standard requires that the two largest FEV1 values be within 150 mL of each other to meet the repeatability criterion, which is consistent across the grading system.",
        explanationWrong:
          "The 100 mL criterion was used in earlier standards for some patient populations. The 200 mL and 250 mL thresholds are too lenient and do not reflect the current standard.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 11,
        questionText:
          "According to ATS/ERS 2019 standards, a spirometry session with 2 acceptable maneuvers and repeatability met receives which quality grade?",
        choices: {
          A: "Grade C",
          B: "Grade B",
          C: "Grade D",
          D: "Grade A",
        },
        correctChoice: "A",
        explanationCorrect:
          "Grade C is assigned when there are only 2 acceptable maneuvers but the repeatability criterion between them is met. Although not ideal, the results are still considered usable.",
        explanationWrong:
          "Grade A requires at least 3 acceptable maneuvers with repeatability met. Grade B requires 3 acceptable maneuvers without repeatability. Grade D indicates 2 acceptable maneuvers without repeatability.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 12,
        questionText:
          "A patient being evaluated for FeNO testing ate a high-nitrate meal (lettuce and beetroot) 1 hour before the appointment. What should the technologist do?",
        choices: {
          A: "Proceed with testing since diet has minimal effect on FeNO",
          B: "Administer a bronchodilator before testing to normalize results",
          C: "Have the patient rinse their mouth and proceed immediately",
          D: "Postpone testing because high-nitrate foods can falsely elevate FeNO values",
        },
        correctChoice: "D",
        explanationCorrect:
          "High-nitrate foods such as leafy greens and beetroot can increase exhaled nitric oxide levels and should be avoided for at least 1-2 hours prior to testing. Postponing ensures accurate results.",
        explanationWrong:
          "Diet significantly affects FeNO measurements. Bronchodilators do not correct diet-related elevations. Simple mouth rinsing does not eliminate the systemic effect of dietary nitrates on exhaled NO.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 13,
        questionText:
          "Which of the following patient factors can cause a falsely LOW FeNO measurement?",
        choices: {
          A: "Eosinophilic asthma exacerbation",
          B: "Current cigarette smoking",
          C: "Allergen exposure within the past hour",
          D: "Atopic dermatitis without pulmonary involvement",
        },
        correctChoice: "B",
        explanationCorrect:
          "Cigarette smoking causes acutely reduced FeNO values due to the high concentration of NO in cigarette smoke, which downregulates endogenous NO production and causes feedback inhibition of NO synthase.",
        explanationWrong:
          "Eosinophilic asthma exacerbation and recent allergen exposure both tend to increase FeNO. Atopic dermatitis may mildly elevate FeNO but does not cause falsely low readings.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 14,
        questionText:
          "During a mannitol challenge, the cumulative dose protocol uses progressively increasing doses. If a patient's FEV1 falls 12% at the 160 mg dose, the technologist should:",
        choices: {
          A: "Administer the next dose in the protocol and continue monitoring",
          B: "Stop the test and report a positive result",
          C: "Repeat the 160 mg dose to confirm the decline",
          D: "Wait 5 minutes and re-measure FEV1 before deciding",
        },
        correctChoice: "A",
        explanationCorrect:
          "A 12% fall has not yet reached the 15% threshold for a positive mannitol challenge. The technologist should continue administering increasing doses and measuring FEV1 until either the 15% threshold is reached or the maximum cumulative dose is given.",
        explanationWrong:
          "The test is only positive at a 15% decline, so 12% does not meet the endpoint. Repeating the same dose is not part of the standard protocol. Waiting without progressing delays the test unnecessarily.",
        topic: "Mannitol challenge testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 15,
        questionText:
          "What is the positive response criterion for EVH testing?",
        choices: {
          A: "A 15% fall in FVC from baseline",
          B: "A 20% fall in FEV1 from baseline",
          C: "A 10% fall in FEV1 from baseline",
          D: "A 25% fall in FEF25-75 from baseline",
        },
        correctChoice: "C",
        explanationCorrect:
          "A positive EVH test is defined as a 10% or greater fall in FEV1 from the pre-challenge baseline value, measured at serial time points after the hyperventilation period.",
        explanationWrong:
          "A 15% fall in FVC is not the standard criterion. A 20% fall in FEV1 is the methacholine challenge threshold. FEF25-75 is not the primary outcome measure for EVH testing.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 16,
        questionText:
          "A spirometry session yields the following FEV1 values from 4 efforts: 3.05 L, 2.82 L, 3.10 L, and 2.75 L. Two maneuvers meet acceptability criteria (3.05 L and 3.10 L) and two do not. What is the ATS/ERS 2019 quality grade?",
        choices: {
          A: "Grade A, because the two acceptable values are within 150 mL",
          B: "Grade C, because there are 2 acceptable maneuvers with repeatability met",
          C: "Grade D, because only 2 of 4 maneuvers are acceptable",
          D: "Grade F, because the session is unusable",
        },
        correctChoice: "B",
        explanationCorrect:
          "With only 2 acceptable maneuvers (3.05 L and 3.10 L) that are within 150 mL of each other (50 mL difference), the session receives Grade C. Grade A requires at least 3 acceptable maneuvers.",
        explanationWrong:
          "Grade A requires 3 or more acceptable maneuvers. Grade D would apply if the 2 acceptable maneuvers did not meet repeatability. Grade F is assigned only when there is 1 or no acceptable maneuvers.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 17,
        questionText:
          "Which of the following conditions is a contraindication to performing a mannitol challenge test?",
        choices: {
          A: "History of mild intermittent asthma",
          B: "Baseline FEV1 of 85% predicted",
          C: "Severe airflow obstruction with baseline FEV1 below 50% predicted",
          D: "Use of a short-acting beta-agonist 12 hours prior",
        },
        correctChoice: "C",
        explanationCorrect:
          "Severe airflow obstruction with FEV1 below 50% predicted is a contraindication for mannitol challenge testing due to the risk of significant bronchoconstriction and respiratory compromise.",
        explanationWrong:
          "Mild intermittent asthma and baseline FEV1 of 85% predicted are not contraindications. Withholding short-acting beta-agonist for 8 hours is sufficient; 12 hours of withholding exceeds the requirement.",
        topic: "Mannitol challenge testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 18,
        questionText:
          "The ATS/ERS 2019 spirometry standards recommend that back-extrapolated volume (BEV) should not exceed what threshold?",
        choices: {
          A: "100 mL or 5% of FVC",
          B: "200 mL or 10% of FVC",
          C: "50 mL or 2% of FVC",
          D: "5% of FVC or 150 mL, whichever is greater",
        },
        correctChoice: "D",
        explanationCorrect:
          "The ATS/ERS 2019 standards specify that back-extrapolated volume should not exceed 5% of FVC or 150 mL, whichever is greater, as this indicates the patient had a hesitant or delayed start.",
        explanationWrong:
          "The other thresholds are either outdated or incorrect. The 2019 update specifically uses the 5% of FVC or 150 mL criterion as the acceptability cutoff for back-extrapolated volume.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 19,
        questionText:
          "Which of the following should be performed BEFORE FeNO testing when both FeNO and spirometry are ordered?",
        choices: {
          A: "FeNO should be performed before spirometry",
          B: "Spirometry should always be performed first",
          C: "The order does not matter clinically",
          D: "A bronchodilator should be given between the two tests",
        },
        correctChoice: "A",
        explanationCorrect:
          "FeNO testing should be performed before spirometry because the forced expiratory maneuvers in spirometry can temporarily alter FeNO values. Performing FeNO first avoids this confounding effect.",
        explanationWrong:
          "Spirometry performed first can transiently decrease FeNO levels. The order does matter for accuracy. No bronchodilator is needed between the tests.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam11.id,
        questionIndex: 20,
        questionText:
          "During EVH testing, the dry compressed air mixture used for hyperventilation helps provoke bronchoconstriction primarily through which mechanism?",
        choices: {
          A: "Direct smooth muscle stimulation via pharmacologic agents",
          B: "Airway surface liquid hyperosmolarity due to water loss from rapid breathing of dry air",
          C: "Stimulation of vagal nerve afferents in the larynx",
          D: "Increased airway mucosal blood flow and edema",
        },
        correctChoice: "B",
        explanationCorrect:
          "EVH provokes bronchoconstriction by causing water loss from the airway surface through rapid ventilation of dry air. This creates a hyperosmolar environment that triggers mast cell mediator release and airway smooth muscle contraction.",
        explanationWrong:
          "EVH is an indirect challenge and does not use pharmacologic agents for direct smooth muscle stimulation. Vagal nerve stimulation and mucosal edema are not the primary mechanisms.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
    ],
  });

  // ─── EXAM 12 ──────────────────────────────────────────────
  // Topics: PFT laboratory accreditation, proficiency testing, disability/impairment evaluation
  // Answer distribution: A=5(Q3,7,12,15,18) B=5(Q1,6,9,14,20) C=5(Q4,8,11,16,19) D=5(Q2,5,10,13,17)
  const exam12 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 12",
      examIndex: 12,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam12.id,
        questionIndex: 1,
        questionText:
          "Which organization administers the accreditation program for pulmonary function testing laboratories in the United States?",
        choices: {
          A: "The Joint Commission (TJC)",
          B: "The American Association for Respiratory Care (AARC)",
          C: "The Centers for Medicare and Medicaid Services (CMS)",
          D: "The College of American Pathologists (CAP)",
        },
        correctChoice: "B",
        explanationCorrect:
          "The AARC administers the PFT laboratory accreditation program through its Clinical Pulmonary Function Proficiency (CPFP) program, which sets quality standards for PFT laboratories.",
        explanationWrong:
          "The Joint Commission accredits hospitals broadly but does not run a PFT-specific accreditation program. CMS oversees clinical laboratory standards under CLIA. CAP accredits clinical pathology labs, not PFT labs specifically.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 2,
        questionText:
          "Proficiency testing for a PFT laboratory typically involves analyzing testing results from:",
        choices: {
          A: "Real patients selected randomly from the previous month",
          B: "Computer-generated waveforms submitted for interpretation",
          C: "Simulated patient scenarios reviewed by external auditors",
          D: "Standardized biological controls or mechanical simulators sent by an external agency",
        },
        correctChoice: "D",
        explanationCorrect:
          "Proficiency testing programs send standardized mechanical or biological control samples to laboratories for testing. Results are compared against expected values or peer laboratory data to assess accuracy.",
        explanationWrong:
          "Real patient data is part of internal quality assurance, not external proficiency testing. Computer-generated waveforms and simulated scenarios are not the standard method for PFT proficiency testing.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 3,
        questionText:
          "A key requirement for PFT laboratory accreditation is maintaining documentation of equipment quality control. How frequently should a spirometer's volume accuracy be verified using a calibration syringe?",
        choices: {
          A: "Daily, before testing begins",
          B: "Weekly, with documentation",
          C: "Monthly, with biannual recertification",
          D: "Only after equipment repair or maintenance",
        },
        correctChoice: "A",
        explanationCorrect:
          "ATS/ERS standards and accreditation programs require daily calibration verification of spirometers using a 3-liter syringe before the first patient test to ensure ongoing accuracy.",
        explanationWrong:
          "Weekly or monthly verification intervals are insufficient. Checking only after repairs would miss gradual drift in sensor accuracy that daily verification catches.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 4,
        questionText:
          "In disability evaluation using PFTs, the AMA Guides to the Evaluation of Permanent Impairment primarily classifies respiratory impairment based on which combination of tests?",
        choices: {
          A: "FEV1 and peak expiratory flow only",
          B: "ABG and 6-minute walk distance only",
          C: "FVC, FEV1, and DLCO",
          D: "Total lung capacity and residual volume only",
        },
        correctChoice: "C",
        explanationCorrect:
          "The AMA Guides use FVC, FEV1, and DLCO as the primary PFT parameters for classifying respiratory impairment severity, as these tests collectively assess airflow, lung capacity, and gas exchange.",
        explanationWrong:
          "Peak flow alone is too variable for disability determination. ABG and walk distance are supplementary. TLC and RV alone miss obstruction and gas transfer assessment.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 5,
        questionText:
          "When performing PFTs for disability evaluation, which of the following is a critical requirement to ensure the results are legally defensible?",
        choices: {
          A: "Using the patient's personal spirometer for consistency",
          B: "Performing testing in the patient's home environment",
          C: "Using predicted values from a single ethnic group",
          D: "Documenting test quality grades and ensuring maximal patient effort",
        },
        correctChoice: "D",
        explanationCorrect:
          "For disability evaluations, thorough documentation of test quality, patient effort, and compliance with standardized protocols is essential for the results to be legally defensible and accepted by adjudicating bodies.",
        explanationWrong:
          "Personal spirometers may not be calibrated to standards. Home testing is not standard protocol. Using a single ethnic group's predicted values may not be appropriate for the patient being evaluated.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 6,
        questionText:
          "A patient referred for impairment rating has an FVC of 55% predicted, FEV1 of 48% predicted, and DLCO of 42% predicted. According to AMA Guides, this level of impairment would most likely be classified as:",
        choices: {
          A: "Mild impairment (Class 1)",
          B: "Moderate-to-severe impairment (Class 3)",
          C: "No impairment (Class 0)",
          D: "Maximal impairment (Class 4)",
        },
        correctChoice: "B",
        explanationCorrect:
          "With FVC of 55%, FEV1 of 48%, and DLCO of 42% predicted, the values fall in the moderate-to-severe range. AMA classification uses the single most impaired value, and these values align with Class 3 impairment.",
        explanationWrong:
          "Class 1 (mild) typically includes values of 65-80% predicted. Class 0 indicates no impairment with normal values. Class 4 (maximal) typically includes values below 40% predicted for the most impaired parameter.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 7,
        questionText:
          "What is the primary purpose of biological quality control (bio-QC) in a PFT laboratory?",
        choices: {
          A: "To monitor day-to-day variability and detect instrument drift using a healthy non-smoking subject",
          B: "To ensure that all technologists produce identical FEV1 results",
          C: "To replace the need for daily calibration syringe checks",
          D: "To validate the accuracy of predicted value reference equations",
        },
        correctChoice: "A",
        explanationCorrect:
          "Biological QC involves periodically testing a healthy non-smoking volunteer to track equipment performance over time. Changes beyond expected variability suggest instrument drift or malfunction.",
        explanationWrong:
          "Bio-QC does not guarantee identical results across technologists. It supplements but does not replace mechanical calibration. It monitors equipment, not reference equation validity.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 8,
        questionText:
          "During impairment evaluation, a patient's PFT results show normal spirometry and lung volumes but a DLCO of 45% predicted. This isolated finding suggests:",
        choices: {
          A: "The patient has no pulmonary impairment since spirometry is normal",
          B: "The results are likely erroneous and should be repeated",
          C: "Significant gas exchange impairment that may indicate pulmonary vascular disease or early interstitial disease",
          D: "The patient likely has severe obstructive disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "An isolated severely reduced DLCO with normal spirometry and lung volumes can indicate pulmonary vascular disease, early interstitial lung disease, or emphysema. This finding alone constitutes significant impairment.",
        explanationWrong:
          "Normal spirometry does not rule out impairment when DLCO is markedly reduced. The results are not necessarily erroneous. Severe obstructive disease would show abnormal spirometry.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 9,
        questionText:
          "A PFT laboratory is preparing for accreditation review. Which of the following documentation must be maintained?",
        choices: {
          A: "Only calibration logs from the current calendar year",
          B: "Infection control policies, calibration records, technologist competency documentation, and patient test records",
          C: "Equipment purchase receipts and warranty information only",
          D: "Physician interpretation notes without technologist comments",
        },
        correctChoice: "B",
        explanationCorrect:
          "Accreditation programs require comprehensive documentation including infection control policies, equipment calibration and maintenance records, technologist training and competency assessments, and complete patient testing records.",
        explanationWrong:
          "Only current-year calibration logs are insufficient. Purchase receipts alone do not demonstrate ongoing quality. Physician notes without technologist documentation of test quality are incomplete.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 10,
        questionText:
          "In a disability evaluation, the evaluating physician requests that the PFT technologist note whether the patient gave suboptimal effort. Which of the following findings most strongly suggests poor patient effort during spirometry?",
        choices: {
          A: "An FEV1/FVC ratio below the lower limit of normal",
          B: "Reproducibility within 100 mL across 3 trials",
          C: "A concave flow-volume loop shape",
          D: "Variable peak expiratory flows with abrupt termination of expiratory efforts",
        },
        correctChoice: "D",
        explanationCorrect:
          "Highly variable peak flows combined with early termination of expiratory efforts are hallmark signs of submaximal patient effort, which must be documented in disability evaluations.",
        explanationWrong:
          "A low FEV1/FVC ratio indicates obstruction, not poor effort. Good reproducibility suggests consistent effort. A concave flow-volume loop is characteristic of obstructive disease, not submaximal effort.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 11,
        questionText:
          "The ATS/ERS 2019 standards introduced the concept of a 'usable' result in spirometry. Which quality grade represents the threshold below which results should be used with extreme caution?",
        choices: {
          A: "Grade B",
          B: "Grade D",
          C: "Grade F",
          D: "Grade A",
        },
        correctChoice: "C",
        explanationCorrect:
          "Grade F in the ATS/ERS 2019 system indicates no acceptable maneuvers were obtained. Results at this grade should be used with extreme caution or not used at all for clinical decision-making.",
        explanationWrong:
          "Grades A and B represent good quality. Grade D (2 acceptable maneuvers, repeatability not met) is still usable, though with notation of reduced confidence.",
        topic: "Advanced spirometry quality grading (ATS/ERS 2019)",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 12,
        questionText:
          "For Social Security disability determination, PFT results must meet which of the following criteria to be acceptable?",
        choices: {
          A: "Tests must be performed on calibrated equipment following ATS standards with documentation of quality and patient effort",
          B: "Only pre-bronchodilator results are used for determination",
          C: "Results must be obtained at a hospital-based laboratory only",
          D: "Testing must be repeated on three separate days to confirm consistency",
        },
        correctChoice: "A",
        explanationCorrect:
          "Social Security Administration requires that PFTs be performed on properly calibrated equipment following ATS standards, with clear documentation of test quality and patient cooperation for results to be considered valid.",
        explanationWrong:
          "Both pre- and post-bronchodilator results may be relevant. Testing is not restricted to hospital-based labs. Single-session testing with quality documentation is typically sufficient.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 13,
        questionText:
          "A PFT laboratory must demonstrate competency of its technologists as part of accreditation. Which of the following best demonstrates technologist competency?",
        choices: {
          A: "Years of experience listed on a resume",
          B: "A letter of recommendation from a previous supervisor",
          C: "Passing a written exam on PFT theory",
          D: "Observed performance assessments, continuing education records, and proficiency in all performed tests",
        },
        correctChoice: "D",
        explanationCorrect:
          "Competency assessment for accreditation requires documented observed performance of tests, records of continuing education, and demonstrated proficiency in all procedures the technologist performs.",
        explanationWrong:
          "Years of experience and recommendation letters do not objectively demonstrate current competency. Written exams alone do not assess practical skills.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 14,
        questionText:
          "In impairment evaluation, why is it important to use post-bronchodilator PFT values when available?",
        choices: {
          A: "Post-bronchodilator values are always lower and show worse impairment",
          B: "Post-bronchodilator values represent the patient's best achievable lung function, reflecting fixed versus reversible impairment",
          C: "Pre-bronchodilator values are unreliable in disability assessments",
          D: "Post-bronchodilator testing is required by law for all disability claims",
        },
        correctChoice: "B",
        explanationCorrect:
          "Post-bronchodilator values represent the best achievable lung function and distinguish between fixed structural impairment and reversible bronchoconstriction that can be treated with medications.",
        explanationWrong:
          "Post-bronchodilator values are typically equal to or higher than pre-bronchodilator values. Pre-bronchodilator values are not unreliable. Not all disability programs mandate post-bronchodilator testing by law.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 15,
        questionText:
          "Which of the following is a required element of a PFT laboratory's quality assurance program?",
        choices: {
          A: "Regular review of test results by a medical director, including over-reads of technologist interpretations",
          B: "Monthly replacement of all disposable testing supplies regardless of condition",
          C: "Hiring only CPFT-certified technologists",
          D: "Using only one brand of spirometer across all testing stations",
        },
        correctChoice: "A",
        explanationCorrect:
          "Quality assurance programs require regular medical director oversight of test results, including review of technologist assessments, to ensure accuracy and consistency of PFT reporting.",
        explanationWrong:
          "Monthly replacement of supplies regardless of condition is wasteful, not a QA requirement. While CPFT certification is valued, it may not be the sole hiring requirement. Equipment brand consistency is not mandated.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 16,
        questionText:
          "A patient being evaluated for workers' compensation presents with spirometry showing FVC 62% predicted and FEV1/FVC ratio of 0.82. The flow-volume loop shows a restrictive pattern. Which additional test would be most helpful in confirming the restriction?",
        choices: {
          A: "Bronchoprovocation testing",
          B: "FeNO measurement",
          C: "Measurement of total lung capacity by plethysmography",
          D: "Cardiopulmonary exercise testing",
        },
        correctChoice: "C",
        explanationCorrect:
          "A reduced FVC with preserved FEV1/FVC ratio suggests restriction, but confirmation requires measurement of total lung capacity. True restriction is confirmed when TLC is below the lower limit of normal.",
        explanationWrong:
          "Bronchoprovocation tests for airway hyperreactivity. FeNO assesses eosinophilic inflammation. Exercise testing evaluates functional capacity but does not confirm restrictive physiology.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 17,
        questionText:
          "According to accreditation standards, how often should a PFT laboratory's DLCO system be tested with a known gas concentration to verify analyzer accuracy?",
        choices: {
          A: "Weekly",
          B: "Monthly",
          C: "Annually",
          D: "Daily or before each testing session",
        },
        correctChoice: "D",
        explanationCorrect:
          "DLCO gas analyzer accuracy should be verified daily or before each testing session using a known gas concentration to ensure the CO and tracer gas analyzers are reading accurately.",
        explanationWrong:
          "Weekly, monthly, or annual verification intervals are insufficient to catch day-to-day drift in gas analyzer performance that could affect DLCO results.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 18,
        questionText:
          "Which of the following represents the lower limit of normal (LLN) approach recommended for PFT interpretation in disability evaluations?",
        choices: {
          A: "Using the statistically derived 5th percentile of a healthy reference population rather than fixed percentage cutoffs",
          B: "Using 80% of predicted for all parameters regardless of age or sex",
          C: "Using Z-scores above 2.0 as the cutoff for abnormality",
          D: "Using percent predicted with race-specific correction factors",
        },
        correctChoice: "A",
        explanationCorrect:
          "The LLN approach uses the statistically derived 5th percentile of a reference population distribution, which accounts for age, sex, height, and ethnicity, providing a more accurate threshold than fixed percentages.",
        explanationWrong:
          "Fixed 80% cutoffs are outdated and can misclassify results. Z-scores of -1.645 (not +2.0) correspond to the 5th percentile. Simple race correction factors without proper statistical derivation are inadequate.",
        topic: "Disability and impairment evaluation using PFTs",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 19,
        questionText:
          "During laboratory accreditation review, the surveyor notes that the PFT lab does not have a written procedure for handling a patient who experiences a severe adverse event during testing. This finding is categorized as:",
        choices: {
          A: "A minor recommendation that can be addressed at the next review cycle",
          B: "An observation that does not affect accreditation status",
          C: "A critical deficiency requiring immediate corrective action",
          D: "Standard practice since adverse events are extremely rare",
        },
        correctChoice: "C",
        explanationCorrect:
          "The absence of written emergency procedures for handling adverse events is a critical deficiency in any accreditation review. Patient safety protocols are fundamental requirements that must be addressed immediately.",
        explanationWrong:
          "Lack of emergency procedures cannot wait until the next cycle. This is far more than a simple observation. Rarity of events does not eliminate the need for written protocols.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam12.id,
        questionIndex: 20,
        questionText:
          "A patient referred for disability evaluation has a BMI of 48. The technologist notices the FVC is 65% predicted. Before attributing this to pulmonary impairment, the technologist should consider that:",
        choices: {
          A: "Obesity has no effect on PFT results",
          B: "Morbid obesity can reduce FVC by restricting chest wall and diaphragmatic excursion, which may confound impairment assessment",
          C: "The FEV1/FVC ratio will also be reduced in obesity",
          D: "Seated testing position eliminates the effect of obesity on lung volumes",
        },
        correctChoice: "B",
        explanationCorrect:
          "Morbid obesity significantly reduces FVC and ERV by mechanically restricting chest wall expansion and limiting diaphragmatic descent. This must be considered when interpreting PFTs for disability, as the reduced values may be due to body habitus rather than intrinsic lung disease.",
        explanationWrong:
          "Obesity has well-documented effects on PFTs. The FEV1/FVC ratio is typically preserved or even elevated in obesity. Seated testing does not fully eliminate the mechanical effects of severe obesity.",
        topic: "Disability and impairment evaluation using PFTs",
      },
    ],
  });

  // ─── EXAM 13 ──────────────────────────────────────────────
  // Topics: Pre-operative pulmonary assessment, occupational lung disease screening
  // Answer distribution: A=5(Q4,8,11,17,20) B=5(Q1,5,10,14,19) C=5(Q3,7,13,16,18) D=5(Q2,6,9,12,15)
  const exam13 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 13",
      examIndex: 13,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam13.id,
        questionIndex: 1,
        questionText:
          "Pre-operative pulmonary assessment is most commonly indicated before which type of surgery?",
        choices: {
          A: "Knee replacement surgery",
          B: "Lung resection surgery",
          C: "Cataract removal surgery",
          D: "Appendectomy",
        },
        correctChoice: "B",
        explanationCorrect:
          "Pre-operative PFTs are most commonly indicated before lung resection surgery to assess whether the patient has sufficient pulmonary reserve to tolerate removal of lung tissue and maintain adequate function postoperatively.",
        explanationWrong:
          "Knee replacement, cataract surgery, and appendectomy do not routinely require pre-operative PFTs because they do not directly compromise pulmonary tissue or function.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 2,
        questionText:
          "In pre-operative assessment for pneumonectomy, which of the following predicted postoperative values suggests the patient can tolerate the surgery?",
        choices: {
          A: "Predicted postoperative FEV1 greater than 2.0 L or 60% predicted",
          B: "Predicted postoperative DLCO less than 30% predicted",
          C: "Predicted postoperative FEV1 less than 0.8 L",
          D: "Predicted postoperative FEV1 greater than 0.8 L or 40% predicted and predicted postoperative DLCO greater than 40% predicted",
        },
        correctChoice: "D",
        explanationCorrect:
          "Current guidelines suggest that predicted postoperative (ppo) FEV1 greater than 0.8 L or 40% predicted AND ppo DLCO greater than 40% predicted indicate acceptable risk for lung resection. Both parameters must be considered together.",
        explanationWrong:
          "Values of 2.0 L or 60% are higher than the minimum threshold. A ppo DLCO less than 30% indicates high surgical risk. A ppo FEV1 less than 0.8 L without other context may place the patient at increased risk.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 3,
        questionText:
          "The predicted postoperative FEV1 (ppo FEV1) for a lobectomy can be estimated using which method?",
        choices: {
          A: "Multiplying current FEV1 by the patient's age in years",
          B: "Dividing the current FEV1 by the number of remaining lobes",
          C: "Subtracting the functional contribution of the lobe to be resected, often determined by quantitative perfusion scanning",
          D: "Using the patient's FEV1 from 5 years ago as the postoperative estimate",
        },
        correctChoice: "C",
        explanationCorrect:
          "Predicted postoperative FEV1 is calculated by subtracting the functional contribution of the lobe to be resected, which can be estimated using a quantitative ventilation-perfusion scan or anatomical segment counting.",
        explanationWrong:
          "Age multiplication and simple division by remaining lobes are not valid methods. Historical FEV1 from years ago does not predict postoperative function.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 4,
        questionText:
          "Which PFT parameter is most useful for predicting postoperative mortality risk in lung resection candidates?",
        choices: {
          A: "Predicted postoperative DLCO",
          B: "Peak expiratory flow rate",
          C: "Maximum voluntary ventilation",
          D: "Expiratory reserve volume",
        },
        correctChoice: "A",
        explanationCorrect:
          "Predicted postoperative DLCO is one of the strongest PFT predictors of postoperative mortality and pulmonary complications. A ppo DLCO below 40% predicted identifies patients at increased risk.",
        explanationWrong:
          "Peak flow, MVV, and ERV provide supplementary information but are not the primary parameters used in surgical risk stratification algorithms for lung resection.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 5,
        questionText:
          "A worker in a coal mine is referred for occupational lung disease screening. Which pattern on PFTs is most commonly associated with coal workers' pneumoconiosis?",
        choices: {
          A: "Isolated increase in residual volume with normal FEV1",
          B: "Mixed obstructive and restrictive pattern",
          C: "Pure obstructive pattern with hyperinflation",
          D: "Normal spirometry in all cases",
        },
        correctChoice: "B",
        explanationCorrect:
          "Coal workers' pneumoconiosis often produces a mixed obstructive and restrictive pattern due to fibrotic changes in the lung parenchyma combined with airway disease from dust exposure and frequently coexisting COPD from smoking.",
        explanationWrong:
          "Isolated RV increase or pure obstruction alone are not the typical pattern. PFTs are not always normal in coal workers with pneumoconiosis, particularly in progressive massive fibrosis.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 6,
        questionText:
          "OSHA requires spirometry screening for workers exposed to which of the following substances?",
        choices: {
          A: "Carbon dioxide only",
          B: "Water vapor in humidified environments",
          C: "Ultraviolet radiation",
          D: "Asbestos, cotton dust, and other regulated respiratory hazards",
        },
        correctChoice: "D",
        explanationCorrect:
          "OSHA mandates spirometry surveillance for workers exposed to specific regulated substances including asbestos, cotton dust, silica, and other known respiratory hazards as part of medical surveillance programs.",
        explanationWrong:
          "Carbon dioxide, water vapor, and UV radiation exposure do not have OSHA-mandated spirometry screening requirements.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 7,
        questionText:
          "In occupational spirometry screening, what is considered a significant annual decline in FEV1 that warrants further investigation?",
        choices: {
          A: "Any decline of 10 mL or more per year",
          B: "A decline of 100 mL per year or more",
          C: "A decline exceeding the expected age-related loss, typically greater than 60-90 mL/year",
          D: "A decline only if FEV1 falls below 80% predicted",
        },
        correctChoice: "C",
        explanationCorrect:
          "Normal age-related FEV1 decline is approximately 20-30 mL/year. An excessive decline of greater than 60-90 mL/year in longitudinal monitoring suggests occupational exposure-related lung damage warranting further evaluation.",
        explanationWrong:
          "A 10 mL decline is within normal variability. A 100 mL/year threshold is too conservative and would miss cases. Waiting until FEV1 falls below 80% predicted delays intervention.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 8,
        questionText:
          "A patient scheduled for upper abdominal surgery has an FEV1 of 1.2 L (45% predicted). Which of the following is the most appropriate recommendation?",
        choices: {
          A: "Further risk assessment with cardiopulmonary exercise testing and optimization of pulmonary status before surgery",
          B: "Proceed with surgery since upper abdominal surgery does not affect respiratory function",
          C: "Cancel the surgery permanently due to unacceptable pulmonary risk",
          D: "Repeat PFTs in 3 months to see if values improve spontaneously",
        },
        correctChoice: "A",
        explanationCorrect:
          "An FEV1 of 45% predicted before upper abdominal surgery warrants further assessment. Cardiopulmonary exercise testing can better define functional capacity, and preoperative pulmonary optimization may reduce postoperative complications.",
        explanationWrong:
          "Upper abdominal surgery significantly impairs diaphragmatic function postoperatively. Permanent cancellation may not be warranted without further evaluation. Delaying without intervention does not address the risk.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 9,
        questionText:
          "Byssinosis is an occupational lung disease caused by exposure to:",
        choices: {
          A: "Silica dust in quarries",
          B: "Asbestos fibers in construction",
          C: "Welding fumes in metal fabrication",
          D: "Cotton, flax, or hemp dust in textile manufacturing",
        },
        correctChoice: "D",
        explanationCorrect:
          "Byssinosis is caused by inhalation of organic dusts from cotton, flax, or hemp processing. It classically presents with chest tightness on the first day back to work after a weekend ('Monday morning chest tightness').",
        explanationWrong:
          "Silica exposure causes silicosis. Asbestos causes asbestosis and mesothelioma. Welding fumes can cause metal fume fever and siderosis, not byssinosis.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 10,
        questionText:
          "For pre-operative assessment, which of the following exercise test parameters best predicts postoperative pulmonary complications?",
        choices: {
          A: "Maximum heart rate achieved",
          B: "Maximum oxygen consumption (VO2 max)",
          C: "Duration of exercise in minutes",
          D: "Respiratory rate at peak exercise",
        },
        correctChoice: "B",
        explanationCorrect:
          "Maximum oxygen consumption (VO2 max) is the strongest predictor of postoperative complications in lung resection candidates. A VO2 max greater than 15 mL/kg/min generally indicates acceptable surgical risk.",
        explanationWrong:
          "Maximum heart rate, exercise duration, and respiratory rate are less specific predictors. VO2 max integrates cardiovascular and pulmonary function, providing the best overall risk assessment.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 11,
        questionText:
          "A worker exposed to isocyanates in an automobile paint shop develops wheezing and dyspnea during work shifts. Serial peak flow monitoring shows a pattern of decreased peak flows during workdays with recovery on days off. This pattern is most consistent with:",
        choices: {
          A: "Occupational asthma",
          B: "Chronic obstructive pulmonary disease",
          C: "Vocal cord dysfunction",
          D: "Pulmonary fibrosis",
        },
        correctChoice: "A",
        explanationCorrect:
          "The pattern of work-related symptoms with serial peak flow changes showing decreases during exposure and recovery away from work is classic for occupational asthma caused by isocyanate sensitization.",
        explanationWrong:
          "COPD does not show this work-related variability pattern. VCD would not show consistent peak flow changes. Pulmonary fibrosis presents with restriction, not variable obstruction.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 12,
        questionText:
          "When calculating predicted postoperative FEV1 using the anatomical segment counting method, the total number of functioning lung segments in a normal individual is:",
        choices: {
          A: "15",
          B: "17",
          C: "22",
          D: "19",
        },
        correctChoice: "D",
        explanationCorrect:
          "The normal lung has 19 functional segments (10 on the right and 9 on the left). The segment counting method estimates ppo FEV1 by multiplying current FEV1 by the ratio of remaining segments to 19.",
        explanationWrong:
          "15, 17, and 22 are incorrect segment counts. The standard anatomical count used for surgical planning is 19 segments total.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 13,
        questionText:
          "In occupational spirometry surveillance, the technologist should ensure cross-shift testing measures which parameter change?",
        choices: {
          A: "Change in DLCO from morning to afternoon",
          B: "Change in total lung capacity across the work shift",
          C: "Change in FEV1 and FVC measured before and after a work shift",
          D: "Change in pulse oximetry readings during the shift",
        },
        correctChoice: "C",
        explanationCorrect:
          "Cross-shift spirometry measures the change in FEV1 and FVC from pre-shift (before exposure) to post-shift (after exposure) to detect acute airway responses to workplace exposures during a single work shift.",
        explanationWrong:
          "DLCO and TLC are not typically measured in cross-shift protocols. Pulse oximetry monitoring is not part of standard cross-shift spirometry surveillance.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 14,
        questionText:
          "A patient with a predicted postoperative FEV1 of 35% and predicted postoperative DLCO of 32% is being considered for lobectomy. The next recommended step is:",
        choices: {
          A: "Proceed directly to surgery since the values are close to acceptable thresholds",
          B: "Perform cardiopulmonary exercise testing to further evaluate functional capacity",
          C: "Order a repeat DLCO in 6 weeks",
          D: "Refer for lung transplant evaluation instead",
        },
        correctChoice: "B",
        explanationCorrect:
          "When ppo FEV1 or ppo DLCO is below 40% predicted, guidelines recommend cardiopulmonary exercise testing (CPET) to further stratify risk. VO2 max from CPET provides additional information for surgical decision-making.",
        explanationWrong:
          "Proceeding directly with borderline values is premature without further evaluation. Delayed repeat testing does not address current surgical planning. Transplant referral is not indicated based solely on these values.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 15,
        questionText:
          "Silicosis screening in occupational health typically reveals which PFT pattern in advanced disease?",
        choices: {
          A: "Normal spirometry with elevated DLCO",
          B: "Pure obstructive pattern with increased TLC",
          C: "Increased FEV1/FVC ratio above 0.90",
          D: "Restrictive pattern with reduced FVC, TLC, and DLCO",
        },
        correctChoice: "D",
        explanationCorrect:
          "Advanced silicosis causes progressive pulmonary fibrosis resulting in a restrictive pattern with reduced lung volumes (FVC, TLC) and impaired gas exchange (reduced DLCO) due to fibrotic destruction of the alveolar-capillary membrane.",
        explanationWrong:
          "Normal spirometry is seen only in early disease. Pure obstruction with hyperinflation is not the classic silicosis pattern. An FEV1/FVC ratio above 0.90 alone does not characterize silicosis.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 16,
        questionText:
          "Pre-operative split-function testing using quantitative ventilation-perfusion scanning is most useful for:",
        choices: {
          A: "Determining the type of anesthesia to use",
          B: "Measuring the patient's cardiac output",
          C: "Estimating the functional contribution of each lung to overall ventilation and perfusion",
          D: "Assessing airway reactivity before surgery",
        },
        correctChoice: "C",
        explanationCorrect:
          "Quantitative V/Q scanning determines the percentage of total ventilation and perfusion contributed by each lung, allowing more accurate estimation of predicted postoperative lung function for pneumonectomy or lobectomy.",
        explanationWrong:
          "Anesthesia type is determined by other factors. Cardiac output is measured by other methods. Airway reactivity assessment uses bronchoprovocation testing, not V/Q scanning.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 17,
        questionText:
          "An occupational health clinic performs spirometry on a group of workers exposed to grain dust. Which of the following quality control measures is most critical for valid surveillance results?",
        choices: {
          A: "Using the same calibrated spirometer and trained technologist for each testing session to minimize inter-session variability",
          B: "Testing workers only during morning shifts",
          C: "Using predicted values from a single reference population regardless of worker demographics",
          D: "Allowing workers to use their personal inhalers immediately before testing",
        },
        correctChoice: "A",
        explanationCorrect:
          "Consistency in equipment and personnel is critical for valid longitudinal surveillance. Using the same calibrated spirometer and trained technologist minimizes variability that could be mistaken for true changes in lung function.",
        explanationWrong:
          "Restricting to morning shifts is impractical and not required. Reference values should match worker demographics. Inhaler use before testing masks the occupational exposure effect being screened.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 18,
        questionText:
          "In the stairclimb test used as a simple pre-operative screening tool, the ability to climb how many flights of stairs generally correlates with sufficient reserve for lobectomy?",
        choices: {
          A: "1 flight (approximately 12 steps)",
          B: "5 flights or more",
          C: "3 flights (approximately 36 steps)",
          D: "Only 2 flights are needed",
        },
        correctChoice: "C",
        explanationCorrect:
          "The ability to climb 3 flights of stairs (approximately 36 steps) without stopping is considered a simple clinical indicator of adequate cardiopulmonary reserve for lobectomy. Climbing 5 or more flights correlates with pneumonectomy tolerance.",
        explanationWrong:
          "One flight is insufficient to predict surgical tolerance. Five flights correlates more with pneumonectomy reserve. Two flights alone does not reliably predict lobectomy tolerance.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 19,
        questionText:
          "A foundry worker has annual spirometry showing FEV1 values of 3.50 L, 3.42 L, 3.35 L, and 3.10 L over 4 consecutive years. This decline is most concerning because:",
        choices: {
          A: "The FEV1 has fallen below 3.0 L",
          B: "The rate of decline in the last year (250 mL) far exceeds the expected age-related decline and suggests accelerated lung function loss",
          C: "All values remain within normal limits",
          D: "Spirometry cannot detect occupational lung damage",
        },
        correctChoice: "B",
        explanationCorrect:
          "The year-4 decline of 250 mL is far greater than the expected 20-30 mL/year age-related decline and the prior years' decline rate. This accelerated loss suggests possible occupational exposure-related lung damage requiring investigation.",
        explanationWrong:
          "The absolute value of 3.10 L may still be within normal limits, but the rate of decline is the critical finding. Spirometry is a validated tool for detecting occupational lung damage through longitudinal monitoring.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam13.id,
        questionIndex: 20,
        questionText:
          "Which of the following best describes the role of the CPFT in pre-operative pulmonary assessment?",
        choices: {
          A: "Performing high-quality PFTs with proper documentation of test quality, patient effort, and any testing limitations",
          B: "Making the final surgical decision based on PFT results",
          C: "Prescribing pre-operative bronchodilator therapy",
          D: "Performing the quantitative V/Q scan independently",
        },
        correctChoice: "A",
        explanationCorrect:
          "The CPFT's role in pre-operative assessment is to perform accurate, reproducible PFTs with thorough documentation of test quality, patient cooperation, and any factors that may affect interpretation, enabling the physician to make informed surgical decisions.",
        explanationWrong:
          "Surgical decisions and prescribing medications are physician responsibilities. V/Q scans are performed by nuclear medicine technologists, not CPFTs.",
        topic: "Pre-operative pulmonary assessment",
      },
    ],
  });

  // ─── EXAM 14 ──────────────────────────────────────────────
  // Topics: Advanced DLCO adjustments (Hb, COHb, altitude), comprehensive integration
  // Answer distribution: A=5(Q2,7,10,16,19) B=5(Q4,6,12,15,18) C=5(Q1,5,9,13,20) D=5(Q3,8,11,14,17)
  const exam14 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 14",
      examIndex: 14,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam14.id,
        questionIndex: 1,
        questionText:
          "DLCO is adjusted for hemoglobin because hemoglobin directly affects which component of the diffusion process?",
        choices: {
          A: "The thickness of the alveolar-capillary membrane",
          B: "The surface area available for gas exchange",
          C: "The uptake of carbon monoxide by hemoglobin in pulmonary capillary blood",
          D: "The partial pressure of oxygen in the alveolus",
        },
        correctChoice: "C",
        explanationCorrect:
          "Hemoglobin is the binding site for CO in the pulmonary capillary blood. Anemia reduces the available hemoglobin for CO uptake, causing a falsely low DLCO that does not reflect true membrane diffusion capacity.",
        explanationWrong:
          "Hemoglobin does not affect membrane thickness, alveolar surface area, or alveolar oxygen partial pressure. It specifically affects the gas uptake component of diffusion.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 2,
        questionText:
          "A patient with a hemoglobin of 9.0 g/dL has a measured DLCO of 18 mL/min/mmHg. After hemoglobin correction, the adjusted DLCO would be:",
        choices: {
          A: "Higher than 18 mL/min/mmHg because the correction accounts for reduced Hb-mediated CO uptake",
          B: "Lower than 18 mL/min/mmHg because anemia enhances diffusion",
          C: "Unchanged because hemoglobin does not affect DLCO",
          D: "Exactly doubled to 36 mL/min/mmHg",
        },
        correctChoice: "A",
        explanationCorrect:
          "When hemoglobin is low, the measured DLCO is falsely reduced. The hemoglobin correction formula adjusts the DLCO upward to estimate what it would be at a standard hemoglobin level, giving a value higher than the uncorrected measurement.",
        explanationWrong:
          "Anemia decreases, not enhances, CO uptake. Hemoglobin significantly affects DLCO measurements. The correction does not simply double the value but uses a specific correction equation.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 3,
        questionText:
          "Elevated carboxyhemoglobin (COHb) levels affect DLCO measurement by:",
        choices: {
          A: "Increasing the rate of CO absorption from inspired test gas",
          B: "Having no measurable effect on the test results",
          C: "Enhancing membrane diffusion capacity",
          D: "Reducing the pressure gradient for CO diffusion and competing with test gas CO for hemoglobin binding sites",
        },
        correctChoice: "D",
        explanationCorrect:
          "Elevated COHb reduces the partial pressure gradient driving CO diffusion across the membrane and occupies hemoglobin binding sites that would otherwise bind the test gas CO, resulting in a falsely reduced DLCO.",
        explanationWrong:
          "High COHb decreases, not increases, CO absorption. It has a significant effect on results. It does not enhance membrane diffusion.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 4,
        questionText:
          "A heavy smoker with a COHb level of 8% has a DLCO performed. The technologist should:",
        choices: {
          A: "Report the DLCO without adjustment since smoking status is irrelevant",
          B: "Adjust the DLCO for the elevated COHb level and note the smoking status and COHb value in the report",
          C: "Refuse to perform the test until the patient has abstained from smoking for 48 hours",
          D: "Use the COHb level to calculate the patient's FEV1",
        },
        correctChoice: "B",
        explanationCorrect:
          "The DLCO should be adjusted for elevated COHb levels using standard correction formulas. The report should document the COHb level and smoking status so the interpreting physician has full context for the corrected values.",
        explanationWrong:
          "Ignoring the COHb effect leads to falsely low results. While abstinence is ideal, testing may still need to proceed clinically. COHb has no role in FEV1 calculation.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 5,
        questionText:
          "At high altitude (e.g., Denver, CO at 5,280 feet), DLCO measurements are affected primarily because:",
        choices: {
          A: "Temperature changes at altitude alter gas viscosity",
          B: "Spirometer calibration is invalid at altitude",
          C: "The reduced barometric pressure decreases the inspired PO2 and alters the alveolar gas composition affecting CO uptake",
          D: "High altitude has no clinically significant effect on DLCO",
        },
        correctChoice: "C",
        explanationCorrect:
          "At high altitude, reduced barometric pressure lowers the partial pressure of inspired oxygen, which increases the affinity of hemoglobin for CO. This can cause DLCO to be falsely elevated at altitude, requiring correction.",
        explanationWrong:
          "Temperature effects on gas viscosity are minimal. Spirometer calibration may need adjustment for altitude but that is a separate issue. Altitude significantly affects DLCO measurements.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 6,
        questionText:
          "The standard hemoglobin value used for DLCO correction in adult males is:",
        choices: {
          A: "12.0 g/dL",
          B: "14.6 g/dL",
          C: "16.0 g/dL",
          D: "10.0 g/dL",
        },
        correctChoice: "B",
        explanationCorrect:
          "The standard reference hemoglobin used for DLCO adjustment in adult males is 14.6 g/dL (some references cite 14.6 g/dL for men). DLCO values are corrected to this standard to allow comparison across patients with varying hemoglobin levels.",
        explanationWrong:
          "12.0 g/dL is below the standard for males. 16.0 g/dL and 10.0 g/dL are not the standard reference values used in DLCO correction formulas.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 7,
        questionText:
          "A patient with polycythemia vera has a hemoglobin of 20 g/dL. Without correction, the measured DLCO would likely be:",
        choices: {
          A: "Falsely elevated because excess hemoglobin provides additional CO binding capacity",
          B: "Falsely decreased due to increased blood viscosity",
          C: "Unaffected since polycythemia does not alter CO diffusion",
          D: "Impossible to measure in polycythemia",
        },
        correctChoice: "A",
        explanationCorrect:
          "Polycythemia increases the available hemoglobin for CO uptake, causing the uncorrected DLCO to be falsely elevated. Correcting for the actual hemoglobin level normalizes the result to reveal the true membrane diffusion capacity.",
        explanationWrong:
          "While blood viscosity is increased, the primary effect on DLCO is through enhanced CO binding capacity. Polycythemia does affect CO diffusion measurement. DLCO can still be measured with polycythemia.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 8,
        questionText:
          "A 55-year-old woman presents with PFT results showing FVC 78% predicted, FEV1 75% predicted, FEV1/FVC 0.79, TLC 82% predicted, and DLCO 45% predicted. The most likely diagnosis is:",
        choices: {
          A: "Severe asthma",
          B: "Obesity-related restriction",
          C: "Neuromuscular weakness",
          D: "Pulmonary vascular disease or early interstitial lung disease",
        },
        correctChoice: "D",
        explanationCorrect:
          "The disproportionately reduced DLCO relative to the mildly reduced or near-normal spirometry and lung volumes is characteristic of pulmonary vascular disease or early interstitial lung disease, where gas exchange is impaired before volumes are significantly affected.",
        explanationWrong:
          "Severe asthma typically shows more prominent obstruction. Obesity causes restriction with preserved DLCO. Neuromuscular disease shows restriction with relatively preserved DLCO.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 9,
        questionText:
          "When adjusting DLCO for altitude, the correction formula accounts for the difference between the laboratory's barometric pressure and:",
        choices: {
          A: "The patient's home altitude",
          B: "The altitude of the reference population",
          C: "Standard sea-level barometric pressure (760 mmHg)",
          D: "The average barometric pressure of the past month",
        },
        correctChoice: "C",
        explanationCorrect:
          "Altitude correction for DLCO adjusts the measured value to what it would be at standard sea-level barometric pressure of 760 mmHg, allowing comparison with reference values derived at or near sea level.",
        explanationWrong:
          "The patient's home altitude or reference population altitude are not the standard correction targets. Monthly average barometric pressure does not replace the sea-level standard.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 10,
        questionText:
          "A patient has the following PFT results: FVC 3.2 L (65% predicted), FEV1 2.9 L (70% predicted), FEV1/FVC 0.91, TLC 4.0 L (62% predicted), RV 0.8 L (55% predicted), DLCO 60% predicted. These findings are most consistent with:",
        choices: {
          A: "Restrictive lung disease",
          B: "Obstructive lung disease",
          C: "Combined obstructive and restrictive disease",
          D: "Normal pulmonary function with poor effort",
        },
        correctChoice: "A",
        explanationCorrect:
          "The preserved FEV1/FVC ratio (0.91) with reduced FVC, reduced TLC, reduced RV, and reduced DLCO is the classic pattern of restrictive lung disease, where all lung volumes are proportionally reduced.",
        explanationWrong:
          "Obstructive disease shows a reduced FEV1/FVC ratio with elevated RV and TLC. Combined disease shows elements of both. Poor effort typically shows variable results without the consistent restrictive pattern.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 11,
        questionText:
          "A patient undergoing DLCO testing reports smoking a cigarette 30 minutes before arriving. In addition to adjusting for COHb, the technologist should document:",
        choices: {
          A: "Only the COHb level in the report",
          B: "Nothing additional beyond standard reporting",
          C: "That the patient should return for repeat testing on another day",
          D: "The time of last cigarette, approximate daily cigarette consumption, and measured or estimated COHb level",
        },
        correctChoice: "D",
        explanationCorrect:
          "Comprehensive documentation should include timing of the last cigarette, daily smoking volume, and COHb level to allow the interpreting physician to fully assess the reliability and context of the DLCO result.",
        explanationWrong:
          "Reporting only COHb without context is insufficient. No documentation would be negligent. While repeat testing may be ideal, clinical circumstances may not permit it, so thorough documentation of the current test conditions is essential.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 12,
        questionText:
          "A 70-year-old patient has PFTs showing FEV1 55% predicted, FVC 70% predicted, FEV1/FVC 0.58, TLC 120% predicted, RV 180% predicted, and DLCO 40% predicted. Post-bronchodilator FEV1 improves by 5%. This is most consistent with:",
        choices: {
          A: "Asthma with reversible airflow obstruction",
          B: "COPD with emphysema",
          C: "Pulmonary fibrosis",
          D: "Congestive heart failure",
        },
        correctChoice: "B",
        explanationCorrect:
          "The combination of fixed airflow obstruction (low FEV1/FVC with minimal bronchodilator response), hyperinflation (elevated TLC and RV), and significantly reduced DLCO is the classic PFT pattern of COPD with emphysema.",
        explanationWrong:
          "Asthma typically shows significant bronchodilator reversibility. Pulmonary fibrosis shows restriction, not obstruction. CHF may reduce DLCO but typically does not cause this degree of obstruction and hyperinflation.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 13,
        questionText:
          "The DLCO adjustment for hemoglobin uses a correction equation. Which form of hemoglobin is measured for this adjustment?",
        choices: {
          A: "Fetal hemoglobin (HbF)",
          B: "Glycosylated hemoglobin (HbA1c)",
          C: "Total hemoglobin concentration (Hb in g/dL)",
          D: "Methemoglobin (MetHb)",
        },
        correctChoice: "C",
        explanationCorrect:
          "The DLCO hemoglobin correction uses total hemoglobin concentration (g/dL) to adjust for the amount of hemoglobin available to bind CO. This is the standard complete blood count hemoglobin value.",
        explanationWrong:
          "Fetal hemoglobin, glycosylated hemoglobin, and methemoglobin are specialized hemoglobin measurements not used in standard DLCO correction formulas.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 14,
        questionText:
          "A 35-year-old woman has PFTs showing FVC 95% predicted, FEV1 96% predicted, FEV1/FVC 0.83, TLC 100% predicted, DLCO 105% predicted, but lung volumes by plethysmography show elevated Raw (airway resistance). The most likely explanation is:",
        choices: {
          A: "Early interstitial lung disease",
          B: "Measurement artifact requiring repeat testing",
          C: "Normal variant finding in a young woman",
          D: "Upper airway obstruction or early small airway disease not yet reflected in spirometry",
        },
        correctChoice: "D",
        explanationCorrect:
          "Elevated airway resistance with normal spirometry, volumes, and DLCO can indicate early airway disease or upper airway obstruction that has not yet progressed enough to alter standard spirometric indices.",
        explanationWrong:
          "Interstitial disease would show reduced DLCO. While artifact is possible, isolated elevated Raw is a real finding worth investigating. This is not a typical normal variant.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 15,
        questionText:
          "When both hemoglobin and COHb adjustments are applied to DLCO, which should be applied first?",
        choices: {
          A: "COHb adjustment should always be applied first",
          B: "Both adjustments should be applied simultaneously using a combined correction equation",
          C: "The order depends on the severity of the abnormality",
          D: "Hemoglobin adjustment must always precede COHb adjustment",
        },
        correctChoice: "B",
        explanationCorrect:
          "Modern DLCO correction formulas apply both hemoglobin and COHb adjustments simultaneously using a combined equation that accounts for the interaction between these factors on CO uptake.",
        explanationWrong:
          "Applying corrections sequentially can introduce error. The combined equation approach is recommended by ATS/ERS standards. The order does not depend on severity.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 16,
        questionText:
          "A patient being evaluated for unexplained dyspnea has PFTs showing: FVC 88% predicted, FEV1 85% predicted, FEV1/FVC 0.78, TLC 95% predicted, DLCO 50% predicted. The DLCO corrected for hemoglobin (Hb 14.0 g/dL) remains at 52% predicted. The next most appropriate step is:",
        choices: {
          A: "Recommend CT pulmonary angiography or echocardiography to evaluate for pulmonary vascular disease",
          B: "Repeat DLCO in 3 months to see if it changes",
          C: "Assume the DLCO is a technical error since spirometry is near normal",
          D: "Perform methacholine challenge to evaluate for asthma",
        },
        correctChoice: "A",
        explanationCorrect:
          "An isolated severely reduced DLCO with near-normal spirometry and lung volumes strongly suggests pulmonary vascular disease (such as pulmonary embolism or pulmonary hypertension) or early parenchymal disease. CT angiography or echocardiography is appropriate for further evaluation.",
        explanationWrong:
          "Delaying evaluation of a significantly reduced DLCO is inappropriate. A technical error is unlikely if the test met quality criteria. Methacholine challenge evaluates airway hyperreactivity, not gas exchange.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 17,
        questionText:
          "A patient at a laboratory located at 7,000 feet altitude has a measured DLCO of 28 mL/min/mmHg. After altitude correction, the DLCO would be:",
        choices: {
          A: "Higher than 28 mL/min/mmHg",
          B: "Unchanged at 28 mL/min/mmHg",
          C: "Exactly 28 mL/min/mmHg multiplied by 2",
          D: "Lower than 28 mL/min/mmHg because altitude correction reduces the value to account for the altitude-related increase in CO uptake",
        },
        correctChoice: "D",
        explanationCorrect:
          "At altitude, reduced PO2 increases hemoglobin's affinity for CO, artificially elevating the measured DLCO. The altitude correction adjusts the value downward to what it would be at sea level, giving a lower corrected value.",
        explanationWrong:
          "The corrected value is lower, not higher or unchanged. The correction is not a simple multiplication by 2 but uses a specific formula based on barometric pressure.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 18,
        questionText:
          "A 60-year-old man with known asbestosis has PFTs showing FVC 58% predicted, FEV1 60% predicted, FEV1/FVC 0.82, TLC 55% predicted, DLCO 38% predicted. He is being evaluated for impairment. Using AMA Guides, the DLCO value of 38% predicted places him in which impairment class?",
        choices: {
          A: "Class 1 (mild)",
          B: "Class 4 (severe or maximal impairment)",
          C: "Class 2 (moderate)",
          D: "Class 0 (no impairment)",
        },
        correctChoice: "B",
        explanationCorrect:
          "A DLCO of 38% predicted falls in the severe impairment range under AMA Guides classification. Class 4 typically includes DLCO values below 40% predicted, reflecting significant gas exchange limitation.",
        explanationWrong:
          "Class 1 (mild) is for values near the lower limit of normal. Class 2 (moderate) is for moderately reduced values. Class 0 is for normal values. A DLCO below 40% predicted represents severe impairment.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 19,
        questionText:
          "The KCO (DLCO/VA or transfer coefficient) is particularly useful in which clinical scenario?",
        choices: {
          A: "Distinguishing between reduced DLCO from loss of lung volume versus reduced DLCO from parenchymal or vascular disease",
          B: "Replacing the need for hemoglobin-corrected DLCO",
          C: "Determining the severity of airflow obstruction",
          D: "Predicting bronchodilator responsiveness",
        },
        correctChoice: "A",
        explanationCorrect:
          "KCO (transfer coefficient) corrects DLCO for accessible lung volume (VA). A reduced DLCO with a normal KCO suggests volume loss (e.g., post-pneumonectomy), while a reduced DLCO with reduced KCO indicates intrinsic parenchymal or vascular disease.",
        explanationWrong:
          "KCO does not replace hemoglobin correction. It does not measure airflow obstruction or predict bronchodilator response. Its specific utility is in distinguishing causes of reduced DLCO.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam14.id,
        questionIndex: 20,
        questionText:
          "A 45-year-old patient presents with progressive dyspnea. PFTs show FVC 50% predicted, FEV1 52% predicted, FEV1/FVC 0.84, TLC 48% predicted, DLCO 35% predicted. MIP is -90 cmH2O (normal). These results are most consistent with:",
        choices: {
          A: "Neuromuscular disease causing respiratory muscle weakness",
          B: "Obesity hypoventilation syndrome",
          C: "Idiopathic pulmonary fibrosis",
          D: "Chronic bronchitis",
        },
        correctChoice: "C",
        explanationCorrect:
          "Severe restriction (low FVC, TLC) with markedly reduced DLCO and normal respiratory muscle strength (normal MIP) is classic for idiopathic pulmonary fibrosis. The normal MIP rules out neuromuscular weakness as the cause of restriction.",
        explanationWrong:
          "Neuromuscular disease would show reduced MIP. Obesity hypoventilation typically has less DLCO reduction. Chronic bronchitis is an obstructive disease with different PFT characteristics.",
        topic: "Board-style comprehensive integration scenarios",
      },
    ],
  });

  // ─── EXAM 15 ──────────────────────────────────────────────
  // Topics: Comprehensive integration - combining all advanced topics
  // Answer distribution: A=5(Q1,8,12,15,18) B=5(Q3,6,10,17,20) C=5(Q5,7,11,14,16) D=5(Q2,4,9,13,19)
  const exam15 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 15",
      examIndex: 15,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam15.id,
        questionIndex: 1,
        questionText:
          "A 28-year-old competitive swimmer presents with exertional dyspnea only during intense training. Baseline spirometry is normal. The most appropriate bronchoprovocation test to evaluate for exercise-induced bronchoconstriction in this athlete is:",
        choices: {
          A: "Eucapnic voluntary hyperventilation (EVH)",
          B: "Methacholine challenge",
          C: "Mannitol challenge",
          D: "Histamine challenge",
        },
        correctChoice: "A",
        explanationCorrect:
          "EVH is the recommended test for EIB in athletes, endorsed by the International Olympic Committee. It most closely mimics the airway drying effect of high-intensity exercise and has high specificity for EIB in competitive athletes.",
        explanationWrong:
          "Methacholine is a direct challenge that is highly sensitive but less specific for EIB in athletes. Mannitol is an acceptable indirect challenge but EVH is preferred for elite athletes. Histamine challenge is less commonly used.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 2,
        questionText:
          "A patient undergoing pre-operative assessment for right upper lobectomy has FEV1 of 2.4 L (80% predicted). Using the anatomical segment counting method (3 segments in the right upper lobe out of 19 total), the predicted postoperative FEV1 is approximately:",
        choices: {
          A: "1.6 L",
          B: "1.8 L",
          C: "2.4 L",
          D: "2.02 L",
        },
        correctChoice: "D",
        explanationCorrect:
          "ppo FEV1 = pre-op FEV1 x (1 - segments removed/total segments) = 2.4 x (1 - 3/19) = 2.4 x (16/19) = 2.4 x 0.842 = approximately 2.02 L. This value exceeds the 0.8 L threshold, suggesting the patient can tolerate the lobectomy.",
        explanationWrong:
          "1.6 L would result from removing more segments than planned. 1.8 L represents an incorrect calculation. 2.4 L would mean no functional loss, which is not realistic after lobectomy.",
        topic: "Pre-operative pulmonary assessment",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 3,
        questionText:
          "A patient with a FeNO of 65 ppb and normal spirometry presents with chronic cough. The FeNO finding suggests the cough is likely due to:",
        choices: {
          A: "Gastroesophageal reflux disease",
          B: "Eosinophilic airway inflammation consistent with asthma, even with normal spirometry",
          C: "Post-nasal drip syndrome",
          D: "Chronic bronchitis from smoking",
        },
        correctChoice: "B",
        explanationCorrect:
          "A FeNO of 65 ppb is significantly elevated and strongly suggests eosinophilic airway inflammation consistent with asthma. Asthma can present with chronic cough and normal spirometry (cough-variant asthma), and the elevated FeNO supports this diagnosis.",
        explanationWrong:
          "GERD and post-nasal drip do not elevate FeNO. Smoking typically lowers FeNO values. The elevated FeNO specifically points to eosinophilic inflammation.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 4,
        questionText:
          "A PFT laboratory at 4,500 feet altitude measures a patient's DLCO at 22 mL/min/mmHg. The patient also has Hb of 10.5 g/dL and COHb of 3%. After applying all three corrections (altitude, hemoglobin, and COHb), the corrected DLCO will most likely be:",
        choices: {
          A: "Significantly higher than 22 due to anemia correction alone",
          B: "Similar to 22 because the corrections cancel each other out",
          C: "Lower than 22 because altitude correction reduces the value",
          D: "Different from 22, with the net direction depending on the relative magnitude of each correction (Hb correction increases, altitude correction decreases)",
        },
        correctChoice: "D",
        explanationCorrect:
          "The hemoglobin correction increases the value (correcting for low Hb), the altitude correction decreases the value (correcting for falsely elevated DLCO at altitude), and the COHb correction increases the value. The net result depends on the magnitude of each correction.",
        explanationWrong:
          "Simply saying it will be significantly higher ignores the altitude correction. The corrections do not necessarily cancel out. The altitude correction alone does not determine the final direction.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 5,
        questionText:
          "A 50-year-old factory worker has longitudinal spirometry data over 5 years showing progressive decline in FEV1 from 3.8 L to 3.2 L. The annualized rate of decline is 120 mL/year. Cross-shift testing shows a 10% drop in FEV1 after a shift working with TDI (toluene diisocyanate). These findings together suggest:",
        choices: {
          A: "Normal age-related decline with coincidental cross-shift variation",
          B: "Chronic bronchitis unrelated to occupational exposure",
          C: "Occupational asthma with accelerated lung function decline from ongoing TDI exposure",
          D: "Restrictive lung disease from a non-occupational cause",
        },
        correctChoice: "C",
        explanationCorrect:
          "The combination of accelerated FEV1 decline (120 mL/year, far exceeding the normal 20-30 mL/year) and acute cross-shift changes with TDI exposure strongly indicates occupational asthma with ongoing airway damage from isocyanate sensitization.",
        explanationWrong:
          "A 120 mL/year decline far exceeds normal aging. Cross-shift changes specifically linked to TDI exposure implicate the occupational environment. Restrictive disease would not show this pattern.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 6,
        questionText:
          "A laboratory is preparing to perform mannitol challenges. Which of the following is a requirement for the testing equipment?",
        choices: {
          A: "A heated nebulizer with adjustable output",
          B: "A spirometer capable of measuring FEV1 with ATS-compliant accuracy and a dry powder inhaler device for mannitol delivery",
          C: "A body plethysmograph for continuous monitoring",
          D: "An arterial blood gas analyzer on standby",
        },
        correctChoice: "B",
        explanationCorrect:
          "Mannitol challenge testing requires an ATS-compliant spirometer for accurate FEV1 measurement and uses a commercially available dry powder inhaler device for mannitol delivery. No nebulizer is needed.",
        explanationWrong:
          "Mannitol is delivered as a dry powder, not via nebulizer. Body plethysmography is not required during the test. While emergency equipment should be available, an ABG analyzer is not a specific equipment requirement.",
        topic: "Mannitol challenge testing",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 7,
        questionText:
          "When evaluating a patient for disability, the technologist obtains spirometry with a quality grade of D (2 acceptable maneuvers, repeatability not met). The best course of action is:",
        choices: {
          A: "Report the results as definitive and suitable for disability determination",
          B: "Discard all results and refuse to issue a report",
          C: "Report the results with clear documentation of the quality grade and note that values may be less reliable due to reduced quality",
          D: "Substitute the patient's prior PFT results from 2 years ago",
        },
        correctChoice: "C",
        explanationCorrect:
          "Grade D results should be reported with transparent documentation of the quality grade and its implications. The interpreting physician can then decide how much weight to give the results in the disability determination.",
        explanationWrong:
          "Reporting as definitive without quality notation is misleading. Discarding results entirely wastes the testing session. Old results may not reflect current function and cannot substitute for current testing.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 8,
        questionText:
          "A patient with sarcoidosis has PFTs showing FVC 72% predicted, FEV1 68% predicted, FEV1/FVC 0.75, TLC 75% predicted, and DLCO 55% predicted. Which additional finding would most suggest the development of pulmonary hypertension as a complication?",
        choices: {
          A: "A progressive decline in DLCO out of proportion to the decline in lung volumes on serial testing",
          B: "Improvement in FEV1 after bronchodilator administration",
          C: "A normal FeNO level",
          D: "An increase in residual volume on repeat testing",
        },
        correctChoice: "A",
        explanationCorrect:
          "In sarcoidosis, a disproportionate decline in DLCO relative to lung volumes suggests the development of pulmonary vascular disease or pulmonary hypertension, which impairs gas exchange independently of parenchymal restriction.",
        explanationWrong:
          "Bronchodilator response does not indicate PH. Normal FeNO does not rule out PH. Increased RV suggests air trapping, not specifically pulmonary hypertension.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 9,
        questionText:
          "During EVH testing, a patient cannot maintain the target ventilation rate and achieves only 50% of predicted MVV for the 6-minute period. The test result should be interpreted as:",
        choices: {
          A: "Positive for EIB since any level of hyperventilation is sufficient",
          B: "Equivalent to a methacholine challenge result",
          C: "Normal because lower ventilation rates are more physiologic",
          D: "Suboptimal and potentially a false-negative result, because insufficient ventilation may not provoke bronchoconstriction even in susceptible individuals",
        },
        correctChoice: "D",
        explanationCorrect:
          "Achieving only 50% of predicted MVV during EVH is suboptimal. The test requires approximately 85% of predicted MVV to adequately stress the airways. A negative result at suboptimal ventilation may be falsely negative.",
        explanationWrong:
          "Not any ventilation level is sufficient for a valid EVH. The result is not equivalent to methacholine. Lower rates are not more physiologic for this specific challenge test.",
        topic: "Eucapnic voluntary hyperventilation (EVH)",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 10,
        questionText:
          "A patient has a measured DLCO of 15 mL/min/mmHg (50% predicted). Hemoglobin is 8.0 g/dL. After correcting for hemoglobin, the DLCO adjusts to 22 mL/min/mmHg (73% predicted). The most accurate clinical interpretation is:",
        choices: {
          A: "The patient has severe intrinsic diffusion impairment",
          B: "The low measured DLCO was primarily due to anemia, and the corrected value suggests only mild diffusion impairment",
          C: "The hemoglobin correction is unreliable at this level of anemia",
          D: "The patient needs repeat testing after blood transfusion",
        },
        correctChoice: "B",
        explanationCorrect:
          "The significant improvement after hemoglobin correction (from 50% to 73% predicted) demonstrates that the anemia was the primary cause of the low measured DLCO. The corrected value of 73% suggests only mild residual diffusion impairment.",
        explanationWrong:
          "Severe intrinsic impairment is not supported after correction. The correction formula is valid at this hemoglobin level. Repeat testing after transfusion may be helpful but is not required for interpretation.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 11,
        questionText:
          "A patient with suspected occupational asthma is scheduled for specific inhalation challenge (SIC) testing in a specialized laboratory. The role of the CPFT includes:",
        choices: {
          A: "Selecting the occupational agent to test",
          B: "Interpreting the challenge results independently",
          C: "Performing accurate pre- and post-challenge spirometry, monitoring the patient for adverse reactions, and documenting all measurements",
          D: "Determining whether the patient should return to work",
        },
        correctChoice: "C",
        explanationCorrect:
          "The CPFT's role in SIC testing includes performing high-quality spirometry measurements before and at defined intervals after challenge exposure, monitoring the patient for adverse reactions, and thoroughly documenting all measurements and observations.",
        explanationWrong:
          "Agent selection, independent interpretation, and return-to-work decisions are physician responsibilities, not within the CPFT scope of practice.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 12,
        questionText:
          "A patient referred for FeNO testing used their inhaled corticosteroid this morning. The expected effect on the FeNO result is:",
        choices: {
          A: "The FeNO may be lower than untreated baseline because inhaled corticosteroids suppress eosinophilic inflammation and reduce exhaled NO production",
          B: "The FeNO will be falsely elevated",
          C: "Inhaled corticosteroids have no effect on FeNO values",
          D: "The FeNO result will be completely invalid and unusable",
        },
        correctChoice: "A",
        explanationCorrect:
          "Inhaled corticosteroids suppress eosinophilic airway inflammation and reduce nitric oxide synthase activity, resulting in lower FeNO values. This is actually a therapeutic effect being measured and should be noted in the report.",
        explanationWrong:
          "ICS lower, not elevate, FeNO. ICS definitely affect FeNO measurements. The result is still clinically useful when interpreted in the context of current therapy.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 13,
        questionText:
          "During proficiency testing, a PFT laboratory's spirometry results consistently show volumes 4% lower than the expected values across multiple testing rounds. This systematic error most likely indicates:",
        choices: {
          A: "Normal inter-laboratory variation within acceptable limits",
          B: "Poor technologist coaching technique",
          C: "A software algorithm error in interpretation",
          D: "A calibration issue such as a leak in the calibration syringe, incorrect BTPS correction factors, or sensor drift",
        },
        correctChoice: "D",
        explanationCorrect:
          "A consistent 4% systematic underestimation across multiple rounds suggests a systematic calibration error rather than random variation. Possible causes include a leaking calibration syringe, incorrect BTPS correction, or gradual sensor drift.",
        explanationWrong:
          "While some inter-laboratory variation exists, a consistent 4% bias exceeds typical acceptable variation. Poor coaching would cause random, not systematic, errors. Software interpretation errors would not affect measured volumes.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 14,
        questionText:
          "A patient with amyotrophic lateral sclerosis (ALS) is being monitored with serial PFTs to determine when to recommend non-invasive ventilation. Which PFT parameter is most critical to track?",
        choices: {
          A: "DLCO",
          B: "FEF25-75",
          C: "FVC, particularly in the supine position",
          D: "Peak expiratory flow",
        },
        correctChoice: "C",
        explanationCorrect:
          "FVC, especially supine FVC, is the most important parameter to track in ALS. A decline in FVC below 50% predicted or a significant supine-to-upright FVC difference indicates diaphragmatic weakness and is used to guide the timing of non-invasive ventilation initiation.",
        explanationWrong:
          "DLCO is not primarily affected in ALS. FEF25-75 is effort-dependent and less reliable. Peak flow is variable and not the standard tracking parameter for neuromuscular disease progression.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 15,
        questionText:
          "A laboratory at 5,500 feet altitude performs DLCO testing on a patient with Hb of 11.0 g/dL. The raw measured DLCO is 20 mL/min/mmHg. If only the altitude correction is applied (reducing the value) without hemoglobin correction, the clinical result would be:",
        choices: {
          A: "Misleadingly low because the anemia effect has not been accounted for, potentially overestimating the severity of intrinsic lung disease",
          B: "Accurate because altitude correction is the only correction needed",
          C: "Higher than the measured value",
          D: "Unchanged from the raw measurement",
        },
        correctChoice: "A",
        explanationCorrect:
          "Applying only altitude correction (which lowers the value) without hemoglobin correction (which would raise it) produces a result that is misleadingly low, potentially overestimating the severity of parenchymal disease when anemia is contributing to the low DLCO.",
        explanationWrong:
          "Both corrections are needed for accuracy. Altitude correction alone decreases the value further. Omitting hemoglobin correction is a significant oversight in an anemic patient.",
        topic: "Advanced DLCO adjustments (Hb, COHb, altitude)",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 16,
        questionText:
          "A patient with chronic beryllium disease (CBD) from occupational exposure has PFTs showing a restrictive pattern with reduced DLCO. The beryllium lymphocyte proliferation test (BeLPT) is positive. The role of PFTs in this patient's ongoing management is to:",
        choices: {
          A: "Confirm the diagnosis of CBD",
          B: "Replace the need for chest imaging",
          C: "Monitor disease progression and response to treatment through serial measurements",
          D: "Determine the specific type of beryllium compound causing the disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "In diagnosed CBD, serial PFTs serve to monitor disease progression and response to immunosuppressive treatment. Declining FVC and DLCO indicate worsening disease, while stable or improving values suggest treatment efficacy.",
        explanationWrong:
          "CBD diagnosis relies on BeLPT and biopsy, not PFTs alone. PFTs do not replace imaging. PFTs cannot identify the specific beryllium compound.",
        topic: "Occupational lung disease screening",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 17,
        questionText:
          "A 62-year-old patient is being evaluated for lung volume reduction surgery (LVRS). Which PFT findings would make the patient a suitable candidate?",
        choices: {
          A: "FEV1 of 85% predicted with normal DLCO",
          B: "Severe hyperinflation with TLC greater than 120% predicted, FEV1 20-45% predicted, and DLCO greater than 20% predicted",
          C: "FEV1 less than 15% predicted with DLCO of 10% predicted",
          D: "Normal spirometry with isolated reduction in DLCO",
        },
        correctChoice: "B",
        explanationCorrect:
          "LVRS candidates typically have severe emphysema with significant hyperinflation, FEV1 in the 20-45% predicted range, and DLCO above 20% predicted. Patients with FEV1 below 20% and DLCO below 20% are at prohibitively high surgical risk.",
        explanationWrong:
          "An FEV1 of 85% indicates mild disease not warranting LVRS. Very low FEV1 and DLCO indicate unacceptable surgical risk. Normal spirometry is not an indication for LVRS.",
        topic: "Board-style comprehensive integration scenarios",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 18,
        questionText:
          "Which of the following statements about FeNO testing in children is correct?",
        choices: {
          A: "The recommended flow rate for children who can perform the maneuver is the same as adults at 50 mL/s, but the interpretation thresholds differ",
          B: "FeNO cannot be reliably measured in children under age 12",
          C: "Children require a higher flow rate of 100 mL/s for accurate measurement",
          D: "FeNO values in children are interpreted using the same thresholds as adults",
        },
        correctChoice: "A",
        explanationCorrect:
          "Children who can perform the test use the same 50 mL/s flow rate as adults. However, the interpretation thresholds are different: values above 35 ppb are considered elevated in children, compared to 50 ppb in adults.",
        explanationWrong:
          "FeNO can be measured in children as young as 5-6 years if they can maintain the steady exhalation. A higher flow rate is not used. The interpretation thresholds are different between children and adults.",
        topic: "Exhaled nitric oxide (FeNO) testing",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 19,
        questionText:
          "During accreditation review, a surveyor identifies that a PFT laboratory uses reference equations from 1983 for all patients. The surveyor recommends updating to GLI-2012 reference equations. The primary reason for this recommendation is:",
        choices: {
          A: "The 1983 equations are no longer commercially available in spirometry software",
          B: "The GLI-2012 equations use fixed percentage cutoffs which are simpler",
          C: "Older equipment cannot calculate results using 1983 equations",
          D: "GLI-2012 equations are multi-ethnic, cover a wider age range, and use statistically appropriate LLN values rather than fixed percentage cutoffs",
        },
        correctChoice: "D",
        explanationCorrect:
          "GLI-2012 reference equations are recommended because they are derived from a large multi-ethnic dataset, cover ages 3-95 years, and use statistically derived LLN (z-scores) rather than fixed percentage cutoffs, improving diagnostic accuracy across diverse populations.",
        explanationWrong:
          "The 1983 equations are still available in most software. GLI-2012 uses z-scores, not fixed percentages. The equations are software-based and do not depend on equipment age.",
        topic: "PFT laboratory accreditation and proficiency testing",
      },
      {
        miniExamId: exam15.id,
        questionIndex: 20,
        questionText:
          "A patient completes a mannitol challenge test and reaches the maximum cumulative dose of 635 mg without a 15% fall in FEV1. However, the patient's FEV1 has declined by 13% from baseline. The correct interpretation and action is:",
        choices: {
          A: "Report as positive since 13% is close to the threshold",
          B: "Report as negative since the 15% threshold was not reached, but note the 13% decline and administer a bronchodilator for symptom relief",
          C: "Extend the test by adding additional mannitol doses",
          D: "Repeat the entire test immediately to confirm",
        },
        correctChoice: "B",
        explanationCorrect:
          "The test is technically negative since the 15% FEV1 decline threshold was not reached. However, a 13% decline is clinically noteworthy and should be documented. A bronchodilator should be administered post-test per protocol for patient safety and comfort.",
        explanationWrong:
          "The 15% threshold is the defined cutoff for a positive result and should not be rounded. Extending beyond the maximum dose is not part of the standard protocol. Immediate repetition is not indicated.",
        topic: "Mannitol challenge testing",
      },
    ],
  });

  console.log("Seeded CPFT Mini Exams 11-15 successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
