import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { cssBundleHref } from "@remix-run/css-bundle";

import styles from "./globals.css";
import { daisyUiThemes } from "./utils/constants";
import { useState } from "react";
import Layout from "./components/Layout";
import type { ItemType } from "./types/utils";
import { Toaster } from "react-hot-toast";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : []),
  {rel: "icon", type: "image/x-icon", href: "/portfolio/coding.png"}
];

export default function App() {
  const [theme, setTheme] = useState<ItemType<typeof daisyUiThemes>>("dark")
  return (
    <html lang="en" className="h-full" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-full">
        <Layout theme={theme} setTheme={setTheme}/>
        <Outlet/>

        <Toaster/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
