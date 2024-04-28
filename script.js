//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

const startBtn = document.querySelector('#start-btn');
const input = document.querySelector('#input');
const sentence = document.querySelector('#sentence');

//Start Button Logic 

startBtn.addEventListener('click' , ()=>{
    input.disabled = false;
    startBtn.disabled = true;

    sentence.innerText = sentences;

    let seconds = 6;

    let time = setInterval(()=>{
        if(seconds==0){
            document.querySelector('#result').style.display = 'block';
            input.disabled = true;
            clearInterval(time);
            calculateSpeed();
        }
        document.querySelector('#timer').innerText = seconds;
        seconds--;
    },1000)

});


// Retry Button Logic 

const retryBtn = document.querySelector('#retry-btn');

retryBtn.addEventListener('click' , ()=>{
    document.querySelector('#result').style.display = 'none';
    startBtn.disabled = false;
    document.querySelector('#timer').innerText = '';
    input.value = '';
});

function calculateSpeed(){
    const sentenceArr = sentences.split(' ');
    const typeWord = input.value.split(' ');
    let correct = 0;

    for(let i = 0; i<sentenceArr.length; i++){
        if(sentenceArr[i] == typeWord[i]){
            correct++;
        }
    }

    const speed = (correct/30) * 60; // Calculate Speed
    const accuracy = (correct / input.value.length) * 100; // Calculate accuracy

    document.querySelector('#speed').innerText = `${speed}`;
    document.querySelector('#accuracy').innerText = `${accuracy.toFixed(2)}`;
}