document.getElementById("message").style.display = "none";
var password = document.getElementById("password");
password.onfocus = function () {
    document.getElementById("message").style.display = "block";
}


function validate() {

    var email = document.getElementById('email');
    var echeck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password = document.getElementById('password');
    var pcheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!echeck.test(email.value)) {
        alert('Check your Email address');

    }
    if (!pcheck.test(password.value)) {
        alert('Enter a Valid Password');

    }
    if (pcheck.test(password.value)) {
        alert("Login successfully");
        window.location = "success.html";
        return false;
    }
    }
