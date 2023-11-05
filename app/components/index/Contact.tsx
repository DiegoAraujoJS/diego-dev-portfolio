export default function Contact({className, id} : {className?: string, id?: string}) {
  return (
    <div className={`${className ?? ""}`} id={id}>
      <p className="w-full text-center text-3xl border border-solid border-black">Contact</p>
      <div className="border border-solid border-black">
        Contact box

        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  )
}
