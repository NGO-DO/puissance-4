const maxRow = 6;
const maxCol = 7;

export class Puissance4 {
  constructor() {
    this.element = document.createElement("table");
    this.element.style.backgroundColor = "blue";
    this.element.style.border = "1px blue outset";
    document.getElementsByTagName("div")[0].appendChild(this.element);
    this.tableau = this.joueurs();
    this.firstplayer = 0;
    this.tblrow();

    // let p1 = new Player(1, "red", "toto");
    // let p2 = new Player(2,"yellow", "titi");
    // console.log(p1);
    // console.log(p2);
  }
  tblrow() {
    let table = [];
    for (let i = 0; i < maxRow; i++) {
      let rows = document.createElement("tr");
      rows.classList.add(`rows:${i}`);
      // table[i] = [];
      document
        .getElementsByTagName("div")[0]
        .getElementsByTagName("table")[0]
        .appendChild(rows);
      rows.style.backgroundColor = "blue";

      for (let j = 0; j < maxCol; j++) {
        let cols = document.createElement("td");
        // table[i][j] = 0;
        cols.classList.add(`row:${i}`, `cols:${j}`);
        document
          .getElementsByTagName("div")[0]
          .getElementsByTagName("table")[0]
          .getElementsByTagName("tr")
          [i].appendChild(cols);
        cols.style.width = "2cm";
        cols.style.height = "2cm";
        cols.style.margin = "0px";
        cols.style.padding = "0px";
        cols.style.borderRadius = "2cm";
        cols.style.border = "2px blue inset";
        cols.style.backgroundColor = "white";
        cols.style.cursor = "pointer;";
        cols.addEventListener("click", () => {
          this.coordination(cols);
          this.checkWin();
          // tp
        });
      }
    }
    // faire array qui est un taleau en 2 d avec les i et les j
  }
  // comment faire pour que chaque clique de td (de cercle blanc)il y est hello world

  joueurs() {
    let tableau = [];
    for (let n = 0; n < 2; n++) {
      let name = prompt("choose your name " + n);
      let color = prompt("choose your color " + n);
      let player = new Player(`${n}`, color, name);
      tableau.push(player);
    }
    console.log(tableau);
    return tableau;
    // pouvoir mettrele hello dans le player et que ca fasse red yellow red yellow;
  }

  coordination(cols) {
    let col = cols.classList[1].split(":")[1];
    for (let i = maxRow - 1; i >= 0; i--) {
      let cell = document.getElementsByClassName(`row:${i} cols:${col}`)[0];
      if (this.firstplayer == this.tableau[0].id) {
        if (cell.style.backgroundColor == "white") {
          cell.style.backgroundColor = "red";
          cell.classList.add("red-token", "falling");
          this.firstplayer = 1;
          break;
        }
      } else {
        if (cell.style.backgroundColor == "white") {
          cell.style.backgroundColor = "yellow";
          cell.classList.add("yellow-token", "falling");
          this.firstplayer = 0;
          break;
        }
      }
    }
  }

  checkWin() {
    let checkTable = [];
    for (let i = 0; i < maxRow; i++) {
      checkTable[i] = [];
      for (let j = 0; j < maxCol; j++) {
        checkTable[i][j] = document.getElementsByClassName(
          `row:${i} cols:${j}`
        )[0].style.backgroundColor;
        // chektable reconstruit le tableau
      }
    }
    console.table(checkTable);

    // console.log(checkTable[0][0]);
    for (let i = 0; i < maxRow; i++) {
      for (let j = 0; j < maxCol; j++) {
        if (checkTable[i][j] != "white") {
          if (
            j + 3 < maxCol &&
            checkTable[i][j] == checkTable[i][j + 1] &&
            checkTable[i][j] == checkTable[i][j + 2] &&
            checkTable[i][j] == checkTable[i][j + 3]
            // check la ligne
            ) {
              this.AlertIfWin();
          }
          if (
            i + 3 < maxRow &&
            checkTable[i][j] == checkTable[i + 1][j] &&
            checkTable[i][j] == checkTable[i + 2][j] &&
            checkTable[i][j] == checkTable[i + 3][j]
            // check la colonne
          ) {
            this.AlertIfWin();
          }
          if (
            i + 3 < maxRow &&
            j + 3 < maxCol &&
            checkTable[i][j] == checkTable[i + 1][j + 1] &&
            checkTable[i][j] == checkTable[i + 2][j + 2] &&
            checkTable[i][j] == checkTable[i + 3][j + 3]
            // check diagonale /
          ) {
            this.AlertIfWin();
          }
          if (
            j < maxCol &&
            i > 0 &&
            checkTable[i][j] == checkTable[i - 1][j + 1] &&
            checkTable[i][j] == checkTable[i - 2][j + 2] &&
            checkTable[i][j] == checkTable[i - 3][j + 3]
            // check diagonale \
          ) {
            this.AlertIfWin();
            // on ckeck la couleur dans mon tableau en 2D
          }
        }
      }
    }
  }
  AlertIfWin(currentplayer){
  alert("Win");

  }
}
// la position ou jme trouve c'est blanc verifier si le dernier row l'est avec la colonne

class Player {
  constructor(id, color, name) {
    this.id = id;
    this.color = color;
    this.name = name;
    this.joueurs;
  }
}
// crée un boucle qui crée 2 id 2 player;
