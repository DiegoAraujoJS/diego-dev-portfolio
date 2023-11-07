function CarouselItem({title, imgSrc, description} : {
  title: string
  imgSrc: string
  description: string[]
}) {
  return (
    <div className="carousel-item w-full">
      <div className="flex w-full">
        <div className="">
          <p className="text-3xl text-center w-full">{title}</p>
          <img src={imgSrc} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="flex-1">
          {description.map((paragraph, i) => [<p key={i} className="px-10 pr-40 py-4">{paragraph}</p>]).flat()}
        </div>
      </div>
    </div>
  )
}

const dummy = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt iusto alias quasi eaque assumenda eveniet qui fugiat quod necessitatibus et ab corporis, dignissimos nesciunt in, voluptas nostrum labore autem?", "Commodi quis vero sequi nulla numquam aut laborum dolores eos? Veritatis doloremque distinctio culpa. Ipsam ab voluptas velit tempora deserunt. Incidunt odio aperiam explicabo fuga omnis quidem laboriosam quod numquam?", "Ipsa suscipit, minus illo quidem veniam doloremque quas, error fuga labore eligendi porro ea expedita rerum minima, et voluptatem exercitationem! Autem incidunt perspiciatis animi non dolorum ab saepe dignissimos labore?"]

export default function Projects({className, id} : {className?: string, id?: string}) {
  return (
    <div className={`${className ?? ""}`} id={id}>

      <p className="text-center text-4xl p-10">Projects</p>


      <div className={`carousel rounded-box border border-solid border-black w-full`}>

        <CarouselItem title="Discord Jira Bot" imgSrc="/portfolio/discord.png" description={dummy}/> 
        <CarouselItem title="Git Deploy" imgSrc="/portfolio/git.png" description={dummy} />

      </div>


    </div>
  )
}
