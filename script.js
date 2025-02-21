
function selectBundle(pairs, price, element) {
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('selected');
        option.querySelector('.bundle-details').classList.add('hidden');
    });
    element.classList.add('selected');
    element.querySelector('.bundle-details').classList.remove('hidden');
    document.getElementById('total-price').innerText = 'DKK ' + price.toFixed(2);
}

function addToCart() {
    let button = document.querySelector('.add-to-cart');
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200);
}
