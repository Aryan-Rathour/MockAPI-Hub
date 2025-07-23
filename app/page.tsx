import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Zap, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">MockAPI Hub</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/categories">
                <Button variant="ghost" className="text-slate-300 hover:text-white">
                  Explore APIs
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="ghost" className="text-slate-300 hover:text-white">
                  Docs
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-purple-600 hover:bg-purple-700">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30 hover:text-gray-600">Free Forever</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Free Fake APIs for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}
              Prototyping & Testing
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Access hundreds of mock APIs instantly. No setup required. Perfect for frontend development, testing, and
            rapid prototyping. Start building without backend dependencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Explore APIs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/playground">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                Try Playground
                <Code className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose MockAPI Hub?</h2>
            <p className="text-slate-300 text-lg">Everything you need to accelerate your development workflow</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Instant Access</CardTitle>
                <CardDescription className="text-slate-300">
                  No registration required. Start using APIs immediately with zero configuration.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Database className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Rich Data Sets</CardTitle>
                <CardDescription className="text-slate-300">
                  Realistic mock data for users, products, posts, and more. Perfect for testing.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">CORS Enabled</CardTitle>
                <CardDescription className="text-slate-300">
                  All APIs are CORS-enabled and ready to use from any domain or localhost.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Code className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Code Examples</CardTitle>
                <CardDescription className="text-slate-300">
                  Get JavaScript, Python, and cURL examples for every endpoint.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Clock className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Always Available</CardTitle>
                <CardDescription className="text-slate-300">
                  99.9% uptime guarantee. Your development workflow never stops.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Developer Community</CardTitle>
                <CardDescription className="text-slate-300">
                  Join thousands of developers using MockAPI Hub for their projects.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-600/30">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to accelerate your development?</h2>
              <p className="text-slate-300 text-lg mb-8">
                Join thousands of developers who trust MockAPI Hub for their prototyping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/categories">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100">
                    Start Building Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-400 text-purple-300 hover:bg-purple-900/20 bg-transparent"
                  >
                    Create Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
