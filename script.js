let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let message = document.querySelector('#message').value;
    let errormessage = document.querySelector('#error-message');

    if (firstName === '' || lastName === '' || message === '') {
        errormessage.style.display = "block";
    } else {
        errormessage.style.display = "none";

        newComment = document.createElement('div');
        newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
        newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
                  <h3 class="font-medium text-gray-900">${firstName} ${lastName} Gibbons</h3>
                  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                  </div>
                </div>
        `;

        let commentList = document.querySelector('#comment-list');
        commentList.appendChild(newComment);

        form.reset();
    }
});