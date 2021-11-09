// MAKE SURE TO HIDE API KEYS

var apiContentContainerEl = document.querySelector(".apiContent");
var dataBlockEl = document.querySelector(".dataBlock");


var inputEl = document.getElementById("input_field");



// WORKING *** 1/100


function numAPIFetch(num) {
    var numAPIUrl = "http://apilayer.net/api/validate?access_key=" + "0d85ce9cb7d0f17ad315893298a686f4" + "&number=" + num + "&format=1";

    fetch(numAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayPhoneData(data, num);
            });
        } else {
            alert('fetch error');
        }
    });

};

function displayPhoneData(data, num) {
    console.log(data);
    console.log(num);


    var dataBlockEl = document.createElement("div");
    dataBlockEl.className = "col s6";

    var iframeEl = document.createElement("div");
    iframeEl.className = "col s6";


    var carrierEl = document.createElement("div");
    carrierEl.textContent= "Carrier: " + data.carrier;
    carrierEl.className= "col s12";

    var countryNameEl = document.createElement("div");
    countryNameEl.textContent= "Country Name:  " + data.country_name;
    countryNameEl.className= "col s12";
    
    var locationEl = document.createElement("div");
    locationEl.textContent= "Location: " + data.location;
    locationEl.className= "col s12";
    
    var iframeBox = document.createElement("div");
    iframeEl.innerHTML = '<iframe width="300" height="225" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=' + data.location  + ',+' + data.country_code + '&key=AIzaSyAfl9qXiBEqLsi1wvqPGoTN9N7f4YtBp38"></iframe>';
    iframeBox.setAttribute("style", "margin: 0 auto;");
    iframeEl.appendChild(iframeBox);

    iframeEl.appendChild(iframeBox);

    


    




    dataBlockEl.appendChild(carrierEl);
    dataBlockEl.appendChild(countryNameEl);
    dataBlockEl.appendChild(locationEl);






    apiContentContainerEl.appendChild(iframeEl);
    apiContentContainerEl.appendChild(dataBlockEl);





};



// WORKING ***
// https://ipapi.co/api/#complete-location
function ipAPIFetch() {

    var ipAPIUrl = "https://ipapi.co/" + "68.118.186.242" + "/json/";

    fetch(ipAPIUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            });
        } else {
            alert('fetch error');
        }
    });
};

// WORKING *** 20/1000
function emailAPIFetch(email) {

    var emailAPIUrl = "https://mailcheck.p.rapidapi.com/?domain=" + email;

    fetch(emailAPIUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mailcheck.p.rapidapi.com",
            "x-rapidapi-key": "c4287c9f3amsh8bfc0b1037c11d1p11f604jsnc6ad4480a841"
        }
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayEmail(data, email);
            });
        } else {
            alert('fetch error');
        }
    });
};

// GOOGLE MAPS API CHECK ?
// https://developers.google.com/maps/documentation/embed/map-generator 

// FUNCTIONS TO CREATE/DISPLAY ELEMENTS

var displayEmail = function (data, email) {
    console.log(data, email);
    // var temailConainerEl = document.getElementById("email-data");
    // for (var i = 0; i < email.length; i++) {
    //     var emailEl = document.createElement("div");
    //     emailEl.innerHTML = "Email Info:" + email[i].domain;
    //     emailContainerEl.appendChild(div);
    //     console.log();
    // }

    var dataBlockEl = document.createElement("div");
    dataBlockEl.className = "col s6";

    var iframeEl = document.createElement("div");
    iframeEl.className = "col s6";


    var dataBlockContainerEl = document.createElement("div");
    dataBlockContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataBlockContainerEl.className = "col-s12";
    dataBlockContainerEl.textContent = "Should you block this email?: " + data.block;

    var dataDisposContainerEl = document.createElement("div");
    dataDisposContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataDisposContainerEl.className = "col-s12";
    dataDisposContainerEl.textContent = "Is this email disposable?: " + data.disposable;

    var dataDomainContainerEl = document.createElement("div");
    dataDomainContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataDomainContainerEl.className = "col-s12";
    dataDomainContainerEl.textContent = "What domain is this email from?: " + data.domain;

    var dataRiskContainerEl = document.createElement("div");
    dataRiskContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataRiskContainerEl.className = "col-s12";
    dataRiskContainerEl.textContent = "Is this email address impose a risk?: " + data.risk;

    var dataTextContainerEl = document.createElement("div");
    dataTextContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataTextContainerEl.className = "col-s12";
    dataTextContainerEl.textContent = "Should you trust this email address?: " + data.text;

    var dataValidContainerEl = document.createElement("div");
    dataValidContainerEl.setAttribute("style", "background-color: white; width: 50%; margin: 0 auto; text-align: center; ");
    dataValidContainerEl.className = "col-s12";
    dataValidContainerEl.textContent = "Is this a real email address?: " + data.valid;

    // var iframeBox = document.createElement("div");
    // iframeEl.innerHTML = '<iframe width="300" height="225" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv534QaPC8g&key=AIzaSyAfl9qXiBEqLsi1wvqPGoTN9N7f4YtBp38"></iframe>';
    // iframeBox.setAttribute("style", "margin: 0 auto;");
    // iframeEl.appendChild(iframeBox);



    dataBlockEl.appendChild(dataBlockContainerEl);
    dataBlockEl.appendChild(dataDisposContainerEl);
    dataBlockEl.appendChild(dataDomainContainerEl);
    dataBlockEl.appendChild(dataRiskContainerEl);
    dataBlockEl.appendChild(dataTextContainerEl);
    dataBlockEl.appendChild(dataValidContainerEl);



    apiContentContainerEl.appendChild(iframeEl);
    apiContentContainerEl.appendChild(dataBlockEl);

    //dataBlockContainerEl.appendChild(dataBlockEl);
    //dataDisposContainerEl.appendChild(dataBlockEl);
    //dataDomainContainerEl.appendChild(dataBlockEl);
    //dataRiskContainerEl.appendChild(dataBlockEl);
    //dataTextContainerEl.appendChild(dataBlockEl);
    //dataValidContainerEl.appendChild(dataBlockEl);







};

var testBtn = document.querySelector("#testInput");

testBtn.addEventListener("click", function(event) {
    console.log(inputEl.value);
    if (inputEl.value.length === 11) {
        event.preventDefault();

        apiContentContainerEl.textContent = "";
        console.log("phone number");
        numAPIFetch(inputEl.value);
    } else if (inputEl.value.includes("@")) {
        event.preventDefault();

        apiContentContainerEl.textContent = "";

        console.log("test");
        emailAPIFetch(inputEl.value);
    } else if (inputEl.value.includes(".")) {
        // run ipapi 

        apiContentContainerEl.textContent = "";

        console.log("ipapi");

    } else {

        apiContentContainerEl.textContent = "";

        console.log("error");
    }


});


