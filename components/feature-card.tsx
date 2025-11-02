"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  ctaText?: string
}

export function FeatureCard({ title, description, icon, href, ctaText = "Explore" }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
          <span className="text-sm font-medium">{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
