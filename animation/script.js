$(document).ready(function(){
   /* $(".btn").click(function(){
        if($(this).hasClass("ravindra")){
            $(this).parent().animate({height: "50px"}, "slow");
            $(this).removeClass("ravindra");
        }
        else
        {
           if($(".btn").hasClass("ravindra")) {
                $(".btn").each(function(){
                    if($(this).hasClass("ravindra")){
                        $(this).parent().animate({height:"50px"},"slow");
                        $(this).removeClass("ravindra");
                    }
                });
                $(this).parent().animate({height: "500px"}, "slow");
                $(this).addClass("ravindra");
               
            }
            else if(!$(this).hasClass("ravindra")){
                $(this).parent().animate({height: "500px"}, "slow");
                $(this).addClass("ravindra");
            }
        }
    });*/
    var i=1;
    setInterval(function(){
        $(".imgb").animate({left:"100px"},"slow");
        if(i>=4){
            i=1;
        }
        //alert("Hi");
    },1000);
});