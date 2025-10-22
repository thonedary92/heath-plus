"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm animate-fade-in-up [animation-delay:200ms]">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Award-Winning Healthcare Excellence</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance animate-fade-in-up [animation-delay:400ms]">
              Healthcare Excellence You Can Trust
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up [animation-delay:600ms]">
              Experience world-class medical care delivered with compassion and expertise. Our team of board-certified
              specialists is dedicated to your health and wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:800ms]">
              <Button asChild size="lg" className="rounded-full text-base group">
                <Link href="#contact">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base bg-transparent">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in-up [animation-delay:1000ms]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">350K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Patients Served</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">25+</p>
                </div>
                <p className="text-sm text-muted-foreground">Years Excellence</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                </div>
                <p className="text-sm text-muted-foreground">Emergency Care</p>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in-up [animation-delay:600ms]"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/professional-medical-team-in-modern-hospital.jpg"
                alt="Professional medical team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs animate-fade-in-up [animation-delay:1200ms]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
