'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      image: "/ImageCorosuel1.png",
      title: "Stable passive returns",
      description: "Enjoy consistent income from your solar investments."
    },
    {
      image: "/ImageCorosuel2.png",
      title: "Sustainable energy generation",
      description: "Our projects generate clean solar energy from rooftop installations of solar panels, reducing carbon footprint."
    },
    {
      image: "/ImageCorosuel3.png",
      title: "Stable, asset-backed investments",
      description: "Invest in tangible solar assets for long-term stability and growth."
    }
  ]

  return (
    <div className="flex justify-between w-full my-5 text-white overflow-hidden rounded-lg shadow-lg">
      <div id='imageAndText' className="flex w-full h-auto justify-between items-center">
        <div id='imageBox' className="w-1/2 flex justify-center items-center min-h-[400px] overflow-hidden relative ">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute w-1/2 object-contain"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1}}
            />
          </AnimatePresence>
        </div>
        <div id='textBox' className="w-1/2 flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold mb-6 w-1/2 ">Why invest in Solar?</h2>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-wrap font-semibold mb-2">{`0${currentSlide + 1}`}</h3>
              <h4 className="text-lg text-wrap font-medium mb-2">{slides[currentSlide].title}</h4>
              <p className="text-sm text-wrap">{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
