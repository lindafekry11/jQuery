$(document).ready(function(){
    start_slideshow();
   });
   
   var interval;
   
   function start_slideshow()
   {
    clearInterval(interval);
    var images = ["1" , "2" , "3" , "4" , "5"];
    interval=setInterval(function(){
     var img_no=document.getElementById("image_no").value;
     $("#image_div").fadeOut(300,function(){
      document.getElementById("image_div").innerHTML="<img src='img/"+images[img_no]+".jpg'>";
      if(img_no==3)
      {
       document.getElementById("image_no").value=0;
      }
      else
      {
       document.getElementById("image_no").value=Number(img_no)+1;
      }
     });
     $("#image_div").fadeIn(1500);
    }, 2000);
   }
   
   function pause_slideshow()
   {
    clearInterval(interval);
   }


   $(document).ready(function () {
    $("section figcaption").hide();
    $("#img1").click(function () {
        $("#figCap1").animate({
            height: "toggle",
        }, "slow");
    });
});

$(document).ready(function () {
  $("section figcaption").hide();
  $("#img2").click(function () {
      $("#figCap2").animate({
          height: "toggle",
      }, "slow");
  });
});
      
$(document).ready(function () {
  $("section figcaption").hide();
  $("#img3").click(function () {
      $("#figCap3").animate({
          height: "toggle",
          
      }, "slow");
  });
});
