"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronRightIcon } from "lucide-react"

interface ModelDetailsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ModelDetailsDialog({ open, onOpenChange }: ModelDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detalles del Modelo Matemático</DialogTitle>
          <DialogDescription>
            Sistema avanzado de predicción para carreras hípicas
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-medium mb-2">Factores Principales</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Análisis del Caballo (35%)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Rendimiento en últimas 5 carreras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Tiempos en distancias similares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Historial en la pista actual</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Jinete y Entrenador (25%)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Porcentaje de victorias del jinete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Experiencia en la distancia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Estadísticas del entrenador</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Condiciones de Carrera (30%)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Estado de la pista</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Distancia y tipo de carrera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Condiciones climáticas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Análisis de Mercado (10%)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Movimientos de cuotas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                      <span>Volumen de apuestas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-2">Procesamiento de Datos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              El sistema utiliza técnicas avanzadas de aprendizaje automático para procesar y analizar los datos:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                <span>Análisis de regresión multivariable para correlacionar factores</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                <span>Redes neuronales para identificar patrones complejos</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                <span>Actualización continua basada en resultados recientes</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                <span>Ajustes específicos por hipódromo y condiciones particulares</span>
              </li>
            </ul>
          </section>

          <div className="border-t pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full">
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}