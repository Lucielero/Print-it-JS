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
const bannerImg = document.querySelector ('.banner-img') //main img
const arrowLeft = document.querySelector ('.arrow_left')
const arrowRight = document.querySelector ('.arrow_right')
const dots = document.querySelector ('.dot') //all dots

let currentIndex = 0 //index tracking

//EventListener
arrowRight.addEventListener ('click,' function() { //onclick event
	currentIndex = (currentIndex +1) //next img 
	slideDisplay (currentIndex, 'right') //new index and direction
	displayDot (currentIndex) //dot update
})

arrowLeft.addEventListener ('click,' function() {
	currentIndex=(currentIndex -1)
	slideDisplay (currentIndex, 'left')
	displayDot (currentIndex)
	})

//Function 

function slideDisplay (index, direction) {
	if (currentIndex === 0 && direction ==='right') {
		currentIndex = slides.length -1
		}
		else if (currentIndex ===slides.length -1 && direction ==='left') {
			currentIndex = 0
			}
	const imgPath = 'assets/images/slideshow/slide1' //img path
}
	
//Dots Function

