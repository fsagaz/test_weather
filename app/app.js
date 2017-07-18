// /app/app.js
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngRedux      from 'ng-redux';

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'
import { RootReducer } from './reducers';
const root = angular
  .module('weatherApp', [
    uiRouter,
    ngRedux,
    common,
    components
  ])
  .component('weatherApp', AppComponent)
  

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['weatherApp']))

export default root
