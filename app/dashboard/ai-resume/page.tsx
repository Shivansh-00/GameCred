"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2, Zap } from "lucide-react"

interface ResumeData {
  id: string
  generatedAt: string
  gameStats: {
    mainGame: string
    rank: string
    mmr: number
    winRate: number
    hoursPlayed: number
    totalMatches: number
  }
  strengths: string[]
  roleExpertise: {
    role: string
    proficiency: number
    matches: number
  }[]
  achievements: {
    title: string
    date: string
    rarity: string
  }[]
}

export default function AIResumePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [resume, setResume] = useState<ResumeData | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  const generateResume = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mockResume: ResumeData = {
      id: Math.random().toString(36).substr(2, 9),
      generatedAt: new Date().toISOString(),
      gameStats: {
        mainGame: user!.mainGame,
        rank: user!.skillLevel,
        mmr: user!.mmr,
        winRate: user!.winRate,
        hoursPlayed: 1240,
        totalMatches: 847,
      },
      strengths: [
        "Exceptional game sense and map awareness",
        "Consistent mechanical skill and shot accuracy",
        "Strong communication and team coordination",
        "Adaptable playstyle across multiple champions",
        "High performance under pressure",
      ],
      roleExpertise: [
        { role: "Mid Lane", proficiency: 92, matches: 324 },
        { role: "ADC", proficiency: 78, matches: 156 },
        { role: "Support", proficiency: 65, matches: 89 },
      ],
      achievements: [
        { title: "Promotion to Gold IV", date: "2025-01-15", rarity: "Common" },
        { title: "10-Game Win Streak", date: "2025-01-22", rarity: "Rare" },
        { title: "2000+ MMR Milestone", date: "2025-02-01", rarity: "Epic" },
        { title: "Pentakill Achievement", date: "2025-02-10", rarity: "Legendary" },
      ],
    }

    setResume(mockResume)
    setIsGenerating(false)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">AI Resume Generator</h1>
          <div className="w-32" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!resume ? (
          <div className="text-center py-20">
            <div className="inline-block mb-6 p-4 bg-cyan-500/10 border border-cyan-500/50 rounded-full">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Generate Your AI-Powered Resume</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Our AI analyzes your gameplay patterns, match history, and performance metrics to create a professional
              resume highlighting your strengths, expertise, and achievements.
            </p>
            <Button
              onClick={generateResume}
              disabled={isGenerating}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
            >
              {isGenerating ? "Analyzing Your Gameplay..." : "Generate Resume"}
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Resume Header */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{user.username}</h2>
                  <p className="text-slate-400">Professional Gaming Resume</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Generated: {new Date(resume.generatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Main Game", value: resume.gameStats.mainGame },
                { label: "Rank", value: resume.gameStats.rank },
                { label: "MMR", value: resume.gameStats.mmr },
                { label: "Win Rate", value: `${resume.gameStats.winRate}%` },
                { label: "Hours Played", value: resume.gameStats.hoursPlayed },
                { label: "Total Matches", value: resume.gameStats.totalMatches },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4"
                >
                  <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Strengths</h3>
              <ul className="space-y-3">
                {resume.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Role Expertise */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Role Expertise</h3>
              <div className="space-y-6">
                {resume.roleExpertise.map((role, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold">{role.role}</span>
                      <span className="text-cyan-400 font-bold">{role.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                        style={{ width: `${role.proficiency}%` }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">{role.matches} ranked matches</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Notable Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resume.achievements.map((achievement, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4 border-l-4 border-cyan-500">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold">{achievement.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          achievement.rarity === "Common"
                            ? "bg-slate-500/20 text-slate-300"
                            : achievement.rarity === "Rare"
                              ? "bg-blue-500/20 text-blue-300"
                              : achievement.rarity === "Epic"
                                ? "bg-purple-500/20 text-purple-300"
                                : "bg-amber-500/20 text-amber-300"
                        }`}
                      >
                        {achievement.rarity}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{new Date(achievement.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setResume(null)} className="bg-slate-700 hover:bg-slate-600 text-white px-8">
                Generate New Resume
              </Button>
              <Link href="/dashboard">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
