"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrophyIcon, CalculatorIcon } from "lucide-react"
import CafecitoButton from "@/components/cafecito-button"
import Image from "next/image"

export default function PredictionPage() {
  const [track, setTrack] = useState("palermo")
  const [raceDate, setRaceDate] = useState("")
  const [raceNumber, setRaceNumber] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)
  const [predictions, setPredictions] = useState<any[]>([])

  // Función para simular el cálculo de predicciones
  const calculatePredictions = () => {
    setIsCalculating(true)

    // Simulamos un tiempo de cálculo
    setTimeout(() => {
      // Datos de ejemplo para las predicciones
      const predictionData = [
        { position: 1, horse: "Tormenta Negra", probability: 32, odds: 2.5, jockey: "M. Rodríguez" },
        { position: 2, horse: "Veloz Centella", probability: 24, odds: 3.8, jockey: "J. Pérez" },
        { position: 3, horse: "Rey del Viento", probability: 18, odds: 5.2, jockey: "A. González" },
        { position: 4, horse: "Furia Dorada", probability: 12, odds: 7.5, jockey: "C. Martínez" },
        { position: 5, horse: "Estrella Fugaz", probability: 8, odds: 12.0, jockey: "R. Sánchez" },
        { position: 6, horse: "Trueno Salvaje", probability: 6, odds: 15.0, jockey: "D. Fernández" },
      ]

      setPredictions(predictionData)
      setIsCalculating(false)
    }, 2000)
  }

  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="h-8 w-10 relative">
              <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
            </div>
            <div className="h-8 w-8 relative -ml-2">
              <Image
                src="/images/jinete-ganador.jpg"
                alt="Jinete Ganador"
                fill
                className="object-cover rounded-full border-2 border-white"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Sistema de Predicciones</h1>
        </div>
        <CafecitoButton />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Parámetros de Predicción</CardTitle>
              <CardDescription>Ingrese los datos para calcular favoritos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="track">Hipódromo</Label>
                <Select value={track} onValueChange={setTrack}>
                  <SelectTrigger id="track">
                    <SelectValue placeholder="Seleccionar hipódromo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="palermo">Palermo</SelectItem>
                    <SelectItem value="sanIsidro">San Isidro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" value={raceDate} onChange={(e) => setRaceDate(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="race">Número de Carrera</Label>
                <Input
                  id="race"
                  type="number"
                  placeholder="Ej: 5"
                  value={raceNumber}
                  onChange={(e) => setRaceNumber(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={calculatePredictions}
                disabled={isCalculating || !track || !raceDate || !raceNumber}
              >
                {isCalculating ? (
                  <>Calculando...</>
                ) : (
                  <>
                    <CalculatorIcon className="mr-2 h-4 w-4" />
                    Calcular Predicciones
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Resultados de Predicción</CardTitle>
              <CardDescription>Basado en nuestro modelo matemático y datos históricos</CardDescription>
            </CardHeader>
            <CardContent>
              {predictions.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Pos.</TableHead>
                      <TableHead>Caballo</TableHead>
                      <TableHead>Jinete</TableHead>
                      <TableHead className="text-right">Prob. %</TableHead>
                      <TableHead className="text-right">Cuota</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {predictions.map((pred, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {index === 0 ? (
                            <div className="flex items-center">
                              <TrophyIcon className="h-4 w-4 text-yellow-500 mr-1" />
                              {pred.position}
                            </div>
                          ) : (
                            pred.position
                          )}
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <div className="w-4 h-4 relative mr-2">
                              <Image src="/images/ganador.jpg" alt="Caballo" fill className="object-contain" />
                            </div>
                            {pred.horse}
                          </div>
                        </TableCell>
                        <TableCell>{pred.jockey}</TableCell>
                        <TableCell className="text-right">{pred.probability}%</TableCell>
                        <TableCell className="text-right">{pred.odds.toFixed(1)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-20 relative">
                      <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
                    </div>
                    <div className="h-16 w-16 relative -ml-4">
                      <Image
                        src="/images/jinete-ganador.jpg"
                        alt="Jinete Ganador"
                        fill
                        className="object-cover rounded-full border-2 border-white"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">No hay predicciones disponibles</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete los parámetros y haga clic en "Calcular Predicciones"
                  </p>
                  <div className="mt-4">
                    <CafecitoButton />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {predictions.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Análisis de Factores</CardTitle>
                <CardDescription>Variables consideradas en el cálculo</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="performance">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="performance">Rendimiento</TabsTrigger>
                    <TabsTrigger value="track">Pista</TabsTrigger>
                    <TabsTrigger value="jockey">Jinete</TabsTrigger>
                  </TabsList>
                  <TabsContent value="performance" className="space-y-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      Análisis de rendimiento histórico de los caballos en condiciones similares:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Tormenta Negra:</span>
                        <span>Ganador en 4 de las últimas 5 carreras en distancias similares.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Veloz Centella:</span>
                        <span>Segundo puesto en 3 de las últimas 4 carreras.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Rey del Viento:</span>
                        <span>Mejora progresiva en las últimas 6 carreras.</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="track" className="space-y-4 mt-4">
                    <p className="text-sm text-muted-foreground">Análisis de condiciones de la pista y clima:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Estado de la pista:</span>
                        <span>Normal, sin lluvias recientes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Temperatura:</span>
                        <span>22°C, condiciones óptimas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">Viento:</span>
                        <span>Leve, 10 km/h, sin impacto significativo.</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="jockey" className="space-y-4 mt-4">
                    <p className="text-sm text-muted-foreground">Análisis de estadísticas de jinetes:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">M. Rodríguez:</span>
                        <span>68% de victorias en la temporada actual.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">J. Pérez:</span>
                        <span>54% de podios en los últimos 3 meses.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">A. González:</span>
                        <span>Especialista en distancias medias con 62% de efectividad.</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
                <div className="flex justify-center mt-6">
                  <CafecitoButton />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
