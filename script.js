function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByName("fname")[0].value;
	let lastName = document.getElementsByName("lname")[0].value;

	alert(firstName+" "+lastName);
}

let form = document.getElementById("form1");

form.addEventListener("submit" , () => {
	getFormvalue();
})
