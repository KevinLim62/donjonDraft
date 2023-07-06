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
    <section className="bg-slate-800 w-full relative">
      <div className="relative left-0 right-0 pt-8">
      <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
          {title}
      </div>
      </div>
      <div className="flex flex-row justify-center mx-[15%] space-x-20 text-yellow-500">
        {socialMedia.map((item,index) => (
          <SocialMedia
            key={index}
            iconSrc={item.iconSrc}
            content={item.content}
          />
        ))}
      </div>
      <div className="relative text-center text-yellow-500 py-16">
        {footer}
      </div>
    </section>
  )
}

export default Footer