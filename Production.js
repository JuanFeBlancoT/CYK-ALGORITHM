export class Production {
  constructor(name,destinations) {
    this.name = name;
    this.destinations=destinations;
  }
  //Getter
  getName(){
    return this.name;
  }

  getDestinations(){
    return this.destinations;
  }
}