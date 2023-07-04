'use client';

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
    slidesSrc: string[];
    content:string;
  }

const Carousel:React.FC<CarouselProps> = ({
    slidesSrc,
    content,
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
    <div className="overflow-hidden relative w-[27%]  mx-auto">
        <div className={`flex transition-transform ease-out duration-500`} style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slidesSrc.map((slide,index) => (
            <Image 
            alt="slides"
            key={index}
            src={slide}
            width={500}
            height={100}
            />
        ))}
        </div>
        <div className="absolute flex inset-0 items-center px-[5%] justify-between">
            <BiSolidLeftArrow onClick={handlePrev} size={50} color="white" className="cursor-pointer transition-all hover:scale-110"/>
            <BiSolidRightArrow onClick={handleNext} size={50} color="white" className="cursor-pointer transition-all hover:scale-110"/>
        </div>
    </div>
    <div className="relative left-0 right-0 pt-10">
        <div className="flex items-center justify-center gap-4">
        {slidesSrc.map((slide,index) => (
            <div key={index} className={`transition ease-out w-5 h-5 bg-white rounded-full ${curr === index? "p-4":"opacity-30"}`}></div>
        ))}
        </div>
    </div>
    <div className="w-full px-[20%] pt-10 space-y-3">
        <div className="font-medium text-yellow-500 text-[17px] text-center">
          {content}
        </div>
    </div>
    </>
  )
}

export default Carousel