class CitiesService {
  constructor ($http, apiEndpoint) {
    this.$http = $http;
    this.ApiEndPoint = "http://api.openweathermap.org/data/2.5/weather?q=";
    this.ApiKey="d44a9a4bee745cb891f925b29dea38c0";
  }
  getCitiesTemp (city) {
    var locationUrl = this.ApiEndPoint + city + "&APPID="+this.ApiKey+"&format=json";

    var myResponseData = this.$http.get(locationUrl).then(function (response) {
          return response.data;
          });
        return myResponseData
      }
}

CitiesService.$inject = ['$http']

export default CitiesService
