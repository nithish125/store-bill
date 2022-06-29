var bat = document.getElementById("bat-qt");
var batr = document.getElementById("bat-rate").innerText;
batr.value = 20000;
var ball = document.getElementById("ball-qt")
var ballr = document.getElementById("ball-rate")
//var x = document.getElementById("btotal").innerHTML;
ballr.value = 200
//var ballr=ballr.value;
var stemp = document.getElementById("stemp-qt");
var stempr = document.getElementById("stemp-rate");
stempr.value = 1000;
 btotal.value = 0;
 batotal.value = 0;
stemptotal1.value = 0;
x=0;
ball.addEventListener("click", balltotal);
function balltotal() {
    btotal.value = ((ball.value) * (ballr.value));
    console.log(btotal.value)
    document.getElementById("btotal").innerHTML = btotal.value
    call()

}
bat.addEventListener("click", battotal);

function battotal() {

    batotal.value = ((bat.value) * (batr));
    console.log(batotal.value)
    document.getElementById("batotal").innerHTML = batotal.value
    call()
}
stemp.addEventListener("click", stemptotal);
function stemptotal() {

    stemptotal1.value= ((stemp.value) * (stempr.value));
    console.log(stemptotal1.value)
    x=document.getElementById("stemptotal1").innerHTML = stemptotal1.value;

}
function call() {
    let result1 = batotal.value+x+btotal.value;
    console.log(result1)
    document.getElementById("total").innerHTML=result1;
    let tax1=((18/100)*result1)
    document.getElementById("tax").innerHTML=tax1;
    let grand1=tax1+result1;
    document.getElementById("grand").innerHTML=grand1;
}
// var bb
// bb=rice1+rice;
// console.log(bb)
// document.getElementById("ball-rate").innerHTML.value=ballr;
// console.log(ballr);