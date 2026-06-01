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
          <p className="text-amber-600 text-xs tracking-[0.5em] uppercase mb-6 font-medium">Premium Properties Worldwide</p>
          <h1 className="text-7xl md:text-9xl font-serif font-black leading-none mb-6 text-gray-900">
            FIND YOUR<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">DREAM</span><br/>HOME
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mb-10 font-light">Experience luxury real estate in immersive 3D. Walk through properties before visiting in person.</p>
          <div className="flex gap-4">
            <Link to="/listings" className="px-8 py-4 bg-amber-500 text-white font-semibold tracking-widest uppercase text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-100 rounded">View Listings</Link>
            <Link to="/tour" className="px-8 py-4 glass text-amber-600 font-semibold tracking-widest uppercase text-sm hover:border-amber-400 transition-all rounded">Virtual Tour</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="absolute bottom-12 right-16 bg-white/90 rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="grid grid-cols-3 gap-8">
            {[['500+','Properties'],['98%','Satisfaction'],['$2.5B','Total Sales']].map(([num,label])=>(
              <div key={label} className="text-right">
                <p className="text-3xl font-black text-amber-500">{num}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
