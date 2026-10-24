import { state } from "./state.js";

export function obtenirNombreInscriptions() {
  return state.inscriptions.length;
}

export function obtenirDerniereInscription() {
  return state.inscriptions.length
    ? state.inscriptions[state.inscriptions.length - 1]
    : null;
}
