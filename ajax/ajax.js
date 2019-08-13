//创建XHR对象,兼容
function createXHR() {
  var xhr = null
  try{
    // Firefox, Opera 8.0+, Safari，IE7+
    xhr = new XMLHttpRequest()
  }catch(e){ 
    try{
      // Internet Explorer
      xhr = new ActiveXObject('Msxml2.XMLHTTP')
    }catch(e){
      try{
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }catch(e){
        xhr = NULL
      }
    }
  }
  return xhr;
}
var xhr = createXHR();
console.log("1"+xhr);

//注册回调函数
xhr.onreadystatechange = callbacks;

xhr.open('get',"http://localhost:99?a=1&b=2&c=3")
//xhr.open('post','http://localhost:99')
xhr.setRequestHeader('Content-Type',"application/json")
xhr.send()

function callbacks() {
  console.log(xhr.readyState + '-' + xhr.status)
  if(xhr.readyState == 4 && xhr.status == 200){

    var data = xhr.responseText;
    console.log(data)
  }
}