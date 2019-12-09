const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    title = document.querySelector('title');

const USER_LS = "currentUser";
const SHOWING_ON = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit', handleSubmit);
}
function paintGreeting(name){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello, ${name}`;
    title.innerText = `Welcome, ${name}`;
}
function loadName(){
    const loadedName = localStorage.getItem(USER_LS);
    if(loadedName === null){
        askForName();
    }else{
        paintGreeting(loadedName);
    }
};
function init(){
    loadName();
};
init();


