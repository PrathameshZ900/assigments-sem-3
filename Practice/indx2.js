let school = {
    name:"Xyz School",
    establishYear:1990,
    departments:{
      math:{ teachers:5, students:150},
      science:{ teachers:4, students:120},
      history:{ teachers:3, students:100 },
      english:{ teachers:3, students130}
    },
    courses:["math","science","history","english"],
    students:[],
};


let {
    departments:{
        math: {teachers: mathTeachersCount, students:mathStudentCount }
    }
}= school;
console.log({mathTeachersCount,mathStudentCount});