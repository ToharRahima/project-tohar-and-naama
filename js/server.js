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
}