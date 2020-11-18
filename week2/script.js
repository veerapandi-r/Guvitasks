var req=new XMLHttpRequest()
var req2=new XMLHttpRequest()
req.open('GET',"https://restcountries.eu/rest/v2/all",true)
req.send()
var data=[]
req.onload=function(){
   data =JSON.parse(this.response)
    console.log(data)
       callwetherreport(data)
    }
    function callwetherreport(data){
        data.forEach(function(con) {
            //console.log(con.latlng)
            var lat=con.latlng[0]
            var lon=con.latlng[1]
            var url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=b641c3a212e6155e6c8b041328dc162b"
            console.log(url)
            urls(url)
            
        })
        function urls(url)
        {
            req2.open('GET',url,true)
            req2.send()
           req2.onload=function(){
           var wether=JSON.parse(this.response)
         console.log(wether)
            }
        }
    }
    
