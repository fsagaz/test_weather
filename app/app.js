// /app/app.js
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
  .module('weatherApp', [
    uiRouter,
    common,
    components
  ])
  .component('weatherApp', AppComponent)

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['weatherApp']))

export default root
