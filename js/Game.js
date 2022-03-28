(function(){
    window.Game = function(){
        this.row = 20;
        this.col = 17;
        this.init();
        let block = new Block();
    }
    Game.prototype.init=function(){
        //渲染表格
        let $table = document.createElement('table');
        // $table.innerText='<table></table>';
        for(let i=0;i<this.row;i++){
            let $tr = document.createElement('tr');
            // $tr.innerText = '<tr></tr>';
            for(let j =0;j<this.col;j++){
                let $td = document.createElement('td');
                // $td.innerText = '<td></td>';
                $tr.appendChild($td)
            }
            $table.appendChild($tr)
        }
        document.querySelector("body").appendChild($table)
    }

})()