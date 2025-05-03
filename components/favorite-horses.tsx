"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { StarIcon } from "lucide-react"
import Image from "next/image"

export default function FavoriteHorses() {
  const [track, setTrack] = useState("palermo")

  // Datos de ejemplo
  const favoriteHorses = {
    palermo: [
      { name: "Tormenta Negra", winRate: 78, races: 14, jockey: "M. Rodríguez" },
      { name: "Veloz Centella", winRate: 65, races: 12, jockey: "J. Pérez" },
      { name: "Rey del Viento", winRate: 62, races: 16, jockey: "A. González" },
      { name: "Furia Dorada", winRate: 58, races: 10, jockey: "C. Martínez" },
    ],
    sanIsidro: [
      { name: "Relámpago", winRate: 72, races: 18, jockey: "F. López" },
      { name: "Estrella Fugaz", winRate: 67, races: 15, jockey: "R. Sánchez" },
      { name: "Trueno Salvaje", winRate: 64, races: 14, jockey: "D. Fernández" },
      { name: "Flecha Plateada", winRate: 60, races: 12, jockey: "L. García" },
    ],
  }

  return (
    <Tabs defaultValue="palermo" onValueChange={setTrack}>
      <TabsList className="grid w-full grid-cols-2 bg-muted/50">
        <TabsTrigger value="palermo" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
          <div className="w-6 h-6 relative">
            <Image src="/images/palermo.png" alt="Escudo Palermo" fill className="object-contain" />
          </div>
          <span>Palermo</span>
        </TabsTrigger>
        <TabsTrigger value="sanIsidro" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
          <div className="w-6 h-6 relative">
            <Image src="/images/sanisidrohipodromooriginal.png" alt="Escudo San Isidro" fill className="object-contain" />
          </div>
          <span>San Isidro</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="palermo" className="space-y-4 mt-4">
        {favoriteHorses.palermo.map((horse, index) => (
          <div key={index} className="space-y-1 hover:bg-amber-50/50 p-2 rounded-md transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 trophy-shine" />
                <span className="font-medium">{horse.name}</span>
              </div>
              <span className="text-sm">{horse.winRate}%</span>
            </div>
            <Progress value={horse.winRate} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Jinete: {horse.jockey}</span>
              <span>{horse.races} carreras</span>
            </div>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="sanIsidro" className="space-y-4 mt-4">
        {favoriteHorses.sanIsidro.map((horse, index) => (
          <div key={index} className="space-y-1 hover:bg-amber-50/50 p-2 rounded-md transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 trophy-shine" />
                <span className="font-medium">{horse.name}</span>
              </div>
              <span className="text-sm">{horse.winRate}%</span>
            </div>
            <Progress value={horse.winRate} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Jinete: {horse.jockey}</span>
              <span>{horse.races} carreras</span>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
