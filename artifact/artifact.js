$("body").css("background-color","transparent");


// $(function(){
//     $(".crackone").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackone").show("slow");
//     });
// });


// $(function(){
//     $(".cracktwo").hide();
//     $(".verti-egg").on("click", function(){
//         $(".cracktwo").show("slow");
//     });
// });

// $(function(){
//     $(".crackthree").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackthree").show("slow");
//     });
// });

// $(function(){
//     $(".crackfour").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackfour").show("slow");
//     });
// });

// $(function(){
//     $(".crackfive").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackfive").show("slow");
//     });
// });

// $(function(){
//     $(".cracksix").hide();
//     $(".verti-egg").on("click", function(){
//         $(".cracksix").show("slow");
//     });
// });

// $(function(){
//     $(".crackseven").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackseven").show("slow");
//     });
// });

// $(function(){
//     $(".crackeight").hide();
//     $(".verti-egg").on("click", function(){
//         $(".crackeight").show("slow");
//     });
// });

// $(function(){
//     $(".cracknine").hide();
//     $(".verti-egg").on("click", function(){
//         $(".cracknine").show("slow");
//     });
// });

$(".crackone").hide();
$(".cracktwo").hide();
$(".crackthree").hide();
$(".crackfour").hide();
$(".crackfive").hide();
$(".cracksix").hide();
$(".crackseven").hide();
$(".crackeight").hide();
$(".cracknine").hide();

 var count  = 0;
 
$(function(){
    $(".verti-egg").on("click", function(){
        console.log("counter: " + count);
        count++;
        
        showCrack();
    });
    
});


var showCrack = function(){

    if(count == 1){
        $(".crackone").show("slow");
    }
    else if (count == 2){
        $(".cracktwo").show("slow");
    }
    else if (count == 3){
        $(".crackthree").show("slow");
    }
    else if (count == 4){
        $(".crackfour").show("slow");
    }
    else if (count == 5){
        $(".crackfive").show("slow");
    }
    else if (count == 6){
        $(".cracksix").show("slow");
    }
    else if (count == 7){
        $(".crackseven").show("slow");
    }
    else if (count == 8){
        $(".crackeight").show("slow");
    }
     else if (count == 9){
        $(".cracknine").show("slow");
    }


};

