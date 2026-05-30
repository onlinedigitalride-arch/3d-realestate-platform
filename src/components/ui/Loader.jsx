import React from 'react'
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#080C14] flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"/>
      <p className="text-yellow-400 text-xs tracking-[0.5em] uppercase">Loading Estate</p>
    </div>
  )
}
