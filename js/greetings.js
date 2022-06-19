const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const greeting=document.querySelector('h1');

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="userName";

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}  