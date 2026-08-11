import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const pages = [
  // ============================================================
  // 1. TMC GLOSSARY
  // ============================================================
  {
    slug: 'tmc-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC TMC Exam Glossary',
    description:
      'Comprehensive glossary of key terms and definitions for the NBRC Therapist Multiple-Choice (TMC) exam. Covers respiratory therapy terminology, equipment, and clinical concepts.',
    division: 'tmc',
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC TMC Exam Glossary</h1>
<p>This glossary covers essential terminology you need to know for the NBRC Therapist Multiple-Choice (TMC) exam. Terms are organized alphabetically for quick reference during your study sessions.</p>

<h2>A</h2>
<dl>
<dt><strong>Acid-Base Balance</strong></dt>
<dd>The homeostatic regulation of the body's pH, maintained through buffer systems, respiratory compensation (CO2 elimination), and renal compensation (bicarbonate regulation). Normal arterial pH is 7.35-7.45.</dd>

<dt><strong>Aerosol Therapy</strong></dt>
<dd>The delivery of medication or humidity via aerosolized particles to the respiratory tract. Includes metered-dose inhalers (MDIs), dry powder inhalers (DPIs), small-volume nebulizers (SVNs), and large-volume nebulizers.</dd>

<dt><strong>Air Trapping</strong></dt>
<dd>The retention of excess gas in the lungs at end-expiration, commonly associated with obstructive lung diseases such as COPD and asthma. Detected by elevated residual volume (RV) on pulmonary function testing.</dd>

<dt><strong>Airway Resistance (Raw)</strong></dt>
<dd>The opposition to airflow through the conducting airways, measured in cmH2O/L/sec. Normal Raw is 0.5-2.5 cmH2O/L/sec. Increased in bronchospasm, secretion retention, and airway edema.</dd>

<dt><strong>Atelectasis</strong></dt>
<dd>Partial or complete collapse of lung tissue. Types include resorption (obstructive), compression, and adhesive (surfactant deficiency). Treated with lung expansion therapy such as incentive spirometry or CPAP.</dd>
</dl>

<h2>B</h2>
<dl>
<dt><strong>Barotrauma</strong></dt>
<dd>Lung injury caused by excessive airway pressure during mechanical ventilation. Manifestations include pneumothorax, pneumomediastinum, and subcutaneous emphysema. Prevented by using lung-protective ventilation strategies.</dd>

<dt><strong>Bronchodilator</strong></dt>
<dd>A medication that relaxes bronchial smooth muscle and widens the airway lumen. Categories include short-acting beta-2 agonists (e.g., albuterol), long-acting beta-2 agonists (e.g., salmeterol), and anticholinergics (e.g., ipratropium).</dd>

<dt><strong>Bronchoscopy</strong></dt>
<dd>A diagnostic or therapeutic procedure in which a flexible or rigid scope is inserted into the tracheobronchial tree. Used for airway inspection, biopsy, foreign body removal, and lavage.</dd>
</dl>

<h2>C</h2>
<dl>
<dt><strong>Capnography</strong></dt>
<dd>Continuous monitoring of end-tidal CO2 (PETCO2) via infrared spectroscopy. Normal PETCO2 is 35-45 mmHg. Used to verify endotracheal tube placement, monitor ventilation adequacy, and detect circuit disconnections.</dd>

<dt><strong>Compliance (Lung)</strong></dt>
<dd>A measure of lung distensibility expressed as the change in volume per unit change in pressure (mL/cmH2O). Normal static compliance is 60-100 mL/cmH2O. Decreased in ARDS, pulmonary fibrosis, and pneumonia.</dd>

<dt><strong>CPAP (Continuous Positive Airway Pressure)</strong></dt>
<dd>The application of a constant positive pressure to the airways throughout the respiratory cycle in a spontaneously breathing patient. Used to treat obstructive sleep apnea and to improve oxygenation by recruiting collapsed alveoli.</dd>

<dt><strong>Cuff Pressure</strong></dt>
<dd>The pressure within an endotracheal or tracheostomy tube cuff. Should be maintained at 20-25 cmH2O (or 20-30 cmH2O per some references) to prevent aspiration while avoiding tracheal mucosal ischemia.</dd>
</dl>

<h2>D-F</h2>
<dl>
<dt><strong>Dead Space (VD)</strong></dt>
<dd>The volume of inspired gas that does not participate in gas exchange. Anatomic dead space is approximately 1 mL/lb of ideal body weight. Physiologic dead space includes anatomic plus alveolar dead space.</dd>

<dt><strong>FiO2 (Fraction of Inspired Oxygen)</strong></dt>
<dd>The concentration of oxygen in the inspired gas mixture, expressed as a decimal (0.21-1.0). Room air FiO2 is 0.21 (21%). Titrated to maintain adequate oxygenation while minimizing oxygen toxicity.</dd>

<dt><strong>Flow-Volume Loop</strong></dt>
<dd>A graphical representation of airflow versus lung volume during forced inspiration and expiration. Used to identify obstructive, restrictive, and upper airway obstruction patterns on pulmonary function testing.</dd>
</dl>

<h2>H-M</h2>
<dl>
<dt><strong>Hemodynamic Monitoring</strong></dt>
<dd>The measurement of cardiovascular pressures and flows using invasive catheters (e.g., arterial line, pulmonary artery catheter). Key values include CVP, PAP, PCWP, cardiac output, and SVR.</dd>

<dt><strong>Incentive Spirometry (IS)</strong></dt>
<dd>A lung expansion technique in which the patient takes slow, deep, sustained breaths using a visual feedback device. Used postoperatively to prevent atelectasis. Goal is to achieve and sustain maximal inspiratory capacity.</dd>

<dt><strong>Metabolic Acidosis</strong></dt>
<dd>A condition in which arterial pH falls below 7.35 due to excess acid production, acid ingestion, or bicarbonate loss. Characterized by low pH, low HCO3, and respiratory compensation via hyperventilation (decreased PaCO2).</dd>

<dt><strong>Metabolic Alkalosis</strong></dt>
<dd>A condition in which arterial pH rises above 7.45 due to excess bicarbonate retention or hydrogen ion loss. Common causes include prolonged vomiting, nasogastric suctioning, and diuretic use.</dd>
</dl>

<h2>O-P</h2>
<dl>
<dt><strong>Oxygen Toxicity</strong></dt>
<dd>Lung injury resulting from prolonged exposure to high concentrations of oxygen. FiO2 greater than 0.60 for extended periods can cause absorption atelectasis, tracheobronchitis, and diffuse alveolar damage.</dd>

<dt><strong>PaCO2 (Partial Pressure of Carbon Dioxide in Arterial Blood)</strong></dt>
<dd>The measure of CO2 dissolved in arterial blood. Normal range is 35-45 mmHg. Reflects the adequacy of alveolar ventilation. Elevated in hypoventilation; decreased in hyperventilation.</dd>

<dt><strong>PaO2 (Partial Pressure of Oxygen in Arterial Blood)</strong></dt>
<dd>The measure of oxygen dissolved in arterial blood. Normal range is 80-100 mmHg on room air. Values below 60 mmHg indicate hypoxemia and the need for supplemental oxygen.</dd>

<dt><strong>PEEP (Positive End-Expiratory Pressure)</strong></dt>
<dd>Positive pressure maintained in the airways at the end of expiration during mechanical ventilation. Used to recruit collapsed alveoli, improve oxygenation, and increase functional residual capacity (FRC). Typical range is 5-20 cmH2O.</dd>

<dt><strong>Pulse Oximetry (SpO2)</strong></dt>
<dd>A noninvasive method of monitoring peripheral oxygen saturation using a sensor placed on the finger, toe, or earlobe. Normal SpO2 is 95-100%. Measures the ratio of oxyhemoglobin to total hemoglobin using light absorption.</dd>
</dl>

<h2>R-S</h2>
<dl>
<dt><strong>Respiratory Acidosis</strong></dt>
<dd>A condition in which arterial pH drops below 7.35 due to CO2 retention (PaCO2 > 45 mmHg). Caused by hypoventilation from CNS depression, neuromuscular disease, or severe airway obstruction.</dd>

<dt><strong>Respiratory Alkalosis</strong></dt>
<dd>A condition in which arterial pH rises above 7.45 due to excessive CO2 elimination (PaCO2 < 35 mmHg). Caused by hyperventilation from anxiety, pain, hypoxemia, or mechanical over-ventilation.</dd>

<dt><strong>SIMV (Synchronized Intermittent Mandatory Ventilation)</strong></dt>
<dd>A ventilator mode that delivers a set number of mandatory breaths synchronized with the patient's inspiratory effort. The patient may breathe spontaneously between mandatory breaths, often with pressure support.</dd>

<dt><strong>Suctioning</strong></dt>
<dd>The removal of secretions from the airway using negative pressure. Open suctioning requires disconnecting the ventilator; closed (in-line) suctioning does not. Suction pressure for adults should not exceed -150 mmHg, and each pass should be limited to 10-15 seconds.</dd>
</dl>

<h2>T-V</h2>
<dl>
<dt><strong>Tidal Volume (VT)</strong></dt>
<dd>The volume of gas inhaled or exhaled during a normal breath. Normal VT is approximately 500 mL (6-8 mL/kg ideal body weight). In lung-protective ventilation, VT is targeted at 4-8 mL/kg IBW.</dd>

<dt><strong>Ventilator-Associated Pneumonia (VAP)</strong></dt>
<dd>A hospital-acquired pneumonia that develops 48 hours or more after endotracheal intubation. Prevention strategies include head-of-bed elevation, oral care with chlorhexidine, sedation vacations, and daily spontaneous breathing trials.</dd>

<dt><strong>Ventilator Weaning</strong></dt>
<dd>The process of gradually reducing ventilatory support as the patient assumes more of the work of breathing. Readiness criteria include resolution of the underlying disease, adequate oxygenation (PaO2/FiO2 > 150), hemodynamic stability, and ability to initiate spontaneous breaths.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Study Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/topics/mechanical-ventilation">Mechanical Ventilation Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 2. NPS GLOSSARY
  // ============================================================
  {
    slug: 'nps-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC NPS Exam Glossary',
    description:
      'Key terms and definitions for the NBRC Neonatal/Pediatric Specialty (NPS) exam. Covers neonatal respiratory care, pediatric ventilation, and critical care terminology.',
    division: 'nps',
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC NPS Exam Glossary</h1>
<p>Essential terminology for the Neonatal/Pediatric Specialty (NPS) exam. This glossary covers neonatal and pediatric respiratory care concepts, equipment, and clinical conditions tested on the NBRC NPS exam.</p>

<h2>A</h2>
<dl>
<dt><strong>Apgar Score</strong></dt>
<dd>A rapid assessment of newborn condition at 1 and 5 minutes after birth, scoring 0-2 in five categories: Appearance (color), Pulse, Grimace (reflex irritability), Activity (muscle tone), and Respiration. Maximum score is 10; scores below 7 may indicate need for resuscitation.</dd>

<dt><strong>Apnea of Prematurity</strong></dt>
<dd>Cessation of breathing for 20 seconds or longer, or a shorter pause accompanied by bradycardia, cyanosis, or oxygen desaturation, in an infant born before 37 weeks gestation. Managed with caffeine citrate, CPAP, and tactile stimulation.</dd>

<dt><strong>APRV (Airway Pressure Release Ventilation)</strong></dt>
<dd>A pressure-controlled, time-cycled mode that applies a high continuous positive airway pressure (P-high) with intermittent brief releases to a lower pressure (P-low) to facilitate CO2 removal. Used in pediatric ARDS as a lung-protective strategy.</dd>
</dl>

<h2>B</h2>
<dl>
<dt><strong>Bronchiolitis</strong></dt>
<dd>An acute lower respiratory tract infection common in infants, most frequently caused by respiratory syncytial virus (RSV). Characterized by wheezing, tachypnea, and respiratory distress. Treatment is primarily supportive with oxygen, hydration, and nasal suctioning.</dd>

<dt><strong>Bronchopulmonary Dysplasia (BPD)</strong></dt>
<dd>A chronic lung disease of prematurity defined as the need for supplemental oxygen at 36 weeks postmenstrual age. Results from lung immaturity, oxygen toxicity, and ventilator-induced lung injury. Managed with low FiO2, diuretics, and gentle ventilation strategies.</dd>
</dl>

<h2>C</h2>
<dl>
<dt><strong>Caffeine Citrate</strong></dt>
<dd>A methylxanthine medication used to treat apnea of prematurity by stimulating the central respiratory drive. Loading dose is 20 mg/kg IV; maintenance dose is 5-10 mg/kg/day.</dd>

<dt><strong>Congenital Diaphragmatic Hernia (CDH)</strong></dt>
<dd>A birth defect in which abdominal organs herniate through a defect in the diaphragm into the thoracic cavity, causing pulmonary hypoplasia. Requires gentle ventilation (avoid bag-mask ventilation), surgical repair, and sometimes ECMO.</dd>

<dt><strong>Continuous Positive Airway Pressure (CPAP)</strong></dt>
<dd>A constant distending pressure applied to the airways of a spontaneously breathing neonate via nasal prongs, nasal mask, or nasopharyngeal tube. Used to maintain FRC, prevent alveolar collapse, and reduce work of breathing in premature infants.</dd>

<dt><strong>Croup (Laryngotracheobronchitis)</strong></dt>
<dd>An upper airway infection causing subglottic edema and a characteristic barking cough, inspiratory stridor, and hoarseness. Treated with cool mist, racemic epinephrine nebulization, and systemic corticosteroids (dexamethasone).</dd>
</dl>

<h2>E-G</h2>
<dl>
<dt><strong>ECMO (Extracorporeal Membrane Oxygenation)</strong></dt>
<dd>A form of prolonged cardiopulmonary bypass that provides gas exchange outside the body. Used in neonates with reversible respiratory failure (e.g., meconium aspiration, CDH, persistent pulmonary hypertension) who fail conventional therapy.</dd>

<dt><strong>Epiglottitis</strong></dt>
<dd>A rapidly progressive bacterial infection (classically Haemophilus influenzae type b) causing supraglottic swelling. Presents with drooling, dysphagia, distress, and the "tripod" position. Medical emergency requiring immediate airway management.</dd>

<dt><strong>Gestational Age Assessment</strong></dt>
<dd>Determination of fetal maturity using tools such as the Ballard score, which evaluates neuromuscular and physical characteristics. Critical for predicting respiratory complications and guiding treatment decisions.</dd>
</dl>

<h2>H-L</h2>
<dl>
<dt><strong>HFOV (High-Frequency Oscillatory Ventilation)</strong></dt>
<dd>A ventilation strategy using very small tidal volumes at very high rates (180-900 breaths/min or 3-15 Hz). Maintains lung volume with a constant mean airway pressure while oscillating gas. Used as a rescue strategy in neonatal and pediatric ARDS.</dd>

<dt><strong>Inhaled Nitric Oxide (iNO)</strong></dt>
<dd>A selective pulmonary vasodilator administered at 5-20 ppm to treat persistent pulmonary hypertension of the newborn (PPHN). Reduces pulmonary vascular resistance without affecting systemic blood pressure. Monitor methemoglobin levels.</dd>

<dt><strong>Lecithin/Sphingomyelin (L/S) Ratio</strong></dt>
<dd>An amniotic fluid test used to assess fetal lung maturity. An L/S ratio of 2:1 or greater indicates mature surfactant production and a low risk of respiratory distress syndrome.</dd>
</dl>

<h2>M-N</h2>
<dl>
<dt><strong>Meconium Aspiration Syndrome (MAS)</strong></dt>
<dd>A respiratory condition caused by aspiration of meconium-stained amniotic fluid, leading to airway obstruction, chemical pneumonitis, and surfactant inactivation. May require mechanical ventilation, surfactant replacement, or ECMO in severe cases.</dd>

<dt><strong>Nasal Cannula (High-Flow)</strong></dt>
<dd>Heated, humidified oxygen delivered at flows above standard nasal cannula rates (typically >2 L/min in neonates). Provides some positive distending pressure, reduces work of breathing, and is used as an alternative to nasal CPAP.</dd>

<dt><strong>Neonatal Resuscitation</strong></dt>
<dd>The systematic approach to stabilizing a newborn at birth following the Neonatal Resuscitation Program (NRP) algorithm: warmth, dry, stimulate, clear airway, assess breathing and heart rate, provide positive-pressure ventilation if needed, followed by chest compressions and epinephrine if indicated.</dd>

<dt><strong>Nitric Oxide (NO)</strong></dt>
<dd>See Inhaled Nitric Oxide (iNO). A gaseous signaling molecule that causes smooth muscle relaxation in pulmonary vasculature when inhaled, improving ventilation-perfusion matching.</dd>
</dl>

<h2>P-R</h2>
<dl>
<dt><strong>Patent Ductus Arteriosus (PDA)</strong></dt>
<dd>Failure of the ductus arteriosus to close after birth, resulting in a left-to-right shunt. Common in premature infants. May be treated with indomethacin or ibuprofen (prostaglandin inhibitors) or surgical ligation.</dd>

<dt><strong>Persistent Pulmonary Hypertension of the Newborn (PPHN)</strong></dt>
<dd>A condition in which pulmonary vascular resistance remains elevated after birth, causing right-to-left shunting through the foramen ovale and ductus arteriosus. Treated with oxygen, alkalosis, iNO, and ECMO as rescue therapy.</dd>

<dt><strong>Respiratory Distress Syndrome (RDS)</strong></dt>
<dd>A condition of premature infants caused by surfactant deficiency, leading to alveolar collapse, decreased compliance, and hypoxemia. Chest X-ray shows a ground-glass appearance with air bronchograms. Treated with exogenous surfactant replacement and CPAP or mechanical ventilation.</dd>

<dt><strong>Retinopathy of Prematurity (ROP)</strong></dt>
<dd>Abnormal blood vessel development in the retina of premature infants, associated with excessive oxygen exposure. Monitored with regular ophthalmologic exams. Prevented by maintaining SpO2 within targeted ranges (typically 88-95% in preterm infants).</dd>
</dl>

<h2>S-T</h2>
<dl>
<dt><strong>Silverman-Andersen Score</strong></dt>
<dd>A neonatal respiratory distress scoring system evaluating chest-wall movement, intercostal retractions, xiphoid retractions, nasal flaring, and expiratory grunting. Scored 0-2 per category; higher scores (maximum 10) indicate greater distress.</dd>

<dt><strong>Surfactant</strong></dt>
<dd>A mixture of lipids and proteins produced by type II alveolar cells that reduces surface tension in the alveoli, preventing collapse at end-expiration. Exogenous surfactant (e.g., beractant, calfactant, poractant alfa) is administered via endotracheal tube to treat RDS.</dd>

<dt><strong>Transient Tachypnea of the Newborn (TTN)</strong></dt>
<dd>A self-limiting respiratory condition caused by delayed clearance of fetal lung fluid. Common after cesarean delivery. Presents with tachypnea, mild retractions, and chest X-ray showing perihilar streaking and fluid in the fissures. Resolves within 24-72 hours.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NBRC NPS Exam Study Guide</a></li>
<li><a href="/cheat-sheets/neonatal-ventilation">Neonatal Ventilation Cheat Sheet</a></li>
<li><a href="/topics/neonatal-respiratory-care">Neonatal Respiratory Care Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 3. ACCS GLOSSARY
  // ============================================================
  {
    slug: 'accs-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC ACCS Exam Glossary',
    description:
      'Essential terms and definitions for the NBRC Adult Critical Care Specialty (ACCS) exam. Covers hemodynamics, ventilator management, pharmacology, and critical care concepts.',
    division: 'accs',
    readTime: '11 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC ACCS Exam Glossary</h1>
<p>Key terminology for the Adult Critical Care Specialty (ACCS) exam. This glossary focuses on hemodynamic monitoring, advanced ventilator management, critical care pharmacology, and pathophysiology tested on the NBRC ACCS exam.</p>

<h2>A</h2>
<dl>
<dt><strong>ARDS (Acute Respiratory Distress Syndrome)</strong></dt>
<dd>A severe form of acute lung injury characterized by bilateral pulmonary infiltrates, PaO2/FiO2 ratio less than or equal to 300, and non-cardiogenic pulmonary edema. Managed with lung-protective ventilation (VT 4-8 mL/kg IBW), high PEEP, prone positioning, and neuromuscular blockade in severe cases.</dd>

<dt><strong>APRV (Airway Pressure Release Ventilation)</strong></dt>
<dd>A pressure-controlled, inverse-ratio mode that maintains a high continuous airway pressure (P-high) with periodic brief releases to a lower pressure (P-low). Allows spontaneous breathing at both pressure levels. Used in ARDS to improve alveolar recruitment.</dd>

<dt><strong>Auto-PEEP (Intrinsic PEEP)</strong></dt>
<dd>Unintentional positive end-expiratory pressure caused by incomplete exhalation before the next breath. Common in patients with obstructive lung disease or high respiratory rates. Detected by end-expiratory hold maneuver. Corrected by reducing rate, increasing expiratory time, or applying external PEEP.</dd>
</dl>

<h2>C</h2>
<dl>
<dt><strong>Cardiac Index (CI)</strong></dt>
<dd>Cardiac output normalized to body surface area (CO/BSA). Normal range is 2.5-4.0 L/min/m2. A CI below 2.2 L/min/m2 indicates cardiogenic shock.</dd>

<dt><strong>Cardiac Output (CO)</strong></dt>
<dd>The volume of blood ejected by the heart per minute, calculated as stroke volume times heart rate (SV x HR). Normal CO is 4-8 L/min. Measured via thermodilution using a pulmonary artery catheter or noninvasive methods.</dd>

<dt><strong>Central Venous Pressure (CVP)</strong></dt>
<dd>The pressure measured in the superior vena cava or right atrium, reflecting right ventricular preload and intravascular volume status. Normal range is 2-6 mmHg. Elevated in right heart failure, fluid overload, and cardiac tamponade.</dd>

<dt><strong>Compliance (Static vs. Dynamic)</strong></dt>
<dd>Static compliance (Cst) = VT / (Pplat - PEEP), reflecting lung and chest wall elastic properties. Dynamic compliance (Cdyn) = VT / (PIP - PEEP), reflecting both elastic and resistive properties. A decrease in Cdyn with normal Cst suggests increased airway resistance.</dd>
</dl>

<h2>D-F</h2>
<dl>
<dt><strong>Driving Pressure</strong></dt>
<dd>The difference between plateau pressure and PEEP (Pplat - PEEP). A key predictor of mortality in ARDS; keeping driving pressure below 15 cmH2O is associated with improved outcomes.</dd>

<dt><strong>Fick Equation</strong></dt>
<dd>A method for calculating cardiac output: CO = VO2 / (CaO2 - CvO2) x 10, where VO2 is oxygen consumption, CaO2 is arterial oxygen content, and CvO2 is mixed venous oxygen content.</dd>

<dt><strong>FiO2 (Fraction of Inspired Oxygen)</strong></dt>
<dd>The concentration of oxygen in inspired gas, expressed as a decimal (0.21-1.0). In critically ill patients, titrated to maintain PaO2 60-80 mmHg or SpO2 88-95% (ARDS targets). Goal is to use the lowest effective FiO2 to prevent oxygen toxicity.</dd>
</dl>

<h2>H-I</h2>
<dl>
<dt><strong>Hemodynamic Monitoring</strong></dt>
<dd>Continuous or intermittent measurement of cardiovascular parameters using invasive lines (arterial catheter, CVP, pulmonary artery catheter) or noninvasive methods (echocardiography, pulse contour analysis). Essential for guiding fluid resuscitation and vasoactive medication titration.</dd>

<dt><strong>High-Flow Nasal Cannula (HFNC)</strong></dt>
<dd>Heated, humidified oxygen delivered at flows up to 60 L/min in adults via large-bore nasal prongs. Provides a small amount of positive airway pressure, reduces dead space, and improves oxygenation. Used as an alternative to noninvasive ventilation in acute hypoxemic respiratory failure.</dd>

<dt><strong>Intra-Aortic Balloon Pump (IABP)</strong></dt>
<dd>A mechanical circulatory support device placed in the descending aorta. Inflates during diastole to augment coronary perfusion and deflates during systole to reduce afterload. Used in cardiogenic shock and as a bridge to definitive treatment.</dd>
</dl>

<h2>L-N</h2>
<dl>
<dt><strong>Lactate</strong></dt>
<dd>A byproduct of anaerobic metabolism. Elevated serum lactate (>2 mmol/L) indicates tissue hypoperfusion and is a marker of shock severity. Serial lactate trending guides resuscitation adequacy. Lactate clearance of greater than 10% per 2 hours is a favorable prognostic indicator.</dd>

<dt><strong>Lung-Protective Ventilation</strong></dt>
<dd>A ventilation strategy using low tidal volumes (4-8 mL/kg IBW), adequate PEEP, plateau pressure less than 30 cmH2O, and driving pressure less than 15 cmH2O. Based on the ARDSNet protocol and demonstrated to reduce mortality in ARDS.</dd>

<dt><strong>Neuromuscular Blockade (NMB)</strong></dt>
<dd>Pharmacologic paralysis using agents such as cisatracurium or rocuronium. Used in severe ARDS (PaO2/FiO2 < 150) to eliminate patient-ventilator dyssynchrony and reduce oxygen consumption. Requires concurrent sedation and train-of-four monitoring.</dd>

<dt><strong>Noninvasive Ventilation (NIV)</strong></dt>
<dd>Positive-pressure ventilation delivered via face mask, nasal mask, or helmet without endotracheal intubation. Includes CPAP and BiPAP. First-line treatment for COPD exacerbations and cardiogenic pulmonary edema. Contraindicated in patients unable to protect their airway.</dd>
</dl>

<h2>P</h2>
<dl>
<dt><strong>PaCO2 (Partial Pressure of Arterial Carbon Dioxide)</strong></dt>
<dd>Normal range is 35-45 mmHg. In ARDS, permissive hypercapnia (allowing PaCO2 to rise above 45 mmHg) may be tolerated to maintain lung-protective tidal volumes, provided pH remains above 7.20.</dd>

<dt><strong>PaO2/FiO2 Ratio (P/F Ratio)</strong></dt>
<dd>An index of oxygenation efficiency. Normal is approximately 500. ARDS severity is classified as mild (200-300), moderate (100-200), and severe (<100) based on the Berlin definition.</dd>

<dt><strong>PCWP (Pulmonary Capillary Wedge Pressure)</strong></dt>
<dd>The pressure measured by inflating the balloon on a pulmonary artery catheter to occlude a small pulmonary artery branch. Reflects left atrial pressure and left ventricular preload. Normal range is 6-12 mmHg. Elevated in left heart failure and fluid overload.</dd>

<dt><strong>Plateau Pressure (Pplat)</strong></dt>
<dd>The airway pressure measured during an inspiratory hold maneuver, reflecting alveolar pressure. Should be kept below 30 cmH2O in mechanically ventilated patients to minimize barotrauma and ventilator-induced lung injury.</dd>

<dt><strong>Prone Positioning</strong></dt>
<dd>Placing an ARDS patient face-down for 12-16 hours per day to improve oxygenation by redistributing perfusion to better-ventilated anterior lung regions. Indicated for moderate-to-severe ARDS (PaO2/FiO2 < 150). The PROSEVA trial demonstrated a mortality benefit.</dd>

<dt><strong>PVR (Pulmonary Vascular Resistance)</strong></dt>
<dd>The resistance to blood flow through the pulmonary vasculature, calculated as (mean PAP - PCWP) / CO x 80. Normal range is 100-250 dynes/sec/cm5. Elevated in pulmonary hypertension, hypoxic vasoconstriction, and pulmonary embolism.</dd>
</dl>

<h2>S</h2>
<dl>
<dt><strong>Sepsis</strong></dt>
<dd>Life-threatening organ dysfunction caused by a dysregulated host response to infection, defined as a suspected infection with an acute increase in SOFA score of 2 or more. Septic shock includes the need for vasopressors to maintain MAP greater than or equal to 65 mmHg and a lactate greater than 2 mmol/L despite adequate fluid resuscitation.</dd>

<dt><strong>SpO2 (Peripheral Oxygen Saturation)</strong></dt>
<dd>Oxygen saturation measured noninvasively via pulse oximetry. Normal is 95-100%. In ARDS, target SpO2 is typically 88-95% per ARDSNet guidelines. Unreliable in the presence of carbon monoxide poisoning, methemoglobinemia, severe anemia, or poor perfusion.</dd>

<dt><strong>SVR (Systemic Vascular Resistance)</strong></dt>
<dd>The resistance to blood flow in the systemic circulation, calculated as (MAP - CVP) / CO x 80. Normal range is 800-1200 dynes/sec/cm5. Elevated in hypovolemic and cardiogenic shock; decreased in septic and neurogenic shock.</dd>

<dt><strong>SvO2 (Mixed Venous Oxygen Saturation)</strong></dt>
<dd>The oxygen saturation of blood in the pulmonary artery, measured from the distal port of a pulmonary artery catheter. Normal range is 60-80%. Values below 60% indicate increased oxygen extraction due to decreased delivery or increased consumption.</dd>
</dl>

<h2>V</h2>
<dl>
<dt><strong>Vasopressors</strong></dt>
<dd>Medications that cause vasoconstriction to increase blood pressure. Norepinephrine is the first-line vasopressor in septic shock. Vasopressin and epinephrine are second-line agents. Phenylephrine is a pure alpha-agonist used when tachyarrhythmias limit norepinephrine use.</dd>

<dt><strong>Ventilator-Induced Lung Injury (VILI)</strong></dt>
<dd>Lung damage caused by mechanical ventilation, including volutrauma (overdistension), barotrauma (excessive pressure), atelectrauma (cyclic opening and closing of alveoli), and biotrauma (release of inflammatory mediators). Prevented by lung-protective ventilation strategies.</dd>

<dt><strong>Volume Capnography</strong></dt>
<dd>The graphical display of expired CO2 plotted against exhaled volume (rather than time). Provides quantification of anatomic dead space, alveolar dead space, and alveolar ventilation. Used in critical care to optimize ventilator settings and assess V/Q matching.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-accs-exam-guide">NBRC ACCS Exam Study Guide</a></li>
<li><a href="/cheat-sheets/hemodynamics">Hemodynamics Cheat Sheet</a></li>
<li><a href="/topics/ards-management">ARDS Management Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 4. SDS GLOSSARY
  // ============================================================
  {
    slug: 'sds-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC SDS Exam Glossary',
    description:
      'Comprehensive glossary of sleep disorder and polysomnography terms for the NBRC Sleep Disorder Specialty (SDS) exam. Covers sleep staging, scoring, and treatment modalities.',
    division: 'sds',
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC SDS Exam Glossary</h1>
<p>Essential terminology for the Sleep Disorder Specialty (SDS) exam. This glossary covers polysomnography, sleep staging, respiratory events, and PAP therapy concepts tested on the NBRC SDS exam.</p>

<h2>A</h2>
<dl>
<dt><strong>AHI (Apnea-Hypopnea Index)</strong></dt>
<dd>The number of apnea and hypopnea events per hour of sleep, used to classify obstructive sleep apnea severity. Normal: AHI < 5; Mild: 5-15; Moderate: 15-30; Severe: > 30 events per hour.</dd>

<dt><strong>Apnea</strong></dt>
<dd>Cessation of airflow for at least 10 seconds in adults. Classified as obstructive (continued respiratory effort against a closed airway), central (absence of respiratory effort), or mixed (begins as central and becomes obstructive).</dd>

<dt><strong>Arousal</strong></dt>
<dd>An abrupt shift in EEG frequency lasting at least 3 seconds with at least 10 seconds of preceding stable sleep. In REM sleep, an accompanying increase in chin EMG activity is required. Arousals fragment sleep and reduce its restorative quality.</dd>

<dt><strong>Auto-Titrating PAP (APAP)</strong></dt>
<dd>A positive airway pressure device that automatically adjusts pressure breath-by-breath based on airflow patterns, detecting and responding to flow limitation, snoring, and apneas. Used as an alternative to fixed CPAP when in-laboratory titration is not available.</dd>
</dl>

<h2>B-C</h2>
<dl>
<dt><strong>BiPAP/BPAP (Bilevel Positive Airway Pressure)</strong></dt>
<dd>A device that delivers two levels of pressure: a higher pressure during inspiration (IPAP) and a lower pressure during expiration (EPAP). Used when patients cannot tolerate high fixed CPAP pressures or when ventilatory support is needed for hypoventilation syndromes.</dd>

<dt><strong>Bruxism (Sleep-Related)</strong></dt>
<dd>Repetitive jaw-muscle activity characterized by grinding or clenching of teeth during sleep. Identified on PSG by rhythmic masticatory muscle activity (RMMA) on chin EMG. May cause dental damage, jaw pain, and sleep disruption.</dd>

<dt><strong>Cheyne-Stokes Respiration</strong></dt>
<dd>A pattern of periodic breathing with crescendo-decrescendo changes in tidal volume alternating with central apneas. Associated with congestive heart failure and stroke. Treated with adaptive servo-ventilation (ASV) or supplemental oxygen.</dd>

<dt><strong>CPAP (Continuous Positive Airway Pressure)</strong></dt>
<dd>A device that delivers a single constant pressure to the upper airway via nasal or oronasal mask, acting as a pneumatic splint to prevent airway collapse during sleep. First-line treatment for moderate-to-severe obstructive sleep apnea.</dd>
</dl>

<h2>E</h2>
<dl>
<dt><strong>EEG (Electroencephalogram)</strong></dt>
<dd>Recording of brain electrical activity using scalp electrodes. In polysomnography, EEG channels (typically F4-M1, C4-M1, O2-M1 with contralateral backups) are used for sleep staging. Key waveforms include alpha (8-13 Hz), theta (4-7 Hz), delta (<4 Hz), sleep spindles, and K-complexes.</dd>

<dt><strong>EMG (Electromyogram)</strong></dt>
<dd>Recording of muscle electrical activity. In PSG, chin (submental) EMG is used for sleep staging (REM atonia detection), and bilateral anterior tibialis EMG is used to detect periodic limb movements during sleep.</dd>

<dt><strong>EOG (Electrooculogram)</strong></dt>
<dd>Recording of eye movements using electrodes placed near the outer canthus of each eye. Conjugate, irregular, sharply peaked eye movements indicate REM sleep. Slow, rolling eye movements characterize the transition from wakefulness to N1 sleep.</dd>

<dt><strong>Epworth Sleepiness Scale (ESS)</strong></dt>
<dd>A self-administered questionnaire that rates the likelihood of dozing in eight everyday situations on a scale of 0-3. Total scores range from 0-24. A score greater than 10 suggests excessive daytime sleepiness.</dd>
</dl>

<h2>H-K</h2>
<dl>
<dt><strong>Hypopnea</strong></dt>
<dd>A reduction in airflow of at least 30% for at least 10 seconds, associated with a 3% or greater oxygen desaturation or an EEG arousal (AASM recommended criteria). An alternative scoring rule requires a 4% desaturation (acceptable criteria).</dd>

<dt><strong>Hypnogram</strong></dt>
<dd>A graphical summary of sleep architecture across the recording period, showing the progression through wake, N1, N2, N3, and REM stages over time. Used to identify sleep fragmentation, REM distribution, and overall sleep quality.</dd>

<dt><strong>K-Complex</strong></dt>
<dd>A high-amplitude, biphasic EEG waveform consisting of an initial sharp negative deflection followed by a slower positive component. Duration is at least 0.5 seconds. A defining feature of N2 sleep, and can be elicited by external stimuli.</dd>
</dl>

<h2>M-O</h2>
<dl>
<dt><strong>MSLT (Multiple Sleep Latency Test)</strong></dt>
<dd>An objective daytime test consisting of four or five nap opportunities at 2-hour intervals. Measures mean sleep latency and the presence of sleep-onset REM periods (SOREMPs). Mean sleep latency less than 8 minutes with 2 or more SOREMPs is diagnostic of narcolepsy.</dd>

<dt><strong>MWT (Maintenance of Wakefulness Test)</strong></dt>
<dd>An objective test measuring the ability to stay awake in a dark, quiet environment over four 40-minute trials. Used to assess treatment efficacy and fitness for duty (e.g., commercial drivers). Mean sleep latency less than 8 minutes indicates pathologic sleepiness.</dd>

<dt><strong>Narcolepsy</strong></dt>
<dd>A chronic neurological disorder characterized by excessive daytime sleepiness, cataplexy (sudden loss of muscle tone triggered by emotion), sleep paralysis, and hypnagogic hallucinations. Type 1 involves cataplexy and/or low CSF hypocretin-1; Type 2 does not.</dd>

<dt><strong>Obstructive Sleep Apnea (OSA)</strong></dt>
<dd>A sleep-related breathing disorder characterized by repetitive upper airway collapse during sleep despite ongoing respiratory effort. Risk factors include obesity, male sex, advanced age, and craniofacial abnormalities. Diagnosed by AHI of 5 or greater on PSG with symptoms, or AHI of 15 or greater regardless of symptoms.</dd>

<dt><strong>ODI (Oxygen Desaturation Index)</strong></dt>
<dd>The number of oxygen desaturation events (typically defined as a 3% or 4% drop from baseline SpO2) per hour of sleep. Correlates with AHI and is used as an additional metric of sleep-disordered breathing severity.</dd>
</dl>

<h2>P-R</h2>
<dl>
<dt><strong>Periodic Limb Movement Disorder (PLMD)</strong></dt>
<dd>Repetitive, stereotyped limb movements during sleep (typically dorsiflexion of the ankle, extension of the great toe) occurring in sequences of four or more movements, 5-90 seconds apart. PLMI (periodic limb movement index) greater than 15/hr in adults is considered clinically significant when associated with sleep disruption.</dd>

<dt><strong>Polysomnography (PSG)</strong></dt>
<dd>The gold-standard diagnostic study for sleep disorders. Records EEG, EOG, EMG (chin and legs), airflow (nasal pressure transducer and oronasal thermal sensor), respiratory effort (thoracic and abdominal RIP belts), SpO2, ECG, body position, and snoring.</dd>

<dt><strong>RDI (Respiratory Disturbance Index)</strong></dt>
<dd>The total number of apneas, hypopneas, and respiratory effort-related arousals (RERAs) per hour of sleep. Always greater than or equal to the AHI because it includes RERAs.</dd>

<dt><strong>REM Sleep (Rapid Eye Movement)</strong></dt>
<dd>A sleep stage characterized by low-amplitude, mixed-frequency EEG activity, rapid conjugate eye movements, and skeletal muscle atonia. Most dreaming occurs during REM. Scored when all three criteria are present: low chin EMG tone, rapid eye movements, and characteristic EEG.</dd>

<dt><strong>RERA (Respiratory Effort-Related Arousal)</strong></dt>
<dd>A sequence of breaths with increasing respiratory effort (detected by esophageal manometry or flattening of the nasal pressure waveform) that does not meet criteria for apnea or hypopnea but leads to an EEG arousal.</dd>
</dl>

<h2>S</h2>
<dl>
<dt><strong>Sleep Architecture</strong></dt>
<dd>The cyclical organization of sleep stages across the night. A normal adult sleep cycle lasts approximately 90-110 minutes and includes N1, N2, N3, and REM stages. N3 (slow-wave sleep) predominates in the first third of the night; REM predominates in the last third.</dd>

<dt><strong>Sleep Efficiency</strong></dt>
<dd>The percentage of time spent asleep relative to total time in bed (total sleep time / time in bed x 100). Normal sleep efficiency is greater than 85%. Low sleep efficiency indicates significant sleep fragmentation or prolonged sleep latency.</dd>

<dt><strong>Sleep Spindle</strong></dt>
<dd>A burst of oscillatory EEG activity at 11-16 Hz (most commonly 12-14 Hz) lasting at least 0.5 seconds. Generated by thalamocortical circuits. A hallmark of N2 sleep, along with K-complexes.</dd>

<dt><strong>Split-Night Study</strong></dt>
<dd>A PSG in which the first portion is used for diagnosis (at least 2 hours with AHI >= 40, or AHI >= 20 with clinical justification) and the second portion is used for CPAP titration. Reduces the need for two separate overnight studies.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">NBRC SDS Exam Study Guide</a></li>
<li><a href="/cheat-sheets/sleep-staging">Sleep Staging Cheat Sheet</a></li>
<li><a href="/topics/polysomnography">Polysomnography Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 5. CPFT GLOSSARY
  // ============================================================
  {
    slug: 'cpft-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC CPFT Exam Glossary',
    description:
      'Glossary of pulmonary function testing terms for the NBRC Certified Pulmonary Function Technologist (CPFT) exam. Covers spirometry, lung volumes, diffusion capacity, and quality control.',
    division: 'cpft',
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC CPFT Exam Glossary</h1>
<p>Key terminology for the Certified Pulmonary Function Technologist (CPFT) exam. This glossary covers spirometry, lung volume measurements, diffusion capacity, quality control, and related clinical concepts.</p>

<h2>A-B</h2>
<dl>
<dt><strong>Acceptability Criteria (Spirometry)</strong></dt>
<dd>ATS/ERS standards for a valid spirometry maneuver: good start (back-extrapolated volume < 5% of FVC or 0.150 L, whichever is greater), no cough in the first second, no early termination, no glottis closure, no leak, and no obstruction of the mouthpiece.</dd>

<dt><strong>Body Plethysmography</strong></dt>
<dd>A method for measuring lung volumes using an airtight chamber (body box) based on Boyle's law. The patient pants against a closed shutter while pressure and volume changes are recorded. Measures thoracic gas volume (TGV), airway resistance (Raw), and specific airway conductance (sGaw).</dd>

<dt><strong>Bronchial Challenge Testing</strong></dt>
<dd>A provocative test to detect airway hyperresponsiveness using inhaled methacholine or mannitol. A positive test is defined as a 20% or greater decline in FEV1 (PC20) at a methacholine concentration of 16 mg/mL or less. Used in the diagnosis of asthma.</dd>

<dt><strong>Bronchodilator Response</strong></dt>
<dd>A significant improvement in spirometry following inhalation of a short-acting bronchodilator (typically albuterol). A positive response is defined as an increase in FEV1 or FVC of at least 200 mL and 12% from baseline (ATS/ERS 2005 criteria) or 10% of predicted (ATS/ERS 2022 criteria).</dd>
</dl>

<h2>C-D</h2>
<dl>
<dt><strong>Calibration (Spirometer)</strong></dt>
<dd>Verification of spirometer accuracy using a 3-liter calibration syringe. Must be performed daily and be accurate within plus or minus 3.5% (plus or minus 0.105 L for a 3-L syringe). Linearity checks at multiple flow rates are recommended.</dd>

<dt><strong>Closing Volume (CV)</strong></dt>
<dd>The lung volume at which small airway closure begins during a slow expiration from TLC. Measured by the single-breath nitrogen washout test. Increased in early small-airway disease, aging, and smoking-related changes.</dd>

<dt><strong>DLCO (Diffusing Capacity of the Lungs for Carbon Monoxide)</strong></dt>
<dd>A measure of the lung's ability to transfer gas across the alveolar-capillary membrane. The single-breath method (DLCO-SB) is most common. The patient inhales a gas mixture containing 0.3% CO and 10% helium, holds for 10 seconds, then exhales. Normal values are typically 20-30 mL/min/mmHg. Decreased in emphysema, pulmonary fibrosis, and pulmonary vascular disease.</dd>

<dt><strong>Diffusion Impairment</strong></dt>
<dd>Reduced gas transfer across the alveolar-capillary membrane, indicated by low DLCO. Causes include thickened alveolar-capillary membrane (fibrosis), reduced surface area (emphysema), reduced pulmonary capillary blood volume (pulmonary hypertension), and anemia.</dd>
</dl>

<h2>E-F</h2>
<dl>
<dt><strong>ERV (Expiratory Reserve Volume)</strong></dt>
<dd>The maximum volume of gas that can be exhaled from end-tidal expiratory level (FRC). Reduced in obesity, pregnancy, and restrictive lung diseases.</dd>

<dt><strong>FEF25-75% (Forced Expiratory Flow 25-75%)</strong></dt>
<dd>The average forced expiratory flow during the middle half of the FVC maneuver. Sometimes called the maximal mid-expiratory flow (MMEF). May be reduced in early small-airway disease but has high variability and is not used as a primary diagnostic criterion.</dd>

<dt><strong>FEV1 (Forced Expiratory Volume in 1 Second)</strong></dt>
<dd>The volume of gas forcefully exhaled in the first second of an FVC maneuver. The most reproducible and clinically useful spirometric measurement. Used to classify severity of airway obstruction: mild (>70% predicted), moderate (60-69%), moderately severe (50-59%), severe (35-49%), very severe (<35%).</dd>

<dt><strong>FEV1/FVC Ratio</strong></dt>
<dd>The proportion of the forced vital capacity exhaled in the first second. Used to distinguish obstructive from restrictive patterns. A ratio below the lower limit of normal (LLN) or below 0.70 (GOLD criteria for COPD) indicates airway obstruction.</dd>

<dt><strong>FRC (Functional Residual Capacity)</strong></dt>
<dd>The volume of gas remaining in the lungs at end-tidal expiration (ERV + RV). Measured by body plethysmography, nitrogen washout, or helium dilution. Elevated in air trapping (COPD); decreased in restrictive diseases.</dd>

<dt><strong>FVC (Forced Vital Capacity)</strong></dt>
<dd>The maximum volume of gas that can be forcefully exhaled after a maximal inhalation. Reduced in both restrictive and obstructive diseases (due to air trapping). A valid FVC requires at least 6 seconds of expiration in adults or a clear plateau.</dd>
</dl>

<h2>H-L</h2>
<dl>
<dt><strong>Helium Dilution</strong></dt>
<dd>A closed-circuit method for measuring FRC in which the patient rebreathes a known concentration of helium until equilibrium is reached. Based on the conservation of mass (C1V1 = C2V2). Underestimates lung volume in patients with air trapping because helium does not reach poorly ventilated areas.</dd>

<dt><strong>Infection Control (PFT Lab)</strong></dt>
<dd>Protocols to prevent disease transmission in the PFT laboratory. Includes use of disposable in-line filters (minimum volume of 100 mL), sterilization of reusable equipment, hand hygiene, and screening patients for active infections.</dd>

<dt><strong>LLN (Lower Limit of Normal)</strong></dt>
<dd>The statistically defined lower boundary of the normal range, typically the 5th percentile of a healthy reference population (z-score of -1.645). Preferred over fixed cutoffs (e.g., FEV1/FVC < 0.70) for interpreting PFT results because it accounts for age, sex, height, and race/ethnicity.</dd>
</dl>

<h2>M-N</h2>
<dl>
<dt><strong>Maximal Inspiratory Pressure (MIP/PImax)</strong></dt>
<dd>The greatest negative pressure generated during a maximal inspiratory effort against a closed airway from residual volume. Reflects inspiratory muscle strength. Normal is more negative than -80 cmH2O in males and -60 cmH2O in females.</dd>

<dt><strong>Maximal Expiratory Pressure (MEP/PEmax)</strong></dt>
<dd>The greatest positive pressure generated during a maximal expiratory effort against a closed airway from total lung capacity. Reflects expiratory muscle strength. Normal is greater than 80 cmH2O in males and 60 cmH2O in females.</dd>

<dt><strong>MVV (Maximal Voluntary Ventilation)</strong></dt>
<dd>The maximum volume of gas a patient can breathe over one minute by breathing as rapidly and deeply as possible, typically measured over 12-15 seconds and extrapolated. Normal MVV is approximately 35 x FEV1. Reduced in obstructive diseases and neuromuscular disorders.</dd>

<dt><strong>Nitrogen Washout (Multiple-Breath)</strong></dt>
<dd>An open-circuit method for measuring FRC in which the patient breathes 100% oxygen while exhaled nitrogen is measured until the concentration drops below 1.5%. Based on the dilution principle. Like helium dilution, may underestimate FRC in severe air trapping.</dd>
</dl>

<h2>R-T</h2>
<dl>
<dt><strong>Repeatability Criteria</strong></dt>
<dd>ATS/ERS standards requiring the two largest FEV1 and FVC values to be within 0.150 L of each other (within 0.100 L if FVC < 1.0 L). At least three acceptable maneuvers are needed; up to eight may be performed to achieve repeatability.</dd>

<dt><strong>Residual Volume (RV)</strong></dt>
<dd>The volume of gas remaining in the lungs after a maximal expiration. Cannot be measured by spirometry; requires body plethysmography, helium dilution, or nitrogen washout. Elevated in air trapping and hyperinflation.</dd>

<dt><strong>Reversibility Testing</strong></dt>
<dd>See Bronchodilator Response. Assesses the degree of airflow limitation that is responsive to bronchodilator therapy, helping to differentiate asthma from COPD.</dd>

<dt><strong>TLC (Total Lung Capacity)</strong></dt>
<dd>The total volume of gas in the lungs after a maximal inspiration (sum of all four lung volumes: TV + IRV + ERV + RV). Increased in hyperinflation (COPD); decreased in restrictive diseases (pulmonary fibrosis, chest wall deformity).</dd>

<dt><strong>Tidal Volume (TV or VT)</strong></dt>
<dd>The volume of gas inhaled or exhaled during normal breathing at rest. Approximately 500 mL in a healthy adult. Measured during quiet breathing before spirometric maneuvers.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">NBRC CPFT Exam Study Guide</a></li>
<li><a href="/cheat-sheets/spirometry-interpretation">Spirometry Interpretation Cheat Sheet</a></li>
<li><a href="/topics/pulmonary-function-testing">Pulmonary Function Testing Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 6. RPFT GLOSSARY
  // ============================================================
  {
    slug: 'rpft-glossary',
    type: 'GLOSSARY' as const,
    title: 'NBRC RPFT Exam Glossary',
    description:
      'Advanced pulmonary function testing glossary for the NBRC Registered Pulmonary Function Technologist (RPFT) exam. Covers advanced testing modalities, exercise testing, and quality assurance.',
    division: 'rpft',
    readTime: '11 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>NBRC RPFT Exam Glossary</h1>
<p>Advanced terminology for the Registered Pulmonary Function Technologist (RPFT) exam. Builds upon CPFT knowledge with advanced testing methods, exercise physiology, quality assurance, and research-level PFT concepts.</p>

<h2>A-B</h2>
<dl>
<dt><strong>Alveolar Ventilation (VA)</strong></dt>
<dd>The volume of fresh gas reaching the alveoli per minute, calculated as (VT - VD) x respiratory rate. Normal is approximately 4-5 L/min. The primary determinant of PaCO2 levels.</dd>

<dt><strong>Anaerobic Threshold (AT)</strong></dt>
<dd>The exercise intensity at which anaerobic metabolism begins to supplement aerobic energy production, marked by an increase in lactate levels. Identified during cardiopulmonary exercise testing by the V-slope method (inflection in VCO2 vs. VO2) or ventilatory equivalents method. Normally occurs at 40-60% of predicted VO2max.</dd>

<dt><strong>Body Plethysmography</strong></dt>
<dd>A technique for measuring thoracic gas volume (TGV/FRCpleth), specific airway resistance (sRaw), and specific airway conductance (sGaw) in a sealed chamber using Boyle's law. Provides more accurate lung volume measurements than gas dilution methods, especially in patients with air trapping.</dd>

<dt><strong>Breathing Reserve</strong></dt>
<dd>The difference between maximal voluntary ventilation (MVV) and peak exercise ventilation, expressed as a percentage: (MVV - VEmax) / MVV x 100. Normal is greater than 20%. A breathing reserve below 15% suggests ventilatory limitation to exercise.</dd>
</dl>

<h2>C-D</h2>
<dl>
<dt><strong>Cardiopulmonary Exercise Testing (CPET)</strong></dt>
<dd>An integrative assessment of the cardiovascular, pulmonary, and musculoskeletal systems during incremental exercise on a cycle ergometer or treadmill. Measures VO2, VCO2, ventilation, heart rate, blood pressure, SpO2, ECG, and arterial blood gases. Used to evaluate unexplained dyspnea, preoperative risk, disability, and exercise prescription.</dd>

<dt><strong>CO2 Single-Breath Test</strong></dt>
<dd>A method using the single-breath CO2 washout curve to assess ventilation distribution and dead space. Phase III slope analysis provides information about ventilation inhomogeneity in the lung periphery.</dd>

<dt><strong>Dead Space Ventilation (VD/VT Ratio)</strong></dt>
<dd>The fraction of each tidal volume that does not participate in gas exchange. Calculated using the Bohr equation: VD/VT = (PaCO2 - PECO2) / PaCO2. Normal at rest is 0.20-0.40. An abnormal increase during exercise (>0.30) suggests pulmonary vascular disease.</dd>

<dt><strong>DLCO Adjustment</strong></dt>
<dd>Corrections applied to measured DLCO to account for hemoglobin concentration, carboxyhemoglobin level, and altitude. Anemia causes falsely low DLCO (adjusted upward); polycythemia causes falsely high DLCO (adjusted downward). The standard equation adjusts for hemoglobin using published correction factors.</dd>

<dt><strong>DLCO (Diffusing Capacity of the Lungs for Carbon Monoxide)</strong></dt>
<dd>Measures the lung's ability to transfer gas from alveoli to pulmonary capillary blood. The single-breath method requires the patient to inhale to TLC from RV, hold for 10 seconds, and then exhale. Results are reported in mL/min/mmHg (or mmol/min/kPa in SI units). Decreased in emphysema, pulmonary fibrosis, pulmonary hypertension, and anemia.</dd>
</dl>

<h2>E-F</h2>
<dl>
<dt><strong>Esophageal Pressure (Pes)</strong></dt>
<dd>Pressure measured by a balloon catheter placed in the lower third of the esophagus, used as a surrogate for pleural pressure. Required for measuring transpulmonary pressure, work of breathing, and lung compliance in research and advanced clinical settings.</dd>

<dt><strong>Exhaled Nitric Oxide (FeNO)</strong></dt>
<dd>A noninvasive biomarker of eosinophilic airway inflammation measured during a sustained exhalation at a flow rate of 50 mL/s. Normal is less than 25 ppb in adults. Elevated in eosinophilic asthma; used to guide anti-inflammatory therapy and predict steroid responsiveness.</dd>

<dt><strong>FEV1 (Forced Expiratory Volume in 1 Second)</strong></dt>
<dd>The volume of air forcefully exhaled in the first second. The most clinically important spirometric measurement. Severity grading (ATS/ERS): mild (>70% predicted), moderate (60-69%), moderately severe (50-59%), severe (35-49%), very severe (<35%).</dd>

<dt><strong>Flow-Volume Loop Interpretation</strong></dt>
<dd>Analysis of the shape and values of the maximal expiratory and inspiratory flow-volume curves. Characteristic patterns include concavity of the expiratory limb (obstruction), reduced overall size (restriction), and fixed or variable upper airway obstruction (truncation of inspiratory and/or expiratory limbs).</dd>

<dt><strong>FRC (Functional Residual Capacity)</strong></dt>
<dd>The volume of gas in the lungs at end-tidal expiration. Measured by plethysmography (FRCpleth), helium dilution (FRCHe), or nitrogen washout (FRCN2). Plethysmographic values exceed dilution values when significant air trapping is present; the difference indicates trapped gas volume.</dd>
</dl>

<h2>G-I</h2>
<dl>
<dt><strong>GLI (Global Lung Function Initiative) Reference Equations</strong></dt>
<dd>Multi-ethnic, all-age reference equations endorsed by ATS/ERS for interpreting spirometry and DLCO. Use z-scores and LLN rather than fixed cutoffs, accounting for age, height, sex, and race/ethnicity. Preferred over older reference sets (Hankinson, Crapo, Knudson).</dd>

<dt><strong>Impulse Oscillometry (IOS)</strong></dt>
<dd>A noninvasive technique that measures respiratory system impedance (resistance and reactance) using sound waves applied at the mouth during tidal breathing. Requires minimal patient cooperation. Provides information about central (R20) and peripheral (R5-R20) airway resistance.</dd>

<dt><strong>Inspiratory Capacity (IC)</strong></dt>
<dd>The maximum volume that can be inspired from end-tidal expiratory level (VT + IRV). Measured during quiet breathing before spirometry. A decrease in IC during exercise (dynamic hyperinflation) is a major cause of exertional dyspnea in COPD.</dd>
</dl>

<h2>L-O</h2>
<dl>
<dt><strong>Lung Clearance Index (LCI)</strong></dt>
<dd>A measure of ventilation inhomogeneity derived from the multiple-breath washout test. Defined as the cumulative expired volume needed to clear a tracer gas (N2 or SF6) to 1/40th of the starting concentration, divided by FRC. Elevated values indicate maldistribution of ventilation. Sensitive to early cystic fibrosis lung disease.</dd>

<dt><strong>Maximal Oxygen Consumption (VO2max)</strong></dt>
<dd>The highest rate of oxygen uptake achieved during maximal exercise, reflecting the integrated function of the cardiovascular, pulmonary, and musculoskeletal systems. Measured during CPET. Normal values are approximately 20-40 mL/kg/min, depending on age, sex, and fitness.</dd>

<dt><strong>Oxygen Pulse (O2 Pulse)</strong></dt>
<dd>VO2 divided by heart rate, representing the amount of oxygen consumed per heartbeat. A surrogate for stroke volume during exercise. Normal peak O2 pulse is approximately 80% predicted. A plateau or decrease suggests cardiovascular limitation.</dd>
</dl>

<h2>P-R</h2>
<dl>
<dt><strong>P0.1 (Airway Occlusion Pressure)</strong></dt>
<dd>The negative pressure generated 100 milliseconds after the onset of an occluded inspiration, reflecting neuromuscular respiratory drive. Normal is -1 to -2 cmH2O. Elevated (more negative) in increased respiratory drive; reduced in neuromuscular weakness or sedation.</dd>

<dt><strong>Peak Expiratory Flow (PEF)</strong></dt>
<dd>The maximum flow rate achieved during a forced expiratory maneuver. Effort-dependent and reflects large-airway function. Used for asthma monitoring (peak flow meters) but not for formal PFT interpretation due to high variability.</dd>

<dt><strong>Quality Assurance (QA) in PFT</strong></dt>
<dd>Systematic processes ensuring accuracy and reliability of PFT results. Includes daily calibration verification, biological controls (testing known healthy subjects periodically), equipment maintenance logs, technician competency assessment, and adherence to ATS/ERS standards.</dd>

<dt><strong>Residual Volume (RV)</strong></dt>
<dd>The volume of gas remaining after maximal exhalation. Requires lung volume measurement (plethysmography or gas dilution) for determination. RV = FRC - ERV, or RV = TLC - VC. Elevated RV and RV/TLC ratio indicate air trapping.</dd>
</dl>

<h2>S-V</h2>
<dl>
<dt><strong>Shunt Fraction (Qs/Qt)</strong></dt>
<dd>The proportion of cardiac output that passes through the lungs without participating in gas exchange. Calculated using the shunt equation: Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2). Normal is less than 5%. Elevated in intrapulmonary shunting (atelectasis, ARDS) and intracardiac shunts.</dd>

<dt><strong>Six-Minute Walk Test (6MWT)</strong></dt>
<dd>A submaximal exercise test measuring the distance walked in 6 minutes on a flat, hard surface. Monitors SpO2, heart rate, and dyspnea (Borg scale) before, during, and after. Used to assess functional capacity, disease severity, and treatment response in COPD, pulmonary fibrosis, and pulmonary hypertension.</dd>

<dt><strong>Slow Vital Capacity (SVC)</strong></dt>
<dd>The maximum volume exhaled slowly from TLC to RV (or inhaled slowly from RV to TLC). In obstructive disease, SVC may be larger than FVC due to less dynamic airway compression. A significant difference suggests air trapping.</dd>

<dt><strong>Transpulmonary Pressure (PL)</strong></dt>
<dd>The difference between alveolar pressure and pleural pressure (Palv - Ppl), representing the distending pressure across the lung. Measured using esophageal manometry as a surrogate for pleural pressure. Used in research and in guiding PEEP titration in ARDS.</dd>

<dt><strong>VE/VCO2 Slope</strong></dt>
<dd>The relationship between minute ventilation and CO2 output during exercise. Normal slope is less than 30. Elevated values indicate inefficient ventilation (increased dead space) and are a powerful prognostic marker in heart failure and pulmonary hypertension.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-rpft-exam-guide">NBRC RPFT Exam Study Guide</a></li>
<li><a href="/cheat-sheets/pft-interpretation">PFT Interpretation Cheat Sheet</a></li>
<li><a href="/topics/exercise-testing">Exercise Testing Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 7. VENTILATOR GLOSSARY
  // ============================================================
  {
    slug: 'ventilator-glossary',
    type: 'GLOSSARY' as const,
    title: 'Ventilator Terminology Glossary',
    description:
      'Complete glossary of mechanical ventilation terminology for respiratory therapy students. Covers ventilator modes, settings, waveforms, and troubleshooting concepts.',
    division: null,
    readTime: '11 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>Ventilator Terminology Glossary</h1>
<p>A comprehensive glossary of mechanical ventilation terms essential for respiratory therapy exams and clinical practice. Covers ventilator modes, settings, waveforms, alarms, and troubleshooting.</p>

<h2>A</h2>
<dl>
<dt><strong>AC (Assist-Control) Ventilation</strong></dt>
<dd>A ventilator mode in which every breath (whether machine-initiated or patient-triggered) receives full ventilator support. The set rate guarantees a minimum number of breaths; patient-triggered breaths above the set rate also receive the full set tidal volume or pressure.</dd>

<dt><strong>APRV (Airway Pressure Release Ventilation)</strong></dt>
<dd>A pressure-controlled, time-cycled mode that maintains a sustained high pressure (P-high) and periodically releases to a low pressure (P-low) for brief durations (T-low). The patient can breathe spontaneously at both pressure levels. Used as a lung-recruitment strategy in ARDS.</dd>

<dt><strong>Auto-PEEP (Intrinsic PEEP)</strong></dt>
<dd>Unintentional positive pressure trapped in the alveoli at end-expiration due to incomplete exhalation. Caused by high minute ventilation, short expiratory time, or high airway resistance. Detected by performing an end-expiratory hold. Increases work of breathing and can impair venous return.</dd>

<dt><strong>Asynchrony (Patient-Ventilator)</strong></dt>
<dd>A mismatch between the patient's respiratory effort and ventilator delivery. Types include trigger asynchrony (missed or auto-triggered breaths), flow asynchrony (inadequate flow delivery), and cycle asynchrony (premature or delayed cycling). Increases work of breathing and may prolong mechanical ventilation.</dd>
</dl>

<h2>B-C</h2>
<dl>
<dt><strong>Bias Flow</strong></dt>
<dd>A continuous flow of gas through the ventilator circuit during the expiratory phase, used to maintain circuit pressurization and improve trigger responsiveness. Typically set at 2-20 L/min depending on the ventilator model.</dd>

<dt><strong>Compliance (Static and Dynamic)</strong></dt>
<dd>Static compliance (Cst) = VT / (Pplat - total PEEP). Normal is 60-100 mL/cmH2O. Dynamic compliance (Cdyn) = VT / (PIP - total PEEP). A decrease in both suggests reduced lung compliance (ARDS, pneumonia). A decrease in Cdyn with normal Cst suggests increased airway resistance.</dd>

<dt><strong>CPAP (Continuous Positive Airway Pressure)</strong></dt>
<dd>A spontaneous breathing mode in which a constant positive pressure is maintained throughout the respiratory cycle. The ventilator provides no mandatory breaths; the patient determines rate, tidal volume, and inspiratory time. Used during weaning and for treating obstructive sleep apnea.</dd>

<dt><strong>Cycling</strong></dt>
<dd>The mechanism that terminates the inspiratory phase and initiates expiration. Methods include volume cycling (breath ends when set volume is delivered), time cycling (breath ends after set inspiratory time), flow cycling (breath ends when inspiratory flow drops to a percentage of peak flow, as in PSV), and pressure cycling (backup safety mechanism).</dd>
</dl>

<h2>D-F</h2>
<dl>
<dt><strong>Dead Space (Mechanical)</strong></dt>
<dd>The volume of the ventilator circuit between the Y-connector and the patient's airway that is rebreathed. Adding devices (e.g., HMEs, CO2 detectors, in-line suction catheters) increases mechanical dead space. Can be significant in neonatal and pediatric patients.</dd>

<dt><strong>FiO2 (Fraction of Inspired Oxygen)</strong></dt>
<dd>The concentration of oxygen delivered by the ventilator, adjustable from 0.21 to 1.0. Titrated to maintain target oxygenation (typically PaO2 60-80 mmHg or SpO2 88-95%). Goal is to use the lowest effective FiO2 to minimize oxygen toxicity risk.</dd>

<dt><strong>Flow Pattern</strong></dt>
<dd>The shape of the inspiratory flow waveform. Options include square (constant flow), decelerating ramp, sine wave, and accelerating. Decelerating flow patterns (used in pressure-targeted modes) generally improve gas distribution and may reduce peak airway pressures.</dd>

<dt><strong>Flow Triggering</strong></dt>
<dd>A method of breath initiation in which the ventilator senses a change in circuit flow caused by the patient's inspiratory effort. Typically more sensitive and requires less work than pressure triggering. Set 1-3 L/min below the bias flow.</dd>
</dl>

<h2>H-I</h2>
<dl>
<dt><strong>HFOV (High-Frequency Oscillatory Ventilation)</strong></dt>
<dd>A ventilatory strategy using very small tidal volumes (1-3 mL/kg) at frequencies of 3-15 Hz (180-900 breaths/min). Gas exchange occurs through augmented diffusion rather than bulk flow. Mean airway pressure provides lung recruitment while oscillations facilitate CO2 removal.</dd>

<dt><strong>Humidification</strong></dt>
<dd>The addition of heat and moisture to inspired gases to prevent airway drying and mucosal damage. Achieved via heated humidifiers (active) or heat-moisture exchangers (HMEs, passive). Target: 33-44 mg H2O/L at 34-41 degrees Celsius at the airway.</dd>

<dt><strong>I:E Ratio</strong></dt>
<dd>The ratio of inspiratory time to expiratory time. Normal is 1:2 to 1:3. Inverse ratios (e.g., 2:1) may be used in ARDS to improve oxygenation by increasing mean airway pressure, but increase the risk of auto-PEEP and hemodynamic compromise.</dd>

<dt><strong>Inspiratory Time (Ti)</strong></dt>
<dd>The duration of the inspiratory phase. In volume control, determined by tidal volume and flow rate. In pressure control, set directly. Affects I:E ratio, mean airway pressure, and patient comfort.</dd>
</dl>

<h2>M-P</h2>
<dl>
<dt><strong>Mean Airway Pressure (Paw)</strong></dt>
<dd>The average pressure in the airway throughout the entire respiratory cycle. Correlates with oxygenation and alveolar recruitment. Increased by raising PEEP, prolonging inspiratory time, increasing tidal volume, or increasing respiratory rate.</dd>

<dt><strong>Minute Ventilation (VE)</strong></dt>
<dd>The total volume of gas exhaled per minute, calculated as VT x respiratory rate. Normal is 5-10 L/min. The primary determinant of CO2 elimination. Monitored closely during mechanical ventilation to assess ventilation adequacy.</dd>

<dt><strong>PEEP (Positive End-Expiratory Pressure)</strong></dt>
<dd>Positive pressure maintained in the airway at end-expiration. Recruits collapsed alveoli, increases FRC, improves oxygenation, and prevents cyclic atelectasis. Typical range is 5-20 cmH2O. Higher PEEP may impair venous return and reduce cardiac output.</dd>

<dt><strong>PIP (Peak Inspiratory Pressure)</strong></dt>
<dd>The highest pressure reached during the inspiratory phase. Reflects both elastic and resistive properties of the respiratory system. Elevated PIP with normal Pplat indicates increased airway resistance (secretions, bronchospasm, kinked tube). Elevated PIP with elevated Pplat indicates decreased compliance (ARDS, pneumothorax).</dd>

<dt><strong>Plateau Pressure (Pplat)</strong></dt>
<dd>Airway pressure measured during an inspiratory hold when flow is zero, reflecting alveolar distending pressure. Should be maintained below 30 cmH2O to prevent ventilator-induced lung injury. Only measurable in volume-controlled modes with an inspiratory pause.</dd>

<dt><strong>Pressure Support Ventilation (PSV)</strong></dt>
<dd>A spontaneous breathing mode in which each patient-triggered breath receives a clinician-set level of inspiratory pressure augmentation. The breath is flow-cycled (terminates when flow drops to 25% of peak). The patient controls rate, tidal volume (indirectly), and inspiratory time. Used for weaning and to overcome circuit and ETT resistance.</dd>
</dl>

<h2>R-S</h2>
<dl>
<dt><strong>Recruitment Maneuver</strong></dt>
<dd>A transient application of sustained high airway pressure (e.g., CPAP 30-40 cmH2O for 30-40 seconds) to open collapsed alveoli. Used in ARDS to improve oxygenation before setting adequate PEEP. Risk of barotrauma and hemodynamic instability.</dd>

<dt><strong>Rise Time</strong></dt>
<dd>The time required for the ventilator to reach the set inspiratory pressure in pressure-targeted modes. A faster rise time delivers flow more rapidly and may improve comfort in patients with high inspiratory demand. A slower rise time reduces peak flow and is better for patients with low demand.</dd>

<dt><strong>SIMV (Synchronized Intermittent Mandatory Ventilation)</strong></dt>
<dd>A mode delivering a set number of mandatory breaths synchronized with the patient's inspiratory effort. Between mandatory breaths, the patient may breathe spontaneously (typically with pressure support). Historically used for weaning but less favored than PSV or spontaneous breathing trials.</dd>

<dt><strong>Spontaneous Breathing Trial (SBT)</strong></dt>
<dd>A weaning assessment in which ventilator support is reduced to minimal levels (T-piece, CPAP 5 cmH2O, or PSV 5-8 cmH2O) for 30-120 minutes. Successful trial criteria include stable respiratory rate, tidal volume, heart rate, SpO2, and absence of distress signs.</dd>
</dl>

<h2>T-V</h2>
<dl>
<dt><strong>Tidal Volume (VT)</strong></dt>
<dd>The volume of gas delivered with each mechanical breath. In lung-protective ventilation, set at 4-8 mL/kg ideal body weight (IBW). IBW is calculated from height: male = 50 + 2.3(height in inches - 60); female = 45.5 + 2.3(height in inches - 60).</dd>

<dt><strong>Trigger Sensitivity</strong></dt>
<dd>The level of patient effort required to initiate a ventilator breath. Set too sensitive: auto-triggering (ventilator delivers unrequested breaths). Set too insensitive: increased work of breathing and missed triggers. Pressure trigger: typically -1 to -2 cmH2O. Flow trigger: typically 1-3 L/min.</dd>

<dt><strong>Ventilator-Induced Lung Injury (VILI)</strong></dt>
<dd>Damage to lung tissue caused by mechanical ventilation. Mechanisms include volutrauma (overdistension from excessive tidal volume), barotrauma (excessive pressure), atelectrauma (shear forces from cyclic opening and collapse), and biotrauma (systemic inflammatory response from local lung injury).</dd>

<dt><strong>Volume-Targeted Pressure Control</strong></dt>
<dd>A dual-control mode (e.g., PRVC, VC+, AutoFlow) that delivers pressure-targeted breaths but automatically adjusts the pressure level breath-to-breath to achieve a set target tidal volume. Combines the flow characteristics of pressure ventilation with the volume guarantee of volume ventilation.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Study Guide</a></li>
<li><a href="/cheat-sheets/ventilator-settings">Ventilator Settings Cheat Sheet</a></li>
<li><a href="/topics/mechanical-ventilation">Mechanical Ventilation Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 8. ABG GLOSSARY
  // ============================================================
  {
    slug: 'abg-glossary',
    type: 'GLOSSARY' as const,
    title: 'ABG Interpretation Glossary',
    description:
      'Glossary of arterial blood gas (ABG) interpretation terms for respiratory therapy students. Covers acid-base balance, oxygenation indices, and clinical applications.',
    division: null,
    readTime: '9 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>ABG Interpretation Glossary</h1>
<p>Essential terminology for understanding and interpreting arterial blood gases. This glossary covers acid-base physiology, oxygenation parameters, and clinical correlations critical for all NBRC exams.</p>

<h2>A</h2>
<dl>
<dt><strong>A-a Gradient (Alveolar-Arterial Oxygen Gradient)</strong></dt>
<dd>The difference between alveolar oxygen tension (PAO2) and arterial oxygen tension (PaO2). Calculated using the alveolar gas equation: PAO2 = FiO2(Pb - PH2O) - PaCO2/0.8. Normal A-a gradient = age/4 + 4 (approximately 5-15 mmHg in young adults). An elevated A-a gradient indicates V/Q mismatch, shunt, or diffusion impairment.</dd>

<dt><strong>Acidemia</strong></dt>
<dd>An arterial blood pH below 7.35. May result from respiratory acidosis (PaCO2 > 45 mmHg), metabolic acidosis (HCO3 < 22 mEq/L), or a combination of both.</dd>

<dt><strong>Alkalemia</strong></dt>
<dd>An arterial blood pH above 7.45. May result from respiratory alkalosis (PaCO2 < 35 mmHg), metabolic alkalosis (HCO3 > 26 mEq/L), or a combination of both.</dd>

<dt><strong>Anion Gap</strong></dt>
<dd>The difference between measured cations and measured anions: AG = Na - (Cl + HCO3). Normal is 8-12 mEq/L. An elevated anion gap indicates accumulation of unmeasured anions (e.g., lactic acid, ketoacids, uremic toxins, toxic alcohols). Mnemonic: MUDPILES (Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates).</dd>
</dl>

<h2>B</h2>
<dl>
<dt><strong>Base Excess/Deficit (BE)</strong></dt>
<dd>The amount of acid or base needed to titrate one liter of blood to a pH of 7.40 at a PaCO2 of 40 mmHg and temperature of 37 degrees Celsius. Normal range is -2 to +2 mEq/L. A negative value (base deficit) indicates metabolic acidosis; a positive value indicates metabolic alkalosis.</dd>

<dt><strong>Bicarbonate (HCO3-)</strong></dt>
<dd>The metabolic component of acid-base balance. Normal arterial HCO3 is 22-26 mEq/L. Regulated by the kidneys through reabsorption, regeneration, and excretion. Decreased in metabolic acidosis; elevated in metabolic alkalosis or as compensation for chronic respiratory acidosis.</dd>

<dt><strong>Buffer Systems</strong></dt>
<dd>Chemical systems that resist changes in pH. The primary buffers include the bicarbonate-carbonic acid system (most important in ECF), hemoglobin, phosphate, and protein buffers. The Henderson-Hasselbalch equation describes the bicarbonate buffer: pH = 6.1 + log(HCO3 / 0.03 x PaCO2).</dd>
</dl>

<h2>C</h2>
<dl>
<dt><strong>CaO2 (Arterial Oxygen Content)</strong></dt>
<dd>The total oxygen carried in arterial blood, both bound to hemoglobin and dissolved. CaO2 = (Hb x 1.34 x SaO2) + (PaO2 x 0.003). Normal is 16-20 mL O2/dL. The dissolved component (PaO2 x 0.003) is normally very small but becomes significant during hyperbaric oxygen therapy.</dd>

<dt><strong>Compensation</strong></dt>
<dd>The physiologic response of one organ system to counteract an acid-base disturbance caused by the other. Respiratory compensation (changing PaCO2) occurs within minutes to hours. Renal compensation (adjusting HCO3) takes 24-72 hours for full effect. Compensation moves pH toward normal but does not fully correct it (except in chronic respiratory alkalosis).</dd>

<dt><strong>Corrected Bicarbonate</strong></dt>
<dd>An estimated value used to determine if a metabolic component is present in addition to a respiratory disturbance. For acute respiratory changes, HCO3 changes approximately 1 mEq/L for every 10 mmHg change in PaCO2. For chronic changes, HCO3 changes approximately 3.5 mEq/L (acidosis) or 5 mEq/L (alkalosis) per 10 mmHg change in PaCO2.</dd>
</dl>

<h2>H-M</h2>
<dl>
<dt><strong>Henderson-Hasselbalch Equation</strong></dt>
<dd>pH = 6.1 + log([HCO3-] / 0.03 x PaCO2). Describes the relationship between pH, bicarbonate, and dissolved CO2. The normal 20:1 ratio of HCO3 to dissolved CO2 maintains a pH of 7.40.</dd>

<dt><strong>Hypercapnia</strong></dt>
<dd>Elevated PaCO2 above 45 mmHg, indicating alveolar hypoventilation. Causes include CNS depression (sedation, brain injury), neuromuscular disease (myasthenia gravis, Guillain-Barre), chest wall abnormalities, and severe airway obstruction. Acute hypercapnia causes respiratory acidosis.</dd>

<dt><strong>Hypocapnia</strong></dt>
<dd>Reduced PaCO2 below 35 mmHg, indicating alveolar hyperventilation. Causes include anxiety, pain, hypoxemia-driven hyperventilation, pulmonary embolism, and mechanical over-ventilation. Acute hypocapnia causes respiratory alkalosis.</dd>

<dt><strong>Hypoxemia</strong></dt>
<dd>Abnormally low PaO2, classified as mild (60-79 mmHg), moderate (40-59 mmHg), or severe (<40 mmHg). Five mechanisms: low FiO2 (altitude), hypoventilation, V/Q mismatch, diffusion impairment, and right-to-left shunt. The first four respond to supplemental O2; shunt is refractory to oxygen therapy.</dd>

<dt><strong>Metabolic Acidosis</strong></dt>
<dd>Primary decrease in HCO3 (<22 mEq/L) with resultant pH <7.35. Classified by anion gap: elevated AG (lactic acidosis, DKA, renal failure, toxic ingestions) or normal AG/hyperchloremic (diarrhea, renal tubular acidosis, saline administration). Respiratory compensation: PaCO2 decreases approximately 1.2 mmHg per 1 mEq/L decrease in HCO3 (Winter's formula: expected PaCO2 = 1.5 x HCO3 + 8 plus or minus 2).</dd>

<dt><strong>Metabolic Alkalosis</strong></dt>
<dd>Primary increase in HCO3 (>26 mEq/L) with resultant pH >7.45. Common causes include prolonged vomiting or NG suctioning (loss of HCl), diuretic therapy, and excessive NaHCO3 administration. Respiratory compensation: PaCO2 increases approximately 0.7 mmHg per 1 mEq/L increase in HCO3.</dd>

<dt><strong>Mixed Acid-Base Disorder</strong></dt>
<dd>The simultaneous presence of two or more primary acid-base disturbances. Identified when the degree of compensation exceeds expected values (suggests an additional primary disorder). Examples: combined respiratory and metabolic acidosis in cardiac arrest; respiratory alkalosis with metabolic acidosis in salicylate poisoning.</dd>
</dl>

<h2>O-P</h2>
<dl>
<dt><strong>Oxyhemoglobin Dissociation Curve</strong></dt>
<dd>The sigmoidal relationship between PaO2 and hemoglobin oxygen saturation (SaO2). A right shift (decreased affinity, easier O2 unloading) occurs with increased temperature, PaCO2, 2,3-DPG, and hydrogen ions (decreased pH). A left shift (increased affinity, harder O2 unloading) occurs with the opposite conditions, carbon monoxide, and fetal hemoglobin.</dd>

<dt><strong>P/F Ratio (PaO2/FiO2)</strong></dt>
<dd>An index of oxygenation efficiency. Normal is approximately 400-500. A P/F ratio below 300 defines ARDS (mild 200-300, moderate 100-200, severe <100 per the Berlin definition). Used to classify severity of hypoxemia and guide clinical decisions.</dd>

<dt><strong>PaCO2 (Partial Pressure of Carbon Dioxide in Arterial Blood)</strong></dt>
<dd>The respiratory component of acid-base balance. Normal range is 35-45 mmHg. Directly reflects alveolar ventilation: inversely proportional to alveolar ventilation (doubling VA halves PaCO2). Measured directly by the blood gas analyzer using a Severinghaus electrode.</dd>

<dt><strong>PaO2 (Partial Pressure of Oxygen in Arterial Blood)</strong></dt>
<dd>The measure of dissolved oxygen in arterial blood. Normal is 80-100 mmHg on room air at sea level. Expected PaO2 decreases with age (estimated: PaO2 = 100 - age/3). Measured by a Clark (polarographic) electrode in the blood gas analyzer.</dd>

<dt><strong>pH</strong></dt>
<dd>The negative logarithm of the hydrogen ion concentration, reflecting the overall acid-base status of the blood. Normal arterial pH is 7.35-7.45, with 7.40 being ideal. Values below 6.8 or above 7.8 are generally incompatible with life.</dd>
</dl>

<h2>R-S</h2>
<dl>
<dt><strong>Respiratory Acidosis</strong></dt>
<dd>Primary increase in PaCO2 (>45 mmHg) with resultant pH <7.35, caused by alveolar hypoventilation. Acute: pH drops approximately 0.08 for every 10 mmHg rise in PaCO2; HCO3 rises approximately 1 mEq/L. Chronic: pH drops approximately 0.03 per 10 mmHg; HCO3 rises approximately 3.5 mEq/L (renal compensation).</dd>

<dt><strong>Respiratory Alkalosis</strong></dt>
<dd>Primary decrease in PaCO2 (<35 mmHg) with resultant pH >7.45, caused by alveolar hyperventilation. Acute: pH rises approximately 0.08 per 10 mmHg drop in PaCO2; HCO3 drops approximately 2 mEq/L. Chronic: pH nearly normalizes; HCO3 drops approximately 5 mEq/L per 10 mmHg (renal compensation).</dd>

<dt><strong>SaO2 (Arterial Oxygen Saturation)</strong></dt>
<dd>The percentage of hemoglobin binding sites occupied by oxygen in arterial blood, measured directly by co-oximetry. Normal is 95-100%. Differs from SpO2 (pulse oximetry estimate) in that co-oximetry can distinguish oxyhemoglobin from carboxyhemoglobin and methemoglobin.</dd>

<dt><strong>SpO2 (Peripheral Oxygen Saturation)</strong></dt>
<dd>An estimate of arterial oxygen saturation measured noninvasively by pulse oximetry using two wavelengths of light (660 nm red and 940 nm infrared). Normal is 95-100%. Limitations include inaccuracy with carboxyhemoglobin, methemoglobin, poor perfusion, motion artifact, and dark nail polish.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Study Guide</a></li>
<li><a href="/cheat-sheets/abg-interpretation">ABG Interpretation Cheat Sheet</a></li>
<li><a href="/topics/acid-base-balance">Acid-Base Balance Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 9. PFT GLOSSARY
  // ============================================================
  {
    slug: 'pft-glossary',
    type: 'GLOSSARY' as const,
    title: 'Pulmonary Function Testing Glossary',
    description:
      'Comprehensive glossary of pulmonary function testing (PFT) terminology for respiratory therapy students. Covers spirometry, lung volumes, diffusion capacity, and interpretation.',
    division: null,
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>Pulmonary Function Testing Glossary</h1>
<p>Key terminology for understanding pulmonary function tests, from basic spirometry to advanced lung volume and diffusion capacity measurements. Relevant for TMC, CPFT, and RPFT exams.</p>

<h2>A-B</h2>
<dl>
<dt><strong>Acceptability Criteria</strong></dt>
<dd>ATS/ERS standards that must be met for a spirometric maneuver to be considered valid. Requirements include a good start (back-extrapolated volume less than 5% of FVC or 150 mL), no artifacts during the maneuver (cough, glottis closure, leak), and adequate expiratory time (at least 6 seconds or a clear plateau).</dd>

<dt><strong>Airway Resistance (Raw)</strong></dt>
<dd>The resistance to airflow through the conducting airways, measured in cmH2O/L/sec using body plethysmography. Normal is 0.5-2.5 cmH2O/L/sec. Increased in asthma, COPD, and upper airway obstruction.</dd>

<dt><strong>Body Plethysmography</strong></dt>
<dd>An enclosed chamber measurement technique based on Boyle's law (P1V1 = P2V2) used to determine thoracic gas volume, airway resistance, and specific conductance. More accurate than gas dilution for measuring lung volumes, particularly in patients with air trapping.</dd>

<dt><strong>Bronchial Provocation Testing</strong></dt>
<dd>Tests designed to assess airway hyperreactivity by exposing the patient to progressively increasing doses of a bronchoconstricting agent (methacholine, histamine) or stimulus (exercise, cold air, mannitol). A 20% decline in FEV1 at a provocation concentration of 16 mg/mL or less (PC20) is a positive result.</dd>

<dt><strong>Bronchodilator Response</strong></dt>
<dd>Improvement in airflow following administration of a short-acting bronchodilator. Positive response: increase in FEV1 or FVC of 200 mL and 12% from baseline (ATS/ERS 2005) or 10% of predicted (ATS/ERS 2022). Tested using 4 puffs of albuterol (400 mcg) with repeat spirometry after 10-15 minutes.</dd>
</dl>

<h2>C-D</h2>
<dl>
<dt><strong>Calibration</strong></dt>
<dd>Verification of equipment accuracy using standardized references. Volume calibration uses a 3-liter syringe (accurate within 3.5%). Flow calibration verifies accuracy across the full range of expected flows. Performed daily before patient testing and after equipment servicing.</dd>

<dt><strong>Closing Volume</strong></dt>
<dd>The lung volume at which dependent airways begin to close during expiration, measured by the single-breath N2 washout test (phase IV onset). Increases with age and in early small-airway disease. When closing volume exceeds FRC, atelectasis occurs during normal tidal breathing.</dd>

<dt><strong>DLCO (Diffusing Capacity of the Lungs for Carbon Monoxide)</strong></dt>
<dd>A measurement of gas transfer efficiency across the alveolar-capillary membrane using the single-breath technique. The patient inspires a gas mixture (0.3% CO, 10% He, 21% O2, balance N2), holds for 10 seconds, then exhales. Normal is 20-30 mL/min/mmHg. Must be adjusted for hemoglobin, COHb, and altitude.</dd>

<dt><strong>Dynamic Compression</strong></dt>
<dd>The narrowing of intrathoracic airways during forced expiration when intrapleural pressure exceeds intraluminal pressure, creating an equal pressure point. Responsible for the effort-independent portion of the flow-volume loop. Exaggerated in emphysema due to loss of elastic recoil and radial traction.</dd>
</dl>

<h2>E-F</h2>
<dl>
<dt><strong>ERV (Expiratory Reserve Volume)</strong></dt>
<dd>The maximum volume of gas that can be exhaled from the end-tidal expiratory level. Approximately 1000-1200 mL in healthy adults. Reduced in obesity, ascites, and restrictive lung disease.</dd>

<dt><strong>FEF25-75% (Forced Expiratory Flow at 25-75% of FVC)</strong></dt>
<dd>The average flow rate during the middle half of a forced expiratory maneuver. Reflects small-airway function but has high variability (coefficient of variation up to 25%). Not recommended as a primary diagnostic parameter but may provide supportive information.</dd>

<dt><strong>FEV1 (Forced Expiratory Volume in 1 Second)</strong></dt>
<dd>The volume forcefully exhaled in the first second of an FVC maneuver. The most reproducible and clinically important spirometric value. Used with FVC to calculate the FEV1/FVC ratio for identifying obstruction and to grade severity of impairment.</dd>

<dt><strong>FRC (Functional Residual Capacity)</strong></dt>
<dd>The volume of gas remaining in the lungs at the end of a normal tidal expiration, equal to ERV + RV. Represents the balance point between inward chest wall recoil and outward lung recoil. Elevated in hyperinflation; reduced in restrictive diseases.</dd>

<dt><strong>FVC (Forced Vital Capacity)</strong></dt>
<dd>The total volume of gas forcefully exhaled from TLC to RV. Requires maximal effort and adequate expiratory time. Reduced in restrictive disease (low TLC) and obstructive disease (air trapping causing premature airway closure).</dd>
</dl>

<h2>H-L</h2>
<dl>
<dt><strong>Helium Dilution</strong></dt>
<dd>A closed-circuit technique for measuring FRC based on conservation of mass. The patient rebreathes from a circuit containing a known concentration of helium until equilibrium. FRC = (initial He% / final He%) x spirometer volume - spirometer volume. Underestimates FRC in severe air trapping.</dd>

<dt><strong>Inspiratory Capacity (IC)</strong></dt>
<dd>The maximum volume that can be inhaled from end-tidal expiratory level (VT + IRV). Approximately 2500-3600 mL. A reduction during exercise indicates dynamic hyperinflation and correlates with exertional dyspnea in COPD.</dd>

<dt><strong>IRV (Inspiratory Reserve Volume)</strong></dt>
<dd>The maximum volume of gas that can be inhaled above a normal tidal inspiration. Approximately 2000-3100 mL. Decreases during exercise as tidal volume increases.</dd>

<dt><strong>LLN (Lower Limit of Normal)</strong></dt>
<dd>The 5th percentile of values from a healthy reference population (z-score of -1.645). Values below the LLN are considered abnormal. Preferred over fixed cutoffs because it accounts for age, sex, height, and ethnicity, reducing misclassification rates.</dd>
</dl>

<h2>M-N</h2>
<dl>
<dt><strong>MIP (Maximal Inspiratory Pressure)</strong></dt>
<dd>The greatest negative pressure a patient can generate during a maximal inspiratory effort against an occluded airway, measured from RV. Reflects diaphragm and inspiratory muscle strength. Normal values are more negative than -80 cmH2O (males) and -60 cmH2O (females).</dd>

<dt><strong>MVV (Maximal Voluntary Ventilation)</strong></dt>
<dd>The maximum volume a patient can breathe in one minute by breathing as fast and deeply as possible, usually measured over 12-15 seconds and extrapolated. Normal MVV approximates FEV1 x 35-40. Reduced in obstruction, restriction, and neuromuscular disease.</dd>

<dt><strong>Nitrogen Washout (Multiple-Breath)</strong></dt>
<dd>An open-circuit technique for measuring FRC. The patient breathes 100% O2 while expired N2 is collected and measured until the end-tidal N2 falls below 1.5% (typically within 7 minutes). FRC is calculated from the total volume of N2 washed out and the initial alveolar N2 concentration.</dd>
</dl>

<h2>O-R</h2>
<dl>
<dt><strong>Obstructive Pattern</strong></dt>
<dd>A PFT pattern characterized by reduced FEV1/FVC ratio below the LLN, with reduced FEV1 and normal or increased TLC. The flow-volume loop shows concavity of the expiratory limb. Seen in asthma, COPD, bronchiectasis, and cystic fibrosis.</dd>

<dt><strong>Repeatability Criteria</strong></dt>
<dd>ATS/ERS requirement that the two largest FEV1 values and two largest FVC values from acceptable maneuvers be within 150 mL of each other (100 mL if FVC < 1.0 L). Ensures test reliability.</dd>

<dt><strong>Residual Volume (RV)</strong></dt>
<dd>The volume remaining in the lungs after maximal expiration. Cannot be measured by spirometry alone; requires body plethysmography or gas dilution. Elevated in obstructive disease (air trapping); reduced in restrictive disease.</dd>

<dt><strong>Restrictive Pattern</strong></dt>
<dd>A PFT pattern characterized by reduced TLC below the LLN with a normal or elevated FEV1/FVC ratio. Spirometry alone can suggest restriction (low FVC with normal ratio) but cannot confirm it without lung volume measurement. Seen in pulmonary fibrosis, chest wall deformities, neuromuscular disease, and obesity.</dd>
</dl>

<h2>S-V</h2>
<dl>
<dt><strong>Specific Airway Conductance (sGaw)</strong></dt>
<dd>Airway conductance (reciprocal of Raw) normalized to lung volume: sGaw = Gaw / TGV. Adjusts for the effect of lung volume on airway caliber. Reduced in obstructive airway disease.</dd>

<dt><strong>TLC (Total Lung Capacity)</strong></dt>
<dd>The total volume of gas in the lungs after a maximal inspiration. TLC = RV + ERV + VT + IRV, or TLC = VC + RV. The definitive measurement for confirming restriction (low TLC) or hyperinflation (high TLC).</dd>

<dt><strong>Upper Airway Obstruction</strong></dt>
<dd>Narrowing of the extrathoracic or intrathoracic central airway detected by characteristic flow-volume loop patterns. Fixed obstruction: flattening of both inspiratory and expiratory loops. Variable extrathoracic: inspiratory plateau. Variable intrathoracic: expiratory plateau.</dd>

<dt><strong>Vital Capacity (VC)</strong></dt>
<dd>The maximum volume of gas that can be exhaled after a maximal inspiration (or inhaled after a maximal expiration). May be measured as forced (FVC), slow (SVC), or inspiratory (IVC). In obstructive disease, SVC is often larger than FVC due to reduced dynamic compression during slow exhalation.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-cpft-exam-guide">NBRC CPFT Exam Study Guide</a></li>
<li><a href="/cheat-sheets/spirometry-interpretation">Spirometry Interpretation Cheat Sheet</a></li>
<li><a href="/topics/pulmonary-function-testing">Pulmonary Function Testing Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 10. PHARMACOLOGY GLOSSARY
  // ============================================================
  {
    slug: 'pharmacology-glossary',
    type: 'GLOSSARY' as const,
    title: 'Respiratory Pharmacology Glossary',
    description:
      'Glossary of respiratory pharmacology terms for NBRC exam preparation. Covers bronchodilators, anti-inflammatory agents, mucolytics, and other medications used in respiratory care.',
    division: null,
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>Respiratory Pharmacology Glossary</h1>
<p>Key pharmacology terms and drug classifications used in respiratory therapy. This glossary covers mechanisms of action, indications, dosages, and side effects of medications commonly tested on NBRC exams.</p>

<h2>A</h2>
<dl>
<dt><strong>Acetylcysteine (N-Acetylcysteine / NAC)</strong></dt>
<dd>A mucolytic agent that breaks disulfide bonds in mucus glycoproteins, reducing viscosity. Administered via nebulization (10% or 20% solution) or orally. Also used as an antidote for acetaminophen overdose. May cause bronchospasm; often co-administered with a bronchodilator.</dd>

<dt><strong>Albuterol (Salbutamol)</strong></dt>
<dd>A short-acting beta-2 adrenergic agonist (SABA) used for acute bronchospasm relief. Onset of action: 5-15 minutes; duration: 4-6 hours. Standard nebulizer dose: 2.5 mg in 3 mL normal saline. MDI dose: 2 puffs (90 mcg/puff). Side effects include tachycardia, tremor, and hypokalemia.</dd>

<dt><strong>Anticholinergic Agents</strong></dt>
<dd>Medications that block acetylcholine at muscarinic receptors (M3) in airway smooth muscle, producing bronchodilation and reducing mucus secretion. Short-acting: ipratropium bromide (onset 15-30 min, duration 4-6 hrs). Long-acting: tiotropium bromide (onset 30 min, duration 24 hrs). Fewer cardiovascular side effects than beta-agonists.</dd>
</dl>

<h2>B-C</h2>
<dl>
<dt><strong>Beclomethasone Dipropionate</strong></dt>
<dd>An inhaled corticosteroid (ICS) used for long-term control of persistent asthma. Reduces airway inflammation, edema, and mucus production. Must be used regularly (not for acute relief). Side effects include oral candidiasis (thrush) and dysphonia; mitigated by spacer use and mouth rinsing after each dose.</dd>

<dt><strong>Beta-2 Adrenergic Agonists</strong></dt>
<dd>Bronchodilators that stimulate beta-2 receptors on airway smooth muscle, causing relaxation via increased intracellular cAMP. Classified as short-acting (SABA: albuterol, levalbuterol), long-acting (LABA: salmeterol, formoterol), and ultra-long-acting (ULABA: indacaterol, olodaterol). LABAs should never be used as monotherapy in asthma (increased risk of exacerbation); must be combined with ICS.</dd>

<dt><strong>Budesonide</strong></dt>
<dd>An inhaled corticosteroid available as nebulizer suspension (Pulmicort Respules) and DPI (Pulmicort Flexhaler). The nebulized form is commonly used in pediatric patients for persistent asthma. Also combined with formoterol in Symbicort for maintenance and reliever therapy.</dd>

<dt><strong>Cromolyn Sodium</strong></dt>
<dd>A mast cell stabilizer that prevents the release of histamine and other inflammatory mediators. Used prophylactically for exercise-induced bronchospasm and allergic asthma. Not effective for acute bronchospasm. Available as nebulizer solution (20 mg/2 mL) and MDI. Very safe with minimal side effects.</dd>
</dl>

<h2>D-E</h2>
<dl>
<dt><strong>Dornase Alfa (Pulmozyme)</strong></dt>
<dd>A recombinant human deoxyribonuclease (rhDNase) that cleaves extracellular DNA in purulent sputum, reducing viscosity. Specifically indicated for cystic fibrosis patients. Dose: 2.5 mg via nebulizer once daily. Does not cause bronchospasm (unlike NAC). Should not be mixed with other nebulized medications.</dd>

<dt><strong>Epinephrine (Racemic)</strong></dt>
<dd>A sympathomimetic agent with both alpha and beta adrenergic effects. Racemic epinephrine (2.25% solution) is used via nebulization to treat upper airway edema (post-extubation stridor, croup). The alpha-adrenergic effect produces mucosal vasoconstriction, reducing edema. Standard dose: 0.5 mL of 2.25% solution diluted in 3 mL normal saline.</dd>

<dt><strong>Epoprostenol (Flolan)</strong></dt>
<dd>A synthetic prostacyclin analog that causes pulmonary vasodilation and inhibits platelet aggregation. Administered via continuous IV infusion or inhaled nebulization for pulmonary arterial hypertension. Inhaled epoprostenol is used as a selective pulmonary vasodilator in ARDS as an alternative to inhaled nitric oxide.</dd>
</dl>

<h2>F-I</h2>
<dl>
<dt><strong>Fluticasone Propionate</strong></dt>
<dd>A potent inhaled corticosteroid used for asthma and COPD. Available as MDI (Flovent HFA: 44, 110, 220 mcg/puff), DPI (Flovent Diskus), and in combination with salmeterol (Advair) or vilanterol (Breo Ellipta). Higher potency than beclomethasone; use the lowest effective dose to minimize systemic effects.</dd>

<dt><strong>Heliox</strong></dt>
<dd>A mixture of helium and oxygen (typically 80:20 or 70:30 He:O2) that has lower density than air, reducing airway resistance and work of breathing in patients with upper airway obstruction. Does not treat the underlying condition. Flow meters and equipment must be recalibrated for heliox because standard oxygen flow meters underestimate heliox flow.</dd>

<dt><strong>Hypertonic Saline</strong></dt>
<dd>Nebulized sodium chloride solution (3%, 5%, or 7%) used to induce sputum production for diagnostic sampling and to improve mucociliary clearance in cystic fibrosis. May cause bronchospasm; pre-treatment with a bronchodilator is recommended.</dd>

<dt><strong>Inhaled Corticosteroids (ICS)</strong></dt>
<dd>Anti-inflammatory medications that suppress airway inflammation in asthma and COPD. Examples: beclomethasone, budesonide, fluticasone, mometasone, ciclesonide. Cornerstone of persistent asthma management. Local side effects: oral candidiasis, dysphonia. Systemic effects at high doses: adrenal suppression, osteoporosis, cataracts.</dd>

<dt><strong>Ipratropium Bromide (Atrovent)</strong></dt>
<dd>A short-acting muscarinic antagonist (SAMA) used for bronchospasm in COPD and acute asthma exacerbations. Nebulizer dose: 0.5 mg (0.02% solution). MDI: 2 puffs (17 mcg/puff). Often combined with albuterol (DuoNeb, Combivent). Onset: 15-30 minutes; duration: 4-6 hours. Minimal systemic absorption.</dd>
</dl>

<h2>L-M</h2>
<dl>
<dt><strong>Leukotriene Modifiers</strong></dt>
<dd>Medications that block the leukotriene pathway, reducing bronchoconstriction, mucus production, and airway edema. Montelukast (Singulair) and zafirlukast (Accolate) are receptor antagonists taken orally. Used as add-on therapy for persistent asthma and allergic rhinitis. Less effective than ICS as monotherapy.</dd>

<dt><strong>Levalbuterol (Xopenex)</strong></dt>
<dd>The R-isomer of albuterol, providing bronchodilation with potentially fewer cardiac side effects than racemic albuterol. Nebulizer dose: 0.63-1.25 mg. Onset and duration similar to albuterol. More expensive than racemic albuterol; clinical superiority remains debated.</dd>

<dt><strong>Long-Acting Muscarinic Antagonist (LAMA)</strong></dt>
<dd>Anticholinergic bronchodilators with extended duration. Tiotropium (Spiriva): 24-hour duration, once-daily dosing via DPI or SMI. Umeclidinium, aclidinium, and glycopyrrolate are newer alternatives. First-line maintenance therapy in COPD, either alone or combined with LABA.</dd>

<dt><strong>Montelukast (Singulair)</strong></dt>
<dd>A leukotriene receptor antagonist taken once daily by mouth. Indicated for prophylaxis of asthma, exercise-induced bronchospasm, and seasonal allergic rhinitis. FDA boxed warning for neuropsychiatric events (agitation, depression, suicidal ideation). Available in chewable tablets for pediatric patients.</dd>
</dl>

<h2>N-P</h2>
<dl>
<dt><strong>Nitric Oxide (Inhaled / iNO)</strong></dt>
<dd>A selective pulmonary vasodilator administered at 5-20 ppm via the ventilator circuit. Indicated for persistent pulmonary hypertension of the newborn (PPHN). Also used off-label for acute pulmonary hypertension and ARDS. Rapidly inactivated by hemoglobin, limiting systemic effects. Monitor for methemoglobin (keep below 5%) and NO2 toxicity.</dd>

<dt><strong>Neuromuscular Blocking Agents (NMBAs)</strong></dt>
<dd>Medications that block neuromuscular transmission at the motor end plate. Depolarizing: succinylcholine (rapid onset, short duration, used for RSI). Non-depolarizing: rocuronium, vecuronium, cisatracurium (used for sustained paralysis in ICU). Do not provide sedation or analgesia; concurrent sedation is mandatory.</dd>

<dt><strong>Prednisone / Methylprednisolone</strong></dt>
<dd>Systemic corticosteroids used for acute asthma exacerbations, COPD exacerbations, and inflammatory conditions. Prednisone: oral, typical dose 40-60 mg/day for 5-7 days. Methylprednisolone: IV (Solu-Medrol), 60-125 mg q6h for severe exacerbations. Short courses minimize systemic side effects; prolonged use causes adrenal suppression, hyperglycemia, osteoporosis, and immunosuppression.</dd>
</dl>

<h2>S-T</h2>
<dl>
<dt><strong>Salmeterol (Serevent)</strong></dt>
<dd>A long-acting beta-2 agonist (LABA) with 12-hour duration of action. Used for maintenance therapy in asthma (always with ICS) and COPD. Not for acute relief due to slow onset (15-30 min). Available as DPI (Serevent Diskus) and in combination with fluticasone (Advair).</dd>

<dt><strong>Surfactant (Exogenous)</strong></dt>
<dd>A mixture of lipids and proteins that reduces surface tension in alveoli, preventing collapse at end-expiration. Exogenous preparations include beractant (Survanta, bovine-derived), calfactant (Infasurf, calf lung extract), and poractant alfa (Curosurf, porcine-derived). Administered intratracheally for neonatal RDS. Dose varies by preparation.</dd>

<dt><strong>Theophylline</strong></dt>
<dd>A methylxanthine bronchodilator and respiratory stimulant with a narrow therapeutic index (serum levels 5-15 mcg/mL). Causes bronchodilation, diaphragm strengthening, and mild anti-inflammatory effects. Side effects include tachycardia, nausea, seizures, and arrhythmias. Rarely used as first-line therapy due to toxicity risk; drug interactions are common.</dd>

<dt><strong>Tiotropium Bromide (Spiriva)</strong></dt>
<dd>A long-acting muscarinic antagonist (LAMA) with 24-hour bronchodilator effect. Blocks M1 and M3 receptors in airway smooth muscle. First-line maintenance bronchodilator in COPD. Available as HandiHaler (DPI, 18 mcg) and Respimat (SMI, 2.5 mcg). Side effects: dry mouth, urinary retention, constipation. Contraindicated in patients with narrow-angle glaucoma.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-tmc-exam-guide">NBRC TMC Exam Study Guide</a></li>
<li><a href="/cheat-sheets/respiratory-medications">Respiratory Medications Cheat Sheet</a></li>
<li><a href="/topics/pharmacology">Respiratory Pharmacology Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 11. SLEEP STUDY GLOSSARY
  // ============================================================
  {
    slug: 'sleep-study-glossary',
    type: 'GLOSSARY' as const,
    title: 'Sleep Study Terminology Glossary',
    description:
      'Glossary of sleep study and polysomnography terminology for respiratory therapy students. Covers PSG sensors, sleep scoring rules, and PAP therapy equipment.',
    division: 'sds',
    readTime: '9 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>Sleep Study Terminology Glossary</h1>
<p>A glossary of polysomnography and sleep medicine terms commonly encountered in clinical practice and on the NBRC SDS exam. Covers PSG equipment, scoring criteria, and treatment modalities.</p>

<h2>A</h2>
<dl>
<dt><strong>Actigraphy</strong></dt>
<dd>A wrist-worn device that monitors rest-activity cycles over days to weeks using an accelerometer. Used to estimate sleep-wake patterns, circadian rhythm disorders, and treatment response. Less detailed than PSG but useful for longitudinal assessment and in patients who cannot undergo in-lab studies.</dd>

<dt><strong>Adaptive Servo-Ventilation (ASV)</strong></dt>
<dd>A PAP device that provides variable pressure support to stabilize breathing in patients with central or complex sleep apnea. Automatically adjusts EPAP and pressure support based on the patient's breathing pattern. Contraindicated in heart failure with reduced ejection fraction (EF less than 45%) based on the SERVE-HF trial.</dd>

<dt><strong>AHI (Apnea-Hypopnea Index)</strong></dt>
<dd>The number of apnea and hypopnea events per hour of sleep. Primary metric for diagnosing and classifying OSA severity: normal (<5), mild (5-15), moderate (15-30), severe (>30). Calculated separately for supine/non-supine and REM/NREM sleep.</dd>

<dt><strong>Alpha Intrusion</strong></dt>
<dd>The presence of alpha-frequency EEG activity (8-13 Hz) during NREM sleep, particularly during N2 and N3. Associated with non-restorative sleep, fibromyalgia, and chronic pain conditions. Results in daytime fatigue despite adequate total sleep time.</dd>
</dl>

<h2>B-C</h2>
<dl>
<dt><strong>BiPAP/BPAP (Bilevel Positive Airway Pressure)</strong></dt>
<dd>A device delivering two distinct pressures: inspiratory positive airway pressure (IPAP) during inhalation and expiratory positive airway pressure (EPAP) during exhalation. The difference between IPAP and EPAP (pressure support) augments tidal volume. Used when fixed CPAP is insufficient, when high pressures are needed, or for hypoventilation syndromes.</dd>

<dt><strong>Central Sleep Apnea (CSA)</strong></dt>
<dd>Cessation of airflow for at least 10 seconds with absent respiratory effort, resulting from impaired central respiratory drive. Associated with heart failure (Cheyne-Stokes breathing), opioid use, stroke, and high altitude. Treatment includes ASV (if EF >45%), supplemental oxygen, or phrenic nerve stimulation.</dd>

<dt><strong>Chin EMG (Submentalis EMG)</strong></dt>
<dd>The electromyographic recording from electrodes placed on the chin (mentalis and submentalis muscles). Essential for identifying REM sleep (muscle atonia) and REM sleep behavior disorder (lack of normal atonia). Also used to identify arousals during NREM sleep (transient increase in EMG tone).</dd>

<dt><strong>Circadian Rhythm</strong></dt>
<dd>The approximately 24-hour internal biological clock governed by the suprachiasmatic nucleus (SCN) in the hypothalamus. Influenced by light exposure, melatonin secretion, and social cues (zeitgebers). Circadian rhythm disorders include delayed sleep-wake phase disorder, advanced sleep-wake phase disorder, shift work disorder, and jet lag.</dd>

<dt><strong>Complex Sleep Apnea (Treatment-Emergent CSA)</strong></dt>
<dd>Central apneas that appear or persist after obstructive events are eliminated by CPAP. Occurs in 5-15% of OSA patients starting PAP therapy. May resolve spontaneously within weeks or require ASV therapy.</dd>

<dt><strong>CPAP (Continuous Positive Airway Pressure)</strong></dt>
<dd>A device delivering a single constant pressure via nasal or oronasal mask to splint the upper airway open during sleep. Gold-standard treatment for moderate-to-severe OSA. Effective pressure is determined by in-lab titration or auto-titration. Common barriers to adherence include mask discomfort, pressure intolerance, aerophagia, and claustrophobia.</dd>
</dl>

<h2>E</h2>
<dl>
<dt><strong>ECG (Electrocardiogram, PSG)</strong></dt>
<dd>A single-lead (modified lead II) cardiac rhythm strip recorded during polysomnography. Used to detect arrhythmias associated with sleep-disordered breathing, including sinus bradycardia, sinus pauses, atrial fibrillation, and heart block. Significant arrhythmias should be reported immediately.</dd>

<dt><strong>EEG Derivations (PSG)</strong></dt>
<dd>Standard AASM recommended EEG channels for polysomnography: F4-M1, C4-M1, O2-M1, with backup electrodes on the opposite side (F3-M2, C3-M2, O1-M2). Frontal channels best capture slow waves (N3); occipital channels best capture alpha rhythm (wake).</dd>

<dt><strong>Epoch</strong></dt>
<dd>A 30-second segment of polysomnographic data used as the standard unit for sleep staging. Each epoch is assigned a single sleep stage based on the predominant EEG, EOG, and EMG patterns present during that 30-second window.</dd>

<dt><strong>Expiratory Pressure Relief (EPR / C-Flex / A-Flex)</strong></dt>
<dd>A comfort feature on PAP devices that reduces pressure during early exhalation to improve patient tolerance. The pressure drop is typically 1-3 cmH2O. Different manufacturers use proprietary names (EPR by ResMed, C-Flex and A-Flex by Philips Respironics).</dd>
</dl>

<h2>H-M</h2>
<dl>
<dt><strong>Home Sleep Apnea Test (HSAT)</strong></dt>
<dd>A portable monitoring device used to diagnose obstructive sleep apnea in patients with a high pretest probability and no significant comorbidities. Typically records nasal pressure, pulse oximetry, respiratory effort, and body position. Reports REI (Respiratory Event Index) rather than AHI because total sleep time is usually estimated.</dd>

<dt><strong>Interface (PAP Mask)</strong></dt>
<dd>The device used to deliver PAP therapy to the patient. Types include nasal mask (covers nose only), nasal pillows (inserts into nares), oronasal/full-face mask (covers nose and mouth), and total face mask. Selection based on mouth breathing, claustrophobia, facial anatomy, and patient preference.</dd>

<dt><strong>Limb Movement (PLM)</strong></dt>
<dd>Periodic limb movements are repetitive, stereotypical movements of the lower extremities during sleep, typically involving dorsiflexion of the ankle and extension of the great toe. Scored when 4 or more movements occur in sequence, each lasting 0.5-10 seconds, with 5-90 seconds between movements. PLM index (PLMI) greater than 15/hr is clinically significant.</dd>

<dt><strong>Mask Leak</strong></dt>
<dd>Unintentional air escape from the PAP interface. Causes include improper mask fit, mouth breathing with nasal mask, and excessive pressure. Leads to reduced therapy effectiveness, eye irritation (from air directed toward eyes), noise, and sleep disruption. Managed by mask refitting, chin strap, or switching to a full-face mask.</dd>

<dt><strong>Melatonin</strong></dt>
<dd>A hormone produced by the pineal gland in response to darkness, promoting sleep onset. Secretion follows a circadian pattern and is suppressed by light exposure. Exogenous melatonin (0.5-5 mg) is used to treat circadian rhythm disorders (delayed sleep-wake phase, jet lag, shift work) and insomnia in older adults.</dd>
</dl>

<h2>N-P</h2>
<dl>
<dt><strong>Nasal Pressure Transducer</strong></dt>
<dd>A sensor connected to a nasal cannula that detects airflow by measuring pressure fluctuations at the nares. Provides a semi-quantitative airflow signal with better sensitivity for detecting hypopneas and flow limitation than oronasal thermal sensors. Required by AASM standards for scoring hypopneas.</dd>

<dt><strong>Oximetry (Overnight)</strong></dt>
<dd>Continuous pulse oximetry recording during sleep used to screen for sleep-disordered breathing. The oxygen desaturation index (ODI) counts desaturation events per hour. While useful for screening, it cannot determine apnea type, sleep staging, or arousal frequency.</dd>

<dt><strong>PAP Adherence</strong></dt>
<dd>Compliance with positive airway pressure therapy, defined by CMS as use for at least 4 hours per night on at least 70% of nights (21 of 30 days). Monitored via built-in device data cards or wireless transmission. Average CPAP adherence rates are approximately 50-60%.</dd>

<dt><strong>Positional Therapy</strong></dt>
<dd>Treatment strategy for position-dependent OSA (apneas primarily in supine position). Uses devices such as positional pillows, sleep position trainers, or bumper belts to prevent supine sleep. May be used alone in mild positional OSA or as adjunct to PAP therapy.</dd>
</dl>

<h2>R-S</h2>
<dl>
<dt><strong>Ramp Feature</strong></dt>
<dd>A PAP device setting that starts at a low, comfortable pressure and gradually increases to the prescribed therapeutic pressure over a set period (typically 5-45 minutes). Allows the patient to fall asleep before full pressure is reached. May delay effective therapy if the ramp period is too long.</dd>

<dt><strong>Respiratory Effort (RIP Belts)</strong></dt>
<dd>Respiratory inductance plethysmography belts placed around the chest and abdomen to detect respiratory effort. Used to distinguish obstructive apneas (continued effort) from central apneas (absent effort). Paradoxical movement (chest and abdomen moving in opposite directions) indicates upper airway obstruction.</dd>

<dt><strong>Sleep Latency</strong></dt>
<dd>The time from lights out to the first epoch of any stage of sleep. Normal sleep latency is 10-20 minutes. Latency less than 5 minutes suggests significant sleep deprivation or a disorder of excessive sleepiness such as narcolepsy. Latency greater than 30 minutes suggests insomnia.</dd>

<dt><strong>Snoring Sensor</strong></dt>
<dd>A microphone or piezoelectric sensor placed on the neck to detect snoring vibrations during PSG. Snoring is scored as a respiratory event when it is associated with arousals or airflow limitation. Used to guide CPAP titration and assess therapy effectiveness.</dd>

<dt><strong>Supine REM Sleep</strong></dt>
<dd>The combination of supine body position and REM sleep stage, during which upper airway muscle tone is at its lowest and the airway is most collapsible. Represents the highest-risk period for obstructive events. CPAP titration must include supine REM at therapeutic pressure to confirm efficacy.</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-sds-exam-guide">NBRC SDS Exam Study Guide</a></li>
<li><a href="/cheat-sheets/psg-scoring">PSG Scoring Cheat Sheet</a></li>
<li><a href="/topics/sleep-disorders">Sleep Disorders Topics</a></li>
</ul>`,
  },

  // ============================================================
  // 12. NEONATAL GLOSSARY
  // ============================================================
  {
    slug: 'neonatal-glossary',
    type: 'GLOSSARY' as const,
    title: 'Neonatal Respiratory Therapy Glossary',
    description:
      'Glossary of neonatal respiratory therapy terms for the NBRC NPS exam. Covers neonatal physiology, ventilation strategies, medications, and monitoring.',
    division: 'nps',
    readTime: '10 min read',
    publishedAt: new Date('2026-08-10'),
    content: `<h1>Neonatal Respiratory Therapy Glossary</h1>
<p>Comprehensive neonatal respiratory care terminology for the NPS exam and clinical practice. Covers neonatal physiology, respiratory disorders, ventilation strategies, medications, and monitoring techniques.</p>

<h2>A</h2>
<dl>
<dt><strong>Apgar Score</strong></dt>
<dd>A scoring system used at 1 and 5 minutes after birth to assess newborn condition. Five categories scored 0-2: Appearance (skin color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), Respiration (respiratory effort). A score of 7-10 is normal; 4-6 requires intervention; 0-3 indicates severe depression requiring immediate resuscitation.</dd>

<dt><strong>Apnea of Prematurity</strong></dt>
<dd>A developmental disorder of respiratory control in preterm infants (<37 weeks gestation) characterized by breathing pauses of 20 seconds or longer, or shorter pauses accompanied by oxygen desaturation, bradycardia, or cyanosis. Types: central (no respiratory effort), obstructive (effort without airflow), mixed (most common). Treatment includes caffeine citrate, CPAP, and tactile stimulation.</dd>

<dt><strong>Aerosolized Medications (Neonatal)</strong></dt>
<dd>Delivery of inhaled medications to neonates via small-volume nebulizer, MDI with spacer and neonatal mask, or in-line nebulizer during mechanical ventilation. Drug deposition is significantly lower in neonates (1-2% of nominal dose) due to small airway caliber, high respiratory rate, and nasal breathing.</dd>
</dl>

<h2>B</h2>
<dl>
<dt><strong>Bronchopulmonary Dysplasia (BPD)</strong></dt>
<dd>Chronic lung disease of prematurity defined as the need for supplemental oxygen at 36 weeks postmenstrual age (or 28 days of life in some definitions). Pathology involves arrest of alveolar and vascular development. Risk factors include prematurity, oxygen toxicity, ventilator-induced lung injury, and inflammation. Management includes gentle ventilation, caffeine, vitamin A, and postnatal corticosteroids in select cases.</dd>

<dt><strong>Blood Gas Sampling (Neonatal)</strong></dt>
<dd>Arterial blood is obtained from the radial, posterior tibial, or umbilical artery. Capillary blood gases (CBG) from a warmed heel are used more frequently; CBG pH and PCO2 correlate well with arterial values, but PO2 does not reliably reflect PaO2. Normal neonatal ABG values: pH 7.30-7.40, PaCO2 35-45 mmHg, PaO2 50-80 mmHg (preterm) or 60-80 mmHg (term).</dd>
</dl>

<h2>C</h2>
<dl>
<dt><strong>Caffeine Citrate</strong></dt>
<dd>A central respiratory stimulant used to treat apnea of prematurity. Loading dose: 20 mg/kg IV or PO; maintenance: 5-10 mg/kg/day. Also reduces the incidence of BPD and improves neurodevelopmental outcomes. Monitor for tachycardia, feeding intolerance, and jitteriness. Therapeutic levels: 5-20 mcg/mL.</dd>

<dt><strong>Congenital Diaphragmatic Hernia (CDH)</strong></dt>
<dd>A developmental defect in the diaphragm (usually left-sided, Bochdalek type) allowing abdominal organs to herniate into the chest, causing pulmonary hypoplasia and persistent pulmonary hypertension. Management: gentle ventilation (avoid high pressures), permissive hypercapnia, avoid bag-mask ventilation, immediate OG tube decompression, and surgical repair after stabilization.</dd>

<dt><strong>Congenital Heart Disease (Cyanotic)</strong></dt>
<dd>Cardiac malformations that produce right-to-left shunting and cyanosis unresponsive to supplemental oxygen (positive hyperoxia test indicates cyanotic CHD if PaO2 remains below 100 mmHg on 100% O2). Examples: tetralogy of Fallot, transposition of the great arteries, tricuspid atresia, total anomalous pulmonary venous return. Prostaglandin E1 is used to maintain ductal patency pending surgical repair.</dd>

<dt><strong>CPAP (Neonatal)</strong></dt>
<dd>Continuous positive airway pressure delivered to neonates via nasal prongs, nasal mask, or nasopharyngeal tube to maintain functional residual capacity, prevent alveolar collapse, and reduce work of breathing. Typical starting pressure: 5-6 cmH2O. Used for RDS, apnea of prematurity, post-extubation support, and as an alternative to intubation in very preterm infants (INSURE and LISA approaches).</dd>
</dl>

<h2>E-G</h2>
<dl>
<dt><strong>ECMO (Extracorporeal Membrane Oxygenation)</strong></dt>
<dd>Prolonged cardiopulmonary bypass providing gas exchange and circulatory support for neonates with reversible respiratory or cardiac failure. Types: venoarterial (VA, provides cardiac and respiratory support) and venovenous (VV, respiratory support only). Criteria typically include gestational age greater than 34 weeks, birth weight greater than 2 kg, and oxygenation index (OI) greater than 40 despite maximal therapy.</dd>

<dt><strong>Endotracheal Tube Sizing (Neonatal)</strong></dt>
<dd>ETT size selection based on gestational age and weight: <1 kg: 2.5 mm ID; 1-2 kg: 3.0 mm ID; 2-3 kg: 3.5 mm ID; >3 kg: 3.5-4.0 mm ID. Insertion depth (cm at lip): weight in kg + 6 (for oral intubation). Cuffed tubes are increasingly used in neonates with appropriate cuff pressure monitoring.</dd>

<dt><strong>Fetal Circulation</strong></dt>
<dd>The unique circulatory pattern in utero characterized by three shunts: ductus venosus (bypasses liver), foramen ovale (right-to-left atrial shunt), and ductus arteriosus (bypasses lungs). At birth, the first breath increases PaO2 and decreases PVR, initiating closure of these shunts and establishing adult-type circulation.</dd>

<dt><strong>Gastroschisis/Omphalocele</strong></dt>
<dd>Abdominal wall defects with evisceration of abdominal organs. Both may compromise ventilation due to increased abdominal pressure after surgical repair. Require careful ventilatory management with attention to peak pressures, and may need delayed primary closure or silo placement.</dd>
</dl>

<h2>H-I</h2>
<dl>
<dt><strong>HFOV (High-Frequency Oscillatory Ventilation)</strong></dt>
<dd>A neonatal ventilation strategy using very small tidal volumes at high frequencies (typically 8-15 Hz in neonates). Mean airway pressure (MAP) determines lung recruitment (oxygenation); amplitude (delta P) determines CO2 removal. Used as rescue therapy for air-leak syndromes, severe RDS, and congenital diaphragmatic hernia. Target chest wiggle from clavicles to umbilicus.</dd>

<dt><strong>Hyperoxia Test</strong></dt>
<dd>A diagnostic test to differentiate cardiac from pulmonary causes of neonatal cyanosis. The infant is placed on 100% oxygen for 10-15 minutes. If PaO2 rises above 150 mmHg, the cause is likely pulmonary. If PaO2 remains below 100 mmHg, cyanotic congenital heart disease is suspected.</dd>

<dt><strong>Inhaled Nitric Oxide (iNO)</strong></dt>
<dd>A selective pulmonary vasodilator used to treat persistent pulmonary hypertension of the newborn (PPHN). Starting dose: 20 ppm; weaned to the lowest effective dose. Does not affect systemic blood pressure. Must be weaned gradually to avoid rebound pulmonary hypertension. Monitor methemoglobin levels (keep below 5%).</dd>
</dl>

<h2>L-M</h2>
<dl>
<dt><strong>LISA (Less Invasive Surfactant Administration)</strong></dt>
<dd>A technique for delivering surfactant to spontaneously breathing preterm infants on CPAP via a thin catheter (feeding tube or specialized catheter) inserted through the vocal cords under direct laryngoscopy. Avoids the need for intubation and mechanical ventilation. Associated with reduced BPD compared to INSURE.</dd>

<dt><strong>Lung Protective Strategy (Neonatal)</strong></dt>
<dd>Ventilation approaches that minimize lung injury in neonates: permissive hypercapnia (PaCO2 45-55 mmHg), low tidal volumes (4-6 mL/kg), adequate PEEP (4-6 cmH2O), targeted SpO2 ranges (88-95% in preterm), and early extubation to CPAP. Volume-targeted ventilation is preferred over pressure-only modes.</dd>

<dt><strong>Meconium Aspiration Syndrome (MAS)</strong></dt>
<dd>Respiratory distress caused by aspiration of meconium-stained amniotic fluid, typically in term or post-term infants with perinatal stress. Pathophysiology includes mechanical airway obstruction, chemical pneumonitis, surfactant inactivation, and PPHN. CXR shows patchy infiltrates with hyperinflation. Treatment: supportive care, surfactant (if severe), iNO for PPHN, and ECMO if refractory.</dd>
</dl>

<h2>N-P</h2>
<dl>
<dt><strong>Neonatal Resuscitation Program (NRP)</strong></dt>
<dd>A standardized algorithm for newborn stabilization: warm, dry, stimulate, position airway, suction if needed. If breathing is absent or HR <100: begin positive-pressure ventilation (PPV) with 21% O2 (term) or 21-30% O2 (preterm). If HR <60 after 30 seconds of effective PPV: start chest compressions (3:1 ratio with ventilations). Epinephrine if HR remains <60 after compressions.</dd>

<dt><strong>Necrotizing Enterocolitis (NEC)</strong></dt>
<dd>A serious gastrointestinal emergency of premature infants involving bowel wall inflammation, necrosis, and potential perforation. Signs include feeding intolerance, abdominal distention, bloody stools, and pneumatosis intestinalis on X-ray. Respiratory therapists must be aware that NEC can cause significant abdominal distention compromising ventilation.</dd>

<dt><strong>Oxygen Saturation Targeting (Neonatal)</strong></dt>
<dd>The practice of maintaining SpO2 within specific ranges to balance the risks of hypoxia against oxygen toxicity. Current evidence supports SpO2 targets of 88-95% for preterm infants less than 32 weeks gestation. Higher targets (>95%) increase the risk of ROP and BPD; lower targets (<88%) may increase mortality.</dd>

<dt><strong>Patent Ductus Arteriosus (PDA)</strong></dt>
<dd>Persistence of the fetal connection between the pulmonary artery and aorta after birth. Hemodynamically significant PDA causes left-to-right shunting, pulmonary overcirculation, and systemic steal. Signs include bounding pulses, wide pulse pressure, and a continuous murmur. Treatment: fluid restriction, ibuprofen or indomethacin (COX inhibitors), acetaminophen, or surgical/transcatheter closure.</dd>

<dt><strong>Persistent Pulmonary Hypertension of the Newborn (PPHN)</strong></dt>
<dd>Failure of the normal postnatal decrease in pulmonary vascular resistance, resulting in right-to-left shunting through the PDA and/or foramen ovale. Causes include MAS, CDH, sepsis, and idiopathic. Pre/post-ductal SpO2 gradient greater than 5-10% suggests PPHN. Treatment: optimize oxygenation and ventilation, iNO (20 ppm), sedation, alkalinization (controversial), milrinone, and ECMO for refractory cases.</dd>
</dl>

<h2>R-S</h2>
<dl>
<dt><strong>Respiratory Distress Syndrome (RDS)</strong></dt>
<dd>The most common respiratory disorder of premature neonates, caused by deficiency of pulmonary surfactant. Surfactant production begins around 24 weeks and is adequate by 35-36 weeks gestation. CXR shows diffuse ground-glass opacities with air bronchograms and low lung volumes. Treatment: exogenous surfactant replacement, CPAP, gentle mechanical ventilation, and antenatal corticosteroids (prevention).</dd>

<dt><strong>Retinopathy of Prematurity (ROP)</strong></dt>
<dd>Abnormal retinal vascular development in premature infants exposed to supplemental oxygen. Classified by zone (I-III), stage (1-5), and extent (clock hours). Plus disease (vascular dilation and tortuosity) indicates severity. Prevention: strict SpO2 targeting. Screening begins at 31 weeks PMA or 4 weeks postnatal age. Treatment: laser photocoagulation, anti-VEGF therapy.</dd>

<dt><strong>Silverman-Andersen Score</strong></dt>
<dd>A clinical scoring system for neonatal respiratory distress evaluating five signs on a 0-2 scale: upper chest movement, lower chest retractions, xiphoid retractions, nasal flaring, and expiratory grunting. Total score ranges from 0 (no distress) to 10 (severe distress). A score of 7-10 indicates severe respiratory distress requiring immediate intervention.</dd>

<dt><strong>Surfactant</strong></dt>
<dd>A mixture of lipids (90%, primarily dipalmitoylphosphatidylcholine) and proteins (10%, including SP-A, SP-B, SP-C, SP-D) that reduces alveolar surface tension, preventing collapse at end-expiration. Type II alveolar cells begin producing surfactant at 24-28 weeks gestation. Exogenous surfactant preparations: beractant (Survanta), calfactant (Infasurf), poractant alfa (Curosurf). Administered via ETT or LISA technique.</dd>
</dl>

<h2>T-V</h2>
<dl>
<dt><strong>Thermoregulation (Neonatal)</strong></dt>
<dd>Maintenance of a neutral thermal environment (NTE) to minimize oxygen consumption and metabolic demand. Neonates lose heat through evaporation, convection, conduction, and radiation. Managed with radiant warmers, incubators, plastic wraps (for VLBW infants), and warm delivery rooms. Target axillary temperature: 36.5-37.5 degrees Celsius.</dd>

<dt><strong>Transient Tachypnea of the Newborn (TTN)</strong></dt>
<dd>A self-limiting condition caused by delayed reabsorption of fetal lung fluid. More common after cesarean delivery (without labor) and late preterm birth. Presents within hours of birth with tachypnea (RR >60), mild retractions, and grunting. CXR shows perihilar streaking, prominent fissures, and mild cardiomegaly. Resolves in 24-72 hours with supportive care.</dd>

<dt><strong>Umbilical Artery Catheter (UAC)</strong></dt>
<dd>A catheter inserted into the umbilical artery for continuous blood pressure monitoring, arterial blood gas sampling, and fluid/medication administration in critically ill neonates. High position (T6-T10) or low position (L3-L4). Complications include thrombosis, vasospasm, infection, and hemorrhage.</dd>

<dt><strong>Volume-Targeted Ventilation (Neonatal)</strong></dt>
<dd>A ventilation strategy that adjusts inspiratory pressure breath-to-breath to deliver a target tidal volume. Reduces the incidence of volutrauma and hypocarbia compared to pressure-only modes. Target VT in neonates: 4-6 mL/kg. Available as volume guarantee (VG), pressure-regulated volume control (PRVC), or volume-assured pressure support (VAPS).</dd>
</dl>

<h3>Related Resources</h3>
<ul>
<li><a href="/guides/nbrc-nps-exam-guide">NBRC NPS Exam Study Guide</a></li>
<li><a href="/cheat-sheets/neonatal-ventilation">Neonatal Ventilation Cheat Sheet</a></li>
<li><a href="/topics/neonatal-respiratory-care">Neonatal Respiratory Care Topics</a></li>
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
  console.log(`\nDone! Upserted ${pages.length} glossary pages.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
