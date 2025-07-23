import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Database, Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Database className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">MockAPI Hub</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              The ultimate platform for developers to access, test, and create mock APIs. Accelerate your development
              workflow with our comprehensive API collection.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="text-slate-300 hover:text-white text-sm">
                  API Categories
                </Link>
              </li>
              <li>
                <Link href="/playground" className="text-slate-300 hover:text-white text-sm">
                  Playground
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-slate-300 hover:text-white text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-slate-300 hover:text-white text-sm">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 text-sm mb-4">Get notified about new APIs and features</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 text-sm"
              />
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 MockAPI Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
