
let productionsInGrammar;
let dataRows = [];
var grammar;
var ogChain;
var cykMatrix;

//Create input fields depending on the amount of productions in grammar
function hello(){
  let numProductions = document.getElementById("productions-num-input");
  productionsInGrammar = numProductions.value;
  ogChain = document.getElementById("chain-input").value;

  //-- Create form with inputs for each production -- //
  const container = document.getElementById("productions-section");
  const formElement = document.createElement("form");
  
  //create N amount of input fields
  for (let i = 1; i <= numProductions.value; i++) {
    
    const labelElement = document.createElement("label");
    const inputElement = document.createElement("input");
    const brElement = document.createElement("br");
    
    labelElement.appendChild(document.createTextNode("Gramática " + i));
    inputElement.setAttribute("id",i);
    inputElement.setAttribute("placeholder","Nombre: nombre_producción_izquierda,nombre_producción_derecha; terminal; ...");

    formElement.appendChild(labelElement);
    formElement.appendChild(inputElement);
    formElement.appendChild(brElement);
  }

  const buttonElement = document.createElement("input");
  buttonElement.setAttribute("type","button");
  buttonElement.setAttribute("value","Confirmar");
  buttonElement.setAttribute("id","confirm-btn");
  buttonElement.setAttribute("onclick","hi()");

  formElement.appendChild(buttonElement);

  //Fill container with form
  container.appendChild(formElement);
}

function hi(){
  var rawData = [];
  //the number 3 in the upcoming operation allows to obtain the input element from the children array of the form element prevously created
  var max = productionsInGrammar*3;
  for (let i = 1; i <= max; i+=3) {
    rawData.push(document.getElementById("productions-section").childNodes[1].childNodes[i].value);
  }

  var productions = [];
  for (let i = 0; i < productionsInGrammar; i++) {

    //split input into the production name and the rest
    var stringRow = "";
    stringRow = rawData[i];
    var x = stringRow.split(":");
    var name = x.shift();
    
    //divide right side into cases
    var remaining = "";
    remaining = x[0];
    var cases = remaining.split(";");

    //destination array (either variables or terminal)
    let destinations = [];

    for (let j = 0; j < cases.length; j++) {
      var destinationX;
      if(cases[j].length > 1){
        //variable
        var caseX = "";
        caseX = cases[j];
        const [first, second] = [caseX.slice(0, 1), caseX.slice(1)];
        destinationX = new Destiantion(first,second,null);
      }else{
        //terminal
        destinationX = new Destiantion(null,null,cases[j]);
      }
      destinations.push(destinationX);
    }
    var productionX = new Production(name,destinations);
    productions.push(productionX);
  }

  grammar = new Grammar(productions);
  initializeCYK();
}

function cyk(){

}

function initializeCYK(){
  console.log(grammar.validateProductionInitial("a"));
}

// ------
/*
var d1 = new Destiantion("A","B",null);
var d2 = new Destiantion("B","B",null);
var d3 = new Destiantion(null,null,"a");
var dsp1 = [];
dsp1.push(d1);
dsp1.push(d2);
dsp1.push(d3);

var d4 = new Destiantion("A","A",null);
var d5 = new Destiantion(null,null,"b");
var dsp2 = [];
dsp2.push(d4);
dsp2.push(d5);

var p1 = new Production("A", dsp1);
var p2 = new Production("B", dsp2);

var psg = [];
psg.push(p1);
psg.push(p2);

grammar = new Grammar(psg);

var result;
console.log(grammar);

var generators = grammar.validateProductionInitial("a");
console.log(generators);*/
// ------

