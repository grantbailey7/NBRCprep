import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const pages = [
  {
    slug: 'ards-management-guide',
    type: 'TOPIC' as const,
    title: 'ARDS Management: Complete RT Guide',
    description: 'Comprehensive guide to ARDS management for respiratory therapists covering Berlin criteria, ARDSNet protocol, lung-protective ventilation, and prone positioning.',
    division: 'accs',
    readTime: '8 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>ARDS Management: Complete RT Guide</h2>
<p>Acute respiratory distress syndrome (ARDS) is a life-threatening condition characterized by diffuse alveolar damage, refractory hypoxemia, and bilateral pulmonary infiltrates. Respiratory therapists play a central role in managing ARDS patients, and this topic is heavily tested on the NBRC credentialing exams.</p>

<h3>Berlin Definition and Classification</h3>
<p>The 2012 Berlin definition replaced the older AECC criteria and classifies ARDS into three severity categories based on the PaO2/FiO2 (P/F) ratio with a minimum PEEP of 5 cmH2O:</p>
<table>
<thead><tr><th>Severity</th><th>P/F Ratio</th><th>Mortality</th></tr></thead>
<tbody>
<tr><td>Mild</td><td>200 &ndash; 300 mmHg</td><td>27%</td></tr>
<tr><td>Moderate</td><td>100 &ndash; 200 mmHg</td><td>32%</td></tr>
<tr><td>Severe</td><td>&lt; 100 mmHg</td><td>45%</td></tr>
</tbody>
</table>
<p>Additional Berlin criteria include: acute onset (within 1 week of a known insult or new/worsening respiratory symptoms), bilateral opacities on chest imaging not fully explained by effusions, lobar collapse, or nodules, and respiratory failure not fully explained by cardiac failure or fluid overload.</p>

<h3>Common Causes</h3>
<p>ARDS can result from direct or indirect pulmonary insults:</p>
<ul>
<li><strong>Direct (pulmonary):</strong> Pneumonia, aspiration, pulmonary contusion, inhalation injury, near-drowning.</li>
<li><strong>Indirect (extrapulmonary):</strong> Sepsis, pancreatitis, massive transfusion (TRALI), burns, trauma.</li>
</ul>

<h3>ARDSNet Lung-Protective Ventilation</h3>
<p>The landmark ARDSNet trial demonstrated a significant mortality reduction with low tidal volume ventilation. The protocol remains the standard of care:</p>
<ul>
<li><strong>Tidal volume:</strong> 6 &ndash; 8 mL/kg ideal body weight (IBW), targeting 6 mL/kg IBW.</li>
<li><strong>Plateau pressure:</strong> Maintain &le; 30 cmH2O. If plateau exceeds 30, reduce Vt to as low as 4 mL/kg IBW.</li>
<li><strong>PEEP:</strong> Use the ARDSNet low or high PEEP/FiO2 table to titrate PEEP. Higher PEEP strategies may benefit moderate-to-severe ARDS.</li>
<li><strong>Respiratory rate:</strong> Adjust to maintain minute ventilation and target pH &ge; 7.25. Rates up to 35 breaths/min may be needed.</li>
<li><strong>Permissive hypercapnia:</strong> Accept elevated PaCO2 as long as pH remains &ge; 7.25 to avoid injurious ventilation.</li>
<li><strong>Oxygenation target:</strong> PaO2 55 &ndash; 80 mmHg or SpO2 88 &ndash; 95%.</li>
</ul>

<h3>IBW Calculation</h3>
<p>Tidal volume in ARDS must be based on ideal body weight, not actual weight:</p>
<ul>
<li><strong>Males:</strong> 50 + 2.3 &times; (height in inches &minus; 60)</li>
<li><strong>Females:</strong> 45.5 + 2.3 &times; (height in inches &minus; 60)</li>
</ul>

<h3>Adjunctive Therapies</h3>
<ul>
<li><strong>Prone positioning:</strong> Recommended for moderate-to-severe ARDS (P/F &lt; 150). Sessions of at least 16 hours per day have shown mortality benefit. Prone positioning improves V/Q matching and promotes dorsal lung recruitment.</li>
<li><strong>Neuromuscular blockade:</strong> May be considered in early severe ARDS (first 48 hours) to improve ventilator synchrony and reduce oxygen consumption.</li>
<li><strong>Conservative fluid management:</strong> Avoiding positive fluid balance improves oxygenation and shortens ventilator days.</li>
<li><strong>Recruitment maneuvers:</strong> Sustained inflation or incremental PEEP titration may open collapsed alveoli, though routine use remains debated.</li>
<li><strong>ECMO:</strong> Venovenous ECMO is considered for severe refractory ARDS when conventional strategies fail.</li>
</ul>

<h3>Monitoring and Troubleshooting</h3>
<p>Key parameters to monitor in ARDS patients include plateau pressure, driving pressure (plateau minus PEEP, target &lt; 15 cmH2O), static compliance, P/F ratio trends, and hemodynamic stability. Worsening compliance or increasing driving pressure may indicate overdistension or disease progression.</p>

<h3>Exam Tips</h3>
<ul>
<li>Always calculate IBW for ARDS tidal volume questions &mdash; never use actual body weight.</li>
<li>The Berlin definition requires a minimum PEEP of 5 cmH2O for P/F ratio classification.</li>
<li>Prone positioning is for moderate-to-severe ARDS, not mild.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/ards-management">ARDS Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'mechanical-ventilation-weaning',
    type: 'TOPIC' as const,
    title: 'Mechanical Ventilation Weaning Protocols',
    description: 'Learn evidence-based weaning protocols for mechanical ventilation including readiness criteria, spontaneous breathing trials, and extubation assessment for NBRC exam prep.',
    division: 'accs',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Mechanical Ventilation Weaning Protocols</h2>
<p>Weaning from mechanical ventilation is one of the most important processes in critical care. Prolonged mechanical ventilation increases the risk of ventilator-associated pneumonia, barotrauma, and ICU-acquired weakness. Respiratory therapists are central to the weaning process and must understand readiness criteria, spontaneous breathing trials, and extubation assessment.</p>

<h3>Weaning Readiness Criteria</h3>
<p>Before initiating a weaning trial, the patient should meet several prerequisites:</p>
<ul>
<li><strong>Resolution or improvement</strong> of the underlying condition that necessitated intubation.</li>
<li><strong>Adequate oxygenation:</strong> PaO2 &ge; 60 mmHg on FiO2 &le; 0.40 and PEEP &le; 5 &ndash; 8 cmH2O.</li>
<li><strong>Hemodynamic stability:</strong> No significant vasopressor requirements, no active myocardial ischemia.</li>
<li><strong>Ability to initiate spontaneous breaths:</strong> Adequate respiratory drive.</li>
<li><strong>Adequate mental status:</strong> Alert enough to protect the airway (GCS &ge; 8, following commands).</li>
<li><strong>No planned surgery or procedures</strong> requiring sedation in the near future.</li>
</ul>

<h3>Weaning Parameters</h3>
<p>Objective measurements help predict weaning success:</p>
<table>
<thead><tr><th>Parameter</th><th>Favorable Value</th></tr></thead>
<tbody>
<tr><td>Rapid Shallow Breathing Index (RSBI)</td><td>&lt; 105 breaths/min/L</td></tr>
<tr><td>Negative Inspiratory Force (NIF/MIP)</td><td>More negative than &minus;20 cmH2O</td></tr>
<tr><td>Vital Capacity (VC)</td><td>&gt; 10 &ndash; 15 mL/kg IBW</td></tr>
<tr><td>Minute Ventilation (VE)</td><td>&lt; 10 L/min</td></tr>
<tr><td>Tidal Volume (spontaneous)</td><td>&gt; 5 mL/kg IBW</td></tr>
</tbody>
</table>
<p>The RSBI (frequency divided by tidal volume in liters) is the most commonly used predictor. An RSBI &lt; 105 suggests a higher likelihood of weaning success.</p>

<h3>Spontaneous Breathing Trial (SBT)</h3>
<p>The SBT is the gold standard for assessing readiness for extubation. Common methods include:</p>
<ul>
<li><strong>T-piece trial:</strong> Patient breathes through the ETT connected to a T-piece with supplemental oxygen. No ventilator support.</li>
<li><strong>Low-level PSV:</strong> Pressure support of 5 &ndash; 8 cmH2O to overcome ETT resistance, with PEEP of 0 &ndash; 5 cmH2O.</li>
<li><strong>CPAP trial:</strong> Low CPAP (5 cmH2O) without additional pressure support.</li>
</ul>
<p>The SBT typically lasts 30 &ndash; 120 minutes. Monitor for signs of failure: tachypnea (RR &gt; 35), tachycardia, diaphoresis, oxygen desaturation, accessory muscle use, paradoxical breathing, arrhythmias, or significant blood pressure changes.</p>

<h3>Extubation Criteria</h3>
<p>After passing the SBT, assess for extubation readiness:</p>
<ul>
<li><strong>Cuff leak test:</strong> Deflate the cuff and verify air leak around the ETT. Absence of a leak may indicate laryngeal edema and increased risk of post-extubation stridor.</li>
<li><strong>Airway protection:</strong> Strong cough, ability to manage secretions, intact gag reflex.</li>
<li><strong>Mental status:</strong> Awake and following commands.</li>
</ul>

<h3>Post-Extubation Management</h3>
<p>After extubation, provide supplemental oxygen and monitor closely for 24 &ndash; 48 hours. High-flow nasal cannula (HFNC) or noninvasive ventilation (NIV) may be used prophylactically in high-risk patients. Reintubation rates of 10 &ndash; 20% are typical; higher rates may indicate premature extubation.</p>

<h3>Weaning Failure</h3>
<p>If the patient fails the SBT, return to full ventilatory support and rest for at least 24 hours before reattempting. Address reversible causes: fluid overload, delirium, pain, electrolyte imbalances, or persistent infection.</p>

<h3>Exam Tips</h3>
<ul>
<li>RSBI &lt; 105 is the most tested weaning parameter on NBRC exams.</li>
<li>Always assess readiness criteria before initiating an SBT.</li>
<li>If a patient fails an SBT, the correct response is to return to full support, not to continue the trial.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-weaning">Ventilator Weaning Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'high-flow-nasal-cannula-guide',
    type: 'TOPIC' as const,
    title: 'High-Flow Nasal Cannula (HFNC) Therapy Guide',
    description: 'Complete guide to high-flow nasal cannula therapy including mechanisms, indications, setup, and clinical management for respiratory therapists.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>High-Flow Nasal Cannula (HFNC) Therapy Guide</h2>
<p>High-flow nasal cannula (HFNC) therapy has become one of the most widely used oxygen delivery devices in modern respiratory care. By delivering heated, humidified oxygen at flows up to 60 L/min, HFNC provides several physiological benefits beyond simple oxygen supplementation.</p>

<h3>How HFNC Works</h3>
<p>HFNC systems consist of an air-oxygen blender, an active heated humidifier, a heated inspiratory circuit, and a large-bore nasal cannula. Key mechanisms of action include:</p>
<ul>
<li><strong>High flow delivery:</strong> Flows of 20 &ndash; 60 L/min can match or exceed the patient's peak inspiratory flow demand, providing a more reliable FiO2 (0.21 &ndash; 1.0).</li>
<li><strong>Dead space washout:</strong> High flows flush anatomical dead space of CO2, improving alveolar ventilation efficiency.</li>
<li><strong>Low-level PEEP effect:</strong> HFNC generates approximately 1 cmH2O of positive pressure for every 10 L/min of flow (with mouth closed), providing modest airway stenting and alveolar recruitment.</li>
<li><strong>Optimal humidification:</strong> Gas is heated to 37&deg;C and humidified to 100% relative humidity (44 mg/L absolute humidity), preserving mucociliary function and reducing airway inflammation.</li>
<li><strong>Reduced work of breathing:</strong> By meeting inspiratory demand and providing a small PEEP effect, HFNC reduces inspiratory effort.</li>
</ul>

<h3>Indications</h3>
<ul>
<li>Hypoxemic respiratory failure (Type I) not responsive to conventional oxygen therapy.</li>
<li>Post-extubation support, especially in patients at high risk for reintubation.</li>
<li>Pre-oxygenation before intubation.</li>
<li>Acute heart failure with mild-to-moderate hypoxemia.</li>
<li>Palliative care and comfort care for dyspnea.</li>
<li>Bronchiolitis in pediatric patients.</li>
</ul>

<h3>Setup and Titration</h3>
<p>Initial settings depend on the clinical scenario:</p>
<table>
<thead><tr><th>Parameter</th><th>Starting Range</th><th>Adjustment</th></tr></thead>
<tbody>
<tr><td>Flow rate</td><td>30 &ndash; 50 L/min</td><td>Titrate up to 60 L/min for comfort and oxygenation</td></tr>
<tr><td>FiO2</td><td>Based on SpO2 target</td><td>Titrate to maintain SpO2 92 &ndash; 96% (88 &ndash; 92% in COPD)</td></tr>
<tr><td>Temperature</td><td>37&deg;C</td><td>Reduce to 34&deg;C if patient reports discomfort</td></tr>
</tbody>
</table>

<h3>Monitoring and Failure Criteria</h3>
<p>HFNC failure should prompt escalation to noninvasive ventilation or intubation. Signs of HFNC failure include:</p>
<ul>
<li>Persistent tachypnea (RR &gt; 30 breaths/min) after 1 &ndash; 2 hours.</li>
<li>Worsening SpO2 or increasing FiO2 requirements.</li>
<li>Accessory muscle use, paradoxical breathing.</li>
<li>ROX index &lt; 4.88 at 12 hours (ROX = SpO2/FiO2 divided by RR).</li>
<li>Hemodynamic instability or altered mental status.</li>
</ul>

<h3>HFNC vs. Conventional Oxygen vs. NIV</h3>
<p>The FLORALI trial showed that HFNC reduced 90-day mortality in patients with acute hypoxemic respiratory failure compared to standard oxygen and NIV. HFNC is generally better tolerated than NIV, allows the patient to eat, speak, and take oral medications, and does not carry the same aspiration risk as mask-based NIV.</p>

<h3>Contraindications and Precautions</h3>
<ul>
<li>Nasal obstruction or recent nasal surgery.</li>
<li>Significant facial trauma.</li>
<li>Patients requiring definitive airway protection.</li>
<li>Use caution in hypercapnic respiratory failure &mdash; HFNC may not provide sufficient ventilatory support.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>HFNC delivers flows up to 60 L/min and generates low-level PEEP.</li>
<li>The PEEP effect requires the patient to keep their mouth closed.</li>
<li>HFNC is not a substitute for mechanical ventilation in patients with severe respiratory failure.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/oxygen-delivery-devices">Oxygen Delivery Devices Cheat Sheet</a></li>
<li><a href="/glossary/oxygen-therapy">Oxygen Therapy Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'noninvasive-ventilation-guide',
    type: 'TOPIC' as const,
    title: 'Noninvasive Ventilation: CPAP and BiPAP Guide',
    description: 'Master noninvasive ventilation including CPAP and BiPAP therapy. Covers indications, contraindications, settings, and troubleshooting for respiratory therapists.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Noninvasive Ventilation: CPAP and BiPAP Guide</h2>
<p>Noninvasive ventilation (NIV) delivers positive pressure ventilation through a mask interface without the need for an endotracheal tube. NIV has become a cornerstone of respiratory care, reducing intubation rates and improving outcomes in specific patient populations.</p>

<h3>CPAP (Continuous Positive Airway Pressure)</h3>
<p>CPAP delivers a single level of continuous positive pressure throughout the respiratory cycle. It is technically not a ventilatory mode because it does not augment tidal volume &mdash; it provides only positive end-expiratory pressure.</p>
<ul>
<li><strong>Mechanism:</strong> Splints the airway open, increases functional residual capacity (FRC), recruits collapsed alveoli, and improves oxygenation.</li>
<li><strong>Typical settings:</strong> 5 &ndash; 15 cmH2O.</li>
<li><strong>Primary indications:</strong> Obstructive sleep apnea (OSA), acute cardiogenic pulmonary edema, post-operative atelectasis.</li>
</ul>

<h3>BiPAP (Bilevel Positive Airway Pressure)</h3>
<p>BiPAP delivers two levels of pressure: a higher inspiratory positive airway pressure (IPAP) and a lower expiratory positive airway pressure (EPAP).</p>
<ul>
<li><strong>Pressure support:</strong> The difference between IPAP and EPAP provides ventilatory support, augmenting tidal volume. For example, IPAP 12 / EPAP 5 provides 7 cmH2O of pressure support.</li>
<li><strong>Typical starting settings:</strong> IPAP 10 &ndash; 12 cmH2O, EPAP 4 &ndash; 6 cmH2O. Titrate IPAP up (maximum ~20 &ndash; 25 cmH2O) for ventilation; titrate EPAP up for oxygenation.</li>
<li><strong>Primary indications:</strong> COPD exacerbation with hypercapnia, acute respiratory failure when intubation is not desired, neuromuscular disease, obesity hypoventilation syndrome.</li>
</ul>

<h3>Indications for NIV</h3>
<table>
<thead><tr><th>Condition</th><th>Evidence Level</th><th>Preferred Mode</th></tr></thead>
<tbody>
<tr><td>COPD exacerbation with respiratory acidosis</td><td>Strong</td><td>BiPAP</td></tr>
<tr><td>Acute cardiogenic pulmonary edema</td><td>Strong</td><td>CPAP or BiPAP</td></tr>
<tr><td>Immunocompromised with respiratory failure</td><td>Moderate</td><td>BiPAP</td></tr>
<tr><td>Post-extubation (high-risk patients)</td><td>Moderate</td><td>BiPAP</td></tr>
<tr><td>Do-not-intubate patients</td><td>Supportive</td><td>BiPAP</td></tr>
</tbody>
</table>

<h3>Contraindications</h3>
<ul>
<li>Cardiac or respiratory arrest.</li>
<li>Inability to protect the airway or manage secretions.</li>
<li>Hemodynamic instability requiring vasopressors.</li>
<li>Facial trauma or surgery preventing mask fit.</li>
<li>Uncooperative or severely agitated patient.</li>
<li>Upper GI bleeding with active vomiting.</li>
<li>Undrained pneumothorax.</li>
</ul>

<h3>Mask Interfaces</h3>
<p>Interface selection significantly impacts comfort and compliance:</p>
<ul>
<li><strong>Oronasal (full-face) mask:</strong> Most common for acute NIV. Covers nose and mouth, minimizing leak.</li>
<li><strong>Nasal mask:</strong> More comfortable for chronic use; mouth leak may reduce effectiveness in acute settings.</li>
<li><strong>Total face mask:</strong> Covers the entire face; useful when other masks cause skin breakdown.</li>
<li><strong>Nasal pillows:</strong> Primarily for chronic CPAP in OSA; less useful for acute care.</li>
</ul>

<h3>Troubleshooting NIV</h3>
<ul>
<li><strong>Air leak:</strong> Refit the mask, adjust headgear tension, consider a different mask size or type.</li>
<li><strong>Claustrophobia:</strong> Start with the mask held in place by hand before securing with headgear. Reduce pressures initially and titrate up gradually.</li>
<li><strong>Gastric distension:</strong> Keep IPAP &lt; 20 &ndash; 25 cmH2O. Consider a nasogastric tube if significant.</li>
<li><strong>Skin breakdown:</strong> Alternate mask types, use protective dressings on pressure points.</li>
</ul>

<h3>When to Intubate</h3>
<p>If the patient does not improve within 1 &ndash; 2 hours of NIV initiation, or if clinical deterioration occurs at any point, intubation should not be delayed. Delaying intubation in a patient failing NIV increases mortality.</p>

<h3>Exam Tips</h3>
<ul>
<li>BiPAP is preferred over CPAP when the patient needs both oxygenation and ventilation support.</li>
<li>CPAP does not augment tidal volume &mdash; it only provides PEEP.</li>
<li>The strongest evidence for NIV is in COPD exacerbations and cardiogenic pulmonary edema.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/noninvasive-ventilation">NIV Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'pulmonary-hypertension-rt',
    type: 'TOPIC' as const,
    title: 'Pulmonary Hypertension for Respiratory Therapists',
    description: 'Understand pulmonary hypertension classification, diagnosis, and respiratory therapy management including inhaled nitric oxide and oxygen therapy.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Pulmonary Hypertension for Respiratory Therapists</h2>
<p>Pulmonary hypertension (PH) is defined as a mean pulmonary artery pressure (mPAP) greater than 20 mmHg at rest, measured by right heart catheterization. Understanding PH is important for respiratory therapists because it directly affects gas exchange, right ventricular function, and the management of mechanical ventilation.</p>

<h3>WHO Classification</h3>
<p>PH is classified into five groups based on etiology and pathophysiology:</p>
<table>
<thead><tr><th>Group</th><th>Category</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Group 1</td><td>Pulmonary arterial hypertension (PAH)</td><td>Idiopathic, heritable, connective tissue disease, congenital heart disease</td></tr>
<tr><td>Group 2</td><td>Left heart disease</td><td>Systolic or diastolic dysfunction, valvular disease</td></tr>
<tr><td>Group 3</td><td>Lung disease / hypoxia</td><td>COPD, ILD, sleep-disordered breathing, chronic altitude exposure</td></tr>
<tr><td>Group 4</td><td>Chronic thromboembolic PH (CTEPH)</td><td>Chronic pulmonary embolism</td></tr>
<tr><td>Group 5</td><td>Multifactorial / unclear mechanisms</td><td>Sarcoidosis, hematologic disorders, metabolic disorders</td></tr>
</tbody>
</table>

<h3>Pathophysiology</h3>
<p>Elevated pulmonary vascular resistance increases right ventricular afterload, leading to RV hypertrophy, dilation, and eventually right heart failure (cor pulmonale). Hypoxic pulmonary vasoconstriction (HPV) is a physiological mechanism that shunts blood away from poorly ventilated lung regions, but chronic hypoxia causes persistent vasoconstriction and vascular remodeling.</p>

<h3>Clinical Presentation</h3>
<ul>
<li>Exertional dyspnea (most common early symptom).</li>
<li>Fatigue, chest pain, syncope with exertion.</li>
<li>Signs of right heart failure: peripheral edema, jugular venous distension, hepatomegaly.</li>
<li>Loud P2 (pulmonic component of S2) on auscultation.</li>
</ul>

<h3>Diagnosis</h3>
<ul>
<li><strong>Echocardiography:</strong> Screening tool to estimate pulmonary artery systolic pressure and assess RV function.</li>
<li><strong>Right heart catheterization:</strong> Gold standard for diagnosis. Confirms mPAP &gt; 20 mmHg and determines pre- vs. post-capillary PH.</li>
<li><strong>Pulmonary function testing:</strong> May show reduced DLCO, mild restrictive or obstructive patterns depending on underlying etiology.</li>
<li><strong>6-minute walk test:</strong> Assesses functional capacity and monitors treatment response.</li>
</ul>

<h3>RT-Relevant Management</h3>
<ul>
<li><strong>Oxygen therapy:</strong> Maintain SpO2 &ge; 90%. Supplemental oxygen reduces hypoxic pulmonary vasoconstriction and lowers pulmonary artery pressure in Group 3 PH.</li>
<li><strong>Inhaled nitric oxide (iNO):</strong> A selective pulmonary vasodilator used in acute settings (ARDS, post-cardiac surgery, neonatal PPHN). Typical dose: 20 &ndash; 40 ppm; wean gradually to avoid rebound PH.</li>
<li><strong>Inhaled prostacyclins:</strong> Epoprostenol (Flolan) or iloprost delivered via nebulizer for PAH management.</li>
<li><strong>Ventilator management:</strong> Avoid high PEEP (reduces RV preload), maintain normocapnia (hypercapnia increases PVR), and minimize mean airway pressure.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>PH is defined as mPAP &gt; 20 mmHg by right heart catheterization.</li>
<li>Group 3 PH (lung disease/hypoxia) is the most relevant group for respiratory therapists.</li>
<li>Inhaled nitric oxide is a selective pulmonary vasodilator that does not cause systemic hypotension.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/hemodynamics">Hemodynamics Cheat Sheet</a></li>
<li><a href="/glossary/hemodynamics">Hemodynamics Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'tracheostomy-care-management',
    type: 'TOPIC' as const,
    title: 'Tracheostomy Care and Management Guide',
    description: 'Comprehensive guide to tracheostomy care including tube types, routine management, suctioning, decannulation, and emergency procedures for respiratory therapists.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Tracheostomy Care and Management Guide</h2>
<p>Tracheostomy management is a core competency for respiratory therapists. A tracheostomy provides a secure airway, facilitates long-term ventilation, and reduces dead space. Understanding tube types, routine care, and emergency management is essential for clinical practice and NBRC exam success.</p>

<h3>Indications for Tracheostomy</h3>
<ul>
<li>Prolonged mechanical ventilation (typically considered after 10 &ndash; 14 days of translaryngeal intubation).</li>
<li>Upper airway obstruction (tumor, trauma, bilateral vocal cord paralysis).</li>
<li>Facilitation of pulmonary toilet in patients with copious secretions.</li>
<li>Airway protection in patients with chronic aspiration.</li>
<li>Neuromuscular disease requiring long-term ventilatory support.</li>
</ul>

<h3>Tracheostomy Tube Types</h3>
<table>
<thead><tr><th>Feature</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Cuffed tubes</td><td>Allow positive pressure ventilation and protect against aspiration. Maintain cuff pressure at 20 &ndash; 25 cmH2O (minimal occlusive volume or minimal leak technique).</td></tr>
<tr><td>Uncuffed tubes</td><td>Used for long-term stable patients, allow phonation and airflow around the tube.</td></tr>
<tr><td>Fenestrated tubes</td><td>Have openings in the outer cannula that allow airflow through the vocal cords for phonation when the inner cannula is removed and the cuff deflated.</td></tr>
<tr><td>Inner cannula</td><td>Removable insert that can be cleaned or replaced to maintain tube patency. Reduces the need for full tube changes.</td></tr>
<tr><td>Speaking valves</td><td>One-way valves (e.g., Passy-Muir) that allow air in on inspiration but redirect exhaled air through the vocal cords. Require cuff deflation.</td></tr>
</tbody>
</table>

<h3>Routine Tracheostomy Care</h3>
<ul>
<li><strong>Stoma care:</strong> Clean the stoma site with normal saline or half-strength hydrogen peroxide, apply a clean gauze dressing. Assess for signs of infection (erythema, purulent drainage, odor).</li>
<li><strong>Inner cannula care:</strong> Remove and clean with normal saline or hydrogen peroxide every 4 &ndash; 8 hours or per institutional protocol. Disposable inner cannulas should be replaced per protocol.</li>
<li><strong>Tracheostomy ties:</strong> Change when soiled. Secure ties with one finger of slack between the tie and the neck. Always have a second person stabilize the tube during tie changes.</li>
<li><strong>Cuff management:</strong> Monitor cuff pressure every 8 &ndash; 12 hours. Maintain 20 &ndash; 25 cmH2O. Over-inflation causes tracheal mucosal ischemia; under-inflation allows aspiration.</li>
<li><strong>Humidification:</strong> Mandatory for tracheostomy patients because the upper airway is bypassed. Use heated humidifiers or HMEs (heat-moisture exchangers).</li>
</ul>

<h3>Suctioning the Tracheostomy</h3>
<ul>
<li>Use sterile technique with an appropriately sized catheter (no larger than half the internal diameter of the tracheostomy tube).</li>
<li>Pre-oxygenate with 100% oxygen for 30 seconds before suctioning.</li>
<li>Insert the catheter without suction, then apply intermittent suction while withdrawing. Limit suction to 10 &ndash; 15 seconds per pass.</li>
<li>Suction pressure: Adults 100 &ndash; 150 mmHg, Pediatrics 80 &ndash; 100 mmHg, Neonates 60 &ndash; 80 mmHg.</li>
</ul>

<h3>Decannulation</h3>
<p>Decannulation (removal of the tracheostomy tube) requires systematic assessment:</p>
<ul>
<li>Resolution of the original indication for tracheostomy.</li>
<li>Adequate cough and secretion management.</li>
<li>Tolerance of cuff deflation and speaking valve trials.</li>
<li>Successful capping trial (typically 24 &ndash; 72 hours breathing through the upper airway with the tube capped).</li>
<li>Swallow evaluation to assess aspiration risk.</li>
</ul>

<h3>Emergency Management</h3>
<p>In the event of accidental decannulation or tube obstruction:</p>
<ul>
<li>If the stoma is mature (&gt; 7 days), attempt reinsertion of the same size tube or a smaller tube. If unsuccessful, insert a suction catheter as a guide.</li>
<li>If the stoma is fresh (&lt; 7 days), do NOT attempt reinsertion &mdash; the tract may not be mature and a false passage may result. Provide bag-mask ventilation via the mouth and nose while covering the stoma, and call for emergency assistance.</li>
<li>Always keep an extra tracheostomy tube (same size and one size smaller), an obturator, and a bag-valve device at the bedside.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Cuff pressure should be maintained at 20 &ndash; 25 cmH2O.</li>
<li>Speaking valves require cuff deflation to function.</li>
<li>Never attempt reinsertion of a tracheostomy tube in a fresh (&lt; 7-day) stoma without proper training and equipment.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/airway-management">Airway Management Cheat Sheet</a></li>
<li><a href="/glossary/airway-management">Airway Management Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'arterial-line-blood-gas-sampling',
    type: 'TOPIC' as const,
    title: 'Arterial Line and Blood Gas Sampling Guide',
    description: 'Learn arterial line management and blood gas sampling techniques including Allen test, radial artery puncture, and pre-analytical error prevention for RTs.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Arterial Line and Blood Gas Sampling Guide</h2>
<p>Arterial blood gas sampling is a fundamental skill for respiratory therapists. Whether obtained via direct arterial puncture or from an indwelling arterial line, proper technique ensures accurate results and minimizes complications.</p>

<h3>Modified Allen Test</h3>
<p>Before performing a radial artery puncture, the modified Allen test assesses collateral circulation through the ulnar artery:</p>
<ol>
<li>Have the patient make a tight fist.</li>
<li>Occlude both the radial and ulnar arteries at the wrist.</li>
<li>Have the patient open the hand (palm should appear blanched).</li>
<li>Release the ulnar artery while maintaining radial compression.</li>
<li>Color should return to the palm within 5 &ndash; 15 seconds (positive/normal Allen test), indicating adequate collateral circulation.</li>
</ol>
<p>If color does not return within 15 seconds, the test is negative and the radial artery should not be punctured. Use the other wrist or an alternative site.</p>

<h3>Arterial Puncture Technique</h3>
<ul>
<li><strong>Preferred site:</strong> Radial artery (most common due to accessibility, collateral circulation, and low complication rate). Alternative sites: brachial, dorsalis pedis, femoral.</li>
<li><strong>Angle of entry:</strong> 30 &ndash; 45 degrees for radial artery; 60 &ndash; 90 degrees for femoral.</li>
<li><strong>Equipment:</strong> Pre-heparinized ABG syringe (or self-filling syringe), 22 &ndash; 25 gauge needle, alcohol prep, gauze, ice (if transport delay expected).</li>
<li><strong>Procedure:</strong> Palpate the artery, cleanse the site, insert the needle bevel-up at the proper angle, allow the syringe to fill passively (pulsatile flow confirms arterial source).</li>
<li><strong>Post-puncture:</strong> Apply firm pressure for a minimum of 5 minutes (15 minutes for patients on anticoagulants).</li>
</ul>

<h3>Arterial Line Sampling</h3>
<p>When an arterial line (a-line) is in place, blood gas samples can be drawn without repeated punctures. Key steps:</p>
<ul>
<li>Turn off the continuous flush and zero the transducer before drawing.</li>
<li>Withdraw and discard the dead space volume (typically 3 &ndash; 5 mL) to clear flush solution from the line.</li>
<li>Draw the sample into a heparinized syringe.</li>
<li>Flush the line thoroughly after sampling and re-zero if needed.</li>
<li>Verify the arterial waveform returns to normal after sampling.</li>
</ul>

<h3>Pre-Analytical Errors</h3>
<p>Accurate ABG results depend on proper sample handling:</p>
<table>
<thead><tr><th>Error</th><th>Effect on Results</th></tr></thead>
<tbody>
<tr><td>Air bubbles in sample</td><td>PaO2 falsely elevated, PaCO2 falsely decreased</td></tr>
<tr><td>Excess heparin</td><td>PaCO2 falsely decreased, may affect pH</td></tr>
<tr><td>Delayed analysis (&gt; 30 min at room temp)</td><td>PaO2 decreased, PaCO2 increased (cellular metabolism continues)</td></tr>
<tr><td>Venous admixture</td><td>PaO2 decreased, PaCO2 increased (mimics venous blood)</td></tr>
<tr><td>Patient on supplemental O2 (not documented)</td><td>Misinterpretation of oxygenation status</td></tr>
</tbody>
</table>

<h3>Complications of Arterial Puncture</h3>
<ul>
<li>Hematoma (most common).</li>
<li>Arterial spasm.</li>
<li>Thrombosis or distal ischemia (rare with radial artery due to collateral flow).</li>
<li>Nerve damage (especially at the brachial and femoral sites).</li>
<li>Infection (rare with proper technique).</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Always perform the modified Allen test before radial artery puncture.</li>
<li>Air bubbles raise PaO2 and lower PaCO2 &mdash; this is a common exam question.</li>
<li>Document FiO2 and patient temperature with every ABG sample.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'respiratory-failure-types',
    type: 'TOPIC' as const,
    title: 'Types of Respiratory Failure: Type I vs Type II',
    description: 'Understand Type I (hypoxemic) and Type II (hypercapnic) respiratory failure including causes, diagnosis, ABG findings, and management for NBRC exam preparation.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Types of Respiratory Failure: Type I vs Type II</h2>
<p>Respiratory failure occurs when the respiratory system cannot maintain adequate gas exchange. Understanding the distinction between Type I and Type II respiratory failure is fundamental for respiratory therapists and is heavily tested on NBRC exams.</p>

<h3>Type I: Hypoxemic Respiratory Failure</h3>
<p>Type I respiratory failure is defined by a PaO2 less than 60 mmHg on room air with a normal or low PaCO2. The primary problem is oxygenation failure.</p>

<h4>Pathophysiology</h4>
<p>Type I failure results from conditions that impair oxygen transfer across the alveolar-capillary membrane:</p>
<ul>
<li><strong>V/Q mismatch:</strong> The most common mechanism. Perfused alveoli are poorly ventilated (e.g., pneumonia, atelectasis).</li>
<li><strong>Intrapulmonary shunt:</strong> Blood passes through non-ventilated alveoli (e.g., ARDS, complete lobar collapse). Does not respond to supplemental oxygen.</li>
<li><strong>Diffusion impairment:</strong> Thickened alveolar-capillary membrane (e.g., pulmonary fibrosis). Usually clinically significant only during exercise.</li>
<li><strong>Low inspired oxygen:</strong> High altitude, enclosed space with oxygen depletion.</li>
</ul>

<h4>Common Causes</h4>
<ul>
<li>Pneumonia, ARDS, pulmonary edema, pulmonary embolism, pneumothorax, interstitial lung disease, atelectasis.</li>
</ul>

<h4>ABG Pattern</h4>
<p>PaO2 &lt; 60 mmHg, PaCO2 normal or decreased (hyperventilation as a compensatory response), P(A-a)O2 gradient elevated.</p>

<h3>Type II: Hypercapnic Respiratory Failure</h3>
<p>Type II respiratory failure is defined by a PaCO2 greater than 50 mmHg. The primary problem is ventilation failure. Hypoxemia is also usually present.</p>

<h4>Pathophysiology</h4>
<p>Type II failure results from conditions that reduce alveolar ventilation:</p>
<ul>
<li><strong>Decreased respiratory drive:</strong> Drug overdose (opioids, benzodiazepines), brainstem lesion, central sleep apnea.</li>
<li><strong>Neuromuscular disease:</strong> Myasthenia gravis, Guillain-Barr&eacute; syndrome, ALS, spinal cord injury.</li>
<li><strong>Chest wall disorders:</strong> Kyphoscoliosis, flail chest, obesity hypoventilation syndrome.</li>
<li><strong>Airway obstruction:</strong> Severe COPD, severe asthma, upper airway obstruction.</li>
<li><strong>Increased dead space:</strong> Pulmonary embolism (increased VD/VT ratio).</li>
</ul>

<h4>Common Causes</h4>
<ul>
<li>COPD exacerbation, drug overdose, neuromuscular disease, obesity hypoventilation, severe kyphoscoliosis.</li>
</ul>

<h4>ABG Pattern</h4>
<p>PaCO2 &gt; 50 mmHg, pH decreased (acute) or near-normal (chronic with renal compensation), PaO2 decreased.</p>

<h3>Type I vs. Type II: Key Differences</h3>
<table>
<thead><tr><th>Feature</th><th>Type I (Hypoxemic)</th><th>Type II (Hypercapnic)</th></tr></thead>
<tbody>
<tr><td>Primary problem</td><td>Oxygenation</td><td>Ventilation</td></tr>
<tr><td>PaO2</td><td>&lt; 60 mmHg</td><td>Usually decreased</td></tr>
<tr><td>PaCO2</td><td>Normal or low</td><td>&gt; 50 mmHg</td></tr>
<tr><td>P(A-a) gradient</td><td>Elevated</td><td>May be normal (if pure hypoventilation)</td></tr>
<tr><td>Response to O2</td><td>Often responds (except shunt)</td><td>O2 alone is insufficient; need ventilation</td></tr>
<tr><td>Treatment focus</td><td>Improve oxygenation (O2, PEEP, recruitment)</td><td>Improve ventilation (NIV, intubation)</td></tr>
</tbody>
</table>

<h3>Management Approach</h3>
<ul>
<li><strong>Type I:</strong> Supplemental oxygen, HFNC, CPAP/PEEP to recruit alveoli, treat underlying cause. Intubation and mechanical ventilation if oxygen therapy fails.</li>
<li><strong>Type II:</strong> Noninvasive ventilation (BiPAP) is first-line for many causes (COPD, obesity hypoventilation). Intubation for severe or refractory cases. Use oxygen cautiously in COPD patients &mdash; target SpO2 88 &ndash; 92% to avoid suppressing hypoxic drive.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Type I = hypoxemic (PaO2 &lt; 60), Type II = hypercapnic (PaCO2 &gt; 50).</li>
<li>Shunt does not respond to supplemental oxygen &mdash; a key differentiator from V/Q mismatch.</li>
<li>In Type II failure, always assess whether the patient needs ventilatory support, not just oxygen.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'acid-base-balance-guide',
    type: 'TOPIC' as const,
    title: 'Acid-Base Balance: Complete RT Guide',
    description: 'Master acid-base balance concepts including buffer systems, Henderson-Hasselbalch equation, compensation mechanisms, and clinical interpretation for NBRC exams.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Acid-Base Balance: Complete RT Guide</h2>
<p>Acid-base balance is one of the most tested topics on NBRC exams. The body maintains blood pH within a narrow range of 7.35 &ndash; 7.45 through a system of buffers, respiratory compensation (CO2 regulation), and renal compensation (HCO3&minus; regulation). Respiratory therapists must understand these mechanisms to interpret ABGs and guide treatment decisions.</p>

<h3>Normal Acid-Base Values</h3>
<table>
<thead><tr><th>Parameter</th><th>Normal Range</th></tr></thead>
<tbody>
<tr><td>pH</td><td>7.35 &ndash; 7.45</td></tr>
<tr><td>PaCO2</td><td>35 &ndash; 45 mmHg</td></tr>
<tr><td>HCO3&minus;</td><td>22 &ndash; 26 mEq/L</td></tr>
<tr><td>Base Excess (BE)</td><td>&minus;2 to +2 mEq/L</td></tr>
</tbody>
</table>

<h3>Buffer Systems</h3>
<p>The body uses three primary buffer systems to resist pH changes:</p>
<ul>
<li><strong>Bicarbonate buffer system:</strong> The most important extracellular buffer. CO2 + H2O &harr; H2CO3 &harr; H+ + HCO3&minus;. This system links respiratory and metabolic regulation of pH.</li>
<li><strong>Phosphate buffer system:</strong> Important intracellularly and in renal tubules.</li>
<li><strong>Protein buffer system:</strong> Hemoglobin is the most significant protein buffer, accounting for about 75% of non-bicarbonate buffering in blood.</li>
</ul>

<h3>Henderson-Hasselbalch Equation</h3>
<p>pH = 6.1 + log([HCO3&minus;] / [0.03 &times; PaCO2]). This equation demonstrates that pH is determined by the ratio of HCO3&minus; to dissolved CO2. A normal 20:1 ratio of HCO3&minus; to dissolved CO2 yields a pH of 7.40. Any change in the ratio shifts the pH.</p>

<h3>Compensation Mechanisms</h3>
<table>
<thead><tr><th>Primary Disorder</th><th>pH</th><th>Primary Change</th><th>Compensation</th><th>Speed</th></tr></thead>
<tbody>
<tr><td>Respiratory acidosis</td><td>&darr;</td><td>PaCO2 &uarr;</td><td>Kidneys retain HCO3&minus;</td><td>3 &ndash; 5 days</td></tr>
<tr><td>Respiratory alkalosis</td><td>&uarr;</td><td>PaCO2 &darr;</td><td>Kidneys excrete HCO3&minus;</td><td>2 &ndash; 3 days</td></tr>
<tr><td>Metabolic acidosis</td><td>&darr;</td><td>HCO3&minus; &darr;</td><td>Lungs increase ventilation (blow off CO2)</td><td>Minutes to hours</td></tr>
<tr><td>Metabolic alkalosis</td><td>&uarr;</td><td>HCO3&minus; &uarr;</td><td>Lungs decrease ventilation (retain CO2)</td><td>Minutes to hours</td></tr>
</tbody>
</table>
<p><strong>Key rule:</strong> The body never overcompensates. If the pH has crossed to the opposite side of 7.40, a mixed disorder is present.</p>

<h3>Determining Compensation Status</h3>
<ul>
<li><strong>Uncompensated:</strong> pH is abnormal, only the primary system is out of range.</li>
<li><strong>Partially compensated:</strong> pH is still abnormal, but both respiratory and metabolic components are abnormal as the body works to correct the imbalance.</li>
<li><strong>Fully compensated:</strong> pH is within normal range (7.35 &ndash; 7.45), but both PaCO2 and HCO3&minus; are abnormal. The primary disorder is on the side of 7.40 where the pH falls.</li>
</ul>

<h3>Expected Compensation Formulas</h3>
<p>These formulas help distinguish appropriate compensation from mixed disorders:</p>
<ul>
<li><strong>Acute respiratory acidosis:</strong> HCO3&minus; increases 1 mEq/L for every 10 mmHg increase in PaCO2.</li>
<li><strong>Chronic respiratory acidosis:</strong> HCO3&minus; increases 3.5 mEq/L for every 10 mmHg increase in PaCO2.</li>
<li><strong>Metabolic acidosis (Winter's formula):</strong> Expected PaCO2 = (1.5 &times; HCO3&minus;) + 8 &plusmn; 2.</li>
<li><strong>Metabolic alkalosis:</strong> PaCO2 increases 0.7 mmHg for every 1 mEq/L increase in HCO3&minus;.</li>
</ul>

<h3>Clinical Application for RTs</h3>
<p>Acid-base interpretation directly guides respiratory therapy interventions. For respiratory acidosis, increase minute ventilation (raise rate or tidal volume). For respiratory alkalosis, decrease minute ventilation. For metabolic disorders, the respiratory system compensates automatically, but the RT must ensure ventilation is not being impeded or artificially altered.</p>

<h3>Exam Tips</h3>
<ul>
<li>Respiratory compensation occurs in minutes; renal compensation takes days.</li>
<li>The body never overcompensates &mdash; this rule helps identify mixed disorders.</li>
<li>pH 7.40 is the reference point for determining the primary disorder in fully compensated ABGs.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'lung-compliance-resistance',
    type: 'TOPIC' as const,
    title: 'Lung Compliance and Resistance Explained',
    description: 'Understand lung compliance and airway resistance including static vs dynamic compliance, calculations, and clinical significance for ventilator management.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Lung Compliance and Resistance Explained</h2>
<p>Lung compliance and airway resistance are fundamental concepts that govern how air flows into and out of the lungs. Understanding these mechanics is essential for ventilator management, troubleshooting, and NBRC exam success.</p>

<h3>Compliance Defined</h3>
<p>Compliance is the measure of how easily the lung and chest wall expand in response to a change in pressure. It is expressed as volume change per unit pressure change (mL/cmH2O).</p>
<ul>
<li><strong>Normal lung compliance:</strong> Approximately 100 mL/cmH2O for the lung alone, 200 mL/cmH2O for the chest wall alone, and 50 &ndash; 100 mL/cmH2O for the combined lung-thorax system.</li>
<li><strong>High compliance:</strong> The lung expands easily (e.g., emphysema &mdash; loss of elastic recoil).</li>
<li><strong>Low compliance (stiff lungs):</strong> The lung resists expansion (e.g., ARDS, pulmonary fibrosis, pulmonary edema, pneumothorax, atelectasis).</li>
</ul>

<h3>Static vs. Dynamic Compliance</h3>
<table>
<thead><tr><th>Type</th><th>Formula</th><th>What It Measures</th></tr></thead>
<tbody>
<tr><td>Static compliance (Cst)</td><td>Vt / (Pplat &minus; PEEP)</td><td>Elastic properties of the lung (no airflow). Measured during an inspiratory hold maneuver.</td></tr>
<tr><td>Dynamic compliance (Cdyn)</td><td>Vt / (PIP &minus; PEEP)</td><td>Both elastic and resistive properties (includes airway resistance).</td></tr>
</tbody>
</table>

<h3>Clinical Interpretation</h3>
<ul>
<li><strong>Both Cst and Cdyn decreased:</strong> A compliance problem exists (stiff lungs, chest wall restriction). Examples: ARDS, pulmonary fibrosis, pneumothorax, atelectasis, abdominal distension.</li>
<li><strong>Cdyn decreased but Cst normal:</strong> A resistance problem exists (airway narrowing). Examples: bronchospasm, secretions, kinked ETT, water in the circuit, biting on the tube.</li>
</ul>

<h3>Resistance Defined</h3>
<p>Airway resistance (Raw) is the opposition to airflow through the conducting airways. It is expressed as cmH2O/L/sec.</p>
<ul>
<li><strong>Normal airway resistance:</strong> 0.5 &ndash; 2.5 cmH2O/L/sec (higher through an ETT, typically 5 &ndash; 10 cmH2O/L/sec).</li>
<li><strong>Formula:</strong> Raw = (PIP &minus; Pplat) / Flow</li>
</ul>

<h3>Factors Affecting Resistance</h3>
<ul>
<li><strong>Airway radius:</strong> The most significant factor. Resistance is inversely proportional to the fourth power of the radius (Poiseuille's Law). A 50% reduction in radius increases resistance 16-fold.</li>
<li><strong>Airway length:</strong> Longer airways increase resistance (relevant with longer ETTs).</li>
<li><strong>Flow rate:</strong> Higher flow increases resistance, especially with turbulent flow.</li>
<li><strong>Gas density:</strong> Heliox (helium-oxygen mixture) reduces resistance by lowering gas density and promoting laminar flow.</li>
</ul>

<h3>Conditions That Increase Resistance</h3>
<ul>
<li>Bronchospasm (asthma, COPD exacerbation).</li>
<li>Airway secretions or mucus plugging.</li>
<li>Airway edema (croup, epiglottitis, post-extubation).</li>
<li>Small ETT size.</li>
<li>Kinked or obstructed tubing.</li>
</ul>

<h3>Ventilator Management Implications</h3>
<ul>
<li><strong>Low compliance:</strong> Use lower tidal volumes (lung-protective ventilation), higher PEEP for recruitment, and monitor plateau pressure closely (target &le; 30 cmH2O).</li>
<li><strong>High resistance:</strong> Increase inspiratory time or use a decelerating flow pattern, consider bronchodilators, suction secretions, and monitor for auto-PEEP.</li>
<li><strong>Driving pressure:</strong> Pplat &minus; PEEP. A driving pressure &lt; 15 cmH2O is associated with better outcomes in ARDS.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>If only Cdyn drops (Cst unchanged), think resistance (bronchospasm, secretions).</li>
<li>If both Cst and Cdyn drop, think compliance problem (ARDS, pneumothorax).</li>
<li>Resistance is proportional to 1/r&sup4; &mdash; small changes in radius cause massive changes in resistance.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-management">Ventilator Management Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'obstructive-sleep-apnea-guide',
    type: 'TOPIC' as const,
    title: 'Obstructive Sleep Apnea: Complete Guide',
    description: 'Comprehensive guide to obstructive sleep apnea covering diagnosis, AHI classification, polysomnography, CPAP therapy, and management for respiratory therapists.',
    division: 'sds',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Obstructive Sleep Apnea: Complete Guide</h2>
<p>Obstructive sleep apnea (OSA) is the most common sleep-related breathing disorder, affecting an estimated 10 &ndash; 30% of adults. Respiratory therapists who specialize in sleep medicine must understand the diagnosis, severity classification, and management of OSA for both clinical practice and the SDS credential exam.</p>

<h3>Definition and Pathophysiology</h3>
<p>OSA is characterized by repetitive episodes of partial (hypopnea) or complete (apnea) upper airway obstruction during sleep, despite ongoing respiratory effort. These events lead to intermittent hypoxemia, hypercapnia, sleep fragmentation, and sympathetic activation.</p>
<ul>
<li><strong>Apnea:</strong> Complete cessation of airflow for &ge; 10 seconds.</li>
<li><strong>Hypopnea:</strong> &ge; 30% reduction in airflow for &ge; 10 seconds with &ge; 3% oxygen desaturation or an arousal.</li>
</ul>

<h3>Risk Factors</h3>
<ul>
<li>Obesity (BMI &ge; 30 is the strongest modifiable risk factor).</li>
<li>Male sex (2:1 male-to-female ratio).</li>
<li>Age &gt; 40 years.</li>
<li>Large neck circumference (&gt; 17 inches in men, &gt; 16 inches in women).</li>
<li>Craniofacial abnormalities (retrognathia, macroglossia).</li>
<li>Family history of OSA.</li>
<li>Alcohol, sedatives, and muscle relaxants.</li>
</ul>

<h3>Diagnosis: Polysomnography</h3>
<p>In-laboratory polysomnography (PSG) is the gold standard for diagnosing OSA. Home sleep apnea testing (HSAT) is an alternative for patients with a high pretest probability and no significant comorbidities.</p>

<h3>Severity Classification: AHI</h3>
<p>The apnea-hypopnea index (AHI) is the number of apneas and hypopneas per hour of sleep:</p>
<table>
<thead><tr><th>Severity</th><th>AHI</th></tr></thead>
<tbody>
<tr><td>Normal</td><td>&lt; 5 events/hour</td></tr>
<tr><td>Mild OSA</td><td>5 &ndash; 14 events/hour</td></tr>
<tr><td>Moderate OSA</td><td>15 &ndash; 29 events/hour</td></tr>
<tr><td>Severe OSA</td><td>&ge; 30 events/hour</td></tr>
</tbody>
</table>
<p>OSA is diagnosed when the AHI is &ge; 5 with associated symptoms (excessive daytime sleepiness, witnessed apneas, choking/gasping during sleep) or when the AHI is &ge; 15 regardless of symptoms.</p>

<h3>Clinical Consequences</h3>
<ul>
<li>Excessive daytime sleepiness, morning headaches, cognitive impairment.</li>
<li>Increased risk of hypertension, atrial fibrillation, stroke, and myocardial infarction.</li>
<li>Metabolic syndrome and type 2 diabetes.</li>
<li>Motor vehicle accidents (2 &ndash; 7 times increased risk).</li>
<li>Pulmonary hypertension (in severe or untreated cases).</li>
</ul>

<h3>Treatment: CPAP Therapy</h3>
<p>Continuous positive airway pressure (CPAP) is the first-line treatment for moderate-to-severe OSA:</p>
<ul>
<li><strong>Mechanism:</strong> Pneumatic splinting of the upper airway, preventing collapse during sleep.</li>
<li><strong>Pressure determination:</strong> In-lab CPAP titration or auto-titrating CPAP (APAP) for home initiation.</li>
<li><strong>Typical pressures:</strong> 6 &ndash; 14 cmH2O for most patients.</li>
<li><strong>Interface selection:</strong> Nasal mask, nasal pillows, or full-face mask based on patient comfort and mouth leak.</li>
<li><strong>Adherence:</strong> Defined as &ge; 4 hours per night on &ge; 70% of nights. Adherence is the greatest challenge in CPAP therapy.</li>
</ul>

<h3>Alternative Treatments</h3>
<ul>
<li><strong>Oral appliances (MADs):</strong> Mandibular advancement devices for mild-to-moderate OSA or CPAP-intolerant patients.</li>
<li><strong>Positional therapy:</strong> For position-dependent OSA (events primarily in supine position).</li>
<li><strong>Weight loss:</strong> Can significantly reduce AHI in obese patients.</li>
<li><strong>Surgery:</strong> UPPP, maxillomandibular advancement, or hypoglossal nerve stimulation for selected patients.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>OSA diagnosis: AHI &ge; 5 with symptoms or AHI &ge; 15 regardless of symptoms.</li>
<li>CPAP is first-line treatment for moderate-to-severe OSA.</li>
<li>Adherence is defined as &ge; 4 hours per night on &ge; 70% of nights.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">SDS Exam Guide</a></li>
<li><a href="/cheat-sheets/sleep-disorders">Sleep Disorders Cheat Sheet</a></li>
<li><a href="/glossary/sleep-medicine">Sleep Medicine Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'central-sleep-apnea-guide',
    type: 'TOPIC' as const,
    title: 'Central Sleep Apnea: Diagnosis and Treatment',
    description: 'Learn about central sleep apnea including Cheyne-Stokes respiration, diagnosis, polysomnography findings, and treatment with ASV and BiPAP for sleep medicine specialists.',
    division: 'sds',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Central Sleep Apnea: Diagnosis and Treatment</h2>
<p>Central sleep apnea (CSA) is characterized by repetitive episodes of apnea during sleep caused by a lack of respiratory effort, unlike obstructive sleep apnea where effort is maintained against a closed airway. CSA represents a distinct pathophysiology and requires different treatment approaches.</p>

<h3>Pathophysiology</h3>
<p>In CSA, the brainstem respiratory centers fail to send appropriate signals to the respiratory muscles during sleep. This results in cessation of both airflow and respiratory effort. The underlying mechanism typically involves instability in the ventilatory control system, particularly the sensitivity of the chemoreceptors to CO2.</p>

<h3>Types of Central Sleep Apnea</h3>
<table>
<thead><tr><th>Type</th><th>Mechanism</th><th>Associated Conditions</th></tr></thead>
<tbody>
<tr><td>Idiopathic CSA</td><td>Hypersensitive CO2 response, PaCO2 drops below apneic threshold</td><td>No identifiable cause</td></tr>
<tr><td>Cheyne-Stokes Respiration (CSR)</td><td>Prolonged circulation time, oscillating ventilatory pattern</td><td>Heart failure (EF &lt; 45%), stroke</td></tr>
<tr><td>Treatment-Emergent CSA (CompSA)</td><td>CSA that develops after initiating CPAP for OSA</td><td>CPAP use for OSA</td></tr>
<tr><td>High-Altitude Periodic Breathing</td><td>Hypoxia-driven hyperventilation lowers PaCO2 below apneic threshold</td><td>Altitude &gt; 2,500 meters</td></tr>
<tr><td>Medication/Substance-Induced</td><td>Respiratory center depression</td><td>Opioids, brainstem lesions</td></tr>
</tbody>
</table>

<h3>Cheyne-Stokes Respiration</h3>
<p>CSR is the most clinically significant form of CSA. It is characterized by a crescendo-decrescendo breathing pattern with central apneas or hypopneas between cycles. The cycle length is typically 45 &ndash; 90 seconds. CSR is found in 30 &ndash; 50% of patients with heart failure with reduced ejection fraction.</p>

<h3>Diagnosis</h3>
<p>CSA is diagnosed by in-laboratory polysomnography (PSG). Key findings include:</p>
<ul>
<li>Apneas and hypopneas with absent respiratory effort (no thoracic or abdominal movement on respiratory effort belts).</li>
<li>Central apnea index (CAI) &ge; 5 events/hour.</li>
<li>Crescendo-decrescendo pattern on flow signal in CSR.</li>
<li>Absence of snoring or paradoxical breathing effort (distinguishes from obstructive events).</li>
</ul>

<h3>Treatment</h3>
<ul>
<li><strong>Treat the underlying condition:</strong> Optimize heart failure management (medications, cardiac resynchronization therapy), discontinue or reduce opioids when possible.</li>
<li><strong>CPAP:</strong> May be effective for some patients, particularly those with mixed central and obstructive events.</li>
<li><strong>Adaptive Servo-Ventilation (ASV):</strong> The primary device therapy for CSA. ASV automatically adjusts pressure support breath-by-breath to stabilize ventilation. <strong>Important contraindication:</strong> ASV is contraindicated in heart failure patients with EF &le; 45% (SERVE-HF trial showed increased cardiovascular mortality).</li>
<li><strong>BiPAP with backup rate (BiPAP-ST):</strong> Provides a mandatory backup rate to prevent central apneas. Used when ASV is contraindicated or unavailable.</li>
<li><strong>Supplemental oxygen:</strong> May reduce CSA severity by blunting the hypoxic ventilatory response.</li>
<li><strong>Acetazolamide:</strong> A carbonic anhydrase inhibitor that induces mild metabolic acidosis, stimulating ventilation and raising the apneic threshold. Used for high-altitude periodic breathing.</li>
</ul>

<h3>Treatment-Emergent CSA (CompSA)</h3>
<p>CompSA occurs when central apneas emerge or persist after obstructive events are eliminated by CPAP. It resolves spontaneously in most patients within weeks to months of continued CPAP use. If persistent, consider switching to ASV (if no HF with reduced EF) or BiPAP-ST.</p>

<h3>Exam Tips</h3>
<ul>
<li>Central apneas show absent respiratory effort on PSG &mdash; this distinguishes them from obstructive events.</li>
<li>ASV is contraindicated in HF with EF &le; 45%.</li>
<li>Cheyne-Stokes respiration is strongly associated with heart failure.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">SDS Exam Guide</a></li>
<li><a href="/cheat-sheets/sleep-disorders">Sleep Disorders Cheat Sheet</a></li>
<li><a href="/glossary/sleep-medicine">Sleep Medicine Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'neonatal-resuscitation-guide',
    type: 'TOPIC' as const,
    title: 'Neonatal Resuscitation (NRP) Guide for RTs',
    description: 'Complete neonatal resuscitation guide covering NRP algorithm, initial steps, positive pressure ventilation, chest compressions, and epinephrine for respiratory therapists.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Neonatal Resuscitation (NRP) Guide for RTs</h2>
<p>Neonatal resuscitation is a critical skill for respiratory therapists working in delivery rooms and NICUs. The Neonatal Resuscitation Program (NRP) provides a systematic, evidence-based algorithm for managing newborns who do not transition successfully at birth. Approximately 10% of newborns require some assistance at birth, and about 1% require extensive resuscitation.</p>

<h3>Pre-Delivery Preparation</h3>
<p>Before every delivery, the RT should:</p>
<ul>
<li>Review the maternal history and identify risk factors (prematurity, meconium, multiple gestation, maternal medications).</li>
<li>Prepare and check all equipment: radiant warmer, bag-mask device, appropriately sized masks, suction equipment, pulse oximeter, blended oxygen source, intubation supplies.</li>
<li>Confirm team roles and communication plan.</li>
</ul>

<h3>NRP Algorithm: Step-by-Step</h3>

<h4>Initial Assessment (Birth)</h4>
<p>Ask the three screening questions:</p>
<ol>
<li>Is the baby term gestation?</li>
<li>Does the baby have good muscle tone?</li>
<li>Is the baby breathing or crying?</li>
</ol>
<p>If all three are yes, the baby can stay with the mother for routine care (warmth, dry, clear airway as needed, ongoing assessment).</p>

<h4>Initial Steps (First 30 Seconds)</h4>
<p>If any screening question is no, move to the radiant warmer and perform initial steps:</p>
<ul>
<li><strong>Warm:</strong> Place under radiant warmer, dry thoroughly (use polyethylene wrap for infants &lt; 32 weeks).</li>
<li><strong>Position:</strong> Sniffing position (slight neck extension) to open the airway.</li>
<li><strong>Clear airway:</strong> Suction mouth then nose only if secretions are obstructing. Routine suctioning is no longer recommended.</li>
<li><strong>Stimulate:</strong> Gently rub the back or flick the soles of the feet.</li>
</ul>

<h4>Assess Heart Rate and Breathing</h4>
<p>After initial steps, assess the heart rate (HR) and breathing within 30 seconds:</p>
<ul>
<li>If HR &ge; 100 and baby is breathing/crying: provide supportive care, monitor SpO2.</li>
<li>If HR &lt; 100 or baby is apneic/gasping: begin positive pressure ventilation (PPV).</li>
</ul>

<h4>Positive Pressure Ventilation (PPV)</h4>
<ul>
<li><strong>Device:</strong> Self-inflating bag, flow-inflating bag, or T-piece resuscitator.</li>
<li><strong>Rate:</strong> 40 &ndash; 60 breaths/min.</li>
<li><strong>Initial FiO2:</strong> 21% (room air) for term infants; 21 &ndash; 30% for preterm infants. Titrate based on pre-ductal SpO2.</li>
<li><strong>Pressure:</strong> Initial PIP of 20 &ndash; 25 cmH2O; may need higher for the first few breaths.</li>
<li><strong>Assessment:</strong> The most important indicator of effective PPV is a rising heart rate. If HR is not improving, use the MR SOPA corrective steps.</li>
</ul>

<h4>MR SOPA Ventilation Corrective Steps</h4>
<table>
<thead><tr><th>Letter</th><th>Action</th></tr></thead>
<tbody>
<tr><td>M</td><td>Mask adjustment &mdash; ensure proper seal</td></tr>
<tr><td>R</td><td>Reposition &mdash; sniffing position</td></tr>
<tr><td>S</td><td>Suction mouth and nose</td></tr>
<tr><td>O</td><td>Open the mouth</td></tr>
<tr><td>P</td><td>Increase Pressure</td></tr>
<tr><td>A</td><td>Alternative Airway (intubation or laryngeal mask)</td></tr>
</tbody>
</table>

<h4>Chest Compressions</h4>
<p>If HR remains &lt; 60 bpm after 30 seconds of effective PPV with 100% oxygen:</p>
<ul>
<li><strong>Technique:</strong> Two-thumb encircling technique (preferred) or two-finger technique.</li>
<li><strong>Compression-to-ventilation ratio:</strong> 3:1 (three compressions to one ventilation).</li>
<li><strong>Rate:</strong> 120 events per minute (90 compressions + 30 ventilations).</li>
<li><strong>Depth:</strong> One-third of the anterior-posterior diameter of the chest.</li>
<li><strong>Increase FiO2 to 100%</strong> when compressions are initiated.</li>
</ul>

<h4>Epinephrine</h4>
<p>If HR remains &lt; 60 bpm after 60 seconds of coordinated chest compressions and PPV:</p>
<ul>
<li><strong>IV/UVC dose:</strong> 0.01 &ndash; 0.03 mg/kg (0.1 &ndash; 0.3 mL/kg of 1:10,000 concentration).</li>
<li><strong>ET dose:</strong> 0.05 &ndash; 0.1 mg/kg (0.5 &ndash; 1 mL/kg of 1:10,000) &mdash; used only if IV access is not yet available.</li>
<li>May repeat every 3 &ndash; 5 minutes.</li>
</ul>

<h3>Target SpO2 After Birth</h3>
<table>
<thead><tr><th>Time After Birth</th><th>Target Pre-Ductal SpO2</th></tr></thead>
<tbody>
<tr><td>1 minute</td><td>60 &ndash; 65%</td></tr>
<tr><td>2 minutes</td><td>65 &ndash; 70%</td></tr>
<tr><td>3 minutes</td><td>70 &ndash; 75%</td></tr>
<tr><td>4 minutes</td><td>75 &ndash; 80%</td></tr>
<tr><td>5 minutes</td><td>80 &ndash; 85%</td></tr>
<tr><td>10 minutes</td><td>85 &ndash; 95%</td></tr>
</tbody>
</table>

<h3>Exam Tips</h3>
<ul>
<li>Chest compressions to ventilations in neonates: 3:1 ratio.</li>
<li>Start with room air (21% O2) for term newborns; titrate based on pre-ductal SpO2.</li>
<li>The most important indicator of effective ventilation is a rising heart rate.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/neonatal-resuscitation">Neonatal Resuscitation Cheat Sheet</a></li>
<li><a href="/glossary/neonatal-care">Neonatal Care Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'pediatric-respiratory-emergencies',
    type: 'TOPIC' as const,
    title: 'Pediatric Respiratory Emergencies Guide',
    description: 'Guide to pediatric respiratory emergencies including croup, epiglottitis, bronchiolitis, status asthmaticus, and foreign body aspiration for respiratory therapists.',
    division: 'nps',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Pediatric Respiratory Emergencies Guide</h2>
<p>Pediatric respiratory emergencies are among the most critical situations respiratory therapists encounter. Children have unique anatomical and physiological features that predispose them to rapid respiratory deterioration. Prompt recognition and intervention are essential to prevent cardiopulmonary arrest.</p>

<h3>Pediatric Airway Differences</h3>
<ul>
<li>Proportionally larger tongue and occiput.</li>
<li>Larynx is more cephalad (C3-C4 in infants vs. C4-C5 in adults) and more anterior.</li>
<li>Narrowest point is the cricoid ring (subglottic area) in children &lt; 8 years, vs. the glottis in adults.</li>
<li>Shorter trachea (increased risk of right mainstem intubation).</li>
<li>Smaller airway diameter &mdash; minimal edema causes significant obstruction (1 mm of edema reduces an infant's airway cross-sectional area by approximately 50%).</li>
<li>Higher metabolic rate and oxygen consumption per kg &mdash; faster desaturation.</li>
</ul>

<h3>Croup (Laryngotracheobronchitis)</h3>
<ul>
<li><strong>Etiology:</strong> Viral (parainfluenza virus most common), ages 6 months &ndash; 3 years.</li>
<li><strong>Presentation:</strong> Barking (seal-like) cough, inspiratory stridor, hoarseness, low-grade fever. Worse at night.</li>
<li><strong>Steeple sign</strong> on AP neck X-ray (subglottic narrowing).</li>
<li><strong>Treatment:</strong> Cool mist or humidified air, nebulized racemic epinephrine (0.5 mL of 2.25% in 3 mL NS) for moderate-to-severe stridor, systemic corticosteroids (dexamethasone 0.6 mg/kg PO/IM, single dose). Observe for at least 3 &ndash; 4 hours after racemic epinephrine due to potential rebound.</li>
</ul>

<h3>Epiglottitis</h3>
<ul>
<li><strong>Etiology:</strong> Bacterial (historically H. influenzae type b, now less common due to Hib vaccine; currently Streptococcus and Staphylococcus).</li>
<li><strong>Presentation:</strong> Acute onset, high fever, drooling, dysphagia, muffled voice, tripod positioning, toxic appearance. Typically ages 2 &ndash; 7 years but can occur at any age.</li>
<li><strong>Thumbprint sign</strong> on lateral neck X-ray (swollen epiglottis).</li>
<li><strong>Critical management:</strong> Do NOT attempt to visualize the airway, do NOT use a tongue depressor, do NOT agitate the child. Keep the child calm, call for anesthesia/ENT for controlled intubation in the operating room. IV antibiotics. This is a true airway emergency.</li>
</ul>

<h3>Bronchiolitis</h3>
<ul>
<li><strong>Etiology:</strong> RSV (respiratory syncytial virus) is the most common cause. Typically affects infants &lt; 2 years, peak at 2 &ndash; 6 months.</li>
<li><strong>Presentation:</strong> Rhinorrhea, wheezing, crackles, tachypnea, nasal flaring, intercostal retractions, poor feeding.</li>
<li><strong>Treatment:</strong> Supportive care is the mainstay &mdash; supplemental oxygen, hydration, nasal suctioning. High-flow nasal cannula (HFNC) for moderate-to-severe cases. Bronchodilators are generally not recommended (AAP guidelines). Ribavirin for severe RSV in immunocompromised patients. Palivizumab (Synagis) for prevention in high-risk infants.</li>
</ul>

<h3>Status Asthmaticus</h3>
<ul>
<li><strong>Definition:</strong> Severe asthma exacerbation that does not respond to initial bronchodilator therapy.</li>
<li><strong>Presentation:</strong> Severe dyspnea, accessory muscle use, inability to speak in full sentences, SpO2 &lt; 90%, silent chest (ominous sign indicating minimal airflow).</li>
<li><strong>Treatment:</strong> Continuous nebulized albuterol, ipratropium bromide (first 3 doses), IV magnesium sulfate (40 &ndash; 75 mg/kg, max 2 g), systemic corticosteroids. Consider heliox (60:40 or 70:30 helium-oxygen) to improve gas delivery in severe obstruction. BiPAP for impending respiratory failure. Intubation is a last resort &mdash; high risk of complications in severe bronchospasm.</li>
</ul>

<h3>Foreign Body Aspiration</h3>
<ul>
<li><strong>Epidemiology:</strong> Most common in children ages 1 &ndash; 3 years. Right mainstem bronchus is the most common location due to its larger diameter and more vertical angle.</li>
<li><strong>Presentation:</strong> Sudden onset choking, coughing, unilateral wheezing or decreased breath sounds, stridor if in the upper airway.</li>
<li><strong>Diagnosis:</strong> Inspiratory and expiratory chest X-rays (expiratory film shows air trapping on the affected side). Lateral decubitus films in infants.</li>
<li><strong>Treatment:</strong> Rigid bronchoscopy for removal. Back blows and chest thrusts for infants &lt; 1 year; abdominal thrusts (Heimlich) for children &gt; 1 year. Do not perform blind finger sweeps.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Croup = barking cough and steeple sign; epiglottitis = drooling and thumbprint sign.</li>
<li>Never agitate or attempt to visualize the airway in suspected epiglottitis.</li>
<li>Foreign bodies lodge more commonly in the right mainstem bronchus.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NPS Exam Guide</a></li>
<li><a href="/cheat-sheets/pediatric-emergencies">Pediatric Emergencies Cheat Sheet</a></li>
<li><a href="/glossary/pediatric-care">Pediatric Care Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'spirometry-technique-quality',
    type: 'TOPIC' as const,
    title: 'Spirometry Technique and Quality Control',
    description: 'Master spirometry technique, acceptability criteria, reproducibility standards, and quality control for pulmonary function testing and CPFT exam preparation.',
    division: 'cpft',
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Spirometry Technique and Quality Control</h2>
<p>Spirometry is the most commonly performed pulmonary function test and the foundation of PFT interpretation. Proper technique and quality control are essential for obtaining accurate, reproducible results. Respiratory therapists who specialize in pulmonary function testing must master these skills for clinical practice and the CPFT credential exam.</p>

<h3>Patient Preparation</h3>
<ul>
<li>Withhold short-acting bronchodilators for 4 &ndash; 6 hours and long-acting bronchodilators for 12 &ndash; 24 hours before testing (if bronchodilator response is being assessed).</li>
<li>No smoking for at least 1 hour before testing.</li>
<li>Avoid heavy meals for 2 hours and vigorous exercise for 30 minutes before testing.</li>
<li>Record patient height, weight, age, sex, and race/ethnicity for predicted value calculations.</li>
<li>Explain the procedure and demonstrate the maneuver.</li>
</ul>

<h3>Performing the FVC Maneuver</h3>
<ol>
<li>Patient seated upright with feet flat on the floor. Noseclip in place.</li>
<li>Place the mouthpiece in the mouth with lips sealed tightly around it.</li>
<li>Breathe normally (tidal breathing) for a few breaths.</li>
<li>Inhale maximally to total lung capacity (TLC).</li>
<li>Blast the air out as hard and fast as possible (maximal effort from the start).</li>
<li>Continue exhaling until the end-of-test criteria are met.</li>
<li>Inhale rapidly and completely back to TLC.</li>
</ol>

<h3>ATS/ERS Acceptability Criteria</h3>
<p>Each FVC maneuver must meet the following criteria to be considered acceptable:</p>
<table>
<thead><tr><th>Criterion</th><th>Requirement</th></tr></thead>
<tbody>
<tr><td>Start of test (BEV)</td><td>Back-extrapolated volume &lt; 5% of FVC or 150 mL, whichever is greater</td></tr>
<tr><td>Maximal effort</td><td>No hesitation, no submaximal effort, no cough in the first second</td></tr>
<tr><td>No artifacts</td><td>No glottis closure, no leak, no mouthpiece obstruction by tongue or teeth</td></tr>
<tr><td>End of test</td><td>Exhalation &ge; 6 seconds (adults), &ge; 3 seconds (children &lt; 10), OR volume plateau (&lt; 25 mL in the last 1 second)</td></tr>
</tbody>
</table>

<h3>Reproducibility Criteria</h3>
<p>After obtaining at least three acceptable maneuvers, the two largest FVC values and the two largest FEV1 values must be within:</p>
<ul>
<li><strong>FVC:</strong> Within 150 mL of each other.</li>
<li><strong>FEV1:</strong> Within 150 mL of each other.</li>
</ul>
<p>A maximum of 8 attempts should be made to achieve reproducibility. Report the largest FVC and the largest FEV1 from acceptable maneuvers (they may come from different maneuvers).</p>

<h3>Common Errors and Coaching</h3>
<table>
<thead><tr><th>Error</th><th>Effect</th><th>Coaching Tip</th></tr></thead>
<tbody>
<tr><td>Slow start / hesitation</td><td>Falsely low FEV1, increased BEV</td><td>"Blast it out! Harder! Faster!"</td></tr>
<tr><td>Submaximal effort</td><td>Falsely low FVC and FEV1</td><td>"Push harder! Keep going!"</td></tr>
<tr><td>Early termination</td><td>Falsely low FVC</td><td>"Keep blowing! Don't stop!"</td></tr>
<tr><td>Cough in first second</td><td>Falsely affects FEV1</td><td>"Try to hold back the cough"</td></tr>
<tr><td>Glottis closure</td><td>Premature flow cessation</td><td>"Keep your throat open, keep pushing"</td></tr>
<tr><td>Air leak around mouthpiece</td><td>Falsely low volumes</td><td>"Seal your lips tighter"</td></tr>
</tbody>
</table>

<h3>Quality Grading (ATS/ERS 2019)</h3>
<p>Sessions are graded based on acceptability and reproducibility:</p>
<ul>
<li><strong>Grade A:</strong> &ge; 3 acceptable maneuvers with reproducibility within 150 mL.</li>
<li><strong>Grade B:</strong> &ge; 2 acceptable maneuvers within 150 mL.</li>
<li><strong>Grade C:</strong> &ge; 2 acceptable maneuvers within 200 mL.</li>
<li><strong>Grade D:</strong> &ge; 2 acceptable maneuvers within 250 mL.</li>
<li><strong>Grade E:</strong> Only 1 acceptable maneuver.</li>
<li><strong>Grade F:</strong> No acceptable maneuvers.</li>
</ul>

<h3>Equipment Quality Control</h3>
<ul>
<li><strong>Daily calibration check:</strong> Using a 3-liter syringe, volume should be within &plusmn; 3.5% (2.90 &ndash; 3.11 L).</li>
<li><strong>Leak check:</strong> Apply positive pressure; no volume loss over 30 seconds.</li>
<li><strong>Linearity check:</strong> Quarterly, using different flow rates with the 3-liter syringe.</li>
<li><strong>Biological control (bio-QC):</strong> A healthy nonsmoker performs weekly testing to monitor equipment drift.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Reproducibility criteria: FVC and FEV1 within 150 mL between the two best efforts.</li>
<li>Report the largest FVC and largest FEV1, even from different maneuvers.</li>
<li>Calibration syringe: 3-liter, accuracy within &plusmn; 3.5%.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">CPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/spirometry">Spirometry Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'lung-volumes-capacities',
    type: 'TOPIC' as const,
    title: 'Lung Volumes and Capacities Explained',
    description: 'Comprehensive guide to lung volumes and capacities including measurement methods, normal values, and clinical significance for pulmonary function testing.',
    division: 'cpft',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Lung Volumes and Capacities Explained</h2>
<p>Understanding lung volumes and capacities is fundamental to pulmonary function testing and respiratory therapy. A lung volume is a single, non-overlapping measurement, while a capacity is the sum of two or more volumes. Respiratory therapists must know normal values, measurement methods, and clinical significance for both practice and the CPFT exam.</p>

<h3>The Four Lung Volumes</h3>
<table>
<thead><tr><th>Volume</th><th>Definition</th><th>Normal Adult Value</th></tr></thead>
<tbody>
<tr><td>Tidal Volume (VT)</td><td>Volume of air inhaled or exhaled during normal quiet breathing</td><td>~500 mL</td></tr>
<tr><td>Inspiratory Reserve Volume (IRV)</td><td>Maximum volume that can be inhaled above tidal volume</td><td>~3,100 mL</td></tr>
<tr><td>Expiratory Reserve Volume (ERV)</td><td>Maximum volume that can be exhaled beyond tidal volume</td><td>~1,200 mL</td></tr>
<tr><td>Residual Volume (RV)</td><td>Volume remaining in the lungs after maximal exhalation</td><td>~1,200 mL</td></tr>
</tbody>
</table>

<h3>The Four Lung Capacities</h3>
<table>
<thead><tr><th>Capacity</th><th>Components</th><th>Normal Adult Value</th></tr></thead>
<tbody>
<tr><td>Total Lung Capacity (TLC)</td><td>VT + IRV + ERV + RV</td><td>~6,000 mL</td></tr>
<tr><td>Vital Capacity (VC)</td><td>VT + IRV + ERV</td><td>~4,800 mL</td></tr>
<tr><td>Inspiratory Capacity (IC)</td><td>VT + IRV</td><td>~3,600 mL</td></tr>
<tr><td>Functional Residual Capacity (FRC)</td><td>ERV + RV</td><td>~2,400 mL</td></tr>
</tbody>
</table>

<h3>Measurement Methods</h3>
<p>Spirometry can measure VT, IRV, ERV, and the capacities that do not include RV (VC, IC). However, RV cannot be measured by spirometry because it is the gas that cannot be exhaled. Therefore, FRC, RV, and TLC require specialized techniques:</p>

<h4>Body Plethysmography</h4>
<p>The gold standard for measuring FRC and TLC. The patient sits in an airtight chamber (body box) and pants against a closed shutter. Using Boyle's Law (P1V1 = P2V2), thoracic gas volume (FRC) is calculated from pressure changes at the mouth and in the box. Advantages: measures all gas in the thorax including trapped gas.</p>

<h4>Nitrogen Washout</h4>
<p>An open-circuit method. The patient breathes 100% oxygen while exhaled nitrogen is measured. When nitrogen is completely washed out, FRC is calculated. Takes approximately 7 minutes. Underestimates FRC in patients with significant air trapping compared to plethysmography.</p>

<h4>Helium Dilution</h4>
<p>A closed-circuit method. The patient rebreathes from a circuit containing a known concentration of helium. As helium equilibrates with the patient's FRC, the dilution is measured and FRC is calculated. Also underestimates FRC in air-trapping diseases.</p>

<h3>Clinical Significance</h3>

<h4>Obstructive Diseases (COPD, Asthma, Bronchiectasis)</h4>
<ul>
<li>Air trapping increases RV and FRC.</li>
<li>TLC may be increased (hyperinflation) in emphysema.</li>
<li>RV/TLC ratio is elevated (&gt; 35% suggests significant air trapping).</li>
<li>VC may be decreased due to increased RV occupying more of TLC.</li>
</ul>

<h4>Restrictive Diseases (Pulmonary Fibrosis, Chest Wall Deformity, Neuromuscular Disease)</h4>
<ul>
<li>All volumes and capacities are proportionally reduced.</li>
<li>TLC &lt; 80% predicted is the defining criterion for a restrictive defect.</li>
<li>RV/TLC ratio is usually normal.</li>
</ul>

<h4>Key Differences: Obstructive vs. Restrictive</h4>
<table>
<thead><tr><th>Parameter</th><th>Obstructive</th><th>Restrictive</th></tr></thead>
<tbody>
<tr><td>TLC</td><td>Normal or increased</td><td>Decreased</td></tr>
<tr><td>RV</td><td>Increased</td><td>Decreased</td></tr>
<tr><td>FRC</td><td>Increased</td><td>Decreased</td></tr>
<tr><td>RV/TLC</td><td>Increased</td><td>Normal</td></tr>
<tr><td>FEV1/FVC</td><td>Decreased (&lt; 0.70)</td><td>Normal or increased</td></tr>
</tbody>
</table>

<h3>Exam Tips</h3>
<ul>
<li>RV cannot be measured by spirometry &mdash; requires plethysmography, nitrogen washout, or helium dilution.</li>
<li>Body plethysmography measures ALL thoracic gas, including trapped gas; gas dilution methods do not.</li>
<li>TLC &lt; 80% predicted = restrictive defect; FEV1/FVC &lt; 0.70 = obstructive defect.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">CPFT Exam Guide</a></li>
<li><a href="/cheat-sheets/lung-volumes">Lung Volumes Cheat Sheet</a></li>
<li><a href="/glossary/pulmonary-function">Pulmonary Function Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'metabolic-acid-base-disorders',
    type: 'TOPIC' as const,
    title: 'Metabolic Acid-Base Disorders for RTs',
    description: 'Understand metabolic acidosis and metabolic alkalosis including anion gap, causes, ABG patterns, and treatment for respiratory therapists preparing for NBRC exams.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Metabolic Acid-Base Disorders for RTs</h2>
<p>Metabolic acid-base disorders involve primary changes in bicarbonate (HCO3&minus;) concentration. While the kidneys are the primary regulators of metabolic acid-base balance, respiratory therapists must recognize these disorders because the lungs compensate for metabolic disturbances and because ABG interpretation is a core RT skill.</p>

<h3>Normal Values Review</h3>
<table>
<thead><tr><th>Parameter</th><th>Normal Range</th></tr></thead>
<tbody>
<tr><td>pH</td><td>7.35 &ndash; 7.45</td></tr>
<tr><td>HCO3&minus;</td><td>22 &ndash; 26 mEq/L</td></tr>
<tr><td>Base Excess</td><td>&minus;2 to +2 mEq/L</td></tr>
<tr><td>Anion Gap</td><td>8 &ndash; 12 mEq/L</td></tr>
</tbody>
</table>

<h3>Metabolic Acidosis</h3>
<p>Metabolic acidosis is defined by a pH &lt; 7.35 with HCO3&minus; &lt; 22 mEq/L. It results from either acid accumulation or bicarbonate loss.</p>

<h4>Anion Gap Classification</h4>
<p>Anion Gap = Na+ &minus; (Cl&minus; + HCO3&minus;). Normal: 8 &ndash; 12 mEq/L.</p>

<p><strong>Elevated Anion Gap Metabolic Acidosis (HAGMA):</strong> Caused by accumulation of unmeasured acids. Use the mnemonic <strong>MUDPILES</strong>:</p>
<ul>
<li><strong>M</strong>ethanol ingestion</li>
<li><strong>U</strong>remia (renal failure)</li>
<li><strong>D</strong>iabetic ketoacidosis (DKA)</li>
<li><strong>P</strong>ropylene glycol</li>
<li><strong>I</strong>soniazid / Iron toxicity</li>
<li><strong>L</strong>actic acidosis (shock, sepsis, hypoperfusion)</li>
<li><strong>E</strong>thylene glycol</li>
<li><strong>S</strong>alicylate (aspirin) toxicity</li>
</ul>

<p><strong>Normal Anion Gap Metabolic Acidosis (NAGMA):</strong> Also called hyperchloremic metabolic acidosis. Caused by loss of HCO3&minus; or impaired renal acid excretion. Use the mnemonic <strong>HARDUPS</strong>:</p>
<ul>
<li><strong>H</strong>yperalimentation</li>
<li><strong>A</strong>cetazolamide / Addison's disease</li>
<li><strong>R</strong>enal tubular acidosis</li>
<li><strong>D</strong>iarrhea (most common cause)</li>
<li><strong>U</strong>retero-sigmoid fistula</li>
<li><strong>P</strong>ancreatic fistula / drainage</li>
<li><strong>S</strong>aline infusion (dilutional)</li>
</ul>

<h4>Respiratory Compensation</h4>
<p>The lungs compensate by increasing ventilation to lower PaCO2. Use Winter's formula to check if compensation is appropriate: Expected PaCO2 = (1.5 &times; HCO3&minus;) + 8 &plusmn; 2. If actual PaCO2 differs significantly from expected, a mixed disorder is present.</p>

<h4>Treatment</h4>
<ul>
<li>Treat the underlying cause (insulin for DKA, fluids and antibiotics for sepsis, dialysis for toxins).</li>
<li>Sodium bicarbonate administration is controversial and generally reserved for severe acidosis (pH &lt; 7.10 &ndash; 7.15) or specific toxicities.</li>
<li>Ensure adequate ventilation &mdash; do not suppress respiratory compensation.</li>
</ul>

<h3>Metabolic Alkalosis</h3>
<p>Metabolic alkalosis is defined by a pH &gt; 7.45 with HCO3&minus; &gt; 26 mEq/L. It is the most common acid-base disorder in hospitalized patients.</p>

<h4>Common Causes</h4>
<ul>
<li><strong>Chloride-responsive (urine Cl&minus; &lt; 20):</strong> Vomiting, nasogastric suction, diuretic use (contraction alkalosis). Treated with normal saline (volume and chloride repletion).</li>
<li><strong>Chloride-resistant (urine Cl&minus; &gt; 20):</strong> Hyperaldosteronism, Cushing's syndrome, severe hypokalemia. Requires treatment of the underlying endocrine disorder.</li>
</ul>

<h4>Respiratory Compensation</h4>
<p>The lungs compensate by decreasing ventilation to retain CO2. However, respiratory compensation for metabolic alkalosis is limited because hypoventilation leads to hypoxemia, which stimulates ventilation. PaCO2 rarely rises above 55 mmHg as compensation.</p>

<h4>Treatment</h4>
<ul>
<li>Chloride-responsive: Normal saline, KCl replacement, discontinue diuretics.</li>
<li>Chloride-resistant: Treat the underlying condition.</li>
<li>Severe cases (pH &gt; 7.55): Consider acetazolamide or HCl infusion.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Always calculate the anion gap when metabolic acidosis is present.</li>
<li>MUDPILES for elevated AG; diarrhea is the most common cause of normal AG acidosis.</li>
<li>Winter's formula checks the adequacy of respiratory compensation in metabolic acidosis.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'respiratory-acid-base-disorders',
    type: 'TOPIC' as const,
    title: 'Respiratory Acid-Base Disorders Guide',
    description: 'Complete guide to respiratory acidosis and respiratory alkalosis including acute vs chronic presentations, causes, compensation, and management for NBRC exam prep.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Respiratory Acid-Base Disorders Guide</h2>
<p>Respiratory acid-base disorders involve primary changes in PaCO2 due to alterations in alveolar ventilation. Because CO2 is directly regulated by the lungs, respiratory therapists are the primary clinicians responsible for correcting these disorders. Understanding acute versus chronic presentations and appropriate interventions is essential for NBRC exam success.</p>

<h3>Respiratory Acidosis</h3>
<p>Respiratory acidosis occurs when PaCO2 rises above 45 mmHg due to inadequate alveolar ventilation (hypoventilation). The excess CO2 combines with water to form carbonic acid, lowering blood pH.</p>

<h4>Acute vs. Chronic</h4>
<table>
<thead><tr><th>Feature</th><th>Acute</th><th>Chronic</th></tr></thead>
<tbody>
<tr><td>pH</td><td>Significantly decreased</td><td>Near normal (7.35 &ndash; 7.38)</td></tr>
<tr><td>HCO3&minus; response</td><td>Increases ~1 mEq/L per 10 mmHg rise in PaCO2</td><td>Increases ~3.5 mEq/L per 10 mmHg rise in PaCO2</td></tr>
<tr><td>Compensation</td><td>Minimal (buffering only)</td><td>Significant renal compensation (takes 3 &ndash; 5 days)</td></tr>
</tbody>
</table>

<h4>Common Causes</h4>
<ul>
<li><strong>CNS depression:</strong> Drug overdose (opioids, benzodiazepines, barbiturates), head trauma, brainstem stroke.</li>
<li><strong>Neuromuscular disease:</strong> Myasthenia gravis, Guillain-Barr&eacute; syndrome, ALS, muscular dystrophy, spinal cord injury.</li>
<li><strong>Chest wall disorders:</strong> Flail chest, kyphoscoliosis, morbid obesity (obesity hypoventilation syndrome).</li>
<li><strong>Airway obstruction:</strong> Severe COPD, status asthmaticus, upper airway obstruction.</li>
<li><strong>Pulmonary disease:</strong> Severe pneumonia, massive pulmonary embolism, late-stage ARDS.</li>
</ul>

<h4>Management</h4>
<ul>
<li><strong>Acute:</strong> Increase alveolar ventilation. For mild cases, stimulate deeper breathing, incentive spirometry. For severe cases (pH &lt; 7.25 or declining mental status), initiate noninvasive ventilation (BiPAP) or intubation with mechanical ventilation.</li>
<li><strong>Chronic:</strong> Treat cautiously. Rapidly lowering PaCO2 in a chronically compensated patient can cause post-hypercapnic metabolic alkalosis (kidneys have already retained excess HCO3&minus;). Target gradual CO2 correction.</li>
<li>Treat the underlying cause: naloxone for opioid overdose, bronchodilators for COPD/asthma, antibiotics for pneumonia.</li>
</ul>

<h3>Respiratory Alkalosis</h3>
<p>Respiratory alkalosis occurs when PaCO2 falls below 35 mmHg due to excessive alveolar ventilation (hyperventilation). It is the most common acid-base disturbance in critically ill patients.</p>

<h4>Acute vs. Chronic</h4>
<table>
<thead><tr><th>Feature</th><th>Acute</th><th>Chronic</th></tr></thead>
<tbody>
<tr><td>pH</td><td>Significantly elevated</td><td>Near normal (7.42 &ndash; 7.45)</td></tr>
<tr><td>HCO3&minus; response</td><td>Decreases ~2 mEq/L per 10 mmHg drop in PaCO2</td><td>Decreases ~5 mEq/L per 10 mmHg drop in PaCO2</td></tr>
<tr><td>Compensation</td><td>Minimal</td><td>Significant renal compensation (2 &ndash; 3 days)</td></tr>
</tbody>
</table>

<h4>Common Causes</h4>
<ul>
<li><strong>Hypoxemia-driven:</strong> Pneumonia, pulmonary embolism, high altitude, severe anemia.</li>
<li><strong>CNS stimulation:</strong> Anxiety, pain, fever, head injury, meningitis, salicylate toxicity.</li>
<li><strong>Mechanical ventilation:</strong> Excessive rate or tidal volume (iatrogenic hyperventilation).</li>
<li><strong>Pregnancy:</strong> Progesterone stimulates the respiratory center, normal PaCO2 in pregnancy is 28 &ndash; 32 mmHg.</li>
<li><strong>Sepsis:</strong> Early sepsis commonly presents with respiratory alkalosis due to hyperventilation.</li>
</ul>

<h4>Management</h4>
<ul>
<li>Treat the underlying cause: correct hypoxemia, manage anxiety and pain, treat infection.</li>
<li>If mechanically ventilated: reduce respiratory rate or tidal volume to decrease minute ventilation.</li>
<li>For anxiety-induced hyperventilation: coaching, reassurance, and slow breathing techniques. Do NOT use rebreathing bags (risk of hypoxemia).</li>
<li>Severe alkalosis (pH &gt; 7.55): Can cause arrhythmias, seizures, and decreased cerebral blood flow. Urgent correction is needed.</li>
</ul>

<h3>Mixed Respiratory Disorders</h3>
<p>A patient can have a respiratory acid-base disorder combined with a metabolic disorder. Clues to mixed disorders:</p>
<ul>
<li>pH is more abnormal than expected for the level of PaCO2 change (combined respiratory and metabolic disorder in the same direction).</li>
<li>pH is normal but both PaCO2 and HCO3&minus; are significantly abnormal in opposite directions.</li>
<li>Compensation does not match expected formulas.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>Respiratory acidosis: PaCO2 &gt; 45, management = increase ventilation.</li>
<li>Respiratory alkalosis: PaCO2 &lt; 35, management = decrease ventilation or treat the cause.</li>
<li>Never rapidly correct chronic respiratory acidosis &mdash; risk of post-hypercapnic alkalosis.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/glossary/acid-base">Acid-Base Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'ventilator-associated-pneumonia',
    type: 'TOPIC' as const,
    title: 'Ventilator-Associated Pneumonia Prevention',
    description: 'Learn ventilator-associated pneumonia (VAP) prevention strategies, VAP bundle elements, diagnosis, and risk factors for respiratory therapists and NBRC exam prep.',
    division: 'accs',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Ventilator-Associated Pneumonia Prevention</h2>
<p>Ventilator-associated pneumonia (VAP) is a hospital-acquired pneumonia that develops 48 hours or more after endotracheal intubation and mechanical ventilation. VAP significantly increases morbidity, mortality, ICU length of stay, and healthcare costs. Respiratory therapists play a vital role in VAP prevention through evidence-based practices.</p>

<h3>Definition and Epidemiology</h3>
<ul>
<li>VAP occurs in 5 &ndash; 40% of mechanically ventilated patients.</li>
<li>Each day of mechanical ventilation increases VAP risk by 1 &ndash; 3%.</li>
<li>Attributable mortality: 13 &ndash; 25%.</li>
<li>Most common ICU-acquired infection.</li>
</ul>

<h3>Pathophysiology</h3>
<p>VAP develops when bacteria colonize the oropharynx and are then aspirated past the endotracheal tube cuff into the lower respiratory tract. The endotracheal tube provides a direct path for bacterial migration and impairs normal airway defense mechanisms (cough, mucociliary clearance). Biofilm formation on the ETT surface serves as a reservoir for pathogenic bacteria.</p>

<h3>Risk Factors</h3>
<table>
<thead><tr><th>Category</th><th>Risk Factors</th></tr></thead>
<tbody>
<tr><td>Patient-related</td><td>Age &gt; 60, COPD, immunosuppression, malnutrition, decreased level of consciousness, supine positioning</td></tr>
<tr><td>Treatment-related</td><td>Prolonged intubation, reintubation, frequent circuit changes, gastric over-distension, enteral feeding, sedation</td></tr>
<tr><td>Device-related</td><td>Biofilm on ETT, contaminated respiratory equipment, nasogastric tubes</td></tr>
</tbody>
</table>

<h3>VAP Prevention Bundle</h3>
<p>The VAP bundle is a set of evidence-based interventions that, when implemented together, reduce VAP incidence. Key elements include:</p>

<h4>1. Elevation of the Head of Bed (HOB)</h4>
<p>Maintain the head of bed elevated to 30 &ndash; 45 degrees to reduce aspiration of gastric contents and oropharyngeal secretions. This is one of the most effective and simplest interventions.</p>

<h4>2. Daily Sedation Interruption and Assessment of Readiness to Extubate</h4>
<p>Daily sedation vacations reduce ventilator days. Combined with spontaneous breathing trials (SBTs), this approach facilitates earlier liberation from mechanical ventilation.</p>

<h4>3. Oral Care with Chlorhexidine</h4>
<p>Chlorhexidine (0.12%) oral rinse or gel applied every 6 &ndash; 12 hours reduces oropharyngeal bacterial colonization. Combined with toothbrushing for mechanical plaque removal.</p>

<h4>4. Peptic Ulcer Disease (PUD) Prophylaxis</h4>
<p>Stress ulcer prophylaxis (H2 blockers or proton pump inhibitors) prevents GI bleeding. However, gastric pH elevation may promote bacterial colonization &mdash; sucralfate is an alternative that does not alter pH.</p>

<h4>5. Deep Venous Thrombosis (DVT) Prophylaxis</h4>
<p>While not directly preventing VAP, DVT prophylaxis is part of the standard ICU care bundle and reduces overall morbidity.</p>

<h4>6. Subglottic Secretion Drainage</h4>
<p>ETTs with subglottic suction ports allow continuous or intermittent aspiration of secretions that pool above the cuff, reducing micro-aspiration. Studies show a 45% reduction in VAP rates.</p>

<h3>Additional RT-Specific Interventions</h3>
<ul>
<li><strong>Maintain cuff pressure:</strong> 20 &ndash; 30 cmH2O to prevent micro-aspiration while avoiding tracheal mucosal damage.</li>
<li><strong>Avoid unnecessary circuit changes:</strong> Change ventilator circuits only when visibly soiled, not on a routine schedule. Frequent changes increase contamination risk.</li>
<li><strong>Closed suction systems:</strong> Use in-line suction catheters when possible to maintain ventilation and reduce environmental contamination.</li>
<li><strong>Condensate management:</strong> Drain circuit condensate away from the patient and into appropriate waste containers. Never drain condensate back toward the patient.</li>
<li><strong>Hand hygiene:</strong> Before and after any patient contact, ventilator circuit manipulation, or suctioning.</li>
</ul>

<h3>Diagnosis of VAP</h3>
<p>Clinical diagnosis is challenging. Suspect VAP when a ventilated patient develops:</p>
<ul>
<li>New or progressive chest X-ray infiltrate.</li>
<li>Plus at least two of: fever (&gt; 38&deg;C), leukocytosis or leukopenia, purulent secretions.</li>
<li>Lower respiratory tract cultures (BAL, protected specimen brush, or endotracheal aspirate) confirm the pathogen.</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>HOB elevation to 30 &ndash; 45 degrees is a core VAP prevention measure.</li>
<li>Ventilator circuits should NOT be changed routinely &mdash; only when visibly soiled.</li>
<li>Subglottic secretion drainage significantly reduces VAP rates.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">ACCS Exam Guide</a></li>
<li><a href="/cheat-sheets/infection-control">Infection Control Cheat Sheet</a></li>
<li><a href="/glossary/critical-care">Critical Care Glossary</a></li>
<li><a href="/pricing">Unlock Full Practice Exams &rarr;</a></li>
</ul>`,
  },
  {
    slug: 'patient-ventilator-asynchrony',
    type: 'TOPIC' as const,
    title: 'Patient-Ventilator Asynchrony: Detection and Management',
    description: 'Learn to identify and manage patient-ventilator asynchrony including trigger, flow, cycle, and mode asynchrony with waveform analysis for respiratory therapists.',
    division: null,
    readTime: '7 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h2>Patient-Ventilator Asynchrony: Detection and Management</h2>
<p>Patient-ventilator asynchrony (PVA) occurs when the ventilator's breath delivery does not match the patient's neural respiratory drive in terms of timing, flow, or volume. PVA is associated with increased work of breathing, patient discomfort, prolonged mechanical ventilation, and worse clinical outcomes. Recognizing and correcting asynchrony through waveform analysis is a critical skill for respiratory therapists.</p>

<h3>Types of Patient-Ventilator Asynchrony</h3>

<h4>1. Trigger Asynchrony</h4>
<p>Occurs when the ventilator does not properly detect the patient's inspiratory effort.</p>

<p><strong>Missed triggers (ineffective efforts):</strong></p>
<ul>
<li>The patient makes an inspiratory effort, but the ventilator does not deliver a breath.</li>
<li><strong>Waveform sign:</strong> A small dip in the pressure or flow waveform during exhalation that does not trigger a breath.</li>
<li><strong>Common causes:</strong> Auto-PEEP (intrinsic PEEP) that the patient must overcome before reaching the trigger threshold, trigger sensitivity set too low (insensitive), weak respiratory effort, excessive sedation.</li>
<li><strong>Interventions:</strong> Reduce auto-PEEP (increase expiratory time, bronchodilators), increase trigger sensitivity, apply external PEEP to offset auto-PEEP (typically set at 80% of measured auto-PEEP).</li>
</ul>

<p><strong>Auto-triggering:</strong></p>
<ul>
<li>The ventilator delivers a breath without patient effort.</li>
<li><strong>Common causes:</strong> Trigger sensitivity set too high (too sensitive), circuit leaks, water in the circuit, cardiac oscillations, hiccups.</li>
<li><strong>Interventions:</strong> Decrease trigger sensitivity, fix leaks, drain condensate from the circuit, switch from flow to pressure triggering (or vice versa).</li>
</ul>

<p><strong>Double-triggering:</strong></p>
<ul>
<li>Two ventilator breaths are delivered for a single patient effort.</li>
<li><strong>Common causes:</strong> Set tidal volume too low relative to patient demand, inspiratory time too short (the patient's neural inspiration continues after the ventilator cycles off).</li>
<li><strong>Interventions:</strong> Increase tidal volume (if appropriate), increase inspiratory time, or switch to a pressure-targeted mode that allows variable tidal volume delivery.</li>
</ul>

<h4>2. Flow Asynchrony</h4>
<p>Occurs when the ventilator does not deliver gas at the rate the patient demands.</p>
<ul>
<li><strong>Insufficient flow:</strong> In volume-controlled ventilation, the set peak flow rate may not meet the patient's inspiratory demand.</li>
<li><strong>Waveform sign:</strong> A concave (scooped) appearance of the inspiratory pressure waveform, indicating the patient is generating negative pressure effort during inspiration.</li>
<li><strong>Interventions:</strong> Increase peak flow rate, change from a square (constant) to a decelerating flow pattern, or switch to a pressure-targeted mode (PSV or PCV) where flow is variable and patient-determined.</li>
</ul>

<h4>3. Cycle Asynchrony</h4>
<p>Occurs when the ventilator terminates inspiration at a time that does not match the patient's neural inspiratory time.</p>

<p><strong>Premature cycling:</strong></p>
<ul>
<li>The ventilator cycles off before the patient has finished inhaling.</li>
<li><strong>Waveform sign:</strong> A second effort (pressure dip) immediately after the ventilator cycles to exhalation.</li>
<li><strong>Interventions:</strong> Increase inspiratory time, lower the flow cycle-off percentage in PSV (e.g., from 25% to 10%), or increase tidal volume.</li>
</ul>

<p><strong>Delayed cycling:</strong></p>
<ul>
<li>The ventilator continues delivering the breath after the patient wants to exhale.</li>
<li><strong>Waveform sign:</strong> A spike at the end of the pressure waveform (the patient is actively exhaling against the ventilator), and an abrupt return to baseline on the flow waveform.</li>
<li><strong>Interventions:</strong> Decrease inspiratory time, increase the flow cycle-off percentage in PSV (e.g., from 25% to 40%), or reduce tidal volume.</li>
</ul>

<h4>4. Mode Asynchrony</h4>
<p>Occurs when the ventilator mode itself is inappropriate for the patient's respiratory mechanics or breathing pattern.</p>
<ul>
<li><strong>Example:</strong> A patient with COPD and high respiratory drive on volume-controlled AC mode who develops breath stacking and auto-PEEP.</li>
<li><strong>Intervention:</strong> Consider switching to PSV or a mode that allows more patient control over breathing pattern.</li>
</ul>

<h3>Waveform Analysis for PVA Detection</h3>
<p>Systematic waveform analysis is the primary method for detecting PVA at the bedside:</p>
<ul>
<li><strong>Pressure-time waveform:</strong> Look for concavity (flow starvation), pressure spikes at end-inspiration (delayed cycling), and small deflections during exhalation (missed triggers).</li>
<li><strong>Flow-time waveform:</strong> Look for flow that does not return to zero before the next breath (auto-PEEP), and abrupt flow termination followed by immediate new breaths (double-triggering).</li>
<li><strong>Volume-time waveform:</strong> Look for the exhaled volume not returning to baseline (air leak) or staircase pattern (breath stacking).</li>
</ul>

<h3>Clinical Impact</h3>
<p>Studies show that PVA occurs in up to 25% of ventilator breaths and is associated with:</p>
<ul>
<li>Increased work of breathing and oxygen consumption.</li>
<li>Patient distress and increased sedation requirements.</li>
<li>Prolonged duration of mechanical ventilation.</li>
<li>Increased risk of diaphragm injury (both atrophy and load-induced injury).</li>
</ul>

<h3>Exam Tips</h3>
<ul>
<li>A scooped pressure waveform indicates flow starvation &mdash; increase flow or switch to a pressure mode.</li>
<li>Auto-PEEP is the most common cause of missed triggers.</li>
<li>Double-triggering often indicates the set Vt is too low for patient demand.</li>
<li>The NBRC uses scaled scoring on all credentialing exams.</li>
</ul>

<p><strong>Continue your preparation:</strong></p>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">TMC Exam Guide</a></li>
<li><a href="/cheat-sheets/ventilator-waveforms">Ventilator Waveforms Cheat Sheet</a></li>
<li><a href="/glossary/mechanical-ventilation">Mechanical Ventilation Glossary</a></li>
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
