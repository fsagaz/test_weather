import angular from 'angular'

import { CitiesListComponent } from './cities-list/cities-list.component'
import CitiesService from './cities.service'

const city = angular
  .module('cities', [])
  .service('CitiesService', CitiesService)
  .component('citiesList', CitiesListComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('cities', {
        url: '/',
        component: 'citiesList'
      })

    $urlRouterProvider.otherwise('/')
  }).name

export default city
