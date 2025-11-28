import SignupForm from '../../components/SignupForm'
import Link from 'next/link'

export const metadata = {
  title: 'Join the Founding Cohort',
}

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-3">Join the Founding Cohort</h1>
      <p className="text-gray-600 mb-6">Get free premium access for 6 months and help shape the product.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Why join?</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Daily missions from real news</li>
            <li>Timed duels & interview-style scenarios</li>
            <li>Priority access to features & mock interviews</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Sign up</h3>
          <SignupForm source="beta-page" />
        </div>
      </div>

      <div className="mt-6">
        <Link href="/article/demo" className="text-indigo-600">Try the demo article</Link>
      </div>
    </div>
  )
}
