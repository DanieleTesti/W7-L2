// esercizio 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static elder(p1, p2) {
    if (p1.age > p2.age) {
      console.log(p1.name + " è più grande di " + p2.name);
    } else {
      console.log(p2.name + " è più grande di " + p1.name);
    }
  }
}

let p1 = new Person("Daniele", 19);
let p2 = new Person("Marco", 20);
let p3 = new Person("Alberto", 22);

Person.elder(p3, p1);

// esercizio 2

newBtn = document.getElementById("myButton");
newUl = document.querySelector("ul");

const newArray = [
  "pane",
  "pasta",
  "mela",
  "banana",
  "aliccoca",
  "formaggio",
  "carne",
  "parmigiano",
  "benzina",
  "io",
  "wdwd",
  "ciao",
];

let pageSize = 10;

class Pagination {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
  }
}

newBtn.onclick = function () {
  let newPagination = new Pagination(newArray, pageSize);
  for (let i = 0; i < newPagination.pageSize; i++) {
    const element = newPagination.items[i];
    let li = document.createElement("li");
    li.innerText = element;
    newUl.appendChild(li);
  }
};
