

// valider_donnees.js

document.getElementById("contactForm").addEventListener('submit', function(event) {
  var isValid = true;

  // Vérification du nom et prénom
  var nom = document.getElementById("name").value.trim();
  var nomPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+ [A-Za-zÀ-ÖØ-öø-ÿ]+$/;
  if (!nom.match(nomPattern) || nom === "") {
      isValid = false;
  }

  // Vérification du numéro de téléphone
  var numero = document.getElementById("numeroTele").value.trim();
  var numeroPattern = /^(06|07)[0-9]{8}$/;
  if (!numero.match(numeroPattern) || numero === "") {
      isValid = false;
  }

  // Vérification de l'email
  var email = document.getElementById("email").value.trim();
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!email.match(emailPattern) || email === "") {
      isValid = false;
  }

  // Vérification du message
  var message = document.getElementById("message").value.trim();
  if (message.length < 10 || message === "") {
      isValid = false;
  }

  // Si une des validations échoue, redirection vers page404.html
  if (!isValid) {
      event.preventDefault(); 
      window.location.href = 'page404.html'; 
  }
});
