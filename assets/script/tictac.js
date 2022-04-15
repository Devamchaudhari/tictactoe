
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
    let celebrateBox1 = document.getElementById('cel-box1');

    
    let wonText = document.getElementById('wonText');
    
    
    if((inpOne === 'X' && inpTwo === 'X' && inpThree === 'X') || (inpFour === 'X' && inpFive === 'X' && inpSix === 'X') || (inpSeven === 'X' && inpEight === 'X' && inpNine === 'X')){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 1 X Won";
        var boxinp = document.getElementsByClassName("box-input");
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }

        winnerboardp('player1-result');
        lossboardp('player2-result');
    }
    else if((inpOne === 'X' && inpFour === 'X' && inpSeven === 'X')|| (inpTwo === 'X' && inpFive=== 'X' && inpEight === 'X')|| (inpThree === 'X' && inpSix=== 'X' && inpNine === 'X') ){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 1 X Won";
        var boxinp = document.getElementsByClassName("box-input");
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }
        winnerboardp('player1-result');
        lossboardp('player2-result');
    }
    else if((inpOne === 'X' && inpFive === 'X' && inpNine === 'X')|| (inpThree == 'X' && inpFive === 'X' &&inpSeven==='X')){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 1 X Won";
        var boxinp = document.getElementsByClassName("box-input");
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }
        winnerboardp('player1-result');
        lossboardp('player2-result');
    }
//X won over
// O won start
    else if((inpOne === 'O' && inpTwo === 'O' && inpThree === 'O') || (inpFour === 'O' && inpFive === 'O' && inpSix === 'O') || (inpSeven === 'O' && inpEight === 'O' && inpNine === 'O')){
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 2 O Won";
        var boxinp = document.getElementsByClassName("box-input");
    
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }
        winnerboardp('player2-result');
        lossboardp('player1-result');
    }
    else if((inpOne === 'O' && inpFour === 'O' && inpSeven === 'O')|| (inpTwo === 'O' && inpFive=== 'O' && inpEight === 'O')|| (inpThree === 'O' && inpSix=== 'O' && inpNine === 'O') ){
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 2 O Won";
        var boxinp = document.getElementsByClassName("box-input");
    
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }
        winnerboardp('player2-result');
        lossboardp('player1-result');
    }
    else if((inpOne === 'O' && inpFive === 'O' && inpNine === 'O')|| (inpThree == 'O' && inpFive === 'O' &&inpSeven==='O')){
        console.log('wonText------',wonText);
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 2 O Won";
        var boxinp = document.getElementsByClassName("box-input");
    
        for (var i = 0; i < boxinp .length; i++) {
            boxinp[i].disabled = true;
        }
        winnerboardp('player2-result');
        lossboardp('player1-result');
    }

    // Check if tie between the two player
    else if ((inpOne === 'X' || inpOne === 'O') && (inpTwo === 'X'
        || inpTwo === 'O') && (inpThree === 'X' || inpThree === 'O') &&
        (inpFour === 'X' || inpFour === 'O') && (inpFive === 'X' ||
        inpFive === 'O') && (inpSix === 'X' || inpSix === 'O') &&
        (inpSeven=== 'X' || inpSeven === 'O') && (inpEight === 'X' ||
        inpEight === 'O') && (inpNine=== 'X' || inpNine=== 'O'))
     {
            celebrateBox1.classList.toggle('celebrate-winbox3');
            wonText.innerHTML="Tie";
    }
    else{
        
         if (flag == 1) {
            celebrateBox1.classList.add('celebrate-winbox');
             celebrateBox1.classList.remove('celebrate-winbox4');
              wonText.innerHTML="Player 1 X Turn";            
        }
        else {
            celebrateBox1.classList.add('celebrate-winbox4');
            celebrateBox1.classList.remove('celebrate-winbox');
            wonText.innerHTML="Player 2 O Turn";        
             }
    }
}

//winnerboard function
function winnerboardp(id) {
    let player1board = document.getElementById(id);
    player1board.innerHTML+=`<td>1</td>`;
}

//loss board function
function lossboardp(id) {
    let player1board = document.getElementById(id);
    player1board.innerHTML+=`<td>0</td>`;
}


// Reset Function
function resetFun() {
    var boxinp = document.getElementsByClassName("box-input");
    for (var i = 0; i < boxinp .length; i++) {
        boxinp[i].value ="";
    }
     
 let wonText = document.getElementById('wonText');
 wonText.innerHTML="";
 for (var i = 0; i < boxinp .length; i++) {
     boxinp[i].disabled = false;
 }
let removearr= ["celebrate-winbox4","celebrate-winbox","celebrate-winbox2","celebrate-winbox3"];
let removebox = document.getElementById('cel-box1');
for (let i = 0; i < removearr.length; i++) {
    removebox.classList.remove(removearr[i]);
    }
}

// This below function assign the player turn

flag=1;

function assignvalue(id) {
    if (flag == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(id).value = "O";
        document.getElementById(id).disabled = true;
        flag = 1;
    }
}
 