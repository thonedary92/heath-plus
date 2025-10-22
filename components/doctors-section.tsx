"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const doctors = [
  {
    name: "Dr. James Mitchell",
    specialty: "Cardiovascular Surgery",
    badge: "Chief Surgeon",
    description:
      "Board-certified cardiovascular surgeon with over 15 years of experience in complex cardiac procedures and minimally invasive techniques.",
    education: "Harvard Medical",
    experience: "15+ Years",
    image: "/professional-male-doctor-in-white-coat.jpg",
  },
  {
    name: "Dr. Sarah Williams",
    specialty: "Pediatric Medicine",
    badge: "Head of Pediatrics",
    description:
      "Dedicated pediatrician specializing in child development, preventive care, and treating complex pediatric conditions with compassion.",
    education: "Johns Hopkins",
    experience: "12+ Years",
    image: "/doctor-female-2.png",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology & Neurosurgery",
    badge: "Neurologist",
    description:
      "Expert in treating neurological disorders with minimally invasive techniques, advanced imaging, and comprehensive patient care.",
    education: "Stanford Medical",
    experience: "18+ Years",
    image: "/images/doctor-2.png",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Orthopedic Surgery",
    badge: "Orthopedic Specialist",
    description:
      "Specializes in sports medicine, joint replacement, and rehabilitation with a focus on rapid recovery and optimal outcomes.",
    education: "Mayo Clinic",
    experience: "10+ Years",
    image: "/professional-female-orthopedic-surgeon.jpg",
  },
]

export function DoctorsSection() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">Our Team</span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of highly qualified and experienced medical professionals is dedicated to your health and wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorCard({ doctor, index }: { doctor: (typeof doctors)[0]; index: number }) {
  const animation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={animation.ref}
      className={`transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-accent/20 h-full">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={doctor.image || "/placeholder.svg"}
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-card px-3 py-1.5 rounded-full shadow-lg">
            <span className="text-xs font-semibold text-accent">{doctor.badge}</span>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
            <p className="text-sm font-semibold text-accent">{doctor.specialty}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{doctor.description}</p>
          <div className="flex gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>{doctor.education}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>{doctor.experience}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
