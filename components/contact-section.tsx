"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@healthcareplus.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Medical Center Drive, Healthcare City, HC 12345",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "24/7 Emergency Care | Mon-Fri: 8AM - 8PM (General)",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  })

  const contentAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const formAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! Your appointment request has been submitted.")
    setFormData({ name: "", email: "", phone: "", department: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div
            ref={contentAnimation.ref}
            className={`space-y-8 transition-all duration-1000 ${
              contentAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 text-balance">
                Get In Touch
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Have questions or need to schedule an appointment? We're here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-700 ${
                    contentAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-primary-foreground/80">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={formAnimation.ref}
            className={`transition-all duration-1000 ${
              formAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Book an Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => setFormData({ ...formData, department: value })}
                    >
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                        <SelectItem value="laboratory">Laboratory Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your concern or preferred appointment time"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
