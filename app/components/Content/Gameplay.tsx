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
  <section className="bg-slate-800 w-full relative">
    <div className="relative left-0 right-0 pt-14">
     <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
        {title}
     </div>
    </div>
    <Carousel slidesSrc={slidesSrc} content={content}/>
    <div className="pb-32"></div>
  </section>
  
  )
}

export default Gameplay