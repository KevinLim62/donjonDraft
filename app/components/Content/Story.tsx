'use client';
import Image from "next/image";

interface StoryProps {
  title: string;
  content: string[];
  storySrc: string;
}

const Story:React.FC<StoryProps> = ({
  title,
  content,
  storySrc,
}) => {
  return (
    <section id='3' className="bg-slate-800 relative container-box w-full h-auto overflow-hidden">
      <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-[120px]">
        <div className="font-titleType font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
          {title}
        </div>
        <div className="content-box bg-gray-700 overflow-y-auto sm:overflow-hidden min-[375px]:h-[400px] min-[500px]:h-[500px] sm:h-full mb-10 sm:px-5">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:w-full my-5 space-y-2 sm:space-x-5 mx-10 sm:mx-0">
              <div className="w-auto sm:w-1/2 sm:h-[150px] md:h-[180px] lg:h-full overflow-y-auto font-contentType font-medium text-yellow-500 responsive-text text-justify space-y-5">
                  {content.map((item,index)=> (
                    <div key={index}>
                      {item}
                    </div>
                  ))}
              </div>
              <div className="w-auto sm:w-1/2">
                <Image 
                  alt="introBg"
                  src={storySrc}
                  sizes="100vw"
                  width={100}
                  height={100}
                  quality={60}
                  style={{
                    width:'100%',
                    height:'auto',
                  }}
                />
              </div>
          </div>
        </div>
      </div>
        <div className="absolute w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] left-0 top-0 sm:top-[0px] lg:top-[25px] xl:top-[50px]">
        <Image
          alt="creatures"
          src="https://res.cloudinary.com/df9aa9rqs/image/upload/v1688999900/Donjon_Assets/u91uuzp8kkbypliofsey.png"
          sizes="100vw"
          width={100}
          height={100}
          quality={50}
          style={{
            width:'100%',
            height:'auto',
          }}
        />
        </div>
        <div className="absolute w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] right-0 bottom-0 sm:bottom-[0px] lg:bottom-[25px] xl:bottom-[50px]">
          <Image
            alt="creatures"
            src="https://res.cloudinary.com/df9aa9rqs/image/upload/v1688999893/Donjon_Assets/wgvhyrjcoxeluiocl26s.png"
            sizes="100vw"
            width={100}
            height={100}
            quality={50}
            style={{
              width:'100%',
              height:'auto',
            }}
          />
        </div>
    </section>
  )
}

export default Story
