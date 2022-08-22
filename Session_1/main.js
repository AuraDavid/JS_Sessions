let firstName = "Aura";
let lastName = "David";
let age = 32;
let occupation = "pharmacist";
let hobby = "reading";

console.log (`My name is ${firstName} ${lastName}. 
I'm ${age} and I'm currently working as a ${occupation}.
My favorite way of spending my time is ${hobby}.`);

function  myFunction () {
    let answear = prompt("Hy! What is your name?", "Aura David");
    if (answear != null) {
        let user_input = document.getElementById("output-text");
        user_input.innerHTML = answear;
    }
};

console.log (answear);


         