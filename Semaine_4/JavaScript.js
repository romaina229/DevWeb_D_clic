function verifierAge() {
            let age = parseInt(prompt("Entrez votre âge :"));
            if (isNaN(age)) {
                alert("Veuillez entrer un nombre valide.");
            } else if (age < 18) {
                alert("Vous êtes mineur.");
            } else {
                alert("Vous êtes majeur.");
            }
    }

    function pairOuImpair() {
            let nombre = parseInt(prompt("Entrez un nombre :"));
            if (isNaN(nombre)) {
                alert("Veuillez entrer un nombre valide.");
            } else if (nombre % 2 === 0) {
                alert("Le nombre est pair.");
            } else {
                alert("Le nombre est impair.");
      }
    }

    function afficherMois() {
        let mois = parseInt(prompt("Entrez le numéro du mois (1-12) :"));
        let moisNoms = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];

        if (isNaN(mois)) {
            alert("Veuillez entrer un nombre valide.");
        } else if (mois >= 1 && mois <= 12) {
            alert("Le mois est : " + moisNoms[mois - 1]);
        } else {
            alert("Numéro de mois invalide (1-12 uniquement).");
        }
    }