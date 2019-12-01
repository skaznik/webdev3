window.onload = function () {

    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function () {
       document.getElementById('click-counter').textContent = ++clickCounter;
    });

    document.addEventListener('dblclick', function () {
        document.getElementById('dbl-click-counter').textContent = ++dblClickCounter;
    });

    document.addEventListener('keydown',function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;

    });
};