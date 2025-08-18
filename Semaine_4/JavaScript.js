javascript est un langage de programmation.
choix = parseInt(choix);
if (choix === 1) {
        // Exercice 1 : âge
        let age = parseInt(prompt("Entrez votre âge :"));
        if (age < 18) {
            alert("Vous êtes mineur.");
        } else {
            alert("Vous êtes majeur.");
  }

} else if (choix === 2) {
        // Exercice 2 : pair ou impair
        let nombre = parseInt(prompt("Entrez un nombre :"));
        if (nombre % 2 === 0) {
            alert("Le nombre est pair.");
        } else {
            alert("Le nombre est impair.");
  }

} else if (choix === 3) {
        // Exercice 3 : mois
        let mois = parseInt(prompt("Entrez le numéro du mois (1-12) :"));
        let moisNoms = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  if (mois >= 1 && mois <= 12) {
            alert("Le mois est : " + moisNoms[mois - 1]);
        } else {
            alert("Numéro de mois invalide (1-12 uniquement).");
  }

} else {
    alert("Choix invalide !");
}
