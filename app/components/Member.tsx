import React from 'react'
import Image from 'next/image';

export interface MemberProps {
    iconSrc: string;
    name: string;
    position: string;
    title?: string;
    remark?: string;
}

const Member:React.FC<MemberProps> = ({
    iconSrc,
    name,
    position,
    title,
    remark,
}) => {
  return (
    <>
    <div className="flex flex-col items-center space-y-2 responsive-text">
        <div className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] rounded-full bg-transparent relative overflow-hidden">
            <Image
            alt="icon"
            src={iconSrc}
            quality={60}
            fill
            />
        </div>
        <div>
            {name}
        </div>
        <div>
            {position}
        </div>
        <div className='text-center'>
            <div>
                {title}
            </div>
            <div>
                {remark}
            </div>
        </div>
    </div>
    </>
  )
}

export default Member