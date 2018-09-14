//console.log('hello')



//Easy Going
 // for( let q = 1; q <= 20; q = q + 1) {
 // 	console.log(q);
 // }

// Get Even- finished problem
//  for( let q = 0; q <= 200; q++){
//  	if((q % 2) === 0) { 
//  		console.log(q)

//  	}
// }


//Excited Kitten

// for(let i = 1; i < 20; i++) {
// 	const meowArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
// 	const randomValue = meowArr[Math.floor(meowArr.length * Math.random())];

	
//  if( i % 2 === 0) { 

//  	console.log(randomValue);

//  	} else { 
// 	console.log("Love me, pet me! HSSSSSS!")
//  }
// }


// Fizz Buzz
// for( let i = 1; i<=100; i++) {
// 	if( i % 15 === 0)
// 		console.log("fizzbuzz");

// else if( i % 3 === 0)
// 	console.log("fizz");
// else if ( i % 5===0)
// 	console.log("buzz");
// else console.log(i);

// }

// Getting to know you

// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];



// shahzad[0] = "Gameboy";
// daniel[1] = daniel[1] + 1;
// ryan[2] = "Gotham City";
// reuben.pop();
// reuben.push("Chicago");
//  jim.splice(2,1,"Tampa", "South Bend", "Denver")

// console.log(jim)




	
// Yell at Ninja Turtles
// const ninjaTurtles = ['Donatello', 'Lenardo', 'Raphael', 'Michaelangelo'];
// for(let i = 0; i < ninjaTurtles.length; i++) {

// 	console.log(ninjaTurtles[i].toUpperCase());{
// 	}
// }	
// add uppercase to console.log!

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// const kristynsShoe = [];
// kristynsShoe.push(kristynsCloset[0])
// kristynsCloset.splice(0,1);


// console.log(kristynsShoe)

// Dress Em Up
// I had a lot of help with this
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



// const krystOut1 = "Kristyn's gonna wear a " + kristynsCloset[2] + "," + kristynsCloset[1] + ", and " + kristynsCloset[5];
// console.log(krystOut1);

// const krystOut2 ="Kristyn's gonna wear a " + kristynsCloset[3] + "," + kristynsCloset[4] + ", and " + kristynsCloset[6];
// console.log(krystOut2);

// const krystOut3 ="Kristyn's gonna wear a " + kristynsCloset[0] + "," + kristynsCloset[5] + ", and " + kristynsCloset[4]; 
// console.log(krystOut3);


// const thomOut1 = "Thom's gonna wear a " + thomsCloset[0][3] + "," + thomsCloset[2][2] + ", and " +thomsCloset[1][1];
// console.log(thomOut1);

// const thomOut2 = "Thom's gonna wear a " + thomsCloset[0][2] + "," + thomsCloset[1][0] + ", and " +thomsCloset[2][0];
// console.log(thomOut2);

// const thomOut3 = "Thom's gonna wear a " + thomsCloset[0][0] + "," + thomsCloset[1][2] + ", and " +thomsCloset[2][1];
// console.log(thomOut3);

// Dirty Laundry
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

	
	// for(i = 1; i <kristynsCloset.length; i++){
 //    console.log("WHIRR: Now washing" + kristynsCloset[i] + ".")
 //  }

// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

for( g = 0; g < thomsCloset.length; g++) {
  console.log(thomsCloset[g]); 
}




