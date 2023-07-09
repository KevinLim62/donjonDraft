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
  <section id='2' className="relative">
      <Image 
          alt="introBg"
          src={bgSrc}
          sizes="100vw"
          width={100}
          height={100}
          quality={60}
          priority
          style={{
            width:'100%',
            height:'auto',
            objectFit:'cover',
          }}
        />
    <div className="absolute top-12 sm:top-16 lg:top-20 xl:top-[120px]">
     <div className="font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
        {title}
     </div>
        <div className="content-box bg-gray-700 overflow-y-auto min-[375px]:h-[120px] min-[450px]:h-[150px] sm:h-[200px] md:h-[250px] lg:h-[320px] xl:h-full">
          <div className="flex flex-col items-center justify-center mx-10 md:mx-12 lg:mx-16 xl:mx-24">
              <div className="font-medium text-yellow-500 responsive-text text-center space-y-5">
                  {content.map((item,index)=> (
                    <div key={index}>
                      {item}
                    </div>
                  ))}
              </div>
          </div>
        </div>
        {/* <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] left-[10%] top-[10%] lg:top-[0%] z-30">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=1vu8f1V4ByR4OIBXdokJyc_thTjgXInRd"
          fill
          quality={50}
        />
      </div>
      <div className="absolute w-[60px] h-[70px] sm:w-[80px] sm:h-[90px] lg:w-[120px] lg:h-[130px] xl:w-[160px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[230px] right-[10%] bottom-[0%] z-30">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=1So4BpJNNnavUdz_ry69aiTcfR-2tM3eh"
          fill
          quality={50}
        />
      </div> */}
    </div>
  </section>
  )
}

export default Intro