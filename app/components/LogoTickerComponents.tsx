"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
interface item{
    logo: string,
    name: string
}
const LogoTickerComponents = ({item,index}:{item:item,index:number}) => {
  return (
      <motion.div key={index} className="flex items-center justify-center">
          <Image src={item.logo} className="w-auto h-8" alt={item.name} width={100} height={100} />
      </motion.div>
  )
}

export default LogoTickerComponents