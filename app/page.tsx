"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronRightIcon } from "lucide-react"
import RaceCalendar from "@/components/race-calendar"
import FavoriteHorses from "@/components/favorite-horses"
import RecentResults from "@/components/recent-results"
import PredictionStats from "@/components/prediction-stats"
import FavoritosDelDiaModal from "@/components/favoritos-del-dia-modal"
import CafecitoButton from "@/components/cafecito-button"
import MusicPlayer from "@/components/music-player"
import { ModelDetailsDialog } from "@/components/model-details-dialog"
import { RegisterDialog } from "@/components/register-dialog"
import Image from "next/image"
import { useState } from "react"
import { LuxuryClock } from "@/components/luxury-clock"

export default function Home() {
  const [showModelDetails, setShowModelDetails] = useState(false)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-pattern">
      <FavoritosDelDiaModal />
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="h-8 w-12 relative">
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
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              Papiweb caballos ganadores
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium nav-link">
              Inicio
            </Link>
            <Link
              href="/palermo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 nav-link"
            >
              <div className="w-6 h-6 relative">
                <Image src="/images/palermo.png" alt="Escudo Palermo" fill className="object-contain" />
              </div>
              Palermo
            </Link>
            <Link
              href="/san-isidro"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 nav-link"
            >
              <div className="w-6 h-6 relative">
                <Image src="/images/sanisidrohipodromooriginal.png" alt="Escudo San Isidro" fill className="object-contain" />
              </div>
              San Isidro
            </Link>
            <Link
              href="/estadisticas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground nav-link"
            >
              Estadísticas
            </Link>
            <Link
              href="/predicciones"
              className="text-sm font-medium text-muted-foreground hover:text-foreground nav-link"
            >
              Predicciones
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <CafecitoButton />
            <LuxuryClock />
            <Button 
              size="sm" 
              className="shadow-md hover:shadow-lg transition-shadow focus-visible-ring"
              onClick={() => setShowRegisterDialog(true)}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full card-hover border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Panel de Control</CardTitle>
                  <CardDescription>Sistema de análisis de carreras en Palermo y San Isidro</CardDescription>
                </div>
                <Tabs defaultValue="palermo" className="w-[400px]">
                  <TabsList className="bg-muted/50">
                    <TabsTrigger value="palermo" className="flex items-center gap-1 data-[state=active]:bg-primary/10">
                      <div className="w-6 h-6 relative">
                        <Image src="/images/palermo.png" alt="Escudo Palermo" fill className="object-contain" />
                      </div>
                      Palermo
                    </TabsTrigger>
                    <TabsTrigger
                      value="san-isidro"
                      className="flex items-center gap-1 data-[state=active]:bg-primary/10"
                    >
                      <div className="w-6 h-6 relative">
                        <Image src="/images/sanisidrohipodromooriginal.png" alt="Escudo San Isidro" fill className="object-contain" />
                      </div>
                      San Isidro
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="palermo">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Próxima carrera: 15:30</span>
                      <Button variant="outline" size="sm" className="gap-1 scale-on-hover">
                        <CalendarIcon className="h-4 w-4" />
                        Ver calendario
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="san-isidro">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Próxima carrera: 16:15</span>
                      <Button variant="outline" size="sm" className="gap-1 scale-on-hover">
                        <CalendarIcon className="h-4 w-4" />
                        Ver calendario
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Próximas Carreras</CardTitle>
                <CardDescription>Calendario de eventos</CardDescription>
              </CardHeader>
              <CardContent>
                <RaceCalendar />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Caballos Favoritos</CardTitle>
                <CardDescription>Basado en rendimiento histórico</CardDescription>
              </CardHeader>
              <CardContent>
                <FavoriteHorses />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Resultados Recientes</CardTitle>
                <CardDescription>Últimas 5 carreras</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentResults />
              </CardContent>
            </Card>

            <Card className="col-span-full card-hover border-l-4 border-l-primary">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Estadísticas de Predicción</CardTitle>
                <CardDescription>Precisión del modelo matemático</CardDescription>
              </CardHeader>
              <CardContent>
                <PredictionStats />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container py-8">
          <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent inline-block">
            Análisis de Datos
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card-hover">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Modelo Matemático</CardTitle>
                <CardDescription>Lógica para selección de favoritos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Nuestro sistema utiliza un algoritmo de aprendizaje automático que considera:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Rendimiento histórico del caballo en condiciones similares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Estadísticas del jockey y entrenador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Condiciones de la pista y clima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Tendencias de apuestas recientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="h-4 w-4 mt-0.5 text-primary" />
                    <span>Análisis de variación de cuotas</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full scale-on-hover"
                    onClick={() => setShowModelDetails(true)}
                  >
                    Ver detalles del modelo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                <CardTitle>Precisión del Sistema</CardTitle>
                <CardDescription>Rendimiento de predicciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Aciertos en ganador</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Aciertos en podio</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Predicción de cambios en cuotas</span>
                    <span className="text-sm font-medium">74%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-green-500 transition-all duration-1000"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <ModelDetailsDialog
          open={showModelDetails}
          onOpenChange={setShowModelDetails}
        />

        <RegisterDialog
          open={showRegisterDialog}
          onOpenChange={setShowRegisterDialog}
        />

        <section className="container py-6">
          <div className="max-w-2xl mx-auto">
            <MusicPlayer />
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-gradient-to-b from-transparent to-amber-50/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="h-6 w-8 relative">
                <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
              </div>
              <div className="h-6 w-6 relative -ml-1">
                <Image
                  src="/images/jinete-ganador.jpg"
                  alt="Jinete Ganador"
                  fill
                  className="object-cover rounded-full border-2 border-white"
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; 2024 Papiweb caballos ganadores. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CafecitoButton />
            <div className="flex gap-4">
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground nav-link">
                Términos
              </Link>
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground nav-link">
                Privacidad
              </Link>
              <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground nav-link">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
