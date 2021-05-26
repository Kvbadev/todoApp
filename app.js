
//BUTTONS
const addButton = document.querySelector('.btn');
const input = document.getElementById('textplace')
const taskList = document.querySelector('.tasks');
const page = document.querySelector('.page');
const btnPage1 = document.getElementById('btn_page1');
const btnPage2 = document.getElementById('btn_page2');
//

//VARIABLES
var newTask = null;
var number = 0;
var elementId = "";
//

//EVENT LISTENERS
addButton.addEventListener('click', function(){
    if(input.value != ""){
        newTask = document.createElement("div");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        newTask.classList.toggle('task');
        newTask.id = getId();
        input.value = "";
        number++;
        if(number > 0){
            newTask.addEventListener('click', function(){
                page.classList.toggle('page2');
                elementId = getAnId(this);   
            })
        }
    }
})
btnPage1.addEventListener('click', function(){
    page.classList.toggle('page2');
})

btnPage2.addEventListener('click', function(){
    document.getElementById(elementId).remove();
    page.classList.toggle('page2');
})


function getId(){
    let taskId = "task" + number;
    return taskId;
}
function getAnId(btn){
    return(btn.id);
}