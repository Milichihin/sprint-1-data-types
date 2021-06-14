// import "./styles.css";
// import "./data-types.js";
// import "./arrays.js";
// import "./exceptions.js";
// import "./functions.js";

document.getElementById("app").innerHTML = `
<h1>React online marathon</h1>
<div>
SPRINT 1. Data types. Arrays. Functions. Exceptions.
</div>
`;

// const users = ['андрей', 'ирина', 'игорь', 'петр'];
//users.splice(-1,1);
// users.pop();
// console.log(users);

//==============================================================

// const nu = 'b'+'a'++'a'+'a';
// console.log(typeof nu);

//==============================================================
//Quiz2 of Sprint1

const users = ["андрей", "ирина", "игорь", "петр"];
const numbers = [12, 6, 22, 0, -8];
const mix1 = [12, "User01", 22, true, -8];
const mix2 = ["Index", 6, null, 15];
const loginList1 = ["serg22", "tester_2", "Prokopenko", "guest"];
const loginList2 = ["user1", "user2", "333", "user4", "aa"];
const arrFact = [0, 1, 2, 3, 4, 5];

//=============

function modifyArray(array) {
  array.splice(0, 1, "Start");
  array.splice(-1, 1, "End");
  return array;
}

//=============

function combineArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item) => typeof item === "number");
}

//=============

function longestLogin(loginList) {
  let login = loginList.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr;
  });
  return login;
}

//============= factorial ==========

function factorial(n) {
  return n != 1 && n != 0 ? n * factorial(n - 1) : 1;
}

function processArray(arr, factorial) {
  // return arr.reduce(() => arr.map(factorial));
  return arr.map(factorial);
}

//============== Age ===============

function checkAdult(age = null) {
  try {
    if (
      Number.isInteger(age) &&
      Math.sign(age) === 1 &&
      age >= 18 &&
      !isNaN(age) &&
      age !== null
    ) {
      return console.log("Access allowed");
    } else if (isNaN(age)) {
      throw new Error("Please, enter number");
    } else if (age === null) {
      throw new Error("Please, enter your age");
    } else if (Math.sign(age) !== 1) {
      throw new Error("Please, enter positive number");
    } else if (Number.isInteger(age) === false) {
      throw new Error("Please, enter Integer number");
    } else if (age < 18) {
      throw new Error("Access denied - you are too young!");
    }
  } catch (exception) {
    console.log(exception.name + " " + exception.message);
  } finally {
    console.log("Age verification complete");
  }
}

//==================================

// modifyArray(users);
// modifyArray(numbers);
// const mix3 = combineArray(mix1, mix2);
// const loginList3 = longestLogin(loginList1);
// const loginList4 = longestLogin(loginList2);
// const newArrFact = processArray(arrFact, factorial);

//=====================================

// console.log(users);
// console.log(numbers);
// console.log(mix3);
// console.log(loginList3);
// console.log(loginList4);
// console.log(newArrFact);
// console.log(modifyArray(users));
// checkAdult();
