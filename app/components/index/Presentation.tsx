import { coverLetter } from "~/utils/constants";
import EnhancedProfilePhoto from "./ProfilePhoto";

export default function Presentation({className} : {className?: string}) {
  return (
      <div className={`flex h-full w-full ${className ?? ""}`}>

        <div className="w-full">

          <div className="h-80 w-full relative">

            <div className="text-3xl absolute top-3 w-full text-center">
              <p>Diego Araujo</p>
            </div>

            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <EnhancedProfilePhoto/>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col items-center">

          <div className="text-2xl text-center m-5">About Me</div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <br/>
            <div className="card-body items-center text-center">
              <p>{coverLetter}</p>
            </div>
          </div>

        </div>


      </div>
    
  )
}
