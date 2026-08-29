export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[]--> Tout le monde peut y acceder
["Disconnected"] --> Réserver aux utilisateur déconnecté
["Client"] --> Réserver aux utilisateur avec le rôle Client
["admin"] --> Réserver aux utilisateur avec le rôle Admin
["admin", "client"] --> Réserver aux utilisateur avec le rôle Client ou admin
*/