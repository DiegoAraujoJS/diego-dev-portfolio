export default function Contact({className} : {className?: string}) {
  return (
    <div className={`${className ?? ""}`}>
      <p className="w-full text-center text-3xl border border-solid border-black">Contact</p>
      <div className="border border-solid border-black">
        Contact box

        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  )
}
