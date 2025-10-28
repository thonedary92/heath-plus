"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        } md:bg-transparent bg-white`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl transition-transform group-hover:scale-105">
              H+
            </div>
            <span className="font-semibold text-lg text-foreground">HealthCare Plus</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full gap-1">
                  <User size={18} />
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/sign-in" className="cursor-pointer">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sign-up" className="cursor-pointer">
                    Sign Up
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild size="sm" className="rounded-full">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              href="/#services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link
              href="/#about"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/sign-in" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {/* <User size={18} className="mr-2" /> */}
              Sign In
            </Link>
            <Link href="/sign-up" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </Link>
            <div className="pt-4 space-y-3">
              {/* <Button asChild variant="ghost" size="lg" className="w-full rounded-full justify-start">
                <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={18} className="mr-2" />
                  Sign In
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-full justify-start bg-transparent">
                <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button> */}
              <Button asChild variant="outline" size="lg" className="w-full rounded-full bg-transparent">
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  Dashboard
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
