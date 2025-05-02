"use client"

import { useState } from "react"
import { ChevronUpIcon, ChevronDownIcon, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function FavoritosFlotante() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Datos de ejemplo para los favoritos del día
  const favoritos = [
    { nombre: "Tormenta Negra", hipodromo: "Palermo", carrera: 3, hora: "15:30", probabilidad: 78, cuota: 2.5 },
    { nombre: "Relámpago", hipodromo: "San Isidro", carrera: 5, hora: "16:15", probabilidad: 72, cuota: 2.7 },
    { nombre: "Veloz Centella", hipodromo: "Palermo", carrera: 6, hora: "17:45", probabilidad: 65, cuota: 3.1 },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="flex flex-col items-end">
        {isExpanded && (
          <div className="mb-2 bg-background rounded-lg shadow-lg border-2 border-primary w-72 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-primary px-3 py-2 text-primary-foreground flex items-center gap-2">
              <div className="flex items-center">
                <div className="h-5 w-6 relative">
                  <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
                </div>
                <div className="h-5 w-5 relative -ml-1">
                  <Image
                    src="/images/jinete-ganador.jpg"
                    alt="Jinete Ganador"
                    fill
                    className="object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <h3 className="font-bold">Favoritos del Día</h3>
            </div>
            <div className="p-2 space-y-2 max-h-[60vh] overflow-auto">
              {favoritos.map((favorito, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-md p-2 flex items-center justify-between hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 relative">
                      <Image src="/images/ganador.jpg" alt="Caballo ganador" fill className="object-contain" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{favorito.nombre}</p>
                      <p className="text-xs text-muted-foreground">
                        {favorito.hipodromo} • C{favorito.carrera} • {favorito.hora}
                      </p>
                    </div>
                  </div>
                  <Badge>{favorito.cuota.toFixed(1)}</Badge>
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex justify-center">
              <Link href="https://link.mercadopago.com.ar/papiweb" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                >
                  <Coffee className="h-3 w-3" />
                  <span className="text-xs">Invitame un cafecito</span>
                </Button>
              </Link>
            </div>
          </div>
        )}

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full shadow-lg flex items-center gap-2"
          size="lg"
        >
          <div className="flex items-center">
            <div className="h-5 w-6 relative">
              <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
            </div>
            <div className="h-5 w-5 relative -ml-1">
              <Image
                src="/images/jinete-ganador.jpg"
                alt="Jinete Ganador"
                fill
                className="object-cover rounded-full border-2 border-white"
              />
            </div>
          </div>
          <span>Favoritos del Día</span>
          {isExpanded ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronUpIcon className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
