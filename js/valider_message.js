
// /valider_message.js

document.getElementById("message").addEventListener('keyup', function() {
  var message = document.getElementById("message").value.trim(); // Supprime les espaces avant/après
  var text = document.getElementById("text4");
  var length = message.length;

  if (length === 0) {
    text.innerHTML = "votre message est invalide (vide ou uniquement des espaces)";
    text.style.color = "red";
    text.style.fontSize = "12px" ;

  } else {
    if (length < 10) {
      text.innerHTML = "votre message est invalide (message < 10)";
      text.style.color = "orange";
      text.style.fontSize = "12px" ;

    } else {
      text.innerHTML = "votre message est valide";
      text.style.color = "green";
      text.style.fontSize = "12px" ;

    }
  }
});
