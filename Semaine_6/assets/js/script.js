document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var confirmation = document.getElementById('confirmation');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Validation simple
            var nom = form.nom.value.trim();
            var email = form.email.value.trim();
            var sujet = form.sujet.value.trim();
            var message = form.message.value.trim();
            if(nom.length < 2) {
                alert('Veuillez entrer un nom valide.');
                return;
            }
            if(!email.match(/^\S+@\S+\.\S+$/)) {
                alert('Veuillez entrer un email valide.');
                return;
            }
            if(message.length < 5) {
                alert('Votre message est trop court.');
                return;
            }
            form.style.display = 'none';
            confirmation.style.display = 'block';
        });
    }
});

const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

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

