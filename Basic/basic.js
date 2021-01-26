//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

function todayDate(){
	let date = new Date();
	let weekday = ['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday','Saturday'];
	let day = weekday[date.getDay()];
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let prepand = (hours <= 12) ? 'AM':'PM'

	console.log('Today is:' + day);
	console.log('Current time is:' + hours + ' ' + prepand + ':' + minutes + ':' + seconds);
}

todayDate();