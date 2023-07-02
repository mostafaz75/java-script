let school = {
  classA: {
    classInfo: {
      className: "Art",
    },
    firstStudent: {
      name: "Ali",
      age:'15',
      since:'managment',
    },
    secondStudent: {
        name: "Amin",
        age:'18',
        since:'managment',
    },
    thirdStudent: {
        name: "Amir",
        age:'19',
        since:'managment',
    },
  },
  classB: {
    classInfo: {
      className: "Art",
    },
    firstStudent:[
      name="Ali",
      age='15',
      since='managment',
    ],
    secondStudent: {
        name: "Amin",
        age:'18',
        since:'managment',
    },
    thirdStudent: {
        name: "Amir",
        age:'19',
        since:'managment',
    },
  },
};
console.log(school.classB.firstStudent);
