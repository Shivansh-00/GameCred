"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Users, Trophy, Brain, Shield, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GameCred
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition">
              How It Works
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute inset-0 -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-primary">Web 4.0 Gaming Platform</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-pretty">
              Your Skills Define Your Worth
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              GameCred connects verified gamers, powers AI-driven skill analysis, and builds communities through
              merit-based competition. Your gameplay, your resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-card px-8 bg-transparent">
                Explore Demo
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
            {[
              { label: "Active Gamers", value: "50K+" },
              { label: "Tournaments", value: "200+" },
              { label: "Verified Profiles", value: "10K+" },
              { label: "Prize Pool", value: "$2M+" },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Powerful Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to showcase your skills, find your team, and compete
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Resume Generator",
                description: "Analyze your gameplay patterns and generate a professional gaming resume automatically",
                href: "/features/ai-resume",
              },
              {
                icon: Users,
                title: "Smart Matchmaking",
                description: "Find teammates with complementary skills and playstyles tailored to your preferences",
                href: "/features/matchmaking",
              },
              {
                icon: Trophy,
                title: "Verified Tournaments",
                description: "Compete in anti-cheat tournaments with blockchain-verified skill badges",
                href: "/features/tournaments",
              },
              {
                icon: Shield,
                title: "Skill Verification",
                description: "Prove your abilities through AI-powered skill exams and verified gameplay metrics",
                href: "/features/tournaments",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Track performance metrics, improvement trends, and competitive rankings in real-time",
                href: "/features/ai-resume",
              },
              {
                icon: Zap,
                title: "Community Hub",
                description: "Connect with players, share strategies, and build your gaming network",
                href: "/features/matchmaking",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <Link key={i} href={feature.href}>
                  <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Getting Started is Simple</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of verified gamers in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                desc: "Sign up and connect your gaming accounts to verify your identity",
              },
              {
                step: "2",
                title: "Take Skill Exams",
                desc: "Complete AI-powered challenges to earn verified skill badges",
              },
              { step: "3", title: "Find Your Team", desc: "Match with players, join tournaments, and start competing" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-background border border-border rounded-lg p-8">
                  <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 bg-primary/20 items-center justify-center rounded-full">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Prove Your Worth?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join GameCred today and start building your verified gaming profile
          </p>
          <Link href="/auth">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold mb-4 text-primary">GameCred</div>
              <p className="text-sm text-muted-foreground">Web 4.0 gaming platform for verified gamers</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/features/ai-resume" className="hover:text-primary transition">
                    AI Resume
                  </Link>
                </li>
                <li>
                  <Link href="/features/matchmaking" className="hover:text-primary transition">
                    Matchmaking
                  </Link>
                </li>
                <li>
                  <Link href="/features/tournaments" className="hover:text-primary transition">
                    Tournaments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 GameCred. All rights reserved. | Web 4.0 Gaming Ecosystem</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
