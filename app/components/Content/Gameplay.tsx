'use client';

import Carousel from "../Carousel";

interface GameplayProps {
  title: string;
  content: string;
  slidesSrc: string[];
}

const Gameplay:React.FC<GameplayProps> = ({
  title,
  content,
  slidesSrc,                    
}) => {

  return (
    <section id='4' className="bg-slate-800 relative w-full container-box">
    <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-[120px]">
      <div className="font-titleType font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
          {title}
      </div>
      <div className="flex flex-col justify-center items-center relative space-y-2">
          <div className="w-[90vw] h-[30vh] sm:w-[80vw] sm:h-[50vh] lg:w-[70vw] lg:h-[65vh] xl:w-[60vw] xl:h-[75vh]  pb-14">
            <Carousel slidesSrc={slidesSrc}/>
          </div>
          <div className="font-contentType font-medium text-yellow-500 responsive-text text-justify mx-10 md:mx-16 xl:mx-28">
            {content}
          </div>
      </div>
    </div>
  </section>  
  )
}

export default Gameplay