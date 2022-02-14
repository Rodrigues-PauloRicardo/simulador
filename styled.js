    const btn1 = document.getElementById("btn01");
    const btn2 = document.getElementById("btn02");    
        btn1.addEventListener("click", function () {
        btn1.style.background= "orange";
        btn2.style.background= "transparent";
        });
        btn2.addEventListener("click", function () {
        btn1.style.background= "transparent";
        btn2.style.background= "orange";
        });

    const btn3 = document.getElementById("btn03");
    const btn4 = document.getElementById("btn04");
    const btn5 = document.getElementById("btn05"); 
        btn3.addEventListener("click", function () {
        btn3.style.background= "orange";
        btn4.style.background= "transparent";
        btn5.style.background= "transparent";
        });
        btn4.addEventListener("click", function () {
        btn4.style.background= "orange";
        btn3.style.background= "transparent";
        btn5.style.background= "transparent"
        });
        btn5.addEventListener("click", function () {
        btn5.style.background= "orange";
        btn3.style.background= "transparent";
        btn4.style.background= "transparent"
        });
       