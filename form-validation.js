function validate(){

  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length <= 5) {

    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

    document.getElementById("usernameGroup").classList.add("has-error");
  }else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if(passEntered == 'password')
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
