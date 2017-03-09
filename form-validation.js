function validate(){

  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length <6) {

    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

    document.getElementById("usernameGroup").classList.add("has-error");
  }else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (userEntered = " ") {

    document.getElementById("usernameError").innerHTML="Username cannot contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

    document.getElementById("usernameGroup").classList.add("has-error");
  }else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if(passEntered = 'password')
  {
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if(passEntered.length < 6)
  {
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if(passEntered.length>20)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be more than 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be the same as the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    document.getElementById("passwordGroup").classList.add("has-error");
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
