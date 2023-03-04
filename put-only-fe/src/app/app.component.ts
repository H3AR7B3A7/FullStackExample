import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as CoreActions from '@app/core/state/core.actions'
import { selectSidenav, selectTheme } from '@app/core/state/core.selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme$!: Observable<string>
  sidenav$!: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit() {
    this.theme$ = this.store.select(selectTheme)
    this.sidenav$ = this.store.select(selectSidenav)
  }

  openChanged(showSidenav: boolean) {
    this.store.dispatch(CoreActions.openSidenav({ open: showSidenav }))
  }
}
