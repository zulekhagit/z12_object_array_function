("Object,Array and Function");
Assignment1: ("\n\tBuilding Your Friend List\n");
var friends1 = {
    firstName: "saima",
    lastName: "parveen",
    id: 1234
};
var friends2 = {
    firstName: "bushra",
    lastName: "khalid",
    id: 4567
};
var friends3 = {
    firstName: "jaiwantee",
    lastName: "bhuro"
};
var people = {
    friends: [friends1, friends2, friends3]
};
console.log(people);
Assignment2: ("\n\tManipulating an Array: Rearranging Words\n");
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
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));
Assignment3: ("\n\tCompany Product Catalog\n");
var product1 = {
    name: "shampoo",
    model: 2023,
    cost: 1800,
    quantity: 2,
};
var product2 = {
    name: "tea",
    model: 2021,
    cost: 1000,
    quantity: 3,
};
var product3 = {
    name: "shan masala",
    model: 2012,
    cost: 500,
    quantity: 5,
};
var inventory = {
    products: [product1, product2, product3]
};
console.log("Quantity of the third product:", inventory.products[2].quantity);
var product4 = {
    name: "book",
    model: 2009,
    cost: 999,
    quantity: 1,
};
inventory.products.push(product4);
console.log("name of the fourth product:", inventory.products[3].name);
console.log("model of the 2nd product:", inventory.products[2].model);
Assignment4: ("\n\tStudent List Organizer\n");
;
var students = [
    {
        name: "saima",
        seniorStatus: true,
        haveCompletedAssignments: true,
    },
    {
        name: "jaiwantee",
        seniorStatus: true,
        haveCompletedAssignments: true,
    },
    {
        name: "bushra",
        seniorStatus: true,
        haveCompletedAssignments: false,
    },
    {
        name: "majda",
        seniorStatus: false,
        haveCompletedAssignments: false,
    },
    { name: "zulekha",
        seniorStatus: true,
        haveCompletedAssignments: false
    },
];
console.log(students);
var findStudent = function (Student) {
    return students.filter(function (Student) { return Student.seniorStatus && Student.haveCompletedAssignments === true; });
};
console.log(findStudent(students));
var removeStudent = function (Student) {
    return students.filter(function (Student) { return Student.seniorStatus === true && Student.haveCompletedAssignments === false; });
};
console.log(removeStudent(students));
