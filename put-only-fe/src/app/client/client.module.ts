import { NgModule } from '@angular/core'
import { ClientComponent } from './client.component'
import { ClientRoutingModule } from './client-routing.module'
import { ClientOverviewComponent } from './client-overview/client-overview.component'
import { MatTableModule } from '@angular/material/table'
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { SharedModule } from '../shared/shared.module'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { MyPaginatorIntl } from '@app/client/mat-paginator-intl'

@NgModule({
  declarations: [ClientComponent, ClientOverviewComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: MyPaginatorIntl() }],
})
export class ClientModule {}
