import { NgModule } from '@angular/core'
import { ClientComponent } from './client.component'
import { ClientRoutingModule } from './client-routing.module'
import { ClientOverviewComponent } from './client-overview/client-overview.component'
import { MatPaginatorIntl } from '@angular/material/paginator'
import { SharedModule } from '../shared/shared.module'
import { MyPaginatorIntl } from '@app/client/mat-paginator-intl'
import { StoreModule } from '@ngrx/store'
import { clientReducer } from '@app/client/state/client.reducer'
import { EffectsModule } from '@ngrx/effects'
import { ClientEffects } from '@app/client/state/client.effects'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [ClientComponent, ClientOverviewComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    StoreModule.forFeature('client', clientReducer),
    EffectsModule.forFeature([ClientEffects]),
    MatProgressSpinnerModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: MyPaginatorIntl() }],
})
export class ClientModule {}
