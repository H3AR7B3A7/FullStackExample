import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Client } from '@app/client/client'
import {
  loadClients,
  showForm,
} from '@app/client/state/actions/client-page.actions'
import {
  selectClientErrorMessage,
  selectClientLoading,
  selectClientShowForm,
  selectClients,
} from '@app/client/state/client.selector'
import { Store } from '@ngrx/store'
import { Observable, combineLatest, map } from 'rxjs'

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
  clients$!: Observable<Client[]>
  errorMessage$!: Observable<string>
  loading$!: Observable<boolean>
  showForm$!: Observable<boolean>
  showButtons$!: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit() {
    this.clients$ = this.store.select(selectClients)
    this.errorMessage$ = this.store.select(selectClientErrorMessage)
    this.loading$ = this.store.select(selectClientLoading)
    this.showForm$ = this.store.select(selectClientShowForm)
    this.showButtons$ = combineLatest([this.errorMessage$, this.loading$]).pipe(
      map(([error, loading]) => {
        return !error && !loading
      })
    )
    this.store.dispatch(loadClients())
  }

  addClicked() {
    this.store.dispatch(showForm({ value: true }))
  }
}
