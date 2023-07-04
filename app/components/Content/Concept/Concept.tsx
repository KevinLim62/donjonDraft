'use client';

import Image from "next/image";
import Creatures from "./Creatures";
import Characters from "./Characters";

type ConceptProps = {
  title: string;
  Creatures_head: string;
  Creatures_cont: string;
  Creatures_contSrc: string;
  Char_head: string;
  Char_cont: string;
  Char_contSrc: string;
  Char_slidesSrc: string[];
}

const Concept:React.FC<ConceptProps> = ({
  title,
  Creatures_head,
  Creatures_cont,
  Creatures_contSrc,
  Char_head,
  Char_cont,
  Char_contSrc,
  Char_slidesSrc,
}) => {
  return (

    <section className="bg-slate-800 w-full relative">
      <div className="relative left-0 right-0 pt-14">
        <div className="font-semibold text-yellow-500 text-[80px] text-center pb-5">
            {title}
        </div>
      </div>
      <div className="mx-[200px] bg-gray-700">
        <Creatures
          header={Creatures_head}
          content={Creatures_cont}
          contentSrc={Creatures_contSrc}
        />
        <Characters
          header={Char_head}
          content={Char_cont}
          contentSrc={Char_contSrc}
          slidesSrc={Char_slidesSrc}
        />
      </div>
      <div className="pb-32"></div>
    </section>
  )
}

export default Concept