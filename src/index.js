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

//=== reduce()
// The reduce() method performs the reducer function you specified for each element of the array and returns a single value.

const data = [2, 4, 6];

function reducer(total, value) {
  return total / value;
}
console.log(data.reduce(reducer)); // 0.08333333333333333

function reducer2(total, value) {
  return total / value - value;
}
console.log(data.reduce(reducer2)); // -6.583333333333333

function explanation(total, value) {
  return `(${total} / ${value} - ${value})`; //
}
console.log(data.reduce(explanation)); // ((2 / 4 - 4) / 6 - 6)
