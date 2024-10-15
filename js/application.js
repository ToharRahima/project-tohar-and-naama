
const id = localStorage.getItem("currentId");
const taskInput = document.getElementById("additem");
const addTaskBtn = document.getElementById("addTaskButton");
const logOutButton = document.getElementById("logout");

logOutButton.addEventListener("click", () => {
    localStorage.removeItem("currentId")
    location.reload();
})


function showTasks () {
    showTasksFajax= new FAJAX();
    showTasksFajax.open("get", "ourServer/api/getToDo", id)
    showTasksFajax.onload = function (toDoList){
        if(!toDoList) return;
      document.getElementById("TDlist").innerHTML = "- " + toDoList.join(" <br/> - ")
    }
    showTasksFajax.send();
  }

  showTasks();



function addtask(){
    const task = taskInput.value;
    console.log({ task })
    if(task.length){
        const fajaxtodoobj = new FAJAX()
        console.log('id: ', id);
        fajaxtodoobj.open("POST","addToDo/api/ToDoList",{id, task});
        fajaxtodoobj.onload = function(toDoList){
            if(!toDoList) return;
            document.getElementById("TDlist").innerHTML = "- " + toDoList.join(" <br/> - ")
            }
         fajaxtodoobj.send();    
    }else{
        alert("task can't be blank, write an input");
    }
} 

addTaskBtn.addEventListener("click",addtask);



function createToDoObj (task){
    this.id
    this.task = task
}

