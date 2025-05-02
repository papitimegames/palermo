"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export default function PredictionStats() {
  const [period, setPeriod] = useState("month")

  // Datos de ejemplo para las estadísticas
  const data = {
    week: [
      { name: "Lun", aciertos: 65, fallos: 35 },
      { name: "Mar", aciertos: 70, fallos: 30 },
      { name: "Mié", aciertos: 62, fallos: 38 },
      { name: "Jue", aciertos: 75, fallos: 25 },
      { name: "Vie", aciertos: 68, fallos: 32 },
      { name: "Sáb", aciertos: 72, fallos: 28 },
      { name: "Dom", aciertos: 78, fallos: 22 },
    ],
    month: [
      { name: "Sem 1", aciertos: 68, fallos: 32 },
      { name: "Sem 2", aciertos: 72, fallos: 28 },
      { name: "Sem 3", aciertos: 65, fallos: 35 },
      { name: "Sem 4", aciertos: 70, fallos: 30 },
    ],
    year: [
      { name: "Ene", aciertos: 62, fallos: 38 },
      { name: "Feb", aciertos: 65, fallos: 35 },
      { name: "Mar", aciertos: 68, fallos: 32 },
      { name: "Abr", aciertos: 70, fallos: 30 },
      { name: "May", aciertos: 72, fallos: 28 },
      { name: "Jun", aciertos: 75, fallos: 25 },
      { name: "Jul", aciertos: 73, fallos: 27 },
      { name: "Ago", aciertos: 71, fallos: 29 },
      { name: "Sep", aciertos: 74, fallos: 26 },
      { name: "Oct", aciertos: 76, fallos: 24 },
      { name: "Nov", aciertos: 78, fallos: 22 },
      { name: "Dic", aciertos: 80, fallos: 20 },
    ],
  }

  return (
    <div>
      <Tabs defaultValue="month" onValueChange={setPeriod}>
        <TabsList className="grid w-full max-w-xs grid-cols-3 bg-muted/50">
          <TabsTrigger value="week" className="data-[state=active]:bg-primary/10">
            Semana
          </TabsTrigger>
          <TabsTrigger value="month" className="data-[state=active]:bg-primary/10">
            Mes
          </TabsTrigger>
          <TabsTrigger value="year" className="data-[state=active]:bg-primary/10">
            Año
          </TabsTrigger>
        </TabsList>
        <TabsContent value="week" className="mt-4 fade-in">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.week} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    border: "none",
                  }}
                />
                <Legend />
                <Bar dataKey="aciertos" name="Aciertos (%)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fallos" name="Fallos (%)" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        <TabsContent value="month" className="mt-4 fade-in">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.month} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    border: "none",
                  }}
                />
                <Legend />
                <Bar dataKey="aciertos" name="Aciertos (%)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fallos" name="Fallos (%)" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        <TabsContent value="year" className="mt-4 fade-in">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.year} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    border: "none",
                  }}
                />
                <Legend />
                <Bar dataKey="aciertos" name="Aciertos (%)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fallos" name="Fallos (%)" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
