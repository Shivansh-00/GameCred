"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Zap } from "lucide-react"

interface Tournament {
  id: string
  name: string
  game: string
  status: "Open" | "Active" | "Completed"
  prizePool: string
  participants: number
  maxParticipants: number
  format: string
  startDate: string
  region: string
}

const mockTournaments: Tournament[] = [
  {
    id: "1",
    name: "Pro League Season 7",
    game: "League of Legends",
    status: "Active",
    prizePool: "$50,000",
    participants: 64,
    maxParticipants: 128,
    format: "5v5 Elimination",
    startDate: "2025-02-01",
    region: "Global",
  },
  {
    id: "2",
    name: "Valorant World Championship",
    game: "Valorant",
    status: "Open",
    prizePool: "$100,000",
    participants: 32,
    maxParticipants: 64,
    format: "5v5 Elimination",
    startDate: "2025-03-15",
    region: "Global",
  },
  {
    id: "3",
    name: "CS2 Regional Showdown",
    game: "CS2",
    status: "Open",
    prizePool: "$25,000",
    participants: 24,
    maxParticipants: 32,
    format: "5v5 Best of 3",
    startDate: "2025-02-20",
    region: "NA",
  },
  {
    id: "4",
    name: "Dota 2 International Qualifiers",
    game: "Dota 2",
    status: "Active",
    prizePool: "$150,000",
    participants: 48,
    maxParticipants: 128,
    format: "Round Robin + Playoffs",
    startDate: "2025-01-15",
    region: "Global",
  },
]

export default function TournamentsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    } else {
      setTournaments(mockTournaments)
    }
  }, [user, router])

  if (!user) return null

  const filteredTournaments = filter === "open" ? tournaments.filter((t) => t.status === "Open") : tournaments

  const getStatusColor = (status: string) => {
    if (status === "Open") return "bg-green-500/20 text-green-300"
    if (status === "Active") return "bg-blue-500/20 text-blue-300"
    return "bg-slate-500/20 text-slate-300"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Tournaments</h1>
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
            All Tournaments
          </Button>
          <Button
            onClick={() => setFilter("open")}
            className={
              filter === "open"
                ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }
          >
            Open for Registration
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{tournament.name}</h3>
                  <p className="text-slate-400 text-sm">{tournament.game}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(tournament.status)}`}>
                  {tournament.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-700/50">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Prize Pool</p>
                  <p className="text-xl font-bold text-amber-400">{tournament.prizePool}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Format</p>
                  <p className="text-sm text-white font-semibold">{tournament.format}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">
                      {tournament.participants}/{tournament.maxParticipants} Teams
                    </span>
                  </div>
                  <div className="w-32 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full"
                      style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Starts: {new Date(tournament.startDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">View Details</Button>
                {tournament.status === "Open" && (
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">Register Team</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
