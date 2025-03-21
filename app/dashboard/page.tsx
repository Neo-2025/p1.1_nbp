import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    redirect('/auth/login')
  }
  
  const { user } = session
  
  return (
    <div className="min-h-screen flex flex-col p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">SS4 Dashboard</h1>
        <form action="/auth/signout" method="post">
          <Button type="submit" variant="outline">Sign Out</Button>
        </form>
      </header>
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            
            <div className="space-y-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{user.email}</p>
              </div>
              
              <div className="grid gap-1">
                <p className="text-sm font-medium text-muted-foreground">User ID</p>
                <p className="font-mono text-sm">{user.id}</p>
              </div>
              
              <div className="grid gap-1">
                <p className="text-sm font-medium text-muted-foreground">Provider</p>
                <p>{user.app_metadata?.provider || "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 