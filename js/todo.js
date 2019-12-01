const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
// forEach처럼 각각의 아이템에서 실행될 예정
// toDos에 있는 모든 항목을 통과하되, 조건이 참일 경우만 return값을 반환한다.


// 할일이 하나가 아니라 여러개이므로, 배열로 저장해야하며
// 이를 저장할 빈 배열을 만들어 준다.
// 해야할 일을 생성했을 때에 이 배열에 저장할 수 있도록
const toDos = [];
function saveToDos(){
    // stringfy : 자바스크립트 object를 string으로 바꿔줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// filter() 메서드는 주어진 함수의 테스트를 통과하는(True) 모든 요소를 모아 새로운 배열로 반환합니다. > return값이 참이 되도록만 하는 값을 반환
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // toDos에 있는 각 목록들이 하나씩 인자로 작동
    const cleanToDos = toDos.filter(function(toDo){
        // console.log(li.id);
        // console.log(toDo.id);

        return toDo.id !== parseInt(li.id);
    });
    // 삭제된 항목 제외한 나머지항목
    console.log(cleanToDos);
    // 삭제된 항목까지 포함한 Todo-list
    console.log(toDos);
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    // text > submit에서 제출된 이벤트
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 할일 작성 칸을 비워줌
    toDoInput.value = "";
}
function loadToDos(){
    // localStorage의 TODOS_LS의 value를 가져온다.
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    // 저장된 값이 있으면
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    });
    
}
}
function init(){
    loadToDos();
    toDoform.addEventListener('submit', handleSubmit)
}

init();