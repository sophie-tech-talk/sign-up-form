// Sélection des éléments du formulaire
const passwordInput = document.querySelector(".input-password");
const passwordLabel = document.querySelector(".label-password");
const passwordError = document.querySelector(".password-error");
const form = document.querySelector(".signup-form");

// Expression régulière pour valider le mot de passe
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// Événement lors de la soumission du formulaire
form.addEventListener("submit", function (event) {
  // Récupération de la valeur du mot de passe
  const passwordValue = passwordInput.value;

  // Vérification du format du mot de passe
  if (!passwordRegex.test(passwordValue)) {
    event.preventDefault(); // Empêche l'envoi du formulaire si le mot de passe est invalide

    // Ajoute des styles d'erreur et affiche le message
    passwordInput.classList.add("input-error");
    passwordLabel.classList.add("label-error");
    passwordError.style.display = "block";
  } else {
    // Supprime les styles d'erreur si le mot de passe est correct
    passwordInput.classList.remove("input-error");
    passwordLabel.classList.remove("label-error");
    passwordError.style.display = "none";
    console.log("Formulaire envoyé.");
  }
});
