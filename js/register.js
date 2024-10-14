const registerButton = document.getElementById("registersubmitbutton");

// registerButton.addEventListener("click",(event)=>{
//     event.preventDefault();
//     userValueToPerson();
// })

function userValueToPerson(){
    const userNameValue = document.getElementById("newusername").value;
    const passwordValue = document.getElementById("newpassword").value;
    const secondPasswordValue = document.getElementById("confirmpassword").value;
    if(passwordValue!==secondPasswordValue){
        document.getElementById("registererrorMessage").innerText="passwords do not match";
        document.getElementById("registererrorMessage").style.color= "red";
    }else {
        let person = new Person(1, userNameValue, passwordValue,);
        console.log(person);
    }
      
    }
