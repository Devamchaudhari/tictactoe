function tapfun() {
    let inpOne = document.getElementById('inp-one').value;
    let inpTwo = document.getElementById('inp-two').value;
    let inpThree = document.getElementById('inp-three').value;
    let inpFour = document.getElementById('inp-four').value;
    let inpFive = document.getElementById('inp-five').value;
    let inpSix = document.getElementById('inp-six').value;
    let inpSeven = document.getElementById('inp-seven').value;
    let inpEight = document.getElementById('inp-eight').value;
    let inpNine = document.getElementById('inp-nine').value;
    let celebrateBox = document.getElementById('cel-box');
    let wonText = document.getElementById('wonText')
    if((inpOne === 'X' && inpTwo === 'X' && inpThree === 'X') || (inpFour === 'X' && inpFive === 'X' && inpSix === 'X') || (inpSeven === 'X' && inpEight === 'X' && inpNine === 'X')){
        alert("PLayer 1 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 1 Won";
    }
    else if((inpOne === 'X' && inpFour === 'X' && inpSeven === 'X')|| (inpTwo === 'X' && inpFive=== 'X' && inpEight === 'X')|| (inpThree === 'X' && inpSix=== 'X' && inpNine === 'X') ){
        alert("PLayer 1 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 1 Won";
    }
    else if((inpOne === 'X' && inpFive === 'X' && inpNine === 'X')|| (inpThree == 'X' && inpFive === 'X' &&inpSeven==='X')){
        alert("PLayer 1 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 1 Won";
    }
//X won over
// O won start
    else    if((inpOne === 'O' && inpTwo === 'O' && inpThree === 'O') || (inpFour === 'O' && inpFive === 'O' && inpSix === 'O') || (inpSeven === 'O' && inpEight === 'O' && inpNine === 'O')){
        alert("PLayer 2 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 2 Won";
    }
    else if((inpOne === 'O' && inpFour === 'O' && inpSeven === 'O')|| (inpTwo === 'O' && inpFive=== 'O' && inpEight === 'O')|| (inpThree === 'O' && inpSix=== 'O' && inpNine === 'O') ){
        alert("PLayer 2 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 2 Won";
    }
    else if((inpOne === 'O' && inpFive === 'O' && inpNine === 'O')|| (inpThree == 'O' && inpFive === 'O' &&inpSeven==='O')){
        alert("PLayer 2 win");
        celebrateBox.style.opacity='1';
        wonText.innerHTML=" Player 2 Won";
    }

    }
