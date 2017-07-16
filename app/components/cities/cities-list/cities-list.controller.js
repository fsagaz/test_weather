class CitiesListController {
  constructor(CitiesService) {
    this.citiesService = CitiesService
    this.cities = []
    this.loadData();
  }





  loadData () {

    var city="Madrid"
    this.citiesService.getCitiesTemp(city)
      then(response => {
        this.cities = response.data
      })
  }
}

CitiesListController.$inject = ['CitiesService']

export default CitiesListController
