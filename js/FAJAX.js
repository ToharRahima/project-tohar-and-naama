class FAJAX {
  constructor(){}
    open(method, url, content){
        this.method = method;
        this.url = url;
        this.content = content
    }
    send (){
        const res = network(this);
        this.onload(res)
    }
  }

  /*

   constructor(height, width) {
    this.height = height;
    this.width = width;


const X = new FAJAX()
X.open("get", "server/api/...", {nem;"...", password:"..."})
{
method:get

}
X.onload = function
x.send()
*/