// sim Data base ---

let userName="mortiz@gmail.com";
let userPassword="test1234";

// login function ---
// get username and password using prompt then compare with username and password --- 

// display welcome message || display invalid ---

let uName= prompt("Please enter username");
let uPassword= prompt("eneter password")
if(uName === userName && uPassword === userPassword){
    document.write(`<p> Welcome ${uName}! </p>`);
}else{
    document.write(`<p>Invalid credentials</p>`)
};