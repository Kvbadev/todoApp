const addButton = document.querySelector('.btn');
const input = document.getElementById('textplace')
const taskList = document.querySelector('.tasks');
const page = document.querySelector('.page');
var newTask = null;
var number = 0;

addButton.addEventListener('click', function(){
    if(input.value != ""){
        newTask = document.createElement("div");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        newTask.classList.add('task');
        newTask.id = "task" + number;
        input.value = "";
        number++;
        if(number > 0){
            newTask.addEventListener('click', function(){
                page.classList.add('page2');
                console.log(newTask.id)
            })
        }
    }
})

if(number > 0){
    newTask.addEventListener('click', function(){
        // page.classList.add('page2');
        console.log('ldfksl');
    })
}

