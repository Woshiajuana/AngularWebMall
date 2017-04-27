import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TwoOneComponent } from './two/children/two-one.component';
import { TwoTwoComponent } from './two/children/two-two.component';
import { AppRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        OneComponent,
        TwoComponent,
        TwoOneComponent,
        TwoTwoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
