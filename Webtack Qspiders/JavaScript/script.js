// Example 1
// function parent() {
//   var money = 50000;
//   console.log(money);

//   function child() {
//     let savings = 2000;
//     console.log(savings);
//   }
//   child();
// }
// parent();

// Example 2
// Lexical Scoping -> Ability of JS engine to search a variable outside of its current scope

// function parent() {
//   var money = 50000;
//   console.log(money);

//   function child() {
//     let savings = 2000;
//     console.log(savings, money); // Closures -> It is a memory which is created whenever we try to eccess parent  function's property inside child function
//   }
//   return child;
// }
// let x = parent();
// console.log(x);
// x();

// Object destructuring

// let obj = {
//   name: "John",
//   age: 30,
//   company: "TCS",
//   sal: 60000,
// };

// let { name, age, sal } = obj; // destructuring
// console.log(name, age, sal);

// let { name: n, age: a, sal: s } = obj; // aliasing
// console.log("Name is:", n, ",", "Age is: ", a, ",", "salary is: ", s);

// let obj2 = {
//   name: "Doe",
//   age: 25,
//   company: "Infosys",
// };
// let { sal: salary = 0 } = obj2;
// console.log(salary);

// This keyword

// console.log(window); // Global obj
// console.log(this); // Window

// let arr = [this];
// console.log(arr[0]);

// function abc() {
//   console.log(this);
// }
// abc();

// let obj3 = {
//   x: this,
// };
// console.log(obj3.x);

// How to create a Method

// function getEmail() {
//   //console.log(this);
//   console.log(this.firstName + "." + this.lastName + "@gmail.com");
// }
// function getSubjects(s1, s2) {
//   console.log("Subjects are: ", s1, s2);
// }

// let student = {
//   firstName: "John",
//   lastName: "Doe",
//   //getEmail,
// };

// let teacher = {
//   firstName: "clark",
//   lastName: "Kent",
//   //getEmail,
// };
// student.getEmail();
// teacher.getEmail();

// If we want to change the direction of this keyword
// call(), apply(), bind()

// 1-> call()
// getEmail.call(student);
// getSubjects.call(student, "Html,", "css"); // 3 ars -> obj and 2 strings

// // 2-> apply()
// getEmail.apply(teacher);
// getSubjects.apply(student, ["React,", "Node"]); // 2 args -> obj and a array

// // 3-> bind()
// let boundedEmail = getEmail.bind(student);
// console.log("getEmail Bound completed");
// boundedEmail();

// let boundedSubjects = getSubjects.bind(teacher, "Java,", "JS");
// console.log("getSubjects Bound completed");
// boundedSubjects();

// Push Pop & Slice Methods

// 6 -> Slice(StartIndex, EndIndex)
// It ignores the last index

// let arr5 = [10, 20, 30, 40];
// let slicesArr = arr5.slice(1, 3);

// console.log(slicesArr);
// console.log(arr5);

// 7 -> includes() : checks weather element is present in in an array or not, return boolean value

// let arr6 = [10, 200, 300, 400];
// console.log(arr6.includes(200)); // true
// console.log(arr6.includes(500)); // false

// // 8 -> indexOf() : accept an element in argumentand return index of an element if present otherwise return -1

// console.log(arr6.indexOf(300)); // 2
// console.log(arr6.indexOf(500)); // -1

// 9 -> concat() : merge 2 or more arrays into a single array and return a new array

// let arr7 = [100, 200, 300, 400];
// let arr8 = [500, 600, 700, 800];
// let arr9 = [900, 1000];

// let newArr = arr7.concat(arr8, arr9);
// console.log(newArr); // [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

// 10 -> reverse() : reverse the original array
// let arr10 = [78, 68, 58, 48];
// console.log(arr10.reverse()); // [48, 58, 68, 78]

// // 11 -> sort() : sort the original array in ascending order

// let arr11 = [10, 40, 30, 50, 20];
// console.log(arr11.sort((a, b) => a - b)); // [10, 20, 30, 40, 50]

// // If a-b then ascending and if b-a then descending order ***

// // Descending order
// let arr12 = [10, 40, 30, 50, 20];
// arr12.sort((a, b) => b - a);
// console.log(arr12); // [50, 40, 30, 20, 10]

// // LexoGraphic sorting -> It is a default sorting technique of JS
// // It converts all the elements into strings and then sort them
// let arr13 = [10, 3, 79, 40, 100, 20];
// console.log(arr13.sort()); // [10, 100, 20, 3, 40, 79]

// console.log(arr13.sort((a, b) => a - b));

// Important Array Methods

// forEach() : we cannot return in forEach
// let arr14 = [10, 20, 30, 40, 50];
// arr14.forEach((ele, idx, arr) => {
//   // Parameters -> element, index, array, element will store array element one by one && index will store index of that element & arr will store the complete array && arr will be same for all iterations
//   console.log(ele, idx, arr);
//   return ele + 5; // return value of forEach is always undefined
// });
// console.log(
//   "return value of forEach is:",
//   arr14.forEach((ele) => ele + 5)
// );

// // map() : Map funciton is used to modify the original array and return a new array
// // It will always return a new array of same length as original array
// let val2 = arr14.map((ele, idx, arr) => {
//   console.log(ele, idx, arr);
//   return ele + 5;
// });
// console.log("return value of map is:", val2); // -> New Array will be returned

