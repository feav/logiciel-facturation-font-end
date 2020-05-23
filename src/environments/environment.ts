export const environment = {
    production: false
};

    const url = 'http://localhost:8000/api/';
//  const url = 'http://api.gidai.fr/api/';

export function getLoggedUser() {
    let storage = localStorage.getItem('gidai_user_profile');
    if (storage)
        return JSON.parse(atob(storage));
    else
        return null;
}

export const API = {

    URL: url,

    //Authentifier un utilisateur qui essaye de se connecter
    LOG_IN_USER: `${url}login`,

    //Déconnecter un utilisateur précédemment connecté
    LOG_OUT_USER: `${url}logout`,

    //Statistiques pour le dashboard
    STATS_FOR_DASHBOARD: `${url}statisticsForDashboard`,

    //Toutes les URLs en rapport avec la gestion des Utilisateurs
    CREATE_USER: `${url}users`,
    READ_All_USER: `${url}users`,
    READ_ONE_USER_BY_ID: `${url}users/`,
    READ_ONE_USER_BY_EMAIL: `${url}users/`,
    UPDATE_USER: `${url}users/update/`,
    DELETE_USER: `${url}users/delete/`,

    //Toutes les URLs en rapport avec la gestion des Postes/Rôles
    READ_All_ROLE: `${url}roles`,

    //Toutes les URLs en rapport avec les Routeurs
    CREATE_ROUTEUR: `${url}routeurs`,
    READ_All_ROUTEUR: `${url}routeurs`,
    READ_ONE_ROUTEUR: `${url}routeurs/`,
    UPDATE_ROUTEUR: `${url}routeurs/update/`,
    DELETE_ROUTEUR: `${url}routeurs/delete/`,
    READ_All_ROUTEUR_FOR_STATISTICS: `${url}routeurs/forStatistics`,
    APPLY_FILTER_ROUTEUR_FOR_STATISTICS: `${url}routeurs/applyFilterForStatistics`,

    //Toutes les URLs en rapport avec les Bases
    CREATE_BASE: `${url}bases`,
    READ_All_BASE: `${url}bases`,
    READ_All_BASE_BY_ROUTEUR_ID: `${url}bases/parRouteur`,
    READ_ONE_BASE: `${url}bases/`,
    UPDATE_BASE: `${url}bases/update/`,
    DELETE_BASE: `${url}bases/delete/`,
    READ_All_BASE_FOR_STATISTICS: `${url}bases/forStatistics`,
    APPLY_FILTER_BASE_FOR_STATISTICS: `${url}bases/applyFilterForStatistics`,

    //Toutes les URLs en rapport avec les Annonceurs
    CREATE_ANNONCEUR: `${url}annonceurs`,
    READ_All_ANNONCEUR: `${url}annonceurs`,
    READ_ONE_ANNONCEUR: `${url}annonceurs/`,
    UPDATE_ANNONCEUR: `${url}annonceurs/update/`,
    DELETE_ANNONCEUR: `${url}annonceurs/delete/`,
    READ_All_ANNONCEUR_FOR_STATISTICS: `${url}annonceurs/forStatistics`,
    APPLY_FILTER_ANNONCEUR_FOR_STATISTICS: `${url}annonceurs/applyFilterForStatistics`,

    //Toutes les URLs en rapport avec les Campagnes
    CREATE_CAMPAGNE: `${url}campagnes`,
    READ_All_CAMPAGNE: `${url}campagnes`,
    READ_All_CAMPAGNE_BY_ANNONCEUR_ID: `${url}campagnes/parAnnonceur`,
    READ_ONE_CAMPAGNE: `${url}campagnes/`,
    UPDATE_CAMPAGNE: `${url}campagnes/update/`,
    DELETE_CAMPAGNE: `${url}campagnes/delete/`,
    READ_All_CAMPAGNE_FOR_STATISTICS: `${url}campagnes/forStatistics`,
    APPLY_FILTER_CAMPAGNE_FOR_STATISTICS: `${url}campagnes/applyFilterForStatistics`,

    //Toutes les URLs en rapport avec les Plannings
    CREATE_PLANNING: `${url}plannings`,
    READ_All_PLANNING: `${url}plannings`,
    READ_ONE_PLANNING: `${url}plannings/`,
    UPDATE_PLANNING: `${url}plannings/update/`,
    DELETE_PLANNING: `${url}plannings/delete/`,
    APPLY_FILTER_PLANNING: `${url}plannings/applyFilter`,

    //Toutes les URLs en rapport avec les Résultats
    CREATE_RESULTAT: `${url}resultats`,
    READ_All_RESULTAT: `${url}resultats`,
    READ_ONE_RESULTAT: `${url}resultats/`,
    UPDATE_RESULTAT: `${url}resultats/update/`,
    DELETE_RESULTAT: `${url}resultats/delete/`,
    APPLY_FILTER_RESULTAT: `${url}resultats/applyFilter`,
}