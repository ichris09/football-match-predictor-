import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { FootballPredictor } from './components/FootballPredictor'
import { NewsAndStats } from './components/NewsAndStats'
import { Layout } from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<FootballPredictor />} />
          <Route path="/news-and-stats" element={<NewsAndStats />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App