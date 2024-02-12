document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var buttonContainer = document.querySelector('.button-container');
    var h1Element = document.querySelector('h1');
    var catGif = document.querySelector('.cat-gif');

    yesButton.addEventListener('click', function () {
        // Change the GIF link to a new GIF
        catGif.src = 'https://media.tenor.com/4ZVSxNBJoF8AAAAj/peach-goma-flowers.gif'; // Change to the new GIF link
        // Hide the button container
        buttonContainer.style.display = 'none';
        // Center the GIF
        catGif.style.margin = 'auto';
     
        // Hide the <h1> element text
        h1Element.style.textAlign = 'center';
        h1Element.style.position = 'absolute';
        h1Element.style.top = '75%';
        h1Element.style.left = '50%';
        h1Element.style.transform = 'translate(-50%, -50%)';

        h1Element.textContent = 'Happy Valentines day Mr.Muscle';
    });

    noButton.addEventListener('click', function () {
        // Change the text of the <h1> element
        h1Element.textContent = 'Sure?';

        // Generate random coordinates within 100px range
        var randomX = Math.floor(Math.random() * 300 - 100); // Random X coordinate (-100 to 100)
        var randomY = Math.floor(Math.random() * 200 - 100); // Random Y coordinate (-100 to 100)

        // Apply random coordinates to button container and h1 element
        buttonContainer.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
        h1Element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';

        // Change the GIF link to a new GIF
        catGif.src = 'https://i.pinimg.com/originals/0f/63/0b/0f630b6b9673c23a0101337c507cca5b.gif'; // Change to the new GIF link

        // Reset the size of the GIF (if it was changed previously)
        catGif.style.width = '200px'; // Reset the width
        catGif.style.height = '200px'; // Reset the height
    });
});
