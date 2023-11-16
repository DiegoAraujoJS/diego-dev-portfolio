import { useNavigate } from "@remix-run/react"
import { useState } from "react"
import useTheme from "~/hooks/useTheme"

type Project = {
  title: string
  imgSrc: string
  description: string[]
  repos: {
    description?: string
    url: string
  }[]
}

function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

function CarouselItem({title, imgSrc, description, repos} : Project) {
  const theme = useTheme()
  return (
    <div className="carousel-item w-full" id={toCamelCase(title)}>
      <div className="flex w-full">
        <div className="">
          <p className="text-3xl text-center w-full">{title}</p>
          <img src={imgSrc} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="flex-1 p-16 text-xl flex flex-col justify-between">
          <div>
            {description.map((paragraph, i) => <p key={i} className="mb-4">{paragraph}</p>)}
          </div>
          <div className="group flex items-end">
            <img src={`/portfolio/github-mark/github-mark${theme === "light" ? "" : "-white"}.svg`} alt="github" className="flex-none peer h-16 w-16"/>
            <div className="toast relative hidden peer-hover:flex hover:flex px-5 py-0">
              <div className="alert alert-info p-3">
                <div className="text-base grid grid-cols-auto-1fr gap-x-3 gap-y-1">
                  {repos.map((repo, i) => {
                    return (
                      <div key={i} className="contents">
                        <span className="whitespace-nowrap">{repo.description}</span>
                        <a href={repo.url} className="link link-hover" target="_blank">{repo.url}</a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    title: "Discord Jira Bot",
    imgSrc: "/portfolio/discord.png",
    description: [
      "This application consists in a Discord bot that connects your Discord Server with Jira.",
      "The code is written in Go. This programming language is ideal for server-side apps that require quick performance.",
      "This bot will automatically enlarge Jira ticket details when they are mentioned in a Discord channel, providing immediate access to ticket information without leaving the chat."
    ],
    repos: [
      {
        url: "https://github.com/DiegoAraujoJS/discord-bots",
      }
    ]
  },
  {
    title: "Git Deploy",
    imgSrc: "/portfolio/git.png",
    description: [
      "The application consists in a deployment control system based in git.",
      "The programmers pick the specific update they wish to release, and the system takes care of packaging and deploying it on the production servers.",
      "In this way, developer experience is optimized by simplifying the process, allowing for a focus on coding rather than deployment logistics.",
      "The system shows the history of deployments, so to enable quick rollbacks to previous versions if needed. This facilitates the preservation of system reliability, as it provides the capability to swiftly revert to a stable release should a new update cause any disruptions."
    ],
    repos: [
      {
        url: "https://github.com/DiegoAraujoJS/git-deploy",
        description: "Server"
      },
      {
        url: "https://github.com/DiegoAraujoJS/git-deploy-panel",
        description: "Panel client"
      }
    ]
  },
]

export default function Projects({className, id} : {className?: string, id?: string}) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navigate = useNavigate()
  return (
    <div className={`${className ?? ""}`} id={id}>

      <p className="text-center text-4xl p-10">Projects</p>

      <div className={`carousel rounded-box w-full`} onScroll={(e: any) => {
        if (e.target.scrollLeft % e.target.offsetWidth === 0) setScrollPosition(Array.from({ length: projects.length }, (_, i) => i).find((page) => e.target.offsetWidth * page === e.target.scrollLeft) || 0)
      }}>

        {projects.map((project, i) => <CarouselItem key={i} {...project}/>)}

      </div>

      <div className="w-full flex justify-center">

        <ul className="steps steps-horizontal">
          {Array.from({ length: projects.length }, (_, i) => i).map((page) => <div key={page} onClick={() => navigate(`#${toCamelCase(projects[page].title)}`)}><li /*onClick={() => navigate(`#${ids[step]}`)}*/ data-content="" className={`cursor-pointer step ${page === scrollPosition ? 'step-secondary' : ''}`}></li></div>)}
        </ul>
      </div>

    </div>
  )
}
