import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, ShoppingCart, FileText, Shield, Cloud, CheckSquare, Search, Database, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const apiCategories = [
  {
    id: "users",
    name: "Users",
    description: "User profiles, authentication, and account management",
    icon: Users,
    endpoints: 12,
    color: "bg-blue-500",
    popular: true,
  },
  {
    id: "products",
    name: "Products",
    description: "E-commerce products, inventory, and catalog data",
    icon: ShoppingCart,
    endpoints: 8,
    color: "bg-green-500",
    popular: true,
  },
  {
    id: "posts",
    name: "Posts",
    description: "Blog posts, articles, and content management",
    icon: FileText,
    endpoints: 10,
    color: "bg-purple-500",
    popular: false,
  },
  {
    id: "auth",
    name: "Authentication",
    description: "Login, register, JWT tokens, and session management",
    icon: Shield,
    endpoints: 6,
    color: "bg-red-500",
    popular: true,
  },
  {
    id: "weather",
    name: "Weather",
    description: "Weather data, forecasts, and climate information",
    icon: Cloud,
    endpoints: 5,
    color: "bg-cyan-500",
    popular: false,
  },
  {
    id: "todos",
    name: "Todos",
    description: "Task management, todo lists, and productivity data",
    icon: CheckSquare,
    endpoints: 7,
    color: "bg-orange-500",
    popular: false,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">API Categories</h1>
          <p className="text-slate-300 text-lg mb-8">Explore our collection of mock APIs organized by category</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search APIs..."
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apiCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.id} href={`/playground?category=${category.id}`}>
                <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-200 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      {category.popular && (
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{category.endpoints} endpoints</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Quick Start Section */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-2">
              <Database className="h-6 w-6 text-purple-400" />
              <CardTitle className="text-white">Quick Start</CardTitle>
            </div>
            <CardDescription className="text-slate-300">Get started with any API in seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-300 font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Choose Category</h3>
                <p className="text-slate-400 text-sm">Select from our organized API categories</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-300 font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Test Endpoint</h3>
                <p className="text-slate-400 text-sm">Try APIs directly in our playground</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-300 font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Copy Code</h3>
                <p className="text-slate-400 text-sm">Get ready-to-use code snippets</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
