var count = 9;
var count2 = 12;
var count3 = 9;
var elementCount = document.querySelector("#count");
var elementCount2 = document.querySelector("#count2");
var elementCount3 = document.querySelector("#count3");
function add1() {
  count++;
  console.log(count);
  elementCount.innerHTML = count + " like(s)";
}

console.log("hello");

function add_1() {
  count2++;
  console.log(count3);
  elementCount2.innerHTML = count2 + " like(s)";
}

function add__1() {
  count3++;
  console.log(count2);
  elementCount3.innerHTML = count3 + " like(s)";
}
