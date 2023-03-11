import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { CustomFunctions } from '@app/shared/custom-functions'
import { Observable, map } from 'rxjs'

import { Client } from '../client'

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientOverviewComponent implements AfterViewInit {
  @Input()
  clients$!: Observable<Client[]>
  @Input()
  errorMessage = ''
  @Input()
  loading!: boolean

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  dataSource$!: Observable<MatTableDataSource<Client>>
  displayedColumns = ['clientId', 'secured']
  private readonly dataSource = new MatTableDataSource<Client>()

  ngAfterViewInit() {
    this.dataSource$ = this.clients$.pipe(
      map((clients) => {
        this.dataSource.sortingDataAccessor =
          CustomFunctions.caseInsensitiveSortingDataAccessor
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        this.dataSource.data = clients
        return this.dataSource
      })
    )
  }
}
