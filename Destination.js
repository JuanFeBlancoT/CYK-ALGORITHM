class Destiantion {
  constructor(left,right,term) {
    this.left = left;
    this.right = right;
    this.term = term;
  }
  //Getter
  getLeft(){
    return this.left;
  }

  getRight(){
    return this.right;
  }

  getTerm(){
    return this.term;
  }

  validateDestination(ai){
    if(this.term != null && this.term == ai){
      return true;
    }else{
      return false;
    }
  }

  //receives strings
  validateDestinationRecursive(targetLeft, targetRight){
    if(this.left == targetLeft && this.right == targetRight){
      return true;
    }else{
      return false;
    }
  }
}