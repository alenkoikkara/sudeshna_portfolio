import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AsapCaseStudy from './pages/AsapCaseStudy'
import PetClearCaseStudy from './pages/PetClearCaseStudy'
import ReturnLoopCaseStudy from './pages/ReturnLoopCaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/work/ASAP" element={<AsapCaseStudy />} />
        <Route path="/work/PetClear" element={<PetClearCaseStudy />} />
        <Route path="/work/ReturnLoop" element={<ReturnLoopCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

