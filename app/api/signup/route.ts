import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, university, graduationYear, targetRole, hoursPerWeek, hardestPart, source } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const record = await prisma.betaSignup.create({
      data: {
        email,
        name,
        university,
        graduationYear,
        targetRole,
        hoursPerWeek,
        hardestPart,
        source,
      },
    })

    return NextResponse.json({ ok: true, id: record.id })
  } catch (err) {
    console.error('signup error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
