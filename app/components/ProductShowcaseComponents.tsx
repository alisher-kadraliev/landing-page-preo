"use client"
import Image from "next/image";
import PyramidImage from "../assets/pyramid.png";
import TubeImage from "../assets/tube.png";
import { motion } from "framer-motion";
const ProductShowcaseComponents = ({}) => {

    return (
        <div>
            <motion.div
                initial={{ translateY: 100}}
                whileInView={{ translateY:0 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
                <Image src={PyramidImage} width={250} height={250} className="absolute top-48 -right-16 max-lg:h-1/6 max-lg:w-1/6 max-lg:right-0 max-lg:top-96" alt="Product 1" />
            </motion.div>
            <motion.div 
                initial={{ translateY: 100 }} 
                whileInView={{ translateY: 0 }} 
                transition={{ duration: 1, ease: "easeInOut" }}>
                <Image src={TubeImage} width={250} height={250} className="absolute bottom-28 -left-30 max-lg:h-1/6 max-lg:w-1/6 max-lg:left-0" alt="Product 1" />
            </motion.div>
        </div>
    )
}

export default ProductShowcaseComponents