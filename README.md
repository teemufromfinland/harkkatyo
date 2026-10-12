# Johdatus sovelluskehitykseen – viikkotehtävät 1–5 (DJ00BP24)

Tämä repositorio sisältää Johdatus sovelluskehitykseen -kurssin viikkotehtävien 1–5 lähdekoodit. Viikkojen tehtävät täydentävät samaa verkkosivustoa.

**Julkinen sivusto:** https://teemufromfinland.github.io/harkkatyo/

- **Tekijä:** Teemu Kankainen
- **Viikko 1, HTML:** `index.html`, `about.html`, kuvat, navigaatio ja semanttinen HTML-rakenne (osiot a–e).
- **Viikko 2, CSS:** `style.css`, laatikkomalli, Flexbox, responsiivisuus, hover-efektit ja ulkoasu (osiot a–e).
- **Viikko 3, JavaScript:** `script.js`, muuttujat ja konsolitulosteet, if–else, laskurifunktio, taulukko ja for-silmukka sekä HTML-painike (osiot a–e).
- **Viikko 4, API:** `script4.js`, JavaScriptin `fetch()`, Open-Meteo-säärajapinta, JSON-vastauksen tulostus konsoliin ja sivulle, lataus- ja virheilmoitukset sekä kaupungin valinta. Omaa rajapintakokeilua testattiin muuttamalla koordinaatteja (osiot a–e).
- **Viikko 5, julkaisu ja laadunvarmistus:** GitHub Pages -julkaisu, automaattinen päivitys `main`-haarasta (CI/CD), Lighthouse, W3C HTML Validator ja kontrastikorjaus (osiot a–e).

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
- **e:** Avoimen rajapinnan vastausta kokeiltiin itsenäisesti vaihtamalla koordinaattiparametreja; tulokset dokumentoitiin kuvakaappauksin.

**Rajapinta:** [Open-Meteo](https://open-meteo.com/en/docs), ei vaadi API-avainta tähän ei-kaupalliseen kurssiharjoitukseen. Säädata tulee rajapinnasta, eikä sitä ole kirjoitettu valmiiksi sivulle.

Viikkojen 1–2 HTML- ja CSS-ratkaisut on toteutettu käsin Texturilla. Viikkojen 3–4 JavaScript-osuuksien rakentamisessa on hyödynnetty tekoälyä. Opiskelija testaa rajapinnan itse ja kuvaa kokeilun, selainkuvat ja pohdinnan erikseen kurssin loppuraportin luvussa 5. Sitä ei palauteta viikon 4 koodien yhteydessä.

## Viikko 5 – GitHub Pages, CI/CD ja laadunvarmistus

**Julkinen osoite:** https://teemufromfinland.github.io/harkkatyo/

Viikon 5 toteutukset ja testitulokset 12.10.2026:

- **a / GitHub Pages:** Julkinen projekti julkaistiin GitHub Pagesissa `main`-haaran juurikansiosta.
- **b / CI/CD:** Etusivulle lisättiin GitHub-commitilla näkyvä teksti "Viikko 5: Sivusto julkaistu GitHub Pagesilla – automaattisen julkaisun testimuutos 12.10.2026." GitHubin Pages build and deployment #2 valmistui onnistuneesti, ja tekstin näkyminen julkisella sivulla varmistettiin.
- **c / Lighthouse (Desktop):** Ensimmäinen testi: Performance 100, Accessibility 96, Best Practices 100, SEO 100. Uusintatesti korjauksen jälkeen: kaikki neljä tulosta 100/100.
- **d / W3C Nu Html Checker:** Julkaistu `index.html` tarkistettiin. Tulos: **No errors or warnings to show**. Validatorin havaitsemia HTML-virheitä ei ollut korjattavaksi.
- **e / tekoälyavusteinen parannus:** Lighthouse huomautti riittämättömästä tekstin kontrastista. CSS:n `footer`-tekstin väri muutettiin sävystä `#7f8c8d` sävyyn `#4b5963`. Laskennallinen kontrastisuhde vaaleaa sivutaustaa vasten muuttui noin 3,21:1 → 6,67:1. Accessibility nousi uusintatestissä 96 → 100.

**Tarkistusten rajaus:** Pisteet ovat julkaistun etusivun Lighthouse Desktop -mittauksesta, ja W3C-tulos koskee julkaistua `index.html`-sivua. Lighthouse ei yksin takaa saavutettavuutta kaikissa käyttötilanteissa.

Kuvakaappaukset, havainnot, korjaus ja CI/CD:n liiketoimintahyötyjen pohdinta käsitellään loppuraportin luvussa 6. Viikon 5 Moodle-palautus sisältää repositorion ja julkisen sivun URL-osoitteet erillisessä TXT-tiedostossa.
