class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
    }
}

function displayNameInNav() {
    var username = $("#usernameInput").val()
    var password = $("#passwordInput").val()

    if (username != "" && password != "") {
        if ($("#usernameDisplay").length == 0) {
            $("#navbarNavAltMarkup").after("<span class='navbar-text me-5' id='usernameDisplay'>" + username + "</span>")
        }
    }
 }

function errorMessageDiv() {

    var error = false

    if ($("#ErrorMessage").length == 0) {
        $("#registerForm").after("<div id='ErrorMessage'></div>")
        $("#ErrorMessage").hide()
    } else {
        $("#ErrorMessage").html("")
    }

    var firstName = $("#firstNameInput").val()
    var lastName = $("#lastNameInput").val()
    var email = $("#emailInput").val()
    var password = $("#passwordInput").val()
    var confirmPassword = $("#confirmPasswordInput").val()

    if (firstName.length < 2 || lastName.length < 2) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The First and Last Name needs to be 2 characters or more.</p>")
        error = true
    }

    if (email.length < 8 || email.indexOf("@") == -1) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The email address must be at least 8 characters long and include the @ symbol.</p>")
        error = true
    }

    if (password.length < 6 || password !== confirmPassword) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The password must match the confirm password field and be at least 6 characters long.</p>")
        error = true
    }

    if (!error) {
        var user = new User(firstName, lastName, email, email, password)
        console.log(user)

        $("#registerForm")[0].reset()
    }
}

(function () {
    addEventListener('submit', submitForm => {
        event.preventDefault()
    })

    function displayUserInConsole() {

    }

    function Start() {
        console.log("App Started!")
    }

    window.addEventListener("load", Start)
})()