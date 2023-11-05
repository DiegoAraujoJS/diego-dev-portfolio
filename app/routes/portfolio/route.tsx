import type { MetaFunction } from "@remix-run/node";
import { useRef, useState } from "react";
import Contact from "~/components/index/Contact";
import Presentation from "~/components/index/Presentation";
import Proyects from "~/components/index/Proyects";

export const meta: MetaFunction = () => {
  return [
    { title: "Diego Araujo Developer" },
  ];
};


export default function Index() {
  const [scrollPosition, setScrollPosition] = useState(0)
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth" onScroll={(e: any) => {
      if (e.target.scrollTop % e.target.offsetHeight === 0) {
        const pageLength = e.target.offsetHeight
        setScrollPosition([0, 1, 2].find(page => pageLength * page === e.target.scrollTop) || 0)
      }
    }}>

      <ul className="steps steps-vertical fixed bottom-5">
        {[0, 1, 2].map((step, i) => <li key={i} className={`step ${step === scrollPosition ? 'step-primary' : ''}`}></li>)}
      </ul>

      <Presentation className="snap-start h-full" id="presentation"/>
      <Proyects className="snap-start h-full" id="projects"/>
      <Contact className="snap-start h-full" id="contact"/>

    </div>
  );
}
