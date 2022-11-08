let productionsInGrammar;

function hello(){
  let numProductions = document.getElementById("productions-num-input");
  productionsInGrammar = numProductions.value;
  //-- Create form with inputs for each production -- //
  const container = document.getElementById("productions-section");
  const formElement = document.createElement("form");
  
  for (let i = 1; i <= numProductions.value; i++) {
    
    const labelElement = document.createElement("label");
    const inputElement = document.createElement("input");
    const brElement = document.createElement("br");
    
    labelElement.appendChild(document.createTextNode("Gramática " + i));
    inputElement.setAttribute("id",i);

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

  container.appendChild(formElement);
}

function hi(){
  let rawData = [];
  //the number 3 in the upcoming operation allows to obtain the input element from the children array of the form element prevously created
  let max = productionsInGrammar*3;
  for (let i = 1; i <= max; i+=3) {
    rawData.push(document.getElementById("productions-section").childNodes[1].childNodes[i].value);
  }
  console.log(rawData);
}