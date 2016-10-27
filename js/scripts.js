$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputString = $("#inputString").val();
    var outputString = encoder(inputString);
    $("#output").text(outputString);
  });
});
var inputArray = [];
var gridArray = [];
var encoder = function(input) {
var lowerString = input.toLowerCase();
  for (i=0;i<lowerString.length; i++) {

    if (/[a-z0-9]/.test(lowerString.charAt(i))) {
    inputArray.push(lowerString[i]);
    }
  };

  var subArrayLength = gridSize(inputArray.length);
  for (var i=0; i< inputArray.length; i += subArrayLength) {
    gridArray.push(inputArray.slice(i , i + subArrayLength));
  }

  return inputArray.join("");
};

var gridSize = function(length) {
  var squareRootN = Math.sqrt(length);
  var sideA = Math.ceil(squareRootN);
  var sideB;

  if ( sideA * sideA - length > sideA ) {
    sideB = sideA - 1;
  }
  else {
    sideB = sideA;
  }
  return sideA;
};
