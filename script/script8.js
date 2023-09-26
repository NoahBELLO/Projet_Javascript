var img = document.querySelector("#img1");
var elements = document.getElementsByName("theImage");
console.log(elements[0] === img);
elements = document.querySelectorAll("img");
console.log(elements[0] === img); 