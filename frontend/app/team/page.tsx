import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { User, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Team Members</h1>
          <p className="mt-2 text-muted-foreground">
            Meet the team behind the Agri-Horticultural Commodity Price Prediction System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="bg-green-100 dark:bg-green-900/20 p-6 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                <User className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Aashif Anshaf</h3>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link href="mailto:aashifanshaf786@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/Aashif786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aashifnoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-green-100 dark:bg-green-900/20 p-6 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                <User className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Sharanya</h3>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link href="mailto:sha2005ranya@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/sharanyazx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sharanya-thirumoorthi-6a47a8258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-green-100 dark:bg-green-900/20 p-6 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                <User className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Santhosh</h3>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Link
                  href="mailto:santhoshsanthosh24133@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/santhosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/santhosh-s-37117823b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
