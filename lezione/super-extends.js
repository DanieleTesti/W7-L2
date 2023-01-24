class Computer {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    return "Ho un computer " + this.brand;
  }
}

let newComputer = new Computer("apple");
console.log(newComputer.showBrand());

let newComputer2 = new Computer("Lenovo");
console.log(newComputer2.showBrand());

let newComputer3 = new Computer("Dell");
console.log(newComputer3.showBrand());

class ComputerModel extends Computer {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showModel() {
    return this.showBrand() + " ,il modello è " + this.model;
  }
}

let newComputer4 = new ComputerModel("Apple", "Macbook Pro");
console.log(newComputer4.showModel());
