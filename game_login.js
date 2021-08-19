function Start(){
    var player1 = document.getElementById("player1_name_input").value;
    var player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player_1",player1);
    localStorage.setItem("Player_2",player2);
    window.location = "game_page.html";
}