"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star, Award } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    image: "/doctor-sarah-mitchell-cardiologist.jpg",
    rating: 4.9,
    reviews: 234,
    experience: "15+ years",
    availability: [
      { day: "Mon", slots: ["09:00 AM", "02:00 PM", "04:00 PM"] },
      { day: "Wed", slots: ["10:00 AM", "03:00 PM"] },
      { day: "Fri", slots: ["09:00 AM", "01:00 PM", "05:00 PM"] },
    ],
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Neurology",
    image: "/doctor-james-chen-neurologist.jpg",
    rating: 4.8,
    reviews: 189,
    experience: "12+ years",
    availability: [
      { day: "Tue", slots: ["08:00 AM", "11:00 AM", "03:00 PM"] },
      { day: "Thu", slots: ["09:00 AM", "02:00 PM"] },
      { day: "Sat", slots: ["10:00 AM", "12:00 PM"] },
    ],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "/doctor-emily-rodriguez-pediatrician.jpg",
    rating: 5.0,
    reviews: 312,
    experience: "18+ years",
    availability: [
      { day: "Mon", slots: ["08:00 AM", "10:00 AM", "01:00 PM", "04:00 PM"] },
      { day: "Wed", slots: ["09:00 AM", "02:00 PM", "05:00 PM"] },
      { day: "Fri", slots: ["08:00 AM", "11:00 AM", "03:00 PM"] },
    ],
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Orthopedics",
    image: "/doctor-michael-thompson-orthopedic-surgeon.jpg",
    rating: 4.9,
    reviews: 267,
    experience: "20+ years",
    availability: [
      { day: "Tue", slots: ["09:00 AM", "01:00 PM"] },
      { day: "Thu", slots: ["10:00 AM", "03:00 PM", "05:00 PM"] },
      { day: "Sat", slots: ["09:00 AM"] },
    ],
  },
]

export function DoctorScheduleGrid() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex gap-6 mb-6">
            <img
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-foreground mb-2">{doctor.name}</h3>
              <Badge variant="secondary" className="mb-3">
                {doctor.specialty}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  <span className="font-medium text-foreground">{doctor.rating}</span>
                  <span>({doctor.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award size={16} />
                  <span>{doctor.experience}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Calendar size={18} className="text-primary" />
              Available This Week
            </div>

            <div className="space-y-3">
              {doctor.availability.map((schedule) => (
                <div key={schedule.day} className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">{schedule.day}</div>
                  <div className="flex flex-wrap gap-2">
                    {schedule.slots.map((slot) => (
                      <Button
                        key={slot}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <Clock size={14} className="mr-1" />
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="w-full rounded-full mt-4">
              <Link href={`/book-appointment?doctor=${doctor.id}`}>Book Appointment</Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
