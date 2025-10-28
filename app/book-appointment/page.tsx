"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

function BookingForm() {
  const searchParams = useSearchParams()
  const doctorId = searchParams.get("doctor")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle final submission
      console.log("[v0] Appointment booked:", formData)
      setStep(4)
    }
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container max-w-2xl">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h1 className="font-serif text-4xl text-foreground mb-4">Appointment Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your appointment has been successfully booked. We've sent a confirmation email to{" "}
              <span className="font-medium text-foreground">{formData.email}</span>
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-lg mb-4">Appointment Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary" />
                  <span>{formData.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  <span>{formData.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <User size={18} className="text-primary" />
                  <span>
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-foreground mb-4">Book Your Appointment</h1>
          <p className="text-lg text-muted-foreground">Complete the form to schedule your visit</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-1 transition-colors ${step > s ? "bg-primary" : "bg-secondary"}`} />}
            </div>
          ))}
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl text-foreground mb-2">Select Date & Time</h2>
                  <p className="text-muted-foreground">Choose your preferred appointment slot</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      Appointment Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="rounded-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      Appointment Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl text-foreground mb-2">Personal Information</h2>
                  <p className="text-muted-foreground">Tell us about yourself</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center gap-2">
                      <User size={18} className="text-primary" />
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="rounded-full"
                      placeholder="John"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="rounded-full"
                      placeholder="Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail size={18} className="text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-full"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone size={18} className="text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-full"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl text-foreground mb-2">Appointment Details</h2>
                  <p className="text-muted-foreground">Help us prepare for your visit</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="flex items-center gap-2">
                    <FileText size={18} className="text-primary" />
                    Reason for Visit
                  </Label>
                  <Textarea
                    id="reason"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="min-h-32 rounded-2xl"
                    placeholder="Please describe your symptoms or reason for the appointment..."
                  />
                </div>

                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Review Your Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Date:</span> {formData.date}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Time:</span> {formData.time}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Email:</span> {formData.email}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Phone:</span> {formData.phone}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="rounded-full flex-1"
                >
                  Back
                </Button>
              )}
              <Button type="submit" className="rounded-full flex-1">
                {step === 3 ? "Confirm Appointment" : "Continue"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingForm />
    </Suspense>
  )
}
