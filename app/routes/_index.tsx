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
    <div>
      <div className="flex justify-center">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={profilePhoto} alt="profilePhoto"/>
          </div>
        </div>
      </div>
    </div>
  );
}
