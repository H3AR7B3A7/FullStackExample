import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorIntl } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MyPaginatorIntl } from '@app/client/mat-paginator-intl'
import { ClientEffects } from '@app/client/state/client.effects'
import { clientReducer } from '@app/client/state/client.reducer'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { SharedModule } from '../shared/shared.module'
import { ClientFormComponent } from './client-form/client-form.component'
import { ClientOverviewComponent } from './client-overview/client-overview.component'
import { ClientRoutingModule } from './client-routing.module'
import { ClientComponent } from './client.component'

@NgModule({
  declarations: [ClientComponent, ClientOverviewComponent, ClientFormComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    StoreModule.forFeature('client', clientReducer),
    EffectsModule.forFeature([ClientEffects]),
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: MyPaginatorIntl() }],
})
export class ClientModule {}
