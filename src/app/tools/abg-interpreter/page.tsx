'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface ABGResult {
  phStatus: string
  phLabel: string
  co2Status: string
  hco3Status: string
  primaryDisorder: string
  compensation: string
  oxygenation: string
  clinicalNotes: string[]
}

function interpretABG(ph: number, pco2: number, hco3: number, pao2: number): ABGResult {
  const phStatus = ph < 7.35 ? 'acidotic' : ph > 7.45 ? 'alkalotic' : 'normal'
  const phLabel = ph < 7.35 ? 'Acidemia' : ph > 7.45 ? 'Alkalemia' : 'Normal pH'
  const co2Status: string = pco2 > 45 ? 'high' : pco2 < 35 ? 'low' : 'normal'
  const hco3Status: string = hco3 > 26 ? 'high' : hco3 < 22 ? 'low' : 'normal'

  let primaryDisorder = ''
  let compensation = ''
  const clinicalNotes: string[] = []

  if (phStatus === 'normal' && co2Status === 'normal' && hco3Status === 'normal') {
    primaryDisorder = 'Normal ABG'
    compensation = 'No acid-base disturbance'
  } else if (phStatus === 'normal' && co2Status !== 'normal' && hco3Status !== 'normal') {
    if (co2Status === 'high' && hco3Status === 'high') {
      primaryDisorder = 'Fully Compensated Respiratory Acidosis'
      compensation = 'Full renal compensation (elevated HCO3 offsets elevated CO2)'
      clinicalNotes.push('Consider chronic COPD, obesity hypoventilation, or neuromuscular disease')
    } else if (co2Status === 'low' && hco3Status === 'low') {
      primaryDisorder = 'Fully Compensated Respiratory Alkalosis'
      compensation = 'Full renal compensation (lowered HCO3 offsets low CO2)'
      clinicalNotes.push('Consider chronic hyperventilation, high altitude acclimatization, or pregnancy')
    } else if (hco3Status === 'high' && co2Status === 'high') {
      primaryDisorder = 'Fully Compensated Metabolic Alkalosis'
      compensation = 'Full respiratory compensation (elevated CO2 offsets elevated HCO3)'
    } else if (hco3Status === 'low' && co2Status === 'low') {
      primaryDisorder = 'Fully Compensated Metabolic Acidosis'
      compensation = 'Full respiratory compensation (lowered CO2 offsets low HCO3)'
    } else {
      primaryDisorder = 'Mixed Acid-Base Disorder'
      compensation = 'Opposing metabolic and respiratory disturbances with normal pH'
    }
  } else if (phStatus === 'acidotic') {
    if (co2Status === 'high') {
      primaryDisorder = 'Respiratory Acidosis'
      if (hco3Status === 'high') {
        compensation = 'Partial renal compensation (HCO3 elevated but pH still acidotic)'
        clinicalNotes.push('Partially compensated - may be acute-on-chronic')
      } else {
        compensation = 'Uncompensated (HCO3 not yet elevated)'
        clinicalNotes.push('Likely acute - consider airway obstruction, CNS depression, or acute respiratory failure')
      }
    } else if (hco3Status === 'low') {
      primaryDisorder = 'Metabolic Acidosis'
      if (co2Status === 'low') {
        compensation = 'Partial respiratory compensation (CO2 lowered but pH still acidotic)'
        clinicalNotes.push('Calculate anion gap to differentiate causes (DKA, lactic acidosis vs. diarrhea, RTA)')
      } else {
        compensation = 'Uncompensated (CO2 not yet lowered)'
        clinicalNotes.push('Acute metabolic acidosis - assess for DKA, lactic acidosis, renal failure, or toxic ingestion')
      }
    } else if (co2Status === 'high' && hco3Status === 'low') {
      primaryDisorder = 'Combined Respiratory and Metabolic Acidosis'
      compensation = 'No compensation - both systems contributing to acidosis'
      clinicalNotes.push('Critical finding - consider cardiopulmonary arrest or severe sepsis')
    } else {
      primaryDisorder = 'Acidosis (mixed or atypical pattern)'
      compensation = 'Atypical pattern - consider mixed disorder'
    }
  } else if (phStatus === 'alkalotic') {
    if (co2Status === 'low') {
      primaryDisorder = 'Respiratory Alkalosis'
      if (hco3Status === 'low') {
        compensation = 'Partial renal compensation (HCO3 lowered but pH still alkalotic)'
        clinicalNotes.push('May be chronic - consider anxiety, pain, fever, or early sepsis')
      } else {
        compensation = 'Uncompensated (HCO3 not yet lowered)'
        clinicalNotes.push('Likely acute hyperventilation - assess for anxiety, pain, PE, or mechanical overventilation')
      }
    } else if (hco3Status === 'high') {
      primaryDisorder = 'Metabolic Alkalosis'
      if (co2Status === 'high') {
        compensation = 'Partial respiratory compensation (CO2 elevated but pH still alkalotic)'
        clinicalNotes.push('Assess for vomiting, NG suction, diuretic use, or excessive NaHCO3 administration')
      } else {
        compensation = 'Uncompensated (CO2 not yet elevated)'
        clinicalNotes.push('Acute metabolic alkalosis - consider vomiting, contraction alkalosis, or hypokalemia')
      }
    } else if (co2Status === 'low' && hco3Status === 'high') {
      primaryDisorder = 'Combined Respiratory and Metabolic Alkalosis'
      compensation = 'No compensation - both systems contributing to alkalosis'
    } else {
      primaryDisorder = 'Alkalosis (mixed or atypical pattern)'
      compensation = 'Atypical pattern - consider mixed disorder'
    }
  } else {
    primaryDisorder = 'Indeterminate'
    compensation = 'Unable to classify - verify values'
  }

  let oxygenation = ''
  if (pao2 >= 80) {
    oxygenation = 'Normal oxygenation'
  } else if (pao2 >= 60) {
    oxygenation = 'Mild hypoxemia'
    clinicalNotes.push('PaO2 60-79 mmHg: mild hypoxemia - consider supplemental O2 and monitoring')
  } else if (pao2 >= 40) {
    oxygenation = 'Moderate hypoxemia'
    clinicalNotes.push('PaO2 40-59 mmHg: moderate hypoxemia - supplemental O2 indicated')
  } else {
    oxygenation = 'Severe hypoxemia'
    clinicalNotes.push('PaO2 < 40 mmHg: severe hypoxemia - immediate intervention required')
  }

  return { phStatus, phLabel, co2Status, hco3Status, primaryDisorder, compensation, oxygenation, clinicalNotes }
}

