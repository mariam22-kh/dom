// plus
var btn_plus=document.querySelectorAll(".plus")

for (let i = 0; i < btn_plus.length; i++) {
    
    btn_plus[i].addEventListener('click',inc)
}

function inc(e) {
    var cible=e.target
    var par=cible.parentElement
    var parP=par.querySelector('p')
    var counter=Number(parP.innerHTML)
    

    counter++
    parP.innerHTML=counter
    var tr=par.parentElement.parentElement
    var pu=Number(tr.querySelector(".unitPrice").innerHTML)
    var total=counter*pu
    tr.querySelector(".price").innerHTML=total
    sum()
}

// moin
var btn_minus=document.querySelectorAll(".minus")

for (let j = 0; j < btn_minus.length; j++) {
    btn_minus[j].addEventListener('click',tnk)

}

function tnk(s) {

    var cible=s.target
    var par=cible.parentElement
    var parP=par.querySelector('p')
    var counter=Number(parP.innerHTML)
    counter--
   

    if(counter>=0){
        parP.innerHTML=counter
        var tr=par.parentElement.parentElement
        var pu=Number(tr.querySelector(".unitPrice").innerHTML)
        var total=counter*pu
        tr.querySelector(".price").innerHTML=total
    }
    sum()


}

// like
var btn_like=document.querySelectorAll(".like")
for (let o = 0; o < btn_like.length; o++) {
    btn_like[o].addEventListener('click',snk)    
}
function snk(i) {
    var cible=i.target
    if (cible.style.color!=="red"){
        cible.style.color="red"
    }
    else{
        cible.style.color="#424242"
    }
}

// DELITE
var btn_del=document.querySelectorAll(".delete")
for (let t = 0; t < btn_del.length; t++) {
    btn_del[t].addEventListener('click',ert)
}
function ert(z) {
    var cible=z.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    tr.querySelector(".price").innerHTML=0
    sum()
    
    tr.remove()
}

// total
var totall=document.querySelectorAll(".price")
function sum() {
    var summ=0
    for (let i = 0; i < totall.length; i++) {
        summ=summ+Number(totall[i].innerHTML)
        document.getElementById("total").innerHTML=summ
    

    }
    
    
}


    
 
