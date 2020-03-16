define(function(){
    function drag(node){
        node.onmousedown = function(ev){
            let e = ev || window.event;
            let xx = e.clientX - node.offsetLeft;
            let yy = e.clientY - node.offsetTop;
            document.onmousemove = function(ev){
                let e = ev || window.event;
                node.style.left = e.clientX - xx + "px";
                node.style.top = e.clientY - yy + "px";
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }

    return {
        drag: drag
    }
})