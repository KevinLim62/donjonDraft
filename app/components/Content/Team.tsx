'use client';

import Image from "next/image";
import Member, { MemberProps } from "../Member";

interface TeamProps {
  title: string;
  core: {
    title: string;
    members: MemberProps[];
  }
  advisor: {
  title: string;
  members: MemberProps[];
  }
}

const Team:React.FC<TeamProps> = ({
  title,
  core,
  advisor,
}) => {
  return (
    <section id='9' className="bg-slate-100 w-full relative container-box">
      <div className="relative left-0 right-0 pt-20 content-box">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
            {title}
        </div>
      </div>
      <div className="relative left-0 right-0 pt-10">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-5">
            {core.title}
        </div>
      </div> 
      <div className="grid grid-rows-1 grid-flow-col justify-evenly mx-[5%] sm:mx-[10%] lg:mx-[15%] space-x-3">
          {core.members.map((member,index) => (
              <Member
                key={index}
                iconSrc={member.iconSrc}
                name={member.name}
                position={member.position}
                title={member.title}
                remark={member.remark}
              />
          ))}
      </div>

      <div className="relative left-0 right-0 pt-10">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-5">
            {advisor.title}
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col justify-evenly mx-[10%] sm:mx-[20%] space-x-3">
          {advisor.members.map((member,index) => (
              <Member
                key={index}
                iconSrc={member.iconSrc}
                name={member.name}
                position={member.position}
                title={member.title}
                remark={member.remark}
              />
          ))}
      </div>
  </section>

  )
}

export default Team