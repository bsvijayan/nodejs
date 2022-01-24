console.log("Hello, World!");

var employee={
  name:"Sam",
  ID  : 10619,
  age : 20,
  skill: "C++"
};
console.log(employee.name)
console.log(employee.ID)
console.log(employee.age)
console.log(employee.skill)

employee["location"]="pune";
console.log(employee.location)

delete employee.skill;
var employee1={
  name:"Vict"
  ID  : 101,
  age : 30,
  skill: "java"
};
