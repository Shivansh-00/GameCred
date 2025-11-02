"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function TournamentsPage() {
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
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Verified Tournaments</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-pretty">Compete with Confidence</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            All GameCred tournaments use blockchain-verified skill badges and anti-cheat technology to ensure fair
            competition. Climb the leaderboards and earn real prizes.
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Trophy className="w-5 h-5 mr-2" />
            Browse Tournaments
          </Button>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Fair Play Guaranteed</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Anti-Cheat Technology",
                desc: "Real-time anti-cheat detection with behavioral analysis and machine learning",
              },
              {
                icon: Zap,
                title: "Instant Verification",
                desc: "All matches verified on-chain with cryptographic proof and immutable records",
              },
              {
                icon: Trophy,
                title: "Skill Badges",
                desc: "Blockchain-verified achievements you can share anywhere",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Tournament Types</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Weekly Sprints",
                desc: "Fast-paced tournaments running every week with $5K prize pool",
                entry: "Free Entry",
                prize: "$5,000",
                tier: "All Levels",
              },
              {
                title: "Monthly Pro Series",
                desc: "Competitive series for advanced and pro players",
                entry: "$50 Entry",
                prize: "$100,000",
                tier: "Advanced+",
              },
              {
                title: "Seasonal Championships",
                desc: "Massive tournaments with qualifying rounds and championship finale",
                entry: "Invite Only",
                prize: "$500,000",
                tier: "Top 1%",
              },
              {
                title: "Community Cups",
                desc: "Casual tournaments organized by the community",
                entry: "Variable",
                prize: "Varies",
                tier: "All Levels",
              },
            ].map((tournament, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{tournament.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{tournament.desc}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry:</span>
                    <span className="font-medium">{tournament.entry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prize Pool:</span>
                    <span className="font-medium text-primary">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier:</span>
                    <span className="font-medium">{tournament.tier}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  View Tournaments
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournament */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Tournament</h2>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-block mb-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full">
                  <span className="text-sm font-medium text-primary">LIVE NOW</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">GameCred Pro League Season 4</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  The biggest tournament of the year. 256 teams competing for a massive $500K prize pool. Watch live
                  streams, follow your favorite teams, and see if you have what it takes to become champions.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
                    <div className="text-2xl font-bold text-primary">$500K</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Teams Competing</div>
                    <div className="text-2xl font-bold text-primary">256</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Spectators</div>
                    <div className="text-2xl font-bold text-primary">50K+</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Finals Prize</div>
                    <div className="text-2xl font-bold text-primary">$100K</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">Watch Live</Button>
                  <Button variant="outline" className="border-border hover:bg-card bg-transparent px-8">
                    Register Team
                  </Button>
                </div>
              </div>

              <div className="flex-1 bg-background/50 rounded-lg p-6 border border-border/50">
                <h4 className="font-semibold mb-4">Current Standings</h4>
                <div className="space-y-3">
                  {[
                    { rank: 1, team: "Phoenix Rising", wins: "12/12", points: 48 },
                    { rank: 2, team: "Cyber Legends", wins: "11/12", points: 44 },
                    { rank: 3, team: "Elite Squad", wins: "10/12", points: 40 },
                    { rank: 4, team: "Victory Zone", wins: "9/12", points: 36 },
                    { rank: 5, team: "Apex Masters", wins: "9/12", points: 36 },
                  ].map((team) => (
                    <div
                      key={team.rank}
                      className="flex items-center gap-3 pb-3 border-b border-border/30 last:border-b-0"
                    >
                      <div className="text-lg font-bold text-primary w-6">{team.rank}</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{team.team}</div>
                        <div className="text-xs text-muted-foreground">{team.wins}</div>
                      </div>
                      <div className="font-bold text-primary">{team.points}pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join verified tournaments and prove your skills against the best
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
            Explore Tournaments
          </Button>
        </div>
      </section>
    </div>
  )
}
