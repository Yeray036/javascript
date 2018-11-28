var auto = {
    kleur: "black",
    merk: "Suzuki",
    snelheid: 0,
    
    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("honk!")
    }
}

auto.gasgeven();
auto.toeteren();