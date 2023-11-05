import { Link } from "@remix-run/react";
import { profilePhoto } from "~/utils/constants";

export default function Layout() {
  return (
    <div className="navbar bg-base-300 justify-between">

      <div id="navbarTags" className="w-1/3 justify-around">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={profilePhoto} alt="profilePhoto"/>
          </div>
        </div>
        <Link to="#projects">
          <div>
            Projects
          </div>
        </Link>
        <Link to="#contact">
          <div>
            Contact
          </div>
        </Link>
      </div>
    </div>
  )
}
