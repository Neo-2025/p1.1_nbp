"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">SS4 Project</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to SS4 p1.1
            </h1>
            <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
              Smart Scale proof of concept with GitHub authentication
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/auth/login">
                <Button className="bg-primary text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
