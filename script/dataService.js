// dataService.js — Lecture et écriture des inscriptions dans le navigateur
const CLE_INSCRIPTIONS = "clubSportifFST_inscriptions";

export function obtenirInscriptions() {
  try {
    const donnees = localStorage.getItem(CLE_INSCRIPTIONS);
    return donnees ? JSON.parse(donnees) : [];
  } catch (erreur) {
    console.error("Impossible de lire les inscriptions :", erreur);
    return [];
  }
}

export function enregistrerInscription(inscription) {
  const inscriptions = obtenirInscriptions();
  inscriptions.push({ ...inscription, dateCreation: new Date().toISOString() });

  try {
    localStorage.setItem(CLE_INSCRIPTIONS, JSON.stringify(inscriptions));
    return true;
  } catch (erreur) {
    console.error("Impossible d'enregistrer l'inscription :", erreur);
    return false;
  }
}
export async function chargerFichierJSON(chemin) {
  const reponse = await fetch(chemin);

  if (!reponse.ok) {
    throw new Error(`Impossible de charger : ${chemin}`);
  }

  return await reponse.json();
}