"use client"
import Image from "next/image";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import React from "react";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];
const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);
export default function Testimonials() {
  return (
    <section className="pt-10 bg-white">
      <div className="container">
        <div className="flex items-center justify-center mb-3">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="main-text-color text-6xl max-lg:text-4xl font-bold text-center">What our customers are saying</h2>
        <p className="main-desc-color text-center mt-6">Our customers love us and we love them back</p>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[730px] overflow-hidden">
          <TestimonialCard testimonials={firstCol} />
          <TestimonialCard testimonials={secondCol} className="hidden lg:block" />
          <TestimonialCard testimonials={thirdCol} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};


const TestimonialCard = (props: { testimonials: typeof testimonials, className?: string }) => {
  return (
    <div className={`${props.className}`}>
      <motion.div animate={{translateY: "-50%"}} transition={{duration: 10 , ease: "linear", repeat: Infinity, repeatType: "loop"}} className={`flex items-center flex-col  gap-5`}>
        {
          [...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((item, index) => (
                <div key={index} className="shadow-xl rounded-xl border border-gray-200 p-5">
                  <div>{item.text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image src={item.imageSrc} alt={item.name} width={50} height={50} className=" h-10 w-10 rounded-full" />
                    <div className="flex flex-col">
                      <div className="font-medium leading-5 tracking-tight">{item.name}</div>
                      <div className="text-gray-500 leading-5 tracking-tight">{item.username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        }
      </motion.div>
    </div>
  );
};
