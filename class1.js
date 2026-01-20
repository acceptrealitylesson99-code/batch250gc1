$(document).ready(function () {
  $("#show").click(function () {
    $("#class").show();
  });
  $("#hide").click(function () {
    $("#class").hide();
  });
  $("#toggle").click(function () {
    $("#class").toggle();
  });

  //   $("#read").hover(function(){
  // $("#display").show()
  //   })
  $("#read").click(function () {
    $("#display").show();
  });
  $("#fade-in").click(function () {
    $("#class1").fadeIn(3000);
  });
  $("#fade-out").click(function () {
    $("#class1").fadeOut(4000);
  });
  $("#fade-toggle").click(function () {
    $("#class1").fadeToggle(5000);
  });

  $("#slide-up").click(function () {
    $("#box").slideUp();
  });
  $("#slide-down").click(function () {
    $("#box").slideDown();
  });
  $("#slide-toggle").click(function () {
    $("#box").slideToggle();
  });
  $("#btn-css").click(function () {
    $("#box1").css("backgroundColor", "black");
    $("#box1").css("color", "pink");
    $("#box1").css("boxShadow", "45px 5px 10px pink");
  });

  $("#animate").click(function () {
    $("#box2").animate({ "left": "200px" }, 1000);

     $("#box2").animate({ "top" : "100px" }, 1000);
    $("#box2").animate({ "top" : "0" }, 1000);
       $("#box2").animate({ "left" : "0" }, 1000);
          // $("#box2").animate({ "width" : "100" }, 1000);

      
  });

  $("#dom").click(function(){

    let color = $("#color").val()
     let width = $("#width").val()
      let height = $("#height").val()


$("#box5").css({"backgroundColor" : color, "width" : width+"px", "height" : height+"px"})
$("box5") 

  })

  $("#apply").click(function(){
    $("#box3").html("its has been  changed <b> applying effect</b> ")
  })
});
