export const state = {
  inscriptions: [],
  message: ""
};

export function setInscriptions(inscriptions) {
  state.inscriptions = inscriptions;
}

export function ajouterInscription(inscription) {
  state.inscriptions.push(inscription);
}

export function setMessage(message) {
  state.message = message;
}
