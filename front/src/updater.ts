import { Reference } from "./ReferenceType";

// met à jour la vue avec un tableau formaté contenant les résultat de requête
export function viewUpdater(data: Array<Reference>) {

  const resTableElm = document.querySelector<HTMLDivElement>('#res-table-wrapper');
  const updatedElm = `
  <p>${data.length} result${data.length > 1 ? "s" : ""}</p>
  <table class="res-table">
    <tr>
      <th>_id</th>
      <th>contract_reference</th>
    </tr>
    ${
      // ajoute une ligne de tableau par résultat 
      data.map((ref: Reference) => {
      return `<tr>
            <td>${ref._id}</td>
            <td>${ref.contract_reference}</td>
          </tr>`;
      }).join()
    }
  </table>`;
  resTableElm!.innerHTML = updatedElm;
}
