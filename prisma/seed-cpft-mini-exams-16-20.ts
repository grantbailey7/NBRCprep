import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const divisionId = "cmsm41fxw0004zf54sy6um2ui";

  // ─── EXAM 16 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,6,11,14,19) B=5(Q1,8,13,17,20) C=5(Q3,7,10,15,18) D=5(Q4,5,9,12,16)
  const exam16 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 16",
      examIndex: 16,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam16.id,
        questionIndex: 1,
        questionText:
          "During a cardiopulmonary exercise test (CPET), the anaerobic threshold is most commonly identified by which of the following methods?",
        choices: {
          A: "Peak heart rate divided by predicted maximum",
          B: "V-slope method analyzing VCO2 versus VO2",
          C: "Decline in SpO2 below 88%",
          D: "Plateau in minute ventilation",
        },
        correctChoice: "B",
        explanationCorrect:
          "The V-slope method plots VCO2 against VO2 and identifies the anaerobic threshold as the point where VCO2 begins to rise disproportionately relative to VO2 due to buffering of lactic acid by bicarbonate.",
        explanationWrong:
          "Peak heart rate ratio assesses cardiovascular reserve, not anaerobic threshold. SpO2 decline indicates desaturation. A plateau in minute ventilation is not a recognized method for determining anaerobic threshold.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 2,
        questionText:
          "Which gas analyzer technology is based on the principle that oxygen is attracted to a magnetic field?",
        choices: {
          A: "Paramagnetic analyzer",
          B: "Thermal conductivity analyzer",
          C: "Nondispersive infrared (NDIR) analyzer",
          D: "Chemiluminescence analyzer",
        },
        correctChoice: "A",
        explanationCorrect:
          "Paramagnetic analyzers exploit the strong paramagnetic property of oxygen molecules, which are attracted into a magnetic field. This principle allows rapid and accurate measurement of oxygen concentration.",
        explanationWrong:
          "Thermal conductivity analyzers measure differences in heat conduction between gases. NDIR analyzers detect infrared absorption by gases like CO2 and CO. Chemiluminescence is used for nitric oxide measurement.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 3,
        questionText:
          "A flow-volume loop shows flattening of the inspiratory limb with a normal expiratory limb. This pattern is most consistent with which condition?",
        choices: {
          A: "Fixed upper airway obstruction",
          B: "Intrathoracic tracheal tumor",
          C: "Variable extrathoracic obstruction",
          D: "Severe COPD",
        },
        correctChoice: "C",
        explanationCorrect:
          "Variable extrathoracic obstruction (such as vocal cord dysfunction or unilateral vocal cord paralysis) causes flattening of the inspiratory limb because the negative intraluminal pressure during inspiration collapses the extrathoracic airway at the site of obstruction.",
        explanationWrong:
          "Fixed obstruction flattens both inspiratory and expiratory limbs equally. An intrathoracic tumor would flatten the expiratory limb. Severe COPD shows a scooped-out expiratory limb, not isolated inspiratory flattening.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 4,
        questionText:
          "During high-altitude simulation testing (HAST), what is the target FiO2 used to simulate cabin altitude of approximately 8,000 feet?",
        choices: {
          A: "0.176",
          B: "0.185",
          C: "0.21",
          D: "0.153",
        },
        correctChoice: "D",
        explanationCorrect:
          "An FiO2 of approximately 0.153 (15.3%) simulates the reduced partial pressure of oxygen at a cabin altitude of 8,000 feet (2,438 m), which is the maximum pressurization altitude permitted for commercial aircraft.",
        explanationWrong:
          "An FiO2 of 0.176 would simulate a lower altitude. 0.185 is too high to simulate 8,000 feet. 0.21 is sea-level room air and would not simulate altitude at all.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 5,
        questionText:
          "Which of the following is the recommended frequency for performing biologic control (testing a healthy nonsmoking subject) on pulmonary function equipment?",
        choices: {
          A: "Daily before patient testing",
          B: "Once per month",
          C: "Once per week",
          D: "Weekly or as specified by lab protocol",
        },
        correctChoice: "D",
        explanationCorrect:
          "Biologic control testing using a healthy nonsmoking subject is typically performed weekly or per laboratory protocol to monitor instrument drift and verify that equipment continues to produce consistent results over time.",
        explanationWrong:
          "Daily biologic control is impractical and not required; daily calibration checks use a syringe instead. Monthly testing is too infrequent to catch drift in a timely manner. While weekly is common, the correct approach follows lab-specific protocol.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 6,
        questionText:
          "In a CPET report, the VE/VCO2 slope is primarily used to assess which of the following?",
        choices: {
          A: "Ventilatory efficiency",
          B: "Cardiac output",
          C: "Peripheral oxygen extraction",
          D: "Respiratory muscle strength",
        },
        correctChoice: "A",
        explanationCorrect:
          "The VE/VCO2 slope reflects ventilatory efficiency by showing how much ventilation is required to eliminate a given amount of CO2. Elevated slopes indicate increased dead space ventilation or ventilation-perfusion mismatch.",
        explanationWrong:
          "Cardiac output is assessed through oxygen pulse and other hemodynamic measures. Peripheral oxygen extraction is reflected in the arteriovenous oxygen difference. Respiratory muscle strength is measured by MIP and MEP.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 7,
        questionText:
          "When generating a PFT report, which of the following is the most appropriate approach for interpreting results?",
        choices: {
          A: "Report only the numeric values and let the physician interpret",
          B: "Provide a definitive clinical diagnosis based on results",
          C: "Use a standardized interpretive strategy comparing results to lower limits of normal",
          D: "Always report results as percentage of predicted only",
        },
        correctChoice: "C",
        explanationCorrect:
          "ATS/ERS guidelines recommend using a standardized interpretive strategy that compares measured values to the lower limit of normal (LLN) derived from appropriate reference equations, along with systematic pattern recognition.",
        explanationWrong:
          "Reporting only numbers without interpretation fails to provide clinical utility. Technologists should not provide definitive diagnoses. Using only percent predicted without LLN can lead to misclassification, especially at extremes of age and height.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 8,
        questionText:
          "A patient undergoing CPET reaches a peak VO2 of 18 mL/kg/min with a predicted maximum of 30 mL/kg/min. The peak heart rate is 155 bpm with a predicted maximum of 170 bpm. Which statement best describes these findings?",
        choices: {
          A: "The patient achieved maximal effort with normal aerobic capacity",
          B: "The patient demonstrated reduced aerobic capacity with adequate cardiovascular reserve utilization",
          C: "The test is invalid due to submaximal effort",
          D: "The results indicate a ventilatory limitation to exercise",
        },
        correctChoice: "B",
        explanationCorrect:
          "Peak VO2 at 60% of predicted indicates reduced aerobic capacity. The heart rate reserve was largely utilized (155/170 = 91%), suggesting adequate effort and that the cardiovascular system was appropriately stressed despite the low peak VO2.",
        explanationWrong:
          "Normal aerobic capacity typically requires peak VO2 above 80% predicted. The heart rate ratio of 91% indicates adequate effort, not submaximal performance. Ventilatory limitation requires assessment of breathing reserve, not just VO2 and heart rate.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 9,
        questionText:
          "Which type of gas analyzer uses the principle that certain gases absorb infrared radiation at specific wavelengths?",
        choices: {
          A: "Paramagnetic analyzer",
          B: "Mass spectrometer",
          C: "Electrochemical analyzer",
          D: "Nondispersive infrared (NDIR) analyzer",
        },
        correctChoice: "D",
        explanationCorrect:
          "NDIR analyzers pass broadband infrared light through a gas sample and measure absorption at wavelengths specific to the target gas. They are commonly used to measure CO2 and CO concentrations in pulmonary function testing.",
        explanationWrong:
          "Paramagnetic analyzers use the magnetic properties of oxygen. Mass spectrometers ionize gas molecules and separate them by mass-to-charge ratio. Electrochemical analyzers measure gas concentration through chemical reactions at electrode surfaces.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 10,
        questionText:
          "During longitudinal monitoring of a patient's FEV1 over 5 years, which annual rate of decline would be considered clinically significant beyond normal aging?",
        choices: {
          A: "15 mL/year",
          B: "20 mL/year",
          C: "Greater than 40 mL/year",
          D: "25 mL/year",
        },
        correctChoice: "C",
        explanationCorrect:
          "Normal age-related decline in FEV1 is approximately 20-30 mL/year. An annual decline exceeding 40 mL/year is considered accelerated and clinically significant, suggesting disease progression or ongoing harmful exposure.",
        explanationWrong:
          "A decline of 15-25 mL/year falls within the range of normal aging and would not typically be considered pathologic in most adults.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 11,
        questionText:
          "During indirect calorimetry, the respiratory quotient (RQ) is calculated as the ratio of which two values?",
        choices: {
          A: "VCO2 produced divided by VO2 consumed",
          B: "VO2 consumed divided by VCO2 produced",
          C: "Minute ventilation divided by VO2",
          D: "VCO2 divided by minute ventilation",
        },
        correctChoice: "A",
        explanationCorrect:
          "The respiratory quotient is calculated as VCO2/VO2 and reflects the substrate being metabolized. An RQ of 1.0 indicates carbohydrate metabolism, 0.7 indicates fat metabolism, and 0.8 indicates mixed or protein metabolism.",
        explanationWrong:
          "VO2/VCO2 is the inverse of the RQ. VE/VO2 represents the ventilatory equivalent for oxygen, not RQ. VCO2/VE is not a standard metabolic ratio.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 12,
        questionText:
          "A patient in the PFT lab suddenly becomes unresponsive during testing. After calling for help, what should the technologist do FIRST?",
        choices: {
          A: "Administer supplemental oxygen via nasal cannula",
          B: "Begin suctioning the airway",
          C: "Retrieve the AED from the nearest location",
          D: "Check for a pulse and begin CPR if indicated",
        },
        correctChoice: "D",
        explanationCorrect:
          "Per BLS guidelines, after ensuring help is summoned, the next step is to check for a pulse (taking no more than 10 seconds). If no pulse is detected, begin CPR immediately while another team member retrieves the AED.",
        explanationWrong:
          "Administering oxygen is not the priority for an unresponsive patient without a confirmed pulse. Suctioning is only indicated if there is visible airway obstruction. Retrieving the AED can be delegated to another person while CPR begins.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 13,
        questionText:
          "A flow-volume loop shows flattening of both the inspiratory and expiratory limbs with equal reduction in peak flows. This pattern indicates which type of airway obstruction?",
        choices: {
          A: "Variable extrathoracic obstruction",
          B: "Fixed upper airway obstruction",
          C: "Variable intrathoracic obstruction",
          D: "Small airway disease",
        },
        correctChoice: "B",
        explanationCorrect:
          "Fixed upper airway obstruction (such as tracheal stenosis from scarring or a circumferential tumor) limits flow equally during both inspiration and expiration, producing a characteristic box-shaped flow-volume loop.",
        explanationWrong:
          "Variable extrathoracic obstruction flattens only the inspiratory limb. Variable intrathoracic obstruction flattens only the expiratory limb. Small airway disease produces a scooped expiratory limb rather than flattening of both limbs.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 14,
        questionText:
          "What is the primary purpose of performing a HAST on a patient with chronic lung disease before air travel?",
        choices: {
          A: "To determine if supplemental oxygen is needed during flight",
          B: "To assess exercise capacity at altitude",
          C: "To evaluate for pulmonary hypertension",
          D: "To measure the patient's ventilatory response to hypoxia",
        },
        correctChoice: "A",
        explanationCorrect:
          "The primary purpose of HAST is to determine whether a patient with lung disease will develop significant hypoxemia at cabin altitude and whether supplemental oxygen should be prescribed for air travel.",
        explanationWrong:
          "Exercise capacity at altitude is not the primary focus of HAST. Pulmonary hypertension evaluation requires right heart catheterization or echocardiography. Hypoxic ventilatory response testing is a separate assessment.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 15,
        questionText:
          "When trending a patient's DLCO over time, which factor must be consistently documented to allow valid comparisons between measurements?",
        choices: {
          A: "Time of day the test was performed",
          B: "The patient's current weight",
          C: "Hemoglobin level and adjustment applied",
          D: "Ambient temperature only",
        },
        correctChoice: "C",
        explanationCorrect:
          "Hemoglobin significantly affects DLCO values. For valid longitudinal comparison, hemoglobin must be measured and DLCO adjusted accordingly at each visit. Without this, apparent changes in DLCO may reflect anemia or polycythemia rather than true changes in gas transfer.",
        explanationWrong:
          "Time of day has minimal impact on DLCO. Weight alone does not directly affect DLCO measurements. Ambient temperature is relevant for equipment calibration but is typically addressed during daily calibration checks.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 16,
        questionText:
          "A thermal conductivity gas analyzer works by detecting differences in which physical property between gases?",
        choices: {
          A: "Molecular weight",
          B: "Infrared absorption",
          C: "Magnetic susceptibility",
          D: "Ability to conduct heat",
        },
        correctChoice: "D",
        explanationCorrect:
          "Thermal conductivity analyzers measure the rate at which different gases conduct heat. Helium has a much higher thermal conductivity than air, making this principle ideal for measuring helium concentration in lung volume determination by helium dilution.",
        explanationWrong:
          "Molecular weight is used in mass spectrometry. Infrared absorption is the principle behind NDIR analyzers. Magnetic susceptibility is the basis for paramagnetic oxygen analyzers.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 17,
        questionText:
          "During CPET, breathing reserve is calculated as the difference between which two values?",
        choices: {
          A: "Predicted VO2max and achieved VO2max",
          B: "Maximum voluntary ventilation (MVV) and peak exercise ventilation (VEmax)",
          C: "Resting heart rate and peak exercise heart rate",
          D: "Tidal volume at rest and tidal volume at peak exercise",
        },
        correctChoice: "B",
        explanationCorrect:
          "Breathing reserve is calculated as MVV minus VEmax (or expressed as a percentage: (MVV - VEmax)/MVV x 100). A low breathing reserve (less than 15-20%) suggests a ventilatory limitation to exercise.",
        explanationWrong:
          "The difference between predicted and achieved VO2max reflects aerobic capacity, not breathing reserve. Heart rate difference represents chronotropic reserve. Tidal volume change reflects the breathing pattern response to exercise.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 18,
        questionText:
          "Which of the following is the most appropriate action when a PFT report contains results that are significantly different from prior studies without a clear clinical explanation?",
        choices: {
          A: "Discard the current results and report prior values",
          B: "Report the results without comment",
          C: "Note the discrepancy in the report and suggest correlation with clinical status or repeat testing",
          D: "Adjust the current values to match previous trends",
        },
        correctChoice: "C",
        explanationCorrect:
          "When results differ significantly from prior studies without clear explanation, the appropriate action is to note the discrepancy in the report and suggest clinical correlation or repeat testing. This alerts the clinician while maintaining data integrity.",
        explanationWrong:
          "Discarding current results eliminates potentially valid data. Reporting without comment fails to alert clinicians to the discrepancy. Adjusting values to match trends constitutes data manipulation and is never appropriate.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 19,
        questionText:
          "An RQ value of 0.70 measured during indirect calorimetry indicates that the patient is primarily metabolizing which substrate?",
        choices: {
          A: "Fat",
          B: "Carbohydrate",
          C: "Protein",
          D: "A mixture of all substrates equally",
        },
        correctChoice: "A",
        explanationCorrect:
          "An RQ of 0.70 indicates predominant fat oxidation. Fat metabolism requires more oxygen relative to CO2 produced, resulting in a lower VCO2/VO2 ratio compared to carbohydrate (RQ = 1.0) or protein (RQ ~0.8).",
        explanationWrong:
          "Carbohydrate metabolism yields an RQ of 1.0. Protein metabolism yields an RQ of approximately 0.8. Equal mixture of substrates would produce an RQ around 0.85.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam16.id,
        questionIndex: 20,
        questionText:
          "Which emergency medication should be immediately available in a PFT laboratory that performs bronchoprovocation testing?",
        choices: {
          A: "Oral corticosteroids",
          B: "Short-acting inhaled bronchodilator (e.g., albuterol)",
          C: "Intravenous epinephrine",
          D: "Inhaled corticosteroids",
        },
        correctChoice: "B",
        explanationCorrect:
          "A short-acting inhaled bronchodilator such as albuterol must be immediately available during bronchoprovocation testing to rapidly reverse bronchoconstriction if the patient develops significant airway narrowing during the challenge.",
        explanationWrong:
          "Oral corticosteroids have too slow an onset for acute bronchospasm. IV epinephrine is reserved for anaphylaxis, not routine bronchospasm. Inhaled corticosteroids do not provide rapid bronchodilation.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
    ],
  });

  console.log(`Exam 16 created: ${exam16.id} with 20 questions`);

  // ─── EXAM 17 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q3,7,12,16,20) B=5(Q1,5,10,14,18) C=5(Q4,8,11,15,19) D=5(Q2,6,9,13,17)
  const exam17 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 17",
      examIndex: 17,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam17.id,
        questionIndex: 1,
        questionText:
          "During CPET, oxygen pulse (VO2/HR) is used as a noninvasive estimate of which physiological parameter?",
        choices: {
          A: "Arteriovenous oxygen difference",
          B: "Stroke volume",
          C: "Cardiac output",
          D: "Systemic vascular resistance",
        },
        correctChoice: "B",
        explanationCorrect:
          "Oxygen pulse (VO2/HR) reflects the product of stroke volume and arteriovenous oxygen difference per the Fick equation. Since arteriovenous O2 difference is relatively constant at peak exercise, oxygen pulse serves as a surrogate for stroke volume.",
        explanationWrong:
          "Arteriovenous oxygen difference is one component of oxygen pulse but not what it primarily estimates. Cardiac output is the product of heart rate and stroke volume, not VO2/HR alone. Systemic vascular resistance is assessed through blood pressure and cardiac output.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 2,
        questionText:
          "What is the recommended minimum time interval between calibration verification of a DLCO system and the first patient test of the day?",
        choices: {
          A: "30 minutes",
          B: "5 minutes",
          C: "15 minutes",
          D: "No specific waiting period is required after successful calibration verification",
        },
        correctChoice: "D",
        explanationCorrect:
          "Once calibration verification is successfully completed and documented, patient testing may begin immediately. There is no mandatory waiting period between a successful calibration check and patient testing.",
        explanationWrong:
          "There is no 30-minute, 15-minute, or 5-minute waiting period specified in guidelines. The key requirement is that calibration meets acceptable criteria before testing begins.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 3,
        questionText:
          "A patient's spirometry shows a reproducible saw-tooth pattern on both the inspiratory and expiratory portions of the flow-volume loop. This pattern is most suggestive of which condition?",
        choices: {
          A: "Upper airway oscillation such as obstructive sleep apnea or neuromuscular tremor",
          B: "Severe restrictive lung disease",
          C: "Acute bronchospasm",
          D: "Poor patient effort",
        },
        correctChoice: "A",
        explanationCorrect:
          "A reproducible saw-tooth (oscillatory) pattern on the flow-volume loop can indicate upper airway instability, neuromuscular conditions (such as Parkinson disease), or obstructive sleep apnea. The pattern reflects periodic fluctuations in airflow.",
        explanationWrong:
          "Restrictive disease produces small but normally shaped loops. Acute bronchospasm causes a scooped expiratory limb. Poor effort typically shows variable peak flows and early termination, not a regular oscillatory pattern.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 4,
        questionText:
          "During indirect calorimetry, steady-state conditions require that VO2 and VCO2 measurements vary by no more than what percentage over a 5-minute period?",
        choices: {
          A: "15%",
          B: "5%",
          C: "10% or less",
          D: "20%",
        },
        correctChoice: "C",
        explanationCorrect:
          "Steady-state conditions for indirect calorimetry typically require that VO2 and VCO2 vary by no more than 10% (with many protocols using a 5% coefficient of variation) over a 5-minute measurement period to ensure reliable metabolic rate calculations.",
        explanationWrong:
          "A 15% or 20% variation is too large and would produce unreliable results. While 5% is an ideal target used by some protocols, the generally accepted criterion is 10% or less for adequate steady-state.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 5,
        questionText:
          "In a HAST, a patient breathes the hypoxic gas mixture for how long before the final PaO2 or SpO2 measurement is recorded?",
        choices: {
          A: "5 minutes",
          B: "20 minutes",
          C: "30 minutes",
          D: "10 minutes",
        },
        correctChoice: "B",
        explanationCorrect:
          "During HAST, patients typically breathe the hypoxic gas mixture (15.1% O2) for 20 minutes, which allows equilibration to the simulated altitude before the final arterial blood gas or SpO2 measurement is recorded.",
        explanationWrong:
          "Five minutes is insufficient for equilibration. Ten minutes may not allow complete equilibration. Thirty minutes is longer than the standard protocol duration.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 6,
        questionText:
          "A PFT laboratory is required to perform leak testing on a body plethysmograph. How frequently should this be done?",
        choices: {
          A: "Weekly",
          B: "Annually",
          C: "Monthly",
          D: "Daily",
        },
        correctChoice: "D",
        explanationCorrect:
          "Body plethysmograph leak testing should be performed daily before patient testing begins. Even small leaks can significantly affect pressure measurements and lead to inaccurate lung volume determinations.",
        explanationWrong:
          "Weekly, monthly, or annual testing is insufficient. The body box is sensitive to leaks from door seals, tubing connections, and transducer fittings, which can develop at any time.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 7,
        questionText:
          "When reporting PFT results, the ATS/ERS recommends expressing the degree of severity of a ventilatory defect using which approach?",
        choices: {
          A: "A grading system based on FEV1 percent predicted (e.g., mild, moderate, severe)",
          B: "Qualitative description only without numeric thresholds",
          C: "Comparison to the patient's personal best value",
          D: "Z-score categories from GLI reference equations",
        },
        correctChoice: "A",
        explanationCorrect:
          "The ATS/ERS interpretive strategy recommends grading severity of ventilatory defects based on FEV1 percent predicted using defined categories (mild: >70%, moderate: 60-69%, moderately severe: 50-59%, severe: 35-49%, very severe: <35%).",
        explanationWrong:
          "Qualitative descriptions without thresholds lack standardization. Personal best comparisons are useful in monitoring but not for initial severity grading. While Z-scores are increasingly used, the traditional FEV1-based grading system remains the ATS/ERS recommendation.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 8,
        questionText:
          "During CPET, which of the following findings most strongly suggests a cardiovascular limitation to exercise?",
        choices: {
          A: "Low breathing reserve at peak exercise",
          B: "Significant oxygen desaturation during exercise",
          C: "Low peak oxygen pulse with early plateau",
          D: "Elevated VE/VCO2 slope above 34",
        },
        correctChoice: "C",
        explanationCorrect:
          "A low peak oxygen pulse (VO2/HR) with an early plateau during incremental exercise suggests inadequate stroke volume augmentation, which is characteristic of cardiovascular limitation from conditions such as heart failure or ischemic heart disease.",
        explanationWrong:
          "Low breathing reserve suggests ventilatory limitation. Oxygen desaturation indicates gas exchange impairment. Elevated VE/VCO2 slope can result from both cardiac and pulmonary conditions and is not specific to cardiovascular limitation alone.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 9,
        questionText:
          "Which of the following is the most important safety consideration when performing a HAST on a patient with severe COPD?",
        choices: {
          A: "Ensuring the patient has fasted for 4 hours",
          B: "Having bronchodilators available",
          C: "Monitoring blood pressure every 2 minutes",
          D: "Having supplemental oxygen immediately available to terminate the test if SpO2 drops excessively",
        },
        correctChoice: "D",
        explanationCorrect:
          "The most critical safety measure during HAST is having supplemental oxygen immediately available. If a patient develops severe hypoxemia (SpO2 below the lab's safety threshold, typically <80-85%), the test must be terminated and oxygen administered promptly.",
        explanationWrong:
          "Fasting is not required for HAST. Bronchodilators are important for challenge testing but are not the primary safety concern for HAST. Blood pressure monitoring is prudent but less critical than the ability to rapidly reverse hypoxemia.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 10,
        questionText:
          "A patient's FEV1 has declined from 2.80 L to 2.50 L over a 2-year monitoring period. The within-session repeatability coefficient for FEV1 is 150 mL. Is this decline clinically significant?",
        choices: {
          A: "No, because the decline is within the expected age-related change",
          B: "Yes, because the 300 mL decline exceeds the expected year-to-year variability",
          C: "No, because it is within 10% of the baseline value",
          D: "It cannot be determined from the information given",
        },
        correctChoice: "B",
        explanationCorrect:
          "A 300 mL decline over 2 years (150 mL/year) far exceeds normal age-related decline (20-30 mL/year) and exceeds typical between-session variability. This change is clinically significant and warrants further investigation.",
        explanationWrong:
          "Normal age-related FEV1 decline is only 20-30 mL/year, so 300 mL in 2 years is far beyond expected. A percentage-based threshold alone is insufficient for longitudinal assessment. Sufficient information is provided to determine significance.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 11,
        questionText:
          "A NDIR analyzer used to measure CO concentration in a DLCO system should be calibrated using which type of gas?",
        choices: {
          A: "100% CO",
          B: "Room air as zero and a known CO concentration as span",
          C: "A certified gas mixture with a known CO concentration traceable to national standards",
          D: "Any available CO mixture regardless of certification",
        },
        correctChoice: "C",
        explanationCorrect:
          "NDIR analyzers for CO measurement must be calibrated using certified reference gas mixtures with known concentrations that are traceable to national or international standards, ensuring measurement accuracy and traceability.",
        explanationWrong:
          "100% CO would be dangerous and is not used for calibration. While zero and span calibration is part of the process, the span gas must be a certified mixture. Uncertified gas mixtures do not provide the accuracy needed for clinical measurements.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 12,
        questionText:
          "Which of the following best describes the role of the PFT technologist in generating an interpretive report?",
        choices: {
          A: "Providing quality grades, technical comments, and preliminary pattern interpretation while the final clinical interpretation is made by a physician",
          B: "Providing only raw data without any technical comments",
          C: "Making definitive clinical diagnoses based on PFT results",
          D: "Interpreting results only when a physician is not available",
        },
        correctChoice: "A",
        explanationCorrect:
          "The PFT technologist plays a crucial role in providing quality grades for each test, noting technical issues, and offering preliminary pattern interpretation (obstructive, restrictive, mixed). Final clinical interpretation and diagnosis remain the physician's responsibility.",
        explanationWrong:
          "Providing only raw data underutilizes the technologist's expertise. Technologists should not make definitive diagnoses. Interpretation is not contingent on physician availability; the technologist's role is always preliminary.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 13,
        questionText:
          "During CPET on a cycle ergometer, which protocol involves increasing workload by a fixed increment every minute?",
        choices: {
          A: "Modified Bruce protocol",
          B: "Naughton protocol",
          C: "Six-minute walk test",
          D: "Incremental ramp protocol",
        },
        correctChoice: "D",
        explanationCorrect:
          "The incremental ramp protocol increases work rate continuously and linearly (typically 5-25 watts per minute depending on the patient's expected capacity) to achieve exhaustion in approximately 8-12 minutes, providing optimal data for CPET analysis.",
        explanationWrong:
          "The Modified Bruce and Naughton protocols are treadmill-based, not cycle ergometer protocols. The six-minute walk test is a self-paced submaximal test, not an incremental exercise protocol.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 14,
        questionText:
          "In longitudinal PFT monitoring, which statistical method is most appropriate for determining the rate of lung function decline over time?",
        choices: {
          A: "Paired t-test comparing first and last measurements",
          B: "Linear regression analysis of all available data points",
          C: "Comparison of each value to the lower limit of normal",
          D: "Calculating the coefficient of variation",
        },
        correctChoice: "B",
        explanationCorrect:
          "Linear regression analysis using all available data points provides the most robust estimate of the rate of decline over time, accounting for measurement variability and providing slope (rate of change) and confidence intervals.",
        explanationWrong:
          "A paired t-test uses only two data points and ignores intermediate measurements. Comparing to LLN at each visit does not quantify rate of change. Coefficient of variation measures variability but does not determine the direction or rate of decline.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 15,
        questionText:
          "Which of the following emergency situations in a PFT lab requires immediate termination of testing and activation of the emergency response system?",
        choices: {
          A: "Patient reports mild dizziness after a maximal expiratory maneuver",
          B: "SpO2 drops to 92% during a 6-minute walk test",
          C: "Patient develops chest pain with ST-segment changes on the ECG monitor during CPET",
          D: "Patient coughs repeatedly during DLCO testing",
        },
        correctChoice: "C",
        explanationCorrect:
          "Chest pain accompanied by ST-segment changes on ECG during exercise testing indicates possible myocardial ischemia and requires immediate test termination and activation of the emergency response system.",
        explanationWrong:
          "Mild dizziness after a maximal maneuver is common and usually resolves with rest. An SpO2 of 92% during a 6MWT is notable but does not typically require emergency activation. Coughing during DLCO testing may require a brief rest but is not an emergency.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 16,
        questionText:
          "A patient with a tracheostomy requires pulmonary function testing. Which is the most appropriate approach?",
        choices: {
          A: "Use a tracheostomy adapter to connect the patient directly to the spirometer circuit",
          B: "Have the patient breathe through the mouth with the tracheostomy site occluded",
          C: "Testing cannot be performed on patients with tracheostomies",
          D: "Use only body plethysmography, as spirometry is not possible",
        },
        correctChoice: "A",
        explanationCorrect:
          "Patients with tracheostomies can perform spirometry using an appropriate adapter that connects the tracheostomy tube directly to the spirometer circuit. This allows measurement of airflow through the primary breathing pathway.",
        explanationWrong:
          "Having the patient breathe through the mouth with the site occluded may not provide a reliable seal. PFT can absolutely be performed on tracheostomy patients. Body plethysmography is not the only option; spirometry is feasible with proper adapters.",
        topic: "Board-style comprehensive review scenarios",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 17,
        questionText:
          "During indirect calorimetry, which of the following conditions would make the measurement unreliable?",
        choices: {
          A: "Patient has been resting quietly for 30 minutes",
          B: "Room temperature is 22 degrees Celsius",
          C: "Patient is receiving mechanical ventilation with an FiO2 above 0.60",
          D: "Patient is on a chest tube with an active air leak",
        },
        correctChoice: "D",
        explanationCorrect:
          "An active air leak (such as from a chest tube or bronchopleural fistula) allows exhaled gas to escape without being measured, making accurate VCO2 and VO2 determination impossible and rendering indirect calorimetry unreliable.",
        explanationWrong:
          "Resting quietly for 30 minutes is actually required for accurate measurement. A room temperature of 22 degrees Celsius is within the acceptable range. While high FiO2 above 0.60 can increase measurement error, it does not necessarily invalidate the test in all systems.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 18,
        questionText:
          "A paramagnetic oxygen analyzer displays an oxygen reading of 22.5% when sampling room air. What is the most appropriate action?",
        choices: {
          A: "Proceed with testing as this is within acceptable limits",
          B: "Recalibrate the analyzer using certified calibration gases",
          C: "Replace the analyzer immediately",
          D: "Adjust patient results by a correction factor",
        },
        correctChoice: "B",
        explanationCorrect:
          "Room air contains 20.93% oxygen. A reading of 22.5% represents a significant error (approximately 1.6% above actual) and requires recalibration using certified zero and span gases before any patient testing is performed.",
        explanationWrong:
          "A 1.6% error is outside acceptable tolerance and testing should not proceed. Replacing the analyzer is premature; recalibration typically resolves drift issues. Applying a correction factor is not acceptable practice for clinical gas analysis.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 19,
        questionText:
          "A patient presents for longitudinal monitoring and has gained 30 kg since their last visit 2 years ago. When comparing current PFT results to prior studies, which consideration is MOST important?",
        choices: {
          A: "Only compare absolute values, ignoring predicted values",
          B: "Results cannot be compared due to the weight change",
          C: "Recognize that significant weight gain may cause a restrictive pattern independent of lung disease progression",
          D: "Apply a weight correction factor to normalize the results",
        },
        correctChoice: "C",
        explanationCorrect:
          "Significant weight gain (especially obesity) can independently cause a restrictive ventilatory pattern by reducing chest wall and diaphragmatic compliance. This must be considered when interpreting longitudinal changes to avoid attributing changes solely to lung disease progression.",
        explanationWrong:
          "Comparing only absolute values ignores important changes in predicted values due to aging. Results can still be compared with appropriate clinical context. There is no validated weight correction factor for PFT values.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam17.id,
        questionIndex: 20,
        questionText:
          "A PFT technologist notes that a patient's spirometry results show an FVC that is significantly lower than the slow vital capacity (SVC). This finding is most commonly associated with which condition?",
        choices: {
          A: "Obstructive lung disease with air trapping",
          B: "Restrictive lung disease",
          C: "Normal physiological variation",
          D: "Poor patient effort on the FVC maneuver",
        },
        correctChoice: "A",
        explanationCorrect:
          "In obstructive lung disease, the forced expiratory maneuver can cause dynamic airway compression and air trapping, resulting in an FVC that is significantly lower than the SVC. The difference between SVC and FVC reflects the degree of air trapping.",
        explanationWrong:
          "In restrictive disease, SVC and FVC are usually similar. While small differences can be normal, a significant difference is pathologic. If effort were poor, the technologist should have obtained better maneuvers rather than accepting them.",
        topic: "Board-style comprehensive review scenarios",
      },
    ],
  });

  console.log(`Exam 17 created: ${exam17.id} with 20 questions`);

  // ─── EXAM 18 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q4,8,13,17,19) B=5(Q2,6,9,16,20) C=5(Q1,5,12,14,18) D=5(Q3,7,10,11,15)
  const exam18 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 18",
      examIndex: 18,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam18.id,
        questionIndex: 1,
        questionText:
          "During CPET, the ventilatory equivalents for oxygen (VE/VO2) and carbon dioxide (VE/VCO2) are both used to identify the anaerobic threshold. At the anaerobic threshold, which pattern is observed?",
        choices: {
          A: "Both VE/VO2 and VE/VCO2 increase simultaneously",
          B: "VE/VO2 decreases while VE/VCO2 increases",
          C: "VE/VO2 increases while VE/VCO2 remains stable or decreases",
          D: "Both VE/VO2 and VE/VCO2 decrease",
        },
        correctChoice: "C",
        explanationCorrect:
          "At the anaerobic threshold, VE/VO2 begins to increase (more ventilation per unit of oxygen consumed) while VE/VCO2 remains stable or may even decrease slightly. The point where VE/VCO2 also begins to rise marks the respiratory compensation point.",
        explanationWrong:
          "Simultaneous increases in both ventilatory equivalents occurs at the respiratory compensation point, not the anaerobic threshold. VE/VO2 does not decrease at the anaerobic threshold. Both decreasing would indicate improved efficiency, not anaerobic threshold.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 2,
        questionText:
          "Which of the following maintenance tasks should be performed annually on a DLCO testing system?",
        choices: {
          A: "Replacing the demand valve",
          B: "Manufacturer-recommended preventive maintenance including sensor calibration verification with certified reference standards",
          C: "Replacing all tubing and connectors",
          D: "Replacing the pneumotachograph screen",
        },
        correctChoice: "B",
        explanationCorrect:
          "Annual preventive maintenance per the manufacturer's recommendations includes comprehensive calibration verification with certified reference standards, assessment of all sensors, and documentation of system performance, ensuring ongoing accuracy.",
        explanationWrong:
          "Demand valves, tubing, and pneumotachograph screens are replaced as needed based on condition, not on a fixed annual schedule. Annual maintenance encompasses a broader system-wide assessment.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 3,
        questionText:
          "A flow-volume loop demonstrates a plateau on the expiratory limb with a normal inspiratory limb. This pattern is most consistent with which condition?",
        choices: {
          A: "Variable extrathoracic obstruction",
          B: "Fixed intrathoracic obstruction",
          C: "Bilateral vocal cord paralysis",
          D: "Variable intrathoracic obstruction",
        },
        correctChoice: "D",
        explanationCorrect:
          "Variable intrathoracic obstruction (such as a tracheomalacia or intrathoracic tracheal tumor) causes dynamic compression of the intrathoracic airway during expiration, flattening the expiratory limb while the inspiratory limb remains normal.",
        explanationWrong:
          "Variable extrathoracic obstruction flattens the inspiratory limb. Fixed obstruction flattens both limbs equally. Bilateral vocal cord paralysis is an extrathoracic cause and would affect the inspiratory limb.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 4,
        questionText:
          "In indirect calorimetry, resting energy expenditure (REE) is most commonly calculated using which equation?",
        choices: {
          A: "The modified Weir equation",
          B: "The Harris-Benedict equation",
          C: "The Fick equation",
          D: "The Bohr equation",
        },
        correctChoice: "A",
        explanationCorrect:
          "The modified Weir equation (REE = [3.941 x VO2 + 1.106 x VCO2] x 1440) uses measured VO2 and VCO2 to calculate resting energy expenditure. This is the standard equation used in indirect calorimetry systems.",
        explanationWrong:
          "The Harris-Benedict equation predicts REE from height, weight, age, and sex but does not use measured gas exchange. The Fick equation relates cardiac output to oxygen consumption. The Bohr equation calculates dead space ventilation.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 5,
        questionText:
          "A patient with a baseline room air PaO2 of 72 mmHg is referred for HAST. During the test breathing 15.1% O2, the PaO2 drops to 48 mmHg. Based on BTS guidelines, what is the recommended action?",
        choices: {
          A: "Clear the patient for air travel without supplemental oxygen",
          B: "Repeat the test in 6 months",
          C: "Prescribe supplemental oxygen for air travel",
          D: "Refer for further cardiac evaluation before travel",
        },
        correctChoice: "C",
        explanationCorrect:
          "A PaO2 below 50 mmHg during HAST indicates that the patient will likely develop significant hypoxemia at altitude. BTS guidelines recommend prescribing supplemental oxygen at 2 L/min via nasal cannula during air travel.",
        explanationWrong:
          "Clearing for travel without oxygen would be unsafe given the severe desaturation. Repeating in 6 months delays addressing an immediate safety concern. Cardiac evaluation is not indicated solely based on HAST results.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 6,
        questionText:
          "A PFT report should include which of the following elements according to ATS/ERS recommendations?",
        choices: {
          A: "Only the best values from each test",
          B: "Patient demographics, test quality grades, measured values, predicted values, percent predicted and/or Z-scores, and an interpretive summary",
          C: "Only values that fall outside the normal range",
          D: "Numeric data without any quality assessment",
        },
        correctChoice: "B",
        explanationCorrect:
          "A comprehensive PFT report should include patient demographics, quality grades for each test, all measured values with corresponding predicted values and LLN or Z-scores, graphical displays, and a standardized interpretive summary.",
        explanationWrong:
          "Reporting only best values omits important quality information. Reporting only abnormal values prevents assessment of overall function. Data without quality assessment does not allow clinicians to judge result reliability.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 7,
        questionText:
          "During CPET, a patient's heart rate fails to increase appropriately despite increasing workload. This finding is termed chronotropic incompetence. Which of the following is the most common cause?",
        choices: {
          A: "Deconditioning",
          B: "Anemia",
          C: "Pulmonary hypertension",
          D: "Beta-blocker medication",
        },
        correctChoice: "D",
        explanationCorrect:
          "Beta-blocker medications are the most common cause of chronotropic incompetence during CPET. These medications block beta-adrenergic receptors and blunt the heart rate response to exercise, leading to an attenuated rise in heart rate with increasing workload.",
        explanationWrong:
          "Deconditioning causes a higher resting heart rate and exaggerated initial response but does not typically cause chronotropic incompetence. Anemia leads to compensatory tachycardia. Pulmonary hypertension may limit exercise but does not directly blunt heart rate response.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 8,
        questionText:
          "Which of the following is the most appropriate response time requirement for a gas analyzer used in breath-by-breath CPET systems?",
        choices: {
          A: "Response time of 100 milliseconds or less (T10-90%)",
          B: "Response time of 500 milliseconds or less",
          C: "Response time of 1 second or less",
          D: "Response time is not critical in CPET systems",
        },
        correctChoice: "A",
        explanationCorrect:
          "For breath-by-breath analysis during CPET, gas analyzers must have a T10-90% response time of 100 milliseconds or less to accurately capture the rapid changes in gas concentrations within each breath cycle.",
        explanationWrong:
          "A 500 ms or 1-second response time is too slow for accurate breath-by-breath analysis and would cause significant phase lag. Response time is critical in CPET systems for accurate metabolic calculations.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 9,
        questionText:
          "A PFT lab experiences a power outage during patient testing. Which of the following is the most important immediate action?",
        choices: {
          A: "Attempt to restart the PFT equipment immediately",
          B: "Ensure patient safety by removing the patient from the body box if applicable and providing reassurance",
          C: "Document the test results obtained before the outage",
          D: "Contact the equipment manufacturer",
        },
        correctChoice: "B",
        explanationCorrect:
          "Patient safety is always the first priority. If a patient is inside a body plethysmograph, the door should be opened immediately as the seal may trap the patient. The patient should be removed from any testing equipment and reassured.",
        explanationWrong:
          "Restarting equipment should not precede patient safety. Documentation can wait until the patient is safe. Contacting the manufacturer is appropriate later but is not the immediate priority.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 10,
        questionText:
          "When using GLI-2012 reference equations for longitudinal monitoring, which metric provides the most clinically useful information for tracking change over time?",
        choices: {
          A: "Percent predicted values",
          B: "Absolute measured values in liters",
          C: "Percent change from the patient's own baseline",
          D: "Z-score change from baseline",
        },
        correctChoice: "D",
        explanationCorrect:
          "Z-score changes provide the most standardized and clinically meaningful assessment for longitudinal monitoring because they account for age, sex, height, and ethnicity-related changes in predicted values over time, unlike raw values or simple percent predicted.",
        explanationWrong:
          "Percent predicted changes with age, potentially masking or exaggerating true decline. Absolute values do not account for normal aging. Percent change from baseline does not account for expected age-related changes in lung function.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 11,
        questionText:
          "During a HAST, a patient develops a severe headache and confusion after 10 minutes of breathing the hypoxic gas mixture. What is the appropriate action?",
        choices: {
          A: "Continue the test to obtain a complete 20-minute reading",
          B: "Reduce the FiO2 further to complete the test faster",
          C: "Pause the test and encourage the patient to relax",
          D: "Immediately terminate the test and administer supplemental oxygen",
        },
        correctChoice: "D",
        explanationCorrect:
          "Severe headache and confusion are symptoms of significant cerebral hypoxia and represent absolute indications for immediate test termination. Supplemental oxygen should be administered immediately and the patient monitored until symptoms resolve.",
        explanationWrong:
          "Continuing the test risks worsening cerebral hypoxia. Reducing FiO2 further would increase hypoxemia. Simply pausing without providing oxygen does not address the hypoxemia causing the symptoms.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 12,
        questionText:
          "Which of the following flow-volume loop findings in a post-thyroidectomy patient warrants urgent communication to the referring physician?",
        choices: {
          A: "Mildly reduced FVC consistent with mild restriction",
          B: "Normal flow-volume loop with reduced FEV1/FVC ratio",
          C: "New variable extrathoracic obstruction pattern suggesting vocal cord injury",
          D: "Scooped expiratory limb consistent with obstructive disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "A new variable extrathoracic obstruction pattern (flattened inspiratory limb) in a post-thyroidectomy patient suggests possible recurrent laryngeal nerve injury with vocal cord paralysis, a known surgical complication requiring urgent clinical attention.",
        explanationWrong:
          "Mild restriction and scooped expiratory patterns are not specific to thyroidectomy complications. A reduced FEV1/FVC ratio alone does not suggest vocal cord injury.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 13,
        questionText:
          "In indirect calorimetry, an RQ greater than 1.0 indicates which metabolic condition?",
        choices: {
          A: "Lipogenesis (net fat synthesis from carbohydrate overfeeding)",
          B: "Starvation with predominant fat oxidation",
          C: "Steady-state mixed substrate metabolism",
          D: "Measurement error that invalidates the test",
        },
        correctChoice: "A",
        explanationCorrect:
          "An RQ above 1.0 indicates lipogenesis, where excess carbohydrate calories are being converted to fat. This process generates more CO2 than would be expected from carbohydrate oxidation alone, raising the VCO2/VO2 ratio above 1.0.",
        explanationWrong:
          "Starvation would yield a low RQ near 0.70. Mixed metabolism produces an RQ near 0.85. While an RQ above 1.0 can occasionally indicate hyperventilation artifact, it is a recognized physiological finding during overfeeding.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 14,
        questionText:
          "A PFT laboratory is transitioning from NHANES III to GLI-2012 reference equations. Which is the most important consideration during this transition?",
        choices: {
          A: "All historical patient data must be recalculated immediately",
          B: "The transition can be made without notifying referring physicians",
          C: "Longitudinal comparisons should note which reference equations were used for each measurement",
          D: "Only new patients should use GLI-2012; existing patients should keep NHANES III",
        },
        correctChoice: "C",
        explanationCorrect:
          "When transitioning reference equations, it is critical to document which reference set was used for each measurement. This allows valid longitudinal comparisons and prevents misattributing changes in percent predicted or Z-scores to actual changes in lung function.",
        explanationWrong:
          "Recalculating all historical data may be desirable but is not always feasible or required. Referring physicians should be informed of the transition. Maintaining different reference equations for different patients creates inconsistency.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 15,
        questionText:
          "A pneumotachograph measures airflow by detecting which physical principle?",
        choices: {
          A: "Changes in ultrasonic signal transit time",
          B: "Pressure changes across a heated wire",
          C: "Rotation of a turbine vane",
          D: "Pressure drop across a known resistance element",
        },
        correctChoice: "D",
        explanationCorrect:
          "A pneumotachograph (such as a Fleisch or Lilly type) measures airflow by detecting the pressure differential across a known resistance element. This pressure drop is proportional to flow rate according to Poiseuille's law under laminar flow conditions.",
        explanationWrong:
          "Ultrasonic transit time is used by ultrasonic flowmeters. Heated wire detection is the principle of hot-wire anemometers. Turbine vane rotation is used by turbine flowmeters. Each represents a different flow measurement technology.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 16,
        questionText:
          "During CPET, the dead space to tidal volume ratio (VD/VT) is elevated at rest and fails to decrease normally with exercise. This finding is most consistent with which condition?",
        choices: {
          A: "Obesity",
          B: "Pulmonary vascular disease",
          C: "Deconditioning",
          D: "Anemia",
        },
        correctChoice: "B",
        explanationCorrect:
          "In pulmonary vascular disease, areas of ventilation-perfusion mismatch and increased dead space prevent the normal exercise-related decrease in VD/VT. This is a hallmark finding in conditions such as pulmonary hypertension and chronic thromboembolic disease.",
        explanationWrong:
          "Obesity may restrict tidal volume but does not typically elevate VD/VT. Deconditioning reduces peak VO2 but does not affect VD/VT response. Anemia reduces oxygen-carrying capacity without affecting dead space physiology.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 17,
        questionText:
          "Which of the following is the correct procedure for leak testing a body plethysmograph?",
        choices: {
          A: "Close the door with the box empty, apply a small positive pressure, and verify that pressure remains stable for at least 30 seconds",
          B: "Have a patient sit inside and perform tidal breathing while monitoring box pressure",
          C: "Connect a 3-liter syringe to the breathing port and inject air rapidly",
          D: "Seal the mouthpiece and attempt to exhale forcefully",
        },
        correctChoice: "A",
        explanationCorrect:
          "Body box leak testing is performed with the box empty and door closed. A small known pressure is applied and monitored. If the pressure decays more than the acceptable threshold over 30 seconds or longer, a leak is present and must be identified and corrected.",
        explanationWrong:
          "Testing with a patient inside introduces additional variables. A 3-liter syringe injection tests volume calibration, not leaks. Forceful exhalation against a sealed mouthpiece tests mouth pressure transducers, not box integrity.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 18,
        questionText:
          "When evaluating a patient's response to pulmonary rehabilitation using longitudinal PFT data, which measure is LEAST likely to show significant improvement?",
        choices: {
          A: "6-minute walk distance",
          B: "Dyspnea scores",
          C: "FEV1",
          D: "Quality of life questionnaire scores",
        },
        correctChoice: "C",
        explanationCorrect:
          "FEV1 is generally least responsive to pulmonary rehabilitation in patients with established COPD. Rehabilitation primarily improves exercise capacity, dyspnea, and quality of life rather than reversing the underlying airflow obstruction reflected by FEV1.",
        explanationWrong:
          "6-minute walk distance typically improves significantly with rehabilitation. Dyspnea scores consistently show improvement. Quality of life measures are among the most responsive outcomes to pulmonary rehabilitation.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 19,
        questionText:
          "Which of the following patients should NOT undergo HAST?",
        choices: {
          A: "A patient with an unstable pneumothorax",
          B: "A patient with stable COPD on 2 L/min home oxygen",
          C: "A patient with a history of asthma who is well-controlled",
          D: "A patient with a restrictive lung defect and FVC of 60% predicted",
        },
        correctChoice: "A",
        explanationCorrect:
          "An unstable or untreated pneumothorax is an absolute contraindication to HAST because the reduced ambient pressure at simulated altitude can cause expansion of trapped gas, potentially worsening the pneumothorax.",
        explanationWrong:
          "Patients on home oxygen, with stable asthma, or with restrictive defects can safely undergo HAST with appropriate monitoring. HAST is specifically designed to evaluate patients with respiratory conditions for fitness to fly.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam18.id,
        questionIndex: 20,
        questionText:
          "A 65-year-old patient presents with progressive dyspnea. Spirometry shows FEV1 65% predicted, FVC 90% predicted, and FEV1/FVC 55%. DLCO is 45% predicted. Lung volumes show TLC 110% predicted and RV 155% predicted. Which interpretation is most consistent?",
        choices: {
          A: "Restrictive ventilatory defect with impaired gas exchange",
          B: "Obstructive ventilatory defect with hyperinflation and significantly impaired gas exchange suggesting emphysema",
          C: "Mixed obstructive and restrictive defect",
          D: "Normal spirometry with isolated gas exchange impairment",
        },
        correctChoice: "B",
        explanationCorrect:
          "The low FEV1/FVC ratio confirms obstruction, elevated TLC and RV indicate hyperinflation and air trapping, and the severely reduced DLCO suggests loss of alveolar-capillary surface area. This constellation is classic for emphysema.",
        explanationWrong:
          "The normal TLC rules out restriction. There is no mixed defect since TLC is not reduced. Spirometry clearly shows obstruction with a reduced FEV1/FVC ratio, not normal spirometry.",
        topic: "Board-style comprehensive review scenarios",
      },
    ],
  });

  console.log(`Exam 18 created: ${exam18.id} with 20 questions`);

  // ─── EXAM 19 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q1,7,10,16,18) B=5(Q3,5,12,15,19) C=5(Q4,9,11,13,20) D=5(Q2,6,8,14,17)
  const exam19 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 19",
      examIndex: 19,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam19.id,
        questionIndex: 1,
        questionText:
          "During CPET, the oxygen uptake efficiency slope (OUES) is calculated from the relationship between VO2 and which other variable?",
        choices: {
          A: "Log10 of minute ventilation (VE)",
          B: "Heart rate",
          C: "Workload in watts",
          D: "Respiratory rate",
        },
        correctChoice: "A",
        explanationCorrect:
          "The OUES is derived from the linear relationship between VO2 and log10(VE) during incremental exercise. It provides a submaximal estimate of cardiopulmonary fitness that does not require the patient to reach maximal exercise.",
        explanationWrong:
          "Heart rate relates to oxygen pulse. Workload correlates with VO2 but is not used to calculate OUES. Respiratory rate alone does not define OUES.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 2,
        questionText:
          "Which of the following describes the proper storage requirements for calibration gas cylinders in a PFT laboratory?",
        choices: {
          A: "Stored horizontally to prevent gas stratification",
          B: "Any orientation is acceptable as long as the room is ventilated",
          C: "Stored in a refrigerated environment below 10 degrees Celsius",
          D: "Stored upright, secured to a wall or rack, away from heat sources, with expiration dates monitored",
        },
        correctChoice: "D",
        explanationCorrect:
          "Calibration gas cylinders must be stored upright and secured to prevent tipping, kept away from heat sources that could affect pressure and accuracy, and their expiration dates must be monitored to ensure gas concentration accuracy.",
        explanationWrong:
          "Horizontal storage is not recommended as it can affect regulator function. While ventilation is important, any orientation is not acceptable. Refrigeration is not required and extreme cold can affect regulator performance.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 3,
        questionText:
          "A flow-volume loop shows a sudden truncation of the expiratory flow at a specific volume with an abrupt cessation of flow. This pattern most likely represents which artifact?",
        choices: {
          A: "Cough during expiration",
          B: "Glottic closure during the forced expiratory maneuver",
          C: "Equipment malfunction in the flow sensor",
          D: "Submaximal effort with early termination",
        },
        correctChoice: "B",
        explanationCorrect:
          "Glottic closure during forced expiration produces an abrupt and complete cessation of flow at a specific lung volume, creating a sudden truncation of the expiratory limb. This is a recognized artifact that requires coaching to overcome.",
        explanationWrong:
          "Cough produces transient spikes in flow rather than a complete truncation. Equipment malfunction would likely affect both limbs. Submaximal effort shows a gradual tapering rather than an abrupt cessation.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 4,
        questionText:
          "During indirect calorimetry, which of the following patient conditions would result in a falsely elevated RQ?",
        choices: {
          A: "Patient is in a fasted state",
          B: "Patient has been lying quietly for 45 minutes",
          C: "Patient is hyperventilating during the measurement",
          D: "Patient has a fever of 38.5 degrees Celsius",
        },
        correctChoice: "C",
        explanationCorrect:
          "Hyperventilation causes excessive CO2 elimination beyond metabolic production, artificially increasing measured VCO2 relative to VO2 and producing a falsely elevated RQ. This is why steady-state breathing is essential for accurate measurements.",
        explanationWrong:
          "Fasting would produce a low RQ reflecting fat oxidation. Lying quietly is a requirement for testing, not a source of error. Fever increases metabolic rate but does not falsely elevate RQ.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 5,
        questionText:
          "A HAST result shows a PaO2 of 55 mmHg after 20 minutes of breathing 15.1% O2. According to BTS guidelines, this patient falls into which category?",
        choices: {
          A: "No supplemental oxygen needed",
          B: "Borderline; requires supplemental oxygen titration during the HAST to determine the appropriate flow rate",
          C: "Absolutely contraindicated for air travel",
          D: "Requires further testing with exercise at simulated altitude",
        },
        correctChoice: "B",
        explanationCorrect:
          "A PaO2 of 50-55 mmHg during HAST is considered borderline. BTS guidelines recommend supplemental oxygen titration during the test to determine the flow rate needed to maintain adequate oxygenation during flight.",
        explanationWrong:
          "A PaO2 of 55 mmHg is below the threshold for safe travel without supplemental oxygen. Air travel is not absolutely contraindicated; supplemental oxygen can make it safe. Exercise testing at altitude is not the standard next step.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 6,
        questionText:
          "Which of the following is a recommended practice for communicating critical PFT findings to the referring physician?",
        choices: {
          A: "Send the report through regular mail channels",
          B: "Wait for the physician to request the results",
          C: "Include a note in the report but do not contact the physician directly",
          D: "Contact the physician directly by phone for results that indicate a potentially life-threatening condition",
        },
        correctChoice: "D",
        explanationCorrect:
          "Critical findings such as severely reduced lung function, new significant obstruction suggesting upper airway compromise, or severely impaired gas exchange should be communicated directly to the referring physician by phone to ensure timely clinical action.",
        explanationWrong:
          "Regular mail is too slow for critical findings. Waiting for the physician to request results delays potentially urgent care. A report note alone may not be reviewed in time for critical conditions.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 7,
        questionText:
          "During CPET, which finding is most indicative of exercise-induced pulmonary arterial desaturation?",
        choices: {
          A: "Widening of the alveolar-arterial oxygen gradient (P(A-a)O2) during exercise",
          B: "Normal breathing reserve with low peak VO2",
          C: "Elevated oxygen pulse at peak exercise",
          D: "Low VE/VCO2 slope throughout exercise",
        },
        correctChoice: "A",
        explanationCorrect:
          "Widening of the P(A-a)O2 gradient during exercise indicates impaired gas exchange at the pulmonary level, consistent with exercise-induced desaturation from diffusion limitation, ventilation-perfusion mismatch, or right-to-left shunting.",
        explanationWrong:
          "Normal breathing reserve with low VO2 suggests cardiovascular limitation. Elevated oxygen pulse indicates good stroke volume. A low VE/VCO2 slope indicates efficient ventilation, not desaturation.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 8,
        questionText:
          "A newly installed mass flow sensor in a spirometer requires which type of verification before clinical use?",
        choices: {
          A: "Biologic control testing only",
          B: "Visual inspection only",
          C: "Comparison to the old sensor's readings with a test subject",
          D: "Volume and flow accuracy verification using a calibrated syringe at multiple flow rates",
        },
        correctChoice: "D",
        explanationCorrect:
          "After installing a new flow sensor, volume and flow accuracy must be verified using a calibrated 3-liter syringe at multiple flow rates (low, medium, and high) to ensure the sensor performs accurately across the full range of clinical measurements.",
        explanationWrong:
          "Biologic control alone does not verify accuracy against a known standard. Visual inspection cannot confirm measurement accuracy. Comparing to the old sensor does not establish accuracy if the old sensor was also potentially inaccurate.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 9,
        questionText:
          "A PFT technologist notices that the DLCO values from the morning session are consistently 15% lower than values obtained in the afternoon on the same biologic control subject. Which of the following is the most likely explanation?",
        choices: {
          A: "Normal diurnal variation in DLCO",
          B: "The biologic control subject is not suitable for testing",
          C: "Environmental factor affecting the gas analyzers, such as temperature drift in the lab",
          D: "The test gas cylinder needs to be replaced",
        },
        correctChoice: "C",
        explanationCorrect:
          "A consistent systematic difference between morning and afternoon sessions suggests an environmental factor, such as temperature drift affecting gas analyzer performance or pneumotachograph readings. Morning labs may be cooler, affecting gas viscosity and analyzer calibration.",
        explanationWrong:
          "Normal diurnal DLCO variation is typically less than 5%. A consistent 15% difference is too large for normal biologic variation. While the gas cylinder should be checked, a consistent time-of-day pattern points to an environmental factor rather than cylinder depletion.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 10,
        questionText:
          "When a PFT laboratory adopts new reference equations, the most appropriate method for ensuring continuity of longitudinal monitoring is to:",
        choices: {
          A: "Recalculate prior results using the new reference equations and report both sets of values during a transition period",
          B: "Continue using the old equations for all existing patients indefinitely",
          C: "Switch immediately without referencing prior results",
          D: "Use the equations that produce the most favorable results for each patient",
        },
        correctChoice: "A",
        explanationCorrect:
          "The most appropriate transition strategy is to recalculate prior results using the new reference equations when possible and to report both sets of values during a defined transition period, allowing clinicians to understand the impact of the equation change.",
        explanationWrong:
          "Maintaining old equations indefinitely prevents standardization. Switching without referencing prior results loses longitudinal context. Selecting equations based on favorable outcomes is scientifically inappropriate and potentially misleading.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 11,
        questionText:
          "Which of the following safety measures is required before performing CPET on a patient with known coronary artery disease?",
        choices: {
          A: "Administering a prophylactic bronchodilator",
          B: "Placing a central venous catheter",
          C: "Physician presence during the test with crash cart immediately available and continuous 12-lead ECG monitoring",
          D: "Pre-test echocardiogram within 24 hours",
        },
        correctChoice: "C",
        explanationCorrect:
          "Patients with known coronary artery disease require physician supervision during CPET, continuous 12-lead ECG monitoring for ischemia detection, and immediate availability of emergency equipment including a crash cart with defibrillator.",
        explanationWrong:
          "Prophylactic bronchodilators are for bronchoprovocation testing, not routine CPET. Central venous access is not routinely required. While recent cardiac evaluation is prudent, a 24-hour echocardiogram requirement is not standard.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 12,
        questionText:
          "A patient with vocal cord dysfunction (VCD) would typically demonstrate which finding during spirometry?",
        choices: {
          A: "Reduced FEV1/FVC ratio with scooped expiratory limb",
          B: "Flattened inspiratory limb on the flow-volume loop that normalizes with panting maneuver",
          C: "Elevated FEF25-75% with normal FEV1",
          D: "Uniformly reduced flows on both limbs of the flow-volume loop",
        },
        correctChoice: "B",
        explanationCorrect:
          "VCD typically produces variable extrathoracic obstruction with a flattened inspiratory limb. The paradoxical vocal cord adduction during inspiration improves with distraction maneuvers such as panting, which can normalize the inspiratory limb.",
        explanationWrong:
          "A scooped expiratory limb indicates intrathoracic obstruction like COPD. Elevated FEF25-75% is not associated with VCD. Uniform reduction in both limbs suggests fixed obstruction, not VCD.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 13,
        questionText:
          "In indirect calorimetry, which of the following factors should be controlled to ensure measurement accuracy?",
        choices: {
          A: "Time of day only",
          B: "Room lighting only",
          C: "Patient fasting state, resting period, room temperature, and absence of stimulants",
          D: "Barometric pressure only",
        },
        correctChoice: "C",
        explanationCorrect:
          "Accurate indirect calorimetry requires controlling multiple factors: the patient should be fasted (typically 4-12 hours), should have rested for at least 30 minutes, the room should be thermoneutral, and stimulants (caffeine, nicotine) should be avoided.",
        explanationWrong:
          "Time of day alone is insufficient. Room lighting has minimal effect on metabolic rate. Barometric pressure affects gas volume calculations but is typically auto-corrected by modern systems.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 14,
        questionText:
          "Which of the following is the most appropriate action when a PFT system's volume calibration check fails using a 3-liter syringe?",
        choices: {
          A: "Proceed with testing and apply a correction factor to all results",
          B: "Repeat the calibration check three times and use the average",
          C: "Switch to a backup spirometer and retest the syringe",
          D: "Troubleshoot the system (check for leaks, clean the sensor, verify ambient conditions) and repeat the calibration until it passes before testing patients",
        },
        correctChoice: "D",
        explanationCorrect:
          "When calibration fails, patient testing must not proceed until the issue is resolved. Systematic troubleshooting should include checking for leaks, cleaning or replacing the flow sensor, verifying ambient conditions (BTPS correction), and repeating calibration until it passes.",
        explanationWrong:
          "Applying correction factors is not an acceptable substitute for proper calibration. Averaging failed calibrations does not address the underlying problem. Switching to a backup spirometer is reasonable only if troubleshooting fails, but the syringe accuracy should be verified first.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 15,
        questionText:
          "A 72-year-old patient completes CPET with a peak VO2 of 14 mL/kg/min and an anaerobic threshold at 9 mL/kg/min (40% of predicted peak VO2). The VE/VCO2 slope is 38 and the oxygen pulse plateaus early. These findings are most consistent with which diagnosis?",
        choices: {
          A: "Normal exercise response for age",
          B: "Heart failure with reduced exercise capacity",
          C: "Primary pulmonary limitation",
          D: "Peripheral arterial disease",
        },
        correctChoice: "B",
        explanationCorrect:
          "The combination of reduced peak VO2, low anaerobic threshold (below 40% predicted indicates cardiovascular limitation), early oxygen pulse plateau (suggesting impaired stroke volume), and elevated VE/VCO2 slope is the classic CPET pattern for heart failure.",
        explanationWrong:
          "Normal exercise response would show higher peak VO2 and AT. Primary pulmonary limitation would show reduced breathing reserve. Peripheral arterial disease typically presents with leg symptoms and normal central hemodynamic responses.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 16,
        questionText:
          "When generating a PFT report for a patient tested with supplemental oxygen, which of the following is the MOST critical piece of information to include?",
        choices: {
          A: "The exact FiO2 or oxygen flow rate used during testing",
          B: "The brand of oxygen delivery device",
          C: "The cost of the supplemental oxygen",
          D: "The oxygen cylinder pressure before testing",
        },
        correctChoice: "A",
        explanationCorrect:
          "The exact FiO2 or oxygen flow rate during testing must be documented because it directly affects DLCO results and arterial blood gas interpretation. Without this information, the clinical value of the results is severely compromised.",
        explanationWrong:
          "The brand of delivery device does not affect result interpretation. Cost is not a clinical consideration for the report. Cylinder pressure is an operational detail, not a clinical reporting requirement.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 17,
        questionText:
          "An electrochemical oxygen sensor in a metabolic cart shows progressively slower response times over several weeks. This degradation is most likely caused by which factor?",
        choices: {
          A: "Software calibration drift",
          B: "Changes in barometric pressure",
          C: "Contamination of the infrared window",
          D: "Electrolyte depletion in the sensor cell",
        },
        correctChoice: "D",
        explanationCorrect:
          "Electrochemical oxygen sensors contain an electrolyte solution and a consumable anode. Over time, the electrolyte becomes depleted and the anode is consumed, leading to progressively slower response times and eventual sensor failure requiring replacement.",
        explanationWrong:
          "Software calibration drift would not cause progressively slower response times. Barometric pressure changes are transient and do not cause progressive degradation. Infrared window contamination affects NDIR analyzers, not electrochemical sensors.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 18,
        questionText:
          "Which of the following is an absolute contraindication for performing spirometry?",
        choices: {
          A: "Recent pneumothorax (within the past 2 weeks without confirmed resolution)",
          B: "Mild upper respiratory infection",
          C: "Patient age over 80 years",
          D: "Use of a short-acting bronchodilator within 4 hours",
        },
        correctChoice: "A",
        explanationCorrect:
          "An unresolved pneumothorax is an absolute contraindication for spirometry because the forced maneuver increases intrathoracic pressure and could worsen or reopen the pneumothorax, potentially causing a tension pneumothorax.",
        explanationWrong:
          "A mild URI may affect results but is not an absolute contraindication. Advanced age alone is not a contraindication. Recent bronchodilator use affects bronchodilator response interpretation but does not contraindicate the test.",
        topic: "Board-style comprehensive review scenarios",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 19,
        questionText:
          "A patient's DLCO is 60% predicted. The KCO (DLCO/VA) is 110% predicted. The most likely explanation is:",
        choices: {
          A: "Emphysema causing loss of alveolar-capillary units",
          B: "Reduced accessible lung volume (such as from pneumonectomy) with normal gas transfer per unit of ventilated lung",
          C: "Pulmonary fibrosis with impaired diffusion",
          D: "Pulmonary vascular disease",
        },
        correctChoice: "B",
        explanationCorrect:
          "A reduced DLCO with elevated or normal KCO indicates that gas transfer per unit of ventilated lung is normal or increased, but less lung is being ventilated. This pattern is seen after pneumonectomy, lobectomy, or with incomplete lung expansion.",
        explanationWrong:
          "Emphysema would reduce both DLCO and KCO due to destruction of alveolar-capillary units. Pulmonary fibrosis reduces DLCO with normal or slightly reduced KCO. Pulmonary vascular disease reduces both DLCO and KCO.",
        topic: "Board-style comprehensive review scenarios",
      },
      {
        miniExamId: exam19.id,
        questionIndex: 20,
        questionText:
          "During a fire drill in a PFT laboratory, the MOST important initial action for the technologist is to:",
        choices: {
          A: "Save all current test data to the computer",
          B: "Turn off all PFT equipment",
          C: "Ensure patient safety by disconnecting the patient from equipment and assisting with evacuation",
          D: "Close the laboratory door to contain potential fire spread",
        },
        correctChoice: "C",
        explanationCorrect:
          "Patient safety is always the highest priority. The technologist should immediately disconnect the patient from any testing equipment (especially if in a body box), assist with evacuation along the designated route, and ensure no patients are left behind.",
        explanationWrong:
          "Saving data is secondary to patient safety. While turning off equipment is prudent, patient evacuation takes priority. Closing doors is part of fire safety but comes after ensuring all people are evacuated from the immediate area.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
    ],
  });

  console.log(`Exam 19 created: ${exam19.id} with 20 questions`);

  // ─── EXAM 20 ───────────────────────────────────────────────
  // Answer distribution: A=5(Q2,5,11,15,18) B=5(Q4,7,13,16,19) C=5(Q1,6,10,14,17) D=5(Q3,8,9,12,20)
  const exam20 = await prisma.miniExam.create({
    data: {
      divisionId,
      title: "CPFT Mini Exam 20",
      examIndex: 20,
      isFree: false,
    },
  });

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam20.id,
        questionIndex: 1,
        questionText:
          "During CPET, the respiratory exchange ratio (RER) exceeding 1.10 at peak exercise is used as evidence of which of the following?",
        choices: {
          A: "Ventilatory limitation",
          B: "Submaximal effort",
          C: "Adequate patient effort indicating near-maximal or maximal exercise",
          D: "Cardiovascular limitation",
        },
        correctChoice: "C",
        explanationCorrect:
          "An RER above 1.10 at peak exercise indicates that anaerobic metabolism is contributing significantly to energy production, with excess CO2 generated from bicarbonate buffering of lactic acid. This is a widely accepted criterion for maximal or near-maximal effort.",
        explanationWrong:
          "Ventilatory limitation is assessed by breathing reserve. An RER above 1.10 actually confirms adequate effort, not submaximal performance. Cardiovascular limitation is assessed through heart rate reserve and oxygen pulse.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 2,
        questionText:
          "Which of the following is the correct BTPS correction factor applied to spirometry volumes?",
        choices: {
          A: "Corrects measured volumes from ambient temperature and pressure to body temperature (37 degrees C), ambient pressure, and saturated with water vapor",
          B: "Corrects volumes from body conditions to standard temperature and pressure, dry (STPD)",
          C: "Corrects volumes from ambient conditions to standard conditions of 0 degrees C and 760 mmHg",
          D: "No correction is necessary for modern electronic spirometers",
        },
        correctChoice: "A",
        explanationCorrect:
          "BTPS correction adjusts measured volumes to body temperature (37 degrees C), ambient barometric pressure, and fully saturated with water vapor, representing conditions in the lungs. This standardization allows comparison across different environmental conditions.",
        explanationWrong:
          "STPD correction is used for gas exchange measurements, not spirometry volumes. Standard conditions of 0 degrees C and 760 mmHg are STPD conditions. Modern spirometers still require BTPS correction; it is simply applied automatically by software.",
        topic: "Board-style comprehensive review scenarios",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 3,
        questionText:
          "A galvanic fuel cell oxygen analyzer requires replacement when which of the following is observed?",
        choices: {
          A: "The analyzer reads 20.93% in room air consistently",
          B: "The analyzer has been in use for exactly 12 months",
          C: "The analyzer is reading within 0.1% of expected values",
          D: "The analyzer cannot be calibrated to the correct oxygen concentration despite repeated attempts",
        },
        correctChoice: "D",
        explanationCorrect:
          "A galvanic fuel cell that cannot be calibrated to the correct oxygen concentration despite repeated attempts has reached the end of its usable life. The electrochemical reaction has consumed the anode material to the point where accurate measurements are no longer possible.",
        explanationWrong:
          "Reading 20.93% correctly indicates the analyzer is working properly. Time-based replacement alone is not the criterion; performance determines replacement need. Reading within 0.1% indicates acceptable accuracy.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 4,
        questionText:
          "A PFT lab technologist is preparing a quality assurance report for laboratory accreditation. Which metric is MOST important to track for spirometry quality?",
        choices: {
          A: "Number of patients tested per day",
          B: "Percentage of tests meeting ATS/ERS acceptability and repeatability criteria",
          C: "Average time per test",
          D: "Number of bronchodilator studies performed",
        },
        correctChoice: "B",
        explanationCorrect:
          "The percentage of spirometry tests meeting ATS/ERS acceptability and repeatability criteria is the primary quality metric for laboratory accreditation. It directly reflects the technical quality of testing and technologist competence.",
        explanationWrong:
          "Patient volume is a productivity metric, not a quality indicator. Average test time reflects efficiency but not quality. The number of bronchodilator studies reflects utilization but not technical quality.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 5,
        questionText:
          "During CPET, a patient demonstrates a VO2 plateau despite increasing workload. This finding indicates which of the following?",
        choices: {
          A: "True VO2max has been achieved, indicating maximal oxygen transport and utilization capacity",
          B: "Equipment malfunction requiring test termination",
          C: "Ventilatory limitation to exercise",
          D: "Deconditioning artifact",
        },
        correctChoice: "A",
        explanationCorrect:
          "A VO2 plateau (less than 150 mL/min increase despite increasing workload) is the gold standard criterion for achieving true VO2max. It indicates that the cardiovascular system has reached its maximal capacity to deliver and utilize oxygen.",
        explanationWrong:
          "A VO2 plateau is a normal physiological finding at maximal exercise, not equipment malfunction. Ventilatory limitation would show reduced breathing reserve. Deconditioning would result in early termination with low peak VO2 but would not cause a true plateau.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 6,
        questionText:
          "For longitudinal PFT monitoring of a patient with idiopathic pulmonary fibrosis (IPF), which decline in FVC over 6-12 months is considered a marker of disease progression?",
        choices: {
          A: "Any decline in FVC",
          B: "Decline greater than 200 mL",
          C: "Decline of 5-10% relative or greater than 200 mL absolute",
          D: "Decline greater than 500 mL",
        },
        correctChoice: "C",
        explanationCorrect:
          "In IPF monitoring, a relative FVC decline of 5-10% or an absolute decline exceeding 200 mL over 6-12 months is considered clinically meaningful and may indicate disease progression, prompting consideration of treatment adjustment.",
        explanationWrong:
          "Any decline might reflect normal measurement variability. A 200 mL threshold alone without considering relative change may miss significant decline in patients with low baseline FVC. A 500 mL threshold is too high and would miss clinically significant progression.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 7,
        questionText:
          "Which of the following describes the correct procedure for performing a linearity check on a spirometer?",
        choices: {
          A: "Testing with a single 3-liter syringe injection",
          B: "Injecting known volumes from the calibration syringe at multiple flow rates and comparing measured volumes across the full range",
          C: "Comparing results from two different spirometers",
          D: "Having multiple patients perform spirometry and comparing results",
        },
        correctChoice: "B",
        explanationCorrect:
          "A linearity check verifies that the spirometer accurately measures volumes across its entire operating range. This is done by injecting the calibration syringe at various flow rates (slow, medium, and fast) to confirm accuracy is maintained at different flows.",
        explanationWrong:
          "A single injection at one flow rate only verifies accuracy at that specific flow. Comparing two spirometers does not establish either one's linearity. Patient testing introduces biological variability that prevents linearity assessment.",
        topic: "PFT equipment maintenance schedules",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 8,
        questionText:
          "A patient referred for HAST has a resting SpO2 of 95% on room air. During the test with 15.1% O2, the SpO2 drops to 82%. What is the most appropriate immediate action?",
        choices: {
          A: "Continue monitoring for the full 20 minutes",
          B: "Reduce the hypoxic gas concentration to 17% O2",
          C: "Document the finding and continue to observe",
          D: "Terminate the test immediately and administer supplemental oxygen",
        },
        correctChoice: "D",
        explanationCorrect:
          "An SpO2 of 82% represents severe hypoxemia that exceeds the safety threshold for HAST (typically 85% or a PaO2 below 50 mmHg). The test should be terminated immediately and supplemental oxygen administered until SpO2 returns to baseline.",
        explanationWrong:
          "Continuing for the full 20 minutes at this level of desaturation risks dangerous hypoxemia. Reducing FiO2 to 17% is not a standard part of the HAST protocol. Simply observing without intervention at 82% SpO2 is unsafe.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 9,
        questionText:
          "In a PFT laboratory, which of the following situations constitutes a sentinel event that should be reported through the facility's incident reporting system?",
        choices: {
          A: "A patient coughs during DLCO testing",
          B: "Calibration fails on the first attempt but passes on the second",
          C: "A patient reports mild lightheadedness after spirometry that resolves within 30 seconds",
          D: "A patient falls while getting on or off the cycle ergometer during CPET",
        },
        correctChoice: "D",
        explanationCorrect:
          "A patient fall is a sentinel event that requires documentation through the facility's incident reporting system. Falls can result in injury and represent a patient safety concern that requires root cause analysis and preventive action.",
        explanationWrong:
          "Coughing during DLCO is a common occurrence that may require repeat testing but is not a sentinel event. Calibration passing on the second attempt reflects normal troubleshooting. Brief lightheadedness after maximal maneuvers is common and self-resolving.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 10,
        questionText:
          "A flow-volume loop demonstrates a biphasic expiratory pattern with an initial rapid rise in flow followed by an abrupt decrease and then a second lower peak. This pattern is sometimes seen in which condition?",
        choices: {
          A: "Normal variant in elderly patients",
          B: "Severe asthma",
          C: "Tracheobronchomalacia with dynamic airway collapse",
          D: "Restrictive lung disease",
        },
        correctChoice: "C",
        explanationCorrect:
          "Tracheobronchomalacia can produce a biphasic or notched expiratory flow pattern. The initial high flow occurs before dynamic collapse, followed by an abrupt decrease as the airway collapses, then a secondary lower flow peak as air exits through the partially collapsed airway.",
        explanationWrong:
          "A biphasic pattern is not a normal aging variant. Severe asthma produces a scooped expiratory limb. Restrictive disease produces a tall, narrow flow-volume loop without biphasic patterns.",
        topic: "Advanced flow-volume loop patterns",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 11,
        questionText:
          "During indirect calorimetry, if the measured RQ is 0.67, which of the following actions should the technologist take?",
        choices: {
          A: "Report the result as indicating ketosis",
          B: "Increase the measurement duration to 60 minutes",
          C: "Repeat the test immediately without further investigation",
          D: "Investigate for possible system leak or collection error because an RQ of 0.67 is below the physiologic range",
        },
        correctChoice: "A",
        explanationWrong:
          "Increasing duration, repeating without investigation, or ignoring the result are all inappropriate. An RQ of 0.67 is at the lower boundary of physiologic range and suggests the patient may be in significant ketosis from prolonged fasting or uncontrolled diabetes.",
        explanationCorrect:
          "While an RQ of 0.67 is very low and close to the lower limit of physiological plausibility, it can occur in patients with significant ketosis. However, the technologist should verify system integrity before reporting, as values below 0.7 may also indicate a measurement error such as a leak in the collection system.",
        topic: "Indirect calorimetry basics",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 12,
        questionText:
          "Which of the following best describes the purpose of dead space washout volume in a DLCO single-breath test?",
        choices: {
          A: "To ensure complete inhalation of the test gas",
          B: "To calibrate the gas analyzers before each test",
          C: "To wash out the patient's anatomic dead space air",
          D: "To discard the initial exhaled gas that represents anatomic and equipment dead space before collecting the alveolar sample",
        },
        correctChoice: "D",
        explanationCorrect:
          "The dead space washout volume (typically 0.75-1.0 L) is discarded at the beginning of exhalation to eliminate gas from the anatomic airways and equipment dead space that did not participate in gas exchange, ensuring that only alveolar gas is collected for analysis.",
        explanationWrong:
          "Dead space washout occurs during exhalation, not inhalation. It is not a calibration step. While it does involve anatomic dead space gas, the purpose is to discard it along with equipment dead space so the collected sample represents alveolar gas.",
        topic: "Board-style comprehensive review scenarios",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 13,
        questionText:
          "A PFT technologist is asked to perform spirometry on a patient who reports having had a recent myocardial infarction 2 weeks ago. What is the most appropriate action?",
        choices: {
          A: "Proceed with testing using standard protocol",
          B: "Consult with the referring physician before proceeding, as recent MI is a relative contraindication",
          C: "Refuse to test the patient under any circumstances",
          D: "Perform the test but limit the patient to 3 maneuvers",
        },
        correctChoice: "B",
        explanationCorrect:
          "Recent myocardial infarction (within 1 month) is a relative contraindication for spirometry due to the hemodynamic effects of forced maneuvers. The technologist should consult with the referring physician to weigh the risks versus benefits before proceeding.",
        explanationWrong:
          "Proceeding without physician consultation ignores a recognized contraindication. Absolute refusal is inappropriate as testing may be clinically necessary with physician authorization. Limiting maneuvers does not address the underlying risk.",
        topic: "Patient safety and emergency procedures in PFT labs",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 14,
        questionText:
          "When reporting the results of a methacholine challenge test, which of the following values is MOST important to include?",
        choices: {
          A: "The total number of inhalations",
          B: "The time required to complete the test",
          C: "The PC20 or PD20 value and the maximum percent decline in FEV1",
          D: "The patient's subjective symptom severity score",
        },
        correctChoice: "C",
        explanationCorrect:
          "The PC20 (provocative concentration) or PD20 (provocative dose) causing a 20% fall in FEV1 is the primary outcome measure of a methacholine challenge. The maximum percent decline in FEV1 provides additional context about the degree of airway hyperresponsiveness.",
        explanationWrong:
          "Number of inhalations is procedural detail. Test duration is not a primary outcome measure. While symptoms are noted, the objective FEV1 decline is the standard reporting metric.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 15,
        questionText:
          "During CPET, exercise oscillatory ventilation (EOV) characterized by cyclic fluctuations in VE during exercise is most commonly associated with which condition?",
        choices: {
          A: "Severe heart failure",
          B: "Asthma",
          C: "COPD with hyperinflation",
          D: "Obesity hypoventilation syndrome",
        },
        correctChoice: "A",
        explanationCorrect:
          "Exercise oscillatory ventilation is a periodic breathing pattern during exercise most commonly seen in severe heart failure. It reflects circulatory delay and chemoreceptor instability and is an independent predictor of poor prognosis in heart failure patients.",
        explanationWrong:
          "Asthma causes bronchospasm but not cyclic ventilatory oscillations. COPD hyperinflation leads to mechanical ventilatory limitation but not oscillatory patterns. Obesity hypoventilation causes hypoventilation, not oscillatory ventilation.",
        topic: "Cardiopulmonary exercise testing (CPET)",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 16,
        questionText:
          "A zirconia oxygen analyzer differs from a galvanic fuel cell in that the zirconia analyzer:",
        choices: {
          A: "Does not require electricity to operate",
          B: "Operates at high temperature (approximately 800 degrees C) and measures oxygen based on electrochemical potential across a ceramic membrane",
          C: "Is more suitable for portable bedside use",
          D: "Measures CO2 in addition to oxygen",
        },
        correctChoice: "B",
        explanationCorrect:
          "Zirconia oxygen analyzers operate at approximately 800 degrees C, where the zirconia ceramic becomes an oxygen ion conductor. The difference in oxygen partial pressure across the membrane generates an electrical potential proportional to oxygen concentration.",
        explanationWrong:
          "Zirconia analyzers require electrical power for the heating element. The high operating temperature makes them less suitable for portable use than galvanic cells. Zirconia analyzers measure only oxygen, not CO2.",
        topic: "Gas analyzer principles",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 17,
        questionText:
          "A patient's longitudinal PFT data over 10 years shows a pattern of initially stable FEV1 followed by rapid decline beginning 3 years ago. The most appropriate clinical recommendation is to:",
        choices: {
          A: "Attribute the decline to normal aging",
          B: "Repeat testing annually to confirm the trend",
          C: "Investigate for new exposures, medication changes, or disease processes coinciding with the onset of accelerated decline",
          D: "Switch to a different spirometer for future testing",
        },
        correctChoice: "C",
        explanationCorrect:
          "A change from stable to rapidly declining lung function suggests a new factor contributing to accelerated decline. Clinical investigation should focus on identifying new occupational or environmental exposures, medication changes, new diagnoses, or exacerbation of existing disease.",
        explanationWrong:
          "Accelerated decline beyond 30 mL/year exceeds normal aging. Waiting another year to confirm delays potentially important clinical intervention. Switching spirometers does not address the clinical question and could introduce equipment-related variability.",
        topic: "Longitudinal PFT monitoring and trending",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 18,
        questionText:
          "Which of the following is the primary reason for including a physician's interpretation along with the technologist's preliminary interpretation on a PFT report?",
        choices: {
          A: "The physician integrates PFT results with clinical history, imaging, and other data to provide a comprehensive clinical interpretation",
          B: "Technologists are not qualified to interpret any PFT data",
          C: "Physician interpretation is required only for billing purposes",
          D: "The physician signature is needed for legal purposes only",
        },
        correctChoice: "A",
        explanationCorrect:
          "The physician adds clinical context by integrating PFT results with the patient's medical history, symptoms, imaging findings, laboratory data, and physical examination to provide a comprehensive clinical interpretation that guides patient management.",
        explanationWrong:
          "Technologists are trained and qualified to provide preliminary interpretations. Physician interpretation serves clinical purposes beyond billing. The physician's role extends far beyond providing a legal signature.",
        topic: "PFT report generation and communication",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 19,
        questionText:
          "A HAST is requested for a patient who already uses 3 L/min supplemental oxygen at rest. What modification to the standard HAST protocol is most appropriate?",
        choices: {
          A: "The test cannot be performed on patients already using oxygen",
          B: "Perform the HAST while the patient uses their prescribed oxygen, then determine if a higher flow rate is needed during simulated altitude",
          C: "Remove the supplemental oxygen and test on room air first",
          D: "Double the patient's usual oxygen flow rate throughout the test",
        },
        correctChoice: "B",
        explanationCorrect:
          "For patients already on supplemental oxygen, the HAST is performed with the patient breathing the hypoxic gas mixture through their supplemental oxygen at their prescribed flow rate. The test determines whether a higher flow rate is needed at altitude.",
        explanationWrong:
          "The test can be performed on oxygen-dependent patients. Removing oxygen could cause dangerous baseline desaturation. Doubling the flow rate does not follow the standard modified protocol approach.",
        topic: "High-altitude simulation testing (HAST)",
      },
      {
        miniExamId: exam20.id,
        questionIndex: 20,
        questionText:
          "A 45-year-old patient has spirometry results showing FEV1 of 95% predicted, FVC of 96% predicted, FEV1/FVC of 78%, TLC of 100% predicted, and DLCO of 95% predicted. The most appropriate interpretation is:",
        choices: {
          A: "Mild obstructive ventilatory defect",
          B: "Early restrictive disease",
          C: "Mixed obstructive and restrictive defect",
          D: "Normal pulmonary function",
        },
        correctChoice: "D",
        explanationCorrect:
          "All values including FEV1, FVC, FEV1/FVC ratio, TLC, and DLCO are within normal limits. An FEV1/FVC of 78% is above the lower limit of normal for a 45-year-old patient. These results represent normal pulmonary function with no evidence of obstruction, restriction, or gas exchange impairment.",
        explanationWrong:
          "The FEV1/FVC of 78% is above the LLN for this age and does not indicate obstruction. Normal TLC rules out restriction. There is no evidence of a mixed defect with these normal values.",
        topic: "Board-style comprehensive review scenarios",
      },
    ],
  });

  console.log(`Exam 20 created: ${exam20.id} with 20 questions`);

  console.log("All 5 CPFT mini exams (16-20) seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
