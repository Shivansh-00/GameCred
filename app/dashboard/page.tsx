"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  if (!user) return null

  const skillColors = {
    Bronze: "text-amber-700",
    Silver: "text-slate-400",
    Gold: "text-amber-400",
    Platinum: "text-cyan-400",
    Diamond: "text-purple-400",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GameCred
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard/profile" className="text-slate-300 hover:text-white transition">
              Profile
            </Link>
            <Link href="/dashboard/teams" className="text-slate-300 hover:text-white transition">
              Teams
            </Link>
            <Link href="/dashboard/tournaments" className="text-slate-300 hover:text-white transition">
              Tournaments
            </Link>
            <Button
              onClick={() => {
                signOut()
                router.push("/")
              }}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50"
            >
              Sign Out
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <span className="text-2xl font-bold text-white">{user.username.charAt(0).toUpperCase()}</span>
              </div>
              <h2 className="text-xl font-bold text-white text-center mb-1">{user.username}</h2>
              <p className="text-slate-400 text-center text-sm mb-4">{user.email}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Rank</span>
                  <span className={`font-semibold ${skillColors[user.skillLevel]}`}>{user.skillLevel}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">MMR</span>
                  <span className="text-cyan-400 font-semibold">{user.mmr}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Win Rate</span>
                  <span className="text-green-400 font-semibold">{user.winRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Role</span>
                  <span className="text-blue-400 font-semibold">{user.mainRole}</span>
                </div>
              </div>
              {user.verified && (
                <div className="mt-4 px-3 py-2 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-xs font-semibold text-center">
                  ✓ Verified Account
                </div>
              )}
              <Link href="/dashboard/profile" className="w-full mt-6">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Edit Profile</Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">Main Game</p>
                <p className="text-xl font-bold text-white">{user.mainGame}</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">Member Since</p>
                <p className="text-xl font-bold text-white">{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <Link href="/features/matchmaking">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white h-12">
                  Find Team
                </Button>
              </Link>
              <Link href="/features/ai-resume">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-12">
                  AI Resume
                </Button>
              </Link>
              <Link href="/features/tournaments">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white h-12">
                  Tournaments
                </Button>
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                  <div>
                    <p className="text-white font-medium">Matched with Team Nexus</p>
                    <p className="text-slate-400 text-sm">2 days ago</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/50 rounded-full text-green-400 text-xs font-semibold">
                    Pending
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                  <div>
                    <p className="text-white font-medium">Generated AI Resume</p>
                    <p className="text-slate-400 text-sm">1 week ago</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/50 rounded-full text-blue-400 text-xs font-semibold">
                    Complete
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Joined Pro League Tournament</p>
                    <p className="text-slate-400 text-sm">2 weeks ago</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/50 rounded-full text-amber-400 text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
