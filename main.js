function submit(){
    console.log("Entra al js");
    let fName = document.getElementById("fname");
    let lName = document.getElementById("lname");
    let eMail = document.getElementById("email");
    let tMessage = document.getElementById("message");
    console.log(eMail);

    if(eMail.contains('@')){
        alert("email valid");        
    }else{
        alert("Email no valid");
    }
}