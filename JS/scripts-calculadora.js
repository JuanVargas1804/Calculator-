let calculadora = document.querySelector('.calculadora');
console.log(calculadora);
let numero1 = '';
let numero2 = '';
// Recibo un evento click
calculadora.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('.calculadora__input')) {
        console.log('Es el input');
    };
    if (event.target.innerHTML === '+') {
        console.log('Es un +');
    } else if (event.target.innerHTML === '-') {
        console.log('Es un -');
    } else if (event.target.innerHTML === '*') {
        console.log('Es un *')
    } else if (event.target.innerHTML === '/') {
        console.log('Es un /')
    } else if (event.target.innerHTML === '=') {
        console.log('Es un =')
    } else {
        console.log(event.target);
    }
});