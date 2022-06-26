// let i;
// // (start point; stop condition; increment)
// for(i=0;i<5;i=i++){
//     console.log(i);
// }

//display from 1 -10

// check condition at the beginning of the loop
// let j = 99;
// while(j>0){
// console.log(j);
// j--;
// }

// //execute code then check condition
// let k=1;
// do{
//     console.log(k);
//     k++;
// }while(k<11);


// prompt user for product name and product price then do the rest
let productPrompt = prompt("Enter product name");
let pricePrompt = prompt("Enter product price");
let quantityPrompt = prompt("Enter quantity");
let product = productPrompt;
let price = pricePrompt;
let quantity = quantityPrompt;
let tax = price * quantity * .08;
let finalTotal = price * quantity + tax;

document.write(`<h2> Thank you for shopping! </h2>`);
document.write(`<p> Product: ${product}</p>`);
document.write(`<p> Price: ${price}</p>`);
document.write(`<p> Quantity: ${quantity}</p>`);
document.write(`<p> Tax: ${tax}</p>`);
document.write(`<p> You're total is ${finalTotal}</p>`);




//havent learned it yet copy from index and use document write