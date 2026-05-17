let janken=["グー","チョキ","パー"];
let message;
let win = 0;
let lose = 0;
let streak = 0;


function init(){
    win = 0;
    message = "";
    
    document.getElementById("okbtn").disabled=false;
    document.getElementById("result").innerHTML = message;
}

function judge(){
    let comp = Math.floor(Math.random() * 3);
    let elements = document.getElementsByName('jk');
    let user;


    for (let i = 0; i < elements.length; i++)
        if (elements.item(i).checked) user = i;

    message ="あなたの手:" + janken[user] + "<br>";
    message +="コンピュータの手:" + janken[comp] + "<br>";

    if(user == comp){
    message += "あいこ！もう一回！<br>";
}
else if(
    (user == 0 && comp == 1) ||
    (user == 1 && comp == 2) ||
    (user == 2 && comp == 0)
){
    message += "あなたの勝ち！<br>";
    win++;
    streak++;
    message += streak +"連勝！";
    document.getElementById("winsound").play();
}
else{
    message += "あなたの負け！<br>";
    lose++;
    streak=0;
    document.getElementById("losesound").play();
}

if(user == undefined){
    message = "手を選んでください！";
    document.getElementById("result").innerHTML = message;
    return;
}
    
    document.getElementById("result").innerHTML = message;
}

