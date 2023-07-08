'use client';

import Image from "next/image";

interface HeroProps {
  bgSrc : string;
  LogoSrc : string;
}

const Hero:React.FC<HeroProps> = ({
  bgSrc,
  LogoSrc,
}) => {
  return (
  <section id='1' className="w-full min-[390px]:h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[100vh] relative">
      <Image
        alt="heroLogo"
        src={bgSrc}
        fill
        quality={70}
        priority    
      />
        <div className="relative w-[20%] h-[20%]">
          <Image
            alt="heroLogo"
            src={LogoSrc}
            width={450}
            height={450}
            className="absolute top-[150%] left-[100%]"
            quality={70}
            priority          
          />
        </div>
  </section>
  )
}

export default Hero