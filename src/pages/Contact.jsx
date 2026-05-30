import React from 'react'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-4xl mx-auto">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
        <h1 className="font-serif text-5xl font-black mb-4">GET IN <span className="text-yellow-400">TOUCH</span></h1>
        <p className="text-gray-400 mb-12">Our estate consultants are available 7 days a week</p>
        <div className="glass rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input className="bg-transparent border border-gray-700 focus:border-yellow-400 rounded-lg px-4 py-3 outline-none transition-colors" placeholder="Full Name"/>
            <input className="bg-transparent border border-gray-700 focus:border-yellow-400 rounded-lg px-4 py-3 outline-none transition-colors" placeholder="Email Address"/>
            <input className="bg-transparent border border-gray-700 focus:border-yellow-400 rounded-lg px-4 py-3 outline-none transition-colors" placeholder="Phone Number"/>
            <input className="bg-transparent border border-gray-700 focus:border-yellow-400 rounded-lg px-4 py-3 outline-none transition-colors" placeholder="Budget Range"/>
          </div>
          <textarea className="w-full bg-transparent border border-gray-700 focus:border-yellow-400 rounded-lg px-4 py-3 outline-none transition-colors mb-6 h-32 resize-none" placeholder="Your requirements..."/>
          <button className="w-full py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest hover:bg-yellow-300 transition-all rounded-lg">Send Enquiry</button>
        </div>
      </motion.div>
    </div>
  )
}
