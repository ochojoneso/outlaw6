// Send Email
//href="mailto:info@outlaw6music.com?subject=Testing out mailto!&body=This is only a test!"
// id = process_email 
// id = send_email
$("#process_email").click(function() {

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
