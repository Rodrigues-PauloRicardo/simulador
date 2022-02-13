function simular(){
    document.getElementById("btnSimular").style.background = "orange";
    fetch (`http://localhost:3000/simulacoes`)
.then(res =>{
    return res.json()
})
.then(body => {
    document.getElementById('ir').innerHTML=(body[3].aliquotaIR +' %')
           
})     
}