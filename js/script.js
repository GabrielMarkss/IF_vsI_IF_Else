function competicao() {

    var idade = parseInt(document.getElementById("idade").value);

    if (idade >= 6 && idade <= 10) {
        console.log("Infantil: " + idade + " anos")
    } else if (idade >= 11 && idade <= 15) {
        console.log("Infanto-Juvenil: " + idade + " anos")
    } else if (idade >= 16 && idade <= 21) {
        console.log("Juvenil:" + idade + " anos")
    } else if (idade >= 22 && idade <= 35) {
        console.log("Adulto:" + idade + " anos")
    } else {
        console.log("Atleta não apto a competir")
    }

}

