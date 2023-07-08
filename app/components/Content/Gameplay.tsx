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
  <section id='4' className="bg-slate-800 w-full relative container-box">
    <div className="relative left-0 right-0 pt-20">
     <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
        {title}
     </div>
    </div>
    <div className="flex flex-col justify-center relative content-box">
        <div className="w-full sm:w-[85%] lg:w-[53%] mx-auto overflow-hidden">
          <Carousel slidesSrc={slidesSrc}/>
        </div>
    </div>
      <div className="w-full px-2 sm:px-[20%] pt-10 space-y-3">
          <div className="font-medium text-yellow-500 responsive-text text-center">
          {content}
          </div>
      </div>
  </section>
  
  )
}

export default Gameplay