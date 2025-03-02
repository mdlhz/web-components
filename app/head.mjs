import titlesByPath from './lib/titles-by-path.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head(state) {
  const { req, store } = state
  const { path, session } = req

  if (store.authorized === undefined) {
    store.authorized = session.authorized || false
  }
  if (store.path === undefined) {
    store.path = path
  }
  if (store.author === undefined) {
    store.author = {
      name: 'Miguel De La Hoz',
      title: 'Web Developer',
      githubUsername: 'mdlhz',
    }
  }

  const title = titlesByPath[path] || ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="og:type" content="website" />
      <link rel="icon" href="/_public/favicon_io/favicon.ico">
      <title>Miguel De La Hoz: ${title}</title>
      <meta name="description" content="Portfolio for Miguel De La Hoz, Senior Developer" />
      ${linkTag()}

      ${(req.path === '/resume') ? '<link rel="stylesheet" href="/_public/print-resume.css">' : ''}

      <style>
        @font-face {
          font-family: "HK Grotesk";
          font-weight: 300;
          src: url("/_public/fonts/HKGrotesk-Light.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 400;
          src: url("/_public/fonts/HKGrotesk-Regular.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 600;
          src: url("/_public/fonts/HKGrotesk-SemiBold.woff2") format("woff2")
        }

        body {
          color: var(--dark);
          text-rendering: optimizeLegibility;
        }

        a {
          text-decoration: underline;
          text-decoration-thickness: 0.0625em;
          text-underline-offset: 0.0625em;
        }
      </style>
    </head>
    <body class='font-sans'>
`
}
