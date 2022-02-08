fetch (`http://localhost:3000/indicadores`)
.then(r =>{
    return r.json()
})
.then(corpo => {
    document.getElementById('ipca').innerHTML=corpo[0].valor+'%';
    document.getElementById('cdi').innerHTML=corpo[1].valor+'%';     
})



fetch (`http://localhost:3000/simulacoes`)
.then(r =>{
    return r.json()
})
.then(body => {
    console.log(body[3].aliquotaIR);         
})         



function simular(){
   
    document.getElementById("btnSimular").style.background = "orange";

        }
    
        
      
  












/*


var reply_click = function(){
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