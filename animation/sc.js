$(document).ready(function(){
var images = Array("img/img_1.jpg",
               "img/img_2.jpg",
               "img/img_3.jpg");
var currimg = 0;
function loadimg(){
   $('.background').animate({ opacity: 1 },"slow",function(){
        //finished animating, minifade out and fade new back in           
        $('.background').animate({ opacity: 0.6 }, "slow",function(){
            currimg++;
            if(currimg > images.length-1){
                currimg=0;
            }
            var newimage = images[currimg];
            //swap out bg src                
            $('.background').css("background-image", "url("+newimage+")"); 
            //animate fully back in
            $('.background').animate({ opacity: 0.7 }, "slow",function(){
                //set timer for next
                setTimeout(loadimg,1500);
            });
        });
    });
  }
  setTimeout(loadimg,2000);
});