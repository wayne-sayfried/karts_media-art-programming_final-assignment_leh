let words = []; let lines = [];
let index = 0; let f; let r = 2.5;//r for frameRate

let n = 52; //n for noun 명사 
let a = 14;//a for adjective 형용사
let v = 18; //v for verb 동사
let p = 54; //p for postposition 조사
let d = 3;//d for determiner 관형사
let ad = 9; //ad for adverb 부사
let l = 323; //l for letters 총 글자 수

function preload() {
    lines = loadStrings("data/게릴라.txt");
    f = loadFont('data/NotoSansKR-Regular.otf');
}

function setup() {
    createCanvas(1440, 900);
    textFont(f);
    let entireplay = join(lines, "");
    print(entireplay);
    words = splitTokens(entireplay, "\n ;[.{");
}

function draw() {
    background(0);
    displayLetters();
}

function displayLetters(){
  frameRate(r);
  textSize(500);
  textAlign(CENTER);
  fill(200);
  index++;
  if (index == 1) { //제목
    frameRate(0.5);
    text(words[index], width / 2, height / 1.6);
    fill(200);
    rect(width/25, height/2*1.4, width-width/9, height/20);
    textSize(100);
    text('ⓒYYY, 2022',width-width/4, height/2*1.75);
  
  //연갈이
  } else if (index == 19 || index == 34 || index == 48 || index == 61 || index == 76 || index == 91 || index == 105 || index == 123) {
    frameRate(1);
    fill(200);
    ellipse(width/2, height/2, height/2);
  
  } else if (index >= 2) {
    text(words[index], width / 2, height / 1.5);
  }
}