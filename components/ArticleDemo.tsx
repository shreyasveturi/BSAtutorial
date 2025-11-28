"use client"
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

type Section = {
  id: string
  title: string
  text: string
  terms: { term: string; def: string }[]
  questions: any[]
}

const ARTICLE: { title: string; slug: string; sections: Section[] } = {
  title: 'Central bank surprises markets with a faster-than-expected rate path',
  slug: 'demo-central-bank',
  sections: [
    {
      id: 's1',
      title: 'Headline and context',
      text: 'The central bank signalled that it expects to raise rates more aggressively than previously guided. Markets reacted quickly — bond yields rose and growth stocks sold off.',
      terms: [
        { term: 'Rate hike', def: 'An increase in the central bank policy rate which raises borrowing costs.' },
        { term: 'Bond yield', def: 'The return investors require to hold a bond; when yields rise, bond prices fall.' },
      ],
      questions: [
        { type: 'mcq', prompt: 'Which asset is most likely to outperform in the short term after a surprise rate hike?', options: ['Long-dated growth stocks', 'Short-dated corporate bonds', 'Bank stocks', 'High-duration tech ETFs'], answer: 2 },
      ],
    },
    {
      id: 's2',
      title: 'Market reaction',
      text: 'Banks saw an initial lift due to higher net interest margins, while long-duration tech names drew selling pressure as discount rates rose.',
      terms: [
        { term: 'Net interest margin', def: 'Banks earn the spread between lending and deposit rates.' },
        { term: 'Duration', def: 'A measure of sensitivity of a security’s price to interest rate changes.' },
      ],
      questions: [
        { type: 'text', prompt: 'In 1-2 sentences: why might bank stocks react differently from growth stocks?', modelAnswer: 'Banks benefit from higher rates through wider interest margins; growth stocks are hurt because their future earnings are discounted more heavily.' },
      ],
    },
    {
      id: 's3',
      title: 'Implications for valuation',
      text: 'Higher discount rates compress present values of future cash flows, which disproportionately affects companies with earnings far in the future.',
      terms: [
        { term: 'Discount rate', def: 'The rate used to convert future cash flows into present value.' },
      ],
      questions: [
        { type: 'classify', prompt: 'Classify the following statements', items: [
          { id: 'i1', text: 'A rise in rates improves banks’ profitability.' },
          { id: 'i2', text: 'A rise in rates makes long-term growth projects cheaper.' },
        ] },
      ],
    },
  ],
}

export default function ArticleDemo() {
  const [idx, setIdx] = useState(0)
  const [xp, setXp] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const section = ARTICLE.sections[idx]

  const handleMCQ = (choice: number, q: any) => {
    setAnswered(a => a + 1)
    if (choice === q.answer) {
      setXp(x => x + 10)
      setCorrect(c => c + 1)
    }
    next()
  }

  const handleText = (value: string, q: any) => {
    setAnswered(a => a + 1)
    setXp(x => x + 5)
    next()
  }

  const handleClassify = (answers: Record<string, string>, q: any) => {
    setAnswered(a => a + Object.keys(answers).length)
    // naive: award XP for each non-empty
    const nonEmpty = Object.values(answers).filter(Boolean).length
    setXp(x => x + nonEmpty * 5)
    next()
  }

  const next = () => {
    if (idx < ARTICLE.sections.length - 1) setIdx(i => i + 1)
    else finish()
  }

  const finish = async () => {
    // save session
    try {
      await fetch('/api/article-session', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ articleSlug: ARTICLE.slug, totalXP: xp, questionsAnswered: answered, questionsCorrect: correct }) })
    } catch (err) {
      console.error('save session', err)
    }
    // show simple completion UI
    alert(`Done! XP: ${xp} — you answered ${answered} questions.`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{ARTICLE.title}</h2>
        <div className="w-1/3"><ProgressBar value={xp} max={100} /></div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-semibold">Checkpoint {idx + 1} — {section.title}</h3>
        <p className="mt-2 text-gray-700">{section.text}</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded">
            <h4 className="font-semibold">Key terms & context</h4>
            <ul className="mt-2 space-y-2">
              {section.terms.map(t => (
                <li key={t.term}><strong>{t.term}:</strong> {t.def}</li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-gray-50 rounded">
            <h4 className="font-semibold">Questions</h4>
            <div className="mt-2">
              {section.questions.map((q, i) => (
                <div key={i} className="py-2">
                  <p className="font-medium">{q.prompt}</p>
                  {q.type === 'mcq' && (
                    <div className="mt-2 space-y-2">
                      {q.options.map((opt: string, j: number) => (
                        <button key={j} onClick={() => handleMCQ(j, q)} className="block text-left w-full p-2 border rounded">{opt}</button>
                      ))}
                    </div>
                  )}

                  {q.type === 'text' && (
                    <TextAnswer onSubmit={(val: string) => handleText(val, q)} model={q.modelAnswer} />
                  )}

                  {q.type === 'classify' && (
                    <ClassifyQuestion items={q.items} onSubmit={(ans: any) => handleClassify(ans, q)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={() => idx > 0 && setIdx(i => i - 1)} className="px-4 py-2 border rounded">Back</button>
        <div className="text-sm text-gray-600">Checkpoint {idx + 1} of {ARTICLE.sections.length}</div>
        <button onClick={next} className="px-4 py-2 bg-indigo-600 text-white rounded">Next</button>
      </div>
    </div>
  )
}

function TextAnswer({ onSubmit, model }: { onSubmit: (v: string) => void; model?: string }) {
  const [v, setV] = useState('')
  return (
    <div className="mt-2">
      <textarea value={v} onChange={e => setV(e.target.value)} className="w-full p-2 rounded border" placeholder="Write 1-2 sentences" />
      <div className="flex items-center gap-3 mt-2">
        <button onClick={() => onSubmit(v)} className="px-3 py-1 bg-green-600 text-white rounded">Submit</button>
        {model && <details className="text-sm text-gray-600"><summary className="cursor-pointer">Model answer</summary><div className="mt-2">{model}</div></details>}
      </div>
    </div>
  )
}

function ClassifyQuestion({ items, onSubmit }: { items: any[]; onSubmit: (ans: any) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const opts = ['Bullish', 'Bearish', 'More info needed']
  return (
    <div className="mt-2 space-y-3">
      {items.map((it: any) => (
        <div key={it.id} className="flex items-center gap-3">
          <div className="flex-1">{it.text}</div>
          <select className="p-1 border rounded" value={answers[it.id] ?? ''} onChange={(e) => setAnswers(a => ({ ...a, [it.id]: e.target.value }))}>
            <option value="">Choose</option>
            {opts.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      ))}
      <div>
        <button onClick={() => onSubmit(answers)} className="px-3 py-1 bg-green-600 text-white rounded">Submit classifications</button>
      </div>
    </div>
  )
}
