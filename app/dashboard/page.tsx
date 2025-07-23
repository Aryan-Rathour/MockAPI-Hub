"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Database, Plus, Settings, LogOut, Activity, Copy, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface User {
  id: number
  name: string
  email: string
  token: string
}

interface CustomAPI {
  id: string
  name: string
  endpoint: string
  method: string
  data: any
  createdAt: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [customAPIs, setCustomAPIs] = useState<CustomAPI[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newAPI, setNewAPI] = useState({
    name: "",
    endpoint: "",
    method: "GET",
    data: "",
  })
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("mockapi_user")
    if (!userData) {
      router.push("/auth")
      return
    }

    setUser(JSON.parse(userData))

    // Load custom APIs from localStorage
    const savedAPIs = localStorage.getItem("custom_apis")
    if (savedAPIs) {
      setCustomAPIs(JSON.parse(savedAPIs))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("mockapi_user")
    localStorage.removeItem("custom_apis")
    router.push("/")
  }

  const handleCreateAPI = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const parsedData = JSON.parse(newAPI.data || "{}")
      const customAPI: CustomAPI = {
        id: Date.now().toString(),
        name: newAPI.name,
        endpoint: newAPI.endpoint,
        method: newAPI.method,
        data: parsedData,
        createdAt: new Date().toISOString(),
      }

      const updatedAPIs = [...customAPIs, customAPI]
      setCustomAPIs(updatedAPIs)
      localStorage.setItem("custom_apis", JSON.stringify(updatedAPIs))

      setNewAPI({ name: "", endpoint: "", method: "GET", data: "" })
      setShowCreateForm(false)
    } catch (error) {
      alert("Invalid JSON data. Please check your input.")
    }
  }

  const handleDeleteAPI = (id: string) => {
    const updatedAPIs = customAPIs.filter((api) => api.id !== id)
    setCustomAPIs(updatedAPIs)
    localStorage.setItem("custom_apis", JSON.stringify(updatedAPIs))
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-500"
      case "POST":
        return "bg-blue-500"
      case "PUT":
        return "bg-yellow-500"
      case "DELETE":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-900 flex">
        <Sidebar className="border-slate-700">
          <SidebarHeader className="border-b border-slate-700 p-4">
            <div className="flex items-center space-x-2">
              <Database className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-white">MockAPI Hub</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-slate-300 hover:text-white hover:bg-slate-700">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-slate-300 hover:text-white hover:bg-slate-700">
                  <Database className="h-4 w-4" />
                  <span>My APIs</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-slate-300 hover:text-white hover:bg-slate-700">
                  <Activity className="h-4 w-4" />
                  <span>Activity</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-slate-300 hover:text-white hover:bg-slate-700">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="border-b border-slate-700 bg-slate-800/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="text-slate-300 hover:text-white" />
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-300">Welcome back, {user.name}</span>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                </div>
              </div>
            </div>
          </header>

          <main className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Custom APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{customAPIs.length}</div>
                  <p className="text-xs text-slate-400">APIs created</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">API Calls</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,234</div>
                  <p className="text-xs text-slate-400">This month</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <p className="text-xs text-slate-400">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Custom APIs Section */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">My Custom APIs</CardTitle>
                    <CardDescription className="text-slate-300">
                      Create and manage your personal mock APIs
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create API
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showCreateForm && (
                  <Card className="bg-slate-700 border-slate-600 mb-6">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Create New API</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateAPI} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="api-name" className="text-slate-300">
                              API Name
                            </Label>
                            <Input
                              id="api-name"
                              value={newAPI.name}
                              onChange={(e) => setNewAPI({ ...newAPI, name: e.target.value })}
                              placeholder="My Custom API"
                              className="bg-slate-600 border-slate-500 text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="api-endpoint" className="text-slate-300">
                              Endpoint
                            </Label>
                            <Input
                              id="api-endpoint"
                              value={newAPI.endpoint}
                              onChange={(e) => setNewAPI({ ...newAPI, endpoint: e.target.value })}
                              placeholder="/api/my-data"
                              className="bg-slate-600 border-slate-500 text-white"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="api-data" className="text-slate-300">
                            Response Data (JSON)
                          </Label>
                          <Textarea
                            id="api-data"
                            value={newAPI.data}
                            onChange={(e) => setNewAPI({ ...newAPI, data: e.target.value })}
                            placeholder='{"message": "Hello World", "data": []}'
                            className="bg-slate-600 border-slate-500 text-white min-h-[100px]"
                            required
                          />
                        </div>
                        <div className="flex space-x-2">
                          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                            Create API
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowCreateForm(false)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {customAPIs.length === 0 ? (
                  <div className="text-center py-8">
                    <Database className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-300 mb-2">No custom APIs yet</h3>
                    <p className="text-slate-400 mb-4">Create your first custom API to get started</p>
                    <Button onClick={() => setShowCreateForm(true)} className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First API
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {customAPIs.map((api) => (
                      <Card key={api.id} className="bg-slate-700 border-slate-600">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge className={`${getMethodColor(api.method)} text-white text-xs`}>
                                  {api.method}
                                </Badge>
                                <h3 className="text-white font-medium">{api.name}</h3>
                              </div>
                              <code className="text-purple-300 text-sm">
                                https://mockapi-hub.vercel.app{api.endpoint}
                              </code>
                              <p className="text-slate-400 text-xs mt-1">
                                Created {new Date(api.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() =>
                                  navigator.clipboard.writeText(`https://mockapi-hub.vercel.app${api.endpoint}`)
                                }
                                className="text-slate-400 hover:text-white"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteAPI(api.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
