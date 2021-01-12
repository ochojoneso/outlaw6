// Initialize classes and ID's for jQuery libraries
$(document).ready(function() {

  Calendar.init();


  var setSrc = function (src) {

    console.log( src );

    

  };
 
  
  $(".list-group-item-action").click(function() {

     var src = $(this).data("media");

     //setSrc(src)

     $('#audioPlayer').attr("src",src);

  });

});

// Audio Player
// Audio Player - END

// Send Email
$("#process_email").click(function() {

//href="mailto:info@outlaw6music.com?subject=Testing out mailto!&body=This is only a test!"
// id = process_email 
// id = send_email

  var name = $( "#Name" ).val();

  // var Email = $( "#Email" ).val();

  var Subject = $( "#Subject" ).val();

  var Message = $( "#Message" ).val();

  var final = "mailto:info@outlaw6music.com?subject=" + Subject + "&body=" + Message;

  console.log(final);

  //href="mailto:info@outlaw6music.com?subject=Testing out mailto!&body=This is only a test!"

  $("#send_email").attr("href",final);

  send();

});

var send = function(){

  $("#send_email").trigger("click");

};
// Send Email - END

// Calendar
var Calendar = (function () {
 
  var setVars = function () {

    var fullDate = new Date();

    // Get Month
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var monthText = month[fullDate.getMonth()];



    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var weekdayText = weekday[fullDate.getDay()];


    var yearText = fullDate.getFullYear();


    var checkExist = setInterval(function() {

      if ($('#cal-monthText').length) {

        clearInterval(checkExist);

        console.log(monthText);

        $("#cal-monthText").text(monthText);

        $("#cal-yearText").text(yearText);
   
      }

    }, 100); // check every 100ms
    // Get Month - END



    //<span class="active"></span>

    
 
  };


  var setText = function(){

    

  };
 
  var init = function () {

    setVars()
 
  };
 
  return {
    init: init
  };
 
})();
// Calendar - END - Calendar.init();


// Band Members Gallery
var bandGallery = function(){

  // bandMem_Container




};
// Band Members Gallery - END

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
