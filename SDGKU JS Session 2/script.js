let userName= prompt("Enter your name");

//in class ex: get email, name, salary (monthly) from prompt and display info in HTML
console.log(userName);

// let email= prompt("Please enter email address");
// let salary= prompt("Please enter monthly salary");

// document.write(`Welcome to the system ${userName}`);
// document.write(`${email}`);
// document.write(`${salary}`);
// document.write(`
// <p>Welcome to the system ${userName}</p>
// <p>Email: ${email}</p>
// <p>Salary: ${salary}</p>`)

if(confirm("Are you " + userName + "?")){
    console.log("Hello " + userName);
}else{
    console.log("Then what is your name?");
}

// ----- example 2 -------
let number= 99;
if(number == 99){
    console.log("The number is correct");
}

// --------example 3 (get numbers from prompt)-------

let num1= Number(prompt("Enter number 1"));
let num2= Number(prompt("Enter number 2"));
let num3= Number(prompt("Enter number 3"));
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1 == 1 || num2 == 1 || num3 == 1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if (!notTrue){
    console.log("not not true is true!");
}
