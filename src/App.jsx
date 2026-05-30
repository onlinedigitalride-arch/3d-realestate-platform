import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Loader from './components/ui/Loader'
const Home = lazy(() => import('./pages/Home'))
const Listings = lazy(() => import('./pages/Listings'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const Tour = lazy(() => import('./pages/Tour'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  )
}
