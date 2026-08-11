import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pages = [
  {
    slug: 'nbrc-tmc-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC TMC Exam Guide: Everything You Need to Know to Pass',
    description: 'Complete guide to the NBRC Therapist Multiple-Choice (TMC) Exam. Learn about exam format, content domains, scoring, and proven strategies to earn your CRT or RRT.',
    division: 'tmc',
    readTime: '18 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC TMC Exam?</h2>
<p>The Therapist Multiple-Choice (TMC) Examination is the entry-level credentialing exam administered by the National Board for Respiratory Care (NBRC). Every respiratory therapy graduate must pass the TMC to earn the Certified Respiratory Therapist (CRT) credential, and achieving a higher score on the same exam qualifies candidates for the Registered Respiratory Therapist (RRT) pathway. The TMC is the single most important exam in a respiratory therapist's career because it determines both your initial credential and your eligibility for advanced practice.</p>
<p>Whether you are a new graduate or retaking the exam, this guide covers everything you need to know about the TMC's format, content domains, scoring system, and the strategies that consistently help candidates succeed.</p>

<h2>TMC Exam Format and Structure</h2>
<p>The TMC exam consists of <strong>160 multiple-choice questions</strong> delivered on a computer at a Pearson VUE testing center. Of those 160 questions, <strong>140 are scored</strong> and <strong>20 are unscored pretest items</strong> that the NBRC uses to evaluate potential future questions. You will not know which questions are pretest items, so you must treat every question as if it counts toward your score.</p>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Total Questions</td><td>160</td></tr>
    <tr><td>Scored Questions</td><td>140</td></tr>
    <tr><td>Pretest (Unscored) Questions</td><td>20</td></tr>
    <tr><td>Time Limit</td><td>3 hours</td></tr>
    <tr><td>Question Format</td><td>Multiple-choice (4 answer options)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
  </tbody>
</table>

<p>You have <strong>3 hours</strong> to complete the exam, which works out to roughly 1 minute and 7 seconds per question. Time management is critical &mdash; you cannot afford to spend five minutes deliberating on a single question.</p>

<h2>TMC Scoring: CRT vs. RRT Eligibility</h2>
<p>The TMC uses a unique two-threshold scoring system that determines which credential you earn:</p>
<ul>
  <li><strong>Low-Cut Score:</strong> Meeting this threshold earns you the <strong>Certified Respiratory Therapist (CRT)</strong> credential. The CRT is the entry-level credential required to practice respiratory care in all 50 states.</li>
  <li><strong>High-Cut Score:</strong> Meeting this higher threshold makes you eligible to sit for the <strong>Clinical Simulation Exam (CSE)</strong>. Passing both the TMC at the high-cut level and the CSE earns the <strong>Registered Respiratory Therapist (RRT)</strong> credential.</li>
</ul>
<p>The NBRC uses <strong>scaled scoring</strong> rather than a simple percentage. Scaled scores account for variations in exam difficulty across different test forms. Because of this, there is no fixed percentage that guarantees a pass. Focus on mastering as many content areas as possible rather than targeting a specific number of correct answers.</p>

<h2>TMC Content Domains</h2>
<p>The NBRC organizes the TMC into three major content domains. Understanding the weight of each domain helps you prioritize your study time.</p>

<h3>Domain I: Patient Data Evaluation and Recommendations (28%)</h3>
<p>This domain tests your ability to gather, interpret, and act on patient data. Expect questions on:</p>
<ul>
  <li>Reviewing patient charts, histories, and physical examinations</li>
  <li>Interpreting arterial blood gases (ABGs), pulmonary function tests (PFTs), and chest X-rays</li>
  <li>Recommending diagnostic procedures and therapeutic interventions</li>
  <li>Evaluating hemodynamic data from pulmonary artery catheters</li>
  <li>Assessing laboratory values including CBC, electrolytes, and coagulation studies</li>
</ul>

<h3>Domain II: Troubleshooting and Quality Assurance (24%)</h3>
<p>This domain focuses on equipment management and quality control:</p>
<ul>
  <li>Assembling, calibrating, and troubleshooting respiratory equipment</li>
  <li>Identifying and correcting equipment malfunctions during mechanical ventilation</li>
  <li>Performing quality control on blood gas analyzers and pulmonary function equipment</li>
  <li>Ensuring infection control protocols are followed</li>
  <li>Monitoring patient-ventilator synchrony</li>
</ul>

<h3>Domain III: Initiation and Modification of Interventions (48%)</h3>
<p>Nearly half the exam covers therapeutic interventions. This is where most questions live:</p>
<ul>
  <li>Oxygen therapy selection and titration</li>
  <li>Airway management including intubation, tracheostomy care, and suctioning</li>
  <li>Mechanical ventilation initiation, modes, and weaning</li>
  <li>Aerosol and medication delivery</li>
  <li>Bronchial hygiene and lung expansion therapy</li>
  <li>Emergency and critical care procedures including CPR and ACLS</li>
  <li>Patient education and discharge planning</li>
</ul>

<h2>Key Clinical Topics on the TMC</h2>
<p>While all content domains matter, certain topics appear with high frequency on the TMC:</p>
<ul>
  <li><strong>ABG interpretation:</strong> Expect 15-20 questions involving acid-base balance, oxygenation assessment, and clinical decision-making based on ABG results</li>
  <li><strong>Mechanical ventilation:</strong> Modes (AC, SIMV, PSV, PRVC), initial settings, alarm troubleshooting, and weaning protocols</li>
  <li><strong>Oxygen therapy devices:</strong> Flow rates, FiO2 delivery, high-flow vs. low-flow systems</li>
  <li><strong>Pharmacology:</strong> Bronchodilators, corticosteroids, mucolytics, and surfactant therapy</li>
  <li><strong>Neonatal and pediatric care:</strong> CPAP for neonates, surfactant administration, pediatric ventilation differences</li>
  <li><strong>Hemodynamic monitoring:</strong> Pulmonary artery catheter values, cardiac output interpretation</li>
</ul>

<h2>Sample TMC Clinical Scenarios</h2>

<h3>Scenario 1: Acute Asthma Exacerbation</h3>
<p>A 34-year-old patient presents to the emergency department with severe dyspnea, audible wheezing, and an SpO2 of 88% on room air. Respiratory rate is 32 breaths/min, heart rate is 124 bpm. Peak flow is 35% of predicted. The patient has been using a home albuterol MDI without relief.</p>
<p><strong>What to consider:</strong> This patient needs immediate continuous nebulized albuterol with ipratropium bromide, supplemental oxygen to maintain SpO2 above 92%, and likely systemic corticosteroids. If the patient does not respond, you should be prepared to recommend non-invasive ventilation (BiPAP) or, in a worst-case scenario, intubation and mechanical ventilation. TMC questions frequently test your ability to escalate therapy appropriately.</p>

<h3>Scenario 2: Ventilator Alarm Troubleshooting</h3>
<p>A mechanically ventilated patient on AC mode (VT 500 mL, RR 14, FiO2 0.50, PEEP 5) triggers a high-pressure alarm. The nurse reports the patient appears to be biting on the endotracheal tube and coughing.</p>
<p><strong>What to consider:</strong> Systematically troubleshoot from patient to machine. Check for secretions requiring suctioning, patient-ventilator dyssynchrony, bronchospasm, tube migration, or pneumothorax. In this case, the biting and coughing suggest the need for suctioning and possibly a bite block. The TMC loves testing your systematic approach to alarm management.</p>

<h3>Scenario 3: ABG Interpretation and Intervention</h3>
<p>A 68-year-old COPD patient on 2 L/min nasal cannula has the following ABG: pH 7.28, PaCO2 58 mmHg, PaO2 54 mmHg, HCO3 28 mEq/L. The patient is lethargic but arousable.</p>
<p><strong>What to consider:</strong> This ABG shows partially compensated respiratory acidosis with hypoxemia. The elevated bicarbonate suggests chronic CO2 retention with an acute exacerbation. Recommend non-invasive ventilation (BiPAP) to reduce the work of breathing and improve ventilation. Avoid excessive oxygen that could suppress the hypoxic drive. This type of question tests your ability to integrate ABG interpretation with clinical decision-making.</p>

<h2>TMC Exam Strategies and Tips</h2>
<ol>
  <li><strong>Master ABGs first.</strong> ABG interpretation underlies a huge portion of the exam. If you can quickly and accurately interpret an ABG, you will save time and earn points across multiple content domains.</li>
  <li><strong>Think "what would the RT do?"</strong> The TMC tests clinical judgment, not just recall. When two answers seem correct, choose the one that follows evidence-based respiratory therapy protocols.</li>
  <li><strong>Use the process of elimination.</strong> With four answer choices, eliminating even one wrong answer significantly improves your odds on questions where you are unsure.</li>
  <li><strong>Flag and move on.</strong> Do not spend more than 90 seconds on any single question during your first pass. Flag difficult questions and return to them after completing the rest of the exam.</li>
  <li><strong>Watch for "most appropriate" language.</strong> The TMC frequently asks for the <em>most</em> appropriate, <em>first</em> action, or <em>best</em> response. Multiple answers may be technically correct, but only one is the best answer in context.</li>
  <li><strong>Practice under timed conditions.</strong> Take full-length practice exams with a 3-hour timer. Building stamina and pacing discipline is just as important as content knowledge.</li>
</ol>

<h2>How to Prepare for the TMC</h2>
<p>Effective TMC preparation combines content review with extensive practice testing. Here is a proven study approach:</p>
<ul>
  <li>Start with a diagnostic practice exam to identify your weak areas</li>
  <li>Focus your study time on the highest-weighted domain (Domain III: Interventions, 48% of the exam)</li>
  <li>Use spaced repetition for pharmacology and equipment specifications</li>
  <li>Complete at least 1,000 practice questions before your exam date</li>
  <li>Take 3-5 full-length timed practice exams in the final two weeks</li>
</ul>
<p>Review our <a href="/cheat-sheets/">TMC cheat sheets</a> for quick-reference summaries of the most tested topics. Check out our <a href="/topics/">topic deep-dives</a> to build strong foundations in each content domain.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/tmc-exam-tips">TMC Exam Tips and Strategies</a> &mdash; Targeted advice for test day</li>
  <li><a href="/mistakes/common-tmc-exam-mistakes">Common TMC Exam Mistakes</a> &mdash; Errors that cost candidates points</li>
  <li><a href="/exam-day/tmc-exam-day-walkthrough">TMC Exam Day Walkthrough</a> &mdash; What to expect from arrival to results</li>
  <li><a href="/glossary/tmc-glossary">TMC Glossary</a> &mdash; Key terms and definitions</li>
</ul>

<h2>Ready to Start Studying?</h2>
<p>NBRCprep offers comprehensive practice exams, topic-specific question banks, and detailed explanations for every answer. Our questions are written to mirror the difficulty and clinical focus of the real TMC exam. <a href="/pricing">View our plans</a> and start your TMC prep today.</p>
`,
  },
  {
    slug: 'nbrc-nps-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC NPS Exam Guide: Neonatal/Pediatric Specialty Certification',
    description: 'Complete guide to the NBRC Neonatal/Pediatric Specialty (NPS) Exam. Learn about CSE format, clinical simulations, content areas, and strategies to earn your NPS.',
    division: 'nps',
    readTime: '16 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC NPS Exam?</h2>
<p>The Neonatal/Pediatric Specialty (NPS) Examination is an advanced credentialing exam offered by the National Board for Respiratory Care (NBRC) for respiratory therapists who specialize in caring for neonatal and pediatric patients. Earning the NPS credential demonstrates expertise in managing the unique respiratory challenges of infants, children, and adolescents &mdash; from premature neonates in the NICU to pediatric patients with complex airway disorders.</p>
<p>The NPS is a <strong>Clinical Simulation Exam (CSE)</strong>, which means it uses a branching, scenario-based format rather than traditional multiple-choice questions. This format tests your clinical decision-making in real-time patient care situations, making it one of the most challenging respiratory therapy exams.</p>

<h2>NPS Exam Format and Structure</h2>
<p>The NPS exam uses the Clinical Simulation Exam (CSE) format, which is fundamentally different from multiple-choice exams like the TMC or SDS.</p>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Exam Format</td><td>Clinical Simulation Exam (CSE)</td></tr>
    <tr><td>Number of Problems</td><td>22 clinical simulations</td></tr>
    <tr><td>Time Limit</td><td>4 hours</td></tr>
    <tr><td>Scoring</td><td>Pass/Fail (scaled scoring)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
    <tr><td>Prerequisite</td><td>RRT credential</td></tr>
  </tbody>
</table>

<h3>How Clinical Simulations Work</h3>
<p>Each simulation presents a patient scenario that unfolds over multiple sections. At each decision point, you are given a list of possible actions &mdash; assessments, interventions, tests to order, or consultations to request. You select the actions you believe are clinically appropriate, and the simulation advances based on your choices.</p>
<p>Key aspects of the CSE format:</p>
<ul>
  <li><strong>Branching scenarios:</strong> Your choices influence what information you receive next and how the patient's condition progresses</li>
  <li><strong>Scoring by section:</strong> Each section within a simulation is scored independently, so a poor choice early on does not necessarily ruin the entire problem</li>
  <li><strong>Positive and negative scoring:</strong> Correct actions earn points, but selecting harmful or unnecessary actions results in point deductions</li>
  <li><strong>Order matters:</strong> Some actions must be performed before others to receive full credit (e.g., assessing the patient before administering treatment)</li>
</ul>

<h2>NPS Content Areas</h2>
<p>The NPS exam focuses exclusively on neonatal and pediatric respiratory care. Content is organized around the clinical scenarios you will encounter:</p>

<h3>Neonatal Care</h3>
<ul>
  <li><strong>Respiratory Distress Syndrome (RDS):</strong> Surfactant administration, CPAP management, and ventilation strategies for premature neonates</li>
  <li><strong>Neonatal resuscitation:</strong> NRP protocols, initial stabilization, and assessment of the newborn</li>
  <li><strong>Bronchopulmonary Dysplasia (BPD):</strong> Long-term ventilation management and weaning strategies</li>
  <li><strong>Meconium Aspiration Syndrome (MAS):</strong> Airway management and ventilatory support</li>
  <li><strong>Persistent Pulmonary Hypertension of the Newborn (PPHN):</strong> Inhaled nitric oxide therapy and high-frequency ventilation</li>
  <li><strong>Congenital anomalies:</strong> Diaphragmatic hernia, tracheoesophageal fistula, and choanal atresia</li>
  <li><strong>Apnea of prematurity:</strong> Monitoring, caffeine therapy, and escalation protocols</li>
</ul>

<h3>Pediatric Care</h3>
<ul>
  <li><strong>Asthma management:</strong> Acute exacerbations, status asthmaticus, and chronic management</li>
  <li><strong>Croup and epiglottitis:</strong> Differentiation, racemic epinephrine, and airway management</li>
  <li><strong>Bronchiolitis:</strong> RSV-related disease, supportive care, and high-flow nasal cannula therapy</li>
  <li><strong>Cystic fibrosis:</strong> Airway clearance techniques, inhaled medications, and nutritional considerations</li>
  <li><strong>Pediatric trauma:</strong> Airway management in trauma patients, cervical spine precautions</li>
  <li><strong>Foreign body aspiration:</strong> Recognition, emergency management, and bronchoscopy indications</li>
  <li><strong>Pediatric mechanical ventilation:</strong> Age-appropriate settings, lung-protective strategies, and weaning</li>
</ul>

<h3>Cross-Cutting Topics</h3>
<ul>
  <li>Age-specific vital signs, tidal volumes, and equipment sizing</li>
  <li>Developmental considerations affecting respiratory care</li>
  <li>Family-centered care and communication</li>
  <li>Transport medicine for neonatal and pediatric patients</li>
  <li>Ethical considerations in neonatal care</li>
</ul>

<h2>NPS Scoring</h2>
<p>The NPS exam uses <strong>scaled scoring</strong> with a pass/fail outcome. The NBRC does not publish a specific percentage or raw score needed to pass. Each clinical simulation is scored based on the appropriateness of your selected actions:</p>
<ul>
  <li><strong>Correct actions</strong> that are clinically indicated earn positive points</li>
  <li><strong>Incorrect or harmful actions</strong> result in point deductions</li>
  <li><strong>Omitting necessary actions</strong> means you miss those potential points</li>
  <li><strong>Unnecessary but non-harmful actions</strong> may result in minor deductions or no impact</li>
</ul>
<p>The key takeaway: select actions that are clearly indicated by the clinical scenario and avoid ordering unnecessary tests or interventions that could harm the patient or waste resources.</p>

<h2>Sample NPS Clinical Scenarios</h2>

<h3>Scenario 1: Premature Neonate with RDS</h3>
<p>A 28-week gestational age neonate is delivered via emergency cesarean section. The infant presents with grunting, nasal flaring, and intercostal retractions within minutes of birth. The Apgar scores are 5 at 1 minute and 7 at 5 minutes. SpO2 is 82% on blow-by oxygen.</p>
<p><strong>Clinical decision points:</strong> You must decide on initial stabilization (CPAP vs. intubation), whether to administer surfactant and by which method (INSURE technique vs. continued ventilation), appropriate ventilator settings for an extremely low birth weight infant, and ongoing monitoring. The simulation will test whether you follow NRP guidelines, use appropriate tidal volumes (4-6 mL/kg), and avoid hyperoxia.</p>

<h3>Scenario 2: Pediatric Status Asthmaticus</h3>
<p>A 7-year-old child arrives in the emergency department after failed home treatment for an asthma exacerbation. The child is sitting tripod, speaking in single words, with audible wheezing. SpO2 is 89%, respiratory rate is 42, heart rate is 148. The child has received three albuterol nebulizers at home without improvement.</p>
<p><strong>Clinical decision points:</strong> This simulation tests your ability to escalate therapy appropriately &mdash; continuous nebulized albuterol, ipratropium bromide, IV magnesium sulfate, systemic corticosteroids, and potential transition to non-invasive or invasive ventilation. You must recognize when a child is progressing toward respiratory failure (disappearing wheezing with worsening distress is an ominous sign).</p>

<h3>Scenario 3: Neonatal Transport</h3>
<p>You are called to a community hospital to transport a 2-day-old full-term infant with increasing respiratory distress. The infant is on a nasal cannula at 2 L/min with SpO2 fluctuating between 75-85%. A chest X-ray shows a large left-sided diaphragmatic hernia with bowel in the thorax and mediastinal shift to the right.</p>
<p><strong>Clinical decision points:</strong> This scenario tests your knowledge of congenital diaphragmatic hernia management. Key decisions include immediate intubation (bag-mask ventilation is contraindicated as it inflates the stomach and worsens lung compression), appropriate ventilator settings with low peak pressures, gastric decompression with an OG tube, and transport considerations. The simulation will penalize bag-mask ventilation in this context.</p>

<h2>NPS Exam Strategies</h2>
<ol>
  <li><strong>Always assess before treating.</strong> In CSE format, selecting assessment actions before interventions is critical. You must gather data to justify your clinical decisions.</li>
  <li><strong>Know your age-specific normals.</strong> Normal vital signs, tidal volumes, and equipment sizes differ dramatically between a 500-gram premature neonate and a 30-kg child. Memorize the key values for each age group.</li>
  <li><strong>Avoid shotgun ordering.</strong> Unlike multiple-choice exams where extra answers do not hurt, the CSE penalizes unnecessary actions. Only select interventions that are clearly indicated.</li>
  <li><strong>Follow established protocols.</strong> NRP for neonatal resuscitation, PALS for pediatric emergencies. The NPS expects you to follow these evidence-based guidelines.</li>
  <li><strong>Practice with simulation-style questions.</strong> The CSE format is unfamiliar to most candidates. Practice with branching scenarios to build comfort with the format before exam day.</li>
  <li><strong>Manage your time.</strong> With 22 problems in 4 hours, you have approximately 11 minutes per simulation. Some problems are shorter; use that saved time for more complex scenarios.</li>
</ol>

<h2>How to Prepare for the NPS</h2>
<p>NPS preparation requires deep clinical knowledge in neonatal and pediatric respiratory care, combined with CSE-specific test-taking strategies:</p>
<ul>
  <li>Review NRP and PALS guidelines thoroughly &mdash; these protocols form the foundation of many simulations</li>
  <li>Study neonatal and pediatric disease processes in depth, including pathophysiology and evidence-based treatments</li>
  <li>Practice clinical simulation questions to build familiarity with the branching format</li>
  <li>Review age-specific equipment sizing, medication dosing, and ventilator parameters</li>
  <li>Focus on clinical decision-making rather than rote memorization</li>
</ul>
<p>Our <a href="/cheat-sheets/">NPS cheat sheets</a> provide quick-reference guides for neonatal and pediatric protocols. Explore our <a href="/topics/">topic resources</a> for in-depth coverage of each content area.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/nps-exam-tips">NPS Exam Tips and Strategies</a> &mdash; CSE-specific advice</li>
  <li><a href="/mistakes/common-nps-exam-mistakes">Common NPS Exam Mistakes</a> &mdash; Pitfalls to avoid in clinical simulations</li>
  <li><a href="/exam-day/nps-exam-day-walkthrough">NPS Exam Day Walkthrough</a> &mdash; What to expect at the testing center</li>
  <li><a href="/glossary/nps-glossary">NPS Glossary</a> &mdash; Neonatal/pediatric terminology</li>
</ul>

<h2>Start Your NPS Prep</h2>
<p>NBRCprep provides practice simulations and targeted question banks designed specifically for the NPS exam. Our content is written by experienced neonatal/pediatric respiratory therapists who understand the clinical depth this exam demands. <a href="/pricing">View our plans</a> and begin preparing for your NPS credential today.</p>
`,
  },
  {
    slug: 'nbrc-accs-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC ACCS Exam Guide: Adult Critical Care Specialty Certification',
    description: 'Complete guide to the NBRC Adult Critical Care Specialty (ACCS) Exam. Learn about the CSE format, critical care simulations, and strategies to earn your ACCS.',
    division: 'accs',
    readTime: '16 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC ACCS Exam?</h2>
<p>The Adult Critical Care Specialty (ACCS) Examination is an advanced credentialing exam from the National Board for Respiratory Care (NBRC) designed for respiratory therapists who specialize in adult critical care medicine. The ACCS credential demonstrates mastery of the complex clinical decision-making required in intensive care units, including advanced ventilator management, hemodynamic monitoring, and the management of critically ill patients with multi-organ involvement.</p>
<p>Like the NPS exam, the ACCS uses a <strong>Clinical Simulation Exam (CSE)</strong> format. This means you will work through realistic patient scenarios rather than answering isolated multiple-choice questions, testing your ability to manage patients from admission through stabilization, treatment, and recovery or end-of-life care.</p>

<h2>ACCS Exam Format and Structure</h2>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Exam Format</td><td>Clinical Simulation Exam (CSE)</td></tr>
    <tr><td>Number of Problems</td><td>22 clinical simulations</td></tr>
    <tr><td>Time Limit</td><td>4 hours</td></tr>
    <tr><td>Scoring</td><td>Pass/Fail (scaled scoring)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
    <tr><td>Prerequisite</td><td>RRT credential</td></tr>
  </tbody>
</table>

<h3>Understanding the CSE Format</h3>
<p>Each of the 22 clinical simulations presents a critically ill adult patient. The simulation unfolds in sections, and at each decision point you select from a list of available actions. Your selections determine the information you receive and how the scenario progresses. This branching structure means that two candidates may experience somewhat different paths through the same simulation based on their clinical choices.</p>
<p>Important CSE mechanics for the ACCS:</p>
<ul>
  <li><strong>Actions include:</strong> assessments, diagnostic tests, therapeutic interventions, medication orders, ventilator changes, and consultations</li>
  <li><strong>Scoring is nuanced:</strong> Correct actions earn points, harmful actions lose points, and the order of your actions matters</li>
  <li><strong>No going back:</strong> Once you advance to the next section of a simulation, you cannot return to a previous section</li>
  <li><strong>Time pressure is real:</strong> 22 problems in 4 hours means roughly 11 minutes per simulation</li>
</ul>

<h2>ACCS Content Areas</h2>
<p>The ACCS exam covers the full spectrum of adult critical care respiratory therapy. Simulations draw from the following clinical areas:</p>

<h3>Advanced Mechanical Ventilation</h3>
<ul>
  <li>Conventional modes: AC (volume and pressure), SIMV, PSV, PRVC</li>
  <li>Advanced modes: APRV/BiLevel, high-frequency oscillatory ventilation (HFOV)</li>
  <li>Lung-protective ventilation strategies (ARDSNet protocol)</li>
  <li>Ventilator-induced lung injury (VILI) prevention</li>
  <li>Prone positioning for severe ARDS</li>
  <li>Weaning protocols and spontaneous breathing trials (SBTs)</li>
  <li>Difficult-to-wean patients and tracheostomy management</li>
</ul>

<h3>Hemodynamic Monitoring and Management</h3>
<ul>
  <li>Pulmonary artery catheter interpretation (PAP, PCWP, CO, SVR, PVR)</li>
  <li>Non-invasive hemodynamic monitoring</li>
  <li>Fluid responsiveness assessment</li>
  <li>Vasoactive medication management (vasopressors and inotropes)</li>
  <li>Shock states: cardiogenic, septic, hypovolemic, obstructive</li>
</ul>

<h3>Critical Care Conditions</h3>
<ul>
  <li><strong>ARDS:</strong> Berlin criteria, management strategies, rescue therapies</li>
  <li><strong>Sepsis:</strong> Surviving Sepsis Campaign guidelines, early goal-directed therapy</li>
  <li><strong>COPD exacerbation:</strong> NIV management, intubation criteria</li>
  <li><strong>Status asthmaticus:</strong> Escalation of therapy, ventilation challenges</li>
  <li><strong>Acute heart failure:</strong> Pulmonary edema management, NIV, hemodynamic support</li>
  <li><strong>Pulmonary embolism:</strong> Diagnosis, anticoagulation, thrombolytics</li>
  <li><strong>Neuromuscular disease:</strong> Respiratory failure in Guillain-Barr&eacute;, myasthenia gravis</li>
  <li><strong>Traumatic injuries:</strong> Flail chest, pneumothorax, hemothorax, traumatic brain injury</li>
</ul>

<h3>Procedures and Advanced Therapies</h3>
<ul>
  <li>Advanced airway management (difficult airway algorithms)</li>
  <li>Bronchoscopy assistance</li>
  <li>Chest tube management</li>
  <li>Inhaled pulmonary vasodilators (iNO, epoprostenol)</li>
  <li>ECMO considerations and management</li>
  <li>Therapeutic hypothermia protocols</li>
  <li>End-of-life care and ventilator withdrawal</li>
</ul>

<h2>ACCS Scoring</h2>
<p>The ACCS uses <strong>scaled scoring</strong> with a pass/fail result. The NBRC does not disclose specific cut scores or percentages required to pass. The scoring model accounts for:</p>
<ul>
  <li>Whether you selected the correct assessments and interventions</li>
  <li>Whether you avoided harmful or unnecessary actions</li>
  <li>The appropriateness of the order in which you performed actions</li>
  <li>Your ability to recognize and respond to changes in patient status</li>
</ul>
<p>The most effective strategy is to approach each simulation as you would a real ICU patient: assess systematically, intervene based on evidence, and avoid unnecessary actions that could cause harm.</p>

<h2>Sample ACCS Clinical Scenarios</h2>

<h3>Scenario 1: Severe ARDS</h3>
<p>A 52-year-old patient with community-acquired pneumonia is admitted to the ICU. Over 24 hours, the patient deteriorates rapidly. Current settings: AC-VC, VT 420 mL (6 mL/kg IBW), RR 28, FiO2 1.0, PEEP 14 cmH2O. ABG: pH 7.22, PaCO2 62, PaO2 58. P/F ratio is 58. Plateau pressure is 32 cmH2O.</p>
<p><strong>Clinical decision points:</strong> This patient has severe ARDS by Berlin criteria. The simulation will test whether you recognize the need for rescue therapies such as prone positioning, neuromuscular blockade, or recruitment maneuvers. You must balance permissive hypercapnia against the need for adequate oxygenation, manage plateau pressures, and consider when to consult for ECMO. Key: maintain lung-protective ventilation even under pressure to "improve" the blood gas.</p>

<h3>Scenario 2: Septic Shock</h3>
<p>A 67-year-old patient is admitted from the emergency department with urosepsis. Despite 3 liters of crystalloid, the patient remains hypotensive (MAP 56 mmHg). The patient is tachycardic (HR 132), tachypneic (RR 34), and has an SpO2 of 91% on a non-rebreather mask. Lactate is 6.2 mmol/L.</p>
<p><strong>Clinical decision points:</strong> This simulation tests your knowledge of the Surviving Sepsis Campaign guidelines. You should recognize the need for vasopressor support (norepinephrine as first-line), appropriate fluid resuscitation, hemodynamic monitoring, and respiratory support. The patient may progress to respiratory failure requiring intubation, and the simulation will test your ventilator management in the context of hemodynamic instability.</p>

<h3>Scenario 3: Ventilator Weaning Failure</h3>
<p>A 74-year-old patient has been mechanically ventilated for 12 days following abdominal surgery complicated by pneumonia. The patient has failed two spontaneous breathing trials (SBTs), developing tachypnea and diaphoresis within 20 minutes each time. Current settings: PSV 12, PEEP 5, FiO2 0.35. The patient has a weak cough and moderate secretions.</p>
<p><strong>Clinical decision points:</strong> This scenario tests your approach to the difficult-to-wean patient. Consider tracheostomy, causes of weaning failure (deconditioning, cardiac dysfunction, diaphragm weakness, psychological factors), rehabilitation strategies, and gradual weaning approaches such as progressive SBT duration or gradual PSV reduction. The simulation rewards a systematic, patient approach rather than aggressive weaning.</p>

<h2>ACCS Exam Strategies</h2>
<ol>
  <li><strong>Think like an intensivist.</strong> The ACCS tests advanced critical thinking, not basic RT skills. Approach each simulation with an ICU mindset: assess, diagnose, treat, reassess.</li>
  <li><strong>Know your evidence-based protocols.</strong> ARDSNet, Surviving Sepsis Campaign, and difficult airway management algorithms form the backbone of many simulations.</li>
  <li><strong>Prioritize life threats.</strong> In every simulation, address the most immediately life-threatening issue first. Airway, breathing, circulation &mdash; the ABCs still apply in critical care.</li>
  <li><strong>Do not over-order.</strong> The CSE format penalizes unnecessary actions. If a test or intervention is not clearly indicated by the clinical data, do not select it.</li>
  <li><strong>Watch for complications.</strong> Many simulations will present a patient who develops a complication (pneumothorax, VAP, ARDS, etc.). Be prepared to pivot your management when new information appears.</li>
  <li><strong>Practice CSE-specific timing.</strong> The branching format requires a different pacing strategy than multiple-choice exams. Practice with simulation-style questions to build fluency.</li>
</ol>

<h2>How to Prepare for the ACCS</h2>
<ul>
  <li>Review current critical care guidelines (ARDSNet, Surviving Sepsis, AHA ACLS)</li>
  <li>Study advanced ventilator modes and waveform analysis in depth</li>
  <li>Master hemodynamic calculations and their clinical significance</li>
  <li>Practice clinical simulations to build CSE test-taking skills</li>
  <li>Review complex case studies from critical care journals</li>
  <li>Focus on clinical reasoning and the "why" behind each intervention</li>
</ul>
<p>Our <a href="/cheat-sheets/">ACCS cheat sheets</a> cover hemodynamics, ventilator modes, and critical care pharmacology. Visit our <a href="/topics/">topic deep-dives</a> for comprehensive coverage of each content area.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/accs-exam-tips">ACCS Exam Tips and Strategies</a> &mdash; Advanced CSE tactics</li>
  <li><a href="/mistakes/common-accs-exam-mistakes">Common ACCS Exam Mistakes</a> &mdash; Critical errors to avoid</li>
  <li><a href="/exam-day/accs-exam-day-walkthrough">ACCS Exam Day Walkthrough</a> &mdash; Preparing for your testing appointment</li>
  <li><a href="/glossary/accs-glossary">ACCS Glossary</a> &mdash; Critical care terminology</li>
</ul>

<h2>Start Your ACCS Prep</h2>
<p>NBRCprep offers critical care simulation practice and detailed question banks tailored for the ACCS exam. Our content is developed by practicing critical care respiratory therapists who understand the depth of knowledge this credential demands. <a href="/pricing">View our plans</a> and start preparing for the ACCS today.</p>
`,
  },
  {
    slug: 'nbrc-sds-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC SDS Exam Guide: Sleep Disorders Specialty Certification',
    description: 'Complete guide to the NBRC Sleep Disorders Specialty (SDS) Exam. Learn about exam format, polysomnography content, scoring, and strategies to earn your SDS credential.',
    division: 'sds',
    readTime: '15 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC SDS Exam?</h2>
<p>The Sleep Disorders Specialty (SDS) Examination is a credentialing exam from the National Board for Respiratory Care (NBRC) for respiratory therapists and polysomnographic technologists who specialize in sleep disorders medicine. The SDS credential validates your expertise in polysomnography, sleep-disordered breathing diagnosis and treatment, and the management of patients with a wide range of sleep disorders.</p>
<p>Unlike the NPS and ACCS exams, the SDS uses a <strong>traditional multiple-choice format</strong>, making it more similar to the TMC in structure while focusing entirely on sleep medicine content.</p>

<h2>SDS Exam Format and Structure</h2>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Total Questions</td><td>130</td></tr>
    <tr><td>Scored Questions</td><td>115</td></tr>
    <tr><td>Pretest (Unscored) Questions</td><td>15</td></tr>
    <tr><td>Time Limit</td><td>3 hours</td></tr>
    <tr><td>Question Format</td><td>Multiple-choice (4 answer options)</td></tr>
    <tr><td>Scoring</td><td>Pass/Fail (scaled scoring)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
  </tbody>
</table>

<p>The SDS consists of <strong>130 multiple-choice questions</strong>, of which <strong>115 are scored</strong> and <strong>15 are unscored pretest items</strong>. You have <strong>3 hours</strong> to complete the exam, giving you approximately 1 minute and 23 seconds per question. As with the TMC, pretest questions are indistinguishable from scored questions, so answer every question with full effort.</p>

<h2>SDS Content Domains</h2>
<p>The SDS exam covers the full scope of sleep disorders medicine. Content is organized into several key domains:</p>

<h3>Polysomnography and Sleep Study Procedures</h3>
<ul>
  <li>Patient preparation and electrode/sensor application (EEG, EOG, EMG, ECG, respiratory sensors, oximetry)</li>
  <li>Equipment calibration, bio-calibrations, and impedance checks</li>
  <li>Monitoring and troubleshooting during overnight studies</li>
  <li>Split-night study protocols</li>
  <li>Multiple Sleep Latency Test (MSLT) and Maintenance of Wakefulness Test (MWT)</li>
  <li>Home sleep apnea testing (HSAT) protocols</li>
  <li>Pediatric polysomnography considerations</li>
</ul>

<h3>Sleep Stage Scoring and Event Identification</h3>
<ul>
  <li>Sleep stage scoring using AASM criteria (N1, N2, N3, REM, Wake)</li>
  <li>Identifying and scoring respiratory events (apneas, hypopneas, RERAs)</li>
  <li>Scoring limb movements (PLMS) and arousal events</li>
  <li>Cardiac event recognition during sleep studies</li>
  <li>Calculating AHI, RDI, ODI, and sleep efficiency</li>
  <li>EEG waveform recognition (alpha, beta, theta, delta, K-complexes, sleep spindles, sawtooth waves)</li>
</ul>

<h3>Sleep Disorders Pathophysiology</h3>
<ul>
  <li><strong>Obstructive Sleep Apnea (OSA):</strong> Pathophysiology, risk factors, severity classification, and comorbidities</li>
  <li><strong>Central Sleep Apnea (CSA):</strong> Types including Cheyne-Stokes respiration, treatment-emergent CSA</li>
  <li><strong>Obesity Hypoventilation Syndrome (OHS):</strong> Diagnosis and management</li>
  <li><strong>Insomnia:</strong> Types, cognitive behavioral therapy for insomnia (CBT-I), pharmacological management</li>
  <li><strong>Narcolepsy:</strong> Type 1 and Type 2, diagnosis with MSLT, cataplexy</li>
  <li><strong>Restless Legs Syndrome (RLS) and Periodic Limb Movement Disorder (PLMD)</strong></li>
  <li><strong>Parasomnias:</strong> Sleepwalking, REM sleep behavior disorder, sleep terrors</li>
  <li><strong>Circadian rhythm disorders:</strong> Delayed sleep phase, shift work disorder, jet lag</li>
</ul>

<h3>Treatment Modalities</h3>
<ul>
  <li>CPAP therapy: Titration protocols, pressure adjustments, mask fitting, and compliance monitoring</li>
  <li>BiPAP/BPAP: Indications for bilevel therapy, titration, and settings</li>
  <li>Adaptive servo-ventilation (ASV) for complex sleep apnea</li>
  <li>Oral appliance therapy</li>
  <li>Surgical interventions (UPPP, MMA, hypoglossal nerve stimulation)</li>
  <li>Positional therapy and weight management</li>
  <li>Supplemental oxygen during sleep</li>
  <li>Pharmacological treatments for narcolepsy, insomnia, and RLS</li>
</ul>

<h3>Infection Control and Safety</h3>
<ul>
  <li>Equipment cleaning and disinfection protocols</li>
  <li>Patient safety during overnight studies</li>
  <li>Emergency procedures in the sleep lab</li>
  <li>HIPAA compliance and documentation standards</li>
</ul>

<h2>SDS Scoring</h2>
<p>The SDS exam uses <strong>scaled scoring</strong> with a pass/fail outcome. The NBRC uses scaled scores to account for differences in difficulty across exam forms. There is no fixed percentage of correct answers that guarantees passing. Your best strategy is to prepare thoroughly across all content domains and aim to answer as many questions correctly as possible.</p>

<h2>Sample SDS Clinical Scenarios</h2>

<h3>Scenario 1: Split-Night Study</h3>
<p>A 48-year-old male with a BMI of 36, loud snoring, and excessive daytime sleepiness undergoes an overnight polysomnography study. During the first 2 hours, the patient demonstrates an AHI of 52 with significant oxygen desaturation (nadir SpO2 of 72%). Predominantly obstructive apneas are observed in the supine position during N2 and REM sleep.</p>
<p><strong>What to consider:</strong> This patient meets criteria for a split-night study. You should be prepared to initiate CPAP titration during the second half of the night. Key decisions include starting CPAP pressure, titration protocol per AASM guidelines, monitoring for mask leak, and documenting the therapeutic pressure that eliminates respiratory events. The exam will test your knowledge of when split-night protocols are appropriate and how to execute them.</p>

<h3>Scenario 2: Complex Sleep Apnea</h3>
<p>A patient previously diagnosed with severe OSA returns for a CPAP titration study. At a CPAP pressure of 12 cmH2O, obstructive events are eliminated, but the patient develops frequent central apneas with a central apnea index of 15. The pattern does not resolve with further pressure increases.</p>
<p><strong>What to consider:</strong> This patient has treatment-emergent central sleep apnea (complex sleep apnea). You should understand the differences between CPAP, BiPAP, and ASV therapy for this condition. The exam may test when to switch to ASV, contraindications for ASV (heart failure with reduced ejection fraction), and alternative management strategies.</p>

<h3>Scenario 3: MSLT Interpretation</h3>
<p>A 22-year-old college student is referred for evaluation of excessive daytime sleepiness and reports occasional episodes of sudden muscle weakness triggered by laughter. An overnight PSG shows no significant sleep-disordered breathing. The following day, an MSLT is performed with 5 nap opportunities. Mean sleep latency is 3.2 minutes with sleep-onset REM periods (SOREMPs) in 4 of 5 naps.</p>
<p><strong>What to consider:</strong> The combination of short mean sleep latency, multiple SOREMPs, and cataplexy (muscle weakness triggered by emotions) is highly suggestive of Type 1 narcolepsy. The exam will test your understanding of MSLT protocols, interpretation criteria for narcolepsy diagnosis, and the distinction between Type 1 and Type 2 narcolepsy.</p>

<h2>SDS Exam Strategies</h2>
<ol>
  <li><strong>Master AASM scoring rules.</strong> Sleep staging and event scoring per AASM criteria are heavily tested. Know the specific EEG, EOG, and EMG criteria for each sleep stage and the definitions of apneas, hypopneas, and RERAs.</li>
  <li><strong>Know your titration protocols.</strong> CPAP and BiPAP titration procedures per AASM guidelines appear frequently. Understand starting pressures, titration increments, and when to advance therapy.</li>
  <li><strong>Understand the clinical significance of PSG metrics.</strong> AHI, RDI, sleep efficiency, arousal index &mdash; know what they mean clinically and how they guide treatment decisions.</li>
  <li><strong>Study equipment troubleshooting.</strong> Signal artifacts, electrode issues, and sensor malfunctions are commonly tested. Know how to identify and resolve technical problems during a study.</li>
  <li><strong>Do not neglect non-respiratory sleep disorders.</strong> While OSA dominates sleep medicine practice, the SDS exam also covers insomnia, narcolepsy, parasomnias, and circadian rhythm disorders.</li>
  <li><strong>Review pediatric differences.</strong> Scoring criteria and treatment approaches differ for pediatric patients. Know the key differences in AHI thresholds and treatment indications.</li>
</ol>

<h2>How to Prepare for the SDS</h2>
<ul>
  <li>Study the AASM Manual for the Scoring of Sleep and Associated Events thoroughly</li>
  <li>Review polysomnographic tracings and practice scoring sleep stages and events</li>
  <li>Master the pathophysiology and treatment of all major sleep disorders</li>
  <li>Practice with SDS-specific multiple-choice questions</li>
  <li>Review equipment setup, calibration, and troubleshooting procedures</li>
</ul>
<p>Explore our <a href="/cheat-sheets/">SDS cheat sheets</a> for quick-reference guides to sleep staging, titration protocols, and PSG metrics. Browse our <a href="/topics/">topic resources</a> for comprehensive coverage of sleep medicine content.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/sds-exam-tips">SDS Exam Tips and Strategies</a> &mdash; Sleep-specific study advice</li>
  <li><a href="/mistakes/common-sds-exam-mistakes">Common SDS Exam Mistakes</a> &mdash; Frequently missed concepts</li>
  <li><a href="/exam-day/sds-exam-day-walkthrough">SDS Exam Day Walkthrough</a> &mdash; What to expect at the testing center</li>
  <li><a href="/glossary/sds-glossary">SDS Glossary</a> &mdash; Sleep medicine terminology</li>
</ul>

<h2>Start Your SDS Prep</h2>
<p>NBRCprep offers targeted SDS practice exams and question banks covering polysomnography, sleep disorders, and treatment modalities. Our questions mirror the clinical focus and difficulty level of the actual SDS exam. <a href="/pricing">View our plans</a> and start preparing for your SDS credential today.</p>
`,
  },
  {
    slug: 'nbrc-cpft-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC CPFT Exam Guide: Certified Pulmonary Function Technologist',
    description: 'Complete guide to the NBRC CPFT Exam. Learn about pulmonary function testing content, exam format, scoring, and strategies to earn your CPFT credential.',
    division: 'cpft',
    readTime: '14 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC CPFT Exam?</h2>
<p>The Certified Pulmonary Function Technologist (CPFT) Examination is a credentialing exam from the National Board for Respiratory Care (NBRC) that validates competency in performing and interpreting basic pulmonary function tests. The CPFT credential is designed for technologists who perform spirometry, lung volume measurements, diffusion capacity testing, and other pulmonary diagnostics in hospital pulmonary function laboratories, physician offices, and occupational health settings.</p>
<p>The CPFT is the entry-level pulmonary function credential, while the <a href="/guides/nbrc-rpft-exam-guide">RPFT</a> represents the advanced level. Earning the CPFT demonstrates proficiency in the fundamental techniques and quality assurance practices essential to accurate pulmonary function testing.</p>

<h2>CPFT Exam Format and Structure</h2>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Total Questions</td><td>100</td></tr>
    <tr><td>Scored Questions</td><td>85</td></tr>
    <tr><td>Pretest (Unscored) Questions</td><td>15</td></tr>
    <tr><td>Time Limit</td><td>2 hours</td></tr>
    <tr><td>Question Format</td><td>Multiple-choice (4 answer options)</td></tr>
    <tr><td>Scoring</td><td>Pass/Fail (scaled scoring)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
  </tbody>
</table>

<p>The CPFT consists of <strong>100 multiple-choice questions</strong>, of which <strong>85 are scored</strong> and <strong>15 are unscored pretest items</strong>. You have <strong>2 hours</strong> to complete the exam, giving you approximately 1 minute and 12 seconds per question. Pretest questions are mixed in with scored questions and cannot be identified, so answer every question to the best of your ability.</p>

<h2>CPFT Content Domains</h2>
<p>The CPFT exam tests your knowledge of basic pulmonary function testing techniques, quality assurance, and result interpretation.</p>

<h3>Spirometry</h3>
<ul>
  <li>Performing forced vital capacity (FVC) maneuvers</li>
  <li>Measuring FEV1, FVC, FEV1/FVC ratio, FEF25-75%, and peak expiratory flow</li>
  <li>Slow vital capacity (SVC) measurements</li>
  <li>Pre- and post-bronchodilator testing</li>
  <li>ATS/ERS acceptability and repeatability criteria</li>
  <li>Recognizing suboptimal efforts and common artifacts</li>
  <li>Flow-volume loop interpretation and pattern recognition</li>
  <li>Volume-time curve analysis</li>
</ul>

<h3>Lung Volumes</h3>
<ul>
  <li>Body plethysmography: technique, calibration, and measurement of TGV/FRC</li>
  <li>Nitrogen washout method</li>
  <li>Helium dilution method</li>
  <li>Total lung capacity (TLC), residual volume (RV), functional residual capacity (FRC)</li>
  <li>RV/TLC ratio and its clinical significance</li>
  <li>Differences between plethysmographic and gas dilution volumes</li>
</ul>

<h3>Diffusion Capacity</h3>
<ul>
  <li>Single-breath DLCO technique</li>
  <li>Quality control criteria for acceptable DLCO maneuvers</li>
  <li>Adjustments for hemoglobin, COHb, and altitude</li>
  <li>Clinical conditions affecting DLCO (emphysema, pulmonary fibrosis, pulmonary hypertension, anemia)</li>
</ul>

<h3>Equipment and Quality Assurance</h3>
<ul>
  <li>Spirometer types: volume-displacement vs. flow-sensing</li>
  <li>Daily calibration verification using a 3-liter syringe</li>
  <li>Leak testing and linearity checks</li>
  <li>Biological controls (bio-QC)</li>
  <li>Equipment maintenance and cleaning protocols</li>
  <li>Infection control practices in the PFT laboratory</li>
  <li>Environmental conditions affecting test results (temperature, humidity, barometric pressure, BTPS correction)</li>
</ul>

<h3>Patient Assessment and Testing Considerations</h3>
<ul>
  <li>Contraindications to pulmonary function testing</li>
  <li>Patient coaching techniques for optimal test performance</li>
  <li>Reference values and the lower limit of normal (LLN)</li>
  <li>Interpretation of obstructive, restrictive, and mixed patterns</li>
  <li>Bronchodilator response criteria</li>
  <li>Testing modifications for special populations (elderly, pediatric, disabled)</li>
</ul>

<h3>Additional Testing</h3>
<ul>
  <li>Pulse oximetry and its limitations</li>
  <li>Capnography basics</li>
  <li>Maximum voluntary ventilation (MVV)</li>
  <li>Maximum inspiratory and expiratory pressures (MIP/MEP)</li>
  <li>Basics of bronchial provocation testing (methacholine challenge)</li>
</ul>

<h2>CPFT Scoring</h2>
<p>The CPFT exam uses <strong>scaled scoring</strong> with a pass/fail result. The NBRC uses scaled scores to ensure fairness across different exam forms with varying difficulty levels. No specific percentage or raw score is published as the passing threshold. Prepare comprehensively across all content areas and aim to answer every question correctly.</p>

<h2>Sample CPFT Clinical Scenarios</h2>

<h3>Scenario 1: Spirometry Quality Assessment</h3>
<p>A 55-year-old patient referred for spirometry produces the following results over three attempts: Trial 1 FVC 3.42 L, FEV1 2.10 L; Trial 2 FVC 3.48 L, FEV1 2.08 L; Trial 3 FVC 2.89 L, FEV1 1.95 L. The flow-volume loop for Trial 3 shows an early termination of effort.</p>
<p><strong>What to consider:</strong> You need to evaluate these trials against ATS/ERS acceptability and repeatability criteria. Trial 3 likely fails acceptability due to early termination. Trials 1 and 2 are within 150 mL of each other for both FVC and FEV1, meeting repeatability criteria. The best FVC and best FEV1 may come from different trials. This type of quality assessment question is fundamental to the CPFT.</p>

<h3>Scenario 2: Interpreting Flow-Volume Loops</h3>
<p>A patient's flow-volume loop shows a concave (scooped-out) appearance on the expiratory limb, with reduced FEV1/FVC ratio (62%) and a normal FVC. The post-bronchodilator study shows a 15% improvement in FEV1.</p>
<p><strong>What to consider:</strong> This pattern is consistent with obstructive disease. The concave expiratory limb is characteristic of airflow obstruction seen in asthma and COPD. The significant bronchodilator response (greater than 12% and 200 mL improvement) suggests a reversible component, more consistent with asthma. The exam tests your ability to recognize these patterns and understand their clinical significance.</p>

<h3>Scenario 3: Equipment Calibration</h3>
<p>During your morning calibration check, the 3-liter syringe produces readings of 2.85 L, 2.88 L, and 2.82 L on three consecutive injections into the spirometer. The laboratory temperature is 22 degrees Celsius and the barometric pressure is 760 mmHg.</p>
<p><strong>What to consider:</strong> ATS/ERS standards require calibration verification to be within plus or minus 3% of the known volume (3.0 L), which means acceptable readings range from 2.91 to 3.09 L. All three readings fall below this threshold, indicating the spirometer fails calibration and should not be used for patient testing until the issue is resolved. You should troubleshoot for leaks, sensor degradation, or incorrect BTPS correction factors.</p>

<h2>CPFT Exam Strategies</h2>
<ol>
  <li><strong>Know ATS/ERS standards cold.</strong> Acceptability criteria, repeatability criteria, and quality grades are the backbone of pulmonary function testing and are heavily tested on the CPFT.</li>
  <li><strong>Master flow-volume loop patterns.</strong> Be able to identify normal, obstructive, restrictive, mixed, upper airway obstruction (fixed and variable), and effort-dependent patterns on sight.</li>
  <li><strong>Understand BTPS correction.</strong> Know why we correct to Body Temperature, Pressure, Saturated conditions and how temperature and barometric pressure affect volumes.</li>
  <li><strong>Study quality assurance systematically.</strong> Calibration verification, bio-QC, linearity checks, and leak testing are procedural topics that yield easy points if you know the standards.</li>
  <li><strong>Practice calculations.</strong> Percent predicted values, bronchodilator response calculations, and basic PFT interpretation formulas appear regularly.</li>
  <li><strong>Do not neglect DLCO.</strong> Many candidates focus heavily on spirometry and underprepare for diffusion capacity testing. Know the technique, quality criteria, and clinical correlations.</li>
</ol>

<h2>How to Prepare for the CPFT</h2>
<ul>
  <li>Review ATS/ERS guidelines for spirometry, lung volumes, and diffusion capacity testing</li>
  <li>Practice reading and interpreting flow-volume loops and volume-time curves</li>
  <li>Study equipment maintenance, calibration, and quality assurance procedures</li>
  <li>Review pulmonary pathophysiology as it relates to PFT patterns</li>
  <li>Take CPFT-specific practice exams to identify knowledge gaps</li>
</ul>
<p>Check out our <a href="/cheat-sheets/">CPFT cheat sheets</a> for quick-reference guides to spirometry standards, flow-volume loop patterns, and calibration procedures. Visit our <a href="/topics/">topic resources</a> for in-depth coverage of pulmonary function testing.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/cpft-exam-tips">CPFT Exam Tips and Strategies</a> &mdash; PFT-specific study advice</li>
  <li><a href="/mistakes/common-cpft-exam-mistakes">Common CPFT Exam Mistakes</a> &mdash; Frequently missed concepts</li>
  <li><a href="/exam-day/cpft-exam-day-walkthrough">CPFT Exam Day Walkthrough</a> &mdash; What to expect at your testing appointment</li>
  <li><a href="/glossary/cpft-glossary">CPFT Glossary</a> &mdash; Pulmonary function terminology</li>
</ul>

<h2>Start Your CPFT Prep</h2>
<p>NBRCprep provides targeted CPFT practice exams and question banks covering spirometry, lung volumes, diffusion capacity, and quality assurance. Our questions are written to match the clinical focus of the actual CPFT exam. <a href="/pricing">View our plans</a> and start preparing for your CPFT credential today.</p>
`,
  },
  {
    slug: 'nbrc-rpft-exam-guide',
    type: 'GUIDE' as const,
    title: 'NBRC RPFT Exam Guide: Registered Pulmonary Function Technologist',
    description: 'Complete guide to the NBRC RPFT Exam. Learn about advanced PFT content, exam format, cardiopulmonary exercise testing, and strategies to earn your RPFT credential.',
    division: 'rpft',
    readTime: '16 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What Is the NBRC RPFT Exam?</h2>
<p>The Registered Pulmonary Function Technologist (RPFT) Examination is the advanced-level pulmonary function credentialing exam from the National Board for Respiratory Care (NBRC). While the <a href="/guides/nbrc-cpft-exam-guide">CPFT</a> covers foundational PFT competencies, the RPFT tests expertise in advanced diagnostic procedures including cardiopulmonary exercise testing, advanced lung mechanics, bronchial provocation, and complex test interpretation. The RPFT credential signifies that a technologist is qualified to perform the full scope of pulmonary function diagnostics and contribute to clinical decision-making at the highest level.</p>
<p>The RPFT is considered the gold standard credential for pulmonary function professionals. It is increasingly required or preferred by leading pulmonary function laboratories, academic medical centers, and research institutions.</p>

<h2>RPFT Exam Format and Structure</h2>

<table>
  <thead>
    <tr><th>Detail</th><th>Specification</th></tr>
  </thead>
  <tbody>
    <tr><td>Total Questions</td><td>130</td></tr>
    <tr><td>Scored Questions</td><td>115</td></tr>
    <tr><td>Pretest (Unscored) Questions</td><td>15</td></tr>
    <tr><td>Time Limit</td><td>3 hours</td></tr>
    <tr><td>Question Format</td><td>Multiple-choice (4 answer options)</td></tr>
    <tr><td>Scoring</td><td>Pass/Fail (scaled scoring)</td></tr>
    <tr><td>Delivery</td><td>Computer-based at Pearson VUE</td></tr>
  </tbody>
</table>

<p>The RPFT consists of <strong>130 multiple-choice questions</strong>, of which <strong>115 are scored</strong> and <strong>15 are unscored pretest items</strong>. You have <strong>3 hours</strong> to complete the exam, giving you approximately 1 minute and 23 seconds per question. As with all NBRC exams, pretest questions are indistinguishable from scored questions.</p>

<h2>RPFT Content Domains</h2>
<p>The RPFT exam covers everything on the CPFT plus advanced diagnostic procedures, complex interpretation, and research-level knowledge of pulmonary physiology.</p>

<h3>Advanced Spirometry and Lung Mechanics</h3>
<ul>
  <li>Maximal voluntary ventilation (MVV) and its clinical applications</li>
  <li>Respiratory resistance measurements (impulse oscillometry, body plethysmography)</li>
  <li>Airway resistance (Raw) and specific airway conductance (sGaw)</li>
  <li>Compliance measurements (static and dynamic)</li>
  <li>Pressure-volume curves and their clinical significance</li>
  <li>Advanced flow-volume loop analysis including upper airway obstruction patterns</li>
  <li>Respiratory muscle strength testing (MIP, MEP, SNIP)</li>
</ul>

<h3>Cardiopulmonary Exercise Testing (CPET)</h3>
<ul>
  <li>Indications and contraindications for exercise testing</li>
  <li>Equipment setup: cycle ergometer vs. treadmill, metabolic cart calibration</li>
  <li>Exercise protocols (Bruce, modified Bruce, incremental cycle)</li>
  <li>Measured variables: VO2, VCO2, VE, HR, BP, SpO2, and their significance</li>
  <li>Calculated values: VO2max/peak, anaerobic threshold (AT/VAT), respiratory exchange ratio (RER)</li>
  <li>Ventilatory equivalents for O2 and CO2 (VE/VO2, VE/VCO2)</li>
  <li>Dead space ventilation (VD/VT) during exercise</li>
  <li>Differentiating cardiac vs. pulmonary vs. deconditioning causes of exercise limitation</li>
  <li>Exercise-induced bronchospasm testing</li>
  <li>Pre-operative exercise assessment for lung resection</li>
  <li>Six-minute walk test (6MWT) protocols and interpretation</li>
</ul>

<h3>Bronchial Provocation Testing</h3>
<ul>
  <li>Methacholine challenge: protocol, dosing, interpretation</li>
  <li>Exercise challenge testing</li>
  <li>Eucapnic voluntary hyperventilation (EVH)</li>
  <li>Mannitol challenge</li>
  <li>Determining PC20 and PD20 values</li>
  <li>Safety precautions and contraindications</li>
  <li>Interpreting positive and negative provocation results</li>
</ul>

<h3>Advanced Diffusion and Gas Exchange</h3>
<ul>
  <li>DLCO adjustments for hemoglobin, carboxyhemoglobin, and altitude</li>
  <li>DLCO/VA (KCO) and its clinical significance</li>
  <li>Factors affecting diffusion capacity in health and disease</li>
  <li>Distinguishing between reduced DLCO causes (emphysema vs. ILD vs. pulmonary vascular disease)</li>
  <li>Alveolar-arterial oxygen gradient calculation and interpretation</li>
</ul>

<h3>Advanced Lung Volume Assessment</h3>
<ul>
  <li>Discrepancies between plethysmographic and gas dilution volumes and their clinical meaning</li>
  <li>Air trapping assessment</li>
  <li>Thoracic gas volume measurement techniques and troubleshooting</li>
  <li>Complex restrictive vs. obstructive vs. mixed pattern interpretation</li>
</ul>

<h3>Special Testing</h3>
<ul>
  <li>High-altitude simulation testing (HAST)</li>
  <li>Exhaled nitric oxide (FeNO) measurement and interpretation</li>
  <li>Shunt studies</li>
  <li>Metabolic studies (indirect calorimetry): REE, RQ, and nutritional assessment</li>
  <li>Pre- and post-operative pulmonary function assessment</li>
  <li>Disability and impairment evaluation using PFT data</li>
</ul>

<h3>Quality Management and Research</h3>
<ul>
  <li>Advanced quality assurance programs for the PFT laboratory</li>
  <li>Statistical concepts in PFT interpretation (LLN, z-scores, GLI reference equations)</li>
  <li>Proficiency testing and accreditation standards</li>
  <li>Laboratory management and workflow optimization</li>
  <li>Research methodology and study design as it relates to PFT</li>
</ul>

<h2>RPFT Scoring</h2>
<p>The RPFT exam uses <strong>scaled scoring</strong> with a pass/fail outcome. The NBRC uses scaled scores to account for variations in exam difficulty. No specific percentage or cut score is published. Comprehensive preparation across all content domains is the most reliable path to passing.</p>

<h2>Sample RPFT Clinical Scenarios</h2>

<h3>Scenario 1: Cardiopulmonary Exercise Test Interpretation</h3>
<p>A 58-year-old patient with unexplained dyspnea on exertion undergoes a maximal incremental cycle ergometry CPET. Results show a peak VO2 of 14.2 mL/kg/min (62% predicted), early anaerobic threshold at 40% of predicted VO2max, heart rate reserve of 2 bpm at peak exercise, flat oxygen pulse response, and no significant desaturation. The VE/VCO2 slope is normal.</p>
<p><strong>What to consider:</strong> The low peak VO2 with early anaerobic threshold, exhausted heart rate reserve, and flat oxygen pulse suggests a <strong>cardiac limitation</strong> to exercise. A pulmonary limitation would typically show ventilatory reserve depletion, increased VE/VCO2, or desaturation. Deconditioning alone would not produce a flat oxygen pulse or exhausted heart rate reserve at such low work rates. The RPFT exam heavily tests your ability to differentiate these patterns.</p>

<h3>Scenario 2: Bronchial Provocation Testing</h3>
<p>A 32-year-old woman with intermittent cough and chest tightness, particularly after exercise, is referred for methacholine challenge testing. Baseline spirometry is normal (FEV1 98% predicted). After the 4 mg/mL concentration of methacholine, FEV1 has fallen by 22% from baseline. The patient reports mild chest tightness and audible wheezing is present.</p>
<p><strong>What to consider:</strong> A 20% or greater decline in FEV1 from baseline defines a positive methacholine challenge. The PC20 (provocation concentration causing a 20% decline) in this case is between the previous concentration and 4 mg/mL. This result supports a diagnosis of airway hyperresponsiveness consistent with asthma. You must know when to stop the test, administer bronchodilator, and calculate the PC20 by interpolation. Safety protocols during provocation testing are critical knowledge for the RPFT.</p>

<h3>Scenario 3: Complex PFT Interpretation</h3>
<p>A 65-year-old former smoker presents with progressive dyspnea. PFT results show: FEV1 52% predicted, FVC 78% predicted, FEV1/FVC 50%, TLC by plethysmography 128% predicted, TLC by helium dilution 95% predicted, RV 215% predicted, DLCO 38% predicted. Post-bronchodilator FEV1 improves by 5%.</p>
<p><strong>What to consider:</strong> This case shows severe airflow obstruction (low FEV1/FVC) with significant air trapping (elevated RV, elevated TLC by plethysmography). The discrepancy between plethysmographic TLC (128%) and helium dilution TLC (95%) indicates poorly ventilated lung compartments that helium cannot reach, consistent with severe emphysema with bullous disease. The markedly reduced DLCO further supports emphysema. The poor bronchodilator response suggests fixed obstruction. This type of integrative interpretation is central to the RPFT exam.</p>

<h2>RPFT Exam Strategies</h2>
<ol>
  <li><strong>Master CPET interpretation.</strong> Cardiopulmonary exercise testing is the area that most distinguishes the RPFT from the CPFT. Understand how to differentiate cardiac, pulmonary, and deconditioning limitations using CPET data.</li>
  <li><strong>Know bronchial provocation inside and out.</strong> Methacholine challenge protocols, safety criteria, PC20 calculation, and clinical interpretation are heavily weighted on the RPFT.</li>
  <li><strong>Practice integrative interpretation.</strong> The RPFT tests your ability to synthesize spirometry, lung volumes, DLCO, and clinical data into a coherent interpretation. Study cases that combine multiple test results.</li>
  <li><strong>Understand the physics and physiology.</strong> The RPFT expects a deeper understanding of why tests work, not just how to perform them. Know the principles behind plethysmography, gas dilution, and diffusion measurement.</li>
  <li><strong>Study reference equations and statistical interpretation.</strong> GLI reference equations, z-scores, and the lower limit of normal (LLN) vs. fixed ratio debate are important RPFT topics.</li>
  <li><strong>Review special testing procedures.</strong> High-altitude simulation, FeNO, indirect calorimetry, and shunt studies may appear on the exam. Even if you have limited clinical experience with these, understand the principles.</li>
</ol>

<h2>CPFT vs. RPFT: Key Differences</h2>
<table>
  <thead>
    <tr><th>Feature</th><th>CPFT</th><th>RPFT</th></tr>
  </thead>
  <tbody>
    <tr><td>Level</td><td>Entry-level</td><td>Advanced</td></tr>
    <tr><td>Questions</td><td>100 (85 scored)</td><td>130 (115 scored)</td></tr>
    <tr><td>Time</td><td>2 hours</td><td>3 hours</td></tr>
    <tr><td>CPET</td><td>Not covered</td><td>Heavily tested</td></tr>
    <tr><td>Bronchial Provocation</td><td>Basic awareness</td><td>In-depth</td></tr>
    <tr><td>Lung Mechanics</td><td>Basic</td><td>Advanced (resistance, compliance)</td></tr>
    <tr><td>Research/Statistics</td><td>Minimal</td><td>Included</td></tr>
    <tr><td>Interpretation Depth</td><td>Pattern recognition</td><td>Integrative clinical interpretation</td></tr>
  </tbody>
</table>

<h2>How to Prepare for the RPFT</h2>
<ul>
  <li>Master all CPFT content first &mdash; the RPFT builds upon foundational PFT knowledge</li>
  <li>Study cardiopulmonary exercise testing in depth, including all measured and calculated variables</li>
  <li>Review bronchial provocation testing protocols, safety procedures, and interpretation</li>
  <li>Practice interpreting complex PFT cases that integrate multiple test modalities</li>
  <li>Study advanced lung mechanics (resistance, compliance, oscillometry)</li>
  <li>Review statistical concepts relevant to PFT reference values and quality assurance</li>
  <li>Take RPFT-specific practice exams to identify and address knowledge gaps</li>
</ul>
<p>Our <a href="/cheat-sheets/">RPFT cheat sheets</a> cover CPET interpretation, bronchial provocation protocols, advanced PFT patterns, and more. Explore our <a href="/topics/">topic resources</a> for comprehensive coverage of advanced pulmonary function testing.</p>

<h2>Additional Resources</h2>
<ul>
  <li><a href="/tips/rpft-exam-tips">RPFT Exam Tips and Strategies</a> &mdash; Advanced PFT study advice</li>
  <li><a href="/mistakes/common-rpft-exam-mistakes">Common RPFT Exam Mistakes</a> &mdash; Complex topics candidates miss</li>
  <li><a href="/exam-day/rpft-exam-day-walkthrough">RPFT Exam Day Walkthrough</a> &mdash; What to expect at your testing appointment</li>
  <li><a href="/glossary/rpft-glossary">RPFT Glossary</a> &mdash; Advanced pulmonary function terminology</li>
</ul>

<h2>Start Your RPFT Prep</h2>
<p>NBRCprep offers comprehensive RPFT practice exams covering cardiopulmonary exercise testing, bronchial provocation, advanced interpretation, and all RPFT content domains. Our questions are developed by experienced pulmonary function professionals. <a href="/pricing">View our plans</a> and start preparing for your RPFT credential today.</p>
`,
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
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
