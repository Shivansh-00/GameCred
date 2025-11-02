"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    mainGame: "",
  })
  const [error, setError] = useState("")
  const { signUp, signIn } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      if (isSignUp) {
        if (!formData.username || !formData.mainGame) {
          setError("Please fill in all fields")
          return
        }
        await signUp(formData.email, formData.password, formData.username, formData.mainGame)
      } else {
        await signIn(formData.email, formData.password)
      }
      router.push("/dashboard")
    } catch (err) {
      setError("Authentication failed")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GameCred
            </h1>
          </Link>

          <h2 className="text-2xl font-bold text-white mb-2">{isSignUp ? "Join GameCred" : "Welcome Back"}</h2>
          <p className="text-slate-400 mb-6">
            {isSignUp ? "Create your verified gamer profile" : "Sign in to your account"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition"
              />
            </div>

            {isSignUp && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="ProGamer420"
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Main Game</label>
                  <select
                    name="mainGame"
                    value={formData.mainGame}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition"
                  >
                    <option value="">Select a game</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="Valorant">Valorant</option>
                    <option value="CS2">CS2</option>
                    <option value="Dota 2">Dota 2</option>
                    <option value="Overwatch 2">Overwatch 2</option>
                    <option value="Apex Legends">Apex Legends</option>
                  </select>
                </div>
              </>
            )}

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">{error}</div>
            )}

            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError("")
                setFormData({ email: "", password: "", username: "", mainGame: "" })
              }}
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
