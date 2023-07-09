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
    <section id='3' className="bg-slate-800 w-full relative container-box h-full sm:h-[50vh] md:h-[65vh] lg:h-[100vh]">
      <div className="relative left-0 right-0 pt-20">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
            {title}
        </div>
      </div>
       <div className="flex flex-col items-center justify-center h-full md:h-[40vh] lg:h-[60vh] xl:h-[80vh] pb-10">
        <div className="content-box bg-gray-700 h-full">
          <div className="flex h-full flex-col items-center sm:flex-row justify-center space-y-1 sm:space-x-10 mx-5 md:mx-8 lg:mx-16 xl:mx-24 my-10 sm:my-0">
              <div className="flex flex-col w-full font-medium justify-center text-yellow-500 responsive-text text-center space-y-3">
                    <div>
                      {content}
                    </div>
              </div>
              <div className="w-[80%] sm:w-full h-[25vh] md:h-[35vh] lg:h-[45vh] 2xl:h-[50vh] relative px-[30px] md:px-[100px]">
                <Image 
                  alt="story"
                  src={storySrc}
                  fill
                  quality={65}
                  className="rounded-sm"
                />
              </div>
          </div>
        </div>
        <div className="absolute w-[75px] h-[70px] sm:w-[95px] sm:h-[90px] lg:w-[185px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] left-[10%] top-[10%] lg:top-[0%]">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=19tBCxw9G2Ec1q2CBW89ICFPQdoTlFl2T"
          fill
          quality={65}
        />
        </div>
        <div className="absolute w-[75px] h-[70px] sm:w-[95px] sm:h-[90px] lg:w-[185px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] right-[0%] bottom-[0%]">
          <Image
            alt="creatures"
            src="https://drive.google.com/uc?export=view&id=1VOY4rSeF2TNun_Wp7CI3zazGXhYZW3NJ"
            fill
            quality={65}
          />
        </div>
       </div>
    </section>
  )
}

export default Story
