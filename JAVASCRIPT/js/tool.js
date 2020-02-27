//获取元素节点
function $(id){
    return document.getElementById(id);
}
//随机颜色
function randomColor(){
    return "rgb(" + Math.random() * 256 + ", " + Math.random() * 256 + ", " + Math.random() * 256 + ")";
}

//获取有效样式兼容函数
function getStyle(node, attr){
    if(node.currentStyle){
        return node.currentStyle.attr;
    }else{
        return getComputedStyle(node)[attr];
    }
}

//获取窗口宽度
function getWith(){
    return document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
}

//获取窗口高度
function getHeight(){
    return document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
}

//可拖曳(面向过程)
function drag(node){
    //鼠标按下触发
    $(node).onmousedown = function(ev){
        var e1 = ev || window.event;
        //获取鼠标与窗口的相对距离；
        var xx = e1.clientX - $(node).offsetLeft;
        var yy = e1.clientY - $(node).offsetTop;
        //鼠标移动触发
        document.onmousemove = function(ev){
            var e2 = ev || window.event;
            if(e2.clientX - xx < 0){
                $(node).style.left = 0;
            }else if(e2.clientX - xx > getWith() - $(node).offsetWidth){
                $(node).style.left = getWith() - $(node).offsetWidth + "px";
            }else{
                $(node).style.left = e2.clientX - xx + "px";
            }
            if(e2.clientY - yy < 0){
                $(node).style.top = 0
            }else if(e2.clientY - yy > getHeight() - $(node).offsetHeight){
                $(node).style.top = getHeight() - $(node).offsetHeight + "px";
            }else{
                $(node).style.top = e2.clientY - yy + "px";
            }
        }
    }
    //鼠标松开触发
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}
