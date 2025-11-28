import Link from 'next/link'

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl font-bold">You’re in 🎉</h1>
      <p className="mt-4 text-gray-700">Thanks for joining the Founding Cohort. We’ll email you when the beta is ready.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/" className="px-4 py-2 border rounded">Back to home</Link>
        <Link href="/article/demo" className="px-4 py-2 bg-indigo-600 text-white rounded">Try demo again</Link>
      </div>
    </div>
  )
}
