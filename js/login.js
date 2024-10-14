function showLogin() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
showLogin();


// function showregisterContent() {
//   let temp = document.getElementsByTagName("template")[1];
//   let clon = temp.content.cloneNode(true);
//   document.body.appendChild(clon);
//   }
  


function showAppContent() {
  let temp = document.getElementsByTagName("template")[2];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}




function processPassword(event){
  console.log("i'm in the first func");
  console.log("i'm in the first func");
  event.preventDefault();
  const inputedUserNameV = document.getElementById("username").value;
  const inputedPasswordV = document.getElementById("password").value;
  const nameAndPassword = {
                            name: inputedUserNameV,
                            password: inputedPasswordV
                          }
    xml = new FAJAX();
    debugger
    xml.open("post", "ourServer/api/login", nameAndPassword )
    xml.onload = function (){
      console.log("do something before if");
      if (/*the check from server was positive*/5 == 5){
        document.getElementById("templatesContainer").innerHTML="";
         showAppContent();
      } else{
        document.getElementById("loginererrorMessage").innerText="user name or password is wrong"
      }

    }
    
   xml.send();


  }

  document.getElementById("loginsubmitbutton").addEventListener("click", processPassword);
    
    
  document.getElementById("goToRegister").addEventListener("click",  ()=>{
    document.getElementById("templatesContainer").innerHTML="";
      // showregisterContent();
   });