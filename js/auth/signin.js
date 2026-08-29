const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
   //ici, il faudra appeler API pour vérifier les credentials en BDD
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Il faudra récuper le vrai Token        
        const token = "oskfnzokfklfnpzdzpifnzmpfmpznfpozfjpznfpzfnpzjfpzfnpz";
        setToken(token);
        setCookie(RoleCookieName, "admin", 7),
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

