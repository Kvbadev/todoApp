const addButton = document.querySelector('.btn');
const input = document.getElementById('textplace')
const taskList = document.querySelector('.tasks');

addButton.addEventListener('click', function(){
    // if(inputArea.textContent != null){
        var newTask = document.createElement("p");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        newTask.classList.add('task');
        input.value = "";
    // }
})