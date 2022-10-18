$(function(){
      $width = $("#width");
      $growth = $("#growth");
      $speed = $("#speed");
      $noOfCircles = $("#noOfCircles");

      $("#start").on("click", function(event){
            for(let i = 0; i < $($noOfCircles).val(); i++){
                  createCircle();
            }
      });

      const createCircle = () => {
            const $circle = $('<div>', {class: 'circle inlineBlock absolute'});
            $circle.css("background-color", createRandomColor());
            $("#circles").append($circle);

            let position = getRandomPosition($circle);
            $circle.css("top", position.x + "px");
            $circle.css("left", position.y + "px");

            const id = setInterval(function(){
                  let size = parseInt($($circle).css("height")) + parseInt($growth.val()) + "px";
                  $circle.css("width", size);
                  $circle.css("height", size);
            }, $speed.val());

            $circle.on("click", function(){
                  $circle.hide();
                  clearInterval(id);
            });

            $circle.on("mouseenter", function(){
                  $circle.css("opacity", "0.6");
            });

            $circle.on("mouseleave", function(){
                  $circle.css("opacity", "1.0");
            });
      }

      const getRandomPosition = function(element){
            const x = $('body').outerHeight() - element.height();
            const y = $('body').outerWidth() - element.width();
            const randX = Math.floor(Math.random() * x);
            const randY = Math.floor(Math.random() * y);
            return {x: randX, y: randY};
      }

      const createRandomColor = function () {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                  color += Math.floor(Math.random() * 10);
              }
            return color;
        };
});