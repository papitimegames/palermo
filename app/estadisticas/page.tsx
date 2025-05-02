"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

export default function EstadisticasPage() {
  const [track, setTrack] = useState("all")
  const [period, setPeriod] = useState("month")
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Datos de ejemplo para las estadísticas
  const winnersByOdds = [
    { name: "1.0-2.0", palermo: 35, sanIsidro: 32 },
    { name: "2.1-4.0", palermo: 28, sanIsidro: 25 },
    { name: "4.1-6.0", palermo: 18, sanIsidro: 20 },
    { name: "6.1-10.0", palermo: 12, sanIsidro: 15 },
    { name: ">10.0", palermo: 7, sanIsidro: 8 },
  ]

  const winnersByDistance = [
    { name: "1000m", palermo: 22, sanIsidro: 15 },
    { name: "1200m", palermo: 18, sanIsidro: 12 },
    { name: "1400m", palermo: 15, sanIsidro: 14 },
    { name: "1600m", palermo: 20, sanIsidro: 18 },
    { name: "1800m", palermo: 12, sanIsidro: 16 },
    { name: "2000m", palermo: 8, sanIsidro: 15 },
    { name: "2200m+", palermo: 5, sanIsidro: 10 },
  ]

  const jockeyPerformance = [
    { name: "M. Rodríguez", victorias: 12, podios: 28, participaciones: 42 },
    { name: "J. Pérez", victorias: 9, podios: 22, participaciones: 38 },
    { name: "F. López", victorias: 10, podios: 24, participaciones: 40 },
    { name: "R. Sánchez", victorias: 8, podios: 20, participaciones: 36 },
    { name: "A. González", victorias: 7, podios: 18, participaciones: 34 },
  ]

  const favoriteDistribution = [
    { name: "Ganadores", value: 68 },
    { name: "No ganadores", value: 32 },
  ]

  const COLORS = ["hsl(var(--primary))", "hsl(var(--muted))"]

  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Estadísticas</h1>
          <p className="text-muted-foreground">Análisis detallado de carreras y resultados</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={track} onValueChange={setTrack}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Hipódromo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="palermo">Palermo</SelectItem>
              <SelectItem value="sanIsidro">San Isidro</SelectItem>
            </SelectContent>
          </Select>

          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Última semana</SelectItem>
              <SelectItem value="month">Último mes</SelectItem>
              <SelectItem value="year">Último año</SelectItem>
              <SelectItem value="all">Todo el historial</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? date.toLocaleDateString() : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ganadores por Cuota</CardTitle>
            <CardDescription>Distribución de ganadores según rango de cuotas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={winnersByOdds} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="palermo" name="Palermo" fill="hsl(var(--primary))" />
                  <Bar dataKey="sanIsidro" name="San Isidro" fill="hsl(var(--muted))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ganadores por Distancia</CardTitle>
            <CardDescription>Distribución de ganadores según distancia de carrera</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={winnersByDistance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="palermo"
                    name="Palermo"
                    stroke="hsl(var(--primary))"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sanIsidro"
                    name="San Isidro"
                    stroke="hsl(var(--muted))"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Rendimiento de Jinetes</CardTitle>
            <CardDescription>Victorias, podios y participaciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={jockeyPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="victorias" name="Victorias" fill="hsl(var(--primary))" />
                  <Bar dataKey="podios" name="Podios" fill="hsl(var(--muted))" />
                  <Bar dataKey="participaciones" name="Participaciones" fill="hsl(var(--muted-foreground))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Favoritos vs. Ganadores</CardTitle>
            <CardDescription>Porcentaje de favoritos que ganan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={favoriteDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {favoriteDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="model">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="model">Modelo Matemático</TabsTrigger>
            <TabsTrigger value="trends">Tendencias</TabsTrigger>
          </TabsList>
          <TabsContent value="model" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Precisión del Modelo Matemático</CardTitle>
                <CardDescription>Análisis de efectividad de predicciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Precisión por Hipódromo</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Palermo</span>
                            <span className="text-sm font-medium">68%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">San Isidro</span>
                            <span className="text-sm font-medium">62%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "62%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Precisión por Tipo de Predicción</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Ganador</span>
                            <span className="text-sm font-medium">65%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Podio (Top 3)</span>
                            <span className="text-sm font-medium">82%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "82%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Cambios en cuotas</span>
                            <span className="text-sm font-medium">74%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: "74%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-4">Factores de Mayor Impacto</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Rendimiento histórico</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Estadísticas del jinete</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Condiciones de la pista</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Distancia de la carrera</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Tendencias de apuestas</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trends" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tendencias Actuales</CardTitle>
                <CardDescription>Patrones identificados en las últimas carreras</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Palermo</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Los caballos con experiencia previa en la pista tienen un 28% más de probabilidades de ganar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Jinetes con más de 5 victorias en el mes tienen un rendimiento superior en un 32%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Las carreras de 1600m muestran mayor predictibilidad (72% de aciertos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Caballos con buen arranque inicial tienen ventaja significativa en distancias cortas
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">San Isidro</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Mayor importancia del peso del jinete en carreras de larga distancia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Caballos con mejor rendimiento en los últimos 200 metros tienen 25% más de probabilidades de
                          ganar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Las condiciones climáticas afectan menos el rendimiento que en Palermo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Caballos con experiencia en carreras de más de 2000m tienen ventaja en pruebas de resistencia
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Tendencias Generales</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Las cuotas tienden a estabilizarse 30 minutos antes de la carrera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Cambios bruscos en las cuotas en los últimos 15 minutos suelen indicar información
                          privilegiada
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>
                          Caballos con descanso de 2-3 semanas muestran mejor rendimiento que aquellos con más de 4
                          semanas
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
