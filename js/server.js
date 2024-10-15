function server(package){
	console.log({ package })
    const method = package.method;
    const url = package.url;
    const content = package.content; 
    if (url === "ourServer/api/login"){
        verifyPassword( content.name , content.password );
    }
    if(url==="addUser/api/people"){
        addPersonToDB (content);
        return true;
    }
}

