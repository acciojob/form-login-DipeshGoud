function getFormvalue() {
  // Get the input values
  let firstName = document.getElementsByName("fname")[0].value;
  let lastName = document.getElementsByName("lname")[0].value;

  // Display the first and last name using alert
  alert(firstName + " " + lastName);
}

let form = document.getElementById("form1");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  getFormvalue();
});
