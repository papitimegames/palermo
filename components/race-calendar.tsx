"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function RaceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Fechas de ejemplo con carreras
  const raceDays = [
    new Date(2024, 4, 3), // 3 de mayo
    new Date(2024, 4, 5), // 5 de mayo
    new Date(2024, 4, 10), // 10 de mayo
    new Date(2024, 4, 12), // 12 de mayo
    new Date(2024, 4, 17), // 17 de mayo
    new Date(2024, 4, 19), // 19 de mayo
    new Date(2024, 4, 24), // 24 de mayo
    new Date(2024, 4, 26), // 26 de mayo
  ]

  // Datos de ejemplo para el día seleccionado
  const getRacesForDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return []

    // Formato simple para comparar fechas
    const dateString = selectedDate.toDateString()

    // Si es un día de carrera, devolver datos de ejemplo
    if (raceDays.some((d) => d.toDateString() === dateString)) {
      if (selectedDate.getDate() % 2 === 0) {
        // Días pares: San Isidro
        return [
          { time: "14:00", track: "San Isidro", race: "Clásico Otoño", distance: "1600m" },
          { time: "15:30", track: "San Isidro", race: "Premio Especial", distance: "1200m" },
          { time: "17:00", track: "San Isidro", race: "Handicap Mayo", distance: "2000m" },
        ]
      } else {
        // Días impares: Palermo
        return [
          { time: "14:30", track: "Palermo", race: "Gran Premio", distance: "1800m" },
          { time: "16:00", track: "Palermo", race: "Clásico Otoño", distance: "1400m" },
          { time: "17:30", track: "Palermo", race: "Premio Especial", distance: "2200m" },
        ]
      }
    }

    return []
  }

  const races = getRacesForDate(date)

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        modifiers={{
          highlighted: raceDays,
        }}
        modifiersStyles={{
          highlighted: {
            fontWeight: "bold",
            backgroundColor: "hsl(var(--primary) / 0.1)",
            color: "hsl(var(--primary))",
          },
        }}
      />

      <div className="space-y-2">
        {races.length > 0 ? (
          races.map((race, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 relative">
                        <Image
                          src={race.track === "Palermo" ? "/images/palermo.png" : "/images/san-isidro.png"}
                          alt={`Escudo ${race.track}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <Badge variant={race.track === "Palermo" ? "default" : "outline"}>{race.track}</Badge>
                    </div>
                    <p className="mt-1 font-medium">{race.race}</p>
                    <p className="text-xs text-muted-foreground">{race.distance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{race.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-sm text-muted-foreground py-2">No hay carreras programadas para esta fecha</p>
        )}
      </div>
    </div>
  )
}
