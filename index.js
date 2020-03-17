// ***********WEEK 6 Coding challenges:

// Create a new github repo named coding-challenges (or whatever suitable name you would like) 
// and a folder with the same name on your computer;
// Connect your local folder with the github repo (you need to run git init, then git remote add origin)
// Create two branches for each challenge below; once you are done with the code push to github and merge 
// into master. (you will have two branches merged into master);

// // 1. Write a function that takes three arguments - all numbers - adds them together, divide the result in 3 and displays the result on the console.

//CORRECT!:

// function add(x,y,z){
//    console.log((x+y+z)/3)
//    }

// add(14,78,90)


// // 2. Write a function that takes an array of numbers as an argument. 
// Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log
// (“Sorry, no 3-divisible numbers”). (Think of push() method) (similar to week 5 #2 challenge)

//*** NEED HELP FINISHING THIS:


// Var array = [1,2,3,4,5,6,7,8,9]

// function numbArray(arg){
// 	var empty = []
// for (var i = 0;i <arg.length; i++) {
// 	if (arg[i] % 3 === 0) {
// 	empty.push(arg[i])
// 	}
// }
// 	if (empty,length ===0){
// 		console.log ("there are no numbers divisible by 3")
// 	} else{
// 		console.log(empty)
// 	}
// }

// numbArray(array)

// 3. Write a function that takes an array of numbers as argument and lists in another array all numbers bigger than 10; if there are no numbers bigger than ten just console.log("no numbers bigger than 10");

// var array1 = [0,2,5,10]
// var array = [0,1,2,5,10,12,15,20,25,30]
// function BiggerThan10(arg){
// 	var reply = []
// 	for (var i = 0;i <arg.length; i++) {
// 	if (arg[i] > 10) {
// 		reply.push(arg[i])
// 		}
// 	}
// 	if (reply.length ===0){
// 		console.log("no numbers bigger than 10")
// 	}
// console.log(reply);

// }

// BiggerThan10(array)
// BiggerThan10(array1)


// 4. Write a function that takes a string as an argument and returns (console.logs) all the vowels in this string

// NEED HELP:

// function ListVowels(data){
// var vowels = new Array("a", "e," "i", "o", "u", "y")

//    for(var i = 0; i < data.length; i++){
//    console.log();   
// 	}
// }

// var data = "jessica weinstein is doing her code challenges homework"
// listVowels(data)

// var result = string.split(" ")




// 5. Write a function that takes a string sentence as an argument and lists all the words that are longer than 5 characters in this sentence. IF there is no word longer than five characters console.log('very short words")







// 6. Write a function that lists all the numbers from 0 to 100; If a number is divisible by 3 console.log("Fizz"); if a number is divisible by 5, console.log("Buzz"); if a number is divisible by both 3 and 5 console.log("FizzBuzz")








// WEEK 7 CODE CHALLENGES

// 7. Create a function that takes in a string of multiple words and returns the first word with “ish” added to the end. Example:
// ishFunc(“Soup is my favorite.“) -> “Soupish”


// 8. Write a function that takes and array of numbers and adds the sum of them.

// var numbersArray = [12,15,23,46,10,14]
// var total = 0;

// for (var i = 0; i<numbersArray.length; i++){
// total += numbersArray[i]
// }

// console.log(total)



// 9. Write a function that takes a string argument and returns all the instances of vowels ex. -> “whatever” - returns “aee”





// 10. Create an array. Using the .forEach() method on the array, print each element to  the console. If you are unsure on how to use .forEach(), Google it.





// 11 Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// // checkNums( [1, 3, 5, 12, 22] ) -> true
// //checkNums( [30, 99, 8, 22, 7] ) -> false
