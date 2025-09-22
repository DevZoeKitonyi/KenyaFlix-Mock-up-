"use client"

import type React from "react"

import { useState } from "react"
import { Search, Bell, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-foreground">KenyaFlix</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/movies" className="text-muted-foreground hover:text-primary transition-colors">
                Movies
              </Link>
              <Link href="/search" className="text-muted-foreground hover:text-primary transition-colors">
                Search
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Series
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Documentaries
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                My List
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-secondary border-border"
                />
              </form>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/movies" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Movies
              </Link>
              <Link href="/search" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Search
              </Link>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Series
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Documentaries
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                My List
              </a>
            </div>
            <div className="px-2 pb-3">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full bg-secondary border-border"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
