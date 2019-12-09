const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";
var toDos = []; 

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function deleteToDo(){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDo(toDos);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', deleteToDo);
    const newId = toDos.length + 1;

    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        id : newId,
        text : text
    }
    toDos.push(toDoObj)
    saveToDo(toDos);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = Array.from(JSON.parse(loadedToDos));
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};
function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
};
init();