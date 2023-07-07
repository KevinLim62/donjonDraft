'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section id='1' className="bg-cover bg-center w-full min-[390px]:h-[20vh] min-[500px]:h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[100vh] bg-[url('https://drive.google.com/uc?export=view&id=1G7NPgdfLLr20nfwcM3JUurHOm2lSZ6BD')]">
      <div className="relative w-[20%] h-[20%]">
          <Image
            alt="heroLogo"
            src="https://drive.google.com/uc?export=view&id=1TokOx_RIw8gyNnGQ1u4W3bDC7ZwF7Srv"
            width={450}
            height={450}
            className="absolute top-[150%] left-[100%]"          
          />
      </div>
    </section>
  )
}

export default Hero