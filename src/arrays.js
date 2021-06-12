//=== Arrays. Access by index ==================================
//=== Массивы. Доступ по индексу ===============================

// There are 2 ways to create an array:
// const arr = [];
// const arr = new Array();

//=== Arrays. Add elements. Length property ====================
//=== Массивы. Добавление эл. Параметр длины ===================

//=== The index also records/changes values for array elements :
// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[0]);  // Rome
// cities[0] = "Berlin";
// console.log(cities[0]);  // Berlin

//=== You can add elements (expand the array):
// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[5]);  // undefined – there are only 3 elements in array
// cities[5] = "London";
// console.log(cities[5]);  // London

//=== You can find out the current size of the array using the length property:
// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.length);    // 3

//=== Arrays. Loop over an Array ===============================
//=== Массивы. Перебор циклом ==================================

//=== YIterate through the elements of an array using a loop for of :
// const cities = ["Rome", "Lviv", "Warsaw"];
// for (let i of cities) {  // run 3 times
//    console.log(i); // Rome, Lviv, Warsaw

//=== YSimilar actions can be done with for :
// const cities = ["Rome", "Lviv", "Warsaw"];
// for (let i = 0; i < cities.length; i++) {   // run 3 times
//    console.log(cities[i]);  } // Rome, Lviv, Warsaw

//=== YThe for construct is more flexible than for of. The for..of loop does not provide access to the current item number, only to its value. In for, you can jump several elements forward depending on the step of the counter and change the elements:
// const cities = ["Rome", "Lviv", "Warsaw"];
// for (let i = 0; i < cities.length; i += 2) {
//    cities[i] = cities[i] + "!";
// }   console.log(cities); // ["Rome!", "Lviv", "Warsaw!"]

//=== Arrays. Arrays methods ===================================
//=== Массивы. Методы ==========================================

//=== Arrays provide many methods:
// push(... items) - adds items to the end of the array
// pop() - removes the element at the end of the array and returns it.
// shift() - removes the element at the beginning of the array and returns it.
// unshift(... items) - adds items to the beginning of the array.
// slice(start, end) – creates a new array, copying elements from start to end (not including end) into it.
// splice(pos, deleteCount, ...items) – starting at the pos index, removes deleteCount items and inserts items.
// concat(...items) – returns a new array: copies all members of the current array and adds items to it.
// forEach(func) – calls func for each element (enumeration)
// map() – creates a new array with the results of calling a function for every array element.

//=== push() method
// Consider adding an element to the end of an array by the push() method.
// 	const cities = ["Rome", "Lviv", "Warsaw"];
// 	cities.push("Kyiv");
//   console.log(cities);   // ["Rome", "Lviv", "Warsaw", "Kyiv"]

//=== shift() method
// Consider deleting the first element of the array by the shift() method..
// 	const cities = ["Rome", "Lviv", "Warsaw"];
// 	cities.shift();
//   console.log(cities);  // ["Lviv", "Warsaw"]

//=== splice() method
// You can also delete an element of the array by its index (position) by the splice() method:.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const deletedElem = cities.splice(cities, 1); // Rome
// console.log(cities);  //  ["Lviv", "Warsaw"]

//=== filter()
// The filter() method creates a new array with all the elements tested by the specified function.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.filter(function(citie) { return citie.length < 5 });
// console.log(newArr); // ["Rome", "Lviv"]

//=== map()
// The map() method creates a new array by performing a given function for each element of the array.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.map(function (city) { return city + "Capital" });  // ["RomeCapital", "LvivCapital", "WarsawCapital"]

//=== reduce()
// The reduce() method performs the reducer function you specified for each element of the array and returns a single value.

// const data = [2, 4, 6];

// function reducer(total, value) {
//   return total / value;
// }
// console.log(data.reduce(reducer)); // 0.08333333333333333

// function reducer2(total, value) {
//   return total / value - value;
// }
// console.log(data.reduce(reducer2)); // -6.583333333333333

// function explanation(total, value) {
//   return `(${total} / ${value} - ${value})`; //
// }
// console.log(data.reduce(explanation)); // ((2 / 4 - 4) / 6 - 6)
