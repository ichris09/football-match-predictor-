import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  content: string
  source: string
  date: string
}

export const NewsAndStats: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      // Simulating API call to fetch news
      await new Promise(resolve => setTimeout(resolve, 1500))
      const mockNews: NewsItem[] = [
        {
          id: 1,
          title: "Injury Update: Star Player Out for 3 Weeks",
          content: "The team's leading scorer will miss the next three matches due to a hamstring injury.",
          source: "Sky Sports",
          date: "2024-03-15"
        },
        {
          id: 2,
          title: "Transfer Rumors: Top Club Eyeing Young Talent",
          content: "Sources suggest a major European club is preparing a bid for the league's breakout star.",
          source: "BBC Sport",
          date: "2024-03-14"
        },
        {
          id: 3,
          title: "Manager Under Pressure After Recent Results",
          content: "Following a string of poor performances, the club's board is reportedly considering a change.",
          source: "ESPN",
          date: "2024-03-13"
        }
      ]
      setNews(mockNews)
      setLoading(false)
    }

    fetchNews()
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-4">Latest News and Stats</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.source} - {item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}