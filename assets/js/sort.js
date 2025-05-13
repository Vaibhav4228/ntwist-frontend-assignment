let sortButton = document.getElementById('sortButton');
let nameList = document.getElementById('nameList');

sortButton.addEventListener('click', () => {
    let items = Array.from(nameList.getElementsByTagName('li'));

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < items.length - 1; i++) {
            if (items[i].textContent > items[i + 1].textContent) {
                let temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    nameList.innerHTML = '';
    items.forEach(item => nameList.appendChild(item));
});
