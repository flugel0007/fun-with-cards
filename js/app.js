// Function to add a new flashcard to the preview container
function addFlashcard() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    // Ensure question and answer are not empty
    if (!question || !answer) {
        alert("Please provide both a question and an answer.");
        return;
    }

    // Create the flashcard container
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.onclick = function () {
        flipCard(flashcard);
    };

    // Create the front and back of the flashcard
    const front = document.createElement('div');
    front.classList.add('front');
    front.innerText = question;

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerText = answer;

    // Append front and back to the flashcard container
    flashcard.appendChild(front);
    flashcard.appendChild(back);

    // Append the flashcard to the preview container
    const flashcardPreviewContainer = document.getElementById('flashcard-preview-container');
    flashcardPreviewContainer.appendChild(flashcard);

    // Clear the input fields
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
}

// Function to flip the flashcard
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Toggle Dark/Light Mode
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Toggle Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('show');
});
