for (var increment = 0; increment < 300; increment++){
     $("body").append("<div class='circle'></div>");
}

$(".circle").each(function() {
    var newTop = (Math.random() * 10) + "px";
var newLeft = (Math.random() * 1400) + "px";
$(this).css("top",newTop);
$(this).css("left",newLeft);
});


$(document).ready(
    function(){
        $("#treeone").click(function () {
            $("#fall").toggle("slow");
        });
    });
    
$(document).ready(
    function(){
        $(".rock").click(function () {
            $(".skione").toggle("slow");
             $(".skitwo").toggle("slow");
              $(".mitten").toggle("slow");
               $(".poles").toggle("slow");
        });
    });