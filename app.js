const numbers = {
	one: "One",
	two: "Two",
	three: "Three",
};
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button =>{
	button.addEventListener("click", () =>{
		const value = button.dataset.value;
		speakNumber(value)
	});
});
function speakNumber (value) {
const numberText = numbers[value];
if (numberText) {
	const utterance = new SpeechSynthesisUtterance(numberText);
	window.speechSynthesis.speak(utterance)
}
}