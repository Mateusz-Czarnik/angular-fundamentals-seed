import {Component} from "@angular/core";

import {Child, Passenger} from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
            <span
                    class="status"
                    [class.checked-in]="passenger.checkedIn"></span>
                    {{i}}: {{passenger.fullname}}
                    <div class="date">
                        Check in date:
                        {{ passenger.checkInDate ? (passenger.checkInDate) : 'Not checked in'}}
                    </div>
                </li>
            </ul>
        </div>
    `
})

export class PassengerDashboardComponent {
    passengers: Passenger[] = [
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