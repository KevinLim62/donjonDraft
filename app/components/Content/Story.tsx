'use client';
import Image from "next/image";

interface StoryProps {
  title: string;
  content: string;
  storySrc: string;
}

const Story:React.FC<StoryProps> = ({
  title,
  content,
  storySrc,
}) => {
  return (
    <section id='3' className="bg-slate-800 w-full relative container-box">
      <div className="relative left-0 right-0 pt-14">
       <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
          {title}
       </div>
      </div>
       <div className="content-box bg-gray-700">
         <div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-x-3 sm:p-3">
            <div className="flex flex-col w-full font-medium justify-center text-yellow-500 responsive-text text-center sm:mx-10 space-y-3">
                  <div>
                    {content}
                  </div>
            </div>
            <div className="w-full h-[30vh] relative px-[30px] md:px-[100px]">
              <Image 
                alt="story"
                src="/Placeholder.png"
                fill
                className="rounded-sm sm:h-[100%] "
              />
            </div>
         </div>
       </div>
    </section>
  )
}

export default Story