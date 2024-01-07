// Header.js

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('homeHeader');
    var links = header.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});
