// function LimitDrag(id){
//     Drag.call(this, id);
// }

// for(var funcName in Drag.prototype){
//     LimitDrag.prototype[funcName] = Drag.prototype[funcName];
// }

// LimitDrag.prototype.dragMove = function(ev){
//     var e = ev || window.event;
//     var l = e.clientX - this.xx;
//     var t = e.clientY - this.yy;
//     var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
//     if(l < 0){
//         l = 0;
//     }else if(l > windowWidth - this.eDiv.offsetWidth){
//         l = windowWidth - this.eDiv.offsetWidth
//     }
//     if(t < 0){
//         t = 0
//     }else if(t > windowHeight - this.eDiv.offsetHeight){
//         t = windowHeight - this.eDiv.offsetHeight
//     }
//     this.eDiv.style.left = l + "px";
//     this.eDiv.style.top = t + "px";
// }

class LimitDrag extends Drag{
    constructor(id){
        super(id);
    }
    dragMove = function(ev){
        var e = ev || window.event;
        var l = e.clientX - this.xx;
        var t = e.clientY - this.yy;
        var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if(l < 0){
            l = 0;
        }else if(l > windowWidth - this.eDiv.offsetWidth){
            l = windowWidth - this.eDiv.offsetWidth
        }
        if(t < 0){
            t = 0
        }else if(t > windowHeight - this.eDiv.offsetHeight){
            t = windowHeight - this.eDiv.offsetHeight
        }
        this.eDiv.style.left = l + "px";
        this.eDiv.style.top = t + "px";
    }
}