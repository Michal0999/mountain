const moveImg = document.querySelector('.imgUp');
const moveImg2 = document.querySelector('.imgUp2');
const moveImg3 = document.querySelector('.imgUp3');

const img = document.querySelector('.headImg');
const img2 = document.querySelector('.headImg2');
const img3 = document.querySelector('.headImg3');

moveImg.addEventListener('click', function () {
	img.classList.toggle('changeImg');
})

moveImg2.addEventListener('click', function () {
	img2.classList.toggle('changeImg');
	moveImg.classList.toggle('hideButton');
})

moveImg3.addEventListener('click', function () {
	img3.classList.toggle('changeImg');
	moveImg.classList.toggle('hideButton');
})

const navBtn1 = document.querySelector('.nav1');
const navBtn2 = document.querySelector('.nav2');
const navBtn3 = document.querySelector('.nav3');
const navBtn4 = document.querySelector('.nav4');

const art = document.querySelector('.article');
const art1 = document.querySelector('.article1');
const art2 = document.querySelector('.article2');
const art3 = document.querySelector('.article3');
const art4 = document.querySelector('.article4');

navBtn1.addEventListener('click', function () {
	art.classList.add('hideArt');
	art1.classList.add('showArt');
	art2.classList.remove('showArt');
	art3.classList.remove('showArt');
	art4.classList.remove('showArt');
})

navBtn2.addEventListener('click', function () {
	art.classList.add('hideArt');
	art1.classList.remove('showArt');
	art2.classList.add('showArt');
	art3.classList.remove('showArt');
	art4.classList.remove('showArt');
})

navBtn3.addEventListener('click', function () {
	art.classList.add('hideArt');
	art1.classList.remove('showArt');
	art2.classList.remove('showArt');
	art3.classList.add('showArt');
	art4.classList.remove('showArt');
})

navBtn4.addEventListener('click', function () {
	art.classList.add('hideArt');
	art1.classList.remove('showArt');
	art2.classList.remove('showArt');
	art3.classList.remove('showArt');
	art4.classList.add('showArt');
})

const scrollDown = document.querySelector('.scrollDown');

scrollDown.addEventListener('click', function () {
	art.scrollIntoView({
		behavior: 'smooth'
	})
})

const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scroll', function () {
	if (window.scrollY > 666) {
		scrollUp.classList.add('display');
	} else {
		scrollUp.classList.remove('display');
	}
})

scrollUp.addEventListener('click', function () {
	document.body.scrollIntoView({
		behavior: 'smooth'
	})
})