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
      <div className="font-semibold text-yellow-500 text-center py-5 sm:py-14 space-y-2">
        <div className="responsive-title">
              {header}
          </div>
          <div className="responsive-text px-10">
              {description}
          </div>
        </div>
      <div className="flex flex-col justify-center font-medium text-yellow-500 responsive-text text-center mx-2 sm:mx-10 my-5 pb-10 sm:pb-24">
          <div className="space-y-2 py-5">
              <Image 
                  alt="characterSrc"
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
              <div>
                  {content}
              </div>
              <div className="w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">
                <Carousel slidesSrc={slidesSrc}/>
              </div>
              <div>
                {slideContent}
              </div>
          </div>
      </div>
  </>
  )
}

export default Characters