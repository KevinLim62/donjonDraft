'use client';
import Image from "next/image";

interface CreaturesProps {
    header: string;
    description: string;
    contentSrc: {imgSrc:string; content:string;}[];

  }

const Creatures:React.FC<CreaturesProps> = ({
    header,
    description,
    contentSrc,
}) => {
  return (
    <>
        <div className="font-semibold text-yellow-500 text-center pt-5 sm:pt-10 space-y-2">
            <div className="responsive-title">
              {header}
            </div>
          <div className="responsive-text px-10">
              {description}
          </div>
        </div>
        <div className="flex flex-col justify-center font-medium text-yellow-500 responsive-text text-center mx-2 sm:mx-10 my-5 pb-10 sm:pb-24">
            {contentSrc.map((item,index) => (
              <div className="relative" key={index}>
                <Image 
                    alt="content"
                    src={item.imgSrc}
                    height={200}
                    width={200}
                    quality={70}
                    className="w-full"
                  />
                <div className="py-5 space-y-2">
                  {item.content}
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Creatures