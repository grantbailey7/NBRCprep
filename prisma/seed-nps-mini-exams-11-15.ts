import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NPS_DIVISION_ID = 'cmsm41fvb0001zf54yp8r6skl'

async function main() {
  console.log('Seeding NPS mini exams 11-15...')

  // ─── EXAM 11 ──────────────────────────────────────────────────────────
  // Topics: Neonatal and pediatric blood gas interpretation, Pediatric oxygen delivery systems
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-C, Q2-A, Q3-D, Q4-B, Q5-A, Q6-D, Q7-B, Q8-C, Q9-A, Q10-D, Q11-B, Q12-C, Q13-D, Q14-A, Q15-B, Q16-C, Q17-A, Q18-B, Q19-D, Q20-C
  const exam11 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 11',
      examIndex: 11,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam11.id,
        questionIndex: 1,
        questionText:
          'A term neonate at 2 hours of life has the following arterial blood gas: pH 7.18, PaCO2 32 mmHg, PaO2 55 mmHg, HCO3 12 mEq/L, BE -14. Which acid-base disturbance is present?',
        choices: {
          A: 'Respiratory acidosis',
          B: 'Respiratory alkalosis with metabolic compensation',
          C: 'Metabolic acidosis with respiratory compensation',
          D: 'Mixed respiratory and metabolic alkalosis',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The pH is low (acidotic), the HCO3 is significantly reduced at 12 mEq/L with a large base deficit of -14, indicating a primary metabolic acidosis. The PaCO2 of 32 mmHg is below normal, representing respiratory compensation (hyperventilation) attempting to blow off CO2 to raise pH.',
        explanationWrong:
          'Respiratory acidosis would present with an elevated PaCO2. Respiratory alkalosis with metabolic compensation would show an elevated pH or normal pH with low PaCO2 as the primary disturbance. Mixed respiratory and metabolic alkalosis does not match the acidotic pH and low bicarbonate.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 2,
        questionText:
          'A 6-month-old infant with bronchiolitis requires supplemental oxygen. The infant is alert, feeding intermittently, and has mild subcostal retractions with SpO2 of 89% on room air. Which oxygen delivery device is most appropriate initially?',
        choices: {
          A: 'Low-flow nasal cannula at 0.5-2 L/min',
          B: 'Simple face mask at 6 L/min',
          C: 'Non-rebreather mask at 10 L/min',
          D: 'High-flow nasal cannula at 8 L/min',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For an infant with mild respiratory distress and hypoxemia, a low-flow nasal cannula at 0.5-2 L/min is the most appropriate initial oxygen delivery device. It provides a low-to-moderate FiO2, is well-tolerated, allows feeding, and is the least invasive option for mild-to-moderate hypoxemia.',
        explanationWrong:
          'A simple face mask is poorly tolerated in infants and requires minimum flows of 5-6 L/min. A non-rebreather mask delivers high FiO2 and is excessive for this presentation. High-flow nasal cannula may be considered if low-flow therapy fails but is not the first-line choice for mild distress.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 3,
        questionText:
          'A preterm neonate born at 28 weeks gestation has a capillary blood gas showing pH 7.25, PCO2 58 mmHg, HCO3 24 mEq/L. Which statement about this capillary sample is most accurate?',
        choices: {
          A: 'The PCO2 value closely reflects arterial PaO2',
          B: 'The pH is unreliable from capillary samples',
          C: 'The HCO3 level cannot be determined from capillary blood',
          D: 'The PCO2 and pH values closely approximate arterial values, but PO2 does not',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Capillary blood gas samples provide pH and PCO2 values that closely approximate arterial blood gas values when the sample is obtained from a well-warmed, well-perfused site. However, capillary PO2 values are significantly lower than arterial PaO2 and should not be used to assess oxygenation.',
        explanationWrong:
          'Capillary PCO2 reflects arterial PCO2, not PaO2—these are different measurements. The pH from a properly obtained capillary sample is reliable and closely reflects arterial pH. HCO3 can be calculated from capillary blood gas values.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 4,
        questionText:
          'A 4-year-old child with cystic fibrosis is being evaluated for home oxygen therapy. Which device would deliver the most precise and consistent FiO2 in this age group?',
        choices: {
          A: 'Simple face mask',
          B: 'Air-entrainment (Venturi) mask',
          C: 'Nasal cannula at 2 L/min',
          D: 'Partial rebreather mask',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An air-entrainment (Venturi) mask provides the most precise and consistent FiO2 because it uses specific jet orifices to entrain a fixed ratio of room air, delivering a predictable oxygen concentration regardless of the patient\'s breathing pattern. This is important for patients requiring controlled oxygen therapy.',
        explanationWrong:
          'Simple face masks deliver variable FiO2 depending on the patient\'s respiratory rate and tidal volume. Nasal cannulas provide variable FiO2 that changes with the patient\'s breathing pattern. Partial rebreather masks deliver higher but less precise FiO2 concentrations.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 5,
        questionText:
          'A neonate born at 35 weeks gestation has the following ABG results: pH 7.48, PaCO2 28 mmHg, PaO2 95 mmHg, HCO3 21 mEq/L. The respiratory therapist should recognize this as:',
        choices: {
          A: 'Uncompensated respiratory alkalosis',
          B: 'Compensated metabolic alkalosis',
          C: 'Normal neonatal blood gas values',
          D: 'Partially compensated metabolic acidosis',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The elevated pH of 7.48 with a low PaCO2 of 28 mmHg indicates primary respiratory alkalosis from hyperventilation. The HCO3 of 21 mEq/L is within normal range and has not yet decreased to compensate, making this an uncompensated respiratory alkalosis.',
        explanationWrong:
          'Compensated metabolic alkalosis would show an elevated HCO3 as the primary disturbance with a high PaCO2 for compensation. Normal neonatal ABG values show pH 7.30-7.40 with PaCO2 35-45 mmHg. Partially compensated metabolic acidosis would show a low pH with low HCO3.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 6,
        questionText:
          'A 10-year-old child on a non-rebreather mask at 15 L/min has a PaO2 of 55 mmHg. The P(A-a)O2 gradient is calculated at 580 mmHg. This finding is most consistent with:',
        choices: {
          A: 'Hypoventilation as the sole cause of hypoxemia',
          B: 'Normal oxygen transfer across the alveolar-capillary membrane',
          C: 'V/Q mismatch from mild bronchospasm',
          D: 'Severe intrapulmonary shunting',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A P(A-a)O2 gradient of 580 mmHg on a high FiO2 is markedly elevated and indicates severe intrapulmonary shunting. In true shunt, blood passes through non-ventilated alveoli and does not participate in gas exchange, resulting in persistent hypoxemia that is refractory to supplemental oxygen.',
        explanationWrong:
          'Pure hypoventilation causes hypoxemia with a normal A-a gradient. A normal A-a gradient on high FiO2 would be less than 100 mmHg. Mild bronchospasm causing V/Q mismatch typically responds to supplemental oxygen and would not produce such a large gradient on high FiO2.',
        topic: 'Pediatric Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 7,
        questionText:
          'When using heated high-flow nasal cannula (HHFNC) therapy in a 3-month-old infant, which of the following is a recognized benefit compared to standard low-flow nasal cannula?',
        choices: {
          A: 'HHFNC delivers a precise FiO2 like a Venturi mask',
          B: 'HHFNC provides a flow-dependent distending pressure that may reduce work of breathing',
          C: 'HHFNC eliminates the need for SpO2 monitoring',
          D: 'HHFNC is indicated only for infants older than 6 months',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Heated high-flow nasal cannula provides flows that exceed the infant\'s inspiratory demand, generating a flow-dependent positive distending pressure in the upper airway. This CPAP-like effect can reduce work of breathing, improve functional residual capacity, and decrease respiratory effort.',
        explanationWrong:
          'HHFNC does not deliver a precise FiO2 in the same manner as a Venturi system because the effective FiO2 varies with the patient\'s inspiratory flow. Continuous SpO2 monitoring remains essential. HHFNC is used in neonates and infants of all ages, not only those older than 6 months.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 8,
        questionText:
          'A newborn has an umbilical arterial blood gas drawn at 5 minutes of life showing pH 7.05, PaCO2 70 mmHg, PaO2 18 mmHg, HCO3 15 mEq/L, BE -16. This blood gas is most consistent with:',
        choices: {
          A: 'Normal transition from fetal to neonatal circulation',
          B: 'Isolated respiratory acidosis from transient tachypnea',
          C: 'Combined respiratory and metabolic acidosis suggesting perinatal asphyxia',
          D: 'Metabolic alkalosis from excessive bicarbonate administration',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The severely low pH of 7.05 with both an elevated PaCO2 of 70 mmHg (respiratory component) and reduced HCO3 of 15 mEq/L with a large base deficit of -16 (metabolic component) indicates a combined respiratory and metabolic acidosis. This pattern in the immediate newborn period is consistent with significant perinatal asphyxia.',
        explanationWrong:
          'Normal transitional blood gases show mild respiratory acidosis but not this severity. Isolated respiratory acidosis from TTN would show elevated PaCO2 with normal or elevated HCO3, not a base deficit of -16. Metabolic alkalosis is the opposite of what is seen here.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 9,
        questionText:
          'A blow-by oxygen setup is being used for a 2-year-old toddler who will not tolerate a mask. Approximately what FiO2 can be expected from blow-by oxygen held near the child\'s face?',
        choices: {
          A: 'The FiO2 is unpredictable and highly variable, typically 0.25-0.40',
          B: 'Consistent FiO2 of 0.60 if flow is set at 10 L/min',
          C: 'FiO2 equivalent to a simple mask at the same flow rate',
          D: 'FiO2 of 1.0 if 100% oxygen source is used',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Blow-by oxygen delivery is inherently imprecise because the oxygen is directed near but not sealed against the face. The actual FiO2 reaching the patient depends on distance from the face, patient movement, ambient air currents, and flow rate. Typical delivered FiO2 ranges from 0.25 to 0.40 and is highly variable.',
        explanationWrong:
          'A consistent FiO2 of 0.60 cannot be achieved with blow-by delivery. The FiO2 is lower than a simple mask because there is no reservoir or seal. An FiO2 of 1.0 is impossible with blow-by because of significant room air entrainment.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 10,
        questionText:
          'A 32-week preterm neonate on nasal CPAP of 6 cmH2O has a blood gas showing pH 7.22, PaCO2 68 mmHg, PaO2 50 mmHg, HCO3 26 mEq/L. Which action is most appropriate?',
        choices: {
          A: 'Increase CPAP to 8 cmH2O',
          B: 'Administer sodium bicarbonate to correct the acidosis',
          C: 'Wean CPAP to 4 cmH2O and add supplemental oxygen',
          D: 'Intubate and initiate mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'This blood gas reveals significant respiratory acidosis with a PaCO2 of 68 mmHg and pH of 7.22 on CPAP therapy. The elevated HCO3 of 26 suggests some renal compensation, indicating this is not a new problem. CPAP does not provide ventilation to reduce PaCO2. The neonate requires intubation and mechanical ventilation to address the ventilatory failure.',
        explanationWrong:
          'Increasing CPAP helps with oxygenation and FRC but does not provide the minute ventilation needed to clear CO2. Sodium bicarbonate does not address the underlying ventilatory failure. Weaning CPAP would worsen both oxygenation and ventilation in this scenario.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 11,
        questionText:
          'An infant receiving oxygen via an oxygen hood (oxyhood) must have the minimum total gas flow set at which level to prevent CO2 accumulation?',
        choices: {
          A: 'At least 3 L/min',
          B: 'At least 7-10 L/min',
          C: 'At least 15 L/min',
          D: 'Flow rate does not affect CO2 levels in an oxyhood',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An oxygen hood requires a minimum total gas flow of 7-10 L/min to ensure adequate flushing of exhaled CO2 from the enclosed space around the infant\'s head. Flows below this threshold allow CO2 to accumulate, which can lead to rebreathing and hypercapnia.',
        explanationWrong:
          'A flow of 3 L/min is insufficient to flush CO2 from the oxyhood. While 15 L/min is acceptable, it is not the minimum required. The flow rate directly affects CO2 clearance within the oxyhood, so stating it has no effect is incorrect.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 12,
        questionText:
          'A blood gas from a critically ill 8-year-old shows pH 7.35, PaCO2 24 mmHg, PaO2 68 mmHg, HCO3 13 mEq/L, lactate 6.2 mmol/L. The PaO2/FiO2 ratio is 136 on FiO2 0.50. Which interpretation is most accurate?',
        choices: {
          A: 'The patient has a fully compensated metabolic acidosis with elevated lactate suggesting tissue hypoperfusion, and the P/F ratio indicates moderate ARDS',
          B: 'The low PaCO2 confirms a primary respiratory alkalosis',
          C: 'The normal pH indicates no significant acid-base disturbance',
          D: 'The elevated lactate is insignificant because the pH is within normal limits',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Despite a normal pH of 7.35, the low HCO3 of 13 mEq/L indicates a primary metabolic acidosis that has been fully compensated by respiratory alkalosis (PaCO2 24 mmHg). The elevated lactate of 6.2 mmol/L suggests significant tissue hypoperfusion or shock. The P/F ratio of 136 meets criteria for moderate ARDS (100-200).',
        explanationWrong:
          'A normal pH with abnormal PaCO2 and HCO3 indicates a fully compensated acid-base disturbance, not the absence of one. The low PaCO2 is compensatory, not a primary disorder. Elevated lactate is always clinically significant and indicates anaerobic metabolism from poor tissue perfusion.',
        topic: 'Pediatric Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 13,
        questionText:
          'When analyzing a neonatal blood gas, which of the following normal arterial values is correct for a term newborn at 24 hours of life?',
        choices: {
          A: 'pH 7.45-7.55, PaCO2 25-30 mmHg',
          B: 'pH 7.25-7.30, PaCO2 55-65 mmHg',
          C: 'PaO2 90-100 mmHg, HCO3 26-30 mEq/L',
          D: 'pH 7.30-7.40, PaCO2 35-45 mmHg, PaO2 60-80 mmHg, HCO3 20-24 mEq/L',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Normal arterial blood gas values for a term neonate at 24 hours include pH 7.30-7.40, PaCO2 35-45 mmHg, PaO2 60-80 mmHg, and HCO3 20-24 mEq/L. Neonatal PaO2 is lower than adult values, and the slightly lower pH and HCO3 reflect the transitional period.',
        explanationWrong:
          'A pH of 7.45-7.55 is alkalotic, not normal for a neonate. A pH of 7.25-7.30 with PaCO2 55-65 is acidotic. PaO2 of 90-100 mmHg is more typical of adult values; neonatal PaO2 is normally 60-80 mmHg. HCO3 of 26-30 mEq/L exceeds normal neonatal range.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 14,
        questionText:
          'A pediatric patient is receiving oxygen via a simple face mask at 8 L/min. The child\'s respiratory rate increases significantly. What effect will this have on the delivered FiO2?',
        choices: {
          A: 'The delivered FiO2 will decrease only if the respiratory rate exceeds 40 breaths per minute',
          B: 'The delivered FiO2 will increase because faster breathing draws more oxygen from the mask',
          C: 'The delivered FiO2 will remain constant because the flow rate is fixed',
          D: 'The delivered FiO2 will decrease because inspiratory flow will exceed the mask flow, entraining more room air',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Simple face masks are variable-performance devices. When the patient\'s inspiratory flow demand increases (due to tachypnea), it exceeds the oxygen flow from the mask, causing entrainment of room air through the mask ports and around the mask seal. This dilutes the inspired oxygen and decreases the effective FiO2.',
        explanationWrong:
          'Faster breathing does not draw more oxygen from the mask because the flow rate is constant. The FiO2 from a simple mask is not constant—it varies with the patient\'s ventilatory pattern. The decrease in FiO2 depends on the ratio of mask flow to inspiratory flow, not a specific respiratory rate threshold.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 15,
        questionText:
          'A preterm neonate has a pre-ductal SpO2 of 97% and a post-ductal SpO2 of 82%. This difference is most consistent with:',
        choices: {
          A: 'Coarctation of the aorta',
          B: 'Right-to-left shunting through a patent ductus arteriosus',
          C: 'Pulse oximeter malfunction',
          D: 'Left-to-right shunting through an atrial septal defect',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A significant difference between pre-ductal (right hand) and post-ductal (foot) SpO2, with the pre-ductal value higher, indicates right-to-left shunting through a patent ductus arteriosus. Deoxygenated blood from the pulmonary artery crosses the PDA into the descending aorta, lowering post-ductal saturation.',
        explanationWrong:
          'Coarctation of the aorta may cause blood pressure differences but does not typically produce the degree of SpO2 differential seen here. Pulse oximeter malfunction would not consistently show a specific pre/post-ductal pattern. Left-to-right shunting through an ASD would not produce lower post-ductal saturations.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 16,
        questionText:
          'A 5-year-old child with a tracheostomy requires humidified oxygen at a precise concentration. Which device is most appropriate?',
        choices: {
          A: 'Cool mist nebulizer with a tracheostomy collar at variable FiO2',
          B: 'Nasal cannula inserted into the tracheostomy tube',
          C: 'Large-volume aerosol system with an air-entrainment nebulizer connected to a tracheostomy collar',
          D: 'Blow-by oxygen directed at the tracheostomy stoma',
        },
        correctChoice: 'C',
        explanationCorrect:
          'A large-volume aerosol system using an air-entrainment nebulizer connected to a tracheostomy collar provides both precise FiO2 delivery and adequate humidification. The air-entrainment mechanism allows selection of a specific oxygen concentration, and the aerosol system provides the necessary humidity to protect the airway.',
        explanationWrong:
          'A cool mist nebulizer provides humidity but typically does not offer precise FiO2 control. A nasal cannula is not designed for tracheostomy use. Blow-by oxygen provides neither precise FiO2 nor adequate humidification for a tracheostomy patient.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 17,
        questionText:
          'A blood gas from a ventilated neonate shows pH 7.52, PaCO2 25 mmHg, PaO2 110 mmHg, HCO3 20 mEq/L. Which ventilator adjustment is most appropriate?',
        choices: {
          A: 'Increase the ventilator rate to further lower PaCO2',
          B: 'Increase PEEP to improve oxygenation',
          C: 'Decrease the ventilator rate to allow PaCO2 to rise',
          D: 'Administer sodium bicarbonate',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The blood gas shows respiratory alkalosis (pH 7.52, PaCO2 25 mmHg) with hyperoxia (PaO2 110 mmHg). The neonate is being over-ventilated. Decreasing the ventilator rate will reduce minute ventilation, allowing PaCO2 to rise toward normal, which will correct the alkalosis. The FiO2 should also be reduced to target appropriate PaO2.',
        explanationWrong:
          'Increasing PEEP would not address the hyperventilation and could worsen hyperoxia. Increasing the ventilator rate would further lower PaCO2 and worsen the alkalosis. Sodium bicarbonate would worsen alkalosis and is not indicated.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 18,
        questionText:
          'Which of the following is a primary advantage of using an oxygen blender in neonatal oxygen delivery compared to using a flowmeter with a fixed oxygen source?',
        choices: {
          A: 'An oxygen blender eliminates the need for pulse oximetry monitoring',
          B: 'An oxygen blender allows precise titration of FiO2 from 0.21 to 1.0, reducing the risk of oxygen toxicity',
          C: 'An oxygen blender automatically adjusts FiO2 based on the patient\'s SpO2',
          D: 'An oxygen blender is only useful for patients requiring FiO2 greater than 0.60',
        },
        correctChoice: 'B',
        explanationCorrect:
          'An oxygen blender mixes compressed air and oxygen to deliver any desired FiO2 between 0.21 and 1.0. This precise control allows clinicians to titrate oxygen to the lowest effective concentration, which is critical in neonates to minimize risks of oxygen toxicity including retinopathy of prematurity and bronchopulmonary dysplasia.',
        explanationWrong:
          'An oxygen blender does not eliminate the need for pulse oximetry—continuous monitoring remains essential. Standard oxygen blenders do not automatically adjust FiO2; that requires closed-loop systems. Oxygen blenders are useful across the entire FiO2 range, not just above 0.60.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 19,
        questionText:
          'A preterm neonate on mechanical ventilation has arterial blood gas results: pH 7.38, PaCO2 42 mmHg, PaO2 70 mmHg, HCO3 24 mEq/L. The respiratory therapist calculates the oxygen index (OI) using a mean airway pressure of 12 cmH2O and FiO2 of 0.60. What is the OI and its clinical significance?',
        choices: {
          A: 'OI = 10.3, indicating significant oxygenation impairment that should prompt consideration of surfactant or therapy escalation',
          B: 'OI = 7, indicating no need for changes',
          C: 'OI = 15, indicating moderate lung disease not requiring escalation',
          D: 'OI = 5, indicating mild lung disease',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The Oxygen Index is calculated as (MAP x FiO2 x 100) / PaO2 = (12 x 0.60 x 100) / 70 = 10.3. An OI greater than 10 indicates significant oxygenation impairment. OI values above 15-25 may warrant consideration of high-frequency ventilation, and OI above 25-40 may indicate need for ECMO evaluation. An OI of 10.3 warrants close monitoring and possible therapy escalation.',
        explanationWrong:
          'The calculated OI is 10.3, not 5 or 7 or 15. An OI of 10.3 represents significant oxygenation difficulty and should not be dismissed as mild or ignored. The formula is (MAP x FiO2 x 100) / PaO2.',
        topic: 'Neonatal Blood Gas Interpretation',
      },
      {
        miniExamId: exam11.id,
        questionIndex: 20,
        questionText:
          'A 12-year-old child with neuromuscular disease requires long-term supplemental oxygen at home. The prescribed FiO2 is 0.28. Which oxygen delivery system best meets this patient\'s needs?',
        choices: {
          A: 'Non-rebreather mask',
          B: 'Simple face mask at 5 L/min',
          C: 'Air-entrainment (Venturi) mask set to 28%',
          D: 'Partial rebreather mask at 8 L/min',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An air-entrainment (Venturi) mask set to 28% provides the most consistent and precise delivery of a low FiO2. For a patient with neuromuscular disease who may have an abnormal breathing pattern, maintaining a stable FiO2 is important to prevent both hypoxemia and oxygen-induced hypoventilation.',
        explanationWrong:
          'A non-rebreather mask delivers FiO2 of 0.60-0.80, far exceeding the prescribed 0.28. A simple face mask at 5 L/min delivers approximately FiO2 0.40, which is higher than prescribed and is variable. A partial rebreather delivers FiO2 0.40-0.70, also exceeding the prescription.',
        topic: 'Pediatric Oxygen Delivery Systems',
      },
    ],
  })

  // ─── EXAM 12 ──────────────────────────────────────────────────────────
  // Topics: Congenital heart disease and respiratory management, Neonatal infection (sepsis, pneumonia, Group B Strep)
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-B, Q2-D, Q3-A, Q4-C, Q5-D, Q6-A, Q7-C, Q8-B, Q9-D, Q10-A, Q11-C, Q12-B, Q13-A, Q14-D, Q15-B, Q16-C, Q17-D, Q18-A, Q19-B, Q20-C
  const exam12 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 12',
      examIndex: 12,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam12.id,
        questionIndex: 1,
        questionText:
          'A newborn with tetralogy of Fallot experiences a hypercyanotic ("tet") spell with severe cyanosis and agitation. Which immediate intervention should the respiratory therapist recommend?',
        choices: {
          A: 'Administer 100% oxygen via non-rebreather mask and lay the infant flat',
          B: 'Begin continuous nebulized albuterol therapy',
          C: 'Place the infant in a knee-chest position and administer morphine as ordered',
          D: 'Immediately intubate and hyperventilate the infant',
        },
        correctChoice: 'C',
        explanationCorrect:
          'During a hypercyanotic spell in tetralogy of Fallot, the knee-chest position increases systemic vascular resistance (SVR), which reduces the right-to-left shunt across the ventricular septal defect. Morphine helps calm the infant, reducing oxygen consumption and sympathetic tone. These are the recommended first-line interventions.',
        explanationWrong:
          'While supplemental oxygen may help marginally, laying the infant flat does not increase SVR. Albuterol is not indicated for cyanotic heart disease spells. Immediate intubation and hyperventilation are not first-line and should be reserved for spells unresponsive to conservative measures.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 2,
        questionText:
          'A term neonate born to a mother with inadequate Group B Streptococcus (GBS) prophylaxis develops respiratory distress at 6 hours of life with grunting, tachypnea, and an oxygen requirement. Chest radiograph shows bilateral diffuse granular infiltrates. What is the most likely diagnosis?',
        choices: {
          A: 'Respiratory distress syndrome',
          B: 'Meconium aspiration syndrome',
          C: 'Transient tachypnea of the newborn',
          D: 'Early-onset GBS pneumonia/sepsis',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A term neonate with risk factors for GBS infection (inadequate maternal prophylaxis) presenting with respiratory distress within the first 24 hours, along with bilateral granular infiltrates on chest X-ray, most likely has early-onset GBS pneumonia/sepsis. The radiographic appearance can mimic RDS, but the clinical context of a term infant with GBS risk factors points to infection.',
        explanationWrong:
          'RDS is primarily a disease of preterm infants due to surfactant deficiency and would be less likely in a term neonate. Meconium aspiration presents with patchy infiltrates and hyperinflation, typically with meconium-stained fluid. TTN typically shows perihilar streaking and fluid in the fissures and resolves within 24-72 hours.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 3,
        questionText:
          'An infant with transposition of the great arteries (TGA) is awaiting surgical repair. Which medication is administered to maintain patency of the ductus arteriosus and improve mixing of oxygenated and deoxygenated blood?',
        choices: {
          A: 'Prostaglandin E1 (alprostadil)',
          B: 'Indomethacin',
          C: 'Furosemide',
          D: 'Sildenafil',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Prostaglandin E1 (alprostadil) maintains patency of the ductus arteriosus in ductal-dependent congenital heart lesions. In TGA, the PDA allows some mixing of oxygenated and deoxygenated blood between the parallel circulations, which is essential to sustain adequate oxygenation until surgical correction.',
        explanationWrong:
          'Indomethacin is used to close the PDA, which would be detrimental in this situation. Furosemide is a diuretic that does not affect ductal patency. Sildenafil is a pulmonary vasodilator used for pulmonary hypertension but does not maintain the ductus arteriosus.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 4,
        questionText:
          'A neonate with suspected early-onset sepsis has blood cultures drawn. Which empiric antibiotic regimen is the standard first-line treatment for early-onset neonatal sepsis?',
        choices: {
          A: 'Ampicillin and gentamicin',
          B: 'Ceftriaxone alone',
          C: 'Vancomycin and gentamicin',
          D: 'Piperacillin-tazobactam and fluconazole',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The standard empiric antibiotic regimen for early-onset neonatal sepsis (occurring within the first 72 hours of life) is ampicillin and gentamicin. Ampicillin covers Group B Streptococcus and Listeria monocytogenes, while gentamicin provides gram-negative coverage and synergistic bactericidal activity.',
        explanationWrong:
          'Vancomycin and gentamicin are typically reserved for late-onset sepsis or suspected MRSA infections. Ceftriaxone is contraindicated in neonates due to the risk of bilirubin displacement and calcium-ceftriaxone precipitation. Piperacillin-tazobactam and fluconazole are not standard first-line therapy for early-onset neonatal sepsis.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 5,
        questionText:
          'A neonate with a large ventricular septal defect (VSD) develops signs of congestive heart failure at 4 weeks of age with tachypnea, diaphoresis with feeding, and failure to thrive. Which respiratory finding is most characteristic of this left-to-right shunt lesion?',
        choices: {
          A: 'Severe cyanosis unresponsive to supplemental oxygen',
          B: 'Unilateral absence of breath sounds',
          C: 'Stridor with barking cough',
          D: 'Tachypnea with bilateral crackles from pulmonary overcirculation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A large VSD causes a left-to-right shunt that results in pulmonary overcirculation. The excessive pulmonary blood flow leads to pulmonary edema and congestion, manifesting as tachypnea and bilateral crackles. The increased work of breathing also contributes to poor feeding and failure to thrive.',
        explanationWrong:
          'Severe cyanosis unresponsive to oxygen is characteristic of cyanotic heart defects with right-to-left shunting, not a VSD with left-to-right shunt. Unilateral absence of breath sounds suggests pneumothorax, not CHF. Stridor with barking cough suggests croup, an upper airway condition unrelated to cardiac disease.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 6,
        questionText:
          'Which laboratory finding most strongly supports a diagnosis of neonatal sepsis?',
        choices: {
          A: 'Elevated C-reactive protein (CRP) with an immature-to-total neutrophil ratio (I:T ratio) greater than 0.2',
          B: 'Normal white blood cell count with elevated platelets',
          C: 'Isolated elevated hematocrit',
          D: 'Low serum bilirubin with normal glucose',
        },
        correctChoice: 'A',
        explanationCorrect:
          'An elevated CRP combined with an I:T ratio greater than 0.2 is highly suggestive of neonatal sepsis. The I:T ratio reflects the proportion of immature neutrophils (bands) relative to total neutrophils and indicates a bone marrow response to infection. CRP is an acute-phase reactant that rises in response to inflammation and infection.',
        explanationWrong:
          'A normal WBC with elevated platelets is not a typical finding in sepsis; thrombocytopenia is more common. Elevated hematocrit alone is not indicative of sepsis. Low bilirubin with normal glucose does not suggest infection.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 7,
        questionText:
          'When managing an infant with hypoplastic left heart syndrome (HLHS) prior to the Norwood procedure, which strategy is used to balance pulmonary and systemic blood flow?',
        choices: {
          A: 'Administer high-concentration supplemental oxygen to maximize PaO2',
          B: 'Hyperventilate to achieve a PaCO2 below 30 mmHg',
          C: 'Target SpO2 of 75-85% and allow mild hypercapnia to maintain pulmonary vascular resistance',
          D: 'Administer inhaled nitric oxide to reduce pulmonary vascular resistance',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In HLHS, the single right ventricle supplies both the pulmonary and systemic circulations. Excessive pulmonary blood flow at the expense of systemic flow leads to systemic hypoperfusion. Targeting SpO2 of 75-85% and allowing mild hypercapnia (PaCO2 40-50 mmHg) helps maintain adequate pulmonary vascular resistance to balance the two circulations.',
        explanationWrong:
          'High-concentration oxygen would decrease pulmonary vascular resistance, causing pulmonary overcirculation and systemic steal. Hyperventilation to low PaCO2 would similarly reduce PVR and worsen the imbalance. Inhaled nitric oxide reduces PVR, which would increase pulmonary blood flow and decrease systemic perfusion.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 8,
        questionText:
          'A 5-day-old neonate presents with temperature instability, lethargy, poor feeding, apnea, and a bulging fontanelle. Blood culture grows Group B Streptococcus. This presentation is most consistent with:',
        choices: {
          A: 'Early-onset GBS sepsis with pneumonia',
          B: 'Late-onset GBS sepsis with meningitis',
          C: 'Congenital cytomegalovirus infection',
          D: 'Neonatal herpes simplex encephalitis',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Late-onset GBS disease occurs after 72 hours (typically 7 days to 3 months) and most commonly presents as meningitis. The bulging fontanelle, lethargy, and apnea are classic signs of neonatal meningitis. At 5 days of age, this falls within the late-onset timeframe, and the GBS-positive blood culture confirms the pathogen.',
        explanationWrong:
          'Early-onset GBS sepsis occurs within the first 72 hours and primarily presents with pneumonia and respiratory distress rather than meningitis with a bulging fontanelle. CMV infection is typically acquired in utero and presents differently. Neonatal herpes would show vesicular lesions and is caused by HSV, not GBS.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 9,
        questionText:
          'A newborn with coarctation of the aorta shows differential cyanosis with pink upper extremities and cyanotic lower extremities. Which blood pressure finding would the respiratory therapist expect?',
        choices: {
          A: 'Equal blood pressures in all four extremities',
          B: 'Lower blood pressure in the upper extremities compared to the lower extremities',
          C: 'Elevated blood pressure only in the left arm',
          D: 'Higher blood pressure in the upper extremities compared to the lower extremities',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Coarctation of the aorta causes a narrowing of the aortic arch, typically distal to the left subclavian artery. This results in higher blood pressure proximal to the coarctation (upper extremities) and lower blood pressure distal to the coarctation (lower extremities). A systolic pressure gradient of more than 20 mmHg between the upper and lower extremities is significant.',
        explanationWrong:
          'Equal pressures in all extremities would indicate no obstruction. Lower upper extremity pressures would be the opposite of what occurs in coarctation. Elevated pressure only in the left arm would suggest a more unusual variant but is not the classic presentation.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 10,
        questionText:
          'A preterm neonate at 30 weeks gestation develops signs of infection on day 14 of life with temperature instability and increasing oxygen requirements. Blood culture is pending. In addition to antibiotics, which intervention is most important for respiratory support?',
        choices: {
          A: 'Closely monitor for apneic episodes and have resuscitation equipment immediately available',
          B: 'Immediately begin high-frequency oscillatory ventilation',
          C: 'Administer surfactant prophylactically',
          D: 'Place on a 100% FiO2 until culture results return',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Neonatal sepsis frequently causes apneic episodes in preterm infants. Close monitoring for apnea is essential because apnea may be the first sign of clinical deterioration. Having resuscitation equipment immediately available allows rapid intervention if respiratory failure occurs.',
        explanationWrong:
          'HFOV is not routinely initiated at the first sign of infection without evidence of ventilatory failure. Surfactant is indicated for surfactant deficiency, not infection. Using 100% FiO2 empirically until cultures return exposes the preterm neonate to unnecessary oxygen toxicity risk.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 11,
        questionText:
          'A newborn with a known atrial septal defect (ASD) undergoes pulse oximetry screening. Which result would the respiratory therapist expect in an infant with an isolated, uncomplicated ASD?',
        choices: {
          A: 'SpO2 below 80% in both pre-ductal and post-ductal sites',
          B: 'Significant difference between pre-ductal and post-ductal SpO2',
          C: 'SpO2 within normal range because the left-to-right shunt does not cause desaturation',
          D: 'Intermittent severe desaturations with feeding',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An isolated, uncomplicated ASD typically causes a left-to-right shunt because left atrial pressure exceeds right atrial pressure. This results in oxygenated blood flowing from the left atrium to the right atrium, which does not cause systemic desaturation. Therefore, pulse oximetry readings are typically normal in uncomplicated ASD.',
        explanationWrong:
          'SpO2 below 80% would indicate a significant cyanotic lesion, not an uncomplicated ASD. Pre/post-ductal differences are associated with PDA shunting, not ASD. While large ASDs may eventually cause symptoms, intermittent severe desaturations with feeding are not characteristic of an uncomplicated ASD.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 12,
        questionText:
          'Regarding the prevention of early-onset GBS disease, which maternal intrapartum antibiotic prophylaxis strategy is currently recommended?',
        choices: {
          A: 'All mothers should receive prophylaxis regardless of GBS status',
          B: 'Intravenous penicillin or ampicillin administered at least 4 hours before delivery to GBS-positive mothers',
          C: 'Oral amoxicillin given to GBS-positive mothers starting at 36 weeks gestation',
          D: 'Intramuscular ceftriaxone given once upon admission to labor and delivery',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current guidelines recommend intravenous penicillin (preferred) or ampicillin administered to GBS-positive mothers during labor at least 4 hours before delivery. This allows adequate time for the antibiotic to reach effective levels in the amniotic fluid and fetal tissues, significantly reducing the risk of early-onset GBS disease in the neonate.',
        explanationWrong:
          'Universal prophylaxis for all mothers is not recommended—only GBS-positive mothers or those with risk factors. Oral antibiotics during the antepartum period do not reliably prevent GBS transmission during delivery. Intramuscular ceftriaxone is not the standard approach; IV penicillin or ampicillin is the recommended route and drug.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 13,
        questionText:
          'In a neonate with a ductal-dependent cyanotic congenital heart lesion receiving prostaglandin E1 infusion, which side effect must the respiratory therapist be most prepared to manage?',
        choices: {
          A: 'Apnea requiring ventilatory support',
          B: 'Severe hypertension',
          C: 'Hyperglycemia',
          D: 'Polycythemia',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Apnea is one of the most significant side effects of prostaglandin E1 infusion, occurring in 10-12% of neonates. The respiratory therapist must be prepared with intubation equipment and ventilatory support when PGE1 is being administered. Other common side effects include fever, hypotension, and flushing.',
        explanationWrong:
          'PGE1 typically causes hypotension, not hypertension, due to its vasodilatory effects. Hyperglycemia and polycythemia are not recognized side effects of prostaglandin E1 therapy.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 14,
        questionText:
          'A 2-week-old neonate is diagnosed with congenital pneumonia caused by Chlamydia trachomatis acquired during vaginal delivery. Which clinical presentation is most characteristic of this infection?',
        choices: {
          A: 'High fever with purulent sputum production',
          B: 'Acute onset of severe respiratory distress at birth',
          C: 'Immediate post-birth apnea with seizures',
          D: 'Staccato cough, tachypnea, and conjunctivitis with an afebrile presentation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Chlamydial pneumonia in neonates typically presents between 1-3 months of age with a distinctive staccato (choppy) cough, tachypnea, and bilateral infiltrates. The infant is characteristically afebrile. Conjunctivitis from Chlamydia often precedes or accompanies the pneumonia. Peripheral eosinophilia is also commonly seen.',
        explanationWrong:
          'High fever with purulent sputum is more typical of bacterial pneumonia in older children. Acute severe respiratory distress at birth suggests conditions like RDS or GBS pneumonia, not chlamydial infection. Immediate post-birth apnea with seizures suggests perinatal asphyxia, not chlamydial pneumonia.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 15,
        questionText:
          'A newborn with total anomalous pulmonary venous return (TAPVR) with obstruction presents with severe cyanosis and respiratory distress. Chest radiograph shows a small heart with pulmonary edema. What makes this condition a surgical emergency?',
        choices: {
          A: 'The obstruction causes aortic valve stenosis',
          B: 'The obstructed pulmonary venous drainage causes severe pulmonary hypertension and inadequate systemic oxygenation',
          C: 'The condition always responds to prostaglandin E1 infusion',
          D: 'The small heart indicates myocardial ischemia requiring immediate bypass',
        },
        correctChoice: 'B',
        explanationCorrect:
          'In obstructed TAPVR, pulmonary venous blood cannot return normally to the left atrium. The obstruction causes pulmonary venous congestion, severe pulmonary edema, and pulmonary hypertension. Without surgical correction to redirect pulmonary venous return to the left atrium, the infant will have progressively worsening hypoxemia that is refractory to medical management.',
        explanationWrong:
          'TAPVR does not cause aortic valve stenosis. Prostaglandin E1 is generally not effective for obstructed TAPVR because maintaining the PDA does not resolve the pulmonary venous obstruction. The small heart on X-ray reflects decreased left heart filling, not myocardial ischemia.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 16,
        questionText:
          'A term neonate born by emergency cesarean section develops respiratory distress at 1 hour of life. Physical examination reveals diminished breath sounds on the right, scaphoid abdomen, and heart sounds displaced to the right. Chest radiograph shows bowel loops in the left hemithorax. Which congenital anomaly is present?',
        choices: {
          A: 'Right-sided pneumothorax',
          B: 'Left congenital diaphragmatic hernia',
          C: 'Tracheoesophageal fistula',
          D: 'Congenital lobar emphysema',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The classic presentation of a left congenital diaphragmatic hernia (CDH) includes respiratory distress, scaphoid abdomen (due to abdominal contents herniated into the chest), diminished or absent breath sounds on the affected side, mediastinal shift to the opposite side, and bowel loops visible in the chest on radiograph. The heart and mediastinum are displaced to the right.',
        explanationWrong:
          'A right-sided pneumothorax would not show bowel loops in the chest or scaphoid abdomen. TEF presents with feeding difficulties, excessive drooling, and inability to pass a nasogastric tube. Congenital lobar emphysema shows hyperinflation of a lobe, not bowel in the thorax.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 17,
        questionText:
          'Which pathophysiological mechanism explains why neonates are at higher risk for sepsis compared to older children and adults?',
        choices: {
          A: 'Neonates have excessive complement system activation',
          B: 'Neonates produce too many T-lymphocytes',
          C: 'Neonates have elevated maternal antibody levels that interfere with immune function',
          D: 'Neonates have decreased immunoglobulin levels, immature neutrophil function, and limited complement activity',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Neonates are immunologically immature with decreased levels of IgM and IgA (only IgG crosses the placenta), impaired neutrophil chemotaxis and phagocytosis, limited complement activation, and reduced cytokine production. These deficiencies make neonates particularly vulnerable to bacterial infections.',
        explanationWrong:
          'Neonates have decreased, not excessive, complement system activity. Neonates have immature T-lymphocyte function, not an overproduction of T cells. Maternal IgG antibodies are protective, not interfering—the problem is deficiency of other immunoglobulin classes and immune components.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 18,
        questionText:
          'A pediatric cardiologist performs a hyperoxia test on a cyanotic newborn. After exposure to 100% oxygen for 10 minutes, the PaO2 remains at 45 mmHg. This result most strongly suggests:',
        choices: {
          A: 'Normal neonatal transition with expected response',
          B: 'Primary pulmonary disease such as RDS',
          C: 'Cyanotic congenital heart disease with fixed right-to-left shunting',
          D: 'Persistent pulmonary hypertension that will respond to inhaled nitric oxide',
        },
        correctChoice: 'C',
        explanationCorrect:
          'In the hyperoxia test, a PaO2 that fails to rise above 100 mmHg (and especially remains below 50 mmHg) on 100% oxygen strongly suggests cyanotic congenital heart disease with a fixed anatomic right-to-left shunt. The deoxygenated blood bypasses the lungs entirely, so increasing the FiO2 has minimal effect on oxygenation.',
        explanationWrong:
          'Primary pulmonary disease typically shows at least some improvement in PaO2 on 100% oxygen, often rising above 100 mmHg. A normal transition would show PaO2 rising well above 100 mmHg. PPHN may show some response to oxygen and would typically show a PaO2 higher than 45 mmHg, though the distinction from CHD can be difficult.',
        topic: 'Congenital Heart Disease',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 19,
        questionText:
          'A neonate develops late-onset sepsis on day 21 of life in the NICU. Blood cultures grow coagulase-negative Staphylococcus. Which risk factor is most strongly associated with this type of late-onset infection?',
        choices: {
          A: 'Maternal chorioamnionitis',
          B: 'Prolonged use of central venous catheters',
          C: 'Vaginal delivery without maternal antibiotic prophylaxis',
          D: 'Maternal group B Streptococcus colonization',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Coagulase-negative Staphylococcus is the most common cause of late-onset neonatal sepsis in the NICU, and it is strongly associated with the use of central venous catheters and other indwelling devices. The bacteria colonize the catheter surface and form biofilms, leading to bloodstream infection.',
        explanationWrong:
          'Maternal chorioamnionitis is a risk factor for early-onset sepsis, not late-onset catheter-associated infections. Vaginal delivery without prophylaxis is a risk factor for early-onset GBS disease. Maternal GBS colonization is associated with early-onset GBS sepsis, not late-onset coagulase-negative Staphylococcus infection.',
        topic: 'Neonatal Infection',
      },
      {
        miniExamId: exam12.id,
        questionIndex: 20,
        questionText:
          'Which oxygen saturation target range is currently recommended for pulse oximetry screening of critical congenital heart disease in newborns?',
        choices: {
          A: 'A positive screen requires SpO2 below 80% in any extremity',
          B: 'Screening is performed only if the infant appears cyanotic',
          C: 'A failing screen is SpO2 below 90% in either extremity or a greater than 3% difference between right hand and foot',
          D: 'Normal screening requires SpO2 above 99% in both extremities',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The current CCHD pulse oximetry screening protocol considers a failing (positive) screen as SpO2 below 90% in the right hand or either foot, or an SpO2 below 95% in both the right hand and foot on three separate measurements, or a difference of greater than 3% between the right hand (pre-ductal) and foot (post-ductal). These criteria are designed to detect ductal-dependent and other critical congenital heart lesions.',
        explanationWrong:
          'A threshold of below 80% would miss many critical heart lesions and is far too low. Screening is performed universally on all newborns, not just those who appear cyanotic. Requiring SpO2 above 99% is unnecessarily stringent; normal newborn SpO2 is typically 95% or above.',
        topic: 'Congenital Heart Disease',
      },
    ],
  })

  // ─── EXAM 13 ──────────────────────────────────────────────────────────
  // Topics: Pediatric sedation and pain management, Apnea of prematurity
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-D, Q2-C, Q3-B, Q4-A, Q5-C, Q6-B, Q7-D, Q8-A, Q9-B, Q10-C, Q11-A, Q12-D, Q13-C, Q14-B, Q15-A, Q16-D, Q17-B, Q18-A, Q19-D, Q20-C
  const exam13 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 13',
      examIndex: 13,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam13.id,
        questionIndex: 1,
        questionText:
          'A preterm infant born at 30 weeks gestation on day 3 of life has repeated episodes of cessation of breathing lasting greater than 20 seconds accompanied by bradycardia and desaturation. Which type of apnea is this infant most likely experiencing?',
        choices: {
          A: 'Obstructive apnea',
          B: 'Reflex apnea from gastroesophageal reflux',
          C: 'Periodic breathing',
          D: 'Mixed apnea of prematurity',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Mixed apnea, which has both central and obstructive components, is the most common type of apnea of prematurity, accounting for approximately 50-75% of apneic events in preterm infants. The central component involves cessation of respiratory drive, while the obstructive component involves upper airway collapse. Events lasting greater than 20 seconds with bradycardia and desaturation are pathologic.',
        explanationWrong:
          'Pure obstructive apnea accounts for only about 10-20% of apnea of prematurity. Reflex apnea from GER is less common and would typically occur in relation to feeding. Periodic breathing is a normal pattern of brief pauses (less than 10-15 seconds) without bradycardia or desaturation and is not pathologic.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 2,
        questionText:
          'A 7-year-old child is intubated and mechanically ventilated in the PICU. The bedside nurse reports the patient is grimacing, has tense muscles, and appears to be fighting the ventilator. The COMFORT-B behavioral pain score is elevated. Which action should the respiratory therapist recommend first?',
        choices: {
          A: 'Increase the ventilator rate to override the patient\'s spontaneous efforts',
          B: 'Apply physical restraints to prevent self-extubation',
          C: 'Switch to a neuromuscular blocking agent to eliminate patient effort',
          D: 'Assess for pain and recommend appropriate analgesia before adjusting ventilator settings',
        },
        correctChoice: 'D',
        explanationCorrect:
          'An elevated COMFORT-B pain score with grimacing, muscle tension, and ventilator asynchrony suggests uncontrolled pain. The first action should be to assess for and treat pain with appropriate analgesia. Untreated pain causes ventilator asynchrony, increased oxygen consumption, and hemodynamic instability. Pain should be addressed before altering ventilator settings.',
        explanationWrong:
          'Increasing the ventilator rate does not address the underlying pain causing patient distress. Physical restraints do not treat pain and should only be used as a last resort. Neuromuscular blockade masks pain without treating it and should only be used after adequate sedation and analgesia are established.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 3,
        questionText:
          'Which medication is the first-line pharmacologic treatment for apnea of prematurity?',
        choices: {
          A: 'Theophylline',
          B: 'Caffeine citrate',
          C: 'Doxapram',
          D: 'Aminophylline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Caffeine citrate is the first-line pharmacologic treatment for apnea of prematurity. It has a wider therapeutic index, longer half-life, more predictable absorption, and fewer side effects compared to theophylline. The CAP trial demonstrated that caffeine reduces the incidence of BPD and improves neurodevelopmental outcomes in preterm infants.',
        explanationWrong:
          'Theophylline was previously used but has a narrower therapeutic index, requires more frequent monitoring, and has more side effects. Doxapram is a respiratory stimulant used only when methylxanthines fail, due to its side effect profile. Aminophylline is the IV form of theophylline and carries the same disadvantages.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 4,
        questionText:
          'A 3-year-old child requires procedural sedation for a CT scan. The child has no significant medical history. Which sedative agent provides adequate sedation while maintaining protective airway reflexes and spontaneous ventilation?',
        choices: {
          A: 'Ketamine',
          B: 'Propofol',
          C: 'Succinylcholine',
          D: 'Midazolam alone at high doses',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Ketamine produces a dissociative state that provides analgesia, sedation, and amnesia while preserving protective airway reflexes and spontaneous ventilation. It is commonly used for pediatric procedural sedation because it maintains respiratory drive, produces bronchodilation, and provides hemodynamic stability.',
        explanationWrong:
          'Propofol is a potent sedative that can cause apnea, loss of airway reflexes, and hypotension, requiring careful monitoring. Succinylcholine is a neuromuscular blocker, not a sedative, and would cause paralysis without sedation. High-dose midazolam alone can cause respiratory depression and does not provide analgesia.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 5,
        questionText:
          'What is the mechanism of action of caffeine in treating apnea of prematurity?',
        choices: {
          A: 'Direct stimulation of peripheral chemoreceptors',
          B: 'Inhibition of GABA receptors in the brainstem',
          C: 'Blockade of adenosine receptors in the brainstem, increasing respiratory center output and chemoreceptor sensitivity',
          D: 'Enhancement of surfactant production in type II pneumocytes',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Caffeine is a methylxanthine that works primarily by blocking adenosine receptors (A1 and A2A) in the brainstem. Adenosine is an inhibitory neurotransmitter that depresses respiratory drive. By blocking adenosine, caffeine increases respiratory center output, enhances CO2 sensitivity, improves diaphragmatic contractility, and increases minute ventilation.',
        explanationWrong:
          'Caffeine acts centrally on the brainstem, not primarily on peripheral chemoreceptors. It does not directly inhibit GABA receptors, though the net effect may involve reduced inhibitory signaling. Caffeine does not enhance surfactant production; that is the role of antenatal corticosteroids and exogenous surfactant.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 6,
        questionText:
          'A ventilated 5-year-old child in the PICU has been receiving continuous fentanyl and midazolam infusions for 10 days. The care team plans to wean sedation. Which complication is the respiratory therapist most concerned about during the weaning process?',
        choices: {
          A: 'Malignant hyperthermia',
          B: 'Iatrogenic withdrawal syndrome',
          C: 'Serotonin syndrome',
          D: 'Neuroleptic malignant syndrome',
        },
        correctChoice: 'B',
        explanationCorrect:
          'After prolonged use (typically greater than 5-7 days) of opioids and benzodiazepines, physical dependence develops. Abrupt or rapid discontinuation can trigger iatrogenic withdrawal syndrome, presenting with agitation, tremors, tachycardia, diaphoresis, vomiting, and seizures. Sedation weaning protocols typically recommend reducing doses by 10-20% per day.',
        explanationWrong:
          'Malignant hyperthermia is triggered by inhaled anesthetics and succinylcholine, not by opioid/benzodiazepine weaning. Serotonin syndrome is caused by serotonergic drugs, not opioids or benzodiazepines. Neuroleptic malignant syndrome is associated with dopamine antagonists (antipsychotics), not these sedative classes.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 7,
        questionText:
          'A 26-week preterm neonate is being evaluated for apnea. Which condition must be excluded before attributing apneic episodes to apnea of prematurity?',
        choices: {
          A: 'Physiologic periodic breathing',
          B: 'Mild nasal congestion',
          C: 'Neonatal sepsis',
          D: 'Hiccups',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Apnea of prematurity is a diagnosis of exclusion. Before attributing apnea to immaturity of the respiratory center, secondary causes must be ruled out. Neonatal sepsis is one of the most important conditions to exclude because apnea may be the initial presenting sign of sepsis in preterm infants. Other causes to exclude include metabolic disturbances, intracranial pathology, NEC, and temperature instability.',
        explanationWrong:
          'Periodic breathing is a normal pattern that does not cause significant bradycardia or desaturation. Mild nasal congestion, while potentially contributing to obstructive apnea, is not a life-threatening condition requiring urgent exclusion. Hiccups are benign and do not cause significant apnea.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 8,
        questionText:
          'Which pain assessment tool is most appropriate for evaluating pain in a mechanically ventilated, non-verbal 2-year-old child in the PICU?',
        choices: {
          A: 'FLACC (Face, Legs, Activity, Cry, Consolability) scale',
          B: 'Numeric Rating Scale (0-10)',
          C: 'Visual Analog Scale',
          D: 'Wong-Baker FACES scale',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The FLACC scale is a behavioral pain assessment tool designed for pre-verbal or non-verbal children, including those who are intubated and mechanically ventilated. It assesses five behavioral categories (Face, Legs, Activity, Cry, Consolability) scored 0-2 each, for a total score of 0-10. It does not require the patient to self-report.',
        explanationWrong:
          'The Numeric Rating Scale requires the patient to verbalize or indicate a number, which is not possible for a non-verbal 2-year-old. The Visual Analog Scale requires cognitive development beyond a 2-year-old\'s capacity. The Wong-Baker FACES scale requires the child to self-select a face, which requires verbal or pointing ability and is intended for children ages 3 and older.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 9,
        questionText:
          'A preterm infant born at 27 weeks gestation is on caffeine citrate for apnea of prematurity. At what corrected gestational age is caffeine therapy typically discontinued?',
        choices: {
          A: 'At 30 weeks corrected gestational age',
          B: 'At 33-34 weeks corrected gestational age when the infant is apnea-free for 5-7 days',
          C: 'Only after the infant reaches full-term (40 weeks)',
          D: 'At hospital discharge regardless of gestational age',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Caffeine therapy is typically discontinued around 33-34 weeks corrected gestational age when the infant has been apnea-free for 5-7 days. At this developmental stage, the brainstem respiratory control centers have matured sufficiently that apnea of prematurity usually resolves. The infant is then monitored for recurrence for at least 5-7 days off caffeine.',
        explanationWrong:
          'Discontinuing at 30 weeks is too early, as most preterm infants still have immature respiratory control. Waiting until full term is unnecessarily prolonged. Caffeine discontinuation is based on corrected gestational age and apnea-free status, not solely on discharge timing.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 10,
        questionText:
          'A 10-year-old child with severe burns covering 40% of total body surface area requires daily wound care dressing changes. Which analgesic approach is most appropriate for managing the procedural pain?',
        choices: {
          A: 'Oral acetaminophen 30 minutes before the procedure',
          B: 'Topical lidocaine applied to the burn surface',
          C: 'Multimodal approach with pre-procedural opioid analgesia, anxiolytic, and non-pharmacologic interventions',
          D: 'No analgesia because wound care is a necessary medical procedure',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Burn dressing changes are one of the most painful medical procedures. A multimodal approach combining pre-procedural opioid analgesia (such as morphine or fentanyl), an anxiolytic (such as midazolam), and non-pharmacologic interventions (distraction, music therapy, virtual reality) provides the most effective pain management.',
        explanationWrong:
          'Oral acetaminophen alone is insufficient for the severe pain associated with burn wound care. Topical lidocaine on burn surfaces may be unreliable due to altered absorption and is not adequate as sole analgesia for dressing changes. Withholding analgesia for any painful procedure is unethical and harmful.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 11,
        questionText:
          'Which non-pharmacologic intervention is recommended as a first-line approach for managing mild apneic episodes in preterm neonates?',
        choices: {
          A: 'Gentle tactile stimulation such as rubbing the back or flicking the soles of the feet',
          B: 'Vigorous chest compressions',
          C: 'Bag-mask ventilation at high pressures',
          D: 'Immediate endotracheal intubation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Gentle tactile stimulation is the appropriate first-line intervention for mild apneic episodes. Rubbing the back, trunk, or extremities, or flicking the soles of the feet provides proprioceptive input that stimulates the respiratory center to resume breathing. This approach is effective for the majority of self-resolving apneic events.',
        explanationWrong:
          'Chest compressions are part of CPR for cardiac arrest, not for apnea management. Bag-mask ventilation should be reserved for prolonged apnea unresponsive to stimulation or when accompanied by significant bradycardia and desaturation. Immediate intubation is reserved for recurrent severe apnea unresponsive to other interventions.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 12,
        questionText:
          'Dexmedetomidine is increasingly used for sedation in the PICU. Which unique property makes it particularly useful in pediatric patients requiring sedation while maintaining respiratory drive?',
        choices: {
          A: 'It provides complete neuromuscular blockade',
          B: 'It is a benzodiazepine with long half-life',
          C: 'It causes significant respiratory depression at therapeutic doses',
          D: 'It is a selective alpha-2 adrenergic agonist that provides sedation and analgesia with minimal respiratory depression',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Dexmedetomidine is a highly selective alpha-2 adrenergic agonist that provides dose-dependent sedation resembling natural sleep, along with mild analgesia and anxiolysis. Its key advantage is that it produces minimal respiratory depression at therapeutic doses, making it valuable for patients who need sedation while maintaining spontaneous ventilation.',
        explanationWrong:
          'Dexmedetomidine does not cause neuromuscular blockade—it is not a paralytic agent. It is not a benzodiazepine; it belongs to the alpha-2 agonist class. One of its primary advantages is the lack of significant respiratory depression, not the presence of it.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 13,
        questionText:
          'A preterm neonate at 29 weeks gestation is on nasal CPAP for apnea of prematurity. What is the primary mechanism by which CPAP helps reduce apneic episodes?',
        choices: {
          A: 'CPAP splints the upper airway open, preventing the obstructive component of mixed apnea, and stabilizes chest wall mechanics',
          B: 'CPAP delivers additional oxygen to prevent hypoxic apnea',
          C: 'CPAP increases PaCO2 to stimulate the respiratory center',
          D: 'CPAP stimulates peripheral chemoreceptors through increased airflow',
        },
        correctChoice: 'A',
        explanationCorrect:
          'CPAP provides continuous positive pressure that splints the upper airway open, which addresses the obstructive component of mixed apnea. Additionally, CPAP stabilizes the highly compliant preterm chest wall, maintains functional residual capacity (FRC), and reduces chest wall distortion, all of which decrease the frequency and severity of apneic episodes.',
        explanationWrong:
          'CPAP does not increase PaCO2; if anything, improved ventilation may help maintain normal CO2 levels. While CPAP can be used with supplemental oxygen, its anti-apneic effect is from the positive pressure, not the oxygen. CPAP does not primarily act by stimulating peripheral chemoreceptors.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 14,
        questionText:
          'During moderate procedural sedation of a 6-year-old child, the respiratory therapist observes the patient\'s respiratory rate has decreased from 20 to 8 breaths per minute with an SpO2 of 91%. The patient responds only to painful stimulation. Which level of sedation has this patient reached?',
        choices: {
          A: 'Minimal sedation (anxiolysis)',
          B: 'Deep sedation',
          C: 'General anesthesia',
          D: 'Moderate sedation (conscious sedation)',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The patient displays characteristics of deep sedation: respiratory depression (rate 8 with desaturation), response only to painful stimulation (not to verbal commands), and loss of consciousness. This represents a deeper level than the intended moderate sedation and requires immediate intervention including airway management.',
        explanationWrong:
          'Minimal sedation involves normal response to verbal stimulation with no respiratory depression. The description exceeds the criteria for moderate sedation, where the patient should respond to verbal commands and maintain adequate spontaneous ventilation. General anesthesia involves complete loss of consciousness and loss of protective reflexes, typically requiring airway intervention.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 15,
        questionText:
          'In a preterm infant receiving caffeine citrate, which of the following is the standard loading dose?',
        choices: {
          A: '20 mg/kg of caffeine citrate (equivalent to 10 mg/kg of caffeine base)',
          B: '5 mg/kg of caffeine citrate',
          C: '40 mg/kg of caffeine citrate',
          D: '10 mg/kg of caffeine base followed by a second 10 mg/kg dose at 6 hours',
        },
        correctChoice: 'A',
        explanationCorrect:
          'The standard loading dose of caffeine citrate is 20 mg/kg IV or PO, which is equivalent to 10 mg/kg of caffeine base (caffeine citrate is approximately 50% caffeine base by weight). This is followed by a maintenance dose of 5-10 mg/kg/day of caffeine citrate beginning 24 hours after the loading dose.',
        explanationWrong:
          'A loading dose of 5 mg/kg of caffeine citrate is too low and represents a maintenance dose. A loading dose of 40 mg/kg is excessive and could cause toxicity. Dosing is typically given as a single loading dose, not split doses at 6-hour intervals.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 16,
        questionText:
          'A ventilated neonate in the NICU requires pain management for an invasive procedure. Which validated pain assessment tool is specifically designed for neonates?',
        choices: {
          A: 'COMFORT-B scale',
          B: 'FLACC scale',
          C: 'Numeric Rating Scale',
          D: 'CRIES (Crying, Requires O2, Increased vitals, Expression, Sleeplessness) scale',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The CRIES scale is a neonatal-specific pain assessment tool that evaluates five parameters: Crying, Requires oxygen for SpO2 above 95%, Increased vital signs (heart rate and blood pressure), Expression (facial), and Sleeplessness. Each parameter is scored 0-2 for a total of 0-10. It was specifically validated for neonatal postoperative pain.',
        explanationWrong:
          'The COMFORT-B scale, while used in PICUs, was originally designed for older pediatric patients. The FLACC scale is validated for children aged 2 months to 7 years. The Numeric Rating Scale requires self-reporting, which is impossible for neonates.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 17,
        questionText:
          'A home apnea monitoring program is being set up for a preterm infant about to be discharged. Which parameter settings are standard for a neonatal home apnea monitor?',
        choices: {
          A: 'Heart rate alarm only at less than 60 bpm',
          B: 'Apnea alarm at 20 seconds of cessation and heart rate alarm at less than 80 bpm or greater than 200 bpm',
          C: 'SpO2 alarm only at less than 85%',
          D: 'Respiratory rate alarm at less than 30 breaths per minute',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Standard neonatal home apnea monitor settings include an apnea alarm that triggers after 20 seconds of cessation of breathing and heart rate alarms for bradycardia (less than 80 bpm) and tachycardia (greater than 200 bpm). These parameters are designed to detect clinically significant apnea and associated bradycardia that require caregiver intervention.',
        explanationWrong:
          'A heart rate alarm only at less than 60 bpm would miss clinically significant bradycardia in neonates. SpO2-only monitoring does not detect apnea directly. Respiratory rate alarms alone do not capture central apnea events or associated cardiac changes.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 18,
        questionText:
          'Which of the following opioid analgesics is preferred for procedural pain management in neonates due to its rapid onset and short duration of action?',
        choices: {
          A: 'Methadone',
          B: 'Morphine',
          C: 'Fentanyl',
          D: 'Codeine',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Fentanyl is the preferred opioid for neonatal procedural pain due to its rapid onset (1-2 minutes IV), short duration of action (30-60 minutes), potency (50-100 times more potent than morphine), and relative hemodynamic stability. It causes less histamine release than morphine, resulting in fewer hypotensive episodes.',
        explanationWrong:
          'Morphine has a slower onset (5-10 minutes IV) and longer duration, making it less ideal for brief procedures. It also causes more histamine release and hypotension. Methadone has a very long half-life and is not appropriate for acute procedural pain. Codeine is contraindicated in children due to variable CYP2D6 metabolism leading to unpredictable effects.',
        topic: 'Pediatric Sedation and Pain Management',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 19,
        questionText:
          'A preterm neonate has been having increasing apneic episodes despite maximum caffeine therapy and nasal CPAP. The episodes are accompanied by bradycardia to 60 bpm and desaturations to 70%. What is the next appropriate step in management?',
        choices: {
          A: 'Increase caffeine dose beyond the therapeutic range',
          B: 'Switch from caffeine to theophylline',
          C: 'Discontinue CPAP and place on room air',
          D: 'Consider intubation and mechanical ventilation',
        },
        correctChoice: 'D',
        explanationCorrect:
          'When apnea of prematurity is refractory to maximum pharmacologic therapy (caffeine) and non-invasive respiratory support (CPAP), and episodes are accompanied by significant bradycardia and desaturation, intubation and mechanical ventilation should be considered. This provides definitive airway protection and ensures adequate ventilation during apneic events.',
        explanationWrong:
          'Increasing caffeine beyond the therapeutic range increases the risk of toxicity (tachycardia, seizures) without proven additional benefit. Switching to theophylline is not likely to provide additional benefit over maximum caffeine therapy given similar mechanisms. Discontinuing CPAP would remove the beneficial airway splinting effect and worsen the apnea.',
        topic: 'Apnea of Prematurity',
      },
      {
        miniExamId: exam13.id,
        questionIndex: 20,
        questionText:
          'Non-pharmacologic pain management is an important component of neonatal pain care. Which intervention has strong evidence for reducing procedural pain during heel lance blood draws in neonates?',
        choices: {
          A: 'Placing the neonate under a radiant warmer during the procedure',
          B: 'Playing recorded music during the procedure',
          C: 'Oral sucrose administration 2 minutes prior to the painful stimulus combined with non-nutritive sucking',
          D: 'Swaddling alone without any other intervention',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Oral sucrose (12-24% solution, 0.1-0.5 mL) administered 2 minutes before a painful stimulus combined with non-nutritive sucking (pacifier) has strong evidence for reducing behavioral pain responses during minor procedures such as heel lance. The sweet taste activates endogenous opioid pathways, and sucking provides additional comfort.',
        explanationWrong:
          'Radiant warmers maintain thermoregulation but do not provide analgesia. Music therapy may have a calming effect but has limited evidence for acute procedural pain relief in neonates. Swaddling alone provides some comfort but is less effective than sucrose combined with non-nutritive sucking for procedural pain.',
        topic: 'Pediatric Sedation and Pain Management',
      },
    ],
  })

  // ─── EXAM 14 ──────────────────────────────────────────────────────────
  // Topics: Neonatal transport, Pediatric pulmonary function testing
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-A, Q2-D, Q3-C, Q4-B, Q5-D, Q6-C, Q7-A, Q8-B, Q9-C, Q10-D, Q11-A, Q12-B, Q13-D, Q14-C, Q15-A, Q16-B, Q17-D, Q18-A, Q19-B, Q20-C
  const exam14 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 14',
      examIndex: 14,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam14.id,
        questionIndex: 1,
        questionText:
          'During neonatal transport of a 1200-gram premature infant, which environmental factor is the highest priority for the transport team to maintain?',
        choices: {
          A: 'Thermoregulation with a target axillary temperature of 36.5-37.5°C',
          B: 'Ambient lighting at maximum brightness for assessment',
          C: 'Transport incubator temperature set to room temperature',
          D: 'Noise levels above 80 decibels to maintain alertness',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Thermoregulation is the highest priority during neonatal transport. Premature infants are highly susceptible to cold stress due to their large body surface area to weight ratio, thin skin, decreased subcutaneous fat, and inability to generate heat through shivering. Hypothermia increases oxygen consumption, metabolic acidosis risk, and mortality. Target temperature is 36.5-37.5°C.',
        explanationWrong:
          'Maximum brightness increases stress and is unnecessary for routine monitoring. The transport incubator should be preheated to maintain the neutral thermal environment, not set to room temperature. Excessive noise increases stress and should be minimized during transport.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 2,
        questionText:
          'When performing spirometry on a cooperative 8-year-old child, the respiratory therapist obtains an FEV1/FVC ratio of 65% with an FEV1 of 68% predicted. What pattern does this suggest?',
        choices: {
          A: 'Restrictive lung disease',
          B: 'Normal spirometry for a pediatric patient',
          C: 'Mixed obstructive and restrictive pattern',
          D: 'Obstructive lung disease',
        },
        correctChoice: 'D',
        explanationCorrect:
          'A reduced FEV1/FVC ratio (below 80% in children) with a reduced FEV1 (below 80% predicted) indicates an obstructive pattern. The low ratio shows that a disproportionately small amount of the forced vital capacity is exhaled in the first second, consistent with airflow limitation from airway obstruction such as asthma.',
        explanationWrong:
          'Restrictive disease shows a reduced FVC with a normal or elevated FEV1/FVC ratio. Normal pediatric spirometry shows FEV1/FVC above 80% with FEV1 above 80% predicted. A mixed pattern would show both reduced FVC and reduced FEV1/FVC ratio.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 3,
        questionText:
          'Prior to neonatal transport, the respiratory therapist must verify that the transport ventilator has an adequate gas supply. For a transport of estimated 2 hours with a ventilator consuming 8 L/min of blended gas, what is the minimum oxygen cylinder volume needed (assuming an E-cylinder with 660 liters when full)?',
        choices: {
          A: 'Two full E-cylinders (1320 liters) to include a safety margin',
          B: 'One full E-cylinder (660 liters)',
          C: 'One half-full E-cylinder (330 liters)',
          D: 'No cylinders needed if wall oxygen is available during loading',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For a 2-hour transport at 8 L/min consumption, the minimum gas needed is 960 liters (8 x 120 minutes). One E-cylinder holds 660 liters, which is insufficient. Two E-cylinders provide 1320 liters, which covers the 960 liters needed plus a safety margin for unexpected delays, equipment issues, or increased ventilatory demands.',
        explanationWrong:
          'A half-full E-cylinder provides only 330 liters, lasting approximately 41 minutes. A single full E-cylinder provides 660 liters, lasting approximately 82 minutes, which is insufficient for a 2-hour transport. Wall oxygen is unavailable during ground or air transport.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 4,
        questionText:
          'A 6-year-old child with asthma performs a bronchodilator response test. The pre-bronchodilator FEV1 is 1.5 L and the post-bronchodilator FEV1 is 1.8 L. What is the percent improvement and does it indicate a positive bronchodilator response?',
        choices: {
          A: '10% improvement, which is a negative response',
          B: '20% improvement, which is a positive response',
          C: '30% improvement, which is a negative response',
          D: '15% improvement, which is borderline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The percent improvement is calculated as [(1.8 - 1.5) / 1.5] x 100 = 20%. An increase of 12% or more in FEV1 (with an absolute increase of at least 200 mL in adults, though this absolute criterion may not apply to younger children) after bronchodilator administration is considered a positive response, indicating reversible airway obstruction consistent with asthma.',
        explanationWrong:
          'The calculated improvement is 20%, not 10%, 30%, or 15%. A 20% improvement clearly exceeds the 12% threshold for a positive bronchodilator response.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 5,
        questionText:
          'During air medical transport of a neonate, the transport team must account for changes in gas volumes with altitude. As the unpressurized helicopter ascends from sea level to 5000 feet, what happens to the volume of gas in a non-vented pneumothorax?',
        choices: {
          A: 'The gas volume decreases proportionally',
          B: 'The gas volume remains unchanged',
          C: 'The gas volume changes are clinically insignificant',
          D: 'The gas volume expands, potentially worsening the pneumothorax',
        },
        correctChoice: 'D',
        explanationCorrect:
          'According to Boyle\'s law, as altitude increases and barometric pressure decreases, trapped gas volumes expand. A non-vented pneumothorax will expand during ascent, potentially converting a small pneumothorax into a tension pneumothorax. This is why chest tubes should be placed and functioning before air transport of a neonate with a known pneumothorax.',
        explanationWrong:
          'Gas volume increases with altitude as pressure decreases, not the opposite. The volume does not remain unchanged because pressure changes directly affect trapped gas volumes. At 5000 feet, the barometric pressure drops enough to cause clinically significant gas expansion, approximately 17% increase.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 6,
        questionText:
          'Which pulmonary function test is most useful for diagnosing exercise-induced bronchoconstriction (EIB) in a pediatric patient?',
        choices: {
          A: 'Resting spirometry alone',
          B: 'Diffusion capacity (DLCO) testing',
          C: 'Exercise challenge test with pre- and post-exercise spirometry',
          D: 'Lung volume measurement by plethysmography',
        },
        correctChoice: 'C',
        explanationCorrect:
          'An exercise challenge test with pre- and post-exercise spirometry is the gold standard for diagnosing EIB. The patient performs standardized exercise (usually treadmill or cycle ergometer) while spirometry is measured before and at intervals after exercise. A decrease in FEV1 of 10% or more from baseline after exercise is diagnostic of EIB.',
        explanationWrong:
          'Resting spirometry may be normal in patients with EIB, as the obstruction only occurs with exercise. DLCO measures gas diffusion capacity and is not relevant to EIB diagnosis. Lung volume measurement assesses static volumes and does not diagnose dynamic bronchoconstriction.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 7,
        questionText:
          'The neonatal transport team is preparing to move a ventilated neonate from a community hospital to a level IV NICU. Which communication step is essential before departing the referring facility?',
        choices: {
          A: 'Confirm the receiving NICU has an available bed and the accepting attending has been notified with a verbal report',
          B: 'Ensure the parents have signed a generic hospital transfer form without explanation',
          C: 'Contact the ambulance company before speaking with the receiving team',
          D: 'Wait for all laboratory results to be finalized before initiating contact',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Before departing the referring facility, the transport team must confirm that the receiving NICU has an available bed and that the accepting neonatologist or attending physician has received a verbal report. This ensures continuity of care, appropriate resource allocation, and that the receiving team is prepared for the patient\'s arrival.',
        explanationWrong:
          'Parents should receive a full explanation of the transfer and give informed consent, not just sign a form. Transport logistics should be coordinated after medical acceptance is confirmed. Waiting for all labs delays transport unnecessarily; critical results can be communicated en route.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 8,
        questionText:
          'In pediatric pulmonary function testing, what is the minimum age at which most children can reliably perform standard spirometry with acceptable reproducibility?',
        choices: {
          A: 'Age 3 years',
          B: 'Age 2 years',
          C: 'Age 10 years',
          D: 'Age 5-6 years',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Most children can reliably perform standard spirometry with acceptable reproducibility by age 5-6 years. At this age, children can typically follow instructions for a forced maximal expiration, coordinate effort, and produce reproducible results. Younger children may require modified techniques or infant pulmonary function testing equipment.',
        explanationWrong:
          'Age 3 is generally too young for standard spirometry, though some programs have success with preschool spirometry. Age 10 is overly conservative; most children master spirometry well before this age. Age 2 is too young for any standard spirometry technique.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 9,
        questionText:
          'A critically ill neonate requires transport from a rural hospital. The transport team arrives and finds the infant on a conventional ventilator with settings: PIP 28, PEEP 5, Rate 40, FiO2 0.80. The infant\'s most recent ABG shows pH 7.25, PaCO2 55, PaO2 45. What should the transport team do regarding ventilator management?',
        choices: {
          A: 'Immediately switch to high-frequency ventilation for transport',
          B: 'Maintain current settings without any changes until arrival at the receiving facility',
          C: 'Optimize ventilator settings on the transport ventilator to address the respiratory acidosis and hypoxemia before departing',
          D: 'Extubate and place on nasal CPAP for easier transport',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The transport team should stabilize the infant before departing by optimizing ventilator settings on the transport ventilator. The ABG shows respiratory acidosis (elevated PaCO2) and hypoxemia (low PaO2) that should be addressed. Adjustments might include increasing the rate or PIP to improve ventilation and verifying FiO2 delivery. Departing with an unstable patient increases transport risk.',
        explanationWrong:
          'Switching to HFOV during transport requires specialized equipment and expertise that may not be available. Maintaining settings that produce suboptimal blood gases could lead to deterioration during transport. Extubating a critically ill neonate requiring high ventilatory support would be dangerous.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 10,
        questionText:
          'A 12-year-old child with cystic fibrosis has the following PFT results: FVC 70% predicted, FEV1 55% predicted, FEV1/FVC 62%, TLC 110% predicted, RV 180% predicted. Which interpretation is most accurate?',
        choices: {
          A: 'Isolated restrictive pattern',
          B: 'Normal pulmonary function',
          C: 'Isolated mild obstructive pattern',
          D: 'Obstructive pattern with air trapping',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The low FEV1/FVC ratio (62%) with reduced FEV1 (55% predicted) indicates obstruction. The elevated TLC (110%) and markedly elevated RV (180%) indicate hyperinflation and air trapping, which are characteristic of obstructive lung disease in cystic fibrosis. The reduced FVC reflects air trapping limiting the amount of air that can be exhaled.',
        explanationWrong:
          'Restrictive disease would show reduced TLC, not elevated TLC. Normal PFT values would show all parameters within predicted ranges. The severity exceeds mild obstruction given the FEV1 of 55% predicted, and the elevated RV indicates significant air trapping beyond simple obstruction.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 11,
        questionText:
          'Which piece of equipment is considered essential for every neonatal transport, regardless of the infant\'s current condition?',
        choices: {
          A: 'A self-inflating resuscitation bag with appropriate-sized masks',
          B: 'A high-frequency oscillatory ventilator',
          C: 'An adult-sized laryngoscope as backup',
          D: 'A nitric oxide delivery system',
        },
        correctChoice: 'A',
        explanationCorrect:
          'A self-inflating resuscitation bag with appropriately sized masks is essential for every neonatal transport because the infant\'s condition can deteriorate rapidly during transport. It provides the ability to deliver manual ventilation if the ventilator fails, if accidental extubation occurs, or if the infant requires immediate resuscitation, regardless of the current level of respiratory support.',
        explanationWrong:
          'High-frequency ventilation is not routinely available or necessary for all transports. Adult laryngoscope sizes are inappropriate for neonates. Nitric oxide delivery systems are specialized equipment indicated for specific conditions like PPHN, not required for routine transports.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 12,
        questionText:
          'During a methacholine challenge test in a 10-year-old patient to assess airway hyperresponsiveness, what is the endpoint that defines a positive test?',
        choices: {
          A: 'A 10% decrease in FVC from baseline',
          B: 'A 20% decrease in FEV1 from baseline (PC20)',
          C: 'Any detectable decrease in peak expiratory flow',
          D: 'A 15% increase in RV from baseline',
        },
        correctChoice: 'B',
        explanationCorrect:
          'A methacholine challenge test is positive when FEV1 decreases by 20% or more from the baseline value. The provocative concentration of methacholine causing a 20% fall in FEV1 is called the PC20. A PC20 less than 4 mg/mL indicates moderate-to-severe airway hyperresponsiveness, while 4-16 mg/mL indicates mild hyperresponsiveness.',
        explanationWrong:
          'FVC is not the primary endpoint for methacholine challenge interpretation. Any decrease in PEF is not specific enough and could represent normal variability. Residual volume changes are not measured during a methacholine challenge, which relies on spirometric endpoints.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 13,
        questionText:
          'During neonatal transport, the transport isolette alarm indicates the battery power is at 15%. The estimated remaining transport time is 45 minutes. What is the most appropriate action?',
        choices: {
          A: 'Turn off the isolette heater to conserve battery',
          B: 'Connect the isolette to the vehicle\'s power supply and verify the connection is functional',
          C: 'Increase speed to reduce transport time',
          D: 'Continue transport without concern because 15% is sufficient',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Transport isolettes should be connected to the vehicle\'s power supply (ambulance or aircraft inverter) whenever possible to conserve battery power. At 15% battery with 45 minutes remaining, connecting to vehicle power is essential to maintain thermoregulation and monitoring capabilities. Battery power should be reserved as backup for loading/unloading.',
        explanationWrong:
          'Turning off the heater would subject the neonate to cold stress, which is dangerous. Assuming 15% battery is sufficient for 45 minutes is risky and depends on the equipment\'s specific consumption rate. Increasing speed introduces safety risks and may not be possible.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 14,
        questionText:
          'Infant pulmonary function testing (iPFT) uses the raised volume rapid thoracoabdominal compression (RVRTC) technique. What does this test measure in sedated infants?',
        choices: {
          A: 'Only tidal breathing parameters',
          B: 'Static lung compliance only',
          C: 'Forced expiratory flow-volume curves similar to adult spirometry, including FVC and FEV0.5',
          D: 'Only functional residual capacity',
        },
        correctChoice: 'C',
        explanationCorrect:
          'The RVRTC technique inflates the infant\'s lungs to a standardized volume and then applies rapid thoracoabdominal compression to produce a forced expiratory maneuver. This generates flow-volume curves analogous to adult spirometry, allowing measurement of forced vital capacity (FVC), FEV0.5 (since infants have shorter expiratory times than adults), and forced expiratory flows.',
        explanationWrong:
          'RVRTC produces forced expiratory maneuvers, not just tidal breathing parameters. Static compliance is measured by different techniques. While FRC can be measured in infant PFTs, RVRTC specifically measures forced expiratory parameters, not just FRC.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 15,
        questionText:
          'What is the recommended mode of neonatal transport for a critically ill neonate requiring transport over a distance of 30 miles from a community hospital to a regional NICU?',
        choices: {
          A: 'Ground ambulance transport with a specialized neonatal transport team',
          B: 'Fixed-wing aircraft',
          C: 'Private vehicle with portable equipment',
          D: 'Helicopter transport is always preferred regardless of distance',
        },
        correctChoice: 'A',
        explanationCorrect:
          'For distances of approximately 30 miles (generally up to 150 miles), ground ambulance transport with a specialized neonatal transport team is the standard and preferred mode. Ground transport allows for a more controlled environment, easier access to the patient, lower cost, and avoidance of altitude-related gas expansion issues. It also avoids weather-related flight restrictions.',
        explanationWrong:
          'Fixed-wing aircraft are typically used for distances greater than 150-200 miles. A private vehicle lacks the necessary monitoring, equipment, and medical personnel. Helicopter transport has specific indications (distance 50-150 miles, time-critical conditions, traffic/terrain barriers) and is not always preferred, especially for shorter distances where ground transport is efficient.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 16,
        questionText:
          'A pediatric patient with suspected vocal cord dysfunction (VCD) undergoes flow-volume loop analysis. Which finding on the inspiratory portion of the flow-volume loop is characteristic of VCD?',
        choices: {
          A: 'Normal inspiratory loop with a flattened expiratory loop',
          B: 'Flattening or truncation of the inspiratory limb of the flow-volume loop',
          C: 'Elevated peak expiratory flow with normal inspiratory flow',
          D: 'Reduced expiratory flows at all lung volumes with normal inspiratory limb',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Vocal cord dysfunction causes paradoxical adduction of the vocal cords during inspiration, creating a variable extrathoracic obstruction. This produces characteristic flattening or truncation of the inspiratory limb of the flow-volume loop while the expiratory limb remains relatively normal. This pattern distinguishes VCD from asthma.',
        explanationWrong:
          'A flattened expiratory loop with normal inspiratory loop suggests intrathoracic obstruction, not VCD. Elevated peak expiratory flow is not characteristic of any obstruction. Reduced expiratory flows at all volumes with a normal inspiratory limb suggest intrathoracic obstruction such as asthma.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 17,
        questionText:
          'A neonatal transport team encounters vibration artifact on the pulse oximeter and cardiorespiratory monitor during ground transport. Which strategy best addresses this issue?',
        choices: {
          A: 'Disconnect monitoring equipment during transport and rely on visual assessment',
          B: 'Use only capnography for monitoring during transport',
          C: 'Accept the artifact and document that monitoring was unreliable',
          D: 'Secure the sensor properly, use motion-resistant pulse oximetry technology, and minimize vibration transmission to the infant',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Vibration artifact during transport is a known challenge. The best approach includes properly securing monitoring sensors, using motion-resistant pulse oximetry technology (such as signal extraction technology), padding the transport platform to dampen vibration, and securing cables to prevent movement. This maintains reliable monitoring during transport.',
        explanationWrong:
          'Disconnecting monitoring during transport is unsafe as the infant\'s condition can change rapidly. Capnography alone does not replace pulse oximetry and cardiac monitoring. Accepting unreliable monitoring is unacceptable when strategies exist to improve signal quality.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 18,
        questionText:
          'Exhaled nitric oxide (FeNO) measurement is used in pediatric patients. An elevated FeNO level in a child with chronic cough is most suggestive of:',
        choices: {
          A: 'Cystic fibrosis exacerbation',
          B: 'Bacterial pneumonia',
          C: 'Eosinophilic airway inflammation consistent with allergic asthma',
          D: 'Vocal cord dysfunction',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Elevated FeNO levels (greater than 35 ppb in children) indicate eosinophilic airway inflammation, which is a hallmark of allergic (atopic) asthma. FeNO measurement is a non-invasive biomarker that helps diagnose asthma, predict steroid responsiveness, and monitor treatment adherence in pediatric patients.',
        explanationWrong:
          'Bacterial pneumonia does not typically cause elevated FeNO; bacterial infections are associated with neutrophilic rather than eosinophilic inflammation. Cystic fibrosis exacerbations are primarily neutrophilic. Vocal cord dysfunction does not cause elevated FeNO levels.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 19,
        questionText:
          'During back-transport of a stable growing preterm infant from a level IV NICU to a community hospital closer to the family\'s home, which level of respiratory support is most appropriate for the transport team to maintain?',
        choices: {
          A: 'The infant should be on mechanical ventilation for the safety of transport regardless of current status',
          B: 'The same level of respiratory support the infant is currently receiving at the referring NICU',
          C: 'No respiratory support or monitoring is needed during back-transport',
          D: 'The infant should be weaned to room air before transport regardless of oxygen needs',
        },
        correctChoice: 'B',
        explanationCorrect:
          'During back-transport of a stable infant, the transport team should maintain the same level of respiratory support currently being provided. If the infant is on low-flow nasal cannula oxygen, that support should continue during transport. Changing the support level during transport introduces unnecessary risk.',
        explanationWrong:
          'Mechanical ventilation is not indicated for a stable infant on lower levels of support. Monitoring and appropriate respiratory support are always necessary during transport, even for stable infants. Weaning to room air for transport convenience could compromise the infant\'s oxygenation status.',
        topic: 'Neonatal Transport',
      },
      {
        miniExamId: exam14.id,
        questionIndex: 20,
        questionText:
          'In pediatric pulmonary function testing, which test best evaluates small airway function and can detect early airway disease before FEV1 becomes abnormal?',
        choices: {
          A: 'Peak expiratory flow rate (PEFR)',
          B: 'Maximal voluntary ventilation (MVV)',
          C: 'Forced expiratory flow at 25-75% of FVC (FEF25-75)',
          D: 'Inspiratory capacity (IC)',
        },
        correctChoice: 'C',
        explanationCorrect:
          'FEF25-75 (also called MMEF) measures the average flow rate during the middle half of the forced expiratory maneuver, which reflects small airway function. Small airway disease may produce a reduced FEF25-75 before changes appear in FEV1, making it a more sensitive early indicator of peripheral airway obstruction in conditions like asthma and cystic fibrosis.',
        explanationWrong:
          'PEFR reflects large airway function and effort-dependent mechanics, not small airways. MVV measures overall ventilatory capacity and endurance, not specifically small airway function. Inspiratory capacity is a lung volume measurement that does not specifically assess small airway function.',
        topic: 'Pediatric Pulmonary Function Testing',
      },
    ],
  })

  // ─── EXAM 15 ──────────────────────────────────────────────────────────
  // Topics: Bronchiolitis (RSV) management, Pediatric nutrition and growth in respiratory disease
  // Correct answer distribution: A=5, B=5, C=5, D=5
  // Distribution: Q1-B, Q2-A, Q3-D, Q4-C, Q5-A, Q6-B, Q7-D, Q8-C, Q9-B, Q10-A, Q11-D, Q12-C, Q13-B, Q14-A, Q15-D, Q16-C, Q17-A, Q18-B, Q19-C, Q20-D
  const exam15 = await prisma.miniExam.create({
    data: {
      divisionId: NPS_DIVISION_ID,
      title: 'NPS Mini Exam 15',
      examIndex: 15,
      isFree: false,
    },
  })

  await prisma.miniExamQuestion.createMany({
    data: [
      {
        miniExamId: exam15.id,
        questionIndex: 1,
        questionText:
          'A 4-month-old infant presents with nasal congestion, wheezing, tachypnea, and subcostal retractions. The infant was previously healthy and was born at term. Nasal swab is positive for respiratory syncytial virus (RSV). Which intervention has the strongest evidence for clinical benefit in this patient?',
        choices: {
          A: 'Nebulized racemic epinephrine every 2 hours',
          B: 'Supportive care including nasal suctioning, hydration, and supplemental oxygen if SpO2 is below 90%',
          C: 'Oral corticosteroids for 5 days',
          D: 'Nebulized albuterol every 4 hours',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Current evidence-based guidelines for bronchiolitis management emphasize supportive care as the primary treatment. This includes nasal suctioning to clear secretions, maintaining adequate hydration (oral or IV), and supplemental oxygen when SpO2 falls persistently below 90%. AAP guidelines recommend against routine use of bronchodilators and corticosteroids.',
        explanationWrong:
          'Nebulized racemic epinephrine is not routinely recommended for bronchiolitis. Oral corticosteroids have not been shown to improve outcomes in bronchiolitis and are not recommended. Nebulized albuterol has not demonstrated consistent benefit in bronchiolitis and is not routinely recommended by AAP guidelines.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 2,
        questionText:
          'A premature infant born at 29 weeks gestation with bronchopulmonary dysplasia (BPD) has increased caloric needs. What is the primary reason these infants require higher caloric intake compared to healthy term infants?',
        choices: {
          A: 'Increased work of breathing and metabolic demands from chronic lung disease increase energy expenditure by 25-50%',
          B: 'BPD infants have faster gastrointestinal transit times leading to malabsorption',
          C: 'Corticosteroid use causes hypermetabolism in all cases',
          D: 'Premature infants have larger body surface area relative to weight, requiring double the caloric intake of term infants',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Infants with BPD have significantly increased energy expenditure (25-50% above baseline) primarily due to increased work of breathing, elevated respiratory rate, use of accessory muscles, and the metabolic cost of chronic inflammation and tissue repair. They typically require 120-150 kcal/kg/day compared to 100-120 kcal/kg/day for healthy term infants.',
        explanationWrong:
          'BPD infants may have slower GI transit and feeding intolerance, not faster transit. Corticosteroids can affect metabolism but do not cause hypermetabolism in all cases. While premature infants do have larger BSA to weight ratios, this does not double their caloric needs; the primary increased demand comes from the work of breathing.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 3,
        questionText:
          'Which pharmacologic agent is approved for prevention (not treatment) of RSV infection in high-risk infants?',
        choices: {
          A: 'Ribavirin',
          B: 'Palivizumab (Synagis) or nirsevimab (Beyfortus)',
          C: 'Acyclovir',
          D: 'Oseltamivir',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Palivizumab is a monoclonal antibody administered monthly during RSV season to high-risk infants (premature infants, those with hemodynamically significant CHD, or chronic lung disease). Nirsevimab is a newer long-acting monoclonal antibody requiring only a single dose per RSV season. Both provide passive immunity to prevent severe RSV disease.',
        explanationWrong:
          'Ribavirin is an antiviral used for treatment of severe RSV disease, not prevention. Oseltamivir is a neuraminidase inhibitor used for influenza, not RSV. Acyclovir is an antiviral for herpes simplex and varicella-zoster viruses, not RSV.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 4,
        questionText:
          'A child with severe persistent asthma on chronic oral corticosteroids has growth retardation and poor weight gain. Which nutritional strategy is most appropriate?',
        choices: {
          A: 'Restrict caloric intake to prevent corticosteroid-induced obesity',
          B: 'Supplement only with vitamin C to counteract corticosteroid effects',
          C: 'Provide calorie-dense foods, calcium and vitamin D supplementation, and monitor growth velocity with endocrinology referral if growth faltering persists',
          D: 'Discontinue corticosteroids immediately to restore normal growth',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Children on chronic corticosteroids require comprehensive nutritional support including calorie-dense foods to support growth, calcium and vitamin D supplementation to prevent corticosteroid-induced osteoporosis, and regular monitoring of growth velocity. Endocrinology referral is appropriate when growth faltering persists despite nutritional optimization, to evaluate for adrenal suppression and growth hormone status.',
        explanationWrong:
          'Caloric restriction would worsen growth retardation. Vitamin C supplementation alone does not address the complex nutritional needs. Abruptly discontinuing corticosteroids can cause adrenal crisis and asthma exacerbation; tapering should be done under physician supervision.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 5,
        questionText:
          'A 6-week-old infant with RSV bronchiolitis is admitted to the PICU with worsening respiratory distress despite nasal suctioning and supplemental oxygen. SpO2 is 88% on 2 L/min nasal cannula. Which respiratory intervention is most appropriate as the next step?',
        choices: {
          A: 'Initiate heated high-flow nasal cannula (HHFNC) therapy',
          B: 'Begin continuous nebulized albuterol',
          C: 'Administer nebulized hypertonic saline (3%)',
          D: 'Perform immediate intubation and mechanical ventilation',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Heated high-flow nasal cannula is an appropriate escalation in respiratory support for infants with bronchiolitis who fail standard oxygen therapy. HHFNC provides humidified, heated oxygen at flows that exceed the infant\'s inspiratory demand, generates low levels of positive airway pressure, and reduces work of breathing. Studies have shown HHFNC can reduce the need for intubation in moderate-to-severe bronchiolitis.',
        explanationWrong:
          'Continuous nebulized albuterol is not recommended for bronchiolitis as it has not shown consistent benefit. Nebulized hypertonic saline may be considered in inpatients but is not the priority intervention for worsening hypoxemia. Immediate intubation should be reserved for patients failing non-invasive support or showing signs of respiratory failure.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 6,
        questionText:
          'An infant with BPD on chronic diuretic therapy (furosemide) is at risk for which nutritional deficiency that can affect bone health and growth?',
        choices: {
          A: 'Iron deficiency only',
          B: 'Calcium, phosphorus, and potassium depletion due to renal losses from furosemide',
          C: 'Vitamin A excess leading to toxicity',
          D: 'Protein excess causing renal overload',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Furosemide (a loop diuretic) causes significant renal losses of calcium, phosphorus, potassium, sodium, and chloride. Chronic calcium and phosphorus depletion contributes to metabolic bone disease (osteopenia of prematurity) and impairs bone growth. Potassium depletion can cause metabolic alkalosis. These electrolytes require careful monitoring and supplementation.',
        explanationWrong:
          'While iron deficiency is a concern in preterm infants, it is not specifically caused by furosemide. Vitamin A excess and protein excess are not complications of furosemide therapy. The primary nutritional concern with chronic furosemide use is mineral and electrolyte depletion.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 7,
        questionText:
          'According to current AAP guidelines, which diagnostic test is recommended for all infants presenting with clinical bronchiolitis to guide treatment decisions?',
        choices: {
          A: 'Chest radiograph for all admitted patients',
          B: 'Complete blood count with differential',
          C: 'Blood cultures',
          D: 'No routine diagnostic testing is recommended; diagnosis should be clinical',
        },
        correctChoice: 'D',
        explanationCorrect:
          'The AAP clinical practice guideline for bronchiolitis recommends that clinicians should diagnose bronchiolitis and assess disease severity based on history and physical examination. Routine diagnostic testing including chest radiography, blood testing, and viral testing is not recommended as it does not change management and can lead to unnecessary treatments.',
        explanationWrong:
          'Routine chest radiographs are not recommended for bronchiolitis as they can lead to unnecessary antibiotic use due to atelectasis being misinterpreted as consolidation. Routine CBC and blood cultures are not recommended for typical bronchiolitis presentations.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 8,
        questionText:
          'A 3-year-old child with cystic fibrosis has pancreatic insufficiency and steatorrhea. Which nutritional supplement is essential to ensure adequate absorption of fat-soluble vitamins?',
        choices: {
          A: 'Additional fiber supplementation',
          B: 'Pancreatic enzyme replacement therapy (PERT) taken with all meals and snacks',
          C: 'Lactase enzyme supplementation',
          D: 'Probiotics only',
        },
        correctChoice: 'B',
        explanationCorrect:
          'Pancreatic enzyme replacement therapy (PERT) provides exogenous lipase, amylase, and protease that the dysfunctional pancreas cannot produce in sufficient quantities. PERT must be taken with all meals and snacks to enable digestion and absorption of fats, proteins, and fat-soluble vitamins (A, D, E, K). Without PERT, severe malabsorption leads to malnutrition and growth failure.',
        explanationWrong:
          'Fiber supplementation does not replace the need for pancreatic enzymes. Lactase supplements treat lactose intolerance, not pancreatic insufficiency. While probiotics may have some benefits, they do not replace the essential role of PERT in enabling nutrient absorption in CF.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 9,
        questionText:
          'A 10-month-old infant with RSV bronchiolitis is hospitalized. The infant has been on heated high-flow nasal cannula at 2 L/kg/min with FiO2 0.35 for 48 hours and is showing improvement with decreased work of breathing and SpO2 consistently above 94%. What is the recommended weaning approach?',
        choices: {
          A: 'Discontinue HHFNC abruptly and switch to room air',
          B: 'Wean FiO2 first to 0.21, then reduce flow rate gradually',
          C: 'Maintain current settings for an additional 72 hours regardless of clinical status',
          D: 'Wean flow rate first, then decrease FiO2',
        },
        correctChoice: 'B',
        explanationCorrect:
          'The recommended approach for weaning HHFNC in bronchiolitis is to reduce FiO2 first until the patient is on room air (FiO2 0.21) while maintaining the flow rate for airway pressure support. Once FiO2 is at 0.21, the flow rate is gradually decreased. This approach prioritizes removing supplemental oxygen while maintaining the positive pressure and flow benefits of HHFNC.',
        explanationWrong:
          'Abrupt discontinuation risks rebound respiratory distress. Maintaining settings for a fixed period regardless of improvement is unnecessarily prolonged and not evidence-based. Weaning flow first would remove the airway pressure support while the patient still requires supplemental oxygen, which is a less safe approach.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 10,
        questionText:
          'What is the recommended caloric intake goal for a premature infant with BPD who is failing to gain weight adequately on standard-calorie formula (20 kcal/oz)?',
        choices: {
          A: '24-30 kcal/oz concentrated or fortified formula to achieve 120-150 kcal/kg/day',
          B: '15 kcal/oz diluted formula to increase fluid volume',
          C: 'Standard 20 kcal/oz formula at twice the normal volume',
          D: '40 kcal/oz formula for maximum caloric density',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Premature infants with BPD who are not gaining weight on standard formula benefit from caloric fortification to 24-30 kcal/oz. This can be achieved by concentrating formula, adding human milk fortifier to breast milk, or adding caloric supplements (MCT oil, corn oil, polycose). The target is 120-150 kcal/kg/day while managing fluid restriction if needed.',
        explanationWrong:
          'Diluting formula to 15 kcal/oz would decrease caloric density and worsen malnutrition. Doubling the volume of standard formula may exceed fluid tolerance and cause pulmonary edema in BPD patients who often have fluid restrictions. Formula at 40 kcal/oz exceeds safe caloric density and could cause osmotic diarrhea.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 11,
        questionText:
          'Which infection control measure is most important for preventing nosocomial RSV transmission in a pediatric ward?',
        choices: {
          A: 'Airborne precautions with N95 respirators for all patient contact',
          B: 'Routine administration of prophylactic antibiotics to all patients on the ward',
          C: 'Vaccination of all healthcare workers with RSV vaccine',
          D: 'Strict contact precautions including hand hygiene, gowns, gloves, and cohorting of RSV-positive patients',
        },
        correctChoice: 'D',
        explanationCorrect:
          'RSV is transmitted primarily through contact with infected secretions (direct contact or fomites) and large respiratory droplets. Contact precautions—meticulous hand hygiene, wearing gowns and gloves, and cohorting RSV-positive patients with dedicated staff—are the most effective measures for preventing nosocomial transmission. Hand hygiene is the single most important intervention.',
        explanationWrong:
          'RSV is not transmitted via the airborne route, so N95 respirators are not necessary for standard RSV precautions. Prophylactic antibiotics are ineffective against viruses and promote antibiotic resistance. While RSV vaccines for adults are emerging, universal healthcare worker vaccination is not the primary prevention strategy for nosocomial transmission.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 12,
        questionText:
          'A ventilator-dependent child with severe neuromuscular disease is receiving enteral nutrition via a gastrostomy tube. Which complication of enteral feeding is the respiratory therapist most concerned about?',
        choices: {
          A: 'Hypoglycemia from excessive insulin release',
          B: 'Refeeding syndrome in a well-nourished patient',
          C: 'Gastroesophageal reflux leading to aspiration and recurrent pneumonia',
          D: 'Excessive weight gain from gastrostomy feeding',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Children with neuromuscular disease who are ventilator-dependent are at high risk for gastroesophageal reflux (GER) due to decreased lower esophageal sphincter tone, impaired esophageal motility, and often a supine position. GER in these patients can lead to aspiration of gastric contents, resulting in recurrent aspiration pneumonia, which can further compromise respiratory function.',
        explanationWrong:
          'Hypoglycemia from insulin release is not a typical complication of enteral feeding in this population. Refeeding syndrome occurs in malnourished patients, not well-nourished ones. Excessive weight gain, while a consideration, is not the primary respiratory concern with gastrostomy feeding.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 13,
        questionText:
          'A 2-month-old former 32-week premature infant is seen in clinic at the start of RSV season. The infant has no chronic lung disease and no hemodynamically significant heart disease. According to current AAP guidelines, is this infant eligible for palivizumab prophylaxis?',
        choices: {
          A: 'Yes, all premature infants receive palivizumab regardless of gestational age',
          B: 'Yes, but only if the infant is currently hospitalized',
          C: 'No, infants born at 29 weeks or later without chronic lung disease or CHD are generally not recommended for palivizumab under current AAP guidance',
          D: 'Only if the infant has a sibling in daycare',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Current AAP guidelines (2014 update) narrowed palivizumab eligibility. Infants born at 29 weeks 0 days or later gestation who do not have chronic lung disease of prematurity or hemodynamically significant congenital heart disease are generally NOT recommended to receive palivizumab. The updated guidelines focus prophylaxis on the highest-risk infants.',
        explanationWrong:
          'Not all premature infants qualify; eligibility depends on gestational age and comorbidities. Current hospitalization is not the determining factor. Having a sibling in daycare is no longer an indication for palivizumab under the updated guidelines.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 14,
        questionText:
          'Which vitamin deficiency is most common in infants with cholestatic liver disease who also have chronic respiratory disease, and can lead to impaired immune function and increased susceptibility to infection?',
        choices: {
          A: 'Vitamin A deficiency',
          B: 'Vitamin B12 deficiency',
          C: 'Vitamin C deficiency',
          D: 'Folate deficiency',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Vitamin A is a fat-soluble vitamin that is poorly absorbed in cholestatic liver disease due to decreased bile salt secretion. Vitamin A deficiency impairs epithelial cell integrity in the respiratory tract, reduces immune function, and increases susceptibility to respiratory infections. It is also associated with increased risk of BPD in premature infants.',
        explanationWrong:
          'Vitamin B12 is water-soluble and its absorption is not primarily affected by cholestasis. Vitamin C is water-soluble and not specifically associated with cholestatic disease. Folate is water-soluble and not a primary concern in cholestatic liver disease.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 15,
        questionText:
          'In a pediatric emergency department, a previously healthy 3-month-old infant with RSV bronchiolitis has a respiratory rate of 70, moderate retractions, and SpO2 of 87% on room air. After initiating oxygen, the team notices repeated episodes of apnea. Which factor about this infant\'s presentation most increases the risk of severe disease?',
        choices: {
          A: 'The infant\'s age of 3 months, as most healthy infants tolerate bronchiolitis well',
          B: 'The respiratory rate of 70 indicates mild disease',
          C: 'The presence of moderate retractions rules out apnea risk',
          D: 'Age under 3 months combined with apnea are strong risk factors for severe disease requiring ICU admission',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Age under 3 months and the presence of apnea are both independent risk factors for severe bronchiolitis requiring ICU-level care. Young infants have smaller airways, more compliant chest walls, immature respiratory control, and limited respiratory reserve. Apnea in the setting of bronchiolitis indicates CNS involvement or respiratory muscle fatigue and is associated with need for intubation.',
        explanationWrong:
          'A 3-month-old with these symptoms is at high risk, not likely to tolerate bronchiolitis well. A respiratory rate of 70 with retractions indicates significant respiratory distress, not mild disease. Retractions and apnea can coexist; retractions do not rule out apnea risk.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 16,
        questionText:
          'A child with severe asthma is being evaluated for nutritional status. Which anthropometric measurement is most useful for assessing chronic nutritional status and long-term growth trends?',
        choices: {
          A: 'Mid-upper arm circumference',
          B: 'Skinfold thickness',
          C: 'Height/length-for-age plotted on a WHO or CDC growth chart',
          D: 'Head circumference',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Height (or length) for age plotted on standardized growth charts (WHO for children under 2, CDC for 2-20 years) is the most useful measure for assessing chronic nutritional status and long-term growth trends. Linear growth faltering (stunting) indicates chronic malnutrition or disease effects over time. Serial measurements tracked on growth charts reveal growth velocity and trends.',
        explanationWrong:
          'Mid-upper arm circumference is useful for acute malnutrition screening but does not assess long-term growth trends. Skinfold thickness measures body fat stores, not overall growth trajectory. Head circumference is important in infants but does not assess overall nutritional status or growth in older children.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 17,
        questionText:
          'Hypertonic saline (3% NaCl) nebulization has been studied in bronchiolitis treatment. Based on current evidence, in which setting has it shown the most benefit?',
        choices: {
          A: 'In hospitalized patients, where it may reduce length of stay when administered with adequate frequency',
          B: 'In the emergency department as a single treatment for discharge',
          C: 'As a replacement for all other bronchiolitis treatments',
          D: 'In outpatient management as a long-term therapy',
        },
        correctChoice: 'A',
        explanationCorrect:
          'Evidence for nebulized hypertonic saline in bronchiolitis is mixed, but the strongest evidence for benefit is in hospitalized patients when administered multiple times per day. Some studies show a modest reduction in length of hospital stay. It works by improving mucociliary clearance and reducing airway edema through osmotic effects. Single ED treatments have not shown benefit.',
        explanationWrong:
          'Single treatments in the ED have not demonstrated significant benefit in most studies. Hypertonic saline does not replace supportive care measures. It is not used as a long-term outpatient therapy for bronchiolitis.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 18,
        questionText:
          'A premature infant with BPD is being transitioned from parenteral nutrition to enteral feeding. Which feeding approach is recommended to minimize the risk of aspiration while providing adequate nutrition?',
        choices: {
          A: 'Bolus feeding of large volumes every 6 hours',
          B: 'Withholding all enteral feeding until the infant is off all respiratory support',
          C: 'Exclusive oral feeding from the start regardless of the infant\'s gestational age',
          D: 'Continuous slow enteral feeding via nasogastric tube with gradual advancement, with the infant positioned with head of bed elevated 30 degrees',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Continuous slow enteral feeding via nasogastric tube minimizes gastric distension, reduces the risk of aspiration, and allows gradual advancement as the infant tolerates. Positioning with the head elevated 30 degrees reduces gastroesophageal reflux risk. This approach provides adequate nutrition while protecting the airway in infants with respiratory compromise.',
        explanationWrong:
          'Large bolus feedings increase gastric distension and aspiration risk. Exclusive oral feeding is inappropriate for premature infants who may lack mature suck-swallow-breathe coordination. Withholding enteral nutrition delays gut development, increases TPN-related complications, and may increase NEC risk.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 19,
        questionText:
          'An 8-month-old infant is admitted with severe RSV bronchiolitis requiring mechanical ventilation. Which ventilator strategy is most appropriate for this patient?',
        choices: {
          A: 'High tidal volumes (12-15 mL/kg) with low PEEP to overcome airway obstruction',
          B: 'Pressure-support ventilation only, with no mandatory breaths',
          C: 'Low tidal volumes (5-7 mL/kg), adequate PEEP (5-7 cmH2O), longer expiratory times, and permissive hypercapnia',
          D: 'High-frequency jet ventilation as the first-line ventilator mode',
        },
        correctChoice: 'C',
        explanationCorrect:
          'Severe RSV bronchiolitis causes small airway obstruction with air trapping and hyperinflation. The optimal ventilator strategy includes lung-protective tidal volumes (5-7 mL/kg), adequate PEEP to prevent small airway collapse, longer expiratory times to allow gas emptying and prevent further air trapping, and tolerance of mild hypercapnia (permissive hypercapnia) to avoid high ventilating pressures.',
        explanationWrong:
          'High tidal volumes increase the risk of volutrauma and air leak syndromes. Pressure-support ventilation alone may not provide adequate ventilation in a critically ill infant with significant airway obstruction. High-frequency jet ventilation is not the first-line approach for bronchiolitis; conventional ventilation with appropriate settings is preferred.',
        topic: 'Bronchiolitis (RSV) Management',
      },
      {
        miniExamId: exam15.id,
        questionIndex: 20,
        questionText:
          'Which micronutrient supplementation is routinely recommended for all premature infants to support erythropoiesis and prevent anemia, which can worsen respiratory compromise?',
        choices: {
          A: 'Zinc supplementation starting at birth',
          B: 'Selenium supplementation for antioxidant protection',
          C: 'Copper supplementation to prevent Wilson disease',
          D: 'Iron supplementation starting at 2-4 weeks of age, at 2-4 mg/kg/day',
        },
        correctChoice: 'D',
        explanationCorrect:
          'Iron supplementation at 2-4 mg/kg/day beginning at 2-4 weeks of age is routinely recommended for premature infants. Preterm infants have limited iron stores (most iron transfer occurs in the third trimester) and undergo rapid growth requiring increased iron for erythropoiesis. Iron deficiency anemia reduces oxygen-carrying capacity, which can worsen respiratory compromise in infants with lung disease.',
        explanationWrong:
          'While zinc is important for immune function, it is not the primary micronutrient supplemented for anemia prevention. Selenium supplementation is not routinely recommended for all premature infants. Copper supplementation does not prevent Wilson disease, which is a genetic disorder of copper metabolism.',
        topic: 'Pediatric Nutrition and Growth in Respiratory Disease',
      },
    ],
  })

  console.log('NPS mini exams 11-15 seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
