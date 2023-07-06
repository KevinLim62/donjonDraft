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
      <div className="font-semibold text-yellow-500 text-[50px] text-center pt-5">
          {header}
      </div>
      <div className="justify-center font-medium text-yellow-500 text-[17px] text-center mx-12 my-5 pb-32">
          <div className="space-y-2 py-5">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
          <div className="flex flex-col justify-center relative pb-5">
              <div className="w-[65%] mx-auto overflow-hidden">
                <Carousel slidesSrc={slidesSrc}/>
              </div>
          </div>
          <div className="relative">
            <Image 
                alt="content"
                src={contentSrc}
                height={200}
                width={200}
                quality={100}
                className="w-full"
              />
          </div>
          <div className="space-y-2 py-5">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
          <div className="relative">
            <Image 
                alt="content"
                src={contentSrc}
                height={200}
                width={200}
                quality={100}
                className="w-full"
              />
          </div>
      </div>
  </>
  )
}

export default Characters