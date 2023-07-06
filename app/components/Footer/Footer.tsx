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
    <section className="bg-slate-800 w-full relative container-box">
      <div className="relative left-0 right-0 pt-8 content-box">
      <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
          {title}
      </div>
      </div>
      <div className="flex flex-row justify-center mx-2 sm:mx-10 space-x-5 sm:space-x-10">
        {socialMedia.map((item,index) => (
          <SocialMedia
            key={index}
            iconSrc={item.iconSrc}
            content={item.content}
          />
        ))}
      </div>
      <div className="relative text-center text-yellow-500 responsive-text py-2 mt-0 sm:mt-5 sm:pt-10">
        {footer}
      </div>
    </section>
  )
}

export default Footer