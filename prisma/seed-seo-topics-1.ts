import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pages = [
  {
    slug: 'abg-interpretation',
    type: 'TOPIC' as const,
    title: 'ABG Interpretation for Respiratory Therapists',
    description: 'Master arterial blood gas interpretation with this comprehensive guide covering acid-base balance, compensation, and clinical application for NBRC exam preparation.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>ABG Interpretation for Respiratory Therapists</h2>
<p>Arterial blood gas (ABG) analysis is one of the most critical skills for respiratory therapists. Understanding ABGs allows you to assess oxygenation, ventilation, and acid-base status rapidly, guiding clinical decisions in real time. This topic appears heavily on both the TMC and CSE exams.</p>

<h3>Normal ABG Values</h3>
<table>
<thead><tr><th>Parameter</th><th>Normal Range</th></tr></thead>
<tbody>
<tr><td>pH</td><td>7.35 &ndash; 7.45</td></tr>
<tr><td>PaCO2</td><td>35 &ndash; 45 mmHg</td></tr>
<tr><td>HCO3&minus;</td><td>22 &ndash; 26 mEq/L</td></tr>
<tr><td>PaO2</td><td>80 &ndash; 100 mmHg</td></tr>
<tr><td>SaO2</td><td>95 &ndash; 100%</td></tr>
<tr><td>Base Excess</td><td>&minus;2 to +2 mEq/L</td></tr>
</tbody>
</table>

<h3>Systematic ABG Interpretation: The 5-Step Method</h3>
<ol>
<li><strong>Assess oxygenation:</strong> Is PaO2 adequate? A PaO2 below 80 mmHg indicates hypoxemia. Classify severity: mild (60&ndash;79), moderate (40&ndash;59), or severe (&lt;40).</li>
<li><strong>Evaluate pH:</strong> Below 7.35 is acidemia; above 7.45 is alkalemia.</li>
<li><strong>Determine the respiratory component:</strong> PaCO2 above 45 indicates respiratory acidosis; below 35 indicates respiratory alkalosis.</li>
<li><strong>Determine the metabolic component:</strong> HCO3&minus; below 22 indicates metabolic acidosis; above 26 indicates metabolic alkalosis.</li>
<li><strong>Assess compensation:</strong> Check whether the non-primary system is moving in the same direction as the pH disturbance to compensate.</li>
</ol>

<h3>Compensation Rules</h3>
<p>Compensation occurs when the body attempts to return pH toward normal. In <strong>respiratory acidosis</strong>, the kidneys retain HCO3&minus; to raise pH. In <strong>metabolic acidosis</strong>, the lungs increase ventilation to blow off CO2. Key points for the NBRC exam:</p>
<ul>
<li><strong>Uncompensated:</strong> pH is abnormal, only one system (respiratory or metabolic) is out of range.</li>
<li><strong>Partially compensated:</strong> pH is still abnormal, but both systems are out of range as the body attempts correction.</li>
<li><strong>Fully compensated:</strong> pH is within normal range, but both PaCO2 and HCO3&minus; are abnormal. Look at which side of 7.40 the pH falls to determine the primary disorder.</li>
</ul>

<h3>Common ABG Patterns</h3>
<table>
<thead><tr><th>Condition</th><th>pH</th><th>PaCO2</th><th>HCO3&minus;</th></tr></thead>
<tbody>
<tr><td>Respiratory Acidosis (uncompensated)</td><td>&darr;</td><td>&uarr;</td><td>Normal</td></tr>
<tr><td>Respiratory Alkalosis (uncompensated)</td><td>&uarr;</td><td>&darr;</td><td>Normal</td></tr>
<tr><td>Metabolic Acidosis (uncompensated)</td><td>&darr;</td><td>Normal</td><td>&darr;</td></tr>
<tr><td>Metabolic Alkalosis (uncompensated)</td><td>&uarr;</td><td>Normal</td><td>&uarr;</td></tr>
<tr><td>Combined Respiratory &amp; Metabolic Acidosis</td><td>&darr;&darr;</td><td>&uarr;</td><td>&darr;</td></tr>
</tbody>
</table>

<h3>Anion Gap</h3>
<p>When metabolic acidosis is present, calculate the anion gap: <strong>AG = Na&minus; &minus; (Cl&minus; + HCO3&minus;)</strong>. Normal is 8&ndash;12 mEq/L. An elevated anion gap suggests causes such as lactic acidosis, ketoacidosis, renal failure, or toxin ingestion (use the mnemonic <strong>MUDPILES</strong>: Methanol, Uremia, Diabetic ketoacidosis, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates).</p>

<h3>Clinical Application</h3>
<p>ABG interpretation directly guides ventilator management. If a mechanically ventilated patient has a pH of 7.28 with a PaCO2 of 58 mmHg, you are seeing uncompensated respiratory acidosis. The appropriate intervention is to increase minute ventilation by raising the respiratory rate or tidal volume. Conversely, if a patient is over-ventilated with a pH of 7.52 and PaCO2 of 28 mmHg, reducing rate or tidal volume is indicated.</p>

<h3>Exam Tips</h3>
<ul>
<li>Always assess oxygenation first before moving to acid-base analysis.</li>
<li>Remember that the body never overcompensates &mdash; if pH has crossed to the opposite side, a mixed disorder is present.</li>
<li>The NBRC uses scaled scoring for the TMC and CSE exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'ventilator-modes-explained',
    type: 'TOPIC' as const,
    title: 'Ventilator Modes Explained: AC, SIMV, PSV, APRV',
    description: 'Comprehensive guide to ventilator modes including AC, SIMV, PSV, and APRV. Understand trigger, cycle, and control variables for NBRC exam success.',
    division: null,
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Ventilator Modes Explained: AC, SIMV, PSV, APRV</h2>
<p>Understanding ventilator modes is fundamental for respiratory therapists. Each mode is defined by three key variables: the <strong>trigger</strong> (what initiates the breath), the <strong>cycle</strong> (what terminates inspiration), and the <strong>control</strong> variable (what the ventilator holds constant during inspiration).</p>

<h3>Assist-Control (AC) Ventilation</h3>
<p>In AC mode, every breath &mdash; whether triggered by the patient or the ventilator &mdash; delivers a full, machine-supported breath.</p>
<ul>
<li><strong>Trigger:</strong> Patient effort (flow or pressure trigger) or time (set rate).</li>
<li><strong>Control variable:</strong> Volume-controlled AC (VC-AC) delivers a set tidal volume; Pressure-controlled AC (PC-AC) delivers a set inspiratory pressure.</li>
<li><strong>Cycle:</strong> VC-AC cycles off volume (when the set Vt is delivered); PC-AC cycles off time (set inspiratory time).</li>
<li><strong>Clinical use:</strong> Full ventilatory support. Commonly used for patients with minimal or no spontaneous effort. Watch for breath stacking and auto-PEEP in patients with high respiratory rates.</li>
</ul>

<h3>Synchronized Intermittent Mandatory Ventilation (SIMV)</h3>
<p>SIMV delivers a set number of mandatory breaths synchronized to patient effort. Breaths above the set rate are spontaneous and unsupported (unless pressure support is added).</p>
<ul>
<li><strong>Trigger:</strong> Time-triggered mandatory breaths are synchronized to patient effort within a timing window. Spontaneous breaths are patient-triggered.</li>
<li><strong>Control variable:</strong> Mandatory breaths can be volume or pressure controlled.</li>
<li><strong>Cycle:</strong> Mandatory breaths cycle per mode (volume or time). Spontaneous breaths are flow-cycled if PSV is added.</li>
<li><strong>Clinical use:</strong> Historically used for weaning by gradually reducing the mandatory rate. Current evidence suggests other weaning strategies may be equally effective.</li>
</ul>

<h3>Pressure Support Ventilation (PSV)</h3>
<p>PSV is a purely spontaneous mode. Every breath must be triggered by the patient. The ventilator augments each spontaneous breath with a set level of inspiratory pressure.</p>
<ul>
<li><strong>Trigger:</strong> Patient effort only. No backup rate (unless combined with another mode or apnea backup is set).</li>
<li><strong>Control variable:</strong> Pressure (set inspiratory pressure level).</li>
<li><strong>Cycle:</strong> Flow-cycled &mdash; inspiration ends when inspiratory flow drops to a percentage of peak flow (typically 25%).</li>
<li><strong>Clinical use:</strong> Weaning, spontaneous breathing trials. Improves patient comfort by allowing control over rate, tidal volume, and inspiratory time.</li>
</ul>

<h3>Airway Pressure Release Ventilation (APRV)</h3>
<p>APRV is a pressure-controlled, time-cycled mode that uses two levels of CPAP (P-high and P-low) with intermittent brief releases to the lower pressure level.</p>
<ul>
<li><strong>P-high:</strong> The upper pressure level, maintained for a long duration (T-high, typically 4&ndash;6 seconds).</li>
<li><strong>P-low:</strong> The lower pressure level, maintained briefly (T-low, typically 0.5&ndash;0.8 seconds).</li>
<li><strong>Spontaneous breathing:</strong> Patients can breathe spontaneously at both pressure levels, which improves V/Q matching and recruits alveoli.</li>
<li><strong>Clinical use:</strong> ARDS, refractory hypoxemia. The prolonged high pressure promotes alveolar recruitment while the brief release allows CO2 elimination.</li>
</ul>

<h3>Choosing a Mode: Exam Considerations</h3>
<table>
<thead><tr><th>Clinical Scenario</th><th>Recommended Mode</th></tr></thead>
<tbody>
<tr><td>Full support, no spontaneous effort</td><td>AC (volume or pressure)</td></tr>
<tr><td>Weaning with gradual reduction</td><td>SIMV + PSV or PSV alone</td></tr>
<tr><td>Spontaneous breathing trial</td><td>PSV (low level, 5&ndash;8 cmH2O) or T-piece</td></tr>
<tr><td>Refractory hypoxemia / ARDS</td><td>APRV or PC-AC with high PEEP</td></tr>
</tbody>
</table>

<h3>Key Exam Tips</h3>
<ul>
<li>Know the trigger, cycle, and control variable for every mode.</li>
<li>AC delivers full support with every breath &mdash; the risk is hyperventilation and auto-PEEP.</li>
<li>PSV is always flow-cycled and patient-triggered.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-modes">Ventilator Modes Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'ventilator-troubleshooting',
    type: 'TOPIC' as const,
    title: 'Ventilator Troubleshooting Guide',
    description: 'Learn systematic ventilator troubleshooting for high-pressure alarms, low-pressure alarms, and patient-ventilator asynchrony. Essential for NBRC CSE exam prep.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Ventilator Troubleshooting Guide</h2>
<p>Ventilator troubleshooting is a critical competency for respiratory therapists and a high-yield topic on the NBRC CSE exam. A systematic approach ensures rapid identification and correction of problems that could compromise patient safety.</p>

<h3>The Systematic Approach: Patient First</h3>
<p>When a ventilator alarm sounds, always assess the <strong>patient first, then the circuit, then the ventilator</strong>. If the patient is in distress and the cause is not immediately apparent, disconnect from the ventilator and manually ventilate with a bag-valve device while troubleshooting.</p>

<h3>High-Pressure Alarms</h3>
<p>High-pressure alarms indicate increased resistance or decreased compliance in the system. Common causes:</p>
<ul>
<li><strong>Patient-related:</strong> Bronchospasm, secretions in the airway, biting on the ETT, coughing, pneumothorax, mainstem intubation, decreased lung compliance (pulmonary edema, ARDS).</li>
<li><strong>Circuit-related:</strong> Water in the circuit, kinked tubing, ETT obstruction (mucus plug, herniated cuff).</li>
</ul>
<p><strong>Interventions:</strong> Suction the airway, assess breath sounds, reposition the patient, administer bronchodilators if indicated, check the circuit for kinks or water accumulation, and verify ETT position.</p>

<h3>Low-Pressure Alarms</h3>
<p>Low-pressure alarms indicate a leak or disconnection in the system. Common causes:</p>
<ul>
<li><strong>Disconnection:</strong> Patient disconnected from the circuit, circuit disconnected from the ventilator.</li>
<li><strong>Leaks:</strong> Deflated or ruptured ETT cuff, loose circuit connections, chest tube air leak.</li>
<li><strong>Inadequate flow:</strong> Insufficient gas supply.</li>
</ul>
<p><strong>Interventions:</strong> Check all connections, assess cuff pressure (maintain 20&ndash;30 cmH2O), listen for audible leaks, and verify gas source pressure.</p>

<h3>Low Tidal Volume Alarms</h3>
<p>May indicate a leak (as above), or in pressure-targeted modes, worsening compliance or increased resistance preventing delivery of adequate volume. Assess the patient and circuit, and consider adjusting pressure settings or switching modes.</p>

<h3>Patient-Ventilator Asynchrony</h3>
<p>Asynchrony occurs when the ventilator breath delivery does not match the patient's neural respiratory drive. Types include:</p>
<ul>
<li><strong>Trigger asynchrony:</strong> Missed triggers (auto-PEEP, insensitive trigger setting) or auto-triggering (circuit leaks, cardiac oscillations, water in the circuit).</li>
<li><strong>Flow asynchrony:</strong> Insufficient flow rate in volume modes, causing patient discomfort and increased work of breathing.</li>
<li><strong>Cycle asynchrony:</strong> Premature or delayed termination of inspiration relative to the patient's neural inspiratory time.</li>
</ul>
<p><strong>Interventions:</strong> Adjust trigger sensitivity, increase flow rate or switch to a decelerating flow pattern, adjust rise time, or switch to a pressure-targeted mode for better flow matching.</p>

<h3>Auto-PEEP (Intrinsic PEEP)</h3>
<p>Auto-PEEP occurs when expiratory time is insufficient for complete exhalation, trapping gas in the lungs. Common in patients with COPD or asthma. Detect by performing an expiratory hold maneuver. Manage by:</p>
<ul>
<li>Reducing respiratory rate</li>
<li>Reducing tidal volume</li>
<li>Increasing expiratory time (decrease I:E ratio)</li>
<li>Treating underlying bronchospasm</li>
<li>Applying external PEEP (approximately 75&ndash;80% of measured auto-PEEP) to reduce trigger effort</li>
</ul>

<h3>Exam Strategy</h3>
<p>CSE clinical simulation scenarios frequently present ventilator alarm situations. Remember: always assess the patient first, use manual ventilation if needed, and work systematically through patient, circuit, and ventilator causes.</p>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-alarms">Ventilator Alarms Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'oxygen-delivery-devices',
    type: 'TOPIC' as const,
    title: 'Oxygen Delivery Devices: Complete Guide',
    description: 'Complete guide to oxygen delivery devices including nasal cannula, simple mask, Venturi mask, and non-rebreather. Accurate flow rates and FiO2 ranges for NBRC exams.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Oxygen Delivery Devices: Complete Guide</h2>
<p>Selecting the appropriate oxygen delivery device is a core competency for respiratory therapists and a frequently tested topic on the TMC exam. Devices are classified as low-flow (variable FiO2) or high-flow (fixed FiO2) systems based on whether they meet or exceed the patient's inspiratory flow demand.</p>

<h3>Low-Flow (Variable Performance) Devices</h3>
<p>Low-flow devices deliver oxygen at flow rates below the patient's total inspiratory demand. The actual FiO2 varies with the patient's respiratory pattern, tidal volume, and respiratory rate.</p>

<h4>Nasal Cannula</h4>
<ul>
<li><strong>Flow rate:</strong> 1&ndash;6 L/min</li>
<li><strong>Approximate FiO2:</strong> 24&ndash;44% (each L/min adds approximately 4%)</li>
<li><strong>Advantages:</strong> Comfortable, allows eating and talking, well tolerated for long-term use.</li>
<li><strong>Limitations:</strong> FiO2 is variable; not effective in mouth breathers; nasal drying above 4 L/min without humidification.</li>
</ul>

<h4>Simple Mask</h4>
<ul>
<li><strong>Flow rate:</strong> 5&ndash;10 L/min (minimum 5 L/min to flush CO2)</li>
<li><strong>Approximate FiO2:</strong> 40&ndash;60%</li>
<li><strong>Key point:</strong> Never set below 5 L/min to prevent CO2 rebreathing from the mask reservoir.</li>
</ul>

<h4>Partial Rebreather Mask</h4>
<ul>
<li><strong>Flow rate:</strong> 6&ndash;10 L/min</li>
<li><strong>Approximate FiO2:</strong> 40&ndash;70%</li>
<li><strong>Design:</strong> Has a reservoir bag without one-way valves. The bag should never deflate more than one-third during inspiration.</li>
</ul>

<h4>Non-Rebreather Mask (NRB)</h4>
<ul>
<li><strong>Flow rate:</strong> 10&ndash;15 L/min</li>
<li><strong>Approximate FiO2:</strong> 60&ndash;100%</li>
<li><strong>Design:</strong> Has a reservoir bag with one-way valves on the exhalation ports and between the bag and mask. In practice, one valve is typically removed as a safety measure, so true 100% FiO2 is not achieved.</li>
<li><strong>Clinical use:</strong> Acute hypoxemia, trauma, carbon monoxide poisoning.</li>
</ul>

<h3>High-Flow (Fixed Performance) Devices</h3>
<p>High-flow devices deliver a total flow that meets or exceeds the patient's peak inspiratory flow demand, providing a consistent and predictable FiO2.</p>

<h4>Air Entrainment (Venturi) Mask</h4>
<ul>
<li><strong>FiO2 range:</strong> 24&ndash;50% (precise settings via color-coded adapters)</li>
<li><strong>Principle:</strong> Uses the Bernoulli principle and jet entrainment to mix room air with oxygen at fixed ratios.</li>
<li><strong>Clinical use:</strong> Patients requiring precise, consistent FiO2 &mdash; especially COPD patients at risk for oxygen-induced hypercapnia.</li>
</ul>

<h4>High-Flow Nasal Cannula (HFNC)</h4>
<ul>
<li><strong>Flow rate:</strong> Up to 60 L/min (adults)</li>
<li><strong>FiO2 range:</strong> 21&ndash;100%</li>
<li><strong>Benefits:</strong> Delivers heated, humidified gas; provides a small amount of positive pressure (flow-dependent PEEP effect); reduces dead space by flushing the nasopharynx; comfortable for patients.</li>
<li><strong>Clinical use:</strong> Acute hypoxemic respiratory failure, post-extubation support, preoxygenation.</li>
</ul>

<h3>Device Selection Guidelines</h3>
<table>
<thead><tr><th>Patient Need</th><th>Recommended Device</th></tr></thead>
<tbody>
<tr><td>Low-level supplemental O2, stable patient</td><td>Nasal cannula (1&ndash;4 L/min)</td></tr>
<tr><td>Moderate hypoxemia</td><td>Simple mask or nasal cannula at higher flow</td></tr>
<tr><td>Severe hypoxemia, emergency</td><td>Non-rebreather mask at 15 L/min</td></tr>
<tr><td>Precise FiO2 needed (COPD)</td><td>Venturi mask</td></tr>
<tr><td>High-flow demand with humidification</td><td>High-flow nasal cannula</td></tr>
</tbody>
</table>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/oxygen-therapy">Oxygen Therapy Cheat Sheet</a></li>
<li><a href="/glossary/oxygen-therapy">Oxygen Therapy Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'chest-xray-interpretation-rt',
    type: 'TOPIC' as const,
    title: 'Chest X-Ray Interpretation for RTs',
    description: 'Learn systematic chest X-ray interpretation for respiratory therapists. Identify ETT placement, pneumothorax, pleural effusion, and more for NBRC exam prep.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Chest X-Ray Interpretation for Respiratory Therapists</h2>
<p>Chest X-ray (CXR) interpretation is a key skill for respiratory therapists, particularly in critical care settings. While formal radiograph reads are performed by radiologists, RTs must be able to identify emergent findings and verify device placement. This topic appears regularly on the TMC and CSE exams.</p>

<h3>Systematic Approach: ABCDE Method</h3>
<p>Use a consistent systematic approach to avoid missing important findings:</p>
<ul>
<li><strong>A &mdash; Airway:</strong> Assess tracheal position (midline?), ETT placement (tip should be 3&ndash;5 cm above the carina, approximately at the level of the aortic knob or T3&ndash;T4).</li>
<li><strong>B &mdash; Bones:</strong> Look for rib fractures, clavicle fractures, spinal abnormalities.</li>
<li><strong>C &mdash; Cardiac:</strong> Heart size (should be less than half the thoracic diameter on PA film), mediastinal width, cardiac silhouette borders.</li>
<li><strong>D &mdash; Diaphragm:</strong> Position (right should be slightly higher than left), flattening (hyperinflation), free air under diaphragm.</li>
<li><strong>E &mdash; Everything else:</strong> Lung fields, pleural spaces, soft tissues, lines and tubes.</li>
</ul>

<h3>Common Findings for RTs</h3>

<h4>ETT and Tube Placement</h4>
<ul>
<li><strong>Endotracheal tube:</strong> Tip 3&ndash;5 cm above carina. If too deep, suspect right mainstem intubation (absent left-sided breath sounds).</li>
<li><strong>Tracheostomy tube:</strong> Tip should be approximately halfway between the stoma and carina.</li>
<li><strong>Central venous catheter:</strong> Tip should be at the junction of the SVC and right atrium.</li>
<li><strong>Nasogastric tube:</strong> Tip should be below the diaphragm in the stomach.</li>
<li><strong>Chest tube:</strong> Anterior placement for pneumothorax, posterior/dependent for effusion.</li>
</ul>

<h4>Pneumothorax</h4>
<p>Look for a visible pleural line with absence of lung markings peripheral to it. A tension pneumothorax shows mediastinal shift away from the affected side, tracheal deviation, and flattened diaphragm on the affected side. This is a medical emergency requiring immediate needle decompression.</p>

<h4>Pleural Effusion</h4>
<p>Blunting of the costophrenic angle on an upright film. Large effusions cause opacification of the hemithorax with mediastinal shift toward the opposite side. On a supine film, effusions appear as a generalized haziness over the affected hemithorax.</p>

<h4>Atelectasis</h4>
<p>Volume loss with increased opacity. Signs include shift of the mediastinum, hilum, or fissures toward the affected side. Silhouette sign helps localize the lobe involved.</p>

<h4>Consolidation (Pneumonia)</h4>
<p>Air-space opacification with air bronchograms (air-filled bronchi visible against opacified surrounding lung). Does not cause volume loss (distinguishes from atelectasis).</p>

<h4>Pulmonary Edema</h4>
<p>Bilateral, symmetrical perihilar haziness (&ldquo;butterfly&rdquo; or &ldquo;bat wing&rdquo; pattern). Associated findings include cephalization of blood flow, Kerley B lines, and pleural effusions. Cardiogenic edema typically shows an enlarged cardiac silhouette.</p>

<h4>Hyperinflation</h4>
<p>Flattened diaphragms, increased AP diameter, more than 10 posterior ribs visible above the diaphragm, widened intercostal spaces. Seen in COPD and acute asthma exacerbations.</p>

<h3>Exam Tips</h3>
<ul>
<li>Always verify ETT position on every post-intubation CXR.</li>
<li>Use the systematic approach even if one obvious finding jumps out &mdash; there may be additional findings.</li>
<li>Know the difference between PA and AP films and how it affects cardiac silhouette size.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/chest-xray">Chest X-Ray Cheat Sheet</a></li>
<li><a href="/glossary/radiology">Radiology Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'hemodynamics-respiratory-therapy',
    type: 'TOPIC' as const,
    title: 'Hemodynamics for Respiratory Therapists',
    description: 'Understand hemodynamic monitoring including pulmonary artery catheter values, cardiac output, SVR, and PVR for the NBRC TMC and CSE exams.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Hemodynamics for Respiratory Therapists</h2>
<p>Hemodynamic monitoring is essential in critical care settings where respiratory therapists work alongside physicians and nurses to manage acutely ill patients. Understanding hemodynamic parameters helps RTs assess the impact of ventilatory interventions on cardiovascular function.</p>

<h3>Normal Hemodynamic Values</h3>
<table>
<thead><tr><th>Parameter</th><th>Normal Range</th></tr></thead>
<tbody>
<tr><td>Heart Rate (HR)</td><td>60&ndash;100 bpm</td></tr>
<tr><td>Mean Arterial Pressure (MAP)</td><td>70&ndash;105 mmHg</td></tr>
<tr><td>Central Venous Pressure (CVP)</td><td>2&ndash;6 mmHg</td></tr>
<tr><td>Pulmonary Artery Pressure (PAP)</td><td>25/10 mmHg (mean 10&ndash;20)</td></tr>
<tr><td>Pulmonary Artery Wedge Pressure (PAWP)</td><td>8&ndash;12 mmHg</td></tr>
<tr><td>Cardiac Output (CO)</td><td>4&ndash;8 L/min</td></tr>
<tr><td>Cardiac Index (CI)</td><td>2.5&ndash;4.0 L/min/m&sup2;</td></tr>
<tr><td>Systemic Vascular Resistance (SVR)</td><td>900&ndash;1400 dynes&middot;sec/cm&sup5;</td></tr>
<tr><td>Pulmonary Vascular Resistance (PVR)</td><td>100&ndash;250 dynes&middot;sec/cm&sup5;</td></tr>
<tr><td>Stroke Volume (SV)</td><td>60&ndash;100 mL/beat</td></tr>
</tbody>
</table>

<h3>Pulmonary Artery (Swan-Ganz) Catheter</h3>
<p>The pulmonary artery catheter (PAC) allows direct measurement of right heart pressures, pulmonary artery pressures, and cardiac output. The catheter is advanced through the right atrium, right ventricle, and into the pulmonary artery. When the balloon is inflated, it wedges in a distal pulmonary artery branch, providing an estimate of left atrial pressure (PAWP).</p>

<h3>Hemodynamic Profiles</h3>
<table>
<thead><tr><th>Condition</th><th>CO</th><th>PAWP</th><th>SVR</th></tr></thead>
<tbody>
<tr><td>Cardiogenic Shock</td><td>&darr;</td><td>&uarr;</td><td>&uarr;</td></tr>
<tr><td>Hypovolemic Shock</td><td>&darr;</td><td>&darr;</td><td>&uarr;</td></tr>
<tr><td>Septic Shock (early/warm)</td><td>&uarr;</td><td>&darr;</td><td>&darr;</td></tr>
<tr><td>Septic Shock (late/cold)</td><td>&darr;</td><td>Variable</td><td>&uarr;</td></tr>
<tr><td>Right Heart Failure</td><td>&darr;</td><td>Normal/&darr;</td><td>&uarr;</td></tr>
</tbody>
</table>

<h3>Impact of Mechanical Ventilation on Hemodynamics</h3>
<p>Positive pressure ventilation increases intrathoracic pressure, which can significantly affect cardiovascular function:</p>
<ul>
<li><strong>Decreased venous return:</strong> Increased intrathoracic pressure impedes venous return to the right heart, reducing preload and potentially decreasing cardiac output.</li>
<li><strong>Increased PVR:</strong> Overdistension of alveoli compresses pulmonary capillaries, increasing PVR and right ventricular afterload.</li>
<li><strong>PEEP effects:</strong> Higher PEEP levels amplify these effects. While PEEP improves oxygenation, excessive PEEP can compromise hemodynamics.</li>
<li><strong>Clinical implication:</strong> When increasing PEEP improves oxygenation but blood pressure drops, the net effect on oxygen delivery may be negative.</li>
</ul>

<h3>Key Calculations</h3>
<ul>
<li><strong>Cardiac Output:</strong> CO = HR &times; SV</li>
<li><strong>Cardiac Index:</strong> CI = CO / BSA</li>
<li><strong>SVR:</strong> SVR = (MAP &minus; CVP) / CO &times; 80</li>
<li><strong>PVR:</strong> PVR = (mean PAP &minus; PAWP) / CO &times; 80</li>
<li><strong>Oxygen delivery:</strong> DO2 = CO &times; CaO2 &times; 10</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Memorize the hemodynamic profiles for different shock states.</li>
<li>Understand how PEEP and positive pressure ventilation affect preload, afterload, and cardiac output.</li>
<li>PAWP reflects left ventricular preload; CVP reflects right ventricular preload.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/hemodynamics">Hemodynamics Cheat Sheet</a></li>
<li><a href="/glossary/hemodynamics">Hemodynamics Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'airway-management-guide',
    type: 'TOPIC' as const,
    title: 'Airway Management: Complete RT Guide',
    description: 'Complete airway management guide for respiratory therapists covering intubation, LMA, surgical airways, and difficult airway algorithms for NBRC exam prep.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Airway Management: Complete RT Guide</h2>
<p>Airway management is one of the most critical responsibilities of respiratory therapists. From basic airway maneuvers to advanced endotracheal intubation, RTs must be proficient in establishing and maintaining a patent airway. This topic is heavily tested on both the TMC and CSE exams.</p>

<h3>Basic Airway Maneuvers</h3>
<ul>
<li><strong>Head-tilt/chin-lift:</strong> First-line maneuver for opening the airway in an unresponsive patient without suspected cervical spine injury. Tilting the head extends the neck and lifts the tongue off the posterior pharynx.</li>
<li><strong>Jaw-thrust:</strong> Used when cervical spine injury is suspected. Lifts the mandible forward without extending the neck.</li>
<li><strong>Recovery position:</strong> Lateral position for unresponsive patients breathing spontaneously to prevent aspiration.</li>
</ul>

<h3>Airway Adjuncts</h3>
<h4>Oropharyngeal Airway (OPA)</h4>
<ul>
<li>Used in unconscious patients without a gag reflex.</li>
<li>Sizing: measure from the corner of the mouth to the angle of the jaw (or earlobe).</li>
<li>Insertion: Insert with the tip pointing toward the palate, then rotate 180 degrees (adult technique).</li>
<li>Contraindicated in conscious patients or those with an intact gag reflex.</li>
</ul>

<h4>Nasopharyngeal Airway (NPA)</h4>
<ul>
<li>Better tolerated than OPA in semi-conscious patients.</li>
<li>Sizing: measure from the tip of the nose to the earlobe; diameter approximates the patient's little finger.</li>
<li>Contraindicated in basilar skull fractures and significant coagulopathy.</li>
</ul>

<h3>Endotracheal Intubation</h3>
<p>Endotracheal intubation provides a definitive airway with airway protection, controlled ventilation, and a route for suctioning.</p>
<ul>
<li><strong>ETT sizing:</strong> Adult male: 7.5&ndash;8.5 mm ID; Adult female: 7.0&ndash;7.5 mm ID.</li>
<li><strong>Depth of insertion:</strong> Typically 21 cm at the teeth for adult females, 23 cm for adult males. Confirm with chest X-ray (tip 3&ndash;5 cm above carina).</li>
<li><strong>Cuff pressure:</strong> Maintain 20&ndash;30 cmH2O to prevent tracheal ischemia while ensuring an adequate seal.</li>
<li><strong>Confirmation methods:</strong> End-tidal CO2 detection (gold standard), bilateral breath sounds, chest rise, absence of epigastric sounds, chest X-ray.</li>
</ul>

<h3>Supraglottic Airways</h3>
<h4>Laryngeal Mask Airway (LMA)</h4>
<ul>
<li>Does not provide a definitive airway or full aspiration protection.</li>
<li>Useful as a rescue device when intubation fails.</li>
<li>Can be placed without laryngoscopy.</li>
</ul>

<h4>King LT Airway (Laryngeal Tube)</h4>
<ul>
<li>Dual-lumen supraglottic device used in emergency and prehospital settings.</li>
<li>Easier insertion than ETT; does not require visualization of the vocal cords.</li>
</ul>

<h3>Surgical Airways</h3>
<ul>
<li><strong>Cricothyrotomy:</strong> Emergency surgical airway performed through the cricothyroid membrane. Indicated when intubation and supraglottic airways have failed (&ldquo;can't intubate, can't oxygenate&rdquo; scenario).</li>
<li><strong>Tracheostomy:</strong> Surgical opening into the trachea, typically between the second and third tracheal rings. Indicated for prolonged mechanical ventilation, upper airway obstruction, or airway protection.</li>
</ul>

<h3>Rapid Sequence Intubation (RSI)</h3>
<p>RSI involves the near-simultaneous administration of a sedative and a neuromuscular blocking agent to facilitate rapid intubation while minimizing aspiration risk. RTs should be familiar with commonly used agents and their effects on respiratory drive.</p>

<h3>Exam Tips</h3>
<ul>
<li>End-tidal CO2 is the gold standard for confirming ETT placement.</li>
<li>Always maintain cuff pressure at 20&ndash;30 cmH2O.</li>
<li>Know the indications and contraindications for each airway adjunct.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/airway-management">Airway Management Cheat Sheet</a></li>
<li><a href="/glossary/airway-management">Airway Management Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'suctioning-techniques',
    type: 'TOPIC' as const,
    title: 'Suctioning Techniques and Best Practices',
    description: 'Master airway suctioning techniques including endotracheal, nasotracheal, and oropharyngeal suctioning with proper catheter sizing and pressure settings.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Suctioning Techniques and Best Practices</h2>
<p>Airway suctioning is one of the most frequently performed procedures by respiratory therapists. Proper technique is essential to maintain airway patency while minimizing complications. This topic is commonly tested on the TMC exam and appears in CSE clinical simulations.</p>

<h3>Indications for Suctioning</h3>
<ul>
<li>Audible or visible secretions in the airway</li>
<li>Coarse or rhonchi-type breath sounds on auscultation</li>
<li>Increased peak inspiratory pressures on the ventilator</li>
<li>Sawtooth pattern on the flow-volume loop (indicates secretions)</li>
<li>Decreased SpO2 or increased work of breathing</li>
<li>Patient inability to generate an effective cough</li>
</ul>

<h3>Suction Catheter Sizing</h3>
<p>The suction catheter should be no larger than half the internal diameter of the artificial airway to prevent excessive negative pressure and atelectasis.</p>
<p><strong>Formula:</strong> Catheter size (Fr) = ETT ID (mm) &times; 2, then use the next smallest size.</p>
<p>Example: For an 8.0 mm ETT, use a 14 Fr catheter (8 &times; 2 = 16, next smallest = 14 Fr).</p>

<h3>Suction Pressure Settings</h3>
<table>
<thead><tr><th>Patient Population</th><th>Suction Pressure</th></tr></thead>
<tbody>
<tr><td>Adults</td><td>100&ndash;150 mmHg</td></tr>
<tr><td>Children</td><td>80&ndash;100 mmHg</td></tr>
<tr><td>Infants</td><td>60&ndash;80 mmHg</td></tr>
<tr><td>Neonates</td><td>60&ndash;80 mmHg</td></tr>
</tbody>
</table>

<h3>Open vs. Closed Suctioning</h3>
<h4>Open Suctioning</h4>
<ul>
<li>Requires disconnecting the patient from the ventilator circuit.</li>
<li>Uses a single-use sterile catheter.</li>
<li>Sterile technique is required for tracheal suctioning.</li>
<li>Disadvantage: loss of PEEP and potential for desaturation, contamination risk.</li>
</ul>

<h4>Closed (In-Line) Suctioning</h4>
<ul>
<li>Does not require disconnecting from the ventilator.</li>
<li>Maintains PEEP and FiO2 throughout the procedure.</li>
<li>Preferred for patients requiring high PEEP or FiO2.</li>
<li>Multi-use catheter enclosed in a protective sleeve.</li>
</ul>

<h3>Proper Suctioning Technique</h3>
<ol>
<li>Assess the patient and verify the indication for suctioning.</li>
<li>Pre-oxygenate with 100% FiO2 for at least 30 seconds.</li>
<li>Insert the catheter without applying suction until resistance is met or the patient coughs.</li>
<li>Apply intermittent suction while slowly withdrawing the catheter with a rotating motion.</li>
<li>Limit each suction pass to no more than 10&ndash;15 seconds.</li>
<li>Allow recovery between passes (re-oxygenate, monitor SpO2 and heart rate).</li>
<li>Assess the effectiveness: improved breath sounds, decreased PIP, improved SpO2.</li>
</ol>

<h3>Nasotracheal Suctioning</h3>
<p>Used for patients without an artificial airway who cannot clear secretions. Requires clean or sterile technique. The catheter is passed through the nose, into the pharynx, and through the vocal cords during inspiration. This procedure is more stimulating and may trigger vagal responses.</p>

<h3>Complications of Suctioning</h3>
<ul>
<li><strong>Hypoxemia:</strong> Mitigate with pre-oxygenation and limiting pass duration.</li>
<li><strong>Bradycardia:</strong> Vagal stimulation, especially common during nasotracheal suctioning.</li>
<li><strong>Atelectasis:</strong> From excessive negative pressure or catheter too large.</li>
<li><strong>Mucosal trauma and bleeding:</strong> From aggressive technique or excessive pressure.</li>
<li><strong>Bronchospasm:</strong> Airway irritation triggering bronchoconstriction.</li>
<li><strong>Increased intracranial pressure:</strong> Concern in patients with head injuries.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Know the catheter sizing formula and pressure settings for all age groups.</li>
<li>Pre-oxygenation before suctioning is standard of care.</li>
<li>Closed suctioning is preferred for patients on high PEEP.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/suctioning">Suctioning Cheat Sheet</a></li>
<li><a href="/glossary/airway-management">Airway Management Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'pft-interpretation-guide',
    type: 'TOPIC' as const,
    title: 'PFT Interpretation: Complete Guide',
    description: 'Master pulmonary function test interpretation including spirometry, lung volumes, and DLCO. Learn obstruction vs restriction patterns for NBRC and CPFT exams.',
    division: 'cpft',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>PFT Interpretation: Complete Guide</h2>
<p>Pulmonary function testing (PFT) is fundamental to diagnosing and monitoring respiratory diseases. Respiratory therapists, especially those pursuing CPFT or RPFT credentials, must master PFT interpretation. This guide covers the essential patterns and diagnostic criteria.</p>

<h3>Key PFT Measurements</h3>
<table>
<thead><tr><th>Parameter</th><th>Definition</th><th>Clinical Significance</th></tr></thead>
<tbody>
<tr><td>FVC</td><td>Forced Vital Capacity &mdash; total volume exhaled during forced expiration</td><td>Reduced in restriction; may be reduced in severe obstruction due to air trapping</td></tr>
<tr><td>FEV1</td><td>Forced Expiratory Volume in 1 second</td><td>Reduced in obstruction and restriction</td></tr>
<tr><td>FEV1/FVC</td><td>Ratio of FEV1 to FVC</td><td>Key diagnostic ratio: &lt;0.70 indicates obstruction</td></tr>
<tr><td>TLC</td><td>Total Lung Capacity</td><td>Increased in hyperinflation; decreased in restriction</td></tr>
<tr><td>RV</td><td>Residual Volume</td><td>Increased in air trapping (obstruction)</td></tr>
<tr><td>DLCO</td><td>Diffusing Capacity for Carbon Monoxide</td><td>Reduced in emphysema, ILD, pulmonary vascular disease</td></tr>
</tbody>
</table>

<h3>Obstructive Pattern</h3>
<p>Obstruction is defined by a reduced FEV1/FVC ratio (&lt;0.70 or below the lower limit of normal). The hallmark is airflow limitation.</p>
<ul>
<li><strong>FEV1/FVC:</strong> &lt;0.70 (reduced)</li>
<li><strong>FEV1:</strong> Reduced (severity classified by percent predicted)</li>
<li><strong>FVC:</strong> Normal or reduced (if severe air trapping)</li>
<li><strong>TLC:</strong> Normal or increased (hyperinflation)</li>
<li><strong>RV:</strong> Increased (air trapping)</li>
<li><strong>Flow-volume loop:</strong> Scooped or concave expiratory limb</li>
<li><strong>Conditions:</strong> Asthma, COPD, bronchiectasis, cystic fibrosis</li>
</ul>

<h4>Severity Classification (ATS/ERS)</h4>
<table>
<thead><tr><th>Severity</th><th>FEV1 % Predicted</th></tr></thead>
<tbody>
<tr><td>Mild</td><td>&ge;70%</td></tr>
<tr><td>Moderate</td><td>60&ndash;69%</td></tr>
<tr><td>Moderately Severe</td><td>50&ndash;59%</td></tr>
<tr><td>Severe</td><td>35&ndash;49%</td></tr>
<tr><td>Very Severe</td><td>&lt;35%</td></tr>
</tbody>
</table>

<h3>Restrictive Pattern</h3>
<p>Restriction is characterized by reduced lung volumes with a normal or increased FEV1/FVC ratio.</p>
<ul>
<li><strong>FEV1/FVC:</strong> Normal or increased (&ge;0.70)</li>
<li><strong>FVC:</strong> &lt;80% predicted (reduced)</li>
<li><strong>TLC:</strong> &lt;80% predicted (confirms true restriction)</li>
<li><strong>FEV1:</strong> Reduced proportionally</li>
<li><strong>Flow-volume loop:</strong> Narrow but normal shape, reduced volume axis</li>
<li><strong>Conditions:</strong> Pulmonary fibrosis, neuromuscular disease, chest wall deformity, obesity</li>
</ul>
<p><strong>Important:</strong> A reduced FVC alone suggests restriction but does not confirm it. TLC measurement is required to confirm a true restrictive defect, because air trapping in severe obstruction can also reduce FVC.</p>

<h3>Mixed Obstructive-Restrictive Pattern</h3>
<p>When both FEV1/FVC is reduced (&lt;0.70) and TLC is reduced (&lt;80% predicted), a combined obstructive and restrictive defect is present. This pattern may be seen in patients with COPD and coexisting pulmonary fibrosis.</p>

<h3>Bronchodilator Response</h3>
<p>A positive bronchodilator response is defined as an increase of &ge;12% <strong>and</strong> &ge;200 mL in FEV1 or FVC after administration of a short-acting bronchodilator. A positive response suggests reversible airway obstruction, commonly seen in asthma.</p>

<h3>Quality Criteria</h3>
<p>For the NBRC exam, know the ATS/ERS acceptability and repeatability criteria:</p>
<ul>
<li>At least 3 acceptable efforts required.</li>
<li>The two largest FVC values should be within 150 mL of each other.</li>
<li>The two largest FEV1 values should be within 150 mL of each other.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">CPFT Exam Guide</a></li>
<li><a href="/guides/nbrc-rpft-exam-guide">RPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/pft-interpretation">PFT Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'copd-management-respiratory-therapy',
    type: 'TOPIC' as const,
    title: 'COPD Management for Respiratory Therapists',
    description: 'Comprehensive COPD management guide using GOLD classification, pharmacotherapy, oxygen therapy, and pulmonary rehabilitation for NBRC exam preparation.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>COPD Management for Respiratory Therapists</h2>
<p>Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease characterized by persistent airflow limitation. It is a leading cause of morbidity and mortality worldwide, and its management is a high-yield topic on the TMC exam.</p>

<h3>Diagnosis</h3>
<p>COPD is confirmed by spirometry demonstrating a post-bronchodilator FEV1/FVC ratio &lt;0.70. Clinical features include chronic cough, sputum production, and progressive dyspnea, typically in patients with significant smoking history or environmental exposures.</p>

<h3>GOLD Severity Classification</h3>
<p>The Global Initiative for Chronic Obstructive Lung Disease (GOLD) classifies airflow limitation severity based on post-bronchodilator FEV1:</p>
<table>
<thead><tr><th>GOLD Stage</th><th>Severity</th><th>FEV1 (% Predicted)</th></tr></thead>
<tbody>
<tr><td>GOLD 1</td><td>Mild</td><td>&ge;80%</td></tr>
<tr><td>GOLD 2</td><td>Moderate</td><td>50&ndash;79%</td></tr>
<tr><td>GOLD 3</td><td>Severe</td><td>30&ndash;49%</td></tr>
<tr><td>GOLD 4</td><td>Very Severe</td><td>&lt;30%</td></tr>
</tbody>
</table>

<h3>GOLD ABE Assessment</h3>
<p>GOLD also classifies patients into groups based on exacerbation history and symptom burden to guide pharmacotherapy:</p>
<ul>
<li><strong>Group A:</strong> Low symptoms, low exacerbation risk (0&ndash;1 moderate exacerbations, mMRC 0&ndash;1 or CAT &lt;10).</li>
<li><strong>Group B:</strong> More symptoms, low exacerbation risk (0&ndash;1 moderate exacerbations, mMRC &ge;2 or CAT &ge;10).</li>
<li><strong>Group E:</strong> Any symptom level, high exacerbation risk (&ge;2 moderate or &ge;1 leading to hospitalization).</li>
</ul>

<h3>Pharmacotherapy</h3>
<ul>
<li><strong>Group A:</strong> A bronchodilator (SABA, SAMA, LABA, or LAMA).</li>
<li><strong>Group B:</strong> LABA + LAMA combination therapy.</li>
<li><strong>Group E:</strong> LABA + LAMA; consider adding ICS if blood eosinophils &ge;300 cells/&mu;L.</li>
</ul>
<p>Key medications for RTs to know:</p>
<ul>
<li><strong>SABA:</strong> Albuterol &mdash; rescue bronchodilator</li>
<li><strong>SAMA:</strong> Ipratropium &mdash; anticholinergic bronchodilator</li>
<li><strong>LABA:</strong> Salmeterol, formoterol &mdash; long-acting beta-agonists</li>
<li><strong>LAMA:</strong> Tiotropium &mdash; long-acting anticholinergic</li>
<li><strong>ICS:</strong> Fluticasone, budesonide &mdash; inhaled corticosteroids (not used alone in COPD)</li>
</ul>

<h3>Oxygen Therapy</h3>
<p>Long-term oxygen therapy (LTOT) is indicated for COPD patients with:</p>
<ul>
<li>PaO2 &le;55 mmHg or SpO2 &le;88% at rest</li>
<li>PaO2 56&ndash;59 mmHg or SpO2 89% with evidence of cor pulmonale, polycythemia (Hct &gt;55%), or right heart failure</li>
</ul>
<p>Target SpO2 is typically 88&ndash;92% to avoid oxygen-induced hypercapnia.</p>

<h3>Acute Exacerbation Management</h3>
<ul>
<li>Increase SABA frequency (with or without SAMA)</li>
<li>Systemic corticosteroids (prednisone 40 mg for 5 days)</li>
<li>Antibiotics if increased sputum purulence is present</li>
<li>Noninvasive ventilation (BiPAP) for acute hypercapnic respiratory failure</li>
<li>Controlled oxygen to target SpO2 88&ndash;92%</li>
</ul>

<h3>Pulmonary Rehabilitation</h3>
<p>Pulmonary rehabilitation is a comprehensive intervention including exercise training, education, and behavior change. It is recommended for GOLD Group B and E patients and has been shown to improve exercise tolerance, reduce dyspnea, and decrease hospitalizations.</p>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/copd-management">COPD Cheat Sheet</a></li>
<li><a href="/glossary/copd">COPD Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'asthma-management-rt',
    type: 'TOPIC' as const,
    title: 'Asthma Management for Respiratory Therapists',
    description: 'Complete asthma management guide covering classification, stepwise therapy, acute exacerbation protocols, and medication delivery for NBRC exam prep.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Asthma Management for Respiratory Therapists</h2>
<p>Asthma is a chronic inflammatory airway disease characterized by variable airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. Respiratory therapists play a central role in both acute and chronic asthma management.</p>

<h3>Pathophysiology</h3>
<p>Asthma involves three key pathological processes:</p>
<ul>
<li><strong>Bronchospasm:</strong> Smooth muscle constriction narrowing the airways.</li>
<li><strong>Airway inflammation:</strong> Mucosal edema, eosinophilic infiltration, and inflammatory mediator release.</li>
<li><strong>Mucus hypersecretion:</strong> Increased mucus production with mucus plugging of smaller airways.</li>
</ul>
<p>These processes lead to the classic triad of wheezing, dyspnea, and cough, often worse at night or early morning.</p>

<h3>Classification of Asthma Severity</h3>
<table>
<thead><tr><th>Category</th><th>Symptoms</th><th>Nighttime Symptoms</th><th>FEV1</th></tr></thead>
<tbody>
<tr><td>Intermittent</td><td>&le;2 days/week</td><td>&le;2x/month</td><td>&ge;80%</td></tr>
<tr><td>Mild Persistent</td><td>&gt;2 days/week</td><td>3&ndash;4x/month</td><td>&ge;80%</td></tr>
<tr><td>Moderate Persistent</td><td>Daily</td><td>&gt;1x/week</td><td>60&ndash;80%</td></tr>
<tr><td>Severe Persistent</td><td>Throughout the day</td><td>Often nightly</td><td>&lt;60%</td></tr>
</tbody>
</table>

<h3>Stepwise Therapy (NAEPP Guidelines)</h3>
<p>Treatment intensity increases with severity:</p>
<ul>
<li><strong>Step 1 (Intermittent):</strong> SABA as needed (rescue inhaler).</li>
<li><strong>Step 2 (Mild Persistent):</strong> Low-dose ICS daily + SABA as needed.</li>
<li><strong>Step 3 (Moderate Persistent):</strong> Low-dose ICS + LABA or medium-dose ICS.</li>
<li><strong>Step 4:</strong> Medium-dose ICS + LABA.</li>
<li><strong>Step 5:</strong> High-dose ICS + LABA, consider add-on therapies (LAMA, biologics).</li>
<li><strong>Step 6:</strong> High-dose ICS + LABA + oral corticosteroids or biologic therapy.</li>
</ul>

<h3>Acute Exacerbation Management</h3>
<p>Severity assessment in the emergency setting:</p>
<ul>
<li><strong>Mild-Moderate:</strong> Can speak in phrases, SpO2 90&ndash;95%, PEF &gt;50% predicted.</li>
<li><strong>Severe:</strong> Speaks in words only, accessory muscle use, SpO2 &lt;90%, PEF &le;50%.</li>
<li><strong>Life-threatening:</strong> Silent chest (no air movement), drowsiness or confusion, bradycardia, cyanosis.</li>
</ul>

<h4>Treatment Protocol</h4>
<ol>
<li><strong>Continuous albuterol nebulization</strong> (10&ndash;15 mg/hr for severe exacerbations) or frequent MDI administration (4&ndash;8 puffs every 20 minutes).</li>
<li><strong>Ipratropium bromide</strong> added to albuterol for severe exacerbations (0.5 mg nebulized every 20 minutes for 3 doses).</li>
<li><strong>Systemic corticosteroids:</strong> IV methylprednisolone or oral prednisone within the first hour.</li>
<li><strong>Supplemental oxygen:</strong> Target SpO2 &ge;94%.</li>
<li><strong>Magnesium sulfate:</strong> IV (2 g over 20 minutes) for severe exacerbations not responding to initial therapy.</li>
<li><strong>Heliox:</strong> Consider for severe obstruction to reduce airway resistance and improve aerosol delivery.</li>
</ol>

<h3>Patient Education</h3>
<p>RTs should educate patients on:</p>
<ul>
<li>Proper inhaler technique (MDI with spacer, DPI technique)</li>
<li>Difference between controller and rescue medications</li>
<li>Asthma action plans with peak flow monitoring</li>
<li>Trigger avoidance strategies</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/asthma-management">Asthma Cheat Sheet</a></li>
<li><a href="/glossary/asthma">Asthma Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'neonatal-ventilation-guide',
    type: 'TOPIC' as const,
    title: 'Neonatal Ventilation: Complete Guide',
    description: 'Comprehensive neonatal ventilation guide covering surfactant therapy, CPAP for RDS, gentle ventilation strategies, and HFOV for NPS exam preparation.',
    division: 'nps',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Neonatal Ventilation: Complete Guide</h2>
<p>Neonatal respiratory care requires specialized knowledge due to the unique physiology of premature and newborn lungs. This guide covers the essential concepts tested on the NPS (Neonatal/Pediatric Specialty) exam.</p>

<h3>Respiratory Distress Syndrome (RDS)</h3>
<p>RDS, caused by surfactant deficiency, is the most common respiratory disorder in premature infants. Incidence increases with decreasing gestational age. Clinical features include tachypnea, nasal flaring, grunting, retractions, and cyanosis within the first few hours of life. Chest X-ray shows a diffuse reticulogranular (&ldquo;ground glass&rdquo;) pattern with air bronchograms.</p>

<h3>Surfactant Therapy</h3>
<p>Exogenous surfactant replacement is the cornerstone of RDS treatment:</p>
<ul>
<li><strong>Types:</strong> Natural surfactants (beractant/Survanta, calfactant/Infasurf, poractant alfa/Curosurf) are preferred over synthetic.</li>
<li><strong>Administration:</strong> Via ETT in divided doses with position changes. INSURE technique (Intubate, Surfactant, Extubate) and LISA (Less Invasive Surfactant Administration) via thin catheter during spontaneous breathing are current approaches.</li>
<li><strong>Timing:</strong> Early rescue treatment (within 2 hours of birth) is recommended over prophylactic therapy.</li>
<li><strong>Dosing:</strong> May require repeat doses every 6&ndash;12 hours if respiratory status does not improve.</li>
</ul>

<h3>CPAP for Neonates</h3>
<p>Nasal CPAP (nCPAP) is the preferred initial respiratory support for premature infants with RDS:</p>
<ul>
<li><strong>Starting pressure:</strong> 5&ndash;7 cmH2O, adjust based on clinical response.</li>
<li><strong>Interfaces:</strong> Binasal prongs (short or long) or nasal mask.</li>
<li><strong>Benefits:</strong> Maintains FRC, splints airways open, reduces work of breathing, and can reduce the need for intubation and mechanical ventilation.</li>
<li><strong>Bubble CPAP:</strong> The expiratory limb is submerged in water to the desired CPAP level. The bubbling creates oscillatory vibrations that may enhance gas exchange.</li>
</ul>

<h3>Gentle Ventilation Strategies</h3>
<p>The principle of gentle ventilation aims to minimize ventilator-induced lung injury (VILI) in neonates:</p>
<ul>
<li><strong>Volume-targeted ventilation:</strong> Preferred over pressure-limited modes. Target tidal volumes of 4&ndash;6 mL/kg.</li>
<li><strong>Permissive hypercapnia:</strong> Accept PaCO2 45&ndash;55 mmHg (or higher in some protocols) to allow lower ventilator settings.</li>
<li><strong>Minimal FiO2:</strong> Target SpO2 90&ndash;95% for preterm infants to reduce oxygen toxicity and retinopathy of prematurity risk.</li>
<li><strong>Early extubation:</strong> Extubate to nCPAP as early as possible to reduce duration of mechanical ventilation.</li>
</ul>

<h3>High-Frequency Oscillatory Ventilation (HFOV)</h3>
<p>HFOV delivers very small tidal volumes at very high rates (typically 8&ndash;15 Hz in neonates):</p>
<ul>
<li><strong>Mean airway pressure (MAP):</strong> Set 2&ndash;4 cmH2O above conventional MAP to optimize lung recruitment.</li>
<li><strong>Amplitude (delta P):</strong> Adjusted to achieve adequate chest wall vibration (&ldquo;chest wiggle&rdquo;).</li>
<li><strong>Oxygenation:</strong> Controlled by MAP and FiO2.</li>
<li><strong>Ventilation (CO2 removal):</strong> Controlled by amplitude and frequency. Decreasing frequency increases tidal volume and CO2 removal.</li>
<li><strong>Indications:</strong> RDS failing conventional ventilation, air leak syndromes, persistent pulmonary hypertension of the newborn (PPHN).</li>
</ul>

<h3>Other Neonatal Respiratory Conditions</h3>
<ul>
<li><strong>Transient tachypnea of the newborn (TTN):</strong> Retained fetal lung fluid, usually resolves within 24&ndash;72 hours. Supportive care with supplemental oxygen.</li>
<li><strong>Meconium aspiration syndrome (MAS):</strong> May require surfactant, mechanical ventilation, or ECMO in severe cases. Suctioning at birth is no longer routine for vigorous infants.</li>
<li><strong>Bronchopulmonary dysplasia (BPD):</strong> Chronic lung disease of prematurity from prolonged ventilation and oxygen exposure. Prevention through gentle ventilation is key.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/neonatal-ventilation">Neonatal Ventilation Cheat Sheet</a></li>
<li><a href="/glossary/neonatal">Neonatal Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'pediatric-airway-management',
    type: 'TOPIC' as const,
    title: 'Pediatric Airway Management Guide',
    description: 'Complete guide to pediatric airway management including anatomical differences, ETT sizing, croup management, and epiglottitis for NPS exam preparation.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Pediatric Airway Management Guide</h2>
<p>Pediatric airway management requires understanding the critical anatomical and physiological differences between children and adults. These differences affect equipment selection, technique, and clinical decision-making. This is a core topic on the NPS exam.</p>

<h3>Anatomical Differences: Pediatric vs. Adult Airway</h3>
<table>
<thead><tr><th>Feature</th><th>Pediatric</th><th>Adult</th></tr></thead>
<tbody>
<tr><td>Head</td><td>Large occiput, natural sniffing position</td><td>Requires positioning</td></tr>
<tr><td>Tongue</td><td>Relatively large</td><td>Proportional</td></tr>
<tr><td>Epiglottis</td><td>Omega-shaped, floppy, angled</td><td>Flat, flexible</td></tr>
<tr><td>Larynx position</td><td>Higher (C3&ndash;C4)</td><td>Lower (C4&ndash;C6)</td></tr>
<tr><td>Narrowest point</td><td>Cricoid ring (subglottic, &lt;8 years)</td><td>Vocal cords (glottic)</td></tr>
<tr><td>Airway shape</td><td>Funnel-shaped</td><td>Cylindrical</td></tr>
</tbody>
</table>

<h3>ETT Sizing for Pediatrics</h3>
<p>Uncuffed ETT (traditionally used in children &lt;8 years, though cuffed tubes are now increasingly accepted):</p>
<p><strong>Formula:</strong> ETT size (mm ID) = (Age in years / 4) + 4</p>
<p><strong>Cuffed ETT:</strong> ETT size (mm ID) = (Age in years / 4) + 3.5</p>
<p><strong>Depth of insertion (oral):</strong> ETT ID &times; 3 (e.g., 4.0 mm tube inserted to 12 cm at the lip)</p>

<h4>ETT Sizing Reference</h4>
<table>
<thead><tr><th>Age</th><th>Uncuffed ETT (mm)</th><th>Cuffed ETT (mm)</th></tr></thead>
<tbody>
<tr><td>Premature neonate</td><td>2.5&ndash;3.0</td><td>Not typically used</td></tr>
<tr><td>Term neonate</td><td>3.0&ndash;3.5</td><td>3.0</td></tr>
<tr><td>6 months</td><td>3.5</td><td>3.0</td></tr>
<tr><td>1 year</td><td>4.0</td><td>3.5</td></tr>
<tr><td>2 years</td><td>4.5</td><td>4.0</td></tr>
<tr><td>4 years</td><td>5.0</td><td>4.5</td></tr>
<tr><td>8 years</td><td>6.0</td><td>5.5</td></tr>
</tbody>
</table>

<h3>Croup (Laryngotracheobronchitis)</h3>
<p>Croup is the most common cause of upper airway obstruction in children aged 6 months to 6 years. It is caused by viral infection (most commonly parainfluenza virus) leading to subglottic edema.</p>
<ul>
<li><strong>Symptoms:</strong> Barking cough, inspiratory stridor, hoarseness, low-grade fever. Symptoms typically worse at night.</li>
<li><strong>CXR finding:</strong> Steeple sign (subglottic narrowing).</li>
<li><strong>Treatment:</strong>
  <ul>
  <li>Mild: Cool mist therapy, oral dexamethasone (0.6 mg/kg single dose).</li>
  <li>Moderate-Severe: Nebulized racemic epinephrine (0.5 mL of 2.25% solution diluted in 3 mL NS) + dexamethasone. Observe for at least 2&ndash;4 hours after racemic epinephrine for rebound symptoms.</li>
  </ul>
</li>
</ul>

<h3>Epiglottitis</h3>
<p>Epiglottitis is a life-threatening infection causing rapid swelling of the epiglottis and supraglottic structures. Less common since Hib vaccination but can still occur.</p>
<ul>
<li><strong>Symptoms:</strong> Rapid onset, high fever, drooling, dysphagia, muffled voice, tripod positioning.</li>
<li><strong>CXR finding:</strong> Thumb sign (swollen epiglottis on lateral neck film).</li>
<li><strong>Management:</strong> Do NOT attempt to visualize the airway or agitate the child. Keep the child calm, prepare for emergency airway management in the OR with anesthesia and surgical backup. IV antibiotics once the airway is secured.</li>
</ul>

<h3>Pediatric Resuscitation Airway Pearls</h3>
<ul>
<li>Use a straight (Miller) laryngoscope blade for infants to lift the large, floppy epiglottis.</li>
<li>A shoulder roll may be needed in infants to align the airway axes due to the large occiput.</li>
<li>Children desaturate faster than adults due to higher metabolic rate and lower FRC relative to body weight.</li>
<li>Always have one size larger and one size smaller ETT available.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/pediatric-airway">Pediatric Airway Cheat Sheet</a></li>
<li><a href="/glossary/pediatric">Pediatric Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'adult-critical-care-algorithms',
    type: 'TOPIC' as const,
    title: 'Adult Critical Care Algorithms for RTs',
    description: 'Essential adult critical care algorithms for respiratory therapists including ARDS management, sepsis bundles, and liberation from mechanical ventilation for ACCS exam prep.',
    division: 'accs',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Adult Critical Care Algorithms for RTs</h2>
<p>Adult critical care respiratory therapy requires mastery of evidence-based protocols and algorithms. These standardized approaches improve patient outcomes and are heavily tested on the ACCS (Adult Critical Care Specialty) exam.</p>

<h3>ARDS Management: The ARDSNet Protocol</h3>
<p>Acute Respiratory Distress Syndrome (ARDS) is defined by the Berlin criteria:</p>
<ul>
<li><strong>Timing:</strong> Acute onset within 1 week of a known clinical insult.</li>
<li><strong>Imaging:</strong> Bilateral opacities not fully explained by effusions, atelectasis, or nodules.</li>
<li><strong>Origin:</strong> Not fully explained by cardiac failure or fluid overload.</li>
<li><strong>Oxygenation (with PEEP &ge;5 cmH2O):</strong>
  <ul>
  <li>Mild: PaO2/FiO2 200&ndash;300 mmHg</li>
  <li>Moderate: PaO2/FiO2 100&ndash;200 mmHg</li>
  <li>Severe: PaO2/FiO2 &le;100 mmHg</li>
  </ul>
</li>
</ul>

<h4>ARDSNet Ventilation Strategy</h4>
<ul>
<li><strong>Mode:</strong> Volume-controlled assist-control.</li>
<li><strong>Tidal volume:</strong> 4&ndash;8 mL/kg <strong>predicted body weight</strong> (PBW), targeting 6 mL/kg.</li>
<li><strong>Plateau pressure:</strong> Maintain &le;30 cmH2O.</li>
<li><strong>PEEP:</strong> Titrate using the ARDSNet PEEP/FiO2 table.</li>
<li><strong>Driving pressure:</strong> Target &lt;15 cmH2O (Plateau pressure minus PEEP).</li>
<li><strong>pH goal:</strong> 7.30&ndash;7.45. Permissive hypercapnia is acceptable.</li>
<li><strong>Oxygenation goal:</strong> PaO2 55&ndash;80 mmHg or SpO2 88&ndash;95%.</li>
</ul>

<h4>Predicted Body Weight Calculation</h4>
<ul>
<li>Males: PBW (kg) = 50 + 2.3 &times; (height in inches &minus; 60)</li>
<li>Females: PBW (kg) = 45.5 + 2.3 &times; (height in inches &minus; 60)</li>
</ul>

<h3>Prone Positioning</h3>
<p>Prone positioning for &ge;16 hours per day is recommended for moderate-to-severe ARDS (PaO2/FiO2 &lt;150). It improves oxygenation by redistributing perfusion to ventilated lung regions and has demonstrated a mortality benefit.</p>

<h3>Liberation from Mechanical Ventilation</h3>
<h4>Readiness Screening Criteria</h4>
<ul>
<li>Resolution or improvement of the underlying condition</li>
<li>Adequate oxygenation: PaO2/FiO2 &ge;150 (or SpO2 &ge;90% on FiO2 &le;0.40 and PEEP &le;8)</li>
<li>Hemodynamic stability (no or low-dose vasopressors)</li>
<li>Patient able to initiate spontaneous breaths</li>
</ul>

<h4>Spontaneous Breathing Trial (SBT)</h4>
<p>Performed using T-piece or low-level PSV (5&ndash;8 cmH2O) for 30&ndash;120 minutes:</p>
<ul>
<li><strong>Success criteria:</strong> RR &lt;35/min, SpO2 &ge;90%, HR &lt;140 bpm, no signs of distress, stable blood pressure.</li>
<li><strong>Rapid Shallow Breathing Index (RSBI):</strong> f/Vt &lt;105 predicts successful extubation. Measured during 1&ndash;2 minutes of unassisted breathing.</li>
<li><strong>Failure criteria:</strong> Tachypnea, tachycardia, diaphoresis, accessory muscle use, agitation, desaturation.</li>
</ul>

<h3>Sepsis Bundle (Surviving Sepsis Campaign)</h3>
<p>RTs should be familiar with the time-sensitive sepsis interventions:</p>
<ul>
<li><strong>Hour 1 Bundle:</strong> Measure lactate, obtain blood cultures, administer broad-spectrum antibiotics, begin fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate &ge;4), apply vasopressors if hypotensive during or after fluid resuscitation.</li>
<li><strong>RT-specific role:</strong> Airway management, mechanical ventilation optimization, ABG monitoring, medication delivery via nebulizer or MDI.</li>
</ul>

<h3>Neuromuscular Blockade in ARDS</h3>
<p>Consider early neuromuscular blockade (cisatracurium) for severe ARDS (PaO2/FiO2 &lt;150) within the first 48 hours to improve chest wall compliance and reduce oxygen consumption. Always ensure adequate sedation before and during paralysis.</p>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/ards-management">ARDS Management Cheat Sheet</a></li>
<li><a href="/glossary/critical-care">Critical Care Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'sleep-study-scoring-guide',
    type: 'TOPIC' as const,
    title: 'Sleep Study Scoring: Complete Guide',
    description: 'Master polysomnography scoring including sleep stages, respiratory events, AHI interpretation, and scoring rules for the SDS exam.',
    division: 'sds',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Sleep Study Scoring: Complete Guide</h2>
<p>Polysomnography (PSG) scoring is the foundation of sleep medicine and a core competency for the Sleep Disorders Specialty (SDS) exam. This guide covers sleep staging, respiratory event scoring, and clinical interpretation following AASM (American Academy of Sleep Medicine) guidelines.</p>

<h3>PSG Montage Components</h3>
<ul>
<li><strong>EEG:</strong> Electroencephalogram &mdash; records brain wave activity for sleep staging.</li>
<li><strong>EOG:</strong> Electrooculogram &mdash; records eye movements (REMs distinguish REM sleep).</li>
<li><strong>EMG:</strong> Electromyogram &mdash; chin EMG for muscle tone (atonia in REM), leg EMG for limb movements.</li>
<li><strong>Airflow:</strong> Nasal pressure transducer (primary for hypopneas) and oronasal thermal sensor (primary for apneas).</li>
<li><strong>Respiratory effort:</strong> Thoracic and abdominal respiratory inductance plethysmography (RIP) belts.</li>
<li><strong>SpO2:</strong> Pulse oximetry for oxygen desaturation events.</li>
<li><strong>ECG:</strong> Cardiac rhythm monitoring.</li>
<li><strong>Body position:</strong> Supine vs. lateral.</li>
</ul>

<h3>Sleep Staging (AASM Rules)</h3>
<table>
<thead><tr><th>Stage</th><th>EEG Characteristics</th><th>Key Features</th></tr></thead>
<tbody>
<tr><td>Wake (W)</td><td>Alpha rhythm (8&ndash;13 Hz) with eyes closed, low-voltage mixed frequency with eyes open</td><td>Eye blinks, reading eye movements, high chin EMG tone</td></tr>
<tr><td>N1</td><td>Low-voltage mixed frequency, theta waves (4&ndash;7 Hz), vertex sharp waves</td><td>Slow eye movements, reduced EMG tone</td></tr>
<tr><td>N2</td><td>Sleep spindles (12&ndash;14 Hz bursts &ge;0.5 sec) and K-complexes</td><td>No eye movements, further reduced EMG</td></tr>
<tr><td>N3 (Deep Sleep)</td><td>Delta waves (0.5&ndash;2 Hz, &ge;75 &mu;V) in &ge;20% of the epoch</td><td>Slow-wave sleep, most restorative stage</td></tr>
<tr><td>REM (R)</td><td>Low-voltage mixed frequency, sawtooth waves</td><td>Rapid eye movements, EMG atonia (lowest chin tone)</td></tr>
</tbody>
</table>
<p>Each epoch is 30 seconds. Score the stage that occupies the majority of the epoch.</p>

<h3>Respiratory Event Scoring</h3>
<h4>Apnea</h4>
<p>A drop in airflow amplitude by &ge;90% from baseline lasting &ge;10 seconds (adults).</p>
<ul>
<li><strong>Obstructive apnea:</strong> Absent airflow with continued respiratory effort (thoracic/abdominal movement present).</li>
<li><strong>Central apnea:</strong> Absent airflow with absent respiratory effort.</li>
<li><strong>Mixed apnea:</strong> Begins as central (no effort), then effort resumes while obstruction continues.</li>
</ul>

<h4>Hypopnea</h4>
<p>A drop in airflow amplitude by &ge;30% from baseline lasting &ge;10 seconds, associated with either a &ge;3% oxygen desaturation or an arousal (recommended AASM rule).</p>

<h4>Respiratory Effort-Related Arousal (RERA)</h4>
<p>A sequence of breaths lasting &ge;10 seconds with increasing respiratory effort or flattening of the nasal pressure waveform, leading to an arousal that does not meet criteria for apnea or hypopnea.</p>

<h3>AHI Interpretation</h3>
<p>The Apnea-Hypopnea Index (AHI) is the number of apneas and hypopneas per hour of sleep:</p>
<table>
<thead><tr><th>AHI</th><th>Severity</th></tr></thead>
<tbody>
<tr><td>&lt;5 events/hr</td><td>Normal</td></tr>
<tr><td>5&ndash;14 events/hr</td><td>Mild OSA</td></tr>
<tr><td>15&ndash;29 events/hr</td><td>Moderate OSA</td></tr>
<tr><td>&ge;30 events/hr</td><td>Severe OSA</td></tr>
</tbody>
</table>
<p>The Respiratory Disturbance Index (RDI) includes apneas, hypopneas, and RERAs per hour of sleep.</p>

<h3>Arousal Scoring</h3>
<p>An arousal is an abrupt shift in EEG frequency (alpha, theta, or frequency &gt;16 Hz) lasting &ge;3 seconds, with at least 10 seconds of stable sleep preceding the event. During REM sleep, a concurrent increase in chin EMG is required.</p>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">SDS Exam Guide</a></li>
<li><a href="/cheat-sheets/sleep-scoring">Sleep Scoring Cheat Sheet</a></li>
<li><a href="/glossary/sleep-medicine">Sleep Medicine Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'pap-therapy-guide',
    type: 'TOPIC' as const,
    title: 'PAP Therapy: CPAP and BiPAP Guide',
    description: 'Complete guide to positive airway pressure therapy including CPAP, BiPAP, ASV, and auto-titrating devices for sleep-disordered breathing. Essential for SDS exam prep.',
    division: 'sds',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>PAP Therapy: CPAP and BiPAP Guide</h2>
<p>Positive airway pressure (PAP) therapy is the gold standard treatment for obstructive sleep apnea (OSA). Understanding PAP devices, titration protocols, and troubleshooting is essential for the SDS exam and clinical practice.</p>

<h3>CPAP (Continuous Positive Airway Pressure)</h3>
<p>CPAP delivers a single, constant level of positive pressure throughout the respiratory cycle. It acts as a pneumatic splint to maintain upper airway patency during sleep.</p>
<ul>
<li><strong>Mechanism:</strong> Prevents pharyngeal collapse by maintaining positive transmural pressure across the upper airway.</li>
<li><strong>Typical starting pressure:</strong> 4&ndash;20 cmH2O (determined by titration study).</li>
<li><strong>Primary indication:</strong> Obstructive sleep apnea.</li>
</ul>

<h3>BiPAP (Bilevel Positive Airway Pressure)</h3>
<p>BiPAP delivers two levels of pressure: a higher pressure during inspiration (IPAP) and a lower pressure during expiration (EPAP).</p>
<ul>
<li><strong>IPAP:</strong> Inspiratory Positive Airway Pressure &mdash; augments ventilation, reduces work of breathing.</li>
<li><strong>EPAP:</strong> Expiratory Positive Airway Pressure &mdash; maintains airway patency (equivalent to CPAP/PEEP).</li>
<li><strong>Pressure Support:</strong> The difference between IPAP and EPAP (PS = IPAP &minus; EPAP) determines the level of ventilatory support.</li>
</ul>

<h4>Indications for BiPAP over CPAP</h4>
<ul>
<li>CPAP intolerance (difficulty exhaling against high pressure)</li>
<li>Obesity hypoventilation syndrome (OHS)</li>
<li>Central sleep apnea or complex sleep apnea</li>
<li>Chronic hypoventilation (neuromuscular disease, restrictive thoracic disorders)</li>
<li>Overlap syndrome (COPD + OSA)</li>
</ul>

<h3>Auto-Titrating PAP (APAP)</h3>
<p>APAP devices automatically adjust pressure within a set range based on real-time detection of airway events (snoring, flow limitation, apneas, hypopneas). They are useful when:</p>
<ul>
<li>In-laboratory titration is not available or practical.</li>
<li>Patients have positional or REM-related OSA with varying pressure needs.</li>
<li>APAP data can guide fixed CPAP pressure setting (use the 90th or 95th percentile pressure).</li>
</ul>

<h3>Adaptive Servo-Ventilation (ASV)</h3>
<p>ASV is designed for central and complex sleep apnea. It monitors the patient's breathing pattern and provides variable pressure support to stabilize ventilation. It delivers a backup rate when central apneas are detected.</p>
<p><strong>Contraindication:</strong> ASV is contraindicated in patients with heart failure with reduced ejection fraction (LVEF &le;45%) due to increased mortality risk demonstrated in the SERVE-HF trial.</p>

<h3>PAP Titration Protocol</h3>
<p>During an in-laboratory CPAP/BiPAP titration:</p>
<ol>
<li>Start CPAP at 4 cmH2O (or IPAP 8 / EPAP 4 for BiPAP).</li>
<li>Increase pressure by 1 cmH2O at intervals of &ge;5 minutes in response to obstructive apneas, hypopneas, snoring, or RERAs.</li>
<li>Target: elimination of respiratory events in all sleep stages and body positions.</li>
<li>An optimal titration reduces AHI to &lt;5 events/hr, including supine REM sleep.</li>
</ol>

<h3>PAP Adherence and Troubleshooting</h3>
<p>Adherence is defined as use &ge;4 hours per night for &ge;70% of nights. Common issues and solutions:</p>
<table>
<thead><tr><th>Problem</th><th>Solution</th></tr></thead>
<tbody>
<tr><td>Mask leak</td><td>Refit mask, try different style/size</td></tr>
<tr><td>Nasal congestion</td><td>Add heated humidification, nasal saline, consider nasal steroids</td></tr>
<tr><td>Aerophagia (air swallowing)</td><td>Lower pressure, try BiPAP, check mask fit</td></tr>
<tr><td>Claustrophobia</td><td>Try nasal pillows or a minimal-contact mask</td></tr>
<tr><td>Pressure intolerance</td><td>Use ramp feature, EPR (expiratory pressure relief), or switch to BiPAP</td></tr>
<tr><td>Mouth leak</td><td>Add chin strap or switch to full-face mask</td></tr>
</tbody>
</table>

<h3>Mask Types</h3>
<ul>
<li><strong>Nasal pillows:</strong> Minimal contact, good for claustrophobia. Not ideal for high pressures or mouth breathing.</li>
<li><strong>Nasal mask:</strong> Covers the nose. Good balance of seal and comfort.</li>
<li><strong>Full-face mask:</strong> Covers nose and mouth. Required for mouth breathers, used with higher pressures.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">SDS Exam Guide</a></li>
<li><a href="/cheat-sheets/pap-therapy">PAP Therapy Cheat Sheet</a></li>
<li><a href="/glossary/sleep-medicine">Sleep Medicine Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'bronchial-challenge-testing',
    type: 'TOPIC' as const,
    title: 'Bronchial Challenge Testing Guide',
    description: 'Comprehensive guide to bronchial provocation testing including methacholine challenge, exercise challenge, and mannitol testing for RPFT exam preparation.',
    division: 'rpft',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Bronchial Challenge Testing Guide</h2>
<p>Bronchial challenge testing (bronchoprovocation) is used to assess airway hyperresponsiveness (AHR) when asthma is suspected but baseline spirometry is normal. This is a key topic for the RPFT (Registered Pulmonary Function Technologist) exam.</p>

<h3>Indications</h3>
<ul>
<li>Suspected asthma with normal baseline spirometry</li>
<li>Chronic cough evaluation</li>
<li>Occupational asthma assessment</li>
<li>Pre-employment or fitness-for-duty screening</li>
<li>Evaluating response to therapy</li>
</ul>

<h3>Contraindications</h3>
<ul>
<li>Severe airflow obstruction (FEV1 &lt;60% predicted or &lt;1.5 L)</li>
<li>Recent myocardial infarction or stroke (within 3 months)</li>
<li>Uncontrolled hypertension (systolic &gt;200 or diastolic &gt;100 mmHg)</li>
<li>Known aortic aneurysm</li>
<li>Inability to perform acceptable spirometry</li>
</ul>

<h3>Methacholine Challenge Test</h3>
<p>Methacholine is a direct-acting cholinergic agonist that causes bronchoconstriction in individuals with airway hyperresponsiveness.</p>

<h4>Protocol</h4>
<ol>
<li>Obtain baseline spirometry (must meet ATS/ERS quality criteria).</li>
<li>Administer increasing concentrations of methacholine via nebulizer using a dosimeter or tidal breathing protocol.</li>
<li>Measure FEV1 after each dose at 30 and 90 seconds.</li>
<li>Continue until FEV1 drops &ge;20% from baseline or the highest concentration is reached.</li>
<li>Administer a bronchodilator (albuterol) after the test to reverse bronchoconstriction.</li>
</ol>

<h4>Interpretation</h4>
<p>The PC20 (provocative concentration causing a 20% decline in FEV1) is the primary outcome:</p>
<table>
<thead><tr><th>PC20 (mg/mL)</th><th>Interpretation</th></tr></thead>
<tbody>
<tr><td>&lt;1</td><td>Positive &mdash; moderate to severe AHR</td></tr>
<tr><td>1&ndash;4</td><td>Positive &mdash; mild AHR (borderline with clinical significance)</td></tr>
<tr><td>4&ndash;16</td><td>Borderline AHR</td></tr>
<tr><td>&gt;16</td><td>Negative &mdash; normal airway responsiveness</td></tr>
</tbody>
</table>
<p>A negative methacholine challenge test has high negative predictive value and effectively rules out current asthma.</p>

<h3>Exercise Challenge Testing</h3>
<p>Exercise-induced bronchoconstriction (EIB) is assessed using a standardized exercise protocol:</p>
<ul>
<li><strong>Protocol:</strong> 6&ndash;8 minutes of vigorous exercise (treadmill or cycle) at 80&ndash;90% of predicted maximum heart rate, breathing dry air.</li>
<li><strong>Measure FEV1:</strong> At 5, 10, 15, 20, and 30 minutes post-exercise.</li>
<li><strong>Positive result:</strong> FEV1 decline &ge;10% from baseline (ATS criterion; some use &ge;15%).</li>
<li><strong>Clinical relevance:</strong> Used to diagnose EIB, common in athletes and children.</li>
</ul>

<h3>Eucapnic Voluntary Hyperventilation (EVH)</h3>
<p>An indirect challenge test that simulates the airway drying effect of exercise. The subject breathes dry gas containing 5% CO2 at a target ventilation of 85% of MVV for 6 minutes. FEV1 drop &ge;10% is considered positive. Widely used in screening athletes.</p>

<h3>Mannitol Challenge</h3>
<p>Mannitol is an osmotic challenge agent administered via dry powder inhaler in escalating doses. A positive result is a cumulative dose causing a &ge;15% fall in FEV1 (PD15). It is an indirect test, more specific but less sensitive than methacholine for asthma.</p>

<h3>Medication Withholding</h3>
<p>Patients should withhold medications that may affect results:</p>
<ul>
<li>SABA: 8 hours</li>
<li>LABA: 24&ndash;48 hours</li>
<li>Ipratropium: 24 hours</li>
<li>Caffeine: Day of test</li>
<li>Leukotriene modifiers: 24 hours</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">RPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/bronchial-challenge">Bronchial Challenge Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'diffusion-capacity-dlco',
    type: 'TOPIC' as const,
    title: 'Diffusion Capacity (DLCO) Testing Guide',
    description: 'Complete guide to DLCO testing including technique, interpretation, adjustments, and clinical significance for CPFT and RPFT exam preparation.',
    division: 'cpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Diffusion Capacity (DLCO) Testing Guide</h2>
<p>The diffusing capacity of the lung for carbon monoxide (DLCO) measures the ability of gas to transfer from the alveoli into the pulmonary capillary blood. It is one of the most clinically important pulmonary function tests and a major topic on both CPFT and RPFT exams.</p>

<h3>Principle of the Test</h3>
<p>The single-breath DLCO method is the most common technique. The patient inhales a gas mixture containing a low concentration of carbon monoxide (0.3%) and a tracer gas (helium or methane), holds their breath for approximately 10 seconds, and then exhales. The difference between the inspired and expired CO concentration, adjusted for the breath-hold time and alveolar volume, provides the DLCO measurement.</p>

<h3>Normal Values</h3>
<p>DLCO is reported as a percentage of the predicted value based on age, sex, height, and hemoglobin. Normal DLCO is <strong>75&ndash;140% of predicted</strong>.</p>
<table>
<thead><tr><th>DLCO % Predicted</th><th>Interpretation</th></tr></thead>
<tbody>
<tr><td>&gt;140%</td><td>Above normal (consider polycythemia, left-to-right shunt, pulmonary hemorrhage)</td></tr>
<tr><td>75&ndash;140%</td><td>Normal</td></tr>
<tr><td>60&ndash;74%</td><td>Mildly reduced</td></tr>
<tr><td>40&ndash;59%</td><td>Moderately reduced</td></tr>
<tr><td>&lt;40%</td><td>Severely reduced</td></tr>
</tbody>
</table>

<h3>Conditions That Decrease DLCO</h3>
<ul>
<li><strong>Emphysema:</strong> Destruction of alveolar-capillary membrane reduces surface area. DLCO is reduced even with relatively preserved spirometry, making it valuable for distinguishing emphysema from chronic bronchitis.</li>
<li><strong>Interstitial lung disease (ILD):</strong> Fibrosis thickens the alveolar-capillary membrane, impeding gas transfer.</li>
<li><strong>Pulmonary vascular disease:</strong> Pulmonary embolism and pulmonary hypertension reduce capillary blood volume.</li>
<li><strong>Anemia:</strong> Reduced hemoglobin decreases CO uptake. DLCO must be corrected for hemoglobin (see below).</li>
<li><strong>Pneumonectomy / lobectomy:</strong> Reduced lung volume and surface area.</li>
</ul>

<h3>Conditions That Increase DLCO</h3>
<ul>
<li><strong>Polycythemia:</strong> Increased hemoglobin enhances CO uptake.</li>
<li><strong>Pulmonary hemorrhage:</strong> Blood in the alveoli absorbs CO (e.g., Goodpasture syndrome).</li>
<li><strong>Left-to-right intracardiac shunt:</strong> Increased pulmonary blood flow.</li>
<li><strong>Asthma:</strong> Can be normal or mildly increased.</li>
<li><strong>Obesity:</strong> Increased pulmonary blood volume.</li>
<li><strong>Exercise:</strong> Increased cardiac output and capillary recruitment.</li>
</ul>

<h3>Hemoglobin Adjustment</h3>
<p>DLCO must be corrected for hemoglobin because CO binds to hemoglobin. Anemia falsely lowers DLCO, while polycythemia falsely elevates it. The correction formula adjusts the measured DLCO to what it would be at a standard hemoglobin level.</p>

<h3>Altitude and COHb Adjustments</h3>
<ul>
<li><strong>Altitude:</strong> Higher altitude increases DLCO due to increased alveolar volume and gas expansion. Adjustment is required at elevations above 1500 meters.</li>
<li><strong>Carboxyhemoglobin (COHb):</strong> Elevated COHb (from smoking or CO exposure) reduces measured DLCO by competing with the test gas. Smokers should abstain for at least 12 hours before testing.</li>
</ul>

<h3>Quality Control</h3>
<ul>
<li>Inspired volume (VI) should be &ge;85% of the largest known VC.</li>
<li>Breath-hold time should be 8&ndash;12 seconds.</li>
<li>Two acceptable tests should be within 2 mL/min/mmHg or 10% of each other.</li>
<li>Report the average of acceptable, repeatable tests.</li>
</ul>

<h3>Clinical Significance</h3>
<p>DLCO is essential for differentiating obstructive diseases: emphysema (low DLCO) vs. asthma and chronic bronchitis (normal DLCO). In restrictive diseases, DLCO helps distinguish parenchymal restriction (ILD, low DLCO) from extraparenchymal restriction (neuromuscular, normal DLCO).</p>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">CPFT Exam Guide</a></li>
<li><a href="/guides/nbrc-rpft-exam-guide">RPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/dlco">DLCO Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'exercise-testing-cardiopulmonary',
    type: 'TOPIC' as const,
    title: 'Cardiopulmonary Exercise Testing Guide',
    description: 'Comprehensive guide to cardiopulmonary exercise testing (CPET) including protocols, key measurements, interpretation, and clinical applications for RPFT exam prep.',
    division: 'rpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Cardiopulmonary Exercise Testing Guide</h2>
<p>Cardiopulmonary exercise testing (CPET) is an integrated assessment of the cardiovascular, respiratory, and metabolic systems during exercise. It provides objective data about exercise capacity, helps identify the cause of exercise limitation, and is a key topic on the RPFT exam.</p>

<h3>Indications</h3>
<ul>
<li>Unexplained dyspnea on exertion</li>
<li>Evaluation of exercise intolerance</li>
<li>Pre-operative risk assessment (especially lung resection surgery)</li>
<li>Disability evaluation</li>
<li>Exercise prescription for pulmonary rehabilitation</li>
<li>Assessment of treatment response</li>
</ul>

<h3>Contraindications</h3>
<ul>
<li>Unstable angina or recent MI (within 3&ndash;5 days)</li>
<li>Uncontrolled arrhythmias</li>
<li>Symptomatic severe aortic stenosis</li>
<li>Acute pulmonary embolism or DVT</li>
<li>Acute myocarditis or pericarditis</li>
<li>Uncontrolled heart failure</li>
<li>SpO2 &lt;85% at rest on room air</li>
</ul>

<h3>Protocols</h3>
<h4>Incremental Cycle Ergometry</h4>
<p>The most common CPET protocol. Work rate increases by a constant increment each minute (typically 10&ndash;25 watts/min depending on the patient's estimated capacity). The goal is to reach symptom-limited maximum in 8&ndash;12 minutes.</p>

<h4>Treadmill Protocols</h4>
<p>Bruce or modified Bruce protocols increase speed and grade at set intervals. Treadmill testing typically achieves a higher VO2max than cycling but is harder to quantify work rate precisely.</p>

<h4>6-Minute Walk Test (6MWT)</h4>
<p>A submaximal test measuring the distance walked in 6 minutes on a flat surface. Simpler than full CPET but provides valuable functional data. Normal distance is 400&ndash;700 meters (age, sex, and height dependent). Monitor SpO2, heart rate, dyspnea, and fatigue before, during, and after the test.</p>

<h3>Key CPET Measurements</h3>
<table>
<thead><tr><th>Parameter</th><th>Definition</th><th>Clinical Significance</th></tr></thead>
<tbody>
<tr><td>VO2max / VO2peak</td><td>Maximum oxygen consumption</td><td>Gold standard measure of aerobic fitness. Normal &gt;84% predicted.</td></tr>
<tr><td>Anaerobic Threshold (AT)</td><td>Point where anaerobic metabolism supplements aerobic</td><td>Normally occurs at 40&ndash;60% of predicted VO2max. Early AT suggests cardiovascular limitation.</td></tr>
<tr><td>VE/VCO2 slope</td><td>Ventilatory efficiency (minute ventilation relative to CO2 output)</td><td>Elevated (&gt;34) in heart failure and pulmonary vascular disease.</td></tr>
<tr><td>Breathing Reserve</td><td>(MVV &minus; VEmax) / MVV &times; 100</td><td>Normal &gt;20%. Low breathing reserve indicates ventilatory limitation.</td></tr>
<tr><td>Heart Rate Reserve</td><td>Predicted max HR &minus; achieved max HR</td><td>Low reserve (achieving near-max HR) suggests cardiac limitation.</td></tr>
<tr><td>O2 Pulse</td><td>VO2 / Heart Rate</td><td>Reflects stroke volume. Plateau suggests cardiac limitation.</td></tr>
<tr><td>SpO2 during exercise</td><td>Oxygen saturation trend</td><td>Desaturation &ge;4% or to &lt;88% is significant.</td></tr>
</tbody>
</table>

<h3>Patterns of Exercise Limitation</h3>
<ul>
<li><strong>Cardiovascular:</strong> Reduced VO2max, early AT, low O2 pulse, achieved near-predicted max HR, normal breathing reserve.</li>
<li><strong>Pulmonary:</strong> Reduced VO2max, low breathing reserve (&lt;20%), possible desaturation, high VE/VCO2, heart rate reserve maintained.</li>
<li><strong>Deconditioning:</strong> Reduced VO2max, early AT, normal cardiovascular and pulmonary reserves, symptoms limited by peripheral fatigue.</li>
<li><strong>Pulmonary vascular:</strong> Reduced VO2max, elevated VE/VCO2, desaturation, low O2 pulse, widened P(A-a)O2 during exercise.</li>
</ul>

<h3>Stopping Criteria</h3>
<ul>
<li>Patient request (dyspnea, fatigue, chest pain, leg pain)</li>
<li>SpO2 &lt;80%</li>
<li>Significant arrhythmias or ischemic ECG changes</li>
<li>Systolic BP &gt;250 mmHg or drop &gt;20 mmHg from peak</li>
<li>Signs of inadequate perfusion (pallor, cyanosis, dizziness)</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">RPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/exercise-testing">Exercise Testing Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'respiratory-pharmacology-guide',
    type: 'TOPIC' as const,
    title: 'Respiratory Pharmacology: RT Drug Guide',
    description: 'Complete respiratory pharmacology guide covering bronchodilators, corticosteroids, mucolytics, and antimicrobials for NBRC exam preparation.',
    division: null,
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Respiratory Pharmacology: RT Drug Guide</h2>
<p>Respiratory pharmacology is one of the most heavily tested topics on the TMC exam. Respiratory therapists must understand drug classifications, mechanisms of action, dosing, routes of administration, and adverse effects for all major respiratory medications.</p>

<h3>Beta-2 Adrenergic Agonists (Bronchodilators)</h3>
<h4>Short-Acting Beta Agonists (SABA)</h4>
<table>
<thead><tr><th>Drug</th><th>Dose (SVN)</th><th>Dose (MDI)</th><th>Onset</th><th>Duration</th></tr></thead>
<tbody>
<tr><td>Albuterol</td><td>2.5 mg in 3 mL NS</td><td>2 puffs (90 mcg/puff)</td><td>5&ndash;15 min</td><td>4&ndash;6 hrs</td></tr>
<tr><td>Levalbuterol</td><td>0.63&ndash;1.25 mg</td><td>2 puffs (45 mcg/puff)</td><td>5&ndash;15 min</td><td>6&ndash;8 hrs</td></tr>
</tbody>
</table>
<p><strong>Mechanism:</strong> Stimulate beta-2 receptors on bronchial smooth muscle, causing relaxation and bronchodilation. Also stabilize mast cells and improve mucociliary clearance.</p>
<p><strong>Side effects:</strong> Tachycardia, tremor, hypokalemia, hyperglycemia.</p>

<h4>Long-Acting Beta Agonists (LABA)</h4>
<ul>
<li><strong>Salmeterol:</strong> Onset 15&ndash;30 min, duration 12 hours. Never used as a rescue inhaler.</li>
<li><strong>Formoterol:</strong> Onset 5 min, duration 12 hours. Rapid onset but still classified as a controller.</li>
</ul>
<p><strong>Important:</strong> LABAs should never be used as monotherapy in asthma; always paired with an ICS.</p>

<h3>Anticholinergic Bronchodilators</h3>
<table>
<thead><tr><th>Drug</th><th>Type</th><th>Dose</th><th>Duration</th></tr></thead>
<tbody>
<tr><td>Ipratropium bromide</td><td>SAMA</td><td>0.5 mg SVN / 2 puffs MDI</td><td>4&ndash;6 hrs</td></tr>
<tr><td>Tiotropium bromide</td><td>LAMA</td><td>1&ndash;2 capsules DPI daily</td><td>24 hrs</td></tr>
</tbody>
</table>
<p><strong>Mechanism:</strong> Block muscarinic (M3) receptors on bronchial smooth muscle, preventing acetylcholine-mediated bronchoconstriction. Particularly effective in COPD.</p>
<p><strong>Side effects:</strong> Dry mouth, urinary retention, blurred vision. Contraindicated in patients with narrow-angle glaucoma (nebulized form) and soy/peanut allergy (ipratropium MDI).</p>

<h3>Corticosteroids</h3>
<h4>Inhaled Corticosteroids (ICS)</h4>
<ul>
<li><strong>Drugs:</strong> Beclomethasone, budesonide, fluticasone, mometasone.</li>
<li><strong>Mechanism:</strong> Reduce airway inflammation, decrease mucus production, restore beta-receptor sensitivity.</li>
<li><strong>Onset:</strong> Not for acute relief; takes 1&ndash;2 weeks for full effect.</li>
<li><strong>Side effects:</strong> Oral candidiasis (thrush), dysphonia. Counsel patients to rinse mouth after use.</li>
</ul>

<h4>Systemic Corticosteroids</h4>
<ul>
<li><strong>Drugs:</strong> Prednisone (PO), methylprednisolone (IV), dexamethasone (PO/IV).</li>
<li><strong>Indications:</strong> Acute asthma exacerbations, COPD exacerbations, croup.</li>
<li><strong>Side effects (long-term):</strong> Immunosuppression, hyperglycemia, osteoporosis, adrenal suppression, weight gain.</li>
</ul>

<h3>Mucolytics and Mucokinetics</h3>
<ul>
<li><strong>N-acetylcysteine (Mucomyst):</strong> Breaks disulfide bonds in mucus glycoproteins. Also used as antidote for acetaminophen overdose. May cause bronchospasm; pre-treat with a bronchodilator.</li>
<li><strong>Dornase alfa (Pulmozyme):</strong> Recombinant DNase that cleaves extracellular DNA in purulent sputum. Indicated specifically for cystic fibrosis. Dose: 2.5 mg via SVN once daily.</li>
<li><strong>Hypertonic saline (3&ndash;7%):</strong> Osmotic mucolytic that draws water into the airway, improving mucociliary clearance. Used in cystic fibrosis and sputum induction.</li>
</ul>

<h3>Other Important Agents</h3>
<ul>
<li><strong>Racemic epinephrine:</strong> 0.5 mL of 2.25% solution in 3 mL NS. Used for laryngeal edema and croup. Stimulates alpha receptors causing vasoconstriction and reduced mucosal swelling.</li>
<li><strong>Surfactant:</strong> Beractant (Survanta), calfactant (Infasurf), poractant alfa (Curosurf). Used for neonatal RDS via ETT.</li>
<li><strong>Inhaled nitric oxide (iNO):</strong> Selective pulmonary vasodilator. Used for PPHN in neonates and refractory hypoxemia. Starting dose typically 20 ppm; wean gradually to avoid rebound pulmonary hypertension.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/pharmacology">Pharmacology Cheat Sheet</a></li>
<li><a href="/glossary/pharmacology">Pharmacology Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'infection-control-respiratory-therapy',
    type: 'TOPIC' as const,
    title: 'Infection Control in Respiratory Therapy',
    description: 'Essential infection control practices for respiratory therapists including standard precautions, transmission-based precautions, and equipment processing.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Infection Control in Respiratory Therapy</h2>
<p>Infection control is a fundamental responsibility for respiratory therapists. Proper practices protect both patients and healthcare workers from hospital-acquired infections (HAIs). This topic is tested on the TMC exam and is essential for safe clinical practice.</p>

<h3>Standard Precautions</h3>
<p>Standard precautions apply to ALL patients regardless of diagnosis or presumed infection status. They are based on the principle that all blood, body fluids, secretions, excretions (except sweat), non-intact skin, and mucous membranes may contain transmissible infectious agents.</p>
<ul>
<li><strong>Hand hygiene:</strong> The single most important infection control measure. Use alcohol-based hand rub or soap and water before and after patient contact, after removing gloves, and after contact with body fluids.</li>
<li><strong>Gloves:</strong> When touching blood, body fluids, mucous membranes, or non-intact skin.</li>
<li><strong>Gown:</strong> When clothing contact with body fluids is anticipated.</li>
<li><strong>Mask and eye protection:</strong> When splashing or spraying of body fluids is anticipated.</li>
<li><strong>Respiratory hygiene / cough etiquette:</strong> Cover coughs, offer masks to symptomatic patients in waiting areas.</li>
</ul>

<h3>Transmission-Based Precautions</h3>
<table>
<thead><tr><th>Type</th><th>PPE Required</th><th>Room</th><th>Example Diseases</th></tr></thead>
<tbody>
<tr><td>Contact</td><td>Gown and gloves</td><td>Private room preferred</td><td>MRSA, VRE, C. difficile, RSV</td></tr>
<tr><td>Droplet</td><td>Surgical mask within 3&ndash;6 feet</td><td>Private room preferred</td><td>Influenza, pertussis, bacterial meningitis</td></tr>
<tr><td>Airborne</td><td>N95 respirator (or PAPR)</td><td>Negative pressure room (AIIR)</td><td>Tuberculosis, measles, varicella, COVID-19 (aerosol-generating procedures)</td></tr>
</tbody>
</table>

<h3>Airborne Infection Isolation Room (AIIR)</h3>
<ul>
<li>Negative pressure relative to surrounding areas (&ge;2 Pascal difference).</li>
<li>Minimum 6 air changes per hour (ACH) for existing facilities; 12 ACH for new construction.</li>
<li>Air exhausted directly outside or filtered through HEPA before recirculation.</li>
<li>Door must remain closed except for entry and exit.</li>
</ul>

<h3>Ventilator-Associated Pneumonia (VAP) Prevention</h3>
<p>The VAP prevention bundle is a critical infection control measure in the ICU:</p>
<ul>
<li><strong>Elevate the head of bed</strong> 30&ndash;45 degrees.</li>
<li><strong>Daily sedation vacations</strong> and assess readiness to extubate.</li>
<li><strong>Peptic ulcer prophylaxis</strong> (per institutional protocol).</li>
<li><strong>DVT prophylaxis.</strong></li>
<li><strong>Oral care</strong> with chlorhexidine.</li>
<li><strong>Avoid unplanned extubation and reintubation.</strong></li>
<li><strong>Maintain ETT cuff pressure</strong> at 20&ndash;30 cmH2O.</li>
<li><strong>Drain subglottic secretions</strong> using ETTs with subglottic suction ports.</li>
</ul>

<h3>Equipment Processing</h3>
<table>
<thead><tr><th>Level</th><th>Definition</th><th>Application</th></tr></thead>
<tbody>
<tr><td>Cleaning</td><td>Removal of visible organic material</td><td>All equipment, always done first</td></tr>
<tr><td>Low-level disinfection</td><td>Kills most bacteria, some viruses and fungi</td><td>Non-critical items (stethoscopes, pulse oximeters)</td></tr>
<tr><td>High-level disinfection</td><td>Kills all organisms except high levels of bacterial spores</td><td>Semi-critical items (bronchoscopes, laryngoscope blades)</td></tr>
<tr><td>Sterilization</td><td>Kills all microorganisms including spores</td><td>Critical items (surgical instruments entering sterile tissue)</td></tr>
</tbody>
</table>

<h3>Respiratory Equipment Guidelines</h3>
<ul>
<li>Ventilator circuits should not be changed routinely more frequently than every 7 days unless visibly soiled.</li>
<li>Inline suction catheters should be changed per manufacturer recommendation.</li>
<li>HMEs should be changed every 24 hours or when visibly soiled.</li>
<li>Nebulizers should be cleaned, disinfected, rinsed with sterile water, and air-dried between treatments.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/infection-control">Infection Control Cheat Sheet</a></li>
<li><a href="/glossary/infection-control">Infection Control Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'humidity-aerosol-therapy',
    type: 'TOPIC' as const,
    title: 'Humidity and Aerosol Therapy Guide',
    description: 'Complete guide to humidity and aerosol therapy including humidifier types, nebulizer systems, MDI technique, and aerosol physics for NBRC exam preparation.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Humidity and Aerosol Therapy Guide</h2>
<p>Humidity and aerosol therapy are core competencies for respiratory therapists. Understanding the physics of humidification, the types of devices, and proper aerosol delivery technique is essential for patient care and the TMC exam.</p>

<h3>Humidity Basics</h3>
<ul>
<li><strong>Absolute humidity:</strong> The actual water content in gas, measured in mg/L.</li>
<li><strong>Relative humidity:</strong> The ratio of actual water content to the maximum water content at a given temperature, expressed as a percentage.</li>
<li><strong>Body humidity (BTPS conditions):</strong> At body temperature (37&deg;C), gas is fully saturated at 100% relative humidity with an absolute humidity of 44 mg/L. This is the goal for inspired gas conditioning.</li>
<li><strong>Isothermic saturation boundary:</strong> The point in the airway (approximately the carina) where inspired gas reaches BTPS conditions. Bypassing the upper airway (ETT, tracheostomy) moves this boundary deeper, requiring artificial humidification.</li>
</ul>

<h3>Indications for Humidification</h3>
<ul>
<li>Delivery of dry medical gases at flows &ge;4 L/min</li>
<li>Bypassed upper airway (ETT, tracheostomy)</li>
<li>Treatment of hypothermia via warmed inspired gas</li>
<li>Thick or retained secretions</li>
</ul>

<h3>Humidifier Types</h3>
<table>
<thead><tr><th>Type</th><th>Output</th><th>Application</th></tr></thead>
<tbody>
<tr><td>Bubble humidifier (unheated)</td><td>10&ndash;20 mg/L (50% RH at ambient temp)</td><td>Low-flow nasal cannula, simple masks</td></tr>
<tr><td>Passover humidifier (heated)</td><td>33&ndash;44 mg/L (near 100% RH at 37&deg;C)</td><td>Mechanical ventilation circuits</td></tr>
<tr><td>Heat and moisture exchanger (HME)</td><td>22&ndash;33 mg/L</td><td>Short-term MV, transport</td></tr>
</tbody>
</table>

<h4>Heat and Moisture Exchanger (HME)</h4>
<p>Also called an artificial nose. Captures heat and moisture from exhaled gas and returns it during the next inspiration. Should provide at least 30 mg/L of moisture output.</p>
<ul>
<li><strong>Contraindications:</strong> Thick, copious secretions; large air leaks (bronchopleural fistula); low tidal volumes (added dead space may cause hypercapnia in neonates); hypothermia treatment.</li>
<li><strong>Change frequency:</strong> Every 24 hours or when soiled.</li>
</ul>

<h3>Aerosol Therapy</h3>
<p>Aerosol therapy delivers medications or bland aerosol (water or saline) to the respiratory tract. The effectiveness depends on particle size, deposition pattern, and delivery technique.</p>

<h4>Optimal Particle Size</h4>
<ul>
<li><strong>1&ndash;5 microns (MMAD):</strong> Optimal for lower airway deposition (target range for most inhaled medications).</li>
<li><strong>&gt;5 microns:</strong> Deposit in the upper airway and oropharynx.</li>
<li><strong>&lt;1 micron:</strong> Remain suspended and are exhaled without depositing.</li>
</ul>

<h3>Aerosol Delivery Devices</h3>
<h4>Small Volume Nebulizer (SVN)</h4>
<ul>
<li>Flow rate: 6&ndash;8 L/min; treatment time 10&ndash;15 minutes.</li>
<li>Fill volume: 3&ndash;5 mL optimal to minimize dead volume waste.</li>
<li>Tidal breathing technique; does not require patient coordination.</li>
</ul>

<h4>Metered-Dose Inhaler (MDI)</h4>
<ul>
<li>Requires hand-breath coordination: actuate at the beginning of a slow, deep inspiration.</li>
<li>Use with a spacer/valved holding chamber (VHC) to improve deposition and reduce oropharyngeal impaction.</li>
<li>Shake before each actuation; prime if new or unused for several days.</li>
<li>Wait 30&ndash;60 seconds between puffs of the same medication.</li>
</ul>

<h4>Dry Powder Inhaler (DPI)</h4>
<ul>
<li>Breath-actuated; requires a fast, forceful inspiratory effort.</li>
<li>No spacer needed; no propellant; humidity can clump powder.</li>
<li>Not suitable for patients unable to generate adequate inspiratory flow (&ge;60 L/min for most DPIs).</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/aerosol-therapy">Aerosol Therapy Cheat Sheet</a></li>
<li><a href="/glossary/aerosol-therapy">Aerosol Therapy Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'bronchoscopy-indications-rt',
    type: 'TOPIC' as const,
    title: 'Bronchoscopy: Indications and RT Role',
    description: 'Guide to bronchoscopy for respiratory therapists covering indications, RT responsibilities, equipment setup, and patient monitoring during procedures.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Bronchoscopy: Indications and RT Role</h2>
<p>Bronchoscopy is a diagnostic and therapeutic procedure in which a flexible or rigid scope is inserted into the tracheobronchial tree. Respiratory therapists play an essential role in assisting with bronchoscopy, particularly in the ICU setting.</p>

<h3>Types of Bronchoscopy</h3>
<h4>Flexible Bronchoscopy</h4>
<p>The most common type, performed with a thin, flexible fiberoptic or video bronchoscope. Can be performed at the bedside, in the bronchoscopy suite, or in the operating room. The scope is typically 5&ndash;6 mm in diameter and can be passed through the nose, mouth, ETT, or tracheostomy tube.</p>

<h4>Rigid Bronchoscopy</h4>
<p>Performed under general anesthesia in the operating room. Provides a larger working channel for therapeutic interventions such as foreign body removal, massive hemoptysis control, stent placement, and tumor debulking.</p>

<h3>Diagnostic Indications</h3>
<ul>
<li>Evaluation of suspected lung cancer (visualize lesions, obtain biopsies)</li>
<li>Hemoptysis of unknown origin</li>
<li>Persistent unexplained cough</li>
<li>Suspected airway obstruction or stenosis</li>
<li>Evaluation of abnormal chest imaging</li>
<li>Bronchoalveolar lavage (BAL) for infection diagnosis (pneumonia, opportunistic infections in immunocompromised patients)</li>
<li>Assessment of airway injury (inhalation, trauma)</li>
</ul>

<h3>Therapeutic Indications</h3>
<ul>
<li>Foreign body removal</li>
<li>Mucus plug removal / therapeutic bronchial toileting</li>
<li>Difficult intubation (bronchoscope-guided intubation)</li>
<li>Percutaneous tracheostomy assistance</li>
<li>Airway stent placement</li>
<li>Control of bleeding (balloon tamponade, topical agents)</li>
<li>Treatment of atelectasis</li>
</ul>

<h3>RT Responsibilities</h3>
<h4>Pre-Procedure</h4>
<ul>
<li>Verify informed consent is documented.</li>
<li>Ensure patient NPO status (typically 6&ndash;8 hours for solids, 2 hours for clear liquids).</li>
<li>Set up equipment: light source, suction, bronchoscope, specimen traps, saline for lavage.</li>
<li>Prepare medications: topical anesthetic (lidocaine), sedation medications (as ordered).</li>
<li>Set up monitoring: continuous SpO2, ECG, blood pressure.</li>
<li>Pre-oxygenate the patient; ensure supplemental O2 is available.</li>
</ul>

<h4>During the Procedure</h4>
<ul>
<li>Monitor vital signs continuously: SpO2, heart rate, respiratory rate, blood pressure.</li>
<li>Administer supplemental oxygen as directed (nasal cannula around the scope or through the bronchoscope port).</li>
<li>Assist with suctioning and specimen collection.</li>
<li>If the patient is on a ventilator, manage ventilator settings: increase FiO2 to 100%, monitor for air leak around the scope, adjust alarms as appropriate.</li>
<li>Use a bronchoscopy adapter (swivel adapter) on the ETT to maintain ventilation while the scope is inserted.</li>
</ul>

<h4>Post-Procedure</h4>
<ul>
<li>Continue monitoring SpO2 and vital signs.</li>
<li>Keep NPO until gag reflex returns (typically 1&ndash;2 hours after topical anesthesia).</li>
<li>Assess for complications: bronchospasm, bleeding, pneumothorax, hypoxemia, laryngospasm.</li>
<li>Obtain post-procedure chest X-ray if transbronchial biopsy was performed (to rule out pneumothorax).</li>
</ul>

<h3>Complications</h3>
<ul>
<li>Hypoxemia (most common)</li>
<li>Bronchospasm</li>
<li>Bleeding (especially after biopsy)</li>
<li>Pneumothorax (after transbronchial biopsy)</li>
<li>Laryngospasm</li>
<li>Infection</li>
<li>Cardiac arrhythmias</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/bronchoscopy">Bronchoscopy Cheat Sheet</a></li>
<li><a href="/glossary/diagnostic-procedures">Diagnostic Procedures Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'chest-physiotherapy-techniques',
    type: 'TOPIC' as const,
    title: 'Chest Physiotherapy Techniques Guide',
    description: 'Complete guide to chest physiotherapy techniques including postural drainage, percussion, vibration, PEP therapy, and airway clearance devices for NBRC exams.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Chest Physiotherapy Techniques Guide</h2>
<p>Chest physiotherapy (CPT) encompasses a group of airway clearance techniques designed to mobilize and remove secretions from the airways. These techniques are essential for patients with excessive sputum production, impaired mucociliary clearance, or inability to cough effectively.</p>

<h3>Indications for Chest Physiotherapy</h3>
<ul>
<li>Cystic fibrosis (primary indication)</li>
<li>Bronchiectasis</li>
<li>Atelectasis with mucus plugging</li>
<li>Neuromuscular disease with impaired cough</li>
<li>Post-operative patients at risk for secretion retention</li>
<li>Sputum production &gt;25&ndash;30 mL per day</li>
</ul>

<h3>Contraindications</h3>
<ul>
<li>Untreated tension pneumothorax</li>
<li>Active hemoptysis</li>
<li>Unstable cardiovascular status (recent MI, unstable arrhythmias)</li>
<li>Increased intracranial pressure (&gt;20 mmHg)</li>
<li>Recent spinal surgery or spinal instability</li>
<li>Rib fractures or flail chest in the treatment area</li>
<li>Bronchopleural fistula</li>
</ul>

<h3>Postural Drainage</h3>
<p>Postural drainage uses gravity to assist mucus movement from peripheral airways toward the central airways where it can be coughed out or suctioned. The patient is positioned so that the affected lung segment is uppermost, allowing gravity to drain secretions toward the mainstem bronchi.</p>
<ul>
<li><strong>Duration:</strong> 3&ndash;15 minutes per position.</li>
<li><strong>Positioning:</strong> Based on the anatomy of the bronchial segments. There are 12 standard positions corresponding to the 18 lung segments (some positions drain multiple segments).</li>
<li><strong>Trendelenburg:</strong> Head-down positioning (10&ndash;15 degrees) for lower lobe drainage. Contraindicated in patients with increased ICP, GERD, recent head/neck surgery, or hemodynamic instability.</li>
</ul>

<h3>Percussion</h3>
<p>Rhythmic clapping with cupped hands over the affected lung segment during postural drainage. Creates mechanical vibrations that loosen adherent secretions from airway walls.</p>
<ul>
<li>Use a cupped hand to trap an air cushion.</li>
<li>Apply over a thin towel or gown, never on bare skin.</li>
<li>Avoid percussion over the spine, sternum, kidneys, and female breasts.</li>
</ul>

<h3>Vibration</h3>
<p>Fine shaking motions applied to the chest wall during the expiratory phase of breathing. Performed with flat hands pressed firmly on the chest, vibrating the arms to transmit energy to the chest wall. Enhances expiratory flow, moving secretions toward larger airways.</p>

<h3>Positive Expiratory Pressure (PEP) Therapy</h3>
<p>The patient exhales against a resistor generating 10&ndash;20 cmH2O of back pressure. This splints airways open during expiration, allowing air to get behind secretions via collateral ventilation channels (pores of Kohn, canals of Lambert), and moves mucus toward larger airways.</p>
<ul>
<li><strong>Devices:</strong> PEP mask (TheraPEP), EzPAP, Pari PEP.</li>
<li><strong>Technique:</strong> 10&ndash;20 breaths through the PEP device, followed by 2&ndash;3 huff coughs. Repeat 4&ndash;6 cycles.</li>
</ul>

<h3>Oscillatory PEP Devices</h3>
<p>Combine PEP with high-frequency oscillations to further enhance secretion mobilization:</p>
<ul>
<li><strong>Flutter valve (Acapella):</strong> Generates oscillating PEP through a counterweighted plug or magnetic valve. Patient-controlled by adjusting flow and device angle.</li>
<li><strong>Intrapulmonary Percussive Ventilation (IPV):</strong> Delivers high-frequency percussive breaths via a pneumatic device. Simultaneously delivers aerosol medication.</li>
</ul>

<h3>High-Frequency Chest Wall Oscillation (HFCWO)</h3>
<p>An inflatable vest (e.g., The Vest, SmartVest) delivers rapid compressions to the chest at frequencies of 5&ndash;25 Hz. Commonly used in cystic fibrosis patients as an alternative to manual CPT. Allows patient independence as no assistant is needed.</p>

<h3>Directed Cough Techniques</h3>
<ul>
<li><strong>Huff cough:</strong> Forced expiration with an open glottis (&ldquo;huff&rdquo;). Moves secretions without airway collapse.</li>
<li><strong>Active cycle of breathing:</strong> Combines breathing control, thoracic expansion exercises, and forced expiratory technique (huff).</li>
<li><strong>Assisted cough (quad cough):</strong> Manual abdominal thrust timed with cough effort for patients with weak abdominal muscles (spinal cord injury).</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/chest-physiotherapy">Chest Physiotherapy Cheat Sheet</a></li>
<li><a href="/glossary/airway-clearance">Airway Clearance Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'emergency-airway-algorithms',
    type: 'TOPIC' as const,
    title: 'Emergency Airway Algorithms',
    description: 'Essential emergency airway algorithms for respiratory therapists including difficult airway, failed airway, and rapid sequence intubation protocols for NBRC exam prep.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Emergency Airway Algorithms</h2>
<p>Emergency airway management requires rapid decision-making and a systematic approach. Respiratory therapists must be proficient in recognizing difficult airways, executing backup plans, and following established algorithms. This topic is critical for both the TMC and CSE exams.</p>

<h3>Predicting the Difficult Airway</h3>
<p>Assessment should be performed before any planned airway intervention. Key predictors include:</p>

<h4>LEMON Assessment</h4>
<ul>
<li><strong>L &mdash; Look externally:</strong> Facial trauma, large tongue, short neck, obesity, cervical immobilization, facial hair.</li>
<li><strong>E &mdash; Evaluate 3-3-2 rule:</strong> 3 fingers of mouth opening (inter-incisor distance), 3 fingers from mentum to hyoid (thyromental distance), 2 fingers from hyoid to thyroid notch.</li>
<li><strong>M &mdash; Mallampati score:</strong> Class I (full visualization of tonsils, uvula, soft palate) to Class IV (hard palate only visible). Class III and IV predict difficulty.</li>
<li><strong>O &mdash; Obstruction:</strong> Upper airway masses, epiglottitis, peritonsillar abscess, angioedema.</li>
<li><strong>N &mdash; Neck mobility:</strong> Limited extension (cervical collar, rheumatoid arthritis, ankylosing spondylitis) makes laryngoscopy more difficult.</li>
</ul>

<h3>The Difficult Airway Algorithm</h3>
<p>Based on the ASA Difficult Airway Algorithm, the approach depends on whether difficulty is anticipated or unanticipated:</p>

<h4>Anticipated Difficult Airway</h4>
<ol>
<li><strong>Consider awake intubation:</strong> Awake fiberoptic intubation is the gold standard when a difficult airway is predicted and the patient is cooperative.</li>
<li><strong>Prepare alternatives:</strong> Have backup airway devices available (supraglottic airways, bougie, video laryngoscope, surgical airway equipment).</li>
<li><strong>Optimize positioning:</strong> Ramp or sniffing position to align the oral, pharyngeal, and laryngeal axes.</li>
</ol>

<h4>Unanticipated Difficult Airway: Failed Intubation</h4>
<ol>
<li><strong>Limit attempts:</strong> Maximum 3 direct laryngoscopy attempts (plus one additional by a more experienced provider). Each attempt should employ a different technique (change blade, reposition, use bougie).</li>
<li><strong>Call for help early.</strong></li>
<li><strong>Return to bag-mask ventilation</strong> between attempts. If BVM is successful, you have time to plan.</li>
<li><strong>Insert supraglottic airway</strong> (LMA, King LT) if BVM is difficult.</li>
<li><strong>Consider video laryngoscopy</strong> if not already attempted.</li>
</ol>

<h3>Can't Intubate, Can't Oxygenate (CICO)</h3>
<p>This is the most critical emergency airway scenario. When both intubation and mask/supraglottic ventilation have failed and the patient cannot be oxygenated:</p>
<ul>
<li><strong>Declare a CICO emergency</strong> and call for surgical airway assistance.</li>
<li><strong>Cricothyrotomy:</strong> Perform an emergency surgical cricothyrotomy through the cricothyroid membrane. This is a life-saving procedure that every RT should understand.</li>
<li><strong>Needle cricothyrotomy:</strong> Temporary measure using a large-bore IV catheter through the cricothyroid membrane with jet ventilation. Provides oxygenation but inadequate ventilation; serves as a bridge to a definitive airway.</li>
</ul>

<h3>Rapid Sequence Intubation (RSI) Protocol</h3>
<p>RSI minimizes the time from loss of protective reflexes to placement of a cuffed ETT, reducing aspiration risk:</p>
<ol>
<li><strong>Preparation:</strong> Equipment check (ETT, laryngoscope, suction, BVM, backup devices), monitoring, IV access, medications drawn up.</li>
<li><strong>Preoxygenation:</strong> 3&ndash;5 minutes of 100% O2 via NRB or BVM with tight seal. Goal: maximize O2 reserves (denitrogenation of FRC).</li>
<li><strong>Pretreatment:</strong> Consider medications to blunt the physiological response to intubation (e.g., fentanyl for ICP/cardiovascular response, lidocaine for reactive airway).</li>
<li><strong>Paralysis with induction:</strong> Administer induction agent (etomidate, propofol, or ketamine) immediately followed by neuromuscular blocker (succinylcholine or rocuronium).</li>
<li><strong>Positioning:</strong> Optimal positioning during onset of paralysis.</li>
<li><strong>Placement:</strong> Laryngoscopy and ETT insertion after full paralysis (60&ndash;90 seconds for succinylcholine).</li>
<li><strong>Post-intubation management:</strong> Confirm placement (ETCO2 is gold standard), secure tube, initiate ventilation, chest X-ray.</li>
</ol>

<h3>Adjuncts to Intubation</h3>
<ul>
<li><strong>Bougie (endotracheal tube introducer):</strong> A semirigid stylet passed through the glottis when the vocal cords cannot be fully visualized. The &ldquo;tracheal clicks&rdquo; confirm tracheal placement. The ETT is then railroad over the bougie.</li>
<li><strong>Video laryngoscope:</strong> Provides an indirect view of the glottis via a camera. Improves first-pass success in difficult airways.</li>
<li><strong>BURP maneuver:</strong> Backward, Upward, Rightward Pressure on the thyroid cartilage to improve glottic view during laryngoscopy.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/guides/nbrc-cse-exam-guide">CSE Exam Guide</a></li>
<li><a href="/cheat-sheets/emergency-airway">Emergency Airway Cheat Sheet</a></li>
<li><a href="/glossary/airway-management">Airway Management Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
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
