const emailList = ["steuerwaldanthony@gmail.com", "doggo@dog.com"];
const passwordList = ["1234", "4321"];

function myFunction() {
  var email = document.getElementById("emailData").value;
  var password = document.getElementById("passwordData").value
  if (emailList.includes(email) && passwordList.includes(password)) {
    alert(email + " " + password)
  } else {
    alert("Invalid, Sorry!")
  }
}
document.getElementById("loginButton").addEventListener("click", myFunction);