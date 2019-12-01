/* sprawdzamy, czy model DOM jest gotowy - BARDZO WAŻNE!!!! */
window.onload = function () {
    /* wyszukiwanie po id */
   // document.getElementById('container').style.border = '5px solid red';
    /* wyszukiwanie po klasie CSS */
   // document.querySelector('.box').style.border = '3px solid red';

    //let array = document.getElementsByClassName('box');
    //for (let i = 0; i < array.length; i++) {
    //array[i].style.border = '2px solid blue';
    //}
    /* szybsza metoda */
    //let array = document.getElementsByClassName('box');
    //for (element of array) {
      //  element.style.border = '5px solid green'
   // }
    /* wyszukiwanie po tagach */
    let array = document.getElementsByTagName('div');
    for (element of array) {
        element.style.border = '5px solid green'
    }

};