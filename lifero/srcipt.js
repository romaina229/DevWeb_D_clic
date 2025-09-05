function toggleSideMenu() {
    document.getElementById('sideMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('form-prestation');
        var confirmation = document.getElementById('confirmation-message');
        if(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                form.style.display = 'none';
                confirmation.style.display = 'block';
            });
        }
    });
