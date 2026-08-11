import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const pages = [
  // ─── 1. ABG Interpretation ───────────────────────────────────────────
  {
    slug: 'abg-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'ABG Interpretation Cheat Sheet',
    description:
      'Quick-reference ABG interpretation guide with normal values, compensation rules, Winter\'s formula, and A-a gradient calculation for respiratory therapists.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Normal ABG Values</h2>
<table>
  <thead><tr><th>Parameter</th><th>Normal Range</th><th>Unit</th></tr></thead>
  <tbody>
    <tr><td>pH</td><td>7.35 &ndash; 7.45</td><td>&mdash;</td></tr>
    <tr><td>PaCO<sub>2</sub></td><td>35 &ndash; 45</td><td>mmHg</td></tr>
    <tr><td>HCO<sub>3</sub><sup>&minus;</sup></td><td>22 &ndash; 26</td><td>mEq/L</td></tr>
    <tr><td>PaO<sub>2</sub></td><td>80 &ndash; 100</td><td>mmHg</td></tr>
    <tr><td>SaO<sub>2</sub></td><td>95 &ndash; 100</td><td>%</td></tr>
    <tr><td>Base Excess</td><td>&minus;2 to +2</td><td>mEq/L</td></tr>
  </tbody>
</table>

<h2>Step-by-Step ABG Interpretation</h2>
<ol>
  <li><strong>Assess pH:</strong> &lt; 7.35 = acidosis; &gt; 7.45 = alkalosis</li>
  <li><strong>Identify primary disorder:</strong>
    <ul>
      <li>PaCO<sub>2</sub> abnormal &rarr; respiratory component</li>
      <li>HCO<sub>3</sub> abnormal &rarr; metabolic component</li>
    </ul>
  </li>
  <li><strong>Check for compensation:</strong> Is the opposite system trying to normalize pH?</li>
  <li><strong>Assess oxygenation:</strong> PaO<sub>2</sub> and A-a gradient</li>
</ol>

<h2>The Four Primary Disorders</h2>
<table>
  <thead><tr><th>Disorder</th><th>pH</th><th>PaCO<sub>2</sub></th><th>HCO<sub>3</sub></th></tr></thead>
  <tbody>
    <tr><td>Respiratory Acidosis</td><td>&darr;</td><td>&uarr;</td><td>Normal or &uarr;</td></tr>
    <tr><td>Respiratory Alkalosis</td><td>&uarr;</td><td>&darr;</td><td>Normal or &darr;</td></tr>
    <tr><td>Metabolic Acidosis</td><td>&darr;</td><td>Normal or &darr;</td><td>&darr;</td></tr>
    <tr><td>Metabolic Alkalosis</td><td>&uarr;</td><td>Normal or &uarr;</td><td>&uarr;</td></tr>
  </tbody>
</table>

<h2>Compensation Rules</h2>
<table>
  <thead><tr><th>Primary Disorder</th><th>Expected Compensation</th></tr></thead>
  <tbody>
    <tr><td>Acute Respiratory Acidosis</td><td>HCO<sub>3</sub> rises 1 mEq/L per 10 mmHg rise in PaCO<sub>2</sub></td></tr>
    <tr><td>Chronic Respiratory Acidosis</td><td>HCO<sub>3</sub> rises 3.5 mEq/L per 10 mmHg rise in PaCO<sub>2</sub></td></tr>
    <tr><td>Acute Respiratory Alkalosis</td><td>HCO<sub>3</sub> falls 2 mEq/L per 10 mmHg drop in PaCO<sub>2</sub></td></tr>
    <tr><td>Chronic Respiratory Alkalosis</td><td>HCO<sub>3</sub> falls 5 mEq/L per 10 mmHg drop in PaCO<sub>2</sub></td></tr>
    <tr><td>Metabolic Acidosis</td><td>Winter&rsquo;s Formula (see below)</td></tr>
    <tr><td>Metabolic Alkalosis</td><td>PaCO<sub>2</sub> rises 0.7 mmHg per 1 mEq/L rise in HCO<sub>3</sub></td></tr>
  </tbody>
</table>

<h3>Winter&rsquo;s Formula</h3>
<p><strong>Expected PaCO<sub>2</sub> = (1.5 &times; HCO<sub>3</sub>) + 8 &plusmn; 2</strong></p>
<p>Used to determine if respiratory compensation is appropriate in metabolic acidosis. If measured PaCO<sub>2</sub> differs from expected, a mixed disorder is present.</p>

<h2>A-a Gradient</h2>
<p><strong>A-a Gradient = PAO<sub>2</sub> &minus; PaO<sub>2</sub></strong></p>
<p><strong>PAO<sub>2</sub> = (FiO<sub>2</sub> &times; (P<sub>B</sub> &minus; P<sub>H2O</sub>)) &minus; (PaCO<sub>2</sub> / 0.8)</strong></p>
<p>At room air, sea level: PAO<sub>2</sub> = (0.21 &times; (760 &minus; 47)) &minus; (PaCO<sub>2</sub> / 0.8)</p>
<p><strong>Normal A-a Gradient = (Age / 4) + 4</strong></p>
<ul>
  <li>Elevated A-a gradient suggests: V/Q mismatch, shunt, or diffusion impairment</li>
  <li>Normal A-a gradient with hypoxemia suggests: hypoventilation or low FiO<sub>2</sub></li>
</ul>

<h2>Quick Reference: Anion Gap</h2>
<p><strong>Anion Gap = Na<sup>+</sup> &minus; (Cl<sup>&minus;</sup> + HCO<sub>3</sub><sup>&minus;</sup>)</strong></p>
<p>Normal: 8 &ndash; 12 mEq/L. Elevated anion gap causes (MUDPILES): Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates.</p>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/topics/arterial-blood-gases">ABG Topics Review</a></li>
  <li><a href="/glossary/acidosis">Glossary: Acidosis</a></li>
  <li><a href="/cheat-sheets/nbrc-formulas-cheat-sheet">NBRC Formulas Cheat Sheet</a></li>
</ul>
`,
  },

  // ─── 2. Ventilator Modes ─────────────────────────────────────────────
  {
    slug: 'ventilator-modes-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Ventilator Modes Cheat Sheet',
    description:
      'Complete ventilator modes reference with trigger, cycle, and control variables for AC, SIMV, PSV, APRV, and HFOV for the NBRC exam.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Ventilator Mode Classification</h2>
<p>Every breath is classified by three control variables:</p>
<ul>
  <li><strong>Trigger:</strong> What starts the breath (patient effort or time)</li>
  <li><strong>Target/Limit:</strong> What is controlled during inspiration (pressure or volume)</li>
  <li><strong>Cycle:</strong> What ends inspiration (volume, time, or flow)</li>
</ul>

<h2>Common Ventilator Modes</h2>
<table>
  <thead><tr><th>Mode</th><th>Trigger</th><th>Target</th><th>Cycle</th><th>Key Feature</th></tr></thead>
  <tbody>
    <tr><td>AC/VC (Volume Control)</td><td>Patient or Time</td><td>Flow</td><td>Volume</td><td>Guaranteed V<sub>T</sub>; variable PIP</td></tr>
    <tr><td>AC/PC (Pressure Control)</td><td>Patient or Time</td><td>Pressure</td><td>Time</td><td>Set pressure; variable V<sub>T</sub></td></tr>
    <tr><td>SIMV (Volume)</td><td>Patient or Time</td><td>Flow</td><td>Volume</td><td>Set rate + spontaneous breaths</td></tr>
    <tr><td>SIMV (Pressure)</td><td>Patient or Time</td><td>Pressure</td><td>Time</td><td>Set rate + spontaneous breaths</td></tr>
    <tr><td>PSV</td><td>Patient only</td><td>Pressure</td><td>Flow (% peak)</td><td>Patient controls rate, V<sub>T</sub>, and T<sub>I</sub></td></tr>
    <tr><td>APRV</td><td>Patient (spontaneous)</td><td>Pressure</td><td>Time</td><td>Two CPAP levels; long T<sub>high</sub>, short T<sub>low</sub></td></tr>
    <tr><td>HFOV</td><td>Time (oscillator)</td><td>Pressure (mean)</td><td>Time</td><td>Very small V<sub>T</sub>; freq 3&ndash;15 Hz</td></tr>
    <tr><td>PRVC</td><td>Patient or Time</td><td>Pressure (adaptive)</td><td>Volume</td><td>Targets V<sub>T</sub> using lowest pressure</td></tr>
  </tbody>
</table>

<h2>Initial Ventilator Settings (Adult)</h2>
<table>
  <thead><tr><th>Parameter</th><th>Typical Setting</th></tr></thead>
  <tbody>
    <tr><td>Tidal Volume (V<sub>T</sub>)</td><td>6 &ndash; 8 mL/kg IBW</td></tr>
    <tr><td>Respiratory Rate</td><td>12 &ndash; 20 breaths/min</td></tr>
    <tr><td>FiO<sub>2</sub></td><td>Start at 1.0, wean to &le; 0.60</td></tr>
    <tr><td>PEEP</td><td>5 cmH<sub>2</sub>O (start); titrate per protocol</td></tr>
    <tr><td>Flow Rate</td><td>40 &ndash; 60 L/min (VC)</td></tr>
    <tr><td>Inspiratory Pressure</td><td>10 &ndash; 20 cmH<sub>2</sub>O above PEEP (PC)</td></tr>
    <tr><td>I:E Ratio</td><td>1:2 to 1:3</td></tr>
    <tr><td>Pressure Support</td><td>5 &ndash; 10 cmH<sub>2</sub>O (for spontaneous breaths)</td></tr>
  </tbody>
</table>

<h2>APRV Key Concepts</h2>
<ul>
  <li><strong>P<sub>high</sub>:</strong> 20 &ndash; 30 cmH<sub>2</sub>O (recruitment pressure)</li>
  <li><strong>P<sub>low</sub>:</strong> 0 cmH<sub>2</sub>O (release pressure)</li>
  <li><strong>T<sub>high</sub>:</strong> 4 &ndash; 6 seconds (time at high pressure)</li>
  <li><strong>T<sub>low</sub>:</strong> 0.5 &ndash; 0.8 seconds (release time); set so expiratory flow drops to 75% of peak</li>
  <li>Spontaneous breathing is encouraged throughout the cycle</li>
</ul>

<h2>HFOV Key Concepts</h2>
<ul>
  <li><strong>Mean Airway Pressure (mPaw):</strong> Controls oxygenation; start 2&ndash;5 cmH<sub>2</sub>O above conventional mPaw</li>
  <li><strong>Amplitude (&Delta;P):</strong> Controls ventilation (CO<sub>2</sub> removal); adjust for chest wiggle</li>
  <li><strong>Frequency:</strong> 3&ndash;15 Hz; lower frequency = more CO<sub>2</sub> removal</li>
  <li><strong>Inspiratory Time %:</strong> Typically 33%</li>
</ul>

<h2>Weaning Readiness Criteria</h2>
<ul>
  <li>FiO<sub>2</sub> &le; 0.40 with PaO<sub>2</sub> &ge; 60 mmHg</li>
  <li>PEEP &le; 5&ndash;8 cmH<sub>2</sub>O</li>
  <li>RSBI (f/V<sub>T</sub>) &lt; 105 breaths/min/L</li>
  <li>NIF (MIP) more negative than &minus;20 cmH<sub>2</sub>O</li>
  <li>Minute ventilation &lt; 10 L/min</li>
  <li>Stable hemodynamics; resolved underlying cause</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/topics/mechanical-ventilation">Mechanical Ventilation Topics</a></li>
  <li><a href="/cheat-sheets/nbrc-formulas-cheat-sheet">NBRC Formulas Cheat Sheet</a></li>
  <li><a href="/glossary/peep">Glossary: PEEP</a></li>
</ul>
`,
  },

  // ─── 3. Pharmacology ─────────────────────────────────────────────────
  {
    slug: 'nbrc-pharmacology-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'NBRC Pharmacology Cheat Sheet',
    description:
      'High-yield NBRC pharmacology reference covering bronchodilators, corticosteroids, mucolytics, surfactants, and neuromuscular blockers for the TMC and CSE.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Short-Acting Beta-2 Agonists (SABA)</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>SVN Dose</th><th>MDI Dose</th><th>Onset</th><th>Duration</th></tr></thead>
  <tbody>
    <tr><td>Albuterol</td><td>Ventolin, ProAir</td><td>2.5 mg/3 mL</td><td>90 mcg/puff, 2 puffs</td><td>5 min</td><td>4&ndash;6 hr</td></tr>
    <tr><td>Levalbuterol</td><td>Xopenex</td><td>0.63&ndash;1.25 mg</td><td>45 mcg/puff, 2 puffs</td><td>5 min</td><td>6&ndash;8 hr</td></tr>
  </tbody>
</table>

<h2>Long-Acting Beta-2 Agonists (LABA)</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>Dose</th><th>Duration</th></tr></thead>
  <tbody>
    <tr><td>Salmeterol</td><td>Serevent</td><td>50 mcg DPI BID</td><td>12 hr</td></tr>
    <tr><td>Formoterol</td><td>Foradil</td><td>12 mcg DPI BID</td><td>12 hr</td></tr>
    <tr><td>Arformoterol</td><td>Brovana</td><td>15 mcg SVN BID</td><td>12 hr</td></tr>
  </tbody>
</table>
<p><strong>Key point:</strong> LABAs should never be used as monotherapy for asthma &mdash; always combine with an inhaled corticosteroid (ICS).</p>

<h2>Anticholinergics (Muscarinic Antagonists)</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>Type</th><th>Dose</th><th>Duration</th></tr></thead>
  <tbody>
    <tr><td>Ipratropium</td><td>Atrovent</td><td>SAMA</td><td>0.5 mg SVN or 2 puffs MDI</td><td>4&ndash;6 hr</td></tr>
    <tr><td>Tiotropium</td><td>Spiriva</td><td>LAMA</td><td>18 mcg DPI daily</td><td>24 hr</td></tr>
  </tbody>
</table>

<h2>Inhaled Corticosteroids (ICS)</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>Delivery</th></tr></thead>
  <tbody>
    <tr><td>Beclomethasone</td><td>QVAR</td><td>MDI</td></tr>
    <tr><td>Budesonide</td><td>Pulmicort</td><td>DPI / SVN</td></tr>
    <tr><td>Fluticasone</td><td>Flovent</td><td>MDI / DPI</td></tr>
  </tbody>
</table>
<p><strong>Patient education:</strong> Rinse mouth after use to prevent oral candidiasis (thrush). Use spacer with MDI.</p>

<h2>Mucolytics &amp; Mucokinetics</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>Mechanism</th><th>Dose</th></tr></thead>
  <tbody>
    <tr><td>N-acetylcysteine</td><td>Mucomyst</td><td>Breaks disulfide bonds in mucus</td><td>3&ndash;5 mL of 20% or 6&ndash;10 mL of 10%</td></tr>
    <tr><td>Dornase alfa</td><td>Pulmozyme</td><td>Cleaves DNA in CF sputum</td><td>2.5 mg SVN daily</td></tr>
    <tr><td>Hypertonic saline (7%)</td><td>&mdash;</td><td>Osmotic mucokinetic</td><td>4 mL SVN BID</td></tr>
  </tbody>
</table>
<p><strong>Note:</strong> N-acetylcysteine can cause bronchospasm; pretreat with a bronchodilator. Also used as antidote for acetaminophen overdose.</p>

<h2>Surfactant Replacement</h2>
<table>
  <thead><tr><th>Drug</th><th>Brand</th><th>Source</th></tr></thead>
  <tbody>
    <tr><td>Beractant</td><td>Survanta</td><td>Bovine</td></tr>
    <tr><td>Calfactant</td><td>Infasurf</td><td>Bovine (calf)</td></tr>
    <tr><td>Poractant alfa</td><td>Curosurf</td><td>Porcine</td></tr>
    <tr><td>Lucinactant</td><td>Surfaxin</td><td>Synthetic</td></tr>
  </tbody>
</table>
<p>Indication: Neonatal RDS. Administer via ETT. Dose in aliquots with position changes.</p>

<h2>Other High-Yield Drugs</h2>
<ul>
  <li><strong>Racemic epinephrine (2.25%):</strong> 0.5 mL in 3 mL NS for post-extubation stridor / croup</li>
  <li><strong>Heliox (80/20 or 70/30):</strong> Low-density gas for upper airway obstruction; must have FiO<sub>2</sub> needs &le; 0.40</li>
  <li><strong>Nitric oxide (iNO):</strong> 20 ppm starting dose for PPHN; selective pulmonary vasodilator</li>
  <li><strong>Succinylcholine:</strong> Depolarizing NMB for rapid-sequence intubation; onset &lt; 60 sec; duration 5&ndash;10 min</li>
  <li><strong>Rocuronium:</strong> Non-depolarizing NMB; onset 60&ndash;90 sec; duration 30&ndash;60 min</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
  <li><a href="/topics/respiratory-pharmacology">Pharmacology Topics Review</a></li>
  <li><a href="/glossary/bronchodilator">Glossary: Bronchodilator</a></li>
  <li><a href="/cheat-sheets/oxygen-devices-cheat-sheet">Oxygen Delivery Devices Cheat Sheet</a></li>
</ul>
`,
  },

  // ─── 4. Oxygen Delivery Devices ──────────────────────────────────────
  {
    slug: 'oxygen-devices-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Oxygen Delivery Devices Cheat Sheet',
    description:
      'Complete oxygen delivery devices reference with flow rates, FiO2 ranges, and indications for nasal cannula, masks, Venturi, HFNC, and more.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Low-Flow Oxygen Devices</h2>
<p>Low-flow devices do <em>not</em> meet the patient&rsquo;s total inspiratory demand. FiO<sub>2</sub> varies with respiratory rate, tidal volume, and inspiratory flow.</p>
<table>
  <thead><tr><th>Device</th><th>Flow Rate</th><th>Approx. FiO<sub>2</sub></th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Nasal Cannula</td><td>1&ndash;6 L/min</td><td>24&ndash;44%</td><td>Each L/min adds ~4% FiO<sub>2</sub>; most common device</td></tr>
    <tr><td>Simple Mask</td><td>5&ndash;10 L/min</td><td>40&ndash;60%</td><td>Minimum 5 L/min to flush CO<sub>2</sub> from mask</td></tr>
    <tr><td>Partial Rebreathing Mask</td><td>10&ndash;12 L/min</td><td>60&ndash;80%</td><td>Reservoir bag; bag should not fully deflate</td></tr>
    <tr><td>Non-Rebreather Mask (NRB)</td><td>10&ndash;15 L/min</td><td>60&ndash;100%</td><td>One-way valves; highest FiO<sub>2</sub> via mask; keep bag inflated &ge; 2/3</td></tr>
  </tbody>
</table>

<h2>High-Flow Oxygen Devices</h2>
<p>High-flow devices meet or exceed the patient&rsquo;s inspiratory demand, providing a fixed and predictable FiO<sub>2</sub>.</p>
<table>
  <thead><tr><th>Device</th><th>Flow Rate</th><th>FiO<sub>2</sub></th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Venturi Mask (Air-Entrainment)</td><td>Varies by adaptor</td><td>24&ndash;50% (precise)</td><td>Color-coded jets; uses Bernoulli principle</td></tr>
    <tr><td>Large-Volume Nebulizer</td><td>Varies</td><td>28&ndash;100%</td><td>Total flow must exceed patient peak inspiratory flow</td></tr>
    <tr><td>High-Flow Nasal Cannula (HFNC)</td><td>Up to 60 L/min</td><td>21&ndash;100%</td><td>Heated/humidified; provides ~1 cmH<sub>2</sub>O PEEP per 10 L/min</td></tr>
    <tr><td>Blending System / Oxy-Hood</td><td>7&ndash;15 L/min</td><td>21&ndash;100%</td><td>Used in neonates; analyze FiO<sub>2</sub> near the face</td></tr>
  </tbody>
</table>

<h2>Venturi Mask Color-Coded Adaptors</h2>
<table>
  <thead><tr><th>Color</th><th>FiO<sub>2</sub></th><th>Set Flow (L/min)</th><th>Air:O<sub>2</sub> Ratio</th></tr></thead>
  <tbody>
    <tr><td>Blue</td><td>24%</td><td>4</td><td>25.3 : 1</td></tr>
    <tr><td>Yellow</td><td>28%</td><td>4&ndash;6</td><td>10 : 1</td></tr>
    <tr><td>White</td><td>31%</td><td>6</td><td>7 : 1</td></tr>
    <tr><td>Green</td><td>35%</td><td>8</td><td>5 : 1</td></tr>
    <tr><td>Pink</td><td>40%</td><td>8</td><td>3 : 1</td></tr>
    <tr><td>Orange</td><td>50%</td><td>12</td><td>1.7 : 1</td></tr>
  </tbody>
</table>

<h2>Air-Entrainment Formula</h2>
<p><strong>Total Flow = O<sub>2</sub> Flow &times; (Air:O<sub>2</sub> Ratio + 1)</strong></p>
<p>Example: 35% Venturi at 8 L/min &rarr; Total = 8 &times; (5 + 1) = 48 L/min</p>

<h2>Device Selection Guidelines</h2>
<ul>
  <li><strong>Mild hypoxemia, stable patient:</strong> Nasal cannula 1&ndash;4 L/min</li>
  <li><strong>Moderate hypoxemia:</strong> Simple mask or Venturi</li>
  <li><strong>Severe hypoxemia:</strong> NRB mask or HFNC</li>
  <li><strong>COPD / precise FiO<sub>2</sub> needed:</strong> Venturi mask (start 24&ndash;28%)</li>
  <li><strong>Post-extubation / avoiding reintubation:</strong> HFNC</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
  <li><a href="/topics/oxygen-therapy">Oxygen Therapy Topics</a></li>
  <li><a href="/glossary/fio2">Glossary: FiO<sub>2</sub></a></li>
  <li><a href="/cheat-sheets/abg-cheat-sheet">ABG Interpretation Cheat Sheet</a></li>
</ul>
`,
  },

  // ─── 5. PFT Interpretation ───────────────────────────────────────────
  {
    slug: 'pft-interpretation-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'PFT Interpretation Cheat Sheet',
    description:
      'Pulmonary function test interpretation guide with spirometry, lung volumes, DLCO, flow-volume loops, and severity grading for CPFT exam prep.',
    division: 'cpft',
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Key Spirometry Values</h2>
<table>
  <thead><tr><th>Parameter</th><th>Description</th><th>Normal</th></tr></thead>
  <tbody>
    <tr><td>FVC</td><td>Forced vital capacity</td><td>&ge; 80% predicted</td></tr>
    <tr><td>FEV<sub>1</sub></td><td>Forced expiratory volume in 1 second</td><td>&ge; 80% predicted</td></tr>
    <tr><td>FEV<sub>1</sub>/FVC</td><td>Ratio (expressed as decimal or %)</td><td>&ge; 0.70 (70%)</td></tr>
    <tr><td>FEF<sub>25&ndash;75%</sub></td><td>Mid-expiratory flow rate</td><td>&ge; 65% predicted</td></tr>
    <tr><td>MVV</td><td>Maximum voluntary ventilation</td><td>&ge; 80% predicted</td></tr>
  </tbody>
</table>

<h2>Obstructive vs. Restrictive Patterns</h2>
<table>
  <thead><tr><th>Finding</th><th>Obstructive</th><th>Restrictive</th><th>Mixed</th></tr></thead>
  <tbody>
    <tr><td>FEV<sub>1</sub>/FVC</td><td><strong>&lt; 0.70</strong> (decreased)</td><td>Normal or increased</td><td>Decreased</td></tr>
    <tr><td>FVC</td><td>Normal or decreased</td><td><strong>&lt; 80% predicted</strong></td><td>Decreased</td></tr>
    <tr><td>FEV<sub>1</sub></td><td>Decreased</td><td>Decreased</td><td>Decreased</td></tr>
    <tr><td>TLC</td><td>Normal or increased</td><td><strong>Decreased</strong></td><td>Variable</td></tr>
    <tr><td>RV</td><td>Increased (air trapping)</td><td>Decreased</td><td>Variable</td></tr>
  </tbody>
</table>

<h2>Severity of Obstruction (ATS/ERS)</h2>
<table>
  <thead><tr><th>Severity</th><th>FEV<sub>1</sub> (% Predicted)</th></tr></thead>
  <tbody>
    <tr><td>Mild</td><td>&ge; 70%</td></tr>
    <tr><td>Moderate</td><td>60&ndash;69%</td></tr>
    <tr><td>Moderately Severe</td><td>50&ndash;59%</td></tr>
    <tr><td>Severe</td><td>35&ndash;49%</td></tr>
    <tr><td>Very Severe</td><td>&lt; 35%</td></tr>
  </tbody>
</table>

<h2>Bronchodilator Response</h2>
<p>Positive response: increase in FEV<sub>1</sub> or FVC of <strong>&ge; 200 mL AND &ge; 12%</strong> from baseline. Both criteria must be met.</p>

<h2>Lung Volumes</h2>
<table>
  <thead><tr><th>Volume</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>TLC</td><td>Total lung capacity (all air in lungs after max inhalation)</td></tr>
    <tr><td>RV</td><td>Residual volume (air remaining after max exhalation)</td></tr>
    <tr><td>FRC</td><td>Functional residual capacity (air at end of normal exhalation)</td></tr>
    <tr><td>IC</td><td>Inspiratory capacity (V<sub>T</sub> + IRV)</td></tr>
  </tbody>
</table>
<p>Lung volumes are measured by body plethysmography, helium dilution, or nitrogen washout. Plethysmography measures trapped gas; dilution methods do not.</p>

<h2>Flow-Volume Loop Patterns</h2>
<ul>
  <li><strong>Normal:</strong> Rapid rise to peak flow, gradual decline (triangular expiratory limb)</li>
  <li><strong>Obstruction:</strong> Scooped or concave expiratory limb</li>
  <li><strong>Restriction:</strong> Narrow, tall loop (reduced volumes, preserved shape)</li>
  <li><strong>Fixed upper airway obstruction:</strong> Flattened inspiratory AND expiratory limbs</li>
  <li><strong>Variable extrathoracic:</strong> Flattened inspiratory limb only</li>
  <li><strong>Variable intrathoracic:</strong> Flattened expiratory limb only</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cpft-exam-guide">NBRC CPFT Exam Guide</a></li>
  <li><a href="/topics/pulmonary-function-testing">PFT Topics Review</a></li>
  <li><a href="/cheat-sheets/diffusion-capacity-cheat-sheet">DLCO Cheat Sheet</a></li>
  <li><a href="/cheat-sheets/bronchial-challenge-cheat-sheet">Bronchial Challenge Testing Cheat Sheet</a></li>
  <li><a href="/glossary/spirometry">Glossary: Spirometry</a></li>
</ul>
`,
  },

  // ─── 6. Chest X-Ray Interpretation ───────────────────────────────────
  {
    slug: 'chest-xray-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Chest X-Ray Interpretation Cheat Sheet',
    description:
      'Systematic chest X-ray interpretation guide for respiratory therapists with ABCDE approach, common findings, and ETT/line placement verification.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Systematic Approach: ABCDE</h2>
<table>
  <thead><tr><th>Letter</th><th>Category</th><th>What to Assess</th></tr></thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>Airway</td><td>Trachea midline? ETT position? Carina visible?</td></tr>
    <tr><td><strong>B</strong></td><td>Bones &amp; soft tissue</td><td>Fractures, subcutaneous emphysema, symmetry</td></tr>
    <tr><td><strong>C</strong></td><td>Cardiac</td><td>Heart size (cardiothoracic ratio &le; 0.50), silhouette, mediastinum</td></tr>
    <tr><td><strong>D</strong></td><td>Diaphragm</td><td>Costophrenic angles sharp? Flattened (hyperinflation)? Elevated?</td></tr>
    <tr><td><strong>E</strong></td><td>Everything else (lung fields)</td><td>Infiltrates, effusions, pneumothorax, masses</td></tr>
  </tbody>
</table>

<h2>Tube &amp; Line Placement</h2>
<table>
  <thead><tr><th>Device</th><th>Correct Position</th></tr></thead>
  <tbody>
    <tr><td>Endotracheal tube (ETT)</td><td>2&ndash;6 cm above the carina (tip at T3&ndash;T4 level)</td></tr>
    <tr><td>Tracheostomy tube</td><td>Tip should be at least halfway between stoma and carina</td></tr>
    <tr><td>Central venous catheter</td><td>Tip at SVC/RA junction</td></tr>
    <tr><td>PA catheter (Swan-Ganz)</td><td>Tip in right or left main pulmonary artery</td></tr>
    <tr><td>Nasogastric tube</td><td>Tip below the diaphragm in the stomach</td></tr>
    <tr><td>Chest tube</td><td>Anterior/apical for pneumothorax; posterior/basilar for effusion</td></tr>
  </tbody>
</table>

<h2>Common Chest X-Ray Findings</h2>
<table>
  <thead><tr><th>Condition</th><th>Key CXR Findings</th></tr></thead>
  <tbody>
    <tr><td>Pneumothorax</td><td>Visceral pleural line; absent lung markings beyond line; deep sulcus sign (supine)</td></tr>
    <tr><td>Pleural Effusion</td><td>Blunted costophrenic angle; meniscus sign; opacification of lower lung field</td></tr>
    <tr><td>Pneumonia</td><td>Lobar consolidation or diffuse infiltrates; air bronchograms</td></tr>
    <tr><td>ARDS</td><td>Bilateral, diffuse, fluffy infiltrates ("white-out"); normal heart size</td></tr>
    <tr><td>CHF / Pulmonary Edema</td><td>Cardiomegaly; cephalization; Kerley B lines; bilateral effusions; bat-wing pattern</td></tr>
    <tr><td>COPD / Emphysema</td><td>Hyperinflation; flattened diaphragms; increased AP diameter; hyperlucent lung fields</td></tr>
    <tr><td>Atelectasis</td><td>Volume loss; tracheal/mediastinal shift toward affected side; elevated hemidiaphragm</td></tr>
    <tr><td>Tension Pneumothorax</td><td>Mediastinal shift away from affected side; compressed contralateral lung</td></tr>
    <tr><td>Right Mainstem Intubation</td><td>ETT tip below carina; left lung atelectasis</td></tr>
  </tbody>
</table>

<h2>Differentiating ARDS vs. Cardiogenic Pulmonary Edema</h2>
<table>
  <thead><tr><th>Feature</th><th>ARDS</th><th>Cardiogenic Edema</th></tr></thead>
  <tbody>
    <tr><td>Heart size</td><td>Normal</td><td>Enlarged</td></tr>
    <tr><td>Distribution</td><td>Peripheral / patchy</td><td>Central / bat-wing</td></tr>
    <tr><td>Pleural effusions</td><td>Uncommon</td><td>Common (bilateral)</td></tr>
    <tr><td>PCWP</td><td>&le; 18 mmHg</td><td>&gt; 18 mmHg</td></tr>
    <tr><td>Air bronchograms</td><td>Common</td><td>Less common</td></tr>
  </tbody>
</table>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/topics/chest-imaging">Chest Imaging Topics</a></li>
  <li><a href="/cheat-sheets/ventilator-modes-cheat-sheet">Ventilator Modes Cheat Sheet</a></li>
  <li><a href="/glossary/pneumothorax">Glossary: Pneumothorax</a></li>
</ul>
`,
  },

  // ─── 7. Neonatal Ventilation ─────────────────────────────────────────
  {
    slug: 'neonatal-ventilation-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Neonatal Ventilation Cheat Sheet',
    description:
      'Neonatal and pediatric ventilation quick reference with ETT sizing, initial settings, surfactant dosing, CPAP, and HFOV for the NPS exam.',
    division: 'nps',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Neonatal ETT Sizing</h2>
<table>
  <thead><tr><th>Gestational Age</th><th>Weight (kg)</th><th>ETT Size (mm ID)</th><th>Depth at Lip (cm)</th></tr></thead>
  <tbody>
    <tr><td>&lt; 28 weeks</td><td>&lt; 1.0</td><td>2.5</td><td>6.5&ndash;7</td></tr>
    <tr><td>28&ndash;34 weeks</td><td>1.0&ndash;2.0</td><td>3.0</td><td>7&ndash;8</td></tr>
    <tr><td>34&ndash;38 weeks</td><td>2.0&ndash;3.0</td><td>3.5</td><td>8&ndash;9</td></tr>
    <tr><td>&gt; 38 weeks</td><td>&gt; 3.0</td><td>3.5&ndash;4.0</td><td>9&ndash;10</td></tr>
  </tbody>
</table>
<p><strong>Tip-to-lip rule:</strong> Weight (kg) + 6 = depth at lip in cm.</p>
<p><strong>Pediatric ETT (uncuffed):</strong> (Age / 4) + 4</p>
<p><strong>Pediatric ETT (cuffed):</strong> (Age / 4) + 3.5</p>

<h2>Initial Neonatal Ventilator Settings</h2>
<table>
  <thead><tr><th>Parameter</th><th>Typical Range</th></tr></thead>
  <tbody>
    <tr><td>Mode</td><td>AC/PC or SIMV/PC + PS</td></tr>
    <tr><td>PIP</td><td>15&ndash;25 cmH<sub>2</sub>O</td></tr>
    <tr><td>PEEP</td><td>4&ndash;6 cmH<sub>2</sub>O</td></tr>
    <tr><td>Rate</td><td>20&ndash;40 breaths/min</td></tr>
    <tr><td>Inspiratory Time (T<sub>I</sub>)</td><td>0.3&ndash;0.5 seconds</td></tr>
    <tr><td>FiO<sub>2</sub></td><td>Start to maintain SpO<sub>2</sub> 88&ndash;95% (preterm)</td></tr>
    <tr><td>Tidal Volume</td><td>4&ndash;6 mL/kg</td></tr>
  </tbody>
</table>

<h2>Neonatal CPAP (Bubble CPAP / Nasal CPAP)</h2>
<ul>
  <li><strong>Indication:</strong> RDS, post-extubation support, apnea of prematurity</li>
  <li><strong>Starting pressure:</strong> 5&ndash;6 cmH<sub>2</sub>O</li>
  <li><strong>Range:</strong> 4&ndash;8 cmH<sub>2</sub>O</li>
  <li><strong>Interface:</strong> Nasal prongs or nasal mask (short binasal prongs preferred)</li>
  <li>Monitor for nasal breakdown, abdominal distension, air leak</li>
</ul>

<h2>Surfactant Administration</h2>
<table>
  <thead><tr><th>Drug</th><th>Dose</th><th>Route</th></tr></thead>
  <tbody>
    <tr><td>Beractant (Survanta)</td><td>4 mL/kg</td><td>Intratracheal, 4 aliquots</td></tr>
    <tr><td>Calfactant (Infasurf)</td><td>3 mL/kg</td><td>Intratracheal, 2 aliquots</td></tr>
    <tr><td>Poractant alfa (Curosurf)</td><td>2.5 mL/kg initial; 1.25 mL/kg re-dose</td><td>Intratracheal</td></tr>
  </tbody>
</table>
<ul>
  <li>Prophylactic: given within 15&ndash;30 min of birth for high-risk infants</li>
  <li>Rescue: given after signs of RDS develop</li>
  <li>INSURE technique: Intubate &rarr; Surfactant &rarr; Extubate to CPAP</li>
</ul>

<h2>Neonatal HFOV Settings</h2>
<table>
  <thead><tr><th>Parameter</th><th>Starting Value</th></tr></thead>
  <tbody>
    <tr><td>Mean Airway Pressure (mPaw)</td><td>2&ndash;4 cmH<sub>2</sub>O above conventional mPaw</td></tr>
    <tr><td>Frequency</td><td>10&ndash;15 Hz</td></tr>
    <tr><td>Amplitude (&Delta;P)</td><td>Adjust for visible chest wiggle to umbilicus</td></tr>
    <tr><td>Inspiratory Time %</td><td>33%</td></tr>
    <tr><td>FiO<sub>2</sub></td><td>Same as prior settings</td></tr>
  </tbody>
</table>
<ul>
  <li>Increase mPaw &rarr; improve oxygenation</li>
  <li>Increase amplitude or decrease frequency &rarr; improve CO<sub>2</sub> removal</li>
</ul>

<h2>Target SpO<sub>2</sub> Ranges</h2>
<table>
  <thead><tr><th>Population</th><th>Target SpO<sub>2</sub></th></tr></thead>
  <tbody>
    <tr><td>Preterm (&lt; 32 weeks)</td><td>88&ndash;95%</td></tr>
    <tr><td>Term neonate</td><td>90&ndash;100%</td></tr>
    <tr><td>Post-ductal/pre-ductal difference</td><td>&lt; 10% difference</td></tr>
  </tbody>
</table>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-nps-exam-guide">NBRC NPS Exam Guide</a></li>
  <li><a href="/topics/neonatal-respiratory-care">Neonatal Respiratory Care Topics</a></li>
  <li><a href="/cheat-sheets/ventilator-modes-cheat-sheet">Ventilator Modes Cheat Sheet</a></li>
  <li><a href="/glossary/surfactant">Glossary: Surfactant</a></li>
</ul>
`,
  },

  // ─── 8. Hemodynamics ─────────────────────────────────────────────────
  {
    slug: 'hemodynamics-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Hemodynamics Cheat Sheet',
    description:
      'Hemodynamic monitoring reference with normal values for CVP, PCWP, CO, CI, SVR, PVR, PA catheter waveforms, and clinical profiles.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Normal Hemodynamic Values</h2>
<table>
  <thead><tr><th>Parameter</th><th>Abbreviation</th><th>Normal Range</th><th>Unit</th></tr></thead>
  <tbody>
    <tr><td>Central Venous Pressure</td><td>CVP (RAP)</td><td>2 &ndash; 6</td><td>mmHg</td></tr>
    <tr><td>Right Ventricular Pressure</td><td>RVP</td><td>25/0&ndash;5</td><td>mmHg (systolic/diastolic)</td></tr>
    <tr><td>Pulmonary Artery Pressure</td><td>PAP</td><td>25/10 (mean 15)</td><td>mmHg</td></tr>
    <tr><td>Pulmonary Capillary Wedge Pressure</td><td>PCWP (PAOP)</td><td>6 &ndash; 12</td><td>mmHg</td></tr>
    <tr><td>Cardiac Output</td><td>CO</td><td>4 &ndash; 8</td><td>L/min</td></tr>
    <tr><td>Cardiac Index</td><td>CI</td><td>2.5 &ndash; 4.0</td><td>L/min/m<sup>2</sup></td></tr>
    <tr><td>Stroke Volume</td><td>SV</td><td>60 &ndash; 100</td><td>mL/beat</td></tr>
    <tr><td>Stroke Volume Index</td><td>SVI</td><td>33 &ndash; 47</td><td>mL/beat/m<sup>2</sup></td></tr>
    <tr><td>Systemic Vascular Resistance</td><td>SVR</td><td>800 &ndash; 1200</td><td>dynes&middot;sec/cm<sup>&minus;5</sup></td></tr>
    <tr><td>Pulmonary Vascular Resistance</td><td>PVR</td><td>100 &ndash; 250</td><td>dynes&middot;sec/cm<sup>&minus;5</sup></td></tr>
    <tr><td>Mixed Venous O<sub>2</sub> Saturation</td><td>SvO<sub>2</sub></td><td>60 &ndash; 80</td><td>%</td></tr>
  </tbody>
</table>

<h2>Hemodynamic Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Cardiac Output</td><td>CO = HR &times; SV</td></tr>
    <tr><td>Cardiac Index</td><td>CI = CO / BSA</td></tr>
    <tr><td>Stroke Volume</td><td>SV = CO / HR &times; 1000</td></tr>
    <tr><td>SVR</td><td>SVR = [(MAP &minus; CVP) / CO] &times; 80</td></tr>
    <tr><td>PVR</td><td>PVR = [(mPAP &minus; PCWP) / CO] &times; 80</td></tr>
    <tr><td>MAP</td><td>MAP = DBP + 1/3(SBP &minus; DBP)</td></tr>
  </tbody>
</table>

<h2>Clinical Hemodynamic Profiles</h2>
<table>
  <thead><tr><th>Condition</th><th>CVP</th><th>PCWP</th><th>CO/CI</th><th>SVR</th></tr></thead>
  <tbody>
    <tr><td>Hypovolemic Shock</td><td>&darr;</td><td>&darr;</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Cardiogenic Shock</td><td>&uarr;</td><td>&uarr;</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Septic Shock (early/warm)</td><td>&darr;</td><td>&darr;</td><td>&uarr;</td><td>&darr;</td></tr>
    <tr><td>Septic Shock (late/cold)</td><td>&darr;/Normal</td><td>&darr;/Normal</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Right Heart Failure</td><td>&uarr;</td><td>Normal/&darr;</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Left Heart Failure</td><td>Normal/&uarr;</td><td>&uarr;</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Pulmonary Embolism</td><td>&uarr;</td><td>Normal/&darr;</td><td>&darr;</td><td>&uarr;</td></tr>
    <tr><td>Cardiac Tamponade</td><td>&uarr;</td><td>&uarr;</td><td>&darr;</td><td>&uarr;</td></tr>
  </tbody>
</table>

<h2>PA Catheter (Swan-Ganz) Zones</h2>
<ol>
  <li><strong>Right Atrium:</strong> CVP waveform (a, c, v waves)</li>
  <li><strong>Right Ventricle:</strong> Rapid pressure rise, sharp systolic spike</li>
  <li><strong>Pulmonary Artery:</strong> Dicrotic notch appears (pulmonic valve closure)</li>
  <li><strong>Wedge Position:</strong> Balloon inflated; dampened tracing reflects left atrial pressure</li>
</ol>

<h2>Key Clinical Pearls</h2>
<ul>
  <li>PCWP &gt; 18 mmHg suggests cardiogenic pulmonary edema</li>
  <li>Elevated CVP with normal PCWP suggests right heart failure or PE</li>
  <li>SvO<sub>2</sub> &lt; 60% indicates inadequate O<sub>2</sub> delivery or increased O<sub>2</sub> consumption</li>
  <li>Equalization of pressures (CVP &asymp; PCWP &asymp; PAd) suggests cardiac tamponade</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/topics/hemodynamic-monitoring">Hemodynamics Topics Review</a></li>
  <li><a href="/cheat-sheets/nbrc-formulas-cheat-sheet">NBRC Formulas Cheat Sheet</a></li>
  <li><a href="/glossary/cardiac-output">Glossary: Cardiac Output</a></li>
</ul>
`,
  },

  // ─── 9. NBRC Formulas ────────────────────────────────────────────────
  {
    slug: 'nbrc-formulas-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'NBRC Formulas Cheat Sheet',
    description:
      'Essential NBRC exam formulas for respiratory therapists including ventilation, oxygenation, hemodynamics, and PFT calculations in one quick reference.',
    division: null,
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Oxygenation Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Alveolar Air Equation (PAO<sub>2</sub>)</td><td>PAO<sub>2</sub> = FiO<sub>2</sub>(P<sub>B</sub> &minus; P<sub>H2O</sub>) &minus; (PaCO<sub>2</sub> / 0.8)</td></tr>
    <tr><td>A-a Gradient</td><td>P(A-a)O<sub>2</sub> = PAO<sub>2</sub> &minus; PaO<sub>2</sub></td></tr>
    <tr><td>Normal A-a Gradient</td><td>(Age / 4) + 4</td></tr>
    <tr><td>PaO<sub>2</sub>/FiO<sub>2</sub> Ratio (P/F)</td><td>PaO<sub>2</sub> / FiO<sub>2</sub></td></tr>
    <tr><td>Oxygen Content (CaO<sub>2</sub>)</td><td>(Hb &times; 1.34 &times; SaO<sub>2</sub>) + (PaO<sub>2</sub> &times; 0.003)</td></tr>
    <tr><td>Oxygen Delivery (DO<sub>2</sub>)</td><td>CO &times; CaO<sub>2</sub> &times; 10</td></tr>
    <tr><td>Oxygen Consumption (VO<sub>2</sub>)</td><td>CO &times; (CaO<sub>2</sub> &minus; CvO<sub>2</sub>) &times; 10</td></tr>
    <tr><td>Shunt Equation (Qs/Qt)</td><td>(CcO<sub>2</sub> &minus; CaO<sub>2</sub>) / (CcO<sub>2</sub> &minus; CvO<sub>2</sub>)</td></tr>
  </tbody>
</table>
<p><strong>P/F Ratio interpretation:</strong> Normal &gt; 400; ARDS Mild &lt; 300; Moderate &lt; 200; Severe &lt; 100</p>

<h2>Ventilation Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Minute Ventilation (V<sub>E</sub>)</td><td>V<sub>E</sub> = V<sub>T</sub> &times; f</td></tr>
    <tr><td>Alveolar Ventilation (V<sub>A</sub>)</td><td>V<sub>A</sub> = (V<sub>T</sub> &minus; V<sub>D</sub>) &times; f</td></tr>
    <tr><td>Dead Space Ventilation</td><td>V<sub>D</sub> = V<sub>D</sub>/V<sub>T</sub> &times; V<sub>T</sub></td></tr>
    <tr><td>Bohr Equation (V<sub>D</sub>/V<sub>T</sub>)</td><td>V<sub>D</sub>/V<sub>T</sub> = (PaCO<sub>2</sub> &minus; PeCO<sub>2</sub>) / PaCO<sub>2</sub></td></tr>
    <tr><td>Anatomic Dead Space</td><td>1 mL/lb IBW (or ~2.2 mL/kg IBW)</td></tr>
  </tbody>
</table>

<h2>Mechanics Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th><th>Normal</th></tr></thead>
  <tbody>
    <tr><td>Static Compliance (C<sub>st</sub>)</td><td>V<sub>T</sub> / (P<sub>plat</sub> &minus; PEEP)</td><td>60&ndash;100 mL/cmH<sub>2</sub>O</td></tr>
    <tr><td>Dynamic Compliance (C<sub>dyn</sub>)</td><td>V<sub>T</sub> / (PIP &minus; PEEP)</td><td>40&ndash;80 mL/cmH<sub>2</sub>O</td></tr>
    <tr><td>Airway Resistance (R<sub>aw</sub>)</td><td>(PIP &minus; P<sub>plat</sub>) / Flow</td><td>0.6&ndash;2.4 cmH<sub>2</sub>O/L/s</td></tr>
    <tr><td>Time Constant (&tau;)</td><td>&tau; = R<sub>aw</sub> &times; C</td><td>&mdash;</td></tr>
  </tbody>
</table>

<h2>Hemodynamic Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Cardiac Output</td><td>CO = HR &times; SV</td></tr>
    <tr><td>Cardiac Index</td><td>CI = CO / BSA</td></tr>
    <tr><td>SVR</td><td>[(MAP &minus; CVP) / CO] &times; 80</td></tr>
    <tr><td>PVR</td><td>[(mPAP &minus; PCWP) / CO] &times; 80</td></tr>
    <tr><td>MAP</td><td>DBP + 1/3(SBP &minus; DBP)</td></tr>
  </tbody>
</table>

<h2>ABG &amp; Acid-Base Formulas</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Winter&rsquo;s Formula</td><td>Expected PaCO<sub>2</sub> = (1.5 &times; HCO<sub>3</sub>) + 8 &plusmn; 2</td></tr>
    <tr><td>Anion Gap</td><td>Na<sup>+</sup> &minus; (Cl<sup>&minus;</sup> + HCO<sub>3</sub><sup>&minus;</sup>); Normal: 8&ndash;12</td></tr>
    <tr><td>Henderson-Hasselbalch</td><td>pH = 6.1 + log(HCO<sub>3</sub> / (0.03 &times; PaCO<sub>2</sub>))</td></tr>
  </tbody>
</table>

<h2>Weight-Based Calculations</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>IBW Male</td><td>50 + 2.3(height in inches &minus; 60)</td></tr>
    <tr><td>IBW Female</td><td>45.5 + 2.3(height in inches &minus; 60)</td></tr>
    <tr><td>Tidal Volume (lung protective)</td><td>6&ndash;8 mL/kg IBW</td></tr>
    <tr><td>Pediatric ETT (uncuffed)</td><td>(Age / 4) + 4</td></tr>
    <tr><td>Pediatric ETT (cuffed)</td><td>(Age / 4) + 3.5</td></tr>
  </tbody>
</table>

<h2>Air-Entrainment Formula</h2>
<p><strong>Total Flow = O<sub>2</sub> flow &times; (ratio + 1)</strong></p>
<p>Where ratio = air:O<sub>2</sub> entrainment ratio for the desired FiO<sub>2</sub></p>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/cheat-sheets/abg-cheat-sheet">ABG Interpretation Cheat Sheet</a></li>
  <li><a href="/cheat-sheets/hemodynamics-cheat-sheet">Hemodynamics Cheat Sheet</a></li>
  <li><a href="/cheat-sheets/ventilator-modes-cheat-sheet">Ventilator Modes Cheat Sheet</a></li>
</ul>
`,
  },

  // ─── 10. Airway Management ───────────────────────────────────────────
  {
    slug: 'airway-management-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Airway Management Cheat Sheet',
    description:
      'Airway management quick reference for respiratory therapists with ETT sizes, intubation drugs, difficult airway algorithm, and LMA selection.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Adult ETT Sizing</h2>
<table>
  <thead><tr><th>Patient</th><th>ETT Size (mm ID)</th><th>Insertion Depth (cm at teeth)</th></tr></thead>
  <tbody>
    <tr><td>Adult Female</td><td>7.0 &ndash; 8.0</td><td>21 cm</td></tr>
    <tr><td>Adult Male</td><td>8.0 &ndash; 9.0</td><td>23 cm</td></tr>
  </tbody>
</table>

<h2>Pediatric ETT Sizing</h2>
<table>
  <thead><tr><th>Formula</th><th>Equation</th></tr></thead>
  <tbody>
    <tr><td>Uncuffed ETT</td><td>(Age in years / 4) + 4</td></tr>
    <tr><td>Cuffed ETT</td><td>(Age in years / 4) + 3.5</td></tr>
    <tr><td>Depth at lip</td><td>ETT size &times; 3</td></tr>
  </tbody>
</table>

<h2>Laryngoscope Blade Selection</h2>
<table>
  <thead><tr><th>Blade</th><th>Type</th><th>Technique</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Miller</td><td>Straight</td><td>Lift epiglottis directly</td><td>Infants, long floppy epiglottis</td></tr>
    <tr><td>Macintosh</td><td>Curved</td><td>Place in vallecula, lift indirectly</td><td>Adults (most common)</td></tr>
  </tbody>
</table>

<h2>Rapid Sequence Intubation (RSI) Drugs</h2>
<table>
  <thead><tr><th>Drug</th><th>Class</th><th>Dose</th><th>Onset</th><th>Duration</th></tr></thead>
  <tbody>
    <tr><td>Etomidate</td><td>Sedative</td><td>0.3 mg/kg IV</td><td>30&ndash;60 sec</td><td>5&ndash;15 min</td></tr>
    <tr><td>Propofol</td><td>Sedative</td><td>1.5&ndash;2.5 mg/kg IV</td><td>30 sec</td><td>5&ndash;10 min</td></tr>
    <tr><td>Ketamine</td><td>Dissociative</td><td>1&ndash;2 mg/kg IV</td><td>30&ndash;60 sec</td><td>10&ndash;20 min</td></tr>
    <tr><td>Succinylcholine</td><td>Depolarizing NMB</td><td>1&ndash;1.5 mg/kg IV</td><td>&lt; 60 sec</td><td>5&ndash;10 min</td></tr>
    <tr><td>Rocuronium</td><td>Non-depolarizing NMB</td><td>0.6&ndash;1.2 mg/kg IV</td><td>60&ndash;90 sec</td><td>30&ndash;60 min</td></tr>
  </tbody>
</table>

<h2>Confirmation of ETT Placement</h2>
<ol>
  <li><strong>Gold standard:</strong> End-tidal CO<sub>2</sub> detection (capnography/colorimetric)</li>
  <li>Bilateral breath sounds (auscultate axillae)</li>
  <li>Absence of epigastric sounds</li>
  <li>Chest rise and fall</li>
  <li>SpO<sub>2</sub> maintenance</li>
  <li>Chest X-ray: ETT tip 2&ndash;6 cm above carina (T3&ndash;T4)</li>
  <li>Cuff pressure: 20&ndash;25 cmH<sub>2</sub>O (minimum leak technique: 20&ndash;30 cmH<sub>2</sub>O)</li>
</ol>

<h2>Supraglottic Airways (LMA Sizing)</h2>
<table>
  <thead><tr><th>LMA Size</th><th>Patient Weight</th><th>Max Cuff Volume</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>&lt; 5 kg</td><td>4 mL</td></tr>
    <tr><td>1.5</td><td>5&ndash;10 kg</td><td>7 mL</td></tr>
    <tr><td>2</td><td>10&ndash;20 kg</td><td>10 mL</td></tr>
    <tr><td>2.5</td><td>20&ndash;30 kg</td><td>14 mL</td></tr>
    <tr><td>3</td><td>30&ndash;50 kg</td><td>20 mL</td></tr>
    <tr><td>4</td><td>50&ndash;70 kg</td><td>30 mL</td></tr>
    <tr><td>5</td><td>70&ndash;100 kg</td><td>40 mL</td></tr>
  </tbody>
</table>

<h2>Difficult Airway Predictors (LEMON)</h2>
<ul>
  <li><strong>L</strong> &mdash; Look externally (facial trauma, obesity, short neck)</li>
  <li><strong>E</strong> &mdash; Evaluate 3-3-2 rule (mouth opening 3 fingers, hyoid-mental 3 fingers, thyroid-hyoid 2 fingers)</li>
  <li><strong>M</strong> &mdash; Mallampati score (I&ndash;IV; III&ndash;IV = difficult)</li>
  <li><strong>O</strong> &mdash; Obstruction (epiglottitis, abscess, tumor)</li>
  <li><strong>N</strong> &mdash; Neck mobility (C-spine injury, arthritis)</li>
</ul>

<h2>Complications of Intubation</h2>
<ul>
  <li>Right mainstem intubation (most common malposition)</li>
  <li>Esophageal intubation</li>
  <li>Dental/lip trauma</li>
  <li>Laryngospasm or bronchospasm</li>
  <li>Vagal response (bradycardia)</li>
  <li>Tracheal stenosis (late complication from cuff over-inflation)</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cse-exam-guide">NBRC CSE Exam Guide</a></li>
  <li><a href="/topics/airway-management">Airway Management Topics</a></li>
  <li><a href="/cheat-sheets/ventilator-modes-cheat-sheet">Ventilator Modes Cheat Sheet</a></li>
  <li><a href="/glossary/endotracheal-tube">Glossary: Endotracheal Tube</a></li>
</ul>
`,
  },

  // ─── 11. Sleep Study Scoring ─────────────────────────────────────────
  {
    slug: 'sleep-study-scoring-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Sleep Study Scoring Cheat Sheet',
    description:
      'Sleep study scoring reference with AHI classification, sleep stage criteria, respiratory event definitions, and EEG patterns for the SDS exam.',
    division: 'sds',
    readTime: '6 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Apnea-Hypopnea Index (AHI) Classification</h2>
<table>
  <thead><tr><th>Severity</th><th>AHI (events/hour)</th></tr></thead>
  <tbody>
    <tr><td>Normal</td><td>&lt; 5</td></tr>
    <tr><td>Mild OSA</td><td>5 &ndash; 14</td></tr>
    <tr><td>Moderate OSA</td><td>15 &ndash; 29</td></tr>
    <tr><td>Severe OSA</td><td>&ge; 30</td></tr>
  </tbody>
</table>

<h2>Respiratory Event Definitions (AASM)</h2>
<table>
  <thead><tr><th>Event</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td>Obstructive Apnea</td><td>Airflow drop &ge; 90% for &ge; 10 seconds with continued respiratory effort</td></tr>
    <tr><td>Central Apnea</td><td>Airflow drop &ge; 90% for &ge; 10 seconds with <em>no</em> respiratory effort</td></tr>
    <tr><td>Mixed Apnea</td><td>Starts as central (no effort), ends as obstructive (effort present)</td></tr>
    <tr><td>Hypopnea</td><td>Airflow drop &ge; 30% for &ge; 10 seconds with &ge; 3% desaturation or arousal</td></tr>
    <tr><td>RERA</td><td>Sequence of breaths with increasing effort leading to arousal; does not meet apnea/hypopnea criteria</td></tr>
  </tbody>
</table>
<p><strong>RDI</strong> = AHI + RERAs per hour of sleep</p>
<p><strong>ODI</strong> (Oxygen Desaturation Index) = number of &ge; 3% desaturations per hour</p>

<h2>Sleep Stages (AASM Scoring)</h2>
<table>
  <thead><tr><th>Stage</th><th>EEG Pattern</th><th>Key Features</th></tr></thead>
  <tbody>
    <tr><td>Wake (W)</td><td>Alpha rhythm (8&ndash;13 Hz) &mdash; eyes closed</td><td>Eye blinks; high muscle tone</td></tr>
    <tr><td>N1 (Light Sleep)</td><td>Theta waves (4&ndash;7 Hz)</td><td>Vertex sharp waves; slow rolling eye movements</td></tr>
    <tr><td>N2 (Sleep)</td><td>Theta background</td><td><strong>K-complexes</strong> and <strong>sleep spindles</strong> (12&ndash;14 Hz)</td></tr>
    <tr><td>N3 (Deep/Slow Wave)</td><td>Delta waves (0.5&ndash;2 Hz) &ge; 20% of epoch</td><td>High amplitude; most restorative; difficult to arouse</td></tr>
    <tr><td>REM (R)</td><td>Low-amplitude, mixed frequency</td><td>Rapid eye movements; muscle atonia (low chin EMG); dreaming</td></tr>
  </tbody>
</table>

<h2>PSG Montage Channels</h2>
<table>
  <thead><tr><th>Channel</th><th>What It Measures</th></tr></thead>
  <tbody>
    <tr><td>EEG (F, C, O leads)</td><td>Brain activity / sleep stages</td></tr>
    <tr><td>EOG (E1, E2)</td><td>Eye movements</td></tr>
    <tr><td>Chin EMG</td><td>Muscle tone (REM atonia)</td></tr>
    <tr><td>Nasal pressure transducer</td><td>Airflow (primary for hypopnea)</td></tr>
    <tr><td>Oronasal thermistor</td><td>Airflow (primary for apnea detection)</td></tr>
    <tr><td>Thoracic &amp; abdominal belts (RIP)</td><td>Respiratory effort</td></tr>
    <tr><td>Pulse oximetry</td><td>SpO<sub>2</sub> / desaturations</td></tr>
    <tr><td>Leg EMG</td><td>Periodic limb movements (PLMS)</td></tr>
    <tr><td>ECG</td><td>Heart rate and rhythm</td></tr>
    <tr><td>Body position sensor</td><td>Supine vs. non-supine</td></tr>
  </tbody>
</table>

<h2>Periodic Limb Movements (PLMS)</h2>
<ul>
  <li>Duration: 0.5 &ndash; 10 seconds</li>
  <li>Minimum of 4 consecutive movements, 5&ndash;90 seconds apart</li>
  <li>PLM Index &ge; 15/hour = clinically significant</li>
</ul>

<h2>Key Scoring Rules</h2>
<ul>
  <li>Epochs are scored in 30-second windows</li>
  <li>Stage is assigned based on the majority (&gt; 50%) of the epoch</li>
  <li>A sleep-onset REM period (SOREMP) within 15 minutes may indicate narcolepsy</li>
  <li>Normal sleep latency: 10&ndash;20 minutes</li>
  <li>Normal REM latency: 90&ndash;120 minutes from sleep onset</li>
</ul>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-sds-exam-guide">NBRC SDS Exam Guide</a></li>
  <li><a href="/topics/sleep-disorders">Sleep Disorders Topics</a></li>
  <li><a href="/cheat-sheets/pap-therapy-cheat-sheet">PAP Therapy Cheat Sheet</a></li>
  <li><a href="/glossary/polysomnography">Glossary: Polysomnography</a></li>
</ul>
`,
  },

  // ─── 12. PAP Therapy ─────────────────────────────────────────────────
  {
    slug: 'pap-therapy-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'PAP Therapy Cheat Sheet',
    description:
      'PAP therapy quick reference with CPAP, BiPAP, ASV, and auto-PAP settings, titration protocols, mask selection, and troubleshooting for the SDS exam.',
    division: 'sds',
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>PAP Device Types</h2>
<table>
  <thead><tr><th>Device</th><th>Description</th><th>Primary Indication</th></tr></thead>
  <tbody>
    <tr><td>CPAP</td><td>Continuous positive airway pressure (single pressure)</td><td>Obstructive sleep apnea (OSA)</td></tr>
    <tr><td>Auto-PAP (APAP)</td><td>Adjusts pressure automatically within a range</td><td>OSA, especially positional/REM-related</td></tr>
    <tr><td>BiPAP / BPAP</td><td>Separate inspiratory (IPAP) and expiratory (EPAP) pressures</td><td>OSA with high-pressure intolerance, OHS, NMD</td></tr>
    <tr><td>BiPAP-ST</td><td>BiPAP with spontaneous-timed backup rate</td><td>Central apneas, hypoventilation syndromes</td></tr>
    <tr><td>ASV</td><td>Adaptive servo-ventilation (auto-adjusts PS and rate)</td><td>Central/complex sleep apnea, Cheyne-Stokes</td></tr>
  </tbody>
</table>
<p><strong>Important:</strong> ASV is <em>contraindicated</em> in patients with symptomatic chronic heart failure and LVEF &le; 45%.</p>

<h2>CPAP Titration Protocol (AASM Guidelines)</h2>
<table>
  <thead><tr><th>Step</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td>Starting pressure</td><td>4 cmH<sub>2</sub>O</td></tr>
    <tr><td>Increase for apneas</td><td>Increase by 1 cmH<sub>2</sub>O at &ge; 5-minute intervals</td></tr>
    <tr><td>Increase for hypopneas</td><td>Increase by 1 cmH<sub>2</sub>O at &ge; 5-minute intervals</td></tr>
    <tr><td>Increase for RERAs</td><td>Increase by 1 cmH<sub>2</sub>O at &ge; 5-minute intervals</td></tr>
    <tr><td>Increase for snoring</td><td>Increase by 1 cmH<sub>2</sub>O at &ge; 5-minute intervals</td></tr>
    <tr><td>Maximum pressure</td><td>Usually 20 cmH<sub>2</sub>O</td></tr>
    <tr><td>Optimal pressure</td><td>Lowest pressure that eliminates events in all positions and sleep stages</td></tr>
  </tbody>
</table>

<h2>BiPAP Titration</h2>
<ul>
  <li>Start IPAP at 8 cmH<sub>2</sub>O, EPAP at 4 cmH<sub>2</sub>O</li>
  <li>Increase EPAP for obstructive apneas (like CPAP)</li>
  <li>Increase IPAP for hypopneas, hypoventilation, desaturation</li>
  <li>Minimum IPAP&ndash;EPAP differential: typically 4 cmH<sub>2</sub>O</li>
  <li>Maximum IPAP: usually 25&ndash;30 cmH<sub>2</sub>O</li>
</ul>

<h2>Mask Types</h2>
<table>
  <thead><tr><th>Mask Type</th><th>Coverage</th><th>Best For</th><th>Considerations</th></tr></thead>
  <tbody>
    <tr><td>Nasal</td><td>Nose only</td><td>First-line for most patients</td><td>Mouth leak may occur</td></tr>
    <tr><td>Nasal Pillows</td><td>Nares</td><td>Low-pressure, claustrophobia</td><td>May cause nasal irritation at high pressures</td></tr>
    <tr><td>Full-Face (Oronasal)</td><td>Nose &amp; mouth</td><td>Mouth breathers, high pressures</td><td>Higher leak volume; aspiration risk if vomiting</td></tr>
    <tr><td>Total Face</td><td>Entire face</td><td>Facial abnormalities, skin breakdown</td><td>Rarely used</td></tr>
  </tbody>
</table>

<h2>Common PAP Side Effects &amp; Solutions</h2>
<table>
  <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
  <tbody>
    <tr><td>Nasal dryness / congestion</td><td>Add or increase heated humidification</td></tr>
    <tr><td>Mask leak</td><td>Refit mask; try different size or type</td></tr>
    <tr><td>Aerophagia (air swallowing)</td><td>Lower pressure; use EPR/flex; switch to BiPAP</td></tr>
    <tr><td>Claustrophobia</td><td>Try nasal pillows; desensitization; behavioral therapy</td></tr>
    <tr><td>Pressure intolerance</td><td>Use ramp feature; EPR; switch to APAP or BiPAP</td></tr>
    <tr><td>Skin breakdown (nasal bridge)</td><td>Adjust fit; nasal pillows; mask liner</td></tr>
    <tr><td>Central apneas on CPAP</td><td>Evaluate for complex/treatment-emergent CSA; consider BiPAP-ST or ASV</td></tr>
  </tbody>
</table>

<h2>PAP Compliance</h2>
<p>Medicare definition of compliance: usage &ge; 4 hours per night for &ge; 70% of nights in a consecutive 30-day period within the first 90 days.</p>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-sds-exam-guide">NBRC SDS Exam Guide</a></li>
  <li><a href="/topics/positive-airway-pressure">PAP Therapy Topics</a></li>
  <li><a href="/cheat-sheets/sleep-study-scoring-cheat-sheet">Sleep Study Scoring Cheat Sheet</a></li>
  <li><a href="/glossary/cpap">Glossary: CPAP</a></li>
</ul>
`,
  },

  // ─── 13. Bronchial Challenge Testing ─────────────────────────────────
  {
    slug: 'bronchial-challenge-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Bronchial Challenge Testing Cheat Sheet',
    description:
      'Bronchial challenge testing reference with methacholine, mannitol, and exercise protocols, interpretation criteria, and contraindications for RPFT exam prep.',
    division: 'rpft',
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Purpose of Bronchial Challenge Testing</h2>
<p>Bronchial provocation testing (BPT) assesses <strong>airway hyperresponsiveness (AHR)</strong>, a hallmark of asthma. It is used when spirometry is normal but asthma is suspected.</p>

<h2>Types of Challenge Tests</h2>
<table>
  <thead><tr><th>Type</th><th>Agent/Method</th><th>Mechanism</th></tr></thead>
  <tbody>
    <tr><td>Direct (pharmacologic)</td><td>Methacholine, histamine</td><td>Acts directly on smooth muscle receptors</td></tr>
    <tr><td>Indirect (osmotic)</td><td>Mannitol, hypertonic saline</td><td>Triggers mediator release from inflammatory cells</td></tr>
    <tr><td>Indirect (physical)</td><td>Exercise, eucapnic voluntary hyperventilation (EVH)</td><td>Airway cooling/drying triggers bronchoconstriction</td></tr>
  </tbody>
</table>

<h2>Methacholine Challenge Protocol</h2>
<ul>
  <li>Baseline FEV<sub>1</sub> must be &ge; 60&ndash;70% predicted to proceed</li>
  <li>Increasing concentrations: 0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 25 mg/mL</li>
  <li>Spirometry performed 30&ndash;90 seconds after each dose (dosimeter or 2-minute tidal breathing)</li>
  <li>Test ends when FEV<sub>1</sub> drops &ge; 20% or maximum dose is reached</li>
</ul>

<h3>Methacholine Interpretation</h3>
<table>
  <thead><tr><th>PC<sub>20</sub> (mg/mL)</th><th>Interpretation</th></tr></thead>
  <tbody>
    <tr><td>&lt; 1</td><td>Moderate to severe AHR</td></tr>
    <tr><td>1 &ndash; 4</td><td>Mild AHR (borderline)</td></tr>
    <tr><td>4 &ndash; 16</td><td>Borderline AHR</td></tr>
    <tr><td>&gt; 16</td><td>Normal (negative test)</td></tr>
  </tbody>
</table>
<p><strong>PC<sub>20</sub></strong> = provocative concentration that causes a 20% fall in FEV<sub>1</sub></p>
<p>A negative methacholine test has high <strong>negative predictive value</strong> (effectively rules out current asthma).</p>

<h2>Mannitol Challenge</h2>
<ul>
  <li>Increasing doses: 0 (empty capsule), 5, 10, 20, 40, 80, 160, 160, 160 mg</li>
  <li><strong>Positive:</strong> &ge; 15% fall in FEV<sub>1</sub> from baseline, or &ge; 10% fall between consecutive doses</li>
  <li>Advantage: more specific for active airway inflammation; useful for exercise-induced bronchoconstriction</li>
</ul>

<h2>Exercise Challenge Test</h2>
<ul>
  <li>8 minutes of exercise at 80&ndash;90% maximum heart rate (treadmill or cycle ergometer)</li>
  <li>Breathe dry air (&lt; 10 mg H<sub>2</sub>O/L) if possible</li>
  <li>Spirometry at 3, 5, 10, 15, 20, and 30 minutes post-exercise</li>
  <li><strong>Positive:</strong> &ge; 10% fall in FEV<sub>1</sub> from pre-exercise baseline</li>
  <li>Some guidelines use &ge; 15% for a definitive positive</li>
</ul>

<h2>Contraindications</h2>
<table>
  <thead><tr><th>Absolute</th><th>Relative</th></tr></thead>
  <tbody>
    <tr><td>FEV<sub>1</sub> &lt; 60% predicted (or &lt; 1.5 L)</td><td>FEV<sub>1</sub> 60&ndash;70% predicted</td></tr>
    <tr><td>Recent MI or stroke (within 3 months)</td><td>Pregnancy / nursing</td></tr>
    <tr><td>Uncontrolled hypertension (&gt; 200/100)</td><td>Current use of cholinesterase inhibitor</td></tr>
    <tr><td>Known aortic or cerebral aneurysm</td><td>Upper respiratory infection (within 2&ndash;6 weeks)</td></tr>
  </tbody>
</table>

<h2>Medication Withholding</h2>
<table>
  <thead><tr><th>Medication</th><th>Withhold Period</th></tr></thead>
  <tbody>
    <tr><td>Short-acting bronchodilator (SABA)</td><td>8 hours</td></tr>
    <tr><td>Ipratropium (SAMA)</td><td>24 hours</td></tr>
    <tr><td>LABA</td><td>48 hours</td></tr>
    <tr><td>LAMA (tiotropium)</td><td>72 hours</td></tr>
    <tr><td>Leukotriene modifiers</td><td>24 hours</td></tr>
    <tr><td>Caffeine</td><td>Day of test</td></tr>
  </tbody>
</table>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-rpft-exam-guide">NBRC RPFT Exam Guide</a></li>
  <li><a href="/topics/bronchial-challenge-testing">Bronchial Challenge Topics</a></li>
  <li><a href="/cheat-sheets/pft-interpretation-cheat-sheet">PFT Interpretation Cheat Sheet</a></li>
  <li><a href="/glossary/airway-hyperresponsiveness">Glossary: Airway Hyperresponsiveness</a></li>
</ul>
`,
  },

  // ─── 14. Diffusion Capacity (DLCO) ───────────────────────────────────
  {
    slug: 'diffusion-capacity-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Diffusion Capacity (DLCO) Cheat Sheet',
    description:
      'DLCO diffusion capacity quick reference with normal values, technique, interpretation, conditions that increase or decrease DLCO, and adjustment factors.',
    division: 'cpft',
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>What is DLCO?</h2>
<p>Diffusing capacity of the lung for carbon monoxide (DLCO) measures the ability of the lungs to transfer gas from inspired air to the bloodstream. It reflects the integrity of the alveolar-capillary membrane and pulmonary capillary blood volume.</p>

<h2>Normal Values</h2>
<table>
  <thead><tr><th>Parameter</th><th>Normal</th></tr></thead>
  <tbody>
    <tr><td>DLCO (% predicted)</td><td>75 &ndash; 140%</td></tr>
    <tr><td>DLCO absolute (varies by lab)</td><td>~25 mL CO/min/mmHg (typical adult)</td></tr>
  </tbody>
</table>

<h2>DLCO Severity Grading</h2>
<table>
  <thead><tr><th>Severity</th><th>DLCO (% Predicted)</th></tr></thead>
  <tbody>
    <tr><td>Normal</td><td>&ge; 75%</td></tr>
    <tr><td>Mild decrease</td><td>60 &ndash; 74%</td></tr>
    <tr><td>Moderate decrease</td><td>40 &ndash; 59%</td></tr>
    <tr><td>Severe decrease</td><td>&lt; 40%</td></tr>
  </tbody>
</table>

<h2>Single-Breath DLCO Technique</h2>
<ol>
  <li>Patient exhales to RV (residual volume)</li>
  <li>Rapidly inhales test gas mixture to TLC (should reach &ge; 85% of VC)</li>
  <li>10-second breath-hold at TLC (&plusmn; 2 seconds)</li>
  <li>Exhale: discard initial 750&ndash;1000 mL (dead space washout)</li>
  <li>Collect alveolar gas sample</li>
  <li>Analyze for CO and tracer gas (helium or methane)</li>
</ol>
<p><strong>Test gas mixture:</strong> 0.3% CO, 10% He (or 0.3% CH<sub>4</sub>), 21% O<sub>2</sub>, balance N<sub>2</sub></p>

<h2>Quality Control Criteria</h2>
<ul>
  <li>Inspired volume (V<sub>I</sub>) &ge; 85% of largest VC</li>
  <li>Breath-hold time: 10 &plusmn; 2 seconds</li>
  <li>Two acceptable tests within 2 mL CO/min/mmHg of each other</li>
  <li>Wait &ge; 4 minutes between tests (allow CO washout)</li>
  <li>Maximum of 5 attempts per session</li>
</ul>

<h2>Conditions That Decrease DLCO</h2>
<table>
  <thead><tr><th>Category</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>Loss of alveolar surface area</td><td>Emphysema, lung resection</td></tr>
    <tr><td>Thickened A-C membrane</td><td>Pulmonary fibrosis (ILD), asbestosis, sarcoidosis</td></tr>
    <tr><td>Decreased pulmonary blood flow</td><td>Pulmonary embolism, pulmonary hypertension</td></tr>
    <tr><td>Anemia</td><td>Low hemoglobin reduces CO binding</td></tr>
    <tr><td>High carboxyhemoglobin</td><td>Smoking (back-pressure effect)</td></tr>
  </tbody>
</table>

<h2>Conditions That Increase DLCO</h2>
<table>
  <thead><tr><th>Category</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>Increased pulmonary blood volume</td><td>Left-to-right shunt, exercise, supine position</td></tr>
    <tr><td>Polycythemia</td><td>More hemoglobin available for CO uptake</td></tr>
    <tr><td>Alveolar hemorrhage</td><td>Goodpasture syndrome (hemoglobin in alveoli binds CO)</td></tr>
    <tr><td>Asthma</td><td>May be normal or slightly elevated</td></tr>
    <tr><td>Obesity</td><td>Increased blood volume</td></tr>
  </tbody>
</table>

<h2>Adjustments</h2>
<ul>
  <li><strong>Hemoglobin correction:</strong> DLCO should be adjusted for anemia or polycythemia</li>
  <li><strong>Altitude correction:</strong> Higher altitude increases DLCO (lower PIO<sub>2</sub>)</li>
  <li><strong>COHb correction:</strong> Smokers should abstain 24 hours; or correct for COHb level</li>
  <li><strong>VA adjustment (KCO):</strong> DLCO/VA (KCO) corrects for lung volume; helps distinguish pneumonectomy (normal KCO) from emphysema (low KCO)</li>
</ul>

<h2>DLCO vs. KCO Interpretation</h2>
<table>
  <thead><tr><th>DLCO</th><th>KCO</th><th>Interpretation</th></tr></thead>
  <tbody>
    <tr><td>Low</td><td>Normal</td><td>Loss of lung units (e.g., pneumonectomy, chest wall restriction)</td></tr>
    <tr><td>Low</td><td>Low</td><td>Intrinsic lung disease (emphysema, ILD)</td></tr>
    <tr><td>Normal</td><td>High</td><td>Extra-pulmonary restriction (e.g., neuromuscular)</td></tr>
  </tbody>
</table>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-cpft-exam-guide">NBRC CPFT Exam Guide</a></li>
  <li><a href="/topics/diffusion-capacity">DLCO Topics Review</a></li>
  <li><a href="/cheat-sheets/pft-interpretation-cheat-sheet">PFT Interpretation Cheat Sheet</a></li>
  <li><a href="/glossary/dlco">Glossary: DLCO</a></li>
</ul>
`,
  },

  // ─── 15. Respiratory Assessment ──────────────────────────────────────
  {
    slug: 'respiratory-assessment-cheat-sheet',
    type: 'CHEAT_SHEET' as const,
    title: 'Respiratory Assessment Cheat Sheet',
    description:
      'Comprehensive respiratory assessment reference with vital signs, breath sounds, inspection findings, palpation, percussion, and common clinical patterns.',
    division: null,
    readTime: '5 min read',
    publishedAt: new Date('2026-08-10'),
    content: `
<h2>Normal Adult Vital Signs</h2>
<table>
  <thead><tr><th>Parameter</th><th>Normal Range</th></tr></thead>
  <tbody>
    <tr><td>Heart Rate</td><td>60 &ndash; 100 bpm</td></tr>
    <tr><td>Respiratory Rate</td><td>12 &ndash; 20 breaths/min</td></tr>
    <tr><td>Blood Pressure</td><td>&lt; 120/80 mmHg (normal)</td></tr>
    <tr><td>Temperature</td><td>36.5 &ndash; 37.5 &deg;C (97.7 &ndash; 99.5 &deg;F)</td></tr>
    <tr><td>SpO<sub>2</sub></td><td>95 &ndash; 100%</td></tr>
  </tbody>
</table>

<h2>Inspection Findings</h2>
<table>
  <thead><tr><th>Finding</th><th>Significance</th></tr></thead>
  <tbody>
    <tr><td>Barrel chest (increased AP diameter)</td><td>COPD / emphysema, air trapping</td></tr>
    <tr><td>Pectus excavatum (funnel chest)</td><td>May restrict lung expansion</td></tr>
    <tr><td>Pectus carinatum (pigeon chest)</td><td>Usually benign</td></tr>
    <tr><td>Kyphoscoliosis</td><td>Restrictive lung disease</td></tr>
    <tr><td>Accessory muscle use</td><td>Increased work of breathing</td></tr>
    <tr><td>Intercostal retractions</td><td>Upper airway obstruction, severe distress</td></tr>
    <tr><td>Paradoxical breathing</td><td>Diaphragm fatigue or paralysis</td></tr>
    <tr><td>Pursed-lip breathing</td><td>COPD (auto-PEEP strategy)</td></tr>
    <tr><td>Tripod positioning</td><td>Severe respiratory distress</td></tr>
    <tr><td>Cyanosis (central)</td><td>Deoxyhemoglobin &ge; 5 g/dL; severe hypoxemia</td></tr>
    <tr><td>Clubbing</td><td>Chronic hypoxemia (lung cancer, bronchiectasis, IPF, CHD)</td></tr>
    <tr><td>JVD (jugular venous distension)</td><td>Right heart failure, cor pulmonale, tension pneumothorax</td></tr>
  </tbody>
</table>

<h2>Breath Sounds</h2>
<table>
  <thead><tr><th>Sound</th><th>Description</th><th>Common Causes</th></tr></thead>
  <tbody>
    <tr><td>Vesicular</td><td>Soft, low-pitched; I &gt; E; heard over periphery</td><td>Normal lung</td></tr>
    <tr><td>Bronchovesicular</td><td>Medium pitch; I = E; heard over major bronchi</td><td>Normal near large airways</td></tr>
    <tr><td>Bronchial (tubular)</td><td>Loud, high-pitched; E &gt; I; normally over trachea</td><td>Consolidation (when heard peripherally)</td></tr>
    <tr><td>Crackles (rales)</td><td>Discontinuous; fine or coarse</td><td>Fine: pulmonary fibrosis, early CHF; Coarse: secretions, pneumonia</td></tr>
    <tr><td>Wheezes</td><td>Continuous, high-pitched, musical</td><td>Asthma, bronchospasm, airway narrowing</td></tr>
    <tr><td>Rhonchi</td><td>Continuous, low-pitched, snoring</td><td>Secretions in large airways; may clear with coughing</td></tr>
    <tr><td>Stridor</td><td>High-pitched, inspiratory; heard over upper airway</td><td>Croup, epiglottitis, post-extubation edema, foreign body</td></tr>
    <tr><td>Pleural friction rub</td><td>Creaking, grating; heard in both phases</td><td>Pleurisy, pleural inflammation</td></tr>
    <tr><td>Diminished / absent</td><td>Decreased or no sounds</td><td>Pneumothorax, pleural effusion, hyperinflation, obesity</td></tr>
  </tbody>
</table>

<h2>Palpation &amp; Percussion</h2>
<table>
  <thead><tr><th>Technique</th><th>Normal Finding</th><th>Abnormal Findings</th></tr></thead>
  <tbody>
    <tr><td>Tactile fremitus</td><td>Equal bilateral vibration with vocalization</td><td>Increased: consolidation; Decreased: effusion, pneumothorax</td></tr>
    <tr><td>Tracheal position</td><td>Midline</td><td>Shifts toward: atelectasis, pneumonectomy; Away from: tension PTX, large effusion</td></tr>
    <tr><td>Percussion</td><td>Resonant over lung fields</td><td>Hyperresonant: PTX, emphysema; Dull: consolidation, effusion; Flat: massive effusion</td></tr>
    <tr><td>Diaphragm excursion</td><td>3 &ndash; 5 cm bilateral</td><td>Decreased: hyperinflation, paralysis</td></tr>
  </tbody>
</table>

<h2>Abnormal Breathing Patterns</h2>
<table>
  <thead><tr><th>Pattern</th><th>Description</th><th>Association</th></tr></thead>
  <tbody>
    <tr><td>Tachypnea</td><td>RR &gt; 20/min</td><td>Fever, anxiety, hypoxemia, metabolic acidosis</td></tr>
    <tr><td>Bradypnea</td><td>RR &lt; 12/min</td><td>Opioids, CNS depression, hypothermia</td></tr>
    <tr><td>Kussmaul</td><td>Deep, rapid respirations</td><td>Metabolic acidosis (DKA)</td></tr>
    <tr><td>Cheyne-Stokes</td><td>Crescendo-decrescendo with apnea periods</td><td>CHF, stroke, brain injury</td></tr>
    <tr><td>Biot (ataxic)</td><td>Irregular rate and depth with apnea</td><td>Brainstem damage</td></tr>
    <tr><td>Apneustic</td><td>Prolonged inspiratory hold</td><td>Pontine lesion</td></tr>
  </tbody>
</table>

<h2>Related Resources</h2>
<ul>
  <li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Guide</a></li>
  <li><a href="/topics/patient-assessment">Patient Assessment Topics</a></li>
  <li><a href="/cheat-sheets/chest-xray-cheat-sheet">Chest X-Ray Cheat Sheet</a></li>
  <li><a href="/cheat-sheets/abg-cheat-sheet">ABG Interpretation Cheat Sheet</a></li>
  <li><a href="/glossary/auscultation">Glossary: Auscultation</a></li>
</ul>
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
  console.log(`\nDone! Upserted ${pages.length} cheat sheet pages.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
