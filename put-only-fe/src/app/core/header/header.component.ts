import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import * as CoreActions from '@app/core/state/core.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}
  toggleSidenav() {
    this.store.dispatch(CoreActions.toggleSidenav())
  }
}
