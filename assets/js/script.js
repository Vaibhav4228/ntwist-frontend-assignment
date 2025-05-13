document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    this.style.display = 'none';

    document.getElementById('confirmationMessage').style.display = 'block';

    document.querySelector('.rating').style.display = 'flex';
});

const stars = document.querySelectorAll('.rating label');
stars.forEach((label, index) => {
    label.addEventListener('click', () => {
        const selectedIndex = index;
        stars.forEach((l, i) => {
            l.querySelector('span').style.color = i <= selectedIndex ? 'gold' : 'lightgray';
        });
        console.log(`Selected Rating: ${5 - selectedIndex}`);
    });
});
