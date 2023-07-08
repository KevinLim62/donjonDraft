'use client';
import Image from "next/image";

interface CreaturesProps {
    header: string;
    contentSrc: {imgSrc:string; content:string;}[];
  }

const Creatures:React.FC<CreaturesProps> = ({
    header,
    contentSrc,
}) => {
  return (
    <>
        <div className="font-semibold text-yellow-500 responsive-title text-center pt-5 sm:pt-10">
            {header}
        </div>
        <div className="flex flex-col justify-center font-medium text-yellow-500 responsive-text text-center mx-2 sm:mx-10 my-5 pb-10 sm:pb-24">
            {contentSrc.map((item,index) => (
              <div className="relative" key={index}>
                <Image 
                    alt="content"
                    src={item.imgSrc}
                    height={200}
                    width={200}
                    quality={100}
                    className="w-full"
                  />
                <div className="space-y-2 py-5">
                  {item.content}
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Creatures