
"use strict"
// First Question

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") {
//         ok();
//     } else {
//         fail();
//     }
// }
// let user = {
//     name: "John",
//     loginok() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginok, user.loginFail);

// correction to the above problem, using closure

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "John",
//     loginok() {
//         return function () {
//             alert(`${this.name} logged in`);
//         };
//     },
//     loginFail() {
//         return function () {
//             alert(`${this.name} failed to log in`);
//         };
//     },
// };

// askPassword(user.loginok, user.loginFail);

  
// correction to the above problem, using binding

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "John",
//     loginok() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginok.bind(user), user.loginFail.bind(user));


// Second Question

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//       this.students.forEach(
//         function (student) {
//           console.log(this.title + ": " + student);
//         }
//       );
//     },
//   };
//   group.showList();

// correction to the above problem, using bind
  
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//       this.students.forEach(
//         function (student) {
//           console.log(this.title + ": " + student);
//         }.bind(this)
//       );
//     },
//   };
//   group.showList(); 

// correction to the above problem, using Arrow Function
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(
            (student) => console.log(this.title + ": " + student)
        );
    },
};
group.showList();
    
