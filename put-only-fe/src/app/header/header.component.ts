import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import * as CoreActions from '@app/core/state/core.actions'
import { selectTheme } from '@app/core/state/core.selector'
import { THEMES, Theme } from '@app/core/theme'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

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

  ngOnInit(): void {
    this.currentTheme$ = this.store.select(selectTheme)
  }

  toggleSidenav(): void {
    this.store.dispatch(CoreActions.toggleSidenav())
  }

  onChange(selection: MatSelectChange): void {
    this.store.dispatch(CoreActions.changeTheme({ theme: selection.value }))
  }
}
