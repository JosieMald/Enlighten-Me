// VARIABLES
var firstActivity = document.getElementById("activityOne");
var secondActivity = document.getElementById("activityTwo");
var thirdActivity = document.getElementById("activityThree");

var socialURL =
  "https://www.boredapi.com/api/activity?participants=2&participants=3&participants=4&participants=5&participants=6";

// ARRAYS
var activitiesData = [];

// DISPLAY ACTIVITIES TO PAGE
var activityPrice = localStorage.getItem("paidActivities");
var soloOrSocial = localStorage.getItem("soloOrSocial");

// API bored fetch to get solo/free data
function getSoloAPI() {
  for (var i = 0; i < 3; i++) {
    if (activityPrice == "y") {
      var soloURL =
        "https://www.boredapi.com/api/activity?participants=1&price=0.0";
    } else {
      soloURL =
        "https://www.boredapi.com/api/activity?participants=1&minprice=0.01&maxprice=0.1";
    }
    fetch(soloURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        activitiesData.push(data);
        if ( activitiesData.length === 3) {
          firstActivity.innerText = activitiesData[0].activity;
          secondActivity.innerText = activitiesData[1].activity;
          thirdActivity.innerText = activitiesData[2].activity;
        }
      })
    }
};

// API bored fetch to get social data
getSocialAPI = () => {
  for (var i = 0; i < 3; i++) {
    fetch(socialURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        activitiesData.push(data);
        if ( activitiesData.length === 3) {
          firstActivity.innerText = activitiesData[0].activity;
          secondActivity.innerText = activitiesData[1].activity;
          thirdActivity.innerText = activitiesData[2].activity;
        }
      });
  }
};


if (soloOrSocial === "solo") {
  getSoloAPI();
} else if (soloOrSocial === "social") {
  getSocialAPI();
};


