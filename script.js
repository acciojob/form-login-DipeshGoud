function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByName("fname");
	let lastName = documemnt.getElementsByName("lname");

	alert(firstName+" "+lastName);
}

let form = document.getElementById("form1");

form.addEventListner("submit" , () => {
	getFormvalue();
})
