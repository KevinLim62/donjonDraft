'use client';

import Image from "next/image";

interface AchievementProps {
  title: string;
  content: string;
  contentSrc: string;
}

const Achievement:React.FC<AchievementProps> = ({
  title,
  content,
  contentSrc,
}) => {
  return (
    <section id='8' className="bg-slate-800 w-full relative container-box">
    <div className="relative left-0 right-0 pt-20">
     <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
        {title}
     </div>
    </div>
     <div className="mx-[50px] sm:mx-[25px] md:mx-[10px] lg:mx-0 bg-gray-700">
      <div className="flex flex-col">
       <div className="flex flex-row justify-between space-y-1 sm:p-3 lg:p-0">
          <div className="w-full md:h-[40vh] lg:h-[60vh] relative overflow-clip px-[30px] md:px-[100px]">
            <Image 
              alt="story"
              src={contentSrc}
              fill
              className=""
            />
            <div className="absolute w-0 h-0 -right-1 bottom-0
              border-l-[60px] md:border-l-[100px] min-[1000px]:border-l-[150px] border-l-transparent
              border-b-[250px] md:border-b-[605px] min-[1000px]:border-b-[1000px] border-b-gray-700">
            </div>
          </div>

          <div className="flex flex-col w-full font-medium justify-center text-yellow-500 responsive-text text-center m-3 pr-0 sm:pr-5 lg:pr-10 space-y-3">
              <div>
                {content}
              </div>
          </div>
       </div>
      </div>
     </div>
  </section>
  )
}

export default Achievement