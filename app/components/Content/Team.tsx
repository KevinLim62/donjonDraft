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
    <section id='9' className="bg-slate-100 w-full relative">
      <div className="relative left-0 right-0 pt-14">
        <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
            {title}
        </div>
      </div>
      <div className="relative left-0 right-0 pt-14">
        <div className="font-semibold text-yellow-500 text-[50px] text-center pb-5">
            {core.title}
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col justify-evenly mx-[20%] space-x-3">
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

      <div className="relative left-0 right-0 pt-14">
        <div className="font-semibold text-yellow-500 text-[50px] text-center pb-5">
            {advisor.title}
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col justify-evenly mx-[20%] space-x-3">
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
      <div className="pb-32"></div>
  </section>

  )
}

export default Team