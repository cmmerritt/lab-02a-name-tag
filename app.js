const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');

const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounDisplay = document.getElementById('pronoun-display');

changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value='';
});

pronounButton.addEventListener('click', () => {
    pronounDisplay.textContent = pronounInput.value;
    pronounInput.value='';
});
