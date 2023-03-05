import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {Client} from '@app/client/client'
import {selectClientErrorMessage, selectClients,} from '@app/client/state/client.selector'
import {loadClients} from '@app/client/state/actions/client-page.actions'

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {
  clients$!: Observable<Client[]>
  errorMessage$!: Observable<string>
  constructor(private store: Store) {}

  ngOnInit() {
    this.clients$ = this.store.select(selectClients)
    this.errorMessage$ = this.store.select(selectClientErrorMessage)
    this.store.dispatch(loadClients())
  }
}
