import { profilePhoto } from "~/utils/constants";

export default function EnhancedProfilePhoto() {
  return (
    <div className="relative">
      <div className="absolute -inset-2">
        <div className="w-56 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <img src={profilePhoto} alt="profilePhoto" className={`relative object-cover shrink-0 h-56 w-56 z-20 rounded-xl`}/>
    </div>
  )
}
