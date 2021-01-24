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

// 5.  Write a JavaScript function that accepts a string as a parameter 
//and converts the first letter of each word of the string in upper case. Go to the editor
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '

function strCapitalize(str){
    let arr = [], newarray = [];
    arr = str.split(' ');

	arr.map(function(word){
			word = word.slice(0,1).toUpperCase() + word.slice(1);	
			newarray.push(word);	
	});
	return newarray.join(' ');
}

strCapitalize('the quick brown fox');

// w3resource method
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));