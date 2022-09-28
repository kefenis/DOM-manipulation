// Do your magic here!
// 1
function changeBackgroundColor() {
  let colorChange = document.getElementById("container");
  colorChange.style.backgroundColor = "blue";
}

// 2
function validate() {
  // to hold numb id
  let checkValue = document.getElementById("numb").value;

  //   a variable to hold demo id
  let demo1 = document.getElementById("demo");

  if (checkValue > 1 && checkValue < 10) {
    demo1.innerHTML = "valid input";
    // console.log(`valid input`);
  } else {
    demo1.innerHTML = "Please input a number between 1 and 10";
    // console.log("Please input a number between 1 and 10");
  }
}

// 3
var dt = new Date();
let dispDate = document.getElementById("myBtn");
dispDate.addEventListener("click", function () {
  alert(dt);
});
