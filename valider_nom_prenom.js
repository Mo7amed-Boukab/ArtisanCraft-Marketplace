

// valider_nom_prenom.js

document.getElementById("name").addEventListener('input',function(){
    var nom = document.getElementById("name").value ;
    var text = document.getElementById("text1");
    var pattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+ [A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if( nom.match(pattern) ){
        text.innerHTML = "votre nom est valide" ;
        text.style.color = "green" ;
        text.style.fontSize = "12px" ;

    }
    else{
        text.innerHTML = "votre nom n'est pas valide" ;
        text.style.color = "red" ;
        text.style.fontSize = "12px" ;

    }
    if( nom == "" ){
        text.innerHTML = "votre nom n'est pas valide (est vide)" ;
        text.style.color = "orange" ;
        text.style.fontSize = "12px" ;

    }
})


