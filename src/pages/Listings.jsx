import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { properties } from '../store/properties'

function PropertyCard({ p, i }) {
  return (
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}} className="glass rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all group">
      <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#080C14] flex items-center justify-center relative">
        <div className="text-6xl">🏛️</div>
        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{p.tag}</span>
        <span className="absolute top-3 left-3 glass text-white text-xs px-3 py-1 rounded-full capitalize">{p.type}</span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold mb-1">{p.title}</h3>
        <p className="text-gray-400 text-sm mb-3">📍 {p.location}</p>
        <div className="flex gap-4 text-sm text-gray-400 mb-4">
          <span>🛏 {p.beds} beds</span>
          <span>🚿 {p.baths} baths</span>
          <span>📐 {p.sqft.toLocaleString()} sqft</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-yellow-400">{p.type==='rent'?`$${p.price.toLocaleString()}/mo`:`$${(p.price/1000000).toFixed(1)}M`}</span>
          </div>
          <Link to={`/property/${p.id}`} className="px-4 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded text-sm transition-all">View →</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Listings() {
  const [type, setType] = useState('all')
  const filtered = type==='all' ? properties : properties.filter(p=>p.type===type)
  return (
    <div className="min-h-screen pt-24 px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="font-serif text-5xl font-black mb-2">AVAILABLE <span className="text-yellow-400">PROPERTIES</span></h1>
        <p className="text-gray-400">Discover your next investment or dream home</p>
      </div>
      <div className="flex gap-3 mb-8">
        {['all','sale','rent'].map(t=>(
          <button key={t} onClick={()=>setType(t)} className={`px-6 py-2 rounded uppercase text-sm tracking-widest font-medium transition-all ${type===t?'bg-yellow-400 text-black':'glass hover:border-yellow-400'}`}>{t}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {filtered.map((p,i)=><PropertyCard key={p.id} p={p} i={i}/>)}
      </div>
    </div>
  )
}
