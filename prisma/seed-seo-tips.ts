import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pages = [
  {
    slug: 'tmc-exam-tips',
    type: 'TIPS' as const,
    title: 'TMC Exam Tips and Strategies',
    description: 'Proven strategies for the TMC exam: time management for 160 questions in 3 hours, how to approach recall vs. application items, and content areas to prioritize.',
    division: 'tmc',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>TMC Exam Tips and Strategies</h2>
<p>The Therapist Multiple-Choice (TMC) Examination is your first NBRC credential exam and the gateway to the RRT. With 160 questions in 3 hours - 140 scored and 20 unscored pretest items mixed in - you need a disciplined approach. These tips go beyond "study harder" and give you specific, actionable strategies to maximize your score.</p>

<h3>Master Your Time Budget</h3>
<p>At 160 questions in 180 minutes, you have roughly <strong>1 minute and 7 seconds per question</strong>. That sounds tight, but most recall-level questions take 30-45 seconds, which banks time for application and analysis items. Use this to your advantage:</p>
<ul>
<li><strong>Set checkpoint goals:</strong> Aim to reach question 40 by the 45-minute mark, question 80 by 90 minutes, and question 120 by 135 minutes. This leaves a full 45 minutes for the final 40 questions and review.</li>
<li><strong>Flag and move:</strong> If a question takes more than 90 seconds and you're stuck, flag it and move on. Spending 3 minutes on one question steals time from two others you might answer correctly.</li>
<li><strong>Don't change answers without reason:</strong> Research consistently shows that first instincts are correct more often than changed answers - unless you find concrete evidence in another question that changes your reasoning.</li>
</ul>

<h3>Attack Question Stems Strategically</h3>
<p>The TMC mixes three cognitive levels: recall, application, and analysis. Each demands a different approach:</p>
<ol>
<li><strong>Recall items:</strong> You either know it or you don't. Spend no more than 30 seconds. If unsure, eliminate one or two options and make your best choice.</li>
<li><strong>Application items:</strong> These present a clinical scenario and ask what to do. Read the last sentence first to understand what's being asked, then scan the scenario for relevant data (ABGs, vitals, ventilator settings).</li>
<li><strong>Analysis items:</strong> These require you to interpret data and make clinical decisions. Write down key values on your scratch paper - especially ABG values and ventilator parameters - before looking at answer choices.</li>
</ol>

<h3>Prioritize High-Yield Content Areas</h3>
<p>Not all content areas carry equal weight on the TMC. Focus your final review on these heavy hitters:</p>
<ul>
<li><strong>Patient assessment and monitoring (25-30% of exam):</strong> ABG interpretation, hemodynamic values, chest X-ray findings, and physical assessment findings. Know the normal ranges cold.</li>
<li><strong>Airway management:</strong> Intubation indications, tube sizes, securing techniques, complications, and extubation criteria. This appears in multiple content areas.</li>
<li><strong>Mechanical ventilation:</strong> Mode selection, initial settings, troubleshooting alarms, weaning parameters (RSBI, NIF, VT), and patient-ventilator asynchrony.</li>
<li><strong>Pharmacology:</strong> Bronchodilator dosages, mucolytics, surfactant therapy, and medication side effects. Create a drug table with generic names, brand names, dosages, and routes.</li>
</ul>

<h3>Eliminate Wrong Answers Systematically</h3>
<p>On the TMC, wrong answers often fall into predictable patterns:</p>
<ul>
<li><strong>Extreme answers</strong> (always, never, only) are usually wrong unless they involve safety absolutes.</li>
<li><strong>Look for the "assess first" option.</strong> When a question asks what to do next, gathering more information (auscultate, check the circuit, review the chart) is often correct before making a change.</li>
<li><strong>If two answers are opposites,</strong> one of them is likely correct. Focus your analysis on choosing between the two.</li>
<li><strong>Watch for scope-of-practice traps:</strong> An answer that has you diagnosing conditions or prescribing medications independently is almost certainly wrong.</li>
</ul>

<h3>TMC-Specific Pitfalls to Avoid</h3>
<ul>
<li><strong>Don't overthink recall questions.</strong> If they ask for the normal PaO2 range, they want the textbook answer - not a nuanced clinical discussion.</li>
<li><strong>Remember the 20 pretest questions are unidentifiable.</strong> You cannot tell which questions are scored and which are pretest. Treat every question as if it counts.</li>
<li><strong>Use the Pearson VUE calculator</strong> for any math - never do dosage calculations or A-a gradient math in your head during the exam.</li>
</ul>

<h3>Continue Your Preparation</h3>
<p>Pair these strategies with targeted practice to build speed and confidence:</p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">Complete TMC Exam Guide</a> - full breakdown of content areas and exam format</li>
<li><a href="/cheat-sheets/tmc-cheat-sheet">TMC Cheat Sheet</a> - quick-reference formulas and normal values</li>
<li><a href="/mistakes/common-tmc-exam-mistakes">Common TMC Exam Mistakes</a> - pitfalls other candidates fall into</li>
<li><a href="/exam-day/tmc-exam-day-walkthrough">TMC Exam Day Walkthrough</a> - what to expect at Pearson VUE</li>
<li><a href="/pricing">Start Practicing with NBRCprep</a> - timed practice exams that mirror the real TMC</li>
</ul>`,
  },
  {
    slug: 'nps-exam-tips',
    type: 'TIPS' as const,
    title: 'NPS Exam Tips and Strategies',
    description: 'Expert strategies for the NBRC NPS (Neonatal/Pediatric Specialty) exam: how to navigate 22 clinical simulations in 4 hours and prioritize neonatal content.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>NPS Exam Tips and Strategies</h2>
<p>The Neonatal/Pediatric Specialty (NPS) exam uses the Clinical Simulation Exam (CSE) format - 22 clinical simulation problems over 4 hours. Unlike multiple-choice exams, the CSE presents evolving patient scenarios where your choices determine what information you see next. This format rewards clinical thinking over memorization, and it requires a fundamentally different preparation strategy.</p>

<h3>Understand the CSE Format Before Exam Day</h3>
<p>Each of the 22 problems presents a neonatal or pediatric patient scenario that unfolds across multiple sections. At each decision point, you choose from a list of options (assessments, treatments, tests). Key rules to internalize:</p>
<ul>
<li><strong>You cannot go back.</strong> Once you move to the next section, previous choices are locked. This makes careful reading at each stage critical.</li>
<li><strong>Not all options are beneficial.</strong> Some choices are harmful, some are neutral, and some are optimal. You are scored on selecting the right actions AND avoiding harmful ones.</li>
<li><strong>Order matters less than selection.</strong> Focus on choosing the correct interventions rather than agonizing over the perfect sequence.</li>
</ul>

<h3>Time Management for 22 Simulations</h3>
<p>With 4 hours for 22 problems, you have approximately <strong>10 minutes and 54 seconds per simulation</strong>. However, simulation complexity varies widely:</p>
<ul>
<li><strong>Budget 8 minutes for straightforward cases</strong> (stable patient needing routine assessment changes) and 13-14 minutes for complex cases (critically ill neonate requiring multiple interventions).</li>
<li><strong>Track your pace:</strong> You should complete roughly 5-6 simulations per hour. If you've finished only 4 by the one-hour mark, pick up your pace on less complex cases.</li>
<li><strong>Don't rush the opening section.</strong> The initial patient presentation contains critical information (gestational age, Apgar scores, birth weight, maternal history) that affects every subsequent decision.</li>
</ul>

<h3>Clinical Reasoning in CSE Format</h3>
<p>The CSE tests whether you think like a competent clinician, not whether you memorized a textbook. Apply these reasoning frameworks:</p>
<ol>
<li><strong>Assess before treating.</strong> At every decision point, consider whether you have enough information. If the scenario hasn't provided recent vital signs or blood gases, selecting assessment options first is usually correct.</li>
<li><strong>Match interventions to severity.</strong> A 32-week premature infant in mild respiratory distress needs CPAP, not immediate intubation. Escalate care proportionally to clinical findings.</li>
<li><strong>Think about what can go wrong.</strong> After initiating a treatment, the simulation often tests whether you monitor appropriately. Always select relevant follow-up assessments.</li>
</ol>

<h3>High-Yield NPS Content Areas</h3>
<p>The NPS exam heavily emphasizes certain topics. Prioritize these in your final weeks of study:</p>
<ul>
<li><strong>Neonatal resuscitation (NRP algorithm):</strong> Know the steps cold - initial steps, PPV, intubation criteria, chest compressions, and epinephrine. Multiple simulations will test this sequence.</li>
<li><strong>Surfactant therapy:</strong> Indications, dosing, administration technique (INSURE vs. LISA), and complications. Know when to redose.</li>
<li><strong>Congenital anomalies:</strong> Diaphragmatic hernia (bag-mask contraindicated), choanal atresia, tracheoesophageal fistula, and meconium aspiration management.</li>
<li><strong>Pediatric airway emergencies:</strong> Croup vs. epiglottitis management, foreign body aspiration, and status asthmaticus escalation.</li>
<li><strong>High-frequency ventilation:</strong> HFOV and HFJV indications, initial settings, and adjustments based on blood gases and chest X-ray findings.</li>
</ul>

<h3>Avoid These CSE-Specific Mistakes</h3>
<ul>
<li><strong>Don't select every option "just to be safe."</strong> Choosing harmful or unnecessary interventions actively lowers your score. Be deliberate.</li>
<li><strong>Don't skip assessment options to save time.</strong> In real clinical practice and on the CSE, gathering information before acting is a hallmark of competence.</li>
<li><strong>Read the entire option list before selecting.</strong> Options are not always in logical order, and the best choice may be at the bottom of the list.</li>
<li><strong>Watch the patient's gestational age closely.</strong> Management differs significantly between a 24-week and a 36-week neonate. Don't apply full-term protocols to extremely premature infants.</li>
</ul>

<h3>Continue Your Preparation</h3>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">Complete NPS Exam Guide</a> - detailed breakdown of the CSE format and content areas</li>
<li><a href="/cheat-sheets/nps-cheat-sheet">NPS Cheat Sheet</a> - neonatal normal values and key algorithms</li>
<li><a href="/mistakes/common-nps-exam-mistakes">Common NPS Exam Mistakes</a> - CSE-specific pitfalls to avoid</li>
<li><a href="/exam-day/nps-exam-day-walkthrough">NPS Exam Day Walkthrough</a> - what to expect at Pearson VUE for a CSE</li>
<li><a href="/pricing">Practice with NBRCprep</a> - build clinical reasoning with realistic practice simulations</li>
</ul>`,
  },
  {
    slug: 'accs-exam-tips',
    type: 'TIPS' as const,
    title: 'ACCS Exam Tips and Strategies',
    description: 'Targeted strategies for the NBRC ACCS exam: master 22 adult critical care simulations in 4 hours with proven clinical reasoning approaches and time budgets.',
    division: 'accs',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>ACCS Exam Tips and Strategies</h2>
<p>The Adult Critical Care Specialty (ACCS) exam challenges you with 22 clinical simulation problems over 4 hours, all using the NBRC's Clinical Simulation Exam (CSE) format. Each simulation places you in an evolving adult critical care scenario where your decisions shape the patient's trajectory. Success requires sharp clinical reasoning, efficient time use, and familiarity with the CSE mechanics.</p>

<h3>CSE Mechanics You Must Know</h3>
<p>Before diving into content strategies, understand how the CSE works - it is fundamentally different from multiple-choice exams:</p>
<ul>
<li><strong>Sections unfold sequentially.</strong> Each simulation has multiple sections. You select actions from a list, view the results, then proceed. You cannot revisit previous sections.</li>
<li><strong>Scoring rewards precision.</strong> You earn points for selecting correct/beneficial actions and lose points for selecting harmful or unnecessary ones. "Select everything" is a losing strategy.</li>
<li><strong>Some options are traps.</strong> Interventions that sound reasonable but are inappropriate for the specific clinical context (e.g., bronchodilator for a patient with pulmonary edema) will lower your score.</li>
</ul>

<h3>Allocate Time Wisely Across 22 Simulations</h3>
<p>Four hours for 22 simulations gives you about <strong>10 minutes and 54 seconds each</strong>. Manage that time strategically:</p>
<ul>
<li><strong>Quick-scan the opening scenario.</strong> Identify the patient's primary problem in the first 30 seconds: Is this a ventilator management case, a hemodynamic instability case, an airway emergency, or a weaning scenario?</li>
<li><strong>Spend more time on information gathering.</strong> The opening sections, where you choose assessments and gather data, deserve 60% of your time on each simulation. Rushing through assessment leads to poor treatment decisions.</li>
<li><strong>Set mental checkpoints:</strong> Simulations 1-6 by hour one, 7-11 by hour two, 12-17 by hour three, 18-22 in the final hour.</li>
</ul>

<h3>Clinical Reasoning Framework for Adult Critical Care</h3>
<p>Apply a consistent decision-making framework to every simulation:</p>
<ol>
<li><strong>Identify the primary problem.</strong> Is the patient hypoxemic, hypercapnic, hemodynamically unstable, or in respiratory failure? This determines your intervention pathway.</li>
<li><strong>Assess before you intervene.</strong> If the scenario hasn't given you ABGs, a chest X-ray, or current ventilator graphics, request those before making ventilator changes or initiating new therapies.</li>
<li><strong>Intervene proportionally.</strong> A patient with mild hypoxemia on a ventilator needs a small FiO2 or PEEP increase, not a mode change. Match the size of your intervention to the severity of the problem.</li>
<li><strong>Reassess after every intervention.</strong> After making changes, select options to verify the intervention worked (repeat ABG, check compliance, monitor hemodynamics).</li>
</ol>

<h3>High-Yield ACCS Content to Master</h3>
<p>These topics appear most frequently across the 22 simulations:</p>
<ul>
<li><strong>Mechanical ventilation management:</strong> Mode selection (AC vs. SIMV vs. PSV), initial settings by pathology (ARDS low tidal volume, COPD with auto-PEEP), troubleshooting high pressures, and interpreting ventilator graphics.</li>
<li><strong>ARDS management:</strong> ARDSNet protocol, prone positioning criteria, optimal PEEP titration, recruitment maneuvers, and paralytic use. Expect at least 2-3 simulations involving ARDS.</li>
<li><strong>Hemodynamic monitoring:</strong> Interpret PA catheter data, differentiate cardiogenic vs. non-cardiogenic pulmonary edema, and understand the relationship between preload, afterload, and contractility.</li>
<li><strong>Ventilator weaning:</strong> SBT protocols, weaning parameters (RSBI less than 105, NIF better than -20 cmH2O, VT greater than 5 mL/kg), and recognizing weaning failure.</li>
<li><strong>Non-invasive ventilation:</strong> CPAP vs. BiPAP indications, contraindications (facial trauma, inability to protect airway), and when to escalate to intubation.</li>
</ul>

<h3>Critical ACCS Mistakes to Avoid</h3>
<ul>
<li><strong>Don't select invasive procedures prematurely.</strong> Intubation when NIV is appropriate, or arterial line placement when SpO2 monitoring is sufficient, will cost you points.</li>
<li><strong>Don't ignore the patient's underlying condition.</strong> A COPD patient on a ventilator has different PaCO2 targets than an otherwise healthy trauma patient. Normalizing CO2 in a chronic retainer can be harmful.</li>
<li><strong>Don't forget infection control and safety.</strong> Options like hand hygiene, PPE, or verifying tube placement may seem mundane but are scored.</li>
<li><strong>Read lab values and vitals carefully.</strong> A subtle trend (gradually rising plateau pressures, slowly dropping urine output) is often the key to the correct answer in the next section.</li>
</ul>

<h3>Continue Your Preparation</h3>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">Complete ACCS Exam Guide</a> - full breakdown of CSE format and critical care content areas</li>
<li><a href="/cheat-sheets/accs-cheat-sheet">ACCS Cheat Sheet</a> - hemodynamic values, ventilator settings, and ABG interpretation at a glance</li>
<li><a href="/mistakes/common-accs-exam-mistakes">Common ACCS Exam Mistakes</a> - the most frequent errors on the ACCS CSE</li>
<li><a href="/exam-day/accs-exam-day-walkthrough">ACCS Exam Day Walkthrough</a> - what to expect at Pearson VUE for a CSE</li>
<li><a href="/pricing">Practice with NBRCprep</a> - realistic adult critical care simulations to sharpen your skills</li>
</ul>`,
  },
  {
    slug: 'sds-exam-tips',
    type: 'TIPS' as const,
    title: 'SDS Exam Tips and Strategies',
    description: 'Strategic tips for the NBRC SDS exam: manage 130 questions in 3 hours, master sleep disorder content priorities, and use proven answer-elimination techniques.',
    division: 'sds',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>SDS Exam Tips and Strategies</h2>
<p>The Sleep Disorders Specialty (SDS) exam tests your knowledge of polysomnography, sleep disorder diagnosis, and treatment with 130 questions in 3 hours. Of those, 115 are scored and 15 are unscored pretest items that you cannot identify. This exam demands strong technical knowledge of sleep study procedures combined with clinical interpretation skills.</p>

<h3>Time Management: 130 Questions in 180 Minutes</h3>
<p>You have approximately <strong>1 minute and 23 seconds per question</strong>. This is more generous than the TMC, but SDS questions often require interpreting polysomnographic data, which takes more time. Plan accordingly:</p>
<ul>
<li><strong>Budget extra time for data interpretation questions.</strong> Questions showing epoch screenshots, montage tracings, or scoring scenarios take 2-3 minutes. Offset this by moving quickly through knowledge-recall questions.</li>
<li><strong>Checkpoint targets:</strong> Question 33 by 45 minutes, question 65 by 90 minutes, question 98 by 135 minutes. This leaves 45 minutes for the final 32 questions and review.</li>
<li><strong>Flag pattern-recognition questions.</strong> If a tracing or epoch looks unfamiliar, flag it and return after completing straightforward items. Sometimes later questions provide context that helps with earlier ones.</li>
</ul>

<h3>Master Sleep Stage Scoring Rules</h3>
<p>Epoch-by-epoch sleep staging appears heavily on the SDS exam. Commit these rules to automatic recall:</p>
<ul>
<li><strong>Know the AASM scoring manual criteria</strong> for N1, N2, N3, and REM. Focus on the specific EEG, EOG, and EMG criteria that differentiate each stage.</li>
<li><strong>K-complexes and sleep spindles define N2.</strong> If either is present in an epoch, it is N2 unless criteria for N3 or REM are also met.</li>
<li><strong>N3 requires 20% or more slow-wave activity</strong> in the epoch (0.5-2 Hz, greater than 75 microvolts peak-to-peak, measured over the frontal derivation).</li>
<li><strong>REM requires all three:</strong> low-amplitude mixed-frequency EEG, rapid eye movements, and low chin EMG tone. Missing any one means it is not REM.</li>
</ul>

<h3>Respiratory Event Scoring Priorities</h3>
<p>Expect multiple questions on scoring apneas, hypopneas, and RERAs:</p>
<ul>
<li><strong>Apnea:</strong> 90% or greater reduction in airflow for at least 10 seconds. Know the difference between obstructive (effort present), central (no effort), and mixed (starts central, becomes obstructive).</li>
<li><strong>Hypopnea:</strong> 30% or greater reduction in airflow for at least 10 seconds with 3% or greater desaturation or an arousal. The scoring criteria version (3% vs. 4%) may be specified in the question.</li>
<li><strong>RERA:</strong> A sequence of breaths with increasing respiratory effort leading to an arousal that does not meet apnea or hypopnea criteria.</li>
<li><strong>Cheyne-Stokes pattern:</strong> At least 3 consecutive central apneas/hypopneas with a crescendo-decrescendo breathing pattern and a cycle length of at least 40 seconds.</li>
</ul>

<h3>Equipment and Technical Knowledge</h3>
<p>The SDS exam tests practical polysomnography skills extensively:</p>
<ul>
<li><strong>Electrode placement:</strong> Know the 10-20 system positions used in PSG (F4, C4, O2, M1, M2, E1, E2, chin EMG). Understand backup electrode strategies.</li>
<li><strong>Troubleshooting artifacts:</strong> 60 Hz interference, electrode pop, sweat artifact, and ECG artifact in EEG channels. Know how to identify each and the corrective action.</li>
<li><strong>Calibration procedures:</strong> Biocalibration steps, impedance requirements (below 5 kOhm), and what to do when channels show unacceptable signals.</li>
<li><strong>PAP titration protocols:</strong> Starting pressures, uptitration criteria, split-night study rules (at least 2 hours of diagnostic time, AHI of 40 or greater for early split, at least 3 hours remaining for titration).</li>
</ul>

<h3>SDS-Specific Test-Taking Strategies</h3>
<ul>
<li><strong>When in doubt about event type, look at effort channels.</strong> Thoracic and abdominal effort bands distinguish obstructive from central events - this is the most common distinguishing feature tested.</li>
<li><strong>Patient safety questions have clear correct answers.</strong> If a question involves a patient emergency during a sleep study (seizure, cardiac event, severe desaturation), the answer involves patient safety first, study integrity second.</li>
<li><strong>AASM guidelines are the standard.</strong> If your clinical experience conflicts with AASM manual recommendations, go with the AASM standard on this exam.</li>
</ul>

<h3>Continue Your Preparation</h3>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">Complete SDS Exam Guide</a> - comprehensive overview of SDS content areas and exam structure</li>
<li><a href="/cheat-sheets/sds-cheat-sheet">SDS Cheat Sheet</a> - sleep staging criteria, event scoring rules, and PAP protocols</li>
<li><a href="/mistakes/common-sds-exam-mistakes">Common SDS Exam Mistakes</a> - scoring and interpretation errors to avoid</li>
<li><a href="/exam-day/sds-exam-day-walkthrough">SDS Exam Day Walkthrough</a> - Pearson VUE experience for the SDS</li>
<li><a href="/pricing">Start Practicing with NBRCprep</a> - SDS practice exams with detailed explanations</li>
</ul>`,
  },
  {
    slug: 'cpft-exam-tips',
    type: 'TIPS' as const,
    title: 'CPFT Exam Tips and Strategies',
    description: 'Actionable strategies for the NBRC CPFT exam: manage 100 questions in 2 hours, master spirometry interpretation, and focus on the highest-yield PFT content areas.',
    division: 'cpft',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>CPFT Exam Tips and Strategies</h2>
<p>The Certified Pulmonary Function Technologist (CPFT) exam has 100 questions in 2 hours - 85 scored and 15 unscored pretest items. This is a tighter time budget than it might seem, especially when questions require interpreting flow-volume loops and spirometry data. Here are specific strategies to maximize your performance.</p>

<h3>Time Budget: 100 Questions in 120 Minutes</h3>
<p>At <strong>1 minute and 12 seconds per question</strong>, the CPFT gives you slightly more time per question than the TMC but fewer total questions. Use this structure:</p>
<ul>
<li><strong>Rapid-fire recall questions in under 45 seconds.</strong> Equipment calibration procedures, normal values, and contraindication lists are either known or not - don't deliberate.</li>
<li><strong>Allow 2 minutes for interpretation questions.</strong> When you see spirometry data, a flow-volume loop, or a set of lung volumes, take the time to systematically analyze the values before looking at the answer choices.</li>
<li><strong>Checkpoint pace:</strong> Question 25 by 30 minutes, question 50 by 60 minutes, question 75 by 90 minutes. The final 30 minutes handles the last 25 questions plus review.</li>
</ul>

<h3>Spirometry Interpretation Framework</h3>
<p>Spirometry interpretation questions are the backbone of the CPFT. Use this systematic approach every time:</p>
<ol>
<li><strong>Check FEV1/FVC ratio first.</strong> Below the lower limit of normal (LLN) indicates obstruction. Normal or above normal with reduced FVC suggests restriction.</li>
<li><strong>Assess severity using FEV1 percent predicted:</strong> Mild (above 70%), moderate (60-69%), moderately severe (50-59%), severe (35-49%), very severe (below 35%). Memorize these breakpoints.</li>
<li><strong>Look at the flow-volume loop shape.</strong> A scooped-out expiratory limb confirms obstruction. A small but normally shaped loop suggests restriction. A flattened inspiratory or expiratory limb suggests upper airway obstruction.</li>
<li><strong>Evaluate bronchodilator response:</strong> A significant response is a 12% AND 200 mL improvement in FEV1 or FVC from baseline.</li>
</ol>

<h3>High-Yield CPFT Content Areas</h3>
<p>Focus your study time on these heavily tested topics:</p>
<ul>
<li><strong>Quality control and calibration:</strong> Daily volume calibration (3-liter syringe, within 3.5% or 3%), linearity checks, biologic controls, and leak testing procedures. Know ATS/ERS acceptability and repeatability criteria.</li>
<li><strong>Test acceptability criteria:</strong> Good starts (back-extrapolated volume below 5% of FVC or 150 mL), adequate effort duration (at least 6 seconds for adults or 3 seconds for children, with a plateau), and freedom from artifacts (cough, glottic closure, leak).</li>
<li><strong>Lung volume measurement:</strong> Understand the differences between body plethysmography, nitrogen washout, and helium dilution - when each is preferred and what errors each is susceptible to.</li>
<li><strong>Diffusion capacity (DLCO):</strong> Single-breath technique, correction for hemoglobin, adjustments for altitude, and common causes of increased or decreased DLCO.</li>
<li><strong>Infection control:</strong> Filter usage, equipment decontamination between patients, and contraindications to testing (active hemoptysis, pneumothorax, recent surgery).</li>
</ul>

<h3>CPFT-Specific Strategies</h3>
<ul>
<li><strong>When interpreting data, always compare to predicted values.</strong> Raw numbers without context are meaningless - a FEV1 of 2.5 L could be normal for a small woman or severely reduced for a tall man.</li>
<li><strong>Patient coaching questions are common.</strong> Know proper instructions for spirometry (blast it out and keep going), MVV (breathe as hard and fast as you can), and DLCO (breathe in all the way, hold for 10 seconds, breathe out smoothly).</li>
<li><strong>ATS/ERS guidelines are your reference standard.</strong> When in doubt, the answer that aligns with current ATS/ERS technical standards is correct.</li>
<li><strong>Don't confuse restrictive patterns with restriction.</strong> A reduced FVC with normal FEV1/FVC on spirometry alone is a "restrictive pattern" - confirming true restriction requires lung volume measurement.</li>
</ul>

<h3>Continue Your Preparation</h3>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">Complete CPFT Exam Guide</a> - full content outline and exam structure breakdown</li>
<li><a href="/cheat-sheets/cpft-cheat-sheet">CPFT Cheat Sheet</a> - normal PFT values, severity classifications, and calibration specs</li>
<li><a href="/mistakes/common-cpft-exam-mistakes">Common CPFT Exam Mistakes</a> - interpretation and procedural errors to watch for</li>
<li><a href="/exam-day/cpft-exam-day-walkthrough">CPFT Exam Day Walkthrough</a> - what to expect at Pearson VUE</li>
<li><a href="/pricing">Start Practicing with NBRCprep</a> - CPFT practice exams with spirometry interpretation</li>
</ul>`,
  },
  {
    slug: 'rpft-exam-tips',
    type: 'TIPS' as const,
    title: 'RPFT Exam Tips and Strategies',
    description: 'Advanced strategies for the NBRC RPFT exam: tackle 130 questions in 3 hours with systematic approaches to complex PFT interpretation and lab management topics.',
    division: 'rpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>RPFT Exam Tips and Strategies</h2>
<p>The Registered Pulmonary Function Technologist (RPFT) exam is the advanced PFT credential with 130 questions in 3 hours - 115 scored and 15 unscored pretest items. It covers everything on the CPFT plus advanced testing procedures, complex interpretation, and laboratory management. This exam rewards deep understanding over surface-level memorization.</p>

<h3>Time Management: 130 Questions in 180 Minutes</h3>
<p>At approximately <strong>1 minute and 23 seconds per question</strong>, the RPFT time budget mirrors the SDS exam. However, RPFT questions often involve multi-step data interpretation:</p>
<ul>
<li><strong>Categorize questions immediately.</strong> Recall questions (equipment specs, normal values) take 30-45 seconds. Application questions (correcting DLCO for hemoglobin) take 60-90 seconds. Complex interpretation questions (integrating spirometry, lung volumes, and DLCO to identify a pattern) may need the full 2-3 minutes.</li>
<li><strong>Pace targets:</strong> Question 33 by 45 minutes, question 65 by 90 minutes, question 98 by 135 minutes, with 45 minutes for the final 32 plus review.</li>
<li><strong>Use the scratch paper.</strong> For questions requiring calculations (predicted values, DLCO corrections, shunt fraction), write out the formula and solve step by step. Mental math errors are the most preventable way to lose points.</li>
</ul>

<h3>Advanced Interpretation Strategies</h3>
<p>The RPFT tests complex pattern recognition that goes beyond basic obstruction vs. restriction:</p>
<ul>
<li><strong>Mixed obstructive-restrictive patterns:</strong> Reduced FEV1/FVC ratio AND reduced TLC. Spirometry alone cannot confirm this - you need lung volumes. When both are present, report both.</li>
<li><strong>Upper airway obstruction:</strong> Know the three patterns - variable extrathoracic (flattened inspiratory loop), variable intrathoracic (flattened expiratory loop), and fixed (both flattened). Calculate FEF50/FIF50 ratio when available.</li>
<li><strong>Gas trapping vs. hyperinflation:</strong> An elevated RV/TLC ratio indicates gas trapping. Elevated TLC indicates hyperinflation. Both commonly occur together in emphysema but can appear independently.</li>
<li><strong>DLCO interpretation in context:</strong> A low DLCO with obstruction suggests emphysema. A low DLCO with restriction suggests interstitial lung disease. A low DLCO with normal spirometry and lung volumes suggests pulmonary vascular disease or anemia.</li>
</ul>

<h3>High-Yield RPFT-Specific Content</h3>
<p>These topics distinguish the RPFT from the CPFT and appear heavily on the exam:</p>
<ul>
<li><strong>Exercise testing:</strong> Cardiopulmonary exercise testing (CPET) protocols, interpretation of VO2 max, anaerobic threshold, ventilatory equivalents, dead space to tidal volume ratio (VD/VT), and exercise-induced bronchospasm protocols.</li>
<li><strong>Bronchial challenge testing:</strong> Methacholine challenge procedure, PC20 calculation and interpretation, contraindications (FEV1 below 60% predicted or below 1.5 L), and medication withholding schedules.</li>
<li><strong>Blood gas analysis and quality control:</strong> Tonometry, Levy-Jennings charts, Westgard rules (1-2s, 2-2s, R-4s, 4-1s, 10x), proficiency testing requirements, and pre-analytical errors.</li>
<li><strong>Laboratory management:</strong> Staff competency assessment, procedure manual development, accreditation requirements, cost analysis, and quality improvement processes. These administrative questions are unique to the RPFT.</li>
<li><strong>Advanced lung volume techniques:</strong> Understanding the limitations of each method - plethysmography overestimates in severe obstruction (panting frequency effect), helium dilution underestimates with trapped gas, nitrogen washout requires complete washout verification.</li>
</ul>

<h3>RPFT Calculation Tips</h3>
<p>The RPFT includes more calculation-based questions than the CPFT:</p>
<ul>
<li><strong>DLCO corrections:</strong> Know the hemoglobin correction formula and the altitude correction. Practice these calculations until they're automatic.</li>
<li><strong>Predicted value equations:</strong> You won't need to memorize regression equations, but understand how age, height, sex, and ethnicity affect predicted values and which reference equations are recommended (GLI-2012 for spirometry).</li>
<li><strong>Shunt calculation:</strong> Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2). Know how to calculate oxygen content and the assumptions involved.</li>
<li><strong>Use dimensional analysis for unit conversions.</strong> BTPS to ATPS corrections, mL to L conversions, and pressure unit conversions appear regularly.</li>
</ul>

<h3>Continue Your Preparation</h3>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">Complete RPFT Exam Guide</a> - advanced PFT content areas and exam structure</li>
<li><a href="/cheat-sheets/rpft-cheat-sheet">RPFT Cheat Sheet</a> - advanced formulas, Westgard rules, and exercise testing values</li>
<li><a href="/mistakes/common-rpft-exam-mistakes">Common RPFT Exam Mistakes</a> - advanced interpretation and calculation pitfalls</li>
<li><a href="/exam-day/rpft-exam-day-walkthrough">RPFT Exam Day Walkthrough</a> - what to expect at Pearson VUE</li>
<li><a href="/pricing">Start Practicing with NBRCprep</a> - RPFT-level practice exams with complex PFT scenarios</li>
</ul>`,
  },
  {
    slug: 'nbrc-exam-day-tips',
    type: 'TIPS' as const,
    title: 'NBRC Exam Day Tips',
    description: 'Practical exam day tips for any NBRC exam at Pearson VUE: what to bring, arrival timing, break strategies, and how to manage test anxiety for peak performance.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>NBRC Exam Day Tips</h2>
<p>You've studied for weeks or months. Now it's exam day. Whether you're sitting for the TMC, a specialty exam, or a PFT credential, how you handle the logistics and mental game on exam day directly affects your performance. These tips apply to every NBRC exam taken at Pearson VUE testing centers.</p>

<h3>Before You Leave Home</h3>
<p>Set yourself up for success before you even walk into the testing center:</p>
<ul>
<li><strong>Sleep matters more than last-minute cramming.</strong> Research consistently shows that sleep deprivation impairs cognitive performance more than incomplete studying. Get 7-8 hours the night before. If you don't know it by the night before, a 2 AM study session won't fix it.</li>
<li><strong>Eat a balanced meal</strong> with protein and complex carbohydrates 1-2 hours before your appointment. Avoid heavy meals that cause sluggishness and skip excessive caffeine if you're not a regular coffee drinker - anxiety plus unfamiliar caffeine equals shaky hands and racing thoughts.</li>
<li><strong>Prepare your IDs the night before.</strong> You need two forms of identification, with the primary being a government-issued photo ID. Your name must match your NBRC registration exactly. If there's any discrepancy, contact Pearson VUE before exam day.</li>
<li><strong>Know your route and parking.</strong> Do a dry run to the testing center if possible, or check traffic patterns for your appointment time. Arrive 30 minutes early - late arrivals may be turned away and forfeit their exam fee.</li>
</ul>

<h3>At the Testing Center</h3>
<p>Pearson VUE procedures are standardized but can feel intimidating if you're not prepared:</p>
<ul>
<li><strong>You'll store everything in a locker.</strong> Your phone, watch, wallet, notes, and any personal items go in a locker. You cannot access them during the exam or during breaks unless you end your exam session.</li>
<li><strong>You'll receive a dry-erase notepad or scratch paper.</strong> Use it. Write down key formulas, normal values, or mnemonics immediately when you sit down - before starting the exam. This "brain dump" frees up working memory for actual questions.</li>
<li><strong>The testing room has cameras and monitoring.</strong> This is normal. Focus on your screen and ignore other test-takers and any ambient noise. If something is disruptive, raise your hand for the proctor.</li>
<li><strong>Read the tutorial carefully.</strong> Even if you've taken computer-based exams before, the tutorial time does not count against your exam time. Use it to familiarize yourself with the interface, especially the flag/review features.</li>
</ul>

<h3>During the Exam: Mental Strategies</h3>
<p>Your psychological state during the exam affects your performance as much as your knowledge:</p>
<ul>
<li><strong>Use the first 5 questions as a warm-up.</strong> Don't panic if the first few questions feel hard - they often do because your brain is still shifting into test mode. Answer them, flag any you're unsure about, and move forward.</li>
<li><strong>Manage anxiety with controlled breathing.</strong> If you feel overwhelmed, close your eyes and take 4 slow breaths (4 seconds in, 4 seconds hold, 4 seconds out). This activates your parasympathetic nervous system and reduces the cortisol spike that impairs recall.</li>
<li><strong>Reframe difficult questions.</strong> Instead of "I don't know this," think "Let me eliminate what I know is wrong." Shifting from recall mode to analytical mode engages different cognitive pathways.</li>
<li><strong>Don't track your perceived performance.</strong> Candidates routinely feel they are failing while actually passing. The pretest items (which don't count) are often the hardest questions because the NBRC is evaluating them for future use. Feeling uncertain is normal.</li>
</ul>

<h3>Break Strategy</h3>
<p>Most NBRC exams allow optional breaks, but break time counts against your exam time:</p>
<ul>
<li><strong>Plan one strategic break</strong> at the halfway point if your exam is 3+ hours. Stand up, stretch, use the restroom, and take a few deep breaths. Two minutes of physical movement restores focus.</li>
<li><strong>Don't take a break when frustrated.</strong> If you're struggling with a question, flag it and continue - don't use a break as an escape. Break when you feel good, not when you feel stuck.</li>
<li><strong>Hydrate during your break.</strong> Dehydration causes fatigue and reduced concentration. Have water available outside the testing room.</li>
</ul>

<h3>End-of-Exam Review Strategy</h3>
<p>If you finish with time remaining, use it wisely:</p>
<ul>
<li><strong>Only review flagged questions.</strong> Do not re-read every question - this leads to second-guessing correct answers.</li>
<li><strong>Only change an answer if you have a specific reason</strong> - such as realizing you misread the question or finding contradictory information in another question. "This doesn't feel right" is not a reason to change.</li>
<li><strong>Check for unmarked questions.</strong> Make sure every question has an answer selected. There is no penalty for guessing on NBRC exams.</li>
</ul>

<h3>Related Resources</h3>
<ul>
<li><a href="/exam-day/tmc-exam-day-walkthrough">TMC Exam Day Walkthrough</a> - TMC-specific exam day details</li>
<li><a href="/mistakes/common-tmc-exam-mistakes">Common Exam Mistakes</a> - avoid the most frequent exam pitfalls</li>
<li><a href="/pricing">Practice with NBRCprep</a> - build confidence with timed practice exams before the real thing</li>
</ul>`,
  },
  {
    slug: 'nbrc-study-tips',
    type: 'TIPS' as const,
    title: 'NBRC Study Tips and Strategies',
    description: 'Evidence-based study strategies for any NBRC exam: spaced repetition schedules, active recall techniques, study group formats, and how to build a 6-8 week study plan.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>NBRC Study Tips and Strategies</h2>
<p>Studying for an NBRC credential exam requires more than reading a textbook cover to cover. Whether you're preparing for the TMC, a specialty credential, or a PFT exam, the study strategies that actually work are backed by cognitive science research. Here's how to study smarter, not just harder.</p>

<h3>Build a Structured Study Plan</h3>
<p>The biggest mistake candidates make is studying without a plan. A structured approach prevents both wasted time and panic:</p>
<ul>
<li><strong>Map out 6-8 weeks of dedicated study time.</strong> Shorter timelines lead to cramming, which produces short-term recall but poor retention. Longer timelines risk losing momentum.</li>
<li><strong>Divide your content into weekly themes.</strong> Week 1: Patient Assessment. Week 2: Airway Management. Week 3: Mechanical Ventilation. And so on. Dedicate each week to mastering one content area rather than skipping between topics randomly.</li>
<li><strong>Front-load your weakest areas.</strong> Take a diagnostic practice exam in week 1 to identify your weakest content areas. Study those first while your motivation is highest. Save your strongest areas for the final weeks when fatigue sets in.</li>
<li><strong>Plan for review weeks.</strong> Dedicate weeks 7-8 exclusively to practice exams and reviewing missed questions. No new content - only reinforcement and gap-filling.</li>
</ul>

<h3>Use Active Recall, Not Passive Review</h3>
<p>Reading notes and highlighting textbooks feel productive but produce weak learning. Active recall - forcing your brain to retrieve information - builds durable memory:</p>
<ul>
<li><strong>Practice questions are your primary study tool.</strong> For every hour of content review, spend at least 30 minutes answering practice questions on that topic. The act of retrieving answers strengthens neural pathways far more than re-reading.</li>
<li><strong>Use the "close the book" test.</strong> After studying a topic, close your materials and write down everything you can remember. The gaps you discover are exactly what you need to restudy.</li>
<li><strong>Teach the material to someone else.</strong> Explaining a concept out loud - to a study partner, a family member, or even an empty room - forces you to organize your knowledge and reveals gaps you didn't know existed.</li>
<li><strong>Create your own questions.</strong> Writing practice questions about a topic requires deeper processing than answering them. For each chapter you study, write 5-10 questions you think could appear on the exam.</li>
</ul>

<h3>Apply Spaced Repetition</h3>
<p>Spaced repetition is the most powerful learning technique cognitive science has identified. Instead of studying a topic once and moving on, revisit it at increasing intervals:</p>
<ul>
<li><strong>Day 1:</strong> Learn the material.</li>
<li><strong>Day 3:</strong> Review it briefly (15-20 minutes).</li>
<li><strong>Day 7:</strong> Review again.</li>
<li><strong>Day 14:</strong> Final review before the topic cycles back in practice exams.</li>
<li><strong>Use flashcards strategically.</strong> Digital flashcard apps with built-in spaced repetition (Anki, Quizlet) automate the timing. Create cards for formulas, normal values, drug dosages, and disease-specific ventilator strategies.</li>
</ul>

<h3>Practice Exam Strategy</h3>
<p>Practice exams are not just assessment tools - they are the single most effective study method when used correctly:</p>
<ul>
<li><strong>Simulate real conditions.</strong> Take practice exams timed, in a quiet room, without notes. The closer your practice conditions match the real exam, the less anxiety you'll feel on test day.</li>
<li><strong>Review every question - right and wrong.</strong> For correct answers, confirm your reasoning was sound (you might have gotten it right for the wrong reason). For wrong answers, write down why each distractor was wrong and why the correct answer was right.</li>
<li><strong>Track your performance by content area.</strong> Don't just look at your overall score. Break down your accuracy by topic. If you consistently score below 70% in pharmacology, that's where your next study session should focus.</li>
<li><strong>Take at least 3 full-length practice exams</strong> in the final two weeks. Space them 3-4 days apart to allow time for targeted review between each one.</li>
</ul>

<h3>Study Group Best Practices</h3>
<p>Study groups can be highly effective or a complete waste of time, depending on structure:</p>
<ul>
<li><strong>Limit groups to 3-4 people.</strong> Larger groups devolve into social time. Smaller groups maintain focus and ensure everyone participates.</li>
<li><strong>Assign teaching roles.</strong> Each person prepares a 15-minute presentation on a topic. Teaching forces deep processing and benefits the entire group.</li>
<li><strong>Quiz each other using practice questions.</strong> Take turns asking questions and explaining the reasoning behind correct answers. Debate is productive - it surfaces misunderstandings.</li>
<li><strong>Set ground rules:</strong> phones away, specific start/end times, prepared materials required. A study group without structure is just a group.</li>
</ul>

<h3>Manage Study Fatigue</h3>
<ul>
<li><strong>Study in 45-50 minute blocks</strong> with 10-minute breaks. Sustained attention degrades after roughly 50 minutes, and pushing through produces diminishing returns.</li>
<li><strong>Exercise during study periods.</strong> Even a 20-minute walk improves memory consolidation and reduces cortisol. Study, walk, review - this cycle outperforms 3 straight hours at a desk.</li>
<li><strong>Take one full day off per week.</strong> Your brain consolidates learning during rest. Studying 7 days a week leads to burnout and plateau, not faster progress.</li>
</ul>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a> - content areas and format for the TMC</li>
<li><a href="/guides/nbrc-nps-exam-guide">NPS Exam Guide</a> - CSE format details for the NPS</li>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a> - CSE format details for the ACCS</li>
<li><a href="/cheat-sheets/tmc-cheat-sheet">Cheat Sheets</a> - quick-reference materials for every NBRC exam</li>
<li><a href="/pricing">Start Practicing with NBRCprep</a> - timed practice exams with detailed answer explanations</li>
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
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
