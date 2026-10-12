# Johdatus sovelluskehitykseen

Tämä on Vaasan ammattikorkeakoulun Johdatus sovelluskehitykseen -opintojaksolla rakentamani harjoitussivusto. Sivusto kasvoi kurssin aikana pala palalta, ja samalla palasin pitkästä aikaa itse lähdekoodin pariin.

Tein ensimmäiset kaupalliset verkkosivuni jo 1990-luvun lopulla ja työskentelin verkkopalvelujen parissa varsin aktiivisesti noin vuosina 1998–2010. Sittemmin työni on muuttunut moneen kertaan. Nykyisin johdan Aava & Bangilla Bottiverstaan tekoälytoimintaa, ja arjessani korostuu teknisen toteutuksen sijaan kehittämisen ja tekoälytransformaatioiden johtaminen. Verkkoteknologiat olivat siis ennestään tuttuja, mutta käytännön koodaustaidot ehtivät vuosien varrella ruostua.

Kurssin ensimmäiset HTML- ja CSS-harjoitukset tein käsin Macin Texturi-editorilla. JavaScriptin, rajapintojen ja julkaisemisen kohdalla otin tekoälyn avuksi. En kuitenkaan jättänyt tehtäviä pelkän tuotetun koodin varaan, vaan kokeilin toimintoja itse selaimessa, tutkin tuloksia ja korjasin testauksessa esiin tulleita puutteita.

**[Avaa valmis verkkosivusto](https://teemufromfinland.github.io/harkkatyo/)**

## Mitä sivustolla on?

Alussa rakensin tavallisen kahden sivun verkkosivuston, jossa on navigaatio, tekstiä ja kuvia. Seuraavaksi tein sille CSS-ulkoasun ja kokeilin sivun toimivuutta myös pienemmällä näytöllä.

JavaScriptin myötä sivulle tuli ensimmäinen painike ja muutamia ohjelmoinnin perusharjoituksia. Seuraavassa vaiheessa liitin mukaan Open-Meteon avoimen säärajapinnan. Sivulla voi valita kaupungin ja hakea sen lämpötilan ja tuulennopeuden. Tiedot tulevat rajapinnasta, eivät valmiiksi kirjoitetusta esimerkkitekstistä.

Lopuksi julkaisin kokonaisuuden GitHub Pagesissa ja kokeilin, miten GitHubiin tallennettu muutos päivittyy automaattisesti julkiselle sivulle.

## Toteutus ja testaus

Sivusto perustuu HTML:ään, CSS:ään ja JavaScriptiin. Etusivu löytyy tiedostosta `index.html`, esittelysivu tiedostosta `about.html`, ulkoasu tiedostosta `style.css` ja JavaScript-harjoitukset tiedostoista `script.js` ja `script4.js`.

Testasin julkaistun etusivun Lighthouse- ja W3C-työkaluilla. Lighthouse antoi aluksi saavutettavuudesta 96 pistettä, koska yhden tekstin kontrasti oli liian heikko. Korjasin värin tekoälyn avustuksella ja uusi testi antoi kaikista neljästä osa-alueesta 100/100 pistettä. W3C:n HTML-tarkistus puolestaan meni läpi ilman virheitä tai varoituksia. Nämä ovat yksittäisten testien tuloksia, eivät lupaus siitä, että sivusto olisi kaikissa tilanteissa täydellinen.

## Mitä opin?

Kurssin arvokkain anti ei ollut yksittäinen HTML-tagi tai JavaScript-komento, vaan kokonaisuuden hahmottaminen uudelleen. Kun tekee edes pienen palvelun itse ja testaa sen toiminnan, ymmärtää paremmin myös muiden tekemää kehitystyötä. Se on minulle hyödyllistä erityisesti asiakasprojektien ja teknisten toteutusten johtamisessa.

— Teemu Kankainen
