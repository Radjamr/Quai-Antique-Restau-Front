
const galerieImage = document.getElementById("allImage");
// recupere les informations des images

let titre ='<img src=x onerror="window.location.replace(\'https://google.com\')"/>';
let imgSource= "../images/saumon.jpg"
let monImage = getImage(titre, imgSource);
galerieImage.innerHTML =  monImage;

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
        <div class="image-card text-white">
            <img src="${urlImage}" class="rounded w-100"/>
            <p class="titre-image">${titre}</p>
            <div class="action-image-button" data-show="admin">
                <a type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></a>
                <a type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></a>
            </div>
        </div> 
    </div>`;
}