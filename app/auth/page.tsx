"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Mail, Lock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      localStorage.setItem(
        "mockapi_user",
        JSON.stringify({
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          token: "mock-jwt-token",
        }),
      )
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup
    setTimeout(() => {
      localStorage.setItem(
        "mockapi_user",
        JSON.stringify({
          id: 2,
          name: "New User",
          email: "newuser@example.com",
          token: "mock-jwt-token",
        }),
      )
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Database className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">MockAPI Hub</span>
          </Link>
          <p className="text-slate-300">Access your personal API dashboard</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-300">Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                <TabsTrigger value="login" className="text-slate-300 data-[state=active]:text-white">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="text-slate-300 data-[state=active]:text-white">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-slate-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-slate-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
