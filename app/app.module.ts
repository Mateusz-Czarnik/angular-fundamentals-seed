import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard-module";

import {HomeComponent} from "./home.component";

import {AppComponent} from './app.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        // angular modules
        BrowserModule,
        RouterModule.forRoot(routes),
        // custom modules
        PassengerDashboardModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
