const express = require("express");
const app = express();
const https = require("https");

app.get("/", function (req, res) {
    res.sendFile("../index.html");
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});


// const query = "Kolhapur";
//     const appID = "3ce1c849f7784212f2497377c2ef5afa";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appID+"&units="+unit;
//     https.get(url, function (response) {
//         console.log(response.statusCode);
//         response.on("data", function (data) {
//             const weatherData = JSON.parse(data);
//             //console.log(weatherData);
//             const windSpeed = weatherData.wind.speed;
//             console.log(windSpeed);
//             const desc = weatherData.weather[0].description;
//             const temp = weatherData.main.temp;
//             const icon = weatherData.weather[0].icon;
//             const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
//             res.write("<h1>The temperature in Kolhapur is "+temp+" degrees Celsius<h1>");
//             res.write("The weather description "+desc);
//             res.write("<img src="+imageURL+">");
//             res.send();
//         })
//     })