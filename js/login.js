
// function showLogin() {
    //   let temp = document.getElementsByTagName("template")[0];
    //   let clon = temp.content.cloneNode(true);
    //   document.body.appendChild(clon);
    // }
    // showLogin();
    // function showregisterContent() {
    //   let temp = document.getElementsByTagName("template")[1];
    //   let clon = temp.content.cloneNode(true);
    //   document.body.appendChild(clon);
    //   }
    // function showAppContent() {
    //   let temp = document.getElementsByTagName("template")[2];
    //   let clon = temp.content.cloneNode(true);
    //   document.body.appendChild(clon);
    // }
    let loginTemplate = document.getElementsByTagName("template")[0]
    let registerPageTemplate = document.getElementsByTagName("template")[1]
    let mainPageTemplate = document.getElementsByTagName("template")[2]
    //load page by its template number
function loadPage(template){
    document.getElementById("templatesContainer").innerHTML="";
    let clon = template.content.cloneNode(true);
    document.getElementById("templatesContainer").appendChild(clon);
}
loadPage(loginTemplate);

//
function processPassword(event){
  event.preventDefault();
  const inputedUserNameV = document.getElementById("username").value;
  const inputedPasswordV = document.getElementById("password").value;
  const nameAndPassword = {
                            name: inputedUserNameV,
                            password: inputedPasswordV
                          }
    xml = new FAJAX();
    xml.open("post", "ourServer/api/login", nameAndPassword )
    xml.onload = function (){
      console.log("do something before if");
      if (/*the check from server was positive*/5 == 5){
        loadPage(mainPageTemplate);
      } else{
        document.getElementById("loginererrorMessage").innerText="user name or password is wrong"
      }
    }
   xml.send();
  }

  document.getElementById("loginsubmitbutton").addEventListener("click", processPassword);
  document.getElementById("goToRegister").addEventListener("click",  ()=>{
    loadPage(registerPageTemplate);

   });