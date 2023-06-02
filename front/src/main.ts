import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { requestHandler } from './requester.ts'

// import des variables d'environnement
const {
  VITE_hostname,
  VITE_port,
  VITE_route
} = import.meta.env;

// hydratation de la page avec contenu demo setup vite + ts
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>DAF test</h1>
    <section>
      <!-- content -->
      <div class="card">
        <button id="req-btn" type="button">send request</button>
      </div>
      <div id="res-table-wrapper">
        <p>Click on the "send request" button to fetch data.</p>
      </div>
    </section>
  </div>
`

// ajout d'un event listener sur le bouton pour gérer la requête
const url = `http://${VITE_hostname}:${VITE_port}/${VITE_route}`;
const reqBtnElm = document.querySelector<HTMLButtonElement>('#req-btn')!;
reqBtnElm.addEventListener('click', () => {
  requestHandler(url)
});
