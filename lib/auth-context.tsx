"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface GamerProfile {
  id: string
  email: string
  username: string
  mainGame: string
  skillLevel: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond"
  favoriteGenres: string[]
  bio: string
  joinDate: string
  verified: boolean
  mmr: number
  winRate: number
  mainRole: string
}

interface AuthContextType {
  user: GamerProfile | null
  isLoading: boolean
  signUp: (email: string, password: string, username: string, mainGame: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  updateProfile: (updates: Partial<GamerProfile>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<GamerProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("gamecred_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const signUp = async (email: string, password: string, username: string, mainGame: string) => {
    // Mock signup - in production, this would call an API
    const newUser: GamerProfile = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      username,
      mainGame,
      skillLevel: "Silver",
      favoriteGenres: [],
      bio: "",
      joinDate: new Date().toISOString(),
      verified: false,
      mmr: 1200,
      winRate: 50,
      mainRole: "Flex",
    }
    setUser(newUser)
    localStorage.setItem("gamecred_user", JSON.stringify(newUser))
  }

  const signIn = async (email: string, password: string) => {
    // Mock signin - in production, this would validate against a backend
    const mockUser: GamerProfile = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      username: email.split("@")[0],
      mainGame: "League of Legends",
      skillLevel: "Gold",
      favoriteGenres: ["MOBA", "Strategy"],
      bio: "Competitive gamer looking for serious teammates",
      joinDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      verified: true,
      mmr: 1850,
      winRate: 58,
      mainRole: "Mid",
    }
    setUser(mockUser)
    localStorage.setItem("gamecred_user", JSON.stringify(mockUser))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("gamecred_user")
  }

  const updateProfile = (updates: Partial<GamerProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem("gamecred_user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signUp, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
