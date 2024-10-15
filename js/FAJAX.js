class FAJAX {
    open(method, url, content){
        this.method = method;
        this.url = url;
        this.content = content
    }
    send (){
        const res = network(this)
        this.onload(res);
    }
  }

//

  /*

   constructor(height, width) {
    this.height = height;
    this.width = width;


const X = new FAJAX()
X.open(method (get, post, delete), url
X.onload = function
x.send()
*/