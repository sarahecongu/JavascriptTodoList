//variables
const addTask = document.getElementById('add-task');
const taskContainer =document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
//Event listener for Add Button
addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);
   
   //delete
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
   //rules
   if (inputTask.value===''){
    alert('please enter a task');
   }else{
    taskContainer.appendChild(task);
   }
   inputTask.value = '';


   checkButton.addEventListener('click',function(){
    checkButton.parentElement.style.textDecoration= "line-through"
   });

   deleteButton.addEventListener('click',function(e){
    let  target = e.target;
    target.parentElement.remove();
   })
});