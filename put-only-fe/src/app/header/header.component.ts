import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as CoreActions from '@app/core/state/core.actions'
import { Theme, THEMES } from '@app/core/theme'
import { selectTheme } from '@app/core/state/core.selector'
import { Observable } from 'rxjs'
import { MatSelectChange } from '@angular/material/select'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly themes = THEMES
  currentTheme$!: Observable<Theme>

  constructor(private store: Store) {}

  ngOnInit() {
    this.currentTheme$ = this.store.select(selectTheme)
  }

  toggleSidenav() {
    this.store.dispatch(CoreActions.toggleSidenav())
  }

  onChange(selection: MatSelectChange) {
    this.store.dispatch(CoreActions.changeTheme({ theme: selection.value }))
  }
}
