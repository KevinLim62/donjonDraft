'use client';

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
    slidesSrc: string[];
  }

const Carousel:React.FC<CarouselProps> = ({
    slidesSrc,
}) => {

const [curr, setCurr] = useState(0)
const handlePrev = () => {
    setCurr((curr) => (
    curr === 0? slidesSrc.length-1 : curr - 1
    ));
}
const handleNext = () => {
    setCurr((curr) => (
    curr === slidesSrc.length-1? 0 : curr + 1
    ));
}

  return (
    <>
        <div className={`flex justify-items-start align-middle transition-transform ease-out duration-500`} style={{ transform: `translateX(-${curr * 100}%)` }}>
            {slidesSrc.map((slide,index) => (
                    <Image 
                    alt="slides"
                    key={index}
                    src={slide}
                    width={500}
                    height={500}
                    quality={60}
                    className="w-[100vw] h-[45vh] sm:h-[55vh]"
                    />
                ))}
        </div> 
        <div className="absolute inset-0 items-center flex justify-between px-[12%] sm:px-0 sm:-mx-5 bottom-[8%]">
            <BiSolidLeftArrow onClick={handlePrev} size={50} color="white" className="cursor-pointer transition-all hover:scale-110"/>
            <BiSolidRightArrow onClick={handleNext} size={50} color="white" className="cursor-pointer transition-all hover:scale-110"/>
        </div>

        <div className="flex items-center justify-center gap-5 pt-2">
        {slidesSrc.map((slide,index) => (
            <div key={index} className={`transition ease-out w-3 h-3 sm:w-5 sm:h-5 bg-white rounded-full ${curr === index? "p-3 sm:p-4":"opacity-30"}`}></div>
        ))}
        </div>
    </>
  )
}

export default Carousel