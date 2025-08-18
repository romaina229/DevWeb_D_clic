    // question 1 utilisation des boucles for pour afficher les nombres de 1 à 10
function boucleFor() {
      let resultat = "";
      for (let i = 1; i <= 10; i++) {
        resultat += i + " ";
      }
      document.getElementById("resultat").textContent = "Nombres de 1 à 10 :\n" + resultat;
    }

    // question 2 utilisation des boucles do...while pour calculer la somme des entiers de 1 à 100
    function boucleWhile() {
      let somme = 0;
      let i = 1;
      while (i <= 100) {
        somme += i;
        i++;
      }
      document.getElementById("resultat").textContent = "Somme des entiers de 1 à 100 = " + somme;
    }

    // question 3 boucleDoWhile pour demander un nombre secret aux utilisateurs
    function boucleDoWhile() {
      let secret = Math.floor(Math.random() * 100) + 1; // nombre aléatoire entre 1 et 100
      let guess;
      do {
        guess = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"));
        if (guess > secret) {
          alert("Trop grand !");
        } else if (guess < secret) {
          alert("Trop petit !");
        }
      } while (guess !== secret);
      document.getElementById("resultat").textContent = "Bravo ! Le nombre secret était : " + secret;
    }


    // question 4 génère et affiche les premiers N
    function fibonacci() {
      let n = parseInt(prompt("Combien de termes de la suite de Fibonacci voulez-vous afficher ?"));
      if (isNaN(n) || n <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à 0. SVP");
        return;
      }

      let fibo = [0, 1];
      for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
      }
      document.getElementById("resultat").textContent = 
        "Les " + n + " premiers termes de Fibonacci :\n" + fibo.slice(0, n).join(", ");
    }