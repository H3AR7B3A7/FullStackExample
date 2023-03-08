import { ChangeDetectionStrategy, Component } from '@angular/core'
import {Store} from '@ngrx/store'
import {showForm} from '@app/client/state/actions/client-page.actions'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientFormComponent {

  constructor(private store: Store) {}

  submit() {
    this.store.dispatch(showForm({ value : false }))
  }

  cancel() {
    this.store.dispatch(showForm({ value : false }))
  }
}
