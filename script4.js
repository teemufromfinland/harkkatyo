// Johdatus sovelluskehitykseen - viikkotehtävä 4, osiot a-d.
// Open-Meteo on avoin säärajapinta. API-avainta ei tarvita tähän harjoitukseen.

// d) Kaupunki valitaan HTML-sivun pudotusvalikosta.
// Koordinaatit ovat ennalta määriteltyjä, jotta pyyntö pysyy yksinkertaisena.
const saaKaupungit = {
    jyvaskyla: { nimi: "Jyväskylä", leveys: 62.2426, pituus: 25.7473 },
    helsinki: { nimi: "Helsinki", leveys: 60.1699, pituus: 24.9384 },
    vaasa: { nimi: "Vaasa", leveys: 63.0951, pituus: 21.6158 },
    tampere: { nimi: "Tampere", leveys: 61.4991, pituus: 23.7871 }
};

const saaKaupunkiValinta = document.getElementById("saaKaupunki");
const saaHakuPainike = document.getElementById("haeSaa");
const saaTilaTeksti = document.getElementById("saaTila");
const saaTulosTeksti = document.getElementById("saaTulos");

// a) Sivulla on painike ja tekstialue. Haetaan ulkoista dataa fetch()-komennolla.
// b) Onnistuneen haun jälkeen tulos näytetään HTML-elementissä.
// c) Näytetään latausteksti ja mahdolliset virheet käyttäjälle.
saaHakuPainike.addEventListener("click", async function () {
    const valittuKaupunki = saaKaupungit[saaKaupunkiValinta.value];

    if (!valittuKaupunki) {
        saaTilaTeksti.textContent = "Valitse kaupunki listasta.";
        return;
    }

    saaHakuPainike.disabled = true;
    saaTilaTeksti.textContent = "Haetaan säätietoja...";
    saaTulosTeksti.textContent = "";

    const rajapintaUrl = new URL("https://api.open-meteo.com/v1/forecast");
    rajapintaUrl.search = new URLSearchParams({
        latitude: valittuKaupunki.leveys,
        longitude: valittuKaupunki.pituus,
        current: "temperature_2m,wind_speed_10m",
        timezone: "Europe/Helsinki"
    }).toString();

    try {
        const vastaus = await fetch(rajapintaUrl.toString(), { cache: "no-store" });

        if (!vastaus.ok) {
            throw new Error("HTTP-virhe " + vastaus.status);
        }

        const data = await vastaus.json();
        console.log("Open-Meteo API:n JSON-vastaus:", data);

        if (!data.current ||
            typeof data.current.temperature_2m !== "number" ||
            typeof data.current.wind_speed_10m !== "number") {
            throw new Error("Rajapinnan vastauksesta puuttuu säätietoja.");
        }

        const mittausAika = data.current.time.replace("T", " klo ");
        saaTulosTeksti.textContent =
            valittuKaupunki.nimi + "\n" +
            "Lämpötila: " + data.current.temperature_2m + " °C\n" +
            "Tuulennopeus: " + data.current.wind_speed_10m + " km/h\n" +
            "Aika: " + mittausAika;
        saaTilaTeksti.textContent = "Säätiedot haettu onnistuneesti.";
    } catch (virhe) {
        console.error("Virhe säärajapinnan haussa:", virhe);
        saaTilaTeksti.textContent =
            "Tietojen hakeminen epäonnistui. Tarkista verkkoyhteys ja yritä uudelleen.";
    } finally {
        saaHakuPainike.disabled = false;
    }
});

// e) Oman kokeilun ohje on README.md-tiedostossa. Opiskelija kokeilee
// rajapintaa itse selaimessa ja kirjaa havainnot kurssin loppuraporttiin.
