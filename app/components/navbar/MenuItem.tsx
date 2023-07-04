'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import lodash from "lodash";
import { useCallback } from "react";
import Link from "next/link";

interface MenuItemProps {
    title: string;
    selected: boolean;
    id:string;
}

const MenuItem:React.FC<MenuItemProps> = ({
    title,
    selected,
    id,
}) => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams().get('section');
  
  const handleSelected = useCallback(() => {
    console.log(searchParams)
    if(searchParams != title)
    {
        router.push(`${pathname}?section=${lodash.toLower(title)}`);
    }
  },[router,searchParams,pathname,title])
  
  return (
    <div className={`
        text-yellow-500 
          font-normal 
          border-yellow-500 
          hover:border-b-2 
          hover:font-medium
          cursor-pointer 
          ${selected && "border-b-2"}
          ${selected && "font-bold"}
          `}
          onClick={handleSelected}>
        <Link href={`#${id}`}>
          {title}
        </Link>
    </div>
  )
}

export default MenuItem