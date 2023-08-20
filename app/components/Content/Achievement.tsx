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
    <section id='achievement' className="bg-slate-800 w-full relative container-box">
      <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-[120px]">
          <div className="font-titleType font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
            {title}
          </div>
          <div className="content-box bg-gray-700 h-full mb-5 pr-5 lg:pr-20">
            <div className="flex flex-row w-full items-center justify-center space-x-2">
                <div className="w-2/3 h-full relative overflow-hidden">
                  <Image 
                    alt="Achievement"
                    src={contentSrc}
                    sizes="100vw"
                    width={100}
                    height={100}
                    quality={50}
                    style={{
                      width:'100%',
                      height:'auto',
                    }}
                  />
                  <div className="absolute w-0 h-0 -right-1 bottom-0
                    border-l-[50px] md:border-l-[100px] min-[1000px]:border-l-[150px] border-l-transparent
                    border-b-[360px] md:border-b-[605px] min-[1000px]:border-b-[1000px] border-b-gray-700">
                  </div>
                </div>
                <div className="w-1/3 min-[375px]:h-[100px] min-[500px]:h-[150px] sm:h-[200px] md:h-full overflow-y-auto font-contentType text-yellow-500 responsive-text text-justify">
                    {content}
                </div>
            </div>
          </div>
      </div>
  </section>
  )
}

export default Achievement