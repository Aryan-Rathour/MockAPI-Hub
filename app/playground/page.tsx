"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Copy, Database, Users, ShoppingCart, FileText, Shield, Cloud, CheckSquare } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const mockAPIs = {
  users: [
    {
      id: "get-users",
      method: "GET",
      endpoint: "/api/users",
      description: "Get all users",
      response: [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://i.pravatar.cc/150?img=2" },
      ],
    },
    {
      id: "get-user",
      method: "GET",
      endpoint: "/api/users/{id}",
      description: "Get user by ID",
      response: { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://i.pravatar.cc/150?img=1" },
    },
    {
      id: "create-user",
      method: "POST",
      endpoint: "/api/users",
      description: "Create new user",
      response: { id: 3, name: "New User", email: "new@example.com", created: true },
    },
  ],
  products: [
    {
      id: "get-products",
      method: "GET",
      endpoint: "/api/products",
      description: "Get all products",
      response: [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
        { id: 2, name: "Coffee Mug", price: 12.99, category: "Home", inStock: true },
      ],
    },
    {
      id: "get-product",
      method: "GET",
      endpoint: "/api/products/{id}",
      description: "Get product by ID",
      response: { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
    },
  ],
  posts: [
    {
      id: "get-posts",
      method: "GET",
      endpoint: "/api/posts",
      description: "Get all posts",
      response: [
        { id: 1, title: "Hello World", content: "This is my first post", author: "John Doe", createdAt: "2024-01-15" },
        {
          id: 2,
          title: "React Tips",
          content: "Some useful React tips",
          author: "Jane Smith",
          createdAt: "2024-01-16",
        },
      ],
    },
  ],
}

const categoryIcons = {
  users: Users,
  products: ShoppingCart,
  posts: FileText,
  auth: Shield,
  weather: Cloud,
  todos: CheckSquare,
}

export default function PlaygroundPage() {
  const [selectedCategory, setSelectedCategory] = useState("users")
  const [selectedAPI, setSelectedAPI] = useState(mockAPIs.users[0])
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const categoryAPIs = mockAPIs[selectedCategory as keyof typeof mockAPIs]
    if (categoryAPIs && categoryAPIs.length > 0) {
      setSelectedAPI(categoryAPIs[0])
      setResponse("")
    }
  }, [selectedCategory])

  const handleTryAPI = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResponse(JSON.stringify(selectedAPI.response, null, 2))
      setLoading(false)
    }, 1000)
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

  const generateCodeSnippet = (type: string) => {
    const baseUrl = "https://mockapi-hub.vercel.app"
    const url = `${baseUrl}${selectedAPI.endpoint}`

    switch (type) {
      case "javascript":
        return `fetch('${url}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
      case "curl":
        return `curl -X ${selectedAPI.method} \\
  -H "Content-Type: application/json" \\
  "${url}"`
      case "python":
        return `import requests

response = requests.${selectedAPI.method.toLowerCase()}('${url}')
data = response.json()
print(data)`
      default:
        return ""
    }
  }

  const IconComponent = categoryIcons[selectedCategory as keyof typeof categoryIcons] || Database

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">API Playground</h1>
          <p className="text-slate-300 text-lg">Test and explore our mock APIs interactively</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* API Selection */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <IconComponent className="h-5 w-5" />
                  <span>Select API</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="users">Users</SelectItem>
                      <SelectItem value="products">Products</SelectItem>
                      <SelectItem value="posts">Posts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-300 mb-2 block">Endpoints</label>
                  {mockAPIs[selectedCategory as keyof typeof mockAPIs]?.map((api) => (
                    <div
                      key={api.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedAPI.id === api.id
                          ? "bg-purple-600/20 border border-purple-600/30"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                      onClick={() => setSelectedAPI(api)}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className={`${getMethodColor(api.method)} text-white text-xs`}>{api.method}</Badge>
                        <code className="text-sm text-slate-300">{api.endpoint}</code>
                      </div>
                      <p className="text-xs text-slate-400">{api.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Testing */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Test API</CardTitle>
                  <Button onClick={handleTryAPI} disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                    <Play className="h-4 w-4 mr-2" />
                    {loading ? "Testing..." : "Try It"}
                  </Button>
                </div>
                <CardDescription className="text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getMethodColor(selectedAPI.method)} text-white`}>{selectedAPI.method}</Badge>
                    <code className="text-purple-300">https://mockapi-hub.vercel.app{selectedAPI.endpoint}</code>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="response" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-slate-700">
                    <TabsTrigger value="response" className="text-slate-300 data-[state=active]:text-white">
                      Response
                    </TabsTrigger>
                    <TabsTrigger value="javascript" className="text-slate-300 data-[state=active]:text-white">
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="curl" className="text-slate-300 data-[state=active]:text-white">
                      cURL
                    </TabsTrigger>
                    <TabsTrigger value="python" className="text-slate-300 data-[state=active]:text-white">
                      Python
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="response" className="mt-4">
                    <div className="bg-slate-900 rounded-lg p-4 min-h-[300px]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Response</span>
                        {response && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => navigator.clipboard.writeText(response)}
                            className="text-slate-400 hover:text-white"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <pre className="text-green-400 text-sm overflow-auto">
                        {response || 'Click "Try It" to see the response'}
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="javascript" className="mt-4">
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">JavaScript (Fetch)</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigator.clipboard.writeText(generateCodeSnippet("javascript"))}
                          className="text-slate-400 hover:text-white"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-blue-400 text-sm overflow-auto">{generateCodeSnippet("javascript")}</pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="curl" className="mt-4">
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">cURL</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigator.clipboard.writeText(generateCodeSnippet("curl"))}
                          className="text-slate-400 hover:text-white"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-yellow-400 text-sm overflow-auto">{generateCodeSnippet("curl")}</pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="python" className="mt-4">
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Python (Requests)</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigator.clipboard.writeText(generateCodeSnippet("python"))}
                          className="text-slate-400 hover:text-white"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-green-400 text-sm overflow-auto">{generateCodeSnippet("python")}</pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
