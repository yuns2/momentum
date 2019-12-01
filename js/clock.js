const clockContainer = document.querySelector('.js-clock');
console.log(clockContainer);
const clockTitle = clockContainer.querySelector('h1');
console.log(clockTitle);

function getTime(){
    const date = new Date();
    const minutes= date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    // 시간의 표기 형식 바꾸기
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}


function init(){
    // 먼저 시간을 불러온 뒤, 값을 변화시킴
    getTime();
    setInterval(getTime, 1000);
}

init();