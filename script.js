function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByName("fname");
	let lastName = document.getElementsByName("lname");

	alert(firstName+" "+lastName);
}

let form = document.getElementById("form1");

form.addEventListener("submit" , () => {
	getFormvalue();
})
