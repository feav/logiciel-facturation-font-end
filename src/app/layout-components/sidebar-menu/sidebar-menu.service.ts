import { Injectable } from '@angular/core';

interface MenuItem {
    title: string;
    type: string;
    badge?: {
        class: string;
        text: string;
    };
    link?: string;
    active?: boolean;
    icon?: string;
    submenus?: MenuItem[];
    visible: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {

    menus: MenuItem[] = [
        {
            "title": "Tableau de Bord",
            "type": "simple",
            "icon": "<i class=\"pe-7s-home\"> </i>",
            "link": "/dashboard",
            "visible": true
        },
        {
            "title": "Routeurs",
            "type": "simple",
            "icon": "<i class=\"pe-7s-network\"> </i>",
            "link": "/routeurs",
            "visible": true
        },
        {
            "title": "Bases",
            "type": "simple",
            "icon": "<i class=\"pe-7s-server\"> </i>",
            "link": "/bases",
            "visible": true
        },
        {
            "title": "Annonceurs",
            "type": "simple",
            "icon": "<i class=\"pe-7s-flag\"> </i>",
            "link": "/annonceurs",
            "visible": true
        },
        {
            "title": "Campagnes",
            "type": "simple",
            "icon": "<i class=\"pe-7s-portfolio\"> </i>",
            "link": "/campagnes",
            "visible": true
        },
        {
            "title": "Plannings",
            "type": "simple",
            "icon": "<i class=\"pe-7s-date\"> </i>",
            "link": "/plannings",
            "visible": true
        },
        {
            "title": "Résultats",
            "type": "simple",
            "icon": "<i class=\"pe-7s-display2\"> </i>",
            "link": "/resultats",
            "visible": true
        },
        {
            "title": "Statistiques",
            "type": "dropdown",
            "icon": "<i class=\"pe-7s-graph3\"> </i>",
            "submenus": [
                {
                    "title": "Par Routeurs",
                    "type": "simple",
                    "icon": "<i class=\"pe-7s-network\"> </i>",
                    "link": "/statistiques-par-routeurs",
                    "visible": true
                },
                {
                    "title": "Par Bases",
                    "type": "simple",
                    "icon": "<i class=\"pe-7s-server\"> </i>",
                    "link": "/statistiques-par-bases",
                    "visible": true
                },
                {
                    "title": "Par Annonceurs",
                    "type": "simple",
                    "icon": "<i class=\"pe-7s-flag\"> </i>",
                    "link": "/statistiques-par-annonceurs",
                    "visible": true
                },
                {
                    "title": "Par Campagnes",
                    "type": "simple",
                    "icon": "<i class=\"pe-7s-portfolio\"> </i>",
                    "link": "/statistiques-par-campagnes",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "title": "Gestion des Utilisateurs",
            "type": "simple",
            "icon": "<i class=\"pe-7s-users\"> </i>",
            "link": "/users",
            "visible": true
        }
    ];

    constructor() { }

    getMenuList() {
        return this.menus;
    }

    getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
        for (const theMenu of aMenus) {
            if (theMenu.link && theMenu.link === aUrl) {
                return theMenu;
            }

            if (theMenu.submenus && theMenu.submenus.length > 0) {
                const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
                if (foundItem) {
                    return foundItem;
                }
            }
        }

        return undefined;
    }

    toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
        return aMenus.map((aMenu: MenuItem) => {
            if (aMenu === aCurrentMenu) {
                aMenu.active = !aMenu.active;
            } else {
                aMenu.active = false;
            }

            if (aMenu.submenus && aMenu.submenus.length > 0) {
                aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

                if (aMenu.submenus.find(aChild => aChild.active)) {
                    aMenu.active = true;
                }
            }

            return aMenu;
        });
    }
}
