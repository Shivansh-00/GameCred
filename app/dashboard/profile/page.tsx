"use client"

import type React from "react"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProfilePage() {
  const { user, updateProfile, signOut } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(user || {})

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    } else {
      setFormData(user)
    }
  }, [user, router])

  if (!user) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    updateProfile(formData)
    setIsEditing(false)
  }

  const skillColors = {
    Bronze: "bg-amber-900/20 border-amber-700/50 text-amber-400",
    Silver: "bg-slate-600/20 border-slate-500/50 text-slate-300",
    Gold: "bg-amber-500/20 border-amber-400/50 text-amber-300",
    Platinum: "bg-cyan-500/20 border-cyan-400/50 text-cyan-300",
    Diamond: "bg-purple-500/20 border-purple-400/50 text-purple-300",
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
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <div className="w-32" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {!isEditing ? (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{user.username}</h2>
                  <p className="text-slate-400">{user.email}</p>
                </div>
                <Button onClick={() => setIsEditing(true)} className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Rank</p>
                  <p className="text-xl font-bold text-cyan-400">{user.skillLevel}</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">MMR</p>
                  <p className="text-xl font-bold text-green-400">{user.mmr}</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Win Rate</p>
                  <p className="text-xl font-bold text-blue-400">{user.winRate}%</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Main Role</p>
                  <p className="text-xl font-bold text-purple-400">{user.mainRole}</p>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                <p className="text-slate-300">{user.bio || "No bio added yet"}</p>
              </div>

              <div className="border-t border-slate-700/50 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
                <div className="space-y-3">
                  <p className="text-slate-300">
                    <span className="text-slate-400">Main Game:</span> {user.mainGame}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-400">Member Since:</span> {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-400">Verification:</span>{" "}
                    {user.verified ? (
                      <span className="text-green-400">Verified</span>
                    ) : (
                      <span className="text-yellow-400">Pending</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSave()
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell other players about yourself..."
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Main Role</label>
                <select
                  name="mainRole"
                  value={formData.mainRole}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="Flex">Flex</option>
                  <option value="Top">Top</option>
                  <option value="Mid">Mid</option>
                  <option value="ADC">ADC</option>
                  <option value="Support">Support</option>
                  <option value="Carry">Carry</option>
                  <option value="Support">Support</option>
                  <option value="Tank">Tank</option>
                </select>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">
                  Save Changes
                </Button>
                <Button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}
