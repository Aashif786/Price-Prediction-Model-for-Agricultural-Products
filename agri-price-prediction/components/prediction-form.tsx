"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { PredictionResults } from "@/components/prediction-results"

// Data for dropdowns
const CENTERS = [
  "BENGALURU",
  "DHARWAD",
  "MANGALORE",
  "MYSORE",
  "T.PURAM",
  "ERNAKULAM",
  "KOZHIKODE",
  "THRISSUR",
  "PALAKKAD",
  "WAYANAD",
  "VISAKHAPATNAM",
  "VIJAYAWADA",
  "HYDERABAD",
  "PUDUCHERRY",
  "PANAJI",
  "CHENNAI",
  "COIMBATORE",
  "DINDIGUL",
  "TIRUNELVELI",
  "THIRUCHIRAPALLI",
]

const COMMODITIES = [
  "Brinjal",
  "Cabbage",
  "Gram Dal",
  "Groundnut Oil (Packed)",
  "Gur",
  "Masoor Dal",
  "Milk",
  "Moong Dal",
  "Mustard Oil (Packed)",
  "Onion",
  "Palm Oil (Packed)",
  "Potato",
  "Rice",
  "Salt (Packed/Iodised)",
  "Sugar",
  "Sunflower Oil (Packed)",
  "Tea (Loose)",
  "Tomato",
  "Tur Arhar Dal",
  "Urad Dal",
  "Wheat",
]

export function PredictionForm() {
  const [center, setCenter] = useState("")
  const [commodity, setCommodity] = useState("")
  const [days, setDays] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [predictionData, setPredictionData] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    // Validate inputs
    if (!center || !commodity || !days) {
      setError("Please fill in all fields")
      return
    }

    if (Number.parseInt(days) <= 0 || Number.parseInt(days) > 30) {
      setError("Number of days must be between 1 and 30")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, this would call an API endpoint that runs the ARIMA model
      // For now, we'll simulate the model prediction with mock data
      const numDays = Number.parseInt(days)

      // This would be replaced with actual model prediction in production
      // Reference to how it would work with the actual model:
      // 1. Send request to API with center, commodity, and days
      // 2. API loads the ARIMA model from "../sourcecode/arima_model.pkl"
      // 3. API runs model.forecast(steps=numDays)
      // 4. API returns the forecast data

      const mockData = generateMockPredictionData(center, commodity, numDays)
      setPredictionData(mockData)
    } catch (err) {
      setError("Failed to generate prediction. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Function to generate mock prediction data (simulating ARIMA model output)
  const generateMockPredictionData = (center: string, commodity: string, days: number) => {
    // Base price depends on commodity
    let basePrice = 0

    switch (commodity) {
      case "Onion":
        basePrice = 40
        break
      case "Potato":
        basePrice = 25
        break
      case "Tomato":
        basePrice = 35
        break
      case "Rice":
        basePrice = 60
        break
      case "Wheat":
        basePrice = 30
        break
      case "Sugar":
        basePrice = 45
        break
      case "Milk":
        basePrice = 50
        break
      default:
        // Random base price between 30 and 100
        basePrice = Math.floor(Math.random() * 70) + 30
    }

    // Generate future dates
    const futureDates = []
    for (let i = 1; i <= days; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      futureDates.push(date.toISOString().split("T")[0])
    }

    // Generate daily predictions with some randomness
    // This simulates what the ARIMA model would produce
    const predictions = []
    let currentPrice = basePrice

    for (let i = 0; i < days; i++) {
      // Add some random fluctuation (-5% to +5%)
      const fluctuation = (Math.random() * 10 - 5) / 100
      currentPrice = currentPrice * (1 + fluctuation)

      predictions.push({
        day: i + 1,
        date: futureDates[i],
        price: currentPrice.toFixed(2),
      })
    }

    return {
      center,
      commodity,
      days,
      predictions,
      modelInfo: {
        name: "ARIMA",
        path: "../sourcecode/arima_model.pkl",
        description: "Time series forecasting model for agricultural commodity prices",
      },
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Price Prediction</CardTitle>
          <CardDescription>Enter details to predict commodity prices</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="center">Center</Label>
                <Select value={center} onValueChange={setCenter}>
                  <SelectTrigger id="center">
                    <SelectValue placeholder="Select center" />
                  </SelectTrigger>
                  <SelectContent>
                    {CENTERS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="commodity">Commodity</Label>
                <Select value={commodity} onValueChange={setCommodity}>
                  <SelectTrigger id="commodity">
                    <SelectValue placeholder="Select commodity" />
                  </SelectTrigger>
                  <SelectContent>
                    {COMMODITIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="days">Number of Days (N)</Label>
                <Input
                  id="days"
                  type="number"
                  min="1"
                  max="30"
                  placeholder="Enter days to forecast"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Prediction...
                </>
              ) : (
                "Generate Prediction"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {predictionData && <PredictionResults data={predictionData} />}
    </div>
  )
}
