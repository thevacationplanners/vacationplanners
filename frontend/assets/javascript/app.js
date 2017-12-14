
$(document).ready(function(){
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
        // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
    });
});
var config = {
    apiKey: "AIzaSyAprNzrbuZ_vyk9ZICWESoZ2g-lQjSMiW0",
    authDomain: "vacation-traveler.firebaseapp.com",
    databaseURL: "https://vacation-traveler.firebaseio.com",
    projectId: "vacation-traveler",
    storageBucket: "vacation-traveler.appspot.com",
    messagingSenderId: "977337314611"
  };
  firebase.initializeApp(config);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
  //grabbing user input 
  $("#login,#create").on("click", function () {
        
                document.getElementById("activities").style.display = "block";
        
            });

    $("#login,#create").on("click", function () {
                
                document.getElementById("mainCard").style.display = "none";
                
             });
        
