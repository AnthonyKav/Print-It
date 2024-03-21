// diapositives avec images et slogans 
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// selection des élements HTML nécéssaires au fonctionnement du carrousel 
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots'); // Sélectionnez le conteneur de points

let currentIndex = 0; 
// index de la diapositive actuelle 

// Crée les bullet points pour chaque diapo
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index; // Ajoutez un attribut de données pour garder la trace de l'index
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot'); // Sélectionne tous les  bullets points 

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour la bannière
function updateCarousel(index, direction) {
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
		// retourner à la dernière diapo lorsque l'utilisateur est sur la première et click gauche
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
		// Revenir à la première diapositive lorsque l'utilisateur est sur la dernière et click droite
    }

    // Mettre à jour l'image de la bannière 
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le slogan de la bannière
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Met à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Met à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage'); //mise à jour de la bannière au démérage 
updateDots(currentIndex);  // mise à jour des bullet points au démarage du site 