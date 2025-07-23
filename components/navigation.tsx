import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">MockAPI Hub</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/categories">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Explore APIs
              </Button>
            </Link>
            <Link href="/playground">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Playground
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
  )
}
