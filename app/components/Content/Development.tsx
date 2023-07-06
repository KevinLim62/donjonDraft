'use client';

interface DevelopmentProps {
  title: string;
}

const Development:React.FC<DevelopmentProps> = ({
  title,
}) => {
  return (
    <section id='6' className="bg-slate-800 w-full relative">
    <div className="relative left-0 right-0 pt-14">
     <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
        {title}
     </div>
    </div>
     <div className="pb-32"></div>
  </section>
  )
}

export default Development