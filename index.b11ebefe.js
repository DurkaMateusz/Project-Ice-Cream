let e=1;function t(t){let l=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("mySlides-button");t>l.length&&(e=1),t<1&&(e=l.length);// Ukryj wszystkie slajdy
for(let e=0;e<l.length;e++)l[e].style.display="none";// Deaktywuj wszystkie kropki
for(let e=0;e<n.length;e++)n[e].classList.remove("w");// Pokaż aktywny slajd
l[e-1].style.display="block",// Podświetl aktywną kropkę
n[e-1].classList.add("w")}t(1),// Automatyczne przewijanie
function l(){t(++e),setTimeout(l,5e3)}(),window.currentDiv=// Kliknięcie w kropkę
function(l){t(e=l)};//# sourceMappingURL=index.b11ebefe.js.map

//# sourceMappingURL=index.b11ebefe.js.map
