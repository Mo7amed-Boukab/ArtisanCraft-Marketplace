
// valider_email.js

document.getElementById("email").addEventListener('input',function(){
    var email = document.getElementById("email").value ;
    var text = document.getElementById("text3");
    // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if( email.match(pattern) ){
        text.innerHTML = "votre adresse mail est valide" ;
        text.style.color = "green" ;
        text.style.fontSize = "12px" ;
    }
    else{
        text.innerHTML = "votre adresse mail n'est pas valide" ;
        text.style.color = "red" ;
        text.style.fontSize = "12px" ;
    }
    if( email == "" ){
        text.innerHTML = "votre adresse mail n'est pas valide (est vide)" ;
        text.style.color = "orange" ;
        text.style.fontSize = "12px" ;
    }
})


