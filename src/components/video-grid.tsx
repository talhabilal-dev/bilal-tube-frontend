import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"

type Video = {
  id: string
  title: string
  thumbnail: string
  views: number
  createdAt: Date
  duration: string
  channel: {
    name: string
    avatar: string
  }
}

const videos: Video[] = [
  {
    id: "1",
    title: "How to Build a Next.js Application with Server Components",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 1542,
    createdAt: new Date(2023, 5, 15),
    duration: "12:34",
    channel: {
      name: "TechTutorials",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "2",
    title: "The Ultimate Guide to Tailwind CSS in 2023",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 8721,
    createdAt: new Date(2023, 6, 22),
    duration: "18:27",
    channel: {
      name: "CSS Masters",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "3",
    title: "React Server Components Explained",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 4231,
    createdAt: new Date(2023, 7, 5),
    duration: "22:15",
    channel: {
      name: "React Experts",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "4",
    title: "Building a Full-Stack App with Next.js and Prisma",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 3187,
    createdAt: new Date(2023, 8, 12),
    duration: "32:40",
    channel: {
      name: "Full Stack Devs",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "5",
    title: "TypeScript Tips and Tricks for 2023",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 6542,
    createdAt: new Date(2023, 9, 8),
    duration: "15:22",
    channel: {
      name: "TypeScript Guru",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: "6",
    title: "How to Deploy Your Next.js App to Vercel",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    views: 2876,
    createdAt: new Date(2023, 10, 3),
    duration: "8:45",
    channel: {
      name: "Deployment Pro",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

export function VideoGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Link key={video.id} href={`/video/${video.id}`} className="group">
          <div className="space-y-3">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={video.channel.avatar || "/placeholder.svg"}
                  alt={video.channel.name}
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="line-clamp-2 font-medium leading-tight group-hover:text-primary">{video.title}</h3>
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span>{video.channel.name}</span>
                  <span>
                    {video.views.toLocaleString()} views • {formatDistanceToNow(video.createdAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

