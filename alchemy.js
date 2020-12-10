'usestrict'

const all = document.getElementById("delete");
const future = document.getElementById("future");
const young = document.getElementById("young");
const start = document.getElementById("start");
const kids = document.getElementById("kids");
const item = document.getElementById("items");
const h1 = document.getElementById("h1");
const black = document.getElementById("black");
const white = document.getElementById("white");
const kSelect = document.getElementById("kids-select");
const iSelect = document.getElementById("items-select");

const img_list = ["./img/book.png";,"./img/textbook.png","./img/game.png","./img/smartphone.png","./img/A-girl.png","./img/B-boy.png","./img/C-boy.png","./img/A-study.png","./img/woman.png","./img/C-young.png","./img/family.png","./img/B-study.png","./img/neet.png"];

for(i = 0; i < img_list.length; i++){
  var res = document.createElement("img");
  res.src = img_list[i].white;
  document.head.appendChild(res);
  console.log("画像ロード");
  console.log(res);}
  
function selectItem(){
switch(iSelect.value){
  case "本":
  item.src = "./img/book.png";
  item.classList.remove("text");
  item.classList.add("items");
  break;
  case "問題集":
  item.src = "./img/textbook.png";
  item.classList.remove("items");
  item.classList.add("text");
  break;
  case "ゲーム":
  item.src = "./img/game.png";
  item.classList.remove("text");
  item.classList.add("items");
  break;
  case "スマホ":
  item.src = "./img/smartphone.png";
  item.classList.remove("text");
  item.classList.add("items");
  break;
}}
function selectKids(){
switch(kSelect.value){
  case "少女A": kids.src = "./img/A-girl.png";
  break;
  case "少年B": kids.src = "./img/B-boy.png";
  break;
  case "少年C": kids.src = "./img/C-boy.png";
  break;
}}

function startFunc(){
  switch(kSelect.value){
    case "少女A":
    young.src = "./img/A-study.png";
    future.src = "./img/woman.png";
    young.classList.add("A-young");
    young.classList.add("young-anime");
    young.classList.remove("young");
    future.classList.add("A-future");
    future.classList.add("future-anime");
    future.classList.remove("future");
    black.classList.add("black-anime");
    black.style.display = "block";
    h1.classList.add("h1-anime");
    h1.innerText = "大手弁護士事務所勤務。数年のうちに独立する予定";
    break;
    case "少年B":
    young.src = "./img/B-study.png";
    future.src = "./img/neet.png";
    young.classList.add("B-young");
    young.classList.add("young-anime");
    young.classList.remove("young");
    future.classList.add("B-future");
    future.classList.add("future-anime");
    future.classList.remove("future");
    black.classList.add("B-black-anime");
    black.style.display = "block";
    white.classList.add("white-anime");
    white.style.display = "block";
    h1.classList.add("h1-anime");
    h1.innerText = "親のスネをかじり続けてはや15年。年季のはったプロニート";
    break;
    case "少年C":
    young.src = "./img/C-young.png";
    future.src = "./img/family.png";
    young.classList.add("C-young");
    young.classList.add("young-anime");
    young.classList.remove("young");
    future.classList.add("C-future");
    future.classList.add("future-anime");
    future.classList.remove("future");
    black.classList.add("black-anime");
    black.style.display = "block";
    h1.classList.add("h1-anime");
    h1.innerText = "中堅メーカー勤務。今日は家族で温泉旅行";
    break;
}}

function endFunc(){
  if(kSelect.value != "少年B"){
    black.remove();
    white.remove();
  }
  future.classList.remove("future-anime");
  young.remove();
  h1.classList.remove("h1-anime");
  black.classList.remove("black-anime");
  black.classList.remove("B-black-anime");
  white.classList.remove("white-anime");
}

start.onclick = () =>{
  console.log(kSelect.value);
  all.remove();
  h1.innerText = "";
  startFunc();
  setTimeout("endFunc()",9000);
}

