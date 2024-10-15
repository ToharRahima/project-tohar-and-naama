function server(package){

    method = package.method
    url = package.url
    content = package.content
    if (url === "ourServer/api/login"){
        console.log('verifyPassword( content.name , content.password ): ', verifyPassword( content.name , content.password ));
        console.log('checkIfUserExists(content.name): ', checkIfUserExists(content.name));
        if( checkIfUserExists(content.name) && verifyPassword( content.name , content.password )){
            console.log(18);
            return true
        } else return false;

    }
    // if (url === "some url"){
    //     return ;
    // }

}

//constent.name is not defined!!!!!!!!

