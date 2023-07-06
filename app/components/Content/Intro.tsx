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
  <section id='2' className="bg-slate-800 w-full relative container-box">
      <div className="relative left-0 right-0 pt-14">
      <div className="font-semibold text-yellow-500 responsive-title text-center pb-2">
          {title}
      </div>
      </div>
      <div className="content-box bg-gray-700">
        <div className="flex flex-col">
            <div className="font-medium text-yellow-500 responsive-text text-center mx-10 my-10 space-y-3">
                <div>
                  {content}
                </div>
                <div>
                  {content}
                </div>
            </div>
        </div>
      </div>
  </section>
  )
}

export default Intro