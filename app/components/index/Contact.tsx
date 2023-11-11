import { useContext, useState } from "react";
import toast from "react-hot-toast";

const myPhoneNumber = "5491135846028"

import styles from "./contact.module.css"
import { themeContext } from "~/hooks/ThemeProvider";
import useTheme from "~/hooks/useTheme";

const unsecuredCopyToClipboard = (text: string) => { const textArea = document.createElement("textarea"); textArea.value=text; document.body.appendChild(textArea); textArea.focus();textArea.select(); try{document.execCommand('copy')}catch(err){console.error('Unable to copy to clipboard',err)}document.body.removeChild(textArea); return Promise.resolve()};

/**
 * Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
*/
const copyToClipboard = (content: string) => window.isSecureContext && navigator.clipboard ? navigator.clipboard.writeText(content) : unsecuredCopyToClipboard(content)

function QrImage({qr} : {
  qr: "whatsapp" | "telegram"
}) {
  return (
    <div className={`m-10 ${styles['crop-container']} ${styles[qr]}`}>
      <img src={`/portfolio/${qr === "whatsapp" ? "whatsapp_480.png" : "telegram_700.png"}`} alt={`${qr === "whatsapp" ? "wa_me.jpeg" : ""}`}/>
    </div>
  )
}

function Icon({href, imgSrc, alt}: {
  href: string
  imgSrc: string
  alt: string
}) {
  return (
    <div className="mb-3">
      <a href={href} target="_blank">
        <img src={imgSrc} alt={alt} className="transform hover:scale-110"/>
      </a>
    </div>
  )
}

export default function Contact({className, id} : {className?: string, id?: string}) {
  const [qr, setQr] = useState<"whatsapp" | "telegram">()
  const theme = useTheme()
  return (
    <div className={`${className ?? ""}`} id={id}>
      <p className="w-full text-center text-4xl p-10">Contact</p>


      <div className="flex flex-col justify-between h-80">
        <div className="flex justify-around">

          <Icon href="https://www.linkedin.com/in/diego-araujo-dev" imgSrc="/portfolio/icons8-linkedin-color/icons8-linkedin-144.svg" alt="linkedin"/>

          <div className="text-center">
            <Icon 
              href={`https://wa.me/${myPhoneNumber}?text=${encodeURIComponent("Hi Diego, I wish to offer you...")}`} 
              imgSrc="/portfolio/icons8-whatsapp-color/icons8-whatsapp-144.svg" 
              alt="whatsapp"
            />
            <div className="cursor-pointer flex justify-center pt-2" onClick={() => setQr("whatsapp")}>
              <img src={theme === "light" ? "/portfolio/qr_black.svg" : "/portfolio/qr_white.svg"} className="transform scale-150 hover:scale-[180%]" alt="qr"/>
            </div>
          </div>

          <div className="text-center">
            <Icon
              href={`https://t.me/diego_araujo_dev?text=${encodeURIComponent("Hi Diego, I wish to offer you...")}`}
              imgSrc="/portfolio/icons8-telegram-app-color/icons8-telegram-app-144.svg" 
              alt="telegram"
            />
            <div className="cursor-pointer flex justify-center pt-2" onClick={() => setQr("telegram")}>
              <img src={theme === "light" ? "/portfolio/qr_black.svg" : "/portfolio/qr_white.svg"} className="transform scale-150 hover:scale-[180%]" alt="qr"/>
            </div>
          </div>
        </div>

        {qr ? <QrImage qr={qr}/> : null}

        <div className="text-center p-2">
          <p>
            Or send me an email!
          </p>
          <div className="tooltip tooltip-bottom" data-tip="copy to clipboard">
            <a href="#" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault(); // Prevent the default anchor action
              const textToCopy = event.currentTarget.innerHTML;
              return copyToClipboard(textToCopy)
                .then(() => toast.success('Email copied to clipboard'))
            }} className="link link-hover text-xl">
              diegolaraujo96@gmail.com
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}
