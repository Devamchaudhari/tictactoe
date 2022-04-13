
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
    if((inpOne === 'X' && inpTwo === 'X' && inpThree === 'X') || (inpFour === 'X' && inpFive === 'X' && inpSix === 'X') || (inpSeven === 'X' && inpEight === 'X' && inpNine === 'X')){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML=" Player 1 X Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;
    }
    else if((inpOne === 'X' && inpFour === 'X' && inpSeven === 'X')|| (inpTwo === 'X' && inpFive=== 'X' && inpEight === 'X')|| (inpThree === 'X' && inpSix=== 'X' && inpNine === 'X') ){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML=" Player 1 X Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;
    }
    else if((inpOne === 'X' && inpFive === 'X' && inpNine === 'X')|| (inpThree == 'X' && inpFive === 'X' &&inpSeven==='X')){
        
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML=" Player 1 X Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;
    }
//X won over
// O won start
    else if((inpOne === 'O' && inpTwo === 'O' && inpThree === 'O') || (inpFour === 'O' && inpFive === 'O' && inpSix === 'O') || (inpSeven === 'O' && inpEight === 'O' && inpNine === 'O')){
        celebrateBox1.classList.toggle('celebrate-winbox2');
       
        wonText.innerHTML="Player 2 O Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;
    }
    else if((inpOne === 'O' && inpFour === 'O' && inpSeven === 'O')|| (inpTwo === 'O' && inpFive=== 'O' && inpEight === 'O')|| (inpThree === 'O' && inpSix=== 'O' && inpNine === 'O') ){
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 2 O Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;
    }
    else if((inpOne === 'O' && inpFive === 'O' && inpNine === 'O')|| (inpThree == 'O' && inpFive === 'O' &&inpSeven==='O')){
        console.log('wonText------',wonText);
        celebrateBox1.classList.toggle('celebrate-winbox2');
        wonText.innerHTML="Player 2 O Won";
        document.getElementById("inp-one").disabled = true;
        document.getElementById("inp-two").disabled = true;
        document.getElementById("inp-three").disabled = true;
        document.getElementById("inp-four").disabled = true;
        document.getElementById("inp-five").disabled = true;
        document.getElementById("inp-six").disabled = true;
        document.getElementById("inp-seven").disabled = true;
        document.getElementById("inp-eight").disabled = true;
        document.getElementById("inp-nine").disabled = true;

    }
    // Check if tie between the two player
    else if ((inpOne == 'X' || inpOne == 'O') && (inpTwo == 'X'
        || inpTwo == 'O') && (inpThree == 'X' || inpThree == 'O') &&
        (inpFour == 'X' || inpFour == 'O') && (inpFive == 'X' ||
        inpFive == 'O') && (inpSix == 'X' || inpSix == 'O') &&
        (inpSeven== 'X' || inpSeven == 'O') && (inpEight == 'X' ||
        inpEight == 'O') && (inpNine== 'X' || inpNine== 'O')) {
            celebrateBox1.classList.toggle('celebrate-winbox3');
            wonText.innerHTML="Tie";
        // window.location.reload();
    }
    else{
        
         if (flag == 1) {
            celebrateBox1.classList.add('celebrate-winbox');
        celebrateBox1.classList.remove('celebrate-winbox4');
         wonText.innerHTML="Player 1 X Turn";            
        //     celebrateBox1.classList.toggle('celebrate-winbox');
        //     wonText.innerHTML="Player 1 X Turn";            
         }
        else {
            celebrateBox1.classList.add('celebrate-winbox4');
            celebrateBox1.classList.remove('celebrate-winbox');
            wonText.innerHTML="Player 2 O Turn"; 
        //     celebrateBox1.classList.toggle('celebrate-winbox4');
        //     wonText.innerHTML="Player 2 O Turn";    
             }
    }
    }


    // Reset Function
flag=1;    
function resetFun() {
console.log("reset function"); 

tapfun();
// window.location.reload();

 document.getElementById('inp-one').value="";
 document.getElementById('inp-two').value="";
 document.getElementById('inp-three').value="";
 document.getElementById('inp-four').value="";
 document.getElementById('inp-five').value="";
 document.getElementById('inp-six').value="";
 document.getElementById('inp-seven').value="";
 document.getElementById('inp-eight').value="";
 document.getElementById('inp-nine').value="";
 document.getElementById("inp-one").disabled = false;
document.getElementById("inp-two").disabled = false;
document.getElementById("inp-three").disabled = false;
document.getElementById("inp-four").disabled = false;
document.getElementById("inp-five").disabled = false;
document.getElementById("inp-six").disabled = false;
document.getElementById("inp-seven").disabled = false;
document.getElementById("inp-eight").disabled = false;
document.getElementById("inp-nine").disabled = false;
let celebrateBox1 = document.getElementsByClassName('celebrate-icon1');
celebrateBox1.classList.remove('celebrate-winbox2');
celebrateBox1.classList.remove('celebrate-winbox3');
celebrateBox1.classList.remove('celebrate-winbox');
celebrateBox1.classList.remove('celebrate-winbox4');

}

// This below function assign the player turn
flag=1;
function resetfun1() {
    if (flag == 1) {
        document.getElementById("inp-one").value = "X";
        document.getElementById("inp-one").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-one").value = "O";
        document.getElementById("inp-one").disabled = true;
        flag = 1;
    }
}

function resetfun2() {
    if (flag == 1) {
        document.getElementById("inp-two").value = "X";
        document.getElementById("inp-two").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-two").value = "O";
        document.getElementById("inp-two").disabled = true;
        flag = 1;
    }
}

function resetfun3() {
    if (flag == 1) {
        document.getElementById("inp-three").value = "X";
        document.getElementById("inp-three").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-three").value = "O";
        document.getElementById("inp-three").disabled = true;
        flag = 1;
    }
}

function resetfun4() {
    if (flag == 1) {
        document.getElementById("inp-four").value = "X";
        document.getElementById("inp-four").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-four").value = "O";
        document.getElementById("inp-four").disabled = true;
        flag = 1;
    }
}


function resetfun5() {
    if (flag == 1) {
        document.getElementById("inp-five").value = "X";
        document.getElementById("inp-five").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-five").value = "O";
        document.getElementById("inp-five").disabled = true;
        flag = 1;
    }
}


function resetfun6() {
    if (flag == 1) {
        document.getElementById("inp-six").value = "X";
        document.getElementById("inp-six").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-six").value = "O";
        document.getElementById("inp-six").disabled = true;
        flag = 1;
    }
}


function resetfun7() {
    if (flag == 1) {
        document.getElementById("inp-seven").value = "X";
        document.getElementById("inp-seven").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-seven").value = "O";
        document.getElementById("inp-seven").disabled = true;
        flag = 1;
    }
}


function resetfun8() {
    if (flag == 1) {
        document.getElementById("inp-eight").value = "X";
        document.getElementById("inp-eight").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-eight").value = "O";
        document.getElementById("inp-eight").disabled = true;
        flag = 1;
    }
}

function resetfun9() {
    if (flag == 1) {
        document.getElementById("inp-nine").value = "X";
        document.getElementById("inp-nine").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp-nine").value = "O";
        document.getElementById("inp-nine").disabled = true;
        flag = 1;
    }
}