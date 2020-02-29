function $ajax({method = "get", url, data, success, error}){
    let xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //读取并拼接查询字符串
    if(data){
        data = querystring(data);
    }
    //将查询字符串拼接到GET请求的url上
    if(method == "get" && data){
        url += "?" + data;
    }
    xhr.open(method, url, true);
    if(method == "get"){
        xhr.send();
    }else{
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                if(success){
                    success(xhr.responseText);
                };
            }else{
                if(error){
                    error("error: " + xhr.status);
                };
            }
        }
    }
}

function querystring(obj){
    for(let attr in obj){
        let str = ""
        str += attr + "=" + obj[attr] + "&";
    }
    return str.substring(0, str.length - 1);
}
