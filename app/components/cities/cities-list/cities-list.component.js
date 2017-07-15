import controller from './cities-list.controller'

export const CitiesListComponent = {
  bindings: {
    speakers: '<'
  },
  controller,
  template: `
    <ul class="collection">
      <city-item ng-repeat="city in $ctrl.cities" data="city">
      </city-item>
    </ul>
  `
}
