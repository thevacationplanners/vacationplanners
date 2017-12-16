
const txtEmailSignIn = document.getElementById("txtEmail");
const txtEmailSignUp = document.getElementById("txtEmailSignUp");
const txtPasswordSignIn = document.getElementById("txtPassword");
const txtPasswordSignUp = document.getElementById("txtPasswordSignUp");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

btnLogin.addEventListener("click", e => {
    const email = txtEmailSignIn.value;
    const pass = txtPasswordSignUp.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener("click", e => {
    const email = txtEmailSignUp.value;
    const pass = txtPasswordSignUp.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});