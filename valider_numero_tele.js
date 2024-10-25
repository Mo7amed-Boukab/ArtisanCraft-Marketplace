

// valider_numero_tele.js

document.getElementById("numeroTele").addEventListener('input',function(){
    var numero = document.getElementById("numeroTele").value.trim() ;
    var text = document.getElementById("text2");
    var pattern = /^(06|07)[0-9]{8}$/;

    if( numero.match(pattern) ){
        text.innerHTML = "votre numero de telephone est valide" ;
        text.style.color = "green" ;
        text.style.fontSize = "12px" ;

    }
    else{
        text.innerHTML = "votre numero de telephone n'est pas valide" ;
        text.style.color = "red" ;
        text.style.fontSize = "12px" ;

    }
    if( numero == "" ){
        text.innerHTML = "votre numero de telephone n'est pas valide (est vide)" ;
        text.style.color = "orange" ;
        text.style.fontSize = "12px" ;

    }
})