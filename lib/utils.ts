import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

// Updated to handle all deployment environments including Vercel previews
export function getBaseUrl() {
  // Check if we're running in a browser environment
  if (typeof window !== "undefined") {
    // When in browser, use the current origin
    return window.location.origin;
  }
  
  // For server-side rendering, use environment variables in a specific order of priority
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    return siteUrl;
  }
  
  // Default fallback for local development
  return "http://localhost:3000";
} 