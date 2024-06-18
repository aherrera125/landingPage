var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var eMail = document.getElementById("email");
var gender = document.getElementById("gender");
var tMessage = document.getElementById("message");

const send = document.getElementById("send");

send.addEventListener("click", () => {    
    if (emailValidation(eMail)) {
        if (fullNameValidation(fName, lName)) {
            alert("Email valid. Name: " + fName.value + " " + lName.value + ". Gender: " + gender.value + ". Message: " + tMessage.value);
            clear();
        } else {
            alert("Full name longer than 3 letters, and less than 20 letters");
        }
    } else {
        alert("Email no valid");
    }
});

function emailValidation(email) {
    return email.value.includes("@");
}

function fullNameValidation(fName, lName) {
    if (fName.value.length > 3 && fName.value.length < 20 && lName.value.length > 3 && lName.value.length < 20)
        return true
    else
        return false
}

function clear() {
    fName.value = "";
    lName.value = "";
    eMail.value = "";
    gender.value = "Select";
    tMessage.value = "";
}