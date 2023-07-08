'use client';

import Image from "next/image";
import Creatures from "./Creatures";
import Characters from "./Characters";

type ConceptProps = {
  title: string;
  bgSrc: string;
  Creatures_head: string;
  Creatures_cont: string;
  Creatures_contSrc: {imgSrc:string; content:string;}[];
  Char_head: string;
  Char_cont: string;
  Char_contSrc: string;
  Char_slidesSrc: string[];
}

const Concept:React.FC<ConceptProps> = ({
  title,
  bgSrc,
  Creatures_head,
  Creatures_cont,
  Creatures_contSrc,
  Char_head,
  Char_cont,
  Char_contSrc,
  Char_slidesSrc,
}) => {
  return (

    <section id='5' className={`bg-repeat-y bg-scroll bg-opacity-50 w-full h-full relative container-box`} style={{ backgroundImage: `url(${bgSrc})` }}>
      <div className="relative left-0 right-0 pt-20">
        <div className="font-semibold text-yellow-500 responsive-title text-center pb-5">
            {title}
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="content-box bg-gray-700">
            <Creatures
              header={Creatures_head}
              description={Creatures_cont}
              contentSrc={Creatures_contSrc}
            />
        </div>
        <div className="content-box bg-gray-700">
        <Characters
              header={Char_head}
              content={Char_cont}
              contentSrc={Char_contSrc}
              slidesSrc={Char_slidesSrc}
            />
        </div>
      </div>
    </section>
  )
}

export default Concept