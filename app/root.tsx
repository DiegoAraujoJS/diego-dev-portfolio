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
import {  useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import { themeContext } from "./hooks/ThemeProvider";
import { daisyUiThemes } from "./utils/constants";
import { ItemType } from "./types/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : []),
  {rel: "icon", type: "image/x-icon", href: "/portfolio/coding.png"}
];

export default function App() {
  const [theme, setTheme] = useState<ItemType<typeof daisyUiThemes>>("synthwave")
  return (
    <html lang="en" className="h-full" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-full">
        <themeContext.Provider value={{theme, setTheme}}>
          <Layout/>
          <Outlet/>
        </themeContext.Provider>

        <Toaster/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
