document.addEventListener('DOMContentLoaded', function () {
    var spanElement = document.querySelector('#heading span');
    var inputValue = document.getElementById('search').value;

    var spanText = spanElement.textContent;
    var initialValue = inputValue;

    spanElement.textContent = '';
    document.getElementById('search').value = '';

    var spanIndex = 0;
    var spanSpeed = 200;

    function typeSpan() {
        if (spanIndex < spanText.length) {
            spanElement.textContent += spanText.charAt(spanIndex);
            spanIndex++;
            setTimeout(typeSpan, spanSpeed);
        } else {
            typeInput();
        }
    }

    var inputIndex = 0;
    var inputSpeed = 150;

    function typeInput() {
        var inputBox = document.getElementById('search');
        if (inputIndex < initialValue.length) {
            inputBox.value += initialValue.charAt(inputIndex);
            inputIndex++;
            setTimeout(typeInput, inputSpeed);
        }
    }

    typeSpan();

    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    var body = document.body;

    menuIcon.addEventListener('click', function () {
        body.classList.toggle('sidebar-open');
    });

    closeIcon.addEventListener('click', function () {
        body.classList.remove('sidebar-open');
    });

    var modal = document.getElementById('ratingModal');
    var ratingsSection = document.querySelector('.ratings');
    var closeBtn = document.querySelector('.close');
    var submitBtn = document.getElementById('submitRating');
    var stars = document.querySelectorAll('.star');
    var ratingDisplay = document.getElementById('ratingDisplay');

    var selectedRating = 0;

    ratingsSection.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', function () {
        ratingDisplay.innerHTML = 'You rated ' + selectedRating + ' &#9733;';
        modal.style.display = 'none';
    });

    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            selectedRating = parseInt(star.getAttribute('data-rating'));
            stars.forEach(function (s) {
                s.classList.remove('rated');
            });

            var clickedIndex = Array.from(stars).indexOf(star);
            for (var i = 0; i <= clickedIndex; i++) {
                stars[i].classList.add('rated');
            }
        });
    });

    var chatButtons = document.querySelectorAll('.open-chat');

    chatButtons.forEach(function (chatButton) {
        chatButton.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Chat button clicked!');
        });
    });





    function toggleContent(element) {
        element.parentNode.classList.toggle('active');
    }

});
