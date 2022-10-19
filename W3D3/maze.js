$(function(){
      let isStart = false;
      let isWallHit = 0;
      let isCheated = false;

      const hitWall = function(){
            if(isStart){
                  console.log("isCheated: " + isCheated);
                  isWallHit++;
                  console.log(`wall hit ${isWallHit}`);
                  $("#boundary1").addClass("youlose");
                  $("#maze .boundary").addClass("youlose");
                  $("#end").removeClass("youlose");
            }
      };

      const resetMaze = function(){
            $("#boundary1").removeClass("youlose");
            $("#maze .boundary").removeClass("youlose");
      }

      $("#maze .boundary + :not(#end)").on("mouseover", hitWall);

      $("#boundary1").on("mouseenter", hitWall);

      
      $("#start").on("click", function(){
            isStart = true;
            isCheated = false;
            $(".boundary").removeClass("youlose");
            $("h2").text("Your game has started! You can restart anytime by clicking S");
      });

      $("#end").on("click", function(event){
            if(isStart){
                  const output = isWallHit === 0 && !isCheated ? "You won! :)" :  
                        + (isCheated) ? "Sorry, you lost because of Cheating! :(" : "Sorry, you lost! :( You hit the wall " + isWallHit + " time(s)";
                  $("h2").text(output);
                  console.log(isCheated);
                  console.log(isWallHit);
                  isStart = false;
                  isCheated = false;
                  isWallHit = 0;
            }
            else{
                  $("h2").prepend("You haven't start the game yet! ");
            }
            event.stopImmediatePropagation();
      });

      $(document).on("mouseover", function(event){
            if(isStart && isWallHit === 0 && ($(event.target).closest("#maze").length === 0)){
                  console.log("isCheated: " + isCheated);
                  isCheated = true;
                  hitWall();
                  $("h2").text("You have cheated!");
            }
      })

});