function btnLiquido(){
    document.getElementById("btnLiq").style.background = "orange";
    document.getElementById("btnBr").style.background = "transparent";
}
function btnBruto(){
    document.getElementById("btnBr").style.background = "orange";
    document.getElementById("btnLiq").style.background = "transparent";
}

function fixado(){
    document.getElementById("btnPre", "btnPos").style.background = "transparent";
    document.getElementById("btnFixado").style.background = "orange";
}
function pre(){
    document.getElementById("btnFixado", "btnPos").style.background = "transparent";
    document.getElementById("btnPre").style.background = "orange";
}
function pos(){
    document.getElementById("btnPre", "btnFixado").style.background = "transparent";
    document.getElementById("btnPos").style.background = "orange";
}


var reply_click = function()
{
    escolha = this.id;
        document.getElementById(escolha).style.background = "orange";  
        console.log(escolha);    
       
    }
        
    
    
    
document.getElementById('btnPos').onclick = reply_click;
document.getElementById('btnFixado').onclick = reply_click;
document.getElementById('btnPre').onclick = reply_click;


