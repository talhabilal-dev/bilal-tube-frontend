import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoGrid } from "@/components/video-grid"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <section className="container mx-auto py-12 px-4 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trending Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover what's popular right now on BilalTube</p>
          </div>
          <VideoGrid />
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/videos">Browse All Videos</Link>
            </Button>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to share your content?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of creators who are sharing their videos with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default">
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/upload">Upload Video</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

