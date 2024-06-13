function sendData() {
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let eMail = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let tMessage = document.getElementById("message").value;

    if (eMail.includes("@")) {
        if (eMail.length > 3 && eMail.length < 20) {
            if (fName && lName) {
                alert("Email valid. Name: " + fName + " " + lName + ". Gender: " + gender + ". Message: " + tMessage);
                clear();
            } else {
                alert("Complete data required");
            }
        } else {
            alert("Name longer than 3 letters, and less than 20 letters");
        }
    } else {
        alert("Email no valid");
    }
}

function clear() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "Select";
    document.getElementById("message").value = "";
}