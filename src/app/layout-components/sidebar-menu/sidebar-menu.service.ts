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
    "link": "/dashboard"
  },
  {
    "title": "Routeurs",
    "type": "simple",
    "icon": "<i class=\"pe-7s-network\"> </i>",
    "link": "/routeurs"
  },
  {
    "title": "Bases",
    "type": "simple",
    "icon": "<i class=\"pe-7s-server\"> </i>",
    "link": "/bases"
  },
  {
    "title": "Annonceurs",
    "type": "simple",
    "icon": "<i class=\"pe-7s-flag\"> </i>",
    "link": "/annonceurs"
  },
  {
    "title": "Campagnes",
    "type": "simple",
    "icon": "<i class=\"pe-7s-portfolio\"> </i>",
    "link": "/campagnes"
  },
  {
    "title": "Plannings",
    "type": "simple",
    "icon": "<i class=\"pe-7s-date\"> </i>",
    "link": "/plannings"
  },
  {
    "title": "Résultats",
    "type": "simple",
    "icon": "<i class=\"pe-7s-display2\"> </i>",
    "link": "/resultats"
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
        "link": "/statistiques-par-routeurs"
      },
      {
        "title": "Par Bases",
        "type": "simple",
        "icon": "<i class=\"pe-7s-server\"> </i>",
        "link": "/statistiques-par-bases"
      },
      {
        "title": "Par Annonceurs",
        "type": "simple",
        "icon": "<i class=\"pe-7s-flag\"> </i>",
        "link": "/statistiques-par-annonceurs"
      },
      {
        "title": "Par Campagnes",
        "type": "simple",
        "icon": "<i class=\"pe-7s-portfolio\"> </i>",
        "link": "/statistiques-par-campagnes"
      }
    ]
  },
  {
    "title": "Gestion des Utilisateurs",
    "type": "simple",
    "icon": "<i class=\"pe-7s-users\"> </i>",
    "link": "/users"
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