// filter() : filter is used to filterOut elements form an array and return them
// filter without using filter by for loop
// let arr15 = [10, 20, 30, 45, 50, 65, 70];
// let filteredArr = [];
// for (let i = 0; i < arr15.length; i++) {
//   if (arr15[i] > 30) {
//     filteredArr.push(arr15[i]);
//   }
// }
// console.log(filteredArr);

// // With filter Method
// let val3 = arr15.filter((ele) => ele > 30);
// console.log(val3);

// // find() : find method is used to find the specific element in array and return that element
// let val4 = arr15.find((ele) => ele === 20);
// console.log(val4);

// // findIndex()
// let val5 = arr15.findIndex((ele) => ele === 45);
// console.log(val5); // 3

// reduce() : It is used to reduce the array into a single value
// let arr16 = [10, 20, 30, 40, 50];

// // By for loop
// // let sum = 0;
// // for (let i = 0; i < arr16.length; i++) {
// //   sum += arr16[i];
// // }
// // console.log(sum);

// // by use of reduce Reduce
// let val6 = arr16.reduce((acc, ele) => {
//   console.log(acc, ele);

//   return acc + ele;
// }, 0); // acc value

// console.log(val6);

// Promises *** : It is used to handle asynchronous operations in JS. and it is an Object

// let users = [
//   // Array of Objects
//   { id: 1, ename: "John" },
//   { id: 2, ename: "Doe" },
// ];

// let errorMessage = { message: "Data not found" };

// // Example of Promise
// // 1 -> Pending
// // 2 -> Fulfilled/Resolved
// // 3 -> Rejected

// let p1 = new Promise((resolve, reject) => {
//   // New Promise is a constructor
//   if (10 > 2) {
//     resolve(users); // if condiiton is true Means request is fulfilled
//   } else {
//     reject(errorMessage); // if condition is false Means request is not fulfilled
//   }
// });
// console.log(p1);

// // PromiseState: fullfilled
// p1.then((response) => {
//   console.log(response); // [{id:1, ename:"John"},{id:2, ename:"Doe"}]
//   response.forEach((ele) => {
//     let { id, ename } = ele;
//     document.writeln(ename);
//   });
// });

// // PromiseState: rejected
// p1.catch((error) => {
//   document.writeln(error.message);
// });

// // PromiseState: fullfilled or rejected
// p1.finally(() => {
//   console.log("----------API CALLED-----------");
// });

// JS to JSON -> JSON.stringify()
// JSON to JS -> JSON.parse()

// let obj = { id: 1, fname: "Bruce" };
// console.log(obj);

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// let jsObj = JSON.parse(jsonObj);
// console.log(jsObj);

// fetch("http://example.com/users", {
//    method: "POST",
//    body: JSON.stringify(obj)
//})

// let p1 = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(p1);

// // Promise{
// //      prototype:[[]]
// //      promiseState: "fulfilled"
// //      PromiseResult: Response,
// // }

// p1.then((response) => {
//   let p2 = response.json();
//   console.log(p2);

//   p2.then((data) => {
//     console.log(data);
//   });

//   p2.catch((err) => {
//     console.log(err);
//   });
// });

// Async and Await
// async function getData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await res.json();
//     console.log(data);

//     displayData({ success: true, data });
//   } catch (error) {
//     console.log(error);
//     displayData({ success: false, message: "Something went wrong" });
//   }
// }
// getData();

// function displayData(dbData) {
//   if (dbData.success) {
//     // to display data on UI
//     dbData.data.map((ele) => {
//       document.writeln(`<h1>${ele.title}</h1>`);
//     });
//   } else {
//     // To display error msg on UI
//     document.writeln(`<h1>${dbData.message}</h1>`);
//   }
// }

// let fname = "John";
// let lname = "doe";

// console.log("Student name is " + fname + " " + lname);

// console.log(`Student name is ${fname} ${lname} `);

// Local Storage and Session Storage
// Local Storage : Local storage is used to ....... (There is no Expiry Date of Local Storage)
// Session Storage : Has Expiry Date

function storeDataInLocalStorage() {
  // String Values
  let value = "Hello";
  localStorage.setItem("newData", value);
  // for Objects
  let obj = { text: "Hello World" };
  localStorage.setItem("objectData", JSON.stringify(obj));
  // for Array
  let arr = [10, 20, 30];
  localStorage.setItem("arrayData", JSON.stringify(arr));
}
// storeDataInLocalStorage();
function getDataFromLocalStorage() {
  // get Local Storage Data
  let strData = localStorage.getItem("newData");
  let arrData = JSON.parse(localStorage.getItem("arrayData"));
  let objData = JSON.parse(localStorage.getItem("objectData"));
  console.log(strData);
  console.log(arrData);
  console.log(objData);
}
// getDataFromLocalStorage();

function removeDataFromLocalStorage() {
  localStorage.removeItem("newData");
}
// removeDataFromLocalStorage();

function clearLocalStorage() {
  localStorage.clear();
}
// clearLocalStorage();

// setInterval and setTimeout

let intervalId = setInterval(() => {
  console.log("Hello JS");
}, 2000);

setTimeout(() => {
  console.log("Time out");
  clearInterval(intervalId);
}, 8000);
