const table = document.querySelector("#table");
const score = document.querySelector("#score");
let data = [];

function startGame() {
  const fragment = document.createDocumentFragment();
  [0, 0, 0, 0].forEach(function () {
    const rowData = [];
    data.push(rowData);
    const tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(() => {
      rowData.push(0);
      const td = document.createElement("td");
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
  put2ToRandomCell();
  draw();
}

function put2ToRandomCell() {}

function draw() {}

startGame();

