var random1 = Math.floor((Math.random())*6);
var random2 = Math.floor((Math.random())*6);

var imgs = ['./images/dice1.png', './images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

var src1 = imgs[random1];
var src2 = imgs[random2];

document.querySelector('.img1').setAttribute('src', src1);
document.querySelector('.img2').setAttribute('src', src2);

function whoWon (br1, br2){
    if (br1<br2){
        document.querySelector('h1').innerHTML="Player 2 wins!";
    } else if (br1>br2){
        document.querySelector('h1').innerHTML="Player 1 wins!";
    }else{
        document.querySelector('h1').innerHTML="Draw!";
    }
    console.log(random1 + ' ' + random2);
}

whoWon(random1, random2);