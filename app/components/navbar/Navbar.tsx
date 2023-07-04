'use client';

import { useSearchParams, useRouter } from "next/navigation";
import lodash from "lodash";
import MenuItem from "./MenuItem";
import { useCallback } from "react";
import Link from "next/link";

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
        title: "DEVELOPMENT",
        id:'6',
    },
    {
        title: "REWARDS",
        id:'7',
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
  const LogoOnClick = useCallback(() => {
      router.push('/');
  },[router])
    
  return (
    <div className="fixed w-full top-0 bg-slate-500 py-6 opacity-90 z-50">
        <div className="flex flex-row gap-12">
            <Link href={`#1`} className="cursor-pointer" onClick={LogoOnClick}>
                Logo
            </Link>
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
