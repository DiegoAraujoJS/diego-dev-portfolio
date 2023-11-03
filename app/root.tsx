import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./globals.css";
import Layout from "./components/Layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function App() {
  return (
    <html lang="en" className="h-full bg-neutral-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-full">
        <Layout/>
        <Outlet/>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
