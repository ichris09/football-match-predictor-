import React, { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const FootballPredictor: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState("")
  const [awayTeam, setAwayTeam] = useState("")
  const [league, setLeague] = useState("")
  const [loading, setLoading] = useState(false)
  const [prediction, setPrediction] = useState<any>(null)
  const [error, setError] = useState("")
  const [accuracy, setAccuracy] = useState<number | null>(null)

  useEffect(() => {
    fetchAccuracy()
  }, [])

  const fetchAccuracy = async () => {
    try {
      const response = await axios.get(`${API_URL}/accuracy`)
      setAccuracy(response.data.accuracy)
    } catch (err) {
      console.error("Failed to fetch accuracy:", err)
    }
  }

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setPrediction(null)

    try {
      const response = await axios.post(`${API_URL}/predict`, {
        home_team: homeTeam,
        away_team: awayTeam,
        league: league
      })
      setPrediction(response.data)
    } catch (err) {
      setError("Failed to get prediction. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // ... rest of the component code ...
}