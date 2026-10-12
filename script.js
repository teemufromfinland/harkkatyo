// Johdatus sovelluskehitykseen - Viikkotehtava 3, osiot a-e
// JavaScript jatkaa aiempien viikkojen HTML- ja CSS-sivustoa.

// OSIO A: Muuttujat (const ja let) ja tulostaminen konsoliin.
const kurssi = "Johdatus sovelluskehitykseen";
let aiemminTehdytTehtavat = 2;
console.log("Kurssi:", kurssi);
console.log("Aiemmin tehdyt viikkotehtavat:", aiemminTehdytTehtavat);

// OSIO B: Ehtolause (if-else), joka tekee paatoksen muuttujan perusteella.
if (aiemminTehdytTehtavat >= 2) {
    console.log("Viikkojen 1 ja 2 tehtavat on tehty. Voin jatkaa viikkoon 3.");
} else {
    console.log("Ensin on tehtava aiempien viikkojen harjoitukset.");
}

// OSIO C: Funktio ottaa kaksi arvoa, laskee alennetun hinnan ja palauttaa sen.
function laskeAlennettuHinta(hinta, alennusProsentti) {
    return hinta - (hinta * alennusProsentti / 100);
}

const alennettuHinta = laskeAlennettuHinta(100, 10);
console.log("100 euron tuote 10 % alennuksella maksaa:", alennettuHinta, "euroa");

// OSIO D: Taulukko (lista) ja sen alkioiden lapikaynti for-silmukalla.
const teemat = ["HTML5", "CSS", "JavaScript", "Rajapinnat ja testaus"];
console.log("Opintojakson teemat:");
for (let i = 0; i < teemat.length; i++) {
    console.log((i + 1) + ".", teemat[i]);
}

// OSIO E: HTML-sivun painikkeen klikkaus nayttaa alert-ikkunan.
// Painikkeen toteutuksessa on hyodynnetty tekoalya opintojakson ohjeen mukaisesti.
const painike = document.getElementById("naytaViesti");
painike.addEventListener("click", function () {
    console.log("JavaScript-painiketta painettiin.");
    alert("Hienoa! JavaScript-painike toimii.");
});
