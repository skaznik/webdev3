$(function () {
    setTimeout(function () {
   let nowyElement = $('<div class="box">6</div>');
   $('#container').append(nowyElement);
    }, 2000);
    setTimeout(function () {
       $('#special').remove();
    }, 4000);

});