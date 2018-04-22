import {Component, OnInit} from "@angular/core";

import {Child, Passenger} from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                    [items]="passengers">
            </passenger-count>
            <div *ngFor="let passenger of passengers;">
                {{ passenger.fullname }}
            </div>
            <passenger-detail
                    *ngFor="let passenger of passengers;"
                    [detail]="passenger"
                    (remove)="handleRemove($event)"
                    (edit)="handleEdit($event)"
            >
            </passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor() {
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [
            {
                id: 1,
                fullname: 'John Doe',
                checkedIn: true,
                checkInDate: 1524379588459,
                children: null
            },
            {
                id: 2,
                fullname: 'Jane Doe',
                checkedIn: false,
                checkInDate: null,
                children: [
                    {
                        name: 'Ted',
                        age: 12
                    },
                    {
                        name: 'Chloe',
                        age: 8
                    },
                ]
            },
            {
                id: 3,
                fullname: 'Don Duckk',
                checkedIn: true,
                checkInDate: 1524379958754,
                children: [
                    {
                        name: 'Roxy',
                        age: 2
                    },
                ]
            },
        ]
    }

    handleRemove(event: Passenger) {
        console.log(event);
        this.passengers = this.passengers
            .filter((passenger: Passenger) => passenger.id !== event.id)
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers
            .map((passenger: Passenger) => {
                if (passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            })
    }
}