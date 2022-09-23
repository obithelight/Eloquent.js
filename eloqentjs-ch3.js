/*
1.	Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

//SOLUTION
const minNum = (num1, num2) => (num1 < num2) ? num1 : num2
console.log(minNum(2, 5))

//ALTERNATIVE 1
function min(num1, num2){
	return num1 < num2 ? num1 : num2
}
console.log(min(0, 10));  // → 0
console.log(min(0,-10));  //→ -10

//ALTERNATIVE 2
function minimum(num1, num2){
	if(num1 < num2){
		return num1
	}else{
		return num2
	}
}
console.log(minimum(100, 10));  // → 10
console.log(min(20, 190));  //→ 20

/*
2.	Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//SOLUTION
function isEven(num){
	if(num >= 0){
		if(num === 0){
			return true
		}else if(num === 1){
			return false
		}else{
			return isEven(num-2)
		}	
	}
	else{
		return `${num} is a negative integer`
	}
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-5)); // → ??

/*
3.	Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

//SOLUTION
function countBs(str){
	let count = 0;
	for(let i = 0; i <= str.length - 1; i++){
		if(str[i] === "B"){
			count += 1
		}
	}
	
	return count 
}

console.log(countBs("BBC")); // → 2 

/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

//SOLUTION
function countChar(str, checkChar){
	let count = 0;
	for(let i = 0; i <= str.length - 1; i++){
		(str[i] === checkChar) && (count += 1)
	}
	return count
}

console.log(countChar("kakkerlak", "k")); // → 4