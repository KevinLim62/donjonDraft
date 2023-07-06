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
        <div className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] rounded-full bg-transparent relative overflow-hidden">
            <Image
            alt="icon"
            src={iconSrc}
            fill
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