const btn = document.querySelector(".task2");
const btn2 = document.querySelector(".task2_2");
const btn3 = document.querySelector(".task2_3");
const btn4 = document.querySelector(".task2_4");
const btn5 = document.querySelector(".task4_1");
const btn6 = document.querySelector(".task4_2");
const btn7 = document.querySelector(".task4_3");

let date = new Date();

// проверяю потому что дни дают только по числам
function getDay() {
  let day = "";
  switch (date.getDay()) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }
  return day;
}

btn.addEventListener("click", () => {
  alert(`
  to day: ${getDay()}
  Current time is: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}
  `);
});

function reverseString() {
  let inp = prompt();
  return alert(inp.split("").reverse().join(""));
}

btn2.addEventListener("click", () => {
  reverseString();
});

function factorial() {
  let num = +prompt("Введите число: ");
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  alert(result);
}
btn3.addEventListener("click", () => {
  factorial();
});

function colorsStr() {
  myColor = ["Red", "Green", "White", "Black"];

  alert(myColor.join(","));
  alert(myColor.join("+"));
}

btn4.addEventListener("click", () => {
  colorsStr();
});

function str() {
  const str1 = document.getElementById("string-1");
  const str2 = document.getElementById("string-2");
  const str3 = document.getElementById("string-3");
  const str4 = document.getElementById("string-4");
  const str5 = document.getElementById("string-5");
  const str6 = document.getElementById("string-6");

  let arrStr = [
    str1.innerText,
    str2.innerText,
    str3.innerText,
    str4.innerText,
    str5.innerText,
    str6.innerText,
  ];

  for (let i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i]);
  }
}

btn5.addEventListener("click", () => {
  str();
});

let colors = document.getElementsByClassName("element");
function changeOnColors() {
  for (let i = 0; i < 3; i++) {
    colors[i].style.color = "red";
  }
  for (let i = 3; i < colors.length; i++) {
    colors[i].style.color = "green";
  }
}
btn6.addEventListener("click", () => {
  changeOnColors();
});

let ol = document.getElementById("todo-list");

function createElementAndAppend() {
  var tasks = [
    "Buy lemonade",
    "Make toasts",
    "Repair car",
    "Play games",
    "Pet a cat",
  ];

  for (let i = 0; i <= 4; i++) {
    let li = document.createElement("li");
    li.innerHTML = tasks[i];
    ol.appendChild(li);
  }
}
btn7.addEventListener("click", () => {
  createElementAndAppend();
});

// const article = document.querySelectorAll("article > p");
// for (let i = 0; i < article.length; i++) {
//   let hr = document.createElement("hr");
//   hr.innerHTML = [i];
//   // article.appendChild(hr);
// }
// console.log(article);

// const cartItems = document.getElementById("cart-items");
// const items = document.querySelectorAll(".item");
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//   if (items[i].innerText == "Cola 1.5 l. x 1") {
//     items[i].remove();
//   }
//   if (items[i].innerText == "Chocolate barx 3") {
//     // let newChild = document.cre
//     let newText = "NEw ELement";
//     items[i].replaceChild(newText, items[i]);
//   }
// }
// console.log(cartItems);
