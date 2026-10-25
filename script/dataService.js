<<<<<<< HEAD

const CLE_INSCRIPTIONS = "clubSportifFST_inscriptions";

// Lire les inscriptions sauvegardées dans le navigateur
export function obtenirInscriptions() {
  try {
    const donnees = localStorage.getItem(CLE_INSCRIPTIONS);

=======
const CLE_INSCRIPTIONS = "clubSportifFST_inscriptions";

export function obtenirInscriptions() {
  try {
    const donnees = localStorage.getItem(CLE_INSCRIPTIONS);
>>>>>>> bd4cf4ed965ef74941ecf430e5d4e1fbc11dccda
    return donnees ? JSON.parse(donnees) : [];
  } catch (erreur) {
    console.error("Impossible de lire les inscriptions :", erreur);
    return [];
  }
}

<<<<<<< HEAD
// Enregistrer une nouvelle inscription
export function enregistrerInscription(inscription) {
  const inscriptions = obtenirInscriptions();

  inscriptions.push({
    ...inscription,
    dateCreation: new Date().toISOString()
  });

  try {
    localStorage.setItem(
      CLE_INSCRIPTIONS,
      JSON.stringify(inscriptions)
    );

=======
export function enregistrerInscription(inscription) {
  const inscriptions = obtenirInscriptions();
  inscriptions.push({ ...inscription, dateCreation: new Date().toISOString() });

  try {
    localStorage.setItem(CLE_INSCRIPTIONS, JSON.stringify(inscriptions));
>>>>>>> bd4cf4ed965ef74941ecf430e5d4e1fbc11dccda
    return true;
  } catch (erreur) {
    console.error("Impossible d'enregistrer l'inscription :", erreur);
    return false;
  }
}
<<<<<<< HEAD

// Charger un fichier JSON
=======
>>>>>>> bd4cf4ed965ef74941ecf430e5d4e1fbc11dccda
export async function chargerFichierJSON(chemin) {
  const reponse = await fetch(chemin);

  if (!reponse.ok) {
<<<<<<< HEAD
    throw new Error(
      `Impossible de charger le fichier : ${chemin}`
    );
  }

  return await reponse.json();
}
=======
    throw new Error(`Impossible de charger : ${chemin}`);
  }

  return await reponse.json();
}
>>>>>>> bd4cf4ed965ef74941ecf430e5d4e1fbc11dccda
