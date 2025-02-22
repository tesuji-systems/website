import { getIronSession } from "iron-session/edge"
import type { NextRequest } from "next/server"

export async function getSession(req: NextRequest) {
  const session = await getIronSession(req, {
    cookieName: "bard_session",
    password: process.env.SESSION_PASSWORD!,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  })

  return session
}

