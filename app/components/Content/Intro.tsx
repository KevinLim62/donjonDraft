'use client';

interface IntroProps {
    title: string;
    content: string;
  }

const Intro:React.FC<IntroProps> = ({
    title,
    content,
}) => {
  return (
  <section id='2' className="bg-slate-800 w-full relative">
    <div className="relative left-0 right-0 pt-14">
     <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
        {title}
     </div>
    </div>
     <div className="mx-[250px] bg-gray-700">
       <div className="flex flex-col">
          <div className="font-medium text-yellow-500 text-[17px] text-center mx-20 my-10 space-y-3">
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
              <div>
                {content}
              </div>
          </div>
       </div>
     </div>
     <div className="pb-32"></div>
  </section>
  )
}

export default Intro