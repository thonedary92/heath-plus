"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Baby, Bone, Microscope, Activity, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Activity,
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response teams and state-of-the-art equipment to handle any medical emergency with precision and care.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Advanced cardiac care including diagnostics, treatment, and preventive care for all heart-related conditions from our expert cardiologists.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Expert neurological care for conditions affecting the brain, spine, and nervous system using cutting-edge technology and minimally invasive techniques.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents in a child-friendly environment with experienced, compassionate pediatricians.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Complete orthopedic care from diagnosis to rehabilitation for bones, joints, muscles, and sports injuries with advanced surgical techniques.",
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description:
      "Advanced diagnostic testing with quick turnaround times and accurate results using the latest medical laboratory technology.",
  },
]

export function ServicesSection() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">Our Services</span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a wide range of medical services designed to meet all your healthcare needs with excellence and
            compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const animation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={animation.ref}
      className={`transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 h-full">
        <CardContent className="p-8 space-y-4">
          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
            <service.icon className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
