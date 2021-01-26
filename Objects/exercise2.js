//2.  Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
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

