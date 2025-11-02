"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Download, Share2, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AIResumePage() {
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
        <div className="absolute inset-0 -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">Your Gameplay, Your Resume</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Our advanced AI analyzes thousands of data points from your gameplay to generate a professional gaming
            resume. Showcase your skills to teams, employers, and the community with verified metrics and achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Your Resume
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card px-8 bg-transparent">
              View Sample Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What Gets Analyzed</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Performance Metrics",
                desc: "Win rates, KDA ratios, accuracy, and game-specific statistics tracked in real-time",
              },
              {
                icon: "🎮",
                title: "Playstyle Profile",
                desc: "Your unique playstyle, role preferences, and strategic decision-making patterns",
              },
              {
                icon: "📈",
                title: "Progression & Growth",
                desc: "Track your improvement trajectory and identify areas of strength and development",
              },
              {
                icon: "🏆",
                title: "Achievements & Badges",
                desc: "All verified tournaments, rank achievements, and special accomplishments documented",
              },
              {
                icon: "👥",
                title: "Team Compatibility",
                desc: "Analysis of your effectiveness with different teammate types and compositions",
              },
              {
                icon: "⚡",
                title: "Competition History",
                desc: "Verified match history with anti-cheat validation and opponent caliber ratings",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">
                  {typeof feature.icon === "string" ? feature.icon : <feature.icon className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Resume */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Sample Resume</h2>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Alex Chen</h3>
              <p className="text-muted-foreground mb-4">Verified Professional Gamer | CS2 Specialist</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Profile Rating:</span>
                  <span className="ml-2 font-bold text-primary">9.2/10</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tournaments Played:</span>
                  <span className="ml-2 font-bold text-primary">47</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Win Rate:</span>
                  <span className="ml-2 font-bold text-primary">64%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background/50 rounded p-4">
                <div className="text-sm text-muted-foreground mb-2">Average KDA</div>
                <div className="text-3xl font-bold text-primary">1.87</div>
              </div>
              <div className="bg-background/50 rounded p-4">
                <div className="text-sm text-muted-foreground mb-2">Headshot %</div>
                <div className="text-3xl font-bold text-primary">62%</div>
              </div>
              <div className="bg-background/50 rounded p-4">
                <div className="text-sm text-muted-foreground mb-2">Primary Roles</div>
                <div className="text-lg font-bold text-primary">Rifler, IGL</div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold mb-4">Top Achievements</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">★</span>
                  <span>Champion - GameCred Pro League Season 3 (Prize: $50K)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">★</span>
                  <span>Ranked Top 100 Global Players - Anti-Cheat Verified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">★</span>
                  <span>Perfect Attendance - 45 consecutive monthly tournaments</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" gap-2>
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button size="sm" variant="outline" className="border-border hover:bg-card bg-transparent" gap-2>
                <Share2 className="w-4 h-4" />
                Share Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Gaming Resume?</h2>
          <p className="text-lg text-muted-foreground mb-8">Connect your gaming accounts and let AI do the analysis</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  )
}
