import Image from "next/image"
import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { ModeToggle } from "@/components/mode-toggle"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left side - Image */}
      <div className="md:w-1/2 bg-green-50 dark:bg-green-950/30 flex items-center justify-center p-6">
        <div className="max-w-md">
          <div className="absolute top-4 right-4 md:hidden">
            <ModeToggle />
          </div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="Agricultural data visualization"
            className="rounded-lg shadow-lg"
            priority
          />
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400">
              Agri - Horticultural Commodity Price Prediction
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              AI-driven agricultural commodity price prediction system that enhances forecasting accuracy and aids in
              strategic market interventions.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 relative">
        <div className="absolute top-4 right-4 hidden md:block">
          <ModeToggle />
        </div>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome Back</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Sign in to access your agricultural price prediction dashboard
            </p>
          </div>

          <LoginForm />

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="#" className="font-medium text-green-600 dark:text-green-400 hover:text-green-500">
                Sign up  
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
