let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = doucment.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let message = document.querySelector('#message').value;
    let errormessage = document.querySelector('#error-message');

    if (firstName === '' || lastName === '' || message === '') {
        errormessage.style.display = "block";
    } else {
        errormessage.style.display = "none";

        newComment = document.createElement('div');
    }
})