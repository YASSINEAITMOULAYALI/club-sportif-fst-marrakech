// view.js — Gestion de l'affichage HTML et du formulaire
import { enregistrerInscription } from "./dataService.js";
import { ajouterInscription, setMessage } from "./state.js";

export function afficherMessage(message, type = "success") {
  const zoneMessage = document.getElementById("formMessage");
  if (!zoneMessage) return;

  zoneMessage.textContent = message;
  zoneMessage.className = `alert alert-${type} mt-3`;
  zoneMessage.setAttribute("role", "status");
}

export function initialiserFormulaire() {
  const formulaire = document.getElementById("registrationForm");
  if (!formulaire) return;

  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();

    const inscription = {
      nom: document.getElementById("nom").value.trim(),
      email: document.getElementById("email").value.trim(),
      filiere: document.getElementById("filiere").value.trim(),
      sport: document.getElementById("sport").value,
      motivation: document.getElementById("motivation").value.trim()
    };

    if (!inscription.nom || !inscription.email || !inscription.filiere || !inscription.sport) {
      afficherMessage("Veuillez remplir tous les champs obligatoires.", "danger");
      return;
    }

    const sauvegardeReussie = enregistrerInscription(inscription);
    if (!sauvegardeReussie) {
      afficherMessage("L'inscription n'a pas pu être enregistrée dans ce navigateur.", "danger");
      return;
    }

    ajouterInscription(inscription);
    const message = `Merci ${inscription.nom} ! Votre demande a été enregistrée dans ce navigateur. Elle n'a pas été envoyée au club.`;
    setMessage(message);
    afficherMessage(message, "success");
    formulaire.reset();
  });
}

export function afficherAnnee() {
  const annee = document.getElementById("currentYear");
  if (annee) annee.textContent = new Date().getFullYear();
}
