import { useState } from "react";
import toast from "react-hot-toast";

const myPhoneNumber = "5491135846028"

import styles from "./contact.module.css"


const unsecuredCopyToClipboard = (text: string) => { const textArea = document.createElement("textarea"); textArea.value=text; document.body.appendChild(textArea); textArea.focus();textArea.select(); try{document.execCommand('copy')}catch(err){console.error('Unable to copy to clipboard',err)}document.body.removeChild(textArea); return Promise.resolve()};

/**
 * Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
*/
const copyToClipboard = (content: string) => {
  if (window.isSecureContext && navigator.clipboard) {
    return navigator.clipboard.writeText(content);
  } else {
    return unsecuredCopyToClipboard(content);
  }
};

const CopyToClipboardLink = () => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default anchor action
    const textToCopy = event.currentTarget.innerHTML;
    return copyToClipboard(textToCopy)
      .then(() => toast.success('Email copied to clipboard'))
  };

  return (
    <a href="#" onClick={handleClick} className="link link-hover text-2xl">
      diegolaraujo96@gmail.com
    </a>
  );
};

function QrImage({qr} : {
  qr: "whatsapp" | "telegram"
}) {
  return (
    <div className={`m-10 ${styles['crop-container']} ${styles[qr]}`}>
      <img src={`/portfolio/${qr === "whatsapp" ? "whatsapp_480.png" : "telegram_700.png"}`} alt={`${qr === "whatsapp" ? "wa_me.jpeg" : ""}`}/>
    </div>

  )
}

export default function Contact({className, id} : {className?: string, id?: string}) {
  const [qr, setQr] = useState<"whatsapp" | "telegram">()
  return (
    <div className={`${className ?? ""}`} id={id}>
      <p className="w-full text-center text-4xl p-10">Contact</p>


      <div className="flex flex-col justify-between h-80">
        {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
        <div className="flex justify-around">
          <div className="cursor-pointer">
            <a href="https://www.linkedin.com/in/diego-araujo-dev" target="_blank">
              <img src="/portfolio/icons8-linkedin-color/icons8-linkedin-144.svg" alt="linkedin"/>
            </a>
          </div>
          <div className="cursor-pointer text-center">
            <a href={`https://wa.me/${myPhoneNumber}?text=${encodeURIComponent("Hi Diego, I wish to offer you...")}`} target="_blank">
              <img src="/portfolio/icons8-whatsapp-color/icons8-whatsapp-144.svg" alt="whatsapp"/>
            </a>
            <div className="cursor-pointer" onClick={() => setQr("whatsapp")}>
              Get QR Code
            </div>
          </div>
          <div className="cursor-pointer text-center" onClick={() => setQr("telegram")}>
            <a href={`https://t.me/diego_araujo_dev?text=${encodeURIComponent("Hi Diego, I wish to offer you...")}`} target="_blank">
              <img src="/portfolio/icons8-telegram-app-color/icons8-telegram-app-144.svg" alt="telegram"/>
            </a>
            Get QR Code
          </div>
        </div>

        {qr ? <QrImage qr={qr}/> : null}

        <div className="text-center p-2">
          <p>
            Or send me an email!
          </p>

          <CopyToClipboardLink/>
        </div>
      </div>


    </div>
  )
}
