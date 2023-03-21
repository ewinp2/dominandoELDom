console.log("hola cabeza de pinga");

const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const boton = document.querySelector('#btnCalcular');
const total = document.querySelector('#resultado');

boton.addEventListener('click', botonClick);

function botonClick(){
const suma = calcular1.value + calcular2.value;
total.innerText = "resultado " + suma;
};







//console.log(input.value);

//h1.innerHTML = 'pedro juan y diego';
//console.log (h1.getAttribute('class'));

//h1.setAttribute('class', 'rojo');
//h1.classList.add('amarillo');
//h1.classList.remove('rojo');
//h1.classList.toggle('rojo');
//h1.classList.contains('rojo'); true o false

//input.value = '456';
//input.placeholder = 'pedro escribe';

//const imagen = document.createElement('img');

//imagen.setAttribute('src', 'https://w0.peakpx.com/wallpaper/132/121/HD-wallpaper-goku-perron-en-dios-anime-dragon-ball-ssj-ssj-dios.jpg');
//console.log(imagen)

//pid.append(imagen);