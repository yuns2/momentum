const body = document.querySelector('body');
function paintImage(ranNum){
    const image = new Image();
    image.src = `img/bg${ranNum + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
};
function genRandom(){
    const randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
};
function init(){
    const imgNum = genRandom();
    paintImage(imgNum);
};
init();