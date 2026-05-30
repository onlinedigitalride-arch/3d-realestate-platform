import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const BuildingScene = lazy(() => import('../components/3d/BuildingScene'))

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0"><Suspense fallback={null}><BuildingScene /></Suspense></div>
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-16 max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.2}}>
          <p className="text-yellow-400 text-xs tracking-[0.5em] uppercase mb-6">Premium Properties Worldwide</p>
          <h1 className="text-7xl md:text-9xl font-serif font-black leading-none mb-6">
            FIND YOUR<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">DREAM</span><br/>HOME
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mb-10 font-light">Experience luxury real estate in immersive 3D. Walk through properties before visiting in person.</p>
          <div className="flex gap-4">
            <Link to="/listings" className="px-8 py-4 bg-yellow-400 text-black font-semibold tracking-widest uppercase text-sm hover:bg-yellow-300 transition-all">View Listings</Link>
            <Link to="/tour" className="px-8 py-4 glass text-yellow-400 font-semibold tracking-widest uppercase text-sm hover:border-yellow-400 transition-all">Virtual Tour</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="absolute bottom-12 right-16 glass rounded-2xl p-6 text-right">
          <div className="grid grid-cols-3 gap-8">
            {[['500+','Properties'],['98%','Client Satisfaction'],['$2.5B','Total Sales']].map(([num,label]) => (
              <div key={label}><p className="text-3xl font-black text-yellow-400">{num}</p><p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{label}</p></div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
