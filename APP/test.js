class t_events
{
    events;
    constructor()
    {
        this.events = [];
    }
    add_event(event_name, listener)
    {
        if(this.events.length == 0){
            this.events.push(event_name);
            this.events[event_name] = [];
        }
        else
            if(this.events.indexOf(event_name) == -1){
            this.events.push(event_name);
            this.events[event_name] = []; 
            }
        this.events[event_name].push(listener);
    }
    call_event(event_name, args)
    {
        this.events[event_name].forEach(f => f(args));
    }
}

class View{
    events;
    constructor(){
        document.getElementById("id_button").addEventListener("click", this.on_solve_clicked.bind(this));
    }
    set_events(events)
    {
        this.events = events;
    }
    on_solve_clicked()
    {
        //ar trebuii sa apelam on_solve din controller
        //dar nu putem direct
        //din lista de functii, apelam functia on_solve
        this.events.call_event("on_solve_clicked_uab");
    }
    get_a()
    {
        return document.getElementById("getWeatherLocation").value;
    }
    set_solutions_para(solutions)
    {
        $(".temp").append(solutions.temp);
        $(".city").append(solution.name);
    }
}

class Model{
    loc;

    constructor(){
        this.apiWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    }

    getCurrentWeather = function(data){
        var url = '';
        if(data != undefined && data != null){
            // if(data.lat != undefined && data.lon != undefined){
            //     url =  $scope.apiWeatherUrl + 'lat='+data.lat+'&lon='+data.lon+'&appid=e0e6f0145db5b87647c4cf905da42f49';
            // }
            if(typeof(data) == "string"){
                url =  this.apiWeatherUrl + 'q=' + data+'&appid=e0e6f0145db5b87647c4cf905da42f49';
            }
            var returnObj = {};
            $.ajax({url: url, success: function(result){
                // $scope.apiCurrentResult = result;
                // $scope.apiCurrentResult.main.temp = $scope.apiCurrentResult.main.temp.toFixed(1);
                // $scope.searchLocation = $scope.apiCurrentResult.name;
                // $scope.speak($scope.apiCurrentResult.main.temp);
                // $scope.$apply();
                returnObj = {
                    "temp": result.main.temp.toFixed(1),
                    "name": result.main.name,
                }
            },error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status,thrownError);
              }
            })
            return returnObj;
           
        }else{
            alert("getCurrentWeather data undefined");
        }
       
    }
}


class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;

         // creiem o lista de functii
         var events = new t_events();
         // adaugam on_solve(din contriller) in lista de functii
         events.add_event("on_solve_clicked_uab", this.on_solve.bind(this));
         //transmitem lista de functii la view
         this.view.set_events(events);
        
         on_solve()
         {
            var a = this.view.get_a();
     
             var weatherObj = this.model.getCurrentWeather(a);
             this.view.set_solutions_para(weatherObj);
         }
    }
}
const app = new Controller(new Model(), new View())