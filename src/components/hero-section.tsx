import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Share your videos with the world
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Upload, manage, and share your videos with a powerful platform built for creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/explore">Explore Videos</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Video platform interface"
              width={640}
              height={360}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-48 left-0 right-0 h-72 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

