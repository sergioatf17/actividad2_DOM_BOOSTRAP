
      const formEl = document.querySelector("form"); //Se utilizo el queryselector para cada elemento y no el queryselectorall
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddtxt(e) {
        e.preventDefault();
        const price = document.getElementById("price").value;
        const txt = document.getElementById("txt").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${txt}</td>
                <td>${price}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
            `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit", onAddtxt);
      tableEl.addEventListener("click", onDeleteRow);
    