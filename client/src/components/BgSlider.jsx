import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {

   const [sliderPosition, setSliderPosition] = useState(40)
   const handleSliderChange = (e) => {
      setSliderPosition(e.target.value)
   }

  return (
    <div>
        {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent  '>Remove Background With High <br /> Quality and Accuracy</h1>
      <div className="">
        {/* background image */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0 )`}} alt="" />

        {/* Foreground image */}
        <img src={assets.image_wo_bg} style={{clipPath:`inset(0  0 0 ${ sliderPosition}% )`}} alt="" />
      </div>
    </div>
  )
}

export default BgSlider
