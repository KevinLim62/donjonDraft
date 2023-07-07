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
    <section id='3' className="bg-slate-800 w-full relative container-box sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh]">
      <div className="relative left-0 right-0 top-[15%] pt-20">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
            {title}
        </div>
      </div>
       <div className="flex flex-col items-center justify-center h-full pb-10">
        <div className="content-box bg-gray-700 sm:h-[35vh] lg:h-[60vh] xl:h-[55vh]">
          <div className="flex h-full flex-col items-center sm:flex-row justify-center space-y-1 sm:space-x-10 mx-5 md:mx-8 lg:mx-12 xl:mx-16 my-10 sm:my-0">
              <div className="flex flex-col w-full font-medium justify-center text-yellow-500 responsive-text text-center space-y-3">
                    <div>
                      {content}
                    </div>
              </div>
              <div className="w-[60%] sm:w-full h-[25vh] md:h-[35vh] lg:h-[45vh] 2xl:h-[50vh] relative px-[30px] md:px-[100px]">
                <Image 
                  alt="story"
                  src={storySrc}
                  fill
                  className="rounded-sm"
                />
              </div>
          </div>
        </div>
        <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] left-[10%] top-[13%]">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=19tBCxw9G2Ec1q2CBW89ICFPQdoTlFl2T"
          fill
        />
        </div>
        <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] right-[10%] bottom-[0%]">
          <Image
            alt="creatures"
            src="https://drive.google.com/uc?export=view&id=1VOY4rSeF2TNun_Wp7CI3zazGXhYZW3NJ"
            fill
          />
        </div>
       </div>
    </section>
  )
}

export default Story