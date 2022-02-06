fetch (`http://localhost:3000/indicadores`)
.then(r =>{
    return r.json()
})
.then(corpo => {
    document.getElementById('ipca').innerHTML=corpo[0].valor+'%';
    document.getElementById('cdi').innerHTML=corpo[1].valor+'%';     
})


function simular(){
    alert ("ok")
}