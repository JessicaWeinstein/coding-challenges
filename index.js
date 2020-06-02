//** = questions I need help with/ need to go back to

// 1. Very easy challenges:
// DAY1
// 1. write a function that takes an array as an argument and lists all the items in this array.
		// function listCities (array)
		// 	{
		// 		console.log(array)
		// 	}

		// listCities (["Philadelphia", "New York", "Chicago"])


// 2. write a function that takes two arguments, adds them and checks if the output is bigger than 10;
//   if it is bigger it consoles "it is bigger than 10"; if not, it consoles "it is not bigger than 10"

// function AddNumbers(x,y)
// 		{
// 			if (x+y > 10){
// 				console.log ("it is bigger than 10");
// 			}
// 			else if (x+y < 10){
// 				console.log ("it is not bigger than 10");
// 			}

// 			else {
// 				console.log ("You're number is 10");
// 			}
// 		}

// AddNumbers(5,5)


//3. Create an object literal called person; give some key value pairs as firstName and lastName; finally print the length of the firstName and the lastName of the object. 

// var person = {
// 	firstName: "Jessica",
// 	lastName: "Weinstein"

// }

// console.log (person.firstName.length)
// console.log (person.lastName.length)


// 4. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the corresponding number plus add the line 'it is an even';
// if it is odd add the line 'it is odd'


// function listNumbers() {
// 	for(var i = 0; i <= 100; i++) {

// 		if(i % 2 === 0){
// 			console.log(i + " this is an even number")
// 		} 

// 		else{
// 			console.log(i + " this is an odd number")
// 		} 

// 	}
// }
// listNumbers()


// 5. Write a function that takes two numbers as arguments; if the two numbers are even print 'they are both even numbers';
// if the two numbers are different print "there is one even and one odd"; if both numbers are odd print 'they are both odd'

// function EvenNumbers(x,y) {
// 		if(x% 2 === 0 && y% 2 === 0){
// 			console.log("they are both even numbers")
// 		} 
// 		else if((x% 2 === 0 && y% 2 === 1) || (x% 2 === 1 && y% 2 === 0))  {
// 			console.log("there is one even and one odd")
// 		}
// 		else{
// 			console.log("both numbers are odd")
// 		}

// }

// EvenNumbers(9,10)


// 6. wite a function that lists ONLY the odd numbers between 1 to 100

// function listOddNumbers(){
// 	for(var i = 0; i <= 100; i++){
// 	if (i % 2 === 1)
// 		console.log(i)
// 	}
// }

// listOddNumbers()

// ____________________________________________________


// DAY2

// 1. Write a function that takes three arguments - all numbers - adds them together, split the result in 3 and displays the result on the console.

//*Q: does split mean divide by 3?

// function addAndSplitNumber(x,y,z){
// 		result = x+y+z
// 		result = (result / 3)
// 		console.log (result)
// }


// addAndSplitNumber(5,3,2)

// ** 2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log("Sorry, no 3-divisible numbers")

// var numbers = [5,2,7,1];
// numbers.forEach(divisibleBy3);


// function divisibleBy3(item){
// 	var x=false
// 	if (item % 3 === 0){
// 		console.log(item)
// 		var x = true 
// 	}
// 	if (x=false){
// 		console.log("Sorry, no 3-divisible numbers")
// 	}
// }


// ** 3. Create a function that takes a string of numbers as an argument, converts it into an array and pushes this  in an empty array. Then it lists all items of this array. Google how to push an item in an empty array!!!


// ** 4. Create 4 boxes that have the same size but different colors.
// In these boxes (or next to them) create 4 buttons.
// When you click each button you get the corresponding box's color printed in the console.
// put the colors in an array. You have to use for loop for both the buttons and the colors in the array.


// 5. Create a function that takes a string as an argument and checks if this string is a palindrome.
	// function findPalindrome(string){
	// 	var splitString = string.split("")
	// 	console.log(splitString)

	// 	var reverseString = splitString.reverse()
	// 	console.log(reverseString)

	// 	var joinedString = reverseString.join("")
	// 	console.log(joinedString)

	// 	if (string === joinedString){
	// 		console.log (string + " is a palindrome")
	// 	}

	// 	else {
	// 		console.log (string + " is not a palindrome")
	// 	}
		
	// }

	// findPalindrome("tacocat")

//(similar to semester 1, week 5, #2 code challenge )

