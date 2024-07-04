// login
let name = prompt("siapakah nama anda", "")
document.getElementById("name").innerHTML = name

//banner
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
    

// messege us
    function validateForm() {
        const name = document.forms["messege-form"]["full-nama"].value;
        const birthDate = document.forms["messege-form"]["birth-date"].value;
        const gender = document.forms["messege-form"]["gender"].value;
        const messeges = document.forms["messege-form"]["messages"].value;
    
        setSenderUI(name, birthDate, gender, messeges);
    
        return false;
    }
    
    function setSenderUI(name, birthDate, gender, messages) {
        document.getElementById("sender-full-nama").innerHTML = name;
        document.getElementById("sender-birth-date").innerHTML = birthDate;
        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-messages").innerHTML = messages;
    }


