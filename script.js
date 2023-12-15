
// alert('This website is under construction !');

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var spanElement = document.querySelector('#heading span');
    var inputValue = document.getElementById('searchBox').value;

    // Get the initial values
    var spanText = spanElement.textContent;
    var initialValue = inputValue;

    // Clear the initial values
    spanElement.textContent = '';
    document.getElementById('searchBox').value = '';

    // Set up the typewriter effect for span text
    var spanIndex = 0;
    var spanSpeed = 200; // milliseconds

    function typeSpan() {
        if (spanIndex < spanText.length) {
            spanElement.textContent += spanText.charAt(spanIndex);
            spanIndex++;
            setTimeout(typeSpan, spanSpeed);
        } else {
            // Once span is done, start typing the input value
            typeInput();
        }
    }

    // Set up the typewriter effect for input value
    var inputIndex = 0;
    var inputSpeed = 200; // milliseconds

    function typeInput() {
        var inputBox = document.getElementById('searchBox');
        if (inputIndex < initialValue.length) {
            inputBox.value += initialValue.charAt(inputIndex);
            inputIndex++;
            setTimeout(typeInput, inputSpeed);
        }
    }

    // Trigger the typewriter effect for span text
    typeSpan();



    // Code for sidebar
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    var body = document.body;

    menuIcon.addEventListener('click', function () {
        body.classList.toggle('sidebar-open');
    });

    closeIcon.addEventListener('click', function () {
        body.classList.remove('sidebar-open');
    });



    // Code for star ratings
    var modal = document.getElementById('ratingModal');
    var ratingsSection = document.querySelector('.ratings');
    var closeBtn = document.querySelector('.close');
    var submitBtn = document.getElementById('submitRating');
    var stars = document.querySelectorAll('.star');
    var ratingDisplay = document.getElementById('ratingDisplay'); // Add an element to display the selected rating

    var selectedRating = 0; // Variable to store the selected rating


    // Open the modal when the ratings section is clicked
    ratingsSection.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle the rating submission
    submitBtn.addEventListener('click', function () {
        // You can add logic to handle the submitted rating here

        // Update the UI with the selected rating
        ratingDisplay.innerHTML = 'You rated ' + selectedRating + ' &#9733;';

        // For simplicity, this example just closes the modal
        modal.style.display = 'none';
    });


    // Handle star click events
    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            selectedRating = parseInt(star.getAttribute('data-rating'));
            // Remove the 'rated' class from all stars
            stars.forEach(function (s) {
                s.classList.remove('rated');
            });

            // Add the 'rated' class to the clicked star and all previous stars
            var clickedIndex = Array.from(stars).indexOf(star);
            for (var i = 0; i <= clickedIndex; i++) {
                stars[i].classList.add('rated');
                
            }
        });
    });


    // for chat btn
    var chatButtons = document.querySelectorAll('.open-chat');

    chatButtons.forEach(function (chatButton) {
        chatButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)

            // You can add your logic here to handle the chat functionality
            // For now, let's just log a message
            console.log('Chat button clicked!');
        });
    });

});