import { Cloud, Upload, Video, Users, Zap, Globe } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to succeed</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our platform provides all the tools you need to upload, manage, and share your videos.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Uploads</h3>
          <p className="text-muted-foreground">
            Upload videos of any size with our drag-and-drop interface. Support for all popular formats.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Cloud className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
          <p className="text-muted-foreground">
            All your videos are stored securely in the cloud, accessible from anywhere at any time.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Video Management</h3>
          <p className="text-muted-foreground">
            Organize your content with playlists, categories, and tags. Edit metadata anytime.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Grow Your Audience</h3>
          <p className="text-muted-foreground">
            Build a community around your content with subscribers, comments, and likes.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast Streaming</h3>
          <p className="text-muted-foreground">
            Deliver high-quality video with adaptive streaming that works on any device or connection.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-muted-foreground">
            Share your videos with viewers around the world with our global content delivery network.
          </p>
        </div>
      </div>
    </section>
  )
}

