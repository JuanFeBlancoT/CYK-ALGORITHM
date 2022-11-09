class Grammar {
  constructor(productions) {
    this.productions = productions;
  }
  //Getter
  getProductions(){
    return this.productions;
  }

  searchProduction(nameProd){
    var found = false;
    var searchProduction;
      for (let i = 0; i < this.productions.length && !found; i++) {
        if(this.productions[i].name == nameProd){
          found = true;
          searchProduction = this.productions[i];
        }
      }
    return searchProduction;
  }

  validateProductionInitial(ai){
    var generators = [];
    for (let i = 0; i < this.productions.length; i++) {
      const element = this.productions[i];
      var generates = element.validateDestinations(ai);
      if(generates == true){
        generators.push(element.name);
      }      
    }
    return generators;
  }
}