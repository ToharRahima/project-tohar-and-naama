function server(package){
    console.log('package: ', package);

    method = package.method
    url = package.url
    content = package.content
    if (url === "ourServer/api/login"){
        return checkIfUserExists(content.name, content.password);
    }
    // if (url === "some url"){
    //     return ;
    // }

    if(url==="addUser/api/people"){
        return addPersonToDB (content);
    }
    if(url==="addToDo/api/ToDoList"){
        console.log('content.id: ', content.id);
        return addToDoItem(content.id, content.task);
    }

    if(url==="ourServer/api/getToDo"){
        return showAllToDoArray(content)
    }
}