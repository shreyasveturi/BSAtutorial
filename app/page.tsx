'use client'

import Link from 'next/link'
import SignupForm from '@/components/SignupForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Gamified finance prep for internship applicants</h1>
          <p className="mt-3 text-gray-700">Turn market news into interactive missions, XP, and interview-ready insights.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-6">
            <section className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">Try the interactive article demo</h2>
              <p className="text-gray-600 mt-2">Read a short news article broken into checkpoints, learn key terms, answer scenario questions, and earn XP.</p>
              <div className="mt-4">
                <Link href="/article/demo" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded">Try the demo</Link>
              </div>
            </section>

            <section className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">What we do</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Explain key terms in plain English</li>
                <li>Ask interview-style scenario questions</li>
                <li>Award XP and track progress</li>
              </ul>
            </section>

            <section className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">Founding Cohort</h2>
              <p className="text-gray-700 mt-2">Join the founding cohort to get 6 months free premium access, early features, and priority mock interviews.</p>
              <div className="mt-4">
                <Link href="/beta" className="inline-block px-4 py-2 border rounded">Join the cohort</Link>
              </div>
            </section>
          </div>

          <aside className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Sign up for the beta</h3>
            <div className="mt-4"><SignupForm source="home" /></div>
          </aside>
        </div>
      </div>
    </div>
  )
}
