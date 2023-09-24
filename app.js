// var  plan1 = {
//     name: "basic",
//     price:3000,
//     space:100,
//     pages:30
// }


// var student = {
//     name: "kabeer",
//     age: 21,
//     email: "kabeer@gmail.com",
//     address: "lahore pakistan",
//     hobbis : ["studayin","swmming", "ridding", "codding"]
// }

// student.name = "kabeer Necrox",
// student.address = "islamabad"
// console.log(plan1)
// alert("my name is " + student.name + "my age is" + student.age + "my eamil is" + student.email +"my addres is" + student.address + "my hobbies"+ student.hobbis) 



// we can also delete object through delete property
// delete student.hobbis;
// console.log(student.hobbis)



// ******************constractor in Object   ***************************





function Student(name, age , email, addres)
{
this.name = name;
this .age = age;
this.eamil = email;
this.addres = addres
}


var student1 = new Student("kabeer",22,"kabeer@gmail.com","lahore")
var student2 = new Student("ali",29,"ali@gmail.com","nyc")
var student3 = new Student("rsk",23,"srkgmail.com","lahore")
var student4 = new Student("salim",25,"salim@gmail.com","karach")


console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)























