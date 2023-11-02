export default function Layout() {
  return (
    <div className="navbar bg-base-300 justify-between">
      <span className="text-xl">Diego Araujo Dev</span>

      <div id="navbarTags" className="w-1/3 justify-around">
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
        <div onClick={(e) => {}}>
          <img src="https://flagsapi.com/ES/flat/32.png"/>
        </div>
      </div>
    </div>
  )
}
