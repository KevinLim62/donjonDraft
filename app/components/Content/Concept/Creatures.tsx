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
        <div className=" text-yellow-500 py-5 sm:py-14 space-y-2">
            <div className="font-titleType text-center font-semibold responsive-title">
              {header}
            </div>
          <div className="font-contentType text-justify responsive-text px-10">
              {description}
          </div>
        </div>
        <div className="flex flex-col justify-center font-contentType text-yellow-500 responsive-text text-justify mx-2 sm:mx-10 my-1 pb-10 sm:pb-24">
            {contentSrc.map((item,index) => (
              <div className="relative" key={index}>
                <Image 
                  alt="creaturesSrc"
                  src={item.imgSrc}
                  sizes="100vw"
                  width={100}
                  height={100}
                  quality={50}
                  style={{
                    width:'100%',
                    height:'auto',
                  }}
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