//Sam
const mySound = document.getElementById("sound"); //Assigns constant "mySound" to the element with ID: "sound" - our audio object.   
const mouseClickEvent = document.querySelector("body"); //Assigns constant "correctButton" to the element with ID: "sound" - our audio object.   
mouseClickEvent.addEventListener("click", function(){ mySound.play(); }); //Adds Event Listener and calls the function to play a sound.

function changeImage(event) // initialises the function ChangeImage with the paramater (event)
{
	const image = event.currentTarget; //sets the value of constant image to event.currentTarget.
	image.src = 'NTI logo red.png'; // sets the image source to the filepath of the image that will be changed to.
	image.removeEventListener('click', changeImage); // removes the old image event listener.
}

const image = document.querySelector('img'); // sets the value of the constant "image" by selecting the image element.
image.addEventListener('click', changeImage); // adds an event listener to the image.

