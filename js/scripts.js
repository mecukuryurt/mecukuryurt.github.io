function myFunction(x) {
  x.classList.toggle("change");
}

const newsimages = [
  "./pages/news/new1.jpg",
  "./pages/news/new2.jpeg",
  "./pages/news/new3.jpeg",
  "./pages/news/new4.jpg",
  "./pages/news/new5.jpg",
  "./pages/news/new6.jpg",
  "./pages/news/new7.jpeg",
  "./pages/news/new8.jpeg",
  "./pages/news/new9.jpg",
  "./pages/news/new10.jpg",
]

const newsheading = [
  "Ein fliegende katze darf mich essen nicht 1",
  "new2",
  "new3",
  "new4",
  "new5",
  "new6",
  "new7",
  "new8",
  "new9",
  "new10",
]

const newstext = [
  "katzekatzekatzekatzekatzekatze 1",
  "katzekatzekatzekatzekatzekatze 2",
  "katzekatzekatzekatzekatzekatze 3",
  "katzekatzekatzekatzekatzekatze 4",
  "katzekatzekatzekatzekatzekatze 5",
  "katzekatzekatzekatzekatzekatze 6",
  "katzekatzekatzekatzekatzekatze 7",
  "katzekatzekatzekatzekatzekatze 8",
  "katzekatzekatzekatzekatzekatze 9",
  "katzekatzekatzekatzekatzekatze 10",
]

const linktonew = [
  "./pages/news/new1.html",
  "./pages/news/new2.html",
  "./pages/news/new3.html",
  "./pages/news/new4.html",
  "./pages/news/new5.html",
  "./pages/news/new6.html",
  "./pages/news/new7.html",
  "./pages/news/new8.html",
  "./pages/news/new9.html",
  "./pages/news/new10.html",
]

window.onload = function() {
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
      textn.innerHTML = newstext[mynum] + "<a href=\"" + linktonew[mynum] + "\">read more</a>";
    };
    
  }
  var mynum=0;
  var image = document.getElementById("newsslider");
      var heading = document.getElementById("newsheading");
      var textn = document.getElementById("newstext");
      image.src=newsimages[mynum];
      heading.innerHTML = newsheading[mynum];
      textn.innerHTML = newstext[mynum] + " <a href=\"" + linktonew[mynum] + "\">read more</a>";

  document.getElementById("newsslider").onclick = function() {
    
  }
};