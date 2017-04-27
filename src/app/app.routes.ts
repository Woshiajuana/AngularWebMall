/**路由*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'one', component: OneComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {}
