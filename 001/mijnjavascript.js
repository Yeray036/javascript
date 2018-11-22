var a = 10;
if (a > 9) {
    console.log("Hallo A is groter dan 9 hoor");
}
else {
    console.log("A is kleiner dan 9");
}

for (var i = 0; i <= 10; i++) {
    console.log("I heeft nu de waarde " + i);
}

var mijnauto = {
    merk: "Suzuki",
    type: "Swift",
    aantalWielen: 4,
    kleur: "zwart",
}
console.log(mijnauto.merk);
console.log(mijnauto.type);
console.log(mijnauto.aantalWielen);
console.log(mijnauto.kleur);
document.getElementById("grotekop").innerHTML = mijnauto.kleur
