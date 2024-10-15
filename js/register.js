loginTemplate = document.getElementsByTagName("template")[0]
registerPageTemplate = document.getElementsByTagName("template")[1]
mainPageTemplate = document.getElementsByTagName("template")[2]

const registerButton = document.getElementById("registersubmitbutton");
registerButton.addEventListener("click", preventDefaultsendtoUserValueToPerson);

//prevent defult
function preventDefaultsendtoUserValueToPerson(e) {
    e.preventDefault();
    userValueToPerson();
};

//takes input and create person
function userValueToPerson() {
    const userNameValue = document.getElementById("newusername").value;
    const passwordValue = document.getElementById("newpassword").value;
    const secondPasswordValue = document.getElementById("confirmpassword").value;
    if(passwordValue!==secondPasswordValue){
        document.getElementById("registererrorMessage").innerText="passwords do not match";
        document.getElementById("registererrorMessage").style.color= "red";
    }else {
        let person = {username:userNameValue,
                    password:passwordValue}
        console.log(person);
        //SEND PERSON TO NETWORK
        const fajaxobj = new FAJAX()

        fajaxobj.open("POST", "addUser/api/people", person);
        fajaxobj.onload = function (res) {
            localStorage.setItem("currentId", res);
            loadPage(mainPageTemplate);
        };
        fajaxobj.send();
        console.log('fajaxobj: ', fajaxobj);
    }
}

