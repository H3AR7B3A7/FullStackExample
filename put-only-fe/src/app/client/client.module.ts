import { NgModule } from '@angular/core'
import { ClientComponent } from './client.component'
import { ClientRoutingModule } from './client-routing.module'
import { ClientOverviewComponent } from './client-overview/client-overview.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [ClientComponent, ClientOverviewComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class ClientModule {}
