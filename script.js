function getFormvalue() {
    //Write your code here
	let firstName = document.getElementByName("fname");
	let lastName = documemnt.getElementByName("lname");

	alert(firstName+" "+lastName);
}

let form = document.getElementById("form1");
event.preventDefault();
form.addEventListner("submit" , () => {
	getFormvalue();
})
