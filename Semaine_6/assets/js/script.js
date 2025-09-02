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
