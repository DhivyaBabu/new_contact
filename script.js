function validation(){
    var name=document.getElementById("name").value;
    var subject=document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    var error_phno=document.getElementById("error_phno");
    var error_email=document.getElementById("error_email");
    var error_subj = document.getElementById("error_subj");
    var error_name = document.getElementById("error_name");

    error_name.innerHTML = "";
    error_subj.innerHTML = "";
    error_phno.innerHTML = "";
    error_email.innerHTML = "";
    error_message.innerHTML = "";


    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      error_name.innerHTML =
        " * please enter a valid name (only letters and spaces allowed)";
      return false;
    }
    if(name.length<3){
        text=" * please enter valid name ";
        error_name.innerHTML=text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
      text = " * please enter valid phone number";
      error_phno.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = " * please enter valid Email Id";
      error_email.innerHTML = text;
      return false;
    }
    if (subject.length < 10) {
      text = " * please enter subject";
      error_subj.innerHTML = text;
      return false;
    }
    if (message.length<=10) {
      text = " * please enter more than 10 characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully")
    return true;

}