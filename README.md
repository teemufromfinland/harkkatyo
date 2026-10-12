# Johdatus sovelluskehitykseen – viikkotehtävät 1–4 (DJ00BP24)

Tämä repositorio sisältää Johdatus sovelluskehitykseen -kurssin viikkotehtävien 1–4 lähdekoodit. Viikkojen tehtävät täydentävät samaa verkkosivustoa.

- **Tekijä:** Teemu Kankainen
- **Viikko 1, HTML:** `index.html`, `about.html`, kuvat, navigaatio ja semanttinen HTML-rakenne (osiot a–e).
- **Viikko 2, CSS:** `style.css`, laatikkomalli, Flexbox, responsiivisuus, hover-efektit ja ulkoasu (osiot a–e).
- **Viikko 3, JavaScript:** `script.js`, muuttujat ja konsolitulosteet, if–else, laskurifunktio, taulukko ja for-silmukka sekä HTML-painike (osiot a–e).
- **Viikko 4, API:** `script4.js`, JavaScriptin `fetch()`, Open-Meteo-säärajapinta, JSON-vastauksen tulostus konsoliin ja sivulle, lataus- ja virheilmoitukset sekä kaupungin valinta (osiot a–d). Osio e edellyttää opiskelijan omaa kokeilua.

## Kokeile viikkotehtävää 3

1. Avaa `index.html` selaimessa.
2. Avaa selaimen kehittäjätyökalut ja **Console**-välilehti.
3. Tarkastele muuttujien, ehtolauseen, laskurin ja silmukan tulosteita.
4. Paina sivun **Kokeile JavaScript-painiketta** -painiketta.

## Kokeile viikkotehtävää 4

1. Avaa `index.html` selaimessa (esimerkiksi Chromessa).
2. Vieritä sivulle kohtaan **Viikko 4: Säärajapinnan kokeilu**.
3. Valitse kaupungiksi Jyväskylä ja napsauta **Hae sää**.
4. Katso lämpötilan ja tuulennopeuden ilmestymistä sivulle; avaa samalla kehittäjätyökalujen **Console** nähdäksesi API:n koko JSON-vastauksen.
5. Valitse toinen kaupunki ja hae data uudelleen. Huomaa, miten vastauksen arvot muuttuvat.
6. Kokeile seuraavaa Open-Meteo-rajapinnan osoitetta itse selaimessa ja tarkastele JSON-dataa: [Jyväskylän säätiedot JSON-muodossa](https://api.open-meteo.com/v1/forecast?latitude=62.2426&longitude=25.7473&current=temperature_2m%2Cwind_speed_10m&timezone=Europe%2FHelsinki).
7. **Oman kokeilun osio e:** Muuta rajapinnan osoitteessa koordinaatteja tai `current`-parametria itse ja katso, miten data muuttuu. Kirjaa havaintosi loppuraportin lukuun 5.

### Viikon 4 osiot a–e

- **a:** HTML-painike, tekstialue, `fetch()` ja raakadatan `console.log()`.
- **b:** API-vastaus tulostetaan sivulla olevaan HTML-elementtiin.
- **c:** CSS-muotoilu, latausteksti ja virhetilanteen käsittely.
- **d:** Kaupunki valitaan pudotusvalikosta ja haetaan valitun kaupungin tiedot.
- **e:** Opiskelija kokeilee avointa rajapintaa itsenäisesti yllä olevien ohjeiden avulla.

**Rajapinta:** [Open-Meteo](https://open-meteo.com/en/docs), ei vaadi API-avainta tähän ei-kaupalliseen kurssiharjoitukseen. Säädata tulee rajapinnasta, eikä sitä ole kirjoitettu valmiiksi sivulle.

Viikkojen 1–2 HTML- ja CSS-ratkaisut on toteutettu käsin Texturilla. Viikkojen 3–4 JavaScript-osuuksien rakentamisessa on hyödynnetty tekoälyä. Opiskelija testaa rajapinnan itse ja kuvaa kokeilun, selainkuvat ja pohdinnan erikseen kurssin loppuraportin luvussa 5. Sitä ei palauteta viikon 4 koodien yhteydessä.

## Viikko 5 – GitHub Pages, CI/CD ja laadunvarmistus

Tavoitteena on julkaista tämä sama repositorio GitHub Pagesiin ja testata, että `main`-haaran uusi commit näkyy sivustolla automaattisesti. Sivuston julkaisu ja laaturaportit ovat tätä README-päivitystä tehtäessä vielä kesken.

1. Ota GitHubissa Pages käyttöön: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
2. Avaa sivun julkinen osoite GitHub Pagesin ilmoituksesta ja varmista, että kaikki sivut, kuvat ja sääpainike toimivat.
3. Tee pieni uusi commit `index.html`-tiedostoon ja todenna sen automaattinen päivittyminen julkiselle sivulle (CI/CD-koe).
4. Aja julkaistulle sivulle Lighthouse ja tallenna tuloskuva loppuraportin lukuun 6.
5. Tarkista HTML W3C:n validatorilla, korjaa mahdollinen huomautus tai kirjaa raporttiin puhdas testitulos.
6. Tulkitse tuloksia ja kuvaa tehdyt parannukset tai pohdi tilaajan liiketoimintahyötyjä loppuraportissa.

Viikon 5 Moodle-palautukseen tarvitaan erillinen .txt-tiedosto, jossa on sekä repositorion linkki että todettu, toimiva julkaisulinkki.
