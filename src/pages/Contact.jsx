import React from 'react'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-4xl mx-auto bg-[#FAFAF8]">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
        <h1 className="font-serif text-5xl font-black mb-4 text-gray-900">GET IN <span className="text-amber-500">TOUCH</span></h1>
        <p className="text-gray-400 mb-12">Our estate consultants are available 7 days a week</p>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {['Full Name','Email Address','Phone Number','Budget Range'].map(ph=>(
              <input key={ph} className="bg-gray-50 border border-gray-200 focus:border-amber-400 rounded-lg px-4 py-3 outline-none transition-colors text-gray-700" placeholder={ph}/>
            ))}
          </div>
          <textarea className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 rounded-lg px-4 py-3 outline-none transition-colors mb-6 h-32 resize-none text-gray-700" placeholder="Your requirements..."/>
          <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold uppercase tracking-widest transition-all rounded-lg shadow-lg shadow-amber-100">Send Enquiry</button>
        </div>
      </motion.div>
    </div>
  )
}
