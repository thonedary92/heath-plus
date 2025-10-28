"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const specialties = ["All Specialties", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"]

export function DoctorFilters() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")

  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <Input placeholder="Search doctors by name..." className="pl-12 h-12 bg-card" />
      </div>

      <div className="flex flex-wrap gap-3">
        {specialties.map((specialty) => (
          <Button
            key={specialty}
            variant={selectedSpecialty === specialty ? "default" : "outline"}
            onClick={() => setSelectedSpecialty(specialty)}
            className="rounded-full"
          >
            {specialty}
          </Button>
        ))}
      </div>
    </div>
  )
}
