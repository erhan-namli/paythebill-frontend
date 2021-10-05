
/* FUNCTIONS */

var buttonFunction = function(evt) {
    /*console.info(this.textContent);*/
    // or
    console.info(evt.target.textContent);

    var numberPattern = /\d+/g;

    var bahsis =  parseFloat(evt.target.textContent.match( numberPattern ));

    var currencyInput = parseFloat(document.getElementById('currency-field').value); /*.match( numberPattern ));*/

    var peopleInput = parseFloat(document.getElementById('people-field').value); /*.match( numberPattern ));*/


    if(peopleInput === 0){

      document.getElementById("red").style.color = "#FF2D00"

      document.getElementById("people-field").style.outlineColor= "#FF2D00"

      document.getElementById("people-field").focus()

      document.getElementById('tipAmount').innerText ="$"+"0.00"
      document.getElementById('totalAmount').innerText ="$"+"0.00"
      
    }else{

    document.getElementById("red").style.color = "#FFFFFF"

    var tipAmountPerson = ((currencyInput*(bahsis))/100)/peopleInput;

    var totalAmountPerson = (currencyInput)/peopleInput  + tipAmountPerson;


    console.log(currencyInput);
    console.log(peopleInput);

    document.getElementById('tipAmount').innerText ="$"+tipAmountPerson.toFixed(2)

    document.getElementById('totalAmount').innerText = "$"+totalAmountPerson.toFixed(2)

  }
  };


var inputChange = function(evt){


    var bahsis = document.getElementById("custom-input-field").value;

    var currencyInput = parseFloat(document.getElementById('currency-field').value); /*.match( numberPattern ));*/

  
    var peopleInput = parseFloat(document.getElementById('people-field').value); /*.match( numberPattern ));*/


    console.log(peopleInput);

    if(peopleInput === 0){

      document.getElementById("red").style.color = "#FF2D00"

      document.getElementById("people-field").style.outlineColor = "#FF2D00"

      document.getElementById("people-field").focus()

      document.getElementById('tipAmount').innerText ="$"+"0.00"
      document.getElementById('totalAmount').innerText ="$"+"0.00"

    } else {

      document.getElementById("red").style.color = "#FFFFFF"

    var tipAmountPerson = ((currencyInput*(bahsis))/100)/peopleInput;

    var totalAmountPerson = (currencyInput)/peopleInput  + tipAmountPerson;


    console.log(currencyInput);
    console.log(peopleInput);

    document.getElementById('tipAmount').innerText ="$"+tipAmountPerson.toFixed(2)

    document.getElementById('totalAmount').innerText = "$"+totalAmountPerson.toFixed(2)

  }
}


var reset = function(evt){

  document.getElementById('tipAmount').innerText = "$"+"0.00"

  document.getElementById('totalAmount').innerText = "$"+"0.00"

}


/* OBJECTS */

  var currencyInput = document.getElementById('currency-field');
  var numberOfPeopleInput = document.getElementById('people-field');
  var five = document.getElementById('five');
  var ten = document.getElementById('ten');
  var fifteen = document.getElementById('fifteen');
  var twenty_five = document.getElementById('twenty_five');
  var fifty = document.getElementById('fifty');

  var resetButton = document.getElementById("reset");

  var customInput = document.getElementById("custom-input-field");

 


/* EVENT LISTENER */


 
  five.addEventListener("click", buttonFunction, false);
  ten.addEventListener("click", buttonFunction, false);
  fifteen.addEventListener("click", buttonFunction, false);
  twenty_five.addEventListener("click", buttonFunction, false);
  fifty.addEventListener("click", buttonFunction, false);
  resetButton.addEventListener("click", reset, false);

  customInput.addEventListener("keypress", inputChange, true);
  



