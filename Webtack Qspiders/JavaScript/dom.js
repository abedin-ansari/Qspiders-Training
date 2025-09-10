//! DOM SELECTORS

// //! 1) document.getElementById()
// let box1 = document.getElementById("box1");
// console.log(box1);

// //! 2) document.getElementsByClassName()
// let box2 = document.getElementsByClassName("box2");
// console.log(box2); // HTMLCollection(3) [div.box2, div.box2, div.box2]

// //! 3) document.getElementsByTagName()
// let sections = document.getElementsByTagName("section");
// console.log(sections); // HTMLCollection(3) [section, section, section]

// // NOTE : HTMLCollection[] is an impure array

// //! Array.isArray() : to check weather array is pure or not, returns boolean
// console.log(Array.isArray(sections)); // false

// //! Array.from() : to convert impure array to pure
// let pureArr = Array.from(sections);
// console.log(pureArr);
// console.log(Array.isArray(pureArr)); // true

// //! 4) document.querySelector()
// let ele1 = document.querySelector("#box1");
// console.log(ele1);

// let ele2 = document.querySelector(".box2");
// console.log(ele2);

// let ele3 = document.querySelector("section");
// console.log(ele3);

// // priority => 1)id  2)class 3)tagname
// let x = document.querySelector("section , #box1 , .box2");
// console.log(x);

// //! 5) document.querySelectorAll()
// let y = document.querySelectorAll("section , .box2 , #box1");
// console.log(y); //NodeList(8) [div#box1, div#box1, div.box2, div.box2, div.box2, section, section, section]

// // NOTE : NodeList is an impure array

// console.log(Array.isArray(y)); // false

// //! difference between NodeList and HTMLCollection
// //----- diff 1
// // HTMLCollection : we cannot use any of the array methods
// // NodeList : we can use only 1 array method i.e, forEach()

// //----- diff 2
// // HTMLCollection : its known as Live Collection
// // NodeList : its known as Static Collection

// //---- code for diff 2
// let collection = document.getElementsByTagName("footer");
// let lists = document.querySelectorAll("footer");

// console.log("collection : ", collection.length); // 3
// console.log("lists : ", lists.length); // 3

// let footerTag = document.createElement("footer");
// footerTag.innerText = "created using js";
// console.log(footerTag); // <footer>created using js</footer>
// document.body.appendChild(footerTag);

// console.log("collection : ", collection.length); // 4 (live)
// console.log("lists : ", lists.length); // 3 (static)

// Dom Manipulation :

// How to create an element form JS : document.createElement()
// const h2tag = document.createElement("h2");
// const h1tag = document.createElement("h1");

// // 1 : innerText
// h1tag.innerText = "I am H1 <mark>tag</mark>";
// // 2 : innerHtml
// h2tag.innerHTML = "I am H2 <mark>tag</mark>";

// console.log(h1tag);
// console.log(h2tag);

// // appendChild() can accept one node as an argument
// document.body.appendChild(h1tag);

// // append() can accept multiple node as an argument
// document.body.append(h1tag, h2tag);

// How to add style using JS
// const div1 = document.createElement("div");
// const div2 = document.createElement("div");

// div1.innerText = "I am div1";
// div2.innerText = "I am div2";

// div1.style.backgroundColor = "red";
// div1.style.color = "white";

// // Way2
// div2.className = "box";
// console.log(div2);

// document.body.append(div1, div2);

// how to set Attribute to an element : setAttribute [Inocmpl]

// const section = document.createElement("section");
// const imgTag = document.createElement("img");

// section.id = "container";
// section.className = "sectionContainer";

// imgTag.setAttribute("src", "Image_path");
// imgTag.setAttribute("alt", "User Image");

// console.log(section);

// const users = [
//   {
//     id: 1,
//     username: "john doe",
//     email: "john@gmail.com",
//     company: { companyName: "HCL", designation: "dev" },
//   },
//   {
//     id: 2,
//     username: "jane doe",
//     email: "jane@gmail.com",
//     company: { companyName: "Wipro", designation: "tester" },
//   },
//   {
//     id: 3,
//     username: "harry doe",
//     email: "harry@gmail.com",
//     company: { companyName: "Capgemini", designation: "hr" },
//   },
// ];

// const mainTag = document.querySelector("main");
// users.map((ele) => {
//   let {
//     username,
//     email,
//     company: { companyName, designation },
//   } = ele;

//   const cardContainer = document.createElement("article");

//   cardContainer.innerHTML = `
//   <h2>Username : ${username}</h2>
//   <p>Email : ${email}</p>
//   <p>company : ${companyName}</p>
//   <p>Designation : ${designation}</p>
//   `;
//   mainTag.append(cardContainer);
// });

// // Create a table

// const tableTag = document.createElement("table");
// tableTag.border = "2px";

// const tr1 = document.createElement("tr");
// const tr2 = document.createElement("tr");
// const tr3 = document.createElement("tr");

// const td1 = document.createElement("td");
// const td2 = document.createElement("td");
// const td3 = document.createElement("td");
// const td4 = document.createElement("td");
// const td5 = document.createElement("td");
// const td6 = document.createElement("td");
// const td7 = document.createElement("td");
// const td8 = document.createElement("td");
// const td9 = document.createElement("td");

// td1.innerText = "A";
// td2.innerText = "B";
// td3.innerText = "C";
// td4.innerText = "D";
// td5.innerText = "E";
// td6.innerText = "F";
// td7.innerText = "G";
// td8.innerText = "H";
// td9.innerText = "I";

// tr1.append(td1, td2, td3);
// tr2.append(td4, td5, td6);
// tr3.append(td7, td8, td9);

// tableTag.append(tr1, tr2, tr3);

// mainTag.append(tableTag);
