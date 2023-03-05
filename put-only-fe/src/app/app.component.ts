import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import * as CoreActions from '@app/core/state/core.actions'
import {selectSidenav, selectTheme} from '@app/core/state/core.selector'
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  theme$!: Observable<string>
  sidenav$!: Observable<boolean>
  routes: Route[] = []

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.theme$ = this.store.select(selectTheme)
    this.sidenav$ = this.store.select(selectSidenav)
    this.routes = this.router.config.filter((route) => !!route.title)
  }

  openChanged(showSidenav: boolean) {
    this.store.dispatch(CoreActions.openSidenav({ open: showSidenav }))
  }
}
