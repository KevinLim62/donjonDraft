'use client';
import Image from "next/image";

interface CreaturesProps {
    header: string;
    content: string;
    contentSrc: string;
  }

const Creatures:React.FC<CreaturesProps> = ({
    header,
    content,
    contentSrc,
}) => {
  return (
    <>
        <div className="font-semibold text-yellow-500 text-[50px] text-center pt-10">
            {header}
        </div>
        <div className="flex flex-col justify-center font-medium text-yellow-500 text-[17px] text-center mx-20 my-5 space-y-5 pb-32">
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

export default Creatures