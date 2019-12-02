const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS ="currentUser",
    SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
// currentUser가 없으면, 유저의 이름을 요청한다.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    /*
    form.classList.remove(SHOWING_ON)
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${input.value}`;
    */
    paintGreeting(currentValue);
    saveName(currentValue);

}
function askForName (name){
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit',handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_ON)
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text} :)`;
}
function loadName (){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        // 유저를 가지고 있지 않을 때 작동
        askForName();
    }else{
        // she is
        // 유저를 가지고 있을 때 작동
        // local storage에서 가져온 유저이름을 인자로 가져옴ss
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();