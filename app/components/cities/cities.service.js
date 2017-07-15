// /app/components/speaker/cities.service.js
class CitiesService {
  constructor ($http) {
    this.$http = $http
  }
  getCitiesTemp () {
    return this.$http.get('/api/cities').then(response => response.data)
  }
}

CitiesService.$inject = ['$http']

export default CitiesService
