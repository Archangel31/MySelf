function colored() {
    document.getElementById("cert").setAttribute("style","color:red");
}
function colored1() {
    document.getElementById("cert").setAttribute("style","color:white");
}
document.getElementById("cert").addEventListener("mouseover", colored);
document.getElementById("cert").addEventListener("mouseout", colored1);