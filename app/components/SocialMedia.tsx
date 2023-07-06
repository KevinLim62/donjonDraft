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
    <div className="flex flex-col items-center space-y-2">
        <div className="w-[50px] h-[50px] rounded-full bg-transparent relative overflow-hidden">
            <Image
            alt="icon"
            src={iconSrc}
            fill
            />
        </div>
        <div>
            {content}
        </div>
    </div>
    </>
  )
}

export default SocialMedia