import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const pages = [
  {
    slug: 'common-tmc-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common TMC Exam Mistakes to Avoid',
    description:
      'Avoid these common TMC exam mistakes that cost respiratory therapy students their certification. Learn what to watch for and how to answer correctly.',
    division: 'tmc',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common TMC Exam Mistakes to Avoid</h2>
<p>The Therapist Multiple-Choice (TMC) Examination is the first NBRC credential exam most respiratory therapists take. With 160 questions in 3 hours administered at Pearson VUE, there is little room for careless errors. Below are the most common mistakes candidates make and how to avoid them.</p>

<h3>1. Mismanaging Time on Difficult Questions</h3>
<p><strong>The mistake:</strong> Spending 5 or more minutes on a single tough question early in the exam.</p>
<p><strong>Why students do it:</strong> They feel anxious about leaving a question unanswered and believe they can figure it out if they just think longer.</p>
<p><strong>The correct approach:</strong> You have roughly 1 minute and 7 seconds per question. Flag difficult items and move on. Return to them after completing the easier questions so you bank time and confidence.</p>
<p><strong>Clinical consequence:</strong> Running out of time means you may never reach questions you would have answered correctly, directly lowering your scaled score.</p>

<h3>2. Changing Answers Without New Information</h3>
<p><strong>The mistake:</strong> Second-guessing your first instinct and switching to a different choice.</p>
<p><strong>Why students do it:</strong> Anxiety during the exam causes doubt, and another answer suddenly seems plausible.</p>
<p><strong>The correct approach:</strong> Only change an answer if you re-read the question and realize you misunderstood a key detail. Your initial read is usually your best analysis.</p>
<p><strong>Clinical consequence:</strong> Studies consistently show that first-choice answers are more often correct. Changing without cause typically moves you from right to wrong.</p>

<h3>3. Confusing Low-Flow and High-Flow Oxygen Devices</h3>
<p><strong>The mistake:</strong> Selecting a nasal cannula when the patient needs a precise, high FiO2, or choosing a Venturi mask when flow requirements are modest.</p>
<p><strong>Why students do it:</strong> They memorize device names but do not fully understand the flow and FiO2 ranges each device provides.</p>
<p><strong>The correct approach:</strong> Know that low-flow devices (nasal cannula, simple mask) deliver variable FiO2 depending on the patient's inspiratory flow, while high-flow devices (Venturi mask, high-flow nasal cannula) deliver fixed or precise FiO2.</p>
<p><strong>Clinical consequence:</strong> Selecting the wrong device in practice can lead to hypoxemia or oxygen toxicity.</p>

<h3>4. Ignoring Patient Assessment Before Recommending Treatment</h3>
<p><strong>The mistake:</strong> Jumping straight to a treatment recommendation without evaluating the patient first.</p>
<p><strong>Why students do it:</strong> They focus on memorized protocols and want to apply them immediately.</p>
<p><strong>The correct approach:</strong> The NBRC expects you to assess before you treat. When a question asks what to do next, the answer is often to perform an assessment such as auscultation, reviewing vital signs, or checking SpO2.</p>
<p><strong>Clinical consequence:</strong> Treating without assessment can mask underlying conditions or lead to inappropriate interventions.</p>

<h3>5. Misinterpreting ABG Values</h3>
<p><strong>The mistake:</strong> Incorrectly classifying an ABG as respiratory when it is metabolic, or missing a mixed disorder.</p>
<p><strong>Why students do it:</strong> They rush through the ABG without following a systematic approach.</p>
<p><strong>The correct approach:</strong> Use a step-by-step method: check pH (normal 7.35-7.45), evaluate PaCO2 (normal 35-45 mmHg), evaluate HCO3 (normal 22-26 mEq/L), and assess for compensation. Always check for mixed disorders.</p>
<p><strong>Clinical consequence:</strong> A misinterpreted ABG can lead to wrong ventilator adjustments or inappropriate treatment.</p>

<h3>6. Not Reading the Full Question</h3>
<p><strong>The mistake:</strong> Skimming the question stem and missing qualifiers such as "EXCEPT," "MOST appropriate," or "FIRST."</p>
<p><strong>Why students do it:</strong> Time pressure leads to fast reading, and qualifiers blend into the text.</p>
<p><strong>The correct approach:</strong> Underline or mentally highlight key qualifiers. The difference between "most appropriate" and "first action" can completely change the correct answer.</p>
<p><strong>Clinical consequence:</strong> In practice, understanding priority of actions is critical in emergency situations.</p>

<h3>7. Confusing CPAP and BiPAP Indications</h3>
<p><strong>The mistake:</strong> Recommending CPAP when the patient needs pressure support for ventilation, or suggesting BiPAP when simple CPAP would suffice.</p>
<p><strong>Why students do it:</strong> Both are forms of noninvasive ventilation, and the indications overlap in some clinical scenarios.</p>
<p><strong>The correct approach:</strong> CPAP provides a single continuous pressure to maintain airway patency and improve oxygenation (e.g., obstructive sleep apnea, mild CHF). BiPAP provides two pressure levels and assists ventilation, making it appropriate for hypercapnic respiratory failure.</p>
<p><strong>Clinical consequence:</strong> Using CPAP alone for a patient in hypercapnic failure may not adequately reduce their CO2.</p>

<h3>8. Overlooking Infection Control Principles</h3>
<p><strong>The mistake:</strong> Choosing the wrong type of personal protective equipment or isolation precaution.</p>
<p><strong>Why students do it:</strong> Infection control seems straightforward, so they do not study it as thoroughly as pharmacology or ventilator management.</p>
<p><strong>The correct approach:</strong> Know the three transmission-based precaution categories: contact, droplet, and airborne. Tuberculosis requires airborne precautions with an N95 respirator and negative-pressure room.</p>
<p><strong>Clinical consequence:</strong> Improper infection control exposes patients and healthcare workers to transmissible diseases.</p>

<h3>9. Forgetting to Assess Equipment Before Patient Contact</h3>
<p><strong>The mistake:</strong> Selecting a treatment answer without first verifying that equipment is functioning properly.</p>
<p><strong>Why students do it:</strong> Equipment checks feel routine and unimportant compared to clinical decision-making.</p>
<p><strong>The correct approach:</strong> When a question describes equipment malfunction symptoms, always consider troubleshooting the equipment before changing the treatment plan.</p>
<p><strong>Clinical consequence:</strong> Faulty equipment can deliver incorrect oxygen concentrations, pressures, or medication doses.</p>

<h3>10. Mixing Up Bronchodilator Medications</h3>
<p><strong>The mistake:</strong> Confusing short-acting beta-agonists (albuterol) with anticholinergics (ipratropium) or long-acting agents.</p>
<p><strong>Why students do it:</strong> There are many inhaled medications with similar-sounding names and overlapping uses.</p>
<p><strong>The correct approach:</strong> Create a medication table organized by class, onset, duration, and primary indication. Know that albuterol is first-line for acute bronchospasm while ipratropium is used adjunctively or for COPD maintenance.</p>
<p><strong>Clinical consequence:</strong> Administering the wrong medication can delay relief of bronchospasm or cause unnecessary side effects like tachycardia.</p>

<h3>Ready to Avoid These Mistakes?</h3>
<p>The best way to prevent these errors is through consistent, focused practice. Simulate real exam conditions and review your incorrect answers thoroughly.</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Read our complete TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/tmc-cheat-sheet">Download the TMC Cheat Sheet</a></li>
<li><a href="/tips/tmc-exam-tips">Get TMC Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with full-length TMC exams</a></li>
</ul>`,
  },
  {
    slug: 'common-nps-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common NPS Exam Mistakes to Avoid',
    description:
      'Discover the most common NPS exam mistakes respiratory therapy candidates make. Learn how to avoid errors on the Clinical Simulation Exam and pass.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common NPS Exam Mistakes to Avoid</h2>
<p>The Neonatal/Pediatric Specialty (NPS) Exam is a Clinical Simulation Examination (CSE) administered at Pearson VUE. It consists of 22 clinical simulation problems to be completed in 4 hours. Unlike multiple-choice exams, each problem presents a branching patient scenario where your decisions determine the information you receive. Here are the most common mistakes candidates make.</p>

<h3>1. Ordering Too Many Unnecessary Tests</h3>
<p><strong>The mistake:</strong> Selecting every available lab test, imaging study, and diagnostic procedure at once.</p>
<p><strong>Why students do it:</strong> They believe being thorough will earn more points, or they are unsure which test is most relevant.</p>
<p><strong>The correct approach:</strong> The CSE penalizes you for ordering unnecessary or harmful tests. Select only the diagnostics that are clinically indicated based on the patient presentation. A focused approach demonstrates clinical competence.</p>
<p><strong>Clinical consequence:</strong> Over-testing in practice leads to unnecessary radiation exposure in neonates and pediatric patients, increased costs, and potential for false-positive results requiring further workup.</p>

<h3>2. Failing to Recognize Neonatal Distress Patterns</h3>
<p><strong>The mistake:</strong> Missing early signs of respiratory distress such as nasal flaring, grunting, and retractions in a newborn.</p>
<p><strong>Why students do it:</strong> They focus on lab values and imaging results rather than the clinical presentation described in the scenario.</p>
<p><strong>The correct approach:</strong> Always read the clinical description carefully. Grunting, nasal flaring, intercostal retractions, and cyanosis are hallmark signs of neonatal respiratory distress syndrome (RDS) and require immediate intervention.</p>
<p><strong>Clinical consequence:</strong> Delayed recognition of neonatal distress can lead to rapid deterioration, hypoxic injury, or the need for more aggressive interventions.</p>

<h3>3. Inappropriate Surfactant Administration</h3>
<p><strong>The mistake:</strong> Administering surfactant to a full-term infant with meconium aspiration syndrome or withholding it from a premature infant with confirmed RDS.</p>
<p><strong>Why students do it:</strong> They remember surfactant is used in neonatal care but confuse the specific indications.</p>
<p><strong>The correct approach:</strong> Surfactant replacement is primarily indicated for premature infants with RDS due to surfactant deficiency. While it may be used in severe meconium aspiration, the indications and timing differ significantly.</p>
<p><strong>Clinical consequence:</strong> Inappropriate surfactant use can worsen air leak syndromes or delay more appropriate treatments.</p>

<h3>4. Selecting Excessive Ventilator Pressures for Neonates</h3>
<p><strong>The mistake:</strong> Setting peak inspiratory pressures or PEEP values that are appropriate for adults but dangerously high for neonates.</p>
<p><strong>Why students do it:</strong> They apply adult ventilation parameters to neonatal patients without adjusting for the smaller lung volumes and increased compliance risks.</p>
<p><strong>The correct approach:</strong> Neonatal ventilation typically starts with lower pressures. PIP of 15-25 cmH2O and PEEP of 4-6 cmH2O are common starting points. Tidal volumes should target 4-6 mL/kg to minimize volutrauma.</p>
<p><strong>Clinical consequence:</strong> Excessive pressures cause barotrauma, pneumothorax, and contribute to bronchopulmonary dysplasia (BPD).</p>

<h3>5. Ignoring the Branching Nature of the CSE</h3>
<p><strong>The mistake:</strong> Treating each section of a simulation as independent rather than building on previous findings.</p>
<p><strong>Why students do it:</strong> They are accustomed to multiple-choice exams where each question stands alone.</p>
<p><strong>The correct approach:</strong> In the CSE, your earlier decisions affect what information becomes available. Review the results of previous actions before making new decisions. If you ordered an ABG and it shows respiratory acidosis, your next action should address ventilation, not order another ABG.</p>
<p><strong>Clinical consequence:</strong> Failure to integrate previous findings leads to redundant testing, delayed treatment, and lower exam scores.</p>

<h3>6. Mismanaging Pediatric Airway Emergencies</h3>
<p><strong>The mistake:</strong> Using adult-sized equipment or adult intubation techniques for pediatric patients.</p>
<p><strong>Why students do it:</strong> They default to their adult critical care training without adapting to pediatric anatomy.</p>
<p><strong>The correct approach:</strong> Pediatric airways differ anatomically. Use age-appropriate equipment sizing formulas. Uncuffed endotracheal tubes are used for children under 8 in traditional practice, though modern cuffed tubes are increasingly used with careful pressure monitoring.</p>
<p><strong>Clinical consequence:</strong> Wrong-sized equipment causes airway trauma, failed intubation, or inadequate ventilation.</p>

<h3>7. Overlooking Developmental Differences in Oxygen Targets</h3>
<p><strong>The mistake:</strong> Targeting adult SpO2 ranges (94-99%) for premature neonates.</p>
<p><strong>Why students do it:</strong> They apply universal oxygenation targets without considering the patient population.</p>
<p><strong>The correct approach:</strong> Premature neonates typically have SpO2 targets of 88-95% to reduce the risk of retinopathy of prematurity (ROP) and oxygen toxicity. Always consider gestational age when setting oxygen targets.</p>
<p><strong>Clinical consequence:</strong> Hyperoxia in premature infants increases the risk of ROP, BPD, and other complications of oxygen toxicity.</p>

<h3>8. Not Communicating Findings in the Simulation</h3>
<p><strong>The mistake:</strong> Failing to select options that involve communicating critical findings to the physician or care team.</p>
<p><strong>Why students do it:</strong> They focus exclusively on direct patient interventions and overlook communication options.</p>
<p><strong>The correct approach:</strong> The CSE tests your ability to function as part of a healthcare team. When you discover critical findings such as a tension pneumothorax or worsening ABG values, communicating those findings to the physician is a scored action.</p>
<p><strong>Clinical consequence:</strong> Failure to communicate critical findings delays definitive treatment and endangers the patient.</p>

<h3>9. Rushing Through Simulation Scenarios</h3>
<p><strong>The mistake:</strong> Moving too quickly through each of the 22 problems without thoroughly reading the scenario details.</p>
<p><strong>Why students do it:</strong> They worry about the 4-hour time limit and try to finish early.</p>
<p><strong>The correct approach:</strong> With 22 problems in 4 hours, you have approximately 11 minutes per problem. Use this time wisely. Read each section carefully, review available data, and make deliberate choices.</p>
<p><strong>Clinical consequence:</strong> Rushing leads to missed information and incorrect clinical decisions.</p>

<h3>10. Confusing CPAP Delivery Methods for Neonates</h3>
<p><strong>The mistake:</strong> Not distinguishing between nasal CPAP, bubble CPAP, and ventilator-delivered CPAP in terms of indications and setup.</p>
<p><strong>Why students do it:</strong> All deliver continuous positive pressure, so the differences seem minor.</p>
<p><strong>The correct approach:</strong> Understand that bubble CPAP is commonly used as initial respiratory support for premature infants, while ventilator-delivered CPAP allows more precise pressure control and monitoring. The choice depends on the clinical scenario and institutional protocols.</p>
<p><strong>Clinical consequence:</strong> Selecting the wrong CPAP delivery method may provide inadequate support or require unnecessary escalation of care.</p>

<h3>Prepare Smarter for the NPS Exam</h3>
<p>Success on the NPS exam requires clinical reasoning, not just memorization. Practice with clinical simulations and review neonatal and pediatric protocols thoroughly.</p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">Read our complete NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/neonatal-cheat-sheet">Download the Neonatal Cheat Sheet</a></li>
<li><a href="/tips/nps-exam-tips">Get NPS Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with NPS simulations</a></li>
</ul>`,
  },
  {
    slug: 'common-accs-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common ACCS Exam Mistakes to Avoid',
    description:
      'Learn the most common ACCS exam mistakes and how to avoid them. Improve your Clinical Simulation Exam performance with these critical insights.',
    division: 'accs',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common ACCS Exam Mistakes to Avoid</h2>
<p>The Adult Critical Care Specialty (ACCS) Exam is a Clinical Simulation Examination (CSE) administered at Pearson VUE. It presents 22 clinical simulation problems over 4 hours, testing your ability to manage critically ill adult patients through branching scenarios. Here are the mistakes that trip up candidates most often.</p>

<h3>1. Over-Ordering Diagnostics at Every Step</h3>
<p><strong>The mistake:</strong> Ordering every available test at each decision point rather than targeted diagnostics.</p>
<p><strong>Why students do it:</strong> They want to be thorough or are uncertain which test is most appropriate, so they select everything.</p>
<p><strong>The correct approach:</strong> The CSE scoring penalizes unnecessary or harmful interventions. Order only the tests indicated by the current clinical picture. If the patient has clear signs of pneumothorax, a chest X-ray is appropriate. Ordering a full metabolic panel, CBC, coagulation studies, and a CT simultaneously is not.</p>
<p><strong>Clinical consequence:</strong> Over-testing wastes resources, delays treatment, and exposes patients to unnecessary risks.</p>

<h3>2. Failing to Prioritize the ABCs</h3>
<p><strong>The mistake:</strong> Addressing secondary concerns before securing the airway, breathing, and circulation.</p>
<p><strong>Why students do it:</strong> An interesting lab value or secondary finding captures their attention, and they pursue it before stabilizing the patient.</p>
<p><strong>The correct approach:</strong> Always follow the ABC approach. If the patient has a compromised airway, secure it before ordering labs or adjusting medications. The CSE rewards systematic critical thinking.</p>
<p><strong>Clinical consequence:</strong> Failure to prioritize ABCs can lead to cardiac arrest, hypoxic brain injury, or death.</p>

<h3>3. Misinterpreting Hemodynamic Data</h3>
<p><strong>The mistake:</strong> Confusing cardiogenic shock with septic shock based on hemodynamic monitoring values.</p>
<p><strong>Why students do it:</strong> Both present with hypotension, and without careful analysis of cardiac output, SVR, and filling pressures, the two conditions look similar.</p>
<p><strong>The correct approach:</strong> Cardiogenic shock typically shows low cardiac output, high SVR, and elevated filling pressures. Septic shock shows high cardiac output (in the hyperdynamic phase), low SVR, and variable filling pressures. Treatment differs drastically.</p>
<p><strong>Clinical consequence:</strong> Giving vasopressors alone for septic shock without fluid resuscitation, or giving excess fluids in cardiogenic shock, can be fatal.</p>

<h3>4. Incorrect Ventilator Mode Selection</h3>
<p><strong>The mistake:</strong> Choosing a ventilator mode that does not match the patient's clinical needs, such as placing an ARDS patient on high tidal volume ventilation.</p>
<p><strong>Why students do it:</strong> They default to familiar modes without considering the pathophysiology.</p>
<p><strong>The correct approach:</strong> For ARDS, use lung-protective ventilation with tidal volumes of 4-8 mL/kg of ideal body weight, plateau pressures below 30 cmH2O, and appropriate PEEP based on the ARDSNet protocol. Mode selection should match the patient's ventilatory needs and ability to trigger breaths.</p>
<p><strong>Clinical consequence:</strong> Ventilator-induced lung injury (VILI) from high volumes or pressures worsens outcomes in ARDS.</p>

<h3>5. Not Adapting to Scenario Changes</h3>
<p><strong>The mistake:</strong> Continuing with the original treatment plan when the patient's condition has changed.</p>
<p><strong>Why students do it:</strong> They do not fully read the updated clinical information or are locked into their initial assessment.</p>
<p><strong>The correct approach:</strong> Each section of the CSE may present new vitals, lab results, or clinical findings. Re-evaluate the patient at every decision point. If the patient was improving but suddenly becomes tachycardic and hypotensive, reassess for new complications.</p>
<p><strong>Clinical consequence:</strong> Failure to adapt to changing conditions leads to missed diagnoses and delayed treatment of complications.</p>

<h3>6. Improper Weaning Assessment</h3>
<p><strong>The mistake:</strong> Attempting to extubate a patient who does not meet weaning criteria, or keeping a patient intubated unnecessarily.</p>
<p><strong>Why students do it:</strong> They do not systematically evaluate readiness to wean or they focus on a single parameter rather than the whole picture.</p>
<p><strong>The correct approach:</strong> Assess multiple weaning parameters: rapid shallow breathing index (RSBI) less than 105, adequate oxygenation on minimal settings, hemodynamic stability, intact cough and gag reflexes, and resolution of the underlying condition. Use spontaneous breathing trials (SBTs) to assess readiness.</p>
<p><strong>Clinical consequence:</strong> Premature extubation leads to reintubation, which increases morbidity and ICU length of stay. Delayed extubation increases the risk of ventilator-associated pneumonia.</p>

<h3>7. Forgetting Sedation and Pain Management</h3>
<p><strong>The mistake:</strong> Focusing entirely on ventilator management while ignoring the patient's comfort, sedation level, and pain.</p>
<p><strong>Why students do it:</strong> They view sedation as a nursing responsibility rather than part of the respiratory therapist's assessment.</p>
<p><strong>The correct approach:</strong> Patient-ventilator asynchrony is often caused by inadequate sedation or pain. If a patient is fighting the ventilator, assess sedation using a validated scale (RASS, SAS) before making ventilator changes. Recommend sedation adjustments when appropriate.</p>
<p><strong>Clinical consequence:</strong> Patient-ventilator asynchrony from inadequate sedation leads to auto-PEEP, barotrauma, and patient distress.</p>

<h3>8. Mismanaging ARDS Prone Positioning</h3>
<p><strong>The mistake:</strong> Not recommending prone positioning for severe ARDS or recommending it for patients with contraindications.</p>
<p><strong>Why students do it:</strong> Prone positioning is a relatively newer evidence-based intervention, and some candidates have limited exposure to it.</p>
<p><strong>The correct approach:</strong> Prone positioning for 12-16 hours per day is recommended for moderate to severe ARDS (P/F ratio less than 150) when lung-protective ventilation alone is insufficient. Contraindications include spinal instability, open abdominal wounds, and hemodynamic instability.</p>
<p><strong>Clinical consequence:</strong> Failing to prone a qualifying ARDS patient delays a proven mortality-reducing intervention.</p>

<h3>9. Ignoring Acid-Base Compensation</h3>
<p><strong>The mistake:</strong> Treating the ABG at face value without determining whether compensation is present or expected.</p>
<p><strong>Why students do it:</strong> They classify the primary disorder but skip the compensation analysis.</p>
<p><strong>The correct approach:</strong> After identifying the primary disorder using pH (7.35-7.45), PaCO2 (35-45 mmHg), and HCO3 (22-26 mEq/L), determine whether the compensation is appropriate. Use Winter's formula for metabolic acidosis to predict expected PaCO2. If compensation is inappropriate, suspect a mixed disorder.</p>
<p><strong>Clinical consequence:</strong> Missing a mixed acid-base disorder leads to incomplete treatment and potential clinical deterioration.</p>

<h3>10. Poor Time Management Across 22 Problems</h3>
<p><strong>The mistake:</strong> Spending too much time on early problems and rushing through later ones.</p>
<p><strong>Why students do it:</strong> The CSE format is unfamiliar, and the first few problems cause anxiety that slows progress.</p>
<p><strong>The correct approach:</strong> Budget approximately 11 minutes per problem. Practice with timed simulations before the exam to become comfortable with the CSE format and pacing.</p>
<p><strong>Clinical consequence:</strong> Rushing through later problems means making hasty decisions on critically ill patients, reducing your overall score.</p>

<h3>Prepare for ACCS Exam Success</h3>
<p>The ACCS exam demands both clinical knowledge and simulation test-taking strategy. Practice with realistic scenarios to build your critical care decision-making skills.</p>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">Read our complete ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-cheat-sheet">Download the Ventilator Management Cheat Sheet</a></li>
<li><a href="/tips/accs-exam-tips">Get ACCS Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with ACCS simulations</a></li>
</ul>`,
  },
  {
    slug: 'common-sds-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common SDS Exam Mistakes to Avoid',
    description:
      'Avoid these common SDS exam mistakes that trip up sleep disorder specialist candidates. Study smarter with proven strategies and correct approaches.',
    division: 'sds',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common SDS Exam Mistakes to Avoid</h2>
<p>The Sleep Disorders Specialty (SDS) Exam tests your knowledge of polysomnography, sleep disorders, and therapeutic interventions. With 130 questions in 3 hours at Pearson VUE, candidates must demonstrate mastery of sleep medicine concepts. Here are the mistakes that commonly derail SDS candidates.</p>

<h3>1. Misscoring Sleep Stages</h3>
<p><strong>The mistake:</strong> Confusing N2 sleep with N3, or misidentifying REM sleep due to incorrect channel analysis.</p>
<p><strong>Why students do it:</strong> Sleep staging requires analyzing multiple EEG, EOG, and EMG channels simultaneously, which is overwhelming under time pressure.</p>
<p><strong>The correct approach:</strong> Follow AASM scoring rules systematically. N2 is defined by K-complexes and sleep spindles. N3 requires 20% or more of the epoch to contain slow-wave activity (0.5-2 Hz, amplitude greater than 75 microvolts). REM requires low-amplitude mixed-frequency EEG, rapid eye movements on EOG, and low chin EMG tone.</p>
<p><strong>Clinical consequence:</strong> Incorrect sleep staging leads to misdiagnosis of sleep architecture abnormalities and inappropriate treatment recommendations.</p>

<h3>2. Confusing Obstructive and Central Apnea Events</h3>
<p><strong>The mistake:</strong> Scoring a central apnea as obstructive, or vice versa, due to incomplete analysis of respiratory effort.</p>
<p><strong>Why students do it:</strong> Both events involve cessation of airflow, and distinguishing them requires careful evaluation of thoracoabdominal effort bands.</p>
<p><strong>The correct approach:</strong> Obstructive apneas show continued or increasing respiratory effort despite absent airflow. Central apneas show absent respiratory effort along with absent airflow. Mixed apneas begin as central and end with obstructive effort. Always check the effort channels.</p>
<p><strong>Clinical consequence:</strong> Misclassifying apnea type leads to incorrect treatment. CPAP treats obstructive apnea, while central apnea may require adaptive servo-ventilation or other interventions.</p>

<h3>3. Incorrect CPAP Titration Approach</h3>
<p><strong>The mistake:</strong> Increasing CPAP pressure too rapidly or failing to allow adequate time at each pressure level to assess effectiveness.</p>
<p><strong>Why students do it:</strong> They want to eliminate all events quickly and over-titrate.</p>
<p><strong>The correct approach:</strong> Follow AASM titration guidelines. Start at 4 cmH2O and increase by 1 cmH2O at 5-minute intervals as needed to eliminate obstructive events, snoring, and flow limitation. Allow the patient to achieve supine REM sleep at the optimal pressure when possible.</p>
<p><strong>Clinical consequence:</strong> Over-titration causes patient discomfort, air leak, aerophagia, and poor PAP adherence.</p>

<h3>4. Neglecting Artifact Recognition</h3>
<p><strong>The mistake:</strong> Scoring artifact as genuine physiological events, such as mistaking 60 Hz electrical interference for EEG activity or sweat artifact for slow waves.</p>
<p><strong>Why students do it:</strong> They do not spend enough time learning common artifact patterns during their studies.</p>
<p><strong>The correct approach:</strong> Learn to recognize common PSG artifacts: 60 Hz interference, electrode pop, sweat artifact, movement artifact, and ECG artifact in EEG channels. Artifact-contaminated epochs may need to be excluded from scoring.</p>
<p><strong>Clinical consequence:</strong> Scoring artifact as real activity produces inaccurate study results and potentially incorrect diagnoses.</p>

<h3>5. Overlooking Periodic Limb Movements</h3>
<p><strong>The mistake:</strong> Failing to score periodic limb movements (PLMs) or confusing them with respiratory effort-related arousals.</p>
<p><strong>Why students do it:</strong> PLMs can be subtle on EMG channels, and candidates focus primarily on respiratory events.</p>
<p><strong>The correct approach:</strong> PLMs must be 0.5-10 seconds in duration, occur in a series of 4 or more movements separated by 5-90 seconds, and have an amplitude increase of 8 microvolts or greater from baseline. Calculate the PLM index and determine whether PLMs are associated with arousals.</p>
<p><strong>Clinical consequence:</strong> Unrecognized PLMs may explain excessive daytime sleepiness that persists despite adequate OSA treatment.</p>

<h3>6. Misunderstanding AHI Severity Classifications</h3>
<p><strong>The mistake:</strong> Applying incorrect AHI thresholds when classifying OSA severity.</p>
<p><strong>Why students do it:</strong> They confuse the cutoff values or do not account for the difference between AHI and RDI.</p>
<p><strong>The correct approach:</strong> AHI severity: normal is fewer than 5 events per hour, mild is 5-14, moderate is 15-29, and severe is 30 or more. RDI includes respiratory effort-related arousals (RERAs) in addition to apneas and hypopneas. Know when to use each metric.</p>
<p><strong>Clinical consequence:</strong> Incorrect severity classification leads to inappropriate treatment decisions and insurance authorization issues.</p>

<h3>7. Ignoring Patient Safety During the Sleep Study</h3>
<p><strong>The mistake:</strong> Not recognizing when a patient needs emergency intervention during a titration study, such as sustained desaturation or cardiac arrhythmias.</p>
<p><strong>Why students do it:</strong> They focus on scoring and titration protocols without monitoring for emergencies.</p>
<p><strong>The correct approach:</strong> Always monitor for desaturation below 80%, sustained bradycardia or tachycardia, cardiac arrhythmias, and seizure activity. Have emergency protocols in place and know when to wake the patient and call for assistance.</p>
<p><strong>Clinical consequence:</strong> Failure to intervene during a dangerous event puts the patient at risk for cardiac arrest or other life-threatening complications.</p>

<h3>8. Rushing Through PSG Report Interpretation Questions</h3>
<p><strong>The mistake:</strong> Misreading the PSG summary data or overlooking key metrics in the report.</p>
<p><strong>Why students do it:</strong> Time pressure leads to skimming reports rather than analyzing them systematically.</p>
<p><strong>The correct approach:</strong> Review all key metrics: total sleep time, sleep efficiency, sleep latency, REM latency, AHI in supine and non-supine positions, oxygen nadir, and time spent below 88% and 90% saturation. Each metric provides important clinical information.</p>
<p><strong>Clinical consequence:</strong> Missing key PSG findings leads to incomplete diagnosis and suboptimal treatment planning.</p>

<h3>Prepare for SDS Exam Success</h3>
<p>The SDS exam requires deep knowledge of polysomnography and sleep medicine. Focus your study on PSG interpretation and AASM scoring rules.</p>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">Read our complete SDS Exam Guide</a></li>
<li><a href="/cheat-sheets/sleep-study-cheat-sheet">Download the Sleep Study Cheat Sheet</a></li>
<li><a href="/tips/sds-exam-tips">Get SDS Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with SDS exam questions</a></li>
</ul>`,
  },
  {
    slug: 'common-cpft-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common CPFT Exam Mistakes to Avoid',
    description:
      'Avoid these common CPFT exam mistakes. Learn what pulmonary function testing errors to watch for and how to answer CPFT exam questions correctly.',
    division: 'cpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common CPFT Exam Mistakes to Avoid</h2>
<p>The Certified Pulmonary Function Technologist (CPFT) Exam tests foundational knowledge of pulmonary function testing procedures, quality control, and interpretation. With 100 questions in 2 hours at Pearson VUE, you need to be efficient and accurate. Here are the most common mistakes CPFT candidates make.</p>

<h3>1. Confusing Obstructive and Restrictive Patterns</h3>
<p><strong>The mistake:</strong> Misidentifying a restrictive pattern as obstructive, or failing to recognize a mixed defect.</p>
<p><strong>Why students do it:</strong> They rely on a single parameter rather than evaluating the full spirometry and lung volume data.</p>
<p><strong>The correct approach:</strong> An obstructive pattern is defined by FEV1/FVC less than 0.70 (or below the lower limit of normal). A restrictive pattern shows reduced TLC with a normal or elevated FEV1/FVC ratio. A mixed pattern shows both reduced FEV1/FVC and reduced TLC. Always evaluate both spirometry and lung volumes together.</p>
<p><strong>Clinical consequence:</strong> Misclassifying the ventilatory defect leads to incorrect diagnosis and treatment planning.</p>

<h3>2. Accepting Poor-Quality Spirometry Efforts</h3>
<p><strong>The mistake:</strong> Reporting results from maneuvers that do not meet ATS/ERS acceptability and repeatability criteria.</p>
<p><strong>Why students do it:</strong> They feel pressure to complete the test quickly or are unsure of the specific criteria.</p>
<p><strong>The correct approach:</strong> Acceptable spirometry requires a good start (back-extrapolated volume less than 5% of FVC or 100 mL), no cough in the first second, no early termination (exhalation time of at least 6 seconds or a plateau), and no artifacts. Repeatability requires at least two acceptable FVC values within 150 mL of each other and two FEV1 values within 150 mL.</p>
<p><strong>Clinical consequence:</strong> Poor-quality spirometry produces unreliable results that may lead to misdiagnosis or inappropriate treatment decisions.</p>

<h3>3. Incorrectly Performing Bronchodilator Response Testing</h3>
<p><strong>The mistake:</strong> Not waiting the appropriate time after bronchodilator administration or using incorrect criteria to determine a positive response.</p>
<p><strong>Why students do it:</strong> They rush the post-bronchodilator testing or confuse the response criteria.</p>
<p><strong>The correct approach:</strong> Wait 10-15 minutes after administering a short-acting bronchodilator (typically 4 puffs of albuterol via MDI with spacer). A positive bronchodilator response is an increase in FEV1 or FVC of at least 200 mL AND 12% from baseline.</p>
<p><strong>Clinical consequence:</strong> Incorrect bronchodilator response assessment can mischaracterize the reversibility of airway obstruction, affecting diagnosis and treatment.</p>

<h3>4. Misunderstanding DLCO Adjustments</h3>
<p><strong>The mistake:</strong> Failing to adjust DLCO for hemoglobin concentration or not understanding how carboxyhemoglobin affects the result.</p>
<p><strong>Why students do it:</strong> They memorize the DLCO procedure but do not fully understand the physiological factors that affect gas transfer.</p>
<p><strong>The correct approach:</strong> DLCO must be corrected for hemoglobin because anemia reduces the available binding sites for carbon monoxide, lowering the measured DLCO. Elevated carboxyhemoglobin (from smoking) also reduces DLCO by occupying hemoglobin binding sites. Always ask about recent smoking and check hemoglobin when available.</p>
<p><strong>Clinical consequence:</strong> Unadjusted DLCO values may falsely suggest interstitial lung disease in anemic patients or underestimate diffusion impairment in patients with polycythemia.</p>

<h3>5. Neglecting Equipment Calibration Verification</h3>
<p><strong>The mistake:</strong> Skipping or incorrectly performing daily calibration checks on spirometers and other PFT equipment.</p>
<p><strong>Why students do it:</strong> Calibration checks seem routine and unimportant compared to clinical testing skills.</p>
<p><strong>The correct approach:</strong> Perform a 3-liter calibration syringe check daily. The measured volume must be within 3.5% of the known volume (2.895-3.105 L for a 3-L syringe). Document calibration checks and take equipment out of service if it fails.</p>
<p><strong>Clinical consequence:</strong> Equipment that is out of calibration produces inaccurate measurements, potentially affecting every patient tested that day.</p>

<h3>6. Misinterpreting Flow-Volume Loops</h3>
<p><strong>The mistake:</strong> Failing to recognize characteristic flow-volume loop patterns such as upper airway obstruction or poor patient effort.</p>
<p><strong>Why students do it:</strong> They focus on numerical values and ignore the shape of the flow-volume loop.</p>
<p><strong>The correct approach:</strong> A normal flow-volume loop shows a sharp peak flow followed by a linear decline. Variable extrathoracic obstruction flattens the inspiratory limb. Variable intrathoracic obstruction flattens the expiratory limb. Fixed obstruction flattens both limbs. Poor effort shows a reduced peak flow with a concave expiratory curve.</p>
<p><strong>Clinical consequence:</strong> Missing an upper airway obstruction pattern on the flow-volume loop can delay diagnosis of a potentially life-threatening condition.</p>

<h3>7. Confusing Lung Volume Measurement Methods</h3>
<p><strong>The mistake:</strong> Not understanding the differences between body plethysmography, nitrogen washout, and helium dilution methods and when each is preferred.</p>
<p><strong>Why students do it:</strong> They study each method in isolation without comparing their strengths and limitations.</p>
<p><strong>The correct approach:</strong> Body plethysmography measures all gas in the thorax, including trapped gas, making it the gold standard. Gas dilution methods (nitrogen washout and helium dilution) only measure communicating gas volumes and underestimate lung volumes in patients with air trapping. Use plethysmography when air trapping is suspected.</p>
<p><strong>Clinical consequence:</strong> Using gas dilution in a patient with significant air trapping can underestimate TLC and lead to a false restrictive diagnosis.</p>

<h3>8. Poor Patient Coaching Technique</h3>
<p><strong>The mistake:</strong> Giving unclear instructions or failing to motivate patients to perform maximal efforts.</p>
<p><strong>Why students do it:</strong> They underestimate the importance of coaching and focus primarily on technical knowledge.</p>
<p><strong>The correct approach:</strong> Use clear, enthusiastic coaching: "Breathe in all the way, as deep as you can. Now blast it out, hard and fast! Keep blowing, keep blowing, keep blowing!" Demonstrate the maneuver first. Adjust your coaching for elderly, pediatric, or cognitively impaired patients.</p>
<p><strong>Clinical consequence:</strong> Submaximal efforts produce falsely low FEV1 and FVC values, potentially leading to a misdiagnosis of obstructive or restrictive disease.</p>

<h3>Prepare for CPFT Success</h3>
<p>The CPFT exam rewards practical knowledge of PFT procedures and quality assurance. Focus on ATS/ERS standards and hands-on testing techniques.</p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">Read our complete CPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/pft-cheat-sheet">Download the PFT Cheat Sheet</a></li>
<li><a href="/tips/cpft-exam-tips">Get CPFT Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with CPFT exam questions</a></li>
</ul>`,
  },
  {
    slug: 'common-rpft-exam-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common RPFT Exam Mistakes to Avoid',
    description:
      'Avoid these common RPFT exam mistakes that registered pulmonary function technologists make. Master advanced PFT concepts and pass your RPFT exam.',
    division: 'rpft',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common RPFT Exam Mistakes to Avoid</h2>
<p>The Registered Pulmonary Function Technologist (RPFT) Exam covers advanced pulmonary function testing concepts, including exercise testing, quality management, and complex interpretation. With 130 questions in 3 hours at Pearson VUE, the RPFT demands deeper expertise than the CPFT. Here are the mistakes candidates commonly make.</p>

<h3>1. Misinterpreting Cardiopulmonary Exercise Test (CPET) Data</h3>
<p><strong>The mistake:</strong> Confusing cardiovascular limitation with ventilatory limitation during exercise testing.</p>
<p><strong>Why students do it:</strong> CPET generates a large volume of data across multiple physiological systems, and candidates struggle to integrate it all.</p>
<p><strong>The correct approach:</strong> Cardiovascular limitation is suggested by achieving predicted maximum heart rate, an abnormal heart rate response, ECG changes, or blood pressure abnormalities. Ventilatory limitation is suggested by achieving or exceeding the maximum voluntary ventilation (MVV), an elevated breathing reserve (VE/MVV greater than 0.85), or development of expiratory flow limitation. Analyze both systems systematically.</p>
<p><strong>Clinical consequence:</strong> Misidentifying the limiting factor leads to incorrect referral and treatment. A patient limited by cardiac disease needs cardiology evaluation, not pulmonary rehabilitation alone.</p>

<h3>2. Errors in DLCO Quality Grading</h3>
<p><strong>The mistake:</strong> Assigning incorrect quality grades to DLCO maneuvers or accepting maneuvers that do not meet criteria.</p>
<p><strong>Why students do it:</strong> The 2017 ATS/ERS DLCO standards introduced a grading system that candidates may not have fully internalized.</p>
<p><strong>The correct approach:</strong> Evaluate each DLCO maneuver for: inspired volume (at least 85% of the largest VC), breath-hold time (within 8-12 seconds), stable plateau during breath-hold, and acceptable washout and sample collection volumes. Assign quality grades (A through F) and report results based on the highest quality maneuvers.</p>
<p><strong>Clinical consequence:</strong> Reporting poor-quality DLCO results leads to inaccurate assessments of gas transfer and potential misdiagnosis of interstitial lung disease or pulmonary vascular disease.</p>

<h3>3. Failing to Recognize Exercise-Induced Bronchoconstriction</h3>
<p><strong>The mistake:</strong> Not performing or correctly interpreting post-exercise spirometry to detect exercise-induced bronchoconstriction (EIB).</p>
<p><strong>Why students do it:</strong> They focus on exercise capacity metrics and overlook the need for serial post-exercise spirometry.</p>
<p><strong>The correct approach:</strong> Perform spirometry at 5, 10, 15, 20, and 30 minutes post-exercise. A decrease in FEV1 of 10% or greater from pre-exercise baseline indicates EIB. The maximum decrease typically occurs at 5-10 minutes post-exercise.</p>
<p><strong>Clinical consequence:</strong> Undiagnosed EIB leads to avoidable exercise limitation and can cause severe bronchospasm during physical activity.</p>

<h3>4. Misapplying Reference Equations</h3>
<p><strong>The mistake:</strong> Using inappropriate reference equations for the patient's age, sex, height, or ethnicity.</p>
<p><strong>Why students do it:</strong> They use whichever reference equations are programmed into the equipment without verifying appropriateness.</p>
<p><strong>The correct approach:</strong> Use the GLI-2012 reference equations when possible, as they cover a wide age range and multiple ethnic groups. When using older reference sets, ensure they match the patient's demographics. Understand how correction factors work for different ethnic groups.</p>
<p><strong>Clinical consequence:</strong> Inappropriate reference values lead to over- or under-diagnosis of pulmonary disease, particularly in diverse patient populations.</p>

<h3>5. Poor Quality Management Program Design</h3>
<p><strong>The mistake:</strong> Not understanding how to establish and maintain a comprehensive PFT laboratory quality management program.</p>
<p><strong>Why students do it:</strong> Quality management involves statistics and administrative procedures that candidates consider less important than clinical testing.</p>
<p><strong>The correct approach:</strong> A quality management program includes biological controls (testing healthy subjects monthly to verify equipment consistency), calibration verification documentation, technologist competency assessment, proficiency testing, procedure manuals, and regular review of testing quality metrics.</p>
<p><strong>Clinical consequence:</strong> Without quality management, systematic errors may go undetected and affect multiple patient results over time.</p>

<h3>6. Incorrect Methacholine Challenge Interpretation</h3>
<p><strong>The mistake:</strong> Using the wrong PC20 threshold to determine a positive test or failing to properly calculate the PC20 by interpolation.</p>
<p><strong>Why students do it:</strong> The dose-response curve and PC20 calculation require mathematical skills that candidates may not practice enough.</p>
<p><strong>The correct approach:</strong> A positive methacholine challenge is defined as a PC20 of 4 mg/mL or less (or 16 mg/mL or less with borderline airway hyperresponsiveness). Calculate PC20 by log-linear interpolation between the last two concentrations tested. Know the contraindications, including baseline FEV1 less than 60% predicted or recent respiratory infection.</p>
<p><strong>Clinical consequence:</strong> An incorrect positive result may lead to unnecessary asthma treatment, while a false negative may leave asthma undiagnosed.</p>

<h3>7. Overlooking Respiratory Muscle Strength Testing</h3>
<p><strong>The mistake:</strong> Not understanding MIP (maximal inspiratory pressure) and MEP (maximal expiratory pressure) testing or misinterpreting the results.</p>
<p><strong>Why students do it:</strong> Respiratory muscle testing is less common than spirometry, and candidates have limited hands-on experience.</p>
<p><strong>The correct approach:</strong> MIP is measured at residual volume (maximum inspiratory effort from RV). MEP is measured at total lung capacity (maximum expiratory effort from TLC). At least 3 acceptable maneuvers are needed, with values within 20% of each other. Report the highest value. Reduced MIP and MEP suggest neuromuscular weakness.</p>
<p><strong>Clinical consequence:</strong> Unrecognized respiratory muscle weakness can lead to ventilatory failure, particularly in patients with neuromuscular disorders.</p>

<h3>8. Confusing Nitrogen Washout and Helium Dilution Errors</h3>
<p><strong>The mistake:</strong> Not recognizing when a gas dilution study has failed due to leaks, incomplete washout, or patient non-compliance.</p>
<p><strong>Why students do it:</strong> They rely on the equipment's automated results without critically evaluating the raw data.</p>
<p><strong>The correct approach:</strong> For nitrogen washout, verify that end-tidal N2 falls below 1.5% within 7 minutes (or the test is extended). For helium dilution, verify equilibrium is reached (change in helium concentration less than 0.02% over 30 seconds). Check for leaks by monitoring baseline stability and total test duration.</p>
<p><strong>Clinical consequence:</strong> Failed gas dilution studies produce inaccurate FRC and TLC values, potentially leading to misclassification of the ventilatory defect.</p>

<h3>9. Ignoring High-Altitude and Environmental Corrections</h3>
<p><strong>The mistake:</strong> Reporting results without applying BTPS (body temperature, ambient pressure, saturated with water vapor) corrections or failing to account for altitude effects on reference values.</p>
<p><strong>Why students do it:</strong> Most modern equipment applies BTPS corrections automatically, so candidates may not understand the underlying principles.</p>
<p><strong>The correct approach:</strong> All lung volumes and flows must be reported at BTPS conditions. Understand that gas volumes measured at ATPS (ambient conditions) must be converted to BTPS. At higher altitudes, barometric pressure changes affect this conversion. Verify that your equipment is programmed with the correct barometric pressure.</p>
<p><strong>Clinical consequence:</strong> Failure to apply correct BTPS conversions produces erroneous results, particularly at laboratories situated at higher elevations.</p>

<h3>10. Not Integrating Multiple Test Results</h3>
<p><strong>The mistake:</strong> Interpreting spirometry, lung volumes, and DLCO in isolation rather than as an integrated assessment.</p>
<p><strong>Why students do it:</strong> Each test is studied separately, and candidates do not practice combining results for comprehensive interpretation.</p>
<p><strong>The correct approach:</strong> Combine all available data: spirometry showing obstruction (FEV1/FVC less than 0.70), lung volumes showing hyperinflation (elevated TLC and RV), and reduced DLCO together suggest emphysema. Normal spirometry with reduced DLCO and normal lung volumes may suggest early pulmonary vascular disease. The pattern of abnormalities narrows the differential diagnosis.</p>
<p><strong>Clinical consequence:</strong> Isolated interpretation misses the full clinical picture and can lead to incomplete or incorrect diagnoses.</p>

<h3>Prepare for RPFT Success</h3>
<p>The RPFT exam tests advanced PFT knowledge including exercise testing, quality management, and complex interpretation. Build your skills through comprehensive study and hands-on practice.</p>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">Read our complete RPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/pft-cheat-sheet">Download the PFT Cheat Sheet</a></li>
<li><a href="/tips/rpft-exam-tips">Get RPFT Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with RPFT exam questions</a></li>
</ul>`,
  },
  {
    slug: 'common-ventilator-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common Ventilator Management Mistakes',
    description:
      'Learn the most common ventilator management mistakes respiratory therapists make. Avoid critical errors in settings, modes, weaning, and troubleshooting.',
    division: null,
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common Ventilator Management Mistakes</h2>
<p>Mechanical ventilation is one of the most critical skills for respiratory therapists. Whether you are preparing for the TMC, ACCS, or clinical practice, understanding common ventilator management mistakes can prevent harm to patients and improve your exam performance. Here are the errors that practitioners and students make most frequently.</p>

<h3>1. Using Actual Body Weight Instead of Ideal Body Weight for Tidal Volume</h3>
<p><strong>The mistake:</strong> Setting tidal volume based on the patient's actual body weight, leading to dangerously high volumes in obese patients.</p>
<p><strong>Why students do it:</strong> They forget that lung size correlates with height, not weight.</p>
<p><strong>The correct approach:</strong> Always calculate tidal volume using ideal body weight (IBW) based on height and sex. For lung-protective ventilation, target 4-8 mL/kg IBW. For ARDS, use 4-6 mL/kg IBW. A 5'4" female has an IBW of approximately 55 kg regardless of actual weight.</p>
<p><strong>Clinical consequence:</strong> Excessive tidal volumes cause ventilator-induced lung injury (VILI), including volutrauma and biotrauma, worsening outcomes in ARDS.</p>

<h3>2. Ignoring Auto-PEEP</h3>
<p><strong>The mistake:</strong> Not checking for or recognizing intrinsic PEEP (auto-PEEP) in patients with obstructive lung disease.</p>
<p><strong>Why students do it:</strong> Auto-PEEP is not displayed on the ventilator unless specifically measured, so it is easy to overlook.</p>
<p><strong>The correct approach:</strong> Perform an expiratory hold maneuver to measure total PEEP. If total PEEP exceeds set PEEP, auto-PEEP is present. Address it by reducing respiratory rate, increasing expiratory time (reducing I:E ratio), treating bronchospasm, or reducing tidal volume. Watch for incomplete expiratory flow on the flow-time waveform.</p>
<p><strong>Clinical consequence:</strong> Unrecognized auto-PEEP increases intrathoracic pressure, reduces venous return, causes hypotension, increases work of breathing, and can lead to barotrauma.</p>

<h3>3. Inappropriate PEEP Selection</h3>
<p><strong>The mistake:</strong> Setting PEEP too low for an ARDS patient (allowing derecruitment) or too high for a hemodynamically unstable patient.</p>
<p><strong>Why students do it:</strong> They apply a default PEEP of 5 cmH2O without considering the patient's pathology.</p>
<p><strong>The correct approach:</strong> Use the ARDSNet FiO2/PEEP table as a starting point for ARDS patients. Titrate PEEP based on oxygenation response, compliance, driving pressure, and hemodynamic status. Higher PEEP recruits collapsed alveoli and improves oxygenation but can reduce cardiac output.</p>
<p><strong>Clinical consequence:</strong> Insufficient PEEP in ARDS leads to cyclic atelectasis and atelectrauma. Excessive PEEP reduces cardiac output and may cause overdistension.</p>

<h3>4. Failing to Recognize Patient-Ventilator Asynchrony</h3>
<p><strong>The mistake:</strong> Not identifying asynchrony patterns on the ventilator waveforms, such as double triggering, auto-triggering, or flow starvation.</p>
<p><strong>Why students do it:</strong> They do not routinely analyze ventilator waveforms or are unfamiliar with the characteristic patterns.</p>
<p><strong>The correct approach:</strong> Regularly assess the pressure, flow, and volume waveforms. Double triggering appears as two consecutive triggered breaths with no expiratory pause. Flow starvation shows a concave pressure waveform during inspiration in volume-targeted modes. Auto-triggering shows breaths without patient effort. Address each pattern with appropriate ventilator adjustments.</p>
<p><strong>Clinical consequence:</strong> Asynchrony increases work of breathing, causes patient distress, prolongs mechanical ventilation, and may cause lung injury.</p>

<h3>5. Premature or Delayed Extubation</h3>
<p><strong>The mistake:</strong> Extubating before the patient meets readiness criteria, or keeping a patient intubated longer than necessary.</p>
<p><strong>Why students do it:</strong> They do not systematically evaluate weaning parameters or are overly cautious.</p>
<p><strong>The correct approach:</strong> Assess weaning readiness daily. Criteria include: resolution of the underlying condition, adequate oxygenation on FiO2 0.40 or less with PEEP 5-8 cmH2O, hemodynamic stability, ability to initiate spontaneous breaths, and intact airway reflexes. Perform a spontaneous breathing trial (SBT) of 30-120 minutes. RSBI less than 105 suggests readiness.</p>
<p><strong>Clinical consequence:</strong> Premature extubation causes reintubation, which increases morbidity, mortality, and ICU length of stay. Delayed extubation increases the risk of VAP and ventilator-associated events.</p>

<h3>6. Overlooking Plateau Pressure</h3>
<p><strong>The mistake:</strong> Focusing solely on peak inspiratory pressure (PIP) and ignoring plateau pressure.</p>
<p><strong>Why students do it:</strong> PIP is continuously displayed and more visible, while plateau pressure requires an inspiratory hold maneuver.</p>
<p><strong>The correct approach:</strong> Perform regular inspiratory hold maneuvers. Plateau pressure reflects alveolar distending pressure and should be maintained below 30 cmH2O for lung protection. A high PIP with normal plateau pressure suggests an airway resistance problem. A high PIP with high plateau pressure suggests a compliance problem.</p>
<p><strong>Clinical consequence:</strong> Elevated plateau pressures cause alveolar overdistension, barotrauma, and VILI. Missing this measurement means missing the opportunity to protect the lungs.</p>

<h3>7. Incorrect FiO2 Management</h3>
<p><strong>The mistake:</strong> Maintaining unnecessarily high FiO2 levels or reducing FiO2 too quickly.</p>
<p><strong>Why students do it:</strong> They prioritize keeping SpO2 at 100% or lack a systematic approach to FiO2 titration.</p>
<p><strong>The correct approach:</strong> Target SpO2 of 92-96% for most adult patients. Wean FiO2 before PEEP when oxygenation is adequate. Reduce FiO2 to 0.40 or below as tolerated before considering PEEP reduction. Prolonged FiO2 above 0.60 increases the risk of absorption atelectasis and oxygen toxicity.</p>
<p><strong>Clinical consequence:</strong> Prolonged high FiO2 causes oxygen toxicity, absorption atelectasis, and can mask worsening lung function by maintaining adequate SpO2 despite clinical deterioration.</p>

<h3>8. Not Troubleshooting High-Pressure Alarms Systematically</h3>
<p><strong>The mistake:</strong> Resetting the high-pressure alarm without investigating the cause.</p>
<p><strong>Why students do it:</strong> They want to silence the alarm quickly and assume it is a transient event.</p>
<p><strong>The correct approach:</strong> When a high-pressure alarm sounds, systematically evaluate: Is the patient biting the tube? Is there mucus plugging requiring suctioning? Has the patient developed bronchospasm? Is there a pneumothorax? Is the patient coughing or fighting the ventilator? Is the tubing kinked? Address the underlying cause, not just the alarm.</p>
<p><strong>Clinical consequence:</strong> Ignoring the cause of high-pressure alarms can lead to missed pneumothorax, aspiration, or progressive airway obstruction.</p>

<h3>9. Incorrect Alarm Settings</h3>
<p><strong>The mistake:</strong> Setting alarms too wide (missing dangerous changes) or too narrow (causing alarm fatigue).</p>
<p><strong>Why students do it:</strong> They set alarms at default values without individualizing them for the patient.</p>
<p><strong>The correct approach:</strong> Set high-pressure alarms 10-15 cmH2O above the current PIP. Set low-pressure alarms 5-10 cmH2O below PIP. Set low-volume alarms at 10-15% below the set or target tidal volume. Set high and low rate alarms within a reasonable range of the current rate. Adjust alarms whenever ventilator settings change.</p>
<p><strong>Clinical consequence:</strong> Alarm fatigue from excessive false alarms causes clinicians to ignore alarms, potentially missing life-threatening events.</p>

<h3>10. Forgetting Humidification</h3>
<p><strong>The mistake:</strong> Not ensuring adequate humidification of inspired gases during mechanical ventilation.</p>
<p><strong>Why students do it:</strong> Humidification is seen as a minor ancillary concern compared to ventilator settings and modes.</p>
<p><strong>The correct approach:</strong> Use either a heated humidifier (HH) or heat-moisture exchanger (HME) for all intubated patients. Heated humidifiers should deliver gas at 33-44 mg H2O/L at 34-41 degrees Celsius at the airway. HMEs are contraindicated in patients with large air leaks, copious secretions, or hypothermia.</p>
<p><strong>Clinical consequence:</strong> Inadequate humidification leads to secretion thickening, mucus plugging, airway damage, and endotracheal tube occlusion.</p>

<h3>Build Your Ventilator Management Skills</h3>
<p>Mastering ventilator management requires understanding physiology, waveform analysis, and systematic troubleshooting. Practice these concepts to excel in clinical settings and on your certification exam.</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Read our TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-cheat-sheet">Download the Ventilator Management Cheat Sheet</a></li>
<li><a href="/tips/tmc-exam-tips">Get Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with ventilator management questions</a></li>
</ul>`,
  },
  {
    slug: 'common-abg-interpretation-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common ABG Interpretation Mistakes',
    description:
      'Avoid these common ABG interpretation mistakes. Learn the correct approach to arterial blood gas analysis including pH, PaCO2, HCO3, and compensation.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common ABG Interpretation Mistakes</h2>
<p>Arterial blood gas (ABG) interpretation is fundamental to respiratory therapy practice and a heavily tested topic on NBRC exams. Despite its importance, ABG analysis is one of the areas where students and practitioners make the most errors. Here are the common mistakes and how to avoid them.</p>

<h3>1. Not Following a Systematic Approach</h3>
<p><strong>The mistake:</strong> Jumping to a diagnosis after glancing at one or two values rather than analyzing all components methodically.</p>
<p><strong>Why students do it:</strong> They feel confident in quick pattern recognition and skip a structured approach.</p>
<p><strong>The correct approach:</strong> Use a consistent step-by-step method every time: (1) Evaluate pH: acidotic (below 7.35) or alkalotic (above 7.45). (2) Evaluate PaCO2 (normal 35-45 mmHg): does it explain the pH change? (3) Evaluate HCO3 (normal 22-26 mEq/L): does it explain the pH change? (4) Determine the primary disorder. (5) Assess for compensation. (6) Evaluate oxygenation (PaO2 normal 80-100 mmHg).</p>
<p><strong>Clinical consequence:</strong> Skipping steps leads to missed mixed disorders and incorrect treatment decisions.</p>

<h3>2. Confusing Compensation with a Mixed Disorder</h3>
<p><strong>The mistake:</strong> Seeing an abnormal PaCO2 and an abnormal HCO3 and calling it a mixed disorder when it is actually appropriate compensation.</p>
<p><strong>Why students do it:</strong> They do not apply compensation formulas to determine whether the secondary change is appropriate.</p>
<p><strong>The correct approach:</strong> In metabolic acidosis, use Winter's formula to predict expected PaCO2: expected PaCO2 = (1.5 x HCO3) + 8 (plus or minus 2). If the actual PaCO2 matches, compensation is appropriate. If PaCO2 is higher or lower than predicted, a concurrent respiratory disorder exists. Learn the compensation rules for each primary disorder.</p>
<p><strong>Clinical consequence:</strong> Misidentifying compensation as a mixed disorder leads to treating a non-existent condition while missing the true pathology.</p>

<h3>3. Forgetting to Evaluate Oxygenation</h3>
<p><strong>The mistake:</strong> Focusing entirely on acid-base status and ignoring the PaO2 and SaO2 values.</p>
<p><strong>Why students do it:</strong> They consider ABG interpretation to be solely about acid-base balance.</p>
<p><strong>The correct approach:</strong> Always evaluate PaO2 (normal 80-100 mmHg on room air) and SaO2 along with the acid-base components. Calculate the A-a gradient to determine whether hypoxemia is due to hypoventilation alone or a parenchymal process. Normal A-a gradient is approximately (Age/4) + 4.</p>
<p><strong>Clinical consequence:</strong> Missing hypoxemia can lead to inadequate oxygen therapy and tissue hypoxia.</p>

<h3>4. Misclassifying a Normal pH as No Disorder</h3>
<p><strong>The mistake:</strong> Seeing a pH of 7.40 and concluding the ABG is completely normal without checking the other values.</p>
<p><strong>Why students do it:</strong> A normal pH creates a false sense of security.</p>
<p><strong>The correct approach:</strong> A normal pH with abnormal PaCO2 and HCO3 indicates a fully compensated disorder or opposing mixed disorders. For example, pH 7.40, PaCO2 60 mmHg, HCO3 36 mEq/L represents fully compensated respiratory acidosis (or a chronic condition). The pH direction before it normalized tells you the primary disorder: look at whether pH sits at 7.40 or slightly favors one side.</p>
<p><strong>Clinical consequence:</strong> Failing to recognize a compensated disorder means missing the underlying pathology that requires monitoring and treatment.</p>

<h3>5. Ignoring the Anion Gap</h3>
<p><strong>The mistake:</strong> Not calculating the anion gap when metabolic acidosis is present.</p>
<p><strong>Why students do it:</strong> They identify metabolic acidosis from the HCO3 and stop there.</p>
<p><strong>The correct approach:</strong> Calculate the anion gap: AG = Na - (Cl + HCO3). Normal is 8-12 mEq/L. An elevated anion gap suggests an accumulation of unmeasured acids (lactic acidosis, ketoacidosis, renal failure, toxins such as methanol, ethylene glycol, or salicylates). A normal anion gap metabolic acidosis suggests GI or renal bicarbonate loss. Use the MUDPILES mnemonic for elevated AG causes.</p>
<p><strong>Clinical consequence:</strong> Without the anion gap, you cannot distinguish between etiologies of metabolic acidosis, delaying targeted treatment such as insulin for DKA or dialysis for toxic ingestion.</p>

<h3>6. Applying the Wrong Normal Values</h3>
<p><strong>The mistake:</strong> Using incorrect normal ranges, especially for PaO2 in elderly patients or at altitude.</p>
<p><strong>Why students do it:</strong> They memorize a single set of normals and apply them universally.</p>
<p><strong>The correct approach:</strong> Standard normals are pH 7.35-7.45, PaCO2 35-45 mmHg, HCO3 22-26 mEq/L, PaO2 80-100 mmHg at sea level on room air. For elderly patients, expected PaO2 decreases: approximately 104 - (0.27 x age). At altitude, expected PaO2 is lower due to reduced barometric pressure. Adjust your interpretation accordingly.</p>
<p><strong>Clinical consequence:</strong> Using inappropriate normals may lead to unnecessary treatment in elderly patients or missed hypoxemia at altitude.</p>

<h3>7. Not Correlating ABG with the Clinical Picture</h3>
<p><strong>The mistake:</strong> Interpreting the ABG in isolation without considering the patient's history, physical exam, and other lab values.</p>
<p><strong>Why students do it:</strong> They treat ABG interpretation as a math exercise rather than a clinical decision-making tool.</p>
<p><strong>The correct approach:</strong> Always correlate the ABG with the clinical scenario. A patient with COPD and a pH of 7.36 with PaCO2 of 55 mmHg and HCO3 of 30 mEq/L has a chronic compensated respiratory acidosis, which is their baseline. Treating this patient's PaCO2 to 40 mmHg would cause metabolic alkalosis. Know the patient before interpreting the numbers.</p>
<p><strong>Clinical consequence:</strong> Treating ABG values without clinical context can worsen the patient's condition, particularly in chronic respiratory disease.</p>

<h3>8. Confusing Respiratory and Metabolic Acidosis Treatment</h3>
<p><strong>The mistake:</strong> Administering sodium bicarbonate for respiratory acidosis or increasing ventilation for a pure metabolic acidosis.</p>
<p><strong>Why students do it:</strong> They see acidosis and reach for the first treatment that comes to mind without determining the type.</p>
<p><strong>The correct approach:</strong> Respiratory acidosis is caused by inadequate ventilation (elevated PaCO2) and is treated by improving ventilation: increasing respiratory rate, increasing tidal volume, reducing dead space, or initiating mechanical ventilation. Metabolic acidosis is caused by acid gain or bicarbonate loss and is treated by addressing the underlying cause (e.g., insulin for DKA, fluids for lactic acidosis). Sodium bicarbonate is reserved for severe metabolic acidosis (pH below 7.10-7.15) and specific indications.</p>
<p><strong>Clinical consequence:</strong> Giving bicarbonate for respiratory acidosis does not address the ventilatory failure and delays appropriate airway and ventilator management.</p>

<h3>9. Misreading Venous Blood Gas as Arterial</h3>
<p><strong>The mistake:</strong> Interpreting a venous blood gas (VBG) sample using arterial reference ranges.</p>
<p><strong>Why students do it:</strong> They do not verify the specimen source before interpretation or confuse the sample labeling.</p>
<p><strong>The correct approach:</strong> Venous blood has a lower pH (approximately 0.03-0.05 lower), higher PaCO2 (approximately 3-8 mmHg higher), and much lower PO2 (approximately 40 mmHg) compared to arterial blood. If a VBG is used for trending, recognize its limitations. Always confirm the sample source.</p>
<p><strong>Clinical consequence:</strong> Interpreting a VBG as an ABG may lead to unnecessary interventions for perceived acidosis or missed hypoxemia.</p>

<h3>10. Not Assessing for Adequate Compensation Timing</h3>
<p><strong>The mistake:</strong> Expecting full renal compensation for a respiratory disorder within hours, or full respiratory compensation for a metabolic disorder within days.</p>
<p><strong>Why students do it:</strong> They do not remember the different time frames for respiratory and renal compensation.</p>
<p><strong>The correct approach:</strong> Respiratory compensation for metabolic disorders occurs within minutes to hours (fast). Renal compensation for respiratory disorders takes 3-5 days to fully develop (slow). Acute respiratory acidosis shows minimal HCO3 increase (1 mEq/L per 10 mmHg PaCO2 rise). Chronic respiratory acidosis shows a larger HCO3 increase (3.5 mEq/L per 10 mmHg PaCO2 rise).</p>
<p><strong>Clinical consequence:</strong> Misinterpreting the timing of compensation can lead to incorrect diagnosis of acute versus chronic disorders and mixed acid-base disturbances.</p>

<h3>Master ABG Interpretation</h3>
<p>Confident ABG analysis requires a systematic approach applied consistently. Practice with real-world scenarios and always follow the step-by-step method.</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Read our TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-cheat-sheet">Download the ABG Interpretation Cheat Sheet</a></li>
<li><a href="/tips/tmc-exam-tips">Get Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with ABG interpretation questions</a></li>
</ul>`,
  },
  {
    slug: 'common-pft-interpretation-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common PFT Interpretation Mistakes',
    description:
      'Avoid these common PFT interpretation mistakes. Learn correct spirometry, lung volume, and DLCO analysis for NBRC exams and clinical pulmonary function testing.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common PFT Interpretation Mistakes</h2>
<p>Pulmonary function test (PFT) interpretation is essential for diagnosing and monitoring respiratory diseases. Whether you are studying for the CPFT, RPFT, or TMC exams, or interpreting PFTs in clinical practice, these are the mistakes that lead to incorrect diagnoses and poor patient outcomes.</p>

<h3>1. Using Only FEV1/FVC to Diagnose Restriction</h3>
<p><strong>The mistake:</strong> Seeing a normal or elevated FEV1/FVC ratio and concluding the patient has a restrictive defect without measuring lung volumes.</p>
<p><strong>Why students do it:</strong> They know that restriction increases FEV1/FVC and assume spirometry alone can confirm the diagnosis.</p>
<p><strong>The correct approach:</strong> A restrictive ventilatory defect can only be confirmed by a reduced total lung capacity (TLC). Spirometry can suggest restriction (reduced FVC with normal or elevated FEV1/FVC), but TLC measurement is required for definitive diagnosis. Some patients with a low FVC have air trapping rather than true restriction.</p>
<p><strong>Clinical consequence:</strong> Diagnosing restriction without lung volumes may lead to incorrect treatment, especially when the true problem is air trapping in an obstructive disease.</p>

<h3>2. Ignoring the Lower Limit of Normal</h3>
<p><strong>The mistake:</strong> Using a fixed FEV1/FVC cutoff of 0.70 for all patients regardless of age and height.</p>
<p><strong>Why students do it:</strong> The fixed 0.70 ratio is widely taught and used in GOLD COPD guidelines, making it the default in many clinicians' minds.</p>
<p><strong>The correct approach:</strong> The FEV1/FVC ratio naturally decreases with age. Using a fixed 0.70 cutoff over-diagnoses obstruction in elderly patients and under-diagnoses it in younger patients. The lower limit of normal (LLN), which is the 5th percentile of the predicted distribution, provides a more accurate threshold. Use LLN when available, especially for patients at the extremes of age.</p>
<p><strong>Clinical consequence:</strong> Over-diagnosis in elderly patients leads to unnecessary medications with side effects. Under-diagnosis in young patients delays treatment of early obstructive disease.</p>

<h3>3. Misinterpreting the Bronchodilator Response</h3>
<p><strong>The mistake:</strong> Declaring a negative bronchodilator response when either the volume or percentage threshold is not met, or declaring positive when only one criterion is met.</p>
<p><strong>Why students do it:</strong> They forget that a positive response requires both an absolute increase of at least 200 mL AND a relative increase of at least 12% from baseline in FEV1 or FVC.</p>
<p><strong>The correct approach:</strong> Both criteria must be met simultaneously: increase of 200 mL or more AND 12% or more from baseline. A small patient may have a 15% increase but only 150 mL improvement, which does not meet criteria. A large patient may have a 300 mL increase but only 8% change, also not positive.</p>
<p><strong>Clinical consequence:</strong> Incorrect characterization of reversibility affects diagnosis (asthma versus COPD) and treatment decisions (whether to prescribe maintenance versus rescue therapy).</p>

<h3>4. Not Recognizing a Mixed Obstructive-Restrictive Defect</h3>
<p><strong>The mistake:</strong> Identifying either obstruction or restriction but not recognizing when both are present simultaneously.</p>
<p><strong>Why students do it:</strong> They stop their analysis after identifying one abnormality.</p>
<p><strong>The correct approach:</strong> A mixed defect shows FEV1/FVC below the LLN (or below 0.70) indicating obstruction, AND a reduced TLC indicating restriction. Both conditions coexist, such as in a patient with COPD who also has pulmonary fibrosis or obesity.</p>
<p><strong>Clinical consequence:</strong> Missing the mixed defect results in incomplete treatment that addresses only one component of the patient's ventilatory impairment.</p>

<h3>5. Overlooking the Significance of Reduced DLCO</h3>
<p><strong>The mistake:</strong> Dismissing a low DLCO as clinically unimportant when spirometry and lung volumes are normal.</p>
<p><strong>Why students do it:</strong> They focus on spirometry and lung volumes as the primary diagnostic tools and treat DLCO as supplementary.</p>
<p><strong>The correct approach:</strong> An isolated reduction in DLCO with normal spirometry and lung volumes can indicate early interstitial lung disease, pulmonary vascular disease (including pulmonary hypertension or pulmonary embolism), anemia, or emphysema before spirometric changes develop. This finding warrants further investigation.</p>
<p><strong>Clinical consequence:</strong> Ignoring an isolated DLCO reduction can delay diagnosis of potentially serious conditions like pulmonary hypertension or early interstitial lung disease.</p>

<h3>6. Confusing Severity Classification Systems</h3>
<p><strong>The mistake:</strong> Mixing up ATS/ERS severity grading (based on FEV1 percent predicted) with GOLD staging or other classification systems.</p>
<p><strong>Why students do it:</strong> Multiple organizations publish severity classifications with different cutoff values, creating confusion.</p>
<p><strong>The correct approach:</strong> The ATS/ERS severity classification uses FEV1 percent predicted after confirming obstruction: mild (above 70%), moderate (60-69%), moderately severe (50-59%), severe (35-49%), and very severe (below 35%). The GOLD classification for COPD uses different thresholds. Know which system the question or clinical context calls for.</p>
<p><strong>Clinical consequence:</strong> Misclassifying severity affects treatment intensity, medication selection, and surgical candidacy decisions.</p>

<h3>7. Not Checking Test Quality Before Interpreting</h3>
<p><strong>The mistake:</strong> Interpreting PFT results without verifying that the testing met acceptability and repeatability standards.</p>
<p><strong>Why students do it:</strong> They trust the printed results without critically evaluating the test quality.</p>
<p><strong>The correct approach:</strong> Before interpreting, check: Were at least 3 acceptable maneuvers performed? Are the two best FVC values within 150 mL? Are the two best FEV1 values within 150 mL? Are the flow-volume loops free of artifacts, coughs, and early termination? Poor quality tests should not be interpreted or should be interpreted with significant caveats.</p>
<p><strong>Clinical consequence:</strong> Interpreting poor-quality spirometry leads to false diagnoses and inappropriate changes to treatment plans.</p>

<h3>8. Failing to Account for Patient Demographics</h3>
<p><strong>The mistake:</strong> Not verifying that the correct height, age, sex, and ethnicity were entered for reference equation calculations.</p>
<p><strong>Why students do it:</strong> They assume demographic data was entered correctly and skip verification.</p>
<p><strong>The correct approach:</strong> Always verify patient demographics before interpretation. A height error of just 2 inches significantly changes predicted values. If ethnicity-specific correction factors are applied (or not applied when they should be), percent predicted values will be inaccurate.</p>
<p><strong>Clinical consequence:</strong> Incorrect demographics produce wrong predicted values, making normal results appear abnormal or vice versa.</p>

<h3>9. Ignoring Trends Over Time</h3>
<p><strong>The mistake:</strong> Interpreting a single PFT in isolation without comparing to previous studies.</p>
<p><strong>Why students do it:</strong> They focus on the current results and do not take time to review prior testing.</p>
<p><strong>The correct approach:</strong> Always compare to previous PFTs when available. A decline in FEV1 greater than the normal age-related decline (approximately 30 mL per year) suggests progressive disease. Stable or improving values after treatment indicate therapeutic success. Trends are often more clinically useful than any single measurement.</p>
<p><strong>Clinical consequence:</strong> Missing a progressive decline delays escalation of therapy and referral for advanced interventions such as lung transplantation evaluation.</p>

<h3>10. Misinterpreting Air Trapping</h3>
<p><strong>The mistake:</strong> Not recognizing elevated residual volume (RV) or RV/TLC ratio as evidence of air trapping.</p>
<p><strong>Why students do it:</strong> They focus on TLC for volume assessment and overlook the distribution of lung volumes.</p>
<p><strong>The correct approach:</strong> Elevated RV (above 120% predicted) or an elevated RV/TLC ratio indicates air trapping. This is common in obstructive diseases. Air trapping can cause a reduced FVC even when TLC is normal, leading to a pseudorestrictive pattern on spirometry. Lung volume measurement clarifies the true pathophysiology.</p>
<p><strong>Clinical consequence:</strong> Unrecognized air trapping can lead to misdiagnosis of restriction when the actual problem is obstructive disease with gas trapping.</p>

<h3>Sharpen Your PFT Interpretation Skills</h3>
<p>Accurate PFT interpretation requires systematic analysis and integration of all test components. Practice with clinical cases to build confidence.</p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">Read our CPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/pft-cheat-sheet">Download the PFT Interpretation Cheat Sheet</a></li>
<li><a href="/tips/cpft-exam-tips">Get Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with PFT interpretation questions</a></li>
</ul>`,
  },
  {
    slug: 'common-neonatal-rt-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common Neonatal Respiratory Therapy Mistakes',
    description:
      'Avoid these common neonatal respiratory therapy mistakes. Learn correct approaches to neonatal ventilation, surfactant, oxygen targets, and NICU care.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common Neonatal Respiratory Therapy Mistakes</h2>
<p>Neonatal respiratory care requires specialized knowledge that differs significantly from adult practice. These are the most common mistakes respiratory therapists and NPS exam candidates make when managing neonatal patients, and understanding them is critical for both exam success and clinical practice.</p>

<h3>1. Applying Adult SpO2 Targets to Premature Neonates</h3>
<p><strong>The mistake:</strong> Targeting SpO2 of 95-100% for premature infants, the same range used for adults.</p>
<p><strong>Why students do it:</strong> Higher oxygen saturation seems safer, and they default to adult standards.</p>
<p><strong>The correct approach:</strong> For premature infants (especially less than 32 weeks gestational age), target SpO2 of 88-95% to balance adequate oxygenation against the risks of hyperoxia. The specific target may vary by institution, but the principle of avoiding excessive oxygen in preterm neonates is well established.</p>
<p><strong>Clinical consequence:</strong> Hyperoxia in premature neonates significantly increases the risk of retinopathy of prematurity (ROP), which can cause blindness, and contributes to bronchopulmonary dysplasia (BPD) and oxidative injury.</p>

<h3>2. Using Excessive Tidal Volumes in Neonatal Ventilation</h3>
<p><strong>The mistake:</strong> Delivering tidal volumes greater than 6 mL/kg to neonates, using adult tidal volume targets.</p>
<p><strong>Why students do it:</strong> They apply adult lung-protective targets of 6-8 mL/kg without further reducing for the neonatal population.</p>
<p><strong>The correct approach:</strong> Target tidal volumes of 4-6 mL/kg for neonates. Neonatal lungs are more susceptible to volutrauma and barotrauma. In extremely premature infants, even lower volumes may be appropriate. Use volume-targeted ventilation modes when available to maintain consistent tidal volumes.</p>
<p><strong>Clinical consequence:</strong> Excessive tidal volumes cause volutrauma, contribute to BPD development, and increase the risk of pneumothorax and other air leak syndromes.</p>

<h3>3. Delayed or Inappropriate Surfactant Administration</h3>
<p><strong>The mistake:</strong> Waiting too long to administer surfactant to a premature infant with RDS, or giving surfactant when it is not indicated.</p>
<p><strong>Why students do it:</strong> They are uncertain about the indications, timing, or dosing of surfactant therapy.</p>
<p><strong>The correct approach:</strong> Early surfactant administration (within the first 2 hours of life) improves outcomes for premature infants with RDS. Surfactant is indicated for premature infants with clinical and radiographic evidence of RDS who require intubation and mechanical ventilation. The INSURE technique (Intubate, Surfactant, Extubate to CPAP) and less invasive surfactant administration (LISA) methods are increasingly used.</p>
<p><strong>Clinical consequence:</strong> Delayed surfactant increases the severity and duration of RDS, the need for higher ventilator settings, and the risk of complications including BPD and air leaks.</p>

<h3>4. Incorrect Endotracheal Tube Sizing</h3>
<p><strong>The mistake:</strong> Using an endotracheal tube that is too large or too small for the neonate's gestational age and weight.</p>
<p><strong>Why students do it:</strong> They do not memorize the sizing guidelines or attempt to apply pediatric formulas to neonates.</p>
<p><strong>The correct approach:</strong> Neonatal ETT sizing is based on weight and gestational age. General guidelines: less than 1 kg uses 2.5 mm ID, 1-2 kg uses 3.0 mm ID, 2-3 kg uses 3.0-3.5 mm ID, and greater than 3 kg uses 3.5 mm ID. Insertion depth is typically weight in kg plus 6 cm at the lip. Confirm placement with chest X-ray (tip should be at T1-T2 level).</p>
<p><strong>Clinical consequence:</strong> A tube that is too large causes tracheal damage, subglottic stenosis, and mucosal injury. A tube that is too small causes air leak around the tube, inadequate ventilation, and inaccurate monitoring.</p>

<h3>5. Failing to Recognize Signs of Pneumothorax</h3>
<p><strong>The mistake:</strong> Missing the acute onset of pneumothorax in a ventilated neonate and attributing symptoms to other causes.</p>
<p><strong>Why students do it:</strong> The signs of pneumothorax can overlap with other causes of deterioration in neonates.</p>
<p><strong>The correct approach:</strong> Watch for sudden deterioration including: acute desaturation, increased work of breathing, asymmetric chest movement, diminished breath sounds on the affected side, shifted point of maximum cardiac impulse, hypotension, and bradycardia. Transillumination can provide rapid bedside assessment in neonates. Confirm with chest X-ray and prepare for needle decompression or chest tube if tension pneumothorax is suspected.</p>
<p><strong>Clinical consequence:</strong> Unrecognized tension pneumothorax causes cardiovascular collapse and can be rapidly fatal in neonates.</p>

<h3>6. Improper CPAP Management</h3>
<p><strong>The mistake:</strong> Setting nasal CPAP pressure too high (causing overdistension) or too low (providing inadequate support), or using incorrect prong sizing.</p>
<p><strong>Why students do it:</strong> They are unfamiliar with the nuances of neonatal CPAP delivery and do not adjust settings based on the clinical response.</p>
<p><strong>The correct approach:</strong> Start nasal CPAP at 5-6 cmH2O for most premature infants with RDS. Adjust based on clinical response: oxygenation, work of breathing, and chest X-ray findings. Use appropriately sized nasal prongs that fit snugly without causing septal injury. Monitor for gastric distension, nasal injury, and air leaks.</p>
<p><strong>Clinical consequence:</strong> Excessive CPAP pressure causes gastric distension, air leaks, and impaired venous return. Inadequate CPAP fails to maintain functional residual capacity and worsens atelectasis.</p>

<h3>7. Overlooking Apnea of Prematurity</h3>
<p><strong>The mistake:</strong> Not monitoring for or appropriately treating apneic episodes in premature infants.</p>
<p><strong>Why students do it:</strong> They focus on ventilator management and forget that premature infants are prone to central apnea.</p>
<p><strong>The correct approach:</strong> Apnea of prematurity affects most infants born before 34 weeks gestational age. Treatment includes caffeine citrate (loading dose of 20 mg/kg, maintenance of 5-10 mg/kg daily), gentle tactile stimulation during episodes, CPAP for obstructive or mixed apnea, and positioning. Document the frequency, duration, and severity of events.</p>
<p><strong>Clinical consequence:</strong> Untreated apnea leads to desaturation episodes, bradycardia, and hypoxic injury that can affect neurodevelopmental outcomes.</p>

<h3>8. Ignoring Temperature Management During Respiratory Interventions</h3>
<p><strong>The mistake:</strong> Not maintaining thermoneutral environment during respiratory procedures such as intubation, suctioning, or transport.</p>
<p><strong>Why students do it:</strong> They focus on the airway procedure and overlook the neonate's thermoregulatory vulnerability.</p>
<p><strong>The correct approach:</strong> Neonates, especially premature infants, are highly susceptible to cold stress. Ensure the radiant warmer is on during procedures. Use warmed and humidified gases. Minimize the duration of procedures that require removing the infant from the warming environment. During transport, use a transport isolette with temperature monitoring.</p>
<p><strong>Clinical consequence:</strong> Cold stress increases oxygen consumption, worsens respiratory distress, causes metabolic acidosis, and increases mortality in premature neonates.</p>

<h3>9. Incorrect Suctioning Technique</h3>
<p><strong>The mistake:</strong> Suctioning neonatal airways with excessive depth, pressure, or frequency.</p>
<p><strong>Why students do it:</strong> They apply adult suctioning protocols without modifying for the neonatal airway.</p>
<p><strong>The correct approach:</strong> Use shallow suctioning (catheter inserted only to the tip of the ETT, not beyond). Use appropriate suction pressures (80-100 mmHg for neonates). Limit suctioning duration to less than 10 seconds. Pre-oxygenate before suctioning. Suction only when clinically indicated (visible secretions, increased ventilator pressures, desaturation) rather than on a fixed schedule.</p>
<p><strong>Clinical consequence:</strong> Aggressive suctioning causes mucosal damage, bradycardia, atelectasis, increased intracranial pressure, and increases the risk of intraventricular hemorrhage in premature infants.</p>

<h3>10. Not Recognizing Congenital Anomalies</h3>
<p><strong>The mistake:</strong> Failing to consider congenital anomalies such as tracheoesophageal fistula, congenital diaphragmatic hernia, or choanal atresia when a neonate presents with respiratory distress.</p>
<p><strong>Why students do it:</strong> They default to RDS or transient tachypnea of the newborn without considering the full differential.</p>
<p><strong>The correct approach:</strong> If a neonate presents with respiratory distress that does not respond to typical interventions, consider congenital anomalies. Inability to pass a suction catheter through the nose suggests choanal atresia. A scaphoid abdomen with respiratory distress suggests diaphragmatic hernia (do NOT bag-mask ventilate). Excessive drooling with feeding difficulty suggests tracheoesophageal fistula.</p>
<p><strong>Clinical consequence:</strong> Missed congenital anomalies delay surgical repair and can worsen the infant's condition. Bag-mask ventilation with a diaphragmatic hernia can fatally distend the bowel within the chest.</p>

<h3>Strengthen Your Neonatal RT Knowledge</h3>
<p>Neonatal respiratory care demands specialized knowledge and careful attention to the unique physiology of premature and full-term infants. Study with neonatal-specific resources to build competence.</p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">Read our NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/neonatal-cheat-sheet">Download the Neonatal Cheat Sheet</a></li>
<li><a href="/tips/nps-exam-tips">Get NPS Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with neonatal RT questions</a></li>
</ul>`,
  },
  {
    slug: 'common-airway-management-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common Airway Management Mistakes',
    description:
      'Avoid these common airway management mistakes in respiratory therapy. Learn correct intubation, suctioning, and emergency airway techniques for NBRC exams.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common Airway Management Mistakes</h2>
<p>Airway management is the most critical skill in respiratory therapy. Whether you are preparing for NBRC certification exams or working in clinical practice, understanding these common mistakes can help you make better decisions when seconds count.</p>

<h3>1. Failing to Assess the Airway Before Intubation</h3>
<p><strong>The mistake:</strong> Attempting intubation without first assessing for a potentially difficult airway.</p>
<p><strong>Why students do it:</strong> They treat intubation as a purely technical procedure and skip the pre-procedure assessment.</p>
<p><strong>The correct approach:</strong> Before any planned intubation, assess for difficult airway predictors: Mallampati score, thyromental distance, neck mobility, mouth opening, presence of facial hair or trauma, obesity, and history of difficult intubation. Use the LEMON mnemonic (Look externally, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility). Have backup airway equipment ready including supraglottic airways and surgical airway kit.</p>
<p><strong>Clinical consequence:</strong> An unanticipated difficult airway without backup equipment and planning can result in a cannot-intubate, cannot-ventilate scenario, which is a life-threatening emergency.</p>

<h3>2. Improper Head and Neck Positioning</h3>
<p><strong>The mistake:</strong> Attempting laryngoscopy without achieving optimal head and neck position.</p>
<p><strong>Why students do it:</strong> They rush to intubate under pressure and neglect positioning fundamentals.</p>
<p><strong>The correct approach:</strong> Use the sniffing position: neck flexed forward and head extended at the atlanto-occipital joint. This aligns the oral, pharyngeal, and laryngeal axes for the best glottic visualization. In obese patients, use the ramped position with blankets or towels under the shoulders and head until the ear canal is level with the sternal notch.</p>
<p><strong>Clinical consequence:</strong> Poor positioning makes visualization of the glottis difficult or impossible, leading to failed intubation attempts, airway trauma, and prolonged desaturation.</p>

<h3>3. Not Preoxygenating Adequately</h3>
<p><strong>The mistake:</strong> Beginning intubation attempts without adequate preoxygenation, starting from a low baseline oxygen saturation.</p>
<p><strong>Why students do it:</strong> They feel urgency to secure the airway and skip or shorten the preoxygenation phase.</p>
<p><strong>The correct approach:</strong> Preoxygenate with 100% FiO2 for at least 3-5 minutes using a tight-fitting non-rebreather mask or BVM before the first intubation attempt. This creates an oxygen reserve by replacing nitrogen in the functional residual capacity with oxygen. In obese patients, use head-up positioning during preoxygenation. Apneic oxygenation during the attempt (nasal cannula at 15 L/min) can extend safe apnea time.</p>
<p><strong>Clinical consequence:</strong> Without preoxygenation, patients desaturate rapidly during the apneic period of intubation, increasing the risk of hypoxic cardiac arrest.</p>

<h3>4. Excessive Intubation Attempts</h3>
<p><strong>The mistake:</strong> Making repeated intubation attempts without modifying the technique, changing equipment, or calling for help.</p>
<p><strong>Why students do it:</strong> They believe persistence will eventually succeed and are reluctant to admit difficulty.</p>
<p><strong>The correct approach:</strong> Limit each intubation attempt to 30 seconds or less. If the first attempt fails, bag-mask ventilate to reoxygenate. Modify your approach for the second attempt: change blade type or size, use a bougie or video laryngoscope, reposition the patient, or have an assistant provide external laryngeal manipulation. After two failed attempts, call for experienced help and consider a supraglottic airway. Follow your institution's difficult airway algorithm.</p>
<p><strong>Clinical consequence:</strong> Repeated failed attempts cause airway edema and bleeding, making subsequent attempts progressively more difficult and increasing the risk of aspiration and hypoxia.</p>

<h3>5. Not Confirming Endotracheal Tube Placement</h3>
<p><strong>The mistake:</strong> Assuming correct tube placement based on a single confirmation method, or not confirming placement at all.</p>
<p><strong>Why students do it:</strong> They hear what they think are bilateral breath sounds and move on without further verification.</p>
<p><strong>The correct approach:</strong> Use multiple methods to confirm placement: continuous waveform capnography (gold standard, showing a consistent CO2 waveform), bilateral chest auscultation, absence of sounds over the epigastrium, observation of bilateral chest rise, and chest X-ray for depth verification. ETCO2 detection is the most reliable bedside confirmation method.</p>
<p><strong>Clinical consequence:</strong> An unrecognized esophageal intubation is rapidly fatal. Even a right mainstem bronchus intubation causes left lung atelectasis and inadequate ventilation.</p>

<h3>6. Improper Cuff Management</h3>
<p><strong>The mistake:</strong> Over-inflating or under-inflating the endotracheal tube cuff, or not monitoring cuff pressure regularly.</p>
<p><strong>Why students do it:</strong> They inflate the cuff until the air leak disappears without measuring pressure, or they forget to check pressures routinely.</p>
<p><strong>The correct approach:</strong> Maintain cuff pressure between 20-30 cmH2O. Use a manometer to measure cuff pressure at least every 8 hours and after any position change. Cuff pressures above 30 cmH2O can impair tracheal mucosal blood flow. Pressures below 20 cmH2O allow aspiration of secretions above the cuff.</p>
<p><strong>Clinical consequence:</strong> Excessive cuff pressure causes tracheal ischemia, necrosis, tracheal stenosis, and tracheoesophageal fistula. Insufficient pressure allows microaspiration, increasing the risk of ventilator-associated pneumonia.</p>

<h3>7. Suctioning Without Indication or With Poor Technique</h3>
<p><strong>The mistake:</strong> Performing routine scheduled suctioning rather than as-needed suctioning, or using incorrect suction catheter sizes and pressures.</p>
<p><strong>Why students do it:</strong> They follow outdated protocols that call for suctioning every 2-4 hours regardless of need.</p>
<p><strong>The correct approach:</strong> Suction only when indicated: audible or visible secretions, increased peak pressures on the ventilator, sawtooth pattern on flow waveform, decreased SpO2, or tactile fremitus. Use a suction catheter that is no larger than half the internal diameter of the ETT. Apply suction only during withdrawal, not insertion. Limit each pass to 10-15 seconds. Preoxygenate before suctioning.</p>
<p><strong>Clinical consequence:</strong> Excessive suctioning causes mucosal damage, bleeding, bronchospasm, hypoxemia, atelectasis, cardiac arrhythmias, and increased intracranial pressure.</p>

<h3>8. Forgetting Supraglottic Airway Devices</h3>
<p><strong>The mistake:</strong> Not considering supraglottic airway devices (laryngeal mask airway, King airway) when intubation fails or as a first-line option in appropriate scenarios.</p>
<p><strong>Why students do it:</strong> They view intubation as the only definitive airway management technique.</p>
<p><strong>The correct approach:</strong> Supraglottic airways are appropriate as rescue devices when intubation fails, as primary airways during cardiac arrest (per AHA guidelines), and as bridges to definitive airway management. Know the indications, contraindications, and insertion technique for at least one supraglottic device. They can maintain ventilation while you prepare for a more definitive airway.</p>
<p><strong>Clinical consequence:</strong> Fixating on intubation when a supraglottic airway could provide adequate ventilation wastes precious time during airway emergencies.</p>

<h3>9. Inadequate Emergency Airway Preparation</h3>
<p><strong>The mistake:</strong> Not having emergency airway equipment readily available and checked before it is needed.</p>
<p><strong>Why students do it:</strong> They assume equipment will be available and functioning when needed.</p>
<p><strong>The correct approach:</strong> Perform a daily check of all airway management equipment: laryngoscope blades and handles (check light source), ETTs in multiple sizes, stylet, bougie, supraglottic airways, suction equipment, bag-valve-mask, ETCO2 detector, and surgical airway kit. Keep a backup plan in mind for every airway encounter.</p>
<p><strong>Clinical consequence:</strong> Discovering a dead laryngoscope battery or missing equipment during an airway emergency costs precious seconds and may contribute to patient harm.</p>

<h3>10. Not Maintaining Skills Through Practice</h3>
<p><strong>The mistake:</strong> Allowing airway management skills to deteriorate through lack of practice, especially for low-frequency, high-stakes procedures.</p>
<p><strong>Why students do it:</strong> After passing their initial certification, ongoing skills practice may not be prioritized.</p>
<p><strong>The correct approach:</strong> Regularly practice intubation on simulation mannequins, participate in simulation scenarios for difficult airway management, attend airway management workshops, and debrief after every real airway event to identify areas for improvement. Maintain competency with multiple laryngoscope types including video laryngoscopes.</p>
<p><strong>Clinical consequence:</strong> Skill degradation in airway management can be catastrophic when an emergency arises and there is no time to refresh technique.</p>

<h3>Build Your Airway Management Expertise</h3>
<p>Strong airway management skills are built through education, practice, and continuous improvement. Study the fundamentals and practice regularly to maintain competence.</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Read our TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/airway-management-cheat-sheet">Download the Airway Management Cheat Sheet</a></li>
<li><a href="/tips/tmc-exam-tips">Get Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with airway management questions</a></li>
</ul>`,
  },
  {
    slug: 'common-oxygen-therapy-mistakes',
    type: 'MISTAKES' as const,
    title: 'Common Oxygen Therapy Mistakes',
    description:
      'Avoid these common oxygen therapy mistakes in respiratory care. Learn proper device selection, flow rates, FiO2 targets, and monitoring for NBRC exam success.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Common Oxygen Therapy Mistakes</h2>
<p>Oxygen therapy is one of the most frequently administered treatments in respiratory care, yet it is also one of the most commonly misapplied. These mistakes appear frequently on NBRC exams and in clinical practice. Understanding them will improve both your exam scores and patient care.</p>

<h3>1. Treating SpO2 Numbers Instead of the Patient</h3>
<p><strong>The mistake:</strong> Increasing oxygen delivery solely because the SpO2 reads 90% without assessing the patient or questioning the reading's accuracy.</p>
<p><strong>Why students do it:</strong> They rely on technology and treat monitors as infallible.</p>
<p><strong>The correct approach:</strong> Always assess the patient first. Check for factors that affect pulse oximetry accuracy: poor perfusion, motion artifact, nail polish, skin pigmentation, and ambient light interference. If the SpO2 reading does not correlate with the patient's clinical appearance, obtain an ABG for definitive oxygenation assessment. Treat the patient, not the number.</p>
<p><strong>Clinical consequence:</strong> Chasing a falsely low SpO2 with increasing oxygen can lead to hyperoxia, while trusting a falsely high SpO2 can leave hypoxemia untreated.</p>

<h3>2. Using the Wrong Oxygen Delivery Device</h3>
<p><strong>The mistake:</strong> Selecting a device that cannot deliver the required FiO2 or flow rate for the patient's clinical condition.</p>
<p><strong>Why students do it:</strong> They do not fully understand the FiO2 ranges and flow capabilities of each device.</p>
<p><strong>The correct approach:</strong> Know your devices. Nasal cannula: 1-6 L/min, approximately 24-44% FiO2 (variable, depends on patient's inspiratory flow). Simple mask: 5-10 L/min, 35-50% FiO2 (minimum 5 L/min to prevent CO2 rebreathing). Non-rebreather mask: 10-15 L/min, 60-80% FiO2. Venturi mask: precise FiO2 from 24-50%. High-flow nasal cannula: up to 60 L/min, 21-100% FiO2. Match the device to the patient's oxygen needs and the precision required.</p>
<p><strong>Clinical consequence:</strong> Choosing a device that cannot meet the patient's inspiratory demand results in entrainment of room air and lower delivered FiO2 than intended. Choosing an imprecise device when exact FiO2 is needed compromises accurate titration.</p>

<h3>3. Not Titrating Oxygen to a Target</h3>
<p><strong>The mistake:</strong> Starting oxygen therapy without specifying a saturation target, or leaving high-flow oxygen running after the patient has stabilized.</p>
<p><strong>Why students do it:</strong> They focus on initiating oxygen therapy but do not plan for ongoing management.</p>
<p><strong>The correct approach:</strong> Set a target SpO2 range for each patient. For most adult patients, target 92-96%. For patients at risk of hypercapnic respiratory failure (such as COPD with chronic CO2 retention), target 88-92%. Wean FiO2 to the lowest level that maintains the target range. Document the target and reassess regularly.</p>
<p><strong>Clinical consequence:</strong> Undertreating leaves the patient hypoxemic. Overtreating wastes resources and increases the risk of absorption atelectasis and oxygen toxicity.</p>

<h3>4. Ignoring Oxygen Toxicity Risks</h3>
<p><strong>The mistake:</strong> Maintaining FiO2 above 0.60 for extended periods without attempting to wean or without clinical justification.</p>
<p><strong>Why students do it:</strong> They are focused on maintaining adequate oxygenation and do not consider the cumulative damage of high FiO2.</p>
<p><strong>The correct approach:</strong> Prolonged exposure to FiO2 above 0.60 causes oxidative damage to the alveolar epithelium, leading to inflammation, edema, and eventually fibrosis. Use the lowest FiO2 that achieves the target SpO2 or PaO2. If high FiO2 is required, optimize PEEP, positioning, and other interventions to reduce FiO2 dependency as quickly as possible.</p>
<p><strong>Clinical consequence:</strong> Oxygen toxicity causes tracheobronchitis within 24 hours at FiO2 1.0, and prolonged high FiO2 causes diffuse alveolar damage that mimics and worsens ARDS.</p>

<h3>5. Running a Simple Mask Below 5 L/min</h3>
<p><strong>The mistake:</strong> Setting a simple face mask flow rate below 5 L/min.</p>
<p><strong>Why students do it:</strong> They want to deliver a low FiO2 and reduce the flow rate, not realizing the mask's dead space creates a rebreathing problem.</p>
<p><strong>The correct approach:</strong> Simple masks require a minimum flow of 5 L/min to flush exhaled CO2 from the mask dead space. If a patient needs less than 5 L/min or less than 35% FiO2, switch to a nasal cannula instead. Never run a simple mask below the minimum flow.</p>
<p><strong>Clinical consequence:</strong> Flows below 5 L/min allow CO2 to accumulate in the mask dead space, causing the patient to rebreathe exhaled gas and develop hypercapnia.</p>

<h3>6. Misunderstanding the Venturi Mask</h3>
<p><strong>The mistake:</strong> Not understanding how the air entrainment ratio works, or setting the wrong flow rate for the selected FiO2 adapter.</p>
<p><strong>Why students do it:</strong> They memorize the FiO2 percentages on the color-coded adapters without understanding the entrainment principle.</p>
<p><strong>The correct approach:</strong> The Venturi mask uses jet mixing to entrain a precise ratio of room air to source oxygen. Each color-coded adapter specifies both the FiO2 and the required source oxygen flow rate. Setting the wrong flow rate changes the total flow delivered but can also affect the FiO2 accuracy. Always match the flow rate to the adapter's specifications. The total flow must exceed the patient's peak inspiratory flow to maintain precise FiO2.</p>
<p><strong>Clinical consequence:</strong> Incorrect Venturi mask setup delivers an unpredictable FiO2, negating the primary advantage of using a precise oxygen delivery device.</p>

<h3>7. Not Monitoring COPD Patients on Oxygen Carefully</h3>
<p><strong>The mistake:</strong> Administering high-flow oxygen to a COPD patient with chronic CO2 retention without monitoring for worsening hypercapnia.</p>
<p><strong>Why students do it:</strong> They prioritize treating hypoxemia without considering the oxygen-induced hypercapnia risk in these patients.</p>
<p><strong>The correct approach:</strong> For COPD patients with known or suspected chronic CO2 retention, start with controlled low-flow oxygen targeting SpO2 of 88-92%. Use a Venturi mask for precise FiO2 control. Monitor closely for signs of worsening hypercapnia: increasing drowsiness, confusion, and elevated PaCO2 on ABG. If the patient needs higher FiO2 to maintain adequate oxygenation, be prepared for noninvasive or invasive ventilation.</p>
<p><strong>Clinical consequence:</strong> Excessive oxygen in CO2-retaining COPD patients can worsen hypercapnia through multiple mechanisms (Haldane effect, V/Q mismatch changes, reduced hypoxic drive), potentially leading to respiratory failure and CO2 narcosis.</p>

<h3>8. Failing to Humidify High-Flow Oxygen</h3>
<p><strong>The mistake:</strong> Delivering high-flow oxygen (greater than 4 L/min by nasal cannula or any flow by mask) without supplemental humidification.</p>
<p><strong>Why students do it:</strong> They focus on delivering the correct FiO2 and flow but forget the mucosal drying effects of dry medical gas.</p>
<p><strong>The correct approach:</strong> Medical gases are dry (zero humidity). Flows above 4 L/min via nasal cannula should include a bubble humidifier. High-flow nasal cannula systems require heated humidification. Patients receiving oxygen via tracheostomy always need heated humidification because the natural upper airway humidification system is bypassed.</p>
<p><strong>Clinical consequence:</strong> Dry gas causes mucosal drying, thickened secretions, mucus plugging, epistaxis, patient discomfort, and damage to the airway epithelium.</p>

<h3>9. Overlooking Fire Safety with Oxygen</h3>
<p><strong>The mistake:</strong> Not educating patients about fire safety or not monitoring for fire hazards in oxygen-enriched environments.</p>
<p><strong>Why students do it:</strong> They focus on the therapeutic aspects and forget that oxygen is an oxidizer that accelerates combustion.</p>
<p><strong>The correct approach:</strong> Educate every patient receiving home oxygen about fire safety: no smoking within 10 feet of oxygen equipment, keep oxygen away from open flames, stoves, and heaters, do not use petroleum-based products near oxygen. In healthcare settings, ensure electrical equipment near oxygen is properly maintained and that no ignition sources are present.</p>
<p><strong>Clinical consequence:</strong> Fires in oxygen-enriched environments burn faster and hotter. Burns in patients using supplemental oxygen, often from smoking, cause severe injuries and deaths every year.</p>

<h3>10. Not Reassessing After Oxygen Changes</h3>
<p><strong>The mistake:</strong> Changing oxygen settings and walking away without reassessing the patient's response.</p>
<p><strong>Why students do it:</strong> They are busy with other patients and assume the change will have the desired effect.</p>
<p><strong>The correct approach:</strong> After any change in oxygen therapy, reassess the patient within 15-30 minutes. Check SpO2, respiratory rate, work of breathing, mental status, and heart rate. If the change was significant (such as weaning or initiating therapy), obtain an ABG after 20-30 minutes to confirm adequate oxygenation and ventilation. Document the assessment.</p>
<p><strong>Clinical consequence:</strong> Failing to reassess after changes means potentially missing clinical deterioration, inadequate oxygenation, or the development of complications.</p>

<h3>11. Confusing FiO2 Delivery Between Devices</h3>
<p><strong>The mistake:</strong> Believing a nasal cannula at 6 L/min delivers the same FiO2 as a Venturi mask set to 44%.</p>
<p><strong>Why students do it:</strong> They memorize approximate FiO2 values for nasal cannulas (4% per L/min rule) and treat them as precise.</p>
<p><strong>The correct approach:</strong> Nasal cannula FiO2 is variable and depends on the patient's inspiratory flow rate, tidal volume, and respiratory rate. The "4% per L/min" rule is an estimate only. A patient breathing rapidly and deeply with high inspiratory flow will entrain more room air around the cannula prongs, diluting the delivered oxygen. A Venturi mask delivers a fixed FiO2 because its total flow exceeds the patient's inspiratory demand. Choose the device based on whether precision matters.</p>
<p><strong>Clinical consequence:</strong> Assuming precise FiO2 from a variable device can lead to inappropriate clinical decisions, especially when calculating P/F ratios or A-a gradients.</p>

<h3>Improve Your Oxygen Therapy Knowledge</h3>
<p>Oxygen therapy seems straightforward but has many nuances that affect patient safety and exam performance. Master the devices, indications, and monitoring techniques.</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Read our TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/oxygen-therapy-cheat-sheet">Download the Oxygen Therapy Cheat Sheet</a></li>
<li><a href="/tips/tmc-exam-tips">Get Exam Day Tips</a></li>
<li><a href="/pricing">Start practicing with oxygen therapy questions</a></li>
</ul>`,
  },
]

async function main() {
  for (const page of pages) {
    await prisma.seoPage.upsert({
      where: { slug: page.slug },
      update: page,
      create: page,
    })
    console.log(`Upserted: ${page.slug}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
