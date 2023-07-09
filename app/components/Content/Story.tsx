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
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
          {title}
        </div>
        <div className="content-box bg-gray-700 overflow-y-auto sm:overflow-hidden min-[375px]:h-[400px] min-[500px]:h-[500px] sm:h-full mb-10 sm:px-5">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:w-full my-5 space-y-2 sm:space-x-5">
              <div className="w-auto sm:w-1/2 sm:h-[150px] md:h-[180px] lg:h-[250px] xl:h-full overflow-y-auto font-medium text-yellow-500 responsive-text text-center space-y-5">
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
                  quality={50}
                  style={{
                    width:'100%',
                    height:'auto',
                  }}
                />
              </div>
          </div>
        </div>
      </div>
        {/* <div className="absolute w-[75px] h-[70px] sm:w-[95px] sm:h-[90px] lg:w-[185px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] left-[10%] top-[10%] lg:top-[0%]">
        <Image
          alt="creatures"
          src="https://drive.google.com/uc?export=view&id=19tBCxw9G2Ec1q2CBW89ICFPQdoTlFl2T"
          fill
          quality={50}
        />
        </div>
        <div className="absolute w-[75px] h-[70px] sm:w-[95px] sm:h-[90px] lg:w-[185px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[230px] right-[0%] bottom-[0%]">
          <Image
            alt="creatures"
            src="https://drive.google.com/uc?export=view&id=1VOY4rSeF2TNun_Wp7CI3zazGXhYZW3NJ"
            fill
            quality={50}
          />
        </div> */} 
    </section>
  )
}

export default Story
