let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
 userseq = [];
 level++;
 h2.innerText = `level ${level}`;
 let rand = Math.floor(Math.random() * 3);
 let randomcolor = btns[rand];
 let randbtn = document.querySelector(`.${randomcolor}`);
 gameseq.push(randomcolor)
 console.log(gameseq);
 gameflash(randbtn);
}

function checkanw(idx) {
    if(userseq[idx]==gameseq[idx]){
        console.log("same value");
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `game over! your score is <b> ${level-1} </b> <br> press any key to start new game`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnpress() {
   // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkanw(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
    for(btn of allbtn){
        btn.addEventListener("click", btnpress);
    }

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}