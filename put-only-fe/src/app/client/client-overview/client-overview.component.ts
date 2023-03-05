import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Client } from '../client'
import { MatTableDataSource } from '@angular/material/table'
import { map, Observable } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientOverviewComponent implements OnInit {
  @Input()
  clients$!: Observable<Client[]>
  @Input()
  errorMessage = ''
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  private readonly dataSource = new MatTableDataSource<Client>()
  dataSource$!: Observable<MatTableDataSource<Client>>
  displayedColumns = ['clientId', 'secured']

  ngOnInit(): void {
    this.dataSource$ = this.clients$.pipe(
      map((clients) => {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        this.dataSource.data = clients
        return this.dataSource
      })
    )
  }
}
