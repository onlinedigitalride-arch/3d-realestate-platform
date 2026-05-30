import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-5 flex justify-between items-center">
      <Link to="/" className="text-xl font-serif font-bold text-yellow-400 tracking-widest">LUX<span className="text-white">ESTATE</span></Link>
      <div className="flex gap-8 text-sm font-light tracking-widest uppercase">
        <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <Link to="/listings" className="hover:text-yellow-400 transition-colors">Listings</Link>
        <Link to="/tour" className="hover:text-yellow-400 transition-colors">Virtual Tour</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
      </div>
      <button className="px-5 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded text-sm tracking-widest uppercase transition-all">Book Visit</button>
    </nav>
  )
}
