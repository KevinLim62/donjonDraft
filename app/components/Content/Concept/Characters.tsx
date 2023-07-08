'use client';
import Image from "next/image";
import Carousel from "../../Carousel";

interface CharactersProps {
    header: string;
    content: string;
    contentSrc: string;
    slidesSrc: string[];
  }

const Characters:React.FC<CharactersProps> = ({
    header,
    content,
    contentSrc,
    slidesSrc,
}) => {
  return (
    <>
      <div className="font-semibold text-yellow-500 responsive-title text-center pt-5 sm:pt-10">
          {header}
      </div>
      <div className="flex flex-col justify-center font-medium text-yellow-500 responsive-text text-center mx-2 sm:mx-10 my-5 pb-10 sm:pb-24">
          <div className="space-y-2 py-5">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
          <div className="relative mb-5">
            <Image 
                alt="content"
                src={contentSrc}
                height={200}
                width={200}
                quality={100}
                className="w-full"
              />
          </div>
          <div className="flex flex-col justify-center relative pb-5">
              <div className="w-full sm:w-[85%] lg:w-[53%] xl:w-[45%] mx-auto overflow-hidden">
                <Carousel slidesSrc={slidesSrc}/>
              </div>
          </div>
          <div className="space-y-2 py-5">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
      </div>
  </>
  )
}

export default Characters