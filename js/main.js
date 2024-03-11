document.getElementById('electricity').addEventListener('submit', function(event){
  event.preventDefault();



var units = document.getElementById('floatingInput').value;

var subtotal, vat, total;


  if (units<=50) {
  var subtotal = units*0.50;
  }

  else if (units>50 && units<=150) {
  var subtotal = 50*0.50 + (units-50)*0.75;
  }

  else if (units>150 && units<=250) {
  var subtotal = 50*0.50 + 100*0.75 + (units-150)*1.20;
  }

  else if (units>250) {
  var subtotal = 50*0.50 + 100*0.75 + 100*1.20 + (units-250)*1.50;
  }

  var vat = (subtotal*0.2);
  var total = parseInt(subtotal + vat);

  // document.write("Vat: " + vat + "<br>");

  // document.write("subtotal: " + subtotal + " Taka Only" + "<br>");

  document.getElementById('result').innerHTML = 'Your total bill: ' + total + ' Taka Only';

});




