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

function put2ToRandomCell() {
  const emptyCells = [];
  data.forEach(function (rowData, i) {
    rowData.forEach(function (cellData, j) {
      if (!cellData) {
        emptyCells.push([i,j]);
      }
    });
  });

const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
data[randomCell[0]][randomCell[1]] = 2;


}

function draw() {
  data.forEach((rowData,i) => {
    rowData.forEach((cellData, j) => {
      const target = table.children[i].children[j];
      if (cellData > 0) {
        target.textContent = cellData;
        target.className = 'color-' + cellData;
      } else {
        target.textContent = '';
        target.className = '';
      }

    })
  })
}

startGame();

/*data = [
  [0,2,4,2],
  [0,0,8,0],
  [2,2,2,2],
  [0,16,0,4]
*/

draw();
function moveCells(direction) {
  switch (direction) {

  }

}

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      moveCells('up');
      break;
    
    case 'ArrowDown':
      moveCells('down');
      break;

    case 'ArrowLeft':
      moveCells('left');
      break;

    case 'ArrowRight':
      moveCells('right');
      break;
  }
});
