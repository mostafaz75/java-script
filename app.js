// let school = {
//   classA: {
//     classInfo: {
//       className: "Art",
//     },
//     firstStudent: {
//       name: "Ali",
//       age:'15',
//       since:'managment',
//     },
//     secondStudent: {
//         name: "Amin",
//         age:'18',
//         since:'managment',
//     },
//     thirdStudent: {
//         name: "Amir",
//         age:'19',
//         since:'managment',
//     },
//   },
//   classB: {
//     classInfo: {
//       className: "Art",
//     },
//     firstStudent:[
//       name="Ali",
//       age='15',
//       since='managment',
//     ],
//     secondStudent: {
//         name: "Amin",
//         age:'18',
//         since:'managment',
//     },
//     thirdStudent: {
//         name: "Amir",
//         age:'19',
//         since:'managment',
//     },
//   },
// };
// console.log(school.classB.firstStudent);
// console.clear(school);

// function greeting(name,lastName){
//   let salam= "hello " + name +" "+ lastName;
//   console.log(salam);
//   }

//   greeting("ali","mostafa")
function fourOperation(num1, num2){

  let zarb = num1 * num2;
  console.log(zarb);
  let gam = num1 + num2;
  console.log(gam);
  let tafrigh = num1 - num2;
  console.log(tafrigh);
  let taghsim = num1/num2
  console.log(taghsim);
  let baghmondeh = num1%num2
  console.log(baghmondeh);
  return zarb , gam , baghmondeh , taghsim ;  
}
fourOperation(411,74);


