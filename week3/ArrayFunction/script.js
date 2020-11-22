try{
    var req=new XMLHttpRequest()
    req.open('GET',"https://restcountries.eu/rest/v2/all",false)
    var data=[]
    req.onload=function(){
        data=JSON.parse(this.response)
    }
    req.send()
    console.log(data)
    const filterRegion=data.filter((country)=>{
        return (country.region).toLowerCase()==="asia"
    });
    console.log(filterRegion)
    const filterPopulation=data.filter((country)=>{
        return country.population<200000
    });
    console.log(filterPopulation)
    data.forEach((country)=>{
    console.log("Country Name ",country.name,"Country Capital ",country.capital,"Country Flag Url ",country.flag)
    });
    const totalPopulation=data.reduce(function (a, b) {
        return {population: a.population + b.population};
      });
    console.log("Total world population",totalPopulation)
    const asiaPopulation=filterRegion.reduce(function (a, b) {
        return {population: a.population + b.population};
      });
      console.log("Asia population ",asiaPopulation)
      const filterUSD=data.filter((country)=>{
         // console.log(country.currencies)
         let currency=country.currencies;
         let currencies=currency.filter((curr)=>{
             return curr.code==="USD"
         });
         if(currencies.length>0){
             return true;
         }else{
             return false;
         }
    });
    console.log("Countries using USD ",filterUSD);
}
catch(err)
{
    console.log(err)
}
