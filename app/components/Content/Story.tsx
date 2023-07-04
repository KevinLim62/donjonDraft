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
    <section className="bg-slate-800 w-full relative">
      <div className="relative left-0 right-0 pt-14">
       <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
          {title}
       </div>
      </div>
       <div className="mx-[250px] bg-gray-700">
        <div className="flex flex-col">
         <div className="flex flex-row justify-between">
            <div className="w-full font-medium text-yellow-500 text-[17px] text-center ml-10 my-10 space-y-3">
                <div>
                  {content}
                </div>
                <div>
                  {content}
                </div>
            </div>
            <div className="w-full mx-16 my-10 relative">
              <Image 
                alt="story"
                src="/Placeholder.png"
                fill
                className="bg-gray-400"
              />
            </div>
         </div>
        </div>
       </div>
       <div className="pb-32"></div>
    </section>
  )
}

export default Story