'use client';

import SocialMedia, { SocialMediaProps } from "../SocialMedia";

interface FooterProps {
  title: string;
  socialMedia: SocialMediaProps[];
  footer: string;
}

const Footer:React.FC<FooterProps> = ({
  title,
  socialMedia,
  footer,
}) => {
  return (
    <section className="bg-slate-800 relative container-box w-full h-auto">
      <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-[120px]">
        <div className="font-titleType font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
            {title}
        </div>
        <div className="flex flex-row justify-center mx-10 lg:mx-16 xl:mx-24 space-x-5 sm:space-x-10">
          {socialMedia.map((item,index) => (
            <SocialMedia
              key={index}
              iconSrc={item.iconSrc}
              content={item.content}
            />
          ))}
        </div>
        <div className="relative text-center font-contentType text-yellow-500 responsive-text py-2 mt-0 sm:mt-5 sm:pt-10">
          {footer}
        </div>
      </div>
    </section>
  )
}

export default Footer