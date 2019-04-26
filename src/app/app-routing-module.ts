import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DetailComponent} from './detail/detail.component';



const appRoutes: Routes = [
  { path: ':id', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

