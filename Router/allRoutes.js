import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/Galerie", "La Galerie", "/pages/Galerie.html",[]),
    new Route("/Signin", "Connexion", "/pages/auth/Signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/Signup", "Inscription", "/pages/auth/Signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/Account", "Mon Compte", "/pages/auth/Account.html", ["client", "admin"]),
    new Route("/EditPassword", "Modifier mon Mot de Passe",["client", "admin"] , "/pages/auth/EditPassword.html"),
    new Route("/AllResa", "Vos Réservation", "/pages/reservation/AllResa.html",["client"]),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html",["client"]),



    
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";