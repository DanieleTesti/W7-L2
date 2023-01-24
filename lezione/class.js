class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.email = "";
  }
}

let marioRossi = new Person("Mario", "Rossi");
marioRossi.email = "mariorossi@mail.com";
console.log(marioRossi);

let luigiVerdi = new Person("Luigi", "Verdi");
console.log(luigiVerdi);

class House {
  constructor(squaredMetres, numbersOfRooms) {
    this.squaredMetres = squaredMetres;
    this.numbersOfRooms = numbersOfRooms;
  }

  generateReport() {
    return (
      "Sono una casa grande " +
      this.squaredMetres +
      " metri quadri e ho " +
      this.numbersOfRooms +
      " camere"
    );
  }
}

let bigHouse = new House(130, 6);
console.log(bigHouse.generateReport());

let monolocale = new House(40, 2);
console.log(monolocale.generateReport());

//SOTTOCLASSI E EREDITARIETA

class Developer extends Person {
  constructor(name, surname, knowLanguages) {
    //super invoca il costruttore dela classe da cui estendere
    super(name, surname);
    //Person è la super classe di developer
    //developer è la sottoclasse di person
    this.knowLanguages = knowLanguages;
  }
}

let marioDev = new Developer("Mario", "Rossi", ["HTML", "CSS"]);
console.log(marioDev);

class SeniorDeveloper extends Developer {
  constructor(name, surname, knowLanguages, favouriteLang) {
    super(name, surname, knowLanguages);
    this.favouriteLang = favouriteLang;
  }
  showOf() {
    return "I' am an experienced developer";
  }
}

let marioSeniorDeveloper = new SeniorDeveloper(
  "Mario",
  "Rossi",
  [
    { name: "HTML", rating: 8 },
    { name: "CSS", rating: 7 },
  ],
  "Typescript"
);

console.log(marioSeniorDeveloper);
console.log(marioSeniorDeveloper.showOf());
