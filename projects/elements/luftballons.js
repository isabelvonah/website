
var ballon = "<div class='ballon'></div>";

function klick() {
    let zahl = parseInt(document.getElementById("number").value);
    console.log(zahl);
    let ballon_container = document.getElementById("ballon_container");
    ballon_container.innerHTML = ballon.repeat(zahl);
}