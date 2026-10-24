// app.js — Point d'entrée : initialise les données et l'interface
import { obtenirInscriptions } from "./dataService.js";
import { setInscriptions } from "./state.js";
import { initialiserFormulaire, afficherAnnee } from "./view.js";

function demarrerApplication() {
  // Charger les inscriptions déjà sauvegardées dans le navigateur.
  setInscriptions(obtenirInscriptions());

  // Préparer les éléments de l'interface.
  afficherAnnee();
  initialiserFormulaire();
}

demarrerApplication();
import { chargerFichierJSON } from "./dataService.js";

async function chargerDonneesExemple() {
  try {
    const customers = await chargerFichierJSON(
      "./data/customers.json"
    );

    const products = await chargerFichierJSON(
      "./data/products.json"
    );

    const orders = await chargerFichierJSON(
      "./data/orders.json"
    );

    console.log("Adhérents :", customers);
    console.log("Produits :", products);
    console.log("Commandes :", orders);
  } catch (erreur) {
    console.error("Erreur de chargement :", erreur);
  }
}

chargerDonneesExemple();