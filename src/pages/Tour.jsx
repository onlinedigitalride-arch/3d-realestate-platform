import React, { Suspense, lazy } from 'react'
const VirtualTour = lazy(() => import('../components/3d/VirtualTour'))
export default function Tour() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-5xl mx-auto">
      <h1 className="font-serif text-5xl font-black mb-4">VIRTUAL <span className="text-yellow-400">TOUR</span></h1>
      <p className="text-gray-400 mb-8">Click to enter the immersive 3D walkthrough. Use your mouse to look around.</p>
      <Suspense fallback={<div className="h-[500px] glass rounded-2xl animate-pulse"/>}>
        <VirtualTour />
      </Suspense>
    </div>
  )
}
