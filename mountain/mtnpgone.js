$("div").click(function(){
   window.location=$(this).find("a").attr("href"); return false;
});

for (var increment = 0; increment < 300; increment++){
     $("body").append("<div class='circle'></div>");
}

$(".circle").each(function() {
    var newTop = (Math.random() * 100) + "px";
var newLeft = (Math.random() * 1400) + "px";
$(this).css("top",newTop);
$(this).css("left",newLeft);
});