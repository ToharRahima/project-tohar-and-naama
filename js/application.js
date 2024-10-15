const loginPageTemplate = document.getElementsByTagName("template")[0]
const registerPageTemplate = document.getElementsByTagName("template")[1]
const mainPageTemplate = document.getElementsByTagName("template")[2]

function loadPage(template){
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}

function showappContent() {
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
  }
  
//showregisterContent();