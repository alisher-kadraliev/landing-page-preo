"use client"
import React from 'react'
import { motion } from 'framer-motion'
const PricingComponents = () => {
  return (
      <div className="inlie-flex text-sm px-4 py-1.5 rounded-xl border border-gray-200">
          <motion.span animate={{ backgroundPositionX: '-100%' }} transition={{ duration: 1, ease: 'linear', repeat: Infinity ,repeatType: 'loop'}} className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] [background-size:200%] text-transparent bg-clip-text font-medium">Popular</motion.span>
      </div>
  )
}

export default PricingComponents