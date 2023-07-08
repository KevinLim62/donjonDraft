'use client';

import Image from "next/image";

interface IntroProps {
    title: string;
    content: string[];
    bgSrc: string;
  }

const Intro:React.FC<IntroProps> = ({
    title,
    content,
    bgSrc,
}) => {
  return (
  <section id='2' className="w-full relative container-box h-full sm:h-[50vh] md:h-[55vh] lg:h-[85vh] xl:h-[100vh]">
      <Image
        alt="heroLogo"
        src={bgSrc}
        fill
        quality={70}
        priority
        className="opacity-90 z-10"       
      />
    <div className="relative left-0 right-0 pt-20 z-30">
     <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
        {title}
     </div>
    </div>
      <div className="flex flex-col items-center justify-center h-full sm:h-[35vh] md:h-[40vh] lg:h-[58vh] xl:h-[60vh] pb-10">
        <div className="content-box bg-gray-700 h-full py-10 sm:py-0 z-30">
          <div className="flex flex-col items-center justify-center h-full mx-5 md:mx-8 lg:mx-16 xl:mx-24">
              <div className="font-medium text-yellow-500 responsive-text text-center space-y-5">
                  {content.map((item,index)=> (
                    <div key={index}>
                      {item}
                    </div>
                  ))}
              </div>
          </div>
        </div>
        <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] left-[10%] top-[10%] z-30">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=1vu8f1V4ByR4OIBXdokJyc_thTjgXInRd"
          fill
        />
      </div>
      <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] right-[10%] bottom-[0%] z-30">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=1So4BpJNNnavUdz_ry69aiTcfR-2tM3eh"
          fill
        />
      </div>
      </div>
  </section>
  )
}

export default Intro