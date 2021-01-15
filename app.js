var num_jugadors;
var temps_segons;
var pool_paraules;
var set = document.getElementById("settup");
var llista = document.createElement('div');
llista.setAttribute('id', 'paraules');


function intro() {
    //Primer pantalla: Numero jugadors i temps.
    num_jugadors = document.getElementById("jugadors").value;
    temps_segons = document.getElementById("temps").value;
    removeAllChildNodes(set);
    //Segona pantalla: Nom dels Jugadors
    /* var text = document.createElement("h2");
    text.textContent = "Nom dels jugadors";
    set.appendChild(text);
    for (let index = 0; index < num_jugadors; index++) {
        set.appendChild(crear_jugador());
    }
    var submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("onclick", "equips()");
    set.appendChild(submit); */

    var text = document.createElement("h2");
    text.textContent = "Inserir Paraules";
    set.appendChild(text);

    for (let index = 0; index < num_jugadors; index++) {
        var input = document.createElement('input');
        inserir_paraules();
    }
    set.appendChild(llista);
}

function inserir_paraules() {
    input.setAttribute("placeholder", "adjectiu");
    llista.appendChild(input);
    input.setAttribute("placeholder", "substantiu");
    llista.appendChild(input);
    input.setAttribute("placeholder", "famos");
    llista.appendChild(input);
    input.setAttribute("placeholder", "treball");
    llista.appendChild(input);
}

function crear_jugador() {
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    return input;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}