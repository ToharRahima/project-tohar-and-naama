class FAJAX {
    open(method, url, content){
        this.method = method;
        this.url = url;
        this.content = content
    }
    send (){
        
        const res = network(this);
        console.log('res: ', res);
        this.onload(res)

    }
  }

//

  /*

   constructor(height, width) {
    this.height = height;
    this.width = width;


X = new FAJAX
X.open(method (get, post, delete), url
X.onload = function
x.send( body-optional )
*/