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
      <div className="flex flex-col justify-center font-medium text-yellow-500 text-[17px] text-center mx-20 my-5 space-y-5 pb-32">
          <div>
            {content}
          </div>
          <div>
            {content}
          </div>
          <div className="w-full">
            <Carousel slidesSrc={slidesSrc} content={content}/>
          </div>
          <div className="relative bg-white">
            <Image 
                alt="content"
                src={contentSrc}
                height={200}
                width={200}
                quality={100}
                className="w-full"
              />
          </div>
          <div>
            {content}
          </div>
          <div>
            {content}
          </div>
          <div className="relative bg-white">
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