import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pages = [
  {
    slug: 'tmc-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'TMC Exam Day Walkthrough',
    description: 'Step-by-step TMC exam day guide covering Pearson VUE check-in, time management for 160 questions in 3 hours, and what to expect start to finish.',
    division: 'tmc',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your TMC Exam Day: A Complete Walkthrough</h2>
<p>Exam day for the Therapist Multiple-Choice (TMC) examination is a milestone in your respiratory therapy career. Knowing exactly what to expect removes unnecessary stress so you can focus entirely on the 160 questions ahead of you. This guide walks you through every phase of the day, from what you pack the night before to the moment you see your preliminary results on screen.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; your name must match your NBRC registration exactly. A driver&rsquo;s license, passport, or state ID card all work. If your name has changed, update it with the NBRC before your appointment.</li>
<li><strong>Confirmation email or appointment number</strong> &mdash; not strictly required for entry, but helpful if any issues arise at the front desk.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>Cell phones, smartwatches, and all electronic devices</li>
<li>Notes, textbooks, or study materials of any kind</li>
<li>Food or drinks (these stay in the locker area)</li>
<li>Hats, scarves, or bulky outerwear (you may be asked to remove them)</li>
</ul>
<p>The testing center provides a secure locker for your personal belongings. Arrive with as little as possible to speed up the check-in process.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Plan to arrive <strong>30 minutes early</strong>. Late arrivals risk forfeiting their appointment. When you walk in, you will check in at the front desk, present your photo ID, and have your photo taken. You will also provide a digital signature and may be asked to turn out your pockets. The proctor will then escort you to your assigned workstation.</p>

<h3>The Testing Environment</h3>
<p>Each workstation has a computer monitor, mouse, and keyboard in a partitioned cubicle. The room is monitored by cameras and proctors at all times. You will receive a small dry-erase board and marker (or laminated scratch paper) for calculations and notes. If you fill it up, raise your hand and the proctor will swap it out.</p>
<p>Noise-canceling headphones or earplugs are usually available upon request. The room temperature can vary, so dress in layers you can adjust comfortably.</p>

<h3>Question Format and Computer Interface</h3>
<p>The TMC exam consists of <strong>160 multiple-choice questions</strong> delivered over <strong>3 hours</strong>. Each question presents a clinical scenario followed by four answer choices. The interface allows you to flag questions for review, navigate forward and backward, and see how many questions remain. A countdown timer is always visible in the corner of the screen.</p>
<p>Of the 160 questions, some are pretest items that do not count toward your score. You will not know which ones they are, so treat every question as if it counts.</p>

<h3>Time Management Strategy</h3>
<p>With 160 questions in 180 minutes, you have roughly <strong>1 minute and 7 seconds per question</strong>. Here is a practical pacing plan:</p>
<ol>
<li><strong>First pass (0&ndash;120 minutes):</strong> Work through all 160 questions at a steady pace. Spend no more than 60&ndash;75 seconds per question. If a question stumps you, flag it and move on immediately.</li>
<li><strong>Second pass (120&ndash;160 minutes):</strong> Return to flagged questions. With fresh eyes, many answers become clearer. Narrow down choices and commit to an answer.</li>
<li><strong>Final review (160&ndash;180 minutes):</strong> Scan for any unanswered questions. Review answers you felt uncertain about, but avoid changing answers unless you have a clear reason.</li>
</ol>
<p><strong>Target pace:</strong> You should be at question 80 by the 90-minute mark. If you are behind, pick up speed on straightforward recall questions to bank time for complex clinical scenarios.</p>

<h3>Handling Difficult Questions</h3>
<p>When you encounter a tough question, resist the urge to dwell. Flag it and move on. Spending four minutes on one question steals time from three others you might answer correctly. On your second pass, eliminate obviously wrong answers first, then choose the best remaining option. Never leave a question blank &mdash; there is no penalty for guessing.</p>

<h3>Break Policy</h3>
<p>You are permitted to take unscheduled breaks during the TMC exam, but the clock does <strong>not</strong> stop. Any break time comes directly out of your 3 hours. If you need a restroom break, raise your hand, and the proctor will escort you through the sign-out and sign-in process. Keep breaks short and strategic &mdash; ideally after you finish your first pass.</p>

<h3>Managing Exam Anxiety</h3>
<p>Feeling nervous is completely normal. Use the first few questions to settle into a rhythm. Take slow, deep breaths if you feel tension building. Remember that you have prepared for this and the exam is designed so that competent therapists pass. If anxiety spikes mid-exam, close your eyes for ten seconds, take three deep breaths, and refocus on the next question &mdash; not the last one.</p>

<h3>What Happens After You Finish</h3>
<p>When you submit your exam, the computer will display a short survey about your testing experience. After completing it, you will see a <strong>preliminary pass/fail result on screen</strong>. This is not your official score, but it is highly reliable. The proctor will hand you a printed score report as you leave the testing center. Official results from the NBRC, including your scaled score, typically arrive within a few business days via your NBRC online account.</p>
<p>The NBRC uses scaled scoring to ensure fairness across different exam forms. Your scaled score reflects your performance relative to the difficulty of the questions you received.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
<li><a href="/tips/tmc-exam-tips">TMC Exam Tips</a></li>
<li><a href="/mistakes/common-tmc-exam-mistakes">Common TMC Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
</ul>`,
  },
  {
    slug: 'nps-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'NPS Exam Day Walkthrough',
    description: 'Complete NPS exam day guide for the Clinical Simulation Exam. Learn what to expect with 22 CSE problems over 4 hours at your Pearson VUE center.',
    division: 'nps',
    readTime: '9 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your NPS Exam Day: A Complete Walkthrough</h2>
<p>The Neonatal/Pediatric Specialty (NPS) exam uses the Clinical Simulation Examination (CSE) format, which is fundamentally different from a traditional multiple-choice test. Instead of selecting from four answer choices, you will work through <strong>22 branching clinical simulation problems</strong> over <strong>4 hours</strong>. Understanding how this format works before you arrive at the testing center is essential for performing your best.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; the name must exactly match your NBRC registration. Acceptable forms include a driver&rsquo;s license, passport, or state-issued ID card.</li>
<li><strong>Your appointment confirmation</strong> &mdash; optional but useful in case of any check-in discrepancies.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>Electronic devices including phones, tablets, and smartwatches</li>
<li>Study materials, notes, or reference cards</li>
<li>Food, beverages, or gum</li>
<li>Jackets with large pockets or hooded sweatshirts (may be flagged during check-in)</li>
</ul>
<p>All personal items go into a secure locker provided by the testing center. Travel light to make check-in faster.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Arrive at least <strong>30 minutes before</strong> your scheduled appointment. You will present your ID, have your photograph taken, provide a digital signature, and may be asked to empty your pockets. The proctor will then guide you to your testing station.</p>

<h3>The Testing Environment</h3>
<p>You will sit at a computer workstation in a quiet, monitored room. A dry-erase board or laminated scratch paper and a marker are provided for notes. Noise-canceling headphones or earplugs are available on request. The room is under constant video surveillance.</p>

<h3>Understanding the CSE Format</h3>
<p>The NPS Clinical Simulation Exam presents <strong>22 clinical simulation problems</strong>. Each problem describes a patient scenario &mdash; typically a neonate or pediatric patient &mdash; and asks you to manage the case through a series of branching sections. In each section, you are presented with a clinical situation and a list of possible actions. You select the actions you believe are appropriate, then the scenario advances based on your choices.</p>
<p><strong>Key differences from multiple-choice:</strong></p>
<ul>
<li>There is no single &ldquo;correct answer&rdquo; &mdash; you are scored on the quality and appropriateness of your clinical decisions across the entire simulation.</li>
<li>Ordering unnecessary or harmful interventions can <strong>reduce</strong> your score.</li>
<li>You cannot go back to a previous section once you advance within a problem.</li>
<li>You can, however, move between problems &mdash; you do not have to complete them in order.</li>
</ul>

<h3>Time Management Strategy</h3>
<p>With 22 problems in 240 minutes, you have approximately <strong>10 minutes and 54 seconds per problem</strong>. Here is how to structure your time:</p>
<ol>
<li><strong>Read the scenario carefully (1&ndash;2 minutes):</strong> Understand the patient&rsquo;s age, diagnosis, current status, and what is being asked of you before selecting any actions.</li>
<li><strong>Select actions deliberately (5&ndash;7 minutes per problem):</strong> Choose interventions that are clinically indicated. Avoid &ldquo;shotgunning&rdquo; &mdash; selecting every available option hurts your score.</li>
<li><strong>Move on decisively (do not exceed 12 minutes on any single problem):</strong> If a problem is consuming too much time, make your best clinical judgment and advance.</li>
</ol>
<p><strong>Checkpoint:</strong> By the 2-hour mark, you should have completed at least 11 problems. If you are behind, increase your pace on the remaining scenarios.</p>

<h3>Handling Difficult Simulations</h3>
<p>Some simulations will present unfamiliar clinical scenarios. When this happens, fall back on your foundational knowledge: assess the patient, identify the most life-threatening issue, and intervene accordingly. Do not select interventions you are unsure about just to &ldquo;do something&rdquo; &mdash; unnecessary actions are penalized. Select only what you would genuinely order in clinical practice.</p>

<h3>Break Policy</h3>
<p>Breaks are permitted but unscheduled, and the <strong>exam clock continues to run</strong>. You must sign out and sign back in with the proctor each time. Limit breaks to essential restroom stops, and time them between problems rather than in the middle of a simulation.</p>

<h3>Managing Exam Anxiety</h3>
<p>The CSE format can feel unfamiliar and unsettling, even for experienced clinicians. Remind yourself that you are demonstrating the clinical judgment you use every day. If anxiety builds, pause for a moment between problems. Take three slow breaths, relax your shoulders, and approach the next scenario fresh. Do not carry frustration from a difficult problem into the next one.</p>

<h3>What Happens After You Finish</h3>
<p>After submitting your exam, you will complete a brief post-exam survey. Unlike the TMC, the CSE does <strong>not</strong> provide an immediate on-screen pass/fail result. CSE scoring is more complex, and your official results will be available through your NBRC online account, typically within a few weeks. The NBRC uses scaled scoring to account for variation in exam difficulty across different forms.</p>
<p>Be patient with the results timeline. The wait can be stressful, but the scoring process is thorough and fair.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NBRC NPS Exam Guide</a></li>
<li><a href="/tips/nps-exam-tips">NPS Exam Tips</a></li>
<li><a href="/mistakes/common-nps-exam-mistakes">Common NPS Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
</ul>`,
  },
  {
    slug: 'accs-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'ACCS Exam Day Walkthrough',
    description: 'Complete ACCS exam day guide covering the Clinical Simulation Exam format with 22 problems over 4 hours, plus check-in and time management tips.',
    division: 'accs',
    readTime: '9 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your ACCS Exam Day: A Complete Walkthrough</h2>
<p>The Adult Critical Care Specialty (ACCS) exam tests your advanced clinical decision-making through the Clinical Simulation Examination (CSE) format. You will face <strong>22 clinical simulation problems</strong> over <strong>4 hours</strong>, each presenting a critically ill adult patient scenario that requires you to demonstrate sound respiratory care judgment. This walkthrough prepares you for every aspect of exam day.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; the name printed on your ID must match your NBRC registration exactly. Acceptable forms include a driver&rsquo;s license, passport, or state-issued ID card. If your name has changed since registration, contact the NBRC to update it before exam day.</li>
<li><strong>Appointment confirmation</strong> &mdash; your confirmation email or appointment number is not required but can help resolve any check-in issues quickly.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>All electronic devices &mdash; phones, smartwatches, fitness trackers, tablets</li>
<li>Notes, flashcards, textbooks, or any study materials</li>
<li>Food or beverages (store these in your locker)</li>
<li>Bulky clothing items that could conceal materials</li>
</ul>
<p>A secure locker will be assigned to you for personal belongings. Bring only your ID and car keys to simplify check-in.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Arrive <strong>30 minutes before</strong> your appointment time. Check-in involves presenting your photo ID, having your photo taken, providing a digital signature, and potentially a brief pocket check. The proctor will walk you to your workstation and log you in to begin.</p>

<h3>The Testing Environment</h3>
<p>Your workstation is a partitioned computer station in a quiet, climate-controlled room under continuous video and audio monitoring. You will receive a dry-erase board and marker for scratch work. If you need a replacement during the exam, raise your hand for the proctor. Earplugs or noise-canceling headphones are typically available on request.</p>

<h3>Understanding the CSE Format</h3>
<p>The ACCS CSE presents <strong>22 branching clinical simulations</strong>. Each simulation places you in a realistic adult critical care scenario &mdash; managing a ventilated patient, responding to an acute respiratory emergency, adjusting hemodynamic support, or similar situations. You will move through multiple sections within each problem, selecting appropriate clinical actions at each stage.</p>
<p><strong>Critical points about the CSE format:</strong></p>
<ul>
<li>You are scored on the appropriateness of your clinical decisions, not on selecting a single correct answer.</li>
<li>Selecting unnecessary or harmful interventions <strong>reduces</strong> your score &mdash; do not order tests or treatments that are not clinically indicated.</li>
<li>Once you advance past a section within a simulation, you cannot return to it.</li>
<li>You may navigate between different simulation problems freely.</li>
</ul>

<h3>Time Management Strategy</h3>
<p>You have 240 minutes for 22 problems, giving you roughly <strong>10 minutes and 54 seconds per simulation</strong>. Structure your approach:</p>
<ol>
<li><strong>Read the scenario thoroughly (1&ndash;2 minutes):</strong> Identify the patient&rsquo;s condition, current interventions, and what clinical decision is needed. Rushing through the scenario description leads to misguided actions.</li>
<li><strong>Select actions with purpose (5&ndash;7 minutes):</strong> Choose only interventions that are clinically appropriate for the situation. Think about what you would actually order at the bedside.</li>
<li><strong>Set a hard limit of 12 minutes per problem:</strong> If a simulation is consuming too much time, commit to your best judgment and move forward.</li>
</ol>
<p><strong>Pace check:</strong> At the 2-hour mark, you should have completed approximately 11 problems. Adjust your speed accordingly if you are ahead or behind.</p>

<h3>Handling Difficult Simulations</h3>
<p>The ACCS exam will include scenarios that push beyond your comfort zone. When facing an unfamiliar situation, rely on core critical care principles: prioritize airway, breathing, and circulation; address the most immediate threat first; and avoid ordering interventions whose indications you are unsure of. Selecting fewer, well-reasoned actions is better than selecting many uncertain ones.</p>

<h3>Break Policy</h3>
<p>You may take unscheduled breaks at any time, but the <strong>exam clock keeps running</strong>. Each break requires signing out and signing back in with the proctor, which takes several minutes. Plan breaks between simulation problems, not mid-scenario. One short restroom break around the halfway point is a reasonable strategy.</p>

<h3>Managing Exam Anxiety</h3>
<p>The CSE format tests the clinical judgment you already use in practice. If you feel overwhelmed, pause between simulations. Close your eyes, take three slow breaths, and reset mentally. Treat each new problem as a fresh start &mdash; do not let a difficult simulation affect your confidence on the next one. Trust your clinical experience and training.</p>

<h3>What Happens After You Finish</h3>
<p>After submitting the exam, you will complete a short survey about the testing experience. The CSE does <strong>not</strong> display an immediate pass/fail result on screen. Because CSE scoring involves complex evaluation of clinical decision pathways, your official results are processed by the NBRC and made available through your online account, typically within a few weeks. The NBRC uses scaled scoring to maintain consistency across exam forms.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">NBRC ACCS Exam Guide</a></li>
<li><a href="/tips/accs-exam-tips">ACCS Exam Tips</a></li>
<li><a href="/mistakes/common-accs-exam-mistakes">Common ACCS Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
</ul>`,
  },
  {
    slug: 'sds-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'SDS Exam Day Walkthrough',
    description: 'SDS exam day walkthrough covering check-in, time management for 130 questions in 3 hours, the Pearson VUE testing environment, and results delivery.',
    division: 'sds',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your SDS Exam Day: A Complete Walkthrough</h2>
<p>The Sleep Disorder Specialty (SDS) exam is a <strong>130-question multiple-choice</strong> examination administered over <strong>3 hours</strong> at a Pearson VUE testing center. Whether you are a seasoned sleep lab technologist or a respiratory therapist expanding into sleep medicine, this guide ensures you know exactly what to expect on exam day so you can focus on demonstrating your expertise.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; the name on your ID must match your NBRC registration exactly. Driver&rsquo;s license, passport, or state ID card are accepted.</li>
<li><strong>Appointment confirmation</strong> &mdash; not required for check-in but helpful to have as a backup reference.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>Cell phones, smartwatches, and any electronic devices</li>
<li>Study materials, notes, or reference guides</li>
<li>Food and drinks</li>
<li>Items that could be considered concealment &mdash; large coats, hats, or scarves</li>
</ul>
<p>Everything goes into a secure locker. The less you bring, the faster you get through check-in and into your seat.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Plan to arrive <strong>30 minutes before</strong> your appointment. The check-in process includes presenting your photo ID, having your photograph and digital signature captured, and a brief security screening. You may be asked to turn out your pockets or push up your sleeves. Once cleared, the proctor escorts you to your assigned workstation.</p>

<h3>The Testing Environment</h3>
<p>You will sit at an individual computer station separated by partitions. The room is quiet, climate-controlled, and under constant video and audio monitoring. You receive a dry-erase board and marker for any notes or calculations. Noise-canceling headphones or earplugs are available upon request. Dress in comfortable layers, as room temperatures can vary.</p>

<h3>Question Format and Computer Interface</h3>
<p>The SDS exam presents <strong>130 multiple-choice questions</strong>, each with four answer choices. Questions focus on polysomnography, scoring sleep stages, identifying sleep disorders, treatment modalities including PAP therapy, and patient education. The interface includes a flag button for marking questions to revisit, forward and backward navigation, and a visible countdown timer.</p>
<p>Some questions are unscored pretest items used for future exam development. You will not know which questions are pretest, so answer every question to the best of your ability.</p>

<h3>Time Management Strategy</h3>
<p>You have 180 minutes for 130 questions, which gives you approximately <strong>1 minute and 23 seconds per question</strong>. Use this pacing strategy:</p>
<ol>
<li><strong>First pass (0&ndash;100 minutes):</strong> Move through all 130 questions at a steady pace. Spend about 45&ndash;75 seconds on each question. If you are unsure, make your best selection, flag the question, and keep moving.</li>
<li><strong>Second pass (100&ndash;150 minutes):</strong> Return to flagged questions. Reread the stem carefully &mdash; you will often catch details you missed the first time. Eliminate wrong answers and commit.</li>
<li><strong>Final review (150&ndash;180 minutes):</strong> Check for any unanswered items and do a quick scan of questions you were least confident about.</li>
</ol>
<p><strong>Pace target:</strong> Aim to reach question 65 by the 90-minute mark. If you are falling behind, spend less time deliberating on questions where you can quickly identify the correct answer.</p>

<h3>Handling Difficult Questions</h3>
<p>When a question stumps you, do not freeze. Flag it immediately and move forward. On your return pass, use elimination &mdash; cross off answers you know are incorrect, and choose from what remains. Pay close attention to qualifiers like &ldquo;most appropriate,&rdquo; &ldquo;first action,&rdquo; or &ldquo;best intervention.&rdquo; There is no penalty for guessing, so never leave a question unanswered.</p>

<h3>Break Policy</h3>
<p>Unscheduled breaks are allowed, but the <strong>clock continues to run</strong>. Each break requires signing out with the proctor and signing back in, which takes a few minutes. If you need a break, take it strategically &mdash; after finishing your first pass is an ideal time. Keep it brief to preserve your testing time.</p>

<h3>Managing Exam Anxiety</h3>
<p>Exam-day nerves are normal. Settle in with the first few questions to find your rhythm. If anxiety builds, use a quick grounding technique: plant your feet on the floor, take three slow breaths, and refocus on the question in front of you. Avoid thinking about how many questions remain &mdash; just focus on the current one. You have studied sleep medicine and you know this material.</p>

<h3>What Happens After You Finish</h3>
<p>After completing all questions and a brief post-exam survey, you will receive a <strong>preliminary pass/fail result on the screen</strong>. The proctor will provide a printed score report as you exit. Official results with your scaled score will be posted to your NBRC online account within a few business days. The NBRC uses scaled scoring to ensure consistent standards regardless of which exam form you received.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">NBRC SDS Exam Guide</a></li>
<li><a href="/tips/sds-exam-tips">SDS Exam Tips</a></li>
<li><a href="/mistakes/common-sds-exam-mistakes">Common SDS Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
</ul>`,
  },
  {
    slug: 'cpft-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'CPFT Exam Day Walkthrough',
    description: 'CPFT exam day guide with check-in procedures, time management for 100 questions in 2 hours, Pearson VUE testing tips, and what to expect for results.',
    division: 'cpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your CPFT Exam Day: A Complete Walkthrough</h2>
<p>The Certified Pulmonary Function Technologist (CPFT) exam is a <strong>100-question multiple-choice</strong> examination with a <strong>2-hour time limit</strong>. It is the shorter of the two pulmonary function credentialing exams, but the tighter time window means efficient pacing is just as important. This guide walks you through everything you need to know for exam day at your Pearson VUE testing center.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; the name on your ID must be an exact match with your NBRC registration. Driver&rsquo;s license, passport, or state ID card are all acceptable.</li>
<li><strong>Appointment confirmation</strong> &mdash; having your confirmation email or number on hand is helpful but not mandatory.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>Phones, smartwatches, fitness trackers, or any electronic devices</li>
<li>Textbooks, notes, flashcards, or study aids</li>
<li>Snacks and beverages</li>
<li>Oversized clothing or accessories that could raise security concerns</li>
</ul>
<p>A secure locker is provided for all personal items. Keep it simple &mdash; ID and car keys are all you need to carry in.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Arrive <strong>30 minutes early</strong>. The check-in process includes ID verification, a photo, a digital signature, and a brief security check. The proctor will then escort you to your workstation and start your exam session.</p>

<h3>The Testing Environment</h3>
<p>You will be seated at a private computer workstation in a monitored, partitioned testing room. A dry-erase board and marker are provided for scratch work and calculations. Noise-canceling headphones or earplugs are available upon request. The room is under constant surveillance, so keep your behavior natural and focused on the screen.</p>

<h3>Question Format and Computer Interface</h3>
<p>The CPFT exam features <strong>100 multiple-choice questions</strong>, each with four answer choices. Content covers spirometry, lung volumes, diffusing capacity, quality assurance, infection control, and patient coaching. The on-screen interface lets you flag questions for later review, navigate freely between questions, and track your remaining time with a visible countdown clock.</p>
<p>Some questions are unscored pretest items being evaluated for future use. Since you cannot identify which ones they are, answer every question thoughtfully.</p>

<h3>Time Management Strategy</h3>
<p>With 100 questions in 120 minutes, you have <strong>1 minute and 12 seconds per question</strong>. The exam is fast-paced, so disciplined timing is critical:</p>
<ol>
<li><strong>First pass (0&ndash;80 minutes):</strong> Work steadily through all 100 questions. Spend 45&ndash;70 seconds per question. If you are stuck, select your best guess, flag the question, and move on without hesitation.</li>
<li><strong>Second pass (80&ndash;105 minutes):</strong> Revisit flagged questions with fresh perspective. Read each stem again carefully, eliminate wrong answers, and finalize your choice.</li>
<li><strong>Final review (105&ndash;120 minutes):</strong> Verify that no questions are left unanswered. Quickly review any remaining flagged items.</li>
</ol>
<p><strong>Pace target:</strong> You should be at question 50 by the 60-minute mark. If you are behind, move faster through questions you can answer confidently to free up time for harder ones.</p>

<h3>Handling Difficult Questions</h3>
<p>The 2-hour time limit means you cannot afford to get stuck. If a question is difficult, flag it immediately and come back later. When you return, focus on eliminating clearly wrong answers. Read the question stem for clues &mdash; qualifiers like &ldquo;most likely,&rdquo; &ldquo;initial step,&rdquo; or &ldquo;contraindicated&rdquo; are important. Never leave a question blank, as there is no guessing penalty.</p>

<h3>Break Policy</h3>
<p>Breaks are permitted but unscheduled, and the <strong>clock does not stop</strong>. With only 2 hours, taking a break is costly. If you absolutely must step out, do so quickly between your first and second pass. Each break requires signing out and back in with the proctor, adding overhead to the time you are away.</p>

<h3>Managing Exam Anxiety</h3>
<p>A shorter exam can actually increase anxiety because the time pressure feels more intense. Before you begin, take a few deep breaths while the tutorial screen loads. During the exam, if you feel tension building, pause for five seconds &mdash; close your eyes, breathe deeply, and resume. Focus on one question at a time rather than worrying about the total number remaining. You know this material from your training and clinical practice.</p>

<h3>What Happens After You Finish</h3>
<p>Once you submit your final answers and complete the post-exam survey, you will see a <strong>preliminary pass/fail result on screen</strong>. The proctor will hand you a printed score report on your way out. Your official scaled score will be available through your NBRC online account within a few business days. The NBRC applies scaled scoring to all exams to maintain consistent pass standards.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">NBRC CPFT Exam Guide</a></li>
<li><a href="/tips/cpft-exam-tips">CPFT Exam Tips</a></li>
<li><a href="/mistakes/common-cpft-exam-mistakes">Common CPFT Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
</ul>`,
  },
  {
    slug: 'rpft-exam-day-walkthrough',
    type: 'EXAM_DAY' as const,
    title: 'RPFT Exam Day Walkthrough',
    description: 'RPFT exam day walkthrough covering Pearson VUE check-in, time management for 130 questions in 3 hours, and what to expect for your results.',
    division: 'rpft',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Your RPFT Exam Day: A Complete Walkthrough</h2>
<p>The Registered Pulmonary Function Technologist (RPFT) exam is the advanced pulmonary function credentialing exam, consisting of <strong>130 multiple-choice questions</strong> over <strong>3 hours</strong>. It tests deeper knowledge of pulmonary diagnostics, interpretation, and advanced testing procedures. This guide takes you through every phase of exam day so you can walk into the Pearson VUE center with confidence.</p>

<h3>What to Bring</h3>
<ul>
<li><strong>Valid government-issued photo ID</strong> &mdash; the name must match your NBRC registration exactly. A driver&rsquo;s license, passport, or state-issued ID card will work. Verify this match well before exam day.</li>
<li><strong>Appointment confirmation</strong> &mdash; your confirmation email or number is not strictly required but is worth having on hand.</li>
</ul>

<h3>What NOT to Bring</h3>
<ul>
<li>Electronic devices of any kind &mdash; phones, smartwatches, tablets, calculators</li>
<li>Study materials, notes, or reference documents</li>
<li>Food and drinks</li>
<li>Hats, large coats, or items that might need additional security screening</li>
</ul>
<p>Personal items go into a secure locker. Minimize what you bring to keep the check-in process smooth and fast.</p>

<h3>Arriving at the Pearson VUE Testing Center</h3>
<p>Arrive at least <strong>30 minutes early</strong>. At the front desk, you will present your photo ID, have your photograph taken, provide a digital signature, and go through a brief security check. The proctor will then escort you to your testing station and launch your exam.</p>

<h3>The Testing Environment</h3>
<p>Each workstation is a computer with a monitor, keyboard, and mouse in a partitioned cubicle. The testing room is monitored by cameras and proctors at all times. You will receive a dry-erase board and marker for notes and calculations &mdash; raise your hand if you need a replacement during the exam. Noise-canceling headphones or earplugs are usually available. Dress in comfortable layers since room temperature can be unpredictable.</p>

<h3>Question Format and Computer Interface</h3>
<p>The RPFT exam presents <strong>130 multiple-choice questions</strong>, each with four answer choices. Content areas include advanced spirometry interpretation, cardiopulmonary exercise testing, bronchial provocation, lung volumes, diffusing capacity, blood gas analysis, quality control, and equipment troubleshooting. The on-screen interface lets you flag questions for review, move forward and backward freely, and monitor your remaining time via a countdown timer.</p>
<p>A portion of the questions are unscored pretest items under evaluation for future exams. Since they are indistinguishable from scored questions, treat each one with equal effort.</p>

<h3>Time Management Strategy</h3>
<p>You have 180 minutes for 130 questions, giving you approximately <strong>1 minute and 23 seconds per question</strong>. Many RPFT questions involve interpreting data or calculations, so you will need that time. Here is a structured approach:</p>
<ol>
<li><strong>First pass (0&ndash;110 minutes):</strong> Work through all 130 questions at a steady pace. Aim for 50&ndash;75 seconds on straightforward recall questions. For questions requiring interpretation or calculation, allow up to 90 seconds. If a question requires extensive work, flag it and return later.</li>
<li><strong>Second pass (110&ndash;155 minutes):</strong> Return to flagged questions. These are typically the interpretation and calculation problems that need more focus. Take the time now to work through them carefully.</li>
<li><strong>Final review (155&ndash;180 minutes):</strong> Ensure every question has an answer. Do a final review of any items you remain uncertain about.</li>
</ol>
<p><strong>Pace target:</strong> Hit question 65 by the 90-minute mark. The RPFT exam often front-loads conceptual questions and layers in more complex interpretation questions later, so banking time early is a smart strategy.</p>

<h3>Handling Difficult Questions</h3>
<p>The RPFT exam includes questions that require interpreting flow-volume loops, calculating predicted values, and analyzing complex pulmonary function data. When a question feels overwhelming, flag it and move on. On your second pass, use your scratch board to work through calculations methodically. Eliminate answer choices that are clearly out of range. For interpretation questions, look for the most obvious abnormality first before considering subtle findings. Never leave a question unanswered &mdash; there is no penalty for guessing.</p>

<h3>Break Policy</h3>
<p>You may take breaks at any time, but the <strong>exam clock does not pause</strong>. Each break involves signing out and back in with the proctor. With 3 hours of testing time and complex questions, one brief restroom break around the halfway point or between your first and second pass is reasonable. Keep it as short as possible to maximize your time on questions.</p>

<h3>Managing Exam Anxiety</h3>
<p>The RPFT exam covers advanced material and the stakes feel high. If you feel anxiety creeping in, use a quick reset: drop your shoulders, unclench your jaw, and take three slow, deep breaths. Between sections of your exam, stretch your fingers and roll your neck. Remind yourself that this exam tests knowledge you have built over years of clinical practice and study. One difficult question does not define your result. Stay present and focus on the question in front of you.</p>

<h3>What Happens After You Finish</h3>
<p>When you submit your exam and complete the post-exam survey, you will see a <strong>preliminary pass/fail result displayed on screen</strong>. The proctor will provide a printed score report as you leave. Your official scaled score will be posted to your NBRC online account within a few business days. The NBRC uses scaled scoring to ensure that pass standards remain consistent regardless of which exam form you were administered.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">NBRC RPFT Exam Guide</a></li>
<li><a href="/tips/rpft-exam-tips">RPFT Exam Tips</a></li>
<li><a href="/mistakes/common-rpft-exam-mistakes">Common RPFT Exam Mistakes</a></li>
<li><a href="/pricing">View Study Plans</a></li>
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
