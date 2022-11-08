let productionsInGrammar;
let dataRows = [];

//Create input fields depending on the amount of productions in grammar
function hello(){
  let numProductions = document.getElementById("productions-num-input");
  productionsInGrammar = numProductions.value;
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

    for (let j = 0; j < cases.length; j++) {
      if(cases[j].length > 1){
        //variable
        console.log("Im variable: "+cases[j]);
      }else{
        //terminal
        console.log("Im terminal: "+cases[j]);
      }
      
    }
  }
}