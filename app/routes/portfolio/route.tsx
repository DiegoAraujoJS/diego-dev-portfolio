import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Contact from "~/components/index/Contact";
import Presentation from "~/components/index/Presentation";
import Proyects from "~/components/index/Proyects";

export const meta: MetaFunction = () => {
  return [
    { title: "Diego Araujo Developer" },
  ];
};

const pages = [0, 1, 2]
const ids = ["about", "projects", "contact"]

export default function Index() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navigate = useNavigate()
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth" onScroll={(e: any) => {
      if (e.target.scrollTop % e.target.offsetHeight === 0) setScrollPosition(pages.find(page => e.target.offsetHeight * page === e.target.scrollTop) || 0)
    }}>

      <ul className="steps steps-vertical fixed bottom-5">
        {pages.map((step, i) => <li key={i} onClick={() => navigate(`#${ids[step]}`)} className={`cursor-pointer step ${step === scrollPosition ? 'step-primary' : ''}`}></li>)}
      </ul>

      <Presentation className="snap-start h-full" id="about"/>
      <Proyects className="snap-start h-full" id="projects"/>
      <Contact className="snap-start h-full" id="contact"/>

    </div>
  );
}
