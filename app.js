
// // Easy Going
 for( let q = 1; q <= 20; q = q + 1) {
 	console.log(q);
 }

// // Get Even
 for( let q = 0; q <= 200; q++){
 	if((q % 2) === 0) { 
 		console.log(q)

 	}
}


// // Excited Kitten


for(let i = 1; i < 20; i++) {
	const meowArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
	const randomValue = meowArr[Math.floor(meowArr.length * Math.random())];

	
 if( i % 2 === 0) { 

 	console.log(randomValue);

 	} else { 
	console.log("Love me, pet me! HSSSSSS!")
 }
}


// // Fizz Buzz
// this took me a little bit and I used
// google and the help of others
// but the more I let it play through 
// the more it makes sense
for( let i = 1; i<=100; i++) {
	if( i % 15 === 0)
		console.log("fizzbuzz");

else if( i % 3 === 0)
	console.log("fizz");
else if ( i % 5===0)
	console.log("buzz");
else console.log(i);

}

// // Getting to know you

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];



shahzad[0] = "Gameboy";
daniel[1] = daniel[1] + 1;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
 jim.splice(2,1,"Tampa", "South Bend", "Denver")

console.log(jim)




	
// Yell at Ninja Turtles
const ninjaTurtles = ['Donatello', 'Lenardo', 'Raphael', 'Michaelangelo'];
for(let i = 0; i < ninjaTurtles.length; i++) {

	console.log(ninjaTurtles[i].toUpperCase());{
	}
}	
// add uppercase to console.log!

// The Return of Closets
// // This tripped me up and it took some pretty heavy 
// assisting, like fizzbuzz the more I look at this
 // the more it is clicking


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
const kristynsShoe = [];
kristynsShoe.push(kristynsCloset[0])
kristynsCloset.splice(0,1);


console.log(kristynsShoe)

// // // Dress Em Up

 
 // const thomsCloset = [
  
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const krystOut1 = "Kristyn's gonna wear a " + kristynsCloset[2] + "," + kristynsCloset[1] + ", and " + kristynsCloset[5];
console.log(krystOut1);

const krystOut2 ="Kristyn's gonna wear a " + kristynsCloset[3] + "," + kristynsCloset[4] + ", and " + kristynsCloset[6];
console.log(krystOut2);

const krystOut3 ="Kristyn's gonna wear a " + kristynsCloset[0] + "," + kristynsCloset[5] + ", and " + kristynsCloset[4]; 
console.log(krystOut3);

const thomOut1 = "Thom's gonna wear a " + thomsCloset[0][3] + "," + thomsCloset[2][2] + ", and " +thomsCloset[1][1];
console.log(thomOut1);

const thomOut2 = "Thom's gonna wear a " + thomsCloset[0][2] + "," + thomsCloset[1][0] + ", and " +thomsCloset[2][0];
console.log(thomOut2);

const thomOut3 = "Thom's gonna wear a " + thomsCloset[0][0] + "," + thomsCloset[1][2] + ", and " +thomsCloset[2][1];
console.log(thomOut3);





// // // Dirty Laundry
// // // Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

	
	for(i = 1; i <kristynsCloset.length; i++){
    console.log("WHIRR: Now washing" + kristynsCloset[i] + ".")
  }

// // Inventory
// // Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

for(let g = 0; g < thomsCloset.length; g++) {
  console.log(thomsCloset[g]); 
}
// I talked with a few people about this
// I thought I would be able to console.log
// just the arrays without anything in them
// but was unable too, I'm sure theres a way?




// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;

for( let i = 1; i <= 1000; i++){
  if(i % 3 === 0 || i % 5 === 0){
    sum += i
  }
}

console.log(sum)

// This one is not only like fizzbuzz but
// like fizzbuzz it took me asking for a better
// explanation, and a little while for me to get
 // mostly due to my brain being 
// blahh, but after getting through it, it clicks
// my girlfriend says thats learning
// The End
