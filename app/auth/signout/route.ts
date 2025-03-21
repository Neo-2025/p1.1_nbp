import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function POST() {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  
  await supabase.auth.signOut()
  
  return NextResponse.redirect(new URL("/", new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000")))
} 