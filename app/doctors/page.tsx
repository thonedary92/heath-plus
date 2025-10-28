import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DoctorScheduleGrid } from "@/components/doctor-schedule-grid"
import { DoctorFilters } from "@/components/doctor-filters"

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6">Our Medical Experts</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Browse our team of board-certified physicians and specialists. View their schedules and book appointments
              at your convenience.
            </p>
          </div>

          <DoctorFilters />
          <DoctorScheduleGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
