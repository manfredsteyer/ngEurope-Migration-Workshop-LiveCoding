import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";
import {Flight} from "../shared/flight";
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'flight-search', // <flight-search>
    templateUrl: './flight-search.html'
})
export class FlightSearchComponent {

    // public flightService: FlightService;
    // public bookingEventService: BookingEventService;

    constructor(
        @Inject('flightService') private flightService: FlightService,
        @Inject('bookingEventService') private bookingEventService: BookingEventService) {

        // this.flightService = flightService;
        // this.bookingEventService = bookingEventService;
    }

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;

    public getFlights() {
        return this.flightService.flights;
    }

    public search() {

        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
                console.debug(resp);
            });
    }

    public select(f: Flight) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    }
}