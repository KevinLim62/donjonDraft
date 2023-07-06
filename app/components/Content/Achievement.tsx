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
    <section id='8' className="bg-slate-800 w-full relative">
    <div className="relative left-0 right-0 pt-14">
     <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
        {title}
     </div>
    </div>
     <div className="mx-[250px] bg-gray-700">
      <div className="flex flex-col">
       <div className="flex flex-row justify-between relative">
          <div className="w-full relative px-[100px]">
            <Image 
              alt="story"
              src="/Placeholder.png"
              fill
              className="bg-gray-400"
            />
            <div className="absolute w-0 h-0 right-0
              border-l-[120px] border-l-transparent
              border-b-[450px] border-b-gray-700">
            </div>
          </div>

          <div className="w-full font-medium text-yellow-500 text-[17px] text-center my-10 mr-10 space-y-3">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
       </div>
      </div>
     </div>
     <div className="pb-32"></div>
  </section>
  )
}

export default Achievement