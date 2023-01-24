let listReference = document.getElementById("elementsList");
let inputReference = document.getElementById("newElement");
let btnReference = document.querySelector("#addElement");

let elements = [];
//<--una lista di elementi aggiunti con l'input

class listElement {
  constructor(name) {
    this.name = name;
  }
}

const renderList = function () {
  //ciclare l'array elements e creare un li per ognuno di essi
  elements.forEach((el) => {
    let newLi = document.createElement("li");
    newLi.innerText = el.name;
    listReference.appendChild(newLi);
  });
};

//Elements sara una classe(stampino) che genera delle istanze(stampe)

btnReference.onclick = function () {
  console.log("clicked");

  //   1)creare una nuova istanza di Element a partire dal valore in input
  let elemento = new listElement(inputReference.value);
  console.log(elemento);

  //2)Aggiungere l'istanza di listElements alla fine dell'array
  elements.push(elemento);
  console.log("Array elements ", elements);

  //3)popolare la lista di elementi nel DOM
  renderList();

  //   4)lasciare il focus sul text
  inputReference.value = "";
  inputReference.focus();
};
