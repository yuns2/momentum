// API : 다른 서버로부터 데이터를 손쉽게 가져올 수 있는 시스템
const weather = document.querySelector(".js-weather");
const COORDS ='coords';
const API_KEY = "8087ea84d633b38d36f8739c3c6e91dc";

// json() :  이 메서드는 body 텍스트를 JSON으로 바꾸는 결과로 해결되는 promise를 반환한다.
function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    ).then(function(response){
        return response.json();
        // json에 저장된 정보들을 가져와서, 이를 화면에 구현해야함.
    }).then(function(json){
        console.log(json);
        // json → Object
        // 구현할 정보들 ↓
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // 객체 내에서 변수의 이름과 값의 이름을 같게 할 경우
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}
function askForCoords(){
    // navigator : 브라우저의 정보를 제공하는 객체
    // Geolocation.getCurrentPosition(성공, 실패) : 장치의 현재 위치를 가져온다.
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}



function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        // loadedCoords는 const coordsObj로 인해 경도와 위도가 String으로 저장된 상태.
        // parsedCoords → 객체
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}
init();