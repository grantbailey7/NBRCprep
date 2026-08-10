import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ACCS_DIVISION_ID = 'cmsm41fw40002zf5463d399ps'

async function main() {
  console.log('Seeding ACCS mini exams 26-30...')

  // ─── EXAM 26 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q1,Q6,Q10,Q14,Q18) B=5(Q3,Q8,Q12,Q16,Q20) C=5(Q4,Q7,Q11,Q15,Q19) D=5(Q2,Q5,Q9,Q13,Q17)
  const exam26 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 26',
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
          'A 58-year-old patient with septic shock on norepinephrine at 0.4 mcg/kg/min has a new onset of atrial fibrillation with a ventricular rate of 152 bpm. The MAP has dropped from 68 to 52 mmHg. Which intervention should be performed first?',
        choices: {
          A: 'Synchronized cardioversion at 100-200 joules',
          B: 'Amiodarone 150 mg IV bolus over 10 minutes',
          C: 'Diltiazem 0.25 mg/kg IV bolus',
          D: 'Increase norepinephrine to 0.6 mcg/kg/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In a patient with hemodynamic instability (MAP 52 mmHg) and rapid atrial fibrillation, synchronized cardioversion is the first-line intervention. The patient is already vasopressor-dependent with septic shock, and the tachyarrhythmia is causing further hemodynamic compromise. Electrical cardioversion provides the fastest route to restoring a perfusing rhythm.',
        explanationWrong:
          'Amiodarone may be used after cardioversion or in hemodynamically stable patients but is too slow to address acute hemodynamic collapse. Diltiazem is a negative inotrope and could worsen hypotension in shock. Simply increasing norepinephrine does not address the underlying tachyarrhythmia causing reduced cardiac output.',
        topic: 'Arrhythmia Management in Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 2,
        questionText:
          'A mechanically ventilated patient with ARDS is on volume-controlled ventilation with VT 6 mL/kg IBW, PEEP 14 cmH2O, and FiO2 0.70. The plateau pressure is 32 cmH2O and driving pressure is 18 cmH2O. The PaO2/FiO2 ratio is 88. Which adjustment is most likely to improve outcomes?',
        choices: {
          A: 'Increase tidal volume to 8 mL/kg IBW to improve oxygenation',
          B: 'Increase respiratory rate to 30 breaths per minute',
          C: 'Add a recruitment maneuver followed by PEEP titration',
          D: 'Initiate prone positioning for at least 16 hours per day',
        },
        correctChoice: 'D',
        explanationCorrect:
          'With a P/F ratio of 88, this patient has severe ARDS. The PROSEVA trial demonstrated that prone positioning for at least 16 hours per day in severe ARDS (P/F < 150) significantly reduces 28-day mortality. The driving pressure of 18 cmH2O is elevated and the patient meets criteria for proning. This is one of the few interventions in ARDS with a proven mortality benefit.',
        explanationWrong:
          'Increasing tidal volume would worsen ventilator-induced lung injury in a patient whose driving pressure is already elevated. Increasing respiratory rate to 30 may cause air trapping and auto-PEEP without addressing the underlying oxygenation deficit. Recruitment maneuvers followed by high PEEP have not consistently shown mortality benefit in large trials and may cause hemodynamic instability.',
        topic: 'ARDS Management',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 3,
        questionText:
          'A 72-year-old patient with chronic liver disease develops hepatorenal syndrome type 1. The serum creatinine has risen from 1.2 to 3.8 mg/dL over 5 days. Which pharmacologic intervention is recommended as first-line treatment?',
        choices: {
          A: 'Dopamine at renal dose (2-3 mcg/kg/min)',
          B: 'Albumin infusion combined with terlipressin or norepinephrine',
          C: 'Furosemide 80 mg IV bolus',
          D: 'Mannitol 0.5 g/kg IV for osmotic diuresis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Hepatorenal syndrome type 1 is treated with albumin infusion to expand plasma volume combined with a vasoconstrictor such as terlipressin (or norepinephrine if terlipressin is unavailable). This combination improves renal perfusion by increasing effective arterial blood volume and counteracting splanchnic vasodilation, which is the core pathophysiology of hepatorenal syndrome.',
        explanationWrong:
          'Renal-dose dopamine has not been shown to be effective in hepatorenal syndrome and is no longer recommended. Furosemide will not improve kidney function in hepatorenal syndrome and may worsen renal perfusion by reducing intravascular volume. Mannitol does not address the underlying hemodynamic derangement of hepatorenal syndrome.',
        topic: 'Multi-System Organ Failure',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 4,
        questionText:
          'During a spontaneous breathing trial using a T-piece, a patient develops the following findings within 15 minutes: respiratory rate 36/min, heart rate increasing from 88 to 118 bpm, SpO2 declining from 97% to 89%, and use of accessory muscles. The rapid shallow breathing index (RSBI) is 118. What is the most appropriate next step?',
        choices: {
          A: 'Continue the trial for a full 30 minutes before reassessing',
          B: 'Proceed with extubation since the RSBI is below 120',
          C: 'Reconnect the patient to mechanical ventilation and investigate causes of failure',
          D: 'Switch to pressure support ventilation at 5 cmH2O and continue weaning',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This patient is demonstrating clear signs of spontaneous breathing trial failure: tachypnea, tachycardia, desaturation, and accessory muscle use. Despite the RSBI being borderline acceptable (< 105 predicts success, but values up to 120 are sometimes used), the clinical picture of distress overrides a single numerical value. The patient should be returned to full ventilatory support, and causes of weaning failure should be investigated.',
        explanationWrong:
          'Continuing the trial in a patient showing overt respiratory distress risks respiratory muscle fatigue and cardiopulmonary decompensation. Proceeding with extubation despite clinical distress would likely result in reintubation, which is associated with increased morbidity and mortality. Switching to a low level of pressure support does not constitute returning to adequate ventilatory support.',
        topic: 'Ventilator Weaning and Liberation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 5,
        questionText:
          'A 45-year-old patient with traumatic brain injury has an intracranial pressure (ICP) monitor showing sustained ICP of 28 mmHg despite head-of-bed elevation, sedation, and osmotic therapy. The cerebral perfusion pressure is 55 mmHg. Which intervention should be considered next?',
        choices: {
          A: 'Increase the head-of-bed angle to 60 degrees',
          B: 'Administer phenytoin for seizure prophylaxis',
          C: 'Begin continuous albuterol nebulization',
          D: 'Initiate a pentobarbital coma for refractory intracranial hypertension',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When ICP remains elevated above 22 mmHg despite first-line interventions (head elevation, sedation, osmotic therapy with mannitol or hypertonic saline), pentobarbital-induced coma is a second-tier therapy for refractory intracranial hypertension. Barbiturates reduce cerebral metabolic rate and therefore cerebral blood flow and ICP. Continuous EEG monitoring is required during barbiturate coma to titrate to burst suppression.',
        explanationWrong:
          'While head-of-bed elevation to 30 degrees is standard, elevating to 60 degrees may impair venous return and does not address refractory intracranial hypertension. Phenytoin prophylaxis is appropriate in the first 7 days of TBI but does not treat elevated ICP. Albuterol nebulization has no role in ICP management.',
        topic: 'Neurological Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 6,
        questionText:
          'A patient on mechanical ventilation has the following arterial blood gas results: pH 7.28, PaCO2 32 mmHg, PaO2 68 mmHg, HCO3 15 mEq/L, and lactate 6.2 mmol/L. Which acid-base interpretation is correct?',
        choices: {
          A: 'Partially compensated metabolic acidosis with lactic acidosis',
          B: 'Fully compensated respiratory alkalosis',
          C: 'Mixed respiratory and metabolic alkalosis',
          D: 'Uncompensated respiratory acidosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The pH of 7.28 indicates acidemia. The low HCO3 of 15 mEq/L confirms a metabolic acidosis as the primary disorder. The PaCO2 of 32 mmHg represents respiratory compensation (expected PaCO2 for HCO3 of 15 using Winters formula: 1.5 × 15 + 8 ± 2 = 28.5-32.5). The elevated lactate at 6.2 mmol/L identifies lactic acidosis as the cause. This is a partially compensated metabolic acidosis.',
        explanationWrong:
          'This cannot be fully compensated respiratory alkalosis because the pH is acidemic. A mixed respiratory and metabolic alkalosis would show elevated pH, low PaCO2, and elevated HCO3. Uncompensated respiratory acidosis would have elevated PaCO2 with normal HCO3.',
        topic: 'Arterial Blood Gas Interpretation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 7,
        questionText:
          'A 68-year-old patient with heart failure and pulmonary edema is placed on bilevel positive airway pressure (BiPAP) with IPAP 14 cmH2O and EPAP 8 cmH2O. After 2 hours, the patient remains tachypneic with SpO2 of 88% on FiO2 0.60. Which change is most appropriate?',
        choices: {
          A: 'Decrease EPAP to 4 cmH2O to reduce mean airway pressure',
          B: 'Switch to a high-flow nasal cannula at 60 L/min',
          C: 'Increase IPAP to 18 cmH2O and EPAP to 10 cmH2O',
          D: 'Remove BiPAP and begin CPAP at 5 cmH2O',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The patient is not responding adequately to current BiPAP settings. Increasing IPAP to 18 cmH2O improves tidal volume and minute ventilation, while increasing EPAP to 10 cmH2O provides greater alveolar recruitment and improves oxygenation by treating the pulmonary edema. Higher EPAP helps redistribute extravascular lung water and improve ventilation-perfusion matching in cardiogenic pulmonary edema.',
        explanationWrong:
          'Decreasing EPAP would reduce alveolar recruitment and worsen oxygenation in a patient with pulmonary edema. High-flow nasal cannula provides less positive pressure than BiPAP and would be a step down in support. Switching to CPAP at 5 cmH2O would eliminate the pressure support component and reduce the total positive pressure, both of which would worsen the clinical picture.',
        topic: 'Noninvasive Ventilation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 8,
        questionText:
          'A burn patient with 45% total body surface area involvement is being resuscitated using the Parkland formula. The patient weighs 80 kg. How much lactated Ringer solution should be administered in the first 8 hours from the time of burn?',
        choices: {
          A: '14,400 mL total in 24 hours',
          B: '7,200 mL in the first 8 hours',
          C: '3,600 mL in the first 8 hours',
          D: '9,000 mL in the first 8 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The Parkland formula calculates total 24-hour fluid as 4 mL × kg × %TBSA burned. For this patient: 4 × 80 × 45 = 14,400 mL in 24 hours. Half of this (7,200 mL) is given in the first 8 hours from the time of injury, and the remaining half is given over the next 16 hours. This formula serves as a starting point, and actual fluid administration should be titrated to a urine output of 0.5-1 mL/kg/hour.',
        explanationWrong:
          '14,400 mL is the total 24-hour volume, not the first 8-hour amount. 3,600 mL represents only one-quarter of the total volume and would under-resuscitate the patient in the critical first 8 hours. 9,000 mL exceeds the recommended first 8-hour volume and could contribute to excessive edema and abdominal compartment syndrome.',
        topic: 'Burn Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 9,
        questionText:
          'A mechanically ventilated patient on volume-controlled ventilation suddenly has a high-pressure alarm. The respiratory therapist notes elevated peak inspiratory pressure at 52 cmH2O with a plateau pressure of 22 cmH2O. Which condition best explains these findings?',
        choices: {
          A: 'Tension pneumothorax',
          B: 'Worsening ARDS with decreased lung compliance',
          C: 'Mucus plugging of the left mainstem bronchus',
          D: 'Endotracheal tube obstruction from secretions',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A significant increase in peak inspiratory pressure with a normal plateau pressure indicates increased airway resistance rather than decreased lung compliance. Endotracheal tube obstruction from secretions increases airway resistance, causing elevated PIP while plateau pressure remains unchanged because the alveolar pressure is not affected. The difference between PIP and Pplat reflects resistive pressure, which increases with airway obstruction.',
        explanationWrong:
          'Tension pneumothorax would increase both PIP and plateau pressure due to decreased lung compliance and increased intrathoracic pressure. Worsening ARDS would increase both PIP and plateau pressure because it reduces lung compliance. Mucus plugging of a mainstem bronchus could increase airway resistance, but endotracheal tube obstruction is the most direct explanation when the PIP-Pplat gradient is markedly elevated.',
        topic: 'Ventilator Troubleshooting',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 10,
        questionText:
          'A 55-year-old patient with cirrhosis is admitted to the ICU with spontaneous bacterial peritonitis. Blood cultures grow Escherichia coli. Which empiric antibiotic regimen is most appropriate while awaiting sensitivity results?',
        choices: {
          A: 'Cefotaxime 2 g IV every 8 hours',
          B: 'Vancomycin plus metronidazole',
          C: 'Azithromycin 500 mg IV daily',
          D: 'Trimethoprim-sulfamethoxazole orally',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Third-generation cephalosporins such as cefotaxime are the recommended first-line empiric therapy for spontaneous bacterial peritonitis (SBP). Cefotaxime provides excellent coverage against the most common SBP pathogens, including E. coli and other gram-negative enteric organisms, as well as streptococcal species. Guidelines recommend a minimum 5-day course, and albumin infusion should be considered to reduce the risk of hepatorenal syndrome.',
        explanationWrong:
          'Vancomycin plus metronidazole does not provide appropriate gram-negative coverage for SBP and is not a recommended empiric regimen. Azithromycin is a macrolide with limited activity against enteric gram-negative organisms. Oral trimethoprim-sulfamethoxazole is used for SBP prophylaxis, not for acute treatment of established infection.',
        topic: 'Infectious Disease in Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 11,
        questionText:
          'A patient with severe sepsis develops disseminated intravascular coagulation (DIC). Laboratory results show platelet count 38,000/mcL, fibrinogen 85 mg/dL, D-dimer markedly elevated, PT 22 seconds, and PTT 48 seconds. The patient is actively bleeding from IV sites. Which blood product should be administered first?',
        choices: {
          A: 'Platelet transfusion only',
          B: 'Packed red blood cells',
          C: 'Cryoprecipitate to replenish fibrinogen',
          D: 'Recombinant factor VIIa',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In DIC with active bleeding, the critically low fibrinogen of 85 mg/dL (below 100-150 mg/dL threshold) should be addressed first with cryoprecipitate, which is the most concentrated source of fibrinogen. Fibrinogen is essential for clot formation, and its depletion is a hallmark of consumptive coagulopathy in DIC. Each unit of cryoprecipitate raises fibrinogen by approximately 5-10 mg/dL.',
        explanationWrong:
          'While platelets are also critically low and will likely need replacement, the fibrinogen level is the more immediate concern because fibrinogen is required for any clot formation regardless of platelet count. Packed red blood cells address anemia but not the coagulopathy. Recombinant factor VIIa is not routinely recommended for DIC management due to thrombotic risks.',
        topic: 'Hematologic Emergencies',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 12,
        questionText:
          'A trauma patient arrives with a tension pneumothorax. After needle decompression at the second intercostal space, midclavicular line, the patient shows transient improvement but then deteriorates again with hypotension and absent breath sounds on the affected side. What is the most likely cause of the recurrent deterioration?',
        choices: {
          A: 'Cardiac tamponade from concurrent pericardial injury',
          B: 'The decompression needle has become occluded or displaced, requiring chest tube insertion',
          C: 'Massive hemothorax on the contralateral side',
          D: 'Fat embolism syndrome',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Needle decompression is a temporizing measure for tension pneumothorax. The catheter can become kinked, clotted, or displaced, leading to reaccumulation of tension pneumothorax. Definitive management requires chest tube (tube thoracostomy) insertion, typically at the fourth or fifth intercostal space in the anterior axillary line. Recurrence of symptoms after initial improvement with needle decompression strongly suggests catheter failure.',
        explanationWrong:
          'Cardiac tamponade would present with distended neck veins, muffled heart sounds, and hypotension, but absent breath sounds on the affected side point to recurrent pneumothorax rather than tamponade. Contralateral hemothorax is possible but less likely given the pattern of transient improvement then deterioration on the same side. Fat embolism syndrome typically presents 24-72 hours after long bone fractures with a different clinical picture.',
        topic: 'Trauma Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 13,
        questionText:
          'A patient on mechanical ventilation develops ventilator-associated pneumonia (VAP) on day 7 of intubation. The patient has received no prior antibiotics during this admission. Gram stain of tracheal aspirate shows gram-negative rods. According to current guidelines, which is the most appropriate initial empiric antibiotic strategy?',
        choices: {
          A: 'Vancomycin monotherapy',
          B: 'Linezolid plus fluconazole',
          C: 'Piperacillin-tazobactam plus ciprofloxacin',
          D: 'An anti-pseudomonal beta-lactam such as piperacillin-tazobactam or cefepime',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For early-onset VAP (within 7 days) in a patient without prior antibiotic exposure or risk factors for multidrug-resistant organisms, guidelines recommend monotherapy with an anti-pseudomonal beta-lactam such as piperacillin-tazobactam, cefepime, or meropenem. The gram-negative rods on Gram stain support targeting enteric gram-negative organisms. Dual anti-pseudomonal coverage is reserved for patients at high risk for MDR organisms.',
        explanationWrong:
          'Vancomycin monotherapy targets gram-positive organisms and would be inappropriate for gram-negative VAP. Linezolid plus fluconazole targets gram-positive bacteria and fungi, neither of which is suggested by the Gram stain. Adding ciprofloxacin to piperacillin-tazobactam provides dual anti-pseudomonal coverage, which is unnecessary in this low-risk patient and increases the risk of antibiotic resistance.',
        topic: 'Ventilator-Associated Pneumonia',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 14,
        questionText:
          'A patient with known COPD exacerbation is on BiPAP with IPAP 16, EPAP 6, and FiO2 0.35. ABG shows pH 7.30, PaCO2 62 mmHg, PaO2 72 mmHg, and HCO3 30 mEq/L. To improve the PaCO2, which adjustment is most appropriate?',
        choices: {
          A: 'Increase the IPAP to 20 cmH2O',
          B: 'Increase the EPAP to 10 cmH2O',
          C: 'Increase the FiO2 to 0.50',
          D: 'Decrease the IPAP to 12 cmH2O',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In a COPD exacerbation with hypercapnic respiratory failure, the PaCO2 is primarily reduced by increasing the pressure support, which is the difference between IPAP and EPAP. Increasing IPAP from 16 to 20 cmH2O increases the driving pressure (pressure support) from 10 to 14 cmH2O, which augments tidal volume and minute ventilation, thereby lowering PaCO2.',
        explanationWrong:
          'Increasing EPAP alone would not increase pressure support (the difference between IPAP and EPAP would decrease from 10 to 6 cmH2O), and could worsen CO2 retention. Increasing FiO2 improves oxygenation but does not affect ventilation or CO2 clearance. Decreasing IPAP would reduce pressure support and worsen hypercapnia.',
        topic: 'Noninvasive Ventilation for COPD',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 15,
        questionText:
          'A patient with acute pancreatitis develops abdominal compartment syndrome with an intra-abdominal pressure of 28 mmHg. The patient is oliguric with a bladder pressure measurement confirming the diagnosis. Urine output has been less than 0.3 mL/kg/hour for the past 4 hours. Which intervention is the definitive treatment?',
        choices: {
          A: 'Aggressive IV fluid resuscitation with 30 mL/kg crystalloid bolus',
          B: 'Placement of a percutaneous abdominal drain',
          C: 'Surgical decompressive laparotomy',
          D: 'Continuous renal replacement therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Abdominal compartment syndrome with intra-abdominal pressure above 20 mmHg and associated organ dysfunction (oliguria) requires definitive treatment with surgical decompressive laparotomy. This relieves the increased intra-abdominal pressure, restoring perfusion to abdominal organs and improving renal, cardiac, and respiratory function. Non-operative measures may be tried initially but are often insufficient in established abdominal compartment syndrome.',
        explanationWrong:
          'Aggressive fluid resuscitation may actually worsen abdominal compartment syndrome by increasing visceral edema and further raising intra-abdominal pressure. Percutaneous drainage may help if there is a drainable fluid collection but is not definitive for abdominal compartment syndrome caused by tissue edema. CRRT addresses the consequences of renal failure but does not treat the underlying compartment syndrome.',
        topic: 'Surgical Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 16,
        questionText:
          'A 63-year-old patient with a pulmonary artery catheter has the following hemodynamic profile: cardiac index 1.8 L/min/m², PCWP 26 mmHg, SVR 2400 dynes·s/cm⁵, MAP 62 mmHg. Which condition is most consistent with these findings?',
        choices: {
          A: 'Septic shock',
          B: 'Cardiogenic shock',
          C: 'Hypovolemic shock',
          D: 'Neurogenic shock',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The hemodynamic profile of low cardiac index (1.8), elevated PCWP (26 mmHg indicating left ventricular failure), and markedly elevated SVR (2400 dynes·s/cm⁵ reflecting compensatory vasoconstriction) is classic for cardiogenic shock. The elevated wedge pressure distinguishes cardiogenic from hypovolemic shock, while the elevated SVR distinguishes it from distributive (septic) shock.',
        explanationWrong:
          'Septic shock typically presents with low SVR, elevated cardiac output (after fluid resuscitation), and variable PCWP. Hypovolemic shock would show low PCWP, low cardiac output, and elevated SVR. Neurogenic shock presents with low SVR due to loss of sympathetic tone, bradycardia, and low cardiac output.',
        topic: 'Hemodynamic Monitoring and Interpretation',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 17,
        questionText:
          'An ICU nurse reports that a patient on a propofol infusion at 50 mcg/kg/min for the past 72 hours has developed new-onset metabolic acidosis with a lactate of 5.8 mmol/L, triglycerides of 480 mg/dL, and elevated creatine kinase. Which complication should be suspected?',
        choices: {
          A: 'Malignant hyperthermia',
          B: 'Neuroleptic malignant syndrome',
          C: 'Serotonin syndrome',
          D: 'Propofol infusion syndrome',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Propofol infusion syndrome (PRIS) is a rare but potentially fatal complication of prolonged, high-dose propofol infusion. It is characterized by metabolic acidosis, elevated lactate, hypertriglyceridemia, rhabdomyolysis (elevated CK), cardiac dysfunction, and renal failure. Risk factors include infusion rates above 5 mg/kg/hour (83 mcg/kg/min) for more than 48 hours, though it can occur at lower doses. Propofol should be discontinued immediately.',
        explanationWrong:
          'Malignant hyperthermia is triggered by volatile anesthetics and succinylcholine, not propofol. Neuroleptic malignant syndrome is caused by dopamine antagonists (antipsychotics) and presents with rigidity, fever, and altered mental status. Serotonin syndrome is caused by serotonergic drugs and presents with clonus, hyperreflexia, and agitation.',
        topic: 'ICU Pharmacology',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 18,
        questionText:
          'A 50-year-old patient with status asthmaticus has been intubated and is receiving volume-controlled ventilation. The ventilator settings are VT 450 mL, RR 12, PEEP 0, I:E ratio 1:4, and FiO2 0.40. The patient has significant auto-PEEP of 12 cmH2O measured by an expiratory hold maneuver. Which ventilator adjustment would best reduce auto-PEEP?',
        choices: {
          A: 'Decrease the respiratory rate to 8 breaths per minute to increase expiratory time',
          B: 'Increase the PEEP to 10 cmH2O to splint open airways',
          C: 'Increase the tidal volume to 600 mL to improve gas exchange',
          D: 'Increase the respiratory rate to 20 breaths per minute',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Auto-PEEP in status asthmaticus results from incomplete exhalation due to severe airflow obstruction. Decreasing the respiratory rate from 12 to 8 breaths per minute increases expiratory time, allowing more complete exhalation and reducing air trapping. The ventilatory strategy in status asthmaticus prioritizes permissive hypercapnia to minimize air trapping and dynamic hyperinflation rather than normalizing PaCO2.',
        explanationWrong:
          'While applied PEEP can counterbalance auto-PEEP in COPD to reduce work of breathing, adding PEEP in severe asthma with significant auto-PEEP may worsen hyperinflation. Increasing tidal volume would increase the volume of gas that needs to be exhaled, potentially worsening auto-PEEP. Increasing respiratory rate would shorten expiratory time and dramatically worsen air trapping.',
        topic: 'Mechanical Ventilation in Obstructive Disease',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 19,
        questionText:
          'A 70-year-old patient in the ICU develops Clostridioides difficile infection with fulminant colitis. The patient has a WBC of 32,000/mcL, lactate of 4.5 mmol/L, and worsening abdominal distension. Which treatment regimen is recommended for fulminant C. difficile?',
        choices: {
          A: 'Oral metronidazole 500 mg three times daily',
          B: 'Oral fidaxomicin 200 mg twice daily',
          C: 'Oral vancomycin 500 mg four times daily plus IV metronidazole 500 mg every 8 hours',
          D: 'IV vancomycin 1 g every 12 hours',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Fulminant C. difficile infection (characterized by hypotension, ileus, megacolon, or WBC > 15,000 with organ dysfunction) requires combination therapy with oral vancomycin 500 mg four times daily (increased from the standard 125 mg dose) plus IV metronidazole 500 mg every 8 hours. Rectal vancomycin enemas may be added if ileus is present, as oral vancomycin may not reach the colon. Surgical consultation for colectomy should be obtained.',
        explanationWrong:
          'Oral metronidazole alone is no longer recommended even for initial non-severe C. difficile episodes. Fidaxomicin is used for initial or recurrent non-fulminant episodes but is not the recommended regimen for fulminant disease. IV vancomycin does not achieve adequate colonic concentrations because it is not excreted into the gastrointestinal tract.',
        topic: 'Infectious Disease in Critical Care',
      },
      {
        miniExamId: exam26.id,
        questionIndex: 20,
        questionText:
          'A patient on mechanical ventilation has a chest radiograph showing the tip of the endotracheal tube at the level of the aortic knob. The cuff pressure is measured at 35 cmH2O. Which combination of actions is most appropriate?',
        choices: {
          A: 'Advance the ETT 2 cm and increase cuff pressure to 40 cmH2O',
          B: 'Withdraw the ETT 2-3 cm to position 3-5 cm above the carina and reduce cuff pressure to 20-25 cmH2O',
          C: 'Leave the ETT position and increase cuff pressure to prevent aspiration',
          D: 'Remove the ETT and reintubate with a larger tube',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The ETT tip at the aortic knob level is likely too deep, positioning it near or at the carina, which risks right mainstem bronchus intubation. The ETT should be withdrawn 2-3 cm to position the tip 3-5 cm above the carina (approximately at the T2-T4 level). Additionally, the cuff pressure of 35 cmH2O exceeds the recommended range of 20-30 cmH2O, risking tracheal mucosal ischemia. Cuff pressure should be reduced to 20-25 cmH2O.',
        explanationWrong:
          'Advancing the ETT further would worsen the malposition and risk right mainstem intubation. Increasing cuff pressure above 30 cmH2O increases the risk of tracheal mucosal ischemia, necrosis, and stenosis. Removing and reintubating is unnecessary when the tube can simply be repositioned.',
        topic: 'Airway Management',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 26 seeded (20 questions, isFree: false)')

  // ─── EXAM 27 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q5,Q9,Q14,Q17) B=5(Q4,Q7,Q11,Q15,Q19) C=5(Q1,Q6,Q10,Q16,Q20) D=5(Q3,Q8,Q12,Q13,Q18)
  const exam27 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 27',
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
          'A 74-year-old patient with a history of aortic stenosis is admitted to the ICU after syncopal episodes. Echocardiography shows an aortic valve area of 0.7 cm², mean gradient of 48 mmHg, and ejection fraction of 35%. The patient develops pulmonary edema. Which medication should be avoided in this patient?',
        choices: {
          A: 'Low-dose dobutamine',
          B: 'IV furosemide',
          C: 'Nitroprusside, which causes afterload reduction that may precipitate cardiovascular collapse in severe aortic stenosis',
          D: 'Supplemental oxygen',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In severe aortic stenosis, the left ventricle generates high pressures to overcome the fixed obstruction. Vasodilators such as nitroprusside that reduce afterload can cause profound hypotension because the cardiac output cannot increase to compensate for the decreased SVR due to the fixed obstruction. This can lead to cardiovascular collapse, syncope, or cardiac arrest. Blood pressure management must be approached very cautiously in these patients.',
        explanationWrong:
          'Low-dose dobutamine may be carefully used to augment cardiac output in decompensated aortic stenosis with reduced ejection fraction. IV furosemide is indicated for treating the pulmonary edema. Supplemental oxygen is appropriate supportive care and poses no specific risk in aortic stenosis.',
        topic: 'Cardiovascular Critical Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 2,
        questionText:
          'A patient with ARDS on lung-protective ventilation has the following: VT 360 mL (6 mL/kg IBW), RR 28, PEEP 16 cmH2O, FiO2 0.80, plateau pressure 30 cmH2O. ABG: pH 7.18, PaCO2 68 mmHg, PaO2 62 mmHg. Which strategy is most appropriate for managing the hypercapnia?',
        choices: {
          A: 'Accept permissive hypercapnia as long as pH remains above 7.15 and the patient is hemodynamically stable',
          B: 'Increase the tidal volume to 8 mL/kg IBW',
          C: 'Add 100 mL of dead space to the ventilator circuit',
          D: 'Administer sodium bicarbonate 150 mEq IV bolus',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In ARDS with lung-protective ventilation, permissive hypercapnia is an accepted strategy when maintaining low tidal volumes and plateau pressures. As long as the pH remains above approximately 7.15-7.20 and the patient is hemodynamically stable, the elevated PaCO2 is tolerated to prevent ventilator-induced lung injury. The pH of 7.18 is at the lower acceptable threshold but remains manageable with close monitoring.',
        explanationWrong:
          'Increasing tidal volume to 8 mL/kg would violate lung-protective ventilation principles and increase the risk of ventilator-induced lung injury. Adding dead space would worsen hypercapnia, not improve it. Sodium bicarbonate bolus provides only transient pH correction, generates additional CO2 that must be excreted by the lungs, and does not address the underlying ventilatory limitation.',
        topic: 'ARDS Ventilatory Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 3,
        questionText:
          'A trauma patient with a flail chest has paradoxical chest wall movement and is in respiratory distress. ABG shows pH 7.28, PaCO2 58 mmHg, PaO2 55 mmHg on 15 L/min non-rebreather mask. Which is the most appropriate respiratory intervention?',
        choices: {
          A: 'Apply a sandbag over the flail segment to stabilize the chest wall',
          B: 'Administer 100% oxygen via high-flow nasal cannula at 60 L/min',
          C: 'Provide BiPAP at IPAP 14 and EPAP 6 as a trial before intubation',
          D: 'Intubate and initiate mechanical ventilation with positive pressure to internally splint the flail segment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This patient has acute respiratory failure (hypoxemia and hypercapnia) from a flail chest injury. Intubation and positive pressure ventilation provide internal pneumatic stabilization of the flail segment, eliminating paradoxical motion. The positive pressure also addresses the underlying pulmonary contusion that typically accompanies flail chest. Given the severity of the blood gas abnormalities on high-flow oxygen, intubation should not be delayed.',
        explanationWrong:
          'External stabilization with sandbags is an outdated practice that restricts chest wall movement and worsens ventilation. High-flow nasal cannula may improve oxygenation but does not adequately address the severe hypercapnia or provide chest wall stabilization. BiPAP could be considered in milder cases, but this patient has significant respiratory failure requiring definitive airway management.',
        topic: 'Trauma Critical Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 4,
        questionText:
          'A patient with septic shock has been receiving norepinephrine at 0.5 mcg/kg/min with a MAP of 60 mmHg. The most recent cortisol stimulation test shows a baseline cortisol of 12 mcg/dL with an increment of only 4 mcg/dL after cosyntropin administration. Which adjunctive therapy is most appropriate?',
        choices: {
          A: 'Dexamethasone 10 mg IV every 6 hours',
          B: 'Hydrocortisone 50 mg IV every 6 hours',
          C: 'Fludrocortisone 0.1 mg orally daily',
          D: 'Methylprednisolone 125 mg IV daily',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In vasopressor-dependent septic shock with evidence of relative adrenal insufficiency (cortisol increment < 9 mcg/dL after cosyntropin), stress-dose hydrocortisone at 200 mg/day (50 mg IV every 6 hours) is recommended. Hydrocortisone has both glucocorticoid and mineralocorticoid activity, which helps restore vascular responsiveness to catecholamines and may reduce the duration of vasopressor therapy.',
        explanationWrong:
          'Dexamethasone lacks mineralocorticoid activity and interferes with subsequent cortisol stimulation testing if not already performed. Fludrocortisone alone provides only mineralocorticoid activity without adequate glucocorticoid effect. Methylprednisolone at high doses is not the recommended corticosteroid for septic shock and may increase the risk of secondary infections.',
        topic: 'Septic Shock Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 5,
        questionText:
          'A mechanically ventilated patient has a pulmonary artery catheter showing: PAP 52/28 mmHg, PCWP 12 mmHg, CO 3.2 L/min, and PVR 800 dynes·s/cm⁵. SpO2 is 86% on FiO2 1.0. These findings are most consistent with which diagnosis?',
        choices: {
          A: 'Acute pulmonary embolism causing right heart failure',
          B: 'Left ventricular systolic heart failure',
          C: 'Hypovolemic shock',
          D: 'Septic shock with vasodilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The hemodynamic profile shows elevated pulmonary artery pressures (52/28 mmHg), normal PCWP (12 mmHg), reduced cardiac output (3.2 L/min), and markedly elevated PVR (800 dynes·s/cm⁵). This pattern of pre-capillary pulmonary hypertension with right heart failure and refractory hypoxemia is classic for massive pulmonary embolism. The normal PCWP excludes left heart failure as the cause of pulmonary hypertension.',
        explanationWrong:
          'Left ventricular systolic heart failure would present with elevated PCWP and post-capillary pulmonary hypertension. Hypovolemic shock would show low filling pressures across all chambers with low PCWP and low PAP. Septic shock typically shows low SVR with normal or elevated cardiac output (after resuscitation) and is not characterized by markedly elevated PVR.',
        topic: 'Hemodynamic Monitoring',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 6,
        questionText:
          'A patient in the ICU on mechanical ventilation has a glucose level of 320 mg/dL. The ICU protocol calls for an insulin infusion. According to current evidence-based guidelines, what is the recommended blood glucose target range for critically ill patients?',
        choices: {
          A: 'Below 110 mg/dL (tight glycemic control)',
          B: 'Between 80 and 120 mg/dL',
          C: 'Between 140 and 180 mg/dL',
          D: 'Between 200 and 250 mg/dL',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current evidence from the NICE-SUGAR trial and subsequent guidelines recommends a target blood glucose of 140-180 mg/dL for critically ill patients. Tight glycemic control targeting values below 110 mg/dL was associated with increased mortality primarily due to severe hypoglycemia. A moderate glucose target of 140-180 mg/dL balances the risks of hyperglycemia and hypoglycemia in critically ill patients.',
        explanationWrong:
          'Targeting below 110 mg/dL (tight glycemic control) significantly increases the risk of hypoglycemia and was associated with higher mortality in the NICE-SUGAR trial. A target of 80-120 mg/dL similarly poses unacceptable hypoglycemia risk. Allowing glucose to remain between 200-250 mg/dL is too permissive and is associated with increased infectious complications, impaired wound healing, and worse outcomes.',
        topic: 'Evidence-Based ICU Protocols',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 7,
        questionText:
          'A 48-year-old patient is brought to the emergency department after a witnessed cardiac arrest. ROSC is achieved after 22 minutes of CPR. The patient is unresponsive with a GCS of 3. Temperature is 37.2°C. According to targeted temperature management guidelines, what is the recommended approach?',
        choices: {
          A: 'Allow temperature to remain at 37.2°C and provide standard care',
          B: 'Initiate targeted temperature management maintaining a core temperature between 32°C and 36°C for at least 24 hours',
          C: 'Cool to 30°C for maximum neuroprotection',
          D: 'Active warming to 38.5°C to optimize cerebral perfusion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Post-cardiac arrest guidelines recommend targeted temperature management (TTM) for comatose patients after return of spontaneous circulation. Current evidence supports maintaining a target temperature between 32°C and 36°C for at least 24 hours. TTM reduces cerebral metabolic demand, attenuates reperfusion injury, and decreases inflammatory cascades. Fever prevention is essential for at least 72 hours after the arrest.',
        explanationWrong:
          'Allowing normothermia without active temperature management ignores the neuroprotective benefits of TTM and risks fever, which is associated with worse neurological outcomes. Cooling to 30°C increases the risk of cardiac arrhythmias, coagulopathy, and infection without proven additional benefit over 32-36°C. Active warming to 38.5°C would be harmful, as hyperthermia exacerbates post-anoxic brain injury.',
        topic: 'Post-Cardiac Arrest Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 8,
        questionText:
          'A patient with acute liver failure develops grade III hepatic encephalopathy with asterixis and confusion progressing to somnolence. The ammonia level is 185 mcmol/L. ICP monitoring shows an intracranial pressure of 24 mmHg. Which intervention is most appropriate to reduce intracranial pressure?',
        choices: {
          A: 'Administer lactulose 30 mL orally every 4 hours',
          B: 'Phenytoin loading dose for seizure prophylaxis',
          C: 'Begin enteral nutrition to prevent catabolism',
          D: 'Administer hypertonic saline (23.4%) bolus to target serum sodium of 145-155 mEq/L',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In acute liver failure with elevated intracranial pressure, hypertonic saline is the preferred osmotic agent to reduce cerebral edema and lower ICP. Targeting a serum sodium of 145-155 mEq/L creates an osmotic gradient that draws water from the brain parenchyma. This is preferred over mannitol in acute liver failure because mannitol may accumulate with renal dysfunction, which is common in this setting.',
        explanationWrong:
          'While lactulose reduces ammonia through gut elimination, it is too slow to act on an acute ICP crisis and may cause abdominal distension that interferes with liver transplantation assessment. Phenytoin is not first-line for ICP reduction and has hepatotoxic potential. Enteral nutrition is part of supportive care but does not address acute intracranial hypertension.',
        topic: 'Hepatic Failure and Neurological Complications',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 9,
        questionText:
          'A 55-year-old patient with obesity hypoventilation syndrome is being weaned from mechanical ventilation. The patient weighs 140 kg with an ideal body weight of 70 kg. The tidal volume is set at 420 mL (6 mL/kg IBW). Which additional ventilator parameter should be calculated using ideal body weight rather than actual body weight?',
        choices: {
          A: 'Tidal volume and minute ventilation targets, because lung size correlates with height (and therefore IBW), not with actual body weight',
          B: 'PEEP level',
          C: 'FiO2 setting',
          D: 'Inspiratory flow rate',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Tidal volume and minute ventilation targets should always be calculated using ideal body weight (predicted body weight) because lung size is determined by height and sex, not by total body mass. In obese patients, using actual body weight would result in dangerously excessive tidal volumes that cause volutrauma. For this 140 kg patient with IBW of 70 kg, the appropriate VT of 6 mL/kg IBW is 420 mL, while 6 mL/kg actual would be 840 mL, risking severe lung injury.',
        explanationWrong:
          'PEEP is titrated based on oxygenation response and lung mechanics rather than body weight calculations. FiO2 is titrated to achieve target oxygenation and is not weight-based. Inspiratory flow rate is adjusted based on patient demand, circuit characteristics, and I:E ratio, not on body weight.',
        topic: 'Ventilator Management in Obesity',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 10,
        questionText:
          'A patient with myasthenia gravis in myasthenic crisis is intubated and mechanically ventilated. The forced vital capacity is 800 mL (18 mL/kg IBW). In addition to mechanical ventilation, which treatment should be initiated?',
        choices: {
          A: 'High-dose corticosteroids alone',
          B: 'Increase pyridostigmine (Mestinon) dose to maximum',
          C: 'Plasma exchange (plasmapheresis) or IV immunoglobulin (IVIG)',
          D: 'Azathioprine as sole immunosuppressive therapy',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Myasthenic crisis requires rapid immunomodulation with either plasma exchange or IVIG, both of which have demonstrated efficacy in acute crisis. Plasma exchange removes circulating acetylcholine receptor antibodies, while IVIG modulates the immune response. Both have onset of effect within days, which is critical in a patient requiring mechanical ventilation. These are considered first-line acute treatments for myasthenic crisis.',
        explanationWrong:
          'High-dose corticosteroids alone may initially worsen myasthenia (steroid-induced exacerbation) and should not be used as the sole treatment in crisis. Increasing pyridostigmine during crisis is generally avoided because it can cause cholinergic crisis with excessive secretions, bronchospasm, and worsening weakness. Azathioprine has a very slow onset of action (months) and is used for long-term maintenance, not acute crisis management.',
        topic: 'Neuromuscular Disease in the ICU',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 11,
        questionText:
          'A patient with ARDS is being managed with neuromuscular blockade (cisatracurium) to improve ventilator synchrony. Which monitoring practice is essential during continuous neuromuscular blockade?',
        choices: {
          A: 'Daily chest radiographs to assess ETT position only',
          B: 'Train-of-four (TOF) monitoring to guide dosing and sedation assessment using validated scales with daily interruption when feasible',
          C: 'Hourly capnography to assess ventilation',
          D: 'Continuous pulse oximetry as the sole monitoring parameter',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During continuous neuromuscular blockade, train-of-four monitoring using a peripheral nerve stimulator is essential to titrate the infusion to the minimum effective dose (typically maintaining 1-2 twitches out of 4). Additionally, because physical examination for pain and sedation is limited during paralysis, adequate sedation and analgesia must be ensured using validated protocols. Daily interruption of paralysis should be attempted when clinically feasible to assess neurological status and minimize the risk of ICU-acquired weakness.',
        explanationWrong:
          'Daily chest radiographs assess ETT position but do not monitor neuromuscular blockade depth. Hourly capnography monitors ventilation but does not assess the degree of paralysis or ensure appropriate dosing. Pulse oximetry alone is insufficient because it does not assess paralysis depth, and the paralyzed patient cannot communicate distress or awareness.',
        topic: 'Neuromuscular Blockade Monitoring',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 12,
        questionText:
          'A postoperative cardiac surgery patient has a chest tube output of 250 mL/hour for the past 3 hours. The patient is on aspirin and was given heparin during surgery. Coagulation studies show PT 18 seconds, aPTT 52 seconds, and platelet count 95,000/mcL. What is the most appropriate next step?',
        choices: {
          A: 'Administer aminocaproic acid (Amicar) 5 g IV',
          B: 'Transfuse 2 units of platelets',
          C: 'Administer vitamin K 10 mg IV',
          D: 'Surgical re-exploration for hemorrhage',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Postoperative chest tube output exceeding 200 mL/hour for 3 or more consecutive hours after cardiac surgery typically warrants surgical re-exploration. This rate of bleeding (750 mL over 3 hours) suggests a surgical bleeding source rather than a purely coagulopathic cause. While the coagulation studies are mildly abnormal, the persistent high-volume output despite the coagulopathy being relatively mild suggests a mechanical cause that requires operative intervention.',
        explanationWrong:
          'Aminocaproic acid inhibits fibrinolysis and may be considered as an adjunct but is not the primary intervention when surgical bleeding is suspected. The platelet count of 95,000 is above the threshold for surgical bleeding, and platelet transfusion alone will not address a surgical source. Vitamin K takes hours to take effect and the PT is only mildly elevated, making it unlikely to be the primary cause of this degree of bleeding.',
        topic: 'Postoperative Cardiac Critical Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 13,
        questionText:
          'A 60-year-old patient with a tracheostomy has been on mechanical ventilation for 21 days. The patient is now on pressure support of 8 cmH2O, PEEP 5 cmH2O, and FiO2 0.30. The patient is alert, cooperative, following commands, and able to tolerate capping trials for 4 hours at a time. Which criterion suggests the patient is ready for decannulation?',
        choices: {
          A: 'Ability to tolerate capping for 30 minutes',
          B: 'SpO2 above 92% on mechanical ventilation only',
          C: 'Adequate cough strength to clear secretions',
          D: 'Tolerating a capping trial for at least 24 hours with adequate cough, manageable secretions, and intact swallowing function',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Readiness for tracheostomy decannulation requires meeting multiple criteria: tolerance of capping trial for 24 hours or more (demonstrating ability to breathe through the upper airway), adequate cough strength to clear secretions, manageable secretion volume, intact swallowing function (assessed by speech-language pathology), and no evidence of upper airway obstruction. All of these must be present to safely remove the tracheostomy.',
        explanationWrong:
          'Thirty minutes of capping tolerance is insufficient to demonstrate sustained upper airway patency and breathing ability. SpO2 above 92% on mechanical ventilation does not demonstrate the ability to breathe independently through the natural airway. While adequate cough is necessary, it alone is insufficient without demonstrating prolonged capping tolerance, manageable secretions, and safe swallowing.',
        topic: 'Tracheostomy Management and Weaning',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 14,
        questionText:
          'A patient with severe community-acquired pneumonia requires intubation. Pre-intubation vitals: BP 88/54 mmHg, HR 118 bpm, SpO2 84% on 15 L non-rebreather. Which induction agent is most appropriate for rapid sequence intubation in this hemodynamically unstable patient?',
        choices: {
          A: 'Ketamine 1-2 mg/kg IV, which maintains hemodynamic stability through sympathomimetic properties',
          B: 'Propofol 2 mg/kg IV',
          C: 'Thiopental 3-5 mg/kg IV',
          D: 'Midazolam 0.3 mg/kg IV',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ketamine is the preferred induction agent for rapid sequence intubation in hemodynamically unstable patients because it has sympathomimetic properties that help maintain blood pressure and heart rate. Unlike other induction agents, ketamine stimulates catecholamine release, preserving cardiovascular stability. It also provides excellent analgesia and has bronchodilatory effects, which can be beneficial in patients with respiratory disease.',
        explanationWrong:
          'Propofol causes dose-dependent hypotension through vasodilation and myocardial depression, which could be catastrophic in a patient already hypotensive with sepsis. Thiopental is a barbiturate that causes significant cardiovascular depression and is contraindicated in hemodynamically unstable patients. Midazolam at induction doses causes hypotension and has an unpredictable onset, making it a poor choice for RSI in shock.',
        topic: 'Emergency Airway Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 15,
        questionText:
          'An ICU patient on mechanical ventilation develops a sudden decrease in exhaled tidal volume with rising peak inspiratory pressures. The ventilator alarm indicates low exhaled volume. The respiratory therapist cannot pass a suction catheter through the endotracheal tube. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the set tidal volume to compensate for the leak',
          B: 'Remove the obstructed ETT and ventilate with bag-mask while preparing for reintubation',
          C: 'Administer a bronchodilator via the ventilator circuit',
          D: 'Obtain an urgent chest radiograph before taking any action',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The inability to pass a suction catheter combined with low exhaled volume and high PIP indicates a critical ETT obstruction that cannot be relieved by suctioning. The immediate priority is to remove the obstructed tube and provide ventilation via bag-mask while preparing for reintubation. This follows the emergency airway algorithm principle of removing a non-functional artificial airway rather than persisting with troubleshooting that delays oxygenation.',
        explanationWrong:
          'Increasing set tidal volume cannot overcome a mechanical obstruction and does not address the life-threatening problem. Bronchodilators treat bronchospasm, not ETT obstruction, and cannot be effectively delivered through a blocked tube. Waiting for chest radiography delays addressing a critical airway emergency that requires immediate intervention.',
        topic: 'Airway Emergency Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 16,
        questionText:
          'A 42-year-old patient with severe acute pancreatitis has a Ranson score of 6 and an APACHE II score of 22. CT shows > 50% pancreatic necrosis. On day 10, the patient develops fever, leukocytosis, and clinical deterioration. What is the recommended diagnostic approach?',
        choices: {
          A: 'Repeat serum lipase and amylase levels',
          B: 'Diagnostic peritoneal lavage',
          C: 'CT-guided fine-needle aspiration of the pancreatic necrosis for Gram stain and culture',
          D: 'Empiric broad-spectrum antibiotics without further diagnostic workup',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In a patient with necrotizing pancreatitis who develops signs of infection (fever, leukocytosis, clinical deterioration) after the first week, CT-guided fine-needle aspiration (FNA) of the necrotic tissue is recommended to distinguish sterile from infected necrosis. Infected necrosis significantly changes management, often requiring drainage or debridement, while sterile necrosis is managed conservatively. Gram stain and culture of the aspirate guide targeted antibiotic therapy.',
        explanationWrong:
          'Serum lipase and amylase levels do not help distinguish infected from sterile necrosis and may be declining by day 10. Diagnostic peritoneal lavage is not the standard approach for evaluating pancreatic necrosis infection. Empiric antibiotics without confirming infection may lead to unnecessary antibiotic exposure, resistance development, and fungal superinfection.',
        topic: 'Gastrointestinal Critical Care',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 17,
        questionText:
          'A patient is receiving a massive transfusion protocol (10 units of packed red blood cells in 6 hours) following a motor vehicle collision. The ionized calcium level is 0.85 mmol/L (normal 1.12-1.32 mmol/L). The patient develops hypotension that is refractory to vasopressors. What is the most likely cause?',
        choices: {
          A: 'Citrate toxicity causing hypocalcemia, which impairs cardiac contractility and vascular tone',
          B: 'Transfusion-related acute lung injury',
          C: 'Hyperkalemia from stored blood products',
          D: 'Anaphylactic transfusion reaction',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Citrate is the anticoagulant used in blood product storage. During massive transfusion, the rate of citrate infusion can exceed the liver capacity to metabolize it, leading to citrate accumulation. Citrate chelates ionized calcium, causing hypocalcemia. Ionized calcium is essential for cardiac contractility, vascular smooth muscle tone, and the coagulation cascade. Severe hypocalcemia causes vasopressor-refractory hypotension, cardiac depression, and coagulopathy. Treatment is IV calcium gluconate or calcium chloride.',
        explanationWrong:
          'TRALI presents with acute respiratory distress and bilateral infiltrates, not primarily with vasopressor-refractory hypotension. While hyperkalemia from stored blood can occur during massive transfusion, the documented severe hypocalcemia is the more likely cause of the hemodynamic instability. Anaphylactic reactions typically present with urticaria, bronchospasm, and angioedema, which are not described here.',
        topic: 'Massive Transfusion Complications',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 18,
        questionText:
          'A patient with a cervical spinal cord injury at C4 develops neurogenic shock with a blood pressure of 78/48 mmHg and heart rate of 48 bpm. After 2 liters of isotonic crystalloid, the blood pressure remains 82/50 mmHg. Which vasopressor is most appropriate?',
        choices: {
          A: 'Phenylephrine (pure alpha-1 agonist)',
          B: 'Dobutamine (beta-1 agonist)',
          C: 'Milrinone (phosphodiesterase inhibitor)',
          D: 'Norepinephrine, which provides both alpha-1 vasoconstriction and beta-1 chronotropic support',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Neurogenic shock from high cervical spinal cord injury causes loss of sympathetic tone resulting in both vasodilation (hypotension) and bradycardia. Norepinephrine is preferred because it provides both alpha-1 adrenergic vasoconstriction to treat the vasodilation and beta-1 adrenergic effects to support heart rate and contractility. This dual action addresses both components of neurogenic shock pathophysiology.',
        explanationWrong:
          'Phenylephrine provides vasoconstriction but may worsen bradycardia through reflex mechanisms because it lacks beta-adrenergic effects. Dobutamine primarily increases contractility and heart rate but has limited vasoconstrictive effects, which may not adequately address the profound vasodilation. Milrinone is a vasodilator and positive inotrope that would worsen hypotension in neurogenic shock.',
        topic: 'Neurogenic Shock Management',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 19,
        questionText:
          'A 65-year-old patient with COPD exacerbation has been on invasive mechanical ventilation for 5 days. The patient meets readiness criteria for a spontaneous breathing trial. Which method provides the most reliable assessment of extubation readiness?',
        choices: {
          A: 'Measurement of maximum inspiratory pressure (MIP) alone',
          B: 'A 30-120 minute spontaneous breathing trial using T-piece or low-level pressure support (5-8 cmH2O) with monitoring for signs of intolerance',
          C: 'Measurement of minute ventilation alone',
          D: 'Assessment of the patient cough while still on full ventilatory support',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A spontaneous breathing trial (SBT) lasting 30-120 minutes using either a T-piece or low-level pressure support (5-8 cmH2O to compensate for ETT resistance) is the gold standard for assessing extubation readiness. During the SBT, the patient is monitored for signs of intolerance including tachypnea, tachycardia, desaturation, diaphoresis, accessory muscle use, and hemodynamic instability. Successful completion of the SBT is the best predictor of extubation success.',
        explanationWrong:
          'MIP (or NIF) alone has limited predictive value for extubation success and should be used as part of a comprehensive assessment, not in isolation. Minute ventilation alone does not reflect the patient ability to sustain spontaneous breathing or the breathing pattern quality. Assessing cough on full support does not simulate the post-extubation condition.',
        topic: 'Ventilator Liberation',
      },
      {
        miniExamId: exam27.id,
        questionIndex: 20,
        questionText:
          'A multidisciplinary ICU team is conducting a goals-of-care conference for a patient with multi-organ failure who has been in the ICU for 28 days without improvement. The patient family is struggling with decision-making. According to best practices in ICU communication, which approach is most appropriate?',
        choices: {
          A: 'Inform the family that further treatment is futile and recommend immediate withdrawal of care',
          B: 'Avoid discussing prognosis to protect the family from distress',
          C: 'Use a structured family conference that includes prognostic disclosure, exploration of patient values and goals, and shared decision-making with the care team',
          D: 'Defer all decisions to the attending physician to reduce family burden',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Best practices in ICU communication call for structured family conferences that include honest prognostic disclosure, exploration of the patient previously expressed values and wishes, and a shared decision-making process. The conference should involve the multidisciplinary team (physician, nursing, social work, chaplaincy as appropriate) and provide the family with time to ask questions and process information. This approach respects patient autonomy (through surrogate decision-making) while providing clinical guidance.',
        explanationWrong:
          'Declaring futility and recommending immediate withdrawal is directive rather than collaborative and does not explore the patient values. Avoiding prognosis discussion prevents informed decision-making and can lead to prolonged suffering and mistrust. Deferring all decisions to the physician eliminates the family role in representing the patient wishes and values, which is a core principle of surrogate decision-making.',
        topic: 'ICU Communication and Ethics',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 27 seeded (20 questions, isFree: false)')

  // ─── EXAM 28 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q7,Q12,Q16,Q20) B=5(Q1,Q5,Q9,Q13,Q18) C=5(Q4,Q8,Q11,Q15,Q17) D=5(Q2,Q6,Q10,Q14,Q19)
  const exam28 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 28',
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
          'A 52-year-old patient with diabetic ketoacidosis (DKA) has a blood glucose of 450 mg/dL, pH 7.12, HCO3 8 mEq/L, and potassium 5.8 mEq/L. After initiating insulin infusion and IV fluids, the potassium drops to 3.2 mEq/L within 4 hours. What is the mechanism of this rapid potassium shift?',
        choices: {
          A: 'Renal potassium wasting from osmotic diuresis',
          B: 'Insulin drives potassium intracellularly via activation of the Na+/K+ ATPase pump, and correction of acidosis further promotes intracellular potassium shift',
          C: 'Dilutional effect from IV fluid administration',
          D: 'Potassium binding to bicarbonate in the serum',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In DKA, total body potassium is depleted but serum levels appear normal or elevated due to extracellular shift from acidosis and insulin deficiency. When insulin is administered, it activates the Na+/K+ ATPase pump, driving potassium back into cells. Simultaneously, correction of acidosis causes hydrogen ions to move out of cells in exchange for potassium moving in. This dual mechanism can cause a precipitous drop in serum potassium. Potassium must be monitored every 1-2 hours and replaced aggressively.',
        explanationWrong:
          'While osmotic diuresis contributes to total body potassium depletion over time, the rapid 4-hour drop is primarily due to transcellular shift rather than renal losses. The dilutional effect of IV fluids is minimal compared to the transcellular shift caused by insulin. Potassium does not bind to bicarbonate in the serum in a clinically meaningful way.',
        topic: 'Endocrine Emergencies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 2,
        questionText:
          'A patient on airway pressure release ventilation (APRV) has P-high set at 28 cmH2O, T-high at 4.5 seconds, P-low at 0 cmH2O, and T-low at 0.5 seconds. The patient is not improving and the expiratory flow tracing shows that expiratory flow returns to zero before the next release. Which adjustment is most appropriate?',
        choices: {
          A: 'Increase P-high to 35 cmH2O',
          B: 'Increase T-low to 1.5 seconds for more complete exhalation',
          C: 'Increase T-high to 6 seconds',
          D: 'Decrease T-low to 0.3-0.4 seconds so that expiratory flow terminates at 50-75% of peak expiratory flow to maintain auto-PEEP and alveolar recruitment',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In APRV, the T-low is set short enough to maintain auto-PEEP (intrinsic PEEP) that prevents alveolar derecruitment. The target is to terminate the release phase when expiratory flow has declined to 50-75% of peak expiratory flow. If flow returns to zero, too much time is allowed for exhalation, resulting in complete lung emptying and loss of recruitment. Shortening T-low to 0.3-0.4 seconds prevents this derecruitment.',
        explanationWrong:
          'Increasing P-high to 35 cmH2O risks overdistension without addressing the derecruitment during the release phase. Increasing T-low to 1.5 seconds would worsen the problem by allowing even more complete exhalation and greater derecruitment. Increasing T-high does not address the fundamental issue of derecruitment during the release phase.',
        topic: 'Advanced Ventilator Modes',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 3,
        questionText:
          'A 78-year-old patient admitted for community-acquired pneumonia develops acute kidney injury with creatinine rising from 1.0 to 4.2 mg/dL over 48 hours. Urinalysis shows muddy brown granular casts. Fractional excretion of sodium (FeNa) is 4.2%. Which type of acute kidney injury is most likely?',
        choices: {
          A: 'Acute tubular necrosis (intrinsic renal injury)',
          B: 'Prerenal azotemia from volume depletion',
          C: 'Postrenal obstruction from urinary retention',
          D: 'Glomerulonephritis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Muddy brown granular casts are pathognomonic for acute tubular necrosis (ATN), which is an intrinsic renal injury. The elevated FeNa of 4.2% (greater than 2%) further supports ATN, as damaged tubules lose their ability to reabsorb sodium. In sepsis-associated ATN, renal tubular cells are injured by ischemia, inflammatory mediators, and nephrotoxins, leading to impaired reabsorption and cast formation from sloughed epithelial cells.',
        explanationWrong:
          'Prerenal azotemia typically presents with FeNa less than 1%, bland urinalysis or hyaline casts, and concentrated urine with high osmolality. Postrenal obstruction would show hydronephrosis on imaging and would not produce muddy brown granular casts. Glomerulonephritis presents with dysmorphic red blood cells, red blood cell casts, proteinuria, and typically a FeNa less than 1%.',
        topic: 'Acute Kidney Injury',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 4,
        questionText:
          'A patient on mechanical ventilation with a heated humidifier develops sudden oxygen desaturation. The respiratory therapist notices condensation filling the inspiratory limb of the circuit, and the patient coughs with each inspiration. What is the most appropriate immediate action?',
        choices: {
          A: 'Increase the FiO2 to 1.0',
          B: 'Suction the airway and obtain a chest radiograph',
          C: 'Drain the condensate from the ventilator circuit, ensuring it is not drained toward the patient, and verify humidifier temperature settings',
          D: 'Immediately change to a heat-moisture exchanger (HME)',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Excessive condensation (rainout) in the ventilator circuit can cause patient discomfort, trigger coughing, obstruct flow, increase resistance, and serve as a reservoir for bacterial contamination. The immediate action is to drain the condensate away from the patient (toward the exhalation side or into a water trap) and then check the humidifier temperature settings to prevent recurrence. The heated wire circuit temperature should be adjusted to minimize condensation.',
        explanationWrong:
          'Increasing FiO2 does not address the cause of the desaturation, which is circuit condensation causing flow interruption and coughing. While suctioning may be needed, the primary problem is circuit condensation that needs to be cleared first. Switching to an HME is not an emergency response and may not be appropriate for all patients, particularly those with thick secretions or high minute ventilation needs.',
        topic: 'Ventilator Circuit Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 5,
        questionText:
          'A 44-year-old patient with acute respiratory failure from Guillain-Barré syndrome has a negative inspiratory force (NIF) of -18 cmH2O and a vital capacity of 12 mL/kg. The patient reports increasing dyspnea and difficulty swallowing. Which parameter most strongly indicates the need for intubation?',
        choices: {
          A: 'SpO2 of 93% on room air',
          B: 'NIF worse than -20 to -30 cmH2O, vital capacity below 15-20 mL/kg, and declining trend with bulbar dysfunction indicate imminent respiratory failure requiring intubation',
          C: 'Respiratory rate of 22 breaths per minute',
          D: 'PaCO2 of 42 mmHg',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In Guillain-Barré syndrome, the 20/30/40 rule guides intubation decisions: intubate when vital capacity falls below 20 mL/kg, NIF is weaker than -30 cmH2O, or maximum expiratory pressure is below 40 cmH2O. This patient has a VC of 12 mL/kg (below 20) and NIF of -18 cmH2O (worse than -30), both meeting intubation criteria. Combined with bulbar dysfunction (difficulty swallowing) which increases aspiration risk, intubation should not be delayed.',
        explanationWrong:
          'SpO2 of 93% may appear reassuring but is a late finding in neuromuscular respiratory failure; oxygen saturation is maintained until ventilatory failure is advanced. A respiratory rate of 22 is mildly elevated but does not capture the degree of neuromuscular compromise. A PaCO2 of 42 mmHg is normal, but CO2 retention is a very late finding in neuromuscular respiratory failure and should not be waited for.',
        topic: 'Neuromuscular Respiratory Failure',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 6,
        questionText:
          'A 70-year-old patient has a central venous catheter placed in the right internal jugular vein. Post-procedure chest radiograph shows the catheter tip in the right atrium. What complication is the patient at highest risk for with this catheter position?',
        choices: {
          A: 'Superior vena cava syndrome',
          B: 'Pneumothorax',
          C: 'Air embolism during line removal',
          D: 'Cardiac arrhythmias and potential cardiac perforation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A central venous catheter tip positioned in the right atrium rather than at the cavoatrial junction or in the superior vena cava increases the risk of cardiac arrhythmias (particularly atrial ectopy and atrial fibrillation) from mechanical irritation of the atrial wall. More seriously, it increases the risk of cardiac perforation and tamponade. The catheter should be pulled back to position the tip at the cavoatrial junction, typically at the level of the carina on chest radiograph.',
        explanationWrong:
          'SVC syndrome is caused by external compression or thrombosis of the SVC, not by catheter tip malposition in the right atrium. Pneumothorax is a procedural complication of line insertion, not related to catheter tip position. Air embolism risk during removal is related to technique and patient positioning, not tip location.',
        topic: 'Central Venous Catheter Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 7,
        questionText:
          'A patient with severe ARDS has a PaO2/FiO2 ratio of 72 despite optimal ventilator settings, prone positioning, and neuromuscular blockade. The team is considering venovenous extracorporeal membrane oxygenation (VV-ECMO). Which criterion supports initiation of VV-ECMO?',
        choices: {
          A: 'P/F ratio below 80 for more than 6 hours despite optimal conventional management, with a potentially reversible cause of respiratory failure',
          B: 'P/F ratio below 200 for any duration',
          C: 'The patient has been mechanically ventilated for more than 14 days',
          D: 'The patient has an irreversible underlying pulmonary disease',
        },
        correctChoice: 'A',
        explanationCorrect:
          'VV-ECMO is considered in severe ARDS when the P/F ratio remains below 80 for more than 6 hours (or below 50 for more than 3 hours) despite optimized conventional management including lung-protective ventilation, high PEEP, prone positioning, and neuromuscular blockade. A critical criterion is that the underlying cause of respiratory failure must be potentially reversible, as ECMO serves as a bridge to recovery. The EOLIA trial supports earlier consideration of ECMO in severe, refractory ARDS.',
        explanationWrong:
          'A P/F ratio below 200 alone defines moderate ARDS and does not warrant ECMO without failure of conventional therapies. Duration of mechanical ventilation exceeding 7-10 days is actually a relative contraindication for ECMO due to increasing risk of ventilator-induced lung injury that may be irreversible. Irreversible underlying pulmonary disease is a contraindication for VV-ECMO, as the purpose is to bridge to recovery.',
        topic: 'Extracorporeal Life Support',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 8,
        questionText:
          'A patient with severe sepsis is started on continuous renal replacement therapy (CRRT) using continuous venovenous hemodiafiltration (CVVHDF). The prescribed dose is 25 mL/kg/hour. Which electrolyte abnormality is most commonly associated with CRRT that requires close monitoring?',
        choices: {
          A: 'Hypernatremia',
          B: 'Hyperkalemia',
          C: 'Hypophosphatemia, as phosphorus is efficiently cleared by CRRT and not adequately replaced by standard replacement fluids',
          D: 'Hypercalcemia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Hypophosphatemia is the most common electrolyte abnormality during CRRT because phosphorus is a small molecule that is efficiently cleared by both diffusion and convection. Standard CRRT replacement and dialysate fluids typically contain little to no phosphorus. Severe hypophosphatemia can cause respiratory muscle weakness, cardiac dysfunction, rhabdomyolysis, and impaired oxygen delivery (through decreased 2,3-DPG). Phosphorus should be monitored every 6-12 hours and supplemented aggressively.',
        explanationWrong:
          'CRRT typically maintains sodium balance effectively and hypernatremia is not the most common complication. CRRT efficiently removes potassium, so hypokalemia is more common than hyperkalemia during therapy. Hypocalcemia (not hypercalcemia) can occur with citrate anticoagulation, but this is a specific situation rather than the most common overall electrolyte abnormality.',
        topic: 'Renal Replacement Therapy',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 9,
        questionText:
          'A 56-year-old patient is admitted with acute ischemic stroke. CT angiography shows a large vessel occlusion of the left middle cerebral artery. The time from symptom onset is 3 hours. Blood pressure is 178/96 mmHg. Which combination of interventions is most appropriate?',
        choices: {
          A: 'IV alteplase only, as mechanical thrombectomy is contraindicated within 6 hours',
          B: 'IV alteplase followed by mechanical thrombectomy for large vessel occlusion within the treatment window',
          C: 'Mechanical thrombectomy only, without IV alteplase',
          D: 'Blood pressure reduction to below 140/90 mmHg before any intervention',
        },
        correctChoice: 'B',
        explanationCorrect:
          'For acute ischemic stroke with large vessel occlusion presenting within the treatment window, the recommended approach is IV alteplase (if within 4.5 hours of onset and no contraindications) followed by mechanical thrombectomy. Multiple randomized trials (MR CLEAN, EXTEND-IA, ESCAPE, SWIFT PRIME, REVASCAT) have demonstrated that endovascular thrombectomy combined with IV thrombolysis significantly improves functional outcomes. Thrombectomy should not be delayed for alteplase completion.',
        explanationWrong:
          'IV alteplase alone is inferior to the combination of alteplase plus thrombectomy for large vessel occlusions. Mechanical thrombectomy without IV alteplase may be appropriate when alteplase is contraindicated but not as the default approach when thrombolysis is eligible. Aggressive blood pressure reduction before treatment is not recommended, as permissive hypertension (up to 185/110 for thrombolysis candidates) helps maintain perfusion to the ischemic penumbra.',
        topic: 'Neurological Emergencies',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 10,
        questionText:
          'A mechanically ventilated patient with ARDS has the following settings: VT 350 mL (6 mL/kg IBW), RR 24, PEEP 14 cmH2O, FiO2 0.65. The plateau pressure is 28 cmH2O. What is the driving pressure, and does it meet the recommended threshold?',
        choices: {
          A: 'Driving pressure is 28 cmH2O, which exceeds the recommended threshold',
          B: 'Driving pressure is 42 cmH2O, which requires immediate intervention',
          C: 'Driving pressure is 6 cmH2O, which is below the recommended threshold',
          D: 'Driving pressure is 14 cmH2O (plateau pressure minus PEEP), which is below the recommended threshold of 15 cmH2O and is associated with better outcomes',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Driving pressure is calculated as plateau pressure minus PEEP: 28 - 14 = 14 cmH2O. A driving pressure below 15 cmH2O has been associated with improved survival in ARDS based on the meta-analysis by Amato et al. Driving pressure reflects the tidal strain on the aerated (baby) lung and may be a better predictor of outcomes than plateau pressure or tidal volume alone. This patient driving pressure of 14 cmH2O is at a favorable level.',
        explanationWrong:
          'Driving pressure is not equal to the plateau pressure alone; PEEP must be subtracted. 42 cmH2O would be the sum of plateau and PEEP, which is not how driving pressure is calculated. 6 cmH2O is the VT in mL/kg, not the driving pressure.',
        topic: 'ARDS Ventilator Mechanics',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 11,
        questionText:
          'A patient with acute decompensated heart failure has the following hemodynamics: CI 1.6 L/min/m², PCWP 30 mmHg, SVR 2200 dynes·s/cm⁵, MAP 72 mmHg. The patient is on dobutamine at 5 mcg/kg/min. What additional intervention would be most beneficial?',
        choices: {
          A: 'Add phenylephrine to increase afterload',
          B: 'Start dopamine at 10 mcg/kg/min',
          C: 'Add IV nitroglycerin or nitroprusside to reduce preload and afterload',
          D: 'Administer a 500 mL normal saline bolus',
        },
        correctChoice: 'C',
        explanationCorrect:
          'This patient has severely decompensated heart failure with low cardiac index, markedly elevated PCWP (indicating volume overload and high preload), and elevated SVR (indicating excessive afterload). Despite dobutamine, the cardiac index remains low. Adding a vasodilator such as IV nitroglycerin (which primarily reduces preload) or nitroprusside (which reduces both preload and afterload) will decrease the elevated filling pressures, reduce impedance to ejection, and improve forward cardiac output. The MAP of 72 mmHg provides adequate room for cautious vasodilator therapy.',
        explanationWrong:
          'Adding phenylephrine would further increase afterload, worsening cardiac output in a failing ventricle. High-dose dopamine would increase SVR and afterload, which would be counterproductive. A fluid bolus would worsen the already severely elevated PCWP and exacerbate pulmonary edema.',
        topic: 'Heart Failure Management',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 12,
        questionText:
          'A 66-year-old patient with a history of COPD and chronic hypercapnia (baseline PaCO2 55 mmHg, baseline HCO3 32 mEq/L) is brought to the ED obtunded. ABG: pH 7.22, PaCO2 88 mmHg, PaO2 48 mmHg, HCO3 35 mEq/L on 2 L nasal cannula. After intubation, what ventilator strategy is most appropriate?',
        choices: {
          A: 'Target a PaCO2 near the patient baseline of 55 mmHg rather than a normal PaCO2, to avoid post-hypercapnic metabolic alkalosis and hemodynamic instability',
          B: 'Target a PaCO2 of 40 mmHg to normalize blood gases',
          C: 'Set a tidal volume of 10 mL/kg IBW to rapidly reduce PaCO2',
          D: 'Use minimal ventilatory support to allow spontaneous breathing only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In a patient with chronic hypercapnia, the kidneys have compensated by retaining bicarbonate (baseline HCO3 32 mEq/L). Rapidly normalizing PaCO2 to 40 mmHg would leave the patient with an uncompensated metabolic alkalosis (high HCO3 with low PaCO2), resulting in severe alkalemia. This can cause cerebral vasoconstriction, seizures, cardiac arrhythmias, and hypokalemia. The ventilator should target the patient baseline PaCO2 of approximately 55 mmHg.',
        explanationWrong:
          'Targeting a normal PaCO2 of 40 mmHg ignores the chronic respiratory compensation and would cause dangerous alkalosis. Using 10 mL/kg tidal volumes violates lung-protective ventilation principles and would rapidly drop PaCO2, causing post-hypercapnic alkalosis. Minimal ventilatory support is inappropriate for a patient who was obtunded from acute-on-chronic respiratory failure.',
        topic: 'Mechanical Ventilation in Chronic Lung Disease',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 13,
        questionText:
          'A patient receiving total parenteral nutrition (TPN) in the ICU develops a blood glucose of 280 mg/dL, CO2 production has increased, and the respiratory quotient (RQ) measured by indirect calorimetry is 1.05. What does this RQ value indicate, and what action should be taken?',
        choices: {
          A: 'The patient is being underfed and TPN should be increased',
          B: 'The RQ of 1.05 indicates overfeeding with excess carbohydrate calories being converted to fat (lipogenesis), increasing CO2 production; reduce total calories or shift to a higher fat-to-carbohydrate ratio',
          C: 'The patient is oxidizing primarily protein, which is expected in critical illness',
          D: 'The elevated RQ is due to metabolic acidosis and is unrelated to nutrition',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A respiratory quotient above 1.0 indicates net lipogenesis, meaning excess carbohydrate calories are being converted to fat. This process generates more CO2 than is consumed in oxygen, raising the RQ above 1.0. The increased CO2 production can impair ventilator weaning by increasing ventilatory demand. Management includes reducing total caloric intake or shifting to a formula with a higher proportion of fat calories (fat has an RQ of 0.7) and fewer carbohydrate calories (carbohydrate has an RQ of 1.0).',
        explanationWrong:
          'An RQ of 1.05 clearly indicates overfeeding, not underfeeding. Protein oxidation produces an RQ of approximately 0.8, not above 1.0. The elevated RQ in this context is directly related to excess carbohydrate administration and lipogenesis, not metabolic acidosis.',
        topic: 'Nutrition in Critical Care',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 14,
        questionText:
          'A patient with acute respiratory failure is being ventilated with pressure-controlled ventilation at a set pressure of 20 cmH2O above PEEP (12 cmH2O). The delivered tidal volume has decreased from 450 mL to 280 mL over the past 2 hours without any change in ventilator settings. Which is the most likely explanation?',
        choices: {
          A: 'The patient respiratory drive has increased',
          B: 'The ventilator flow sensor is malfunctioning',
          C: 'The patient has improved lung compliance',
          D: 'Worsening lung compliance or increasing airway resistance is reducing the delivered tidal volume at the same set pressure',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In pressure-controlled ventilation, the ventilator delivers a set pressure and the resulting tidal volume depends on respiratory system compliance and airway resistance. If compliance decreases (stiffer lungs from worsening disease, atelectasis, pleural effusion, or pneumothorax) or resistance increases (bronchospasm, secretions, ETT obstruction), the delivered tidal volume will decrease at the same set pressure. This is a key difference from volume-controlled ventilation, where the pressure varies but volume remains constant.',
        explanationWrong:
          'Increased respiratory drive would not reduce delivered tidal volume in PCV; patient effort would actually add to the delivered volume. While flow sensor malfunction is possible, it is less likely than a clinical change in the patient. Improved lung compliance would increase, not decrease, the delivered tidal volume.',
        topic: 'Pressure-Controlled Ventilation',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 15,
        questionText:
          'An ICU patient on day 5 of mechanical ventilation develops a new fever of 38.9°C, purulent tracheal secretions, new infiltrate on chest radiograph, and WBC 14,500/mcL. Before starting empiric antibiotics for suspected VAP, which diagnostic specimen provides the most specific microbiological data?',
        choices: {
          A: 'Blood cultures from two separate sites',
          B: 'Sputum culture from oropharyngeal suctioning',
          C: 'Bronchoalveolar lavage (BAL) with quantitative cultures using a threshold of 10⁴ CFU/mL',
          D: 'Urine culture and sensitivity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Bronchoalveolar lavage with quantitative cultures is the most specific method for diagnosing VAP. The quantitative threshold of 10⁴ CFU/mL (or 10³ for protected specimen brush) helps distinguish true infection from colonization of the airways. BAL provides a specimen from the lower respiratory tract with less contamination from upper airway flora. Antibiotics should not be delayed for the procedure but should be started after obtaining the specimen.',
        explanationWrong:
          'Blood cultures should be obtained but are positive in only 10-25% of VAP cases and lack specificity for pulmonary infection. Oropharyngeal suctioning produces a specimen contaminated with upper airway colonizers and has poor specificity for diagnosing lower respiratory tract infection. Urine culture does not help diagnose pneumonia.',
        topic: 'VAP Diagnosis',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 16,
        questionText:
          'A patient with acute pancreatitis and ARDS has a PaO2/FiO2 ratio of 105 on PEEP 12 cmH2O. The patient is on enteral nutrition via nasojejunal tube. The abdominal pressure measured via bladder catheter is 22 mmHg. How does the elevated intra-abdominal pressure affect ventilator management?',
        choices: {
          A: 'Elevated intra-abdominal pressure increases chest wall compliance, requiring lower PEEP',
          B: 'The intra-abdominal pressure has no effect on ventilator management',
          C: 'Intra-abdominal pressure is only relevant for renal assessment',
          D: 'The abdominal pressure should be used to determine fluid responsiveness',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Elevated intra-abdominal pressure (intra-abdominal hypertension is defined as > 12 mmHg) reduces chest wall compliance by pushing the diaphragm cephalad, decreasing functional residual capacity and causing atelectasis. This leads to falsely elevated plateau pressures that reflect chest wall rather than lung parenchymal stiffness. Higher PEEP levels may be needed to counteract the elevated diaphragm and maintain alveolar recruitment. Esophageal pressure monitoring can help distinguish lung from chest wall contributions to plateau pressure.',
        explanationWrong:
          'Elevated intra-abdominal pressure decreases, not increases, chest wall compliance, typically requiring higher PEEP. The intra-abdominal pressure significantly affects ventilator management through its effects on diaphragmatic function and chest wall mechanics. While intra-abdominal pressure affects renal perfusion, its impact on respiratory mechanics in ventilated patients is equally important.',
        topic: 'Abdominal-Thoracic Interactions',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 17,
        questionText:
          'A 40-year-old patient with no past medical history is admitted with fulminant hepatic failure from acetaminophen overdose. The King College Criteria are used for prognostication. Which laboratory finding most strongly predicts the need for liver transplantation in acetaminophen-induced liver failure?',
        choices: {
          A: 'AST greater than 10,000 IU/L',
          B: 'Total bilirubin greater than 15 mg/dL',
          C: 'Arterial pH less than 7.30 after adequate fluid resuscitation, or the combination of grade III-IV encephalopathy, INR greater than 6.5, and creatinine greater than 3.4 mg/dL',
          D: 'Ammonia level greater than 200 mcmol/L',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The King College Criteria for acetaminophen-induced liver failure identify patients needing transplant listing. The strongest single predictor is arterial pH less than 7.30 after adequate fluid resuscitation (indicating severe lactic acidosis from hepatic failure). Alternatively, the combination of all three: grade III-IV hepatic encephalopathy, INR greater than 6.5, and serum creatinine greater than 3.4 mg/dL occurring within a 24-hour period also predicts poor survival without transplantation.',
        explanationWrong:
          'While markedly elevated AST reflects severe hepatocellular injury, AST level alone is not part of the King College Criteria for transplant listing. Total bilirubin is used in the non-acetaminophen King College Criteria but is not the primary predictor for acetaminophen cases. Ammonia levels correlate with encephalopathy severity but are not included in the King College Criteria.',
        topic: 'Hepatic Failure Prognostication',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 18,
        questionText:
          'A patient with an open abdomen after damage-control laparotomy for abdominal trauma is on mechanical ventilation. The patient develops progressive abdominal distension with increasing peak pressures and difficulty ventilating. Bladder pressure is 30 mmHg. Which immediate respiratory concern must be addressed?',
        choices: {
          A: 'Increase the respiratory rate to 30 to compensate for reduced tidal volume',
          B: 'Recognize that the recurrent abdominal compartment syndrome is severely restricting diaphragmatic excursion and communicate urgently with the surgical team for decompression',
          C: 'Decrease PEEP to 0 to reduce intrathoracic pressure',
          D: 'Increase the set tidal volume to overcome the resistance',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A bladder pressure of 30 mmHg with progressive abdominal distension, increasing ventilatory pressures, and difficulty ventilating indicates recurrent abdominal compartment syndrome. The elevated intra-abdominal pressure severely restricts diaphragmatic excursion, reducing lung volumes and compliance. The respiratory therapist must urgently communicate this to the surgical team, as definitive management requires surgical decompression. This exemplifies the critical role of interdisciplinary communication in ICU emergencies.',
        explanationWrong:
          'Increasing respiratory rate alone does not address the mechanical restriction of ventilation caused by abdominal compartment syndrome and may worsen auto-PEEP. Reducing PEEP to 0 would worsen atelectasis caused by the cephalad displacement of the diaphragm. Increasing tidal volume could cause dangerously high airway pressures and does not resolve the underlying abdominal compartment syndrome.',
        topic: 'Interdisciplinary ICU Communication',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 19,
        questionText:
          'A 62-year-old patient on pressure support ventilation (PSV) of 12 cmH2O and PEEP 5 cmH2O is being evaluated for extubation readiness. The cuff leak test is performed by deflating the ETT cuff during volume-controlled ventilation with a tidal volume of 500 mL. The difference between the set and exhaled tidal volume with the cuff deflated is 40 mL. What does this suggest?',
        choices: {
          A: 'The patient has adequate airway clearance',
          B: 'The patient has no risk of laryngeal edema',
          C: 'The cuff leak is adequate, indicating low risk of post-extubation stridor',
          D: 'A cuff leak of less than 110 mL (or less than 12-24% of VT) suggests the presence of laryngeal edema, and the patient is at increased risk for post-extubation stridor',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A cuff leak volume of less than 110 mL (or less than 12-24% of the delivered tidal volume) suggests significant laryngeal or upper airway edema. In this case, the leak of only 40 mL (8% of the 500 mL tidal volume) indicates minimal air passage around the ETT when the cuff is deflated, suggesting swelling or edema around the airway. These patients are at higher risk for post-extubation stridor and may benefit from systemic corticosteroids (methylprednisolone or dexamethasone) prior to extubation.',
        explanationWrong:
          'A small cuff leak does not assess airway clearance or cough strength. A small cuff leak actually suggests the presence of laryngeal edema, not its absence. A leak of 40 mL is inadequate, not adequate; an adequate cuff leak is typically greater than 110 mL or greater than 12-24% of tidal volume.',
        topic: 'Extubation Readiness Assessment',
      },
      {
        miniExamId: exam28.id,
        questionIndex: 20,
        questionText:
          'A patient with severe ARDS on VV-ECMO has blood flowing through the membrane lung at 4.5 L/min with a sweep gas flow of 6 L/min at FiO2 1.0. The patient arterial PaO2 is 58 mmHg. The pre-membrane blood is dark and the post-membrane blood is bright red. What is the most likely reason for the persistent hypoxemia despite adequate ECMO function?',
        choices: {
          A: 'Recirculation of oxygenated blood returning through the return cannula being drawn back into the drainage cannula, reducing the effective oxygen delivery to the patient',
          B: 'Membrane lung failure requiring circuit replacement',
          C: 'Insufficient anticoagulation',
          D: 'Sweep gas flow is too high',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The fact that post-membrane blood is bright red confirms the membrane lung is functioning properly (adequate gas exchange across the membrane). Persistent arterial hypoxemia despite good membrane function strongly suggests recirculation, where oxygenated blood from the return cannula is immediately drawn back into the drainage cannula without passing through the patient systemic circulation. This reduces effective oxygen delivery. Recirculation is assessed by comparing pre-membrane and post-membrane oxygen saturations and can be reduced by adjusting cannula positions or reducing flow rates.',
        explanationWrong:
          'If the membrane were failing, the post-membrane blood would not be bright red (well-oxygenated). Insufficient anticoagulation would cause clot formation in the circuit, potentially affecting membrane function, but the post-membrane blood color confirms adequate membrane gas exchange. Excessive sweep gas flow would increase CO2 removal but would not cause hypoxemia; if anything, higher sweep gas improves gas exchange.',
        topic: 'ECMO Troubleshooting',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 28 seeded (20 questions, isFree: false)')

  // ─── EXAM 29 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q2,Q8,Q11,Q15,Q19) B=5(Q4,Q6,Q10,Q14,Q17) C=5(Q1,Q5,Q9,Q13,Q20) D=5(Q3,Q7,Q12,Q16,Q18)
  const exam29 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 29',
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
          'A 59-year-old patient with acute exacerbation of interstitial lung disease is on high-flow nasal cannula at 60 L/min with FiO2 0.70. SpO2 is 85% and the patient is visibly tachypneic at 38 breaths per minute with paradoxical abdominal movement. The ROX index (SpO2/FiO2 divided by respiratory rate) is calculated. What does a ROX index below 3.85 at 12 hours indicate?',
        choices: {
          A: 'The patient is ready for weaning to standard nasal cannula',
          B: 'High-flow therapy is adequate and should be continued',
          C: 'A ROX index below 3.85 at 12 hours predicts high-flow nasal cannula failure and the need for escalation to intubation',
          D: 'The patient should be placed on BiPAP before considering intubation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The ROX index (SpO2/FiO2 divided by respiratory rate) was developed to predict high-flow nasal cannula (HFNC) failure. A ROX index below 3.85 measured at 2, 6, or 12 hours identifies patients at high risk of HFNC failure who require escalation to intubation. For this patient: (85/70) / 38 = 1.21 / 38 = 0.032, which when corrected to the standard calculation of (85/0.70) / 38 = 121.4 / 38 = 3.19, falls well below 3.85, indicating a high likelihood of needing intubation.',
        explanationWrong:
          'A ROX index below 3.85 indicates failure of HFNC, not readiness for weaning. Continuing the current therapy despite a failing ROX index delays necessary escalation and risks respiratory arrest. While BiPAP may be considered in some cases, the combination of paradoxical abdominal breathing, severe tachypnea, and low ROX index suggests the patient needs intubation rather than another trial of noninvasive support.',
        topic: 'High-Flow Nasal Cannula Assessment',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 2,
        questionText:
          'A patient with septic shock is on vasopressin 0.04 units/min and norepinephrine 0.3 mcg/kg/min. The MAP is 62 mmHg and the lactate has risen from 4.2 to 7.8 mmol/L over 4 hours despite 45 mL/kg of crystalloid resuscitation. Mixed venous oxygen saturation (SvO2) is 52%. What does the low SvO2 indicate?',
        choices: {
          A: 'Oxygen delivery is inadequate relative to oxygen consumption, indicating tissue hypoperfusion and increased oxygen extraction',
          B: 'The patient is over-resuscitated with fluids',
          C: 'The patient has adequate tissue perfusion',
          D: 'The vasopressin dose should be decreased',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A normal SvO2 is 65-75%. An SvO2 of 52% indicates that oxygen delivery (DO2) is inadequate relative to oxygen consumption (VO2), and tissues are extracting a greater-than-normal proportion of delivered oxygen to meet metabolic demands. Combined with a rising lactate and hemodynamic instability, this confirms tissue hypoperfusion. Interventions should focus on improving oxygen delivery through optimizing cardiac output, hemoglobin, and oxygen saturation.',
        explanationWrong:
          'Over-resuscitation would not explain a low SvO2; excessive volume without improving cardiac output would be reflected differently. An SvO2 of 52% is markedly abnormal and indicates inadequate tissue perfusion, not adequacy. Decreasing vasopressin in a patient with persistent hypotension and rising lactate would worsen hemodynamics.',
        topic: 'Oxygen Delivery and Consumption',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 3,
        questionText:
          'A 35-year-old patient with no medical history presents with acute respiratory failure after near-drowning in cold fresh water. The core temperature is 32°C. After intubation, the chest radiograph shows bilateral diffuse infiltrates. ABG: pH 7.18, PaCO2 52 mmHg, PaO2 48 mmHg on FiO2 1.0. Which initial ventilator strategy is most appropriate?',
        choices: {
          A: 'High tidal volume ventilation at 12 mL/kg to recruit flooded alveoli',
          B: 'CPAP at 20 cmH2O to maximize recruitment',
          C: 'Immediate initiation of inhaled nitric oxide',
          D: 'Lung-protective ventilation with 6 mL/kg IBW, moderate-high PEEP, and rewarming to normothermia',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Near-drowning causes surfactant washout, alveolar flooding, and diffuse pulmonary injury resembling ARDS. Lung-protective ventilation with low tidal volumes (6 mL/kg IBW) and moderate-high PEEP is the standard approach, identical to ARDS management. Simultaneously, active rewarming to normothermia (targeting 36-37°C) is critical, as hypothermia causes coagulopathy, cardiac arrhythmias, and impairs immune function. Prognosis should not be determined until the patient is normothermic.',
        explanationWrong:
          'High tidal volume ventilation would worsen ventilator-induced lung injury in already damaged lungs. CPAP alone at 20 cmH2O does not provide the ventilatory support needed for a patient with severe hypercapnic and hypoxemic respiratory failure. Inhaled nitric oxide may have a role as a rescue therapy for refractory hypoxemia but is not the initial ventilator strategy.',
        topic: 'Submersion Injury',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 4,
        questionText:
          'A 72-year-old patient with a permanent pacemaker set to VVI mode at 70 bpm develops sepsis. The heart rate on the monitor shows a regular rate of 70 bpm despite a temperature of 39.5°C and severe sepsis. The medical team is concerned about the lack of tachycardic response. What is the most important consideration?',
        choices: {
          A: 'The pacemaker should be immediately reprogrammed to a higher rate',
          B: 'The fixed-rate pacemaker prevents a compensatory tachycardic response; heart rate cannot be used as a reliable indicator of clinical deterioration in this patient',
          C: 'The patient has an adequate autonomic response to sepsis',
          D: 'The pacemaker is malfunctioning and should be interrogated emergently',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A VVI pacemaker paces the ventricle at a set rate and inhibits when native ventricular activity is detected. If the patient native rate does not exceed the set pacing rate of 70 bpm (due to medication effects, sick sinus syndrome, or AV block), the pacemaker will maintain the rate at 70 regardless of physiologic demand. In sepsis, the expected tachycardic response is masked, and heart rate cannot be relied upon as a marker of severity. Other parameters (lactate, MAP, urine output, SvO2) must be used to guide resuscitation.',
        explanationWrong:
          'Immediate reprogramming of the pacemaker rate is not the first priority and may not be necessary if the patient can be managed with fluid resuscitation and vasopressors. The patient is not having an adequate autonomic response because the pacemaker is capping the heart rate at 70 bpm. The pacemaker is functioning as programmed at VVI 70 bpm; this is not a malfunction.',
        topic: 'Cardiac Devices in Critical Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 5,
        questionText:
          'A mechanically ventilated patient develops worsening oxygenation. Point-of-care lung ultrasound reveals absent lung sliding with a "barcode sign" (stratosphere sign) on M-mode over the left chest. What is the most likely diagnosis?',
        choices: {
          A: 'Left-sided pleural effusion',
          B: 'Left lower lobe consolidation',
          C: 'Left-sided pneumothorax',
          D: 'Normal lung parenchyma',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Absent lung sliding with the "barcode sign" (or stratosphere sign) on M-mode ultrasound is highly suggestive of pneumothorax. Normal lung has a "seashore sign" on M-mode, with the pleural line showing granular motion below it. When air separates the visceral and parietal pleura (pneumothorax), lung sliding disappears and the M-mode shows only horizontal lines (barcode/stratosphere pattern). Finding a lung point (the transition between sliding and non-sliding) confirms the diagnosis with near 100% specificity.',
        explanationWrong:
          'A pleural effusion would show an anechoic space between the visceral and parietal pleura with a "quad sign" and preserved lung sliding above the effusion. Consolidation would show tissue-like echotexture (hepatization) with dynamic air bronchograms, not absent lung sliding. Normal lung shows lung sliding with a "seashore sign" on M-mode.',
        topic: 'Point-of-Care Ultrasound',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 6,
        questionText:
          'A patient with acute liver failure and grade IV hepatic encephalopathy requires intubation for airway protection. The INR is 4.8 and the platelet count is 42,000/mcL. Which approach to airway management is most appropriate?',
        choices: {
          A: 'Delay intubation until coagulopathy is fully corrected',
          B: 'Proceed with intubation using the most experienced operator, prepare for difficult airway, avoid nasotracheal route, and have blood products available',
          C: 'Perform a blind nasotracheal intubation',
          D: 'Place a surgical airway prophylactically before the patient deteriorates further',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In acute liver failure with grade IV encephalopathy, intubation for airway protection should not be delayed for coagulopathy correction, as the patient is at immediate risk of aspiration and respiratory failure. The most experienced operator should perform the intubation using an orotracheal approach (nasotracheal is contraindicated due to bleeding risk with coagulopathy). Blood products (FFP, platelets, cryoprecipitate) should be available but given only if bleeding occurs rather than prophylactically, as volume loading can worsen cerebral edema.',
        explanationWrong:
          'Delaying intubation to correct coagulopathy risks aspiration and respiratory arrest in a patient with no protective reflexes. Blind nasotracheal intubation is absolutely contraindicated in coagulopathic patients due to the risk of severe nasopharyngeal hemorrhage. A prophylactic surgical airway is unnecessarily invasive and carries excessive bleeding risk in this coagulopathic patient.',
        topic: 'Airway Management in Coagulopathy',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 7,
        questionText:
          'A patient with severe ARDS on VV-ECMO has the following: ECMO flow 4.5 L/min, sweep gas 5 L/min, ventilator settings VT 200 mL (3 mL/kg), RR 10, PEEP 12, FiO2 0.30, plateau pressure 22 cmH2O. The patient is hemodynamically stable. What is the purpose of maintaining these "rest settings" on the ventilator while on ECMO?',
        choices: {
          A: 'To maintain normal tidal volumes for alveolar ventilation',
          B: 'To allow high FiO2 delivery through the native lungs',
          C: 'To maximize minute ventilation and CO2 removal through the lungs',
          D: 'To minimize ventilator-induced lung injury while maintaining alveolar recruitment and preventing atelectasis during lung recovery',
        },
        correctChoice: 'D',
        explanationCorrect:
          'While on VV-ECMO, the membrane lung assumes the primary responsibility for gas exchange, allowing the native lungs to "rest" and recover. Ventilator rest settings use very low tidal volumes (3-4 mL/kg), low respiratory rate, moderate PEEP (to prevent atelectasis), low FiO2, and low plateau pressures. This strategy minimizes ventilator-induced lung injury (volutrauma, barotrauma, atelectrauma, and biotrauma) while maintaining enough PEEP to prevent complete lung collapse.',
        explanationWrong:
          'The purpose is specifically to reduce tidal volumes below standard lung-protective levels, not to maintain normal volumes. Low FiO2 (0.30) through the ventilator shows that the native lungs are not being relied upon for oxygenation. Minimizing minute ventilation, not maximizing it, is the goal; CO2 removal is handled by the membrane lung sweep gas.',
        topic: 'ECMO Ventilator Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 8,
        questionText:
          'A 48-year-old patient in the ICU develops torsades de pointes on the cardiac monitor. The QTc interval was previously noted to be 580 ms. The patient has a pulse but is hemodynamically unstable with a blood pressure of 78/42 mmHg. What is the first-line pharmacologic treatment?',
        choices: {
          A: 'IV magnesium sulfate 2 g bolus over 1-2 minutes',
          B: 'Amiodarone 150 mg IV bolus',
          C: 'Lidocaine 1.5 mg/kg IV bolus',
          D: 'Procainamide 20 mg/min IV infusion',
        },
        correctChoice: 'A',
        explanationCorrect:
          'IV magnesium sulfate is the first-line pharmacologic treatment for torsades de pointes, regardless of the serum magnesium level. Magnesium stabilizes the cardiac membrane, shortens the action potential duration, and suppresses early afterdepolarizations that drive torsades. A 2 g bolus is given over 1-2 minutes for hemodynamically unstable patients. If the patient deteriorates to pulseless torsades, immediate defibrillation is required. Isoproterenol or overdrive pacing may be used if magnesium is ineffective.',
        explanationWrong:
          'Amiodarone prolongs the QT interval and could worsen torsades de pointes. Lidocaine does not effectively treat torsades and is used for monomorphic ventricular tachycardia. Procainamide prolongs the QT interval and is contraindicated in torsades de pointes as it could worsen the arrhythmia.',
        topic: 'Cardiac Arrhythmia Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 9,
        questionText:
          'A 65-year-old patient with COPD and cor pulmonale is on mechanical ventilation. Hemodynamic monitoring shows: PAP 55/30 mmHg, PCWP 10 mmHg, CI 2.0 L/min/m², CVP 18 mmHg. The patient develops worsening right ventricular failure. Which ventilator adjustment would best support right ventricular function?',
        choices: {
          A: 'Increase PEEP to 18 cmH2O to improve oxygenation',
          B: 'Increase FiO2 to 1.0 and maintain current PEEP',
          C: 'Reduce PEEP to minimize right ventricular afterload while using the lowest FiO2 to maintain SpO2 above 90% and correcting any hypercapnia that may worsen pulmonary vasoconstriction',
          D: 'Switch to inverse ratio ventilation',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In right ventricular failure, minimizing right ventricular afterload is critical. High PEEP increases intrathoracic pressure and pulmonary vascular resistance, increasing RV afterload. Reducing PEEP to the minimum required minimizes this effect. Hypoxemia and hypercapnia both cause pulmonary vasoconstriction, worsening RV afterload, so both should be corrected. The goal is to maintain adequate oxygenation (SpO2 > 90%) with the lowest effective PEEP and FiO2 while avoiding respiratory acidosis.',
        explanationWrong:
          'Increasing PEEP to 18 cmH2O would further increase pulmonary vascular resistance and worsen right ventricular failure. FiO2 of 1.0 alone does not address the mechanical effect of PEEP on RV afterload and risks oxygen toxicity. Inverse ratio ventilation increases mean airway pressure, which would worsen RV afterload similar to high PEEP.',
        topic: 'Right Heart Failure and Ventilation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 10,
        questionText:
          'A critically ill patient develops ICU-acquired weakness (ICUAW) after 14 days of mechanical ventilation for septic shock. The patient was treated with corticosteroids and continuous neuromuscular blockade for 5 days. Nerve conduction studies show reduced compound muscle action potential amplitudes with preserved conduction velocities. What is the most likely diagnosis?',
        choices: {
          A: 'Guillain-Barré syndrome',
          B: 'Critical illness polyneuropathy (CIP) characterized by axonal degeneration of motor and sensory nerves',
          C: 'Myasthenia gravis exacerbation',
          D: 'Central nervous system lesion',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Critical illness polyneuropathy (CIP) is characterized by axonal degeneration of peripheral motor and sensory nerves, presenting on nerve conduction studies as reduced compound muscle action potential (CMAP) amplitudes with preserved conduction velocities. This distinguishes it from demyelinating neuropathies (like GBS) where conduction velocities are reduced. Risk factors include sepsis, multi-organ failure, hyperglycemia, corticosteroid use, and prolonged neuromuscular blockade. CIP and critical illness myopathy (CIM) frequently coexist.',
        explanationWrong:
          'Guillain-Barré syndrome is typically a demyelinating neuropathy with slowed conduction velocities, conduction block, and temporal dispersion. The clinical context of ICU-acquired weakness after prolonged sepsis and neuromuscular blockade points to CIP rather than GBS. Myasthenia gravis would show a decremental response on repetitive nerve stimulation, not reduced CMAPs. A central nervous system lesion would not produce the peripheral nerve conduction abnormalities described.',
        topic: 'ICU-Acquired Weakness',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 11,
        questionText:
          'A patient with massive hemoptysis (estimated 600 mL in 2 hours) is intubated with a standard 8.0 mm endotracheal tube. The bleeding is coming from the right lung based on bronchoscopic visualization. Oxygenation is deteriorating despite suctioning. What is the most appropriate next step to protect the unaffected lung?',
        choices: {
          A: 'Advance the ETT into the left mainstem bronchus under bronchoscopic guidance to isolate and ventilate the non-bleeding lung while blocking blood from entering it',
          B: 'Place the patient in the right lateral decubitus position',
          C: 'Increase PEEP to 20 cmH2O',
          D: 'Administer tranexamic acid IV only',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In massive hemoptysis with an identified bleeding source (right lung), advancing the existing ETT into the left mainstem bronchus under bronchoscopic guidance effectively isolates the non-bleeding lung. This prevents blood from flooding the left lung while maintaining ventilation. Alternatively, a double-lumen endotracheal tube can be placed to isolate both lungs independently. Lung isolation is the critical emergency intervention to prevent asphyxiation from bilateral flooding.',
        explanationWrong:
          'While positioning the patient with the bleeding lung dependent (right lateral decubitus) uses gravity to reduce blood spillage to the left lung, it is a temporizing measure and less definitive than bronchial isolation. Increasing PEEP does not address the source of bleeding or prevent contralateral contamination. Tranexamic acid may be used as an adjunct but does not protect the unaffected lung from blood flooding.',
        topic: 'Massive Hemoptysis Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 12,
        questionText:
          'A patient with thyroid storm is admitted to the ICU with heart rate 168 bpm, temperature 40.5°C, blood pressure 190/95 mmHg, and altered mental status. Free T4 is markedly elevated. Which medication sequence is most appropriate for acute management?',
        choices: {
          A: 'Methimazole first, then iodine solution 1 hour later',
          B: 'Radioactive iodine ablation',
          C: 'Levothyroxine to suppress TSH',
          D: 'Propranolol for rate control, followed by thionamide (PTU or methimazole) to block new hormone synthesis, then iodine solution (at least 1 hour after thionamide) to block hormone release',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Thyroid storm requires a specific medication sequence. First, beta-blockers (propranolol is preferred as it also inhibits peripheral T4-to-T3 conversion) control the sympathetic hyperactivity. Second, a thionamide (PTU is preferred in thyroid storm because it also blocks peripheral conversion) blocks new thyroid hormone synthesis. Third, iodine solution (SSKI or Lugol solution) must be given at least 1 hour AFTER the thionamide to block release of preformed hormone from the thyroid gland. Giving iodine before thionamide could paradoxically increase hormone synthesis (Jod-Basedow effect). Glucocorticoids are also added to inhibit peripheral conversion.',
        explanationWrong:
          'Starting methimazole first without beta-blockade leaves the patient at risk for cardiovascular collapse from uncontrolled tachycardia. Radioactive iodine is contraindicated in thyroid storm as it causes thyroid cell destruction and release of stored hormone, potentially worsening the crisis. Levothyroxine would worsen thyroid storm by adding more thyroid hormone.',
        topic: 'Endocrine Emergencies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 13,
        questionText:
          'A critically ill patient has a central venous catheter with central venous pressure (CVP) monitoring. The CVP waveform shows prominent "cannon A waves." What is the most likely underlying condition?',
        choices: {
          A: 'Severe tricuspid regurgitation',
          B: 'Cardiac tamponade',
          C: 'Complete heart block or junctional rhythm, where the atrium contracts against a closed tricuspid valve',
          D: 'Hypovolemia',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Cannon A waves in the CVP waveform occur when the atrium contracts against a closed tricuspid valve. This happens in complete (third-degree) heart block, where the atria and ventricles beat independently, causing intermittent simultaneous atrial contraction during ventricular systole. It also occurs with junctional rhythms and ventricular pacing without atrial tracking. The large pressure wave is transmitted retrograde through the venous system and is visible on the CVP tracing as prominent tall waves.',
        explanationWrong:
          'Tricuspid regurgitation produces prominent "V waves" (or CV waves), not cannon A waves, as blood regurgitates into the right atrium during ventricular systole. Cardiac tamponade shows elevated and equalized filling pressures with a characteristic x descent but blunted y descent. Hypovolemia shows low CVP values without characteristic waveform abnormalities.',
        topic: 'Hemodynamic Waveform Interpretation',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 14,
        questionText:
          'A 55-year-old patient with hospital-acquired pneumonia has been on piperacillin-tazobactam for 5 days. Sputum culture now grows Pseudomonas aeruginosa that is resistant to piperacillin-tazobactam but sensitive to cefepime, meropenem, and tobramycin. Which antibiotic change is most appropriate?',
        choices: {
          A: 'Continue piperacillin-tazobactam at a higher dose',
          B: 'Switch to cefepime or meropenem based on susceptibility results, considering local antibiogram patterns and patient-specific factors',
          C: 'Add tobramycin to the current regimen without changing the primary antibiotic',
          D: 'Discontinue all antibiotics as the patient has completed 5 days',
        },
        correctChoice: 'B',
        explanationCorrect:
          'When culture and sensitivity data identify resistance to the current antibiotic, therapy should be de-escalated to the narrowest-spectrum effective agent. Both cefepime and meropenem are appropriate options for Pseudomonas pneumonia. The choice between them should consider local antibiogram data (to preserve carbapenem use if possible), patient renal function, and prior antibiotic exposure. Generally, cefepime would be preferred to spare carbapenems if local susceptibility patterns support it.',
        explanationWrong:
          'Continuing a drug to which the organism is resistant, even at higher doses, will not overcome resistance and risks treatment failure. Adding an aminoglycoside to an ineffective primary antibiotic does not provide adequate coverage and exposes the patient to aminoglycoside toxicity unnecessarily. Five days may be appropriate for uncomplicated infections, but confirmed Pseudomonas pneumonia with initial inappropriate therapy typically requires a full course with an effective antibiotic.',
        topic: 'Antimicrobial Stewardship',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 15,
        questionText:
          'A 58-year-old patient with ARDS is on prone positioning. The nurse reports that the patient endotracheal tube cuff pressure has increased from 24 to 38 cmH2O since being proned. What is the most appropriate action?',
        choices: {
          A: 'Reduce the cuff pressure to 20-25 cmH2O, as prone positioning can increase cuff pressure due to changes in neck position, and excessive cuff pressure risks tracheal mucosal ischemia',
          B: 'Ignore the increased cuff pressure during prone positioning',
          C: 'Immediately return the patient to the supine position',
          D: 'Increase the cuff pressure further to prevent aspiration',
        },
        correctChoice: 'A',
        explanationCorrect:
          'During prone positioning, changes in neck and head position can alter the ETT position within the trachea and increase cuff pressure against the tracheal wall. Cuff pressure should be checked and maintained at 20-30 cmH2O (ideally 20-25 cmH2O) after each position change. A pressure of 38 cmH2O exceeds the capillary perfusion pressure of the tracheal mucosa (approximately 25-35 cmH2O), risking ischemia, necrosis, and long-term tracheal stenosis.',
        explanationWrong:
          'Ignoring elevated cuff pressure risks tracheal mucosal ischemia, necrosis, and potential tracheo-innominate or tracheoesophageal fistula formation. Returning to supine solely for a cuff pressure adjustment is unnecessary and interrupts the therapeutic benefit of prone positioning. Increasing cuff pressure above 30 cmH2O would worsen the risk of tracheal injury.',
        topic: 'Prone Positioning Safety',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 16,
        questionText:
          'A patient on mechanical ventilation develops acute hypotension with elevated peak and plateau pressures, absent breath sounds on the right, and tracheal deviation to the left. The ventilator is alarming for high pressure. What should the respiratory therapist do FIRST?',
        choices: {
          A: 'Obtain a stat chest radiograph',
          B: 'Perform an arterial blood gas analysis',
          C: 'Administer a 500 mL normal saline bolus',
          D: 'Disconnect the patient from the ventilator, provide manual ventilation with a bag-valve, and notify the physician for immediate needle decompression of a suspected tension pneumothorax',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The clinical presentation is classic for tension pneumothorax: hypotension, elevated airway pressures, absent breath sounds on the affected side, and tracheal deviation away from the affected side. This is a clinical diagnosis that requires immediate intervention. The respiratory therapist should disconnect the ventilator (positive pressure ventilation worsens tension pneumothorax), provide manual ventilation if needed, and immediately notify the physician for needle decompression at the second intercostal space, midclavicular line, followed by chest tube placement.',
        explanationWrong:
          'Waiting for a chest radiograph delays treatment of a life-threatening emergency that requires immediate intervention. ABG analysis does not change the immediate management of tension pneumothorax. A fluid bolus may temporarily increase blood pressure but does not address the underlying tension pneumothorax, which will continue to worsen and lead to cardiac arrest if not decompressed.',
        topic: 'Emergency Pneumothorax Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 17,
        questionText:
          'A 70-year-old patient with end-stage renal disease on hemodialysis is admitted to the ICU with hyperkalemia (K+ 7.2 mEq/L). The ECG shows peaked T waves and widened QRS complexes. Which medication should be administered FIRST?',
        choices: {
          A: 'Sodium polystyrene sulfonate (Kayexalate) 30 g orally',
          B: 'IV calcium gluconate 10 mL of 10% solution to stabilize the cardiac membrane',
          C: 'Regular insulin 10 units IV with dextrose 50% 25 g',
          D: 'Sodium bicarbonate 50 mEq IV',
        },
        correctChoice: 'B',
        explanationCorrect:
          'With ECG changes from hyperkalemia (peaked T waves and widened QRS), the immediate priority is cardiac membrane stabilization with IV calcium gluconate. Calcium directly antagonizes the membrane effects of hyperkalemia on the heart, reducing the risk of fatal arrhythmias. It works within 1-3 minutes but does not lower the potassium level. After cardiac stabilization, potassium-lowering measures (insulin/dextrose, beta-agonists, dialysis) should follow. The sequence is: stabilize first, shift second, remove third.',
        explanationWrong:
          'Kayexalate takes hours to lower potassium and is too slow for acute hyperkalemic emergency with ECG changes. Insulin with dextrose shifts potassium intracellularly and should be given after cardiac stabilization but takes 15-30 minutes to work. Sodium bicarbonate has limited efficacy in lowering potassium and should not precede calcium in an emergency with ECG changes.',
        topic: 'Electrolyte Emergencies',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 18,
        questionText:
          'A 45-year-old patient is admitted after a drug overdose with an unknown substance. The patient has miotic (pinpoint) pupils, respiratory rate of 6 breaths per minute, GCS of 6, and is cyanotic. After intubation and stabilization, which antidote should be administered?',
        choices: {
          A: 'Flumazenil',
          B: 'N-acetylcysteine',
          C: 'Atropine',
          D: 'Naloxone, a competitive opioid receptor antagonist',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The classic toxidrome of miotic (pinpoint) pupils, respiratory depression, and decreased consciousness is consistent with opioid overdose. Naloxone is a competitive antagonist at opioid receptors that rapidly reverses respiratory depression, sedation, and miosis. It should be titrated in small increments (0.04-0.4 mg) to restore adequate ventilation without precipitating acute withdrawal in opioid-dependent patients. The half-life of naloxone (30-90 minutes) may be shorter than the opioid, requiring repeated dosing or a continuous infusion.',
        explanationWrong:
          'Flumazenil reverses benzodiazepine overdose but benzodiazepines cause mydriasis (dilated pupils), not miosis, and flumazenil can precipitate seizures. N-acetylcysteine is the antidote for acetaminophen toxicity, which does not present with the described toxidrome. Atropine is used for organophosphate poisoning, which presents with the SLUDGE/DUMBELS toxidrome, not the opioid toxidrome.',
        topic: 'Toxicology in Critical Care',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 19,
        questionText:
          'A patient with severe traumatic brain injury (GCS 5) is being managed in the ICU. The ICP is 18 mmHg and the MAP is 85 mmHg. The neurosurgery team has recommended maintaining a cerebral perfusion pressure (CPP) above 60 mmHg. What is the current CPP, and is it adequate?',
        choices: {
          A: 'CPP is 67 mmHg (MAP minus ICP), which meets the target of greater than 60 mmHg',
          B: 'CPP is 103 mmHg, which is too high and needs treatment',
          C: 'CPP is 85 mmHg, which equals the MAP',
          D: 'CPP cannot be calculated without a pulmonary artery catheter',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Cerebral perfusion pressure is calculated as MAP minus ICP: 85 - 18 = 67 mmHg. This exceeds the recommended minimum CPP target of 60 mmHg (Brain Trauma Foundation guidelines recommend maintaining CPP between 60-70 mmHg). CPP represents the pressure gradient driving cerebral blood flow and is the primary monitored parameter in TBI management alongside ICP. Maintaining adequate CPP while controlling ICP is fundamental to preventing secondary brain injury.',
        explanationWrong:
          'CPP of 103 mmHg would require adding MAP and ICP, which is not the correct formula. CPP is not equal to MAP; it accounts for the opposing pressure of ICP. A pulmonary artery catheter is not needed to calculate CPP; only an arterial line (for MAP) and an ICP monitor are required.',
        topic: 'Traumatic Brain Injury Management',
      },
      {
        miniExamId: exam29.id,
        questionIndex: 20,
        questionText:
          'An ICU team is implementing a ventilator bundle to reduce ventilator-associated events. Which combination of evidence-based interventions should be included in the bundle?',
        choices: {
          A: 'Routine scheduled tracheostomy at day 7, prophylactic antibiotics, and deep sedation',
          B: 'Daily chest radiographs, high-dose proton pump inhibitors, and continuous neuromuscular blockade',
          C: 'Head-of-bed elevation to 30-45 degrees, daily sedation interruption with spontaneous breathing trials, DVT prophylaxis, peptic ulcer prophylaxis, and daily assessment of readiness to extubate',
          D: 'Prone positioning for all ventilated patients, stress-dose steroids, and permissive hypotension',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The evidence-based ventilator bundle includes: head-of-bed elevation to 30-45 degrees to reduce aspiration risk, daily sedation vacation (interruption) paired with spontaneous breathing trials to assess extubation readiness, DVT prophylaxis, stress ulcer (peptic ulcer) prophylaxis, and daily assessment of readiness for liberation from mechanical ventilation. Oral care with chlorhexidine and subglottic secretion drainage are additional measures included in some bundles. Implementation of the complete bundle has been shown to significantly reduce VAP rates and ventilator days.',
        explanationWrong:
          'Routine tracheostomy at day 7 is not evidence-based; timing should be individualized. Prophylactic antibiotics increase resistance without reducing VAP. Deep sedation is associated with longer ventilation duration and worse outcomes. Continuous neuromuscular blockade increases the risk of ICU-acquired weakness. Prone positioning is reserved for severe ARDS, not all ventilated patients.',
        topic: 'Ventilator Bundle Implementation',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 29 seeded (20 questions, isFree: false)')

  // ─── EXAM 30 (isFree: false) ───────────────────────────────────────────
  // Correct answer distribution: A=5(Q3,Q6,Q10,Q15,Q18) B=5(Q1,Q5,Q8,Q14,Q20) C=5(Q2,Q7,Q12,Q16,Q19) D=5(Q4,Q9,Q11,Q13,Q17)
  const exam30 = await prisma.miniExam.create({
    data: {
      divisionId: ACCS_DIVISION_ID,
      title: 'ACCS Mini Exam 30',
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
          'A 64-year-old patient with severe community-acquired pneumonia develops acute respiratory failure requiring intubation. Post-intubation, the ventilator auto-triggers repeatedly, delivering breaths without patient effort. The respiratory therapist checks the circuit and finds no leaks. What is the most likely cause and appropriate intervention?',
        choices: {
          A: 'The set PEEP is too high and should be reduced',
          B: 'The trigger sensitivity is set too sensitive (flow or pressure threshold too low), causing the ventilator to interpret circuit noise or cardiac oscillations as patient effort; increase the trigger threshold',
          C: 'The patient has developed auto-PEEP causing inadvertent triggering',
          D: 'The humidifier temperature is too high',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Auto-triggering occurs when the ventilator delivers breaths without true patient effort. The most common cause after ruling out circuit leaks is an excessively sensitive trigger setting. Very low flow trigger thresholds (e.g., 0.5 L/min) or very sensitive pressure triggers (e.g., -0.5 cmH2O) can be activated by cardiac oscillations, water condensation in the circuit, or minor circuit vibrations. Increasing the trigger threshold to 2-3 L/min flow or -2 cmH2O pressure typically resolves auto-triggering while maintaining patient responsiveness.',
        explanationWrong:
          'High PEEP does not cause auto-triggering; it may actually make triggering more difficult. Auto-PEEP causes missed triggers (patient effort that fails to trigger a breath), not auto-triggering. While condensation from high humidifier temperature can contribute to auto-triggering, the primary intervention is adjusting trigger sensitivity.',
        topic: 'Ventilator Troubleshooting',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 2,
        questionText:
          'A patient in the ICU develops acute compartment syndrome of the right lower leg after a tibial fracture. The compartment pressure is 45 mmHg with a diastolic blood pressure of 70 mmHg (delta pressure of 25 mmHg). The patient reports severe pain disproportionate to the injury. What finding on physical examination would most strongly support the diagnosis?',
        choices: {
          A: 'Strong palpable dorsalis pedis pulse',
          B: 'Normal capillary refill in the toes',
          C: 'Pain with passive stretch of the toes (passive extension of the affected compartment muscles), which is the earliest and most sensitive clinical finding',
          D: 'Mild swelling of the calf',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Pain with passive stretch of the muscles in the affected compartment is the earliest and most sensitive clinical finding in compartment syndrome. Passive extension of the toes stretches the deep posterior compartment muscles, causing severe pain if compartment pressure is elevated. The delta pressure (diastolic BP minus compartment pressure) of 25 mmHg is below the 30 mmHg threshold, supporting the diagnosis. A fasciotomy should be performed emergently to prevent irreversible ischemic damage.',
        explanationWrong:
          'A palpable pulse does not rule out compartment syndrome; pulses are typically maintained until very late in the process because compartment syndrome affects the microcirculation, not the major arteries. Normal capillary refill similarly does not exclude compartment syndrome for the same reason. Mild swelling is nonspecific and present in many conditions without compartment syndrome.',
        topic: 'Surgical Emergencies in the ICU',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 3,
        questionText:
          'A mechanically ventilated patient with ARDS has a PaO2 of 55 mmHg on FiO2 0.80 and PEEP 18 cmH2O. The team decides to try inhaled epoprostenol (prostacyclin) as a rescue therapy. What is the primary mechanism by which inhaled pulmonary vasodilators improve oxygenation in ARDS?',
        choices: {
          A: 'They selectively vasodilate pulmonary vessels in ventilated lung regions, improving ventilation-perfusion matching and reducing intrapulmonary shunt',
          B: 'They increase cardiac output by reducing right ventricular afterload',
          C: 'They reduce alveolar edema by increasing surfactant production',
          D: 'They decrease pulmonary capillary permeability',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Inhaled pulmonary vasodilators (epoprostenol, nitric oxide) are delivered to ventilated alveoli and selectively vasodilate the pulmonary vessels supplying those aerated lung units. This redirects blood flow from non-ventilated (shunt) regions to ventilated regions, improving ventilation-perfusion (V/Q) matching and reducing intrapulmonary shunt. Because the drug is delivered via inhalation, it does not cause systemic vasodilation. This is a rescue therapy that may improve oxygenation but has not been shown to reduce mortality in ARDS.',
        explanationWrong:
          'While inhaled vasodilators may modestly reduce RV afterload, the primary mechanism of oxygenation improvement is V/Q matching, not cardiac output augmentation. They do not increase surfactant production or reduce alveolar edema. They do not alter pulmonary capillary permeability, which is the fundamental pathology in ARDS.',
        topic: 'ARDS Rescue Therapies',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 4,
        questionText:
          'A 52-year-old patient with acute decompensated heart failure is being evaluated for diuretic resistance. Despite IV furosemide 80 mg every 8 hours, urine output remains less than 0.5 mL/kg/hour and the patient remains volume overloaded with creatinine rising. Which strategy is most appropriate for overcoming diuretic resistance?',
        choices: {
          A: 'Switch from IV to oral furosemide',
          B: 'Discontinue diuretics and restrict fluids only',
          C: 'Decrease the furosemide dose to reduce nephrotoxicity',
          D: 'Add a thiazide diuretic (metolazone or chlorothiazide) for sequential nephron blockade, or convert to continuous furosemide infusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Diuretic resistance in acute heart failure can be overcome by sequential nephron blockade, which combines a loop diuretic (furosemide) with a thiazide diuretic (metolazone or chlorothiazide) that acts on the distal convoluted tubule. This prevents the compensatory sodium reabsorption that occurs downstream from the loop of Henle. Alternatively, converting to a continuous furosemide infusion provides more consistent drug levels and may produce greater diuresis with fewer side effects than bolus dosing. Ultrafiltration is an option if pharmacologic strategies fail.',
        explanationWrong:
          'Oral furosemide has lower and more variable bioavailability than IV, making it less effective in acute decompensation, particularly with gut edema. Discontinuing diuretics in a volume-overloaded patient with worsening renal function would worsen pulmonary congestion. Decreasing the furosemide dose would reduce the diuretic effect further in a patient who is already resistant to the current dose.',
        topic: 'Heart Failure and Renal Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 5,
        questionText:
          'A 38-year-old patient with severe asthma refractory to continuous albuterol, ipratropium, IV magnesium, and IV corticosteroids remains in severe respiratory distress with an ABG showing pH 7.20, PaCO2 72 mmHg, and PaO2 58 mmHg on FiO2 0.50 via non-rebreather. What is the next most appropriate intervention before intubation?',
        choices: {
          A: 'Repeat IV magnesium sulfate',
          B: 'Trial of BiPAP with IPAP 16-20 cmH2O, EPAP 5 cmH2O to reduce work of breathing and potentially avoid intubation',
          C: 'Heliox (80:20 helium-oxygen mixture) administration',
          D: 'Subcutaneous terbutaline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In severe refractory asthma with progressive hypercapnia and respiratory acidosis not responding to maximum pharmacotherapy, BiPAP (noninvasive positive pressure ventilation) is a reasonable trial before proceeding to intubation. The inspiratory pressure support augments tidal volume, reduces work of breathing, and may improve ventilation enough to avoid intubation. EPAP helps counterbalance auto-PEEP, reducing the inspiratory threshold load. This should be attempted with close monitoring and immediate readiness for intubation if the patient does not improve.',
        explanationWrong:
          'Repeat magnesium is unlikely to add benefit if the initial dose was therapeutic. Heliox may reduce airway resistance in some patients but requires at least 60-80% helium in the mixture to be effective, which limits the FiO2 that can be delivered to this already hypoxemic patient. Subcutaneous terbutaline may have some role but with continuous albuterol already running, additional systemic beta-agonist effect is limited.',
        topic: 'Refractory Status Asthmaticus',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 6,
        questionText:
          'A mechanically ventilated patient has esophageal pressure monitoring in place. The ventilator shows a plateau pressure of 30 cmH2O. The esophageal pressure at end-inspiration is 18 cmH2O. What is the transpulmonary pressure, and what does it represent?',
        choices: {
          A: 'Transpulmonary pressure is 12 cmH2O (plateau pressure minus esophageal pressure), representing the distending pressure actually applied to the lung parenchyma',
          B: 'Transpulmonary pressure is 48 cmH2O, calculated by adding plateau and esophageal pressure',
          C: 'Transpulmonary pressure is 30 cmH2O, equal to the plateau pressure',
          D: 'Transpulmonary pressure cannot be calculated from these values',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Transpulmonary pressure is calculated as airway pressure (plateau pressure) minus pleural pressure (estimated by esophageal pressure): 30 - 18 = 12 cmH2O. This represents the actual distending pressure applied to the lung parenchyma, separating the contributions of lung compliance from chest wall compliance. In this case, the high esophageal pressure (18 cmH2O) suggests significant chest wall stiffness (from obesity, abdominal distension, etc.), and the true lung stress (12 cmH2O) is much lower than the plateau pressure suggests. Keeping transpulmonary pressure below 20-25 cmH2O is a reasonable target to minimize VILI.',
        explanationWrong:
          'Adding plateau and esophageal pressure is not a physiologically meaningful calculation. Transpulmonary pressure is not equal to plateau pressure alone because plateau pressure includes the pressure needed to distend both the lung and the chest wall. These values provide all the information needed to calculate transpulmonary pressure.',
        topic: 'Esophageal Pressure Monitoring',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 7,
        questionText:
          'A patient with acute respiratory failure secondary to pneumocystis pneumonia (PJP) in the setting of HIV/AIDS is on mechanical ventilation with PEEP 12 cmH2O and FiO2 0.60. PaO2 is 62 mmHg. Which adjunctive medication has been shown to improve outcomes in moderate-to-severe PJP with PaO2 less than 70 mmHg on room air?',
        choices: {
          A: 'Inhaled pentamidine',
          B: 'Voriconazole',
          C: 'Adjunctive corticosteroids (prednisone or methylprednisolone) started within 72 hours of PJP treatment to reduce pulmonary inflammation',
          D: 'Azithromycin',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In moderate-to-severe PJP (defined as PaO2 < 70 mmHg on room air or A-a gradient > 35 mmHg), adjunctive corticosteroids have been shown to reduce mortality and respiratory failure. Prednisone 40 mg twice daily for 5 days, then 40 mg daily for 5 days, then 20 mg daily for 11 days (or equivalent IV methylprednisolone) should be started within 72 hours of beginning anti-PJP therapy. The steroids reduce the inflammatory response that worsens oxygenation as organisms are killed by treatment.',
        explanationWrong:
          'Inhaled pentamidine is used for PJP prophylaxis, not treatment of acute moderate-to-severe disease. Voriconazole is an antifungal effective against Aspergillus and other fungi but not against Pneumocystis jirovecii. Azithromycin has no role in PJP treatment; first-line treatment is trimethoprim-sulfamethoxazole.',
        topic: 'Immunocompromised Host Infections',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 8,
        questionText:
          'A patient with known difficult airway anatomy (Mallampati IV, limited neck extension, receding mandible) requires emergency intubation for respiratory failure. The first direct laryngoscopy attempt yields a Cormack-Lehane grade IV view (only soft palate visible). What is the most appropriate next step?',
        choices: {
          A: 'Attempt blind nasal intubation',
          B: 'Use a video laryngoscope, which provides an indirect view of the glottis and has been shown to improve first-pass success in difficult airways',
          C: 'Make three additional attempts with direct laryngoscopy using progressively larger blades',
          D: 'Immediately perform a surgical cricothyrotomy',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After a failed direct laryngoscopy attempt with a grade IV view, a video laryngoscope should be the next device attempted. Video laryngoscopy provides an indirect view around the tongue and anterior structures, typically improving the laryngeal view by 1-2 Cormack-Lehane grades. Studies have shown higher first-pass success rates with video laryngoscopy in difficult airways. This follows the difficult airway algorithm principle of using different techniques rather than repeating the same failed approach.',
        explanationWrong:
          'Blind nasal intubation is a declining technique with high complication rates and lower success than video laryngoscopy. Repeated direct laryngoscopy attempts with the same approach have diminishing success and increase the risk of airway trauma, edema, and "cannot intubate, cannot oxygenate" crisis. Surgical cricothyrotomy is the rescue when intubation and ventilation both fail, but alternate intubation devices should be attempted first if the patient can be oxygenated.',
        topic: 'Difficult Airway Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 9,
        questionText:
          'A patient with severe sepsis has a lactate level of 4.8 mmol/L after initial fluid resuscitation with 30 mL/kg crystalloid. The MAP is 68 mmHg on norepinephrine. The Surviving Sepsis Campaign recommends monitoring which parameter to guide ongoing resuscitation?',
        choices: {
          A: 'Central venous pressure only, targeting 8-12 mmHg',
          B: 'Urine output only, targeting > 2 mL/kg/hour',
          C: 'Mixed venous oxygen saturation (SvO2) targeting > 80%',
          D: 'Serial lactate measurements, targeting lactate clearance (normalization) as a marker of improved tissue perfusion',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The Surviving Sepsis Campaign recommends serial lactate measurement to guide resuscitation in sepsis and septic shock. Lactate clearance (a decrease in lactate levels, ideally by at least 10-20% every 2 hours) serves as a surrogate marker of improved tissue perfusion and resolution of tissue hypoxia. Targeting lactate normalization has been shown to be at least as effective as targeting ScvO2 for guiding resuscitation. Persistently elevated or rising lactate despite interventions should prompt reassessment of the resuscitation strategy.',
        explanationWrong:
          'CVP alone is a poor predictor of fluid responsiveness and is no longer recommended as a sole resuscitation target. Urine output > 0.5 mL/kg/hour (not 2 mL/kg/hour) is a reasonable target but is influenced by many factors beyond perfusion. SvO2 > 80% would actually suggest either adequate delivery or impaired extraction (as in sepsis with mitochondrial dysfunction); the original Rivers target was ScvO2 > 70%, and this protocol-driven approach has been largely supplanted by lactate-guided resuscitation.',
        topic: 'Sepsis Resuscitation',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 10,
        questionText:
          'A mechanically ventilated patient on volume-controlled ventilation has the following flow-time waveform: the expiratory flow does not return to baseline before the next breath is delivered. This finding is most consistent with which condition?',
        choices: {
          A: 'Air trapping and intrinsic PEEP (auto-PEEP), indicating that exhalation is incomplete before the next mechanical breath',
          B: 'A ventilator circuit leak',
          C: 'Normal ventilator function',
          D: 'Excessive set PEEP',
        },
        correctChoice: 'A',
        explanationCorrect:
          'When expiratory flow does not return to the zero baseline before the next inspiration begins, it indicates incomplete exhalation and air trapping, generating intrinsic PEEP (auto-PEEP). This is common in patients with obstructive airway disease (COPD, asthma) or when the expiratory time is insufficient (due to high respiratory rate, large tidal volume, or short I:E ratio). Auto-PEEP can be quantified by performing an end-expiratory hold maneuver. Consequences include hemodynamic compromise, barotrauma, and increased work of breathing.',
        explanationWrong:
          'A circuit leak would show discrepancy between inspired and expired volumes but would not cause the characteristic pattern of incomplete expiratory flow return. Normal ventilator function shows expiratory flow returning to baseline before the next breath. Excessive set PEEP does not cause the flow-time pattern described; it would show flow returning to baseline at the set PEEP level.',
        topic: 'Ventilator Waveform Analysis',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 11,
        questionText:
          'A patient in the ICU has been receiving enteral nutrition via a nasogastric tube. The gastric residual volume (GRV) is measured at 350 mL. The patient has no signs of abdominal distension, vomiting, or aspiration. According to current evidence-based guidelines, what is the most appropriate action?',
        choices: {
          A: 'Immediately discontinue enteral feeding and switch to TPN',
          B: 'Hold the feeding for 4 hours and recheck',
          C: 'Reduce the feeding rate by 50%',
          D: 'Continue enteral feeding at the current rate, as GRV alone (below 500 mL) without clinical signs of intolerance should not prompt holding feeds',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Current evidence-based guidelines (ASPEN/SCCM) recommend not using gastric residual volumes below 500 mL as a reason to hold enteral nutrition in the absence of other signs of intolerance (vomiting, abdominal distension, regurgitation). Some guidelines even recommend not routinely checking GRV at all. Routine holding of feeds based on GRV thresholds below 500 mL leads to unnecessary caloric deficits and does not reduce aspiration risk. The focus should be on clinical assessment for feeding intolerance.',
        explanationWrong:
          'Switching to TPN based on a GRV of 350 mL without clinical signs of intolerance is not indicated and deprives the patient of the benefits of enteral nutrition (gut mucosal integrity, immune function). Holding feeds for 4 hours based on this GRV creates unnecessary nutritional interruption. Reducing the rate by 50% leads to underfeeding without evidence of benefit.',
        topic: 'Enteral Nutrition in Critical Care',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 12,
        questionText:
          'A 55-year-old patient with an acute exacerbation of systolic heart failure (EF 20%) is on milrinone infusion. The patient develops new-onset atrial fibrillation with a rapid ventricular response at 148 bpm and blood pressure of 92/60 mmHg. Which concern is specific to the use of milrinone in this scenario?',
        choices: {
          A: 'Milrinone causes direct beta-adrenergic stimulation',
          B: 'Milrinone has no cardiac effects and is only a vasodilator',
          C: 'Milrinone (a phosphodiesterase-3 inhibitor) increases intracellular cAMP, which can promote tachyarrhythmias; the new atrial fibrillation may be a drug-related adverse effect',
          D: 'Milrinone should be combined with a beta-blocker for optimal effect',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Milrinone is a phosphodiesterase-3 (PDE3) inhibitor that increases intracellular cAMP in cardiac myocytes and vascular smooth muscle. The increased cAMP enhances calcium influx and contractility (inotropy) but also increases automaticity and the risk of both atrial and ventricular arrhythmias. The new-onset atrial fibrillation in this patient may be a direct adverse effect of milrinone. Milrinone also causes vasodilation, which may worsen hypotension. The risk-benefit of continuing milrinone should be reassessed.',
        explanationWrong:
          'Milrinone does not work through direct beta-adrenergic stimulation; it inhibits PDE3 to increase cAMP independently of beta-receptors. Milrinone has significant cardiac effects including positive inotropy, lusitropy (improved relaxation), and chronotropy in addition to vasodilation. Adding a beta-blocker to milrinone in acute decompensated heart failure with hypotension could cause dangerous cardiogenic shock.',
        topic: 'ICU Pharmacology - Inotropes',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 13,
        questionText:
          'A trauma patient with a severe pelvic fracture arrives with hemodynamic instability. After initial crystalloid resuscitation and blood products, the blood pressure remains 74/48 mmHg. FAST exam shows no intraperitoneal free fluid. The pelvis is mechanically unstable. What is the most appropriate next intervention?',
        choices: {
          A: 'Exploratory laparotomy',
          B: 'CT angiography of the pelvis',
          C: 'Repeat FAST examination in 30 minutes',
          D: 'Pelvic binder application (or external fixation) followed by angiographic embolization if hemorrhage continues',
        },
        correctChoice: 'D',
        explanationCorrect:
          'In hemodynamically unstable pelvic fractures with a negative FAST (ruling out significant intraperitoneal hemorrhage), the bleeding is likely from pelvic venous plexus disruption or arterial injury. Immediate pelvic binder application reduces the pelvic volume, tamponades venous bleeding, and stabilizes the fracture. If the patient remains hemodynamically unstable after binder application and resuscitation, angiographic embolization targets arterial bleeding sources. This sequential approach follows current trauma resuscitation algorithms.',
        explanationWrong:
          'Exploratory laparotomy is not indicated with a negative FAST, as the bleeding source is likely retroperitoneal/pelvic, not intraperitoneal. CT angiography requires hemodynamic stability for safe transport to the scanner and is not appropriate for an unstable patient. Waiting 30 minutes to repeat the FAST delays life-saving intervention in an actively hemorrhaging patient.',
        topic: 'Trauma Hemorrhage Management',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 14,
        questionText:
          'A 60-year-old patient with acute exacerbation of COPD is being managed with BiPAP. Despite IPAP of 20 cmH2O and EPAP of 8 cmH2O, the exhaled tidal volume is only 280 mL and the patient continues to have significant mask leak detected by the device. What is the most important step to improve the effectiveness of NIV?',
        choices: {
          A: 'Increase the IPAP to 28 cmH2O to compensate for the leak',
          B: 'Optimize the mask fit by adjusting the mask size, type, or interface to minimize leak, as excessive leak reduces the effective delivered pressure and impairs ventilation',
          C: 'Switch to a nasal cannula for comfort',
          D: 'Discontinue NIV and proceed directly to intubation',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Mask leak is the most common cause of NIV failure and must be addressed before increasing pressure settings. Excessive leak reduces the effective delivered pressure, decreases tidal volume, causes patient-ventilator dyssynchrony, and can lead to eye irritation and skin breakdown. Optimizing the mask interface by selecting the correct size, trying different mask types (oronasal, total face, nasal), adjusting straps without over-tightening, and ensuring proper positioning can dramatically improve NIV effectiveness.',
        explanationWrong:
          'Increasing IPAP to compensate for leak often worsens the leak by forcing more air around the mask edges, creating a vicious cycle. A nasal cannula provides no positive pressure support and would be a significant de-escalation. Proceeding to intubation without first optimizing the NIV interface is premature when the current problem is a modifiable technical issue.',
        topic: 'Noninvasive Ventilation Optimization',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 15,
        questionText:
          'A patient with acute pancreatitis develops severe hypocalcemia (ionized calcium 0.78 mmol/L) with QT prolongation on ECG. The total calcium is 6.8 mg/dL and albumin is 2.0 g/dL. What is the pathophysiology of hypocalcemia in acute pancreatitis?',
        choices: {
          A: 'Calcium is consumed by saponification (formation of calcium soaps) as released lipase breaks down peripancreatic fat, and the free fatty acids bind calcium; hypoalbuminemia further reduces total (but not directly ionized) calcium',
          B: 'Excessive urinary calcium excretion from renal tubular dysfunction',
          C: 'Increased parathyroid hormone suppresses calcium release from bone',
          D: 'Calcium is sequestered in the liver during the acute phase response',
        },
        correctChoice: 'A',
        explanationCorrect:
          'In acute pancreatitis, lipase released from damaged pancreatic tissue breaks down peripancreatic and omental fat. The resulting free fatty acids bind calcium ions, forming insoluble calcium soaps in a process called saponification. This consumes ionized calcium and can cause severe hypocalcemia. The low albumin (2.0 g/dL) further reduces total calcium measurement, but the low ionized calcium (0.78 mmol/L) confirms true functional hypocalcemia. Severe hypocalcemia in pancreatitis is a poor prognostic sign (Ranson criterion).',
        explanationWrong:
          'Renal calcium excretion is not the primary mechanism of hypocalcemia in pancreatitis. PTH would increase (not suppress) in response to hypocalcemia, attempting to mobilize calcium from bone. There is no significant hepatic sequestration of calcium during the acute phase response.',
        topic: 'Metabolic Complications of Pancreatitis',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 16,
        questionText:
          'A 70-year-old patient with a left ventricular assist device (LVAD) is admitted to the ICU with suspected pump thrombosis. The lactate dehydrogenase (LDH) is 1,200 IU/L and plasma-free hemoglobin is elevated. The pump power has increased from baseline. Which diagnostic finding would most strongly confirm pump thrombosis?',
        choices: {
          A: 'Elevated troponin level',
          B: 'Decreased haptoglobin',
          C: 'Combination of markedly elevated LDH (> 3 times upper limit), elevated plasma-free hemoglobin indicating hemolysis, increased pump power consumption above baseline, and clinical signs of heart failure despite adequate pump speed',
          D: 'Elevated BNP level',
        },
        correctChoice: 'C',
        explanationCorrect:
          'LVAD pump thrombosis is diagnosed by a combination of findings: markedly elevated LDH (typically > 2.5-3 times the upper limit of normal), elevated plasma-free hemoglobin (indicating mechanical hemolysis as blood is sheared by the thrombus), increased pump power consumption (the pump works harder against the thrombus), decreased pump flows, and clinical signs of heart failure. A single laboratory value alone is insufficient; the pattern of findings together confirms the diagnosis. CT angiography or echocardiography may show indirect signs.',
        explanationWrong:
          'Elevated troponin may occur from many causes in critically ill patients and is not specific to pump thrombosis. While decreased haptoglobin indicates hemolysis, it is not specific enough alone to confirm pump thrombosis versus other causes of hemolysis. Elevated BNP reflects ventricular stretch and heart failure but does not specifically diagnose pump thrombosis.',
        topic: 'Mechanical Circulatory Support Complications',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 17,
        questionText:
          'A patient in the ICU develops hospital-acquired Clostridioides difficile infection for the third recurrence. The patient has failed multiple courses of oral vancomycin. According to current guidelines, which treatment is most appropriate for multiply recurrent C. difficile infection?',
        choices: {
          A: 'Extended tapered and pulsed oral vancomycin regimen',
          B: 'Oral metronidazole for 14 days',
          C: 'IV vancomycin',
          D: 'Fecal microbiota transplantation (FMT), which restores the normal colonic microbiome and has demonstrated high success rates for multiply recurrent C. difficile infection',
        },
        correctChoice: 'D',
        explanationCorrect:
          'For multiply recurrent C. difficile infection that has failed standard antibiotic therapy, fecal microbiota transplantation (FMT) is recommended by current IDSA guidelines. FMT restores the diversity of the colonic microbiome, which is depleted by repeated antibiotic courses, thereby re-establishing colonization resistance against C. difficile. Success rates for FMT in recurrent CDI exceed 80-90% in clinical trials. FMT can be administered via colonoscopy, upper endoscopy, or oral capsules.',
        explanationWrong:
          'An extended tapered vancomycin regimen may be tried for a second recurrence but has been superseded by FMT for multiply recurrent infections. Oral metronidazole is no longer recommended even for initial CDI episodes and is clearly inadequate for multiply recurrent disease. IV vancomycin does not achieve adequate colonic concentrations and is not effective for CDI treatment.',
        topic: 'Recurrent Infectious Disease',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 18,
        questionText:
          'A 45-year-old patient with severe acute respiratory failure from COVID-19 pneumonia has been on mechanical ventilation for 10 days. The patient meets criteria for tracheostomy. The team discusses timing of tracheostomy. According to current evidence, which statement about early versus late tracheostomy is most accurate?',
        choices: {
          A: 'Early tracheostomy (within 7 days) has been consistently shown to reduce mortality compared to late tracheostomy in multiple randomized trials',
          B: 'Tracheostomy is contraindicated in viral pneumonia',
          C: 'Late tracheostomy (after 14 days) provides better outcomes than early tracheostomy',
          D: 'Evidence does not consistently show a mortality benefit for early versus late tracheostomy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'While early tracheostomy may reduce sedation requirements, ICU length of stay, and duration of mechanical ventilation, the TracMan trial and other large studies have not consistently demonstrated a mortality benefit for early (within 4-7 days) versus late (after 10-14 days) tracheostomy. The decision should be individualized based on the patient expected duration of mechanical ventilation, trajectory of illness, comfort, and goals of care. Early tracheostomy may facilitate weaning, reduce sedation, and improve patient comfort.',
        explanationWrong:
          'Tracheostomy is not contraindicated in viral pneumonia, though infection control precautions are important, particularly for aerosolized infections. Late tracheostomy has not been shown to provide better outcomes. The evidence on early versus late tracheostomy shows potential benefits of early tracheostomy for secondary outcomes but not consistent mortality reduction.',
        topic: 'Tracheostomy Timing',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 19,
        questionText:
          'A patient with acute respiratory failure is placed on adaptive support ventilation (ASV). The respiratory therapist enters the patient ideal body weight and sets the percent minute ventilation (%MinVol) to 100%. How does ASV determine the optimal breathing pattern?',
        choices: {
          A: 'ASV delivers a fixed tidal volume and respiratory rate set by the clinician',
          B: 'ASV uses only the patient spontaneous breathing pattern without any algorithmic adjustment',
          C: 'ASV uses the Otis equation to calculate the optimal combination of tidal volume and respiratory rate that minimizes the work of breathing for a target minute ventilation based on the patient lung mechanics',
          D: 'ASV delivers volume-controlled breaths with a fixed I:E ratio',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Adaptive support ventilation (ASV) is a closed-loop mode that automatically adjusts both tidal volume and respiratory rate to achieve a target minute ventilation while minimizing work of breathing. It uses the Otis equation (minimizing the combined elastic and resistive work of breathing) to calculate the optimal VT-RR combination based on measured respiratory system mechanics (compliance and resistance). ASV continuously adapts as the patient condition changes, automatically transitioning from full support to partial support as the patient respiratory effort increases.',
        explanationWrong:
          'ASV does not use fixed clinician-set tidal volume and rate; it automatically calculates the optimal combination. While ASV does incorporate the patient spontaneous breathing, it actively uses algorithmic control based on lung mechanics, not just passive monitoring. ASV uses pressure-controlled breaths (not volume-controlled) that are automatically adjusted to achieve the target VT determined by the algorithm.',
        topic: 'Advanced Ventilator Modes',
      },
      {
        miniExamId: exam30.id,
        questionIndex: 20,
        questionText:
          'A 68-year-old patient is being discharged from the ICU after a 21-day stay for septic shock and ARDS. The patient has ICU-acquired weakness, mild cognitive impairment, and anxiety about leaving the ICU. Which program best addresses the post-ICU recovery needs of this patient?',
        choices: {
          A: 'Immediate return to independent living without follow-up',
          B: 'A structured post-ICU follow-up program including physical rehabilitation, cognitive assessment, psychological support, and primary care coordination to address post-intensive care syndrome (PICS)',
          C: 'Readmission to the ICU if symptoms recur',
          D: 'Referral to a psychiatrist only for the anxiety',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Post-intensive care syndrome (PICS) encompasses the physical, cognitive, and psychological impairments that persist after critical illness. This patient demonstrates all three domains: ICU-acquired weakness (physical), mild cognitive impairment (cognitive), and anxiety (psychological). A comprehensive post-ICU follow-up program should include structured physical rehabilitation, neuropsychological assessment, psychological support (including screening for PTSD and depression), medication reconciliation, and care coordination with primary care. ICU follow-up clinics are increasingly recognized as essential for improving long-term outcomes after critical illness.',
        explanationWrong:
          'Immediate return to independent living without follow-up ignores the well-documented needs of ICU survivors and risks functional decline, hospital readmission, and poor quality of life. Readmission to the ICU is not an appropriate plan for managing PICS. Addressing only the anxiety fails to address the physical and cognitive components of PICS, which require a multidisciplinary approach.',
        topic: 'Post-Intensive Care Syndrome',
      },
    ],
  })

  console.log('  ✓ ACCS Mini Exam 30 seeded (20 questions, isFree: false)')

  console.log('Done seeding ACCS mini exams 26-30!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
