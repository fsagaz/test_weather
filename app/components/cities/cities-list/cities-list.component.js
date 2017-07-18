import controller from './cities-list.controller'

export const CitiesListComponent = {
    bindings: {
        cities: '<',
    },
    controller,
    template: `
  <h4>Showing temperatures at {{$ctrl.actualTime |date :  "dd.MM.y h:mm:ss" }} </h4>
    <ul class="list-group">
    <li ng-repeat="city in $ctrl.cities" data="city" class="list-group-item"">
      <h4 class="list-group-item-heading"> {{city.name}}</h4>
       Temperature: {{city.temp}}
      </li>

    </ul>
  `
}
