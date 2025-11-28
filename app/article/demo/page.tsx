import ArticleDemo from '../../../components/ArticleDemo'
import Link from 'next/link'

export const metadata = {
  title: 'Interactive Article Demo',
}

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Interactive Article Demo</h1>
        <Link href="/" className="text-indigo-600">Back</Link>
      </div>

      <ArticleDemo />
    </div>
  )
}
