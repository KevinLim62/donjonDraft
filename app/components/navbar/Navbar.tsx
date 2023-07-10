'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineMenuUnfold , AiOutlineMenuFold } from "react-icons/ai";
import lodash from "lodash";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState } from "react";


const MenuData = [
    {
        title: "INTRO",
        id:'2',
    },
    {
        title: "STORY",
        id:'3',
    },
    {
        title: "GAMEPLAY",
        id:'4',
    },
    {
        title: "CONCEPT",
        id:'5',
    },
    {
        title: "ACHIEVEMENT",
        id:'8',
    },
    {
        title: "THETEAM",
        id:'9',
    },
]

const Navbar = () => {

  const router = useRouter();
  const searchParams = useSearchParams().get('section');

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <div className="fixed w-full bg-slate-500 py-1 sm:py-3 opacity-90 z-50">
        <div className="flex flex-row gap-2 sm:gap-5 xl:gap-10 justify-between min-[630px]:justify-start items-center">
            <div className="min-[375px]:w-[80px] min-[375px]:h-[40px] lg:w-[120px] lg:h-[60px] relative">
                <Image 
                alt="logo"
                src="https://drive.google.com/uc?export=view&id=1h-75OGT2cQaFNOyJrU8jK_SEvwfiUi4V"
                fill
                priority
                />
            </div>
            {MenuData.map((item,index) => (
            <div className="hidden min-[630px]:block" key={index}>
                <MenuItem
                title={item.title}
                id={item.id}
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
                    {MenuData.map((item,index) => (
                    <MenuItem
                    title={item.title}
                    id={item.id}
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
