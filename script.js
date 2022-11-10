

let kilometres = prompt("Insert kilometres");
let age = prompt("Insert age");



console.log("kilometres:  " + kilometres);
console.log("age:  " + age);

kilometres = parseInt(kilometres);
console.log("Quanto vale numero1: " + kilometres);

age = parseInt(age);
console.log("Quanto vale numero2: " + age);

if ((age <= 0) || (age > 200)) {
    document.write("Errore Age");
} else if (age < 18) {
    console.log("You are a minor");
} else if (age >= 65) { console.log("You'r over 65") }


let kilometresPrice = kilometres * 0.21

console.log("price kilometres: " + kilometresPrice);


//discount

let total = kilometresPrice * age;

console.log("price not discounted " + total)
let discountPrice = 0





if (age > 0 || age < 18) {
    discountPrice = total*0.20;  console.log("You have 20% discount as minor: "+discountPrice);
}
else if (age >= 65) {
    discountPrice =total *0.40; 
 console.log("You have 40% discount as over 65: "+discountPrice);
}
else { discountPrice = 0 }

let discountedTotal= total - discountPrice

console.log(discountedTotal)

//html

document.getElementById("totalPrice").innerHTML = discountedTotal;















