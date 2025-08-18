  // 1. Nombres premiers entre 1 à 100
    function nombresPremiers() {
      let premiers = [];
      for (let n = 2; n <= 100; n++) {
        let estPremier = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            estPremier = false;
            break;
          }
        }
        if (estPremier) premiers.push(n);
      }
      document.getElementById("resultat").textContent = 
        "Nombres premiers entre 1 et 100 :\n" + premiers.join(", ");
    }

    // 2. Facteurs d’un nombre saisi
    function facteurs() {
      let nombre = parseInt(prompt("Entrez un nombre :"));
      if (isNaN(nombre) || nombre <= 0) {
        alert("Veuillez entrer un entier positif.");
        return;
      }
      let result = [];
      for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
          result.push(i);
        }
      }
      document.getElementById("resultat").textContent = 
        "Facteurs de " + nombre + " :\n" + result.join(", ");
    }

    // 3. Moyenne des nombres positifs
    function moyenne() {
      let somme = 0, count = 0;
      let nombre;
      do {
        nombre = parseFloat(prompt("Entrez un nombre positif (négatif pour arrêter) :"));
        if (!isNaN(nombre) && nombre >= 0) {
          somme += nombre;
          count++;
        }
      } while (nombre >= 0);

      if (count > 0) {
        let moy = (somme / count).toFixed(2);
        document.getElementById("resultat").textContent = 
          "Moyenne des " + count + " nombres positifs saisis : " + moy;
      } else {
        document.getElementById("resultat").textContent = 
          "Aucun nombre positif saisi.";
      }
    }

    // 4. Motif triangulaire en étoiles
    function motifTriangulaire() {
      let hauteur = parseInt(prompt("Entrez la hauteur du triangle :"));
      if (isNaN(hauteur) || hauteur <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à 0.");
        return;
      }
      let motif = "";
      for (let i = 1; i <= hauteur; i++) {
        motif += "*".repeat(i) + "\n";
      }
      document.getElementById("resultat").textContent = motif;
    }