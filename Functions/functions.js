//1. Write a function that reverse a number.
// Input : 32243
//Output : 43223

// function revNumber(num){
// 	num = num + "";

// 	let newNum = num.split('').reverse().join('');
// 	newNum = Number(newNum);	
// 	return newNum;
// }

// console.log(revNumber(32243));

//2.. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that 
//reads the same backward as forward, e.g., madam or nurses run.

function findPalindrome(str){
	str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	let newStr = str.split(',').reverse().join('');
	console.log(newStr);
	if(newStr === str){
		return (`It's a palindrome - ${newStr}`);
	}else{
		return ('Sorry! Not a palindrome')
	}
}

console.log(findPalindrome('Amore, Roma'));