"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrophyIcon } from "lucide-react"
import Image from "next/image"

export default function RecentResults() {
  // Datos de ejemplo
  const results = {
    palermo: [
      { date: "01/05/2024", race: "Gran Premio", winner: "Tormenta Negra", odds: 2.5, time: "1:42.35" },
      { date: "28/04/2024", race: "Clásico Otoño", winner: "Veloz Centella", odds: 3.1, time: "1:24.12" },
      { date: "25/04/2024", race: "Premio Especial", winner: "Rey del Viento", odds: 4.2, time: "2:05.78" },
      { date: "21/04/2024", race: "Handicap Abril", winner: "Furia Dorada", odds: 2.8, time: "1:36.45" },
      { date: "18/04/2024", race: "Clásico Velocidad", winner: "Tormenta Negra", odds: 2.3, time: "1:12.67" },
    ],
    sanIsidro: [
      { date: "30/04/2024", race: "Gran Premio", winner: "Relámpago", odds: 2.7, time: "1:45.23" },
      { date: "27/04/2024", race: "Clásico Otoño", winner: "Estrella Fugaz", odds: 3.4, time: "1:26.89" },
      { date: "24/04/2024", race: "Premio Especial", winner: "Trueno Salvaje", odds: 3.8, time: "2:02.34" },
      { date: "20/04/2024", race: "Handicap Abril", winner: "Flecha Plateada", odds: 4.1, time: "1:38.56" },
      { date: "17/04/2024", race: "Clásico Velocidad", winner: "Relámpago", odds: 2.5, time: "1:14.78" },
    ],
  }

  return (
    <Tabs defaultValue="palermo">
      <TabsList className="grid w-full grid-cols-2 bg-muted/50">
        <TabsTrigger value="palermo" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
          <div className="w-5 h-5 relative">
            <Image src="/images/palermo.png" alt="Escudo Palermo" fill className="object-contain" />
          </div>
          <span>Palermo</span>
        </TabsTrigger>
        <TabsTrigger value="sanIsidro" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
          <div className="w-5 h-5 relative">
            <Image src="/images/san-isidro.png" alt="Escudo San Isidro" fill className="object-contain" />
          </div>
          <span>San Isidro</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="palermo" className="mt-4 fade-in">
        <div className="space-y-3">
          {results.palermo.map((result, index) => (
            <div
              key={index}
              className="border-b pb-2 last:border-0 hover:bg-amber-50/50 p-2 rounded-md transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{result.race}</p>
                  <p className="text-xs text-muted-foreground">{result.date}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 relative mr-1">
                        <Image src="/images/caballo.png" alt="Caballo ganador" fill className="object-contain" />
                      </div>
                      <TrophyIcon className="h-3 w-3 text-yellow-500 trophy-shine" />
                    </div>
                    <p className="text-sm font-medium">{result.winner}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cuota: {result.odds} | Tiempo: {result.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="sanIsidro" className="mt-4 fade-in">
        <div className="space-y-3">
          {results.sanIsidro.map((result, index) => (
            <div
              key={index}
              className="border-b pb-2 last:border-0 hover:bg-amber-50/50 p-2 rounded-md transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{result.race}</p>
                  <p className="text-xs text-muted-foreground">{result.date}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 relative mr-1">
                        <Image src="/images/caballo.png" alt="Caballo ganador" fill className="object-contain" />
                      </div>
                      <TrophyIcon className="h-3 w-3 text-yellow-500 trophy-shine" />
                    </div>
                    <p className="text-sm font-medium">{result.winner}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cuota: {result.odds} | Tiempo: {result.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
