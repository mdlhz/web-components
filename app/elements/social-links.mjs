
export default function SocialLinks({ html, state }) {
  const { attrs } = state
  const { github, mastodon, rss, instagram, linkedin } = attrs
  return html`
      <style>
        :host {
          width: var(--width, 24px);
          height: var(--height, 24px);
          stroke: var(--dark, red);
          fill: var(--dark, red);
        }

        a {
          width: var(--width, 24px);
          height: var(--height, 24px);
        }

        svg {
          width: var(--width, 24px);
          height: var(--height, 24px);
        }
      </style>
      <div class="flex justify-content-center gap-1 mbe0">
        <a href="https://github.com/${github}" role="none" aria-label="N/A">
          <svg xmlns="http://www.w3.org/2000/svg" stroke ="inherit" fill="inherit" data-name="Layer 1" viewBox="0 0 24 24" id="github">
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/${linkedin}" role="none" aria-label="N/A">
          <svg xmlns="http://www.w3.org/2000/svg" stroke ="inherit" fill="inherit" viewbox="0 0 39 39" width="39" height="39" id="linkedin">
              <path d="M32.728 38.651H6.531c-3.459 0-6.273-2.808-6.273-6.26V6.26C.258 2.808 3.072 0 6.531 0h26.197C36.186 0 39 2.808 39 6.26v26.132c0 3.452-2.814 6.259-6.272 6.259Zm-19.379-6.698h.008V15.281H8.17v16.672h5.178ZM10.76 13.004a2.998 2.998 0 0 0 3.002-3.002A3.008 3.008 0 0 0 10.76 7a3.003 3.003 0 0 0-3.002 3.002 3.003 3.003 0 0 0 3.002 3.002Zm21.998 18.95v-9.14c0-4.491-.975-7.946-6.215-7.946-2.519 0-4.21 1.38-4.905 2.69h-.07v-2.277h-4.967v16.672h5.178v-8.25c0-2.176.413-4.281 3.11-4.281 2.652 0 2.691 2.488 2.691 4.421v8.11h5.178Z"></path>
          </svg>
        </a>
      </div>
      `
}
