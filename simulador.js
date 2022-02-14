fetch (`http://localhost:3000/indicadores`)
.then(r =>{
    return r.json()
})
.then(corpo => {
    document.getElementById('ipca').innerHTML=corpo[0].valor+'%';
    document.getElementById('cdi').innerHTML=corpo[1].valor+'%';     
})


      
array = ['0'];    
function arrayBotao(id){
array.push(id);
}
arrayA = ['0'];    
function arrayBotao1(id){
 arrayA.push(id);
}

function simular(){

    document.getElementById("btnSimular").style.background = "orange";  
    
    
    var input = document.getElementById('aporte').value;
    var aporte = parseInt(input);   

    var input = document.getElementById('prazo').value;
    var prazoMes = parseInt(input);

    var input = document.getElementById('aporteMes').value;
    var aporteMensal = parseInt(input);

    // var renta = document.getElementById('rentabilidade') 

    var totalInvestido = aporte + (prazoMes*aporteMensal)

    console.log(aporte);
    console.log(prazoMes);
    console.log(aporteMensal);

    console.log(totalInvestido);
   
          






    fetch (`http://localhost:3000/simulacoes`)
.then(res =>{
    return res.json()
})
.then(body => {
                 
    
    array.forEach(element => {            
    var ultimo = (element.slice(-1)[0]); 
    escolha1 = ultimo;    
    });
    arrayA.forEach(element => {            
    var ultimoA = (element.slice(-1)[0]); 
    escolha2 = ultimoA;    
    }); 

    if(escolha1 ==='0' && escolha2==='0' || escolha1 ==='1' && escolha2 === '3'){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[0].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[0].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[0].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[0].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[0].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[0].ganhoLiquido));
        console.log("BRUTO-PRÉ")
    }
   
    if(escolha1 ==='1' && escolha2==='4' || escolha1 ==='0' && escolha2==='4' ){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[1].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[1].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[1].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[1].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[1].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[1].ganhoLiquido)); 
                   
        console.log("BRUTO-PÓS")
    }
        
        if(escolha1 ==='0' && escolha2==='5' || escolha1 ==='1' && escolha2==='5'){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[2].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[2].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[2].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[2].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[2].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[2].ganhoLiquido)); 
            console.log("BRUTO-FIXADO")
        }
       
        
        if(escolha1 ==='2' && escolha2==='0' || escolha1 ==='2' && escolha2==='3'){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[3].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[3].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[3].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[3].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[3].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[3].ganhoLiquido));
            console.log("LÍQUIDO-PRÉ")
        } 
        
        if(escolha1 ==='0' && escolha2==='4' || escolha1 ==='2' && escolha2==='4'){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[4].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[4].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[4].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[4].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[4].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[4].ganhoLiquido));
            console.log("LÍQUIDO-PÓS")
        }
                   
        
        if(escolha1 ==='0' && escolha2==='5' || escolha1 ==='2' && escolha2==='5'){
            document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[5].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[5].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[5].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[5].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[5].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[5].ganhoLiquido));
            console.log("LÍQUIDO-FIXADO")
        }        

});
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