//wait for dom to load
document.addEventListener('DOMContentLoaded', () => {
    //select all toggle buttons on page
    const togggleButtons = document.querySelectorAll('.toggle-project-btn');

    togggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            //find element right next to button in html
            const screenshotDiv = button.nextElementSibling;

            //toggle the hidden class
            screenshotDiv.classList.toggle('hidden');

            //change the button text if image is visible
            if (screenshotDiv.classList.contains('hidden')){
                button.textContent = 'View Project';
            }
            else{
                button.textContent = 'Hide Project';
            }
        });
    });
});