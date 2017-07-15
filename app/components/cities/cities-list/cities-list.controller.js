class CitiesListController {
  constructor(CitiesService) {
    this.citiesService = CitiesService
    this.cities = []
    this.loadData
  }

  loadData () {
    this.citiesService.getSpeakers()
      then(response => {
        this.cities = response.data
      })
  }
}

CitiesListController.$inject = ['CitiesService']

export default CitiesListController
