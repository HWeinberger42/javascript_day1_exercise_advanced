// exercise 3.1

let a = 7; 
let b = 14; 
let c = "21"; 
let d = '36'; 
let e = 42;

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

let sum = a + b + c + d + e;

console.log(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

console.log(`${f}, ${g}, ${h}, ${i}`);

let product = f * g * h * i;

console.log(product);

let fraction = sum / product;

document.write(fraction);

// exercise 3.2

let people = ["Greg","Mary","Devon","James"];

console.log(people);

people.shift();

console.log(people);

people.unshift("Matt");

console.log(people);

people.pop();

console.log(people);

people.push("Hermann");

console.log(people);

let partOfPeople = people.slice(2);

console.log(partOfPeople);

let indexOfMary = people.indexOf("Mary");

console.log(`The index of "Mary" in variable named people is ${indexOfMary}`);

let indexOfFoo = people.indexOf("Foo");

console.log(`The index of "Foo" in variable named people is ${indexOfFoo}`);

people = ["Greg","Mary","Devon","James"];

console.log(people);

people.splice(2, 1, "Elizabeth", "Anna");

console.log(people);

// exercise 3.3

let matrix = [ 
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 25, 7], 
    [21, 4, 6, 17], 
    [3, 5, 26, 3] 
]; 

console.log(matrix);

console.log(matrix[1][1]);

console.log(matrix[4][2]);

console.log(matrix[5][3]);

console.log(matrix[2][3]);

console.log(matrix[2][1]);





