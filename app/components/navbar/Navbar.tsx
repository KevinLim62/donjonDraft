'use client';

import { useSearchParams, useRouter } from "next/navigation";
import lodash from "lodash";
import MenuItem from "./MenuItem";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <div className="fixed w-full top-0 bg-slate-500 py-3 opacity-90 z-50 hidden min-[630px]:block">
        <div className="flex flex-row gap-5 xl:gap-10 items-center">
            <div className="cursor-pointer w-[80px] h-[40px] relative" onClick={() => router.push('/')}>
                <Image 
                alt="logo"
                src="https://drive.google.com/uc?export=view&id=1h-75OGT2cQaFNOyJrU8jK_SEvwfiUi4V"
                fill
                />
            </div>
            {MenuData.map((item,index) => (
            <MenuItem
            title={item.title}
            id={item.id}
            selected={searchParams === lodash.toLower(item.title)}
            key={index}
            />
            ))}

        </div>
    </div>
  )
}

export default Navbar