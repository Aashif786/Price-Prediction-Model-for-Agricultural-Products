"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, LogOut, Menu, TrendingUp, User, X } from "lucide-react"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    // Get user email from session storage
    if (typeof window !== "undefined") {
      const email = sessionStorage.getItem("userEmail")
      setUserEmail(email)
    }
  }, [])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userEmail")
    }
    router.push("/")
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              <span className="ml-2 text-xl font-bold">AgriPredict</span>
            </Link>

            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                href="/dashboard"
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/dashboard"
                    ? "text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/project-details"
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/project-details"
                    ? "text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                Project Details
              </Link>
              <Link
                href="/team"
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/team"
                    ? "text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                Team
              </Link>
            </nav>
          </div>

          {/* User menu and mobile menu button */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span className="hidden md:inline">{userEmail ? userEmail.split("@")[0] : "User"}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/dashboard"
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/dashboard"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/project-details"
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/project-details"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Project Details
              </Link>
              <Link
                href="/team"
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/team"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                    : "text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
