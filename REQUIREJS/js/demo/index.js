define(["scale","drag"], function(scale, drag){
    function init(){
        const oBtn = document.getElementById("btn");
        const oDiv1 = document.getElementById("div1");
        const oDiv2 = document.getElementById("div2");
        const oDiv3 = document.getElementById("div3");
        oBtn.onclick = function(){
            oDiv1.style.display = "block";
        }
        scale.scale(oDiv1, oDiv2);
        drag.drag(oDiv3);
    }

    return {
        init: init
    }
});