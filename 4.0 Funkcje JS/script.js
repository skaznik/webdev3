function pierwszaFunkcja() {
console.log('Jakaś wartość');
}

/*pierwszaFunkcja();*/

function wypiszTekst(parametr) {
    console.log(parametr);
}

/*wypiszTekst('przykładowy tekst');*/

function suma(a,b) {
    console.log('Suma');
    let sum = a + b;
    console.log(sum);
    console.log('Suma : '+sum);
}
/*suma(1,5);*/

function suma2(a, b) {
      return a+b;
}
//let sum = suma2(5,3);
//console.log(sum);
//console.log(suma2(2,1));

let a = 5;
function modyfikuj(liczba) {
    liczba = 1;
}
console.log(a);
modyfikuj(a);
console.log(a);
let array = ['jeden', 'dwa', 'trzy'];
function modyfikuj2(tablica) {
tablica[0] = 'Nowa wartość';
}
console.log(array);
modyfikuj2(array);
console.log(array);