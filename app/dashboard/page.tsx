"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, FileText, Activity, Heart, Pill, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    date: "2025-02-15",
    time: "10:00 AM",
    type: "Follow-up",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    date: "2025-02-20",
    time: "02:30 PM",
    type: "Check-up",
    status: "pending",
  },
]

const medicalRecords = [
  {
    id: 1,
    title: "Blood Test Results",
    date: "2025-01-28",
    doctor: "Dr. Sarah Mitchell",
    type: "Lab Report",
  },
  {
    id: 2,
    title: "Annual Physical Exam",
    date: "2025-01-15",
    doctor: "Dr. James Chen",
    type: "Examination",
  },
  {
    id: 3,
    title: "X-Ray Report",
    date: "2024-12-10",
    doctor: "Dr. Michael Thompson",
    type: "Imaging",
  },
]

const prescriptions = [
  {
    id: 1,
    medication: "Lisinopril 10mg",
    dosage: "Once daily",
    prescribedBy: "Dr. Sarah Mitchell",
    refillsLeft: 2,
    expiryDate: "2025-06-30",
  },
  {
    id: 2,
    medication: "Metformin 500mg",
    dosage: "Twice daily",
    prescribedBy: "Dr. James Chen",
    refillsLeft: 1,
    expiryDate: "2025-05-15",
  },
]

export default function DashboardPage() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>()
  const statsAnimation = useScrollAnimation<HTMLDivElement>()
  const appointmentsAnimation = useScrollAnimation<HTMLDivElement>()
  const recordsAnimation = useScrollAnimation<HTMLDivElement>()
  const sidebarAnimation = useScrollAnimation<HTMLDivElement>()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div
              ref={headerAnimation.ref}
              className={`max-w-4xl transition-all duration-1000 ${
                headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
                Welcome Back, <span className="text-primary">John</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Your personalized health dashboard. Track appointments, view records, and manage your healthcare
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div
              ref={statsAnimation.ref}
              className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
                statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="group p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card hover:bg-card/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Calendar size={28} className="text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-serif font-bold text-foreground mb-2">2</div>
                <div className="text-sm text-muted-foreground font-medium">Upcoming Appointments</div>
              </Card>

              <Card className="group p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card hover:bg-card/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                    <FileText size={28} className="text-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-serif font-bold text-foreground mb-2">3</div>
                <div className="text-sm text-muted-foreground font-medium">Medical Records</div>
              </Card>

              <Card className="group p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card hover:bg-card/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                    <Pill size={28} className="text-accent-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-serif font-bold text-foreground mb-2">2</div>
                <div className="text-sm text-muted-foreground font-medium">Active Prescriptions</div>
              </Card>

              <Card className="group p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card hover:bg-card/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Heart size={28} className="text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-serif font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Health Score</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-16">
                {/* Upcoming Appointments */}
                <div
                  ref={appointmentsAnimation.ref}
                  className={`transition-all duration-1000 ${
                    appointmentsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-3 text-balance">
                        Upcoming Appointments
                      </h2>
                      <p className="text-lg text-muted-foreground">Your scheduled consultations</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/book-appointment">
                        Book New
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-5">
                    {upcomingAppointments.map((appointment, index) => (
                      <Card
                        key={appointment.id}
                        className="group p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                              <User size={28} className="text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg text-foreground mb-2">{appointment.doctor}</h3>
                              <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                <Calendar size={16} />
                                {appointment.date}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock size={16} />
                                {appointment.time}
                              </div>
                            </div>

                            <Badge
                              variant={appointment.status === "confirmed" ? "default" : "secondary"}
                              className="capitalize px-4 py-1"
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Medical Records */}
                <div
                  ref={recordsAnimation.ref}
                  className={`transition-all duration-1000 ${
                    recordsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-3 text-balance">
                        Medical Records
                      </h2>
                      <p className="text-lg text-muted-foreground">Your health documentation</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/records">
                        View All
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {medicalRecords.map((record, index) => (
                      <Card
                        key={record.id}
                        className="group p-6 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-secondary/80 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                              <FileText size={24} className="text-foreground" />
                            </div>
                            <div>
                              <h3 className="font-medium text-lg text-foreground mb-1">{record.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {record.doctor} • {record.date}
                              </p>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                          >
                            <Download size={18} />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div
                ref={sidebarAnimation.ref}
                className={`space-y-8 transition-all duration-1000 ${
                  sidebarAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Active Prescriptions */}
                <Card className="p-8 border-border/50 bg-card hover:shadow-xl transition-all duration-500">
                  <h2 className="font-serif text-3xl text-foreground mb-8">Active Prescriptions</h2>

                  <div className="space-y-5 mb-8">
                    {prescriptions.map((prescription) => (
                      <div
                        key={prescription.id}
                        className="p-6 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Pill size={22} className="text-accent-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{prescription.medication}</h3>
                            <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1 pl-16">
                          <p>Prescribed by: {prescription.prescribedBy}</p>
                          <p>Refills left: {prescription.refillsLeft}</p>
                          <p>Expires: {prescription.expiryDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-full hover:shadow-lg transition-all duration-300">
                    Request Refill
                  </Button>
                </Card>

                {/* Quick Actions */}
                <Card className="p-8 border-border/50 bg-card hover:shadow-xl transition-all duration-500">
                  <h2 className="font-serif text-3xl text-foreground mb-8">Quick Actions</h2>

                  <div className="space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/doctors">
                        <User size={18} className="mr-3" />
                        Find a Doctor
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/book-appointment">
                        <Calendar size={18} className="mr-3" />
                        Book Appointment
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/records">
                        <FileText size={18} className="mr-3" />
                        View Records
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link href="/health-tracker">
                        <Activity size={18} className="mr-3" />
                        Health Tracker
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
