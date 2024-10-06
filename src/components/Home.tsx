import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to FootballPredictor</h1>
      <p className="text-xl mb-8">Get accurate predictions for European football matches based on the latest data and news.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/predictor" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
          Try the Predictor
          <ArrowRight className="ml-2" size={18} />
        </Link>
        <Link to="/news-and-stats" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
          View News & Stats
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
      <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Football stadium" className="mt-12 rounded-lg shadow-lg mx-auto" />
    </div>
  )
}