'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import lodash from "lodash";
import { useCallback } from "react";
import Link from "next/link";

interface MenuItemProps {
    title: string;
    selected: boolean;
    id:string;
    url:string;
}

const MenuItem:React.FC<MenuItemProps> = ({
    title,
    selected,
    id,
    url,
}) => {

  const router = useRouter();
  const searchParams = useSearchParams().get('section');
  
  const handleSelected = useCallback(() => {
    if(searchParams != title)
    {
        router.push(`?section=${lodash.toLower(title)}`);
    }
  },[router,searchParams,title])
  
  return (
    <div className={`
        text-yellow-500
          responsive-menuTitle 
          font-normal
          font-titleType 
          border-yellow-500 
          hover:border-b-2 
          hover:font-medium
          cursor-pointer 
          ${selected && "border-b-[2px] sm:border-b-[3px] xl:border-b-[4px]"}
          `}
          >
        <Link href={url}>
          {title}
        </Link>
    </div>
  )
}

export default MenuItem
