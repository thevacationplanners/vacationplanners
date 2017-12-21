var states = [];
var parkName = [];
var parkDesc = [];
var parkWeather = [];
var parkURL = [];
var results;
var parkOrder;
var at;

var stateNames = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine",
"Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","North Carolina","North Dakota","New York",
"Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

var stateInitials = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NC","ND","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]



var APIKey = "5nO2ScMG5JxfsFKNtLCTOHEKBhaZQ3puPlwUA5Rn";

$(document).ready(function () {

    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
        // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
    });

    for (var i = 0; i < stateNames.length; i++) {
        
        $(".states-list").append("<a class='waves-effect waves-light btn stateNameButton' data-initials= "+ stateInitials[i] +" style='margin:5px;float:left'>" + stateNames[i] + "</a>");
        }

    Background();

    function Background() {
        var imgs = [
                "assets/images/niagaraFalls.jpg",
                "assets/images/grandCanyon.jpg",
                "assets/images/desotoCaverns.jpg"
            ],
            len = imgs.length,
            idx = -1;

        setInterval(function () {
            idx = (idx + 1) % len;
            $("main").css("background", "#000 url(" + imgs[idx] + ")no-repeat").css("background-size", "cover");
        }, 5000);
    }

    $(".login-btn").on("click", function () {
        $(".first-page").fadeOut("fast", "linear");
        $(".second-page").slideDown("slow", "linear");
        console.log(at);
    })

    $(".stateNameButton").on("click", function () {
        at = ($(this).attr("data-initials"));
        $(".parks-list").empty();
        grabInfo();
        console.log(at)
    })

    
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .8, // Opacity of modal background
        inDuration: 500, // Transition in duration
        outDuration: 500, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
    });

    function grabInfo() {
        var queryURL = `https://developer.nps.gov/api/v1/${"parks"}?stateCode=${at}&start=0&limit=10&api_key=${APIKey}`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            results = response.data;
            for (var i = 0; i < results.length; i++) {
                states.push(results[i].fullName);
                parkName.push(results[i].name);
                parkDesc.push(results[i].description);
                parkWeather.push(results[i].weatherInfo);
                parkURL.push(results[i].url)
            }
            for (var i = 0; i < states.length; i++) {
                $(".parks-list").append(`<a href="#modal1" data-info="${i}" class="collection-item waves-effect waves-light modal-trigger btn btn-park green">${states[i]}</a>`);
                $(".btn-park").css("margin", "2px")
                $(".btn-park").css("color", "white")
            };
        })
    }

    $(".parks-list").on("click", ".btn-park", function () {
        $(".modal-content").empty();
        parkOrder = ($(this).attr("data-info"))
        fillModal();
        console.log(parkOrder)
    })

    $("#modal1").on("click", ".modal-close", function () {
        $(".modal-content").empty();
    });

    $("#modal1").on("click", ".modal-action", function () {
        $(".modal-content").empty();
        ($(this).attr("data-attribute", parkOrder))
        event.preventDefault();
        var newPark = {
            dataPark: parkName[parkOrder]
        }
        database.ref().push(newPark);
        console.log(parkOrder)
    });

    function fillModal() {
        $(".modal-content").append(`<h3 id="short-park">${parkName[parkOrder]}</h3>`);
        $(".modal-content").append(`<hr>`);
        $(".modal-content").append(`<h5>${"About the Park"}</h5>`);
        $(".modal-content").append(`<p>${parkDesc[parkOrder]}</p>`);
        $(".modal-content").append(`<h5>${"Directions"}</h5>`);
        $(".modal-content").append(`<p>${parkWeather[parkOrder]}</p>`);
        $(".modal-content").append(`<a href="${parkURL[parkOrder]}" target="blank">${parkURL[parkOrder]}</a>`)
    }

    var config = {
        apiKey: "AIzaSyDdceN01iWJ9cOMvNYCPmgQ1ViqUcDzfQY",
        authDomain: "project-938a4.firebaseapp.com",
        databaseURL: "https://project-938a4.firebaseio.com",
        projectId: "project-938a4",
        storageBucket: "project-938a4.appspot.com",
        messagingSenderId: "408554082507"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    database.ref().limitToLast(9).on("child_added", function (snapshot) {
            var parkSnap = snapshot.val();
            var park = parkSnap.dataPark;
            var newItinerary = `<li class="collection-item blue">${park}</li>`;
            $(".itinerary-list").append(newItinerary);
        },
        function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
});