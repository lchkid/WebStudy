// 构造原型链
// function Drag(id){
//     this.eDiv = document.getElementById(id);
//     this.eDiv.onmousedown = this.dragDown.bind(this);
//     this.eDiv.onmouseup = this.dragUp.bind(this);
// }

// Drag.prototype.dragDown = function(ev){
//     var e = ev || window.event;
//     this.xx = e.offsetX;
//     this.yy = e.offsetY;
//     document.onmousemove = this.dragMove.bind(this);
// }

// Drag.prototype.dragMove = function(ev){
//     var e = ev || window.event;
//     this.eDiv.style.left = e.clientX - this.xx + "px";
//     this.eDiv.style.top = e.clientY - this.yy + "px";
// }

// Drag.prototype.dragUp = function(){
//     document.onmousemove = null;
// }

//ES6 class
class Drag{
    constructor(id){
        this.eDiv = document.getElementById(id);
        this.eDiv.onmousedown = this.dragDown.bind(this);
        this.eDiv.onmouseup = this.dragUp.bind(this);
    }
    dragDown = function(ev){
        var e = ev || window.event;
        this.xx = e.offsetX;
        this.yy = e.offsetY;
        document.onmousemove = this.dragMove.bind(this);
    }
    dragMove = function(ev){
        var e = ev || window.event;
        this.eDiv.style.left = e.clientX - this.xx + "px";
        this.eDiv.style.top = e.clientY - this.yy + "px";
    }
    dragUp = function(){
        document.onmousemove = null;
    }
}