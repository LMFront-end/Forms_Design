// Get reference to the DOM elements
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');


// Add Event Listener

signUp.addEventListener('click', () => {

    // Remove classes first if they exist

    loginIn.classList.remove('block');
    loginUp.classList.remove('none')

    //add classes
    loginIn.classList.toggle('none');
    loginUp.classList.toggle('block');

});


signIn.addEventListener('click', () => {

    // Remove classes first if they exist

    loginIn.classList.remove('none');
    loginUp.classList.remove('block')

    //add classes
    loginIn.classList.toggle('block');
    loginUp.classList.toggle('none');

});