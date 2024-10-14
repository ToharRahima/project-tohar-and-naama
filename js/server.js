function server(package){
    method = package.method
    url = package.url
    content = package.url 
    if (url === "ourServer/api/login"){
        verifyPassword( content.name , content.password );
    }
}

