   console.log("test")

    var ID = "Test";
    var i = 20;

      var resDiv = $("<div>").addClass("well");
      var h2 = $("<h2>");
      var label = $("<span>").addClass("label label-primary");
     

     
      label.append(i)
      h2.append(label).append("|" + ID);
      resDiv.append(h2);
      $(".reservations").append(resDiv);

// $(".reservations").html("THIS IS WORKING")