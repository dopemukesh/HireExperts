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
});