// function pali ([array]){
// var backwards = word.split(" ")
// var backwars2 = backwards.reverse()
// var backwards3 [ backwards2.join("")
// if (word === backwards3){
// 	console.log(backwards3 + " is a palindrome")
// } else {
// 	console.log(backwards3 + " is not a palidrome"){
// 	}
//pali("racecar")
// }

// ____________________________________________________


//DAY 3
// 1. Write a function that takes three arguments, adds them together and returns true if the sum is
// divisible by three; returns false if the sum is not divisible by three

// function SumOfThree(x,y,z){
// 	result = x+y+z
// 	if (result % 3 == 0){
// 		console.log ("true")
// 	}
// 	else{
// 		console.log ("false")
// 	}

// }

// SumOfThree(3,2,3)

// 2. Write a function that takes an array of numbers and adds the sum of them.


// function AddNumbers(array){
// sum = 0;
// 	for(var i = 0; i < array.length; i++){
// 	sum += array[i]
// 	}
// 	console.log(sum);
// }

// AddNumbers ([3,10,5,4])


// **3. Write a function that takes a string argument and returns all the instances of vowels

//NEED HELP:
//write a long if statement like if(word === “a” || word === “e”)
// function ListVowels(data){
// var vowels = new Array("a", "e," "i", "o", "u", "y")

//    for(var i = 0; i < data.length; i++){
//    console.log();   
// 	}
// }

// var data = "jessica weinstein is doing her code challenges homework"
// listVowels(data)

// var result = string.split(" ")




// **4. Write a function that lists all the numbers from 100 to 10; write it recursively

// function listNumbers() {
// 	for(var i = 100; i >= 10; i--) {
// 		console.log(i)
// 	}

// }
// listNumbers()


// **5. write a small program that checks the sum of two numbers.
// If the result is even:
// 	if also the result is divisible by 5 console.log('divisible by 5 and even')
// 	if also rhe result is divisible by 6 console.log('divisible by 6 and even')
// 	if also the result is divisible by both 5 and 6 console.log('divisible by 6 and 5 and it is even')
// If the result is odd:
// 	if it is divisible by 7 console.log('divisible by 7 and odd')
// 	if it is divisible by 9 console.log('divisible by 9 and odd')
// 	if it is divisible by both 7 and 9 console.log('divisible by noth 7 and 9')

// 6. Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9, 10, 12, 13, 14], your function should return [4, 6, 10, 12, 14].

// function makeNewArray(array){
// 	var newArray = []
// 		for(var i = 0; i < array.length; i++) {
// 			if(array [i] % 2 === 0){
// 			newArray.push(array [i]);
// 		}
// 	} 
// 		console.log(newArray)	
// }
// makeNewArray([1, 3, 4, 6, 9, 10, 12, 13, 14])

// 7. Write a function that gives you a random number between 1 to 100 in each second(setInterval).
// If the number is even console.log('this is even'); if the number is odd console.log('this is odd')


		// function countSeconds(){
		// 	setInterval(displayNumber,1000);
		// }
			

		// function displayNumber(){
		// var randomNumber = Math.floor(Math.random() * 101);

		// 	if(randomNumber % 2 === 0){
		// 	console.log(randomNumber + " this number is even");
		// 	}
		// 	else{
		// 	console.log(randomNumber + " this number is odd");
		// 		}
		//   }

		// countSeconds()





// 8. Write a function that takes a string and checks if the letter 'b' is there. Try to use indexOf() method.

// 		function findLetter(myString){
// 			var splitString = myString.split("")
// 				console.log(splitString)
// 			var b = splitString.indexOf("b");
// 				console.log("There is a letter b at index number " + b )	
// 		}

// findLetter("I bought apples")

// 9. write a function that checks if a given string is a palindrome.
		// SAME QUESTIONS AS DAY 2 #5 ABOVE - reference there for answer

// **10. write FizzBuzz recursivley; if you don't know what recursive is please google it
//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.-- you call the function within the function brackets,instead of outside the brackets.

//** I got it to call the function repeatedly, but how do I get it to stop?

	// 	function writeString(){
	// 		console.log("fizzbuzz")
	// 		writeString();
			
	// 	}

	// writeString();

// 11. Write a function that takes the string "Boston is the capital of the US" as an argument and substitutes "Boston" 
// with "Washington". Try to use splice()

