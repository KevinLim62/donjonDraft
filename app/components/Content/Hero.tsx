'use client';

import Image from "next/image";

interface HeroProps {
  bgSrc : string;
}

const Hero:React.FC<HeroProps> = ({
  bgSrc,
}) => {
  return (
  <section id='1' className="w-full relative">
            <Image 
                alt="heroBg"
                src={bgSrc}
                sizes="100vw"
                width={100}
                height={100}
                quality={60}
                priority
                style={{
                  width:'100%',
                  height:'auto',
                }}
              />
  </section>
  )
}

export default Hero