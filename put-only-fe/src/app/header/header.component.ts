import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import * as CoreActions from '@app/core/state/core.actions'
import {Theme, THEMES} from '@app/core/theme'
import {FormControl} from '@angular/forms'
import {selectTheme} from '@app/core/state/core.selector'
import {filter, tap} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  readonly themes = THEMES
  currentTheme = new FormControl<Theme>('light-theme')

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectTheme)
      .pipe(tap((theme) => this.currentTheme.patchValue(theme)))
      .subscribe()
    this.currentTheme.valueChanges
      .pipe(
        filter((theme): theme is Theme => !!theme),
        tap((theme) =>
          this.store.dispatch(CoreActions.changeTheme({ theme: theme }))
        )
      )
      .subscribe()
  }

  toggleSidenav() {
    this.store.dispatch(CoreActions.toggleSidenav())
  }
}
