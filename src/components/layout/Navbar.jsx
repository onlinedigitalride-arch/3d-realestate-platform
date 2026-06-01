import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-5 flex justify-between items-center">
      <Link to="/" className="text-xl font-serif font-bold text-amber-600 tracking-widest">LUX<span className="text-gray-800 font-light">ESTATE</span></Link>
      <div className="flex gap-8 text-sm font-light tracking-widest uppercase text-gray-600">
        {[['/', 'Home'],['/listings','Listings'],['/tour','Virtual Tour'],['/contact','Contact']].map(([path,label])=>(
          <Link key={path} to={path} className="hover:text-amber-600 transition-colors">{label}</Link>
        ))}
      </div>
      <button className="px-5 py-2 border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded text-sm tracking-widest uppercase transition-all">Book Visit</button>
    </nav>
  )
}
