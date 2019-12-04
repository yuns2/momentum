const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    title = document.querySelector('title');

const USER_LS = "currentUser",
    SHOWING_ON = "showing";
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const userName = input.value;
    saveName(userName);
    paintGreeting(userName);
    
}
function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit',handleSubmit);
}
function paintGreeting(name){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello, ${name}`;
    title.innerText = `Welcome you, ${name}`;
}
function loadName(){
    currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
};
init();
