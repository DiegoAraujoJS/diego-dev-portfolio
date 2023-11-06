// function Carousel({className} : {
//   className?: string
// }) {
//   return (
//   )
// }

export default function Projects({className, id} : {className?: string, id?: string}) {
  return (
    <div className={`${className ?? ""}`} id={id}>

      <p className="text-center text-4xl p-10">Projects</p>


      <div className={`carousel rounded-box border border-solid border-black w-full`}>

        <div className="carousel-item w-full">
          <div className="border border-solid border-white">
            <p className="text-3xl border border-solid border-white text-center w-full">Discord Jira Bot</p>
            <img src="/portfolio/discord.png" className="w-full" alt="Tailwind CSS Carousel component" />
          </div>
        </div> 

        <div className="carousel-item w-full">
          <div className="border border-solid border-white">
            <p className="text-3xl border border-solid border-white text-center w-full">Git Deploy</p>
            <img src="/portfolio/git.png" className="w-full" alt="Tailwind CSS Carousel component" />
          </div>
        </div>

      </div>


    </div>
  )
}
