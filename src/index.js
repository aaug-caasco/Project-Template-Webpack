import styles from './style.scss'
import hero from './hero.html'
import body from './body.html'

let content = `
  ${hero}
  ${body}

`;

let mainContent = document.querySelector(".main-content");

mainContent.outerHTML = content;