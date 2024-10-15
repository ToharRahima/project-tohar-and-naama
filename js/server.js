function server(package){

    method = package.method
    url = package.url
    content = package.content
    if (url === "ourServer/api/login"){
        if( checkIfUserExists(content.name) && verifyPassword( content.name , content.password )){
            return true
        } else return false;

    }
    // if (url === "some url"){
    //     return ;
    // }

    if(url==="addUser/api/people"){
        addPersonToDB (content);
        return true;
    }
}