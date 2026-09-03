import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AsapCaseStudy from './pages/AsapCaseStudy'
import PetClearCaseStudy from './pages/PetClearCaseStudy'
import ReturnLoopCaseStudy from './pages/ReturnLoopCaseStudy'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/work/ASAP" element={<AsapCaseStudy />} />
          <Route path="/work/PetClear" element={<PetClearCaseStudy />} />
          <Route path="/work/ReturnLoop" element={<ReturnLoopCaseStudy />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