function ValueInput({ label, unit, value, onChange, min, max, step, normal }: {
  label: string; unit: string; value: string; onChange: (v: string) => void
  min: number; max: number; step: number; normal: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-black mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          className="w-full rounded-lg border border-brand-gray-200 px-3 py-2.5 text-black bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
        <span className="text-sm text-brand-gray-400 whitespace-nowrap">{unit}</span>
      </div>
      <p className="text-xs text-brand-gray-400 mt-1">Normal: {normal}</p>
    </div>
  )
}

function StatusBadge({ status }: { status: 'normal' | 'high' | 'low' | 'acidotic' | 'alkalotic' }) {
  const styles = {
    normal: 'bg-green-100 text-green-700',
    high: 'bg-red-100 text-red-700',
    low: 'bg-blue-100 text-blue-700',
    acidotic: 'bg-red-100 text-red-700',
    alkalotic: 'bg-blue-100 text-blue-700',
  }
  const labels = {
    normal: 'Normal', high: 'High', low: 'Low', acidotic: 'Acidotic', alkalotic: 'Alkalotic',
  }
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function ABGInterpreterPage() {
  const [ph, setPh] = useState('7.35')
  const [pco2, setPco2] = useState('40')
  const [hco3, setHco3] = useState('24')
  const [pao2, setPao2] = useState('90')
  const [result, setResult] = useState<ABGResult | null>(null)

  function handleInterpret() {
    const phNum = parseFloat(ph)
    const pco2Num = parseFloat(pco2)
    const hco3Num = parseFloat(hco3)
    const pao2Num = parseFloat(pao2)

    if (isNaN(phNum) || isNaN(pco2Num) || isNaN(hco3Num) || isNaN(pao2Num)) return
    if (phNum < 6.8 || phNum > 7.8) return
    if (pco2Num < 10 || pco2Num > 100) return
    if (hco3Num < 5 || hco3Num > 50) return
    if (pao2Num < 20 || pao2Num > 600) return

    setResult(interpretABG(phNum, pco2Num, hco3Num, pao2Num))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <nav className="text-sm text-brand-gray-400 mb-6">
            <Link href="/tools" className="hover:text-teal-600">Free Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-black">ABG Interpreter</span>
          </nav>

          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black text-black leading-tight">
              Free ABG Interpreter
            </h1>
            <p className="mt-3 text-lg text-brand-gray-500 max-w-2xl mx-auto">
              Enter arterial blood gas values to get an instant acid-base interpretation with clinical context - built for RT students studying for the NBRC.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h2 className="font-bold text-black text-lg mb-6">Enter ABG Values</h2>
              <div className="space-y-5">
                <ValueInput label="pH" unit="" value={ph} onChange={setPh} min={6.8} max={7.8} step={0.01} normal="7.35 - 7.45" />
                <ValueInput label="PaCO2" unit="mmHg" value={pco2} onChange={setPco2} min={10} max={100} step={1} normal="35 - 45 mmHg" />
                <ValueInput label="HCO3" unit="mEq/L" value={hco3} onChange={setHco3} min={5} max={50} step={1} normal="22 - 26 mEq/L" />
                <ValueInput label="PaO2" unit="mmHg" value={pao2} onChange={setPao2} min={20} max={600} step={1} normal="80 - 100 mmHg" />
              </div>
              <button
                onClick={handleInterpret}
                className="btn-primary w-full mt-6 py-3 text-sm font-semibold"
              >
                Interpret ABG
              </button>
            </div>

            <div>
              {result ? (
                <div className="card p-6 space-y-6">
                  <h2 className="font-bold text-black text-lg">Interpretation</h2>

                  <div className="bg-brand-gray-50 rounded-lg p-4">
                    <p className="text-xs text-brand-gray-400 uppercase tracking-wider mb-2">Primary Disorder</p>
                    <p className="text-xl font-black text-black">{result.primaryDisorder}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-brand-gray-50 rounded-lg">
                      <p className="text-xs text-brand-gray-400 mb-1">pH</p>
                      <StatusBadge status={result.phStatus as 'normal' | 'acidotic' | 'alkalotic'} />
                    </div>
                    <div className="text-center p-3 bg-brand-gray-50 rounded-lg">
                      <p className="text-xs text-brand-gray-400 mb-1">PaCO2</p>
                      <StatusBadge status={result.co2Status as 'normal' | 'high' | 'low'} />
                    </div>
                    <div className="text-center p-3 bg-brand-gray-50 rounded-lg">
                      <p className="text-xs text-brand-gray-400 mb-1">HCO3</p>
                      <StatusBadge status={result.hco3Status as 'normal' | 'high' | 'low'} />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-brand-gray-400 uppercase tracking-wider mb-1">Compensation</p>
                    <p className="text-sm text-brand-gray-600">{result.compensation}</p>
                  </div>

                  <div>
                    <p className="text-xs text-brand-gray-400 uppercase tracking-wider mb-1">Oxygenation</p>
                    <p className="text-sm text-brand-gray-600">{result.oxygenation}</p>
                  </div>

                  {result.clinicalNotes.length > 0 && (
                    <div>
                      <p className="text-xs text-brand-gray-400 uppercase tracking-wider mb-2">Clinical Notes</p>
                      <ul className="space-y-2">
                        {result.clinicalNotes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-brand-gray-600">
                            <span className="text-teal-500 mt-0.5 flex-shrink-0">*</span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 border-t border-brand-gray-200">
                    <p className="text-xs text-brand-gray-400">
                      This tool is for educational purposes only. Always correlate ABG results with clinical assessment.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="card p-6 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🫁</div>
                    <p className="text-brand-gray-400 text-sm">Enter ABG values and click Interpret</p>
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-xl border border-teal-400/30 bg-teal-500/10 p-5 text-center">
                <p className="font-bold text-black text-sm">Want to practice ABG questions?</p>
                <p className="text-xs text-brand-gray-500 mt-1">
                  NBRCprep has 600+ flashcards and 30 practice exams covering ABGs and more.
                </p>
                <Link href="/signup" className="btn-primary text-sm px-5 py-2 mt-3 inline-block">
                  Start Free - No Card Required
                </Link>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-black text-black mb-6">How to Interpret ABGs: A Quick Guide</h2>
            <div className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-p:text-brand-gray-600 prose-p:leading-relaxed prose-li:text-brand-gray-600">
              <h3>The 3-Step ABG Interpretation Method</h3>
              <p>
                ABG (arterial blood gas) interpretation is a core NBRC skill. Use this systematic approach:
              </p>
              <ol>
                <li><strong>Evaluate the pH</strong> - Is the patient acidotic (&lt;7.35), alkalotic (&gt;7.45), or normal?</li>
                <li><strong>Check PaCO2 (respiratory component)</strong> - High CO2 causes acidosis; low CO2 causes alkalosis.</li>
                <li><strong>Check HCO3 (metabolic component)</strong> - Low bicarb causes acidosis; high bicarb causes alkalosis.</li>
              </ol>

              <h3>Normal ABG Values</h3>
              <table className="text-sm">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Normal Range</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>pH</td><td>7.35 - 7.45</td><td>-</td></tr>
                  <tr><td>PaCO2</td><td>35 - 45</td><td>mmHg</td></tr>
                  <tr><td>HCO3</td><td>22 - 26</td><td>mEq/L</td></tr>
                  <tr><td>PaO2</td><td>80 - 100</td><td>mmHg</td></tr>
                </tbody>
              </table>

              <h3>Compensation Rules</h3>
              <p>
                The body compensates for acid-base disturbances to bring pH back toward normal. The respiratory system compensates quickly (minutes to hours) by adjusting CO2. The kidneys compensate slowly (hours to days) by adjusting HCO3.
              </p>
              <ul>
                <li><strong>Uncompensated:</strong> pH is abnormal, only one system (respiratory or metabolic) is abnormal</li>
                <li><strong>Partially compensated:</strong> pH is still abnormal, but the other system has started to respond</li>
                <li><strong>Fully compensated:</strong> pH is back to normal range, both systems show abnormal values</li>
              </ul>

              <h3>Common NBRC ABG Scenarios</h3>
              <ul>
                <li><strong>COPD exacerbation:</strong> Respiratory acidosis with metabolic compensation</li>
                <li><strong>Anxiety/hyperventilation:</strong> Acute respiratory alkalosis, uncompensated</li>
                <li><strong>Diabetic ketoacidosis:</strong> Metabolic acidosis with respiratory compensation (Kussmaul breathing)</li>
                <li><strong>Prolonged vomiting:</strong> Metabolic alkalosis</li>
                <li><strong>Mechanical overventilation:</strong> Respiratory alkalosis (iatrogenic)</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
