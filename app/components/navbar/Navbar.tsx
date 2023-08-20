'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineMenuUnfold , AiOutlineMenuFold } from "react-icons/ai";
import lodash from "lodash";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState } from "react";
import { MenuContent, baseURL } from "@/app/actions/getData";

const Navbar = () => {

  const searchParams = useSearchParams().get('section');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>

    <div className="fixed w-full bg-slate-500 py-1 sm:py-3 opacity-90 z-50">
        <div className="flex flex-row gap-2 sm:gap-5 xl:gap-10 justify-between min-[630px]:justify-start items-center">
            <div className="w-[80px] min-[375px]:h-[40px] lg:w-[120px] lg:h-[60px] relative">
                <Image 
                alt="logo"
                src={`${baseURL}Logo/Donjon-logo.png`}
                sizes="100vw"
                  width={100}
                  height={100}
                  quality={40}
                  style={{
                    width:'100%',
                    height:'auto',
                  }}
                priority
                />
            </div>
            {MenuContent.map((item,index) => (
            <div className="hidden min-[630px]:block" key={index}>
                <MenuItem
                title={item.title}
                id={item.id}
                url={item.url}
                selected={searchParams === lodash.toLower(item.title)}
                />
            </div>
            ))} 
            <div className={`bg-slate-500 min-[630px]:hidden cursor-pointer`} onClick={handleMenu}>
                {menuOpen? (
                    <AiOutlineMenuUnfold size={50}/>
                ) : (
                    <AiOutlineMenuFold size={50}/>
                )}
            </div> 
        </div>
        {menuOpen && (
            <div className="flex flex-col items-center bg-slate-500 gap-5 pt-5">
                {MenuContent.map((item,index) => (
                    <MenuItem
                    title={item.title}
                    id={item.id}
                    url={item.url}
                    selected={searchParams === lodash.toLower(item.title)}
                    key={index}
                    />
                ))}
            </div>
        )}
    </div>
    </>
  )
}

export default Navbar
