let slideIndex = 1;
showSlides(slideIndex);
autoSlide();

// Kliknięcie w kropkę
function currentDiv(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Automatyczne przewijanie
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 5000); // 10 sekund
}

function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('mySlides-button');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Ukryj wszystkie slajdy
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Deaktywuj wszystkie kropki
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('w');
  }

  // Pokaż aktywny slajd
  slides[slideIndex - 1].style.display = 'block';

  // Podświetl aktywną kropkę
  dots[slideIndex - 1].classList.add('w');
}

window.currentDiv = currentDiv;
