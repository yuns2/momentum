const body = document.querySelector('body');
function paintImage(randomNum){
    const image = new Image();
    image.src = `img/bg${randomNum+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
};
function genRandom(){
    const randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
};
function init(){
    const ranNum = genRandom();
    paintImage(ranNum);
};
init();