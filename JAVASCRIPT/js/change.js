//完美运动 css样式变化框架
function change(node, cssObj, complete){
    clearInterval(node.timer);
    node.timer = setInterval(() => {
        var isEnd = true;  //每隔30ms循环前假设已经完成运动
        for(var attr in cssObj){
            var nCur = parseInt(cssObj[attr]);
            if(attr == "opacity"){
                oCur = getStyle(node, attr) * 100;
            }else{
                oCur = parseInt(getStyle(node, attr));
            }
            var speed = (nCur - oCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(attr == "opacity"){
                oCur += speed;
                node.style.opacity = oCur / 100;
                node.style.filter = `alpha(opacity=${oCur})`;
            }else{
                node.style[attr] = oCur + speed + "px";
            }
            //循环末尾判断oCur是否全部到达目标值nCur
            if(oCur != nCur){
                isEnd = false;  //运动未完成，设判断值为假等待下一次30ms的新循环
            }
        }
        //若isEnd为假，定时器不关闭，继续运行上面的代码，直至isEnd = true
        if(isEnd){
            clearInterval(node.timer);
            if(complete){
                complete.call(node);
            }
        }
    }, 30);
}

function getStyle(node, attr){
    return node.currentStyle ? node.currentStyle[attr] : getComputedStyle(node)[attr];
}