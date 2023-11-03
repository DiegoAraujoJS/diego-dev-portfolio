import type { MetaFunction } from "@remix-run/node";
import { profilePhoto } from "~/utils/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grow">
      <div className="flex h-full w-full">

        <div className="w-full border border-solid border-black">

          <div className="h-80 w-full relative bg-gray-200">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

              <div className="relative">
                <div className="absolute -inset-2">
                  <div className="w-56 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                </div>
                <img src={profilePhoto} alt="profilePhoto" className={`relative object-cover shrink-0 h-56 w-56 z-20 rounded-xl`}/>
              </div>

            </div>
          </div>

        </div>

        <div className="w-full border border-solid border-black">

          <div className="text-2xl text-center border border-solid border-black">Software Developer</div>

        </div>


      </div>
    </div>
  );
}
