"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface Prediction {
  day: number
  date: string
  price: string
}

// Update the PredictionData interface to include modelInfo
interface PredictionData {
  center: string
  commodity: string
  days: number
  predictions: Prediction[]
  modelInfo: {
    name: string
    path: string
    description: string
  }
}

interface PredictionResultsProps {
  data: PredictionData
}

// Update the PredictionResults component to include model info
export function PredictionResults({ data }: PredictionResultsProps) {
  const [view, setView] = useState("chart")

  // Format data for chart
  const chartData = data.predictions.map((p) => ({
    day: p.day,
    date: p.date,
    price: Number.parseFloat(p.price),
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Results</CardTitle>
        <CardDescription>
          Price forecast for {data.commodity} in {data.center} for the next {data.days} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 bg-muted rounded-md">
          <p className="text-sm">
            <span className="font-semibold">Model:</span> {data.modelInfo.name}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Model Path:</span> {data.modelInfo.path}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Description:</span> {data.modelInfo.description}
          </p>
        </div>

        <Tabs defaultValue="chart" className="space-y-4" onValueChange={setView}>
          <TabsList>
            <TabsTrigger value="chart">Chart View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>

          <TabsContent value="chart" className="space-y-4">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 50,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                  <YAxis
                    label={{
                      value: "Price (₹)",
                      angle: -90,
                      position: "insideLeft",
                      style: { textAnchor: "middle" },
                    }}
                  />
                  <Tooltip formatter={(value) => [`₹${value}`, "Price"]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="price"
                    name="Predicted Price"
                    stroke="#22c55e"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="table">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Predicted Price (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.predictions.map((prediction) => (
                    <TableRow key={prediction.day}>
                      <TableCell>{prediction.day}</TableCell>
                      <TableCell>{prediction.date}</TableCell>
                      <TableCell className="text-right">₹{prediction.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
