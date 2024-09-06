
const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");



let headsCount = 0;
let tailsCount = 0;

function processResult(result){

    if(result === 'heads'){
        headsCount++;
        heads.innerHTML = headsCount;
    }else{
        tailsCount++;
        tails.innerHTML = tailsCount;
    }

    statusLabel.innerText = result.toUpperCase();
}


function flipCoin(){
    // counting of how many times you got either head or tail

    const random = Math.random();
    // flipping TimeRanges, if the time is less than 0.5 then heads,
    //  if greater than then tails achieved using tenary operatiosn
    const result = random < 0.5 ? 'heads' : 'tails';
//  the time it takes for each flip to stop and another starts. timeout function. to stop flippping
    setTimeout(() => {
            coin.setAttribute('class','animate-' + result);

            setTimeout(() => {
                    processResult(result);
                    //  timeout function the 2900 time is equal to 3secs 
            }, 2900);

    }, 100);
}
// calling back flip coin function button

button.addEventListener("click",flipCoin);