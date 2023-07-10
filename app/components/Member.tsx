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
    <div className="flex flex-col items-center space-y-2 responsive-text font-contentType">
        <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] rounded-full bg-transparent relative overflow-hidden">
            <Image 
                alt="member"
                src={iconSrc}
                sizes="100vw"
                width={100}
                height={100}
                quality={40}
                style={{
                width:'100%',
                height:'auto',
                }}
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