import controller from './cities-list.controller'

export const CitiesListComponent = {
  bindings: {
    cities: '<'
  },
  controller,
  template: `
    <ul class="collection">


      <li ng-repeat="city in $ctrl.cities" data="city">
       {{city.name}} : {{city.temp}}
      </li>

    </ul>
  `
}
