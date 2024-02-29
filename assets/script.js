//Slides Array 
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

//Element selection 

const numberOfSlides = slides.length 
let currentIndex = 0 //index tracking

const leftArrow = document.querySelector ('.arrow_left')
const rightArrow = document.querySelector ('.arrow_right')
const dotsContainer = document.querySelector ('.dots')


//EventListener
rightArrow.addEventListener("click", () => {
	currentIndex = (currentIndex === numberOfSlides - 1) ? 0 : currentIndex + 1;
	updateCarousel();
})

leftArrow.addEventListener("click", () => {
	currentIndex = (currentIndex === 0) ? numberOfSlides - 1 : currentIndex - 1;
	updateCarousel();
})

//FUNCTIONS 

//Affichage du carousel en fonction de la position
function createCarousel () {
	const currentSlide = slides[currentIndex]
	const imageElement = document.querySelector(".banner-img")
	imageElement.setAttribute ("src", "./assets/images/slideshow/" + currentSlide.image)
	const textElement = document.querySelector (".banner-txt")
	textElement.innerHTML = currentSlide.tagLine
	updateDots()
}

//Bulletpoints
function createDots() {
	console.log()
	for (let index = 0; index < numberOfSlides; index++) {
		const dot = document.createElement("div")
		dot.classList.add ("dot")
		dotsContainer.appendChild(dot)
}
}

function updateDots() {
	console.log()
	const dots = document.querySelectorAll (".dot")
	dots.forEach ((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentIndex)
	})
}

//MAJ carousel 
function updateCarousel() {
 createCarousel()
}

//CALL
createCarousel() //appel pour afficher la 1ère diapo
createDots() //appel initial pour créer les points indicateurs
console.log()