// 		function replaceBoston(){
// 			var originalString = ("Boston is the capital of the US");
// 			var Boston = originalString.replace ("Boston", "Washington");
// 			console.log(Boston)
// 		}
// replaceBoston()

// 12. Create a function that takes in a string and returns a substring 4 characters long. Example:
// // subFunc("bullwinkle") -> "bull"
		
// 		function shortenString(string){
// 			var shorten = string.slice (0,4);
// 			console.log (shorten)
// 		}

// shortenString("necklace")

// 13. Create a function that takes in a string of multiple words and returns the first word with "ish" added to the end. Example:
// // ishFunc("Soup is my favorite.") -> "Soupish"

// 		function ishFirst (myString){
// 			let sentence = myString.split(" ");
// 			console.log(sentence[0] + "ish");
// 		}
// ishFirst("Icecream is my favorite food")

// ** 14. Create an array and show how to log each element to the console recursively.

// function logElements (myArray){
// 	if (myArray.length > 0){
// 		console.log(myArray);
// 		myArray.length--;
// 		logElements(myArray)
// 	}
// }

// logElements([12, 5, 10, 1, 99, 20]);

// 15. Create an array. Using the .forEach() method on the array, print each element to the console. If you are unsure on how to use .forEach(), Google it.

// let myArray = ["sunny", 10, "summer", 23, "beach", 15, 7];

// myArray.forEach(element => console.log (element));

// 16. Create an array. Create a function that takes an array as an argument and logs only the first element and last element to the console. Example:
// lastFirst(["dogs", "cats", "hamburger", "dinosaur"]) // dogs // dinosaur

	// let icecreamArry = ["icecream", 100, "sundeas", 90, "hotfudge", 10, "sprinkles"];

	// function firstLastElement(myArray){
	// 	console.log(myArray[0] + " " + myArray[myArray.length - 1]);
	// }

	// firstLastElement(icecreamArry);


// **17. // 1. Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true //checkNums( [30, 99, 8, 22, 7] ) -> false

// function checkNumbers(array){
// 	array.forEach(element => check5or6 (element));
// 	}

// function check5or6(element){
// 	if (element = 1){
// 		console.log ("true");
// 	}
// }

// var numbers5or6 = ([30, 3, 90, 9, 60, 6, 50, 5, 0]);
// checkNumbers(numbers5or6);

// **18. Create a function that takes an array. If an array element is equal to 5, set it to 0. Example:
// noFive( [2, 17, 5, 18, 6, 5] ) -> [2, 17, 0, 18, 6, 0


// 19. write a function that takes two arguments, adds them and checks if the output is bigger than 100;


// function addNumbers(n1,n2){
// 	var result = n1+n2;
// 	console.log(result);
// 	if(result > 100){
// 		console.log(" result is larger than 100")
// 	}
// }

// addNumbers(11,112);


// 20. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the number plus  add the line 'it is an even';
// if it is odd add the line 'it is odd'

// function listNumbers(){
// 	for(var i = 0; i <= 100; i++) {
// 		if(i % 2 == 0){
// 			console.log(i + " this number is even")
// 		}
// 		else if(i % 2 == 1){
// 			console.log(i + " this number is odd")
// 		}
// 	}
	
// }

// listNumbers();

// 21. Write a function that takes one argument as a string and it 
// checks if this argumement is a Palindrome (kayak);
		// SAME QUESTIONS AS DAY 2 #5 ABOVE & #9 - reference there for answer


// 22. Create a function that takes in a string and returns a substring 4 characters long. Example:
// subFunc("bullwinkle") -> "bull"
		// SAME QUESTION AS #12 ABOVE

// 23. Create a function that takes in a string of multiple words and returns the first word with "ish" added to the end. Example:
// ishFunc("Soup is my favorite.") -> "Soupish"
		//SAME QUESTION AS #13 ABOVE

// 24. Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true 
// checkNums( [30, 99, 8, 22, 7] ) -> false
		//SAME QUESTION AS #17

// 25. Create a function that takes a number. Return true if the given  number is a multiple of 3 or 5, but not both. Example:
// eitherNum( 6 ) -> true 
// eitherNum( 10 ) -> true 
// eitherNum( 15 ) -> false


// 26. write a function that takes two arguments, adds them and checks if the sum is more than 100. Example:
// more_than( 50, 22 ) -> false // more_than( 10, 99 ) -> true // more_than( 15, 12 ) -> false




// 27. write a function that takes an array as an argument and 
// returns the highest number of this array




