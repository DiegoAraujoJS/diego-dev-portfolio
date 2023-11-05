import type { MetaFunction } from "@remix-run/node";
import Contact from "~/components/index/Contact";
import Presentation from "~/components/index/Presentation";
import Proyects from "~/components/index/Proyects";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll">

      <ul className="steps steps-vertical fixed bottom-5">
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step"></li>
      </ul>

      <Presentation className="snap-start h-full"/>
      <Proyects className="snap-start h-full"/>
      <Contact className="snap-start h-full"/>


    </div>
  );
}
