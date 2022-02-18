fetch (`http://localhost:3000/indicadores`)
.then(r =>{
    return r.json()
})
.then(corpo => {
    document.getElementById('ipca').innerHTML=corpo[1].valor+'%';
    document.getElementById('cdi').innerHTML=corpo[0].valor+'%';     
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
    
    document.getElementById('resultado').style.visibility = 'visible'
    document.getElementById("btnSimular").style.background = "#FF8631"; 
    
    let inputAporte = document.getElementById('aporte').value;
    let cleanAporte = inputAporte.replace(/[^0-9,]*/g, '').replace(',', '.');
    let valorAporte = parseFloat(cleanAporte);

    let inputAporteMes = document.getElementById('aporteMes').value;
    let cleanAporteMes = inputAporteMes.replace(/[^0-9,]*/g, '').replace(',', '.');
    let valorAporteMes = parseFloat(cleanAporteMes);

    var inputPrazo = document.getElementById('prazo').value;  
    let cleanPrazo = inputPrazo.replace(/[^0-9,]*/g, '').replace(',', '.');
    let newPrazo = parseFloat(cleanPrazo);


    let valorInvestido = valorAporte + (valorAporteMes*newPrazo);
    if(valorAporte === '' || valorAporteMes === ''){
        valorAporte = 0;
        valorAporteMes = 0;        
    } 
    console.log('Valor Total Investido ' + valorInvestido.toFixed(2));     //VALOR SOMA DOS 2 VALORES OK
    let taxa= 1.05;
   // let valorAdicional = 100;
  //  let valorTotal = 0;      
    var montanteAporteInicial = valorAporte * Math.pow((1+(taxa/100)), newPrazo);
    console.log('Aporte Inicial com Juros é ' + montanteAporteInicial.toFixed(2));                                  //APORTE INICIAL  COM JUROS OK

    let valorTotal = 0;
    let valorAdicional = valorAporteMes;
    let quantidadeMeses = newPrazo;
   for (let contador = 1; contador <= quantidadeMeses; contador++) {
   valorTotal = (valorTotal + valorAdicional) * taxa;
   }
  console.log('Valor total Bruto ' +valorTotal.toFixed(2));   //valor bruto

 

  console.log('Valor total Bruto ' +valorTotal.toFixed(2));   //valor bruto
  
     

    if(inputPrazo === ''){
        document.getElementById("hrAviso").style.background = 'red';
        document.getElementById("prazoMes").style.color = 'red';  
        document.getElementById("msgAviso").style.visibility = 'visible'
    }if(inputPrazo !==''){
        document.getElementById("hrAviso").style.background = '';
        document.getElementById("prazoMes").style.color = 'black';  
        document.getElementById("msgAviso").style.visibility = 'hidden';
           

      



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
   
    if(escolha1 ==='0' && escolha2==='4' || escolha1 ==='1' && escolha2==='4' ){
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
        
        if(escolha1 ==='2' && escolha2==='4'){
        document.getElementById('finalBr').innerHTML =     ('R$ ' + (body[4].valorFinalBruto));
        document.getElementById('ir').innerHTML =          (body[4].aliquotaIR + ' %');
        document.getElementById('vlPago').innerHTML =      ('R$ ' + (body[4].valorPagoIR));
        document.getElementById('finalLi').innerHTML =     ('R$ ' + (body[4].valorFinalLiquido));
        document.getElementById('totalInv').innerHTML =    ('R$ ' + (body[4].valorTotalInvestido));
        document.getElementById('ganhoLiq').innerHTML =    ('R$ ' + (body[4].ganhoLiquido));
            console.log("LÍQUIDO-PÓS")
        }
                   
        if(escolha1 ==='2' && escolha2==='5'){
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

}
