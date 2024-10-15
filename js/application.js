// const loginPageTemplate = document.getElementsByTagName("template")[0]
// const registerPageTemplate = document.getElementsByTagName("template")[1]
// const mainPageTemplate = document.getElementsByTagName("template")[2]

// function loadPage(template){
//     document.getElementById("templatesContainer").innerHTML="";
//     let clon = template.content.cloneNode(true);
//     document.getElementById("templatesContainer").appendChild(clon);
// }
const id = localStorage.getItem("currentId");
const taskInput = document.getElementById("additem");
console.log({ taskInput })
const addTaskBtn = document.getElementById("addTaskButton");
console.log({ addTaskBtn })


function addtask(){
    const task = taskInput.value;
    console.log({ task })
    if(task.length){
        const fajaxtodoobj = new FAJAX()
        fajaxtodoobj.open("POST","addToDo/api/ToDoList",{id, task});
        fajaxtodoobj.onload = function(result){
            //TODO:    add result to screen
            }
        fajaxobj.send();    
    }else{
        alert("task can't be blank, write an input");
    }
} 

addTaskBtn.addEventListener("click",addtask);



function createToDoObj (task){
    this.id
    this.task = task
}

