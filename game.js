question_turn = "player1";
answer_turn = "player2";

player_1_score = 0;
player_2_score = 0;

player1_name = localStorage.getItem("player_1name");
player2_name = localStorage.getItem("player_2name");

document.getElementById("question").innerHTML = "Question turn-" + question_turn;
document.getElementById("answer").innerHTML = "Answer turn-" + answer_turn;

document.getElementById("Player1score").innerHTML = player_1_score;
document.getElementById("Player2score").innerHTML = player_2_score;

document.getElementById("player1name").innerHTML = player1_name + ":";
document.getElementById("player2name").innerHTML = player2_name + ":";

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;

    actualAnswer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2;
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box' style = 'color: black;'>";
    check_button = "<br><br><button class = 'btn btn-info' onClick = 'check()'>Check</button>";
    
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

}

function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actualAnswer) {

        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1;
            document.getElementById("Player1score").innerHTML = player_1_score;
        } else {
            player_2_score = player_2_score + 1;
            document.getElementById("Player2score").innerHTML = player_2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question turn-" + player1_name;
    } else {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question turn-" + player2_name;
    }

    if (answer_turn == "player1") {
        question_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer turn-" + player1_name;
    } else {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer turn-" + player2_name;
    }

    document.getElementById("output").innerHTML = "";
}