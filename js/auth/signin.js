const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    const dataForm = new FormData(signinForm);
   //ici, il faudra appeler API pour vérifier les credentials en BDD
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then(result => {
        //Il faudra récuper le vrai Token    fait    
        const token = result.apiToken;
        setToken(token);
        //placer ce token en cookie fait
        setCookie(RoleCookieName, result.roles[0], 7),
        window.location.replace("/");
    })
    .catch(error => console.log('error', error));
}

