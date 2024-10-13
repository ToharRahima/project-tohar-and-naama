/* to do
    - add id generator to create person
    -make one single person constructor(createPers + addPers in one function)
*/

const localStorageObj = {
    usersArray: []
}
localStorage.setItem("db", JSON.stringify(localStorageObj));

//create a person
function createPersonObj(id, username, password,) {
    this.id = id
    this.username = username
    this.password = password
    this.toDoList = [ ]
  }// id generator

function addPersonToDB (personObj){
    let db = JSON.parse(localStorage.getItem("db"));
    db.usersArray.push(personObj);
    localStorage.setItem("db", JSON.stringify(db));
}

function checkIfUserExists(username){}

function verifyPassword(username, password){}

function createToDoObj (task){
    this.task = task
}

function addToDoItem( id, task){
    let db = JSON.parse(localStorage.getItem("db"));
    for( let i = 0; i < db.usersArray.length; i++){
        if (db.usersArray[i].id === id ){
            db.usersArray[i].toDoList.push(task)
            localStorage.setItem("db", JSON.stringify(db));
            break
        }
    }

}

function removeItemFromToDo(){}

function showAllToDoItems(){}






// dave is test
//we have created a new person
let dave = new createPersonObj(1, "Dave", 1234);
//the object with the array of all the people 

addPersonToDB(dave);

let davesTask = new createToDoObj ("make Dinner");

addToDoItem(1,davesTask);
