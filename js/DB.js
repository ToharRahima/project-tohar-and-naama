/* to do
    - add id generator to create person
    -make one single person constructor(createPers + addPers in one function)
*/

const localStorageObj = {
    usersArray: []
}
localStorage.setItem("db", JSON.stringify(localStorageObj));

// function Person(username, password,) {
//     this.username = username
//     this.password = password
//     this.toDoList = [ ]
//     this.tdid = 0 
//   }// id generator
function add() { }

// function getUserObject(name,id, password) {
//     return {
//         name,
//         id,
//         password
//     }
// }

function addPersonToDB(personObj) {
    let db = JSON.parse(localStorage.getItem("db"));
    db.usersArray.push(personObj);
    localStorage.setItem("db", JSON.stringify(db));
}

function checkIfUserExists(name) {
    let db = JSON.parse(localStorage.getItem("db"));
    let userExists = false

    for (let i = 0; i < db.usersArray.length; i++) {
        // console.log(i);
        console.log('name: ', name);
        // console.log('db.usersArray[0].username: ', db.usersArray[0].username)
        if (String(db.usersArray[i].username) === String(name)) {
            console.log('db.usersArray[i].username: ', db.usersArray[i].username)
            console.log("user exists (i;m inside loop)", name)
            userExists = true
            break
        }
    }
    localStorage.setItem("db", JSON.stringify(db));
    console.log("does user exist?", userExists)
    return userExists
}

function verifyPassword(username, password) {
    let db = JSON.parse(localStorage.getItem("db"));
    let passwordCongruence = false
    for (let i = 0; i < db.usersArray.length; i++) {
        if (String(db.usersArray[i].username) === String(username) && String(db.usersArray[i].password) === String(password)) {
            passwordCongruence = true
            console.log("password correct");
        }
    }
    localStorage.setItem("db", JSON.stringify(db));

    return passwordCongruence
}

function createToDoObj(task) {
    this.id
    this.task = task
}

function addToDoItem(id, task) {
    let db = JSON.parse(localStorage.getItem("db"));
    for (let i = 0; i < db.usersArray.length; i++) {
        if (db.usersArray[i].id === id) {

            db.usersArray[i].toDoList.push(task)
            break
        }
    }
    localStorage.setItem("db", JSON.stringify(db));

}

function removeItemFromToDo() { }

function showAllToDoArray(id) {
    let db = JSON.parse(localStorage.getItem("db"));
    let allToDoArray = db.toDoList
    localStorage.setItem("db", JSON.stringify(db));
    return allToDoArray
}

class Person {
    constructor(username, password,) {
        this.username = username
        this.password = password
        this.toDoList = []
        this.tdid = 0
    }
}




// dave is test
//we have created a new person
let dave = new Person("dave", 1234, 1);
//the object with the array of all the people 

addPersonToDB(dave);

let davesTask = new createToDoObj("make Dinner");

addToDoItem(1, davesTask);