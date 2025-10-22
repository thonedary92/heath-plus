"use client"

import { CheckCircle2, Award, Shield, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: CheckCircle2,
    title: "Expert Medical Team",
    description: "Board-certified physicians and specialists",
  },
  {
    icon: Award,
    title: "Award-Winning Care",
    description: "Recognized for excellence nationally",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment",
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Compassionate and personalized care",
  },
]

export function AboutSection() {
  const contentAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const imageAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={contentAnimation.ref}
            className={`space-y-8 transition-all duration-1000 ${
              contentAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-sm font-semibold text-accent">About Us</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground text-balance">
              Leading Healthcare Provider Since 1995
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are committed to providing exceptional healthcare services with a patient-centered approach. Our team
                of experienced medical professionals uses cutting-edge technology and evidence-based practices to
                deliver the best outcomes for our patients.
              </p>
              <p>
                With over 25 years of excellence in healthcare, we've grown from a small clinic to a comprehensive
                medical facility serving more than 350,000 patients annually.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-700 ${
                    contentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageAnimation.ref}
            className={`relative transition-all duration-1000 ${
              imageAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/modern-hospital-interior-with-medical-professional.jpg"
                alt="Modern hospital facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className={`absolute -bottom-6 -right-6 bg-card p-8 rounded-2xl shadow-xl border border-border transition-all duration-1000 ${
                imageAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-5xl font-bold text-accent mb-2">25+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
