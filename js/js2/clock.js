// 시계를 감싸고 있는 container
const clockContainer = document.querySelector('.js-clock');
// console.log(clockContainer);

// 실제 시계가 되는 부분
const clockTitle = clockContainer.querySelector('h1');
// console.log(clockTitle);


// 기능1 : 시간을 불러오는 함수
function getTime(){
    // new Date() : 생성자 함수. 날짜와 시간을 가지는 인스턴스를 생성한다.
    const date = new Date();
    // date의 시,분,초 속성을 변수에 할당한다.
    const hours = date.getHours();
    const minutes= date.getMinutes();
    const seconds = date.getSeconds();
    
    // 시간의 표기 형식 바꾸기
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}



function init(){
    // 먼저 시간을 불러온 뒤, 값을 변화시킴
    getTime();
    // setInterval(함수, 실행시간) : 일정 시간마다 반복 실행하는 함수
    setInterval(getTime, 1000);
}

init();