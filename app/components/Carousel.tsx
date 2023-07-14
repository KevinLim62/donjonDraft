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
        <div className="flex w-full h-full">
            <div className="relative w-full h-full">
                {slidesSrc.map((slide,index) => (
                    <div key={index} className={`flex flex-1 absolute w-full h-full overflow-hidden ${index === curr? "opcaity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}>
                        <Image 
                        alt="carousel"
                        src={slide}
                        sizes="100vw"
                        width={100}
                        height={100}
                        quality={60}
                        style={{
                        width:'100%',
                        height:'auto',
                        }}
                        />
                    </div>
                ))}
                <div className="absolute inset-0 items-center flex justify-between md:px-[15%] xl:px-[5%]">
                    <BiSolidLeftArrow onClick={handlePrev} size={50}  className="cursor-pointer text-slate-500 transition-all hover:scale-120 hover:text-slate-200"/>
                    <BiSolidRightArrow onClick={handleNext} size={50} className="cursor-pointer text-slate-500 transition-all hover:scale-120 hover:text-slate-200"/>
                </div>
            </div> 
        </div>
        <div className="flex items-center justify-center gap-5 py-5 ">
            {slidesSrc.map((slide,index) => (
                <div key={index} className={`transition ease-out w-3 h-3 sm:w-5 sm:h-5 bg-white rounded-full ${curr === index? "p-3 sm:p-4":"opacity-30"}`}></div>
            ))}
        </div>
    </>
  )
}

export default Carousel
