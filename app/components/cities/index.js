import angular from 'angular'

//import { CitiesItemComponent } from './speaker-item/speaker-item.component'
import { CitiesListComponent } from './cities-list/cities-list.component'
import CitiesService from './cities.service'

const city = angular
  .module('cities', [])
  .service('CitiesService', CitiesService)
  //.component('speakerItem', SpeakerItemComponent)
  .component('citiesList', CitiesListComponent)
  //.component('speakerDetail', SpeakerDetailComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('cities', {
        url: '/',
        component: 'citiesList'
      })

    $urlRouterProvider.otherwise('/')
  })
  .name

export default city
