"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      "The care I received at HealthCare Plus was exceptional. Dr. Mitchell and his team made my cardiac surgery experience as smooth as possible. I'm forever grateful for their expertise and compassion.",
    author: "Robert Johnson",
    role: "Cardiac Surgery Patient",
    initials: "RJ",
  },
  {
    quote:
      "Dr. Sarah Williams is amazing with children! My daughter was scared at first, but Dr. Williams made her feel so comfortable. The entire pediatric team is wonderful and caring.",
    author: "Maria Chen",
    role: "Parent of Pediatric Patient",
    initials: "MC",
  },
  {
    quote:
      "After years of chronic pain, Dr. Rodriguez helped me get back to my active lifestyle. The orthopedic department uses the latest technology and truly cares about patient outcomes.",
    author: "David Thompson",
    role: "Orthopedic Patient",
    initials: "DT",
  },
]

export function TestimonialsSection() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">Testimonials</span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real stories from real patients about their healthcare journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const animation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={animation.ref}
      className={`transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <CardContent className="p-8 space-y-6">
          <Quote className="w-10 h-10 text-accent/30" />
          <p className="text-muted-foreground leading-relaxed italic">{testimonial.quote}</p>
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-accent">{testimonial.initials}</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
