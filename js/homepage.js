
const newsimages = [
    "/pages/news/robotik/istanbulregional2.jpg",
    "/pages/news/aktivitaten/gtüdünyamatematikgünügezisi.jpg",
    "/pages/news/aktivitaten/mesleklergunu.jpg",
    "/pages/news/mun/famunhollanda2.jpg",
    "/pages/news/kulturell/karne1.dönem.jpg",
    "/pages/news/kulturell/mehmetakifersoy.jpg",
    "/pages/news/kulturell/ömürkurt2.jpg",
    "/pages/news/mun/sekmunispanya1.jpg",
    "/pages/news/kulturell/tevitölmünaz1.jpg",
    "/pages/news/sportveranstaltung/tenis.jpg",
  ]
  
  const newsheading = [
    "FRC Istanbul Regionaler Wettbewerb",
    "Welttag der Mathematik",
    "14. Berufstag",
    "FAMUN Niederlande",
    "1. Semester Schulzeugniszeremonie",
    "Besuch des Mehmet Akif Ersoy Poesiemuseum",
    "Gespräch mit Ömür Kurt",
    "SEKMUN Spanien",
    "TEVİTÖL-ENKA Debattenwettbewerb",
    "Zwei Erfolge in Tennis",
  ]
  
  const newstext = [
    "Unsere FRC (First Robotik Wettbewerb) Team, 6985 EnkaTech nehmte in die Istanbul Regionaler Wettbewerb teil.",
    "Wir besuchten Technische Universität Gebze zum Weltmathematiktag mit Neuntklässlern.",
    "Am Mittwoch, den 23. Februar halteten wir unsere 14. Berufstag ab.",
    "Unsere 5 Schüler, Maide Kasal und Esra Atilla waren in 7. FAMUN Niederlande 2025. Gab es 350 Schüler weltweit.",
    "Wir schließten den erste Zeitraum von 2024-2025 ab. Wir gratulieren unsere Schülern.",
    "Wir besuchten Mehmet Akif Ersoy Poesiemuseum wegen 12 März.",
    "Am 18 Dezember machten Neuntklässlern und Zehntklässlerin ein Gespräch mit Ömür Kurt.",
    "Unsere 7 Schüler und Müge Demircan waren in SEKMUN Spanien. Es war in Villafranca del Castillo mit 500 weltweit Teilnehmer. Es ist eines der größten MUNs.",
    "Am Dienstag, 11 März 2024 machten wir Debattenwettbewerb mit TEVİTÖL-Debattierclub.",
    "Unsere Mädchen-Tennismannschaft erreichte den ersten Platz und Jungen-Tennismannschaft erreichte den dritten Platz in Kocaeli Tenniswettbewerb.",
  ]
  
  const linktonew = [
    "/pages/news/robotik/regional.html",
    "/pages/news/aktivitaten/welltagdermathematik.html",
    "/pages/news/aktivitaten/berufstag.html",
    "/pages/news/mun/famun.html",
    "/pages/news/kulturell/semesterschulzeugnis.html",
    "/pages/news/kulturell/mehmetakifersoy.html",
    "/pages/news/kulturell/omurkurt.html",
    "/pages/news/mun/sekmun.html",
    "/pages/news/kulturell/debattenwettbewerbmittevitol.html",
    "/pages/news/sportveranstaltung/tennis.html",
  ]
  
function newssliderfunction() {
    document.getElementById("datenum").innerText = "23.04.2025";
    document.getElementById("timenum").innerHTML = "211.10";
    console.log("yay");
    const slbs = [];
    for (let i=0; i<10; i++) {
      slbs[i] = document.getElementById('slb' + (i+1));
      slbs[i].onclick = function() {
        for (let elm=0; elm<10; elm++) {
          slbs[elm].classsName = "sliderbutton";
          if (slbs[elm].classList.contains('sliderbtnact')) {
            slbs[elm].classList.remove("sliderbtnact");
            slbs[elm].classList.add("sliderbutton");
          }
        }
        this.className = "sliderbtnact";
        var mynum = this.id.slice(3)-1;
        var image = document.getElementById("newsslider");
        var heading = document.getElementById("newsheading");
        var textn = document.getElementById("newstext");
        image.src=newsimages[mynum];
        heading.innerHTML = newsheading[mynum];
        textn.innerHTML = newstext[mynum] + "<a href=\"" + linktonew[mynum] + "\">mehr lesen</a>";
        document.getElementById("nsa").href = linktonew[mynum];
      };
      
    }
    var mynum=0;
    var image = document.getElementById("newsslider");
        var heading = document.getElementById("newsheading");
        var textn = document.getElementById("newstext");
        image.src=newsimages[mynum];
        heading.innerHTML = newsheading[mynum];
        textn.innerHTML = newstext[mynum] + " <a href=\"" + linktonew[mynum] + "\">mehr lesen</a>";
        document.getElementById("nsa").href = linktonew[mynum];
  

  };

window.onload = function() {
  datetimeprep();
  newssliderfunction();
  commonstartup();
}