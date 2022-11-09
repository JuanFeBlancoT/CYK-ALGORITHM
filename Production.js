class Production {
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

  validateDestinations(ai){
    var generates = false;
    for (let i = 0; i < this.destinations.length && !generates; i++) {
      generates = this.destinations[i].validateDestination(ai);
    }
    return generates;
  }
}