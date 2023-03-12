import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CLIENT_TYPES } from '@app/client/client-type'
import { showForm } from '@app/client/state/actions/client-page.actions'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  clientTypes = CLIENT_TYPES

  constructor(private store: Store) {}

  submit(): void {
    this.store.dispatch(showForm({ value: false }))
  }

  cancel(): void {
    this.store.dispatch(showForm({ value: false }))
  }
}
