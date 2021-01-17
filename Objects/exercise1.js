//1. Write a program to list the properties
//of an Object.

var student = {
	name: "Dave Rayy",
	sclass: "VI",
	rollno: 12
}

// function getProperties(obj){
// 	for(let prop in obj){
// 		console.log(prop);
// 	}
// }

// getProperties(student);

//w3resource method 

// function hasKeys(obj){
// 	if(!isObject) return [];
// 	if(isObject) return Object.keys(obj);
// 	var key = [];
// 	for(let key in obj){
// 		if((_.has(obj,key))){
// 			keys.push(key);
// 			return keys;
// 		}
// 	}
// }

// function isObject(obj){

//   	let type = typeof obj;
//   	return type === 'function' || type === 'object' && !!obj;
// }

// console.log(hasKeys(student));

function deleteProp(obj){
	console.log(obj);
	for(let prop in obj){
		if(prop === 'rollno'){
			//console.log(prop);
			delete obj[prop];
		}
	}
	return obj;
}

console.log(deleteProp(student));