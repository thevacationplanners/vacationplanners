
const txtEmailSignIn = document.getElementById("txtEmail");
const txtEmailSignUp = document.getElementById("txtEmailSignUp");
const txtPasswordSignIn = document.getElementById("txtPassword");
const txtPasswordSignUp = document.getElementById("txtPasswordSignUp");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

btnLogin.addEventListener("click", e => {
    const email = txtEmailSignIn.value;
    const pass = txtPasswordSignUp.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener("click", e => {
    const email = txtEmailSignUp.value;
    const pass = txtPasswordSignUp.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});


var stateNames = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine",
"Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","North Carolina","North Dakota","New York",
"Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

var stateInitials = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NC","ND","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]

for (var i = 0; i < stateNames.length; i++) {
    
    $("#try").append("<a class='waves-effect waves-light btn stateNameButton' data-initials= "+ stateInitials[i] +" style='margin:5px;float:left'>" + stateNames[i] + "</a>");
    }







    $(".stateNameButton").on("click", function() {
        var state = $(this).text
    })
