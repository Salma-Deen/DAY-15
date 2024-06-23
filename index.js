// Accessing button element using its id.ID="number"
var a = document.getElementById("number");
// Creating a main function to display countdown
function a1() {
    setTimeout(() => {
        a.textContent = "10";
        b();   // creating a callback function 
           }, 1000);    // Setting Timeout for one second
}

function b() {
    setTimeout(() => {
        a.textContent = "9";
        c();   // creating a callback function 
    }, 1000);      // Setting Timeout for one second
}

function c() {
    setTimeout(() => {
        a.textContent = "8";
        d();    // creating a callback function 
    }, 1000);       // Setting Timeout for one second
}
function d() {
    setTimeout(() => {
        a.textContent = "7";
        e();    // creating a callback function 
    }, 1000);       // Setting Timeout for one second
}
function e() {
    setTimeout(() => {
        a.textContent = "6";
        f();    // creating a callback function 
    }, 1000);       // Setting Timeout for one second
}
function f() {
    setTimeout(() => {
        a.textContent = "5";
        g();    // creating a callback function 
    }, 1000);        // Setting Timeout for one second
}
function g() {
    setTimeout(() => {
        a.textContent = "4";
        h();    // creating a callback function 
    }, 1000);        // Setting Timeout for one second
}
function h() {
    setTimeout(() => {
        a.textContent = "3";
        i();     // creating a callback function 
    }, 1000);        // Setting Timeout for one second
}
function i() {
    setTimeout(() => {
        a.textContent = "2";
        j();     // creating a callback function 
    }, 1000);          // Setting Timeout for one second
}
function j() {
    setTimeout(() => {
        a.textContent = "1";
        k();    // creating a callback function 
    }, 1000);        // Setting Timeout for one second
}
function k() {
    setTimeout(() => {
        a.textContent = "HAPPY INDEPENDENCE DAY!";
    }, 1000);       // Setting Timeout for one second
}   
// Add event listeners
a.addEventListener("click", a1);
