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
     <div className="content-box bg-gray-700">
      <div className="flex flex-col">
       <div className="flex flex-row justify-between space-y-1 sm:p-3">
          <div className="w-full md:h-[40vh] lg:h-[60vh] relative overflow-clip px-[30px] md:px-[100px]">
            <Image 
              alt="story"
              src={contentSrc}
              fill
              className=""
            />
            <div className="absolute w-0 h-0 -right-1 bottom-0
              border-l-[60px] md:border-l-[100px] border-l-transparent
              border-b-[250px] md:border-b-[605px] border-b-gray-700">
            </div>
          </div>

          <div className="flex flex-col w-full font-medium justify-center text-yellow-500 responsive-text text-center m-3 py-2 sm:m-0 sm:py-0 space-y-3">
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