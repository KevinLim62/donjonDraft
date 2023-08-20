'use client';

import Creatures from "./Creatures";
import Characters from "./Characters";

type ConceptProps = {
  title: string;
  bgSrc: string;
  Creatures_head: string;
  Creatures_desc: string;
  Creatures_contSrc: {imgSrc:string; content:string;}[];
  Char_head: string;
  Char_desc: string;
  Char_cont: string;
  Char_contSrc: string;
  Char_slidesSrc: string[];
  Char_slidecontent: string;


}

const Concept:React.FC<ConceptProps> = ({
  title,
  bgSrc,
  Creatures_head,
  Creatures_desc,
  Creatures_contSrc,
  Char_head,
  Char_desc,
  Char_cont,
  Char_contSrc,
  Char_slidesSrc,
  Char_slidecontent,
}) => {
  return (

    <section id='concept' className={`bg-scroll bg-opacity-50 w-full h-full relative container-box`} style={{ backgroundImage: `url(${bgSrc})` }}>
      <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-[120px]">
        <div className="font-titleType font-semibold text-yellow-500 responsive-title text-center pb-0 sm:pb-5">
            {title}
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="content-box bg-gray-700 bg-opacity-70">
            <Creatures
              header={Creatures_head}
              description={Creatures_desc}
              contentSrc={Creatures_contSrc}
            />
        </div>
        <div className="content-box bg-gray-700 bg-opacity-70">
            <Characters
                  header={Char_head}
                  description={Char_desc}
                  content={Char_cont}
                  contentSrc={Char_contSrc}
                  slidesSrc={Char_slidesSrc}
                  slideContent={Char_slidecontent}
            />
        </div>
      </div>
    </section>
  )
}

export default Concept