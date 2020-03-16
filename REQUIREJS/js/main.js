require.config({
    paths: {
        "index": "demo/index",
        "scale": "demo/scale",
        "drag": "demo/drag"
    }
})


require(["index"], function(index){
    index.init();
})
