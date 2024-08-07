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

//Elements selection 
const numberOfSlides = slides.length 
let currentIndex = 0 //index tracking

const leftArrow = document.querySelector ('.arrow_left')
const rightArrow = document.querySelector ('.arrow_right')
const dotsContainer = document.querySelector ('.dots')

//Initial display
createCarousel() 
createDots() 

//EventListener
rightArrow.addEventListener ("click", () => navigateCarousel (1))
leftArrow.addEventListener ("click", () => navigateCarousel(-1))

//FUNCTIONS 

//Navigation du carousel en fonction de la direction 
function navigateCarousel(direction) {
	currentIndex = (currentIndex + direction + numberOfSlides) % numberOfSlides
	createCarousel()
}

//Affichage du carousel en fonction de la position
function createCarousel () {
	const currentSlide = slides[currentIndex]
	document.querySelector (".banner-img").src = "./assets/images/slideshow/" + currentSlide.image
	document.querySelector (".banner-txt").innerHTML = currentSlide.tagLine
	updateDots()
}

//Bulletpoints
function createDots() {
	for (let index = 0; index < numberOfSlides; index++) {
		const dot = document.createElement("div")
		dot.classList.add ("dot")
		if (index == 0) {
			dot.classList.add("dot_selected")
		}
		dotsContainer.appendChild(dot)
}
}

//MAJ Bulletpoints
function updateDots() {
	const dots = document.querySelectorAll (".dot")
	dots.forEach ((dot, index) => {
		console.log(index)
		dot.classList.toggle("dot_selected", index === currentIndex)
	})
}