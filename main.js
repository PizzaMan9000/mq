
function adduser() {
    player_1 = document.getElementById("player_1").value;
    player_2 = document.getElementById("player_2").value;

    window.location.replace("game.html");

    localStorage.setItem("player_1name", player_1);
    localStorage.setItem("player_2name", player_2);
}