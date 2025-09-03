// script.js
// Sélection du formulaire
  document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupération des champs
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let sujet = document.getElementById("sujet").value;
  let message = document.getElementById("message").value;

  // Adresse mail de réception 
  let email = "nounonvenanromain@gmail.com";

  // Construction du corps du mail
  let body = 
    "Nom : " + nom + "%0D%0A" +
    "Prénom : " + prenom + "%0D%0A" +
    "Sujet : " + sujet + "%0D%0A" +
    "Message : " + message;

  // Envoi via mailto
  window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(sujet) + "&body=" + body;

  // Afficher le message de confirmation
  document.getElementById("confirmation").style.display = "block";

  // Réinitialiser le formulaire
  document.getElementById("contact-form").reset();
});

