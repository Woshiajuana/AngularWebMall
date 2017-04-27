/**路由*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TwoOneComponent } from './two/children/two-one.component';
import { TwoTwoComponent } from './two/children/two-two.component';

const appChildRoutes: Routes = [
    {path: '', redirectTo: 'two-one', pathMatch: 'full'},
    {path: 'two-one', component: TwoOneComponent },
    {path: 'two-two', component: TwoTwoComponent }
];

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'one', component: OneComponent },
    { path: 'two', component: TwoComponent, children: appChildRoutes }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutes {}
