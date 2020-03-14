export const environment = {
   production: false
};

const url = 'http://localhost:8000/api/';

export var USER;

/**
 * Fonction permetant de retrouver les attributs de l'utilisateur 
 * connecté
 */
export function getLoggedUser() {
   let storage = localStorage.getItem('logiciel-statistiques-profil-utilisateur');
   if (storage)
      USER = JSON.parse(atob(storage));
   else
      USER = null;
}

export function getUsername() {
   getLoggedUser();
   if (USER != null)
      return USER.name;
   else
      return "";
}

export const API = {
   
   //Authentifier un utilisateur qui essaie de se connecter
   AUTH_USER: `${url}auth/user`,

   //Toutes les URLs en rapport avec les Utilisateurs
   CREATE_USER: `${url}users`,
   READ_All_USER: `${url}users`,
   READ_ONE_USER_BY_ID: `${url}users/`,
   READ_ONE_USER_BY_EMAIL: `${url}user/`,
   UPDATE_USER: `${url}users/`,
   DELETE_USER: `${url}users/`,

   //Toutes les URLs en rapport avec les Routeurs
   CREATE_ROUTEUR: `${url}routeurs`,
   READ_All_ROUTEUR: `${url}routeurs`,
   READ_ONE_ROUTEUR: `${url}routeurs/`,
   UPDATE_ROUTEUR: `${url}routeurs/`,
   DELETE_ROUTEUR: `${url}routeurs/`,
   READ_All_ROUTEUR_FOR_STATISTICS: `${url}routeurs/forStatistics`,

   //Toutes les URLs en rapport avec les Bases
   CREATE_BASE: `${url}bases`,
   READ_All_BASE: `${url}bases`,
   READ_All_BASE_BY_ROUTEUR_ID: `${url}bases/parRouteur`,
   READ_ONE_BASE: `${url}bases/`,
   UPDATE_BASE: `${url}bases/`,
   DELETE_BASE: `${url}bases/`,
   READ_All_BASE_FOR_STATISTICS: `${url}bases/forStatistics`,

   //Toutes les URLs en rapport avec les Annonceurs
   CREATE_ANNONCEUR: `${url}annonceurs`,
   READ_All_ANNONCEUR: `${url}annonceurs`,
   READ_ONE_ANNONCEUR: `${url}annonceurs/`,
   UPDATE_ANNONCEUR: `${url}annonceurs/`,
   DELETE_ANNONCEUR: `${url}annonceurs/`,
   READ_All_ANNONCEUR_FOR_STATISTICS: `${url}annonceurs/forStatistics`,

   //Toutes les URLs en rapport avec les Campagnes
   CREATE_CAMPAGNE: `${url}campagnes`,
   READ_All_CAMPAGNE: `${url}campagnes`,
   READ_All_CAMPAGNE_BY_ANNONCEUR_ID: `${url}campagnes/parAnnonceur`,
   READ_ONE_CAMPAGNE: `${url}campagnes/`,
   UPDATE_CAMPAGNE: `${url}campagnes/`,
   DELETE_CAMPAGNE: `${url}campagnes/`,

   //Toutes les URLs en rapport avec les Plannings
   CREATE_PLANNING: `${url}plannings`,
   READ_All_PLANNING: `${url}plannings`,
   READ_ONE_PLANNING: `${url}plannings/`,
   UPDATE_PLANNING: `${url}plannings/`,
   DELETE_PLANNING: `${url}plannings/`,

   //Toutes les URLs en rapport avec les Résultats
   CREATE_RESULTAT: `${url}resultats`,
   READ_All_RESULTAT: `${url}resultats`,
   READ_ONE_RESULTAT: `${url}resultats/`,
   UPDATE_RESULTAT: `${url}resultats`,
   DELETE_RESULTAT: `${url}resultats/`,
}