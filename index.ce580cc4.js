let e=1;function t(t){let l=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("mySlides-button");t>l.length&&(e=1),t<1&&(e=l.length);// Ukryj wszystkie slajdy
for(let e=0;e<l.length;e++)l[e].style.display="none";// Deaktywuj wszystkie kropki
for(let e=0;e<s.length;e++)s[e].classList.remove("w");// Pokaż aktywny slajd
l[e-1].style.display="block",// Podświetl aktywną kropkę
s[e-1].classList.add("w")}//# sourceMappingURL=index.ce580cc4.js.map
t(1),// Automatyczne przewijanie
function l(){t(++e),setTimeout(l,5e3)}();
//# sourceMappingURL=index.ce580cc4.js.map
