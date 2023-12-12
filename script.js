document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    var searchBox = document.getElementById('searchBox');
    
    // Get the initial value
    var initialValue = searchBox.value;

    // Clear the initial value
    searchBox.value = '';

    // Set up the typewriter effect
    var index = 0;
    var typeSpeed = 50; // milliseconds

    function type() {
        if (index < initialValue.length) {
            searchBox.value += initialValue.charAt(index);
            index++;
            setTimeout(type, typeSpeed);
        }
    }

    // Trigger the typewriter effect
    type();
});