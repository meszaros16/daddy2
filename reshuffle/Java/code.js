function feliratokozás(){
    let email = document.getElementById('email');
    if(email.value != ""){
        alert("Sikeresen feliratkozott! Köszönjük szépen!");
    }
    else{
        alert("Kérem töltse ki az E-mail mezőt!!!");
    }
}