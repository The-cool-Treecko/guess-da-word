var player1 = localStorage.getItem("Player_1");
var player2 = localStorage.getItem("Player_2");

var questionTurn = player1;
var answerTurn = player2;

var word;

var score_player1 = 0;
var score_player2 = 0;

var answer;

document.getElementById("player1_name").innerHTML = player1;
document.getElementById("score1").innerHTML = score_player1;

document.getElementById("player2_name").innerHTML = player2;
document.getElementById("score2").innerHTML = score_player2;

document.getElementById("question_turn").innerHTML = "Question Turn : "+player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player2;

function sendWord(){
    get_word = document.getElementById("word_display").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    charAt2 = word.charAt(Math.floor(word.length/2));
    charAt3 = word.charAt(word.length-1);
    console.log("words to be replaced: "+charAt1+","+charAt2+","+charAt3);

    charAt_1 = word.replace(charAt1,"_");
    charAt_2 = charAt_1.replace(charAt2,"_");
    charAt_3 = charAt_2.replace(charAt3,"_");

    question_word = "<h4 id='q'>Q. "+charAt_3+"</h4>";
    input = "Answer: <input type='text' id='input'></input>";
    check = "<button id='check' onclick='checkWord()' class='btn btn-success'>Check</button>"
    row = question_word+input+"<br>"+"<br>"+check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_display").value = "";
}

function checkWord(){
    answer = document.getElementById("input").value;
    answer = answer.toLowerCase();
    console.log(answer);
    if (answer == word){
        if (answerTurn == player1){
            score_player1 = score_player1+1;
            document.getElementById("score1").innerHTML = score_player1;
        }
        if (answerTurn == player2){
            score_player2 = score_player2+1;
            document.getElementById("score2").innerHTML = score_player2;
        }
    }
    if (answerTurn == player1){
        answerTurn = player2;
        questionTurn = player1;
        document.getElementById("question_turn").innerHTML = "Question Turn : "+player1;
        document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player2;
    }
    if (answerTurn == player2){
        answerTurn = player1;
        questionTurn = player2;
        document.getElementById("question_turn").innerHTML = "Question Turn : "+player2;
        document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player1;
    }
    document.getElementById("output").innerHTML = "";
}