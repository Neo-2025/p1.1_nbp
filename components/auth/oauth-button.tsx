"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OAuthButtonProps {
  provider: "github"
  className?: string
  redirectTo?: string
}

export default function OAuthButton({
  provider,
  className,
  redirectTo
}: OAuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  // Create Supabase client on demand to avoid build-time errors
  const handleLogin = async () => {
    try {
      setIsLoading(true)
      // Only create the Supabase client when the function is actually called
      const supabase = createClientComponentClient()
      await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: redirectTo || `${window.location.origin}/auth/callback`
        }
      })
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="github"
      className={cn("w-full", className)}
      onClick={handleLogin}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <Github className="mr-2 h-4 w-4" />
      )}
      Continue with GitHub
    </Button>
  )
} 