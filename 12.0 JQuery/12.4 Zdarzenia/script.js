$(function () {
   let clickCounter = 0;
   let dblClickCounter = 0;
   let keyDownCounter = 0;

   $(document).on('click', function () {
       $('#click-counter').text(++clickCounter);
       let button = $('#add-element');
       let boxContainer = $('#box-container');
       button.on('click', function () {
           let nowyElement = $('<div class="box"></div>');
           boxContainer.append(nowyElement);

       });

   });

});
