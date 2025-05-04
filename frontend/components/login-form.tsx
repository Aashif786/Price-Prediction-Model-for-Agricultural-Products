"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Valid credentials
const VALID_CREDENTIALS = [
  { email: "aashifanshaf786@gmail.com", password: "19102004" },
  { email: "sha2005ranya@gmail.com", password: "01062005" },
  { email: "santhoshsanthosh24133@gmail.com", password: "23082004" },
]

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if credentials are valid
      const isValid = VALID_CREDENTIALS.some(
        (cred) => cred.email === formData.email && cred.password === formData.password,
      )

      if (isValid) {
        // Store user email in session storage for display in the dashboard
        if (typeof window !== "undefined") {
          sessionStorage.setItem("userEmail", formData.email)
        }
        router.push("/dashboard")
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (err) {
      setError("Failed to login. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isLoading}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a href="#" className="text-sm text-green-600 dark:text-green-400 hover:text-green-500">
            Forgot password?
          </a>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          required
          disabled={isLoading}
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  )
}
