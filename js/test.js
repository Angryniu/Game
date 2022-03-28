//IFFE
(function(){
    window.Game = function(){
        this.name="你好";
        this.show();
    }
    Game.prototype.show=function(){
        alert("执行了")
        console.log(2);
    }
    
})()