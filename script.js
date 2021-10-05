var onChange = function(evt) {

    console.info(this.value);
    // or
    console.info(evt.target.value);

  };
 

var onclick = function(evt) {
    /*console.info(this.textContent);*/
    // or
    console.info(evt.target.textContent);

    var numberPattern = /\d+/g;

    var bahsis =  parseInt(evt.target.textContent.match( numberPattern ));

    var currencyInput = parseInt(document.getElementById('currency-field').value.match( numberPattern ));

    var peopleInput = parseInt(document.getElementById('people-field').value.match( numberPattern ));

    var tipAmountPerson = ((currencyInput*(bahsis))/100)/peopleInput;

    var totalAmountPerson = (currencyInput)/peopleInput  + tipAmountPerson;


    console.log(currencyInput);
    console.log(peopleInput);

    document.getElementById('tipAmount').innerText ="$"+tipAmountPerson

    document.getElementById('totalAmount').innerText = "$"+totalAmountPerson

  };

var reset = function(evt){

  document.getElementById('tipAmount').innerText = "$"+"falan"

}
  var currencyInput = document.getElementById('currency-field');
  var numberOfPeopleInput = document.getElementById('people-field');
  var five = document.getElementById('five');
  var ten = document.getElementById('ten');
  var fifteen = document.getElementById('fifteen');
  var twenty_five = document.getElementById('twenty_five');
  var fifty = document.getElementById('fifty');

  var resetButton = document.getElementById("reset");
  
 
  five.addEventListener("click", onclick, false);
  ten.addEventListener("click", onclick, false);
  fifteen.addEventListener("click", onclick, false);
  twenty_five.addEventListener("click", onclick, false);
  fifty.addEventListener("click", onclick, false);
  resetButton.addEventListener("click", reset, false);
  




