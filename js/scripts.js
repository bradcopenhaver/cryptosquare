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
var encryptedArray =[];
var outputArray= [];

var encoder = function(input) {
for (i=0;i<input.length; i++) {
  if (/[a-z0-9]/i.test(input.charAt(i))) {
  inputArray.push((input[i]).toLowerCase());
  }
};

var subArrayLength = gridSize(inputArray.length);
for (var i=0; i< inputArray.length; i += subArrayLength) {
  gridArray.push(inputArray.slice(i , i + subArrayLength));
}

for (i=0; i<subArrayLength; i++) {
  for (j=0; j < gridArray.length; j++) {
    encryptedArray.push(gridArray[j][i]);
  }
}
var encryptedString = encryptedArray.join("");

for (i=0; i < encryptedString.length; i+=5) {
  outputArray.push(encryptedString.slice(i, i+5));
}
return outputArray.join(" ");
};

var gridSize = function(length) {
  var squareRootN = Math.sqrt(length);
  var sideLength = Math.ceil(squareRootN);
  return sideLength;
};
