define(function() {
    function scale(node1, node2){
        node2.onmousedown = function(ev){
            let e = ev || window.event;
            let xx = node1.offsetWidth - e.clientX;
            let yy = node1.offsetHeight - e.clientY;
            document.onmousemove = function(ev){
                let e = ev || window.event;
                node1.style.width = e.clientX + xx + "px";
                node1.style.height = e.clientY + yy + "px";
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }

    return {
        scale: scale
    }
});