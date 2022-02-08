    function btnLiquido(){
    document.getElementById("btnLiq").style.background = "orange";
    document.getElementById("btnBr").style.background = "transparent";
    var nome_usuario = 'nome';
}
setNome('lucas');
console.log(nome_usuario);



function btnBruto(){
    document.getElementById("btnBr").style.background = "orange";
    document.getElementById("btnLiq").style.background = "transparent";
}



function pos(){    
    document.getElementById("btnPos").style.background = "orange";
    document.getElementById("btnPre").style.background = "transparent";
    document.getElementById("btnFixado").style.background = "transparent";
}

function pre(){    
    document.getElementById("btnPre").style.background = "orange";
    document.getElementById("btnPos").style.background = "transparent"; 
    document.getElementById("btnFixado").style.background = "transparent"; 
}

function fixado(){
    document.getElementById("btnFixado").style.background = "orange";
    document.getElementById("btnPre").style.background = "transparent"; 
    document.getElementById("btnPos").style.background = "transparent";  
}





/*var reply_click = function(){

    escolha = this.id;
    if(escolha === "btnPre"){
        document.getElementById(escolha).style.background = "orange"; 
        document.getElementById("btnPos").style.background = "transparent"; 
        document.getElementById("btnFixado").style.background = "transparent"; 

    }if(escolha ==="btnPos"){
        document.getElementById(escolha).style.background = "orange"; 
        document.getElementById("btnPre").style.background = "transparent";
        document.getElementById("btnFixado").style.background = "transparent";

    }if(escolha === "btnFixado"){
        document.getElementById(escolha).style.background = "orange"; 
        document.getElementById("btnPre").style.background = "transparent"; 
        document.getElementById("btnPos").style.background = "transparent";        
    }
}

    
document.getElementById('btnPos').onclick = reply_click;
document.getElementById('btnFixado').onclick = reply_click;
document.getElementById('btnPre').onclick = reply_click;

*/