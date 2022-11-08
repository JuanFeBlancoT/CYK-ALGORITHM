import {Destiantion} from './Destination.js';
import {Production} from './Production.js';
import {Grammar} from './Grammar.js';

//Get html elements
//document.getElementById("producitons-num-btn").addEventListener("click",getNumberProductions);

//-- Get the amount of production in the given grammar and create corresponding input fields --//
function getNumberProductions(){
  
  let numProductions = document.getElementById("productions-num-input");
  //-- Create form with inputs for each production -- //
  const container = document.getElementById("productions-section");
  const formElement = document.createElement("form");
  
  for (let i = 1; i <= numProductions.value; i++) {
    
    const labelElement = document.createElement("label");
    const inputElement = document.createElement("label");
    const brElement = document.createElement("br");
    
    labelElement.appendChild(document.createElement("Gramática " + i));
    inputElement.setAttribute("id",i);

    formElement.appendChild(labelElement);
    formElement.appendChild(inputElement);
    formElement.appendChild(brElement);
  }

  const buttonElement = document.createElement("input");
  buttonElement.setAttribute("type","button");
  buttonElement.setAttribute("value","Confirmar");
  buttonElement.setAttribute("id","confirm-btn");

  formElement.appendChild(buttonElement);

  container.appendChild(formElement);
}
//-- E --//

function generate(){
  alert("HEEEY");
}

