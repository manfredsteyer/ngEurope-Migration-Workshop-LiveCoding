import {Flight} from '../shared/flight';

import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    select() {
        this.selectedItem = this.item;
        this.selectedItemChange(this.item);
    }
}

export let FlightCardComponent: angular.IComponentOptions = {
        controller: FlightCardController,
        templateUrl: './flight-card.directive.html',
        transclude: true,
        bindings: {
            item: '<',
            selectedItem: '<',
            selectedItemChange: '&'
        }
    };
