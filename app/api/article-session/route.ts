import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { articleSlug, totalXP, questionsAnswered, questionsCorrect, meta } = body

    if (!articleSlug) {
      return NextResponse.json({ error: 'Missing articleSlug' }, { status: 400 })
    }

    const rec = await prisma.articleSession.create({
      data: {
        articleSlug,
        totalXP: Number(totalXP) || 0,
        questionsAnswered: Number(questionsAnswered) || 0,
        questionsCorrect: Number(questionsCorrect) || 0,
        meta: meta ?? undefined,
      },
    })

    return NextResponse.json({ ok: true, id: rec.id })
  } catch (err) {
    console.error('article-session error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
