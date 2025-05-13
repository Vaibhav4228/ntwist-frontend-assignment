let form = document.getElementById('contactForm');
let startTime;
let endTime;

form.addEventListener('focusin', () => {
    if (!startTime) startTime = Date.now();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000;
    alert(`You spent ${timeSpent} seconds filling out the form.`);

    form.reset();

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
