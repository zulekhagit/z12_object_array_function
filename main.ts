#! /usr/bin/env node
import inquirer from "inquirer";

("Object,Array and Function");

Assignment1:("\n\tBuilding Your Friend List\n");

//Learning Objective: Practice working with objects and arrays 
//in TypeScript to create a data structure.
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName, 
//lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your 
//  friend list

type Friends = {
firstName: string;
lastName: string;
id?:number
}

let friends1:Friends = {
    firstName:"saima",
    lastName:"parveen",
    id:1234
}

let friends2:Friends = {
    firstName:"bushra",
    lastName:"khalid",
    id:4567
}

let friends3:Friends = {
    firstName:"jaiwantee",
    lastName:"bhuro"
}

let people = {
    friends:[friends1,friends2,friends3]
}
console.log(people)

Assignment2:("\n\tManipulating an Array: Rearranging Words\n");

// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC".

const scrambledArray =["student" , "of" , true , 123,"am" , "a" , "GIAIC" , "I"];
scrambledArray.splice(2,2)
scrambledArray.pop()
scrambledArray.unshift("I")
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));


Assignment3:("\n\tCompany Product Catalog\n")

// LearningObjective: Implement data structures in TypeScript to represent  and manage product information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.


type product={
    name:string;
    model:number;
    cost:number;
    quantity:number
}
let product1:product= {
    name:"shampoo",
    model:2023,
    cost:1800,
    quantity:2,

}
let product2:product={
    name:"tea",
    model:2021,
    cost:1000,
    quantity:3,
}
let product3:product={
    name:"shan masala",
    model:2012,
    cost:500,
    quantity:5,

}
let inventory={
    products:[product1,product2,product3]
}

console.log("Quantity of the third product:", inventory.products[2].quantity)

let product4:product={
    name:"book",
    model:2009,
    cost:999,
    quantity:1,
}

inventory.products.push(product4)
console.log("name of the fourth product:" ,inventory.products[3].name)
console.log("model of the 2nd product:" ,inventory.products[2].model)

Assignment4: ("\n\tStudent List Organizer\n");

// LearningObjective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface student{
    name:string;
    seniorStatus:boolean;
    haveCompletedAssignments:boolean

};
const students:student[] = [
    {
        name:"saima",
        seniorStatus:true,
        haveCompletedAssignments:true,
    },

          {
            name:"jaiwantee",
            seniorStatus:true,
            haveCompletedAssignments:true,
          },

          {
            name:"bushra",
            seniorStatus:true,
            haveCompletedAssignments:false,
          },
          {
            name:"majda",
            seniorStatus:false,
            haveCompletedAssignments:false,

          }, 
            { name:"zulekha",
            seniorStatus:true,
            haveCompletedAssignments:false


            },
    
    
    

    
]
console.log(students)

const findStudent =  (Student:student[]) => {
    return students.filter(Student => Student.seniorStatus && Student.haveCompletedAssignments ===true)
}
console.log(findStudent(students))

const removeStudent = (Student:student[]) => {
    return students.filter(Student => Student.seniorStatus === true && Student.haveCompletedAssignments===false)
}
console.log(removeStudent(students))


