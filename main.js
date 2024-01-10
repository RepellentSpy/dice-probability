let numbers = [];
let amount = 10000;
let cubes = 2;

function seznam() {
    vypis = "";
    for (i = 0; i < amount; i++) {
        if (cubes == 1) {
            numbers.push((Math.floor(Math.random() * 6) + 1)); // 1 kostka
            vypis += numbers[i] + " ";
        }
        if (cubes == 2) {
            numbers.push((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)); // 2 kostky
            vypis += numbers[i] + " ";
        }

        if (cubes == 3) {
            numbers.push((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)); // 3 kostky
            vypis += numbers[i] + " ";
        }

        if (cubes == 4) {
            numbers.push((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)); // 4 kostky
            vypis += numbers[i] + " ";
        }
    }
    document.getElementById("vypis").innerHTML = vypis;
    document.getElementById("calc_button").style.visibility = "visible";
    document.getElementById("reset_button").style.visibility = "visible";
}

function calculate() {
    // Vytvořit slovník
    var count = [];

    // Projde pole čísel.
    for (var i = 0; i < numbers.length; i++) {

        // Pokud je číslo ve slovníku, zvýší jeho počet.
        if (count[numbers[i]]) {
            count[numbers[i]]++;
        }

        // Pokud není, přidá číslo do slovníku s počtem 1.
        else {
            count[numbers[i]] = 1;
        }
    }

    // Najde číslo s nejvyšším počtem výskytu.
    var max = 0;
    var maxNumber = 0;
    for (var key in count) {
        if (count[key] > max) {
            max = count[key];
            maxNumber = key;
        }
    }
    document.getElementById("vypis").innerHTML = "Nejčastěji se vyskytuje číslo " + maxNumber + ". Lze jej najít " + max + "krát";
}

function changeAmount() {
    amount = document.getElementById("amount_slider").value;
    document.getElementById("hod").innerHTML = "hodit " + amount + "x " + cubes + " kostky a sečíst";
}

function changeCubes() {
    cubes = document.getElementById("cubes_slider").value;
    document.getElementById("hod").innerHTML = "hodit " + amount + "x " + cubes + " kostky a sečíst";
}

function reset() {
    location.reload();
}