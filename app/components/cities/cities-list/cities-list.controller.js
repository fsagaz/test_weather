class CitiesListController {
  constructor(CitiesService) {
    this.citiesService = CitiesService
    this.cities = [];
    this.cities_array=["Madrid", "Barcelona", "Berlin"];
    this.loadData();
    setInterval(() => this.loadData(), 15000);
  }

  loadData () {

     var cities_temp=[];
     var response;

     for (let i=0; i<this.cities_array.length; i ++){
       this.citiesService.getCitiesTemp(this.cities_array[i]).
            then(response => {
              cities_temp.push(response.main);
              }).then(response=>{
              cities_temp[i].name=this.cities_array[i];
              console.log(cities_temp+"citys temp")
              this.cities = cities_temp;
            }
            )


    }

     //return response
    //  for (var i=0; i<cities_array; i ++){
    //    this.citiesService.getCitiesTemp(cities_array[2]).
    //      then(response => {
    //        console.log(response)
    //        this.cities = response;
    //      })
    //  }
    //   console.log(cities_array[i]+"ddsd")
    //   this.citiesService.getCitiesTemp(cities_array[i]).
    //     then(response => {
    //       console.log(response)
    //       this.cities = response;
    //     })
    // }

    // this.citiesService.getCitiesTemp(city).
    //   then(response => {
    //     console.log(response)
    //     this.cities = response;
    //   })
  }
}

CitiesListController.$inject = ['CitiesService']

export default CitiesListController
