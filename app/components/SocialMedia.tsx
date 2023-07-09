'use client';
import Image from "next/image";

export interface SocialMediaProps{
    iconSrc: string;
    content: string;
}

const SocialMedia:React.FC<SocialMediaProps> = ({
    iconSrc,
    content,
}) => {
  return (
    <>
    <div className="flex flex-col items-center space-y-2 my-10">
        <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-transparent relative overflow-hidden">
            <Image 
                alt="socialMedia"
                src={iconSrc}
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
        <div className="responsive-text text-yellow-500">
            {content}
        </div>
    </div>
    </>
  )
}

export default SocialMedia