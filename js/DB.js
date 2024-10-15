const localStorageObj = {
    usersArray: [],
    idCounter: 1
}


class Person {
    constructor(username, password, id) {

        this.username = username;
        this.password = password;
        this.toDoList = [];
        this.id = id;

    }
} 


function setDB(){
    const db = localStorage.getItem("db");
    if (!db?.length) {
        localStorage.setItem("db", JSON.stringify(localStorageObj));
        
        let dave = new Person("dave", 1234);
        addPersonToDB(dave);


    }
}
setDB();

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
    const newPerson = new Person(personObj.username, personObj.password)
    newPerson.id = db.idCounter;
    db.idCounter++
    db.usersArray.push(newPerson);
    localStorage.setItem("db", JSON.stringify(db));
    return newPerson.id
}

function checkIfUserExists(name, password) {
    let db = JSON.parse(localStorage.getItem("db"));

    for (let i = 0; i < db.usersArray.length; i++) {
        if (String(db.usersArray[i].username) === String(name) && verifyPassword( name ,password ))  {

           return  db.usersArray[i].id;
        }
    }
    localStorage.setItem("db", JSON.stringify(db));
    return false;
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

// function createToDoObj(task) {
//     this.id
//     this.task = task
// }


function addToDoItem(id, task) {
    let db = JSON.parse(localStorage.getItem("db"));
    for (let i = 0; i < db.usersArray.length; i++) {
        console.log('db.usersArray[i].id: ', db.usersArray[i].id);
        if (db.usersArray[i].id.toString() === id.toString()) {

            db.usersArray[i].toDoList.push(task)
            localStorage.setItem("db", JSON.stringify(db));
            return db.usersArray[i].toDoList;
        }
    }

    return false;

}

function removeItemFromToDo() { }

function showAllToDoArray(id) {
    let db = JSON.parse(localStorage.getItem("db"));
    for (let i = 0; i < db.usersArray.length; i++) {
        if (db.usersArray[i].id.toString() === id.toString()) {
            console.log("hello from retrieval function");
            allToDo = db.usersArray[i].toDoList;
            return allToDo
        }
    }

    return false;
}






// dave is test
//we have created a new person

//the object with the array of all the people 



let davesTask = new createToDoObj("make Dinner");

addToDoItem(1, davesTask);