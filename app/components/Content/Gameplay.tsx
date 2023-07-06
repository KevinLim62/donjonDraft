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
  <section id='4' className="bg-slate-800 w-full relative">
    <div className="relative left-0 right-0 pt-14">
     <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
        {title}
     </div>
    </div>
    <div className="flex flex-col justify-center relative">
        <div className="w-[60%] mx-auto overflow-hidden">
          <Carousel slidesSrc={slidesSrc}/>
        </div>
    </div>
      <div className="w-full px-[20%] pt-10 space-y-3">
          <div className="font-medium text-yellow-500 text-[17px] text-center">
          {content}
          </div>
      </div>
    <div className="pb-32"></div>
  </section>
  
  )
}

export default Gameplay