// 28. write a function that takes an array as an argument and
//  gives you the sum of this array ([1,2,3] -> 6)  
// with reduce(); also you can use sort()



// 29.  Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function
 // should return [4, 6].




 // 30. Write a program that prints the numbers from 1 to 100.
 //  For multiples of three print “Rick” instead of the number and 
 //  for the multiples of five print “Roll”. For numbers which are
 //   multiples of both three and five print "RickRoll".




// 31. write a function that takes an array of names and returns a whole string of these names with comma and the word 'and' before the last name;
// ["John", "George", "James", "Anna"] ---> "John, George, James, and Anna";




// 32. Write a function that takes an array of arrays as an argument and
 // returns an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.
  // For example:
 //  [["Dostoyevski", "Idiot"], ["Twain", "The price and the pauper"], ["Poe", "The raven"], ["Remark", "All quiet on the western front"], ["Kafka", "The trial"]];
 //  Would become: 
// {Dostoyevski: "Idiot", "Twain": "The prince and the pauper", "Poe": "The raven", "Remark": "All quiet on the western front", Kafka: "The trial" }
     
// var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];


// 33.  write a function named stringy that takes a size and returns a 
// string of alternating '1s' and '0s'. the string should start with a 1.
//  a string with size 6 should return 
//  :'101010'. with size 4 should return : '1010'. with size 12 should 
//  return : '101010101010'. The size will always be positive and will only use. whole numbers.

// var alteringString = [];

// function stringy(mySize){
// 	for (let i = 0; i < mySize; i++) {
// 		if (i % 2 === 0) {
// 			alteringString.push("1")
// 		}	
// 		else{
// 			alteringString.push("0")
// 		}
// 	}
// 	console.log(alteringString.join(""));
// }

// stringy(5);

// 34. Given a non-negative integer, return an array containing a list
//  of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

// function returnArray(myString){
// 	console.log(myString.toString().split("").reverse());
// }

// returnArray(987654321)

// 35. given a string, create a function that returns the last character in that string.
// examples:
// "morning" --> g
// "winter" --> r

// 36. write a function that takes in a math operator as a string followed by two parameters, x and y, then
 // return the result of that math operation applied to the two parameters.
 // examples:
 // math("*", 2, 3) ---> 6
 // math("+", 4, 5) ---> 9
 // math("/", 5, 5) ---> 1
 // math("*", 4, 5) ---> 20

 // 37. Create a function that takes an array. If an array element is equal to 5, set it to 0. Example:
// noFive( [2, 17, 5, 18, 6, 5] ) -> [2, 17, 0, 18, 6, 0]

// 38. Create a function that takes two arrays, each having elements that are numbers. Compare the sum of the numbers in each array. Return the array with the largest sum. Example:
// bigArray( [1, 5, 9], [2, 12, 3] )-> [2, 12, 3]

// 39. Create a function that takes 3 numbers as arguments. Return true if any two of the numbers added together equal the third. Example:
// twoEqualOne(1, 2, 3) -> true 
// twoEqualOne(10, 7, 3) -> true 
// twoEqualOne(9, 5, 3) -> false

	// function twoEqualOne(n1,n2,n3){
	// 	if (n1 + n2 === n3){
	// 		console.log("true");
	// 	}
	// 	else{
	// 		console.log("false");
	// 	}
	// }

	// twoEqualOne(20,10,30);



// 40. Create a function that takes 2 numbers as arguments. Return true if there is a digit that appears in both numbers. Example:
// sameDigit(5, 65) -> true 
// sameDigit(23, 82) -> true 
// sameDigit(85, 49) -> false

		// function sameDigit(n1,n2){
		// 	n1 = n1.toString();
		// 	n2 = n2.toString();

		// 	let trueOrFalse = "false";

		// 	for (let i = 0; i < 9; i++){
		// 		if (n1.indexOf(i) !== -1 && n1.indexOf(i) !== -1){
		// 			trueOrFalse = "true";
		// 		}
		// 	}	

		// 	console.log(trueOrFalse);
		// }
		// 	sameDigit(102,52);	

// **41. Write a function that takes an array of numbers and creates a new array with only the even numbers from the first array. Example:
// only_even([1,2,3,4,5,6]) -> [2, 4, 6] // only_even([22,38,41,5,3610]) -> [22, 38, 3610] // only_even([21,15,6,87,97]) -> [6]

