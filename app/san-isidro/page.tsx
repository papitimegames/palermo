import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronRightIcon, TrophyIcon, BarChart3Icon } from "lucide-react"
import Link from "next/link"
import CafecitoButton from "@/components/cafecito-button"
import Image from "next/image"

export default function SanIsidroPage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center justify-between mb-6">
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
          <div>
            <h1 className="text-3xl font-bold">Hipódromo de San Isidro</h1>
            <p className="text-muted-foreground">Estadísticas y análisis de carreras</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CafecitoButton />
          <Button>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Ver calendario
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Próxima Carrera</CardTitle>
            <CardDescription>Domingo, 5 de Mayo 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Clásico San Isidro</p>
                  <p className="text-sm text-muted-foreground">2000 metros - 16:15hs</p>
                </div>
                <Button variant="outline" size="sm">
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Participantes destacados:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 relative">
                      <Image src="/images/ganador.jpg" alt="Caballo" fill className="object-contain" />
                    </div>
                    <span className="text-sm">Relámpago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 relative">
                      <Image src="/images/ganador.jpg" alt="Caballo" fill className="object-contain" />
                    </div>
                    <span className="text-sm">Estrella Fugaz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 relative">
                      <Image src="/images/ganador.jpg" alt="Caballo" fill className="object-contain" />
                    </div>
                    <span className="text-sm">Trueno Salvaje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 relative">
                      <Image src="/images/ganador.jpg" alt="Caballo" fill className="object-contain" />
                    </div>
                    <span className="text-sm">Flecha Plateada</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estadísticas de la Pista</CardTitle>
            <CardDescription>Últimos 30 días</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Carreras</p>
                  <p className="text-2xl font-bold">38</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Participantes</p>
                  <p className="text-2xl font-bold">342</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Tiempo promedio</p>
                  <p className="text-2xl font-bold">1:45.23</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Cuota promedio</p>
                  <p className="text-2xl font-bold">4.2</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Jinetes Destacados</CardTitle>
            <CardDescription>Por victorias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-4 w-4 text-yellow-500" />
                  <p className="font-medium">F. López</p>
                </div>
                <p className="font-medium">10 victorias</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-4 w-4 text-gray-400" />
                  <p className="font-medium">R. Sánchez</p>
                </div>
                <p className="font-medium">8 victorias</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-4 w-4 text-amber-700" />
                  <p className="font-medium">D. Fernández</p>
                </div>
                <p className="font-medium">7 victorias</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="ml-6">L. García</span>
                </div>
                <p className="font-medium">5 victorias</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="ml-6">M. Rodríguez</span>
                </div>
                <p className="font-medium">4 victorias</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="history">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="history">Historial</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="records">Récords</TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Carreras</CardTitle>
                <CardDescription>Últimas 10 carreras en San Isidro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{index % 2 === 0 ? "Clásico San Isidro" : "Gran Premio"}</p>
                          <p className="text-sm text-muted-foreground">
                            {`${28 - index * 3}/${4}/${2024} - ${index % 2 === 0 ? "2000" : "1600"} metros`}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <div className="flex items-center">
                              <div className="w-4 h-4 relative mr-1">
                                <Image
                                  src="/images/ganador.jpg"
                                  alt="Caballo ganador"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <TrophyIcon className="h-3 w-3 text-yellow-500" />
                            </div>
                            <p className="font-medium">
                              {index % 3 === 0 ? "Relámpago" : index % 3 === 1 ? "Estrella Fugaz" : "Trueno Salvaje"}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Jinete: {index % 2 === 0 ? "F. López" : "R. Sánchez"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Button variant="outline">Ver historial completo</Button>
                  <CafecitoButton />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="stats" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas Detalladas</CardTitle>
                <CardDescription>Análisis de rendimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Distribución por distancia</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">1000-1200m</p>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }}></div>
                        </div>
                        <p className="text-xs text-right">25%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">1400-1600m</p>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "35%" }}></div>
                        </div>
                        <p className="text-xs text-right">35%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">1800-2400m</p>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "40%" }}></div>
                        </div>
                        <p className="text-xs text-right">40%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Favoritos vs. Ganadores</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Acierto de favoritos</p>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "62%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Favoritos ganadores</span>
                        <span>62%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="records" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Récords de la Pista</CardTitle>
                <CardDescription>Mejores tiempos registrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium">1000 metros</p>
                      <p className="text-xl font-bold">0:57.45</p>
                      <p className="text-xs text-muted-foreground">Estrella Fugaz (2023)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">1600 metros</p>
                      <p className="text-xl font-bold">1:35.67</p>
                      <p className="text-xs text-muted-foreground">Relámpago (2024)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">2400 metros</p>
                      <p className="text-xl font-bold">2:28.12</p>
                      <p className="text-xs text-muted-foreground">Trueno Salvaje (2023)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Análisis Matemático</h2>
        <Card>
          <CardHeader>
            <CardTitle>Modelo Predictivo para San Isidro</CardTitle>
            <CardDescription>Factores específicos considerados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                El modelo matemático para el hipódromo de San Isidro considera los siguientes factores con sus
                respectivos pesos:
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Rendimiento histórico del caballo</p>
                  <p className="font-medium">30%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Estadísticas del jinete</p>
                  <p className="font-medium">20%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Condiciones de la pista</p>
                  <p className="font-medium">20%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Distancia de la carrera</p>
                  <p className="font-medium">20%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Tendencias de apuestas</p>
                  <p className="font-medium">10%</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Particularidades de San Isidro:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>La pista favorece a caballos con mayor resistencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Mayor importancia a la experiencia previa en esta pista</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Ajuste por condiciones climáticas menos significativo que en Palermo</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link href="/predicciones">
                  <Button className="w-full">
                    <BarChart3Icon className="mr-2 h-4 w-4" />
                    Generar predicciones para San Isidro
                  </Button>
                </Link>
                <div className="flex justify-center">
                  <CafecitoButton />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
