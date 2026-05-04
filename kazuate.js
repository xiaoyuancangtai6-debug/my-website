let r = 0;
let max = 0;

function setlevel(lv) {
    if (lv=="easy"){
        max=50;
    } else if (lv=="normal"){
        max=100;
    } else if (lv=="hard"){
        max=500;
    }
    
    document.getElementById("startbtn").disabled=false;
    document.getElementById("result").textContent="難易度を選択した！ゲームを開始しよう！";
}

function judge() {
    let a = document.getElementById("num").value;
    document.getElementById("result").innerHTML = a;
    if (r == 0){
        document.getElementById("result").textContent = "難易度を選択して！"
    }else if (r == a){
        document.getElementById("result").textContent = "正解！！！"
    }
     else if (Math.abs(r-a) <= 5){
        document.getElementById("result").textContent = "すごく近い！！"
    }
    else if (5 < Math.abs(r-a) && Math.abs(r-a) < 10){
        document.getElementById("result").textContent = "近い！"
    }
   
    else{
        document.getElementById("result").textContent = "不正解！"
    }
}

function random() {
    if (max == 0){
        document.getElementById("result").textContent="先に難易度を選ぼう！"
    }
    r = Math.floor(Math.random()*max)+1;
    document.getElementById("result").textContent = "ゲームスタート！　1~"+max+"　の数字を予想してね！"
}