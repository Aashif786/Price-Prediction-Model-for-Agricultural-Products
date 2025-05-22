import { Navbar } from "@/components/navbar"
import { PredictionForm } from "@/components/prediction-form"
import { SourceCodeExplorer } from "@/components/file-explorer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome to the Agri-Horticultural Commodity Price Prediction System
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PredictionForm />
          </div>
          <div>
            <SourceCodeExplorer />
          </div>
        </div>
      </main>
    </div>
  )
}
