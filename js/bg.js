// Math.random()
// Math.floor()
const body = document.querySelector("body");
const IMG_NUMBER = 3;

// function handleImageLoad(){
//     console.log('finished loading');
// }
function paintImage(imgNumber){
    // image Element를 만들어 변수 image에 할당한다.
    const image = new Image();
    // +1 : Math.random() 함수가 0을 줄 수 있기 때문.
    // image(변수)의 소스(속성값)를 바꾼다.
    image.src =`img/bg${imgNumber + 1}.jpg`;
    image.classList.add('bgImage')
    body.appendChild(image);


    // API를 사용할 때 필요한 소스
    // loadend 이벤트는 성공여부와 관계없이 파일읽기가 끝나면 실행됩니다.
    // image.addEventListener('loadend',handleImageLoad);
    
}
function genRandom(){
    // 0,1,2 (인덱스 번호가 되고) > 3개의 이미지를 가짐
    const number = Math.floor(Math.random()*5);
    return number;
}
function init(){
    const randomNumber = genRandom(); // 이미지의 인덱스 번호가 들어감(랜덤으로)
    paintImage(randomNumber); // 0,1,2
}
init();