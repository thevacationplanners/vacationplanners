
$(document).ready(function(){
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
        // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
    });

    $("#login,#create").on("click", function () {
        
                document.getElementById("activities").style.display = "block";
        
            });

    $("#login,#create").on("click", function () {
                
                document.getElementById("mainCard").style.display = "none";
                
             });
        

    Background();

});

function Background(){
    var imgs = [
            "assets/images/niagaraFalls.jpg",
            "assets/images/grandCanyon.jpg",
            "assets/images/desotoCaverns.jpg"
        ],
        len = imgs.length,
        idx = -1;

    setInterval(function(){
        idx = (idx+1)%len;
        $("main").css("background", "#000 url("+imgs[idx]+")no-repeat").css("background-size", "cover");
    }, 5000);
}


$(".login-btn").on("click", function(){
    $(".first-page").fadeOut("fast", "linear");
    $(".second-page").slideDown("slow", "linear");
})

var config = {
    apiKey: "AIzaSyAprNzrbuZ_vyk9ZICWESoZ2g-lQjSMiW0",
    authDomain: "vacation-traveler.firebaseapp.com",
    databaseURL: "https://vacation-traveler.firebaseio.com",
    projectId: "vacation-traveler",
    storageBucket: "vacation-traveler.appspot.com",
    messagingSenderId: "977337314611"
  };
  firebase.initializeApp(config);

 
  $("#login,#create").on("click", function () {
        
                document.getElementById("activities").style.display = "block";
        
            });

    $("#login,#create").on("click", function () {
                
                document.getElementById("mainCard").style.display = "none";
                
             });
        

