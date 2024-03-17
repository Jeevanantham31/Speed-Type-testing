window.addEventListener("load", init);

let score =0;
let isPlaying;
let time=3;
let t1=3;

const yourSec = document.querySelector("#ur-sec");
const wordInput = document.querySelector("#type-box");
const currentword = document.querySelector("#current-word");
const text = document.querySelector("#type-box");
const msg = document.querySelector("#msg");
const timeleft = document.querySelector("#time-left");
const scoredisplay = document.querySelector("#score");
const seconds = document.querySelector("#seconds");
const highscore = document.querySelector("#high-score");



const words = [
        "apple", "banana", "cat", "dog", "elephant", "fish", "giraffe", "hat", "ice", "jungle",
        "kite", "lion", "monkey", "night", "orange", "penguin", "queen", "rabbit", "snake", "turtle",
        "umbrella", "vase", "water", "xylophone", "yacht", "zebra", "adventure", "blue", "circle", "diamond",
        "energy", "flower", "green", "happiness", "island", "jewel", "kangaroo", "leaf", "mountain", "nature",
        "ocean", "puzzle", "quartz", "rose", "sun", "tree", "universe", "volcano", "wind", "xenon",
        "yellow", "zephyr", "autumn", "beach", "canyon", "desert", "eclipse", "forest", "galaxy", "horizon",
        "iceberg", "jungle", "knight", "lagoon", "moon", "nebula", "oasis", "planet", "quill", "river",
        "star", "tornado", "valley", "waterfall", "explore", "yawn", "zenith", "alchemy", "breeze", "cliff",
        "dawn", "echo", "flame", "glacier", "harbor", "illusion", "jazz", "kaleidoscope", "lunar", "mystery",
        "nova", "orbit", "prism", "quest", "renaissance", "symphony", "twilight", "utopia", "voyage", "whirlwind",
        "exotic", "yield", "zen", "archipelago", "brilliance", "cascade", "dew", "emerald", "fjord", "glimmer",
        "horizon", "infinity", "jubilee", "kismet", "luminous", "mirage", "nirvana", "opal", "phoenix", "quasar",
        "rainbow", "sapphire", "talisman", "undulate", "vortex", "wanderlust", "xanadu", "yearning", "zenith","Array",
        "typeof","instance", "isArray","check", "determine","identify","validate", "ascertain", "confirm","detect",
        "inspect","examine","analyze","explore","verify","assess","differentiate","classify","characterize","categorize","gauge",
        "reckon","distinguish","diagnose","survey","deduce", "establish","learn","discern","understand","study",
        "probe","monitor","observe","scrutinize","recognize","dissect","interpret","delve","fathom","comprehend","judge","rate",
        "rank","measure","estimate","evaluate", "compute","enumerate","count","sum","aggregate","calculate","tally",
        "quantify","total","tabulate","inventory","index","itemize","list", "arrayType","collection","assortment","plethora","cluster",
        "congregation","compilation","alignment", "arrangement","distribution","assortment","collection","assembly","gathering","stockpile",
        "multitude","arrayed","ensemble","accumulation", "hoard","agglomeration","assemblage","compendium","stock","selection","pool",
        "mix","range","array-like", "pile","stack","group","host","batch","mass","assemblage","conglomeration"
];

function init() {
    
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown,1000);
    setInterval(checkStatus,50);

}
function startMatch(){
   if(matchWords()){
    isPlaying = true;
    time = t1 +1;
    showWord(words);
    wordInput.value = '';
    score++;
    }

    if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
    } 
    else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
    }

    if (sessionStorage['highscore'] >= 0) {
      highscore.innerHTML = sessionStorage['highscore'];
    }

    if (score === -1) {
        scoredisplay.innerHTML = 0;
    } else {
       scoredisplay.innerHTML = score;
    }
}

function matchWords(){
    if(wordInput.value === currentword.innerHTML){
        msg.innerHTML = 'Correct!!!';
        msg.style.color = 'green';
        msg.style.padding = '15px 0px'
        msg.style.fontSize = '55px';
        return true;
      }
      else{
         msg.innerHTML ='';
         return false;
      }
}
// setInterval(() => {
   
// }, 2000);

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentword.innerHTML = words[randIndex];
}
function countdown(){
 if(time > 0){
  time--;
 }   
 else if(time ===0){
 isPlaying = false;
 }
 timeleft.innerHTML = time;
}
function checkStatus(){
    if(!isPlaying && time===0){
        msg.innerHTML = 'Game Over!!!';
        msg.style.color = 'red';
        msg.style.padding = ' 12px 0px' ;
        msg.style.fontSize = '55px';
        score = 0;
    }
}