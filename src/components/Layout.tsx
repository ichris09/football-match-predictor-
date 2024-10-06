import React from 'react'
import { Link } from 'react-router-dom'
import { SoccerBall, Home, BarChart2 } from 'lucide-react'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <SoccerBall className="mr-2" />
            FootballPredictor
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200 flex items-center">
                <Home className="mr-1" size={18} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/predictor" className="hover:text-blue-200 flex items-center">
                <BarChart2 className="mr-1" size={18} />
                Predictor
              </Link>
            </li>
            <li>
              <Link to="/news-and-stats" className="hover:text-blue-200 flex items-center">
                <SoccerBall className="mr-1" size={18} />
                News & Stats
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 FootballPredictor. All rights reserved.
        </div>
      </footer>
    </div>
  )
}