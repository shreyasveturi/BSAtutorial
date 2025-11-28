"use client"
import React, { useState } from 'react'

type Props = { source?: string }

export default function SignupForm({ source }: Props) {
  const [values, setValues] = useState({ name: '', email: '', university: '', graduationYear: '', targetRole: '', hoursPerWeek: '', hardestPart: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/signup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...values, source }) })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        console.error(data)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') return <div className="p-6 bg-green-50 rounded-lg">Thanks — you’re in! Check your inbox.</div>

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="name" placeholder="Name (optional)" value={values.name} onChange={onChange} className="p-2 rounded border" />
        <input name="email" placeholder="Email" value={values.email} onChange={onChange} required className="p-2 rounded border" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="university" placeholder="University (optional)" value={values.university} onChange={onChange} className="p-2 rounded border" />
        <select name="graduationYear" value={values.graduationYear} onChange={onChange} className="p-2 rounded border">
          <option value="">Graduation year</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select name="targetRole" value={values.targetRole} onChange={onChange} className="p-2 rounded border">
          <option value="">Target role</option>
          <option>IB</option>
          <option>Markets</option>
          <option>Asset Management</option>
          <option>Consulting</option>
          <option>Other</option>
        </select>
        <select name="hoursPerWeek" value={values.hoursPerWeek} onChange={onChange} className="p-2 rounded border">
          <option value="">Hours/week prepping</option>
          <option>0-2</option>
          <option>3-5</option>
          <option>6-9</option>
          <option>10+</option>
        </select>
      </div>
      <textarea name="hardestPart" placeholder="What's hardest about prep?" value={values.hardestPart} onChange={onChange} className="w-full p-2 rounded border" />
      <div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Join Founding Cohort</button>
        {status === 'loading' && <span className="ml-3 text-sm text-gray-500">Submitting…</span>}
      </div>
    </form>
  )
}
