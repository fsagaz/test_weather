import angular from 'angular'

import city from './cities'

const components = angular
  .module('app.components', [city])
  .name

export default city
