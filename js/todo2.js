const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";
var toDos = [];
function saveToDos (){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function deleteToDos(event){
    const btn = event.taget;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    const currentToDos = JSON.stringify(toDos);
    localStorage.setItem(TODOS_LS, currentToDos);
}

function paintToDos(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = documnet.createElement('button');
    delBtn.addEventListener('click',deleteToDos);
    const newId = toDos.length + 1;
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj ={
        text:text,
        id:newId
    }

    toDos.push(toDoObj);
    saveToDos();
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })


    }

}
function init(){}
init();