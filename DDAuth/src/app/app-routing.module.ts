import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { CallbackComponent } from './callback.component';




const routes: Routes = [
  {
    path : '',
    redirectTo : 'deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent,
  },
  {
    path: 'specialDeals',
    component: PrivateDealsComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
