// /app/components/speaker/cities.service.js
class CitiesService {
  constructor ($http) {
    this.$http = $http
  }
  getCitiesTemp (city) {
    var locationUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d44a9a4bee745cb891f925b29dea38c0&format=json";

    return this.$http.get(locationUrl).then(response => response.data)
  }
}

CitiesService.$inject = ['$http']

export default CitiesService
