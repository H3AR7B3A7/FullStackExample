import { NgModule } from '@angular/core'
import { ClientComponent } from './client.component'
import { ClientRoutingModule } from './client-routing.module'
import { ClientOverviewComponent } from './client-overview/client-overview.component'
import { MatPaginatorIntl } from '@angular/material/paginator'
import { SharedModule } from '../shared/shared.module'
import { MyPaginatorIntl } from '@app/client/mat-paginator-intl'

@NgModule({
  declarations: [ClientComponent, ClientOverviewComponent],
  imports: [SharedModule, ClientRoutingModule],
  providers: [{ provide: MatPaginatorIntl, useValue: MyPaginatorIntl() }],
})
export class ClientModule {}
