"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Zap, Filter } from "lucide-react"
import Link from "next/link"

export default function MatchmakingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GameCred
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Smart Matchmaking</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">Find Your Perfect Team</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Our intelligent matching algorithm analyzes playstyles, skill levels, communication, and competitive goals
            to connect you with teammates who bring out your best.
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Zap className="w-5 h-5 mr-2" />
            Start Matching
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How Smart Matching Works</h2>

          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Skill Assessment",
                desc: "We analyze your ranked stats, tournament history, and verified achievements to determine your exact skill tier",
              },
              {
                num: "2",
                title: "Playstyle Analysis",
                desc: "Your unique playstyle, preferred roles, and decision-making patterns are mapped to find compatible players",
              },
              {
                num: "3",
                title: "Goal Alignment",
                desc: "Match with players who share your competitive level, availability, and team objectives",
              },
              {
                num: "4",
                title: "Compatibility Score",
                desc: "Get a detailed compatibility report showing team synergy potential and communication fit",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-lg font-bold text-primary border border-primary/30">
                    {item.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Matching Filters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Skill Tier",
                desc: "Filter by exact rank range - from Rookie to Pro tier",
              },
              {
                title: "Role Preference",
                desc: "Match IGL to IGL, Fragger to Fragger, or complementary roles",
              },
              {
                title: "Playstyle",
                desc: "Aggressive, passive, supportive, or mixed team compositions",
              },
              {
                title: "Time Zone",
                desc: "Find teammates in compatible time zones for consistent schedules",
              },
              {
                title: "Tournament Focus",
                desc: "Casual, semi-pro, or professional competitive aspirations",
              },
              {
                title: "Game Specialization",
                desc: "Filter by specific games and game modes you want to master",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Filter className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Matches */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Your Recommended Matches</h2>

          <div className="space-y-4">
            {[
              {
                name: "Jordan",
                role: "In-Game Leader",
                tier: "Pro",
                compatibility: 98,
                stats: "2.1 KDA • 58% Win Rate",
              },
              {
                name: "Maya",
                role: "Rifler",
                tier: "Advanced",
                compatibility: 95,
                stats: "1.9 KDA • 62% Win Rate",
              },
              {
                name: "Kai",
                role: "Support",
                tier: "Advanced",
                compatibility: 92,
                stats: "1.2 KDA • 65% Win Rate",
              },
            ].map((match, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    {match.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{match.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {match.role} • {match.tier} Tier
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{match.stats}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-3">
                    <div className="text-sm text-muted-foreground">Compatibility</div>
                    <div className="text-3xl font-bold text-primary">{match.compatibility}%</div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Teammates?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Build championship teams with verified, compatible players
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
            Start Matching Now
          </Button>
        </div>
      </section>
    </div>
  )
}
