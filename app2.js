var llista_paraules = Array();
var llista_jugadors = Array();
var jugadors_vermells = Array();
var jugadors_blaus = Array();
var num_jugadors;
var contador = 1;

document.getElementById("llista").style.display = "none";
document.getElementById("camp").style.display = "none";

function inserir() {
    num_jugadors = document.getElementById("num_jugadors").value;
    document.getElementById("jugadors").style.display = "none";
    document.getElementById("llista").style.display = "initial";
    document.getElementById("nom_jugador").innerHTML = "Jugador " + contador++;
}

function guarda() {
    document.getElementById("nom_jugador").innerHTML = "Jugador " + contador;
    var input = document.getElementsByClassName("camp");
    llista_jugadors.push(input[0].value);
    for (let index = 1; index < input.length; index++) {
        llista_paraules.push(input[index].value);
        input[index].value = "";
    }
    input[0].value = "";
    if (contador > num_jugadors) {
        document.getElementById("llista").style.display = "none";
        equips();
    }
    contador++;
}

function equips() {
    var parells = num_jugadors % 2 == 0 ? true : false;
    if (parells) {
        do {
            reparteix();
        } while (jugadors_blaus.length != jugadors_vermells.length);
    } else {
        do {
            reparteix();
        } while (Math.abs(jugadors_blaus.length - jugadors_vermells.length) != 1);
    }
    mostra_camp();
}

function reparteix() {
    jugadors_blaus = [];
    jugadors_vermells = [];
    llista_jugadors.forEach(element => {
        if (random(2) == 0) {
            jugadors_blaus.push(element);
        } else {
            jugadors_vermells.push(element);
        }
    });
}

function random(valors) {
    return Math.floor(Math.random() * valors);
}

function mostra_camp() {
    document.getElementById("camp").style.display = "initial";
}