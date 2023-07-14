'use client';
import Image from "next/image";
import Carousel from "../../Carousel";

export interface CharactersProps {
    header: string;
    description: string;
    content: string;
    contentSrc: string;
    slidesSrc: string[];
    slideContent: string;
  }

const Characters:React.FC<CharactersProps> = ({
    header,
    description,
    content,
    contentSrc,
    slidesSrc,
    slideContent,
}) => {
  return (
    <>
      <div className="text-yellow-500 py-5 sm:py-14 space-y-2">
        <div className="font-titleType text-center font-semibold responsive-title">
              {header}
          </div>
          <div className="font-contentType text-justify responsive-text px-10">
              {description}
          </div>
        </div>
      <div className="flex flex-col justify-center items-center font-contentType text-yellow-500 responsive-text text-justify mx-2 sm:mx-10 my-1 pb-10 sm:pb-24">
            <Image 
                alt="characterSrc"
                src={contentSrc}
                sizes="100vw"
                width={100}
                height={100}
                quality={60}
                style={{
                  width:'100%',
                  height:'auto',
                }}
              />
              <div className="space-y-2 py-5">
                  {content}
              </div>
                <div className="w-[100vw] h-[50vh] min-[450px]:w-[90vw] sm:w-[80vw] sm:h-[70vh] lg:w-[70vw] xl:w-[60vw] lg:h-[70vh] pb-20">
                  <Carousel slidesSrc={slidesSrc}/>
                </div>
              <div className="space-y-2 py-5">
                {slideContent}
              </div>
      </div>
  </>
  )
}

export default Characters