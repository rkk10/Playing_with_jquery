$(document).ready(function(){
    var result = 0;
    var str="";
    $(".btn_box").click(function(){
        if(this.id=="."){
            if($("#ip").val().indexOf('.')==-1){
                $("#ip").val($("#ip").val()+(this.id));
            }
            else{
                return false;
            }
        }
        else{
         $("#ip").val($("#ip").val()+(this.id));   
        }
    });
    $(".right_btn").click(function(){
        var strg=$("#screen").val();
        for(var i=0;i<=$("#screen").val().length;i++){
            str+=strg[i];
            if(strg[i]=="+")
                {
                    alert(str+"  +");
                    result+=parseInt(str);
                }
            else if(strg[i]=="-")
                {
                    alert(str+"  -");
                    result-=parseInt(str);
                }
            else if(strg[i]=="*")
                {
                    alert(str+"  *");
                    result*=parseInt(str);
                }
            else if(strg[i]=="/")
                {
                    alert(str+"  /");
                    result/=parseInt(str);
                }
            else{
                str+=strg[i];
            }
        }
        alert(result);
        //$("#result").val(parseInt($("#ip").val())+parseInt($("#screen").val()));
        $("#screen").val($("#screen").val()+$("#ip").val()+" "+this.id+" ");
        //$("#ip").val("");
        //alert($("#screen").val().split(/[+-/*%]+/));
        
        
    });
    $("#clear").click(function(){
        $("#screen").val("");
        $("#result").val("");
    });
   
    function add(){
        
    }
    function sub(){
        
    }
    function div(){
        
    }
    function mul(){
        
    }
    
});