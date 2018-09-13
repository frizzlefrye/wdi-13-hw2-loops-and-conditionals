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


for(let i = 1; i <= 100; i++)
	// if the number is divisible by 3 and 5, write "FizzBuzz"
if (i % 3 === 0 && i % 5 === 0){
console.log("FizzBuzz");
} else 
// if the number is divisible by 3, write "Fizz"
if ( i % 3 === 0 ) { 
console.log("Fizz");
}
else if (i % 5 ===0)
// if the number is divisible by 5, write "Buzz"
{
console.log("Buzz");
}
// otherwise, write just the number
else {
console.log(i);
}

	
	