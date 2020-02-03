const apiWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';

//function start() {}
navigator.geolocation.getCurrentPosition(function (e) {
    var location = {
        "lat": e.coords.latitude,
        "lon": e.coords.longitude
    }
    getCurrentWeather(location);
    //getForecastWeather(location);
}, function (e) {
    alert("error getCurrentPosition")
});

/* var kToC = function(temp){
    return (temp - 273.15).toFixed(1);
} */


var getCurrentWeather = function (data) {
    var url = '';
    if (data != undefined && data != null) {
        if (data.lat != undefined && data.lon != undefined) {
            url = apiWeatherUrl + 'lat=' + data.lat + '&lon=' + data.lon + '&appid=e0e6f0145db5b87647c4cf905da42f49';
        }
        if (typeof (data) == "string") {
            url = apiWeatherUrl + 'q=' + data + '&appid=e0e6f0145db5b87647c4cf905da42f49';
        }
        /* console.log(url); */
        $.ajax({
            url: url,
            success: function (result) {
                console.log(result);

                var temp = result.main.temp.toFixed(1);
                var tempTest = (temp - 273.15).toFixed(1);
            
                var nume = result.name;
                var tara = result.sys.country;

                $(".temp").append(tempTest);
                $(".city").append(nume);
                $(".country").append(tara);


                /* $("#exempluId").val = result.name;
                $("#exempluId").val = result.weather[0].main; */
                //     $scope.apiCurrentResult = result;
                //     $scope.apiCurrentResult.main.temp = $scope.apiCurrentResult.main.temp.toFixed(1);
                //     $scope.searchLocation = $scope.apiCurrentResult.name;
                //     $scope.speak($scope.apiCurrentResult.main.temp);
                //     $scope.$apply();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status, thrownError);
            }
        })
    } else {
        alert("getCurrentWeather data undefined");
    }

}