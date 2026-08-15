import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/work/:projectId" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

