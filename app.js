let comment = document.querySelector('#comment');
let button1 = document.querySelector('#button1');
let grid = document.querySelector('#grid');

let box0 = document.querySelector("#class0");
let box1 = document.querySelector("#class1");
let box2 = document.querySelector("#class2");
let box3 = document.querySelector("#class3");
let box4 = document.querySelector("#class4");
let box5 = document.querySelector("#class5");
let box6 = document.querySelector("#class6");
let box7 = document.querySelector("#class7");
let box8 = document.querySelector("#class8");

let count = 0;
let player = "X";

let name1 = document.querySelector('#name1');
let nameInput = document.querySelector('#nameInput');
let message = document.querySelector('#message');
name1.addEventListener('submit', function(ev){
    ev.preventDefault(ev);
    if(message.innerText === ""){
    message.innerText = "Hello " + nameInput.value + ". You are X";
    
    }
    else{
        message.innerText = "";
    }
});

let name2 = document.querySelector('#name2');
let nameInput2 = document.querySelector('#nameInput2');
let message2 = document.querySelector('#message2');
name2.addEventListener('submit', function(ev){
    ev.preventDefault(ev);
    if(message2.innerText === ""){
    message2.innerText = "Hello " + nameInput2.value + ". You are O";
    
    }
    else{
        message2.innerText = "";
    }
});

grid.addEventListener('click', function(ev){
    if(count <9){
    if(ev.target.innerText !== ""){
        return;
    }
    ev.target.innerText = player;
    if (player === "X"){
        player = "O";
        comment.innerText = "Player O's turn";
    }
    else{
        player = "X";
        comment.innerText = "Player X's turn";
    }
   
    if (Xwinner() !== false){
        comment.innerText = "X won";
        count = 10;
    }

    if (Owinner() !== false){
        comment.innerText = "O won";
        count = 10;
    }
    count++
}

if (count === 9){
    comment.innerText = "Draw";
}

    function Xwinner(){
        if (
            (box0.innerText === "X" && box1.innerText === "X" && box2.innerText === "X") || 
            (box3.innerText === "X" && box4.innerText === "X" && box5.innerText === "X") ||
            (box6.innerText === "X" && box7.innerText === "X" && box8.innerText === "X") || 
            (box0.innerText === "X" && box3.innerText === "X" && box6.innerText === "X") || 
            (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") || 
            (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") || 
            (box0.innerText === "X" && box4.innerText === "X" && box8.innerText === "X") || 
            (box2.innerText === "X" && box4.innerText === "X" && box6.innerText === "X")
        )
        
        {
            return true;
        }
        return false;
    }
    function Owinner(){
        if (
            (box0.innerText === "O" && box1.innerText === "O" && box2.innerText === "O") || 
            (box3.innerText === "O" && box4.innerText === "O" && box5.innerText === "O") ||
            (box6.innerText === "O" && box7.innerText === "O" && box8.innerText === "O") || 
            (box0.innerText === "O" && box3.innerText === "O" && box6.innerText === "O") || 
            (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") || 
            (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") || 
            (box0.innerText === "O" && box4.innerText === "O" && box8.innerText === "O") || 
            (box2.innerText === "O" && box4.innerText === "O" && box6.innerText === "O")
        )
        
        {
            return true;
        }
        return false;
    }
   

    button1.addEventListener('click', function(){
        ev.target.innerText = "";
        player ="X";
        comment.innerText = "Player X's turn";
        count = 0;
        message.innerText ="";
    })
});




