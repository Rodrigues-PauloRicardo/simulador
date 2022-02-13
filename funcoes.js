document.getElementsByName("btn").forEach( function(button) {    
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.id; 

    
    if(id === 'btnBr'){
        document.getElementById("btnBr").style.background = "orange";
        document.getElementById("btnLiq").style.background = "transparent";
        console.log('Botão Bruto');
    }if(id === 'btnLiq'){
        document.getElementById("btnLiq").style.background = "orange";
        document.getElementById("btnBr").style.background = "transparent";
        console.log('Botão Líquido');
    }       
  });  

});
  document.getElementsByName("btn2").forEach( function(button) {    
        button.addEventListener("click", function(event) {
        const el = event.target || event.srcElement;
        const id = el.id;
        if(id === 'btnPre'){
            document.getElementById("btnPre").style.background = "orange";
            document.getElementById("btnPos").style.background = "transparent"; 
            document.getElementById("btnFixado").style.background = "transparent"; 
            console.log('Pré');
        } if(id === 'btnPos'){
            document.getElementById("btnPos").style.background = "orange";
        document.getElementById("btnPre").style.background = "transparent";
        document.getElementById("btnFixado").style.background = "transparent"; 
        console.log('Pós');
        }if(id === 'btnFixado'){
            document.getElementById("btnFixado").style.background = "orange";
        document.getElementById("btnPre").style.background = "transparent"; 
        document.getElementById("btnPos").style.background = "transparent";
        console.log('Fixado'); 
        }

    });
});


    








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