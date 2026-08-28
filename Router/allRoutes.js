import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "La Galerie", "/pages/Galerie.html"),
    new Route("/Signin", "Connexion", "/pages/auth/Signin.html"),
    new Route("/Signup", "Inscription", "/pages/auth/Signup.html"),
    new Route("/Account", "Mon Compte", "/pages/auth/Account.html"),
    new Route("/EditPassword", "Modifier mon Mot de Passe", "/pages/auth/EditPassword.html"),
    new Route("/AllResa", "Vos Réservation", "/pages/reservation/AllResa.html"),
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";