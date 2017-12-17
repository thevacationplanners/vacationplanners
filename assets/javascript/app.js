var states = [];
var parkName = [];
var parkDesc = [];
var parkWeather = [];
var parkURL = [];
var parameter = ["parks", "events", "campgrounds"];
// var info = ["name", "description", "weatherInfo", "url"];
var results;
var parkOrder;
var at;

var APIKey = "5nO2ScMG5JxfsFKNtLCTOHEKBhaZQ3puPlwUA5Rn";
// var queryURL = `https://developer.nps.gov/api/v1/parks?&api_key=${APIKey}`;

// $(document).ready(function () {
//     APIKey = "5nO2ScMG5JxfsFKNtLCTOHEKBhaZQ3puPlwUA5Rn";
//     queryURL = `https://developer.nps.gov/api/v1/parks?stateCode=FL&api_key=${APIKey}`;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function (response) {
//         var results = response.data;

//         console.log(results[0])
//     });
// });

$(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
    // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
});

Background();

function Background() {
    var imgs = [
            "assets/images/universal2.jpg",
            "assets/images/seaworld2.jpg",
            "assets/images/disney2.jpg"
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
})

$(".btn-sign").on("click", function () {
    at = ($(this).attr("data-attribute"))
    grabInfo()
    console.log(at)
});

$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .8, // Opacity of modal background
        inDuration: 500, // Transition in duration
        outDuration: 500, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
    });
});


var results;

function grabInfo() {
    var queryURL = `https://developer.nps.gov/api/v1/${parameter[0]}?stateCode=${at}&start=0&limit=10&api_key=${APIKey}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        results = response.data;
        console.log(results)
        console.log(results[0].description)
        console.log(results[1].name)
        for (var i = 0; i < results.length; i++) {
            states.push(results[i].fullName);  
            parkName.push(results[i].name); 
            parkDesc.push(results[i].description);
            parkWeather.push(results[i].weatherInfo);  
            parkURL.push(results[i].url)
        }
        for (var i = 0; i < states.length; i++) {
            $(".collection").append(`<a href="#modal1" data-info="${i}" class="collection-item waves-effect waves-light modal-trigger btn btn-park green">${states[i]}</a>`);
            $(".btn-park").css("margin", "2px")
            $(".btn-park").css("color", "white")
        };
        console.log(parkName)
        console.log(parkDesc)
        console.log(parkWeather)
        console.log(parkURL)
    })
}

$(".parks-list").on("click",".btn-park", function () {
    parkOrder = ($(this).attr("data-info"))
    fillModal();
    console.log(parkOrder)
})

$("#modal1").on("click", "modal-action", function () {
    $(".modal-content").empty();
    ($(this).attr("data-attribute", parkOrder))
    fillModal();
    console.log(parkOrder)
});

function fillModal() {
    $(".modal-content").append(`<h3>${parkName[parkOrder]}</h3>`);
    $(".modal-content").append(`<hr>`);
    $(".modal-content").append(`<h5>${"About the Park"}</h5>`);
    $(".modal-content").append(`<p>${parkDesc[parkOrder]}</p>`);
    $(".modal-content").append(`<h5>${"Directions"}</h5>`);
    $(".modal-content").append(`<p>${parkWeather[parkOrder]}</p>`);
    $(".modal-content").append(`<a>${parkURL[parkOrder]}</a>`)
}