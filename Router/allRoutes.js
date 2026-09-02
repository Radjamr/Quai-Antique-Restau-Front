import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html",[]),
    new Route("/Galerie", "La Galerie", "/Pages/Galerie.html",[], "/js/galerie.js"),
    new Route("/Signin", "Connexion", "/Pages/auth/Signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/Signup", "Inscription", "/Pages/auth/Signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/Account", "Mon Compte", "/Pages/auth/Account.html", ["client", "admin"]),
    new Route("/EditPassword", "Modifier mon Mot de Passe", "/Pages/auth/EditPassword.html", ["client", "admin"]),
    new Route("/AllResa", "Vos Réservation", "/Pages/reservation/AllResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/Pages/reservation/reserver.html", ["client"]),



    
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";