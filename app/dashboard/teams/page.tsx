"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, MapPin, Trophy } from "lucide-react"

interface Team {
  id: string
  name: string
  game: string
  memberCount: number
  maxMembers: number
  rank: string
  region: string
  wins: number
}

const mockTeams: Team[] = [
  {
    id: "1",
    name: "Phoenix Rising",
    game: "League of Legends",
    memberCount: 4,
    maxMembers: 5,
    rank: "Gold",
    region: "NA",
    wins: 24,
  },
  {
    id: "2",
    name: "Cyber Knights",
    game: "Valorant",
    memberCount: 3,
    maxMembers: 5,
    rank: "Platinum",
    region: "EU",
    wins: 31,
  },
  {
    id: "3",
    name: "Storm Riders",
    game: "CS2",
    memberCount: 2,
    maxMembers: 5,
    rank: "Silver",
    region: "NA",
    wins: 12,
  },
]

export default function TeamsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [teams, setTeams] = useState<Team[]>([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    } else {
      setTeams(mockTeams)
    }
  }, [user, router])

  if (!user) return null

  const filteredTeams = filter === "looking" ? teams.filter((t) => t.memberCount < t.maxMembers) : teams

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Find Teams</h1>
          <div className="w-32" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex gap-3">
          <Button
            onClick={() => setFilter("all")}
            className={
              filter === "all"
                ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }
          >
            All Teams
          </Button>
          <Button
            onClick={() => setFilter("looking")}
            className={
              filter === "looking"
                ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }
          >
            Looking for Members
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{team.name}</h3>
                  <p className="text-slate-400 text-sm">{team.game}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    team.rank === "Gold"
                      ? "bg-amber-500/20 text-amber-300"
                      : team.rank === "Platinum"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-slate-500/20 text-slate-300"
                  }`}
                >
                  {team.rank}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4" />
                  <span>
                    {team.memberCount}/{team.maxMembers} Members
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4" />
                  <span>{team.region} Region</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Trophy className="w-4 h-4" />
                  <span>{team.wins} Tournament Wins</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">View Details</Button>
                {team.memberCount < team.maxMembers && (
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">Apply</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
