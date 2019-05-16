function toggle() {
    var passwordToggle = document.getElementById("myPassword");
    if (passwordToggle.type === "password") {
        passwordToggle.type = "text";
    } else {
        passwordToggle.type = "password";
    }
}