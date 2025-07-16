const navbarToggle = document.querySelector('.navbar-toggle')
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active')
    navbarMenu.classList.toggle('active')
})



  const text = "Bienvenue chez NovaSolution"; // Ton texte ici
  const textElement = document.querySelector(".typewriter-text");
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100); // 100ms entre chaque lettre
    }
  }

  window.addEventListener("load", () => {
    typeLetter();

    // Durée totale = 100ms * nombre de lettres + marge
    const totalTime = text.length * 100 + 1000;
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, totalTime);
  });
