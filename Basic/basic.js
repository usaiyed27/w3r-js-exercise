//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

// function todayDate(){
// 	let date = new Date();
// 	let weekday = ['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday','Saturday'];
// 	let day = weekday[date.getDay()];
// 	let hours = date.getHours();
// 	let minutes = date.getMinutes();
// 	let seconds = date.getSeconds();
// 	let prepand = (hours <= 12) ? 'AM':'PM'

// 	console.log('Today is:' + day);
// 	console.log('Current time is:' + hours + ' ' + prepand + ':' + minutes + ':' + seconds);
// }

// todayDate();

//8.Write a JavaScript program where the program takes a random integer between 1 to 10, 
//the user is then prompted to input a guess number. 
//If the user input matches with guess number, 
//the program will display a message "Good Work"
// otherwise display a message "Not matched". 

// function guessTheNumber(min,max){
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// 	console.log(randomNumber);

// 	let userInput = +prompt('Enter your number');

// 	if(randomNumber === userInput){
// 		return 'Good work';
// 	}else{
// 		return 'Not matched';
// 	}
// }


//9. Write a JavaScript program to calculate days 
//left until next Christmas. 

function calculateDays(){
	today = new Date();
	var cmas = new Date(today.getFullYear(), 11, 25);
	if(today.getMonth()==11 && today.getDate > 25){
		cmas.setFullYear(cmas.getFullYear() + 1);
	}
	var one_day = 1000*60*60*24;
	console.log(Math.ceil((cmas.getTime() - today.getTime())/(one_day)));
}

calculateDays();