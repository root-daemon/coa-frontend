'use client'

import { Instagram, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const clubs = [
  {
    "title": "NextTech Lab",
    "type": "Technology Research Lab",
    "description": "The Next Tech Lab pioneers advancements in AI, Cryptography, IoT, Blockchain, and Extended Reality. We foster collaboration to develop transformative solutions like AI-driven automation, secure cryptographic techniques, interconnected IoT systems, transparent blockchain transactions, and immersive XR experiences, driving technological progress and innovation.",
    "social_media": {
      "instagram": "https://www.instagram.com/nexttechlab",
      "x":"https://x.com/nexttechlab?mx=2",
      "linkedin": "https://www.linkedin.com/company/nexttechlab/"
    },
    "recruiting_status": "Not Recruiting"
  },
  // ... other clubs data
]

export function ClubGrid() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Explore the clubs at SRM KTR Campus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <Card key={index} className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{club.title}</CardTitle>
              <Badge variant="secondary" className="mt-2">
                {club.type}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 line-clamp-3">{club.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex space-x-2">
                {club.social_media.instagram && (
                  <a href={club.social_media.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {club.social_media.linkedin && (
                  <a href={club.social_media.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {club.social_media.x && (
                  <a href={club.social_media.x} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
              <Badge variant={club.recruiting_status === "Not Recruiting" ? "destructive" : "default"}>
                {club.recruiting_status}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}