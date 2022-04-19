function addTask(){
  const taskTile =  document.querySelector('#task-title').value
  console.log(taskTile)
  if(taskTile){
      const template = document.querySelector('.template')
      const newTask = template.cloneNode(true )
      console.log(newTask)
      newTask.querySelector('.tasks-title').textContent = taskTile
      newTask.classList.remove('template')
      newTask.classList.remove('hide')

      const list =  document.querySelector('#tasks-list')
      list.appendChild(newTask)
      const removeBtn = newTask.querySelector(".remove-btn").addEventListener('click', function(){
          removeTask(this);
      })

      const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
          completeTask(this)
      } )

      document.querySelector('#task-title').value = ""
  }
}

function removeTask(task){
    task.parentNode.remove(true)
}


function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done')
}

const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('testando')
    addTask()
})