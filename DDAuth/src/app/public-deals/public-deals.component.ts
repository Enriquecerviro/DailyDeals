import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';
// We haven't defined these services yet
import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';
@Component({
  selector: 'app-public-deals',
  template: `
    <p>
      public-deals works!
    </p>
  `,
  styles: []
})
export class PublicDealsComponent implements OnInit {

  dealsSub : Subscription;
  PublicDeals: Deal[];
  error: any;

  constructor(

    public dealService: DealService,
    public AuthService: AuthService
  ) { }

  ngOnInit() {
    this.dealsSub = this.dealService
      .getPublicDeals() //TODO: METODOS DEL DEAL.SERVICE
      .subscribe(
        deals => this.PublicDeals = deals,
        err => this.error = err
      );
  }
  ngOnDestroy(){

    this.dealsSub.unsubscribe();//PARA PREVENIR MEMORY LEAKS
  }

}
