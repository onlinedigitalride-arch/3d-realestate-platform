import React, { Suspense, lazy } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { properties } from '../store/properties'
const VirtualTour = lazy(() => import('../components/3d/VirtualTour'))

export default function PropertyDetail() {
  const { id } = useParams()
  const p = properties.find(x => x.id === Number(id))
  if (!p) return <div className="pt-24 text-center">Property not found</div>
  return (
    <div className="min-h-screen pt-24 px-8 max-w-6xl mx-auto pb-20">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}>
          <span className="text-yellow-400 text-xs tracking-widest uppercase">{p.tag} · {p.type}</span>
          <h1 className="font-serif text-4xl font-black mt-2 mb-4">{p.title}</h1>
          <p className="text-gray-400 mb-6">📍 {p.location}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[['🛏',p.beds,'Bedrooms'],['🚿',p.baths,'Bathrooms'],['📐',p.sqft.toLocaleString(),'Sq Ft']].map(([icon,val,label])=>(
              <div key={label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="font-bold text-lg">{val}</div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            ))}
          </div>
          <div className="text-4xl font-black text-yellow-400 mb-6">
            {p.type==='rent'?`$${p.price.toLocaleString()}/mo`:`$${(p.price/1000000).toFixed(2)}M`}
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-300 transition-all rounded">Schedule Visit</button>
            <Link to="/contact" className="px-6 py-4 glass rounded font-semibold text-yellow-400 hover:border-yellow-400 transition-all">Enquire</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} className="glass rounded-2xl p-6">
          <h3 className="font-serif text-xl mb-4 text-yellow-400">Property Highlights</h3>
          <ul className="space-y-3 text-gray-300">
            {['Prime location with city views','Floor-to-ceiling glass windows','Smart home automation','Private rooftop terrace','Concierge service 24/7','Underground parking x2'].map(f=>(
              <li key={f} className="flex items-center gap-3"><span className="text-yellow-400">✦</span>{f}</li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div>
        <h2 className="font-serif text-3xl font-bold mb-6">Virtual <span className="text-yellow-400">3D Tour</span></h2>
        <Suspense fallback={<div className="h-96 glass rounded-2xl animate-pulse"/>}>
          <VirtualTour />
        </Suspense>
      </div>
    </div>
  )
}
