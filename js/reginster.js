let temp = document.getElementsByTagName("template")[1];

function showregisterContent() {
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
  }
  
showregisterContent();

const form = document.getElementById("registerForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    userValueToPerson();
})

function userValueToPerson(){
    const userNameValue = document.getElementById("newusername").value;
    const passwordValue = document.getElementById("newpassword").value;
    const secondPasswordValue = document.getElementById("confirmpassword").value;
    if(passwordValue!==secondPasswordValue){
        document.getElementById("errorMessage").innerText="passwords do not match";
        document.getElementById("errorMessage").style.color= "red";
    }else {
        let person = new Person(1, userNameValue, passwordValue,);
        console.log(person);
    }
      
    }