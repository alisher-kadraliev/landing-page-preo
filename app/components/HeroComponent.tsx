"use client"
import React, { useRef } from 'react'
import Cog from "../assets/cog.png"
import Cylinder from "../assets/cylinder.png"
import Image from "next/image";
import Noodle from "../assets/noodle.png"
import { motion,useScroll,useTransform } from "framer-motion"

const HeroImageComponent = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset:["start end", "end start"]
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [-400, 350])
    const translateY2 = useTransform(scrollYProgress, [0, 1], [1300, -150])
    
  
  return (
      <div ref={heroRef} className="mt-20 md:mt-0 h-[500px] max-lg:h-auto md:flex-1 relative">
          <motion.div animate={{ translateY:[-30,30]}} transition={{repeat:Infinity, repeatType:"mirror", duration:3,ease:"easeInOut"}}>
              <Image src={Cog} alt="cog" width={500} height={500} className="md:absolute md:w-auto right-0" />
          </motion.div>
          <motion.div style={{translateY:translateY}}>
          <Image src={Cylinder} alt="cylinder" width={220} height={220} className="lg:block hidden -top-8 left-0 md:absolute" />
          </motion.div>
          <motion.div style={{translateY: translateY2 }}>
          <Image src={Noodle} alt="noodle" width={220} height={220} className="lg:block hidden -bottom-40 -right-32 md:absolute rotate-[30deg]" />
          </motion.div>
      </div>
  )
}

export default HeroImageComponent